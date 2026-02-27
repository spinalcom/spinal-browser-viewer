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
})({"deK3J":[function(require,module,exports,__globalThis) {
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
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _spinalLinkerVue = require("./src/SpinalLinker.vue");
var _spinalLinkerVueDefault = parcelHelpers.interopDefault(_spinalLinkerVue);
var _spinalLinkerButton = require("./src/GraphManagerButton/SpinalLinkerButton");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vueAsyncComputed = require("vue-async-computed");
var _vueAsyncComputedDefault = parcelHelpers.interopDefault(_vueAsyncComputed);
(0, _vueDefault.default).use((0, _vueAsyncComputedDefault.default));
const extentions = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "plugin-spinal-linker",
    vueMountComponent: (0, _vueDefault.default).extend((0, _spinalLinkerVueDefault.default)),
    panel: {
        title: "Spinal Linker",
        className: "plugin-spinal-linker",
        closeBehaviour: "delete"
    },
    style: {
        height: '80vh',
        width: '360px',
        top: '0px',
        left: '427px'
    }
});
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("plugin-spinal-linker", extentions);

},{"spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","./src/SpinalLinker.vue":"edmHS","./src/GraphManagerButton/SpinalLinkerButton":"1Nsav","vue":"hO3OD","vue-async-computed":"7B52i","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{"bf7edd8450503e22":"egTXY","64bd1569b4ded066":"8qsfD"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"8qsfD":[function(require,module,exports,__globalThis) {
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

},{}],"edmHS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("94c2b0c8977d9598");
    if (script.__esModule) script = script.default;
    script.render = require("efe57650cd460dcd").render;
    script.staticRenderFns = require("efe57650cd460dcd").staticRenderFns;
    script._scopeId = "data-v-e94f18";
    script.__cssModules = require("b54c4fec0b887e3c").default;
    require("a7a307444dab9b2d").default(script);
    script.__scopeId = 'data-v-e94f18';
    script.__file = "SpinalLinker.vue";
};
initialize();
exports.default = script;

},{"94c2b0c8977d9598":"8mtTD","efe57650cd460dcd":"hUsS6","b54c4fec0b887e3c":"6VwDS","a7a307444dab9b2d":"gPQGm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8mtTD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjs = require("spinal-core-connectorjs");
var _spinalLinkerDialogShowItemsVue = require("./SpinalLinkerDialogShowItems.vue");
var _spinalLinkerDialogShowItemsVueDefault = parcelHelpers.interopDefault(_spinalLinkerDialogShowItemsVue);
var scriptExports = {
    name: 'SpinalLinker',
    components: {
        SpinalLinkerDialogShowItems: (0, _spinalLinkerDialogShowItemsVueDefault.default)
    },
    data: function() {
        return {
            selectId: 0,
            contextId: 0,
            relationName: '',
            proxyRelationName: '',
            relationType: '',
            searchOpen: false,
            inContextProxy: false,
            inContext: false,
            search: '',
            items: [],
            open: [],
            linkedIds: [],
            linkedInContextIds: [],
            loadingUpdateRelations: false
        };
    },
    computed: {
        nodeName: function() {
            if (this.selectId) return (0, _spinalCoreConnectorjs.FileSystem)._objects[this.selectId]?.info?.name?.get() || 'undefined';
            return 'undefined';
        },
        contextName: function() {
            if (this.contextId) return (0, _spinalCoreConnectorjs.FileSystem)._objects[this.contextId]?.info?.name?.get() || 'undefined';
            return 'undefined';
        }
    },
    methods: {
        getColor (item) {
            if (this.linkedInContextIds.find((id)=>id === item.id)) return 'red';
            return 'orange';
        },
        onToggleSearch () {
            this.searchOpen = !this.searchOpen;
            if (!this.searchOpen) this.search = '';
        },
        async reloadWithProxyVal () {
            this.loadingUpdateRelations = true;
            this.relationName = this.proxyRelationName;
            this.inContext = this.inContextProxy;
            const sourceNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.selectId];
            const childrenfromRel = await sourceNode.getChildren(this.relationName, this.relationType);
            this.linkedIds = [];
            this.linkedInContextIds = [];
            for (const child of childrenfromRel)this.linkedIds.push(child._server_id);
            const contextNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.contextId];
            const childrenInContext = await sourceNode.getChildrenInContext(contextNode, this.relationName);
            for (const child of childrenInContext)if (this.linkedIds.find((id)=>id === child._server_id)) this.linkedInContextIds.push(child._server_id);
            this.updateLinkedStates();
            this.loadingUpdateRelations = false;
        },
        updateLinkedStates () {
            const updateState = (item)=>{
                if (this.linkedIds.find((id)=>id === item.id)) item.linkedState = 1;
                else item.linkedState = 2;
                if (item.children) item.children.forEach((child)=>updateState(child));
            };
            this.items.forEach((item)=>updateState(item));
        },
        async linkNode (target) {
            const targetNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[target.id];
            const sourceNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.selectId];
            if (this.inContext) {
                const contextNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.contextId];
                await sourceNode.addChildInContext(targetNode, this.relationName, this.relationType, contextNode);
                this.linkedInContextIds.push(targetNode._server_id);
            } else await sourceNode.addChild(targetNode, this.relationName, this.relationType);
            target.linkedState = 1;
            this.linkedIds.push(target.id);
        },
        unlinkNode (target) {
            const targetNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[target.id];
            const sourceNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.selectId];
            sourceNode.removeChild(targetNode, this.relationName, this.relationType);
            target.linkedState = 2;
            this.linkedIds = this.linkedIds.filter((id)=>id !== target.id);
        },
        unlinkNodes (idsToUnlink) {
            const sourceNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[this.selectId];
            idsToUnlink.forEach((id)=>{
                const targetNode = (0, _spinalCoreConnectorjs.FileSystem)._objects[id];
                sourceNode.removeChild(targetNode, this.relationName, this.relationType);
            });
            this.reloadWithProxyVal();
        },
        createItem (node, context) {
            const item = {
                id: node._server_id,
                name: node.info.name.get(),
                contextId: context._server_id,
                linkedState: 0,
                children: []
            };
            if (this.linkedIds.find((id)=>id === node._server_id)) item.linkedState = 1;
            else item.linkedState = 2;
            return item;
        },
        opened: async function(option) {
            this.relationName = option.relationName;
            this.proxyRelationName = option.relationName;
            this.relationType = option.relationType;
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
            const contextNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedContext.id.get());
            this.selectId = node._server_id;
            this.contextId = contextNode._server_id;
            this.items = [];
            const graph = (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph();
            const contexts = await graph.getChildren();
            for (const context of contexts)this.items.push(this.createItem(context, context));
            await this.reloadWithProxyVal();
        },
        closed: function() {},
        removed: function() {},
        async loadChildren (item) {
            const node = (0, _spinalCoreConnectorjs.FileSystem)._objects[item.id];
            const context = (0, _spinalCoreConnectorjs.FileSystem)._objects[item.contextId];
            const children = await node?.getChildrenInContext(context);
            const items = children.map((child)=>this.createItem(child, context));
            if (items.length === 0) {
                delete item.children;
                return null;
            }
            item.children = items;
            return items;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-core-connectorjs":"cQPh9","./SpinalLinkerDialogShowItems.vue":"d3TFN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d3TFN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("825204b777c1d0cd");
    if (script.__esModule) script = script.default;
    script.render = require("c218bce1773c22a1").render;
    script.staticRenderFns = require("c218bce1773c22a1").staticRenderFns;
    script._scopeId = "data-v-57c99e";
    script.__cssModules = require("18bf47d577fbecb9").default;
    require("6c7d1f0eb0930841").default(script);
    script.__scopeId = 'data-v-57c99e';
    script.__file = "SpinalLinkerDialogShowItems.vue";
};
initialize();
exports.default = script;

},{"825204b777c1d0cd":"fLK02","c218bce1773c22a1":"hjD9G","18bf47d577fbecb9":"aj36O","6c7d1f0eb0930841":"d8olb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fLK02":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: 'SpinalLinkerDialogShowItems',
    data () {
        return {
            loading: true,
            dialog: false,
            idsLinkedComputed: [],
            idsIncontextLinkedComputed: []
        };
    },
    props: {
        idsLinked: {
            type: Array,
            required: true
        },
        idsIncontextLinked: {
            type: Array,
            required: true
        }
    },
    computed: {
        canUnlink () {
            let can = false;
            this.idsLinkedComputed.forEach((item)=>{
                if (item.selected) can = true;
            });
            this.idsIncontextLinkedComputed.forEach((item)=>{
                if (item.selected) can = true;
            });
            return can;
        }
    },
    methods: {
        unlinkNodes () {
            const idsToUnlink = [];
            this.idsLinkedComputed.forEach((item)=>{
                if (item.selected) idsToUnlink.push(item.id);
            });
            this.idsIncontextLinkedComputed.forEach((item)=>{
                if (item.selected) idsToUnlink.push(item.id);
            });
            this.$emit('unlink-nodes', idsToUnlink);
            this.dialog = false;
        },
        selectAllInContext () {
            this.idsIncontextLinkedComputed.forEach((item)=>{
                item.selected = true;
            });
        },
        selectAllNotInContext () {
            this.idsLinkedComputed.forEach((item)=>{
                item.selected = true;
            });
        }
    },
    watch: {
        idsLinked: {
            immediate: true,
            handler (newVal) {
                this.idsLinkedComputed = newVal.map((id)=>{
                    const item = FileSystem._objects[id];
                    return {
                        id: id,
                        name: item?.info?.name?.get() || 'unknown',
                        selected: false
                    };
                });
            }
        },
        idsIncontextLinked: {
            immediate: true,
            handler (newVal) {
                this.idsIncontextLinkedComputed = newVal.map((id)=>{
                    const item = FileSystem._objects[id];
                    return {
                        id: id,
                        name: item?.info?.name?.get() || 'unknown',
                        selected: false
                    };
                });
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hjD9G":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('v-dialog', {
            staticClass: "plugin-spinal-linker-dialog",
            attrs: {
                "dark": "",
                "attach": "body"
            },
            scopedSlots: _vm._u([
                {
                    key: "activator",
                    fn: function(ref) {
                        var on = ref.on;
                        return [
                            _c('v-layout', _vm._g({
                                staticClass: "plugin-spinal-linker-legend",
                                attrs: {
                                    "align-center": "",
                                    "justify-space-around": "",
                                    "row": "",
                                    "fill-height": ""
                                }
                            }, on), [
                                _c('div', {
                                    staticClass: "elevation-5 plugin-spinal-linker-legend-item"
                                }, [
                                    _c('v-icon', {
                                        attrs: {
                                            "small": ""
                                        }
                                    }, [
                                        _vm._v("link")
                                    ]),
                                    _vm._v(" Not Linked\n        ")
                                ], 1),
                                _vm._v(" "),
                                _c('div', {
                                    staticClass: "elevation-5 plugin-spinal-linker-legend-item"
                                }, [
                                    _c('v-icon', {
                                        attrs: {
                                            "small": "",
                                            "color": "red"
                                        }
                                    }, [
                                        _vm._v("link_off")
                                    ]),
                                    _vm._v(" in context (" + _vm._s(_vm.idsIncontextLinked.length) + ")\n        ")
                                ], 1),
                                _vm._v(" "),
                                _c('div', {
                                    staticClass: "elevation-5 plugin-spinal-linker-legend-item"
                                }, [
                                    _c('v-icon', {
                                        attrs: {
                                            "small": "",
                                            "color": "orange"
                                        }
                                    }, [
                                        _vm._v("link_off")
                                    ]),
                                    _vm._v(" not in context (" + _vm._s(_vm.idsLinked.length) + ")\n        ")
                                ], 1)
                            ])
                        ];
                    }
                }
            ]),
            model: {
                value: _vm.dialog,
                callback: function($$v) {
                    _vm.dialog = $$v;
                },
                expression: "dialog"
            }
        }, [
            _vm._v(" "),
            _c('v-card', {
                staticClass: "plugin-spinal-linker-dialog-card"
            }, [
                _c('v-card-title', {
                    staticClass: "headline",
                    attrs: {
                        "primary-title": ""
                    }
                }, [
                    _vm._v("\n        Linked items\n      ")
                ]),
                _vm._v(" "),
                _c('v-card-text', [
                    _vm.idsLinkedComputed.length === 0 && _vm.idsIncontextLinkedComputed.length === 0 ? _c('div', [
                        _vm._v("\n          No linked items\n        ")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _c('v-list', {
                        attrs: {
                            "dense": ""
                        }
                    }, [
                        _vm.idsIncontextLinkedComputed.length > 0 ? _c('v-subheader', [
                            _vm._v("\n            In context (" + _vm._s(_vm.idsIncontextLinkedComputed.length) + ")\n          ")
                        ]) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.idsIncontextLinkedComputed, function(item) {
                            return _c('v-list-tile', {
                                key: item.id
                            }, [
                                _c('v-list-tile-action', [
                                    _c('v-checkbox', {
                                        model: {
                                            value: item.selected,
                                            callback: function($$v) {
                                                _vm.$set(item, "selected", $$v);
                                            },
                                            expression: "item.selected"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c('v-list-tile-content', [
                                    _c('v-list-tile-title', [
                                        _vm._v(_vm._s(item.name))
                                    ]),
                                    _vm._v(" "),
                                    _c('v-list-tile-sub-title', [
                                        _vm._v("ID: " + _vm._s(item.id))
                                    ])
                                ], 1)
                            ], 1);
                        }),
                        _vm._v(" "),
                        _vm.idsLinkedComputed.length > 0 ? _c('v-subheader', [
                            _vm._v("\n            Not in context (" + _vm._s(_vm.idsLinkedComputed.length) + ")\n          ")
                        ]) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.idsLinkedComputed, function(item) {
                            return _c('v-list-tile', {
                                key: item.id
                            }, [
                                _c('v-list-tile-action', [
                                    _c('v-checkbox', {
                                        model: {
                                            value: item.selected,
                                            callback: function($$v) {
                                                _vm.$set(item, "selected", $$v);
                                            },
                                            expression: "item.selected"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c('v-list-tile-content', [
                                    _c('v-list-tile-title', [
                                        _vm._v(_vm._s(item.name))
                                    ]),
                                    _vm._v(" "),
                                    _c('v-list-tile-sub-title', [
                                        _vm._v("ID: " + _vm._s(item.id))
                                    ])
                                ], 1)
                            ], 1);
                        })
                    ], 2)
                ], 1),
                _vm._v(" "),
                _c('v-divider'),
                _vm._v(" "),
                _c('v-card-actions', [
                    _vm.idsIncontextLinkedComputed.length > 0 ? _c('v-btn', {
                        attrs: {
                            "text": ""
                        },
                        on: {
                            "click": _vm.selectAllInContext
                        }
                    }, [
                        _vm._v("\n          Select all in context\n        ")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.idsLinkedComputed.length > 0 ? _c('v-btn', {
                        attrs: {
                            "text": ""
                        },
                        on: {
                            "click": _vm.selectAllNotInContext
                        }
                    }, [
                        _vm._v("\n          Select all not in context\n        ")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _c('v-spacer'),
                    _vm._v(" "),
                    _c('v-btn', {
                        attrs: {
                            "text": ""
                        },
                        on: {
                            "click": function($event) {
                                _vm.dialog = false;
                            }
                        }
                    }, [
                        _vm._v(" close ")
                    ]),
                    _vm._v(" "),
                    _c('v-btn', {
                        attrs: {
                            "text": "",
                            "disabled": !_vm.canUnlink
                        },
                        on: {
                            "click": _vm.unlinkNodes
                        }
                    }, [
                        _vm._v("\n          unlink selection\n        ")
                    ])
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aj36O":[function() {},{}],"d8olb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hUsS6":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-card', {
        staticClass: "plugin-spinal-linker",
        attrs: {
            "dark": ""
        }
    }, [
        _c('v-toolbar', {
            staticClass: "plugin-spinal-linker-toolbar",
            attrs: {
                "dark": ""
            }
        }, [
            _vm.searchOpen === false ? _c('v-toolbar-title', [
                _vm.selectId !== _vm.contextId ? _c('h6', [
                    _vm._v("\n        " + _vm._s(_vm.contextName) + "\n      ")
                ]) : _vm._e(),
                _vm._v(" "),
                _c('h4', [
                    _vm._v("\n        " + _vm._s(_vm.nodeName) + "\n      ")
                ])
            ]) : _c('v-toolbar-title', [
                _c('v-text-field', {
                    staticStyle: {
                        "flex-grow": "1"
                    },
                    attrs: {
                        "label": "Search",
                        "dark": "",
                        "flat": "",
                        "solo-inverted": "",
                        "hide-details": ""
                    },
                    model: {
                        value: _vm.search,
                        callback: function($$v) {
                            _vm.search = $$v;
                        },
                        expression: "search"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('v-btn', {
                attrs: {
                    "icon": ""
                },
                on: {
                    "click": _vm.onToggleSearch
                }
            }, [
                _c('v-icon', [
                    _vm._v(_vm._s(_vm.searchOpen ? 'close' : 'search'))
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('v-layout', {
            staticClass: "plugin-spinal-linker-layout spinal-scrollbar",
            attrs: {
                "pa-3": ""
            }
        }, [
            _c('v-text-field', {
                attrs: {
                    "label": "Relation Name",
                    "dark": "",
                    "outline": "",
                    "hide-details": ""
                },
                scopedSlots: _vm._u([
                    {
                        key: "append-outer",
                        fn: function() {
                            return [
                                _c('v-checkbox', {
                                    directives: [
                                        {
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: 'Add item in context',
                                            expression: "'Add item in context'"
                                        }
                                    ],
                                    staticClass: "plugin-spinal-linker-in-context-checkbox",
                                    attrs: {
                                        "hint": "relation in Context",
                                        "label": "In Context",
                                        "dark": ""
                                    },
                                    model: {
                                        value: _vm.inContextProxy,
                                        callback: function($$v) {
                                            _vm.inContextProxy = $$v;
                                        },
                                        expression: "inContextProxy"
                                    }
                                })
                            ];
                        },
                        proxy: true
                    },
                    {
                        key: "append",
                        fn: function() {
                            return [
                                _vm.relationName !== _vm.proxyRelationName || _vm.inContext !== _vm.inContextProxy ? _c('v-btn', {
                                    staticClass: "plugin-spinal-linker-validate-relation-btn",
                                    attrs: {
                                        "loading": _vm.loadingUpdateRelations,
                                        "small": "",
                                        "dark": "",
                                        "icon": "",
                                        "disabled": _vm.proxyRelationName.length === 0
                                    },
                                    on: {
                                        "click": _vm.reloadWithProxyVal
                                    }
                                }, [
                                    _c('v-icon', [
                                        _vm._v("check")
                                    ])
                                ], 1) : _vm._e()
                            ];
                        },
                        proxy: true
                    }
                ]),
                model: {
                    value: _vm.proxyRelationName,
                    callback: function($$v) {
                        _vm.proxyRelationName = $$v;
                    },
                    expression: "proxyRelationName"
                }
            }),
            _vm._v(" "),
            _c('v-treeview', {
                staticClass: "plugin-spinal-linker-treeview",
                attrs: {
                    "items": _vm.items,
                    "load-children": _vm.loadChildren,
                    "open": _vm.open,
                    "search": _vm.search,
                    "item-key": "id",
                    "item-text": "name",
                    "item-children": "children",
                    "open-on-click": "",
                    "transition": "",
                    "hoverable": true
                },
                on: {
                    "update:open": function($event) {
                        _vm.open = $event;
                    }
                },
                scopedSlots: _vm._u([
                    {
                        key: "label",
                        fn: function(ref) {
                            var item = ref.item;
                            return [
                                _c('span', {
                                    directives: [
                                        {
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: item.name,
                                            expression: "item.name"
                                        }
                                    ],
                                    staticClass: "spinal-linker-label-name"
                                }, [
                                    _vm._v(_vm._s(item.name))
                                ])
                            ];
                        }
                    },
                    {
                        key: "append",
                        fn: function(ref) {
                            var item = ref.item;
                            return [
                                item.linkedState === 1 ? _c('v-btn', {
                                    directives: [
                                        {
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: 'Unlink node',
                                            expression: "'Unlink node'"
                                        }
                                    ],
                                    attrs: {
                                        "icon": "",
                                        "small": ""
                                    },
                                    on: {
                                        "click": function($event) {
                                            $event.stopPropagation();
                                            return _vm.unlinkNode(item);
                                        }
                                    }
                                }, [
                                    _c('v-icon', {
                                        attrs: {
                                            "color": _vm.getColor(item)
                                        }
                                    }, [
                                        _vm._v("link_off")
                                    ])
                                ], 1) : item.id !== _vm.selectId ? _c('v-btn', {
                                    directives: [
                                        {
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: 'Link node',
                                            expression: "'Link node'"
                                        }
                                    ],
                                    attrs: {
                                        "icon": "",
                                        "small": ""
                                    },
                                    on: {
                                        "click": function($event) {
                                            $event.stopPropagation();
                                            return _vm.linkNode(item);
                                        }
                                    }
                                }, [
                                    _c('v-icon', [
                                        _vm._v("link")
                                    ])
                                ], 1) : _vm._e()
                            ];
                        }
                    }
                ])
            })
        ], 1),
        _vm._v(" "),
        _c('SpinalLinkerDialogShowItems', {
            attrs: {
                "idsLinked": _vm.linkedIds.filter(function(id) {
                    return !_vm.linkedInContextIds.includes(id);
                }),
                "idsIncontextLinked": _vm.linkedInContextIds
            },
            on: {
                "unlink-nodes": _vm.unlinkNodes
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6VwDS":[function() {},{}],"gPQGm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Nsav":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class SpinalLinkerButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('SpinalLinker', 'Open SpinalLinker', {
            icon: 'link',
            icon_type: 'in',
            backgroundColor: '#000000',
            fontColor: '#ffffff'
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action(option) {
        let selectedNode = option.selectedNode;
        let selectedContext = option.context;
        const param = {
            relationName: 'hasEndPoint',
            relationType: (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE),
            selectedNode: selectedNode,
            selectedContext: selectedContext
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel('plugin-spinal-linker', param);
    }
}
exports.default = SpinalLinkerButton;
const barName = 'GraphManagerSideBar';
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(barName, new SpinalLinkerButton(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7B52i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setAsyncState(vm, stateObject, state) {
    vm.$set(vm.$data._asyncComputed[stateObject], 'state', state);
    vm.$set(vm.$data._asyncComputed[stateObject], 'updating', state === 'updating');
    vm.$set(vm.$data._asyncComputed[stateObject], 'error', state === 'error');
    vm.$set(vm.$data._asyncComputed[stateObject], 'success', state === 'success');
}
function getterOnly(fn) {
    if (typeof fn === 'function') return fn;
    return fn.get;
}
function hasOwnProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}
function isComputedLazy(item) {
    return hasOwnProperty(item, 'lazy') && item.lazy;
}
function isLazyActive(vm, key) {
    return vm[lazyActivePrefix + key];
}
var lazyActivePrefix = 'async_computed$lazy_active$', lazyDataPrefix = 'async_computed$lazy_data$';
function initLazy(data, key, value) {
    data[lazyActivePrefix + key] = false;
    data[lazyDataPrefix + key] = value;
}
function makeLazyComputed(key) {
    return {
        get: function get() {
            this[lazyActivePrefix + key] = true;
            return this[lazyDataPrefix + key];
        },
        set: function set(value) {
            this[lazyDataPrefix + key] = value;
        }
    };
}
function silentSetLazy(vm, key, value) {
    vm[lazyDataPrefix + key] = value;
}
function silentGetLazy(vm, key) {
    return vm[lazyDataPrefix + key];
}
var getGetterWatchedByArray = function getGetterWatchedByArray(computedAsyncProperty) {
    return function getter() {
        var _this = this;
        computedAsyncProperty.watch.forEach(function(key) {
            // Check if nested key is watched.
            var splittedByDot = key.split('.');
            if (splittedByDot.length === 1) // If not, just access it.
            // eslint-disable-next-line no-unused-expressions
            _this[key];
            else // Access the nested propety.
            try {
                var start = _this;
                splittedByDot.forEach(function(part) {
                    start = start[part];
                });
            } catch (error) {
                console.error('AsyncComputed: bad path: ', key);
                throw error;
            }
        });
        return computedAsyncProperty.get.call(this);
    };
};
var getGetterWatchedByFunction = function getGetterWatchedByFunction(computedAsyncProperty) {
    return function getter() {
        computedAsyncProperty.watch.call(this);
        return computedAsyncProperty.get.call(this);
    };
};
function getWatchedGetter(computedAsyncProperty) {
    if (typeof computedAsyncProperty.watch === 'function') return getGetterWatchedByFunction(computedAsyncProperty);
    else if (Array.isArray(computedAsyncProperty.watch)) {
        computedAsyncProperty.watch.forEach(function(key) {
            if (typeof key !== 'string') throw new Error('AsyncComputed: watch elemnts must be strings');
        });
        return getGetterWatchedByArray(computedAsyncProperty);
    } else throw Error('AsyncComputed: watch should be function or an array');
}
var DidNotUpdate = typeof Symbol === 'function' ? Symbol('did-not-update') : {};
var getGetterWithShouldUpdate = function getGetterWithShouldUpdate(asyncProprety, currentGetter) {
    return function getter() {
        return asyncProprety.shouldUpdate.call(this) ? currentGetter.call(this) : DidNotUpdate;
    };
};
var shouldNotUpdate = function shouldNotUpdate(value) {
    return DidNotUpdate === value;
};
var prefix = '_async_computed$';
var AsyncComputed = {
    install: function install(Vue, pluginOptions) {
        pluginOptions = pluginOptions || {};
        Vue.config.optionMergeStrategies.asyncComputed = Vue.config.optionMergeStrategies.computed;
        Vue.mixin({
            data: function data() {
                return {
                    _asyncComputed: {}
                };
            },
            computed: {
                $asyncComputed: function $asyncComputed() {
                    return this.$data._asyncComputed;
                }
            },
            beforeCreate: function beforeCreate() {
                var asyncComputed = this.$options.asyncComputed || {};
                if (!Object.keys(asyncComputed).length) return;
                for(var key in asyncComputed){
                    var getter = getterFn(key, asyncComputed[key]);
                    this.$options.computed[prefix + key] = getter;
                }
                this.$options.data = initDataWithAsyncComputed(this.$options, pluginOptions);
            },
            created: function created() {
                for(var key in this.$options.asyncComputed || {}){
                    var item = this.$options.asyncComputed[key], value = generateDefault.call(this, item, pluginOptions);
                    if (isComputedLazy(item)) silentSetLazy(this, key, value);
                    else this[key] = value;
                }
                for(var _key in this.$options.asyncComputed || {})handleAsyncComputedPropetyChanges(this, _key, pluginOptions, Vue);
            }
        });
    }
};
function handleAsyncComputedPropetyChanges(vm, key, pluginOptions, Vue) {
    var promiseId = 0;
    var watcher = function watcher(newPromise) {
        var thisPromise = ++promiseId;
        if (shouldNotUpdate(newPromise)) return;
        if (!newPromise || !newPromise.then) newPromise = Promise.resolve(newPromise);
        setAsyncState(vm, key, 'updating');
        newPromise.then(function(value) {
            if (thisPromise !== promiseId) return;
            setAsyncState(vm, key, 'success');
            vm[key] = value;
        }).catch(function(err) {
            if (thisPromise !== promiseId) return;
            setAsyncState(vm, key, 'error');
            Vue.set(vm.$data._asyncComputed[key], 'exception', err);
            if (pluginOptions.errorHandler === false) return;
            var handler = pluginOptions.errorHandler === undefined ? console.error.bind(console, 'Error evaluating async computed property:') : pluginOptions.errorHandler;
            if (pluginOptions.useRawError) handler(err, vm, err.stack);
            else handler(err.stack);
        });
    };
    Vue.set(vm.$data._asyncComputed, key, {
        exception: null,
        update: function update() {
            if (!vm._isDestroyed) watcher(getterOnly(vm.$options.asyncComputed[key]).apply(vm));
        }
    });
    setAsyncState(vm, key, 'updating');
    vm.$watch(prefix + key, watcher, {
        immediate: true
    });
}
function initDataWithAsyncComputed(options, pluginOptions) {
    var optionData = options.data;
    var asyncComputed = options.asyncComputed || {};
    return function vueAsyncComputedInjectedDataFn(vm) {
        var data = (typeof optionData === 'function' ? optionData.call(this, vm) : optionData) || {};
        for(var key in asyncComputed){
            var item = this.$options.asyncComputed[key];
            var value = generateDefault.call(this, item, pluginOptions);
            if (isComputedLazy(item)) {
                initLazy(data, key, value);
                this.$options.computed[key] = makeLazyComputed(key);
            } else data[key] = value;
        }
        return data;
    };
}
function getterFn(key, fn) {
    if (typeof fn === 'function') return fn;
    var getter = fn.get;
    if (hasOwnProperty(fn, 'watch')) getter = getWatchedGetter(fn);
    if (hasOwnProperty(fn, 'shouldUpdate')) getter = getGetterWithShouldUpdate(fn, getter);
    if (isComputedLazy(fn)) {
        var nonLazy = getter;
        getter = function lazyGetter() {
            if (isLazyActive(this, key)) return nonLazy.call(this);
            else return silentGetLazy(this, key);
        };
    }
    return getter;
}
function generateDefault(fn, pluginOptions) {
    var defaultValue = null;
    if ('default' in fn) defaultValue = fn.default;
    else if ('default' in pluginOptions) defaultValue = pluginOptions.default;
    if (typeof defaultValue === 'function') return defaultValue.call(this);
    else return defaultValue;
}
/* istanbul ignore if */ if (typeof window !== 'undefined' && window.Vue) // Auto install in dist mode
window.Vue.use(AsyncComputed);
exports.default = AsyncComputed;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-spinal-linker.1e8d242e.js.map
