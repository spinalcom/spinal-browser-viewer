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
})({"26roo":[function(require,module,exports) {
var _buttons = require("./buttons");
var _panels = require("./vue/panels");
var _dialogs = require("./vue/dialogs");

},{"./buttons":"lvCeF","./vue/panels":"dksIW","./vue/dialogs":"88NF0"}],"lvCeF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPcvueNetwork", ()=>(0, _createNetworkDefault.default));
parcelHelpers.export(exports, "monitorPcvueNetwork", ()=>(0, _monitorNetworkDefault.default));
parcelHelpers.export(exports, "linkPCvueToFloor", ()=>(0, _linkToFloorDefault.default));
var _createNetwork = require("./createNetwork");
var _createNetworkDefault = parcelHelpers.interopDefault(_createNetwork);
var _monitorNetwork = require("./monitorNetwork");
var _monitorNetworkDefault = parcelHelpers.interopDefault(_monitorNetwork);
var _linkToFloor = require("./linkToFloor");
var _linkToFloorDefault = parcelHelpers.interopDefault(_linkToFloor);

},{"./createNetwork":"9lolH","./monitorNetwork":"9hSj3","./linkToFloor":"9bIaj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lolH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelPcvue = require("spinal-model-pcvue");
const { spinalPanelManagerService } = require("687925db7ad0aa9b");
const SIDEBAR = "GraphManagerSideBar";
class CreatePcvueNetwork extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create pcvue organ", "This button allows to Create pcvue organ", {
            icon: "playlist_add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        return Promise.resolve(type === (0, _spinalModelPcvue.PCVUE_ORGAN_TYPE) ? true : -1);
    }
    action(option) {
        // const nodeId = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        spinalPanelManagerService.openPanel("createPCVueNetworkPanel", option);
    }
}
const createPcvueNetwork = new CreatePcvueNetwork();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createPcvueNetwork, [
    3
]);
exports.default = createPcvueNetwork;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-model-pcvue":"UUkXE","687925db7ad0aa9b":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UUkXE":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
const SpinalPCVueDiscoverModel_1 = require("91feb986695b7f74");
exports.SpinalPCVueDiscoverModel = SpinalPCVueDiscoverModel_1.SpinalPCVueDiscoverModel;
const pcvueOrganState_1 = require("21e12eb85a30a95e");
exports.pcvueOrganState = pcvueOrganState_1.pcvueOrganState;
const SpinalOrganConfigModel_1 = require("e873bd348094fe65");
exports.SpinalOrganConfigModel = SpinalOrganConfigModel_1.SpinalOrganConfigModel;
const PCVueListenerModel_1 = require("c9918a4b7666b813");
exports.PCVueListenerModel = PCVueListenerModel_1.PCVueListenerModel;
const constants_1 = require("5b4ba30b2591762e");
exports.PCVUE_ORGAN_TYPE = constants_1.PCVUE_ORGAN_TYPE;

},{"91feb986695b7f74":"7QMFq","21e12eb85a30a95e":"j3uWD","e873bd348094fe65":"7Dhc8","c9918a4b7666b813":"7mIHa","5b4ba30b2591762e":"3WBnk"}],"7QMFq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
 */ const spinal_core_connectorjs_type_1 = require("f39fe1ec9f8c4372");
const uuid_1 = require("bd77d87f2bbb8b3d");
class SpinalPCVueDiscoverModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, organ, network, file){
        super();
        this.add_attr({
            id: uuid_1.v4(),
            state: new spinal_core_connectorjs_type_1.Choice(0, [
                "initial",
                "uploading",
                "uploaded",
                "converting",
                "converted",
                "creating",
                "created",
                "error"
            ]),
            network,
            //@ts-ignore
            file: new spinal_core_connectorjs_type_1.Ptr(file),
            organ: new spinal_core_connectorjs_type_1.Ptr(organ),
            context: new spinal_core_connectorjs_type_1.Ptr(context),
            graph: new spinal_core_connectorjs_type_1.Ptr(graph)
        });
    }
    getGraph() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.graph.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getFile() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.file.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getOrgan() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.organ.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getContext() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.context.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    addToGraph() {
        return new Promise((resolve, reject)=>{
            this.getOrgan().then((organ)=>{
                if (organ.discover) organ.discover.load((list)=>{
                    for(let i = 0; i < list.length; i++){
                        const element = list[i];
                        if (element.id.get() === this.id.get()) return resolve(element);
                    }
                    list.push(this);
                    resolve(this);
                });
                else {
                    organ.add_attr({
                        discover: new spinal_core_connectorjs_type_1.Ptr(new spinal_core_connectorjs_type_1.Lst([
                            this
                        ]))
                    });
                    resolve(this);
                }
            });
        });
    }
    removeToGraph() {
        return new Promise((resolve, reject)=>{
            this.getOrgan().then((organ)=>{
                if (organ.discover) organ.discover.load((list)=>{
                    for(let i = 0; i < list.length; i++){
                        const element = list[i];
                        if (element.id.get() === this.id.get()) {
                            list.splice(i, 1);
                            return resolve(true);
                        }
                    }
                    resolve(false);
                });
                else resolve(false);
            });
        });
    }
    setInitialState() {
        this.state.set("initial");
    }
    setUploadingState() {
        this.state.set("uploading");
    }
    setUploadedState() {
        this.state.set("uploaded");
    }
    setConvertingState() {
        this.state.set("converting");
    }
    setConvertedState() {
        this.state.set("converted");
    }
    setCreatingState() {
        this.state.set("creating");
    }
    setCreatedState() {
        this.state.set("created");
    }
    setErrorState() {
        this.state.set("error");
    }
}
exports.SpinalPCVueDiscoverModel = SpinalPCVueDiscoverModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalPCVueDiscoverModel
]);
exports.default = SpinalPCVueDiscoverModel;

},{"f39fe1ec9f8c4372":"fRH70","bd77d87f2bbb8b3d":"j4KJi"}],"j3uWD":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
var pcvueOrganState;
(function(pcvueOrganState) {
    pcvueOrganState["initial"] = "initial";
    pcvueOrganState["uploading"] = "uploading";
    pcvueOrganState["uploaded"] = "uploaded";
    pcvueOrganState["converting"] = "converting";
    pcvueOrganState["converted"] = "converted";
    pcvueOrganState["creating"] = "creating";
    pcvueOrganState["created"] = "created";
    pcvueOrganState["error"] = "error";
})(pcvueOrganState = exports.pcvueOrganState || (exports.pcvueOrganState = {}));

},{}],"7Dhc8":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinal_core_connectorjs_type_1 = require("3413bd66c02b9e80");
const uuid_1 = require("c9c3ed00427bd148");
const constants_1 = require("c3fa681167054d4d");
class SpinalOrganConfigModel extends spinal_core_connectorjs_type_1.Model {
    constructor(name, type = constants_1.PCVUE_ORGAN_TYPE){
        super();
        this.add_attr({
            id: uuid_1.v4(),
            name,
            type,
            references: {},
            restart: false
        });
    }
    addReference(contextId, spinalNode) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e !== "undefined") return reject("The organ is already linked to this context");
                this.references.mod_attr(contextId, new spinal_core_connectorjs_type_1.Ptr(spinalNode));
                resolve(spinalNode);
            });
        });
        this.references.add_attr({
            [contextId]: new spinal_core_connectorjs_type_1.Ptr(spinalNode)
        });
        return Promise.resolve(spinalNode);
    }
    isReferencedInContext(contextId) {
        if (typeof this.references[contextId] === "undefined") return Promise.resolve(false);
        return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e === "undefined") return resolve(false);
                resolve(true);
            });
        });
    }
    removeReference(contextId) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((node)=>{
                this.references.rem_attr(contextId);
                resolve(node);
            });
        });
    }
}
exports.SpinalOrganConfigModel = SpinalOrganConfigModel;
SpinalOrganConfigModel.TYPE = constants_1.PCVUE_ORGAN_TYPE;
SpinalOrganConfigModel.CONTEXT_TO_ORGAN_RELATION = "hasBmsNetworkOrgan";
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOrganConfigModel
]);
exports.default = SpinalOrganConfigModel;

},{"3413bd66c02b9e80":"fRH70","c9c3ed00427bd148":"j4KJi","c3fa681167054d4d":"3WBnk"}],"3WBnk":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
const PCVUE_ORGAN_TYPE = "PCVUE_ORGAN";
exports.PCVUE_ORGAN_TYPE = PCVUE_ORGAN_TYPE;

},{}],"7mIHa":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinal_core_connectorjs_type_1 = require("484976bb53d41201");
const uuid_1 = require("81489ada89df082");
class PCVueListenerModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, network, organ, monitor){
        super();
        this.add_attr({
            id: uuid_1.v4(),
            listen: true,
            saveTimeSeries: monitor === null || monitor === void 0 ? void 0 : monitor.saveTimeSeries,
            intervalTime: monitor === null || monitor === void 0 ? void 0 : monitor.interval,
            graph: new spinal_core_connectorjs_type_1.Ptr(graph),
            context: new spinal_core_connectorjs_type_1.Ptr(context),
            network: new spinal_core_connectorjs_type_1.Ptr(network),
            organ: new spinal_core_connectorjs_type_1.Ptr(organ)
        });
    }
}
exports.PCVueListenerModel = PCVueListenerModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    PCVueListenerModel
]);
exports.default = PCVueListenerModel;

},{"484976bb53d41201":"fRH70","81489ada89df082":"j4KJi"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"9hSj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelPcvue = require("spinal-model-pcvue");
var _utils = require("../utils/utils");
const { spinalPanelManagerService } = require("5aeab65faa6f59c8");
const SIDEBAR = "GraphManagerSideBar";
class MonitorPcvueNetwork extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("monitor pcvue network", "This button allows to monitor pcvue network", {
            icon: "personal_video",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const id = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        if (type === (0, _spinalModelPcvue.PCVUE_ORGAN_TYPE)) return true;
        if (type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            let network = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
            const networkId = network.getId().get();
            const organ = await (0, _utils.getOrgan)(networkId, contextId);
            return organ && organ.type.get() == (0, _spinalModelPcvue.PCVUE_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    action(option) {
        // const nodeId = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        spinalPanelManagerService.openPanel("monitorPCVuePanel", option);
    }
}
const monitorPcvueNetwork = new MonitorPcvueNetwork();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, monitorPcvueNetwork, [
    3
]);
exports.default = monitorPcvueNetwork;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","5aeab65faa6f59c8":"7Uw4d","spinal-model-pcvue":"UUkXE","../utils/utils":"gp7PE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gp7PE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOrgan", ()=>getOrgan);
parcelHelpers.export(exports, "startMonitoring", ()=>startMonitoring);
parcelHelpers.export(exports, "stopMonitoring", ()=>stopMonitoring);
parcelHelpers.export(exports, "getModel", ()=>getModel);
parcelHelpers.export(exports, "getNetwork", ()=>getNetwork);
parcelHelpers.export(exports, "getNetworkStructure", ()=>getNetworkStructure);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelPcvue = require("spinal-model-pcvue");
async function getOrgan(nodeId, contextId) {
    const network = await getNetwork(nodeId);
    if (!network) return;
    return network.getParents([
        (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
    ]).then((parents)=>{
        const found = parents.find((el)=>{
            if (el && el.contextIds) return el.contextIds[contextId];
        });
        if (found) return found.getElement();
    });
}
async function startMonitoring(graph, contextId, networkId, model, monitorInfo) {
    try {
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        const network = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
        model = model || await this.getModel(network);
        if (model && model != -1) {
            if (monitorInfo.saveTimeSeries) model.saveTimeSeries.set(monitorInfo.saveTimeSeries);
            if (monitorInfo.interval) model.interval.set(monitorInfo.interval);
            model.listen.set(true);
        } else {
            if (!monitorInfo) monitorInfo = {
                listen: true,
                saveTimeSeries: true,
                interval: 300000
            };
            const organ = await getOrgan(network.getId().get(), contextId);
            const spinalListener = new (0, _spinalModelPcvue.PCVueListenerModel)(graph, context, network, organ, monitorInfo);
            network.info.add_attr({
                listener: new Ptr(spinalListener)
            });
            return spinalListener;
        }
    } catch (error) {
        console.error(error);
    }
}
async function stopMonitoring(networkId, model) {
    try {
        if (!model) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
            model = await this.getModel(realNode);
        }
        if (model != -1) model.listen.set(false);
    } catch (error) {}
}
async function getModel(realNode) {
    if (realNode.info.listener) return new Promise((resolve, reject)=>{
        realNode.info.listener.load((data)=>resolve(data));
    });
    else return Promise.resolve(-1);
}
async function getNetwork(nodeId) {
    const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
    const type = realNode.getType().get();
    if (type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return realNode;
    if (type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
        const [network] = await realNode.getParents([
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
        ]);
        return network;
    }
}
async function getNetworkStructure() {
    const contexts = getContexts();
    const promises = contexts.map(async (context)=>{
        context.networks = await getNetworks(context.id);
        return context;
    });
    return Promise.all(promises);
}
function getContexts() {
    const contexts = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("Network");
    return contexts.map((el)=>el.info.get());
}
async function getNetworks(contextId) {
    // const networks = await SpinalGraphService.findInContextByType(
    //   contextId,
    //   contextId,
    //   SpinalBmsNetwork.nodeTypeName
    // );
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(contextId, contextId, (node)=>{
        if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            return true;
        }
        return false;
    }).then((networks)=>{
        const promises = networks.map(async (networkRef)=>{
            const network = networkRef.get();
            network.devices = await getDevices(contextId, network.id);
            return network;
        });
        return Promise.all(promises);
    }).catch((err)=>{
        return [];
    });
}
async function getDevices(contextId, networkId) {
    const devices = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(networkId, contextId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName);
    return devices.map((el)=>el.get());
}

},{"spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-graph-service":"9n7zp","spinal-model-pcvue":"UUkXE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bIaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelPcvue = require("spinal-model-pcvue");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _utils = require("../utils/utils");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { spinalPanelManagerService } = require("898749f49eed2c03");
const SIDEBAR = "GraphManagerSideBar";
class LinkPcvueDevicesToFloor extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link Floor to PCVue Devices", "This button allows to Link Devices to Floor", {
            icon: "add_link",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
        const type = option.selectedNode.type.get();
        const types = [
            constants.CONTEXT_TYPE,
            constants.BUILDING_TYPE,
            constants.FLOOR_TYPE
        ];
        return Promise.resolve(types.indexOf(type));
    // if(type === SpinalBmsNetwork.nodeTypeName || type === SpinalBmsDevice.nodeTypeName) {
    //    const id = option.selectedNode.id.get();
    //    const contextId = option.context.id.get();
    //    const organ = await getOrgan(id,contextId);
    //    return organ && organ.type.get() === PCVUE_ORGAN_TYPE ? true : -1;
    // }
    // return -1;
    }
    action(option) {
        // const nodeId = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        spinalPanelManagerService.openPanel("linkPcvueDeviceToFloor", option);
    }
}
const linkPcvueDevicesToFloor = new LinkPcvueDevicesToFloor();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkPcvueDevicesToFloor, [
    3
]);
exports.default = linkPcvueDevicesToFloor;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-model-pcvue":"UUkXE","spinal-model-bmsnetwork":"gzkbg","../utils/utils":"gp7PE","spinal-env-viewer-context-geographic-service":"5QjJf","898749f49eed2c03":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dksIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _createPCVueNetworkVue = require("./createPCVueNetwork.vue");
var _createPCVueNetworkVueDefault = parcelHelpers.interopDefault(_createPCVueNetworkVue);
var _monitorPCVueVue = require("./monitorPCVue.vue");
var _monitorPCVueVueDefault = parcelHelpers.interopDefault(_monitorPCVueVue);
const panels = [
    {
        name: "createPCVueNetworkPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createPCVueNetworkVueDefault.default)),
        panel: {
            title: "Create PCVue Network",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "620px",
            height: "670px",
            left: "400px"
        }
    },
    {
        name: "monitorPCVuePanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _monitorPCVueVueDefault.default)),
        panel: {
            title: "Monitor PCVue Network",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "620px",
            height: "670px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./createPCVueNetwork.vue":"SkJq0","./monitorPCVue.vue":"9WNkk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"SkJq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("94728d88398b84c8");
    if (script.__esModule) script = script.default;
    script.render = require("7f6f5459c2762e39").render;
    script.staticRenderFns = require("7f6f5459c2762e39").staticRenderFns;
    script._scopeId = "data-v-c3d03e";
    script.__cssModules = require("bedd869b258588c0").default;
    require("a6061bfe10b156c1").default(script);
    script.__scopeId = "data-v-c3d03e";
    script.__file = "createPCVueNetwork.vue";
};
initialize();
exports.default = script;

},{"94728d88398b84c8":"gX4Ew","7f6f5459c2762e39":"awqfl","bedd869b258588c0":"cnURL","a6061bfe10b156c1":"cC9RX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gX4Ew":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelPcvue = require("spinal-model-pcvue");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _uploadVue = require("../components/upload.vue");
var _uploadVueDefault = parcelHelpers.interopDefault(_uploadVue);
var _utils = require("../../utils/utils");
var scriptExports = {
    name: "createPCVueNetworkPanel",
    components: {
        "upload-component": (0, _uploadVueDefault.default)
    },
    data () {
        this.context;
        this.organ;
        this.graph;
        this.STATES = (0, _spinalModelPcvue.pcvueOrganState);
        return {
            network: {
                name: ""
            },
            message: "",
            state: this.STATES.initial
        };
    },
    methods: {
        async opened ({ graph, context, selectedNode }) {
            this.state = this.STATES.initial;
            this.context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(context.id.get());
            this.organ = await selectedNode.element.load();
            this.graph = graph;
            this.network.name = "";
        },
        closed () {},
        save (argFile) {
            // this.network.interval = this.network.interval || 300000;
            const file = new (0, _spinalCoreConnectorjsType.File)(argFile.name, new (0, _spinalCoreConnectorjsType.Path)(argFile), undefined);
            const spinalPCVueDiscoverModel = new (0, _spinalModelPcvue.SpinalPCVueDiscoverModel)(this.graph, this.context, this.organ, this.network, file);
            const bindId = spinalPCVueDiscoverModel.state.bind(()=>{
                this.state = spinalPCVueDiscoverModel.state.get();
                if (this.state === (0, _spinalModelPcvue.pcvueOrganState).created) spinalPCVueDiscoverModel.state.unbind(bindId);
            });
            spinalPCVueDiscoverModel.setUploadingState();
            spinalPCVueDiscoverModel.addToGraph();
        }
    },
    computed: {
        icon () {
            if (this.state === this.STATES.created) return "file_download_done";
            if (this.state === this.STATES.error) return "error";
        }
    },
    filters: {
        capitalize (value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-pcvue":"UUkXE","spinal-env-viewer-graph-service":"9n7zp","spinal-core-connectorjs_type":"fRH70","../components/upload.vue":"j8N7F","../../utils/utils":"gp7PE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8N7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("940fd97729447729");
    if (script.__esModule) script = script.default;
    script.render = require("9c96ea6a2b2231a1").render;
    script.staticRenderFns = require("9c96ea6a2b2231a1").staticRenderFns;
    script._scopeId = "data-v-f09447";
    script.__cssModules = require("1a0c5a1d1dbecca6").default;
    require("ec51fb6298879da2").default(script);
    script.__scopeId = "data-v-f09447";
    script.__file = "upload.vue";
};
initialize();
exports.default = script;

},{"940fd97729447729":"hjIA8","9c96ea6a2b2231a1":"5tY8l","1a0c5a1d1dbecca6":"bJ5el","ec51fb6298879da2":"fScZ2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjIA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "uploadComponent",
    props: {
        network: {}
    },
    data () {
        return {
            file: undefined
        };
    },
    methods: {
        save () {
            this.$emit("save", this.file);
        },
        addFile (e) {
            let droppedFiles = e.dataTransfer.files;
            if (!droppedFiles || !droppedFiles.length) return;
            this.file = droppedFiles[0];
        // [...droppedFiles].forEach((f) => {
        // 	this.file.push(f);
        // });
        },
        uploadFile () {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
            input.click();
            input.addEventListener("change", async (event)=>{
                this.file = event.target.files[0];
            }, false);
        },
        removeFile () {
            // this.file = this.file.filter((f) => {
            // 	return f != file;
            // });
            this.file = undefined;
        }
    },
    computed: {
        disableNetwork () {
            return this.network.name.trim().length === 0 || this.network.listen && !this.network.interval || typeof this.file === "undefined";
        },
        disableDelete () {
            return typeof this.file === "undefined";
        }
    },
    filters: {
        kb (val) {
            return Math.floor(val / 1024);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tY8l":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "upload_container"
    }, [
        _c("div", {
            staticClass: "name"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Network name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.network.name,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "name", $$v);
                        },
                        expression: "network.name"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "upload",
            on: {
                "drop": function($event) {
                    $event.preventDefault();
                    return _vm.addFile.apply(null, arguments);
                },
                "dragover": function($event) {
                    $event.preventDefault();
                }
            }
        }, [
            !_vm.file ? _c("div", [
                _c("h3", [
                    _vm._v("Drag and drop xlsx file to upload")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.uploadFile
                    }
                }, [
                    _vm._v("Or click here to upload file")
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.file ? _c("div", {
                staticClass: "fileInfo"
            }, [
                _c("h3", [
                    _vm._v("File uploaded")
                ]),
                _vm._v(" "),
                _c("div", {
                    staticStyle: {
                        "color": "#448aff"
                    }
                }, [
                    _vm._v("\n        " + _vm._s(_vm.file.name) + " (" + _vm._s(_vm._f("kb")(_vm.file.size)) + " kb)\n      ")
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "buttons"
                }, [
                    _c("md-button", {
                        staticClass: "md-primary",
                        attrs: {
                            "disabled": _vm.disableNetwork
                        },
                        on: {
                            "click": _vm.save
                        }
                    }, [
                        _vm._v("Create Network")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-accent",
                        attrs: {
                            "disabled": _vm.disableDelete
                        },
                        on: {
                            "click": _vm.removeFile
                        }
                    }, [
                        _vm._v("Delete file")
                    ])
                ], 1)
            ]) : _vm._e()
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bJ5el":[function() {},{}],"fScZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awqfl":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "panel_container"
    }, [
        _vm.state === _vm.STATES.initial ? _c("upload-component", {
            attrs: {
                "network": _vm.network
            },
            on: {
                "save": _vm.save
            }
        }) : _c("div", {
            staticClass: "states"
        }, [
            _c("div", {
                staticClass: "content"
            }, [
                _c("div", {
                    staticClass: "title"
                }, [
                    _vm._v(_vm._s(_vm._f("capitalize")(_vm.state)))
                ]),
                _vm._v(" "),
                _vm.state === _vm.STATES.created || _vm.state === _vm.STATES.error ? _c("div", {
                    staticClass: "icon"
                }, [
                    _c("md-icon", {
                        staticClass: "md-size-5x"
                    }, [
                        _vm._v(_vm._s(_vm.icon))
                    ])
                ], 1) : _c("div", {
                    staticClass: "progress"
                }, [
                    _c("md-progress-bar", {
                        attrs: {
                            "md-mode": "indeterminate"
                        }
                    })
                ], 1)
            ])
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cnURL":[function() {},{}],"cC9RX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WNkk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6ce4bb97a0b744fe");
    if (script.__esModule) script = script.default;
    script.render = require("ecf3598e629cbc29").render;
    script.staticRenderFns = require("ecf3598e629cbc29").staticRenderFns;
    script._scopeId = "data-v-942407";
    script.__cssModules = require("a33fe55f2165b2a2").default;
    require("ba235e9187b56b9a").default(script);
    script.__scopeId = "data-v-942407";
    script.__file = "monitorPCVue.vue";
};
initialize();
exports.default = script;

},{"6ce4bb97a0b744fe":"gcRsF","ecf3598e629cbc29":"anRmK","a33fe55f2165b2a2":"1dibw","ba235e9187b56b9a":"8SVmy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcRsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _deviceMonitorVue = require("../components/deviceMonitor.vue");
var _deviceMonitorVueDefault = parcelHelpers.interopDefault(_deviceMonitorVue);
var scriptExports = {
    name: "createPCVueNetworkPanel",
    data () {
        this.PAGES = {
            selection: 0,
            loading: 1,
            creation: 2,
            success: 3,
            error: 4
        };
        return {
            networks: [],
            pageSelected: this.PAGES.creation,
            context: undefined,
            gaph: undefined
        };
    },
    components: {
        "monitor-component": (0, _deviceMonitorVueDefault.default)
    },
    methods: {
        async opened ({ context, graph, selectedNode }) {
            this.pageSelected = this.PAGES.loading;
            this.context = context;
            this.graph = graph;
            this.getNetwork(context.get(), selectedNode.get()).then((result)=>{
                this.networks = result;
                this.pageSelected = this.PAGES.selection;
            }).catch(()=>{
                this.pageSelected = this.PAGES.error;
            });
        },
        closed () {},
        getNetwork (context, selectedNode) {
            if (selectedNode.type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return Promise.resolve([
                selectedNode
            ]);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(selectedNode.id, context.id, (node)=>{
                if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    return true;
                }
                return false;
            }).then((result)=>{
                return result.map((el)=>el.get());
            });
        },
        startAllMonitoring () {
            this.networks.forEach((network)=>{
                const networkId = network.id;
                const [ref] = this.$refs[networkId];
                if (ref) ref.startMonitoring();
            });
        },
        restartAllMonitoring () {
            this.networks.forEach((network)=>{
                const networkId = network.id;
                const [ref] = this.$refs[networkId];
                if (ref) ref.restartMonitoring();
            });
        },
        stopAllMonitoring () {
            this.networks.forEach((network)=>{
                const networkId = network.id;
                const [ref] = this.$refs[networkId];
                if (ref) ref.stopMonitoring();
            });
        },
        changeTimeSeries (value) {
            this.networks.forEach((network)=>{
                const networkId = network.id;
                const [ref] = this.$refs[networkId];
                if (ref) ref.updateTimeSeries(value);
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","../components/deviceMonitor.vue":"iHc9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHc9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("87502bcc8a848d6e");
    if (script.__esModule) script = script.default;
    script.render = require("2c12a2fd268e17cb").render;
    script.staticRenderFns = require("2c12a2fd268e17cb").staticRenderFns;
    script._scopeId = "data-v-c1e29c";
    script.__cssModules = require("2d806bee07de25f6").default;
    require("b8bdca4a8acf7a8d").default(script);
    script.__scopeId = "data-v-c1e29c";
    script.__file = "deviceMonitor.vue";
};
initialize();
exports.default = script;

},{"87502bcc8a848d6e":"bzOyE","2c12a2fd268e17cb":"90kSF","2d806bee07de25f6":"hcdeW","b8bdca4a8acf7a8d":"1Rpyb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzOyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "networkMonitoring",
    props: {
        network: {},
        contextId: {},
        graph: {}
    },
    data () {
        return {
            saveTimeSeries: false,
            model: undefined
        };
    },
    async created () {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.network.id);
        this.model = await (0, _utils.getModel)(realNode);
        if (this.model && this.model.saveTimeSeries) this.saveTimeSeries = this.model.saveTimeSeries.get();
    },
    mounted () {},
    methods: {
        async startMonitoring () {
            const monitor = {
                saveTimeSeries: this.saveTimeSeries,
                interval: 300000
            };
            await (0, _utils.startMonitoring)(this.graph, this.contextId, this.network.id, this.model, monitor);
        },
        stopMonitoring () {
            (0, _utils.stopMonitoring)(this.network.id, this.model);
        },
        async restartMonitoring () {
            await this.stopMonitoring();
            setTimeout(this.startMonitoring.bind(this), 2000);
        },
        updateTimeSeries (value) {
            this.saveTimeSeries = value;
        },
        //////////////////////////////////////////    ////              DISABLED                    //////////////////////////////////////////
        disabledRestart () {
            const model = this.model;
            return !(model && model !== -1 && model.listen && model.listen.get());
        },
        disabledStart () {
            const model = this.model;
            return model && model !== -1 && model.listen && model.listen.get();
        },
        disabledStop () {
            const model = this.model;
            return !(model && model !== -1 && model.listen && model.listen.get());
        }
    },
    computed: {
        state () {
            return this.model && this.model.listen && this.model.listen.get() ? "Running" : "Stopped";
        }
    },
    watch: {
        saveTimeSeries () {
            if (this.model && this.model !== -1) {
                if (this.model.saveTimeSeries) this.model.saveTimeSeries.set(this.saveTimeSeries);
                else this.model.add_attr({
                    saveTimeSeries: this.saveTimeSeries
                });
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../utils/utils":"gp7PE","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"90kSF":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "device"
    }, [
        _c("div", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.network.name,
                    expression: "network.name"
                }
            ],
            staticClass: "name"
        }, [
            _vm._v("\n    " + _vm._s(_vm.network.name) + "\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "state",
            class: _vm.state
        }, [
            _vm._v("\n    " + _vm._s(_vm.state) + "\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "actions"
        }, [
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "start",
                        expression: "'start'"
                    }
                ],
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "disabled": _vm.disabledStart()
                },
                on: {
                    "click": _vm.startMonitoring
                }
            }, [
                _c("md-icon", [
                    _vm._v("play_arrow")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "restart",
                        expression: "'restart'"
                    }
                ],
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "disabled": _vm.disabledRestart()
                },
                on: {
                    "click": _vm.restartMonitoring
                }
            }, [
                _c("md-icon", [
                    _vm._v("replay")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "stop",
                        expression: "'stop'"
                    }
                ],
                staticClass: "md-icon-button md-accent",
                attrs: {
                    "disabled": _vm.disabledStop()
                },
                on: {
                    "click": _vm.stopMonitoring
                }
            }, [
                _c("md-icon", [
                    _vm._v("stop")
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "block"
            }, [
                _c("div", {
                    staticClass: "input"
                }, [
                    _c("md-checkbox", {
                        staticClass: "md-primary",
                        model: {
                            value: _vm.saveTimeSeries,
                            callback: function($$v) {
                                _vm.saveTimeSeries = $$v;
                            },
                            expression: "saveTimeSeries"
                        }
                    }, [
                        _vm._v("Save TimeSeries")
                    ])
                ], 1)
            ])
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hcdeW":[function() {},{}],"1Rpyb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"anRmK":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "monitor_container"
    }, [
        _vm.pageSelected === _vm.PAGES.selection ? _c("div", {
            staticClass: "manage_container"
        }, [
            _c("div", {
                staticClass: "header"
            }, [
                _c("div", [
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "start all devices",
                                expression: "'start all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.startAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("play_arrow")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "restart all devices",
                                expression: "'restart all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.restartAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("replay")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "stop all devices",
                                expression: "'stop all devices'"
                            }
                        ],
                        staticClass: "md-icon-button md-accent",
                        on: {
                            "click": _vm.stopAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-accent"
                        }, [
                            _vm._v("stop")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary",
                        on: {
                            "click": function($event) {
                                return _vm.changeTimeSeries(true);
                            }
                        }
                    }, [
                        _vm._v("Save all time series\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.changeTimeSeries(false);
                            }
                        }
                    }, [
                        _vm._v("Stop saving all time\n          series")
                    ])
                ], 1)
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "devices_list md-scrollbar"
            }, _vm._l(_vm.networks, function(network) {
                return _c("monitor-component", {
                    key: network.id,
                    ref: network.id,
                    refInFor: true,
                    attrs: {
                        "network": network,
                        "contextId": _vm.context.id,
                        "graph": _vm.graph
                    }
                });
            }), 1)
        ]) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
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
                _vm._v("close")
            ])
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1dibw":[function() {},{}],"8SVmy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88NF0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkDeviceToFloorVue = require("./linkDeviceToFloor.vue");
var _linkDeviceToFloorVueDefault = parcelHelpers.interopDefault(_linkDeviceToFloorVue);
const { SpinalMountExtention } = require("261fe0be1b7f4384");
const dialogs = [
    {
        name: "linkPcvueDeviceToFloor",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkDeviceToFloorVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","261fe0be1b7f4384":"7Uw4d","./linkDeviceToFloor.vue":"gjOMI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjOMI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("82b9f5de7d7f699f");
    if (script.__esModule) script = script.default;
    script.render = require("55189b08b653ad41").render;
    script.staticRenderFns = require("55189b08b653ad41").staticRenderFns;
    script._scopeId = "data-v-bcd704";
    script.__cssModules = require("2c45b44af336bd68").default;
    require("446eaf599de65e8").default(script);
    script.__scopeId = "data-v-bcd704";
    script.__file = "linkDeviceToFloor.vue";
};
initialize();
exports.default = script;

},{"82b9f5de7d7f699f":"eprkb","55189b08b653ad41":"1kRpo","2c45b44af336bd68":"iNjYz","446eaf599de65e8":"bYM0J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eprkb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
var _linkDeviceToFloorUtils = require("../../utils/linkDeviceToFloorUtils");
var _function = require("../../utils/function");
var _linkComponentVue = require("../components/linkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var _functionsComponentVue = require("../components/functionsComponent.vue");
var _functionsComponentVueDefault = parcelHelpers.interopDefault(_functionsComponentVue);
var scriptExports = {
    name: "linkPCvueToFloor",
    components: {
        "link-component": (0, _linkComponentVueDefault.default),
        "functions-component": (0, _functionsComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.geographicStartId;
        this.geographicContextId;
        this.PAGES = {
            selection: 0,
            loading: 1,
            success: 2,
            error: 3,
            functions: 4
        };
        return {
            showDialog: true,
            state: this.PAGES.selection,
            contexts: [],
            networks: [],
            devices: [],
            contextSelected: undefined,
            networkSelected: undefined,
            deviceSelected: undefined,
            functions: {
                code: (0, _function.defaultFunction)()
            }
        };
    },
    mounted () {},
    methods: {
        async opened ({ selectedNode, context, graph }) {
            this.state = this.PAGES.loading;
            // this.selectedNodeId =  = selectedNode.id.get();
            this.geographicStartId = selectedNode.id.get();
            this.geographicContextId = context.id.get();
            (0, _utils.getNetworkStructure)().then((contexts)=>{
                this.contexts = contexts;
                this.state = this.PAGES.selection;
            }).catch((err)=>{
                console.error(err);
                this.state = this.PAGES.error;
            });
        },
        linkNodes () {
            this.state = this.PAGES.loading;
            const devices = this.getDevices();
            (0, _linkDeviceToFloorUtils.linkDevicesToFloorId)(this.geographicContextId, this.geographicStartId, devices, this.functions.code).then(()=>{
                this.state = this.PAGES.success;
            }).catch((err)=>{
                console.error(err);
                this.state = this.PAGES.error;
            });
        },
        getDevices () {
            if (!this.deviceSelected) return this.devices;
            return this.devices.filter((el)=>el.id === this.deviceSelected);
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                confirm: closeResult
            });
        },
        removed (option) {
            this.showDialog = false;
        },
        goToPrevious () {
            if (this.state === this.PAGES.functions) this.state = this.PAGES.selection;
        },
        goToNext () {
            if (this.state === this.PAGES.selection) this.state = this.PAGES.functions;
        },
        /**Selection */ selectContext (id) {
            this.contextSelected = this.contextSelected === id ? undefined : id;
        },
        selectNetwork (id) {
            this.networkSelected = this.networkSelected === id ? undefined : id;
        },
        selectDevices (id) {
            this.deviceSelected = this.deviceSelected === id ? undefined : id;
        },
        /* Update */ updateNetworks () {
            this.networks = [];
            this.devices = [];
            if (this.contextSelected) {
                let val = this.contexts.find((el)=>el.id === this.contextSelected);
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
    },
    computed: {
        icon () {
            return this.state == this.PAGES.success ? "file_download_done" : "error";
        },
        disabledLinkButton () {
            return this.state != this.PAGES.functions || !this.networkSelected;
        },
        disabledNextButton () {
            return this.state != this.PAGES.selection || !this.networkSelected;
        },
        disabledPreviousButton () {
            return this.state != this.PAGES.functions;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../utils/utils":"gp7PE","../../utils/linkDeviceToFloorUtils":"2Ku6K","../../utils/function":"iT6LU","../components/linkComponent.vue":"74liI","../components/functionsComponent.vue":"hJoa8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Ku6K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linkDevicesToFloorId", ()=>linkDevicesToFloorId);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
async function linkDevicesToFloorId(geographicContextId, geographicStartId, pcVueDevices, func, pcvueContextId, pcvueStartId) {
    const floors = await getFloors(geographicContextId, geographicStartId);
    const devices = pcVueDevices && Array.isArray(pcVueDevices) && pcVueDevices.length > 0 ? pcVueDevices : await getDevices(pcvueContextId, pcvueStartId);
    const map = getMap(floors, devices, func);
    const promises = Array.from(map.keys()).map((key)=>{
        const ids = map.get(key);
        return createNodeLinks(key, ids);
    });
    return Promise.all(promises);
}
async function createNodeLinks(parentId, childrenIds) {
    try {
        const promises = childrenIds.map((childId)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(parentId, childId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)));
        return Promise.all(promises);
    } catch (error) {
        return false;
    }
}
function getFloors(geographicContextId, geographicStartId) {
    return findInContext(geographicContextId, geographicStartId, (0, _constants.FLOOR_TYPE));
}
function getDevices(pcvueContextId, pcvueStartId) {
    return findInContext(pcvueContextId, pcvueStartId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName);
}
function findInContext(contextId, startId, type) {
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startId, contextId, (node)=>{
        if (node.getType().get() === type) {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            return true;
        }
        return false;
    }).then((result)=>{
        return result.map((el)=>el.get());
    }).catch((err)=>{
        return [];
    });
}
function getMap(floors, devices, func) {
    const floorsCopy = Object.assign([], floors);
    const devicesCopy = Object.assign([], devices);
    const map = new Map();
    while(floorsCopy.length > 0 && devicesCopy.length > 0){
        const floor = floorsCopy.shift();
        const indexes = getIndexes(floor.name, devicesCopy, func);
        const res = [];
        for (let idx of indexes){
            const item = devicesCopy[idx];
            res.push(item.id);
        }
        map.set(floor.id, res);
    }
    return map;
}
function getIndexes(floorName, devices, callback) {
    return devices.map((el, idx)=>eval(`(${callback})(floorName, el.name)`) ? idx : undefined).filter((el)=>typeof el !== "undefined");
}

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iT6LU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultFunction", ()=>defaultFunction);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
function defaultFunction() {
    return (0, _dedentDefault.default)`
  /**
   *   1 - Don't change the function name and parameters
   *   2 - This function must return a boolean
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */
   function linkFloorToDevice(floorName, deviceName) {
     const [floor] = floorName.match(/\d+$/g) || []; // return the number at the end of the name
     console.log("floor",floor)
     if(!floor) return false;

     const [deviceLevel] = deviceName.match(/\d+$/g) || [];
     console.log("deviceLevel",deviceLevel)
     if(!deviceLevel) return false;
     const [letter] = deviceName.match(/\w\d+$/g) || [];
     console.log("letter",letter);

     const value = (!!letter) && letter[0].toUpperCase() == 'S' ? '-' + deviceLevel : deviceLevel;
     console.log(value)
     return parseInt(floor) == parseInt(value);
   }
    `;
}

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74liI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("efbc34ad588d0ce2");
    if (script.__esModule) script = script.default;
    script.render = require("de42521a62b98241").render;
    script.staticRenderFns = require("de42521a62b98241").staticRenderFns;
    script._scopeId = "data-v-fe98dc";
    script.__cssModules = require("81249aeac22893f0").default;
    require("98fc683203d662b1").default(script);
    script.__scopeId = "data-v-fe98dc";
    script.__file = "linkComponent.vue";
};
initialize();
exports.default = script;

},{"efbc34ad588d0ce2":"1KgDa","de42521a62b98241":"c5U3F","81249aeac22893f0":"cjtyx","98fc683203d662b1":"drlHx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KgDa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkTemplateVue = require("./linkTemplate.vue");
var _linkTemplateVueDefault = parcelHelpers.interopDefault(_linkTemplateVue);
var scriptExports = {
    name: "linkComponent",
    components: {
        "link-template": (0, _linkTemplateVueDefault.default)
    },
    props: {
        contexts: {
            type: Array,
            required: true
        },
        networks: {
            type: Array,
            required: true
        },
        devices: {
            type: Array,
            required: true
        },
        contextSelected: {
            type: String | undefined,
            required: true
        },
        networkSelected: {
            type: String | undefined,
            required: true
        },
        deviceSelected: {
            type: String | undefined,
            required: true
        }
    },
    methods: {
        selectContext (id) {
            this.$emit("selectContext", id);
        },
        selectNetwork (id) {
            this.$emit("selectNetwork", id);
        },
        selectDevices (id) {
            this.$emit("selectDevices", id);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkTemplate.vue":"ju6tO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju6tO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("dd59b6f0edabdf6a");
    if (script.__esModule) script = script.default;
    script.render = require("abaf056d11e8efef").render;
    script.staticRenderFns = require("abaf056d11e8efef").staticRenderFns;
    script._scopeId = "data-v-2ab41d";
    script.__cssModules = require("d75d911cc16e5670").default;
    require("a757c668b2e6b913").default(script);
    script.__scopeId = "data-v-2ab41d";
    script.__file = "linkTemplate.vue";
};
initialize();
exports.default = script;

},{"dd59b6f0edabdf6a":"jKRV7","abaf056d11e8efef":"gV24C","d75d911cc16e5670":"hMfkP","a757c668b2e6b913":"c3Ic8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKRV7":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gV24C":[function(require,module,exports) {
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
                        "selected": item.id === _vm.itemSelected
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

},{}],"hMfkP":[function() {},{}],"c3Ic8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c5U3F":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "selections"
    }, [
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": "Contexts",
                    "data": _vm.contexts,
                    "itemSelected": _vm.contextSelected
                },
                on: {
                    "select": _vm.selectContext
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": "Networks",
                    "data": _vm.networks,
                    "itemSelected": _vm.networkSelected
                },
                on: {
                    "select": _vm.selectNetwork
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": "Devices",
                    "data": _vm.devices,
                    "itemSelected": _vm.deviceSelected
                },
                on: {
                    "select": _vm.selectDevices
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cjtyx":[function() {},{}],"drlHx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJoa8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6c182840d8af28e4");
    if (script.__esModule) script = script.default;
    script.render = require("c677410ef48517b0").render;
    script.staticRenderFns = require("c677410ef48517b0").staticRenderFns;
    script._scopeId = "data-v-7c2365";
    script.__cssModules = require("8c15db40f0c3efd8").default;
    require("13ba4cb55ae15367").default(script);
    script.__scopeId = "data-v-7c2365";
    script.__file = "functionsComponent.vue";
};
initialize();
exports.default = script;

},{"6c182840d8af28e4":"ahLed","c677410ef48517b0":"9Usqu","8c15db40f0c3efd8":"hkj1X","13ba4cb55ae15367":"7nkRx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahLed":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalCodeMirrorVue = require("./SpinalCodeMirror.vue");
var _spinalCodeMirrorVueDefault = parcelHelpers.interopDefault(_spinalCodeMirrorVue);
var scriptExports = {
    name: "functionsComponent",
    components: {
        "spinal-code-mirror": (0, _spinalCodeMirrorVueDefault.default)
    },
    props: {
        functions: {
            type: Object,
            require: true
        }
    },
    methods: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalCodeMirror.vue":"7B1CX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7B1CX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("97de9e374b1b622f");
    if (script.__esModule) script = script.default;
    script.render = require("28be7aed5cd012e").render;
    script.staticRenderFns = require("28be7aed5cd012e").staticRenderFns;
    script._scopeId = "data-v-c6ed54";
    script.__cssModules = require("136a88a5ae90e113").default;
    require("76ee7012c7a172ca").default(script);
    script.__scopeId = "data-v-c6ed54";
    script.__file = "SpinalCodeMirror.vue";
};
initialize();
exports.default = script;

},{"97de9e374b1b622f":"cxWpy","28be7aed5cd012e":"EHnlp","136a88a5ae90e113":"01Mw8","76ee7012c7a172ca":"5dtbf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxWpy":[function(require,module,exports) {
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

},{"vue-codemirror":"avd3d","codemirror/mode/javascript/javascript":"6YWC8","codemirror/addon/selection/active-line":"cUu2f","codemirror/addon/selection/mark-selection":"aTwo9","codemirror/addon/search/searchcursor":"5LZeT","codemirror/addon/hint/show-hint":"i59ce","codemirror/addon/hint/javascript-hint":"69sna","codemirror/addon/scroll/annotatescrollbar":"dqF5T","codemirror/addon/search/matchesonscrollbar":"6axA6","codemirror/addon/search/match-highlighter":"ep4wi","codemirror/mode/clike/clike":"2HhSs","codemirror/addon/edit/matchbrackets":"fNcgb","codemirror/addon/comment/comment":"6b2Hy","codemirror/addon/dialog/dialog":"k1Qcs","codemirror/addon/search/search":"a81NO","codemirror/keymap/sublime":"bjKP1","codemirror/addon/fold/brace-fold":"bBZ8N","codemirror/addon/fold/comment-fold":"4TN95","codemirror/addon/fold/foldcode":"X0E3X","codemirror/addon/fold/foldgutter":"2v6kd","codemirror/addon/fold/indent-fold":"cRLCr","codemirror/addon/fold/markdown-fold":"j14BT","codemirror/addon/fold/xml-fold":"gYEyJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EHnlp":[function(require,module,exports) {
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

},{}],"01Mw8":[function() {},{}],"5dtbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Usqu":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_container"
    }, [
        _c("div", {
            staticClass: "subcontent"
        }, [
            _c("div", {
                staticClass: "title"
            }, [
                _vm._v("Function")
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "content"
            }, [
                _c("div", {
                    staticClass: "div_code"
                }, [
                    _c("div", {
                        staticClass: "text_editor"
                    }, [
                        _c("spinal-code-mirror", {
                            staticClass: "editorContainer",
                            attrs: {
                                "codeObj": _vm.functions
                            }
                        })
                    ], 1)
                ])
            ])
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hkj1X":[function() {},{}],"7nkRx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kRpo":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "pcvue_link_dialog_content",
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
        _c("md-dialog-title", {
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Link floor(s) to devices\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "_dialogContent"
        }, [
            _vm.state === _vm.PAGES.selection ? _c("link-component", {
                attrs: {
                    "contexts": _vm.contexts,
                    "networks": _vm.networks,
                    "devices": _vm.devices,
                    "contextSelected": _vm.contextSelected,
                    "networkSelected": _vm.networkSelected,
                    "deviceSelected": _vm.deviceSelected
                },
                on: {
                    "selectContext": _vm.selectContext,
                    "selectNetwork": _vm.selectNetwork,
                    "selectDevices": _vm.selectDevices
                }
            }) : _vm.state === _vm.PAGES.functions ? _c("functions-component", {
                attrs: {
                    "functions": _vm.functions
                }
            }) : _vm.state === _vm.PAGES.loading ? _c("div", {
                staticClass: "states"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _c("div", {
                staticClass: "states icon"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v(_vm._s(_vm.icon))
                ])
            ], 1)
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
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledPreviousButton
                },
                on: {
                    "click": _vm.goToPrevious
                }
            }, [
                _vm._v("Previous")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledNextButton
                },
                on: {
                    "click": _vm.goToNext
                }
            }, [
                _vm._v("Next")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledLinkButton
                },
                on: {
                    "click": _vm.linkNodes
                }
            }, [
                _vm._v("Link")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iNjYz":[function() {},{}],"bYM0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-pcvue-manager.4c6f1563.js.map
