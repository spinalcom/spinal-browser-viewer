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
})({"7oQhf":[function(require,module,exports) {
var global = arguments[3];
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
exports.deviceProfileUtilities = exports.attributesUtilities = exports.networkTreeService = exports.linkNetworkTreeService = exports.linkBmsDeviceService = exports.generateNetworkTreeService = exports.DeviceProfileUtilities = exports.AttributesUtilities = exports.NetworkTreeService = exports.LinkNetworkTreeService = exports.LinkBmsDeviceService = exports.GenerateNetworkTreeService = exports.CONSTANTS = void 0;
const GenerateNetworkTreeService_1 = require("fa28b9e5df9a0c18");
Object.defineProperty(exports, "GenerateNetworkTreeService", {
    enumerable: true,
    get: function() {
        return GenerateNetworkTreeService_1.GenerateNetworkTreeService;
    }
});
const LinkBmsDevicesService_1 = require("ea0f0c05699b989e");
Object.defineProperty(exports, "LinkBmsDeviceService", {
    enumerable: true,
    get: function() {
        return LinkBmsDevicesService_1.LinkBmsDeviceService;
    }
});
const LinkNetworkTreeService_1 = require("3a896189045a1efa");
Object.defineProperty(exports, "LinkNetworkTreeService", {
    enumerable: true,
    get: function() {
        return LinkNetworkTreeService_1.LinkNetworkTreeService;
    }
});
const NetworkTreeService_1 = require("1c77644bcc8dc207");
Object.defineProperty(exports, "NetworkTreeService", {
    enumerable: true,
    get: function() {
        return NetworkTreeService_1.NetworkTreeService;
    }
});
const DeviceProfileUtilities_1 = require("975479bc47b13cf4");
Object.defineProperty(exports, "DeviceProfileUtilities", {
    enumerable: true,
    get: function() {
        return DeviceProfileUtilities_1.DeviceProfileUtilities;
    }
});
const AttributesUtilities_1 = require("a9b43c78180da061");
Object.defineProperty(exports, "AttributesUtilities", {
    enumerable: true,
    get: function() {
        return AttributesUtilities_1.AttributesUtilities;
    }
});
const constants_1 = require("197ac7e11392ae4");
const CONSTANTS = {
    CONTEXT_TYPE: constants_1.CONTEXT_TYPE,
    NETWORK_TYPE: constants_1.NETWORK_TYPE,
    NETWORK_RELATION: constants_1.NETWORK_RELATION,
    PLC_ATTR: constants_1.PLC_ATTR,
    OBJECT_ATTR: constants_1.OBJECT_ATTR,
    ATTRIBUTE_CATEGORY: constants_1.ATTRIBUTE_CATEGORY,
    NETWORK_BIMOJECT_RELATION: constants_1.NETWORK_BIMOJECT_RELATION,
    AUTOMATES_TO_PROFILE_RELATION: constants_1.AUTOMATES_TO_PROFILE_RELATION,
    OBJECT_TO_BACNET_ITEM_RELATION: constants_1.OBJECT_TO_BACNET_ITEM_RELATION
};
exports.CONSTANTS = CONSTANTS;
const gRoot = typeof window === "undefined" ? global : window;
if (typeof gRoot.spinal === "undefined") gRoot.spinal = {};
if (typeof gRoot.spinal.DeviceProfileUtilities === "undefined") gRoot.spinal.DeviceProfileUtilities = DeviceProfileUtilities_1.DeviceProfileUtilities;
const generateNetworkTreeService = GenerateNetworkTreeService_1.GenerateNetworkTreeService;
exports.generateNetworkTreeService = generateNetworkTreeService;
const linkBmsDeviceService = LinkBmsDevicesService_1.LinkBmsDeviceService;
exports.linkBmsDeviceService = linkBmsDeviceService;
const linkNetworkTreeService = LinkNetworkTreeService_1.LinkNetworkTreeService;
exports.linkNetworkTreeService = linkNetworkTreeService;
const networkTreeService = NetworkTreeService_1.NetworkTreeService;
exports.networkTreeService = networkTreeService;
const deviceProfileUtilities = DeviceProfileUtilities_1.DeviceProfileUtilities;
exports.deviceProfileUtilities = deviceProfileUtilities;
const attributesUtilities = AttributesUtilities_1.AttributesUtilities;
exports.attributesUtilities = attributesUtilities;

},{"fa28b9e5df9a0c18":"kHh1O","ea0f0c05699b989e":"erzpr","3a896189045a1efa":"4BuVy","1c77644bcc8dc207":"jI5wX","975479bc47b13cf4":"9EqZV","a9b43c78180da061":"52eeK","197ac7e11392ae4":"kDmsf"}],"kHh1O":[function(require,module,exports) {
var global = arguments[3];
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
 */ var __awaiter = this && this.__awaiter || function(thisArg1, _arguments1, P1, generator1) {
    function adopt1(value1) {
        return value1 instanceof P1 ? value1 : new P1(function(resolve1) {
            resolve1(value1);
        });
    }
    return new (P1 || (P1 = Promise))(function(resolve1, reject1) {
        function fulfilled1(value1) {
            try {
                step1(generator1.next(value1));
            } catch (e1) {
                reject1(e1);
            }
        }
        function rejected1(value1) {
            try {
                step1(generator1["throw"](value1));
            } catch (e1) {
                reject1(e1);
            }
        }
        function step1(result1) {
            result1.done ? resolve1(result1.value) : adopt1(result1.value).then(fulfilled1, rejected1);
        }
        step1((generator1 = generator1.apply(thisArg1, _arguments1 || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenerateNetworkTreeService = void 0;
require("998a9a527e3a3a03");
const _ = require("d395852016fa9bec");
const spinal_env_viewer_graph_service_1 = require("d2533641d61469d5");
const spinal_env_viewer_plugin_documentation_service_1 = require("7e319928e06229a4");
// import { NetworkTreeService } from "./NetworkTreeService";
const spinal_core_connectorjs_type_1 = require("c46beda6a3dc06a6");
const constants_1 = require("18a4b4f90a1f964c");
const AttributesUtilities_1 = require("97382a52dd6d2e3a");
// const spinalForgeViewer = new SpinalForgeViewer();
const g_win = typeof window === "undefined" ? global : window;
const bimObjectService = g_win.spinal.BimObjectService;
class GenerateNetworkTreeService {
    static getElementProperties(items1, attributeName1, namingConventionConfig1) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!Array.isArray(items1)) items1 = [
                items1
            ];
            const promises1 = items1.map(({ model: model1, selection: selection1 })=>{
                return this._getItemPropertiesFormatted(model1, selection1, attributeName1, namingConventionConfig1);
            });
            return Promise.all(promises1).then((result1)=>{
                const resultFlatted1 = _.flattenDeep(result1);
                const res1 = {
                    validItems: [],
                    invalidItems: []
                };
                for (const el1 of resultFlatted1)if (el1.property) res1.validItems.push(el1);
                else res1.invalidItems.push(el1);
                return res1;
            });
        });
    }
    static createTree(automates1, equipments1, attrConfig1) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._getTreeArray(automates1, equipments1, attrConfig1).then(({ tree: tree1, valids: valids1, invalids: invalids1 })=>__awaiter(this, void 0, void 0, function*() {
                    const treeL1 = yield this._TransformArrayToTree(tree1);
                    return {
                        tree: treeL1,
                        invalids: invalids1,
                        valids: valids1
                    };
                }));
        });
    }
    static createTreeNodes(contextId1, nodeId1, tree1, dontCreateEmptyAutomate1 = true) {
        if (dontCreateEmptyAutomate1) tree1 = tree1.filter((el1)=>el1.children.length > 0);
        const promises1 = tree1.map((el1)=>this._createNodes(contextId1, el1, nodeId1));
        return Promise.all(promises1).then((result1)=>{
            return _.flattenDeep(result1);
        });
    }
    static classifyDbIdsByModel(items1) {
        const res1 = [];
        for (const { dbId: dbId1, model: model1 } of items1){
            const found1 = res1.find((el1)=>el1.model.id === model1.id);
            if (found1) found1.ids.push(dbId1);
            else res1.push({
                model: model1,
                ids: [
                    dbId1
                ]
            });
        }
        return res1;
    }
    static _createNodes(contextId1, node1, parentNodeId1) {
        return __awaiter(this, void 0, void 0, function*() {
            let id1;
            let relationName1;
            if (node1.dbId) {
                id1 = yield this._createBimObjectNode(node1);
                relationName1 = constants_1.NETWORK_BIMOJECT_RELATION;
            } else {
                id1 = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                    name: node1.name,
                    type: constants_1.NETWORK_TYPE,
                    color: node1.color,
                    isAutomate: node1.isAutomate
                }, new spinal_core_connectorjs_type_1.Model());
                relationName1 = constants_1.NETWORK_RELATION;
            }
            return this._addSpinalAttribute(id1, node1.namingConvention).then(()=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentNodeId1, id1, contextId1, relationName1, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                    } catch (error1) {}
                    if (node1.children && node1.children.length > 0) {
                        const promises1 = node1.children.map((el1)=>this._createNodes(contextId1, el1, id1));
                        return Promise.all(promises1).then((result1)=>{
                            return _.flattenDeep(result1);
                        });
                    }
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id1);
                }));
        });
    }
    ////////////////////////////////////////////////////////////////////////////////
    ////                                PRIVATES                                  //
    ////////////////////////////////////////////////////////////////////////////////
    static _getItemPropertiesFormatted(model1, dbIds1, attributeName1, namingConventionConfig1) {
        const promises1 = dbIds1.map((dbid1)=>__awaiter(this, void 0, void 0, function*() {
                const obj1 = {
                    model: model1,
                    dbId: dbid1
                };
                obj1["property"] = yield AttributesUtilities_1.AttributesUtilities.findAttribute(model1, dbid1, attributeName1);
                if (namingConventionConfig1) {
                    const namingCProperty1 = yield AttributesUtilities_1.AttributesUtilities.findAttribute(model1, dbid1, namingConventionConfig1.attributeName);
                    obj1["namingConvention"] = yield this._getNamingConvention(namingCProperty1, namingConventionConfig1);
                }
                return obj1;
            }));
        return Promise.all(promises1);
    }
    static _getTreeArray(items1, equipments1, attrConfig1) {
        return __awaiter(this, void 0, void 0, function*() {
            const tree1 = yield this._formatAutomateAttribute(items1);
            const invalids1 = [];
            const valids1 = [];
            const subList1 = _.chunk(equipments1, 100);
            const promises1 = subList1.map((el1)=>{
                return this._formatEquipmentAttribute(tree1, el1, attrConfig1);
            });
            return Promise.all(promises1).then((result1)=>{
                const resultFlatted1 = _.flattenDeep(result1);
                for (const item1 of resultFlatted1)if (item1.parentId !== "noParent") {
                    tree1.push(item1);
                    valids1.push(item1);
                } else invalids1.push(item1);
                return {
                    tree: tree1,
                    valids: valids1,
                    invalids: invalids1
                };
            });
        });
    }
    static _formatAutomateAttribute(items1) {
        const promises1 = items1.map((el1)=>{
            return this._getBimObjectName(el1).then((result1)=>{
                el1.id = result1.dbId;
                el1.name = result1.name;
                el1.property = el1.property.displayValue;
                el1.isAutomate = true;
                el1.color = this._generateRandomColor();
                return el1;
            });
        });
        return Promise.all(promises1);
    }
    static _formatEquipmentAttribute(tree1, equipments1, attrConfig1) {
        const promises1 = [];
        for (const element1 of equipments1)promises1.push(this._formatItem(tree1, element1, attrConfig1));
        return Promise.all(promises1);
    }
    static _formatItem(tree1, element1, attrConfig1) {
        return __awaiter(this, void 0, void 0, function*() {
            const obj1 = {
                model: element1.model,
                namingConvention: element1.namingConvention,
                dbId: element1.dbId,
                externalId: element1.externalId,
                id: element1.dbId,
                children: [],
                parentId: "noParent"
            };
            let parent1 = this.getElementAut(tree1, element1, attrConfig1);
            if (parent1 && parent1.dbId !== obj1.dbId) // console.log("parent found", parent.name);
            obj1.parentId = parent1.id;
            return obj1;
        });
    }
    static _createBimObjectNode({ dbId: dbId1, model: model1, color: color1, isAutomate: isAutomate1 }) {
        return __awaiter(this, void 0, void 0, function*() {
            const element1 = yield this._getBimObjectName({
                dbId: dbId1,
                model: model1
            });
            // const element = elements[0];
            return bimObjectService.createBIMObject(element1.dbId, element1.name, model1).then((node1)=>{
                // const nodeId = node instanceof SpinalNode ? node.getId().get() : node.id.get();
                const realNode1 = node1 instanceof spinal_env_viewer_graph_service_1.SpinalNode ? node1 : spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(node1.id.get());
                if (realNode1.info.color) realNode1.info.color.set(color1);
                else realNode1.info.add_attr({
                    color: color1
                });
                if (realNode1.info.isAutomate) realNode1.info.isAutomate.set(isAutomate1);
                else realNode1.info.add_attr({
                    isAutomate: isAutomate1
                });
                return realNode1.getId().get();
            });
        });
    }
    static _getBimObjectName({ dbId: dbId1, model: model1 }) {
        return new Promise((resolve1)=>{
            model1.getBulkProperties([
                dbId1
            ], {
                propFilter: [
                    "name"
                ]
            }, (el1)=>{
                resolve1(el1[0]);
            });
        });
    }
    static _TransformArrayToTree(items1) {
        const rootItems1 = [];
        const lookup1 = {};
        for (const item1 of items1){
            const itemId1 = item1["id"];
            const parentId1 = item1["parentId"];
            if (!lookup1[itemId1]) lookup1[itemId1] = {
                ["children"]: []
            };
            lookup1[itemId1] = Object.assign({}, item1, {
                ["children"]: lookup1[itemId1]["children"]
            });
            const TreeItem1 = lookup1[itemId1];
            if (parentId1 === null || parentId1 === undefined || parentId1 === "") rootItems1.push(TreeItem1);
            else {
                if (!lookup1[parentId1]) lookup1[parentId1] = {
                    ["children"]: []
                };
                lookup1[parentId1]["children"].push(TreeItem1);
            }
        }
        return rootItems1;
    }
    static _generateRandomColor() {
        const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor1;
    }
    static getElementAut(tree, item, attrConfig) {
        const elementAttribute = item.property.displayValue;
        if (attrConfig.isRegex) {
            const flags = attrConfig.flags.join("");
            return eval(`tree.find(element => {
            const select = attrConfig.select.replace('${constants_1.OBJECT_ATTR}', elementAttribute).replace('${constants_1.PLC_ATTR}', element.property);
            const text = attrConfig.text.replace('${constants_1.OBJECT_ATTR}', elementAttribute).replace('${constants_1.PLC_ATTR}', element.property);
            const regex = new RegExp(text,flags)
            const res = (select + "").match(regex);
            
            return res ? true : false;
         })`);
        } else return eval(`tree.find(element => {
               return (${attrConfig.callback})(element.property, elementAttribute); 
            })`);
    }
    static _getNamingConvention(property, namingConventionConfig) {
        return __awaiter(this, void 0, void 0, function*() {
            if (property && (property.displayValue + "").length > 0) {
                const value = property.displayValue;
                return namingConventionConfig.useAttrValue ? value : eval(`(${namingConventionConfig.personalized.callback})('${value}')`);
            }
        });
    }
    static _addSpinalAttribute(id1, namingConvention1) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!namingConvention1 || namingConvention1.length === 0) return;
            const realNode1 = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id1);
            if (!realNode1) return;
            return spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addCategoryAttribute(realNode1, constants_1.ATTRIBUTE_CATEGORY).then((attributeCategory1)=>{
                return spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(realNode1, attributeCategory1, "namingConvention", namingConvention1);
            });
        });
    }
}
exports.default = GenerateNetworkTreeService;
exports.GenerateNetworkTreeService = GenerateNetworkTreeService;

},{"998a9a527e3a3a03":"8YZk7","d395852016fa9bec":"3qBDj","d2533641d61469d5":"9n7zp","7e319928e06229a4":"5rYVR","c46beda6a3dc06a6":"fRH70","18a4b4f90a1f964c":"kDmsf","97382a52dd6d2e3a":"52eeK"}],"kDmsf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OBJECT_TO_BACNET_ITEM_RELATION = exports.AUTOMATES_TO_PROFILE_RELATION = exports.NETWORK_BIMOJECT_RELATION = exports.ATTRIBUTE_CATEGORY = exports.OBJECT_ATTR = exports.PLC_ATTR = exports.NETWORK_RELATION = exports.NETWORK_TYPE = exports.CONTEXT_TYPE = void 0;
exports.CONTEXT_TYPE = "networkTreeContext";
exports.NETWORK_TYPE = "network";
exports.NETWORK_RELATION = "hasNetworkTreeGroup";
exports.PLC_ATTR = "PLC";
exports.OBJECT_ATTR = "OBJ";
exports.ATTRIBUTE_CATEGORY = "default";
////////////////////////////////////////////////////////////////////////
////                    RELATIONS                                     //
////////////////////////////////////////////////////////////////////////
exports.NETWORK_BIMOJECT_RELATION = "hasNetworkTreeBimObject";
exports.AUTOMATES_TO_PROFILE_RELATION = "hasBacnetProfile";
exports.OBJECT_TO_BACNET_ITEM_RELATION = "hasBacnetItem";

},{}],"52eeK":[function(require,module,exports) {
var global = arguments[3];
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
exports.AttributesUtilities = void 0;
const spinal_env_viewer_bim_manager_service_1 = require("5106e496f8acc888");
const spinal_env_viewer_plugin_documentation_service_1 = require("44ed809e68743ff1");
const spinal_env_viewer_graph_service_1 = require("bb3f0e6a19cf4a00");
const _ = require("2bd47478176f8f63");
const g_win = typeof window === "undefined" ? global : window;
const bimObjectService = g_win.spinal.BimObjectService;
class AttributesUtilities {
    static getRevitAttributes(items) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield spinal_env_viewer_bim_manager_service_1.bimObjectManagerService.getBimObjectProperties(items);
            return _.flattenDeep(data.map((el)=>{
                return el.properties;
            }));
        });
    }
    static getSpinalAttributes(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            if (typeof realNode === "undefined") throw new Error("realnode not found");
            const categories = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getCategory(realNode);
            const promises = categories.map((category)=>__awaiter(this, void 0, void 0, function*() {
                    const catInfo = category.node.info.get();
                    catInfo.attributes = [];
                    const attributes = yield category.node.getElement();
                    for(let index = 0; index < attributes.length; index++){
                        const element = attributes[index].get();
                        element.categoryName = catInfo.name;
                        catInfo.attributes.push(element);
                    }
                    return catInfo;
                }));
            return Promise.all(promises);
        });
    }
    static findRevitAttribute(model, dbid, attribute) {
        return __awaiter(this, void 0, void 0, function*() {
            const attributes = yield this.getRevitAttributes({
                model,
                selection: [
                    dbid
                ]
            });
            const attributeName = typeof attribute === "string" ? attribute : attribute.attributeName;
            const categoryName = typeof attribute !== "string" ? attribute.categoryName : undefined;
            const properties = attributes[0].properties;
            return properties.find((obj)=>{
                var _a;
                if (categoryName && categoryName.toLowerCase() !== ((_a = obj.displayCategory) === null || _a === void 0 ? void 0 : _a.toLowerCase())) return false;
                return (obj.displayName.toLowerCase() === attributeName.toLowerCase() || obj.attributeName.toLowerCase() === attributeName.toLowerCase()) && obj.displayValue.toLowerCase() && (obj.displayValue + "").length > 0;
            });
        });
    }
    static findSpinalAttribute(model, dbid, attribute, nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (nodeId) return this.findSpinalAttributeById(nodeId, attribute);
            // const attributeName = typeof attribute === "string" ? attribute : attribute.attributeName;
            // const categoryName = typeof attribute !== "string" ? attribute.categoryName : undefined;
            const bimNode = yield bimObjectService.getBIMObject(dbid, model);
            if (typeof bimNode === "undefined") return;
            nodeId = bimNode.id.get();
            return this.findSpinalAttributeById(nodeId, attribute);
        // const attributes = await this.getSpinalAttributes(nodeId);
        // for (const obj of attributes) {
        //    const found = obj.attributes.find(el => {
        //       if (categoryName && categoryName.toLowerCase() !== el.categoryName.toLowerCase()) return false;
        //       return el.label.toLowerCase() === attributeName.toLowerCase()
        //    });
        //    if (found) {
        //       return {
        //          categoryName: obj.name,
        //          categoryId: obj.id,
        //          displayName: found.label,
        //          attributeName: found.label,
        //          displayValue: found.value
        //       };
        //    }
        // }
        });
    }
    static findSpinalAttributeById(nodeId, attribute) {
        return __awaiter(this, void 0, void 0, function*() {
            const bimNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
            if (typeof bimNode === "undefined") return;
            const attributeName = typeof attribute === "string" ? attribute : attribute.attributeName;
            const categoryName = typeof attribute !== "string" ? attribute.categoryName : undefined;
            // const nodeId = bimNode.id.get();
            const attributes = yield this.getSpinalAttributes(nodeId);
            for (const obj of attributes){
                const found = obj.attributes.find((el)=>{
                    if (categoryName && categoryName.toLowerCase() !== el.categoryName.toLowerCase()) return false;
                    return el.label.toLowerCase() === attributeName.toLowerCase();
                });
                if (found) return {
                    categoryName: obj.name,
                    categoryId: obj.id,
                    displayName: found.label,
                    attributeName: found.label,
                    displayValue: found.value
                };
            }
        });
    }
    static findAttribute(model, dbid, attributeName, nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            let attribute = yield this.findSpinalAttribute(model, dbid, attributeName, nodeId);
            if (attribute) return attribute;
            if (model) return this.findRevitAttribute(model, dbid, attributeName);
        });
    }
}
exports.default = AttributesUtilities;
exports.AttributesUtilities = AttributesUtilities;

},{"5106e496f8acc888":"9Nkbe","44ed809e68743ff1":"5rYVR","bb3f0e6a19cf4a00":"9n7zp","2bd47478176f8f63":"3qBDj"}],"erzpr":[function(require,module,exports) {
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
exports.LinkBmsDeviceService = void 0;
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
 */ const LinkNetworkTreeService_1 = require("c49223db7fcf8f6c");
const spinal_env_viewer_graph_service_1 = require("27d5ae572643552a");
const spinal_model_bmsnetwork_1 = require("ffbf1d891d79f107");
const constants_1 = require("1645e6c9fa70261a");
const DeviceProfileUtilities_1 = require("8f40f1e14dfb9099");
const AttributesUtilities_1 = require("99a8c4c7eca4b8db");
class LinkBmsDeviceService {
    static LinkBmsDeviceToBimDevicesUsingAttribute(bmsDeviceOpt, bimDeviceOpt) {
        return __awaiter(this, void 0, void 0, function*() {
            const [bmsDeviceMap, bimDevicesMap] = yield Promise.all([
                this.getBmsEndpointsMap(bmsDeviceOpt.contextId, bmsDeviceOpt.deviceId, bmsDeviceOpt.attribute),
                this.getBimAutomateMap(bimDeviceOpt.nodeId, bimDeviceOpt.model, bimDeviceOpt.attribute)
            ]);
            console.log("bimDevicesMap", bimDevicesMap);
            console.log("bmsDeviceMap", bmsDeviceMap);
            const bimObj = {
                key: "id",
                map: bimDevicesMap
            };
            const bmsObj = {
                key: "id",
                map: bmsDeviceMap
            };
            return this._linkTwoMaps(bimObj, bmsObj, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE).then((result)=>{
                try {
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(bimDeviceOpt.nodeId, bmsDeviceOpt.deviceId, spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                } catch (error) {
                    return false;
                }
            }).catch((err)=>{
                return false;
            });
        });
    }
    static LinkBmsDeviceToBimDevices(bmsContextId, bmsDeviceId, bimDeviceId) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const bimProfilId = yield this.getBacnetProfilLinked(bimDeviceId);
                const bmsProfilId = yield this.getBacnetProfilLinked(bmsDeviceId);
                const profilId = bimProfilId || bmsProfilId;
                if (profilId) {
                    if (bmsProfilId && profilId !== bmsProfilId) {
                        yield this.unLinkProfilToBmsDevice(bmsContextId, bmsDeviceId);
                        yield this.linkProfilToBmsDevice(bmsContextId, bmsDeviceId, profilId);
                    }
                    const [bmsDevicesMap, bimDevicesMap] = yield Promise.all([
                        this.getBmsEndpointsMap(bmsContextId, bmsDeviceId),
                        LinkNetworkTreeService_1.LinkNetworkTreeService._getAutomateItemsMap(bimDeviceId)
                    ]);
                    console.log("bmsDevicesMap", bmsDevicesMap);
                    console.log("bimDevicesMap", bimDevicesMap);
                    const bimObj = {
                        key: "parentId",
                        map: bimDevicesMap
                    };
                    const bmsObj = {
                        key: "id",
                        map: bmsDevicesMap
                    };
                    return this._linkTwoMaps(bimObj, bmsObj, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                            // await SpinalGraphService.addChild(bmsDeviceId, profilId, AUTOMATES_TO_PROFILE_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
                            try {
                                yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(bimDeviceId, bmsDeviceId, spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                            } catch (error) {}
                        }));
                } else throw new Error("Node profil linked to bim object and bms object");
            } catch (error) {
                throw error;
            }
        });
    }
    static unLinkBmsDeviceToBimDevices(bmsContextId, bmsDeviceId, bimDeviceId, argProfilId, bimDeviceMap) {
        return __awaiter(this, void 0, void 0, function*() {
            const profilId = argProfilId || (yield this.getBacnetProfilLinked(bimDeviceId));
            if (profilId) {
                const bmsDeviceMapProm = this.getBmsEndpointsMap(bmsContextId, bmsDeviceId);
                const bimDeviceMapProm = bimDeviceMap ? Promise.resolve(bimDeviceMap) : LinkNetworkTreeService_1.LinkNetworkTreeService._getAutomateItemsMap(bimDeviceId);
                const [bmsDevicesMap, bimDevicesMap] = yield Promise.all([
                    bmsDeviceMapProm,
                    bimDeviceMapProm
                ]);
                console.log("unLinkBmsDeviceToBimDevices", bmsDevicesMap, bimDevicesMap);
                this._unLinkTwoMaps(bimDevicesMap, bmsDevicesMap, spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                        // await SpinalGraphService.removeChild(bmsDeviceId, profilId, AUTOMATES_TO_PROFILE_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
                        try {
                            yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(bimDeviceId, bmsDeviceId, spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                        } catch (error) {}
                    })).catch((err)=>{});
            }
        });
    }
    static linkProfilToBmsDevice(bmsContextId, bmsDeviceId, profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const bimDeviceId = yield this.bmsDevicehasBimDevice(bmsDeviceId);
            // if (bimDeviceId) {
            //    await this.unLinkBmsDeviceToBimDevices(bmsContextId, bmsDeviceId, bimDeviceId);
            // } else {
            yield this.unLinkProfilToBmsDevice(bmsContextId, bmsDeviceId);
            // }
            const endpointMapPromise = this.getBmsEndpointsMap(bmsContextId, bmsDeviceId);
            const profilMapPromise = DeviceProfileUtilities_1.default.getBacnetValuesMap(profilId);
            const [bmsDevicesMap, profilDeviceMap] = yield Promise.all([
                endpointMapPromise,
                profilMapPromise
            ]);
            // // const bmsDevicesMap: any = res[0];
            // // const profilDeviceMap: any = res[1];
            // const promises = Array.from(bmsDevicesMap.keys()).map(async key => {
            //    const bmsElement = bmsDevicesMap.get(key);
            //    const profilElement = profilDeviceMap.get(key);
            //    if (bmsElement && profilElement) {
            //       // console.log("inside if", bmsElement.name, profilElement.name);
            //       try {
            //          return SpinalGraphService.addChild(bmsElement.id, profilElement.id, OBJECT_TO_BACNET_ITEM_RELATION, SPINAL_RELATION_PTR_LST_TYPE)
            //       } catch (error) { }
            //    }
            //    return;
            // })
            const bmsObj = {
                key: "id",
                map: bmsDevicesMap
            };
            const profilObj = {
                key: "id",
                map: profilDeviceMap
            };
            return this._linkTwoMaps(bmsObj, profilObj, constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE).then((result)=>{
                try {
                    return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(bmsDeviceId, profilId, constants_1.AUTOMATES_TO_PROFILE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                } catch (error) {
                    return false;
                }
            }).catch((err)=>{
                return false;
            });
        });
    }
    static unLinkProfilToBmsDevice(bmsContextId, bmsDeviceId) {
        return __awaiter(this, void 0, void 0, function*() {
            // const relations = SpinalGraphService.getRelationNames(bmsDeviceId);
            const bmsRealNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bmsDeviceId);
            if (bmsRealNode.hasRelation(constants_1.AUTOMATES_TO_PROFILE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE)) return spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(bmsDeviceId, bmsContextId, (node)=>{
                if (node.hasRelation(constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE)) return node.removeRelation(constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                return false;
            }).then(()=>__awaiter(this, void 0, void 0, function*() {
                    // if (node) {
                    yield bmsRealNode.removeRelation(constants_1.AUTOMATES_TO_PROFILE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                    return true;
                // }
                // return false;
                }));
            return false;
        });
    }
    static getBmsEndpointsMap(bmsContextId, bmsDeviceId, attribute) {
        const bmsDeviceMap = new Map();
        const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bmsContextId);
        const device = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bmsDeviceId);
        if (!context || !device) return Promise.resolve(bmsDeviceMap);
        return device.findInContextAsyncPredicate(context, (node)=>__awaiter(this, void 0, void 0, function*() {
                if (node.getType().get() === spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName) {
                    //@ts-ignore
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    let key;
                    if (!attribute) // bmsDeviceMap.set(`${node.info.typeId.get()}_${node.info.idNetwork.get()}`, node.info.get());
                    key = `${node.info.typeId.get()}_${node.info.idNetwork.get()}`;
                    else {
                        const attr = yield AttributesUtilities_1.default.findSpinalAttributeById(node.getId().get(), attribute);
                        key = attr === null || attr === void 0 ? void 0 : attr.displayValue;
                    }
                    if (key) {
                        let value = bmsDeviceMap.get(key) || [];
                        value.push(node.info.get());
                        bmsDeviceMap.set(key, value);
                    }
                    return true;
                }
                return false;
            })).then(()=>{
            return bmsDeviceMap;
        });
    }
    static getBimAutomateMap(automateId, model, attribute) {
        return __awaiter(this, void 0, void 0, function*() {
            const automates = yield LinkNetworkTreeService_1.LinkNetworkTreeService._getAutomateItems(automateId);
            const map = new Map();
            yield automates.reduce((prom, item)=>__awaiter(this, void 0, void 0, function*() {
                    const liste = yield prom;
                    const attr = yield AttributesUtilities_1.default.findAttribute(model, item.dbid, attribute, item.id);
                    if (attr) {
                        const value = map.get(attr.displayValue) || [];
                        value.push(item);
                        map.set(attr.displayValue, value);
                    }
                    return liste;
                }), Promise.resolve([]));
            return map;
        });
    }
    static bmsDevicehasBimDevice(bmsDeviceId) {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(bmsDeviceId, [
                spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName
            ]);
            if (children.length > 0) children[0].id ? children[0].id.get() : undefined;
        });
    }
    static getBacnetProfilLinked(nodeId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            constants_1.AUTOMATES_TO_PROFILE_RELATION
        ]).then((children)=>{
            console.log("children", children);
            if (children.length > 0) return children[0].id.get();
        });
    }
    // private static _getAutomateItems(automateId: string): Promise<Map<number, any>> {
    //    const bimDeviceMap = new Map();
    //    return LinkNetworkTreeService.getDeviceAndProfilData(automateId).then((result) => {
    //       const promises = result.valids.map(async ({ automateItem, profileItem }) => {
    //          const attrs = await DeviceProfileUtilities.getMeasures(profileItem.id);
    //          for (const attr of attrs) {
    //             (<any>attr).parentId = automateItem.id;
    //             bimDeviceMap.set(`${attr.typeId}_${(parseInt((<any>attr).IDX) + 1)}`, attr);
    //          }
    //          return;
    //       })
    //       return Promise.all(promises).then(() => {
    //          return bimDeviceMap;
    //       })
    //    })
    // }
    static _linkTwoMaps(map1, map2, relationName, relationType, linkFirstToSecond = true) {
        const first = linkFirstToSecond ? map1 : map2;
        const second = linkFirstToSecond ? map2 : map1;
        const keys = Array.from(first.map.keys());
        const promises = keys.map((key)=>{
            let firstElement = first.map.get(key);
            let secondElement = second.map.get(key);
            if (firstElement && secondElement) {
                if (!Array.isArray(firstElement)) firstElement = [
                    firstElement
                ];
                if (!Array.isArray(secondElement)) secondElement = [
                    secondElement
                ];
                const ids = secondElement.map((el)=>el[second.key]);
                return firstElement.reduce((liste, item)=>__awaiter(this, void 0, void 0, function*() {
                        yield this._createOrRemoveRelation(item[first.key], ids, relationName, relationType, true);
                        return liste;
                    }), Promise.resolve([]));
            // try {
            //    // return Promise.all([
            //    return SpinalGraphService.addChild(firstElement[first.key], secondElement[second.key], relationName, relationType)
            //    // SpinalGraphService.addChild(bmsElement.id, bimElement.nodeId, OBJECT_TO_BACNET_ITEM_RELATION, SPINAL_RELATION_PTR_LST_TYPE)
            //    // ])
            // } catch (error) {
            // }
            }
        });
        return Promise.all(promises);
    }
    static _unLinkTwoMaps(map1, map2, relationName, relationType, linkFirstToSecond = true) {
        const firstMap = linkFirstToSecond ? map1 : map2;
        const secondMap = linkFirstToSecond ? map2 : map1;
        const keys = Array.from(firstMap.keys());
        const promises = keys.map((key)=>{
            let firstElement = firstMap.get(key);
            let secondElement = secondMap.get(key);
            if (firstElement && secondElement) {
                if (!Array.isArray(firstElement)) firstElement = [
                    firstElement
                ];
                if (!Array.isArray(secondElement)) secondElement = [
                    secondElement
                ];
                const ids = secondElement.map((el)=>el.id);
                return firstElement.reduce((liste, item)=>__awaiter(this, void 0, void 0, function*() {
                        yield this._createOrRemoveRelation(item.parentId, ids, relationName, relationType, false);
                        return liste;
                    }), Promise.resolve([]));
            // try {
            //    // return Promise.all([
            //    return SpinalGraphService.addChild(firstElement[first.key], secondElement[second.key], relationName, relationType)
            //    // SpinalGraphService.addChild(bmsElement.id, bimElement.nodeId, OBJECT_TO_BACNET_ITEM_RELATION, SPINAL_RELATION_PTR_LST_TYPE)
            //    // ])
            // } catch (error) {
            // }
            }
        });
        return Promise.all(promises);
    }
    static _createOrRemoveRelation(parentId, childIds, relationName, relationType, create) {
        if (!Array.isArray(childIds)) childIds = [
            childIds
        ];
        const promises = childIds.map((el)=>{
            try {
                if (create) return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, el, relationName, relationType);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parentId, el, relationName, relationType);
            } catch (error) {}
        });
    }
}
exports.default = LinkBmsDeviceService;
exports.LinkBmsDeviceService = LinkBmsDeviceService;

},{"c49223db7fcf8f6c":"4BuVy","27d5ae572643552a":"9n7zp","ffbf1d891d79f107":"gzkbg","1645e6c9fa70261a":"kDmsf","8f40f1e14dfb9099":"9EqZV","99a8c4c7eca4b8db":"52eeK"}],"4BuVy":[function(require,module,exports) {
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
exports.LinkNetworkTreeService = void 0;
const spinal_env_viewer_graph_service_1 = require("b542fcc088720062");
const DeviceProfileUtilities_1 = require("f68a96203cd542fb");
const constants_1 = require("35bf255c75eefea3");
const spinal_env_viewer_plugin_documentation_service_1 = require("d3f3f091a1fd89bb");
const LinkBmsDevicesService_1 = require("495a259ba1a40f6b");
const spinal_model_bmsnetwork_1 = require("f19eaccf070be8b7");
class LinkNetworkTreeService {
    static createMaps(automateBims, profilItems) {
        return __awaiter(this, void 0, void 0, function*() {
            let map = new Map();
            const promises = automateBims.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    return {
                        key: el.id,
                        values: yield this._getFormatedValues(el, profilItems)
                    };
                }));
            const obj = yield Promise.all(promises);
            for (const iterator of obj)map.set(iterator.key, iterator.values);
            return map;
        });
    }
    static linkNodes(resultMaps, deviceProfilId) {
        const promises = [];
        resultMaps.forEach((value, key)=>{
            promises.push(this.linkProfilToDevice(key, deviceProfilId, value.valids));
        });
        return Promise.all(promises);
    }
    static linkProfilToDevice(automateId, deviceProfilId, itemsValids) {
        return __awaiter(this, void 0, void 0, function*() {
            const profilLinked = yield this.getProfilLinked(automateId);
            if (profilLinked) // if(profilLinked === deviceProfilId) return;
            yield this.unLinkDeviceToProfil(automateId, profilLinked);
            return this._createRelationBetweenNodes(automateId, deviceProfilId, itemsValids);
        });
    }
    static linkAutomateItemToProfilItem(automateItemId, profilItemId) {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(automateItemId, [
                constants_1.OBJECT_TO_BACNET_ITEM_RELATION
            ]);
            if (children.length > 0) {
                const itemLinkedId = children[0].id.get();
                if (itemLinkedId === profilItemId) return;
                yield this.unLinkAutomateItemToProfilItem(automateItemId, itemLinkedId);
            }
            try {
                return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(automateItemId, profilItemId, constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            } catch (error) {}
        });
    }
    static getProfilLinked(automateId) {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(automateId, [
                constants_1.AUTOMATES_TO_PROFILE_RELATION
            ]);
            return children.length > 0 ? children[0].id.get() : undefined;
        });
    }
    ////
    // supprimer un profil d'un automate
    static unLinkDeviceToProfil(automateId, argProfilId, removeAlsoBmsDevice = false) {
        return __awaiter(this, void 0, void 0, function*() {
            let profilId = argProfilId;
            if (typeof profilId === "undefined") profilId = yield this.getProfilLinked(automateId);
            if (!profilId) return;
            let deviceMap;
            if (removeAlsoBmsDevice) deviceMap = yield this._getAutomateItemsMap(automateId, profilId);
            const itemsValids = yield this._getAutomateItems(automateId);
            const promises = itemsValids.map((automateItem)=>__awaiter(this, void 0, void 0, function*() {
                    return this.unLinkAutomateItemToProfilItem(automateItem.id);
                }));
            return Promise.all(promises).then(()=>__awaiter(this, void 0, void 0, function*() {
                    yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(automateId, profilId, constants_1.AUTOMATES_TO_PROFILE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                    if (removeAlsoBmsDevice) {
                        const bmsDevicesWithTheSameProfil = yield this.getBmsDeviceWithTheSameProfil(automateId, profilId);
                        const prom = bmsDevicesWithTheSameProfil.map((device)=>__awaiter(this, void 0, void 0, function*() {
                                const contextId = this.getBmsDeviceContextId(device);
                                return LinkBmsDevicesService_1.LinkBmsDeviceService.unLinkBmsDeviceToBimDevices(contextId, device.id.get(), automateId, profilId, deviceMap);
                            }));
                        yield Promise.all(prom);
                    }
                    return true;
                }));
        });
    }
    static unLinkAutomateItemToProfilItem(automateItemId, profilItemId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (typeof profilItemId !== "undefined") return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(automateItemId, profilItemId, constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(automateItemId, [
                constants_1.OBJECT_TO_BACNET_ITEM_RELATION
            ]);
            return Promise.all(children.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(automateItemId, el.id.get(), constants_1.OBJECT_TO_BACNET_ITEM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE)));
        });
    }
    static getDeviceAndProfilData(automateId, argProfilId) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const automateInfo = ((_a = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(automateId)) === null || _a === void 0 ? void 0 : _a.get()) || {};
            const res = {
                valids: [],
                invalidAutomateItems: [],
                invalidProfileItems: [],
                automate: automateInfo
            };
            const profilId = argProfilId || (yield this.getProfilLinked(automateId));
            const automateItems = yield this._getAutomateItems(automateId);
            let profilItems = yield DeviceProfileUtilities_1.DeviceProfileUtilities.getItemsList(profilId);
            // const promises = automateItems.map(el => SpinalGraphService.getChildren(el.id,[this.OBJECT_TO_BACNET_ITEM_RELATION]));
            return this._waitForEach(automateItems, profilItems, res).then((result)=>{
                res.invalidProfileItems = result;
                return res;
            });
        });
    }
    static _getAutomateItemsMap(automateId, profilId) {
        const bimDeviceMap = new Map();
        return this.getDeviceAndProfilData(automateId, profilId).then((result)=>{
            const promises = result.valids.map(({ automateItem, profileItem })=>__awaiter(this, void 0, void 0, function*() {
                    const attrs = yield DeviceProfileUtilities_1.DeviceProfileUtilities.getMeasures(profileItem.id);
                    for (const attr of attrs){
                        attr.parentId = automateItem.id;
                        const key = `${attr.typeId}_${parseInt(attr.IDX) + 1}`;
                        const value = bimDeviceMap.get(key) || [];
                        value.push(attr);
                        bimDeviceMap.set(key, value);
                    }
                    return;
                }));
            return Promise.all(promises).then(()=>{
                return bimDeviceMap;
            });
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    //                              private                                           //
    ////////////////////////////////////////////////////////////////////////////////////
    static _getFormatedValues(automateInfo, virtualAutomates) {
        // const devicesModels = await (SpinalGraphService.getChildren(automateId,[NETWORK_BIMOJECT_RELATION]))
        return Promise.all([
            this._getAutomateItems(automateInfo.id),
            this._formatVirtualAutomates(virtualAutomates)
        ]).then(([devices, profilItemsObj])=>{
            const res = {
                valids: [],
                invalidAutomateItems: [],
                invalidProfileItems: [],
                automate: automateInfo
            };
            // let remainingItems = JSON.parse(JSON.stringify(items))
            for (const device of devices){
                // let index;
                // const found = remainingItems.find((el, i) => {
                //    if (el.namingConvention && el.namingConvention === device.namingConvention) {
                //       index = i;
                //       return true;
                //    }
                //    return false;
                // });
                let found = profilItemsObj[device.namingConvention];
                if (found) {
                    // remainingItems.splice(index, 1);
                    delete profilItemsObj[device.namingConvention];
                    res.valids.push({
                        automateItem: device,
                        profileItem: found
                    });
                } else res.invalidAutomateItems.push(device);
            }
            // res.invalidProfileItems = remainingItems;
            res.invalidProfileItems = Object.keys(profilItemsObj).map((key)=>profilItemsObj[key]);
            return res;
        });
    }
    static _getAutomateItems(automateId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(automateId, [
            constants_1.NETWORK_BIMOJECT_RELATION
        ]).then((bimObjects)=>{
            const promises = bimObjects.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    const temp = el.get();
                    temp.namingConvention = yield this._getNamingConvention(temp.id, constants_1.ATTRIBUTE_CATEGORY);
                    return temp;
                }));
            return Promise.all(promises);
        });
    }
    static _formatVirtualAutomates(profilItems) {
        const object = {};
        const promises = profilItems.map((temp)=>__awaiter(this, void 0, void 0, function*() {
                const namingConvention = yield this._getNamingConvention(temp.id, constants_1.ATTRIBUTE_CATEGORY);
                if (namingConvention) namingConvention.split("/").forEach((namingC)=>{
                    const tempCopy = Object.assign({}, temp);
                    tempCopy.namingConvention = namingC.trim().toLowerCase();
                    object[namingC.trim().toLowerCase()] = tempCopy;
                });
                return;
            // temp.namingConvention = namingConvention;
            // return object[namingConvention] = temp;
            }));
        return Promise.all(promises).then(()=>{
            return object;
        });
    }
    // old version of _formatVirtualAutomates
    static _formatVirtualAutomatesWithOutSplit(profilItems) {
        const object = {};
        const promises = profilItems.map((temp)=>__awaiter(this, void 0, void 0, function*() {
                const namingConvention = yield this._getNamingConvention(temp.id, constants_1.ATTRIBUTE_CATEGORY);
                temp.namingConvention = namingConvention;
                return object[namingConvention] = temp;
            }));
        return Promise.all(promises).then(()=>{
            return object;
        });
    }
    // public static _formatVirtualAutomates(profilItems: Array<INodeRefObj>): Promise<{ [key: string]: INodeRefObj[] }> {
    //    const obj = {};
    //    const promises = profilItems.map(async temp => {
    //       temp.namingConvention = await this._getNamingConvention(temp.id, ATTRIBUTE_CATEGORY);
    //       if(obj[temp.namingConvention]) obj[temp.namingConvention].push(temp);
    //       else obj[temp.namingConvention] = [temp];
    //       return temp;
    //    })
    //    return Promise.all(promises).then((result) => {
    //       return obj;
    //    })
    // }
    static _getNamingConvention(nodeId, categoryName) {
        return __awaiter(this, void 0, void 0, function*() {
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            if (realNode) {
                const attributes = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(realNode, categoryName);
                if (attributes && attributes.length > 0) {
                    const attr = attributes.find((el)=>el.label.get().trim().toLowerCase() === "namingConvention".toLocaleLowerCase());
                    if (attr) {
                        const value = attr.value.get();
                        return value.toString().trim().toLowerCase();
                    }
                }
            }
        });
    }
    static _createRelationBetweenNodes(automateId, deviceProfilId, itemsValids) {
        const promises = itemsValids.map(({ automateItem, profileItem })=>{
            return this.linkAutomateItemToProfilItem(automateItem.id, profileItem.id);
        });
        return Promise.all(promises).then((result)=>{
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(automateId, deviceProfilId, constants_1.AUTOMATES_TO_PROFILE_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    static _waitForEach(automateItems, argProfilItems, res) {
        let profilItems = argProfilItems;
        const promises = automateItems.map((automateItem)=>__awaiter(this, void 0, void 0, function*() {
                const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(automateItem.id, [
                    constants_1.OBJECT_TO_BACNET_ITEM_RELATION
                ]);
                const child = children[0] && children[0].get();
                if (child) {
                    res.valids.push({
                        automateItem,
                        profileItem: child
                    });
                    profilItems = profilItems.filter((el)=>{
                        if (el.id !== child.id) return true;
                        return false;
                    });
                } else res.invalidAutomateItems.push(automateItem);
                return true;
            }));
        return Promise.all(promises).then(()=>{
            return profilItems;
        });
    }
    static getBmsDeviceWithTheSameProfil(bimDeviceId, profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            const bmsDevices = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(bimDeviceId, [
                spinal_model_bmsnetwork_1.SpinalBmsDevice.relationName
            ]);
            console.log("bmsDevices", bmsDevices);
            return bmsDevices.filter((device)=>{
                const ids = spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenIds(device.id.get());
                console.log("ids", ids, profilId);
                return ids.findIndex((id)=>id === profilId) !== -1;
            });
        });
    }
    static getBmsDeviceContextId(nodeRef) {
        const contextIds = nodeRef.contextIds.values();
        return Array.from(contextIds).find((id)=>{
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
            return realNode.getType().get() === "Network";
        });
    }
}
exports.default = LinkNetworkTreeService;
exports.LinkNetworkTreeService = LinkNetworkTreeService;

},{"b542fcc088720062":"9n7zp","f68a96203cd542fb":"9EqZV","35bf255c75eefea3":"kDmsf","d3f3f091a1fd89bb":"5rYVR","495a259ba1a40f6b":"erzpr","f19eaccf070be8b7":"gzkbg"}],"9EqZV":[function(require,module,exports) {
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
exports.DeviceProfileUtilities = void 0;
const spinal_env_viewer_graph_service_1 = require("dba72514572786bf");
const device_profile_constants_1 = require("9b1ce72b9cae0f1b");
const spinal_env_viewer_plugin_documentation_service_1 = require("a47236d49b9e2276");
const constants_1 = require("cfad510cfc9c0eca");
const bacnet = require("28dca8e196fabfb8");
const _ = require("3cb1190d12e3a4ba");
class DeviceProfileUtilities {
    static getDevicesContexts() {
        const result = spinal_env_viewer_graph_service_1.SpinalGraphService.getContextWithType(this.DEVICE_PROFILE_CONTEXT_NAME);
        return result.map((el)=>el.info.get());
    }
    static getDeviceProfiles(contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(contextId, [
            device_profile_constants_1.DEVICE_RELATION_NAME
        ]).then((result)=>{
            return result.map((el)=>el.get());
        }).catch((err)=>{
            return [];
        });
    }
    static getDevices(profilId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(profilId, [
            device_profile_constants_1.PART_RELATION_NAME
        ]).then((result)=>{
            return result.map((el)=>el.get());
        }).catch((err)=>{
            return [];
        });
    }
    static getItemsList(deviceId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(deviceId, [
            this.CONTEXT_TO_ITEM_LIST_RELATION
        ]).then((itemList)=>{
            const promises = itemList.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(el.id.get(), [
                    this.ITEM_LIST_TO_ITEMS_RELATION
                ]));
            return Promise.all(promises).then((items)=>{
                return _.flattenDeep(items).map((el)=>el.get());
            });
        }).catch((err)=>{
            return [];
        });
    }
    static getItemInputs(itemId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(itemId, [
            this.INPUTS_RELATION
        ]).then((children)=>{
            const promises = children.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(el.id.get(), [
                    this.INPUT_RELATION
                ]));
            return Promise.all(promises).then((result)=>{
                const flattedResult = _.flattenDeep(result);
                return flattedResult.map((el)=>el.get());
            });
        });
    }
    static getItemOutputs(itemId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(itemId, [
            this.OUTPUTS_RELATION
        ]).then((children)=>{
            const promises = children.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(el.id.get(), [
                    this.OUTPUT_RELATION
                ]));
            return Promise.all(promises).then((result)=>{
                const flattedResult = _.flattenDeep(result);
                return flattedResult.map((el)=>el.get());
            });
        });
    }
    static getDeviceContextTreeStructure() {
        const contexts = this.getDevicesContexts();
        const promises = contexts.map((el)=>__awaiter(this, void 0, void 0, function*() {
                const profils = yield this.getDeviceProfiles(el.id);
                const profilPromises = profils.map((profil)=>__awaiter(this, void 0, void 0, function*() {
                        const devices = yield this.getDevices(profil.id);
                        const itemsPromises = devices.map((device)=>__awaiter(this, void 0, void 0, function*() {
                                device["itemList"] = yield this.getItemsList(device.id);
                                return device;
                            }));
                        profil["devices"] = yield Promise.all(itemsPromises);
                        return profil;
                    }));
                el["profils"] = yield Promise.all(profilPromises);
                return el;
            }));
        return Promise.all(promises);
    }
    static getItemIO(nodeId) {
        const inputsPromises = this.getItemInputs(nodeId);
        const outputsPromises = this.getItemOutputs(nodeId);
        return Promise.all([
            inputsPromises,
            outputsPromises
        ]).then((result)=>{
            // console.log("[input, output]", result);
            const children = _.flattenDeep(result);
            const promises = children.map((child)=>__awaiter(this, void 0, void 0, function*() {
                    const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(child.id);
                    const attributes = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(realNode, constants_1.ATTRIBUTE_CATEGORY);
                    // console.log("attributes", attributes)
                    const obj = {
                        nodeId: child.id
                    };
                    attributes.forEach((el)=>{
                        obj[el.label.get()] = el.value.get();
                    });
                    return obj;
                }));
            return Promise.all(promises);
        });
    }
    static getMeasures(nodeId) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function*() {
            const supervisions = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
                this.ITEMS_TO_SUPERVISION
            ]);
            const measures = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren((_b = (_a = supervisions[0]) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.get(), [
                this.SUPERVISION_TO_MEASURES
            ]);
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren((_d = (_c = measures[0]) === null || _c === void 0 ? void 0 : _c.id) === null || _d === void 0 ? void 0 : _d.get(), [
                this.MEASURE_TO_ITEMS
            ]);
            const promises = children.map((child)=>__awaiter(this, void 0, void 0, function*() {
                    const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(child.id.get());
                    const attributes = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(realNode, constants_1.ATTRIBUTE_CATEGORY);
                    // console.log("attributes", attributes)
                    const obj = {
                        nodeId: child.id.get(),
                        typeId: this._getBacnetObjectType(child.type.get())
                    };
                    for (const el of attributes)obj[el.label.get()] = el.value.get();
                    // attributes.forEach(el => {
                    // })
                    return obj;
                }));
            return Promise.all(promises).then((res)=>{
                return res;
            // return result.flat();
            });
        });
    }
    static getGlobalBacnetValuesNode(profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(profilId, [
                this.PROFIL_TO_BACNET_VALUES_RELATION
            ]).then((result)=>{
                return result[0];
            });
        });
    }
    static getProfilBacnetValues(profilId, profilContextId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (typeof profilContextId === "undefined" || profilContextId.trim().length === 0) profilContextId = this.getProfilContextId(profilId);
            const bacnetValuesNodeRef = yield this.getGlobalBacnetValuesNode(profilId);
            if (!profilContextId) return;
            const startId = (bacnetValuesNodeRef === null || bacnetValuesNodeRef === void 0 ? void 0 : bacnetValuesNodeRef.id.get()) || profilId;
            const bacnetValues = yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(startId, profilContextId, (node)=>{
                if (this.BACNET_VALUES_TYPES.indexOf(node.getType().get()) !== -1) {
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    return true;
                }
                return false;
            });
            return bacnetValues.map((el)=>{
                const info = el.get();
                info.typeId = this._getBacnetObjectType(el.type.get());
                return info;
            });
        });
    }
    static getBacnetValuesMap(profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.profilsMaps.get(profilId)) return this.profilsMaps.get(profilId);
            const bimDeviceMap = new Map();
            const attrs = yield this.getProfilBacnetValues(profilId);
            for (const attr of attrs)bimDeviceMap.set(`${attr.typeId}_${parseInt(attr.IDX) + 1}`, attr);
            this.profilsMaps.set(profilId, bimDeviceMap);
            return bimDeviceMap;
        });
    }
    static getGlobalSupervisionNode(profilId) {
        return __awaiter(this, void 0, void 0, function*() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(profilId, [
                this.PROFIL_TO_GLOBAL_SUPERVISION_RELATION
            ]).then((result)=>{
                return result[0];
            });
        });
    }
    static getIntervalNodes(profilId, contexId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!contexId) contexId = this.getProfilContextId(profilId);
            const supervisionNode = yield this.getGlobalSupervisionNode(profilId);
            if (!supervisionNode) return;
            return spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(supervisionNode.id.get(), contexId, (node)=>{
                if (node.getType().get() === this.SUPERVISION_INTERVAL_TIME_TYPE) {
                    //@ts-ignore
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    return true;
                }
                return false;
            });
        });
    }
    static _getBacnetObjectType(type) {
        const objectName = ("object_" + type.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`)).toUpperCase();
        return bacnet.enum.ObjectTypes[objectName];
    }
    static getProfilContextId(profilId) {
        let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(profilId);
        if (!realNode) return;
        const contextIds = realNode.getContextIds();
        return contextIds.find((id)=>{
            let info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(id);
            return info && info.type.get() === this.DEVICE_PROFILE_CONTEXT_NAME;
        });
    }
    static getGlobalMeasureNode(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const supervision = yield this.getGlobalSupervisionNode(profileId);
            if (!supervision) return;
            const measures = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(supervision.id.get(), [
                this.GLOBAL_MEASURES_RELATION
            ]);
            return measures[0];
        });
    }
    static getGlobalAlarmNode(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const supervision = yield this.getGlobalSupervisionNode(profileId);
            if (!supervision) return;
            const alarms = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(supervision.id.get(), [
                this.GLOBAL_ALARMS_RELATION
            ]);
            return alarms[0];
        });
    }
    static getGlobalCommandNode(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const supervision = yield this.getGlobalSupervisionNode(profileId);
            if (!supervision) return;
            const commands = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(supervision.id.get(), [
                this.GLOBAL_COMMANDS_RELATION
            ]);
            return commands[0];
        });
    }
    static getMeasuresDetails(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = yield this.getGlobalMeasureNode(profileId);
            if (!node) return {};
            return this._getNodeIntervalDetails(node.id.get());
        });
    }
    static getAlarmsDetails(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = yield this.getGlobalAlarmNode(profileId);
            if (!node) return {};
            return this._getNodeIntervalDetails(node.id.get());
        });
    }
    static getCommandsDetails(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = yield this.getGlobalMeasureNode(profileId);
            if (!node) return {};
            return {};
        });
    }
    static getGlobalSupervisionDetails(profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                measures: yield this.getMeasuresDetails(profileId),
                alarms: yield this.getAlarmsDetails(profileId),
                commands: yield this.getCommandsDetails(profileId)
            };
        });
    }
    ////////////////////////////////////////////////////////
    //                            PRIVATES                //
    ////////////////////////////////////////////////////////
    static _getNodeIntervalDetails(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const intervalsNodes = yield this._getNodeIntervals(nodeId);
            const promises = intervalsNodes.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    return {
                        monitoring: yield this._getSharedAttribute(el),
                        children: yield this._getEndpointsObjectIds(el)
                    };
                }));
            return Promise.all(promises).then((result)=>{
                return result;
            }).catch((err)=>{
                console.error(err);
                return [];
            });
        });
    }
    static _getNodeIntervals(nodeId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, []);
    }
    static _getSharedAttribute(intervalNode) {
        return __awaiter(this, void 0, void 0, function*() {
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(intervalNode.id.get());
            const attrs = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(realNode, "Supervision");
            const obj = {};
            for(let i = 0; i < attrs.length; i++){
                const element = attrs[i];
                obj[element.label.get()] = element.value.get();
            }
            return obj;
        });
    }
    static _getEndpointsObjectIds(intervalNode) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodeId = intervalNode.id.get();
            const profilItems = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
                "hasIntervalTime"
            ]);
            const promises = profilItems.map((profilItem)=>__awaiter(this, void 0, void 0, function*() {
                    return {
                        instance: yield this._getIDX(profilItem.id.get()),
                        type: this._getBacnetObjectType(profilItem.type.get())
                    };
                }));
            return Promise.all(promises).then((result)=>{
                return _.flattenDeep(result);
            });
        });
    }
    static _getIDX(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            const attrs = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getAttributesByCategory(realNode, "default");
            const found = attrs.find((attr)=>attr.label.get() === "IDX");
            if (found) return parseInt(found.value.get()) + 1;
        });
    }
}
exports.default = DeviceProfileUtilities;
exports.DeviceProfileUtilities = DeviceProfileUtilities;
DeviceProfileUtilities.DEVICE_PROFILE_CONTEXT_NAME = "deviceProfileContext";
DeviceProfileUtilities.CONTEXT_TO_ITEM_LIST_RELATION = "hasItemList";
DeviceProfileUtilities.ITEM_LIST_TO_ITEMS_RELATION = "hasItem";
DeviceProfileUtilities.INPUTS_RELATION = "hasInputs";
DeviceProfileUtilities.INPUT_RELATION = "hasInput";
DeviceProfileUtilities.OUTPUTS_RELATION = "hasOutputs";
DeviceProfileUtilities.OUTPUT_RELATION = "hasOutput";
DeviceProfileUtilities.GLOBAL_BACNET_VALUES_TYPE = "bacnetValues";
DeviceProfileUtilities.PROFIL_TO_BACNET_VALUES_RELATION = "hasBacnetValues";
DeviceProfileUtilities.GLOBAL_SUPERVISION_TYPE = "globalDeviceSupervison";
DeviceProfileUtilities.PROFIL_TO_GLOBAL_SUPERVISION_RELATION = "hasGlobalSupervision";
DeviceProfileUtilities.GLOBAL_MEASURES_RELATION = "hasGlobalMeasures";
DeviceProfileUtilities.GLOBAL_ALARMS_RELATION = "hasGlobalAlarms";
DeviceProfileUtilities.GLOBAL_COMMANDS_RELATION = "hasGlobalCommands";
DeviceProfileUtilities.MULTISTATE_VALUE_RELATION = "hasMultiStateValues";
DeviceProfileUtilities.ANALOG_VALUE_RELATION = "hasAnalogValues";
DeviceProfileUtilities.BINARY_VALUE_RELATION = "hasBinaryValues";
DeviceProfileUtilities.ITEMS_TO_SUPERVISION = "hasSupervisionNode";
DeviceProfileUtilities.SUPERVISION_TO_MEASURES = "hasMeasures";
DeviceProfileUtilities.MEASURE_TO_ITEMS = "hasMeasure";
DeviceProfileUtilities.BACNET_VALUES_TYPES = [
    "networkValue",
    "binaryValue",
    "analogValue",
    "multiStateValue"
];
DeviceProfileUtilities.SUPERVISION_INTERVAL_TIME_TYPE = "supervisionIntervalTime";
DeviceProfileUtilities.profilsMaps = new Map();

},{"dba72514572786bf":"9n7zp","9b1ce72b9cae0f1b":"5D6sD","a47236d49b9e2276":"5rYVR","cfad510cfc9c0eca":"kDmsf","28dca8e196fabfb8":"38qYF","3cb1190d12e3a4ba":"3qBDj"}],"5D6sD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PART_RELATION_TYPE = exports.PART_RELATION_NAME = exports.DEVICE_TYPE = exports.DEVICE_PROFILES_TYPE = exports.DEVICE_RELATION_TYPE = exports.DEVICE_RELATION_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("562c788420ef8b52");
exports.DEVICE_RELATION_NAME = "hasDevice";
exports.DEVICE_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_LST_PTR_TYPE;
exports.DEVICE_PROFILES_TYPE = "deviceProfile";
exports.DEVICE_TYPE = "device";
exports.PART_RELATION_NAME = "hasParts";
exports.PART_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_LST_PTR_TYPE;

},{"562c788420ef8b52":"9n7zp"}],"38qYF":[function(require,module,exports) {
module.exports = require("f42d3bd0bf8292fc");
module.exports.enum = require("60a20ca89fbb9148");

},{"f42d3bd0bf8292fc":"bnIrm","60a20ca89fbb9148":"8k57N"}],"bnIrm":[function(require,module,exports) {
// Util Modules
var Buffer = require("1ea6de3d295e0238").Buffer;
var events = require("72bddd649c74fa5a");
var debug = require("5657b248dc6e6f1b")("bacstack");
// Local Modules
var baTransport = require("8631d906bc5a4a2b");
var baServices = require("ac3f94c0ed48c052");
var baAsn1 = require("862721b59a96cb02");
var baAdpu = require("794aac7f9426149");
var baNpdu = require("abdf8e9565562a5");
var baBvlc = require("b995efab8b3346d3");
var baEnum = require("b5d25a2968072845");
/**
 * To be able to communicate to BACNET devices, you have to initialize a new bacstack instance.
 * @class bacstack
 * @param {object=} settings - The options object used for parameterizing the bacstack.
 * @param {number=} [options.port=47808] - BACNET communication port for listening and sending.
 * @param {string=} options.interface - Specific BACNET communication interface if different from primary one.
 * @param {string=} [options.broadcastAddress=255.255.255.255] - The address used for broadcast messages.
 * @param {number=} [options.adpuTimeout=3000] - The timeout in milliseconds until a transaction should be interpreted as error.
 * @example
 * var bacnet = require('bacstack');
 *
 * var client = new bacnet({
 *   port: 47809,                          // Use BAC1 as communication port
 *   interface: '192.168.251.10',          // Listen on a specific interface
 *   broadcastAddress: '192.168.251.255',  // Use the subnet broadcast address
 *   adpuTimeout: 6000                     // Wait twice as long for response
 * });
 */ module.exports = function(options) {
    var self = new events.EventEmitter();
    var DEFAULT_HOP_COUNT = 0xFF;
    var BVLC_HEADER_LENGTH = 4;
    var invokeCounter = 1;
    var invokeStore = {};
    var lastSequenceNumber = 0;
    var segmentStore = [];
    options = options || {};
    var settings = {
        port: options.port || 47808,
        interface: options.interface,
        transport: options.transport,
        broadcastAddress: options.broadcastAddress || "255.255.255.255",
        adpuTimeout: options.adpuTimeout || 3000
    };
    var transport = settings.transport || new baTransport({
        port: settings.port,
        interface: settings.interface,
        broadcastAddress: settings.broadcastAddress
    });
    // Helper utils
    var getInvokeId = function() {
        var id = invokeCounter++;
        if (id >= 256) invokeCounter = 1;
        return id - 1;
    };
    var invokeCallback = function(id, err, result) {
        var callback = invokeStore[id];
        if (callback) return callback(err, result);
        debug("InvokeId ", id, " not found -> drop package");
    };
    var addCallback = function(id, callback) {
        var timeout = setTimeout(function() {
            delete invokeStore[id];
            callback(new Error("ERR_TIMEOUT"));
        }, settings.adpuTimeout);
        invokeStore[id] = function(err, data) {
            clearTimeout(timeout);
            delete invokeStore[id];
            callback(err, data);
        };
    };
    var getBuffer = function() {
        return {
            buffer: Buffer.alloc(transport.getMaxPayload()),
            offset: BVLC_HEADER_LENGTH
        };
    };
    // Service Handlers
    var processError = function(invokeId, buffer, offset, length) {
        var result = baServices.decodeError(buffer, offset, length);
        if (!result) return debug("Couldn`t decode Error");
        invokeCallback(invokeId, new Error("BacnetError - Class:" + result.class + " - Code:" + result.code));
    };
    var processAbort = function(invokeId, reason) {
        invokeCallback(invokeId, new Error("BacnetAbort - Reason:" + reason));
    };
    var segmentAckResponse = function(receiver, negative, server, originalInvokeId, sequencenumber, actualWindowSize) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, receiver, null, DEFAULT_HOP_COUNT, baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK, 0);
        baAdpu.encodeSegmentAck(buffer, baEnum.PduTypes.PDU_TYPE_SEGMENT_ACK | (negative ? baEnum.PduTypes.NEGATIVE_ACK : 0) | (server ? baEnum.PduTypes.SERVER : 0), originalInvokeId, sequencenumber, actualWindowSize);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, receiver);
    };
    var performDefaultSegmentHandling = function(sender, adr, type, service, invokeId, maxSegments, maxAdpu, sequencenumber, first, moreFollows, buffer, offset, length) {
        if (first) {
            segmentStore = [];
            type &= ~baEnum.PduTypes.SEGMENTED_MESSAGE;
            var adpuHeaderLen = 3;
            if ((type & baEnum.PduTypes.PDU_TYPE_MASK) === baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST) adpuHeaderLen = 4;
            var adpubuffer = getBuffer();
            adpubuffer.offset = 0;
            buffer.copy(adpubuffer.buffer, adpuHeaderLen, offset, offset + length);
            if ((type & baEnum.PduTypes.PDU_TYPE_MASK) === baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST) baAdpu.encodeConfirmedServiceRequest(adpubuffer, type, service, maxSegments, maxAdpu, invokeId, 0, 0);
            else baAdpu.encodeComplexAck(adpubuffer, type, service, invokeId, 0, 0);
            segmentStore.push(adpubuffer.buffer.slice(0, length + adpuHeaderLen));
        } else segmentStore.push(buffer.slice(offset, offset + length));
        if (!moreFollows) {
            var apduBuffer = Buffer.concat(segmentStore);
            segmentStore = [];
            type &= ~baEnum.PduTypes.SEGMENTED_MESSAGE;
            handlePdu(adr, type, apduBuffer, 0, apduBuffer.length);
        }
    };
    var processSegment = function(receiver, type, service, invokeId, maxSegments, maxAdpu, server, sequencenumber, proposedWindowNumber, buffer, offset, length) {
        var first = false;
        if (sequencenumber === 0 && lastSequenceNumber === 0) first = true;
        else {
            if (sequencenumber !== lastSequenceNumber + 1) return segmentAckResponse(receiver, true, server, invokeId, lastSequenceNumber, proposedWindowNumber);
        }
        lastSequenceNumber = sequencenumber;
        var moreFollows = (type & baEnum.PduTypes.MORE_FOLLOWS) === baEnum.PduTypes.MORE_FOLLOWS;
        if (!moreFollows) lastSequenceNumber = 0;
        if (sequencenumber % proposedWindowNumber === 0 || !moreFollows) segmentAckResponse(receiver, false, server, invokeId, sequencenumber, proposedWindowNumber);
        performDefaultSegmentHandling(this, receiver, type, service, invokeId, maxSegments, maxAdpu, sequencenumber, first, moreFollows, buffer, offset, length);
    };
    var processConfirmedServiceRequest = function(address, type, service, maxSegments, maxAdpu, invokeId, buffer, offset, length) {
        var result;
        debug("Handle processConfirmedServiceRequest");
        if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROPERTY) {
            result = baServices.decodeReadProperty(buffer, offset, length);
            if (!result) return debug("Received invalid readProperty message");
            self.emit("readProperty", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_WRITE_PROPERTY) {
            result = baServices.decodeWriteProperty(buffer, offset, length);
            if (!result) return debug("Received invalid writeProperty message");
            self.emit("writeProperty", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROP_MULTIPLE) {
            result = baServices.decodeReadPropertyMultiple(buffer, offset, length);
            if (!result) return debug("Received invalid readPropertyMultiple message");
            self.emit("readPropertyMultiple", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_WRITE_PROP_MULTIPLE) {
            result = baServices.decodeWritePropertyMultiple(buffer, offset, length);
            if (!result) return debug("Received invalid writePropertyMultiple message");
            self.emit("writePropertyMultiple", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_COV_NOTIFICATION) {
            result = baServices.decodeCOVNotify(buffer, offset, length);
            if (!result) return debug("Received invalid covNotify message");
            self.emit("covNotify", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_ATOMIC_WRITE_FILE) {
            result = baServices.decodeAtomicWriteFile(buffer, offset, length);
            if (!result) return debug("Received invalid atomicWriteFile message");
            self.emit("atomicWriteFile", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_ATOMIC_READ_FILE) {
            result = baServices.decodeAtomicReadFile(buffer, offset, length);
            if (!result) return debug("Received invalid atomicReadFile message");
            self.emit("atomicReadFile", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_SUBSCRIBE_COV) {
            result = baServices.decodeSubscribeCOV(buffer, offset, length);
            if (!result) return debug("Received invalid subscribeCOV message");
            self.emit("subscribeCOV", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_SUBSCRIBE_COV_PROPERTY) {
            result = baServices.decodeSubscribeProperty(buffer, offset, length);
            if (!result) return debug("Received invalid subscribeProperty message");
            self.emit("subscribeProperty", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_DEVICE_COMMUNICATION_CONTROL) {
            result = baServices.decodeDeviceCommunicationControl(buffer, offset, length);
            if (!result) return debug("Received invalid deviceCommunicationControl message");
            self.emit("deviceCommunicationControl", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_REINITIALIZE_DEVICE) {
            result = baServices.decodeReinitializeDevice(buffer, offset, length);
            if (!result) return debug("Received invalid reinitializeDevice message");
            self.emit("reinitializeDevice", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_EVENT_NOTIFICATION) {
            result = baServices.decodeEventNotifyData(buffer, offset, length);
            if (!result) return debug("Received invalid eventNotifyData message");
            self.emit("eventNotifyData", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_RANGE) {
            result = baServices.decodeReadRange(buffer, offset, length);
            if (!result) return debug("Received invalid readRange message");
            self.emit("readRange", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_CREATE_OBJECT) {
            result = baServices.decodeCreateObject(buffer, offset, length);
            if (!result) return debug("Received invalid createObject message");
            self.emit("createObject", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else if (service === baEnum.ConfirmedServices.SERVICE_CONFIRMED_DELETE_OBJECT) {
            result = baServices.decodeDeleteObject(buffer, offset, length);
            if (!result) return debug("Received invalid deleteObject message");
            self.emit("deleteObject", {
                address: address,
                invokeId: invokeId,
                request: result
            });
        } else debug("Received unsupported confirmed service request");
    };
    var processUnconfirmedServiceRequest = function(address, type, service, buffer, offset, length) {
        var result;
        debug("Handle processUnconfirmedServiceRequest");
        if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_I_AM) {
            result = baServices.decodeIamBroadcast(buffer, offset);
            if (!result) return debug("Received invalid iAm message");
            /**
       * @event bacstack.iAm
       * @param {object} device - An object representing the detected device.
       * @param {string} device.address - The IP address of the detected device.
       * @param {number} device.deviceId - The BACNET device-id of the detected device.
       * @param {number} device.maxAdpu - The max ADPU size the detected device is supporting.
       * @param {number} device.segmentation - The type of segmentation the detected device is supporting.
       * @param {number} device.vendorId - The BACNET vendor-id of the detected device.
       * @example
       * var bacnet = require('bacstack');
       * var client = new bacnet();
       *
       * client.on('iAm', function(device) {
       *   console.log('address: ', device.address, ' - deviceId: ', device.deviceId, ' - maxAdpu: ', device.maxAdpu, ' - segmentation: ', device.segmentation, ' - vendorId: ', device.vendorId);
       * });
       */ self.emit("iAm", {
                address: address,
                deviceId: result.deviceId,
                maxApdu: result.maxApdu,
                segmentation: result.segmentation,
                vendorId: result.vendorId
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_WHO_IS) {
            result = baServices.decodeWhoIsBroadcast(buffer, offset, length);
            if (!result) return debug("Received invalid WhoIs message");
            self.emit("whoIs", {
                address: address,
                lowLimit: result.lowLimit,
                highLimit: result.highLimit
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_WHO_HAS) {
            result = baServices.decodeWhoHasBroadcast(buffer, offset, length);
            if (!result) return debug("Received invalid WhoHas message");
            self.emit("whoHas", {
                address: address,
                lowLimit: result.lowLimit,
                highLimit: result.highLimit,
                objectId: result.objectId,
                objectName: result.objectName
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_COV_NOTIFICATION) {
            result = baServices.decodeCOVNotify(buffer, offset, length);
            if (!result) return debug("Received invalid covNotifyUnconfirmed message");
            self.emit("covNotifyUnconfirmed", {
                address: address,
                request: result
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_TIME_SYNCHRONIZATION) {
            result = baServices.decodeTimeSync(buffer, offset, length);
            if (!result) return debug("Received invalid TimeSync message");
            self.emit("timeSync", {
                address: address,
                dateTime: result.dateTime
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_UTC_TIME_SYNCHRONIZATION) {
            result = baServices.decodeTimeSync(buffer, offset, length);
            if (!result) return debug("Received invalid TimeSyncUTC message");
            self.emit("timeSyncUTC", {
                address: address,
                dateTime: result.dateTime
            });
        } else if (service === baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_EVENT_NOTIFICATION) {
            result = baServices.decodeEventNotifyData(buffer, offset, length);
            if (!result) return debug("Received invalid EventNotify message");
            self.emit("eventNotify", {
                address: address,
                eventData: result.eventData
            });
        } else debug("Received unsupported unconfirmed service request");
    };
    var handlePdu = function(address, type, buffer, offset, length) {
        var result;
        // Handle different PDU types
        switch(type & baEnum.PduTypes.PDU_TYPE_MASK){
            case baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST:
                result = baAdpu.decodeUnconfirmedServiceRequest(buffer, offset);
                processUnconfirmedServiceRequest(address, result.type, result.service, buffer, offset + result.len, length - result.len);
                break;
            case baEnum.PduTypes.PDU_TYPE_SIMPLE_ACK:
                result = baAdpu.decodeSimpleAck(buffer, offset);
                offset += result.len;
                length -= result.len;
                invokeCallback(result.invokeId, null, {
                    result: result,
                    buffer: buffer,
                    offset: offset + result.len,
                    length: length - result.len
                });
                break;
            case baEnum.PduTypes.PDU_TYPE_COMPLEX_ACK:
                result = baAdpu.decodeComplexAck(buffer, offset);
                if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) === 0) invokeCallback(result.invokeId, null, {
                    result: result,
                    buffer: buffer,
                    offset: offset + result.len,
                    length: length - result.len
                });
                else processSegment(address, result.type, result.service, result.invokeId, baEnum.MaxSegments.MAX_SEG0, baEnum.MaxAdpu.MAX_APDU50, false, result.sequencenumber, result.proposedWindowNumber, buffer, offset + result.len, length - result.len);
                break;
            case baEnum.PduTypes.PDU_TYPE_SEGMENT_ACK:
                result = baAdpu.decodeSegmentAck(buffer, offset);
                break;
            case baEnum.PduTypes.PDU_TYPE_ERROR:
                result = baAdpu.decodeError(buffer, offset);
                processError(result.invokeId, buffer, offset + result.len, length - result.len);
                break;
            case baEnum.PduTypes.PDU_TYPE_REJECT:
            case baEnum.PduTypes.PDU_TYPE_ABORT:
                result = baAdpu.decodeAbort(buffer, offset);
                processAbort(result.invokeId, result.reason);
                break;
            case baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST:
                result = baAdpu.decodeConfirmedServiceRequest(buffer, offset);
                if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) === 0) processConfirmedServiceRequest(address, result.type, result.service, result.maxSegments, result.maxAdpu, result.invokeId, buffer, offset + result.len, length - result.len);
                else processSegment(address, result.type, result.service, result.invokeId, result.maxSegments, result.maxAdpu, true, result.sequencenumber, result.proposedWindowNumber, buffer, offset + result.len, length - result.len);
                break;
            default:
                debug("Received unknown PDU type -> Drop package");
                break;
        }
    };
    var handleNpdu = function(buffer, offset, msgLength, remoteAddress) {
        // Check data length
        if (msgLength <= 0) return debug("No NPDU data -> Drop package");
        // Parse baNpdu header
        var result = baNpdu.decode(buffer, offset);
        if (!result) return debug("Received invalid NPDU header -> Drop package");
        if ((result.funct & baEnum.NpduControls.NETWORK_LAYER_MESSAGE) === baEnum.NpduControls.NETWORK_LAYER_MESSAGE) return debug("Received network layer message -> Drop package");
        offset += result.len;
        msgLength -= result.len;
        if (msgLength <= 0) return debug("No APDU data -> Drop package");
        var apduType = baAdpu.getDecodedType(buffer, offset);
        handlePdu(remoteAddress, apduType, buffer, offset, msgLength);
    };
    var receiveData = self.receiveData = function(buffer, remoteAddress) {
        // Check data length
        if (buffer.length < baBvlc.BVLC_HEADER_LENGTH) return debug("Received invalid data -> Drop package");
        // Parse BVLC header
        var result = baBvlc.decode(buffer, 0);
        if (!result) return debug("Received invalid BVLC header -> Drop package");
        // Check BVLC function
        if (result.func === baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU || result.func === baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU || result.func === baEnum.BvlcFunctions.BVLC_FORWARDED_NPDU) handleNpdu(buffer, result.len, buffer.length - result.len, remoteAddress);
        else debug("Received unknown BVLC function -> Drop package");
    };
    var receiveError = function(err) {
        /**
     * @event bacstack.error
     * @param {error} err - The IP address of the detected device.
     * @example
     * var bacnet = require('bacstack');
     * var client = new bacnet();
     *
     * client.on('error', function(err) {
     *   console.log('Error occurred: ', err);
     *   client.close();
     * });
     */ self.emit("error", err);
    };
    /**
   * The whoIs command discovers all BACNET devices in a network.
   * @function bacstack.whoIs
   * @param {object=} options
   * @param {number=} options.lowLimit - Minimal device instance number to search for.
   * @param {number=} options.highLimit - Maximal device instance number to search for.
   * @param {string=} options.address - Unicast address if command should address a device directly.
   * @fires bacstack.iAm
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.whoIs();
   */ self.whoIs = function(options) {
        options = options || {};
        var settings = {
            lowLimit: options.lowLimit,
            highLimit: options.highLimit,
            address: options.address || transport.getBroadcastAddress()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, settings.address, null, DEFAULT_HOP_COUNT, baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK, 0);
        baAdpu.encodeUnconfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST, baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_WHO_IS);
        baServices.encodeWhoIsBroadcast(buffer, settings.lowLimit, settings.highLimit);
        var npduType = settings.address !== transport.getBroadcastAddress() ? baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU : baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU;
        baBvlc.encode(buffer.buffer, npduType, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, settings.address);
    };
    /**
   * The timeSync command sets the time of a target device.
   * @function bacstack.timeSync
   * @param {string} address - IP address of the target device.
   * @param {date} dateTime - The date and time to set on the target device.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.timeSync('192.168.1.43', new Date());
   */ self.timeSync = function(address, dateTime) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, address);
        baAdpu.encodeUnconfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST, baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_TIME_SYNCHRONIZATION);
        baServices.encodeTimeSync(buffer, dateTime);
        var npduType = address !== transport.getBroadcastAddress() ? baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU : baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU;
        baBvlc.encode(buffer.buffer, npduType, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
    };
    /**
   * The timeSyncUTC command sets the UTC time of a target device.
   * @function bacstack.timeSyncUTC
   * @param {string} address - IP address of the target device.
   * @param {date} dateTime - The date and time to set on the target device.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.timeSyncUTC('192.168.1.43', new Date());
   */ self.timeSyncUTC = function(address, dateTime) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, address);
        baAdpu.encodeUnconfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST, baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_UTC_TIME_SYNCHRONIZATION);
        baServices.encodeTimeSync(buffer, dateTime);
        var npduType = address !== transport.getBroadcastAddress() ? baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU : baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU;
        baBvlc.encode(buffer.buffer, npduType, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
    };
    /**
   * The readProperty command reads a single property of an object from a device.
   * @function bacstack.readProperty
   * @param {string} address - IP address of the target device.
   * @param {object} objectId - The BACNET object ID to read.
   * @param {number} objectId.type - The BACNET object type to read.
   * @param {number} objectId.instance - The BACNET object instance to read.
   * @param {number} propertyId - The BACNET property id in the specified object to read.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {number=} options.arrayIndex - The array index of the property to be read.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.readProperty('192.168.1.43', {type: 8, instance: 44301}, 28, function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.readProperty = function(address, objectId, propertyId, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId(),
            arrayIndex: options.arrayIndex || baAsn1.BACNET_ARRAY_ALL
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address, null, DEFAULT_HOP_COUNT, baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK, 0);
        var type = baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST | (settings.maxSegments !== baEnum.MaxSegments.MAX_SEG0 ? baEnum.PduTypes.SEGMENTED_RESPONSE_ACCEPTED : 0);
        baAdpu.encodeConfirmedServiceRequest(buffer, type, baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROPERTY, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeReadProperty(buffer, objectId.type, objectId.instance, propertyId, settings.arrayIndex);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeReadPropertyAcknowledge(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    /**
   * The writeProperty command writes a single property of an object to a device.
   * @function bacstack.writeProperty
   * @param {string} address - IP address of the target device.
   * @param {object} objectId - The BACNET object ID to write.
   * @param {number} objectId.type - The BACNET object type to write.
   * @param {number} objectId.instance - The BACNET object instance to write.
   * @param {number} propertyId - The BACNET property id in the specified object to write.
   * @param {object[]} values - A list of values to be written to the specified property.
   * @param {ApplicationTags} values.tag - The data-type of the value to be written.
   * @param {number} values.value - The actual value to be written.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {number=} options.arrayIndex - The array index of the property to be read.
   * @param {number=} options.priority - The priority of the value to be written.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.writeProperty('192.168.1.43', {type: 8, instance: 44301}, 28, [
   *   {type: bacnet.enum.ApplicationTags.BACNET_APPLICATION_TAG_REAL, value: 100}
   * ], function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.writeProperty = function(address, objectId, propertyId, values, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId(),
            arrayIndex: options.arrayIndex || baAsn1.BACNET_ARRAY_ALL,
            priority: options.priority
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address, null, DEFAULT_HOP_COUNT, baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK, 0);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_WRITE_PROPERTY, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeWriteProperty(buffer, objectId.type, objectId.instance, propertyId, settings.arrayIndex, settings.priority, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            next(err);
        });
    };
    /**
   * The readPropertyMultiple command reads multiple properties in multiple objects from a device.
   * @function bacstack.readPropertyMultiple
   * @param {string} address - IP address of the target device.
   * @param {object[]} requestArray - List of object and property specifications to be read.
   * @param {object} requestArray.objectId - Specifies which object to read.
   * @param {number} requestArray.objectId.type - The BACNET object type to read.
   * @param {number} requestArray.objectId.instance - The BACNET object instance to read.
   * @param {object[]} requestArray.properties - List of properties to be read.
   * @param {number} requestArray.properties.id - The BACNET property id in the specified object to read. Also supports 8 for all properties.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * var requestArray = [
   *   {objectId: {type: 8, instance: 4194303}, properties: [{id: 8}]}
   * ];
   * client.readPropertyMultiple('192.168.1.43', requestArray, function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.readPropertyMultiple = function(address, propertiesArray, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address, null, DEFAULT_HOP_COUNT, baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK, 0);
        var type = baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST | (baEnum.maxSegments !== baEnum.MaxSegments.MAX_SEG0 ? baEnum.PduTypes.SEGMENTED_RESPONSE_ACCEPTED : 0);
        baAdpu.encodeConfirmedServiceRequest(buffer, type, baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROP_MULTIPLE, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeReadPropertyMultiple(buffer, propertiesArray);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeReadPropertyMultipleAcknowledge(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    /**
   * The writePropertyMultiple command writes multiple properties in multiple objects to a device.
   * @function bacstack.writePropertyMultiple
   * @param {string} address - IP address of the target device.
   * @param {object[]} values - List of object and property specifications to be written.
   * @param {object} values.objectId - Specifies which object to read.
   * @param {number} values.objectId.type - The BACNET object type to read.
   * @param {number} values.objectId.instance - The BACNET object instance to read.
   * @param {object[]} values.values - List of properties to be written.
   * @param {object} values.values.property - Property specifications to be written.
   * @param {number} values.values.property.id - The BACNET property id in the specified object to write.
   * @param {number} values.values.property.index - The array index of the property to be written.
   * @param {object[]} values.values.value - A list of values to be written to the specified property.
   * @param {ApplicationTags} values.values.value.tag - The data-type of the value to be written.
   * @param {object} values.values.value.value - The actual value to be written.
   * @param {number} values.values.priority - The priority to be used for writing to the property.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * var values = [
   *   {objectId: {type: 8, instance: 44301}, values: [
   *     {property: {id: 28, index: 12}, value: [{type: bacnet.enum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN, value: true}], priority: 8}
   *   ]}
   * ];
   * client.writePropertyMultiple('192.168.1.43', values, function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.writePropertyMultiple = function(address, values, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_WRITE_PROP_MULTIPLE, settings.maxSegments, settings.maxAdpu, settings.invokeId);
        baServices.encodeWriteObjectMultiple(buffer, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            next(err);
        });
    };
    /**
   * The deviceCommunicationControl command enables or disables network communication of the target device.
   * @function bacstack.deviceCommunicationControl
   * @param {string} address - IP address of the target device.
   * @param {number} timeDuration - The time to hold the network communication state in seconds. 0 for infinite.
   * @param {EnableDisable} enableDisable - The network communication state to set.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {string=} options.password - The optional password used to set the network communication state.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.deviceCommunicationControl('192.168.1.43', 0, bacnet.enum.EnableDisable.DISABLE, function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.deviceCommunicationControl = function(address, timeDuration, enableDisable, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId(),
            password: options.password
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_DEVICE_COMMUNICATION_CONTROL, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeDeviceCommunicationControl(buffer, timeDuration, enableDisable, settings.password);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            next(err);
        });
    };
    /**
   * The reinitializeDevice command initiates a restart of the target device.
   * @function bacstack.reinitializeDevice
   * @param {string} address - IP address of the target device.
   * @param {ReinitializedStates} state - The type of restart to be initiated.
   * @param {object=} options
   * @param {MaxSegments=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxAdpu=} options.maxAdpu - The maximal allowed ADPU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {string=} options.password - The optional password used to restart the device.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.reinitializeDevice('192.168.1.43', bacnet.enum.ReinitializedStates.BACNET_REINIT_COLDSTART, function(err, value) {
   *   console.log('value: ', value);
   * });
   */ self.reinitializeDevice = function(address, state, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId(),
            password: options.password
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_REINITIALIZE_DEVICE, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeReinitializeDevice(buffer, state, settings.password);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            next(err);
        });
    };
    self.writeFile = function(address, objectId, position, count, fileBuffer, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_ATOMIC_WRITE_FILE, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeAtomicWriteFile(buffer, true, objectId, position, 1, fileBuffer, count);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeAtomicWriteFileAcknowledge(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    self.readFile = function(address, objectId, position, count, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_ATOMIC_READ_FILE, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeAtomicReadFile(buffer, true, objectId, position, count);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeAtomicReadFileAcknowledge(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    self.readRange = function(address, objectId, idxBegin, quantity, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_RANGE, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeReadRange(buffer, objectId, baEnum.PropertyIds.PROP_LOG_BUFFER, baAsn1.BACNET_ARRAY_ALL, baEnum.ReadRangeRequestTypes.RR_BY_POSITION, idxBegin, new Date(), quantity);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeReadRangeAcknowledge(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    self.subscribeCOV = function(address, objectId, subscribeId, cancel, issueConfirmedNotifications, lifetime, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_SUBSCRIBE_COV, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeSubscribeCOV(buffer, subscribeId, objectId, cancel, issueConfirmedNotifications, lifetime);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.subscribeProperty = function(address, objectId, monitoredProperty, subscribeId, cancel, issueConfirmedNotifications, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_SUBSCRIBE_COV_PROPERTY, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeSubscribeProperty(buffer, subscribeId, objectId, cancel, issueConfirmedNotifications, 0, monitoredProperty, false, 0x0f);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.createObject = function(address, objectId, values, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_CREATE_OBJECT, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeCreateObject(buffer, objectId, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.deleteObject = function(address, objectId, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_DELETE_OBJECT, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeDeleteObject(buffer, objectId);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.removeListElement = function(address, objectId, reference, values, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_REMOVE_LIST_ELEMENT, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeAddListElement(buffer, objectId, reference.id, reference.index, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.addListElement = function(address, objectId, reference, values, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_ADD_LIST_ELEMENT, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeAddListElement(buffer, objectId, reference.id, reference.index, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    self.getAlarmSummary = function(address, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_GET_ALARM_SUMMARY, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeAlarmSummary(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    self.getEventInformation = function(address, objectId, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_GET_EVENT_INFORMATION, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            var result = baServices.decodeEventInformation(data.buffer, data.offset, data.length);
            if (!result) return next(new Error("INVALID_DECODING"));
            next(null, result);
        });
    };
    self.acknowledgeAlarm = function(address, objectId, eventState, ackText, evTimeStamp, ackTimeStamp, options, next) {
        next = next || options;
        var settings = {
            maxSegments: options.maxSegments || baEnum.MaxSegments.MAX_SEG65,
            maxAdpu: options.maxAdpu || baEnum.MaxAdpu.MAX_APDU1476,
            invokeId: options.invokeId || getInvokeId()
        };
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE | baEnum.NpduControls.EXPECTING_REPLY, address);
        baAdpu.encodeConfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST, baEnum.ConfirmedServices.SERVICE_CONFIRMED_ACKNOWLEDGE_ALARM, settings.maxSegments, settings.maxAdpu, settings.invokeId, 0, 0);
        baServices.encodeAlarmAcknowledge(buffer, 57, objectId, eventState, ackText, evTimeStamp, ackTimeStamp);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, address);
        addCallback(settings.invokeId, function(err, data) {
            if (err) return next(err);
            next();
        });
    };
    // Public Device Functions
    self.readPropertyResponse = function(receiver, invokeId, objectId, property, value) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, receiver);
        baAdpu.encodeComplexAck(buffer, baEnum.PduTypes.PDU_TYPE_COMPLEX_ACK, baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROPERTY, invokeId);
        baServices.encodeReadPropertyAcknowledge(buffer, objectId, property.id, property.index, value);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, receiver);
    };
    self.readPropertyMultipleResponse = function(receiver, invokeId, values) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, receiver);
        baAdpu.encodeComplexAck(buffer, baEnum.PduTypes.PDU_TYPE_COMPLEX_ACK, baEnum.ConfirmedServices.SERVICE_CONFIRMED_READ_PROP_MULTIPLE, invokeId);
        baServices.encodeReadPropertyMultipleAcknowledge(buffer, values);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, receiver);
    };
    self.iAmResponse = function(deviceId, segmentation, vendorId) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, transport.getBroadcastAddress());
        baAdpu.encodeUnconfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST, baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_I_AM);
        baServices.encodeIamBroadcast(buffer, deviceId, transport.getMaxPayload(), segmentation, vendorId);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, transport.getBroadcastAddress());
    };
    self.iHaveResponse = function(deviceId, objectId, objectName) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, transport.getBroadcastAddress());
        baAdpu.EecodeUnconfirmedServiceRequest(buffer, baEnum.PduTypes.PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST, baEnum.UnconfirmedServices.SERVICE_UNCONFIRMED_I_HAVE);
        baServices.EncodeIhaveBroadcast(buffer, deviceId, objectId, objectName);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, transport.getBroadcastAddress());
    };
    self.simpleAckResponse = function(receiver, service, invokeId) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, receiver);
        baAdpu.encodeSimpleAck(buffer, baEnum.PduTypes.PDU_TYPE_SIMPLE_ACK, service, invokeId);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, receiver);
    };
    self.errorResponse = function(receiver, service, invokeId, errorClass, errorCode) {
        var buffer = getBuffer();
        baNpdu.encode(buffer, baEnum.NpduControls.PRIORITY_NORMAL_MESSAGE, receiver);
        baAdpu.encodeError(buffer, baEnum.PduTypes.PDU_TYPE_ERROR, service, invokeId);
        baServices.encodeError(buffer, errorClass, errorCode);
        baBvlc.encode(buffer.buffer, baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU, buffer.offset);
        transport.send(buffer.buffer, buffer.offset, receiver);
    };
    /**
   * Unloads the current BACstack instance and closes the underlying UDP socket.
   * @function bacstack.close
   * @example
   * var bacnet = require('bacstack');
   * var client = new bacnet();
   *
   * client.close();
   */ self.close = function() {
        transport.close();
    };
    // Setup code
    transport.setMessageHandler(receiveData);
    transport.setErrorHandler(receiveError);
    transport.open();
    return self;
};

},{"1ea6de3d295e0238":"fCgem","72bddd649c74fa5a":"1VQLm","5657b248dc6e6f1b":"2KxDr","8631d906bc5a4a2b":"2h5lE","ac3f94c0ed48c052":"iDbIg","862721b59a96cb02":"dHmoE","794aac7f9426149":"7a50s","abdf8e9565562a5":"1Cgmo","b995efab8b3346d3":"8ZMiB","b5d25a2968072845":"8k57N"}],"2KxDr":[function(require,module,exports) {
var process = require("90238fd336a098e6");
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
     // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
     // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit"); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%") return;
        index++;
        if (match === "%c") // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    var _console;
    // This hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return (typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem("debug", namespaces);
        else exports.storage.removeItem("debug");
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {} // Swallow
    // XXX (@Qix-) should we be logging these?
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("aefa19fca5157efc")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};

},{"90238fd336a098e6":"d5jf4","aefa19fca5157efc":"7tEMR"}],"7tEMR":[function(require,module,exports) {
"use strict";
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("ef4b3eaa26f31a1c");
    Object.keys(env).forEach(function(key) {
        createDebug[key] = env[key];
    });
    /**
  * Active `debug` instances.
  */ createDebug.instances = [];
    /**
  * The currently active debug mode names, and names to skip.
  */ createDebug.names = [];
    createDebug.skips = [];
    /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */ createDebug.formatters = {};
    /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */ function selectColor(namespace) {
        var hash = 0;
        for(var i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */ function createDebug(namespace) {
        var prevTime;
        function debug() {
            // Disabled?
            if (!debug.enabled) return;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            var self = debug; // Set `diff` timestamp
            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") // Anything else let's inspect with %O
            args.unshift("%O");
             // Apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") return match;
                index++;
                var formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    var val = args[index];
                    match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            }); // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") createDebug.init(debug);
        createDebug.instances.push(debug);
        return debug;
    }
    function destroy() {
        var index = createDebug.instances.indexOf(this);
        if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
        }
        return false;
    }
    function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
    }
    /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        var len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
            else createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
        for(i = 0; i < createDebug.instances.length; i++){
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
        }
    }
    /**
  * Disable debug output.
  *
  * @api public
  */ function disable() {
        createDebug.enable("");
    }
    /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */ function enabled(name) {
        if (name[name.length - 1] === "*") return true;
        var i;
        var len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ef4b3eaa26f31a1c":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + "d";
    if (msAbs >= h) return Math.round(ms / h) + "h";
    if (msAbs >= m) return Math.round(ms / m) + "m";
    if (msAbs >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, "day");
    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
    if (msAbs >= s) return plural(ms, msAbs, s, "second");
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}

},{}],"2h5lE":[function(require,module,exports) {
var dgram = require("de6aba23389a4a41");
module.exports = function(settings) {
    var self = this;
    var messageHandler;
    var errorHandler;
    var server = dgram.createSocket({
        type: "udp4",
        reuseAddr: true
    });
    // Events
    server.on("message", function(msg, rinfo) {
        if (messageHandler) messageHandler(msg, rinfo.address);
    });
    server.on("error", function(err) {
        if (errorHandler) errorHandler(err);
    });
    // Public functions
    self.setMessageHandler = function(handler) {
        messageHandler = handler;
    };
    self.setErrorHandler = function(handler) {
        errorHandler = handler;
    };
    self.getBroadcastAddress = function() {
        return settings.broadcastAddress;
    };
    self.getMaxPayload = function() {
        return 1482;
    };
    self.send = function(buffer, offset, receiver) {
        server.send(buffer, 0, offset, settings.port, receiver);
    };
    self.open = function() {
        server.bind(settings.port, settings.interface, function() {
            server.setBroadcast(true);
        });
    };
    self.close = function() {
        server.close();
    };
    return self;
};

},{"de6aba23389a4a41":"jhUEF"}],"iDbIg":[function(require,module,exports) {
var baAsn1 = require("9c771de9dfda2f74");
var baEnum = require("2d5f554d5aa6ad43");
module.exports.encodeIamBroadcast = function(buffer, deviceId, maxApdu, segmentation, vendorId) {
    baAsn1.encodeApplicationObjectId(buffer, baEnum.ObjectTypes.OBJECT_DEVICE, deviceId);
    baAsn1.encodeApplicationUnsigned(buffer, maxApdu);
    baAsn1.encodeApplicationEnumerated(buffer, segmentation);
    baAsn1.encodeApplicationUnsigned(buffer, vendorId);
};
module.exports.decodeIamBroadcast = function(buffer, offset) {
    var result;
    var apduLen = 0;
    var orgOffset = offset;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + apduLen);
    apduLen += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID) return;
    result = baAsn1.decodeObjectId(buffer, offset + apduLen);
    apduLen += result.len;
    if (result.objectType !== baEnum.ObjectTypes.OBJECT_DEVICE) return;
    var deviceId = result.instance;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + apduLen);
    apduLen += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
    result = baAsn1.decodeUnsigned(buffer, offset + apduLen, result.value);
    apduLen += result.len;
    var maxApdu = result.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + apduLen);
    apduLen += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED) return;
    result = baAsn1.decodeEnumerated(buffer, offset + apduLen, result.value);
    apduLen += result.len;
    if (result.value > baEnum.Segmentations.SEGMENTATION_NONE) return;
    var segmentation = result.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + apduLen);
    apduLen += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
    result = baAsn1.decodeUnsigned(buffer, offset + apduLen, result.value);
    apduLen += result.len;
    if (result.value > 0xFFFF) return;
    var vendorId = result.value;
    return {
        len: offset - orgOffset,
        deviceId: deviceId,
        maxApdu: maxApdu,
        segmentation: segmentation,
        vendorId: vendorId
    };
};
module.exports.encodeWhoHasBroadcast = function(buffer, lowLimit, highLimit, objectId, objectName) {
    if (lowLimit >= 0 && lowLimit <= baAsn1.BACNET_MAX_INSTANCE && highLimit >= 0 && highLimit <= baAsn1.BACNET_MAX_INSTANCE) {
        baAsn1.encodeContextUnsigned(buffer, 0, lowLimit);
        baAsn1.encodeContextUnsigned(buffer, 1, highLimit);
    }
    if (objectName && objectName !== "") baAsn1.encodeContextCharacterString(buffer, 3, objectName);
    else baAsn1.encodeContextObjectId(buffer, 2, objectId.type, objectId.instance);
};
module.exports.decodeWhoHasBroadcast = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var decodedValue;
    var result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === 0) {
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        if (decodedValue.value <= baAsn1.BACNET_MAX_INSTANCE) value.lowLimit = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
    }
    if (result.tagNumber === 1) {
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        if (decodedValue.value <= baAsn1.BACNET_MAX_INSTANCE) value.highLimit = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
    }
    if (result.tagNumber === 2) {
        decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
        len += decodedValue.len;
        value.objectId = {
            type: decodedValue.objectType,
            instance: decodedValue.instance
        };
    }
    if (result.tagNumber === 3) {
        decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
        len += decodedValue.len;
        value.objectName = decodedValue.value;
    }
    value.len = len;
    return value;
};
module.exports.encodeWhoIsBroadcast = function(buffer, lowLimit, highLimit) {
    if (lowLimit >= 0 && lowLimit <= baAsn1.BACNET_MAX_INSTANCE && highLimit >= 0 && highLimit <= baAsn1.BACNET_MAX_INSTANCE) {
        baAsn1.encodeContextUnsigned(buffer, 0, lowLimit);
        baAsn1.encodeContextUnsigned(buffer, 1, highLimit);
    }
};
module.exports.decodeWhoIsBroadcast = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    if (apduLen <= 0) return {};
    var result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 0) return;
    if (apduLen <= len) return;
    var decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    if (decodedValue.value <= baAsn1.BACNET_MAX_INSTANCE) value.lowLimit = decodedValue.value;
    if (apduLen <= len) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    if (apduLen <= len) return;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    if (decodedValue.value <= baAsn1.BACNET_MAX_INSTANCE) value.highLimit = decodedValue.value;
    value.len = len;
    return value;
};
module.exports.encodeAtomicReadFile = function(buffer, isStream, objectId, position, count) {
    baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
    if (isStream) {
        baAsn1.encodeOpeningTag(buffer, 0);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationUnsigned(buffer, count);
        baAsn1.encodeClosingTag(buffer, 0);
    } else {
        baAsn1.encodeOpeningTag(buffer, 1);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationUnsigned(buffer, count);
        baAsn1.encodeClosingTag(buffer, 1);
    }
};
module.exports.decodeAtomicReadFile = function(buffer, offset) {
    var len = 0;
    var result;
    var decodedValue;
    var isStream = true;
    var objectId = {};
    var position = -1;
    var count = 0;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID) return;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 0)) {
        isStream = true;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT) return;
        decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        position = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        count = decodedValue.value;
        if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 0)) return;
        len++;
    } else if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 1)) {
        isStream = false;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT) return;
        decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        position = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        count = decodedValue.value;
        if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
        len++;
    } else return;
    return {
        len: len,
        isStream: isStream,
        objectId: objectId,
        position: position,
        count: count
    };
};
module.exports.encodeAtomicReadFileAcknowledge = function(buffer, isStream, endOfFile, position, blockCount, blocks, counts) {
    baAsn1.encodeApplicationBoolean(buffer, endOfFile);
    if (isStream) {
        baAsn1.encodeOpeningTag(buffer, 0);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationOctetString(buffer, blocks[0], 0, counts[0]);
        baAsn1.encodeClosingTag(buffer, 0);
    } else {
        baAsn1.encodeOpeningTag(buffer, 1);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationUnsigned(buffer, blockCount);
        for(var i = 0; i < blockCount; i++)baAsn1.encodeApplicationOctetString(buffer, blocks[i], 0, counts[i]);
        baAsn1.encodeClosingTag(buffer, 1);
    }
};
module.exports.decodeAtomicReadFileAcknowledge = function(buffer, offset) {
    var len = 0;
    var result;
    var decodedValue;
    var endOfFile;
    var isStream;
    var position;
    var targetBuffer;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN) return;
    endOfFile = result.value > 0;
    if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 0)) {
        isStream = true;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT) return;
        decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        position = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING) return;
        targetBuffer = buffer.slice(offset + len, offset + len + result.value);
        len += result.value;
        if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 0)) return;
        len++;
    } else if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 1)) {
        isStream = false;
        throw new Error("NotImplemented");
    } else return;
    return {
        len: len,
        endOfFile: endOfFile,
        isStream: isStream,
        position: position,
        buffer: targetBuffer
    };
};
module.exports.encodeAtomicWriteFile = function(buffer, isStream, objectId, position, blockCount, blocks, counts) {
    baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
    if (isStream) {
        baAsn1.encodeOpeningTag(buffer, 0);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationOctetString(buffer, blocks[0], 0, counts[0]);
        baAsn1.encodeClosingTag(buffer, 0);
    } else {
        baAsn1.encodeOpeningTag(buffer, 1);
        baAsn1.encodeApplicationSigned(buffer, position);
        baAsn1.encodeApplicationUnsigned(buffer, blockCount);
        for(var i = 0; i < blockCount; i++)baAsn1.encodeApplicationOctetString(buffer, blocks[i], 0, counts[i]);
        baAsn1.encodeClosingTag(buffer, 1);
    }
};
module.exports.decodeAtomicWriteFile = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var isStream = true;
    var position = -1;
    var blockCount = 0;
    var blocks = null;
    var counts = null;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.length;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID) return;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    var objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 0)) {
        isStream = true;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.length;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT) return;
        decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        position = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.length;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING) return;
        blockCount = 1;
        // TODO: Implement
        /*
    blocks = new byte[1][];
    blocks[0] = new byte[len_value_type];
    counts = new int[] { len_value_type };*/ len += baAsn1.decodeOctetString(buffer, offset + len, apduLen, blocks[0], 0, result.value);
        if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 0)) return;
        len++;
    } else if (baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 1)) {
        isStream = false;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.length;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT) return;
        decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        position = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.length;
        if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        blockCount = decodedValue.value;
        // TODO: Implement
        /*blocks = new byte[block_count][];
    counts = new int[block_count];*/ for(var i = 0; i < blockCount; i++){
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            /*blocks[i] = new byte[len_value_type];
      counts[i] = len_value_type;*/ if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING) return;
            len += baAsn1.decodeOctetString(buffer, offset + len, apduLen, blocks[i], 0, result.value);
        }
        if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
        len++;
    } else return;
    return {
        len: len,
        isStream: isStream,
        objectId: objectId,
        position: position,
        blockCount: blockCount,
        blocks: blocks,
        counts: counts
    };
};
module.exports.encodeAtomicWriteFileAcknowledge = function(buffer, isStream, position) {
    if (isStream) baAsn1.encodeContextSigned(buffer, 0, position);
    else baAsn1.encodeContextSigned(buffer, 1, position);
};
module.exports.decodeAtomicWriteFileAcknowledge = function(buffer, offset) {
    var len = 0;
    var isStream = false;
    var position = 0;
    var decodedValue;
    var result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === 0) isStream = true;
    else if (result.tagNumber === 1) isStream = false;
    else return;
    decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    position = decodedValue.value;
    return {
        len: len,
        isStream: isStream,
        position: position
    };
};
module.exports.encodeDeviceCommunicationControl = function(buffer, timeDuration, enableDisable, password) {
    if (timeDuration > 0) baAsn1.encodeContextUnsigned(buffer, 0, timeDuration);
    baAsn1.encodeContextEnumerated(buffer, 1, enableDisable);
    if (password && password !== "") baAsn1.encodeContextCharacterString(buffer, 2, password);
};
module.exports.decodeDeviceCommunicationControl = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var decodedValue;
    var result;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 0)) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        value.timeDuration = decodedValue.value;
        len += decodedValue.len;
    }
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    value.enableDisable = decodedValue.value;
    len += decodedValue.len;
    if (len < apduLen) {
        if (!baAsn1.decodeIsContextTag(buffer, offset + len, 2)) return;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
        value.password = decodedValue.value;
        len += decodedValue.len;
    }
    value.len = len;
    return value;
};
module.exports.encodeReinitializeDevice = function(buffer, state, password) {
    baAsn1.encodeContextEnumerated(buffer, 0, state);
    if (password && password !== "") baAsn1.encodeContextCharacterString(buffer, 1, password);
};
module.exports.decodeReinitializeDevice = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var result;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    var decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    value.state = decodedValue.value;
    len += decodedValue.len;
    if (len < apduLen) {
        if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
        value.password = decodedValue.value;
        len += decodedValue.len;
    }
    value.len = len;
    return value;
};
module.exports.encodeReadRange = function(buffer, objectId, propertyId, arrayIndex, requestType, position, time, count) {
    baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
    baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex);
    switch(requestType){
        case baEnum.ReadRangeRequestTypes.RR_BY_POSITION:
            baAsn1.encodeOpeningTag(buffer, 3);
            baAsn1.encodeApplicationUnsigned(buffer, position);
            baAsn1.encodeApplicationSigned(buffer, count);
            baAsn1.encodeClosingTag(buffer, 3);
            break;
        case baEnum.ReadRangeRequestTypes.RR_BY_SEQUENCE:
            baAsn1.encodeOpeningTag(buffer, 6);
            baAsn1.encodeApplicationUnsigned(buffer, position);
            baAsn1.encodeApplicationSigned(buffer, count);
            baAsn1.encodeClosingTag(buffer, 6);
            break;
        case baEnum.ReadRangeRequestTypes.RR_BY_TIME:
            baAsn1.encodeOpeningTag(buffer, 7);
            baAsn1.encodeApplicationDate(buffer, time);
            baAsn1.encodeApplicationTime(buffer, time);
            baAsn1.encodeApplicationSigned(buffer, count);
            baAsn1.encodeClosingTag(buffer, 7);
            break;
        case baEnum.ReadRangeRequestTypes.RR_READ_ALL:
            break;
        default:
            break;
    }
};
module.exports.decodeReadRange = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var requestType = baEnum.ReadRangeRequestTypes.RR_READ_ALL;
    var position;
    var time;
    var count;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len, 0);
    len += decodedValue.len;
    var objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    var property = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    property.id = decodedValue.value;
    if (len < apduLen && baAsn1.decodeIsContextTag(buffer, offset + len, 2)) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        property.index = decodedValue.value;
    } else property.index = baAsn1.BACNET_ARRAY_ALL;
    if (len < apduLen) {
        result = baAsn1.decodeTagNumber(buffer, offset + len);
        len += result.len;
        switch(result.tagNumber){
            case 3:
                requestType = baEnum.ReadRangeRequestTypes.RR_BY_POSITION;
                result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
                len += result.len;
                decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
                len += decodedValue.len;
                position = decodedValue.value;
                result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
                len += result.len;
                decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
                len += decodedValue.len;
                count = decodedValue.value;
                break;
            case 6:
                requestType = baEnum.ReadRangeRequestTypes.RR_BY_SEQUENCE;
                result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
                len += result.len;
                decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
                len += decodedValue.len;
                position = decodedValue.value;
                result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
                len += result.len;
                decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
                len += decodedValue.len;
                count = decodedValue.value;
                break;
            case 7:
                requestType = baEnum.ReadRangeRequestTypes.RR_BY_TIME;
                decodedValue = baAsn1.decodeApplicationDate(buffer, offset + len);
                len += decodedValue.len;
                var tmpDate = decodedValue.value.value;
                decodedValue = baAsn1.decodeApplicationTime(buffer, offset + len);
                len += decodedValue.len;
                var tmpTime = decodedValue.value.value;
                time = new Date(tmpDate.getYear(), tmpDate.getMonth(), tmpDate.getDate(), tmpTime.getHours(), tmpTime.getMinutes(), tmpTime.getSeconds(), tmpTime.getMilliseconds());
                result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
                len += result.len;
                decodedValue = baAsn1.decodeSigned(buffer, offset + len, result.value);
                len += decodedValue.len;
                count = decodedValue.value;
                break;
            default:
                return;
        }
        result = baAsn1.decodeTagNumber(buffer, offset + len);
        len += result.len;
    }
    return {
        len: len,
        objectId: objectId,
        property: property,
        requestType: requestType,
        position: position,
        time: time,
        count: count
    };
};
module.exports.encodeReadProperty = function(buffer, objectType, objectInstance, propertyId, arrayIndex) {
    if (objectType <= baAsn1.BACNET_MAX_OBJECT) baAsn1.encodeContextObjectId(buffer, 0, objectType, objectInstance);
    if (propertyId <= baEnum.PropertyIds.MAX_BACNET_PROPERTY_ID) baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex || baAsn1.BACNET_ARRAY_ALL);
};
module.exports.decodeReadProperty = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    if (apduLen < 7) return;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    var objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    var property = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    property.id = decodedValue.value;
    property.index = baAsn1.BACNET_ARRAY_ALL;
    if (len < apduLen) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber === 2 && len < apduLen) {
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            property.index = decodedValue.value;
        } else return;
    }
    if (len < apduLen) return;
    return {
        len: len,
        objectId: objectId,
        property: property
    };
};
module.exports.encodeReadPropertyAcknowledge = function(buffer, objectId, propertyId, arrayIndex, values) {
    baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
    baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex);
    baAsn1.encodeOpeningTag(buffer, 3);
    values.forEach(function(value) {
        baAsn1.bacappEncodeApplicationData(buffer, value);
    });
    baAsn1.encodeClosingTag(buffer, 3);
};
module.exports.decodeReadPropertyAcknowledge = function(buffer, offset, apduLen) {
    var result;
    var decodedValue;
    var objectId = {};
    var property = {};
    if (!baAsn1.decodeIsContextTag(buffer, offset, 0)) return;
    var len = 1;
    result = baAsn1.decodeObjectId(buffer, offset + len);
    len += result.len;
    objectId.type = result.objectType;
    objectId.instance = result.instance;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    result = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += result.len;
    property.id = result.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    if (result.tagNumber === 2) {
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        property.index = decodedValue.value;
    } else property.index = baAsn1.BACNET_ARRAY_ALL;
    var values = [];
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 3)) return;
    len++;
    while(apduLen - len > 1){
        result = baAsn1.bacappDecodeApplicationData(buffer, offset + len, apduLen + offset, objectId.type, property.id);
        if (!result) return;
        len += result.len;
        delete result.len;
        values.push(result);
    }
    if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 3)) return;
    len++;
    return {
        len: len,
        objectId: objectId,
        property: property,
        values: values
    };
};
module.exports.encodeReadPropertyMultiple = function(buffer, properties) {
    properties.forEach(function(value) {
        baAsn1.encodeReadAccessSpecification(buffer, value);
    });
};
module.exports.decodeReadPropertyMultiple = function(buffer, offset, apduLen) {
    var len = 0;
    var values = [];
    while(apduLen - len > 0){
        var decodedValue = baAsn1.decodeReadAccessSpecification(buffer, offset + len, apduLen - len);
        if (!decodedValue) return;
        len += decodedValue.len;
        values.push(decodedValue.value);
    }
    return {
        len: len,
        properties: values
    };
};
module.exports.encodeReadPropertyMultipleAcknowledge = function(buffer, values) {
    values.forEach(function(value) {
        baAsn1.encodeReadAccessResult(buffer, value);
    });
};
module.exports.decodeReadPropertyMultipleAcknowledge = function(buffer, offset, apduLen) {
    var len = 0;
    var values = [];
    while(apduLen - len > 0){
        var result = baAsn1.decodeReadAccessResult(buffer, offset + len, apduLen - len);
        if (!result) return;
        len += result.len;
        values.push(result.value);
    }
    return {
        len: len,
        values: values
    };
};
module.exports.encodeWriteProperty = function(buffer, objectType, objectInstance, propertyId, arrayIndex, priority, values) {
    baAsn1.encodeContextObjectId(buffer, 0, objectType, objectInstance);
    baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex);
    baAsn1.encodeOpeningTag(buffer, 3);
    values.forEach(function(value) {
        baAsn1.bacappEncodeApplicationData(buffer, value);
    });
    baAsn1.encodeClosingTag(buffer, 3);
    if (priority !== baAsn1.BACNET_NO_PRIORITY) baAsn1.encodeContextUnsigned(buffer, 4, priority);
};
module.exports.decodeWriteProperty = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {
        property: {}
    };
    var decodedValue;
    var result;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    var objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    len += decodedValue.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.property.id = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    if (result.tagNumber === 2) {
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.property.index = decodedValue.value;
    } else value.property.index = baAsn1.BACNET_ARRAY_ALL;
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 3)) return;
    len++;
    var values = [];
    while(apduLen - len > 1 && !baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 3)){
        decodedValue = baAsn1.bacappDecodeApplicationData(buffer, offset + len, apduLen + offset, objectId.type, value.property.id);
        if (!decodedValue) return;
        len += decodedValue.len;
        delete decodedValue.len;
        values.push(decodedValue);
    }
    value.value = values;
    if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 3)) return;
    len++;
    value.priority = baAsn1.BACNET_MAX_PRIORITY;
    if (len < apduLen) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        if (result.tagNumber === 4) {
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue;
            if (decodedValue.value >= baAsn1.BACNET_MIN_PRIORITY && decodedValue.value <= baAsn1.BACNET_MAX_PRIORITY) value.priority = decodedValue.value;
            else return;
        }
    }
    return {
        len: len,
        objectId: objectId,
        value: value
    };
};
var encodeWritePropertyMultiple = module.exports.encodeWritePropertyMultiple = function(buffer, objectId, values) {
    baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
    baAsn1.encodeOpeningTag(buffer, 1);
    values.forEach(function(pValue) {
        baAsn1.encodeContextEnumerated(buffer, 0, pValue.property.id);
        if (pValue.property.index !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 1, pValue.property.index);
        baAsn1.encodeOpeningTag(buffer, 2);
        pValue.value.forEach(function(value) {
            baAsn1.bacappEncodeApplicationData(buffer, value);
        });
        baAsn1.encodeClosingTag(buffer, 2);
        if (pValue.priority !== baAsn1.BACNET_NO_PRIORITY) baAsn1.encodeContextUnsigned(buffer, 3, pValue.priority);
    });
    baAsn1.encodeClosingTag(buffer, 1);
};
module.exports.decodeWritePropertyMultiple = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var objectId;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 0 || apduLen <= len) return;
    apduLen -= len;
    if (apduLen < 4) return;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 1)) return;
    len++;
    var _values = [];
    while(apduLen - len > 1){
        var newEntry = {};
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== 0) return;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        var propertyId = decodedValue.value;
        var arrayIndex = baAsn1.BACNET_ARRAY_ALL;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber === 1) {
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            arrayIndex = decodedValue.value;
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
        }
        newEntry.property = {
            id: propertyId,
            index: arrayIndex
        };
        if (result.tagNumber !== 2 || !baAsn1.decodeIsOpeningTag(buffer, offset + len - 1)) return;
        var values = [];
        while(len + offset <= buffer.length && !baAsn1.decodeIsClosingTag(buffer, offset + len)){
            var value = baAsn1.bacappDecodeApplicationData(buffer, offset + len, apduLen + offset, objectId.type, propertyId);
            if (!value) return;
            len += value.len;
            delete value.len;
            values.push(value);
        }
        len++;
        newEntry.value = values;
        var priority = baAsn1.BACNET_NO_PRIORITY;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber === 3) {
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            priority = decodedValue.value;
        } else len--;
        newEntry.priority = priority;
        _values.push(newEntry);
    }
    if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
    len++;
    return {
        len: len,
        objectId: objectId,
        values: _values
    };
};
module.exports.encodeWriteObjectMultiple = function(buffer, values) {
    values.forEach(function(object) {
        encodeWritePropertyMultiple(buffer, object.objectId, object.values);
    });
};
module.exports.encodeCreateObjectAcknowledge = function(buffer, objectId) {
    baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
};
module.exports.encodeTimeSync = function(buffer, time) {
    baAsn1.encodeApplicationDate(buffer, time);
    baAsn1.encodeApplicationTime(buffer, time);
};
module.exports.decodeTimeSync = function(buffer, offset, length) {
    var len = 0;
    var result;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE) return;
    var date = baAsn1.decodeDate(buffer, offset + len);
    len += date.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME) return;
    var time = baAsn1.decodeBacnetTime(buffer, offset + len);
    len += time.len;
    return {
        len: len,
        value: new Date(date.value.getFullYear(), date.value.getMonth(), date.value.getDate(), time.value.getHours(), time.value.getMinutes(), time.value.getSeconds(), time.value.getMilliseconds())
    };
};
module.exports.encodeError = function(buffer, errorClass, errorCode) {
    baAsn1.encodeApplicationEnumerated(buffer, errorClass);
    baAsn1.encodeApplicationEnumerated(buffer, errorCode);
};
module.exports.decodeError = function(buffer, offset) {
    var orgOffset = offset;
    var result;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset);
    offset += result.len;
    var errorClass = baAsn1.decodeEnumerated(buffer, offset, result.value);
    offset += errorClass.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset);
    offset += result.len;
    var errorCode = baAsn1.decodeEnumerated(buffer, offset, result.value);
    offset += errorClass.len;
    return {
        len: offset - orgOffset,
        class: errorClass.value,
        code: errorCode.value
    };
};
module.exports.encodeSubscribeCOV = function(buffer, subscriberProcessId, monitoredObjectId, cancellationRequest, issueConfirmedNotifications, lifetime) {
    baAsn1.encodeContextUnsigned(buffer, 0, subscriberProcessId);
    baAsn1.encodeContextObjectId(buffer, 1, monitoredObjectId.type, monitoredObjectId.instance);
    if (!cancellationRequest) {
        baAsn1.encodeContextBoolean(buffer, 2, issueConfirmedNotifications);
        baAsn1.encodeContextUnsigned(buffer, 3, lifetime);
    }
};
module.exports.decodeSubscribeCOV = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var result;
    var decodedValue;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.subscriberProcessId = decodedValue.value;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.monitoredObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    value.cancellationRequest = true;
    if (len < apduLen) {
        value.issueConfirmedNotifications = false;
        if (baAsn1.decodeIsContextTag(buffer, offset + len, 2)) {
            value.cancellationRequest = false;
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            value.issueConfirmedNotifications = buffer[offset + len] > 0;
            len++;
        }
        value.lifetime = 0;
        if (baAsn1.decodeIsContextTag(buffer, offset + len, 3)) {
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            value.lifetime = decodedValue.value;
        }
    }
    value.len = len;
    return value;
};
module.exports.encodeSubscribeProperty = function(buffer, subscriberProcessId, monitoredObjectId, cancellationRequest, issueConfirmedNotifications, lifetime, monitoredProperty, covIncrementPresent, covIncrement) {
    baAsn1.encodeContextUnsigned(buffer, 0, subscriberProcessId);
    baAsn1.encodeContextObjectId(buffer, 1, monitoredObjectId.type, monitoredObjectId.instance);
    if (!cancellationRequest) {
        baAsn1.encodeContextBoolean(buffer, 2, issueConfirmedNotifications);
        baAsn1.encodeContextUnsigned(buffer, 3, lifetime);
    }
    baAsn1.encodeOpeningTag(buffer, 4);
    baAsn1.encodeContextEnumerated(buffer, 0, monitoredProperty.id);
    if (monitoredProperty.index !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 1, monitoredProperty.index);
    baAsn1.encodeClosingTag(buffer, 4);
    if (covIncrementPresent) baAsn1.encodeContextReal(buffer, 5, covIncrement);
};
module.exports.decodeSubscribeProperty = function(buffer, offset) {
    var len = 0;
    var value = {};
    var result;
    var decodedValue;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.subscriberProcessId = decodedValue.value;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.monitoredObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    value.cancellationRequest = true;
    value.issueConfirmedNotifications = false;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 2)) {
        value.cancellationRequest = false;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        value.issueConfirmedNotifications = buffer[offset + len] > 0;
        len++;
    }
    value.lifetime = 0;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 3)) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.lifetime = decodedValue.value;
    }
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 4)) return;
    len++;
    value.monitoredProperty = {};
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.monitoredProperty.id = decodedValue.value;
    value.monitoredProperty.index = baAsn1.BACNET_ARRAY_ALL;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 1)) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.monitoredProperty.index = decodedValue.value;
    }
    if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 4)) return;
    len++;
    value.covIncrement = 0;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 5)) {
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeReal(buffer, offset + len);
        len += decodedValue.len;
        value.covIncrement = decodedValue.value;
    }
    value.len = len;
    return value;
};
module.exports.encodeEventNotifyData = function(buffer, data) {
    baAsn1.encodeContextUnsigned(buffer, 0, data.processId);
    baAsn1.encodeContextObjectId(buffer, 1, data.initiatingObjectId.type, data.initiatingObjectId.instance);
    baAsn1.encodeContextObjectId(buffer, 2, data.eventObjectId.type, data.eventObjectId.instance);
    baAsn1.bacappEncodeContextTimestamp(buffer, 3, data.timeStamp);
    baAsn1.encodeContextUnsigned(buffer, 4, data.notificationClass);
    baAsn1.encodeContextUnsigned(buffer, 5, data.priority);
    baAsn1.encodeContextEnumerated(buffer, 6, data.eventType);
    if (data.messageText && data.messageText !== "") baAsn1.encodeContextCharacterString(buffer, 7, data.messageText);
    baAsn1.encodeContextEnumerated(buffer, 8, data.notifyType);
    switch(data.notifyType){
        case baEnum.NotifyTypes.NOTIFY_ALARM:
        case baEnum.NotifyTypes.NOTIFY_EVENT:
            baAsn1.encodeContextBoolean(buffer, 9, data.ackRequired);
            baAsn1.encodeContextEnumerated(buffer, 10, data.fromState);
            break;
        default:
            break;
    }
    baAsn1.encodeContextEnumerated(buffer, 11, data.toState);
    switch(data.notifyType){
        case baEnum.NotifyTypes.NOTIFY_ALARM:
        case baEnum.NotifyTypes.NOTIFY_EVENT:
            baAsn1.encodeOpeningTag(buffer, 12);
            switch(data.eventType){
                case baEnum.EventTypes.EVENT_CHANGE_OF_BITSTRING:
                    baAsn1.encodeOpeningTag(buffer, 0);
                    baAsn1.encodeContextBitstring(buffer, 0, data.changeOfBitstringReferencedBitString);
                    baAsn1.encodeContextBitstring(buffer, 1, data.changeOfBitstringStatusFlags);
                    baAsn1.encodeClosingTag(buffer, 0);
                    break;
                case baEnum.EventTypes.EVENT_CHANGE_OF_STATE:
                    baAsn1.encodeOpeningTag(buffer, 1);
                    baAsn1.encodeOpeningTag(buffer, 0);
                    baAsn1.bacappEncodePropertyState(buffer, data.changeOfStateNewState);
                    baAsn1.encodeClosingTag(buffer, 0);
                    baAsn1.encodeContextBitstring(buffer, 1, data.changeOfStateStatusFlags);
                    baAsn1.encodeClosingTag(buffer, 1);
                    break;
                case baEnum.EventTypes.EVENT_CHANGE_OF_VALUE:
                    baAsn1.encodeOpeningTag(buffer, 2);
                    baAsn1.encodeOpeningTag(buffer, 0);
                    switch(data.changeOfValueTag){
                        case baEnum.COVTypes.CHANGE_OF_VALUE_REAL:
                            baAsn1.encodeContextReal(buffer, 1, data.changeOfValueChangeValue);
                            break;
                        case baEnum.COVTypes.CHANGE_OF_VALUE_BITS:
                            baAsn1.encodeContextBitstring(buffer, 0, data.changeOfValueChangedBits);
                            break;
                        default:
                            throw new Error("NotImplemented");
                    }
                    baAsn1.encodeClosingTag(buffer, 0);
                    baAsn1.encodeContextBitstring(buffer, 1, data.changeOfValueStatusFlags);
                    baAsn1.encodeClosingTag(buffer, 2);
                    break;
                case baEnum.EventTypes.EVENT_FLOATING_LIMIT:
                    baAsn1.encodeOpeningTag(buffer, 4);
                    baAsn1.encodeContextReal(buffer, 0, data.floatingLimitReferenceValue);
                    baAsn1.encodeContextBitstring(buffer, 1, data.floatingLimitStatusFlags);
                    baAsn1.encodeContextReal(buffer, 2, data.floatingLimitSetPointValue);
                    baAsn1.encodeContextReal(buffer, 3, data.floatingLimitErrorLimit);
                    baAsn1.encodeClosingTag(buffer, 4);
                    break;
                case baEnum.EventTypes.EVENT_OUT_OF_RANGE:
                    baAsn1.encodeOpeningTag(buffer, 5);
                    baAsn1.encodeContextReal(buffer, 0, data.outOfRangeExceedingValue);
                    baAsn1.encodeContextBitstring(buffer, 1, data.outOfRangeStatusFlags);
                    baAsn1.encodeContextReal(buffer, 2, data.outOfRangeDeadband);
                    baAsn1.encodeContextReal(buffer, 3, data.outOfRangeExceededLimit);
                    baAsn1.encodeClosingTag(buffer, 5);
                    break;
                case baEnum.EventTypes.EVENT_CHANGE_OF_LIFE_SAFETY:
                    baAsn1.encodeOpeningTag(buffer, 8);
                    baAsn1.encodeContextEnumerated(buffer, 0, data.changeOfLifeSafetyNewState);
                    baAsn1.encodeContextEnumerated(buffer, 1, data.changeOfLifeSafetyNewMode);
                    baAsn1.encodeContextBitstring(buffer, 2, data.changeOfLifeSafetyStatusFlags);
                    baAsn1.encodeContextEnumerated(buffer, 3, data.changeOfLifeSafetyOperationExpected);
                    baAsn1.encodeClosingTag(buffer, 8);
                    break;
                case baEnum.EventTypes.EVENT_BUFFER_READY:
                    baAsn1.encodeOpeningTag(buffer, 10);
                    baAsn1.bacappEncodeContextDeviceObjPropertyRef(buffer, 0, data.bufferReadyBufferProperty);
                    baAsn1.encodeContextUnsigned(buffer, 1, data.bufferReadyPreviousNotification);
                    baAsn1.encodeContextUnsigned(buffer, 2, data.bufferReadyCurrentNotification);
                    baAsn1.encodeClosingTag(buffer, 10);
                    break;
                case baEnum.EventTypes.EVENT_UNSIGNED_RANGE:
                    baAsn1.encodeOpeningTag(buffer, 11);
                    baAsn1.encodeContextUnsigned(buffer, 0, data.unsignedRangeExceedingValue);
                    baAsn1.encodeContextBitstring(buffer, 1, data.unsignedRangeStatusFlags);
                    baAsn1.encodeContextUnsigned(buffer, 2, data.unsignedRangeExceededLimit);
                    baAsn1.encodeClosingTag(buffer, 11);
                    break;
                case baEnum.EventTypes.EVENT_EXTENDED:
                case baEnum.EventTypes.EVENT_COMMAND_FAILURE:
                    throw new Error("NotImplemented");
                default:
                    throw new Error("NotImplemented");
            }
            baAsn1.encodeClosingTag(buffer, 12);
            break;
        case baEnum.NotifyTypes.NOTIFY_ACK_NOTIFICATION:
            throw new Error("NotImplemented");
        default:
            break;
    }
};
module.exports.decodeEventNotifyData = function(buffer, offset) {
    var len = 0;
    var result;
    var decodedValue;
    var eventData = {};
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.processId = decodedValue.value;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    eventData.initiatingObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 2)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    eventData.eventObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 3)) return;
    len += 2;
    decodedValue = baAsn1.decodeApplicationDate(buffer, offset + len);
    len += decodedValue.len;
    var date = decodedValue.value.value;
    decodedValue = baAsn1.decodeApplicationTime(buffer, offset + len);
    len += decodedValue.len;
    var time = decodedValue.value.value;
    eventData.timeStamp = {};
    eventData.timeStamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
    len += 2;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 4)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.notificationClass = decodedValue.value;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 5)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.priority = decodedValue.value;
    if (eventData.priority > 0xFF) return;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 6)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.eventType = decodedValue.value;
    if (baAsn1.decodeIsContextTag(buffer, offset + len, 7)) {
        decodedValue = baAsn1.decodeContextCharacterString(buffer, offset + len, 20000, 7);
        len += decodedValue.len;
        eventData.messageText = decodedValue.value;
    }
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 8)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.notifyType = decodedValue.value;
    switch(eventData.notifyType){
        case baEnum.NotifyTypes.NOTIFY_ALARM:
        case baEnum.NotifyTypes.NOTIFY_EVENT:
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, 1);
            len += decodedValue.len;
            eventData.ackRequired = decodedValue.value > 0;
            if (!baAsn1.decodeIsContextTag(buffer, offset + len, 10)) return;
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
            len += decodedValue.len;
            eventData.fromState = decodedValue.value;
            break;
        default:
            break;
    }
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 11)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    eventData.toState = decodedValue.value;
    eventData.len = len;
    return eventData;
};
module.exports.encodeReadRangeAcknowledge = function(buffer, objectId, propertyId, arrayIndex, resultFlags, itemCount, applicationData, requestType, firstSequence) {
    baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
    baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex === baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex);
    baAsn1.encodeContextBitstring(buffer, 3, resultFlags);
    baAsn1.encodeContextUnsigned(buffer, 4, itemCount);
    baAsn1.encodeOpeningTag(buffer, 5);
    if (itemCount !== 0) {
        applicationData.copy(buffer.buffer, buffer.offset, 0, applicationData.length);
        buffer.offset += applicationData.length;
    }
    baAsn1.encodeClosingTag(buffer, 5);
    if (itemCount !== 0 && requestType !== baEnum.ReadRangeRequestTypes.RR_BY_POSITION && requestType !== baEnum.ReadRangeRequestTypes.RR_READ_ALL) baAsn1.encodeContextUnsigned(buffer, 6, firstSequence);
};
module.exports.decodeReadRangeAcknowledge = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var resultFlag;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    var objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    var property = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    property.id = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === 2 && len < apduLen) {
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        property.index = decodedValue.value;
    } else {
        decodedValue = baAsn1.decodeBitstring(buffer, offset + len, 2);
        len += decodedValue.len;
        resultFlag = decodedValue.value;
    }
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    var itemCount = decodedValue.value;
    if (!baAsn1.decodeIsOpeningTag(buffer, offset + len)) return;
    len += 1;
    var rangeBuffer = buffer.slice(offset + len, buffer.length - offset - len - 1);
    return {
        len: len,
        itemCount: itemCount,
        rangeBuffer: rangeBuffer
    };
};
module.exports.decodeDeleteObject = function(buffer, offset, apduLen) {
    var result = baAsn1.decodeTagNumberAndValue(buffer, offset);
    if (result.tagNumber !== 12) return;
    var len = 1;
    var value = baAsn1.decodeObjectId(buffer, offset + len);
    len += value.len;
    if (len !== apduLen) return;
    value.len = len;
    return value;
};
module.exports.encodeDeleteObject = function(buffer, objectId) {
    baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
};
module.exports.encodeCreateObject = function(buffer, objectId, values) {
    baAsn1.encodeOpeningTag(buffer, 0);
    baAsn1.encodeContextObjectId(buffer, 1, objectId.type, objectId.instance);
    baAsn1.encodeClosingTag(buffer, 0);
    baAsn1.encodeOpeningTag(buffer, 1);
    values.forEach(function(propertyValue) {
        baAsn1.encodeContextEnumerated(buffer, 0, propertyValue.property.id);
        if (propertyValue.property.index !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 1, propertyValue.property.index);
        baAsn1.encodeOpeningTag(buffer, 2);
        propertyValue.value.forEach(function(value) {
            baAsn1.bacappEncodeApplicationData(buffer, value);
        });
        baAsn1.encodeClosingTag(buffer, 2);
        if (propertyValue.priority !== baAsn1.BACNET_NO_PRIORITY) baAsn1.encodeContextUnsigned(buffer, 3, propertyValue.priority);
    });
    baAsn1.encodeClosingTag(buffer, 1);
};
module.exports.decodeCreateObject = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var objectId;
    var valueList = [];
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === 0 && apduLen > len) {
        apduLen -= len;
        if (apduLen < 4) return;
        decodedValue = baAsn1.decodeContextObjectId(buffer, offset + len, 1);
        len += decodedValue.len;
        objectId = {
            type: decodedValue.objectType,
            instance: decodedValue.instance
        };
    } else return;
    if (baAsn1.decodeIsClosingTag(buffer, offset + len)) len++;
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 1)) return;
    len++;
    while(apduLen - len > 1){
        var newEntry = {};
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== 0) return;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        var propertyId = decodedValue.value;
        var arraIndex = baAsn1.BACNET_ARRAY_ALL;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber === 1) {
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            arraIndex += decodedValue.value;
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
        }
        newEntry.property = {
            id: propertyId,
            index: arraIndex
        };
        if (result.tagNumber === 2 && baAsn1.decodeIsOpeningTag(buffer, offset + len - 1)) {
            var values = [];
            while(!baAsn1.decodeIsClosingTag(buffer, offset + len)){
                decodedValue = baAsn1.bacappDecodeApplicationData(buffer, offset + len, apduLen + offset, objectId.type, propertyId);
                if (!decodedValue) return;
                len += decodedValue.len;
                delete decodedValue.len;
                values.push(decodedValue);
            }
            len++;
            newEntry.value = values;
        } else return;
        valueList.push(newEntry);
    }
    if (!baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
    len++;
    return {
        len: len,
        objectId: objectId,
        values: valueList
    };
};
module.exports.encodeCOVNotify = function(buffer, subscriberProcessId, initiatingDeviceId, monitoredObjectId, timeRemaining, values) {
    baAsn1.encodeContextUnsigned(buffer, 0, subscriberProcessId);
    baAsn1.encodeContextObjectId(buffer, 1, baEnum.ObjectTypes.OBJECT_DEVICE, initiatingDeviceId);
    baAsn1.encodeContextObjectId(buffer, 2, monitoredObjectId.type, monitoredObjectId.instance);
    baAsn1.encodeContextUnsigned(buffer, 3, timeRemaining);
    baAsn1.encodeOpeningTag(buffer, 4);
    values.forEach(function(value) {
        baAsn1.encodeContextEnumerated(buffer, 0, value.property.id);
        if (value.property.index === baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 1, value.property.index);
        baAsn1.encodeOpeningTag(buffer, 2);
        value.value.forEach(function(v) {
            baAsn1.bacappEncodeApplicationData(buffer, v);
        });
        baAsn1.encodeClosingTag(buffer, 2);
        if (value.priority === baAsn1.BACNET_NO_PRIORITY) baAsn1.encodeContextUnsigned(buffer, 3, value.priority);
    // TODO: Handle to too large telegrams -> ADPU limit
    });
    baAsn1.encodeClosingTag(buffer, 4);
};
module.exports.decodeCOVNotify = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    var subscriberProcessId = decodedValue.value;
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 1)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    var initiatingDeviceId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 2)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    var monitoredObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    if (!baAsn1.decodeIsContextTag(buffer, offset + len, 3)) return;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    var timeRemaining = decodedValue.value;
    if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 4)) return;
    len++;
    var values = [];
    while(apduLen - len > 1 && !baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 4)){
        var newEntry = {};
        newEntry.property = {};
        if (!baAsn1.decodeIsContextTag(buffer, offset + len, 0)) return;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        newEntry.property.id = decodedValue.value;
        if (baAsn1.decodeIsContextTag(buffer, offset + len, 1)) {
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            newEntry.property.index = decodedValue.value;
        } else newEntry.property.index = baAsn1.BACNET_ARRAY_ALL;
        if (!baAsn1.decodeIsOpeningTagNumber(buffer, offset + len, 2)) return;
        len++;
        var properties = [];
        while(apduLen - len > 1 && !baAsn1.decodeIsClosingTagNumber(buffer, offset + len, 2)){
            decodedValue = baAsn1.bacappDecodeApplicationData(buffer, offset + len, apduLen + offset, monitoredObjectId.type, newEntry.property.id);
            if (!decodedValue) return;
            len += decodedValue.len;
            delete decodedValue.len;
            properties.push(decodedValue);
        }
        newEntry.value = properties;
        len++;
        if (baAsn1.decodeIsContextTag(buffer, offset + len, 3)) {
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            newEntry.priority = decodedValue.value;
        } else newEntry.priority = baAsn1.BACNET_NO_PRIORITY;
        values.push(newEntry);
    }
    return {
        len: len,
        subscriberProcessId: subscriberProcessId,
        initiatingDeviceId: initiatingDeviceId,
        monitoredObjectId: monitoredObjectId,
        timeRemaining: timeRemaining,
        values: values
    };
};
module.exports.encodeAlarmSummary = function(buffer, alarms) {
    alarms.forEach(function(alarm) {
        baAsn1.encodeContextObjectId(buffer, 12, alarm.objectId.type, alarm.objectId.instance);
        baAsn1.encodeContextEnumerated(buffer, 9, alarm.alarmState);
        baAsn1.encodeContextBitstring(buffer, 8, alarm.acknowledgedTransitions);
    });
};
module.exports.decodeAlarmSummary = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var alarms = [];
    while(apduLen - 3 - len > 0){
        var value = {};
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
        len += decodedValue.len;
        value.objectId = {
            type: decodedValue.objectType,
            instance: decodedValue.instance
        };
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.alarmState = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeBitstring(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.acknowledgedTransitions = decodedValue.value;
        alarms.push(value);
    }
    return {
        len: len,
        alarms: alarms
    };
};
module.exports.encodeAlarmAcknowledge = function(buffer, ackProcessId, eventObjectId, eventStateAcknowledged, ackSource, eventTimeStamp, ackTimeStamp) {
    baAsn1.encodeContextUnsigned(buffer, 0, ackProcessId);
    baAsn1.encodeContextObjectId(buffer, 1, eventObjectId.type, eventObjectId.instance);
    baAsn1.encodeContextEnumerated(buffer, 2, eventStateAcknowledged);
    baAsn1.bacappEncodeContextTimestamp(buffer, 3, eventTimeStamp);
    baAsn1.encodeContextCharacterString(buffer, 4, ackSource);
    baAsn1.bacappEncodeContextTimestamp(buffer, 5, ackTimeStamp);
};
module.exports.decodeAlarmAcknowledge = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var result;
    var decodedValue;
    var date;
    var time;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.acknowledgedProcessId = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.eventObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.eventStateAcknowledged = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_TIME) {
        decodedValue = baAsn1.decodeBacnetTime(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.eventTimeStamp = decodedValue.value;
    } else if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_SEQUENCE) {
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.eventTimeStamp = decodedValue.value;
    } else if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_DATETIME) {
        date = baAsn1.decodeApplicationDate(buffer, offset + len);
        len += date.len;
        date = date.value.value;
        time = baAsn1.decodeApplicationTime(buffer, offset + len);
        len += time.len;
        time = time.value.value;
        value.eventTimeStamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
        len++;
    }
    len++;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
    value.acknowledgeSource = decodedValue.value;
    len += decodedValue.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_TIME) {
        decodedValue = baAsn1.decodeBacnetTime(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.acknowledgeTimeStamp = decodedValue.value;
    } else if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_SEQUENCE) {
        decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.acknowledgeTimeStamp = decodedValue.value;
    } else if (result.tagNumber === baEnum.TimestampTags.TIME_STAMP_DATETIME) {
        date = baAsn1.decodeApplicationDate(buffer, offset + len);
        len += date.len;
        date = date.value.value;
        time = baAsn1.decodeApplicationTime(buffer, offset + len);
        len += time.len;
        time = time.value.value;
        value.acknowledgeTimeStamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
        len++;
    }
    len++;
    value.len = len;
    return value;
};
module.exports.encodeEventInformation = function(buffer, events, moreEvents) {
    var i;
    baAsn1.encodeOpeningTag(buffer, 0);
    events.forEach(function(event) {
        baAsn1.encodeContextObjectId(buffer, 0, event.objectId.type, event.objectId.instance);
        baAsn1.encodeContextEnumerated(buffer, 1, event.eventState);
        baAsn1.encodeContextBitstring(buffer, 2, event.acknowledgedTransitions);
        baAsn1.encodeOpeningTag(buffer, 3);
        for(i = 0; i < 3; i++){
            baAsn1.encodeApplicationDate(buffer, event.eventTimeStamps[i]);
            baAsn1.encodeApplicationTime(buffer, event.eventTimeStamps[i]);
        }
        baAsn1.encodeClosingTag(buffer, 3);
        baAsn1.encodeContextEnumerated(buffer, 4, event.notifyType);
        baAsn1.encodeContextBitstring(buffer, 5, event.eventEnable);
        baAsn1.encodeOpeningTag(buffer, 6);
        for(i = 0; i < 3; i++)baAsn1.encodeApplicationUnsigned(buffer, event.eventPriorities[i]);
        baAsn1.encodeClosingTag(buffer, 6);
    });
    baAsn1.encodeClosingTag(buffer, 0);
    baAsn1.encodeContextBoolean(buffer, 1, moreEvents);
};
module.exports.decodeEventInformation = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    len++;
    var alarms = [];
    var moreEvents;
    var i;
    while(apduLen - 3 - len > 0){
        var value = {};
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
        len += decodedValue.len;
        value.objectId = {
            type: decodedValue.objectType,
            instance: decodedValue.instance
        };
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.eventState = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeBitstring(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.acknowledgedTransitions = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        value.eventTimeStamps = [];
        for(i = 0; i < 3; i++)if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_NULL) {
            decodedValue = baAsn1.decodeApplicationDate(buffer, offset + len);
            len += decodedValue.len;
            var date = decodedValue.value.value;
            decodedValue = baAsn1.decodeApplicationTime(buffer, offset + len);
            len += decodedValue.len;
            var time = decodedValue.value.value;
            value.eventTimeStamps[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
        } else len += result.value;
        len++;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.notifyType = decodedValue.value;
        result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        decodedValue = baAsn1.decodeBitstring(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.eventEnable = decodedValue.value;
        len++;
        value.eventPriorities = [];
        for(i = 0; i < 3; i++){
            result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
            len += decodedValue.len;
            value.eventPriorities[i] = decodedValue.value;
        }
        len++;
        alarms.push(value);
    }
    moreEvents = buffer[apduLen - 1] === 1;
    return {
        len: len,
        alarms: alarms,
        moreEvents: moreEvents
    };
};
module.exports.encodePrivateTransfer = function(buffer, vendorId, serviceNumber, data) {
    baAsn1.encodeContextUnsigned(buffer, 0, vendorId);
    baAsn1.encodeContextUnsigned(buffer, 1, serviceNumber);
    baAsn1.encodeOpeningTag(buffer, 2);
    for(var i = 0; i < data.length; i++)buffer.buffer[buffer.offset++] = data[i];
    baAsn1.encodeClosingTag(buffer, 2);
};
module.exports.decodePrivateTransfer = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var value = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.vendorId = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.serviceNumber = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    var size = apduLen - (offset + len + 1);
    var data = [];
    for(var i = 0; i < size; i++)data.push(buffer[offset + len++]);
    value.data = data;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    value.len = len;
    return value;
};
module.exports.encodeGetEventInformation = function(buffer, lastReceivedObjectId) {
    baAsn1.encodeContextObjectId(buffer, 0, lastReceivedObjectId.type, lastReceivedObjectId.instance);
};
module.exports.decodeGetEventInformation = function(buffer, offset) {
    var len = 0;
    var result;
    var decodedValue;
    var value = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.lastReceivedObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    value.len = len;
    return value;
};
module.exports.encodeIhaveBroadcast = function(buffer, deviceId, objectId, objectName) {
    baAsn1.encodeApplicationObjectId(buffer, deviceId.type, deviceId.instance);
    baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
    baAsn1.encodeApplicationCharacterString(buffer, objectName);
};
module.exports.decodeIhaveBroadcast = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var value = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.deviceId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
    len += decodedValue.len;
    value.objectName = decodedValue.value;
    value.len = len;
    return value;
};
module.exports.encodeLifeSafetyOperation = function(buffer, processId, requestingSource, operation, targetObjectId) {
    baAsn1.encodeContextUnsigned(buffer, 0, processId);
    baAsn1.encodeContextCharacterString(buffer, 1, requestingSource);
    baAsn1.encodeContextEnumerated(buffer, 2, operation);
    baAsn1.encodeContextObjectId(buffer, 3, targetObjectId.type, targetObjectId.instance);
};
module.exports.decodeLifeSafetyOperation = function(buffer, offset, apduLen) {
    var len = 0;
    var result;
    var decodedValue;
    var value = {};
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.processId = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeCharacterString(buffer, offset + len, apduLen - (offset + len), result.value);
    len += decodedValue.len;
    value.requestingSource = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.operation = decodedValue.value;
    result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.targetObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    value.len = len;
    return value;
};
// TODO: Implement decoding for following functions
module.exports.encodeAddListElement = function(buffer, objectId, propertyId, arrayIndex, values) {
    baAsn1.encodeContextObjectId(buffer, 0, objectId.type, objectId.instance);
    baAsn1.encodeContextEnumerated(buffer, 1, propertyId);
    if (arrayIndex !== baAsn1.BACNET_ARRAY_ALL) baAsn1.encodeContextUnsigned(buffer, 2, arrayIndex);
    baAsn1.encodeOpeningTag(buffer, 3);
    values.forEach(function(value) {
        baAsn1.bacappEncodeApplicationData(buffer, value);
    });
    baAsn1.encodeClosingTag(buffer, 3);
};
module.exports.encodeGetEventInformationAcknowledge = function(buffer, events, moreEvents) {
    var i;
    baAsn1.encodeOpeningTag(buffer, 0);
    events.forEach(function(eventData) {
        baAsn1.encodeContextObjectId(buffer, 0, eventData.objectId.type, eventData.objectId.instance);
        baAsn1.encodeContextEnumerated(buffer, 1, eventData.eventState);
        baAsn1.encodeContextBitstring(buffer, 2, eventData.acknowledgedTransitions);
        baAsn1.encodeOpeningTag(buffer, 3);
        for(i = 0; i < 3; i++)baAsn1.bacappEncodeTimestamp(buffer, eventData.eventTimeStamps[i]);
        baAsn1.encodeClosingTag(buffer, 3);
        baAsn1.encodeContextEnumerated(buffer, 4, eventData.notifyType);
        baAsn1.encodeContextBitstring(buffer, 5, eventData.eventEnable);
        baAsn1.encodeOpeningTag(buffer, 6);
        for(i = 0; i < 3; i++)baAsn1.encodeApplicationUnsigned(buffer, eventData.eventPriorities[i]);
        baAsn1.encodeClosingTag(buffer, 6);
    });
    baAsn1.encodeClosingTag(buffer, 0);
    baAsn1.encodeContextBoolean(buffer, 1, moreEvents);
};

},{"9c771de9dfda2f74":"dHmoE","2d5f554d5aa6ad43":"8k57N"}],"dHmoE":[function(require,module,exports) {
var Buffer = require("4e7b2ffbd18ed059").Buffer;
var iconv = require("57043c76cf858d1");
var baEnum = require("40ee01600a4020ec");
var BACNET_MAX_OBJECT = module.exports.BACNET_MAX_OBJECT = 0x3FF;
var BACNET_INSTANCE_BITS = module.exports.BACNET_INSTANCE_BITS = 22;
var BACNET_MAX_INSTANCE = module.exports.BACNET_MAX_INSTANCE = 0x3FFFFF;
var MAX_BITSTRING_BYTES = module.exports.MAX_BITSTRING_BYTES = 15;
var BACNET_ARRAY_ALL = module.exports.BACNET_ARRAY_ALL = 0xFFFFFFFF;
var BACNET_NO_PRIORITY = module.exports.BACNET_NO_PRIORITY = 0;
var BACNET_MIN_PRIORITY = module.exports.BACNET_MIN_PRIORITY = 1;
var BACNET_MAX_PRIORITY = module.exports.BACNET_MAX_PRIORITY = 16;
var getBuffer = function() {
    return {
        buffer: Buffer.alloc(1472),
        offset: 0
    };
};
var getSignedLength = function(value) {
    if (value >= -128 && value < 128) return 1;
    else if (value >= -32768 && value < 32768) return 2;
    else if (value > -8388608 && value < 8388608) return 3;
    else return 4;
};
var getUnsignedLength = function(value) {
    if (value < 0x100) return 1;
    else if (value < 0x10000) return 2;
    else if (value < 0x1000000) return 3;
    else return 4;
};
var getEncodingType = function(encoding, decodingBuffer, decodingOffset) {
    switch(encoding){
        case baEnum.CharacterStringEncodings.CHARACTER_UTF8:
            return "utf8";
        case baEnum.CharacterStringEncodings.CHARACTER_UCS2:
            if (decodingBuffer && decodingBuffer[decodingOffset] === 0xFF && decodingBuffer[decodingOffset + 1] === 0xFE) return "ucs2";
            return "UTF-16BE"; // Default to big-endian
        case baEnum.CharacterStringEncodings.CHARACTER_ISO8859_1:
            return "latin1";
        case baEnum.CharacterStringEncodings.CHARACTER_UCS4:
            return "utf8"; // HACK: There is currently no support for UTF-32
        case baEnum.CharacterStringEncodings.CHARACTER_MS_DBCS:
            return "cp850";
        case baEnum.CharacterStringEncodings.CHARACTER_JISX_0208:
            return "Shift_JIS";
        default:
            return "utf8";
    }
};
var encodeUnsigned = function(buffer, value, length) {
    buffer.buffer.writeUIntBE(value, buffer.offset, length, true);
    buffer.offset += length;
};
var encodeBacnetUnsigned = function(buffer, value) {
    encodeUnsigned(buffer, value, getUnsignedLength(value));
};
var encodeSigned = function(buffer, value, length) {
    buffer.buffer.writeIntBE(value, buffer.offset, length, true);
    buffer.offset += length;
};
var encodeBacnetSigned = function(buffer, value) {
    encodeSigned(buffer, value, getSignedLength(value));
};
var encodeBacnetReal = function(buffer, value) {
    buffer.buffer.writeFloatBE(value, buffer.offset, true);
    buffer.offset += 4;
};
var encodeBacnetDouble = function(buffer, value) {
    buffer.buffer.writeDoubleBE(value, buffer.offset, true);
    buffer.offset += 8;
};
var decodeUnsigned = module.exports.decodeUnsigned = function(buffer, offset, length) {
    return {
        len: length,
        value: buffer.readUIntBE(offset, length, true)
    };
};
var decodeEnumerated = module.exports.decodeEnumerated = function(buffer, offset, lenValue) {
    return decodeUnsigned(buffer, offset, lenValue);
};
var encodeBacnetObjectId = module.exports.encodeBacnetObjectId = function(buffer, objectType, instance) {
    var value = (objectType & BACNET_MAX_OBJECT) << BACNET_INSTANCE_BITS | instance & BACNET_MAX_INSTANCE;
    encodeUnsigned(buffer, value, 4);
};
var encodeTag = module.exports.encodeTag = function(buffer, tagNumber, contextSpecific, lenValueType) {
    var len = 1;
    var tmp = new Array(3);
    tmp[0] = 0;
    if (contextSpecific) tmp[0] |= 0x8;
    if (tagNumber <= 14) tmp[0] |= tagNumber << 4;
    else {
        tmp[0] |= 0xF0;
        tmp[1] = tagNumber;
        len++;
    }
    if (lenValueType <= 4) {
        tmp[0] |= lenValueType;
        Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
        buffer.offset += len;
    } else {
        tmp[0] |= 5;
        if (lenValueType <= 253) {
            tmp[len++] = lenValueType;
            Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
            buffer.offset += len;
        } else if (lenValueType <= 65535) {
            tmp[len++] = 254;
            Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
            buffer.offset += len;
            encodeUnsigned(buffer, lenValueType, 2);
        } else {
            tmp[len++] = 255;
            Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
            buffer.offset += len;
            encodeUnsigned(buffer, lenValueType, 4);
        }
    }
};
var encodeBacnetEnumerated = function(buffer, value) {
    encodeBacnetUnsigned(buffer, value);
};
var isExtendedTagNumber = function(x) {
    return (x & 0xF0) === 0xF0;
};
var isExtendedValue = function(x) {
    return (x & 0x07) === 5;
};
var isContextSpecific = function(x) {
    return (x & 0x8) === 0x8;
};
var isOpeningTag = function(x) {
    return (x & 0x07) === 6;
};
var isClosingTag = function(x) {
    return (x & 0x07) === 7;
};
var encodeContextReal = module.exports.encodeContextReal = function(buffer, tagNumber, value) {
    encodeTag(buffer, tagNumber, true, 4);
    encodeBacnetReal(buffer, value);
};
var encodeContextUnsigned = module.exports.encodeContextUnsigned = function(buffer, tagNumber, value) {
    encodeTag(buffer, tagNumber, true, getUnsignedLength(value));
    encodeBacnetUnsigned(buffer, value);
};
var encodeContextEnumerated = module.exports.encodeContextEnumerated = function(buffer, tagNumber, value) {
    encodeContextUnsigned(buffer, tagNumber, value);
};
var encodeOctetString = function(buffer, octetString, octetOffset, octetCount) {
    if (octetString) for(var i = octetOffset; i < octetOffset + octetCount; i++)buffer.buffer[buffer.offset++] = octetString[i];
};
var encodeApplicationOctetString = module.exports.encodeApplicationOctetString = function(buffer, octetString, octetOffset, octetCount) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING, false, octetCount);
    encodeOctetString(buffer, octetString, octetOffset, octetCount);
};
var encodeApplicationNull = function(buffer) {
    buffer.buffer[buffer.offset++] = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_NULL;
};
var encodeApplicationBoolean = module.exports.encodeApplicationBoolean = function(buffer, booleanValue) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN, false, booleanValue ? 1 : 0);
};
var encodeApplicationReal = function(buffer, value) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_REAL, false, 4);
    encodeBacnetReal(buffer, value);
};
var encodeApplicationDouble = function(buffer, value) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DOUBLE, false, 8);
    encodeBacnetDouble(buffer, value);
};
var bitstringBytesUsed = function(bitString) {
    var len = 0;
    if (bitString.bitsUsed > 0) {
        var lastBit = bitString.bitsUsed - 1;
        var usedBytes = lastBit / 8 + 1;
        len = Math.floor(usedBytes);
    }
    return len;
};
var encodeApplicationObjectId = module.exports.encodeApplicationObjectId = function(buffer, objectType, instance) {
    var tmp = getBuffer();
    encodeBacnetObjectId(tmp, objectType, instance);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID, false, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};
var encodeApplicationUnsigned = module.exports.encodeApplicationUnsigned = function(buffer, value) {
    var tmp = getBuffer();
    encodeBacnetUnsigned(tmp, value);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT, false, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};
var encodeApplicationEnumerated = module.exports.encodeApplicationEnumerated = function(buffer, value) {
    var tmp = getBuffer();
    encodeBacnetEnumerated(tmp, value);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED, false, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};
var encodeApplicationSigned = module.exports.encodeApplicationSigned = function(buffer, value) {
    var tmp = getBuffer();
    encodeBacnetSigned(tmp, value);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT, false, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};
var byteReverseBits = function(inByte) {
    var outByte = 0;
    if ((inByte & 1) > 0) outByte |= 0x80;
    if ((inByte & 2) > 0) outByte |= 0x40;
    if ((inByte & 4) > 0) outByte |= 0x20;
    if ((inByte & 8) > 0) outByte |= 0x10;
    if ((inByte & 16) > 0) outByte |= 0x8;
    if ((inByte & 32) > 0) outByte |= 0x4;
    if ((inByte & 64) > 0) outByte |= 0x2;
    if ((inByte & 128) > 0) outByte |= 1;
    return outByte;
};
var bitstringOctet = function(bitString, octetIndex) {
    var octet = 0;
    if (bitString.value) {
        if (octetIndex < MAX_BITSTRING_BYTES) octet = bitString.value[octetIndex];
    }
    return octet;
};
var encodeBitstring = function(buffer, bitString) {
    if (bitString.bitsUsed === 0) buffer.buffer[buffer.offset++] = 0;
    else {
        var usedBytes = bitstringBytesUsed(bitString);
        var remainingUsedBits = bitString.bitsUsed - (usedBytes - 1) * 8;
        buffer.buffer[buffer.offset++] = 8 - remainingUsedBits;
        for(var i = 0; i < usedBytes; i++)buffer.buffer[buffer.offset++] = byteReverseBits(bitstringOctet(bitString, i));
    }
};
var encodeApplicationBitstring = module.exports.encodeApplicationBitstring = function(buffer, bitString) {
    var bitStringEncodedLength = 1;
    bitStringEncodedLength += bitstringBytesUsed(bitString);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BIT_STRING, false, bitStringEncodedLength);
    encodeBitstring(buffer, bitString);
};
var encodeBacnetDate = function(buffer, value) {
    if (value === new Date(1, 1, 1)) {
        buffer.buffer[buffer.offset++] = 0xFF;
        buffer.buffer[buffer.offset++] = 0xFF;
        buffer.buffer[buffer.offset++] = 0xFF;
        buffer.buffer[buffer.offset++] = 0xFF;
        return;
    }
    if (value.getFullYear() >= 1900) buffer.buffer[buffer.offset++] = value.getFullYear() - 1900;
    else if (value.getFullYear() < 0x100) buffer.buffer[buffer.offset++] = value.getFullYear();
    else return;
    buffer.buffer[buffer.offset++] = value.getMonth();
    buffer.buffer[buffer.offset++] = value.getDate();
    buffer.buffer[buffer.offset++] = value.getDay() === 0 ? 7 : value.getDay();
};
var encodeApplicationDate = module.exports.encodeApplicationDate = function(buffer, value) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE, false, 4);
    encodeBacnetDate(buffer, value);
};
var encodeBacnetTime = function(buffer, value) {
    buffer.buffer[buffer.offset++] = value.getHours();
    buffer.buffer[buffer.offset++] = value.getMinutes();
    buffer.buffer[buffer.offset++] = value.getSeconds();
    buffer.buffer[buffer.offset++] = value.getMilliseconds() / 10;
};
var encodeApplicationTime = module.exports.encodeApplicationTime = function(buffer, value) {
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME, false, 4);
    encodeBacnetTime(buffer, value);
};
var bacappEncodeDatetime = function(buffer, value) {
    if (value !== new Date(1, 1, 1)) {
        encodeApplicationDate(buffer, value);
        encodeApplicationTime(buffer, value);
    }
};
var encodeContextObjectId = module.exports.encodeContextObjectId = function(buffer, tagNumber, objectType, instance) {
    encodeTag(buffer, tagNumber, true, 4);
    encodeBacnetObjectId(buffer, objectType, instance);
};
var encodeOpeningTag = module.exports.encodeOpeningTag = function(buffer, tagNumber) {
    var len = 1;
    var tmp = new Array(2);
    tmp[0] = 0x8;
    if (tagNumber <= 14) tmp[0] |= tagNumber << 4;
    else {
        tmp[0] |= 0xF0;
        tmp[1] = tagNumber;
        len++;
    }
    tmp[0] |= 6;
    Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
    buffer.offset += len;
};
var encodeClosingTag = module.exports.encodeClosingTag = function(buffer, tagNumber) {
    var len = 1;
    var tmp = new Array(2);
    tmp[0] = 0x8;
    if (tagNumber <= 14) tmp[0] |= tagNumber << 4;
    else {
        tmp[0] |= 0xF0;
        tmp[1] = tagNumber;
        len++;
    }
    tmp[0] |= 7;
    Buffer.from(tmp).copy(buffer.buffer, buffer.offset, 0, len);
    buffer.offset += len;
};
var encodeReadAccessSpecification = module.exports.encodeReadAccessSpecification = function(buffer, value) {
    encodeContextObjectId(buffer, 0, value.objectId.type, value.objectId.instance);
    encodeOpeningTag(buffer, 1);
    value.properties.forEach(function(p) {
        encodeContextEnumerated(buffer, 0, p.id);
        if (p.index && p.index !== BACNET_ARRAY_ALL) encodeContextUnsigned(buffer, 1, p.index);
    });
    encodeClosingTag(buffer, 1);
};
var encodeContextBoolean = module.exports.encodeContextBoolean = function(buffer, tagNumber, booleanValue) {
    encodeTag(buffer, tagNumber, true, 1);
    buffer.buffer.writeUInt8(booleanValue ? 1 : 0, buffer.offset, true);
    buffer.offset += 1;
};
var encodeCovSubscription = function(buffer, value) {
    encodeOpeningTag(buffer, 0);
    encodeOpeningTag(buffer, 0);
    encodeOpeningTag(buffer, 1);
    encodeApplicationUnsigned(buffer, value.recipient.network);
    if (value.recipient.network === 0xFFFF) encodeApplicationOctetString(buffer, 0, 0, 0);
    else encodeApplicationOctetString(buffer, value.recipient.address, 0, value.recipient.address.length);
    encodeClosingTag(buffer, 1);
    encodeClosingTag(buffer, 0);
    encodeContextUnsigned(buffer, 1, value.subscriptionProcessId);
    encodeClosingTag(buffer, 0);
    encodeOpeningTag(buffer, 1);
    encodeContextObjectId(buffer, 0, value.monitoredObjectId.type, value.monitoredObjectId.instance);
    encodeContextEnumerated(buffer, 1, value.monitoredProperty.id);
    if (value.monitoredProperty.index !== BACNET_ARRAY_ALL) encodeContextUnsigned(buffer, 2, value.monitoredProperty.index);
    encodeClosingTag(buffer, 1);
    encodeContextBoolean(buffer, 2, value.issueConfirmedNotifications);
    encodeContextUnsigned(buffer, 3, value.timeRemaining);
    if (value.covIncrement > 0) encodeContextReal(buffer, 4, value.covIncrement);
};
var bacappEncodeApplicationData = module.exports.bacappEncodeApplicationData = function(buffer, value) {
    if (value.value === null) value.type = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_NULL;
    switch(value.type){
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_NULL:
            encodeApplicationNull(buffer);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN:
            encodeApplicationBoolean(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT:
            encodeApplicationUnsigned(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT:
            encodeApplicationSigned(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_REAL:
            encodeApplicationReal(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DOUBLE:
            encodeApplicationDouble(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING:
            encodeApplicationOctetString(buffer, value.value, 0, value.value.length);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CHARACTER_STRING:
            encodeApplicationCharacterString(buffer, value.value, value.encoding);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BIT_STRING:
            encodeApplicationBitstring(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED:
            encodeApplicationEnumerated(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE:
            encodeApplicationDate(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME:
            encodeApplicationTime(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIMESTAMP:
            bacappEncodeTimestamp(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATETIME:
            bacappEncodeDatetime(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID:
            encodeApplicationObjectId(buffer, value.value.type, value.value.instance);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_COV_SUBSCRIPTION:
            encodeCovSubscription(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_READ_ACCESS_RESULT:
            encodeReadAccessResult(buffer, value.value);
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_READ_ACCESS_SPECIFICATION:
            encodeReadAccessSpecification(buffer, value.value);
            break;
        default:
            throw "Unknown type";
    }
};
var bacappEncodeDeviceObjPropertyRef = function(buffer, value) {
    encodeContextObjectId(buffer, 0, value.objectId.type, value.objectId.instance);
    encodeContextEnumerated(buffer, 1, value.id);
    if (value.arrayIndex !== BACNET_ARRAY_ALL) encodeContextUnsigned(buffer, 2, value.arrayIndex);
    if (value.deviceIndentifier.type === baEnum.ObjectTypes.OBJECT_DEVICE) encodeContextObjectId(buffer, 3, value.deviceIndentifier.type, value.deviceIndentifier.instance);
};
var bacappEncodeContextDeviceObjPropertyRef = module.exports.bacappEncodeContextDeviceObjPropertyRef = function(buffer, tagNumber, value) {
    encodeOpeningTag(buffer, tagNumber);
    bacappEncodeDeviceObjPropertyRef(buffer, value);
    encodeClosingTag(buffer, tagNumber);
};
var bacappEncodePropertyState = module.exports.bacappEncodePropertyState = function(buffer, value) {
    switch(value.type){
        case baEnum.PropertyStateTypes.BOOLEAN_VALUE:
            encodeContextBoolean(buffer, 0, value.state === 1 ? true : false);
            break;
        case baEnum.PropertyStateTypes.BINARY_VALUE:
            encodeContextEnumerated(buffer, 1, value.state);
            break;
        case baEnum.PropertyStateTypes.EVENT_TYPE:
            encodeContextEnumerated(buffer, 2, value.state);
            break;
        case baEnum.PropertyStateTypes.POLARITY:
            encodeContextEnumerated(buffer, 3, value.state);
            break;
        case baEnum.PropertyStateTypes.PROGRAM_CHANGE:
            encodeContextEnumerated(buffer, 4, value.state);
            break;
        case baEnum.PropertyStateTypes.PROGRAM_STATE:
            encodeContextEnumerated(buffer, 5, value.state);
            break;
        case baEnum.PropertyStateTypes.REASON_FOR_HALT:
            encodeContextEnumerated(buffer, 6, value.state);
            break;
        case baEnum.PropertyStateTypes.RELIABILITY:
            encodeContextEnumerated(buffer, 7, value.state);
            break;
        case baEnum.PropertyStateTypes.STATE:
            encodeContextEnumerated(buffer, 8, value.state);
            break;
        case baEnum.PropertyStateTypes.SYSTEM_STATUS:
            encodeContextEnumerated(buffer, 9, value.state);
            break;
        case baEnum.PropertyStateTypes.UNITS:
            encodeContextEnumerated(buffer, 10, value.state);
            break;
        case baEnum.PropertyStateTypes.UNSIGNED_VALUE:
            encodeContextUnsigned(buffer, 11, value.state);
            break;
        case baEnum.PropertyStateTypes.LIFE_SAFETY_MODE:
            encodeContextEnumerated(buffer, 12, value.state);
            break;
        case baEnum.PropertyStateTypes.LIFE_SAFETY_STATE:
            encodeContextEnumerated(buffer, 13, value.state);
            break;
        default:
            break;
    }
};
var encodeContextBitstring = module.exports.encodeContextBitstring = function(buffer, tagNumber, bitString) {
    var bitStringEncodedLength = 1;
    bitStringEncodedLength += bitstringBytesUsed(bitString);
    encodeTag(buffer, tagNumber, true, bitStringEncodedLength);
    encodeBitstring(buffer, bitString);
};
var encodeContextSigned = module.exports.encodeContextSigned = function(buffer, tagNumber, value) {
    encodeTag(buffer, tagNumber, true, getSignedLength(value));
    encodeBacnetSigned(buffer, value);
};
var encodeContextTime = function(buffer, tagNumber, value) {
    encodeTag(buffer, tagNumber, true, 4);
    encodeBacnetTime(buffer, value);
};
var bacappEncodeContextDatetime = function(buffer, tagNumber, value) {
    if (value !== new Date(1, 1, 1)) {
        encodeOpeningTag(buffer, tagNumber);
        bacappEncodeDatetime(buffer, value);
        encodeClosingTag(buffer, tagNumber);
    }
};
var decodeTagNumber = module.exports.decodeTagNumber = function(buffer, offset) {
    var len = 1;
    var tagNumber;
    if (isExtendedTagNumber(buffer[offset])) {
        tagNumber = buffer[offset + 1];
        len++;
    } else tagNumber = buffer[offset] >> 4;
    return {
        len: len,
        tagNumber: tagNumber
    };
};
var decodeIsContextTag = module.exports.decodeIsContextTag = function(buffer, offset, tagNumber) {
    var result = decodeTagNumber(buffer, offset);
    return isContextSpecific(buffer[offset]) && result.tagNumber === tagNumber;
};
var decodeIsOpeningTagNumber = module.exports.decodeIsOpeningTagNumber = function(buffer, offset, tagNumber) {
    var result = decodeTagNumber(buffer, offset);
    return isOpeningTag(buffer[offset]) && result.tagNumber === tagNumber;
};
var decodeIsClosingTagNumber = module.exports.decodeIsClosingTagNumber = function(buffer, offset, tagNumber) {
    var result = decodeTagNumber(buffer, offset);
    return isClosingTag(buffer[offset]) && result.tagNumber === tagNumber;
};
var decodeIsClosingTag = module.exports.decodeIsClosingTag = function(buffer, offset) {
    return (buffer[offset] & 0x07) === 7;
};
var decodeIsOpeningTag = module.exports.decodeIsOpeningTag = function(buffer, offset) {
    return (buffer[offset] & 0x07) === 6;
};
var decodeObjectId = module.exports.decodeObjectId = function(buffer, offset) {
    var result = decodeUnsigned(buffer, offset, 4);
    var objectType = result.value >> BACNET_INSTANCE_BITS & BACNET_MAX_OBJECT;
    var instance = result.value & BACNET_MAX_INSTANCE;
    return {
        len: result.len,
        objectType: objectType,
        instance: instance
    };
};
var decodeObjectIdSafe = function(buffer, offset, lenValue) {
    if (lenValue !== 4) return {
        len: 0,
        objectType: 0,
        instance: 0
    };
    else return decodeObjectId(buffer, offset);
};
var decodeTagNumberAndValue = module.exports.decodeTagNumberAndValue = function(buffer, offset) {
    var value;
    var result = decodeTagNumber(buffer, offset);
    var len = result.len;
    if (isExtendedValue(buffer[offset])) {
        if (buffer[offset + len] === 255) {
            len++;
            result = decodeUnsigned(buffer, offset + len, 4);
            len += result.len;
            value = result.value;
        } else if (buffer[offset + len] === 254) {
            len++;
            result = decodeUnsigned(buffer, offset + len, 2);
            len += result.len;
            value = result.value;
        } else {
            value = buffer[offset + len];
            len++;
        }
    } else if (isOpeningTag(buffer[offset])) value = 0;
    else if (isClosingTag(buffer[offset])) value = 0;
    else value = buffer[offset] & 0x07;
    return {
        len: len,
        tagNumber: result.tagNumber,
        value: value
    };
};
var bacappDecodeApplicationData = module.exports.bacappDecodeApplicationData = function(buffer, offset, maxOffset, objectType, propertyId) {
    if (!isContextSpecific(buffer[offset])) {
        var result = decodeTagNumberAndValue(buffer, offset);
        if (result) {
            var len = result.len;
            result = bacappDecodeData(buffer, offset + len, maxOffset, result.tagNumber, result.value);
            if (!result) return;
            var resObj = {
                len: len + result.len,
                type: result.type,
                value: result.value
            };
            // HACK: Drop string specific handling ASAP
            if (result.encoding !== undefined) resObj.encoding = result.encoding;
            return resObj;
        }
    } else return bacappDecodeContextApplicationData(buffer, offset, maxOffset, objectType, propertyId);
};
var encodeReadAccessResult = module.exports.encodeReadAccessResult = function(buffer, value) {
    encodeContextObjectId(buffer, 0, value.objectId.type, value.objectId.instance);
    encodeOpeningTag(buffer, 1);
    value.values.forEach(function(item) {
        encodeContextEnumerated(buffer, 2, item.property.id);
        if (item.property.index !== BACNET_ARRAY_ALL) encodeContextUnsigned(buffer, 3, item.property.index);
        if (item.value && item.value[0] && item.value[0].value && item.value[0].value.type === "BacnetError") {
            encodeOpeningTag(buffer, 5);
            encodeApplicationEnumerated(buffer, item.value[0].value.errorClass);
            encodeApplicationEnumerated(buffer, item.value[0].value.errorCode);
            encodeClosingTag(buffer, 5);
        } else {
            encodeOpeningTag(buffer, 4);
            item.value.forEach(function(subItem) {
                bacappEncodeApplicationData(buffer, subItem);
            });
            encodeClosingTag(buffer, 4);
        }
    });
    encodeClosingTag(buffer, 1);
};
var decodeReadAccessResult = module.exports.decodeReadAccessResult = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    if (!decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    var result = decodeObjectId(buffer, offset + len);
    value.objectId = {
        type: result.objectType,
        instance: result.instance
    };
    len += result.len;
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 1)) return -1;
    len++;
    var values = [];
    while(apduLen - len > 0){
        var newEntry = {};
        if (decodeIsClosingTagNumber(buffer, offset + len, 1)) {
            len++;
            break;
        }
        result = decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== 2) return;
        result = decodeEnumerated(buffer, offset + len, result.value);
        newEntry.id = result.value;
        len += result.len;
        result = decodeTagNumberAndValue(buffer, offset + len);
        if (result.tagNumber === 3) {
            len += result.len;
            result = decodeUnsigned(buffer, offset + len, result.value);
            newEntry.index = result.value;
            len += result.len;
        } else newEntry.index = BACNET_ARRAY_ALL;
        result = decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber === 4) {
            var localValues = [];
            while(len + offset <= buffer.length && !decodeIsClosingTagNumber(buffer, offset + len, 4)){
                var localResult = bacappDecodeApplicationData(buffer, offset + len, apduLen + offset - 1, value.objectId.type, newEntry.id);
                if (!localResult) return;
                len += localResult.len;
                var resObj = {
                    value: localResult.value,
                    type: localResult.type
                };
                // HACK: Drop string specific handling ASAP
                if (localResult.encoding !== undefined) resObj.encoding = localResult.encoding;
                localValues.push(resObj);
            }
            if (!decodeIsClosingTagNumber(buffer, offset + len, 4)) return;
            if (localValues.count === 2 && localValues[0].type === baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE && localValues[1].type === baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME) {
                var date = localValues[0].value;
                var time = localValues[1].value;
                var bdatetime = new Date(date.year, date.month, date.day, time.hour, time.minute, time.second, time.millisecond);
                newEntry.value = [
                    {
                        type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATETIME,
                        value: bdatetime
                    }
                ];
            } else newEntry.value = localValues;
            len++;
        } else if (result.tagNumber === 5) {
            var err = {};
            result = decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            result = decodeEnumerated(buffer, offset + len, result.value);
            len += result.len;
            err.errorClass = result.value;
            result = decodeTagNumberAndValue(buffer, offset + len);
            len += result.len;
            result = decodeEnumerated(buffer, offset + len, result.value);
            len += result.len;
            err.errorCode = result.value;
            if (!decodeIsClosingTagNumber(buffer, offset + len, 5)) return;
            len++;
            newEntry.value = {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ERROR,
                value: err
            };
        }
        values.push(newEntry);
    }
    value.values = values;
    return {
        len: len,
        value: value
    };
};
var decodeSigned = module.exports.decodeSigned = function(buffer, offset, length) {
    return {
        len: length,
        value: buffer.readIntBE(offset, length, true)
    };
};
var decodeReal = module.exports.decodeReal = function(buffer, offset) {
    return {
        len: 4,
        value: buffer.readFloatBE(offset, true)
    };
};
var decodeRealSafe = function(buffer, offset, lenValue) {
    if (lenValue !== 4) return {
        len: lenValue,
        value: 0
    };
    else return decodeReal(buffer, offset);
};
var decodeDouble = function(buffer, offset) {
    return {
        len: 8,
        value: buffer.readDoubleBE(offset, true)
    };
};
var decodeDoubleSafe = function(buffer, offset, lenValue) {
    if (lenValue !== 8) return {
        len: lenValue,
        value: 0
    };
    else return decodeDouble(buffer, offset);
};
var decodeOctetString = function(buffer, offset, maxLength, octetStringOffset, octetStringLength) {
    var octetString = [];
    for(var i = octetStringOffset; i < octetStringOffset + octetStringLength; i++)octetString.push(buffer[offset + i]);
    return {
        len: octetStringLength,
        value: octetString
    };
};
var decodeContextOctetString = function(buffer, offset, maxLength, tagNumber, octetString, octetStringOffset) {
    if (decodeIsContextTag(buffer, offset, tagNumber)) {
        var result = decodeTagNumberAndValue(buffer, offset);
        return {
            len: result.lenValue + result.len,
            value: Buffer.from(buffer.slice(offset, result.lenValue))
        };
    } else return;
};
var multiCharsetCharacterstringDecode = function(buffer, offset, maxLength, encoding, length) {
    var stringBuf = Buffer.alloc(length);
    buffer.copy(stringBuf, 0, offset, offset + length);
    return {
        value: iconv.decode(stringBuf, getEncodingType(encoding, buffer, offset)),
        len: length + 1,
        encoding: encoding
    };
};
var decodeCharacterString = module.exports.decodeCharacterString = function(buffer, offset, maxLength, lenValue) {
    return multiCharsetCharacterstringDecode(buffer, offset + 1, maxLength, buffer[offset], lenValue - 1);
};
var bitstringSetOctet = function(bitString, index, octet) {
    var status = false;
    if (index < MAX_BITSTRING_BYTES) {
        bitString.value[index] = octet;
        status = true;
    }
    return status;
};
var bitstringSetBitsUsed = function(bitString, bytesUsed, unusedBits) {
    bitString.bitsUsed = bytesUsed * 8;
    bitString.bitsUsed -= unusedBits;
};
var decodeBitstring = module.exports.decodeBitstring = function(buffer, offset, lenValue) {
    var len = 0;
    var bitString = {};
    bitString.value = [];
    if (lenValue > 0) {
        var bytesUsed = lenValue - 1;
        if (bytesUsed <= MAX_BITSTRING_BYTES) {
            len = 1;
            for(var i = 0; i < bytesUsed; i++)bitString.value.push(byteReverseBits(buffer[offset + len++]));
            var unusedBits = buffer[offset] & 0x07;
            bitstringSetBitsUsed(bitString, bytesUsed, unusedBits);
        }
    }
    return {
        len: len,
        value: bitString
    };
};
var decodeDate = module.exports.decodeDate = function(buffer, offset) {
    var date;
    var year = buffer[offset] + 1900;
    var month = buffer[offset + 1];
    var day = buffer[offset + 2];
    var wday = buffer[offset + 3];
    if (month === 0xFF && day === 0xFF && wday === 0xFF && year - 1900 === 0xFF) date = new Date(1, 1, 1);
    else date = new Date(year, month, day);
    return {
        len: 4,
        value: date
    };
};
var decodeDateSafe = function(buffer, offset, lenValue) {
    if (lenValue !== 4) return {
        len: lenValue,
        value: new Date(1, 1, 1)
    };
    else return decodeDate(buffer, offset);
};
var decodeApplicationDate = module.exports.decodeApplicationDate = function(buffer, offset) {
    var result = decodeTagNumber(buffer, offset);
    if (result.tagNumber === baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE) {
        var value = decodeDate(buffer, offset + 1);
        return {
            len: value.len + 1,
            value: value
        };
    } else return;
};
var decodeBacnetTime = module.exports.decodeBacnetTime = function(buffer, offset) {
    var value;
    var hour = buffer[offset + 0];
    var min = buffer[offset + 1];
    var sec = buffer[offset + 2];
    var hundredths = buffer[offset + 3];
    if (hour === 0xFF && min === 0xFF && sec === 0xFF && hundredths === 0xFF) value = new Date(1, 1, 1);
    else {
        if (hundredths > 100) hundredths = 0;
        value = new Date(1, 1, 1, hour, min, sec, hundredths * 10);
    }
    return {
        len: 4,
        value: value
    };
};
var decodeBacnetTimeSafe = function(buffer, offset, lenValue) {
    if (lenValue !== 4) return {
        len: lenValue,
        value: new Date(1, 1, 1)
    };
    else return decodeBacnetTime(buffer, offset);
};
var decodeApplicationTime = module.exports.decodeApplicationTime = function(buffer, offset) {
    var result = decodeTagNumber(buffer, offset);
    if (result.tagNumber === baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME) {
        var value = decodeBacnetTime(buffer, offset + 1);
        return {
            len: value.len + 1,
            value: value
        };
    } else return;
};
var decodeBacnetDatetime = function(buffer, offset) {
    var len = 0;
    var date = decodeApplicationDate(buffer, offset + len);
    len += date.len;
    var time = decodeApplicationTime(buffer, offset + len);
    len += time.len;
    return {
        len: len,
        value: new Date(date.year, date.month, date.day, time.hour, time.minute, time.second, time.millisecond)
    };
};
var bacappDecodeData = function(buffer, offset, maxLength, tagDataType, lenValueType) {
    var result;
    var value = {
        len: 0,
        type: tagDataType
    };
    switch(tagDataType){
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_NULL:
            value.value = null;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN:
            value.value = lenValueType > 0 ? true : false;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT:
            result = decodeUnsigned(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_SIGNED_INT:
            result = decodeSigned(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_REAL:
            result = decodeRealSafe(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DOUBLE:
            result = decodeDoubleSafe(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING:
            result = decodeOctetString(buffer, offset, maxLength, 0, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CHARACTER_STRING:
            result = decodeCharacterString(buffer, offset, maxLength, lenValueType);
            value.len += result.len;
            value.value = result.value;
            value.encoding = result.encoding;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BIT_STRING:
            result = decodeBitstring(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED:
            result = decodeEnumerated(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_DATE:
            result = decodeDateSafe(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIME:
            result = decodeBacnetTimeSafe(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = result.value;
            break;
        case baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID:
            result = decodeObjectIdSafe(buffer, offset, lenValueType);
            value.len += result.len;
            value.value = {
                type: result.objectType,
                instance: result.instance
            };
            break;
        default:
            break;
    }
    return value;
};
var bacappContextTagType = function(property, tagNumber) {
    var tag = baEnum.ApplicationTags.MAX_BACNET_APPLICATION_TAG;
    switch(property){
        case baEnum.PropertyIds.PROP_ACTUAL_SHED_LEVEL:
        case baEnum.PropertyIds.PROP_REQUESTED_SHED_LEVEL:
        case baEnum.PropertyIds.PROP_EXPECTED_SHED_LEVEL:
            switch(tagNumber){
                case 0:
                case 1:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT;
                    break;
                case 2:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_REAL;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_ACTION:
            switch(tagNumber){
                case 0:
                case 1:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                case 2:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED;
                    break;
                case 3:
                case 5:
                case 6:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT;
                    break;
                case 7:
                case 8:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_LIST_OF_GROUP_MEMBERS:
            switch(tagNumber){
                case 0:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_EXCEPTION_SCHEDULE:
            switch(tagNumber){
                case 1:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                case 3:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_LOG_DEVICE_OBJECT_PROPERTY:
            switch(tagNumber){
                case 0:
                case 3:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                case 1:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_ENUMERATED;
                    break;
                case 2:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_SUBORDINATE_LIST:
            switch(tagNumber){
                case 0:
                case 1:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_RECIPIENT_LIST:
            switch(tagNumber){
                case 0:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_ID;
                    break;
                default:
                    break;
            }
            break;
        case baEnum.PropertyIds.PROP_ACTIVE_COV_SUBSCRIPTIONS:
            switch(tagNumber){
                case 0:
                case 1:
                    break;
                case 2:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_BOOLEAN;
                    break;
                case 3:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT;
                    break;
                case 4:
                    tag = baEnum.ApplicationTags.BACNET_APPLICATION_TAG_REAL;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return tag;
};
var decodeDeviceObjPropertyRef = function(buffer, offset) {
    var len = 0;
    var arrayIndex = BACNET_ARRAY_ALL;
    if (!decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    var objectId = decodeObjectId(buffer, offset + len);
    len += objectId.len;
    var result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    var id = decodeEnumerated(buffer, offset + len, result.value);
    len += id.len;
    result = decodeTagNumberAndValue(buffer, offset + len);
    if (result.tagNumber === 2) {
        len += result.len;
        arrayIndex = decodeUnsigned(buffer, offset + len, result.value);
        len += arrayIndex.len;
    }
    if (decodeIsContextTag(buffer, offset + len, 3)) {
        if (!isClosingTag(buffer[offset + len])) {
            len++;
            objectId = decodeObjectId(buffer, offset + len);
            len += objectId.len;
        }
    }
    return {
        len: len,
        value: {
            objectId: objectId,
            id: id
        }
    };
};
var decodeReadAccessSpecification = module.exports.decodeReadAccessSpecification = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    if (!decodeIsContextTag(buffer, offset + len, 0)) return;
    len++;
    var decodedValue = decodeObjectId(buffer, offset + len);
    value.objectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    len += decodedValue.len;
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 1)) return;
    len++;
    var propertyIdAndArrayIndex = [];
    while(apduLen - len > 1 && !decodeIsClosingTagNumber(buffer, offset + len, 1)){
        var propertyRef = {};
        if (!isContextSpecific(buffer[offset + len])) return;
        var result = decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== 0) return;
        if (len + result.value >= apduLen) return;
        decodedValue = decodeEnumerated(buffer, offset + len, result.value);
        propertyRef.id = decodedValue.value;
        len += decodedValue.len;
        propertyRef.index = BACNET_ARRAY_ALL;
        if (isContextSpecific(buffer[offset + len]) && !isClosingTag(buffer[offset + len])) {
            var tmp = decodeTagNumberAndValue(buffer, offset + len);
            if (tmp.tagNumber === 1) {
                len += tmp.len;
                if (len + tmp.value >= apduLen) return;
                decodedValue = decodeUnsigned(buffer, offset + len, tmp.value);
                propertyRef.index = decodedValue.value;
                len += decodedValue.len;
            }
        }
        propertyIdAndArrayIndex.push(propertyRef);
    }
    if (!decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
    len++;
    value.properties = propertyIdAndArrayIndex;
    return {
        len: len,
        value: value
    };
};
var decodeCovSubscription = function(buffer, offset, apduLen) {
    var len = 0;
    var value = {};
    var result;
    var decodedValue;
    value.recipient = {};
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 0)) return;
    len++;
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 0)) return;
    len++;
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 1)) return;
    len++;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT) return;
    decodedValue = decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.recipient.net = decodedValue.value;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OCTET_STRING) return;
    decodedValue = decodeOctetString(buffer, offset + len, apduLen, 0, result.value);
    len += decodedValue.len;
    value.recipient.adr = decodedValue.value;
    if (!decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
    len++;
    if (!decodeIsClosingTagNumber(buffer, offset + len, 0)) return;
    len++;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.subscriptionProcessId = decodedValue.value;
    if (!decodeIsClosingTagNumber(buffer, offset + len, 0)) return;
    len++;
    if (!decodeIsOpeningTagNumber(buffer, offset + len, 1)) return;
    len++;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 0) return;
    decodedValue = decodeObjectId(buffer, offset + len);
    len += decodedValue.len;
    value.monitoredObjectId = {
        type: decodedValue.objectType,
        instance: decodedValue.instance
    };
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 1) return;
    decodedValue = decodeEnumerated(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.monitoredProperty = {};
    value.monitoredProperty.id = decodedValue.value;
    result = decodeTagNumberAndValue(buffer, offset + len);
    if (result.tagNumber === 2) {
        len += result.len;
        decodedValue = decodeUnsigned(buffer, offset + len, result.value);
        len += decodedValue.len;
        value.monitoredProperty.index = decodedValue.value;
    } else value.monitoredProperty.index = BACNET_ARRAY_ALL;
    if (!decodeIsClosingTagNumber(buffer, offset + len, 1)) return;
    len++;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 2) return;
    value.issueConfirmedNotifications = buffer[offset + len] > 0 ? true : false;
    len++;
    result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    if (result.tagNumber !== 3) return;
    decodedValue = decodeUnsigned(buffer, offset + len, result.value);
    len += decodedValue.len;
    value.timeRemaining = decodedValue.value;
    if (len < apduLen && !isClosingTag(buffer[offset + len])) {
        result = decodeTagNumberAndValue(buffer, offset + len);
        len += result.len;
        if (result.tagNumber !== 4) return;
        decodedValue = decodeReal(buffer, offset + len);
        len += decodedValue.len;
        value.covIncrement = decodedValue.value;
    }
    return {
        len: len,
        value: value
    };
};
var decodeCalendarDate = function(buffer, offset) {
    return {
        len: 4,
        year: buffer[offset],
        month: buffer[offset + 1],
        day: buffer[offset + 2],
        wday: buffer[offset + 3]
    };
};
var decodeCalendarDateRange = function(buffer, offset) {
    var len = 1;
    var startDate = decodeDate(buffer, offset + len);
    len += startDate.len + 1;
    var endDate = decodeDate(buffer, offset + len);
    len += endDate.len + 1;
    return {
        len: len,
        startDate: startDate,
        endDate: endDate
    };
};
var decodeCalendarWeekDay = function(buffer, offset) {
    return {
        len: 3,
        month: buffer[offset],
        week: buffer[offset + 1],
        wday: buffer[offset + 2]
    };
};
var decodeCalendar = function(buffer, offset, apduLen) {
    var len = 0;
    var entries = [];
    var decodedValue;
    while(len < apduLen){
        var result = decodeTagNumber(buffer, offset + len);
        len += result.len;
        switch(result.tagNumber){
            case 0:
                decodedValue = decodeCalendarDate(buffer, offset + len);
                len += decodedValue.len;
                entries.push(decodedValue);
                break;
            case 1:
                decodedValue = decodeCalendarDateRange(buffer, offset + len);
                len += decodedValue.len;
                entries.push(decodedValue);
                break;
            case 2:
                decodedValue = decodeCalendarWeekDay(buffer, offset + len);
                len += decodedValue.len;
                entries.push(decodedValue);
                break;
            default:
                return {
                    len: len - 1,
                    value: entries
                };
        }
    }
};
var bacappDecodeContextApplicationData = function(buffer, offset, maxOffset, objectType, propertyId) {
    var len = 0;
    var result;
    if (isContextSpecific(buffer[offset])) {
        if (propertyId === baEnum.PropertyIds.PROP_LIST_OF_GROUP_MEMBERS) {
            result = decodeReadAccessSpecification(buffer, offset, maxOffset);
            if (!result) return;
            return {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_READ_ACCESS_SPECIFICATION,
                value: result.value,
                len: result.len
            };
        } else if (propertyId === baEnum.PropertyIds.PROP_ACTIVE_COV_SUBSCRIPTIONS) {
            result = decodeCovSubscription(buffer, offset, maxOffset);
            if (!result) return;
            return {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_COV_SUBSCRIPTION,
                value: result.value,
                len: result.len
            };
        } else if (objectType === baEnum.ObjectTypes.OBJECT_GROUP && propertyId === baEnum.acnetPropertyIds.PROP_PRESENT_VALUE) {
            result = decodeReadAccessResult(buffer, offset, maxOffset);
            if (!result) return;
            return {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_READ_ACCESS_RESULT,
                value: result.value,
                len: result.len
            };
        } else if (propertyId === baEnum.PropertyIds.PROP_LIST_OF_OBJECT_PROPERTY_REFERENCES || propertyId === baEnum.PropertyIds.PROP_LOG_DEVICE_OBJECT_PROPERTY || propertyId === baEnum.PropertyIds.PROP_OBJECT_PROPERTY_REFERENCE) {
            result = decodeDeviceObjPropertyRef(buffer, offset, maxOffset);
            if (!result) return;
            return {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_OBJECT_PROPERTY_REFERENCE,
                value: result.value,
                len: result.len
            };
        } else if (propertyId === baEnum.PropertyIds.PROP_DATE_LIST) {
            result = decodeCalendar(buffer, offset, maxOffset);
            if (!result) return;
            return {
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_DECODED,
                value: result.value,
                len: result.len
            };
        } else if (propertyId === baEnum.PropertyIds.PROP_EVENT_TIME_STAMPS) {
            var subEvtResult;
            var evtResult = decodeTagNumberAndValue(buffer, offset + len);
            len += 1;
            if (evtResult.tagNumber === 0) {
                subEvtResult = decodeBacnetTime(buffer, offset + 1);
                return {
                    type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIMESTAMP,
                    value: subEvtResult.value,
                    len: subEvtResult.len + 1
                };
            } else if (evtResult.tagNumber === 1) {
                subEvtResult = decodeUnsigned(buffer, offset + len, evtResult.value);
                return {
                    type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_UNSIGNED_INT,
                    value: subEvtResult.value,
                    len: subEvtResult.len + 1
                };
            } else if (evtResult.tagNumber === 2) {
                subEvtResult = decodeBacnetDatetime(buffer, offset + len);
                return {
                    type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_TIMESTAMP,
                    value: subEvtResult.value,
                    len: subEvtResult.len + 2
                };
            } else return;
        }
        var list = [];
        var tagResult = decodeTagNumberAndValue(buffer, offset + len);
        var multipleValues = isOpeningTag(buffer[offset + len]);
        while(len + offset <= maxOffset && !isClosingTag(buffer[offset + len])){
            var subResult = decodeTagNumberAndValue(buffer, offset + len);
            if (!subResult) return;
            if (subResult.value === 0) {
                len += subResult.len;
                result = bacappDecodeApplicationData(buffer, offset + len, maxOffset, baEnum.ObjectTypes.MAX_BACNET_OBJECT_TYPE, baEnum.PropertyIds.MAX_BACNET_PROPERTY_ID);
                if (!result) return;
                list.push(result);
                len += result.len;
            } else {
                var overrideTagNumber = bacappContextTagType(propertyId, subResult.tagNumber);
                if (overrideTagNumber !== baEnum.ApplicationTags.MAX_BACNET_APPLICATION_TAG) subResult.tagNumber = overrideTagNumber;
                var bacappResult = bacappDecodeData(buffer, offset + len + subResult.len, maxOffset, subResult.tagNumber, subResult.value);
                if (!bacappResult) return;
                if (bacappResult.len === subResult.value) {
                    var resObj = {
                        value: bacappResult.value,
                        type: bacappResult.type
                    };
                    // HACK: Drop string specific handling ASAP
                    if (bacappResult.encoding !== undefined) resObj.encoding = bacappResult.encoding;
                    list.push(resObj);
                    len += subResult.len + subResult.value;
                } else {
                    list.push({
                        value: buffer.slice(offset + len + subResult.len, offset + len + subResult.len + subResult.value),
                        type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_ENCODED
                    });
                    len += subResult.len + subResult.value;
                }
            }
            if (multipleValues === false) return {
                len: len,
                value: list[0],
                type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_DECODED
            };
        }
        if (len + offset > maxOffset) return;
        if (decodeIsClosingTagNumber(buffer, offset + len, tagResult.tagNumber)) len++;
        return {
            len: len,
            value: list,
            type: baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_DECODED
        };
    } else return;
};
var bacappEncodeTimestamp = function(buffer, value) {
    switch(value.type){
        case baEnum.TimestampTags.TIME_STAMP_TIME:
            encodeContextTime(buffer, 0, value.value);
            break;
        case baEnum.TimestampTags.TIME_STAMP_SEQUENCE:
            encodeContextUnsigned(buffer, 1, value.value);
            break;
        case baEnum.TimestampTags.TIME_STAMP_DATETIME:
            bacappEncodeContextDatetime(buffer, 2, value.value);
            break;
        case baEnum.TimestampTags.TIME_STAMP_NONE:
            break;
        default:
            throw new Error("NOT_IMPLEMENTED");
    }
};
var bacappEncodeContextTimestamp = module.exports.bacappEncodeContextTimestamp = function(buffer, tagNumber, value) {
    if (value.type !== baEnum.TimestampTags.TIME_STAMP_NONE) {
        encodeOpeningTag(buffer, tagNumber);
        bacappEncodeTimestamp(buffer, value);
        encodeClosingTag(buffer, tagNumber);
    }
};
var decodeContextCharacterString = module.exports.decodeContextCharacterString = function(buffer, offset, maxLength, tagNumber) {
    var len = 0;
    if (!decodeIsContextTag(buffer, offset + len, tagNumber)) return;
    var result = decodeTagNumberAndValue(buffer, offset + len);
    len += result.len;
    var decodedValue = multiCharsetCharacterstringDecode(buffer, offset + 1 + len, maxLength, buffer[offset + len], result.value - 1);
    if (!decodedValue) return;
    len += result.value;
    return {
        len: len,
        value: decodedValue.value,
        encoding: decodedValue.encoding
    };
};
var decodeIsContextTagWithLength = function(buffer, offset, tagNumber) {
    var result = decodeTagNumber(buffer, offset);
    return {
        len: result.len,
        value: isContextSpecific(buffer[offset]) && result.tagNumber === tagNumber
    };
};
var decodeContextBacnetTime = function(buffer, offset, tagNumber) {
    var result = decodeIsContextTagWithLength(buffer, offset, tagNumber);
    if (!result.value) return;
    var decodedValue = decodeBacnetTime(buffer, offset + result.len);
    return {
        len: result.len + decodedValue.len,
        value: decodedValue.value
    };
};
var decodeContextDate = function(buffer, offset, tagNumber) {
    var result = decodeIsContextTagWithLength(buffer, offset, tagNumber);
    if (!result.value) return;
    var decodedValue = decodeDate(buffer, offset + result.len);
    return {
        len: result.len + decodedValue.len,
        value: decodedValue.value
    };
};
module.exports.decodeContextObjectId = function(buffer, offset, tagNumber) {
    var result = decodeIsContextTagWithLength(buffer, offset, tagNumber);
    if (!result.value) return;
    var decodedValue = decodeObjectId(buffer, offset + result.len);
    decodedValue.len = decodedValue.len + result.len;
    return decodedValue;
};
var bacappDecodeContextData = function(buffer, offset, maxApduLen, propertyTag) {
    var len = 0;
    var decodedValue;
    if (isContextSpecific(buffer[offset])) {
        var result = decodeTagNumberAndValue(buffer, offset);
        len = result.len;
        if (len > 0 && len <= maxApduLen && !decodeIsClosingTagNumber(buffer, offset + len, result.tagNumber)) {
            if (propertyTag < baEnum.ApplicationTags.MAX_BACNET_APPLICATION_TAG) {
                decodedValue = bacappDecodeData(buffer, offset + len, maxApduLen, propertyTag, result.value);
                len += decodedValue.len;
            } else if (result.value > 0) len += result.value;
            else return;
        } else if (len === 1) len = 0;
    }
    return {
        len: len,
        value: decodedValue ? decodedValue.value : decodedValue
    };
};
var encodeBacnetCharacterString = function(buffer, value, encoding) {
    encoding = encoding || baEnum.CharacterStringEncodings.CHARACTER_UTF8;
    buffer.buffer[buffer.offset++] = encoding;
    var bufEncoded = iconv.encode(value, getEncodingType(encoding));
    buffer.offset += bufEncoded.copy(buffer.buffer, buffer.offset);
};
var encodeApplicationCharacterString = module.exports.encodeApplicationCharacterString = function(buffer, value, encoding) {
    var tmp = getBuffer();
    encodeBacnetCharacterString(tmp, value, encoding);
    encodeTag(buffer, baEnum.ApplicationTags.BACNET_APPLICATION_TAG_CHARACTER_STRING, false, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};
var encodeContextCharacterString = module.exports.encodeContextCharacterString = function(buffer, tagNumber, value, encoding) {
    var tmp = getBuffer();
    encodeBacnetCharacterString(tmp, value, encoding);
    encodeTag(buffer, tagNumber, true, tmp.offset);
    tmp.buffer.copy(buffer.buffer, buffer.offset, 0, tmp.offset);
    buffer.offset += tmp.offset;
};

},{"4e7b2ffbd18ed059":"fCgem","57043c76cf858d1":"iC7RY","40ee01600a4020ec":"8k57N"}],"iC7RY":[function(require,module,exports) {
var process = require("4dc0af2679c6768c");
"use strict";
// Some environments don't have global Buffer (e.g. React Native).
// Solution would be installing npm modules "buffer" and "stream" explicitly.
var Buffer = require("d59043c74995af48").Buffer;
var bomHandling = require("dc2ac0bf59105a0e"), iconv = module.exports;
// All codecs and aliases are kept here, keyed by encoding name/alias.
// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
iconv.encodings = null;
// Characters emitted in case of error.
iconv.defaultCharUnicode = "�";
iconv.defaultCharSingleByte = "?";
// Public API.
iconv.encode = function encode(str, encoding, options) {
    str = "" + (str || ""); // Ensure string.
    var encoder = iconv.getEncoder(encoding, options);
    var res = encoder.write(str);
    var trail = encoder.end();
    return trail && trail.length > 0 ? Buffer.concat([
        res,
        trail
    ]) : res;
};
iconv.decode = function decode(buf, encoding, options) {
    if (typeof buf === "string") {
        if (!iconv.skipDecodeWarning) {
            console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding");
            iconv.skipDecodeWarning = true;
        }
        buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
    }
    var decoder = iconv.getDecoder(encoding, options);
    var res = decoder.write(buf);
    var trail = decoder.end();
    return trail ? res + trail : res;
};
iconv.encodingExists = function encodingExists(enc) {
    try {
        iconv.getCodec(enc);
        return true;
    } catch (e) {
        return false;
    }
};
// Legacy aliases to convert functions
iconv.toEncoding = iconv.encode;
iconv.fromEncoding = iconv.decode;
// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
iconv._codecDataCache = {};
iconv.getCodec = function getCodec(encoding) {
    if (!iconv.encodings) iconv.encodings = require("be03e21360668db1"); // Lazy load all encoding definitions.
    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
    var enc = iconv._canonicalizeEncoding(encoding);
    // Traverse iconv.encodings to find actual codec.
    var codecOptions = {};
    while(true){
        var codec = iconv._codecDataCache[enc];
        if (codec) return codec;
        var codecDef = iconv.encodings[enc];
        switch(typeof codecDef){
            case "string":
                enc = codecDef;
                break;
            case "object":
                for(var key in codecDef)codecOptions[key] = codecDef[key];
                if (!codecOptions.encodingName) codecOptions.encodingName = enc;
                enc = codecDef.type;
                break;
            case "function":
                if (!codecOptions.encodingName) codecOptions.encodingName = enc;
                // The codec function must load all tables and return object with .encoder and .decoder methods.
                // It'll be called only once (for each different options object).
                codec = new codecDef(codecOptions, iconv);
                iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
                return codec;
            default:
                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')");
        }
    }
};
iconv._canonicalizeEncoding = function(encoding) {
    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
    return ("" + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
};
iconv.getEncoder = function getEncoder(encoding, options) {
    var codec = iconv.getCodec(encoding), encoder = new codec.encoder(options, codec);
    if (codec.bomAware && options && options.addBOM) encoder = new bomHandling.PrependBOM(encoder, options);
    return encoder;
};
iconv.getDecoder = function getDecoder(encoding, options) {
    var codec = iconv.getCodec(encoding), decoder = new codec.decoder(options, codec);
    if (codec.bomAware && !(options && options.stripBOM === false)) decoder = new bomHandling.StripBOM(decoder, options);
    return decoder;
};
// Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.
var nodeVer = typeof process !== "undefined" && process.versions && process.versions.node;
if (nodeVer) {
    // Load streaming support in Node v0.10+
    var nodeVerArr = nodeVer.split(".").map(Number);
    if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) require("907a3f89ffdb20ae")(iconv);
    // Load Node primitive extensions.
    require("6d1acbc3401da2d6")(iconv);
}

},{"4dc0af2679c6768c":"d5jf4","d59043c74995af48":"aLyFx","dc2ac0bf59105a0e":"k3F4d","be03e21360668db1":"bdhVX","907a3f89ffdb20ae":"jhUEF","6d1acbc3401da2d6":"jhUEF"}],"aLyFx":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var process = require("e7af3484edf6bee9");
"use strict";
var buffer = require("9b1fd4bf3515d7a6");
var Buffer = buffer.Buffer;
var safer = {};
var key;
for(key in buffer){
    if (!buffer.hasOwnProperty(key)) continue;
    if (key === "SlowBuffer" || key === "Buffer") continue;
    safer[key] = buffer[key];
}
var Safer = safer.Buffer = {};
for(key in Buffer){
    if (!Buffer.hasOwnProperty(key)) continue;
    if (key === "allocUnsafe" || key === "allocUnsafeSlow") continue;
    Safer[key] = Buffer[key];
}
safer.Buffer.prototype = Buffer.prototype;
if (!Safer.from || Safer.from === Uint8Array.from) Safer.from = function(value, encodingOrOffset, length) {
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
    if (value && typeof value.length === "undefined") throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    return Buffer(value, encodingOrOffset, length);
};
if (!Safer.alloc) Safer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
    if (size < 0 || size >= 2 * 1073741824) throw new RangeError('The value "' + size + '" is invalid for option "size"');
    var buf = Buffer(size);
    if (!fill || fill.length === 0) buf.fill(0);
    else if (typeof encoding === "string") buf.fill(fill, encoding);
    else buf.fill(fill);
    return buf;
};
if (!safer.kStringMaxLength) try {
    safer.kStringMaxLength = process.binding("buffer").kStringMaxLength;
} catch (e) {
// we can't determine kStringMaxLength in environments where process.binding
// is unsupported, so let's not set it
}
if (!safer.constants) {
    safer.constants = {
        MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
}
module.exports = safer;

},{"e7af3484edf6bee9":"d5jf4","9b1fd4bf3515d7a6":"fCgem"}],"k3F4d":[function(require,module,exports) {
"use strict";
var BOMChar = "\uFEFF";
exports.PrependBOM = PrependBOMWrapper;
function PrependBOMWrapper(encoder, options) {
    this.encoder = encoder;
    this.addBOM = true;
}
PrependBOMWrapper.prototype.write = function(str) {
    if (this.addBOM) {
        str = BOMChar + str;
        this.addBOM = false;
    }
    return this.encoder.write(str);
};
PrependBOMWrapper.prototype.end = function() {
    return this.encoder.end();
};
//------------------------------------------------------------------------------
exports.StripBOM = StripBOMWrapper;
function StripBOMWrapper(decoder, options) {
    this.decoder = decoder;
    this.pass = false;
    this.options = options || {};
}
StripBOMWrapper.prototype.write = function(buf) {
    var res = this.decoder.write(buf);
    if (this.pass || !res) return res;
    if (res[0] === BOMChar) {
        res = res.slice(1);
        if (typeof this.options.stripBOM === "function") this.options.stripBOM();
    }
    this.pass = true;
    return res;
};
StripBOMWrapper.prototype.end = function() {
    return this.decoder.end();
};

},{}],"bdhVX":[function(require,module,exports) {
"use strict";
// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
    require("bdaa557df13ed604"),
    require("fd3dc965fc8aca3f"),
    require("eef39a6572ec0e16"),
    require("db74ee6b9422868a"),
    require("8a20a6a175d74380"),
    require("e647804c36d26de7"),
    require("1447d5a4b8fe2b16"),
    require("87cdd8efe5f0a905")
];
// Put all encoding/alias/codec definitions to single object and export it. 
for(var i = 0; i < modules.length; i++){
    var module = modules[i];
    for(var enc in module)if (Object.prototype.hasOwnProperty.call(module, enc)) exports[enc] = module[enc];
}

},{"bdaa557df13ed604":"6q19R","fd3dc965fc8aca3f":"1NP4Z","eef39a6572ec0e16":"eVC1e","db74ee6b9422868a":"argxk","8a20a6a175d74380":"iJnRB","e647804c36d26de7":"lrx6z","1447d5a4b8fe2b16":"6U9s4","87cdd8efe5f0a905":"82IIr"}],"6q19R":[function(require,module,exports) {
"use strict";
var Buffer = require("b2563c082b744514").Buffer;
// Export Node.js internal encodings.
module.exports = {
    // Encodings
    utf8: {
        type: "_internal",
        bomAware: true
    },
    cesu8: {
        type: "_internal",
        bomAware: true
    },
    unicode11utf8: "utf8",
    ucs2: {
        type: "_internal",
        bomAware: true
    },
    utf16le: "ucs2",
    binary: {
        type: "_internal"
    },
    base64: {
        type: "_internal"
    },
    hex: {
        type: "_internal"
    },
    // Codec.
    _internal: InternalCodec
};
//------------------------------------------------------------------------------
function InternalCodec(codecOptions, iconv) {
    this.enc = codecOptions.encodingName;
    this.bomAware = codecOptions.bomAware;
    if (this.enc === "base64") this.encoder = InternalEncoderBase64;
    else if (this.enc === "cesu8") {
        this.enc = "utf8"; // Use utf8 for decoding.
        this.encoder = InternalEncoderCesu8;
        // Add decoder for versions of Node not supporting CESU-8
        if (Buffer.from("eda0bdedb2a9", "hex").toString() !== "\uD83D\uDCA9") {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv.defaultCharUnicode;
        }
    }
}
InternalCodec.prototype.encoder = InternalEncoder;
InternalCodec.prototype.decoder = InternalDecoder;
//------------------------------------------------------------------------------
// We use node.js internal decoder. Its signature is the same as ours.
var StringDecoder = require("912b463ef1262b9c").StringDecoder;
if (!StringDecoder.prototype.end) StringDecoder.prototype.end = function() {};
function InternalDecoder(options, codec) {
    StringDecoder.call(this, codec.enc);
}
InternalDecoder.prototype = StringDecoder.prototype;
//------------------------------------------------------------------------------
// Encoder is mostly trivial
function InternalEncoder(options, codec) {
    this.enc = codec.enc;
}
InternalEncoder.prototype.write = function(str) {
    return Buffer.from(str, this.enc);
};
InternalEncoder.prototype.end = function() {};
//------------------------------------------------------------------------------
// Except base64 encoder, which must keep its state.
function InternalEncoderBase64(options, codec) {
    this.prevStr = "";
}
InternalEncoderBase64.prototype.write = function(str) {
    str = this.prevStr + str;
    var completeQuads = str.length - str.length % 4;
    this.prevStr = str.slice(completeQuads);
    str = str.slice(0, completeQuads);
    return Buffer.from(str, "base64");
};
InternalEncoderBase64.prototype.end = function() {
    return Buffer.from(this.prevStr, "base64");
};
//------------------------------------------------------------------------------
// CESU-8 encoder is also special.
function InternalEncoderCesu8(options, codec) {}
InternalEncoderCesu8.prototype.write = function(str) {
    var buf = Buffer.alloc(str.length * 3), bufIdx = 0;
    for(var i = 0; i < str.length; i++){
        var charCode = str.charCodeAt(i);
        // Naive implementation, but it works because CESU-8 is especially easy
        // to convert from UTF-16 (which all JS strings are encoded in).
        if (charCode < 0x80) buf[bufIdx++] = charCode;
        else if (charCode < 0x800) {
            buf[bufIdx++] = 0xC0 + (charCode >>> 6);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        } else {
            buf[bufIdx++] = 0xE0 + (charCode >>> 12);
            buf[bufIdx++] = 0x80 + (charCode >>> 6 & 0x3f);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        }
    }
    return buf.slice(0, bufIdx);
};
InternalEncoderCesu8.prototype.end = function() {};
//------------------------------------------------------------------------------
// CESU-8 decoder is not implemented in Node v4.0+
function InternalDecoderCesu8(options, codec) {
    this.acc = 0;
    this.contBytes = 0;
    this.accBytes = 0;
    this.defaultCharUnicode = codec.defaultCharUnicode;
}
InternalDecoderCesu8.prototype.write = function(buf) {
    var acc = this.acc, contBytes = this.contBytes, accBytes = this.accBytes, res = "";
    for(var i = 0; i < buf.length; i++){
        var curByte = buf[i];
        if ((curByte & 0xC0) !== 0x80) {
            if (contBytes > 0) {
                res += this.defaultCharUnicode;
                contBytes = 0;
            }
            if (curByte < 0x80) res += String.fromCharCode(curByte);
            else if (curByte < 0xE0) {
                acc = curByte & 0x1F;
                contBytes = 1;
                accBytes = 1;
            } else if (curByte < 0xF0) {
                acc = curByte & 0x0F;
                contBytes = 2;
                accBytes = 1;
            } else res += this.defaultCharUnicode;
        } else if (contBytes > 0) {
            acc = acc << 6 | curByte & 0x3f;
            contBytes--;
            accBytes++;
            if (contBytes === 0) {
                // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                if (accBytes === 2 && acc < 0x80 && acc > 0) res += this.defaultCharUnicode;
                else if (accBytes === 3 && acc < 0x800) res += this.defaultCharUnicode;
                else // Actually add character.
                res += String.fromCharCode(acc);
            }
        } else res += this.defaultCharUnicode;
    }
    this.acc = acc;
    this.contBytes = contBytes;
    this.accBytes = accBytes;
    return res;
};
InternalDecoderCesu8.prototype.end = function() {
    var res = 0;
    if (this.contBytes > 0) res += this.defaultCharUnicode;
    return res;
};

},{"b2563c082b744514":"aLyFx","912b463ef1262b9c":"3vmkr"}],"3vmkr":[function(require,module,exports) {
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
"use strict";
/*<replacement>*/ var Buffer = require("2a29807c689a070a").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
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
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
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
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
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
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
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
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
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
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

},{"2a29807c689a070a":"gObOt"}],"gObOt":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require("e514375b8bd1a829");
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
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return buffer.SlowBuffer(size);
};

},{"e514375b8bd1a829":"fCgem"}],"1NP4Z":[function(require,module,exports) {
"use strict";
var Buffer = require("8456d24d7088f48").Buffer;
// Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js
// == UTF16-BE codec. ==========================================================
exports.utf16be = Utf16BECodec;
function Utf16BECodec() {}
Utf16BECodec.prototype.encoder = Utf16BEEncoder;
Utf16BECodec.prototype.decoder = Utf16BEDecoder;
Utf16BECodec.prototype.bomAware = true;
// -- Encoding
function Utf16BEEncoder() {}
Utf16BEEncoder.prototype.write = function(str) {
    var buf = Buffer.from(str, "ucs2");
    for(var i = 0; i < buf.length; i += 2){
        var tmp = buf[i];
        buf[i] = buf[i + 1];
        buf[i + 1] = tmp;
    }
    return buf;
};
Utf16BEEncoder.prototype.end = function() {};
// -- Decoding
function Utf16BEDecoder() {
    this.overflowByte = -1;
}
Utf16BEDecoder.prototype.write = function(buf) {
    if (buf.length == 0) return "";
    var buf2 = Buffer.alloc(buf.length + 1), i = 0, j = 0;
    if (this.overflowByte !== -1) {
        buf2[0] = buf[0];
        buf2[1] = this.overflowByte;
        i = 1;
        j = 2;
    }
    for(; i < buf.length - 1; i += 2, j += 2){
        buf2[j] = buf[i + 1];
        buf2[j + 1] = buf[i];
    }
    this.overflowByte = i == buf.length - 1 ? buf[buf.length - 1] : -1;
    return buf2.slice(0, j).toString("ucs2");
};
Utf16BEDecoder.prototype.end = function() {};
// == UTF-16 codec =============================================================
// Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
// Defaults to UTF-16LE, as it's prevalent and default in Node.
// http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
// Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});
// Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).
exports.utf16 = Utf16Codec;
function Utf16Codec(codecOptions, iconv) {
    this.iconv = iconv;
}
Utf16Codec.prototype.encoder = Utf16Encoder;
Utf16Codec.prototype.decoder = Utf16Decoder;
// -- Encoding (pass-through)
function Utf16Encoder(options, codec) {
    options = options || {};
    if (options.addBOM === undefined) options.addBOM = true;
    this.encoder = codec.iconv.getEncoder("utf-16le", options);
}
Utf16Encoder.prototype.write = function(str) {
    return this.encoder.write(str);
};
Utf16Encoder.prototype.end = function() {
    return this.encoder.end();
};
// -- Decoding
function Utf16Decoder(options, codec) {
    this.decoder = null;
    this.initialBytes = [];
    this.initialBytesLen = 0;
    this.options = options || {};
    this.iconv = codec.iconv;
}
Utf16Decoder.prototype.write = function(buf) {
    if (!this.decoder) {
        // Codec is not chosen yet. Accumulate initial bytes.
        this.initialBytes.push(buf);
        this.initialBytesLen += buf.length;
        if (this.initialBytesLen < 16) return "";
        // We have enough bytes -> detect endianness.
        var buf = Buffer.concat(this.initialBytes), encoding = detectEncoding(buf, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        this.initialBytes.length = this.initialBytesLen = 0;
    }
    return this.decoder.write(buf);
};
Utf16Decoder.prototype.end = function() {
    if (!this.decoder) {
        var buf = Buffer.concat(this.initialBytes), encoding = detectEncoding(buf, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var res = this.decoder.write(buf), trail = this.decoder.end();
        return trail ? res + trail : res;
    }
    return this.decoder.end();
};
function detectEncoding(buf, defaultEncoding) {
    var enc = defaultEncoding || "utf-16le";
    if (buf.length >= 2) {
        // Check BOM.
        if (buf[0] == 0xFE && buf[1] == 0xFF) enc = "utf-16be";
        else if (buf[0] == 0xFF && buf[1] == 0xFE) enc = "utf-16le";
        else {
            // No BOM found. Try to deduce encoding from initial content.
            // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
            // So, we count ASCII as if it was LE or BE, and decide from that.
            var asciiCharsLE = 0, asciiCharsBE = 0, _len = Math.min(buf.length - buf.length % 2, 64); // Len is always even.
            for(var i = 0; i < _len; i += 2){
                if (buf[i] === 0 && buf[i + 1] !== 0) asciiCharsBE++;
                if (buf[i] !== 0 && buf[i + 1] === 0) asciiCharsLE++;
            }
            if (asciiCharsBE > asciiCharsLE) enc = "utf-16be";
            else if (asciiCharsBE < asciiCharsLE) enc = "utf-16le";
        }
    }
    return enc;
}

},{"8456d24d7088f48":"aLyFx"}],"eVC1e":[function(require,module,exports) {
"use strict";
var Buffer = require("3ed47161966685ce").Buffer;
// UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
// See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3
exports.utf7 = Utf7Codec;
exports.unicode11utf7 = "utf7"; // Alias UNICODE-1-1-UTF-7
function Utf7Codec(codecOptions, iconv) {
    this.iconv = iconv;
}
Utf7Codec.prototype.encoder = Utf7Encoder;
Utf7Codec.prototype.decoder = Utf7Decoder;
Utf7Codec.prototype.bomAware = true;
// -- Encoding
var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
function Utf7Encoder(options, codec) {
    this.iconv = codec.iconv;
}
Utf7Encoder.prototype.write = function(str) {
    // Naive implementation.
    // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
    return Buffer.from(str.replace(nonDirectChars, (function(chunk) {
        return "+" + (chunk === "+" ? "" : this.iconv.encode(chunk, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }).bind(this)));
};
Utf7Encoder.prototype.end = function() {};
// -- Decoding
function Utf7Decoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = "";
}
var base64Regex = /[A-Za-z0-9\/+]/;
var base64Chars = [];
for(var i = 0; i < 256; i++)base64Chars[i] = base64Regex.test(String.fromCharCode(i));
var plusChar = "+".charCodeAt(0), minusChar = "-".charCodeAt(0), andChar = "&".charCodeAt(0);
Utf7Decoder.prototype.write = function(buf) {
    var res = "", lastI = 0, inBase64 = this.inBase64, base64Accum = this.base64Accum;
    // The decoder is more involved as we must handle chunks in stream.
    for(var i = 0; i < buf.length; i++){
        if (!inBase64) // Write direct chars until '+'
        {
            if (buf[i] == plusChar) {
                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                lastI = i + 1;
                inBase64 = true;
            }
        } else if (!base64Chars[buf[i]]) {
            if (i == lastI && buf[i] == minusChar) res += "+";
            else {
                var b64str = base64Accum + buf.slice(lastI, i).toString();
                res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
            }
            if (buf[i] != minusChar) i--;
            lastI = i + 1;
            inBase64 = false;
            base64Accum = "";
        }
    }
    if (!inBase64) res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
    else {
        var b64str = base64Accum + buf.slice(lastI).toString();
        var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
    }
    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;
    return res;
};
Utf7Decoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, "base64"), "utf16-be");
    this.inBase64 = false;
    this.base64Accum = "";
    return res;
};
// UTF-7-IMAP codec.
// RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
// Differences:
//  * Base64 part is started by "&" instead of "+"
//  * Direct characters are 0x20-0x7E, except "&" (0x26)
//  * In Base64, "," is used instead of "/"
//  * Base64 must not be used to represent direct characters.
//  * No implicit shift back from Base64 (should always end with '-')
//  * String must end in non-shifted position.
//  * "-&" while in base64 is not allowed.
exports.utf7imap = Utf7IMAPCodec;
function Utf7IMAPCodec(codecOptions, iconv) {
    this.iconv = iconv;
}
Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
Utf7IMAPCodec.prototype.bomAware = true;
// -- Encoding
function Utf7IMAPEncoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = Buffer.alloc(6);
    this.base64AccumIdx = 0;
}
Utf7IMAPEncoder.prototype.write = function(str) {
    var inBase64 = this.inBase64, base64Accum = this.base64Accum, base64AccumIdx = this.base64AccumIdx, buf = Buffer.alloc(str.length * 5 + 10), bufIdx = 0;
    for(var i = 0; i < str.length; i++){
        var uChar = str.charCodeAt(i);
        if (0x20 <= uChar && uChar <= 0x7E) {
            if (inBase64) {
                if (base64AccumIdx > 0) {
                    bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
                    base64AccumIdx = 0;
                }
                buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
                inBase64 = false;
            }
            if (!inBase64) {
                buf[bufIdx++] = uChar; // Write direct character
                if (uChar === andChar) buf[bufIdx++] = minusChar;
            }
        } else {
            if (!inBase64) {
                buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
                inBase64 = true;
            }
            if (inBase64) {
                base64Accum[base64AccumIdx++] = uChar >> 8;
                base64Accum[base64AccumIdx++] = uChar & 0xFF;
                if (base64AccumIdx == base64Accum.length) {
                    bufIdx += buf.write(base64Accum.toString("base64").replace(/\//g, ","), bufIdx);
                    base64AccumIdx = 0;
                }
            }
        }
    }
    this.inBase64 = inBase64;
    this.base64AccumIdx = base64AccumIdx;
    return buf.slice(0, bufIdx);
};
Utf7IMAPEncoder.prototype.end = function() {
    var buf = Buffer.alloc(10), bufIdx = 0;
    if (this.inBase64) {
        if (this.base64AccumIdx > 0) {
            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
            this.base64AccumIdx = 0;
        }
        buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
        this.inBase64 = false;
    }
    return buf.slice(0, bufIdx);
};
// -- Decoding
function Utf7IMAPDecoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = "";
}
var base64IMAPChars = base64Chars.slice();
base64IMAPChars[",".charCodeAt(0)] = true;
Utf7IMAPDecoder.prototype.write = function(buf) {
    var res = "", lastI = 0, inBase64 = this.inBase64, base64Accum = this.base64Accum;
    // The decoder is more involved as we must handle chunks in stream.
    // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).
    for(var i = 0; i < buf.length; i++){
        if (!inBase64) // Write direct chars until '&'
        {
            if (buf[i] == andChar) {
                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                lastI = i + 1;
                inBase64 = true;
            }
        } else if (!base64IMAPChars[buf[i]]) {
            if (i == lastI && buf[i] == minusChar) res += "&";
            else {
                var b64str = base64Accum + buf.slice(lastI, i).toString().replace(/,/g, "/");
                res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
            }
            if (buf[i] != minusChar) i--;
            lastI = i + 1;
            inBase64 = false;
            base64Accum = "";
        }
    }
    if (!inBase64) res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
    else {
        var b64str = base64Accum + buf.slice(lastI).toString().replace(/,/g, "/");
        var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
    }
    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;
    return res;
};
Utf7IMAPDecoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, "base64"), "utf16-be");
    this.inBase64 = false;
    this.base64Accum = "";
    return res;
};

},{"3ed47161966685ce":"aLyFx"}],"argxk":[function(require,module,exports) {
"use strict";
var Buffer = require("83e04ce10fc2395e").Buffer;
// Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
// correspond to encoded bytes (if 128 - then lower half is ASCII). 
exports._sbcs = SBCSCodec;
function SBCSCodec(codecOptions, iconv) {
    if (!codecOptions) throw new Error("SBCS codec is called without the data.");
    // Prepare char buffer for decoding.
    if (!codecOptions.chars || codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256) throw new Error("Encoding '" + codecOptions.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    if (codecOptions.chars.length === 128) {
        var asciiString = "";
        for(var i = 0; i < 128; i++)asciiString += String.fromCharCode(i);
        codecOptions.chars = asciiString + codecOptions.chars;
    }
    this.decodeBuf = Buffer.from(codecOptions.chars, "ucs2");
    // Encoding buffer.
    var encodeBuf = Buffer.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));
    for(var i = 0; i < codecOptions.chars.length; i++)encodeBuf[codecOptions.chars.charCodeAt(i)] = i;
    this.encodeBuf = encodeBuf;
}
SBCSCodec.prototype.encoder = SBCSEncoder;
SBCSCodec.prototype.decoder = SBCSDecoder;
function SBCSEncoder(options, codec) {
    this.encodeBuf = codec.encodeBuf;
}
SBCSEncoder.prototype.write = function(str) {
    var buf = Buffer.alloc(str.length);
    for(var i = 0; i < str.length; i++)buf[i] = this.encodeBuf[str.charCodeAt(i)];
    return buf;
};
SBCSEncoder.prototype.end = function() {};
function SBCSDecoder(options, codec) {
    this.decodeBuf = codec.decodeBuf;
}
SBCSDecoder.prototype.write = function(buf) {
    // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
    var decodeBuf = this.decodeBuf;
    var newBuf = Buffer.alloc(buf.length * 2);
    var idx1 = 0, idx2 = 0;
    for(var i = 0; i < buf.length; i++){
        idx1 = buf[i] * 2;
        idx2 = i * 2;
        newBuf[idx2] = decodeBuf[idx1];
        newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
    }
    return newBuf.toString("ucs2");
};
SBCSDecoder.prototype.end = function() {};

},{"83e04ce10fc2395e":"aLyFx"}],"iJnRB":[function(require,module,exports) {
"use strict";
// Manually added data to be used by sbcs codec in addition to generated one.
module.exports = {
    // Not supported by iconv, not sure why.
    "10029": "maccenteuro",
    "maccenteuro": {
        "type": "_sbcs",
        "chars": "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ"
    },
    "808": "cp808",
    "ibm808": "cp808",
    "cp808": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў\xb0∙\xb7√№€■\xa0"
    },
    "mik": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№\xa7╗╝┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    // Aliases of generated encodings.
    "ascii8bit": "ascii",
    "usascii": "ascii",
    "ansix34": "ascii",
    "ansix341968": "ascii",
    "ansix341986": "ascii",
    "csascii": "ascii",
    "cp367": "ascii",
    "ibm367": "ascii",
    "isoir6": "ascii",
    "iso646us": "ascii",
    "iso646irv": "ascii",
    "us": "ascii",
    "latin1": "iso88591",
    "latin2": "iso88592",
    "latin3": "iso88593",
    "latin4": "iso88594",
    "latin5": "iso88599",
    "latin6": "iso885910",
    "latin7": "iso885913",
    "latin8": "iso885914",
    "latin9": "iso885915",
    "latin10": "iso885916",
    "csisolatin1": "iso88591",
    "csisolatin2": "iso88592",
    "csisolatin3": "iso88593",
    "csisolatin4": "iso88594",
    "csisolatincyrillic": "iso88595",
    "csisolatinarabic": "iso88596",
    "csisolatingreek": "iso88597",
    "csisolatinhebrew": "iso88598",
    "csisolatin5": "iso88599",
    "csisolatin6": "iso885910",
    "l1": "iso88591",
    "l2": "iso88592",
    "l3": "iso88593",
    "l4": "iso88594",
    "l5": "iso88599",
    "l6": "iso885910",
    "l7": "iso885913",
    "l8": "iso885914",
    "l9": "iso885915",
    "l10": "iso885916",
    "isoir14": "iso646jp",
    "isoir57": "iso646cn",
    "isoir100": "iso88591",
    "isoir101": "iso88592",
    "isoir109": "iso88593",
    "isoir110": "iso88594",
    "isoir144": "iso88595",
    "isoir127": "iso88596",
    "isoir126": "iso88597",
    "isoir138": "iso88598",
    "isoir148": "iso88599",
    "isoir157": "iso885910",
    "isoir166": "tis620",
    "isoir179": "iso885913",
    "isoir199": "iso885914",
    "isoir203": "iso885915",
    "isoir226": "iso885916",
    "cp819": "iso88591",
    "ibm819": "iso88591",
    "cyrillic": "iso88595",
    "arabic": "iso88596",
    "arabic8": "iso88596",
    "ecma114": "iso88596",
    "asmo708": "iso88596",
    "greek": "iso88597",
    "greek8": "iso88597",
    "ecma118": "iso88597",
    "elot928": "iso88597",
    "hebrew": "iso88598",
    "hebrew8": "iso88598",
    "turkish": "iso88599",
    "turkish8": "iso88599",
    "thai": "iso885911",
    "thai8": "iso885911",
    "celtic": "iso885914",
    "celtic8": "iso885914",
    "isoceltic": "iso885914",
    "tis6200": "tis620",
    "tis62025291": "tis620",
    "tis62025330": "tis620",
    "10000": "macroman",
    "10006": "macgreek",
    "10007": "maccyrillic",
    "10079": "maciceland",
    "10081": "macturkish",
    "cspc8codepage437": "cp437",
    "cspc775baltic": "cp775",
    "cspc850multilingual": "cp850",
    "cspcp852": "cp852",
    "cspc862latinhebrew": "cp862",
    "cpgr": "cp869",
    "msee": "cp1250",
    "mscyrl": "cp1251",
    "msansi": "cp1252",
    "msgreek": "cp1253",
    "msturk": "cp1254",
    "mshebr": "cp1255",
    "msarab": "cp1256",
    "winbaltrim": "cp1257",
    "cp20866": "koi8r",
    "20866": "koi8r",
    "ibm878": "koi8r",
    "cskoi8r": "koi8r",
    "cp21866": "koi8u",
    "21866": "koi8u",
    "ibm1168": "koi8u",
    "strk10482002": "rk1048",
    "tcvn5712": "tcvn",
    "tcvn57121": "tcvn",
    "gb198880": "iso646cn",
    "cn": "iso646cn",
    "csiso14jisc6220ro": "iso646jp",
    "jisc62201969ro": "iso646jp",
    "jp": "iso646jp",
    "cshproman8": "hproman8",
    "r8": "hproman8",
    "roman8": "hproman8",
    "xroman8": "hproman8",
    "ibm1051": "hproman8",
    "mac": "macintosh",
    "csmacintosh": "macintosh"
};

},{}],"lrx6z":[function(require,module,exports) {
"use strict";
// Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
module.exports = {
    "437": "cp437",
    "737": "cp737",
    "775": "cp775",
    "850": "cp850",
    "852": "cp852",
    "855": "cp855",
    "856": "cp856",
    "857": "cp857",
    "858": "cp858",
    "860": "cp860",
    "861": "cp861",
    "862": "cp862",
    "863": "cp863",
    "864": "cp864",
    "865": "cp865",
    "866": "cp866",
    "869": "cp869",
    "874": "windows874",
    "922": "cp922",
    "1046": "cp1046",
    "1124": "cp1124",
    "1125": "cp1125",
    "1129": "cp1129",
    "1133": "cp1133",
    "1161": "cp1161",
    "1162": "cp1162",
    "1163": "cp1163",
    "1250": "windows1250",
    "1251": "windows1251",
    "1252": "windows1252",
    "1253": "windows1253",
    "1254": "windows1254",
    "1255": "windows1255",
    "1256": "windows1256",
    "1257": "windows1257",
    "1258": "windows1258",
    "28591": "iso88591",
    "28592": "iso88592",
    "28593": "iso88593",
    "28594": "iso88594",
    "28595": "iso88595",
    "28596": "iso88596",
    "28597": "iso88597",
    "28598": "iso88598",
    "28599": "iso88599",
    "28600": "iso885910",
    "28601": "iso885911",
    "28603": "iso885913",
    "28604": "iso885914",
    "28605": "iso885915",
    "28606": "iso885916",
    "windows874": {
        "type": "_sbcs",
        "chars": "€����…�����������‘’“”•–—��������\xa0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "win874": "windows874",
    "cp874": "windows874",
    "windows1250": {
        "type": "_sbcs",
        "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź\xa0ˇ˘Ł\xa4Ą\xa6\xa7\xa8\xa9Ş\xab\xac\xad\xaeŻ\xb0\xb1˛ł\xb4\xb5\xb6\xb7\xb8ąş\xbbĽ˝ľżŔ\xc1\xc2Ă\xc4ĹĆ\xc7Č\xc9Ę\xcbĚ\xcd\xceĎĐŃŇ\xd3\xd4Ő\xd6\xd7ŘŮ\xdaŰ\xdc\xddŢ\xdfŕ\xe1\xe2ă\xe4ĺć\xe7č\xe9ę\xebě\xed\xeeďđńň\xf3\xf4ő\xf6\xf7řů\xfaű\xfc\xfdţ˙"
    },
    "win1250": "windows1250",
    "cp1250": "windows1250",
    "windows1251": {
        "type": "_sbcs",
        "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ\xa0ЎўЈ\xa4Ґ\xa6\xa7Ё\xa9Є\xab\xac\xad\xaeЇ\xb0\xb1Ііґ\xb5\xb6\xb7ё№є\xbbјЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "win1251": "windows1251",
    "cp1251": "windows1251",
    "windows1252": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
    },
    "win1252": "windows1252",
    "cp1252": "windows1252",
    "windows1253": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›����\xa0΅Ά\xa3\xa4\xa5\xa6\xa7\xa8\xa9�\xab\xac\xad\xae―\xb0\xb1\xb2\xb3΄\xb5\xb6\xb7ΈΉΊ\xbbΌ\xbdΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    "win1253": "windows1253",
    "cp1253": "windows1253",
    "windows1254": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcfĞ\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdcİŞ\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xefğ\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfcış\xff"
    },
    "win1254": "windows1254",
    "cp1254": "windows1254",
    "windows1255": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›����\xa0\xa1\xa2\xa3₪\xa5\xa6\xa7\xa8\xa9\xd7\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xf7\xbb\xbc\xbd\xbe\xbfְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    "win1255": "windows1255",
    "cp1255": "windows1255",
    "windows1256": {
        "type": "_sbcs",
        "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں\xa0،\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9ھ\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9؛\xbb\xbc\xbd\xbe؟ہءآأؤإئابةتثجحخدذرزسشصض\xd7طظعغـفقك\xe0ل\xe2منهو\xe7\xe8\xe9\xea\xebىي\xee\xefًٌٍَ\xf4ُِ\xf7ّ\xf9ْ\xfb\xfc‎‏ے"
    },
    "win1256": "windows1256",
    "cp1256": "windows1256",
    "windows1257": {
        "type": "_sbcs",
        "chars": "€�‚�„…†‡�‰�‹�\xa8ˇ\xb8�‘’“”•–—�™�›�\xaf˛�\xa0�\xa2\xa3\xa4�\xa6\xa7\xd8\xa9Ŗ\xab\xac\xad\xae\xc6\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xf8\xb9ŗ\xbb\xbc\xbd\xbe\xe6ĄĮĀĆ\xc4\xc5ĘĒČ\xc9ŹĖĢĶĪĻŠŃŅ\xd3Ō\xd5\xd6\xd7ŲŁŚŪ\xdcŻŽ\xdfąįāć\xe4\xe5ęēč\xe9źėģķīļšńņ\xf3ō\xf5\xf6\xf7ųłśū\xfcżž˙"
    },
    "win1257": "windows1257",
    "cp1257": "windows1257",
    "windows1258": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2Ă\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb̀\xcd\xce\xcfĐ\xd1̉\xd3\xd4Ơ\xd6\xd7\xd8\xd9\xda\xdb\xdcỮ\xdf\xe0\xe1\xe2ă\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb́\xed\xee\xefđ\xf1̣\xf3\xf4ơ\xf6\xf7\xf8\xf9\xfa\xfb\xfcư₫\xff"
    },
    "win1258": "windows1258",
    "cp1258": "windows1258",
    "iso88591": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
    },
    "cp28591": "iso88591",
    "iso88592": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0Ą˘Ł\xa4ĽŚ\xa7\xa8ŠŞŤŹ\xadŽŻ\xb0ą˛ł\xb4ľśˇ\xb8šşťź˝žżŔ\xc1\xc2Ă\xc4ĹĆ\xc7Č\xc9Ę\xcbĚ\xcd\xceĎĐŃŇ\xd3\xd4Ő\xd6\xd7ŘŮ\xdaŰ\xdc\xddŢ\xdfŕ\xe1\xe2ă\xe4ĺć\xe7č\xe9ę\xebě\xed\xeeďđńň\xf3\xf4ő\xf6\xf7řů\xfaű\xfc\xfdţ˙"
    },
    "cp28592": "iso88592",
    "iso88593": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0Ħ˘\xa3\xa4�Ĥ\xa7\xa8İŞĞĴ\xad�Ż\xb0ħ\xb2\xb3\xb4\xb5ĥ\xb7\xb8ışğĵ\xbd�ż\xc0\xc1\xc2�\xc4ĊĈ\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf�\xd1\xd2\xd3\xd4Ġ\xd6\xd7Ĝ\xd9\xda\xdb\xdcŬŜ\xdf\xe0\xe1\xe2�\xe4ċĉ\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef�\xf1\xf2\xf3\xf4ġ\xf6\xf7ĝ\xf9\xfa\xfb\xfcŭŝ˙"
    },
    "cp28593": "iso88593",
    "iso88594": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ĄĸŖ\xa4ĨĻ\xa7\xa8ŠĒĢŦ\xadŽ\xaf\xb0ą˛ŗ\xb4ĩļˇ\xb8šēģŧŊžŋĀ\xc1\xc2\xc3\xc4\xc5\xc6ĮČ\xc9Ę\xcbĖ\xcd\xceĪĐŅŌĶ\xd4\xd5\xd6\xd7\xd8Ų\xda\xdb\xdcŨŪ\xdfā\xe1\xe2\xe3\xe4\xe5\xe6įč\xe9ę\xebė\xed\xeeīđņōķ\xf4\xf5\xf6\xf7\xf8ų\xfa\xfb\xfcũū˙"
    },
    "cp28594": "iso88594",
    "iso88595": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ЁЂЃЄЅІЇЈЉЊЋЌ\xadЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ\xa7ўџ"
    },
    "cp28595": "iso88595",
    "iso88596": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0���\xa4�������،\xad�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
    },
    "cp28596": "iso88596",
    "iso88597": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0‘’\xa3€₯\xa6\xa7\xa8\xa9ͺ\xab\xac\xad�―\xb0\xb1\xb2\xb3΄΅Ά\xb7ΈΉΊ\xbbΌ\xbdΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    "cp28597": "iso88597",
    "iso88598": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0�\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xd7\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xf7\xbb\xbc\xbd\xbe��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    "cp28598": "iso88598",
    "iso88599": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcfĞ\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdcİŞ\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xefğ\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfcış\xff"
    },
    "cp28599": "iso88599",
    "iso885910": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ĄĒĢĪĨĶ\xa7ĻĐŠŦŽ\xadŪŊ\xb0ąēģīĩķ\xb7ļđšŧž―ūŋĀ\xc1\xc2\xc3\xc4\xc5\xc6ĮČ\xc9Ę\xcbĖ\xcd\xce\xcf\xd0ŅŌ\xd3\xd4\xd5\xd6Ũ\xd8Ų\xda\xdb\xdc\xdd\xde\xdfā\xe1\xe2\xe3\xe4\xe5\xe6įč\xe9ę\xebė\xed\xee\xef\xf0ņō\xf3\xf4\xf5\xf6ũ\xf8ų\xfa\xfb\xfc\xfd\xfeĸ"
    },
    "cp28600": "iso885910",
    "iso885911": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "cp28601": "iso885911",
    "iso885913": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0”\xa2\xa3\xa4„\xa6\xa7\xd8\xa9Ŗ\xab\xac\xad\xae\xc6\xb0\xb1\xb2\xb3“\xb5\xb6\xb7\xf8\xb9ŗ\xbb\xbc\xbd\xbe\xe6ĄĮĀĆ\xc4\xc5ĘĒČ\xc9ŹĖĢĶĪĻŠŃŅ\xd3Ō\xd5\xd6\xd7ŲŁŚŪ\xdcŻŽ\xdfąįāć\xe4\xe5ęēč\xe9źėģķīļšńņ\xf3ō\xf5\xf6\xf7ųłśū\xfcżž’"
    },
    "cp28603": "iso885913",
    "iso885914": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0Ḃḃ\xa3ĊċḊ\xa7Ẁ\xa9ẂḋỲ\xad\xaeŸḞḟĠġṀṁ\xb6ṖẁṗẃṠỳẄẅṡ\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcfŴ\xd1\xd2\xd3\xd4\xd5\xd6Ṫ\xd8\xd9\xda\xdb\xdc\xddŶ\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xefŵ\xf1\xf2\xf3\xf4\xf5\xf6ṫ\xf8\xf9\xfa\xfb\xfc\xfdŷ\xff"
    },
    "cp28604": "iso885914",
    "iso885915": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3€\xa5Š\xa7š\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3Ž\xb5\xb6\xb7ž\xb9\xba\xbbŒœŸ\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
    },
    "cp28605": "iso885915",
    "iso885916": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ĄąŁ€„Š\xa7š\xa9Ș\xabŹ\xadźŻ\xb0\xb1ČłŽ”\xb6\xb7žčș\xbbŒœŸż\xc0\xc1\xc2Ă\xc4Ć\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcfĐŃ\xd2\xd3\xd4Ő\xd6ŚŰ\xd9\xda\xdb\xdcĘȚ\xdf\xe0\xe1\xe2ă\xe4ć\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xefđń\xf2\xf3\xf4ő\xf6śű\xf9\xfa\xfb\xfcęț\xff"
    },
    "cp28606": "iso885916",
    "cp437": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5₧ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf⌐\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm437": "cp437",
    "csibm437": "cp437",
    "cp737": {
        "type": "_sbcs",
        "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ\xb1≥≤ΪΫ\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm737": "cp737",
    "csibm737": "cp737",
    "cp775": {
        "type": "_sbcs",
        "chars": "Ć\xfc\xe9ā\xe4ģ\xe5ćłēŖŗīŹ\xc4\xc5\xc9\xe6\xc6ō\xf6Ģ\xa2Śś\xd6\xdc\xf8\xa3\xd8\xd7\xa4ĀĪ\xf3Żżź”\xa6\xa9\xae\xac\xbd\xbcŁ\xab\xbb░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀\xd3\xdfŌŃ\xf5\xd5\xb5ńĶķĻļņĒŅ’\xad\xb1“\xbe\xb6\xa7\xf7„\xb0∙\xb7\xb9\xb3\xb2■\xa0"
    },
    "ibm775": "cp775",
    "csibm775": "cp775",
    "cp850": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xf8\xa3\xd8\xd7ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\xae\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤\xc1\xc2\xc0\xa9╣║╗╝\xa2\xa5┐└┴┬├─┼\xe3\xc3╚╔╩╦╠═╬\xa4\xf0\xd0\xca\xcb\xc8ı\xcd\xce\xcf┘┌█▄\xa6\xcc▀\xd3\xdf\xd4\xd2\xf5\xd5\xb5\xfe\xde\xda\xdb\xd9\xfd\xdd\xaf\xb4\xad\xb1‗\xbe\xb6\xa7\xf7\xb8\xb0\xa8\xb7\xb9\xb3\xb2■\xa0"
    },
    "ibm850": "cp850",
    "csibm850": "cp850",
    "cp852": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4ůć\xe7ł\xebŐő\xeeŹ\xc4Ć\xc9Ĺĺ\xf4\xf6ĽľŚś\xd6\xdcŤťŁ\xd7č\xe1\xed\xf3\xfaĄąŽžĘę\xacźČş\xab\xbb░▒▓│┤\xc1\xc2ĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬\xa4đĐĎ\xcbďŇ\xcd\xceě┘┌█▄ŢŮ▀\xd3\xdf\xd4ŃńňŠšŔ\xdaŕŰ\xfd\xddţ\xb4\xad˝˛ˇ˘\xa7\xf7\xb8\xb0\xa8˙űŘř■\xa0"
    },
    "ibm852": "cp852",
    "csibm852": "cp852",
    "cp855": {
        "type": "_sbcs",
        "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ\xab\xbb░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬\xa4лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№\xadыЫзЗшШэЭщЩчЧ\xa7■\xa0"
    },
    "ibm855": "cp855",
    "csibm855": "cp855",
    "cp856": {
        "type": "_sbcs",
        "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�\xa3�\xd7����������\xae\xac\xbd\xbc�\xab\xbb░▒▓│┤���\xa9╣║╗╝\xa2\xa5┐└┴┬├─┼��╚╔╩╦╠═╬\xa4���������┘┌█▄\xa6�▀������\xb5�������\xaf\xb4\xad\xb1‗\xbe\xb6\xa7\xf7\xb8\xb0\xa8\xb7\xb9\xb3\xb2■\xa0"
    },
    "ibm856": "cp856",
    "csibm856": "cp856",
    "cp857": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xeeı\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9İ\xd6\xdc\xf8\xa3\xd8Şş\xe1\xed\xf3\xfa\xf1\xd1Ğğ\xbf\xae\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤\xc1\xc2\xc0\xa9╣║╗╝\xa2\xa5┐└┴┬├─┼\xe3\xc3╚╔╩╦╠═╬\xa4\xba\xaa\xca\xcb\xc8�\xcd\xce\xcf┘┌█▄\xa6\xcc▀\xd3\xdf\xd4\xd2\xf5\xd5\xb5�\xd7\xda\xdb\xd9\xec\xff\xaf\xb4\xad\xb1�\xbe\xb6\xa7\xf7\xb8\xb0\xa8\xb7\xb9\xb3\xb2■\xa0"
    },
    "ibm857": "cp857",
    "csibm857": "cp857",
    "cp858": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xf8\xa3\xd8\xd7ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\xae\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤\xc1\xc2\xc0\xa9╣║╗╝\xa2\xa5┐└┴┬├─┼\xe3\xc3╚╔╩╦╠═╬\xa4\xf0\xd0\xca\xcb\xc8€\xcd\xce\xcf┘┌█▄\xa6\xcc▀\xd3\xdf\xd4\xd2\xf5\xd5\xb5\xfe\xde\xda\xdb\xd9\xfd\xdd\xaf\xb4\xad\xb1‗\xbe\xb6\xa7\xf7\xb8\xb0\xa8\xb7\xb9\xb3\xb2■\xa0"
    },
    "ibm858": "cp858",
    "csibm858": "cp858",
    "cp860": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe3\xe0\xc1\xe7\xea\xca\xe8\xcd\xd4\xec\xc3\xc2\xc9\xc0\xc8\xf4\xf5\xf2\xda\xf9\xcc\xd5\xdc\xa2\xa3\xd9₧\xd3\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\xd2\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm860": "cp860",
    "csibm860": "cp860",
    "cp861": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xd0\xf0\xde\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xfe\xfb\xdd\xfd\xd6\xdc\xf8\xa3\xd8₧ƒ\xe1\xed\xf3\xfa\xc1\xcd\xd3\xda\xbf⌐\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm861": "cp861",
    "csibm861": "cp861",
    "cp862": {
        "type": "_sbcs",
        "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת\xa2\xa3\xa5₧ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf⌐\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm862": "cp862",
    "csibm862": "cp862",
    "cp863": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xc2\xe0\xb6\xe7\xea\xeb\xe8\xef\xee‗\xc0\xa7\xc9\xc8\xca\xf4\xcb\xcf\xfb\xf9\xa4\xd4\xdc\xa2\xa3\xd9\xdbƒ\xa6\xb4\xf3\xfa\xa8\xb8\xb3\xaf\xce⌐\xac\xbd\xbc\xbe\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm863": "cp863",
    "csibm863": "cp863",
    "cp864": {
        "type": "_sbcs",
        "chars": "\x00\x01\x02\x03\x04\x05\x06\x07\b	\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\xb0\xb7∙√▒─│┼┤┬├┴┐┌└┘β∞φ\xb1\xbd\xbc≈\xab\xbbﻷﻸ��ﻻﻼ�\xa0\xadﺂ\xa3\xa4ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟\xa2ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ\xa6\xac\xf7\xd7ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
    },
    "ibm864": "cp864",
    "csibm864": "cp864",
    "cp865": {
        "type": "_sbcs",
        "chars": "\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xf8\xa3\xd8₧ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf⌐\xac\xbd\xbc\xa1\xab\xa4░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\xa0"
    },
    "ibm865": "cp865",
    "csibm865": "cp865",
    "cp866": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў\xb0∙\xb7√№\xa4■\xa0"
    },
    "ibm866": "cp866",
    "csibm866": "cp866",
    "cp869": {
        "type": "_sbcs",
        "chars": "������Ά�\xb7\xac\xa6‘’Έ―ΉΊΪΌ��ΎΫ\xa9Ώ\xb2\xb3ά\xa3έήίϊΐόύΑΒΓΔΕΖΗ\xbdΘΙ\xab\xbb░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄\xad\xb1υφχ\xa7ψ΅\xb0\xa8ωϋΰώ■\xa0"
    },
    "ibm869": "cp869",
    "csibm869": "cp869",
    "cp922": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae‾\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcfŠ\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xddŽ\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xefš\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfdž\xff"
    },
    "ibm922": "cp922",
    "csibm922": "cp922",
    "cp1046": {
        "type": "_sbcs",
        "chars": "ﺈ\xd7\xf7ﹱ\x88■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ\xa0\xa4ﺋﺑﺗﺛﺟﺣ،\xadﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
    },
    "ibm1046": "cp1046",
    "csibm1046": "cp1046",
    "cp1124": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ЁЂҐЄЅІЇЈЉЊЋЌ\xadЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ\xa7ўџ"
    },
    "ibm1124": "cp1124",
    "csibm1124": "cp1124",
    "cp1125": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї\xb7√№\xa4■\xa0"
    },
    "ibm1125": "cp1125",
    "csibm1125": "cp1125",
    "cp1129": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7œ\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3Ÿ\xb5\xb6\xb7Œ\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2Ă\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb̀\xcd\xce\xcfĐ\xd1̉\xd3\xd4Ơ\xd6\xd7\xd8\xd9\xda\xdb\xdcỮ\xdf\xe0\xe1\xe2ă\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb́\xed\xee\xefđ\xf1̣\xf3\xf4ơ\xf6\xf7\xf8\xf9\xfa\xfb\xfcư₫\xff"
    },
    "ibm1129": "cp1129",
    "csibm1129": "cp1129",
    "cp1133": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��\xa2\xac\xa6�"
    },
    "ibm1133": "cp1133",
    "csibm1133": "cp1133",
    "cp1161": {
        "type": "_sbcs",
        "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛\xa2\xac\xa6\xa0"
    },
    "ibm1161": "cp1161",
    "csibm1161": "cp1161",
    "cp1162": {
        "type": "_sbcs",
        "chars": "€\x81\x82\x83\x84…\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90‘’“”•–—\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "ibm1162": "cp1162",
    "csibm1162": "cp1162",
    "cp1163": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3€\xa5\xa6\xa7œ\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3Ÿ\xb5\xb6\xb7Œ\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2Ă\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb̀\xcd\xce\xcfĐ\xd1̉\xd3\xd4Ơ\xd6\xd7\xd8\xd9\xda\xdb\xdcỮ\xdf\xe0\xe1\xe2ă\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb́\xed\xee\xefđ\xf1̣\xf3\xf4ơ\xf6\xf7\xf8\xf9\xfa\xfb\xfcư₫\xff"
    },
    "ibm1163": "cp1163",
    "csibm1163": "cp1163",
    "maccroatian": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊�\xa9⁄\xa4‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ"
    },
    "maccyrillic": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0\xa2\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5∂ЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю\xa4"
    },
    "macgreek": {
        "type": "_sbcs",
        "chars": "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6\xad\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0·Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
    },
    "maciceland": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄\xa4\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4�\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ"
    },
    "macroman": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄\xa4‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4�\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ"
    },
    "macromania": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂŞ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăş\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄\xa4‹›Ţţ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4�\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ"
    },
    "macthai": {
        "type": "_sbcs",
        "chars": "\xab\xbb…“”�•‘’�\xa0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\uFEFF​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙\xae\xa9����"
    },
    "macturkish": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4�\xd2\xda\xdb\xd9�ˆ˜\xaf˘˙˚\xb8˝˛ˇ"
    },
    "macukraine": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю\xa4"
    },
    "koi8r": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xa0⌡\xb0\xb2\xb7\xf7═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬\xa9юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8u": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xa0⌡\xb0\xb2\xb7\xf7═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬\xa9юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8ru": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xa0⌡\xb0\xb2\xb7\xf7═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ\xa9юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8t": {
        "type": "_sbcs",
        "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё\xa4ӣ\xa6\xa7���\xab\xac\xad\xae�\xb0\xb1\xb2Ё�Ӣ\xb6\xb7�№�\xbb���\xa9юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "armscii8": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0�և։)(\xbb\xab—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
    },
    "rk1048": {
        "type": "_sbcs",
        "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ\xa0ҰұӘ\xa4Ө\xa6\xa7Ё\xa9Ғ\xab\xac\xad\xaeҮ\xb0\xb1Ііө\xb5\xb6\xb7ё№ғ\xbbәҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "tcvn": {
        "type": "_sbcs",
        "chars": "\x00\xdaỤ\x03ỪỬỮ\x07\b	\n\v\f\r\x0e\x0f\x10ỨỰỲỶỸ\xddỴ\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\xc0Ả\xc3\xc1ẠẶẬ\xc8ẺẼ\xc9ẸỆ\xccỈĨ\xcdỊ\xd2Ỏ\xd5\xd3ỌỘỜỞỠỚỢ\xd9ỦŨ\xa0Ă\xc2\xca\xd4ƠƯĐă\xe2\xea\xf4ơưđẶ̀̀̉̃́\xe0ả\xe3\xe1ạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậ\xe8Ểẻẽ\xe9ẹềểễếệ\xecỉỄẾỒĩ\xedị\xf2Ổỏ\xf5\xf3ọồổỗốộờởỡớợ\xf9Ỗủũ\xfaụừửữứựỳỷỹ\xfdỵỐ"
    },
    "georgianacademy": {
        "type": "_sbcs",
        "chars": "\x80\x81‚ƒ„…†‡ˆ‰Š‹Œ\x8d\x8e\x8f\x90‘’“”•–—˜™š›œ\x9d\x9eŸ\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbfაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶ\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
    },
    "georgianps": {
        "type": "_sbcs",
        "chars": "\x80\x81‚ƒ„…†‡ˆ‰Š‹Œ\x8d\x8e\x8f\x90‘’“”•–—˜™š›œ\x9d\x9eŸ\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbfაბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵ\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
    },
    "pt154": {
        "type": "_sbcs",
        "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ\xa0ЎўЈӨҘҰ\xa7Ё\xa9Ә\xab\xacӯ\xaeҜ\xb0ұІіҙө\xb6\xb7ё№ә\xbbјҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "viscii": {
        "type": "_sbcs",
        "chars": "\x00\x01Ẳ\x03\x04ẴẪ\x07\b	\n\v\f\r\x0e\x0f\x10\x11\x12\x13Ỷ\x15\x16\x17\x18Ỹ\x1a\x1b\x1c\x1dỴ\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7fẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲ\xd5ắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯ\xc0\xc1\xc2\xc3ẢĂẳẵ\xc8\xc9\xcaẺ\xcc\xcdĨỳĐứ\xd2\xd3\xd4ạỷừử\xd9\xdaỹỵ\xddỡư\xe0\xe1\xe2\xe3ảăữẫ\xe8\xe9\xeaẻ\xec\xedĩỉđự\xf2\xf3\xf4\xf5ỏọụ\xf9\xfaũủ\xfdợỮ"
    },
    "iso646cn": {
        "type": "_sbcs",
        "chars": "\x00\x01\x02\x03\x04\x05\x06\x07\b	\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#\xa5%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾\x7f��������������������������������������������������������������������������������������������������������������������������������"
    },
    "iso646jp": {
        "type": "_sbcs",
        "chars": "\x00\x01\x02\x03\x04\x05\x06\x07\b	\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\xa5]^_`abcdefghijklmnopqrstuvwxyz{|}‾\x7f��������������������������������������������������������������������������������������������������������������������������������"
    },
    "hproman8": {
        "type": "_sbcs",
        "chars": "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xc0\xc2\xc8\xca\xcb\xce\xcf\xb4ˋˆ\xa8˜\xd9\xdb₤\xaf\xdd\xfd\xb0\xc7\xe7\xd1\xf1\xa1\xbf\xa4\xa3\xa5\xa7ƒ\xa2\xe2\xea\xf4\xfb\xe1\xe9\xf3\xfa\xe0\xe8\xf2\xf9\xe4\xeb\xf6\xfc\xc5\xee\xd8\xc6\xe5\xed\xf8\xe6\xc4\xec\xd6\xdc\xc9\xef\xdf\xd4\xc1\xc3\xe3\xd0\xf0\xcd\xcc\xd3\xd2\xd5\xf5Šš\xdaŸ\xff\xde\xfe\xb7\xb5\xb6\xbe—\xbc\xbd\xaa\xba\xab■\xbb\xb1�"
    },
    "macintosh": {
        "type": "_sbcs",
        "chars": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄\xa4‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4�\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ"
    },
    "ascii": {
        "type": "_sbcs",
        "chars": "��������������������������������������������������������������������������������������������������������������������������������"
    },
    "tis620": {
        "type": "_sbcs",
        "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    }
};

},{}],"6U9s4":[function(require,module,exports) {
"use strict";
var Buffer = require("28f0481976da1ca4").Buffer;
// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
// To save memory and loading time, we read table files only when requested.
exports._dbcs = DBCSCodec;
var UNASSIGNED = -1, GB18030_CODE = -2, SEQ_START = -10, NODE_START = -1000, UNASSIGNED_NODE = new Array(0x100), DEF_CHAR = -1;
for(var i = 0; i < 0x100; i++)UNASSIGNED_NODE[i] = UNASSIGNED;
// Class DBCSCodec reads and initializes mapping tables.
function DBCSCodec(codecOptions, iconv) {
    this.encodingName = codecOptions.encodingName;
    if (!codecOptions) throw new Error("DBCS codec is called without the data.");
    if (!codecOptions.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
    // Load tables.
    var mappingTable = codecOptions.table();
    // Decode tables: MBCS -> Unicode.
    // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
    // Trie root is decodeTables[0].
    // Values: >=  0 -> unicode character code. can be > 0xFFFF
    //         == UNASSIGNED -> unknown/unassigned sequence.
    //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
    //         <= NODE_START -> index of the next node in our trie to process next byte.
    //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
    this.decodeTables = [];
    this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.
    // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
    this.decodeTableSeq = [];
    // Actual mapping tables consist of chunks. Use them to fill up decode tables.
    for(var i = 0; i < mappingTable.length; i++)this._addDecodeChunk(mappingTable[i]);
    this.defaultCharUnicode = iconv.defaultCharUnicode;
    // Encode tables: Unicode -> DBCS.
    // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
    // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
    // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
    //         == UNASSIGNED -> no conversion found. Output a default char.
    //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
    this.encodeTable = [];
    // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
    // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
    // means end of sequence (needed when one sequence is a strict subsequence of another).
    // Objects are kept separately from encodeTable to increase performance.
    this.encodeTableSeq = [];
    // Some chars can be decoded, but need not be encoded.
    var skipEncodeChars = {};
    if (codecOptions.encodeSkipVals) for(var i = 0; i < codecOptions.encodeSkipVals.length; i++){
        var val = codecOptions.encodeSkipVals[i];
        if (typeof val === "number") skipEncodeChars[val] = true;
        else for(var j = val.from; j <= val.to; j++)skipEncodeChars[j] = true;
    }
    // Use decode trie to recursively fill out encode tables.
    this._fillEncodeTable(0, 0, skipEncodeChars);
    // Add more encoding pairs when needed.
    if (codecOptions.encodeAdd) {
        for(var uChar in codecOptions.encodeAdd)if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
    }
    this.defCharSB = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]["?"];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
    // Load & create GB18030 tables when needed.
    if (typeof codecOptions.gb18030 === "function") {
        this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.
        // Add GB18030 decode tables.
        var thirdByteNodeIdx = this.decodeTables.length;
        var thirdByteNode = this.decodeTables[thirdByteNodeIdx] = UNASSIGNED_NODE.slice(0);
        var fourthByteNodeIdx = this.decodeTables.length;
        var fourthByteNode = this.decodeTables[fourthByteNodeIdx] = UNASSIGNED_NODE.slice(0);
        for(var i = 0x81; i <= 0xFE; i++){
            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
            var secondByteNode = this.decodeTables[secondByteNodeIdx];
            for(var j = 0x30; j <= 0x39; j++)secondByteNode[j] = NODE_START - thirdByteNodeIdx;
        }
        for(var i = 0x81; i <= 0xFE; i++)thirdByteNode[i] = NODE_START - fourthByteNodeIdx;
        for(var i = 0x30; i <= 0x39; i++)fourthByteNode[i] = GB18030_CODE;
    }
}
DBCSCodec.prototype.encoder = DBCSEncoder;
DBCSCodec.prototype.decoder = DBCSDecoder;
// Decoder helpers
DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
    var bytes = [];
    for(; addr > 0; addr >>= 8)bytes.push(addr & 0xFF);
    if (bytes.length == 0) bytes.push(0);
    var node = this.decodeTables[0];
    for(var i = bytes.length - 1; i > 0; i--){
        var val = node[bytes[i]];
        if (val == UNASSIGNED) {
            node[bytes[i]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
        } else if (val <= NODE_START) node = this.decodeTables[NODE_START - val];
        else throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
    }
    return node;
};
DBCSCodec.prototype._addDecodeChunk = function(chunk) {
    // First element of chunk is the hex mbcs code where we start.
    var curAddr = parseInt(chunk[0], 16);
    // Choose the decoding node where we'll write our chars.
    var writeTable = this._getDecodeTrieNode(curAddr);
    curAddr = curAddr & 0xFF;
    // Write all other elements of the chunk to the table.
    for(var k = 1; k < chunk.length; k++){
        var part = chunk[k];
        if (typeof part === "string") for(var l = 0; l < part.length;){
            var code = part.charCodeAt(l++);
            if (0xD800 <= code && code < 0xDC00) {
                var codeTrail = part.charCodeAt(l++);
                if (0xDC00 <= codeTrail && codeTrail < 0xE000) writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
                else throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]);
            } else if (0x0FF0 < code && code <= 0x0FFF) {
                var len = 0xFFF - code + 2;
                var seq = [];
                for(var m = 0; m < len; m++)seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.
                writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                this.decodeTableSeq.push(seq);
            } else writeTable[curAddr++] = code; // Basic char
        }
        else if (typeof part === "number") {
            var charCode = writeTable[curAddr - 1] + 1;
            for(var l = 0; l < part; l++)writeTable[curAddr++] = charCode++;
        } else throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]);
    }
    if (curAddr > 0xFF) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
};
// Encoder helpers
DBCSCodec.prototype._getEncodeBucket = function(uCode) {
    var high = uCode >> 8; // This could be > 0xFF because of astral characters.
    if (this.encodeTable[high] === undefined) this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
    return this.encodeTable[high];
};
DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;
    if (bucket[low] <= SEQ_START) this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
    else if (bucket[low] == UNASSIGNED) bucket[low] = dbcsCode;
};
DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
    // Get the root of character tree according to first character of the sequence.
    var uCode = seq[0];
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;
    var node;
    if (bucket[low] <= SEQ_START) // There's already a sequence with  - use it.
    node = this.encodeTableSeq[SEQ_START - bucket[low]];
    else {
        // There was no sequence object - allocate a new one.
        node = {};
        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
        bucket[low] = SEQ_START - this.encodeTableSeq.length;
        this.encodeTableSeq.push(node);
    }
    // Traverse the character tree, allocating new nodes as needed.
    for(var j = 1; j < seq.length - 1; j++){
        var oldVal = node[uCode];
        if (typeof oldVal === "object") node = oldVal;
        else {
            node = node[uCode] = {};
            if (oldVal !== undefined) node[DEF_CHAR] = oldVal;
        }
    }
    // Set the leaf to given dbcsCode.
    uCode = seq[seq.length - 1];
    node[uCode] = dbcsCode;
};
DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
    var node = this.decodeTables[nodeIdx];
    for(var i = 0; i < 0x100; i++){
        var uCode = node[i];
        var mbCode = prefix + i;
        if (skipEncodeChars[mbCode]) continue;
        if (uCode >= 0) this._setEncodeChar(uCode, mbCode);
        else if (uCode <= NODE_START) this._fillEncodeTable(NODE_START - uCode, mbCode << 8, skipEncodeChars);
        else if (uCode <= SEQ_START) this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
    }
};
// == Encoder ==================================================================
function DBCSEncoder(options, codec) {
    // Encoder state
    this.leadSurrogate = -1;
    this.seqObj = undefined;
    // Static data
    this.encodeTable = codec.encodeTable;
    this.encodeTableSeq = codec.encodeTableSeq;
    this.defaultCharSingleByte = codec.defCharSB;
    this.gb18030 = codec.gb18030;
}
DBCSEncoder.prototype.write = function(str) {
    var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)), leadSurrogate = this.leadSurrogate, seqObj = this.seqObj, nextChar = -1, i = 0, j = 0;
    while(true){
        // 0. Get next character.
        if (nextChar === -1) {
            if (i == str.length) break;
            var uCode = str.charCodeAt(i++);
        } else {
            var uCode = nextChar;
            nextChar = -1;
        }
        // 1. Handle surrogates.
        if (0xD800 <= uCode && uCode < 0xE000) {
            if (uCode < 0xDC00) {
                if (leadSurrogate === -1) {
                    leadSurrogate = uCode;
                    continue;
                } else {
                    leadSurrogate = uCode;
                    // Double lead surrogate found.
                    uCode = UNASSIGNED;
                }
            } else if (leadSurrogate !== -1) {
                uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
                leadSurrogate = -1;
            } else // Incomplete surrogate pair - only trail surrogate found.
            uCode = UNASSIGNED;
        } else if (leadSurrogate !== -1) {
            // Incomplete surrogate pair - only lead surrogate found.
            nextChar = uCode;
            uCode = UNASSIGNED; // Write an error, then current char.
            leadSurrogate = -1;
        }
        // 2. Convert uCode character.
        var dbcsCode = UNASSIGNED;
        if (seqObj !== undefined && uCode != UNASSIGNED) {
            var resCode = seqObj[uCode];
            if (typeof resCode === "object") {
                seqObj = resCode;
                continue;
            } else if (typeof resCode == "number") dbcsCode = resCode;
            else if (resCode == undefined) {
                // Try default character for this sequence
                resCode = seqObj[DEF_CHAR];
                if (resCode !== undefined) {
                    dbcsCode = resCode; // Found. Write it.
                    nextChar = uCode; // Current character will be written too in the next iteration.
                }
            }
            seqObj = undefined;
        } else if (uCode >= 0) {
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== undefined) dbcsCode = subtable[uCode & 0xFF];
            if (dbcsCode <= SEQ_START) {
                seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
                continue;
            }
            if (dbcsCode == UNASSIGNED && this.gb18030) {
                // Use GB18030 algorithm to find character(s) to write.
                var idx = findIdx(this.gb18030.uChars, uCode);
                if (idx != -1) {
                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600);
                    dbcsCode = dbcsCode % 12600;
                    newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260);
                    dbcsCode = dbcsCode % 1260;
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10);
                    dbcsCode = dbcsCode % 10;
                    newBuf[j++] = 0x30 + dbcsCode;
                    continue;
                }
            }
        }
        // 3. Write dbcsCode character.
        if (dbcsCode === UNASSIGNED) dbcsCode = this.defaultCharSingleByte;
        if (dbcsCode < 0x100) newBuf[j++] = dbcsCode;
        else if (dbcsCode < 0x10000) {
            newBuf[j++] = dbcsCode >> 8; // high byte
            newBuf[j++] = dbcsCode & 0xFF; // low byte
        } else {
            newBuf[j++] = dbcsCode >> 16;
            newBuf[j++] = dbcsCode >> 8 & 0xFF;
            newBuf[j++] = dbcsCode & 0xFF;
        }
    }
    this.seqObj = seqObj;
    this.leadSurrogate = leadSurrogate;
    return newBuf.slice(0, j);
};
DBCSEncoder.prototype.end = function() {
    if (this.leadSurrogate === -1 && this.seqObj === undefined) return; // All clean. Most often case.
    var newBuf = Buffer.alloc(10), j = 0;
    if (this.seqObj) {
        var dbcsCode = this.seqObj[DEF_CHAR];
        if (dbcsCode !== undefined) {
            if (dbcsCode < 0x100) newBuf[j++] = dbcsCode;
            else {
                newBuf[j++] = dbcsCode >> 8; // high byte
                newBuf[j++] = dbcsCode & 0xFF; // low byte
            }
        } else ;
        this.seqObj = undefined;
    }
    if (this.leadSurrogate !== -1) {
        // Incomplete surrogate pair - only lead surrogate found.
        newBuf[j++] = this.defaultCharSingleByte;
        this.leadSurrogate = -1;
    }
    return newBuf.slice(0, j);
};
// Export for testing
DBCSEncoder.prototype.findIdx = findIdx;
// == Decoder ==================================================================
function DBCSDecoder(options, codec) {
    // Decoder state
    this.nodeIdx = 0;
    this.prevBuf = Buffer.alloc(0);
    // Static data
    this.decodeTables = codec.decodeTables;
    this.decodeTableSeq = codec.decodeTableSeq;
    this.defaultCharUnicode = codec.defaultCharUnicode;
    this.gb18030 = codec.gb18030;
}
DBCSDecoder.prototype.write = function(buf) {
    var newBuf = Buffer.alloc(buf.length * 2), nodeIdx = this.nodeIdx, prevBuf = this.prevBuf, prevBufOffset = this.prevBuf.length, seqStart = -this.prevBuf.length, uCode;
    if (prevBufOffset > 0) prevBuf = Buffer.concat([
        prevBuf,
        buf.slice(0, 10)
    ]);
    for(var i = 0, j = 0; i < buf.length; i++){
        var curByte = i >= 0 ? buf[i] : prevBuf[i + prevBufOffset];
        // Lookup in current trie node.
        var uCode = this.decodeTables[nodeIdx][curByte];
        if (uCode >= 0) ;
        else if (uCode === UNASSIGNED) {
            // TODO: Callback with seq.
            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).
            uCode = this.defaultCharUnicode.charCodeAt(0);
        } else if (uCode === GB18030_CODE) {
            var curSeq = seqStart >= 0 ? buf.slice(seqStart, i + 1) : prevBuf.slice(seqStart + prevBufOffset, i + 1 + prevBufOffset);
            var ptr = (curSeq[0] - 0x81) * 12600 + (curSeq[1] - 0x30) * 1260 + (curSeq[2] - 0x81) * 10 + (curSeq[3] - 0x30);
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
        } else if (uCode <= NODE_START) {
            nodeIdx = NODE_START - uCode;
            continue;
        } else if (uCode <= SEQ_START) {
            var seq = this.decodeTableSeq[SEQ_START - uCode];
            for(var k = 0; k < seq.length - 1; k++){
                uCode = seq[k];
                newBuf[j++] = uCode & 0xFF;
                newBuf[j++] = uCode >> 8;
            }
            uCode = seq[seq.length - 1];
        } else throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);
        // Write the character to buffer, handling higher planes using surrogate pair.
        if (uCode > 0xFFFF) {
            uCode -= 0x10000;
            var uCodeLead = 0xD800 + Math.floor(uCode / 0x400);
            newBuf[j++] = uCodeLead & 0xFF;
            newBuf[j++] = uCodeLead >> 8;
            uCode = 0xDC00 + uCode % 0x400;
        }
        newBuf[j++] = uCode & 0xFF;
        newBuf[j++] = uCode >> 8;
        // Reset trie node.
        nodeIdx = 0;
        seqStart = i + 1;
    }
    this.nodeIdx = nodeIdx;
    this.prevBuf = seqStart >= 0 ? buf.slice(seqStart) : prevBuf.slice(seqStart + prevBufOffset);
    return newBuf.slice(0, j).toString("ucs2");
};
DBCSDecoder.prototype.end = function() {
    var ret = "";
    // Try to parse all remaining chars.
    while(this.prevBuf.length > 0){
        // Skip 1 character in the buffer.
        ret += this.defaultCharUnicode;
        var buf = this.prevBuf.slice(1);
        // Parse remaining as usual.
        this.prevBuf = Buffer.alloc(0);
        this.nodeIdx = 0;
        if (buf.length > 0) ret += this.write(buf);
    }
    this.nodeIdx = 0;
    return ret;
};
// Binary search for GB18030. Returns largest i such that table[i] <= val.
function findIdx(table, val) {
    if (table[0] > val) return -1;
    var l = 0, r = table.length;
    while(l < r - 1){
        var mid = l + Math.floor((r - l + 1) / 2);
        if (table[mid] <= val) l = mid;
        else r = mid;
    }
    return l;
}

},{"28f0481976da1ca4":"aLyFx"}],"82IIr":[function(require,module,exports) {
"use strict";
// Description of supported double byte encodings and aliases.
// Tables are not require()-d until they are needed to speed up library load.
// require()-s are direct to support Browserify.
module.exports = {
    // == Japanese/ShiftJIS ====================================================
    // All japanese encodings are based on JIS X set of standards:
    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
    //              Has several variations in 1978, 1983, 1990 and 1997.
    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
    //              2 planes, first is superset of 0208, second - revised 0212.
    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
    // Byte encodings are:
    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
    //               0x00-0x7F       - lower part of 0201
    //               0x8E, 0xA1-0xDF - upper part of 0201
    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
    //               Used as-is in ISO2022 family.
    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
    //                0201-1976 Roman, 0208-1978, 0208-1983.
    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
    //
    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
    //
    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
    "shiftjis": {
        type: "_dbcs",
        table: function() {
            return require("7fd6e990ab3bef41");
        },
        encodeAdd: {
            "\xa5": 0x5C,
            "‾": 0x7E
        },
        encodeSkipVals: [
            {
                from: 0xED40,
                to: 0xF940
            }
        ]
    },
    "csshiftjis": "shiftjis",
    "mskanji": "shiftjis",
    "sjis": "shiftjis",
    "windows31j": "shiftjis",
    "ms31j": "shiftjis",
    "xsjis": "shiftjis",
    "windows932": "shiftjis",
    "ms932": "shiftjis",
    "932": "shiftjis",
    "cp932": "shiftjis",
    "eucjp": {
        type: "_dbcs",
        table: function() {
            return require("4ecedfe19d7d5f08");
        },
        encodeAdd: {
            "\xa5": 0x5C,
            "‾": 0x7E
        }
    },
    // TODO: KDDI extension to Shift_JIS
    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
    // == Chinese/GBK ==========================================================
    // http://en.wikipedia.org/wiki/GBK
    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
    "gb2312": "cp936",
    "gb231280": "cp936",
    "gb23121980": "cp936",
    "csgb2312": "cp936",
    "csiso58gb231280": "cp936",
    "euccn": "cp936",
    // Microsoft's CP936 is a subset and approximation of GBK.
    "windows936": "cp936",
    "ms936": "cp936",
    "936": "cp936",
    "cp936": {
        type: "_dbcs",
        table: function() {
            return require("7a67b65f65727c4");
        }
    },
    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
    "gbk": {
        type: "_dbcs",
        table: function() {
            return require("7a67b65f65727c4").concat(require("a573389a26b6ed04"));
        }
    },
    "xgbk": "gbk",
    "isoir58": "gbk",
    // GB18030 is an algorithmic extension of GBK.
    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
    // http://icu-project.org/docs/papers/gb18030.html
    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
    "gb18030": {
        type: "_dbcs",
        table: function() {
            return require("7a67b65f65727c4").concat(require("a573389a26b6ed04"));
        },
        gb18030: function() {
            return require("8df748b1500da7b0");
        },
        encodeSkipVals: [
            0x80
        ],
        encodeAdd: {
            "€": 0xA2E3
        }
    },
    "chinese": "gb18030",
    // == Korean ===============================================================
    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
    "windows949": "cp949",
    "ms949": "cp949",
    "949": "cp949",
    "cp949": {
        type: "_dbcs",
        table: function() {
            return require("97f577bf8532eb93");
        }
    },
    "cseuckr": "cp949",
    "csksc56011987": "cp949",
    "euckr": "cp949",
    "isoir149": "cp949",
    "korean": "cp949",
    "ksc56011987": "cp949",
    "ksc56011989": "cp949",
    "ksc5601": "cp949",
    // == Big5/Taiwan/Hong Kong ================================================
    // There are lots of tables for Big5 and cp950. Please see the following links for history:
    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
    // Variations, in roughly number of defined chars:
    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
    //    Plus, it has 4 combining sequences.
    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
    // 
    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
    "windows950": "cp950",
    "ms950": "cp950",
    "950": "cp950",
    "cp950": {
        type: "_dbcs",
        table: function() {
            return require("e119a7f28ac84bb1");
        }
    },
    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
    "big5": "big5hkscs",
    "big5hkscs": {
        type: "_dbcs",
        table: function() {
            return require("e119a7f28ac84bb1").concat(require("cf01c21de68946c"));
        },
        encodeSkipVals: [
            0xa2cc
        ]
    },
    "cnbig5": "big5hkscs",
    "csbig5": "big5hkscs",
    "xxbig5": "big5hkscs"
};

},{"7fd6e990ab3bef41":"3HjDM","4ecedfe19d7d5f08":"b7n9h","7a67b65f65727c4":"glkHo","a573389a26b6ed04":"gXMfW","8df748b1500da7b0":"faB3d","97f577bf8532eb93":"cEO4v","e119a7f28ac84bb1":"9PwS2","cf01c21de68946c":"lCYrL"}],"3HjDM":[function(require,module,exports) {
module.exports = JSON.parse('[["0","\\u0000",128],["a1","｡",62],["8140","　、。，．・：；？！゛゜\xb4｀\xa8＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－\xb1\xd7"],["8180","\xf7＝≠＜＞≦≧∞∴♂♀\xb0′″℃￥＄￠￡％＃＆＊＠\xa7☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],["81b8","∈∋⊆⊇⊂⊃∪∩"],["81c8","∧∨￢⇒⇔∀∃"],["81da","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["81f0","Å‰♯♭♪†‡\xb6"],["81fc","◯"],["824f","０",9],["8260","Ａ",25],["8281","ａ",25],["829f","ぁ",82],["8340","ァ",62],["8380","ム",22],["839f","Α",16,"Σ",6],["83bf","α",16,"σ",6],["8440","А",5,"ЁЖ",25],["8470","а",5,"ёж",7],["8480","о",17],["849f","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["8740","①",19,"Ⅰ",9],["875f","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["877e","㍻"],["8780","〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["889f","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["8940","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],["8980","園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["8a40","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],["8a80","橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["8b40","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],["8b80","朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["8c40","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],["8c80","劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["8d40","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],["8d80","項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["8e40","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],["8e80","死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["8f40","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],["8f80","準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["9040","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],["9080","逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["9140","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],["9180","操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["9240","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],["9280","逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["9340","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],["9380","凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["9440","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],["9480","楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["9540","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],["9580","斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["9640","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],["9680","摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["9740","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],["9780","沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["9840","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["989f","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["9940","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],["9980","凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["9a40","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],["9a80","噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["9b40","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],["9b80","它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["9c40","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],["9c80","怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["9d40","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],["9d80","捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["9e40","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],["9e80","梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["9f40","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],["9f80","麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["e040","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],["e080","烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e140","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],["e180","痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e240","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],["e280","窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e340","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],["e380","縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e440","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],["e480","艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e540","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],["e580","蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["e640","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],["e680","諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["e740","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],["e780","轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["e840","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],["e880","閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["e940","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],["e980","騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["ea40","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],["ea80","黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],["ed40","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],["ed80","塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["ee40","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],["ee80","蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["eeef","ⅰ",9,"￢￤＇＂"],["f040","",62],["f080","",124],["f140","",62],["f180","",124],["f240","",62],["f280","",124],["f340","",62],["f380","",124],["f440","",62],["f480","",124],["f540","",62],["f580","",124],["f640","",62],["f680","",124],["f740","",62],["f780","",124],["f840","",62],["f880","",124],["f940",""],["fa40","ⅰ",9,"Ⅰ",9,"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],["fa80","兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],["fb40","涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],["fb80","祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],["fc40","髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]]');

},{}],"b7n9h":[function(require,module,exports) {
module.exports = JSON.parse('[["0","\\u0000",127],["8ea1","｡",62],["a1a1","　、。，．・：；？！゛゜\xb4｀\xa8＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－\xb1\xd7\xf7＝≠＜＞≦≧∞∴♂♀\xb0′″℃￥＄￠￡％＃＆＊＠\xa7☆★○●◎◇"],["a2a1","◆□■△▲▽▼※〒→←↑↓〓"],["a2ba","∈∋⊆⊇⊂⊃∪∩"],["a2ca","∧∨￢⇒⇔∀∃"],["a2dc","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["a2f2","Å‰♯♭♪†‡\xb6"],["a2fe","◯"],["a3b0","０",9],["a3c1","Ａ",25],["a3e1","ａ",25],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a8a1","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["ada1","①",19,"Ⅰ",9],["adc0","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["addf","㍻〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["b0a1","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["b1a1","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],["b2a1","押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["b3a1","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],["b4a1","粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["b5a1","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],["b6a1","供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["b7a1","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],["b8a1","検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["b9a1","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],["baa1","此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["bba1","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],["bca1","次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["bda1","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],["bea1","勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["bfa1","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],["c0a1","澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["c1a1","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],["c2a1","臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["c3a1","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],["c4a1","帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["c5a1","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],["c6a1","董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["c7a1","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],["c8a1","函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["c9a1","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],["caa1","福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["cba1","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],["cca1","漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["cda1","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],["cea1","痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["cfa1","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["d0a1","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["d1a1","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],["d2a1","辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["d3a1","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],["d4a1","圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["d5a1","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],["d6a1","屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["d7a1","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],["d8a1","悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["d9a1","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],["daa1","據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["dba1","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],["dca1","棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["dda1","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],["dea1","沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["dfa1","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],["e0a1","燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e1a1","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],["e2a1","癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e3a1","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],["e4a1","筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e5a1","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],["e6a1","罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e7a1","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],["e8a1","茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e9a1","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],["eaa1","蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["eba1","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],["eca1","譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["eda1","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],["eea1","遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["efa1","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],["f0a1","陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["f1a1","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],["f2a1","髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["f3a1","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],["f4a1","堯槇遙瑤凜熙"],["f9a1","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],["faa1","忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["fba1","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],["fca1","釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["fcf1","ⅰ",9,"￢￤＇＂"],["8fa2af","˘ˇ\xb8˙˝\xaf˛˚～΄΅"],["8fa2c2","\xa1\xa6\xbf"],["8fa2eb","\xba\xaa\xa9\xae™\xa4№"],["8fa6e1","ΆΈΉΊΪ"],["8fa6e7","Ό"],["8fa6e9","ΎΫ"],["8fa6ec","Ώ"],["8fa6f1","άέήίϊΐόςύϋΰώ"],["8fa7c2","Ђ",10,"ЎЏ"],["8fa7f2","ђ",10,"ўџ"],["8fa9a1","\xc6Đ"],["8fa9a4","Ħ"],["8fa9a6","Ĳ"],["8fa9a8","ŁĿ"],["8fa9ab","Ŋ\xd8Œ"],["8fa9af","Ŧ\xde"],["8fa9c1","\xe6đ\xf0ħıĳĸłŀŉŋ\xf8œ\xdfŧ\xfe"],["8faaa1","\xc1\xc0\xc4\xc2ĂǍĀĄ\xc5\xc3ĆĈČ\xc7ĊĎ\xc9\xc8\xcb\xcaĚĖĒĘ"],["8faaba","ĜĞĢĠĤ\xcd\xcc\xcf\xceǏİĪĮĨĴĶĹĽĻŃŇŅ\xd1\xd3\xd2\xd6\xd4ǑŐŌ\xd5ŔŘŖŚŜŠŞŤŢ\xda\xd9\xdc\xdbŬǓŰŪŲŮŨǗǛǙǕŴ\xddŸŶŹŽŻ"],["8faba1","\xe1\xe0\xe4\xe2ăǎāą\xe5\xe3ćĉč\xe7ċď\xe9\xe8\xeb\xeaěėēęǵĝğ"],["8fabbd","ġĥ\xed\xec\xef\xeeǐ"],["8fabc5","īįĩĵķĺľļńňņ\xf1\xf3\xf2\xf6\xf4ǒőō\xf5ŕřŗśŝšşťţ\xfa\xf9\xfc\xfbŭǔűūųůũǘǜǚǖŵ\xfd\xffŷźžż"],["8fb0a1","丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],["8fb1a1","侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],["8fb2a1","傒傓傔傖傛傜傞",4,"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],["8fb3a1","凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],["8fb4a1","匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],["8fb5a1","咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],["8fb6a1","嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",5,"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",4,"囱囫园"],["8fb7a1","囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",4,"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],["8fb8a1","堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],["8fb9a1","奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],["8fbaa1","嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",4,"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],["8fbba1","屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],["8fbca1","巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",4,"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],["8fbda1","彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",4,"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],["8fbea1","悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",4,"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],["8fbfa1","懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],["8fc0a1","捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],["8fc1a1","擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],["8fc2a1","昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],["8fc3a1","杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",4,"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],["8fc4a1","棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],["8fc5a1","樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],["8fc6a1","歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],["8fc7a1","泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],["8fc8a1","湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],["8fc9a1","濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",4,"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",4,"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],["8fcaa1","煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],["8fcba1","狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],["8fcca1","珿琀琁琄琇琊琑琚琛琤琦琨",9,"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],["8fcda1","甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",5,"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],["8fcea1","瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",6,"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],["8fcfa1","睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],["8fd0a1","碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],["8fd1a1","秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],["8fd2a1","笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",5],["8fd3a1","籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],["8fd4a1","綞綦綧綪綳綶綷綹緂",4,"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],["8fd5a1","罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],["8fd6a1","胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],["8fd7a1","艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],["8fd8a1","荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],["8fd9a1","蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",4,"蕖蕙蕜",6,"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],["8fdaa1","藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",4,"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],["8fdba1","蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",6,"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],["8fdca1","蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",4,"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],["8fdda1","襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",4,"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],["8fdea1","誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",4,"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],["8fdfa1","貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],["8fe0a1","踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],["8fe1a1","轃轇轏轑",4,"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],["8fe2a1","郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],["8fe3a1","釂釃釅釓釔釗釙釚釞釤釥釩釪釬",5,"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",4,"鉻鉼鉽鉿銈銉銊銍銎銒銗"],["8fe4a1","銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",4,"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],["8fe5a1","鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",4,"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],["8fe6a1","镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],["8fe7a1","霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],["8fe8a1","頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",4,"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],["8fe9a1","馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",4],["8feaa1","鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",4,"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],["8feba1","鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",4,"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],["8feca1","鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],["8feda1","黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",4,"齓齕齖齗齘齚齝齞齨齩齭",4,"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]]');

},{}],"glkHo":[function(require,module,exports) {
module.exports = JSON.parse('[["0","\\u0000",127,"€"],["8140","丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",5,"乲乴",9,"乿",6,"亇亊"],["8180","亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",6,"伋伌伒",4,"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",4,"佄佅佇",5,"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],["8240","侤侫侭侰",4,"侶",8,"俀俁係俆俇俈俉俋俌俍俒",4,"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",11],["8280","個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",10,"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",4,"偖偗偘偙偛偝",7,"偦",5,"偭",8,"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",20,"傤傦傪傫傭",4,"傳",6,"傼"],["8340","傽",17,"僐",5,"僗僘僙僛",10,"僨僩僪僫僯僰僱僲僴僶",4,"僼",9,"儈"],["8380","儉儊儌",5,"儓",13,"儢",28,"兂兇兊兌兎兏児兒兓兗兘兙兛兝",4,"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",4,"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",5],["8440","凘凙凚凜凞凟凢凣凥",5,"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",5,"剋剎剏剒剓剕剗剘"],["8480","剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",9,"剾劀劃",4,"劉",6,"劑劒劔",6,"劜劤劥劦劧劮劯劰労",9,"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",5,"勠勡勢勣勥",10,"勱",7,"勻勼勽匁匂匃匄匇匉匊匋匌匎"],["8540","匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",9,"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],["8580","厐",4,"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",6,"厷厸厹厺厼厽厾叀參",4,"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",4,"呣呥呧呩",7,"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],["8640","咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",4,"哫哬哯哰哱哴",5,"哻哾唀唂唃唄唅唈唊",4,"唒唓唕",5,"唜唝唞唟唡唥唦"],["8680","唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",4,"啑啒啓啔啗",4,"啝啞啟啠啢啣啨啩啫啯",5,"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",6,"喨",8,"喲喴営喸喺喼喿",4,"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",4,"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",4,"嗿嘂嘃嘄嘅"],["8740","嘆嘇嘊嘋嘍嘐",7,"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",11,"噏",4,"噕噖噚噛噝",4],["8780","噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",7,"嚇",6,"嚐嚑嚒嚔",14,"嚤",10,"嚰",6,"嚸嚹嚺嚻嚽",12,"囋",8,"囕囖囘囙囜団囥",5,"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",6],["8840","園",9,"圝圞圠圡圢圤圥圦圧圫圱圲圴",4,"圼圽圿坁坃坄坅坆坈坉坋坒",4,"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],["8880","垁垇垈垉垊垍",4,"垔",6,"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",8,"埄",6,"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",7,"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",4,"堫",4,"報堲堳場堶",7],["8940","堾",5,"塅",6,"塎塏塐塒塓塕塖塗塙",4,"塟",5,"塦",4,"塭",16,"塿墂墄墆墇墈墊墋墌"],["8980","墍",4,"墔",4,"墛墜墝墠",7,"墪",17,"墽墾墿壀壂壃壄壆",10,"壒壓壔壖",13,"壥",5,"壭壯壱売壴壵壷壸壺",7,"夃夅夆夈",4,"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],["8a40","夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",4,"奡奣奤奦",12,"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],["8a80","妧妬妭妰妱妳",5,"妺妼妽妿",6,"姇姈姉姌姍姎姏姕姖姙姛姞",4,"姤姦姧姩姪姫姭",11,"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",6,"娳娵娷",4,"娽娾娿婁",4,"婇婈婋",9,"婖婗婘婙婛",5],["8b40","婡婣婤婥婦婨婩婫",8,"婸婹婻婼婽婾媀",17,"媓",6,"媜",13,"媫媬"],["8b80","媭",4,"媴媶媷媹",4,"媿嫀嫃",5,"嫊嫋嫍",4,"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",4,"嫲",22,"嬊",11,"嬘",25,"嬳嬵嬶嬸",7,"孁",6],["8c40","孈",7,"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],["8c80","寑寔",8,"寠寢寣實寧審",4,"寯寱",6,"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",6,"屰屲",6,"屻屼屽屾岀岃",4,"岉岊岋岎岏岒岓岕岝",4,"岤",4],["8d40","岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",5,"峌",5,"峓",5,"峚",6,"峢峣峧峩峫峬峮峯峱",9,"峼",4],["8d80","崁崄崅崈",5,"崏",4,"崕崗崘崙崚崜崝崟",4,"崥崨崪崫崬崯",4,"崵",7,"崿",7,"嵈嵉嵍",10,"嵙嵚嵜嵞",10,"嵪嵭嵮嵰嵱嵲嵳嵵",12,"嶃",21,"嶚嶛嶜嶞嶟嶠"],["8e40","嶡",21,"嶸",12,"巆",6,"巎",12,"巜巟巠巣巤巪巬巭"],["8e80","巰巵巶巸",4,"巿帀帄帇帉帊帋帍帎帒帓帗帞",7,"帨",4,"帯帰帲",4,"帹帺帾帿幀幁幃幆",5,"幍",6,"幖",4,"幜幝幟幠幣",14,"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",4,"庮",4,"庴庺庻庼庽庿",6],["8f40","廆廇廈廋",5,"廔廕廗廘廙廚廜",11,"廩廫",8,"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],["8f80","弨弫弬弮弰弲",6,"弻弽弾弿彁",14,"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",5,"復徫徬徯",5,"徶徸徹徺徻徾",4,"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],["9040","怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",4,"怶",4,"怽怾恀恄",6,"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],["9080","悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",7,"惇惈惉惌",4,"惒惓惔惖惗惙惛惞惡",4,"惪惱惲惵惷惸惻",4,"愂愃愄愅愇愊愋愌愐",4,"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",18,"慀",6],["9140","慇慉態慍慏慐慒慓慔慖",6,"慞慟慠慡慣慤慥慦慩",6,"慱慲慳慴慶慸",18,"憌憍憏",4,"憕"],["9180","憖",6,"憞",8,"憪憫憭",9,"憸",5,"憿懀懁懃",4,"應懌",4,"懓懕",16,"懧",13,"懶",8,"戀",5,"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",4,"扂扄扅扆扊"],["9240","扏扐払扖扗扙扚扜",6,"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",5,"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],["9280","拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",5,"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",7,"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",6,"採掤掦掫掯掱掲掵掶掹掻掽掿揀"],["9340","揁揂揃揅揇揈揊揋揌揑揓揔揕揗",6,"揟揢揤",4,"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",4,"損搎搑搒搕",5,"搝搟搢搣搤"],["9380","搥搧搨搩搫搮",5,"搵",4,"搻搼搾摀摂摃摉摋",6,"摓摕摖摗摙",4,"摟",7,"摨摪摫摬摮",9,"摻",6,"撃撆撈",8,"撓撔撗撘撚撛撜撝撟",4,"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",6,"擏擑擓擔擕擖擙據"],["9440","擛擜擝擟擠擡擣擥擧",24,"攁",7,"攊",7,"攓",4,"攙",8],["9480","攢攣攤攦",4,"攬攭攰攱攲攳攷攺攼攽敀",4,"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",14,"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",7,"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",7,"旡旣旤旪旫"],["9540","旲旳旴旵旸旹旻",4,"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",4,"昽昿晀時晄",6,"晍晎晐晑晘"],["9580","晙晛晜晝晞晠晢晣晥晧晩",4,"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",4,"暞",8,"暩",4,"暯",4,"暵暶暷暸暺暻暼暽暿",25,"曚曞",7,"曧曨曪",5,"曱曵曶書曺曻曽朁朂會"],["9640","朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",5,"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",4,"杝杢杣杤杦杧杫杬杮東杴杶"],["9680","杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",7,"柂柅",9,"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",7,"柾栁栂栃栄栆栍栐栒栔栕栘",4,"栞栟栠栢",6,"栫",6,"栴栵栶栺栻栿桇桋桍桏桒桖",5],["9740","桜桝桞桟桪桬",7,"桵桸",8,"梂梄梇",7,"梐梑梒梔梕梖梘",9,"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],["9780","梹",6,"棁棃",5,"棊棌棎棏棐棑棓棔棖棗棙棛",4,"棡棢棤",9,"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",4,"椌椏椑椓",11,"椡椢椣椥",7,"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",16,"楕楖楘楙楛楜楟"],["9840","楡楢楤楥楧楨楩楪楬業楯楰楲",4,"楺楻楽楾楿榁榃榅榊榋榌榎",5,"榖榗榙榚榝",9,"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],["9880","榾榿槀槂",7,"構槍槏槑槒槓槕",5,"槜槝槞槡",11,"槮槯槰槱槳",9,"槾樀",9,"樋",11,"標",5,"樠樢",5,"権樫樬樭樮樰樲樳樴樶",6,"樿",4,"橅橆橈",7,"橑",6,"橚"],["9940","橜",4,"橢橣橤橦",10,"橲",6,"橺橻橽橾橿檁檂檃檅",8,"檏檒",4,"檘",7,"檡",5],["9980","檧檨檪檭",114,"欥欦欨",6],["9a40","欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",11,"歚",7,"歨歩歫",13,"歺歽歾歿殀殅殈"],["9a80","殌殎殏殐殑殔殕殗殘殙殜",4,"殢",7,"殫",7,"殶殸",6,"毀毃毄毆",4,"毌毎毐毑毘毚毜",4,"毢",7,"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",6,"氈",4,"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",4,"汑汒汓汖汘"],["9b40","汙汚汢汣汥汦汧汫",4,"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],["9b80","泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",5,"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",4,"涃涄涆涇涊涋涍涏涐涒涖",4,"涜涢涥涬涭涰涱涳涴涶涷涹",5,"淁淂淃淈淉淊"],["9c40","淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",7,"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],["9c80","渶渷渹渻",7,"湅",7,"湏湐湑湒湕湗湙湚湜湝湞湠",10,"湬湭湯",14,"満溁溂溄溇溈溊",4,"溑",6,"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",5],["9d40","滰滱滲滳滵滶滷滸滺",7,"漃漄漅漇漈漊",4,"漐漑漒漖",9,"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",6,"漿潀潁潂"],["9d80","潃潄潅潈潉潊潌潎",9,"潙潚潛潝潟潠潡潣潤潥潧",5,"潯潰潱潳潵潶潷潹潻潽",6,"澅澆澇澊澋澏",12,"澝澞澟澠澢",4,"澨",10,"澴澵澷澸澺",5,"濁濃",5,"濊",6,"濓",10,"濟濢濣濤濥"],["9e40","濦",7,"濰",32,"瀒",7,"瀜",6,"瀤",6],["9e80","瀫",9,"瀶瀷瀸瀺",17,"灍灎灐",13,"灟",11,"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",12,"炰炲炴炵炶為炾炿烄烅烆烇烉烋",12,"烚"],["9f40","烜烝烞烠烡烢烣烥烪烮烰",6,"烸烺烻烼烾",10,"焋",4,"焑焒焔焗焛",10,"焧",7,"焲焳焴"],["9f80","焵焷",13,"煆煇煈煉煋煍煏",12,"煝煟",4,"煥煩",4,"煯煰煱煴煵煶煷煹煻煼煾",5,"熅",4,"熋熌熍熎熐熑熒熓熕熖熗熚",4,"熡",6,"熩熪熫熭",5,"熴熶熷熸熺",8,"燄",9,"燏",4],["a040","燖",9,"燡燢燣燤燦燨",5,"燯",9,"燺",11,"爇",19],["a080","爛爜爞",9,"爩爫爭爮爯爲爳爴爺爼爾牀",6,"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",4,"犌犎犐犑犓",11,"犠",11,"犮犱犲犳犵犺",6,"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],["a1a1","　、。\xb7ˉˇ\xa8〃々—～‖…‘’“”〔〕〈",7,"〖〗【】\xb1\xd7\xf7∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀\xb0′″℃＄\xa4￠￡‰\xa7№☆★○●◎◇◆□■△▲※→←↑↓〓"],["a2a1","ⅰ",9],["a2b1","⒈",19,"⑴",19,"①",9],["a2e5","㈠",9],["a2f1","Ⅰ",11],["a3a1","！＂＃￥％",88,"￣"],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a6e0","︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],["a6ee","︻︼︷︸︱"],["a6f4","︳︴"],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a840","ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",35,"▁",6],["a880","█",7,"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],["a8a1","ā\xe1ǎ\xe0ē\xe9ě\xe8ī\xedǐ\xecō\xf3ǒ\xf2ū\xfaǔ\xf9ǖǘǚǜ\xfc\xeaɑ"],["a8bd","ńň"],["a8c0","ɡ"],["a8c5","ㄅ",36],["a940","〡",8,"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],["a959","℡㈱"],["a95c","‐"],["a960","ー゛゜ヽヾ〆ゝゞ﹉",9,"﹔﹕﹖﹗﹙",8],["a980","﹢",4,"﹨﹩﹪﹫"],["a996","〇"],["a9a4","─",75],["aa40","狜狝狟狢",5,"狪狫狵狶狹狽狾狿猀猂猄",5,"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",8],["aa80","獉獊獋獌獎獏獑獓獔獕獖獘",7,"獡",10,"獮獰獱"],["ab40","獲",11,"獿",4,"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",5,"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",4],["ab80","珋珌珎珒",6,"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",4],["ac40","珸",10,"琄琇琈琋琌琍琎琑",8,"琜",5,"琣琤琧琩琫琭琯琱琲琷",4,"琽琾琿瑀瑂",11],["ac80","瑎",6,"瑖瑘瑝瑠",12,"瑮瑯瑱",4,"瑸瑹瑺"],["ad40","瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",10,"璝璟",7,"璪",15,"璻",12],["ad80","瓈",9,"瓓",8,"瓝瓟瓡瓥瓧",6,"瓰瓱瓲"],["ae40","瓳瓵瓸",6,"甀甁甂甃甅",7,"甎甐甒甔甕甖甗甛甝甞甠",4,"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],["ae80","畝",7,"畧畨畩畫",6,"畳畵當畷畺",4,"疀疁疂疄疅疇"],["af40","疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",4,"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],["af80","瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],["b040","癅",6,"癎",5,"癕癗",4,"癝癟癠癡癢癤",6,"癬癭癮癰",7,"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],["b080","皜",7,"皥",8,"皯皰皳皵",9,"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],["b140","盄盇盉盋盌盓盕盙盚盜盝盞盠",4,"盦",7,"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",10,"眛眜眝眞眡眣眤眥眧眪眫"],["b180","眬眮眰",4,"眹眻眽眾眿睂睄睅睆睈",7,"睒",7,"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],["b240","睝睞睟睠睤睧睩睪睭",11,"睺睻睼瞁瞂瞃瞆",5,"瞏瞐瞓",11,"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",4],["b280","瞼瞾矀",12,"矎",8,"矘矙矚矝",4,"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],["b340","矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",5,"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],["b380","硛硜硞",11,"硯",7,"硸硹硺硻硽",6,"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],["b440","碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",7,"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",9],["b480","磤磥磦磧磩磪磫磭",4,"磳磵磶磸磹磻",5,"礂礃礄礆",6,"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],["b540","礍",5,"礔",9,"礟",4,"礥",14,"礵",4,"礽礿祂祃祄祅祇祊",8,"祔祕祘祙祡祣"],["b580","祤祦祩祪祫祬祮祰",6,"祹祻",4,"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],["b640","禓",6,"禛",11,"禨",10,"禴",4,"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",5,"秠秡秢秥秨秪"],["b680","秬秮秱",6,"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",4,"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],["b740","稝稟稡稢稤",14,"稴稵稶稸稺稾穀",5,"穇",9,"穒",4,"穘",16],["b780","穩",6,"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],["b840","窣窤窧窩窪窫窮",4,"窴",10,"竀",10,"竌",9,"竗竘竚竛竜竝竡竢竤竧",5,"竮竰竱竲竳"],["b880","竴",4,"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],["b940","笯笰笲笴笵笶笷笹笻笽笿",5,"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",10,"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",6,"箎箏"],["b980","箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",7,"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],["ba40","篅篈築篊篋篍篎篏篐篒篔",4,"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",4,"篸篹篺篻篽篿",7,"簈簉簊簍簎簐",5,"簗簘簙"],["ba80","簚",4,"簠",5,"簨簩簫",12,"簹",5,"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],["bb40","籃",9,"籎",36,"籵",5,"籾",9],["bb80","粈粊",6,"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",4,"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],["bc40","粿糀糂糃糄糆糉糋糎",6,"糘糚糛糝糞糡",6,"糩",5,"糰",7,"糹糺糼",13,"紋",5],["bc80","紑",14,"紡紣紤紥紦紨紩紪紬紭紮細",6,"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],["bd40","紷",54,"絯",7],["bd80","絸",32,"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],["be40","継",12,"綧",6,"綯",42],["be80","線",32,"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],["bf40","緻",62],["bf80","縺縼",4,"繂",4,"繈",21,"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],["c040","繞",35,"纃",23,"纜纝纞"],["c080","纮纴纻纼绖绤绬绹缊缐缞缷缹缻",6,"罃罆",9,"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],["c140","罖罙罛罜罝罞罠罣",4,"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",7,"羋羍羏",4,"羕",4,"羛羜羠羢羣羥羦羨",6,"羱"],["c180","羳",4,"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",4,"翖翗翙",5,"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],["c240","翤翧翨翪翫翬翭翯翲翴",6,"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",5,"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],["c280","聙聛",13,"聫",5,"聲",11,"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],["c340","聾肁肂肅肈肊肍",5,"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",4,"胏",6,"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],["c380","脌脕脗脙脛脜脝脟",12,"脭脮脰脳脴脵脷脹",4,"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],["c440","腀",5,"腇腉腍腎腏腒腖腗腘腛",4,"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",4,"膉膋膌膍膎膐膒",5,"膙膚膞",4,"膤膥"],["c480","膧膩膫",7,"膴",5,"膼膽膾膿臄臅臇臈臉臋臍",6,"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],["c540","臔",14,"臤臥臦臨臩臫臮",4,"臵",5,"臽臿舃與",4,"舎舏舑舓舕",5,"舝舠舤舥舦舧舩舮舲舺舼舽舿"],["c580","艀艁艂艃艅艆艈艊艌艍艎艐",7,"艙艛艜艝艞艠",7,"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],["c640","艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],["c680","苺苼",4,"茊茋茍茐茒茓茖茘茙茝",9,"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],["c740","茾茿荁荂荄荅荈荊",4,"荓荕",4,"荝荢荰",6,"荹荺荾",6,"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",6,"莬莭莮"],["c780","莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],["c840","菮華菳",4,"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",5,"萙萚萛萞",5,"萩",7,"萲",5,"萹萺萻萾",7,"葇葈葉"],["c880","葊",6,"葒",4,"葘葝葞葟葠葢葤",4,"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],["c940","葽",4,"蒃蒄蒅蒆蒊蒍蒏",7,"蒘蒚蒛蒝蒞蒟蒠蒢",12,"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],["c980","蓘",4,"蓞蓡蓢蓤蓧",4,"蓭蓮蓯蓱",10,"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],["ca40","蔃",8,"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",8,"蔭",9,"蔾",4,"蕄蕅蕆蕇蕋",10],["ca80","蕗蕘蕚蕛蕜蕝蕟",4,"蕥蕦蕧蕩",8,"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],["cb40","薂薃薆薈",6,"薐",10,"薝",6,"薥薦薧薩薫薬薭薱",5,"薸薺",6,"藂",6,"藊",4,"藑藒"],["cb80","藔藖",5,"藝",6,"藥藦藧藨藪",14,"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],["cc40","藹藺藼藽藾蘀",4,"蘆",10,"蘒蘓蘔蘕蘗",15,"蘨蘪",13,"蘹蘺蘻蘽蘾蘿虀"],["cc80","虁",11,"虒虓處",4,"虛虜虝號虠虡虣",7,"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],["cd40","虭虯虰虲",6,"蚃",6,"蚎",4,"蚔蚖",5,"蚞",4,"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",4,"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],["cd80","蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],["ce40","蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",6,"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",5,"蝡蝢蝦",7,"蝯蝱蝲蝳蝵"],["ce80","蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",4,"螔螕螖螘",6,"螠",4,"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],["cf40","螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",4,"蟇蟈蟉蟌",4,"蟔",6,"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",9],["cf80","蟺蟻蟼蟽蟿蠀蠁蠂蠄",5,"蠋",7,"蠔蠗蠘蠙蠚蠜",4,"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],["d040","蠤",13,"蠳",5,"蠺蠻蠽蠾蠿衁衂衃衆",5,"衎",5,"衕衖衘衚",6,"衦衧衪衭衯衱衳衴衵衶衸衹衺"],["d080","衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",4,"袝",4,"袣袥",5,"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],["d140","袬袮袯袰袲",4,"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",4,"裠裡裦裧裩",6,"裲裵裶裷裺裻製裿褀褁褃",5],["d180","褉褋",4,"褑褔",4,"褜",4,"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],["d240","褸",8,"襂襃襅",24,"襠",5,"襧",19,"襼"],["d280","襽襾覀覂覄覅覇",26,"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],["d340","覢",30,"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",6],["d380","觻",4,"訁",5,"計",21,"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],["d440","訞",31,"訿",8,"詉",21],["d480","詟",25,"詺",6,"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],["d540","誁",7,"誋",7,"誔",46],["d580","諃",32,"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],["d640","諤",34,"謈",27],["d680","謤謥謧",30,"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],["d740","譆",31,"譧",4,"譭",25],["d780","讇",24,"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],["d840","谸",8,"豂豃豄豅豈豊豋豍",7,"豖豗豘豙豛",5,"豣",6,"豬",6,"豴豵豶豷豻",6,"貃貄貆貇"],["d880","貈貋貍",6,"貕貖貗貙",20,"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],["d940","貮",62],["d980","賭",32,"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],["da40","贎",14,"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",8,"趂趃趆趇趈趉趌",4,"趒趓趕",9,"趠趡"],["da80","趢趤",12,"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],["db40","跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",6,"踆踇踈踋踍踎踐踑踒踓踕",7,"踠踡踤",4,"踫踭踰踲踳踴踶踷踸踻踼踾"],["db80","踿蹃蹅蹆蹌",4,"蹓",5,"蹚",11,"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],["dc40","蹳蹵蹷",4,"蹽蹾躀躂躃躄躆躈",6,"躑躒躓躕",6,"躝躟",11,"躭躮躰躱躳",6,"躻",7],["dc80","軃",10,"軏",21,"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],["dd40","軥",62],["dd80","輤",32,"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],["de40","轅",32,"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],["de80","迉",4,"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],["df40","這逜連逤逥逧",5,"逰",4,"逷逹逺逽逿遀遃遅遆遈",4,"過達違遖遙遚遜",5,"遤遦遧適遪遫遬遯",4,"遶",6,"遾邁"],["df80","還邅邆邇邉邊邌",4,"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],["e040","郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",19,"鄚鄛鄜"],["e080","鄝鄟鄠鄡鄤",10,"鄰鄲",6,"鄺",8,"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],["e140","酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",4,"醆醈醊醎醏醓",6,"醜",5,"醤",5,"醫醬醰醱醲醳醶醷醸醹醻"],["e180","醼",10,"釈釋釐釒",9,"針",8,"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],["e240","釦",62],["e280","鈥",32,"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",5,"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],["e340","鉆",45,"鉵",16],["e380","銆",7,"銏",24,"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],["e440","銨",5,"銯",24,"鋉",31],["e480","鋩",32,"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],["e540","錊",51,"錿",10],["e580","鍊",31,"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],["e640","鍬",34,"鎐",27],["e680","鎬",29,"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],["e740","鏎",7,"鏗",54],["e780","鐎",32,"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",6,"缪缫缬缭缯",4,"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],["e840","鐯",14,"鐿",43,"鑬鑭鑮鑯"],["e880","鑰",20,"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],["e940","锧锳锽镃镈镋镕镚镠镮镴镵長",7,"門",42],["e980","閫",32,"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],["ea40","闌",27,"闬闿阇阓阘阛阞阠阣",6,"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],["ea80","陘陙陚陜陝陞陠陣陥陦陫陭",4,"陳陸",12,"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],["eb40","隌階隑隒隓隕隖隚際隝",9,"隨",7,"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",9,"雡",6,"雫"],["eb80","雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",4,"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],["ec40","霡",8,"霫霬霮霯霱霳",4,"霺霻霼霽霿",18,"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",7],["ec80","靲靵靷",4,"靽",7,"鞆",4,"鞌鞎鞏鞐鞓鞕鞖鞗鞙",4,"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],["ed40","鞞鞟鞡鞢鞤",6,"鞬鞮鞰鞱鞳鞵",46],["ed80","韤韥韨韮",4,"韴韷",23,"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],["ee40","頏",62],["ee80","顎",32,"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",4,"钼钽钿铄铈",6,"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],["ef40","顯",5,"颋颎颒颕颙颣風",37,"飏飐飔飖飗飛飜飝飠",4],["ef80","飥飦飩",30,"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",4,"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",8,"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],["f040","餈",4,"餎餏餑",28,"餯",26],["f080","饊",9,"饖",12,"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",4,"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",6,"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],["f140","馌馎馚",10,"馦馧馩",47],["f180","駙",32,"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],["f240","駺",62],["f280","騹",32,"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],["f340","驚",17,"驲骃骉骍骎骔骕骙骦骩",6,"骲骳骴骵骹骻骽骾骿髃髄髆",4,"髍髎髏髐髒體髕髖髗髙髚髛髜"],["f380","髝髞髠髢髣髤髥髧髨髩髪髬髮髰",8,"髺髼",6,"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],["f440","鬇鬉",5,"鬐鬑鬒鬔",10,"鬠鬡鬢鬤",10,"鬰鬱鬳",7,"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",5],["f480","魛",32,"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],["f540","魼",62],["f580","鮻",32,"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],["f640","鯜",62],["f680","鰛",32,"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",5,"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",5,"鲥",4,"鲫鲭鲮鲰",7,"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],["f740","鰼",62],["f780","鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",4,"鳈鳉鳑鳒鳚鳛鳠鳡鳌",4,"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],["f840","鳣",62],["f880","鴢",32],["f940","鵃",62],["f980","鶂",32],["fa40","鶣",62],["fa80","鷢",32],["fb40","鸃",27,"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",9,"麀"],["fb80","麁麃麄麅麆麉麊麌",5,"麔",8,"麞麠",5,"麧麨麩麪"],["fc40","麫",8,"麵麶麷麹麺麼麿",4,"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",8,"黺黽黿",6],["fc80","鼆",4,"鼌鼏鼑鼒鼔鼕鼖鼘鼚",5,"鼡鼣",8,"鼭鼮鼰鼱"],["fd40","鼲",4,"鼸鼺鼼鼿",4,"齅",10,"齒",38],["fd80","齹",5,"龁龂龍",11,"龜龝龞龡",4,"郎凉秊裏隣"],["fe40","兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]]');

},{}],"gXMfW":[function(require,module,exports) {
module.exports = JSON.parse('[["a140","",62],["a180","",32],["a240","",62],["a280","",32],["a2ab","",5],["a2e3","€"],["a2ef",""],["a2fd",""],["a340","",62],["a380","",31,"　"],["a440","",62],["a480","",32],["a4f4","",10],["a540","",62],["a580","",32],["a5f7","",7],["a640","",62],["a680","",32],["a6b9","",7],["a6d9","",6],["a6ec",""],["a6f3",""],["a6f6","",8],["a740","",62],["a780","",32],["a7c2","",14],["a7f2","",12],["a896","",10],["a8bc",""],["a8bf","ǹ"],["a8c1",""],["a8ea","",20],["a958",""],["a95b",""],["a95d",""],["a989","〾⿰",11],["a997","",12],["a9f0","",14],["aaa1","",93],["aba1","",93],["aca1","",93],["ada1","",93],["aea1","",93],["afa1","",93],["d7fa","",4],["f8a1","",93],["f9a1","",93],["faa1","",93],["fba1","",93],["fca1","",93],["fda1","",93],["fe50","⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],["fe80","䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",6,"䶮",93]]');

},{}],"faB3d":[function(require,module,exports) {
module.exports = JSON.parse('{"uChars":[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],"gbChars":[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189000]}');

},{}],"cEO4v":[function(require,module,exports) {
module.exports = JSON.parse('[["0","\\u0000",127],["8141","갂갃갅갆갋",4,"갘갞갟갡갢갣갥",6,"갮갲갳갴"],["8161","갵갶갷갺갻갽갾갿걁",9,"걌걎",5,"걕"],["8181","걖걗걙걚걛걝",18,"걲걳걵걶걹걻",4,"겂겇겈겍겎겏겑겒겓겕",6,"겞겢",5,"겫겭겮겱",6,"겺겾겿곀곂곃곅곆곇곉곊곋곍",7,"곖곘",7,"곢곣곥곦곩곫곭곮곲곴곷",4,"곾곿괁괂괃괅괇",4,"괎괐괒괓"],["8241","괔괕괖괗괙괚괛괝괞괟괡",7,"괪괫괮",5],["8261","괶괷괹괺괻괽",6,"굆굈굊",5,"굑굒굓굕굖굗"],["8281","굙",7,"굢굤",7,"굮굯굱굲굷굸굹굺굾궀궃",4,"궊궋궍궎궏궑",10,"궞",5,"궥",17,"궸",7,"귂귃귅귆귇귉",6,"귒귔",7,"귝귞귟귡귢귣귥",18],["8341","귺귻귽귾긂",5,"긊긌긎",5,"긕",7],["8361","긝",18,"긲긳긵긶긹긻긼"],["8381","긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",4,"깞깢깣깤깦깧깪깫깭깮깯깱",6,"깺깾",5,"꺆",5,"꺍",46,"꺿껁껂껃껅",6,"껎껒",5,"껚껛껝",8],["8441","껦껧껩껪껬껮",5,"껵껶껷껹껺껻껽",8],["8461","꼆꼉꼊꼋꼌꼎꼏꼑",18],["8481","꼤",7,"꼮꼯꼱꼳꼵",6,"꼾꽀꽄꽅꽆꽇꽊",5,"꽑",10,"꽞",5,"꽦",18,"꽺",5,"꾁꾂꾃꾅꾆꾇꾉",6,"꾒꾓꾔꾖",5,"꾝",26,"꾺꾻꾽꾾"],["8541","꾿꿁",5,"꿊꿌꿏",4,"꿕",6,"꿝",4],["8561","꿢",5,"꿪",5,"꿲꿳꿵꿶꿷꿹",6,"뀂뀃"],["8581","뀅",6,"뀍뀎뀏뀑뀒뀓뀕",6,"뀞",9,"뀩",26,"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",29,"끾끿낁낂낃낅",6,"낎낐낒",5,"낛낝낞낣낤"],["8641","낥낦낧낪낰낲낶낷낹낺낻낽",6,"냆냊",5,"냒"],["8661","냓냕냖냗냙",6,"냡냢냣냤냦",10],["8681","냱",22,"넊넍넎넏넑넔넕넖넗넚넞",4,"넦넧넩넪넫넭",6,"넶넺",5,"녂녃녅녆녇녉",6,"녒녓녖녗녙녚녛녝녞녟녡",22,"녺녻녽녾녿놁놃",4,"놊놌놎놏놐놑놕놖놗놙놚놛놝"],["8741","놞",9,"놩",15],["8761","놹",18,"뇍뇎뇏뇑뇒뇓뇕"],["8781","뇖",5,"뇞뇠",7,"뇪뇫뇭뇮뇯뇱",7,"뇺뇼뇾",5,"눆눇눉눊눍",6,"눖눘눚",5,"눡",18,"눵",6,"눽",26,"뉙뉚뉛뉝뉞뉟뉡",6,"뉪",4],["8841","뉯",4,"뉶",5,"뉽",6,"늆늇늈늊",4],["8861","늏늒늓늕늖늗늛",4,"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],["8881","늸",15,"닊닋닍닎닏닑닓",4,"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",6,"댒댖",5,"댝",54,"덗덙덚덝덠덡덢덣"],["8941","덦덨덪덬덭덯덲덳덵덶덷덹",6,"뎂뎆",5,"뎍"],["8961","뎎뎏뎑뎒뎓뎕",10,"뎢",5,"뎩뎪뎫뎭"],["8981","뎮",21,"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",18,"돽",18,"됑",6,"됙됚됛됝됞됟됡",6,"됪됬",7,"됵",15],["8a41","둅",10,"둒둓둕둖둗둙",6,"둢둤둦"],["8a61","둧",4,"둭",18,"뒁뒂"],["8a81","뒃",4,"뒉",19,"뒞",5,"뒥뒦뒧뒩뒪뒫뒭",7,"뒶뒸뒺",5,"듁듂듃듅듆듇듉",6,"듑듒듓듔듖",5,"듞듟듡듢듥듧",4,"듮듰듲",5,"듹",26,"딖딗딙딚딝"],["8b41","딞",5,"딦딫",4,"딲딳딵딶딷딹",6,"땂땆"],["8b61","땇땈땉땊땎땏땑땒땓땕",6,"땞땢",8],["8b81","땫",52,"떢떣떥떦떧떩떬떭떮떯떲떶",4,"떾떿뗁뗂뗃뗅",6,"뗎뗒",5,"뗙",18,"뗭",18],["8c41","똀",15,"똒똓똕똖똗똙",4],["8c61","똞",6,"똦",5,"똭",6,"똵",5],["8c81","똻",12,"뙉",26,"뙥뙦뙧뙩",50,"뚞뚟뚡뚢뚣뚥",5,"뚭뚮뚯뚰뚲",16],["8d41","뛃",16,"뛕",8],["8d61","뛞",17,"뛱뛲뛳뛵뛶뛷뛹뛺"],["8d81","뛻",4,"뜂뜃뜄뜆",33,"뜪뜫뜭뜮뜱",6,"뜺뜼",7,"띅띆띇띉띊띋띍",6,"띖",9,"띡띢띣띥띦띧띩",6,"띲띴띶",5,"띾띿랁랂랃랅",6,"랎랓랔랕랚랛랝랞"],["8e41","랟랡",6,"랪랮",5,"랶랷랹",8],["8e61","럂",4,"럈럊",19],["8e81","럞",13,"럮럯럱럲럳럵",6,"럾렂",4,"렊렋렍렎렏렑",6,"렚렜렞",5,"렦렧렩렪렫렭",6,"렶렺",5,"롁롂롃롅",11,"롒롔",7,"롞롟롡롢롣롥",6,"롮롰롲",5,"롹롺롻롽",7],["8f41","뢅",7,"뢎",17],["8f61","뢠",7,"뢩",6,"뢱뢲뢳뢵뢶뢷뢹",4],["8f81","뢾뢿룂룄룆",5,"룍룎룏룑룒룓룕",7,"룞룠룢",5,"룪룫룭룮룯룱",6,"룺룼룾",5,"뤅",18,"뤙",6,"뤡",26,"뤾뤿륁륂륃륅",6,"륍륎륐륒",5],["9041","륚륛륝륞륟륡",6,"륪륬륮",5,"륶륷륹륺륻륽"],["9061","륾",5,"릆릈릋릌릏",15],["9081","릟",12,"릮릯릱릲릳릵",6,"릾맀맂",5,"맊맋맍맓",4,"맚맜맟맠맢맦맧맩맪맫맭",6,"맶맻",4,"먂",5,"먉",11,"먖",33,"먺먻먽먾먿멁멃멄멅멆"],["9141","멇멊멌멏멐멑멒멖멗멙멚멛멝",6,"멦멪",5],["9161","멲멳멵멶멷멹",9,"몆몈몉몊몋몍",5],["9181","몓",20,"몪몭몮몯몱몳",4,"몺몼몾",5,"뫅뫆뫇뫉",14,"뫚",33,"뫽뫾뫿묁묂묃묅",7,"묎묐묒",5,"묙묚묛묝묞묟묡",6],["9241","묨묪묬",7,"묷묹묺묿",4,"뭆뭈뭊뭋뭌뭎뭑뭒"],["9261","뭓뭕뭖뭗뭙",7,"뭢뭤",7,"뭭",4],["9281","뭲",21,"뮉뮊뮋뮍뮎뮏뮑",18,"뮥뮦뮧뮩뮪뮫뮭",6,"뮵뮶뮸",7,"믁믂믃믅믆믇믉",6,"믑믒믔",35,"믺믻믽믾밁"],["9341","밃",4,"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],["9361","밶밷밹",6,"뱂뱆뱇뱈뱊뱋뱎뱏뱑",8],["9381","뱚뱛뱜뱞",37,"벆벇벉벊벍벏",4,"벖벘벛",4,"벢벣벥벦벩",6,"벲벶",5,"벾벿볁볂볃볅",7,"볎볒볓볔볖볗볙볚볛볝",22,"볷볹볺볻볽"],["9441","볾",5,"봆봈봊",5,"봑봒봓봕",8],["9461","봞",5,"봥",6,"봭",12],["9481","봺",5,"뵁",6,"뵊뵋뵍뵎뵏뵑",6,"뵚",9,"뵥뵦뵧뵩",22,"붂붃붅붆붋",4,"붒붔붖붗붘붛붝",6,"붥",10,"붱",6,"붹",24],["9541","뷒뷓뷖뷗뷙뷚뷛뷝",11,"뷪",5,"뷱"],["9561","뷲뷳뷵뷶뷷뷹",6,"븁븂븄븆",5,"븎븏븑븒븓"],["9581","븕",6,"븞븠",35,"빆빇빉빊빋빍빏",4,"빖빘빜빝빞빟빢빣빥빦빧빩빫",4,"빲빶",4,"빾빿뺁뺂뺃뺅",6,"뺎뺒",5,"뺚",13,"뺩",14],["9641","뺸",23,"뻒뻓"],["9661","뻕뻖뻙",6,"뻡뻢뻦",5,"뻭",8],["9681","뻶",10,"뼂",5,"뼊",13,"뼚뼞",33,"뽂뽃뽅뽆뽇뽉",6,"뽒뽓뽔뽖",44],["9741","뾃",16,"뾕",8],["9761","뾞",17,"뾱",7],["9781","뾹",11,"뿆",5,"뿎뿏뿑뿒뿓뿕",6,"뿝뿞뿠뿢",89,"쀽쀾쀿"],["9841","쁀",16,"쁒",5,"쁙쁚쁛"],["9861","쁝쁞쁟쁡",6,"쁪",15],["9881","쁺",21,"삒삓삕삖삗삙",6,"삢삤삦",5,"삮삱삲삷",4,"삾샂샃샄샆샇샊샋샍샎샏샑",6,"샚샞",5,"샦샧샩샪샫샭",6,"샶샸샺",5,"섁섂섃섅섆섇섉",6,"섑섒섓섔섖",5,"섡섢섥섨섩섪섫섮"],["9941","섲섳섴섵섷섺섻섽섾섿셁",6,"셊셎",5,"셖셗"],["9961","셙셚셛셝",6,"셦셪",5,"셱셲셳셵셶셷셹셺셻"],["9981","셼",8,"솆",5,"솏솑솒솓솕솗",4,"솞솠솢솣솤솦솧솪솫솭솮솯솱",11,"솾",5,"쇅쇆쇇쇉쇊쇋쇍",6,"쇕쇖쇙",6,"쇡쇢쇣쇥쇦쇧쇩",6,"쇲쇴",7,"쇾쇿숁숂숃숅",6,"숎숐숒",5,"숚숛숝숞숡숢숣"],["9a41","숤숥숦숧숪숬숮숰숳숵",16],["9a61","쉆쉇쉉",6,"쉒쉓쉕쉖쉗쉙",6,"쉡쉢쉣쉤쉦"],["9a81","쉧",4,"쉮쉯쉱쉲쉳쉵",6,"쉾슀슂",5,"슊",5,"슑",6,"슙슚슜슞",5,"슦슧슩슪슫슮",5,"슶슸슺",33,"싞싟싡싢싥",5,"싮싰싲싳싴싵싷싺싽싾싿쌁",6,"쌊쌋쌎쌏"],["9b41","쌐쌑쌒쌖쌗쌙쌚쌛쌝",6,"쌦쌧쌪",8],["9b61","쌳",17,"썆",7],["9b81","썎",25,"썪썫썭썮썯썱썳",4,"썺썻썾",5,"쎅쎆쎇쎉쎊쎋쎍",50,"쏁",22,"쏚"],["9c41","쏛쏝쏞쏡쏣",4,"쏪쏫쏬쏮",5,"쏶쏷쏹",5],["9c61","쏿",8,"쐉",6,"쐑",9],["9c81","쐛",8,"쐥",6,"쐭쐮쐯쐱쐲쐳쐵",6,"쐾",9,"쑉",26,"쑦쑧쑩쑪쑫쑭",6,"쑶쑷쑸쑺",5,"쒁",18,"쒕",6,"쒝",12],["9d41","쒪",13,"쒹쒺쒻쒽",8],["9d61","쓆",25],["9d81","쓠",8,"쓪",5,"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",9,"씍씎씏씑씒씓씕",6,"씝",10,"씪씫씭씮씯씱",6,"씺씼씾",5,"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",6,"앲앶",5,"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],["9e41","얖얙얚얛얝얞얟얡",7,"얪",9,"얶"],["9e61","얷얺얿",4,"엋엍엏엒엓엕엖엗엙",6,"엢엤엦엧"],["9e81","엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",6,"옚옝",6,"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",6,"왒왖",5,"왞왟왡",10,"왭왮왰왲",5,"왺왻왽왾왿욁",6,"욊욌욎",5,"욖욗욙욚욛욝",6,"욦"],["9f41","욨욪",5,"욲욳욵욶욷욻",4,"웂웄웆",5,"웎"],["9f61","웏웑웒웓웕",6,"웞웟웢",5,"웪웫웭웮웯웱웲"],["9f81","웳",4,"웺웻웼웾",5,"윆윇윉윊윋윍",6,"윖윘윚",5,"윢윣윥윦윧윩",6,"윲윴윶윸윹윺윻윾윿읁읂읃읅",4,"읋읎읐읙읚읛읝읞읟읡",6,"읩읪읬",7,"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",4,"잢잧",4,"잮잯잱잲잳잵잶잷"],["a041","잸잹잺잻잾쟂",5,"쟊쟋쟍쟏쟑",6,"쟙쟚쟛쟜"],["a061","쟞",5,"쟥쟦쟧쟩쟪쟫쟭",13],["a081","쟻",4,"젂젃젅젆젇젉젋",4,"젒젔젗",4,"젞젟젡젢젣젥",6,"젮젰젲",5,"젹젺젻젽젾젿졁",6,"졊졋졎",5,"졕",26,"졲졳졵졶졷졹졻",4,"좂좄좈좉좊좎",5,"좕",7,"좞좠좢좣좤"],["a141","좥좦좧좩",18,"좾좿죀죁"],["a161","죂죃죅죆죇죉죊죋죍",6,"죖죘죚",5,"죢죣죥"],["a181","죦",14,"죶",5,"죾죿줁줂줃줇",4,"줎　、。\xb7‥…\xa8〃\xad―∥＼∼‘’“”〔〕〈",9,"\xb1\xd7\xf7≠≤≥∞∴\xb0′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒\xa7※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],["a241","줐줒",5,"줙",18],["a261","줭",6,"줵",18],["a281","쥈",7,"쥒쥓쥕쥖쥗쥙",6,"쥢쥤",7,"쥭쥮쥯⇒⇔∀∃\xb4～ˇ˘˝˚˙\xb8˛\xa1\xbfː∮∑∏\xa4℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞\xb6†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€\xae"],["a341","쥱쥲쥳쥵",6,"쥽",10,"즊즋즍즎즏"],["a361","즑",6,"즚즜즞",16],["a381","즯",16,"짂짃짅짆짉짋",4,"짒짔짗짘짛！",58,"￦］",32,"￣"],["a441","짞짟짡짣짥짦짨짩짪짫짮짲",5,"짺짻짽짾짿쨁쨂쨃쨄"],["a461","쨅쨆쨇쨊쨎",5,"쨕쨖쨗쨙",12],["a481","쨦쨧쨨쨪",28,"ㄱ",93],["a541","쩇",4,"쩎쩏쩑쩒쩓쩕",6,"쩞쩢",5,"쩩쩪"],["a561","쩫",17,"쩾",5,"쪅쪆"],["a581","쪇",16,"쪙",14,"ⅰ",9],["a5b0","Ⅰ",9],["a5c1","Α",16,"Σ",6],["a5e1","α",16,"σ",6],["a641","쪨",19,"쪾쪿쫁쫂쫃쫅"],["a661","쫆",5,"쫎쫐쫒쫔쫕쫖쫗쫚",5,"쫡",6],["a681","쫨쫩쫪쫫쫭",6,"쫵",18,"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",7],["a741","쬋",4,"쬑쬒쬓쬕쬖쬗쬙",6,"쬢",7],["a761","쬪",22,"쭂쭃쭄"],["a781","쭅쭆쭇쭊쭋쭍쭎쭏쭑",6,"쭚쭛쭜쭞",5,"쭥",7,"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",9,"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",9,"㎀",4,"㎺",5,"㎐",4,"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],["a841","쭭",10,"쭺",14],["a861","쮉",18,"쮝",6],["a881","쮤",19,"쮹",11,"\xc6\xd0\xaaĦ"],["a8a6","Ĳ"],["a8a8","ĿŁ\xd8Œ\xba\xdeŦŊ"],["a8b1","㉠",27,"ⓐ",25,"①",14,"\xbd⅓⅔\xbc\xbe⅛⅜⅝⅞"],["a941","쯅",14,"쯕",10],["a961","쯠쯡쯢쯣쯥쯦쯨쯪",18],["a981","쯽",14,"찎찏찑찒찓찕",6,"찞찟찠찣찤\xe6đ\xf0ħıĳĸŀł\xf8œ\xdf\xfeŧŋŉ㈀",27,"⒜",25,"⑴",14,"\xb9\xb2\xb3⁴ⁿ₁₂₃₄"],["aa41","찥찦찪찫찭찯찱",6,"찺찿",4,"챆챇챉챊챋챍챎"],["aa61","챏",4,"챖챚",5,"챡챢챣챥챧챩",6,"챱챲"],["aa81","챳챴챶",29,"ぁ",82],["ab41","첔첕첖첗첚첛첝첞첟첡",6,"첪첮",5,"첶첷첹"],["ab61","첺첻첽",6,"쳆쳈쳊",5,"쳑쳒쳓쳕",5],["ab81","쳛",8,"쳥",6,"쳭쳮쳯쳱",12,"ァ",85],["ac41","쳾쳿촀촂",5,"촊촋촍촎촏촑",6,"촚촜촞촟촠"],["ac61","촡촢촣촥촦촧촩촪촫촭",11,"촺",4],["ac81","촿",28,"쵝쵞쵟А",5,"ЁЖ",25],["acd1","а",5,"ёж",25],["ad41","쵡쵢쵣쵥",6,"쵮쵰쵲",5,"쵹",7],["ad61","춁",6,"춉",10,"춖춗춙춚춛춝춞춟"],["ad81","춠춡춢춣춦춨춪",5,"춱",18,"췅"],["ae41","췆",5,"췍췎췏췑",16],["ae61","췢",5,"췩췪췫췭췮췯췱",6,"췺췼췾",4],["ae81","츃츅츆츇츉츊츋츍",6,"츕츖츗츘츚",5,"츢츣츥츦츧츩츪츫"],["af41","츬츭츮츯츲츴츶",19],["af61","칊",13,"칚칛칝칞칢",5,"칪칬"],["af81","칮",5,"칶칷칹칺칻칽",6,"캆캈캊",5,"캒캓캕캖캗캙"],["b041","캚",5,"캢캦",5,"캮",12],["b061","캻",5,"컂",19],["b081","컖",13,"컦컧컩컪컭",6,"컶컺",5,"가각간갇갈갉갊감",7,"같",4,"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],["b141","켂켃켅켆켇켉",6,"켒켔켖",5,"켝켞켟켡켢켣"],["b161","켥",6,"켮켲",5,"켹",11],["b181","콅",14,"콖콗콙콚콛콝",6,"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],["b241","콭콮콯콲콳콵콶콷콹",6,"쾁쾂쾃쾄쾆",5,"쾍"],["b261","쾎",18,"쾢",5,"쾩"],["b281","쾪",5,"쾱",18,"쿅",6,"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],["b341","쿌",19,"쿢쿣쿥쿦쿧쿩"],["b361","쿪",5,"쿲쿴쿶",5,"쿽쿾쿿퀁퀂퀃퀅",5],["b381","퀋",5,"퀒",5,"퀙",19,"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",4,"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],["b441","퀮",5,"퀶퀷퀹퀺퀻퀽",6,"큆큈큊",5],["b461","큑큒큓큕큖큗큙",6,"큡",10,"큮큯"],["b481","큱큲큳큵",6,"큾큿킀킂",18,"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",4,"닳담답닷",4,"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],["b541","킕",14,"킦킧킩킪킫킭",5],["b561","킳킶킸킺",5,"탂탃탅탆탇탊",5,"탒탖",4],["b581","탛탞탟탡탢탣탥",6,"탮탲",5,"탹",11,"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],["b641","턅",7,"턎",17],["b661","턠",15,"턲턳턵턶턷턹턻턼턽턾"],["b681","턿텂텆",5,"텎텏텑텒텓텕",6,"텞텠텢",5,"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],["b741","텮",13,"텽",6,"톅톆톇톉톊"],["b761","톋",20,"톢톣톥톦톧"],["b781","톩",6,"톲톴톶톷톸톹톻톽톾톿퇁",14,"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],["b841","퇐",7,"퇙",17],["b861","퇫",8,"퇵퇶퇷퇹",13],["b881","툈툊",5,"툑",24,"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",4,"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],["b941","툪툫툮툯툱툲툳툵",6,"툾퉀퉂",5,"퉉퉊퉋퉌"],["b961","퉍",14,"퉝",6,"퉥퉦퉧퉨"],["b981","퉩",22,"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",4,"받",4,"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],["ba41","튍튎튏튒튓튔튖",5,"튝튞튟튡튢튣튥",6,"튭"],["ba61","튮튯튰튲",5,"튺튻튽튾틁틃",4,"틊틌",5],["ba81","틒틓틕틖틗틙틚틛틝",6,"틦",9,"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],["bb41","틻",4,"팂팄팆",5,"팏팑팒팓팕팗",4,"팞팢팣"],["bb61","팤팦팧팪팫팭팮팯팱",6,"팺팾",5,"퍆퍇퍈퍉"],["bb81","퍊",31,"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],["bc41","퍪",17,"퍾퍿펁펂펃펅펆펇"],["bc61","펈펉펊펋펎펒",5,"펚펛펝펞펟펡",6,"펪펬펮"],["bc81","펯",4,"펵펶펷펹펺펻펽",6,"폆폇폊",5,"폑",5,"샥샨샬샴샵샷샹섀섄섈섐섕서",4,"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],["bd41","폗폙",7,"폢폤",7,"폮폯폱폲폳폵폶폷"],["bd61","폸폹폺폻폾퐀퐂",5,"퐉",13],["bd81","퐗",5,"퐞",25,"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],["be41","퐸",7,"푁푂푃푅",14],["be61","푔",7,"푝푞푟푡푢푣푥",7,"푮푰푱푲"],["be81","푳",4,"푺푻푽푾풁풃",4,"풊풌풎",5,"풕",8,"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",6,"엌엎"],["bf41","풞",10,"풪",14],["bf61","풹",18,"퓍퓎퓏퓑퓒퓓퓕"],["bf81","퓖",5,"퓝퓞퓠",7,"퓩퓪퓫퓭퓮퓯퓱",6,"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",5,"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],["c041","퓾",5,"픅픆픇픉픊픋픍",6,"픖픘",5],["c061","픞",25],["c081","픸픹픺픻픾픿핁핂핃핅",6,"핎핐핒",5,"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",7,"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],["c141","핤핦핧핪핬핮",5,"핶핷핹핺핻핽",6,"햆햊햋"],["c161","햌햍햎햏햑",19,"햦햧"],["c181","햨",31,"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],["c241","헊헋헍헎헏헑헓",4,"헚헜헞",5,"헦헧헩헪헫헭헮"],["c261","헯",4,"헶헸헺",5,"혂혃혅혆혇혉",6,"혒"],["c281","혖",5,"혝혞혟혡혢혣혥",7,"혮",9,"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],["c341","혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",4],["c361","홢",4,"홨홪",5,"홲홳홵",11],["c381","횁횂횄횆",5,"횎횏횑횒횓횕",7,"횞횠횢",5,"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],["c441","횫횭횮횯횱",7,"횺횼",7,"훆훇훉훊훋"],["c461","훍훎훏훐훒훓훕훖훘훚",5,"훡훢훣훥훦훧훩",4],["c481","훮훯훱훲훳훴훶",5,"훾훿휁휂휃휅",11,"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],["c541","휕휖휗휚휛휝휞휟휡",6,"휪휬휮",5,"휶휷휹"],["c561","휺휻휽",6,"흅흆흈흊",5,"흒흓흕흚",4],["c581","흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",6,"흾흿힀힂",5,"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],["c641","힍힎힏힑",6,"힚힜힞",5],["c6a1","퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],["c7a1","퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],["c8a1","혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],["caa1","伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],["cba1","匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],["cca1","瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],["cda1","棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],["cea1","科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],["cfa1","區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],["d0a1","鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],["d1a1","朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",5,"那樂",4,"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],["d2a1","納臘蠟衲囊娘廊",4,"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",5,"駑魯",10,"濃籠聾膿農惱牢磊腦賂雷尿壘",7,"嫩訥杻紐勒",5,"能菱陵尼泥匿溺多茶"],["d3a1","丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],["d4a1","棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],["d5a1","蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],["d6a1","煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],["d7a1","遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],["d8a1","立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],["d9a1","蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],["daa1","汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],["dba1","發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],["dca1","碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],["dda1","孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],["dea1","脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],["dfa1","傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],["e0a1","胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],["e1a1","聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],["e2a1","戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],["e3a1","嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],["e4a1","沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],["e5a1","櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],["e6a1","旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],["e7a1","簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],["e8a1","烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],["e9a1","窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],["eaa1","運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],["eba1","濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],["eca1","議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],["eda1","立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],["eea1","障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],["efa1","煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],["f0a1","靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],["f1a1","踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],["f2a1","咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],["f3a1","鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],["f4a1","責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],["f5a1","椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],["f6a1","贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],["f7a1","鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],["f8a1","阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],["f9a1","品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],["faa1","行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],["fba1","形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],["fca1","禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],["fda1","爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]]');

},{}],"9PwS2":[function(require,module,exports) {
module.exports = JSON.parse('[["0","\\u0000",127],["a140","　，、。．‧；：？！︰…‥﹐﹑﹒\xb7﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],["a1a1","﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※\xa7〃○●△▲◎☆★◇◆□■▽▼㊣℅\xaf￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－\xd7\xf7\xb1√＜＞＝≦≧≠∞≒≡﹢",4,"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],["a240","＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄\xb0兙兛兞兝兡兣嗧瓩糎▁",7,"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],["a2a1","╮╰╯═╞╪╡◢◣◥◤╱╲╳０",9,"Ⅰ",9,"〡",8,"十卄卅Ａ",25,"ａ",21],["a340","ｗｘｙｚΑ",16,"Σ",6,"α",16,"σ",6,"ㄅ",10],["a3a1","ㄐ",25,"˙ˉˊˇˋ"],["a3e1","€"],["a440","一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],["a4a1","丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],["a540","世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],["a5a1","央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],["a640","共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],["a6a1","式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],["a740","作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],["a7a1","均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],["a840","杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],["a8a1","芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],["a940","咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],["a9a1","屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],["aa40","昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],["aaa1","炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],["ab40","陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],["aba1","哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],["ac40","拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],["aca1","活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],["ad40","耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],["ada1","迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],["ae40","哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],["aea1","恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],["af40","浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],["afa1","砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],["b040","虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],["b0a1","陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],["b140","娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],["b1a1","情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],["b240","毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],["b2a1","瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],["b340","莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],["b3a1","部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],["b440","婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],["b4a1","插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],["b540","溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],["b5a1","窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],["b640","詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],["b6a1","間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],["b740","媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],["b7a1","楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],["b840","睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],["b8a1","腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],["b940","辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],["b9a1","飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],["ba40","愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],["baa1","滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],["bb40","罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],["bba1","說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],["bc40","劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],["bca1","慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],["bd40","瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],["bda1","翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],["be40","輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],["bea1","鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],["bf40","濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],["bfa1","縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],["c040","錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],["c0a1","嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],["c140","瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],["c1a1","薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],["c240","駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],["c2a1","癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],["c340","鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],["c3a1","獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],["c440","願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],["c4a1","纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],["c540","護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],["c5a1","禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],["c640","讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],["c940","乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],["c9a1","氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],["ca40","汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],["caa1","吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],["cb40","杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],["cba1","芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],["cc40","坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],["cca1","怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],["cd40","泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],["cda1","矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],["ce40","哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],["cea1","峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],["cf40","柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],["cfa1","洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],["d040","穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],["d0a1","苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],["d140","唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],["d1a1","恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],["d240","毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],["d2a1","牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],["d340","笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],["d3a1","荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],["d440","酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],["d4a1","唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],["d540","崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],["d5a1","捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],["d640","淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],["d6a1","痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],["d740","耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],["d7a1","蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],["d840","釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],["d8a1","堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],["d940","惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],["d9a1","晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],["da40","湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],["daa1","琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],["db40","罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],["dba1","菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],["dc40","軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],["dca1","隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],["dd40","媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],["dda1","搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],["de40","毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],["dea1","煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],["df40","稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],["dfa1","腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],["e040","觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],["e0a1","遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],["e140","凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],["e1a1","寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],["e240","榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],["e2a1","漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],["e340","禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],["e3a1","耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],["e440","裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],["e4a1","銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],["e540","噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],["e5a1","憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],["e640","澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],["e6a1","獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],["e740","膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],["e7a1","蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],["e840","踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],["e8a1","銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],["e940","噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],["e9a1","憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],["ea40","澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],["eaa1","瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],["eb40","蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],["eba1","諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],["ec40","錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],["eca1","魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],["ed40","檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],["eda1","瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],["ee40","蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],["eea1","謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],["ef40","鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],["efa1","鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],["f040","璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],["f0a1","臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],["f140","蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],["f1a1","鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],["f240","徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],["f2a1","礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],["f340","譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],["f3a1","鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],["f440","嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],["f4a1","禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],["f540","鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],["f5a1","鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],["f640","蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],["f6a1","騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],["f740","糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],["f7a1","驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],["f840","讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],["f8a1","齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],["f940","纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],["f9a1","龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]]');

},{}],"lCYrL":[function(require,module,exports) {
module.exports = JSON.parse('[["8740","䏰䰲䘃䖦䕸\uD85C\uDE67䵷䖳\uD85F\uDCB1䳢\uD85F\uDCC5㮕䜶䝄䱇䱀\uD850\uDEBF\uD84D\uDE17\uD85C\uDF52\uD85B\uDE8B\uD85C\uDCD2䱗\uD868\uDF51䝏䗚䲅\uD85F\uDC6C䴇䪤䚡\uD85A\uDF23爥\uD856\uDE54\uD846\uDE63\uD84F\uDE06\uD84F\uDF61晍囻"],["8767","綕夝\uD862\uDFB9㷴霴\uD85E\uDFEF寛\uD847\uDD5E媤㘥\uD867\uDEB0嫑宷峼杮薓\uD866\uDD45瑡璝㡵\uD847\uDD53\uD84D\uDE9E\uD858\uDC21㻬"],["87a1","\uD856\uDCDE㫵竼龗\uD850\uDD61\uD862\uDD0D\uD84C\uDDEA\uD842\uDE8A\uD84C\uDE5E䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄\uD857\uDDB9瓆鿇垳䤯呌䄱\uD84D\uDE8E堘穲\uD85E\uDF65讏䚮\uD85B\uDE88䆁\uD857\uDD99箮\uD849\uDCBC鿈\uD849\uDCC1\uD849\uDCC9\uD849\uDCCC鿉蔄\uD84D\uDDBB䂴鿊䓡\uD86B\uDDFF拁灮鿋"],["8840","㇀",4,"\uD840\uDD0C㇅\uD840\uDCD1\uD840\uDCCD㇆㇇\uD840\uDCCB\uD847\uDFE8㇈\uD840\uDCCA㇉㇊㇋㇌\uD840\uDD0E㇍㇎Ā\xc1Ǎ\xc0Ē\xc9Ě\xc8Ō\xd3Ǒ\xd2࿿\xcāẾ࿿\xcǎỀ\xcaā\xe1ǎ\xe0ɑē\xe9ě\xe8ī\xedǐ\xecō\xf3ǒ\xf2ū\xfaǔ\xf9ǖǘǚ"],["88a1","ǜ\xfc࿿\xeāế࿿\xeǎề\xeaɡ⏚⏛"],["8940","\uD868\uDFA9\uD844\uDD45"],["8943","攊"],["8946","丽滝鵎釟"],["894c","\uD85D\uDF35撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],["89a1","琑糼緍楆竉刧"],["89ab","醌碸酞肼"],["89b0","贋胶\uD842\uDDE7"],["89b5","肟黇䳍鷉鸌䰾\uD867\uDDF6\uD85C\uDC0E鸊\uD868\uDD33㗁"],["89c1","溚舾甙"],["89c5","䤑马骏龙禇\uD861\uDC6C\uD847\uDDCA\uD841\uDDD0\uD84A\uDEE6两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],["8a40","\uD85F\uDD84唥"],["8a43","\uD843\uDC42\uD843\uDD15\uD854\uDD2B喐\uD84B\uDCC6㧬\uD840\uDF41蹆\uD853\uDDB8\uD865\uDCE5䁓\uD860\uDCBE睺\uD84B\uDC38㨴䟕\uD860\uDD5D\uD85A\uDDF2\uD853\uDDEA擝\uD843\uDD7C\uD843\uDFB4\uD843\uDCD5\uD844\uDCF4撍蹾\uD843\uDE96\uD843\uDC0B\uD843\uDF64\uD84B\uDCA9\uD860\uDE56\uD851\uDCD3"],["8a64","\uD843\uDD46\uD866\uDE4D\uD860\uDCE9䟴\uD853\uDEA7\uD84B\uDCC2骲㩧\uD865\uDDF4㿭㔆\uD854\uDEC7\uD865\uDFD4\uD85E\uDCC8\uD84B\uDD44鵮頕"],["8a76","䏙\uD858\uDCA5撴哣\uD84B\uDD4C\uD84A\uDFCA\uD844\uDC77㧻\uD844\uDC6F"],["8aa1","\uD859\uDEDA\uD859\uDF16\uD85E\uDDA0擪\uD854\uDC52\uD843\uDC43蹨\uD848\uDDA1\uD862\uDF4C\uD841\uDF31"],["8aac","䠋\uD840\uDDA9㿺塳\uD84B\uDD8D"],["8ab2","\uD851\uDDC8\uD841\uDCFC\uD858\uDC97\uD843\uDF4C\uD843\uDD96啹䂻䎺"],["8abb","䪴\uD84A\uDE66\uD844\uDC9D膪飵\uD843\uDD9C捹㧾\uD849\uDF75跀嚡摼㹃"],["8ac9","\uD869\uDE01\uD843\uDE09\uD84A\uDECF\uD84B\uDCC9"],["8ace","\uD844\uDCC8\uD84E\uDDC2㦒㨆\uD860\uDE9B㕸\uD857\uDE49\uD848\uDCC7噒\uD843\uDF31\uD84B\uDCB2\uD865\uDF20㒼氽\uD853\uDE3B"],["8adf","\uD85D\uDD74\uD84B\uDE8B\uD848\uDE08\uD869\uDE5B\uD863\uDCCD\uD843\uDE7A\uD843\uDC34\uD85A\uDC1C羓\uD844\uDCCF\uD84A\uDC03\uD84A\uDD39㗻\uD854\uDDE3\uD843\uDE8C\uD843\uDF8D\uD843\uDEAA㾓\uD843\uDF30\uD843\uDD47\uD844\uDD4F\uD843\uDE4C"],["8af6","\uD843\uDEAB\uD842\uDFA9\uD843\uDD48\uD844\uDCC0\uD844\uDD3D㿹\uD849\uDE96搲\uD843\uDFAD"],["8b40","\uD84C\uDFF4\uD85D\uDE39\uD84A\uDFCE\uD843\uDD7E\uD843\uDD7F\uD84B\uDC51\uD84B\uDC55㨘\uD843\uDE98\uD844\uDCC7\uD843\uDF2E\uD869\uDE32\uD85A\uDF50\uD863\uDCD2\uD863\uDD99\uD863\uDCCA閪哌苄喹"],["8b55","\uD867\uDEC3鰦骶\uD85D\uDF5E\uD84B\uDDEE煀腭胬尜\uD859\uDD72脴㞗卟\uD860\uDCBD醶\uD843\uDEFA\uD843\uDE0F\uD843\uDE77\uD843\uDEFB㗝\uD853\uDDEB㘉\uD843\uDCD6嚯\uD849\uDFB5\uD844\uDCC9\uD843\uDE10\uD843\uDE78\uD844\uDC78\uD844\uDD48\uD860\uDE07\uD845\uDC55\uD843\uDE79\uD853\uDE50\uD84B\uDDA4婔\uD844\uDC1D\uD844\uDC1E\uD844\uDCF5\uD844\uDCF6垜\uD843\uDE11"],["8ba1","\uD85D\uDE94\uD860\uDECD\uD843\uDFB5\uD843\uDE7B\uD854\uDD7E㜃\uD843\uDFB6\uD844\uDD80\uD854\uDED8\uD868\uDEBD\uD852\uDDDA\uD846\uDC3A\uD850\uDD77\uD860\uDE7C墙剨㘚\uD855\uDF3D箲孨䠀䬬鼧䧧鰟鮍\uD856\uDF74\uD84C\uDD3D嗻㗲嚉丨夂\uD846\uDFC1\uD87E\uDC78靑\uD840\uDC86乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭\uD852\uDCE9罒礻糹罓\uD858\uDE6A㓁"],["8bde","\uD858\uDF4B耂肀\uD859\uDE12\uD85A\uDD51卝衤见\uD85E\uDCB2讠贝钅镸长门\uD863\uDE0F韦页风飞饣\uD866\uDC10鱼鸟黄歯龜丷\uD840\uDC87阝户钢"],["8c40","倻淾\uD867\uDC73龦㷉袏\uD850\uDD4E灷峵䬠\uD854\uDDCD㕙\uD857\uDD30愢\uD862\uDE32辧釶熑朙玺\uD84C\uDE81\uD868\uDD07㲋\uD846\uDD80䬐磤琂冮\uD861\uDF0F䀉橣\uD868\uDEBA䈣蘏\uD842\uDE6F稪\uD866\uDD47\uD862\uDEEA靕灍匤\uD848\uDC7E鏴盙\uD862\uDDE3龧矝亣俰傼丯众龨吴綋墒壐\uD847\uDDB6庒庙忂\uD849\uDF12斋"],["8ca1","\uD84C\uDFF9椙橃\uD84F\uDC63泿"],["8ca7","爀\uD851\uDD05玌㻛\uD852\uDE13嬕璹讃\uD857\uDCA4\uD855\uDE95窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬\uD863\uDDB9\uD845\uDC3F䁱䊢娚"],["8cc9","顨杫䉶圽"],["8cce","藖\uD852\uDD7B芿\uD85C\uDD0D䲁\uD85B\uDD74嵻\uD85A\uDF15\uD85B\uDFBE龭龮宖龯曧繛湗秊㶈䓃\uD84C\uDE56\uD849\uDF96䎚䔶"],["8ce6","峕\uD84E\uDF1A諹屸㴒\uD84D\uDD51嵸龲煗䕘\uD850\uDCEC\uD847\uDE23䱷㥸㑊\uD840\uDDA4\uD85B\uDC41諌侴\uD840\uDE39妿腬顖\uD866\uDCFA弻"],["8d40","\uD842\uDF9F"],["8d42","\uD848\uDDC1\uD862\uDD6D䄂䚻\uD864\uDC79㼇龳\uD868\uDDB5䃸㟖䛷\uD85B\uDC46䅼\uD861\uDEB2\uD85C\uDFFF䕭㣔\uD855\uDC9A䕡䔛䶉䱻䵶䗪㿈\uD852\uDF0F㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],["8da1","㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆\uD862\uDDC0溻滢滚齿滨滩漤漴㵆\uD84F\uDF41澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉\uD840\uDF25䏁㗱\uD843\uDED8"],["8e40","\uD84F\uDED7垾\uD85B\uDED3焾\uD855\uDFE0㙎榢\uD862\uDFE9孴穉\uD856\uDCE1\uD865\uDCD9穥穽\uD856\uDDAC窻窰竂竃燑\uD859\uDC8D䇊竚竝竪䇯咲\uD857\uDC01笋筕笩\uD854\uDF0E\uD857\uDCFE箢筯莜\uD856\uDFB4\uD85B\uDC7F篐萡箒箸\uD857\uDD20㶭\uD857\uDC65蒒篺簆簵\uD857\uDCC1籄粃\uD852\uDC82粦晽\uD851\uDD78糉糇糦籴糳糵糎"],["8ea1","繧䔝\uD85B\uDE44絝\uD85B\uDED6璍綉綫焵綳緒\uD850\uDC57\uD858\uDC29緤㴓緵\uD845\uDFF9緥\uD860\uDF6D縝\uD858\uDD21\uD858\uDD5A繮纒䌫鑬縧罀罁罇礶\uD858\uDED0駡羗\uD858\uDF51羣\uD845\uDE61\uD840\uDC68䕜\uD84D\uDF66䔃\uD860\uDF3A翺\uD859\uDC89者耈耝耨耯\uD868\uDC87\uD85B\uDCC3耻耼聡\uD849\uDF14䦉\uD859\uDE26\uD84F\uDDE3\uD859\uDEE8朥肧\uD862\uDE48脇脚墰\uD849\uDEF6汿\uD859\uDC98\uD853\uDFB8擧\uD845\uDC8A舘\uD846\uDC5E橓\uD852\uDE65\uD852\uDE95䑺舩\uD842\uDF0D\uD85A\uDE52\uD84F\uDD7E俹\uD845\uDCFD蓢荢\uD85A\uDF0A\uD852\uDDA7\uD84D\uDD30\uD845\uDF73\uD84F\uDDF8芪椛\uD87E\uDD94䇛"],["8f40","蕋苐茚\uD843\uDE16\uD845\uDFB4㛁\uD84C\uDD7D\uD84D\uDD5A艻苢茘\uD84F\uDE8B\uD85B\uDDA3\uD85A\uDF05\uD85A\uDF97\uD84D\uDDCE㶿茝嗬莅䔋\uD85B\uDDA5莬菁菓㑾\uD85B\uDED4橗蕚㒖\uD85B\uDE42\uD84B\uDEEF葘\uD856\uDFE4葱㷓䓤檧葊\uD84F\uDCB5祘蒨\uD85A\uDF96\uD85B\uDE77\uD85B\uDE43蓞萏莑䒠蒓蓤\uD857\uDC91䉀\uD857\uDCC0䕃蔴嫲\uD85B\uDE99䔧蕳䔖枿蘖"],["8fa1","\uD861\uDE25\uD861\uDE3B藁\uD85C\uDC88蘂\uD845\uDD82\uD85C\uDCCD\uD87E\uDDB2䕪蘨㙈\uD846\uDCA2号\uD85C\uDF9A虾蝱\uD868\uDCF8蟮\uD84B\uDC27螱蟚蠏噡虬桖䘏衅衆\uD85D\uDDE0\uD84F\uDDB9\uD85D\uDDE4衞袜䙛袴袵揁装睷\uD85D\uDF0F覇覊覦覩覧覼\uD862\uDE25觧\uD85E\uDD24\uD85E\uDEBD誜瞓釾誐\uD85E\uDE59竩\uD85E\uDF3A\uD84F\uDF8F䜓\uD85E\uDF38煼謌謟\uD855\uDC30\uD855\uDD65謿譌譍誩\uD852\uDE7A讐讛誯\uD845\uDEDF䘕衏貛\uD85F\uDD54\uD85F\uDD8F\uD87E\uDDD4㜥\uD85F\uDD53賖\uD85F\uDD98\uD85F\uDDBD贒贃\uD846\uDD10賛灜贑\uD853\uDCC9㻐起"],["9040","趩\uD860\uDC02\uD844\uDC14\uD852\uDD8A㭼\uD860\uDDBC\uD85C\uDD0C竧躭躶軃鋔輙輭\uD860\uDF65\uD861\uDC12辥錃\uD868\uDE9F\uD842\uDE50辳䤪\uD862\uDDDE\uD861\uDD3D\uD84F\uDDBB廸\uD84C\uDE62迹\uD868\uDC14\uD861\uDEBC\uD861\uDD01\uD848\uDF25㦀\uD85B\uDED7逷\uD861\uDD3C\uD85E\uDEBE遡\uD861\uDD6C\uD861\uDE0B邨\uD861\uDF13郄\uD861\uDEE6邮都酧㫰醩釄粬\uD862\uDD33\uD847\uDE89鈎沟鉁鉢\uD855\uDDB9銹\uD862\uDEC6\uD84F\uDC9B\uD862\uDF0C\uD855\uDDDB"],["90a1","\uD843\uDD31錬鍫\uD862\uDEE1\uD862\uDFEB炏嫃\uD862\uDEE2\uD862\uDEE5䥥鉄\uD862\uDFEC\uD863\uDC39\uD862\uDFFF鍳鑛躼閅閦鐦閠濶䊹\uD849\uDE7A\uD861\uDED8\uD844\uDE7C\uD84F\uDE2E䧟氜陻隖䅬隣\uD85B\uDED5懚隶磵\uD862\uDEE0隽双䦡\uD85B\uDCB8\uD840\uDE74\uD859\uDC10\uD864\uDCAF\uD864\uDCE5\uD852\uDED1\uD846\uDD15\uD84C\uDF0A霱虂霶䨏䔽䖅\uD852\uDEE9灵孁霛靜\uD864\uDDD5靗孊\uD864\uDDEB靟鐥僐\uD84C\uDCB7\uD84C\uDCBC鞉鞟鞱鞾韀韒韠\uD855\uDC6C韮琜\uD865\uDC33響韵\uD865\uDC1D\uD85E\uDD7A䫑頴頳顋顦㬎\uD85C\uDD75㵑\uD841\uDE30\uD850\uDD5C"],["9140","\uD855\uDF06飊颷飈飇䫿\uD85B\uDD27\uD845\uDED3喰飡飦飬鍸餹\uD852\uDE29䭲\uD866\uDC57\uD866\uDD05駵騌騻騐驘\uD855\uDF25㛄\uD864\uDCB1\uD866\uDFD5髠髢\uD866\uDF05髴䰎鬔鬭\uD861\uDE00倴鬴\uD85A\uDDA8㣃\uD84C\uDC7D魐魀\uD867\uDD3E婅\uD846\uDC63鮎\uD850\uDE4B鰂鯿鰌\uD867\uDE68鷔\uD867\uDFB7\uD868\uDD92\uD868\uDDAB\uD868\uDCE1\uD868\uDD23\uD868\uDDDF鵾鶃\uD868\uDD34鸎梈"],["91a1","鷄\uD848\uDD5B\uD868\uDD93\uD868\uDE20\uD846\uDD3B\uD868\uDE33鴹\uD868\uDCB9\uD868\uDEB4麐麕麞麢䴴麪麯\uD850\uDF64黁㭠㧥㴝伲㞾\uD863\uDC2B鼂鼈䮖鐤\uD85B\uDDA2鼗鼖鼹嚟嚊齅馸\uD864\uDC8B韲葿齢齩竜龎爖䮾\uD852\uDD75\uD852\uDDBB煷\uD852\uDDF8\uD850\uDF48\uD852\uDE51玞\uD862\uDFDA\uD846\uDCFA禟\uD862\uDD7E\uD863\uDE36鍩鏳\uD862\uDE44鋬鎁鏋\uD862\uDD6C\uD851\uDCB9爗㻫睲穃烐\uD851\uDC73\uD850\uDFF8煾\uD845\uDFEF炣\uD846\uDCBE\uD84D\uDD99㻇\uD846\uDC85\uD855\uDC2F\uD845\uDFF8㜢\uD845\uDEFB\uD846\uDC39㛡\uD845\uDF74\uD846\uDCD1\uD857\uDF4B㜣\uD845\uDEC0坛\uD852\uDE25\uD844\uDFFE\uD844\uDEA8"],["9240","\uD844\uDFC6\uD845\uDCB6蔃\uD84D\uDEA6蔃葕\uD852\uDD94\uD85C\uDD65\uD84F\uDE31\uD855\uDD5C\uD84F\uDEFB\uD85C\uDC52䓴\uD84D\uDEEE\uD866\uDD9D\uD85B\uDF26柹㜳㰕㷧塬\uD846\uDD22栐䁗\uD84D\uDF3F\uD850\uDCE1\uD850\uDC8B\uD850\uDD0F\uD85B\uDC21哋嚞\uD859\uDEB1嚒\uD843\uDFDF\uD842\uDFA8\uD843\uDE0D鏆\uD862\uDF13鎜仸儫㠙\uD851\uDC36亼\uD841\uDC65\uD840\uDF7F佋侊\uD855\uDE51婨\uD840\uDDAB\uD840\uDFCB㦙\uD840\uDF0A\uD841\uDC14㐵伩\uD840\uDEC0\uD863\uDEB3\uD840\uDE75諚\uD840\uDE0C亘"],["92a1","働儍侢伃\uD852\uDE0E\uD84F\uDE8A佂倮偬傁俌俥偘僼兙兛兝兞湶\uD84D\uDD95\uD84F\uDE39\uD84F\uDEBF浲\uD846\uDC84\uD84F\uDE89冨凃\uD841\uDDE0䓝\uD841\uDCA3\uD841\uDC92\uD841\uDC91赺\uD862\uDE9C\uD841\uDF0E剙劤\uD842\uDC73勡鍮䙺熌\uD850\uDF8C\uD843\uDC20\uD852\uDDAC\uD844\uDCE4槑\uD843\uDE1D瑹㻞璙琔瑖玘䮎\uD852\uDEBC\uD850\uDC8D叐㖄爏\uD850\uDCC9喴\uD840\uDF45响\uD842\uDFC6圝鉝雴鍦埝垍坿㘾壋媙\uD862\uDE46\uD845\uDEFA\uD845\uDF6F\uD845\uDF10娬妸銏婾嫏娒\uD856\uDD46\uD846\uDDF3\uD846\uDC61\uD850\uDE95㛵洅瑃娡\uD857\uDE83"],["9340","媁\uD862\uDFD7\uD841\uDC13鏠璌\uD844\uDF03焅䥲鐈\uD862\uDDFB鎽㞠尞岞幞幈\uD846\uDD96\uD846\uDD7C\uD84E\uDEEE廍孏\uD846\uDD03\uD846\uDD04㜁\uD846\uDCA0㛝\uD845\uDEFE㛓脪\uD862\uDE47\uD847\uDDBA\uD84D\uDC72\uD862\uDDA8弌弎\uD846\uDD27\uD845\uDFAB婫\uD845\uDF3B孄蘔\uD85D\uDDFD衠恾\uD84A\uDC60\uD849\uDE2B忛㺸\uD849\uDDAF\uD849\uDDBE\uD864\uDC88\uD85B\uDF73懀\uD840\uDC3E\uD840\uDC46\uD849\uDE1B憙憘恵\uD84B\uDC9B\uD84B\uDD07\uD851\uDED4\uD864\uDD4D"],["93a1","摱\uD851\uDE65\uD84A\uDF6A㨩\uD84A\uDF22\uD84D\uDC50\uD866\uDCEA\uD84B\uDE78挷\uD869\uDC5B撶挱揑\uD852\uDDE3\uD84B\uDD67护\uD84B\uDCA1搻敫楲㯴\uD84C\uDC8E\uD84C\uDEAD\uD852\uDD89\uD84C\uDEAB唍\uD84C\uDEE0\uD846\uDCD9\uD865\uDC3F曎\uD84C\uDE89\uD84C\uDDB3㫠䆐\uD855\uDD84\uD862\uDF22\uD855\uDD8F\uD845\uDEFC\uD855\uDD5B\uD855\uDC25磮\uD84C\uDD03\uD846\uDC2A\uD84C\uDE34㑤\uD84C\uDE0F\uD84C\uDD82\uD850\uDEC9暎\uD85B\uDD24晫䮓昰\uD85E\uDC70\uD847\uDDEB晣\uD84C\uDED2\uD84C\uDEE1昞\uD856\uDC72㣑\uD84E\uDC3A\uD84D\uDFBC㮙\uD84D\uDFA2\uD84C\uDFFE瓐㮖枏\uD851\uDE2A梶栞㯄檾㡣\uD84D\uDFD5\uD851\uDC87樳橒櫉欅\uD846\uDD12攑梘橌㯗橺歗\uD84F\uDFC0\uD84F\uDC9A鎠鋲\uD862\uDFEA\uD862\uDECB"],["9440","銉\uD860\uDC1E\uD862\uDDDC鑧涥漋\uD852\uDDEC浧\uD84F\uDF7F㶏渄\uD850\uDC3C娽渊塇洤硂焻\uD850\uDF1A\uD850\uDE76烱牐犇犔\uD851\uDF8F\uD851\uDF25兹\uD852\uDEA4\uD841\uDDEB瑺\uD84F\uDEF8\uD84D\uDE5F\uD852\uDE4A\uD852\uDD17\uD857\uDFE1㼆㺱\uD852\uDEDF\uD863\uDC23\uD84F\uDF35悧㻳瓌琼鎇琷䒟\uD85B\uDDEA䕑疃㽣\uD853\uDCD9\uD853\uDD06㽘畕癳\uD869\uDDC6㬙瑨\uD862\uDECC\uD852\uDDAB\uD852\uDD8E㫻"],["94a1","㷍\uD852\uDE4E㻿\uD852\uDDC5\uD852\uDCF3釺圲鍂\uD862\uDEE3\uD846\uDC64僟\uD854\uDE21\uD854\uDDE7睸\uD84C\uDE32眎眏睻\uD851\uDE97\uD84D\uDF81㩞\uD852\uDCF0琸璛㺿\uD852\uDEBA\uD852\uDEC7䃈\uD852\uDE96\uD858\uDDAE錇\uD855\uDD81砞碍碈磒珐祙\uD85D\uDF41\uD855\uDEE3䄎禛蒖禥樭\uD84F\uDEFA稺秴䅮\uD845\uDEE6䄲鈵秱\uD843\uDD4C\uD852\uDD8C\uD840\uDE99\uD84F\uDDBA\uD845\uDF6E㖗啫㕰㚪\uD840\uDDD4\uD843\uDC0D竢婙\uD849\uDEF5\uD856\uDEAF\uD856\uDE9C娍\uD840\uDE5B磰娪\uD856\uDFC6竾䇹籝籭䈑\uD856\uDFB3\uD857\uDEBC\uD857\uDEA6糍\uD852\uDDF9\uD845\uDFB0粎籼粮檲緜縇緓罎\uD858\uDE61"],["9540","\uD858\uDD5C\uD85E\uDF48綗\uD857\uDE82䉪\uD85A\uDF75\uD842\uDD16柖\uD840\uDC4E\uD84D\uDDCF埄\uD859\uDC12\uD858\uDFF8\uD852\uDD62翝笧\uD842\uDC2C\uD856\uDEE9\uD857\uDD43笌\uD857\uDE0E駦虅驣樜\uD84D\uDC3F㧢\uD852\uDDF7\uD859\uDDAD騟\uD859\uDDA0蒀\uD85C\uDD27\uD85B\uDCD1䓪脷䐂胆脉腂\uD859\uDFB4飃\uD85A\uDE42艢艥\uD85A\uDE51葓\uD85B\uDDA7蘐\uD85C\uDE1B媆䅿\uD846\uDC40嬫\uD846\uDCA1嫤\uD846\uDCD8蚠\uD87E\uDDBC\uD84F\uDD8F蠭\uD85D\uDC22娂"],["95a1","衮佅袇袿裦襥襍\uD855\uDE83襔\uD85D\uDF85\uD85D\uDF84\uD862\uDFF5\uD862\uDFD9\uD862\uDF9C\uD862\uDDF9㺭蒣䛵䛏㟲訽訜\uD865\uDC48彍鈫\uD850\uDE84旔焩烄\uD846\uDC45鵭貟賩\uD85F\uDDDC妚矃姰䍮㛔踪躧\uD853\uDC09輰轊䋴汘澻\uD848\uDF21䢛潹溋\uD845\uDFDA鯩㚵\uD852\uDD2F邻邗啱䤆醻鐄\uD862\uDE4B䁢\uD862\uDEFC鐧\uD863\uDC1D\uD863\uDC3B蓥訫閙閧閗閖\uD863\uDD34瑅㻂\uD852\uDCFF\uD852\uDE42\uD850\uDFEA㻧\uD84C\uDE25随\uD863\uDEE7\uD863\uDE66\uD863\uDE65㻌\uD852\uDDED\uD852\uDE78\uD84F\uDFEE琒瑫㻼靁\uD864\uDCB0"],["9640","桇䨝\uD864\uDC93\uD855\uDFDF靝鍨\uD862\uDD89\uD863\uDC26\uD862\uDF2F\uD858\uDFBE銺嬑譩䤼珹\uD850\uDE1B鞛靱餸\uD843\uDF26巁\uD862\uDFC5\uD852\uDEB2頟\uD865\uDCDA鋶\uD865\uDDD7釥䓀\uD862\uDF50\uD852\uDE67\uD862\uDF64飜\uD862\uDE45㼀鈪䤥萔餻饍\uD85E\uDF06㷽馛䭯馪驜\uD862\uDF65\uD856\uDCC8檏騡嫾騯\uD866\uDCF1䮐\uD866\uDD48馼䮽䮗鍽塲\uD844\uDF02堢\uD852\uDDB8"],["96a1","\uD845\uDCE8硄\uD849\uDF1F\uD84F\uDDB8棅㵽鑘㤧慐\uD849\uDF81\uD84A\uDD6B愇鱏鱓鱻鰵鰐魿鯏\uD867\uDE2D鮟\uD868\uDDF5\uD868\uDCFE鴡䲮\uD850\uDD04鸘䲰鴌\uD868\uDDB4\uD868\uDCED\uD868\uDCF3\uD866\uDD2F鶥蒽\uD85B\uDE12\uD85B\uDFDF\uD85A\uDF82藼䔳\uD85B\uDDA4\uD85B\uDE84\uD85B\uDDF0萠藮\uD85B\uDE00\uD84D\uDFD7\uD858\uDC64秢\uD84D\uDD9C\uD84D\uDE40䤭\uD852\uDDDE㵢鏛銾鍈\uD840\uDEBF碹鉷鑍俤㑀遤\uD855\uDD5D砽硔碶硋\uD845\uDF57\uD84C\uDDC9\uD852\uDD41㚚佲濚濙瀞瀞吔\uD850\uDDB5垻壳垊鴖埗焴㒯\uD850\uDDAC燫\uD85B\uDC40\uD853\uDF97嬨\uD845\uDFB5\uD862\uDE49"],["9740","愌嫎娋䊼\uD851\uDC88㜬䭻\uD862\uDDFC鎻鎸\uD846\uDCD6\uD843\uDF1D葲\uD85B\uDCC0\uD845\uDC13\uD850\uDEFA\uD84B\uDC26\uD850\uDFC1妔\uD84F\uDDB7\uD859\uDF41綨\uD858\uDD5B\uD858\uDCA4\uD852\uDDB9\uD852\uDD8B\uD862\uDDFA鋥珢㻩璴\uD862\uDF63\uD846\uDC9F㻡\uD852\uDEB3櫘珳珻㻖\uD852\uDE3E\uD852\uDE94\uD845\uDFD9\uD852\uDE66\uD840\uDFA7\uD845\uDC24\uD852\uDDE5瑈\uD852\uDD16炥\uD852\uDD76銄珦鍟\uD841\uDCFE錱\uD862\uDECE\uD862\uDE16鎆\uD862\uDFE7\uD855\uDDD5䤵\uD862\uDE82煫"],["97a1","\uD852\uDD43\uD843\uDCFF嚤\uD841\uDE1A\uD842\uDFEB\uD843\uDCB8唂秄\uD845\uDFFA緾\uD845\uDEC2\uD852\uDE50\uD846\uDC52䔮鐁㜊\uD862\uDEC0\uD852\uDDAD妰\uD846\uDCBF\uD846\uDC83\uD85D\uDC84媡㛢\uD84F\uDD5B㚰鉟婹\uD862\uDE81\uD846\uDC62鍴㳍\uD842\uDEB4䪖㦊僴㵩㵌\uD844\uDF9C煵䋻\uD860\uDE18渏\uD864\uDCE4䓫浗\uD85F\uDE4F灧沯㳖\uD84F\uDFED\uD84F\uDE2D渂漌㵯\uD840\uDFF5畑㚼㓈䚀㻚䡱姄鉮䤾轁\uD863\uDC1C\uD85A\uDFC0堒埈㛖\uD845\uDC52烾\uD850\uDF62\uD852\uDE71\uD84B\uDFE3\uD844\uDEB0\uD848\uDFBD梹楧\uD844\uDF98\uD84D\uDCE5\uD85E\uDFF4\uD84D\uDEDF\uD862\uDE83\uD84D\uDFD6\uD84C\uDFFA\uD853\uDC9F樚\uD84D\uDEAD\uD85B\uDCB7萾䓟䓎"],["9840","\uD85B\uDD26\uD85B\uDD51\uD85B\uDC82\uD85B\uDFDE漗\uD85C\uDD09茽\uD845\uDF3A菭\uD85B\uDC80\uD85C\uDC53\uD845\uDFDB妉媂\uD845\uDFB3婡婱\uD846\uDD05\uD850\uDDFC㜭姯\uD845\uDF3C㛇熎鎐暚\uD850\uDEA5婮娫\uD850\uDE93樫\uD84F\uDEF9\uD85D\uDF36\uD851\uDC5B\uD850\uDECA焝\uD850\uDE59\uD862\uDDE1侰\uD85B\uDD28峂\uD851\uDCCE\uD85F\uDE4D\uD850\uDFBD樌\uD850\uDE56\uD844\uDF04炦焳\uD850\uDFE9㶥泟\uD87E\uDC25\uD852\uDE4F繥姫崯㷳彜\uD852\uDE5D\uD845\uDFDF綤萦"],["98a1","咅\uD84E\uDEFA\uD84C\uDF00\uD840\uDE14坾\uD842\uDCD5\uD841\uDE19㿥\uD847\uDF9E\uD868\uDEB6瀃\uD864\uDD5B嵰玏糓\uD862\uDE59\uD865\uDC20俈翧狍猐\uD85E\uDEF4猸猹\uD855\uDEF6獁獈㺩\uD85E\uDF18遬燵\uD852\uDCF2珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発\uD853\uDF5C熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈\uD855\uDD35礳栃礲䄃"],["9940","䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀\uD843\uDCCF総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],["99a1","䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑\uD85E\uDD67訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],["9a40","鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯\uD846\uDFC2鵉鰺"],["9aa1","黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄\uD840\uDC94\uD840\uDEB7\uD840\uDFA0椚铃妬\uD841\uDCD7塀铁㞹\uD841\uDDD5\uD841\uDE15\uD841\uDE76\uD845\uDEBA块煳\uD842\uDEC2\uD842\uDECD\uD842\uDFBF呪\uD87E\uDC3B\uD842\uDFCB咞\uD842\uDFFB\uD843\uDC3B\uD843\uDC53\uD843\uDC65\uD843\uDC7C惧\uD843\uDC8D噺\uD843\uDCB5\uD843\uDCDD\uD843\uDCED\uD843\uDD6F\uD843\uDDB2\uD843\uDDC8楕鰯螥\uD843\uDE04\uD843\uDE0E\uD843\uDED7\uD843\uDF90\uD843\uDF2D\uD843\uDE73尠\uD843\uDFBC帋\uD844\uDC5C\uD844\uDC4F\uD844\uDC76朞\uD844\uDC7B\uD844\uDC88\uD844\uDC96㙇\uD844\uDCBF\uD844\uDCD3\uD844\uDD2F\uD844\uDD3B卤蒭\uD844\uDEE3\uD844\uDF75\uD844\uDF36讁\uD845\uDD77\uD845\uDE19\uD845\uDFC3\uD845\uDFC7乸炻\uD846\uDC2D\uD846\uDD6A"],["9b40","\uD846\uDE2D\uD846\uDE45\uD847\uDC2A\uD847\uDC70\uD847\uDCAC\uD847\uDEC8拃\uD847\uDED5\uD847\uDF15熘桕\uD848\uDC45槩㛈\uD848\uDE7C\uD848\uDFD7\uD848\uDFFA\uD849\uDF2A\uD84A\uDC71\uD84A\uDD4F苽\uD84A\uDD67\uD84A\uDD93\uD84A\uDED5覥\uD84A\uDEE8辠\uD84A\uDF0E鞸\uD84A\uDF3F顇骽\uD84B\uDC4C"],["9b62","\uD84B\uDC88\uD84B\uDCB7\uD856\uDFE8\uD84B\uDD08\uD84B\uDD12\uD84B\uDDB7\uD84B\uDD95\uD84B\uDE42\uD84B\uDF74\uD84B\uDFCC\uD84C\uDC33\uD84C\uDC66\uD84C\uDF1F\uD84C\uDFDE徱晈暿\uD85E\uDE79\uD84D\uDD67\uD84D\uDDF3爁\uD852\uDDBA矗\uD84D\uDE1A\uD84D\uDF16纇\uD840\uDF46墵朎"],["9ba1","椘\uD84E\uDEA7\uD85D\uDE57\uD857\uDFE2\uD84F\uDE11\uD84F\uDEB9\uD85D\uDDFE\uD848\uDC9A䣐䪸\uD850\uDD19\uD862\uDE9A\uD850\uDEEE\uD850\uDF0D\uD850\uDC3B\uD850\uDF34\uD850\uDF96\uD852\uDE45\uD841\uDDCA凒\uD841\uDE11妟\uD847\uDEA8㮾\uD84F\uDCFF\uD851\uDC04\uD851\uDCD6垈\uD851\uDE74㦛\uD851\uDF2F\uD861\uDDE8\uD866\uDDC9㝢\uD848\uDDC3譞\uD862\uDF4E駖\uD852\uDC12\uD852\uDCFB\uD852\uDE15爉\uD852\uDEC0\uD843\uDC78奥\uD853\uDEA5\uD853\uDF86\uD841\uDF79軚\uD854\uDC2C劏圿煱\uD854\uDE99\uD855\uDC19\uD84F\uDF4A\uD852\uDEA7喼\uD855\uDC46\uD855\uDC6E\uD85A\uDF52釔㑳\uD855\uDD3F\uD85D\uDE32\uD855\uDD5E䜘\uD855\uDD62\uD855\uDD66\uD855\uDFC7\uD852\uDD3F\uD856\uDC5D偦㓻\uD84C\uDFCC惞\uD856\uDD03䝼\uD862\uDD48\uD856\uDEAE\uD856\uDF89\uD857\uDC06\uD847\uDD90垡煑澶\uD858\uDD02\uD85F\uDC12遖\uD858\uDDB2\uD853\uDF9A譢\uD859\uDC02\uD859\uDC4A"],["9c40","嵛\uD85A\uDFF7輶\uD859\uDC84\uD846\uDD1C諪\uD852\uDDF6\uD859\uDC88\uD84F\uDFEF\uD859\uDD12䯀\uD859\uDDBF\uD859\uDEB5\uD849\uDF1B鑥\uD855\uDFE1憕娧\uD87E\uDCCD侻嚹\uD851\uDD21\uD859\uDEFC乪\uD852\uDD34陖涏\uD85B\uDCBD㘘襷\uD859\uDF99\uD85A\uDC6E\uD859\uDC11\uD85A\uDC5E營\uD85A\uDCC7筂\uD864\uDCC0\uD842\uDE11\uD85A\uDD26鄄\uD85A\uDD39穅鷰\uD85A\uDDFA騦\uD85A\uDE2D㙟\uD859\uDC69\uD840\uDC21禃\uD85A\uDE34\uD85A\uDF5B崬\uD84D\uDD19菏\uD85A\uDF9D䛐\uD85B\uDCA4画补\uD85B\uDDAE墶"],["9ca1","㜜\uD849\uDD8D\uD85C\uDC4B\uD85C\uDDCD㱔\uD85C\uDE80\uD85C\uDE85銁\uD848\uDD7A\uD85C\uDE8B錰\uD85C\uDEE6\uD852\uDDD0氹钟\uD85D\uDC50\uD843\uDEF8蠧裵\uD84A\uDD26\uD861\uDC73\uD845\uDFB1溸\uD852\uDE2A\uD846\uDC20㦤㚹尐秣䔿暶\uD867\uDCAD\uD866\uDCA4襃\uD85D\uDFCC\uD85E\uDC58囖䃟\uD845\uDE0A㦡\uD84D\uDF2F\uD860\uDCE8\uD844\uDFC5熭荦\uD85E\uDDDD\uD864\uDDA8婧䲷\uD85C\uDCAF\uD862\uDDAB\uD85E\uDDFD\uD85E\uDE0A\uD85E\uDF0B\uD85F\uDD66\uD850\uDD7A筃祾\uD860\uDC09澵\uD868\uDEDF樃\uD860\uDF18厢\uD85B\uDE07鎿栶靝\uD860\uDD6F\uD860\uDC23\uD85A\uDDB5\uD844\uDFED\uD84C\uDE2F\uD860\uDC48嶅\uD863\uDC30\uD860\uDC83圕頣\uD862\uDD49嶫\uD852\uDD88斾槕叒\uD852\uDEA5\uD84F\uDF81㰑朶\uD860\uDC90\uD860\uDCF4\uD860\uDD2E\uD847\uDFA1\uD860\uDD4F"],["9d40","\uD860\uDD89\uD860\uDDAF\uD860\uDE1A\uD860\uDF06\uD860\uDF2F\uD860\uDF8A㗊\uD861\uDC68\uD861\uDEAA䣺揦\uD862\uDD56砈鉕\uD862\uDDB8䏲\uD862\uDDE7䏟\uD862\uDDE8\uD862\uDF46\uD862\uDFD4姸\uD863\uDC09輋\uD863\uDFC5\uD864\uDCEC筑\uD864\uDD10\uD864\uDD3C㷷\uD864\uDD5E\uD852\uDECA运犏嚋\uD865\uDCE7\uD865\uDDE9\uD865\uDDB0\uD865\uDDB8\uD865\uDF32\uD866\uDCD1\uD866\uDD49\uD866\uDD6A\uD866\uDDC3\uD866\uDE28\uD866\uDF0E\uD867\uDD5A\uD867\uDD9B纟\uD867\uDEF8\uD867\uDF23䲤镇\uD868\uDE93熢\uD868\uDEFF䶑递\uD869\uDDCB䶜\uD843\uDC9C达嗁"],["9da1","辺\uD849\uDCB0边\uD852\uDE93䔉繿潖檱仪㓤\uD862\uDF2C\uD85E\uDC9D㜺躀\uD845\uDFF5\uD860\uDC24\uD862\uDF6C\uD862\uDF99\uD85E\uDE3E\uD859\uDEAF㷫\uD85D\uDE55\uD84F\uDCB7\uD855\uDE35\uD856\uDD56亚\uD857\uDE81\uD858\uDE58嚿\uD843\uDE6D踎孭\uD84F\uDE88\uD853\uDC9E揞拐\uD845\uDFF6\uD846\uDC7B攰嘭\uD857\uDC4A吚\uD854\uDF11㷆\uD867\uDD98䱽嘢嘞罉\uD857\uDED8奵\uD84F\uDD40蝰东\uD843\uDFEA\uD843\uDD49\uD84D\uDEBA脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖\uD843\uDE9D㗎嘅嗱曱\uD860\uDEE2㘭甴嗰喺咗啲\uD843\uDC41\uD843\uDC96廐\uD854\uDD48\uD843\uDE76\uD84B\uDC62"],["9e40","\uD843\uDEA2麫絚嗞\uD844\uDC75抝靭咔賍燶酶揼掹揾啩\uD84A\uDF43鱲\uD84B\uDEB3冚㓟\uD843\uDDA7冧呍唞唓癦踭\uD85A\uDC8A疱肶蠄螆裇膶萜\uD844\uDCC1䓬猄\uD851\uDF06宐茋\uD85A\uDC93噻\uD849\uDEF4\uD85F\uDD2F\uD850\uDDA3\uD85F\uDD73\uD85B\uDED0\uD85C\uDEB6酰\uD844\uDDD9鈈\uD84F\uDCFC\uD869\uDEA9\uD843\uDEAC\uD843\uDEF9牦\uD847\uDCA2䝎\uD853\uDFC2\uD85F\uDFF9\uD843\uDFEB䃺"],["9ea1","鱝攟\uD84B\uDDA0䣳\uD851\uDFE0\uD867\uDD7C\uD843\uDFEC\uD843\uDE0A恢\uD85D\uDDA3\uD843\uDFED"],["9ead","\uD858\uDC48\uD844\uDD87熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥\uD851\uDE18墚\uD852\uDF6E舭呋垪\uD856\uDE95\uD842\uDD79"],["9ec5","㩒\uD849\uDC65獴\uD867\uDEAC䴉鯭\uD84F\uDCFE\uD867\uDF30䱛\uD853\uDFA9\uD865\uDD9E\uD867\uDFDE葜\uD84F\uDDB6\uD85C\uDEB2\uD859\uDFB3\uD84D\uDF20挮紥\uD84F\uDEF7\uD84F\uDE2C㨪逈勌㹴㙺䗩\uD841\uDC8E癀嫰\uD843\uDEB6硺\uD85F\uDF2E墧䂿噼鮋嵴癔\uD869\uDC34麅䳡痹㟻愙\uD84C\uDCDA\uD850\uDFF2"],["9ef5","噝\uD844\uDEA9垧\uD852\uDD63\uD867\uDE06刴\uD85C\uDCAE㖭汊鵼"],["9f40","籖鬹埞\uD845\uDF6C屓擓\uD865\uDCD0\uD858\uDF35\uD85C\uDD64蚭\uD843\uDD28\uD85B\uDD22\uD852\uDEE2\uD843\uDD71"],["9f4f","凾\uD847\uDF0F嶎霃\uD847\uDDD1麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛\uD852\uDD3E齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],["9fa1","椬叚鰊鴂䰻陁榀傦畆\uD845\uDF6D駚剳"],["9fae","酙隁酜"],["9fb2","酑\uD863\uDE97捿\uD85B\uDD23櫊嘑醎畺抅\uD840\uDFFC獏籰\uD857\uDC21\uD84F\uDCFD"],["9fc1","\uD852\uDD19盖鮝个\uD843\uDCD4莾衂"],["9fc9","届槀僭坺刟巵从氱\uD840\uDDF2伹咜哚劚趂㗾弌㗳"],["9fdb","歒酼龥鮗頮颴骺麨麄煺笔"],["9fe7","毺蠘罸"],["9feb","嘠\uD869\uDE4A蹷齓"],["9ff0","跔蹏鸜踁抂\uD860\uDF7D踨蹵竓\uD852\uDE77稾磘泪詧瘇"],["a040","\uD862\uDE5A鼦泎蟖痃\uD868\uDEB2硓\uD87E\uDC40贌狢獱謭猂瓱賫\uD852\uDEBB蘯徺袠䒷"],["a055","\uD846\uDC3B\uD85B\uDE05"],["a058","詾\uD849\uDD1B"],["a05b","惽癧髗鵄鍮鮏蟵"],["a063","蠏賷猬霡鮰㗖犲䰇籑饊\uD858\uDD59慙䰄麖慽"],["a073","坟慯抦戹拎㩜懢厪\uD84C\uDFF5捤栂㗒"],["a0a1","嵗\uD862\uDFC2迚\uD863\uDE39"],["a0a6","僙\uD847\uDD46礆匲阸\uD843\uDF3B䁥"],["a0ae","矾"],["a0b0","糂\uD857\uDF1A糚稭聦聣絍甅瓲覔舚朌聢\uD85D\uDC86聛瓰脃眤覉\uD859\uDFCC畓\uD85B\uDED1螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],["a0d4","覩瑨涹蟁\uD850\uDC11瓧㷛煶悤憜㳑煢恷"],["a0e2","罱\uD862\uDF2D牐惩䭾删㰘\uD84F\uDCC7\uD857\uDED7\uD85D\uDE56\uD855\uDD31\uD846\uDD44\uD844\uDEFE\uD866\uDD03\uD85B\uDDDC\uD85C\uDCAD峁\uD858\uDDAD\uD862\uDE0F\uD84D\uDE77\uD840\uDCEE\uD85A\uDC46\uD853\uDF0E䕢嬟\uD858\uDF4C齐麦\uD858\uDE6B"],["a3c0","␀",31,"␡"],["c6a1","①",9,"⑴",9,"ⅰ",9,"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶\xa8ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",23],["c740","す",58,"ァアィイ"],["c7a1","ゥ",81,"А",5,"ЁЖ",4],["c840","Л",26,"ёж",25,"⇧↸↹㇏\uD840\uDCCC乚\uD840\uDC8A刂䒑"],["c8a1","龰冈龱\uD85D\uDE07"],["c8cd","￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],["c8f5","ʃɐɛɔɵœ\xf8ŋʊɪ"],["f9fe","￭"],["fa40","\uD841\uDD47鋛\uD841\uDDDF\uD84F\uDFC5蕌䊵珯况㙉\uD852\uDD42\uD862\uDDE4鍄\uD846\uDDDB苮\uD84F\uDCC8砼杄拟\uD852\uDD33\uD862\uDDAA\uD840\uDEA0\uD85A\uDFB3\uD844\uDF05侫\uD849\uDCED倈\uD85B\uDD29\uD85E\uDE84\uD84D\uDE00\uD852\uDEB1\uD849\uDD13倩\uD840\uDF7E徤\uD840\uDF80\uD840\uDF47滛\uD841\uDC1F偽儁㑺儎顬㝃萖\uD852\uDDA4\uD841\uDC87兠\uD84C\uDFB4兪\uD842\uDFFF\uD848\uDCFC\uD840\uDEE5\uD849\uDD30\uD841\uDD8E\uD84C\uDE33\uD846\uDD83宂蝽\uD841\uDDB3\uD84F\uDC99冲冸"],["faa1","鴴凉减凑㳜凓\uD852\uDEA6决凢卂凭菍椾\uD84D\uDF2D彻刋刦刼劵剗劔効勅簕蕂勠蘍\uD85A\uDF13包\uD862\uDEDE啉滙\uD84F\uDF80\uD842\uDD54\uD84F\uDFEC匳卄\uD842\uDFE2泋\uD845\uDF26栛珕恊㺪㣌\uD845\uDEE8燝䒢卭却\uD861\uDEAB卾卿\uD845\uDD96\uD845\uDE13矦厓\uD862\uDE9B厠厫厮玧\uD855\uDF72㽙玜叁叅汉义埾叙㪫\uD842\uDF8F叠\uD84F\uDFEB\uD84B\uDDA3叶\uD843\uDC77吓灹唫晗浛呭\uD85A\uDF53\uD843\uDD74啝咏咤䞦\uD845\uDF0D\uD843\uDEDD㶴\uD843\uDD4D"],["fb40","\uD862\uDDBC\uD849\uDE98啇䳭启琗喆喩嘅\uD846\uDCD7\uD850\uDC3A䕒\uD851\uDC35暳\uD844\uDCB4嘷曍\uD84C\uDE8A暤暭噍噏磱囱鞇叾圀囯园\uD862\uDF66㘣\uD844\uDE4F坆\uD850\uDDA5汮炋坂㚱\uD85B\uDC7E埦\uD845\uDC16堃\uD845\uDC54\uD850\uDF63堦\uD852\uDFF5塜墪㕡壠壜\uD844\uDE3C壻寿坃\uD868\uDD50\uD850\uDE78鏓㖡够梦㛃湙"],["fba1","\uD845\uDE3E娤啓\uD845\uDE92蔅姉\uD843\uDD4E\uD85B\uDC81\uD85B\uDD2A\uD845\uDFDC姙\uD845\uDFFB\uD845\uDFB2\uD85B\uDDA6浱\uD846\uDC28\uD845\uDED5姹\uD85B\uDE45媫婣㛦\uD852\uDDA9婷㜈媖瑥嫓\uD85B\uDFA1\uD849\uDD54㶅\uD846\uDD11㜲\uD845\uDEB8広勐孶斈孼\uD85E\uDE0E䀄䡝\uD840\uDE04寕慠\uD846\uDE34\uD856\uDDCC\uD841\uDDA5寳宝䴐尅\uD846\uDF44尓珎尔\uD847\uDCA5\uD85A\uDF28屉䣝岅峩峯嶋\uD847\uDDF9\uD847\uDE37崐崘嵆\uD847\uDEA4岺巗苼㠭\uD852\uDD01\uD848\uDC49\uD848\uDD73芇㠶㯂帮檊幵幺\uD851\uDCBC\uD843\uDCD3厦亷廐厨\uD845\uDF71帉廴\uD861\uDC82"],["fc40","廹廻㢠廼栾鐛弍\uD840\uDDC1\uD87E\uDC94㫞䢮\uD844\uDF3A强\uD85A\uDC88\uD848\uDFD0彘\uD849\uDC71彣鞽\uD85B\uDE6E彲鍀\uD862\uDE36徧嶶㵟\uD854\uDE50\uD847\uDF6A\uD85C\uDCF8\uD849\uDE68釖\uD840\uDE9E\uD862\uDE29怱暅\uD846\uDC77㥣㷇㘹垐\uD849\uDFB4祱㹀悞悤悳\uD852\uDD82\uD852\uDD8F\uD85E\uDE53璤僡媠慤萤慂\uD87E\uDCA6\uD85B\uDED2憁凴\uD841\uDE56憇宪\uD84F\uDFB7"],["fca1","\uD84A\uDC5F懓\uD862\uDF9D\uD866\uDD5D懐㤲\uD84A\uDD80\uD84A\uDCC1怣慜攞掋\uD840\uDD18担\uD845\uDF70拕\uD84B\uDE0D捬\uD852\uDDDF㨗搸揸\uD844\uDF8E\uD845\uDFFC撐澊\uD84B\uDE36頔\uD850\uDC8C\uD855\uDF1D擡擥鑻㩦携㩗敍漖\uD852\uDE28\uD852\uDE23斅敭敟\uD84C\uDC7E斵\uD852\uDD40䬷旑䃘\uD846\uDC29无旣忟\uD84D\uDC00昘\uD84C\uDDF7\uD84C\uDDF8晄\uD84C\uDDA4\uD84C\uDDA5晋\uD843\uDE75晧\uD854\uDDE6晳晴\uD847\uDE3D\uD84C\uDE31\uD861\uDDF4\uD84C\uDDC8\uD854\uDF13矅\uD84A\uDCF7馤朂\uD850\uDF9C\uD852\uDE21㬫槺\uD84D\uDFC2杞杧杢\uD850\uDDCD\uD864\uDCED柗䓩栢湐鈼栁\uD84C\uDFE6\uD85B\uDDA0桝"],["fd40","\uD84D\uDC6F槡樋\uD862\uDEDF楳棃\uD84D\uDDCD椁椀㴲㨁\uD84D\uDE3C㮀枬楡\uD862\uDE4A䋼椶榘㮡\uD840\uDFC9荣傐槹\uD84D\uDE59\uD848\uDD2A橅\uD84D\uDF03檝㯳枱櫈\uD864\uDD9C㰍欝\uD842\uDD23惞欵歴\uD849\uDFCD溵\uD84E\uDEDB\uD840\uDFB5\uD846\uDD58㝀吡\uD84E\uDF5A毡\uD84F\uDEFC毜氷\uD849\uDC8B\uD852\uDCF1\uD85A\uDF51汚舦汹\uD84F\uDDBC䓅\uD84F\uDDBD\uD850\uDDA4\uD852\uDD0C\uD852\uDD00"],["fda1","\uD84F\uDCC9㛥㳫\uD843\uDD32鮃\uD84C\uDDF9\uD849\uDC91羏样\uD85B\uDD25\uD85B\uDDA1\uD85B\uDDEB涖浜湼漄\uD852\uDD7F\uD850\uDC85\uD85B\uDE72蔳\uD85B\uDF74凇沜渝萮\uD862\uDF21港\uD84F\uDE2F瑓\uD84F\uDF82秌湏媑\uD84C\uDC4B濸㜍澝\uD84F\uDE30滺\uD845\uDC97\uD850\uDC3D䕕鏰潄潜㵎潴\uD864\uDD70㴻澟\uD850\uDD44濓\uD850\uDC91\uD850\uDD55\uD850\uDC39\uD84F\uDFF0\uD84F\uDFB4\uD850\uDD3F凟\uD850\uDD56\uD850\uDD57\uD850\uDD40\uD858\uDDDD灋灾炧炁烌烕烖烟䄄㷨熴熖\uD850\uDE77焫煅媈煊煮岜\uD850\uDF65煏鍢\uD850\uDEC1焬\uD851\uDC5A\uD852\uDE27\uD852\uDE22熺\uD862\uDFE8炽爎"],["fe40","鑂爕夑鑃爤鍁\uD855\uDE05爮牀\uD852\uDD74梽牕牗㹕\uD84C\uDC44栍漽犂猪猫\uD852\uDC23\uD862\uDC2B䣭\uD862\uDC04猨献珏玪\uD843\uDC3A\uD85A\uDE2E珉瑉\uD850\uDDE2\uD845\uDEE7\uD852\uDE24昣㛅\uD852\uDDB7\uD852\uDD8D\uD852\uDDFB珷琕椃\uD852\uDE26琹\uD841\uDDC3㻗瑜\uD84A\uDCAD瑠\uD863\uDEB2瑇珤瑶莹瑬㜰瑴鏱樬璂䥓\uD852\uDE8C"],["fea1","\uD850\uDD5F\uD852\uDE79\uD862\uDF8F孆\uD863\uDC03\uD846\uDC9E瓈\uD846\uDD88甎瓩甞\uD863\uDED9\uD846\uDE4B寗\uD863\uDEAC鎅畍畊畧畮\uD853\uDF82㼄\uD853\uDD13疎瑝疞疴瘂瘬癑癏癯癶\uD858\uDFF5皐臯㟸\uD85A\uDD11\uD85A\uDD0E皡皥皷盌\uD85B\uDF9F葢\uD854\uDC9D\uD854\uDD7D\uD847\uDE1C眞眦着撯\uD854\uDE20睘\uD84C\uDEAC瞯\uD862\uDD64\uD862\uDD68\uD845\uDEC1矴砉\uD844\uDF76\uD852\uDE12棊碯磇磓隥礮\uD855\uDDE0磗礴碱\uD85D\uDE0C辸袄\uD862\uDF2B\uD858\uDC83\uD849\uDE1C禆褀椂禀\uD856\uDC57禝\uD85E\uDF39礼禩渪\uD85C\uDD26㺨秆\uD864\uDD0D秔"]]');

},{}],"8k57N":[function(require,module,exports) {
module.exports.PduTypes = {
    PDU_TYPE_CONFIRMED_SERVICE_REQUEST: 0,
    SERVER: 1,
    NEGATIVE_ACK: 2,
    SEGMENTED_RESPONSE_ACCEPTED: 2,
    MORE_FOLLOWS: 4,
    SEGMENTED_MESSAGE: 8,
    PDU_TYPE_UNCONFIRMED_SERVICE_REQUEST: 0x10,
    PDU_TYPE_SIMPLE_ACK: 0x20,
    PDU_TYPE_COMPLEX_ACK: 0x30,
    PDU_TYPE_SEGMENT_ACK: 0x40,
    PDU_TYPE_ERROR: 0x50,
    PDU_TYPE_REJECT: 0x60,
    PDU_TYPE_ABORT: 0x70,
    PDU_TYPE_MASK: 0xF0
};
module.exports.Segmentations = {
    SEGMENTATION_BOTH: 0,
    SEGMENTATION_TRANSMIT: 1,
    SEGMENTATION_RECEIVE: 2,
    SEGMENTATION_NONE: 3
};
module.exports.DeviceStatus = {
    OPERATIONAL: 0,
    OPERATIONAL_READONLY: 1,
    DOWNLOAD_REQUIRED: 2,
    DOWNLOAD_IN_PROGRESS: 3,
    NON_OPERATIONAL: 4,
    BACKUP_IN_PROGRESS: 5
};
module.exports.BACnetBackupState = {
    IDLE: 0,
    PREPARING_FOR_BACKUP: 1,
    PREPARING_FOR_RESTORE: 2,
    PERFORMING_A_BACKUP: 3,
    PERFORMING_A_RESTORE: 4
};
module.exports.RestartReason = {
    UNKNOWN: 0,
    COLD_START: 1,
    WARM_START: 2,
    DETECTED_POWER_LOST: 3,
    DETECTED_POWER_OFF: 4,
    HARDWARE_WATCHDOG: 5,
    SOFTWARE_WATCHDOG: 6,
    SUSPENDED: 7
};
module.exports.ProgramChange = {
    READY: 0,
    LOAD: 1,
    RUN: 2,
    HALT: 3,
    RESTART: 4,
    UNLOAD: 5
};
module.exports.ProgramState = {
    IDLE: 0,
    LOADING: 1,
    RUNNING: 2,
    WAITING: 3,
    HALTED: 4,
    UNLOADING: 5
};
module.exports.ReasonForHalt = {
    NORMAL: 0,
    LOAD_FAILED: 1,
    INTERNAL: 2,
    PROGRAM: 3,
    OTHER: 4
};
module.exports.ResultFlags = {
    NONE: 0,
    FIRST_ITEM: 1,
    LAST_ITEM: 2,
    MORE_ITEMS: 4
};
module.exports.RejectReasons = {
    REJECT_REASON_OTHER: 0,
    REJECT_REASON_BUFFER_OVERFLOW: 1,
    REJECT_REASON_INCONSISTENT_PARAMETERS: 2,
    REJECT_REASON_INVALID_PARAMETER_DATA_TYPE: 3,
    REJECT_REASON_INVALID_TAG: 4,
    REJECT_REASON_MISSING_REQUIRED_PARAMETER: 5,
    REJECT_REASON_PARAMETER_OUT_OF_RANGE: 6,
    REJECT_REASON_TOO_MANY_ARGUMENTS: 7,
    REJECT_REASON_UNDEFINED_ENUMERATION: 8,
    REJECT_REASON_UNRECOGNIZED_SERVICE: 9,
    MAX_BACNET_REJECT_REASON: 10,
    REJECT_REASON_PROPRIETARY_FIRST: 64,
    REJECT_REASON_PROPRIETARY_LAST: 65535
};
module.exports.ErrorClasses = {
    ERROR_CLASS_DEVICE: 0,
    ERROR_CLASS_OBJECT: 1,
    ERROR_CLASS_PROPERTY: 2,
    ERROR_CLASS_RESOURCES: 3,
    ERROR_CLASS_SECURITY: 4,
    ERROR_CLASS_SERVICES: 5,
    ERROR_CLASS_VT: 6,
    ERROR_CLASS_COMMUNICATION: 7,
    MAX_BACNET_ERROR_CLASS: 8,
    ERROR_CLASS_PROPRIETARY_FIRST: 64,
    ERROR_CLASS_PROPRIETARY_LAST: 65535
};
module.exports.ErrorCodes = {
    ERROR_CODE_OTHER: 0,
    ERROR_CODE_DEVICE_BUSY: 3,
    ERROR_CODE_CONFIGURATION_IN_PROGRESS: 2,
    ERROR_CODE_OPERATIONAL_PROBLEM: 25,
    ERROR_CODE_DYNAMIC_CREATION_NOT_SUPPORTED: 4,
    ERROR_CODE_NO_OBJECTS_OF_SPECIFIED_TYPE: 17,
    ERROR_CODE_OBJECT_DELETION_NOT_PERMITTED: 23,
    ERROR_CODE_OBJECT_IDENTIFIER_ALREADY_EXISTS: 24,
    ERROR_CODE_READ_ACCESS_DENIED: 27,
    ERROR_CODE_UNKNOWN_OBJECT: 31,
    ERROR_CODE_UNSUPPORTED_OBJECT_TYPE: 36,
    ERROR_CODE_CHARACTER_SET_NOT_SUPPORTED: 41,
    ERROR_CODE_DATATYPE_NOT_SUPPORTED: 47,
    ERROR_CODE_INCONSISTENT_SELECTION_CRITERION: 8,
    ERROR_CODE_INVALID_ARRAY_INDEX: 42,
    ERROR_CODE_INVALID_DATA_TYPE: 9,
    ERROR_CODE_NOT_COV_PROPERTY: 44,
    ERROR_CODE_OPTIONAL_FUNCTIONALITY_NOT_SUPPORTED: 45,
    ERROR_CODE_PROPERTY_IS_NOT_AN_ARRAY: 50,
    ERROR_CODE_UNKNOWN_PROPERTY: 32,
    ERROR_CODE_VALUE_OUT_OF_RANGE: 37,
    ERROR_CODE_WRITE_ACCESS_DENIED: 40,
    ERROR_CODE_NO_SPACE_FOR_OBJECT: 18,
    ERROR_CODE_NO_SPACE_TO_ADD_LIST_ELEMENT: 19,
    ERROR_CODE_NO_SPACE_TO_WRITE_PROPERTY: 20,
    ERROR_CODE_AUTHENTICATION_FAILED: 1,
    ERROR_CODE_INCOMPATIBLE_SECURITY_LEVELS: 6,
    ERROR_CODE_INVALID_OPERATOR_NAME: 12,
    ERROR_CODE_KEY_GENERATION_ERROR: 15,
    ERROR_CODE_PASSWORD_FAILURE: 26,
    ERROR_CODE_SECURITY_NOT_SUPPORTED: 28,
    ERROR_CODE_TIMEOUT: 30,
    ERROR_CODE_COV_SUBSCRIPTION_FAILED: 43,
    ERROR_CODE_DUPLICATE_NAME: 48,
    ERROR_CODE_DUPLICATE_OBJECT_ID: 49,
    ERROR_CODE_FILE_ACCESS_DENIED: 5,
    ERROR_CODE_INCONSISTENT_PARAMETERS: 7,
    ERROR_CODE_INVALID_CONFIGURATION_DATA: 46,
    ERROR_CODE_INVALID_FILE_ACCESS_METHOD: 10,
    ERROR_CODE_INVALID_FILE_START_POSITION: 11,
    ERROR_CODE_INVALID_PARAMETER_DATA_TYPE: 13,
    ERROR_CODE_INVALID_TIME_STAMP: 14,
    ERROR_CODE_MISSING_REQUIRED_PARAMETER: 16,
    ERROR_CODE_PROPERTY_IS_NOT_A_LIST: 22,
    ERROR_CODE_SERVICE_REQUEST_DENIED: 29,
    ERROR_CODE_UNKNOWN_VT_CLASS: 34,
    ERROR_CODE_UNKNOWN_VT_SESSION: 35,
    ERROR_CODE_NO_VT_SESSIONS_AVAILABLE: 21,
    ERROR_CODE_VT_SESSION_ALREADY_CLOSED: 38,
    ERROR_CODE_VT_SESSION_TERMINATION_FAILURE: 39,
    ERROR_CODE_RESERVED1: 33,
    ERROR_CODE_ABORT_BUFFER_OVERFLOW: 51,
    ERROR_CODE_ABORT_INVALID_APDU_IN_THIS_STATE: 52,
    ERROR_CODE_ABORT_PREEMPTED_BY_HIGHER_PRIORITY_TASK: 53,
    ERROR_CODE_ABORT_SEGMENTATION_NOT_SUPPORTED: 54,
    ERROR_CODE_ABORT_PROPRIETARY: 55,
    ERROR_CODE_ABORT_OTHER: 56,
    ERROR_CODE_INVALID_TAG: 57,
    ERROR_CODE_NETWORK_DOWN: 58,
    ERROR_CODE_REJECT_BUFFER_OVERFLOW: 59,
    ERROR_CODE_REJECT_INCONSISTENT_PARAMETERS: 60,
    ERROR_CODE_REJECT_INVALID_PARAMETER_DATA_TYPE: 61,
    ERROR_CODE_REJECT_INVALID_TAG: 62,
    ERROR_CODE_REJECT_MISSING_REQUIRED_PARAMETER: 63,
    ERROR_CODE_REJECT_PARAMETER_OUT_OF_RANGE: 64,
    ERROR_CODE_REJECT_TOO_MANY_ARGUMENTS: 65,
    ERROR_CODE_REJECT_UNDEFINED_ENUMERATION: 66,
    ERROR_CODE_REJECT_UNRECOGNIZED_SERVICE: 67,
    ERROR_CODE_REJECT_PROPRIETARY: 68,
    ERROR_CODE_REJECT_OTHER: 69,
    ERROR_CODE_UNKNOWN_DEVICE: 70,
    ERROR_CODE_UNKNOWN_ROUTE: 71,
    ERROR_CODE_VALUE_NOT_INITIALIZED: 72,
    ERROR_CODE_INVALID_EVENT_STATE: 73,
    ERROR_CODE_NO_ALARM_CONFIGURED: 74,
    ERROR_CODE_LOG_BUFFER_FULL: 75,
    ERROR_CODE_LOGGED_VALUE_PURGED: 76,
    ERROR_CODE_NO_PROPERTY_SPECIFIED: 77,
    ERROR_CODE_NOT_CONFIGURED_FOR_TRIGGERED_LOGGING: 78,
    ERROR_CODE_UNKNOWN_SUBSCRIPTION: 79,
    ERROR_CODE_PARAMETER_OUT_OF_RANGE: 80,
    ERROR_CODE_LIST_ELEMENT_NOT_FOUND: 81,
    ERROR_CODE_BUSY: 82,
    ERROR_CODE_COMMUNICATION_DISABLED: 83,
    ERROR_CODE_SUCCESS: 84,
    ERROR_CODE_ACCESS_DENIED: 85,
    ERROR_CODE_BAD_DESTINATION_ADDRESS: 86,
    ERROR_CODE_BAD_DESTINATION_DEVICE_ID: 87,
    ERROR_CODE_BAD_SIGNATURE: 88,
    ERROR_CODE_BAD_SOURCE_ADDRESS: 89,
    ERROR_CODE_BAD_TIMESTAMP: 90,
    ERROR_CODE_CANNOT_USE_KEY: 91,
    ERROR_CODE_CANNOT_VERIFY_MESSAGE_ID: 92,
    ERROR_CODE_CORRECT_KEY_REVISION: 93,
    ERROR_CODE_DESTINATION_DEVICE_ID_REQUIRED: 94,
    ERROR_CODE_DUPLICATE_MESSAGE: 95,
    ERROR_CODE_ENCRYPTION_NOT_CONFIGURED: 96,
    ERROR_CODE_ENCRYPTION_REQUIRED: 97,
    ERROR_CODE_INCORRECT_KEY: 98,
    ERROR_CODE_INVALID_KEY_DATA: 99,
    ERROR_CODE_KEY_UPDATE_IN_PROGRESS: 100,
    ERROR_CODE_MALFORMED_MESSAGE: 101,
    ERROR_CODE_NOT_KEY_SERVER: 102,
    ERROR_CODE_SECURITY_NOT_CONFIGURED: 103,
    ERROR_CODE_SOURCE_SECURITY_REQUIRED: 104,
    ERROR_CODE_TOO_MANY_KEYS: 105,
    ERROR_CODE_UNKNOWN_AUTHENTICATION_TYPE: 106,
    ERROR_CODE_UNKNOWN_KEY: 107,
    ERROR_CODE_UNKNOWN_KEY_REVISION: 108,
    ERROR_CODE_UNKNOWN_SOURCE_MESSAGE: 109,
    ERROR_CODE_NOT_ROUTER_TO_DNET: 110,
    ERROR_CODE_ROUTER_BUSY: 111,
    ERROR_CODE_UNKNOWN_NETWORK_MESSAGE: 112,
    ERROR_CODE_MESSAGE_TOO_LONG: 113,
    ERROR_CODE_SECURITY_ERROR: 114,
    ERROR_CODE_ADDRESSING_ERROR: 115,
    ERROR_CODE_WRITE_BDT_FAILED: 116,
    ERROR_CODE_READ_BDT_FAILED: 117,
    ERROR_CODE_REGISTER_FOREIGN_DEVICE_FAILED: 118,
    ERROR_CODE_READ_FDT_FAILED: 119,
    ERROR_CODE_DELETE_FDT_ENTRY_FAILED: 120,
    ERROR_CODE_DISTRIBUTE_BROADCAST_FAILED: 121,
    ERROR_CODE_UNKNOWN_FILE_SIZE: 122,
    ERROR_CODE_ABORT_APDU_TOO_LONG: 123,
    ERROR_CODE_ABORT_APPLICATION_EXCEEDED_REPLY_TIME: 124,
    ERROR_CODE_ABORT_OUT_OF_RESOURCES: 125,
    ERROR_CODE_ABORT_TSM_TIMEOUT: 126,
    ERROR_CODE_ABORT_WINDOW_SIZE_OUT_OF_RANGE: 127,
    ERROR_CODE_FILE_FULL: 128,
    ERROR_CODE_INCONSISTENT_CONFIGURATION: 129,
    ERROR_CODE_INCONSISTENT_OBJECT_TYPE: 130,
    ERROR_CODE_INTERNAL_ERROR: 131,
    ERROR_CODE_NOT_CONFIGURED: 132,
    ERROR_CODE_OUT_OF_MEMORY: 133,
    ERROR_CODE_VALUE_TOO_LONG: 134,
    ERROR_CODE_ABORT_INSUFFICIENT_SECURITY: 135,
    ERROR_CODE_ABORT_SECURITY_ERROR: 136,
    MAX_BACNET_ERROR_CODE: 137,
    ERROR_CODE_PROPRIETARY_FIRST: 256,
    ERROR_CODE_PROPRIETARY_LAST: 65535
};
module.exports.StatusFlags = {
    STATUS_FLAG_IN_ALARM: 1,
    STATUS_FLAG_FAULT: 2,
    STATUS_FLAG_OVERRIDDEN: 4,
    STATUS_FLAG_OUT_OF_SERVICE: 8
};
module.exports.ServicesSupported = {
    SERVICE_SUPPORTED_ACKNOWLEDGE_ALARM: 0,
    SERVICE_SUPPORTED_CONFIRMED_COV_NOTIFICATION: 1,
    SERVICE_SUPPORTED_CONFIRMED_EVENT_NOTIFICATION: 2,
    SERVICE_SUPPORTED_GET_ALARM_SUMMARY: 3,
    SERVICE_SUPPORTED_GET_ENROLLMENT_SUMMARY: 4,
    SERVICE_SUPPORTED_GET_EVENT_INFORMATION: 39,
    SERVICE_SUPPORTED_SUBSCRIBE_COV: 5,
    SERVICE_SUPPORTED_SUBSCRIBE_COV_PROPERTY: 38,
    SERVICE_SUPPORTED_LIFE_SAFETY_OPERATION: 37,
    SERVICE_SUPPORTED_ATOMIC_READ_FILE: 6,
    SERVICE_SUPPORTED_ATOMIC_WRITE_FILE: 7,
    SERVICE_SUPPORTED_ADD_LIST_ELEMENT: 8,
    SERVICE_SUPPORTED_REMOVE_LIST_ELEMENT: 9,
    SERVICE_SUPPORTED_CREATE_OBJECT: 10,
    SERVICE_SUPPORTED_DELETE_OBJECT: 11,
    SERVICE_SUPPORTED_READ_PROPERTY: 12,
    SERVICE_SUPPORTED_READ_PROP_CONDITIONAL: 13,
    SERVICE_SUPPORTED_READ_PROP_MULTIPLE: 14,
    SERVICE_SUPPORTED_READ_RANGE: 35,
    SERVICE_SUPPORTED_WRITE_PROPERTY: 15,
    SERVICE_SUPPORTED_WRITE_PROP_MULTIPLE: 16,
    SERVICE_SUPPORTED_WRITE_GROUP: 40,
    SERVICE_SUPPORTED_DEVICE_COMMUNICATION_CONTROL: 17,
    SERVICE_SUPPORTED_PRIVATE_TRANSFER: 18,
    SERVICE_SUPPORTED_TEXT_MESSAGE: 19,
    SERVICE_SUPPORTED_REINITIALIZE_DEVICE: 20,
    SERVICE_SUPPORTED_VT_OPEN: 21,
    SERVICE_SUPPORTED_VT_CLOSE: 22,
    SERVICE_SUPPORTED_VT_DATA: 23,
    SERVICE_SUPPORTED_AUTHENTICATE: 24,
    SERVICE_SUPPORTED_REQUEST_KEY: 25,
    SERVICE_SUPPORTED_I_AM: 26,
    SERVICE_SUPPORTED_I_HAVE: 27,
    SERVICE_SUPPORTED_UNCONFIRMED_COV_NOTIFICATION: 28,
    SERVICE_SUPPORTED_UNCONFIRMED_EVENT_NOTIFICATION: 29,
    SERVICE_SUPPORTED_UNCONFIRMED_PRIVATE_TRANSFER: 30,
    SERVICE_SUPPORTED_UNCONFIRMED_TEXT_MESSAGE: 31,
    SERVICE_SUPPORTED_TIME_SYNCHRONIZATION: 32,
    SERVICE_SUPPORTED_UTC_TIME_SYNCHRONIZATION: 36,
    SERVICE_SUPPORTED_WHO_HAS: 33,
    SERVICE_SUPPORTED_WHO_IS: 34,
    MAX_BACNET_SERVICES_SUPPORTED: 41
};
module.exports.UnconfirmedServices = {
    SERVICE_UNCONFIRMED_I_AM: 0,
    SERVICE_UNCONFIRMED_I_HAVE: 1,
    SERVICE_UNCONFIRMED_COV_NOTIFICATION: 2,
    SERVICE_UNCONFIRMED_EVENT_NOTIFICATION: 3,
    SERVICE_UNCONFIRMED_PRIVATE_TRANSFER: 4,
    SERVICE_UNCONFIRMED_TEXT_MESSAGE: 5,
    SERVICE_UNCONFIRMED_TIME_SYNCHRONIZATION: 6,
    SERVICE_UNCONFIRMED_WHO_HAS: 7,
    SERVICE_UNCONFIRMED_WHO_IS: 8,
    SERVICE_UNCONFIRMED_UTC_TIME_SYNCHRONIZATION: 9,
    SERVICE_UNCONFIRMED_WRITE_GROUP: 10,
    MAX_BACNET_UNCONFIRMED_SERVICE: 11
};
module.exports.ConfirmedServices = {
    SERVICE_CONFIRMED_ACKNOWLEDGE_ALARM: 0,
    SERVICE_CONFIRMED_COV_NOTIFICATION: 1,
    SERVICE_CONFIRMED_EVENT_NOTIFICATION: 2,
    SERVICE_CONFIRMED_GET_ALARM_SUMMARY: 3,
    SERVICE_CONFIRMED_GET_ENROLLMENT_SUMMARY: 4,
    SERVICE_CONFIRMED_GET_EVENT_INFORMATION: 29,
    SERVICE_CONFIRMED_SUBSCRIBE_COV: 5,
    SERVICE_CONFIRMED_SUBSCRIBE_COV_PROPERTY: 28,
    SERVICE_CONFIRMED_LIFE_SAFETY_OPERATION: 27,
    SERVICE_CONFIRMED_ATOMIC_READ_FILE: 6,
    SERVICE_CONFIRMED_ATOMIC_WRITE_FILE: 7,
    SERVICE_CONFIRMED_ADD_LIST_ELEMENT: 8,
    SERVICE_CONFIRMED_REMOVE_LIST_ELEMENT: 9,
    SERVICE_CONFIRMED_CREATE_OBJECT: 10,
    SERVICE_CONFIRMED_DELETE_OBJECT: 11,
    SERVICE_CONFIRMED_READ_PROPERTY: 12,
    SERVICE_CONFIRMED_READ_PROP_CONDITIONAL: 13,
    SERVICE_CONFIRMED_READ_PROP_MULTIPLE: 14,
    SERVICE_CONFIRMED_READ_RANGE: 26,
    SERVICE_CONFIRMED_WRITE_PROPERTY: 15,
    SERVICE_CONFIRMED_WRITE_PROP_MULTIPLE: 16,
    SERVICE_CONFIRMED_DEVICE_COMMUNICATION_CONTROL: 17,
    SERVICE_CONFIRMED_PRIVATE_TRANSFER: 18,
    SERVICE_CONFIRMED_TEXT_MESSAGE: 19,
    SERVICE_CONFIRMED_REINITIALIZE_DEVICE: 20,
    SERVICE_CONFIRMED_VT_OPEN: 21,
    SERVICE_CONFIRMED_VT_CLOSE: 22,
    SERVICE_CONFIRMED_VT_DATA: 23,
    SERVICE_CONFIRMED_AUTHENTICATE: 24,
    SERVICE_CONFIRMED_REQUEST_KEY: 25,
    MAX_BACNET_CONFIRMED_SERVICE: 30
};
module.exports.UnitsId = {
    UNITS_METERS_PER_SECOND_PER_SECOND: 166,
    UNITS_SQUARE_METERS: 0,
    UNITS_SQUARE_CENTIMETERS: 116,
    UNITS_SQUARE_FEET: 1,
    UNITS_SQUARE_INCHES: 115,
    UNITS_CURRENCY1: 105,
    UNITS_CURRENCY2: 106,
    UNITS_CURRENCY3: 107,
    UNITS_CURRENCY4: 108,
    UNITS_CURRENCY5: 109,
    UNITS_CURRENCY6: 110,
    UNITS_CURRENCY7: 111,
    UNITS_CURRENCY8: 112,
    UNITS_CURRENCY9: 113,
    UNITS_CURRENCY10: 114,
    UNITS_MILLIAMPERES: 2,
    UNITS_AMPERES: 3,
    UNITS_AMPERES_PER_METER: 167,
    UNITS_AMPERES_PER_SQUARE_METER: 168,
    UNITS_AMPERE_SQUARE_METERS: 169,
    UNITS_DECIBELS: 199,
    UNITS_DECIBELS_MILLIVOLT: 200,
    UNITS_DECIBELS_VOLT: 201,
    UNITS_FARADS: 170,
    UNITS_HENRYS: 171,
    UNITS_OHMS: 4,
    UNITS_OHM_METERS: 172,
    UNITS_MILLIOHMS: 145,
    UNITS_KILOHMS: 122,
    UNITS_MEGOHMS: 123,
    UNITS_MICROSIEMENS: 190,
    UNITS_MILLISIEMENS: 202,
    UNITS_SIEMENS: 173,
    UNITS_SIEMENS_PER_METER: 174,
    UNITS_TESLAS: 175,
    UNITS_VOLTS: 5,
    UNITS_MILLIVOLTS: 124,
    UNITS_KILOVOLTS: 6,
    UNITS_MEGAVOLTS: 7,
    UNITS_VOLT_AMPERES: 8,
    UNITS_KILOVOLT_AMPERES: 9,
    UNITS_MEGAVOLT_AMPERES: 10,
    UNITS_VOLT_AMPERES_REACTIVE: 11,
    UNITS_KILOVOLT_AMPERES_REACTIVE: 12,
    UNITS_MEGAVOLT_AMPERES_REACTIVE: 13,
    UNITS_VOLTS_PER_DEGREE_KELVIN: 176,
    UNITS_VOLTS_PER_METER: 177,
    UNITS_DEGREES_PHASE: 14,
    UNITS_POWER_FACTOR: 15,
    UNITS_WEBERS: 178,
    UNITS_JOULES: 16,
    UNITS_KILOJOULES: 17,
    UNITS_KILOJOULES_PER_KILOGRAM: 125,
    UNITS_MEGAJOULES: 126,
    UNITS_WATT_HOURS: 18,
    UNITS_KILOWATT_HOURS: 19,
    UNITS_MEGAWATT_HOURS: 146,
    UNITS_WATT_HOURS_REACTIVE: 203,
    UNITS_KILOWATT_HOURS_REACTIVE: 204,
    UNITS_MEGAWATT_HOURS_REACTIVE: 205,
    UNITS_BTUS: 20,
    UNITS_KILO_BTUS: 147,
    UNITS_MEGA_BTUS: 148,
    UNITS_THERMS: 21,
    UNITS_TON_HOURS: 22,
    UNITS_JOULES_PER_KILOGRAM_DRY_AIR: 23,
    UNITS_KILOJOULES_PER_KILOGRAM_DRY_AIR: 149,
    UNITS_MEGAJOULES_PER_KILOGRAM_DRY_AIR: 150,
    UNITS_BTUS_PER_POUND_DRY_AIR: 24,
    UNITS_BTUS_PER_POUND: 117,
    UNITS_JOULES_PER_DEGREE_KELVIN: 127,
    UNITS_KILOJOULES_PER_DEGREE_KELVIN: 151,
    UNITS_MEGAJOULES_PER_DEGREE_KELVIN: 152,
    UNITS_JOULES_PER_KILOGRAM_DEGREE_KELVIN: 128,
    UNITS_NEWTON: 153,
    UNITS_CYCLES_PER_HOUR: 25,
    UNITS_CYCLES_PER_MINUTE: 26,
    UNITS_HERTZ: 27,
    UNITS_KILOHERTZ: 129,
    UNITS_MEGAHERTZ: 130,
    UNITS_PER_HOUR: 131,
    UNITS_GRAMS_OF_WATER_PER_KILOGRAM_DRY_AIR: 28,
    UNITS_PERCENT_RELATIVE_HUMIDITY: 29,
    UNITS_MICROMETERS: 194,
    UNITS_MILLIMETERS: 30,
    UNITS_CENTIMETERS: 118,
    UNITS_KILOMETERS: 193,
    UNITS_METERS: 31,
    UNITS_INCHES: 32,
    UNITS_FEET: 33,
    UNITS_CANDELAS: 179,
    UNITS_CANDELAS_PER_SQUARE_METER: 180,
    UNITS_WATTS_PER_SQUARE_FOOT: 34,
    UNITS_WATTS_PER_SQUARE_METER: 35,
    UNITS_LUMENS: 36,
    UNITS_LUXES: 37,
    UNITS_FOOT_CANDLES: 38,
    UNITS_MILLIGRAMS: 196,
    UNITS_GRAMS: 195,
    UNITS_KILOGRAMS: 39,
    UNITS_POUNDS_MASS: 40,
    UNITS_TONS: 41,
    UNITS_GRAMS_PER_SECOND: 154,
    UNITS_GRAMS_PER_MINUTE: 155,
    UNITS_KILOGRAMS_PER_SECOND: 42,
    UNITS_KILOGRAMS_PER_MINUTE: 43,
    UNITS_KILOGRAMS_PER_HOUR: 44,
    UNITS_POUNDS_MASS_PER_SECOND: 119,
    UNITS_POUNDS_MASS_PER_MINUTE: 45,
    UNITS_POUNDS_MASS_PER_HOUR: 46,
    UNITS_TONS_PER_HOUR: 156,
    UNITS_MILLIWATTS: 132,
    UNITS_WATTS: 47,
    UNITS_KILOWATTS: 48,
    UNITS_MEGAWATTS: 49,
    UNITS_BTUS_PER_HOUR: 50,
    UNITS_KILO_BTUS_PER_HOUR: 157,
    UNITS_HORSEPOWER: 51,
    UNITS_TONS_REFRIGERATION: 52,
    UNITS_PASCALS: 53,
    UNITS_HECTOPASCALS: 133,
    UNITS_KILOPASCALS: 54,
    UNITS_MILLIBARS: 134,
    UNITS_BARS: 55,
    UNITS_POUNDS_FORCE_PER_SQUARE_INCH: 56,
    UNITS_MILLIMETERS_OF_WATER: 206,
    UNITS_CENTIMETERS_OF_WATER: 57,
    UNITS_INCHES_OF_WATER: 58,
    UNITS_MILLIMETERS_OF_MERCURY: 59,
    UNITS_CENTIMETERS_OF_MERCURY: 60,
    UNITS_INCHES_OF_MERCURY: 61,
    UNITS_DEGREES_CELSIUS: 62,
    UNITS_DEGREES_KELVIN: 63,
    UNITS_DEGREES_KELVIN_PER_HOUR: 181,
    UNITS_DEGREES_KELVIN_PER_MINUTE: 182,
    UNITS_DEGREES_FAHRENHEIT: 64,
    UNITS_DEGREE_DAYS_CELSIUS: 65,
    UNITS_DEGREE_DAYS_FAHRENHEIT: 66,
    UNITS_DELTA_DEGREES_FAHRENHEIT: 120,
    UNITS_DELTA_DEGREES_KELVIN: 121,
    UNITS_YEARS: 67,
    UNITS_MONTHS: 68,
    UNITS_WEEKS: 69,
    UNITS_DAYS: 70,
    UNITS_HOURS: 71,
    UNITS_MINUTES: 72,
    UNITS_SECONDS: 73,
    UNITS_HUNDREDTHS_SECONDS: 158,
    UNITS_MILLISECONDS: 159,
    UNITS_NEWTON_METERS: 160,
    UNITS_MILLIMETERS_PER_SECOND: 161,
    UNITS_MILLIMETERS_PER_MINUTE: 162,
    UNITS_METERS_PER_SECOND: 74,
    UNITS_METERS_PER_MINUTE: 163,
    UNITS_METERS_PER_HOUR: 164,
    UNITS_KILOMETERS_PER_HOUR: 75,
    UNITS_FEET_PER_SECOND: 76,
    UNITS_FEET_PER_MINUTE: 77,
    UNITS_MILES_PER_HOUR: 78,
    UNITS_CUBIC_FEET: 79,
    UNITS_CUBIC_METERS: 80,
    UNITS_IMPERIAL_GALLONS: 81,
    UNITS_MILLILITERS: 197,
    UNITS_LITERS: 82,
    UNITS_US_GALLONS: 83,
    UNITS_CUBIC_FEET_PER_SECOND: 142,
    UNITS_CUBIC_FEET_PER_MINUTE: 84,
    UNITS_MILLION_CUBIC_FEET_PER_MINUTE: 254,
    UNITS_CUBIC_FEET_PER_HOUR: 191,
    UNITS_STANDARD_CUBIC_FEET_PER_DAY: 47808,
    UNITS_MILLION_STANDARD_CUBIC_FEET_PER_DAY: 47809,
    UNITS_THOUSAND_CUBIC_FEET_PER_DAY: 47810,
    UNITS_THOUSAND_STANDARD_CUBIC_FEET_PER_DAY: 47811,
    UINITS_POUNDS_MASS_PER_DAY: 47812,
    UNITS_CUBIC_METERS_PER_SECOND: 85,
    UNITS_CUBIC_METERS_PER_MINUTE: 165,
    UNITS_CUBIC_METERS_PER_HOUR: 135,
    UNITS_IMPERIAL_GALLONS_PER_MINUTE: 86,
    UNITS_MILLILITERS_PER_SECOND: 198,
    UNITS_LITERS_PER_SECOND: 87,
    UNITS_LITERS_PER_MINUTE: 88,
    UNITS_LITERS_PER_HOUR: 136,
    UNITS_US_GALLONS_PER_MINUTE: 89,
    UNITS_US_GALLONS_PER_HOUR: 192,
    UNITS_DEGREES_ANGULAR: 90,
    UNITS_DEGREES_CELSIUS_PER_HOUR: 91,
    UNITS_DEGREES_CELSIUS_PER_MINUTE: 92,
    UNITS_DEGREES_FAHRENHEIT_PER_HOUR: 93,
    UNITS_DEGREES_FAHRENHEIT_PER_MINUTE: 94,
    UNITS_JOULE_SECONDS: 183,
    UNITS_KILOGRAMS_PER_CUBIC_METER: 186,
    UNITS_KW_HOURS_PER_SQUARE_METER: 137,
    UNITS_KW_HOURS_PER_SQUARE_FOOT: 138,
    UNITS_MEGAJOULES_PER_SQUARE_METER: 139,
    UNITS_MEGAJOULES_PER_SQUARE_FOOT: 140,
    UNITS_NO_UNITS: 95,
    UNITS_NEWTON_SECONDS: 187,
    UNITS_NEWTONS_PER_METER: 188,
    UNITS_PARTS_PER_MILLION: 96,
    UNITS_PARTS_PER_BILLION: 97,
    UNITS_PERCENT: 98,
    UNITS_PERCENT_OBSCURATION_PER_FOOT: 143,
    UNITS_PERCENT_OBSCURATION_PER_METER: 144,
    UNITS_PERCENT_PER_SECOND: 99,
    UNITS_PER_MINUTE: 100,
    UNITS_PER_SECOND: 101,
    UNITS_PSI_PER_DEGREE_FAHRENHEIT: 102,
    UNITS_RADIANS: 103,
    UNITS_RADIANS_PER_SECOND: 184,
    UNITS_REVOLUTIONS_PER_MINUTE: 104,
    UNITS_SQUARE_METERS_PER_NEWTON: 185,
    UNITS_WATTS_PER_METER_PER_DEGREE_KELVIN: 189,
    UNITS_WATTS_PER_SQUARE_METER_DEGREE_KELVIN: 141,
    UNITS_PER_MILLE: 207,
    UNITS_GRAMS_PER_GRAM: 208,
    UNITS_KILOGRAMS_PER_KILOGRAM: 209,
    UNITS_GRAMS_PER_KILOGRAM: 210,
    UNITS_MILLIGRAMS_PER_GRAM: 211,
    UNITS_MILLIGRAMS_PER_KILOGRAM: 212,
    UNITS_GRAMS_PER_MILLILITER: 213,
    UNITS_GRAMS_PER_LITER: 214,
    UNITS_MILLIGRAMS_PER_LITER: 215,
    UNITS_MICROGRAMS_PER_LITER: 216,
    UNITS_GRAMS_PER_CUBIC_METER: 217,
    UNITS_MILLIGRAMS_PER_CUBIC_METER: 218,
    UNITS_MICROGRAMS_PER_CUBIC_METER: 219,
    UNITS_NANOGRAMS_PER_CUBIC_METER: 220,
    UNITS_GRAMS_PER_CUBIC_CENTIMETER: 221,
    UNITS_BECQUERELS: 222,
    UNITS_MEGABECQUERELS: 224,
    UNITS_GRAY: 225,
    UNITS_MILLIGRAY: 226,
    UNITS_MICROGRAY: 227,
    UNITS_SIEVERTS: 228,
    UNITS_MILLISIEVERTS: 229,
    UNITS_MICROSIEVERTS: 230,
    UNITS_MICROSIEVERTS_PER_HOUR: 231,
    UNITS_MILLIREMS: 47814,
    UNITS_MILLIREMS_PER_HOUR: 47815,
    UNITS_DECIBELS_A: 232,
    UNITS_NEPHELOMETRIC_TURBIDITY_UNIT: 233,
    UNITS_PH: 234,
    UNITS_GRAMS_PER_SQUARE_METER: 235,
    UNITS_MINUTES_PER_DEGREE_KELVIN: 236,
    UNITS_METER_SQUARED_PER_METER: 237,
    UNITS_AMPERE_SECONDS: 238,
    UNITS_VOLT_AMPERE_HOURS: 239,
    UNITS_KILOVOLT_AMPERE_HOURS: 240,
    UNITS_MEGAVOLT_AMPERE_HOURS: 241,
    UNITS_VOLT_AMPERE_HOURS_REACTIVE: 242,
    UNITS_KILOVOLT_AMPERE_HOURS_REACTIVE: 243,
    UNITS_MEGAVOLT_AMPERE_HOURS_REACTIVE: 244,
    UNITS_VOLT_SQUARE_HOURS: 245,
    UNITS_AMPERE_SQUARE_HOURS: 246,
    UNITS_JOULE_PER_HOURS: 247,
    UNITS_CUBIC_FEET_PER_DAY: 248,
    UNITS_CUBIC_METERS_PER_DAY: 249,
    UNITS_WATT_HOURS_PER_CUBIC_METER: 250,
    UNITS_JOULES_PER_CUBIC_METER: 251,
    UNITS_MOLE_PERCENT: 252,
    UNITS_PASCAL_SECONDS: 253
};
module.exports.Polarity = {
    POLARITY_NORMAL: 0,
    POLARITY_REVERSE: 1
};
module.exports.Reliability = {
    RELIABILITY_NO_FAULT_DETECTED: 0,
    RELIABILITY_NO_SENSOR: 1,
    RELIABILITY_OVER_RANGE: 2,
    RELIABILITY_UNDER_RANGE: 3,
    RELIABILITY_OPEN_LOOP: 4,
    RELIABILITY_SHORTED_LOOP: 5,
    RELIABILITY_NO_OUTPUT: 6,
    RELIABILITY_UNRELIABLE_OTHER: 7,
    RELIABILITY_PROCESS_ERROR: 8,
    RELIABILITY_MULTI_STATE_FAULT: 9,
    RELIABILITY_CONFIGURATION_ERROR: 10,
    RELIABILITY_MEMBER_FAULT: 11,
    RELIABILITY_COMMUNICATION_FAILURE: 12,
    RELIABILITY_TRIPPED: 13
};
/**
 * @readonly
 * @enum {MaxSegments}
 */ module.exports.MaxSegments = {
    MAX_SEG0: 0,
    MAX_SEG2: 0x10,
    MAX_SEG4: 0x20,
    MAX_SEG8: 0x30,
    MAX_SEG16: 0x40,
    MAX_SEG32: 0x50,
    MAX_SEG64: 0x60,
    MAX_SEG65: 0x70
};
/**
 * @readonly
 * @enum {MaxAdpu}
 */ module.exports.MaxAdpu = {
    MAX_APDU50: 0,
    MAX_APDU128: 1,
    MAX_APDU206: 2,
    MAX_APDU480: 3,
    MAX_APDU1024: 4,
    MAX_APDU1476: 5
};
module.exports.ObjectTypes = {
    OBJECT_ANALOG_INPUT: 0,
    OBJECT_ANALOG_OUTPUT: 1,
    OBJECT_ANALOG_VALUE: 2,
    OBJECT_BINARY_INPUT: 3,
    OBJECT_BINARY_OUTPUT: 4,
    OBJECT_BINARY_VALUE: 5,
    OBJECT_CALENDAR: 6,
    OBJECT_COMMAND: 7,
    OBJECT_DEVICE: 8,
    OBJECT_EVENT_ENROLLMENT: 9,
    OBJECT_FILE: 10,
    OBJECT_GROUP: 11,
    OBJECT_LOOP: 12,
    OBJECT_MULTI_STATE_INPUT: 13,
    OBJECT_MULTI_STATE_OUTPUT: 14,
    OBJECT_NOTIFICATION_CLASS: 15,
    OBJECT_PROGRAM: 16,
    OBJECT_SCHEDULE: 17,
    OBJECT_AVERAGING: 18,
    OBJECT_MULTI_STATE_VALUE: 19,
    OBJECT_TRENDLOG: 20,
    OBJECT_LIFE_SAFETY_POINT: 21,
    OBJECT_LIFE_SAFETY_ZONE: 22,
    OBJECT_ACCUMULATOR: 23,
    OBJECT_PULSE_CONVERTER: 24,
    OBJECT_EVENT_LOG: 25,
    OBJECT_GLOBAL_GROUP: 26,
    OBJECT_TREND_LOG_MULTIPLE: 27,
    OBJECT_LOAD_CONTROL: 28,
    OBJECT_STRUCTURED_VIEW: 29,
    OBJECT_ACCESS_DOOR: 30,
    OBJECT_TIMER: 31,
    OBJECT_ACCESS_CREDENTIAL: 32,
    OBJECT_ACCESS_POINT: 33,
    OBJECT_ACCESS_RIGHTS: 34,
    OBJECT_ACCESS_USER: 35,
    OBJECT_ACCESS_ZONE: 36,
    OBJECT_CREDENTIAL_DATA_INPUT: 37,
    OBJECT_NETWORK_SECURITY: 38,
    OBJECT_BITSTRING_VALUE: 39,
    OBJECT_CHARACTERSTRING_VALUE: 40,
    OBJECT_DATE_PATTERN_VALUE: 41,
    OBJECT_DATE_VALUE: 42,
    OBJECT_DATETIME_PATTERN_VALUE: 43,
    OBJECT_DATETIME_VALUE: 44,
    OBJECT_INTEGER_VALUE: 45,
    OBJECT_LARGE_ANALOG_VALUE: 46,
    OBJECT_OCTETSTRING_VALUE: 47,
    OBJECT_POSITIVE_INTEGER_VALUE: 48,
    OBJECT_TIME_PATTERN_VALUE: 49,
    OBJECT_TIME_VALUE: 50,
    OBJECT_NOTIFICATION_FORWARDER: 51,
    OBJECT_ALERT_ENROLLMENT: 52,
    OBJECT_CHANNEL: 53,
    OBJECT_LIGHTING_OUTPUT: 54,
    OBJECT_BINARY_LIGHTING_OUTPUT: 55,
    OBJECT_PROPRIETARY_MIN: 128,
    OBJECT_PROPRIETARY_MAX: 1023,
    MAX_BACNET_OBJECT_TYPE: 1024,
    MAX_ASHRAE_OBJECT_TYPE: 55
};
/**
 * @readonly
 * @enum {ApplicationTags}
 */ module.exports.ApplicationTags = {
    BACNET_APPLICATION_TAG_NULL: 0,
    BACNET_APPLICATION_TAG_BOOLEAN: 1,
    BACNET_APPLICATION_TAG_UNSIGNED_INT: 2,
    BACNET_APPLICATION_TAG_SIGNED_INT: 3,
    BACNET_APPLICATION_TAG_REAL: 4,
    BACNET_APPLICATION_TAG_DOUBLE: 5,
    BACNET_APPLICATION_TAG_OCTET_STRING: 6,
    BACNET_APPLICATION_TAG_CHARACTER_STRING: 7,
    BACNET_APPLICATION_TAG_BIT_STRING: 8,
    BACNET_APPLICATION_TAG_ENUMERATED: 9,
    BACNET_APPLICATION_TAG_DATE: 10,
    BACNET_APPLICATION_TAG_TIME: 11,
    BACNET_APPLICATION_TAG_OBJECT_ID: 12,
    BACNET_APPLICATION_TAG_RESERVE1: 13,
    BACNET_APPLICATION_TAG_RESERVE2: 14,
    BACNET_APPLICATION_TAG_RESERVE3: 15,
    MAX_BACNET_APPLICATION_TAG: 16,
    BACNET_APPLICATION_TAG_EMPTYLIST: 100,
    BACNET_APPLICATION_TAG_WEEKNDAY: 101,
    BACNET_APPLICATION_TAG_DATERANGE: 102,
    BACNET_APPLICATION_TAG_DATETIME: 103,
    BACNET_APPLICATION_TAG_TIMESTAMP: 104,
    BACNET_APPLICATION_TAG_ERROR: 105,
    BACNET_APPLICATION_TAG_DEVICE_OBJECT_PROPERTY_REFERENCE: 106,
    BACNET_APPLICATION_TAG_DEVICE_OBJECT_REFERENCE: 107,
    BACNET_APPLICATION_TAG_OBJECT_PROPERTY_REFERENCE: 108,
    BACNET_APPLICATION_TAG_DESTINATION: 109,
    BACNET_APPLICATION_TAG_RECIPIENT: 110,
    BACNET_APPLICATION_TAG_COV_SUBSCRIPTION: 111,
    BACNET_APPLICATION_TAG_CALENDAR_ENTRY: 112,
    BACNET_APPLICATION_TAG_WEEKLY_SCHEDULE: 113,
    BACNET_APPLICATION_TAG_SPECIAL_EVENT: 114,
    BACNET_APPLICATION_TAG_READ_ACCESS_SPECIFICATION: 115,
    BACNET_APPLICATION_TAG_READ_ACCESS_RESULT: 116,
    BACNET_APPLICATION_TAG_LIGHTING_COMMAND: 117,
    BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_DECODED: 118,
    BACNET_APPLICATION_TAG_CONTEXT_SPECIFIC_ENCODED: 119,
    BACNET_APPLICATION_TAG_LOG_RECORD: 120
};
module.exports.PropertyIds = {
    PROP_ACKED_TRANSITIONS: 0,
    PROP_ACK_REQUIRED: 1,
    PROP_ACTION: 2,
    PROP_ACTION_TEXT: 3,
    PROP_ACTIVE_TEXT: 4,
    PROP_ACTIVE_VT_SESSIONS: 5,
    PROP_ALARM_VALUE: 6,
    PROP_ALARM_VALUES: 7,
    PROP_ALL: 8,
    PROP_ALL_WRITES_SUCCESSFUL: 9,
    PROP_APDU_SEGMENT_TIMEOUT: 10,
    PROP_APDU_TIMEOUT: 11,
    PROP_APPLICATION_SOFTWARE_VERSION: 12,
    PROP_ARCHIVE: 13,
    PROP_BIAS: 14,
    PROP_CHANGE_OF_STATE_COUNT: 15,
    PROP_CHANGE_OF_STATE_TIME: 16,
    PROP_NOTIFICATION_CLASS: 17,
    PROP_BLANK_1: 18,
    PROP_CONTROLLED_VARIABLE_REFERENCE: 19,
    PROP_CONTROLLED_VARIABLE_UNITS: 20,
    PROP_CONTROLLED_VARIABLE_VALUE: 21,
    PROP_COV_INCREMENT: 22,
    PROP_DATE_LIST: 23,
    PROP_DAYLIGHT_SAVINGS_STATUS: 24,
    PROP_DEADBAND: 25,
    PROP_DERIVATIVE_CONSTANT: 26,
    PROP_DERIVATIVE_CONSTANT_UNITS: 27,
    PROP_DESCRIPTION: 28,
    PROP_DESCRIPTION_OF_HALT: 29,
    PROP_DEVICE_ADDRESS_BINDING: 30,
    PROP_DEVICE_TYPE: 31,
    PROP_EFFECTIVE_PERIOD: 32,
    PROP_ELAPSED_ACTIVE_TIME: 33,
    PROP_ERROR_LIMIT: 34,
    PROP_EVENT_ENABLE: 35,
    PROP_EVENT_STATE: 36,
    PROP_EVENT_TYPE: 37,
    PROP_EXCEPTION_SCHEDULE: 38,
    PROP_FAULT_VALUES: 39,
    PROP_FEEDBACK_VALUE: 40,
    PROP_FILE_ACCESS_METHOD: 41,
    PROP_FILE_SIZE: 42,
    PROP_FILE_TYPE: 43,
    PROP_FIRMWARE_REVISION: 44,
    PROP_HIGH_LIMIT: 45,
    PROP_INACTIVE_TEXT: 46,
    PROP_IN_PROCESS: 47,
    PROP_INSTANCE_OF: 48,
    PROP_INTEGRAL_CONSTANT: 49,
    PROP_INTEGRAL_CONSTANT_UNITS: 50,
    PROP_ISSUE_CONFIRMED_NOTIFICATIONS: 51,
    PROP_LIMIT_ENABLE: 52,
    PROP_LIST_OF_GROUP_MEMBERS: 53,
    PROP_LIST_OF_OBJECT_PROPERTY_REFERENCES: 54,
    PROP_LIST_OF_SESSION_KEYS: 55,
    PROP_LOCAL_DATE: 56,
    PROP_LOCAL_TIME: 57,
    PROP_LOCATION: 58,
    PROP_LOW_LIMIT: 59,
    PROP_MANIPULATED_VARIABLE_REFERENCE: 60,
    PROP_MAXIMUM_OUTPUT: 61,
    PROP_MAX_APDU_LENGTH_ACCEPTED: 62,
    PROP_MAX_INFO_FRAMES: 63,
    PROP_MAX_MASTER: 64,
    PROP_MAX_PRES_VALUE: 65,
    PROP_MINIMUM_OFF_TIME: 66,
    PROP_MINIMUM_ON_TIME: 67,
    PROP_MINIMUM_OUTPUT: 68,
    PROP_MIN_PRES_VALUE: 69,
    PROP_MODEL_NAME: 70,
    PROP_MODIFICATION_DATE: 71,
    PROP_NOTIFY_TYPE: 72,
    PROP_NUMBER_OF_APDU_RETRIES: 73,
    PROP_NUMBER_OF_STATES: 74,
    PROP_OBJECT_IDENTIFIER: 75,
    PROP_OBJECT_LIST: 76,
    PROP_OBJECT_NAME: 77,
    PROP_OBJECT_PROPERTY_REFERENCE: 78,
    PROP_OBJECT_TYPE: 79,
    PROP_OPTIONAL: 80,
    PROP_OUT_OF_SERVICE: 81,
    PROP_OUTPUT_UNITS: 82,
    PROP_EVENT_PARAMETERS: 83,
    PROP_POLARITY: 84,
    PROP_PRESENT_VALUE: 85,
    PROP_PRIORITY: 86,
    PROP_PRIORITY_ARRAY: 87,
    PROP_PRIORITY_FOR_WRITING: 88,
    PROP_PROCESS_IDENTIFIER: 89,
    PROP_PROGRAM_CHANGE: 90,
    PROP_PROGRAM_LOCATION: 91,
    PROP_PROGRAM_STATE: 92,
    PROP_PROPORTIONAL_CONSTANT: 93,
    PROP_PROPORTIONAL_CONSTANT_UNITS: 94,
    PROP_PROTOCOL_CONFORMANCE_CLASS: 95,
    PROP_PROTOCOL_OBJECT_TYPES_SUPPORTED: 96,
    PROP_PROTOCOL_SERVICES_SUPPORTED: 97,
    PROP_PROTOCOL_VERSION: 98,
    PROP_READ_ONLY: 99,
    PROP_REASON_FOR_HALT: 100,
    PROP_RECIPIENT: 101,
    PROP_RECIPIENT_LIST: 102,
    PROP_RELIABILITY: 103,
    PROP_RELINQUISH_DEFAULT: 104,
    PROP_REQUIRED: 105,
    PROP_RESOLUTION: 106,
    PROP_SEGMENTATION_SUPPORTED: 107,
    PROP_SETPOINT: 108,
    PROP_SETPOINT_REFERENCE: 109,
    PROP_STATE_TEXT: 110,
    PROP_STATUS_FLAGS: 111,
    PROP_SYSTEM_STATUS: 112,
    PROP_TIME_DELAY: 113,
    PROP_TIME_OF_ACTIVE_TIME_RESET: 114,
    PROP_TIME_OF_STATE_COUNT_RESET: 115,
    PROP_TIME_SYNCHRONIZATION_RECIPIENTS: 116,
    PROP_UNITS: 117,
    PROP_UPDATE_INTERVAL: 118,
    PROP_UTC_OFFSET: 119,
    PROP_VENDOR_IDENTIFIER: 120,
    PROP_VENDOR_NAME: 121,
    PROP_VT_CLASSES_SUPPORTED: 122,
    PROP_WEEKLY_SCHEDULE: 123,
    PROP_ATTEMPTED_SAMPLES: 124,
    PROP_AVERAGE_VALUE: 125,
    PROP_BUFFER_SIZE: 126,
    PROP_CLIENT_COV_INCREMENT: 127,
    PROP_COV_RESUBSCRIPTION_INTERVAL: 128,
    PROP_CURRENT_NOTIFY_TIME: 129,
    PROP_EVENT_TIME_STAMPS: 130,
    PROP_LOG_BUFFER: 131,
    PROP_LOG_DEVICE_OBJECT_PROPERTY: 132,
    PROP_ENABLE: 133,
    PROP_LOG_INTERVAL: 134,
    PROP_MAXIMUM_VALUE: 135,
    PROP_MINIMUM_VALUE: 136,
    PROP_NOTIFICATION_THRESHOLD: 137,
    PROP_PREVIOUS_NOTIFY_TIME: 138,
    PROP_PROTOCOL_REVISION: 139,
    PROP_RECORDS_SINCE_NOTIFICATION: 140,
    PROP_RECORD_COUNT: 141,
    PROP_START_TIME: 142,
    PROP_STOP_TIME: 143,
    PROP_STOP_WHEN_FULL: 144,
    PROP_TOTAL_RECORD_COUNT: 145,
    PROP_VALID_SAMPLES: 146,
    PROP_WINDOW_INTERVAL: 147,
    PROP_WINDOW_SAMPLES: 148,
    PROP_MAXIMUM_VALUE_TIMESTAMP: 149,
    PROP_MINIMUM_VALUE_TIMESTAMP: 150,
    PROP_VARIANCE_VALUE: 151,
    PROP_ACTIVE_COV_SUBSCRIPTIONS: 152,
    PROP_BACKUP_FAILURE_TIMEOUT: 153,
    PROP_CONFIGURATION_FILES: 154,
    PROP_DATABASE_REVISION: 155,
    PROP_DIRECT_READING: 156,
    PROP_LAST_RESTORE_TIME: 157,
    PROP_MAINTENANCE_REQUIRED: 158,
    PROP_MEMBER_OF: 159,
    PROP_MODE: 160,
    PROP_OPERATION_EXPECTED: 161,
    PROP_SETTING: 162,
    PROP_SILENCED: 163,
    PROP_TRACKING_VALUE: 164,
    PROP_ZONE_MEMBERS: 165,
    PROP_LIFE_SAFETY_ALARM_VALUES: 166,
    PROP_MAX_SEGMENTS_ACCEPTED: 167,
    PROP_PROFILE_NAME: 168,
    PROP_AUTO_SLAVE_DISCOVERY: 169,
    PROP_MANUAL_SLAVE_ADDRESS_BINDING: 170,
    PROP_SLAVE_ADDRESS_BINDING: 171,
    PROP_SLAVE_PROXY_ENABLE: 172,
    PROP_LAST_NOTIFY_RECORD: 173,
    PROP_SCHEDULE_DEFAULT: 174,
    PROP_ACCEPTED_MODES: 175,
    PROP_ADJUST_VALUE: 176,
    PROP_COUNT: 177,
    PROP_COUNT_BEFORE_CHANGE: 178,
    PROP_COUNT_CHANGE_TIME: 179,
    PROP_COV_PERIOD: 180,
    PROP_INPUT_REFERENCE: 181,
    PROP_LIMIT_MONITORING_INTERVAL: 182,
    PROP_LOGGING_OBJECT: 183,
    PROP_LOGGING_RECORD: 184,
    PROP_PRESCALE: 185,
    PROP_PULSE_RATE: 186,
    PROP_SCALE: 187,
    PROP_SCALE_FACTOR: 188,
    PROP_UPDATE_TIME: 189,
    PROP_VALUE_BEFORE_CHANGE: 190,
    PROP_VALUE_SET: 191,
    PROP_VALUE_CHANGE_TIME: 192,
    PROP_ALIGN_INTERVALS: 193,
    PROP_INTERVAL_OFFSET: 195,
    PROP_LAST_RESTART_REASON: 196,
    PROP_LOGGING_TYPE: 197,
    PROP_RESTART_NOTIFICATION_RECIPIENTS: 202,
    PROP_TIME_OF_DEVICE_RESTART: 203,
    PROP_TIME_SYNCHRONIZATION_INTERVAL: 204,
    PROP_TRIGGER: 205,
    PROP_UTC_TIME_SYNCHRONIZATION_RECIPIENTS: 206,
    PROP_NODE_SUBTYPE: 207,
    PROP_NODE_TYPE: 208,
    PROP_STRUCTURED_OBJECT_LIST: 209,
    PROP_SUBORDINATE_ANNOTATIONS: 210,
    PROP_SUBORDINATE_LIST: 211,
    PROP_ACTUAL_SHED_LEVEL: 212,
    PROP_DUTY_WINDOW: 213,
    PROP_EXPECTED_SHED_LEVEL: 214,
    PROP_FULL_DUTY_BASELINE: 215,
    PROP_REQUESTED_SHED_LEVEL: 218,
    PROP_SHED_DURATION: 219,
    PROP_SHED_LEVEL_DESCRIPTIONS: 220,
    PROP_SHED_LEVELS: 221,
    PROP_STATE_DESCRIPTION: 222,
    PROP_DOOR_ALARM_STATE: 226,
    PROP_DOOR_EXTENDED_PULSE_TIME: 227,
    PROP_DOOR_MEMBERS: 228,
    PROP_DOOR_OPEN_TOO_LONG_TIME: 229,
    PROP_DOOR_PULSE_TIME: 230,
    PROP_DOOR_STATUS: 231,
    PROP_DOOR_UNLOCK_DELAY_TIME: 232,
    PROP_LOCK_STATUS: 233,
    PROP_MASKED_ALARM_VALUES: 234,
    PROP_SECURED_STATUS: 235,
    PROP_ABSENTEE_LIMIT: 244,
    PROP_ACCESS_ALARM_EVENTS: 245,
    PROP_ACCESS_DOORS: 246,
    PROP_ACCESS_EVENT: 247,
    PROP_ACCESS_EVENT_AUTHENTICATION_FACTOR: 248,
    PROP_ACCESS_EVENT_CREDENTIAL: 249,
    PROP_ACCESS_EVENT_TIME: 250,
    PROP_ACCESS_TRANSACTION_EVENTS: 251,
    PROP_ACCOMPANIMENT: 252,
    PROP_ACCOMPANIMENT_TIME: 253,
    PROP_ACTIVATION_TIME: 254,
    PROP_ACTIVE_AUTHENTICATION_POLICY: 255,
    PROP_ASSIGNED_ACCESS_RIGHTS: 256,
    PROP_AUTHENTICATION_FACTORS: 257,
    PROP_AUTHENTICATION_POLICY_LIST: 258,
    PROP_AUTHENTICATION_POLICY_NAMES: 259,
    PROP_AUTHENTICATION_STATUS: 260,
    PROP_AUTHORIZATION_MODE: 261,
    PROP_BELONGS_TO: 262,
    PROP_CREDENTIAL_DISABLE: 263,
    PROP_CREDENTIAL_STATUS: 264,
    PROP_CREDENTIALS: 265,
    PROP_CREDENTIALS_IN_ZONE: 266,
    PROP_DAYS_REMAINING: 267,
    PROP_ENTRY_POINTS: 268,
    PROP_EXIT_POINTS: 269,
    PROP_EXPIRY_TIME: 270,
    PROP_EXTENDED_TIME_ENABLE: 271,
    PROP_FAILED_ATTEMPT_EVENTS: 272,
    PROP_FAILED_ATTEMPTS: 273,
    PROP_FAILED_ATTEMPTS_TIME: 274,
    PROP_LAST_ACCESS_EVENT: 275,
    PROP_LAST_ACCESS_POINT: 276,
    PROP_LAST_CREDENTIAL_ADDED: 277,
    PROP_LAST_CREDENTIAL_ADDED_TIME: 278,
    PROP_LAST_CREDENTIAL_REMOVED: 279,
    PROP_LAST_CREDENTIAL_REMOVED_TIME: 280,
    PROP_LAST_USE_TIME: 281,
    PROP_LOCKOUT: 282,
    PROP_LOCKOUT_RELINQUISH_TIME: 283,
    PROP_MASTER_EXEMPTION: 284,
    PROP_MAX_FAILED_ATTEMPTS: 285,
    PROP_MEMBERS: 286,
    PROP_MUSTER_POINT: 287,
    PROP_NEGATIVE_ACCESS_RULES: 288,
    PROP_NUMBER_OF_AUTHENTICATION_POLICIES: 289,
    PROP_OCCUPANCY_COUNT: 290,
    PROP_OCCUPANCY_COUNT_ADJUST: 291,
    PROP_OCCUPANCY_COUNT_ENABLE: 292,
    PROP_OCCUPANCY_EXEMPTION: 293,
    PROP_OCCUPANCY_LOWER_LIMIT: 294,
    PROP_OCCUPANCY_LOWER_LIMIT_ENFORCED: 295,
    PROP_OCCUPANCY_STATE: 296,
    PROP_OCCUPANCY_UPPER_LIMIT: 297,
    PROP_OCCUPANCY_UPPER_LIMIT_ENFORCED: 298,
    PROP_PASSBACK_EXEMPTION: 299,
    PROP_PASSBACK_MODE: 300,
    PROP_PASSBACK_TIMEOUT: 301,
    PROP_POSITIVE_ACCESS_RULES: 302,
    PROP_REASON_FOR_DISABLE: 303,
    PROP_SUPPORTED_FORMATS: 304,
    PROP_SUPPORTED_FORMAT_CLASSES: 305,
    PROP_THREAT_AUTHORITY: 306,
    PROP_THREAT_LEVEL: 307,
    PROP_TRACE_FLAG: 308,
    PROP_TRANSACTION_NOTIFICATION_CLASS: 309,
    PROP_USER_EXTERNAL_IDENTIFIER: 310,
    PROP_USER_INFORMATION_REFERENCE: 311,
    PROP_USER_NAME: 317,
    PROP_USER_TYPE: 318,
    PROP_USES_REMAINING: 319,
    PROP_ZONE_FROM: 320,
    PROP_ZONE_TO: 321,
    PROP_ACCESS_EVENT_TAG: 322,
    PROP_GLOBAL_IDENTIFIER: 323,
    PROP_VERIFICATION_TIME: 326,
    PROP_BASE_DEVICE_SECURITY_POLICY: 327,
    PROP_DISTRIBUTION_KEY_REVISION: 328,
    PROP_DO_NOT_HIDE: 329,
    PROP_KEY_SETS: 330,
    PROP_LAST_KEY_SERVER: 331,
    PROP_NETWORK_ACCESS_SECURITY_POLICIES: 332,
    PROP_PACKET_REORDER_TIME: 333,
    PROP_SECURITY_PDU_TIMEOUT: 334,
    PROP_SECURITY_TIME_WINDOW: 335,
    PROP_SUPPORTED_SECURITY_ALGORITHM: 336,
    PROP_UPDATE_KEY_SET_TIMEOUT: 337,
    PROP_BACKUP_AND_RESTORE_STATE: 338,
    PROP_BACKUP_PREPARATION_TIME: 339,
    PROP_RESTORE_COMPLETION_TIME: 340,
    PROP_RESTORE_PREPARATION_TIME: 341,
    PROP_BIT_MASK: 342,
    PROP_BIT_TEXT: 343,
    PROP_IS_UTC: 344,
    PROP_GROUP_MEMBERS: 345,
    PROP_GROUP_MEMBER_NAMES: 346,
    PROP_MEMBER_STATUS_FLAGS: 347,
    PROP_REQUESTED_UPDATE_INTERVAL: 348,
    PROP_COVU_PERIOD: 349,
    PROP_COVU_RECIPIENTS: 350,
    PROP_EVENT_MESSAGE_TEXTS: 351,
    PROP_EVENT_MESSAGE_TEXTS_CONFIG: 352,
    PROP_EVENT_DETECTION_ENABLE: 353,
    PROP_EVENT_ALGORITHM_INHIBIT: 354,
    PROP_EVENT_ALGORITHM_INHIBIT_REF: 355,
    PROP_TIME_DELAY_NORMAL: 356,
    PROP_RELIABILITY_EVALUATION_INHIBIT: 357,
    PROP_FAULT_PARAMETERS: 358,
    PROP_FAULT_TYPE: 359,
    PROP_LOCAL_FORWARDING_ONLY: 360,
    PROP_PROCESS_IDENTIFIER_FILTER: 361,
    PROP_SUBSCRIBED_RECIPIENTS: 362,
    PROP_PORT_FILTER: 363,
    PROP_AUTHORIZATION_EXEMPTIONS: 364,
    PROP_ALLOW_GROUP_DELAY_INHIBIT: 365,
    PROP_CHANNEL_NUMBER: 366,
    PROP_CONTROL_GROUPS: 367,
    PROP_EXECUTION_DELAY: 368,
    PROP_LAST_PRIORITY: 369,
    PROP_WRITE_STATUS: 370,
    PROP_PROPERTY_LIST: 371,
    PROP_SERIAL_NUMBER: 372,
    PROP_BLINK_WARN_ENABLE: 373,
    PROP_DEFAULT_FADE_TIME: 374,
    PROP_DEFAULT_RAMP_RATE: 375,
    PROP_DEFAULT_STEP_INCREMENT: 376,
    PROP_EGRESS_TIME: 377,
    PROP_IN_PROGRESS: 378,
    PROP_INSTANTANEOUS_POWER: 379,
    PROP_LIGHTING_COMMAND: 380,
    PROP_LIGHTING_COMMAND_DEFAULT_PRIORITY: 381,
    PROP_MAX_ACTUAL_VALUE: 382,
    PROP_MIN_ACTUAL_VALUE: 383,
    PROP_POWER: 384,
    PROP_TRANSITION: 385,
    PROP_EGRESS_ACTIVE: 386,
    PROP_INTERFACE_VALUE: 387,
    PROP_FAULT_HIGH_LIMIT: 388,
    PROP_FAULT_LOW_LIMIT: 389,
    PROP_LOW_DIFF_LIMIT: 390,
    PROP_STRIKE_COUNT: 391,
    PROP_TIME_OF_STRIKE_COUNT_RESET: 392,
    PROP_DEFAULT_TIMEOUT: 393,
    PROP_INITIAL_TIMEOUT: 394,
    PROP_LAST_STATE_CHANGE: 395,
    PROP_STATE_CHANGE_VALUES: 396,
    PROP_TIMER_RUNNING: 397,
    PROP_TIMER_STATE: 398,
    MAX_BACNET_PROPERTY_ID: 4194303
};
module.exports.NodeTypes = {
    NT_UNKNOWN: 0,
    NT_SYSTEM: 1,
    NT_NETWORK: 2,
    NT_DEVICE: 3,
    NT_ORGANIZATIONAL: 4,
    NT_AREA: 5,
    NT_EQUIPMENT: 6,
    NT_POINT: 7,
    NT_COLLECTION: 8,
    NT_PROPERTY: 9,
    NT_FUNCTIONAL: 10,
    NT_OTHER: 11
};
module.exports.BvlcFunctions = {
    BVLC_RESULT: 0,
    BVLC_WRITE_BROADCAST_DISTRIBUTION_TABLE: 1,
    BVLC_READ_BROADCAST_DIST_TABLE: 2,
    BVLC_READ_BROADCAST_DIST_TABLE_ACK: 3,
    BVLC_FORWARDED_NPDU: 4,
    BVLC_REGISTER_FOREIGN_DEVICE: 5,
    BVLC_READ_FOREIGN_DEVICE_TABLE: 6,
    BVLC_READ_FOREIGN_DEVICE_TABLE_ACK: 7,
    BVLC_DELETE_FOREIGN_DEVICE_TABLE_ENTRY: 8,
    BVLC_DISTRIBUTE_BROADCAST_TO_NETWORK: 9,
    BVLC_ORIGINAL_UNICAST_NPDU: 10,
    BVLC_ORIGINAL_BROADCAST_NPDU: 11,
    MAX_BVLC_FUNCTION: 12
};
module.exports.BvlcResults = {
    BVLC_RESULT_SUCCESSFUL_COMPLETION: 0x0000,
    BVLC_RESULT_WRITE_BROADCAST_DISTRIBUTION_TABLE_NAK: 0x0010,
    BVLC_RESULT_READ_BROADCAST_DISTRIBUTION_TABLE_NAK: 0x0020,
    BVLC_RESULT_REGISTER_FOREIGN_DEVICE_NAK: 0X0030,
    BVLC_RESULT_READ_FOREIGN_DEVICE_TABLE_NAK: 0x0040,
    BVLC_RESULT_DELETE_FOREIGN_DEVICE_TABLE_ENTRY_NAK: 0x0050,
    BVLC_RESULT_DISTRIBUTE_BROADCAST_TO_NETWORK_NAK: 0x0060
};
module.exports.NpduControls = {
    PRIORITY_NORMAL_MESSAGE: 0,
    PRIORITY_URGENT_MESSAGE: 1,
    PRIORITY_CRITICAL_MESSAGE: 2,
    PRIORITY_LIFESAFETY_MESSAGE: 3,
    EXPECTING_REPLY: 4,
    SOURCE_SPECIFIED: 8,
    DESTINATION_SPECIFIED: 32,
    NETWORK_LAYER_MESSAGE: 128
};
module.exports.NetworkMessageTypes = {
    NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK: 0,
    NETWORK_MESSAGE_I_AM_ROUTER_TO_NETWORK: 1,
    NETWORK_MESSAGE_I_COULD_BE_ROUTER_TO_NETWORK: 2,
    NETWORK_MESSAGE_REJECT_MESSAGE_TO_NETWORK: 3,
    NETWORK_MESSAGE_ROUTER_BUSY_TO_NETWORK: 4,
    NETWORK_MESSAGE_ROUTER_AVAILABLE_TO_NETWORK: 5,
    NETWORK_MESSAGE_INIT_RT_TABLE: 6,
    NETWORK_MESSAGE_INIT_RT_TABLE_ACK: 7,
    NETWORK_MESSAGE_ESTABLISH_CONNECTION_TO_NETWORK: 8,
    NETWORK_MESSAGE_DISCONNECT_CONNECTION_TO_NETWORK: 9
};
/**
 * @readonly
 * @enum {ReinitializedStates}
 */ module.exports.ReinitializedStates = {
    BACNET_REINIT_COLDSTART: 0,
    BACNET_REINIT_WARMSTART: 1,
    BACNET_REINIT_STARTBACKUP: 2,
    BACNET_REINIT_ENDBACKUP: 3,
    BACNET_REINIT_STARTRESTORE: 4,
    BACNET_REINIT_ENDRESTORE: 5,
    BACNET_REINIT_ABORTRESTORE: 6,
    BACNET_REINIT_IDLE: 255
};
module.exports.CharacterStringEncodings = {
    CHARACTER_ANSI_X34: 0,
    CHARACTER_UTF8: 0,
    CHARACTER_MS_DBCS: 1,
    CHARACTER_JISC_6226: 2,
    CHARACTER_JISX_0208: 2,
    CHARACTER_UCS4: 3,
    CHARACTER_UCS2: 4,
    CHARACTER_ISO8859_1: 5
};
module.exports.ReadRangeRequestTypes = {
    RR_BY_POSITION: 1,
    RR_BY_SEQUENCE: 2,
    RR_BY_TIME: 4,
    RR_READ_ALL: 8
};
/**
 * @readonly
 * @enum {EnableDisable}
 */ module.exports.EnableDisable = {
    ENABLE: 0,
    DISABLE: 1,
    DISABLE_INITIATION: 2
};
module.exports.NotifyTypes = {
    NOTIFY_ALARM: 0,
    NOTIFY_EVENT: 1,
    NOTIFY_ACK_NOTIFICATION: 2
};
module.exports.EventTypes = {
    EVENT_CHANGE_OF_BITSTRING: 0,
    EVENT_CHANGE_OF_STATE: 1,
    EVENT_CHANGE_OF_VALUE: 2,
    EVENT_COMMAND_FAILURE: 3,
    EVENT_FLOATING_LIMIT: 4,
    EVENT_OUT_OF_RANGE: 5,
    EVENT_CHANGE_OF_LIFE_SAFETY: 8,
    EVENT_EXTENDED: 9,
    EVENT_BUFFER_READY: 10,
    EVENT_UNSIGNED_RANGE: 11
};
module.exports.COVTypes = {
    CHANGE_OF_VALUE_BITS: 0,
    CHANGE_OF_VALUE_REAL: 1
};
module.exports.TimestampTags = {
    TIME_STAMP_TIME: 0,
    TIME_STAMP_SEQUENCE: 1,
    TIME_STAMP_DATETIME: 2,
    TIME_STAMP_NONE: -1
};
module.exports.PropertyStateTypes = {
    BOOLEAN_VALUE: 0,
    BINARY_VALUE: 1,
    EVENT_TYPE: 2,
    POLARITY: 3,
    PROGRAM_CHANGE: 4,
    PROGRAM_STATE: 5,
    REASON_FOR_HALT: 6,
    RELIABILITY: 7,
    STATE: 8,
    SYSTEM_STATUS: 9,
    UNITS: 10,
    UNSIGNED_VALUE: 11,
    LIFE_SAFETY_MODE: 12,
    LIFE_SAFETY_STATE: 13
};

},{}],"7a50s":[function(require,module,exports) {
var baEnum = require("43b9651c673b04f1");
var getDecodedType = module.exports.getDecodedType = function(buffer, offset) {
    return buffer[offset];
};
module.exports.setDecodedType = function(buffer, offset, type) {
    buffer[offset] = type;
};
module.exports.getDecodedInvokeId = function(buffer, offset) {
    var type = getDecodedType(buffer, offset);
    switch(type & baEnum.PduTypes.PDU_TYPE_MASK){
        case baEnum.PduTypes.PDU_TYPE_SIMPLE_ACK:
        case baEnum.PduTypes.PDU_TYPE_COMPLEX_ACK:
        case baEnum.PduTypes.PDU_TYPE_ERROR:
        case baEnum.PduTypes.PDU_TYPE_REJECT:
        case baEnum.PduTypes.PDU_TYPE_ABORT:
            return buffer[offset + 1];
        case baEnum.PduTypes.PDU_TYPE_CONFIRMED_SERVICE_REQUEST:
            return buffer[offset + 2];
        default:
            return;
    }
};
module.exports.encodeConfirmedServiceRequest = function(buffer, type, service, maxSegments, maxAdpu, invokeId, sequencenumber, proposedWindowSize) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = maxSegments | maxAdpu;
    buffer.buffer[buffer.offset++] = invokeId;
    if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) > 0) {
        buffer.buffer[buffer.offset++] = sequencenumber;
        buffer.buffer[buffer.offset++] = proposedWindowSize;
    }
    buffer.buffer[buffer.offset++] = service;
};
module.exports.decodeConfirmedServiceRequest = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var maxSegments = buffer[offset] & 0xF0;
    var maxAdpu = buffer[offset++] & 0x0F;
    var invokeId = buffer[offset++];
    var sequencenumber = 0;
    var proposedWindowNumber = 0;
    if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) > 0) {
        sequencenumber = buffer[offset++];
        proposedWindowNumber = buffer[offset++];
    }
    var service = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        service: service,
        maxSegments: maxSegments,
        maxAdpu: maxAdpu,
        invokeId: invokeId,
        sequencenumber: sequencenumber,
        proposedWindowNumber: proposedWindowNumber
    };
};
module.exports.encodeUnconfirmedServiceRequest = function(buffer, type, service) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = service;
};
module.exports.decodeUnconfirmedServiceRequest = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var service = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        service: service
    };
};
module.exports.encodeSimpleAck = function(buffer, type, service, invokeId) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = invokeId;
    buffer.buffer[buffer.offset++] = service;
};
module.exports.decodeSimpleAck = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var invokeId = buffer[offset++];
    var service = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        service: service,
        invokeId: invokeId
    };
};
module.exports.encodeComplexAck = function(buffer, type, service, invokeId, sequencenumber, proposedWindowNumber) {
    var len = 3;
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = invokeId;
    if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) > 0) {
        buffer.buffer[buffer.offset++] = sequencenumber;
        buffer.buffer[buffer.offset++] = proposedWindowNumber;
        len += 2;
    }
    buffer.buffer[buffer.offset++] = service;
    return len;
};
module.exports.decodeComplexAck = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var invokeId = buffer[offset++];
    var sequencenumber = 0;
    var proposedWindowNumber = 0;
    if ((type & baEnum.PduTypes.SEGMENTED_MESSAGE) > 0) {
        sequencenumber = buffer[offset++];
        proposedWindowNumber = buffer[offset++];
    }
    var service = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        service: service,
        invokeId: invokeId,
        sequencenumber: sequencenumber,
        proposedWindowNumber: proposedWindowNumber
    };
};
module.exports.encodeSegmentAck = function(buffer, type, originalInvokeId, sequencenumber, actualWindowSize) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = originalInvokeId;
    buffer.buffer[buffer.offset++] = sequencenumber;
    buffer.buffer[buffer.offset++] = actualWindowSize;
};
module.exports.decodeSegmentAck = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var originalInvokeId = buffer[offset++];
    var sequencenumber = buffer[offset++];
    var actualWindowSize = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        originalInvokeId: originalInvokeId,
        sequencenumber: sequencenumber,
        actualWindowSize: actualWindowSize
    };
};
module.exports.encodeError = function(buffer, type, service, invokeId) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = invokeId;
    buffer.buffer[buffer.offset++] = service;
};
module.exports.decodeError = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var invokeId = buffer[offset++];
    var service = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        service: service,
        invokeId: invokeId
    };
};
module.exports.encodeAbort = function(buffer, type, invokeId, reason) {
    buffer.buffer[buffer.offset++] = type;
    buffer.buffer[buffer.offset++] = invokeId;
    buffer.buffer[buffer.offset++] = reason;
};
module.exports.decodeAbort = function(buffer, offset) {
    var orgOffset = offset;
    var type = buffer[offset++];
    var invokeId = buffer[offset++];
    var reason = buffer[offset++];
    return {
        len: offset - orgOffset,
        type: type,
        invokeId: invokeId,
        reason: reason
    };
};

},{"43b9651c673b04f1":"8k57N"}],"1Cgmo":[function(require,module,exports) {
var baEnum = require("20b2d3e627a3b523");
var BACNET_PROTOCOL_VERSION = 1;
var BacnetAddressTypes = {
    NONE: 0,
    IP: 1
};
module.exports.decodeFunction = function(buffer, offset) {
    if (buffer[offset + 0] !== BACNET_PROTOCOL_VERSION) return;
    return buffer[offset + 1];
};
module.exports.decode = function(buffer, offset) {
    var i;
    var adrLen;
    var orgOffset = offset;
    offset++;
    var funct = buffer[offset++];
    var destination;
    if ((funct & baEnum.NpduControls.DESTINATION_SPECIFIED) === baEnum.NpduControls.DESTINATION_SPECIFIED) {
        destination = {
            type: BacnetAddressTypes.NONE,
            net: buffer[offset++] << 8 | buffer[offset++] << 0
        };
        adrLen = buffer[offset++];
        if (adrLen > 0) {
            destination.adr = new Array(adrLen);
            for(i = 0; i < destination.adr.length; i++)destination.adr[i] = buffer[offset++];
        }
    }
    var source;
    if ((funct & baEnum.NpduControls.SOURCE_SPECIFIED) === baEnum.NpduControls.SOURCE_SPECIFIED) {
        source = {
            type: BacnetAddressTypes.NONE,
            net: buffer[offset++] << 8 | buffer[offset++] << 0
        };
        adrLen = buffer[offset++];
        if (adrLen > 0) {
            source.adr = new Array(adrLen);
            for(i = 0; i < source.adr.length; i++)source.adr[i] = buffer[offset++];
        }
    }
    var hopCount = 0;
    if ((funct & baEnum.NpduControls.DESTINATION_SPECIFIED) === baEnum.NpduControls.DESTINATION_SPECIFIED) hopCount = buffer[offset++];
    var networkMsgType = baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK;
    var vendorId = 0;
    if ((funct & baEnum.NpduControls.NETWORK_LAYER_MESSAGE) === baEnum.NpduControls.NETWORK_LAYER_MESSAGE) {
        networkMsgType = buffer[offset++];
        if (networkMsgType >= 0x80) vendorId = buffer[offset++] << 8 | buffer[offset++] << 0;
        else if (networkMsgType === baEnum.NetworkMessageTypes.NETWORK_MESSAGE_WHO_IS_ROUTER_TO_NETWORK) offset += 2;
    }
    if (buffer[orgOffset + 0] !== BACNET_PROTOCOL_VERSION) return;
    return {
        len: offset - orgOffset,
        funct: funct,
        destination: destination,
        source: source,
        hopCount: hopCount,
        networkMsgType: networkMsgType,
        vendorId: vendorId
    };
};
module.exports.encode = function(buffer, funct, destination, source, hopCount, networkMsgType, vendorId) {
    var i;
    var hasDestination = destination && destination.net > 0;
    var hasSource = source && source.net > 0 && source.net !== 0xFFFF;
    buffer.buffer[buffer.offset++] = BACNET_PROTOCOL_VERSION;
    buffer.buffer[buffer.offset++] = funct | (hasDestination ? baEnum.NpduControls.DESTINATION_SPECIFIED : 0) | (hasSource ? baEnum.NpduControls.SOURCE_SPECIFIED : 0);
    if (hasDestination) {
        buffer.buffer[buffer.offset++] = (destination.net & 0xFF00) >> 8;
        buffer.buffer[buffer.offset++] = (destination.net & 0x00FF) >> 0;
        if (destination.net === 0xFFFF) buffer.buffer[buffer.offset++] = 0;
        else {
            buffer.buffer[buffer.offset++] = destination.adr.length;
            if (destination.adr.length > 0) for(i = 0; i < destination.adr.length; i++)buffer.buffer[buffer.offset++] = destination.adr[i];
        }
    }
    if (hasSource) {
        buffer.buffer[buffer.offset++] = (source.net & 0xFF00) >> 8;
        buffer.buffer[buffer.offset++] = (source.net & 0x00FF) >> 0;
        if (destination.net === 0xFFFF) buffer.buffer[buffer.offset++] = 0;
        else {
            buffer.buffer[buffer.offset++] = destination.adr.length;
            if (destination.adr.length > 0) for(i = 0; i < destination.adr.length; i++)buffer.buffer[buffer.offset++] = destination.adr[i];
        }
    }
    if (hasDestination) buffer.buffer[buffer.offset++] = hopCount;
    if ((funct & baEnum.NpduControls.NETWORK_LAYER_MESSAGE) > 0) {
        buffer.buffer[buffer.offset++] = networkMsgType;
        if (networkMsgType >= 0x80) {
            buffer.buffer[buffer.offset++] = (vendorId & 0xFF00) >> 8;
            buffer.buffer[buffer.offset++] = (vendorId & 0x00FF) >> 0;
        }
    }
};

},{"20b2d3e627a3b523":"8k57N"}],"8ZMiB":[function(require,module,exports) {
var baEnum = require("8841444ae18a4af1");
var BVLL_TYPE_BACNET_IP = 0x81;
var BVLC_HEADER_LENGTH = 4;
module.exports.encode = function(buffer, func, msgLength) {
    buffer[0] = BVLL_TYPE_BACNET_IP;
    buffer[1] = func;
    buffer[2] = (msgLength & 0xFF00) >> 8;
    buffer[3] = (msgLength & 0x00FF) >> 0;
    return BVLC_HEADER_LENGTH;
};
module.exports.decode = function(buffer, offset) {
    var len;
    var func = buffer[1];
    var msgLength = buffer[2] << 8 | buffer[3] << 0;
    if (buffer[0] !== BVLL_TYPE_BACNET_IP || buffer.length !== msgLength) return;
    switch(func){
        case baEnum.BvlcFunctions.BVLC_RESULT:
        case baEnum.BvlcFunctions.BVLC_ORIGINAL_UNICAST_NPDU:
        case baEnum.BvlcFunctions.BVLC_ORIGINAL_BROADCAST_NPDU:
        case baEnum.BvlcFunctions.BVLC_DISTRIBUTE_BROADCAST_TO_NETWORK:
            len = 4;
            break;
        case baEnum.BvlcFunctions.BVLC_FORWARDED_NPDU:
            len = 10;
            break;
        case baEnum.BvlcFunctions.BVLC_REGISTER_FOREIGN_DEVICE:
        case baEnum.BvlcFunctions.BVLC_READ_FOREIGN_DEVICE_TABLE:
        case baEnum.BvlcFunctions.BVLC_DELETE_FOREIGN_DEVICE_TABLE_ENTRY:
        case baEnum.BvlcFunctions.BVLC_READ_BROADCAST_DIST_TABLE:
        case baEnum.BvlcFunctions.BVLC_WRITE_BROADCAST_DISTRIBUTION_TABLE:
            return;
        default:
            return;
    }
    return {
        len: len,
        func: func,
        msgLength: msgLength
    };
};

},{"8841444ae18a4af1":"8k57N"}],"jI5wX":[function(require,module,exports) {
var global = arguments[3];
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
exports.NetworkTreeService = void 0;
require("a4885f19b6f720d6");
const spinal_env_viewer_graph_service_1 = require("d7acaec1aa5a0ddf");
const constants_1 = require("6418ab1876395301");
const Constants_1 = require("1257064122a74cc4");
const _ = require("899b688d4b8537ea");
const spinal_core_connectorjs_type_1 = require("be54e8da642d405c");
// const spinalForgeViewer = new SpinalForgeViewer();
const g_win = typeof window === "undefined" ? global : window;
const bimObjectService = g_win.spinal.BimObjectService;
class NetworkTreeService {
    static createNetworkContext(name) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(name, constants_1.CONTEXT_TYPE);
    }
    static addNetwork(name, parentId, contextId) {
        let network = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name,
            type: constants_1.NETWORK_TYPE
        }, new spinal_core_connectorjs_type_1.Model());
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, network, contextId, constants_1.NETWORK_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
    }
    static addBimObject(contextId, parentId, bimObjectList) {
        const promises = [];
        for(let idx = 0; idx < bimObjectList.length; idx++){
            const { model, selection } = bimObjectList[idx];
            model.getBulkProperties(selection, {
                propFilter: [
                    "name"
                ]
            }, (el)=>{
                el.forEach((element)=>{
                    bimObjectService.createBIMObject(element.dbId, element.name, model).then((bimObject)=>{
                        let BimObjectId = bimObject.info ? bimObject.info.id.get() : bimObject.id.get();
                        promises.push(spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, BimObjectId, contextId, constants_1.NETWORK_BIMOJECT_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE));
                    });
                });
            });
        }
        return Promise.all(promises);
    }
    static getBimObjectsLinked(nodeId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            constants_1.NETWORK_BIMOJECT_RELATION
        ]);
    }
    static getNetworkTreeBimObjects(contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNodes(contextId, [
            constants_1.NETWORK_RELATION,
            constants_1.NETWORK_BIMOJECT_RELATION
        ], (node)=>{
            return node.getType().get() === Constants_1.BIM_OBJECT_TYPE;
        });
    }
    static getNetworkGroups(bimObjectId) {
        let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimObjectId);
        if (!realNode) return Promise.resolve([]);
        return realNode.getParents().then((parents)=>{
            parents = parents.filter((el)=>typeof el !== "undefined");
            let groups = parents.filter((el)=>{
                return el.getType().get() === constants_1.NETWORK_TYPE;
            });
            return groups.map((el)=>el.info.get());
        });
    }
    static getNetworkBimObjectParents(bimObjectId) {
        let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(bimObjectId);
        if (!realNode) return Promise.resolve([]);
        return realNode.getParents([
            constants_1.NETWORK_BIMOJECT_RELATION,
            constants_1.NETWORK_RELATION
        ]).then((argParents)=>{
            let promises = argParents.map((el)=>__awaiter(this, void 0, void 0, function*() {
                    if (el && el.getType().get() === Constants_1.BIM_OBJECT_TYPE) return el.info.get();
                    let p = yield this.getNetworkBimObjectParents(el ? el.info.id.get() : "");
                    return p;
                }));
            return Promise.all(promises).then((parents)=>{
                return _.flattenDeep(parents).filter((el)=>typeof el !== "undefined");
            });
        });
    }
}
exports.default = NetworkTreeService;
exports.NetworkTreeService = NetworkTreeService;

},{"a4885f19b6f720d6":"8YZk7","d7acaec1aa5a0ddf":"9n7zp","6418ab1876395301":"kDmsf","1257064122a74cc4":"f3Ny6","899b688d4b8537ea":"3qBDj","be54e8da642d405c":"fRH70"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-documentation.d8e24179.js.map
