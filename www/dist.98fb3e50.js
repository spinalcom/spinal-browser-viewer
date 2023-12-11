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
})({"8YZk7":[function(require,module,exports) {
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
 */ exports.__esModule = true;
exports.SpinalForgeViewer = void 0;
var SpinalForgeViewer_1 = require("20d41fec0f5c41e1");
exports.SpinalForgeViewer = SpinalForgeViewer_1.SpinalForgeViewer;
var g_win = typeof window === "undefined" ? global : window;
if (typeof g_win.spinal === "undefined") g_win.spinal = {};
if (typeof g_win.spinal.SpinalForgeViewer === "undefined") {
    g_win.spinal.SpinalForgeViewer = new SpinalForgeViewer_1.SpinalForgeViewer();
    g_win.spinal.BimObjectService = g_win.spinal.SpinalForgeViewer.bimObjectService;
}

},{"20d41fec0f5c41e1":"54Ua6"}],"54Ua6":[function(require,module,exports) {
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
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
exports.SpinalForgeViewer = void 0;
var spinal_env_viewer_graph_service_1 = require("b56d331c57e6f89d");
var BimObjectService_1 = require("cdacbcd213eb7723");
var Constants_1 = require("420a4315dd6dd12e");
var utils_1 = require("7ea57096748cb98d");
var SceneHelper_1 = require("13f6dc54f0606a8");
var axios_1 = require("718e3a65d8e0425d");
var SceneAlignMethod_1 = require("1d4ddc000ca7a7ff");
var THREE = require("cd8d1b969b97234d");
var SpinalForgeViewer = /** @class */ function() {
    function SpinalForgeViewer() {
        this.bimObjectService = new BimObjectService_1.BimObjectService();
        this.overlayName = "spinal-material-overlay";
    }
    SpinalForgeViewer.prototype.initialize = function(viewerManager) {
        var _this = this;
        if (typeof this.initialized === "undefined") this.initialized = new Promise(function(resolve) {
            _this.viewerManager = viewerManager;
            var addEventListen = function() {
                _this.viewerManager.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, function(event) {
                    if (typeof event.selections !== "undefined" && event.selections.length > 0) {
                        _this.viewerManager.setCurrentModel(event.selections[0].model);
                        _this.bimObjectService.setCurrentModel(event.selections[0].model);
                    }
                });
                clearInterval(inter);
                resolve(true);
            };
            var inter = setInterval(addEventListen, 200);
        });
        return this.initialized;
    };
    SpinalForgeViewer.prototype.isInitialize = function() {
        return typeof this.initialized !== "undefined";
    };
    SpinalForgeViewer.prototype.waitForInitialization = function() {
        var _this = this;
        return new Promise(function(resolve) {
            var interval = setInterval(function() {
                if (typeof _this.initialized !== "undefined") {
                    clearInterval(interval);
                    _this.initialized.then(function() {
                        return resolve(true);
                    });
                }
            }, 200);
        });
    };
    SpinalForgeViewer.prototype.getScene = function(modelId) {
        return this.scenes.filter(function(scene) {
            return scene.modelIds.indexOf(modelId) !== -1;
        });
    };
    SpinalForgeViewer.prototype.getSVFListFromBimFile = function(bimFileId) {
        return __awaiter(this, void 0, void 0, function() {
            var bimFileRNode, elem1, elem, res, i, thumbnail;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
                        return [
                            4 /*yield*/ ,
                            (0, utils_1.loadModelPtr)(bimFileRNode.element.ptr)
                        ];
                    case 1:
                        elem1 = _a.sent();
                        return [
                            4 /*yield*/ ,
                            (0, utils_1.loadModelPtr)(elem1.currentVersion)
                        ];
                    case 2:
                        elem = _a.sent();
                        res = [];
                        if (elem.hasOwnProperty("items")) {
                            for(i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf("svf") !== -1) {
                                thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + ".png";
                                res.push({
                                    path: elem.items[i].path.get(),
                                    name: elem.items[i].name.get(),
                                    thumbnail: thumbnail
                                });
                            }
                        }
                        return [
                            2 /*return*/ ,
                            res
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.getBimFileDefautPath = function(bimFileId) {
        var bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
        if (bimFileRNode && bimFileRNode.info.defaultItem) return bimFileRNode.info.defaultItem.get();
    };
    SpinalForgeViewer.prototype.setBimFileDefautPath = function(bimFileId, path) {
        var bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimFileId);
        if (bimFileRNode) {
            if (bimFileRNode.info.defaultItem) return bimFileRNode.info.defaultItem.set(path);
            else return bimFileRNode.info.add_attr("defaultItem", path);
        }
    };
    SpinalForgeViewer.prototype.getSVF = function(element, nodeId, name) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function() {
            var elem1, elem, bimFileRNode, defaultPath, i, thumbnail, i, thumbnail;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, utils_1.loadModelPtr)(element.ptr)
                        ];
                    case 1:
                        elem1 = _c.sent();
                        return [
                            4 /*yield*/ ,
                            (0, utils_1.loadModelPtr)(elem1.currentVersion)
                        ];
                    case 2:
                        elem = _c.sent();
                        if (elem.hasOwnProperty("items")) {
                            bimFileRNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
                            if (bimFileRNode && bimFileRNode.info.defaultItem) {
                                defaultPath = bimFileRNode.info.defaultItem.get();
                                for(i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf("svf") !== -1 && defaultPath === elem.items[i].path.get()) {
                                    thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + ".png";
                                    return [
                                        2 /*return*/ ,
                                        {
                                            version: elem.versionId,
                                            path: elem.items[i].path.get(),
                                            id: nodeId,
                                            name: name,
                                            thumbnail: thumbnail,
                                            aecPath: (_a = elem.aecPath) === null || _a === void 0 ? void 0 : _a.get()
                                        }
                                    ];
                                }
                            }
                            for(i = 0; i < elem.items.length; i++)if (elem.items[i].path.get().indexOf("svf") !== -1) {
                                thumbnail = elem.items[i].thumbnail ? elem.items[i].thumbnail.get() : elem.items[i].path.get() + ".png";
                                return [
                                    2 /*return*/ ,
                                    {
                                        version: elem.versionId,
                                        path: elem.items[i].path.get(),
                                        id: nodeId,
                                        name: name,
                                        thumbnail: thumbnail,
                                        aecPath: (_b = elem.aecPath) === null || _b === void 0 ? void 0 : _b.get()
                                    }
                                ];
                            }
                        }
                        return [
                            2 /*return*/ ,
                            undefined
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.getAecModelData = function(aecPath) {
        return axios_1["default"].get(aecPath).then(function(a) {
            return a.data;
        });
    };
    SpinalForgeViewer.prototype.get1stGlobalOffset = function() {
        var _a;
        if (!this.globalOffset) this.globalOffset = (_a = this.viewerManager.viewer.model) === null || _a === void 0 ? void 0 : _a.getData().globalOffset;
        return this.globalOffset;
    };
    SpinalForgeViewer.prototype.addOffsetFromAEC = function(aecPath) {
        return __awaiter(this, void 0, void 0, function() {
            var globalOffset, aecModelData, tf, refPoint, MaxDistSqr, distSqr;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        globalOffset = this.get1stGlobalOffset();
                        return [
                            4 /*yield*/ ,
                            this.getAecModelData(aecPath)
                        ];
                    case 1:
                        aecModelData = _a.sent();
                        if (aecModelData) {
                            tf = aecModelData && aecModelData.refPointTransformation;
                            refPoint = tf ? {
                                x: tf[9],
                                y: tf[10],
                                z: 0
                            } : {
                                x: 0,
                                y: 0,
                                z: 0
                            };
                            MaxDistSqr = 4.0e6;
                            distSqr = globalOffset && THREE.Vector3.prototype.distanceToSquared.call(refPoint, globalOffset);
                            if (!globalOffset || distSqr > MaxDistSqr) // @ts-ignore
                            return [
                                2 /*return*/ ,
                                new THREE.Vector3().copy(refPoint)
                            ];
                        }
                        return [
                            2 /*return*/ ,
                            globalOffset
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.getOption = function(options, svfVersionFile) {
        for(var i = 0; i < options.length; i++)if (options[i].urn.get().includes(svfVersionFile.path)) {
            var opt = options[i].get();
            opt.modelNameOverride = svfVersionFile.name;
            return opt;
        }
        return {
            modelNameOverride: svfVersionFile.name
        };
    };
    SpinalForgeViewer.prototype.addDbIdToOption = function(option) {
        if (option.hasOwnProperty("dbIds") && option.dbIds.length > 0) option.ids = option.dbIds;
    };
    SpinalForgeViewer.prototype.loadBimFile = function(bimFile, scene, options) {
        if (options === void 0) options = [];
        return __awaiter(this, void 0, void 0, function() {
            var is1stModel, svfVersionFile, option, _a, path, model;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        is1stModel = !this.viewerManager.viewer.model;
                        return [
                            4 /*yield*/ ,
                            this.getSVF(bimFile.element, bimFile.id.get(), bimFile.name.get())
                        ];
                    case 1:
                        svfVersionFile = _b.sent();
                        option = null;
                        if (!(typeof scene.sceneAlignMethod === "undefined")) return [
                            3 /*break*/ ,
                            2
                        ];
                        // old scene handle
                        option = this.getOption(options, svfVersionFile);
                        if (option.loadOption && option.loadOption.hasOwnProperty("globalOffset")) {
                            if (!this.globalOffset) this.globalOffset = option.loadOption.globalOffset;
                            option.globalOffset = this.globalOffset;
                        }
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 2:
                        option = this.getOption(options, svfVersionFile);
                        if (!(scene.sceneAlignMethod.get() === SceneAlignMethod_1.SceneAlignMethod.OriginToOrigin)) return [
                            3 /*break*/ ,
                            3
                        ];
                        option.globalOffset = this.get1stGlobalOffset();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        if (!(scene.sceneAlignMethod.get() === SceneAlignMethod_1.SceneAlignMethod.ShareCoordinates && svfVersionFile.aecPath)) return [
                            3 /*break*/ ,
                            5
                        ];
                        option.applyRefPoint = true;
                        _a = option;
                        return [
                            4 /*yield*/ ,
                            this.addOffsetFromAEC(svfVersionFile.aecPath)
                        ];
                    case 4:
                        _a.globalOffset = _b.sent();
                        _b.label = 5;
                    case 5:
                        this.addDbIdToOption(option);
                        path = this.getNormalisePath(svfVersionFile.path);
                        return [
                            4 /*yield*/ ,
                            this.viewerManager.loadModel(path, option, is1stModel)
                        ];
                    case 6:
                        model = _b.sent();
                        this.bimObjectService.addModel(bimFile.id.get(), model, svfVersionFile.version, scene, bimFile.name.get());
                        return [
                            2 /*return*/ ,
                            {
                                bimFileId: bimFile.id.get(),
                                model: model
                            }
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.load1stThenAll = function(tasks, callback) {
        return __awaiter(this, void 0, void 0, function() {
            var results, idx, proms;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        results = [];
                        idx = 0;
                        if (!(tasks.length > 0 && !this.viewerManager.viewer.model)) return [
                            3 /*break*/ ,
                            2
                        ];
                        idx = 1;
                        return [
                            4 /*yield*/ ,
                            callback(tasks[0]).then(function(res) {
                                results.push(res);
                            })
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        proms = [];
                        for(; idx < tasks.length; idx++)proms.push(callback(tasks[idx]).then(function(res) {
                            results.push(res);
                        }));
                        return [
                            2 /*return*/ ,
                            Promise.all(proms).then(function() {
                                return results;
                            })
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.loadModelFromNode = function(nodeId) {
        return __awaiter(this, void 0, void 0, function() {
            var node, scene_1, children, option_1, data, scenes, res, _i, scenes_1, scene, r, e_1;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            9,
                            ,
                            10
                        ]);
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(nodeId)
                        ];
                    case 1:
                        node = _a.sent();
                        if (!(node.type.get() === Constants_1.SCENE_TYPE)) return [
                            3 /*break*/ ,
                            3
                        ];
                        scene_1 = node;
                        return [
                            4 /*yield*/ ,
                            SceneHelper_1.SceneHelper.getBimFilesFromScene(nodeId)
                        ];
                    case 2:
                        children = _a.sent();
                        option_1 = typeof node.options !== "undefined" ? node.options : [];
                        data = children.map(function(child) {
                            return {
                                child: child,
                                scene: scene_1,
                                option: option_1
                            };
                        });
                        return [
                            2 /*return*/ ,
                            this.load1stThenAll(data, function(_a) {
                                var child = _a.child, scene = _a.scene, option = _a.option;
                                return _this.loadBimFile(child, scene, option);
                            })
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            SceneHelper_1.SceneHelper.getSceneFromNode(nodeId)
                        ];
                    case 4:
                        scenes = _a.sent();
                        res = [];
                        _i = 0, scenes_1 = scenes;
                        _a.label = 5;
                    case 5:
                        if (!(_i < scenes_1.length)) return [
                            3 /*break*/ ,
                            8
                        ];
                        scene = scenes_1[_i];
                        return [
                            4 /*yield*/ ,
                            this.loadModelFromNode(scene.id.get())
                        ];
                    case 6:
                        r = _a.sent();
                        res.push.apply(res, r);
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 8:
                        return [
                            2 /*return*/ ,
                            res
                        ];
                    case 9:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 10:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.getNormalisePath = function(path) {
        var res = path;
        if (!/https?:\/\//.test(path)) res = window.location.origin + path;
        return res;
    };
    /**
     * return the model associated to the bimfile
     * @param bimFileId
     * @param dbId
     */ SpinalForgeViewer.prototype.getModel = function(bimObject) {
        return this.bimObjectService.getModel(bimObject.dbid.get(), bimObject.bimFileId.get());
    };
    SpinalForgeViewer.prototype.loadModelFromBimFile = function(bimFile) {
        return __awaiter(this, void 0, void 0, function() {
            var svfVersionFile, path, is1stModelLoaded, model;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.getSVF(bimFile.element, bimFile.id.get(), bimFile.name.get())
                        ];
                    case 1:
                        svfVersionFile = _a.sent();
                        path = this.getNormalisePath(svfVersionFile.path);
                        is1stModelLoaded = !spinal.SpinalForgeViewer.viewerManager.viewer.model;
                        return [
                            4 /*yield*/ ,
                            this.viewerManager.loadModel(path, {}, is1stModelLoaded)
                        ];
                    case 2:
                        model = _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.bimObjectService._addModel(bimFile.id.get(), model, svfVersionFile.name)
                        ];
                    case 3:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            {
                                model: model
                            }
                        ];
                }
            });
        });
    };
    SpinalForgeViewer.prototype.addMaterial = function(color) {
        // @ts-ignore
        var material = new THREE.MeshPhongMaterial({
            color: color
        });
        this.viewerManager.viewer.impl.createOverlayScene(this.overlayName, material, material);
        return material;
    };
    SpinalForgeViewer.prototype.setModelColorMaterial = function(model, color, ids) {
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
    };
    SpinalForgeViewer.prototype.setColorMaterial = function(aggregateSelection, color) {
        for(var i = 0; i < aggregateSelection.length; i++){
            var model = aggregateSelection[i].model;
            var ids = aggregateSelection[i].selection;
            this.setModelColorMaterial(model, color, ids);
        }
    };
    SpinalForgeViewer.prototype.restoreColorMaterial = function(aggregateSelection) {
        for(var i = 0; i < aggregateSelection.length; i++){
            var model = aggregateSelection[1].model;
            var ids = aggregateSelection[1].selection;
            this.restoreModelColorMaterial(model, ids);
        }
    };
    SpinalForgeViewer.prototype.restoreModelColorMaterial = function(model, ids) {
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
    };
    return SpinalForgeViewer;
}();
exports.SpinalForgeViewer = SpinalForgeViewer;

},{"b56d331c57e6f89d":"9n7zp","cdacbcd213eb7723":"kUTUC","420a4315dd6dd12e":"f3Ny6","7ea57096748cb98d":"iQm5n","13f6dc54f0606a8":"fBUOh","718e3a65d8e0425d":"jo6P5","1d4ddc000ca7a7ff":"feevh","cd8d1b969b97234d":"ktPTu"}],"kUTUC":[function(require,module,exports) {
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
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
exports.BimObjectService = void 0;
var spinal_env_viewer_graph_service_1 = require("b20fefd9d72f6b2d");
var Constants_1 = require("6a074d843bf1b8ea");
/**
 * @export
 * @class BimObjectService
 */ var BimObjectService = /** @class */ function() {
    function BimObjectService() {
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
     */ BimObjectService.prototype.setCurrentModel = function(model) {
        this.currentModel = model;
    };
    /**
     * Return the node where to attach BIMObject
     * @param {string} bimFileId id of the BIMFile
     * @returns {Promise<SpinalNodeRef>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.getBimFileContext = function(bimFileId) {
        return __awaiter(this, void 0, void 0, function() {
            var children, e_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(bimFileId, [
                                Constants_1.BIM_CONTEXT_RELATION_NAME
                            ])
                        ];
                    case 1:
                        children = _a.sent();
                        if (children.length > 0) return [
                            2 /*return*/ ,
                            children[0]
                        ];
                        else return [
                            2 /*return*/ ,
                            undefined
                        ];
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 2:
                        e_1 = _a.sent();
                        console.error("BimObjectService.getBimFileContext", e_1);
                        throw e_1;
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * @param {string} bimFileId
     * @returns {Promise<boolean>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.createBIMFileContext = function(bimFileId) {
        var contextId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name: "BIMContext"
        }, undefined);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(bimFileId, contextId, Constants_1.BIM_CONTEXT_RELATION_NAME, Constants_1.BIM_CONTEXT_RELATION_TYPE);
    };
    /**
     * create a BIMObject for the corresponding dbid and model
     * @param {number} dbid
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>} the BIMObjectRef has been created
     * @memberof BimObjectService
     */ BimObjectService.prototype.createBIMObject = function(dbid, name, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var bimObject, externalId, modelMeta, bimId, node, n, e_2;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            10,
                            ,
                            11
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.getBIMObject(dbid, model)
                        ];
                    case 1:
                        bimObject = _a.sent();
                        //BIMObject already exist
                        if (typeof bimObject !== "undefined") return [
                            2 /*return*/ ,
                            bimObject
                        ];
                        return [
                            4 /*yield*/ ,
                            BimObjectService.getExternalId(dbid, model)
                        ];
                    case 2:
                        externalId = _a.sent();
                        modelMeta = this.mappingModelIdBimFileId[model.id];
                        bimId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                            type: Constants_1.BIM_OBJECT_TYPE,
                            bimFileId: modelMeta.bimFileId,
                            version: modelMeta.version,
                            externalId: externalId,
                            dbid: dbid,
                            name: name
                        }, undefined);
                        return [
                            4 /*yield*/ ,
                            this.getBimFileContext(modelMeta.bimFileId)
                        ];
                    case 3:
                        node = _a.sent();
                        if (!(typeof node !== "undefined")) return [
                            3 /*break*/ ,
                            5
                        ];
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(node.id, bimId, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_OBJECT_RELATION_TYPE)
                        ];
                    case 4:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(bimId)
                        ];
                    case 5:
                        return [
                            4 /*yield*/ ,
                            this.createBIMFileContext(modelMeta.bimFileId)
                        ];
                    case 6:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.getBimFileContext(modelMeta.bimFileId)
                        ];
                    case 7:
                        n = _a.sent();
                        if (!(typeof n !== "undefined")) return [
                            3 /*break*/ ,
                            9
                        ];
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(n.id, bimId, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_OBJECT_RELATION_TYPE)
                        ];
                    case 8:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(bimId)
                        ];
                    case 9:
                        return [
                            3 /*break*/ ,
                            11
                        ];
                    case 10:
                        e_2 = _a.sent();
                        console.error("createBIMObject", e_2);
                        throw e_2;
                    case 11:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Return the BIMObject corresponding dbid and the model
     * @param {number} dbId
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.getBIMObject = function(dbId, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var externalId_1, modelMeta, n, node, children, child, e_3;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            6,
                            ,
                            7
                        ]);
                        return [
                            4 /*yield*/ ,
                            BimObjectService.getExternalId(dbId, model)
                        ];
                    case 1:
                        externalId_1 = _a.sent();
                        modelMeta = this.mappingModelIdBimFileId[model.id];
                        return [
                            4 /*yield*/ ,
                            this.getBimFileContext(modelMeta.bimFileId)
                        ];
                    case 2:
                        n = _a.sent();
                        if (!(typeof n !== "undefined")) return [
                            3 /*break*/ ,
                            4
                        ];
                        node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(n.id.get());
                        return [
                            4 /*yield*/ ,
                            node.getChildren([
                                Constants_1.BIM_OBJECT_RELATION_NAME
                            ])
                        ];
                    case 3:
                        children = _a.sent();
                        child = children.find(function(node) {
                            return node.info.externalId.get() === externalId_1;
                        });
                        if (child) {
                            // @ts-ignore
                            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(child);
                            return [
                                2 /*return*/ ,
                                spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(child.info.id.get())
                            ];
                        }
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        return [
                            2 /*return*/ ,
                            undefined
                        ];
                    case 5:
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 6:
                        e_3 = _a.sent();
                        console.error("getBIMObject", e_3);
                        throw e_3;
                    case 7:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Return the external id for the given dbid
     * @static
     * @param {number} dbId
     * @param {Model} model
     * @returns {Promise<string>} external id for the given dbid
     * @memberof BimObjectService
     */ BimObjectService.getExternalId = function(dbId, model) {
        return new Promise(function(resolve, reject) {
            model.getProperties(dbId, function(props) {
                resolve(props.externalId);
            }, reject);
        });
    };
    /**
     * Return the dbid corresponding to the external id
     * @param externalId
     * @param bimFileId {String} id of the BIMFile
     * @returns {number} dbid of the given external id
     */ BimObjectService.prototype.getDbIdFromExternalId = function(externalId, bimFileId) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var modelMeta = _this.mappingBimFileIdModelId[bimFileId];
            var model = modelMeta.modelScene[0].model;
            model.getExternalIdMapping(function(res) {
                resolve(res[externalId]);
            }, reject);
        });
    };
    /**
     * @param {string} externalId
     * @param {Model} model
     * @returns {Promise<number>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.getDdIdFromExternalIdFromModel = function(externalId, model) {
        return new Promise(function(resolve, reject) {
            model.getExternalIdMapping(function(res) {
                resolve(res[externalId]);
            }, reject);
        });
    };
    /**
     * @param {string[]} externalIds
     * @param {Model} model
     * @returns {Promise<number[]>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.getDdIdsFromExternalIds = function(externalIds, model) {
        return new Promise(function(resolve, reject) {
            model.getExternalIdMapping(function(mapping) {
                var res = [];
                for(var i = 0; i < externalIds.length; i++)res.push(mapping[externalIds[i]]);
                resolve(res);
            }, reject);
        });
    };
    /**
     * Add a BIMObject to a node
     * @param {string} contextId context id where the BIMObject supposed to be
     * @param {string} parentId id of the node where the BIMObject will be add
     * @param {number} dbId
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<SpinalNodeRef>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.addBIMObject = function(contextId, parentId, dbId, name, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var bimObject, node_1, parent_1, context_1, child, node, parent_2, context, e_4;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            6,
                            ,
                            7
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.getBIMObject(dbId, model)
                        ];
                    case 1:
                        bimObject = _a.sent();
                        if (!(typeof bimObject !== "undefined")) return [
                            3 /*break*/ ,
                            3
                        ];
                        node_1 = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimObject.id.get());
                        parent_1 = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(parentId);
                        context_1 = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
                        return [
                            4 /*yield*/ ,
                            parent_1.addChildInContext(node_1, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE, context_1)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            bimObject
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            this.createBIMObject(dbId, name, model)
                        ];
                    case 4:
                        child = _a.sent();
                        node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(child.id.get());
                        parent_2 = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(parentId);
                        context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
                        return [
                            4 /*yield*/ ,
                            parent_2.addChildInContext(node, Constants_1.BIM_OBJECT_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE, context)
                        ];
                    case 5:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            child
                        ];
                    case 6:
                        e_4 = _a.sent();
                        console.error(e_4);
                        throw e_4;
                    case 7:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Remove a BIMObject from a parent
     * @param {string} parentId
     * @param {string} bimObjectId
     * @returns {Promise<boolean>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.removeBIMObject = function(parentId, bimObjectId) {
        // @ts-ignore
        return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parentId, bimObjectId, Constants_1.BIM_NODE_RELATION_NAME, Constants_1.BIM_NODE_RELATION_TYPE);
    };
    /**
     * Delete a BIMObject from graph
     * @param {number} dbId
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<void>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.deleteBImObject = function(dbId, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var modelId, modelMetaData, bimObject, e_5;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        modelId = model.id;
                        modelMetaData = this.mappingModelIdBimFileId[modelId];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.getBIMObject(dbId, model)
                        ];
                    case 2:
                        bimObject = _a.sent();
                        delete this.mappingModelIdBimFileId[modelId];
                        delete this.mappingBimFileIdModelId[modelMetaData.bimFileId];
                        return [
                            2 /*return*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.removeFromGraph(bimObject.id.get())
                        ];
                    case 3:
                        e_5 = _a.sent();
                        console.error("deleteBImObject", e_5);
                        throw e_5;
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Add a reference object to a node
     * @param {string} parentId
     * @param {number} dbId
     * @param {string} name
     * @param {Model} [model=this.currentModel]
     * @returns {Promise<BimObjectRef>}
     * @memberof BimObjectService
     */ BimObjectService.prototype.addReferenceObject = function(parentId, dbId, name, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var child, BIMObj;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.getBIMObject(dbId, model)
                        ];
                    case 1:
                        child = _a.sent();
                        if (!(typeof child === "undefined")) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            this.createBIMObject(dbId, name, model)
                        ];
                    case 2:
                        BIMObj = _a.sent();
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, BIMObj.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE)
                        ];
                    case 3:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            BIMObj
                        ];
                    case 4:
                        return [
                            4 /*yield*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, child.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE)
                        ];
                    case 5:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            child
                        ];
                }
            });
        });
    };
    /**
     *
     * @param parentId
     * @param dbid
     * @param model
     */ BimObjectService.prototype.removeReferenceObject = function(parentId, dbid, model) {
        if (model === void 0) model = this.currentModel;
        return __awaiter(this, void 0, void 0, function() {
            var child;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.getBIMObject(dbid, model)
                        ];
                    case 1:
                        child = _a.sent();
                        return [
                            2 /*return*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parentId, child.id.get(), Constants_1.REFERENCE_OBJECT_RELATION_NAME, Constants_1.REFERENCE_OBJECT_RELATION_TYPE)
                        ];
                }
            });
        });
    };
    /**
     * notify the service that a new model has been load into the viewer
     * @param bimFileId {String} id of the BIMFile
     * @param version {number} version of the bimFile
     * @param model {Model} model loaded into the viewer
     * @param scene {any} scene loaded
     * @param name
     */ BimObjectService.prototype.addModel = function(bimFileId, model, version, scene, name) {
        // @ts-ignore
        var modelId = model.id;
        this.mappingModelIdBimFileId[modelId] = {
            bimFileId: bimFileId,
            version: version,
            scene: scene
        };
        this.mappingNameByModel[name] = model;
        var mapping = this.mappingBimFileIdModelId[bimFileId];
        if (typeof mapping === "undefined") mapping = {
            modelId: modelId,
            version: version,
            modelScene: [
                {
                    model: model,
                    scene: scene
                }
            ]
        };
        else mapping.modelScene.push({
            model: model,
            scene: scene
        });
        this.mappingBimFileIdModelId[bimFileId] = mapping;
    };
    BimObjectService.prototype._addModel = function(bimFileId, model, name) {
        // @ts-ignore
        var modelId = model.id;
        this.mappingModelIdBimFileId[modelId] = {
            bimFileId: bimFileId,
            version: 0,
            scene: undefined
        };
        this.mappingNameByModel[name] = model;
    };
    /**
     * Get the model corresponding to the dbid and the bimfile
     * @param dbId {number} dbId of the BIMObject
     * @param bimFileId {string} id of the BIMfile
     */ BimObjectService.prototype.getModel = function(dbId, bimFileId) {
        var mapping = this.mappingBimFileIdModelId[bimFileId];
        if (typeof mapping !== "undefined") for(var i = 0; i < mapping.modelScene.length; i++){
            if (mapping.modelScene[i].scene.hasOwnProperty("options") && mapping.modelScene[i].scene["options"].dbIds.contains(dbId)) return mapping.modelScene[i].model;
        }
        return undefined;
    };
    BimObjectService.prototype.getModelByBimfile = function(bimFileId) {
        var mapping = this.mappingBimFileIdModelId[bimFileId];
        //one bimFile is not supposed to be load multipe time
        if (typeof mapping !== "undefined") return mapping.modelScene[0].model;
        return undefined;
    };
    /**
     * Get a model corresponding to the name use with caution
     * @param name
     */ BimObjectService.prototype.getModelByName = function(name) {
        return this.mappingNameByModel[name];
    };
    /**
     * @static
     * @type {number}
     * @memberof BimObjectService
     */ BimObjectService.num = 0;
    return BimObjectService;
}();
exports.BimObjectService = BimObjectService;

},{"b20fefd9d72f6b2d":"9n7zp","6a074d843bf1b8ea":"f3Ny6"}],"f3Ny6":[function(require,module,exports) {
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
 */ exports.__esModule = true;
exports.REFERENCE_OBJECT_RELATION_TYPE = exports.BIM_OBJECT_RELATION_TYPE = exports.BIM_NODE_RELATION_TYPE = exports.BIM_OBJECT_VERSION_RELATION_TYPE = exports.REFERENCE_OBJECT_RELATION_NAME = exports.BIM_OBJECT_VERSION_RELATION_NAME = exports.BIM_OBJECT_RELATION_NAME = exports.BIM_NODE_RELATION_NAME = exports.BIM_CONTEXT_RELATION_TYPE = exports.BIM_CONTEXT_RELATION_NAME = exports.BIM_OBJECT_TYPE = exports.PART_RELATION_TYPE = exports.SCENE_RELATION_TYPE = exports.PART_RELATION_NAME = exports.SCENE_TYPE = exports.SCENE_RELATION_NAME = void 0;
var spinal_env_viewer_graph_service_1 = require("44f946b368e03b14");
var constants_js_1 = require("3c0117970d993dce");
exports.SCENE_RELATION_NAME = "hasScene";
exports.SCENE_TYPE = "scene";
exports.PART_RELATION_NAME = "hasParts";
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

},{"44f946b368e03b14":"9n7zp","3c0117970d993dce":"eV0id"}],"eV0id":[function(require,module,exports) {
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

},{}],"iQm5n":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.loadModelPtr = void 0;
var spinal_core_connectorjs_type_1 = require("be10f1e5016f21cc");
var mapModelDictionary = new Map();
function loadModelPtr(model) {
    if (model instanceof spinal_core_connectorjs_type_1.File) return loadModelPtr(model._ptr);
    if (!(model instanceof spinal_core_connectorjs_type_1.Ptr)) throw new Error("loadModelPtr must take Ptr as parameter");
    if (!model.data.value && model.data.model) return Promise.resolve(model.data.model);
    else if (!model.data.value) throw new Error("Trying to load a Ptr to 0");
    if (mapModelDictionary.has(model.data.value)) return mapModelDictionary.get(model.data.value);
    if (typeof spinal_core_connectorjs_type_1.FileSystem._objects[model.data.value] !== "undefined") {
        var promise_1 = Promise.resolve(spinal_core_connectorjs_type_1.FileSystem._objects[model.data.value]);
        mapModelDictionary.set(model.data.value, promise_1);
        return promise_1;
    }
    var promise = new Promise(function(resolve, reject) {
        model.load(function(m) {
            if (!m) {
                mapModelDictionary["delete"](model.data.value);
                reject(new Error("Error in load Ptr"));
            } else resolve(m);
        });
    });
    mapModelDictionary.set(model.data.value, promise);
    return promise;
}
exports.loadModelPtr = loadModelPtr;

},{"be10f1e5016f21cc":"fRH70"}],"fBUOh":[function(require,module,exports) {
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
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
exports.SceneHelper = void 0;
var spinal_env_viewer_graph_service_1 = require("8f37b5693929b675");
var Constants_1 = require("c7802459ec641ae1");
var SceneHelper = /** @class */ function() {
    function SceneHelper() {}
    SceneHelper.initialize = function() {
        if (typeof SceneHelper.initialized !== "undefined" && SceneHelper.initialized !== null) return SceneHelper.initialized;
        SceneHelper.initialized = new Promise(function(resolve, reject) {
            SceneHelper.context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(SceneHelper.contextName);
            if (typeof SceneHelper.context === "undefined") return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(SceneHelper.contextName, SceneHelper.type).then(function(context) {
                SceneHelper.context = context;
                SceneHelper.contextId = context.getId().get();
                resolve(true);
            })["catch"](reject);
            resolve(true);
        });
        return SceneHelper.initialized;
    };
    SceneHelper.createScene = function(name, description, autoLoad) {
        return SceneHelper.initialize().then(function() {
            var sceneId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: name,
                description: description,
                autoLoad: autoLoad,
                type: Constants_1.SCENE_TYPE
            }, undefined);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(SceneHelper.contextId, sceneId, SceneHelper.contextId, Constants_1.SCENE_RELATION_NAME, Constants_1.SCENE_RELATION_TYPE);
        });
    };
    SceneHelper.addModelToScene = function(sceneId, bimFileId) {
        return SceneHelper.initialize().then(function() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(sceneId, bimFileId, SceneHelper.contextId, Constants_1.PART_RELATION_NAME, Constants_1.PART_RELATION_TYPE);
        });
    };
    SceneHelper.getBimFilesFromScene = function(sceneId) {
        return SceneHelper.initialize().then(function() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(sceneId, [
                Constants_1.PART_RELATION_NAME
            ]);
        });
    };
    SceneHelper.getSceneFromNode = function(nodeId) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            SceneHelper.initialize()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
                                Constants_1.SCENE_RELATION_NAME
                            ])
                        ];
                }
            });
        });
    };
    SceneHelper.addSceneToNode = function(nodeId, sceneId) {
        return SceneHelper.initialize().then(function() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(nodeId, sceneId, SceneHelper.contextId, Constants_1.SCENE_RELATION_NAME, Constants_1.SCENE_RELATION_TYPE);
        });
    };
    SceneHelper.contextName = "Scenes";
    SceneHelper.type = "SpinalService";
    return SceneHelper;
}();
exports.SceneHelper = SceneHelper;

},{"8f37b5693929b675":"9n7zp","c7802459ec641ae1":"f3Ny6"}],"feevh":[function(require,module,exports) {
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
 */ exports.__esModule = true;
exports.SceneAlignMethod = void 0;
var SceneAlignMethod;
(function(SceneAlignMethod) {
    SceneAlignMethod[SceneAlignMethod["CenterToCenter"] = 0] = "CenterToCenter";
    SceneAlignMethod[SceneAlignMethod["OriginToOrigin"] = 1] = "OriginToOrigin";
    SceneAlignMethod[SceneAlignMethod["ShareCoordinates"] = 2] = "ShareCoordinates";
})(SceneAlignMethod = exports.SceneAlignMethod || (exports.SceneAlignMethod = {}));

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=dist.98fb3e50.js.map
