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
})({"h4cRj":[function(require,module,exports) {
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
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _extention = require("./src/extention");
var _extentionDefault = parcelHelpers.interopDefault(_extention);
var _app = require("./src/app");
var _appDefault = parcelHelpers.interopDefault(_app);
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("generate_geographic_context", (0, _extentionDefault.default));
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _appDefault.default)(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./src/extention":"5BLEl","./src/app":"frO7t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"5BLEl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _panelVue = require("./vue/panel.vue");
var _panelVueDefault = parcelHelpers.interopDefault(_panelVue);
const extention = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "generate_geographic_context",
    vueMountComponent: (0, _vueDefault.default).extend((0, _panelVueDefault.default)),
    panel: {
        title: "Generate a Geographic Context",
        classname: "gen-geo-context",
        closeBehaviour: "hide"
    },
    style: {
        left: "405px",
        width: "420px",
        height: "80vh"
    },
    onLoad () {},
    onUnLoad () {}
});
exports.default = extention;

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./vue/panel.vue":"acaMu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acaMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("448e01fde3c14867");
    if (script.__esModule) script = script.default;
    script.render = require("23d54add7a542056").render;
    script.staticRenderFns = require("23d54add7a542056").staticRenderFns;
    script._scopeId = "data-v-aac40e";
    script.__cssModules = require("c89dfaf8e0564bb8").default;
    require("c819136a1450028b").default(script);
    script.__scopeId = "data-v-aac40e";
    script.__file = "panel.vue";
};
initialize();
exports.default = script;

},{"448e01fde3c14867":"9vIym","23d54add7a542056":"iwbeQ","c89dfaf8e0564bb8":"iJBzl","c819136a1450028b":"eQWFV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vIym":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _referentialSelectionVue = require("./referentialSelection.vue");
var _referentialSelectionVueDefault = parcelHelpers.interopDefault(_referentialSelectionVue);
var _layoutVue = require("./layout.vue");
var _layoutVueDefault = parcelHelpers.interopDefault(_layoutVue);
var _launchVue = require("./launch.vue");
var _launchVueDefault = parcelHelpers.interopDefault(_launchVue);
var _panelConfig = require("../js/panelConfig");
var scriptExports = {
    name: "dialogCreateGeographicContext",
    components: {
        referentialSelection: (0, _referentialSelectionVueDefault.default),
        layout: (0, _layoutVueDefault.default),
        launch: (0, _launchVueDefault.default)
    },
    data () {
        return {
            showDialog: true,
            update: "",
            context: null,
            config: null,
            activeStep: "",
            layoutError: null
        };
    },
    watch: {
        layoutError (newValue, oldValue) {
            if (oldValue === "layout") this.layoutError = null;
        }
    },
    methods: {
        async opened (option) {
            // Using Strings (object, wrapper for strings) because otherwise the
            // watchers won't trigger if the update is the same twice in a row
            this.update = new String("opened");
            this.context = option.context;
            this.config = await (0, _panelConfig.loadConfig)(this.context);
            this.activeStep = "ref";
            this.layoutError = null;
        },
        removed () {},
        closed () {
            this.update = new String("closed");
        },
        /**
     * Called every time the config changes. Updates update and saves the current config.
     */ async configChanged () {
            this.update = new String("configChanged");
            await (0, _panelConfig.saveConfig)(this.context, this.config);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./referentialSelection.vue":"gQB0Y","./layout.vue":"2ESSR","./launch.vue":"6LNQU","../js/panelConfig":"1T4Nk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQB0Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f76f73f2e04020a9");
    if (script.__esModule) script = script.default;
    script.render = require("671fbcba646625ef").render;
    script.staticRenderFns = require("671fbcba646625ef").staticRenderFns;
    script._scopeId = "data-v-f3763c";
    require("bf85ac4255ea9999").default(script);
    script.__scopeId = "data-v-f3763c";
    script.__file = "referentialSelection.vue";
};
initialize();
exports.default = script;

},{"f76f73f2e04020a9":"7Clg8","671fbcba646625ef":"79WYL","bf85ac4255ea9999":"9zxYP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Clg8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilitiesDbIds = require("../js/utilitiesDbIds");
var scriptExports = {
    name: "referentialSelection",
    props: {
        update: {
            type: String,
            required: true
        },
        config: {
            type: Object,
            required: true
        }
    },
    data () {
        this.viewer = window.spinal.ForgeViewer.viewer;
        this.allDbIds = (0, _utilitiesDbIds.getAllLeafDbIds)();
        return {};
    },
    watch: {
        update: {
            immediate: true,
            handler () {
                if (this.update != "opened") return;
                if (this.config.useAllDbIds) this.config.referential = this.allDbIds.slice();
            }
        }
    },
    methods: {
        /**
     * Updates the referential when the mode changes.
     */ changeMode (newValue) {
            if (!newValue) this.clearReferential();
            else this.config.referential = this.allDbIds.slice();
            this.$emit("configChanged");
        },
        /**
     * Adds the current selection to the referential. Discards all non-leaf dbIds.
     */ addSelection () {
            const aggregateSelection = this.viewer.getAggregateSelection();
            if (aggregateSelection.length <= 0) return;
            const selection = aggregateSelection[0].selection;
            for (let select of selection){
                let leafs = (0, _utilitiesDbIds.getLeafDbIds)(select);
                this.config.referential.push(...leafs);
            }
            this.config.referential = [
                ...new Set(this.config.referential)
            ];
            this.$emit("configChanged");
        },
        /**
     * Empties the referential.
     */ clearReferential () {
            this.config.referential = [];
            this.$emit("configChanged");
        },
        /**
     * Selects all the dbIds in the referential.
     */ showReferential () {
            const model = window.spinal.assimblyManagerService._getCurrentModel();
            this.viewer.select(this.config.referential, model);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/utilitiesDbIds":"bLcyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLcyz":[function(require,module,exports) {
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
 * Returns the instance tree of the forge viewer model.
 * @returns {Object} The instance tree of the forge viewer model
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInstanceTree", ()=>getInstanceTree);
parcelHelpers.export(exports, "getDbIds", ()=>getDbIds);
parcelHelpers.export(exports, "getDbIdsRec", ()=>getDbIdsRec);
parcelHelpers.export(exports, "getLeafDbIds", ()=>getLeafDbIds);
parcelHelpers.export(exports, "getAllDbIds", ()=>getAllDbIds);
parcelHelpers.export(exports, "getAllLeafDbIds", ()=>getAllLeafDbIds);
function getInstanceTree() {
    const model = window.spinal.ForgeViewer.viewer.model;
    const tree = model.getData().instanceTree;
    return tree;
}
/**
 * Takes a dbId and returns its children.
 * @param {number} rootId Parent dbId
 * @returns {Array<number>} Children dbIds
 */ function getDbIds(rootId) {
    const tree = getInstanceTree();
    const dbIds = [];
    tree.enumNodeChildren(rootId, (dbId)=>{
        dbIds.push(dbId);
    });
    return dbIds;
}
/**
 * Recursively gets all children dbIds of the root dbId.
 * @param {number} rootId Root dbId
 * @returns {Array<number>} The children dbIds of the root dbId
 */ function getDbIdsRec(rootId) {
    const tree = getInstanceTree();
    const queue = [
        rootId
    ];
    const dbIds = [];
    while(queue.length){
        let id = queue.shift();
        tree.enumNodeChildren(id, (childId)=>{
            queue.push(childId);
            dbIds.push(childId);
        });
    }
    return dbIds;
}
/**
 * Returns all leaf dbIds children of the root dbId.
 * @param {number} rootId Root dbId
 * @returns {Array<number>} The children dbIds of the root dbId that are leafs in the tree
 */ function getLeafDbIds(rootId) {
    const tree = getInstanceTree();
    const queue = [
        rootId
    ];
    const dbIds = [];
    let hasChildren;
    while(queue.length){
        let id = queue.shift();
        hasChildren = false;
        tree.enumNodeChildren(id, (childId)=>{
            hasChildren = true;
            queue.push(childId);
        });
        if (!hasChildren) dbIds.push(id);
    }
    return dbIds;
}
/**
 * Gets all the dbIds in the instance tree of the viewer.
 * @returns {Array<number>} All of the dbIds in the tree
 */ function getAllDbIds() {
    const tree = getInstanceTree();
    const rootId = tree.getRootId();
    return getDbIdsRec(rootId);
}
/**
 * Gets all the leaf dbIds in the instance tree of the viewer.
 * @returns {Array<number>} All of the leaf dbIds in the tree
 */ function getAllLeafDbIds() {
    const tree = getInstanceTree();
    const rootId = tree.getRootId();
    return getLeafDbIds(rootId);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79WYL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-checkbox", {
            staticClass: "md-primary",
            on: {
                "change": _vm.changeMode
            },
            model: {
                value: _vm.config.useAllDbIds,
                callback: function($$v) {
                    _vm.$set(_vm.config, "useAllDbIds", $$v);
                },
                expression: "config.useAllDbIds"
            }
        }, [
            _vm._v("\n    Use whole digital twin\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            directives: [
                {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.config.useAllDbIds,
                    expression: "!config.useAllDbIds"
                }
            ]
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
                    _vm._v("Add selection to referential")
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
                    _vm._v("Clear referential")
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
            ], 1),
            _vm._v(" "),
            _c("p", [
                _vm._v(_vm._s(_vm.config.referential.length) + " objects selected")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9zxYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ESSR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5e4fe64e31d45308");
    if (script.__esModule) script = script.default;
    script.render = require("5ae6ca64eaa8aa4f").render;
    script.staticRenderFns = require("5ae6ca64eaa8aa4f").staticRenderFns;
    script._scopeId = "data-v-84c7af";
    script.__cssModules = require("e38185b750b86dae").default;
    require("74a9f3b19f28dede").default(script);
    script.__scopeId = "data-v-84c7af";
    script.__file = "layout.vue";
};
initialize();
exports.default = script;

},{"5e4fe64e31d45308":"g2KV5","5ae6ca64eaa8aa4f":"1AVBG","e38185b750b86dae":"8DXRW","74a9f3b19f28dede":"51l6R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2KV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../js/constants");
var _levelVue = require("./level.vue");
var _levelVueDefault = parcelHelpers.interopDefault(_levelVue);
var scriptExports = {
    name: "layout",
    props: {
        levels: {
            type: Array,
            required: true
        },
        showWarnings: {
            type: Boolean,
            required: true
        }
    },
    components: {
        level: (0, _levelVueDefault.default)
    },
    data () {
        this.constants = _constants;
        return {};
    },
    methods: {
        /**
     * Adds an empty level with the given option to the layout.
     * @param {string} option Option of the level
     */ addLevel (option) {
            this.levels.push({
                type: "",
                param: "",
                option: option
            });
            this.$emit("levelChanged");
        },
        /**
     * Removes a level from the layout.
     * @param {number} index Index of the level in the layout
     */ removeLevel (index) {
            this.levels.splice(index, 1);
            this.$emit("levelChanged");
        },
        /**
     * Determines the index of the lowest type a level can be.
     * @param {number} index The index of the level
     * @returns {number} The index of the minimum type
     */ getMinTypeIndex (indexLevel) {
            let i = indexLevel;
            do i--;
            while (i >= 0 && !_constants.GEOGRAPHIC_TYPES.includes(this.levels[i].type));
            if (i < 0) return 0;
            else {
                const minType = this.levels[i].type;
                const minTypeIndex = _constants.GEOGRAPHIC_TYPES.indexOf(minType) + 1;
                return minTypeIndex;
            }
        },
        /**
     * Determines the index of the highest type a level can be.
     * @param {number} index The index of the level
     * @returns {number} The index of the maximum type
     */ getMaxTypeIndex (indexLevel) {
            let i = indexLevel;
            do i++;
            while (i < this.levels.length && !_constants.GEOGRAPHIC_TYPES.includes(this.levels[i].type));
            if (i === this.levels.length) return _constants.GEOGRAPHIC_TYPES.length;
            else {
                const maxType = this.levels[i].type;
                const maxTypeIndex = _constants.GEOGRAPHIC_TYPES.indexOf(maxType);
                return maxTypeIndex;
            }
        },
        /**
     * Determines all the types a level can be given its position in the layout.
     * @param {number} index The index of the level
     * @returns {Array<string>} An array of the available types for the level
     */ getAvailableTypes (index) {
            const minTypeIndex = this.getMinTypeIndex(index);
            const maxTypeIndex = this.getMaxTypeIndex(index);
            const available = [];
            for(let i = minTypeIndex; i < maxTypeIndex; i++)available.push(_constants.GEOGRAPHIC_TYPES[i]);
            return available.concat(_constants.ZONE_TYPE);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/constants":"86OGX","./level.vue":"4UG61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86OGX":[function(require,module,exports) {
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
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EQUIPMENT_RELATION", ()=>EQUIPMENT_RELATION);
parcelHelpers.export(exports, "SITE_TYPE", ()=>SITE_TYPE);
parcelHelpers.export(exports, "BUILDING_TYPE", ()=>BUILDING_TYPE);
parcelHelpers.export(exports, "FLOOR_TYPE", ()=>FLOOR_TYPE);
parcelHelpers.export(exports, "ZONE_TYPE", ()=>ZONE_TYPE);
parcelHelpers.export(exports, "ROOM_TYPE", ()=>ROOM_TYPE);
parcelHelpers.export(exports, "GEOGRAPHIC_TYPES", ()=>GEOGRAPHIC_TYPES);
parcelHelpers.export(exports, "MAP_TYPES", ()=>MAP_TYPES);
parcelHelpers.export(exports, "MAP_RELATIONS", ()=>MAP_RELATIONS);
parcelHelpers.export(exports, "LEVEL_OPTION_BY_KEY", ()=>LEVEL_OPTION_BY_KEY);
parcelHelpers.export(exports, "LEVEL_OPTION_FIXED", ()=>LEVEL_OPTION_FIXED);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const geoConstants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
const { EQUIPMENT_RELATION } = geoConstants;
// Types that will be displayed
const SITE_TYPE = "Site";
const BUILDING_TYPE = "Building";
const FLOOR_TYPE = "Floor";
const ZONE_TYPE = "Zone";
const ROOM_TYPE = "Room";
const GEOGRAPHIC_TYPES = Object.freeze([
    SITE_TYPE,
    BUILDING_TYPE,
    FLOOR_TYPE,
    ROOM_TYPE
]);
const MAP_TYPES = Object.freeze(new Map([
    [
        SITE_TYPE,
        geoConstants.SITE_TYPE
    ],
    [
        BUILDING_TYPE,
        geoConstants.BUILDING_TYPE
    ],
    [
        FLOOR_TYPE,
        geoConstants.FLOOR_TYPE
    ],
    [
        ZONE_TYPE,
        geoConstants.ZONE_TYPE
    ],
    [
        ROOM_TYPE,
        geoConstants.ROOM_TYPE
    ]
]));
const MAP_RELATIONS = Object.freeze(new Map([
    [
        SITE_TYPE,
        geoConstants.SITE_RELATION
    ],
    [
        BUILDING_TYPE,
        geoConstants.BUILDING_RELATION
    ],
    [
        FLOOR_TYPE,
        geoConstants.FLOOR_RELATION
    ],
    [
        ZONE_TYPE,
        geoConstants.ZONE_RELATION
    ],
    [
        ROOM_TYPE,
        geoConstants.ROOM_RELATION
    ]
]));
const LEVEL_OPTION_BY_KEY = "none";
const LEVEL_OPTION_FIXED = "fixed";

},{"spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UG61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("478eac5179c15e43");
    if (script.__esModule) script = script.default;
    script.render = require("ad5b477c7ae206da").render;
    script.staticRenderFns = require("ad5b477c7ae206da").staticRenderFns;
    script._scopeId = "data-v-5ee8db";
    script.__cssModules = require("56c1ada914ef9341").default;
    require("5a7026ae83038e0").default(script);
    script.__scopeId = "data-v-5ee8db";
    script.__file = "level.vue";
};
initialize();
exports.default = script;

},{"478eac5179c15e43":"6G4Tu","ad5b477c7ae206da":"iTgHt","56c1ada914ef9341":"eQIeG","5a7026ae83038e0":"hGz3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6G4Tu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../js/constants");
var scriptExports = {
    name: "level",
    props: {
        level: {
            type: Object,
            required: true
        },
        availableTypes: {
            type: Array,
            required: true
        },
        showWarning: {
            type: Boolean,
            required: true
        }
    },
    data () {
        this.constants = _constants;
        return {};
    },
    watch: {
        level: {
            deep: true,
            handler () {
                this.$emit("levelChanged");
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/constants":"86OGX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTgHt":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        attrs: {
            "id": "div-level"
        }
    }, [
        _c("md-icon", {
            directives: [
                {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showWarning && _vm.level.type === "",
                    expression: "showWarning && level.type === ''"
                }
            ],
            staticClass: "md-accent"
        }, [
            _vm._v("warning")
        ]),
        _vm._v(" "),
        _c("md-field", {
            attrs: {
                "id": "level-field"
            }
        }, [
            _c("label", [
                _vm._v("Level")
            ]),
            _vm._v(" "),
            _c("md-select", {
                model: {
                    value: _vm.level.type,
                    callback: function($$v) {
                        _vm.$set(_vm.level, "type", $$v);
                    },
                    expression: "level.type"
                }
            }, _vm._l(_vm.availableTypes, function(type, indexType) {
                return _c("md-option", {
                    key: indexType,
                    attrs: {
                        "value": type
                    }
                }, [
                    _vm._v("\n        " + _vm._s(type) + "\n      ")
                ]);
            }), 1)
        ], 1),
        _vm._v(" "),
        _c("md-icon", {
            directives: [
                {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showWarning && _vm.level.param === "",
                    expression: "showWarning && level.param === ''"
                }
            ],
            staticClass: "md-accent"
        }, [
            _vm._v("warning")
        ]),
        _vm._v(" "),
        _c("md-field", {
            attrs: {
                "id": "param-field"
            }
        }, [
            _vm.level.option === _vm.constants.LEVEL_OPTION_BY_KEY ? _c("label", [
                _vm._v("Key")
            ]) : _vm.level.option === _vm.constants.LEVEL_OPTION_FIXED ? _c("label", [
                _vm._v("Fixed Value")
            ]) : _vm._e(),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.level.param,
                    callback: function($$v) {
                        _vm.$set(_vm.level, "param", $$v);
                    },
                    expression: "level.param"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-icon-button",
            on: {
                "click": function($event) {
                    return _vm.$emit("removeLevel");
                }
            }
        }, [
            _c("md-icon", [
                _vm._v("remove")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eQIeG":[function() {},{}],"hGz3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AVBG":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _vm._l(_vm.levels, function(level, index) {
            return _c("level", {
                key: index,
                attrs: {
                    "level": level,
                    "available-types": _vm.getAvailableTypes(index),
                    "show-warning": _vm.showWarnings
                },
                on: {
                    "levelChanged": function() {
                        return _vm.$emit("levelChanged");
                    },
                    "removeLevel": function($event) {
                        return _vm.removeLevel(index);
                    }
                }
            });
        }),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-raised button-add-level",
            on: {
                "click": function($event) {
                    return _vm.addLevel(_vm.constants.LEVEL_OPTION_BY_KEY);
                }
            }
        }, [
            _vm._v("\n    NORMAL\n  ")
        ]),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-raised button-add-level",
            on: {
                "click": function($event) {
                    return _vm.addLevel(_vm.constants.LEVEL_OPTION_FIXED);
                }
            }
        }, [
            _vm._v("\n    FIXED\n  ")
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8DXRW":[function() {},{}],"51l6R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LNQU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a6078e28acc7b85f");
    if (script.__esModule) script = script.default;
    script.render = require("78253e774b72afcf").render;
    script.staticRenderFns = require("78253e774b72afcf").staticRenderFns;
    script._scopeId = "data-v-1ccbe0";
    script.__cssModules = require("68271fd8de32be67").default;
    require("63ad1dcfd585400e").default(script);
    script.__scopeId = "data-v-1ccbe0";
    script.__file = "launch.vue";
};
initialize();
exports.default = script;

},{"a6078e28acc7b85f":"keaxv","78253e774b72afcf":"4Sam0","68271fd8de32be67":"ieZIT","63ad1dcfd585400e":"7FEWt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keaxv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../js/constants");
var _hasProperties = require("../js/hasProperties");
var _hasPropertiesDefault = parcelHelpers.interopDefault(_hasProperties);
var _generateGeographicContext = require("../js_build/generateGeographicContext");
var _generateGeographicContextDefault = parcelHelpers.interopDefault(_generateGeographicContext);
var scriptExports = {
    name: "launch",
    props: {
        update: {
            type: String,
            required: true
        },
        context: {
            // Allows for null value
            validator: (value)=>typeof value === "object"
        },
        config: {
            type: Object,
            required: true
        }
    },
    data () {
        this.viewer = window.spinal.ForgeViewer.viewer;
        return {
            layout: null,
            valid: [],
            invalid: [],
            propsLoaded: false,
            defineRef: false,
            showLoad: false,
            progression: {
                value: 0
            }
        };
    },
    watch: {
        update () {
            if (this.update == "opened") {
                this.propsLoaded = false;
                this.defineRef = false;
                this.showLoad = false;
                this.progression = {
                    value: 0
                };
            } else if (this.update == "configChanged") this.propsLoaded = false;
        }
    },
    methods: {
        /**
     * @typedef {Object} Layout An object containing all the informations of the layout
     * @property {Array<string>} types The types of the levels
     * @property {Array<string>} keys The keys of the levels
     * @property {Array<string>} relations The relation names associated to the types
     *
     * Creates the layout from raw input of the user in the layout step.
     * @returns {Layout} The loaded layout
     */ getLayout () {
            let layout = {
                types: [],
                keys: [],
                relations: []
            };
            for (let level of this.config.levels){
                if (level.type === "" || level.param === "") {
                    this.$emit("layoutError", "Incomplete layout");
                    return null;
                }
                layout.types.push(_constants.MAP_TYPES.get(level.type));
                layout.keys.push(level.param);
                layout.relations.push(_constants.MAP_RELATIONS.get(level.type));
            }
            layout.relations.push(_constants.EQUIPMENT_RELATION);
            return layout;
        },
        /**
     * Loads the valid and invalid props from the referential and the layout.
     */ async loadProps () {
            console.log("load Props");
            this.propsLoaded = false;
            this.layout = this.getLayout();
            if (this.layout === null) {
                this.propsLoaded = false;
                return;
            }
            const keys = [];
            for (let level of this.config.levels)if (level.option !== _constants.LEVEL_OPTION_FIXED) keys.push(level.param);
            const res = await (0, _hasPropertiesDefault.default)(this.config.referential, keys);
            this.valid = res.valid;
            this.invalid = res.invalid;
            this.propsLoaded = true;
        },
        /**
     * Selects the valid objects.
     */ selectValid () {
            const model = window.spinal.BimObjectService.currentModel;
            const dbIds = [];
            for (let prop of this.valid)dbIds.push(prop.dbId);
            this.viewer.select(dbIds, model);
        },
        /**
     * Selects the invalid objects.
     */ selectInvalid () {
            const model = window.spinal.BimObjectService.currentModel;
            this.viewer.select(this.invalid, model);
        },
        /**
     * Generates the geographic context from the loaded layout and objects.
     */ async generateContext () {
            this.showLoad = true;
            try {
                for (let [index, level] of this.config.levels.entries()){
                    if (level.option !== _constants.LEVEL_OPTION_FIXED) continue;
                    for (let prop of this.valid)prop.properties.splice(index, 0, {
                        value: level.param
                    });
                }
                await (0, _generateGeographicContextDefault.default)(this.context, this.layout, this.valid, this.progression, this.defineRef);
            } catch (e) {
                console.error(e);
            } finally{
                this.showLoad = false;
                this.progression.value = 0;
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/constants":"86OGX","../js/hasProperties":"jBUzB","../js_build/generateGeographicContext":"eGL1S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBUzB":[function(require,module,exports) {
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
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
/**
 * Returns a promise that resolves when the properties from the dbId are loaded.
 * @param {Object} model Model of the viewer
 * @param {number} dbId DbId from which to load the properties
 * @returns {Promise<Object>} Promise containing the properties of the BIM object
 */ function promiseGetPorperties(model, dbId) {
    return new Promise((resolve)=>{
        model.getProperties(dbId, resolve);
    });
}
/**
 * Returns an array of all the properties of an array of dbIds.
 * @param {Array<number>} dbIds DbIds to load
 * @returns {Array<Object>} Array of loaded properties
 */ function getProperties(dbIds) {
    const model = window.spinal.ForgeViewer.viewer.model;
    const props = [];
    for (let dbId of dbIds)props.push(promiseGetPorperties(model, dbId));
    return Promise.all(props);
}
/**
 * Takes the properties of a BIM object and the keys that it must have 
 * and returns a simplified object or null if the object doesn't have it.
 * @param {Object} prop Properties of a BIM object
 * @param {number} prop.dbId DbId of the object
 * @param {string} prop.name Name of the object
 * @param {Array<Object>} prop.properties Properties of the object
 * @param {Array<string>} keys Keys that the object must have
 * @returns {Object | null} The simplified object or null if the object doesn't have it
 */ function createSimplifiedProperty(prop, keys) {
    const simpleProp = {};
    simpleProp.properties = [];
    for (let [index, key] of keys.entries()){
        for (let property of prop.properties)if (property.displayName === key) {
            simpleProp.properties.push({
                key: key,
                value: property.displayValue.toString()
            });
            break;
        }
        if (typeof simpleProp.properties[index] === "undefined" || simpleProp.properties[index].value === "") return null;
    }
    simpleProp.dbId = prop.dbId;
    simpleProp.name = prop.name;
    return simpleProp;
}
/**
 * Adds documentation attributes to forge properties.
 * @param {Array<Object>} props Forge properties
 * @returns {Promise<>} An empty promise
 */ async function addBIMObjectProps(props) {
    let BIMObjects = [];
    const validProps = props.slice();
    for (let prop of props)BIMObjects.push(spinal.BimObjectService.getBIMObject(prop.dbId));
    BIMObjects = await Promise.all(BIMObjects);
    let i = 0;
    while(i < BIMObjects.length)if (typeof BIMObjects[i] === "undefined") {
        BIMObjects.splice(i, 1);
        validProps.splice(i, 1);
    } else i++;
    let attributes = [];
    for(let i = 0; i < BIMObjects.length; i++)attributes.push((0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAllAttributes(BIMObjects[i]));
    attributes = await Promise.all(attributes);
    for(let i = 0; i < attributes.length; i++){
        let prop = validProps[i];
        for (let attr of attributes[i]){
            let convert = {
                displayName: attr.label.get(),
                displayValue: attr.value.get()
            };
            prop.properties.push(convert);
        }
    }
}
/**
 * Takes an array of dbIds and some property keys and sort the dbIds
 * between those who have and those who don't have the keys.
 * @param {Array<number>} dbIds DbIds of the objects to test
 * @param {Array<string>} keys Keys that the objects must have to be valid
 * @returns {Object<valid, invalid>} An object containing the simplified properties of
 * the valid objects in its 'valid' property and the dbIds of the invalid objects in
 * its 'invalid' property.
 */ async function hasProperties(dbIds, keys) {
    const props = await getProperties(dbIds);
    const valid = [];
    const invalid = [];
    await addBIMObjectProps(props);
    for(let i = 0; i < props.length; i++){
        let simplified = createSimplifiedProperty(props[i], keys);
        if (simplified === null) invalid.push(dbIds[i]);
        else valid.push(simplified);
    }
    return {
        valid,
        invalid
    };
}
exports.default = hasProperties;

},{"spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGL1S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _spinalEnvViewerGraphService = require("a5a5cff8c93bca5b");
var _createTmpTree = _interopRequireDefault(require("d06b3bfee00be4ef"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _AsyncGenerator(fn.apply(this, arguments));
    };
}
function _AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
if (typeof Symbol === "function" && Symbol.asyncIterator) _AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
_AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
}
function _AwaitValue(value) {
    this.wrapped = value;
}
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol !== "undefined") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
const PROGRESS_BAR_SIZE_GET_PROPS = 10;
const PROGRESS_BAR_SIZE_CREATE_TREE = 10;
const PROGRESS_BAR_SIZE_CREATE_GRAPH = 80;
const MAX_NON_SYNCHRONIZED_NODES = 300;
/**
 * Finds the children in the node with the given names.
 * @param {SpinalNode} parent Parent node from which to get the child
 * @param {Iterator<String>} nodeNames Iterator over the names of the nodes
 * @param {String} relationName Relation in which to search
 * @returns {Array<SpinalNode | null} An array of the children that were found and of undefined
 */ function getChildrenByNames(_x7, _x8, _x9) {
    return _getChildrenByNames.apply(this, arguments);
}
/**
 * Recursively builds the geographic context from the given layout and
 * the temporary tree made of maps (nodes) and arrays (leafs), yielding every it adds a node.
 * @param {SpinalContext} context Context to which the nodes must belong
 * @param {SpinalNode} parent Parent to which the children must be added
 * @param {Map<string> | Array<String>} children Children to add to the parent
 * @param {Object} layout Object containing the types of the nodes and names of the relations
 * @param {Number} depth Depth of the recursion; determines what node type and relation name to use
 * @yields {Promise<SpinalNode>} A promise of the last node that was added to the graph
 */ function _getChildrenByNames() {
    _getChildrenByNames = _asyncToGenerator(function*(parent, nodeNames, relationName) {
        const children = yield _spinalEnvViewerGraphService.SpinalGraphService.getChildren(parent.id, relationName);
        const found = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;
        try {
            for(var _iterator4 = nodeNames[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                let name = _step4.value;
                found.push(children.find((child)=>{
                    return child.name.get() === name;
                }));
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) _iterator4.return();
            } finally{
                if (_didIteratorError4) throw _iteratorError4;
            }
        }
        return found;
    });
    return _getChildrenByNames.apply(this, arguments);
}
function generateGeoContextRec(_x, _x2, _x3, _x4, _x5, _x6) {
    return _generateGeoContextRec.apply(this, arguments);
}
/**
 * Waits for the nodes to be in the FileSystem.
 * @param {Array<Promise>} promises Array of promises containing the nodes
 * @returns {Promise<nothing>} An empty promise
 */ function _generateGeoContextRec() {
    _generateGeoContextRec = _wrapAsyncGenerator(function*(context, parent, children, layout, depth, ref) {
        console.log(children);
        if (children instanceof Map) {
            const foundChildren = yield _awaitAsyncGenerator(getChildrenByNames(parent, children.keys(), layout.relations[depth]));
            const entries = children.entries();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            try {
                for(var _iterator2 = foundChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    let child = _step2.value;
                    let _entries$next$value = _slicedToArray(entries.next().value, 2), name = _entries$next$value[0], value = _entries$next$value[1];
                    if (child === undefined) {
                        child = _spinalEnvViewerGraphService.SpinalGraphService.createNode({
                            name,
                            type: layout.types[depth]
                        });
                        yield _spinalEnvViewerGraphService.SpinalGraphService.addChildInContext(parent.id.get(), child, context.id.get(), layout.relations[depth], _spinalEnvViewerGraphService.SPINAL_RELATION_TYPE);
                        child = _spinalEnvViewerGraphService.SpinalGraphService.getInfo(child);
                    }
                    yield* _asyncGeneratorDelegate(_asyncIterator(generateGeoContextRec(context, child, value, layout, depth + 1, ref)), _awaitAsyncGenerator);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) _iterator2.return();
                } finally{
                    if (_didIteratorError2) throw _iteratorError2;
                }
            }
        } else {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;
            try {
                for(var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    let child = _step3.value;
                    // Will throw error if we try to add the same node twice
                    try {
                        if (ref) {
                            console.log("ref", child, parent, context);
                            yield window.spinal.BimObjectService.addReferenceObject(parent.id.get(), child.dbId, child.name);
                        } else {
                            console.log("addMin", child, parent, context);
                            yield window.spinal.BimObjectService.addBIMObject(context.id.get(), parent.id.get(), child.dbId, child.name);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) _iterator3.return();
                } finally{
                    if (_didIteratorError3) throw _iteratorError3;
                }
            }
        }
    });
    return _generateGeoContextRec.apply(this, arguments);
}
function waitForFileSystem(_x10) {
    return _waitForFileSystem.apply(this, arguments);
}
/**
 * Generates a geographic context using the autodesk forge object tree.
 * @param {SpinalContext} context Context to fill
 * @param {Object} layout Object containing the types, keys and relation names necessary to generate the context
 * @param {Array<Object>} props Properties to use
 * @param {Object<value: Number>} progression Object containing the progression of the generation
 * @param {Boolean} ref True if the objects must be reference objects
 * @returns {SpinalContext} The geographic context
 */ function _waitForFileSystem() {
    _waitForFileSystem = _asyncToGenerator(function*(promises) {
        let nodes = yield Promise.all(promises);
        return new Promise((resolve)=>{
            let inter = setInterval(()=>{
                nodes = nodes.filter((node)=>{
                    return FileSystem._objects[node._server_id] === undefined;
                });
                if (nodes.length === 0) {
                    clearInterval(inter);
                    resolve();
                }
            }, 500);
        });
    });
    return _waitForFileSystem.apply(this, arguments);
}
function generateGeoContext(_x11, _x12, _x13, _x14, _x15) {
    return _generateGeoContext.apply(this, arguments);
}
function _generateGeoContext() {
    _generateGeoContext = _asyncToGenerator(function*(context, layout, props, progression, ref) {
        progression.value = PROGRESS_BAR_SIZE_GET_PROPS;
        const tmpTree = layout.types.length > 0 ? (0, _createTmpTree.default)(props) : props;
        const incrProg = PROGRESS_BAR_SIZE_CREATE_GRAPH * MAX_NON_SYNCHRONIZED_NODES / props.length;
        let promises = [];
        progression.value += PROGRESS_BAR_SIZE_CREATE_TREE;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError;
        try {
            for(var _iterator = _asyncIterator(generateGeoContextRec(context, context, tmpTree, layout, 0, ref)), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true){
                let promise = _value;
                promises.push(promise);
                if (promises.length === MAX_NON_SYNCHRONIZED_NODES) {
                    progression.value += incrProg; // eslint-disable-next-line no-await-in-loop
                    yield waitForFileSystem(promises);
                    promises = [];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) yield _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        if (promises.length !== 0) yield waitForFileSystem(promises);
        progression.value = 100;
    });
    return _generateGeoContext.apply(this, arguments);
}
var _default = generateGeoContext;
exports.default = _default;

},{"a5a5cff8c93bca5b":"9n7zp","d06b3bfee00be4ef":"5HFWW"}],"5HFWW":[function(require,module,exports) {
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
 * Gets the values of the properties of the object.
 * @param {Object} prop Simplified infos of an object
 * @param {Array<Object>} prop.properties Array of the objects properties
 * @param {string} prop.properties[].value Value of the property
 * @returns {Array<string>} Array of the values of the properties of the object
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getCoordinates(prop) {
    const coordinates = [];
    for (let property of prop.properties)coordinates.push(property.value);
    return coordinates;
}
/**
 * Sorts the nodes of the tree.
 * @param {Map} tree Temporary tree
 * @returns {Map} The sorted tree
 */ function sortTree(tree) {
    if (tree instanceof Array) return tree.sort();
    for (let [key, value] of tree)tree[key] = sortTree(value);
    return new Map([
        ...tree.entries()
    ].sort());
}
/**
 * Creates a temporary tree from properties.
 * @param {Array<Object>} props Properties to use to create the tree
 * @returns {Map} The root of the temporary tree
 */ function createTmpTree(props) {
    const root = new Map();
    for (let prop of props){
        let coordinates = getCoordinates(prop);
        let node = root;
        let coord;
        for(let i = 0; i < coordinates.length - 1; i++){
            coord = coordinates[i];
            if (!node.has(coord)) node.set(coord, new Map());
            node = node.get(coord);
        }
        coord = coordinates[coordinates.length - 1];
        if (!node.has(coord)) node.set(coord, new Array());
        node = node.get(coord);
        node.push(prop);
    }
    return sortTree(root);
}
exports.default = createTmpTree;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Sam0":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        attrs: {
            "id": "launch-step"
        }
    }, [
        !_vm.showLoad ? _c("div", [
            _c("md-button", {
                staticClass: "md-raised md-primary",
                on: {
                    "click": _vm.loadProps
                }
            }, [
                _vm._v("\n      VERIFY OBJECTS\n    ")
            ]),
            _vm._v(" "),
            _vm.propsLoaded ? _c("div", [
                _c("md-button", {
                    on: {
                        "click": _vm.selectValid
                    }
                }, [
                    _vm._v("\n        " + _vm._s(_vm.valid.length) + " VALID OBJECTS\n      ")
                ]),
                _c("br"),
                _vm._v(" "),
                _c("md-button", {
                    on: {
                        "click": _vm.selectInvalid
                    }
                }, [
                    _vm._v("\n        " + _vm._s(_vm.invalid.length) + " INVALID OBJECTS\n      ")
                ]),
                _c("br"),
                _vm._v(" "),
                _c("md-checkbox", {
                    model: {
                        value: _vm.defineRef,
                        callback: function($$v) {
                            _vm.defineRef = $$v;
                        },
                        expression: "defineRef"
                    }
                }, [
                    _vm._v("\n        Define reference objects\n      ")
                ]),
                _vm._v(" "),
                _vm.valid.length !== 0 ? _c("md-button", {
                    staticClass: "md-raised md-primary",
                    on: {
                        "click": _vm.generateContext
                    }
                }, [
                    _vm._v("\n        LAUNCH CONTEXT GENERATION\n      ")
                ]) : _vm._e()
            ], 1) : _vm._e()
        ], 1) : _c("md-progress-bar", {
            attrs: {
                "id": "progress-bar",
                "md-value": _vm.progression.value
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ieZIT":[function() {},{}],"7FEWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1T4Nk":[function(require,module,exports) {
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
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultConfig", ()=>getDefaultConfig);
parcelHelpers.export(exports, "loadConfig", ()=>loadConfig);
parcelHelpers.export(exports, "saveConfig", ()=>saveConfig);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const DEFAULT_CONFIG = Object.freeze({
    useAllDbIds: true,
    referential: Object.freeze([]),
    levels: Object.freeze([])
});
/**
 * Returns a clone of DEFAULT_CONFIG.
 * @returns {Object} The DEFAULT_CONFIG clone
 */ function getDefaultConfig() {
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}
/**
 * Converts a list into an array.
 * @param {Lst} lst The list to convert
 * @returns {Array} The converted array
 */ function lstToArray(lst) {
    const arr = [];
    for(let i = 0; i < lst.length; i++)arr.push(lst[i].get());
    return arr;
}
/**
 * Loads the config from the context. If there is none, returns the default config.
 * @param {SpinalContext} context Context from which to load the config
 * @returns {Object} The config
 */ async function loadConfig(context) {
    const config = {};
    let contextElem;
    let modelConfig;
    try {
        contextElem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(context.id.get()).getElement();
        modelConfig = contextElem.config;
    } catch (e) {
        console.error(e);
        return getDefaultConfig();
    }
    if (typeof modelConfig === "undefined") return getDefaultConfig();
    config.useAllDbIds = modelConfig.useAllDbIds.get();
    config.referential = lstToArray(modelConfig.referential);
    config.levels = lstToArray(modelConfig.levels);
    return config;
}
/**
 * Saves the config into the context.
 * @param {SpinalContext} context Context in which to save the config
 * @param {Object} config Config to save
 */ async function saveConfig(context, config) {
    let contextElem;
    try {
        contextElem = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(context.id.get()).getElement();
    } catch (e) {
        console.error(e);
        return;
    }
    contextElem.mod_attr("config", config);
}

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwbeQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.context !== null && _vm.config !== null ? _c("div", [
        _c("h3", {
            attrs: {
                "id": "context-name"
            }
        }, [
            _vm._v("\n    " + _vm._s(this.context.name.get()) + "\n  ")
        ]),
        _vm._v(" "),
        _c("md-steppers", {
            attrs: {
                "id": "steppers",
                "md-vertical": "",
                "md-active-step": _vm.activeStep
            },
            on: {
                "update:mdActiveStep": function($event) {
                    _vm.activeStep = $event;
                },
                "update:md-active-step": function($event) {
                    _vm.activeStep = $event;
                }
            }
        }, [
            _c("md-step", {
                attrs: {
                    "id": "ref",
                    "md-label": "Choose referential"
                }
            }, [
                _c("referential-selection", {
                    attrs: {
                        "update": _vm.update,
                        "config": _vm.config
                    },
                    on: {
                        "configChanged": _vm.configChanged
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "layout",
                    "md-label": "Create layout",
                    "md-error": _vm.layoutError
                }
            }, [
                _c("layout", {
                    attrs: {
                        "levels": _vm.config.levels,
                        "show-warnings": _vm.layoutError !== null
                    },
                    on: {
                        "levelChanged": _vm.configChanged
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "launch",
                    "md-label": "Launch the generation"
                }
            }, [
                _c("launch", {
                    attrs: {
                        "update": _vm.update,
                        "context": _vm.context,
                        "config": _vm.config
                    },
                    on: {
                        "layoutError": function(e) {
                            return _vm.layoutError = e;
                        }
                    }
                })
            ], 1)
        ], 1)
    ], 1) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iJBzl":[function() {},{}],"eQWFV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"frO7t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
class GenerateGeoContextApp extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate a geographic context", "Generates a geographic context", {
            icon: "build",
            icon_type: "in",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const context = option.selectedNode;
        if (context.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("generate_geographic_context", option);
    }
}
exports.default = GenerateGeoContextApp;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-generate_geographic_context.094e65fb.js.map
