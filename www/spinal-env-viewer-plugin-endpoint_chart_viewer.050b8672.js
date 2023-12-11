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
})({"llL6V":[function(require,module,exports) {
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
var _endpointChartViewerPanelVue = require("./endpointChartViewerPanel.vue");
var _endpointChartViewerPanelVueDefault = parcelHelpers.interopDefault(_endpointChartViewerPanelVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const { spinalPanelManagerService } = require("c330929e436eea20");
const { SpinalForgeExtention } = require("fe79739a112c1e0");
const { spinalContextMenuService, SpinalContextApp } = require("c183c27801ae096a");
const extentionCreated = SpinalForgeExtention.createExtention({
    name: "endpoint_chart_viewer",
    vueMountComponent: (0, _vueDefault.default).extend((0, _endpointChartViewerPanelVueDefault.default)),
    panel: {
        title: "Endpoint Chart viewer",
        classname: "spinal-env-plugin-viewer-endpoint_chart_viewer",
        closeBehaviour: "delete"
    },
    style: {
        height: "80vh",
        left: "405px",
        width: "631px"
    },
    onLoad: function() {},
    onUnLoad: function() {}
});
SpinalForgeExtention.registerExtention("endpoint_chart_viewer", extentionCreated);
class EndpointChartViewerBtn extends SpinalContextApp {
    constructor(){
        super("Endpoint chart viewer", "open a panel with to show the value of the Endpoint", {
            icon: "show_chart",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option && option.selectedNode && option.selectedNode.type && option.selectedNode.type.get() === "BmsEndpoint") {
            const relNames = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRelationNames(option.selectedNode.id.get());
            for(let id = 0; id < relNames.length; id++){
                const element = relNames[id];
                if (element === "hasTimeSeries") return Promise.resolve(true);
            }
            return Promise.resolve(true);
        }
        return Promise.resolve(-1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("endpoint_chart_viewer", option);
    }
}
spinalContextMenuService.registerApp("GraphManagerSideBar", new EndpointChartViewerBtn(), [
    15
]);

},{"c330929e436eea20":"7Uw4d","fe79739a112c1e0":"1mGHd","vue":"gt5MM","./endpointChartViewerPanel.vue":"hEuRo","c183c27801ae096a":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"hEuRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("14b954c7622c597e");
    if (script.__esModule) script = script.default;
    script.render = require("f268f4e15ce09593").render;
    script.staticRenderFns = require("f268f4e15ce09593").staticRenderFns;
    script._scopeId = "data-v-c4fec0";
    script.__cssModules = require("f4fa6f5a2744d4fa").default;
    require("1e940583767df3c5").default(script);
    script.__scopeId = "data-v-c4fec0";
    script.__file = "endpointChartViewerPanel.vue";
};
initialize();
exports.default = script;

},{"14b954c7622c597e":"6MohN","f268f4e15ce09593":"9a05P","f4fa6f5a2744d4fa":"dMv6I","1e940583767df3c5":"hhrA8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MohN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _plotlyCompomentVue = require("./plotlyCompoment.vue");
var _plotlyCompomentVueDefault = parcelHelpers.interopDefault(_plotlyCompomentVue);
var _chartDataEndpointJs = require("./ChartDataEndpoint.js");
var _customDateIntervalDialogVue = require("./customDateIntervalDialog.vue");
var _customDateIntervalDialogVueDefault = parcelHelpers.interopDefault(_customDateIntervalDialogVue);
var _lodashUnion = require("lodash.union");
var _lodashUnionDefault = parcelHelpers.interopDefault(_lodashUnion);
var _map = require("./map");
var scriptExports = {
    name: "my_compo",
    components: {
        plotlyCompoment: (0, _plotlyCompomentVueDefault.default),
        customDateIntervalDialog: (0, _customDateIntervalDialogVueDefault.default)
    },
    data () {
        return {
            reloadData: 0,
            isDialogCustomOpen: false,
            btnSelected: "1h",
            buttons: [
                "1h",
                "3h",
                "24h",
                "J-1",
                "3J",
                "7J"
            ],
            timeSeriesData: [],
            dateAvailable: []
        };
    },
    computed: {
        isviewerV6 () {
            return parseInt(window.LMV_VIEWER_VERSION) === 6;
        }
    },
    methods: {
        async toogleSelect (nodeId) {
            const index = this.timeSeriesData.findIndex((elem)=>{
                return elem === nodeId;
            });
            if (index === -1) {
                let data;
                if (this.btnSelected === "CUSTOM") data = new (0, _chartDataEndpointJs.ChartDataEndpoint)(nodeId, this.btnSelected, this.lastStart, this.lastEnd);
                else data = new (0, _chartDataEndpointJs.ChartDataEndpoint)(nodeId, this.btnSelected);
                await data.init();
                (0, _map.timeSeriesMap).set(nodeId, data);
                this.timeSeriesData.push(nodeId);
            } else {
                const idToRemove = this.timeSeriesData[index];
                // for (let index of endpointToRemove) {
                // 	const t = timeSeriesMap.get(index);
                // 	t.uninit();
                // 	timeSeriesMap.delete(index);
                // }
                // const promises = endpointToRemove.map((index) => {
                const t = (0, _map.timeSeriesMap).get(idToRemove);
                (0, _map.timeSeriesMap).delete(idToRemove);
                await t.uninit();
                // });
                // await Promise.all(promises);
                this.timeSeriesData.splice(index, 1);
            }
            let tmp = this.timeSeriesData.map((nodeId)=>{
                const element = (0, _map.timeSeriesMap).get(nodeId);
                return element.dateAvailable;
            });
            tmp = (0, _lodashUnionDefault.default)(...tmp);
            tmp.sort((a, b)=>a - b);
            this.dateAvailable = tmp;
        },
        async onClick (value) {
            this.btnSelected = value;
            const promises = this.timeSeriesData.map((index)=>{
                const t = (0, _map.timeSeriesMap).get(index);
                return t.changeInterval(value);
            });
            // for (let index of this.timeSeriesData) {
            // 	const t = timeSeriesMap.get(index);
            // 	await t.changeInterval(value);
            // }
            await Promise.all(promises);
            this.reloadData++;
        },
        onClickCustom () {
            this.isDialogCustomOpen = true;
        },
        async closeDialogCustom (value) {
            const { start, end, valid } = value;
            this.isDialogCustomOpen = false;
            if (valid) {
                this.lastStart = start;
                this.lastEnd = end;
                this.btnSelected = "CUSTOM";
                // for (let index of this.timeSeriesData) {
                // 	const t = timeSeriesMap.get(index);
                // 	await t.changeCustomInterval(start, end);
                // }
                const promises = this.timeSeriesData.map((index)=>{
                    const t = (0, _map.timeSeriesMap).get(index);
                    return t.changeCustomInterval(start, end);
                });
                await Promise.all(promises);
                this.reloadData++;
            }
        },
        opened (option) {
            return this.toogleSelect(option.selectedNode.id.get());
        },
        removed () {
            for (let index of this.timeSeriesData){
                const t = (0, _map.timeSeriesMap).get(index);
                t.uninit();
            }
            this.timeSeriesData = [];
            (0, _map.resetTimeSeriesMap)();
        },
        closed () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./plotlyCompoment.vue":"5qhzN","./ChartDataEndpoint.js":"9yaKt","./customDateIntervalDialog.vue":"6sw55","lodash.union":"1oYVM","./map":"4CucY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qhzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4bc106588c46e008");
    if (script.__esModule) script = script.default;
    script.render = require("8a3335ff63ca01e6").render;
    script.staticRenderFns = require("8a3335ff63ca01e6").staticRenderFns;
    script._scopeId = "data-v-b3c772";
    script.__cssModules = require("db6b285aa8e6db81").default;
    require("1d690daf02288498").default(script);
    script.__scopeId = "data-v-b3c772";
    script.__file = "plotlyCompoment.vue";
};
initialize();
exports.default = script;

},{"4bc106588c46e008":"3XoWn","8a3335ff63ca01e6":"hhHyJ","db6b285aa8e6db81":"fI7SS","1d690daf02288498":"gcCDN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XoWn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chartOptionDialogVue = require("./chartOptionDialog.vue");
var _chartOptionDialogVueDefault = parcelHelpers.interopDefault(_chartOptionDialogVue);
var _timers = require("timers");
var _map = require("./map");
var global = arguments[3];
const globalType = typeof window === "undefined" ? global : window;
var scriptExports = {
    name: "plotlyComponent",
    components: {
        chartOptionDialog: (0, _chartOptionDialogVueDefault.default)
    },
    data () {
        return {
            chartData: [],
            selectedNames: "",
            optionOpen: false,
            isReady: false,
            haveData: false,
            lineMode: "lines",
            layout: {
                margin: {
                    b: 90,
                    t: 8,
                    pad: 4
                },
                font: {
                    size: 15,
                    color: "#FFFFFF"
                },
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                xaxis: {
                    rangeslider: null,
                    showgrid: false,
                    showline: true,
                    type: "date",
                    tickformat: "%d/%m/%Y %H:%M"
                },
                yaxis: {
                    showgrid: false,
                    showline: true
                },
                showlegend: true,
                legend: {
                    xanchor: "auto",
                    yanchor: "auto",
                    orientation: "v",
                    x: null,
                    y: null,
                    traceorder: "normal",
                    font: {
                        family: "sans-serif",
                        size: 12,
                        color: "#FFF"
                    },
                    bgcolor: "rgba(34,34,34,.9)",
                    bordercolor: "#424242",
                    borderwidth: 2
                }
            }
        };
    },
    props: [
        "data",
        "reloadData"
    ],
    computed: {
        isviewerV6 () {
            return parseInt(window.LMV_VIEWER_VERSION) === 6;
        }
    },
    mounted () {
        this.setChartData();
        this.init();
        this._graph_ = this.createGraph();
        this.intervalResize = setInterval(()=>{
            this.resize(this._graph_.gd, this._graph_.gd3);
        }, 1000);
    },
    watch: {
        // chartData: {
        // 	deep: true,
        // 	handler: function (val) {
        // 		this.updateGraph(val);
        // 	},
        // },
        data: function() {
            this.refreshData();
        },
        reloadData: function() {
            this.refreshData();
        }
    },
    beforeDestroy () {
        (0, _timers.clearInterval)(this.intervalResize);
    },
    methods: {
        init () {
            this.promUpdate = null;
            this.rect = {
                w: "100px",
                h: "100px"
            };
            this.my_chartData = [];
            this._graph_ = null;
        },
        updateObj (obj, data) {
            for(const key in data)if (data.hasOwnProperty(key)) {
                if (Array.isArray(data[key]) === false && typeof data[key] === "object" && data[key] !== null) {
                    if (typeof obj[key] === "undefined" || obj[key] === null) obj[key] = {};
                    this.updateObj(obj[key], data[key]);
                } else obj[key] = data[key];
            }
        },
        updateOptions (data) {
            this.updateObj(this.layout, data);
            globalType.Plotly.react(this._graph_.gd, this.my_chartData, this.layout, {
                modeBarButtonsToRemove: [
                    "sendDataToCloud"
                ],
                displaylogo: false,
                responsive: true
            });
        },
        updateLineMode (lineMode) {
            this.lineMode = lineMode;
            for(let idx = 0; idx < this.my_chartData.length; idx++){
                const myElement = this.my_chartData[idx];
                myElement.mode = lineMode;
            }
            globalType.Plotly.react(this._graph_.gd, this.my_chartData, this.layout, {
                modeBarButtonsToRemove: [
                    "sendDataToCloud"
                ],
                displaylogo: false,
                responsive: true
            });
        },
        updateGraph: function(chartData) {
            for(let index = 0; index < chartData.length; index++){
                const element = chartData[index];
                let found = false;
                for(let idx = 0; idx < this.my_chartData.length; idx++){
                    const myElement = this.my_chartData[idx];
                    if (element.nodeId === myElement.nodeId) {
                        if (element.x.length !== myElement.x.length || element.x[0] && element.x[0] !== myElement.x[0]) myElement.x = element.x, myElement.y = element.y;
                        found = true;
                        break;
                    }
                }
                if (found === false) this.my_chartData.push({
                    nodeId: element.nodeId,
                    mode: this.lineMode,
                    type: "scatter",
                    name: element.name,
                    x: element.x,
                    y: element.y
                });
            }
            const toDelete = [];
            for(let idx = 0; idx < this.my_chartData.length; idx++){
                const myElement = this.my_chartData[idx];
                let found = false;
                for(let index = 0; index < chartData.length; index++){
                    const element = chartData[index];
                    if (element.nodeId === myElement.nodeId) found = true;
                }
                if (found === false) toDelete.push(myElement);
            }
            for(let index = 0; index < toDelete.length; index++){
                const element = toDelete[index];
                const idx = this.my_chartData.indexOf(element);
                this.my_chartData.splice(idx, 1);
            }
            globalType.Plotly.react(this._graph_.gd, this.my_chartData, this.layout, {
                modeBarButtonsToRemove: [
                    "sendDataToCloud"
                ],
                displaylogo: false,
                responsive: true
            });
            for(let index = 0; index < this.my_chartData.length; index++){
                const element = this.my_chartData[index];
                if (element.x.length > 0) {
                    this.haveData = true;
                    this.isReady = true;
                    return;
                }
            }
            this.haveData = false;
            this.isReady = true;
            this.selectedNames = this.my_chartData.map((e)=>e.name).join(", ");
        },
        createGraph: function() {
            var d3 = globalType.Plotly.d3;
            var graphWidth = 100, graphHeight = 100;
            var gd3 = d3.select(document.getElementById("chart-data-endpoint-graph-container-plotgraph")).style({
                width: graphWidth + "%",
                height: graphHeight + "%"
            });
            var gd = gd3.node();
            return {
                gd: gd,
                gd3: gd3
            };
        },
        resize: function(gd, gd3) {
            let w = gd3.style("width");
            let h = gd3.style("height");
            if (this.rect.w !== w || this.rect.h !== h) {
                this.rect.w = w;
                this.rect.h = h;
                globalType.Plotly.Plots.resize(gd);
            }
        },
        setChartData () {
            this.chartData = Array.from((0, _map.timeSeriesMap).values());
        },
        refreshData () {
            console.log("refresh Data");
            this.setChartData();
            this.updateGraph(this.chartData);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./chartOptionDialog.vue":"g82jt","timers":"l8XYx","./map":"4CucY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g82jt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("be3159053e824345");
    if (script.__esModule) script = script.default;
    script.render = require("a5fb166d21e1cb3d").render;
    script.staticRenderFns = require("a5fb166d21e1cb3d").staticRenderFns;
    script._scopeId = "data-v-b0ff64";
    script.__cssModules = require("891359f93bedc151").default;
    require("a5dd891615be60df").default(script);
    script.__scopeId = "data-v-b0ff64";
    script.__file = "chartOptionDialog.vue";
};
initialize();
exports.default = script;

},{"be3159053e824345":"3zwze","a5fb166d21e1cb3d":"iWQI4","891359f93bedc151":"jgVtm","a5dd891615be60df":"l9NUO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zwze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "chartOptionDialog",
    data () {
        return {
            something: true
        };
    },
    props: [
        "isOpen",
        "layoutOption",
        "lineMode"
    ],
    computed: {
        lineModeComputed: {
            get () {
                return this.lineMode;
            },
            set (value) {
                this.$emit("updateLineMode", value);
            }
        },
        isOpenComputed: {
            get () {
                return this.isOpen;
            },
            set (value) {
                if (value === false) this.onClose();
            }
        },
        showLegendComputed: {
            get () {
                return this.layoutOption.showlegend;
            },
            set (value) {
                this.$emit("updateOptions", {
                    showlegend: value
                });
            }
        },
        orientation: {
            get () {
                return this.layoutOption.legend.orientation;
            },
            set (value) {
                this.$emit("updateOptions", {
                    legend: {
                        orientation: value
                    }
                });
            }
        },
        position: {
            get () {
                if (this.layoutOption.legend.x === null || this.layoutOption.legend.y === null) return false;
                return true;
            },
            set (value) {
                if (value === true) this.$emit("updateOptions", this.getOptionPosition(0, 1));
                else this.$emit("updateOptions", {
                    legend: {
                        x: null,
                        y: null,
                        xanchor: "auto",
                        yanchor: "auto"
                    }
                });
            }
        },
        positionX: {
            get () {
                return this.layoutOption.legend.x.toString();
            },
            set (value) {
                let x = value, y = this.layoutOption.legend.y;
                if (this.layoutOption.legend.y === null) y = 0;
                this.$emit("updateOptions", this.getOptionPosition(x, y));
            }
        },
        positionY: {
            get () {
                return this.layoutOption.legend.y.toString();
            },
            set (value) {
                let x = this.layoutOption.legend.x, y = value;
                if (this.layoutOption.legend.x === null) x = 0;
                this.$emit("updateOptions", this.getOptionPosition(x, y));
            }
        },
        positionAnchorX: {
            get () {
                return this.layoutOption.legend.xanchor;
            },
            set (value) {
                this.$emit("updateOptions", {
                    legend: {
                        xanchor: value
                    }
                });
            }
        },
        positionAnchorY: {
            get () {
                return this.layoutOption.legend.yanchor;
            },
            set (value) {
                this.$emit("updateOptions", {
                    legend: {
                        yanchor: value
                    }
                });
            }
        },
        rangeSlider: {
            get () {
                if (this.layoutOption.xaxis.rangeslider === null) return false;
                return true;
            },
            set (value) {
                this.$emit("updateOptions", {
                    xaxis: {
                        rangeslider: value ? {} : null
                    }
                });
            }
        }
    },
    methods: {
        getOptionPosition (x, y) {
            return {
                legend: {
                    x,
                    y
                }
            };
        },
        closeDialog () {
            this.isOpenComputed = false;
        },
        onClose () {
            this.$emit("closeDialog");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWQI4":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option",
        attrs: {
            "md-active": _vm.isOpenComputed,
            "md-close-on-esc": true,
            "md-click-outside-to-close": true,
            "md-closed": _vm.onClose
        },
        on: {
            "update:mdActive": function($event) {
                _vm.isOpenComputed = $event;
            },
            "update:md-active": function($event) {
                _vm.isOpenComputed = $event;
            }
        }
    }, [
        _c("md-dialog-title", [
            _vm._v("Chart Preferences")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "md-scrollbar"
        }, [
            _c("div", [
                _c("div", {
                    staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-container"
                }, [
                    _c("h5", {
                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-postion-header"
                    }, [
                        _vm._v("\n          Line Mode")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        attrs: {
                            "value": "lines"
                        },
                        model: {
                            value: _vm.lineModeComputed,
                            callback: function($$v) {
                                _vm.lineModeComputed = $$v;
                            },
                            expression: "lineModeComputed"
                        }
                    }, [
                        _vm._v("Lines")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        attrs: {
                            "value": "markers"
                        },
                        model: {
                            value: _vm.lineModeComputed,
                            callback: function($$v) {
                                _vm.lineModeComputed = $$v;
                            },
                            expression: "lineModeComputed"
                        }
                    }, [
                        _vm._v("Markers")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        attrs: {
                            "value": "lines+markers"
                        },
                        model: {
                            value: _vm.lineModeComputed,
                            callback: function($$v) {
                                _vm.lineModeComputed = $$v;
                            },
                            expression: "lineModeComputed"
                        }
                    }, [
                        _vm._v("Lines + Markers")
                    ])
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-container"
                }, [
                    _c("md-checkbox", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "you may need to resize the panel.",
                                expression: "'you may need to resize the panel.'"
                            }
                        ],
                        attrs: {
                            "true-value": "true",
                            "false-value": "false"
                        },
                        model: {
                            value: _vm.rangeSlider,
                            callback: function($$v) {
                                _vm.rangeSlider = $$v;
                            },
                            expression: "rangeSlider"
                        }
                    }, [
                        _vm._v("Use range slider")
                    ]),
                    _vm._v(" "),
                    _vm.rangeSlider ? _c("div", [
                        _c("em", [
                            _vm._v("If the pannel is too small the range slider may not showup.")
                        ])
                    ]) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-container",
                    class: {
                        "endpoint-chart-viewer-panel-dialog-chart-option-container-border": _vm.showLegendComputed
                    }
                }, [
                    _c("md-checkbox", {
                        attrs: {
                            "true-value": "true",
                            "false-value": "false"
                        },
                        model: {
                            value: _vm.showLegendComputed,
                            callback: function($$v) {
                                _vm.showLegendComputed = $$v;
                            },
                            expression: "showLegendComputed"
                        }
                    }, [
                        _vm._v("Show Legend")
                    ]),
                    _vm._v(" "),
                    _vm.showLegendComputed ? _c("div", {
                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-container-legend"
                    }, [
                        _c("div", [
                            _c("md-radio", {
                                attrs: {
                                    "value": "h"
                                },
                                model: {
                                    value: _vm.orientation,
                                    callback: function($$v) {
                                        _vm.orientation = $$v;
                                    },
                                    expression: "orientation"
                                }
                            }, [
                                _vm._v("Horizontal")
                            ]),
                            _vm._v(" "),
                            _c("md-radio", {
                                attrs: {
                                    "value": "v"
                                },
                                model: {
                                    value: _vm.orientation,
                                    callback: function($$v) {
                                        _vm.orientation = $$v;
                                    },
                                    expression: "orientation"
                                }
                            }, [
                                _vm._v("Vertical")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("div", {
                            class: {
                                "endpoint-chart-viewer-panel-dialog-chart-option-container-legend-subcontainer": _vm.position
                            }
                        }, [
                            _c("md-checkbox", {
                                attrs: {
                                    "true-value": "true",
                                    "false-value": "false"
                                },
                                model: {
                                    value: _vm.position,
                                    callback: function($$v) {
                                        _vm.position = $$v;
                                    },
                                    expression: "position"
                                }
                            }, [
                                _vm._v("Override default Position")
                            ]),
                            _vm._v(" "),
                            _vm.position ? _c("div", [
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", [
                                    _c("h5", {
                                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-postion-header"
                                    }, [
                                        _vm._v("Vertical\n                  Postion")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "0"
                                        },
                                        model: {
                                            value: _vm.positionX,
                                            callback: function($$v) {
                                                _vm.positionX = $$v;
                                            },
                                            expression: "positionX"
                                        }
                                    }, [
                                        _vm._v("left")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "0.5"
                                        },
                                        model: {
                                            value: _vm.positionX,
                                            callback: function($$v) {
                                                _vm.positionX = $$v;
                                            },
                                            expression: "positionX"
                                        }
                                    }, [
                                        _vm._v("center")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "1"
                                        },
                                        model: {
                                            value: _vm.positionX,
                                            callback: function($$v) {
                                                _vm.positionX = $$v;
                                            },
                                            expression: "positionX"
                                        }
                                    }, [
                                        _vm._v("right")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", [
                                    _c("h5", {
                                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-postion-header"
                                    }, [
                                        _vm._v("Vertical\n                  Anchor Postion")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "auto"
                                        },
                                        model: {
                                            value: _vm.positionAnchorX,
                                            callback: function($$v) {
                                                _vm.positionAnchorX = $$v;
                                            },
                                            expression: "positionAnchorX"
                                        }
                                    }, [
                                        _vm._v("auto")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "left"
                                        },
                                        model: {
                                            value: _vm.positionAnchorX,
                                            callback: function($$v) {
                                                _vm.positionAnchorX = $$v;
                                            },
                                            expression: "positionAnchorX"
                                        }
                                    }, [
                                        _vm._v("left")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "center"
                                        },
                                        model: {
                                            value: _vm.positionAnchorX,
                                            callback: function($$v) {
                                                _vm.positionAnchorX = $$v;
                                            },
                                            expression: "positionAnchorX"
                                        }
                                    }, [
                                        _vm._v("center")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "right"
                                        },
                                        model: {
                                            value: _vm.positionAnchorX,
                                            callback: function($$v) {
                                                _vm.positionAnchorX = $$v;
                                            },
                                            expression: "positionAnchorX"
                                        }
                                    }, [
                                        _vm._v("right")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", [
                                    _c("h5", {
                                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-postion-header"
                                    }, [
                                        _vm._v("Horizontal\n                  Postion")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "1"
                                        },
                                        model: {
                                            value: _vm.positionY,
                                            callback: function($$v) {
                                                _vm.positionY = $$v;
                                            },
                                            expression: "positionY"
                                        }
                                    }, [
                                        _vm._v("top")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "0.5"
                                        },
                                        model: {
                                            value: _vm.positionY,
                                            callback: function($$v) {
                                                _vm.positionY = $$v;
                                            },
                                            expression: "positionY"
                                        }
                                    }, [
                                        _vm._v("middle")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "0"
                                        },
                                        model: {
                                            value: _vm.positionY,
                                            callback: function($$v) {
                                                _vm.positionY = $$v;
                                            },
                                            expression: "positionY"
                                        }
                                    }, [
                                        _vm._v("bottom")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", [
                                    _c("h5", {
                                        staticClass: "endpoint-chart-viewer-panel-dialog-chart-option-postion-header"
                                    }, [
                                        _vm._v("Horizontal\n                  Anchor Postion")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "auto"
                                        },
                                        model: {
                                            value: _vm.positionAnchorY,
                                            callback: function($$v) {
                                                _vm.positionAnchorY = $$v;
                                            },
                                            expression: "positionAnchorY"
                                        }
                                    }, [
                                        _vm._v("auto")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "top"
                                        },
                                        model: {
                                            value: _vm.positionAnchorY,
                                            callback: function($$v) {
                                                _vm.positionAnchorY = $$v;
                                            },
                                            expression: "positionAnchorY"
                                        }
                                    }, [
                                        _vm._v("top")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "middle"
                                        },
                                        model: {
                                            value: _vm.positionAnchorY,
                                            callback: function($$v) {
                                                _vm.positionAnchorY = $$v;
                                            },
                                            expression: "positionAnchorY"
                                        }
                                    }, [
                                        _vm._v("middle")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-radio", {
                                        attrs: {
                                            "value": "bottom"
                                        },
                                        model: {
                                            value: _vm.positionAnchorY,
                                            callback: function($$v) {
                                                _vm.positionAnchorY = $$v;
                                            },
                                            expression: "positionAnchorY"
                                        }
                                    }, [
                                        _vm._v("bottom")
                                    ])
                                ], 1)
                            ]) : _vm._e()
                        ], 1)
                    ]) : _vm._e()
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.closeDialog
                }
            }, [
                _vm._v("Close")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jgVtm":[function() {},{}],"l9NUO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8XYx":[function(require,module,exports) {
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

},{"96b87729426a727d":"d5jf4"}],"4CucY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeSeriesMap", ()=>timeSeriesMap);
parcelHelpers.export(exports, "resetTimeSeriesMap", ()=>resetTimeSeriesMap);
let timeSeriesMap = new Map();
const resetTimeSeriesMap = ()=>{
    timeSeriesMap = new Map();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhHyJ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "chart-data-endpoint-graph-container"
    }, [
        _c("md-content", {
            attrs: {
                "id": "chart-data-endpoint-graph-container-plotgraph"
            }
        }),
        _vm._v(" "),
        _vm.isReady && _vm.chartData.length <= 0 ? _c("md-empty-state", {
            staticClass: "chart-data-endpoint-graph-container-empty",
            attrs: {
                "md-icon": "show_chart",
                "md-label": "No Endpoint selected"
            }
        }) : _vm.isReady && !_vm.haveData ? _c("md-empty-state", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.selectedNames,
                    expression: "selectedNames"
                }
            ],
            staticClass: "chart-data-endpoint-graph-container-empty",
            attrs: {
                "md-icon": "show_chart",
                "md-label": "No Data",
                "md-description": "No data to show in the Endpoint(s) Selected !"
            }
        }) : _vm._e(),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-icon-button md-primary md-raised chart-data-endpoint-graph-container-option-button",
            class: {
                autodeskv6: _vm.isviewerV6
            },
            on: {
                "click": function($event) {
                    _vm.optionOpen = true;
                }
            }
        }, [
            _c("md-icon", [
                _vm._v("settings")
            ])
        ], 1),
        _vm._v(" "),
        _c("chartOptionDialog", {
            attrs: {
                "isOpen": _vm.optionOpen,
                "layoutOption": this.layout,
                "lineMode": _vm.lineMode
            },
            on: {
                "updateLineMode": _vm.updateLineMode,
                "closeDialog": function($event) {
                    _vm.optionOpen = false;
                },
                "updateOptions": _vm.updateOptions
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fI7SS":[function() {},{}],"gcCDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yaKt":[function(require,module,exports) {
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
parcelHelpers.export(exports, "ChartDataEndpoint", ()=>ChartDataEndpoint);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _asyncGenToArray = require("./asyncGenToArray/asyncGenToArray");
var _btnMappingDate = require("./BtnMappingDate");
var _btnMappingDateDefault = parcelHelpers.interopDefault(_btnMappingDate);
var _timeseriesServiceInstanceJs = require("./timeseriesServiceInstance.js");
class ChartDataEndpoint {
    constructor(nodeId, timeIntervalStr = "1h", start = null, end = null){
        this.nodeId = nodeId;
        this.currentValue = 0;
        this.name = "";
        this.timeIntervalStr = timeIntervalStr;
        this.x = [];
        this.y = [];
        this.unbind = null;
        this.updateprom = null;
        this.start = new Date(start);
        this.end = new Date(end);
        this.dateAvailable = [];
    }
    async init() {
        const n = await this.getElement();
        this.unbind = n.bind(()=>{
            this.update();
        });
        return this.update();
    }
    update() {
        if (this.updateprom !== null) return this.updateprom;
        this.updateprom = this.prom_update().then(()=>{
            this.updateprom = null;
        });
        return this.updateprom;
    }
    async prom_update() {
        const element = await this.getElement();
        this.name = element.name.get();
        this.currentValue = element.currentValue.get();
        if (typeof this.currentValue === "number" || typeof this.currentValue === "boolean") {
            const timeseries = await (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getOrCreateTimeSeries(this.nodeId);
            if (this.timeIntervalStr === "CUSTOM") {
                const generator = await timeseries.getFromIntervalTime(this.start, this.end);
                this.handleTimeseries(generator);
            } else {
                const func = (0, _btnMappingDateDefault.default)[this.timeIntervalStr];
                if (func && typeof func[0] === "function") {
                    const timeseriesData = await func[0](timeseries, func[1]);
                    const generator = await (0, _asyncGenToArray.asyncGenToArray)(timeseriesData);
                    this.handleTimeseries(generator);
                }
            }
            const tsArchive = await timeseries.getArchive();
            this.dateAvailable = tsArchive.getDates().get();
        }
    }
    handleTimeseries(generator) {
        const x = [];
        const y = [];
        for (const element of generator){
            x.push(element.date);
            y.push(element.value);
        }
        if (y.length !== this.y.length || x[0] !== this.x[0]) {
            this.x = x;
            this.y = y;
        }
    }
    changeInterval(value) {
        this.timeIntervalStr = value;
        return this.update();
    }
    changeCustomInterval(start, end) {
        this.timeIntervalStr = "CUSTOM";
        this.start = new Date(start);
        this.end = new Date(end);
        return this.update();
    }
    getElement() {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.nodeId);
        const ptr = node.element.ptr;
        if (ptr.data.value && ptr.data.value !== 0) {
            if (typeof (0, _spinalCoreConnectorjsType.FileSystem)._objects[ptr.data.value] !== "undefined") return Promise.resolve((0, _spinalCoreConnectorjsType.FileSystem)._objects[ptr.data.value]);
        }
        return node.element.load();
    }
    async uninit() {
        if (this.unbind !== null) {
            const n = await this.getElement();
            n.unbind(this.unbind);
        }
    }
}
exports.default = ChartDataEndpoint;

},{"spinal-core-connectorjs_type":"fRH70","spinal-env-viewer-graph-service":"9n7zp","./asyncGenToArray/asyncGenToArray":"fnIG0","./BtnMappingDate":"5rDz1","./timeseriesServiceInstance.js":"kfv6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnIG0":[function(require,module,exports) {
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
var __asyncValues = this && this.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
function asyncGenToArray(asyncGen) {
    var asyncGen_1, asyncGen_1_1;
    return __awaiter(this, void 0, void 0, function*() {
        var e_1, _a;
        const res = [];
        try {
            for(asyncGen_1 = __asyncValues(asyncGen); asyncGen_1_1 = yield asyncGen_1.next(), !asyncGen_1_1.done;){
                const data = asyncGen_1_1.value;
                res.push(data);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (asyncGen_1_1 && !asyncGen_1_1.done && (_a = asyncGen_1.return)) yield _a.call(asyncGen_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return res;
    });
}
exports.default = asyncGenToArray;
exports.asyncGenToArray = asyncGenToArray;

},{}],"5rDz1":[function(require,module,exports) {
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
var _timeseriesServiceInstanceJs = require("./timeseriesServiceInstance.js");
exports.default = {
    "1h": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromLastHours,
        1
    ],
    "3h": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromLastHours,
        3
    ],
    "24h": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromLast24Hours,
        null
    ],
    "J-1": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromYesterday,
        null
    ],
    "3J": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromLastHours,
        72
    ],
    "7J": [
        (0, _timeseriesServiceInstanceJs.spinalServiceTimeseries).getDataFromLastHours,
        168
    ]
};

},{"./timeseriesServiceInstance.js":"kfv6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfv6x":[function(require,module,exports) {
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
parcelHelpers.export(exports, "spinalServiceTimeseries", ()=>spinalServiceTimeseries);
var _spinalModelTimeseries = require("spinal-model-timeseries");
const spinalServiceTimeseries = new (0, _spinalModelTimeseries.SpinalServiceTimeseries)();
exports.default = spinalServiceTimeseries;

},{"spinal-model-timeseries":"hIcty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sw55":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("90984fb233593b57");
    if (script.__esModule) script = script.default;
    script.render = require("5c0c80c32dfd4be4").render;
    script.staticRenderFns = require("5c0c80c32dfd4be4").staticRenderFns;
    script._scopeId = "data-v-cff2e0";
    script.__cssModules = require("8fbff0a875b0544e").default;
    require("238c94283df6ae60").default(script);
    script.__scopeId = "data-v-cff2e0";
    script.__file = "customDateIntervalDialog.vue";
};
initialize();
exports.default = script;

},{"90984fb233593b57":"d7DPB","5c0c80c32dfd4be4":"lOvDF","8fbff0a875b0544e":"amUj9","238c94283df6ae60":"ksja2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7DPB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var scriptExports = {
    name: "customDateIntervalDialog",
    props: [
        "isOpen",
        "dateAvailable"
    ],
    data () {
        const today = new Date();
        today.setUTCHours(23, 59, 59);
        return {
            hint: "Select the starting point to show",
            format: "YYYY-MM-DD HH:mm:ss",
            today: today.toISOString(),
            start: null,
            end: null,
            valid: false
        };
    },
    computed: {
        startCompu: {
            get () {
                if (this.start === null) return "Other";
                const data = new Date(this.start.valueOf());
                data.setUTCHours(0, 0, 0, 0);
                for(let idx = 0; idx < this.dateAvailableCompu.length; idx++){
                    const element = this.dateAvailableCompu[idx];
                    if (data.getTime() === element) return data.toISOString();
                }
                return "Other";
            },
            set (value) {
                if (value === "Other") return;
                this.start = (0, _momentDefault.default).utc(value);
            }
        },
        startPickerCompu: {
            get () {
                if (this.start === null) return null;
                else return new Date(this.start).toISOString();
            },
            set (value) {
                this.start = (0, _momentDefault.default).utc(value, "YYYY-MM-DD HH:mm:ss");
            }
        },
        endCompu: {
            get () {
                if (this.end === null) return "Other";
                const data = new Date(this.end.valueOf());
                data.setUTCHours(0.0, 0, 0);
                for(let idx = 0; idx < this.dateAvailableCompu.length; idx++){
                    const element = this.dateAvailableCompu[idx];
                    if (data.getTime() === element) return this.selectDateStart(data);
                }
                return "Other";
            },
            set (value) {
                if (value === "Other") return;
                this.end = (0, _momentDefault.default).utc(value).hours(23).minutes(59).second(59);
            }
        },
        endPickerCompu: {
            get () {
                if (this.end === null) return null;
                else return new Date(this.end).toISOString();
            },
            set (value) {
                this.end = (0, _momentDefault.default).utc(value, "YYYY-MM-DD HH:mm:ss");
            }
        },
        dateAvailableCompu () {
            return this.dateAvailable || [];
        },
        isOpenComputed: {
            get () {
                return this.isOpen;
            },
            set (value) {
                if (value === false) this.onClose();
            }
        },
        endStart () {
            if (this.start === null) return null;
            const startDate = new Date(this.start);
            startDate.setUTCHours(-1, 0, 0, 0);
            return startDate.toISOString();
        }
    },
    methods: {
        selectDateStart (date) {
            let m_date = new Date(date);
            return new Date(m_date.setUTCHours(0, 0, 0, 0)).toISOString();
        },
        selectDateEnd (date) {
            let m_date = new Date(date);
            return new Date(m_date.setUTCHours(23, 59, 59, 999)).toISOString();
        },
        formatDate (date) {
            return new Date(date).toDateString();
        },
        closeDialog (valid) {
            this.valid = valid;
            this.isOpenComputed = false;
        },
        onClose () {
            let valid = this.valid;
            if (this.end === null || this.start === null) valid = false;
            this.valid = false;
            this.$emit("closeDialog", {
                start: this.start,
                end: this.end,
                valid: valid
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"moment":"jwcsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOvDF":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "endpoint-chart-viewer-panel-dialog-custom-interval",
        attrs: {
            "md-active": _vm.isOpenComputed,
            "md-close-on-esc": true,
            "md-click-outside-to-close": true,
            "md-closed": _vm.onClose
        },
        on: {
            "update:mdActive": function($event) {
                _vm.isOpenComputed = $event;
            },
            "update:md-active": function($event) {
                _vm.isOpenComputed = $event;
            }
        }
    }, [
        _c("md-dialog-content", {
            staticClass: "md-scrollbar"
        }, [
            _c("div", {
                staticClass: "md-layout"
            }),
            _vm._v(" "),
            _c("div", {
                staticClass: "md-layout"
            }, [
                _c("div", {
                    staticClass: "md-layout-item endpoint-chart-viewer-panel-dialog-custom-interval-calendar-container"
                }, [
                    _c("md-field", [
                        _c("label", {
                            attrs: {
                                "for": "start"
                            }
                        }, [
                            _vm._v("Start")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            attrs: {
                                "name": "start",
                                "id": "start"
                            },
                            model: {
                                value: _vm.startCompu,
                                callback: function($$v) {
                                    _vm.startCompu = $$v;
                                },
                                expression: "startCompu"
                            }
                        }, [
                            _c("md-option", {
                                attrs: {
                                    "value": "Other"
                                }
                            }, [
                                _vm._v("Other")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.dateAvailableCompu, function(date) {
                                return _c("md-option", {
                                    key: date,
                                    attrs: {
                                        "value": _vm.selectDateStart(date)
                                    }
                                }, [
                                    _vm._v(_vm._s(_vm.formatDate(date)))
                                ]);
                            })
                        ], 2)
                    ], 1),
                    _vm._v(" "),
                    _c("VueCtkDateTimePicker", {
                        attrs: {
                            "max-date": _vm.endPickerCompu,
                            "dark": true,
                            "hint": _vm.hint,
                            "format": _vm.format,
                            "noButtonNow": false,
                            "inline": true
                        },
                        model: {
                            value: _vm.startPickerCompu,
                            callback: function($$v) {
                                _vm.startPickerCompu = $$v;
                            },
                            expression: "startPickerCompu"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "md-layout-item endpoint-chart-viewer-panel-dialog-custom-interval-calendar-container"
                }, [
                    _c("md-field", [
                        _c("label", {
                            attrs: {
                                "for": "end"
                            }
                        }, [
                            _vm._v("End")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            attrs: {
                                "name": "end",
                                "id": "end"
                            },
                            model: {
                                value: _vm.endCompu,
                                callback: function($$v) {
                                    _vm.endCompu = $$v;
                                },
                                expression: "endCompu"
                            }
                        }, [
                            _c("md-option", {
                                attrs: {
                                    "value": "Other"
                                }
                            }, [
                                _vm._v("Other")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.dateAvailableCompu, function(date) {
                                return _c("md-option", {
                                    key: date,
                                    attrs: {
                                        "value": _vm.selectDateStart(date)
                                    }
                                }, [
                                    _vm._v(_vm._s(_vm.formatDate(date)))
                                ]);
                            })
                        ], 2)
                    ], 1),
                    _vm._v(" "),
                    _c("VueCtkDateTimePicker", {
                        attrs: {
                            "max-date": _vm.today,
                            "min-date": _vm.endStart,
                            "dark": true,
                            "hint": _vm.hint,
                            "format": _vm.format,
                            "noButtonNow": false,
                            "inline": true
                        },
                        model: {
                            value: _vm.endPickerCompu,
                            callback: function($$v) {
                                _vm.endPickerCompu = $$v;
                            },
                            expression: "endPickerCompu"
                        }
                    })
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.start === null || _vm.end === null
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Valid")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"amUj9":[function() {},{}],"ksja2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oYVM":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var global = arguments[3];
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]";
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */ function arrayIncludes(array, value) {
    var length = array ? array.length : 0;
    return !!length && baseIndexOf(array, value, 0) > -1;
}
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */ function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array ? array.length : 0;
    while(++index < length){
        if (comparator(value, array[index])) return true;
    }
    return false;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) return index;
    }
    return -1;
}
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    if (value !== value) return baseFindIndex(array, baseIsNaN, fromIndex);
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) return index;
    }
    return -1;
}
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var Symbol = root.Symbol, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map"), Set = getNative(root, "Set"), nativeCreate = getNative(Object, "create");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values ? values.length : 0;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
            else arrayPush(result, value);
        } else if (!isStrict) result[result.length] = value;
    }
    return result;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
    };
}
/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */ function baseUniq(array, iteratee, comparator) {
    var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) return setToArray(set);
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
    } else seen = iteratee ? [] : result;
    outer: while(++index < length){
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while(seenIndex--){
                if (seen[seenIndex] === computed) continue outer;
            }
            if (iteratee) seen.push(computed);
            result.push(value);
        } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) seen.push(computed);
            result.push(value);
        }
    }
    return result;
}
/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */ var createSet = !(Set && 1 / setToArray(new Set([
    ,
    -0
]))[1] == INFINITY) ? noop : function(values) {
    return new Set(values);
};
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */ var union = baseRest(function(arrays) {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */ function noop() {
// No operation performed.
}
module.exports = union;

},{}],"9a05P":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "endpoint-chart-viewer-panel"
    }, [
        _c("div", {
            staticClass: "md-layout endpoint-chart-viewer-panel-topbtn-container"
        }, [
            _vm._l(_vm.buttons, function(value) {
                return _c("md-button", {
                    key: value,
                    staticClass: "md-layout-item topbtn",
                    class: {
                        "raise-disable": value === _vm.btnSelected
                    },
                    attrs: {
                        "disabled": value === _vm.btnSelected
                    },
                    on: {
                        "click": function($event) {
                            return _vm.onClick(value);
                        }
                    }
                }, [
                    _vm._v(_vm._s(value))
                ]);
            }),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-layout-item topbtn",
                class: {
                    "raise-disable": "CUSTOM" === _vm.btnSelected
                },
                attrs: {
                    "disabled": _vm.value === _vm.btnSelected
                },
                on: {
                    "click": _vm.onClickCustom
                }
            }, [
                _vm._v("CUSTOM")
            ])
        ], 2),
        _vm._v(" "),
        _c("div", {
            staticClass: "md-layout md-alignment-center-center endpoint-chart-viewer-panel-chart-container",
            class: {
                autodeskv6: _vm.isviewerV6
            }
        }, [
            _c("plotlyCompoment", {
                attrs: {
                    "data": _vm.timeSeriesData,
                    "reloadData": _vm.reloadData
                }
            })
        ], 1),
        _vm._v(" "),
        _c("customDateIntervalDialog", {
            attrs: {
                "dateAvailable": _vm.dateAvailable,
                "isOpen": _vm.isDialogCustomOpen
            },
            on: {
                "closeDialog": _vm.closeDialogCustom
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dMv6I":[function() {},{}],"hhrA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"eV0id":[function(require,module,exports) {
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

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-endpoint_chart_viewer.050b8672.js.map
