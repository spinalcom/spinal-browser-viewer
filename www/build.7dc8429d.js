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
})({"5QjJf":[function(require,module,exports) {
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
const constants = require("a1f17de72e94b695");
const geoServiceV2_1 = require("a384287e2edce126");
const graphservice_1 = require("93b74599771f473a");
__exportStar(require("a1f17de72e94b695"), exports);
__exportStar(require("a384287e2edce126"), exports);
/**
 * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
 * @param {SpinalNodeRef} contextRef - The Context geographic
 * @param {SpinalNodeRef} parentNodeRef - The parent Node
 * @param {string} elementName - The AbstactElement Name
 * @returns {Promise<SpinalNode>}
 */ function addAbstractElement(contextRef, parentNodeRef, elementName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextRef.id.get());
        const parent = (0, graphservice_1.getRealNode)(parentNodeRef.id.get());
        const node = yield (0, geoServiceV2_1.addAbstractElement)(context, parent, elementName);
        (0, graphservice_1.addNodeGraphService)(node);
        return (0, graphservice_1.getInfoGraphService)(node.info.id.get());
    });
}
/**
 * @param {string} contextId - The Context geographic Id
 * @param {string} parentId - The parent Node Id
 * @param {string} buildingName - Building Name
 */ function addBuilding(contextId, parentId, buildingName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextId);
        const parent = (0, graphservice_1.getRealNode)(parentId);
        const node = yield (0, geoServiceV2_1.addBuilding)(context, parent, buildingName);
        (0, graphservice_1.addNodeGraphService)(node);
        return node;
    });
}
/**
 * @param {string} contextId - The Context geographic Id
 * @param {string} parentId - The parent Node Id
 * @param {string} floorName - the floor Name
 */ function addFloor(contextId, parentId, floorName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextId);
        const parent = (0, graphservice_1.getRealNode)(parentId);
        const node = yield (0, geoServiceV2_1.addFloor)(context, parent, floorName);
        (0, graphservice_1.addNodeGraphService)(node);
        return node;
    });
}
/**
 * @param {string} contextId - The Context geographic Id
 * @param {string} parentId - The parent Node Id
 * @param {string} siteName - the site Name
 */ function addSite(contextId, parentId, siteName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextId);
        const parent = (0, graphservice_1.getRealNode)(parentId);
        const node = yield (0, geoServiceV2_1.addSite)(context, parent, siteName);
        (0, graphservice_1.addNodeGraphService)(node);
        return node;
    });
}
/**
 * @param {string} contextId - The Context geographic Id
 * @param {string} parentId - The parent Node Id
 * @param {string} zoneName - Zone name
 */ function addZone(contextId, parentId, zoneName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextId);
        const parent = (0, graphservice_1.getRealNode)(parentId);
        const node = yield (0, geoServiceV2_1.addZone)(context, parent, zoneName);
        (0, graphservice_1.addNodeGraphService)(node);
        return node;
    });
}
/**
 * @param {string} contextId - The Context geographic
 * @param {string} parentId - The parent Node
 * @param {string} roomName - Room Name
 */ function addRoom(contextId, parentId, roomName) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = (0, graphservice_1.getRealNode)(contextId);
        const parent = (0, graphservice_1.getRealNode)(parentId);
        const node = yield (0, geoServiceV2_1.addRoom)(context, parent, roomName);
        (0, graphservice_1.addNodeGraphService)(node);
        return node;
    });
}
/**
 * it uses bimObject service to add all dbIds passed as parameters.
 * the parameter elements can be a simple or an array of the following element interface.
 * `{ dbId: number, name: string }`
 * @param {SpinalNodeRef} contextRef - The Context geographic
 * @param {SpinalNodeRef} parentRef - The parent Node
 * @param {TAddBimElementItem | TAddBimElementItem[]} elements
 */ function addBimElement(contextRef, parentRef, elements, model) {
    let context = (0, graphservice_1.getRealNode)(contextRef.id.get());
    let parent = (0, graphservice_1.getRealNode)(parentRef.id.get());
    return (0, geoServiceV2_1.addBimElement)(context, parent, elements, model);
}
function _getReferenceContextName(nodeId) {
    let node = (0, graphservice_1.getRealNode)(nodeId);
    return (0, geoServiceV2_1._getReferenceContextName)(node.info.type.get());
}
/**
 *
 * @param {string} nodeId
 */ function addToReferenceContext(nodeId) {
    return __awaiter(this, void 0, void 0, function*() {
        let node = (0, graphservice_1.getRealNode)(nodeId);
        return (0, geoServiceV2_1.addToReferenceContext)(node);
    });
}
/**
 *
 * @param {string} contextId
 */ function addContextToReference(contextId) {
    let context = (0, graphservice_1.getRealNode)(contextId);
    return (0, geoServiceV2_1.addContextToReference)(context);
}
const GeographicContext = {
    constants,
    getChildType: geoServiceV2_1.getChildType,
    createContext: geoServiceV2_1.createContext,
    addAbstractElement,
    addBuilding,
    addFloor,
    addSite,
    addZone,
    addRoom,
    addBimElement,
    _getReferenceContextName,
    addToReferenceContext,
    addContextToReference
};
exports.default = GeographicContext;

},{"a1f17de72e94b695":"eV0id","a384287e2edce126":"7z5SR","93b74599771f473a":"g4Phe"}],"eV0id":[function(require,module,exports) {
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

},{}],"7z5SR":[function(require,module,exports) {
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addContextToReference = exports.getOrCreateRefContext = exports.getOrCreateElemFromReferenceContext = exports.addToReferenceContext = exports._getReferenceContextName = exports.addBimElement = exports.addRoom = exports.addZone = exports.addSite = exports.addFloor = exports.addBuilding = exports.addAbstractElement = exports.createContext = exports.getChildType = void 0;
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
 */ const spinal_model_graph_1 = require("95f1af46fccaf2da");
const constants_1 = require("a7271251a1238e59");
const graphservice_1 = require("bde5ac4a2f021751");
const dicoContextRef = new Map();
/**
 * Returns the child type of the type given as parameter.
 * @param {string} parentType
 * @return {string} Child type
 */ function getChildType(parentType) {
    let parentTypeIndex = constants_1.GEOGRAPHIC_TYPES_ORDER.indexOf(parentType);
    if (parentTypeIndex === -1) return "";
    return constants_1.GEOGRAPHIC_TYPES_ORDER[parentTypeIndex + 1];
}
exports.getChildType = getChildType;
function createContext(contextName) {
    return __awaiter(this, void 0, void 0, function*() {
        if (typeof contextName !== "string") throw Error("contextName must be a string");
        const graph = (0, graphservice_1.getGraph)();
        const context = yield graph.getContext(contextName);
        if (typeof context !== "undefined") return Promise.resolve(context);
        const contextRes = new spinal_model_graph_1.SpinalContext(contextName, constants_1.CONTEXT_TYPE);
        yield graph.addContext(contextRes);
        (0, graphservice_1.addNodeGraphService)(contextRes);
        return contextRes;
    });
}
exports.createContext = createContext;
function addAbstractElement(context, parent, elementName, id) {
    return __awaiter(this, void 0, void 0, function*() {
        const parentType = parent.info.type.get();
        const childType = getChildType(parentType);
        if (!childType) throw Error(`${parentType} is not a valid type in geographic context`);
        return getOrCreateElemFromReferenceContext(childType, context, parent, elementName, id);
    });
}
exports.addAbstractElement = addAbstractElement;
function addBuilding(context, parent, elementName, id) {
    return getOrCreateElemFromReferenceContext(constants_1.BUILDING_TYPE, context, parent, elementName, id);
}
exports.addBuilding = addBuilding;
function addFloor(context, parent, elementName, id) {
    return getOrCreateElemFromReferenceContext(constants_1.FLOOR_TYPE, context, parent, elementName, id);
}
exports.addFloor = addFloor;
function addSite(context, parent, elementName, id) {
    return getOrCreateElemFromReferenceContext(constants_1.SITE_TYPE, context, parent, elementName, id);
}
exports.addSite = addSite;
function addZone(context, parent, elementName, id) {
    return getOrCreateElemFromReferenceContext(constants_1.ZONE_TYPE, context, parent, elementName, id);
}
exports.addZone = addZone;
function addRoom(context, parent, elementName, id) {
    return getOrCreateElemFromReferenceContext(constants_1.ROOM_TYPE, context, parent, elementName, id);
}
exports.addRoom = addRoom;
function addBimElement(context, parent, elements, model) {
    const elems = Array.isArray(elements) ? elements : [
        elements
    ];
    let contextId = context.info.id.get();
    let parentId = parent.info.id.get();
    (0, graphservice_1.addNodeGraphService)(context);
    (0, graphservice_1.addNodeGraphService)(parent);
    return Promise.all(elems.map((element)=>{
        return window.spinal.BimObjectService.addBIMObject(contextId, parentId, element.dbId, element.name, model);
    }));
}
exports.addBimElement = addBimElement;
function _getReferenceContextName(nodeType) {
    switch(nodeType){
        case constants_1.SITE_TYPE:
            return {
                name: constants_1.SITE_REFERENCE_CONTEXT,
                relation: constants_1.SITE_RELATION
            };
        case constants_1.BUILDING_TYPE:
            return {
                name: constants_1.BUILDING_REFERENCE_CONTEXT,
                relation: constants_1.BUILDING_RELATION
            };
        case constants_1.FLOOR_TYPE:
            return {
                name: constants_1.FLOOR_REFERENCE_CONTEXT,
                relation: constants_1.FLOOR_RELATION
            };
        case constants_1.ZONE_TYPE:
            return {
                name: constants_1.ZONE_REFERENCE_CONTEXT,
                relation: constants_1.ZONE_RELATION
            };
        case constants_1.ROOM_TYPE:
            return {
                name: constants_1.ROOM_REFERENCE_CONTEXT,
                relation: constants_1.ROOM_RELATION
            };
        default:
            return undefined;
    }
}
exports._getReferenceContextName = _getReferenceContextName;
function addToReferenceContext(node) {
    return __awaiter(this, void 0, void 0, function*() {
        const obj = _getReferenceContextName(node.info.type.get());
        if (typeof obj !== "undefined") {
            let context = yield getOrCreateRefContext(obj.name);
            yield context.addChild(node, obj.relation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
    });
}
exports.addToReferenceContext = addToReferenceContext;
function getOrCreateElemFromReferenceContext(nodeType, context, parent, elementName, id) {
    return __awaiter(this, void 0, void 0, function*() {
        const obj = _getReferenceContextName(nodeType);
        if (typeof obj === "undefined") throw new Error(`error unknonw node type : ${nodeType}`);
        const refContext = yield getOrCreateRefContext(obj.name);
        let node;
        if (typeof id !== "undefined") {
            const refNodes = yield refContext.getChildren(obj.relation);
            node = refNodes.find((itm)=>itm.info.id.get() === id);
        }
        if (!node) {
            node = new spinal_model_graph_1.SpinalNode(elementName, nodeType);
            if (typeof id !== "undefined") node.info.id.set(id);
            yield refContext.addChild(node, obj.relation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
        yield parent.addChildInContext(node, obj.relation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
        return node;
    });
}
exports.getOrCreateElemFromReferenceContext = getOrCreateElemFromReferenceContext;
function _getOrCreateRefContext(contextName) {
    return __asyncGenerator(this, arguments, function* _getOrCreateRefContext_1() {
        const graph = (0, graphservice_1.getGraph)();
        let context = yield __await(graph.getContext(contextName));
        if (!context) {
            context = new spinal_model_graph_1.SpinalContext(contextName, contextName.replace(".", ""));
            yield __await(graph.addContext(context));
        }
        (0, graphservice_1.addNodeGraphService)(context);
        while(true)yield yield __await(context);
    });
}
function getOrCreateRefContext(contextName) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!dicoContextRef.has(contextName)) {
            const gen = _getOrCreateRefContext(contextName);
            dicoContextRef.set(contextName, gen);
        }
        return (yield dicoContextRef.get(contextName).next()).value;
    });
}
exports.getOrCreateRefContext = getOrCreateRefContext;
function addContextToReference(context) {
    return __awaiter(this, void 0, void 0, function*() {
        if (typeof context !== "undefined") yield context.map(constants_1.GEOGRAPHIC_RELATIONS, (node)=>{
            (0, graphservice_1.addNodeGraphService)(node);
            return addToReferenceContext(node);
        });
    });
}
exports.addContextToReference = addContextToReference;

},{"95f1af46fccaf2da":"fkEXw","a7271251a1238e59":"eV0id","bde5ac4a2f021751":"g4Phe"}],"g4Phe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInfoGraphService = exports.getRealNode = exports.getGraph = exports.addNodeGraphService = void 0;
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
 */ const spinal_env_viewer_graph_service_1 = require("499f9e2dcf27ea4a");
function addNodeGraphService(node) {
    // @ts-ignore
    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
}
exports.addNodeGraphService = addNodeGraphService;
function getGraph() {
    return spinal_env_viewer_graph_service_1.SpinalGraphService.getGraph();
}
exports.getGraph = getGraph;
function getRealNode(nodeId) {
    return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
}
exports.getRealNode = getRealNode;
function getInfoGraphService(nodeId) {
    return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodeId);
}
exports.getInfoGraphService = getInfoGraphService;

},{"499f9e2dcf27ea4a":"9n7zp"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=build.7dc8429d.js.map
