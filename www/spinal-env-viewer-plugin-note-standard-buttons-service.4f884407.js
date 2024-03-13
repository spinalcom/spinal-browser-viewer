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
})({"9JoRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Standard_buttons_service", ()=>Standard_buttons_service);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
//   import {
//     SPINAL_TICKET_SERVICE_TICKET_TYPE,
//     SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME,
//     SPINAL_TICKET_SERVICE_STEP_TYPE,
//   } from "spinal-service-ticket/dist/Constants";
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
class Standard_buttons_service {
    static getIcon(nodeInfo, contextInfo, groupType) {
        return this._isColored(nodeInfo, contextInfo, groupType).then((isColored)=>{
            return isColored;
        });
    }
    static restoreItem(nodeInfo, contextInfo, childrenType, groupType) {
        this.getGroups(nodeInfo, contextInfo, groupType).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                this._restoreGroup(contextInfo.id, id, childrenType);
            });
        });
    }
    static colorItem(nodeInfo, contextInfo, childrenType, groupType) {
        this.getGroups(nodeInfo, contextInfo, groupType).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                let color = el.color ? el.color : undefined;
                this._colorGroup(contextInfo.id, id, color, childrenType);
            });
        });
    }
    static getGroups(selectedNode, contextInfo, groupType) {
        const type = selectedNode.type;
        const nodeId = selectedNode.id;
        const contextId = contextInfo.id;
        if (type === groupType) return Promise.resolve([
            selectedNode
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === groupType;
        //   return groupManagerService.isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    static async getBimObjects(contextId, groupId, nodeType) {
        const nodes = await this._findItemByNodeType(groupId, contextId, nodeType);
        const parents = await this._getParents(nodes);
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
    static _isColored(selectedNode, contextInfo, groupType) {
        return this.getGroups(selectedNode, contextInfo, groupType).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id = res[index].id;
                if (typeof ItemColoredMap.get(id) === "undefined") return false;
            }
            return true;
        });
    }
    static _colorGroup(contextId, groupId, argColor, nodeType) {
        return this.getBimObjects(contextId, groupId, nodeType).then((res)=>{
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
    static _restoreGroup(contextId, groupId, nodeType) {
        ItemColoredMap.delete(groupId);
        return this.getBimObjects(contextId, groupId, nodeType).then((res)=>{
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
    static _findItemByNodeType(startNodeId, contextId, nodeType) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startNodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === nodeType;
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    static _convertHexColorToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static _getParents(nodes) {
        const promises = nodes.map(async (el)=>{
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id);
            const parents = await realNode.getParents();
            return parents.filter((el)=>{
                return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
            });
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
    static _getItemsBim(nodeInfo) {
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
    static async getGeographicElement(ticketId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(ticketId);
        const parents = await realNode.getParents();
        return parents.filter((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
        }).map((el)=>el.info);
    }
    static async getNodesParents(startNodeId, contextId, nodeType) {
        const nodes = await this._findItemByNodeType(startNodeId, contextId, nodeType);
        const promises = nodes.map((el)=>this.getGeographicElement(el.id));
        return Promise.all(promises).then(async (nodesParentNode)=>{
            const el = nodesParentNode.flat();
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
exports.default = Standard_buttons_service;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktewa":[function(require,module,exports) {
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
    }
};
module.exports = {
    SELECTrelationList,
    isShownParam,
    utilities
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf"}],"9Nkbe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const bimService_1 = require("edfb101c687f070e");
exports.bimObjectManagerService = bimService_1.default;

},{"edfb101c687f070e":"cXqcc"}],"cXqcc":[function(require,module,exports) {
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

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-note-standard-buttons-service.4f884407.js.map
