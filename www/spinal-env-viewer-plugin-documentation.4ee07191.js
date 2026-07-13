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
})({"19vgy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _findMessageParentJs = require("./buttonClass/standard_buttons/findMessageParent.js");
var _findMessageParentJsDefault = parcelHelpers.interopDefault(_findMessageParentJs);
var _isolateMessageParentJs = require("./buttonClass/standard_buttons/isolateMessageParent.js");
var _isolateMessageParentJsDefault = parcelHelpers.interopDefault(_isolateMessageParentJs);
var _zoomMessageParentJs = require("./buttonClass/standard_buttons/zoomMessageParent.js");
var _zoomMessageParentJsDefault = parcelHelpers.interopDefault(_zoomMessageParentJs);
var _messageDetailJs = require("./buttonClass/messageDetail.js");
var _messageDetailJsDefault = parcelHelpers.interopDefault(_messageDetailJs);
var _seeMessageJs = require("./buttonClass/seeMessage.js");
var _seeMessageJsDefault = parcelHelpers.interopDefault(_seeMessageJs);
var _notesPanelJs = require("./buttonClass/notesPanel.js");
var _registerDialogsJs = require("./view/notes/dialogs/registerDialogs.js");
var _registerDialogsJsDefault = parcelHelpers.interopDefault(_registerDialogsJs);
var _documentationPanelJs = require("./buttonClass/documentationPanel.js");
// import {
//   DocumentationGroupButton
// } from "./buttonClass/documentationGroup";
var _attributesRightClickVue = require("./view/rightClick/attributesRightClick.vue");
var _attributesRightClickVueDefault = parcelHelpers.interopDefault(_attributesRightClickVue);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const circularMenuHookName = 'circularMenu';
const SideBarHookName = 'GraphManagerSideBar';
const namePanel = 'panel-documentation';
const documentationGroupPanel = 'panel-documentationgroup';
const nameAttributesRightClickPanel = 'attributes-right-click';
const { spinalContextMenuService } = require("a77090b7237ca305");
const { SpinalForgeExtention } = require("d994e4c01dc61fdd");
// deleteAutoUrlRightClick
//////////////////////////////////////////////////////////////////////////////////////
//                               Documentation
//////////////////////////////////////////////////////////////////////////////////////
SpinalForgeExtention.registerExtention(namePanel, (0, _documentationPanelJs.DocumentationExtension));
spinalContextMenuService.registerApp(circularMenuHookName, new (0, _documentationPanelJs.DocumentationButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _documentationPanelJs.DocumentationButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _findMessageParentJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _isolateMessageParentJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _zoomMessageParentJsDefault.default)(), [
    7
]);
//////////////////////////////////////////////////////////////////////////////////////
//                                Documentation group
//////////////////////////////////////////////////////////////////////////////////////
// SpinalForgeExtention.registerExtention(documentationGroupPanel,
//   DocumentationExtension);
// spinalContextMenuService.registerApp(
//   SideBarHookName,
//   new DocumentationGroupButton(), [7]
// );
//////////////////////////////////////////////////////////////////////////////////////
//                                Notes
//////////////////////////////////////////////////////////////////////////////////////
spinalContextMenuService.registerApp(circularMenuHookName, new (0, _notesPanelJs.NotesButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _notesPanelJs.NotesButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _messageDetailJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _seeMessageJsDefault.default)(), [
    7
]);
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount((0, _registerDialogsJsDefault.default));
//////////////////////////////////////////////////////////////////////////////////////
//                                Export to drive button
//////////////////////////////////////////////////////////////////////////////////////
// spinalContextMenuService.registerApp(
//   SideBarHookName,
//   new ExportToDriveButton(), [7]
// );
//////////////////////////////////////////////////////////////////////////////////////
//                                Right click register
//////////////////////////////////////////////////////////////////////////////////////
SpinalForgeExtention.registerExtention("attributes-right-click", (0, _documentationPanelJs.addAutoAttributesRightClick));
SpinalForgeExtention.registerExtention("url-right-click", (0, _documentationPanelJs.addAutoUrlRightClick));
SpinalForgeExtention.registerExtention("delete-right-click", (0, _documentationPanelJs.deleteAutoUrlRightClick));
(0, _documentationPanelJs.registerRightClickButton)();

},{"a77090b7237ca305":"3h19D","d994e4c01dc61fdd":"fYcpE","./buttonClass/standard_buttons/findMessageParent.js":"bbsEk","./buttonClass/standard_buttons/isolateMessageParent.js":"gXCo6","./buttonClass/standard_buttons/zoomMessageParent.js":"iMrk2","./buttonClass/messageDetail.js":"7iVOh","./buttonClass/seeMessage.js":"8Gg2m","./buttonClass/notesPanel.js":"8cdcE","./view/notes/dialogs/registerDialogs.js":"hsyaZ","./buttonClass/documentationPanel.js":"3doJy","./view/rightClick/attributesRightClick.vue":"aUPR9","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"bbsEk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _selectBIMObjectButton = require("spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton");
var _fitToViewerButton = require("spinal-env-viewer-plugin-standard_button/js/fitToViewerButton");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities1 = require("../../service/utilities");
const { SpinalContextApp } = require("5e810d5049662e69");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Find Message Parent", "Find message Parent", {
            icon: "find_in_page",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        return contextType === `${0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities1.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            el.model.selector.setSelection(el.ids, el.model, "selectOnly");
        });
    }
}
exports.default = FindMessageParent;

},{"5e810d5049662e69":"3h19D","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton":"4X6HN","spinal-env-viewer-plugin-standard_button/js/fitToViewerButton":"bIxV8","spinal-env-viewer-plugin-standard_button/js/utilities":"7fsh6","spinal-env-viewer-graph-service":"9LAk7","../../service/utilities":"bhM68","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4X6HN":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SpinalContextSelectBIMObject", ()=>SpinalContextSelectBIMObject);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("6a1561c7c4b8903b");
class SpinalContextSelectBIMObject extends SpinalContextApp {
    constructor(){
        super("select BIMObject button", "select BIMObject button", {
            icon: "devices",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        const nodes = await realNode.find((0, _utilities.SELECTrelationList), (node)=>node.info.type.get() === "BIMObject");
        const lstByModel = await (0, _utilities.utilities).sortBIMObjectByModel(nodes);
        const arrayToFit = (0, _utilities.utilities).organizeBimObjectForAggregateViewer(lstByModel, 'ids');
        this.viewer.clearSelection();
        this.viewer.setAggregateSelection(arrayToFit);
    }
}

},{"spinal-env-viewer-graph-service":"9LAk7","6a1561c7c4b8903b":"3h19D","./utilities":"7fsh6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7fsh6":[function(require,module,exports,__globalThis) {
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
 */ var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import {
//   // ROOMS_CATEGORY_RELATION,
//   // ROOMS_TO_ELEMENT_RELATION,
//   // ROOMS_GROUP_RELATION,
//   // EQUIPMENTS_CATEGORY_RELATION,
//   // EQUIPMENTS_TO_ELEMENT_RELATION,
//   // EQUIPMENTS_GROUP_RELATION,
//   // ROOMS_GROUP_CONTEXT,
//   // ROOMS_GROUP,
//   // ROOMS_CATEGORY,
//   // EQUIPMENTS_GROUP_CONTEXT,
//   // EQUIPMENTS_CATEGORY,
//   // EQUIPMENTS_GROUP
//   groupService
// } from 'spinal-env-viewer-room-manager/services/service';
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SELECTrelationList = [
    (0, _constants.SITE_RELATION),
    (0, _constants.BUILDING_RELATION),
    (0, _constants.FLOOR_RELATION),
    (0, _constants.ZONE_RELATION),
    (0, _constants.ROOM_RELATION),
    (0, _constants.EQUIPMENT_RELATION),
    (0, _constants.REFERENCE_RELATION),
    `${(0, _constants.REFERENCE_RELATION)}.ROOM`,
    "hasBIMObject",
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.GROUP_TO_ROOMS_RELATION,
    // groupService.constants.GROUP_TO_EQUIPMENTS_RELATION,
    // groupService.constants.GROUP_TO_ENDPOINT_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES),
    `groupHas${(0, _constants.ROOM_TYPE)}`,
    `groupHas${(0, _constants.EQUIPMENT_TYPE)}`,
    `groupHas${(0, _constants.SITE_TYPE)}`,
    `groupHas${(0, _constants.BUILDING_TYPE)}`,
    `groupHas${(0, _constants.FLOOR_TYPE)}`,
    `groupHas${(0, _constants.ZONE_TYPE)}`,
    `groupHas${(0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName}`
];
const isShownParam = [
    (0, _constants.SITE_TYPE),
    (0, _constants.BUILDING_TYPE),
    (0, _constants.FLOOR_TYPE),
    (0, _constants.ZONE_TYPE),
    (0, _constants.ROOM_TYPE),
    (0, _constants.EQUIPMENT_TYPE),
    // ...groupService.constants.CONTEXTS_TYPES,
    // ...groupService.constants.GROUPS_TYPES,
    // groupService.constants.CATEGORY_TYPE
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES),
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES),
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    `${(0, _constants.ROOM_TYPE)}Group`,
    `${(0, _constants.EQUIPMENT_TYPE)}Group`,
    `${(0, _constants.SITE_TYPE)}Group`,
    `${(0, _constants.BUILDING_TYPE)}Group`,
    `${(0, _constants.FLOOR_TYPE)}Group`,
    `${(0, _constants.ZONE_TYPE)}Group`,
    `${(0, _constants.ROOM_TYPE)}GroupContext`,
    `${(0, _constants.EQUIPMENT_TYPE)}GroupContext`,
    `${(0, _constants.SITE_TYPE)}GroupContext`,
    `${(0, _constants.BUILDING_TYPE)}GroupContext`,
    `${(0, _constants.FLOOR_TYPE)}GroupContext`,
    `${(0, _constants.ZONE_TYPE)}GroupContext`
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
module.exports = {
    SELECTrelationList,
    isShownParam,
    utilities
};

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-network-tree-service":"aaFv2"}],"bIxV8":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SpinalContextFitToViewer", ()=>SpinalContextFitToViewer);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("5b562009692cf730");
class SpinalContextFitToViewer extends SpinalContextApp {
    constructor(){
        super("fit button", "fit to viewer button", {
            icon: "zoom_in",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        const nodes = await realNode.find((0, _utilities.SELECTrelationList), (node)=>node.info.type.get() === "BIMObject");
        const lstByModel = await (0, _utilities.utilities).sortBIMObjectByModel(nodes);
        const arrayToFit = (0, _utilities.utilities).organizeBimObjectForAggregateViewer(lstByModel, 'selection');
        this.viewer.fitToView(arrayToFit);
    }
}

},{"spinal-env-viewer-graph-service":"9LAk7","5b562009692cf730":"3h19D","./utilities":"7fsh6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bhM68":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utilities", ()=>utilities);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
class DocumentationUtilities {
    constructor(){}
    async addLink(option, BIMObjectName, label, URL) {
        if (label != undefined && URL != undefined && URL != "" && label != "") {
            if (option.info != undefined) {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(option.info, label, URL);
                return option;
            } else if (option.dbid != undefined) {
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, BIMObjectName, option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
                    option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(option.info, label, URL);
                return option;
            }
        } else return option;
    }
    async addAttributes(option, BIMObjectName, label, value) {
        if (label != undefined && value != undefined && value != "" && label != "") {
            if (option.info != undefined) {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttribute(option.info, label, value);
                return option;
            } else if (option.dbid != undefined) {
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, BIMObjectName, option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
                    option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttribute(option.info, label, value);
                return option;
            }
        } else return option;
    }
    ///////////////////////////////////////////////////////////
    //                      NOTES                            //
    ///////////////////////////////////////////////////////////
    getIcon(nodeInfo, contextInfo) {
        return this._isColored(nodeInfo, contextInfo).then((isColored)=>{
            return isColored;
        });
    }
    restoreItem(nodeInfo, contextInfo) {
        this.getGroups(nodeInfo, contextInfo).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                this._restoreGroup(contextInfo.id, id);
            });
        });
    }
    colorItem(nodeInfo, contextInfo) {
        this.getGroups(nodeInfo, contextInfo).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                let color = el.color ? el.color : undefined;
                this._colorGroup(contextInfo.id, id, color);
            });
        });
    }
    getGroups(selectedNode, contextInfo) {
        const type = selectedNode.type;
        const nodeId = selectedNode.id;
        const contextId = contextInfo.id;
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type)) return Promise.resolve([
            selectedNode
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    async getBimObjects(contextId, groupId) {
        const notes = await this._getNotes(groupId, contextId);
        const parents = await this._getParents(notes);
        const promises = parents.map((el)=>this._getItemsBim(el));
        return Promise.all(promises).then((result)=>{
            const res = [];
            result.forEach((el)=>res.push(...el));
            return res;
        });
    }
    ////////////////////////////////////////////////////////////
    //                    PRIVATE                             //
    ////////////////////////////////////////////////////////////
    _isColored(selectedNode, contextInfo) {
        return this.getGroups(selectedNode, contextInfo).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id = res[index].id;
                if (typeof ItemColoredMap.get(id) === "undefined") return false;
            }
            return true;
        });
    }
    _colorGroup(contextId, groupId, argColor) {
        return this.getBimObjects(contextId, groupId).then((res)=>{
            let color = typeof argColor !== "undefined" ? this._convertHexColorToRGB(argColor) : this._convertHexColorToRGB("#000000");
            ItemColoredMap.set(groupId, groupId);
            res.forEach((child)=>{
                let BimColors = BimElementsColor.get(child.dbid) ? BimElementsColor.get(child.dbid) : [];
                BimColors.push({
                    id: groupId,
                    color: color
                });
                BimElementsColor.set(child.dbid, BimColors);
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId);
                model.setThemingColor(child.dbid, new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7, true));
            });
        });
    }
    _restoreGroup(contextId, groupId) {
        ItemColoredMap.delete(groupId);
        return this.getBimObjects(contextId, groupId).then((res)=>{
            res.forEach((child)=>{
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId);
                model.setThemingColor(child.dbid, // eslint-disable-next-line no-undef
                new THREE.Vector4(0, 0, 0, 0), true);
                let allColors = BimElementsColor.get(child.dbid);
                if (allColors) {
                    //   allColors = allColors.filter(el => el.id !== node.id.get());
                    allColors = allColors.filter((el)=>el.id !== groupId);
                    BimElementsColor.set(child.dbid, allColors);
                    if (allColors.length > 0) {
                        let color = allColors[0].color;
                        model.setThemingColor(child.dbid, // eslint-disable-next-line no-undef
                        new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7), true);
                    }
                }
            });
        });
    }
    _getNotes(nodeId, contextId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === (0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    _convertHexColorToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    _getParents(notes) {
        const promises = notes.map((el)=>{
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id);
            return realNode.getParents((0, _spinalEnvViewerPluginDocumentationService.NOTE_RELATION));
        });
        return Promise.all(promises).then((result)=>{
            const res = [];
            result.forEach((element)=>{
                const infos = element.map((el)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                    return el.info.get();
                });
                res.push(...infos);
            });
            return res;
        });
    }
    _getItemsBim(nodeInfo) {
        const type = nodeInfo.type;
        const nodeId = nodeInfo.id;
        if (type === (0, _constants.BIM_OBJECT_TYPE)) return Promise.resolve([
            nodeInfo
        ]);
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
        ]);
        else // let relations = [
        //   ...geographicService.constants.GEOGRAPHIC_RELATIONS,
        //   geographicService.constants.REFERENCE_RELATION
        // ];
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, (0, _utilities.SELECTrelationList), (node)=>{
            return node.getType().get() === (0, _constants.BIM_OBJECT_TYPE);
        }).then((res)=>{
            return res.map((el)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                return el.info.get();
            });
        });
    }
    ////////////////////////////////////////////////////////////////////
    //                    Standard Buttons functions                  //
    ////////////////////////////////////////////////////////////////////
    async getGeographicElement(noteId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(noteId);
        const parents = await realNode.getParents((0, _spinalEnvViewerPluginDocumentationService.NOTE_RELATION));
        return parents.filter((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
        }).map((el)=>el.info);
    }
    async getNoteParentsBim(nodeId, contextId) {
        const notes = await this._getNotes(nodeId, contextId);
        const promises = notes.map((el)=>this.getGeographicElement(el.id));
        return Promise.all(promises).then(async (noteParents)=>{
            const el = noteParents.flat();
            const promises = el.map((v)=>this._getItemsBim(v));
            let bims = await Promise.all(promises);
            bims = bims.flat();
            const bimMap = new Map();
            for (const bimObject of bims){
                const bimFileId = bimObject.bimFileId;
                const dbid = bimObject.dbid;
                if (typeof bimMap.get(bimFileId) === "undefined") bimMap.set(bimFileId, new Set());
                bimMap.get(bimFileId).add(dbid);
            }
            const res = [];
            for (const [key, value] of bimMap.entries())res.push({
                model: window.spinal.BimObjectService.getModelByBimfile(key),
                ids: Array.from(value)
            });
            return res;
        });
    }
}
const utilities = new DocumentationUtilities();

},{"spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","spinal-env-viewer-plugin-standard_button/js/utilities":"7fsh6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gXCo6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _utilities = require("../../service/utilities");
const { SpinalContextApp } = require("1cd542c76efd12ce");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Isolate Object on Maquette", "Isolate Object on Maquette", {
            icon: "settings_overscan",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        return contextType === `${0, _constants.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            window.spinal.ForgeViewer.viewer.impl.visibilityManager.isolate(el.ids, el.model);
        });
    }
}
exports.default = FindMessageParent;

},{"1cd542c76efd12ce":"3h19D","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"eODeB","../../service/utilities":"bhM68","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iMrk2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _utilities = require("../../service/utilities");
const { SpinalContextApp } = require("b21404b2866488d7");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Zoom", "Find message Parent", {
            icon: "zoom_in",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        console.log(contextType, type);
        return contextType === `${0, _constants.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        const dbIds = parents.map((el)=>el.ids);
        window.spinal.ForgeViewer.viewer.fitToView(dbIds.flat());
    }
}
exports.default = FindMessageParent;

},{"b21404b2866488d7":"3h19D","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"eODeB","../../service/utilities":"bhM68","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7iVOh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const { SpinalContextApp } = require("4e55680af22ef812");
class MessageDetail extends SpinalContextApp {
    constructor(){
        super("See message detail", "see Message date", {
            icon: "announcement",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isNote = type === (0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE);
        const isNoteGroupContext = contextType == `${0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE}GroupContext`;
        return isNote || isNoteGroupContext ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("messageDetailDialog", {
            nodeId: nodeId,
            contextId: contextId
        });
    }
}
exports.default = MessageDetail;

},{"4e55680af22ef812":"3h19D","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Gg2m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _utilities = require("../service/utilities");
const { SpinalContextApp } = require("d8518363c79ae351");
class ColorMessageParent extends SpinalContextApp {
    constructor(){
        super("See message detail", "see Message date", {
            icon: "",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isNote = type === (0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE);
        const isNoteGroupContext = contextType == `${0, _spinalEnvViewerPluginDocumentationService.NOTE_TYPE}GroupContext`;
        if (!isNoteGroupContext || isNote) return Promise.resolve(-1);
        return (0, _utilities.utilities).getIcon(option.selectedNode.get(), option.context.get()).then((isColored)=>{
            this.buttonCfg["isColored"] = isColored;
            this.buttonCfg.icon = isColored ? "visibility_off" : "visibility";
            return true;
        });
    }
    async action(option) {
        const selected = option.selectedNode.get();
        const context = option.context.get();
        if (this.isColored) {
            this.icon = "visibility";
            this.isColored = false;
            (0, _utilities.utilities).restoreItem(selected, context);
        } else {
            this.icon = "visibility_off";
            this.isColored = true;
            (0, _utilities.utilities).colorItem(selected, context);
        }
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
exports.default = ColorMessageParent;

},{"d8518363c79ae351":"3h19D","spinal-env-viewer-plugin-documentation-service":"cP9kK","../service/utilities":"bhM68","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8cdcE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotesButton", ()=>NotesButton);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _notesComponentVue = require("../view/notes/components/notesComponent.vue");
var _notesComponentVueDefault = parcelHelpers.interopDefault(_notesComponentVue);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const { SpinalContextApp } = require("9d0f0a6420acade2");
const { spinalPanelManagerService } = require("a997c98668f3d421");
const { SpinalForgeExtention } = require("4839fc6c73a1c287");
const noteExtension = SpinalForgeExtention.createExtention({
    name: "panel-notes",
    vueMountComponent: (0, _vueDefault.default).extend((0, _notesComponentVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "Notes",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        width: "400px",
        height: "475px",
        minWidth: "510px"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
SpinalForgeExtention.registerExtention(name, noteExtension);
class NotesButton extends SpinalContextApp {
    constructor(){
        super("Spinal Notes", "Spinal CDE description", {
            icon: "insert_comment",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        /*
    if ((option.selectedNode && option.selectedNode.type === 'BIMObject') ||
      option.dbid)
      return Promise.resolve(true);
    // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
    // console.log(option)
    return Promise.resolve(-1);
    */ return Promise.resolve(true);
    }
    async action(option) {
        let obj = {
            selectedNode: getSelectedNode(option.selectedNode),
            dbid: option.dbid ? option.dbid : getDbId(option.selectedNode),
            exist: option.exist,
            model: option.model3d
        };
        spinalPanelManagerService.openPanel("panel-notes", obj);
    }
}
const getSelectedNode = (selectedNode)=>{
    if (typeof selectedNode === "undefined") return;
    if (selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return selectedNode;
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(selectedNode.id.get());
};
const getDbId = (selectedNode)=>{
    if (selectedNode && selectedNode.info && selectedNode.info.dbid) return selectedNode.info.dbid.get();
    else if (selectedNode && selectedNode.dbid) return selectedNode.dbid.get();
};
const createBimObjectNode = ()=>{
    const viewer = spinal.ForgeViewer.viewer;
    const aggregateSelection = viewer.getAggregateSelection()[0];
    if (aggregateSelection) {
        const dbid = aggregateSelection.selection[0];
        const model = aggregateSelection.model;
        return new Promise((resolve)=>{
            viewer.model.getProperties(dbid, async (res)=>{
                const info = await window.spinal.BimObjectService.createBIMObject(dbid, res.name, model);
                if (info instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return resolve(info);
                resolve((0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(info.id.get()));
            });
        });
    }
};

},{"9d0f0a6420acade2":"3h19D","spinal-env-viewer-graph-service":"9LAk7","a997c98668f3d421":"egTXY","4839fc6c73a1c287":"fYcpE","../view/notes/components/notesComponent.vue":"e3pBp","vue":"hO3OD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e3pBp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3072cdcac49f327c");
    if (script.__esModule) script = script.default;
    script.render = require("7d22db4c4fcb5ffd").render;
    script.staticRenderFns = require("7d22db4c4fcb5ffd").staticRenderFns;
    script._scopeId = "data-v-48bef6";
    script.__cssModules = require("92af2a3272474041").default;
    require("bd573c5b91ef6548").default(script);
    script.__scopeId = 'data-v-48bef6';
    script.__file = "notesComponent.vue";
};
initialize();
exports.default = script;

},{"3072cdcac49f327c":"aXWTP","7d22db4c4fcb5ffd":"5UrTK","92af2a3272474041":"3Np4W","bd573c5b91ef6548":"5h6dT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aXWTP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
// import { FileExplorer } from "../../../service/fileSystemExplorer.js";
// import { MESSAGE_TYPES } from "spinal-models-documentation";
// import {
//   SpinalNode,
//   SpinalGraphService,
// } from "spinal-env-viewer-graph-service";
var _messageComponentVue = require("./messageComponent.vue");
var _messageComponentVueDefault = parcelHelpers.interopDefault(_messageComponentVue);
// import moment from "moment";
// import messageVue from "./message.vue";
// import attachmentVue from "./attachment.vue";
const { spinalPanelManagerService } = require("d639ea77ae50a1be");
var scriptExports = {
    name: "noteComponent",
    data () {
        return {
            // userConnected: {
            //   username: window.spinal.spinalSystem.getUser().username,
            //   userId: FileSystem._user_id,
            // },
            // messages: {
            //   messageUser: "",
            //   pj: [],
            // },
            // // messageUser: "",
            // messageUserEdit: "",
            // notesDisplayList: [],
            // editNodePopup: false,
            // selectedNote: undefined,
            // scrollToEnd: false,
            nodeInfo: undefined,
            noteContextSelected: undefined,
            noteCategorySelected: undefined,
            noteGroupSelected: undefined
        };
    },
    components: {
        "message-component": (0, _messageComponentVueDefault.default)
    },
    methods: {
        opened (option) {
            this.nodeInfo = option;
        // this.resetBind();
        // this.updatedd();
        },
        removed (option, viewer) {},
        closed (option, viewer) {},
        OpenLinkDialog () {
            spinalPanelManagerService.openPanel("linkToGroupDialog", {
                type: (0, _constants.NOTE_TYPE),
                itemSelected: [],
                callback: (context, category, group)=>{
                    this.noteContextSelected = context;
                    this.noteCategorySelected = category;
                    this.noteGroupSelected = group;
                }
            });
        }
    },
    async mounted () {
        const context = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultContext();
        const category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultCategory();
        const group = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultGroup();
        this.noteContextSelected = context.info.get();
        this.noteCategorySelected = category.info.get();
        this.noteGroupSelected = group.info.get();
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"eODeB","d639ea77ae50a1be":"egTXY","./messageComponent.vue":"e969c","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5UrTK":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "notesBox"
    }, [
        _c('md-toolbar', {
            staticClass: "mdToolbar md-dense",
            attrs: {
                "md-elevation": "0"
            }
        }, [
            _c('div', {
                staticClass: "md-toolbar-section-start breadCrumb"
            }, [
                _vm.noteContextSelected && _vm.noteCategorySelected && _vm.noteGroupSelected ? _c('div', [
                    _c('div', [
                        _c('span', {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteContextSelected.name))
                        ]),
                        _vm._v(" "),
                        _c('span', {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v("/")
                        ]),
                        _vm._v(" "),
                        _c('span', {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteCategorySelected.name))
                        ]),
                        _vm._v(" "),
                        _c('span', {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v("/")
                        ]),
                        _vm._v(" "),
                        _c('span', {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteGroupSelected.name))
                        ])
                    ])
                ]) : _vm._e()
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-toolbar-section-end"
            }, [
                _c('md-button', {
                    staticClass: "md-icon-button md-primary",
                    on: {
                        "click": _vm.OpenLinkDialog
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("settings_applications")
                    ])
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "notes_div"
        }, [
            _c('message-component', {
                attrs: {
                    "nodeInfo": _vm.nodeInfo,
                    "noteContextSelected": _vm.noteContextSelected,
                    "noteCategorySelected": _vm.noteCategorySelected,
                    "noteGroupSelected": _vm.noteGroupSelected
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3Np4W":[function() {},{}],"5h6dT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hsyaZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _messageDetailDialogVue = require("./messageDetailDialog.vue");
var _messageDetailDialogVueDefault = parcelHelpers.interopDefault(_messageDetailDialogVue);
exports.default = {
    name: "messageDetailDialog",
    vueMountComponent: (0, _vueDefault.default).extend((0, _messageDetailDialogVueDefault.default)),
    parentContainer: document.body
};

},{"vue":"hO3OD","./messageDetailDialog.vue":"iX7WQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iX7WQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("96eb55116e0ce9b");
    if (script.__esModule) script = script.default;
    script.render = require("eff8d8f7d42daf8c").render;
    script.staticRenderFns = require("eff8d8f7d42daf8c").staticRenderFns;
    script._scopeId = "data-v-ef1ae3";
    require("8f140d579b6a263c").default(script);
    script.__scopeId = 'data-v-ef1ae3';
    script.__file = "messageDetailDialog.vue";
};
initialize();
exports.default = script;

},{"96eb55116e0ce9b":"4DGNJ","eff8d8f7d42daf8c":"fQv7N","8f140d579b6a263c":"7WIXN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4DGNJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _messageVue = require("../components/message.vue");
var _messageVueDefault = parcelHelpers.interopDefault(_messageVue);
var scriptExports = {
    name: "messageDetailDialog",
    props: [
        "onFinised"
    ],
    components: {
        "message-component": (0, _messageVueDefault.default)
    },
    data () {
        return {
            showDialog: true,
            messages: []
        };
    },
    methods: {
        async opened (params) {
            this.messages = await this.getAllNotes(params.nodeId, params.contextId);
        },
        async getAllNotes (nodeId, contextId) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            const type = realNode && realNode.getType().get();
            if (!type) return [];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return node.getType().get() === (0, _constants.NOTE_TYPE);
            }).then((values)=>{
                const promises = values.map(async (el)=>{
                    const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id.get());
                    const element = await node.getElement();
                    return element;
                });
                return Promise.all(promises);
            });
        },
        removed (closed) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"eODeB","spinal-env-viewer-graph-service":"9LAk7","../components/message.vue":"6HBjF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fQv7N":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "mdDialogContainer paramsDialogContainer",
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
            staticStyle: {
                "text-align": "center"
            }
        }),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "md-scrollbar"
        }, [
            _c('ul', _vm._l(_vm.messages, function(note, index) {
                return _c('message-component', {
                    key: index,
                    attrs: {
                        "date": note.date.get(),
                        "username": note.username.get(),
                        "message": note.message.get(),
                        "type": note.type.get(),
                        "file": note.file
                    }
                });
            }), 1)
        ]),
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
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7WIXN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3doJy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentationExtension", ()=>DocumentationExtension);
parcelHelpers.export(exports, "DocumentationButton", ()=>DocumentationButton);
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Export to drive button                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////
parcelHelpers.export(exports, "ExportToDriveButton", ()=>ExportToDriveButton);
parcelHelpers.export(exports, "addAutoUrlRightClick", ()=>addAutoUrlRightClick);
parcelHelpers.export(exports, "addAutoAttributesRightClick", ()=>addAutoAttributesRightClick);
parcelHelpers.export(exports, "deleteAutoUrlRightClick", ()=>deleteAutoUrlRightClick);
parcelHelpers.export(exports, "registerRightClickButton", ()=>registerRightClickButton);
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Right click Panel url                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////
parcelHelpers.export(exports, "registerRightClickurl", ()=>registerRightClickurl);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _documentationComponentVue = require("../documentationComponent.vue");
var _documentationComponentVueDefault = parcelHelpers.interopDefault(_documentationComponentVue);
var _attributesRightClickVue = require("../view/rightClick/attributesRightClick.vue");
var _attributesRightClickVueDefault = parcelHelpers.interopDefault(_attributesRightClickVue);
var _deleteUrlRightClickVue = require("../view/rightClick/deleteUrlRightClick.vue");
var _deleteUrlRightClickVueDefault = parcelHelpers.interopDefault(_deleteUrlRightClickVue);
var _urlRightClickVue = require("../view/rightClick/urlRightClick.vue");
var _urlRightClickVueDefault = parcelHelpers.interopDefault(_urlRightClickVue);
var _spinalModelGraph = require("spinal-model-graph");
var _forgeTreeJs = require("../service/forgeTree.js");
var _forgeTreeJsDefault = parcelHelpers.interopDefault(_forgeTreeJs);
const { SpinalContextApp } = require("584f667426db6e6d");
const { spinalPanelManagerService } = require("d29fc61ab794ee19");
const { SpinalForgeExtention } = require("c2cd75b768d1f5e5");
const DocumentationExtension = SpinalForgeExtention.createExtention({
    name: "panel-documentation",
    vueMountComponent: (0, _vueDefault.default).extend((0, _documentationComponentVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "Documentation",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        width: "30vh",
        height: "40vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
class DocumentationButton extends SpinalContextApp {
    constructor(){
        super("Documentation", "Spinal Documentation description", {
            icon: "folder",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
        if (option.selectedNode) {
            const type = option.selectedNode.type.get();
            if (type === "SpinalService" || type === "SpinalContext" || type === "dashboardContext" || type === "BimFile" || type === "scene") return Promise.resolve(-1);
        }
        return Promise.resolve(true);
    }
    action(option) {
        // option.paramSent = "hello from DocumentationCircularMenuButton";
        spinalPanelManagerService.openPanel("panel-documentation", option);
    }
}
class ExportToDriveButton extends SpinalContextApp {
    constructor(){
        super("Export File To Drive", "Spinal Documentation description", {
            icon: "folder",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
        const type = option.selectedNode.type.get();
        if (type === "SpinalService" || type === "SpinalContext" || type === "dashboardContext" || type === "BimFile") return Promise.resolve(-1);
        let selectedNode = option.info;
        // let dbid = option.dbid
        // let boolBIMObject = option.exist
        if (option.selectedNode !== undefined) // get real node
        selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (selectedNode instanceof (0, _spinalModelGraph.SpinalContext)) return Promise.resolve(true);
        else return Promise.resolve(-1);
    // if (selectedNode.info.type.get() == "geographicContext")
    //   return Promise.resolve(true);
    // else {
    //   return Promise.resolve(-1);
    // }
    }
    action(option) {
        let selectedNode = option.info;
        let dbid = option.dbid;
        let boolBIMObject = option.exist;
        if (option.selectedNode !== undefined) // get real node
        selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        let obj = {
            selectedNode,
            dbid,
            boolBIMObject
        };
        (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).exportToDrive(obj.selectedNode);
    // spinalPanelManagerService.openPanel('panel-notes', obj);
    }
}
const addAutoUrlRightClick = SpinalForgeExtention.createExtention({
    name: "url-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _urlRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "url-right-click",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
const addAutoAttributesRightClick = SpinalForgeExtention.createExtention({
    name: "attributes-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _attributesRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "attributes-right-click",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
const deleteAutoUrlRightClick = SpinalForgeExtention.createExtention({
    name: "delete-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _deleteUrlRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "delete attributes",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
function registerRightClickButton() {
    var checkExist = setInterval(function() {
        const viewer = window.spinal.ForgeViewer.viewer;
        if (viewer !== undefined) {
            viewer.registerContextMenuCallback("MyChangingColorMenuItems", (menu, status)=>{
                if (status.hasSelected) {
                    menu.push({
                        title: "Add Spinal Attributes",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            (0, _forgeTreeJsDefault.default).getAllCategoryByDbidArray(allChildDbid).then((mycat)=>{
                                const propsData = {
                                    dbid: allChildDbid,
                                    category: mycat
                                };
                                spinalPanelManagerService.openPanel("attributes-right-click", propsData);
                            });
                        }
                    });
                    menu.push({
                        title: "Add Spinal url",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            const propsData = {
                                dbid: allChildDbid
                            };
                            spinalPanelManagerService.openPanel("url-right-click", propsData);
                        }
                    });
                    menu.push({
                        title: "Delete Spinal url",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            const propsData = {
                                dbid: allChildDbid
                            };
                            spinalPanelManagerService.openPanel("delete-right-click", propsData);
                        }
                    });
                }
            });
            clearInterval(checkExist);
        }
    }, 100);
}
function registerRightClickurl() {
    var checkExist = setInterval(function() {
        const viewer = window.spinal.ForgeViewer.viewer;
        if (viewer !== undefined) {
            viewer.registerContextMenuCallback("MyChangingColorMenuItems", (menu, status)=>{
                if (status.hasSelected) menu.push({
                    title: "Add Spinal url",
                    target: ()=>{
                        const selSet = viewer.getSelection();
                        let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                        const propsData = {
                            dbid: allChildDbid
                        };
                        spinalPanelManagerService.openPanel("url-right-click", propsData);
                    }
                });
            });
            clearInterval(checkExist);
        }
    }, 100);
}

},{"vue":"hO3OD","584f667426db6e6d":"3h19D","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","d29fc61ab794ee19":"egTXY","c2cd75b768d1f5e5":"fYcpE","../documentationComponent.vue":"6TP4Q","../view/rightClick/attributesRightClick.vue":"aUPR9","../view/rightClick/deleteUrlRightClick.vue":"eBAuM","../view/rightClick/urlRightClick.vue":"VCCQ2","spinal-model-graph":"b87gp","../service/forgeTree.js":"1tGYS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6TP4Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("31a4e0185ab8c405");
    if (script.__esModule) script = script.default;
    script.render = require("a2e91578ac897b37").render;
    script.staticRenderFns = require("a2e91578ac897b37").staticRenderFns;
    script._scopeId = "data-v-e55b75";
    script.__cssModules = require("7ce88174b5134f7").default;
    require("51cf3e4d8fe9bf4d").default(script);
    script.__scopeId = 'data-v-e55b75';
    script.__file = "documentationComponent.vue";
};
initialize();
exports.default = script;

},{"31a4e0185ab8c405":"7sjxD","a2e91578ac897b37":"70OcU","7ce88174b5134f7":"29zHH","51cf3e4d8fe9bf4d":"7616f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7sjxD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlpanelVue = require("./view/documentation/URLPanel.vue");
var _urlpanelVueDefault = parcelHelpers.interopDefault(_urlpanelVue);
var _filePanelVue = require("./view/documentation/FilePanel.vue");
var _filePanelVueDefault = parcelHelpers.interopDefault(_filePanelVue);
var _attributesPanelVue = require("./view/documentation/AttributesPanel.vue");
var _attributesPanelVueDefault = parcelHelpers.interopDefault(_attributesPanelVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            activeTab: 0,
            selectedNode: undefined,
            dbid: undefined,
            option: undefined,
            buttonList: [],
            parentGroup: undefined
        };
    },
    components: {
        urlpanel: (0, _urlpanelVueDefault.default),
        filepanel: (0, _filePanelVueDefault.default),
        attributespanel: (0, _attributesPanelVueDefault.default)
    },
    methods: {
        activeTabColor: function(value) {
            if (this.activeTab == value) return {
                background: "#356BaB",
                border: "1px solid white"
            };
            else return {
                background: "unset",
                border: "1px solid white"
            };
        },
        updateSelectedBIMObject (option) {
            this.option = {};
            Object.assign(this.option, option);
            this.selectedNode = this.option.info;
        },
        opened (option) {
            this.option = option;
            let _this = this;
            if (option.selectedNode !== undefined) {
                if (option.selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) option.info = option.selectedNode;
                else option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
                this.selectedNode = option.info;
                option.exist = true;
            } else if (option.info !== undefined) {
                this.selectedNode = option.info;
                this.dbid = option.dbid;
            } else {
                this.selectedNode = undefined;
                this.dbid = option.dbid;
            }
            // set attributes for building
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).setBuildingInformationAttributes(this.selectedNode);
            // .then(info => {});
            // // get shared attributes
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getParentGroup(this.selectedNode).then((allParentGroup)=>{
                _this.parentGroup = typeof allParentGroup !== "undefined" ? allParentGroup : [];
            });
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./view/documentation/URLPanel.vue":"jdOfa","./view/documentation/FilePanel.vue":"6ytH4","./view/documentation/AttributesPanel.vue":"lhvpz","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jdOfa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ecd114f9d39da0bd");
    if (script.__esModule) script = script.default;
    script.render = require("423b46146b18e6d3").render;
    script.staticRenderFns = require("423b46146b18e6d3").staticRenderFns;
    script._scopeId = "data-v-1d7a8b";
    script.__cssModules = require("b85aaa988e0b9e56").default;
    require("469f96b46380ad7b").default(script);
    script.__scopeId = 'data-v-1d7a8b';
    script.__file = "URLPanel.vue";
};
initialize();
exports.default = script;

},{"ecd114f9d39da0bd":"1hmeN","423b46146b18e6d3":"hrG6j","b85aaa988e0b9e56":"1Bmj0","469f96b46380ad7b":"d6DJj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1hmeN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _utilitiesJs = require("../../service/utilities.js");
var _menuURLVue = require("./component/menuURL.vue");
var _menuURLVueDefault = parcelHelpers.interopDefault(_menuURLVue);
var _path = require("path");
var viewer;
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            addURLDialogueStatus: false,
            label: undefined,
            URL: undefined,
            URLDisplayList: [],
            myBind: undefined,
            groupURLDisplayList: [],
            myBindParent: undefined,
            parentListToBind: undefined
        };
    },
    components: {
        menuURL: (0, _menuURLVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        editURLNode (urlNode, urlChange) {
            urlNode.element.name.set(urlChange.label);
            urlNode.element.URL.set(urlChange.URL);
        },
        removeURLNode (urlNode) {
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).removeNode(urlNode);
        },
        async updateURLList () {
            if (this.option.info != undefined) this.URLDisplayList = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getURL(this.option.info);
            else this.URLDisplayList = [];
        },
        async updateURLParent () {
            this.groupURLDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    json = {
                        groupName: node.info.name.get(),
                        url: await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getURL(node)
                    };
                    this.groupURLDisplayList.push(json);
                }
            }
        },
        addLink () {
            let _this = this;
            let label = this.label;
            let URL = this.URL;
            viewer.model.getProperties(this.option.dbid, function(res) {
                let option = (0, _utilitiesJs.utilities).addLink(_this.option, res.name, label, URL);
                option.then((option)=>{
                    if (_this.option.exist == false) {
                        _this.option.exist = true;
                        _this.$emit("updateMyBIMObject", option);
                    }
                });
            });
            this.label = undefined;
            this.URL = undefined;
            this.addURLDialogueStatus = false;
        },
        resetBind () {
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    if (this.myBind != undefined) {
                        this.option.info.unbind(this.myBind);
                        this.myBind = undefined;
                    }
                    if (this.myBind == undefined) this.myBind = this.option.info.bind(this.updateURLList.bind(this));
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            if (!this.parentListToBind) this.parentListToBind = new Lst();
            if (this.parentListToBind.length !== this.parentGroup.length) {
                this.parentListToBind.splice(0, this.parentListToBind.length);
                for(let i = 0; i < this.parentGroup.length; i++){
                    const element = this.parentGroup[i];
                    this.parentListToBind.push(element);
                }
            }
            if (this.myBindParent == undefined) this.parentListToBind.bind(this.updateURLParent.bind(this));
        }
    },
    mounted () {
        viewer = window.spinal.ForgeViewer.viewer;
        this.resetBind();
        this.resetBindParent();
    },
    watch: {
        option: function() {
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"hO3OD","spinal-env-viewer-plugin-documentation-service":"cP9kK","../../service/utilities.js":"bhM68","./component/menuURL.vue":"8X7GL","path":"gfVel","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8X7GL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7a0ea19c1edb5bda");
    if (script.__esModule) script = script.default;
    script.render = require("2aa69f678934ec1f").render;
    script.staticRenderFns = require("2aa69f678934ec1f").staticRenderFns;
    script._scopeId = "data-v-8c11c4";
    script.__cssModules = require("6a9df5f988a34a62").default;
    require("fe224bfcc971bdf0").default(script);
    script.__scopeId = 'data-v-8c11c4';
    script.__file = "menuURL.vue";
};
initialize();
exports.default = script;

},{"7a0ea19c1edb5bda":"1dD7B","2aa69f678934ec1f":"8P7op","6a9df5f988a34a62":"ef7NE","fe224bfcc971bdf0":"4qvh5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1dD7B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "url"
    ],
    data () {
        return {
            activeEditURLNode: false,
            urlChange: {
                label: "",
                URL: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editURLNode", this.url, this.urlChange);
            this.activeEditURLNode = false;
        },
        remove () {
            this.$emit("removeURLNode", this.url.node);
        }
    },
    mounted () {
        this.urlChange.label = this.url.element.name.get();
        this.urlChange.URL = this.url.element.URL.get();
    },
    watch: {
        activeEditURLNode () {
            if (this.activeEditURLNode) {
                this.urlChange.label = this.url.element.name.get();
                this.urlChange.URL = this.url.element.URL.get();
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8P7op":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-menu', {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
            }
        }, [
            _c('md-button', {
                staticClass: "md-icon-button",
                attrs: {
                    "md-menu-trigger": ""
                }
            }, [
                _c('md-icon', [
                    _vm._v("more_vert")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-menu-content', [
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            _vm.activeEditURLNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            attrs: {
                "md-active": _vm.activeEditURLNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditURLNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditURLNode = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Edit Link")
            ]),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.urlChange.label,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "label", $$v);
                        },
                        expression: "urlChange.label"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("Link")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.urlChange.URL,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "URL", $$v);
                        },
                        expression: "urlChange.URL"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditURLNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ef7NE":[function() {},{}],"4qvh5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

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

},{"c0743715070b1b8a":"euskh"}],"hrG6j":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "container-link urlBox"
    }, [
        _c('div', [
            _c('div', {
                staticClass: "filesPaddingPath"
            }, [
                _c('div', {
                    staticClass: "sizeOfPathTab"
                }),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-icon-button addURLButtonPanel",
                    on: {
                        "click": function($event) {
                            _vm.addURLDialogueStatus = true;
                        }
                    }
                }, [
                    _c('i', {
                        staticClass: "material-icons iconPlusDocumentation"
                    }, [
                        _vm._v("add_circle_outline")
                    ])
                ])
            ], 1),
            _vm._v(" "),
            _c('md-content', [
                _c('md-list', [
                    _c('md-subheader', {
                        staticClass: "hr-sect"
                    }, [
                        _vm._v("Local URL")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.URLDisplayList, function(url, index) {
                        return _c('md-list-item', {
                            key: index,
                            staticClass: "myRowStyle colorForCategory"
                        }, [
                            _c('span', {
                                staticClass: "span-opacity"
                            }, [
                                _vm._v(_vm._s(url.element.name.get()))
                            ]),
                            _vm._v(" "),
                            _c('a', {
                                directives: [
                                    {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: url.element.URL.get(),
                                        expression: "url.element.URL.get()"
                                    }
                                ],
                                staticClass: "back-line",
                                attrs: {
                                    "href": url.element.URL.get(),
                                    "target": "_blank"
                                }
                            }, [
                                _vm._v("\n                  " + _vm._s(url.element.URL.get()))
                            ]),
                            _vm._v(" "),
                            _c('menuURL', {
                                attrs: {
                                    "url": url
                                },
                                on: {
                                    "editURLNode": _vm.editURLNode,
                                    "removeURLNode": _vm.removeURLNode
                                }
                            })
                        ], 1);
                    })
                ], 2),
                _vm._v(" "),
                _vm.groupURLDisplayList.length > 0 ? _c('div', [
                    _c('md-subheader', {
                        staticClass: "hr-sect"
                    }, [
                        _vm._v("Shared URL")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.groupURLDisplayList, function(cat) {
                        return _c('div', {
                            key: cat.groupName,
                            staticClass: "colorForCategory myRowStyle"
                        }, [
                            _c('md-subheader', {
                                staticClass: "sharedCategoryCss"
                            }, [
                                _vm._v(_vm._s(cat.groupName) + "\n               ")
                            ]),
                            _vm._v(" "),
                            _c('md-list', {
                                staticClass: "unsetPadding"
                            }, _vm._l(cat.url, function(url, index) {
                                return _c('md-list-item', {
                                    key: index,
                                    staticClass: "colorForCategory"
                                }, [
                                    _c('span', {
                                        staticClass: "span-opacity"
                                    }, [
                                        _vm._v(_vm._s(url.element.name.get()))
                                    ]),
                                    _vm._v(" "),
                                    _c('a', {
                                        directives: [
                                            {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: url.element.URL.get(),
                                                expression: "url.element.URL.get()"
                                            }
                                        ],
                                        staticClass: "back-line",
                                        attrs: {
                                            "href": url.element.URL.get(),
                                            "target": "_blank"
                                        }
                                    }, [
                                        _vm._v("\n                        " + _vm._s(url.element.URL.get()))
                                    ])
                                ]);
                            }), 1)
                        ], 1);
                    })
                ], 2) : _vm._e()
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            attrs: {
                "md-active": _vm.addURLDialogueStatus
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.addURLDialogueStatus = $event;
                },
                "update:md-active": function($event) {
                    _vm.addURLDialogueStatus = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Add Link")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', {
                staticClass: "urlDialogContainer"
            }, [
                _c('md-field', {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c('label', [
                        _vm._v("Label")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        model: {
                            value: _vm.label,
                            callback: function($$v) {
                                _vm.label = $$v;
                            },
                            expression: "label"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('md-field', {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c('label', [
                        _vm._v("Link")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        model: {
                            value: _vm.URL,
                            callback: function($$v) {
                                _vm.URL = $$v;
                            },
                            expression: "URL"
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.addURLDialogueStatus = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addLink
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1Bmj0":[function() {},{}],"d6DJj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ytH4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8c48d89c9490a7b4");
    if (script.__esModule) script = script.default;
    script.render = require("1809fc8e6f44fe2a").render;
    script.staticRenderFns = require("1809fc8e6f44fe2a").staticRenderFns;
    script._scopeId = "data-v-e43dd7";
    script.__cssModules = require("24ebbdf875886b7b").default;
    require("c6ac8098ef839022").default(script);
    script.__scopeId = 'data-v-e43dd7';
    script.__file = "FilePanel.vue";
};
initialize();
exports.default = script;

},{"8c48d89c9490a7b4":"ej6IX","1809fc8e6f44fe2a":"hgpES","24ebbdf875886b7b":"6jfpY","c6ac8098ef839022":"ir72C","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ej6IX":[function(require,module,exports,__globalThis) {
// import { FileExplorer } from "../../service/fileSystemExplorer.js";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _driveVue = require("./component/drive.vue");
var _driveVueDefault = parcelHelpers.interopDefault(_driveVue);
var _menuFileVue = require("./component/menuFile.vue");
var _menuFileVueDefault = parcelHelpers.interopDefault(_menuFileVue);
var _selectFromContextVue = require("./selectFromContext.vue");
var _selectFromContextVueDefault = parcelHelpers.interopDefault(_selectFromContextVue);
var _jszip = require("jszip");
var _jszipDefault = parcelHelpers.interopDefault(_jszip);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginDocumentationServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginDocumentationService);
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            activeAddDirectory: false,
            importedFiles: undefined,
            importedDriveFiles: undefined,
            selectedDirectory: undefined,
            oldDirectory: undefined,
            displayList: [],
            multipleFile: undefined,
            myBind: undefined,
            pathTab: [],
            parentListToBind: new Lst(),
            groupAttrDisplayList: [],
            boolInShared: false,
            boolInDirectory: false,
            selectedFileFromContext: undefined
        };
    },
    components: {
        drive: (0, _driveVueDefault.default),
        menuFile: (0, _menuFileVueDefault.default),
        selectFromContext: (0, _selectFromContextVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        async downloadFile (file, index) {
            const files = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).getFilesInTreeAsBuffer(file);
            if (files.length === 1) {
                const fileOne = files[0];
                const blob = this.normalizeBuffer(fileOne);
                if (!blob) return;
                this.triggerBrowserDownload(blob, this.getFileName(fileOne));
                return;
            }
            await this.downloadFilesAsZip(files);
        // const fileType = file._info.model_type.get();
        // if (fileType === "Directory") {
        //    return this.downloadFileAsZip(file);
        // }
        // const fileBuffer = await serviceDocumentation.convertFileToBuffer(file);
        // if (file._info.model_type.get() != "Directory") {
        //    file._ptr.load((path) => {
        //       if (file._info.model_type.get() == "HttpPath") {
        //          const element = document.createElement("a");
        //          const _path =
        //             path.host.get() +
        //             "/file/" +
        //             encodeURIComponent(path.httpRootPath.get()) +
        //             "/" +
        //             encodeURIComponent(path.httpPath.get());
        //          element.setAttribute("href", _path);
        //          element.setAttribute("download", file.name.get());
        //          element.style.display = "none";
        //          document.body.appendChild(element);
        //          element.click();
        //          document.body.removeChild(element);
        //       } else {
        //          var element = document.createElement("a");
        //          element.setAttribute("href", "/sceen/_?u=" + path._server_id);
        //          element.setAttribute("download", file.name);
        //          element.click();
        //       }
        //    });
        // } else {
        //    // check recursive directory & create a ZIP
        // }
        },
        getFileName (file) {
            return file?.name || "spinalcom_file";
        },
        async downloadFilesAsZip (files) {
            const zip = new (0, _jszipDefault.default)();
            let zipName = this.getRootFolderName(files);
            for (const file of files){
                if (!zipName || zipName.startsWith(file.path)) zipName = file.name;
                const blob = this.normalizeBuffer(file);
                if (!blob) continue;
                zip.file(file.path, blob);
            }
            const content = await zip.generateAsync({
                type: "blob"
            });
            this.triggerBrowserDownload(content, `${zipName}.zip`);
        },
        normalizeBuffer (file) {
            const data = file?.buffer || file?.data || file?.blob || file;
            if (data instanceof Blob) return data;
            if (data instanceof ArrayBuffer) return new Blob([
                data
            ], {
                type: file?.type || "application/octet-stream"
            });
            if (ArrayBuffer.isView(data)) return new Blob([
                data
            ], {
                type: file?.type || "application/octet-stream"
            });
            if (typeof data === "string") return new Blob([
                data
            ], {
                type: file?.type || "text/plain"
            });
            return null;
        },
        triggerBrowserDownload (blob, filename) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        },
        async removeFile (file, index) {
            await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).unlinkFileFromNode(this.option.info, file);
            await this.resetBind();
        // this.selectedDirectory.splice(index, 1);
        },
        getFileImported (files) {
            // ici il y a un bug sur les fichier importé, quand j'import un fichier toto.txt, que je change vers le drive tabs,
            // je retourne sur le upload tabs, je ne peux pas ajouter le meme fichier, levent md-change ne triger pas
            this.importedFiles = files;
        },
        getFileImportedFromDrive (files) {
            this.importedDriveFiles = files.map((f)=>f.model);
        },
        selectFileFromContext (files) {
            this.selectedFileFromContext = files;
        },
        resetImportedFiles () {
            this.importedFiles = undefined;
            this.importedDriveFiles = undefined;
            this.multipleFile = undefined;
        },
        getIconFile (file) {
            let fileType;
            if (file.type != undefined) fileType = file.type;
            else fileType = file._info.model_type.get();
            const icons = {
                "File": "insert_drive_file",
                "Directory": "folder",
                "Digital twin": "location_city",
                "Path": "insert_drive_file",
                "Synchronized Directory": "folder_shared",
                "HttpPath": "file_copy"
            };
            if (fileType in icons) return icons[fileType];
            return "not_listed_location";
        // if (fileType === "Directory") return "folder";
        // else if (fileType === "Digital twin") return "location_city";
        // else if (fileType === "Path") return "insert_drive_file";
        // else if (fileType === "Synchronized Directory") return "folder_shared";
        // else if (fileType === "HttpPath") return "file_copy";
        // return "not_listed_location";
        },
        loadRoute (index) {
            if (index == this.pathTab.length - 1) ;
            else {
                this.selectedDirectory = this.pathTab[index].directory;
                let length = this.pathTab.length - 1;
                this.pathTab.splice(index + 1, length - index);
                this.resetBind();
                if (this.pathTab.length == 1) {
                    this.boolInShared = true;
                    this.boolInDirectory = false;
                }
            }
        },
        enterInDirectory (file) {
            if (file._info.model_type.get() == "Directory") {
                file._ptr.load((directory)=>{
                    let pathObj = {
                        name: file.name.get() + " /",
                        directory: directory
                    };
                    this.pathTab.push(pathObj);
                    this.selectedDirectory = directory;
                    this.resetBind();
                });
                this.boolInDirectory = true;
            }
        },
        enterInDirectoryParent (group) {
            let pathObj = {
                name: group.groupName + " /",
                directory: group.groupAttr
            };
            this.pathTab.push(pathObj);
            this.selectedDirectory = group.groupAttr;
            this.boolInShared = false;
            this.boolSharedDirectory = false;
            this.updateDisplayList();
            this.resetBind();
        },
        async updateDisplayList () {
            const displayList = [];
            const node = this.option.info;
            // if (this.selectedDirectory != undefined) {
            if (!node) return;
            const files = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).getFileLinkedToNode(node);
            for(let i = 0; i < files.length; i++){
                const file = files[i];
                displayList.push(file);
            }
            this.displayList = displayList;
        // }
        },
        getFileInDir (directory) {
            let displayList = [];
            if (directory != undefined) for(let i = 0; i < directory.length; i++){
                const file = directory[i];
                displayList.push(file);
            }
            return displayList;
        },
        async updateDisplayListParent () {
            this.groupAttrDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    const dir = await this.getDirectoryElement(node);
                    json = {
                        groupName: node.info.name.get(),
                        groupAttr: dir,
                        files: this.getFileInDir(dir)
                    };
                    this.groupAttrDisplayList.push(json);
                }
            }
        },
        async sendAddFile (node) {
            const promises = [];
            // check if imported file come from drive or upload
            if (this.importedFiles != undefined) promises.push((0, _spinalEnvViewerPluginDocumentationService.FileExplorer).addFileUpload(node, this.importedFiles));
            if (this.importedDriveFiles != undefined) promises.push((0, _spinalEnvViewerPluginDocumentationService.FileExplorer).addFileUpload(node, this.importedDriveFiles));
            if (this.selectedFileFromContext != undefined) for (const file of this.selectedFileFromContext)promises.push((0, _spinalEnvViewerPluginDocumentationServiceDefault.default).linkFileToNode(node, file));
            await Promise.all(promises).catch((err)=>{
                console.error("Error adding file:", err);
            });
        },
        async saveFile () {
            // // check if the node exist
            // // check if node has a directory
            // // if node doesn't exist, i create it
            // // if node haven't a directory, add it
            const nodeIsNotCreated = this.option.info == false; // 
            let option = this.option;
            if (nodeIsNotCreated) option = await this._createBimObjectNode(this.option);
            this.selectedDirectory = await this.createFileDirectory(option.info);
            await this.sendAddFile(option.info);
            await this.resetBind();
            await this.resetImportedFiles();
            this.activeAddDirectory = false;
        // let _this = this;
        // if (this.selectedDirectory != undefined) {
        //    this.sendAddFile(this.option.info);
        // } else {
        //    if (this.option.exist == false) {
        //       let option = this.option;
        //       window.spinal.ForgeViewer.viewer.model.getProperties(
        //          this.option.dbid,
        //          async function (res) {
        //             let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, res.name, option.model3d);
        //             if (boolIsCreated) {
        //                let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
        //                option.info = SpinalGraphService.getRealNode(bimObject.id);
        //             }
        //             if (option.exist == false) {
        //                option.exist = true;
        //                _this.$emit("updateMyBIMObject", option);
        //             }
        //             _this.selectedDirectory = await this.createFileDirectory(option.info);
        //             _this.sendAddFile(option.info);
        //             _this.resetBind();
        //             _this.resetImportedFiles();
        //          }
        //       );
        //    } else {
        //       this.selectedDirectory = await this.createFileDirectory(this.option.info);
        //       this.sendAddFile(this.option.info);
        //       this.resetBind();
        //       this.resetImportedFiles();
        //    }
        // }
        // this.activeAddDirectory = false;
        },
        async _createBimObjectNode (option) {
            const model = window.spinal.ForgeViewer.viewer.model;
            const dbid = option.dbid;
            const bimObjectService = window.spinal.BimObjectService;
            return new Promise((resolve, reject)=>{
                model.getProperties(dbid, async (res)=>{
                    let boolIsCreated = await bimObjectService.createBIMObject(dbid, res.name, option.model3d);
                    if (boolIsCreated) {
                        let bimObject = await bimObjectService.getBIMObject(dbid, option.model3d);
                        option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                    }
                    if (option.exist == false) {
                        option.exist = true;
                        _this.$emit("updateMyBIMObject", option);
                    }
                    resolve(option.info);
                // _this.selectedDirectory = await this.createFileDirectory(option.info);
                // _this.sendAddFile(option.info);
                // _this.resetBind();
                // _this.resetImportedFiles();
                });
            });
        },
        deleteBind () {
            if (this.myBind != undefined) {
                if (this.oldDirectory != undefined) {
                    this.oldDirectory.unbind(this.myBind);
                    this.myBind = undefined;
                }
            }
        },
        resetBind () {
            console.log("reset bind");
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    this.deleteBind();
                    if (this.myBind == undefined) {
                        if (this.selectedDirectory != undefined) {
                            console.log("bind");
                            this.myBind = this.selectedDirectory.bind(this.updateDisplayList.bind(this));
                            this.oldDirectory = this.selectedDirectory;
                        } else {
                            console.log("update display list");
                            this.updateDisplayList();
                        }
                    }
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            this.parentListToBind.splice(0, this.parentListToBind.length);
            for(let i = 0; i < this.parentGroup.length; i++){
                const element = this.parentGroup[i];
                this.parentListToBind.push(element);
            }
            if (this.myBindParent == undefined) this.myBindParent = this.parentListToBind.bind(this.updateDisplayListParent.bind(this));
        },
        async getDirectoryElement (node) {
            const directoryNode = await (0, _spinalEnvViewerPluginDocumentationService.FileExplorer).getDirectory(node);
            if (!directoryNode) return undefined;
            const element = directoryNode.getElement(true);
            return element;
        // return new Promise((resolve, reject) => {
        //    element._ptr.load((directory) => {
        //       resolve(directory);
        //    });
        // });
        },
        async createFileDirectory (node) {
            const directoryNode = await (0, _spinalEnvViewerPluginDocumentationService.FileExplorer).createDirectory(node);
            if (!directoryNode) return undefined;
            const element = directoryNode.getElement(true);
            return element;
        // return new Promise((resolve, reject) => {
        //    element._ptr.load((directory) => {
        //       resolve(directory);
        //    });
        // });
        }
    },
    watch: {
        option: async function() {
            let namePath = "";
            this.selectedDirectory = await this.getDirectoryElement(this.option.info);
            if (this.option.info != undefined) namePath = this.option.info.info.name.get() + " /";
            else namePath = "Home /";
            let pathObj = {
                name: namePath,
                directory: this.selectedDirectory
            };
            this.pathTab = [];
            this.pathTab.push(pathObj);
            this.boolInShared = true;
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    async mounted () {
        if (this.option != undefined) {
            if (this.option.info != undefined) {
                this.selectedDirectory = await this.getDirectoryElement(this.option.info);
                console.log(this.selectedDirectory);
                let namePath = this.option.info.info.name.get() + " /";
                let pathObj = {
                    name: namePath,
                    directory: this.selectedDirectory
                };
                this.boolInShared = true;
                this.pathTab.push(pathObj);
                this.resetBind();
                this.resetBindParent();
            }
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./component/drive.vue":"2Dtku","./component/menuFile.vue":"acLcs","./selectFromContext.vue":"dcpPK","jszip":"fhdYz","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Dtku":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1b45cf5cc1abab8e");
    if (script.__esModule) script = script.default;
    script.render = require("99ddf3075a91abde").render;
    script.staticRenderFns = require("99ddf3075a91abde").staticRenderFns;
    script._scopeId = "data-v-09f387";
    script.__cssModules = require("852f2be99d1b5bdf").default;
    require("438ef9817b5d7e02").default(script);
    script.__scopeId = 'data-v-09f387';
    script.__file = "drive.vue";
};
initialize();
exports.default = script;

},{"1b45cf5cc1abab8e":"lf077","99ddf3075a91abde":"lmJqC","852f2be99d1b5bdf":"6l6hz","438ef9817b5d7e02":"3dirl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lf077":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fileSystemExplorerJs = require("../../../service/fileSystemExplorer.js");
// var viewer;
var scriptExports = {
    name: "addGroup",
    data () {
        return {
            pathTab: [],
            currentPath: undefined,
            tabDisplay: [],
            selected: []
        };
    },
    components: {},
    props: [],
    methods: {
        onSelectDriveFile: function(items) {
            this.selected = items;
            this.$emit("getFileImportedFromDrive", items);
        },
        getIconFile (file) {
            return (0, _fileSystemExplorerJs.FileExplorer).getIconFile(file);
        },
        clickPath: function(driveFiles) {
            this.selected = [];
            let type = driveFiles.type;
            if (type == "Directory" || type == "Synchronized Directory") {
                let route = (0, _fileSystemExplorerJs.FileExplorer).createDriveRoute(this.currentPath, driveFiles);
                this.pathTab.push(route);
                this.currentPath = route.path;
                this.getPath();
            }
        },
        getPath: function() {
            (0, _fileSystemExplorerJs.FileExplorer).loadDrivePath(this.currentPath).then((directory)=>{
                this.tabDisplay = directory;
            });
        },
        loadRoute: function(indexPath) {
            this.selected = [];
            this.currentPath = this.pathTab[indexPath].path;
            this.pathTab.splice(indexPath + 1, this.pathTab.length - (indexPath + 1));
            this.getPath();
        }
    },
    mounted () {
        let route = (0, _fileSystemExplorerJs.FileExplorer).getDrivePathRoot();
        this.currentPath = route.path;
        this.pathTab.push(route);
        this.getPath();
        this.$emit("resetImportedFiles");
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service/fileSystemExplorer.js":"2AFEY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2AFEY":[function(require,module,exports,__globalThis) {
// import ServiceCDE from "spinal-env-viewer-plugin-documentation-service";
// import bimObjectService from 'spinal-env-viewer-plugin-bimobjectservice';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileExplorer", ()=>FileExplorer);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class FileSystemExplorer {
    constructor(){
        this.spinalSystem = window.spinal.spinalSystem;
        this.pathForgeFile = this.spinalSystem.getPath();
    }
    getDrivePathRoot() {
        var user = this.spinalSystem.getUser();
        var home = "/__users__/" + user.username;
        this.currentPath = home;
        var route = {};
        route.name = "home";
        route.path = home;
        return route;
    }
    createDriveRoute(path, file) {
        var name = "/ " + file.name;
        var mypath = path + "/" + file.name;
        var route = {};
        route.name = name;
        route.path = mypath;
        return route;
    }
    loadDrivePath(currentPath) {
        let tabDisplay = [];
        return this.spinalSystem.load(currentPath).then((directory)=>{
            for(let i = 0; i < directory.length; i++){
                const element = directory[i];
                let obj = {
                    name: element.name.get(),
                    type: element._info.model_type.get(),
                    serverid: element._server_id,
                    path: currentPath + "/" + element.name.get(),
                    model: element
                };
                tabDisplay.push(obj);
            }
            return tabDisplay;
        });
    }
    async getDirectory(selectedNode) {
        if (selectedNode != undefined) {
            const fileNode = await selectedNode.getChildren("hasFiles");
            if (fileNode.length == 0) return undefined;
            else {
                let directory = await fileNode[0].getElement();
                return directory;
            }
        }
    }
    async getNbChildren(selectedNode) {
        const fileNode = await selectedNode.getChildren("hasFiles");
        return fileNode.length;
    }
    async createDirectory(selectedNode) {
        let nbNode = await this.getNbChildren(selectedNode);
        if (nbNode == 0) {
            let myDirectory = new Directory();
            let node = await selectedNode.addChild(myDirectory, "hasFiles", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            node.info.name.set("[Files]");
            node.info.type.set("SpinalFiles");
            return myDirectory;
        } else return this.getDirectory(selectedNode);
    }
    addFileUpload(directory, uploadFileList) {
        const files = [];
        for(let i = 0; i < uploadFileList.length; i++){
            const element = uploadFileList[i];
            let filePath = new Path(element);
            let myFile = new File(element.name, filePath);
            directory.push(myFile);
            files.push(myFile);
        }
        return files;
    }
    addFileDrive(directory, driveFileList, pathTab) {
        for(let i = 0; i < driveFileList.length; i++){
            const driveFile = driveFileList[i];
            let test = this.checkInfinitInclusion(FileSystem._objects[driveFile.serverid], pathTab);
            test.then((res)=>{
                if (res == false) ;
                else directory.push(FileSystem._objects[driveFile.serverid]);
            });
        }
    }
    getDigitalTwithePath() {
        return this.spinalSystem.getPath();
    }
    pathParse(path) {
        let arrayOfPath = path.split("/");
        let nameFile = arrayOfPath[arrayOfPath.length - 1];
        return nameFile;
    }
    callback(file) {
        return new Promise((resolve)=>{
            file._ptr.load(resolve);
        });
    }
    checkInfinitInclusion(file, pathTab) {
        let DigitalTwinPath = this.spinalSystem.getPath();
        let nameFile = this.pathParse(DigitalTwinPath);
        let _this = this;
        let tab = [];
        for(let j = 0; j < pathTab.length; j++){
            const name = pathTab[j].name.substring(0, pathTab[j].name.length - 2);
            if (name == file.name.get()) return Promise.resolve(false);
        }
        if (file.name.get() == nameFile) return Promise.resolve(false);
        else if (file._info.model_type.get() === "Directory" || file._info.model_type.get() === "Synchronized Directory") return this.callback(file).then((resdir)=>{
            if (resdir.length > 0) {
                for(let i = 0; i < resdir.length; i++){
                    const file = resdir[i];
                    tab.push(_this.checkInfinitInclusion(file, pathTab));
                }
                return Promise.all(tab).then((array)=>{
                    return !array.includes(false);
                });
            } else return true;
        });
        else return Promise.resolve(true);
    }
    addDirectory(selectedNode) {
        console.log(selectedNode);
    }
    getIconFile(file) {
        let fileType;
        if (file.type != undefined) fileType = file.type;
        else fileType = file._info.model_type.get();
        if (fileType === "Directory") return "folder";
        else if (fileType === "Digital twin") return "location_city";
        else if (fileType === "Path") return "insert_drive_file";
        else if (fileType === "Synchronized Directory") return "folder_shared";
        else if (fileType === "HttpPath") return "file_copy";
        else return "not_listed_location";
    }
}
const FileExplorer = new FileSystemExplorer();

},{"spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lmJqC":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "tableDiv"
    }, [
        _c('div', {
            staticClass: "path"
        }, _vm._l(_vm.pathTab, function(path, index) {
            return _c('span', {
                key: index,
                on: {
                    "click": function($event) {
                        return _vm.loadRoute(index);
                    }
                }
            }, [
                _vm._v(_vm._s(path.name) + " ")
            ]);
        }), 0),
        _vm._v(" "),
        _c('div', {
            staticClass: "table"
        }, [
            _c('md-table', {
                attrs: {
                    "md-fixed-header": ""
                },
                on: {
                    "md-selected": _vm.onSelectDriveFile
                },
                scopedSlots: _vm._u([
                    {
                        key: "md-table-row",
                        fn: function(ref) {
                            var driveFiles = ref.item;
                            return _c('md-table-row', {
                                attrs: {
                                    "md-auto-select": "",
                                    "md-selectable": "multiple"
                                },
                                nativeOn: {
                                    "dblclick": function($event) {
                                        return _vm.clickPath(driveFiles);
                                    }
                                }
                            }, [
                                _c('md-table-cell', {
                                    attrs: {
                                        "md-label": "Name"
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v(_vm._s(_vm.getIconFile(driveFiles)))
                                    ]),
                                    _vm._v("\n               \u205F\n               " + _vm._s(driveFiles.name) + "\n            ")
                                ], 1),
                                _vm._v(" "),
                                _c('md-table-cell', {
                                    attrs: {
                                        "md-label": "Type"
                                    }
                                }, [
                                    _vm._v(_vm._s(driveFiles.type))
                                ])
                            ], 1);
                        }
                    }
                ]),
                model: {
                    value: _vm.tabDisplay,
                    callback: function($$v) {
                        _vm.tabDisplay = $$v;
                    },
                    expression: "tabDisplay"
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6l6hz":[function() {},{}],"3dirl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"acLcs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25cbf89c8b221a8b");
    if (script.__esModule) script = script.default;
    script.render = require("31bb3753619f6af5").render;
    script.staticRenderFns = require("31bb3753619f6af5").staticRenderFns;
    script._scopeId = "data-v-e6db37";
    script.__cssModules = require("1df0eb6b1e888354").default;
    require("24c4e604f25fd292").default(script);
    script.__scopeId = 'data-v-e6db37';
    script.__file = "menuFile.vue";
};
initialize();
exports.default = script;

},{"25cbf89c8b221a8b":"98OBx","31bb3753619f6af5":"2louj","1df0eb6b1e888354":"cMZqO","24c4e604f25fd292":"gfN31","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"98OBx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "file",
        "index",
        "boolInShared"
    ],
    data () {
        return {};
    },
    methods: {
        download () {
            this.$emit("downloadFile", this.file, this.index);
        },
        remove () {
            this.$emit("removeFile", this.file, this.index);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2louj":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-menu', {
        attrs: {
            "md-direction": "top-end",
            "md-align-trigger": ""
        }
    }, [
        _c('md-button', {
            staticClass: "md-icon-button",
            attrs: {
                "md-menu-trigger": ""
            }
        }, [
            _c('md-icon', [
                _vm._v("more_vert")
            ])
        ], 1),
        _vm._v(" "),
        _c('md-menu-content', [
            _c('md-menu-item', {
                on: {
                    "click": _vm.download
                }
            }, [
                _vm._v("Download")
            ]),
            _vm._v(" "),
            _vm.boolInShared == true ? _c('md-menu-item', {
                on: {
                    "click": _vm.remove
                }
            }, [
                _vm._v("Remove")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cMZqO":[function() {},{}],"gfN31":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dcpPK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("17f3a0fe3b00a684");
    if (script.__esModule) script = script.default;
    script.render = require("fb683867eb4ead0b").render;
    script.staticRenderFns = require("fb683867eb4ead0b").staticRenderFns;
    script._scopeId = "data-v-e26192";
    script.__cssModules = require("62eba4f56da2a64b").default;
    require("31aa3be0f424c076").default(script);
    script.__scopeId = 'data-v-e26192';
    script.__file = "selectFromContext.vue";
};
initialize();
exports.default = script;

},{"17f3a0fe3b00a684":"7T3JB","fb683867eb4ead0b":"eakRN","62eba4f56da2a64b":"kjHhU","31aa3be0f424c076":"1U2d8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7T3JB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
const DOCUMENTARY_CONTEXT_TYPE = "DocumentaryContext";
var scriptExports = {
    name: "selectFromContext",
    data () {
        return {
            filesTree: [],
            selectedFiles: [],
            open: [],
            active: []
        };
    },
    methods: {
        async getFilesFromContext () {
            this.filesTree = await this.getFilesContexts();
            console.log("this.filesTree", this.filesTree);
        },
        async selectFile (file) {
            this.selectedFiles.push(file);
            this.$emit("selected", this.selectedFiles);
        },
        getFilesContexts () {
            const contexts = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType(DOCUMENTARY_CONTEXT_TYPE);
            return contexts.map((context)=>({
                    ...context.info.get(),
                    children: []
                }));
        },
        getChildren (item) {
            const relations = [
                (0, _spinalEnvViewerPluginDocumentationService.TO_FILE_RELATION),
                (0, _spinalEnvViewerPluginDocumentationService.TO_FOLDER_RELATION)
            ];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item.id, relations).then((children)=>{
                console.log("children", children);
                const formattedChildren = children.map((child)=>({
                        ...child.get(),
                        children: []
                    }));
                item.children = formattedChildren;
                return formattedChildren;
            });
        },
        getIcon (item, isOpen) {
            const itemExtension = item.name?.split('.').pop().toLowerCase() || '';
            const iconMap = {
                html: 'html',
                js: 'javascript',
                pdf: 'picture_as_pdf',
                png: 'image',
                jpg: 'image',
                jpeg: 'image'
            };
            const iconFound = iconMap[itemExtension];
            if (iconFound) return iconFound;
            if (item.type == "SpinalDirectory" || item.type == DOCUMENTARY_CONTEXT_TYPE) {
                if (isOpen) return "folder_open";
                return "folder";
            }
            return 'insert_drive_file';
        },
        selectStartFile (actives) {
            console.log("actives", actives);
            // const activeId = actives[0];
            this.startFileSelected = actives.map((id)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id));
            this.$emit("selected", this.startFileSelected);
        }
    },
    mounted () {
        this.getFilesFromContext();
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eakRN":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('v-treeview', {
            attrs: {
                "items": _vm.filesTree,
                "activatable": "",
                "dark": "",
                "transition": "",
                "open": _vm.open,
                "load-children": _vm.getChildren,
                "color": "primary",
                "active": _vm.active
            },
            on: {
                "update:open": function($event) {
                    _vm.open = $event;
                },
                "update:active": [
                    function($event) {
                        _vm.active = $event;
                    },
                    _vm.selectStartFile
                ]
            },
            scopedSlots: _vm._u([
                {
                    key: "prepend",
                    fn: function(ref) {
                        var item = ref.item;
                        var open = ref.open;
                        return [
                            _c('v-icon', [
                                _vm._v(" " + _vm._s(_vm.getIcon(item, open)) + " ")
                            ])
                        ];
                    }
                }
            ])
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kjHhU":[function() {},{}],"1U2d8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fhdYz":[function(require,module,exports,__globalThis) {
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var Buffer = require("f7295d6075386111").Buffer;
var global = arguments[3];
var process = require("cf30dbb97a1d82ba");
!function(e) {
    module.exports = e();
}(function() {
    return (function s(a, o, h) {
        function u(r, e) {
            if (!o[r]) {
                if (!a[r]) {
                    var t = undefined;
                    if (!e && t) return t(r, !0);
                    if (l) return l(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n;
                }
                var i = o[r] = {
                    exports: {}
                };
                a[r][0].call(i.exports, function(e) {
                    var t = a[r][1][e];
                    return u(t || e);
                }, i, i.exports, s, a, o, h);
            }
            return o[r].exports;
        }
        for(var l = undefined, e = 0; e < h.length; e++)u(h[e]);
        return u;
    })({
        1: [
            function(e, t, r) {
                "use strict";
                var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                r.encode = function(e) {
                    for(var t, r, n, i, s, a, o, h = [], u = 0, l = e.length, f = l, c = "string" !== d.getTypeOf(e); u < e.length;)f = l - u, n = c ? (t = e[u++], r = u < l ? e[u++] : 0, u < l ? e[u++] : 0) : (t = e.charCodeAt(u++), r = u < l ? e.charCodeAt(u++) : 0, u < l ? e.charCodeAt(u++) : 0), i = t >> 2, s = (3 & t) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
                    return h.join("");
                }, r.decode = function(e) {
                    var t, r, n, i, s, a, o = 0, h = 0, u = "data:";
                    if (e.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
                    var l, f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                    if (e.charAt(e.length - 1) === p.charAt(64) && f--, e.charAt(e.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for(l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e.length;)t = p.indexOf(e.charAt(o++)) << 2 | (i = p.indexOf(e.charAt(o++))) >> 4, r = (15 & i) << 4 | (s = p.indexOf(e.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e.charAt(o++))), l[h++] = t, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = n);
                    return l;
                };
            },
            {
                "./support": 30,
                "./utils": 32
            }
        ],
        2: [
            function(e, t, r) {
                "use strict";
                var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
                function o(e, t, r, n, i) {
                    this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = i;
                }
                o.prototype = {
                    getContentWorker: function() {
                        var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t = this;
                        return e.on("end", function() {
                            if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                        }), e;
                    },
                    getCompressedWorker: function() {
                        return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                    }
                }, o.createWorkerFrom = function(e, t, r) {
                    return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
                }, t.exports = o;
            },
            {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }
        ],
        3: [
            function(e, t, r) {
                "use strict";
                var n = e("./stream/GenericWorker");
                r.STORE = {
                    magic: "\0\0",
                    compressWorker: function() {
                        return new n("STORE compression");
                    },
                    uncompressWorker: function() {
                        return new n("STORE decompression");
                    }
                }, r.DEFLATE = e("./flate");
            },
            {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }
        ],
        4: [
            function(e, t, r) {
                "use strict";
                var n = e("./utils");
                var o = function() {
                    for(var e, t = [], r = 0; r < 256; r++){
                        e = r;
                        for(var n = 0; n < 8; n++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        t[r] = e;
                    }
                    return t;
                }();
                t.exports = function(e, t) {
                    return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function(e, t, r, n) {
                        var i = o, s = n + r;
                        e ^= -1;
                        for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t[a])];
                        return -1 ^ e;
                    }(0 | t, e, e.length, 0) : function(e, t, r, n) {
                        var i = o, s = n + r;
                        e ^= -1;
                        for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t.charCodeAt(a))];
                        return -1 ^ e;
                    }(0 | t, e, e.length, 0) : 0;
                };
            },
            {
                "./utils": 32
            }
        ],
        5: [
            function(e, t, r) {
                "use strict";
                r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
            },
            {}
        ],
        6: [
            function(e, t, r) {
                "use strict";
                var n = null;
                n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
                    Promise: n
                };
            },
            {
                lie: 37
            }
        ],
        7: [
            function(e, t, r) {
                "use strict";
                var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
                function h(e, t) {
                    a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
                }
                r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e) {
                    this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1);
                }, h.prototype.flush = function() {
                    a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
                }, h.prototype.cleanUp = function() {
                    a.prototype.cleanUp.call(this), this._pako = null;
                }, h.prototype._createPako = function() {
                    this._pako = new i[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var t = this;
                    this._pako.onData = function(e) {
                        t.push({
                            data: e,
                            meta: t.meta
                        });
                    };
                }, r.compressWorker = function(e) {
                    return new h("Deflate", e);
                }, r.uncompressWorker = function() {
                    return new h("Inflate", {});
                };
            },
            {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }
        ],
        8: [
            function(e, t, r) {
                "use strict";
                function A(e, t) {
                    var r, n = "";
                    for(r = 0; r < t; r++)n += String.fromCharCode(255 & e), e >>>= 8;
                    return n;
                }
                function n(e, t, r, n, i, s) {
                    var a, o, h = e.file, u = e.compression, l = s !== O.utf8encode, f = I.transformTo("string", s(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = {
                        crc32: 0,
                        compressedSize: 0,
                        uncompressedSize: 0
                    };
                    t && !r || (x.crc32 = e.crc32, x.compressedSize = e.compressedSize, x.uncompressedSize = e.uncompressedSize);
                    var S = 0;
                    t && (S |= 8), l || !_ && !g || (S |= 2048);
                    var z = 0, C = 0;
                    w && (z |= 16), "UNIX" === i ? (C = 798, z |= function(e, t) {
                        var r = e;
                        return e || (r = t ? 16893 : 33204), (65535 & r) << 16;
                    }(h.unixPermissions, w)) : (C = 20, z |= function(e) {
                        return 63 & (e || 0);
                    }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
                    var E = "";
                    return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
                        fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                        dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n, 4) + f + b + p
                    };
                }
                var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
                function s(e, t, r, n) {
                    i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
                }
                I.inherits(s, i), s.prototype.push = function(e) {
                    var t = e.meta.percent || 0, r = this.entriesCount, n = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, i.prototype.push.call(this, {
                        data: e.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: r ? (t + 100 * (r - n - 1)) / r : 100
                        }
                    }));
                }, s.prototype.openedSource = function(e) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
                    var t = this.streamFiles && !e.file.dir;
                    if (t) {
                        var r = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: r.fileRecord,
                            meta: {
                                percent: 0
                            }
                        });
                    } else this.accumulate = !0;
                }, s.prototype.closedSource = function(e) {
                    this.accumulate = !1;
                    var t = this.streamFiles && !e.file.dir, r = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if (this.dirRecords.push(r.dirRecord), t) this.push({
                        data: function(e) {
                            return R.DATA_DESCRIPTOR + A(e.crc32, 4) + A(e.compressedSize, 4) + A(e.uncompressedSize, 4);
                        }(e),
                        meta: {
                            percent: 100
                        }
                    });
                    else for(this.push({
                        data: r.fileRecord,
                        meta: {
                            percent: 0
                        }
                    }); this.contentBuffer.length;)this.push(this.contentBuffer.shift());
                    this.currentFile = null;
                }, s.prototype.flush = function() {
                    for(var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)this.push({
                        data: this.dirRecords[t],
                        meta: {
                            percent: 100
                        }
                    });
                    var r = this.bytesWritten - e, n = function(e, t, r, n, i) {
                        var s = I.transformTo("string", i(n));
                        return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e, 2) + A(e, 2) + A(t, 4) + A(r, 4) + A(s.length, 2) + s;
                    }(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
                    this.push({
                        data: n,
                        meta: {
                            percent: 100
                        }
                    });
                }, s.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
                }, s.prototype.registerPrevious = function(e) {
                    this._sources.push(e);
                    var t = this;
                    return e.on("data", function(e) {
                        t.processChunk(e);
                    }), e.on("end", function() {
                        t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
                    }), e.on("error", function(e) {
                        t.error(e);
                    }), this;
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
                }, s.prototype.error = function(e) {
                    var t = this._sources;
                    if (!i.prototype.error.call(this, e)) return !1;
                    for(var r = 0; r < t.length; r++)try {
                        t[r].error(e);
                    } catch (e) {}
                    return !0;
                }, s.prototype.lock = function() {
                    i.prototype.lock.call(this);
                    for(var e = this._sources, t = 0; t < e.length; t++)e[t].lock();
                }, t.exports = s;
            },
            {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }
        ],
        9: [
            function(e, t, r) {
                "use strict";
                var u = e("../compressions"), n = e("./ZipFileWorker");
                r.generateWorker = function(e, a, t) {
                    var o = new n(a.streamFiles, t, a.platform, a.encodeFileName), h = 0;
                    try {
                        e.forEach(function(e, t) {
                            h++;
                            var r = function(e, t) {
                                var r = e || t, n = u[r];
                                if (!n) throw new Error(r + " is not a valid compression method !");
                                return n;
                            }(t.options.compression, a.compression), n = t.options.compressionOptions || a.compressionOptions || {}, i = t.dir, s = t.date;
                            t._compressWorker(r, n).withStreamInfo("file", {
                                name: e,
                                dir: i,
                                date: s,
                                comment: t.comment || "",
                                unixPermissions: t.unixPermissions,
                                dosPermissions: t.dosPermissions
                            }).pipe(o);
                        }), o.entriesCount = h;
                    } catch (e) {
                        o.error(e);
                    }
                    return o;
                };
            },
            {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }
        ],
        10: [
            function(e, t, r) {
                "use strict";
                function n() {
                    if (!(this instanceof n)) return new n;
                    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var e = new n;
                        for(var t in this)"function" != typeof this[t] && (e[t] = this[t]);
                        return e;
                    };
                }
                (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e, t) {
                    return (new n).loadAsync(e, t);
                }, n.external = e("./external"), t.exports = n;
            },
            {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }
        ],
        11: [
            function(e, t, r) {
                "use strict";
                var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
                function f(n) {
                    return new i.Promise(function(e, t) {
                        var r = n.decompressed.getContentWorker().pipe(new a);
                        r.on("error", function(e) {
                            t(e);
                        }).on("end", function() {
                            r.streamInfo.crc32 !== n.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : e();
                        }).resume();
                    });
                }
                t.exports = function(e, o) {
                    var h = this;
                    return o = u.extend(o || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: n.utf8decode
                    }), l.isNode && l.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e, !0, o.optimizedBinaryString, o.base64).then(function(e) {
                        var t = new s(o);
                        return t.load(e), t;
                    }).then(function(e) {
                        var t = [
                            i.Promise.resolve(e)
                        ], r = e.files;
                        if (o.checkCRC32) for(var n = 0; n < r.length; n++)t.push(f(r[n]));
                        return i.Promise.all(t);
                    }).then(function(e) {
                        for(var t = e.shift(), r = t.files, n = 0; n < r.length; n++){
                            var i = r[n], s = i.fileNameStr, a = u.resolve(i.fileNameStr);
                            h.file(a, i.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: i.date,
                                dir: i.dir,
                                comment: i.fileCommentStr.length ? i.fileCommentStr : null,
                                unixPermissions: i.unixPermissions,
                                dosPermissions: i.dosPermissions,
                                createFolders: o.createFolders
                            }), i.dir || (h.file(a).unsafeOriginalName = s);
                        }
                        return t.zipComment.length && (h.comment = t.zipComment), h;
                    });
                };
            },
            {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }
        ],
        12: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("../stream/GenericWorker");
                function s(e, t) {
                    i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
                }
                n.inherits(s, i), s.prototype._bindStream = function(e) {
                    var t = this;
                    (this._stream = e).pause(), e.on("data", function(e) {
                        t.push({
                            data: e,
                            meta: {
                                percent: 0
                            }
                        });
                    }).on("error", function(e) {
                        t.isPaused ? this.generatedError = e : t.error(e);
                    }).on("end", function() {
                        t.isPaused ? t._upstreamEnded = !0 : t.end();
                    });
                }, s.prototype.pause = function() {
                    return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
                }, t.exports = s;
            },
            {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }
        ],
        13: [
            function(e, t, r) {
                "use strict";
                var i = e("readable-stream").Readable;
                function n(e, t, r) {
                    i.call(this, t), this._helper = e;
                    var n = this;
                    e.on("data", function(e, t) {
                        n.push(e) || n._helper.pause(), r && r(t);
                    }).on("error", function(e) {
                        n.emit("error", e);
                    }).on("end", function() {
                        n.push(null);
                    });
                }
                e("../utils").inherits(n, i), n.prototype._read = function() {
                    this._helper.resume();
                }, t.exports = n;
            },
            {
                "../utils": 32,
                "readable-stream": 16
            }
        ],
        14: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    isNode: "undefined" != typeof Buffer,
                    newBufferFrom: function(e, t) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
                        if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
                        return new Buffer(e, t);
                    },
                    allocBuffer: function(e) {
                        if (Buffer.alloc) return Buffer.alloc(e);
                        var t = new Buffer(e);
                        return t.fill(0), t;
                    },
                    isBuffer: function(e) {
                        return Buffer.isBuffer(e);
                    },
                    isStream: function(e) {
                        return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume;
                    }
                };
            },
            {}
        ],
        15: [
            function(e, t, r) {
                "use strict";
                function s(e, t, r) {
                    var n, i = u.getTypeOf(t), s = u.extend(r || {}, f);
                    s.date = s.date || new Date, null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = g(e)), s.createFolders && (n = _(e)) && b.call(this, n, !0);
                    var a = "string" === i && !1 === s.binary && !1 === s.base64;
                    r && void 0 !== r.binary || (s.binary = !a), (t instanceof c && 0 === t.uncompressedSize || s.dir || !t || 0 === t.length) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
                    var o = null;
                    o = t instanceof c || t instanceof l ? t : p.isNode && p.isStream(t) ? new m(e, t) : u.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
                    var h = new d(e, o, s);
                    this.files[e] = h;
                }
                var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e) {
                    "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                    var t = e.lastIndexOf("/");
                    return 0 < t ? e.substring(0, t) : "";
                }, g = function(e) {
                    return "/" !== e.slice(-1) && (e += "/"), e;
                }, b = function(e, t) {
                    return t = void 0 !== t ? t : f.createFolders, e = g(e), this.files[e] || s.call(this, e, null, {
                        dir: !0,
                        createFolders: t
                    }), this.files[e];
                };
                function h(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e);
                }
                var n = {
                    load: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    forEach: function(e) {
                        var t, r, n;
                        for(t in this.files)n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n);
                    },
                    filter: function(r) {
                        var n = [];
                        return this.forEach(function(e, t) {
                            r(e, t) && n.push(t);
                        }), n;
                    },
                    file: function(e, t, r) {
                        if (1 !== arguments.length) return e = this.root + e, s.call(this, e, t, r), this;
                        if (h(e)) {
                            var n = e;
                            return this.filter(function(e, t) {
                                return !t.dir && n.test(e);
                            });
                        }
                        var i = this.files[this.root + e];
                        return i && !i.dir ? i : null;
                    },
                    folder: function(r) {
                        if (!r) return this;
                        if (h(r)) return this.filter(function(e, t) {
                            return t.dir && r.test(e);
                        });
                        var e = this.root + r, t = b.call(this, e), n = this.clone();
                        return n.root = t.name, n;
                    },
                    remove: function(r) {
                        r = this.root + r;
                        var e = this.files[r];
                        if (e || ("/" !== r.slice(-1) && (r += "/"), e = this.files[r]), e && !e.dir) delete this.files[r];
                        else for(var t = this.filter(function(e, t) {
                            return t.name.slice(0, r.length) === r;
                        }), n = 0; n < t.length; n++)delete this.files[t[n].name];
                        return this;
                    },
                    generate: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    generateInternalStream: function(e) {
                        var t, r = {};
                        try {
                            if ((r = u.extend(e || {}, {
                                streamFiles: !1,
                                compression: "STORE",
                                compressionOptions: null,
                                type: "",
                                platform: "DOS",
                                comment: null,
                                mimeType: "application/zip",
                                encodeFileName: i.utf8encode
                            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
                            u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
                            var n = r.comment || this.comment || "";
                            t = o.generateWorker(this, r, n);
                        } catch (e) {
                            (t = new l("error")).error(e);
                        }
                        return new a(t, r.type || "string", r.mimeType);
                    },
                    generateAsync: function(e, t) {
                        return this.generateInternalStream(e).accumulate(t);
                    },
                    generateNodeStream: function(e, t) {
                        return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
                    }
                };
                t.exports = n;
            },
            {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }
        ],
        16: [
            function(e, t, r) {
                "use strict";
                t.exports = e("stream");
            },
            {
                stream: void 0
            }
        ],
        17: [
            function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                    n.call(this, e);
                    for(var t = 0; t < this.data.length; t++)e[t] = 255 & e[t];
                }
                e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                    return this.data[this.zero + e];
                }, i.prototype.lastIndexOfSignature = function(e) {
                    for(var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s)if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i) return s - this.zero;
                    return -1;
                }, i.prototype.readAndCheckSignature = function(e) {
                    var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.readData(4);
                    return t === s[0] && r === s[1] && n === s[2] && i === s[3];
                }, i.prototype.readData = function(e) {
                    if (this.checkOffset(e), 0 === e) return [];
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        18: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils");
                function i(e) {
                    this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
                }
                i.prototype = {
                    checkOffset: function(e) {
                        this.checkIndex(this.index + e);
                    },
                    checkIndex: function(e) {
                        if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
                    },
                    setIndex: function(e) {
                        this.checkIndex(e), this.index = e;
                    },
                    skip: function(e) {
                        this.setIndex(this.index + e);
                    },
                    byteAt: function() {},
                    readInt: function(e) {
                        var t, r = 0;
                        for(this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)r = (r << 8) + this.byteAt(t);
                        return this.index += e, r;
                    },
                    readString: function(e) {
                        return n.transformTo("string", this.readData(e));
                    },
                    readData: function() {},
                    lastIndexOfSignature: function() {},
                    readAndCheckSignature: function() {},
                    readDate: function() {
                        var e = this.readInt(4);
                        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
                    }
                }, t.exports = i;
            },
            {
                "../utils": 32
            }
        ],
        19: [
            function(e, t, r) {
                "use strict";
                var n = e("./Uint8ArrayReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }
        ],
        20: [
            function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                    return this.data.charCodeAt(this.zero + e);
                }, i.prototype.lastIndexOfSignature = function(e) {
                    return this.data.lastIndexOf(e) - this.zero;
                }, i.prototype.readAndCheckSignature = function(e) {
                    return e === this.readData(4);
                }, i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        21: [
            function(e, t, r) {
                "use strict";
                var n = e("./ArrayReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                    if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
                    var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./ArrayReader": 17
            }
        ],
        22: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
                t.exports = function(e) {
                    var t = n.getTypeOf(e);
                    return n.checkSupport(t), "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new h(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e);
                };
            },
            {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }
        ],
        23: [
            function(e, t, r) {
                "use strict";
                r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
            },
            {}
        ],
        24: [
            function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"), i = e("../utils");
                function s(e) {
                    n.call(this, "ConvertWorker to " + e), this.destType = e;
                }
                i.inherits(s, n), s.prototype.processChunk = function(e) {
                    this.push({
                        data: i.transformTo(this.destType, e.data),
                        meta: e.meta
                    });
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        25: [
            function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"), i = e("../crc32");
                function s() {
                    n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                }
                e("../utils").inherits(s, n), s.prototype.processChunk = function(e) {
                    this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
                }, t.exports = s;
            },
            {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        26: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("./GenericWorker");
                function s(e) {
                    i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
                }
                n.inherits(s, i), s.prototype.processChunk = function(e) {
                    if (e) {
                        var t = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = t + e.data.length;
                    }
                    i.prototype.processChunk.call(this, e);
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        27: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("./GenericWorker");
                function s(e) {
                    i.call(this, "DataWorker");
                    var t = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
                        t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = n.getTypeOf(e), t.isPaused || t._tickAndRepeat();
                    }, function(e) {
                        t.error(e);
                    });
                }
                n.inherits(s, i), s.prototype.cleanUp = function() {
                    i.prototype.cleanUp.call(this), this.data = null;
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
                }, s.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
                }, s.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var e = null, t = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch(this.type){
                        case "string":
                            e = this.data.substring(this.index, t);
                            break;
                        case "uint8array":
                            e = this.data.subarray(this.index, t);
                            break;
                        case "array":
                        case "nodebuffer":
                            e = this.data.slice(this.index, t);
                    }
                    return this.index = t, this.push({
                        data: e,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    });
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        28: [
            function(e, t, r) {
                "use strict";
                function n(e) {
                    this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null;
                }
                n.prototype = {
                    push: function(e) {
                        this.emit("data", e);
                    },
                    end: function() {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0;
                        } catch (e) {
                            this.emit("error", e);
                        }
                        return !0;
                    },
                    error: function(e) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
                    },
                    on: function(e, t) {
                        return this._listeners[e].push(t), this;
                    },
                    cleanUp: function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
                    },
                    emit: function(e, t) {
                        if (this._listeners[e]) for(var r = 0; r < this._listeners[e].length; r++)this._listeners[e][r].call(this, t);
                    },
                    pipe: function(e) {
                        return e.registerPrevious(this);
                    },
                    registerPrevious: function(e) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
                        var t = this;
                        return e.on("data", function(e) {
                            t.processChunk(e);
                        }), e.on("end", function() {
                            t.end();
                        }), e.on("error", function(e) {
                            t.error(e);
                        }), this;
                    },
                    pause: function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
                    },
                    resume: function() {
                        if (!this.isPaused || this.isFinished) return !1;
                        var e = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
                    },
                    flush: function() {},
                    processChunk: function(e) {
                        this.push(e);
                    },
                    withStreamInfo: function(e, t) {
                        return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
                    },
                    mergeStreamInfo: function() {
                        for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
                    },
                    lock: function() {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock();
                    },
                    toString: function() {
                        var e = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + e : e;
                    }
                }, t.exports = n;
            },
            {}
        ],
        29: [
            function(e, t, r) {
                "use strict";
                var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
                if (n.nodestream) try {
                    o = e("../nodejs/NodejsStreamOutputAdapter");
                } catch (e) {}
                function l(e, o) {
                    return new a.Promise(function(t, r) {
                        var n = [], i = e._internalType, s = e._outputType, a = e._mimeType;
                        e.on("data", function(e, t) {
                            n.push(e), o && o(t);
                        }).on("error", function(e) {
                            n = [], r(e);
                        }).on("end", function() {
                            try {
                                var e = function(e, t, r) {
                                    switch(e){
                                        case "blob":
                                            return h.newBlob(h.transformTo("arraybuffer", t), r);
                                        case "base64":
                                            return u.encode(t);
                                        default:
                                            return h.transformTo(e, t);
                                    }
                                }(s, function(e, t) {
                                    var r, n = 0, i = null, s = 0;
                                    for(r = 0; r < t.length; r++)s += t[r].length;
                                    switch(e){
                                        case "string":
                                            return t.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], t);
                                        case "uint8array":
                                            for(i = new Uint8Array(s), r = 0; r < t.length; r++)i.set(t[r], n), n += t[r].length;
                                            return i;
                                        case "nodebuffer":
                                            return Buffer.concat(t);
                                        default:
                                            throw new Error("concat : unsupported type '" + e + "'");
                                    }
                                }(i, n), a);
                                t(e);
                            } catch (e) {
                                r(e);
                            }
                            n = [];
                        }).resume();
                    });
                }
                function f(e, t, r) {
                    var n = t;
                    switch(t){
                        case "blob":
                        case "arraybuffer":
                            n = "uint8array";
                            break;
                        case "base64":
                            n = "string";
                    }
                    try {
                        this._internalType = n, this._outputType = t, this._mimeType = r, h.checkSupport(n), this._worker = e.pipe(new i(n)), e.lock();
                    } catch (e) {
                        this._worker = new s("error"), this._worker.error(e);
                    }
                }
                f.prototype = {
                    accumulate: function(e) {
                        return l(this, e);
                    },
                    on: function(e, t) {
                        var r = this;
                        return "data" === e ? this._worker.on(e, function(e) {
                            t.call(r, e.data, e.meta);
                        }) : this._worker.on(e, function() {
                            h.delay(t, arguments, r);
                        }), this;
                    },
                    resume: function() {
                        return h.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function() {
                        return this._worker.pause(), this;
                    },
                    toNodejsStream: function(e) {
                        if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
                        return new o(this, {
                            objectMode: "nodebuffer" !== this._outputType
                        }, e);
                    }
                }, t.exports = f;
            },
            {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }
        ],
        30: [
            function(e, t, r) {
                "use strict";
                if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;
                else {
                    var n = new ArrayBuffer(0);
                    try {
                        r.blob = 0 === new Blob([
                            n
                        ], {
                            type: "application/zip"
                        }).size;
                    } catch (e) {
                        try {
                            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
                        } catch (e) {
                            r.blob = !1;
                        }
                    }
                }
                try {
                    r.nodestream = !!e("readable-stream").Readable;
                } catch (e) {
                    r.nodestream = !1;
                }
            },
            {
                "readable-stream": 16
            }
        ],
        31: [
            function(e, t, s) {
                "use strict";
                for(var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++)u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
                u[254] = u[254] = 1;
                function a() {
                    n.call(this, "utf-8 decode"), this.leftOver = null;
                }
                function l() {
                    n.call(this, "utf-8 encode");
                }
                s.utf8encode = function(e) {
                    return h.nodebuffer ? r.newBufferFrom(e, "utf-8") : function(e) {
                        var t, r, n, i, s, a = e.length, o = 0;
                        for(i = 0; i < a; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                        for(t = h.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0; s < o; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                        return t;
                    }(e);
                }, s.utf8decode = function(e) {
                    return h.nodebuffer ? o.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
                        var t, r, n, i, s = e.length, a = new Array(2 * s);
                        for(t = r = 0; t < s;)if ((n = e[t++]) < 128) a[r++] = n;
                        else if (4 < (i = u[n])) a[r++] = 65533, t += i - 1;
                        else {
                            for(n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;)n = n << 6 | 63 & e[t++], i--;
                            1 < i ? a[r++] = 65533 : n < 65536 ? a[r++] = n : (n -= 65536, a[r++] = 55296 | n >> 10 & 1023, a[r++] = 56320 | 1023 & n);
                        }
                        return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
                    }(e = o.transformTo(h.uint8array ? "uint8array" : "array", e));
                }, o.inherits(a, n), a.prototype.processChunk = function(e) {
                    var t = o.transformTo(h.uint8array ? "uint8array" : "array", e.data);
                    if (this.leftOver && this.leftOver.length) {
                        if (h.uint8array) {
                            var r = t;
                            (t = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), t.set(r, this.leftOver.length);
                        } else t = this.leftOver.concat(t);
                        this.leftOver = null;
                    }
                    var n = function(e, t) {
                        var r;
                        for((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);)r--;
                        return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
                    }(t), i = t;
                    n !== t.length && (h.uint8array ? (i = t.subarray(0, n), this.leftOver = t.subarray(n, t.length)) : (i = t.slice(0, n), this.leftOver = t.slice(n, t.length))), this.push({
                        data: s.utf8decode(i),
                        meta: e.meta
                    });
                }, a.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: s.utf8decode(this.leftOver),
                        meta: {}
                    }), this.leftOver = null);
                }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e) {
                    this.push({
                        data: s.utf8encode(e.data),
                        meta: e.meta
                    });
                }, s.Utf8EncodeWorker = l;
            },
            {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }
        ],
        32: [
            function(e, t, a) {
                "use strict";
                var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
                function n(e) {
                    return e;
                }
                function l(e, t) {
                    for(var r = 0; r < e.length; ++r)t[r] = 255 & e.charCodeAt(r);
                    return t;
                }
                e("setimmediate"), a.newBlob = function(t, r) {
                    a.checkSupport("blob");
                    try {
                        return new Blob([
                            t
                        ], {
                            type: r
                        });
                    } catch (e) {
                        try {
                            var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return n.append(t), n.getBlob(r);
                        } catch (e) {
                            throw new Error("Bug : can't construct the Blob.");
                        }
                    }
                };
                var i = {
                    stringifyByChunk: function(e, t, r) {
                        var n = [], i = 0, s = e.length;
                        if (s <= r) return String.fromCharCode.apply(null, e);
                        for(; i < s;)"array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))), i += r;
                        return n.join("");
                    },
                    stringifyByChar: function(e) {
                        for(var t = "", r = 0; r < e.length; r++)t += String.fromCharCode(e[r]);
                        return t;
                    },
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
                            } catch (e) {
                                return !1;
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
                            } catch (e) {
                                return !1;
                            }
                        }()
                    }
                };
                function s(e) {
                    var t = 65536, r = a.getTypeOf(e), n = !0;
                    if ("uint8array" === r ? n = i.applyCanBeUsed.uint8array : "nodebuffer" === r && (n = i.applyCanBeUsed.nodebuffer), n) for(; 1 < t;)try {
                        return i.stringifyByChunk(e, r, t);
                    } catch (e) {
                        t = Math.floor(t / 2);
                    }
                    return i.stringifyByChar(e);
                }
                function f(e, t) {
                    for(var r = 0; r < e.length; r++)t[r] = e[r];
                    return t;
                }
                a.applyFromCharCode = s;
                var c = {};
                c.string = {
                    string: n,
                    array: function(e) {
                        return l(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return c.string.uint8array(e).buffer;
                    },
                    uint8array: function(e) {
                        return l(e, new Uint8Array(e.length));
                    },
                    nodebuffer: function(e) {
                        return l(e, r.allocBuffer(e.length));
                    }
                }, c.array = {
                    string: s,
                    array: n,
                    arraybuffer: function(e) {
                        return new Uint8Array(e).buffer;
                    },
                    uint8array: function(e) {
                        return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                        return r.newBufferFrom(e);
                    }
                }, c.arraybuffer = {
                    string: function(e) {
                        return s(new Uint8Array(e));
                    },
                    array: function(e) {
                        return f(new Uint8Array(e), new Array(e.byteLength));
                    },
                    arraybuffer: n,
                    uint8array: function(e) {
                        return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                        return r.newBufferFrom(new Uint8Array(e));
                    }
                }, c.uint8array = {
                    string: s,
                    array: function(e) {
                        return f(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return e.buffer;
                    },
                    uint8array: n,
                    nodebuffer: function(e) {
                        return r.newBufferFrom(e);
                    }
                }, c.nodebuffer = {
                    string: s,
                    array: function(e) {
                        return f(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return c.nodebuffer.uint8array(e).buffer;
                    },
                    uint8array: function(e) {
                        return f(e, new Uint8Array(e.length));
                    },
                    nodebuffer: n
                }, a.transformTo = function(e, t) {
                    if (t = t || "", !e) return t;
                    a.checkSupport(e);
                    var r = a.getTypeOf(t);
                    return c[r][e](t);
                }, a.resolve = function(e) {
                    for(var t = e.split("/"), r = [], n = 0; n < t.length; n++){
                        var i = t[n];
                        "." === i || "" === i && 0 !== n && n !== t.length - 1 || (".." === i ? r.pop() : r.push(i));
                    }
                    return r.join("/");
                }, a.getTypeOf = function(e) {
                    return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : o.nodebuffer && r.isBuffer(e) ? "nodebuffer" : o.uint8array && e instanceof Uint8Array ? "uint8array" : o.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
                }, a.checkSupport = function(e) {
                    if (!o[e.toLowerCase()]) throw new Error(e + " is not supported by this platform");
                }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e) {
                    var t, r, n = "";
                    for(r = 0; r < (e || "").length; r++)n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
                    return n;
                }, a.delay = function(e, t, r) {
                    setImmediate(function() {
                        e.apply(r || null, t || []);
                    });
                }, a.inherits = function(e, t) {
                    function r() {}
                    r.prototype = t.prototype, e.prototype = new r;
                }, a.extend = function() {
                    var e, t, r = {};
                    for(e = 0; e < arguments.length; e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
                    return r;
                }, a.prepareContent = function(r, e, n, i, s) {
                    return u.Promise.resolve(e).then(function(n) {
                        return o.blob && (n instanceof Blob || -1 !== [
                            "[object File]",
                            "[object Blob]"
                        ].indexOf(Object.prototype.toString.call(n))) && "undefined" != typeof FileReader ? new u.Promise(function(t, r) {
                            var e = new FileReader;
                            e.onload = function(e) {
                                t(e.target.result);
                            }, e.onerror = function(e) {
                                r(e.target.error);
                            }, e.readAsArrayBuffer(n);
                        }) : n;
                    }).then(function(e) {
                        var t = a.getTypeOf(e);
                        return t ? ("arraybuffer" === t ? e = a.transformTo("uint8array", e) : "string" === t && (s ? e = h.decode(e) : n && !0 !== i && (e = function(e) {
                            return l(e, o.uint8array ? new Uint8Array(e.length) : new Array(e.length));
                        }(e))), e) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                    });
                };
            },
            {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                setimmediate: 54
            }
        ],
        33: [
            function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
                function h(e) {
                    this.files = [], this.loadOptions = e;
                }
                h.prototype = {
                    checkSignature: function(e) {
                        if (!this.reader.readAndCheckSignature(e)) {
                            this.reader.index -= 4;
                            var t = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
                        }
                    },
                    isSignature: function(e, t) {
                        var r = this.reader.index;
                        this.reader.setIndex(e);
                        var n = this.reader.readString(4) === t;
                        return this.reader.setIndex(r), n;
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var e = this.reader.readData(this.zipCommentLength), t = o.uint8array ? "uint8array" : "array", r = i.transformTo(t, e);
                        this.zipComment = this.loadOptions.decodeFileName(r);
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for(var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;)e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
                            id: e,
                            length: t,
                            value: r
                        };
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
                    },
                    readLocalFiles: function() {
                        var e, t;
                        for(e = 0; e < this.files.length; e++)t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
                    },
                    readCentralDir: function() {
                        var e;
                        for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e = new a({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
                        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                    },
                    readEndOfCentral: function() {
                        var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                        if (e < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
                        this.reader.setIndex(e);
                        var t = e;
                        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                        }
                        var r = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
                        var n = t - r;
                        if (0 < n) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
                        else if (n < 0) throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
                    },
                    prepareReader: function(e) {
                        this.reader = n(e);
                    },
                    load: function(e) {
                        this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                    }
                }, t.exports = h;
            },
            {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utils": 32,
                "./zipEntry": 34
            }
        ],
        34: [
            function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
                function l(e, t) {
                    this.options = e, this.loadOptions = t;
                }
                l.prototype = {
                    isEncrypted: function() {
                        return 1 == (1 & this.bitFlag);
                    },
                    useUTF8: function() {
                        return 2048 == (2048 & this.bitFlag);
                    },
                    readLocalPart: function(e) {
                        var t, r;
                        if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if (null === (t = function(e) {
                            for(var t in h)if (Object.prototype.hasOwnProperty.call(h, t) && h[t].magic === e) return h[t];
                            return null;
                        }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
                        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
                    },
                    readCentralPart: function(e) {
                        this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
                        var t = e.readInt(2);
                        if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
                    },
                    processAttributes: function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var e = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function() {
                        if (this.extraFields[1]) {
                            var e = n(this.extraFields[1].value);
                            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
                        }
                    },
                    readExtraFields: function(e) {
                        var t, r, n, i = e.index + this.extraFieldsLength;
                        for(this.extraFields || (this.extraFields = {}); e.index + 4 < i;)t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
                            id: t,
                            length: r,
                            value: n
                        };
                        e.setIndex(i);
                    },
                    handleUTF8: function() {
                        var e = u.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
                        else {
                            var t = this.findExtraFieldUnicodePath();
                            if (null !== t) this.fileNameStr = t;
                            else {
                                var r = s.transformTo(e, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(r);
                            }
                            var n = this.findExtraFieldUnicodeComment();
                            if (null !== n) this.fileCommentStr = n;
                            else {
                                var i = s.transformTo(e, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(i);
                            }
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var e = this.extraFields[28789];
                        if (e) {
                            var t = n(e.value);
                            return 1 !== t.readInt(1) ? null : a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
                        }
                        return null;
                    },
                    findExtraFieldUnicodeComment: function() {
                        var e = this.extraFields[25461];
                        if (e) {
                            var t = n(e.value);
                            return 1 !== t.readInt(1) ? null : a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
                        }
                        return null;
                    }
                }, t.exports = l;
            },
            {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }
        ],
        35: [
            function(e, t, r) {
                "use strict";
                function n(e, t, r) {
                    this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
                        compression: r.compression,
                        compressionOptions: r.compressionOptions
                    };
                }
                var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
                n.prototype = {
                    internalStream: function(e) {
                        var t = null, r = "string";
                        try {
                            if (!e) throw new Error("No output type specified.");
                            var n = "string" === (r = e.toLowerCase()) || "text" === r;
                            "binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
                            var i = !this._dataBinary;
                            i && !n && (t = t.pipe(new a.Utf8EncodeWorker)), !i && n && (t = t.pipe(new a.Utf8DecodeWorker));
                        } catch (e) {
                            (t = new h("error")).error(e);
                        }
                        return new s(t, r, "");
                    },
                    async: function(e, t) {
                        return this.internalStream(e).accumulate(t);
                    },
                    nodeStream: function(e, t) {
                        return this.internalStream(e || "nodebuffer").toNodejsStream(t);
                    },
                    _compressWorker: function(e, t) {
                        if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
                        var r = this._decompressWorker();
                        return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker)), o.createWorkerFrom(r, e, t);
                    },
                    _decompressWorker: function() {
                        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
                    }
                };
                for(var u = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer"
                ], l = function() {
                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                }, f = 0; f < u.length; f++)n.prototype[u[f]] = l;
                t.exports = n;
            },
            {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }
        ],
        36: [
            function(e, l, t) {
                (function(t) {
                    "use strict";
                    var r, n, e = t.MutationObserver || t.WebKitMutationObserver;
                    if (e) {
                        var i = 0, s = new e(u), a = t.document.createTextNode("");
                        s.observe(a, {
                            characterData: !0
                        }), r = function() {
                            a.data = i = ++i % 2;
                        };
                    } else if (t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                        var e = t.document.createElement("script");
                        e.onreadystatechange = function() {
                            u(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
                        }, t.document.documentElement.appendChild(e);
                    } : function() {
                        setTimeout(u, 0);
                    };
                    else {
                        var o = new t.MessageChannel;
                        o.port1.onmessage = u, r = function() {
                            o.port2.postMessage(0);
                        };
                    }
                    var h = [];
                    function u() {
                        var e, t;
                        n = !0;
                        for(var r = h.length; r;){
                            for(t = h, h = [], e = -1; ++e < r;)t[e]();
                            r = h.length;
                        }
                        n = !1;
                    }
                    l.exports = function(e) {
                        1 !== h.push(e) || n || r();
                    };
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ],
        37: [
            function(e, t, r) {
                "use strict";
                var i = e("immediate");
                function u() {}
                var l = {}, s = [
                    "REJECTED"
                ], a = [
                    "FULFILLED"
                ], n = [
                    "PENDING"
                ];
                function o(e) {
                    if ("function" != typeof e) throw new TypeError("resolver must be a function");
                    this.state = n, this.queue = [], this.outcome = void 0, e !== u && d(this, e);
                }
                function h(e, t, r) {
                    this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
                }
                function f(t, r, n) {
                    i(function() {
                        var e;
                        try {
                            e = r(n);
                        } catch (e) {
                            return l.reject(t, e);
                        }
                        e === t ? l.reject(t, new TypeError("Cannot resolve promise with itself")) : l.resolve(t, e);
                    });
                }
                function c(e) {
                    var t = e && e.then;
                    if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                        t.apply(e, arguments);
                    };
                }
                function d(t, e) {
                    var r = !1;
                    function n(e) {
                        r || (r = !0, l.reject(t, e));
                    }
                    function i(e) {
                        r || (r = !0, l.resolve(t, e));
                    }
                    var s = p(function() {
                        e(i, n);
                    });
                    "error" === s.status && n(s.value);
                }
                function p(e, t) {
                    var r = {};
                    try {
                        r.value = e(t), r.status = "success";
                    } catch (e) {
                        r.status = "error", r.value = e;
                    }
                    return r;
                }
                (t.exports = o).prototype.finally = function(t) {
                    if ("function" != typeof t) return this;
                    var r = this.constructor;
                    return this.then(function(e) {
                        return r.resolve(t()).then(function() {
                            return e;
                        });
                    }, function(e) {
                        return r.resolve(t()).then(function() {
                            throw e;
                        });
                    });
                }, o.prototype.catch = function(e) {
                    return this.then(null, e);
                }, o.prototype.then = function(e, t) {
                    if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
                    var r = new this.constructor(u);
                    this.state !== n ? f(r, this.state === a ? e : t, this.outcome) : this.queue.push(new h(r, e, t));
                    return r;
                }, h.prototype.callFulfilled = function(e) {
                    l.resolve(this.promise, e);
                }, h.prototype.otherCallFulfilled = function(e) {
                    f(this.promise, this.onFulfilled, e);
                }, h.prototype.callRejected = function(e) {
                    l.reject(this.promise, e);
                }, h.prototype.otherCallRejected = function(e) {
                    f(this.promise, this.onRejected, e);
                }, l.resolve = function(e, t) {
                    var r = p(c, t);
                    if ("error" === r.status) return l.reject(e, r.value);
                    var n = r.value;
                    if (n) d(e, n);
                    else {
                        e.state = a, e.outcome = t;
                        for(var i = -1, s = e.queue.length; ++i < s;)e.queue[i].callFulfilled(t);
                    }
                    return e;
                }, l.reject = function(e, t) {
                    e.state = s, e.outcome = t;
                    for(var r = -1, n = e.queue.length; ++r < n;)e.queue[r].callRejected(t);
                    return e;
                }, o.resolve = function(e) {
                    if (e instanceof this) return e;
                    return l.resolve(new this(u), e);
                }, o.reject = function(e) {
                    var t = new this(u);
                    return l.reject(t, e);
                }, o.all = function(e) {
                    var r = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var n = e.length, i = !1;
                    if (!n) return this.resolve([]);
                    var s = new Array(n), a = 0, t = -1, o = new this(u);
                    for(; ++t < n;)h(e[t], t);
                    return o;
                    function h(e, t) {
                        r.resolve(e).then(function(e) {
                            s[t] = e, ++a !== n || i || (i = !0, l.resolve(o, s));
                        }, function(e) {
                            i || (i = !0, l.reject(o, e));
                        });
                    }
                }, o.race = function(e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var r = e.length, n = !1;
                    if (!r) return this.resolve([]);
                    var i = -1, s = new this(u);
                    for(; ++i < r;)a = e[i], t.resolve(a).then(function(e) {
                        n || (n = !0, l.resolve(s, e));
                    }, function(e) {
                        n || (n = !0, l.reject(s, e));
                    });
                    var a;
                    return s;
                };
            },
            {
                immediate: 36
            }
        ],
        38: [
            function(e, t, r) {
                "use strict";
                var n = {};
                (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
            },
            {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }
        ],
        39: [
            function(e, t, r) {
                "use strict";
                var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
                function p(e) {
                    if (!(this instanceof p)) return new p(e);
                    this.options = o.assign({
                        level: f,
                        method: d,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: c,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
                    var r = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                    if (r !== l) throw new Error(i[r]);
                    if (t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary) {
                        var n;
                        if (n = "string" == typeof t.dictionary ? h.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = a.deflateSetDictionary(this.strm, n)) !== l) throw new Error(i[r]);
                        this._dict_set = !0;
                    }
                }
                function n(e, t) {
                    var r = new p(t);
                    if (r.push(e, !0), r.err) throw r.msg || i[r.err];
                    return r.result;
                }
                p.prototype.push = function(e, t) {
                    var r, n, i = this.strm, s = this.options.chunkSize;
                    if (this.ended) return !1;
                    n = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = h.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;
                    do {
                        if (0 === i.avail_out && (i.output = new o.Buf8(s), i.next_out = 0, i.avail_out = s), 1 !== (r = a.deflate(i, n)) && r !== l) return this.onEnd(r), this.ended = !0, false;
                        0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)));
                    }while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
                    return 4 === n ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== n || (this.onEnd(l), i.avail_out = 0, true);
                }, p.prototype.onData = function(e) {
                    this.chunks.push(e);
                }, p.prototype.onEnd = function(e) {
                    e === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
                }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0, n(e, t);
                }, r.gzip = function(e, t) {
                    return (t = t || {}).gzip = !0, n(e, t);
                };
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        40: [
            function(e, t, r) {
                "use strict";
                var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
                function a(e) {
                    if (!(this instanceof a)) return new a(e);
                    this.options = d.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i, this.strm.avail_out = 0;
                    var r = c.inflateInit2(this.strm, t.windowBits);
                    if (r !== m.Z_OK) throw new Error(n[r]);
                    this.header = new s, c.inflateGetHeader(this.strm, this.header);
                }
                function o(e, t) {
                    var r = new a(t);
                    if (r.push(e, !0), r.err) throw r.msg || n[r.err];
                    return r.result;
                }
                a.prototype.push = function(e, t) {
                    var r, n, i, s, a, o, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = !1;
                    if (this.ended) return !1;
                    n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e ? h.input = p.binstring2buf(e) : "[object ArrayBuffer]" === _.call(e) ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
                    do {
                        if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = c.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), this.ended = !0, false;
                        h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = p.utf8border(h.output, h.next_out), s = h.next_out - i, a = p.buf2string(h.output, i), h.next_out = s, h.avail_out = u - s, s && d.arraySet(h.output, h.output, i, s, 0), this.onData(a)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
                    }while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
                    return r === m.Z_STREAM_END && (n = m.Z_FINISH), n === m.Z_FINISH ? (r = c.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), h.avail_out = 0, true);
                }, a.prototype.onData = function(e) {
                    this.chunks.push(e);
                }, a.prototype.onEnd = function(e) {
                    e === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
                }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0, o(e, t);
                }, r.ungzip = o;
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        41: [
            function(e, t, r) {
                "use strict";
                var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                r.assign = function(e) {
                    for(var t = Array.prototype.slice.call(arguments, 1); t.length;){
                        var r = t.shift();
                        if (r) {
                            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
                            for(var n in r)r.hasOwnProperty(n) && (e[n] = r[n]);
                        }
                    }
                    return e;
                }, r.shrinkBuf = function(e, t) {
                    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
                };
                var i = {
                    arraySet: function(e, t, r, n, i) {
                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                        else for(var s = 0; s < n; s++)e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                        var t, r, n, i, s, a;
                        for(t = n = 0, r = e.length; t < r; t++)n += e[t].length;
                        for(a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++)s = e[t], a.set(s, i), i += s.length;
                        return a;
                    }
                }, s = {
                    arraySet: function(e, t, r, n, i) {
                        for(var s = 0; s < n; s++)e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e);
                    }
                };
                r.setTyped = function(e) {
                    e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
                }, r.setTyped(n);
            },
            {}
        ],
        42: [
            function(e, t, r) {
                "use strict";
                var h = e("./common"), i = !0, s = !0;
                try {
                    String.fromCharCode.apply(null, [
                        0
                    ]);
                } catch (e) {
                    i = !1;
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (e) {
                    s = !1;
                }
                for(var u = new h.Buf8(256), n = 0; n < 256; n++)u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
                function l(e, t) {
                    if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e, t));
                    for(var r = "", n = 0; n < t; n++)r += String.fromCharCode(e[n]);
                    return r;
                }
                u[254] = u[254] = 1, r.string2buf = function(e) {
                    var t, r, n, i, s, a = e.length, o = 0;
                    for(i = 0; i < a; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                    for(t = new h.Buf8(o), i = s = 0; s < o; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                    return t;
                }, r.buf2binstring = function(e) {
                    return l(e, e.length);
                }, r.binstring2buf = function(e) {
                    for(var t = new h.Buf8(e.length), r = 0, n = t.length; r < n; r++)t[r] = e.charCodeAt(r);
                    return t;
                }, r.buf2string = function(e, t) {
                    var r, n, i, s, a = t || e.length, o = new Array(2 * a);
                    for(r = n = 0; r < a;)if ((i = e[r++]) < 128) o[n++] = i;
                    else if (4 < (s = u[i])) o[n++] = 65533, r += s - 1;
                    else {
                        for(i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;)i = i << 6 | 63 & e[r++], s--;
                        1 < s ? o[n++] = 65533 : i < 65536 ? o[n++] = i : (i -= 65536, o[n++] = 55296 | i >> 10 & 1023, o[n++] = 56320 | 1023 & i);
                    }
                    return l(o, n);
                }, r.utf8border = function(e, t) {
                    var r;
                    for((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);)r--;
                    return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
                };
            },
            {
                "./common": 41
            }
        ],
        43: [
            function(e, t, r) {
                "use strict";
                t.exports = function(e, t, r, n) {
                    for(var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r;){
                        for(r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0, --a;);
                        i %= 65521, s %= 65521;
                    }
                    return i | s << 16 | 0;
                };
            },
            {}
        ],
        44: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                };
            },
            {}
        ],
        45: [
            function(e, t, r) {
                "use strict";
                var o = function() {
                    for(var e, t = [], r = 0; r < 256; r++){
                        e = r;
                        for(var n = 0; n < 8; n++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        t[r] = e;
                    }
                    return t;
                }();
                t.exports = function(e, t, r, n) {
                    var i = o, s = n + r;
                    e ^= -1;
                    for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t[a])];
                    return -1 ^ e;
                };
            },
            {}
        ],
        46: [
            function(e, t, r) {
                "use strict";
                var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
                function R(e, t) {
                    return e.msg = n[t], t;
                }
                function T(e) {
                    return (e << 1) - (4 < e ? 9 : 0);
                }
                function D(e) {
                    for(var t = e.length; 0 <= --t;)e[t] = 0;
                }
                function F(e) {
                    var t = e.state, r = t.pending;
                    r > e.avail_out && (r = e.avail_out), 0 !== r && (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
                }
                function N(e, t) {
                    u._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
                }
                function U(e, t) {
                    e.pending_buf[e.pending++] = t;
                }
                function P(e, t) {
                    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
                }
                function L(e, t) {
                    var r, n, i = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match, h = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0, u = e.window, l = e.w_mask, f = e.prev, c = e.strstart + S, d = u[s + a - 1], p = u[s + a];
                    e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
                    do if (u[(r = t) + a] === p && u[r + a - 1] === d && u[r] === u[s] && u[++r] === u[s + 1]) {
                        s += 2, r++;
                        do ;
                        while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < c);
                        if (n = S - (c - s), s = c - S, a < n) {
                            if (e.match_start = t, o <= (a = n)) break;
                            d = u[s + a - 1], p = u[s + a];
                        }
                    }
                    while ((t = f[t & l]) > h && 0 != --i);
                    return a <= e.lookahead ? a : e.lookahead;
                }
                function j(e) {
                    var t, r, n, i, s, a, o, h, u, l, f = e.w_size;
                    do {
                        if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= f + (f - z)) {
                            for(c.arraySet(e.window, e.window, f, f, 0), e.match_start -= f, e.strstart -= f, e.block_start -= f, t = r = e.hash_size; n = e.head[--t], e.head[t] = f <= n ? n - f : 0, --r;);
                            for(t = r = f; n = e.prev[--t], e.prev[t] = f <= n ? n - f : 0, --r;);
                            i += f;
                        }
                        if (0 === e.strm.avail_in) break;
                        if (a = e.strm, o = e.window, h = e.strstart + e.lookahead, u = i, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, c.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = d(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), e.lookahead += r, e.lookahead + e.insert >= x) for(s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + x - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < x)););
                    }while (e.lookahead < z && 0 !== e.strm.avail_in);
                }
                function Z(e, t) {
                    for(var r, n;;){
                        if (e.lookahead < z) {
                            if (j(e), e.lookahead < z && t === l) return A;
                            if (0 === e.lookahead) break;
                        }
                        if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r)), e.match_length >= x) {
                            if (n = u._tr_tally(e, e.strstart - e.match_start, e.match_length - x), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= x) {
                                for(e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
                                e.strstart++;
                            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                        } else n = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                        if (n && (N(e, !1), 0 === e.strm.avail_out)) return A;
                    }
                    return e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                }
                function W(e, t) {
                    for(var r, n, i;;){
                        if (e.lookahead < z) {
                            if (j(e), e.lookahead < z && t === l) return A;
                            if (0 === e.lookahead) break;
                        }
                        if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = x - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === x && 4096 < e.strstart - e.match_start) && (e.match_length = x - 1)), e.prev_length >= x && e.match_length <= e.prev_length) {
                            for(i = e.strstart + e.lookahead - x, n = u._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
                            if (e.match_available = 0, e.match_length = x - 1, e.strstart++, n && (N(e, !1), 0 === e.strm.avail_out)) return A;
                        } else if (e.match_available) {
                            if ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return A;
                        } else e.match_available = 1, e.strstart++, e.lookahead--;
                    }
                    return e.match_available && (n = u._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                }
                function M(e, t, r, n, i) {
                    this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
                }
                function H() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                }
                function G(e) {
                    var t;
                    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = i, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? C : E, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = l, u._tr_init(t), m) : R(e, _);
                }
                function K(e) {
                    var t = G(e);
                    return t === m && function(e) {
                        e.window_size = 2 * e.w_size, D(e.head), e.max_lazy_match = h[e.level].max_lazy, e.good_match = h[e.level].good_length, e.nice_match = h[e.level].nice_length, e.max_chain_length = h[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = x - 1, e.match_available = 0, e.ins_h = 0;
                    }(e.state), t;
                }
                function Y(e, t, r, n, i, s) {
                    if (!e) return _;
                    var a = 1;
                    if (t === g && (t = 6), n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16), i < 1 || y < i || r !== v || n < 8 || 15 < n || t < 0 || 9 < t || s < 0 || b < s) return R(e, _);
                    8 === n && (n = 9);
                    var o = new H;
                    return (e.state = o).strm = e, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new c.Buf8(2 * o.w_size), o.head = new c.Buf16(o.hash_size), o.prev = new c.Buf16(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new c.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = s, o.method = r, K(e);
                }
                h = [
                    new M(0, 0, 0, 0, function(e, t) {
                        var r = 65535;
                        for(r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;){
                            if (e.lookahead <= 1) {
                                if (j(e), 0 === e.lookahead && t === l) return A;
                                if (0 === e.lookahead) break;
                            }
                            e.strstart += e.lookahead, e.lookahead = 0;
                            var n = e.block_start + r;
                            if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, N(e, !1), 0 === e.strm.avail_out)) return A;
                            if (e.strstart - e.block_start >= e.w_size - z && (N(e, !1), 0 === e.strm.avail_out)) return A;
                        }
                        return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), A);
                    }),
                    new M(4, 4, 8, 4, Z),
                    new M(4, 5, 16, 8, Z),
                    new M(4, 6, 32, 32, Z),
                    new M(4, 4, 16, 16, W),
                    new M(8, 16, 32, 32, W),
                    new M(8, 16, 128, 128, W),
                    new M(8, 32, 128, 256, W),
                    new M(32, 128, 258, 1024, W),
                    new M(32, 258, 258, 4096, W)
                ], r.deflateInit = function(e, t) {
                    return Y(e, t, v, 15, 8, 0);
                }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e, t) {
                    return e && e.state ? 2 !== e.state.wrap ? _ : (e.state.gzhead = t, m) : _;
                }, r.deflate = function(e, t) {
                    var r, n, i, s;
                    if (!e || !e.state || 5 < t || t < 0) return e ? R(e, _) : _;
                    if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== f) return R(e, 0 === e.avail_out ? -5 : _);
                    if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === C) {
                        if (2 === n.wrap) e.adler = 0, U(n, 31), U(n, 139), U(n, 8), n.gzhead ? (U(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), U(n, 255 & n.gzhead.time), U(n, n.gzhead.time >> 8 & 255), U(n, n.gzhead.time >> 16 & 255), U(n, n.gzhead.time >> 24 & 255), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (U(n, 255 & n.gzhead.extra.length), U(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 3), n.status = E);
                        else {
                            var a = v + (n.w_bits - 8 << 4) << 8;
                            a |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= 32), a += 31 - a % 31, n.status = E, P(n, a), 0 !== n.strstart && (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), e.adler = 1;
                        }
                    }
                    if (69 === n.status) {
                        if (n.gzhead.extra) {
                            for(i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending !== n.pending_buf_size));)U(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73);
                        } else n.status = 73;
                    }
                    if (73 === n.status) {
                        if (n.gzhead.name) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                    s = 1;
                                    break;
                                }
                                s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, U(n, s);
                            }while (0 !== s);
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.gzindex = 0, n.status = 91);
                        } else n.status = 91;
                    }
                    if (91 === n.status) {
                        if (n.gzhead.comment) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                    s = 1;
                                    break;
                                }
                                s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, U(n, s);
                            }while (0 !== s);
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.status = 103);
                        } else n.status = 103;
                    }
                    if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && F(e), n.pending + 2 <= n.pending_buf_size && (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), e.adler = 0, n.status = E)) : n.status = E), 0 !== n.pending) {
                        if (F(e), 0 === e.avail_out) return n.last_flush = -1, m;
                    } else if (0 === e.avail_in && T(t) <= T(r) && t !== f) return R(e, -5);
                    if (666 === n.status && 0 !== e.avail_in) return R(e, -5);
                    if (0 !== e.avail_in || 0 !== n.lookahead || t !== l && 666 !== n.status) {
                        var o = 2 === n.strategy ? function(e, t) {
                            for(var r;;){
                                if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
                                    if (t === l) return A;
                                    break;
                                }
                                if (e.match_length = 0, r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (N(e, !1), 0 === e.strm.avail_out)) return A;
                            }
                            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                        }(n, t) : 3 === n.strategy ? function(e, t) {
                            for(var r, n, i, s, a = e.window;;){
                                if (e.lookahead <= S) {
                                    if (j(e), e.lookahead <= S && t === l) return A;
                                    if (0 === e.lookahead) break;
                                }
                                if (e.match_length = 0, e.lookahead >= x && 0 < e.strstart && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                                    s = e.strstart + S;
                                    do ;
                                    while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                                    e.match_length = S - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                                }
                                if (e.match_length >= x ? (r = u._tr_tally(e, 1, e.match_length - x), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (N(e, !1), 0 === e.strm.avail_out)) return A;
                            }
                            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                        }(n, t) : h[n.level].func(n, t);
                        if (o !== O && o !== B || (n.status = 666), o === A || o === O) return 0 === e.avail_out && (n.last_flush = -1), m;
                        if (o === I && (1 === t ? u._tr_align(n) : 5 !== t && (u._tr_stored_block(n, 0, 0, !1), 3 === t && (D(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), F(e), 0 === e.avail_out)) return n.last_flush = -1, m;
                    }
                    return t !== f ? m : n.wrap <= 0 ? 1 : (2 === n.wrap ? (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), U(n, e.adler >> 16 & 255), U(n, e.adler >> 24 & 255), U(n, 255 & e.total_in), U(n, e.total_in >> 8 & 255), U(n, e.total_in >> 16 & 255), U(n, e.total_in >> 24 & 255)) : (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), F(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? m : 1);
                }, r.deflateEnd = function(e) {
                    var t;
                    return e && e.state ? (t = e.state.status) !== C && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== E && 666 !== t ? R(e, _) : (e.state = null, t === E ? R(e, -3) : m) : _;
                }, r.deflateSetDictionary = function(e, t) {
                    var r, n, i, s, a, o, h, u, l = t.length;
                    if (!e || !e.state) return _;
                    if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;
                    for(1 === s && (e.adler = d(e.adler, t, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new c.Buf8(r.w_size), c.arraySet(u, t, l - r.w_size, r.w_size, 0), t = u, l = r.w_size), a = e.avail_in, o = e.next_in, h = e.input, e.avail_in = l, e.next_in = 0, e.input = t, j(r); r.lookahead >= x;){
                        for(n = r.strstart, i = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + x - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --i;);
                        r.strstart = n, r.lookahead = x - 1, j(r);
                    }
                    return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, e.next_in = o, e.input = h, e.avail_in = a, r.wrap = s, m;
                }, r.deflateInfo = "pako deflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }
        ],
        47: [
            function(e, t, r) {
                "use strict";
                t.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
                };
            },
            {}
        ],
        48: [
            function(e, t, r) {
                "use strict";
                t.exports = function(e, t) {
                    var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
                    r = e.state, n = e.next_in, z = e.input, i = n + (e.avail_in - 5), s = e.next_out, C = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, c = r.window, d = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
                    e: do {
                        p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
                        t: for(;;){
                            if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
                            else {
                                if (!(16 & y)) {
                                    if (0 == (64 & y)) {
                                        v = m[(65535 & v) + (d & (1 << y) - 1)];
                                        continue t;
                                    }
                                    if (32 & y) {
                                        r.mode = 12;
                                        break e;
                                    }
                                    e.msg = "invalid literal/length code", r.mode = 30;
                                    break e;
                                }
                                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                                r: for(;;){
                                    if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                                        if (0 == (64 & y)) {
                                            v = _[(65535 & v) + (d & (1 << y) - 1)];
                                            continue r;
                                        }
                                        e.msg = "invalid distance code", r.mode = 30;
                                        break e;
                                    }
                                    if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                                        e.msg = "invalid distance too far back", r.mode = 30;
                                        break e;
                                    }
                                    if (d >>>= y, p -= y, (y = s - a) < k) {
                                        if (l < (y = k - y) && r.sane) {
                                            e.msg = "invalid distance too far back", r.mode = 30;
                                            break e;
                                        }
                                        if (S = c, (x = 0) === f) {
                                            if (x += u - y, y < w) {
                                                for(w -= y; C[s++] = c[x++], --y;);
                                                x = s - k, S = C;
                                            }
                                        } else if (f < y) {
                                            if (x += u + f - y, (y -= f) < w) {
                                                for(w -= y; C[s++] = c[x++], --y;);
                                                if (x = 0, f < w) {
                                                    for(w -= y = f; C[s++] = c[x++], --y;);
                                                    x = s - k, S = C;
                                                }
                                            }
                                        } else if (x += f - y, y < w) {
                                            for(w -= y; C[s++] = c[x++], --y;);
                                            x = s - k, S = C;
                                        }
                                        for(; 2 < w;)C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                                        w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                                    } else {
                                        for(x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););
                                        w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    }while (n < i && s < o);
                    n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = d, r.bits = p;
                };
            },
            {}
        ],
        49: [
            function(e, t, r) {
                "use strict";
                var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
                function L(e) {
                    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
                }
                function s() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                }
                function a(e) {
                    var t;
                    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = P, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new I.Buf32(n), t.distcode = t.distdyn = new I.Buf32(i), t.sane = 1, t.back = -1, N) : U;
                }
                function o(e) {
                    var t;
                    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, a(e)) : U;
                }
                function h(e, t) {
                    var r, n;
                    return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? U : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, o(e))) : U;
                }
                function u(e, t) {
                    var r, n;
                    return e ? (n = new s, (e.state = n).window = null, (r = h(e, t)) !== N && (e.state = null), r) : U;
                }
                var l, f, c = !0;
                function j(e) {
                    if (c) {
                        var t;
                        for(l = new I.Buf32(512), f = new I.Buf32(32), t = 0; t < 144;)e.lens[t++] = 8;
                        for(; t < 256;)e.lens[t++] = 9;
                        for(; t < 280;)e.lens[t++] = 7;
                        for(; t < 288;)e.lens[t++] = 8;
                        for(T(D, e.lens, 0, 288, l, 0, e.work, {
                            bits: 9
                        }), t = 0; t < 32;)e.lens[t++] = 5;
                        T(F, e.lens, 0, 32, f, 0, e.work, {
                            bits: 5
                        }), c = !1;
                    }
                    e.lencode = l, e.lenbits = 9, e.distcode = f, e.distbits = 5;
                }
                function Z(e, t, r, n) {
                    var i, s = e.state;
                    return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), n >= s.wsize ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (n < (i = s.wsize - s.wnext) && (i = n), I.arraySet(s.window, t, r - n, i, s.wnext), (n -= i) ? (I.arraySet(s.window, t, r - n, n, 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
                }
                r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e) {
                    return u(e, 15);
                }, r.inflateInit2 = u, r.inflate = function(e, t) {
                    var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [
                        16,
                        17,
                        18,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15
                    ];
                    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return U;
                    12 === (r = e.state).mode && (r.mode = 13), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, f = o, c = h, x = N;
                    e: for(;;)switch(r.mode){
                        case P:
                            if (0 === r.wrap) {
                                r.mode = 13;
                                break;
                            }
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (2 & r.wrap && 35615 === u) {
                                E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
                                break;
                            }
                            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                                e.msg = "incorrect header check", r.mode = 30;
                                break;
                            }
                            if (8 != (15 & u)) {
                                e.msg = "unknown compression method", r.mode = 30;
                                break;
                            }
                            if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;
                            else if (k > r.wbits) {
                                e.msg = "invalid window size", r.mode = 30;
                                break;
                            }
                            r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
                            break;
                        case 2:
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (r.flags = u, 8 != (255 & r.flags)) {
                                e.msg = "unknown compression method", r.mode = 30;
                                break;
                            }
                            if (57344 & r.flags) {
                                e.msg = "unknown header flags set", r.mode = 30;
                                break;
                            }
                            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;
                        case 3:
                            for(; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;
                        case 4:
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;
                        case 5:
                            if (1024 & r.flags) {
                                for(; l < 16;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
                            } else r.head && (r.head.extra = null);
                            r.mode = 6;
                        case 6:
                            if (1024 & r.flags && (o < (d = r.length) && (d = o), d && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, n, s, d, k)), 512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, r.length -= d), r.length)) break e;
                            r.length = 0, r.mode = 7;
                        case 7:
                            if (2048 & r.flags) {
                                if (0 === o) break e;
                                for(d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && d < o;);
                                if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
                            } else r.head && (r.head.name = null);
                            r.length = 0, r.mode = 8;
                        case 8:
                            if (4096 & r.flags) {
                                if (0 === o) break e;
                                for(d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && d < o;);
                                if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
                            } else r.head && (r.head.comment = null);
                            r.mode = 9;
                        case 9:
                            if (512 & r.flags) {
                                for(; l < 16;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (u !== (65535 & r.check)) {
                                    e.msg = "header crc mismatch", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
                            break;
                        case 10:
                            for(; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            e.adler = r.check = L(u), l = u = 0, r.mode = 11;
                        case 11:
                            if (0 === r.havedict) return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, 2;
                            e.adler = r.check = 1, r.mode = 12;
                        case 12:
                            if (5 === t || 6 === t) break e;
                        case 13:
                            if (r.last) {
                                u >>>= 7 & l, l -= 7 & l, r.mode = 27;
                                break;
                            }
                            for(; l < 3;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            switch(r.last = 1 & u, l -= 1, 3 & (u >>>= 1)){
                                case 0:
                                    r.mode = 14;
                                    break;
                                case 1:
                                    if (j(r), r.mode = 20, 6 !== t) break;
                                    u >>>= 2, l -= 2;
                                    break e;
                                case 2:
                                    r.mode = 17;
                                    break;
                                case 3:
                                    e.msg = "invalid block type", r.mode = 30;
                            }
                            u >>>= 2, l -= 2;
                            break;
                        case 14:
                            for(u >>>= 7 & l, l -= 7 & l; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if ((65535 & u) != (u >>> 16 ^ 65535)) {
                                e.msg = "invalid stored block lengths", r.mode = 30;
                                break;
                            }
                            if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === t) break e;
                        case 15:
                            r.mode = 16;
                        case 16:
                            if (d = r.length) {
                                if (o < d && (d = o), h < d && (d = h), 0 === d) break e;
                                I.arraySet(i, n, s, d, a), o -= d, s += d, h -= d, a += d, r.length -= d;
                                break;
                            }
                            r.mode = 12;
                            break;
                        case 17:
                            for(; l < 14;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
                                e.msg = "too many length or distance symbols", r.mode = 30;
                                break;
                            }
                            r.have = 0, r.mode = 18;
                        case 18:
                            for(; r.have < r.ncode;){
                                for(; l < 3;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
                            }
                            for(; r.have < 19;)r.lens[A[r.have++]] = 0;
                            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
                                bits: r.lenbits
                            }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                e.msg = "invalid code lengths set", r.mode = 30;
                                break;
                            }
                            r.have = 0, r.mode = 19;
                        case 19:
                            for(; r.have < r.nlen + r.ndist;){
                                for(; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;
                                else {
                                    if (16 === b) {
                                        for(z = _ + 2; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        if (u >>>= _, l -= _, 0 === r.have) {
                                            e.msg = "invalid bit length repeat", r.mode = 30;
                                            break;
                                        }
                                        k = r.lens[r.have - 1], d = 3 + (3 & u), u >>>= 2, l -= 2;
                                    } else if (17 === b) {
                                        for(z = _ + 3; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        l -= _, k = 0, d = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                                    } else {
                                        for(z = _ + 7; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        l -= _, k = 0, d = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                                    }
                                    if (r.have + d > r.nlen + r.ndist) {
                                        e.msg = "invalid bit length repeat", r.mode = 30;
                                        break;
                                    }
                                    for(; d--;)r.lens[r.have++] = k;
                                }
                            }
                            if (30 === r.mode) break;
                            if (0 === r.lens[256]) {
                                e.msg = "invalid code -- missing end-of-block", r.mode = 30;
                                break;
                            }
                            if (r.lenbits = 9, S = {
                                bits: r.lenbits
                            }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                e.msg = "invalid literal/lengths set", r.mode = 30;
                                break;
                            }
                            if (r.distbits = 6, r.distcode = r.distdyn, S = {
                                bits: r.distbits
                            }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
                                e.msg = "invalid distances set", r.mode = 30;
                                break;
                            }
                            if (r.mode = 20, 6 === t) break e;
                        case 20:
                            r.mode = 21;
                        case 21:
                            if (6 <= o && 258 <= h) {
                                e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, R(e, c), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
                                break;
                            }
                            for(r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (g && 0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                u >>>= v, l -= v, r.back += v;
                            }
                            if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
                                r.mode = 26;
                                break;
                            }
                            if (32 & g) {
                                r.back = -1, r.mode = 12;
                                break;
                            }
                            if (64 & g) {
                                e.msg = "invalid literal/length code", r.mode = 30;
                                break;
                            }
                            r.extra = 15 & g, r.mode = 22;
                        case 22:
                            if (r.extra) {
                                for(z = r.extra; l < z;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                            }
                            r.was = r.length, r.mode = 23;
                        case 23:
                            for(; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                u >>>= v, l -= v, r.back += v;
                            }
                            if (u >>>= _, l -= _, r.back += _, 64 & g) {
                                e.msg = "invalid distance code", r.mode = 30;
                                break;
                            }
                            r.offset = b, r.extra = 15 & g, r.mode = 24;
                        case 24:
                            if (r.extra) {
                                for(z = r.extra; l < z;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                            }
                            if (r.offset > r.dmax) {
                                e.msg = "invalid distance too far back", r.mode = 30;
                                break;
                            }
                            r.mode = 25;
                        case 25:
                            if (0 === h) break e;
                            if (d = c - h, r.offset > d) {
                                if ((d = r.offset - d) > r.whave && r.sane) {
                                    e.msg = "invalid distance too far back", r.mode = 30;
                                    break;
                                }
                                p = d > r.wnext ? (d -= r.wnext, r.wsize - d) : r.wnext - d, d > r.length && (d = r.length), m = r.window;
                            } else m = i, p = a - r.offset, d = r.length;
                            for(h < d && (d = h), h -= d, r.length -= d; i[a++] = m[p++], --d;);
                            0 === r.length && (r.mode = 21);
                            break;
                        case 26:
                            if (0 === h) break e;
                            i[a++] = r.length, h--, r.mode = 21;
                            break;
                        case 27:
                            if (r.wrap) {
                                for(; l < 32;){
                                    if (0 === o) break e;
                                    o--, u |= n[s++] << l, l += 8;
                                }
                                if (c -= h, e.total_out += c, r.total += c, c && (e.adler = r.check = r.flags ? B(r.check, i, c, a - c) : O(r.check, i, c, a - c)), c = h, (r.flags ? u : L(u)) !== r.check) {
                                    e.msg = "incorrect data check", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.mode = 28;
                        case 28:
                            if (r.wrap && r.flags) {
                                for(; l < 32;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (u !== (4294967295 & r.total)) {
                                    e.msg = "incorrect length check", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.mode = 29;
                        case 29:
                            x = 1;
                            break e;
                        case 30:
                            x = -3;
                            break e;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return U;
                    }
                    return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, (r.wsize || c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && Z(e, e.output, e.next_out, c - e.avail_out) ? (r.mode = 31, -4) : (f -= e.avail_in, c -= e.avail_out, e.total_in += f, e.total_out += c, r.total += c, r.wrap && c && (e.adler = r.check = r.flags ? B(r.check, i, c, e.next_out - c) : O(r.check, i, c, e.next_out - c)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === c || 4 === t) && x === N && (x = -5), x);
                }, r.inflateEnd = function(e) {
                    if (!e || !e.state) return U;
                    var t = e.state;
                    return t.window && (t.window = null), e.state = null, N;
                }, r.inflateGetHeader = function(e, t) {
                    var r;
                    return e && e.state ? 0 == (2 & (r = e.state).wrap) ? U : ((r.head = t).done = !1, N) : U;
                }, r.inflateSetDictionary = function(e, t) {
                    var r, n = t.length;
                    return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, t, n, 0) !== r.check ? -3 : Z(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
                }, r.inflateInfo = "pako inflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }
        ],
        50: [
            function(e, t, r) {
                "use strict";
                var D = e("../utils/common"), F = [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    13,
                    15,
                    17,
                    19,
                    23,
                    27,
                    31,
                    35,
                    43,
                    51,
                    59,
                    67,
                    83,
                    99,
                    115,
                    131,
                    163,
                    195,
                    227,
                    258,
                    0,
                    0
                ], N = [
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    17,
                    17,
                    18,
                    18,
                    18,
                    18,
                    19,
                    19,
                    19,
                    19,
                    20,
                    20,
                    20,
                    20,
                    21,
                    21,
                    21,
                    21,
                    16,
                    72,
                    78
                ], U = [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9,
                    13,
                    17,
                    25,
                    33,
                    49,
                    65,
                    97,
                    129,
                    193,
                    257,
                    385,
                    513,
                    769,
                    1025,
                    1537,
                    2049,
                    3073,
                    4097,
                    6145,
                    8193,
                    12289,
                    16385,
                    24577,
                    0,
                    0
                ], P = [
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    18,
                    18,
                    19,
                    19,
                    20,
                    20,
                    21,
                    21,
                    22,
                    22,
                    23,
                    23,
                    24,
                    24,
                    25,
                    25,
                    26,
                    26,
                    27,
                    27,
                    28,
                    28,
                    29,
                    29,
                    64,
                    64
                ];
                t.exports = function(e, t, r, n, i, s, a, o) {
                    var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
                    for(b = 0; b <= 15; b++)O[b] = 0;
                    for(v = 0; v < n; v++)O[t[r + v]]++;
                    for(k = g, w = 15; 1 <= w && 0 === O[w]; w--);
                    if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
                    for(y = 1; y < w && 0 === O[y]; y++);
                    for(k < y && (k = y), b = z = 1; b <= 15; b++)if (z <<= 1, (z -= O[b]) < 0) return -1;
                    if (0 < z && (0 === e || 1 !== w)) return -1;
                    for(B[1] = 0, b = 1; b < 15; b++)B[b + 1] = B[b] + O[b];
                    for(v = 0; v < n; v++)0 !== t[r + v] && (a[B[t[r + v]]++] = v);
                    if (d = 0 === e ? (A = R = a, 19) : 1 === e ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                    for(;;){
                        for(p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
                        for(h = 1 << b - 1; E & h;)h >>= 1;
                        if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                            if (b === w) break;
                            b = t[r + a[v]];
                        }
                        if (k < b && (E & f) !== l) {
                            for(0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);)x++, z <<= 1;
                            if (C += 1 << x, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                            i[l = E & f] = k << 24 | x << 16 | c - s | 0;
                        }
                    }
                    return 0 !== E && (i[c + E] = b - S << 24 | 4194304), o.bits = k, 0;
                };
            },
            {
                "../utils/common": 41
            }
        ],
        51: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                };
            },
            {}
        ],
        52: [
            function(e, t, r) {
                "use strict";
                var i = e("../utils/common"), o = 0, h = 1;
                function n(e) {
                    for(var t = e.length; 0 <= --t;)e[t] = 0;
                }
                var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0
                ], k = [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13
                ], x = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    3,
                    7
                ], S = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                ], z = new Array(2 * (l + 2));
                n(z);
                var C = new Array(2 * f);
                n(C);
                var E = new Array(512);
                n(E);
                var A = new Array(256);
                n(A);
                var I = new Array(a);
                n(I);
                var O, B, R, T = new Array(f);
                function D(e, t, r, n, i) {
                    this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
                }
                function F(e, t) {
                    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
                }
                function N(e) {
                    return e < 256 ? E[e] : E[256 + (e >>> 7)];
                }
                function U(e, t) {
                    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
                }
                function P(e, t, r) {
                    e.bi_valid > d - r ? (e.bi_buf |= t << e.bi_valid & 65535, U(e, e.bi_buf), e.bi_buf = t >> d - e.bi_valid, e.bi_valid += r - d) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
                }
                function L(e, t, r) {
                    P(e, r[2 * t], r[2 * t + 1]);
                }
                function j(e, t) {
                    for(var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
                    return r >>> 1;
                }
                function Z(e, t, r) {
                    var n, i, s = new Array(g + 1), a = 0;
                    for(n = 1; n <= g; n++)s[n] = a = a + r[n - 1] << 1;
                    for(i = 0; i <= t; i++){
                        var o = e[2 * i + 1];
                        0 !== o && (e[2 * i] = j(s[o]++, o));
                    }
                }
                function W(e) {
                    var t;
                    for(t = 0; t < l; t++)e.dyn_ltree[2 * t] = 0;
                    for(t = 0; t < f; t++)e.dyn_dtree[2 * t] = 0;
                    for(t = 0; t < c; t++)e.bl_tree[2 * t] = 0;
                    e.dyn_ltree[2 * m] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
                }
                function M(e) {
                    8 < e.bi_valid ? U(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
                }
                function H(e, t, r, n) {
                    var i = 2 * t, s = 2 * r;
                    return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r];
                }
                function G(e, t, r) {
                    for(var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && H(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !H(t, n, e.heap[i], e.depth));)e.heap[r] = e.heap[i], r = i, i <<= 1;
                    e.heap[r] = n;
                }
                function K(e, t, r) {
                    var n, i, s, a, o = 0;
                    if (0 !== e.last_lit) for(; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], o++, 0 === n ? L(e, i, t) : (L(e, (s = A[i]) + u + 1, t), 0 !== (a = w[s]) && P(e, i -= I[s], a), L(e, s = N(--n), r), 0 !== (a = k[s]) && P(e, n -= T[s], a)), o < e.last_lit;);
                    L(e, m, t);
                }
                function Y(e, t) {
                    var r, n, i, s = t.dyn_tree, a = t.stat_desc.static_tree, o = t.stat_desc.has_stree, h = t.stat_desc.elems, u = -1;
                    for(e.heap_len = 0, e.heap_max = _, r = 0; r < h; r++)0 !== s[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
                    for(; e.heap_len < 2;)s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
                    for(t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--)G(e, s, r);
                    for(i = h; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, s, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, s[2 * i] = s[2 * r] + s[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, s[2 * r + 1] = s[2 * n + 1] = i, e.heap[1] = i++, G(e, s, 1), 2 <= e.heap_len;);
                    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
                        var r, n, i, s, a, o, h = t.dyn_tree, u = t.max_code, l = t.stat_desc.static_tree, f = t.stat_desc.has_stree, c = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, m = 0;
                        for(s = 0; s <= g; s++)e.bl_count[s] = 0;
                        for(h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < _; r++)p < (s = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * n + 1] = s, u < n || (e.bl_count[s]++, a = 0, d <= n && (a = c[n - d]), o = h[2 * n], e.opt_len += o * (s + a), f && (e.static_len += o * (l[2 * n + 1] + a)));
                        if (0 !== m) {
                            do {
                                for(s = p - 1; 0 === e.bl_count[s];)s--;
                                e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[p]--, m -= 2;
                            }while (0 < m);
                            for(s = p; 0 !== s; s--)for(n = e.bl_count[s]; 0 !== n;)u < (i = e.heap[--r]) || (h[2 * i + 1] !== s && (e.opt_len += (s - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = s), n--);
                        }
                    }(e, t), Z(s, u, e.bl_count);
                }
                function X(e, t, r) {
                    var n, i, s = -1, a = t[1], o = 0, h = 7, u = 4;
                    for(0 === a && (h = 138, u = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)i = a, a = t[2 * (n + 1) + 1], ++o < h && i === a || (o < u ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[2 * b]++) : o <= 10 ? e.bl_tree[2 * v]++ : e.bl_tree[2 * y]++, s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4));
                }
                function V(e, t, r) {
                    var n, i, s = -1, a = t[1], o = 0, h = 7, u = 4;
                    for(0 === a && (h = 138, u = 3), n = 0; n <= r; n++)if (i = a, a = t[2 * (n + 1) + 1], !(++o < h && i === a)) {
                        if (o < u) for(; L(e, i, e.bl_tree), 0 != --o;);
                        else 0 !== i ? (i !== s && (L(e, i, e.bl_tree), o--), L(e, b, e.bl_tree), P(e, o - 3, 2)) : o <= 10 ? (L(e, v, e.bl_tree), P(e, o - 3, 3)) : (L(e, y, e.bl_tree), P(e, o - 11, 7));
                        s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4);
                    }
                }
                n(T);
                var q = !1;
                function J(e, t, r, n) {
                    P(e, (s << 1) + (n ? 1 : 0), 3), function(e, t, r, n) {
                        M(e), n && (U(e, r), U(e, ~r)), i.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
                    }(e, t, r, !0);
                }
                r._tr_init = function(e) {
                    q || (function() {
                        var e, t, r, n, i, s = new Array(g + 1);
                        for(n = r = 0; n < a - 1; n++)for(I[n] = r, e = 0; e < 1 << w[n]; e++)A[r++] = n;
                        for(A[r - 1] = n, n = i = 0; n < 16; n++)for(T[n] = i, e = 0; e < 1 << k[n]; e++)E[i++] = n;
                        for(i >>= 7; n < f; n++)for(T[n] = i << 7, e = 0; e < 1 << k[n] - 7; e++)E[256 + i++] = n;
                        for(t = 0; t <= g; t++)s[t] = 0;
                        for(e = 0; e <= 143;)z[2 * e + 1] = 8, e++, s[8]++;
                        for(; e <= 255;)z[2 * e + 1] = 9, e++, s[9]++;
                        for(; e <= 279;)z[2 * e + 1] = 7, e++, s[7]++;
                        for(; e <= 287;)z[2 * e + 1] = 8, e++, s[8]++;
                        for(Z(z, l + 1, s), e = 0; e < f; e++)C[2 * e + 1] = 5, C[2 * e] = j(e, 5);
                        O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
                    }(), q = !0), e.l_desc = new F(e.dyn_ltree, O), e.d_desc = new F(e.dyn_dtree, B), e.bl_desc = new F(e.bl_tree, R), e.bi_buf = 0, e.bi_valid = 0, W(e);
                }, r._tr_stored_block = J, r._tr_flush_block = function(e, t, r, n) {
                    var i, s, a = 0;
                    0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                        var t, r = 4093624447;
                        for(t = 0; t <= 31; t++, r >>>= 1)if (1 & r && 0 !== e.dyn_ltree[2 * t]) return o;
                        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return h;
                        for(t = 32; t < u; t++)if (0 !== e.dyn_ltree[2 * t]) return h;
                        return o;
                    }(e)), Y(e, e.l_desc), Y(e, e.d_desc), a = function(e) {
                        var t;
                        for(X(e, e.dyn_ltree, e.l_desc.max_code), X(e, e.dyn_dtree, e.d_desc.max_code), Y(e, e.bl_desc), t = c - 1; 3 <= t && 0 === e.bl_tree[2 * S[t] + 1]; t--);
                        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
                    }(e), i = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5, r + 4 <= i && -1 !== t ? J(e, t, r, n) : 4 === e.strategy || s === i ? (P(e, 2 + (n ? 1 : 0), 3), K(e, z, C)) : (P(e, 4 + (n ? 1 : 0), 3), function(e, t, r, n) {
                        var i;
                        for(P(e, t - 257, 5), P(e, r - 1, 5), P(e, n - 4, 4), i = 0; i < n; i++)P(e, e.bl_tree[2 * S[i] + 1], 3);
                        V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1);
                    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), K(e, e.dyn_ltree, e.dyn_dtree)), W(e), n && M(e);
                }, r._tr_tally = function(e, t, r) {
                    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (A[r] + u + 1)]++, e.dyn_dtree[2 * N(t)]++), e.last_lit === e.lit_bufsize - 1;
                }, r._tr_align = function(e) {
                    P(e, 2, 3), L(e, m, z), function(e) {
                        16 === e.bi_valid ? (U(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
                    }(e);
                };
            },
            {
                "../utils/common": 41
            }
        ],
        53: [
            function(e, t, r) {
                "use strict";
                t.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                };
            },
            {}
        ],
        54: [
            function(e, t, r) {
                (function(e) {
                    !function(r, n) {
                        "use strict";
                        if (!r.setImmediate) {
                            var i, s, t, a, o = 1, h = {}, u = !1, l = r.document, e = Object.getPrototypeOf && Object.getPrototypeOf(r);
                            e = e && e.setTimeout ? e : r, i = "[object process]" === ({}).toString.call(r.process) ? function(e) {
                                process.nextTick(function() {
                                    c(e);
                                });
                            } : function() {
                                if (r.postMessage && !r.importScripts) {
                                    var e = !0, t = r.onmessage;
                                    return r.onmessage = function() {
                                        e = !1;
                                    }, r.postMessage("", "*"), r.onmessage = t, e;
                                }
                            }() ? (a = "setImmediate$" + Math.random() + "$", r.addEventListener ? r.addEventListener("message", d, !1) : r.attachEvent("onmessage", d), function(e) {
                                r.postMessage(a + e, "*");
                            }) : r.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
                                c(e.data);
                            }, function(e) {
                                t.port2.postMessage(e);
                            }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e) {
                                var t = l.createElement("script");
                                t.onreadystatechange = function() {
                                    c(e), t.onreadystatechange = null, s.removeChild(t), t = null;
                                }, s.appendChild(t);
                            }) : function(e) {
                                setTimeout(c, 0, e);
                            }, e.setImmediate = function(e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for(var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)t[r] = arguments[r + 1];
                                var n = {
                                    callback: e,
                                    args: t
                                };
                                return h[o] = n, i(o), o++;
                            }, e.clearImmediate = f;
                        }
                        function f(e) {
                            delete h[e];
                        }
                        function c(e) {
                            if (u) setTimeout(c, 0, e);
                            else {
                                var t = h[e];
                                if (t) {
                                    u = !0;
                                    try {
                                        !function(e) {
                                            var t = e.callback, r = e.args;
                                            switch(r.length){
                                                case 0:
                                                    t();
                                                    break;
                                                case 1:
                                                    t(r[0]);
                                                    break;
                                                case 2:
                                                    t(r[0], r[1]);
                                                    break;
                                                case 3:
                                                    t(r[0], r[1], r[2]);
                                                    break;
                                                default:
                                                    t.apply(n, r);
                                            }
                                        }(t);
                                    } finally{
                                        f(e), u = !1;
                                    }
                                }
                            }
                        }
                        function d(e) {
                            e.source === r && "string" == typeof e.data && 0 === e.data.indexOf(a) && c(+e.data.slice(a.length));
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self);
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ]
    }, {}, [
        10
    ])(10);
});

},{"f7295d6075386111":"bCaf4","cf30dbb97a1d82ba":"euskh"}],"hgpES":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "md-scrollbar urlBox"
    }, [
        _c('div', {
            staticClass: "filesPaddingPath"
        }, [
            _c('div', {
                staticClass: "sizeOfPathTab"
            }, _vm._l(_vm.pathTab, function(path, index) {
                return _c('span', {
                    key: index,
                    on: {
                        "click": function($event) {
                            return _vm.loadRoute(index);
                        }
                    }
                }, [
                    _vm._v("\n            " + _vm._s(path.name) + "\n         ")
                ]);
            }), 0),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-icon-button addURLButtonPanel",
                attrs: {
                    "disabled": !_vm.boolInShared
                },
                on: {
                    "click": function($event) {
                        _vm.activeAddDirectory = true;
                    }
                }
            }, [
                _c('i', {
                    staticClass: "material-icons iconPlusDocumentation"
                }, [
                    _vm._v("add_circle_outline")
                ])
            ])
        ], 1),
        _vm._v(" "),
        _vm.boolInShared == true ? _c('md-subheader', {
            staticClass: "hr-sect"
        }, [
            _vm._v("Local Files")
        ]) : _c('md-subheader', {
            staticClass: "hr-sect"
        }, [
            _vm._v("Shared Files")
        ]),
        _vm._v(" "),
        _vm.displayList.length != 0 ? _c('md-table', _vm._l(_vm.displayList, function(files, index) {
            return _c('md-table-row', {
                key: index,
                nativeOn: {
                    "dblclick": function($event) {
                        return _vm.enterInDirectory(files);
                    }
                }
            }, [
                _c('md-table-cell', [
                    _c('div', {
                        staticClass: "filesPaddingIcon"
                    }, [
                        _c('md-icon', [
                            _vm._v(_vm._s(_vm.getIconFile(files)))
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "sizeOfPathTab"
                        }, [
                            _vm._v(_vm._s(files.name.get()))
                        ])
                    ], 1)
                ]),
                _vm._v(" "),
                _c('md-table-cell', [
                    _c('menuFile', {
                        attrs: {
                            "file": files,
                            "boolInShared": _vm.boolInShared,
                            "index": index
                        },
                        on: {
                            "downloadFile": _vm.downloadFile,
                            "removeFile": _vm.removeFile
                        }
                    })
                ], 1)
            ], 1);
        }), 1) : _vm._e(),
        _vm._v(" "),
        _vm.boolInShared == true && !_vm.boolInDirectory && _vm.groupAttrDisplayList.length > 0 ? _c('div', [
            _c('md-subheader', {
                staticClass: "hr-sect"
            }, [
                _vm._v("Shared Files")
            ]),
            _vm._v(" "),
            _c('md-table', _vm._l(_vm.groupAttrDisplayList, function(group, index) {
                return _c('md-table-row', {
                    key: index,
                    nativeOn: {
                        "dblclick": function($event) {
                            return _vm.enterInDirectoryParent(group);
                        }
                    }
                }, [
                    _c('md-table-cell', [
                        _c('div', {
                            staticClass: "filesPaddingIcon"
                        }, [
                            _c('md-icon', [
                                _vm._v("folder")
                            ]),
                            _vm._v(" "),
                            _c('div', {
                                staticClass: "sizeOfPathTab"
                            }, [
                                _vm._v(_vm._s(group.groupName))
                            ])
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _c('md-table-cell')
                ], 1);
            }), 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c('md-dialog', {
            staticClass: "fileUploadDialog",
            attrs: {
                "md-active": _vm.activeAddDirectory
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeAddDirectory = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeAddDirectory = $event;
                }
            }
        }, [
            _c('md-dialog-content', {
                staticClass: "dialogContent"
            }, [
                _c('md-tabs', {
                    staticClass: "dialogTabs",
                    attrs: {
                        "md-alignment": "fixed"
                    },
                    on: {
                        "md-changed": _vm.resetImportedFiles
                    }
                }, [
                    _c('md-tab', {
                        attrs: {
                            "md-label": "Upload"
                        }
                    }, [
                        _c('md-field', [
                            _c('md-file', {
                                attrs: {
                                    "multiple": ""
                                },
                                on: {
                                    "md-change": _vm.getFileImported
                                },
                                model: {
                                    value: _vm.multipleFile,
                                    callback: function($$v) {
                                        _vm.multipleFile = $$v;
                                    },
                                    expression: "multipleFile"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c('md-tab', {
                        attrs: {
                            "md-label": "Drive"
                        }
                    }, [
                        _c('drive', {
                            on: {
                                "getFileImportedFromDrive": _vm.getFileImportedFromDrive
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c('md-tab', {
                        attrs: {
                            "md-label": "Select from context"
                        }
                    }, [
                        _c('selectFromContext', {
                            on: {
                                "selected": _vm.selectFileFromContext
                            }
                        })
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeAddDirectory = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.saveFile
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6jfpY":[function() {},{}],"ir72C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lhvpz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1999f1751102871f");
    if (script.__esModule) script = script.default;
    script.render = require("c44633fbc28487d0").render;
    script.staticRenderFns = require("c44633fbc28487d0").staticRenderFns;
    script._scopeId = "data-v-68ff72";
    script.__cssModules = require("9e76ff70e04276d").default;
    require("588edb7b2e629556").default(script);
    script.__scopeId = 'data-v-68ff72';
    script.__file = "AttributesPanel.vue";
};
initialize();
exports.default = script;

},{"1999f1751102871f":"dysnR","c44633fbc28487d0":"luLVA","9e76ff70e04276d":"gbWTq","588edb7b2e629556":"ie6gb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dysnR":[function(require,module,exports,__globalThis) {
//import Toasted from "vue-toasted";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _menuAttributesVue = require("./component/menuAttributes.vue");
var _menuAttributesVueDefault = parcelHelpers.interopDefault(_menuAttributesVue);
var _menuCategoryAttributesVue = require("./component/menuCategoryAttributes.vue");
var _menuCategoryAttributesVueDefault = parcelHelpers.interopDefault(_menuCategoryAttributesVue);
var _attributesImportVue = require("./component/attributesImport.vue");
var _attributesImportVueDefault = parcelHelpers.interopDefault(_attributesImportVue);
var _utilitiesJs = require("../../service/utilities.js");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
//Vue.use(Toasted);
let viewer;
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            activeDialogStatus: false,
            activeDialogCategory: false,
            label: undefined,
            value: undefined,
            categorySelected: undefined,
            categoryCreate: "none",
            category: undefined,
            categoryDisplayList: [],
            URLDisplayList: [],
            myBind: undefined,
            groupAttrDisplayList: [],
            myBindParent: undefined,
            parentListToBind: undefined
        };
    },
    components: {
        menuAttributes: (0, _menuAttributesVueDefault.default),
        menuCategoryAttributes: (0, _menuCategoryAttributesVueDefault.default),
        attributesImport: (0, _attributesImportVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        // async selectAttributes(attr) {
        //   console.log("___________________________");
        //   serviceDocumentation
        //     .getCategoryByName(this.option.info, attr.nameCat)
        //     .then(async category => {
        //       console.log(category);
        //     });
        //   let category = await serviceDocumentation.addCategoryAttribute(
        //     this.option.info,
        //     "categoryName"
        //   );
        //   console.log(category);
        //   console.log("___________________________");
        // },
        editURLNode (attributes, urlChange) {
            attributes.label.set(urlChange.label);
            attributes.value.set(urlChange.value);
            this.resetBind();
        },
        removeURLNode (attributes, category) {
            for(let i = 0; i < category.element.length; i++){
                const element = category.element[i];
                if (element.label.get() == attributes.label.get()) category.element.splice(i, 1);
            }
        },
        editCategoryNode (category, change) {
            category.node.info.name.set(change.name);
        },
        removeCategoryNode (category) {
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).removeNode(category.node);
        },
        getAttributesFromForge (attributes) {
            this.selectedAttributesForge = attributes;
        // get la list d'attributs depuis les attributes de forge
        },
        updatecategorySelected (categorySelected) {
            this.categorySelected = categorySelected;
        },
        async updateURLList () {
            if (this.option.info != undefined) this.categoryDisplayList = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(this.option.info);
        },
        async updateAttrParent () {
            this.groupAttrDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    json = {
                        groupName: node.info.name.get(),
                        groupAttr: await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(node)
                    };
                    this.groupAttrDisplayList.push(json);
                }
            }
        },
        getLstOfAttributes (cat) {
            let tab = [];
            if (cat.element != undefined) for(let i = 0; i < cat.element.length; i++){
                const element = cat.element[i];
                tab.push(element);
            }
            return tab;
        },
        async testAttributes () {
            if (this.categorySelected != undefined || this.categorySelected != "") {
                if (this.label == undefined || this.value == undefined) {
                    let cat = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(this.option.info, this.categorySelected);
                    for(let i = 0; i < this.selectedAttributesForge.length; i++){
                        const element = this.selectedAttributesForge[i];
                        (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(this.option.info, cat, element.displayName, element.displayValue);
                    }
                } else {
                    let label = this.label;
                    let value = this.value;
                    let cat = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(this.option.info, this.categorySelected);
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(this.option.info, cat, this.label, this.value);
                }
            } else console.log("error");
        },
        async addAttributes () {
            if (this.option.exist == false) window.spinal.ForgeViewer.viewer.model.getProperties(this.option.dbid, async (res)=>{
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(this.option.dbid, res.name, this.option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(this.option.dbid, this.option.model3d);
                    this.option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                await this.testAttributes();
                this.resetAttributes();
                this.resetBind();
            });
            else {
                await this.testAttributes();
                this.resetAttributes();
            }
            // on check si les attributs viennent de forge ou on créer un attributs
            // viewer.model.getProperties(this.option.dbid, function(res) {
            //   let option = utilities.addAttributes(
            //     _this.option,
            //     res.name,
            //     label,
            //     value
            //   );
            //   option.then(option => {
            //     if (_this.option.exist == false) {
            //       _this.option.exist = true;
            //       _this.$emit("updateMyBIMObject", option);
            //     }
            //   });
            // });
            // this.label = undefined;
            // this.value = undefined;
            // this.categorySelected = undefined;
            this.activeDialogStatus = false;
        },
        checkCategory () {
            if (this.category != undefined && this.category != "") {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(this.option.info, this.category);
                this.category = "";
            }
        },
        addCategory () {
            let _this = this;
            if (this.option.exist) this.checkCategory();
            else // create bim object before add note
            if (this.option.dbid != undefined) window.spinal.ForgeViewer.viewer.model.getProperties(this.option.dbid, async (res)=>{
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(_this.option.dbid, res.name, _this.option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(_this.option.dbid, _this.option.model3d);
                    _this.option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                _this.option.exist = true;
                _this.$emit("updateMyBIMObject", this.option);
                _this.checkCategory();
                _this.resetBind();
            });
            // this.category = "";
            this.activeDialogCategory = false;
        },
        resetAttributes () {
            this.label = undefined;
            this.value = undefined;
            this.categorySelected = undefined;
            this.selectedAttributesForge = undefined;
        },
        resetBind () {
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    if (this.myBind != undefined) {
                        this.option.info.unbind(this.myBind);
                        this.myBind = undefined;
                    }
                    if (this.myBind == undefined) this.myBind = this.option.info.bind(this.updateURLList.bind(this));
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            if (this.parentListToBind == undefined) this.parentListToBind = new Lst();
            if (!this.parentListToBind.length == this.parentGroup.length) {
                this.parentListToBind.splice(0, this.parentListToBind.length);
                for(let i = 0; i < this.parentGroup.length; i++){
                    const element = this.parentGroup[i];
                    this.parentListToBind.push(element);
                }
            }
            if (this.myBindParent == undefined) this.parentListToBind.bind(this.updateAttrParent.bind(this));
        }
    },
    mounted () {
        viewer = window.spinal.ForgeViewer.viewer;
        this.resetBind();
        this.resetBindParent();
    },
    watch: {
        option: function() {
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"hO3OD","spinal-env-viewer-plugin-documentation-service":"cP9kK","./component/menuAttributes.vue":"fOplk","./component/menuCategoryAttributes.vue":"ljVYL","./component/attributesImport.vue":"j03X3","../../service/utilities.js":"bhM68","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fOplk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("46af9df0cea8e59c");
    if (script.__esModule) script = script.default;
    script.render = require("2d056e37131aa9b0").render;
    script.staticRenderFns = require("2d056e37131aa9b0").staticRenderFns;
    script._scopeId = "data-v-2b2120";
    script.__cssModules = require("e18dfeb72c197351").default;
    require("3f69a66644ba376f").default(script);
    script.__scopeId = 'data-v-2b2120';
    script.__file = "menuAttributes.vue";
};
initialize();
exports.default = script;

},{"46af9df0cea8e59c":"a62SG","2d056e37131aa9b0":"6kFUO","e18dfeb72c197351":"k0dYt","3f69a66644ba376f":"8onbo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a62SG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "url",
        "category"
    ],
    data () {
        return {
            activeEditAttributesNode: false,
            urlChange: {
                label: "",
                URL: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editURLNode", this.url, this.urlChange);
            this.activeEditAttributesNode = false;
        },
        remove () {
            this.$emit("removeURLNode", this.url, this.category);
        }
    },
    mounted () {
        if (this.url !== undefined) {
            this.urlChange.label = this.url.label.get();
            this.urlChange.value = this.url.value.get();
        }
    },
    watch: {
        activeEditAttributesNode () {
            if (this.activeEditAttributesNode) {
                if (this.url !== undefined) {
                    this.urlChange.label = this.url.label.get();
                    this.urlChange.value = this.url.value.get();
                }
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6kFUO":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-menu', {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
            }
        }, [
            _c('md-button', {
                staticClass: "md-icon-button",
                attrs: {
                    "md-menu-trigger": ""
                }
            }, [
                _c('md-icon', [
                    _vm._v("more_vert")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-menu-content', [
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit\n      ")
                ]),
                _vm._v(" "),
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            attrs: {
                "md-active": _vm.activeEditAttributesNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditAttributesNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditAttributesNode = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Edit Attribute")
            ]),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.urlChange.label,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "label", $$v);
                        },
                        expression: "urlChange.label"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("Link")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.urlChange.value,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "value", $$v);
                        },
                        expression: "urlChange.value"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"k0dYt":[function() {},{}],"8onbo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ljVYL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cac4cc166fc37998");
    if (script.__esModule) script = script.default;
    script.render = require("d5dd34f5d136e608").render;
    script.staticRenderFns = require("d5dd34f5d136e608").staticRenderFns;
    script._scopeId = "data-v-a367d9";
    script.__cssModules = require("f79be5066499e615").default;
    require("66da6889ba18ce42").default(script);
    script.__scopeId = 'data-v-a367d9';
    script.__file = "menuCategoryAttributes.vue";
};
initialize();
exports.default = script;

},{"cac4cc166fc37998":"d0lkv","d5dd34f5d136e608":"hzhR5","f79be5066499e615":"6sjDI","66da6889ba18ce42":"3DCOm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d0lkv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "category"
    ],
    data () {
        return {
            activeEditAttributesNode: false,
            urlChange: {
                name: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editCategoryNode", this.category, this.urlChange);
            this.activeEditAttributesNode = false;
        },
        remove () {
            this.$emit("removeCategoryNode", this.category);
        }
    },
    mounted () {
        if (this.category !== undefined) this.urlChange.name = this.category.node.info.name.get();
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hzhR5":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-menu', {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
            }
        }, [
            _c('md-button', {
                staticClass: "md-icon-button",
                attrs: {
                    "md-menu-trigger": ""
                }
            }, [
                _c('md-icon', [
                    _vm._v("more_vert")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-menu-content', [
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c('md-menu-item', {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            attrs: {
                "md-active": _vm.activeEditAttributesNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditAttributesNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditAttributesNode = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Edit Category")
            ]),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.urlChange.name,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "name", $$v);
                        },
                        expression: "urlChange.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6sjDI":[function() {},{}],"3DCOm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j03X3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("af9148c8766b9d92");
    if (script.__esModule) script = script.default;
    script.render = require("3ee21312686b29dd").render;
    script.staticRenderFns = require("3ee21312686b29dd").staticRenderFns;
    script._scopeId = "data-v-6b17a3";
    require("33e377b78afec183").default(script);
    script.__scopeId = 'data-v-6b17a3';
    script.__file = "attributesImport.vue";
};
initialize();
exports.default = script;

},{"af9148c8766b9d92":"3lLeB","3ee21312686b29dd":"7ILZ0","33e377b78afec183":"lrlff","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3lLeB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "addGroup",
    data () {
        return {
            categorySelected: undefined,
            selectedAttributesTab: [],
            propertiesTab: [],
            displayAttributesList: []
        };
    },
    components: {},
    props: [
        "option",
        "categoryDisplayList"
    ],
    methods: {
        async benef () {
            // console.log(this.option);
            this.selectedNode = this.option.info;
            if (this.option.dbid) this.dbid = this.option.dbid;
            else if (this.option.info.info.type.get() == "BIMObject") this.dbid = this.option.info.info.dbid.get();
            this.exist = this.option.exist;
            this.propertiesTab = await this.promiseGetPorperties(this.dbid);
            // console.log(propertiesTab);
            this.updateDisplayAttributesList();
        },
        updateDisplayAttributesList () {
            this.displayAttributesList = [];
            for(let i = 0; i < this.propertiesTab.properties.length; i++){
                const forgeAttributes = this.propertiesTab.properties[i];
                this.displayAttributesList.push(forgeAttributes);
            }
        },
        updatecategorySelected () {
            this.$emit("updatecategorySelected", this.categorySelected);
        },
        onSelectAttribute (items) {
            this.$emit("getAttributesFromForge", items);
        },
        promiseGetPorperties (dbId) {
            return new Promise((resolve)=>{
                window.spinal.ForgeViewer.viewer.model.getProperties(dbId, resolve);
            });
        }
    },
    mounted () {
        this.categorySelected = undefined;
        this.benef();
    },
    watch: {
        categorySelected: function() {
            this.updatecategorySelected();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7ILZ0":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "md-scrollbar",
        staticStyle: {
            "box-sizing": "border-box",
            "overflow-y": "auto",
            "height": "40vh"
        }
    }, [
        _c('div', {
            staticClass: "md-layout-item"
        }, [
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }
            }, [
                _c('md-select', {
                    attrs: {
                        "md-selected": _vm.updatecategorySelected,
                        "name": "category",
                        "id": "category",
                        "placeholder": "category"
                    },
                    model: {
                        value: _vm.categorySelected,
                        callback: function($$v) {
                            _vm.categorySelected = $$v;
                        },
                        expression: "categorySelected"
                    }
                }, _vm._l(_vm.categoryDisplayList, function(category, index) {
                    return _c('md-option', {
                        key: index,
                        attrs: {
                            "value": category.node.info.name.get()
                        }
                    }, [
                        _vm._v(_vm._s(category.node.info.name.get()))
                    ]);
                }), 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('div', [
            _c('md-table', {
                attrs: {
                    "md-card": ""
                },
                on: {
                    "md-selected": _vm.onSelectAttribute
                },
                scopedSlots: _vm._u([
                    {
                        key: "md-table-row",
                        fn: function(ref) {
                            var forgeAttributes = ref.item;
                            return _c('md-table-row', {
                                staticClass: "myRowStyle",
                                attrs: {
                                    "md-auto-select": "",
                                    "md-selectable": "multiple"
                                }
                            }, [
                                _c('md-table-cell', [
                                    _c('span', {
                                        staticClass: "md-list-item-text"
                                    }, [
                                        _vm._v(_vm._s(forgeAttributes.attributeName))
                                    ])
                                ]),
                                _vm._v(" "),
                                _c('md-table-cell', [
                                    _c('span', {
                                        staticClass: "md-list-item-text"
                                    }, [
                                        _vm._v(_vm._s(forgeAttributes.displayValue))
                                    ])
                                ])
                            ], 1);
                        }
                    }
                ]),
                model: {
                    value: _vm.displayAttributesList,
                    callback: function($$v) {
                        _vm.displayAttributesList = $$v;
                    },
                    expression: "displayAttributesList"
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lrlff":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"luLVA":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "container-link urlBox"
    }, [
        _c('div', [
            _c('md-button', {
                staticClass: "attributesButtonPanel",
                on: {
                    "click": function($event) {
                        _vm.activeDialogCategory = true;
                    }
                }
            }, [
                _vm._v("\n         ADD CATEGORY\n      ")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "attributesButtonPanel",
                on: {
                    "click": function($event) {
                        _vm.activeDialogStatus = true;
                    }
                }
            }, [
                _vm._v("\n         ADD ATTRIBUTES\n      ")
            ]),
            _vm._v(" "),
            _c('md-subheader', {
                staticClass: "hr-sect"
            }, [
                _vm._v("Local Attributes")
            ]),
            _vm._v(" "),
            _c('md-list', {
                staticClass: "widthOfList"
            }, _vm._l(_vm.categoryDisplayList, function(cat) {
                return _c('md-list-item', {
                    key: cat.nameCat,
                    staticClass: "colorForCategory",
                    attrs: {
                        "md-expand": ""
                    }
                }, [
                    _c('span', {
                        staticClass: "nameOfCategory md-list-item-text"
                    }, [
                        _vm._v(_vm._s(cat.nameCat))
                    ]),
                    _vm._v(" "),
                    _c('menuCategoryAttributes', {
                        staticClass: "buttonRight",
                        attrs: {
                            "category": cat
                        },
                        on: {
                            "editCategoryNode": _vm.editCategoryNode,
                            "removeCategoryNode": _vm.removeCategoryNode
                        }
                    }),
                    _vm._v(" "),
                    _c('md-list', {
                        staticClass: "unsetPadding",
                        attrs: {
                            "slot": "md-expand"
                        },
                        slot: "md-expand"
                    }, _vm._l(_vm.getLstOfAttributes(cat), function(attributess, index) {
                        return _c('md-list-item', {
                            key: index,
                            staticClass: "md-inset"
                        }, [
                            _c('span', {
                                staticStyle: {
                                    "width": "40%"
                                }
                            }, [
                                _vm._v(_vm._s(attributess.label.get()))
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticStyle: {
                                    "width": "40%"
                                }
                            }, [
                                _vm._v(_vm._s(attributess.value.get()))
                            ]),
                            _vm._v(" "),
                            _c('menu-attributes', {
                                attrs: {
                                    "url": attributess,
                                    "category": cat
                                },
                                on: {
                                    "editURLNode": _vm.editURLNode,
                                    "removeURLNode": _vm.removeURLNode
                                }
                            })
                        ], 1);
                    }), 1)
                ], 1);
            }), 1),
            _vm._v(" "),
            _vm.groupAttrDisplayList.length > 0 ? _c('div', [
                _c('md-subheader', {
                    staticClass: "hr-sect"
                }, [
                    _vm._v("Shared Attributes")
                ]),
                _vm._v(" "),
                _vm._l(_vm.groupAttrDisplayList, function(group) {
                    return _c('md-list', {
                        key: group.groupName,
                        staticClass: "widthOfList"
                    }, [
                        _c('md-subheader', {
                            staticClass: "sharedCategoryCss"
                        }, [
                            _vm._v(_vm._s(group.groupName) + "\n            ")
                        ]),
                        _vm._v(" "),
                        _vm._l(group.groupAttr, function(cat) {
                            return _c('md-list-item', {
                                key: cat.nameCat,
                                staticClass: "colorForCategory",
                                attrs: {
                                    "md-expand": ""
                                }
                            }, [
                                _c('span', {
                                    staticClass: "nameOfCategory md-list-item-text"
                                }, [
                                    _vm._v(_vm._s(cat.nameCat))
                                ]),
                                _vm._v(" "),
                                _c('md-list', {
                                    staticClass: "unsetPadding",
                                    attrs: {
                                        "slot": "md-expand"
                                    },
                                    slot: "md-expand"
                                }, _vm._l(_vm.getLstOfAttributes(cat), function(attributess, index) {
                                    return _c('md-list-item', {
                                        key: index,
                                        staticClass: "md-inset"
                                    }, [
                                        _c('span', {
                                            staticStyle: {
                                                "width": "40%"
                                            }
                                        }, [
                                            _vm._v(_vm._s(attributess.label.get()))
                                        ]),
                                        _vm._v(" "),
                                        _c('span', {
                                            staticStyle: {
                                                "width": "40%"
                                            }
                                        }, [
                                            _vm._v(_vm._s(attributess.value.get()))
                                        ])
                                    ]);
                                }), 1)
                            ], 1);
                        })
                    ], 2);
                })
            ], 2) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            staticClass: "spinal-dialog-add-attr",
            attrs: {
                "md-active": _vm.activeDialogStatus
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeDialogStatus = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeDialogStatus = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Add Attributes")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', {
                staticClass: "attributeDialogContent"
            }, [
                _c('md-tabs', {
                    staticClass: "dialogTabs",
                    attrs: {
                        "md-alignment": "fixed"
                    },
                    on: {
                        "md-changed": _vm.resetAttributes
                    }
                }, [
                    _c('md-tab', {
                        attrs: {
                            "md-label": "Create"
                        }
                    }, [
                        _c('md-field', [
                            _c('md-select', {
                                attrs: {
                                    "name": "category",
                                    "id": "category",
                                    "placeholder": "category"
                                },
                                model: {
                                    value: _vm.categorySelected,
                                    callback: function($$v) {
                                        _vm.categorySelected = $$v;
                                    },
                                    expression: "categorySelected"
                                }
                            }, _vm._l(_vm.categoryDisplayList, function(category, index) {
                                return _c('md-option', {
                                    key: index,
                                    attrs: {
                                        "value": category.node.info.name.get()
                                    }
                                }, [
                                    _vm._v("\n                        " + _vm._s(category.node.info.name.get()))
                                ]);
                            }), 1)
                        ], 1),
                        _vm._v(" "),
                        _c('md-field', {
                            attrs: {
                                "md-inline": ""
                            }
                        }, [
                            _c('label', [
                                _vm._v("Label")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
                                model: {
                                    value: _vm.label,
                                    callback: function($$v) {
                                        _vm.label = $$v;
                                    },
                                    expression: "label"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c('md-field', {
                            attrs: {
                                "md-inline": ""
                            }
                        }, [
                            _c('label', [
                                _vm._v("Value")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
                                model: {
                                    value: _vm.value,
                                    callback: function($$v) {
                                        _vm.value = $$v;
                                    },
                                    expression: "value"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c('md-tab', {
                        attrs: {
                            "md-label": "Import"
                        }
                    }, [
                        _c('attributesImport', {
                            attrs: {
                                "option": _vm.option,
                                "categoryDisplayList": _vm.categoryDisplayList
                            },
                            on: {
                                "getAttributesFromForge": _vm.getAttributesFromForge,
                                "updatecategorySelected": _vm.updatecategorySelected
                            }
                        })
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeDialogStatus = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addAttributes
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog', {
            attrs: {
                "md-active": _vm.activeDialogCategory
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeDialogCategory = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeDialogCategory = $event;
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Add Category")
            ]),
            _vm._v(" "),
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("category")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.category,
                        callback: function($$v) {
                            _vm.category = $$v;
                        },
                        expression: "category"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeDialogCategory = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addCategory
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gbWTq":[function() {},{}],"ie6gb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"70OcU":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "containerCDE"
    }, [
        _c('md-toolbar', {
            staticClass: "md-layout md-gutter headerCDE",
            attrs: {
                "layout-align": "center center"
            }
        }, [
            _vm.selectedNode !== undefined ? _c('div', {
                staticClass: "centerSelectedNodeName"
            }, [
                _vm._v(_vm._s(_vm.selectedNode.info.name.get()))
            ]) : _c('div', {
                staticClass: "centerSelectedNodeName"
            }, [
                _vm._v("BIM Object not created")
            ])
        ]),
        _vm._v(" "),
        _c('md-toolbar', {
            staticClass: "md-layout md-gutter headerCDE",
            attrs: {
                "layout": "row",
                "layout-align": "center center"
            }
        }, [
            _c('md-button', {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(0),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 0;
                    }
                }
            }, [
                _vm._v("Files")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(1),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 1;
                    }
                }
            }, [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(2),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 2;
                    }
                }
            }, [
                _vm._v("Attributes")
            ])
        ], 1),
        _vm._v(" "),
        _c('transition', {
            attrs: {
                "name": "changeTabDocumentation"
            }
        }, [
            _vm.activeTab == 0 ? _c('filepanel', {
                attrs: {
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "selectedNode": _vm.selectedNode,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            }) : _vm.activeTab == 1 ? _c('urlpanel', {
                attrs: {
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "selectedNode": _vm.selectedNode,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            }) : _c('attributespanel', {
                attrs: {
                    "selectedNode": _vm.selectedNode,
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"29zHH":[function() {},{}],"7616f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aUPR9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b610eca7904d4b64");
    if (script.__esModule) script = script.default;
    script.render = require("f4bea1f5ab292e0d").render;
    script.staticRenderFns = require("f4bea1f5ab292e0d").staticRenderFns;
    script._scopeId = "data-v-49f689";
    script.__cssModules = require("5bdc32c9703fb274").default;
    require("4d12c400f372a566").default(script);
    script.__scopeId = 'data-v-49f689';
    script.__file = "attributesRightClick.vue";
};
initialize();
exports.default = script;

},{"b610eca7904d4b64":"g5GUA","f4bea1f5ab292e0d":"62ZHJ","5bdc32c9703fb274":"7KjdP","4d12c400f372a566":"lwOId","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g5GUA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            allCategory: [],
            categorySelected: "none",
            label: undefined,
            value: undefined,
            categoryCreate: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        addAttributes () {
            let myCategoerySelected = this.categorySelected;
            if (myCategoerySelected === "none") myCategoerySelected = this.categoryCreate;
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategoryName(myBIMObject, myCategoerySelected, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    // console.log("bim object exist");
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategoryName(node, myCategoerySelected, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
            this.allCategory = objet.category;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"19m0a","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"19m0a":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let createGraph = (()=>{
    var _ref = _asyncToGenerator(function*() {
        const forgeFile = yield window.spinal.spinalSystem.getModel();
        if (!forgeFile.hasOwnProperty("graph")) forgeFile.add_attr({
            graph: new _spinalModelGraph.SpinalGraph()
        });
        return forgeFile.graph;
    });
    return function createGraph() {
        return _ref.apply(this, arguments);
    };
})();
let createContext = (()=>{
    var _ref2 = _asyncToGenerator(function*() {
        const graph = yield this.getGraph();
        let context = yield graph.getContext(BIM_OBJECT_CONTEXT_TYPE);
        if (context === undefined) {
            context = new _spinalModelGraph.SpinalContext(BIM_OBJECT_CONTEXT_TYPE);
            yield graph.addContext(context);
        }
        return context;
    });
    return function createContext() {
        return _ref2.apply(this, arguments);
    };
})();
var _spinalModelGraph = require("8f95959f039a5af0");
var _spinalModelsBimobject = require("bef1fdfaa932d2b5");
var _spinalModelsBimobject2 = _interopRequireDefault(_spinalModelsBimobject);
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
const BIM_OBJECT_CONTEXT_TYPE = "BIMObjectContext";
const BIM_OBJECT_NODE_TYPE = "BIMObject";
const BIM_OBJECT_RELATION_NAME = "hasBIMObject";
const REFERENCE_OBJECT_RELATION_NAME = "hasReferenceObject";
const BIM_OBJECT_RELATION_TYPE = _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE;
const bimObjectService = {
    graph: null,
    context: null,
    getGraph () {
        if (this.graph === null) this.graph = createGraph();
        return this.graph;
    },
    getContext () {
        if (this.context === null) this.context = createContext.call(this);
        return this.context;
    },
    createBIMObject (dbid, name) {
        var _this = this;
        return _asyncToGenerator(function*() {
            let BIMObjNode = yield _this.getBIMObject(dbid);
            if (BIMObjNode === undefined) {
                const BIMObject = new _spinalModelsBimobject2.default(dbid, name);
                BIMObjNode = new _spinalModelGraph.SpinalNode(name, BIM_OBJECT_NODE_TYPE, BIMObject);
                BIMObjNode.info.add_attr({
                    dbid: dbid
                });
                const BIMObjectContext = yield _this.getContext();
                yield BIMObjectContext.addChildInContext(BIMObjNode, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, BIMObjectContext);
            }
            return BIMObjNode;
        })();
    },
    getBIMObject (dbid) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            const BIMObjectContext = yield _this2.getContext(BIM_OBJECT_CONTEXT_TYPE);
            const BIMObjectArray = yield BIMObjectContext.getChildren([
                BIM_OBJECT_RELATION_NAME
            ]);
            for (let BIMObject of BIMObjectArray){
                if (BIMObject.info.dbid.get() === dbid) return BIMObject;
            }
        })();
    },
    addBIMObject (context, parent, dbId, name) {
        var _this3 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this3.getBIMObject(dbId);
                if (node === undefined) node = yield _this3.createBIMObject(dbId, name);
            }
            yield parent.addChildInContext(node, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, context);
            return node;
        })();
    },
    removeBIMObject (parent, child) {
        return parent.removeChild(child, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    },
    deleteBIMObject (dbId) {
        var _this4 = this;
        return _asyncToGenerator(function*() {
            const context = yield _this4.getContext();
            const children = yield context.getChildrenInContext();
            const child = children.find(function(node) {
                return node.info.dbId === dbId;
            });
            if (child === undefined) throw Error("The dbId has no BIM object");
            return child.removeFromGraph();
        })();
    },
    addReferenceObject (parent, dbId, name) {
        var _this5 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this5.getBIMObject(dbId);
                if (node === undefined) node = yield _this5.createBIMObject(dbId, name);
            }
            yield parent.addChild(node, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
            return node;
        })();
    },
    removeReferenceObject (parent, child) {
        return parent.removeChild(child, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    }
};
bimObjectService.constants = {
    BIM_OBJECT_CONTEXT_TYPE,
    BIM_OBJECT_NODE_TYPE,
    BIM_OBJECT_RELATION_NAME,
    REFERENCE_OBJECT_RELATION_NAME,
    BIM_OBJECT_RELATION_TYPE
};
exports.default = bimObjectService;

},{"8f95959f039a5af0":"b87gp","bef1fdfaa932d2b5":"fDqnh"}],"fDqnh":[function(require,module,exports,__globalThis) {
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

},{"e30868c801f59ada":"cQPh9"}],"62ZHJ":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "unsetBackgroundContent"
    }, [
        _c('md-button', {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "md-layout-item"
        }, [
            _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }
            }, [
                _c('md-select', {
                    attrs: {
                        "name": "category",
                        "id": "category",
                        "placeholder": "category"
                    },
                    model: {
                        value: _vm.categorySelected,
                        callback: function($$v) {
                            _vm.categorySelected = $$v;
                        },
                        expression: "categorySelected"
                    }
                }, [
                    _c('md-option', {
                        attrs: {
                            "value": "none"
                        }
                    }, [
                        _vm._v("Create Category")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.allCategory, function(category, index) {
                        return _c('md-option', {
                            key: index,
                            attrs: {
                                "value": category.node.info.name.get()
                            }
                        }, [
                            _vm._v(_vm._s(category.node.info.name.get()))
                        ]);
                    })
                ], 2)
            ], 1),
            _vm._v(" "),
            _vm.categorySelected === 'none' ? _c('md-field', {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c('label', [
                    _vm._v("category")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.categoryCreate,
                        callback: function($$v) {
                            _vm.categoryCreate = $$v;
                        },
                        expression: "categoryCreate"
                    }
                })
            ], 1) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("Value")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-primary",
            on: {
                "click": _vm.addAttributes
            }
        }, [
            _vm._v("Save")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7KjdP":[function() {},{}],"lwOId":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eBAuM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5704270707721d4d");
    if (script.__esModule) script = script.default;
    script.render = require("1045a97a6aaa5ec2").render;
    script.staticRenderFns = require("1045a97a6aaa5ec2").staticRenderFns;
    script._scopeId = "data-v-728be4";
    script.__cssModules = require("8c96895a826e33cd").default;
    require("2ab6c443c5f18049").default(script);
    script.__scopeId = 'data-v-728be4';
    script.__file = "deleteUrlRightClick.vue";
};
initialize();
exports.default = script;

},{"5704270707721d4d":"huTks","1045a97a6aaa5ec2":"bs6Nj","8c96895a826e33cd":"5237E","2ab6c443c5f18049":"7TFgz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"huTks":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            label: undefined,
            value: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        deleteURL () {
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) ;
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).deleteURL(node, this.label);
                });
            });
        },
        editURL () {},
        addURL () {
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(myBIMObject, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(node, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"19m0a","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bs6Nj":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "unsetBackgroundContent"
    }, [
        _c('md-button', {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-primary",
            on: {
                "click": _vm.editURL
            }
        }, [
            _vm._v("Edit")
        ]),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-primary",
            on: {
                "click": _vm.deleteURL
            }
        }, [
            _vm._v("Delete")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5237E":[function() {},{}],"7TFgz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"VCCQ2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d8d3207de02eb5a0");
    if (script.__esModule) script = script.default;
    script.render = require("728767cea8b96fd8").render;
    script.staticRenderFns = require("728767cea8b96fd8").staticRenderFns;
    script._scopeId = "data-v-a73044";
    script.__cssModules = require("544ed10279a9db05").default;
    require("443bb050b55fd38f").default(script);
    script.__scopeId = 'data-v-a73044';
    script.__file = "urlRightClick.vue";
};
initialize();
exports.default = script;

},{"d8d3207de02eb5a0":"1HO7m","728767cea8b96fd8":"5LNl5","544ed10279a9db05":"gu04b","443bb050b55fd38f":"dKUpN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1HO7m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            label: undefined,
            value: undefined,
            categoryCreate: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        addURL () {
            let myCategoerySelected = this.categorySelected;
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(myBIMObject, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(node, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"19m0a","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5LNl5":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "unsetBackgroundContent"
    }, [
        _c('md-button', {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-field', {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c('label', [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-primary",
            on: {
                "click": _vm.addURL
            }
        }, [
            _vm._v("Save")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gu04b":[function() {},{}],"dKUpN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1tGYS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
exports.default = {
    getAllLeafDbIds (rootDbid) {
        const tree = this.getInstanceTree();
        const rootId = tree.getRootId();
        let dbidList = [];
        let tmp = [];
        for(let i = 0; i < rootDbid.length; i++){
            const element = rootDbid[i];
            tmp = this.getLeafDbIds(element);
            dbidList = dbidList.concat(tmp);
        // console.log(tmp);
        // console.log(dbidList);
        }
        return dbidList;
    },
    getInstanceTree () {
        const model = window.spinal.ForgeViewer.viewer.model;
        const tree = model.getData().instanceTree;
        return tree;
    },
    getLeafDbIds (rootId) {
        const tree = this.getInstanceTree();
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
    },
    getAllCategoryByDbidArray (allChildDbid) {
        let promiseCategory = [];
        let allCategory = [];
        for(let i = 0; i < allChildDbid.length; i++){
            const element = allChildDbid[i];
            promiseCategory.push((0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(element).then((node)=>{
                // console.log(node);
                if (node instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(node);
                return undefined;
            }));
        }
        return Promise.all(promiseCategory).then((res)=>{
            let check = true;
            const result = res.filter((node)=>node !== undefined);
            result.forEach((dbid)=>{
                dbid.forEach((cat)=>{
                    allCategory.forEach((alreadyAdded)=>{
                        if (alreadyAdded.node.info.name.get() === cat.node.info.name.get()) check = false;
                    });
                    if (check) allCategory.push(cat);
                    check = true;
                });
            });
            return allCategory;
        });
    }
};

},{"spinal-env-viewer-plugin-bimobjectservice":"19m0a","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2m0Kp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const bimService_1 = require("edfb101c687f070e");
exports.bimObjectManagerService = bimService_1.default;

},{"edfb101c687f070e":"bDCOv"}],"bDCOv":[function(require,module,exports,__globalThis) {
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

},{}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"hebpI":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-documentation.4ee07191.js.map
