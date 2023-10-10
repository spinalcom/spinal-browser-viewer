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
})({"avADC":[function(require,module,exports) {
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const SpatialManager_1 = require("b23bcd66c8ff2a7b");
const Config_1 = require("a95ea86ceb0a918");
const constants = __importStar(require("428d9de8fa9cd40a"));
__exportStar(require("f91826c020998ffd"), exports);
exports.default = {
    config: Config_1.config,
    constants,
    SpatialManager: SpatialManager_1.SpatialManager
};

},{"b23bcd66c8ff2a7b":"dBRHy","a95ea86ceb0a918":"ezRLD","428d9de8fa9cd40a":"b3pAR","f91826c020998ffd":"d1eUi"}],"dBRHy":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpatialManager = void 0;
const spinal_env_viewer_context_geographic_service_1 = __importDefault(require("eafe8c7d66f19d04"));
// import { serviceDocumentation } from 'spinal-env-viewer-plugin-documentation-service'
const createFctGetArchi_1 = __importDefault(require("150cd393dde38b13"));
const Config_1 = require("ce2a8362be834f83");
const Constant_1 = require("bfd096ddc6ba811c");
const spinal_env_viewer_graph_service_1 = require("444ebe1b6bd75114");
const SpatialConfig_1 = require("f1551a988ea6f69d");
const BuildingManager_1 = require("747befa79bfec559");
const FloorManager_1 = require("4131e00ccd1d2692");
const RoomManager_1 = require("2f474b4b4499d0f7");
const consumeBatch_1 = require("cb0aeb6023ce4444");
__exportStar(require("315a0029b7aaa9a3"), exports);
class SpatialManager {
    constructor(){
        this.modelArchiLib = new Map();
        //Todo remove
        this.initialized = this.init();
        window.getArchi = this.getArchiModel.bind(this);
    }
    init() {
        this.initialized = new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                yield spinal_env_viewer_graph_service_1.SpinalGraphService.waitForInitialization();
                this.spatialConfig = yield this.getSpatialConfig();
                if (typeof this.spatialConfig === "undefined") reject("SpatialConfiguration undefined");
                // let contextName = "spatial";
                // if (typeof this.spatialConfig.contextName !== "undefined") {
                //   // @ts-ignore
                //   contextName = this.spatialConfig.contextName.get()
                // }
                // this.context = await SpatialManager.getContext(contextName);
                // this.contextId = this.context.info.id.get();
                this.buildingManager = new BuildingManager_1.BuildingManager();
                this.floorManager = new FloorManager_1.FloorManager();
                this.roomManager = new RoomManager_1.RoomManager();
                resolve();
            }));
        return this.initialized;
    }
    generateContext(configName, model) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this.model = model;
                yield this.init();
                this.modelArchi = yield this.getArchiModel(model, configName);
                const config = this.spatialConfig.getConfig(configName);
                config.mod_attr("archi", this.modelArchi);
                let building = yield this.getBuilding(config);
                if (typeof building !== "undefined" && building.hasOwnProperty("id")) building = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(building.id.get());
                const context = yield this.getContextFromConfig(config);
                const contextId = context.getId().get();
                if (typeof building === "undefined") building = yield spinal_env_viewer_context_geographic_service_1.default.addBuilding(contextId, contextId, config.basic.buildingName.get());
                const prom = [];
                for(const key in this.modelArchi)if (this.modelArchi.hasOwnProperty(key) && Object.entries(this.modelArchi[key].children).length !== 0 && this.modelArchi[key].constructor === Object) {
                    const level = this.modelArchi[key];
                    const buildingName = this.floorManager.getPropertyValueByName(level.properties.properties, "name");
                    // prom.push(
                    yield this.createFloor(contextId, building.info.id.get(), buildingName, level, model);
                // )
                }
                yield Promise.all(prom);
            } catch (e) {
                console.error(e);
            }
            console.log("generateContext DONE");
        });
    }
    addRoomValueParam(target, other) {
        const area = this.roomManager.getPropertyValueByName(other.properties.properties, "Area");
        const perimeter = this.roomManager.getPropertyValueByName(other.properties.properties, "Perimeter");
        const volume = this.roomManager.getPropertyValueByName(other.properties.properties, "Volume");
        for (const targetParam of target){
            if (targetParam.name === "Area") targetParam.value = round(targetParam.value + area);
            if (targetParam.name === "Perimeter") targetParam.value = round(targetParam.value + perimeter);
            if (targetParam.name === "Volume") targetParam.value = round(targetParam.value + volume);
        }
    }
    addIfExist(array, room) {
        const roomNuber = this.roomManager.getPropertyValueByName(room.properties.properties, "Number");
        const target = array.find((e)=>{
            return this.roomManager.getPropertyValueByName(e.properties.properties, "Number") === roomNuber;
        });
        if (target) {
            this.addRoomValueParam(target.properties.properties, room);
            return false;
        }
        return true;
    }
    getRoomName(room) {
        const roomNbr = this.roomManager.getPropertyValueByName(room.properties.properties, "Number");
        const roomName = this.roomManager.getPropertyValueByName(room.properties.properties, "name");
        return `${roomNbr}-${roomName}`;
    }
    createRooms(rooms, contextId, floorId, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodeAttrNames = [
                "dbId",
                "externalId"
            ];
            const tmpRoom = [];
            for(const key in rooms){
                if (rooms.hasOwnProperty(key)) {
                    if (this.addIfExist(tmpRoom, rooms[key])) tmpRoom.push(rooms[key]);
                }
            }
            const proms = [];
            const resolveBatch = [];
            let turn = 0;
            let j = 0;
            while(j < tmpRoom.length){
                for(j = turn * Config_1.config.batchSize; j < (turn + 1) * Config_1.config.batchSize && j < tmpRoom.length; j++){
                    const room = tmpRoom[j];
                    proms.push(spinal_env_viewer_context_geographic_service_1.default.addRoom(contextId, floorId, this.getRoomName(room)));
                }
                const tmp = yield this.waitForFileSystem(proms);
                resolveBatch.push(...tmp);
                turn++;
            }
            for(let i = 0; i < resolveBatch.length; i++){
                const roomName = resolveBatch[i].info.name.get();
                const room = tmpRoom.find((r)=>{
                    return this.getRoomName(r) === roomName;
                });
                if (typeof room !== "undefined" && typeof room.children !== "undefined") {
                    const prom = [
                        this.roomManager.addAttribute(resolveBatch[i], room.properties.properties)
                    ];
                    for (const child of room.children){
                        const objName = this.roomManager.getPropertyValueByName(child.properties, "name");
                        prom.push(this.addReferenceObject(child.dbId, objName, model, resolveBatch[i], Constant_1.GEO_REFERENCE_ROOM_RELATION).catch((e)=>e));
                    }
                    yield Promise.all(prom);
                    // add or set attribut to  dbId & externalId
                    for (const nodeAttrName of nodeAttrNames){
                        if (typeof resolveBatch[i].info[nodeAttrName] === "undefined") resolveBatch[i].info.add_attr(nodeAttrName, room.properties[nodeAttrName]);
                        else if (resolveBatch[i].info[nodeAttrName].get() !== room.properties[nodeAttrName]) resolveBatch[i].info[nodeAttrName].set(room.properties[nodeAttrName]);
                    }
                }
            }
        });
    }
    /**
     * Waits for the nodes to be in the FileSystem.
     * @param {Array<Promise>} promises Array of promises containing the nodes
     * @returns {Promise<any>} An empty promise
     */ waitForFileSystem(promises) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodes = yield Promise.all(promises);
            let unResolvedNode = [];
            return new Promise((resolve)=>{
                const inter = setInterval(()=>{
                    unResolvedNode = nodes.filter((node)=>{
                        return window.FileSystem._objects[node._server_id] === undefined;
                    });
                    if (unResolvedNode.length === 0) {
                        clearInterval(inter);
                        resolve(nodes);
                    }
                }, 500);
            });
        });
    }
    addReferenceObject(dbId, name, model, targetNode, relationName = Constant_1.GEO_REFERENCE_RELATION) {
        return __awaiter(this, void 0, void 0, function*() {
            // @ts-ignore
            let bimObj = yield window.spinal.BimObjectService.getBIMObject(dbId, model);
            if (typeof bimObj === "undefined") // @ts-ignore
            bimObj = yield window.spinal.BimObjectService.createBIMObject(dbId, name, model);
            if (typeof bimObj.id !== "undefined") // @ts-ignore
            bimObj = window.spinal.spinalGraphService.nodes[bimObj.id.get()];
            const childrenIds = targetNode.getChildrenIds();
            const idx = childrenIds.indexOf(bimObj.info.id.get());
            if (idx !== -1) return bimObj;
            return targetNode.addChild(bimObj, relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    addRefStructureToLevel(levelId, structures, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const prom = [];
            const fct = (dbId, name, model, targetNode)=>{
                return this.addReferenceObject(dbId, name, model, targetNode).catch((e)=>e);
            };
            try {
                for(const key in structures)if (structures.hasOwnProperty(key)) {
                    const objName = this.roomManager.getPropertyValueByName(structures[key].properties.properties, "name");
                    prom.push(fct.bind(this, structures[key].properties.dbId, objName, model, // @ts-ignore
                    spinal.spinalGraphService.nodes[levelId]));
                }
                yield (0, consumeBatch_1.consumeBatch)(prom, 10);
            } catch (e) {
                console.error(e);
            }
        });
    }
    addRefStructureToRoom(levelId, structures, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const prom = [];
            const fct = (dbId, name, model, targetNode)=>{
                return this.addReferenceObject(dbId, name, model, targetNode, Constant_1.GEO_REFERENCE_ROOM_RELATION).catch((e)=>e);
            };
            try {
                for (const structure of structures){
                    let props;
                    let strucdbId;
                    if (typeof structure.properties.properties === "undefined") {
                        props = structure.properties;
                        // @ts-ignore
                        strucdbId = structure.dbId;
                    } else {
                        props = structure.properties.properties;
                        strucdbId = structure.properties.dbId;
                    }
                    const objName = this.roomManager.getPropertyValueByName(props, "name");
                    prom.push(fct.bind(this, strucdbId, objName, model, // @ts-ignore
                    spinal.spinalGraphService.nodes[levelId]));
                }
                yield (0, consumeBatch_1.consumeBatch)(prom, 10);
            } catch (e) {
                console.error(e);
            }
        });
    }
    createFloor(contextId, buildingId, name, level, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const floorProps = level.properties;
            const rooms = level.children;
            const structures = level.structures;
            try {
                const floor = yield spinal_env_viewer_context_geographic_service_1.default.addFloor(contextId, buildingId, name);
                floor.info.add_attr({
                    externalId: floorProps.externalId
                });
                yield this.floorManager.addAttribute(floor, floorProps.properties);
                yield this.createRooms(rooms, contextId, floor.info.id.get(), model);
                yield this.addRefStructureToLevel(floor.info.id.get(), structures, model);
            } catch (e) {
                console.error(e);
            }
        });
    }
    updateContext(configName, model) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this.model = model;
                yield this.init();
                this.modelArchi = yield this.getArchiModel(model, configName);
                const config = this.spatialConfig.getConfig(configName);
                const oldArchi = config.archi.get();
                let building = yield this.getBuilding(config);
                if (typeof building !== "undefined" && building.hasOwnProperty("id")) building = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(building.id.get());
                const cmpObject = this.compareArchi(oldArchi, this.modelArchi);
                const context = yield this.getContextFromConfig(config);
                const contextId = context.getId().get();
                for(const levelId in cmpObject.updated.levels)if (cmpObject.updated.levels.hasOwnProperty(levelId)) yield this.updateLevel(building, cmpObject.updated.levels[levelId], model);
                for(const roomId in cmpObject.updated.rooms)if (cmpObject.updated.rooms.hasOwnProperty(roomId)) {
                    const levelId = cmpObject.updated.rooms[roomId].levelId;
                    const room = cmpObject.updated.rooms[roomId].room;
                    yield this.updateRoom(building, levelId, room, model);
                }
                for(const levelId in cmpObject.new.rooms){
                    if (!cmpObject.new.rooms.hasOwnProperty(levelId)) continue;
                    const level = yield this.findLevel(building, levelId);
                    const proms = [];
                    for(let i = 0; i < cmpObject.new.rooms[levelId].length; i++){
                        const room = cmpObject.new.rooms[levelId][i];
                        proms.push(this.updateContextCreateRoom(contextId, room, level, model));
                    }
                    yield Promise.all(proms).then(console.log);
                }
                // for (let levelId in cmpObject.deleted.levels) {
                //   if (cmpObject.deleted.levels.hasOwnProperty(levelId)) {
                //   }
                // }
                for(const roomId in cmpObject.deleted.rooms)if (cmpObject.deleted.rooms.hasOwnProperty(roomId)) {
                    const levelId = cmpObject.deleted.rooms[roomId].levelId;
                    const room = cmpObject.deleted.rooms[roomId].room;
                    const levelRef = yield this.findLevel(building, levelId);
                    const roomRef = yield this.findRoom(building, levelId, room.properties.externalId);
                    yield this.removeRoom(levelRef, roomRef);
                }
                config.mod_attr("archi", this.modelArchi);
            } catch (e) {
                console.error(e);
            }
            console.log("generateContext DONE");
        });
    }
    updateContextCreateRoom(contextId, room, level, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodeAttrNames = [
                "dbId",
                "externalId"
            ];
            const roomRealNode = yield spinal_env_viewer_context_geographic_service_1.default.addRoom(contextId, level.id.get(), this.roomManager.getPropertyValueByName(room.properties.properties, "name"));
            if (typeof room !== "undefined" && typeof room.children !== "undefined") {
                const prom = [
                    this.roomManager.addAttribute(roomRealNode, room.properties.properties)
                ];
                for (const child of room.children){
                    const objName = this.roomManager.getPropertyValueByName(child.properties, "name");
                    prom.push(this.addReferenceObject(child.dbId, objName, model, roomRealNode, Constant_1.GEO_REFERENCE_ROOM_RELATION).catch((e)=>e));
                }
                yield Promise.all(prom);
                // add or set attribut to  dbId & externalId
                for (const nodeAttrName of nodeAttrNames){
                    if (typeof roomRealNode.info[nodeAttrName] === "undefined") roomRealNode.info.add_attr(nodeAttrName, room.properties[nodeAttrName]);
                    else if (roomRealNode.info[nodeAttrName].get() !== room.properties[nodeAttrName]) roomRealNode.info[nodeAttrName].set(room.properties[nodeAttrName]);
                }
            }
        });
    }
    /**
     * remove $room from the floor, the .room context and at it to the invalid
     * context
     * @param room
     */ removeRoom(levelRef, roomRef) {
        return __awaiter(this, void 0, void 0, function*() {
            const room = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(roomRef.id.get());
            const floor = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(levelRef.id.get());
            yield floor.removeChild(room, Constant_1.GEO_ROOM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE); // remove the room from the floor
            const roomReferenceContext = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_REFERENCE_CONTEXT);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(roomReferenceContext.info.id.get(), room.info.id.get(), Constant_1.GEO_ROOM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this.addToInvalidContext(room.info.id.get());
        });
    }
    addToInvalidContext(id) {
        return __awaiter(this, void 0, void 0, function*() {
            let context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(".invalid");
            if (typeof context === "undefined") context = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(".invalid", "invalid");
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(context.info.id.get(), id, "Invalid", spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    getFloorFromRoom(room) {
        return __awaiter(this, void 0, void 0, function*() {
            console.warn("SpatialManager.getFloorFromRoom doesn't work", room);
        // let parents = await room.getParents();
        // for (let i = 0; i < parents.length; i++) {
        //   if (parents[i].info.type.get() === "geographicFloor")
        //     return parents[i];
        // }
        // return undefined;
        });
    }
    updateLevel(building, level, model) {
        return __awaiter(this, void 0, void 0, function*() {
            // @ts-ignore
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(building);
            const levelNodeRef = yield this.findLevel(building, level.properties.externalId);
            const levelId = levelNodeRef.id.get();
            const levelRealNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(levelId);
            yield this.floorManager.addAttribute(levelRealNode, level.properties.properties);
            yield this.addRefStructureToLevel(levelId, level.structures, model);
        });
    }
    updateRoom(building, levelExternId, room, model) {
        return __awaiter(this, void 0, void 0, function*() {
            // @ts-ignore
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(building);
            const roomNodeRef = yield this.findRoom(building, levelExternId, room.properties.externalId);
            const roomId = roomNodeRef.id.get();
            const roomRealNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(roomId);
            yield this.roomManager.addAttribute(roomRealNode, room.properties.properties);
            if (typeof roomRealNode.info.dbId !== "undefined") roomRealNode.info.dbId.set(room.properties.dbId);
            else roomRealNode.info.add_attr("dbId", room.properties.dbId);
            // missing check refObject
            yield this.addRefStructureToRoom(roomId, room.children, model);
        });
    }
    // private async updateRoom(externalId: string, room: Room) {
    //   this.roomManager
    //     .getByExternalId(externalId,
    //       SpinalGraphService.getContext(
    //         GeographicService.constants.ROOM_REFERENCE_CONTEXT).info.id.get(), GEO_ROOM_RELATION)
    //     .then(r => {
    //       this.roomManager.addAttribute(SpinalGraphService.getRealNode(r.id.get()), room.properties.properties);
    //       // @ts-ignore
    //       SpinalGraphService.modifyNode(r.id.get(), { dbId: room.properties.dbId });
    //     })
    //   // missing check refObject
    // }
    createRoomObj(levelId, room) {
        return {
            levelId,
            room
        };
    }
    compareArchi(oldArchi, newArchi) {
        const cmpObj = {
            deleted: {
                levels: {},
                rooms: {}
            },
            updated: {
                levels: {},
                rooms: {}
            },
            new: {
                levels: {},
                rooms: {}
            }
        };
        for(const levelId in oldArchi){
            const oldLevel = oldArchi[levelId];
            if (newArchi.hasOwnProperty(levelId)) {
                // level exist in old and new => level update
                const newArchiLvl = newArchi[levelId];
                for(const roomExternId in oldLevel.children)if (oldLevel.children.hasOwnProperty(roomExternId) && typeof oldLevel.children[roomExternId].children !== "undefined") {
                    // exist in old and have children
                    cmpObj.updated.levels[levelId] = newArchiLvl;
                    const levelExternalId = newArchiLvl.properties.externalId;
                    if (newArchiLvl.children[roomExternId] && newArchiLvl.children[roomExternId].children) cmpObj.updated.rooms[roomExternId] = this.createRoomObj(levelExternalId, newArchiLvl.children[roomExternId]);
                    else cmpObj.deleted.rooms[roomExternId] = this.createRoomObj(levelExternalId, oldLevel.children[roomExternId]);
                }
            } else {
                //delete floor
                cmpObj.deleted.levels[levelId] = oldArchi[levelId];
                for(const roomExternId in oldLevel.children)//delete all rooms
                if (oldLevel.children.hasOwnProperty(roomExternId)) {
                    const levelExternalId = oldLevel.properties.externalId;
                    cmpObj.deleted.rooms[roomExternId] = this.createRoomObj(levelExternalId, oldArchi[levelId].children[roomExternId]);
                }
            }
        }
        for(const levelId in newArchi){
            if (!newArchi.hasOwnProperty(levelId)) continue;
            const newLevel = newArchi[levelId];
            if (oldArchi.hasOwnProperty(levelId)) {
                //level already exist
                for(const roomExternal in newLevel.children)if (newLevel.children.hasOwnProperty(roomExternal) && typeof newLevel.children[roomExternal].children !== "undefined" && (!oldArchi[levelId].children.hasOwnProperty(roomExternal) || typeof oldArchi[levelId].children[roomExternal].children === "undefined")) {
                    const lvlExternId = newLevel.properties.externalId;
                    if (typeof cmpObj.new.rooms[lvlExternId] === "undefined") cmpObj.new.rooms[lvlExternId] = [];
                    cmpObj.new.rooms[lvlExternId].push(newLevel.children[roomExternal]);
                }
            } else {
                //add level and rooms to new
                cmpObj.new.levels[levelId] = newLevel;
                for(const roomExternal in newLevel.children)if (newLevel.children.hasOwnProperty(roomExternal) && typeof newLevel.children[levelId].children !== "undefined") {
                    //add room if it has a floor
                    const lvlExternId = newLevel.properties.externalId;
                    if (typeof cmpObj.new.rooms[lvlExternId] === "undefined") cmpObj.new.rooms[lvlExternId] = [];
                    cmpObj.new.rooms[lvlExternId].push(newLevel.children[roomExternal]);
                }
            }
        }
        return cmpObj;
    }
    static getContext(contextName) {
        return __awaiter(this, void 0, void 0, function*() {
            let context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(contextName);
            if (typeof context === "undefined" || context === null) context = yield spinal_env_viewer_context_geographic_service_1.default.createContext(contextName);
            return context;
        });
    }
    getSpatialConfig() {
        return __awaiter(this, void 0, void 0, function*() {
            let context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(".config");
            if (typeof context === "undefined") context = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(".config", "system configuration", undefined);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(context.info.id.get(), [
                "hasConfig"
            ]).then((children)=>__awaiter(this, void 0, void 0, function*() {
                    let config;
                    if (typeof children !== "undefined") {
                        for(let i = 0; i < children.length; i++)if (children[i].type.get() === "SpatialConfig") config = children[i];
                    }
                    if (typeof config === "undefined") {
                        // create default config
                        config = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                            name: "spatial config",
                            type: "SpatialConfig"
                        }, new SpatialConfig_1.SpatialConfig());
                        yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(context.info.id.get(), config, "hasConfig", spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                        config = spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(config);
                    }
                    return config.element.load();
                }));
        });
    }
    /**
     * use propertyDb to create a representation of the architecture of the model
     * @private
     * @param {Model} model
     * @returns {Promise<ModelArchi>}
     * @memberof SpatialManager
     */ getArchiModel(model, configName) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.modelArchiLib.has(model)) return this.modelArchiLib.get(model);
            //TODO une fois sur la version 7 du viewer la fonction
            // executerUserFonction permetera de passer des parametre a userFunction
            this.spatialConfig = yield this.getSpatialConfig();
            // let objectProperties = this.spatialConfig.objectProperties.get();
            // let floorAttrn = this.spatialConfig.revitAttribute.floors.attrName.get();
            const config = this.spatialConfig.getConfig(configName);
            if (!config) throw new Error("No Config Name found");
            const fct = (0, createFctGetArchi_1.default)(config.get());
            const modelArchi = yield model.getPropertyDb()// @ts-ignore
            .executeUserFunction(fct);
            console.log("modelArchi", modelArchi);
            this.modelArchiLib.set(model, modelArchi);
            return modelArchi;
        });
    }
    findLevel(building, externalId) {
        return this.floorManager.getByExternalId(externalId, building.info.id.get(), Constant_1.GEO_FLOOR_RELATION);
    }
    findRoom(building, floorExternId, roomExternId) {
        return __awaiter(this, void 0, void 0, function*() {
            const level = yield this.findLevel(building, floorExternId);
            return this.roomManager.getByExternalId(roomExternId, level.id.get(), Constant_1.GEO_ROOM_RELATION);
        });
    }
    getContextFromConfig(config) {
        return __awaiter(this, void 0, void 0, function*() {
            let context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(config.contextId.get());
            if (typeof context === "undefined" || context === null) context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(config.contextName.get());
            if (typeof context === "undefined" || context === null) context = yield spinal_env_viewer_context_geographic_service_1.default.createContext(config.contextName.get());
            config.contextId.set(context.info.id.get());
            return context;
        });
    }
    getBuilding(config) {
        return __awaiter(this, void 0, void 0, function*() {
            const context = yield this.getContextFromConfig(config);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(context.info.id.get(), [
                Constant_1.GEO_BUILDING_RELATION
            ]).then((children)=>{
                if (typeof children === "undefined") return undefined;
                for(let i = 0; i < children.length; i++){
                    const building = children[i];
                    if (building.name.get() === config.basic.buildingName.get()) return building;
                }
                return undefined;
            });
        });
    }
    getFloorFinish(configName, model) {
        return __awaiter(this, void 0, void 0, function*() {
            this.modelArchi = yield this.getArchiModel(model, configName);
            const floorFinish = [];
            for(const key in this.modelArchi)if (this.modelArchi.hasOwnProperty(key)) {
                for(const roomId in this.modelArchi[key].children)if (this.modelArchi[key].children.hasOwnProperty(roomId)) {
                    const room = this.modelArchi[key].children[roomId];
                    if (typeof room.children !== "undefined") floorFinish.push(...room.children);
                }
            }
            return floorFinish;
        });
    }
    getRoomIdFromDbId(externalId) {
        return __awaiter(this, void 0, void 0, function*() {
            const roomReferenceContext = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_REFERENCE_CONTEXT);
            const rooms = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(roomReferenceContext.info.id.get(), [
                Constant_1.GEO_ROOM_RELATION
            ]);
            for(let i = 0; i < rooms.length; i++){
                if (rooms[i].externalId.get() === externalId) return rooms[i].id.get();
            }
        });
    }
    getRoomIdFromFloorFinish(floorId) {
        for(const key in this.modelArchi)if (this.modelArchi.hasOwnProperty(key)) {
            for(const roomId in this.modelArchi[key].children)if (this.modelArchi[key].children.hasOwnProperty(roomId)) {
                const room = this.modelArchi[key].children[roomId];
                if (typeof room.children !== "undefined") for (const roomChild of room.children){
                    if (roomChild.properties.dbId === floorId) return room.properties.externalId;
                }
            }
        }
    }
    getFloorFinishId(configName, model) {
        return __awaiter(this, void 0, void 0, function*() {
            const floors = yield this.getFloorFinish(configName, model);
            return floors.map((floor)=>floor.properties.dbId);
        });
    }
}
exports.SpatialManager = SpatialManager;
function round(x, digits = 2) {
    return parseFloat(x.toFixed(digits));
}

},{"eafe8c7d66f19d04":"5QjJf","150cd393dde38b13":"aI5bI","ce2a8362be834f83":"ezRLD","bfd096ddc6ba811c":"b3pAR","444ebe1b6bd75114":"9n7zp","f1551a988ea6f69d":"kJVYs","747befa79bfec559":"6Ox22","4131e00ccd1d2692":"2e3b8","2f474b4b4499d0f7":"fjV97","cb0aeb6023ce4444":"2wzJt","315a0029b7aaa9a3":"1ialy"}],"aI5bI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
// export interface ArchiSelectUser {
//   key: RegExp;
//   value: RegExp;
//   isCat?: boolean;
// }
// export interface ConfigGetArchiUser {
//   basic: Basic;
//   levelSelect: ArchiSelectUser[];
//   roomSelect: ArchiSelectUser[];
//   structureSelect: ArchiSelectUser[];
//   floorSelect?: ArchiSelectUser[];
// }
// const testCfg = {
//   basic: { "addLevel": false, "buildingName": "64646", "selectedModel": "DEI (1).rvt" },
//   levelSelect: [{ "key": /^Category$/, "value": /^Revit Level$/, "isCat": true }],
//   roomSelect: [{ "key": /^Category$/, "value": /^Revit Pièces$/, "isCat": true }],
//   structureSelect: [
//     { "key": /^Category$/, "value": /^Revit Murs$/, "isCat": true },
//     { "key": /^Category$/, "value": /^Revit Portes$/, "isCat": true },
//     { "key": /^Category$/, "value": /^Revit Sols$/, "isCat": true },
//     { "key": /^Category$/, "value": /^Revit Garde-corps$/, "isCat": true },
//     { "key": /^Category$/, "value": /^Revit Fenêtres$/, "isCat": true }
//   ]
// }
// interface AttrItem { id: number, attrDef: any, d: ArchiSelectUser }
function getArchiSelectStr(archiSelect) {
    if (!archiSelect) return "[]";
    const data = [
        "["
    ];
    for (const d of archiSelect){
        let isCatStr = "";
        if (d.isCat === true) isCatStr = `, isCat: true`;
        const str = `{ key: ${d.key.toString()}, value: ${d.value.toString()}${isCatStr}},`;
        data.push(str);
    }
    data.push("]");
    return data.join("");
}
function createFctGetArchi(config) {
    const levelStr = getArchiSelectStr(config.levelSelect);
    const roomStr = getArchiSelectStr(config.roomSelect);
    const structureStr = getArchiSelectStr(config.structureSelect);
    const floorStr = getArchiSelectStr(config.floorSelect);
    let FLOOR_ROOM_NUMBER_ATTR_NAME = "Number";
    let FLOOR_ROOM_NAME_ATTR_NAME = "";
    let FLOOR_LEVEL_NAME_ATTR_NAME = "";
    if (config.floorRoomNbr) FLOOR_ROOM_NUMBER_ATTR_NAME = config.floorRoomNbr; // 'Number
    if (config.floorRoomName) FLOOR_ROOM_NAME_ATTR_NAME = config.floorRoomName; // 'Local'
    if (config.floorLevelName) FLOOR_LEVEL_NAME_ATTR_NAME = config.floorLevelName; // 'Etage'
    const propsToGet = [
        "name",
        "elevation",
        "area",
        "volume",
        "perimeter",
        "stype",
        "roomid",
        "number"
    ];
    if (FLOOR_ROOM_NUMBER_ATTR_NAME) propsToGet.push(FLOOR_ROOM_NUMBER_ATTR_NAME.toLowerCase());
    if (FLOOR_ROOM_NAME_ATTR_NAME) propsToGet.push(FLOOR_ROOM_NAME_ATTR_NAME.toLowerCase());
    if (FLOOR_LEVEL_NAME_ATTR_NAME) propsToGet.push(FLOOR_LEVEL_NAME_ATTR_NAME.toLowerCase());
    let useFloor = false;
    if (Array.isArray(config.floorSelect) && config.floorSelect.length > 0) useFloor = true;
    const fct = `function userFunction(pdb) {
    // TEST
    // let useFloor = false;
    // const levelSelect = testCfg.levelSelect;
    // const roomSelect = testCfg.roomSelect;
    // const structureSelect = testCfg.structureSelect;
    // const propsNames = propsToGet
    // END TEST

    let useFloor = ${useFloor};
    const levelSelect = ${levelStr};
    const roomSelect = ${roomStr};
    const structureSelect = ${structureStr};
    const floorSelect = ${floorStr};
    const propsNames = ${JSON.stringify(propsToGet)};

    const FLOOR_ROOM_NUMBER_ATTR_NAME = "${FLOOR_ROOM_NUMBER_ATTR_NAME}";
    const FLOOR_ROOM_NAME_ATTR_NAME = "${FLOOR_ROOM_NAME_ATTR_NAME}";
    const FLOOR_LEVEL_NAME_ATTR_NAME = "${FLOOR_LEVEL_NAME_ATTR_NAME}";
    const attrLevel = [];
    const attrRoom = [];
    const attrStructure = [];
    const attrFloor = [];
    const props = [];
    function round(x, digits = 2) {
      return parseFloat(x.toFixed(digits))
    }

    function pushSelect(data, attrDef, idx, res) {
      for (const d of data) {
        if (
          (attrDef.displayName && d.key.test(attrDef.displayName)) ||
          (!attrDef.displayName && d.key.test(attrDef.name)) ||
          (d.isCat === true && attrDef.category === '__category__' && d.key.test(attrDef.name))
        ) {
          const item = res.find((item) => item.id === idx);
          if (item) item.d.push(d)
          else {
            res.push({
              id: idx,
              attrDef, d: [d]
            });
          }
        }
      }
    }

    function attrIsValid(attrs, attrId, value) {
      const attr = attrs.find((item) => item.id === attrId);
      if (!attr) return null;
      for (const d of attr.d) {
        if (d.value.test(value)) {
          return attr;
        }
      }
    }

    pdb.enumAttributes(function (idx, attrDef) {
      if (propsNames.includes(attrDef.name.toLowerCase()) ||
        (attrDef.name === 'Level' && attrDef.category === '__internalref__')) {
        props.push({ attrId: idx, attrDef })
      }
      pushSelect(levelSelect, attrDef, idx, attrLevel)
      pushSelect(roomSelect, attrDef, idx, attrRoom)
      pushSelect(structureSelect, attrDef, idx, attrStructure)
      pushSelect(floorSelect, attrDef, idx, attrFloor)
    });
    let dbIds = { floors: [], rooms: [], levels: [], structures: [] };
    const idExternal = {};

    let externalIdMapping = pdb.getExternalIdMapping();
    for (let key in externalIdMapping) {
      if (externalIdMapping.hasOwnProperty(key)) {
        idExternal[externalIdMapping[key]] = key;
      }
    }
    pdb.enumObjects(function (dbId) {
      const properties = [];
      let array = undefined;
      pdb.enumObjectProperties(dbId, function (attrId, valId) {
        let value = pdb.getAttrValue(attrId, valId);
        if (typeof value === "number") value = round(value);
        let prop = props.find(prop => prop.attrId === attrId)

        const levelProps = attrIsValid(attrLevel, attrId, value);
        const roomProps = attrIsValid(attrRoom, attrId, value);
        const structureProps = attrIsValid(attrStructure, attrId, value);
        const floorProps = attrIsValid(attrFloor, attrId, value);
        if (levelProps) {
          prop = levelProps;
          array = dbIds.levels;
        }
        if (roomProps) {
          prop = roomProps;
          array = dbIds.rooms;
        }
        if (floorProps) {
          prop = floorProps;
          array = dbIds.floors;
        }
        if (structureProps) {
          prop = structureProps;
          array = dbIds.structures;
        }

        if (prop) {
          const attrNameLowerCase = prop.attrDef.name.toLowerCase()
          let found =  false;
          for (const propertie of properties) {
            if (propertie.name.toLowerCase() === attrNameLowerCase && propertie.category !== '__internalref__') {
              if (propertie.value !== value) {
                propertie.oldValue = propertie.value
                propertie.value = value
              }
              found = true
              break;
            }
          }
          if (!found) {
            const res = { name: attrNameLowerCase, value }
            if (prop.attrDef.dataTypeContext)
              Object.assign(res, { dataTypeContext: prop.attrDef.dataTypeContext });
            if (attrNameLowerCase === 'level' && prop.attrDef.category === '__internalref__')
              Object.assign(res, { category: prop.attrDef.category });
            properties.push(res);
          }
        }


      });
      if (Array.isArray(array))
        array.push({ dbId, properties, externalId: idExternal[dbId] })

    });
    if (useFloor === false) dbIds.floors = dbIds.rooms
    function createArchitectureModel(object) {
      const archiModel = {};

      function getAttrValue(obj, attrName, attrCat) {
        const props = obj.properties;
        const attrNameLowerCase = attrName.toLowerCase()
        for (let i = 0; i < props.length; i++) {
          if (props[i].name.toLowerCase() === attrNameLowerCase) {
            if (attrCat && props[i].category !== attrCat) {
              continue;
            }
            return props[i].value
          }
        }
      }
      function setAttrValue(obj, attrName, value) {
        const props = obj.properties;
        const attrNameLowerCase = attrName.toLowerCase()
        for (let i = 0; i < props.length; i++) {
          if (props[i].name.toLowerCase() === attrNameLowerCase) {
            if (props[i].value === value) return;
            props[i].oldValue = props[i].value
            props[i].value = value
            return;
          }
        }
      }

      function getLevelByDbId(dbId) {
        for (const level of object.levels) {
          if (level.dbId === dbId) {
            return level
          }
        }
      }

      function findFloor(room, data) {
        const leveldbId = getAttrValue(room, "level", '__internalref__');
        const roomNumber = getAttrValue(room, "number").toString()
        const res = [];

        for (const floor of data.floors) {
          const floorRoomId = getAttrValue(floor, "roomid");
          const levelItemdbId = getAttrValue(floor, "level", '__internalref__');
          const floorRoomNumber = getAttrValue(floor, FLOOR_ROOM_NUMBER_ATTR_NAME)
          if (floorRoomId === room.externalId ||
            (leveldbId === levelItemdbId &&
            floorRoomNumber !== undefined &&
            roomNumber == floorRoomNumber.toString())
          ) {
            if (FLOOR_ROOM_NAME_ATTR_NAME) {
              const floorRoomName = getAttrValue(floor, FLOOR_ROOM_NAME_ATTR_NAME)
              if (floorRoomName)
                setAttrValue(room, 'name', floorRoomName)
            }
            if (FLOOR_LEVEL_NAME_ATTR_NAME) {
              const floorName = getAttrValue(floor, FLOOR_LEVEL_NAME_ATTR_NAME)
              if (floorName)
                setAttrValue(getLevelByDbId(leveldbId), 'name', floorName)
            }
            res.push(floor);
          }
        }
        return res;
      }


      for (let i = 0; i < object.levels.length; i++) {
        const obj = object.levels[i];
        archiModel[obj.dbId] = { properties: obj, children: {}, structures: {} }
      }
      for (let i = 0; i < object.rooms.length; i++) {
        const obj = object.rooms[i];
        const lvl = getAttrValue(obj, 'level', '__internalref__'); // check here;
        if (lvl) {
          archiModel[lvl].children[obj.externalId] = {
            properties: obj,
            children: findFloor(obj, object)
          }
        }
      }
      for (let i = 0; i < object.structures.length; i++) {
        const obj = object.structures[i];
        const lvl = getAttrValue(obj, 'level', '__internalref__');
        if (archiModel[lvl]) {
          archiModel[lvl].structures[obj.externalId] = {
            properties: obj,
          }
        }
      }
      return archiModel;
    }
    console.log("dbIds =>", dbIds);
    return createArchitectureModel(dbIds)
  }`;
    return fct;
}
exports.default = createFctGetArchi; // (<any>window).testCreateFctGetArchi = async function () {
 //   const cfg = {
 //     "configName": "default",
 //     "basic": { "addLevel": false, "buildingName": "Parallèle", "selectedModel": "enedis.rvt" },
 //     "levelSelect": [{ "key": "/^Category$/", "value": "/^Revit Level$/", "isCat": true }],
 //     "roomSelect": [{ "key": "/^Category$/", "value": "/^Revit Pièces$/", "isCat": true }],
 //     "structureSelect": [
 //       { "key": "/^Category$/", "value": "/^Revit Murs$/", "isCat": true },
 //       { "key": "/^Category$/", "value": "/^Revit Sols$/", "isCat": true },
 //       { "key": "/^Category$/", "value": "/^Revit Portes$/", "isCat": true },
 //       { "key": "/^Category$/", "value": "/^Revit Fenêtres$/", "isCat": true }],
 //     "floorSelect": [{ "key": "/^SCtype$/", "value": "/^Floor_finish$/" }],
 //     "floorRoomNbr": "Number"
 //   }
 //   const fct = createFctGetArchi(cfg)
 //   const modelArchi = await (<any>window).NOP_VIEWER.model.getPropertyDb().executeUserFunction(fct);
 //   console.log(modelArchi);
 // }
 // (<any>window).test = async function () {
 //   const cfg = {
 //     "configName": "default",
 //     "contextName": "spatial",
 //     "contextId": "SpinalContext-538f2dd5-71d1-4a9a-e260-5e18de281e49-17163c0c1d0",
 //     "basic": { "addLevel": false, "buildingName": "azerty", "selectedModel": "DEI (1).rvt" },
 //     "levelSelect": [{ "key": "/^Category$/", "value": "/^Revit Level$/", "isCat": true }],
 //     "roomSelect": [{ "key": "/^Category$/", "value": "/^Revit Pièces$/", "isCat": true }],
 //     "structureSelect": [{ "key": "/^Category$/", "value": "/^Revit Murs$/", "isCat": true },
 //     { "key": "/^Category$/", "value": "/^Revit Portes$/", "isCat": true },
 //     { "key": "/^Category$/", "value": "/^Revit Sols$/", "isCat": true },
 //     { "key": "/^Category$/", "value": "/^Revit Garde-corps$/", "isCat": true },
 //     { "key": "/^Category$/", "value": "/^Revit Fenêtres$/", "isCat": true }],
 //     "floorRoomNbr": "Number",
 //   }
 //   const fct = createFctGetArchi(cfg)
 //   function userFunction(pdb) {
 //     // TEST
 //     // let useFloor = false;
 //     // const levelSelect = testCfg.levelSelect;
 //     // const roomSelect = testCfg.roomSelect;
 //     // const structureSelect = testCfg.structureSelect;
 //     // const propsNames = propsToGet
 //     // END TEST
 //     let useFloor = false;
 //     const levelSelect = [{ key: /^Category$/, value: /^Revit Level$/, isCat: true },];
 //     const roomSelect = [{ key: /^Category$/, value: /^Revit Pièces$/, isCat: true },];
 //     const structureSelect = [{ key: /^Category$/, value: /^Revit Murs$/, isCat: true }, { key: /^Category$/, value: /^Revit Portes$/, isCat: true }, { key: /^Category$/, value: /^Revit Sols$/, isCat: true }, { key: /^Category$/, value: /^Revit Garde-corps$/, isCat: true }, { key: /^Category$/, value: /^Revit Fenêtres$/, isCat: true },];
 //     const floorSelect = [];
 //     const propsNames = ["name", "elevation", "area", "volume", "perimeter", "stype", "roomid", "number", "Number"];
 //     const FLOOR_ROOM_NUMBER_ATTR_NAME = "Number";
 //     const FLOOR_ROOM_NAME_ATTR_NAME = "";
 //     const FLOOR_LEVEL_NAME_ATTR_NAME = "";
 //     const attrLevel = [];
 //     const attrRoom = [];
 //     const attrStructure = [];
 //     const attrFloor = [];
 //     const props = [];
 //     function round(x, digits = 2) {
 //       return parseFloat(x.toFixed(digits))
 //     }
 //     function pushSelect(data, attrDef, idx, res) {
 //       for (const d of data) {
 //         if (
 //           d.key.test(attrDef.displayName) ||
 //           (d.isCat === true && attrDef.category === '__category__' && d.key.test(attrDef.name))
 //         ) {
 //           const item = res.find((item) => item.id === idx);
 //           if (item) item.d.push(d)
 //           else {
 //             res.push({
 //               id: idx,
 //               attrDef, d: [d]
 //             });
 //           }
 //         }
 //       }
 //     }
 //     function attrIsValid(attrs, attrId, value) {
 //       const attr = attrs.find((item) => item.id === attrId);
 //       if (!attr) return null;
 //       for (const d of attr.d) {
 //         if (d.value.test(value)) {
 //           return attr;
 //         }
 //       }
 //     }
 //     pdb.enumAttributes(function (idx, attrDef) {
 //       if (propsNames.includes(attrDef.name.toLowerCase()) ||
 //         (attrDef.name === 'Level' && attrDef.category === '__internalref__')) {
 //         props.push({ attrId: idx, attrDef })
 //       }
 //       pushSelect(levelSelect, attrDef, idx, attrLevel)
 //       pushSelect(roomSelect, attrDef, idx, attrRoom)
 //       pushSelect(structureSelect, attrDef, idx, attrStructure)
 //       pushSelect(floorSelect, attrDef, idx, attrFloor)
 //     });
 //     let dbIds = { floors: [], rooms: [], levels: [], structures: [] };
 //     const idExternal = {};
 //     let externalIdMapping = pdb.getExternalIdMapping();
 //     for (let key in externalIdMapping) {
 //       if (externalIdMapping.hasOwnProperty(key)) {
 //         idExternal[externalIdMapping[key]] = key;
 //       }
 //     }
 //     pdb.enumObjects(function (dbId) {
 //       const properties = [];
 //       let array = undefined;
 //       pdb.enumObjectProperties(dbId, function (attrId, valId) {
 //         let value = pdb.getAttrValue(attrId, valId);
 //         if (typeof value === "number") value = round(value);
 //         let prop = props.find(prop => prop.attrId === attrId)
 //         const levelProps = attrIsValid(attrLevel, attrId, value);
 //         const roomProps = attrIsValid(attrRoom, attrId, value);
 //         const structureProps = attrIsValid(attrStructure, attrId, value);
 //         const floorProps = attrIsValid(attrFloor, attrId, value);
 //         if (levelProps) {
 //           prop = levelProps;
 //           array = dbIds.levels;
 //         }
 //         if (roomProps) {
 //           prop = roomProps;
 //           array = dbIds.rooms;
 //         }
 //         if (floorProps) {
 //           prop = floorProps;
 //           array = dbIds.floors;
 //         }
 //         if (structureProps) {
 //           prop = structureProps;
 //           array = dbIds.structures;
 //         }
 //         if (prop) {
 //           const attrNameLowerCase = prop.attrDef.name.toLowerCase()
 //           let found = false;
 //           for (const propertie of properties) {
 //             if (propertie.name.toLowerCase() === attrNameLowerCase && propertie.category !== '__internalref__') {
 //               if (propertie.value !== value) {
 //                 propertie.oldValue = propertie.value
 //                 propertie.value = value
 //               }
 //               found = true
 //               break;
 //             }
 //           }
 //           if (!found) {
 //             const res = { name: attrNameLowerCase, value }
 //             if (prop.attrDef.dataTypeContext)
 //               Object.assign(res, { dataTypeContext: prop.attrDef.dataTypeContext });
 //             if (attrNameLowerCase === 'level' && prop.attrDef.category === '__internalref__')
 //               Object.assign(res, { category: prop.attrDef.category });
 //             properties.push(res);
 //           }
 //         }
 //       });
 //       if (Array.isArray(array))
 //         array.push({ dbId, properties, externalId: idExternal[dbId] })
 //     });
 //     if (useFloor === false) dbIds.floors = dbIds.rooms
 //     function createArchitectureModel(object) {
 //       const archiModel = {};
 //       function getAttrValue(obj, attrName, attrCat?) {
 //         const props = obj.properties;
 //         const attrNameLowerCase = attrName.toLowerCase()
 //         for (let i = 0; i < props.length; i++) {
 //           if (props[i].name.toLowerCase() === attrNameLowerCase) {
 //             if (attrCat && props[i].category !== attrCat) {
 //               continue;
 //             }
 //             return props[i].value
 //           }
 //         }
 //       }
 //       function setAttrValue(obj, attrName, value) {
 //         const props = obj.properties;
 //         const attrNameLowerCase = attrName.toLowerCase()
 //         for (let i = 0; i < props.length; i++) {
 //           if (props[i].name.toLowerCase() === attrNameLowerCase) {
 //             if (props[i].value === value) return;
 //             props[i].oldValue = props[i].value
 //             props[i].value = value
 //             return;
 //           }
 //         }
 //       }
 //       function getLevelByDbId(dbId) {
 //         for (const level of object.levels) {
 //           if (level.dbId === dbId) {
 //             return level
 //           }
 //         }
 //       }
 //       function findFloor(room, data) {
 //         const leveldbId = getAttrValue(room, "level", '__internalref__');
 //         const roomNumber = getAttrValue(room, "number").toString()
 //         const res = [];
 //         for (const floor of data.floors) {
 //           const levelItemdbId = getAttrValue(floor, "level", '__internalref__');
 //           const floorRoomNumber = getAttrValue(floor, FLOOR_ROOM_NUMBER_ATTR_NAME)
 //           if (
 //             leveldbId === levelItemdbId &&
 //             floorRoomNumber !== undefined &&
 //             roomNumber == floorRoomNumber.toString()
 //           ) {
 //             if (FLOOR_ROOM_NAME_ATTR_NAME) {
 //               const floorRoomName = getAttrValue(floor, FLOOR_ROOM_NAME_ATTR_NAME)
 //               if (floorRoomName)
 //                 setAttrValue(room, 'name', floorRoomName)
 //             }
 //             if (FLOOR_LEVEL_NAME_ATTR_NAME) {
 //               const floorName = getAttrValue(floor, FLOOR_LEVEL_NAME_ATTR_NAME)
 //               if (floorName)
 //                 setAttrValue(getLevelByDbId(leveldbId), 'name', floorName)
 //             }
 //             res.push(floor);
 //           }
 //         }
 //         return res;
 //       }
 //       for (let i = 0; i < object.levels.length; i++) {
 //         const obj = object.levels[i];
 //         archiModel[obj.dbId] = { properties: obj, children: {}, structures: {} }
 //       }
 //       for (let i = 0; i < object.rooms.length; i++) {
 //         const obj = object.rooms[i];
 //         const lvl = getAttrValue(obj, 'level', '__internalref__'); // check here;
 //         if (lvl) {
 //           archiModel[lvl].children[obj.externalId] = {
 //             properties: obj,
 //             children: findFloor(obj, object)
 //           }
 //         }
 //       }
 //       for (let i = 0; i < object.structures.length; i++) {
 //         const obj = object.structures[i];
 //         const lvl = getAttrValue(obj, 'level', '__internalref__');
 //         if (archiModel[lvl]) {
 //           archiModel[lvl].structures[obj.externalId] = {
 //             properties: obj,
 //           }
 //         }
 //       }
 //       return archiModel;
 //     }
 //     console.log("dbIds =>", dbIds);
 //     return dbIds
 //     // return createArchitectureModel(dbIds)
 //   }
 //   const modelArchi = await (<any>window).NOP_VIEWER.model.getPropertyDb().executeUserFunction(fct);
 //   console.log(modelArchi);
 // }

},{}],"ezRLD":[function(require,module,exports) {
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
exports.config = void 0;
exports.config = {
    batchSize: 50,
    contextName: "spatial",
    buildingName: "building",
    attrs: {
        // Attributs recherché dans les props du batiment
        room: {
            // Piece du batiment
            attrName: "category",
            attrVal: "Revit Pi\xe8ces"
        },
        level: {
            // Etage du batiment
            attrName: "category",
            attrVal: "Revit Level"
        },
        floors: {
            // sol des rooms
            attrName: "Stype",
            attrVal: "Floor_finish"
        }
    },
    roomNiveau: "Etage",
    props: {
        // Proprieté a recuperer pour chaque type d'objet
        room: [
            "area",
            "volume",
            "perimeter",
            "local",
            "etage",
            "stype",
            "roomid",
            "number"
        ],
        level: {
            components: {
                type: "Array"
            }
        },
        floors: [
            "roomid"
        ]
    }
};

},{}],"b3pAR":[function(require,module,exports) {
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
exports.BIMOBJECT_TYPE = exports.GEO_ROOM_TYPE = exports.GEO_ZONE_RELATION = exports.GEO_ROOM_RELATION = exports.GEO_FLOOR_RELATION = exports.GEO_BUILDING_RELATION = exports.GEO_SITE_RELATION = exports.GEO_REFERENCE_ROOM_RELATION = exports.GEO_REFERENCE_RELATION = exports.GEO_FLOOR_TYPE = exports.GEO_EQUIPMENT_RELATION = exports.GEO_EQUIPMENT_TYPE = void 0;
var spinal_env_viewer_context_geographic_service_1 = require("ea3d9818ddd526f5");
Object.defineProperty(exports, "GEO_EQUIPMENT_TYPE", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.EQUIPMENT_TYPE;
    }
});
Object.defineProperty(exports, "GEO_EQUIPMENT_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.EQUIPMENT_RELATION;
    }
});
Object.defineProperty(exports, "GEO_FLOOR_TYPE", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.FLOOR_TYPE;
    }
});
Object.defineProperty(exports, "GEO_REFERENCE_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.REFERENCE_RELATION;
    }
});
Object.defineProperty(exports, "GEO_REFERENCE_ROOM_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.REFERENCE_ROOM_RELATION;
    }
});
Object.defineProperty(exports, "GEO_SITE_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.SITE_RELATION;
    }
});
Object.defineProperty(exports, "GEO_BUILDING_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.BUILDING_RELATION;
    }
});
Object.defineProperty(exports, "GEO_FLOOR_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.FLOOR_RELATION;
    }
});
Object.defineProperty(exports, "GEO_ROOM_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.ROOM_RELATION;
    }
});
Object.defineProperty(exports, "GEO_ZONE_RELATION", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.ZONE_RELATION;
    }
});
Object.defineProperty(exports, "GEO_ROOM_TYPE", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.ROOM_TYPE;
    }
});
Object.defineProperty(exports, "BIMOBJECT_TYPE", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.EQUIPMENT_TYPE;
    }
});

},{"ea3d9818ddd526f5":"5QjJf"}],"kJVYs":[function(require,module,exports) {
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpatialConfig = void 0;
const spinal_core_connectorjs_type_1 = __importStar(require("780a097c40ae43dd"));
const CONTEXT_NAME = "spatial";
const DEFAULT_CONFIG_NAME = "default";
class SpatialConfig extends spinal_core_connectorjs_type_1.Model {
    constructor(){
        super();
        this.add_attr({
            data: [
                {
                    configName: DEFAULT_CONFIG_NAME,
                    contextName: CONTEXT_NAME,
                    contextId: "",
                    basic: {
                        addLevel: false,
                        buildingName: "Building",
                        selectedModel: ""
                    },
                    levelSelect: [
                        {
                            key: "/^Category$/",
                            value: "/^Revit Level$/",
                            isCat: true
                        }
                    ],
                    roomSelect: [
                        {
                            key: "/^Category$/",
                            value: "/^Revit Pi\xe8ces$/",
                            isCat: true
                        }
                    ],
                    structureSelect: [
                        {
                            key: "/^Category$/",
                            value: "/^Revit Murs$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Portes$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Garde-corps$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Fen\xeatres$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Walls$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Doors$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Railings$/",
                            isCat: true
                        },
                        {
                            key: "/^Category$/",
                            value: "/^Revit Windows$/",
                            isCat: true
                        }
                    ],
                    floorRoomNbr: "Number",
                    floorSelect: [
                        {
                            key: "/^Nom du type$/",
                            value: "/^Finition de sol$/"
                        }
                    ]
                }
            ]
        });
    }
    saveConfig(config) {
        for(let i = 0; i < this.data.length; i++){
            const item = this.data[i];
            if (item.configName.get() === config.configName) {
                const contextId = item.contextId;
                const contextName = item.contextName;
                const archi = item.archi;
                item.set(config);
                if (contextId) item.mod_attr("contextId", contextId);
                if (contextName) item.mod_attr("contextName", contextName);
                if (archi) item.mod_attr("archi", archi);
            }
        }
    }
    getConfig(configName) {
        for(let i = 0; i < this.data.length; i++){
            const item = this.data[i];
            if (item.configName.get() === configName) return item;
        }
    }
    getConfigFromContextId(contextId) {
        for(let i = 0; i < this.data.length; i++){
            const item = this.data[i];
            if (item.contextId.get() === contextId) return item;
        }
    }
}
exports.SpatialConfig = SpatialConfig;
spinal_core_connectorjs_type_1.default.register_models(SpatialConfig);

},{"780a097c40ae43dd":"fRH70"}],"6Ox22":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BuildingManager = void 0;
const AbstractEntityManager_1 = require("47ea20c57d4c529e");
const spinal_env_viewer_graph_service_1 = require("94f66fdfe91266c1");
const spinal_env_viewer_context_geographic_service_1 = __importDefault(require("9c9dd464e51dc6"));
const spinal_models_building_elements_1 = require("15a8d4aa0f9a688e");
class BuildingManager extends AbstractEntityManager_1.AbstractEntityManager {
    constructor(){
        super();
    }
    create(name, info, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            let nodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: name,
                type: spinal_env_viewer_context_geographic_service_1.default.constants.BUILDING_TYPE
            }, new spinal_models_building_elements_1.AbstractElement(name));
            yield this.addAttribute(spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId), attributes);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(nodeId);
        });
    }
    getParents(node) {
        return __awaiter(this, void 0, void 0, function*() {
            let parents = yield node.getParents();
            for(let i = 0; i < parents.length; i++){
                if (parents[i].info.type.get() === spinal_env_viewer_context_geographic_service_1.default.constants.CONTEXT_TYPE) return parents[i];
            }
            return undefined;
        });
    }
    update(entityId, info) {
        return undefined;
    }
}
exports.BuildingManager = BuildingManager;

},{"47ea20c57d4c529e":"fUcjT","94f66fdfe91266c1":"9n7zp","9c9dd464e51dc6":"5QjJf","15a8d4aa0f9a688e":"jsnTF"}],"fUcjT":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractEntityManager = void 0;
const spinal_env_viewer_graph_service_1 = require("b9d697383ec6e103");
const InvalidObjectManager_1 = require("ab580050e1f19f52");
const spinal_env_viewer_plugin_documentation_service_1 = require("c492b771977663e1");
const spinal_env_viewer_context_geographic_service_1 = __importDefault(require("164fc42be9a6c03f"));
const InvalidManager = new InvalidObjectManager_1.InvalidObjectManager();
class AbstractEntityManager {
    constructor(){
        this.invalidObjectManager = new InvalidObjectManager_1.InvalidObjectManager();
    }
    /**
     * add a new entity to the parent if the entity is not already present
     * @param contextId {string}
     * @param parentId {string}
     * @param childId {string}
     * @param relationName {string}
     * @param relationType {string}
     */ addChild(contextId, parentId, childId, relationName, relationType) {
        return __awaiter(this, void 0, void 0, function*() {
            const parentChild = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(parentId, [
                relationName
            ]);
            if (typeof parentChild !== "undefined") for(let i = 0; i < parentChild.length; i++){
                const brother = parentChild[i];
                if (brother.id.get() === childId) return brother;
            }
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(parentId, childId, contextId, relationName, relationType).then((node)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(node.info.id.get()));
        });
    }
    /**
     * Delete the entity
     * @param entityId {string} id of the entity
     * @returns true if the entity has been deleted false otherwise
     */ delete(entityId) {
        return __awaiter(this, void 0, void 0, function*() {
            const roomNode = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(entityId);
            const parent = yield this.getParents(roomNode);
            if (typeof parent === "undefined") return false;
            const removed = yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(parent.info.id.get(), entityId, spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_TYPE);
            yield this.invalidObjectManager.addObject(entityId);
            return removed;
        });
    }
    addBimObject(contextId, parentId, dbId, objectName, model) {
        // @ts-ignore
        window.spinal.BimObjectService.addBIMObject(contextId, parentId, dbId, objectName, model);
    }
    addReferenceObject(parentId, dbId, name, model) {
        // @ts-ignore
        window.spinal.BimObjectService.addReferenceObject(parentId, dbId, name, model);
    }
    /**
     * Add all the attribute of $attribute to the node
     * @param node
     * @param attributes
     * @param properties
     */ addAttribute(node, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            let proms = [];
            let category = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.getCategoryByName(node, "Spatial");
            if (typeof category === "undefined") category = yield spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addCategoryAttribute(node, "Spatial");
            for(let i = 0; i < attributes.length; i++){
                const prop = attributes[i];
                proms.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(node, category, prop.name, prop.value));
            }
            return Promise.all(proms);
        });
    }
    /**
     * Get the entity for entityId
     * @param entityId {string} id of the entity
     * @returns  the entity if found undefined otherwise
     */ get(entityId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(entityId);
    }
    getPropertyValueByName(properties, name) {
        for(let i = 0; i < properties.length; i++){
            if (properties[i].name.toLowerCase() === name.toLowerCase()) return properties[i].value;
        }
        return undefined;
    }
    getByExternalId(externalId, parentId, relationName) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(parentId, [
            relationName
        ]).then((children)=>{
            if (typeof children === "undefined") return undefined;
            for(let i = 0; i < children.length; i++){
                if (children[i].hasOwnProperty("externalId") && children[i].externalId.get() === externalId) return children[i];
            }
            return undefined;
        });
    }
}
exports.AbstractEntityManager = AbstractEntityManager;

},{"b9d697383ec6e103":"9n7zp","ab580050e1f19f52":"2jJnD","c492b771977663e1":"5rYVR","164fc42be9a6c03f":"5QjJf"}],"2jJnD":[function(require,module,exports) {
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
exports.InvalidObjectManager = exports.SPATIAL_START_NODE_NAME = exports.SPATIAL_RELATION_NAME = exports.SPATIAL_START_NODE_RELATION_NAME = exports.CONTEXT_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("5ce7bbbf13e342f3");
exports.CONTEXT_NAME = "Invalid";
exports.SPATIAL_START_NODE_RELATION_NAME = "hasSpatialInvalidStartNode";
exports.SPATIAL_RELATION_NAME = "hasSpatialInvalidNode";
exports.SPATIAL_START_NODE_NAME = "Object invalid du context Spatial";
class InvalidObjectManager {
    constructor(){
        this.initialized = this.init();
    }
    addObject(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.initialized;
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(this.spatialStartNode.id.get(), nodeId, this.context.info.id.get(), exports.SPATIAL_RELATION_NAME, spinal_env_viewer_graph_service_1.SPINAL_RELATION_TYPE);
        });
    }
    init() {
        return new Promise((resolve)=>__awaiter(this, void 0, void 0, function*() {
                try {
                    yield spinal_env_viewer_graph_service_1.SpinalGraphService.waitForInitialization();
                    this.context = yield InvalidObjectManager.getContext();
                    this.contextId = this.context.info.id.get();
                    this.spatialStartNode = yield this.getSpatialStartNode();
                    resolve(true);
                } catch (e) {
                    console.error(e);
                    resolve(false);
                }
            }));
    }
    getSpatialStartNode() {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(this.contextId, [
                exports.SPATIAL_START_NODE_RELATION_NAME
            ]);
            for(let i = 0; i < children.length; i++){
                if (children[i].name.get() === exports.SPATIAL_START_NODE_NAME) return children[i];
            }
            const startNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: exports.SPATIAL_START_NODE_NAME
            }, undefined);
            const contextId = this.context.info.id.get();
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(contextId, startNodeId, contextId, exports.SPATIAL_START_NODE_RELATION_NAME, spinal_env_viewer_graph_service_1.SPINAL_RELATION_TYPE);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(startNodeId);
        });
    }
    static getContext() {
        return __awaiter(this, void 0, void 0, function*() {
            let context = spinal_env_viewer_graph_service_1.SpinalGraphService.getContext(exports.CONTEXT_NAME);
            if (typeof context === "undefined") context = yield InvalidObjectManager.createContext();
            return context;
        });
    }
    static createContext() {
        return __awaiter(this, void 0, void 0, function*() {
            return yield spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(exports.CONTEXT_NAME, "SpinalSystem", undefined);
        });
    }
}
exports.InvalidObjectManager = InvalidObjectManager;

},{"5ce7bbbf13e342f3":"9n7zp"}],"2e3b8":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FloorManager = void 0;
const AbstractEntityManager_1 = require("fee29900a4063ddd");
const spinal_env_viewer_graph_service_1 = require("c5d5b8d128bda390");
const spinal_env_viewer_context_geographic_service_1 = __importDefault(require("b0ec856ecada7c37"));
const spinal_models_building_elements_1 = require("f3228f07eaffa8d4");
class FloorManager extends AbstractEntityManager_1.AbstractEntityManager {
    constructor(){
        super();
    }
    create(name, info, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: name,
                type: spinal_env_viewer_context_geographic_service_1.default.constants.FLOOR_TYPE
            }, new spinal_models_building_elements_1.AbstractElement(name));
            yield this.addAttribute(spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId), attributes);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(nodeId);
        });
    }
    getParents(node) {
        return __awaiter(this, void 0, void 0, function*() {
            let parents = yield node.getParents();
            for(let i = 0; i < parents.length; i++){
                if (parents[i].info.type.get() === spinal_env_viewer_context_geographic_service_1.default.constants.BUILDING_TYPE) return parents[i];
            }
            return undefined;
        });
    }
    update(entityId, info) {
        return undefined;
    }
}
exports.FloorManager = FloorManager;

},{"fee29900a4063ddd":"fUcjT","c5d5b8d128bda390":"9n7zp","b0ec856ecada7c37":"5QjJf","f3228f07eaffa8d4":"jsnTF"}],"fjV97":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RoomManager = void 0;
const AbstractEntityManager_1 = require("4f86ef64b5778db8");
const spinal_env_viewer_graph_service_1 = require("7faf05311bb35ba5");
const spinal_models_building_elements_1 = require("d2daa0d6ceeffe64");
const spinal_env_viewer_context_geographic_service_1 = __importDefault(require("6f37fb18ceb031b7"));
class RoomManager extends AbstractEntityManager_1.AbstractEntityManager {
    constructor(){
        super();
    }
    create(name, info, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            const roomId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: name,
                type: spinal_env_viewer_context_geographic_service_1.default.constants.ROOM_TYPE
            }, new spinal_models_building_elements_1.AbstractElement(name));
            yield this.addAttribute(spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(roomId), attributes);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getNode(roomId);
        });
    }
    getParents(node) {
        return __awaiter(this, void 0, void 0, function*() {
            let parents = yield node.getParents();
            for(let i = 0; i < parents.length; i++){
                if (parents[i].info.type.get() === spinal_env_viewer_context_geographic_service_1.default.constants.FLOOR_TYPE) return parents[i];
            }
            return undefined;
        });
    }
    update(entityId, info) {
        return undefined;
    }
}
exports.RoomManager = RoomManager;

},{"4f86ef64b5778db8":"fUcjT","7faf05311bb35ba5":"9n7zp","d2daa0d6ceeffe64":"jsnTF","6f37fb18ceb031b7":"5QjJf"}],"2wzJt":[function(require,module,exports) {
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
exports.consumeBatch = void 0;
function consumeBatch(promises, batchSize = 10, callBackProgress) {
    return __awaiter(this, void 0, void 0, function*() {
        let index = 0;
        const result = [];
        while(index < promises.length){
            let endIndex = index + batchSize;
            if (promises.length <= endIndex) endIndex = promises.length;
            const slice = promises.slice(index, endIndex);
            const resProm = yield Promise.all(slice.map((e)=>e()));
            if (callBackProgress) callBackProgress(endIndex, promises.length);
            result.push(...resProm);
            index = endIndex;
        }
        return result;
    });
}
exports.consumeBatch = consumeBatch;

},{}],"1ialy":[function(require,module,exports) {
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

},{}],"d1eUi":[function(require,module,exports) {
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
__exportStar(require("1c58e9eceb887314"), exports);
__exportStar(require("8947ba99a84d17e2"), exports);
__exportStar(require("75755ba9de3e2a89"), exports);
__exportStar(require("9e940adf16a5eed3"), exports);
__exportStar(require("96724d8400af0537"), exports);
__exportStar(require("1eff590be5fe8c03"), exports);
__exportStar(require("1c4f1db8390ba000"), exports);

},{"1c58e9eceb887314":"dWQqn","8947ba99a84d17e2":"eQ3Yl","75755ba9de3e2a89":"eEPuU","9e940adf16a5eed3":"2QtL3","96724d8400af0537":"g1Ysh","1eff590be5fe8c03":"fNlxU","1c4f1db8390ba000":"3AEx3"}],"dWQqn":[function(require,module,exports) {
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
__exportStar(require("4e85847368877f75"), exports);
__exportStar(require("5f0833f6925fc7e4"), exports);
__exportStar(require("c76f0f4098cb3cb9"), exports);
__exportStar(require("e148547322424348"), exports);
__exportStar(require("f68742657a9c76a"), exports);
__exportStar(require("4167f566ebb90f13"), exports);
__exportStar(require("2de64906aeb72b76"), exports);
__exportStar(require("5d9f934c3f22d639"), exports);
__exportStar(require("1b13216fea35ca31"), exports);
__exportStar(require("6db873f047d2430e"), exports);
__exportStar(require("f37762c09f0696b8"), exports);

},{"4e85847368877f75":"9Nu8V","5f0833f6925fc7e4":"4sB3k","c76f0f4098cb3cb9":"6kHSp","e148547322424348":"glsqA","f68742657a9c76a":"4W13A","4167f566ebb90f13":"kGLxR","2de64906aeb72b76":"brHEG","5d9f934c3f22d639":"3HK9u","1b13216fea35ca31":"7qdll","6db873f047d2430e":"2Mnvz","f37762c09f0696b8":"i7fsS"}],"9Nu8V":[function(require,module,exports) {
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

},{}],"4sB3k":[function(require,module,exports) {
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

},{}],"6kHSp":[function(require,module,exports) {
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

},{}],"glsqA":[function(require,module,exports) {
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

},{}],"4W13A":[function(require,module,exports) {
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
exports.EModificationType = void 0;
var EModificationType;
(function(EModificationType) {
    EModificationType[EModificationType["none"] = 0] = "none";
    EModificationType[EModificationType["update"] = 1] = "update";
    EModificationType[EModificationType["create"] = 2] = "create";
    EModificationType[EModificationType["updateNode"] = 8] = "updateNode";
    EModificationType[EModificationType["updateAttr"] = 16] = "updateAttr";
    EModificationType[EModificationType["updateChildren"] = 32] = "updateChildren";
    EModificationType[EModificationType["delete"] = 64] = "delete";
})(EModificationType = exports.EModificationType || (exports.EModificationType = {}));

},{}],"kGLxR":[function(require,module,exports) {
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

},{}],"brHEG":[function(require,module,exports) {
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

},{}],"3HK9u":[function(require,module,exports) {
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

},{}],"7qdll":[function(require,module,exports) {
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

},{}],"2Mnvz":[function(require,module,exports) {
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

},{}],"i7fsS":[function(require,module,exports) {
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

},{}],"eQ3Yl":[function(require,module,exports) {
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
__exportStar(require("c74bf7ff37956b15"), exports);
__exportStar(require("64711907b5000e7d"), exports);
__exportStar(require("70fc3c0607044cf3"), exports);
__exportStar(require("4dcdbe89e42955ca"), exports);
__exportStar(require("e8ec8bc479690a1e"), exports);
__exportStar(require("830060ac8dcd1cba"), exports);
__exportStar(require("3e401a7294706cc9"), exports);
__exportStar(require("debf80a6f9d16cad"), exports);

},{"c74bf7ff37956b15":"7CGtg","64711907b5000e7d":"j0Ghu","70fc3c0607044cf3":"h1jlL","4dcdbe89e42955ca":"hS6eW","e8ec8bc479690a1e":"4LcRf","830060ac8dcd1cba":"7FDV7","3e401a7294706cc9":"12f9y","debf80a6f9d16cad":"flDVf"}],"7CGtg":[function(require,module,exports) {
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
exports.loadBimFile = void 0;
function loadModel(viewer, path, option = {}) {
    return new Promise((resolve, reject)=>{
        let m = undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fn = (e)=>{
            if (m && e.model.id === m.id) {
                viewer.removeEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, fn);
                resolve(m);
            }
        };
        viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, fn);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let fct = viewer.loadModel;
        if (!viewer.started) fct = viewer.start;
        fct.call(viewer, path, option, (model)=>{
            m = model;
        }, reject);
    });
}
function loadBimFile(bimFile, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimFileId = bimFile.info.id.get();
        const svfVersionFile = yield window.spinal.SpinalForgeViewer.getSVF(bimFile.element, bimFileId, bimFile.info.name.get());
        const path = window.location.origin + svfVersionFile.path;
        const m = yield loadModel(viewer, path, {});
        window.spinal.BimObjectService.addModel(bimFileId, m, svfVersionFile.version, null, bimFile.info.name.get());
        return m;
    });
}
exports.loadBimFile = loadBimFile;

},{}],"j0Ghu":[function(require,module,exports) {
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
exports.loadConfig = void 0;
const spinal_model_graph_1 = require("939ee329da0797f9");
const SpatialConfig_1 = require("e85968f67a1c4dd5");
function loadConfig(graph) {
    return __awaiter(this, void 0, void 0, function*() {
        let configContext = yield graph.getContext(".config");
        if (typeof configContext === "undefined") {
            configContext = new spinal_model_graph_1.SpinalContext(".config", "system configuration", undefined);
            graph.addContext(configContext);
        }
        const children = yield configContext.getChildren([
            "hasConfig"
        ]);
        let config;
        for(let i = 0; i < children.length; i++)if (children[i].info.type.get() === "SpatialConfig") {
            config = children[i];
            break;
        }
        if (typeof config === "undefined") {
            // create default config
            config = new spinal_model_graph_1.SpinalNode("spatial config", "SpatialConfig", new SpatialConfig_1.SpatialConfig());
            yield configContext.addChild(config, "hasConfig", spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
        return config.element.load();
    });
}
exports.loadConfig = loadConfig;

},{"939ee329da0797f9":"fkEXw","e85968f67a1c4dd5":"kJVYs"}],"h1jlL":[function(require,module,exports) {
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
exports.setAreaInContextGeo = void 0;
const getContextSpatial_1 = require("4705615493ba7868");
const Constant_1 = require("f6c9cb9496e9e3af");
const spinal_env_viewer_plugin_documentation_service_1 = require("b6aabf13bd0a8872");
const spinal_core_connectorjs_1 = require("2b41bab1eb999b32");
const updateLoadedModel_1 = require("f954adfc9f51d79");
const getModelByBimFileId_1 = require("3290a7286e7867e7");
const getADModelProps_1 = require("ee585c56fb93bfe0");
const getADPropBylabel_1 = require("49aad4a1508e8178");
function getAreaAttr(node) {
    return __awaiter(this, void 0, void 0, function*() {
        const categoryName = "Spatial";
        const label = "area";
        let category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(node, categoryName);
        if (!category) category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addCategoryAttribute(node, categoryName);
        const attrs = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
        for (const attr of attrs)if (attr.label.get() === label) {
            if (attr.value instanceof spinal_core_connectorjs_1.Val) attr.mod_attr("value", attr.value.get().toString());
            return attr;
        }
        return spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(node, category, label, "0");
    });
}
function updateRoomArea(room, loadedModel) {
    return __awaiter(this, void 0, void 0, function*() {
        const roomProp = yield getAreaAttr(room);
        const refsRoom = yield room.getChildren(Constant_1.GEO_REFERENCE_ROOM_RELATION);
        const proms = [];
        for (const refRoom of refsRoom)proms.push(getADAreaProp(refRoom, loadedModel));
        const refsArea = yield Promise.all(proms);
        const roomArea = refsArea.reduce((acc, itm)=>{
            return acc + parseFloat(itm);
        }, 0);
        roomProp.value.set(roomArea.toFixed(2));
        return roomProp;
    });
}
function getADAreaProp(refRoom, loadedModel) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const dbid = (_a = refRoom.info.dbid) === null || _a === void 0 ? void 0 : _a.get();
            if (dbid && dbid > 0) {
                const model = yield (0, getModelByBimFileId_1.getModelByBimFileId)(refRoom.info.bimFileId.get(), loadedModel);
                const refProps = yield (0, getADModelProps_1.getADModelProps)(model, dbid);
                const refADProp = (0, getADPropBylabel_1.getADPropBylabel)(refProps, "Area");
                return (refADProp === null || refADProp === void 0 ? void 0 : refADProp.displayValue) || "0";
            }
            return "0";
        } catch (error) {
            return "0";
        }
    });
}
function updateFloorArea(floor, context, loadedModel) {
    return __awaiter(this, void 0, void 0, function*() {
        const proms = [];
        proms.push(getAreaAttr(floor));
        const rooms = yield floor.getChildrenInContext(context);
        for (const room of rooms)proms.push(updateRoomArea(room, loadedModel));
        const [floorProp, ...roomProps] = yield Promise.all(proms);
        const floorArea = roomProps.reduce((acc, itm)=>{
            return acc + parseFloat(itm.value.get());
        }, 0);
        floorProp.value.set(floorArea.toFixed(2));
        return floorProp;
    });
}
function setAreaInContextGeo(graph) {
    return __awaiter(this, void 0, void 0, function*() {
        const loadedModel = new Map();
        (0, updateLoadedModel_1.updateLoadedModel)(loadedModel);
        const context = yield (0, getContextSpatial_1.getContextSpatial)(graph);
        const buildings = yield context.getChildrenInContext(context);
        for (const building of buildings){
            const proms = [];
            proms.push(getAreaAttr(building));
            const floors = yield building.getChildrenInContext(context);
            for (const floor of floors)proms.push(updateFloorArea(floor, context, loadedModel));
            const [buildingProp, ...floorProps] = yield Promise.all(proms);
            const buildingArea = floorProps.reduce((acc, itm)=>{
                return acc + parseFloat(itm.value.get());
            }, 0);
            buildingProp.value.set(buildingArea.toFixed(2));
        }
    });
}
exports.setAreaInContextGeo = setAreaInContextGeo;

},{"4705615493ba7868":"7eoNK","f6c9cb9496e9e3af":"b3pAR","b6aabf13bd0a8872":"5rYVR","2b41bab1eb999b32":"2uyD7","f954adfc9f51d79":"7Uou5","3290a7286e7867e7":"gp0sW","ee585c56fb93bfe0":"9XZOf","49aad4a1508e8178":"i4ABs"}],"7eoNK":[function(require,module,exports) {
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
exports.getContextSpatial = void 0;
const spinal_model_graph_1 = require("66ca27814a438be2");
function getContextSpatial(graph) {
    return __awaiter(this, void 0, void 0, function*() {
        let context = yield graph.getContext("spatial");
        if (context) return context;
        context = new spinal_model_graph_1.SpinalContext("spatial", "geographicContext");
        yield graph.addContext(context);
        return context;
    });
}
exports.getContextSpatial = getContextSpatial;

},{"66ca27814a438be2":"fkEXw"}],"7Uou5":[function(require,module,exports) {
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
exports.updateLoadedModel = void 0;
const getViewer_1 = require("11ab4aeae64927b2");
function updateLoadedModel(loadedModel) {
    const viewer = (0, getViewer_1.getViewer)();
    if (!viewer) return;
    try {
        const allModel = viewer.getAllModels();
        for (const model of allModel){
            const obj = spinal.SpinalForgeViewer.bimObjectService.mappingModelIdBimFileId[model.id];
            if (obj) {
                const bimFileId = obj.bimFileId;
                loadedModel.set(bimFileId, Promise.resolve(model));
            }
        }
    } catch (error) {
        console.log("updateLoadedModel fail load existing model list, ignore it if no model loaded");
    }
}
exports.updateLoadedModel = updateLoadedModel;

},{"11ab4aeae64927b2":"7cAlu"}],"7cAlu":[function(require,module,exports) {
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
exports.getViewer = void 0;
function getViewer() {
    try {
        return window.spinal.SpinalForgeViewer.viewerManager.viewer;
    } catch (error) {
        return window.spinal.ForgeViewer.viewer;
    }
}
exports.getViewer = getViewer;

},{}],"gp0sW":[function(require,module,exports) {
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
exports.getModelByBimFileId = void 0;
const loadModelByBimFileId_1 = require("75249869f5756ebb");
function getModelByBimFileId(bimFileId, loadedModel) {
    if (loadedModel.has(bimFileId)) return loadedModel.get(bimFileId);
    const prom = (0, loadModelByBimFileId_1.loadModelByBimFileId)(bimFileId);
    loadedModel.set(bimFileId, prom);
    return prom;
}
exports.getModelByBimFileId = getModelByBimFileId;

},{"75249869f5756ebb":"aiFRo"}],"aiFRo":[function(require,module,exports) {
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
exports.loadModelByBimFileId = void 0;
const getBimFileByBimFileId_1 = require("2ac3ac306933d8ea");
const loadBimFile_1 = require("65ba1d8ae3c4e8a4");
const getViewer_1 = require("97f7ffbbf01f7ed8");
function loadModelByBimFileId(bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        const viewer = (0, getViewer_1.getViewer)();
        const bimFile = yield (0, getBimFileByBimFileId_1.getBimFileByBimFileId)(bimFileId);
        return (0, loadBimFile_1.loadBimFile)(bimFile, viewer);
    });
}
exports.loadModelByBimFileId = loadModelByBimFileId;

},{"2ac3ac306933d8ea":"bgfSo","65ba1d8ae3c4e8a4":"7CGtg","97f7ffbbf01f7ed8":"7cAlu"}],"bgfSo":[function(require,module,exports) {
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
exports.getBimFileByBimFileId = void 0;
const spinal_model_graph_1 = require("ea2b775d06a50c0");
const graphservice_1 = require("79a84e49be3a4d7d");
let getBimFileByBimFileIdIt = null;
function getBimFileByBimFileId(bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!getBimFileByBimFileIdIt) getBimFileByBimFileIdIt = _getBimFileByBimFileId(bimFileId);
        const data = (yield getBimFileByBimFileIdIt.next(bimFileId)).value;
        if (data instanceof Error) throw data;
        return data;
    });
}
exports.getBimFileByBimFileId = getBimFileByBimFileId;
function _getBimFileByBimFileId(bimFileId) {
    return __asyncGenerator(this, arguments, function* _getBimFileByBimFileId_1() {
        let nextBimFileId = bimFileId;
        while(true){
            const bimFile = (0, graphservice_1.getRealNode)(nextBimFileId);
            if (bimFile) {
                nextBimFileId = yield yield __await(bimFile);
                continue;
            }
            const graph = (0, graphservice_1.getGraph)();
            const context = yield __await(graph.getContext("BimFileContext"));
            if (!context) {
                nextBimFileId = yield yield __await(new Error("BimFileContext not found in graph"));
                continue;
            }
            const child = yield __await(context.getChild((node)=>node.info.id.get() === nextBimFileId, "hasBimFile", spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE));
            if (child) nextBimFileId = yield yield __await(child);
            else nextBimFileId = yield yield __await(new Error(`BimFileId [${nextBimFileId}] not found`));
        }
    });
}

},{"ea2b775d06a50c0":"fkEXw","79a84e49be3a4d7d":"MYBU6"}],"MYBU6":[function(require,module,exports) {
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
 */ const spinal_env_viewer_graph_service_1 = require("d6e8b04bf3b4a61a");
function addNodeGraphService(node) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

},{"d6e8b04bf3b4a61a":"9n7zp"}],"9XZOf":[function(require,module,exports) {
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
exports.getADModelProps = void 0;
function getADModelProps(model, dbid) {
    return new Promise((resolve, reject)=>{
        model.getProperties(dbid, (res)=>{
            resolve(res);
        }, reject);
    });
}
exports.getADModelProps = getADModelProps;

},{}],"i4ABs":[function(require,module,exports) {
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
exports.getADPropBylabel = void 0;
function getADPropBylabel(props, label) {
    for (const prop of props.properties){
        if (prop.attributeName === label) return prop;
    }
}
exports.getADPropBylabel = getADPropBylabel;

},{}],"hS6eW":[function(require,module,exports) {
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
exports.setCenterPosInContextGeo = void 0;
const getContextSpatial_1 = require("2a46b31a8a69c110");
const Constant_1 = require("b0260ed4135cf5f9");
const spinal_env_viewer_plugin_documentation_service_1 = require("22fe0d0c4ec58f3b");
const spinal_core_connectorjs_1 = require("1ec4512ebda47215");
const consumeBatch_1 = require("44a04927483814cb");
const getFragIds_1 = require("aba0512fa85bb61e");
const getWorldBoundingBox_1 = require("4b8731f0b7c2574");
const utils_1 = require("35acc1ad55318e4f");
function setCenterPosInContextGeo(graph, cb) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = yield (0, getContextSpatial_1.getContextSpatial)(graph);
        const relationNames = [
            Constant_1.GEO_SITE_RELATION,
            Constant_1.GEO_BUILDING_RELATION,
            Constant_1.GEO_FLOOR_RELATION,
            Constant_1.GEO_ZONE_RELATION,
            Constant_1.GEO_ROOM_RELATION
        ];
        const roomNodes = yield context.find(relationNames, (node)=>{
            return node.info.type.get() === Constant_1.GEO_ROOM_TYPE;
        });
        const roomArrProm = [];
        roomNodes.forEach((roomNode)=>{
            roomArrProm.push(()=>updateRoomPos(roomNode));
        });
        yield (0, consumeBatch_1.consumeBatch)(roomArrProm, 20, (i, total)=>cb(`1/3 room progress: ${i}/${total}`));
        const bimobjArrProm = [];
        const roomArrProm2 = roomNodes.map((roomNode)=>()=>updateBimObj(roomNode, context, bimobjArrProm));
        yield (0, consumeBatch_1.consumeBatch)(roomArrProm2, 20, (i, total)=>cb(`2/3 load bimObj progress: ${i}/${total}`));
        yield (0, consumeBatch_1.consumeBatch)(bimobjArrProm, 20, (i, total)=>cb(`3/3 bimObj update progress: ${i}/${total}`));
        cb(`done`);
    });
}
exports.setCenterPosInContextGeo = setCenterPosInContextGeo;
function updateRoomPos(roomNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const roomRefs = yield roomNode.getChildren(Constant_1.GEO_REFERENCE_ROOM_RELATION);
        let roomBbox = null;
        for (const roomRef of roomRefs)if (roomRef.info.dbid.get() > 0) {
            // get autodesk Model
            const model = (0, utils_1.getModelByBimFileIdLoaded)(roomRef.info.bimFileId.get());
            if (!model) {
                console.log(`${roomNode.info.name.get()}} skipped : model not loaded`);
                continue;
            }
            const fragIds = yield (0, getFragIds_1.getFragIds)(roomRef.info.dbid.get(), model);
            const bbox = (0, getWorldBoundingBox_1.getWorldBoundingBox)(fragIds, model);
            if (!roomBbox) roomBbox = bbox;
            else roomBbox.union(bbox);
        }
        if (roomBbox) {
            const centerRoom = new THREE.Vector3();
            roomBbox.getCenter(centerRoom);
            const attr = yield getCenterPosAttr(roomNode);
            attr.value.set(`${centerRoom.x};${centerRoom.y};${centerRoom.z}`);
        }
    });
}
function getCenterPosAttr(node) {
    return __awaiter(this, void 0, void 0, function*() {
        const categoryName = "Spatial";
        const label = "XYZ center";
        let category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(node, categoryName);
        if (!category) category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addCategoryAttribute(node, categoryName);
        const attrs = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
        for (const attr of attrs)if (attr.label.get() === label) {
            if (attr.value instanceof spinal_core_connectorjs_1.Val) attr.mod_attr("value", attr.value.get().toString());
            return attr;
        }
        return spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(node, category, label, "0;0;0");
    });
}
function updateBimObj(roomNode, context, res) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObjs = yield roomNode.getChildrenInContext(context);
        for (const bimObj of bimObjs)res.push(()=>__awaiter(this, void 0, void 0, function*() {
                const model = (0, utils_1.getModelByBimFileIdLoaded)(bimObj.info.bimFileId.get());
                if (!model) {
                    console.log(`${roomNode.info.name.get()}/${bimObj.info.name.get()} skipped : model not loaded`);
                    return;
                }
                const fragIds = yield (0, getFragIds_1.getFragIds)(bimObj.info.dbid.get(), model);
                const bbox = (0, getWorldBoundingBox_1.getWorldBoundingBox)(fragIds, model);
                const center = new THREE.Vector3();
                bbox.getCenter(center);
                const attr = yield getCenterPosAttr(bimObj);
                const str = `${center.x};${center.y};${center.z}`;
                attr.value.set(str);
            }));
    });
}

},{"2a46b31a8a69c110":"7eoNK","b0260ed4135cf5f9":"b3pAR","22fe0d0c4ec58f3b":"5rYVR","1ec4512ebda47215":"2uyD7","44a04927483814cb":"2wzJt","aba0512fa85bb61e":"9OSUv","4b8731f0b7c2574":"hGoCs","35acc1ad55318e4f":"2QtL3"}],"9OSUv":[function(require,module,exports) {
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
exports.getFragIds = void 0;
function getFragIds(dbId, model) {
    return new Promise((resolve, reject)=>{
        const it = model.getInstanceTree();
        const ids = [];
        it.enumNodeFragments(dbId, (res)=>{
            ids.push(res);
        }, false);
        // wait 1s or 2 if not yet done
        setTimeout(()=>{
            if (ids.length === 0) {
                setTimeout(()=>{
                    if (ids.length === 0) return reject();
                    resolve(ids);
                }, 1000);
                return;
            }
            resolve(ids);
        }, 500);
    });
}
exports.getFragIds = getFragIds;

},{}],"hGoCs":[function(require,module,exports) {
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
exports.getWorldBoundingBox = void 0;
function getWorldBoundingBox(fragIds, model) {
    const fragList = model.getFragmentList();
    const fragbBox = new window.THREE.Box3();
    const nodebBox = new window.THREE.Box3();
    fragIds.forEach(function(fragId) {
        fragList.getWorldBounds(fragId, fragbBox);
        nodebBox.union(fragbBox);
    });
    return nodebBox;
}
exports.getWorldBoundingBox = getWorldBoundingBox;

},{}],"2QtL3":[function(require,module,exports) {
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
__exportStar(require("907e6f845f854707"), exports);
__exportStar(require("2c424b28c345e7f4"), exports);
__exportStar(require("4844756b187b58f0"), exports);
__exportStar(require("9f54d174ae6e1e1a"), exports);
__exportStar(require("1b996da8688d1167"), exports);
__exportStar(require("2bc0b496a077aa2a"), exports);
__exportStar(require("7b18e0b6c80203d6"), exports);
__exportStar(require("75317378ef40bf67"), exports);
__exportStar(require("24233f5511502dcb"), exports);
__exportStar(require("b5c55ef56bdacb08"), exports);
__exportStar(require("c2f308c23365d226"), exports);
__exportStar(require("9977756cd236bb05"), exports);
__exportStar(require("8d6dacf7b0f48647"), exports);

},{"907e6f845f854707":"31vjO","2c424b28c345e7f4":"6301Z","4844756b187b58f0":"7eoNK","9f54d174ae6e1e1a":"9OSUv","1b996da8688d1167":"gp0sW","2bc0b496a077aa2a":"hGoCs","7b18e0b6c80203d6":"MYBU6","75317378ef40bf67":"j7UyN","24233f5511502dcb":"aiFRo","b5c55ef56bdacb08":"cHX8P","c2f308c23365d226":"c7mSl","9977756cd236bb05":"emWhR","8d6dacf7b0f48647":"7cAlu"}],"31vjO":[function(require,module,exports) {
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
__exportStar(require("a3fb66d3698a688b"), exports);
__exportStar(require("84f6ab83c26d954f"), exports);
__exportStar(require("d0d7805cb743cbb2"), exports);
__exportStar(require("9c4a21df56f45cf7"), exports);
__exportStar(require("187c70326296e3a1"), exports);
__exportStar(require("b7280d84240dccc5"), exports);
__exportStar(require("24d28247c3187ba9"), exports);
__exportStar(require("c799a99451e31782"), exports);
__exportStar(require("606e9e72c11a0739"), exports);
__exportStar(require("f074f52334f04993"), exports);
__exportStar(require("17152310198a0890"), exports);

},{"a3fb66d3698a688b":"9XZOf","84f6ab83c26d954f":"i4ABs","d0d7805cb743cbb2":"f4ySM","9c4a21df56f45cf7":"1Vsqm","187c70326296e3a1":"4Tsm1","b7280d84240dccc5":"fClU2","24d28247c3187ba9":"kN6dl","c799a99451e31782":"eN1Tf","606e9e72c11a0739":"aRVIK","f074f52334f04993":"gwMxK","17152310198a0890":"7Uou5"}],"f4ySM":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArchi = void 0;
const loadConfig_1 = require("47b380d5a14fe710");
const loadBimFile_1 = require("abc375da3a7531aa");
const createFctGetArchi_1 = __importDefault(require("ae9e2f5ceb3d1040"));
function getArchi(graph, configName, bimFile, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        // load config ny name
        const configModel = yield (0, loadConfig_1.loadConfig)(graph);
        const config = configModel.getConfig(configName);
        // load BIMFILE
        const model = yield (0, loadBimFile_1.loadBimFile)(bimFile, viewer);
        // get Archi
        const fct = (0, createFctGetArchi_1.default)(config.get());
        const modelArchi = yield model.getPropertyDb()// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .executeUserFunction(fct);
        return modelArchi;
    });
}
exports.getArchi = getArchi;

},{"47b380d5a14fe710":"j0Ghu","abc375da3a7531aa":"7CGtg","ae9e2f5ceb3d1040":"aI5bI"}],"1Vsqm":[function(require,module,exports) {
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
exports.getModType = void 0;
const IGetArchi_1 = require("1d11a5628faef57e");
function getModType(modificationType) {
    if (modificationType & IGetArchi_1.EModificationType.update) return IGetArchi_1.EModificationType.update;
    if (modificationType & IGetArchi_1.EModificationType.create) return IGetArchi_1.EModificationType.create;
    if (modificationType & IGetArchi_1.EModificationType.delete) return IGetArchi_1.EModificationType.delete;
    return IGetArchi_1.EModificationType.none;
}
exports.getModType = getModType;

},{"1d11a5628faef57e":"4W13A"}],"4Tsm1":[function(require,module,exports) {
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
exports.getNodeInfoArchiAttr = void 0;
function getNodeInfoArchiAttr(nodeInfo, propName) {
    for (const prop of nodeInfo.properties){
        if (prop.name === propName) return prop.value;
    }
}
exports.getNodeInfoArchiAttr = getNodeInfoArchiAttr;

},{}],"fClU2":[function(require,module,exports) {
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
exports.isInSkipList = void 0;
function isInSkipList(skipList, id, parentId) {
    if (parentId) return skipList.some((itm)=>itm.id === parentId || itm.id === id);
    return skipList.some((itm)=>itm.id === id);
}
exports.isInSkipList = isInSkipList;

},{}],"kN6dl":[function(require,module,exports) {
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
exports.serverIdArrToNodeIdArr = void 0;
const spinal_core_connectorjs_1 = require("bdd88383220ede72");
function serverIdArrToNodeIdArr(serverIds) {
    return serverIds.map((servId)=>{
        var _a, _b;
        return (_b = (_a = spinal_core_connectorjs_1.FileSystem._objects[servId]) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.id.get();
    });
}
exports.serverIdArrToNodeIdArr = serverIdArrToNodeIdArr;

},{"bdd88383220ede72":"2uyD7"}],"eN1Tf":[function(require,module,exports) {
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
exports.updateAttr = void 0;
const spinal_env_viewer_plugin_documentation_service_1 = require("cb01d4fedad8ca83");
const spinal_core_connectorjs_1 = require("aec26c31f650ee27");
function updateAttr(node, attrs) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!attrs || attrs && attrs.length === 0) return; // skip if nothing to update
        let cat = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(node, "Spatial");
        if (!cat) cat = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addCategoryAttribute(node, "Spatial");
        const attrsFromNode = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, cat);
        for (const attr of attrs){
            const attrFromNode = attrsFromNode.find((itm)=>itm.label.get() === attr.label);
            if (attrFromNode) {
                try {
                    if (attrFromNode.value instanceof spinal_core_connectorjs_1.Val) attrFromNode.mod_attr("value", attr.value);
                    else attrFromNode.value.set(attr.value);
                } catch (error) {
                    console.error(error);
                    console.log("err", node, {
                        label: attrFromNode.label,
                        value: attr.value
                    });
                }
                if (attr.unit) attrFromNode.unit.set(attr.unit);
            } else spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(node, cat, attr.label, attr.value.toString(), "", attr.unit);
        }
    });
}
exports.updateAttr = updateAttr;

},{"cb01d4fedad8ca83":"5rYVR","aec26c31f650ee27":"2uyD7"}],"aRVIK":[function(require,module,exports) {
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
exports.updateInfoByKey = void 0;
function updateInfoByKey(node, key, value) {
    try {
        if (typeof node.info[key] === "undefined") node.info.add_attr(key, value);
        else node.info[key].set(value);
    } catch (err) {
        console.error(err);
        console.log("err", node, {
            key,
            value
        });
    }
}
exports.updateInfoByKey = updateInfoByKey;

},{}],"gwMxK":[function(require,module,exports) {
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
exports.updateInfo = void 0;
const updateInfoByKey_1 = require("c392dc4c5735e1ef");
function updateInfo(node, info) {
    for(const key in info)if (Object.prototype.hasOwnProperty.call(info, key)) {
        const value = info[key];
        (0, updateInfoByKey_1.updateInfoByKey)(node, key, value);
    }
}
exports.updateInfo = updateInfo;

},{"c392dc4c5735e1ef":"aRVIK"}],"6301Z":[function(require,module,exports) {
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
exports.getBimContextByBimFileId = void 0;
const spinal_model_graph_1 = require("24b566d9cdb638f5");
const spinal_model_graph_2 = require("24b566d9cdb638f5");
const getBimFileByBimFileId_1 = require("1bf795f60c12a7ae");
const constant_1 = require("7e3a35b8faf0441e");
const createBimContextIt = new Map();
function getBimContextByBimFileId(bimFileId, doCreate = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimFile = yield (0, getBimFileByBimFileId_1.getBimFileByBimFileId)(bimFileId);
        const bimContexts = yield bimFile.getChildren(constant_1.BIMCONTEXT_RELATION_NAME);
        if (bimContexts.length > 0) return bimContexts[0];
        if (doCreate === true) {
            let it = createBimContextIt.get(bimFileId);
            if (!it) {
                it = _createBimContext(bimFile);
                createBimContextIt.set(bimFileId, it);
            }
            return (yield it.next()).value;
        }
    });
}
exports.getBimContextByBimFileId = getBimContextByBimFileId;
function _createBimContext(bimFile) {
    return __asyncGenerator(this, arguments, function* _createBimContext_1() {
        const bimContext = new spinal_model_graph_1.SpinalNode("BIMContext", "SpinalNode");
        yield __await(bimFile.addChild(bimContext, constant_1.BIMCONTEXT_RELATION_NAME, spinal_model_graph_2.SPINAL_RELATION_PTR_LST_TYPE));
        while(true)yield yield __await(bimContext);
    });
}

},{"24b566d9cdb638f5":"fkEXw","1bf795f60c12a7ae":"bgfSo","7e3a35b8faf0441e":"3AEx3"}],"3AEx3":[function(require,module,exports) {
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
exports.BIMCONTEXT_RELATION_NAME = exports.ARCHIVE_RELATION_NAME = exports.GENERATION_PROJECTION_TYPE = exports.GENERATION_GEO_TYPE = exports.GENERATION_RELATION = exports.GENERATION_TYPE = exports.GENERATION_CONTEXT_TYPE = exports.GENERATION_CONTEXT_NAME = exports.OVERLAY_SPHERES_PREVIEW_POSITION_NAME = exports.OVERLAY_LINES_PREVIEW_POSITION_NAME = exports.NOT_FOUND_DATE_TYPE = exports.CONTEXT_NOT_FOUND_RELATION = exports.CONTEXT_NOT_FOUND_TYPE = exports.CONTEXT_NOT_FOUND_NAME = exports.PROJECTION_CONFIG_RELATION_TYPE = exports.PROJECTION_CONFIG_RELATION = exports.PROJECTION_CONFIG_TYPE = void 0;
exports.PROJECTION_CONFIG_TYPE = "ProjectionConfig";
exports.PROJECTION_CONFIG_RELATION = "hasProjectionConfig";
var spinal_model_graph_1 = require("f1b768cd85f8bd81");
Object.defineProperty(exports, "PROJECTION_CONFIG_RELATION_TYPE", {
    enumerable: true,
    get: function() {
        return spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE;
    }
});
exports.CONTEXT_NOT_FOUND_NAME = "Projection Error";
exports.CONTEXT_NOT_FOUND_TYPE = "ProjectionError";
exports.CONTEXT_NOT_FOUND_RELATION = "ProjectionErrorHasDate";
exports.NOT_FOUND_DATE_TYPE = "ProjectionErrorDate";
exports.OVERLAY_LINES_PREVIEW_POSITION_NAME = "spinal-overlay-preview-position-line";
exports.OVERLAY_SPHERES_PREVIEW_POSITION_NAME = "spinal-overlay-preview-position-sphere";
exports.GENERATION_CONTEXT_NAME = "Generation Context";
exports.GENERATION_CONTEXT_TYPE = "GenerationContext";
exports.GENERATION_TYPE = "GenerationType";
exports.GENERATION_RELATION = "hasGeneration";
exports.GENERATION_GEO_TYPE = "ContextSpatial";
exports.GENERATION_PROJECTION_TYPE = "ProjectionSpatial";
exports.ARCHIVE_RELATION_NAME = "hasGenerationArchive";
exports.BIMCONTEXT_RELATION_NAME = "hasBimContext";

},{"f1b768cd85f8bd81":"fkEXw"}],"j7UyN":[function(require,module,exports) {
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
exports.guid = void 0;
function guid() {
    return `${s4()}-${s4()}-${s4()}-${Date.now().toString(16)}`;
}
exports.guid = guid;
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

},{}],"cHX8P":[function(require,module,exports) {
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
__exportStar(require("5feccecae34c5c55"), exports);
__exportStar(require("d32eb42ffcd3d0fb"), exports);
__exportStar(require("36bd221a325be69b"), exports);
__exportStar(require("a8636f3faf810e71"), exports);
__exportStar(require("9a76657bcf53f81b"), exports);
__exportStar(require("e88a6b3f00cd6d0d"), exports);
__exportStar(require("1b53aa26a6292f33"), exports);
__exportStar(require("2f4f5ca521ebec12"), exports);
__exportStar(require("df54455620ff66dd"), exports);
__exportStar(require("df549e3bb80e7019"), exports);
__exportStar(require("f58424c0cef1ccdd"), exports);
__exportStar(require("e5044822a9838c4b"), exports);
__exportStar(require("1b5fdc30b2322ac4"), exports);
__exportStar(require("e6946d7bd0a870d6"), exports);
__exportStar(require("ca1d1cda668ca79"), exports);
__exportStar(require("f4f2f2ab22cc1d09"), exports);

},{"5feccecae34c5c55":"cK2zJ","d32eb42ffcd3d0fb":"eOonW","36bd221a325be69b":"5QVLC","a8636f3faf810e71":"kRW4n","9a76657bcf53f81b":"jxYBg","e88a6b3f00cd6d0d":"ev9bs","1b53aa26a6292f33":"aLTS1","2f4f5ca521ebec12":"5dP2s","df54455620ff66dd":"lUmuX","df549e3bb80e7019":"9RDu2","f58424c0cef1ccdd":"jo8bm","e5044822a9838c4b":"2nCOY","1b5fdc30b2322ac4":"gBCuR","e6946d7bd0a870d6":"33BKm","ca1d1cda668ca79":"cCyX2","f4f2f2ab22cc1d09":"26kqv"}],"cK2zJ":[function(require,module,exports) {
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
exports.getBBoxAndMatrixs = void 0;
const getModelByModelId_1 = require("39f3c50a6d3c59ee");
const getBBoxAndMatrix_1 = require("ed510a738603a1ef");
function getBBoxAndMatrixs(current, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const prom = [];
        for (const item of current.itemToShow)if (typeof item.meshs === "undefined" || typeof item.bbox === "undefined") {
            const model = (0, getModelByModelId_1.getModelByModelId)(item.modelId);
            prom.push((0, getBBoxAndMatrix_1.getBBoxAndMatrix)(item.dbId, model, viewer).then(({ matrixWorld, bbox })=>{
                item.matrixWorld = matrixWorld;
                item.bbox = bbox;
            }));
        }
        yield Promise.all(prom);
    });
}
exports.getBBoxAndMatrixs = getBBoxAndMatrixs;

},{"39f3c50a6d3c59ee":"9RDu2","ed510a738603a1ef":"eOonW"}],"9RDu2":[function(require,module,exports) {
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
exports.getModelByModelId = void 0;
function getModelByModelId(modelId) {
    const mappingBimFileIdModelId = window.spinal.BimObjectService.mappingBimFileIdModelId;
    for(const bimFileId in mappingBimFileIdModelId)if (Object.prototype.hasOwnProperty.call(mappingBimFileIdModelId, bimFileId)) {
        const obj = mappingBimFileIdModelId[bimFileId];
        if (obj.modelId === modelId) for (const { model } of obj.modelScene){
            if (model.id === modelId) return model;
        }
    }
}
exports.getModelByModelId = getModelByModelId;

},{}],"eOonW":[function(require,module,exports) {
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
exports.getBBoxAndMatrix = void 0;
const getFragIds_1 = require("5ff2dfb74de9a83e");
const getModifiedWorldBoundingBox_1 = require("2e415fe83484366a");
function getBBoxAndMatrix(dbId, model, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const ids = yield (0, getFragIds_1.getFragIds)(dbId, model);
        const matrixWorld = viewer.impl.getRenderProxy(model, ids[0]).matrixWorld;
        const bbox = (0, getModifiedWorldBoundingBox_1.getModifiedWorldBoundingBox)(ids, model);
        return {
            matrixWorld: matrixWorld.clone(),
            bbox
        };
    });
}
exports.getBBoxAndMatrix = getBBoxAndMatrix;

},{"5ff2dfb74de9a83e":"9OSUv","2e415fe83484366a":"jo8bm"}],"jo8bm":[function(require,module,exports) {
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
exports.getModifiedWorldBoundingBox = void 0;
function getModifiedWorldBoundingBox(fragIds, model) {
    //fragments list array
    const fragList = model.getFragmentList();
    const fragbBox = new window.THREE.Box3();
    const nodebBox = new window.THREE.Box3();
    fragIds.forEach(function(fragId) {
        fragList.getWorldBounds(fragId, fragbBox);
        nodebBox.union(fragbBox);
    });
    return nodebBox;
}
exports.getModifiedWorldBoundingBox = getModifiedWorldBoundingBox;

},{}],"5QVLC":[function(require,module,exports) {
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
exports.getBimFileIdByModelId = void 0;
function getBimFileIdByModelId(modelId) {
    const mappingBimFileIdModelId = window.spinal.BimObjectService.mappingBimFileIdModelId;
    for(const bimFileId in mappingBimFileIdModelId)if (Object.prototype.hasOwnProperty.call(mappingBimFileIdModelId, bimFileId)) {
        const obj = mappingBimFileIdModelId[bimFileId];
        if (obj.modelId === modelId) for (const { model } of obj.modelScene){
            if (model.id === modelId) return bimFileId;
        }
    }
}
exports.getBimFileIdByModelId = getBimFileIdByModelId;

},{}],"kRW4n":[function(require,module,exports) {
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
exports.getBulkProperties = void 0;
const getModelByModelId_1 = require("ecc02594e3010bd7");
function getBulkProperties(model, dbIds, props = {
    propFilter: [
        "name",
        "externalId"
    ]
}) {
    let m;
    if (typeof model === "number") m = (0, getModelByModelId_1.getModelByModelId)(model);
    else m = model;
    return new Promise((resolve, reject)=>{
        m.getBulkProperties(Array.from(dbIds), props, (result)=>{
            const map = result.map((e)=>{
                return Object.assign(e, {
                    id: `${m.id}-${e.dbId}`,
                    modelId: m.id
                });
            });
            resolve(map);
        }, (err)=>reject(err));
    });
}
exports.getBulkProperties = getBulkProperties;

},{"ecc02594e3010bd7":"9RDu2"}],"jxYBg":[function(require,module,exports) {
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
exports.getDbIdChildren = void 0;
function getDbIdChildren(tree, id) {
    const res = [];
    tree.enumNodeChildren(id, (childId)=>{
        res.push(childId);
    });
    return res;
}
exports.getDbIdChildren = getDbIdChildren;

},{}],"ev9bs":[function(require,module,exports) {
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
exports.getLeafDbIdsByModelId = void 0;
const getModelByModelId_1 = require("3d20a7fe9c9e3a4d");
const getLeafDbIds_1 = require("a13d0fe7a7196a5c");
function getLeafDbIdsByModelId(modelId, dbIds) {
    const model = (0, getModelByModelId_1.getModelByModelId)(modelId);
    return (0, getLeafDbIds_1.getLeafDbIds)(model, dbIds).selection;
}
exports.getLeafDbIdsByModelId = getLeafDbIdsByModelId;

},{"3d20a7fe9c9e3a4d":"9RDu2","a13d0fe7a7196a5c":"5dP2s"}],"5dP2s":[function(require,module,exports) {
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
exports.getLeafDbIds = void 0;
const getDbIdChildren_1 = require("c31dc4925cd08d92");
function getLeafDbIds(model, rootId) {
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
        while(queue.length){
            const id = queue.pop();
            const children = (0, getDbIdChildren_1.getDbIdChildren)(tree, id);
            if (children.length > 0) queue.push(...children);
            else dbIds.push(id);
        }
    });
    return {
        model: model,
        selection: dbIds
    };
}
exports.getLeafDbIds = getLeafDbIds;

},{"c31dc4925cd08d92":"jxYBg"}],"aLTS1":[function(require,module,exports) {
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
exports.getLeafDbIdsByModel = void 0;
const getLeafDbIds_1 = require("4dadd572331b5a5c");
function getLeafDbIdsByModel(model, dbIds) {
    return (0, getLeafDbIds_1.getLeafDbIds)(model, dbIds).selection;
}
exports.getLeafDbIdsByModel = getLeafDbIdsByModel;

},{"4dadd572331b5a5c":"5dP2s"}],"lUmuX":[function(require,module,exports) {
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
exports.getModelByBimFileIdLoaded = void 0;
function getModelByBimFileIdLoaded(bimFileId) {
    const mappingBimFileIdModelId = window.spinal.BimObjectService.mappingBimFileIdModelId;
    if (Object.prototype.hasOwnProperty.call(mappingBimFileIdModelId, bimFileId)) {
        const obj = mappingBimFileIdModelId[bimFileId];
        for (const { model } of obj.modelScene)return model;
    }
}
exports.getModelByBimFileIdLoaded = getModelByBimFileIdLoaded;

},{}],"2nCOY":[function(require,module,exports) {
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
exports.getPointOffset = void 0;
function getPointOffset(orig, offset, matrixWorld) {
    const inverseMatrix = new THREE.Matrix4();
    const point = new THREE.Vector3(orig.x, orig.y, orig.z);
    const _offset = new THREE.Vector3(offset.x, offset.y, offset.z);
    inverseMatrix.getInverse(matrixWorld);
    point.applyMatrix4(inverseMatrix);
    point.add(_offset);
    point.applyMatrix4(matrixWorld);
    return point;
}
exports.getPointOffset = getPointOffset;

},{}],"gBCuR":[function(require,module,exports) {
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
exports.getPropItemFromPropPath = void 0;
const getBulkProperties_1 = require("3a43e907dde37ccb");
const getDbIdChildren_1 = require("91d2f4175782781");
function getPropItemFromPropPath(propPath, model) {
    return __awaiter(this, void 0, void 0, function*() {
        const tree = model.getInstanceTree();
        let currDbId = tree.nodeAccess.rootId;
        let lastFound;
        for (const nameProp of propPath){
            const childrenDbId = (0, getDbIdChildren_1.getDbIdChildren)(tree, currDbId);
            const childrenProps = yield (0, getBulkProperties_1.getBulkProperties)(model, childrenDbId);
            lastFound = childrenProps.find((itm)=>itm.name === nameProp);
            if (!lastFound) return undefined;
            currDbId = lastFound.dbId;
        }
        return lastFound ? lastFound : undefined;
    });
}
exports.getPropItemFromPropPath = getPropItemFromPropPath;

},{"3a43e907dde37ccb":"kRW4n","91d2f4175782781":"jxYBg"}],"33BKm":[function(require,module,exports) {
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
exports.getPropPath = void 0;
const getBulkProperties_1 = require("d2489edc7a0c8d64");
function getPropPath(dbId, model) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        const tree = model.getInstanceTree();
        const rootId = tree.nodeAccess.rootId;
        let currentDbId = dbId;
        while(currentDbId != rootId){
            const props = yield (0, getBulkProperties_1.getBulkProperties)(model, [
                currentDbId
            ], {
                propFilter: [
                    "name",
                    "externalId",
                    "parent"
                ]
            });
            const prop = props[0];
            res.push(prop.name);
            const p = prop.properties.find((p)=>p.attributeName === "parent");
            if (!p) return undefined;
            currentDbId = parseInt(p.displayValue);
        }
        return res.reverse();
    });
}
exports.getPropPath = getPropPath;

},{"d2489edc7a0c8d64":"kRW4n"}],"cCyX2":[function(require,module,exports) {
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
exports.isProjectionGroup = void 0;
const ProjectionGroup_1 = require("dd184b35e940ab4a");
function isProjectionGroup(item) {
    return item instanceof ProjectionGroup_1.ProjectionGroup;
}
exports.isProjectionGroup = isProjectionGroup;

},{"dd184b35e940ab4a":"4PJt3"}],"4PJt3":[function(require,module,exports) {
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
exports.ProjectionGroup = void 0;
const getBulkProperties_1 = require("239532c44d03eb25");
const getModelByModelId_1 = require("ebe98178bf2eedd3");
class ProjectionGroup {
    constructor(name){
        this.offset = {
            r: 0,
            t: 0,
            z: 0
        };
        this.uid = `${Date.now()}-${Math.round(Math.random() * 10000)}-${Math.round(Math.random() * 10000)}`;
        this.data = [];
        this.computedData = [];
        this.name = name;
    }
    getAndMergeSelection(viewer) {
        return __awaiter(this, void 0, void 0, function*() {
            viewer.getAggregateSelection((model, dbId)=>{
                const found = this.data.find((el)=>{
                    return el.modelId === model.id;
                });
                if (typeof found !== "undefined") {
                    if (!found.selection.includes(dbId)) found.selection.push(dbId);
                } else this.data.push({
                    modelId: model.id,
                    selection: [
                        dbId
                    ]
                });
            });
            yield this.updateComputed();
        });
    }
    updateComputed() {
        return __awaiter(this, void 0, void 0, function*() {
            const proms = [];
            for (const { modelId, selection } of this.data){
                if (selection.length === 0) continue;
                proms.push((0, getBulkProperties_1.getBulkProperties)(modelId, selection));
            }
            const tmpRes = yield Promise.all(proms);
            this.data = this.data.filter((obj)=>{
                return obj.selection.length !== 0;
            });
            this.computedData = [];
            for (const arr of tmpRes)for (const item of arr){
                Object.assign(item, {
                    uid: `${Date.now()}-${Math.round(Math.random() * 10000)}-${Math.round(Math.random() * 10000)}`
                });
                this.computedData.push(item);
            }
        });
    }
    deleteItem(item) {
        for (const { modelId, selection } of this.data)if (modelId === item.modelId) {
            const idx = selection.indexOf(item.dbId);
            if (idx !== -1) {
                selection.splice(idx, 1);
                return this.updateComputed();
            }
            return Promise.resolve();
        }
        return Promise.resolve();
    }
    selectItem(item, viewer) {
        for (const { modelId } of this.data)if (modelId === item.modelId) {
            const model = (0, getModelByModelId_1.getModelByModelId)(modelId);
            return viewer.select([
                item.dbId
            ], model);
        }
    }
    selectAll(viewer) {
        viewer.clearSelection();
        for (const { modelId, selection } of this.data){
            const model = (0, getModelByModelId_1.getModelByModelId)(modelId);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            model.selector.setSelection(selection, model);
        }
    }
}
exports.ProjectionGroup = ProjectionGroup;

},{"239532c44d03eb25":"kRW4n","ebe98178bf2eedd3":"9RDu2"}],"26kqv":[function(require,module,exports) {
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
exports.transformRtzToXyz = void 0;
function transformRtzToXyz(obj) {
    const angle = obj.t * Math.PI / 180;
    const x = obj.r * Math.cos(angle);
    const y = obj.r * Math.sin(angle);
    return {
        x,
        y,
        z: obj.z
    };
}
exports.transformRtzToXyz = transformRtzToXyz;

},{}],"c7mSl":[function(require,module,exports) {
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
exports.waitGetServerId = void 0;
const spinal_core_connectorjs_1 = require("b953520b1a845295");
function waitGetServerId(model) {
    if (typeof spinal_core_connectorjs_1.FileSystem._objects[model._server_id] !== "undefined") return Promise.resolve();
    return new Promise((resolve)=>{
        const inter = setInterval(()=>{
            if (typeof spinal_core_connectorjs_1.FileSystem._objects[model._server_id] !== "undefined") {
                clearInterval(inter);
                resolve();
            }
        }, 100);
    });
}
exports.waitGetServerId = waitGetServerId;

},{"b953520b1a845295":"2uyD7"}],"emWhR":[function(require,module,exports) {
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
exports.waitPathSendToHub = void 0;
function waitPathSendToHub(path) {
    return new Promise((resolve)=>{
        const inter = setInterval(()=>{
            if (path.remaining.get() === 0) {
                clearInterval(inter);
                resolve();
            }
        }, 100);
    });
}
exports.waitPathSendToHub = waitPathSendToHub;

},{}],"4LcRf":[function(require,module,exports) {
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
exports.setLevelInContextGeo = void 0;
const getContextSpatial_1 = require("2c0232512c429b2a");
// // uncomment to add Attr to refobjs
// import {
//   GEO_REFERENCE_RELATION,
//   GEO_REFERENCE_ROOM_RELATION,
// } from '../../Constant';
const spinal_env_viewer_plugin_documentation_service_1 = require("b95870a455f387d4");
const spinal_core_connectorjs_1 = require("ffe1b1e29cd67429");
function setLevelAttr(node, value) {
    return __awaiter(this, void 0, void 0, function*() {
        const categoryName = "Spatial";
        const label = "level";
        let category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(node, categoryName);
        if (!category) category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addCategoryAttribute(node, categoryName);
        const attrs = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
        for (const attr of attrs)if (attr.label.get() === label) {
            if (attr.value instanceof spinal_core_connectorjs_1.Val) attr.mod_attr("value", value);
            else attr.value.set(value);
            return;
        }
        spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(node, category, label, value);
    });
}
function setLevelInContextGeo(graph) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = yield (0, getContextSpatial_1.getContextSpatial)(graph);
        const buildings = yield context.getChildrenInContext(context);
        for (const building of buildings){
            const floors = yield building.getChildrenInContext(context);
            for (const floor of floors){
                const rooms = yield floor.getChildrenInContext(context);
                // // uncomment to add Attr to refobjs
                // const [floorRefObjs, rooms] = await Promise.all([
                //   floor.getChildren(GEO_REFERENCE_RELATION),
                //   floor.getChildrenInContext(context),
                // ]);
                const floorName = floor.info.name.get();
                const proms = [];
                // // uncomment to add Attr to refobjs
                // for (const floorRefObj of floorRefObjs) {
                //   proms.push(setLevelAttr(floorRefObj, floorName));
                // }
                for (const room of rooms)proms.push(setLevelAttr(room, floorName));
                yield Promise.all(proms);
            }
        }
    });
}
exports.setLevelInContextGeo = setLevelInContextGeo;

},{"2c0232512c429b2a":"7eoNK","b95870a455f387d4":"5rYVR","ffe1b1e29cd67429":"2uyD7"}],"7FDV7":[function(require,module,exports) {
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
exports.transformArchi = exports.parseUnit = void 0;
function parseUnit(str) {
    var _a;
    const data = (_a = /autodesk\.unit\.unit:(.+)-\d+\.\d+\.\d+/.exec(str)) === null || _a === void 0 ? void 0 : _a[1];
    return data ? data : str;
}
exports.parseUnit = parseUnit;
function returnNumberStr(value) {
    if (typeof value === "number") return Number.isInteger(value) ? value.toString() : value.toFixed(2);
    return value.toString();
}
function updatePropsUnitAndGetArea(props) {
    let res;
    for (const prop of props){
        if (prop.name === "area") res = prop;
        if (prop.dataTypeContext) prop.dataTypeContext = parseUnit(prop.dataTypeContext);
        if (typeof prop.value === "number") prop.value = returnNumberStr(prop.value);
    }
    return res;
}
/**
 * calculate Area & parse unit type
 * @export
 * @param {IGetArchi} archi
 */ function transformArchi(archi) {
    for(const floorExtId in archi)if (Object.prototype.hasOwnProperty.call(archi, floorExtId)) {
        const floorAchi = archi[floorExtId];
        let unitName = "squareMeter";
        let floorArea = 0;
        for(const roomExtId in floorAchi.children)if (Object.prototype.hasOwnProperty.call(floorAchi.children, roomExtId)) {
            const roomAchi = floorAchi.children[roomExtId];
            let roomArea = 0;
            for(const roomRefExtId in roomAchi.children)if (Object.prototype.hasOwnProperty.call(roomAchi.children, roomRefExtId)) {
                const roomRef = roomAchi.children[roomRefExtId];
                const prop = updatePropsUnitAndGetArea(roomRef.properties);
                if (prop) {
                    unitName = prop.dataTypeContext;
                    roomArea += parseFloat(prop.value);
                }
            }
            let roomProp = updatePropsUnitAndGetArea(roomAchi.properties.properties);
            if (!roomProp) {
                roomProp = {
                    name: "area",
                    value: returnNumberStr(roomArea),
                    dataTypeContext: unitName
                };
                roomAchi.properties.properties.push(roomProp);
            } else roomProp.value = returnNumberStr(roomArea);
            floorArea += roomArea;
        }
        // update strutures
        for(const extid in floorAchi.structures)if (Object.prototype.hasOwnProperty.call(floorAchi.structures, extid)) {
            const { properties } = floorAchi.structures[extid];
            updatePropsUnitAndGetArea(properties.properties);
        }
        let floorProp = updatePropsUnitAndGetArea(floorAchi.properties.properties);
        if (!floorProp) {
            floorProp = {
                name: "area",
                value: returnNumberStr(floorArea),
                dataTypeContext: unitName
            };
            floorAchi.properties.properties.push(floorProp);
        } else floorProp.value = returnNumberStr(floorArea);
    }
}
exports.transformArchi = transformArchi;

},{}],"12f9y":[function(require,module,exports) {
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
exports.updateDbIds = void 0;
const Constant_1 = require("26f2d2557fd15a0f");
const getBimContextByBimFileId_1 = require("7e2a25220f107266");
const getExternalIdMapping_1 = require("187ecdfdd3e7f245");
function updateDbIds(bimFileId, model) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimContext = yield (0, getBimContextByBimFileId_1.getBimContextByBimFileId)(bimFileId);
        if (typeof bimContext === "undefined") throw new Error("No BimOject found with this bimFileId");
        const map = yield (0, getExternalIdMapping_1.getExternalIdMapping)(model);
        const bimobjs = yield bimContext.getChildren(Constant_1.GEO_EQUIPMENT_RELATION);
        for (const bimobj of bimobjs)if (bimobj.info.bimFileId.get() === bimFileId) {
            const dbid = map[bimobj.info.externalId.get()];
            if (dbid) bimobj.info.dbid.set(dbid);
            else bimobj.info.dbid.set(-1);
        }
    });
}
exports.updateDbIds = updateDbIds;

},{"26f2d2557fd15a0f":"b3pAR","7e2a25220f107266":"6301Z","187ecdfdd3e7f245":"c0Xxv"}],"c0Xxv":[function(require,module,exports) {
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
exports.getExternalIdMapping = void 0;
function getExternalIdMapping(model) {
    return new Promise((resolve, reject)=>{
        model.getExternalIdMapping(resolve, reject);
    });
}
exports.getExternalIdMapping = getExternalIdMapping;

},{}],"flDVf":[function(require,module,exports) {
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
exports.updateRoomDbId = void 0;
const getContextSpatial_1 = require("ae541f50717d3191");
const Constant_1 = require("7d2777a34c806dfe");
function updateDbId(spinalNode) {
    if (typeof spinalNode.info.dbId !== "undefined") {
        if (typeof spinalNode.info.dbid === "undefined") {
            const dbid = spinalNode.info.dbId;
            spinalNode.info.rem_attr("dbId");
            spinalNode.info.add_attr("dbid", dbid);
        } else spinalNode.info.rem_attr("dbId");
    }
}
function updateRoomDbId(graph) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = yield (0, getContextSpatial_1.getContextSpatial)(graph);
        const buildings = yield context.getChildrenInContext(context);
        for (const building of buildings){
            const floors = yield building.getChildrenInContext(context);
            for (const floor of floors){
                const [floorRefObjs, rooms] = yield Promise.all([
                    floor.getChildren(Constant_1.GEO_REFERENCE_RELATION),
                    floor.getChildrenInContext(context)
                ]);
                for (const floorRefObj of floorRefObjs)updateDbId(floorRefObj);
                for (const room of rooms){
                    updateDbId(room);
                    const refsRoom = yield room.getChildren(Constant_1.GEO_REFERENCE_ROOM_RELATION);
                    for (const ref of refsRoom)updateDbId(ref);
                }
            }
        }
    });
}
exports.updateRoomDbId = updateRoomDbId;

},{"ae541f50717d3191":"7eoNK","7d2777a34c806dfe":"b3pAR"}],"eEPuU":[function(require,module,exports) {
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
__exportStar(require("489a6cd1bd47bd17"), exports);
__exportStar(require("292eee3413e319e1"), exports);
// export * from './generateCmdGeo/handleFloorUpdate';
// export * from './generateCmdGeo/handleFloorCmdNew';
__exportStar(require("2b900b2777e20ade"), exports);
__exportStar(require("23ce64669bed9657"), exports);
__exportStar(require("c99a581093fa24e"), exports);
__exportStar(require("29343324235c99e9"), exports);
__exportStar(require("58113905a96d0c0d"), exports);
__exportStar(require("770b8c3149199af5"), exports);
__exportStar(require("6fb8615c3c8e0fec"), exports);
__exportStar(require("553c87b95db57e79"), exports);
__exportStar(require("32695adb4d6342c8"), exports);

},{"489a6cd1bd47bd17":"3FnU2","292eee3413e319e1":"3vTe1","2b900b2777e20ade":"8hCUN","23ce64669bed9657":"4NKqN","c99a581093fa24e":"dC0Uy","29343324235c99e9":"j51dB","58113905a96d0c0d":"7queL","770b8c3149199af5":"kaL3f","6fb8615c3c8e0fec":"fCePx","553c87b95db57e79":"9XiCf","32695adb4d6342c8":"61gSG"}],"3FnU2":[function(require,module,exports) {
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
exports.consumeCmdGeo = void 0;
const spinal_model_graph_1 = require("e393f284ce7b7021");
const getContextSpatial_1 = require("e131a2ff9346963c");
const spinal_env_viewer_context_geographic_service_1 = require("1d201b212ec6dcbd");
const consumeBatch_1 = require("27373c673d3c3cb");
const updateAttr_1 = require("5780231b0e4d9189");
const updateInfo_1 = require("5abb683a46d96e10");
const updateInfoByKey_1 = require("721fd08bd207338");
const graphservice_1 = require("ae54b583dc852419");
const waitGetServerId_1 = require("75af6bff8a27f027");
const getBimContextByBimFileId_1 = require("9be23858761b3dd8");
const constant_1 = require("15e25285f848741a");
const Constant_1 = require("76d46131c6ae3827");
function consumeCmdGeo(cmds, nodeGenerationId, contextGenerationId, callbackProg, consumeBatchSize = 20) {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = (0, graphservice_1.getGraph)();
        const contextGeo = yield (0, getContextSpatial_1.getContextSpatial)(graph);
        const dico = {};
        recordDico(dico, contextGeo);
        const buildings = yield contextGeo.getChildrenInContext();
        buildings.forEach(recordDico.bind(null, dico));
        for(let index = 0; index < cmds.length; index++){
            const cmdArr = cmds[index];
            const proms = [];
            for (const cmd of cmdArr){
                if (cmd.type === "floor") proms.push(consumeNewUpdateCmd.bind(null, dico, cmd, contextGeo, spinal_env_viewer_context_geographic_service_1.addFloor));
                else if (cmd.type === "floorRef") proms.push(consumeNewUpdateRefCmd.bind(null, dico, cmd, spinal_env_viewer_context_geographic_service_1.REFERENCE_RELATION));
                else if (cmd.type === "floorRefDel") proms.push(consumeDeleteCmd.bind(null, dico, cmd, spinal_env_viewer_context_geographic_service_1.REFERENCE_RELATION));
                else if (cmd.type === "floorRoomDel") proms.push(consumeDeleteCmd.bind(null, dico, cmd, spinal_env_viewer_context_geographic_service_1.ROOM_RELATION, nodeGenerationId, contextGenerationId));
                else if (cmd.type === "room") proms.push(consumeNewUpdateCmd.bind(null, dico, cmd, contextGeo, spinal_env_viewer_context_geographic_service_1.addRoom));
                else if (cmd.type === "roomRef") proms.push(consumeNewUpdateRefCmd.bind(null, dico, cmd, spinal_env_viewer_context_geographic_service_1.REFERENCE_ROOM_RELATION));
                else if (cmd.type === "roomRefDel") proms.push(consumeDeleteCmd.bind(null, dico, cmd, spinal_env_viewer_context_geographic_service_1.REFERENCE_ROOM_RELATION));
                else if (cmd.type === "RefNode") proms.push(consumeRefNode.bind(null, dico, cmd, contextGeo));
            }
            yield (0, consumeBatch_1.consumeBatch)(proms, consumeBatchSize, (idx)=>{
                try {
                    if (callbackProg) callbackProg(index, idx);
                } catch (error) {
                    console.error(error);
                }
            });
        }
    });
}
exports.consumeCmdGeo = consumeCmdGeo;
function getBimContext(dico, bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimContext = dico[bimFileId];
        if (bimContext) return bimContext;
        dico[bimFileId] = new Promise((resolve, reject)=>{
            (0, getBimContextByBimFileId_1.getBimContextByBimFileId)(bimFileId, true).then((bimContext)=>resolve(bimContext)).catch(reject);
        });
        return dico[bimFileId];
    });
}
function consumeRefNode(dico, cmd, contextGeo) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeRef", cmd);
        const parentNode = dico[cmd.pNId];
        if (!parentNode) throw new Error(`ParentId for ${cmd.type} not found.`);
        // find id in parentChildren
        const children = yield parentNode.getChildrenInContext(contextGeo);
        const child = children.find((node)=>node.info.id.get() === cmd.id);
        recordDico(dico, child);
    });
}
function consumeDeleteCmd(dico, cmd, relationName, nodeGenerationId, contextGenerationId) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeDeleteCmd", cmd);
        const parentNode = dico[cmd.pNId];
        if (!parentNode) throw new Error(`ParentId for ${cmd.type} not found.`);
        const childrenNode = yield parentNode.getChildren(relationName);
        const nodesToDel = [];
        for (const id of cmd.nIdToDel){
            const refChild = childrenNode.find((itm)=>itm.info.id.get() === id);
            if (refChild) nodesToDel.push(refChild);
        }
        if (nodesToDel.length > 0) {
            if (nodeGenerationId) {
                const contextGeneration = (0, graphservice_1.getRealNode)(contextGenerationId);
                const nodeGeneration = (0, graphservice_1.getRealNode)(nodeGenerationId);
                const prom = nodesToDel.map((itm)=>{
                    return nodeGeneration.addChildInContext(itm, constant_1.ARCHIVE_RELATION_NAME, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, contextGeneration);
                });
                yield Promise.all(prom);
            }
            yield parentNode.removeChildren(nodesToDel, relationName, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
    });
}
function recordDico(dico, node) {
    dico[node.info.id.get()] = node;
}
function consumeNewUpdateCmd(dico, cmd, contextGeo, createMtd) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeNewUpdateCmd", cmd);
        const parentNode = dico[cmd.pNId];
        if (!parentNode) throw new Error(`ParentId for ${cmd.type} not found.`);
        // find id in parentChildren
        const children = yield parentNode.getChildrenInContext(contextGeo);
        let child = children.find((node)=>node.info.id.get() === cmd.id);
        if (!child) // id not found => create Child
        child = yield createMtd(contextGeo, parentNode, cmd.name, cmd.id);
        // update the floor with cmd!
        // update info
        (0, updateInfo_1.updateInfo)(child, cmd.info);
        yield (0, updateAttr_1.updateAttr)(child, cmd.attr); // update attr
        if (cmd.name) (0, updateInfoByKey_1.updateInfoByKey)(child, "name", cmd.name);
        recordDico(dico, child);
        yield removeFromContextGen(child);
        yield (0, waitGetServerId_1.waitGetServerId)(child);
    });
}
function removeFromContextGen(roomNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const parents = yield roomNode.getParents(constant_1.ARCHIVE_RELATION_NAME);
        yield Promise.all(parents.map((parent)=>{
            return parent.removeChild(roomNode, constant_1.ARCHIVE_RELATION_NAME, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }));
    });
}
function createOrUpdateBimObjByBimFileId(dico, id, bimFileId, name, dbId, externalId) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        const bimContext = yield getBimContext(dico, bimFileId);
        const bimobjs = yield bimContext.getChildren(Constant_1.GEO_EQUIPMENT_RELATION);
        if (externalId) {
            for (const bimObj of bimobjs)if (externalId === ((_a = bimObj.info.externalId) === null || _a === void 0 ? void 0 : _a.get())) {
                (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "name", name);
                (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "dbid", dbId);
                (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "bimFileId", bimFileId);
                (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "externalId", externalId);
                return bimObj;
            }
        }
        for (const bimObj of bimobjs)if (dbId === ((_b = bimObj.info.dbid) === null || _b === void 0 ? void 0 : _b.get())) {
            (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "name", name);
            (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "dbid", dbId);
            (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "bimFileId", bimFileId);
            (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "externalId", externalId);
            return bimObj;
        }
        const bimObj = new spinal_model_graph_1.SpinalNode(name, spinal_env_viewer_context_geographic_service_1.EQUIPMENT_TYPE);
        (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "name", name);
        (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "id", id);
        (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "dbid", dbId);
        (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "bimFileId", bimFileId);
        (0, updateInfoByKey_1.updateInfoByKey)(bimObj, "externalId", externalId);
        return bimContext.addChild(bimObj, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
    });
}
function consumeNewUpdateRefCmd(dico, cmd, relationName) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeNewUpdateRefCmd", cmd);
        const parentNode = dico[cmd.pNId];
        if (!parentNode) throw new Error(`ParentId for ${cmd.type} not found.`);
        // find id in parentChildren
        const children = yield parentNode.getChildren(relationName);
        let child = children.find((node)=>node.info.id.get() === cmd.id);
        if (!child) {
            // id not found => create Child
            child = yield createOrUpdateBimObjByBimFileId(dico, cmd.id, cmd.info.bimFileId, cmd.name, cmd.info.dbid, cmd.info.externalId);
            for (const c of children){
                if (c.info.id.get() === child.info.id.get()) return;
            }
            yield parentNode.addChild(child, relationName, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
        yield (0, waitGetServerId_1.waitGetServerId)(child);
    });
}

},{"e393f284ce7b7021":"fkEXw","e131a2ff9346963c":"7eoNK","1d201b212ec6dcbd":"5QjJf","27373c673d3c3cb":"2wzJt","5780231b0e4d9189":"eN1Tf","5abb683a46d96e10":"gwMxK","721fd08bd207338":"aRVIK","ae54b583dc852419":"MYBU6","75af6bff8a27f027":"c7mSl","9be23858761b3dd8":"6301Z","15e25285f848741a":"3AEx3","76d46131c6ae3827":"b3pAR"}],"3vTe1":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.consumeCmdProjection = void 0;
const spinal_model_graph_1 = require("7f627c5282f899d0");
const utils_1 = require("5b13e6304d16cbef");
const Constant_1 = require("4757b649db324b46");
const spinal_env_viewer_context_geographic_service_1 = require("b9aafbbe7b5fbcf3");
const spinal_env_viewer_plugin_documentation_service_1 = require("da9c8315619dc65f");
const consumeBatch_1 = require("68d248b27e2690d2");
const lodash_throttle_1 = __importDefault(require("2313cb9ea6e7f245"));
function consumeCmdProjection(cmds, nodeId, contextId, callbackProg, consumeBatchSize = 20) {
    return __awaiter(this, void 0, void 0, function*() {
        const contextGeneration = (0, utils_1.getRealNode)(contextId);
        const nodeGeneration = (0, utils_1.getRealNode)(nodeId);
        const warnNodeGen = getOrCreateGenOutNode(contextGeneration, nodeGeneration, "warn");
        const errorNodeGen = getOrCreateGenOutNode(contextGeneration, nodeGeneration, "error");
        const dico = {};
        const graph = (0, utils_1.getGraph)();
        const contextGeo = yield (0, utils_1.getContextSpatial)(graph);
        const cb = (0, lodash_throttle_1.default)(callbackProg, 100);
        recordDico(dico, contextGeo);
        yield contextGeo.find([
            Constant_1.GEO_SITE_RELATION,
            Constant_1.GEO_BUILDING_RELATION,
            Constant_1.GEO_FLOOR_RELATION,
            Constant_1.GEO_ROOM_RELATION,
            Constant_1.GEO_ZONE_RELATION
        ], (node)=>{
            if (node.info.type.get() === Constant_1.GEO_ROOM_TYPE) {
                recordDico(dico, node);
                return true;
            }
            return false;
        });
        if (callbackProg) callbackProg(10);
        const totalIteration = cmds.reduce((acc, cmd)=>{
            return acc + cmd.data.length;
        }, 0);
        const proms = [];
        let totalIt = 0;
        for(let idx = 0; idx < cmds.length; idx++){
            const cmd = cmds[idx];
            const bimContext = yield getBimContext(dico, cmd.bimFileId);
            const bimobjs = yield bimContext.getChildren(Constant_1.GEO_EQUIPMENT_RELATION);
            if (isCmdProj(cmd)) proms.push(consumeCmdProj.bind(this, dico, cmd, contextGeo, ()=>{
                cb(++totalIt / totalIteration * 90 + 10);
            }, bimContext, bimobjs, warnNodeGen, contextGeneration));
            else proms.push(consumeCmdMissingProj.bind(this, errorNodeGen, contextGeo, cmd, bimContext, bimobjs, contextGeneration, ()=>{
                cb(++totalIt / totalIteration * 90 + 10);
            }));
        }
        yield (0, consumeBatch_1.consumeBatch)(proms, consumeBatchSize);
    });
}
exports.consumeCmdProjection = consumeCmdProjection;
function getOrCreateGenOutNode(contextGeneration, nodeGeneration, type) {
    return __asyncGenerator(this, arguments, function* getOrCreateGenOutNode_1() {
        let resNode;
        const nodes = yield __await(nodeGeneration.getChildrenInContext(contextGeneration));
        for (const node of nodes){
            if (type === "warn" && node.info.name.get() === "warn") resNode = node;
            else if (type === "error" && node.info.name.get() === "error") resNode = node;
        }
        if (!resNode) {
            resNode = new spinal_model_graph_1.SpinalNode(type, `GenerationContextType`);
            nodeGeneration.addChildInContext(resNode, "hasGenerationContextType", spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, contextGeneration);
        }
        const children = yield __await(resNode.getChildrenInContext(contextGeneration));
        while(true)yield yield __await({
            node: resNode,
            children
        });
    });
}
function consumeCmdMissingProj(errorGen, contextGeo, cmd, bimContext, bimobjs, contextGeneration, callbackProg) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeCmdMissingProj", cmd);
        const nodeGeneration = (yield errorGen.next()).value;
        for (const obj of cmd.data){
            if (spinal.SHOW_LOG_GENERATION) console.log(" => ", obj);
            let child = nodeGeneration.children.find((node)=>node.info.externalId.get() === obj.externalId);
            if (child) updateBimObjInfo(child, obj.name, obj.dbid, cmd.bimFileId, obj.externalId);
            else {
                child = yield createOrUpdateBimObj(bimContext, bimobjs, cmd.bimFileId, obj.name, obj.dbid, obj.externalId);
                yield nodeGeneration.node.addChildInContext(child, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, contextGeneration);
                yield updateRevitCategory(child, obj.revitCat, obj.centerPos);
            }
            yield removeOtherParents(child, contextGeo, "");
            yield removeOtherParents(child, contextGeneration, nodeGeneration.node.info.id.get());
            yield (0, utils_1.waitGetServerId)(child);
            if (callbackProg) callbackProg();
        }
    });
}
function consumeCmdProj(dico, cmd, contextGeo, callbackProg, bimContext, bimobjs, warnGen, contextGeneration) {
    return __awaiter(this, void 0, void 0, function*() {
        if (spinal.SHOW_LOG_GENERATION) console.log("consumeCmdProj", cmd);
        const parentNode = yield getFromDico(dico, cmd.pNId);
        if (!parentNode) throw new Error(`ParentId for ${cmd.type} not found.`);
        const children = yield parentNode.getChildrenInContext(contextGeo);
        for (const obj of cmd.data){
            if (spinal.SHOW_LOG_GENERATION) console.log(" => ", obj);
            let child = children.find((node)=>node.info.externalId.get() === obj.externalId);
            if (child) updateBimObjInfo(child, obj.name, obj.dbid, cmd.bimFileId, obj.externalId);
            else {
                child = yield createOrUpdateBimObj(bimContext, bimobjs, cmd.bimFileId, obj.name, obj.dbid, obj.externalId);
                yield parentNode.addChildInContext(child, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, contextGeo);
            }
            yield removeOtherParents(child, contextGeo, parentNode.info.id.get());
            yield removeOtherParents(child, contextGeneration, "");
            yield updateRevitCategory(child, obj.revitCat, obj.centerPos);
            if (obj.flagWarining) {
                const nodeGeneration = (yield warnGen.next()).value;
                let childGen = nodeGeneration.children.find((node)=>node.info.externalId.get() === obj.externalId);
                if (!childGen) {
                    childGen = yield createOrUpdateBimObj(bimContext, bimobjs, cmd.bimFileId, obj.name, obj.dbid, obj.externalId);
                    yield nodeGeneration.node.addChildInContext(childGen, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, contextGeneration);
                }
                yield removeOtherParents(child, contextGeneration, nodeGeneration.node.info.id.get());
            }
            yield (0, utils_1.waitGetServerId)(child);
            if (callbackProg) callbackProg();
        }
    });
}
function updateRevitCategory(child, revitCat, centerPos) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!revitCat) return;
        let cat = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(child, "Spatial");
        if (!cat) cat = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addCategoryAttribute(child, "Spatial");
        const attrsFromNode = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(child, cat);
        const revitCatAttr = attrsFromNode.find((itm)=>itm.label.get() === "revit_category");
        if (revitCatAttr) revitCatAttr.value.set(revitCat);
        else spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(child, cat, "revit_category", revitCat, "", "");
        if (centerPos) {
            const centerPosAttr = attrsFromNode.find((itm)=>itm.label.get() === "XYZ center");
            if (centerPosAttr) centerPosAttr.value.set(centerPos);
            else spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategory(child, cat, "XYZ center", centerPos, "", "");
        }
    });
}
function removeOtherParents(child, context, parentNodeId) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const parents = yield child.getParentsInContext(context);
        const toRm = [];
        try {
            for (const otherParent of parents)if (otherParent.info.id.get() !== parentNodeId) toRm.push(otherParent);
            for (const obj of toRm){
                if ((_a = obj.children.LstPtr) === null || _a === void 0 ? void 0 : _a[Constant_1.GEO_EQUIPMENT_RELATION]) try {
                    yield obj.removeChild(child, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_LST_PTR_TYPE);
                } catch (e) {
                    yield obj.removeChild(child, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
                }
                else yield obj.removeChild(child, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
            }
        } catch (error) {
            console.error(error);
            console.log("trying to removeOtherParents", {
                child,
                context,
                parentNodeId
            });
        }
    });
}
function recordDico(dico, node) {
    dico[node.info.id.get()] = Promise.resolve(node);
}
function getFromDico(dico, id) {
    return dico[id];
}
function isCmdProj(item) {
    return item.type === "CmdProjection";
}
function getBimContext(dico, bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimContext = getFromDico(dico, bimFileId);
        if (bimContext) return bimContext;
        dico[bimFileId] = new Promise((resolve, reject)=>{
            (0, utils_1.getBimContextByBimFileId)(bimFileId, true).then((bimContext)=>resolve(bimContext)).catch(reject);
        });
        return getFromDico(dico, bimFileId);
    });
}
function createOrUpdateBimObj(bimContext, bimobjs, bimFileId, name, dbid, externalId) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        if (externalId) {
            for (const bimObj of bimobjs)if (externalId === ((_a = bimObj.info.externalId) === null || _a === void 0 ? void 0 : _a.get())) {
                updateBimObjInfo(bimObj, name, dbid, bimFileId, externalId);
                return bimObj;
            }
        }
        for (const bimObj of bimobjs)if (dbid === ((_b = bimObj.info.dbid) === null || _b === void 0 ? void 0 : _b.get())) {
            updateBimObjInfo(bimObj, name, dbid, bimFileId, externalId);
            return bimObj;
        }
        const bimObj = new spinal_model_graph_1.SpinalNode(name, spinal_env_viewer_context_geographic_service_1.EQUIPMENT_TYPE);
        updateBimObjInfo(bimObj, name, dbid, bimFileId, externalId);
        return bimContext.addChild(bimObj, Constant_1.GEO_EQUIPMENT_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
    });
}
function updateBimObjInfo(bimObj, name, dbid, bimFileId, externalId) {
    (0, utils_1.updateInfoByKey)(bimObj, "name", name);
    (0, utils_1.updateInfoByKey)(bimObj, "dbid", dbid);
    (0, utils_1.updateInfoByKey)(bimObj, "bimFileId", bimFileId);
    (0, utils_1.updateInfoByKey)(bimObj, "externalId", externalId);
}

},{"7f627c5282f899d0":"fkEXw","5b13e6304d16cbef":"2QtL3","4757b649db324b46":"b3pAR","b9aafbbe7b5fbcf3":"5QjJf","da9c8315619dc65f":"5rYVR","68d248b27e2690d2":"2wzJt","2313cb9ea6e7f245":"bGJVT"}],"8hCUN":[function(require,module,exports) {
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
exports.generateCmdGeo = void 0;
const spinal_core_connectorjs_1 = require("63d0f0bbe85e5f59");
const IGetArchi_1 = require("401279c631c6361c");
const getModType_1 = require("2668f14e0a93abef");
const isInSkipList_1 = require("5d32ee360919b081");
const handleFloorCmdNew_1 = require("84499f06eae2dc6d");
const handleFloorUpdate_1 = require("567b5ecff72abeac");
const spinal_env_viewer_context_geographic_service_1 = require("e21bd6d0a5b2cb2");
function generateCmdGeo(data, skipList, buildingServerId, bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        const dataToDo = [];
        const buildingNode = spinal_core_connectorjs_1.FileSystem._objects[buildingServerId];
        const refContext = yield (0, spinal_env_viewer_context_geographic_service_1.getOrCreateRefContext)(spinal_env_viewer_context_geographic_service_1.ROOM_REFERENCE_CONTEXT);
        for (const floorData of data){
            if ((0, isInSkipList_1.isInSkipList)(skipList, floorData.floorArchi.properties.externalId)) continue;
            switch((0, getModType_1.getModType)(floorData.floorArchi.properties.modificationType)){
                case IGetArchi_1.EModificationType.update:
                case IGetArchi_1.EModificationType.none:
                    if (!floorData.diff) console.warn(`${floorData.floorArchi.properties.externalId} got update modification type but no Diff object`);
                    else yield (0, handleFloorUpdate_1.handleFloorUpdate)(floorData, buildingNode, dataToDo, skipList, bimFileId, refContext);
                    break;
                case IGetArchi_1.EModificationType.create:
                    yield (0, handleFloorCmdNew_1.handleFloorCmdNew)(floorData, buildingNode, bimFileId, dataToDo, skipList, refContext);
                    break;
                default:
                    break;
            }
        }
        return dataToDo;
    });
}
exports.generateCmdGeo = generateCmdGeo;

},{"63d0f0bbe85e5f59":"2uyD7","401279c631c6361c":"4W13A","2668f14e0a93abef":"1Vsqm","5d32ee360919b081":"fClU2","84499f06eae2dc6d":"TuZrQ","567b5ecff72abeac":"5ZUYP","e21bd6d0a5b2cb2":"5QjJf"}],"TuZrQ":[function(require,module,exports) {
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
exports.getRefCmd = exports.getRoomCmd = exports.getRoomFromRefByName = exports.handleFloorCmdNew = void 0;
const transformArchi_1 = require("8e46c1545e2256e4");
const guid_1 = require("bc6ef65707c31fcb");
const isInSkipList_1 = require("46646eb6a59383ed");
const Constant_1 = require("7a68007406117e47");
function handleFloorCmdNew(floorData, buildingNode, bimFileId, dataToDo, skipList, refContext) {
    return __awaiter(this, void 0, void 0, function*() {
        const floorCmd = getFloorCmdNew(floorData, buildingNode, bimFileId);
        dataToDo.push([
            floorCmd
        ]);
        // floor ref structs
        const floorRefCmds = getFloorRefCmdNew(floorData.floorArchi.structures, floorCmd.id, bimFileId, "floorRef");
        // rooms
        const { roomCmds, roomRefCmds } = yield getFloorRoomsCmdNew(floorData, floorCmd, bimFileId, skipList, refContext);
        const floorRefAndRoomCmds = floorRefCmds.concat(roomCmds);
        if (floorRefAndRoomCmds.length > 0) dataToDo.push(floorRefAndRoomCmds);
        if (roomRefCmds.length > 0) dataToDo.push(roomRefCmds);
    });
}
exports.handleFloorCmdNew = handleFloorCmdNew;
function getFloorRoomsCmdNew(floorData, floorCmd, bimFileId, skipList, refContext) {
    return __awaiter(this, void 0, void 0, function*() {
        const roomCmds = [];
        const roomRefCmds = [];
        for(const floorExtId in floorData.floorArchi.children)if (Object.prototype.hasOwnProperty.call(floorData.floorArchi.children, floorExtId)) {
            const roomArchi = floorData.floorArchi.children[floorExtId];
            if ((0, isInSkipList_1.isInSkipList)(skipList, roomArchi.properties.externalId)) continue;
            yield getRoomCmd(roomArchi, floorCmd.id, bimFileId, roomCmds, roomRefCmds, refContext);
        }
        return {
            roomCmds,
            roomRefCmds
        };
    });
}
function getRoomFromRefByName(refContext, name) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield refContext.getChildren(Constant_1.GEO_ROOM_RELATION);
        for (const child of children){
            if (child.info.name.get() === name) return child;
        }
    });
}
exports.getRoomFromRefByName = getRoomFromRefByName;
function getRoomCmd(roomArchi, pNId, bimFileId, roomCmds, roomRefCmds, refContext) {
    return __awaiter(this, void 0, void 0, function*() {
        let name = "";
        let number = undefined;
        const attr = roomArchi.properties.properties.map((itm)=>{
            if (itm.name === "name") name = itm.value;
            if (itm.name === "number") number = itm.value;
            return {
                label: itm.name,
                value: itm.value,
                unit: (0, transformArchi_1.parseUnit)(itm.dataTypeContext)
            };
        });
        name = number ? `${number}-${name}` : name;
        const node = yield getRoomFromRefByName(refContext, name);
        const id = node ? node.info.id.get() : (0, guid_1.guid)();
        const roomCmd = {
            pNId,
            id,
            type: "room",
            name,
            info: {
                dbid: roomArchi.properties.dbId,
                externalId: roomArchi.properties.externalId,
                bimFileId
            },
            attr
        };
        roomCmds.push(roomCmd);
        roomArchi.children.forEach((nodeInfo)=>{
            const roomRefCmd = getRefCmd(nodeInfo, roomCmd.id, "roomRef", bimFileId);
            roomRefCmds.push(roomRefCmd);
        });
    });
}
exports.getRoomCmd = getRoomCmd;
function getFloorRefCmdNew(structures, floorId, bimFileId, type) {
    const refObjs = [];
    for(const RefExtId in structures)if (Object.prototype.hasOwnProperty.call(structures, RefExtId)) {
        const { properties } = structures[RefExtId];
        const struct = getRefCmd(properties, floorId, type, bimFileId);
        refObjs.push(struct);
    }
    return refObjs;
}
function getRefCmd(properties, pNId, type, bimFileId) {
    let name = "";
    properties.properties.forEach((itm)=>{
        if (itm.name === "name") name = itm.value;
    });
    return {
        pNId,
        id: (0, guid_1.guid)(),
        type,
        name,
        info: {
            dbid: properties.dbId,
            externalId: properties.externalId,
            bimFileId
        }
    };
}
exports.getRefCmd = getRefCmd;
function getFloorCmdNew(floorData, buildingNode, bimFileId) {
    const info = {
        dbid: floorData.floorArchi.properties.dbId,
        externalId: floorData.floorArchi.properties.externalId,
        bimFileId
    };
    let name = "";
    const attr = floorData.floorArchi.properties.properties.map((itm)=>{
        if (itm.name === "name") name = itm.value;
        return {
            label: itm.name,
            value: itm.value,
            unit: (0, transformArchi_1.parseUnit)(itm.dataTypeContext)
        };
    });
    return {
        pNId: buildingNode.info.id.get(),
        id: (0, guid_1.guid)(),
        type: "floor",
        name,
        info,
        attr
    };
}

},{"8e46c1545e2256e4":"7FDV7","bc6ef65707c31fcb":"j7UyN","46646eb6a59383ed":"fClU2","7a68007406117e47":"b3pAR"}],"5ZUYP":[function(require,module,exports) {
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
exports.handleFloorUpdate = void 0;
const spinal_core_connectorjs_1 = require("c21eb8101a738665");
const isInSkipList_1 = require("7fad9509a770469d");
const handleFloorCmdNew_1 = require("350513bec5409a67");
const transformArchi_1 = require("447b5b161f3d13f7");
const guid_1 = require("e81beb5356bae5b");
const getNodeInfoArchiAttr_1 = require("3eb3c6801468a7f");
const serverIdArrToNodeIdArr_1 = require("fe95c068a8e4a752");
const spinal_env_viewer_context_geographic_service_1 = require("73f3328f7ccba856");
function handleFloorUpdate(floorData, buildingNode, dataToDo, skipList, bimFileId, refContext) {
    return __awaiter(this, void 0, void 0, function*() {
        const floorNode = spinal_core_connectorjs_1.FileSystem._objects[floorData.floorArchi.properties.spinalnodeServerId];
        const floorCmd = getFloorCmdUp(floorData, buildingNode, floorNode);
        dataToDo.push([
            floorCmd
        ]);
        const floorCmds = [];
        if (floorData.diff.diffRef.delBimObj.length > 0) {
            const delBimObj = {
                pNId: floorNode.info.id.get(),
                type: "floorRefDel",
                nIdToDel: (0, serverIdArrToNodeIdArr_1.serverIdArrToNodeIdArr)(floorData.diff.diffRef.delBimObj)
            };
            floorCmds.push(delBimObj);
        }
        const roomDelServerId = floorData.diff.diffRoom.delRooms.filter((itm)=>!(0, isInSkipList_1.isInSkipList)(skipList, itm));
        if (roomDelServerId.length > 0) {
            const floorRoomDel = {
                pNId: floorNode.info.id.get(),
                type: "floorRoomDel",
                nIdToDel: (0, serverIdArrToNodeIdArr_1.serverIdArrToNodeIdArr)(roomDelServerId)
            };
            floorCmds.push(floorRoomDel);
        }
        if (floorCmds.length > 0) dataToDo.push(floorCmds);
        const floorRefCmd = getFloorRefCmd(floorData, floorNode, bimFileId);
        const roomCmds = [], roomRefCmds = [];
        floorData.diff.diffRoom.newRooms.forEach((roomArchi)=>{
            if (!(0, isInSkipList_1.isInSkipList)(skipList, roomArchi.properties.externalId)) (0, handleFloorCmdNew_1.getRoomCmd)(roomArchi, floorNode.info.id.get(), bimFileId, roomCmds, roomRefCmds, refContext);
        });
        yield getRoomCmdUp(floorData, floorNode, roomCmds, bimFileId, roomRefCmds, skipList);
        const floorRefAndRoomCmds = floorRefCmd.concat(roomCmds);
        if (floorRefAndRoomCmds.length > 0) dataToDo.push(floorRefAndRoomCmds);
        if (roomRefCmds.length > 0) dataToDo.push(roomRefCmds);
    });
}
exports.handleFloorUpdate = handleFloorUpdate;
function getRoomCmdUp(floorData, floorNode, roomCmds, bimFileId, roomRefCmds, skipList) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const updatedRoomSet = new Set();
        floorData.diff.diffRoom.newRooms.forEach((roomArchi)=>{
            updatedRoomSet.add(roomArchi.properties.externalId);
        });
        for (const { diff, roomArchi } of floorData.diff.diffRoom.updateRooms){
            updatedRoomSet.add(roomArchi.properties.externalId);
            if ((0, isInSkipList_1.isInSkipList)(skipList, roomArchi.properties.externalId)) continue;
            const { name, attr, info } = getRoomNameAndAttr(roomArchi, diff);
            const roomNode = spinal_core_connectorjs_1.FileSystem._objects[roomArchi.properties.spinalnodeServerId];
            const roomCmd = {
                pNId: floorNode.info.id.get(),
                id: ((_a = roomNode === null || roomNode === void 0 ? void 0 : roomNode.info.id) === null || _a === void 0 ? void 0 : _a.get()) || (0, guid_1.guid)(),
                type: "room",
                name,
                info,
                attr
            };
            roomCmds.push(roomCmd);
            roomArchi.children.forEach((nodeInfo)=>{
                const roomRefCmd = (0, handleFloorCmdNew_1.getRefCmd)(nodeInfo, roomCmd.id, "roomRef", bimFileId);
                roomRefCmds.push(roomRefCmd);
            });
        }
        const proms = [];
        for(const roomExtId in floorData.floorArchi.children)if (Object.prototype.hasOwnProperty.call(floorData.floorArchi.children, roomExtId)) {
            const roomArchi = floorData.floorArchi.children[roomExtId];
            if (updatedRoomSet.has(roomExtId)) continue;
            if ((0, isInSkipList_1.isInSkipList)(skipList, roomExtId)) continue;
            // get realNode
            const roomNode = spinal_core_connectorjs_1.FileSystem._objects[roomArchi.properties.spinalnodeServerId];
            if (!roomNode) continue;
            proms.push(roomNode.getChildren(spinal_env_viewer_context_geographic_service_1.REFERENCE_ROOM_RELATION).then((children)=>{
                var _a;
                return {
                    children,
                    roomArchi,
                    roomCmd: {
                        pNId: floorNode.info.id.get(),
                        id: ((_a = roomNode === null || roomNode === void 0 ? void 0 : roomNode.info.id) === null || _a === void 0 ? void 0 : _a.get()) || (0, guid_1.guid)(),
                        type: "RefNode"
                    }
                };
            }));
        }
        const cmds = yield Promise.all(proms);
        for (const { children, roomCmd, roomArchi } of cmds){
            const roomRefCmds2 = [];
            const refsToRm = [];
            // check child to remove
            for (const child of children){
                let found = false;
                for (const nodeInfo of roomArchi.children)if (child.info.dbid.get() === nodeInfo.dbId && child.info.bimFileId.get() === bimFileId) {
                    found = true;
                    break;
                }
                if (found === false) refsToRm.push(child.info.externalId.get());
            }
            roomArchi.children.forEach((nodeInfo)=>{
                // check if it exist
                for (const child of children){
                    if (child.info.externalId.get() === nodeInfo.externalId) return;
                }
                // if not exist add to list createRef
                const roomRefCmd = (0, handleFloorCmdNew_1.getRefCmd)(nodeInfo, roomCmd.id, "roomRef", bimFileId);
                roomRefCmds2.push(roomRefCmd);
            });
            if (refsToRm.length > 0 || roomRefCmds2.length > 0) {
                roomCmds.push(roomCmd);
                if (refsToRm.length > 0) roomRefCmds.push({
                    pNId: roomCmd.id,
                    type: "roomRefDel",
                    nIdToDel: refsToRm
                });
                if (roomRefCmds2.length > 0) roomRefCmds.push(...roomRefCmds2);
            }
        }
    });
}
function getRoomName(roomArchi, diff) {
    for (const infoObj of diff.diffInfo){
        if (infoObj.label === "name") return infoObj.archiValue;
    }
    const name = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(roomArchi.properties, "name");
    const number = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(roomArchi.properties, "number");
    return number ? `${number}-${name}` : name;
}
function getRoomNameAndAttr(roomArchi, diff) {
    const name = getRoomName(roomArchi, diff);
    const info = {};
    for (const diffInfo of diff.diffInfo)info[diffInfo.label] = diffInfo.archiValue;
    const attr = diff.diffAttr.map((itm)=>{
        return {
            label: itm.label,
            value: itm.archiValue,
            unit: (0, transformArchi_1.parseUnit)(itm.unit)
        };
    });
    return {
        name,
        attr,
        info
    };
}
function getFloorRefCmd(floorData, floorNode, bimFileId) {
    const floorRefCmd = [];
    for (const strucNodeInfo of floorData.diff.diffRef.newBimObj){
        let name = "";
        strucNodeInfo.properties.forEach((itm)=>{
            if (itm.name === "name") name = itm.value;
        });
        floorRefCmd.push({
            pNId: floorNode.info.id.get(),
            id: (0, guid_1.guid)(),
            type: "floorRef",
            name,
            info: {
                dbid: strucNodeInfo.dbId,
                externalId: strucNodeInfo.externalId,
                bimFileId
            }
        });
    }
    return floorRefCmd;
}
function getFloorName(floorData) {
    for (const infoObj of floorData.diff.diffInfo.diffInfo){
        if (infoObj.label === "name") return infoObj.archiValue;
    }
    return (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(floorData.floorArchi.properties, "name");
}
function getFloorCmdUp(floorData, buildingNode, floorNode) {
    var _a;
    const info = {};
    for (const diffInfo of floorData.diff.diffInfo.diffInfo)info[diffInfo.label] = diffInfo.archiValue;
    const name = getFloorName(floorData);
    const attr = floorData.diff.diffInfo.diffAttr.map((itm)=>{
        return {
            label: itm.label,
            value: itm.archiValue,
            unit: (0, transformArchi_1.parseUnit)(itm.unit)
        };
    });
    const floorCmd = {
        type: "floor",
        pNId: buildingNode.info.id.get(),
        id: (_a = floorNode === null || floorNode === void 0 ? void 0 : floorNode.info.id) === null || _a === void 0 ? void 0 : _a.get(),
        name,
        info,
        attr
    };
    if (name === "") Object.assign(floorCmd, {
        name
    });
    return floorCmd;
}

},{"c21eb8101a738665":"2uyD7","7fad9509a770469d":"fClU2","350513bec5409a67":"TuZrQ","447b5b161f3d13f7":"7FDV7","e81beb5356bae5b":"j7UyN","3eb3c6801468a7f":"4Tsm1","fe95c068a8e4a752":"kN6dl","73f3328f7ccba856":"5QjJf"}],"4NKqN":[function(require,module,exports) {
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
exports.createCmdNotFound = void 0;
const getBulkProperties_1 = require("8895279892c0ad4");
const getDiffSelection_1 = require("59b517267426bb90");
const createCmdNotFoundItm_1 = require("cd154cc9c9d6c9ad");
const getCenterPos_1 = require("6f3f3e181894433f");
function createCmdNotFound(intersectRes) {
    return __awaiter(this, void 0, void 0, function*() {
        const notFound = (0, getDiffSelection_1.getDiffSelection)(intersectRes);
        const auProps = yield getItemNames(notFound);
        const res = [];
        const proms = auProps.map((auProp)=>__awaiter(this, void 0, void 0, function*() {
                const centerPos = yield (0, getCenterPos_1.getCenterPos)(auProp);
                (0, createCmdNotFoundItm_1.createCmdNotFoundItm)(res, auProp, centerPos);
            }));
        yield Promise.all(proms);
        return res;
    });
}
exports.createCmdNotFound = createCmdNotFound;
function getItemNames(data) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        for (const { model, dbIds } of data)res.push((0, getBulkProperties_1.getBulkProperties)(model, dbIds, {
            propFilter: [
                "name",
                "externalId",
                "Category"
            ]
        }));
        return Promise.all(res).then((arr)=>{
            const result = [];
            for (const itms of arr)result.push(...itms);
            return result;
        });
    });
}

},{"8895279892c0ad4":"kRW4n","59b517267426bb90":"7p5UB","cd154cc9c9d6c9ad":"2Lk71","6f3f3e181894433f":"8bb9P"}],"7p5UB":[function(require,module,exports) {
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
exports.getDiffSelection = void 0;
function getDiffSelection(intersectRes) {
    const data = [];
    for (const { model, dbId } of intersectRes.selection)for (const id of dbId){
        let found = false;
        for (const { origin } of intersectRes.intersects)if (origin.modelId === model.id && origin.dbId === id.dbId) {
            found = true;
            break;
        }
        if (!found) pushToData(data, id.dbId, model);
    }
    return data;
}
exports.getDiffSelection = getDiffSelection;
function pushToData(data, dbId, model) {
    for (const item of data)if (item.model.id === model.id) {
        item.dbIds.add(dbId);
        return;
    }
    data.push({
        model,
        dbIds: new Set([
            dbId
        ])
    });
}

},{}],"2Lk71":[function(require,module,exports) {
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
exports.createCmdNotFoundItm = void 0;
const getBimFileIdByModelId_1 = require("e61c5521a7af3214");
const getCategory_1 = require("e54a69c21e503db0");
function createCmdNotFoundItm(target, auProp, centerPos) {
    const revitCat = (0, getCategory_1.getCategory)(auProp);
    const bimFileId = (0, getBimFileIdByModelId_1.getBimFileIdByModelId)(auProp.modelId);
    const itm = target.find((it)=>it.bimFileId === bimFileId);
    if (itm) {
        const tmp = itm.data.find((it)=>it.dbid === auProp.dbId);
        if (!tmp) itm.data.push({
            dbid: auProp.dbId,
            externalId: auProp.externalId,
            name: auProp.name,
            revitCat: revitCat.displayValue,
            centerPos
        });
    } else target.push({
        type: "CmdMissing",
        bimFileId,
        data: [
            {
                dbid: auProp.dbId,
                externalId: auProp.externalId,
                name: auProp.name,
                revitCat: revitCat.displayValue,
                centerPos
            }
        ]
    });
}
exports.createCmdNotFoundItm = createCmdNotFoundItm;

},{"e61c5521a7af3214":"5QVLC","e54a69c21e503db0":"1cuiH"}],"1cuiH":[function(require,module,exports) {
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
exports.getCategory = void 0;
function getCategory(props) {
    for (const prop of props.properties){
        if (prop.attributeName === "Category" && prop.displayCategory === "__category__") return prop;
    }
}
exports.getCategory = getCategory;

},{}],"8bb9P":[function(require,module,exports) {
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
exports.getCenterPos = void 0;
const utils_1 = require("6a79580bf5b1134a");
function getCenterPos(auProp) {
    return __awaiter(this, void 0, void 0, function*() {
        const model = (0, utils_1.getModelByModelId)(auProp.modelId);
        const fragIds = yield (0, utils_1.getFragIds)(auProp.dbId, model);
        const bbox = (0, utils_1.getWorldBoundingBox)(fragIds, model);
        const center = new THREE.Vector3();
        bbox.getCenter(center);
        return `${center.x};${center.y};${center.z}`;
    });
}
exports.getCenterPos = getCenterPos;

},{"6a79580bf5b1134a":"2QtL3"}],"dC0Uy":[function(require,module,exports) {
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
exports.createCmdProjection = void 0;
const graphservice_1 = require("c98866c250ab98ec");
const getModelByModelId_1 = require("21d3752b3eea3068");
const getProperties_1 = require("6cd13ba6a4e19a21");
const getIntersectionRoom_1 = require("2b31cc29df551617");
const createCmdProjItm_1 = require("f7d2fb661b98f434");
const getCenterPos_1 = require("66617092c0cca4e5");
const consumeBatch_1 = require("7166704a57b2d00b");
function createCmdProjection(intersects, contextGeoId, floorsData) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        const dicoBimObjs = {};
        const proms = [];
        for (const spinalIntersection of intersects)proms.push(()=>handleCreateCmd(spinalIntersection, dicoBimObjs, contextGeoId, floorsData, res));
        yield (0, consumeBatch_1.consumeBatch)(proms, 500, console.log.bind(null, "createCmdProjection %d/%d"));
        return res;
    });
}
exports.createCmdProjection = createCmdProjection;
function handleCreateCmd(spinalIntersection, dicoBimObjs, contextGeoId, floorsData, res) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObjectDbId = spinalIntersection.origin.dbId;
        const bimObjectModel = (0, getModelByModelId_1.getModelByModelId)(spinalIntersection.origin.modelId);
        const auProp = yield (0, getProperties_1.getProperties)(bimObjectModel, bimObjectDbId);
        const room = yield (0, getIntersectionRoom_1.getIntersectionRoom)(spinalIntersection.intersections.dbId, spinalIntersection.intersections.modelId, dicoBimObjs, contextGeoId);
        let flagWarining = false;
        const floor = yield getFloorFromRoom(room, contextGeoId);
        if (floor) {
            const floorData = floorsData[floor.info.id.get()];
            if (floorData && floorData.distance && spinalIntersection.intersections.distance > floorData.distance) flagWarining = true;
        }
        if (!room) console.error(`createCmdProjection: room not found for ${bimObjectDbId}`);
        else {
            const centerPos = yield (0, getCenterPos_1.getCenterPos)(auProp);
            (0, createCmdProjItm_1.createCmdProjItm)(res, auProp, room.info.id.get(), centerPos, flagWarining);
        }
    });
}
function getFloorFromRoom(room, contextGeoId) {
    return __awaiter(this, void 0, void 0, function*() {
        const contextGeo = (0, graphservice_1.getRealNode)(contextGeoId);
        const floors = yield room.getParentsInContext(contextGeo);
        for (const floor of floors)return floor;
    });
}

},{"c98866c250ab98ec":"MYBU6","21d3752b3eea3068":"9RDu2","6cd13ba6a4e19a21":"aiYfE","2b31cc29df551617":"6Yw3u","f7d2fb661b98f434":"jYc0v","66617092c0cca4e5":"8bb9P","7166704a57b2d00b":"2wzJt"}],"aiYfE":[function(require,module,exports) {
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
exports.getProperties = void 0;
const getModelByModelId_1 = require("d004ebb83c44ae");
function getProperties(model, dbId) {
    let m;
    if (typeof model === "number") m = (0, getModelByModelId_1.getModelByModelId)(model);
    else m = model;
    return new Promise((resolve, reject)=>{
        m.getProperties(dbId, (result)=>{
            const data = Object.assign(result, {
                id: `${m.id}-${result.dbId}`,
                modelId: m.id
            });
            resolve(data);
        }, (err)=>reject(err));
    });
}
exports.getProperties = getProperties;

},{"d004ebb83c44ae":"9RDu2"}],"6Yw3u":[function(require,module,exports) {
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
exports.getIntersectionRoom = void 0;
const utils_1 = require("e04c4a16c54e2875");
const getModelByModelId_1 = require("a66fd8d4b0aa13d0");
const Constant_1 = require("cf39c1811aa99b15");
const getBimObjFromBimFileId_1 = require("b6feb8b4e0145182");
function getIntersectionRoom(dbId, modelId, dicoBimObjs, contextGeoId) {
    return __awaiter(this, void 0, void 0, function*() {
        const roomRefObjModel = (0, getModelByModelId_1.getModelByModelId)(modelId);
        const bimFileId = (0, utils_1.getBimFileIdByModelId)(roomRefObjModel.id);
        const refObj = yield (0, getBimObjFromBimFileId_1.getBimObjFromBimFileId)(dicoBimObjs, bimFileId, dbId);
        const rooms = yield refObj.getParents(Constant_1.GEO_REFERENCE_ROOM_RELATION);
        const filteredRooms = rooms.filter((room)=>{
            return room.info.type.get() === Constant_1.GEO_ROOM_TYPE && room.contextIds.has(contextGeoId);
        });
        const room = filteredRooms[0];
        return room;
    });
}
exports.getIntersectionRoom = getIntersectionRoom;

},{"e04c4a16c54e2875":"2QtL3","a66fd8d4b0aa13d0":"9RDu2","cf39c1811aa99b15":"b3pAR","b6feb8b4e0145182":"j3lBN"}],"j3lBN":[function(require,module,exports) {
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
exports.getBimObjFromBimFileId = void 0;
const getBimObjsOfBimFileId_1 = require("822b8bd53c5fd654");
function getBimObjFromBimFileId(dico, bimFileId, bimObjectDbId) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObjs = yield (0, getBimObjsOfBimFileId_1.getBimObjsOfBimFileId)(dico, bimFileId);
        for (const bimObj of bimObjs){
            if (bimObj.info.dbid.get() === bimObjectDbId) return bimObj;
        }
    });
}
exports.getBimObjFromBimFileId = getBimObjFromBimFileId;

},{"822b8bd53c5fd654":"gOvHN"}],"gOvHN":[function(require,module,exports) {
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
exports.getBimObjsOfBimFileId = void 0;
const utils_1 = require("9611bb12b91a6ca0");
const Constant_1 = require("709e74bdc9d1be1f");
function getBimObjsOfBimFileId(dico, bimFileId) {
    return __awaiter(this, void 0, void 0, function*() {
        const _bimObjs = dico[bimFileId];
        if (_bimObjs) return _bimObjs;
        const bimContext = yield (0, utils_1.getBimContextByBimFileId)(bimFileId);
        const bimObjs = yield bimContext.getChildren(Constant_1.GEO_EQUIPMENT_RELATION);
        dico[bimFileId] = bimObjs;
        return bimObjs;
    });
}
exports.getBimObjsOfBimFileId = getBimObjsOfBimFileId;

},{"9611bb12b91a6ca0":"2QtL3","709e74bdc9d1be1f":"b3pAR"}],"jYc0v":[function(require,module,exports) {
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
exports.createCmdProjItm = void 0;
const getCategory_1 = require("d26a99a04e34c735");
const getBimFileIdByModelId_1 = require("e1d08933658dec6c");
function createCmdProjItm(target, auProp, pNId, centerPos, flagWarining) {
    const bimFileId = (0, getBimFileIdByModelId_1.getBimFileIdByModelId)(auProp.modelId);
    const itm = target.find((it)=>it.bimFileId === bimFileId && pNId === it.pNId);
    const revitCat = (0, getCategory_1.getCategory)(auProp);
    if (itm) {
        const tmp = itm.data.find((it)=>it.dbid === auProp.dbId);
        if (!tmp) itm.data.push({
            dbid: auProp.dbId,
            externalId: auProp.externalId,
            name: auProp.name,
            revitCat: revitCat.displayValue,
            centerPos,
            flagWarining
        });
    } else target.push({
        type: "CmdProjection",
        pNId,
        bimFileId,
        data: [
            {
                dbid: auProp.dbId,
                externalId: auProp.externalId,
                name: auProp.name,
                revitCat: revitCat.displayValue,
                centerPos,
                flagWarining
            }
        ]
    });
}
exports.createCmdProjItm = createCmdProjItm;

},{"d26a99a04e34c735":"1cuiH","e1d08933658dec6c":"5QVLC"}],"j51dB":[function(require,module,exports) {
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
exports.decodeCmds = void 0;
const compress_json_1 = require("d8eaf6c530d45ee7");
const pako_1 = require("eee64ade53331889");
function decodeCmds(compressed) {
    const ungzip = (0, pako_1.inflate)(compressed, {
        to: "string"
    });
    const reversed = (0, compress_json_1.decompress)(JSON.parse(ungzip));
    return reversed;
}
exports.decodeCmds = decodeCmds;

},{"d8eaf6c530d45ee7":"6XW9k","eee64ade53331889":"6sHn9"}],"6XW9k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/* for direct usage */ var core_1 = require("6ec54ab21d5a6381");
exports.compress = core_1.compress;
exports.decompress = core_1.decompress;
/* for custom wrapper */ var core_2 = require("6ec54ab21d5a6381");
exports.decode = core_2.decode;
var memory_1 = require("1e0839633fff787");
exports.addValue = memory_1.addValue;
/* to remove undefined object fields */ var helpers_1 = require("cbc023fcf829905a");
exports.trimUndefined = helpers_1.trimUndefined;
exports.trimUndefinedRecursively = helpers_1.trimUndefinedRecursively;

},{"6ec54ab21d5a6381":"hXyBe","1e0839633fff787":"hNzuL","cbc023fcf829905a":"9o75M"}],"hXyBe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const debug_1 = require("43a60b4b6f2c97f0");
const encode_1 = require("7f728b8b71f038db");
const memory_1 = require("7ebb017235279e08");
function compress(o) {
    const mem = memory_1.makeInMemoryMemory();
    const root = memory_1.addValue(mem, o, undefined);
    const values = memory_1.memToValues(mem);
    return [
        values,
        root
    ];
}
exports.compress = compress;
function decodeObject(values, s) {
    if (s === "o|") return {};
    const o = {};
    const vs = s.split("|");
    const key_id = vs[1];
    let keys = decode(values, key_id);
    const n = vs.length;
    if (n - 2 === 1 && !Array.isArray(keys)) // single-key object using existing value as key
    keys = [
        keys
    ];
    for(let i = 2; i < n; i++){
        const k = keys[i - 2];
        let v = vs[i];
        v = decode(values, v);
        o[k] = v;
    }
    return o;
}
function decodeArray(values, s) {
    if (s === "a|") return [];
    const vs = s.split("|");
    const n = vs.length - 1;
    const xs = new Array(n);
    for(let i = 0; i < n; i++){
        let v = vs[i + 1];
        v = decode(values, v);
        xs[i] = v;
    }
    return xs;
}
function decode(values, key) {
    if (key === "" || key === "_") return null;
    const id = encode_1.decodeKey(key);
    const v = values[id];
    if (v === null) return v;
    switch(typeof v){
        case "undefined":
            return v;
        case "number":
            return v;
        case "string":
            const prefix = v[0] + v[1];
            switch(prefix){
                case "b|":
                    return encode_1.decodeBool(v);
                case "o|":
                    return decodeObject(values, v);
                case "n|":
                    return encode_1.decodeNum(v);
                case "a|":
                    return decodeArray(values, v);
                default:
                    return encode_1.decodeStr(v);
            }
    }
    return debug_1.throwUnknownDataType(v);
}
exports.decode = decode;
function decompress(c) {
    const [values, root] = c;
    return decode(values, root);
}
exports.decompress = decompress;

},{"43a60b4b6f2c97f0":"dKcjY","7f728b8b71f038db":"fOOIL","7ebb017235279e08":"hNzuL"}],"dKcjY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function getType(o) {
    return Object.prototype.toString.call(o);
}
exports.getType = getType;
function throwUnknownDataType(o) {
    throw new TypeError("unsupported data type: " + getType(o));
}
exports.throwUnknownDataType = throwUnknownDataType;

},{}],"fOOIL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const number_1 = require("17504c7c015c49e");
function encodeNum(num) {
    const a = "n|" + number_1.num_to_s(num);
    return a;
// let b = num.toString()
// return a.length < b.length ? a : num
}
exports.encodeNum = encodeNum;
function decodeNum(s) {
    s = s.replace("n|", "");
    return number_1.s_to_num(s);
}
exports.decodeNum = decodeNum;
function decodeKey(key) {
    return typeof key === "number" ? key : number_1.s_to_int(key);
}
exports.decodeKey = decodeKey;
function encodeBool(b) {
    // return 'b|' + bool_to_s(b)
    return b ? "b|T" : "b|F";
}
exports.encodeBool = encodeBool;
function decodeBool(s) {
    switch(s){
        case "b|T":
            return true;
        case "b|F":
            return false;
    }
    return !!s;
}
exports.decodeBool = decodeBool;
function encodeStr(str) {
    const prefix = str[0] + str[1];
    switch(prefix){
        case "b|":
        case "o|":
        case "n|":
        case "a|":
        case "s|":
            str = "s|" + str;
    }
    return str;
}
exports.encodeStr = encodeStr;
function decodeStr(s) {
    const prefix = s[0] + s[1];
    return prefix === "s|" ? s.substr(2) : s;
}
exports.decodeStr = decodeStr;

},{"17504c7c015c49e":"W6ekq"}],"W6ekq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let i_to_s = "";
for(let i = 0; i < 10; i++){
    const c = String.fromCharCode(48 + i);
    i_to_s += c;
}
for(let i = 0; i < 26; i++){
    const c = String.fromCharCode(65 + i);
    i_to_s += c;
}
for(let i = 0; i < 26; i++){
    const c = String.fromCharCode(97 + i);
    i_to_s += c;
}
const N = i_to_s.length;
const s_to_i = {};
for(let i = 0; i < N; i++){
    const s = i_to_s[i];
    s_to_i[s] = i;
}
function s_to_int(s) {
    let acc = 0;
    let pow = 1;
    for(let i = s.length - 1; i >= 0; i--){
        const c = s[i];
        let x = s_to_i[c];
        x *= pow;
        acc += x;
        pow *= N;
    }
    return acc;
}
exports.s_to_int = s_to_int;
function s_to_big_int(s) {
    let acc = BigInt(0);
    let pow = BigInt(1);
    const n = BigInt(N);
    for(let i = s.length - 1; i >= 0; i--){
        const c = s[i];
        let x = BigInt(s_to_i[c]);
        x *= pow;
        acc += x;
        pow *= n;
    }
    return acc;
}
exports.s_to_big_int = s_to_big_int;
function int_to_s(int) {
    if (int === 0) return i_to_s[0];
    const acc = [];
    while(int !== 0){
        const i = int % N;
        const c = i_to_s[i];
        acc.push(c);
        int -= i;
        int /= N;
    }
    return acc.reverse().join("");
}
exports.int_to_s = int_to_s;
function big_int_to_s(int) {
    const zero = BigInt(0);
    const n = BigInt(N);
    if (int === zero) return i_to_s[0];
    const acc = [];
    while(int !== zero){
        const i = int % n;
        const c = i_to_s[Number(i)];
        acc.push(c);
        int -= i;
        int /= n;
    }
    return acc.reverse().join("");
}
exports.big_int_to_s = big_int_to_s;
function reverse(s) {
    return s.split("").reverse().join("");
}
function num_to_s(num) {
    if (num < 0) return "-" + num_to_s(-num);
    let [a, b] = num.toString().split(".");
    if (!b) return int_to_s(num);
    let c;
    if (b) [b, c] = b.split("e");
    a = int_str_to_s(a);
    b = reverse(b);
    b = int_str_to_s(b);
    let str = a + "." + b;
    if (c) {
        str += ".";
        switch(c[0]){
            case "+":
                c = c.slice(1);
                break;
            case "-":
                str += "-";
                c = c.slice(1);
                break;
        }
        c = reverse(c);
        c = int_str_to_s(c);
        str += c;
    }
    return str;
}
exports.num_to_s = num_to_s;
function int_str_to_s(int_str) {
    const num = +int_str;
    if (num.toString() === int_str) return int_to_s(num);
    return ":" + big_int_to_s(BigInt(int_str));
}
exports.int_str_to_s = int_str_to_s;
function s_to_int_str(s) {
    if (s[0] === ":") return s_to_big_int(s.substring(1)).toString();
    return s_to_int(s).toString();
}
function s_to_num(s) {
    if (s[0] === "-") return -s_to_num(s.substr(1));
    let [a, b, c] = s.split(".");
    if (!b) return s_to_int(a);
    a = s_to_int_str(a);
    b = s_to_int_str(b);
    b = reverse(b);
    let str = a + "." + b;
    if (c) {
        str += "e";
        let neg = false;
        if (c[0] === "-") {
            neg = true;
            c = c.slice(1);
        }
        c = s_to_int_str(c);
        c = reverse(c);
        str += neg ? -c : +c;
    }
    return +str;
}
exports.s_to_num = s_to_num;

},{}],"hNzuL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const config_1 = require("5bc74932c839a4c1");
const debug_1 = require("ff3ddf2d477481f");
const encode_1 = require("5e0aec9e52c3efe7");
const number_1 = require("8a389ab9d9e4c889");
function memToValues(mem) {
    return mem.store.toArray();
}
exports.memToValues = memToValues;
function makeInMemoryStore() {
    const mem = [];
    return {
        forEach (cb) {
            for(let i = 0; i < mem.length; i++){
                if (cb(mem[i]) === "break") return;
            }
        },
        add (value) {
            mem.push(value);
        },
        toArray () {
            return mem;
        }
    };
}
exports.makeInMemoryStore = makeInMemoryStore;
function makeInMemoryCache() {
    const valueMem = Object.create(null);
    const schemaMem = Object.create(null);
    return {
        getValue (key) {
            return valueMem[key];
        },
        getSchema (key) {
            return schemaMem[key];
        },
        forEachValue (cb) {
            for (const [key, value] of Object.entries(valueMem)){
                if (cb(key, value) === "break") return;
            }
        },
        forEachSchema (cb) {
            for (const [key, value] of Object.entries(schemaMem)){
                if (cb(key, value) === "break") return;
            }
        },
        setValue (key, value) {
            valueMem[key] = value;
        },
        setSchema (key, value) {
            schemaMem[key] = value;
        },
        hasValue (key) {
            return key in valueMem;
        },
        hasSchema (key) {
            return key in schemaMem;
        }
    };
}
exports.makeInMemoryCache = makeInMemoryCache;
function makeInMemoryMemory() {
    return {
        store: makeInMemoryStore(),
        cache: makeInMemoryCache(),
        keyCount: 0
    };
}
exports.makeInMemoryMemory = makeInMemoryMemory;
function getValueKey(mem, value) {
    if (mem.cache.hasValue(value)) return mem.cache.getValue(value);
    const id = mem.keyCount++;
    const key = number_1.num_to_s(id);
    mem.store.add(value);
    mem.cache.setValue(value, key);
    return key;
}
/** @remark in-place sort the keys */ function getSchema(mem, keys) {
    if (config_1.config.sort_key) keys.sort();
    const schema = keys.join(",");
    if (mem.cache.hasSchema(schema)) return mem.cache.getSchema(schema);
    const key_id = addValue(mem, keys, undefined);
    mem.cache.setSchema(schema, key_id);
    return key_id;
}
function addValue(mem, o, parent) {
    if (o === null) return "";
    switch(typeof o){
        case "undefined":
            if (Array.isArray(parent)) return addValue(mem, null, parent);
            break;
        case "object":
            if (o === null) return getValueKey(mem, null);
            if (Array.isArray(o)) {
                let acc = "a";
                for(let i = 0; i < o.length; i++){
                    const v = o[i];
                    const key = v === null ? "_" : addValue(mem, v, o);
                    acc += "|" + key;
                }
                if (acc === "a") acc = "a|";
                return getValueKey(mem, acc);
            } else {
                const keys = Object.keys(o);
                if (keys.length === 0) return getValueKey(mem, "o|");
                let acc = "o";
                const key_id = getSchema(mem, keys);
                acc += "|" + key_id;
                for (const key of keys){
                    const value = o[key];
                    const v = addValue(mem, value, o);
                    acc += "|" + v;
                }
                return getValueKey(mem, acc);
            }
        case "boolean":
            return getValueKey(mem, encode_1.encodeBool(o));
        case "number":
            return getValueKey(mem, encode_1.encodeNum(o));
        case "string":
            return getValueKey(mem, encode_1.encodeStr(o));
    }
    return debug_1.throwUnknownDataType(o);
}
exports.addValue = addValue;

},{"5bc74932c839a4c1":"j20qE","ff3ddf2d477481f":"dKcjY","5e0aec9e52c3efe7":"fOOIL","8a389ab9d9e4c889":"W6ekq"}],"j20qE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = {
    sort_key: false
};

},{}],"9o75M":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function trimUndefined(object) {
    for(const key in object)if (object[key] === undefined) delete object[key];
}
exports.trimUndefined = trimUndefined;
function trimUndefinedRecursively(object) {
    trimUndefinedRecursivelyLoop(object, new Set());
}
exports.trimUndefinedRecursively = trimUndefinedRecursively;
function trimUndefinedRecursivelyLoop(object, tracks) {
    tracks.add(object);
    for(const key in object)if (object[key] === undefined) delete object[key];
    else {
        const value = object[key];
        if (value && typeof value === "object" && !tracks.has(value)) trimUndefinedRecursivelyLoop(value, tracks);
    }
}

},{}],"6sHn9":[function(require,module,exports) {
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */ // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ /* Public constants ==========================================================*/ /* ===========================================================================*/ //const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", ()=>Deflate_1);
parcelHelpers.export(exports, "Inflate", ()=>Inflate_1);
parcelHelpers.export(exports, "constants", ()=>constants_1);
parcelHelpers.export(exports, "default", ()=>pako);
parcelHelpers.export(exports, "deflate", ()=>deflate_1);
parcelHelpers.export(exports, "deflateRaw", ()=>deflateRaw_1);
parcelHelpers.export(exports, "gzip", ()=>gzip_1);
parcelHelpers.export(exports, "inflate", ()=>inflate_1);
parcelHelpers.export(exports, "inflateRaw", ()=>inflateRaw_1);
parcelHelpers.export(exports, "ungzip", ()=>ungzip_1);
const Z_FIXED$1 = 4;
//const Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ const Z_BINARY = 0;
const Z_TEXT = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1 = 2;
/*============================================================================*/ function zero$1(buf) {
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
// From zutil.h
const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
/* The three kinds of block type */ const MIN_MATCH$1 = 3;
const MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ const LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS$1 = 256;
/* number of literal bytes 0..255 */ const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES$1 = 30;
/* number of distance codes */ const BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */ const MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */ const Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ const END_BLOCK = 256;
/* end of block literal code */ const REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ const REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ const extra_lbits = /* extra bits for each length code */ new Uint8Array([
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
]);
const extra_dbits = /* extra bits for each distance code */ new Uint8Array([
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
]);
const extra_blbits = /* extra bits for each bit length code */ new Uint8Array([
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
]);
const bl_order = new Uint8Array([
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
]);
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
const DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ const static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ const _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ const base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ const base_dist = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
let static_l_desc;
let static_d_desc;
let static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
const d_code = (dist)=>{
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ const put_short = (s, w)=>{
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ const send_bits = (s, value, length)=>{
    if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        s.bi_valid += length;
    }
};
const send_code = (s, c, tree)=>{
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ const bi_reverse = (code, len)=>{
    let res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0);
    return res >>> 1;
};
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ const bi_flush = (s)=>{
    if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
};
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ const gen_bitlen = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc;    /* the tree descriptor */
    const tree = desc.dyn_tree;
    const max_code = desc.max_code;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const extra = desc.stat_desc.extra_bits;
    const base = desc.stat_desc.extra_base;
    const max_length = desc.stat_desc.max_length;
    let h; /* heap index */ 
    let n, m; /* iterate over the tree elements */ 
    let bits; /* bit length */ 
    let xbits; /* extra bits */ 
    let f; /* frequency */ 
    let overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= MAX_BITS$1; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < HEAP_SIZE$1; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2] /*.Freq*/ ;
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Tracev((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2] /*.Freq*/ ;
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
};
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ const gen_codes = (tree, max_code, bl_count)=>{
    //    ct_data *tree;             /* the tree to decorate */
    //    int max_code;              /* largest code with non zero frequency */
    //    ushf *bl_count;            /* number of codes at each bit length */
    const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */ 
    let code = 0; /* running code value */ 
    let bits; /* bit index */ 
    let n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= MAX_BITS$1; bits++){
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        let len = tree[n * 2 + 1] /*.Len*/ ;
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
};
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ const tr_static_init = ()=>{
    let n; /* iterates over tree elements */ 
    let bits; /* bit counter */ 
    let length; /* length value */ 
    let code; /* code value */ 
    let dist; /* distance index */ 
    const bl_count = new Array(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < LENGTH_CODES$1 - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++)_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++)_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < D_CODES$1; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++)_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= MAX_BITS$1; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < D_CODES$1; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
//static_init_done = true;
};
/* ===========================================================================
 * Initialize a new block.
 */ const init_block = (s)=>{
    let n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < L_CODES$1; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < D_CODES$1; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < BL_CODES$1; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.sym_next = s.matches = 0;
};
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ const bi_windup = (s)=>{
    if (s.bi_valid > 8) put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
};
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ const smaller = (tree, n, m, depth)=>{
    const _n2 = n * 2;
    const _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ const pqdownheap = (s, tree, k)=>{
    //    deflate_state *s;
    //    ct_data *tree;  /* the tree to restore */
    //    int k;               /* node to move down */
    const v = s.heap[k];
    let j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if (smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
};
// inlined manually
// const SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ const compress_block = (s, ltree, dtree)=>{
    //    deflate_state *s;
    //    const ct_data *ltree; /* literal tree */
    //    const ct_data *dtree; /* distance tree */
    let dist; /* distance of matched string */ 
    let lc; /* match length or unmatched char (if dist == 0) */ 
    let sx = 0; /* running index in sym_buf */ 
    let code; /* the code to send */ 
    let extra; /* number of extra bits to send */ 
    if (s.sym_next !== 0) do {
        dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
        dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
        lc = s.pending_buf[s.sym_buf + sx++];
        if (dist === 0) send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = _length_code[lc];
            send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */ 
            extra = extra_lbits[code];
            if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            send_code(s, code, dtree); /* send the distance code */ 
            extra = extra_dbits[code];
            if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and sym_buf is ok: */ //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
    }while (sx < s.sym_next);
    send_code(s, END_BLOCK, ltree);
};
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ const build_tree = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc; /* the tree descriptor */
    const tree = desc.dyn_tree;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems = desc.stat_desc.elems;
    let n, m; /* iterate over heap elements */ 
    let max_code = -1; /* largest code with non zero frequency */ 
    let node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = HEAP_SIZE$1;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2] /*.Freq*/ ;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ gen_codes(tree, max_code, s.bl_count);
};
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ const scan_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree;   /* the tree to be scanned */
    //    int max_code;    /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 0xffff; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
        else s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ const send_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree; /* the tree to be scanned */
    //    int max_code;       /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) do send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
        } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ const build_bl_tree = (s)=>{
    let max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
};
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ const send_all_trees = (s, lcodes, dcodes, blcodes)=>{
    //    deflate_state *s;
    //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
    let rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ const detect_data_type = (s)=>{
    /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ let block_mask = 0xf3ffc07f;
    let n;
    /* Check for non-textual ("block-listed") bytes. */ for(n = 0; n <= 31; n++, block_mask >>>= 1){
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
    }
    /* Check for textual ("allow-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
    for(n = 32; n < LITERALS$1; n++){
        if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
    }
    /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return Z_BINARY;
};
let static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ const _tr_init$1 = (s)=>{
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ init_block(s);
};
/* ===========================================================================
 * Send a stored block
 */ const _tr_stored_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    bi_windup(s); /* align on byte boundary */ 
    put_short(s, stored_len);
    put_short(s, ~stored_len);
    if (stored_len) s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
    s.pending += stored_len;
};
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ const _tr_align$1 = (s)=>{
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
};
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */ const _tr_flush_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block, or NULL if too old */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    let opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    let max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === Z_UNKNOWN$1) s.strm.data_type = detect_data_type(s);
        /* Construct the literal and distance trees */ build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->sym_next / 3));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ _tr_stored_block$1(s, buf, stored_len, last);
    else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ init_block(s);
    if (last) bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
};
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ const _tr_tally$1 = (s, dist, lc)=>{
    //    deflate_state *s;
    //    unsigned dist;  /* distance of matched string */
    //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
    s.pending_buf[s.sym_buf + s.sym_next++] = dist;
    s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
    s.pending_buf[s.sym_buf + s.sym_next++] = lc;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
};
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const adler32 = (adler, buf, len, pos)=>{
    let s1 = adler & 0xffff | 0, s2 = adler >>> 16 & 0xffff | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n);
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
const makeTable = ()=>{
    let c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
};
// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());
const crc32 = (crc, buf, len, pos)=>{
    const t = crcTable;
    const end = pos + len;
    crc ^= -1;
    for(let i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    return crc ^ -1; // >>> 0;
};
var crc32_1 = crc32;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */ 1: "stream end",
    /* Z_STREAM_END      1  */ 0: "",
    /* Z_OK              0  */ "-1": "file error",
    /* Z_ERRNO         (-1) */ "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */ "-3": "data error",
    /* Z_DATA_ERROR    (-3) */ "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */ "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */ "-6": "incompatible version" /* Z_VERSION_ERROR (-6) */ 
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var constants$2 = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2 } = constants$2;
/*============================================================================*/ const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ const MAX_WBITS$1 = 15;
/* 32K LZ77 window */ const DEF_MEM_LEVEL = 8;
const LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS = 256;
/* number of literal bytes 0..255 */ const L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES = 30;
/* number of distance codes */ const BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ const MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
const PRESET_DICT = 0x20;
const INIT_STATE = 42; /* zlib header -> BUSY_STATE */ 
//#ifdef GZIP
const GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */ 
//#endif
const EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */ 
const NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */ 
const COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */ 
const HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */ 
const BUSY_STATE = 113; /* deflate -> FINISH_STATE */ 
const FINISH_STATE = 666; /* stream complete */ 
const BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
const BS_BLOCK_DONE = 2; /* block flush performed */ 
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
const BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
const err = (strm, errorCode)=>{
    strm.msg = messages[errorCode];
    return errorCode;
};
const rank = (f)=>{
    return f * 2 - (f > 4 ? 9 : 0);
};
const zero = (buf)=>{
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
};
/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */ const slide_hash = (s)=>{
    let n, m;
    let p;
    let wsize = s.w_size;
    n = s.hash_size;
    p = n;
    do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
    }while (--n);
    n = wsize;
    //#ifndef FASTEST
    p = n;
    do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */ }while (--n);
//#endif
};
/* eslint-disable new-cap */ let HASH_ZLIB = (s, prev, data)=>(prev << s.hash_shift ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */ const flush_pending = (strm)=>{
    const s = strm.state;
    //_tr_flush_bits(s);
    let len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
};
const flush_block_only = (s, last)=>{
    _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
};
const put_byte = (s, b)=>{
    s.pending_buf[s.pending++] = b;
};
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ const putShortMSB = (s, b)=>{
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
};
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ const read_buf = (strm, buf, start, size)=>{
    let len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) strm.adler = adler32_1(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = crc32_1(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
};
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ const longest_match = (s, cur_match)=>{
    let chain_length = s.max_chain_length; /* max hash chain length */ 
    let scan = s.strstart; /* current string */ 
    let match; /* matched string */ 
    let len; /* length of current match */ 
    let best_len = s.prev_length; /* best match length so far */ 
    let nice_match = s.nice_match; /* stop if match long enough */ 
    const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    const _win = s.window; // shortcut
    const wmask = s.w_mask;
    const prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ const strend = s.strstart + MAX_MATCH;
    let scan_end1 = _win[scan + best_len - 1];
    let scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
};
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ const fill_window = (s)=>{
    const _w_size = s.w_size;
    let n, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            if (s.insert > s.strstart) s.insert = s.strstart;
            slide_hash(s);
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */ const deflate_stored = (s, flush)=>{
    /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */ let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
    /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */ let len, left, have, last = 0;
    let used = s.strm.avail_in;
    do {
        /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */ len = 65535 /* MAX_STORED */ ; /* maximum deflate stored block length */ 
        have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
        if (s.strm.avail_out < have) break;
        /* maximum stored block length that will fit in avail_out: */ have = s.strm.avail_out - have;
        left = s.strstart - s.block_start; /* bytes left in window */ 
        if (len > left + s.strm.avail_in) len = left + s.strm.avail_in; /* limit len to the input */ 
        if (len > have) len = have; /* limit len to the output */ 
        /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */ if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) break;
        /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */ last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
        _tr_stored_block(s, 0, 0, last);
        /* Replace the lengths in the dummy stored block with len. */ s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        /* Write the stored block header bytes. */ flush_pending(s.strm);
        //#ifdef ZLIB_DEBUG
        //    /* Update debugging counts for the data about to be copied. */
        //    s->compressed_len += len << 3;
        //    s->bits_sent += len << 3;
        //#endif
        /* Copy uncompressed bytes from the window to next_out. */ if (left) {
            if (left > len) left = len;
            //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
            s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
            s.strm.next_out += left;
            s.strm.avail_out -= left;
            s.strm.total_out += left;
            s.block_start += left;
            len -= left;
        }
        /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */ if (len) {
            read_buf(s.strm, s.strm.output, s.strm.next_out, len);
            s.strm.next_out += len;
            s.strm.avail_out -= len;
            s.strm.total_out += len;
        }
    }while (last === 0);
    /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */ used -= s.strm.avail_in; /* number of input bytes directly copied */ 
    if (used) {
        /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */ if (used >= s.w_size) {
            s.matches = 2; /* clear hash */ 
            //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
            s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
            s.strstart = s.w_size;
            s.insert = s.strstart;
        } else {
            if (s.window_size - s.strstart <= used) {
                /* Slide the window down. */ s.strstart -= s.w_size;
                //zmemcpy(s->window, s->window + s->w_size, s->strstart);
                s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
                if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
                if (s.insert > s.strstart) s.insert = s.strstart;
            }
            //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
            s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
            s.strstart += used;
            s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* If the last block was written to next_out, then done. */ if (last) return BS_FINISH_DONE;
    /* If flushing and all input has been consumed, then done. */ if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) return BS_BLOCK_DONE;
    /* Fill the window with any remaining input. */ have = s.window_size - s.strstart;
    if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        /* Slide the window down. */ s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
        have += s.w_size; /* more space now */ 
        if (s.insert > s.strstart) s.insert = s.strstart;
    }
    if (have > s.strm.avail_in) have = s.strm.avail_in;
    if (have) {
        read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */ have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
    /* maximum stored block length that will fit in pending: */ have = s.pending_buf_size - have > 65535 /* MAX_STORED */  ? 65535 /* MAX_STORED */  : s.pending_buf_size - have;
    min_block = have > s.w_size ? s.w_size : have;
    left = s.strstart - s.block_start;
    if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
        _tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        flush_pending(s.strm);
    }
    /* We've done all we can with the available input and output. */ return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ const deflate_fast = (s, flush)=>{
    let hash_head; /* head of the hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
        if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while (--s.match_length !== 0);
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ const deflate_slow = (s, flush)=>{
    let hash_head; /* head of hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    let max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
                if (s.strm.avail_out === 0) return BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ const deflate_rle = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    let prev; /* byte at distance one to match */ 
    let scan, strend; /* scan goes up to strend for length of run */ 
    const _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
                s.match_length = MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ const deflate_huff = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
                if (flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
const configuration_table = [
    /*      good lazy nice chain */ new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */ new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */ new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */ new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */ new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */ new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */ new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */ new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */ new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */ new Config(32, 258, 258, 4096, deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ const lm_init = (s)=>{
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
};
function DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = Z_DEFLATED$2; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
    this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
    this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new Uint16Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new Uint16Array(2 * L_CODES + 1); /* heap used to build the Huffman trees */ 
    zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.sym_buf = 0; /* buffer for distances and literals/lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.sym_next = 0; /* running index in sym_buf */ 
    this.sym_end = 0; /* symbol table full when sym_next reaches this */ 
    this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */ const deflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const s = strm.state;
    if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
    s.status !== GZIP_STATE && //#endif
    s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) return 1;
    return 0;
};
const deflateResetKeep = (strm)=>{
    if (deflateStateCheck(strm)) return err(strm, Z_STREAM_ERROR$2);
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    const s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = //#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE : //#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = -2;
    _tr_init(s);
    return Z_OK$3;
};
const deflateReset = (strm)=>{
    const ret = deflateResetKeep(strm);
    if (ret === Z_OK$3) lm_init(strm.state);
    return ret;
};
const deflateSetHeader = (strm, head)=>{
    if (deflateStateCheck(strm) || strm.state.wrap !== 2) return Z_STREAM_ERROR$2;
    strm.state.gzhead = head;
    return Z_OK$3;
};
const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy)=>{
    if (!strm) return Z_STREAM_ERROR$2;
    let wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION$1) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) return err(strm, Z_STREAM_ERROR$2);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ const s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.status = INIT_STATE; /* to pass state test in deflateReset() */ 
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */ s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->sym_buf = s->pending_buf + s->lit_bufsize;
    s.sym_buf = s.lit_bufsize;
    //s->sym_end = (s->lit_bufsize - 1) * 3;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
};
const deflateInit = (strm, level)=>{
    return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
/* ========================================================================= */ const deflate$2 = (strm, flush)=>{
    if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
    const s = strm.state;
    if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
    const old_flush = s.last_flush;
    s.last_flush = flush;
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return Z_OK$3;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) return err(strm, Z_BUF_ERROR$1);
    /* User must not provide more input after the first FINISH: */ if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR$1);
    /* Write the header */ if (s.status === INIT_STATE && s.wrap === 0) s.status = BUSY_STATE;
    if (s.status === INIT_STATE) {
        /* zlib header */ let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
        else if (s.level < 6) level_flags = 1;
        else if (s.level === 6) level_flags = 2;
        else level_flags = 3;
        header |= level_flags << 6;
        if (s.strstart !== 0) header |= PRESET_DICT;
        header += 31 - header % 31;
        putShortMSB(s, header);
        /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
        }
        strm.adler = 1; // adler32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#ifdef GZIP
    if (s.status === GZIP_STATE) {
        /* gzip header */ strm.adler = 0; //crc32(0L, Z_NULL, 0);
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
            /* Compression must start with an empty pending buffer */ flush_pending(strm);
            if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK$3;
            }
        } else {
            put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, s.gzhead.time >> 8 & 0xff);
            put_byte(s, s.gzhead.time >> 16 & 0xff);
            put_byte(s, s.gzhead.time >> 24 & 0xff);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
            }
            if (s.gzhead.hcrc) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
            s.gzindex = 0;
            s.status = EXTRA_STATE;
        }
    }
    if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
            while(s.pending + left > s.pending_buf_size){
                let copy = s.pending_buf_size - s.pending;
                // zmemcpy(s.pending_buf + s.pending,
                //    s.gzhead.extra + s.gzindex, copy);
                s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
                s.pending = s.pending_buf_size;
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                //---//
                s.gzindex += copy;
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
                beg = 0;
                left -= copy;
            }
            // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
            //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
            let gzhead_extra = new Uint8Array(s.gzhead.extra);
            // zmemcpy(s->pending_buf + s->pending,
            //     s->gzhead->extra + s->gzindex, left);
            s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
            s.pending += left;
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = NAME_STATE;
    }
    if (s.status === NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = COMMENT_STATE;
    }
    if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        //---//
        }
        s.status = HCRC_STATE;
    }
    if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
            }
            put_byte(s, strm.adler & 0xff);
            put_byte(s, strm.adler >> 8 & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
        }
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#endif
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
        let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return Z_OK$3;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) _tr_align(s);
            else if (flush !== Z_BLOCK$1) {
                _tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === Z_FULL_FLUSH$1) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return Z_OK$3;
            }
        }
    }
    if (flush !== Z_FINISH$3) return Z_OK$3;
    if (s.wrap <= 0) return Z_STREAM_END$3;
    /* Write the trailer */ if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, strm.adler >> 8 & 0xff);
        put_byte(s, strm.adler >> 16 & 0xff);
        put_byte(s, strm.adler >> 24 & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, strm.total_in >> 8 & 0xff);
        put_byte(s, strm.total_in >> 16 & 0xff);
        put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
    }
    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
const deflateEnd = (strm)=>{
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const status = strm.state.status;
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ const deflateSetDictionary = (strm, dictionary)=>{
    let dictLength = dictionary.length;
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const s = strm.state;
    const wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR$2;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ const avail = strm.avail_in;
    const next = strm.next_in;
    const input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while(s.lookahead >= MIN_MATCH){
        let str = s.strstart;
        let n = s.lookahead - (MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = "pako deflate (from Nodeca project)";
/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/ var deflate_1$2 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2$1,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo: deflateInfo
};
const _has = (obj, key)=>{
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj /*from1, from2, from3, ...*/ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        const source = sources.shift();
        if (!source) continue;
        if (typeof source !== "object") throw new TypeError(source + "must be non-object");
        for(const p in source)if (_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// Join array of chunks to single array.
var flattenChunks = (chunks)=>{
    // calculate data length
    let len = 0;
    for(let i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
    // join chunks
    const result = new Uint8Array(len);
    for(let i = 0, pos = 0, l = chunks.length; i < l; i++){
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
    }
    return result;
};
var common = {
    assign: assign,
    flattenChunks: flattenChunks
};
// String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    STR_APPLY_UIA_OK = false;
}
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for(let q = 0; q < 256; q++)_utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)
var string2buf = (str)=>{
    if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
    let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    // count binary size
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    // allocate buffer
    buf = new Uint8Array(buf_len);
    // convert
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) /* one byte */ buf[i++] = c;
        else if (c < 0x800) {
            /* two bytes */ buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
        } else if (c < 0x10000) {
            /* three bytes */ buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        } else {
            /* four bytes */ buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        }
    }
    return buf;
};
// Helper
const buf2binstring = (buf, len)=>{
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
    let result = "";
    for(let i = 0; i < len; i++)result += String.fromCharCode(buf[i]);
    return result;
};
// convert array to string
var buf2string = (buf, max)=>{
    const len = max || buf.length;
    if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
    let i, out;
    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    const utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        let c = buf[i++];
        // quick process ascii
        if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
        }
        let c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
        }
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
        }
        // terminated by end of string?
        if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
        }
        if (c < 0x10000) utf16buf[out++] = c;
        else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
        }
    }
    return buf2binstring(utf16buf, out);
};
// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max)=>{
    max = max || buf.length;
    if (max > buf.length) max = buf.length;
    // go back from last position, until start of sequence found
    let pos = max - 1;
    while(pos >= 0 && (buf[pos] & 0xC0) === 0x80)pos--;
    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) return max;
    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) return max;
    return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
    string2buf: string2buf,
    buf2string: buf2string,
    utf8border: utf8border
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = "" /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
var zstream = ZStream;
const toString$1 = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1 } = constants$2;
/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/ function Deflate$1(options) {
    this.options = common.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED$1,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY
    }, options || {});
    let opt = this.options;
    if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
    else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK$2) throw new Error(messages[status]);
    if (opt.header) deflate_1$2.deflateSetHeader(this.strm, opt.header);
    if (opt.dictionary) {
        let dict;
        // Convert data if needed
        if (typeof opt.dictionary === "string") // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
        else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
        else dict = opt.dictionary;
        status = deflate_1$2.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK$2) throw new Error(messages[status]);
        this._dict_set = true;
    }
}
/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Deflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
    // Convert data if needed
    if (typeof data === "string") // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
    else if (toString$1.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        // Make sure avail_out > 6 to avoid repeating markers
        if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        status = deflate_1$2.deflate(strm, _flush_mode);
        // Ended => flush and finish
        if (status === Z_STREAM_END$2) {
            if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
            status = deflate_1$2.deflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return status === Z_OK$2;
        }
        // Flush if out buffer full
        if (strm.avail_out === 0) {
            this.onData(strm.output);
            continue;
        }
        // Flush if requested and has data
        if (_flush_mode > 0 && strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Deflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Deflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK$2) this.result = common.flattenChunks(this.chunks);
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/ function deflate$1(input, options) {
    const deflator = new Deflate$1(options);
    deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err) throw deflator.msg || messages[deflator.err];
    return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function deflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return deflate$1(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/ function gzip$1(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
    Deflate: Deflate_1$1,
    deflate: deflate_2,
    deflateRaw: deflateRaw_1$1,
    gzip: gzip_1$1,
    constants: constants$1
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
const BAD$1 = 16209; /* got a data error -- remain here until reset */ 
const TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ var inffast = function inflate_fast(strm, start) {
    let _in; /* local strm.input */ 
    let last; /* have enough input while in < last */ 
    let _out; /* local strm.output */ 
    let beg; /* inflate()'s initial strm.output */ 
    let end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    let dmax; /* maximum distance from zlib header */ 
    //#endif
    let wsize; /* window size or zero if not using window */ 
    let whave; /* valid bytes in the window */ 
    let wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    let s_window; /* allocated sliding window, if wsize != 0 */ 
    let hold; /* local strm.hold */ 
    let bits; /* local strm.bits */ 
    let lcode; /* local strm.lencode */ 
    let dcode; /* local strm.distcode */ 
    let lmask; /* mask for first level of length codes */ 
    let dmask; /* mask for first level of distance codes */ 
    let here; /* retrieved table entry */ 
    let op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ let len; /* match length, unused bytes */ 
    let dist; /* match distance */ 
    let from; /* where to copy match from */ 
    let from_source;
    let input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ const state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff /*here.val*/ ;
            else if (op & 16) {
                len = here & 0xffff /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 0xff /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 0xffff /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD$1;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = "invalid distance too far back";
                                    state.mode = BAD$1;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op);
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2);
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = "invalid distance code";
                        state.mode = BAD$1;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE$1;
                break top;
            } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD$1;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;
const lbase = new Uint16Array([
    /* Length codes 257..285 base */ 3,
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
]);
const lext = new Uint8Array([
    /* Length codes 257..285 extra */ 16,
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
]);
const dbase = new Uint16Array([
    /* Distance codes 0..29 base */ 1,
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
]);
const dext = new Uint8Array([
    /* Distance codes 0..29 extra */ 16,
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
]);
const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts)=>{
    const bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    let len = 0; /* a code's length in bits */ 
    let sym = 0; /* index of code symbols */ 
    let min = 0, max = 0; /* minimum and maximum code lengths */ 
    let root = 0; /* number of index bits for root table */ 
    let curr = 0; /* number of index bits for current table */ 
    let drop = 0; /* code bits to drop for sub-table */ 
    let left = 0; /* number of prefix codes available */ 
    let used = 0; /* code entries in table used */ 
    let huff = 0; /* Huffman code */ 
    let incr; /* for incrementing code, index */ 
    let fill; /* index for replicating entries */ 
    let low; /* low bits for current root entry */ 
    let mask; /* mask for low root bits */ 
    let next; /* next available space in table */ 
    let base = null; /* base value table to use */ 
    //  let shoextra;    /* extra bits table to use */
    let match; /* use base and extra for symbol >= match */ 
    const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    let extra = null;
    let here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === CODES$1 || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES$1) {
        base = extra = work; /* dummy value--not used */ 
        match = 20;
    } else if (type === LENS$1) {
        base = lbase;
        extra = lext;
        match = 257;
    } else {
        base = dbase;
        extra = dext;
        match = 0;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] + 1 < match) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] >= match) {
            here_op = extra[work[sym] - match];
            here_val = base[work[sym] - match];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0);
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if (--count[len] === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};
var inftrees = inflate_table;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const CODES = 0;
const LENS = 1;
const DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR, Z_DEFLATED } = constants$2;
/* STATES ====================================================================*/ /* ===========================================================================*/ const HEAD = 16180; /* i: waiting for magic header */ 
const FLAGS = 16181; /* i: waiting for method and flags (gzip) */ 
const TIME = 16182; /* i: waiting for modification time (gzip) */ 
const OS = 16183; /* i: waiting for extra flags and operating system (gzip) */ 
const EXLEN = 16184; /* i: waiting for extra length (gzip) */ 
const EXTRA = 16185; /* i: waiting for extra bytes (gzip) */ 
const NAME = 16186; /* i: waiting for end of file name (gzip) */ 
const COMMENT = 16187; /* i: waiting for end of comment (gzip) */ 
const HCRC = 16188; /* i: waiting for header crc (gzip) */ 
const DICTID = 16189; /* i: waiting for dictionary check value */ 
const DICT = 16190; /* waiting for inflateSetDictionary() call */ 
const TYPE = 16191; /* i: waiting for type bits, including last-flag bit */ 
const TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */ 
const STORED = 16193; /* i: waiting for stored size (length and complement) */ 
const COPY_ = 16194; /* i/o: same as COPY below, but only first time in */ 
const COPY = 16195; /* i/o: waiting for input or output to copy stored block */ 
const TABLE = 16196; /* i: waiting for dynamic block table lengths */ 
const LENLENS = 16197; /* i: waiting for code length code lengths */ 
const CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */ 
const LEN_ = 16199; /* i: same as LEN below, but only first time in */ 
const LEN = 16200; /* i: waiting for length/lit/eob code */ 
const LENEXT = 16201; /* i: waiting for length extra bits */ 
const DIST = 16202; /* i: waiting for distance code */ 
const DISTEXT = 16203; /* i: waiting for distance extra bits */ 
const MATCH = 16204; /* o: waiting for output space to copy string */ 
const LIT = 16205; /* o: waiting for output space to write literal */ 
const CHECK = 16206; /* i: waiting for 32-bit check value */ 
const LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */ 
const DONE = 16208; /* finished check, done -- remain here until reset */ 
const BAD = 16209; /* got a data error -- remain here until reset */ 
const MEM = 16210; /* got an inflate() memory error -- remain here until reset */ 
const SYNC = 16211; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
const MAX_WBITS = 15;
/* 32K LZ77 window */ const DEF_WBITS = MAX_WBITS;
const zswap32 = (q)=>{
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};
function InflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new Uint16Array(320); /* temporary storage for code lengths */ 
    this.work = new Uint16Array(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
const inflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const state = strm.state;
    if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) return 1;
    return 0;
};
const inflateResetKeep = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ""; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.flags = -1;
    state.dmax = 32768;
    state.head = null /*Z_NULL*/ ;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK$1;
};
const inflateReset = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
};
const inflateReset2 = (strm, windowBits)=>{
    let wrap;
    /* get the state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR$1;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
};
const inflateInit2 = (strm, windowBits)=>{
    if (!strm) return Z_STREAM_ERROR$1;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    const state = new InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.strm = strm;
    state.window = null /*Z_NULL*/ ;
    state.mode = HEAD; /* to pass state test in inflateReset2() */ 
    const ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK$1) strm.state = null /*Z_NULL*/ ;
    return ret;
};
const inflateInit = (strm)=>{
    return inflateInit2(strm, DEF_WBITS);
};
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ let virgin = true;
let lenfix, distfix; // We have no pointers in JS, so keep tables separate
const fixedtables = (state)=>{
    /* build fixed huffman tables if first call (may not be thread safe) */ if (virgin) {
        lenfix = new Int32Array(512);
        distfix = new Int32Array(32);
        /* literal/length table */ let sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
};
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ const updatewindow = (strm, src, end, copy)=>{
    let dist;
    const state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            state.window.set(src.subarray(end - copy, end), 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
};
const inflate$2 = (strm, flush)=>{
    let state;
    let input, output; // input/output buffers
    let next; /* next input INDEX */ 
    let put; /* next output INDEX */ 
    let have, left; /* available input and output */ 
    let hold; /* bit buffer */ 
    let bits; /* bits in bit buffer */ 
    let _in, _out; /* save starting available input and output */ 
    let copy; /* number of stored or match bytes to copy */ 
    let from; /* where to copy match bytes from */ 
    let from_source;
    let here = 0; /* current decoding table entry */ 
    let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */
    let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    let len; /* length to copy for repeats, bits to drop */ 
    let ret; /* return code */ 
    const hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */ 
    let opts;
    let n; // temporary variable for NEED_BITS
    const order = /* permutation of code lengths */ new Uint8Array([
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
    ]);
    if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.mode === TYPE) state.mode = TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = Z_OK$1;
    inf_leave: for(;;)switch(state.mode){
        case HEAD:
            if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 0x8b1f) {
                if (state.wbits === 0) state.wbits = 15;
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
            }
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
            }
            if ((hold & 0x0f) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) state.wbits = len;
            if (len > 15 || len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
            }
            // !!! pako patch. Force use `options.windowBits` if passed.
            // Required to always use max window size by default.
            state.dmax = 1 << state.wbits;
            //state.dmax = 1 << len;
            state.flags = 0; /* indicate zlib header */ 
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 0x200 ? DICTID : TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
        /* falls through */ case TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32_1(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
        /* falls through */ case OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
            }
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
        /* falls through */ case EXLEN:
            if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 0x0200 && state.wrap & 4) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 0xff;
                    hbuf[1] = hold >>> 8 & 0xff;
                    state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null /*Z_NULL*/ ;
            state.mode = EXTRA;
        /* falls through */ case EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Uint8Array(state.head.extra_len);
                        state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        /* falls through */ case NAME:
            if (state.flags & 0x0800) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        /* falls through */ case COMMENT:
            if (state.flags & 0x1000) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = HCRC;
        /* falls through */ case HCRC:
            if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
        case DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
        /* falls through */ case DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT$1;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = TYPE;
        /* falls through */ case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
        /* falls through */ case TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 0x01 /*BITS(1)*/ ;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 0x03){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = STORED;
                    break;
                case 1:
                    /* fixed block */ fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = LEN_; /* decode codes */ 
                    if (flush === Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = TABLE;
                    break;
                case 3:
                    strm.msg = "invalid block type";
                    state.mode = BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case COPY_:
            state.mode = COPY;
        /* falls through */ case COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                output.set(input.subarray(next, next + copy), put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        /* falls through */ case LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        /* falls through */ case CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = "invalid bit length repeat";
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 0x03); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 0x07); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 0x7f); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = "invalid bit length repeat";
                        state.mode = BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case LEN_:
            state.mode = LEN;
        /* falls through */ case LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inffast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
        /* falls through */ case LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
        /* falls through */ case DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
        /* falls through */ case DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
        /* falls through */ case MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy);
            if (state.length === 0) state.mode = LEN;
            break;
        case LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
        /* falls through */ case LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
                    strm.msg = "incorrect length check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
        /* falls through */ case DONE:
            ret = Z_STREAM_END$1;
            break inf_leave;
        case BAD:
            ret = Z_DATA_ERROR$1;
            break inf_leave;
        case MEM:
            return Z_MEM_ERROR$1;
        case SYNC:
        /* falls through */ default:
            return Z_STREAM_ERROR$1;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out);
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) ret = Z_BUF_ERROR;
    return ret;
};
const inflateEnd = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    let state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return Z_OK$1;
};
const inflateGetHeader = (strm, head)=>{
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    if ((state.wrap & 2) === 0) return Z_STREAM_ERROR$1;
    /* save header structure */ state.head = head;
    head.done = false;
    return Z_OK$1;
};
const inflateSetDictionary = (strm, dictionary)=>{
    const dictLength = dictionary.length;
    let state;
    let dictid;
    let ret;
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR$1;
    /* check for correct dictionary identifier */ if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = adler32_1(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return Z_DATA_ERROR$1;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = "pako inflate (from Nodeca project)";
/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/ var inflate_1$2 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2$1,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo: inflateInfo
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function GZheader() {
    /* true if compressed data believed to be text */ this.text = 0;
    /* modification time */ this.time = 0;
    /* extra flags (not used when writing a gzip file) */ this.xflags = 0;
    /* operating system */ this.os = 0;
    /* pointer to extra field or Z_NULL if none */ this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */ this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //
    /* space at extra (only when reading header) */ // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */ this.name = "";
    /* space at name (only when reading header) */ // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */ this.comment = "";
    /* space at comment (only when reading header) */ // this.comm_max   = 0;
    /* true if there was or will be a header crc */ this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */ this.done = false;
}
var gzheader = GZheader;
const toString = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH, Z_FINISH, Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR } = constants$2;
/* ===========================================================================*/ /**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/ function Inflate$1(options) {
    this.options = common.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
    }, options || {});
    const opt = this.options;
    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) opt.windowBits = -15;
    }
    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if (opt.windowBits > 15 && opt.windowBits < 48) // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    {
        if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
    }
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
    if (status !== Z_OK) throw new Error(messages[status]);
    this.header = new gzheader();
    inflate_1$2.inflateGetHeader(this.strm, this.header);
    // Setup dictionary
    if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
        else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
            status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== Z_OK) throw new Error(messages[status]);
        }
    }
}
/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Inflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
    // Convert data if needed
    if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = inflate_1$2.inflate(strm, _flush_mode);
        if (status === Z_NEED_DICT && dictionary) {
            status = inflate_1$2.inflateSetDictionary(strm, dictionary);
            if (status === Z_OK) status = inflate_1$2.inflate(strm, _flush_mode);
            else if (status === Z_DATA_ERROR) // Replace code with more verbose
            status = Z_NEED_DICT;
        }
        // Skip snyc markers if more data follows and not raw mode
        while(strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0){
            inflate_1$2.inflateReset(strm);
            status = inflate_1$2.inflate(strm, _flush_mode);
        }
        switch(status){
            case Z_STREAM_ERROR:
            case Z_DATA_ERROR:
            case Z_NEED_DICT:
            case Z_MEM_ERROR:
                this.onEnd(status);
                this.ended = true;
                return false;
        }
        // Remember real `avail_out` value, because we may patch out buffer content
        // to align utf8 strings boundaries.
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === Z_STREAM_END) {
                if (this.options.to === "string") {
                    let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                    let tail = strm.next_out - next_out_utf8;
                    let utf8str = strings.buf2string(strm.output, next_out_utf8);
                    // move tail & realign counters
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
                    this.onData(utf8str);
                } else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
        }
        // Must repeat iteration if out buffer is full
        if (status === Z_OK && last_avail_out === 0) continue;
        // Finalize if end of stream reached.
        if (status === Z_STREAM_END) {
            status = inflate_1$2.inflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return true;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Inflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Inflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK) {
        if (this.options.to === "string") this.result = this.chunks.join("");
        else this.result = common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/ function inflate$1(input, options) {
    const inflator = new Inflate$1(options);
    inflator.push(input);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || messages[inflator.err];
    return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function inflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/ var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;
var inflate_1$1 = {
    Inflate: Inflate_1$1,
    inflate: inflate_2,
    inflateRaw: inflateRaw_1$1,
    ungzip: ungzip$1,
    constants: constants
};
const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;
var pako = {
    Deflate: Deflate_1,
    deflate: deflate_1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1,
    Inflate: Inflate_1,
    inflate: inflate_1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip_1,
    constants: constants_1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7queL":[function(require,module,exports) {
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
exports.getCmdServId = void 0;
const constant_1 = require("e9b8d8aa9533c7f6");
function getCmdServId(node) {
    var _a;
    if (node.info.type.get() !== constant_1.GENERATION_TYPE) throw new Error(`getCmd, spinalnode in agument is not of type ${constant_1.GENERATION_TYPE}`);
    if (!node.element) throw new Error(`getCmd, spinalnode in agument have no Element`);
    return ((_a = node.element.ptr.data.model) === null || _a === void 0 ? void 0 : _a._server_id) || node.element.ptr.data.value;
}
exports.getCmdServId = getCmdServId;

},{"e9b8d8aa9533c7f6":"3AEx3"}],"kaL3f":[function(require,module,exports) {
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
exports.saveCmdsGenerateGeo = void 0;
const constant_1 = require("c2636e3de299805a");
const saveCmds_1 = require("18ddb9807c3cdcaf");
function saveCmdsGenerateGeo(json, local = true) {
    return (0, saveCmds_1.saveCmds)(json, constant_1.GENERATION_GEO_TYPE, local);
}
exports.saveCmdsGenerateGeo = saveCmdsGenerateGeo;

},{"c2636e3de299805a":"3AEx3","18ddb9807c3cdcaf":"2EMtY"}],"2EMtY":[function(require,module,exports) {
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
exports.saveCmds = void 0;
const spinal_model_graph_1 = require("c5ddb9eb7c39d27d");
const compress_json_1 = require("2c7d167626df9051");
const pako_1 = require("e04180f878137d77");
const spinal_core_connectorjs_1 = require("bc10b678de464367");
const constant_1 = require("c159a1a85f3d97fb");
const getContextGeneration_1 = require("46aa2e47e70f456c");
const utils_1 = require("28a3b8bd7d3a07be");
function saveCmds(json, generationType, local) {
    return __awaiter(this, void 0, void 0, function*() {
        const context = yield (0, getContextGeneration_1.getContextGeneration)();
        (0, compress_json_1.trimUndefinedRecursively)(json);
        const compressed = (0, pako_1.deflate)(JSON.stringify((0, compress_json_1.compress)(json)));
        const p = new spinal_core_connectorjs_1.Path();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        p.file = compressed;
        p.remaining.set(compressed.length);
        p.to_upload.set(compressed.length);
        const node = new spinal_model_graph_1.SpinalNode(`${generationType}-${new Date().toISOString()}`, constant_1.GENERATION_TYPE, p);
        (0, utils_1.addNodeGraphService)(node);
        node.info.add_attr("generationType", generationType);
        node.info.add_attr("local", local);
        yield context.addChildInContext(node, constant_1.GENERATION_RELATION);
        return {
            node,
            context,
            data: p
        };
    });
}
exports.saveCmds = saveCmds;

},{"c5ddb9eb7c39d27d":"fkEXw","2c7d167626df9051":"6XW9k","e04180f878137d77":"6sHn9","bc10b678de464367":"2uyD7","c159a1a85f3d97fb":"3AEx3","46aa2e47e70f456c":"9XiCf","28a3b8bd7d3a07be":"2QtL3"}],"9XiCf":[function(require,module,exports) {
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
exports.getContextGeneration = void 0;
const spinal_model_graph_1 = require("396c54f3a727ed42");
const graphservice_1 = require("40c51ca8be0c0bc7");
const constant_1 = require("1cb8a90990c998a2");
function getContextGeneration() {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = (0, graphservice_1.getGraph)();
        const contextRes = yield graph.getContext(constant_1.GENERATION_CONTEXT_NAME);
        if (contextRes) return contextRes;
        const context = new spinal_model_graph_1.SpinalContext(constant_1.GENERATION_CONTEXT_NAME, constant_1.GENERATION_CONTEXT_TYPE);
        yield graph.addContext(context);
        (0, graphservice_1.addNodeGraphService)(context);
        return context;
    });
}
exports.getContextGeneration = getContextGeneration;

},{"396c54f3a727ed42":"fkEXw","40c51ca8be0c0bc7":"MYBU6","1cb8a90990c998a2":"3AEx3"}],"fCePx":[function(require,module,exports) {
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
exports.saveCmdsProjectionGeo = void 0;
const constant_1 = require("209d76f0bc0e330e");
const saveCmds_1 = require("8170805c14242b7b");
function saveCmdsProjectionGeo(json, local = true) {
    return (0, saveCmds_1.saveCmds)(json, constant_1.GENERATION_PROJECTION_TYPE, local);
}
exports.saveCmdsProjectionGeo = saveCmdsProjectionGeo;

},{"209d76f0bc0e330e":"3AEx3","8170805c14242b7b":"2EMtY"}],"61gSG":[function(require,module,exports) {
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
exports.createCmdProjectionForManualAssing = void 0;
const consumeBatch_1 = require("a051677058fb5cc1");
const utils_1 = require("bf33c648dbc8a78c");
const getProperties_1 = require("ba247255a87aa98f");
const createCmdNotFoundItm_1 = require("c59e036e9695efe4");
const createCmdProjItm_1 = require("d822731ec7236b3e");
const getCenterPos_1 = require("3db949cccd2091c1");
function createCmdProjectionForManualAssing(warnArr, errorArr) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        const resMiss = [];
        const proms = [];
        for (const warn of warnArr){
            const bimObjectDbId = warn.dbid;
            proms.push(()=>handleWarnCmd(warn, bimObjectDbId, res));
        }
        for (const err of errorArr){
            const bimObjectDbId = err.dbid;
            proms.push(()=>handleErrCmd(err, bimObjectDbId, res, resMiss));
        }
        yield (0, consumeBatch_1.consumeBatch)(proms, 20, console.log.bind(null, "createCmdProjectionForManualAssing %d/%d"));
        return {
            cmd: res,
            cmdMiss: resMiss
        };
    });
}
exports.createCmdProjectionForManualAssing = createCmdProjectionForManualAssing;
function handleErrCmd(err, bimObjectDbId, res, resMiss) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObjectModel = (0, utils_1.getModelByBimFileIdLoaded)(err.bimFileId);
        const auProp = yield (0, getProperties_1.getProperties)(bimObjectModel, bimObjectDbId);
        const centerPos = yield (0, getCenterPos_1.getCenterPos)(auProp);
        if (err.validId) (0, createCmdProjItm_1.createCmdProjItm)(res, auProp, err.validId, centerPos, false);
        else (0, createCmdNotFoundItm_1.createCmdNotFoundItm)(resMiss, auProp, centerPos);
    });
}
function handleWarnCmd(warn, bimObjectDbId, res) {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObjectModel = (0, utils_1.getModelByBimFileIdLoaded)(warn.bimFileId);
        const auProp = yield (0, getProperties_1.getProperties)(bimObjectModel, bimObjectDbId);
        const centerPos = yield (0, getCenterPos_1.getCenterPos)(auProp);
        if (warn.validId) (0, createCmdProjItm_1.createCmdProjItm)(res, auProp, warn.validId, centerPos, false);
        else (0, createCmdProjItm_1.createCmdProjItm)(res, auProp, warn.PNId, centerPos, true);
    });
}

},{"a051677058fb5cc1":"2wzJt","bf33c648dbc8a78c":"2QtL3","ba247255a87aa98f":"aiYfE","c59e036e9695efe4":"2Lk71","d822731ec7236b3e":"jYc0v","3db949cccd2091c1":"8bb9P"}],"g1Ysh":[function(require,module,exports) {
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
 */ __exportStar(require("7b738d9e0e404da4"), exports);
__exportStar(require("dae7345e128f6a82"), exports);
__exportStar(require("a861bd0ce68d1b76"), exports);
__exportStar(require("4d7dcd8880d08ec"), exports);
__exportStar(require("f2aaa047f3300a32"), exports);
__exportStar(require("33decdba7d6bb6f6"), exports);
__exportStar(require("9e73773bd22a7e22"), exports);
__exportStar(require("c6e0658e83d35d0"), exports);
__exportStar(require("d3347ff1f37eaf42"), exports);
__exportStar(require("6394dd712e5010e3"), exports);

},{"7b738d9e0e404da4":"4NiA0","dae7345e128f6a82":"5ms3H","a861bd0ce68d1b76":"g06sp","4d7dcd8880d08ec":"KAERI","f2aaa047f3300a32":"gzFME","33decdba7d6bb6f6":"dpwhV","9e73773bd22a7e22":"1gulT","c6e0658e83d35d0":"eNKYZ","d3347ff1f37eaf42":"ixgSJ","6394dd712e5010e3":"aOVLJ"}],"4NiA0":[function(require,module,exports) {
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
exports.checkDiffObj = void 0;
function checkDiffObj(result, label, nodeValue, archiValue, unit) {
    if (nodeValue != archiValue) {
        const p = {
            label,
            nodeValue,
            archiValue
        };
        if (unit) Object.assign(p, {
            unit
        });
        result.push(p);
    }
}
exports.checkDiffObj = checkDiffObj;

},{}],"5ms3H":[function(require,module,exports) {
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
exports.diffBimObjs = void 0;
const IGetArchi_1 = require("37e23c792ec6e280");
const getNodeFromGeo_1 = require("eedc363ecf1b6985");
const findNodeArchiWithSpinalNode_1 = require("35a251d2778e60e5");
function diffBimObjs(bimObjInfos, bimObjNodes, manualAssingment) {
    const newBimObj = [];
    const delBimObj = [];
    for (const bimObjInfo of bimObjInfos){
        const node = (0, getNodeFromGeo_1.getNodeFromGeo)(bimObjNodes, bimObjInfo, manualAssingment);
        if (!node) {
            // not found
            newBimObj.push(bimObjInfo);
            bimObjInfo.modificationType = IGetArchi_1.EModificationType.create;
            continue;
        }
    }
    for (const bimObjNode of bimObjNodes){
        const nodeArchi = (0, findNodeArchiWithSpinalNode_1.findNodeArchiWithSpinalNode)(bimObjNode, bimObjInfos, manualAssingment);
        if (nodeArchi === undefined) delBimObj.push(bimObjNode._server_id);
    }
    return {
        newBimObj,
        delBimObj
    };
}
exports.diffBimObjs = diffBimObjs;

},{"37e23c792ec6e280":"4W13A","eedc363ecf1b6985":"aOVLJ","35a251d2778e60e5":"dpwhV"}],"aOVLJ":[function(require,module,exports) {
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
exports.getNodeFromGeo = void 0;
const getNodeInfoArchiAttr_1 = require("3f55e6261f57c9eb");
const spinal_core_connectorjs_1 = require("933fb1371d92ce6");
function getNodeFromGeo(geoNodes, nodeInfo, manualAssingment) {
    var _a, _b;
    // check ManualAssingment retrun it if found;
    const serverId = manualAssingment.get(nodeInfo.externalId);
    if (serverId) return spinal_core_connectorjs_1.FileSystem._objects[serverId];
    // not in manualAssing
    // search via externalId
    for (const geoRoomNode of geoNodes){
        if (((_a = geoRoomNode.info.externalId) === null || _a === void 0 ? void 0 : _a.get()) === nodeInfo.externalId) return geoRoomNode;
    }
    // search via name
    const roomArchiName = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(nodeInfo, "name");
    for (const geoRoomNode of geoNodes){
        if (((_b = geoRoomNode.info.externalId) === null || _b === void 0 ? void 0 : _b.get()) === roomArchiName) return geoRoomNode;
    }
}
exports.getNodeFromGeo = getNodeFromGeo;

},{"3f55e6261f57c9eb":"4Tsm1","933fb1371d92ce6":"2uyD7"}],"dpwhV":[function(require,module,exports) {
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
exports.findNodeArchiWithSpinalNode = void 0;
const getNodeInfoArchiAttr_1 = require("51d83cf223e79ef2");
const spinal_core_connectorjs_1 = require("f6eb84477179de8");
function findNodeArchiWithSpinalNode(node, nodeInfosArchi, manualAssingment) {
    var _a, _b;
    // check ManualAssingment retrun it if found;
    for (const [extId, serverId] of manualAssingment){
        if (spinal_core_connectorjs_1.FileSystem._objects[serverId] === node) for (const nodeArchi of nodeInfosArchi){
            if (nodeArchi.externalId === extId) return nodeArchi;
        }
    }
    // search via externalId
    for (const nodeArchi1 of nodeInfosArchi){
        if (nodeArchi1.externalId === ((_a = node.info.externalId) === null || _a === void 0 ? void 0 : _a.get())) return nodeArchi1;
    }
    // search via name
    for (const nodeArchi2 of nodeInfosArchi){
        const nodeArchiName = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(nodeArchi2, "name");
        if (nodeArchiName === ((_b = node.info.name) === null || _b === void 0 ? void 0 : _b.get())) return nodeArchi2;
    }
}
exports.findNodeArchiWithSpinalNode = findNodeArchiWithSpinalNode;

},{"51d83cf223e79ef2":"4Tsm1","f6eb84477179de8":"2uyD7"}],"g06sp":[function(require,module,exports) {
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
exports.diffFloorWithContextGeo = void 0;
const IGetArchi_1 = require("618edeb0d8f7dc3f");
const getFloorFromContext_1 = require("df1f3916a19398a8");
const getDiffRefFloor_1 = require("a1ec398ce10d8393");
const diffRoomChildren_1 = require("444ab31eefefab4c");
const diffInfoAttr_1 = require("c95bd5eb12dee6a3");
function diffFloorWithContextGeo(floorArchi, contextGeo, buildingServerId, manualAssingment) {
    return __awaiter(this, void 0, void 0, function*() {
        const floorNode = yield (0, getFloorFromContext_1.getFloorFromContext)(contextGeo, buildingServerId, floorArchi, manualAssingment);
        if (!floorNode) {
            // floor not found
            floorArchi.properties.modificationType = IGetArchi_1.EModificationType.create;
            return undefined;
        }
        // archi exist in context
        const [diffInfo, diffRoom, diffRef] = yield Promise.all([
            // -> diff archi info
            (0, diffInfoAttr_1.diffInfoAttr)(floorArchi.properties, floorNode),
            // -> diff archi children
            (0, diffRoomChildren_1.diffRoomChildren)(floorNode, contextGeo, floorArchi, manualAssingment),
            // diff structures
            (0, getDiffRefFloor_1.getDiffRefFloor)(floorNode, floorArchi, manualAssingment)
        ]);
        return {
            diffInfo,
            diffRoom,
            diffRef
        };
    });
}
exports.diffFloorWithContextGeo = diffFloorWithContextGeo;

},{"618edeb0d8f7dc3f":"4W13A","df1f3916a19398a8":"ixgSJ","a1ec398ce10d8393":"eNKYZ","444ab31eefefab4c":"gzFME","c95bd5eb12dee6a3":"KAERI"}],"ixgSJ":[function(require,module,exports) {
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
exports.getFloorFromContext = void 0;
const getNodeInfoArchiAttr_1 = require("5ccf7e7d0d60df88");
const spinal_core_connectorjs_1 = require("162b330b1869ab64");
function getFloorFromContext(contextGeo, buildingServId, floorArchi, manualAssingment) {
    return __awaiter(this, void 0, void 0, function*() {
        // check ManualAssingment retrun it if found;
        const serverId = manualAssingment.get(floorArchi.properties.externalId);
        if (serverId) return spinal_core_connectorjs_1.FileSystem._objects[serverId];
        // not in manualAssing; get building floors
        const buildings = yield contextGeo.getChildrenInContext(contextGeo);
        const buildingsFloors = yield Promise.all(buildings.map((building)=>{
            if (building._server_id === buildingServId) return building.getChildrenInContext(contextGeo);
        }));
        // search via externalId
        for (const buildingFloors of buildingsFloors){
            if (buildingFloors) for (const floorNode of buildingFloors){
                if (floorNode.info.externalId.get() === floorArchi.properties.externalId) return floorNode;
            }
        }
        // search via name
        const floorArchiName = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(floorArchi.properties, "name");
        for (const buildingFloors of buildingsFloors){
            if (buildingFloors) for (const floorNode of buildingFloors){
                if (floorNode.info.name.get() === floorArchiName) return floorNode;
            }
        }
    });
}
exports.getFloorFromContext = getFloorFromContext;

},{"5ccf7e7d0d60df88":"4Tsm1","162b330b1869ab64":"2uyD7"}],"eNKYZ":[function(require,module,exports) {
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
exports.getDiffRefFloor = void 0;
const Constant_1 = require("8c60df9e9075ed77");
const diffBimObjs_1 = require("2e0e158900f573fb");
function getDiffRefFloor(floorNode, floorArchi, manualAssingment) {
    return __awaiter(this, void 0, void 0, function*() {
        const floorNodeRefObjs = yield floorNode.getChildren(Constant_1.GEO_REFERENCE_RELATION);
        const structures = Object.values(floorArchi.structures).map((itm)=>itm.properties);
        const diffRef = (0, diffBimObjs_1.diffBimObjs)(structures, floorNodeRefObjs, manualAssingment);
        return diffRef;
    });
}
exports.getDiffRefFloor = getDiffRefFloor;

},{"8c60df9e9075ed77":"b3pAR","2e0e158900f573fb":"5ms3H"}],"gzFME":[function(require,module,exports) {
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
exports.diffRoomChildren = void 0;
const IGetArchi_1 = require("3f75b6c46fb0e393");
const getNodeFromGeo_1 = require("223929b6394ecfc5");
const findNodeArchiWithSpinalNode_1 = require("b09c4d857b676165");
const diffInfoAttr_1 = require("51b19a16674c6ef9");
function diffRoomChildren(floorNode, contextGeo, floorArchi, manualAssingment) {
    return __awaiter(this, void 0, void 0, function*() {
        const updateRooms = [];
        const newRooms = [];
        const delRooms = [];
        const proms = [];
        const roomNodes = yield floorNode.getChildrenInContext(contextGeo);
        for (const [, roomAchi] of Object.entries(floorArchi.children)){
            const roomNode = (0, getNodeFromGeo_1.getNodeFromGeo)(roomNodes, roomAchi.properties, manualAssingment);
            if (!roomNode) {
                // not found
                newRooms.push(roomAchi);
                roomAchi.properties.modificationType = IGetArchi_1.EModificationType.create;
                roomAchi.properties.spinalnodeServerId = floorNode._server_id;
                continue;
            }
            proms.push((0, diffInfoAttr_1.diffInfoAttr)(roomAchi.properties, roomNode).then((diff)=>{
                if (diff.diffAttr.length === 0 && diff.diffInfo.length === 0) return;
                updateRooms.push({
                    roomArchi: roomAchi,
                    diff
                });
            }));
        }
        yield Promise.all(proms);
        const nodeInfosArchi = Object.values(floorArchi.children).map((it)=>it.properties);
        for (const roomNode of roomNodes){
            const roomArchi = (0, findNodeArchiWithSpinalNode_1.findNodeArchiWithSpinalNode)(roomNode, nodeInfosArchi, manualAssingment);
            if (roomArchi === undefined) delRooms.push(roomNode._server_id);
        }
        return {
            newRooms,
            updateRooms,
            delRooms
        };
    });
}
exports.diffRoomChildren = diffRoomChildren;

},{"3f75b6c46fb0e393":"4W13A","223929b6394ecfc5":"aOVLJ","b09c4d857b676165":"dpwhV","51b19a16674c6ef9":"KAERI"}],"KAERI":[function(require,module,exports) {
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
exports.diffInfoAttr = void 0;
const spinal_env_viewer_plugin_documentation_service_1 = require("e5e9b6ebcb04d9b8");
const IGetArchi_1 = require("704b4c5e3128acb0");
const checkDiffObj_1 = require("42dc442af3802e2e");
const getNodeInfoArchiAttr_1 = require("cdd4539f5d85c7ad");
function diffInfoAttr(nodeInfo, spinalNode) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        nodeInfo.spinalnodeServerId = spinalNode._server_id;
        nodeInfo.modificationType = 0;
        const diffInfo = [];
        // check dbId
        (0, checkDiffObj_1.checkDiffObj)(diffInfo, "dbid", (_a = spinalNode.info.dbid) === null || _a === void 0 ? void 0 : _a.get(), nodeInfo.dbId);
        // check externalId
        (0, checkDiffObj_1.checkDiffObj)(diffInfo, "externalId", (_b = spinalNode.info.externalId) === null || _b === void 0 ? void 0 : _b.get(), nodeInfo.externalId);
        // check name node
        const name = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(nodeInfo, "name");
        const number = (0, getNodeInfoArchiAttr_1.getNodeInfoArchiAttr)(nodeInfo, "number");
        (0, checkDiffObj_1.checkDiffObj)(diffInfo, "name", spinalNode.info.name.get(), number ? `${number}-${name}` : name);
        // -> diff archi attr
        const categoryNodeSpatial = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(spinalNode, "Spatial");
        const attrs = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(spinalNode, categoryNodeSpatial);
        const diffAttr = [];
        for (const archiProps of nodeInfo.properties){
            if (archiProps.category === "__internalref__") continue; // if level skip (will be set later)
            let find = false;
            for (const attr of attrs)if (archiProps.name === attr.label.get()) {
                (0, checkDiffObj_1.checkDiffObj)(diffAttr, archiProps.name, attr.value.get(), archiProps.value, archiProps.dataTypeContext);
                find = true;
                break;
            }
            if (find === false) (0, checkDiffObj_1.checkDiffObj)(diffAttr, archiProps.name, undefined, archiProps.value, archiProps.dataTypeContext);
        }
        if (diffInfo.length > 0) {
            nodeInfo.modificationType = nodeInfo.modificationType | IGetArchi_1.EModificationType.update;
            nodeInfo.modificationType = nodeInfo.modificationType | IGetArchi_1.EModificationType.updateNode;
        }
        if (diffAttr.length > 0) {
            nodeInfo.modificationType = nodeInfo.modificationType | IGetArchi_1.EModificationType.update;
            nodeInfo.modificationType = nodeInfo.modificationType | IGetArchi_1.EModificationType.updateAttr;
        }
        return {
            diffInfo,
            diffAttr
        };
    });
}
exports.diffInfoAttr = diffInfoAttr;

},{"e5e9b6ebcb04d9b8":"5rYVR","704b4c5e3128acb0":"4W13A","42dc442af3802e2e":"4NiA0","cdd4539f5d85c7ad":"4Tsm1"}],"1gulT":[function(require,module,exports) {
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
exports.floorArchiHasChildren = void 0;
function floorArchiHasChildren(floorArchi) {
    for(const ext in floorArchi.children){
        if (Object.prototype.hasOwnProperty.call(floorArchi.children, ext)) return true;
    }
    return false;
}
exports.floorArchiHasChildren = floorArchiHasChildren;

},{}],"fNlxU":[function(require,module,exports) {
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
__exportStar(require("5a06c03b8c928613"), exports);
__exportStar(require("79428b54087f1697"), exports);
__exportStar(require("42c4ef575bfc7bf1"), exports);
__exportStar(require("25029c3570e74560"), exports);
__exportStar(require("e129e97fbc64fd4"), exports);
__exportStar(require("2b3308415ec8c04d"), exports);
__exportStar(require("d8c8a701ef8218b6"), exports);
__exportStar(require("a773654ec46106fb"), exports);
__exportStar(require("9ab9ee6302e405f6"), exports);
__exportStar(require("26ac4eb4a5041e48"), exports);
__exportStar(require("d5a772c5ad03bdd8"), exports);
__exportStar(require("cd2ec4d6d733ac93"), exports);
__exportStar(require("e09c10e0e3ecea17"), exports);
__exportStar(require("1befa413171ea0"), exports);
__exportStar(require("d9b5b780780b4d1"), exports);
__exportStar(require("6a4663c470666d2b"), exports);
__exportStar(require("290b955ac3d8d28f"), exports);
__exportStar(require("51b9070d8cf7259d"), exports);
__exportStar(require("5264745495a75911"), exports);
__exportStar(require("59db8976814c9bc6"), exports);
__exportStar(require("5479e7aedfe151e8"), exports);
__exportStar(require("26f3a80274351b06"), exports);
__exportStar(require("8a7927f103accf97"), exports);
__exportStar(require("44f19d76dfc37114"), exports);
__exportStar(require("60b79e84c446383b"), exports);
__exportStar(require("5841aaaf9f35b93b"), exports);
__exportStar(require("26721e59a64d44cc"), exports);
__exportStar(require("733ed8150dd9cd0c"), exports);
__exportStar(require("908c25def61e4e3b"), exports);
__exportStar(require("9c171735b8dd2cb"), exports);
__exportStar(require("c5f4b4bff7f2ee47"), exports);
__exportStar(require("360b4e2db5f2e2d1"), exports);
__exportStar(require("848edc917568a12"), exports);
__exportStar(require("3a0b5bd71abe7098"), exports);

},{"5a06c03b8c928613":"8yd5K","79428b54087f1697":"fkW9L","42c4ef575bfc7bf1":"gbyev","25029c3570e74560":"jzE3X","e129e97fbc64fd4":"bXpxK","2b3308415ec8c04d":"lynDq","d8c8a701ef8218b6":"jfjEw","a773654ec46106fb":"b7337","9ab9ee6302e405f6":"77akB","26ac4eb4a5041e48":"4PJt3","d5a772c5ad03bdd8":"iOdSD","cd2ec4d6d733ac93":"1xqG0","e09c10e0e3ecea17":"2sNYL","1befa413171ea0":"jTt3S","d9b5b780780b4d1":"i7WvX","6a4663c470666d2b":"4N0yQ","290b955ac3d8d28f":"a4HpH","51b9070d8cf7259d":"3DC3U","5264745495a75911":"VQg7m","59db8976814c9bc6":"fhIeg","5479e7aedfe151e8":"a17fo","26f3a80274351b06":"iEPLy","8a7927f103accf97":"2rMBe","44f19d76dfc37114":"fmm7b","60b79e84c446383b":"1osyi","5841aaaf9f35b93b":"i3Czq","26721e59a64d44cc":"7IOVH","733ed8150dd9cd0c":"30xEH","908c25def61e4e3b":"9hE8M","9c171735b8dd2cb":"e7uSI","c5f4b4bff7f2ee47":"5YQdd","360b4e2db5f2e2d1":"bJ91b","848edc917568a12":"cZkMG","3a0b5bd71abe7098":"djnxu"}],"8yd5K":[function(require,module,exports) {
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
exports.ProjectionItemModel = void 0;
const ProjectionItem_1 = require("659125655239f369");
const spinal_core_connectorjs_1 = require("eb1d3c51255e1b8c");
const utils_1 = require("23ea181649c813e8");
const ProjectionOffsetModel_1 = require("19fa1d435fb02bea");
const getExternalIdMapping_1 = require("21ee3c6d2b78540a");
const getBimFileByBimFileId_1 = require("a107e363e53fbdb9");
class ProjectionItemModel extends spinal_core_connectorjs_1.Model {
    constructor(projectionItem){
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        this.add_attr("uid", projectionItem.uid);
        this.add_attr("bimFileId", (0, utils_1.getBimFileIdByModelId)(projectionItem.modelId));
        this.add_attr("offset", new ProjectionOffsetModel_1.ProjectionOffsetModel(projectionItem.offset));
    }
    update(projectionItem) {
        return __awaiter(this, void 0, void 0, function*() {
            this.uid.set(projectionItem.uid);
            this.bimFileId.set((0, utils_1.getBimFileIdByModelId)(projectionItem.modelId));
            this.offset.update(projectionItem.offset);
            const model = (0, utils_1.getModelByModelId)(projectionItem.modelId);
            const tree = model.getInstanceTree();
            const children = (0, utils_1.getDbIdChildren)(tree, projectionItem.dbId);
            if (children.length > 0) {
                const path = yield (0, utils_1.getPropPath)(projectionItem.dbId, model);
                if (typeof this.path === "undefined") this.add_attr("path", path);
                else this.path.set(path);
            } else if (typeof this.externalId === "undefined") this.add_attr("externalId", projectionItem.externalId);
            else this.externalId.set(projectionItem.externalId);
            return this;
        });
    }
    toUxModel() {
        return __awaiter(this, void 0, void 0, function*() {
            const model = (0, utils_1.getModelByBimFileIdLoaded)(this.bimFileId.get());
            if (!model) try {
                const bimFile = yield (0, getBimFileByBimFileId_1.getBimFileByBimFileId)(this.bimFileId.get());
                throw new Error(`Model [${bimFile.info.name.get()}] not loaded for bimFileId : ${this.bimFileId.get()}`);
            } catch (error) {
                console.error(error);
                throw error;
            }
            let projectionItem;
            if (typeof this.path !== "undefined") {
                const path = this.path.get();
                const props = yield (0, utils_1.getPropItemFromPropPath)(path, model);
                if (!props) throw new Error(`projectionItemModel [${this.uid.get()}] no item found for path : ${path}`);
                projectionItem = new ProjectionItem_1.ProjectionItem(props.name, model.id, props.dbId, props.properties, props.externalId);
            } else {
                const extMap = yield (0, getExternalIdMapping_1.getExternalIdMapping)(model);
                const dbid = extMap[this.externalId.get()];
                if (!dbid) throw new Error(`projectionItemModel [${this.uid.get()}] skiped - no item found for externalId : ${this.externalId.get()}`);
                const props = yield (0, utils_1.getBulkProperties)(model, [
                    dbid
                ]);
                projectionItem = new ProjectionItem_1.ProjectionItem(props[0].name, model.id, dbid, props[0].properties, props[0].externalId);
            }
            projectionItem.uid = this.uid.get();
            projectionItem.offset = this.offset.get();
            return projectionItem;
        });
    }
}
exports.ProjectionItemModel = ProjectionItemModel;
spinal_core_connectorjs_1.spinalCore.register_models(ProjectionItemModel);

},{"659125655239f369":"1xqG0","eb1d3c51255e1b8c":"2uyD7","23ea181649c813e8":"2QtL3","19fa1d435fb02bea":"fkW9L","21ee3c6d2b78540a":"c0Xxv","a107e363e53fbdb9":"bgfSo"}],"1xqG0":[function(require,module,exports) {
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
exports.ProjectionItem = void 0;
const getModelByModelId_1 = require("c6a29a0bfbe6bf8c");
class ProjectionItem {
    constructor(name, modelId, dbId, properties, externalId){
        this.offset = {
            r: 0,
            t: 0,
            z: 0
        };
        this.uid = `${Date.now()}-${Math.round(Math.random() * 10000)}-${Math.round(Math.random() * 10000)}`;
        this.name = name;
        this.modelId = modelId;
        this.dbId = dbId;
        this.id = `${modelId}-${dbId}`;
        this.properties = properties;
        this.externalId = externalId;
    }
    selectItem(viewer) {
        const model = (0, getModelByModelId_1.getModelByModelId)(this.modelId);
        return viewer.select([
            this.dbId
        ], model);
    }
}
exports.ProjectionItem = ProjectionItem;

},{"c6a29a0bfbe6bf8c":"9RDu2"}],"fkW9L":[function(require,module,exports) {
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
exports.ProjectionOffsetModel = void 0;
const spinal_core_connectorjs_1 = require("947891d0f75ad8b0");
class ProjectionOffsetModel extends spinal_core_connectorjs_1.Model {
    constructor(offset){
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        this.add_attr("r", offset.r);
        this.add_attr("t", offset.t);
        this.add_attr("z", offset.z);
    }
    update(offset) {
        this.r.set(offset.r);
        this.t.set(offset.t);
        this.z.set(offset.z);
    }
}
exports.ProjectionOffsetModel = ProjectionOffsetModel;
spinal_core_connectorjs_1.spinalCore.register_models(ProjectionOffsetModel);

},{"947891d0f75ad8b0":"2uyD7"}],"gbyev":[function(require,module,exports) {
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
exports.ProjectionGroupItemModel = void 0;
const spinal_core_connectorjs_1 = require("de9ba437d0e18465");
const utils_1 = require("fc5f1b8d476b97a6");
const getExternalIdMapping_1 = require("eba1d41e2c43edca");
const getBimFileByBimFileId_1 = require("a81842f8cb298355");
class ProjectionGroupItemModel extends spinal_core_connectorjs_1.Model {
    constructor(item){
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        this.add_attr("bimFileId", (0, utils_1.getBimFileIdByModelId)(item.modelId));
        this.add_attr("uid", item.uid);
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function*() {
            this.bimFileId.set((0, utils_1.getBimFileIdByModelId)(item.modelId));
            this.uid.set(item.uid);
            const model = (0, utils_1.getModelByModelId)(item.modelId);
            const tree = model.getInstanceTree();
            const children = (0, utils_1.getDbIdChildren)(tree, item.dbId);
            if (children.length > 0) {
                const path = yield (0, utils_1.getPropPath)(item.dbId, model);
                if (typeof this.path === "undefined") this.add_attr("path", path);
                else this.path.set(path);
            } else if (typeof this.externalId === "undefined") this.add_attr("externalId", item.externalId);
            else this.externalId.set(item.externalId);
            return this;
        });
    }
    toUxModel() {
        return __awaiter(this, void 0, void 0, function*() {
            const model = (0, utils_1.getModelByBimFileIdLoaded)(this.bimFileId.get());
            if (!model) try {
                const bimFile = yield (0, getBimFileByBimFileId_1.getBimFileByBimFileId)(this.bimFileId.get());
                throw new Error(`Model [${bimFile.info.name.get()}] not loaded for bimFileId : ${this.bimFileId.get()}`);
            } catch (error) {
                console.error(error);
                throw error;
            }
            if (typeof this.path !== "undefined") {
                const path = this.path.get();
                const props = yield (0, utils_1.getPropItemFromPropPath)(path, model);
                if (!props) throw new Error(`ProjectionGroupItemModel [${this.uid.get()}] no item found for path : ${path}`);
                return {
                    modelId: model.id,
                    dbid: props.dbId
                };
            } else {
                const extMap = yield (0, getExternalIdMapping_1.getExternalIdMapping)(model);
                const dbid = extMap[this.externalId.get()];
                if (!dbid) throw new Error(`ProjectionGroupItemModel [${this.uid.get()}] skiped - no item found for externalId : ${this.externalId.get()}`);
                return {
                    modelId: model.id,
                    dbid: dbid
                };
            }
        });
    }
}
exports.ProjectionGroupItemModel = ProjectionGroupItemModel;
spinal_core_connectorjs_1.spinalCore.register_models(ProjectionGroupItemModel);

},{"de9ba437d0e18465":"2uyD7","fc5f1b8d476b97a6":"2QtL3","eba1d41e2c43edca":"c0Xxv","a81842f8cb298355":"bgfSo"}],"jzE3X":[function(require,module,exports) {
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
exports.ProjectionGroupModel = void 0;
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
 */ const ProjectionGroup_1 = require("760ab14d934ae2ce");
const spinal_core_connectorjs_1 = require("308cb3676ec07a7e");
const ProjectionOffsetModel_1 = require("b54f46f6e947941f");
const ProjectionGroupItemModel_1 = require("b5b3a699673e2bca");
class ProjectionGroupModel extends spinal_core_connectorjs_1.Model {
    constructor(projectionGroup){
        super();
        if (spinal_core_connectorjs_1.FileSystem._sig_server === false) return;
        this.add_attr("name", projectionGroup.name);
        this.add_attr("uid", projectionGroup.uid);
        this.add_attr("offset", new ProjectionOffsetModel_1.ProjectionOffsetModel(projectionGroup.offset));
        this.add_attr("data", []);
    }
    updateData(projectionGroup) {
        return __awaiter(this, void 0, void 0, function*() {
            const promises = [];
            const toDel = [];
            for(let idx = 0; idx < this.data.length; idx++){
                const projItemModel = this.data[idx];
                const item = projectionGroup.computedData.find((itm)=>{
                    return itm.uid === projItemModel.uid.get();
                });
                if (item) promises.push(projItemModel.update(item));
                else toDel.push(projItemModel);
            }
            for (const itm of toDel)this.data.remove_ref(itm);
            // add
            for (const data of projectionGroup.computedData){
                const item = this.data.detect((itm)=>{
                    return itm.uid.get() === data.uid;
                });
                if (!item) {
                    const mod = new ProjectionGroupItemModel_1.ProjectionGroupItemModel(data);
                    promises.push(mod.update(data));
                    this.data.push(mod);
                }
            }
            yield Promise.all(promises);
            return this;
        });
    }
    update(projectionGroup) {
        this.name.set(projectionGroup.name);
        this.uid.set(projectionGroup.uid);
        this.offset.update(projectionGroup.offset);
        return this.updateData(projectionGroup);
    }
    toUxModel() {
        return __awaiter(this, void 0, void 0, function*() {
            const projectionGroup = new ProjectionGroup_1.ProjectionGroup(this.name.get());
            projectionGroup.offset = this.offset.get();
            projectionGroup.uid = this.uid.get();
            const promises = [];
            for (const data of this.data)promises.push(data.toUxModel());
            const data = yield Promise.all(promises);
            for (const { modelId, dbid } of data){
                const obj = projectionGroup.data.find((itm)=>itm.modelId === modelId);
                if (obj) obj.selection.push(dbid);
                else projectionGroup.data.push({
                    modelId,
                    selection: [
                        dbid
                    ]
                });
            }
            yield projectionGroup.updateComputed();
            return projectionGroup;
        });
    }
}
exports.ProjectionGroupModel = ProjectionGroupModel;
spinal_core_connectorjs_1.spinalCore.register_models(ProjectionGroupModel);

},{"760ab14d934ae2ce":"4PJt3","308cb3676ec07a7e":"2uyD7","b54f46f6e947941f":"fkW9L","b5b3a699673e2bca":"gbyev"}],"bXpxK":[function(require,module,exports) {
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
exports.addSelectionToList = void 0;
const getBulkProperties_1 = require("77168fd90ba055e0");
const addProjectItem_1 = require("9047da35d389e94f");
function addSelectionToList(list, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const aggregateSelection = viewer.getAggregateSelection();
        for (const select of aggregateSelection){
            const props = yield (0, getBulkProperties_1.getBulkProperties)(select.model, select.selection);
            const prom = [];
            for (const prop of props)prom.push((0, addProjectItem_1.addProjectItem)(list, prop));
            yield Promise.all(prom);
        }
    });
}
exports.addSelectionToList = addSelectionToList;

},{"77168fd90ba055e0":"kRW4n","9047da35d389e94f":"77akB"}],"77akB":[function(require,module,exports) {
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
exports.addProjectItem = void 0;
const ProjectionGroup_1 = require("827f6d58bbcff713");
const ProjectionItem_1 = require("1103e5e1b8bdb5fd");
function addProjectItem(list, prop) {
    return __awaiter(this, void 0, void 0, function*() {
        let found = false;
        const promRemove = [];
        for (const item of list){
            if (item instanceof ProjectionItem_1.ProjectionItem && item.modelId === prop.modelId && item.dbId === prop.dbId) {
                found = true;
                continue;
            } else if (item instanceof ProjectionGroup_1.ProjectionGroup) promRemove.push(item.deleteItem(prop));
        }
        if (!found) list.push(new ProjectionItem_1.ProjectionItem(prop.name, prop.modelId, prop.dbId, prop.properties, prop.externalId));
        yield Promise.all(promRemove);
    });
}
exports.addProjectItem = addProjectItem;

},{"827f6d58bbcff713":"4PJt3","1103e5e1b8bdb5fd":"1xqG0"}],"lynDq":[function(require,module,exports) {
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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getColorPreview = exports.setColorPreview = exports.stopPreview = exports.previewItem = void 0;
const getBBoxAndMatrixs_1 = require("f40f3d3f83b2b7a5");
const getLeafDbIdsByModelId_1 = require("15e4fd72152b91e3");
const getPointOffset_1 = require("b265ecec4dca013d");
const transformRtzToXyz_1 = require("311ab18f9c81584a");
const isProjectionGroup_1 = require("65d639fa7291f739");
const lodash_throttle_1 = __importDefault(require("e549a7df983e1c50"));
const constant_1 = require("b26ee11e10a55143");
let current = null;
let sphereMat = null;
let lineMat = null;
let sceneSphereOverlay = null;
let sceneLineOverlay = null;
let color = "#00ff00";
exports.previewItem = (0, lodash_throttle_1.default)(_previewItem, 1000);
function _previewItem(item, offset, mode, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const _offset = (0, transformRtzToXyz_1.transformRtzToXyz)(offset);
        if (current === null) createNew(item, _offset);
        try {
            current.offset = _offset;
            populateItemToShow(item, mode);
            yield (0, getBBoxAndMatrixs_1.getBBoxAndMatrixs)(current, viewer);
            for (const itm of current.itemToShow)updatePointOffset(itm, _offset, viewer);
            viewer.impl.invalidate(true, true, true);
        } catch (e) {
            console.error(e);
        }
    });
}
function stopPreview(viewer) {
    const curr = current;
    if (curr === null) return Promise.resolve();
    curr.lock = true;
    for (const itm of curr.itemToShow)hideItem(itm);
    viewer.impl.invalidate(true, true, true);
    current = null;
    viewer.impl.invalidate(true, true, true);
}
exports.stopPreview = stopPreview;
function setColorPreview(colorStr) {
    color = colorStr;
    if (sphereMat) sphereMat.color.set(color);
    if (lineMat) lineMat.color.set(color);
}
exports.setColorPreview = setColorPreview;
function getColorPreview() {
    return color;
}
exports.getColorPreview = getColorPreview;
function createNew(item, offset) {
    current = {
        item,
        mode: 0,
        offset,
        lock: false,
        itemToShow: []
    };
}
function populateItemToShow(item, mode) {
    const curr = current;
    if (curr.mode !== mode) {
        if (mode === 0) {
            for (const itm of curr.itemToShow)hideItem(itm);
            curr.itemToShow = [];
            curr.mode = mode;
        } else if (mode === 1) {
            if ((0, isProjectionGroup_1.isProjectionGroup)(item)) {
                const first = item.computedData[0];
                if (typeof first === "undefined") return;
                const ids = (0, getLeafDbIdsByModelId_1.getLeafDbIdsByModelId)(first.modelId, first.dbId);
                if (ids.length === 0) return;
                for (const itm of curr.itemToShow)hideItem(itm);
                curr.itemToShow = [
                    {
                        dbId: ids[0],
                        modelId: first.modelId
                    }
                ];
            } else {
                const ids = (0, getLeafDbIdsByModelId_1.getLeafDbIdsByModelId)(item.modelId, item.dbId);
                if (ids.length === 0) return;
                for (const itm of curr.itemToShow)hideItem(itm);
                curr.itemToShow = [
                    {
                        dbId: ids[0],
                        modelId: item.modelId
                    }
                ];
            }
        } else if ((0, isProjectionGroup_1.isProjectionGroup)(item)) {
            for (const itm of curr.itemToShow)hideItem(itm);
            curr.itemToShow = [];
            for (const itm of item.computedData){
                const ids = (0, getLeafDbIdsByModelId_1.getLeafDbIdsByModelId)(itm.modelId, itm.dbId);
                if (ids.length === 0) continue;
                for (const id of ids)curr.itemToShow.push({
                    dbId: id,
                    modelId: itm.modelId
                });
            }
        } else {
            for (const itm of curr.itemToShow)hideItem(itm);
            const ids = (0, getLeafDbIdsByModelId_1.getLeafDbIdsByModelId)(item.modelId, item.dbId);
            if (ids.length === 0) return;
            curr.itemToShow = [];
            for (const id of ids)curr.itemToShow.push({
                dbId: id,
                modelId: item.modelId
            });
        }
        curr.mode = mode;
    }
}
function hideItem(item) {
    sceneSphereOverlay.remove(item.sphere);
    sceneLineOverlay.remove(item.line);
}
function getSphereMat(viewer) {
    if (sphereMat === null) {
        sphereMat = new THREE.MeshPhongMaterial({
            color: 0x00ff00
        });
        const { scene } = viewer.impl.createOverlayScene(constant_1.OVERLAY_SPHERES_PREVIEW_POSITION_NAME, sphereMat);
        sceneSphereOverlay = scene;
    }
    return sphereMat;
}
function getLineMat(viewer) {
    if (lineMat === null) {
        lineMat = new THREE.LineBasicMaterial({
            color: 0x00ff00,
            depthWrite: true,
            depthTest: true,
            linewidth: 3,
            opacity: 1.0
        });
        const { scene } = viewer.impl.createOverlayScene(constant_1.OVERLAY_LINES_PREVIEW_POSITION_NAME, lineMat);
        sceneLineOverlay = scene;
    }
    return lineMat;
}
function updatePointOffset(item, offset, viewer) {
    const matrixWorld = item.matrixWorld;
    const bbox = item.bbox;
    const bBoxCenter = new THREE.Vector3();
    bbox.getCenter(bBoxCenter);
    const point = (0, getPointOffset_1.getPointOffset)(bBoxCenter, offset, matrixWorld);
    const sphere = getOrCreateSphere(item, viewer);
    sphere.position.set(point.x, point.y, point.z);
    sphere.updateMatrix();
    const line = getOrCreateLine(item, bBoxCenter, viewer);
    if (line.geometry instanceof THREE.BufferGeometry) // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    line.geometry.attributes.position.needsUpdate = true;
    else line.geometry.verticesNeedUpdate = true;
}
function getOrCreateSphere(item, viewer) {
    if (typeof item.sphere === "undefined") {
        const material_green = getSphereMat(viewer);
        const sphere_geo = new THREE.SphereGeometry(0.4, 30, 30);
        const sphere_maxpt = new THREE.Mesh(sphere_geo, material_green);
        sphere_maxpt.matrixAutoUpdate = false;
        viewer.impl.addOverlay(constant_1.OVERLAY_SPHERES_PREVIEW_POSITION_NAME, sphere_maxpt);
        item.sphere = sphere_maxpt;
    }
    return item.sphere;
}
function getOrCreateLine(item, bBoxCenter, viewer) {
    if (typeof item.line === "undefined") {
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(bBoxCenter.x, bBoxCenter.y, bBoxCenter.z), item.sphere.position);
        const material = getLineMat(viewer);
        const line = new THREE.Line(geometryLine, material);
        viewer.impl.addOverlay(constant_1.OVERLAY_LINES_PREVIEW_POSITION_NAME, line);
        item.line = line;
    }
    return item.line;
}

},{"f40f3d3f83b2b7a5":"cK2zJ","15e4fd72152b91e3":"ev9bs","b265ecec4dca013d":"2nCOY","311ab18f9c81584a":"26kqv","65d639fa7291f739":"cCyX2","e549a7df983e1c50":"bGJVT","b26ee11e10a55143":"3AEx3"}],"jfjEw":[function(require,module,exports) {
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
exports.addViewerSelection = void 0;
const getBulkProperties_1 = require("2f25dc6224e115d5");
const isProjectionGroup_1 = require("2732bd511781e824");
function addViewerSelection(index, list, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const prom = [];
        const toDel = [];
        const aggregateSelection = viewer.getAggregateSelection();
        const aggrProps = [];
        for (const select of aggregateSelection){
            const props = yield (0, getBulkProperties_1.getBulkProperties)(select.model, select.selection);
            aggrProps.push(...props);
        }
        for(let idx = 0; idx < list.length; idx++){
            const item = list[idx];
            if ((0, isProjectionGroup_1.isProjectionGroup)(item)) {
                if (idx === index) prom.push(item.getAndMergeSelection(viewer));
                else for (const prop of aggrProps)prom.push(item.deleteItem(prop));
            } else for (const select of aggregateSelection){
                for (const dbId of select.selection)if (select.model.id === item.modelId && dbId === item.dbId) toDel.push(item);
            }
        }
        for (const del of toDel){
            const idx = list.findIndex((itm)=>itm.uid === del.uid);
            if (idx !== -1) list.splice(idx, 1);
        }
        yield Promise.all(prom);
    });
}
exports.addViewerSelection = addViewerSelection;

},{"2f25dc6224e115d5":"kRW4n","2732bd511781e824":"cCyX2"}],"b7337":[function(require,module,exports) {
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
exports.addToProjectionGroup = void 0;
const ProjectionGroup_1 = require("b91614babbf09075");
function addToProjectionGroup(list, name) {
    list.push(new ProjectionGroup_1.ProjectionGroup(name));
}
exports.addToProjectionGroup = addToProjectionGroup;

},{"b91614babbf09075":"4PJt3"}],"iOdSD":[function(require,module,exports) {
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
exports.ProjectionGroupConfig = void 0;
const isProjectionGroup_1 = require("4401a93465b5e254");
const getConfigFromContext_1 = require("e8316a89745e80a3");
const createConfigNode_1 = require("e039bee26c47e451");
const removeConfigFromContext_1 = require("821d98e3dc25a99c");
const ProjectionGroupModel_1 = require("855b6cd6f17ab396");
const ProjectionItemModel_1 = require("8b6dd6bf548292d3");
const spinal_core_connectorjs_1 = require("648bc2350190cf6d");
class ProjectionGroupConfig {
    constructor(name, _server_id, uid = `${Date.now()}-${Math.round(Math.random() * 10000)}-${Math.round(Math.random() * 10000)}`){
        this._server_id = _server_id;
        this.data = [];
        this.progress = 100;
        this.isLoaded = false;
        this.name = name;
        this.uid = uid;
    }
    countChild() {
        let counter = 0;
        for (const itm of this.data)if ((0, isProjectionGroup_1.isProjectionGroup)(itm)) counter += itm.computedData.length;
        else counter += 1;
        return counter;
    }
    removeFromContext(context) {
        return (0, removeConfigFromContext_1.removeConfigFromContext)(context, this.uid);
    }
    loadConfigNode() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (this.isLoaded) return;
                this.isLoaded = true;
                const configNode = spinal_core_connectorjs_1.FileSystem._objects[this._server_id];
                const lstData = yield configNode.getElement();
                const promises = [];
                for (const data of lstData)promises.push(data.toUxModel());
                const data = yield Promise.all(promises);
                for (const itm of data)if (itm) this.data.push(itm);
                if (typeof configNode.info.uid === "undefined") configNode.info.add_attr("uid", this.uid);
            } catch (error) {
                this.isLoaded = false;
                throw error;
            }
        });
    }
    saveToContext(context) {
        return __awaiter(this, void 0, void 0, function*() {
            let projectLst = yield (0, getConfigFromContext_1.getConfigFromContext)(context, this, true);
            if (!projectLst) projectLst = yield (0, createConfigNode_1.createConfigNode)(context, this);
            if (this.isLoaded === false) yield this.loadConfigNode();
            const promises = [];
            for (const data of this.data){
                const itmInModel = projectLst.detect((itm)=>itm.uid.get() === data.uid);
                if (itmInModel) promises.push(itmInModel.update(data));
                else if ((0, isProjectionGroup_1.isProjectionGroup)(data)) {
                    const mod = new ProjectionGroupModel_1.ProjectionGroupModel(data);
                    promises.push(mod.update(data));
                } else {
                    const mod = new ProjectionItemModel_1.ProjectionItemModel(data);
                    promises.push(mod.update(data));
                }
            }
            const res = yield Promise.all(promises);
            let change = false;
            for(let idx = 0; idx < res.length; idx++)if (res[idx] !== projectLst[idx]) change = true;
            if (change) {
                while(projectLst.length > 0)projectLst.pop();
                for(let idx = 0; idx < res.length; idx++)projectLst.push(res[idx]);
            } else projectLst.trim(res.length);
        });
    }
}
exports.ProjectionGroupConfig = ProjectionGroupConfig;

},{"4401a93465b5e254":"cCyX2","e8316a89745e80a3":"jTt3S","e039bee26c47e451":"i7WvX","821d98e3dc25a99c":"a4HpH","855b6cd6f17ab396":"jzE3X","8b6dd6bf548292d3":"8yd5K","648bc2350190cf6d":"2uyD7"}],"jTt3S":[function(require,module,exports) {
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
exports.getConfigFromContext = void 0;
const constant_1 = require("4322c2981cdcc690");
function getConfigFromContext(context, item, updateName = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const configNodes = yield context.getChildren(constant_1.PROJECTION_CONFIG_RELATION);
        for (const node of configNodes)if (node.info.uid.get() === item.uid) {
            if (updateName) node.info.name.set(item.name);
            return node.getElement();
        }
    });
}
exports.getConfigFromContext = getConfigFromContext;

},{"4322c2981cdcc690":"3AEx3"}],"i7WvX":[function(require,module,exports) {
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
exports.createConfigNode = void 0;
const spinal_model_graph_1 = require("64994859a0f168ba");
const spinal_core_connectorjs_1 = require("ddac7da2836893f6");
const constant_1 = require("2e47b9a2418aabd9");
function createConfigNode(context, item) {
    return __awaiter(this, void 0, void 0, function*() {
        const config = new spinal_core_connectorjs_1.Lst();
        const configNode = new spinal_model_graph_1.SpinalNode(item.name, constant_1.PROJECTION_CONFIG_TYPE, config);
        configNode.info.add_attr("uid", item.uid);
        context.addChild(configNode, constant_1.PROJECTION_CONFIG_RELATION, constant_1.PROJECTION_CONFIG_RELATION_TYPE);
        return config;
    });
}
exports.createConfigNode = createConfigNode;

},{"64994859a0f168ba":"fkEXw","ddac7da2836893f6":"2uyD7","2e47b9a2418aabd9":"3AEx3"}],"a4HpH":[function(require,module,exports) {
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
exports.removeConfigFromContext = void 0;
const constant_1 = require("4f2b189d0fa03593");
function removeConfigFromContext(context, uid) {
    return __awaiter(this, void 0, void 0, function*() {
        const configNodes = yield context.getChildren(constant_1.PROJECTION_CONFIG_RELATION);
        for (const node of configNodes){
            if (node.info.uid.get() === uid) return context.removeChild(node, constant_1.PROJECTION_CONFIG_RELATION, constant_1.PROJECTION_CONFIG_RELATION_TYPE);
        }
    });
}
exports.removeConfigFromContext = removeConfigFromContext;

},{"4f2b189d0fa03593":"3AEx3"}],"2sNYL":[function(require,module,exports) {
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
exports.getProjectionConfig = void 0;
const constant_1 = require("97b894397038ce7c");
const ProjectionGroupConfig_1 = require("9d457cfa281b5c62");
const utils_1 = require("4376056e37738ba2");
function getProjectionConfig(context) {
    return __awaiter(this, void 0, void 0, function*() {
        const configNodes = yield context.getChildren(constant_1.PROJECTION_CONFIG_RELATION);
        const res = [];
        for (const configNode of configNodes){
            yield (0, utils_1.waitGetServerId)(configNode);
            let projectionGroupConfig;
            // old config => add uid
            if (typeof configNode.info.uid === "undefined") projectionGroupConfig = new ProjectionGroupConfig_1.ProjectionGroupConfig(configNode.info.name.get(), configNode._server_id);
            else projectionGroupConfig = new ProjectionGroupConfig_1.ProjectionGroupConfig(configNode.info.name.get(), configNode._server_id, configNode.info.uid.get());
            res.push(projectionGroupConfig);
        }
        return res;
    });
}
exports.getProjectionConfig = getProjectionConfig;

},{"97b894397038ce7c":"3AEx3","9d457cfa281b5c62":"iOdSD","4376056e37738ba2":"2QtL3"}],"4N0yQ":[function(require,module,exports) {
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
exports.createConfigNodeAndProjGroup = void 0;
const ProjectionGroupConfig_1 = require("c4a87e675f97bab3");
const spinal_model_graph_1 = require("964aab0ae93f3da1");
const spinal_core_connectorjs_1 = require("3e89c290aa8c9ab6");
const constant_1 = require("43afdee41a3f5c82");
const utils_1 = require("44990c43bd6ed82");
function createConfigNodeAndProjGroup(context, name) {
    return __awaiter(this, void 0, void 0, function*() {
        const config = new spinal_core_connectorjs_1.Lst();
        const configNode = new spinal_model_graph_1.SpinalNode(name, constant_1.PROJECTION_CONFIG_TYPE, config);
        context.addChild(configNode, constant_1.PROJECTION_CONFIG_RELATION, constant_1.PROJECTION_CONFIG_RELATION_TYPE);
        yield (0, utils_1.waitGetServerId)(configNode);
        const cfgGroup = new ProjectionGroupConfig_1.ProjectionGroupConfig(name, configNode._server_id);
        configNode.info.add_attr("uid", cfgGroup.uid);
        return cfgGroup;
    });
}
exports.createConfigNodeAndProjGroup = createConfigNodeAndProjGroup;

},{"c4a87e675f97bab3":"iOdSD","964aab0ae93f3da1":"fkEXw","3e89c290aa8c9ab6":"2uyD7","43afdee41a3f5c82":"3AEx3","44990c43bd6ed82":"2QtL3"}],"3DC3U":[function(require,module,exports) {
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
const raycastJob_1 = require("38ecf96bb9cf32c5");
module.exports = function(self) {
    self.addEventListener("message", function(ev) {
        const workId = ev.data.workId;
        const data = ev.data.data;
        const res = (0, raycastJob_1.raycastJob)(data);
        self.postMessage({
            workId,
            res
        });
    });
};

},{"38ecf96bb9cf32c5":"7xFki"}],"7xFki":[function(require,module,exports) {
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raycastJob = void 0;
const enumMeshTriangles_1 = require("9b17b9cfc45502e3");
const THREE = __importStar(require("851136264cee14eb")); // uncomment for worker usage
function raycastJob(data) {
    const centerPoints = data.centerPoints;
    const geometries = data.geometries;
    const res = [];
    for (const centerPoint of centerPoints){
        const rayOrig = new THREE.Ray(new THREE.Vector3(centerPoint.center.x, centerPoint.center.y, centerPoint.center.z), new THREE.Vector3(0, 0, -1));
        let dbObjIntersection = null;
        for (const intersectionObjs of geometries){
            const inverseMatrix = new THREE.Matrix4();
            for (const mesh of intersectionObjs.dataMesh){
                const ray = rayOrig.clone();
                inverseMatrix.getInverse(mesh.matrixWorld);
                ray.applyMatrix4(inverseMatrix);
                // test if point on top of boundingbox
                const bboxFound = isPointOnTopOfBBox(mesh.bbox, rayOrig.origin);
                if (bboxFound) // test with boundingbox ok -> test with triangles
                (0, enumMeshTriangles_1.enumMeshTriangles)(mesh.geometry, function(vA, vB, vC) {
                    const tmp = new THREE.Vector3();
                    const intersectionPoint = ray.intersectTriangle(vC, vB, vA, false, tmp);
                    if (!intersectionPoint) return;
                    intersectionPoint.applyMatrix4(mesh.matrixWorld);
                    const distance = rayOrig.origin.distanceTo(intersectionPoint);
                    // if dbObjIntersection don't exist or distance > to old distance
                    if (!dbObjIntersection || dbObjIntersection && dbObjIntersection.intersections.distance > distance) dbObjIntersection = {
                        origin: centerPoint,
                        intersections: {
                            distance,
                            modelId: intersectionObjs.modelId,
                            dbId: intersectionObjs.dbId
                        }
                    };
                });
            }
        }
        if (dbObjIntersection) res.push(dbObjIntersection);
    }
    return res;
}
exports.raycastJob = raycastJob;
function isPointOnTopOfBBox(bBox, point) {
    // test if point on top of bbox
    if (bBox.min.x <= point.x && point.x <= bBox.max.x && bBox.min.y <= point.y && point.y <= bBox.max.y && point.z >= bBox.min.z) return true;
    return false;
}

},{"9b17b9cfc45502e3":"fhIeg","851136264cee14eb":"ktPTu"}],"fhIeg":[function(require,module,exports) {
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enumMeshTriangles = void 0;
const THREE = __importStar(require("5a1875c93dc3f742")); // uncomment for worker usage
let vA, vB, vC, nA, nB, nC;
function enumMeshTriangles(geometry, callback) {
    const attributes = geometry.attributes;
    let a, b, c;
    if (!vA) {
        vA = new THREE.Vector3();
        vB = new THREE.Vector3();
        vC = new THREE.Vector3();
        nA = new THREE.Vector3();
        nB = new THREE.Vector3();
        nC = new THREE.Vector3();
    }
    const positions = geometry.vb || attributes.position.array;
    let normals = geometry.vb || attributes.normal && attributes.normal.array; // eslint-disable-line no-mixed-operators
    const stride = geometry.vb ? geometry.vbstride : 3;
    // Get the offset to positions in the buffer. Be careful, 2D buffers
    // don't use the 'position' attribute for positions. Reject those.
    let poffset;
    if (geometry.vblayout) {
        if (!geometry.vblayout.position) return;
         // No positions, what to do??
        poffset = geometry.vblayout.position.offset;
    } else if (!attributes.position) return;
    else // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    poffset = attributes.position.itemOffset || 0;
    let noffset = 0;
    const nattr = geometry.vblayout ? geometry.vblayout.normal : attributes.normal || null;
    if (nattr) noffset = nattr.offset || nattr.itemOffset || 0;
    else normals = null;
    if (nattr && (nattr.itemSize !== 3 || nattr.bytesPerItem !== 4)) normals = null;
    const indices = geometry.ib || geometry.indices || (attributes.index ? attributes.index.array : null);
    if (indices) {
        let offsets = geometry.offsets;
        if (!offsets || offsets.length === 0) offsets = [
            {
                start: 0,
                count: indices.length,
                index: 0
            }
        ];
        for(let oi = 0, ol = offsets.length; oi < ol; ++oi){
            const start = offsets[oi].start;
            const count = offsets[oi].count;
            const index = offsets[oi].index;
            for(let i = start, il = start + count; i < il; i += 3){
                a = index + indices[i];
                b = index + indices[i + 1];
                c = index + indices[i + 2];
                const pa = a * stride + poffset;
                const pb = b * stride + poffset;
                const pc = c * stride + poffset;
                vA.x = positions[pa];
                vA.y = positions[pa + 1];
                vA.z = positions[pa + 2];
                vB.x = positions[pb];
                vB.y = positions[pb + 1];
                vB.z = positions[pb + 2];
                vC.x = positions[pc];
                vC.y = positions[pc + 1];
                vC.z = positions[pc + 2];
                if (normals) {
                    const na = a * stride + noffset;
                    const nb = b * stride + noffset;
                    const nc = c * stride + noffset;
                    nA.x = normals[na];
                    nA.y = normals[na + 1];
                    nA.z = normals[na + 2];
                    nB.x = normals[nb];
                    nB.y = normals[nb + 1];
                    nB.z = normals[nb + 2];
                    nC.x = normals[nc];
                    nC.y = normals[nc + 1];
                    nC.z = normals[nc + 2];
                    callback(vA, vB, vC, a, b, c, nA, nB, nC);
                } else callback(vA, vB, vC, a, b, c);
            }
        }
    } else {
        const vcount = geometry.vb ? geometry.vb.length / geometry.vbstride : positions.length / 3;
        for(let i = 0; i < vcount; i++){
            a = 3 * i;
            b = 3 * i + 1;
            c = 3 * i + 2;
            const pa = a * stride + poffset;
            const pb = b * stride + poffset;
            const pc = c * stride + poffset;
            vA.x = positions[pa];
            vA.y = positions[pa + 1];
            vA.z = positions[pa + 2];
            vB.x = positions[pb];
            vB.y = positions[pb + 1];
            vB.z = positions[pb + 2];
            vC.x = positions[pc];
            vC.y = positions[pc + 1];
            vC.z = positions[pc + 2];
            if (normals) {
                const na = a * stride + noffset;
                const nb = b * stride + noffset;
                const nc = c * stride + noffset;
                nA.x = normals[na];
                nA.y = normals[na + 1];
                nA.z = normals[na + 2];
                nB.x = normals[nb];
                nB.y = normals[nb + 1];
                nB.z = normals[nb + 2];
                nC.x = normals[nc];
                nC.y = normals[nc + 1];
                nC.z = normals[nc + 2];
                callback(vA, vB, vC, a, b, c, nA, nB, nC);
            } else callback(vA, vB, vC, a, b, c);
        }
    }
}
exports.enumMeshTriangles = enumMeshTriangles;

},{"5a1875c93dc3f742":"ktPTu"}],"VQg7m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RayWorkerManager = void 0;
const work = require("43e89616d9cebb0d");
const q = require("aff384af06492b66");
const raycastWorker = require("a7075014ef8755ab");
class RayWorkerManager {
    constructor(){
        this.workInProg = new Map();
        this.workId = 0;
        this.worker = work(raycastWorker);
        this.worker.addEventListener("message", (ev)=>{
            const prom = this.workInProg.get(ev.data.workId);
            prom.resolve(ev.data.res);
            this.workInProg.delete(ev.data.workId);
        });
    }
    work(arg) {
        const defered = q.defer();
        this.workInProg.set(this.workId, defered);
        this.worker.postMessage({
            workId: this.workId,
            data: arg
        }); // send the worker a message
        this.workId += 1;
        return defered.promise;
    }
    static getInstance() {
        if (RayWorkerManager.instance) return RayWorkerManager.instance;
        RayWorkerManager.instance = new RayWorkerManager();
        return RayWorkerManager.instance;
    }
}
exports.RayWorkerManager = RayWorkerManager;
RayWorkerManager.instance = null;
exports.default = RayWorkerManager;

},{"43e89616d9cebb0d":"fx9gE","aff384af06492b66":"6YRAJ","a7075014ef8755ab":"3DC3U"}],"fx9gE":[function(require,module,exports) {
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];
var stringify = JSON.stringify;
module.exports = function(fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);
    for(var i = 0, l = cacheKeys.length; i < l; i++){
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }
    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for(var i = 0, l = cacheKeys.length; i < l; i++){
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            "function(require,module,exports){" + fn + "(self); }",
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
    var scache = {};
    scache[wkey] = wkey;
    sources[skey] = [
        "function(require,module,exports){var f = require(" + stringify(wkey) + ");" + "(f.default ? f.default : f)(self);" + "}",
        scache
    ];
    var workerSources = {};
    resolveSources(skey);
    function resolveSources(key) {
        workerSources[key] = true;
        for(var depPath in sources[key][1]){
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) resolveSources(depKey);
        }
    }
    var src = "(" + bundleFn + ")({" + Object.keys(workerSources).map(function(key) {
        return stringify(key) + ":[" + sources[key][0] + "," + stringify(sources[key][1]) + "]";
    }).join(",") + "},{},[" + stringify(skey) + "])";
    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    var blob = new Blob([
        src
    ], {
        type: "text/javascript"
    });
    if (options && options.bare) return blob;
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};

},{}],"a17fo":[function(require,module,exports) {
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
exports.pushToAggregateDbidByModel = exports.getIntersects = void 0;
const raycastItemToMesh_1 = require("1913d268c9f20e66");
const getLeafDbIdsByModel_1 = require("61d83f03389005dd");
const transformRtzToXyz_1 = require("970f7a421b483413");
const isProjectionGroup_1 = require("edf014ed06b8cfa4");
const getModelByModelId_1 = require("f4b425cbf866afab");
const getViewer_1 = require("48994d81f62559fe");
function getIntersects(projectionGroupConfig, mergedRoomRef) {
    return __awaiter(this, void 0, void 0, function*() {
        const selection = [];
        projectionGroupConfig.progress = 0;
        try {
            for(let idx = 0; idx < projectionGroupConfig.data.length; idx++){
                const itemToProj = projectionGroupConfig.data[idx];
                const _offset = (0, transformRtzToXyz_1.transformRtzToXyz)(itemToProj.offset);
                if ((0, isProjectionGroup_1.isProjectionGroup)(itemToProj)) for (const itm of itemToProj.computedData){
                    const model = (0, getModelByModelId_1.getModelByModelId)(itm.modelId);
                    const ids = (0, getLeafDbIdsByModel_1.getLeafDbIdsByModel)(model, itm.dbId);
                    if (ids.length === 0) continue;
                    pushToAggregateDbidByModel(selection, ids, model, _offset, itm.dbId);
                }
                else {
                    const model = (0, getModelByModelId_1.getModelByModelId)(itemToProj.modelId);
                    const ids = (0, getLeafDbIdsByModel_1.getLeafDbIdsByModel)(model, itemToProj.dbId);
                    pushToAggregateDbidByModel(selection, ids, model, _offset, itemToProj.dbId);
                }
                projectionGroupConfig.progress = projectionGroupConfig.data.length / (idx + 1) * 66;
            }
            const intersects = yield (0, raycastItemToMesh_1.raycastItemToMesh)(selection, mergedRoomRef, (0, getViewer_1.getViewer)());
            projectionGroupConfig.progress = 100;
            return {
                selection,
                intersects
            };
        } catch (error) {
            projectionGroupConfig.progress = 100;
            console.error(error);
        }
    });
}
exports.getIntersects = getIntersects;
function pushToAggregateDbidByModel(targetArray, ids, model, offset, rootDbId) {
    for (const obj of targetArray)if (obj.model === model) {
        for (const id of ids){
            const findItem = obj.dbId.find((a)=>a.dbId === id);
            const isFocus = rootDbId === id;
            if (findItem === undefined) obj.dbId.push({
                dbId: id,
                offset,
                isFocus
            });
            else if (isFocus === true && findItem.isFocus === false) {
                findItem.isFocus = true;
                findItem.offset = offset;
            }
        }
        return;
    }
    const dbId = [];
    for (const id of ids){
        const isFocus = rootDbId === id;
        dbId.push({
            dbId: id,
            offset,
            isFocus
        });
    }
    targetArray.push({
        model,
        dbId
    });
}
exports.pushToAggregateDbidByModel = pushToAggregateDbidByModel;

},{"1913d268c9f20e66":"iEPLy","61d83f03389005dd":"aLTS1","970f7a421b483413":"26kqv","edf014ed06b8cfa4":"cCyX2","f4b425cbf866afab":"9RDu2","48994d81f62559fe":"7cAlu"}],"iEPLy":[function(require,module,exports) {
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
exports.raycastItemToMesh = void 0;
const utils_1 = require("b0617c49847b6861");
const getModifiedWorldBoundingBox_1 = require("2613016b2902a66a");
const getPointOffset_1 = require("f7829c7cb0e471d");
const getFragIds_1 = require("f5115cede6912dc0");
// raycast job don't use webworker
const raycastJob_1 = require("877f75ed0b67c22");
// also raycast job but use webworker
const workerManager_1 = require("63759e1a995f5e5a");
function raycastItemToMesh(from, to, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const [centerPoints, geometries] = yield Promise.all([
                getCenterObjects(from, viewer),
                getMeshsData(to, viewer)
            ]);
            console.log("raycastItemToMesh", centerPoints, geometries);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!window._hmr) {
                // use worker only on build, aka without HRM
                const rayWorkerManager = workerManager_1.RayWorkerManager.getInstance();
                return rayWorkerManager.work({
                    centerPoints,
                    geometries
                }); // send the worker a message
            }
            return (0, raycastJob_1.raycastJob)({
                centerPoints,
                geometries
            });
        } catch (e) {
            console.error(e);
            throw e;
        }
    });
}
exports.raycastItemToMesh = raycastItemToMesh;
function getCenterObjects(array, viewer) {
    const res = [];
    for (const obj of array)for (const { dbId, offset } of obj.dbId){
        // add offset here
        const center = getCenter(dbId, offset, obj.model, viewer);
        res.push(center);
    }
    return Promise.all(res);
}
function getCenter(dbId, offset, model, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const { matrixWorld, bbox } = yield (0, utils_1.getBBoxAndMatrix)(dbId, model, viewer);
        const center = new THREE.Vector3();
        bbox.getCenter(center);
        return {
            dbId,
            modelId: model.id,
            center: (0, getPointOffset_1.getPointOffset)(center, offset, matrixWorld)
        };
    });
}
function getMeshsData(array, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        for (const { model, dbId } of array)for (const dbIdItem of dbId)res.push(getMesh(dbIdItem, model, viewer));
        const tmp = yield Promise.all(res);
        return tmp.filter((item)=>{
            return item != null;
        });
    });
}
function getMesh(dbIdItem, model, viewer) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const ids = yield (0, getFragIds_1.getFragIds)(dbIdItem, model);
            const meshs = ids.map((fragId)=>viewer.impl.getRenderProxy(model, fragId));
            const bbox = (0, getModifiedWorldBoundingBox_1.getModifiedWorldBoundingBox)(ids, model);
            const center = new THREE.Vector3();
            bbox.getCenter(center);
            const dataMesh = meshs.map((mesh)=>{
                return {
                    geometry: {
                        vb: mesh.geometry.vb,
                        vblayout: mesh.geometry.vblayout,
                        attributes: mesh.geometry.attributes,
                        ib: mesh.geometry.ib,
                        indices: mesh.geometry.indices,
                        index: mesh.geometry.index,
                        offsets: mesh.geometry.offsets,
                        vbstride: mesh.geometry.vbstride
                    },
                    matrixWorld: mesh.matrixWorld,
                    center,
                    bbox
                };
            });
            return {
                dataMesh,
                dbId: dbIdItem,
                modelId: model.id
            };
        } catch (e) {
            console.log("getMeshsData no fragId in", dbIdItem);
            return null;
        }
    });
}

},{"b0617c49847b6861":"2QtL3","2613016b2902a66a":"jo8bm","f7829c7cb0e471d":"2nCOY","f5115cede6912dc0":"9OSUv","877f75ed0b67c22":"7xFki","63759e1a995f5e5a":"VQg7m"}],"2rMBe":[function(require,module,exports) {
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
exports.mergeIntersectRes = void 0;
function mergeIntersectRes(target, item) {
    for (const itemInter of item.intersects){
        const targetInter = target.intersects.find((t)=>{
            return t.origin.modelId === itemInter.origin.modelId && t.origin.dbId === itemInter.origin.dbId;
        });
        if (!targetInter) target.intersects.push(itemInter);
        else if (itemInter.intersections.distance > targetInter.intersections.distance) {
            targetInter.intersections.dbId = itemInter.intersections.dbId;
            targetInter.intersections.distance = itemInter.intersections.distance;
            targetInter.intersections.modelId = itemInter.intersections.modelId;
        }
    }
    for (const itemSelect of item.selection){
        const targetSelect = target.selection.find((t)=>{
            return t.model === itemSelect.model;
        });
        if (!targetSelect) target.selection.push(itemSelect);
        else {
            for (const objDbId of itemSelect.dbId)if (!targetSelect.dbId.find((tDbId)=>tDbId.dbId === objDbId.dbId)) targetSelect.dbId.push(objDbId);
        }
    }
}
exports.mergeIntersectRes = mergeIntersectRes;

},{}],"fmm7b":[function(require,module,exports) {
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
exports.mergeRoomRef = void 0;
const getRoomRef_1 = require("c98d7ebb628fe491");
function mergeRoomRef(data) {
    const result = [];
    for(const floorName in data)if (Object.prototype.hasOwnProperty.call(data, floorName)) {
        const arrAgre = data[floorName];
        arrAgre.forEach((agre)=>{
            agre.dbId.forEach((dbid)=>{
                (0, getRoomRef_1.pushToAggregateSetDbidByModel)(result, dbid, agre.model);
            });
        });
    }
    return result;
}
exports.mergeRoomRef = mergeRoomRef;

},{"c98d7ebb628fe491":"1osyi"}],"1osyi":[function(require,module,exports) {
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
exports.pushToAggregateSetDbidByModel = exports.getRoomRef = void 0;
const Constant_1 = require("8b2c694c00b7b6b3");
const getModelByBimFileIdLoaded_1 = require("2cdd0b64d42c2281");
function getRoomRef(context) {
    return __awaiter(this, void 0, void 0, function*() {
        const result = [];
        const relNames = [
            Constant_1.GEO_SITE_RELATION,
            Constant_1.GEO_BUILDING_RELATION,
            Constant_1.GEO_FLOOR_RELATION,
            Constant_1.GEO_ROOM_RELATION,
            Constant_1.GEO_ZONE_RELATION
        ];
        // get rooms nodes
        const rooms = yield context.find(relNames, (node)=>{
            return node.getType().get() === Constant_1.GEO_ROOM_TYPE;
        });
        // get refObjet from rooms nodes
        const refObjsProm = rooms.map((room)=>{
            return room.getChildren([
                Constant_1.GEO_REFERENCE_ROOM_RELATION
            ]);
        });
        const refObjs = yield Promise.all(refObjsProm);
        // merge result by model
        for (const refs of refObjs){
            for (const ref of refs)if (ref.getType().get() === Constant_1.GEO_EQUIPMENT_TYPE) {
                const bimFileId = ref.info.bimFileId.get();
                const model = (0, getModelByBimFileIdLoaded_1.getModelByBimFileIdLoaded)(bimFileId);
                if (model) {
                    const dbId = ref.info.dbid.get();
                    pushToAggregateSetDbidByModel(result, dbId, model);
                }
            }
        }
        return result;
    });
}
exports.getRoomRef = getRoomRef;
function pushToAggregateSetDbidByModel(targetArray, id, model) {
    if (id === -1) return;
    for (const obj of targetArray)if (obj.model === model) {
        obj.dbId.add(id);
        return;
    }
    const idSet = new Set();
    idSet.add(id);
    targetArray.push({
        model,
        dbId: idSet
    });
}
exports.pushToAggregateSetDbidByModel = pushToAggregateSetDbidByModel;

},{"8b2c694c00b7b6b3":"b3pAR","2cdd0b64d42c2281":"lUmuX"}],"i3Czq":[function(require,module,exports) {
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
exports.getRefFloorZMinMax = void 0;
const getFragIds_1 = require("62143a88f1ede919");
const getWorldBoundingBox_1 = require("35ea8087ce3fefd7");
function getRefFloorZMinMax(data) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const record = {};
        for(const id in data){
            const promise = [];
            let min = null;
            for (const { dbId: dbids, model } of data[id])for (const dbid of dbids)promise.push(getMinZ(dbid, model));
            const p = yield Promise.all(promise);
            for (const z of p)if (min === null || z < min) min = z;
            const res = {
                min,
                max: null,
                floorId: id,
                distance: null
            };
            record[id] = res;
        }
        const tmp = [];
        for(const floorName in record)tmp.push(record[floorName]);
        tmp.sort((a, b)=>{
            return a.min - b.min;
        });
        for(let idx = 0; idx < tmp.length; idx++){
            const itm = tmp[idx];
            itm.max = ((_a = tmp[idx + 1]) === null || _a === void 0 ? void 0 : _a.min) || null;
            if (itm.max !== null) tmp[idx].distance = itm.max - itm.min;
        }
        const result = {};
        for (const itm of tmp)result[itm.floorId] = itm;
        return result;
    });
}
exports.getRefFloorZMinMax = getRefFloorZMinMax;
function getMinZ(dbid, model) {
    return __awaiter(this, void 0, void 0, function*() {
        const fragIds = yield (0, getFragIds_1.getFragIds)(dbid, model);
        const bbox = (0, getWorldBoundingBox_1.getWorldBoundingBox)(fragIds, model);
        return bbox.min.z;
    });
}

},{"62143a88f1ede919":"9OSUv","35ea8087ce3fefd7":"hGoCs"}],"7IOVH":[function(require,module,exports) {
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
exports.getFloorChildrenDbIdOfModel = void 0;
function getFloorChildrenDbIdOfModel(model, floorNbr) {
    const userFct = `function userFunction(pdb) {
    const result = new Set();
    let idCat = -1;
    pdb.enumAttributes(function (i, attrDef) {
      if (
        attrDef.name.toLowerCase() === 'level' &&
        attrDef.category === '__internalref__'
      ) {
        console.log("attrDef", attrDef);
        idCat = i;
      }
    });
    if (idCat === -1) return [];
    pdb.enumObjects(function (dbId) {
      pdb.enumObjectProperties(dbId, function (attrId, valId) {
        if (idCat !== attrId) return false;
        const value = pdb.getAttrValue(attrId, valId);
        if (${floorNbr} === value) {
                  console.log(dbId,attrId, value);
          result.add(dbId)
        };
        return true;
      });
    });

    return Array.from(result);
  }`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return model.getPropertyDb().executeUserFunction(userFct);
}
exports.getFloorChildrenDbIdOfModel = getFloorChildrenDbIdOfModel;

},{}],"30xEH":[function(require,module,exports) {
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
exports.getFloorPropForModel = void 0;
const getBulkProperties_1 = require("da7fbb14be9adfbd");
const getAllModelLoaded_1 = require("cc01201d94c970bf");
const getFloorsDbIdOfModel_1 = require("6da6a48f416e41bd");
function getFloorPropForModel() {
    return __awaiter(this, void 0, void 0, function*() {
        const models = (0, getAllModelLoaded_1.getAllModelLoaded)();
        const res = {};
        for (const model of models){
            const floorDbid = yield (0, getFloorsDbIdOfModel_1.getFloorsDbIdOfModel)(model);
            const floorProps = yield (0, getBulkProperties_1.getBulkProperties)(model, floorDbid, {
                propFilter: [
                    "name",
                    "externalId"
                ]
            });
            res[model.id] = floorProps.map((itm)=>{
                return {
                    id: itm.id,
                    externalId: itm.externalId,
                    dbId: itm.dbId,
                    name: itm.name,
                    modelId: model.id
                };
            });
        }
        return res;
    });
}
exports.getFloorPropForModel = getFloorPropForModel;

},{"da7fbb14be9adfbd":"kRW4n","cc01201d94c970bf":"2YAgU","6da6a48f416e41bd":"9hE8M"}],"2YAgU":[function(require,module,exports) {
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
exports.getAllModelLoaded = void 0;
function getAllModelLoaded() {
    const mappingBimFileIdModelId = window.spinal.BimObjectService.mappingBimFileIdModelId;
    const models = new Set();
    for(const bimFileId in mappingBimFileIdModelId){
        if (Object.prototype.hasOwnProperty.call(mappingBimFileIdModelId, bimFileId)) for (const { model } of mappingBimFileIdModelId[bimFileId].modelScene)models.add(model);
    }
    return Array.from(models);
}
exports.getAllModelLoaded = getAllModelLoaded;

},{}],"9hE8M":[function(require,module,exports) {
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
exports.getFloorsDbIdOfModel = void 0;
function getFloorsDbIdOfModel(model) {
    const userFct = `function userFunction(pdb) {
    const result = new Set();
    let idCat = -1;
    pdb.enumAttributes(function (i, attrDef) {
      if (
        attrDef.name.toLowerCase() === 'level' &&
        attrDef.category === '__internalref__'
      ) {
        idCat = i;
      }
    });
    if (idCat === -1) return [];
    pdb.enumObjects(function (dbId) {
      pdb.enumObjectProperties(dbId, function (attrId, valId) {
        if (idCat !== attrId) return false;
        const value = pdb.getAttrValue(attrId, valId);
        result.add(value);
        return true;
      });
    });

    return Array.from(result);
  }`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return model.getPropertyDb().executeUserFunction(userFct);
}
exports.getFloorsDbIdOfModel = getFloorsDbIdOfModel;

},{}],"e7uSI":[function(require,module,exports) {
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
exports.getRoomRefByFloor = void 0;
const Constant_1 = require("56571cc91acf5796");
const getModelByBimFileIdLoaded_1 = require("efe3553023309dfa");
const getRoomRef_1 = require("af21f6e2d1376137");
const utils_1 = require("95b32225585ac656");
function getRoomRefByFloor() {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = (0, utils_1.getGraph)();
        const context = yield (0, utils_1.getContextSpatial)(graph);
        const result = {};
        const floorRelNames = [
            Constant_1.GEO_SITE_RELATION,
            Constant_1.GEO_BUILDING_RELATION,
            Constant_1.GEO_FLOOR_RELATION,
            Constant_1.GEO_ZONE_RELATION
        ];
        const roomRelNames = [
            Constant_1.GEO_ROOM_RELATION,
            Constant_1.GEO_ZONE_RELATION
        ];
        // get floor
        const floors = yield context.find(floorRelNames, (node)=>{
            return node.getType().get() === Constant_1.GEO_FLOOR_TYPE;
        });
        for (const floor of floors){
            (0, utils_1.addNodeGraphService)(floor);
            const resFloor = [];
            result[floor.info.id.get()] = resFloor;
            // get rooms nodes
            const rooms = yield floor.find(roomRelNames, (node)=>{
                return node.getType().get() === Constant_1.GEO_ROOM_TYPE;
            });
            const refObjsProm = rooms.map((room)=>{
                return room.getChildren([
                    Constant_1.GEO_REFERENCE_ROOM_RELATION
                ]);
            });
            const refObjs = yield Promise.all(refObjsProm);
            // merge result by model
            for (const refs of refObjs){
                for (const ref of refs)if (ref.getType().get() === Constant_1.GEO_EQUIPMENT_TYPE) {
                    const bimFileId = ref.info.bimFileId.get();
                    const model = (0, getModelByBimFileIdLoaded_1.getModelByBimFileIdLoaded)(bimFileId);
                    if (model) {
                        const dbId = ref.info.dbid.get();
                        (0, getRoomRef_1.pushToAggregateSetDbidByModel)(resFloor, dbId, model);
                    }
                }
            }
        }
        return result;
    });
}
exports.getRoomRefByFloor = getRoomRefByFloor;

},{"56571cc91acf5796":"b3pAR","efe3553023309dfa":"lUmuX","af21f6e2d1376137":"1osyi","95b32225585ac656":"2QtL3"}],"5YQdd":[function(require,module,exports) {
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
exports.pushToAggregateSetDbidByBimFileId = exports.getSpatialTree = void 0;
const Constant_1 = require("9caa433c477cea9");
const utils_1 = require("96ebd1bbf6cb8e5e");
function getSpatialTree() {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = (0, utils_1.getGraph)();
        const spatialContext = yield (0, utils_1.getContextSpatial)(graph);
        const buildings = yield spatialContext.getChildrenInContext(spatialContext);
        const proms = buildings.map((building)=>__awaiter(this, void 0, void 0, function*() {
                const floors = yield building.getChildrenInContext(spatialContext);
                const buildingChildren = floors.map((floor)=>__awaiter(this, void 0, void 0, function*() {
                        const rooms = yield floor.getChildrenInContext(spatialContext);
                        const roomDatas = rooms.map((room)=>__awaiter(this, void 0, void 0, function*() {
                                (0, utils_1.addNodeGraphService)(room);
                                // to preload roomrefs
                                room.getChildren(Constant_1.GEO_REFERENCE_ROOM_RELATION);
                                // const roomRefs = await room.getChildren(GEO_REFERENCE_ROOM_RELATION);
                                // const aggrData = [];
                                // for (const roomRef of roomRefs) {
                                //   pushToAggregateSetDbidByBimFileId(
                                //     aggrData,
                                //     roomRef.info.dbid.get(),
                                //     roomRef.info.bimFileId.get()
                                //   );
                                // }
                                return {
                                    type: "room",
                                    id: room.info.id.get(),
                                    name: room.info.name.get(),
                                    server_id: room._server_id,
                                    children: []
                                };
                            }));
                        return {
                            type: "floor",
                            id: floor.info.id.get(),
                            name: floor.info.name.get(),
                            server_id: floor._server_id,
                            children: yield Promise.all(roomDatas)
                        };
                    }));
                return {
                    type: "building",
                    id: building.info.id.get(),
                    name: building.info.name.get(),
                    server_id: building._server_id,
                    children: yield Promise.all(buildingChildren)
                };
            }));
        return Promise.all(proms);
    });
}
exports.getSpatialTree = getSpatialTree;
function pushToAggregateSetDbidByBimFileId(targetArray, id, bimFileId) {
    if (id === -1) return;
    for (const obj of targetArray)if (obj.bimFileId === bimFileId) {
        obj.dbId.add(id);
        return;
    }
    const idSet = new Set();
    idSet.add(id);
    targetArray.push({
        bimFileId,
        dbId: idSet
    });
}
exports.pushToAggregateSetDbidByBimFileId = pushToAggregateSetDbidByBimFileId;

},{"9caa433c477cea9":"b3pAR","96ebd1bbf6cb8e5e":"2QtL3"}],"bJ91b":[function(require,module,exports) {
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
exports.getDataAssing = void 0;
const utils_1 = require("6f4cf66249c3d437");
function getParentRoom(node, contextGeo) {
    return __awaiter(this, void 0, void 0, function*() {
        const res = yield node.getParentsInContext(contextGeo);
        return res[0];
    });
}
function getDataAssing({ contextId, selectedNodeId }) {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = (0, utils_1.getGraph)();
        const contextGeo = yield (0, utils_1.getContextSpatial)(graph);
        const context = (0, utils_1.getRealNode)(contextId);
        const selectedNode = (0, utils_1.getRealNode)(selectedNodeId);
        const warn = [];
        const error = [];
        const children = yield selectedNode.getChildrenInContext(context);
        for (const child of children){
            const arr = child.info.name.get() === "error" ? error : warn;
            const items = yield child.getChildrenInContext(context);
            for (const item of items){
                let PNId = "";
                let PName = "";
                if (child.info.name.get() === "warn") {
                    // get parent ID
                    const parent = yield getParentRoom(item, contextGeo);
                    PNId = (parent === null || parent === void 0 ? void 0 : parent.info.id.get()) || "";
                    PName = (parent === null || parent === void 0 ? void 0 : parent.info.name.get()) || "";
                }
                arr.push({
                    name: item.info.name.get(),
                    PNId,
                    PName,
                    bimFileId: item.info.bimFileId.get(),
                    dbid: item.info.dbid.get(),
                    externalId: item.info.externalId.get(),
                    validId: ""
                });
            }
        }
        return {
            warn,
            error
        };
    });
}
exports.getDataAssing = getDataAssing;

},{"6f4cf66249c3d437":"2QtL3"}],"cZkMG":[function(require,module,exports) {
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
exports.clearThemingColors = exports.viewDataAssignInViewer = void 0;
const Constant_1 = require("ed0ac4935b69ac60");
const utils_1 = require("5f740b71c95a5d7d");
const getAllModelLoaded_1 = require("72fec649b3b8e0d");
const getRoomRef_1 = require("7f21c25f8c46b807");
/**
 * obj = blue
 * roomSelect = yellow
 * if validId; valid = green & parent = red
 * else parent = green
 * @export
 * @param {number} dbid
 * @param {string} bimFileId
 * @param {string} [roomId]
 * @param {string} [parentValidId]
 * @param {string} [parentNodeId]
 */ function viewDataAssignInViewer(dbid, bimFileId, roomId, parentValidId, parentNodeId) {
    return __awaiter(this, void 0, void 0, function*() {
        const models = (0, getAllModelLoaded_1.getAllModelLoaded)();
        const viewer = (0, utils_1.getViewer)();
        // clean model selection / isolation
        for (const model of models)viewer.clearThemingColors(model);
        const green = new THREE.Vector4(0, 227, 0);
        const red = new THREE.Vector4(255, 0, 0);
        const roomIdColor = new THREE.Vector4(227, 219, 0);
        const modelDbid = (0, utils_1.getModelByBimFileIdLoaded)(bimFileId);
        if (modelDbid) {
            viewer.clearSelection();
            viewer.select(dbid, modelDbid);
        }
        const aggrData = [
            {
                dbId: new Set([
                    dbid
                ]),
                model: modelDbid
            }
        ];
        let colorValid, colorParent;
        if (parentValidId) {
            colorValid = green;
            colorParent = red;
        } else {
            colorValid = red;
            colorParent = green;
        }
        if (roomId) yield getRoomRefsInfo((0, utils_1.getRealNode)(roomId), aggrData, roomIdColor);
        if (parentNodeId) yield getRoomRefsInfo((0, utils_1.getRealNode)(parentNodeId), aggrData, colorParent);
        if (parentValidId) yield getRoomRefsInfo((0, utils_1.getRealNode)(parentValidId), aggrData, colorValid);
        viewer.fitToView(Array.from(aggrData[0].dbId), aggrData[0].model);
        const data = aggrData.map((itm)=>{
            return {
                model: itm.model,
                selection: Array.from(itm.dbId)
            };
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        viewer.impl.visibilityManager.aggregateIsolate(data);
    });
}
exports.viewDataAssignInViewer = viewDataAssignInViewer;
function getRoomRefsInfo(roomNode, aggrData, color) {
    return __awaiter(this, void 0, void 0, function*() {
        const viewer = (0, utils_1.getViewer)();
        if (roomNode) {
            const roomRefs = yield roomNode.getChildren(Constant_1.GEO_REFERENCE_ROOM_RELATION);
            for (const roomRef of roomRefs){
                const model = (0, utils_1.getModelByBimFileIdLoaded)(roomRef.info.bimFileId.get());
                if (model) {
                    const dbid = roomRef.info.dbid.get();
                    viewer.setThemingColor(dbid, color, model);
                    (0, getRoomRef_1.pushToAggregateSetDbidByModel)(aggrData, dbid, model);
                }
            }
        }
    });
}
function clearThemingColors() {
    const models = (0, getAllModelLoaded_1.getAllModelLoaded)();
    const viewer = (0, utils_1.getViewer)();
    for (const model of models)viewer.clearThemingColors(model);
}
exports.clearThemingColors = clearThemingColors;

},{"ed0ac4935b69ac60":"b3pAR","5f740b71c95a5d7d":"2QtL3","72fec649b3b8e0d":"2YAgU","7f21c25f8c46b807":"1osyi"}],"djnxu":[function(require,module,exports) {
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
exports.getRoomNodeFromSelectFloor = void 0;
const utils_1 = require("359faa06123be6f2");
const Constant_1 = require("b0cdb09dbf2fdb97");
function getRoomNodeFromSelectFloor() {
    return __awaiter(this, void 0, void 0, function*() {
        const bimObj = yield getFloorSelectedBimObj();
        if (bimObj) {
            const parents = yield bimObj.getParents(Constant_1.GEO_REFERENCE_ROOM_RELATION);
            return parents[0];
        }
    });
}
exports.getRoomNodeFromSelectFloor = getRoomNodeFromSelectFloor;
function getFloorSelectedBimObj() {
    return __awaiter(this, void 0, void 0, function*() {
        const aggregateSelection = (0, utils_1.getViewer)().getAggregateSelection();
        const { model, dbid } = get1stDbidFromAggre(aggregateSelection);
        if (!model && !dbid) return;
        const bimFileId = getBimFileIdByModelId(model.id);
        const bimContext = yield (0, utils_1.getBimContextByBimFileId)(bimFileId);
        const bimobjs = yield bimContext.getChildren(Constant_1.GEO_EQUIPMENT_RELATION);
        for (const bimObj of bimobjs){
            if (bimObj.info.dbid.get() === dbid) return bimObj;
        }
    });
}
function get1stDbidFromAggre(aggregateSelection) {
    for (const { model, selection } of aggregateSelection)return {
        model,
        dbid: selection[0]
    };
}
function getBimFileIdByModelId(modelId) {
    const mappingBimFileIdModelId = window.spinal.BimObjectService.mappingBimFileIdModelId;
    for(const bimFileId in mappingBimFileIdModelId)if (Object.prototype.hasOwnProperty.call(mappingBimFileIdModelId, bimFileId)) {
        const obj = mappingBimFileIdModelId[bimFileId];
        if (obj.modelId === modelId) for (const { model } of obj.modelScene){
            if (model.id === modelId) return bimFileId;
        }
    }
}

},{"359faa06123be6f2":"2QtL3","b0cdb09dbf2fdb97":"b3pAR"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-service.89a19e94.js.map
