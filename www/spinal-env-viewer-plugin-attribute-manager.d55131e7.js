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
})({"6SVRo":[function(require,module,exports) {
var _eventRecepter = require("./src/js/events/eventRecepter");
var _register = require("./src/js/register");
var _buttons = require("./src/buttons");
var _buttons1 = require("./src/vue/panels/generateGroupPanel/buttons");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const SIDEBAR = "GraphManagerSideBar";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, new (0, _buttons.OPEN_PANEL_BTN)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, new (0, _buttons.OPEN_CONFIGURATION_PANEL)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, new (0, _buttons1.OPEN_SELECT_TYPE_BTN)(), [
    3
]);

},{"./src/js/events/eventRecepter":"bArZq","./src/js/register":"fcTTE","./src/buttons":"8KEaq","./src/vue/panels/generateGroupPanel/buttons":"7FZOz","spinal-env-viewer-context-menu-service":"kHlxv"}],"bArZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _events = require("./events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _controllers = require("./controllers");
var _controllersDefault = parcelHelpers.interopDefault(_controllers);
(0, _eventsDefault.default).$on("selectElement", (data)=>{
    (0, _controllersDefault.default).selectitemInViewer(data.id);
});
(0, _eventsDefault.default).$on("select", (data)=>{
    (0, _controllersDefault.default).selectObject(data);
});
(0, _eventsDefault.default).$on("isolate", (data)=>{
    (0, _controllersDefault.default).IsolateObject(data);
});
(0, _eventsDefault.default).$on("fitToView", (data)=>{
    (0, _controllersDefault.default).zoomObject(data);
});

},{"./events":"bDoQ0","./controllers":"etTHp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDoQ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const EventBus = new (0, _vueDefault.default)();
exports.default = EventBus;

},{"vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etTHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _service = require("spinal-env-viewer-room-manager/services/service");
exports.default = {
    async selectitemInViewer (nodeId) {
        const objects = await this.getBimObjectsAndOrganizeThem(nodeId);
        // if (nodeInfo && this._isBimobjectOrRoom(nodeInfo.type.get())) {
        //   const bimObjects = await this._getBimObjects(nodeInfo);
        //   const objecs = this._organizeBimObject(bimObjects);
        objects.forEach((el)=>{
            let model = window.spinal.BimObjectService.mappingBimFileIdModelId[el.bimFileId];
            for(let j = 0; j < model.modelScene.length; j++){
                const scene = model.modelScene[j];
                spinal.ForgeViewer.viewer.impl.selector.setSelection(el.selection, scene.model);
                spinal.ForgeViewer.viewer.isolate(el.selection, scene.model);
                spinal.ForgeViewer.viewer.fitToView(el.selection);
            }
        });
    },
    async selectObject (nodeIds) {
        const objects = await this.getBimObjectsAndOrganizeThem(nodeIds);
        objects.forEach((el)=>{
            let model = window.spinal.BimObjectService.mappingBimFileIdModelId[el.bimFileId];
            for(let j = 0; j < model.modelScene.length; j++){
                const scene = model.modelScene[j];
                spinal.ForgeViewer.viewer.impl.selector.setSelection(el.selection, scene.model);
            }
        });
    },
    async IsolateObject (nodeIds) {
        const objects = await this.getBimObjectsAndOrganizeThem(nodeIds);
        objects.forEach((el)=>{
            let model = window.spinal.BimObjectService.mappingBimFileIdModelId[el.bimFileId];
            for(let j = 0; j < model.modelScene.length; j++){
                const scene = model.modelScene[j];
                spinal.ForgeViewer.viewer.isolate(el.selection, scene.model);
            }
        });
    },
    async zoomObject (nodeIds) {
        const objects = await this.getBimObjectsAndOrganizeThem(nodeIds);
        objects.forEach((el)=>{
            let model = window.spinal.BimObjectService.mappingBimFileIdModelId[el.bimFileId];
            for(let j = 0; j < model.modelScene.length; j++){
                const scene = model.modelScene[j];
                spinal.ForgeViewer.viewer.fitToView(el.selection);
            }
        });
    },
    async getBimObjectsAndOrganizeThem (nodeIds) {
        if (!Array.isArray(nodeIds)) nodeIds = [
            nodeIds
        ];
        const promises = [];
        for (const nodeId of nodeIds)promises.push(this._getBimsOrganized(nodeId));
        return Promise.all(promises).then((values)=>{
            const res = [];
            values = values.flat(2);
            for (const obj of values){
                const found = res.find((el)=>el.bimFileId === obj.bimFileId);
                if (typeof found === "undefined") res.push(obj);
                else found.selection.push(...obj.selection);
            }
            return res;
        });
    },
    ////////////////////////////////////////////////////////////////////////////
    //                                PRIVATES
    ////////////////////////////////////////////////////////////////////////////
    _isBimobjectOrRoom (nodeType) {
        if (nodeType && (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_TYPES_ORDER.indexOf(nodeType) !== -1) return true;
        return false;
    },
    async _getBimObjects (nodeInfo) {
        let type = nodeInfo.type.get();
        let nodeId = nodeInfo.id.get();
        if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE) return [
            nodeInfo.get()
        ];
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
        ]).then((children)=>{
            return children.map((el)=>el.get());
        });
    },
    _organizeBimObject (bimObjects) {
        let data = [];
        bimObjects.forEach((bim)=>{
            let found = data.find((el)=>el.bimFileId === bim.bimFileId);
            if (found) found.selection.push(bim.dbid);
            else data.push({
                bimFileId: bim.bimFileId,
                selection: [
                    bim.dbid
                ]
            });
        });
        return data;
    },
    async _getBimsOrganized (nodeId) {
        const nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
        if (nodeInfo && this._isBimobjectOrRoom(nodeInfo.type.get())) {
            const bimObjects = await this._getBimObjects(nodeInfo);
            const objects = this._organizeBimObject(bimObjects);
            return objects;
        }
        return [];
    }
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-room-manager/services/service":"19gQQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19gQQ":[function(require,module,exports) {
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

},{}],"fcTTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
////////////////////////////////////
//            Panels
////////////////////////////////////
var _panelVue = require("../vue/panels/attributePanel/panel.vue");
var _panelVueDefault = parcelHelpers.interopDefault(_panelVue);
var _configurationPanelVue = require("../vue/panels/configurationPanel/configurationPanel.vue");
var _configurationPanelVueDefault = parcelHelpers.interopDefault(_configurationPanelVue);
var _panelVue1 = require("../vue/panels/generateGroupPanel/panel.vue");
var _panelVueDefault1 = parcelHelpers.interopDefault(_panelVue1);
////////////////////////////////////
//            Dialogs
////////////////////////////////////
// import LinkToGroup from "../vue/dialogs/linkToGroup.vue";
var _paramsDialogVue = require("../vue/dialogs/paramsDialog.vue");
var _paramsDialogVueDefault = parcelHelpers.interopDefault(_paramsDialogVue);
var _importAttributeExcelDialogVue = require("../vue/dialogs/importAttributeExcelDialog.vue");
var _importAttributeExcelDialogVueDefault = parcelHelpers.interopDefault(_importAttributeExcelDialogVue);
var _exportVue = require("../vue/panels/configurationPanel/dialogs/export.vue");
var _exportVueDefault = parcelHelpers.interopDefault(_exportVue);
var _importVue = require("../vue/panels/configurationPanel/dialogs/import.vue");
var _importVueDefault = parcelHelpers.interopDefault(_importVue);
var _configurationsVue = require("../vue/panels/generateGroupPanel/dialogs/configurations.vue");
var _configurationsVueDefault = parcelHelpers.interopDefault(_configurationsVue);
var _selectTypeVue = require("../vue/panels/generateGroupPanel/dialogs/select-type.vue");
var _selectTypeVueDefault = parcelHelpers.interopDefault(_selectTypeVue);
////////////////////////////////////
//            Others
////////////////////////////////////
const { SpinalForgeExtention } = require("282ca163b8265744");
const { SpinalMountExtention } = require("718f4e8b6539df3");
//////////////////////////////////////////////////////////////////////////////////
// register Panels
/////////////////////////////////////////////////////////////////////////////////
let panels = [
    {
        name: "attributeManagerPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _panelVueDefault.default)),
        panel: {
            title: "Attribute manager",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "620px",
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "configurationPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _configurationPanelVueDefault.default)),
        panel: {
            title: "Configuration Panel",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "620px",
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "generateGroupPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _panelVueDefault1.default)),
        panel: {
            title: "Generate Group Panel",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "620px",
            height: "740px",
            left: "400px"
        }
    }
];
for(let index = 0; index < panels.length; index++){
    const element = panels[index];
    const panelExtension = SpinalForgeExtention.createExtention(element);
    SpinalForgeExtention.registerExtention(element.name, panelExtension);
}
//////////////////////////////////////////////////////////////////////////////////
// register Dialogs
/////////////////////////////////////////////////////////////////////////////////
const dialogs = [
    // {
    //   name: "linkToGroupDialog",
    //   vueMountComponent: Vue.extend(LinkToGroup),
    //   parentContainer: document.body
    // }, 
    {
        name: "paramDialogComponent",
        vueMountComponent: (0, _vueDefault.default).extend((0, _paramsDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "importAttributeExcelDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _importAttributeExcelDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "exportConfigurationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _exportVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "importConfigurationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _importVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "configureGenerationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _configurationsVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "selectTypeDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _selectTypeVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","../vue/panels/attributePanel/panel.vue":"iCgRX","../vue/panels/configurationPanel/configurationPanel.vue":"emNIT","../vue/panels/generateGroupPanel/panel.vue":"1qXTR","../vue/dialogs/paramsDialog.vue":"kaxGJ","../vue/dialogs/importAttributeExcelDialog.vue":"hJjsF","../vue/panels/configurationPanel/dialogs/export.vue":"dRHMA","../vue/panels/configurationPanel/dialogs/import.vue":"2ZDaJ","../vue/panels/generateGroupPanel/dialogs/configurations.vue":"llzZt","../vue/panels/generateGroupPanel/dialogs/select-type.vue":"3VxMb","282ca163b8265744":"1mGHd","718f4e8b6539df3":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCgRX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1195b48af7a69577");
    if (script.__esModule) script = script.default;
    script.render = require("a0ec4736448e321f").render;
    script.staticRenderFns = require("a0ec4736448e321f").staticRenderFns;
    script._scopeId = "data-v-8cb455";
    script.__cssModules = require("c858734c905ee75c").default;
    require("48aed9c626e76d57").default(script);
    script.__scopeId = "data-v-8cb455";
    script.__file = "panel.vue";
};
initialize();
exports.default = script;

},{"1195b48af7a69577":"cDyUL","a0ec4736448e321f":"aYU09","c858734c905ee75c":"lSuaN","48aed9c626e76d57":"b5tX6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDyUL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typesListVue = require("./components/typesList.vue");
var _typesListVueDefault = parcelHelpers.interopDefault(_typesListVue);
var _tablePageVue = require("./components/tablePage.vue");
var _tablePageVueDefault = parcelHelpers.interopDefault(_tablePageVue);
var _services = require("../../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var _events = require("../../../js/events/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
const { spinalPanelManagerService } = require("b824fe35df679c8f");
var scriptExports = {
    name: "attributeManagerPanel",
    components: {
        "type-lst-component": (0, _typesListVueDefault.default),
        "table-page": (0, _tablePageVueDefault.default)
    },
    mounted () {
        (0, _eventsDefault.default).$on("refreshTable", ()=>{
            this.refreshData();
        });
    },
    data () {
        this.STATES = Object.freeze({
            normal: 0,
            loading: 1,
            error: 2
        });
        this.pages = Object.freeze({
            types: 0,
            table: 1
        });
        this.data = null;
        return {
            appState: this.STATES.normal,
            itemSelected: null,
            contextSelected: null,
            typeSelected: null,
            visiblePage: this.pages.types,
            itemDisplayed: null
        };
    },
    methods: {
        opened (params) {
            this.itemSelected = params.nodeSelected;
            this.contextSelected = params.context;
        },
        closed () {},
        setTitle (title) {
            spinalPanelManagerService.panels.attributeManagerPanel.panel.setTitle(title);
        },
        getAllData () {
            return (0, _servicesDefault.default).getAllData(this.contextSelected.id, this.itemSelected.id);
        },
        selectType (type) {
            this.typeSelected = type;
            this.itemDisplayed = this.data.data[type];
            // this.attributesDisplayed = this.data.attributes;
            // this.attributesDisplayed = this.getAttributes();
            this.visiblePage = this.pages.table;
        },
        getAttributes () {
            return this.data.data[this.typeSelected].map((el)=>{
                return el.attributes.map((el2)=>{
                    return {
                        category: el2.category,
                        label: el2.label
                    };
                });
            }).flat();
        },
        goBack () {
            this.typeSelected = null;
            this.visiblePage = this.pages.types;
        },
        validateItem () {
            // setTimeout(() => {
            this.refreshData();
        // }, 500);
        },
        refreshData () {
            this.appState = this.STATES.loading;
            this.getAllData().then((res)=>{
                this.data = res;
                const typeFound = this.data.types.find((el)=>el === this.typeSelected);
                this.typeSelected = typeFound ? typeFound : null;
                if (this.typeSelected) this.selectType(this.typeSelected);
                else this.visiblePage = this.pages.types;
                this.appState = this.STATES.normal;
            }).catch((err)=>{
                this.appState = this.STATES.normal;
                console.error(err);
            });
        },
        openExportDialog (res) {
            this.appState = this.STATES.loading;
            spinalPanelManagerService.openPanel("importAttributeExcelDialog", {
                tableData: res.table,
                excelData: res.data,
                callback: ()=>{
                    this.refreshData();
                }
            });
        }
    },
    watch: {
        itemSelected () {
            this.setTitle(`Attribute Manager : ${this.itemSelected.name}`);
            this.refreshData();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"b824fe35df679c8f":"7Uw4d","./components/typesList.vue":"gkDMw","./components/tablePage.vue":"1YMod","../../../services":"R5DpR","../../../js/events/events":"bDoQ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"gkDMw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4f26aa49bed62054");
    if (script.__esModule) script = script.default;
    script.render = require("f99d2bee93f24e6e").render;
    script.staticRenderFns = require("f99d2bee93f24e6e").staticRenderFns;
    script._scopeId = "data-v-e69111";
    script.__cssModules = require("f835a18f842c9159").default;
    require("b47a3cbf86bf73c").default(script);
    script.__scopeId = "data-v-e69111";
    script.__file = "typesList.vue";
};
initialize();
exports.default = script;

},{"4f26aa49bed62054":"a3PN7","f99d2bee93f24e6e":"1xYf7","f835a18f842c9159":"jj5Cx","b47a3cbf86bf73c":"7kIkK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3PN7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "typeLstComponent",
    props: {
        types: {
            required: true
        }
    },
    data () {
        return {};
    },
    methods: {
        selectType (type) {
            this.$emit("select", type);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xYf7":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.types ? _c("div", {
        staticClass: "_container"
    }, _vm._l(_vm.types, function(type, index) {
        return _c("div", {
            key: index,
            staticClass: "_containerItem",
            on: {
                "click": function($event) {
                    return _vm.selectType(type);
                }
            }
        }, [
            _c("div", {
                staticClass: "text"
            }, [
                _vm._v(_vm._s(type))
            ])
        ]);
    }), 0) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jj5Cx":[function() {},{}],"7kIkK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YMod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b165071ac4220ee");
    if (script.__esModule) script = script.default;
    script.render = require("ee50dcc265090d90").render;
    script.staticRenderFns = require("ee50dcc265090d90").staticRenderFns;
    script._scopeId = "data-v-19d346";
    script.__cssModules = require("189bc5a10f201f5").default;
    require("c74aea5bef02c650").default(script);
    script.__scopeId = "data-v-19d346";
    script.__file = "tablePage.vue";
};
initialize();
exports.default = script;

},{"b165071ac4220ee":"4lG4U","ee50dcc265090d90":"dfh7s","189bc5a10f201f5":"gv4Db","c74aea5bef02c650":"7CO8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lG4U":[function(require,module,exports) {
// import lodash from "lodash";
// import CreateAttributeTooltips from "./tooltips/createAttribute.vue";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexVue = require("./table/index.vue");
var _indexVueDefault = parcelHelpers.interopDefault(_indexVue);
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _fileSaver = require("file-saver");
var _fileSaverDefault = parcelHelpers.interopDefault(_fileSaver);
// import utilities from "../../../../js/utilities";
var _services = require("../../../../services");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var scriptExports = {
    name: "tablePage",
    components: {
        // "create-attribute": CreateAttributeTooltips,
        "table-component": (0, _indexVueDefault.default)
    },
    props: {
        itemDisplayed: {
            type: Array
        },
        attributesDisplayed: {
            type: Array
        },
        typeSelected: {}
    },
    data () {
        this.STATES = Object.freeze({
            normal: 0,
            loading: 1,
            error: 2
        });
        return {
            // showAttrTooltip: false,
            appState: this.STATES.normal,
            tableContent: [],
            header: []
        };
    },
    async mounted () {
        this.tableContent = await this.getTableContent();
        this.header = await this.getAttributes();
    },
    methods: {
        back () {
            this.$emit("back");
        },
        // openCreateAttrTooltips() {
        //   this.showAttrTooltip = !this.showAttrTooltip;
        // },
        createAttribute () {
            this.$emit("refresh");
        },
        async getTableContent () {
            let content = [];
            let attributes = await this.getAttributes();
            if (this.itemDisplayed) content = this.itemDisplayed.map((item)=>{
                return {
                    id: item.id,
                    name: item.name,
                    type: item.type,
                    attributes: attributes.map((el)=>{
                        return {
                            category: el.category,
                            label: el.label,
                            date: el.date,
                            value: this.getAttributeValue(item, el)
                        };
                    })
                };
            });
            // return { header: attributes, data: content };
            return content;
        },
        getAttributes () {
            // if (this.itemDisplayed) {
            //   this.itemDisplayed.forEach(el => {
            //     attrs.push(...el.attributes);
            //   });
            // }
            // return attrs.filter((elem, index, self) => {
            //   return (
            //     self.findIndex(t => {
            //       return t.category === elem.category && t.label === elem.label;
            //     }) === index
            //   );
            // });
            return (0, _services.spinalConfigurationService).getCurrentConfiguration().then((conf)=>{
                let values = conf.categories;
                // let values = res.get();
                let attrs = [];
                values.forEach((value)=>{
                    let items = value.attributes.map((attr)=>{
                        if (attr.show) return {
                            category: value.name,
                            label: attr.name
                        };
                        return;
                    }).filter((el2)=>typeof el2 !== "undefined");
                    attrs.push(...items);
                });
                return attrs;
            });
        },
        getAttributeValue (item, attr) {
            let found;
            if (item && attr) found = item.attributes.find((el)=>el.label === attr.label);
            return typeof found !== "undefined" ? found.value : "-";
        },
        getExportHeadersData () {
            let headers = [
                {
                    key: "id",
                    header: "SpinalGraph ID",
                    width: 65
                },
                {
                    key: "revit_id",
                    header: "Revit ID",
                    width: 15
                },
                {
                    key: "name",
                    header: "Name",
                    width: 50
                }
            ];
            this.header.forEach((head)=>{
                headers.push({
                    key: `${head.category}_${head.label}`,
                    header: `${head.category} / ${head.label}`,
                    width: 15
                });
            });
            return headers;
        },
        getValue (item, attribute) {
            let found = item.attributes.find((el)=>{
                return el.label === attribute.label && el.category === attribute.category;
            });
            return typeof found !== "undefined" ? found.value : "-";
        },
        _sortByName (items) {
            return items.sort((a, b)=>{
                const name1 = a.name.toUpperCase();
                const name2 = b.name.toUpperCase();
                let comparison = 0;
                if (name1 > name2) comparison = 1;
                else if (name1 < name2) comparison = -1;
                return comparison;
            });
        },
        getExportRowsData () {
            const tableReference = this.$refs["tableContent"];
            if (tableReference) {
                const liste = tableReference.itemsSelected || [];
                const tableSorted = this._sortByName(liste);
                return tableSorted.map((content)=>{
                    let info = {
                        id: content.id,
                        name: content.name,
                        revit_id: content.type === (0, _constants.BIM_OBJECT_TYPE) ? this._getRevitID(content.name) : "-"
                    };
                    this.header.forEach((head)=>{
                        let value = this.getValue(content, head);
                        info[`${head.category}_${head.label}`] = value;
                    });
                    return info;
                });
            }
        },
        formatExportData () {
            return [
                {
                    data: [
                        {
                            name: "sheet 1",
                            header: this.getExportHeadersData(),
                            rows: this.getExportRowsData()
                        }
                    ]
                }
            ];
        },
        exportData () {
            let result = this.formatExportData();
            (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).export(result).then((buffer)=>{
                (0, _fileSaverDefault.default).saveAs(new Blob(buffer), `spinalcom.xlsx`);
            });
        },
        _getRevitID (name) {
            let reg = /\[(.*)\]/gim;
            let macthed = name.match(reg);
            if (macthed && macthed.length > 0) {
                let value = JSON.parse(JSON.stringify(macthed[macthed.length - 1]));
                return value.replace(/\[|\]/g, (el)=>"");
            }
            return "-";
        },
        importExcel () {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
            input.click();
            input.addEventListener("change", async (event)=>{
                const file = event.target.files[0];
                this.appState = this.STATES.loading;
                const dataJson = await (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).convertExcelToJson(file);
                this.$emit("openExportDialog", {
                    data: dataJson,
                    table: this.tableContent
                });
                this.$destroy();
            // this.appState = this.STATES.normal;
            }, false);
        }
    },
    watch: {
        itemDisplayed: async function() {
            this.tableContent = await this.getTableContent();
            this.header = await this.getAttributes();
        }
    },
    beforeDestroy () {
        this.appState = this.STATES.normal;
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./table/index.vue":"QG9F3","spinal-env-viewer-plugin-excel-manager-service":"d1IEa","spinal-env-viewer-panel-manager-service":"7Uw4d","file-saver":"3ILQE","../../../../services":"R5DpR","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QG9F3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b6624d442235922d");
    if (script.__esModule) script = script.default;
    script.render = require("441720c91b2f1859").render;
    script.staticRenderFns = require("441720c91b2f1859").staticRenderFns;
    script._scopeId = "data-v-2b24d1";
    script.__cssModules = require("927bcc5adabd65c6").default;
    require("9922b255ce52a965").default(script);
    script.__scopeId = "data-v-2b24d1";
    script.__file = "index.vue";
};
initialize();
exports.default = script;

},{"b6624d442235922d":"8lXiQ","441720c91b2f1859":"1dHhF","927bcc5adabd65c6":"k2anK","9922b255ce52a965":"fFad1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lXiQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tableContentVue = require("./tableContent.vue");
var _tableContentVueDefault = parcelHelpers.interopDefault(_tableContentVue);
var _createAttributeVue = require("../tooltips/createAttribute.vue");
var _createAttributeVueDefault = parcelHelpers.interopDefault(_createAttributeVue);
// import ChangeColValue from "../tooltips/changeCol.vue";
var _services = require("../../../../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var _standardButtonsVue = require("./standard-buttons.vue");
var _standardButtonsVueDefault = parcelHelpers.interopDefault(_standardButtonsVue);
var _fabsVue = require("./fabs.vue");
var _fabsVueDefault = parcelHelpers.interopDefault(_fabsVue);
var _events = require("../../../../../js/events/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
// import tableContentVue from "./tableContent.vue";
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
const { spinalPanelManagerService } = require("dbcaf7e572648d0d");
const debounce = require("2c1982f51cec3171");
var scriptExports = {
    name: "TableComponent",
    props: {
        tableContent: {},
        header: {},
        typeSelected: {}
    },
    components: {
        "fabs-component": (0, _fabsVueDefault.default),
        "table-content-component": (0, _tableContentVueDefault.default),
        "create-attribute": (0, _createAttributeVueDefault.default),
        "standard-buttons": (0, _standardButtonsVueDefault.default)
    },
    data () {
        this.checkboxSelects = [
            {
                text: "select All",
                value: true,
                action: this.selectAll
            },
            {
                text: "select only the current page",
                value: true,
                action: this.selectOnLyTheCurrentPage
            }
        ];
        return {
            showAttrTooltip: false,
            editMode: false,
            searched: [],
            searchValue: "",
            searchBy: 0,
            itemsSelected: [],
            headerDisplayed: [],
            pagination: {
                page: 1,
                rowsPerPage: 20,
                totalItems: 0
            },
            rowsPerPageText: [
                20,
                30,
                40
            ],
            itemsMap: new Map()
        };
    },
    created () {
        this.searchAndFilterTable = debounce(this.searchOnTable, 500);
    },
    mounted () {
        this.searched = this.sortByName(this.tableContent.map((el)=>{
            el.selected = false;
            return el;
        }));
        setTimeout(()=>{
            this._addPageNumber();
        }, 200);
    },
    methods: {
        async validateOrCancel (valid) {
            if (valid) await this._changeValue();
            this.refresh();
            this.editMode = false;
        },
        ActiveEditMode () {
            this.editMode = true;
        },
        createAttribute () {
            this.$emit("refresh");
        },
        filterByName (liste, name) {
            if (name.trim().length > 0) return liste.filter((item)=>{
                return item.name.toLowerCase().includes(name.trim().toLowerCase());
            }).map((el)=>{
                el.selected = false;
                return el;
            });
            return liste.map((el)=>{
                el.selected = false;
                return el;
            });
        },
        filterByValue (liste, value) {
            if (value.trim().length > 0) return liste.filter((el)=>{
                let found = el.attributes.find((attr)=>{
                    return attr.value.toString().toLowerCase().includes(value.trim().toLowerCase());
                });
                return found ? true : false;
            }).map((el)=>{
                el.selected = false;
                return el;
            });
            return liste.map((el)=>{
                el.selected = false;
                return el;
            });
        },
        searchOnTable () {
            switch(this.searchBy){
                case 0:
                    this.searched = this.sortByName(this.filterByName(this.tableContent, this.searchValue));
                    break;
                case 1:
                    this.searched = this.sortByName(this.filterByValue(this.tableContent, this.searchValue));
                    break;
            }
        },
        selectAll (value) {
            this.searched = this.searched.map((el)=>{
                el.selected = true;
                return el;
            });
        },
        unSelectAll () {
            this.searched = this.searched.map((el)=>{
                el.selected = false;
                return el;
            });
        },
        selectOnLyTheCurrentPage () {
            this.unSelectAll();
            this.selectCurrentPage();
        },
        selectCurrentPage () {
            const pageNumber = this.pagination.page;
            const itemByPage = this.pagination.rowsPerPage;
            const begin = (pageNumber - 1) * itemByPage;
            const end = begin + itemByPage;
            this.searched = this.searched.map((el, index)=>{
                if (index >= begin && index < end) el.selected = true;
                return el;
            });
        },
        unSelectCurrentPage () {
            const pageNumber = this.pagination.page;
            const itemByPage = this.pagination.rowsPerPage;
            const begin = (pageNumber - 1) * itemByPage;
            const end = begin + itemByPage;
            this.searched = this.searched.map((el, index)=>{
                if (index >= begin && index < end) el.selected = false;
                return el;
            });
        },
        refresh () {
            this.$emit("refresh");
        },
        setValueToColumn (res) {
            let value = res.value;
            let category = res.column.split("/")[0];
            let label = res.column.split("/")[1];
            if (res.pageOnly) {
                let references = this.$refs["editableComponent"];
                references.forEach((el)=>{
                    if (res.useMaquetteValue) this.findValueInMaquette({
                        id: el.item.id,
                        category: category,
                        attribute: label
                    }, false);
                    else el.setValueToColumn(category, label, value);
                });
            } else {
                for (const id of this.itemsMap.keys())if (res.useMaquetteValue) this.findValueInMaquette({
                    id: id,
                    category: category,
                    attribute: label
                }, false);
                else this.setValue(id, category, label, value);
            }
        },
        LinkItem () {
            // console.log(this.itemsSelected, this.searched);
            if (this.itemsSelected.length === 0) return alert("you must select at less one item");
            spinalPanelManagerService.openPanel("linkToGroupDialog", {
                type: this.typeSelected,
                itemSelected: this.itemsSelected
            });
        },
        generateGroup () {
            // console.log(this.itemsSelected, this.searched);
            //  const itemsFiltered = this._filterElementSelected(this.searched);
            if (this.itemsSelected.length === 0) {
                window.alert("select at less one item");
                return;
            }
            //  if (itemsFiltered.length === 0) {
            //     window.alert("select at less one item");
            //     return;
            //  }
            spinalPanelManagerService.openPanel("generateGroupPanel", {
                type: this.typeSelected,
                // items: itemsFiltered,
                items: this.itemsSelected
            });
        },
        OpenParamsDialog () {
            // spinalPanelManagerService.openPanel("paramDialogComponent", {
            //   tableContent: this.tableContent,
            //   header: this.header,
            //   typeSelected: this.typeSelected,
            //   callback: () => {
            //     this.$emit("refresh");
            //   }
            // });
            spinalPanelManagerService.openPanel("configurationPanel", {
                callback: ()=>{
                    this.$emit("refresh");
                }
            });
        },
        sortByName (items) {
            return items.sort((a, b)=>{
                const name1 = a.name.toUpperCase();
                const name2 = b.name.toUpperCase();
                let comparison = 0;
                if (name1 > name2) comparison = 1;
                else if (name1 < name2) comparison = -1;
                return comparison;
            });
        },
        selectItemInViewer (item) {
            (0, _eventsDefault.default).$emit("selectElement", item);
        },
        constructMap () {
            for (const content of this.tableContent){
                const element = {};
                for (const attr of content.attributes)element[`${attr.category}_${attr.label}`] = {
                    value: attr.value,
                    displayValue: attr.value
                };
                this.itemsMap.set(content.id, element);
            }
        },
        async findValueInMaquette (res, alert1 = true) {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(res.id);
            const value = await (0, _servicesDefault.default).getBimObjectAttribute(node.get(), res.attribute);
            if (value === "-") {
                if (alert1) window.alert("no value found !");
                return;
            } else this.setValue(res.id, res.category, res.attribute, value);
        },
        openAttributesPanel (item) {
            let info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id);
            const viewer = window.spinal.ForgeViewer.viewer;
            let propertyPanel = viewer.getPropertyPanel();
            if (typeof propertyPanel === "undefined") {
                propertyPanel = new Autodesk.Viewing.Extensions.ViewerPropertyPanel.prototype.constructor(viewer);
                viewer.setPropertyPanel(propertyPanel);
            }
            const model = window.spinal.BimObjectService.getModelByBimfile(info.bimFileId.get());
            propertyPanel.currentModel = model;
            propertyPanel.setVisible(true);
            propertyPanel.setNodeProperties(info.dbid.get());
        },
        openCreateAttrTooltips () {
            this.showAttrTooltip = !this.showAttrTooltip;
        },
        setValue (id, category, attribute, value = "-") {
            const obj = this.itemsMap.get(id);
            obj[`${category}_${attribute}`]["displayValue"] = value;
        },
        async _changeValue () {
            const promises = [];
            for (const nodeId of this.itemsMap.keys()){
                const found = this.tableContent.find((el)=>el.id === nodeId);
                if (found && found.attributes) for (const attr of found.attributes){
                    let value = this.itemsMap.get(nodeId)[`${attr.category}_${attr.label}`]["value"];
                    let displayValue = this.itemsMap.get(nodeId)[`${attr.category}_${attr.label}`]["displayValue"];
                    if (value !== displayValue) promises.push((0, _servicesDefault.default).updateAttributeValue(nodeId, attr.category, attr.label, displayValue));
                }
            }
            return Promise.all(promises);
        },
        async _cancelValue () {
            for (const nodeId of this.itemsMap.keys()){
                const found = this.tableContent.find((el)=>el.id === nodeId);
                if (found && found.attributes) for (const attr of found.attributes)this.itemsMap.get(nodeId)[`${attr.category}_${attr.label}`]["displayValue"] = this.itemsMap.get(nodeId)[`${attr.category}_${attr.label}`]["value"];
            }
            return;
        },
        _addPageNumber () {
            const actionDiv = (0, _jqueryDefault.default)("._tableContent .theme--dark.v-datatable .v-datatable__actions .v-datatable__actions__range-controls")[0];
            const div = (0, _jqueryDefault.default)(`<div class="v-datatable__actions__page-number">Page : ${this.pagination.page} / ${this.pages}</div>`);
            actionDiv.before(div[0]);
        },
        _filterElementSelected (liste) {
            if (this.searchValue.trim().length > 0) return liste.filter((item)=>{
                const found = this.itemsSelected.find((el)=>el.id === item.id);
                return found;
            });
            return liste;
        },
        checkItem (item) {
            this.itemsSelected = this.searched.filter((el)=>el.selected);
        }
    },
    computed: {
        pages () {
            return Math.ceil(this.searched.length / this.pagination.rowsPerPage);
        },
        searchDataBind () {
            return `${this.searchValue}|${this.searchBy}`;
        }
    },
    watch: {
        searched () {
            this.itemsSelected = this.searched.filter((el)=>el.selected);
        },
        async tableContent () {
            this.constructMap();
            this.searched = this.sortByName(this.filterByName(this.tableContent, this.searchValue));
            this.pagination.totalItems = this.searched.length;
        },
        header () {
            let formated = this.header.map((el)=>{
                let val = Object.assign({}, el);
                val["text"] = `${el.category} / ${el.label}`;
                val["value"] = `${el.category}_${el.label}`;
                return val;
            });
            this.headerDisplayed = [
                {
                    text: "Name",
                    value: "name"
                },
                {
                    text: "Type",
                    value: "type"
                },
                ...formated
            ];
        },
        pagination () {
            const div = (0, _jqueryDefault.default)(".v-datatable__actions__page-number")[0];
            if (div) div.innerHTML = `Page : ${this.pagination.page} / ${this.pages}`;
        },
        searchDataBind () {
            this.searchAndFilterTable();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./tableContent.vue":"kPxsQ","../tooltips/createAttribute.vue":"ezHmM","../../../../../services":"R5DpR","./standard-buttons.vue":"lXE3D","./fabs.vue":"eOsSg","../../../../../js/events/events":"bDoQ0","spinal-env-viewer-graph-service":"9n7zp","dbcaf7e572648d0d":"7Uw4d","2c1982f51cec3171":"3JP5n","jquery":"hgMhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPxsQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6da9fd637fc1e655");
    if (script.__esModule) script = script.default;
    script.render = require("2c3fe023969701e").render;
    script.staticRenderFns = require("2c3fe023969701e").staticRenderFns;
    script._scopeId = "data-v-4bd15e";
    script.__cssModules = require("8ae79e92a348db16").default;
    require("6962e7b0c1ae8771").default(script);
    script.__scopeId = "data-v-4bd15e";
    script.__file = "tableContent.vue";
};
initialize();
exports.default = script;

},{"6da9fd637fc1e655":"dZJvE","2c3fe023969701e":"c2WEY","8ae79e92a348db16":"eak5D","6962e7b0c1ae8771":"bRqFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZJvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _services = require("../../../../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const lodash = require("130cf60ee6505be6");
var scriptExports = {
    name: "tableContentComponent",
    props: [
        "editable",
        "item",
        "attribute",
        "itemsMap"
    ],
    data () {
        return {
            // value: "",
            // displayValue: ""
            data: undefined,
            mouseOver: false
        };
    },
    mounted () {
        // this.value = this.getValue();
        // this.displayValue = this.value;
        this.data = this.getValue();
    },
    methods: {
        getValue () {
            let value = this.itemsMap.get(this.item.id);
            return value[`${this.attribute.category}_${this.attribute.label}`];
        // let found;
        // if (this.item && this.attribute) {
        //   found = this.item.attributes.find(el => {
        //     return (
        //       el.label === this.attribute.label &&
        //       el.category === this.attribute.category
        //     );
        //   });
        // }
        // if (found) {
        //   found["displayValue"] = found.value;
        //   return found;
        // }
        // return {
        //   value: "-",
        //   displayValue: "-"
        // };
        },
        setValue () {
            this.$emit("setValue", {
                item: this.item,
                attribute: this.attribute,
                value: this.data.displayValue
            });
        },
        cancelValue () {
            this.data.displayValue = this.data.value;
            this.$refs.display.innerText = this.data.displayValue;
            this.itemsMap.get(this.item.id)[`${this.attribute.category}_${this.attribute.label}`]["displayValue"] = this.itemsMap.get(this.item.id)[`${this.attribute.category}_${this.attribute.label}`]["value"];
        },
        changeValue (event) {
            const el = event.target;
            this.itemsMap.get(this.item.id)[`${this.attribute.category}_${this.attribute.label}`]["displayValue"] = this.$refs.display.innerText;
            this.displayValue = el.innerText;
            this.setCursorAtEnd(el);
        },
        setValueToColumn (category, label, value) {
            if (value.length > 0 && this.attribute.category === category && this.attribute.label === label) {
                this.data.displayValue = value;
                this.$refs.display.innerText = value;
            }
        },
        validateValue () {
            this.data.displayValue = this.$refs.display.innerText;
            if (this.data.displayValue !== this.data.value) (0, _servicesDefault.default).updateAttributeValue(this.item.id, this.attribute.category, this.attribute.label, this.data.displayValue).then(()=>{
                this.data.value = this.data.displayValue;
                this.setValue();
            });
        },
        mouseIsOver () {
            this.mouseOver = true;
        },
        displayBtn () {
            let nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.item.id);
            // const isBimObject = nodeInfo && nodeInfo.type.get() === "BIMObject";
            const is3DItem = nodeInfo && (nodeInfo.dbId || nodeInfo.externalId);
            return this.editable && this.mouseOver && is3DItem;
        },
        mouseOutOver () {
            this.mouseOver = false;
        },
        findValueInMaquette () {
            this.$emit("findValueInMaquette", {
                id: this.item.id,
                category: this.attribute.category,
                attribute: this.attribute.label
            });
        },
        setCursorAtEnd (el) {
            el.focus();
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../../../services":"R5DpR","spinal-env-viewer-graph-service":"9n7zp","130cf60ee6505be6":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"R5DpR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinalAttributeService", ()=>spinalAttributeService);
parcelHelpers.export(exports, "spinalConfigurationService", ()=>spinalConfigurationService);
var _spinalAttributeService = require("./classes/spinalAttributeService");
var _spinalAttributeServiceDefault = parcelHelpers.interopDefault(_spinalAttributeService);
var _spinalConfigurationService = require("./classes/spinalConfigurationService");
var _spinalConfigurationServiceDefault = parcelHelpers.interopDefault(_spinalConfigurationService);
const spinalAttributeService = new (0, _spinalAttributeServiceDefault.default)();
const spinalConfigurationService = new (0, _spinalConfigurationServiceDefault.default)();
exports.default = spinalAttributeService;

},{"./classes/spinalAttributeService":"3zGxM","./classes/spinalConfigurationService":"e8hB8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zGxM":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
class SpinalAttributeService {
    constructor(){}
    getAllAttributes(nodeId, liste) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (realNode) // return serviceDocumentation.getAllAttributes(realNode).then(
        //   argAttributes => {
        //     return argAttributes.map(el => {
        //       let info = el.get();
        //       if (liste && liste.indexOf(info.label) === -1) liste.push(info
        //         .label);
        //       return info;
        //     })
        //   });
        return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(realNode).then((res)=>{
            return res.map((el)=>{
                let attrs = el.element.get();
                return attrs.map((attr)=>{
                    if (liste && liste.indexOf(attr.label) === -1) liste.push(attr.label);
                    attr["category"] = el.nameCat;
                    return attr;
                });
            }).flat();
        });
        else return Promise.resolve([]);
    }
    async getAllData(contextId, nodeId) {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let res = {
            types: [],
            attributes: [],
            data: {}
        };
        if (context && realNode) await realNode.findInContext(context, async (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let type = node.getType().get();
            let info = node.info.get();
            if (res.types.indexOf(type) === -1) res.types.push(type);
            if (typeof res.data[type] === "undefined") res.data[type] = [];
            info["attributes"] = await this.getAllAttributes(info.id, res.attributes);
            res.data[type].push(info);
        });
        return res;
    }
    getBimObjectAttribute(bimObjectInfo, attributeName) {
        let value = attributeName.toLowerCase();
        let model = window.spinal.BimObjectService.getModelByBimfile(bimObjectInfo.bimFileId) || window.NOP_VIEWER.model;
        const dbId = bimObjectInfo.dbid || bimObjectInfo.dbId;
        if (model) return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectProperties({
            model: model,
            selection: [
                dbId
            ]
        }).then((res)=>{
            let properties = res[0].properties[0].properties;
            let found = properties.find((el)=>{
                let attrName = el.attributeName.toLowerCase();
                let displayName = el.displayName.toLowerCase();
                return attrName === value || displayName === value;
            });
            if (found) return found.displayValue;
            else return "-";
        }).catch((err)=>{
            console.error(err);
        });
        else return "-";
    }
    async createAttribute(nodeId, categoryName, attributeName) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let category;
        category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(realNode, categoryName);
        if (typeof category === "undefined") category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(realNode, categoryName);
        let attr = {
            label: attributeName,
            value: "-"
        };
        if (realNode.getType().get() === (0, _constants.BIM_OBJECT_TYPE)) attr.value = await this.getBimObjectAttribute(realNode.info.get(), attributeName);
        await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(realNode, category, attr.label, attr.value);
    }
    async updateAttributeValue(nodeId, categoryName, attributeName, attributeValue) {
        let attr = await this.getOrCreateAttribute(nodeId, categoryName, attributeName);
        if (attr && attr.value) attr.value.set(attributeValue);
    }
    getBimObjects(nodeId) {
    // console.log(SpinalGraphService.getInfo(nodeId));
    // return SpinalGraphService.findNodes(nodeId,)
    }
    async getOrCreateAttribute(nodeId, categoryName, attributeName) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (realNode) {
            let category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(realNode, categoryName);
            if (typeof category === "undefined") category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(realNode, categoryName);
            let attributes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, categoryName);
            let attr = attributes.find((el)=>{
                return el.label.get() === attributeName;
            });
            if (attr) return attr;
            await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(realNode, category, attributeName, "-");
            attributes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, categoryName);
            return attributes.find((el)=>{
                return el.label.get() === attributeName;
            });
        }
    }
    getAllGroupContext(type) {
        // return Promise.all([SpinalGraphService.getContextWithType(
        //     groupService.constants.ROOMS_GROUP_CONTEXT),
        //   SpinalGraphService.getContextWithType(
        //     groupService.constants.EQUIPMENTS_GROUP_CONTEXT),
        //   SpinalGraphService.getContextWithType(
        //     groupService.constants.ENDPOINTS_GROUP_CONTEXT)
        // ]).then(values => {
        //   let contexts = values.flat();
        //   let promises = contexts.map(async context => {
        //     let res = context.info.get();
        //     res["category"] = await this.getCategory(res.id, res
        //       .type);
        //     return res;
        //   })
        //   return Promise.all(promises);
        // })
        // console.log("service type", type);
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(type).then((contexts)=>{
            const promises = contexts.map(async (context)=>{
                context["category"] = await this.getCategory(context.id);
                return context;
            });
            return Promise.all(promises);
        });
    }
    async getCategory(contextId) {
        // let relationName = groupService.constants
        //   .CONTEXT_TO_CATEGORY_RELATION;
        // return SpinalGraphService.getChildren(contextId, [relationName]).then(
        //   children => {
        //     let promises = children.map(async child => {
        //       let info = child.get();
        //       info["groups"] = await this.getGroup(child.id, child
        //         .type);
        //       return info;
        //     })
        //     return Promise.all(promises);
        //   })
        const categories = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(contextId);
        const promises = categories.map(async (category)=>{
            let info = category.get();
            info["groups"] = await this.getGroup(category.id);
            return info;
        });
        return Promise.all(promises);
    }
    async getGroup(categoryId) {
        // let relationName = groupService.constants.CATEGORY_TO_GROUP_RELATION;
        // return SpinalGraphService.getChildren(categoryId, [relationName])
        //   .then(
        //     children => {
        //       return children.map(el => el.get());
        //     })
        const groups = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(categoryId);
        return groups.map((el)=>el.get());
    }
    linkItem(contextId, parentId, itemId) {
        // groupService.linkElementToGroup(parentId, itemId, contextId)
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, parentId, itemId);
    }
}
exports.default = SpinalAttributeService;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Ny6":[function(require,module,exports) {
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

},{"44f946b368e03b14":"9n7zp","3c0117970d993dce":"eV0id"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"e8hB8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class SpinalConfigurationService {
    constructor(){
        this.CONTEXT_NAME = "NomenclatureConfiguration";
        this.CONFIGURATION_PROFIL_TYPE = "AttributeConfiguration";
        this.ATTRIBUTE_TYPE = "configurationAttribute";
    }
    async createOrGetContext() {
        const context = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).createGroupContext(this.CONTEXT_NAME, this.CONFIGURATION_PROFIL_TYPE);
        return context;
    }
    async createCategory(categoryName, iconName) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addCategory(contextId, categoryName, iconName);
    }
    async createGroup(categoryId, groupName, groupColor) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addGroup(contextId, categoryId, groupName, groupColor);
    }
    async createConfiguration(groupId, configurationName, configurationCategories = []) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        const configurationNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
            name: configurationName,
            type: this.CONFIGURATION_PROFIL_TYPE
        }, new Model({
            name: configurationName,
            categories: configurationCategories
        }));
        await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, groupId, configurationNodeId);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationNodeId);
    }
    setAsCurrentConfiguration(nodeId) {
        this.createOrGetContext().then((context)=>{
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            if (realNode) {
                if (context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
                context.info.add_attr({
                    currentConfiguration: new Ptr(realNode)
                });
            }
        });
    }
    async deleteCurrentConf() {
        const context = await this.createOrGetContext();
        if (context && context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
    }
    getCurrentConfiguration() {
        return this.createOrGetContext().then((context)=>{
            let confPtr = context.info.currentConfiguration;
            if (typeof confPtr !== "undefined") return new Promise((resolve)=>{
                confPtr.load((realNode)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
                    return realNode.getElement().then((el)=>{
                        let element = el.get();
                        element["id"] = realNode.info.id.get();
                        resolve(element);
                    });
                });
            });
            return {
                name: "",
                categories: []
            };
        });
    }
    editConfiguration(configurationId, configurationElement) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationId);
        if (realNode) realNode.getElement().then((element)=>{
            element.set(configurationElement);
        });
    }
    async getConfigurationById(configId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configId);
        if (realNode) {
            const elementModel = await realNode.getElement();
            if (elementModel) {
                let element = elementModel.get();
                element["id"] = configId;
                return element;
            }
        }
    }
    async getCategories() {
        const context = await this.createOrGetContext();
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(context.info.id.get());
    }
    getGroups(nodeId) {
        // const context = await this.createOrGetContext();
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(nodeId);
    }
    getConfigurations(groupId) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getElementsLinkedToGroup(groupId);
    }
    isGroup(type) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
    }
    isCategory(type) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type);
    }
    async getElementGroup(id) {
        const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(id, []);
        return parents[0];
    }
    async getTree(info) {
        const obj = {
            categoryId: undefined,
            groupId: undefined,
            configId: undefined
        };
        if (this.isCategory(info.type)) obj.categoryId = info.id;
        else if (this.isGroup(info.type)) {
            const category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(info.id);
            if (category) obj.categoryId = category.id.get();
            obj.groupId = info.id;
        } else if (info.type === this.CONFIGURATION_PROFIL_TYPE) {
            obj.configId = info.id;
            const group = await this.getElementGroup(info.id);
            if (group) {
                obj.groupId = group.id.get();
                const category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(group.id.get());
                if (category) obj.categoryId = category.id.get();
            }
        }
        return obj;
    }
}
exports.default = SpinalConfigurationService;

},{"spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2WEY":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.data ? _c("div", {
        staticClass: "content",
        on: {
            "mouseover": _vm.mouseIsOver,
            "mouseleave": _vm.mouseOutOver
        }
    }, [
        _c("div", {
            ref: "display",
            staticClass: "valueDiv",
            class: {
                "contentEditable": _vm.editable
            },
            attrs: {
                "contenteditable": _vm.editable
            },
            on: {
                "input": _vm.changeValue
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.data.displayValue) + "\n  ")
        ]),
        _vm._v(" "),
        _vm.displayBtn() ? _c("md-button", {
            staticClass: "contentIcon md-icon-button md-dense",
            on: {
                "click": _vm.findValueInMaquette
            }
        }, [
            _c("md-tooltip", [
                _vm._v("find value in maquette")
            ]),
            _vm._v(" "),
            _c("md-icon", [
                _vm._v("my_location")
            ])
        ], 1) : _vm._e()
    ], 1) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eak5D":[function() {},{}],"bRqFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezHmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("354c2ab1c1b74d04");
    if (script.__esModule) script = script.default;
    script.render = require("bd39819a9d7f1444").render;
    script.staticRenderFns = require("bd39819a9d7f1444").staticRenderFns;
    script._scopeId = "data-v-bf4f22";
    script.__cssModules = require("ebaac81af665f0d").default;
    require("197d202768bc4a8").default(script);
    script.__scopeId = "data-v-bf4f22";
    script.__file = "createAttribute.vue";
};
initialize();
exports.default = script;

},{"354c2ab1c1b74d04":"ckTpg","bd39819a9d7f1444":"vKL5O","ebaac81af665f0d":"4vQdI","197d202768bc4a8":"iRsFe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ckTpg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _services = require("../../../../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var scriptExports = {
    name: "createAttributeTooltip",
    props: {
        show: {
            default: false
        },
        itemFiltered: {
            required: true
        }
    },
    data () {
        return {
            categoryName: "",
            attributeName: ""
        };
    },
    methods: {
        open () {
            this.$emit("open");
        },
        Validate () {
            if (this.itemFiltered.length > 0) {
                let promises = this.itemFiltered.map((el)=>{
                    return (0, _servicesDefault.default).createAttribute(el.id, this.categoryName, this.attributeName);
                });
                return Promise.all(promises).then(()=>{
                    this.$emit("validate");
                });
            } else alert("select at least one item !");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../../../services":"R5DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vKL5O":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-popover", {
        attrs: {
            "trigger": "manual",
            "open": _vm.show,
            "auto-hide": false,
            "offset": "16"
        }
    }, [
        _c("md-button", {
            staticClass: "md-elevation-4 md-dense",
            staticStyle: {
                "background-color": "#448aff"
            },
            on: {
                "click": _vm.open
            }
        }, [
            _c("md-icon", [
                _vm._v("add")
            ]),
            _vm._v("\n    \xa0\n    Add attribute\n  ")
        ], 1),
        _vm._v(" "),
        _c("template", {
            slot: "popover"
        }, [
            _c("div", {
                staticClass: "popoverContainer"
            }, [
                _c("div", {
                    staticClass: "_popoverContent"
                }, [
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("label", [
                            _vm._v("Category name")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.categoryName,
                                callback: function($$v) {
                                    _vm.categoryName = $$v;
                                },
                                expression: "categoryName"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("label", [
                            _vm._v("Label Name")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.attributeName,
                                callback: function($$v) {
                                    _vm.attributeName = $$v;
                                },
                                expression: "attributeName"
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "_popoverBtn"
                }, [
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": _vm.open
                        }
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": _vm.Validate
                        }
                    }, [
                        _vm._v("OK")
                    ])
                ])
            ])
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4vQdI":[function() {},{}],"iRsFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXE3D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b7cf880fc00e5d6c");
    if (script.__esModule) script = script.default;
    script.render = require("c18d7050fdad2197").render;
    script.staticRenderFns = require("c18d7050fdad2197").staticRenderFns;
    script._scopeId = "data-v-23f05e";
    require("56a64ba58024bdd").default(script);
    script.__scopeId = "data-v-23f05e";
    script.__file = "standard-buttons.vue";
};
initialize();
exports.default = script;

},{"b7cf880fc00e5d6c":"5Z20W","c18d7050fdad2197":"ivMuD","56a64ba58024bdd":"d1a9f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Z20W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventsJs = require("../../../../../js/events/events.js");
var _eventsJsDefault = parcelHelpers.interopDefault(_eventsJs);
var scriptExports = {
    name: "standardButton",
    props: {
        itemsSelected: {}
    },
    data () {
        this.buttons = [
            {
                name: "isolate",
                icon: "settings_overscan",
                action: this.isolate
            },
            {
                name: "select BIM Objects",
                icon: "devices",
                action: this.select
            },
            {
                name: "zoom",
                icon: "zoom_in",
                action: this.zoom
            },
            {
                name: "refresh",
                icon: "refresh",
                action: this.refresh
            }
        ];
        return {};
    },
    methods: {
        select () {
            const ids = this.itemsSelected.map((el)=>el.id);
            if (ids.length > 0) (0, _eventsJsDefault.default).$emit("select", ids);
            else alert("no item selected");
        },
        isolate () {
            const ids = this.itemsSelected.map((el)=>el.id);
            if (ids.length > 0) (0, _eventsJsDefault.default).$emit("isolate", ids);
            else alert("no item selected");
        },
        zoom () {
            const ids = this.itemsSelected.map((el)=>el.id);
            if (ids.length > 0) (0, _eventsJsDefault.default).$emit("fitToView", ids);
            else alert("no item selected");
        },
        refresh () {
            this.$emit("refresh");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../../../js/events/events.js":"bDoQ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivMuD":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", _vm._l(_vm.buttons, function(btn, index) {
        return _c("md-button", {
            key: index,
            staticClass: "md-icon-button md-primary",
            on: {
                "click": btn.action
            }
        }, [
            _c("md-tooltip", [
                _vm._v(_vm._s(btn.name))
            ]),
            _vm._v(" "),
            _c("md-icon", [
                _vm._v(_vm._s(btn.icon))
            ])
        ], 1);
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"d1a9f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOsSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("35b00ff04f694807");
    if (script.__esModule) script = script.default;
    script.render = require("9e463d5ccd9399af").render;
    script.staticRenderFns = require("9e463d5ccd9399af").staticRenderFns;
    script._scopeId = "data-v-6a7c75";
    script.__cssModules = require("91f9b8a294f04f74").default;
    require("7f68fa221d68432a").default(script);
    script.__scopeId = "data-v-6a7c75";
    script.__file = "fabs.vue";
};
initialize();
exports.default = script;

},{"35b00ff04f694807":"cOkEJ","9e463d5ccd9399af":"kLMJS","91f9b8a294f04f74":"iX8y6","7f68fa221d68432a":"2DpTh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOkEJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _changeColVue = require("../tooltips/changeCol.vue");
var _changeColVueDefault = parcelHelpers.interopDefault(_changeColVue);
var scriptExports = {
    name: "fabComponent",
    components: {
        "change-col-value": (0, _changeColVueDefault.default)
    },
    props: {
        editMode: {},
        itemsSelected: {},
        headerDisplayed: {}
    },
    data () {
        this.buttons = [
            {
                icon: "build",
                text: "Classify in group",
                event: "generateGroup"
            },
            {
                icon: "settings_applications",
                text: "Configuration",
                event: "configure",
                action: this.OpenParamsDialog
            },
            {
                icon: "link",
                text: "Link to group",
                event: "link",
                action: this.LinkItem
            },
            {
                icon: "edit",
                text: "Active edit mode",
                event: "edit",
                action: this.ActiveEditMode
            }
        ];
        return {};
    },
    methods: {
        sendEvent (name) {
            this.$emit(name);
        },
        setValueToColumn (res) {
            this.$emit("setToColumn", res);
        },
        validateOrCancel (res) {
            this.$emit("valid", res);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../tooltips/changeCol.vue":"j3glG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3glG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("29feb0d96d736530");
    if (script.__esModule) script = script.default;
    script.render = require("b1c1aeec10e32e99").render;
    script.staticRenderFns = require("b1c1aeec10e32e99").staticRenderFns;
    script._scopeId = "data-v-b5bf2e";
    script.__cssModules = require("6aca9b7c2a62fe8a").default;
    require("9e9b70229b39aa2").default(script);
    script.__scopeId = "data-v-b5bf2e";
    script.__file = "changeCol.vue";
};
initialize();
exports.default = script;

},{"29feb0d96d736530":"4lsRr","b1c1aeec10e32e99":"gShre","6aca9b7c2a62fe8a":"5jGOy","9e9b70229b39aa2":"l7iVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lsRr":[function(require,module,exports) {
// import attributeService from "../../../../services";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "createAttributeTooltip",
    props: {
        columns: {},
        itemsSelected: {}
    },
    data () {
        return {
            columnSelected: "",
            columnsFiltered: [],
            useMaquetteValue: false,
            pageOnly: true,
            value: ""
        };
    },
    mounted () {
        this.columnsFiltered = this.columns.filter((el)=>{
            const hasNoCategory = typeof el.category !== "undefined";
            const hasNoLabel = typeof el.label !== "undefined";
            return hasNoCategory && hasNoLabel;
        });
    },
    methods: {
        Validate () {
            if (this.itemsSelected && (this.value.trim().length > 0 || this.useMaquetteValue)) {
                const value = this.$emit("setValueToColumn", {
                    value: this.value.trim(),
                    column: this.columnSelected,
                    pageOnly: this.pageOnly,
                    useMaquetteValue: this.useMaquetteValue
                });
            } else alert("select at least one item, select value !");
        }
    },
    watch: {
        useMaquetteValue () {
            if (this.useMaquetteValue) this.value = "";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gShre":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-popover", {
        attrs: {
            "auto-hide": false,
            "offset": "16"
        }
    }, [
        _c("md-button", {
            staticClass: "md-fab md-mini md-plain",
            staticStyle: {
                "background-color": "#f39508"
            },
            attrs: {
                "title": "edit column value"
            }
        }, [
            _c("md-icon", [
                _vm._v("view_column")
            ])
        ], 1),
        _vm._v(" "),
        _c("template", {
            slot: "popover"
        }, [
            _c("div", {
                staticClass: "popoverContainer"
            }, [
                _c("div", {
                    staticClass: "_popoverContent"
                }, [
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("md-select", {
                            attrs: {
                                "placeholder": "Select Column",
                                "name": "columns",
                                "id": "columns"
                            },
                            model: {
                                value: _vm.columnSelected,
                                callback: function($$v) {
                                    _vm.columnSelected = $$v;
                                },
                                expression: "columnSelected"
                            }
                        }, [
                            !_vm.columnsFiltered || _vm.columnsFiltered.length === 0 ? _c("md-option", {
                                attrs: {
                                    "disabled": ""
                                }
                            }, [
                                _vm._v("No column")
                            ]) : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.columnsFiltered, function(head, index) {
                                return _c("md-option", {
                                    key: index,
                                    attrs: {
                                        "value": head.category + "/" + head.label
                                    }
                                }, [
                                    _vm._v("\n              " + _vm._s(head.category + " / " + head.label) + "\n            ")
                                ]);
                            })
                        ], 2)
                    ], 1),
                    _vm._v(" "),
                    _c("md-checkbox", {
                        staticClass: "md-primary",
                        model: {
                            value: _vm.useMaquetteValue,
                            callback: function($$v) {
                                _vm.useMaquetteValue = $$v;
                            },
                            expression: "useMaquetteValue"
                        }
                    }, [
                        _vm._v("Import from BIM value")
                    ]),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("label", [
                            _vm._v("Value")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "disabled": _vm.useMaquetteValue || !_vm.columnSelected || _vm.columnSelected.trim().length === 0
                            },
                            model: {
                                value: _vm.value,
                                callback: function($$v) {
                                    _vm.value = $$v;
                                },
                                expression: "value"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "tooltip-content pageSelect"
                    }, [
                        _c("md-radio", {
                            staticClass: "md-primary",
                            attrs: {
                                "value": true
                            },
                            model: {
                                value: _vm.pageOnly,
                                callback: function($$v) {
                                    _vm.pageOnly = $$v;
                                },
                                expression: "pageOnly"
                            }
                        }, [
                            _vm._v("This page only")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            staticClass: "md-primary",
                            attrs: {
                                "value": false
                            },
                            model: {
                                value: _vm.pageOnly,
                                callback: function($$v) {
                                    _vm.pageOnly = $$v;
                                },
                                expression: "pageOnly"
                            }
                        }, [
                            _vm._v("All page")
                        ])
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "_popoverBtn"
                }, [
                    _c("a", {
                        directives: [
                            {
                                name: "close-popover",
                                rawName: "v-close-popover"
                            }
                        ],
                        staticClass: "btn"
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("a", {
                        directives: [
                            {
                                name: "close-popover",
                                rawName: "v-close-popover"
                            }
                        ],
                        staticClass: "btn",
                        on: {
                            "click": _vm.Validate
                        }
                    }, [
                        _vm._v("OK")
                    ])
                ])
            ])
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5jGOy":[function() {},{}],"l7iVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLMJS":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "fabs"
    }, [
        !_vm.editMode ? _c("md-speed-dial", {
            attrs: {
                "md-direction": "top",
                "md-event": "click"
            }
        }, [
            _c("md-speed-dial-target", {
                staticClass: "md-fab md-mini md-primary"
            }, [
                _c("md-icon", {
                    staticClass: "md-morph-initial"
                }, [
                    _vm._v("menu")
                ]),
                _vm._v(" "),
                _c("md-icon", {
                    staticClass: "md-morph-final"
                }, [
                    _vm._v("menu_open")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-speed-dial-content", {
                staticClass: "mdSpeedDialBtn"
            }, _vm._l(_vm.buttons, function(btn, index) {
                return _c("md-button", {
                    key: index,
                    staticClass: "md-primary md-dense",
                    on: {
                        "click": function($event) {
                            return _vm.sendEvent(btn.event);
                        }
                    }
                }, [
                    _c("md-icon", [
                        _vm._v(_vm._s(btn.icon))
                    ]),
                    _vm._v("\n        \xa0\n        " + _vm._s(btn.text) + "\n      ")
                ], 1);
            }), 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.editMode ? _c("div", {
            staticClass: "editModeBtn"
        }, [
            _c("md-button", {
                staticClass: "md-fab md-mini md-plain",
                attrs: {
                    "title": "Cancel modification"
                },
                on: {
                    "click": function($event) {
                        return _vm.validateOrCancel(false);
                    }
                }
            }, [
                _c("md-icon", [
                    _vm._v("clear")
                ])
            ], 1),
            _vm._v(" "),
            _c("change-col-value", {
                attrs: {
                    "columns": _vm.headerDisplayed,
                    "itemsSelected": _vm.itemsSelected
                },
                on: {
                    "setValueToColumn": _vm.setValueToColumn
                }
            }),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-fab md-mini md-primary",
                attrs: {
                    "title": "Validate modification"
                },
                on: {
                    "click": function($event) {
                        return _vm.validateOrCancel(true);
                    }
                }
            }, [
                _c("md-icon", [
                    _vm._v("done")
                ])
            ], 1)
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iX8y6":[function() {},{}],"2DpTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dHhF":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_tableContent",
        attrs: {
            "data-app": ""
        }
    }, [
        _c("div", {
            staticClass: "buttonFab"
        }, [
            _c("fabs-component", {
                attrs: {
                    "editMode": _vm.editMode,
                    "itemsSelected": _vm.itemsSelected,
                    "headerDisplayed": _vm.headerDisplayed
                },
                on: {
                    "configure": _vm.OpenParamsDialog,
                    "link": _vm.LinkItem,
                    "edit": _vm.ActiveEditMode,
                    "valid": _vm.validateOrCancel,
                    "setToColumn": _vm.setValueToColumn,
                    "generateGroup": _vm.generateGroup
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "mdToolbar",
            attrs: {
                "md-elevation": "0"
            }
        }, [
            _c("div", {
                staticClass: "toolbar-start"
            }, [
                _c("standard-buttons", {
                    attrs: {
                        "itemsSelected": _vm.itemsSelected
                    },
                    on: {
                        "refresh": _vm.refresh
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "toolbar-end"
            }, [
                _c("div", {
                    staticClass: "searchDiv"
                }, [
                    _c("md-field", [
                        _c("md-select", {
                            attrs: {
                                "name": "searchBy",
                                "id": "searchBy"
                            },
                            model: {
                                value: _vm.searchBy,
                                callback: function($$v) {
                                    _vm.searchBy = $$v;
                                },
                                expression: "searchBy"
                            }
                        }, [
                            _c("md-option", {
                                attrs: {
                                    "value": 0
                                }
                            }, [
                                _vm._v("Search by name")
                            ]),
                            _vm._v(" "),
                            _c("md-option", {
                                attrs: {
                                    "value": 1
                                }
                            }, [
                                _vm._v("Search by value")
                            ])
                        ], 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("md-field", [
                    _c("input", {
                        directives: [
                            {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.searchValue,
                                expression: "searchValue"
                            }
                        ],
                        staticClass: "md-input",
                        attrs: {
                            "placeholder": "Search..."
                        },
                        domProps: {
                            "value": _vm.searchValue
                        },
                        on: {
                            "input": function($event) {
                                if ($event.target.composing) return;
                                _vm.searchValue = $event.target.value;
                            }
                        }
                    }),
                    _vm._v(" "),
                    _c("md-icon", [
                        _vm._v("search")
                    ])
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "_tableContainer"
        }, [
            _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "headers": _vm.headerDisplayed,
                    "items": _vm.searched,
                    "rows-per-page-items": _vm.rowsPerPageText,
                    "pagination": _vm.pagination,
                    "dark": ""
                },
                on: {
                    "update:pagination": function($event) {
                        _vm.pagination = $event;
                    }
                },
                scopedSlots: _vm._u([
                    {
                        key: "headers",
                        fn: function(props) {
                            return [
                                _c("tr", [
                                    _c("th", {
                                        staticStyle: {
                                            "text-align": "left"
                                        }
                                    }, [
                                        _c("md-menu", {
                                            staticClass: "selectionMenu",
                                            attrs: {
                                                "md-size": "small"
                                            }
                                        }, [
                                            _c("md-button", {
                                                attrs: {
                                                    "md-menu-trigger": ""
                                                }
                                            }, [
                                                _c("md-icon", [
                                                    _vm._v("menu")
                                                ]),
                                                _vm._v("\n                \xa0 Select\n              ")
                                            ], 1),
                                            _vm._v(" "),
                                            _c("md-menu-content", _vm._l(_vm.checkboxSelects, function(m, index) {
                                                return _c("md-menu-item", {
                                                    key: index,
                                                    on: {
                                                        "click": m.action
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(m.text) + "\n                ")
                                                ]);
                                            }), 1)
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _vm._l(props.headers, function(head, index) {
                                        return _c("th", {
                                            key: index,
                                            staticStyle: {
                                                "text-align": "left"
                                            }
                                        }, [
                                            _vm._v("\n            " + _vm._s(head.text) + "\n          ")
                                        ]);
                                    }),
                                    _vm._v(" "),
                                    _c("th")
                                ], 2)
                            ];
                        }
                    },
                    {
                        key: "items",
                        fn: function(props) {
                            return [
                                _c("td", [
                                    _c("v-checkbox", {
                                        attrs: {
                                            "primary": "",
                                            "hide-details": ""
                                        },
                                        on: {
                                            "change": function($event) {
                                                return _vm.checkItem(props.item);
                                            }
                                        },
                                        model: {
                                            value: props.item.selected,
                                            callback: function($$v) {
                                                _vm.$set(props.item, "selected", $$v);
                                            },
                                            expression: "props.item.selected"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("td", {
                                    staticClass: "nameCell",
                                    on: {
                                        "click": function($event) {
                                            return _vm.selectItemInViewer(props.item);
                                        }
                                    }
                                }, [
                                    _c("md-tooltip", {
                                        attrs: {
                                            "md-direction": "top"
                                        }
                                    }, [
                                        _vm._v(_vm._s(props.item.name))
                                    ]),
                                    _vm._v("\n          " + _vm._s(props.item.name) + "\n        ")
                                ], 1),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.type))
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.header, function(attribute, index) {
                                    return _c("td", {
                                        key: index,
                                        staticClass: "text-xs-center"
                                    }, [
                                        _c("table-content-component", {
                                            ref: "editableComponent",
                                            refInFor: true,
                                            attrs: {
                                                "editable": _vm.editMode,
                                                "item": props.item,
                                                "attribute": attribute,
                                                "itemsMap": _vm.itemsMap
                                            },
                                            on: {
                                                "setValue": _vm.refresh,
                                                "findValueInMaquette": _vm.findValueInMaquette
                                            }
                                        })
                                    ], 1);
                                }),
                                _vm._v(" "),
                                _c("td", [
                                    _c("md-button", {
                                        staticClass: "md-icon-button",
                                        on: {
                                            "click": function($event) {
                                                return _vm.openAttributesPanel(props.item);
                                            }
                                        }
                                    }, [
                                        _c("md-tooltip", [
                                            _vm._v("Open Properties Panel")
                                        ]),
                                        _vm._v(" "),
                                        _c("md-icon", [
                                            _vm._v("tune")
                                        ])
                                    ], 1)
                                ], 1)
                            ];
                        }
                    }
                ])
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"k2anK":[function() {},{}],"fFad1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ILQE":[function(require,module,exports) {
var global = arguments[3];
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else b();
})(this, function() {
    "use strict";
    function b(a, b) {
        return "undefined" == typeof b ? b = {
            autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([
            "\uFEFF",
            a
        ], {
            type: a.type
        }) : a;
    }
    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error("could not download file");
        }, d.send();
    }
    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send();
        } catch (a) {}
        return 200 <= b.status && 299 >= b.status;
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
            i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function() {
            e(j);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
        else if (d(f)) c(f, g, h);
        else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function() {
                e(i);
            });
        }
    } : function(b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader;
            k.onloadend = function() {
                var a = k.result;
                a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
        } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                l.revokeObjectURL(m);
            }, 4E4);
        }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
});

},{}],"dfh7s":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.itemDisplayed ? _c("div", {
        staticClass: "tablePage"
    }, [
        _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "_mdContainer"
        }, [
            _c("div", {
                staticClass: "header"
            }, [
                _c("div", {
                    staticClass: "backBtn"
                }, [
                    _c("md-button", {
                        on: {
                            "click": _vm.back
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("arrow_back")
                        ]),
                        _vm._v("\n          \xa0\n          BACK\n        ")
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "exportImport"
                }, [
                    _c("md-button", {
                        staticClass: "md-primary attr_btn",
                        on: {
                            "click": _vm.importExcel
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("get_app")
                        ]),
                        _vm._v("\n          \xa0\n          Import\n        ")
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary attr_btn",
                        on: {
                            "click": _vm.exportData
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("publish")
                        ]),
                        _vm._v("\n          \xa0\n          Export\n        ")
                    ], 1)
                ], 1)
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "tableContent"
            }, [
                _c("table-component", {
                    ref: "tableContent",
                    attrs: {
                        "tableContent": _vm.tableContent,
                        "header": _vm.header,
                        "typeSelected": _vm.typeSelected
                    },
                    on: {
                        "refresh": _vm.createAttribute
                    }
                })
            ], 1)
        ]) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.loading ? _c("div", {
            staticClass: "loading"
        }, [
            _c("md-progress-spinner", {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm._e()
    ]) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gv4Db":[function() {},{}],"7CO8q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYU09":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "mdContainer md-scrollbar"
    }, [
        _vm.data && _vm.appState === _vm.STATES.normal && _vm.visiblePage === _vm.pages.types ? _c("type-lst-component", {
            attrs: {
                "types": _vm.data.types
            },
            on: {
                "select": _vm.selectType
            }
        }) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.normal && _vm.typeSelected && _vm.visiblePage === _vm.pages.table ? _c("table-page", {
            attrs: {
                "itemDisplayed": _vm.itemDisplayed,
                "attributesDisplayed": _vm.attributesDisplayed,
                "typeSelected": _vm.typeSelected
            },
            on: {
                "back": _vm.goBack,
                "refresh": _vm.validateItem,
                "openExportDialog": _vm.openExportDialog
            }
        }) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.loading ? _c("div", {
            staticClass: "loading"
        }, [
            _c("md-progress-spinner", {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lSuaN":[function() {},{}],"b5tX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emNIT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d1542aa534f9e545");
    if (script.__esModule) script = script.default;
    script.render = require("1e005ebd2e772239").render;
    script.staticRenderFns = require("1e005ebd2e772239").staticRenderFns;
    script._scopeId = "data-v-db4c58";
    script.__cssModules = require("759fd34271367772").default;
    require("bf12535373e5f08a").default(script);
    script.__scopeId = "data-v-db4c58";
    script.__file = "configurationPanel.vue";
};
initialize();
exports.default = script;

},{"d1542aa534f9e545":"bmgF3","1e005ebd2e772239":"5bGTK","759fd34271367772":"7gxGp","bf12535373e5f08a":"yWEKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmgF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configurationCrudVue = require("./components/configuration-crud.vue");
var _configurationCrudVueDefault = parcelHelpers.interopDefault(_configurationCrudVue);
var _currentConfigurationVue = require("./components/currentConfiguration.vue");
var _currentConfigurationVueDefault = parcelHelpers.interopDefault(_currentConfigurationVue);
var _services = require("../../../services");
var scriptExports = {
    name: "configurationPanel",
    components: {
        "configuration-template": (0, _configurationCrudVueDefault.default),
        "current-configuration-template": (0, _currentConfigurationVueDefault.default)
    },
    data () {
        return {
            tabDisplayed: 1,
            currentConfiguration: undefined,
            item: {
                categorySelected: "",
                categories: [],
                groupSelected: "",
                groups: [],
                configurationSelected: "",
                configurations: []
            },
            tempData: {}
        };
    },
    mounted () {},
    methods: {
        opened (params) {
            this.getCurrentConfiguration();
            if (params && Object.keys(params).length > 0) {
                this.tempData = params;
                this.tabDisplayed = 1;
            }
        // if (params.hasOwnProperty("categoryId")) {
        //   this.item.categorySelected = params.categoryId;
        //   this.tabDisplayed = 1;
        // }
        // if (params.hasOwnProperty("groupId")) {
        //   this.item.groupSelected = params.groupId;
        //   this.tabDisplayed = 1;
        // }
        // if (params.hasOwnProperty("configId")) {
        //   this.item.configurationSelected = params.configId;
        //   this.tabDisplayed = 1;
        // }
        },
        closed () {},
        changeTab (activeTab) {
            switch(activeTab){
                case "current-param-tab":
                    this.tabDisplayed = 0;
                    break;
                case "all-params-tab":
                    this.tabDisplayed = 1;
                    break;
            }
        },
        async getCurrentConfiguration () {
            const currentConf = await (0, _services.spinalConfigurationService).getCurrentConfiguration();
            // console.log("currentConf", currentConf);
            this.currentConfiguration = currentConf.id;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./components/configuration-crud.vue":"iQ3g5","./components/currentConfiguration.vue":"iNjqX","../../../services":"R5DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQ3g5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3d270fd69f0a6fa1");
    if (script.__esModule) script = script.default;
    script.render = require("6cac901d656acdcd").render;
    script.staticRenderFns = require("6cac901d656acdcd").staticRenderFns;
    script._scopeId = "data-v-08e01e";
    script.__cssModules = require("4381e5fd30071113").default;
    require("fe0dea4d8906181c").default(script);
    script.__scopeId = "data-v-08e01e";
    script.__file = "configuration-crud.vue";
};
initialize();
exports.default = script;

},{"3d270fd69f0a6fa1":"Bv6Zs","6cac901d656acdcd":"8HnYp","4381e5fd30071113":"l6fSp","fe0dea4d8906181c":"7o298","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Bv6Zs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _services = require("../../../../services");
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
var _fileSaver = require("file-saver");
var _fileSaverDefault = parcelHelpers.interopDefault(_fileSaver);
var _mdSelectVue = require("./mdSelect.vue");
var _mdSelectVueDefault = parcelHelpers.interopDefault(_mdSelectVue);
var _createItemVue = require("./createItem.vue");
var _createItemVueDefault = parcelHelpers.interopDefault(_createItemVue);
var _configurationsVue = require("./configurations.vue");
var _configurationsVueDefault = parcelHelpers.interopDefault(_configurationsVue);
var scriptExports = {
    name: "configuration-template",
    props: {
        currentConfiguration: {},
        item: {},
        tempData: {}
    },
    components: {
        "create-item": (0, _createItemVueDefault.default),
        "select-item": (0, _mdSelectVueDefault.default),
        "configuration-component": (0, _configurationsVueDefault.default)
    },
    data () {
        return {};
    },
    async mounted () {
        const categories = await (0, _services.spinalConfigurationService).getCategories();
        this.item.categories = categories.map((el)=>el.get());
    },
    methods: {
        async createCategory (name) {
            const category = await (0, _services.spinalConfigurationService).createCategory(name, "add");
            if (category && category.info) {
                this.item.categories.push(category.info.get());
                this.selectCategory(category.getId().get());
            }
        },
        async createGroup (name) {
            const group = await (0, _services.spinalConfigurationService).createGroup(this.item.categorySelected, name, "#000000");
            if (group && group.info) {
                this.item.groups.push(group.info.get());
                this.selectGroup(group.getId().get());
            }
        },
        async createConfiguration (name) {
            const configuration = await (0, _services.spinalConfigurationService).createConfiguration(this.item.groupSelected, name);
            if (configuration && configuration.info) {
                this.item.configurations.push(configuration.info.get());
                this.selectConfiguration(configuration.getId().get());
            }
        },
        async selectCategory (id) {
            if (typeof id !== "undefined") {
                this.item.categorySelected = id;
                const groups = await (0, _services.spinalConfigurationService).getGroups(id);
                this.item.groups = groups.map((el)=>el.get());
                // init group && configuration
                this.item.groupSelected = undefined;
                this.item.configurationSelected = undefined;
            // end
            }
        },
        async selectGroup (id) {
            if (typeof id !== "undefined") {
                this.item.groupSelected = id;
                const configurations = await (0, _services.spinalConfigurationService).getConfigurations(id);
                this.item.configurations = configurations.map((el)=>el.get());
                // init configuration
                this.item.configurationSelected = undefined;
            //end
            }
        },
        async selectConfiguration (id) {
            this.item.configurationSelected = id;
        },
        currentConf () {
            this.$emit("currentConf");
        },
        async exportFile () {
            // spinalPanelManagerService.openPanel("exportConfigurationDialog", {});
            const result = {
                data: []
            };
            if (this.item.configurationSelected) {
                const item = await this._formatConfiguration(this.item.configurationSelected, this.item.groupSelected, this.item.categorySelected);
                result.data.push(item);
            } else if (this.item.groupSelected) {
                const items = await this._getGroupsItems(this.item.groupSelected);
                result.data.push(...items);
            } else if (this.item.categorySelected) {
                let groupsItems = this.item.groups.map((group)=>{
                    return this._getGroupsItems(group.id);
                });
                let items = await Promise.all(groupsItems);
                items.forEach((el)=>{
                    result.data.push(...el);
                });
            }
            (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).export(result).then((buffer)=>{
                (0, _fileSaverDefault.default).saveAs(new Blob(buffer), `configurations_spinalcom.xlsx`);
            });
        },
        importFile () {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
            input.click();
            input.addEventListener("change", async (event)=>{
                const file = event.target.files[0];
                const dataJson = await (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).convertConfigurationFile(file);
                (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("importConfigurationDialog", dataJson);
            }, false);
        },
        async _formatConfiguration (configurationId, groupId, categoryId) {
            const data = {
                name: "",
                header: this._getExcelHeaders(),
                rows: []
            };
            const categoryFound = this.item.categories.find((el)=>el.id === categoryId);
            const groupFound = this.item.groups.find((el)=>el.id === groupId);
            const configFound = this.item.configurations.find((el)=>el.id === configurationId);
            const config = await (0, _services.spinalConfigurationService).getConfigurationById(configurationId);
            if (categoryFound && groupFound && configFound && config) {
                // data.name = `${categoryFound.name}|${groupFound.name}|${config.name}`;
                data.name = configFound.name;
                data.rows.push([
                    "Category : ",
                    categoryFound.name
                ]);
                data.rows.push([
                    "Group : ",
                    groupFound.name
                ]);
                data.rows.push([
                    "Configuration Profil : ",
                    configFound.name
                ]);
                data.rows.push([
                    ,
                    , 
                ]);
                data.rows.push([
                    ,
                    , 
                ]);
                data.rows.push([
                    "Attribute Category",
                    "Attribute Name"
                ]);
                config.categories.forEach((category)=>{
                    const res = category.attributes.map((attribute)=>{
                        // return {
                        //   name: attribute.name,
                        //   attrCategory: category.name,
                        //   ConfigProfil: configFound.name,
                        //   spinalCategory: categoryFound.name,
                        //   spinalGroup: groupFound.name
                        // };
                        return [
                            category.name,
                            attribute.name
                        ];
                    });
                    data.rows.push(...res);
                });
                return data;
            }
        },
        _getExcelHeaders (attributes) {
            const header = [];
            return header;
        },
        async _getGroupsItems (groupId) {
            let configurations = [];
            if (this.item.groupSelected === groupId) configurations = this.item.configurations;
            else configurations = await (0, _services.spinalConfigurationService).getConfigurations(groupId);
            const promises = configurations.map((configuration)=>{
                return this._formatConfiguration(configuration.id, groupId, this.item.categorySelected);
            });
            return Promise.all(promises);
        },
        Open (...res) {
        // console.log("res", res);
        }
    },
    watch: {
        async tempData () {
            if (this.tempData.hasOwnProperty("categoryId")) await this.selectCategory(this.tempData.categoryId);
            if (this.tempData.hasOwnProperty("groupId")) await this.selectGroup(this.tempData.groupId);
            if (this.tempData.hasOwnProperty("configId")) await this.selectConfiguration(this.tempData.configId);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","../../../../services":"R5DpR","spinal-env-viewer-plugin-excel-manager-service":"d1IEa","file-saver":"3ILQE","./mdSelect.vue":"iZvhi","./createItem.vue":"3Um17","./configurations.vue":"hMTaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZvhi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("85fb8afd2efd949a");
    if (script.__esModule) script = script.default;
    script.render = require("91a7cedff877e636").render;
    script.staticRenderFns = require("91a7cedff877e636").staticRenderFns;
    script._scopeId = "data-v-8e8f8a";
    script.__cssModules = require("879cb20adbe8aa93").default;
    require("9031c6b9ffe8c589").default(script);
    script.__scopeId = "data-v-8e8f8a";
    script.__file = "mdSelect.vue";
};
initialize();
exports.default = script;

},{"85fb8afd2efd949a":"hXZdX","91a7cedff877e636":"jXVdE","879cb20adbe8aa93":"6eUoq","9031c6b9ffe8c589":"b9hXM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXZdX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "select-template",
    props: {
        placeholder: {
            type: String
        },
        data: {},
        value: {}
    },
    data () {
        return {
            itemSelected: undefined
        };
    },
    methods: {
        selectItem (id) {
            if (id) this.$emit("select", id);
        }
    },
    watch: {
        value () {
            this.itemSelected = this.value;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXVdE":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "select-content"
    }, [
        _c("md-field", {
            staticClass: "select-field"
        }, [
            _c("md-select", {
                attrs: {
                    "name": "select-item",
                    "id": "select-item",
                    "placeholder": _vm.placeholder
                },
                on: {
                    "md-selected": _vm.selectItem
                },
                model: {
                    value: _vm.itemSelected,
                    callback: function($$v) {
                        _vm.itemSelected = $$v;
                    },
                    expression: "itemSelected"
                }
            }, [
                !_vm.data || _vm.data.length === 0 ? _c("md-option", {
                    attrs: {
                        "disabled": ""
                    }
                }, [
                    _vm._v("No Item found")
                ]) : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.data, function(item, index) {
                    return _c("md-option", {
                        key: index,
                        attrs: {
                            "value": item.id
                        }
                    }, [
                        _vm._v("\n        " + _vm._s(item.name) + "\n      ")
                    ]);
                })
            ], 2)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6eUoq":[function() {},{}],"b9hXM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Um17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("11ace521fb0ee850");
    if (script.__esModule) script = script.default;
    script.render = require("498570b1895ee12d").render;
    script.staticRenderFns = require("498570b1895ee12d").staticRenderFns;
    script._scopeId = "data-v-99bd0c";
    script.__cssModules = require("d7c5fef2f881600c").default;
    require("b483e929af4a6131").default(script);
    script.__scopeId = "data-v-99bd0c";
    script.__file = "createItem.vue";
};
initialize();
exports.default = script;

},{"11ace521fb0ee850":"d7fY1","498570b1895ee12d":"37MXr","d7c5fef2f881600c":"8MPca","b483e929af4a6131":"9JTPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7fY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "createItem",
    props: {
        title: {
            type: String
        },
        fieldText: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            name: "",
            show: false
        };
    },
    methods: {
        Validate (isValid) {
            this.show = false;
            if (isValid && this.name.trim().length > 0) // if (this.category) {
            //   // let varCategory = serviceDocumentation.
            //   this.$emit("add", { category: this.category, label: this.name });
            // } else {
            //   this.$emit("add", { category: this.name });
            // }
            this.$emit("create", this.name.trim());
            this.name = "";
        },
        OpenAttribute () {
            this.show = !this.show;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37MXr":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-popover", {
        attrs: {
            "auto-hide": false,
            "offset": "16",
            "open": _vm.show && !_vm.disabled
        }
    }, [
        _c("md-button", {
            staticClass: "md-dense md-raised md-primary",
            attrs: {
                "disabled": _vm.disabled
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.OpenAttribute.apply(null, arguments);
                }
            }
        }, [
            _c("md-tooltip", [
                _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("md-icon", [
                _vm._v(_vm._s(_vm.icon))
            ]),
            _vm._v("\n    " + _vm._s(_vm.title) + "\n  ")
        ], 1),
        _vm._v(" "),
        _c("template", {
            slot: "popover"
        }, [
            _c("div", {
                staticClass: "popoverContainer"
            }, [
                _c("div", {
                    staticClass: "_popoverContent"
                }, [
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("label", [
                            _vm._v(_vm._s(_vm.fieldText))
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.name,
                                callback: function($$v) {
                                    _vm.name = $$v;
                                },
                                expression: "name"
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "_popoverBtn"
                }, [
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": function($event) {
                                return _vm.Validate(false);
                            }
                        }
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": function($event) {
                                return _vm.Validate(true);
                            }
                        }
                    }, [
                        _vm._v("OK")
                    ])
                ])
            ])
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8MPca":[function() {},{}],"9JTPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMTaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d5d8f7a12e28663d");
    if (script.__esModule) script = script.default;
    script.render = require("514ed369a0239388").render;
    script.staticRenderFns = require("514ed369a0239388").staticRenderFns;
    script._scopeId = "data-v-c20ec9";
    script.__cssModules = require("fba86237fdccdcf9").default;
    require("a1215ad87363da8f").default(script);
    script.__scopeId = "data-v-c20ec9";
    script.__file = "configurations.vue";
};
initialize();
exports.default = script;

},{"d5d8f7a12e28663d":"jIYaz","514ed369a0239388":"f65Ck","fba86237fdccdcf9":"1p7ig","a1215ad87363da8f":"9rtmL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIYaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayListVue = require("./displayList.vue");
var _displayListVueDefault = parcelHelpers.interopDefault(_displayListVue);
var _addItemVue = require("../../attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var _services = require("../../../../services");
var _events = require("../../../../js/events/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var scriptExports = {
    name: "editConfiguration",
    components: {
        "display-list": (0, _displayListVueDefault.default),
        "menu-component": (0, _addItemVueDefault.default)
    },
    props: {
        configurationSelected: {
            type: String,
            default: ""
        },
        currentConfiguration: {}
    },
    data () {
        return {
            configurationData: {
                name: "",
                categories: []
            },
            editMode: false
        };
    },
    mounted () {
        this.getConfiguration();
    },
    methods: {
        async getConfiguration () {
            if (this.configurationSelected) this.configurationData = await (0, _services.spinalConfigurationService).getConfigurationById(this.configurationSelected);
            else this.configurationData = {
                name: "",
                categories: []
            };
        },
        activeEditMode () {
            this.editMode = true;
        },
        async setAsCurrentConf () {
            await (0, _services.spinalConfigurationService).setAsCurrentConfiguration(this.configurationSelected);
            this.$emit("getCurrentConf");
            this.refreshPanel();
        },
        async deleteAsCurrentConf () {
            await (0, _services.spinalConfigurationService).deleteCurrentConf();
            this.$emit("getCurrentConf");
            this.refreshPanel();
        },
        addAttributeCategory (res) {
            let found = this.configurationData.categories.find((el)=>el.name === res.category);
            if (!found) this.configurationData.categories.push({
                id: Date.now(),
                name: res.category,
                attributes: []
            });
        },
        addSubItem (res) {
            if (res.category && res.label) {
                let found = this.configurationData.categories.find((el)=>{
                    return el.name === res.category;
                });
                if (found) {
                    let attrFound = found.attributes.find((el)=>el.name === res.label);
                    if (typeof attrFound === "undefined") found.attributes.push({
                        show: true,
                        name: res.label,
                        id: Date.now()
                    });
                }
            }
        },
        removeItem (res) {
            if (typeof res.attr === "undefined") this.configurationData.categories = this.configurationData.categories.filter((el)=>{
                return el.id !== res.category.id;
            });
            else {
                let found = this.configurationData.categories.find((el)=>{
                    return el.id === res.category.id;
                });
                if (found) found.attributes = found.attributes.filter((el)=>el.id !== res.attr.id);
            }
        },
        cancel () {
            this.editMode = false;
            this.getConfiguration();
        },
        async save () {
            this.editMode = false;
            await (0, _services.spinalConfigurationService).editConfiguration(this.configurationSelected, this.configurationData);
            this.refreshPanel();
        },
        refreshPanel () {
            (0, _eventsDefault.default).$emit("refreshTable");
        }
    },
    watch: {
        configurationSelected: function() {
            this.getConfiguration();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./displayList.vue":"jXFsR","../../attributePanel/components/tooltips/addItem.vue":"iyIYD","../../../../services":"R5DpR","../../../../js/events/events":"bDoQ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXFsR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2662e4be98fa1f19");
    if (script.__esModule) script = script.default;
    script.render = require("89f0a79fa7ed865b").render;
    script.staticRenderFns = require("89f0a79fa7ed865b").staticRenderFns;
    script._scopeId = "data-v-d4927a";
    script.__cssModules = require("3af5efd7c45217a8").default;
    require("11e15826551e04e7").default(script);
    script.__scopeId = "data-v-d4927a";
    script.__file = "displayList.vue";
};
initialize();
exports.default = script;

},{"2662e4be98fa1f19":"5LiTu","89f0a79fa7ed865b":"9OEI4","3af5efd7c45217a8":"3HLal","11e15826551e04e7":"lqUwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LiTu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addItemVue = require("../../attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var scriptExports = {
    name: "displayListComponent",
    components: {
        "menu-component": (0, _addItemVueDefault.default)
    },
    props: {
        categories: {},
        message: {
            type: String,
            default: "No data found"
        },
        editMode: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        addAttributes (res) {
            this.$emit("add", res);
        },
        remove (category, isCategory, attribute) {
            let item = {
                category: category,
                attr: attribute
            };
            this.$emit("remove", item);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../attributePanel/components/tooltips/addItem.vue":"iyIYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyIYD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bb23fa20d6a6987b");
    if (script.__esModule) script = script.default;
    script.render = require("92ab28538916bce7").render;
    script.staticRenderFns = require("92ab28538916bce7").staticRenderFns;
    script._scopeId = "data-v-511560";
    script.__cssModules = require("6ba404904517acda").default;
    require("55b39925041223d8").default(script);
    script.__scopeId = "data-v-511560";
    script.__file = "addItem.vue";
};
initialize();
exports.default = script;

},{"bb23fa20d6a6987b":"3NRLw","92ab28538916bce7":"eWC2o","6ba404904517acda":"4XpA2","55b39925041223d8":"hpYwt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3NRLw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "CreateLabel",
    props: [
        "category"
    ],
    data () {
        return {
            name: "",
            show: false
        };
    },
    methods: {
        Validate (isValid) {
            this.show = false;
            if (isValid && this.name.trim().length > 0) {
                if (this.category) // let varCategory = serviceDocumentation.
                this.$emit("add", {
                    category: this.category,
                    label: this.name
                });
                else this.$emit("add", {
                    category: this.name
                });
            }
            this.name = "";
        },
        OpenAttribute () {
            this.show = !this.show;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWC2o":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-popover", {
        attrs: {
            "auto-hide": false,
            "offset": "16",
            "open": _vm.show
        }
    }, [
        !_vm.category ? _c("v-btn", {
            attrs: {
                "outline": "",
                "color": "#448aff",
                "title": "add category"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.OpenAttribute.apply(null, arguments);
                }
            }
        }, [
            _vm._v("Add category")
        ]) : _vm._e(),
        _vm._v(" "),
        _vm.category ? _c("v-btn", {
            attrs: {
                "title": "add label",
                "flat": "",
                "icon": "",
                "small": "",
                "color": "blue"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.OpenAttribute.apply(null, arguments);
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("add")
            ])
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("template", {
            slot: "popover"
        }, [
            _c("div", {
                staticClass: "popoverContainer"
            }, [
                _c("div", {
                    staticClass: "_popoverContent"
                }, [
                    _c("md-field", {
                        staticClass: "tooltip-content"
                    }, [
                        _c("label", [
                            _vm._v(_vm._s(_vm.category ? "Add attribute" : "Add category"))
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.name,
                                callback: function($$v) {
                                    _vm.name = $$v;
                                },
                                expression: "name"
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "_popoverBtn"
                }, [
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": function($event) {
                                return _vm.Validate(false);
                            }
                        }
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("a", {
                        staticClass: "btn",
                        on: {
                            "click": function($event) {
                                return _vm.Validate(true);
                            }
                        }
                    }, [
                        _vm._v("OK")
                    ])
                ])
            ])
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4XpA2":[function() {},{}],"hpYwt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OEI4":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "myListContainer md-scrollbar"
    }, [
        _vm.categories && _vm.categories.length > 0 ? _c("v-list", {
            staticClass: "listContainer",
            attrs: {
                "expand": "",
                "dark": "",
                "flat": ""
            }
        }, _vm._l(_vm.categories, function(item, index) {
            return _c("v-list-group", {
                key: index,
                attrs: {
                    "prepend-icon": "keyboard_arrow_down",
                    "append-icon": "",
                    "one-line": false,
                    "no-action": ""
                }
            }, [
                _c("v-list-tile", {
                    attrs: {
                        "slot": "activator"
                    },
                    slot: "activator"
                }, [
                    _c("v-list-tile-content", [
                        _c("v-list-tile-title", [
                            _vm._v(_vm._s(item.name))
                        ])
                    ], 1),
                    _vm._v(" "),
                    _vm.editMode ? _c("v-list-tile-action", [
                        _c("menu-component", {
                            attrs: {
                                "category": item.name
                            },
                            on: {
                                "add": _vm.addAttributes
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _vm.editMode ? _c("v-list-tile-action", [
                        _c("v-btn", {
                            attrs: {
                                "flat": "",
                                "icon": "",
                                "small": "",
                                "color": "red",
                                "title": "remove"
                            },
                            on: {
                                "click": function($event) {
                                    $event.stopPropagation();
                                    return _vm.remove(item, true);
                                }
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("remove_circle_outline")
                            ])
                        ], 1)
                    ], 1) : _vm._e()
                ], 1),
                _vm._v(" "),
                _vm._l(item.attributes, function(subItem, subIndex) {
                    return _c("v-list-tile", {
                        key: subIndex
                    }, [
                        _c("v-list-tile-action", [
                            _c("v-checkbox", {
                                attrs: {
                                    "disabled": !_vm.editMode,
                                    "color": "blue"
                                },
                                model: {
                                    value: subItem.show,
                                    callback: function($$v) {
                                        _vm.$set(subItem, "show", $$v);
                                    },
                                    expression: "subItem.show"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("v-list-tile-content", [
                            _c("v-list-tile-title", [
                                _vm._v(_vm._s(subItem.name))
                            ])
                        ], 1),
                        _vm._v(" "),
                        _vm.editMode ? _c("v-list-tile-action", [
                            _c("v-btn", {
                                attrs: {
                                    "icon": "",
                                    "flat": "",
                                    "small": "",
                                    "color": "red",
                                    "title": "remove"
                                },
                                on: {
                                    "click": function($event) {
                                        return _vm.remove(item, false, subItem);
                                    }
                                }
                            }, [
                                _c("v-icon", [
                                    _vm._v("remove_circle_outline")
                                ])
                            ], 1)
                        ], 1) : _vm._e()
                    ], 1);
                })
            ], 2);
        }), 1) : _vm._e(),
        _vm._v(" "),
        _vm.categories && _vm.categories.length === 0 ? _c("div", {
            staticClass: "emptyList"
        }, [
            _vm._v("\n    " + _vm._s(_vm.message) + "\n  ")
        ]) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3HLal":[function() {},{}],"lqUwn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f65Ck":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.configurationData ? _c("div", {
        staticClass: "container"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "name"
            }, [
                _c("md-tooltip", [
                    _vm._v(_vm._s(_vm.configurationData.name))
                ]),
                _vm._v(" "),
                _c("span", [
                    _vm._v(_vm._s(_vm.configurationData.name))
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "actions"
            }, [
                _vm.editMode ? _c("div", {
                    staticClass: "editMode"
                }, [
                    _c("v-btn", {
                        attrs: {
                            "outline": "",
                            "color": "teal"
                        },
                        on: {
                            "click": _vm.save
                        }
                    }, [
                        _vm._v("Save")
                    ]),
                    _vm._v(" "),
                    _c("v-btn", {
                        attrs: {
                            "outline": "",
                            "color": "#ff5252"
                        },
                        on: {
                            "click": _vm.cancel
                        }
                    }, [
                        _vm._v("Cancel")
                    ]),
                    _vm._v(" "),
                    _c("menu-component", {
                        on: {
                            "add": _vm.addAttributeCategory
                        }
                    })
                ], 1) : _c("div", {
                    staticClass: "normalMode"
                }, [
                    _c("v-btn", {
                        attrs: {
                            "outline": "",
                            "color": "orange"
                        },
                        on: {
                            "click": _vm.activeEditMode
                        }
                    }, [
                        _vm._v("Active edit Mode")
                    ]),
                    _vm._v(" "),
                    _vm.configurationSelected !== _vm.currentConfiguration ? _c("v-btn", {
                        attrs: {
                            "outline": "",
                            "color": "#448aff"
                        },
                        on: {
                            "click": _vm.setAsCurrentConf
                        }
                    }, [
                        _vm._v("Set as Current Configuration")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.configurationSelected === _vm.currentConfiguration ? _c("v-btn", {
                        attrs: {
                            "outline": "",
                            "color": "teal"
                        },
                        on: {
                            "click": _vm.deleteAsCurrentConf
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("check")
                        ]),
                        _vm._v("\n               Current Configuration\n            ")
                    ], 1) : _vm._e()
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "content"
        }, [
            _c("display-list", {
                staticClass: "displayList md-scrollbar",
                attrs: {
                    "categories": _vm.configurationData.categories,
                    "editMode": _vm.editMode,
                    "message": "No Attribute category found !"
                },
                on: {
                    "add": _vm.addSubItem,
                    "remove": _vm.removeItem
                }
            })
        ], 1)
    ]) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1p7ig":[function() {},{}],"9rtmL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HnYp":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "_container md-scrollbar"
    }, [
        _c("div", {
            staticClass: "fabs"
        }, [
            _c("md-speed-dial", {
                attrs: {
                    "md-direction": "top",
                    "md-event": "click",
                    "md-effect": "scale"
                }
            }, [
                _c("md-speed-dial-target", {
                    staticClass: "md-fab md-bottom-right md-mini md-primary"
                }, [
                    _c("md-icon", {
                        staticClass: "md-morph-initial"
                    }, [
                        _vm._v("menu")
                    ]),
                    _vm._v(" "),
                    _c("md-icon", {
                        staticClass: "md-morph-final"
                    }, [
                        _vm._v("menu_open")
                    ])
                ], 1),
                _vm._v(" "),
                _c("md-speed-dial-content", {
                    staticClass: "configMdSpeedDialBtn"
                }, [
                    _vm.item.groupSelected ? _c("create-item", {
                        attrs: {
                            "title": "Create Configuration Profil",
                            "fieldText": "Configuration Profil Name",
                            "disabled": !_vm.item.groupSelected,
                            "icon": "add"
                        },
                        on: {
                            "create": _vm.createConfiguration
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _vm.item.categorySelected ? _c("create-item", {
                        attrs: {
                            "title": "Create Group",
                            "fieldText": "Group Name",
                            "disabled": !_vm.item.categorySelected,
                            "icon": "add"
                        },
                        on: {
                            "create": _vm.createGroup
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _c("create-item", {
                        attrs: {
                            "title": "Create Category",
                            "fieldText": "Category Name",
                            "icon": "add"
                        },
                        on: {
                            "create": _vm.createCategory
                        }
                    })
                ], 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "exportHead"
        }, [
            _c("v-btn", {
                attrs: {
                    "outline": "",
                    "color": "#448aff"
                },
                on: {
                    "click": function($event) {
                        $event.stopPropagation();
                        return _vm.importFile.apply(null, arguments);
                    }
                }
            }, [
                _vm._v("Import")
            ]),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "outline": "",
                    "color": "#448aff"
                },
                on: {
                    "click": function($event) {
                        $event.stopPropagation();
                        return _vm.exportFile.apply(null, arguments);
                    }
                }
            }, [
                _vm._v("Export")
            ])
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "select select-categories"
            }, [
                _c("select-item", {
                    attrs: {
                        "placeholder": "Select category",
                        "data": _vm.item.categories,
                        "value": _vm.item.categorySelected
                    },
                    on: {
                        "select": _vm.selectCategory
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "select select-groups"
            }, [
                _c("select-item", {
                    attrs: {
                        "placeholder": "Select group",
                        "data": _vm.item.groups,
                        "value": _vm.item.groupSelected
                    },
                    on: {
                        "select": _vm.selectGroup
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "select select-configurations"
            }, [
                _c("select-item", {
                    attrs: {
                        "placeholder": "select configuration",
                        "data": _vm.item.configurations,
                        "value": _vm.item.configurationSelected
                    },
                    on: {
                        "select": _vm.selectConfiguration
                    }
                })
            ], 1)
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "body"
        }, [
            !_vm.item.configurationSelected ? _c("div", {
                staticClass: "no-conf"
            }, [
                _vm._v("\n         Select a configuration\n      ")
            ]) : _c("configuration-component", {
                attrs: {
                    "configurationSelected": _vm.item.configurationSelected,
                    "currentConfiguration": _vm.currentConfiguration
                },
                on: {
                    "getCurrentConf": _vm.currentConf
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"l6fSp":[function() {},{}],"7o298":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNjqX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a236a4bd8439c55a");
    if (script.__esModule) script = script.default;
    script.render = require("add8588e4e89bd47").render;
    script.staticRenderFns = require("add8588e4e89bd47").staticRenderFns;
    script._scopeId = "data-v-b9966f";
    script.__cssModules = require("5cc5d7188172fb40").default;
    require("471a8c72695cac0").default(script);
    script.__scopeId = "data-v-b9966f";
    script.__file = "currentConfiguration.vue";
};
initialize();
exports.default = script;

},{"a236a4bd8439c55a":"hG9hM","add8588e4e89bd47":"7rom9","5cc5d7188172fb40":"gsgNy","471a8c72695cac0":"4mYna","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hG9hM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configurationsVue = require("./configurations.vue");
var _configurationsVueDefault = parcelHelpers.interopDefault(_configurationsVue);
var scriptExports = {
    name: "current-configuration-template",
    components: {
        "configuration-component": (0, _configurationsVueDefault.default)
    },
    props: {
        currentConfiguration: {}
    },
    data () {
        return {};
    },
    methods: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./configurations.vue":"hMTaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rom9":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "container md-scrollbar"
    }, [
        _vm.currentConfiguration ? _c("configuration-component", {
            staticClass: "configuration",
            attrs: {
                "configurationSelected": _vm.currentConfiguration,
                "currentConfiguration": _vm.currentConfiguration
            }
        }) : _c("div", {
            staticClass: "empty"
        }, [
            _vm._v("\n    No configuration Set\n  ")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gsgNy":[function() {},{}],"4mYna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bGTK":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "paramsContainer",
        staticStyle: {
            "overflow": "hidden"
        }
    }, [
        _c("md-tabs", {
            staticClass: "myTabs",
            attrs: {
                "md-alignment": "centered",
                "md-active-tab": _vm.tabDisplayed ? "all-params-tab" : "current-param-tab"
            },
            on: {
                "md-changed": _vm.changeTab
            }
        }, [
            _c("md-tab", {
                attrs: {
                    "id": "current-param-tab",
                    "md-label": "Current configuration",
                    "md-icon": "offline_pin"
                }
            }),
            _vm._v(" "),
            _c("md-tab", {
                attrs: {
                    "id": "all-params-tab",
                    "md-label": "Configurations",
                    "md-icon": "settings_applications"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-content", {
            staticClass: "tabsContent"
        }, [
            _vm.tabDisplayed === 1 ? _c("configuration-template", {
                staticClass: "content",
                attrs: {
                    "tempData": _vm.tempData,
                    "item": _vm.item,
                    "currentConfiguration": _vm.currentConfiguration
                },
                on: {
                    "currentConf": _vm.getCurrentConfiguration
                }
            }) : _vm._e(),
            _vm._v(" "),
            _vm.tabDisplayed === 0 ? _c("current-configuration-template", {
                staticClass: "content",
                attrs: {
                    "currentConfiguration": _vm.currentConfiguration
                }
            }) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7gxGp":[function() {},{}],"yWEKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qXTR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9d61c7b9c031fefa");
    if (script.__esModule) script = script.default;
    script.render = require("8bdcbfc539a29625").render;
    script.staticRenderFns = require("8bdcbfc539a29625").staticRenderFns;
    script._scopeId = "data-v-e6453f";
    script.__cssModules = require("cea67c9a95ed8243").default;
    require("eb043ed407b8d9e5").default(script);
    script.__scopeId = "data-v-e6453f";
    script.__file = "panel.vue";
};
initialize();
exports.default = script;

},{"9d61c7b9c031fefa":"jVNmJ","8bdcbfc539a29625":"ivKqZ","cea67c9a95ed8243":"jXL5y","eb043ed407b8d9e5":"hEy0n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVNmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configurationStepVue = require("./components/configurationStep.vue");
var _configurationStepVueDefault = parcelHelpers.interopDefault(_configurationStepVue);
var _launchGenerationStepVue = require("./components/launchGenerationStep.vue");
var _launchGenerationStepVueDefault = parcelHelpers.interopDefault(_launchGenerationStepVue);
var _selectionStepVue = require("./components/selectionStep.vue");
var _selectionStepVueDefault = parcelHelpers.interopDefault(_selectionStepVue);
var _dataJs = require("./js/data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _dataConfig = require("./js/data.config");
var _dataConfigDefault = parcelHelpers.interopDefault(_dataConfig);
var scriptExports = {
    name: "generateGroupPanel",
    components: {
        "configuration-step": (0, _configurationStepVueDefault.default),
        "launch-generation-step": (0, _launchGenerationStepVueDefault.default),
        "selection-step": (0, _selectionStepVueDefault.default)
    },
    data () {
        this.CREATE_DATA = (0, _dataJsDefault.default);
        return {
            active: "first",
            errorInConfig: null,
            first: false,
            second: false,
            third: false,
            type: undefined,
            firstStepError: false,
            data: Object.assign({}, (0, _dataConfigDefault.default)),
            verification: {
                context: {
                    isVerified: false,
                    message: ""
                },
                category: {
                    isVerified: false,
                    message: ""
                },
                group: {
                    isVerified: false,
                    message: ""
                }
            }
        };
    },
    methods: {
        opened (params) {
            this.type = params.type;
            this.data.items = params.items;
        },
        closed () {},
        errorInFirstStep () {
            this.errorInConfig = "This is an error!";
        },
        changeStep (step) {
            if (step === "second") this.errorInConfig = null;
            else if (step === "third") {
                const contextIsOk = this.contextIsVerified();
                const categoryisOk = this.categoryOrGroupIsVerified(this.data.category);
                const groupIsOk = this.categoryOrGroupIsVerified(this.data.group);
                if (!contextIsOk || !categoryisOk || !groupIsOk) {
                    this.firstStepError = true;
                    this.errorInConfig = "This is an error!";
                } else this.firstStepError = false;
            }
        },
        changeType (type) {
            this.type = type;
        // if (this.data.context.create) {
        //   this.data.context.id = "";
        //   this.data.context.name = "";
        // }
        },
        contextIsVerified () {
            if (this.data.context.create) return this.data.context.name.trim().length > 0;
            else return this.data.context.name.trim().length > 0 && this.data.context.id.trim().length > 0;
        },
        categoryOrGroupIsVerified (info) {
            // createBy: this.CREATE_DATA.attribute,
            //     contains: false,
            //     name: "",
            //     regex: "",
            //     separator: "",
            //     index: -1
            if (info.createBy === this.CREATE_DATA.attribute) return info.regex.toString().trim().length > 0;
            else if (info.createBy === this.CREATE_DATA.name) return parseInt(info.index) >= 1;
            else if (info.createBy === this.CREATE_DATA.fixed) return info.fixedValue.trim().length > 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./components/configurationStep.vue":"2mXYj","./components/launchGenerationStep.vue":"6GsQr","./components/selectionStep.vue":"fduLe","./js/data.js":"anSEP","./js/data.config":"8yPE2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mXYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("632b93fcde1e8ac8");
    if (script.__esModule) script = script.default;
    script.render = require("738b6f3cac5c628e").render;
    script.staticRenderFns = require("738b6f3cac5c628e").staticRenderFns;
    script._scopeId = "data-v-f2f23f";
    script.__cssModules = require("7e083d70bd916fb9").default;
    require("6b529f1988a807de").default(script);
    script.__scopeId = "data-v-f2f23f";
    script.__file = "configurationStep.vue";
};
initialize();
exports.default = script;

},{"632b93fcde1e8ac8":"g9znX","738b6f3cac5c628e":"guLfL","7e083d70bd916fb9":"18pfd","6b529f1988a807de":"bv785","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9znX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _contextVue = require("./context.vue");
var _contextVueDefault = parcelHelpers.interopDefault(_contextVue);
var _categoryVue = require("./category.vue");
var _categoryVueDefault = parcelHelpers.interopDefault(_categoryVue);
var _groupVue = require("./group.vue");
var _groupVueDefault = parcelHelpers.interopDefault(_groupVue);
var scriptExports = {
    name: "configuration",
    props: {
        data: {},
        type: {}
    },
    components: {
        "context-vue": (0, _contextVueDefault.default),
        "category-vue": (0, _categoryVueDefault.default),
        "group-vue": (0, _groupVueDefault.default)
    },
    data () {
        return {
            isLoaded: true
        };
    },
    methods: {
        refresh () {
            this.isLoaded = false;
            setTimeout(()=>{
                this.isLoaded = true;
            }, 300);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./context.vue":"gkPKs","./category.vue":"4Ma5u","./group.vue":"cxUwX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkPKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fa51aff40edaa77e");
    if (script.__esModule) script = script.default;
    script.render = require("f31f5661f3a671af").render;
    script.staticRenderFns = require("f31f5661f3a671af").staticRenderFns;
    script._scopeId = "data-v-8a6181";
    script.__cssModules = require("2ec74175702e5aa4").default;
    require("6cbbf52f3db9e2c5").default(script);
    script.__scopeId = "data-v-8a6181";
    script.__file = "context.vue";
};
initialize();
exports.default = script;

},{"fa51aff40edaa77e":"loMm5","f31f5661f3a671af":"c6K1v","2ec74175702e5aa4":"63cip","6cbbf52f3db9e2c5":"69iRv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loMm5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _panelVue = require("../panel.vue");
var _panelVueDefault = parcelHelpers.interopDefault(_panelVue);
var scriptExports = {
    name: "contextTemplate",
    props: [
        "data",
        "type"
    ],
    data () {
        return {
            contexts: []
        };
    },
    mounted () {
        this.getContexts();
    },
    methods: {
        async getContexts () {
            this.contexts = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(this.type);
        },
        async selectItem (id) {
            const config = await this.getConfiguration(id);
            if (config && config.context) this._setValue("context", config.context.get());
            if (config && config.category) this._setValue("category", config.category.get());
            if (config && config.group) this._setValue("group", config.group.get());
        },
        changeRadio () {
            this.data.context.name = "";
            this.data.context.id = "";
        },
        async getConfiguration (id) {
            const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
            if (context) {
                let _ptr = context.info.generate_group_config;
                if (typeof _ptr !== "undefined") return new Promise((resolve)=>{
                    _ptr.load((info)=>{
                        resolve(info);
                    });
                });
            }
            return;
        },
        _setValue (objectProperty, liste) {
            for (const key of Object.keys(liste))if (this.data[objectProperty].hasOwnProperty(key)) {
                if (key === "regex") this.data[objectProperty][key] = this._getRegex(liste[key]);
                else this.data[objectProperty][key] = liste[key];
            }
        },
        _getRegex (inputstring) {
            var match = inputstring.match(new RegExp("^/(.*?)/([gimyu]*)$"));
            if (match) return new RegExp(match[1], match[2]);
            return "";
        }
    },
    watch: {
        type () {
            this.getContexts();
            this.data.context.id = "";
            this.data.context.name = "";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-graph-service":"9n7zp","../panel.vue":"1qXTR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6K1v":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "sub-content"
    }, [
        _c("md-subheader", [
            _vm._v("Context")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "contentDiv"
        }, [
            _c("div", {
                staticClass: "radios"
            }, [
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": false
                    },
                    on: {
                        "change": _vm.changeRadio
                    },
                    model: {
                        value: _vm.data.context.create,
                        callback: function($$v) {
                            _vm.$set(_vm.data.context, "create", $$v);
                        },
                        expression: "data.context.create"
                    }
                }, [
                    _vm._v("Select Context")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": true
                    },
                    on: {
                        "change": _vm.changeRadio
                    },
                    model: {
                        value: _vm.data.context.create,
                        callback: function($$v) {
                            _vm.$set(_vm.data.context, "create", $$v);
                        },
                        expression: "data.context.create"
                    }
                }, [
                    _vm._v("Create Context")
                ])
            ], 1),
            _vm._v(" "),
            _vm.data.context.create ? _c("div", {
                staticClass: "inputDiv"
            }, [
                _c("md-field", [
                    _c("label", [
                        _vm._v("Context Name")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        model: {
                            value: _vm.data.context.name,
                            callback: function($$v) {
                                _vm.$set(_vm.data.context, "name", $$v);
                            },
                            expression: "data.context.name"
                        }
                    })
                ], 1)
            ], 1) : _c("div", {
                staticClass: "inputDiv"
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "context"
                        }
                    }, [
                        _vm._v("Select context")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "context",
                            "id": "context"
                        },
                        on: {
                            "md-selected": _vm.selectItem
                        },
                        model: {
                            value: _vm.data.context.id,
                            callback: function($$v) {
                                _vm.$set(_vm.data.context, "id", $$v);
                            },
                            expression: "data.context.id"
                        }
                    }, [
                        _vm.contexts.length === 0 ? _c("md-option", {
                            attrs: {
                                "disabled": ""
                            }
                        }, [
                            _vm._v("No Item")
                        ]) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.contexts, function(item, index) {
                            return _c("md-option", {
                                key: index,
                                attrs: {
                                    "value": item.id
                                }
                            }, [
                                _vm._v(_vm._s(item.name))
                            ]);
                        })
                    ], 2)
                ], 1)
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"63cip":[function() {},{}],"69iRv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ma5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d9f9904d5f781e79");
    if (script.__esModule) script = script.default;
    script.render = require("b751701979b7df58").render;
    script.staticRenderFns = require("b751701979b7df58").staticRenderFns;
    script._scopeId = "data-v-9c04d3";
    script.__cssModules = require("2e02fb504955ca5").default;
    require("7b00f205630dc118").default(script);
    script.__scopeId = "data-v-9c04d3";
    script.__file = "category.vue";
};
initialize();
exports.default = script;

},{"d9f9904d5f781e79":"gBDRO","b751701979b7df58":"iIOkA","2e02fb504955ca5":"8xkCI","7b00f205630dc118":"5G4AW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBDRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _dataJs = require("../js/data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _createByAttributeVue = require("./createByAttribute.vue");
var _createByAttributeVueDefault = parcelHelpers.interopDefault(_createByAttributeVue);
var _createByNameVue = require("./createByName.vue");
var _createByNameVueDefault = parcelHelpers.interopDefault(_createByNameVue);
var _createByFixedValueVue = require("./createByFixedValue.vue");
var _createByFixedValueVueDefault = parcelHelpers.interopDefault(_createByFixedValueVue);
var scriptExports = {
    name: "categoryVue",
    components: {
        "create-by-attribute": (0, _createByAttributeVueDefault.default),
        "create-by-name": (0, _createByNameVueDefault.default),
        "create-by-fixed-value": (0, _createByFixedValueVueDefault.default)
    },
    props: {
        data: {}
    },
    data () {
        this.CREATE_DATA = (0, _dataJsDefault.default);
        return {};
    },
    methods: {
        // openDialog() {
        //   spinalPanelManagerService.openPanel("configureGenerationDialog", {
        //     callback: (regex, fixed) => {
        //       this.data.category.regex = regex;
        //       this.data.category.fixed = fixed;
        //     }
        //   });
        // }
        setAttributeValue (res) {
            this.data.category.contains = res.contains;
            this.data.category.name = res.name;
            this.data.category.regex = res.regex;
        },
        setNameValue (res) {
            this.data.category.separator = res.separator;
            this.data.category.index = res.index;
        },
        setFixedValue (res) {
            this.data.category.fixedValue = res.name;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","../js/data.js":"anSEP","./createByAttribute.vue":"jDh4s","./createByName.vue":"9rdId","./createByFixedValue.vue":"fr6D2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"anSEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Object.freeze({
    attribute: 1,
    name: 2,
    fixed: 3
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDh4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("774538ecd8d5813a");
    if (script.__esModule) script = script.default;
    script.render = require("8f518e098e51e5f8").render;
    script.staticRenderFns = require("8f518e098e51e5f8").staticRenderFns;
    script._scopeId = "data-v-78b3fc";
    script.__cssModules = require("44c7b23fe2fad4a6").default;
    require("6232067e2acbccf4").default(script);
    script.__scopeId = "data-v-78b3fc";
    script.__file = "createByAttribute.vue";
};
initialize();
exports.default = script;

},{"774538ecd8d5813a":"3JKA5","8f518e098e51e5f8":"cQTDi","44c7b23fe2fad4a6":"1J7mf","6232067e2acbccf4":"dygZZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3JKA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var scriptExports = {
    name: "create-by-attribute",
    props: {
        propsName: {},
        propsContains: {},
        propsRegex: {},
        propsAdvanced: {}
    },
    data () {
        return {
            name: "",
            contains: false,
            regex: "",
            advanced: false
        };
    },
    methods: {
        openDialog () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("configureGenerationDialog", {
                callback: (regex)=>{
                    this.regex = regex;
                    this.advanced = true;
                    //   this.contains = false;
                    this.name = "";
                    this.setValue();
                }
            });
        },
        removeRegex () {
            this.regex = "";
            this.advanced = false;
        },
        getRegex () {
            if (this.advanced) return this.regex;
            else if (!this.advanced && this.name.trim().length > 0) {
                if (this.contains) return new RegExp(`${RegExp.escape(this.name.trim())}`, "i");
                else return new RegExp(`^${RegExp.escape(this.name.trim())}$`, "i");
            } else return "";
        },
        setValue () {
            this.$emit("setValue", {
                name: this.name,
                contains: this.contains,
                regex: this.getRegex()
            });
        }
    },
    watch: {
        contains () {
            this.setValue();
        },
        propsName () {
            if (this.propsName !== this.name) this.name = this.propsName;
        },
        propsContains () {
            if (this.propsContains !== this.contains) this.contains = this.propsContains;
        },
        propsRegex () {
            if (this.propsRegex !== this.regex) this.regex = this.propsRegex;
        },
        propsAdvanced () {
            if (this.propsAdvanced !== this.advanced) this.advanced = this.propsAdvanced;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQTDi":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "div_container"
    }, [
        _c("div", {
            staticClass: "inputs"
        }, [
            _c("md-field", {
                attrs: {
                    "md-clearable": ""
                }
            }, [
                _c("label", [
                    _vm._v("Attribute name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    attrs: {
                        "disabled": _vm.advanced
                    },
                    on: {
                        "blur": _vm.setValue
                    },
                    model: {
                        value: _vm.name,
                        callback: function($$v) {
                            _vm.name = $$v;
                        },
                        expression: "name"
                    }
                }),
                _vm._v(" "),
                _vm.advanced ? _c("span", {
                    staticClass: "md-primary md-helper-text"
                }, [
                    _vm._v("You use regex\n        "),
                    _c("a", {
                        on: {
                            "click": _vm.removeRegex
                        }
                    }, [
                        _vm._v("remove it!")
                    ])
                ]) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c("md-checkbox", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.advanced
                },
                model: {
                    value: _vm.contains,
                    callback: function($$v) {
                        _vm.contains = $$v;
                    },
                    expression: "contains"
                }
            }, [
                _vm._v("select element includes")
            ])
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "buttons"
        }, [
            _c("md-button", {
                staticClass: "md-raised md-primary",
                on: {
                    "click": _vm.openDialog
                }
            }, [
                _vm._v("Use Regex")
            ])
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1J7mf":[function() {},{}],"dygZZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rdId":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4ae836a1ec399da6");
    if (script.__esModule) script = script.default;
    script.render = require("f63161be9143028c").render;
    script.staticRenderFns = require("f63161be9143028c").staticRenderFns;
    script._scopeId = "data-v-f6fc84";
    script.__cssModules = require("d88584e02248f030").default;
    require("b210f43113a6901a").default(script);
    script.__scopeId = "data-v-f6fc84";
    script.__file = "createByName.vue";
};
initialize();
exports.default = script;

},{"4ae836a1ec399da6":"eZQkA","f63161be9143028c":"7dZ1Y","d88584e02248f030":"4FJfv","b210f43113a6901a":"ks58U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZQkA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "create-by-name",
    props: {
        propsSeparator: {},
        propsPosition: {}
    },
    data () {
        return {
            separator: "",
            position: 1
        };
    },
    methods: {
        setValue () {
            this.$emit("setValue", {
                separator: this.separator,
                index: this.position
            });
        }
    },
    watch: {
        propsSeparator () {
            if (this.propsSeparator !== this.separator) this.separator = this.propsSeparator;
        },
        propsPosition () {
            if (this.propsPosition !== this.position) this.position = this.propsPosition;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dZ1Y":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "div_container"
    }, [
        _c("div", {
            staticClass: "sub-container"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Separator")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "blur": _vm.setValue
                    },
                    model: {
                        value: _vm.separator,
                        callback: function($$v) {
                            _vm.separator = $$v;
                        },
                        expression: "separator"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "sub-container"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Index")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    attrs: {
                        "type": "number",
                        "min": 1
                    },
                    on: {
                        "blur": _vm.setValue
                    },
                    model: {
                        value: _vm.position,
                        callback: function($$v) {
                            _vm.position = $$v;
                        },
                        expression: "position"
                    }
                })
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4FJfv":[function() {},{}],"ks58U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fr6D2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f87f219212cca454");
    if (script.__esModule) script = script.default;
    script.render = require("40a387f6f8d675a").render;
    script.staticRenderFns = require("40a387f6f8d675a").staticRenderFns;
    script._scopeId = "data-v-5f7b0e";
    script.__cssModules = require("2ac2e8d386e6d329").default;
    require("b4f6bc3534c10a9d").default(script);
    script.__scopeId = "data-v-5f7b0e";
    script.__file = "createByFixedValue.vue";
};
initialize();
exports.default = script;

},{"f87f219212cca454":"l2nal","40a387f6f8d675a":"9b9dV","2ac2e8d386e6d329":"9N3EY","b4f6bc3534c10a9d":"dZuPi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2nal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "create-by-fixed-value",
    props: {
        propsName: {}
    },
    data () {
        return {
            name: ""
        };
    },
    methods: {
        setValue () {
            this.$emit("setValue", {
                name: this.name
            });
        }
    },
    watch: {
        propsName () {
            if (this.propsName !== this.name) this.name = this.propsName;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9b9dV":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "div_container"
    }, [
        _c("div", {
            staticClass: "inputs"
        }, [
            _c("md-field", {
                attrs: {
                    "md-clearable": ""
                }
            }, [
                _c("label", [
                    _vm._v("value")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "blur": _vm.setValue
                    },
                    model: {
                        value: _vm.name,
                        callback: function($$v) {
                            _vm.name = $$v;
                        },
                        expression: "name"
                    }
                })
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9N3EY":[function() {},{}],"dZuPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iIOkA":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "sub-content"
    }, [
        _c("md-subheader", [
            _vm._v("Category")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "contentDiv"
        }, [
            _c("div", {
                staticClass: "radiosDiv"
            }, [
                _c("md-subheader", [
                    _vm._v("Create By using : ")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.attribute
                    },
                    model: {
                        value: _vm.data.category.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.category, "createBy", $$v);
                        },
                        expression: "data.category.createBy"
                    }
                }, [
                    _vm._v("Attribute")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.name
                    },
                    model: {
                        value: _vm.data.category.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.category, "createBy", $$v);
                        },
                        expression: "data.category.createBy"
                    }
                }, [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.fixed
                    },
                    model: {
                        value: _vm.data.category.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.category, "createBy", $$v);
                        },
                        expression: "data.category.createBy"
                    }
                }, [
                    _vm._v("Fixed value")
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "content"
            }, [
                _vm.data.category.createBy === _vm.CREATE_DATA.attribute ? _c("create-by-attribute", {
                    attrs: {
                        "propsName": _vm.data.category.name,
                        "propsContains": _vm.data.category.contains,
                        "propsRegex": _vm.data.category.regex,
                        "propsAdvanced": _vm.data.category.advanced
                    },
                    on: {
                        "setValue": _vm.setAttributeValue
                    }
                }) : _vm.data.category.createBy === _vm.CREATE_DATA.name ? _c("create-by-name", {
                    attrs: {
                        "propsSeparator": _vm.data.category.separator,
                        "propsPosition": _vm.data.category.position
                    },
                    on: {
                        "setValue": _vm.setNameValue
                    }
                }) : _vm.data.category.createBy === _vm.CREATE_DATA.fixed ? _c("create-by-fixed-value", {
                    attrs: {
                        "propsName": _vm.data.category.fixedValue
                    },
                    on: {
                        "setValue": _vm.setFixedValue
                    }
                }) : _vm._e()
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8xkCI":[function() {},{}],"5G4AW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxUwX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f5201662d4f09e7b");
    if (script.__esModule) script = script.default;
    script.render = require("c5029272f85170b1").render;
    script.staticRenderFns = require("c5029272f85170b1").staticRenderFns;
    script._scopeId = "data-v-b870b9";
    script.__cssModules = require("9a23f62b0638f384").default;
    require("dd6f6773ab0ff6c4").default(script);
    script.__scopeId = "data-v-b870b9";
    script.__file = "group.vue";
};
initialize();
exports.default = script;

},{"f5201662d4f09e7b":"avyFQ","c5029272f85170b1":"6ek9b","9a23f62b0638f384":"avni6","dd6f6773ab0ff6c4":"29gPk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avyFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _dataJs = require("../js/data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _createByAttributeVue = require("./createByAttribute.vue");
var _createByAttributeVueDefault = parcelHelpers.interopDefault(_createByAttributeVue);
var _createByNameVue = require("./createByName.vue");
var _createByNameVueDefault = parcelHelpers.interopDefault(_createByNameVue);
var _createByFixedValueVue = require("./createByFixedValue.vue");
var _createByFixedValueVueDefault = parcelHelpers.interopDefault(_createByFixedValueVue);
var scriptExports = {
    name: "groupVue",
    components: {
        "create-by-attribute": (0, _createByAttributeVueDefault.default),
        "create-by-name": (0, _createByNameVueDefault.default),
        "create-by-fixed-value": (0, _createByFixedValueVueDefault.default)
    },
    props: {
        data: {}
    },
    data () {
        this.CREATE_DATA = (0, _dataJsDefault.default);
        return {};
    },
    methods: {
        // openDialog() {
        //   spinalPanelManagerService.openPanel("configureGenerationDialog", {
        //     callback: (regex, fixed) => {
        //       this.data.group.regex = regex;
        //       this.data.group.fixed = fixed;
        //     }
        //   });
        // }
        setAttributeValue (res) {
            this.data.group.contains = res.contains;
            this.data.group.name = res.name;
            this.data.group.regex = res.regex;
        },
        setNameValue (res) {
            this.data.group.separator = res.separator;
            this.data.group.index = res.index;
        },
        setFixedValue (res) {
            this.data.group.fixedValue = res.name;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","../js/data.js":"anSEP","./createByAttribute.vue":"jDh4s","./createByName.vue":"9rdId","./createByFixedValue.vue":"fr6D2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ek9b":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "sub-content"
    }, [
        _c("md-subheader", [
            _vm._v("Group")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "contentDiv"
        }, [
            _c("div", {
                staticClass: "radiosDiv"
            }, [
                _c("md-subheader", [
                    _vm._v("Create By using : ")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.attribute
                    },
                    model: {
                        value: _vm.data.group.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.group, "createBy", $$v);
                        },
                        expression: "data.group.createBy"
                    }
                }, [
                    _vm._v("Attribute")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.name
                    },
                    model: {
                        value: _vm.data.group.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.group, "createBy", $$v);
                        },
                        expression: "data.group.createBy"
                    }
                }, [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("md-radio", {
                    staticClass: "md-primary",
                    attrs: {
                        "value": _vm.CREATE_DATA.fixed
                    },
                    model: {
                        value: _vm.data.group.createBy,
                        callback: function($$v) {
                            _vm.$set(_vm.data.group, "createBy", $$v);
                        },
                        expression: "data.group.createBy"
                    }
                }, [
                    _vm._v("Fixed value")
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "content"
            }, [
                _vm.data.group.createBy === _vm.CREATE_DATA.attribute ? _c("create-by-attribute", {
                    attrs: {
                        "propsName": _vm.data.group.name,
                        "propsContains": _vm.data.group.contains,
                        "propsRegex": _vm.data.group.regex,
                        "propsAdvanced": _vm.data.group.advanced
                    },
                    on: {
                        "setValue": _vm.setAttributeValue
                    }
                }) : _vm.data.group.createBy === _vm.CREATE_DATA.name ? _c("create-by-name", {
                    attrs: {
                        "propsSeparator": _vm.data.group.separator,
                        "propsPosition": _vm.data.group.position
                    },
                    on: {
                        "setValue": _vm.setNameValue
                    }
                }) : _vm.data.group.createBy === _vm.CREATE_DATA.fixed ? _c("create-by-fixed-value", {
                    attrs: {
                        "propsName": _vm.data.group.fixedValue
                    },
                    on: {
                        "setValue": _vm.setFixedValue
                    }
                }) : _vm._e()
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"avni6":[function() {},{}],"29gPk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guLfL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_container"
    }, [
        _vm.isLoaded ? _c("div", {
            staticClass: "content"
        }, [
            _c("context-vue", {
                attrs: {
                    "data": _vm.data,
                    "type": _vm.type
                },
                on: {
                    "load": _vm.refresh
                }
            }),
            _vm._v(" "),
            _c("category-vue", {
                attrs: {
                    "data": _vm.data
                }
            }),
            _vm._v(" "),
            _c("group-vue", {
                attrs: {
                    "data": _vm.data
                }
            })
        ], 1) : _c("div", {
            staticClass: "loading"
        })
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"18pfd":[function() {},{}],"bv785":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GsQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("83a524fb96d2a51f");
    if (script.__esModule) script = script.default;
    script.render = require("7efe07b82ff3546e").render;
    script.staticRenderFns = require("7efe07b82ff3546e").staticRenderFns;
    script._scopeId = "data-v-edee46";
    script.__cssModules = require("4ed3e348fbc8c684").default;
    require("6c1f6a8873beb06").default(script);
    script.__scopeId = "data-v-edee46";
    script.__file = "launchGenerationStep.vue";
};
initialize();
exports.default = script;

},{"83a524fb96d2a51f":"gWzFM","7efe07b82ff3546e":"3Vc3B","4ed3e348fbc8c684":"lVdm6","6c1f6a8873beb06":"kCMmf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWzFM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../js/data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _utilitiesJs = require("../js/utilities.js");
var _utilitiesJsDefault = parcelHelpers.interopDefault(_utilitiesJs);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerPluginGroupManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginGroupManagerService);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var scriptExports = {
    name: "launchGeneration",
    props: {
        data: {},
        type: {},
        error: {}
    },
    data () {
        this.STATES = {
            loading: 1,
            normal: 2,
            success: 3,
            error: 4
        };
        return {
            verified: false,
            valueGrouped: null,
            appState: this.STATES.normal
        };
    },
    methods: {
        async launchVerification () {
            this.appState = this.STATES.loading;
            const contextCondition = this.data.context.name.trim().length > 0;
            const categoryCondition = this.data.category.regex.toString().length > 0 || this.data.category.name.trim().length > 0;
            const groupCondition = this.data.group.regex.toString().length > 0 || this.data.group.name.trim().length > 0;
            // if (contextCondition && categoryCondition && groupCondition) {
            this.valueGrouped = await this.classifyItem(this.data.category, this.data.group);
            this.verified = true;
            // } else {
            //   this.$emit("error");
            // }
            // console.log("items", this.valueGrouped);
            this.appState = this.STATES.normal;
        },
        async launchGeneration () {
            this.appState = this.STATES.loading;
            let contextId = await this.getContext();
            this.createNodes(contextId).then((res)=>{
                this.saveConfiguration(contextId, this.data);
                this._displayResult(this.STATES.success);
            }).catch((err)=>{
                this._displayResult(this.STATES.error);
                console.error(err);
            });
        },
        _displayResult (result) {
            this.appState = result;
            setTimeout(()=>{
                this.appState = this.STATES.normal;
            }, 1000);
        },
        async classifyItem (categoryInfo, groupInfo) {
            const res = [];
            const unclassify = "unclassify";
            for (const item of this.data.items){
                const spinalId = item.id;
                const categoryName = await (0, _utilitiesJsDefault.default).getValue(spinalId, categoryInfo, this.type);
                const groupName = await (0, _utilitiesJsDefault.default).getValue(spinalId, groupInfo, this.type);
                let categoryFound = res.find((el)=>{
                    if (categoryName) return el.name === categoryName;
                    return el.name === unclassify;
                });
                if (typeof categoryFound === "undefined") {
                    categoryFound = {
                        name: categoryName ? categoryName : unclassify,
                        groups: []
                    };
                    res.push(categoryFound);
                }
                let groupFound = categoryFound.groups.find((el)=>{
                    if (groupName) return el.name === groupName;
                    return el.name === unclassify;
                });
                if (typeof groupFound === "undefined") {
                    groupFound = {
                        name: groupName ? groupName : unclassify,
                        items: [],
                        color: groupName ? this._generateColor() : "#ff0000"
                    };
                    categoryFound.groups.push(groupFound);
                }
                groupFound.items.push(item);
            }
            return res;
        },
        async getContext () {
            if (this.data.context.create) {
                const contextName = (0, _utilitiesJsDefault.default)._getValidContextName(this.data.context.name);
                const context = await (0, _spinalEnvViewerPluginGroupManagerServiceDefault.default).createGroupContext(contextName, this.type);
                return context.info.id.get();
            }
            return this.data.context.id;
        },
        async createNodes (contextId) {
            this.valueGrouped = await this.classifyItem(this.data.category, this.data.group);
            for (const obj of this.valueGrouped){
                const category = await (0, _utilitiesJsDefault.default).createCategory(contextId, obj.name);
                for (const el of obj.groups){
                    const group = await (0, _utilitiesJsDefault.default).createGroup(contextId, category.info.id.get(), el.name, el.color);
                    for (const item of el.items)(0, _utilitiesJsDefault.default).addElement(contextId, group.info.id.get(), item.id);
                }
            }
            return;
        },
        saveConfiguration (contextId, configuration) {
            const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
            const dataCopy = Object.assign({}, this.data);
            dataCopy.context.create = false;
            dataCopy.context.id = contextId;
            dataCopy.category.regex = dataCopy.category.regex.toString();
            dataCopy.group.regex = dataCopy.group.regex.toString();
            if (context) {
                if (context.info.generate_group_config) context.info.rem_attr("generate_group_config");
                const model = new (0, _spinalCoreConnectorjsType.Model)({
                    context: dataCopy.context,
                    category: dataCopy.category,
                    group: dataCopy.group
                });
                context.info.add_attr({
                    generate_group_config: new (0, _spinalCoreConnectorjsType.Ptr)(model)
                });
            }
        },
        _generateColor () {
            return "#" + (Math.random() * 0xffffff << 0).toString(16);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/data.js":"anSEP","../js/utilities.js":"6XTgM","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-core-connectorjs_type":"fRH70","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XTgM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _services = require("../../../../services");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerPluginGroupManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginGroupManagerService);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
exports.default = {
    async getValue (spinalId, info, type) {
        if (info.createBy === (0, _dataJsDefault.default).attribute) return this.checkOnSpinalAttributes(spinalId, info.regex, type);
        else if (info.createBy === (0, _dataJsDefault.default).name) {
            const nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(spinalId);
            const name = nodeInfo.name.get();
            if (info.separator.length === 0) info.separator = " ";
            const liste = name.split(info.separator);
            return liste[info.index - 1];
        } else if (info.createBy === (0, _dataJsDefault.default).fixed) return info.fixedValue;
    },
    async checkOnBimObjectAttributes (spinalId, regex) {
        const bimObjectInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(spinalId).get();
        let model = window.spinal.BimObjectService.getModelByBimfile(bimObjectInfo.bimFileId);
        if (model) return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectProperties({
            model: model,
            selection: [
                bimObjectInfo.dbid
            ]
        }).then((res)=>{
            let properties = res[0].properties[0].properties;
            let found = properties.find((el)=>{
                let attrName = el.attributeName.toLowerCase();
                let displayName = el.displayName.toLowerCase();
                return attrName.match(this._getRegex(regex.toString())) || displayName.match(this._getRegex(regex.toString()));
            });
            if (found) return found.displayValue;
        }).catch((err)=>{
            console.error(err);
            return;
        });
    },
    async checkOnSpinalAttributes (spinalId, regex, type) {
        const attributes = await (0, _services.spinalAttributeService).getAllAttributes(spinalId);
        const found = attributes.find((el)=>{
            return el.label.match(this._getRegex(regex.toString()));
        });
        if (found && found.value) return found.value;
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE) {
            const attrValue = await this.checkOnBimObjectAttributes(spinalId, regex);
            return attrValue;
        }
    },
    ////////////////////////////////////////////////////////////////
    //                    Creation                                //
    ////////////////////////////////////////////////////////////////
    contextNameExist (contextName) {
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(contextName);
        if (typeof context !== "undefined") return true;
        return false;
    },
    createCategory (contextId, categoryName) {
        return (0, _spinalEnvViewerPluginGroupManagerServiceDefault.default).addCategory(contextId, categoryName, "");
    },
    createGroup (contextId, categoryId, groupName, color = "#000000") {
        return (0, _spinalEnvViewerPluginGroupManagerServiceDefault.default).addGroup(contextId, categoryId, groupName, color);
    },
    addElement (contextId, groupId, elementId) {
        return (0, _spinalEnvViewerPluginGroupManagerServiceDefault.default).linkElementToGroup(contextId, groupId, elementId);
    },
    _getValidContextName (name) {
        let validName;
        let count = 0;
        while(typeof validName === "undefined")if (!this.contextNameExist(name)) validName = name;
        else {
            count++;
            name = `${name} ${count}`;
        }
        return validName;
    },
    _getRegex (inputstring) {
        var match = inputstring.match(new RegExp("^/(.*?)/([gimyu]*)$"));
        if (match) return new RegExp(match[1], match[2]);
        return "";
    }
};

},{"./data.js":"anSEP","../../../../services":"R5DpR","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Vc3B":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "content"
    }, [
        _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "buttons"
        }, [
            _c("md-button", {
                staticClass: "md-raised md-primary",
                attrs: {
                    "disabled": _vm.error
                },
                on: {
                    "click": _vm.launchGeneration
                }
            }, [
                _vm._v("Launch Generation")
            ])
        ], 1) : _vm.appState === _vm.STATES.loading ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-progress-spinner", {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm.appState === _vm.STATES.success ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-icon", {
                staticClass: "md-size-4x"
            }, [
                _vm._v("check")
            ])
        ], 1) : _vm.appState === _vm.STATES.error ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-icon", {
                staticClass: "md-size-4x"
            }, [
                _vm._v("close")
            ])
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lVdm6":[function() {},{}],"kCMmf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fduLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("988e8627c2c2d04");
    if (script.__esModule) script = script.default;
    script.render = require("d444d988083689ba").render;
    script.staticRenderFns = require("d444d988083689ba").staticRenderFns;
    script._scopeId = "data-v-8dfd9d";
    script.__cssModules = require("89362a9ce5718e03").default;
    require("85e2b6edf7047cd").default(script);
    script.__scopeId = "data-v-8dfd9d";
    script.__file = "selectionStep.vue";
};
initialize();
exports.default = script;

},{"988e8627c2c2d04":"4AIDv","d444d988083689ba":"mj4N4","89362a9ce5718e03":"klmRj","85e2b6edf7047cd":"3ZE9d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4AIDv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var scriptExports = {
    name: "selectionStep",
    props: {
        data: {},
        type: {}
    },
    data () {
        return {};
    },
    methods: {
        addSelection () {
            const EQUIPMENT_TYPE = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE;
            if (this.type === EQUIPMENT_TYPE || this.data.items.length === 0) {
                if (this.data.items.length === 0) this.$emit("changeType", EQUIPMENT_TYPE);
                this.addItemSelected();
            } else window.alert(`can not add ${EQUIPMENT_TYPE} to ${this.type} type`);
        },
        clearReferential () {
            this.data.items = [];
            this.$emit("changeType");
        },
        async addItemSelected () {
            const aggregateSelection = window.spinal.ForgeViewer.viewer.getAggregateSelection();
            const selection = await this.getLeafDbIds(aggregateSelection);
            const nodespromises = selection.map(async (el)=>{
                return this.getBimObjectsNodes(el);
            });
            let promisesValues = await Promise.all(nodespromises);
            for (const iterator of promisesValues){
                const listeFiltered = this.filterList(iterator);
                this.data.items = [
                    ...this.data.items,
                    ...listeFiltered
                ];
            }
        },
        getLeafDbIds (selections) {
            const dbIds = selections.map((el)=>{
                return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(el.model, el.selection);
            });
            return Promise.all(dbIds);
        },
        getBimObjectsNodes (el) {
            let nodes = el.selection.map(async (dbId)=>{
                let node = await window.spinal.BimObjectService.createBIMObject(dbId, el.model);
                return node.get();
            });
            return Promise.all(nodes);
        },
        filterList (liste) {
            return liste.filter((el)=>{
                const found = this.data.items.find((i)=>i.id === el.id);
                if (found) return false;
                return true;
            });
        }
    },
    computed: {
        count () {
            return this.data && this.data.items ? this.data.items.length : 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-bim-manager-service":"9Nkbe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mj4N4":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "sub-content"
    }, [
        _c("div", {
            staticClass: "countdiv typeSelected"
        }, [
            _vm._v("\n    Type selected : " + _vm._s(_vm.type ? _vm.type : "None") + "\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "countdiv"
        }, [
            _vm._v("\n    " + _vm._s(_vm.count) + " item(s) selected\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "buttons"
        }, [
            _c("md-button", {
                on: {
                    "click": _vm.addSelection
                }
            }, [
                _c("md-icon", [
                    _vm._v("add")
                ]),
                _vm._v(" "),
                _c("md-tooltip", {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Add Bim objects selected")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                on: {
                    "click": _vm.clearReferential
                }
            }, [
                _c("md-icon", [
                    _vm._v("clear")
                ]),
                _vm._v(" "),
                _c("md-tooltip", {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Clear selected")
                ])
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"klmRj":[function() {},{}],"3ZE9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yPE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
exports.default = {
    items: [],
    context: {
        create: false,
        id: "",
        name: ""
    },
    category: {
        createBy: (0, _dataDefault.default).attribute,
        contains: false,
        name: "",
        regex: "",
        separator: "",
        index: 1,
        fixedValue: ""
    },
    group: {
        createBy: (0, _dataDefault.default).attribute,
        contains: false,
        name: "",
        regex: "",
        separator: "",
        index: 1,
        fixedValue: ""
    }
};

},{"./data":"anSEP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivKqZ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_container"
    }, [
        _c("md-steppers", {
            staticClass: "steppers",
            attrs: {
                "md-vertical": "",
                "md-dynamic-height": true
            },
            on: {
                "md-changed": _vm.changeStep
            }
        }, [
            _c("md-step", {
                attrs: {
                    "id": "first",
                    "md-label": "Selection Step",
                    "md-description": "select"
                }
            }, [
                _c("md-content", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("selection-step", {
                        attrs: {
                            "data": _vm.data,
                            "type": _vm.type
                        },
                        on: {
                            "changeType": _vm.changeType
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "second",
                    "md-label": "Configuration Step",
                    "md-description": "configure",
                    "md-error": _vm.errorInConfig
                }
            }, [
                _c("md-content", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("configuration-step", {
                        attrs: {
                            "data": _vm.data,
                            "type": _vm.type
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "third",
                    "md-label": "Creation Step",
                    "md-description": "create"
                }
            }, [
                _c("md-content", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("launch-generation-step", {
                        attrs: {
                            "data": _vm.data,
                            "type": _vm.type,
                            "error": _vm.firstStepError
                        }
                    })
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jXL5y":[function() {},{}],"hEy0n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kaxGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2df0be13f027046f");
    if (script.__esModule) script = script.default;
    script.render = require("8ee45e52138c8f92").render;
    script.staticRenderFns = require("8ee45e52138c8f92").staticRenderFns;
    script._scopeId = "data-v-ec0791";
    script.__cssModules = require("bd7776e4b2140de7").default;
    require("28b6fc036c3ffe15").default(script);
    script.__scopeId = "data-v-ec0791";
    script.__file = "paramsDialog.vue";
};
initialize();
exports.default = script;

},{"2df0be13f027046f":"ecpUV","8ee45e52138c8f92":"1MEr1","bd7776e4b2140de7":"8gleT","28b6fc036c3ffe15":"fNwza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecpUV":[function(require,module,exports) {
// import menuComponent from "../../vue/panels/components/tooltips/addItem.vue";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _editParamsComponentVue = require("./components/editParamsComponent.vue");
var _editParamsComponentVueDefault = parcelHelpers.interopDefault(_editParamsComponentVue);
var _paramsUploadedVue = require("./components/paramsUploaded.vue");
var _paramsUploadedVueDefault = parcelHelpers.interopDefault(_paramsUploadedVue);
var _createParamsComponentVue = require("./components/createParamsComponent.vue");
var _createParamsComponentVueDefault = parcelHelpers.interopDefault(_createParamsComponentVue);
var scriptExports = {
    name: "paramDialogComponent",
    components: {
        "edit-param": (0, _editParamsComponentVueDefault.default),
        "current-param": (0, _paramsUploadedVueDefault.default),
        "create-param": (0, _createParamsComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            typeSelected: "",
            data: [],
            callback: null,
            tabDisplayed: 0,
            allConfigurations: [],
            currentConf: undefined
        };
    },
    methods: {
        async opened (option) {
            this.typeSelected = option.typeSelected;
            this.callback = option.callback;
            this.allConfigurations = await (0, _utilitiesDefault.default).getAllConfiguration();
            this.currentConf = await (0, _utilitiesDefault.default).getCurrentConfiguration();
        // this.data = await this.formatData(option.header, option.typeSelected);
        },
        async changeCurrentConf () {
            this.currentConf = await (0, _utilitiesDefault.default).getCurrentConfiguration();
        },
        async RefreshData () {
            this.allConfigurations = await (0, _utilitiesDefault.default).getAllConfiguration();
            this.currentConf = await (0, _utilitiesDefault.default).getCurrentConfiguration();
        },
        removed (option) {
            // if (option) {
            //   utilities.addElement(this.typeSelected, this.data);
            // }
            this.callback();
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        // addLabel(res) {
        //   if (res.category && res.label) {
        //     let found = this.data.find(el => {
        //       return el.category === res.category;
        //     });
        //     if (found) {
        //       let attrFound = found.attributes.find(el => el.label === res.label);
        //       if (typeof attrFound === "undefined") {
        //         found.attributes.push({
        //           show: false,
        //           label: res.label
        //         });
        //       }
        //     }
        //   } else if (res.category) {
        //     let found = this.data.find(el => el.category === res.category);
        //     if (!found) {
        //       this.data.push({
        //         category: res.category,
        //         attributes: []
        //       });
        //     }
        //   }
        // },
        formatData (headers, type) {
            return (0, _utilitiesDefault.default).getElements(type).then((el)=>{
                if (el && el.get().length > 0) return el.get();
                let res = [];
                headers.forEach((el)=>{
                    let found = res.find((el2)=>el2.category === el.category);
                    if (found) found.attributes.push({
                        show: false,
                        label: el.label,
                        date: el.date
                    });
                    else res.push({
                        category: el.category,
                        attributes: [
                            {
                                show: false,
                                label: el.label,
                                date: el.date
                            }
                        ]
                    });
                });
                return res;
            });
        },
        changeTab (activeTab) {
            switch(activeTab){
                case "current-param-tab":
                    this.tabDisplayed = 0;
                    break;
                case "all-params-tab":
                    this.tabDisplayed = 1;
                    break;
                case "create-param-tab":
                    this.tabDisplayed = 2;
                    break;
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/utilities":"jypZx","./components/editParamsComponent.vue":"3fwBM","./components/paramsUploaded.vue":"bGUTv","./components/createParamsComponent.vue":"6EXkW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jypZx":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
class Utilities {
    static createOrGetContext() {
        this.contextName = "Nomenclature_Configuration";
        this.CONTEXT_TYPE = "Nomenclature_Configuration";
        this.CATEGORY_TYPE = "configurationCategory";
        this.ATTRIBUTE_TYPE = "configurationAttribute";
        this.CONTEXT_TO_CONFIGURATION_RELATION = "hasConfiguration";
        this.CONFIGURATION_TO_CATEGORY_RELATION = "hasCategory";
        this.CATEGORY_TO_ATTRIBUTE_RELATION = "hasAttribute";
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(this.contextName);
        if (typeof context !== "undefined") return Promise.resolve(context);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(this.contextName, this.CONTEXT_TYPE, new (0, _spinalCoreConnectorjsType.Model)({
            name: this.contextName
        }));
    }
    static createConfiguration(configurationName, configurationCategories) {
        return this.createOrGetContext().then((context)=>{
            let contextId = context.info.id.get();
            let configurationNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: configurationName,
                type: this.CATEGORY_TYPE
            }, new (0, _spinalCoreConnectorjsType.Model)({
                name: configurationName,
                categories: configurationCategories
            }));
            if (configurationNode) return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(contextId, configurationNode, contextId, this.CONTEXT_TO_CONFIGURATION_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        });
    }
    static getAllConfiguration() {
        return this.createOrGetContext().then((context)=>{
            let contextId = context.info.id.get();
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(contextId, [
                this.CONTEXT_TO_CONFIGURATION_RELATION
            ]).then((configurations)=>{
                let promises = configurations.map(async (configuration)=>{
                    let id = configuration.id.get();
                    let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
                    let elementModel = await realNode.getElement();
                    if (elementModel) {
                        let element = elementModel.get();
                        element["id"] = id;
                        return element;
                    }
                });
                return Promise.all(promises);
            });
        });
    }
    static getElements() {
        return this.getCurrentConfiguration().then((res)=>{
            return res.categories;
        });
    }
    static setAsCurrentConfiguration(nodeId) {
        this.createOrGetContext().then((context)=>{
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            if (realNode) {
                if (context.info.currentConfiguration) // context.info.currentConfiguration.load((res) => {
                //   res.set(realNode)
                // });
                context.info.rem_attr("currentConfiguration");
                context.info.add_attr({
                    currentConfiguration: new (0, _spinalCoreConnectorjsType.Ptr)(realNode)
                });
            }
        });
    }
    static getCurrentConfiguration() {
        return this.createOrGetContext().then((context)=>{
            //   let id = context.info.currentConfiguration;
            //   if (typeof id === "undefined") {
            //     return
            //   }
            //   let realNode = SpinalGraphService.getRealNode(id.get());
            //   return realNode.getElement().then(el => {
            //     let element = el.get();
            //     element["id"] = id.get();
            //     return element;
            //   })
            // })
            let confPtr = context.info.currentConfiguration;
            if (typeof confPtr !== "undefined") return new Promise((resolve)=>{
                confPtr.load((realNode)=>{
                    return realNode.getElement().then((el)=>{
                        let element = el.get();
                        element["id"] = realNode.info.id.get();
                        resolve(element);
                    });
                });
            });
            return {
                name: "",
                categories: []
            };
        });
    }
    static editConfiguration(configurationId, configurationElement) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationId);
        if (realNode) realNode.getElement().then((element)=>{
            element.set(configurationElement);
        });
    }
}
exports.default = Utilities;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-core-connectorjs_type":"fRH70","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fwBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bc767b83d3cc8fdf");
    if (script.__esModule) script = script.default;
    script.render = require("55356b827fbbca63").render;
    script.staticRenderFns = require("55356b827fbbca63").staticRenderFns;
    script._scopeId = "data-v-1261ac";
    script.__cssModules = require("e7bf20573e131290").default;
    require("3853266209273dda").default(script);
    script.__scopeId = "data-v-1261ac";
    script.__file = "editParamsComponent.vue";
};
initialize();
exports.default = script;

},{"bc767b83d3cc8fdf":"jzyIK","55356b827fbbca63":"6dfGS","e7bf20573e131290":"iA3OR","3853266209273dda":"8BaPF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzyIK":[function(require,module,exports) {
// import menuComponent from "../../../vue/panels/components/tooltips/addItem.vue";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayListVue = require("../components/displayList.vue");
var _displayListVueDefault = parcelHelpers.interopDefault(_displayListVue);
var _addItemVue = require("../../../vue/panels/attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var _utilities = require("../../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var scriptExports = {
    name: "editParamsComponent",
    components: {
        "menu-component": (0, _addItemVueDefault.default),
        "display-list-component": (0, _displayListVueDefault.default)
    },
    props: {
        data: {
            default: new Array()
        },
        currentConfiguration: {}
    },
    data () {
        this.copyItem;
        return {
            editMode: false,
            configurationSelected: undefined,
            configurationData: {
                name: "",
                categories: []
            }
        };
    },
    mounted () {
    // console.log("this.currentConfiguration", this.currentConfiguration);
    },
    methods: {
        async activeEditMode (edit) {
            this.editMode = !this.editMode;
            if (!this.editMode && edit) {
                await (0, _utilitiesDefault.default).editConfiguration(this.configurationSelected, this.configurationData);
                this.$emit("refresh");
            } else if (!this.editMode && !edit) // console.log("cancel edit", this.copyItem);
            this.configurationData = JSON.parse(JSON.stringify(this.copyItem));
        },
        async setAsCurrentConfiguration () {
            await (0, _utilitiesDefault.default).setAsCurrentConfiguration(this.configurationSelected);
            this.$emit("change");
        },
        isCurrentConfiguration () {
            if (typeof this.configurationSelected === "undefined") return false;
            if (this.currentConfiguration && this.currentConfiguration.id === this.configurationSelected) return true;
            return false;
        },
        addSubItem (res) {
            if (res.category && res.label) {
                let found = this.configurationData.categories.find((el)=>{
                    return el.name === res.category;
                });
                if (found) {
                    let attrFound = found.attributes.find((el)=>el.name === res.label);
                    if (typeof attrFound === "undefined") found.attributes.push({
                        show: false,
                        name: res.label,
                        id: Date.now()
                    });
                }
            }
        },
        removeItem (res) {
            if (typeof res.attr === "undefined") this.configurationData.categories = this.configurationData.categories.filter((el)=>{
                return el.id !== res.category.id;
            });
            else {
                let found = this.configurationData.categories.find((el)=>{
                    return el.id === res.category.id;
                });
                if (found) found.attributes = found.attributes.filter((el)=>el.id !== res.attr.id);
            }
        },
        addCategory (res) {
            let found = this.configurationData.categories.find((el)=>el.name === res.category);
            if (!found) this.configurationData.categories.push({
                id: Date.now(),
                name: res.category,
                attributes: []
            });
        }
    },
    watch: {
        configurationSelected () {
            let found = this.data.find((el)=>el.id === this.configurationSelected);
            this.configurationData = JSON.parse(JSON.stringify(found));
            this.copyItem = JSON.parse(JSON.stringify(found));
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/displayList.vue":"fSfsZ","../../../vue/panels/attributePanel/components/tooltips/addItem.vue":"iyIYD","../../../js/utilities":"jypZx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSfsZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("588dc09cd723ab41");
    if (script.__esModule) script = script.default;
    script.render = require("bc3ec381bf5ab633").render;
    script.staticRenderFns = require("bc3ec381bf5ab633").staticRenderFns;
    script._scopeId = "data-v-4065af";
    script.__cssModules = require("1d8a6cd1a6fd0e18").default;
    require("f88853d207c46835").default(script);
    script.__scopeId = "data-v-4065af";
    script.__file = "displayList.vue";
};
initialize();
exports.default = script;

},{"588dc09cd723ab41":"lS6vJ","bc3ec381bf5ab633":"ju0gt","1d8a6cd1a6fd0e18":"gnVn3","f88853d207c46835":"1OIkl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS6vJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addItemVue = require("../../../vue/panels/attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var scriptExports = {
    name: "displayListComponent",
    components: {
        "menu-component": (0, _addItemVueDefault.default)
    },
    props: {
        categories: {},
        message: {
            type: String,
            default: "No data found"
        },
        editMode: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        addAttributes (res) {
            this.$emit("add", res);
        },
        remove (category, isCategory, attribute) {
            let item = {
                category: category,
                attr: attribute
            };
            this.$emit("remove", item);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../vue/panels/attributePanel/components/tooltips/addItem.vue":"iyIYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju0gt":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "myListContainer"
    }, [
        _vm.categories && _vm.categories.length > 0 ? _c("v-list", {
            staticClass: "listContainer",
            attrs: {
                "expand": "",
                "flat": "",
                "dark": ""
            }
        }, _vm._l(_vm.categories, function(item, index) {
            return _c("v-list-group", {
                key: index,
                attrs: {
                    "prepend-icon": "keyboard_arrow_down",
                    "append-icon": "",
                    "one-line": false,
                    "no-action": ""
                }
            }, [
                _c("v-list-tile", {
                    attrs: {
                        "slot": "activator"
                    },
                    slot: "activator"
                }, [
                    _c("v-list-tile-content", [
                        _c("v-list-tile-title", [
                            _vm._v(_vm._s(item.name))
                        ])
                    ], 1),
                    _vm._v(" "),
                    _vm.editMode ? _c("v-list-tile-action", [
                        _c("menu-component", {
                            attrs: {
                                "category": item.name
                            },
                            on: {
                                "add": _vm.addAttributes
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _vm.editMode ? _c("v-list-tile-action", [
                        _c("v-btn", {
                            attrs: {
                                "flat": "",
                                "icon": "",
                                "small": "",
                                "color": "red",
                                "title": "remove"
                            },
                            on: {
                                "click": function($event) {
                                    $event.stopPropagation();
                                    return _vm.remove(item, true);
                                }
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("remove_circle_outline")
                            ])
                        ], 1)
                    ], 1) : _vm._e()
                ], 1),
                _vm._v(" "),
                _vm._l(item.attributes, function(subItem, subIndex) {
                    return _c("v-list-tile", {
                        key: subIndex
                    }, [
                        _c("v-list-tile-action", [
                            _c("v-checkbox", {
                                attrs: {
                                    "disabled": !_vm.editMode,
                                    "color": "blue"
                                },
                                model: {
                                    value: subItem.show,
                                    callback: function($$v) {
                                        _vm.$set(subItem, "show", $$v);
                                    },
                                    expression: "subItem.show"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("v-list-tile-content", [
                            _c("v-list-tile-title", [
                                _vm._v(_vm._s(subItem.name))
                            ])
                        ], 1),
                        _vm._v(" "),
                        _vm.editMode ? _c("v-list-tile-action", [
                            _c("v-btn", {
                                attrs: {
                                    "icon": "",
                                    "flat": "",
                                    "small": "",
                                    "color": "red",
                                    "title": "remove"
                                },
                                on: {
                                    "click": function($event) {
                                        return _vm.remove(item, false, subItem);
                                    }
                                }
                            }, [
                                _c("v-icon", [
                                    _vm._v("remove_circle_outline")
                                ])
                            ], 1)
                        ], 1) : _vm._e()
                    ], 1);
                })
            ], 2);
        }), 1) : _vm._e(),
        _vm._v(" "),
        _vm.categories && _vm.categories.length === 0 ? _c("div", {
            staticClass: "emptyList"
        }, [
            _vm._v("\n    " + _vm._s(_vm.message) + "\n  ")
        ]) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gnVn3":[function() {},{}],"1OIkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dfGS":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "list"
    }, [
        !_vm.editMode ? _c("div", {
            staticClass: "md-layout md-alignment-space-between header"
        }, [
            _c("div", {
                staticClass: "md-layout-item md-size-55"
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "movie"
                        }
                    }, [
                        _vm._v("Select configuration")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "configuration",
                            "id": "configuration"
                        },
                        model: {
                            value: _vm.configurationSelected,
                            callback: function($$v) {
                                _vm.configurationSelected = $$v;
                            },
                            expression: "configurationSelected"
                        }
                    }, _vm._l(_vm.data, function(configuration, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": configuration.id
                            }
                        }, [
                            _vm._v(_vm._s(configuration.name) + "\n          ")
                        ]);
                    }), 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "md-layout-item md-size-40"
            }, [
                !_vm.isCurrentConfiguration() ? _c("v-btn", {
                    attrs: {
                        "outline": "",
                        "disabled": !_vm.configurationSelected,
                        "color": "blue"
                    },
                    on: {
                        "click": _vm.setAsCurrentConfiguration
                    }
                }, [
                    _vm._v("Set as current configuration")
                ]) : _vm._e(),
                _vm._v(" "),
                _vm.isCurrentConfiguration() ? _c("v-alert", {
                    attrs: {
                        "value": true,
                        "color": "green",
                        "outline": "",
                        "icon": "check_circle"
                    }
                }, [
                    _vm._v("\n        current configuration.\n      ")
                ]) : _vm._e()
            ], 1)
        ]) : _vm._e(),
        _vm._v(" "),
        _vm.configurationSelected ? _c("div", {
            staticClass: "content",
            class: {
                "contentWithOutHeader": _vm.editMode
            }
        }, [
            _c("div", {
                staticClass: "header"
            }, [
                _c("div", [
                    _vm._v(_vm._s(_vm.configurationData.name))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "buttons"
                }, [
                    _vm.editMode ? _c("v-btn", {
                        attrs: {
                            "fab": "",
                            "blue": "",
                            "outline": "",
                            "small": "",
                            "color": "red"
                        },
                        on: {
                            "click": function($event) {
                                return _vm.activeEditMode(false);
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("close")
                        ])
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _c("v-btn", {
                        attrs: {
                            "fab": "",
                            "blue": "",
                            "outline": "",
                            "small": "",
                            "color": "blue"
                        },
                        on: {
                            "click": function($event) {
                                return _vm.activeEditMode(true);
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v(_vm._s(_vm.editMode ? "check" : "edit"))
                        ])
                    ], 1)
                ], 1)
            ]),
            _vm._v(" "),
            _c("display-list-component", {
                staticClass: "content md-scrollbar",
                attrs: {
                    "categories": _vm.configurationData.categories,
                    "editMode": _vm.editMode,
                    "message": "No category found create. Create one with the button below !"
                },
                on: {
                    "add": _vm.addSubItem,
                    "remove": _vm.removeItem
                }
            }),
            _vm._v(" "),
            _c("div", {
                staticClass: "header"
            }, [
                _vm.editMode ? _c("menu-component", {
                    staticClass: "addCat",
                    on: {
                        "add": _vm.addCategory
                    }
                }) : _vm._e()
            ], 1)
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iA3OR":[function() {},{}],"8BaPF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGUTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d3dfe9c278b2c259");
    if (script.__esModule) script = script.default;
    script.render = require("6e100a5ae0d4b462").render;
    script.staticRenderFns = require("6e100a5ae0d4b462").staticRenderFns;
    script._scopeId = "data-v-f07513";
    script.__cssModules = require("b56a7815c8ad81ab").default;
    require("e0ffcb63798e1e1d").default(script);
    script.__scopeId = "data-v-f07513";
    script.__file = "paramsUploaded.vue";
};
initialize();
exports.default = script;

},{"d3dfe9c278b2c259":"2U3aM","6e100a5ae0d4b462":"4jJ31","b56a7815c8ad81ab":"cVG73","e0ffcb63798e1e1d":"fYuRE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2U3aM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayListVue = require("../components/displayList.vue");
var _displayListVueDefault = parcelHelpers.interopDefault(_displayListVue);
var _addItemVue = require("../../../vue/panels/attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var _utilities = require("../../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var scriptExports = {
    name: "currentParams",
    components: {
        "menu-component": (0, _addItemVueDefault.default),
        "display-list-component": (0, _displayListVueDefault.default)
    },
    props: {
        currentConfiguration: {}
    },
    data () {
        return {
            configurationCopy: {}
        };
    },
    mounted () {
        this.configurationCopy = Object.assign({}, this.currentConfiguration);
    },
    methods: {
        async updateConfiguration () {
            await (0, _utilitiesDefault.default).editConfiguration(this.configurationCopy.id, this.configurationCopy);
            this.$emit("refresh");
        },
        addCategory (res) {
            let found = this.configurationCopy.categories.find((el)=>el.name === res.category);
            if (!found) this.configurationCopy.categories.push({
                id: Date.now(),
                name: res.category,
                attributes: []
            });
        },
        addSubItem (res) {
            if (res.category && res.label) {
                let found = this.configurationCopy.categories.find((el)=>{
                    return el.name === res.category;
                });
                if (found) {
                    let attrFound = found.attributes.find((el)=>el.name === res.label);
                    if (typeof attrFound === "undefined") found.attributes.push({
                        show: false,
                        name: res.label,
                        id: Date.now()
                    });
                }
            }
        },
        removeItem (res) {
            if (typeof res.attr === "undefined") this.configurationCopy.categories = this.configurationCopy.categories.filter((el)=>{
                return el.id !== res.category.id;
            });
            else {
                let found = this.configurationCopy.categories.find((el)=>{
                    return el.id === res.category.id;
                });
                if (found) found.attributes = found.attributes.filter((el)=>el.id !== res.attr.id);
            }
        }
    },
    watch: {
        currentConfiguration () {
            this.configurationCopy = Object.assign({}, this.currentConfiguration);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/displayList.vue":"fSfsZ","../../../vue/panels/attributePanel/components/tooltips/addItem.vue":"iyIYD","../../../js/utilities":"jypZx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jJ31":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.configurationCopy ? _c("div", {
        staticClass: "list"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", [
                _vm._v(_vm._s(_vm.configurationCopy.name))
            ])
        ]),
        _vm._v(" "),
        _c("display-list-component", {
            staticClass: "content md-scrollbar",
            attrs: {
                "categories": _vm.configurationCopy.categories,
                "editMode": true,
                "message": "No category found create. Create one with the button below !"
            },
            on: {
                "add": _vm.addSubItem,
                "remove": _vm.removeItem
            }
        }),
        _vm._v(" "),
        _c("div", {
            staticClass: "header"
        }, [
            _c("menu-component", {
                staticClass: "addCatBtn",
                on: {
                    "add": _vm.addCategory
                }
            }),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "outline": "",
                    "color": "#2196f3"
                },
                on: {
                    "click": _vm.updateConfiguration
                }
            }, [
                _c("v-icon", {
                    attrs: {
                        "dark": ""
                    }
                }, [
                    _vm._v("check")
                ]),
                _vm._v("\n      \xa0\n      Save Modification\n    ")
            ], 1)
        ], 1)
    ], 1) : _c("div", {
        staticClass: "empty"
    }, [
        _vm._v("\n  No current configuration is set\n")
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cVG73":[function() {},{}],"fYuRE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6EXkW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("78656c38bb2830f");
    if (script.__esModule) script = script.default;
    script.render = require("10988aafa6f69fef").render;
    script.staticRenderFns = require("10988aafa6f69fef").staticRenderFns;
    script._scopeId = "data-v-eb2f91";
    script.__cssModules = require("e4999cb96603f9b9").default;
    require("79a4d7a2d8ea7b73").default(script);
    script.__scopeId = "data-v-eb2f91";
    script.__file = "createParamsComponent.vue";
};
initialize();
exports.default = script;

},{"78656c38bb2830f":"cxZ0R","10988aafa6f69fef":"w5fFh","e4999cb96603f9b9":"9znOp","79a4d7a2d8ea7b73":"h6VmI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxZ0R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addItemVue = require("../../../vue/panels/attributePanel/components/tooltips/addItem.vue");
var _addItemVueDefault = parcelHelpers.interopDefault(_addItemVue);
var _displayListVue = require("../components/displayList.vue");
var _displayListVueDefault = parcelHelpers.interopDefault(_displayListVue);
var _utilities = require("../../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var scriptExports = {
    name: "createParamsComponent",
    components: {
        "menu-component": (0, _addItemVueDefault.default),
        "display-list-component": (0, _displayListVueDefault.default)
    },
    data () {
        return {
            data: {
                paramName: "",
                categories: []
            }
        };
    },
    methods: {
        disableSaveButton () {
            return this.data.paramName.trim().length === 0 || this.data.categories.length === 0;
        },
        addAttributes (res) {
            if (res.category && res.label) {
                let found = this.data.categories.find((el)=>{
                    return el.name === res.category;
                });
                if (found) {
                    let attrFound = found.attributes.find((el)=>el.name === res.label);
                    if (typeof attrFound === "undefined") found.attributes.push({
                        show: false,
                        name: res.label,
                        id: Date.now()
                    });
                }
            } else if (res.category) {
                let found = this.data.categories.find((el)=>el.name === res.category);
                if (!found) this.data.categories.push({
                    id: Date.now(),
                    name: res.category,
                    attributes: []
                });
            }
        },
        saveConfiguration () {
            (0, _utilitiesDefault.default).createConfiguration(this.data.paramName.trim(), this.data.categories).then((res)=>{
                if (typeof res !== "undefined") {
                    this.data.paramName = "";
                    this.data.categories = [];
                }
                this.$emit("refresh");
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../vue/panels/attributePanel/components/tooltips/addItem.vue":"iyIYD","../components/displayList.vue":"fSfsZ","../../../js/utilities":"jypZx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"w5fFh":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "list"
    }, [
        _c("div", {
            staticClass: "content"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("configuration name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.data.paramName,
                        callback: function($$v) {
                            _vm.$set(_vm.data, "paramName", $$v);
                        },
                        expression: "data.paramName"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("display-list-component", {
                attrs: {
                    "categories": _vm.data.categories,
                    "message": "No category found create. Create one with the button below !"
                },
                on: {
                    "add": _vm.addAttributes
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "headerButtons addCategoryBtn"
            }, [
                _c("menu-component", {
                    on: {
                        "add": _vm.addAttributes
                    }
                }),
                _vm._v(" "),
                _c("div", {
                    staticClass: "trigger"
                }, [
                    _c("md-button", {
                        staticClass: "md-dense md-primary",
                        attrs: {
                            "title": "add category",
                            "disabled": _vm.disableSaveButton()
                        },
                        on: {
                            "click": _vm.saveConfiguration
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("save_alt")
                        ]),
                        _vm._v("\n          \xa0\n          Save configuration\n        ")
                    ], 1)
                ], 1)
            ], 1)
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9znOp":[function() {},{}],"h6VmI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MEr1":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer paramsDialogContainer",
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
            staticStyle: {
                "text-align": "center"
            }
        }, [
            _vm._v("\n    Set your configurations\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticStyle: {
                "overflow": "hidden"
            }
        }, [
            _c("md-tabs", {
                staticClass: "myTabs",
                attrs: {
                    "md-alignment": "centered"
                },
                on: {
                    "md-changed": _vm.changeTab
                }
            }, [
                _c("md-tab", {
                    attrs: {
                        "id": "current-param-tab",
                        "md-label": "Current configuration",
                        "md-icon": "offline_pin"
                    }
                }),
                _vm._v(" "),
                _c("md-tab", {
                    attrs: {
                        "id": "create-param-tab",
                        "md-label": "Create configuration",
                        "md-icon": "add"
                    }
                }),
                _vm._v(" "),
                _c("md-tab", {
                    attrs: {
                        "id": "all-params-tab",
                        "md-label": "All configuration",
                        "md-icon": "settings_applications"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "tabsContent"
            }, [
                _vm.tabDisplayed === 0 ? _c("current-param", {
                    attrs: {
                        "currentConfiguration": _vm.currentConf
                    },
                    on: {
                        "refresh": _vm.RefreshData
                    }
                }) : _vm._e(),
                _vm._v(" "),
                _vm.tabDisplayed === 1 ? _c("edit-param", {
                    attrs: {
                        "data": _vm.allConfigurations,
                        "currentConfiguration": _vm.currentConf
                    },
                    on: {
                        "change": _vm.changeCurrentConf,
                        "refresh": _vm.RefreshData
                    }
                }) : _vm._e(),
                _vm._v(" "),
                _vm.tabDisplayed === 2 ? _c("create-param", {
                    on: {
                        "refresh": _vm.RefreshData
                    }
                }) : _vm._e()
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
                _vm._v("Close")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8gleT":[function() {},{}],"fNwza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJjsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("27c39f404b423858");
    if (script.__esModule) script = script.default;
    script.render = require("3db377a62bfc2c7").render;
    script.staticRenderFns = require("3db377a62bfc2c7").staticRenderFns;
    script._scopeId = "data-v-60c269";
    script.__cssModules = require("168d54d6168f7291").default;
    require("b9952c511c9f76a2").default(script);
    script.__scopeId = "data-v-60c269";
    script.__file = "importAttributeExcelDialog.vue";
};
initialize();
exports.default = script;

},{"27c39f404b423858":"dBfkX","3db377a62bfc2c7":"gj7ML","168d54d6168f7291":"cnJKb","b9952c511c9f76a2":"3qS5F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBfkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _services = require("../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var scriptExports = {
    name: "ImportAttributeExcelDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.STATES = Object.freeze({
            valid: 0,
            loading: 1,
            error: 2,
            normal: 3
        });
        return {
            appState: this.STATES.normal,
            showDialog: true,
            data: [],
            itemsMap: new Map(),
            callback: ()=>{}
        };
    },
    methods: {
        async opened (option) {
            this.appState = this.STATES.loading;
            this.callback = option.callback;
            this.constructMap(option.tableData);
            const excelData = this.concatSheets(option.excelData);
            const data = this.formatExcelData(excelData);
            this.data = await this.getDifferenceBetweenData(data, option.tableData);
            if (this.data) this.appState = this.STATES.normal;
            else this.appState = this.STATES.error;
        // const tableFormated = this.convertDataToJson(option.tableData);
        // this.data = this.getDataModified(excelData, tableFormated);
        },
        async removed (option) {
            this.appState = this.STATES.loading;
            if (option && this.data) this._changeValue().then(()=>{
                this.appState = this.STATES.valid;
                this.callback();
                setTimeout(()=>{
                    this.showDialog = false;
                }, 1000);
            }).catch((el)=>{
                this.appState = this.STATES.error;
            });
            else {
                this.showDialog = false;
                this.callback();
            }
        // this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        formatExcelData (excelData) {
            return excelData.map((data)=>{
                let obj = {
                    id: "",
                    attributes: []
                };
                obj.id = data["SpinalGraph ID"];
                obj.name = data["Name"];
                const lists = [
                    "name",
                    "spinalgraph id",
                    "revit id"
                ];
                for (const key of Object.keys(data)){
                    // if (!key.includes(" / ")) continue;
                    if (lists.indexOf(key.toLowerCase()) !== -1) continue;
                    const list = key.split(" / ");
                    obj.attributes.push({
                        category: list[0] ? list[0] : "",
                        label: list[1] ? list[1] : "",
                        value: data[key] ? data[key] : "-"
                    });
                }
                return obj;
            });
        },
        concatSheets (excelData) {
            const data = [];
            for (const values of Object.values(excelData))data.push(...values);
            return data;
        },
        constructMap (tableContent) {
            for (const content of tableContent){
                const element = {};
                for (const attr of content.attributes)element[`${attr.category}_${attr.label}`] = {
                    value: attr.value,
                    displayValue: attr.value
                };
                this.itemsMap.set(content.id, element);
            }
        },
        getDifferenceBetweenData (excelData, tableContent) {
            const diff = [];
            for (const dataIterator of excelData){
                let found = tableContent.find((el)=>el.id === dataIterator.id);
                if (found && found.attributes) {
                    const diffAttr = this._getAttrDiff(found, dataIterator);
                    if (typeof diffAttr === "undefined") continue;
                    else if (diffAttr && (diffAttr.newName || diffAttr.attributes.length > 0)) diff.push(diffAttr);
                }
            }
            return diff;
        },
        async _changeValue () {
            const promises = [];
            for (const found of this.data)// const found = this.data.find(el => el.id === nodeId);
            // console.log("found", found);
            if (found && found.attributes) {
                if (found.newName) await this.editNodeName(found.id, found.newName);
                for (const attr of found.attributes)// let value = this.itemsMap.get(nodeId)[
                //   `${attr.category}_${attr.label}`
                // ]["value"];
                // let displayValue = this.itemsMap.get(nodeId)[
                //   `${attr.category}_${attr.label}`
                // ]["displayValue"];
                // console.log("value", value, "displayValue", displayValue);
                // if (value !== displayValue) {
                promises.push((0, _servicesDefault.default).updateAttributeValue(found.id, attr.category, attr.label, attr.value));
            }
            return Promise.all(promises);
        },
        _getAttrDiff (tableItem, excelItem) {
            let obj = {
                id: tableItem.id,
                attributes: []
            };
            if (tableItem.name !== excelItem.name) obj.newName = excelItem.name;
            for (const attr of excelItem.attributes){
                let attrFound = tableItem.attributes.find((el)=>{
                    return attr.category === el.category && attr.label === el.label;
                });
                if (attrFound && attrFound.value != attr.value) obj.attributes.push(attr);
            // else if (typeof attrFound === "undefined") {
            //   return;
            // }
            }
            return obj;
        },
        editNodeName (nodeId, newName) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            if (realNode) realNode.info.name.set(newName);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","../../services":"R5DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gj7ML":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
            staticClass: "dialogTitle"
        }, [
            _vm._v("Import Data")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _vm.appState === _vm.STATES.valid ? _c("div", {
                staticClass: "valid"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-4x"
                }, [
                    _vm._v("check")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("File imported.")
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.appState === _vm.STATES.normal ? _c("div", {
                staticClass: "valid"
            }, [
                _c("div", [
                    _vm._v("This file can be imported.")
                ])
            ]) : _vm.appState === _vm.STATES.loading ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.appState === _vm.STATES.error ? _c("div", {
                staticClass: "error"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-4x"
                }, [
                    _vm._v("close")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("Something went wrong !")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("Check if the file is the same as the exported one")
                ])
            ], 1) : _vm._e()
        ]),
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
                    "disabled": _vm.appState !== _vm.STATES.normal
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Import")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cnJKb":[function() {},{}],"3qS5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRHMA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("78b9ddcb830a2869");
    if (script.__esModule) script = script.default;
    script.render = require("d5434d80edd7880f").render;
    script.staticRenderFns = require("d5434d80edd7880f").staticRenderFns;
    script._scopeId = "data-v-f47229";
    require("f98687c4f475aa42").default(script);
    script.__scopeId = "data-v-f47229";
    script.__file = "export.vue";
};
initialize();
exports.default = script;

},{"78b9ddcb830a2869":"WtJEc","d5434d80edd7880f":"9qW28","f98687c4f475aa42":"6bUVZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WtJEc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "exportConfigurationDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true
        };
    },
    methods: {
        opened (option) {},
        async removed (option) {
            option;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qW28":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
            staticClass: "dialogTitle"
        }, [
            _vm._v("Export Configuration")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _c("h1", [
                _vm._v("Hello world !!")
            ])
        ]),
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
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("export")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6bUVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZDaJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3a490b8188b124");
    if (script.__esModule) script = script.default;
    script.render = require("d89bd9f4f36716c3").render;
    script.staticRenderFns = require("d89bd9f4f36716c3").staticRenderFns;
    script._scopeId = "data-v-6adad1";
    script.__cssModules = require("b61c528dbf711a75").default;
    require("f498859b9203edf6").default(script);
    script.__scopeId = "data-v-6adad1";
    script.__file = "import.vue";
};
initialize();
exports.default = script;

},{"3a490b8188b124":"guzZp","d89bd9f4f36716c3":"7sFUI","b61c528dbf711a75":"fZemW","f498859b9203edf6":"1wxZ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guzZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _services = require("../../../../services");
var scriptExports = {
    name: "importConfigurationDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.STATES = Object.freeze({
            valid: 0,
            loading: 1,
            error: 2,
            normal: 3
        });
        return {
            appState: this.STATES.normal,
            showDialog: true,
            data: []
        };
    },
    methods: {
        opened (option) {
            this.appState = this.STATES.loading;
            const data = this.concatSheets(option);
            this.data = this.formatData(data);
            this.appState = this.STATES.normal;
        },
        async removed (option) {
            this.appState = this.STATES.loading;
            if (option) this.createElements(this.data).then(()=>{
                this.appState = this.STATES.valid;
            }).catch((el)=>{
                this.appState = this.STATES.error;
            });
            else this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        concatSheets (excelData) {
            const data = [];
            for (const values of Object.values(excelData))data.push(...values);
            return data;
        },
        formatData (argExcelData) {
            const data = [];
            for (const element of argExcelData){
                let categoryFound = data.find((el)=>{
                    return el.name.toLowerCase() == element.Category.toLowerCase();
                });
                if (typeof categoryFound === "undefined") {
                    categoryFound = {
                        name: element.Category,
                        groups: []
                    };
                    data.push(categoryFound);
                }
                let groupFound = categoryFound.groups.find((el)=>{
                    return el.name.toLowerCase() == element.Group.toLowerCase();
                });
                if (typeof groupFound === "undefined") {
                    groupFound = {
                        name: element.Group,
                        configurations: []
                    };
                    categoryFound.groups.push(groupFound);
                }
                let configurationFound = groupFound.configurations.find((el)=>{
                    return el.name.toLowerCase() == element["Configuration Profil"].toLowerCase();
                });
                if (typeof configurationFound === "undefined") {
                    configurationFound = {
                        name: element["Configuration Profil"],
                        categories: []
                    };
                    groupFound.configurations.push(configurationFound);
                }
                let attributeCategoryFound = configurationFound.categories.find((el)=>{
                    return el.name.toLowerCase() === element["Attribute Category"].toLowerCase();
                });
                if (typeof attributeCategoryFound === "undefined") {
                    attributeCategoryFound = {
                        name: element["Attribute Category"],
                        attributes: []
                    };
                    configurationFound.categories.push(attributeCategoryFound);
                }
                let attributeFound = attributeCategoryFound.attributes.find((el)=>{
                    return el.name.toLowerCase() === element["Attribute Name"].toLowerCase();
                });
                if (typeof attributeFound === "undefined") attributeCategoryFound.attributes.push({
                    show: true,
                    name: element["Attribute Name"],
                    id: Date.now()
                });
            }
            return data;
        },
        async createElements (data) {
            for (const iterator of data){
                const categoryId = await this._createCategory(iterator.name);
                for (const groupIterator of iterator.groups){
                    const groupId = await this._createGroup(categoryId, groupIterator.name);
                    for (const configuration of groupIterator.configurations){
                        const configId = await this._createConfiguration(groupId, configuration.name);
                        (0, _services.spinalConfigurationService).editConfiguration(configId, configuration);
                    }
                }
            }
        },
        async _createCategory (name) {
            const category = await (0, _services.spinalConfigurationService).createCategory(name, "add");
            return category.info.id.get();
        },
        async _createGroup (categoryId, name) {
            const group = await (0, _services.spinalConfigurationService).createGroup(categoryId, name, "#000000");
            return group.info.id.get();
        },
        async _createConfiguration (groupId, name) {
            const configuration = await (0, _services.spinalConfigurationService).createConfiguration(groupId, name);
            return configuration.info.id.get();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../../services":"R5DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7sFUI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
            staticClass: "dialogTitle"
        }, [
            _vm._v("import Configuration")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _vm.appState === _vm.STATES.valid ? _c("div", {
                staticClass: "valid"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-4x"
                }, [
                    _vm._v("check")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("File imported.")
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.appState === _vm.STATES.normal ? _c("div", {
                staticClass: "valid"
            }, [
                _c("div", [
                    _vm._v("This file can be imported.")
                ])
            ]) : _vm.appState === _vm.STATES.loading ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.appState === _vm.STATES.error ? _c("div", {
                staticClass: "error"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-4x"
                }, [
                    _vm._v("close")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("Something went wrong !")
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("Check if the file is the same as the exported one")
                ])
            ], 1) : _vm._e()
        ]),
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.appState !== _vm.STATES.normal
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Import")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fZemW":[function() {},{}],"1wxZ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llzZt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("69e0527737a523e2");
    if (script.__esModule) script = script.default;
    script.render = require("8afb3aa690dc9fbb").render;
    script.staticRenderFns = require("8afb3aa690dc9fbb").staticRenderFns;
    script._scopeId = "data-v-9834ef";
    script.__cssModules = require("70e107926612c471").default;
    require("81f26c8cb4e544fd").default(script);
    script.__scopeId = "data-v-9834ef";
    script.__file = "configurations.vue";
};
initialize();
exports.default = script;

},{"69e0527737a523e2":"eQ8Yy","8afb3aa690dc9fbb":"7UG6d","70e107926612c471":"9XUzn","81f26c8cb4e544fd":"4YfJU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQ8Yy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flagsJs = require("../js/flags.js");
var _flagsJsDefault = parcelHelpers.interopDefault(_flagsJs);
var _dataJs = require("../js/data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var scriptExports = {
    name: "configureDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.CREATE_DATA = (0, _dataJsDefault.default);
        this.flagsList = (0, _flagsJsDefault.default);
        return {
            showDialog: true,
            value: "",
            advanced: true,
            contains: false,
            delimiterV: "/",
            flags: [],
            data: {
                fixed: true
            },
            callback: null
        };
    },
    methods: {
        opened (params) {
            this.callback = params.callback;
        },
        removed (option) {
            if (option) {
                const regex = this.getRegex(this.value, this.advanced, this.contains, this.flags.join(""), this.delimiterV);
                if (this.callback) this.callback(regex, this.data.fixed);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getRegex (value, advanced, contains, flag, delimiter = "/") {
            let regex;
            switch(advanced){
                case false:
                    if (contains) regex = new RegExp(`${RegExp.escape(value.trim())}`, "i");
                    else regex = new RegExp(`^${RegExp.escape(value.trim())}$`, "i");
                    break;
                case true:
                    regex = new RegExp(value, flag);
                    break;
            }
            return regex;
        }
    },
    computed: {
        getLabel () {
            switch(this.data.createBy){
                case this.CREATE_DATA.attribute:
                    return "Attribute Key";
                case this.CREATE_DATA.name:
                    return "name key";
                default:
                    break;
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/flags.js":"evhEY","../js/data.js":"anSEP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evhEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        name: "global",
        value: "g",
        description: "Don't return after first match"
    },
    {
        name: "Multi line",
        value: "m",
        description: "^ and $ match start/end of line"
    },
    {
        name: "Insensitive",
        value: "i",
        description: "Case insensitive match"
    },
    {
        name: "unicode",
        value: "u",
        description: "Match with full unicode"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UG6d":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer",
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
            staticClass: "dialogTitle"
        }, [
            _vm._v("\n    Use Regex\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContent"
        }, [
            _c("div", {
                staticClass: "content"
            }, [
                _c("div", {
                    staticClass: "advanced"
                }, [
                    _c("md-list", [
                        _c("md-list-item", [
                            _c("md-field", {
                                staticClass: "_mdField"
                            }, [
                                _c("label", [
                                    _vm._v("Regex")
                                ]),
                                _vm._v(" "),
                                _c("span", {
                                    staticClass: "md-prefix"
                                }, [
                                    _vm._v(_vm._s(_vm.delimiterV))
                                ]),
                                _vm._v(" "),
                                _c("md-input", {
                                    attrs: {
                                        "palceholder": "Regex"
                                    },
                                    model: {
                                        value: _vm.value,
                                        callback: function($$v) {
                                            _vm.value = $$v;
                                        },
                                        expression: "value"
                                    }
                                }),
                                _vm._v(" "),
                                _c("span", {
                                    staticClass: "md-icon md-suffix"
                                }, [
                                    _vm._v(_vm._s(_vm.delimiterV))
                                ])
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("md-list-item", [
                            _c("md-field", {
                                staticClass: "_mdField"
                            }, [
                                _c("label", [
                                    _vm._v("Flags")
                                ]),
                                _vm._v(" "),
                                _c("md-select", {
                                    attrs: {
                                        "name": "flags",
                                        "id": "flags",
                                        "md-dense": "",
                                        "multiple": ""
                                    },
                                    model: {
                                        value: _vm.flags,
                                        callback: function($$v) {
                                            _vm.flags = $$v;
                                        },
                                        expression: "flags"
                                    }
                                }, _vm._l(_vm.flagsList, function(flag, index) {
                                    return _c("md-option", {
                                        key: index,
                                        attrs: {
                                            "value": flag.value
                                        }
                                    }, [
                                        _vm._v(_vm._s(flag.name))
                                    ]);
                                }), 1)
                            ], 1)
                        ], 1)
                    ], 1)
                ], 1)
            ])
        ]),
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Save")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9XUzn":[function() {},{}],"4YfJU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VxMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("921776ac2d6d8979");
    if (script.__esModule) script = script.default;
    script.render = require("a872d0763a5bb0b7").render;
    script.staticRenderFns = require("a872d0763a5bb0b7").staticRenderFns;
    script._scopeId = "data-v-72a62f";
    script.__cssModules = require("dc635b68836fb558").default;
    require("d819cc33b8528386").default(script);
    script.__scopeId = "data-v-72a62f";
    script.__file = "select-type.vue";
};
initialize();
exports.default = script;

},{"921776ac2d6d8979":"4SPhf","a872d0763a5bb0b7":"fP1A9","dc635b68836fb558":"kY2So","d819cc33b8528386":"8K37M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SPhf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _services = require("../../../../services");
var _servicesDefault = parcelHelpers.interopDefault(_services);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var scriptExports = {
    name: "select-type",
    props: [
        "onFinised"
    ],
    data () {
        this.STATES = Object.freeze({
            normal: 0,
            loading: 1,
            error: 2
        });
        return {
            appState: this.STATES.error,
            showDialog: true,
            data: {},
            typeSelected: ""
        };
    },
    methods: {
        async opened (params) {
            this.appState = this.STATES.loading;
            this.data = await this.getAllData(params);
            this.appState = this.STATES.normal;
        },
        removed (option) {
            if (option) {
                const items = this.getItems(this.typeSelected);
                (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("generateGroupPanel", {
                    type: this.typeSelected,
                    items: items
                });
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getAllData (params) {
            return (0, _servicesDefault.default).getAllData(params.id, params.id);
        },
        getItems (type) {
            return this.data.data[type];
        },
        disabled () {
            return this.typeSelected.trim().length === 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../../services":"R5DpR","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fP1A9":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "_mdDialogContainer",
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
            _vm._v("\n    Select type\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "_dialogContent"
        }, [
            _vm.appState === _vm.STATES.normal ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "type"
                        }
                    }, [
                        _vm._v("Type")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "type",
                            "id": "type"
                        },
                        model: {
                            value: _vm.typeSelected,
                            callback: function($$v) {
                                _vm.typeSelected = $$v;
                            },
                            expression: "typeSelected"
                        }
                    }, [
                        !_vm.data || _vm.data.types.length === 0 ? _c("md-option", {
                            attrs: {
                                "disabled": ""
                            }
                        }, [
                            _vm._v("No found")
                        ]) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.data.types, function(type, index) {
                            return _c("md-option", {
                                key: index,
                                attrs: {
                                    "value": type
                                }
                            }, [
                                _vm._v(_vm._s(type))
                            ]);
                        })
                    ], 2)
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.appState === _vm.STATES.loading ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm._e()
        ]),
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Save")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kY2So":[function() {},{}],"8K37M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"8KEaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPEN_PANEL_BTN", ()=>(0, _openPanelDefault.default));
parcelHelpers.export(exports, "OPEN_CONFIGURATION_PANEL", ()=>(0, _openConfigurationDefault.default));
var _openPanel = require("./openPanel");
var _openPanelDefault = parcelHelpers.interopDefault(_openPanel);
var _openConfiguration = require("./openConfiguration");
var _openConfigurationDefault = parcelHelpers.interopDefault(_openConfiguration);

},{"./openPanel":"3OUeF","./openConfiguration":"56tJp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OUeF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
class OpenAttributeManagerPanel extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("open attribute manager panel", "open attribute manager panel", {
            icon: "power_input",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action(option) {
        let params = {
            nodeSelected: option.selectedNode.get(),
            context: option.context.get()
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("attributeManagerPanel", params);
    }
}
exports.default = OpenAttributeManagerPanel;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56tJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _services = require("../services");
class OpenConfigurationPanel extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("open configuration manager panel", "open configuration manager panel", {
            icon: "settings_applications",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const nodeType = option.context.type.get();
        const configContextType = `${(0, _services.spinalConfigurationService).CONFIGURATION_PROFIL_TYPE}GroupContext`;
        if (nodeType === configContextType) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const contextInfo = option.context.get();
        const selectedNode = option.selectedNode.get();
        let params = {};
        if (contextInfo.id !== selectedNode.id) params = await (0, _services.spinalConfigurationService).getTree(selectedNode);
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("configurationPanel", params);
    }
} // const getValues = async (info) => {
 //   if (spinalConfigurationService.isCategory(info.type)) {
 //     obj.categoryId = info.id;
 //   } else if (spinalConfigurationService.isGroup(info.type)) {
 //   } else if (spinalConfigurationService.CONFIGURATION_PROFIL_TYPE === info
 //     .type) {
 //   }
 // }
exports.default = OpenConfigurationPanel;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","../services":"R5DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7FZOz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPEN_SELECT_TYPE_BTN", ()=>(0, _openSelectTypeDefault.default));
var _openSelectType = require("./openSelectType");
var _openSelectTypeDefault = parcelHelpers.interopDefault(_openSelectType);

},{"./openSelectType":"jt53V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jt53V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class OpenSelectTypePanel extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("open Generate group  panel", "open Generate group panel", {
            icon: "select_all",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalContext)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("selectTypeDialog", option.selectedNode.get());
    }
}
exports.default = OpenSelectTypePanel;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-attribute-manager.d55131e7.js.map
