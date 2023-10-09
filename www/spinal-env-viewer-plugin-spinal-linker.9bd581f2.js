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
})({"jnvPn":[function(require,module,exports) {
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
        height: "80vh",
        width: "360px",
        top: "0px",
        left: "427px"
    }
});
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("plugin-spinal-linker", extentions);

},{"spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./src/SpinalLinker.vue":"gbgUt","./src/GraphManagerButton/SpinalLinkerButton":"13UTj","vue":"gt5MM","vue-async-computed":"k3v8t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"gbgUt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("94c2b0c8977d9598");
    if (script.__esModule) script = script.default;
    script.render = require("efe57650cd460dcd").render;
    script.staticRenderFns = require("efe57650cd460dcd").staticRenderFns;
    script._scopeId = "data-v-f0d48e";
    script.__cssModules = require("b54c4fec0b887e3c").default;
    require("a7a307444dab9b2d").default(script);
    script.__scopeId = "data-v-f0d48e";
    script.__file = "SpinalLinker.vue";
};
initialize();
exports.default = script;

},{"94c2b0c8977d9598":"9MsBO","efe57650cd460dcd":"5p4Y2","b54c4fec0b887e3c":"484yJ","a7a307444dab9b2d":"5rf5n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MsBO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _nodeItemVue = require("./node-item.vue");
var _nodeItemVueDefault = parcelHelpers.interopDefault(_nodeItemVue);
var scriptExports = {
    name: "SpinalLinker",
    components: {
        NodeItem: (0, _nodeItemVueDefault.default)
    },
    data: function() {
        return {
            "contextsId": [],
            "inspectedNode": "",
            "relationName": "",
            "relationType": ""
        };
    },
    computed: {
        name: function() {
            if (this.inspectedNode && this.inspectedNode.hasOwnProperty("name")) return this.inspectedNode.name.get();
            return "";
        }
    },
    methods: {
        opened: function(option) {
            this.relationName = option.relationName;
            this.relationType = option.relationType;
            this.inspectedNode = option.selectedNode;
            this.contextsId = [];
            const graphId = (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph().info.id.get();
            (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(graphId, []).then((children)=>{
                for(let i = 0; i < children.length; i++)if (children[i].hasOwnProperty("id")) this.contextsId.push(children[i].id.get());
            });
        },
        closed: function() {},
        removed: function() {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","./node-item.vue":"fmT1t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmT1t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a1c40e309a7f268e");
    if (script.__esModule) script = script.default;
    script.render = require("1a1e8b2dde852098").render;
    script.staticRenderFns = require("1a1e8b2dde852098").staticRenderFns;
    script._scopeId = "data-v-53383f";
    script.__cssModules = require("8593a4c08c2f0e7b").default;
    require("e87eed8d87e01087").default(script);
    script.__scopeId = "data-v-53383f";
    script.__file = "node-item.vue";
};
initialize();
exports.default = script;

},{"a1c40e309a7f268e":"6oFu8","1a1e8b2dde852098":"1mMRU","8593a4c08c2f0e7b":"g1e9e","e87eed8d87e01087":"b3gEb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oFu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerVueComponentsLib = require("spinal-env-viewer-vue-components-lib");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "nodeItem",
    components: {
        DropUpDownButton: (0, _spinalEnvViewerVueComponentsLib.DropUpDownButton),
        SpinalIconButton: (0, _spinalEnvViewerVueComponentsLib.SpinalIconButton)
    },
    data: function() {
        return {
            node: {},
            open: false,
            linked: false
        };
    },
    props: {
        nodeId: {
            type: String,
            required: true
        },
        invertLink: {
            type: Boolean,
            default: false
        },
        linkId: {
            type: String,
            required: true
        },
        linkRelationName: {
            type: String,
            default: "HasBeenLink"
        },
        linkRelationType: {
            type: String,
            default: (0, _spinalEnvViewerGraphService.SpinalGraphService).SPINAL_RELATION_PTR_LST_TYPE
        }
    },
    computed: {
        name: function() {
            if (this.node && this.node.hasOwnProperty("name")) return this.node.name.get();
            return "Unknown name";
        },
        hasChildren: function() {
            if (this.node && this.node.hasOwnProperty("childrenIds")) return false;
            return false;
        }
    },
    asyncComputed: {
        canLink: {
            get: async function() {
                if (!this.linked && this.node && this.node.hasOwnProperty("id")) {
                    let res = await (0, _spinalEnvViewerGraphService.SpinalGraphService).isChild(this.linkId, this.node.id.get(), [
                        this.linkRelationName
                    ]);
                    if (this.invertLink) res = await (0, _spinalEnvViewerGraphService.SpinalGraphService).isChild(this.node.id.get(), this.linkId, [
                        this.linkRelationName
                    ]);
                    return res === false;
                }
                return false;
            },
            default: false,
            watch: [
                "linked"
            ]
        }
    },
    methods: {
        link: function() {
            if (this.invertLink) (0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(this.node.id.get(), this.linkId, this.linkRelationName, this.linkRelationType);
            else (0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(this.linkId, this.node.id.get(), this.linkRelationName, this.linkRelationType);
            this.linked = true;
        },
        unlink: function() {
            if (this.invertLink) (0, _spinalEnvViewerGraphService.SpinalGraphService).removeChild(this.node.id.get(), this.linkId, this.linkRelationName, this.linkRelationType).then(()=>{
                console.log("unlink inverted");
            }).catch((e)=>console.error(e));
            else (0, _spinalEnvViewerGraphService.SpinalGraphService).removeChild(this.linkId, this.node.id.get(), this.linkRelationName, this.linkRelationType).then(()=>{
                console.log("unlink");
            }).catch((e)=>console.error(e));
            this.linked = false;
        },
        toggle: function() {
            this.open = !this.open;
        }
    },
    mounted () {
        this.node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNode(this.nodeId);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-vue-components-lib":"f8kzc","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mMRU":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", [
        _c("div", {
            staticClass: "plugin-linker-header"
        }, [
            _c("drop-up-down-button", {
                attrs: {
                    "opened": _vm.open
                },
                on: {
                    "click": _vm.toggle
                }
            }),
            _vm._v("\n        " + _vm._s(_vm.name) + "\n        "),
            _vm.canLink ? _c("spinal-icon-button", {
                staticClass: "plugin-linker-link-button",
                attrs: {
                    "icon": "link",
                    "tool-tip": "link node"
                },
                on: {
                    "click": _vm.link
                }
            }) : _c("spinal-icon-button", {
                staticClass: "plugin-linker-link-button",
                attrs: {
                    "icon": "link_off",
                    "tool-tip": "unlink node"
                },
                on: {
                    "click": _vm.unlink
                }
            })
        ], 1),
        _vm._v(" "),
        _vm.open ? _c("ul", _vm._l(_vm.node.childrenIds, function(nodeId, index) {
            return _c("node-item", {
                key: index,
                attrs: {
                    "nodeId": nodeId,
                    "invert-link": _vm.invertLink,
                    "link-id": _vm.linkId,
                    "link-relation-name": _vm.linkRelationName,
                    "link-relation-type": _vm.linkRelationType
                }
            });
        }), 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"g1e9e":[function() {},{}],"b3gEb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5p4Y2":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "plugin-spinal-linker"
    }, [
        _c("h1", [
            _vm._v(_vm._s(_vm.name))
        ]),
        _vm._v(" "),
        _vm._l(_vm.contextsId, function(contextId) {
            return _c("node-item", {
                attrs: {
                    "node-id": contextId,
                    "invert-link": false,
                    "link-id": _vm.inspectedNode.id.get(),
                    "link-relation-name": _vm.relationName,
                    "link-relation-type": _vm.relationType
                }
            });
        })
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"484yJ":[function() {},{}],"5rf5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13UTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("../utilities");
class SpinalLinkerButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("SpinalLinker", "Open SpinalLinker", {
            icon: "link",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        if (option.exist || option.selectedNode) {
            if (option.selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return Promise.resolve(true);
            else {
                if (option.hasOwnProperty("selectedNode") && (0, _utilities.isShownParam).includes(option.selectedNode.type.get())) return Promise.resolve(true);
            }
        }
        return Promise.resolve(-1);
    }
    action(option) {
        let selectedNode = option.selectedNode;
        if (option.selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(option.selectedNode);
            selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(option.selectedNode.getId());
        }
        const param = {
            relationName: "hasEndPoint",
            relationType: (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE),
            selectedNode: selectedNode
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("plugin-spinal-linker", param);
    }
}
exports.default = SpinalLinkerButton;
const TopBarName = "GraphManagerSideBar";
const circularMenuName = "circularMenu";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(TopBarName, new SpinalLinkerButton(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(circularMenuName, new SpinalLinkerButton(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","../utilities":"82KtY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"82KtY":[function(require,module,exports) {
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
let isShownParam = [
    (0, _constants.SITE_TYPE),
    (0, _constants.BUILDING_TYPE),
    (0, _constants.FLOOR_TYPE),
    (0, _constants.ZONE_TYPE),
    (0, _constants.ROOM_TYPE),
    (0, _constants.EQUIPMENT_TYPE)
];
module.exports = {
    isShownParam
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service/build/constants":"eV0id"}],"eV0id":[function(require,module,exports) {
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

},{}],"k3v8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setAsyncState(vm, stateObject, state) {
    vm.$set(vm.$data._asyncComputed[stateObject], "state", state);
    vm.$set(vm.$data._asyncComputed[stateObject], "updating", state === "updating");
    vm.$set(vm.$data._asyncComputed[stateObject], "error", state === "error");
    vm.$set(vm.$data._asyncComputed[stateObject], "success", state === "success");
}
function getterOnly(fn) {
    if (typeof fn === "function") return fn;
    return fn.get;
}
function hasOwnProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}
function isComputedLazy(item) {
    return hasOwnProperty(item, "lazy") && item.lazy;
}
function isLazyActive(vm, key) {
    return vm[lazyActivePrefix + key];
}
var lazyActivePrefix = "async_computed$lazy_active$", lazyDataPrefix = "async_computed$lazy_data$";
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
            var splittedByDot = key.split(".");
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
                console.error("AsyncComputed: bad path: ", key);
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
    if (typeof computedAsyncProperty.watch === "function") return getGetterWatchedByFunction(computedAsyncProperty);
    else if (Array.isArray(computedAsyncProperty.watch)) {
        computedAsyncProperty.watch.forEach(function(key) {
            if (typeof key !== "string") throw new Error("AsyncComputed: watch elemnts must be strings");
        });
        return getGetterWatchedByArray(computedAsyncProperty);
    } else throw Error("AsyncComputed: watch should be function or an array");
}
var DidNotUpdate = typeof Symbol === "function" ? Symbol("did-not-update") : {};
var getGetterWithShouldUpdate = function getGetterWithShouldUpdate(asyncProprety, currentGetter) {
    return function getter() {
        return asyncProprety.shouldUpdate.call(this) ? currentGetter.call(this) : DidNotUpdate;
    };
};
var shouldNotUpdate = function shouldNotUpdate(value) {
    return DidNotUpdate === value;
};
var prefix = "_async_computed$";
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
        setAsyncState(vm, key, "updating");
        newPromise.then(function(value) {
            if (thisPromise !== promiseId) return;
            setAsyncState(vm, key, "success");
            vm[key] = value;
        }).catch(function(err) {
            if (thisPromise !== promiseId) return;
            setAsyncState(vm, key, "error");
            Vue.set(vm.$data._asyncComputed[key], "exception", err);
            if (pluginOptions.errorHandler === false) return;
            var handler = pluginOptions.errorHandler === undefined ? console.error.bind(console, "Error evaluating async computed property:") : pluginOptions.errorHandler;
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
    setAsyncState(vm, key, "updating");
    vm.$watch(prefix + key, watcher, {
        immediate: true
    });
}
function initDataWithAsyncComputed(options, pluginOptions) {
    var optionData = options.data;
    var asyncComputed = options.asyncComputed || {};
    return function vueAsyncComputedInjectedDataFn(vm) {
        var data = (typeof optionData === "function" ? optionData.call(this, vm) : optionData) || {};
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
    if (typeof fn === "function") return fn;
    var getter = fn.get;
    if (hasOwnProperty(fn, "watch")) getter = getWatchedGetter(fn);
    if (hasOwnProperty(fn, "shouldUpdate")) getter = getGetterWithShouldUpdate(fn, getter);
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
    if ("default" in fn) defaultValue = fn.default;
    else if ("default" in pluginOptions) defaultValue = pluginOptions.default;
    if (typeof defaultValue === "function") return defaultValue.call(this);
    else return defaultValue;
}
/* istanbul ignore if */ if (typeof window !== "undefined" && window.Vue) // Auto install in dist mode
window.Vue.use(AsyncComputed);
exports.default = AsyncComputed;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-spinal-linker.9bd581f2.js.map
