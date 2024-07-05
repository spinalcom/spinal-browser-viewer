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
})({"bnFtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _utilities = require("./utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const EventBus = new (0, _vueDefault.default)();
EventBus.$on("mouseover", (item)=>{
    (0, _utilitiesDefault.default).getBimObjects(item.id).then((res)=>{
        let selections = [];
        res.forEach((el)=>{
            let info = el.get();
            let model = window.spinal.BimObjectService.getModelByBimfile(info.bimFileId);
            let selected = selections.find((el2)=>{
                return el2.model.id === model.id;
            });
            if (selected) selected.ids.push(el.dbid);
            else selections.push({
                model: model,
                ids: [
                    info.dbid
                ]
            });
        });
        window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(selections);
    });
});
EventBus.$on("mouseleave", ()=>{
    window.spinal.ForgeViewer.viewer.select();
});
exports.default = EventBus;

},{"vue":"gt5MM","./utilities":"cYKMv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYKMv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../services/service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
const ROOMS_RELATIONS = [
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    // groupService.constants.GROUP_TO_ROOMS_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_ROOMS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}`,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
];
const EQUIPMENTS_RELATIONS = [
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_EQUIPMENTS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}`
];
const ROOMS_TYPES = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES.ROOMS_GROUP,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}GroupContext`,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}Group`
];
// eslint-disable-next-line no-unused-vars
const EQUIPMENTS_TYPES = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}GroupContext`,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}Group`
];
let utilities = {
    getIcon (selectedNode) {
        return this._isColored(selectedNode).then((isColored)=>{
            return isColored;
        });
    },
    getBimObjects (nodeId) {
        let nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
        let type = nodeInfo.type.get();
        if (type === (0, _constants.BIM_OBJECT_TYPE)) return Promise.resolve([
            nodeInfo
        ]);
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
        ]);
        else {
            let relations = [
                (0, _service.groupService).constants.CONTEXT_TO_CATEGORY_RELATION,
                (0, _service.groupService).constants.GROUP_TO_ROOMS_RELATION,
                (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
                (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION,
                (0, _service.groupService).constants.CATEGORY_TO_GROUP_RELATION,
                (0, _service.groupService).constants.GROUP_TO_EQUIPMENTS_RELATION
            ];
            if (ROOMS_TYPES.indexOf(type) !== -1) relations = ROOMS_RELATIONS;
            else relations = EQUIPMENTS_RELATIONS;
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, relations, (node)=>{
                return node.getType().get() === (0, _constants.BIM_OBJECT_TYPE);
            }).then((res)=>{
                return res.map((el)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                    return el.info;
                });
            });
        }
    },
    getGroups (selectedNode) {
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type)) return Promise.resolve([
            selectedNode
        ]);
        let relations = [];
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, relations, (node)=>{
            let argType = node.getType().get();
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                return el.info;
            });
        });
    },
    colorItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id1 = el.id.get();
                let color = el.color ? el.color.get() : undefined;
                this.colorGroup(id1, color);
            });
        });
    },
    restoreItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id1 = el.id.get();
                this.restoreGroup(id1);
            });
        });
    },
    colorGroup (groupId, argColor) {
        this.getBimObjects(groupId).then((res)=>{
            let color = typeof argColor !== "undefined" ? this._convertHexColorToRGB(argColor) : this._convertHexColorToRGB("#000000");
            ItemColoredMap.set(groupId, groupId);
            res.forEach((child)=>{
                let BimColors = BimElementsColor.get(child.dbid.get()) ? BimElementsColor.get(child.dbid.get()) : [];
                BimColors.push({
                    id: groupId,
                    color: color
                });
                BimElementsColor.set(child.dbid.get(), BimColors);
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                console.log("model", model);
                model.setThemingColor(child.dbid.get(), new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7, true));
            });
        });
    },
    restoreGroup (groupId) {
        ItemColoredMap.delete(groupId);
        this.getBimObjects(groupId).then((res)=>{
            res.forEach((child)=>{
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                model.setThemingColor(child.dbid.get(), // eslint-disable-next-line no-undef
                new THREE.Vector4(0, 0, 0, 0), true);
                let allColors = BimElementsColor.get(child.dbid.get());
                if (allColors) {
                    //   allColors = allColors.filter(el => el.id !== node.id.get());
                    allColors = allColors.filter((el)=>el.id !== groupId);
                    BimElementsColor.set(child.dbid.get(), allColors);
                    if (allColors.length > 0) {
                        let color = allColors[0].color;
                        model.setThemingColor(child.dbid.get(), // eslint-disable-next-line no-undef
                        new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7), true);
                    }
                }
            });
        });
    },
    async consumeBatch (promises, batchSize = 2) {
        let index = 0;
        const result = {
            successed: [],
            failed: []
        };
        while(index < promises.length){
            let endIndex = index + batchSize;
            if (promises.length <= endIndex) endIndex = promises.length;
            const slice = promises.slice(index, endIndex);
            // const resProm = await Promise.all(slice.map((e) => e()));
            // result.push(...resProm);
            const { successed, failed } = await this.getPromiseResult(slice.map((e)=>e()));
            result.successed.push(...successed);
            result.failed.push(...failed);
            index = endIndex;
        }
        return result;
    },
    getPromiseResult (liste) {
        return Promise.allSettled(liste).then((result)=>{
            const obj = {
                successed: [],
                failed: []
            };
            for (const { status, value } of result)if (status === "fulfilled") obj.successed.push(value);
            else obj.failed.push(value);
            return obj;
        });
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                    Private                                   //
    //////////////////////////////////////////////////////////////////////////////////////////////////
    _isColored (selectedNode) {
        return this.getGroups(selectedNode).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id1 = res[index].id.get();
                if (typeof ItemColoredMap.get(id1) === "undefined") return false;
            }
            return true;
        });
    },
    _convertHexColorToRGB (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },
    ///////////////////////////////////////////////////////////////////////////////////////////
    //                                    Parcours ascendant                                 //
    ///////////////////////////////////////////////////////////////////////////////////////////
    async getGeographicTree (endNodeId) {
        let obj = {
            id: endNodeId,
            children: []
        };
        let parents = [];
        do {
            let tempParents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(id, (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS);
            parents = tempParents && tempParents.map((el)=>el.get());
        // parent && result.push(parent.get());
        // id = (parent && parent.id) && parent.id.get();
        }while (parents.length);
    // return result;
    },
    addObjToParent (obj, parentId) {
        return {
            id: parentId,
            children: obj
        };
    }
};
exports.default = utilities;

},{"../services/service":"19gQQ","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19gQQ":[function(require,module,exports) {
const { SPINAL_RELATION_PTR_LST_TYPE, SpinalGraphService } = require("bae9fe1938ea9bca");
const { Model } = require("e509c984e0dbbabc");
const constants = require("bd6e938e9e366621");
let groupService = {
    constants: constants,
    createGroupContext (name, type) {
        const context = SpinalGraphService.getContext(name);
        if (typeof context !== "undefined") return Promise.resolve(false);
        return SpinalGraphService.addContext(name, type, new Model({
            name: name
        }));
    },
    addElement (contextId, elementId, elementType, elementName, iconName, color) {
        let contextInfo = SpinalGraphService.getInfo(contextId);
        let contextType = contextInfo && contextInfo.type ? contextInfo.type.get() : undefined;
        let typeAndRelation = this.getTypeAndRelation(elementType, contextType);
        let type = typeAndRelation.type;
        let relationName = typeAndRelation.relation;
        if (typeof type !== "undefined" && typeof relationName !== "undefined") {
            let info = {
                name: elementName,
                type: type
            };
            if (iconName) info["icon"] = iconName;
            if (color) info["color"] = color;
            let childId = SpinalGraphService.createNode(info, new Model({
                name: elementName
            }));
            return SpinalGraphService.addChildInContext(elementId, childId, contextId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
        }
    // // let type =
    // //   contextType === ROOMS_GROUP_CONTEXT ? ROOMS_GROUP : EQUIPMENTS_GROUP;
    // // let relationName =
    // //   contextType === ROOMS_GROUP_CONTEXT ?
    // //   ROOMS_GROUP_RELATION :
    // //   EQUIPMENTS_GROUP_RELATION;
    },
    elementIsLinkedToGroup (groupId, elementId) {
        let realNode = SpinalGraphService.getRealNode(groupId);
        const type = realNode.getType().get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        try {
            let ids = realNode.children[SPINAL_RELATION_PTR_LST_TYPE][relationName].children.info.ids;
            return Promise.resolve(ids.has((el)=>{
                return el.get() === elementId;
            }));
        } catch (error) {
            // let type = SpinalGraphService.getInfo(groupId).type.get();
            // let relationName = type === ROOMS_GROUP ? ROOMS_TO_ELEMENT_RELATION :
            //   EQUIPMENTS_TO_ELEMENT_RELATION;
            return SpinalGraphService.getChildren(groupId, [
                relationName
            ]).then((children)=>{
                for(let i = 0; i < children.length; i++){
                    const element = children[i];
                    if (element.id.get() === elementId) return true;
                }
                return false;
            });
        }
    },
    linkElementToGroup (groupId, elementId, contextId) {
        let groupInfo = SpinalGraphService.getInfo(groupId);
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(groupInfo.type.get());
        return this.getCategorie(groupInfo).then((category)=>{
            return this.elementIsInCategorie(category[0].id.get(), elementId).then((group)=>{
                let result = {
                    old_group: undefined,
                    newGroup: groupId
                };
                if (typeof group !== "undefined") {
                    this.removeLink(group.id.get(), elementId);
                    result.old_group = group.id.get();
                }
                SpinalGraphService.addChildInContext(groupId, elementId, contextId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
                return result;
            });
        });
    },
    removeLink (groupId, elementId) {
        let type = SpinalGraphService.getInfo(groupId).type.get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        return SpinalGraphService.removeChild(groupId, elementId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
    },
    getTypeAndRelation (elementType, contextType) {
        switch(elementType){
            case contextType:
                return {
                    type: constants.CATEGORY_TYPE,
                    relation: constants.CONTEXT_TO_CATEGORY_RELATION
                };
            // case ROOMS_GROUP:
            //   return {
            //     type: "undefined",
            //       relation:
            //   };
            case constants.CATEGORY_TYPE:
                // eslint-disable-next-line no-case-declarations
                let type = constants.CONTEXT_GROUP_ASSOCIATION.get(contextType);
                return {
                    type: type,
                    relation: constants.CATEGORY_TO_GROUP_RELATION
                };
            // case constants.ROOMS_GROUP:
            // case constants.EQUIPMENTS_GROUP:
            // case constants.ENDPOINT_GROUP:
            //   return {
            //     type: "",
            //       relation: constants.GROUP_RELATION_ASSOCIATION.get(elementType)
            //   }
            default:
                return {};
        }
    },
    getElementsLinked (groupId) {
        let type = SpinalGraphService.getInfo(groupId).type.get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        return SpinalGraphService.getChildren(groupId, [
            relationName
        ]);
    },
    getGroups (selectedNode) {
        // const ROOMS_TYPES = [
        //   ROOMS_GROUP_CONTEXT,
        //   ROOMS_CATEGORY,
        //   ROOMS_GROUP
        // ]
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if (typeof constants.GROUP_RELATION_ASSOCIATION.get(type) !== "undefined") return Promise.resolve([
            selectedNode
        ]);
        let relations = [
            constants.CONTEXT_TO_CATEGORY_RELATION,
            constants.CATEGORY_TO_GROUP_RELATION,
            constants.GROUP_TO_ROOMS_RELATION,
            constants.GROUP_TO_EQUIPMENTS_RELATION,
            constants.GROUP_TO_ENDPOINT_RELATION
        ];
        return SpinalGraphService.findNodes(nodeId, relations, (node)=>{
            let argType = node.getType().get();
            return typeof constants.GROUP_RELATION_ASSOCIATION.get(argType) !== "undefined";
        }).then((res)=>{
            return res.map((el)=>{
                SpinalGraphService._addNode(el);
                return el.info;
            });
        });
    },
    getCategorie (selectedNode) {
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if (type === constants.CATEGORY_TYPE) return Promise.resolve(selectedNode);
        else if (constants.CONTEXTS_TYPES.indexOf(type) !== -1) return SpinalGraphService.getChildren(nodeId, [
            constants.CONTEXT_TO_CATEGORY_RELATION
        ]);
        else {
            let relationRefPromises = [];
            let node = SpinalGraphService.getRealNode(nodeId);
            let relationList = node.parents[constants.CATEGORY_TO_GROUP_RELATION];
            if (relationList) for(let i = 0; i < relationList.length; i++){
                const element = relationList[i];
                relationRefPromises.push(element.load());
            }
            return Promise.all(relationRefPromises).then((refs)=>{
                let promises = refs.map((node)=>{
                    return node.parent.load();
                });
                return Promise.all(promises).then((parents)=>{
                    // let p = [];
                    // parents.forEach(el => {
                    //   if (el && !(el instanceof SpinalContext)) {
                    //     p.push(new SpinalCalNode(el));
                    //   }
                    // })
                    // return p;
                    return parents.map((el)=>{
                        return el.info;
                    });
                });
            });
        }
    },
    elementIsInCategorie (categoryId, elementId) {
        // let nodeInfo = SpinalGraphService.getInfo(categoryId);
        // let type = nodeInfo.type.get();
        // let relationName =
        //   type === ROOMS_CATEGORY ?
        //   ROOMS_GROUP_RELATION :
        //   EQUIPMENTS_GROUP_RELATION;
        return SpinalGraphService.getChildren(categoryId, [
            constants.CATEGORY_TO_GROUP_RELATION
        ]).then((children)=>{
            return children.find((child)=>{
                return child.childrenIds.find((el)=>{
                    return el === elementId;
                });
            });
        });
    }
};
module.exports = {
    // ROOMS_GROUP_CONTEXT,
    // ROOMS_GROUP,
    // EQUIPMENTS_GROUP,
    // ROOMS_GROUP_RELATION,
    // EQUIPMENTS_GROUP_RELATION,
    // EQUIPMENTS_GROUP_CONTEXT,
    // ROOMS_TO_ELEMENT_RELATION,
    // EQUIPMENTS_TO_ELEMENT_RELATION,
    // ROOMS_CATEGORY,
    // ROOMS_CATEGORY_RELATION,
    // EQUIPMENTS_CATEGORY,
    // EQUIPMENTS_CATEGORY_RELATION,
    // typeLst,
    // TYPE_AND_RELATION,
    groupService
};

},{"bae9fe1938ea9bca":"9n7zp","e509c984e0dbbabc":"fRH70","bd6e938e9e366621":"gby48"}],"gby48":[function(require,module,exports) {
// ////////////////////////////////////////////////////
// // ROOMS
// ////////////////////////////////////////////////////
// const ROOMS_GROUP_CONTEXT = "RoomsGroupContext";
// const ROOMS_GROUP = "RoomsGroup";
// const ROOMS_GROUP_RELATION = "hasRoomsGroup";
// const ROOMS_TO_ELEMENT_RELATION = "groupHasRooms";
// const ROOMS_CATEGORY = "Rooms_category";
// const ROOMS_CATEGORY_RELATION = "hasRoomsCategory";
// ///////////////////////////////////////////////////////
// // BimObject
// ///////////////////////////////////////////////////////
// const EQUIPMENTS_GROUP_CONTEXT = "EquipmentGroupContext";
// const EQUIPMENTS_GROUP = "EquipmentGroup";
// const EQUIPMENTS_GROUP_RELATION = "hasEquipmentsGroup";
// const EQUIPMENTS_TO_ELEMENT_RELATION = "groupHasEquipments";
// const EQUIPMENTS_CATEGORY = "Equipment_category";
// const EQUIPMENTS_CATEGORY_RELATION = "hasEquipmentsCategory";
// const typeLst = [
//   ROOMS_GROUP_CONTEXT,
//   ROOMS_GROUP,
//   ROOMS_CATEGORY,
//   EQUIPMENTS_GROUP_CONTEXT,
//   EQUIPMENTS_GROUP,
//   EQUIPMENTS_CATEGORY
// ]
// const TYPE_AND_RELATION = new Map();
// TYPE_AND_RELATION.set(ROOMS_GROUP_CONTEXT, ROOMS_CATEGORY_RELATION)
// TYPE_AND_RELATION.set(ROOMS_GROUP, ROOMS_TO_ELEMENT_RELATION)
// TYPE_AND_RELATION.set(ROOMS_CATEGORY, ROOMS_GROUP_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_GROUP_CONTEXT, EQUIPMENTS_CATEGORY_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_GROUP, EQUIPMENTS_TO_ELEMENT_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_CATEGORY, EQUIPMENTS_GROUP_RELATION)
// const CONTEXT_TYPE = "groupingContext";
// const CATEGORY_TYPE = "groupingCategory";
// ///////////////////////////////////////////
// //            Groups Types               //
// ///////////////////////////////////////////
// const ROOMS_GROUP = "roomsGroup";
// const EQUIPMENTS_GROUP = "equipmentGroup";
// const ENDPOINT_GROUP = "endpointGroup"
// ///////////////////////////////////////////
// //            Relations                  //
// ///////////////////////////////////////////
// const CONTEXT_TO_CATEGORY_RELATION = "hasCategory";
// const CATEGORY_TO_GROUP_RELATION = "hasGroup";
// const GROUP_TO_ROOMS_RELATION = "groupHasRooms";
// const GROUP_TO_EQUIPMENTS_RELATION = "groupHasEquipments";
// const GROUP_TO_ENDPOINT_RELATION = "groupHasEndpoints";
class GroupServiceConstants {
    constructor(){
        ///////////////////////////////////////
        // CONTEXT
        ///////////////////////////////////////
        this.ROOMS_GROUP_CONTEXT = "RoomsGroupContext";
        this.EQUIPMENTS_GROUP_CONTEXT = "EquipmentGroupContext";
        this.ENDPOINTS_GROUP_CONTEXT = "EndpointGroupContext";
        this.CONTEXTS_TYPES = [
            this.ROOMS_GROUP_CONTEXT,
            this.EQUIPMENTS_GROUP_CONTEXT,
            this.ENDPOINTS_GROUP_CONTEXT
        ];
        //Category
        this.CATEGORY_TYPE = "groupingCategory";
        ///////////////////////////////////////////
        //            Groups Types               //
        ///////////////////////////////////////////
        this.ROOMS_GROUP = "roomsGroup";
        this.EQUIPMENTS_GROUP = "equipmentGroup";
        this.ENDPOINT_GROUP = "endpointGroup";
        this.GROUPS_TYPES = [
            this.ROOMS_GROUP,
            this.EQUIPMENTS_GROUP,
            this.ENDPOINT_GROUP
        ];
        ///////////////////////////////////////////
        //            Relations                  //
        ///////////////////////////////////////////
        this.CONTEXT_TO_CATEGORY_RELATION = "hasCategory";
        this.CATEGORY_TO_GROUP_RELATION = "hasGroup";
        this.GROUP_TO_ROOMS_RELATION = "groupHasRooms";
        this.GROUP_TO_EQUIPMENTS_RELATION = "groupHasEquipments";
        this.GROUP_TO_ENDPOINT_RELATION = "groupHasEndpoints";
        ////////////////////////////////////////////
        // Maps
        ////////////////////////////////////////////
        this.CONTEXT_GROUP_ASSOCIATION = new Map([
            [
                this.ROOMS_GROUP_CONTEXT,
                this.ROOMS_GROUP
            ],
            [
                this.EQUIPMENTS_GROUP_CONTEXT,
                this.EQUIPMENTS_GROUP
            ],
            [
                this.ENDPOINTS_GROUP_CONTEXT,
                this.ENDPOINT_GROUP
            ]
        ]);
        this.GROUP_RELATION_ASSOCIATION = new Map([
            [
                this.ROOMS_GROUP,
                this.GROUP_TO_ROOMS_RELATION
            ],
            [
                this.EQUIPMENTS_GROUP,
                this.GROUP_TO_EQUIPMENTS_RELATION
            ],
            [
                this.ENDPOINT_GROUP,
                this.GROUP_TO_ENDPOINT_RELATION
            ]
        ]);
    }
}
module.exports = new GroupServiceConstants();

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-room-manager.8ee7e72e.js.map
