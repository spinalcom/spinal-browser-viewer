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
})({"4IrFb":[function(require,module,exports) {
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
exports.SpinalEventService = exports.SpinalEvent = void 0;
const TaskService_1 = require("6f06e9eaff7c6e24");
Object.defineProperty(exports, "SpinalEventService", {
    enumerable: true,
    get: function() {
        return TaskService_1.SpinalEventService;
    }
});
const SpinalEvent_1 = require("aa63e3d126b86def");
Object.defineProperty(exports, "SpinalEvent", {
    enumerable: true,
    get: function() {
        return SpinalEvent_1.SpinalEvent;
    }
});
__exportStar(require("37da737fa6557d0a"), exports);
__exportStar(require("bd0f8a3e7cc634b9"), exports);
const globalRoot = typeof window === "undefined" ? global : window;
if (typeof globalRoot.spinal === "undefined") globalRoot.spinal = {};
if (typeof globalRoot.spinal.SpinalEventService === "undefined") globalRoot.spinal.SpinalEventService = TaskService_1.SpinalEventService;

},{"6f06e9eaff7c6e24":"3zSiz","aa63e3d126b86def":"69h2I","37da737fa6557d0a":"8p09c","bd0f8a3e7cc634b9":"f3R02"}],"3zSiz":[function(require,module,exports) {
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
exports.SpinalEventService = void 0;
const spinal_core_connectorjs_type_1 = require("c05da74610e26652");
const spinal_env_viewer_graph_service_1 = require("eb7e7d304d558c5c");
const spinal_env_viewer_plugin_group_manager_service_1 = require("5c6269aebd6c81bd");
const SpinalEvent_1 = require("be0113b4be10c44e");
const constants_1 = require("1f4da0a022a26bf2");
const EventInterface_1 = require("8e3099526ef765be");
const spinal_env_viewer_plugin_documentation_service_1 = require("35a9bce87828a955");
const moment = require("13919abdd1eb4de9");
class SpinalEventService {
    ///////////////////////////////////////////////////////////////////////
    //                          CONTEXTS                                 //
    ///////////////////////////////////////////////////////////////////////
    static createEventContext(name, steps, graph) {
        steps = steps || [];
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.createGroupContext(name, SpinalEvent_1.SpinalEvent.EVENT_TYPE, graph).then((context)=>{
            context.info.add_attr({
                steps: new spinal_core_connectorjs_type_1.Ptr(new spinal_core_connectorjs_type_1.Lst(steps))
            });
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(context.getId().get());
        });
    }
    static getEventContexts(graph) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroupContexts(SpinalEvent_1.SpinalEvent.EVENT_TYPE, graph).then((contexts)=>{
            return contexts.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.id));
        });
    }
    ///////////////////////////////////////////////////////////////////////
    //                          CATEGORIES                               //
    ///////////////////////////////////////////////////////////////////////
    static getEventsCategories(nodeId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getCategories(nodeId);
    }
    static createEventCategory(contextId, name, icon) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addCategory(contextId, name, icon).then((node)=>__awaiter(this, void 0, void 0, function*() {
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                const id = node.getId().get();
                const steps = yield this._getSteps(id);
                const promises = steps.map((el)=>this._createGroupNode(contextId, id, el.name, el.color, el.order));
                return Promise.all(promises).then(()=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(id));
            }));
    }
    ///////////////////////////////////////////////////////////////////////
    //                             STEPS                                 //
    ///////////////////////////////////////////////////////////////////////
    static createEventGroup(contextId, catgoryId, name, color) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addGroup(contextId, catgoryId, name, color).then((node)=>{
            //@ts-ignore
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(node.getId().get());
        });
    }
    static getEventsGroups(nodeId) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroups(nodeId);
    }
    static getFirstStep(nodeId) {
        return this.getEventsGroups(nodeId).then((steps)=>{
            return steps.find((el)=>el.order.get() === 0);
        });
    }
    ///////////////////////////////////////////////////////////////////////
    //                             Events                                 //
    ///////////////////////////////////////////////////////////////////////
    static createEventBetween(begin, end, periodicity, contextId, groupId, nodeId, eventInfo, userInfo) {
        const dates = this._getDateInterval(begin, end, periodicity);
        const reference = Date.now();
        const isoEndDate = new Date(eventInfo.endDate).toISOString();
        const isoStartDate = new Date(eventInfo.startDate).toISOString();
        const diff = moment(isoEndDate).diff(moment(isoStartDate)).valueOf();
        const promises = dates.map((el)=>{
            const isoEl = new Date(el).toISOString();
            const temp_obj = Object.assign(Object.assign({}, eventInfo), {
                startDate: moment(isoEl).format("LLLL"),
                endDate: moment(isoEl).add(diff, "milliseconds").format("LLLL"),
                reference
            });
            return this.createEventNode(contextId, groupId, nodeId, temp_obj, userInfo);
        });
        return Promise.all(promises);
    }
    static createEvent(contextId, groupId, nodeId, eventInfo, userInfo) {
        if (eventInfo.repeat) {
            const periodicity = eventInfo.periodicity.count * eventInfo.periodicity.period;
            return this.createEventBetween(eventInfo.startDate, eventInfo.repeatEnd, periodicity, contextId, groupId, nodeId, eventInfo, userInfo);
        } else return this.createEventNode(contextId, groupId, nodeId, eventInfo, userInfo);
    }
    static getEvents(nodeId, start, end) {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
                constants_1.RELATION_NAME
            ]);
            if (start && end) return children.filter((event)=>{
                const isoDate = new Date(event.startDate.get()).toISOString();
                const date = moment(isoDate);
                return date.isSameOrAfter(start.getTime()) && date.isSameOrBefore(end.getTime());
            });
            else if (start && !end) return children.filter((event)=>{
                const isoDate = new Date(event.startDate.get()).toISOString();
                const date = moment(isoDate);
                return date.isSameOrAfter(start.getTime());
            });
            else if (!start && end) return children.filter((event)=>{
                const isoDate = new Date(event.startDate.get()).toISOString();
                const date = moment(isoDate);
                return date.isSameOrBefore(end.getTime());
            });
            else return children;
        });
    }
    static updateEvent(eventId, newEventInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            this._updateEventInformation(eventId, newEventInfo);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(eventId);
        });
    }
    static removeEvent(eventId) {
        return __awaiter(this, void 0, void 0, function*() {
            const groupInfo = yield this._getGroupId(eventId);
            if (groupInfo) return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.unLinkElementToGroup(groupInfo.id.get(), eventId).then(()=>__awaiter(this, void 0, void 0, function*() {
                    const nodeInfo = yield this._getNodeId(eventId);
                    if (nodeInfo) return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(nodeInfo.id.get(), eventId, constants_1.RELATION_NAME, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                }));
        });
    }
    static createOrgetDefaultTreeStructure(graph) {
        return __awaiter(this, void 0, void 0, function*() {
            const context = yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.createGroupContext(constants_1.DEFAULT_CONTEXT_NAME, SpinalEvent_1.SpinalEvent.EVENT_TYPE, graph);
            const contextId = context.getId().get();
            const category = yield this.createEventCategory(contextId, constants_1.DEFAULT_CATEGORY_NAME, "");
            const group = yield this.createEventGroup(contextId, category.id.get(), constants_1.DEFAULT_GROUP_NAME, "#fff000");
            return {
                context: spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId),
                category,
                group
            };
        });
    }
    ///////////////////////////////////////////////////////////////////////
    //                             LOGS                                  //
    ///////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    //                              PRIVATES                               //
    /////////////////////////////////////////////////////////////////////////
    static _updateEventInformation(eventId, newEventInfo) {
        const event = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(eventId);
        if (typeof event === "undefined") return;
        for(const key in newEventInfo)if (Object.prototype.hasOwnProperty.call(newEventInfo, key)) {
            if (event.info[key]) event.info.mod_attr(key, newEventInfo[key]);
            else event.info.add_attr({
                [key]: newEventInfo[key]
            });
        }
    }
    static _getSteps(contextId) {
        return new Promise((resolve)=>{
            const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId);
            if (!info.steps) return resolve([]);
            info.steps.load((data)=>{
                resolve(data.get());
            });
        });
    }
    static _createGroupNode(contextId, categoryId, name, color, order) {
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addGroup(contextId, categoryId, name, color);
    }
    static _getDateInterval(begin, end, interval) {
        const dates = [];
        const beginDate = new Date(begin).toISOString();
        const endDate = new Date(end).toISOString();
        let tempBegin = moment(beginDate);
        let tempEnd = moment(endDate);
        while(tempEnd.diff(tempBegin) >= 0){
            dates.push(tempBegin.valueOf());
            tempBegin = tempBegin.add(interval, "ms");
        }
        return dates;
    }
    static createEventNode(contextId, groupId, nodeId, eventInfo, userInfo) {
        if (!eventInfo.repeat) {
            delete eventInfo.periodicity;
            delete eventInfo.repeatEnd;
        }
        if (eventInfo.startDate) {
            let date = new Date(eventInfo.startDate).toISOString();
            eventInfo.startDate = moment(date).format("LLLL");
        }
        if (eventInfo.endDate) {
            let date = new Date(eventInfo.endDate).toISOString();
            eventInfo.endDate = moment(date).format("LLLL");
        }
        if (eventInfo.creationDate) {
            let date = new Date(eventInfo.creationDate).toISOString();
            eventInfo.creationDate = moment(date).format("LLLL");
        }
        if (eventInfo.repeatEnd) {
            let date = new Date(eventInfo.repeatEnd).toISOString();
            eventInfo.repeatEnd = moment(date).format("LLLL");
        }
        eventInfo.contextId = contextId;
        eventInfo.groupId = groupId;
        eventInfo.nodeId = nodeId;
        eventInfo.type = SpinalEvent_1.SpinalEvent.EVENT_TYPE;
        eventInfo.user = userInfo;
        // const taskModel = new SpinalEvent(eventInfo);
        const eventId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(eventInfo, new spinal_core_connectorjs_type_1.Model());
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.linkElementToGroup(contextId, groupId, eventId).then((result)=>__awaiter(this, void 0, void 0, function*() {
                yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(nodeId, eventId, constants_1.RELATION_NAME, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                yield this.createAttribute(eventId);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(eventId);
            }));
    }
    static createAttribute(nodeId) {
        const categoryName = "default";
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        return spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addCategoryAttribute(realNode, categoryName).then((attributeCategory)=>{
            const promises = [];
            promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(realNode, attributeCategory, "name", realNode.info.name));
            const attributes = [
                "startDate",
                "endDate",
                "creationDate",
                "repeatEnd"
            ];
            for (const key of attributes)if (realNode.info[key]) // const date = moment(realNode.info[key].get()).format('LL')
            promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(realNode, attributeCategory, key, realNode.info[key]));
            if (realNode.info.periodicity) {
                const value = `${realNode.info.periodicity.count.get()} ${EventInterface_1.invers_period[realNode.info.periodicity.period.get()]}`;
                promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(realNode, attributeCategory, "periodicity", value));
            }
            return Promise.all(promises);
        });
    }
    static _getGroupId(eventId) {
        return __awaiter(this, void 0, void 0, function*() {
            const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(eventId);
            let groupInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(info.groupId);
            if (groupInfo) return groupInfo;
            const parents = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(eventId, [
                `groupHas${constants_1.EVENT_TYPE}`
            ]);
            return parents.find((el)=>el.id.get() === info.groupId.get());
        });
    }
    static _getNodeId(eventId) {
        return __awaiter(this, void 0, void 0, function*() {
            const info = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(eventId);
            let nodeInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(info.nodeId);
            if (nodeInfo) return nodeInfo;
            const parents = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(eventId, [
                constants_1.RELATION_NAME
            ]);
            return parents.find((el)=>el.id.get() === info.nodeId.get());
        });
    }
}
exports.SpinalEventService = SpinalEventService;

},{"c05da74610e26652":"fRH70","eb7e7d304d558c5c":"9n7zp","5c6269aebd6c81bd":"tSLpq","be0113b4be10c44e":"69h2I","1f4da0a022a26bf2":"8p09c","8e3099526ef765be":"f3R02","35a9bce87828a955":"5rYVR","13919abdd1eb4de9":"jwcsj"}],"69h2I":[function(require,module,exports) {
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
exports.SpinalEvent = void 0;
const spinal_core_connectorjs_type_1 = require("b406bad08e8f3bf4");
const moment = require("19e568cf1fbfbe9d");
class SpinalEvent extends spinal_core_connectorjs_type_1.Model {
    constructor(task){
        super();
        if (!!task) {
            task.creationDate = moment(Date.now()).format("LLLL");
            task.done = false;
            this.add_attr(task);
        }
    }
}
exports.SpinalEvent = SpinalEvent;
SpinalEvent.EVENT_TYPE = "SpinalEvent";
spinal_core_connectorjs_type_1.spinalCore.register_models(SpinalEvent);

},{"b406bad08e8f3bf4":"fRH70","19e568cf1fbfbe9d":"jwcsj"}],"8p09c":[function(require,module,exports) {
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
exports.RELATION_NAME = exports.EVENT_TYPE = exports.CONTEXT_TYPE = exports.DEFAULT_GROUP_NAME = exports.DEFAULT_CATEGORY_NAME = exports.DEFAULT_CONTEXT_NAME = void 0;
const SpinalEvent_1 = require("16e2e0a74a768b3f");
exports.DEFAULT_CONTEXT_NAME = "Default_event_context";
exports.DEFAULT_CATEGORY_NAME = "Default_category";
exports.DEFAULT_GROUP_NAME = "Default_group";
exports.CONTEXT_TYPE = `${SpinalEvent_1.SpinalEvent.EVENT_TYPE}GroupContext`;
exports.EVENT_TYPE = "SpinalEvent";
exports.RELATION_NAME = "hasEvent";

},{"16e2e0a74a768b3f":"69h2I"}],"f3R02":[function(require,module,exports) {
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
exports.invers_period = exports.Period = void 0;
exports.Period = Object.freeze({
    day: 86400000,
    week: 604800000,
    month: 2629800000,
    year: 31557600000
});
exports.invers_period = Object.freeze({
    86400000: "day",
    604800000: "week",
    2629800000: "month",
    31557600000: "year"
});

},{}],"eV0id":[function(require,module,exports) {
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

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=dist.bf23f9d4.js.map
