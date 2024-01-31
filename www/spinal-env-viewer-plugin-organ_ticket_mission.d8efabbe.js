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
})({"iN1hs":[function(require,module,exports) {
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
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkAndManageContextTicketMissionVue = require("./src/views/LinkAndManageContextTicketMission.vue");
var _linkAndManageContextTicketMissionVueDefault = parcelHelpers.interopDefault(_linkAndManageContextTicketMissionVue);
var _linkAndManageContextTicketMissionBtn = require("./src/buttons/LinkAndManageContextTicketMissionBtn");
const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _linkAndManageContextTicketMissionBtn.LinkAndManageContextTicketMissionBtn)(), [
    7
]);
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("LinkAndManageContextTicketMission", (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "LinkAndManageContextTicketMission",
    vueMountComponent: (0, _vueDefault.default).extend((0, _linkAndManageContextTicketMissionVueDefault.default)),
    parentContainer: document.body,
    panel: {
        title: "Link And Manage Mission",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "405px",
        width: "500px",
        height: "250px"
    }
}));

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","vue":"gt5MM","./src/views/LinkAndManageContextTicketMission.vue":"6ub1R","./src/buttons/LinkAndManageContextTicketMissionBtn":"3jxTN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"6ub1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7d6b764ab470b9b2");
    if (script.__esModule) script = script.default;
    script.render = require("c7abcc866f4ec8fc").render;
    script.staticRenderFns = require("c7abcc866f4ec8fc").staticRenderFns;
    script._scopeId = "data-v-7f56c0";
    script.__cssModules = require("464d0e3b2573882").default;
    require("868f24a75dd03ab3").default(script);
    script.__scopeId = "data-v-7f56c0";
    script.__file = "LinkAndManageContextTicketMission.vue";
};
initialize();
exports.default = script;

},{"7d6b764ab470b9b2":"hv410","c7abcc866f4ec8fc":"j0ejj","464d0e3b2573882":"jWouQ","868f24a75dd03ab3":"c4zxG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hv410":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _setUpSelectedOrganVue = require("./SetUpSelectedOrgan.vue");
var _setUpSelectedOrganVueDefault = parcelHelpers.interopDefault(_setUpSelectedOrganVue);
var _setUpContextEquipVue = require("./SetUpContextEquip.vue");
var _setUpContextEquipVueDefault = parcelHelpers.interopDefault(_setUpContextEquipVue);
var scriptExports = {
    name: "LinkAndManageContextTicketMission",
    components: {
        SetUpSelectedOrgan: (0, _setUpSelectedOrganVueDefault.default),
        SetUpContextEquip: (0, _setUpContextEquipVueDefault.default)
    },
    data: function() {
        return {
            openSetup: false,
            openSetupEquip: false,
            contextId: "",
            linked: false,
            status: -1,
            serverId: 0,
            restart: false,
            fabBtn: false
        };
    },
    computed: {
        statusCompu () {
            if (this.linked === false) return "Not linked";
            if (this.restart === true) return "Restarting";
            switch(this.status){
                case 0:
                    return "Stand By";
                case 1:
                    return "Sync spatial";
                case 2:
                    return "Sync process";
                case 3:
                    return "Running";
                case 4:
                    return "Sync Equipments";
                default:
                    return "Stand By";
            }
        },
        statusIconCompu () {
            if (this.linked === false) return "settings";
            if (this.restart === true) return "refresh";
            switch(this.status){
                case 0:
                    return "done";
                case 1:
                    return "location_city";
                case 2:
                    return "assignment_returned";
                case 3:
                    return "play_arrow";
                case 4:
                    return "device_hub";
                default:
                    return "done";
            }
        },
        spin () {
            if (this.restart === true || this.status === 1 || this.status === 2) return true;
            return false;
        },
        disableBtn () {
            if (this.linked === true && this.spin === false) return false;
            return true;
        },
        runStopCompu () {
            if (this.linked === true && this.status === 3) return "Stop";
            return "Run";
        },
        runStopIconCompu () {
            if (this.linked === true && this.status === 3) return "pause";
            return "play_arrow";
        },
        runStopColorCompu () {
            if (this.linked === true && this.status === 3) return "red";
            return "green";
        }
    },
    mounted () {},
    methods: {
        async getLinkedOrgan () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            if (element.contextId && this.contextId === element.contextId.get()) {
                if (this.unbindFct) this.unbindFct();
                const unbind = element.bind(()=>{
                    if (this) {
                        this.status = element.mission.organStatus.get();
                        console.log("this.status", this.status);
                        this.linked = true;
                        this.serverId = element._server_id;
                        this.restart = element.restart.get();
                    }
                });
                this.unbindFct = ()=>{
                    element.unbind(unbind);
                };
                return element;
            }
            return null;
        },
        async runOrStop () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            element.mission.organStatus.set(this.status === 3 ? 0 : 3);
        },
        async restartOrgan () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            element.restart.set(true);
        },
        async syncSpatialBtn () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            element.mission.organStatus.set(1);
        },
        async syncProcessMission () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            element.mission.organStatus.set(2);
        },
        syncEquipMission () {},
        start () {},
        async onCloseSetup () {
            this.openSetup = false;
            await this.getLinkedOrgan();
        },
        async opened (data) {
            console.log("opened", data);
            this.contextId = data;
            this.status = -1;
            this.linked = false;
            this.serverId = 0;
            this.restart = false;
            await this.getLinkedOrgan();
        },
        removed () {},
        close () {},
        closeDialog () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","./SetUpSelectedOrgan.vue":"cM74Q","./SetUpContextEquip.vue":"a05w5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cM74Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("678f74b183eea5f1");
    if (script.__esModule) script = script.default;
    script.render = require("ecc6fbc64b412399").render;
    script.staticRenderFns = require("ecc6fbc64b412399").staticRenderFns;
    script._scopeId = "data-v-8ce008";
    script.__cssModules = require("2a4879a533ff3461").default;
    require("4f0e981a37fbdff").default(script);
    script.__scopeId = "data-v-8ce008";
    script.__file = "SetUpSelectedOrgan.vue";
};
initialize();
exports.default = script;

},{"678f74b183eea5f1":"8FW0A","ecc6fbc64b412399":"47iVr","2a4879a533ff3461":"augrr","4f0e981a37fbdff":"lphCJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FW0A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _setUpToolbarVue = require("./SetUpToolbar.vue");
var _setUpToolbarVueDefault = parcelHelpers.interopDefault(_setUpToolbarVue);
const CONTEXT_GEO_TYPE = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE;
var scriptExports = {
    name: "SetUpSelectedOrgan",
    components: {
        SetUpToolbar: (0, _setUpToolbarVueDefault.default)
    },
    props: {
        contextId: {
            required: true,
            type: String
        }
    },
    data: function() {
        const today = new Date();
        return {
            spin: false,
            today: today.toISOString(),
            selectedOrgan: null,
            spatialContexts: [],
            contexts: [],
            selectedSpatialContext: null,
            appelant: "",
            apiLogin: "",
            apiPassword: "",
            showApiPassword: false,
            pullInterval: 300000,
            prefixBuilding: "",
            lastSync: NaN,
            organsCfg: []
        };
    },
    computed: {
        lastSyncCompu: {
            get () {
                if (!this.lastSync) return null;
                else return new Date(this.lastSync).toISOString();
            },
            set (value) {
                this.lastSync = (0, _momentDefault.default).utc(value, "YYYY-MM-DD HH:mm:ss");
            }
        }
    },
    watch: {
        async selectedOrgan () {
            const selectedFile = (0, _spinalCoreConnectorjsType.FileSystem)._objects[this.selectedOrgan];
            // eslint-disable-next-line no-undef
            const node = await spinal.spinalSystem.loadModelPtr(selectedFile);
            this.appelant = node.mission.appelant.get();
            this.apiLogin = node.mission.apiLogin.get();
            this.apiPassword = node.mission.apiPassword.get();
            this.pullInterval = node.mission.pullInterval.get();
            this.prefixBuilding = node.mission.prefixBuilding.get();
            this.lastSync = node.mission.lastSync.get();
            this.selectedSpatialContext = node.spatialContextID.get();
        }
    },
    async mounted () {
        // eslint-disable-next-line no-undef
        const files = await spinal.spinalSystem.load("/etc/Organs/ticket");
        const organ = await this.getLinkedOrgan();
        for(let idx = 0; idx < files.length; idx++){
            const file = files[idx];
            this.organsCfg.push({
                name: file.name.get(),
                id: file._server_id,
                ptr: file._ptr.data.value
            });
            if (organ && organ._server_id === file._ptr.data.value) this.selectedOrgan = file._server_id;
        }
        const graph = await window.spinal.spinalSystem.getModel();
        const children = await graph.getChildren();
        this.contexts = children.reduce((acc, itm)=>{
            if (itm.info.type.get() === CONTEXT_GEO_TYPE) {
                this.spatialContexts.push({
                    id: itm.info.id.get(),
                    name: itm.info.name.get()
                });
                return acc;
            }
            acc.push({
                id: itm.info.id.get(),
                name: itm.info.name.get()
            });
            return acc;
        }, []);
    },
    methods: {
        async getLinkedOrgan () {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (!node.element) return null;
            const element = await node.element.load();
            if (element.contextId && this.contextId === element.contextId.get()) return element;
            return null;
        },
        saveSetting () {
            console.log("SaveSetting", this);
        },
        back () {
            this.$emit("close");
        },
        async save () {
            const selectedFile = (0, _spinalCoreConnectorjsType.FileSystem)._objects[this.selectedOrgan];
            // eslint-disable-next-line no-undef
            const organCfgModel = await spinal.spinalSystem.loadModelPtr(selectedFile);
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.contextId);
            if (node.element === undefined) node.add_attr("element", new (0, _spinalEnvViewerGraphService.SpinalNodePointer)(organCfgModel));
            else if (node.element.ptr.data !== organCfgModel._server_id) node.element.setElement(organCfgModel);
            // eslint-disable-next-line no-undef
            organCfgModel.digitalTwinPath.set(spinal.spinalSystem.getPath());
            organCfgModel.contextId.set(this.contextId);
            organCfgModel.spatialContextID.set(this.selectedSpatialContext);
            organCfgModel.mission.appelant.set(this.appelant);
            organCfgModel.mission.apiLogin.set(this.apiLogin);
            organCfgModel.mission.apiPassword.set(this.apiPassword);
            organCfgModel.mission.pullInterval.set(this.pullInterval);
            organCfgModel.mission.lastSync.set(this.lastSync);
            organCfgModel.mission.prefixBuilding.set(this.prefixBuilding);
            organCfgModel.restart.set(true);
            this.$emit("close");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-core-connectorjs_type":"fRH70","moment":"jwcsj","spinal-env-viewer-context-geographic-service":"5QjJf","./SetUpToolbar.vue":"hd27W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hd27W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("75b68918ab8e7d27");
    if (script.__esModule) script = script.default;
    script.render = require("88115b8567a89d2d").render;
    script.staticRenderFns = require("88115b8567a89d2d").staticRenderFns;
    script._scopeId = "data-v-679a8b";
    require("d9d674d478874ccd").default(script);
    script.__scopeId = "data-v-679a8b";
    script.__file = "SetUpToolbar.vue";
};
initialize();
exports.default = script;

},{"75b68918ab8e7d27":"65uvS","88115b8567a89d2d":"9c8AI","d9d674d478874ccd":"iFUWB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65uvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "SetUpToolbar",
    props: {
        label: {
            type: String,
            required: false,
            default: ""
        }
    },
    data () {
        return {};
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9c8AI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-toolbar", {
        attrs: {
            "dense": "",
            "dark": ""
        }
    }, [
        _c("v-btn", {
            attrs: {
                "icon": ""
            },
            on: {
                "click": function($event) {
                    return _vm.$emit("back");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("arrow_back")
            ])
        ], 1),
        _vm._v(" "),
        _c("v-toolbar-title", [
            _vm._v(_vm._s(_vm.label))
        ]),
        _vm._v(" "),
        _c("v-spacer"),
        _vm._v(" "),
        _c("v-btn", {
            attrs: {
                "icon": ""
            },
            on: {
                "click": function($event) {
                    return _vm.$emit("save");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("check")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iFUWB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47iVr":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", {
        staticClass: "spinal-setup-organ-body"
    }, [
        _c("set-up-toolbar", {
            attrs: {
                "title": "Setup Context's equipment to send to Mission"
            },
            on: {
                "back": _vm.back,
                "save": _vm.save
            }
        }),
        _vm._v(" "),
        _c("v-card-text", {
            staticClass: "spinal-setup-organ-container"
        }, [
            _c("form", {
                attrs: {
                    "action": "none"
                }
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "Select Spatial Context"
                        }
                    }, [
                        _vm._v("select the Organ")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "id": "modelselect",
                            "name": "modelselect",
                            "md-dense": ""
                        },
                        model: {
                            value: _vm.selectedOrgan,
                            callback: function($$v) {
                                _vm.selectedOrgan = $$v;
                            },
                            expression: "selectedOrgan"
                        }
                    }, _vm._l(_vm.organsCfg, function(organCfg) {
                        return _c("md-option", {
                            key: organCfg.id,
                            attrs: {
                                "value": organCfg.id
                            }
                        }, [
                            _vm._v("\n            " + _vm._s(organCfg.name) + "\n          ")
                        ]);
                    }), 1)
                ], 1),
                _vm._v(" "),
                _vm.selectedOrgan ? [
                    _c("md-field", [
                        _c("label", {
                            attrs: {
                                "for": "Select Spatial Context"
                            }
                        }, [
                            _vm._v("Select the Spatial Context")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            attrs: {
                                "id": "modelselect",
                                "name": "modelselect",
                                "md-dense": ""
                            },
                            model: {
                                value: _vm.selectedSpatialContext,
                                callback: function($$v) {
                                    _vm.selectedSpatialContext = $$v;
                                },
                                expression: "selectedSpatialContext"
                            }
                        }, [
                            _vm.spatialContexts.length > 0 ? _c("md-optgroup", {
                                attrs: {
                                    "label": "Spatial contexts"
                                }
                            }, _vm._l(_vm.spatialContexts, function(context) {
                                return _c("md-option", {
                                    key: context.id,
                                    attrs: {
                                        "value": context.id
                                    }
                                }, [
                                    _vm._v("\n                " + _vm._s(context.name) + "\n              ")
                                ]);
                            }), 1) : _vm._e(),
                            _vm._v(" "),
                            _vm.contexts.length > 0 ? _c("md-optgroup", {
                                attrs: {
                                    "label": "Other contexts"
                                }
                            }, _vm._l(_vm.contexts, function(context) {
                                return _c("md-option", {
                                    key: context.id,
                                    attrs: {
                                        "value": context.id
                                    }
                                }, [
                                    _vm._v("\n                " + _vm._s(context.name) + "\n              ")
                                ]);
                            }), 1) : _vm._e()
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-text-field", {
                        attrs: {
                            "placeholder": "Api Login",
                            "autocomplete": "off",
                            "label": "Mission Api Login"
                        },
                        model: {
                            value: _vm.apiLogin,
                            callback: function($$v) {
                                _vm.apiLogin = $$v;
                            },
                            expression: "apiLogin"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                        attrs: {
                            "autocomplete": "off",
                            "placeholder": "Api Password",
                            "label": "Mission Api Password",
                            "append-icon": _vm.showApiPassword ? "visibility" : "visibility_off",
                            "type": _vm.showApiPassword ? "text" : "password"
                        },
                        on: {
                            "click:append": function($event) {
                                _vm.showApiPassword = !_vm.showApiPassword;
                            }
                        },
                        model: {
                            value: _vm.apiPassword,
                            callback: function($$v) {
                                _vm.apiPassword = $$v;
                            },
                            expression: "apiPassword"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                        attrs: {
                            "placeholder": "Api Appelant",
                            "autocomplete": "off",
                            "label": "Mission Api Appelant"
                        },
                        model: {
                            value: _vm.appelant,
                            callback: function($$v) {
                                _vm.appelant = $$v;
                            },
                            expression: "appelant"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                        attrs: {
                            "placeholder": "Mission Prefix Building",
                            "autocomplete": "off",
                            "label": "Mission Prefix Building"
                        },
                        model: {
                            value: _vm.prefixBuilding,
                            callback: function($$v) {
                                _vm.prefixBuilding = $$v;
                            },
                            expression: "prefixBuilding"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                        attrs: {
                            "placeholder": "Interval to pull data from Mission",
                            "type": "number",
                            "label": "Interval to pull data from Mission in ms"
                        },
                        model: {
                            value: _vm.pullInterval,
                            callback: function($$v) {
                                _vm.pullInterval = $$v;
                            },
                            expression: "pullInterval"
                        }
                    }),
                    _vm._v(" "),
                    _c("VueCtkDateTimePicker", {
                        attrs: {
                            "dark": true,
                            "max-date": _vm.today,
                            "label": "Last Synchonization"
                        },
                        model: {
                            value: _vm.lastSyncCompu,
                            callback: function($$v) {
                                _vm.lastSyncCompu = $$v;
                            },
                            expression: "lastSyncCompu"
                        }
                    })
                ] : _vm._e()
            ], 2)
        ]),
        _vm._v(" "),
        _c("v-text-field", {
            attrs: {
                "placeholder": "appelant",
                "label": "appelant"
            },
            model: {
                value: _vm.appelant,
                callback: function($$v) {
                    _vm.appelant = $$v;
                },
                expression: "appelant"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"augrr":[function() {},{}],"lphCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a05w5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3074605bdee1ea95");
    if (script.__esModule) script = script.default;
    script.render = require("b8a75d10a77357ec").render;
    script.staticRenderFns = require("b8a75d10a77357ec").staticRenderFns;
    script._scopeId = "data-v-8a60be";
    script.__cssModules = require("65a9b5f443759b37").default;
    require("53521bcc04d2aa60").default(script);
    script.__scopeId = "data-v-8a60be";
    script.__file = "SetUpContextEquip.vue";
};
initialize();
exports.default = script;

},{"3074605bdee1ea95":"i6LTl","b8a75d10a77357ec":"7kB4O","65a9b5f443759b37":"6701F","53521bcc04d2aa60":"pRi2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6LTl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _setUpToolbarVue = require("./SetUpToolbar.vue");
var _setUpToolbarVueDefault = parcelHelpers.interopDefault(_setUpToolbarVue);
var scriptExports = {
    name: "SetUpContextEquip",
    components: {
        SetUpToolbar: (0, _setUpToolbarVueDefault.default)
    },
    props: {
        serverId: {
            required: true,
            type: Number
        }
    },
    data: function() {
        return {
            equipContexts: [],
            contexts: []
        };
    },
    async mounted () {
        const cfg = this.getConfig();
        const graph = (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph();
        const contexts = await graph.getChildren();
        this.equipContexts = contexts.reduce((acc, context)=>{
            if (context.info.type.get() === "BIMObjectGroupContext") acc.push({
                id: context.info.id.get(),
                name: context.info.name.get()
            });
            return acc;
        }, []);
        this.contexts = [];
        if (!cfg.mission.contextsEquip) cfg.mission.add_attr("contextsEquip", []);
        for(let idx = 0; idx < cfg.mission.contextsEquip.length; idx++)this.contexts.push(cfg.mission.contextsEquip[idx].get());
    },
    methods: {
        back () {
            this.$emit("close");
        },
        async save () {
            const cfg = this.getConfig();
            if (!cfg.mission.contextsEquip) cfg.mission.add_attr("contextsEquip", []);
            cfg.mission.contextsEquip.set(this.contexts);
            cfg.mission.organStatus.set(4);
            this.$emit("close");
        },
        getConfig () {
            return (0, _spinalCoreConnectorjsType.FileSystem)._objects[this.serverId];
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-core-connectorjs_type":"fRH70","./SetUpToolbar.vue":"hd27W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kB4O":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", {
        staticClass: "spinal-setup-equip-body"
    }, [
        _c("set-up-toolbar", {
            attrs: {
                "title": "Setup Context's equipment to send to Mission"
            },
            on: {
                "back": _vm.back,
                "save": _vm.save
            }
        }),
        _vm._v(" "),
        _c("v-card-text", {
            staticClass: "spinal-setup-equip-container"
        }, [
            _c("form", {
                attrs: {
                    "action": "none"
                }
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "Select Equipment Context(s)"
                        }
                    }, [
                        _vm._v("Select Equipment Context(s) to send to Mission")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "Equipment Context Select",
                            "md-dense": "",
                            "multiple": ""
                        },
                        model: {
                            value: _vm.contexts,
                            callback: function($$v) {
                                _vm.contexts = $$v;
                            },
                            expression: "contexts"
                        }
                    }, _vm._l(_vm.equipContexts, function(equipContext) {
                        return _c("md-option", {
                            key: equipContext.id,
                            attrs: {
                                "value": equipContext.id
                            }
                        }, [
                            _vm._v("\n            " + _vm._s(equipContext.name) + "\n          ")
                        ]);
                    }), 1)
                ], 1)
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6701F":[function() {},{}],"pRi2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0ejj":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", {
        staticClass: "LinkAndManageContextTicketMission-body",
        attrs: {
            "dark": ""
        }
    }, [
        _vm.openSetupEquip ? _c("SetUpContextEquip", {
            attrs: {
                "server-id": _vm.serverId
            },
            on: {
                "close": function($event) {
                    _vm.openSetupEquip = false;
                }
            }
        }) : _vm.openSetup ? _c("setUpSelectedOrgan", {
            attrs: {
                "context-id": _vm.contextId
            },
            on: {
                "close": function($event) {
                    return _vm.onCloseSetup();
                }
            }
        }) : _c("v-card", {
            staticClass: "LinkAndManageContextTicketMission-card"
        }, [
            _c("v-toolbar", {
                staticClass: "LinkAndManageContextTicketMission-toolbar",
                attrs: {
                    "dense": "",
                    "dark": ""
                }
            }, [
                _c("v-toolbar-title", [
                    _vm._v(" Status : " + _vm._s(_vm.statusCompu) + " ")
                ]),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "icon": ""
                    },
                    on: {
                        "click": function($event) {
                            _vm.openSetup = true;
                        }
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("settings")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-speed-dial", {
                    attrs: {
                        "direction": "left",
                        "open-on-hover": false
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "activator",
                            fn: function() {
                                return [
                                    _c("v-btn", {
                                        attrs: {
                                            "color": "blue",
                                            "small": "",
                                            "fab": ""
                                        },
                                        model: {
                                            value: _vm.fabBtn,
                                            callback: function($$v) {
                                                _vm.fabBtn = $$v;
                                            },
                                            expression: "fabBtn"
                                        }
                                    }, [
                                        _c("v-icon", [
                                            _vm._v("more_vert")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-icon", [
                                            _vm._v("close")
                                        ])
                                    ], 1)
                                ];
                            },
                            proxy: true
                        }
                    ]),
                    model: {
                        value: _vm.fabBtn,
                        callback: function($$v) {
                            _vm.fabBtn = $$v;
                        },
                        expression: "fabBtn"
                    }
                }, [
                    _vm._v(" "),
                    _c("v-btn", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: _vm.runStopCompu,
                                expression: "runStopCompu"
                            }
                        ],
                        attrs: {
                            "fab": "",
                            "disabled": _vm.disableBtn,
                            "small": "",
                            "color": _vm.runStopColorCompu
                        },
                        on: {
                            "click": _vm.runOrStop
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v(_vm._s(_vm.runStopIconCompu))
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-btn", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "Restart Organ",
                                expression: "'Restart Organ'"
                            }
                        ],
                        attrs: {
                            "fab": "",
                            "disabled": _vm.linked === false || _vm.restart === true,
                            "small": "",
                            "color": "red"
                        },
                        on: {
                            "click": _vm.restartOrgan
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("refresh")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-btn", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "Synchonize Spatial context to Mission",
                                expression: "'Synchonize Spatial context to Mission'"
                            }
                        ],
                        attrs: {
                            "fab": "",
                            "disabled": _vm.disableBtn,
                            "small": "",
                            "color": "blue"
                        },
                        on: {
                            "click": _vm.syncSpatialBtn
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("location_city")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-btn", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "Synchonize Mission's Process with this context",
                                expression: "'Synchonize Mission\\'s Process with this context'"
                            }
                        ],
                        attrs: {
                            "fab": "",
                            "disabled": _vm.disableBtn,
                            "small": "",
                            "color": "blue"
                        },
                        on: {
                            "click": _vm.syncProcessMission
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("assignment_returned")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-btn", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "Synchonize Spatial Equipment",
                                expression: "'Synchonize Spatial Equipment'"
                            }
                        ],
                        attrs: {
                            "fab": "",
                            "disabled": _vm.disableBtn,
                            "small": "",
                            "color": "blue"
                        },
                        on: {
                            "click": function($event) {
                                _vm.openSetupEquip = true;
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("device_hub")
                        ])
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("v-card-text", {
                staticClass: "LinkAndManageContextTicketMission-card-container"
            }, [
                _c("md-empty-state", {
                    attrs: {
                        "md-icon": _vm.statusIconCompu,
                        "md-label": _vm.statusCompu,
                        "md-description": ""
                    }
                }, [
                    _vm.linked === false ? _c("md-button", {
                        staticClass: "md-primary md-raised",
                        on: {
                            "click": function($event) {
                                _vm.openSetup = true;
                            }
                        }
                    }, [
                        _vm._v("\n          Click here for Setup\n        ")
                    ]) : _vm._e()
                ], 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _vm.spin ? _c("v-progress-linear", {
            staticClass: "spinal-modal-progress-bar",
            staticStyle: {
                "margin": "0"
            },
            attrs: {
                "indeterminate": true,
                "color": "primary"
            }
        }) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jWouQ":[function() {},{}],"c4zxG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jxTN":[function(require,module,exports) {
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
parcelHelpers.export(exports, "LinkAndManageContextTicketMissionBtn", ()=>LinkAndManageContextTicketMissionBtn);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("spinal-service-ticket/dist/Constants");
const { spinalPanelManagerService } = require("3a1e57bdbd2b666b");
const LABEL = "Link And Manage Mission";
class LinkAndManageContextTicketMissionBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "settings_ethernet",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode === option.context && option.selectedNode.type.get() === (0, _constants.SERVICE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("LinkAndManageContextTicketMission", option.selectedNode.id.get());
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","3a1e57bdbd2b666b":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0rBD":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ARCHIVE_TICKET_RELATIONS = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = exports.ARCHIVE_TICKET_RELATION_TYPE = exports.ARCHIVE_TICKET_PART_TICKET_RELATION = exports.ARCHIVE_TICKET_PART_TYPE = exports.ARCHIVE_TICKET_PART_RELATION = exports.SPATIAL_ARCHIVE_TICKET_TYPE = exports.SPATIAL_ARCHIVE_TICKET_RELATION = exports.PROCESS_ARCHIVE_TICKET_TYPE = exports.PROCESS_ARCHIVE_TICKET_RELATION = exports._TICKET_PRIORITIES = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports._DEFAULT_INCIDENTS_NAME = exports.INCIDENT_TYPE = exports.INCIDENT_RELATION_NAME = exports.INCIDENT_RELATION_TYPE = exports.INCIDENT_SECTION_RELATION_NAME = exports.INCIDENT_SECTION_TYPE = exports.INCIDENT_SECTION_RELATION_TYPE = exports._DEFAULT_STEPS = exports._ARCHIVED_STEP = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.STEP_TYPE = exports.STEP_RELATION_NAME = exports.STEP_RELATION_TYPE = exports._PROCESS_TYPE = exports.PROCESS_RELATION_NAME = exports.PROCESS_RELATION_TYPE = exports.ALARM_RELATION_NAME = exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = exports.TIKET_TYPE = exports.TICKET_RELATION_NAME = exports.TICKET_RELATION_TYPE = exports.TICKET_CONTEXT_SUBTYPE_LIST = exports.TICKET_CONTEXT_TYPE = exports.GEO_TYPES = void 0;
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
 */ const OLD_CONSTANTS = require("5f2287b5524fd3a7");
__exportStar(require("5f2287b5524fd3a7"), exports);
const spinal_model_graph_1 = require("2f0e2599fe3a3648");
var spinal_env_viewer_context_geographic_service_1 = require("c6294f08f8af564d");
Object.defineProperty(exports, "GEO_TYPES", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.GEOGRAPHIC_TYPES_ORDER;
    }
});
exports.TICKET_CONTEXT_TYPE = OLD_CONSTANTS.SERVICE_TYPE;
exports.TICKET_CONTEXT_SUBTYPE_LIST = [
    "Ticket",
    "Alarm"
];
/////////////////////////////////////////
/////////////// TICKET ///////////////////
exports.TICKET_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE; // STEP_TO_TICKET_RELATION_TYPE
exports.TICKET_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME; // STEP_TO_TICKET_RELATION_NAME
exports.TIKET_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_TYPE;
exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = "Occurrence number";
exports.ALARM_RELATION_NAME = "hasAlarm";
/////////////////////////////////////////
/////////////// PROCESS /////////////////
exports.PROCESS_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE; // CONTEXT_TO_PROCESS_RELATION_TYPE
exports.PROCESS_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME; //CONTEXT_TO_PROCESS_RELATION_NAME
exports._PROCESS_TYPE = OLD_CONSTANTS.PROCESS_TYPE;
//////////////////////////////////////
/////////////// STEP /////////////////
exports.STEP_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE; // PROCESS_TO_STEP_RELATION_TYPE
exports.STEP_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME; // PROCESS_TO_STEP_RELATION_NAME
exports.STEP_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_TYPE;
exports.ARCHIVED_STEP = OLD_CONSTANTS.ARCHIVED_STEP;
exports.DEFAULT_STEPS = OLD_CONSTANTS.DEFAULT_STEPS;
exports._ARCHIVED_STEP = OLD_CONSTANTS.ARCHIVED_STEP;
exports._DEFAULT_STEPS = OLD_CONSTANTS.DEFAULT_STEPS;
/////////////////////////////////////////
/////////////// CATEGORY ////////////////
exports.INCIDENT_SECTION_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE;
exports.INCIDENT_SECTION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE;
exports.INCIDENT_SECTION_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME;
exports.INCIDENT_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE;
exports.INCIDENT_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME;
exports.INCIDENT_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_TYPE;
exports._DEFAULT_INCIDENTS_NAME = OLD_CONSTANTS.DEFAULT_INCIDENTS_NAME;
exports.LOG_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE;
exports.LOG_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME;
exports.LOG_TYPE = OLD_CONSTANTS.SERVICE_LOG_TYPE;
exports.LOGS_EVENTS_STEPS = OLD_CONSTANTS.LOGS_EVENTS;
exports._TICKET_PRIORITIES = OLD_CONSTANTS.TICKET_PRIORITIES;
/////////////////////////////////////////
/////////////// ARCHIVE ////////////////
exports.PROCESS_ARCHIVE_TICKET_RELATION = "ProcessHasArchiveTicket";
exports.PROCESS_ARCHIVE_TICKET_TYPE = "ProcessArchiveTicket";
exports.SPATIAL_ARCHIVE_TICKET_RELATION = "SpatialHasArchiveTicket";
exports.SPATIAL_ARCHIVE_TICKET_TYPE = "SpatialArchiveTicket";
exports.ARCHIVE_TICKET_PART_RELATION = "ArchiveTicketHasPart";
exports.ARCHIVE_TICKET_PART_TYPE = "ArchiveTicketPart";
exports.ARCHIVE_TICKET_PART_TICKET_RELATION = "ArchiveTicketPartHasTicket";
exports.ARCHIVE_TICKET_RELATION_TYPE = spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = "ProcessArchiveTimestamp";
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = "SpatialArchiveTimestamp";
exports.ARCHIVE_TICKET_RELATIONS = [
    exports.SPATIAL_ARCHIVE_TICKET_RELATION,
    exports.ARCHIVE_TICKET_PART_RELATION
];

},{"5f2287b5524fd3a7":"79Wiu","2f0e2599fe3a3648":"fkEXw","c6294f08f8af564d":"5QjJf"}],"79Wiu":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TICKET_PRIORITIES = exports.LOGS_EVENTS_STRING = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports.EVENTS_TO_LOG = exports.LOGS_EVENTS = exports.SERVICE_LOG_TYPE = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE = exports.DEFAULT_INCIDENTS_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_STEP_TYPE = exports.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE = exports.PROCESS_TYPE = exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_TICKET_TYPE = exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE = exports.SERVICE_TYPE = exports.SERVICE_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("5f14db0a1cfd319d");
exports.SERVICE_NAME = "Ticket Service";
exports.SERVICE_TYPE = "SpinalSystemServiceTicket";
/////////////////////////////////////////
/////////////// TICKET ///////////////////
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME = "SpinalSystemServiceTicketHasTicket";
exports.SPINAL_TICKET_SERVICE_TICKET_TYPE = "SpinalSystemServiceTicketTypeTicket";
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION: string = 'SpinalSystemServiceHasTicket';
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_NAME: string = 'Tickets';
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_NAME: string = 'SpinalSystemServiceHasTicket';
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasTicket';
// export const SECTION_RELATION_TYPE = SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_TYPE;
/**
 * New values
 */ // export const TICKET_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE; // STEP_TO_TICKET_RELATION_TYPE
// export const TICKET_RELATION_NAME: string = SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME; // STEP_TO_TICKET_RELATION_NAME
// export const TIKET_TYPE: string = SPINAL_TICKET_SERVICE_TICKET_TYPE;
/////////////////////////////////////////
/////////////// PROCESS /////////////////
exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME = "SpinalSystemServiceTicketHasProcess";
exports.PROCESS_TYPE = "SpinalServiceTicketProcess";
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Process';
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasProcess';
// export const SPINAL_TICKET_SERVICE_PROCESS_TYPE: string = 'SpinalSystemServiceTicketTypeProcess';
// export const PROCESS_HAS_TICKET_RELATION_NAME: string = 'SpinalSystemService_ProcessHasTicket';
// export const PROCESS_HAS_TICKET_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
/**
 * New values
 */ // export const PROCESS_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE; // CONTEXT_TO_PROCESS_RELATION_TYPE
// export const PROCESS_RELATION_NAME: string = SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME; //CONTEXT_TO_PROCESS_RELATION_NAME
// export const PROCESS_TYPE: string = 'SpinalServiceTicketProcess';
//////////////////////////////////////
/////////////// STEP /////////////////
exports.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_STEP_TYPE = "SpinalSystemServiceTicketTypeStep";
exports.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME = "SpinalSystemServiceTicketHasStep";
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasStep';
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Step';
/**
 * New values
 */ // export const STEP_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE; // PROCESS_TO_STEP_RELATION_TYPE
// export const STEP_RELATION_NAME: string = SPINAL_TICKET_SERVICE_STEP_RELATION_NAME; // PROCESS_TO_STEP_RELATION_NAME
// export const STEP_TYPE: string = SPINAL_TICKET_SERVICE_STEP_TYPE;
exports.ARCHIVED_STEP = {
    name: "Archived",
    order: -1,
    color: "#FF0000"
};
exports.DEFAULT_STEPS = [
    {
        name: "D\xe9clar\xe9",
        color: "#ff0019",
        order: 0
    },
    {
        name: "Ouvert",
        color: "#fff112",
        order: 1
    },
    {
        name: "R\xe9solu",
        color: "#10ff1d",
        order: 2
    },
    exports.ARCHIVED_STEP
];
/////////////////////////////////////////
/////////////// CATEGORY ////////////////
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE = "DEFAULT_INCIDENT_TYPE";
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME = "Spinal_Service_Ticket_Process_has_category";
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME = "Spinal_Service_Ticket_Process_has_categories_section";
exports.SPINAL_TICKET_SERVICE_INCIDENT_TYPE = "INCIDENT_TYPE";
exports.DEFAULT_INCIDENTS_NAME = "Incidents commun";
// export const SPINAL_TICKET_SERVICE_INCIDENT_SUB_SECTION_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_INCIDENT_SUB_SECTION_RELATION_NAME: string = 'Spinal_Service_Ticket_Process_has_sub_category';
// export const DEFAULT_INCIDENT_TYPE: string = SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE;
// export const DEFAULT_INCIDENT_RELATION_NAME: string = SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME;
// export const fdg: string = SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME;
/////////////////////////////////////////
/////////////// ARCHIVE /////////////////
// export const SPINAL_TICKET_SERVICE_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive';
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Ticket';
// export const SPINAL_TICKET_SERVICE_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceTicketHasArchive';
// export const SERVICE_ARCHIVE_TYPE: string = 'SpinalSystemServiceTicketArchive';
/////////////////////////////////////////
/////////////// LOG /////////////////
exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME = "SpinalSystemServiceTicketHasLog";
exports.SERVICE_LOG_TYPE = "SpinalSystemServiceTicketLog";
var LOGS_EVENTS;
(function(LOGS_EVENTS) {
    LOGS_EVENTS[LOGS_EVENTS["creation"] = 1] = "creation";
    LOGS_EVENTS[LOGS_EVENTS["moveToNext"] = 2] = "moveToNext";
    LOGS_EVENTS[LOGS_EVENTS["moveToPrevious"] = 3] = "moveToPrevious";
    LOGS_EVENTS[LOGS_EVENTS["archived"] = 4] = "archived";
    LOGS_EVENTS[LOGS_EVENTS["unarchive"] = 5] = "unarchive";
    LOGS_EVENTS[LOGS_EVENTS["move"] = 6] = "move";
})(LOGS_EVENTS = exports.LOGS_EVENTS || (exports.LOGS_EVENTS = {}));
exports.EVENTS_TO_LOG = Object.freeze({
    1: "creation",
    2: "moveToNext",
    3: "moveToPrevious",
    4: "archived",
    5: "unarchive",
    6: "move"
});
exports.LOG_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE;
exports.LOG_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME;
exports.LOG_TYPE = exports.SERVICE_LOG_TYPE;
exports.LOGS_EVENTS_STEPS = LOGS_EVENTS;
exports.LOGS_EVENTS_STRING = [
    "none",
    "creation",
    "moveToNext",
    "moveToPrevious",
    "archived",
    "unarchive",
    "move"
];
/////////////////////////////////////////
/////////////// Target /////////////////
// export const SPINAL_TICKET_SERVICE_TARGET_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_TARGET_RELATION_NAME: string = 'SpinalSystemServiceTicketHasLocation';
/////////////////////////////////////////
/////////////// USER ////////////////////
// export const USER_RELATION_NAME: string = 'userHasDeclaredTicket';
// export const USER_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
/////////////////////////////////////////
/////////////// ticket ////////////////////
// tickethasReferentiel
exports.TICKET_PRIORITIES = {
    occasionally: 0,
    normal: 1,
    urgent: 2
};

},{"5f14db0a1cfd319d":"9n7zp"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-organ_ticket_mission.d8efabbe.js.map
