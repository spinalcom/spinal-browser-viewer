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
})({"4nv7I":[function(require,module,exports,__globalThis) {
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
var _spriteManager = require("./src/js/spriteManager");
// vue files
// import RepartitionningPanel from "./src/vue/panels/RepartitionningPanel.vue"
// button files
// import {ButtonAddRepartitionningContext} from "./src/buttons/ButtonAddRepartitionningContext";
// import {ButtonRepartitionning} from "./src/buttons/ButtonRepartitionning";
var _buttonVisualizeHardwareContext = require("./src/buttons/ButtonVisualizeHardwareContext");
var _buttonSavePositionOfBimObject = require("./src/buttons/ButtonSavePositionOfBimObject");
var _buttonSavePositionOfHardwareContextObjects = require("./src/buttons/ButtonSavePositionOfHardwareContextObjects");
(0, _vueDefault.default).use((0, _vuetifyDefault.default));
/* ******* */ /* BUTTONS */ /* ******* */ // spinalContextMenuService.registerApp("GraphManagerTopBar", new ButtonAddDeviceProfileContext(), [7]);
// spinalContextMenuService.registerApp("GraphManagerSideBar", new ButtonAddDeviceProfiles(), [7]);
// spinalContextMenuService.registerApp("GraphManagerTopBar", new ButtonAddRepartitionningContext(), [7]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonSavePositionOfBimObject.ButtonSavePositionOfBimObject)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonVisualizeHardwareContext.ButtonVisualizeHardwareContext)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonSavePositionOfHardwareContextObjects.ButtonSavePositionOfHardwareContextObjects)(), [
    7
]); /* ********** */  /* EXTENSIONS */  /* ********** */  // SpinalMountExtention.mount( {
 //   // name registered.
 //   name: "DialogRepartitionning",
 //   // Vue.extend to create a Compoment constructor
 //   vueMountComponent: Vue.extend( DialogRepartitionning ),
 //   // where to  append the Compoment
 //   parentContainer: document.body
 // }
 // );
 // create "addDeviceComponentExtension" extension whiwh refers to "./vue/addDeviceComponent.vue"
 // const RepartitionningPanelExtension = SpinalForgeExtention.createExtention({
 //   name: "RepartitionningPanelExtension",
 //   vueMountComponent: Vue.extend(RepartitionningPanel),
 //   panel: {
 //     title: "Generate/Update a Repartitionning Context",
 //     // // classname: "spinal-pannel",
 //     closeBehaviour: "hide" // if something else panel is deleted
 //   },
 //   style: {
 //     left: "405px",
 //     width: "700px",
 //     height: '250px'
 //   },
 // //   onLoad: function(){},
 // //   onUnLoad: function(){}
 // });
 // SpinalForgeExtention.registerExtention("RepartitionningPanelExtension", RepartitionningPanelExtension);

},{"vue":"hO3OD","vuetify":"7Gvgu","spinal-env-viewer-plugin-forge":"lCxRJ","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","spinal-env-viewer-context-menu-service":"3h19D","./src/js/spriteManager":"lHN1o","./src/buttons/ButtonVisualizeHardwareContext":"mGvlI","./src/buttons/ButtonSavePositionOfBimObject":"gHzZ3","./src/buttons/ButtonSavePositionOfHardwareContextObjects":"gRem5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"lHN1o":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSprites", ()=>createSprites);
// passage de la souris sur un sprite
// async function onSpriteHovered(event) {
//     console.log("event");
//     console.log(event);
//     console.log("props");
//     const dataVizExtn = await window.spinal.ForgeViewer.viewer.loadExtension("Autodesk.DataVisualization");
//     let property = await dataVizExtn.getPropertiesFromDbId(event.dbId);
//     console.log(property);
// }
// event click sur sprite
// async function onSpriteClicked(event){
//     if(event.dbId !=0){
//         console.log(event);
//         let spriteViewable = getSpriteFromDbid(event.dbId);
//         if(spriteViewable != undefined){
//             console.log(spriteViewable);
//         }
//     }
// }
parcelHelpers.export(exports, "getSpriteFromDbid", ()=>getSpriteFromDbid);
parcelHelpers.export(exports, "getSpriteFromNodeId", ()=>getSpriteFromNodeId);
var _constants = require("../constants");
// const spriteIconUrl = require("../assets/device.svg");
// let viewableData = null;
let viewableData = undefined;
var dbId = 1;
async function createSprites(datas = [
    {
        position: {
            x: null,
            y: null,
            z: null
        },
        dbid: null,
        spinalModel: {
            nodeId: "",
            spriteType: ""
        }
    }
], /*dataOfPositionAndDbid, spinalModel={ nodeId: "", spriteType: "" },*/ onHoveringFunction, onClickFunction) {
    // console.log(datas);
    this.viewer = window.spinal.ForgeViewer.viewer;
    const dataVizExtn = await this.viewer.loadExtension("Autodesk.DataVisualization");
    const DataVizCore = Autodesk.DataVisualization.Core;
    const viewableType = DataVizCore.ViewableType.SPRITE;
    // let viewableData = new DataVizCore.ViewableData();
    if (viewableData == undefined) viewableData = new DataVizCore.ViewableData();
    // viewableData = new DataVizCore.ViewableData();
    viewableData.spriteSize = 30;
    for (let elt of datas){
        let spriteColor = null;
        let spriteIconUrl = null;
        if (elt.spinalModel != undefined) {
            let exists = spriteExists(elt.spinalModel.nodeId);
            if (exists == false) {
                if (elt.spinalModel.spriteType == "Lamp") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).light;
                    spriteColor = new THREE.Color(0xFFFF00);
                } else if (elt.spinalModel.spriteType == "Remote Controller") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).remote_controller;
                    spriteColor = new THREE.Color(0x0000FF);
                } else if (elt.spinalModel.spriteType == "Device") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).device;
                    spriteColor = new THREE.Color(0x0000FF);
                } else if (elt.spinalModel.spriteType == "Blind") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).blind;
                    spriteColor = new THREE.Color(0x00FF00);
                } else if (elt.spinalModel.spriteType == "Windows Contact") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).windows_contact;
                    spriteColor = new THREE.Color(0xFF0000);
                } else if (elt.spinalModel.spriteType == "Fan Coil") {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).fan_coil;
                    spriteColor = new THREE.Color(0xCC8899);
                } else {
                    spriteIconUrl = (0, _constants.SPRITE_ICONS).default;
                    spriteColor = new THREE.Color(0x00FF00);
                }
                const style = new DataVizCore.ViewableStyle(viewableType, spriteColor, spriteIconUrl);
                const viewable = new DataVizCore.SpriteViewable(elt.position, style, elt.dbid);
                viewable.info = elt.spinalModel;
                viewableData.addViewable(viewable);
            }
        }
    // else {
    //     spriteIconUrl = SPRITE_ICONS.default;
    //     spriteColor = new THREE.Color(0x00FF00);
    // }
    // const style = new DataVizCore.ViewableStyle(
    //     viewableType,
    //     spriteColor,
    //     spriteIconUrl
    // );
    // const viewable = new DataVizCore.SpriteViewable(elt.position, style, elt.dbid);
    // viewable.info = elt.spinalModel;
    // viewableData.addViewable(viewable);
    }
    // dataOfPositionAndDbid.forEach(data => {
    //     const viewable = new DataVizCore.SpriteViewable(data.position, style, data.dbid);
    //     viewable.info = spinalModel;
    //     console.log(data.dbid);
    //     viewableData.addViewable(viewable);
    // })
    await viewableData.finish();
    dataVizExtn.addViewables(viewableData);
    const showViewables = true;
    const enableOcclusion = true;
    // events
    // this.viewer.addEventListener(DataVizCore.MOUSE_HOVERING, onSpriteHovered);
    // this.viewer.addEventListener(DataVizCore.MOUSE_CLICK, onSpriteClicked);
    if (onClickFunction != undefined) this.viewer.addEventListener(DataVizCore.MOUSE_CLICK, onClickFunction);
    if (onHoveringFunction != undefined) this.viewer.addEventListener(DataVizCore.MOUSE_HOVERING, onHoveringFunction);
    // show & hide
    dataVizExtn.showHideViewables(showViewables, enableOcclusion);
}
function getSpriteFromDbid(dbId) {
    let sprite = undefined;
    let index = viewableData.viewables.findIndex((elt)=>elt.dbId == dbId);
    if (index > -1) sprite = viewableData.viewables[index];
    return sprite;
}
function getSpriteFromNodeId(nodeId) {
    let sprite = undefined;
    let index = viewableData.viewables.findIndex((elt)=>{
        if (elt.info != undefined) return elt.info.nodeId == nodeId;
        return false;
    });
    if (index > -1) sprite = viewableData.viewables[index];
    return sprite;
}
// function spriteExists(nodeId) {
//     let index = viewableData.viewables.findIndex(elt => {
//         // console.log(elt);
//         if (elt.info != undefined) {
//             return elt.info.nodeId == nodeId;
//         }
//         return false;
//     });
//     console.log(index);
//     if (index > -1) {
//         return true;
//     }
//     else return false;
// }
function spriteExists(nodeId) {
    return false;
}

},{"../constants":"5l0Re","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5l0Re":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SPATIAL", ()=>SPATIAL);
parcelHelpers.export(exports, "REPARTITIONNING", ()=>REPARTITIONNING);
parcelHelpers.export(exports, "SELECTrelationList", ()=>SELECTrelationList);
parcelHelpers.export(exports, "utilities", ()=>utilities);
parcelHelpers.export(exports, "SPRITE_ICONS", ()=>SPRITE_ICONS);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const SPATIAL = Object.freeze({
    // floors
    FLOOR_TYPE: "geographicFloor",
    FLOOR_TO_ROOM_RELATION: "hasGeographicRoom",
    ROOM_TO_EQUIPMENT_RELATION: "hasBimObject"
});
const REPARTITIONNING = Object.freeze({
    CTX_TO_FLOOR_RELATION: "hasRepartitionningFloor",
    FLOOR_TO_ROOM_RELATION: "hasRepartitionningRoom"
});
const SELECTrelationList = [
    (0, _constants.SITE_RELATION),
    (0, _constants.BUILDING_RELATION),
    (0, _constants.FLOOR_RELATION),
    (0, _constants.ZONE_RELATION),
    (0, _constants.ROOM_RELATION),
    (0, _constants.EQUIPMENT_RELATION),
    (0, _constants.REFERENCE_RELATION),
    `${(0, _constants.REFERENCE_RELATION)}.ROOM`,
    "hasBIMObject"
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
const SPRITE_ICONS = {
    // device: __dirname + "/assets/device.svg"
    device: require("8f9f4707eac9604c"),
    light: require("45bd9eaee332b51c"),
    default: require("529d4846e9c43fdd"),
    remote_controller: require("999048a0a84f7809"),
    windows_contact: require("367b104faa05b9bd"),
    fan_coil: require("e36a7b72b5ff178c"),
    blind: require("4700b1f4d08d9eee")
};

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","8f9f4707eac9604c":"bAxNg","45bd9eaee332b51c":"bZk3K","529d4846e9c43fdd":"dY5xu","999048a0a84f7809":"hXQGJ","367b104faa05b9bd":"lLv1H","e36a7b72b5ff178c":"jBozr","4700b1f4d08d9eee":"7b3X4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bAxNg":[function() {},{}],"bZk3K":[function() {},{}],"dY5xu":[function() {},{}],"hXQGJ":[function() {},{}],"lLv1H":[function() {},{}],"jBozr":[function() {},{}],"7b3X4":[function() {},{}],"mGvlI":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonVisualizeHardwareContext", ()=>ButtonVisualizeHardwareContext);
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _visualisationManager = require("../js/visualisationManager");
const { spinalPanelManagerService } = require("c8cbce924672f973");
const path = require("5cf43a9e68440ffc");
class ButtonVisualizeHardwareContext extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Visualize Hardware Context", "test description", {
            icon: "donut_large",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    // this.action = this.openPanel.bind( this );
    }
    isShown(option) {
        if (option.selectedNode.type.get() === 'network' && option.context.type.get() == "networkTreeContext") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async action(option) {
        console.log(option);
        await (0, _visualisationManager.visualizeHardwareContext)(option.selectedNode.id.get());
        console.log("DONE");
    }
}

},{"spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-env-viewer-context-menu-service":"3h19D","../js/visualisationManager":"8IFts","c8cbce924672f973":"egTXY","5cf43a9e68440ffc":"gfVel","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8IFts":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "savePositionOfBimObject", ()=>savePositionOfBimObject);
parcelHelpers.export(exports, "savePositionOfHardwareContextBimObjects", ()=>savePositionOfHardwareContextBimObjects);
parcelHelpers.export(exports, "getPositionAttribute", ()=>getPositionAttribute);
parcelHelpers.export(exports, "visualizeHardwareContext", ()=>visualizeHardwareContext);
parcelHelpers.export(exports, "visualizeRepartitionningContext", ()=>visualizeRepartitionningContext);
parcelHelpers.export(exports, "redrawMasterSlaveLines", ()=>redrawMasterSlaveLines);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _viewerManager = require("./viewerManager");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginDocumentationServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginDocumentationService);
var _spriteManager = require("./spriteManager");
var _threeJsManager = require("./threeJsManager");
const { spinalPanelManagerService } = require("ec2d3d333f67fd8e");
async function savePositionOfBimObject(parentId) {
    const categoryName = "Spatial";
    const attributeName = "XYZ center";
    // const attributeName = "xyz center";
    let spatial = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType('geographicContext');
    let spatialId = spatial[0].info.id.get();
    let rooms = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(parentId, spatialId, (node)=>{
        if (node.info.type.get() == "geographicRoom") {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            return true;
        } else return false;
    });
    for (const rom of rooms){
        // console.log(rom);
        let bimObjects = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(rom.id.get(), [
            "hasBimObject",
            "hasReferenceObject.ROOM"
        ]);
        // console.log(bimObjects);
        // console.log("next");
        for (const bimObj of bimObjects){
            // console.log(bimObj);
            let bimObjNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObj.id.get());
            let position = await _viewerManager.getPositionFromBimFileIdAndDbid(bimObj.bimFileId.get(), bimObj.dbid.get());
            if (position != undefined) {
                let attributeValue = position.x + ";" + position.y + ";" + position.z;
                // console.log(position);
                let attr = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategoryName(bimObjNode, categoryName, attributeName, attributeValue);
            // console.log(attr);
            }
        }
    }
}
async function savePositionOfHardwareContextBimObjects(parentId, contextId) {
    const categoryName = "Spatial";
    const attributeName = "XYZ center";
    // const attributeName = "xyz center";
    let bimObjects = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(parentId, contextId, (node)=>{
        if (node.info.type.get() == "BIMObject") {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            return true;
        } else return false;
    });
    bimObjects.forEach(async (bimObj)=>{
        let bimObjNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObj.id.get());
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(bimObjNode);
        let position = await _viewerManager.getPositionFromBimFileIdAndDbid(bimObj.bimFileId.get(), bimObj.dbid.get());
        if (position != undefined) {
            let attributeValue = position.x + ";" + position.y + ";" + position.z;
            let attr = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategoryName(bimObjNode, categoryName, attributeName, attributeValue);
        }
    });
}
async function getPositionAttribute(parentId) {}
async function visualizeHardwareContext(parentId) {
    let networkTreeStarts = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasNetworkTreeBimObject");
    let spritesData = [];
    for (let nodeModel of networkTreeStarts){
        let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeModel.id.get());
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
        let positionAttribute = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(node, "Spatial", "XYZ center");
        // let positionAttribute = await AttributeService.findOneAttributeInCategory(node, "spatial", "xyz center");
        if (positionAttribute != -1) {
            let positionOfNode = positionAttribute.value.get().split(";");
            let origin = {
                x: positionOfNode[0],
                y: positionOfNode[1],
                z: positionOfNode[2]
            };
            spritesData.push({
                position: origin,
                dbid: nodeModel.dbid.get(),
                spinalModel: {
                    nodeId: nodeModel.id.get(),
                    spriteType: "Device"
                }
            });
            let children = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeModel.id.get(), "hasNetworkTreeBimObject");
            for (let child of children){
                let childNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(child.id.get());
                // ajout prise en compte namingConvention pour filtrage
                let namingConvention = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(childNode, "default", "namingConvention");
                if (namingConvention != -1) {
                    let value = namingConvention.value.get();
                    if (value.includes("CS2_") == false && value.includes("CS1_") == false && value.includes("MR_") == false && value.includes("BDV_") == false && value.includes("PAS_") == false && value.includes("CLU_") == false && value.includes("BLG_") == false) {
                        // jusque ici
                        let posAttr = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(childNode, "Spatial", "XYZ center");
                        // let posAttr = await AttributeService.findOneAttributeInCategory(childNode, "spatial", "xyz center");
                        if (posAttr != -1) {
                            let positionOfChild = posAttr.value.get().split(";");
                            let destination = {
                                x: positionOfChild[0],
                                y: positionOfChild[1],
                                z: positionOfChild[2]
                            };
                            let bacnetItem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child.id.get(), "hasBacnetItem");
                            if (bacnetItem.length == 0) spritesData.push({
                                position: destination,
                                dbid: child.dbid.get(),
                                spinalModel: {
                                    nodeId: child.id.get(),
                                    spriteType: ""
                                }
                            });
                            else spritesData.push({
                                position: destination,
                                dbid: child.dbid.get(),
                                spinalModel: {
                                    nodeId: child.id.get(),
                                    spriteType: bacnetItem[0].itemType.get()
                                }
                            });
                            await _threeJsManager.drawLineBetweenPositions(origin, destination, 0xfd6c9e);
                        }
                    }
                }
            }
        }
    }
    await _spriteManager.createSprites(spritesData, undefined, onSpriteClickedOpenDashboardPanel);
}
function onSpriteClickedOpenDashboardPanel(event) {
    if (event.dbId != 0) {
        let sprite = _spriteManager.getSpriteFromDbid(event.dbId);
        // console.log(sprite);
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(sprite.info.nodeId);
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
        let selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(realNode.getId());
        // console.log(event);
        spinalPanelManagerService.openPanel("spinal_dashboard_panel", selectedNode);
        spinalPanelManagerService.openPanel('panel-documentation', {
            selectedNode: selectedNode
        });
    }
}
async function visualizeRepartitionningContext(table, eventOnSpriteClicked, threejsNameOfScene = "TO-BE-DEFINED") {
    // console.log(table);
    // console.log("coucou");
    let tabSprites = [];
    let tabPositions = []; // [{origin:null, destination:null}]
    for (let room of table){
        let masters = [
            room.MASTER_SLAVE.MASTER_FC,
            room.MASTER_SLAVE.MASTER_RC
        ];
        for (let master of masters)if (master.id != null) {
            let masterNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(master.id);
            // console.log(masterNode);
            let masterPosition = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(masterNode, "Spatial", "XYZ center");
            // let masterPosition = await AttributeService.findOneAttributeInCategory(masterNode, "spatial", "xyz center");
            // console.log(masterPosition);
            if (masterPosition != -1) {
                let masterPositionSplitted = masterPosition.value.get().split(";");
                let masterItem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(master.id, "hasBacnetItem");
                if (masterItem.length != 0) {
                    let masterItemType = masterItem[0].itemType.get();
                    tabSprites.push({
                        position: {
                            x: masterPositionSplitted[0],
                            y: masterPositionSplitted[1],
                            z: masterPositionSplitted[2]
                        },
                        dbid: master.dbid,
                        spinalModel: {
                            nodeId: master.id,
                            spriteType: masterItemType
                        }
                    });
                    for (let slave of master.Slaves){
                        let slaveNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(slave.id);
                        let slavePosition = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(slaveNode, "Spatial", "XYZ center");
                        // let slavePosition = await AttributeService.findOneAttributeInCategory(slaveNode, "spatial", "xyz center");
                        if (slavePosition != -1) {
                            let slavePositionSplitted = slavePosition.value.get().split(";");
                            let slaveItem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(slave.id, "hasBacnetItem");
                            if (slaveItem.length != 0) {
                                let slaveItemType = slaveItem[0].itemType.get();
                                tabSprites.push({
                                    position: {
                                        x: slavePositionSplitted[0],
                                        y: slavePositionSplitted[1],
                                        z: slavePositionSplitted[2]
                                    },
                                    dbid: slave.dbid,
                                    spinalModel: {
                                        nodeId: slave.id,
                                        spriteType: slaveItemType
                                    }
                                });
                                tabPositions.push({
                                    origin: {
                                        x: masterPositionSplitted[0],
                                        y: masterPositionSplitted[1],
                                        z: masterPositionSplitted[2]
                                    },
                                    destination: {
                                        x: slavePositionSplitted[0],
                                        y: slavePositionSplitted[1],
                                        z: slavePositionSplitted[2]
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    }
    for (let element of tabPositions)await _threeJsManager.drawLineBetweenPositions(element.origin, element.destination, 0x00FF00, threejsNameOfScene);
    await _spriteManager.createSprites(tabSprites, undefined, eventOnSpriteClicked);
}
async function redrawMasterSlaveLines(masterSlaveTab, threejsNameOfScene = "TO-BE-DEFINED") {
    // console.log(masterSlaveTab);
    let masters = [
        masterSlaveTab.MASTER_FC,
        masterSlaveTab.MASTER_RC
    ];
    let tabPositions = [];
    for (let master of masters)if (master.id != null) {
        let masterNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(master.id);
        let masterPosition = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(masterNode, "Spatial", "XYZ center");
        // let masterPosition = await AttributeService.findOneAttributeInCategory(masterNode, "spatial", "xyz center");
        if (masterPosition != -1) {
            let masterPositionSplitted = masterPosition.value.get().split(";");
            let masterItem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(master.id, "hasBacnetItem");
            if (masterItem.length != 0) for (let slave of master.Slaves){
                let slaveNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(slave.id);
                let slavePosition = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).findOneAttributeInCategory(slaveNode, "Spatial", "XYZ center");
                // let slavePosition = await AttributeService.findOneAttributeInCategory(slaveNode, "spatial", "xyz center");
                if (slavePosition != -1) {
                    let slavePositionSplitted = slavePosition.value.get().split(";");
                    let slaveItem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(slave.id, "hasBacnetItem");
                    if (slaveItem.length != 0) tabPositions.push({
                        origin: {
                            x: masterPositionSplitted[0],
                            y: masterPositionSplitted[1],
                            z: masterPositionSplitted[2]
                        },
                        destination: {
                            x: slavePositionSplitted[0],
                            y: slavePositionSplitted[1],
                            z: slavePositionSplitted[2]
                        }
                    });
                }
            }
        }
    }
    for (let element of tabPositions)await _threeJsManager.drawLineBetweenPositions(element.origin, element.destination, 0x0080FF /* 0x00FF00*/ , threejsNameOfScene);
}

},{"spinal-env-viewer-graph-service":"9LAk7","./viewerManager":"2hYO8","spinal-env-viewer-plugin-documentation-service":"cP9kK","./spriteManager":"lHN1o","./threeJsManager":"1SDpZ","ec2d3d333f67fd8e":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2hYO8":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isolateAndTopView", ()=>isolateAndTopView);
parcelHelpers.export(exports, "getPositionFromBimFileIdAndDbid", ()=>getPositionFromBimFileIdAndDbid);
parcelHelpers.export(exports, "fitOn", ()=>fitOn);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _constants = require("../constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
async function isolateAndTopView(parentId) {
    //window.spinal.ForgeViewer.viewer.fitToView()
    this.viewer = window.spinal.ForgeViewer.viewer;
    try {
        let viewCube = await this.viewer.loadExtension('Autodesk.ViewCubeUi');
        viewCube.setViewCube("top"); // passage en vue de dessus : window.spinal.ForgeViewer.viewer.setViewCube("top");
    } catch (error) {
        console.error(error);
    }
    let boolSameNode = false;
    let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
    if (this.lastNode == undefined) this.lastNode = realNode;
    else if (this.lastNode.info.id.get() == realNode.info.id.get()) {
        boolSameNode = true;
        this.lastNode = null;
    } else this.lastNode = realNode;
    if (boolSameNode) this.viewer.impl.visibilityManager.aggregateIsolate();
    else {
        const nodes = await realNode.find((0, _constants.SELECTrelationList), (node)=>node.info.type.get() === "BIMObject");
        const lstByModel = await (0, _constants.utilities).sortBIMObjectByModel(nodes);
        const arrRes = (0, _constants.utilities).organizeBimObjectForAggregateViewer(lstByModel, 'ids');
        this.viewer.impl.visibilityManager.aggregateIsolate(arrRes);
    }
}
async function getPositionFromBimFileIdAndDbid(bimFileId, dbid) {
    let model = spinal.BimObjectService.getModelByBimfile(bimFileId);
    if (model != undefined) {
        let geom = await (0, _spinalSpatialReferential.getBBoxAndMatrix)(dbid, model, window.spinal.ForgeViewer.viewer);
        if (geom != undefined) {
            // console.log(geom);
            let position = geom.bbox.getCenter();
            return position;
        }
    }
    return undefined;
}
async function fitOn(parentId) {
    this.viewer = window.spinal.ForgeViewer.viewer;
    let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
    const nodes = await realNode.find((0, _constants.SELECTrelationList), (node)=>node.info.type.get() === "BIMObject");
    const lstByModel = await (0, _constants.utilities).sortBIMObjectByModel(nodes);
    const arrayToFit = (0, _constants.utilities).organizeBimObjectForAggregateViewer(lstByModel, 'selection');
    this.viewer.fitToView(arrayToFit);
}

},{"spinal-spatial-referential":"i97vk","../constants":"5l0Re","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1SDpZ":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawLinesBetweenMasterAndSlave", ()=>drawLinesBetweenMasterAndSlave);
parcelHelpers.export(exports, "drawLineBetweenPositions", ()=>drawLineBetweenPositions);
parcelHelpers.export(exports, "getLinesFromPositionAndSceneName", ()=>getLinesFromPositionAndSceneName);
parcelHelpers.export(exports, "removeLinesFromScene", ()=>removeLinesFromScene) // export async function getLinesOfRoom(roomId, nameOfScene="default-threejs-scene"){
 //     console.log("\\\\\ TO BE DONE ////// : peut etre a voir avec jeremie");
 // }
;
async function drawLinesBetweenMasterAndSlave(origin, destinations, nameOfScene = "default-threejs-scene") {
    let geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(new THREE.Vector3(origin.x, origin.y, origin.z));
    destinations.forEach((elt)=>{
        geometryLine.vertices.push(new THREE.Vector3(elt.x, elt.y, elt.z));
    });
    // var material = new THREE.LineBasicMaterial({
    //     color: 0x00FF00
    // });
    var material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0x00FF00),
        transparent: true,
        depthWrite: false,
        depthTest: false,
        linewidth: 1,
        // opacity: 1.0,
        blending: THREE.NoBlending
    });
    let line = new THREE.Line(geometryLine, material);
    if (!window.spinal.ForgeViewer.viewer.overlays.hasScene(nameOfScene)) window.spinal.ForgeViewer.viewer.overlays.addScene(nameOfScene);
    window.spinal.ForgeViewer.viewer.overlays.addMesh(line, nameOfScene);
    console.log(line);
    return line;
}
async function drawLineBetweenPositions(origin, destination, lineColor, nameOfScene = "default-threejs-scene") {
    let geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(new THREE.Vector3(origin.x, origin.y, origin.z), new THREE.Vector3(destination.x, destination.y, destination.z));
    // var material = new THREE.LineBasicMaterial({
    //     color: 0x00FF00
    // });
    var material = new THREE.LineBasicMaterial({
        color: new THREE.Color(lineColor),
        transparent: true,
        depthWrite: false,
        depthTest: false,
        linewidth: 2,
        // opacity: 1.0,
        blending: THREE.NoBlending
    });
    let line = new THREE.Line(geometryLine, material);
    if (!window.spinal.ForgeViewer.viewer.overlays.hasScene(nameOfScene)) window.spinal.ForgeViewer.viewer.overlays.addScene(nameOfScene);
    window.spinal.ForgeViewer.viewer.overlays.addMesh(line, nameOfScene);
    // console.log(line);
    return line;
}
async function getLinesFromPositionAndSceneName(position, nameOfScene = "default-threejs-scene") {
    let vectorToCheck = new THREE.Vector3(position.x, position.y, position.z);
    let lines = [];
    // console.log(window.spinal.ForgeViewer.viewer.overlays);
    if (window.spinal.ForgeViewer.viewer.overlays.impl.overlayScenes[nameOfScene] != undefined) {
        let scene = window.spinal.ForgeViewer.viewer.overlays.impl.overlayScenes[nameOfScene].scene;
        let children = scene.children;
        for (let child of children){
            let vertices = child.geometry.vertices;
            vertices.forEach((vert)=>{
                if (vert.x == position.x && vert.y == position.y && vert.z == position.z) lines.push(child);
            });
        }
    }
    return lines;
}
async function removeLinesFromScene(lines = [], nameOfScene = "default-threejs-scene") {
    if (window.spinal.ForgeViewer.viewer.overlays.impl.overlayScenes[nameOfScene] != undefined) {
        let children = window.spinal.ForgeViewer.viewer.overlays.impl.overlayScenes[nameOfScene].scene.children;
        for (let line of lines){
            let index = children.indexOf(line);
            if (index > -1) children.splice(index, 1);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gfVel":[function(require,module,exports,__globalThis) {
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
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
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
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
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
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
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
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
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
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
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
        if (path.length === 0) return '.';
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
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
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
            if (end === -1) return '';
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
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
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
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"c0743715070b1b8a":"euskh"}],"gHzZ3":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonSavePositionOfBimObject", ()=>ButtonSavePositionOfBimObject);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _visualisationManager = require("../js/visualisationManager");
const { spinalPanelManagerService } = require("8dbe5374cfe3150d");
class ButtonSavePositionOfBimObject extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Save BimObjects Positions", "test description", {
            icon: "Save",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    // this.action = this.openPanel.bind( this );
    }
    isShown(option) {
        if (option.selectedNode.type.get() === 'geographicContext' || option.selectedNode.type.get() == "geographicFloor") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async action(option) {
        console.log(option);
        await (0, _visualisationManager.savePositionOfBimObject)(option.selectedNode.id.get());
        console.log("coucou");
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","../js/visualisationManager":"8IFts","8dbe5374cfe3150d":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gRem5":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonSavePositionOfHardwareContextObjects", ()=>ButtonSavePositionOfHardwareContextObjects);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _visualisationManager = require("../js/visualisationManager");
const { spinalPanelManagerService } = require("cf44d31092841709");
class ButtonSavePositionOfHardwareContextObjects extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Save HardwareContext BimObjects Positions", "test description", {
            icon: "Save",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    // this.action = this.openPanel.bind( this );
    }
    isShown(option) {
        if (option.selectedNode.type.get() === 'networkTreeContext') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async action(option) {
        // console.log(option);
        (0, _visualisationManager.savePositionOfHardwareContextBimObjects)(option.selectedNode.id.get(), option.context.id.get()).then((result)=>console.log("DONE")).catch((err)=>console.log(err));
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","../js/visualisationManager":"8IFts","cf44d31092841709":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dIj9h":[function(require,module,exports,__globalThis) {
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

},{"19df3b4b51028d49":"adqgX","77b24a79bb80029a":"32xpg","294f8484813eef1b":"cQPh9"}],"adqgX":[function(require,module,exports,__globalThis) {
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

},{"219bd63e96dc8d9":"gHnzg","f4839373ca56abfb":"cQPh9"}],"gHnzg":[function(require,module,exports,__globalThis) {
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

},{}],"32xpg":[function(require,module,exports,__globalThis) {
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

},{"83eb36b83bc3848a":"fDqnh","d1acada118764380":"gHnzg","ee3a3f95aba74422":"cQPh9"}],"fDqnh":[function(require,module,exports,__globalThis) {
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

},{"e30868c801f59ada":"cQPh9"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-service.52209ae8.js.map
