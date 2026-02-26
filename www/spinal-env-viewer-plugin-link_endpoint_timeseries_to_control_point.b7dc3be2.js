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
})({"aeSh6":[function(require,module,exports,__globalThis) {
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
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _linkEndpointTimeseriesToControlPointVue = require("./src/LinkEndpointTimeseriesToControlPoint.vue");
var _linkEndpointTimeseriesToControlPointVueDefault = parcelHelpers.interopDefault(_linkEndpointTimeseriesToControlPointVue);
var _registerBtn = require("./src/btn/registerBtn");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const extentions = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "plugin-link_endpoint_timeseries_to_control_point",
    vueMountComponent: (0, _vueDefault.default).extend((0, _linkEndpointTimeseriesToControlPointVueDefault.default)),
    panel: {
        title: "Link Endpoint Timeseries to Control Point",
        className: "plugin-link_endpoint_timeseries_to_control_point",
        closeBehaviour: "delete"
    },
    style: {
        height: '80vh',
        width: '750px',
        top: '0px',
        left: '427px'
    }
});
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("plugin-link_endpoint_timeseries_to_control_point", extentions);

},{"spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","./src/LinkEndpointTimeseriesToControlPoint.vue":"i7fQe","./src/btn/registerBtn":"35e1f","vue":"hO3OD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"i7fQe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("65cfe2076aeec9b7");
    if (script.__esModule) script = script.default;
    script.render = require("2bb2a8999f597104").render;
    script.staticRenderFns = require("2bb2a8999f597104").staticRenderFns;
    script._scopeId = "data-v-4a3a6c";
    script.__cssModules = require("1475d2a9522ce925").default;
    require("9a123931a7d2f9c").default(script);
    script.__scopeId = 'data-v-4a3a6c';
    script.__file = "LinkEndpointTimeseriesToControlPoint.vue";
};
initialize();
exports.default = script;

},{"65cfe2076aeec9b7":"795CF","2bb2a8999f597104":"hOK40","1475d2a9522ce925":"2NdAY","9a123931a7d2f9c":"8vidA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"795CF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeByServerId = require("./utils/getNodeByServerId");
var _startLinkTSEndpointToCP = require("./utils/StartLinkTSEndpointToCP");
var scriptExports = {
    name: 'LinkEndpointTimeseriesToControlPoint',
    data () {
        return {
            nodeId: 0,
            contextId: 0,
            treeData: [],
            treeOpened: [],
            treeSelection: [],
            cpProfileName: '',
            cpFilterPattern: '',
            useCPRegexp: false,
            endpointFilterRegexpPattern: '',
            loadingLink: false
        };
    },
    methods: {
        async opened (option) {
            this.nodeId = option.nodeId;
            this.contextId = option.contextId;
            const node = (0, _getNodeByServerId.getNodeByServerId)(this.nodeId);
            const context = (0, _getNodeByServerId.getNodeByServerId)(this.contextId);
            console.log('opened node', node, this.nodeId);
            console.log('opened context', context, this.contextId);
            const treeNode = {
                id: node._server_id.toString(),
                servId: node._server_id,
                name: node.getName().get(),
                depth: 0,
                children: []
            };
            this.treeData = [
                treeNode
            ];
        },
        async openChildren (item) {
            const node = (0, _getNodeByServerId.getNodeByServerId)(item.servId);
            const context = (0, _getNodeByServerId.getNodeByServerId)(this.contextId);
            const children = await node.getChildrenInContext(context);
            const childTreeNodes = [];
            for (const child of children){
                const childTreeNode = {
                    id: item.id + '.' + child._server_id.toString(),
                    servId: child._server_id,
                    name: child.getName().get(),
                    depth: item.depth + 1
                };
                const childNodeType = child.info.type.get();
                if (childNodeType.endsWith('Category') || childNodeType.endsWith('Group')) childTreeNode.children = [];
                childTreeNodes.push(childTreeNode);
            }
            if (childTreeNodes.length === 0) return;
            item.children = childTreeNodes;
            return childTreeNodes;
        },
        async startLink () {
            this.loadingLink = true;
            try {
                await (0, _startLinkTSEndpointToCP.StartLinkTSEndpointToCP)(this.treeSelection, (0, _getNodeByServerId.getNodeByServerId)(this.contextId), this.cpProfileName, this.cpFilterPattern, this.useCPRegexp, this.endpointFilterRegexpPattern);
            } catch (error) {
                this.loadingLink = false;
                console.error('Error during linking process', error);
                return;
            }
            this.loadingLink = false;
        },
        closed: function() {},
        removed: function() {}
    },
    computed: {
        cpFilterLabel () {
            return this.useCPRegexp ? 'Control Point profile RegExp' : 'Control Point profile exact name';
        },
        disableStart () {
            return this.treeSelection.length === 0 || this.cpProfileName.trim() === '' || this.cpFilterPattern.trim() === '' || this.endpointFilterRegexpPattern.trim() === '';
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./utils/getNodeByServerId":"bp6zB","./utils/StartLinkTSEndpointToCP":"ebwJe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bp6zB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getNodeByServerId", ()=>getNodeByServerId);
var _spinalCoreConnectorjs = require("spinal-core-connectorjs");
function getNodeByServerId(serverId) {
    return (0, _spinalCoreConnectorjs.FileSystem)._objects[serverId];
}

},{"spinal-core-connectorjs":"cQPh9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ebwJe":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 SpinalCom - www.spinalcom.com
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
parcelHelpers.export(exports, "StartLinkTSEndpointToCP", ()=>StartLinkTSEndpointToCP);
var _getNodeByServerId = require("./getNodeByServerId");
var _spinalTimeSerieInst = require("./SpinalTimeSerieInst");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const NODE_HAS_CP_RELATIONTION_NAME = 'hasControlPoints';
const CP_HAS_EP_RELATIONTION_NAME = 'hasBmsEndpoint';
const NODE_HAS_EP_RELATIONTION_NAME = 'hasBmsEndpoint';
const HAS_TIME_SERIES_RELATIONTION_NAME = 'hasTimeSeries';
async function StartLinkTSEndpointToCP(ids, context, cpProfileName, cpFilterPattern, useCPRegexp, endpointFilterRegexpPattern) {
    const nodes = await loadNodeLeafFromIds(ids, context);
    console.log('leafNodes loaded', nodes);
    for(let i = 0; i < nodes.length; i += 30){
        const chunk = nodes.slice(i, i + 30);
        await Promise.all(chunk.map(async (node, idx)=>{
            const globalIdx = i + idx;
            console.log(globalIdx + 1, '/', nodes.length);
            try {
                // load endpoints and control points in parallel
                const [{ epTimeSeries, epTsNode }, { cpEpTs, cpEpTsNode, cpMatchingEndpoint }] = await Promise.all([
                    handleLoadEP(node, endpointFilterRegexpPattern),
                    handleLoadCP(node, cpProfileName, cpFilterPattern, useCPRegexp)
                ]);
                if (cpEpTs) // time series is already linked to control point endpoint
                {
                    if (cpEpTs !== epTimeSeries) {
                        // time series linked to control point endpoint is different from endpoint time series
                        // remove existing link
                        await cpMatchingEndpoint.removeChild(cpEpTsNode, HAS_TIME_SERIES_RELATIONTION_NAME, 'PtrLst');
                        await cpMatchingEndpoint.addChild(epTsNode, HAS_TIME_SERIES_RELATIONTION_NAME, 'PtrLst');
                    }
                } else // create epTsNode node to link time series
                await cpMatchingEndpoint.addChild(epTsNode, HAS_TIME_SERIES_RELATIONTION_NAME, 'PtrLst');
            } catch (error) {
                console.error(error);
            }
        }));
    }
}
async function handleLoadEP(node, endpointFilterRegexpPattern) {
    const endpoints = await node.getChildren([
        NODE_HAS_EP_RELATIONTION_NAME
    ]);
    // find endpoints matching filter
    const endpoint = endpoints.find((ep)=>{
        const name = ep.info.name.get();
        const regex = new RegExp(endpointFilterRegexpPattern);
        return regex.test(name);
    });
    if (endpoint === undefined) throw new Error(`no endpoint matching filter ${endpointFilterRegexpPattern} for node [${node._server_id}] ${node.info.name.get()}`);
    const tsService = (0, _spinalTimeSerieInst.getSpinalTimeSerieInst)();
    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(endpoint);
    const epTimeSeries = await tsService.getOrCreateTimeSeries(endpoint.info.id.get());
    const tsNodes = await endpoint.getChildren([
        HAS_TIME_SERIES_RELATIONTION_NAME
    ]);
    return {
        epTimeSeries,
        epTsNode: tsNodes[0]
    };
}
async function handleLoadCP(node, cpProfileName, cpFilterPattern, useCPRegexp) {
    const controlPoints = await node.getChildren([
        NODE_HAS_CP_RELATIONTION_NAME
    ]);
    const matchingCP = controlPoints.find((cp)=>{
        const profileName = cp.info.name.get();
        return cpProfileName === profileName;
    });
    if (matchingCP === undefined) throw new Error(`no control point matching profile name ${cpProfileName} for node [${node._server_id}] ${node.info.name.get()}`);
    // load endpoints of control point
    const cpEndpoints = await matchingCP.getChildren([
        CP_HAS_EP_RELATIONTION_NAME
    ]);
    const cpMatchingEndpoint = cpEndpoints.find((ep)=>{
        const name = ep.info.name.get();
        const regex = new RegExp(cpFilterPattern);
        return useCPRegexp ? regex.test(name) : name === cpFilterPattern;
    });
    if (cpMatchingEndpoint === undefined) throw new Error(`no control point endpoint matching filter ${cpFilterPattern} for control point [${matchingCP._server_id}] ${matchingCP.info.name.get()}`);
    // test if time series are already linked to control point endpoint
    const existingTSEndpoints = await cpMatchingEndpoint.getChildren([
        HAS_TIME_SERIES_RELATIONTION_NAME
    ]);
    const cpEpTsNode = existingTSEndpoints[0];
    if (!cpEpTsNode) return {
        cpEpTs: null,
        cpEpTsNode: null,
        cpMatchingEndpoint
    };
    return {
        cpEpTs: await cpEpTsNode.getElement(true),
        cpEpTsNode,
        cpMatchingEndpoint
    };
}
async function loadNodeLeafFromIds(ids, context) {
    const startingNodes = ids.map((id)=>{
        const ids = id.split('.');
        const idString = ids[ids.length - 1];
        const servId = parseInt(idString, 10);
        return (0, _getNodeByServerId.getNodeByServerId)(servId);
    }).filter((node)=>node !== undefined);
    const nodes = [];
    const getChildrenRec = async (node, res)=>{
        const nodeType = node.info.type.get();
        if (nodeType.endsWith('GroupContext') || nodeType.endsWith('Category') || nodeType.endsWith('Group')) {
            const children = await node.getChildrenInContext(context);
            for (const child of children)await getChildrenRec(child, res);
        } else res.push(node);
    };
    for(let i = 0; i < startingNodes.length; i += 20){
        console.log(`loading leaf nodes ${i} to ${i + 20} / ${startingNodes.length}`);
        const chunk = startingNodes.slice(i, i + 20);
        await Promise.all(chunk.map((node)=>getChildrenRec(node, nodes)));
    }
    return nodes;
}

},{"./getNodeByServerId":"bp6zB","./SpinalTimeSerieInst":"cia1y","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cia1y":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 SpinalCom - www.spinalcom.com
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
parcelHelpers.export(exports, "getSpinalTimeSerieInst", ()=>getSpinalTimeSerieInst);
var _spinalModelTimeseries = require("spinal-model-timeseries");
let instance = null;
function getSpinalTimeSerieInst() {
    if (!instance) instance = new (0, _spinalModelTimeseries.SpinalServiceTimeseries)();
    return instance;
}

},{"spinal-model-timeseries":"99qz9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hOK40":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-card', {
        staticClass: "plugin-LinkEndpointToControlPoint",
        attrs: {
            "dark": ""
        }
    }, [
        _c('v-layout', {
            staticClass: "plugin-LinkEndpointToControlPoint-layout",
            attrs: {
                "pa-3": ""
            }
        }, [
            _c('v-flex', {
                staticClass: "plugin-LinkEndpointToControlPoint-flex spinal-scrollbar"
            }, [
                _c('v-treeview', {
                    attrs: {
                        "items": _vm.treeData,
                        "open": _vm.treeOpened,
                        "dark": "",
                        "hoverable": "",
                        "selectable": "",
                        "transition": "",
                        "load-children": _vm.openChildren
                    },
                    on: {
                        "update:open": function($event) {
                            _vm.treeOpened = $event;
                        }
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "append",
                            fn: function(ref) {
                                var item = ref.item;
                                return [
                                    _c('v-btn', {
                                        directives: [
                                            {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: 'Open in Node Inspector Viewer',
                                                expression: "'Open in Node Inspector Viewer'"
                                            }
                                        ],
                                        attrs: {
                                            "icon": "",
                                            "small": "",
                                            "href": "/html/graph-inspector/?id=" + item.servId,
                                            "target": "_blank"
                                        }
                                    }, [
                                        _c('v-icon', [
                                            _vm._v("workspaces_outline")
                                        ])
                                    ], 1)
                                ];
                            }
                        }
                    ]),
                    model: {
                        value: _vm.treeSelection,
                        callback: function($$v) {
                            _vm.treeSelection = $$v;
                        },
                        expression: "treeSelection"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('v-flex', {
                staticClass: "plugin-LinkEndpointToControlPoint-flex spinal-scrollbar plugin-LinkEndpointToControlPoint-controls"
            }, [
                _c('v-text-field', {
                    attrs: {
                        "label": "Control Point profile name",
                        "required": ""
                    },
                    model: {
                        value: _vm.cpProfileName,
                        callback: function($$v) {
                            _vm.cpProfileName = $$v;
                        },
                        expression: "cpProfileName"
                    }
                }),
                _vm._v(" "),
                _c('v-text-field', {
                    attrs: {
                        "label": _vm.cpFilterLabel,
                        "required": ""
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "append",
                            fn: function() {
                                return [
                                    _c('v-checkbox', {
                                        attrs: {
                                            "label": "RegExp",
                                            "hide-details": ""
                                        },
                                        model: {
                                            value: _vm.useCPRegexp,
                                            callback: function($$v) {
                                                _vm.useCPRegexp = $$v;
                                            },
                                            expression: "useCPRegexp"
                                        }
                                    })
                                ];
                            },
                            proxy: true
                        }
                    ]),
                    model: {
                        value: _vm.cpFilterPattern,
                        callback: function($$v) {
                            _vm.cpFilterPattern = $$v;
                        },
                        expression: "cpFilterPattern"
                    }
                }),
                _vm._v(" "),
                _c('v-divider', {
                    staticClass: "my-2"
                }),
                _vm._v(" "),
                _c('v-text-field', {
                    attrs: {
                        "label": "Endpoint filter RegExp pattern",
                        "required": ""
                    },
                    model: {
                        value: _vm.endpointFilterRegexpPattern,
                        callback: function($$v) {
                            _vm.endpointFilterRegexpPattern = $$v;
                        },
                        expression: "endpointFilterRegexpPattern"
                    }
                }),
                _vm._v(" "),
                _c('v-btn', {
                    attrs: {
                        "disabled": _vm.disableStart,
                        "loading": _vm.loadingLink
                    },
                    on: {
                        "click": _vm.startLink
                    }
                }, [
                    _vm._v("Start")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2NdAY":[function() {},{}],"8vidA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"35e1f":[function(require,module,exports,__globalThis) {
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
        super('Link Endpoint Timeseries to Control Point', 'Open Link Endpoint Timeseries to Control Point', {
            icon: 'timeline',
            icon_type: 'in',
            backgroundColor: '#000000',
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        let selectedContext = option.context;
        if (option.context) {
            selectedContext = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get());
            return selectedContext.info.type.get().endsWith('GroupContext') ? Promise.resolve(true) : Promise.resolve(-1);
        }
        return Promise.resolve(-1);
    }
    action(option) {
        const param = {
            nodeId: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get())._server_id,
            contextId: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get())._server_id
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel('plugin-link_endpoint_timeseries_to_control_point', param);
    }
}
exports.default = SpinalLinkerButton;
const barName = 'GraphManagerSideBar';
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(barName, new SpinalLinkerButton(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-link_endpoint_timeseries_to_control_point.b7dc3be2.js.map
