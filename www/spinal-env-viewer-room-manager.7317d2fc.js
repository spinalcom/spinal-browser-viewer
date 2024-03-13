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
})({"5dUad":[function(require,module,exports) {
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
exports.ControlEndpointType = exports.ControlEndpointDataType = exports.CalculationRule = exports.ControlPointObj = exports.SpinalControlPoint = exports.getConfig = exports.NumberConfig = exports.EnumConfig = exports.BoolConfig = exports.spinalHeatmapService = exports.spinalControlPointService = void 0;
const SpinalControlEndpointService_1 = require("3b60ea2cefec015");
const CalculationRulesDataType_1 = require("a250dbb0128bb32");
Object.defineProperty(exports, "CalculationRule", {
    enumerable: true,
    get: function() {
        return CalculationRulesDataType_1.CalculationRule;
    }
});
const ControlEndpointDataType_1 = require("6b471f13c4908e8c");
Object.defineProperty(exports, "ControlEndpointDataType", {
    enumerable: true,
    get: function() {
        return ControlEndpointDataType_1.ControlEndpointDataType;
    }
});
const ControlEndpointType_1 = require("4fa6ea461fde4a9d");
Object.defineProperty(exports, "ControlEndpointType", {
    enumerable: true,
    get: function() {
        return ControlEndpointType_1.ControlEndpointType;
    }
});
const config_1 = require("92553d244e1f62ee");
Object.defineProperty(exports, "BoolConfig", {
    enumerable: true,
    get: function() {
        return config_1.BoolConfig;
    }
});
Object.defineProperty(exports, "EnumConfig", {
    enumerable: true,
    get: function() {
        return config_1.EnumConfig;
    }
});
Object.defineProperty(exports, "getConfig", {
    enumerable: true,
    get: function() {
        return config_1.getConfig;
    }
});
Object.defineProperty(exports, "NumberConfig", {
    enumerable: true,
    get: function() {
        return config_1.NumberConfig;
    }
});
const controlPointsModel_1 = require("a9f0e9ba8d81f6c2");
Object.defineProperty(exports, "ControlPointObj", {
    enumerable: true,
    get: function() {
        return controlPointsModel_1.ControlPointObj;
    }
});
Object.defineProperty(exports, "SpinalControlPoint", {
    enumerable: true,
    get: function() {
        return controlPointsModel_1.SpinalControlPoint;
    }
});
__exportStar(require("4259cdfd6225ff47"), exports);
const spinalControlPointService = new SpinalControlEndpointService_1.SpinalControlEndpointService();
exports.spinalControlPointService = spinalControlPointService;
const spinalHeatmapService = spinalControlPointService;
exports.spinalHeatmapService = spinalHeatmapService;
const globalRoot = typeof window === "undefined" ? global : window;
if (typeof globalRoot.spinal === "undefined") globalRoot.spinal = {};
if (typeof globalRoot.spinal.spinalHeatmapService === "undefined") globalRoot.spinal.spinalHeatmapService = spinalControlPointService;
if (typeof globalRoot.spinal.spinalControlPointService === "undefined") globalRoot.spinal.spinalControlPointService = spinalControlPointService;

},{"3b60ea2cefec015":"hdgl5","a250dbb0128bb32":"1GjYD","6b471f13c4908e8c":"exr9H","4fa6ea461fde4a9d":"fRn9S","92553d244e1f62ee":"4CJNA","a9f0e9ba8d81f6c2":"hG8Oz","4259cdfd6225ff47":"4Iocs"}],"hdgl5":[function(require,module,exports) {
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
exports.SpinalControlEndpointService = void 0;
const spinal_env_viewer_plugin_event_emitter_1 = require("96f0ae08a3523036");
const spinal_env_viewer_plugin_group_manager_service_1 = require("ece2b2691b677d55");
const contants_1 = require("c8cbc01be6d05e67");
const ControlEndpoint_1 = require("c2813343e0945cf2");
const ControlEnpointsTree_1 = require("e5c0f54561c63f4e");
function applyMixins(derivedConstructor, baseConstructors) {
    baseConstructors.forEach((baseConstructor)=>{
        Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name)=>{
            Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(baseConstructor.prototype, name));
        });
    });
}
class SpinalControlEndpointService {
    constructor(){
        this.CONTROL_POINT_TYPE = contants_1.CONTROL_POINT_TYPE;
        this.CONTROL_GROUP_TYPE = contants_1.CONTROL_GROUP_TYPE;
        this.CONTROL_GROUP_TO_CONTROLPOINTS = contants_1.CONTROL_GROUP_TO_CONTROLPOINTS;
        this.ROOM_TO_CONTROL_GROUP = contants_1.ROOM_TO_CONTROL_GROUP;
        this.listenLinkItemToGroupEvent();
        this.listenUnLinkItemToGroupEvent();
    }
    listenLinkItemToGroupEvent() {
        spinal_env_viewer_plugin_event_emitter_1.spinalEventEmitter.on(spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.constants.ELEMENT_LINKED_TO_GROUP_EVENT, ({ groupId, elementId })=>{
            this.linkControlPointToNewGroupItem(groupId, elementId);
        });
    }
    listenUnLinkItemToGroupEvent() {
        spinal_env_viewer_plugin_event_emitter_1.spinalEventEmitter.on(spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.constants.ELEMENT_UNLINKED_TO_GROUP_EVENT, ({ groupId, elementId })=>{
            this.unLinkControlPointToGroupItem(groupId, elementId);
        });
    }
}
exports.SpinalControlEndpointService = SpinalControlEndpointService;
applyMixins(SpinalControlEndpointService, [
    ControlEnpointsTree_1.ControlEnpointsTree,
    ControlEndpoint_1.ControlEndpointService
]);

},{"96f0ae08a3523036":"8hvTd","ece2b2691b677d55":"tSLpq","c8cbc01be6d05e67":"4Iocs","c2813343e0945cf2":"lamG3","e5c0f54561c63f4e":"jYFdi"}],"4Iocs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ROOM_TO_CONTROL_GROUP = exports.CONTROL_GROUP_TO_CONTROLPOINTS = exports.CONTROL_GROUP_TYPE = exports.CONTROL_POINT_TYPE = void 0;
exports.CONTROL_POINT_TYPE = "SpinalControlPoint";
exports.CONTROL_GROUP_TYPE = "CONTROL_GROUP";
exports.CONTROL_GROUP_TO_CONTROLPOINTS = "hasControlGroup";
exports.ROOM_TO_CONTROL_GROUP = "hasControlPoints";

},{}],"lamG3":[function(require,module,exports) {
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
exports.ControlEndpointService = void 0;
const spinal_core_connectorjs_type_1 = require("ba110c8d1a9d8e47");
const spinal_env_viewer_graph_service_1 = require("56fee426f4756e1d");
const spinal_model_bmsnetwork_1 = require("4dc416b25ad1806f");
const contants_1 = require("52c3e3df4c8153f9");
const Utilities_1 = require("fcabe83569e3bb26");
class ControlEndpointService {
    constructor(){}
    /**
     * checks if the id passed in parameter is a context of control Endpoint
     * @param  {string} id
     * @returns boolean
     */ isControlPointContext(id) {
        const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(id);
        const type = info.type.get();
        return type === `${contants_1.CONTROL_POINT_TYPE}GroupContext`;
    }
    /**
     * get All control endpoint profile  linked to control endpoint node
     * @param  {string} contextId
     * @param  {string} controlPointId
     * @returns Promise
     */ getControlPointProfil(contextId, controlPointId) {
        return __awaiter(this, void 0, void 0, function*() {
            let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(controlPointId);
            if (typeof realNode === "undefined") yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(contextId, contextId, (node)=>{
                if (node.getId().get() === controlPointId) {
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    realNode = node;
                    return true;
                }
                return false;
            });
            return {
                name: realNode.getName().get(),
                endpoints: yield realNode.getElement()
            };
        });
    }
    /**
     * link the control point to a node and create the bms endpoints according to the control point profiles
     * @param  {string} nodeId
     * @param  {string} controlPointContextId
     * @param  {string} controlPointId
     * @returns Promise
     */ linkControlPointToGroup(nodeId, controlPointContextId, controlPointId) {
        return __awaiter(this, void 0, void 0, function*() {
            const controlPoints = yield this.getControlPointProfil(controlPointContextId, controlPointId);
            const groups = yield Utilities_1.Utilities.getGroups(nodeId);
            const promises = groups.map((group)=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        yield this._LinkNode(group.id.get(), controlPointContextId, controlPointId, controlPoints);
                        yield this.saveItemLinked(controlPointId, [
                            group.id.get()
                        ]);
                        yield this.saveItemLinked(group.id.get(), [
                            controlPointId
                        ]);
                        return group;
                    } catch (error) {
                        console.error(error);
                        return;
                    }
                }));
            return Promise.all(promises);
        // .then((result) => {
        //    result.map((group: any) => {
        //    })
        //    return result.map((el: any) => SpinalGraphService.getInfo(el.id.get()));
        // })
        });
    }
    /**
     * unlink the control point to a group and his items
     * @param  {string} groupId
     * @param  {string} controlPointProfilId
     * @returns Promise
     */ unLinkControlPointToGroup(groupId, controlPointProfilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const groupItems = yield Utilities_1.Utilities.getGroupItems(groupId);
            const promises = groupItems.map((element)=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        return this.unLinkControlPointToGroupItem(groupId, element.id.get(), controlPointProfilId);
                    } catch (error) {
                        console.error(error);
                        return false;
                    }
                }));
            return Promise.all(promises).then(()=>__awaiter(this, void 0, void 0, function*() {
                    return this.removeItemSaved(groupId, controlPointProfilId);
                }));
        });
    }
    /**
     * Edit the control point profile and update the bms endpoints associated according to the control point profiles
     * @param  {string} contextId
     * @param  {string} controlPointId
     * @param  {Array} values
     * @returns Promise
     */ editControlPointProfil(contextId, controlPointId, values) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = yield this.getControlPointProfil(contextId, controlPointId);
            // res.endpoints.set(values);
            const diffs = Utilities_1.Utilities.getDifference(res.endpoints.get(), values);
            const profils = yield this.getAllProfils(controlPointId);
            yield Utilities_1.Utilities.create(contextId, diffs.toCreate, profils, res.endpoints);
            yield Utilities_1.Utilities.update(diffs.toUpdate, profils, res.endpoints);
            yield Utilities_1.Utilities.delete(diffs.toRemove, profils, res.endpoints);
            return res;
        });
    }
    /**
     * get All node linked to the control point
     * @param  {string} controlProfilId
     * @returns Promise
     */ getElementLinked(controlProfilId) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.loadElementLinked(controlProfilId).then((res)=>{
                if (!res) return [];
                const items = [];
                for(let index = 0; index < res.length; index++){
                    const node = res[index];
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    items.push(spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(node.getId().get()));
                }
                return items;
            });
        });
    }
    /**
     * For a selected group format the control point profiles and the rooms of this group
     * @param  {string} groupId
     * @returns Promise
     */ getDataFormated(groupId) {
        return __awaiter(this, void 0, void 0, function*() {
            const elementLinked = yield this.getElementLinked(groupId);
            const rooms = yield Utilities_1.Utilities.getGroupItems(groupId);
            const promises = elementLinked.map((element)=>__awaiter(this, void 0, void 0, function*() {
                    const el = element.get();
                    const contextId = this.getContextId(el.id);
                    const controlPointProfil = yield this.getControlPointProfil(contextId, el.id);
                    el["endpointProfils"] = controlPointProfil.endpoints.get();
                    el["rooms"] = yield this.formatRooms(el.id, rooms);
                    return el;
                }));
            return Promise.all(promises);
        });
    }
    /**
     * get and return the endpoint linked to nodeId and created according the profil selected
     * @param  {string} nodeId
     * @param  {string} profilId
     * @returns Promise
     */ getReferencesLinked(nodeId, profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const profils = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
                contants_1.ROOM_TO_CONTROL_GROUP
            ]);
            if (!profilId) return profils;
            const found = profils.find((el)=>el.referenceId.get() === profilId);
            return found;
        });
    }
    /**
     * get All endpoints Nodes linked to roomId and created according the profil selected
     * @param  {string} roomId - nodeId
     * @param  {string} profilId - controlEndpoint profil id
     * @returns Promise
     */ getEndpointsNodeLinked(roomId, profilId, referenceLinked) {
        return __awaiter(this, void 0, void 0, function*() {
            const found = referenceLinked || (yield this.getReferencesLinked(roomId, profilId));
            let profilFound = Array.isArray(found) ? found[0] : found;
            if (profilFound) return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(profilFound.id.get(), [
                spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName
            ]);
            return [];
        });
    }
    /**
     * Get all node linked to the nodeId (control endpoint | id of group)
     * @param  {string} nodeId - controlPointId or groupId
     * @returns Promise
     */ loadElementLinked(nodeId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        if (!realNode || !realNode.info || !realNode.info.linkedItems) {
            let res = new spinal_core_connectorjs_type_1.Lst();
            realNode.info.add_attr({
                linkedItems: new spinal_core_connectorjs_type_1.Ptr(res)
            });
            return Promise.resolve(res);
        }
        return new Promise((resolve, reject)=>{
            realNode.info.linkedItems.load((res)=>{
                return resolve(res);
            });
        });
    }
    /**
     * This method takes as parameter a group item's id and return all control endpoints classify by profil
     * @param  {string} groupItemId
     * @returns Promise
     */ getControlEndpointLinkedToGroupItem(groupItemId) {
        return __awaiter(this, void 0, void 0, function*() {
            const profils = yield this.getReferencesLinked(groupItemId);
            const promises = profils.map((element)=>__awaiter(this, void 0, void 0, function*() {
                    const el = element.get();
                    const endpoints = yield this.getEndpointsNodeLinked(groupItemId, el.referenceId, element);
                    el.endpoints = endpoints.map((el)=>el.get());
                    return el;
                }));
            return Promise.all(promises);
        });
    }
    /**
     * get All endpoints linked to roomId and created according the profil selected
     * @param  {string} roomId - nodeId
     * @param  {string} profilId - controlEndpoint profil id
     * @returns Promise
     */ getEndpointsLinked(nodeId, profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const endpointsInfo = yield this.getEndpointsNodeLinked(nodeId, profilId);
            const promises = endpointsInfo.map((el)=>el.element.load());
            return Promise.all(promises);
        });
    }
    /**
     * This method allows to create and link endpoints to group item according the profil linked to group
     * @param  {string} groupId
     * @param  {string} elementId
     * @returns Promise
     */ linkControlPointToNewGroupItem(groupId, elementId, controlPointProfilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const profilsLinked = controlPointProfilId ? [
                spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(controlPointProfilId)
            ] : yield this.getElementLinked(groupId);
            const promises = profilsLinked.map((profilModel)=>__awaiter(this, void 0, void 0, function*() {
                    const profil = profilModel.get();
                    const controlPointContextId = this.getContextId(profil.id);
                    const controlPoints = yield this.getControlPointProfil(controlPointContextId, profil.id);
                    const nodeId = yield Utilities_1.Utilities.createNode(controlPoints.name, controlPointContextId, profil.id, controlPoints.endpoints.get());
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(elementId, nodeId, controlPointContextId, contants_1.ROOM_TO_CONTROL_GROUP, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                }));
            return Promise.all(promises);
        });
    }
    /**
     * This method allows to ulink endpoints to group item according the profil linked to group
     * @param  {string} groupId
     * @param  {string} elementId
     * @returns Promise
     */ unLinkControlPointToGroupItem(groupId, elementId, controlPointProfilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const profils = controlPointProfilId ? [
                spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(controlPointProfilId)
            ] : yield this.getElementLinked(groupId);
            const elementProfils = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(elementId, [
                contants_1.ROOM_TO_CONTROL_GROUP
            ]);
            // const profilsLinked = profilsLinkedModel.map((el: any) => el.get());
            // const elementProfils = (await elementProfilsModel).map(el => el.get());
            const promises = profils.map((profil)=>{
                const found = elementProfils.find((el)=>[
                        el.referenceId.get(),
                        el.id.get()
                    ].indexOf(profil.id.get()) !== -1);
                if (found) return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(elementId, found.id.get(), contants_1.ROOM_TO_CONTROL_GROUP, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                return Promise.resolve(false);
            });
            return Promise.all(promises);
        });
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    //                                   PRIVATE                                             //
    ///////////////////////////////////////////////////////////////////////////////////////////
    getAllProfils(controlPointId) {
        return __awaiter(this, void 0, void 0, function*() {
            const elementsLinked = yield this.getElementLinked(controlPointId);
            const promises = [];
            for (const group of elementsLinked)promises.push(Utilities_1.Utilities.getGroupItems(group.id.get()));
            return Promise.all(promises).then((roomsArrays)=>{
                const rooms = roomsArrays.flat();
                const promises2 = rooms.map((el)=>this.getReferencesLinked(el.id.get(), controlPointId));
                return Promise.all(promises2).then((result)=>{
                    return result.flat();
                });
            });
        });
    }
    controlPointProfilIsAlreadyLinked(profilId, groupId) {
        return __awaiter(this, void 0, void 0, function*() {
            const linked = yield this.getElementLinked(groupId);
            const found = linked.find((el)=>el.id.get() === profilId);
            return typeof found !== "undefined";
        });
    }
    getContextId(nodeId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        if (realNode.contextIds) {
            const contextIds = realNode.contextIds.values();
            return contextIds.find((id)=>{
                return this.isControlPointContext(id);
            });
        }
    }
    formatRooms(profilId, rooms) {
        const promises = rooms.map((room)=>__awaiter(this, void 0, void 0, function*() {
                let obj = room.get();
                obj["bimObjects"] = [];
                obj["endpoints"] = yield this.getEndpointsLinked(obj.id, profilId);
                return obj;
            }));
        return Promise.all(promises);
    }
    saveItemLinked(profilId, ids) {
        return __awaiter(this, void 0, void 0, function*() {
            let items = yield this.loadElementLinked(profilId);
            ids.forEach((id)=>{
                const isLinked = Utilities_1.Utilities.isLinked(items, id);
                if (!isLinked) {
                    const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
                    items.push(realNode);
                }
            });
            const res = [];
            for(let index = 0; index < items.length; index++){
                const element = items[index].info.get();
                res.push(element);
            }
            return res;
        });
    }
    removeItemSaved(groupId, profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            let profilItems = yield this.loadElementLinked(profilId);
            let groupItems = yield this.loadElementLinked(groupId);
            return [
                this.removeItemFromLst(profilItems, groupId),
                this.removeItemFromLst(groupItems, profilId)
            ];
        });
    }
    _LinkNode(groupId, controlPointContextId, controlPointId, controlPoints) {
        return __awaiter(this, void 0, void 0, function*() {
            const isLinked = yield this.controlPointProfilIsAlreadyLinked(controlPointId, groupId);
            if (isLinked) return;
            const items = yield Utilities_1.Utilities.getGroupItems(groupId);
            const promises = items.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    return Utilities_1.Utilities.linkProfilToGroupItemIfNotExist(el.id.get(), controlPointContextId, controlPointId, controlPoints);
                }));
            return Promise.all(promises).then((result)=>{
                return result.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.getId().get()));
            });
        });
    }
    removeItemFromLst(lst, itemId) {
        for(let index = 0; index < lst.length; index++){
            const element = lst[index];
            if (element.getId().get() === itemId) {
                lst.splice(index);
                return true;
            }
        }
        return false;
    }
}
exports.default = ControlEndpointService;
exports.ControlEndpointService = ControlEndpointService;

},{"ba110c8d1a9d8e47":"fRH70","56fee426f4756e1d":"9n7zp","4dc416b25ad1806f":"gzkbg","52c3e3df4c8153f9":"4Iocs","fcabe83569e3bb26":"cYfPf"}],"cYfPf":[function(require,module,exports) {
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
exports.Utilities = void 0;
const spinal_core_connectorjs_type_1 = require("79c60731fdd0de9f");
const spinal_env_viewer_graph_service_1 = require("ebbc5b84a7c55e11");
const spinal_env_viewer_plugin_group_manager_service_1 = require("89c092d8d8ffc033");
const spinal_model_bmsnetwork_1 = require("5e142feb6154e0f8");
const ControlEndpointDataType_1 = require("68c172dc5bb7631c");
const ControlEndpointType_1 = require("d73f4e00d317b9b8");
const contants_1 = require("e0c74ff21acb7864");
const netWorkService = new spinal_model_bmsnetwork_1.NetworkService();
class Utilities {
    static getGroups(nodeId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroups(nodeId);
    }
    static getGroupItems(groupId) {
        return __awaiter(this, void 0, void 0, function*() {
            // const groups = await groupManagerService.getGroups(nodeId);
            // const promises = groups.map(el => groupManagerService.getElementsLinkedToGroup(el.id.get()))
            // return Promise.all(promises).then((result: any) => {
            //    return result.flat();
            // })
            return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getElementsLinkedToGroup(groupId);
        });
    }
    static createNode(groupName, controlPointContextId, controlPointId, controlPoints) {
        return __awaiter(this, void 0, void 0, function*() {
            const groupNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: groupName,
                referenceId: controlPointId,
                type: spinal_model_bmsnetwork_1.SpinalBmsEndpointGroup.nodeTypeName
            }, new spinal_core_connectorjs_type_1.Model());
            const promises = controlPoints.map((endpoint)=>__awaiter(this, void 0, void 0, function*() {
                    return this.linkEndpointToProfil(controlPointContextId, groupNodeId, endpoint);
                }));
            yield Promise.all(promises);
            return groupNodeId;
        });
    }
    static linkEndpointToProfil(controlPointContextId, groupNodeId, endpoint) {
        return __awaiter(this, void 0, void 0, function*() {
            // const endpoint = element.get();
            endpoint["currentValue"] = this.getCurrentValue(endpoint.dataType);
            const endpointObj = this.createEndpointNode(endpoint);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(groupNodeId, endpointObj.childId, controlPointContextId, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            // await SpinalGraphService.addChild(groupNodeId, endpointObj.childId, SpinalBmsEndpoint.relationName, SPINAL_RELATION_PTR_LST_TYPE);
            yield netWorkService._createAttributes(endpointObj.childId, endpointObj.res);
            return endpointObj.childId;
        });
    }
    static createEndpointNode(obj) {
        const res = new spinal_model_bmsnetwork_1.SpinalBmsEndpoint(obj.name, obj.path, obj.currentValue, obj.unit, ControlEndpointDataType_1.ControlEndpointDataType[obj.dataType], ControlEndpointType_1.ControlEndpointType[obj.type], obj.id);
        res.add_attr({
            alias: obj.alias,
            command: obj.command,
            saveTimeSeries: obj.saveTimeSeries,
            isActive: (obj === null || obj === void 0 ? void 0 : obj.isActive) || true
        });
        const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            type: spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName,
            endpointId: obj.id,
            name: obj.name
        }, res);
        return {
            childId,
            res
        };
    // await SpinalGraphService.addChildInContext(
    //     parentId,
    //     childId,
    //     this.contextId,
    //     SpinalBmsEndpoint.relationName,
    //     SPINAL_RELATION_PTR_LST_TYPE,
    //   );
    }
    static getCurrentValue(dataType) {
        switch(dataType){
            case ControlEndpointDataType_1.ControlEndpointDataType.Boolean:
                return false;
            case ControlEndpointDataType_1.ControlEndpointDataType.Float:
            case ControlEndpointDataType_1.ControlEndpointDataType.Integer:
            case ControlEndpointDataType_1.ControlEndpointDataType.Integer16:
            case ControlEndpointDataType_1.ControlEndpointDataType.Real:
            case ControlEndpointDataType_1.ControlEndpointDataType.Double:
            case ControlEndpointDataType_1.ControlEndpointDataType.Long:
                return 0;
            default:
                return "";
        }
    }
    static isLinked(items, id) {
        for(let index = 0; index < items.length; index++){
            const nodeId = items[index].getId().get();
            if (nodeId === id) return true;
        }
        return false;
    }
    static getDifference(oldEndpoint, newEndpoints) {
        const toCreate = newEndpoints.filter((el)=>{
            const found = oldEndpoint.find((el2)=>el2.id === el.id);
            return typeof found === "undefined";
        });
        const toRemove = oldEndpoint.filter((el)=>{
            const found = newEndpoints.find((el2)=>el2.id === el.id);
            return typeof found === "undefined";
        });
        const toUpdate = newEndpoints.filter((el)=>this.isUpdated(el, oldEndpoint));
        return {
            toCreate,
            toUpdate,
            toRemove
        };
    }
    static isUpdated(controlPoint, oldEndpoint) {
        const found = oldEndpoint.find((el)=>el.id === controlPoint.id);
        if (!found) return false;
        const objAreEquals = this.objectsAreEquals(controlPoint, found);
        if (!objAreEquals) return true;
        const configAreEquals = this.configAreEquals(controlPoint.config, found.config);
        if (objAreEquals && configAreEquals) return false;
        return true;
    }
    static configAreEquals(config1, config2) {
        const config1HasEnum = "enumeration" in config1;
        if (config1HasEnum) {
            const config2HasEnum = "enumeration" in config2;
            if (!config2HasEnum) return false;
            const firstConfig = config1;
            const secondConfig = config2;
            if (firstConfig.enumeration.length !== secondConfig.enumeration.length) return false;
            for(let index = 0; index < firstConfig.enumeration.length; index++){
                const el1 = firstConfig.enumeration[index];
                const el2 = secondConfig.enumeration[index];
                if (!this.objectsAreEquals(el1, el2)) return false;
            }
            return true;
        }
        const keys1 = Object.keys(config1);
        const keys2 = Object.keys(config2);
        if (keys1.length !== keys2.length) return false;
        for (const key of keys1){
            if (typeof config1[key] !== "object" && config1[key] !== config2[key]) return false;
            else if (!this.objectsAreEquals(config1[key], config2[key])) return false;
        }
        return true;
    }
    static objectsAreEquals(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) return false;
        for (let key of keys1){
            if (key !== "config" && object1[key] !== object2[key]) return false;
        }
        return true;
    }
    static create(controlPointContextId, newList, profils, endpointsLst) {
        const promises = newList.map((endpoint)=>{
            endpointsLst.push(endpoint);
            const promises2 = profils.map((profil)=>__awaiter(this, void 0, void 0, function*() {
                    return this.linkEndpointToProfil(controlPointContextId, profil.id.get(), endpoint);
                }));
            return Promise.all(promises2);
        });
        return Promise.all(promises);
    }
    static update(newList, profils, endpointsLst) {
        const promises = newList.map((element)=>{
            const index = this.getIndex(endpointsLst, element.id);
            this.setProfilValue(element, endpointsLst[index]);
            const promises2 = profils.map((profil)=>__awaiter(this, void 0, void 0, function*() {
                    const endpointId = yield this.getEndpointByType(profil.id.get(), element.id);
                    return this.modEndpoint(endpointId, element);
                }));
            return Promise.all(promises2);
        });
        return Promise.all(promises);
    }
    static delete(newList, profils, endpointsLst) {
        const promises = newList.map((element)=>{
            const index = this.getIndex(endpointsLst, element.id);
            endpointsLst.splice(index);
            const promises2 = profils.map((profil)=>__awaiter(this, void 0, void 0, function*() {
                    const endpointId = yield this.getEndpointByType(profil.id.get(), element.id);
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(profil.id.get(), endpointId, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                }));
            return Promise.all(promises2);
        });
        return Promise.all(promises);
    }
    static modEndpoint(endpointId, newProfil) {
        return __awaiter(this, void 0, void 0, function*() {
            const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(endpointId);
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(endpointId);
            const element = yield info.element.load();
            for (const key of Object.keys(newProfil))if (key !== "config" && element[key]) element[key].set(newProfil[key]);
            realNode.info.name.set(newProfil.name);
        });
    }
    static setProfilValue(newProfil, oldProfil) {
        for (const key of Object.keys(newProfil))if (oldProfil[key]) oldProfil[key].set(newProfil[key]);
        else oldProfil.add_attr({
            [key]: newProfil[key]
        });
    }
    static getEndpointByType(profilId, endpointId) {
        return __awaiter(this, void 0, void 0, function*() {
            const endpoints = yield this.getProfilEndpoints(profilId);
            const found = endpoints.find((el)=>el.endpointId.get() === endpointId);
            if (found) return found.id.get();
        });
    }
    static getProfilEndpoints(profilId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(profilId, [
            spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName
        ]);
    }
    static getIndex(liste, id) {
        for(let index = 0; index < liste.length; index++){
            const elementId = liste[index].id.get();
            if (elementId === id) return index;
        }
        return -1;
    }
    static linkProfilToGroupItemIfNotExist(itemId, controlPointContextId, controlPointId, controlPoints) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodeId = yield this.createNode(controlPoints.name, controlPointContextId, controlPointId, controlPoints.endpoints.get());
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(itemId, [
                contants_1.ROOM_TO_CONTROL_GROUP
            ]);
            const found = children.find((el)=>{
                var _a;
                return ((_a = el.referenceId) === null || _a === void 0 ? void 0 : _a.get()) === controlPointId;
            });
            if (found) return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(found.id.get());
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(itemId, nodeId, controlPointContextId, contants_1.ROOM_TO_CONTROL_GROUP, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
}
exports.default = Utilities;
exports.Utilities = Utilities;

},{"79c60731fdd0de9f":"fRH70","ebbc5b84a7c55e11":"9n7zp","89c092d8d8ffc033":"tSLpq","5e142feb6154e0f8":"gzkbg","68c172dc5bb7631c":"exr9H","d73f4e00d317b9b8":"fRn9S","e0c74ff21acb7864":"4Iocs"}],"exr9H":[function(require,module,exports) {
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
exports.ControlEndpointDataType = void 0;
var ControlEndpointDataType;
(function(ControlEndpointDataType) {
    ControlEndpointDataType["Null"] = "Null";
    ControlEndpointDataType["Float"] = "Float";
    ControlEndpointDataType["Boolean"] = "Boolean";
    ControlEndpointDataType["Unsigned"] = "Unsigned";
    ControlEndpointDataType["Unsigned8"] = "Unsigned8";
    ControlEndpointDataType["Unsigned16"] = "Unsigned16";
    ControlEndpointDataType["Unsigned32"] = "Unsigned32";
    ControlEndpointDataType["Integer"] = "Integer";
    ControlEndpointDataType["Integer16"] = "Integer16";
    ControlEndpointDataType["Real"] = "Real";
    ControlEndpointDataType["Double"] = "Double";
    ControlEndpointDataType["OctetString"] = "OctetString";
    ControlEndpointDataType["CharacterString"] = "CharacterString";
    ControlEndpointDataType["BitString"] = "BitString";
    ControlEndpointDataType["Date"] = "Date";
    ControlEndpointDataType["Time"] = "Time";
    ControlEndpointDataType["Array"] = "Array";
    ControlEndpointDataType["DateTime"] = "DateTime";
    ControlEndpointDataType["Long"] = "Long";
    ControlEndpointDataType["String"] = "String";
    ControlEndpointDataType["Duration"] = "Duration";
    ControlEndpointDataType["Enum"] = "Enum";
})(ControlEndpointDataType = exports.ControlEndpointDataType || (exports.ControlEndpointDataType = {}));

},{}],"fRn9S":[function(require,module,exports) {
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
exports.ControlEndpointType = void 0;
var ControlEndpointType;
(function(ControlEndpointType) {
    ControlEndpointType["Temperature"] = "Temperature";
    ControlEndpointType["Hygrometry"] = "Hygrometry";
    ControlEndpointType["Power"] = "Power";
    ControlEndpointType["Occupation"] = "Occupation";
    ControlEndpointType["Light"] = "Light";
    ControlEndpointType["Alarm"] = "Alarm";
    ControlEndpointType["Other"] = "Other";
    ControlEndpointType["Consigne"] = "Consigne";
    ControlEndpointType["co2"] = "co2";
})(ControlEndpointType = exports.ControlEndpointType || (exports.ControlEndpointType = {}));

},{}],"jYFdi":[function(require,module,exports) {
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
exports.ControlEnpointsTree = void 0;
const spinal_core_connectorjs_type_1 = require("4647b50cb40ba902");
const spinal_env_viewer_graph_service_1 = require("563741af32325660");
const spinal_env_viewer_plugin_group_manager_service_1 = require("26f19721f8c6d50e");
const contants_1 = require("3de4f6869f25192c");
class ControlEnpointsTree {
    constructor(){}
    /**
     * This method creates a context of control Endpoint
     * @param  {string} contextName - The context of heatmap Name
     * @returns Promise
     */ createContext(contextName) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.createGroupContext(contextName, contants_1.CONTROL_POINT_TYPE).then((context)=>{
            const contextId = context.getId().get();
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId);
        });
    }
    /**
     * retrieves and returns all contexts of control Endpoint
     * @returns Promise
     */ getContexts() {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroupContexts(contants_1.CONTROL_POINT_TYPE).then((contexts)=>{
            return contexts.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.id));
        });
    }
    /**
     * This method creates an endpoint control category
     * @param  {string} contextId
     * @param  {string} categoryName
     * @param  {string} iconName
     * @returns Promise
     */ createCategory(contextId, categoryName, iconName) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addCategory(contextId, categoryName, iconName).then((result)=>{
            const nodeId = result.getId().get();
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
        });
    }
    /**
     * get and return all categories in the context
     * @param  {string} nodeId
     * @returns Promise
     */ getCategories(nodeId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getCategories(nodeId).then((result)=>{
            return result.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.id.get()));
        });
    }
    /**
     * This method creates an endpoint control group
     * @param  {string} contextId
     * @param  {string} categoryId
     * @param  {string} groupName
     * @param  {string} groupColor
     * @returns Promise
     */ createGroup(contextId, categoryId, groupName, groupColor) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addGroup(contextId, categoryId, groupName, groupColor).then((result)=>{
            const nodeId = result.getId().get();
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
        });
    }
    /**
     * get and return all groups in the category
     * @param  {string} nodeId
     * @returns Promise
     */ getGroups(nodeId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroups(nodeId).then((result)=>{
            return result.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.id.get()));
        });
    }
    /**
     * get All control endpoint node linked to group selected
     * @param  {string} groupId
     * @returns Promise
     */ getControlPoint(groupId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getElementsLinkedToGroup(groupId);
    }
    /**
     * checks if the id passed in parameter is a group of control Endpoint
     * @param  {string} id
     * @returns boolean
     */ isControlPointGroup(id) {
        const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(id);
        const type = info.type.get();
        return type === `${contants_1.CONTROL_POINT_TYPE}Group`;
    }
    /**
     * creates and links a profil of control endpoint to the group selected in the context selected
     * @param  {string} contextId
     * @param  {string} groupId
     * @param  {any} controlPointProfil
     * @returns Promise of new groupId and old groupId
     */ createControlPointProfil(contextId, groupId, controlPointProfil = {
        name: "unknow",
        endpoints: []
    }) {
        const profilNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name: controlPointProfil.name,
            type: contants_1.CONTROL_POINT_TYPE
        }, new spinal_core_connectorjs_type_1.Lst(controlPointProfil.endpoints));
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.linkElementToGroup(contextId, groupId, profilNodeId);
    }
}
exports.default = ControlEnpointsTree;
exports.ControlEnpointsTree = ControlEnpointsTree;

},{"4647b50cb40ba902":"fRH70","563741af32325660":"9n7zp","26f19721f8c6d50e":"tSLpq","3de4f6869f25192c":"4Iocs"}],"1GjYD":[function(require,module,exports) {
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
exports.CalculationRule = void 0;
var CalculationRule;
(function(CalculationRule) {
    CalculationRule["Reference"] = "Reference";
    CalculationRule["Sum"] = "Sum";
    CalculationRule["Average"] = "Average";
})(CalculationRule = exports.CalculationRule || (exports.CalculationRule = {}));

},{}],"4CJNA":[function(require,module,exports) {
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
exports.getConfig = exports.NumberConfig = exports.EnumConfig = exports.BoolConfig = void 0;
const CalculationRulesDataType_1 = require("7a784f4dfee27431");
const ControlEndpointDataType_1 = require("3c9d55ae878071d1");
exports.BoolConfig = {
    min: {
        value: false,
        color: "#008000"
    },
    max: {
        value: true,
        color: "#FF0000"
    },
    calculation_rule: CalculationRulesDataType_1.CalculationRule.Reference
};
exports.EnumConfig = {
    enumeration: [],
    calculation_rule: CalculationRulesDataType_1.CalculationRule.Reference
};
exports.NumberConfig = {
    min: {
        value: 0,
        color: "#FF0000"
    },
    average: {
        value: 15,
        color: "#ffff00"
    },
    max: {
        value: 30,
        color: "#008000"
    },
    calculation_rule: CalculationRulesDataType_1.CalculationRule.Reference
};
const getConfig = function(dataType) {
    switch(dataType){
        case ControlEndpointDataType_1.ControlEndpointDataType.Boolean:
            return exports.BoolConfig;
        case ControlEndpointDataType_1.ControlEndpointDataType.Enum:
            return exports.EnumConfig;
        case ControlEndpointDataType_1.ControlEndpointDataType.Float:
        case ControlEndpointDataType_1.ControlEndpointDataType.Integer:
        case ControlEndpointDataType_1.ControlEndpointDataType.Integer16:
        case ControlEndpointDataType_1.ControlEndpointDataType.Real:
        case ControlEndpointDataType_1.ControlEndpointDataType.Double:
        case ControlEndpointDataType_1.ControlEndpointDataType.Long:
            return exports.NumberConfig;
    }
};
exports.getConfig = getConfig;

},{"7a784f4dfee27431":"1GjYD","3c9d55ae878071d1":"exr9H"}],"hG8Oz":[function(require,module,exports) {
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
exports.SpinalControlPoint = exports.ControlPointObj = void 0;
const spinal_core_connectorjs_type_1 = require("f3b36af9ab6a8000");
const ControlEndpointDataType_1 = require("7d973f910d5ccd54");
const ControlEndpointType_1 = require("1d9c446b6db051d5");
const config_1 = require("a8481e84f179d63c");
exports.ControlPointObj = Object.freeze({
    name: "",
    alias: "",
    path: "",
    unit: "",
    dataType: ControlEndpointDataType_1.ControlEndpointDataType.Float,
    type: ControlEndpointType_1.ControlEndpointType.Temperature,
    command: 0,
    saveTimeSeries: 0,
    config: (0, config_1.getConfig)(ControlEndpointDataType_1.ControlEndpointDataType.Float),
    icon: "device_thermostat",
    isActive: true
});
class SpinalControlPoint extends spinal_core_connectorjs_type_1.Model {
    constructor(controlPoint){
        super();
        if (controlPoint) controlPoint.config = (0, config_1.getConfig)(controlPoint.dataType);
        if (typeof controlPoint === "undefined") controlPoint = exports.ControlPointObj;
        this.add_attr(controlPoint);
        this.bindDataType();
    }
    bindDataType() {
        this.dataType.bind(()=>{
            const type = this.dataType.get();
            this.mod_attr("config", (0, config_1.getConfig)(type));
        });
    }
}
exports.SpinalControlPoint = SpinalControlPoint;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalControlPoint
]);

},{"f3b36af9ab6a8000":"fRH70","7d973f910d5ccd54":"exr9H","1d9c446b6db051d5":"fRn9S","a8481e84f179d63c":"4CJNA"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-room-manager.7317d2fc.js.map
