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
})({"gzkbg":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalTimeSeriesArchiveDay = exports.SpinalTimeSeriesArchive = exports.SpinalTimeSeries = exports.SpinalServiceTimeseries = exports.SpinalBmsEndpointGroup = exports.SpinalBmsEndpoint = exports.SpinalBmsNetwork = exports.SpinalBmsDevice = exports.InputDataEndpointDataType = exports.InputDataEndpointType = exports.NetworkService = void 0;
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
 */ const spinal_core_connectorjs_type_1 = require("7845027fdfdd9319");
const spinal_env_viewer_graph_service_1 = require("9222b9beb8ba70d7");
const spinal_model_timeseries_1 = require("b98f112a2d770081");
Object.defineProperty(exports, "SpinalServiceTimeseries", {
    enumerable: true,
    get: function() {
        return spinal_model_timeseries_1.SpinalServiceTimeseries;
    }
});
Object.defineProperty(exports, "SpinalTimeSeries", {
    enumerable: true,
    get: function() {
        return spinal_model_timeseries_1.SpinalTimeSeries;
    }
});
Object.defineProperty(exports, "SpinalTimeSeriesArchive", {
    enumerable: true,
    get: function() {
        return spinal_model_timeseries_1.SpinalTimeSeriesArchive;
    }
});
Object.defineProperty(exports, "SpinalTimeSeriesArchiveDay", {
    enumerable: true,
    get: function() {
        return spinal_model_timeseries_1.SpinalTimeSeriesArchiveDay;
    }
});
const InputDataModel_1 = require("c453a070b1e95124");
Object.defineProperty(exports, "InputDataEndpointDataType", {
    enumerable: true,
    get: function() {
        return InputDataModel_1.InputDataEndpointDataType;
    }
});
Object.defineProperty(exports, "InputDataEndpointType", {
    enumerable: true,
    get: function() {
        return InputDataModel_1.InputDataEndpointType;
    }
});
const SpinalBms_1 = require("83ad18923945f353");
Object.defineProperty(exports, "SpinalBmsDevice", {
    enumerable: true,
    get: function() {
        return SpinalBms_1.SpinalBmsDevice;
    }
});
Object.defineProperty(exports, "SpinalBmsEndpoint", {
    enumerable: true,
    get: function() {
        return SpinalBms_1.SpinalBmsEndpoint;
    }
});
Object.defineProperty(exports, "SpinalBmsEndpointGroup", {
    enumerable: true,
    get: function() {
        return SpinalBms_1.SpinalBmsEndpointGroup;
    }
});
Object.defineProperty(exports, "SpinalBmsNetwork", {
    enumerable: true,
    get: function() {
        return SpinalBms_1.SpinalBmsNetwork;
    }
});
const spinal_env_viewer_plugin_documentation_service_1 = require("f8258a9a593b7f95");
const throttle = require("506b7960f033396");
/**
 * @export
 * @class NetworkService
 */ class NetworkService {
    /**
     *Creates an instance of NetworkService.
     * @memberof NetworkService
     */ constructor(useTimeseries = true){
        this.spinalServiceTimeseries = new spinal_model_timeseries_1.SpinalServiceTimeseries();
        this.useTimeseries = useTimeseries;
        this.useDelay = 0;
    }
    setupDelay(timeout) {
        this.useDelay = timeout;
    }
    /**
     * @param {spinal.Model} forgeFile
     * @param {ConfigService} configService
     * @param {boolean} [autoCreate=true]
     * @returns {Promise<{contextId:string, networkId: string}>}
     * @memberof NetworkService
     */ init(forgeFile, configService, autoCreate = true) {
        return __awaiter(this, void 0, void 0, function*() {
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.setGraph(forgeFile);
            this.context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(configService.contextName);
            if (this.context === undefined) {
                if (autoCreate === true) this.context = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(configService.contextName, configService.contextType, new spinal_core_connectorjs_type_1.Model());
                else throw Error(`Context named "${configService.contextName}" is not found in the graph.`);
            }
            this.contextId = this.context.getId().get();
            const childrenContext = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(this.contextId, this.contextId);
            let childFoundId = "";
            for (const childContext of childrenContext)if (typeof childContext.networkName !== "undefined" && childContext.networkName.get() === configService.networkName) {
                childFoundId = childContext.id.get();
                break;
            }
            if (childFoundId === "") childFoundId = yield this.createNewBmsNetwork(this.contextId, configService.networkType, configService.networkName).then((res)=>res.id.get());
            this.networkId = childFoundId;
            return {
                contextId: this.contextId,
                networkId: childFoundId
            };
        });
    }
    /**
     * @param {string} parentId
     * @param {string} typeName
     * @param {string} networkName
     * @returns {Promise<any>}
     * @memberof NetworkService
     */ createNewBmsNetwork(parentId, typeName, networkName) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = new SpinalBms_1.SpinalBmsNetwork(networkName, typeName);
            const tmpInfo = {
                networkName,
                typeName,
                type: SpinalBms_1.SpinalBmsNetwork.nodeTypeName,
                name: networkName,
                idNetwork: res.id.get()
            };
            const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(tmpInfo, res);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, childId, this.contextId, SpinalBms_1.SpinalBmsNetwork.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
        });
    }
    /**
     * @param {string} parentId
     * @param {InputDataDevice} obj
     * @returns {Promise<any>}
     * @memberof NetworkService
     */ createNewBmsDevice(parentId, obj) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = new SpinalBms_1.SpinalBmsDevice(obj.name, obj.type, obj.path, obj.id);
            const tmpInfo = {
                type: SpinalBms_1.SpinalBmsDevice.nodeTypeName,
                name: obj.name,
                idNetwork: obj.id
            };
            const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(tmpInfo, res);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, childId, this.contextId, SpinalBms_1.SpinalBmsDevice.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this._createAttributes(childId, res);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
        });
    }
    /**
     * @param {string} parentId
     * @param {InputDataEndpointGroup} obj
     * @returns {Promise<any>}
     * @memberof NetworkService
     */ createNewBmsEndpointGroup(parentId, obj) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = new SpinalBms_1.SpinalBmsEndpointGroup(obj.name, obj.type, obj.path, obj.id);
            const tmpInfo = {
                type: SpinalBms_1.SpinalBmsEndpointGroup.nodeTypeName,
                name: obj.name,
                idNetwork: obj.id
            };
            const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(tmpInfo, res);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, childId, this.contextId, SpinalBms_1.SpinalBmsEndpointGroup.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this._createAttributes(childId, res);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
        });
    }
    /**
     * @param {string} parentId
     * @param {InputDataEndpoint} obj
     * @returns {Promise<any>}
     * @memberof NetworkService
     */ createNewBmsEndpoint(parentId, obj) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = new SpinalBms_1.SpinalBmsEndpoint(obj.name, obj.path, obj.currentValue, obj.unit, InputDataModel_1.InputDataEndpointDataType[obj.dataType], InputDataModel_1.InputDataEndpointType[obj.type], obj.id);
            const tmpInfo = {
                type: SpinalBms_1.SpinalBmsEndpoint.nodeTypeName,
                name: obj.name,
                idNetwork: obj.id
            };
            const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(tmpInfo, res);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, childId, this.contextId, SpinalBms_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this._createAttributes(childId, res);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
        });
    }
    createNewBmsEndpointWithoutContext(parentId, obj) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = new SpinalBms_1.SpinalBmsEndpoint(obj.name, obj.path, obj.currentValue, obj.unit, InputDataModel_1.InputDataEndpointDataType[obj.dataType], InputDataModel_1.InputDataEndpointType[obj.type], obj.id);
            const tmpInfo = {
                type: SpinalBms_1.SpinalBmsEndpoint.nodeTypeName,
                name: obj.name,
                idNetwork: obj.id
            };
            const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(tmpInfo, res);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, childId, SpinalBms_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this._createAttributes(childId, res);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
        });
    }
    /**
     * @param {InputDataDevice} obj
     * @param {*} [date=null]
     * @returns {Promise<void>}
     * @memberof NetworkService
     */ updateData(obj, date = null) {
        return __awaiter(this, void 0, void 0, function*() {
            const contextChildren = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(this.networkId, this.contextId);
            for (const child of contextChildren){
                if (typeof child.idNetwork !== "undefined" && child.idNetwork.get() === obj.id) return this.updateModel(child, obj, date);
            }
            return this.createNewBmsDevice(this.networkId, obj).then((child)=>{
                return this.updateModel(child, obj, date);
            });
        });
    }
    /**
     * @private
     * @param {*} node
     * @param {(InputDataDevice|InputDataEndpointGroup)} reference
     * @param {*} [date=null]
     * @returns {Promise<void>}
     * @memberof NetworkService
     */ updateModel(node, reference, date = null) {
        return __awaiter(this, void 0, void 0, function*() {
            const contextChildren = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(node.id.get(), this.contextId);
            const notPresent = [];
            const promises = [];
            for (const refChild of reference.children){
                let childFound = false;
                for (const child of contextChildren)if (child.idNetwork.get() === refChild.id) switch(child.type.get()){
                    case SpinalBms_1.SpinalBmsDevice.nodeTypeName:
                        promises.push(this.updateModel(child, refChild, date));
                        childFound = true;
                        break;
                    case SpinalBms_1.SpinalBmsEndpointGroup.nodeTypeName:
                        promises.push(this.updateModel(child, refChild, date));
                        childFound = true;
                        break;
                    case SpinalBms_1.SpinalBmsEndpoint.nodeTypeName:
                        promises.push(this.updateEndpoint(child, refChild, date));
                        childFound = true;
                        break;
                    default:
                        break;
                }
                if (!childFound) notPresent.push(refChild);
            }
            let prom;
            for (const item of notPresent)switch(item.nodeTypeName){
                case SpinalBms_1.SpinalBmsDevice.nodeTypeName:
                    prom = this.createNewBmsDevice(node.id.get(), item).then((child)=>{
                        return this.updateModel(child, item, date);
                    });
                    promises.push(prom);
                    break;
                case SpinalBms_1.SpinalBmsEndpointGroup.nodeTypeName:
                    prom = this.createNewBmsEndpointGroup(node.id.get(), item).then((child)=>{
                        return this.updateModel(child, item, date);
                    });
                    promises.push(prom);
                    break;
                case SpinalBms_1.SpinalBmsEndpoint.nodeTypeName:
                    prom = this.createNewBmsEndpoint(node.id.get(), item).then((child)=>{
                        return this.updateEndpoint(child, item, date);
                    });
                    promises.push(prom);
                    break;
                default:
                    break;
            }
            yield Promise.all(promises);
        });
    }
    /**
     * @param {*} node
     * @param {InputDataEndpoint} reference
     * @param {*} [date=null]
     * @returns {Promise<void>}
     * @memberof NetworkService
     */ updateEndpoint(node, reference, date = null) {
        return __awaiter(this, void 0, void 0, function*() {
            const element = yield node.element.load();
            // await this._createAttributes(node.id.get(), element);
            element.currentValue.set(reference.currentValue);
            if (typeof reference.currentValue === "number" || typeof reference.currentValue === "boolean") yield this.setEndpointValue(node.id.get(), reference.currentValue, date);
        });
    }
    /**
     * @returns {Promise<string[]>}
     * @memberof NetworkService
     */ getNetworks() {
        return __awaiter(this, void 0, void 0, function*() {
            const childrenContext = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(this.contextId, this.contextId);
            return childrenContext.map((element)=>element.id.get());
        });
    }
    /**
     * @private
     * @param {string} idElement
     * @param {string[]} relationNames
     * @returns {Promise<string[]>}
     * @memberof NetworkService
     */ find(idElement, relationNames, nodeTypeName) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(idElement);
            const childrenContext = yield node.find(relationNames, (node)=>{
                if (node.getType().get() === nodeTypeName) return true;
                return false;
            });
            return childrenContext.map((element)=>{
                // hack, call private method while 'find' is not in service
                const graphs = spinal_env_viewer_graph_service_1.SpinalGraphService;
                graphs._addNode(element);
                return element.getId().get();
            });
        });
    }
    /**
     * @param {string} idDevice
     * @returns {Promise<string[]>}
     * @memberof NetworkService
     */ getEndpoint(idDevice) {
        const relationNames = [
            SpinalBms_1.SpinalBmsEndpointGroup.relationName,
            SpinalBms_1.SpinalBmsEndpoint.relationName
        ];
        return this.find(idDevice, relationNames, SpinalBms_1.SpinalBmsEndpoint.nodeTypeName);
    }
    getDevices(idNetwork) {
        const relationNames = [
            SpinalBms_1.SpinalBmsDevice.relationName,
            SpinalBms_1.SpinalBmsEndpointGroup.relationName,
            SpinalBms_1.SpinalBmsEndpoint.relationName
        ];
        return this.find(idNetwork, relationNames, SpinalBms_1.SpinalBmsDevice.nodeTypeName);
    }
    /**
     * @param {string} idNode
     * @returns {spinal.Model}
     * @memberof NetworkService
     */ getInfo(idNode) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(idNode);
    }
    /**
     * @param {string} idNode
     * @returns {Promise<spinal.Model>}
     * @memberof NetworkService
     */ getData(idNode) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(idNode).element.load();
    }
    /**
     * @param {string} idEndpoint
     * @returns {Promise<SpinalTimeSeries>}
     * @memberof NetworkService
     */ getTimeseries(idEndpoint) {
        return this.spinalServiceTimeseries.getOrCreateTimeSeries(idEndpoint);
    }
    getTimeseriesProm(endpoint) {
        return __awaiter(this, void 0, void 0, function*() {
            const timeseriesLst = yield endpoint.getChildren([
                spinal_model_timeseries_1.SpinalTimeSeries.relationName
            ]);
            if (timeseriesLst.length === 0) return;
            return timeseriesLst[0];
        });
    }
    /**
     * @param {string} idEndpoint
     * @param {(string|boolean|number)} value
     * @param {(number|string|Date)} [date=null]
     * @returns {Promise<void>}
     * @memberof NetworkService
     */ setEndpointValue(idEndpoint, value, date = null) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(idEndpoint);
            const element = yield node.element.load();
            element.currentValue.set(value);
            if (this.useTimeseries === true && (typeof value === "number" || typeof value === "boolean")) {
                if (this.useDelay === 0) return pushData(this.spinalServiceTimeseries, idEndpoint, element.currentValue, date);
                if (dicEnd.has(idEndpoint)) {
                    const fct = dicEnd.get(idEndpoint);
                    fct(this.spinalServiceTimeseries, idEndpoint, element.currentValue, date);
                } else {
                    const fct = throttle(pushData, 180000);
                    dicEnd.set(idEndpoint, fct);
                    fct(this.spinalServiceTimeseries, idEndpoint, element.currentValue, date);
                }
            // if (date === null) {
            //   return this.spinalServiceTimeseries.pushFromEndpoint(idEndpoint, value);
            // }
            // return this.spinalServiceTimeseries.insertFromEndpoint(
            //     idEndpoint,
            //     value,
            //     new Date(date),
            // );
            }
        });
    }
    linkControlEndpointToEndPoint(controlEndPoint, endPoint) {
        return __awaiter(this, void 0, void 0, function*() {
            // @ts-ignore
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(endPoint);
            const [endpointTimeseries, endPointElement, controlEndPointTimeseries, controlEndPointElement, controlEndPointCatAttr] = yield Promise.all([
                this.getTimeseriesProm(endPoint),
                endPoint.element.load(),
                this.getTimeseriesProm(controlEndPoint).catch(()=>undefined),
                controlEndPoint.element.load(),
                spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getCategoryByName(controlEndPoint, "default")
            ]);
            if (controlEndPointTimeseries) yield controlEndPoint.removeChild(controlEndPointTimeseries, spinal_model_timeseries_1.SpinalTimeSeries.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            const endPointDataModel = endPointElement.currentValue;
            controlEndPointElement.mod_attr("currentValue", endPointDataModel);
            const [attrs] = yield Promise.all([
                spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(controlEndPoint, controlEndPointCatAttr),
                controlEndPoint.addChild(endpointTimeseries, spinal_model_timeseries_1.SpinalTimeSeries.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE)
            ]);
            for (const attr of attrs)if (attr.label.get() === "currentValue") {
                attr.mod_attr("value", endPointDataModel);
                return;
            }
        });
    }
    _createAttributes(nodeId, elementModel) {
        const categoryName = "default";
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        return spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addCategoryAttribute(realNode, categoryName).then((attributeCategory)=>{
            const promises = [];
            for (const key of elementModel._attribute_names)promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(realNode, attributeCategory, key, elementModel[key]));
            return Promise.all(promises);
        }).catch((err)=>{});
    }
}
exports.NetworkService = NetworkService;
const dicEnd = new Map();
function pushData(spinalServiceTimeseries, idEndpoint, value, date) {
    if (date === null) return spinalServiceTimeseries.pushFromEndpoint(idEndpoint, value.get());
    return spinalServiceTimeseries.insertFromEndpoint(idEndpoint, value.get(), new Date(date));
}
exports.default = NetworkService;

},{"7845027fdfdd9319":"fRH70","9222b9beb8ba70d7":"9n7zp","b98f112a2d770081":"hIcty","c453a070b1e95124":"axWFA","83ad18923945f353":"auUMP","f8258a9a593b7f95":"5rYVR","506b7960f033396":"bGJVT"}],"hIcty":[function(require,module,exports) {
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
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
const SpinalServiceTimeseries_1 = require("5c56b993bdcda2f");
exports.default = SpinalServiceTimeseries_1.SpinalServiceTimeseries;
__exportStar(require("a919d2c2e49c76df"), exports);
__exportStar(require("a2e0d7aeb007b5a5"), exports);
__exportStar(require("9674c6d1dab452a2"), exports);
__exportStar(require("cb68165c308302e5"), exports);
__exportStar(require("5c56b993bdcda2f"), exports);
__exportStar(require("4f1769df52aef351"), exports);
__exportStar(require("b84174630d16cff5"), exports);
__exportStar(require("64e6e3260a6998ef"), exports);
__exportStar(require("52cd7e9db88348a5"), exports);
__exportStar(require("4cff2b6dda2efed9"), exports);

},{"5c56b993bdcda2f":"fOMqN","a919d2c2e49c76df":"4G99s","a2e0d7aeb007b5a5":"bdAx9","9674c6d1dab452a2":"g4XiH","cb68165c308302e5":"7XQE3","4f1769df52aef351":"1AJXV","b84174630d16cff5":"9jtWX","64e6e3260a6998ef":"6IJ8H","52cd7e9db88348a5":"ejMvW","4cff2b6dda2efed9":"8FqTr"}],"fOMqN":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalServiceTimeseries = void 0;
const spinal_env_viewer_graph_service_1 = require("20eabff492de6b9e");
const spinal_env_viewer_plugin_documentation_service_1 = require("61e48e365e9dd2df");
const SpinalTimeSeries_1 = require("2fc76330df808c25");
const SpinalTimeSeriesConfig_1 = require("c14b2d98ec2b3cc4");
const asyncGenToArray_1 = require("c8f7ec2ed7f42bc5");
/**
 * @class SpinalServiceTimeseries
 */ class SpinalServiceTimeseries {
    /**
     *Creates an instance of SpinalServiceTimeseries.
     * @memberof SpinalServiceTimeseries
     */ constructor(){
        this.timeSeriesDictionnary = new Map();
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {(number|boolean)} value
     * @returns {Promise<boolean>}
     * @memberof SpinalServiceTimeseries
     */ pushFromEndpoint(endpointNodeId, value) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const timeseries = yield this.getOrCreateTimeSeries(endpointNodeId);
                let valueToPush = value;
                if (typeof value === "boolean") valueToPush = value ? 1 : 0;
                yield timeseries.push(valueToPush);
            } catch (error) {
                return false;
            }
            return true;
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {(number|boolean)} value
     * @param {(number|string|Date)} date
     * @returns {Promise<boolean>}
     * @memberof SpinalServiceTimeseries
     */ insertFromEndpoint(endpointNodeId, value, date) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const timeseries = yield this.getOrCreateTimeSeries(endpointNodeId);
                let valueToPush = value;
                if (typeof value === "boolean") valueToPush = value ? 1 : 0;
                yield timeseries.insert(valueToPush, date);
            } catch (error) {
                return false;
            }
            return true;
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @returns {Promise<boolean>}
     * @memberof SpinalServiceTimeseries
     */ hasTimeSeries(endpointNodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.timeSeriesDictionnary.has(endpointNodeId)) return true;
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(endpointNodeId, [
                SpinalTimeSeries_1.SpinalTimeSeries.relationName
            ]);
            if (children.length === 0) return false;
            return true;
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @returns {Promise<SpinalTimeSeries>}
     * @memberof SpinalServiceTimeseries
     */ getOrCreateTimeSeries(endpointNodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.timeSeriesDictionnary.has(endpointNodeId)) return this.timeSeriesDictionnary.get(endpointNodeId);
            const cfg = yield this.getConfigFormEndpoint(endpointNodeId);
            const promise = new Promise(this.getOrCreateTimeSeriesProm(endpointNodeId, cfg));
            this.timeSeriesDictionnary.set(endpointNodeId, promise);
            return promise;
        });
    }
    getConfigFormEndpoint(endpointNodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(endpointNodeId);
                const cat = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(node, "default");
                const attrs = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, cat);
                let maxDay = null;
                let initialBlockSize = null;
                for (const attr of attrs)switch(attr.label.get()){
                    case "timeSeries maxDay":
                        maxDay = parseInt(attr.value.get().toString());
                        break;
                    case "timeSeries initialBlockSize":
                        initialBlockSize = parseInt(attr.value.get().toString());
                        break;
                    default:
                        break;
                }
                maxDay = maxDay === null ? SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.MAX_DAY : maxDay;
                initialBlockSize = initialBlockSize === null ? SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.INIT_BLOCK_SIZE : initialBlockSize;
                //
                yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategoryName(node, "default", "timeSeries maxDay", maxDay.toString());
                yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategoryName(node, "default", "timeSeries initialBlockSize", initialBlockSize.toString());
                return {
                    maxDay: maxDay,
                    initialBlockSize: initialBlockSize
                };
            } catch (e) {
                return {
                    maxDay: SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.MAX_DAY,
                    initialBlockSize: SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.INIT_BLOCK_SIZE
                };
            }
        });
    }
    getOrCreateTimeSeriesProm(endpointNodeId, cfg) {
        return (resolve)=>__awaiter(this, void 0, void 0, function*() {
                const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(endpointNodeId, [
                    SpinalTimeSeries_1.SpinalTimeSeries.relationName
                ]);
                let timeSeriesProm;
                if (children.length === 0) {
                    // create element
                    const timeSeries = new SpinalTimeSeries_1.SpinalTimeSeries(cfg.initialBlockSize, cfg.maxDay);
                    timeSeriesProm = timeSeries;
                    // create node
                    const node = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                        timeSeriesId: timeSeries.id.get()
                    }, timeSeries);
                    // push node to parent
                    yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(endpointNodeId, node, SpinalTimeSeries_1.SpinalTimeSeries.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                } else {
                    const timeSeries = yield children[0].element.load();
                    yield timeSeries.setConfig(cfg.initialBlockSize, cfg.maxDay);
                    timeSeriesProm = timeSeries;
                }
                resolve(timeSeriesProm);
                return timeSeriesProm;
            });
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @return {Promise<SpinalDateValue>}
     * @memberof SpinalServiceTimeseries
     */ getCurrent(timeseries) {
        return timeseries.getCurrent();
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalServiceTimeseries
     */ getDataFromLast24Hours(timeseries) {
        return timeseries.getDataFromLast24Hours();
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @param {number} [numberOfHours=1]
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalServiceTimeseries
     */ getDataFromLastHours(timeseries, numberOfHours = 1) {
        return timeseries.getDataFromLastHours(numberOfHours);
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalServiceTimeseries
     */ getDataFromYesterday(timeseries) {
        return timeseries.getDataFromYesterday();
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @param {(string|number|Date)} [start=0]
     * @param {(string|number|Date)} [end=Date.now()]
     * @returns {Promise<SpinalDateValue[]>}
     * @memberof SpinalServiceTimeseries
     */ getFromIntervalTime(timeseries, start = 0, end = Date.now()) {
        return timeseries.getFromIntervalTime(start, end);
    }
    /**
     * @param {SpinalTimeSeries} timeseries
     * @param {(string|number|Date)} [start=0]
     * @param {(string|number|Date)} [end=Date.now()]
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalServiceTimeseries
     */ getFromIntervalTimeGen(timeseries, start = 0, end = Date.now()) {
        return timeseries.getFromIntervalTimeGen(start, end);
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @return {Promise<SpinalTimeSeries>}
     * @memberof SpinalServiceTimeseries
     */ getTimeSeries(endpointNodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.timeSeriesDictionnary.has(endpointNodeId)) return this.timeSeriesDictionnary.get(endpointNodeId);
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(endpointNodeId, [
                SpinalTimeSeries_1.SpinalTimeSeries.relationName
            ]);
            if (children.length === 0) return undefined;
            const prom = children[0].element.load();
            this.timeSeriesDictionnary.set(endpointNodeId, prom);
            return prom;
        });
    }
    /**
     * @param {number} [numberOfHours=1]
     * @return {TimeSeriesIntervalDate}
     * @memberof SpinalServiceTimeseries
     */ getDateFromLastHours(numberOfHours = 1) {
        const end = Date.now();
        const start = new Date();
        start.setUTCHours(start.getUTCHours() - numberOfHours);
        return {
            start,
            end
        };
    }
    /**
     * @param {number} [numberOfDays=1]
     * @return {TimeSeriesIntervalDate}
     * @memberof SpinalServiceTimeseries
     */ getDateFromLastDays(numberOfDays = 1) {
        const end = Date.now();
        const start = new Date();
        start.setDate(start.getDate() - numberOfDays);
        return {
            start,
            end
        };
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<SpinalDateValue[]>}
     * @memberof SpinalServiceTimeseries
     */ getData(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const timeSeries = yield this.getTimeSeries(endpointNodeId);
            if (!timeSeries) throw new Error("endpoint have no timeseries");
            return (0, asyncGenToArray_1.asyncGenToArray)((yield this.getFromIntervalTimeGen(timeSeries, timeSeriesIntervalDate.start, timeSeriesIntervalDate.end)));
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getMean(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            if (data.length === 0) return NaN;
            if (data.length === 1) return data[0].value;
            let res = 0;
            const fullTime = data[data.length - 1].date - data[0].date;
            for(let idx = 1, d1 = data[0]; idx < data.length; d1 = data[idx++])// (((d1 + d2) / 2) * (t2 - t1)) / fulltime
            res += (d1.value + data[idx].value) / 2 * (data[idx].date - d1.date) / fullTime;
            return res;
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getMeanWithoutNegativeValues(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const dataNotFiltred = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            //exclude negative values from data
            const data = dataNotFiltred.filter((x)=>{
                return x.value >= 0;
            });
            if (data.length === 0) return NaN;
            if (data.length === 1) return data[0].value;
            let res = 0;
            const fullTime = data[data.length - 1].date - data[0].date;
            for(let idx = 1, d1 = data[0]; idx < data.length; d1 = data[idx++])// (((d1 + d2) / 2) * (t2 - t1)) / fulltime
            res += (d1.value + data[idx].value) / 2 * (data[idx].date - d1.date) / fullTime;
            return res;
        });
    }
    /**
     * getIntegral | time in ms
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getIntegral(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            if (data.length === 0) return NaN;
            if (data.length === 1) return data[0].value;
            let res = 0;
            for(let idx = 1, d1 = data[0]; idx < data.length; d1 = data[idx++])// ((d1 + d2) / 2) * (t2 - t1)
            res += (d1.value + data[idx].value) / 2 * (data[idx].date - d1.date);
            return res;
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return  {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getMax(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            if (data.length === 0) return 0;
            return data.reduce((a, b)=>a < b.value ? b.value : a, data[0].value);
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getMin(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            if (data.length === 0) return 0;
            return data.reduce((a, b)=>a > b.value ? b.value : a, data[0].value);
        });
    }
    /**
     * @param {EndpointId} endpointNodeId
     * @param {TimeSeriesIntervalDate} timeSeriesIntervalDate
     * @return {Promise<number>}
     * @memberof SpinalServiceTimeseries
     */ getSum(endpointNodeId, timeSeriesIntervalDate) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.getData(endpointNodeId, timeSeriesIntervalDate);
            return data.reduce((a, b)=>a + b.value, 0);
        });
    }
}
exports.SpinalServiceTimeseries = SpinalServiceTimeseries;

},{"20eabff492de6b9e":"9n7zp","61e48e365e9dd2df":"5rYVR","2fc76330df808c25":"6IJ8H","c14b2d98ec2b3cc4":"ejMvW","c8f7ec2ed7f42bc5":"8FqTr"}],"5rYVR":[function(require,module,exports) {
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
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
const ServiceDocumentation_1 = require("b9d1d26877867be2");
__exportStar(require("89dbadba61f9c804"), exports);
__exportStar(require("64d5afa42c39d21f"), exports);
__exportStar(require("1d87f1f73d504a0"), exports);
__exportStar(require("37ff0902396a35fe"), exports);
__exportStar(require("eca7d675133130d9"), exports);
__exportStar(require("4137d17e2135b361"), exports);
__exportStar(require("b9d1d26877867be2"), exports);
exports.default = ServiceDocumentation_1.serviceDocumentation;

},{"b9d1d26877867be2":"acYP9","89dbadba61f9c804":"igGim","64d5afa42c39d21f":"aLHGL","1d87f1f73d504a0":"j401W","37ff0902396a35fe":"38glt","eca7d675133130d9":"f52Mg","4137d17e2135b361":"3mvBM"}],"acYP9":[function(require,module,exports) {
var global = arguments[3];
"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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
exports.serviceDocumentation = exports.ServiceDocumentation = void 0;
const AttributeService_1 = require("8e207847953a6ae5");
const NoteService_1 = require("8115195e9a1b475b");
const UrlService_1 = require("f2d1f9b5c8ae350");
// @ts-ignore
const globalType = typeof window === "undefined" ? global : window;
function applyMixins(derivedConstructor, baseConstructors) {
    baseConstructors.forEach((baseConstructor)=>{
        Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name)=>{
            Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(baseConstructor.prototype, name));
        });
    });
}
class ServiceDocumentation {
}
exports.ServiceDocumentation = ServiceDocumentation;
applyMixins(ServiceDocumentation, [
    AttributeService_1.AttributeService,
    NoteService_1.NoteService,
    UrlService_1.UrlService
]);
const serviceDocumentation = new ServiceDocumentation();
exports.serviceDocumentation = serviceDocumentation;
globalType.spinal["serviceDocumentation"] = serviceDocumentation; /*

class ServiceDocumentation implements AttributeService, NoteService, UrlService {

    ///////////////////////////////////////////////////////////////////////
    //                       Attribute Service                           //
    ///////////////////////////////////////////////////////////////////////

    addCategoryAttribute: (node: any, label: string) => Promise<any>;
    getCategoryByName: (node: any, categoryName: string) => Promise<any>;
    getCategory: (node: any) => Promise<any>;
    getAttributesByCategory: (node: any, categoryName: string) => Promise<any[]>;
    addAttributeByCategory: (node: any, category: any, label: string, value: string) => void;
    addAttributeByCategoryName: (node: any, categoryName: string, label: string, value: string) => Promise<void>;
    addAttribute: (node: any, label: string, value: string) => Promise<void>;
    getAllAttributes: (node: any) => Promise<any>;
    getAttributes: (node: any) => Promise<any>;
    compareAttr: (listAttr1: any, listAttr2: any) => any[];
    getAttributesShared: (listOfdbId: number[]) => Promise<any>;
    getBuildingInformationAttributes: (node: any) => Promise<any[]>;
    setBuildingInformationAttributes: (node: any) => Promise<any[]>;
    findAttributesByLabel: (node: any, label: string, category?: any) => Promise<any>;
    removeAttributesByLabel: (node: any, label: string) => void;

    ///////////////////////////////////////////////////////////////////////
    //                         NOTE Service                              //
    ///////////////////////////////////////////////////////////////////////

    addNote: (node: any, userInfo: { username: string; userId: number; }, note: string) => Promise<void>;
    getNotes: (node: any) => Promise<any>;
    editNote: (element: any, note: string) => void;
    predicate: (node: any) => boolean;

    ///////////////////////////////////////////////////////////////////////
    //                          URL Service                              //
    ///////////////////////////////////////////////////////////////////////

    addURL: (node: any, urlName: string, urlLink: string) => Promise<any>;
    getURL: (node: any, urlName?: string) => Promise<any>;
    getParents: (node: any, relationNames: string[]) => Promise<any>;
    getParentGroup: (node: any) => void;
    deleteURL: (node: any, label: string) => Promise<void>;

}

*/ 

},{"8e207847953a6ae5":"j401W","8115195e9a1b475b":"f52Mg","f2d1f9b5c8ae350":"3mvBM"}],"j401W":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeService = exports.AttributeService = void 0;
const spinal_core_connectorjs_type_1 = require("e6daa58395988a2a");
const spinal_env_viewer_context_geographic_service_1 = require("d7f8938e0a172d8e");
const spinal_env_viewer_graph_service_1 = require("5cd25cc0bf84ff50");
const spinal_models_documentation_1 = require("3896d5730797fb91");
const constants_1 = require("440ab2cd4e10922a");
/**
 * @class AttributeService
 */ class AttributeService {
    constructor(){}
    /**
     * This method creates a category and link it to the node passed in parameter. It returs an object of category
     * @param  {SpinalNode<any>} node - node on which the category must be linked
     * @param  {string} categoryName - The category name
     * @return {*}  {Promise<ICategory>}
     * @memberof AttributeService
     */ addCategoryAttribute(node, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            categoryName = categoryName.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("Node must be a SpinalNode.");
            if (categoryName.toString().trim().length === 0) throw new Error("Category name must be a string and have at leat one character.");
            const categoryExist = yield this.getCategoryByName(node, categoryName);
            if (categoryExist) return categoryExist;
            const categoryModel = new spinal_env_viewer_graph_service_1.SpinalNode(categoryName, constants_1.CATEGORY_TYPE, new spinal_core_connectorjs_type_1.Lst());
            const categoryFound = yield node.addChild(categoryModel, constants_1.NODE_TO_CATEGORY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return this._getCategoryElement(categoryFound);
        });
    }
    /**
     * This method deletes a category from the given node.
     * @param  {SpinalNode<any>} node - node on which the category to be deleted is
     * @param  {number} serverId - The server ID for the category to delete
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ delCategoryAttribute(node, serverId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("Node must be a SpinalNode.");
            if (serverId === 0) throw new Error("Invalid server ID.");
            const child = spinal_core_connectorjs_type_1.FileSystem._objects[serverId];
            if (child instanceof spinal_env_viewer_graph_service_1.SpinalNode) yield node.removeChild(child, constants_1.NODE_TO_CATEGORY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {(SpinalNode<any> | ICategory | string)} category
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ deleteAttributeCategory(node, category) {
        return __awaiter(this, void 0, void 0, function*() {
            let _category;
            if (category instanceof spinal_env_viewer_graph_service_1.SpinalNode) _category = category;
            else if (typeof category === "string") {
                let temp = yield this.getCategoryByName(node, category);
                _category = temp.node;
            } else if (category.node instanceof spinal_env_viewer_graph_service_1.SpinalNode) _category = category.node;
            if (_category instanceof spinal_env_viewer_graph_service_1.SpinalNode) return node.removeChild(_category, constants_1.NODE_TO_CATEGORY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            throw new Error("category not found");
        });
    }
    /**
     * This method changes the name of a category from the given node.
     * @param  {SpinalNode<any>} node - node on which the category to be edited is
     * @param  {number} serverId - The server ID for the category to edit
     * @param  {string} categoryName - The new category name
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ editCategoryAttribute(node, serverId, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            categoryName = categoryName.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("Node must be a SpinalNode.");
            if (serverId === 0) throw new Error("Invalid server ID.");
            if (categoryName.length === 0) throw new Error("Category name must be a string and have at leat one character.");
            const child = spinal_core_connectorjs_type_1.FileSystem._objects[serverId];
            if (child instanceof spinal_env_viewer_graph_service_1.SpinalNode) child.info.name.set(categoryName);
        });
    }
    /**
     * This method takes as parameter a node and return an array of All categories of attributes linked to this node
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<ICategory[]>}
     * @memberof AttributeService
     */ getCategory(node) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a SpinalNode instance");
            const categories = yield node.getChildren(constants_1.NODE_TO_CATEGORY_RELATION);
            const promises = categories.map((el)=>this._getCategoryElement(el));
            return Promise.all(promises);
        });
    }
    /**
     * This method takes a node and string(category name) as parameters and check if the node has a categorie of attribute which matches the category name
     * @param  {SpinalNode<any>} node
     * @param  {string} categoryName
     * @return {*}  {Promise<ICategory>}
     * @memberof AttributeService
     */ getCategoryByName(node, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            categoryName = categoryName.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
            if (!categoryName || categoryName.length === 0) throw new Error("category name must be a string and have at leat one character");
            const categories = yield this.getCategory(node);
            return categories.find((el)=>{
                return el.nameCat.toString().trim() === categoryName;
            });
        });
    }
    /**
     * Updates the category name
     * @param {SpinalNode<any>} node
     * @param {(SpinalNode<any> | ICategory | string)} category
     * @param {string} newName
     * @return {*}  {Promise<ICategory>}
     * @memberof AttributeService
     */ updateCategoryName(node, category, newName) {
        return __awaiter(this, void 0, void 0, function*() {
            newName = newName.toString().trim();
            if (!newName || newName.length === 0) throw new Error("category name must be a string and have at leat one character");
            if (category instanceof spinal_env_viewer_graph_service_1.SpinalNode) {
                category.info.name.set(newName);
                return this._getCategoryElement(category);
            } else if (typeof category === "string") {
                let _category = yield this.getCategoryByName(node, category);
                _category.node.info.name.set(newName);
                return _category;
            } else if (category.node instanceof spinal_env_viewer_graph_service_1.SpinalNode) {
                category.node.info.name.set(newName);
                return category;
            }
            throw new Error("category not found");
        });
    }
    /**
     * This method adds(if not exists) an attribute in a category (creates the category if not exist)
     * @param {SpinalNode<any>} node
     * @param {string} [categoryName='']
     * @param {string} [label='']
     * @param {string} [value='']
     * @param {string} [type='']
     * @param {string} [unit='']
     * @return {*}  {Promise<SpinalAttribute>}
     * @memberof AttributeService
     */ addAttributeByCategoryName(node, categoryName = "", label = "", value = "", type = "", unit = "") {
        return __awaiter(this, void 0, void 0, function*() {
            categoryName = categoryName.toString().trim();
            label = label.toString().trim();
            value = typeof value === "string" ? value.toString().trim() : value;
            type = type.toString().trim();
            unit = unit.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
            if (!label || label.toString().trim().length === 0) throw new Error("attribute label must be a string and have at leat one character");
            if (!categoryName || categoryName.toString().trim().length === 0) throw new Error("category name must be a string and have at leat one character");
            if (typeof value === "undefined") throw new Error("The attribute value is required");
            let category = yield this.getCategoryByName(node, categoryName);
            if (!category) category = yield this.addCategoryAttribute(node, categoryName);
            return this.addAttributeByCategory(node, category, label, value, type, unit);
        });
    }
    /**
     * This method adds(if not exists) or update(if exists) an attribute in a category
     * @param {SpinalNode<any>} node
     * @param {ICategory} category
     * @param {string} [label='']
     * @param {string} [value='']
     * @param {string} [type='']
     * @param {string} [unit='']
     * @return {*}  {SpinalAttribute}
     * @memberof AttributeService
     */ addAttributeByCategory(node, category, label = "", value = "", type = "", unit = "") {
        label = label.toString().trim();
        value = typeof value === "string" ? value.toString().trim() : value;
        type = type.toString().trim();
        unit = unit.toString().trim();
        if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
        if (!label || label.toString().trim().length === 0) throw new Error("attribute label must be a string and have at leat one character");
        if (typeof value === "undefined") throw new Error("The attribute value is required");
        const found = this._labelExistInCategory(category, label);
        if (!found) {
            const attributeModel = new spinal_models_documentation_1.SpinalAttribute(label, value, type, unit);
            category.element.push(attributeModel);
            return attributeModel;
        } else for(let index = 0; index < category.element.length; index++){
            const element = category.element[index];
            const elementLabel = element.label.get();
            if (elementLabel.toString().trim() === label) {
                element.value.set(value);
                return element;
            }
        }
    }
    /**
     * Returns an array of all SpinalAttirbute with all categories
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<SpinalAttribute[]>}
     * @memberof AttributeService
     */ getAllAttributes(node) {
        return __awaiter(this, void 0, void 0, function*() {
            const categories = yield this.getCategory(node);
            const promises = categories.map((el)=>{
                return this.getAttributesByCategory(node, el.node.info.name.get());
            });
            return Promise.all(promises).then((res)=>{
                const result = [];
                for(let index = 0; index < res.length; index++){
                    const element = res[index];
                    result.push(...element);
                }
                return result;
            });
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {(string | ICategory)} category
     * @param {string} [label='']
     * @return {*}  {(Promise<SpinalAttribute | -1>)} : -1 when not found
     * @memberof AttributeService
     */ findOneAttributeInCategory(node, category, label = "") {
        return __awaiter(this, void 0, void 0, function*() {
            label = label.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
            const _category = typeof category === "string" ? yield this.getCategoryByName(node, category) : category;
            if (_category && _category.element) for(let index = 0; index < _category.element.length; index++){
                const element = _category.element[index];
                if (!!label && element.label.get().toString().trim() === label) return element;
            }
            return -1;
        });
    }
    /**
     * Takes as parmaters a node and a string(category name) and return all attributes of the category.
     * @param {SpinalNode<any>} node
     * @param {(string | ICategory)} category
     * @param {string} [label]
     * @return {*}  {Promise<SpinalAttribute[]>}
     * @memberof AttributeService
     */ getAttributesByCategory(node, category, label) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
            const _category = typeof category === "string" ? yield this.getCategoryByName(node, category) : category;
            if (!_category || !_category.element || _category.element.length === 0) return [];
            if (label) {
                const labelFound = this._findInLst(_category.element, label);
                return labelFound ? [
                    labelFound
                ] : [];
            }
            const res = [];
            for(let index = 0; index < _category.element.length; index++){
                const element = _category.element[index];
                res.push(element);
            }
            return res;
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {(string | ICategory)} category
     * @param {string} label
     * @param {{ label?: string; value?: string; type?: string; unit?: string }} newValues
     * @param {boolean} [createIt=false]
     * @return {*}  {Promise<SpinalAttribute>}
     * @memberof AttributeService
     */ updateAttribute(node, category, label, newValues, createIt = false) {
        return __awaiter(this, void 0, void 0, function*() {
            const [attribute] = yield this.getAttributesByCategory(node, category, label);
            if (!attribute && !createIt) throw new Error("no attribute found");
            else if (!attribute && createIt && newValues.value) {
                const _category = typeof category === "string" ? yield this.getCategoryByName(node, category) : category;
                const lab = newValues.label || label;
                return this.addAttributeByCategory(node, _category, label, newValues.value);
            }
            for(const key in newValues)if (Object.prototype.hasOwnProperty.call(newValues, key)) {
                const value = newValues[key];
                if (attribute[key]) attribute[key].set(value);
            }
            return attribute;
        });
    }
    /**
     * This methods updates all attributes which have the old_label as label
     * @param {SpinalNode<any>} node
     * @param {string} old_label
     * @param {string} old_value
     * @param {string} new_label
     * @param {string} new_value
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ setAttribute(node, old_label, old_value, new_label, new_value) {
        return __awaiter(this, void 0, void 0, function*() {
            old_label = old_label.toString().trim();
            old_value = typeof old_value === "string" ? old_value.toString().trim() : old_value;
            new_label = new_label.toString().trim();
            new_value = typeof new_value === "string" ? new_value.toString().trim() : new_value;
            if (!old_label || old_label.length === 0) throw new Error("old_label must be a string and have at leat one character");
            if (!new_label || new_label.length === 0) throw new Error("new_label must be a string and have at leat one character");
            if (typeof old_value === "undefined") throw new Error("old_value is required");
            if (typeof new_value === "undefined") throw new Error("new_value is required");
            let allAttributes = yield this.getAllAttributes(node);
            for(let i = 0; i < allAttributes.length; i++){
                const element = allAttributes[i];
                if (element.label.get() == old_label) {
                    if (new_label != "") element.label.set(new_label);
                    if (new_value != "") element.value.set(new_value);
                }
            }
        });
    }
    /**
     * This methods updates the attribute with the given id from the given node
     * @param  {SpinalNode<any>} node
     * @param  {number} serverId
     * @param  {string} new_label
     * @param  {string} new_value
     * @param  {string} new_type
     * @param  {string} new_unit
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ setAttributeById(node, serverId, new_label, new_value, new_type, new_unit) {
        return __awaiter(this, void 0, void 0, function*() {
            new_label = new_label.toString().trim();
            new_value = typeof new_value === "string" ? new_value.toString().trim() : new_value;
            new_type = new_type.toString().trim();
            new_unit = new_unit.toString().trim();
            const labelIsValid = new_label && new_label.toString().trim().length > 0;
            const valueIsValid = typeof new_value !== "undefined";
            if (!(labelIsValid && valueIsValid)) return;
            let allAttributes = yield this.getAllAttributes(node);
            for(let i = 0; i < allAttributes.length; i++){
                const element = allAttributes[i];
                if (element._server_id == serverId) {
                    element.label.set(new_label);
                    element.value.set(new_value);
                    element.type.set(new_type);
                    element.unit.set(new_unit);
                }
            }
        });
    }
    /**
     * Get all attribute shared with other nodes.
     * @param  {SpinalNode<any>} node
     * @param  {string} categoryName?
     * @return {*}  {Promise<{ parentNode: SpinalNode<any>; categories: ICategory[] }[]>}
     * @memberof AttributeService
     */ getAttributesShared(node, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            categoryName = categoryName.toString().trim();
            const parents = yield node.getParents();
            const promises = parents.map((parent)=>__awaiter(this, void 0, void 0, function*() {
                    const categories = yield this.getCategory(parent);
                    const filterCategory = !categoryName || categoryName.length === 0 ? categories : categories.filter((el)=>el.nameCat.toString().trim() === categoryName);
                    return {
                        parentNode: parent,
                        categories: filterCategory
                    };
                }));
            return Promise.all(promises);
        });
    }
    /**
     * Get all attribute shared with other nodes.
     * @param {ICategory} category
     * @param {string} label
     * @return {*}  {Promise<boolean>}
     * @memberof AttributeService
     */ removeAttributesByLabel(category, label) {
        return __awaiter(this, void 0, void 0, function*() {
            const listAttributes = yield category.element.load();
            for(let i = 0; i < listAttributes.length; i++){
                const element = listAttributes[i];
                const elementLabel = element.label.get();
                if (elementLabel.toString().trim() == label.toString().trim()) {
                    listAttributes.splice(i, 1);
                    return true;
                }
            }
            return false;
        });
    }
    /**
     * Get all attribute shared with other nodes.
     * @param {ICategory} category
     * @param {number} serverId
     * @return {*}  {Promise<boolean>}
     * @memberof AttributeService
     */ removeAttributesById(category, serverId) {
        return __awaiter(this, void 0, void 0, function*() {
            const listAttributes = yield category.element.load();
            for(let i = 0; i < listAttributes.length; i++){
                const element = listAttributes[i];
                if (element._server_id == serverId) {
                    listAttributes.splice(i, 1);
                    return true;
                }
            }
            return false;
        });
    }
    /**
     * Takes a node of Building and return all attributes
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<SpinalAttribute[]>}
     * @memberof AttributeService
     */ getBuildingInformationAttributes(node) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) return [];
            if (node.getType().get() === spinal_env_viewer_context_geographic_service_1.default.constants.BUILDING_TYPE) {
                let lst = [];
                lst = constants_1.BUILDINGINFORMATION.map((el)=>{
                    return this.findAttributesByLabel(node, el);
                });
                return Promise.all(lst).then((element)=>element.filter((el)=>typeof el !== "undefined"));
            }
            return [];
        });
    }
    /**
     * Takes a node of Building and creates all attributes
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<SpinalAttribute[]>}
     * @memberof AttributeService
     */ setBuildingInformationAttributes(node) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(node);
            if (node && node.getType().get() === spinal_env_viewer_context_geographic_service_1.default.constants.BUILDING_TYPE) {
                const category = yield this.addCategoryAttribute(node, constants_1.BUILDINGINFORMATIONCATNAME);
                const promises = constants_1.BUILDINGINFORMATION.map((el)=>{
                    return this.addAttributeByCategory(node, category, el, "To configure");
                });
                yield Promise.all(promises);
                return this.getBuildingInformationAttributes(node);
            }
            return [];
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {string} label
     * @param {ICategory} [category]
     * @return {*}  {Promise<SpinalAttribute>}
     * @memberof AttributeService
     */ findAttributesByLabel(node, label, category) {
        return __awaiter(this, void 0, void 0, function*() {
            let data = [];
            if (typeof category !== "undefined") // const categoryName = this._getCategoryName(category);
            data = yield this.getAttributesByCategory(node, category.nameCat);
            else data = yield this.getAllAttributes(node);
            return data.find((el)=>el.label.get() === label);
        });
    }
    ///////////////////////////////////////////////////////////////////
    //              ATTRIBUTES LINKED DIRECTLY TO NODE               //
    ///////////////////////////////////////////////////////////////////
    /**
     * This methods link directily the attribute to the node without use category.
     * @param {SpinalNode<any>} node
     * @param {string} label
     * @param {string} value
     * @param {string} [type='']
     * @param {string} [unit='']
     * @return {*}  {Promise<SpinalNode<any>>}
     * @memberof AttributeService
     */ addAttribute(node, label, value, type = "", unit = "") {
        return __awaiter(this, void 0, void 0, function*() {
            // const labelIsValid = label && label.toString().trim().length > 0;
            // const valueIsValid = typeof value !== "undefined";
            // if (!(labelIsValid && valueIsValid)) return;
            label = label.toString().trim();
            value = typeof value === "string" ? value.toString().trim() : value;
            type = type.toString().trim();
            unit = unit.toString().trim();
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("node must be a spinalNode instance");
            if (!label || label.length === 0) throw new Error("attribute label must be a string and have at leat one character");
            if (typeof value === "undefined") throw new Error("The attribute value is required");
            const attributeExist = yield this._attributeExist(node, label);
            if (attributeExist) return attributeExist;
            const attributeModel = new spinal_models_documentation_1.SpinalAttribute(label, value, type, unit);
            const attributeNode = new spinal_env_viewer_graph_service_1.SpinalNode(`[Attributes] ${label}`, constants_1.ATTRIBUTE_TYPE, attributeModel);
            yield node.addChild(attributeNode, constants_1.NODE_TO_ATTRIBUTE, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return attributeNode;
        });
    }
    /**
     * get and returns all attribute linked directely to the node
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<{ node: SpinalNode<any>; element: SpinalAttribute }[]>}
     * @memberof AttributeService
     */ getAttributes(node) {
        return __awaiter(this, void 0, void 0, function*() {
            const attributes = yield node.getChildren(constants_1.NODE_TO_ATTRIBUTE);
            const promises = attributes.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    return {
                        node: el,
                        element: yield el.getElement()
                    };
                }));
            return Promise.all(promises);
        });
    }
    ///////////////////////////////////////////////////////////////////
    //                          PRIVATES                             //
    ///////////////////////////////////////////////////////////////////
    /**
     * Check if category is linked to node and return it.
     * @param {SpinalNode<any>} node
     * @param {string} categoryName
     * @return {*}  {Promise<SpinalNode<any>>}
     * @memberof AttributeService
     */ _categoryExist(node, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            // const categories = await node.getChildren(NODE_TO_CATEGORY_RELATION);
            const categories = yield this.getCategory(node);
            const found = categories.map((el)=>el.node).find((el)=>{
                return el.getName().get() === categoryName;
            });
            return found;
        });
    }
    /**
     * Takes a category node and format it like an ICategory type;
     * @param {SpinalNode<any>} categoryNode
     * @return {*}  {Promise<ICategory>}
     * @memberof AttributeService
     */ _getCategoryElement(categoryNode) {
        return __awaiter(this, void 0, void 0, function*() {
            const element = yield categoryNode.getElement();
            return {
                element: element,
                nameCat: categoryNode.getName().get(),
                node: categoryNode
            };
        });
    }
    /**
     * Check if an attribute exists in a category
     * @param {ICategory} category
     * @param {string} argAttributeName
     * @return {*}  {boolean}
     * @memberof AttributeService
     */ _labelExistInCategory(category, argAttributeName) {
        let found = false;
        if (category && category.element) {
            const attributes = category.element instanceof spinal_core_connectorjs_type_1.Model ? category.element.get() : category.element;
            found = attributes.find((el)=>{
                if (el instanceof spinal_core_connectorjs_type_1.Model) return el.label.get() === argAttributeName;
                else return el.label === argAttributeName;
            });
        }
        return found;
    }
    /**
     * Check if an attribute is directely link to the node
     * @param {SpinalNode<any>} node
     * @param {string} argAttributeName
     * @return {*}  {Promise<SpinalNode<any>>}
     * @memberof AttributeService
     */ _attributeExist(node, argAttributeName) {
        return __awaiter(this, void 0, void 0, function*() {
            const attributes = yield node.getChildren([
                constants_1.NODE_TO_ATTRIBUTE
            ]);
            return attributes.find((el)=>{
                return el.getName().get() === `[Attributes] ${argAttributeName}`;
            });
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<void>}
     * @memberof AttributeService
     */ removeNode(node) {
        return node.removeFromGraph();
    }
    /**
     * @private
     * @param {spinal.Lst<SpinalAttribute>} Lst
     * @param {string} value
     * @return {*}  {SpinalAttribute}
     * @memberof AttributeService
     */ _findInLst(Lst, value) {
        for(let index = 0; index < Lst.length; index++){
            const element = Lst[index];
            if (element.label.get() == value) return element;
        }
    }
}
exports.AttributeService = AttributeService;
const attributeService = new AttributeService();
exports.attributeService = attributeService;
exports.default = AttributeService;

},{"e6daa58395988a2a":"fRH70","d7f8938e0a172d8e":"5QjJf","5cd25cc0bf84ff50":"9n7zp","3896d5730797fb91":"dcbQz","440ab2cd4e10922a":"igGim"}],"dcbQz":[function(require,module,exports) {
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
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
__exportStar(require("6d3a13ea0b187870"), exports);
__exportStar(require("5d977a979076e91e"), exports);
__exportStar(require("38c2f3b6e1db5154"), exports);
__exportStar(require("6450a140c310c116"), exports);
__exportStar(require("316a0c069637571"), exports);

},{"6d3a13ea0b187870":"7TMja","5d977a979076e91e":"tWGjg","38c2f3b6e1db5154":"5n8mf","6450a140c310c116":"eQfQF","316a0c069637571":"3ZlsM"}],"7TMja":[function(require,module,exports) {
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
exports.SpinalAttribute = void 0;
const spinal_core_connectorjs_type_1 = require("407afb3b1e606f7f");
class SpinalAttribute extends spinal_core_connectorjs_type_1.Model {
    constructor(label, value, type = "", unit = ""){
        super();
        this.add_attr({
            label: label,
            value: value,
            date: Date.now(),
            type: type,
            unit: unit
        });
    }
}
exports.SpinalAttribute = SpinalAttribute;
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalAttribute);

},{"407afb3b1e606f7f":"fRH70"}],"tWGjg":[function(require,module,exports) {
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
exports.SpinalFile = void 0;
const spinal_core_connectorjs_type_1 = require("9eeee87ffd077e84");
class SpinalFile extends spinal_core_connectorjs_type_1.Model {
    constructor(id, name){
        super();
        this.add_attr({
            id: id,
            name: name
        });
    }
}
exports.SpinalFile = SpinalFile;
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalFile);

},{"9eeee87ffd077e84":"fRH70"}],"5n8mf":[function(require,module,exports) {
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
exports.SpinalNote = void 0;
const spinal_core_connectorjs_type_1 = require("fad10baeac627250");
const constants_1 = require("cf5a7c609d78893");
class SpinalNote extends spinal_core_connectorjs_type_1.Model {
    constructor(username, message, userId, type = constants_1.MESSAGE_TYPES.text, file, viewPoint){
        super();
        this.add_attr({
            username: username,
            date: Date.now(),
            message: message,
            userId: userId,
            type: type,
            file: file ? new spinal_core_connectorjs_type_1.Ptr(file) : undefined,
            viewPoint: viewPoint ? viewPoint : undefined
        });
    }
}
exports.SpinalNote = SpinalNote;
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalNote);

},{"fad10baeac627250":"fRH70","cf5a7c609d78893":"3ZlsM"}],"3ZlsM":[function(require,module,exports) {
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
exports.MESSAGE_TYPES = void 0;
exports.MESSAGE_TYPES = {
    text: "text",
    image: "img",
    file: "file"
};

},{}],"eQfQF":[function(require,module,exports) {
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
exports.SpinalURL = void 0;
const spinal_core_connectorjs_type_1 = require("d761e146b96fd9fd");
class SpinalURL extends spinal_core_connectorjs_type_1.Model {
    constructor(name, url){
        super();
        this.add_attr({
            date: Date.now(),
            URL: url,
            name: name
        });
    }
}
exports.SpinalURL = SpinalURL;
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalURL);

},{"d761e146b96fd9fd":"fRH70"}],"igGim":[function(require,module,exports) {
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
exports.BUILDINGINFORMATIONCATNAME = exports.BUILDINGINFORMATION = exports.ATTRIBUTE_TYPE = exports.CATEGORY_TYPE = exports.NODE_TO_ATTRIBUTE = exports.NODE_TO_CATEGORY_RELATION = exports.NOTE_GROUP_NAME = exports.NOTE_CATEGORY_NAME = exports.NOTE_CONTEXT_NAME = exports.NOTE_TYPE = exports.NOTE_RELATION = exports.URL_TYPE = exports.URL_RELATION = void 0;
const URL_RELATION = "hasURL";
exports.URL_RELATION = URL_RELATION;
const URL_TYPE = "SpinalURL";
exports.URL_TYPE = URL_TYPE;
const NOTE_RELATION = "hasNotes";
exports.NOTE_RELATION = NOTE_RELATION;
const NOTE_TYPE = "SpinalNote";
exports.NOTE_TYPE = NOTE_TYPE;
const NOTE_CONTEXT_NAME = "Default Note Context";
exports.NOTE_CONTEXT_NAME = NOTE_CONTEXT_NAME;
const NOTE_CATEGORY_NAME = "Default Note Category";
exports.NOTE_CATEGORY_NAME = NOTE_CATEGORY_NAME;
const NOTE_GROUP_NAME = "Default Note Group";
exports.NOTE_GROUP_NAME = NOTE_GROUP_NAME;
const NODE_TO_CATEGORY_RELATION = "hasCategoryAttributes";
exports.NODE_TO_CATEGORY_RELATION = NODE_TO_CATEGORY_RELATION;
const NODE_TO_ATTRIBUTE = "hasAttributes";
exports.NODE_TO_ATTRIBUTE = NODE_TO_ATTRIBUTE;
const CATEGORY_TYPE = "categoryAttributes";
exports.CATEGORY_TYPE = CATEGORY_TYPE;
const ATTRIBUTE_TYPE = "SpinalAttributes";
exports.ATTRIBUTE_TYPE = ATTRIBUTE_TYPE;
const BUILDINGINFORMATION = [
    "Titre",
    "B\xe2timent",
    "Surface",
    "Adresse",
    "Ville"
];
exports.BUILDINGINFORMATION = BUILDINGINFORMATION;
const BUILDINGINFORMATIONCATNAME = "Spinal Building Information";
exports.BUILDINGINFORMATIONCATNAME = BUILDINGINFORMATIONCATNAME;

},{}],"f52Mg":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noteService = exports.NoteService = void 0;
const spinal_env_viewer_graph_service_1 = require("fff7fae19fb9d69d");
const spinal_env_viewer_plugin_group_manager_service_1 = require("e16d889b221de367");
const spinal_models_documentation_1 = require("c7409fc25f796578");
const constants_1 = require("f92efb945cfdbbca");
const FileExplorer_1 = require("3a29d01347dbc056");
const globalType = typeof window === "undefined" ? global : window;
class NoteService {
    constructor(){}
    /**
     * @param {SpinalNode<any>} node
     * @param {{ username: string; userId: number }} userInfo
     * @param {string} note - Your message or File name
     * @param {string} [type]
     * @param {spinal.File} [file] - Spinal File
     * @param {string} [noteContextId]
     * @param {string} [noteGroupId]
     * @param {ViewStateInterface} [viewPoint]
     * @return {*}  {Promise<SpinalNode<any>>}
     * @memberof NoteService
     */ addNote(node, userInfo, note, type, file, noteContextId, noteGroupId, viewPoint) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw "node must be a SpinalNode";
            if (file && !(file instanceof spinal.File)) throw "File must be a SpinalFile";
            const spinalNote = new spinal_models_documentation_1.SpinalNote(userInfo.username, note, (_a = userInfo.userId) === null || _a === void 0 ? void 0 : _a.toString(), type, file, viewPoint);
            const noteNode = new spinal_env_viewer_graph_service_1.SpinalNode(`message-${Date.now()}`, constants_1.NOTE_TYPE, spinalNote);
            yield node.addChild(noteNode, constants_1.NOTE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            // if (noteNode instanceof SpinalNode) {
            //   noteNode.info.name.set(`message-${Date.now()}`);
            //   noteNode.info.type.set(NOTE_TYPE);
            // }
            yield this.createAttribute(noteNode, spinalNote);
            yield this.addNoteToContext(noteNode, noteContextId, noteGroupId);
            return noteNode;
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {*} files
     * @param {{ username: string; userId: number }} userInfo
     * @param {string} [noteContextId]
     * @param {string} [noteGroupId]
     * @return {*}  {Promise<SpinalNode<any>[]>}
     * @memberof NoteService
     */ addFileAsNote(node, files, userInfo, noteContextId, noteGroupId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (typeof FileList !== "undefined" && files instanceof FileList) files = Array.from(files);
            const res = yield this.addFilesInDirectory(node, files);
            const promises = res.map((data)=>{
                const type = FileExplorer_1.FileExplorer._getFileType(data.file);
                let files_1 = FileExplorer_1.FileExplorer.addFileUpload(data.directory, [
                    data.file
                ]);
                let file_1 = files_1.length > 0 ? files_1[0] : undefined;
                const viewPoint = Object.keys(data.viewPoint).length > 0 ? data.viewPoint : undefined;
                return this.addNote(node, userInfo, data.file.name, type, file_1, noteContextId, noteGroupId, viewPoint);
            });
            return yield Promise.all(promises);
        });
    }
    /**
     * Adding a note to a node
     *
     * @param {SpinalNode<any>} node node to add the note to
     * @param {{ username: string, userId: number }} userInfo information of the user posting the note
     * @param {string} note note to add
     * @param {string} [type] type of the note
     * @param {File} [file] file to add to the node
     * @param {ViewStateInterface} [viewPoint] viewpoint to save in the note
     * @param {string} [noteContextId] contextID of the note
     * @param {string} [noteGroupId] groupID of the note
     * @return {*} {Promise<SpinalNode<any>>} note as a node
     * @memberof NoteService
     */ twinAddNote(node, userInfo, note, type, file, viewPoint, noteContextId, noteGroupId) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) return;
            let uploaded = undefined;
            if (typeof file !== "undefined") uploaded = FileExplorer_1.FileExplorer.addFileUpload((yield FileExplorer_1.FileExplorer._getOrCreateFileDirectory(node)), [
                file
            ]);
            let view = undefined;
            if (typeof viewPoint !== "undefined") view = Object.keys(viewPoint).length > 0 ? viewPoint : undefined;
            const spinalNote = new spinal_models_documentation_1.SpinalNote(userInfo.username, note, (_a = userInfo.userId) === null || _a === void 0 ? void 0 : _a.toString(), type, uploaded[0], view);
            const spinalNode = yield node.addChild(spinalNote, constants_1.NOTE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            if (spinalNode && spinalNode.info) {
                spinalNode.info.name.set(`message-${Date.now()}`);
                spinalNode.info.type.set(constants_1.NOTE_TYPE);
            }
            yield this.createAttribute(spinalNode, spinalNote);
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(spinalNode);
            let contextId = noteContextId;
            let groupId = noteGroupId;
            if (typeof contextId === "undefined") {
                const noteContext = yield this.createDefaultContext();
                contextId = noteContext.getId().get();
            }
            if (typeof groupId === "undefined") {
                const groupNode = yield this.createDefaultGroup();
                groupId = groupNode.getId().get();
            }
            yield this.linkNoteToGroup(contextId, groupId, spinalNode.getId().get());
            return spinalNode;
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<{ element: SpinalNote; selectedNode: SpinalNode<any> }[]>}
     * @memberof NoteService
     */ getNotes(node) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) return;
            const messagesNodes = yield node.getChildren(constants_1.NOTE_RELATION);
            const promises = messagesNodes.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    const element = yield el.getElement();
                    return {
                        element: element,
                        selectedNode: el
                    };
                }));
            return Promise.all(promises);
        });
    }
    /**
     * @param {SpinalNote} element
     * @param {string} note
     * @return {*}  {SpinalNote}
     * @memberof NoteService
     */ editNote(element, note) {
        let date = new Date();
        element.message.set(note);
        element.date.set(date);
        return element;
    }
    /**
     * @param {SpinalNode<any>} noteNode
     * @param {string} [contextId]
     * @param {string} [groupId]
     * @return {*}  {Promise<{ old_group: string; newGroup: string }>}
     * @memberof NoteService
     */ addNoteToContext(noteNode, contextId, groupId) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(noteNode);
            if (typeof contextId === "undefined") {
                const noteContext = yield this.createDefaultContext();
                contextId = noteContext.getId().get();
            }
            if (typeof groupId === "undefined") {
                const groupNode = yield this.createDefaultGroup();
                groupId = groupNode.getId().get();
            }
            return this.linkNoteToGroup(contextId, groupId, noteNode.getId().get());
        });
    }
    /**
     * @param {SpinalNode<any>} noteContext
     * @param {SpinalNode<any>} startNode
     * @return {*}  {Promise<SpinalNode<any>[]>}
     * @memberof NoteService
     */ getNotesInNoteContext(noteContext, startNode) {
        return startNode.findInContext(noteContext, (node)=>{
            let type = node.getType().get();
            if (type === constants_1.NOTE_TYPE) {
                //@ts-ignore
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                return true;
            }
        });
    }
    /**
     * @param {(SpinalNode<any> | SpinalNode<any>[])} notes
     * @return {*}  {Promise<{ [key: string]: SpinalNode<any>[] }>}
     * @memberof NoteService
     */ getNotesReferencesNodes(notes) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!Array.isArray(notes)) notes = [
                notes
            ];
            const obj = {};
            const promises = notes.map((note)=>__awaiter(this, void 0, void 0, function*() {
                    obj[note.getId().get()] = yield note.getParents(constants_1.NOTE_RELATION);
                    return;
                }));
            yield Promise.all(promises);
            return obj;
        });
    }
    /**
     * Deletes a note from a node
     * @param {SpinalNode<any>} node node to delete from
     * @param {SpinalNode<any>} note note to delete
     * @memberof NoteService
     */ delNote(node, note) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(node instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("Node must be a SpinalNode.");
            if (!(note instanceof spinal_env_viewer_graph_service_1.SpinalNode)) throw new Error("Note must be a SpinalNode.");
            yield node.removeChild(note, constants_1.NOTE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    /**
     * @param {string} contextId
     * @param {string} groupId
     * @param {string} noteId
     * @return {*}  {Promise<{ old_group: string; newGroup: string }>}
     * @memberof NoteService
     */ linkNoteToGroup(contextId, groupId, noteId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.linkElementToGroup(contextId, groupId, noteId);
    }
    /**
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof NoteService
     */ createDefaultContext() {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.createGroupContext(constants_1.NOTE_CONTEXT_NAME, constants_1.NOTE_TYPE);
    }
    /**
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof NoteService
     */ createDefaultCategory() {
        return __awaiter(this, void 0, void 0, function*() {
            const context = yield this.createDefaultContext();
            return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addCategory(context.getId().get(), constants_1.NOTE_CATEGORY_NAME, "add");
        });
    }
    /**
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof NoteService
     */ createDefaultGroup() {
        return __awaiter(this, void 0, void 0, function*() {
            const context = yield this.createDefaultContext();
            const category = yield this.createDefaultCategory();
            return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addGroup(context.getId().get(), category.getId().get(), constants_1.NOTE_GROUP_NAME, "#FFF000");
        });
    }
    /**
     * @param {SpinalNode<any>} spinalNode
     * @param {SpinalNote} spinalNote
     * @return {*}  {Promise<SpinalAttribute[]>}
     * @memberof NoteService
     */ createAttribute(spinalNode, spinalNote) {
        return __awaiter(this, void 0, void 0, function*() {
            const categoryName = "default";
            const service = globalType.spinal.serviceDocumentation;
            if (service) {
                const category = yield service.addCategoryAttribute(spinalNode, categoryName);
                const promises = spinalNote._attribute_names.map((key)=>{
                    return service.addAttributeByCategory(spinalNode, category, key, spinalNote[key].get());
                });
                return Promise.all(promises);
            }
        });
    }
    /**
     * @private
     * @param {SpinalNode<any>} noteNode
     * @param {(any | any[])} files
     * @return {*}  {Promise<IFileNote[]>}
     * @memberof NoteService
     */ addFilesInDirectory(noteNode, files) {
        if (!Array.isArray(files)) files = [
            files
        ];
        const promises = files.map((file)=>__awaiter(this, void 0, void 0, function*() {
                return {
                    viewPoint: {
                        viewState: file.viewState,
                        objectState: file.objectState
                    },
                    file: file,
                    directory: yield FileExplorer_1.FileExplorer._getOrCreateFileDirectory(noteNode)
                };
            }));
        return Promise.all(promises);
    }
}
exports.NoteService = NoteService;
const noteService = new NoteService();
exports.noteService = noteService;
exports.default = NoteService;

},{"fff7fae19fb9d69d":"9n7zp","e16d889b221de367":"tSLpq","c7409fc25f796578":"dcbQz","f92efb945cfdbbca":"igGim","3a29d01347dbc056":"38glt"}],"tSLpq":[function(require,module,exports) {
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
exports.constants = exports.spinalCategory = exports.spinalGroup = exports.groupManagerService = void 0;
const constants_1 = require("16556214ace97b5b");
exports.constants = constants_1.default;
const GroupManagerService_1 = require("6e56c019ae4d70d5");
Object.defineProperty(exports, "spinalGroup", {
    enumerable: true,
    get: function() {
        return GroupManagerService_1.spinalGroup;
    }
});
Object.defineProperty(exports, "spinalCategory", {
    enumerable: true,
    get: function() {
        return GroupManagerService_1.spinalCategory;
    }
});
let groupManagerService = new GroupManagerService_1.default();
exports.groupManagerService = groupManagerService;
exports.default = groupManagerService;

},{"16556214ace97b5b":"hLapl","6e56c019ae4d70d5":"8gHJB"}],"hLapl":[function(require,module,exports) {
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
exports.OLD_RELATIONS_TYPES = exports.OLD_GROUPS_TYPES = exports.OLD_CONTEXTS_TYPES = exports.ELEMENT_UNLINKED_TO_GROUP_EVENT = exports.ELEMENT_LINKED_TO_GROUP_EVENT = exports.GROUP_TYPE_END = exports.CONTEXTGROUP_TYPE_END = exports.GROUP_RELATION_BEGIN = exports.CATEGORY_TO_GROUP_RELATION = exports.CONTEXT_TO_CATEGORY_RELATION = exports.CATEGORY_TYPE = void 0;
///////////////////////////////////////////
//            NEW DATA TYPE              //
///////////////////////////////////////////
exports.CATEGORY_TYPE = "groupingCategory";
exports.CONTEXT_TO_CATEGORY_RELATION = "hasCategory";
exports.CATEGORY_TO_GROUP_RELATION = "hasGroup";
exports.GROUP_RELATION_BEGIN = "groupHas";
exports.CONTEXTGROUP_TYPE_END = "GroupContext";
exports.GROUP_TYPE_END = "Group";
///////////////////////////////////////////
//            EVENT TYPE                 //
///////////////////////////////////////////
exports.ELEMENT_LINKED_TO_GROUP_EVENT = "elementLinked";
exports.ELEMENT_UNLINKED_TO_GROUP_EVENT = "elementUnLinked";
///////////////////////////////////////////
//            OLD DATA TYPE              //
///////////////////////////////////////////
exports.OLD_CONTEXTS_TYPES = Object.freeze({
    ROOMS_GROUP_CONTEXT: "RoomsGroupContext",
    EQUIPMENTS_GROUP_CONTEXT: "EquipmentGroupContext",
    ENDPOINTS_GROUP_CONTEXT: "EndpointGroupContext"
});
exports.OLD_GROUPS_TYPES = Object.freeze({
    ROOMS_GROUP: "roomsGroup",
    EQUIPMENTS_GROUP: "equipmentGroup",
    ENDPOINT_GROUP: "endpointGroup"
});
exports.OLD_RELATIONS_TYPES = Object.freeze({
    GROUP_TO_ROOMS_RELATION: "groupHasRooms",
    GROUP_TO_EQUIPMENTS_RELATION: "groupHasEquipments",
    GROUP_TO_ENDPOINT_RELATION: "groupHasEndpoints"
});
///////////////////////////////////////////
//            EXPORT ALL                 //
///////////////////////////////////////////
exports.default = {
    CATEGORY_TYPE: exports.CATEGORY_TYPE,
    CONTEXT_TO_CATEGORY_RELATION: exports.CONTEXT_TO_CATEGORY_RELATION,
    CATEGORY_TO_GROUP_RELATION: exports.CATEGORY_TO_GROUP_RELATION,
    OLD_CONTEXTS_TYPES: exports.OLD_CONTEXTS_TYPES,
    OLD_GROUPS_TYPES: exports.OLD_GROUPS_TYPES,
    OLD_RELATIONS_TYPES: exports.OLD_RELATIONS_TYPES,
    ELEMENT_LINKED_TO_GROUP_EVENT: exports.ELEMENT_LINKED_TO_GROUP_EVENT,
    ELEMENT_UNLINKED_TO_GROUP_EVENT: exports.ELEMENT_UNLINKED_TO_GROUP_EVENT,
    GROUP_RELATION_BEGIN: exports.GROUP_RELATION_BEGIN
};

},{}],"8gHJB":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spinalCategory = exports.spinalGroup = void 0;
const spinal_env_viewer_graph_service_1 = require("b17cb7872bd5e0c");
const spinal_core_connectorjs_type_1 = require("9a6ece260d51e8e4");
const spinal_env_viewer_context_geographic_service_1 = require("aff293429a47104c");
const spinal_model_bmsnetwork_1 = require("b8fdc1ae437096d5");
const SpinalGroup_1 = require("541ee682f52ea932");
const SpinalCategory_1 = require("ad8031d3728fec56");
const constants_1 = require("6920fe1bbe539047");
const spinal_env_viewer_plugin_event_emitter_1 = require("92af075dfb378ee1");
exports.spinalGroup = new SpinalGroup_1.default();
exports.spinalCategory = new SpinalCategory_1.default();
class GroupManagerService {
    constructor(){
        this.constants = constants_1.default;
    }
    createGroupContext(contextName, childrenType, graph) {
        return __awaiter(this, void 0, void 0, function*() {
            const contexts = yield this._getContexts(graph);
            let contextFound = contexts.find((context)=>context.name.get() === contextName);
            if (typeof contextFound !== "undefined") return Promise.resolve(spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextFound.id.get()));
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(contextName, `${childrenType}${constants_1.CONTEXTGROUP_TYPE_END}`, new spinal_core_connectorjs_type_1.Model({
                name: contextName,
                childType: childrenType
            }));
        });
    }
    getGroupContexts(childType, graph) {
        graph = graph || spinal_env_viewer_graph_service_1.SpinalGraphService.getGraph();
        //@ts-ignore
        spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(graph);
        let graphId = graph.getId().get();
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(graphId).then((contextsModel)=>{
            let contexts = contextsModel.map((el)=>el.get());
            let allGroupContexts = contexts.filter((el)=>{
                return el.type.includes(constants_1.CONTEXTGROUP_TYPE_END);
            });
            if (typeof childType === "undefined") return allGroupContexts;
            const oldType = this._getOldTypes(childType);
            return allGroupContexts.filter((el)=>{
                return el.type.includes(childType) || el.type === oldType;
            });
        });
    }
    addCategory(contextId, categoryName, iconName) {
        return exports.spinalCategory.addCategory(contextId, categoryName, iconName);
    }
    getCategories(nodeId) {
        return exports.spinalCategory.getCategories(nodeId);
    }
    addGroup(contextId, categoryId, groupName, groupColor, groupIcon) {
        return exports.spinalGroup.addGroup(contextId, categoryId, groupName, groupColor, groupIcon);
    }
    getGroups(nodeId) {
        return exports.spinalGroup.getGroups(nodeId);
    }
    linkElementToGroup(contextId, groupId, elementId) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const category = yield this.getGroupCategory(groupId);
            const group = yield this.elementIsInCategorie(category.id.get(), elementId);
            const result = {
                old_group: (_a = group === null || group === void 0 ? void 0 : group.id) === null || _a === void 0 ? void 0 : _a.get(),
                newGroup: groupId
            };
            if (result.old_group === result.newGroup) return result;
            if (typeof group !== "undefined") {
                yield this.unLinkElementToGroup(group.id.get(), elementId);
                result.old_group = group.id.get();
            }
            yield exports.spinalGroup.linkElementToGroup(contextId, groupId, elementId);
            spinal_env_viewer_plugin_event_emitter_1.spinalEventEmitter.emit(constants_1.ELEMENT_LINKED_TO_GROUP_EVENT, {
                groupId,
                elementId
            });
            return result;
        });
    }
    elementIsLinkedToGroup(groupId, elementId) {
        return exports.spinalGroup.elementIsLinkedToGroup(groupId, elementId);
    }
    elementIsInCategorie(categoryId, elementId) {
        return exports.spinalCategory.elementIsInCategorie(categoryId, elementId);
    }
    unLinkElementToGroup(groupId, elementId) {
        return exports.spinalGroup.unLinkElementToGroup(groupId, elementId).then((result)=>{
            spinal_env_viewer_plugin_event_emitter_1.spinalEventEmitter.emit(constants_1.ELEMENT_UNLINKED_TO_GROUP_EVENT, {
                groupId,
                elementId
            });
            return result;
        });
    }
    getElementsLinkedToGroup(groupId) {
        return exports.spinalGroup.getElementsLinkedToGroup(groupId);
    }
    getGroupCategory(groupId) {
        return exports.spinalGroup.getCategory(groupId);
    }
    isContext(type) {
        return exports.spinalCategory._isContext(type);
    }
    isRoomGroupContext(type) {
        return type == `${spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE}${constants_1.CONTEXTGROUP_TYPE_END}` || constants_1.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT == type;
    }
    isEquipmentGroupContext(type) {
        return type == `${spinal_env_viewer_context_geographic_service_1.default.constants.EQUIPMENT_TYPE}${constants_1.CONTEXTGROUP_TYPE_END}` || constants_1.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT == type;
    }
    isCategory(type) {
        return exports.spinalCategory._isCategory(type);
    }
    isGroup(type) {
        return exports.spinalGroup._isGroup(type);
    }
    isRoomsGroup(type) {
        return type == `${spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE}${constants_1.GROUP_TYPE_END}` || constants_1.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT.replace("Context", "") == type || type === constants_1.OLD_GROUPS_TYPES.ROOMS_GROUP;
    }
    isEquipementGroup(type) {
        return type == `${spinal_env_viewer_context_geographic_service_1.default.constants.EQUIPMENT_TYPE}${constants_1.GROUP_TYPE_END}` || constants_1.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT.replace("Context", "") == type || type === constants_1.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP;
    }
    checkGroupType(groupType, childrenType) {
        return `${childrenType}${constants_1.GROUP_TYPE_END}` === groupType;
    }
    checkContextType(contextType, childrenType) {
        return `${childrenType}${constants_1.CONTEXTGROUP_TYPE_END}` === contextType;
    }
    updateCategory(categoryId, newInfo) {
        return exports.spinalCategory.updateCategory(categoryId, newInfo);
    }
    updateGroup(categoryId, newInfo) {
        return exports.spinalGroup.updateGroup(categoryId, newInfo);
    }
    getChildrenType(type) {
        if (this.isContext(type)) return type.replace(constants_1.CONTEXTGROUP_TYPE_END, "");
        if (this.isGroup(type)) return type.replace(constants_1.GROUP_TYPE_END, "");
    }
    ////////////////////////////////////////////////////////////////////
    //                      PRIVATES                                  //
    ////////////////////////////////////////////////////////////////////
    _getOldTypes(type) {
        switch(type){
            case spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE:
                return this.constants.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT;
            case spinal_env_viewer_context_geographic_service_1.default.constants.EQUIPMENT_TYPE:
                return this.constants.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT;
            case spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName:
                return this.constants.OLD_CONTEXTS_TYPES.ENDPOINTS_GROUP_CONTEXT;
        }
    }
    _getContexts(graph) {
        graph = graph || spinal_env_viewer_graph_service_1.SpinalGraphService.getGraph();
        //@ts-ignore
        spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(graph);
        let graphId = graph.getId().get();
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(graphId).then((contextsModel)=>{
            return contextsModel;
        });
    }
}
exports.default = GroupManagerService;

},{"b17cb7872bd5e0c":"9n7zp","9a6ece260d51e8e4":"fRH70","aff293429a47104c":"5QjJf","b8fdc1ae437096d5":"gzkbg","541ee682f52ea932":"kTdIT","ad8031d3728fec56":"dNavB","6920fe1bbe539047":"hLapl","92af075dfb378ee1":"8hvTd"}],"kTdIT":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinal_env_viewer_graph_service_1 = require("10ec99eccc0a3280");
const constants_1 = require("55b44eb929733959");
const spinal_core_connectorjs_type_1 = require("e44d98c7edfbb3de");
const spinal_env_viewer_context_geographic_service_1 = require("34918e995975e323");
const spinal_model_bmsnetwork_1 = require("f959c9d05d6b89b5");
class SpinalGroup {
    constructor(){
        this.CATEGORY_TO_GROUP_RELATION = constants_1.CATEGORY_TO_GROUP_RELATION;
        this.RELATION_BEGIN = constants_1.GROUP_RELATION_BEGIN;
    }
    addGroup(contextId, categoryId, groupName, groupColor, groupIcon = "3d_rotation") {
        return __awaiter(this, void 0, void 0, function*() {
            const groupFound = yield this._groupNameExist(categoryId, groupName);
            if (groupFound) return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(groupFound.id.get());
            let contextInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId);
            if (contextInfo) {
                let info = {
                    name: groupName,
                    type: `${this._getChildrenType(contextInfo.type.get())}Group`,
                    color: groupColor ? groupColor : "#000000",
                    icon: groupIcon
                };
                let childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(info, new spinal_core_connectorjs_type_1.Model({
                    name: groupName
                }));
                return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(categoryId, childId, contextId, this.CATEGORY_TO_GROUP_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            }
        // return Promise.resolve(false);
        });
    }
    linkElementToGroup(contextId, groupId, elementId) {
        return __awaiter(this, void 0, void 0, function*() {
            let contextInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId);
            let elementInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(elementId);
            if (contextInfo && elementInfo) {
                let childrenType = this._getChildrenType(contextInfo.type.get());
                if (childrenType === elementInfo.type.get() || this._isOldGroup(contextInfo.type.get(), elementInfo.type.get())) return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(groupId, elementId, contextId, `${this.RELATION_BEGIN}${elementInfo.type.get()}`, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            }
            throw Error(`${elementInfo.type.get()} cannot be linked to this group.`);
        });
    }
    elementIsLinkedToGroup(groupId, elementId) {
        let childrenIds = spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenIds(groupId);
        return childrenIds.indexOf(elementId) !== -1;
    }
    unLinkElementToGroup(groupId, elementId) {
        return __awaiter(this, void 0, void 0, function*() {
            let elementInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(elementId);
            let relationName = `${this.RELATION_BEGIN}${elementInfo.type.get()}`;
            let result;
            try {
                result = yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(groupId, elementId, relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            } catch (error) {
                result = yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(groupId, elementId, relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_LST_PTR_TYPE);
            }
            if (!result) {
                const groupInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(groupId);
                relationName = this._getGroupRelation(groupInfo.type.get());
                return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(groupId, elementId, relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            }
        });
    }
    getElementsLinkedToGroup(groupId) {
        let groupInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(groupId);
        let type = this._getChildrenType(groupInfo.type.get());
        let relationNames = [
            `${this.RELATION_BEGIN}${type}`
        ];
        const tempRel = this._getGroupRelation(groupInfo.type.get());
        if (typeof tempRel !== "undefined") relationNames.push(tempRel);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(groupId, relationNames);
    }
    getGroups(nodeId) {
        let nodeInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
        if (this._isGroup(nodeInfo.type.get())) return Promise.resolve([
            nodeInfo
        ]);
        let relations = [
            constants_1.CONTEXT_TO_CATEGORY_RELATION,
            constants_1.CATEGORY_TO_GROUP_RELATION
        ];
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNodes(nodeId, relations, (node)=>{
            let argType = node.getType().get();
            return this._isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(el);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.getId().get());
            });
        });
    }
    getCategory(groupId) {
        return __awaiter(this, void 0, void 0, function*() {
            const parents = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(groupId, this.CATEGORY_TO_GROUP_RELATION);
            if (parents.length > 0) return parents[0];
        });
    }
    updateGroup(groupId, newInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(groupId);
            for(const key in newInfo)if (newInfo.hasOwnProperty(key)) {
                const value = newInfo[key];
                if (realNode.info[key]) realNode.info[key].set(value);
                else realNode.info.add_attr({
                    [key]: value
                });
            }
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(realNode.getId().get());
        });
    }
    _isGroup(type) {
        // let stringEnd = type.substr(type.length - 5);
        // return stringEnd === "Group";
        return /Group$/.test(type);
    }
    checkGroupType(groupType, childrenType) {
        return groupType === `${childrenType}Group`;
    }
    ////////////////////////////////////////////////////////////////////
    //                      PRIVATES                                  //
    ////////////////////////////////////////////////////////////////////
    _getChildrenType(elementType) {
        if (elementType.toLowerCase() === constants_1.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT.toLowerCase() || elementType.toLowerCase() === constants_1.OLD_GROUPS_TYPES.ROOMS_GROUP.toLowerCase()) return spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE;
        else if (elementType.toLowerCase() === constants_1.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT.toLowerCase() || elementType.toLowerCase() === constants_1.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP.toLowerCase()) return spinal_env_viewer_context_geographic_service_1.default.constants.EQUIPMENT_TYPE;
        else if (elementType.toLowerCase() === constants_1.OLD_CONTEXTS_TYPES.ENDPOINTS_GROUP_CONTEXT.toLowerCase() || elementType.toLowerCase() === constants_1.OLD_GROUPS_TYPES.ENDPOINT_GROUP.toLowerCase()) return spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName;
        else {
            if (/GroupContext$/.test(elementType)) return elementType.replace("GroupContext", "");
            else if (/Group$/.test(elementType)) return elementType.replace("Group", "");
            throw new Error(`${elementType} is not a group element type`);
        }
    }
    _isOldGroup(contextType, elementType) {
        const isRoomGroup = contextType === constants_1.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT && elementType === spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE;
        const isEquipementGroup = contextType === constants_1.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT && elementType === spinal_env_viewer_context_geographic_service_1.default.constants.EQUIPMENT_TYPE;
        const isEndpointGroup = contextType === constants_1.OLD_CONTEXTS_TYPES.ENDPOINTS_GROUP_CONTEXT && elementType === spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName;
        console.log(isRoomGroup, isEquipementGroup, isEndpointGroup);
        return isRoomGroup || isEquipementGroup || isEndpointGroup;
    }
    _groupNameExist(nodeId, groupName) {
        return __awaiter(this, void 0, void 0, function*() {
            const groups = yield this.getGroups(nodeId);
            for (const group of groups){
                const name = group.name.get();
                if (name === groupName) return group;
            }
        });
    }
    _getGroupRelation(type) {
        let relationName;
        switch(type.toLowerCase()){
            case constants_1.OLD_GROUPS_TYPES.ROOMS_GROUP.toLowerCase():
                relationName = constants_1.OLD_RELATIONS_TYPES.GROUP_TO_ROOMS_RELATION;
                break;
            case constants_1.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP.toLowerCase():
                relationName = constants_1.OLD_RELATIONS_TYPES.GROUP_TO_EQUIPMENTS_RELATION;
                break;
            case constants_1.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP.toLowerCase():
                relationName = constants_1.OLD_RELATIONS_TYPES.GROUP_TO_ENDPOINT_RELATION;
                break;
        }
        return relationName;
    }
}
exports.default = SpinalGroup;

},{"10ec99eccc0a3280":"9n7zp","55b44eb929733959":"hLapl","e44d98c7edfbb3de":"fRH70","34918e995975e323":"5QjJf","f959c9d05d6b89b5":"gzkbg"}],"dNavB":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinal_env_viewer_graph_service_1 = require("728f361d21717d79");
const constants_1 = require("ac85879d948ad172");
const spinal_core_connectorjs_type_1 = require("10d079b885e41d6c");
class SpinalCategory {
    constructor(){
        this.CATEGORY_TYPE = constants_1.CATEGORY_TYPE;
        this.CONTEXT_TO_CATEGORY_RELATION = constants_1.CONTEXT_TO_CATEGORY_RELATION;
    }
    addCategory(contextId, categoryName, iconName) {
        return __awaiter(this, void 0, void 0, function*() {
            const categoryFound = yield this._categoryNameExist(contextId, categoryName);
            if (categoryFound) return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(categoryFound.id.get());
            let info = {
                name: categoryName,
                type: this.CATEGORY_TYPE,
                icon: iconName
            };
            let childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(info, new spinal_core_connectorjs_type_1.Model({
                name: categoryName
            }));
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(contextId, childId, contextId, this.CONTEXT_TO_CATEGORY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    getCategories(nodeId) {
        let nodeInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
        if (this._isCategory(nodeInfo.type.get())) return Promise.resolve([
            nodeInfo
        ]);
        else if (this._isContext(nodeInfo.type.get())) return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            this.CONTEXT_TO_CATEGORY_RELATION
        ]);
        else return this._getRelationRefs(nodeId).then((refs)=>{
            let promises = refs.map((node)=>{
                return node.parent.load();
            });
            return Promise.all(promises).then((parents)=>{
                return parents.map((el)=>{
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.getId().get());
                });
            });
        });
    }
    elementIsInCategorie(categoryId, elementId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(categoryId, [
            constants_1.CATEGORY_TO_GROUP_RELATION
        ]).then((children)=>{
            let itemFound = children.find((child)=>{
                return child.childrenIds.find((el)=>{
                    return el === elementId;
                });
            });
            return itemFound;
        });
    }
    updateCategory(categoryId, newInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(categoryId);
            for(const key in newInfo)if (newInfo.hasOwnProperty(key)) {
                const value = newInfo[key];
                if (realNode.info[key]) realNode.info[key].set(value);
                else realNode.info.add_attr({
                    [key]: value
                });
            }
            return realNode;
        });
    }
    ////////////////////////////////////////////////////////////////////
    //                      PRIVATES                                  //
    ////////////////////////////////////////////////////////////////////
    _isCategory(type) {
        return type === this.CATEGORY_TYPE;
    }
    _isContext(type) {
        const values = Object.values(constants_1.OLD_CONTEXTS_TYPES);
        if (values.indexOf(type) !== -1) return true;
        return /GroupContext$/.test(type);
    }
    _getRelationRefs(nodeId) {
        let relationRefPromises = [];
        let node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        let relationList = node.parents[`groupHas${node.getType().get()}`];
        if (relationList) for(let i = 0; i < relationList.length; i++){
            const element = relationList[i];
            relationRefPromises.push(element.load());
        }
        return Promise.all(relationRefPromises);
    }
    _categoryNameExist(nodeId, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            const categories = yield this.getCategories(nodeId);
            for (const category of categories){
                const name = category.name.get();
                if (name === categoryName) return category;
            }
        });
    }
}
exports.default = SpinalCategory;

},{"728f361d21717d79":"9n7zp","ac85879d948ad172":"hLapl","10d079b885e41d6c":"fRH70"}],"38glt":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileExplorer = void 0;
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
 */ const spinal_core_connectorjs_type_1 = require("33ae30e8ee00c6d3");
const spinal_env_viewer_graph_service_1 = require("e132712ee6e81279");
const spinal_models_documentation_1 = require("44cd102b7e54d370");
class FileExplorer {
    /**
     * @static
     * @param {SpinalNode<any>} selectedNode
     * @return {*}  {Promise<spinal.Directory<spinal.File<spinal.Path>>>}
     * @memberof FileExplorer
     */ static getDirectory(selectedNode) {
        return __awaiter(this, void 0, void 0, function*() {
            if (selectedNode != undefined) {
                const fileNode = yield selectedNode.getChildren("hasFiles");
                if (fileNode.length == 0) return undefined;
                else {
                    let directory = yield fileNode[0].getElement();
                    return directory;
                }
            }
        });
    }
    /**
     * @static
     * @param {SpinalNode<any>} selectedNode
     * @return {*}  {Promise<number>}
     * @memberof FileExplorer
     */ static getNbChildren(selectedNode) {
        return __awaiter(this, void 0, void 0, function*() {
            const fileNode = yield selectedNode.getChildren("hasFiles");
            return fileNode.length;
        });
    }
    static createDirectory(selectedNode) {
        return __awaiter(this, void 0, void 0, function*() {
            let nbNode = yield this.getNbChildren(selectedNode);
            if (nbNode == 0) {
                let myDirectory = new spinal_core_connectorjs_type_1.Directory();
                let node = yield selectedNode.addChild(myDirectory, "hasFiles", spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                node.info.name.set("[Files]");
                node.info.type.set("SpinalFiles");
                return myDirectory;
            } else return this.getDirectory(selectedNode);
        });
    }
    /**
     * @static
     * @param {File} file - HTML File
     * @return {*}  {string}
     * @memberof FileExplorer
     */ static _getFileType(file) {
        const imagesExtension = [
            "JPG",
            "PNG",
            "GIF",
            "WEBP",
            "TIFF",
            "PSD",
            "RAW",
            "BMP",
            "HEIF",
            "INDD",
            "JPEG 2000",
            "SVG"
        ];
        const extension = /[^.]+$/.exec(file.name)[0];
        return imagesExtension.indexOf(extension.toUpperCase()) !== -1 ? spinal_models_documentation_1.MESSAGE_TYPES.image : spinal_models_documentation_1.MESSAGE_TYPES.file;
    }
    /**
     * @static
     * @param {spinal.Directory<any>} directory
     * @param {((File | { name: string; buffer: Buffer })[] | FileList | any)} files - HTML Files
     * @return {*}  {spinal.File<any>[]}
     * @memberof FileExplorer
     */ static addFileUpload(directory, files) {
        const isFileList = typeof FileList !== "undefined" && files instanceof FileList;
        if (!isFileList && !Array.isArray(files)) files = [
            files
        ];
        console.log("files", files);
        const res = [];
        for(let i = 0; i < files.length; i++){
            const element = files[i];
            let filePath = element.buffer ? new spinal_core_connectorjs_type_1.Path(element.buffer) : new spinal_core_connectorjs_type_1.Path(element);
            let myFile = new spinal_core_connectorjs_type_1.File(element.name, filePath, undefined);
            directory.push(myFile);
            res.push(myFile);
        }
        return res;
    }
    /**
     * @static
     * @param {SpinalNode<any>} node
     * @param {((File | { name: string; buffer: Buffer })[] | FileList | any)} files - HTML Files
     * @return {*}  {Promise<spinal.File<any>[]>}
     * @memberof FileExplorer
     */ static uploadFiles(node, files) {
        return __awaiter(this, void 0, void 0, function*() {
            const isFileList = typeof FileList !== "undefined" && files instanceof FileList;
            if (!isFileList && !Array.isArray(files)) files = [
                files
            ];
            const directory = yield this._getOrCreateFileDirectory(node);
            return this.addFileUpload(directory, files);
        });
    }
    static _getOrCreateFileDirectory(node) {
        return __awaiter(this, void 0, void 0, function*() {
            let directory = yield FileExplorer.getDirectory(node);
            if (!directory) directory = yield FileExplorer.createDirectory(node);
            return directory;
        });
    }
}
exports.FileExplorer = FileExplorer;

},{"33ae30e8ee00c6d3":"fRH70","e132712ee6e81279":"9n7zp","44cd102b7e54d370":"dcbQz"}],"3mvBM":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.urlService = exports.UrlService = void 0;
const spinal_model_graph_1 = require("ec0392ee6e73c504");
const spinal_models_documentation_1 = require("82ea3c8c94cfd15e");
const constants_1 = require("930202a4b36db25e");
class UrlService {
    constructor(){}
    /**
     * @param {SpinalNode<any>} node
     * @param {string} urlName
     * @param {string} urlLink
     * @return {*}  {Promise<IUrl>}
     * @memberof UrlService
     */ addURL(node, urlName, urlLink) {
        return __awaiter(this, void 0, void 0, function*() {
            urlName = urlName && urlName.toString().trim();
            urlLink = urlLink && urlLink.toString().trim();
            const urlNameIsValid = urlName && urlName.length > 0;
            const urlLinkIsValid = urlLink && urlLink.length > 0;
            if (!(urlNameIsValid && urlLinkIsValid)) throw new Error("name or link is invalid");
            const urlExist = yield this.getURL(node, urlName);
            if (urlExist) throw new Error(`${urlName} already exist in ${node.getName().get()}`);
            const urlModel = new spinal_models_documentation_1.SpinalURL(urlName, urlLink);
            const urlNode = yield node.addChild(urlModel, constants_1.URL_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
            if (urlNode && urlNode.info) {
                urlNode.info.name.set(`[URL] ${urlName}`);
                urlNode.info.type.set(constants_1.URL_TYPE);
                return this._getUrlData(urlNode);
            }
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {string} [urlName]
     * @return {*}  {(Promise<IUrl | IUrl[]>)}
     * @memberof UrlService
     */ getURL(node, urlName) {
        return __awaiter(this, void 0, void 0, function*() {
            const urlNodes = yield node.getChildren(constants_1.URL_RELATION);
            const promises = [];
            for (const urlNode of urlNodes)promises.push(this._getUrlData(urlNode, urlName));
            const values = yield Promise.all(promises);
            if (urlName && urlName.toString().trim().length) return values.find(({ element })=>{
                const elementName = element.name.get();
                return elementName.toString().trim() === urlName.toString().trim();
            });
            return values;
        });
    }
    /**
     * @param {SpinalNode<any>} argNode
     * @param {string} label
     * @param {string} newValue
     * @return {*}  {Promise<IUrl>}
     * @memberof UrlService
     */ updateUrl(argNode, label, newValue) {
        return __awaiter(this, void 0, void 0, function*() {
            let _url = yield this.getURL(argNode, label);
            let url = Array.isArray(_url) ? _url[0] : _url;
            if (url) {
                const { node, element } = url;
                if (node && element) {
                    const elementUrl = element.URL.get();
                    const _newValue = newValue.toString().trim();
                    if (!!_newValue && elementUrl.toString().trim() !== _newValue) element.URL.set(_newValue);
                }
                return url;
            }
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {Array<string>} url_relationNames
     * @return {*}  {Promise<SpinalNode<any>[]>}
     * @memberof UrlService
     */ getParents(node, url_relationNames) {
        return node.getParents(url_relationNames);
    }
    /**
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<SpinalNode<any>[]>}
     * @memberof UrlService
     */ getParentGroup(node) {
        return this.getParents(node, []);
    }
    /**
     * @param {SpinalNode<any>} node
     * @param {string} label
     * @return {*}  {Promise<void>}
     * @memberof UrlService
     */ deleteURL(node, label) {
        return __awaiter(this, void 0, void 0, function*() {
            const url = yield this.getURL(node, label);
            if (Array.isArray(url)) return;
            if (url && url.node) return url.node.removeFromGraph();
        });
    }
    /**
     * @param {SpinalNode<any>} node
     * @return {*}  {Promise<{ node: SpinalNode<any>; urls: SpinalURL[] }[]>}
     * @memberof UrlService
     */ getSharedUrls(node) {
        return __awaiter(this, void 0, void 0, function*() {
            const parents = yield node.getParents();
            const promises = parents.map((parent)=>__awaiter(this, void 0, void 0, function*() {
                    let _urls = yield this.getURL(parent);
                    _urls = Array.isArray(_urls) ? _urls : [
                        _urls
                    ];
                    return {
                        node: parent,
                        urls: _urls.map((el)=>el.element)
                    };
                }));
            return Promise.all(promises);
        });
    }
    //////////////////////////////////////////////////////////////////////////////////
    //                                     PRIVATES                                 //
    //////////////////////////////////////////////////////////////////////////////////
    /**
     * @param {*} urlNode
     * @param {string} [urlName]
     * @return {*}  {Promise<IUrl>}
     * @memberof UrlService
     */ _getUrlData(urlNode, urlName) {
        return __awaiter(this, void 0, void 0, function*() {
            const element = yield urlNode.getElement();
            return {
                element: element,
                node: urlNode
            };
        });
    }
}
exports.UrlService = UrlService;
const urlService = new UrlService();
exports.urlService = urlService;
exports.default = UrlService;

},{"ec0392ee6e73c504":"fkEXw","82ea3c8c94cfd15e":"dcbQz","930202a4b36db25e":"igGim"}],"aLHGL":[function(require,module,exports) {
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
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
__exportStar(require("c3ddd82121d61a7c"), exports);
__exportStar(require("c30e707585054e57"), exports);
__exportStar(require("4c2c96539d1e98ae"), exports);

},{"c3ddd82121d61a7c":"1ei0E","c30e707585054e57":"6R4jz","4c2c96539d1e98ae":"gVsAp"}],"1ei0E":[function(require,module,exports) {
"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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

},{}],"6R4jz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"gVsAp":[function(require,module,exports) {
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

},{}],"6IJ8H":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalTimeSeries = void 0;
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
 */ const spinal_core_connectorjs_1 = require("243f77618448a4b1");
const genUID_1 = require("a83e1f4399b9d47e");
const loadPtr_1 = require("27d7ae6bfd6cffd5");
const SpinalTimeSeriesArchive_1 = require("23f4c68c927e5956");
const SpinalTimeSeriesConfig_1 = require("13fa6818530c41eb");
/**
 * @class SpinalTimeSeries
 * @property {Str} id
 * @property {Val} maxDay
 * @property {Ptr<SpinalTimeSeriesArchive>} archive
 * @property {Ptr<SpinalTimeSeriesArchiveDay>} currentArchive
 * @extends {Model}
 */ class SpinalTimeSeries extends spinal_core_connectorjs_1.Model {
    /**
     * Creates an instance of SpinalTimeSeries.
     * @param {number} [initialBlockSize=SpinalTimeSeriesConfig.INIT_BLOCK_SIZE]
     * @param {number} [maxDay=SpinalTimeSeriesConfig.MAX_DAY] number of days to keep, default 2 days
     * ```
     * 0 = keep infinitly
     * > 0 = nbr of day to keep
     * ```
     * @memberof SpinalTimeSeries
     */ constructor(initialBlockSize = SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.INIT_BLOCK_SIZE, maxDay = SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.MAX_DAY){
        super();
        this.archiveProm = null;
        this.currentProm = null;
        this.loadPtrDictionary = new Map();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        const archive = new SpinalTimeSeriesArchive_1.SpinalTimeSeriesArchive(initialBlockSize);
        this.archiveProm = Promise.resolve(archive);
        this.add_attr({
            id: (0, genUID_1.genUID)(),
            maxDay,
            archive: new spinal_core_connectorjs_1.Ptr(archive),
            currentArchive: new spinal_core_connectorjs_1.Ptr(0),
            currentData: 0
        });
    }
    /**
     * @param {(number|string|Date)} [start=0]
     * @param {(number|string|Date)} [end=Date.now()]
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalTimeSeries
     */ getFromIntervalTimeGen(start = 0, end = Date.now()) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            return archive.getFromIntervalTimeGen(start, end);
        });
    }
    /**
     * @param {(number|string|Date)} [start=0]
     * @param {(number|string|Date)} [end=Date.now()]
     * @returns {Promise<SpinalDateValue[]>}
     * @memberof SpinalTimeSeries
     */ getFromIntervalTime(start = 0, end = Date.now()) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            return archive.getFromIntervalTime(start, end);
        });
    }
    /**
     * @returns {Promise<SpinalDateValue>}
     * @memberof SpinalTimeSeries
     */ getCurrent() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.maxDay.get() === 0) return Promise.resolve({
                date: NaN,
                value: NaN
            });
            let currentDay;
            try {
                currentDay = yield this.getCurrentDay();
            } catch (error) {
                const archive = yield this.getArchive();
                currentDay = yield archive.getTodayArchive();
            }
            const len = currentDay.length.get();
            return currentDay.get(len - 1);
        });
    }
    setConfig(initialBlockSize, maxDay) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            archive.initialBlockSize.set(initialBlockSize);
            if (typeof this.maxDay === "undefined") this.add_attr("maxDay", maxDay);
            else this.maxDay.set(maxDay);
        });
    }
    /**
     * @param {number} value
     * @returns {Promise<void>}
     * @memberof SpinalTimeSeries
     */ push(value) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.maxDay.get() === 0) {
                const archive = yield this.getArchive();
                archive.purgeArchive(this.maxDay.get());
                return;
            }
            let currentDay;
            try {
                currentDay = yield this.getCurrentDay();
            } catch (error) {
                const archive = yield this.getArchive();
                currentDay = yield archive.getTodayArchive();
            }
            const normalizedDate = SpinalTimeSeriesArchive_1.SpinalTimeSeriesArchive.normalizeDate(Date.now());
            const archive = yield this.getArchive();
            if (currentDay.dateDay.get() !== normalizedDate) {
                this.currentProm = archive.getTodayArchive();
                currentDay = yield this.currentProm;
            }
            currentDay.push(value);
            archive.purgeArchive(this.maxDay.get());
        });
    }
    /**
     * @param {number} value
     * @returns {Promise<void>}
     * @memberof SpinalTimeSeries
     */ insert(value, date) {
        return __awaiter(this, void 0, void 0, function*() {
            let currentDay;
            const archive = yield this.getArchive();
            if (this.maxDay.get() !== 0) {
                currentDay = yield archive.getOrCreateArchiveAtDate(date);
                currentDay.insert(value, date);
            }
            archive.purgeArchive(this.maxDay.get());
        });
    }
    /**
     * @param {(number | string | Date)} date
     * @returns {Promise<SpinalTimeSeriesArchiveDay>}
     * @memberof SpinalTimeSeries
     */ getDataOfDay(date) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            return archive.getArchiveAtDate(date);
        });
    }
    /**
     * @returns {Promise<SpinalTimeSeriesArchive>}
     * @memberof SpinalTimeSeries
     */ getArchive() {
        if (this.archiveProm !== null) return this.archiveProm;
        this.archiveProm = (0, loadPtr_1.loadPtr)(this.loadPtrDictionary, this.archive);
        return this.archiveProm;
    }
    /**
     * @returns {Promise<SpinalTimeSeriesArchiveDay>}
     * @memberof SpinalTimeSeries
     */ getCurrentDay() {
        if (this.currentProm !== null) return this.currentProm;
        this.currentProm = (0, loadPtr_1.loadPtr)(this.loadPtrDictionary, this.currentArchive);
        return this.currentProm;
    }
    /**
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalTimeSeries
     */ getDataFromYesterday() {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            const end = new Date().setUTCHours(0, 0, 0, -1);
            const start = new Date(end).setUTCHours(0, 0, 0, 0);
            return archive.getFromIntervalTimeGen(start, end);
        });
    }
    /**
     * @alias getDataFromLastDays(1)
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalTimeSeries
     */ getDataFromLast24Hours() {
        return this.getDataFromLastDays(1);
    }
    /**
     * @param {number} [numberOfHours=1]
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalTimeSeries
     */ getDataFromLastHours(numberOfHours = 1) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            const end = Date.now();
            const start = new Date();
            start.setUTCHours(start.getUTCHours() - numberOfHours);
            return archive.getFromIntervalTimeGen(start, end);
        });
    }
    /**
     * @param {number} [numberOfDays=1]
     * @returns {Promise<AsyncIterableIterator<SpinalDateValue>>}
     * @memberof SpinalTimeSeries
     */ getDataFromLastDays(numberOfDays = 1) {
        return __awaiter(this, void 0, void 0, function*() {
            const archive = yield this.getArchive();
            const end = Date.now();
            const start = new Date();
            start.setDate(start.getDate() - numberOfDays);
            return archive.getFromIntervalTimeGen(start, end);
        });
    }
}
exports.SpinalTimeSeries = SpinalTimeSeries;
/**
 * @static
 * @type {string}
 * @memberof SpinalTimeSeries
 */ SpinalTimeSeries.relationName = "hasTimeSeries";
/**
 * @static
 * @type {string}
 * @memberof SpinalTimeSeries
 */ SpinalTimeSeries.nodeTypeName = "TimeSeries";
spinal_core_connectorjs_1.spinalCore.register_models(SpinalTimeSeries);

},{"243f77618448a4b1":"2uyD7","a83e1f4399b9d47e":"3SzvR","27d7ae6bfd6cffd5":"lKzee","23f4c68c927e5956":"9jtWX","13fa6818530c41eb":"ejMvW"}],"3SzvR":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genUID = void 0;
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
/**
 * @returns {string}
 */ function genUID() {
    const res = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4()}-${Date.now().toString(16)}`;
    return res;
}
exports.genUID = genUID;

},{}],"lKzee":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPtr = void 0;
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
 */ const spinal_core_connectorjs_1 = require("8c898adac316214a");
function loadPtr(loadPtrDictionary, ptr) {
    if (typeof ptr.data.value !== "undefined" && loadPtrDictionary.has(ptr.data.value)) return loadPtrDictionary.get(ptr.data.value);
    if (typeof ptr.data.model !== "undefined") {
        const res = Promise.resolve(ptr.data.model);
        if (ptr.data.value) loadPtrDictionary.set(ptr.data.value, res);
        return res;
    }
    if (typeof ptr.data.value !== "undefined" && ptr.data.value === 0) return Promise.reject("Load Ptr to 0");
    if (typeof spinal_core_connectorjs_1.FileSystem._objects[ptr.data.value] !== "undefined") {
        const res = Promise.resolve(spinal_core_connectorjs_1.FileSystem._objects[ptr.data.value]);
        loadPtrDictionary.set(ptr.data.value, res);
        return Promise.resolve(res);
    }
    const res = ptr.load();
    loadPtrDictionary.set(ptr.data.value, res);
    return res;
}
exports.loadPtr = loadPtr;

},{"8c898adac316214a":"2uyD7"}],"9jtWX":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
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
exports.SpinalTimeSeriesArchive = void 0;
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
 */ const spinal_core_connectorjs_1 = require("f215f9e701e790ed");
const loadPtr_1 = require("1ea1269ce3de9c93");
const SpinalTimeSeriesArchiveDay_1 = require("e65cd4aed08f905e");
const SpinalTimeSeriesConfig_1 = require("1d2e5ea7cf84a8b8");
/**
 * @class SpinalTimeSeriesArchive
 * @extends {Model}
 */ class SpinalTimeSeriesArchive extends spinal_core_connectorjs_1.Model {
    /**
     *Creates an instance of SpinalTimeSeriesArchive.
     * @param {number} [initialBlockSize=SpinalTimeSeriesConfig.INIT_BLOCK_SIZE]
     * @memberof SpinalTimeSeriesArchive
     */ constructor(initialBlockSize = SpinalTimeSeriesConfig_1.SpinalTimeSeriesConfig.INIT_BLOCK_SIZE){
        super({
            initialBlockSize,
            lstDate: [],
            lstItem: []
        });
        this.itemLoadedDictionary = new Map();
        this.loadPtrDictionary = new Map();
    }
    /**
     * @static
     * @param {(number | string | Date)} date
     * @returns {number}
     * @memberof SpinalTimeSeriesArchive
     */ static normalizeDate(date) {
        return new Date(date).setUTCHours(0, 0, 0, 0);
    }
    /**
     * @returns {Promise<SpinalTimeSeriesArchiveDay>}
     * @memberof SpinalTimeSeriesArchive
     */ getTodayArchive() {
        this.cleanUpNaNDates();
        const now = Date.now();
        const date = SpinalTimeSeriesArchive.normalizeDate(now);
        const spinalTimeSeriesArchiveDay = this.itemLoadedDictionary.get(date);
        if (spinalTimeSeriesArchiveDay !== undefined) return spinalTimeSeriesArchiveDay;
        for(let index = 0; index < this.lstDate.length; index += 1){
            const element = this.lstDate[index];
            const ptr = this.lstItem[index];
            if (element.get() === date) return (0, loadPtr_1.loadPtr)(this.loadPtrDictionary, ptr);
        }
        const value = new SpinalTimeSeriesArchiveDay_1.SpinalTimeSeriesArchiveDay(this.initialBlockSize.get());
        this.lstDate.push(date);
        this.lstItem.push(new spinal_core_connectorjs_1.Ptr(value));
        const prom = Promise.resolve(value);
        this.itemLoadedDictionary.set(date, prom);
        return prom;
    }
    /**
     * @returns {Promise<SpinalTimeSeriesArchiveDay>}
     * @memberof SpinalTimeSeriesArchive
     */ getOrCreateArchiveAtDate(atDate) {
        this.cleanUpNaNDates();
        const date = SpinalTimeSeriesArchive.normalizeDate(atDate);
        if (isNaN(date)) throw `the value [${atDate}] is not a valid date`;
        const spinalTimeSeriesArchiveDay = this.itemLoadedDictionary.get(date);
        if (spinalTimeSeriesArchiveDay !== undefined) return spinalTimeSeriesArchiveDay;
        for(let index = 0; index < this.lstDate.length; index += 1){
            const element = this.lstDate[index];
            const ptr = this.lstItem[index];
            if (element.get() === date) return (0, loadPtr_1.loadPtr)(this.loadPtrDictionary, ptr);
        }
        const value = new SpinalTimeSeriesArchiveDay_1.SpinalTimeSeriesArchiveDay(this.initialBlockSize.get());
        value.dateDay.set(date);
        // search index
        let index = 0;
        for(let idx = 0; idx < this.lstDate.length; idx += 1){
            const element = this.lstDate[idx];
            if (element > date) break;
            index += 1;
        }
        this.lstDate.insert(index, [
            date
        ]);
        this.lstItem.insert(index, [
            new spinal_core_connectorjs_1.Ptr(value)
        ]);
        const prom = Promise.resolve(value);
        this.itemLoadedDictionary.set(date, prom);
        return prom;
    }
    /**
     * @memberof SpinalTimeSeriesArchive
     */ cleanUpNaNDates() {
        let idx = 0;
        while(idx < this.lstDate.length){
            const date = this.lstDate[idx];
            if (date && isNaN(date.get())) {
                this.lstDate.splice(idx, 1);
                this.lstItem.splice(idx, 1);
            } else ++idx;
        }
    }
    /**
     * @param {(number|string)} [start=0]
     * @param {(number|string)} [end=Date.now()]
     * @returns {AsyncIterableIterator<SpinalDateValue>}
     * @memberof SpinalTimeSeriesArchive
     */ getFromIntervalTimeGen(start = 0, end = Date.now()) {
        return __asyncGenerator(this, arguments, function* getFromIntervalTimeGen_1() {
            this.cleanUpNaNDates();
            const normalizedStart = SpinalTimeSeriesArchive.normalizeDate(start);
            const normalizedEnd = typeof end === "number" || typeof end === "string" ? new Date(end).getTime() : end.getTime();
            if (isNaN(normalizedStart)) throw `the value 'start' [${start}] is not a valid date`;
            if (isNaN(normalizedEnd)) throw `the value 'end' [${end}] is not a valid date`;
            for(let idx = 0; idx < this.lstDate.length; idx += 1){
                const element = this.lstDate[idx].get();
                if (normalizedStart > element) continue;
                const archive = yield __await(this.getArchiveAtDate(element));
                let index = 0;
                const archiveLen = archive.length.get();
                if (normalizedStart === element) for(; index < archiveLen; index += 1){
                    const dateValue = archive.get(index);
                    if (dateValue.date >= normalizedStart) break;
                }
                for(; index < archiveLen; index += 1){
                    const dateValue = archive.get(index);
                    if (dateValue.date > normalizedEnd) return yield __await(void 0);
                    yield yield __await(dateValue);
                }
            }
        });
    }
    /**
     * getFromIntervalTimeGen is prefered.
     * @param {number} start
     * @param {(number|string)} [end=Date.now()]
     * @returns {Promise<SpinalDateValue[]>}
     * @memberof SpinalTimeSeriesArchive
     */ getFromIntervalTime(start, end = Date.now()) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            const result = [];
            try {
                for(var _d = true, _e = __asyncValues(this.getFromIntervalTimeGen(start, end)), _f; _f = yield _e.next(), _a = _f.done, !_a;){
                    _c = _f.value;
                    _d = false;
                    try {
                        const data = _c;
                        result.push(data);
                    } finally{
                        _d = true;
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return result;
        });
    }
    /**
     * @param {(number | string | Date)} date
     * @returns {Promise<SpinalTimeSeriesArchiveDay>}
     * @memberof SpinalTimeSeriesArchive
     */ getArchiveAtDate(date) {
        this.cleanUpNaNDates();
        const normalizedDate = SpinalTimeSeriesArchive.normalizeDate(date);
        if (isNaN(normalizedDate)) throw `the value [${date}] is not a valid date`;
        if (this.itemLoadedDictionary.has(normalizedDate)) return this.itemLoadedDictionary.get(normalizedDate);
        const idx = this.lstDate.indexOf(normalizedDate);
        if (idx < 0) return Promise.reject(new Error(`Date '${date}' not fond.`));
        const promise = getArchive.call(this);
        this.itemLoadedDictionary.set(normalizedDate, promise);
        return promise;
        function getArchive() {
            return new Promise((resolve)=>{
                const ptr = this.lstItem[idx];
                if (typeof ptr.data.model !== "undefined") resolve(ptr.data.model);
                else ptr.load((element)=>{
                    resolve(element);
                });
            });
        }
    }
    /**
     * @returns {Lst<Val>}
     * @memberof SpinalTimeSeriesArchive
     */ getDates() {
        return this.lstDate;
    }
    /**
     * @param {(number | string | Date)} date
     * @returns {boolean}
     * @memberof SpinalTimeSeriesArchive
     */ dateExist(date) {
        const normalizedDate = SpinalTimeSeriesArchive.normalizeDate(date);
        for(let idx = this.lstDate.length - 1; idx >= 0; idx -= 1){
            if (this.lstDate[idx].get() === normalizedDate) return true;
        }
        return false;
    }
    purgeArchive(maxDay) {
        if (maxDay > 0) {
            let lstDateToDelete = [];
            const maxDayMS = maxDay * 86400000;
            const minDateMS = new Date().valueOf() - maxDayMS;
            for(let index = 0; index < this.lstDate.length; index += 1)if (this.lstDate[index].get() <= minDateMS) lstDateToDelete.push(this.lstDate[index].get());
            for (let elt of lstDateToDelete){
                let id = this.lstDate.indexOf(elt);
                this.lstDate.splice(id, 1);
                this.lstItem.splice(id, 1);
            }
        } else if (maxDay === 0) {
            this.lstDate.clear();
            this.lstItem.clear();
        }
    }
}
exports.SpinalTimeSeriesArchive = SpinalTimeSeriesArchive;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalTimeSeriesArchive);

},{"f215f9e701e790ed":"2uyD7","1ea1269ce3de9c93":"lKzee","e65cd4aed08f905e":"1AJXV","1d2e5ea7cf84a8b8":"ejMvW"}],"1AJXV":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalTimeSeriesArchiveDay = void 0;
const spinal_core_connectorjs_1 = require("ce4fcb549d946cf6");
/**
 * @property {Lst<Val>} lstDate
 * @property {Lst<Val>} lstValue
 * @property {Val} length
 * @property {Val} dateDay
 * @class SpinalTimeSeriesArchiveDay
 * @extends {Model}
 */ class SpinalTimeSeriesArchiveDay extends spinal_core_connectorjs_1.Model {
    constructor(initialBlockSize = 50){
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        this.add_attr({
            lstDate: new spinal_core_connectorjs_1.Lst(Array(initialBlockSize).fill(0)),
            lstValue: new spinal_core_connectorjs_1.Lst(Array(initialBlockSize).fill(0)),
            dateDay: new Date().setUTCHours(0, 0, 0, 0),
            length: 0
        });
    }
    /**
     * @param {number} data
     * @memberof SpinalTimeSeriesArchiveDay
     */ push(data) {
        this.upgradeFromOldTimeSeries();
        if (this.lstDate.length <= this.length.get()) this.addBufferSizeLength();
        this.setLstVal(this.length.get(), Date.now(), data);
        this.length.set(this.length.get() + 1);
    }
    /**
     * @param {number} data
     * @param {(number|string|Date)} date
     * @returns {boolean}
     * @memberof SpinalTimeSeriesArchiveDay
     */ insert(data, date) {
        this.upgradeFromOldTimeSeries();
        const targetDate = new Date(date).getTime();
        const maxDate = new Date(this.dateDay.get()).setUTCHours(23, 59, 59, 999);
        if (!(this.dateDay.get() <= targetDate && targetDate <= maxDate)) return false;
        if (this.lstDate.length <= this.length.get()) this.addBufferSizeLength();
        let index = 0;
        for(; index < this.length.get(); index += 1){
            const element = this.lstDate[index].get();
            if (element === targetDate) {
                // check exist
                this.lstValue[index].set(data);
                return true;
            }
            if (element > targetDate) break;
        }
        if (index === this.length.get()) {
            this.setLstVal(this.length.get(), targetDate, data);
            this.length.set(this.length.get() + 1);
        } else {
            for(let idx = this.length.get() - 1; idx >= index; idx -= 1)this.setLstVal(idx + 1, this.lstDate[idx].get(), this.lstValue[idx].get());
            this.setLstVal(index, targetDate, data);
            this.length.set(this.length.get() + 1);
        }
        return true;
    }
    setLstVal(idx, date, value) {
        this.lstDate[idx].set(date);
        this.lstValue[idx].set(value);
    }
    /**
     * @param {number} [index]
     * @returns {(SpinalDateValue | SpinalDateValueArray)}
     * @memberof SpinalTimeSeriesArchiveDay
     */ get(index) {
        if (typeof index === "number") return this.at(index);
        if (this.lstDate instanceof spinal_core_connectorjs_1.TypedArray) return {
            dateDay: this.dateDay.get(),
            // @ts-ignore
            date: this.lstDate.get().subarray(0, this.length.get()),
            // @ts-ignore
            value: this.lstValue.get().subarray(0, this.length.get())
        };
        const date = [], value = [];
        for(let idx = 0; idx < this.length.get(); idx++){
            date.push(this.lstDate[idx].get());
            value.push(this.lstValue[idx].get());
        }
        return {
            dateDay: this.dateDay.get(),
            date,
            value
        };
    }
    /**
     * alias of 'get' method with index
     * @param {number} index
     * @returns {SpinalDateValue}
     * @memberof SpinalTimeSeriesArchiveDay
     */ at(index) {
        if (index >= this.length.get() || index < 0) return undefined;
        if (this.lstDate instanceof spinal_core_connectorjs_1.TypedArray) return {
            date: this.lstDate.get(index),
            // @ts-ignore
            value: this.lstValue.get(index)
        };
        return {
            date: this.lstDate[index].get(),
            value: this.lstValue[index].get()
        };
    }
    /**
     * For Tests - returns the TypedArrays' size
     * @memberof SpinalTimeSeriesArchiveDay
     */ getActualBufferSize() {
        return this.lstDate.length;
    }
    /**
     * @private
     * @memberof SpinalTimeSeriesArchiveDay
     */ addBufferSizeLength() {
        this.upgradeFromOldTimeSeries();
        for(let idx = this.length.get(); idx < this.length.get() * 2; idx++){
            this.lstDate.push(0);
            this.lstValue.push(0);
        }
    }
    upgradeFromOldTimeSeries() {
        if (this.lstDate instanceof spinal_core_connectorjs_1.TypedArray) {
            const tmpDate = this.lstDate;
            const tmpValue = this.lstValue;
            this.mod_attr("lstDate", tmpDate.get());
            this.mod_attr("lstValue", tmpValue.get());
        }
    }
}
exports.SpinalTimeSeriesArchiveDay = SpinalTimeSeriesArchiveDay;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalTimeSeriesArchiveDay);

},{"ce4fcb549d946cf6":"2uyD7"}],"ejMvW":[function(require,module,exports) {
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
exports.SpinalTimeSeriesConfig = void 0;
exports.SpinalTimeSeriesConfig = {
    MAX_DAY: 2,
    INIT_BLOCK_SIZE: 50
};

},{}],"8FqTr":[function(require,module,exports) {
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
exports.asyncGenToArray = void 0;
/**
 * @template T
 * @param {AsyncIterableIterator<T>} it
 * @return {Promise<T[]>}
 */ function asyncGenToArray(it) {
    var _a, it_1, it_1_1;
    var _b, e_1, _c, _d;
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        try {
            for(_a = true, it_1 = __asyncValues(it); it_1_1 = yield it_1.next(), _b = it_1_1.done, !_b;){
                _d = it_1_1.value;
                _a = false;
                try {
                    const i = _d;
                    res.push(i);
                } finally{
                    _a = true;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_a && !_b && (_c = it_1.return)) yield _c.call(it_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return res;
    });
}
exports.asyncGenToArray = asyncGenToArray;

},{}],"4G99s":[function(require,module,exports) {
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

},{}],"bdAx9":[function(require,module,exports) {
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

},{}],"g4XiH":[function(require,module,exports) {
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

},{}],"7XQE3":[function(require,module,exports) {
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

},{}],"axWFA":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDataEndpointDataType = exports.InputDataEndpointType = void 0;
const InputDataEndpointDataType_1 = require("845832e7236af323");
Object.defineProperty(exports, "InputDataEndpointDataType", {
    enumerable: true,
    get: function() {
        return InputDataEndpointDataType_1.InputDataEndpointDataType;
    }
});
const InputDataEndpointType_1 = require("cc566962486d92e8");
Object.defineProperty(exports, "InputDataEndpointType", {
    enumerable: true,
    get: function() {
        return InputDataEndpointType_1.InputDataEndpointType;
    }
});

},{"845832e7236af323":"8XtM0","cc566962486d92e8":"8EeeB"}],"8XtM0":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDataEndpointDataType = void 0;
/**
 * @enum {number}
 */ var InputDataEndpointDataType;
(function(InputDataEndpointDataType) {
    InputDataEndpointDataType[InputDataEndpointDataType["Null"] = 0] = "Null";
    InputDataEndpointDataType[InputDataEndpointDataType["Boolean"] = 1] = "Boolean";
    InputDataEndpointDataType[InputDataEndpointDataType["Unsigned"] = 2] = "Unsigned";
    InputDataEndpointDataType[InputDataEndpointDataType["Unsigned8"] = 3] = "Unsigned8";
    InputDataEndpointDataType[InputDataEndpointDataType["Unsigned16"] = 4] = "Unsigned16";
    InputDataEndpointDataType[InputDataEndpointDataType["Unsigned32"] = 5] = "Unsigned32";
    InputDataEndpointDataType[InputDataEndpointDataType["Integer"] = 6] = "Integer";
    InputDataEndpointDataType[InputDataEndpointDataType["Integer16"] = 7] = "Integer16";
    InputDataEndpointDataType[InputDataEndpointDataType["Real"] = 8] = "Real";
    InputDataEndpointDataType[InputDataEndpointDataType["Double"] = 9] = "Double";
    InputDataEndpointDataType[InputDataEndpointDataType["OctetString"] = 10] = "OctetString";
    InputDataEndpointDataType[InputDataEndpointDataType["CharacterString"] = 11] = "CharacterString";
    InputDataEndpointDataType[InputDataEndpointDataType["BitString"] = 12] = "BitString";
    InputDataEndpointDataType[InputDataEndpointDataType["Enumerated"] = 13] = "Enumerated";
    InputDataEndpointDataType[InputDataEndpointDataType["Date"] = 14] = "Date";
    InputDataEndpointDataType[InputDataEndpointDataType["Time"] = 15] = "Time";
    InputDataEndpointDataType[InputDataEndpointDataType["Array"] = 16] = "Array";
    InputDataEndpointDataType[InputDataEndpointDataType["DateTime"] = 17] = "DateTime";
    InputDataEndpointDataType[InputDataEndpointDataType["Long"] = 18] = "Long";
    InputDataEndpointDataType[InputDataEndpointDataType["String"] = 19] = "String";
    InputDataEndpointDataType[InputDataEndpointDataType["Duration"] = 20] = "Duration";
})(InputDataEndpointDataType || (exports.InputDataEndpointDataType = InputDataEndpointDataType = {}));

},{}],"8EeeB":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDataEndpointType = void 0;
/**
 * @enum {number}
 */ var InputDataEndpointType;
(function(InputDataEndpointType) {
    InputDataEndpointType[InputDataEndpointType["Temperature"] = 0] = "Temperature";
    InputDataEndpointType[InputDataEndpointType["Hygrometry"] = 1] = "Hygrometry";
    InputDataEndpointType[InputDataEndpointType["Power"] = 2] = "Power";
    InputDataEndpointType[InputDataEndpointType["Occupation"] = 3] = "Occupation";
    InputDataEndpointType[InputDataEndpointType["Light"] = 4] = "Light";
    InputDataEndpointType[InputDataEndpointType["Alarm"] = 5] = "Alarm";
    InputDataEndpointType[InputDataEndpointType["Other"] = 6] = "Other";
    InputDataEndpointType[InputDataEndpointType["Consigne"] = 7] = "Consigne";
    InputDataEndpointType[InputDataEndpointType["co2"] = 8] = "co2";
})(InputDataEndpointType || (exports.InputDataEndpointType = InputDataEndpointType = {}));

},{}],"auUMP":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalBmsEndpointGroup = exports.SpinalBmsEndpoint = exports.SpinalBmsNetwork = exports.SpinalBmsDevice = void 0;
const SpinalBmsDevice_1 = require("d76db348996a7f18");
Object.defineProperty(exports, "SpinalBmsDevice", {
    enumerable: true,
    get: function() {
        return SpinalBmsDevice_1.SpinalBmsDevice;
    }
});
const SpinalBmsNetwork_1 = require("9c5fc4e108dc7df3");
Object.defineProperty(exports, "SpinalBmsNetwork", {
    enumerable: true,
    get: function() {
        return SpinalBmsNetwork_1.SpinalBmsNetwork;
    }
});
const SpinalBmsEndpoint_1 = require("d465715120b7ba47");
Object.defineProperty(exports, "SpinalBmsEndpoint", {
    enumerable: true,
    get: function() {
        return SpinalBmsEndpoint_1.SpinalBmsEndpoint;
    }
});
const SpinalBmsEndpointGroup_1 = require("b55bcafdd9c4e5d9");
Object.defineProperty(exports, "SpinalBmsEndpointGroup", {
    enumerable: true,
    get: function() {
        return SpinalBmsEndpointGroup_1.SpinalBmsEndpointGroup;
    }
});
const obj = {
    SpinalBmsDevice: SpinalBmsDevice_1.SpinalBmsDevice,
    SpinalBmsNetwork: SpinalBmsNetwork_1.SpinalBmsNetwork,
    SpinalBmsEndpoint: SpinalBmsEndpoint_1.SpinalBmsEndpoint,
    SpinalBmsEndpointGroup: SpinalBmsEndpointGroup_1.SpinalBmsEndpointGroup
};
exports.default = obj;

},{"d76db348996a7f18":"6CT6k","9c5fc4e108dc7df3":"jmIjC","d465715120b7ba47":"gBjwy","b55bcafdd9c4e5d9":"cjjAM"}],"6CT6k":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalBmsDevice = void 0;
const spinal_core_connectorjs_type_1 = require("e04a213210fabc52");
const genUID_1 = require("1f87ccb31a1f3637");
/**
 * @property {spinal.Str} id;
 * @property {spinal.Str} name;
 * @property {spinal.Str} type;
 * @property {spinal.Str} path;
 * @export
 * @class SpinalBmsDevice
 * @extends {Model}
 */ class SpinalBmsDevice extends spinal_core_connectorjs_type_1.Model {
    /**
     *Creates an instance of SpinalBmsDevice.
     * @param {string} [name='']
     * @param {string} [type='']
     * @param {string} [path='']
     * @param {string} [id=genUID('SpinalBmsDevice')]
     * @memberof SpinalBmsDevice
     */ constructor(name = "", type = "", path = "", id = (0, genUID_1.genUID)("SpinalBmsDevice")){
        super();
        this.add_attr({
            id,
            name,
            type,
            path
        });
    }
}
exports.SpinalBmsDevice = SpinalBmsDevice;
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsDevice
 */ SpinalBmsDevice.relationName = "hasBmsDevice";
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsDevice
 */ SpinalBmsDevice.nodeTypeName = "BmsDevice";
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalBmsDevice);
exports.default = SpinalBmsDevice;

},{"e04a213210fabc52":"fRH70","1f87ccb31a1f3637":"eoGt4"}],"eoGt4":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genUID = void 0;
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
/**
 * @param {string} constructor
 * @returns {string}
 */ function genUID(constructor) {
    const res = `${constructor}-${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}-${Date.now().toString(16)}`;
    return res;
}
exports.genUID = genUID;

},{}],"jmIjC":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalBmsNetwork = void 0;
const spinal_core_connectorjs_type_1 = require("d3f42c5b6e9452f5");
const genUID_1 = require("5c6d9e36c9a50e79");
/**
 *
 * @property {spinal.Str} name
 * @property {spinal.Str} type
 * @property {spinal.Str} id
 * @export
 * @class SpinalBmsNetwork
 * @extends {Model}
 */ class SpinalBmsNetwork extends spinal_core_connectorjs_type_1.Model {
    /**
     *Creates an instance of SpinalBmsNetwork.
     * @param {string} [name='']
     * @param {string} [type='']
     * @param {string} [id=genUID('SpinalBmsNetwork')]
     * @memberof SpinalBmsNetwork
     */ constructor(name = "", type = "", id = (0, genUID_1.genUID)("SpinalBmsNetwork")){
        super();
        this.add_attr({
            id,
            name,
            type
        });
    }
}
exports.SpinalBmsNetwork = SpinalBmsNetwork;
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsNetwork
 */ SpinalBmsNetwork.relationName = "hasBmsNetwork";
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsNetwork
 */ SpinalBmsNetwork.nodeTypeName = "BmsNetwork";
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalBmsNetwork);
exports.default = SpinalBmsNetwork;

},{"d3f42c5b6e9452f5":"fRH70","5c6d9e36c9a50e79":"eoGt4"}],"gBjwy":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalBmsEndpoint = void 0;
const spinal_core_connectorjs_type_1 = require("48b0356037b9be11");
const genUID_1 = require("76f3c16954ec909e");
/**
 * @property {spinal.Str} id
 * @property {spinal.Str} path
 * @property {spinal.Str | spinal.Val} currentValue
 * @property {spinal.Str} unit
 * @property {spinal.Str} type
 * @property {spinal.Str} dataType
 * @export
 * @class SpinalBmsEndpoint
 * @extends {Model}
 */ class SpinalBmsEndpoint extends spinal_core_connectorjs_type_1.Model {
    /**
     *Creates an instance of SpinalBmsEndpoint.
     * @param {string} [name='']
     * @param {string} [path='']
     * @param {(string|number)} [currentValue='']
     * @param {string} [unit='']
     * @param {string} [dataType='']
     * @param {string} [type='']
     * @param {string} [id=genUID('SpinalBmsEndpoint')]
     * @memberof SpinalBmsEndpoint
     */ constructor(name = "", path = "", currentValue = "", unit = "", dataType = "", type = "", id = (0, genUID_1.genUID)("SpinalBmsEndpoint")){
        super();
        this.add_attr({
            id,
            name,
            path,
            currentValue,
            unit,
            dataType,
            type
        });
    }
}
exports.SpinalBmsEndpoint = SpinalBmsEndpoint;
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsEndpoint
 */ SpinalBmsEndpoint.relationName = "hasBmsEndpoint";
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsEndpoint
 */ SpinalBmsEndpoint.nodeTypeName = "BmsEndpoint";
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalBmsEndpoint);
exports.default = SpinalBmsEndpoint;

},{"48b0356037b9be11":"fRH70","76f3c16954ec909e":"eoGt4"}],"cjjAM":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalBmsEndpointGroup = void 0;
const spinal_core_connectorjs_type_1 = require("5662b3bd1086849c");
const genUID_1 = require("69e945aa974e3b18");
/**
 * @property {spinal.Str} id;
 * @property {spinal.Str} name;
 * @property {spinal.Str} type;
 * @property {spinal.Str} path;
 * @export
 * @class SpinalBmsEndpointGroup
 * @extends {Model}
 */ class SpinalBmsEndpointGroup extends spinal_core_connectorjs_type_1.Model {
    /**
     *Creates an instance of SpinalBmsEndpointGroup.
     * @param {string} [name='']
     * @param {string} [type='']
     * @param {string} [path='']
     * @param {string} [id=genUID('SpinalBmsNetwork')]
     * @memberof SpinalBmsEndpointGroup
     */ constructor(name = "", type = "", path = "", id = (0, genUID_1.genUID)("SpinalBmsNetwork")){
        super();
        this.add_attr({
            id,
            name,
            type,
            path
        });
    }
}
exports.SpinalBmsEndpointGroup = SpinalBmsEndpointGroup;
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsEndpointGroup
 */ SpinalBmsEndpointGroup.relationName = "hasBmsEndpointGroup";
/**
 * @static
 * @type {string}
 * @memberof SpinalBmsEndpointGroup
 */ SpinalBmsEndpointGroup.nodeTypeName = "BmsEndpointGroup";
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalBmsEndpointGroup);
exports.default = SpinalBmsEndpointGroup;

},{"5662b3bd1086849c":"fRH70","69e945aa974e3b18":"eoGt4"}],"bGJVT":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var global = arguments[3];
var FUNC_ERROR_TEXT = "Expected a function";
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
    });
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
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = throttle;

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-dashboard-standard.b6fe5a09.js.map
