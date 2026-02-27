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
})({"lCxRJ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalForgeViewer = void 0;
const SpinalForgeViewer_1 = require("20d41fec0f5c41e1");
Object.defineProperty(exports, "SpinalForgeViewer", {
    enumerable: true,
    get: function() {
        return SpinalForgeViewer_1.SpinalForgeViewer;
    }
});
const g_win = typeof window === "undefined" ? global : window;
if (typeof g_win.spinal === "undefined") g_win.spinal = {};
if (typeof g_win.spinal.SpinalForgeViewer === "undefined") {
    g_win.spinal.SpinalForgeViewer = new SpinalForgeViewer_1.SpinalForgeViewer();
    g_win.spinal.BimObjectService = g_win.spinal.SpinalForgeViewer.bimObjectService;
}

},{"20d41fec0f5c41e1":"b8FK9"}],"b8FK9":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalForgeViewer = void 0;
const spinal_env_viewer_graph_service_1 = require("b56d331c57e6f89d");
const BimObjectService_1 = require("cdacbcd213eb7723");
const Constants_1 = require("420a4315dd6dd12e");
const utils_1 = require("7ea57096748cb98d");
const SceneHelper_1 = require("13f6dc54f0606a8");
const axios_1 = require("718e3a65d8e0425d");
const SceneAlignMethod_1 = require("1d4ddc000ca7a7ff");
var THREE = require("cd8d1b969b97234d");
class SpinalForgeViewer {
    constructor(){
        this.bimObjectService = new BimObjectService_1.BimObjectService();
        this.overlayName = 'spinal-material-overlay';
    }
    initialize(viewerManager) {
        if (typeof this.initialized === 'undefined') this.initialized = new Promise((resolve)=>{
            this.viewerManager = viewerManager;
            const addEventListen = ()=>{
                this.viewerManager.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, (event)=>{
                    if (typeof event.selections !== 'undefined' && event.selections.length > 0) {
                        this.viewerManager.setCurrentModel(event.selections[0].model);
                        this.bimObjectService.setCurrentModel(event.selections[0].model);
                    }
                });
                clearInterval(inter);
                resolve(true);
            };
            const inter = setInterval(addEventListen, 200);
        });
        return this.initialized;
    }
    isInitialize() {
        return typeof this.initialized !== 'undefined';
    }
    waitForInitialization() {
        return new Promise((resolve)=>{
            const interval = setInterval(()=>{
                if (typeof this.initialized !== 'undefined') {
                    clearInterval(interval);
                    this.initialized.then(()=>resolve(true));
                }
            }, 200);
        });
    }
    getScene(modelId) {
        return this.scenes.filter((scene)=>{
            return scene.modelIds.indexOf(modelId) !== -1;
        });
    }
    async getSVFListFromBimFile(bimFileId) {
        const bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
        const elem1 = await (0, utils_1.loadModelPtr)(bimFileRNode.element.ptr);
        const elem = await (0, utils_1.loadModelPtr)(elem1.currentVersion);
        const res = [];
        if (elem.hasOwnProperty('items')) {
            for(let i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf('svf') !== -1) {
                const thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + '.png';
                res.push({
                    path: elem.items[i].path.get(),
                    name: elem.items[i].name.get(),
                    thumbnail
                });
            }
        }
        return res;
    }
    getBimFileDefautPath(bimFileId) {
        const bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
        if (bimFileRNode && bimFileRNode.info.defaultItem) return bimFileRNode.info.defaultItem.get();
    }
    setBimFileDefautPath(bimFileId, path) {
        const bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
        if (bimFileRNode) {
            if (bimFileRNode.info.defaultItem) return bimFileRNode.info.defaultItem.set(path);
            else return bimFileRNode.info.add_attr('defaultItem', path);
        }
    }
    async getSVF(element, nodeId, name) {
        var _a, _b;
        const elem1 = await (0, utils_1.loadModelPtr)(element.ptr);
        const elem = await (0, utils_1.loadModelPtr)(elem1.currentVersion);
        if (elem.hasOwnProperty('items')) {
            // 1ere passe pour default path
            const bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            if (bimFileRNode && bimFileRNode.info.defaultItem) {
                const defaultPath = bimFileRNode.info.defaultItem.get();
                for(let i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf('svf') !== -1 && defaultPath === elem.items[i].path.get()) {
                    const thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + '.png';
                    return {
                        version: elem.versionId,
                        path: elem.items[i].path.get(),
                        id: nodeId,
                        name,
                        thumbnail,
                        aecPath: (_a = elem.aecPath) === null || _a === void 0 ? void 0 : _a.get()
                    };
                }
            }
            for(let i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf('svf') !== -1) {
                const thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + '.png';
                return {
                    version: elem.versionId,
                    path: elem.items[i].path.get(),
                    id: nodeId,
                    name,
                    thumbnail,
                    aecPath: (_b = elem.aecPath) === null || _b === void 0 ? void 0 : _b.get()
                };
            }
        }
        return undefined;
    }
    getAecModelData(aecPath) {
        return axios_1.default.get(aecPath).then(function(a) {
            return a.data;
        });
    }
    get1stGlobalOffset() {
        var _a;
        if (!this.globalOffset) this.globalOffset = (_a = this.viewerManager.viewer.model) === null || _a === void 0 ? void 0 : _a.getData().globalOffset;
        return this.globalOffset;
    }
    async addOffsetFromAEC(aecPath) {
        const globalOffset = this.get1stGlobalOffset();
        const aecModelData = await this.getAecModelData(aecPath);
        if (aecModelData) {
            const tf = aecModelData && aecModelData.refPointTransformation;
            const refPoint = tf ? {
                x: tf[9],
                y: tf[10],
                z: 0
            } : {
                x: 0,
                y: 0,
                z: 0
            };
            if (!globalOffset) // @ts-ignore
            return new THREE.Vector3().copy(refPoint);
        }
        return globalOffset;
    }
    getOption(options, svfVersionFile) {
        for(var i = 0; i < options.length; i++)if (options[i].urn.get().includes(svfVersionFile.path)) {
            var opt = options[i].get();
            opt.modelNameOverride = svfVersionFile.name;
            return opt;
        }
        return {
            modelNameOverride: svfVersionFile.name
        };
    }
    addDbIdToOption(option) {
        if (option.hasOwnProperty('dbIds') && option.dbIds.length > 0) option.ids = option.dbIds;
    }
    async loadBimFile(bimFile, scene, options = []) {
        const is1stModel = !this.viewerManager.viewer.model;
        const svfVersionFile = await this.getSVF(bimFile.element, bimFile.id.get(), bimFile.name.get());
        let option = null;
        if (typeof scene.sceneAlignMethod === 'undefined') {
            // old scene handle
            option = this.getOption(options, svfVersionFile);
            if (option.loadOption && option.loadOption.hasOwnProperty('globalOffset')) {
                if (!this.globalOffset) this.globalOffset = option.loadOption.globalOffset;
                option.globalOffset = this.globalOffset;
            }
        } else {
            option = this.getOption(options, svfVersionFile);
            if (scene.sceneAlignMethod.get() === SceneAlignMethod_1.SceneAlignMethod.OriginToOrigin) option.globalOffset = this.get1stGlobalOffset();
            else if (scene.sceneAlignMethod.get() === SceneAlignMethod_1.SceneAlignMethod.ShareCoordinates && svfVersionFile.aecPath) {
                option.applyRefPoint = true;
                option.globalOffset = await this.addOffsetFromAEC(svfVersionFile.aecPath);
            }
        }
        this.addDbIdToOption(option);
        const path = this.getNormalisePath(svfVersionFile.path);
        const model = await this.viewerManager.loadModel(path, option, is1stModel);
        this.bimObjectService.addModel(bimFile.id.get(), model, svfVersionFile.version, scene, bimFile.name.get());
        return {
            bimFileId: bimFile.id.get(),
            model: model
        };
    }
    async load1stThenAll(tasks, callback) {
        const results = [];
        let idx = 0;
        if (tasks.length > 0 && !this.viewerManager.viewer.model) {
            idx = 1;
            await callback(tasks[0]).then((res)=>{
                results.push(res);
            });
        }
        const proms = [];
        for(; idx < tasks.length; idx++)proms.push(callback(tasks[idx]).then(function(res) {
            results.push(res);
        }));
        return Promise.all(proms).then(()=>results);
    }
    async loadModelFromNode(nodeId) {
        try {
            const node = await spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(nodeId);
            if (node.type.get() === Constants_1.SCENE_TYPE) {
                const scene = node;
                const children = await SceneHelper_1.SceneHelper.getBimFilesFromScene(nodeId);
                const option = typeof node.options !== 'undefined' ? node.options : [];
                const data = children.map((child)=>{
                    return {
                        child,
                        scene,
                        option
                    };
                });
                return this.load1stThenAll(data, ({ child, scene, option })=>{
                    return this.loadBimFile(child, scene, option);
                });
            }
            const scenes = await SceneHelper_1.SceneHelper.getSceneFromNode(nodeId);
            const res = [];
            for (const scene of scenes){
                const r = await this.loadModelFromNode(scene.id.get());
                res.push.apply(res, r);
            }
            return res;
        } catch (e) {
            console.error(e);
        }
    }
    getNormalisePath(path) {
        let res = path;
        if (!/https?:\/\//.test(path)) res = window.location.origin + path;
        return res;
    }
    /**
     * return the model associated to the bimfile
     * @param bimFileId
     * @param dbId
     */ getModel(bimObject) {
        return this.bimObjectService.getModel(bimObject.dbid.get(), bimObject.bimFileId.get());
    }
    async loadModelFromBimFile(bimFile) {
        const svfVersionFile = await this.getSVF(bimFile.element, bimFile.id.get(), bimFile.name.get());
        const path = this.getNormalisePath(svfVersionFile.path);
        const is1stModelLoaded = !spinal.SpinalForgeViewer.viewerManager.viewer.model;
        const model = await this.viewerManager.loadModel(path, {}, is1stModelLoaded);
        await this.bimObjectService._addModel(bimFile.id.get(), model, svfVersionFile.name);
        return {
            model
        };
    }
    addMaterial(color) {
        // @ts-ignore
        const material = new THREE.MeshPhongMaterial({
            color: color
        });
        this.viewerManager.viewer.impl.createOverlayScene(this.overlayName, material, material);
        return material;
    }
    setModelColorMaterial(model, color, ids) {
        var material = this.addMaterial(color);
        for(var i = 0; i < ids.length; i++){
            var dbid = ids[i];
            //from dbid to node, to fragid
            var it = model.getData().instanceTree;
            it.enumNodeFragments(dbid, (function(fragId) {
                var renderProxy = this.viewerManager.viewer.impl.getRenderProxy(model, fragId);
                // @ts-ignore
                renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, material);
                renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                renderProxy.meshProxy.matrixAutoUpdate = false;
                renderProxy.meshProxy.frustumCulled = false;
                this.viewerManager.viewer.impl.addOverlay(this.overlayName, renderProxy.meshProxy);
                this.viewerManager.viewer.impl.invalidate(true);
            }).bind(this), false);
        }
    }
    setColorMaterial(aggregateSelection, color) {
        for(let i = 0; i < aggregateSelection.length; i++){
            const model = aggregateSelection[i].model;
            const ids = aggregateSelection[i].selection;
            this.setModelColorMaterial(model, color, ids);
        }
    }
    restoreColorMaterial(aggregateSelection) {
        for(let i = 0; i < aggregateSelection.length; i++){
            const model = aggregateSelection[1].model;
            const ids = aggregateSelection[1].selection;
            this.restoreModelColorMaterial(model, ids);
        }
    }
    restoreModelColorMaterial(model, ids) {
        for(var i = 0; i < ids.length; i++){
            var dbid = ids[i];
            //from dbid to node, to fragid
            var it = model.getData().instanceTree;
            it.enumNodeFragments(dbid, function(fragId) {
                var renderProxy = this.viewerManager.viewer.impl.getRenderProxy(model, fragId);
                if (renderProxy.meshProxy) {
                    //remove all overlays with same name
                    this.viewerManager.viewer.impl.clearOverlay(this.overlayName);
                    //viewer.impl.removeOverlay(overlayName, renderProxy.meshProxy);
                    delete renderProxy.meshProxy;
                    //refresh the scene
                    this.viewerManager.viewer.impl.invalidate(true);
                }
            }, true);
        }
    }
}
exports.SpinalForgeViewer = SpinalForgeViewer;

},{"b56d331c57e6f89d":"9LAk7","cdacbcd213eb7723":"banip","420a4315dd6dd12e":"2MD19","7ea57096748cb98d":"9ug2W","13f6dc54f0606a8":"bt0RM","718e3a65d8e0425d":"kooH4","1d4ddc000ca7a7ff":"iAvTZ","cd8d1b969b97234d":"dsoTF"}],"banip":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BimObjectService = void 0;
const spinal_env_viewer_graph_service_1 = require("b20fefd9d72f6b2d");
const Constants_1 = require("6a074d843bf1b8ea");
/**
 * @export
 * @class BimObjectService
 */ class BimObjectService {
    constructor(){
        /**
         * @type {{ [modelId: number]: { bimFileId: string, version: number, scene: any } }}
         * @memberof BimObjectService
         */ this.mappingModelIdBimFileId = {};
        /**
         * @type {{ [bimFileId: string]: { modelId: number, version: number, modelScene: { model: Model, scene: any }[] } }}
         * @memberof BimObjectService
         */ this.mappingBimFileIdModelId = {};
        /**
         * @type {{ [name: string]: Model }}
         * @memberof BimObjectService
         */ this.mappingNameByModel = {};
    }
    /**
     * @param {Model} model
     * @memberof BimObjectService
     */ setCurrentModel(model) {
        this.currentModel = model;
    }
    /**
     * Return the node where to attach BIMObject
     * @param {string} bimFileId id of the BIMFile
     * @returns {Promise<SpinalNodeRef>}
     * @memberof BimObjectService
     */ async getBimFileContext(bimFileId) {
        try {
            const children = await spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(bimFileId, [
                Constants_1.BIM_CONTEXT_RELATION_NAME
            ]);
            if (children.length > 0) return children[0];
            else return undefined;
        } catch (e) {
            console.error('BimObjectService.getBimFileContext', e);
            throw e;
        }
    }
    /**
     * @param {string} bimFileId
     * @returns {Promise<boolean>}
     * @memberof BimObjectService
     */ createBIMFileContext(bimFileId) {
        const contextId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name: "BIMContext"
        }, undefined);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(bimFileId, contextId, Constants_1.BIM_CONTEXT_RELATION_NAME, Constants_1.BIM_CONTEXT_RELATION_TYPE);
    }
    /**
     * create a BIMObject for the corresponding dbid and model
     * @param {number} dbid
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>} the BIMObjectRef has been created
     * @memberof BimObjectService
     */ async createBIMObject(dbid, name, model = this.currentModel) {
        try {
            const bimObject = await this.getBIMObject(dbid, model);
            //BIMObject already exist
            if (typeof bimObject !== "undefined") return bimObject;
            const externalId = await BimObjectService.getExternalId(dbid, model);
            // @ts-ignore
            const modelMeta = this.mappingModelIdBimFileId[model.id];
            const bimId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                type: Constants_1.BIM_OBJECT_TYPE,
                bimFileId: modelMeta.bimFileId,
                version: modelMeta.version,
                externalId,
                dbid,
                name
            }, undefined);
            const node = await this.getBimFileContext(modelMeta.bimFileId);
            if (typeof node !== "undefined") {
                await spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(node.id, bimId, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_OBJECT_RELATION_TYPE);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(bimId);
            } else {
                await this.createBIMFileContext(modelMeta.bimFileId);
                const n = await this.getBimFileContext(modelMeta.bimFileId);
                if (typeof n !== "undefined") {
                    await spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(n.id, bimId, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_OBJECT_RELATION_TYPE);
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(bimId);
                }
            }
        } catch (e) {
            console.error('createBIMObject', e);
            throw e;
        }
    }
    /**
     * Return the BIMObject corresponding dbid and the model
     * @param {number} dbId
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>}
     * @memberof BimObjectService
     */ async getBIMObject(dbId, model = this.currentModel) {
        try {
            const externalId = await BimObjectService.getExternalId(dbId, model);
            // @ts-ignore
            const modelMeta = this.mappingModelIdBimFileId[model.id];
            const n = await this.getBimFileContext(modelMeta.bimFileId);
            if (typeof n !== "undefined") {
                const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(n.id.get());
                const children = await node.getChildren([
                    Constants_1.BIM_OBJECT_RELATION_NAME
                ]);
                const child = children.find((node)=>{
                    return node.info.externalId.get() === externalId;
                });
                if (child) {
                    // @ts-ignore
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(child);
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(child.info.id.get());
                }
            } else return undefined;
        } catch (e) {
            console.error('getBIMObject', e);
            throw e;
        }
    }
    /**
     * Return the external id for the given dbid
     * @static
     * @param {number} dbId
     * @param {Model} model
     * @returns {Promise<string>} external id for the given dbid
     * @memberof BimObjectService
     */ static getExternalId(dbId, model) {
        return new Promise((resolve, reject)=>{
            model.getProperties(dbId, (props)=>{
                resolve(props.externalId);
            }, reject);
        });
    }
    /**
     * Return the dbid corresponding to the external id
     * @param externalId
     * @param bimFileId {String} id of the BIMFile
     * @returns {number} dbid of the given external id
     */ getDbIdFromExternalId(externalId, bimFileId) {
        return new Promise((resolve, reject)=>{
            const modelMeta = this.mappingBimFileIdModelId[bimFileId];
            const model = modelMeta.modelScene[0].model;
            model.getExternalIdMapping((res)=>{
                resolve(res[externalId]);
            }, reject);
        });
    }
    /**
     * @param {string} externalId
     * @param {Model} model
     * @returns {Promise<number>}
     * @memberof BimObjectService
     */ getDdIdFromExternalIdFromModel(externalId, model) {
        return new Promise((resolve, reject)=>{
            model.getExternalIdMapping((res)=>{
                resolve(res[externalId]);
            }, reject);
        });
    }
    /**
     * @param {string[]} externalIds
     * @param {Model} model
     * @returns {Promise<number[]>}
     * @memberof BimObjectService
     */ getDdIdsFromExternalIds(externalIds, model) {
        return new Promise((resolve, reject)=>{
            model.getExternalIdMapping((mapping)=>{
                const res = [];
                for(let i = 0; i < externalIds.length; i++)res.push(mapping[externalIds[i]]);
                resolve(res);
            }, reject);
        });
    }
    /**
     * Add a BIMObject to a node
     * @param {string} contextId context id where the BIMObject supposed to be
     * @param {string} parentId id of the node where the BIMObject will be add
     * @param {number} dbId
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<SpinalNodeRef>}
     * @memberof BimObjectService
     */ async addBIMObject(contextId, parentId, dbId, name, model = this.currentModel) {
        try {
            const bimObject = await this.getBIMObject(dbId, model);
            if (typeof bimObject !== "undefined") {
                const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimObject.id.get());
                const parent = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(parentId);
                const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
                await parent.addChildInContext(node, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE, context);
                return bimObject;
            }
            const child = await this.createBIMObject(dbId, name, model);
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(child.id.get());
            const parent = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(parentId);
            const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
            await parent.addChildInContext(node, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE, context);
            return child;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
    /**
     * Remove a BIMObject from a parent
     * @param {string} parentId
     * @param {string} bimObjectId
     * @returns {Promise<boolean>}
     * @memberof BimObjectService
     */ removeBIMObject(parentId, bimObjectId) {
        // @ts-ignore
        return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parentId, bimObjectId, Constants_1.BIM_NODE_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE);
    }
    /**
     * Delete a BIMObject from graph
     * @param {number} dbId
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<void>}
     * @memberof BimObjectService
     */ async deleteBImObject(dbId, model = this.currentModel) {
        // @ts-ignore
        const modelId = model.id;
        const modelMetaData = this.mappingModelIdBimFileId[modelId];
        try {
            const bimObject = await this.getBIMObject(dbId, model);
            delete this.mappingModelIdBimFileId[modelId];
            delete this.mappingBimFileIdModelId[modelMetaData.bimFileId];
            return spinal_env_viewer_graph_service_1.SpinalGraphService.removeFromGraph(bimObject.id.get());
        } catch (e) {
            console.error('deleteBImObject', e);
            throw e;
        }
    }
    /**
     * Add a reference object to a node
     * @param {string} parentId
     * @param {number} dbId
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>}
     * @memberof BimObjectService
     */ async addReferenceObject(parentId, dbId, name, model = this.currentModel) {
        const child = await this.getBIMObject(dbId, model);
        if (typeof child === "undefined") {
            const BIMObj = await this.createBIMObject(dbId, name, model);
            await spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, BIMObj.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE);
            return BIMObj;
        }
        await spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, child.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE);
        return child;
    }
    /**
     *
     * @param parentId
     * @param dbid
     * @param model
     */ async removeReferenceObject(parentId, dbid, model = this.currentModel) {
        const child = await this.getBIMObject(dbid, model);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parentId, child.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE);
    }
    /**
     * notify the service that a new model has been load into the viewer
     * @param bimFileId {String} id of the BIMFile
     * @param version {number} version of the bimFile
     * @param model {Model} model loaded into the viewer
     * @param scene {any} scene loaded
     * @param name
     */ addModel(bimFileId, model, version, scene, name) {
        // @ts-ignore
        const modelId = model.id;
        this.mappingModelIdBimFileId[modelId] = {
            bimFileId,
            version,
            scene
        };
        this.mappingNameByModel[name] = model;
        let mapping = this.mappingBimFileIdModelId[bimFileId];
        if (typeof mapping === "undefined") mapping = {
            modelId: modelId,
            version: version,
            modelScene: [
                {
                    model,
                    scene
                }
            ]
        };
        else mapping.modelScene.push({
            model,
            scene
        });
        this.mappingBimFileIdModelId[bimFileId] = mapping;
    }
    _addModel(bimFileId, model, name) {
        // @ts-ignore
        const modelId = model.id;
        this.mappingModelIdBimFileId[modelId] = {
            bimFileId,
            version: 0,
            scene: undefined
        };
        this.mappingNameByModel[name] = model;
    }
    /**
     * Get the model corresponding to the dbid and the bimfile
     * @param dbId {number} dbId of the BIMObject
     * @param bimFileId {string} id of the BIMfile
     */ getModel(dbId, bimFileId) {
        const mapping = this.mappingBimFileIdModelId[bimFileId];
        if (typeof mapping !== "undefined") for(let i = 0; i < mapping.modelScene.length; i++){
            if (mapping.modelScene[i].scene.hasOwnProperty('options') && mapping.modelScene[i].scene['options'].dbIds.contains(dbId)) return mapping.modelScene[i].model;
        }
        return undefined;
    }
    getModelByBimfile(bimFileId) {
        const mapping = this.mappingBimFileIdModelId[bimFileId];
        //one bimFile is not supposed to be load multipe time
        if (typeof mapping !== "undefined") return mapping.modelScene[0].model;
        return undefined;
    }
    /**
     * Get a model corresponding to the name use with caution
     * @param name
     */ getModelByName(name) {
        return this.mappingNameByModel[name];
    }
}
exports.BimObjectService = BimObjectService;
/**
 * @static
 * @type {number}
 * @memberof BimObjectService
 */ BimObjectService.num = 0;

},{"b20fefd9d72f6b2d":"9LAk7","6a074d843bf1b8ea":"2MD19"}],"2MD19":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REFERENCE_OBJECT_RELATION_TYPE = exports.BIM_OBJECT_RELATION_TYPE = exports.BIM_NODE_RELATION_TYPE = exports.BIM_OBJECT_VERSION_RELATION_TYPE = exports.REFERENCE_OBJECT_RELATION_NAME = exports.BIM_OBJECT_VERSION_RELATION_NAME = exports.BIM_OBJECT_RELATION_NAME = exports.BIM_NODE_RELATION_NAME = exports.BIM_CONTEXT_RELATION_TYPE = exports.BIM_CONTEXT_RELATION_NAME = exports.BIM_OBJECT_TYPE = exports.PART_RELATION_TYPE = exports.SCENE_RELATION_TYPE = exports.PART_RELATION_NAME = exports.SCENE_TYPE = exports.SCENE_RELATION_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("44f946b368e03b14");
const constants_js_1 = require("3c0117970d993dce");
exports.SCENE_RELATION_NAME = 'hasScene';
exports.SCENE_TYPE = "scene";
exports.PART_RELATION_NAME = 'hasParts';
exports.SCENE_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.PART_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_OBJECT_TYPE = constants_js_1.EQUIPMENT_TYPE;
exports.BIM_CONTEXT_RELATION_NAME = "hasBimContext";
exports.BIM_CONTEXT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_NODE_RELATION_NAME = "hasBimNode";
exports.BIM_OBJECT_RELATION_NAME = constants_js_1.EQUIPMENT_RELATION;
exports.BIM_OBJECT_VERSION_RELATION_NAME = "hasBimVersion";
exports.REFERENCE_OBJECT_RELATION_NAME = constants_js_1.REFERENCE_RELATION;
exports.BIM_OBJECT_VERSION_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_NODE_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_OBJECT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.REFERENCE_OBJECT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;

},{"44f946b368e03b14":"9LAk7","3c0117970d993dce":"cZr3d"}],"cZr3d":[function(require,module,exports,__globalThis) {
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
const CONTEXT_TYPE = 'geographicContext';
exports.CONTEXT_TYPE = CONTEXT_TYPE;
const SITE_TYPE = 'geographicSite';
exports.SITE_TYPE = SITE_TYPE;
const BUILDING_TYPE = 'geographicBuilding';
exports.BUILDING_TYPE = BUILDING_TYPE;
const FLOOR_TYPE = 'geographicFloor';
exports.FLOOR_TYPE = FLOOR_TYPE;
const ZONE_TYPE = 'geographicZone';
exports.ZONE_TYPE = ZONE_TYPE;
const ROOM_TYPE = 'geographicRoom';
exports.ROOM_TYPE = ROOM_TYPE;
const EQUIPMENT_TYPE = 'BIMObject';
exports.EQUIPMENT_TYPE = EQUIPMENT_TYPE;
const REFERENCE_TYPE = 'geographicReference';
exports.REFERENCE_TYPE = REFERENCE_TYPE;
const SITE_RELATION = 'hasGeographicSite';
exports.SITE_RELATION = SITE_RELATION;
const BUILDING_RELATION = 'hasGeographicBuilding';
exports.BUILDING_RELATION = BUILDING_RELATION;
const FLOOR_RELATION = 'hasGeographicFloor';
exports.FLOOR_RELATION = FLOOR_RELATION;
const ZONE_RELATION = 'hasGeographicZone';
exports.ZONE_RELATION = ZONE_RELATION;
const ROOM_RELATION = 'hasGeographicRoom';
exports.ROOM_RELATION = ROOM_RELATION;
const EQUIPMENT_RELATION = 'hasBimObject';
exports.EQUIPMENT_RELATION = EQUIPMENT_RELATION;
const REFERENCE_RELATION = 'hasReferenceObject';
exports.REFERENCE_RELATION = REFERENCE_RELATION;
const REFERENCE_ROOM_RELATION = 'hasReferenceObject.ROOM';
exports.REFERENCE_ROOM_RELATION = REFERENCE_ROOM_RELATION;
const SITE_REFERENCE_CONTEXT = '.SiteContext';
exports.SITE_REFERENCE_CONTEXT = SITE_REFERENCE_CONTEXT;
const BUILDING_REFERENCE_CONTEXT = '.BuildingContext';
exports.BUILDING_REFERENCE_CONTEXT = BUILDING_REFERENCE_CONTEXT;
const FLOOR_REFERENCE_CONTEXT = '.FloorContext';
exports.FLOOR_REFERENCE_CONTEXT = FLOOR_REFERENCE_CONTEXT;
const ZONE_REFERENCE_CONTEXT = '.ZoneContext';
exports.ZONE_REFERENCE_CONTEXT = ZONE_REFERENCE_CONTEXT;
const ROOM_REFERENCE_CONTEXT = '.RoomContext';
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

},{}],"9ug2W":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadModelPtr = loadModelPtr;
const spinal_core_connectorjs_type_1 = require("be10f1e5016f21cc");
const mapModelDictionary = new Map();
function loadModelPtr(model) {
    if (model instanceof spinal_core_connectorjs_type_1.File) return loadModelPtr(model._ptr);
    if (!(model instanceof spinal_core_connectorjs_type_1.Ptr)) throw new Error('loadModelPtr must take Ptr as parameter');
    if (!model.data.value && model.data.model) return Promise.resolve(model.data.model);
    else if (!model.data.value) throw new Error('Trying to load a Ptr to 0');
    if (mapModelDictionary.has(model.data.value)) return mapModelDictionary.get(model.data.value);
    if (typeof spinal_core_connectorjs_type_1.FileSystem._objects[model.data.value] !== 'undefined') {
        const promise = Promise.resolve(spinal_core_connectorjs_type_1.FileSystem._objects[model.data.value]);
        mapModelDictionary.set(model.data.value, promise);
        return promise;
    }
    const promise = new Promise((resolve, reject)=>{
        model.load((m)=>{
            if (!m) {
                mapModelDictionary.delete(model.data.value);
                reject(new Error('Error in load Ptr'));
            } else resolve(m);
        });
    });
    mapModelDictionary.set(model.data.value, promise);
    return promise;
}

},{"be10f1e5016f21cc":"1A32E"}],"bt0RM":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SceneHelper = void 0;
const spinal_env_viewer_graph_service_1 = require("8f37b5693929b675");
const Constants_1 = require("c7802459ec641ae1");
class SceneHelper {
    static initialize() {
        if (typeof SceneHelper.initialized !== "undefined" && SceneHelper.initialized !== null) return SceneHelper.initialized;
        SceneHelper.initialized = new Promise((resolve, reject)=>{
            SceneHelper.context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(SceneHelper.contextName);
            if (typeof SceneHelper.context === "undefined") return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(SceneHelper.contextName, SceneHelper.type).then((context)=>{
                SceneHelper.context = context;
                SceneHelper.contextId = context.getId().get();
                resolve(true);
            }).catch(reject);
            resolve(true);
        });
        return SceneHelper.initialized;
    }
    static createScene(name, description, autoLoad) {
        return SceneHelper.initialize().then(()=>{
            const sceneId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name,
                description,
                autoLoad,
                type: Constants_1.SCENE_TYPE
            }, undefined);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(SceneHelper.contextId, sceneId, SceneHelper.contextId, Constants_1.SCENE_RELATION_NAME, Constants_1.SCENE_RELATION_TYPE);
        });
    }
    static addModelToScene(sceneId, bimFileId) {
        return SceneHelper.initialize().then(()=>{
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(sceneId, bimFileId, SceneHelper.contextId, Constants_1.PART_RELATION_NAME, Constants_1.PART_RELATION_TYPE);
        });
    }
    static getBimFilesFromScene(sceneId) {
        return SceneHelper.initialize().then(()=>{
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(sceneId, [
                Constants_1.PART_RELATION_NAME
            ]);
        });
    }
    static async getSceneFromNode(nodeId) {
        await SceneHelper.initialize();
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            Constants_1.SCENE_RELATION_NAME
        ]);
    }
    static addSceneToNode(nodeId, sceneId) {
        return SceneHelper.initialize().then(()=>{
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(nodeId, sceneId, SceneHelper.contextId, Constants_1.SCENE_RELATION_NAME, Constants_1.SCENE_RELATION_TYPE);
        });
    }
}
exports.SceneHelper = SceneHelper;
SceneHelper.contextName = "Scenes";
SceneHelper.type = "SpinalService";

},{"8f37b5693929b675":"9LAk7","c7802459ec641ae1":"2MD19"}],"iAvTZ":[function(require,module,exports,__globalThis) {
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
exports.SceneAlignMethod = void 0;
var SceneAlignMethod;
(function(SceneAlignMethod) {
    SceneAlignMethod[SceneAlignMethod["CenterToCenter"] = 0] = "CenterToCenter";
    SceneAlignMethod[SceneAlignMethod["OriginToOrigin"] = 1] = "OriginToOrigin";
    SceneAlignMethod[SceneAlignMethod["ShareCoordinates"] = 2] = "ShareCoordinates";
})(SceneAlignMethod || (exports.SceneAlignMethod = SceneAlignMethod = {}));

},{}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=dist.60d8259c.js.map
