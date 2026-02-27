// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"gdJwR":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
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
exports.spinalServiceTicket = exports.serviceTicketPersonalized = void 0;
// import { ServiceTicket } from './ServiceTicket';
const ServiceTicket_1 = require("e88dd105af6ef26d");
const serviceTicketPersonalized = new ServiceTicket_1.ServiceTicket();
exports.serviceTicketPersonalized = serviceTicketPersonalized;
const gRoot = typeof window === 'undefined' ? global : window;
if (typeof gRoot.spinal === 'undefined') gRoot.spinal = {};
if (typeof gRoot.spinal.SpinalServiceTicket === 'undefined') {
    gRoot.spinal.spinalServiceTicket = serviceTicketPersonalized;
    gRoot.spinal.serviceTicketPersonalized = serviceTicketPersonalized;
}
// tslint:disable-next-line:variable-name
const spinalServiceTicket = serviceTicketPersonalized;
exports.spinalServiceTicket = spinalServiceTicket;
__exportStar(require("d2cb0826984d670"), exports);
__exportStar(require("1326d1e177fc05d6"), exports);
__exportStar(require("fa3bd7211b9fddb"), exports);
__exportStar(require("96f6b39da68b3342"), exports);
__exportStar(require("e7d13c20df2f7bdf"), exports);
__exportStar(require("f4df1ad0caef2403"), exports);
__exportStar(require("53f17a8a74e0d610"), exports);
__exportStar(require("185f050df204f10"), exports);
__exportStar(require("8ee35da2a116202c"), exports);

},{"e88dd105af6ef26d":"dyvOf","d2cb0826984d670":"j9ikR","1326d1e177fc05d6":"dbVCF","fa3bd7211b9fddb":"31mbb","96f6b39da68b3342":"bBKkl","e7d13c20df2f7bdf":"4GzV5","f4df1ad0caef2403":"16m8x","53f17a8a74e0d610":"gFWgi","185f050df204f10":"lwjPE","8ee35da2a116202c":"651Yg"}],"dyvOf":[function(require,module,exports,__globalThis) {
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
exports.ServiceTicket = void 0;
const GraphService_1 = require("3ea7e052f822efc7");
const createTicketContext_1 = require("dd191f87a7a0db78");
const getTicketContexts_1 = require("4c1035024fa4463");
const updateTicketContexts_1 = require("dcedd88cab5cbea7");
const createTicketProcess_1 = require("a32594b44397d1be");
const getAllTicketProcess_1 = require("2600047c7c86c7b7");
const createStepToProcess_1 = require("9c443baa4630e20b");
const removeStepFromProcess_1 = require("6b8f90bcbe4b5d5c");
const addStepNodeToProcess_1 = require("8827b704a57ba1c8");
const getStepNodesFromProcess_1 = require("c7971865dca363be");
const getFirstStepNode_1 = require("2da1ef91bcc3bf0a");
const getNextStepNode_1 = require("393424e0d7a8952b");
const getPreviousStepNode_1 = require("c7df9d79099836fd");
const getSuperiorsStepNodes_1 = require("cbab9ec0827ad1ab");
const getInferiorsStepNodes_1 = require("79e65dc1a1a37903");
const insertStepNode_1 = require("4411cacf15a9c026");
const addTicket_1 = require("b1042061b4f814b9");
const getTicketsFromNode_1 = require("89927c7d7e2f4f18");
const getAlarmsFromNode_1 = require("272c03f502292c86");
const getTicketsFromStep_1 = require("106bcd8812ffdf68");
const getProcessFromTicket_1 = require("f0efc3e629453a07");
const moveTicketNode_1 = require("b288ca2870a90ffc");
const moveTicketToStep_1 = require("c6a9a5c75b588a06");
const moveTicketToNextStep_1 = require("3c495e4cdfcc0063");
const moveTicketToPreviousStep_1 = require("8091a35fd723c1ab");
const archiveTickets_1 = require("63883919412beef6");
const unarchiveTicket_1 = require("2511e32b32eda5fa");
const getTicketContextId_1 = require("a4bebad4ef96eb3b");
const changeTicketProcess_1 = require("84fbd7cd52bacbd8");
const changeTicketNodeTarget_1 = require("32d8c7f50a45d312");
const addLogToTicketNode_1 = require("78ac1ffa8d20221d");
const createTicketLog_1 = require("c096f597fd203652");
const getTicketLogs_1 = require("6c3cbf6ad91bb052");
const addCommonIncident_1 = require("2c248638ae8fecfd");
const getCommonIncident_1 = require("55453860b44ceb");
const getTicketsFromArchive_1 = require("a36b52982055533b");
const deleteTicketFromArchive_1 = require("e0f16e0350d2d518");
const updateArchivePartData_1 = require("2b872e781aa321ba");
const archiveTicketFromProcess_1 = require("d03bdb87cc59c321");
const archiveTicketFromSpatial_1 = require("c8b5d3e4c80b6841");
class ServiceTicket {
    constructor(){}
    //////////////////////////////////////////////////////////
    //                      CONTEXTS                        //
    //////////////////////////////////////////////////////////
    createContext(contextName, steps = new Array(), contextSubType = 'Ticket') {
        return (0, createTicketContext_1.createTicketContext)(contextName, steps, contextSubType);
    }
    getContexts(name) {
        return __awaiter(this, void 0, void 0, function*() {
            const contexts = yield (0, getTicketContexts_1.getTicketContexts)(name);
            return Array.isArray(contexts) ? contexts.map((el)=>el.info.get()) : contexts;
        });
    }
    updateContexts(contextId, newInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            const contextNode = (0, GraphService_1.graphServiceGetRealNode)(contextId);
            return (0, updateTicketContexts_1.updateTicketContexts)(contextNode, newInfo);
        });
    }
    //////////////////////////////////////////////////////////
    //                      PROCESS                         //
    //////////////////////////////////////////////////////////
    createProcess(process, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = yield (0, createTicketProcess_1.createTicketProcess)(process, (0, GraphService_1.graphServiceGetRealNode)(contextId));
            (0, GraphService_1.graphServiceAddNode)(res);
            return res.info.id.get();
        });
    }
    getAllProcess(contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = yield (0, getAllTicketProcess_1.getAllTicketProcess)((0, GraphService_1.graphServiceGetRealNode)(contextId));
            return res.map((node)=>(0, GraphService_1.graphServiceGetRef)(node));
        });
    }
    //////////////////////////////////////////////////////////
    //                      STEPS                           //
    //////////////////////////////////////////////////////////
    addStep(processId, contextId, name, color, order) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = yield (0, createStepToProcess_1.createStepToProcess)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId), name, color, order);
            (0, GraphService_1.graphServiceAddNode)(res);
            return res.info.id.get();
        });
    }
    removeStep(processId, contextId, stepId) {
        return __awaiter(this, void 0, void 0, function*() {
            const res = yield (0, removeStepFromProcess_1.removeStepFromProcess)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(stepId));
            (0, GraphService_1.graphServiceAddNode)(res);
            return res.info.id.get();
        });
    }
    addStepById(stepId, processId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, addStepNodeToProcess_1.addStepNodeToProcess)((0, GraphService_1.graphServiceGetRealNode)(stepId), (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
        });
    }
    getStepsFromProcess(processId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
            return data.map((step)=>{
                return (0, GraphService_1.graphServiceGetRef)(step);
            });
        });
    }
    getFirstStep(processId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const step = yield (0, getFirstStepNode_1.getFirstStepNode)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
            (0, GraphService_1.graphServiceAddNode)(step);
            return step.info.id.get();
        });
    }
    getNextStep(processId, stepId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const step = yield (0, getNextStepNode_1.getNextStepNode)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(stepId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
            if (step) return (0, GraphService_1.graphServiceGetRef)(step);
        });
    }
    getPreviousStep(processId, stepId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const step = yield (0, getPreviousStepNode_1.getPreviousStepNode)((0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(stepId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
            if (step) return (0, GraphService_1.graphServiceGetRef)(step);
        });
    }
    getSuperiorsSteps(contextId, processId, stepOrder, equals = false) {
        return __awaiter(this, void 0, void 0, function*() {
            const steps = yield (0, getSuperiorsStepNodes_1.getSuperiorsStepNodes)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), stepOrder, equals);
            return steps.map((step)=>(0, GraphService_1.graphServiceGetInfo)(step));
        });
    }
    getInferiorsSteps(contextId, processId, stepOrder, equals = false) {
        return __awaiter(this, void 0, void 0, function*() {
            const steps = yield (0, getInferiorsStepNodes_1.getInferiorsStepNodes)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), stepOrder, equals);
            return steps.map((step)=>(0, GraphService_1.graphServiceGetInfo)(step));
        });
    }
    insertStep(contextId, processId, stepInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            const stepNode = yield (0, insertStepNode_1.insertStepNode)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), stepInfo);
            (0, GraphService_1.graphServiceAddNode)(stepNode);
            return stepNode.info.id.get();
        });
    }
    //////////////////////////////////////////////////////////
    //                      TICKETS                         //
    //////////////////////////////////////////////////////////
    addTicket(ticketInfo, processId, contextId, nodeId, ticketType = 'Ticket') {
        return __awaiter(this, void 0, void 0, function*() {
            const ticketNode = yield (0, addTicket_1.addTicket)(ticketInfo, (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(nodeId), ticketType);
            (0, GraphService_1.graphServiceAddNode)(ticketNode);
            return ticketNode.info.id.get();
        });
    }
    getTicketsFromNode(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getTicketsFromNode_1.getTicketsFromNode)((0, GraphService_1.graphServiceGetRealNode)(nodeId));
            return data.map((ticket)=>{
                return (0, GraphService_1.graphServiceGetInfo)(ticket);
            });
        });
    }
    getAlarmsFromNode(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getAlarmsFromNode_1.getAlarmsFromNode)((0, GraphService_1.graphServiceGetRealNode)(nodeId));
            return data.map((alarm)=>(0, GraphService_1.graphServiceGetInfo)(alarm));
        });
    }
    getTicketsFromStep(stepId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getTicketsFromStep_1.getTicketsFromStep)((0, GraphService_1.graphServiceGetRealNode)(stepId));
            return data.map((ticket)=>(0, GraphService_1.graphServiceGetRef)(ticket));
        });
    }
    getTicketProcess(ticketId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getProcessFromTicket_1.getProcessFromTicket)((0, GraphService_1.graphServiceGetRealNode)(ticketId));
            (0, GraphService_1.graphServiceAddNode)(data);
            return data;
        });
    }
    moveTicket(ticketId, stepFromId, stepToId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, moveTicketNode_1.moveTicketNode)((0, GraphService_1.graphServiceGetRealNode)(ticketId), (0, GraphService_1.graphServiceGetRealNode)(stepFromId), (0, GraphService_1.graphServiceGetRealNode)(stepToId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
        });
    }
    moveTicketToStep(ticketId, stepFromId, stepToId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, moveTicketToStep_1.moveTicketToStep)((0, GraphService_1.graphServiceGetRealNode)(ticketId), (0, GraphService_1.graphServiceGetRealNode)(stepFromId), (0, GraphService_1.graphServiceGetRealNode)(stepToId), (0, GraphService_1.graphServiceGetRealNode)(contextId));
        });
    }
    moveTicketToNextStep(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, moveTicketToNextStep_1.moveTicketToNextStep)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(ticketId), userInfo);
            return (0, GraphService_1.graphServiceGetInfo)(data);
        });
    }
    moveTicketToPreviousStep(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, moveTicketToPreviousStep_1.moveTicketToPreviousStep)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(ticketId), userInfo);
            return (0, GraphService_1.graphServiceGetInfo)(data);
        });
    }
    ArchiveTickets(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, archiveTickets_1.archiveTickets)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(ticketId), userInfo);
            return (0, GraphService_1.graphServiceGetInfo)(data);
        });
    }
    unarchiveTicket(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, unarchiveTicket_1.unarchiveTicket)((0, GraphService_1.graphServiceGetRealNode)(contextId), (0, GraphService_1.graphServiceGetRealNode)(processId), (0, GraphService_1.graphServiceGetRealNode)(ticketId), userInfo);
            return (0, GraphService_1.graphServiceGetInfo)(data);
        });
    }
    unlinkTicketToProcess(ticketId) {}
    getTicketContextId(ticketId) {
        return (0, getTicketContextId_1.getTicketContextId)((0, GraphService_1.graphServiceGetRealNode)(ticketId));
    }
    changeTicketProcess(ticketId, newProcessId, newContextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, changeTicketProcess_1.changeTicketProcess)((0, GraphService_1.graphServiceGetRealNode)(ticketId), (0, GraphService_1.graphServiceGetRealNode)(newProcessId), (0, GraphService_1.graphServiceGetRealNode)(newContextId));
            (0, GraphService_1.graphServiceAddNode)(data);
            return data.info.id.get();
        });
    }
    /**
     * Changes the target node of a ticket element.
     * e.g change the room linked to a ticket.
     * @param {string} ticketId
     * @param {string} newElementId
     * @return {*}
     * @memberof ServiceTicket
     */ changeTicketElementNode(ticketId, newElementId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, changeTicketNodeTarget_1.changeTicketNodeTarget)((0, GraphService_1.graphServiceGetRealNode)(ticketId), (0, GraphService_1.graphServiceGetRealNode)(newElementId));
            (0, GraphService_1.graphServiceAddNode)(data);
            return data.info.id.get();
        });
    }
    //////////////////////////////////////////////////////////
    //                      LOGS                            //
    //////////////////////////////////////////////////////////
    addLogToTicket(ticketId, event, userInfo = {}, fromId, toId) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, addLogToTicketNode_1.addLogToTicketNode)((0, GraphService_1.graphServiceGetRealNode)(ticketId), event, userInfo, fromId, toId);
                (0, GraphService_1.graphServiceAddNode)(data);
                return true;
            } catch (error) {
                return false;
            }
        });
    }
    createLog(info) {
        const data = (0, createTicketLog_1.createTicketLog)(info);
        (0, GraphService_1.graphServiceAddNode)(data);
        return data.info.id.get();
    }
    getLogs(ticketId) {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, getTicketLogs_1.getTicketLogs)((0, GraphService_1.graphServiceGetRealNode)(ticketId));
        });
    }
    //////////////////////////////////////////////////////////
    //                      COMMON INCIDENT                 //
    //////////////////////////////////////////////////////////
    addCommonIncident(processId, sentence) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, addCommonIncident_1.addCommonIncident)((0, GraphService_1.graphServiceGetRealNode)(processId), sentence);
            (0, GraphService_1.graphServiceAddNode)(data);
            return data.info.id.get();
        });
    }
    getCommonIncident(processId) {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield (0, getCommonIncident_1.getCommonIncident)((0, GraphService_1.graphServiceGetRealNode)(processId));
            return data.map((incident)=>{
                return (0, GraphService_1.graphServiceGetInfo)(incident);
            });
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //                                              ARCHIVE                                         //
    //////////////////////////////////////////////////////////////////////////////////////////////////
    getTicketsFromArchive(processOrSpatialNode, begin, end) {
        return __awaiter(this, void 0, void 0, function*() {
            processOrSpatialNode = typeof processOrSpatialNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(processOrSpatialNode) : processOrSpatialNode;
            return (0, getTicketsFromArchive_1.getTicketsFromArchive)(processOrSpatialNode, begin, end);
        });
    }
    deleteTicketFromArchive(processOrSpatialNode, begin, end) {
        return __awaiter(this, void 0, void 0, function*() {
            processOrSpatialNode = typeof processOrSpatialNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(processOrSpatialNode) : processOrSpatialNode;
            if (!processOrSpatialNode) throw new Error("deleteTicketFromArchive process or spatial node ID given don't exist in graph service.");
            return (0, deleteTicketFromArchive_1.deleteTicketFromArchive)(processOrSpatialNode, begin, end);
        });
    }
    updateArchivePartData(archivePart, archiveTicketNode, timeStampAttr) {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, updateArchivePartData_1.updateArchivePartData)(archivePart, archiveTicketNode, timeStampAttr);
        });
    }
    archiveTicketFromProcess(ticketNode, processNode, date, maxArchiveSize = 200) {
        ticketNode = typeof ticketNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(ticketNode) : ticketNode;
        processNode = typeof processNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(processNode) : processNode;
        if (!processNode) throw new Error("archiveTicket process node ID given don't exist in graph service.");
        return (0, archiveTicketFromProcess_1.archiveTicketFromProcess)(ticketNode, processNode, date, maxArchiveSize);
    }
    archiveTicketFromSpatial(ticketNode, spatialNode, date, maxArchiveSize = 200) {
        ticketNode = typeof ticketNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(ticketNode) : ticketNode;
        spatialNode = typeof spatialNode === 'string' ? (0, GraphService_1.graphServiceGetRealNode)(spatialNode) : spatialNode;
        if (!spatialNode) throw new Error("archiveTicket spatial node ID given don't exist in graph service.");
        return (0, archiveTicketFromSpatial_1.archiveTicketFromSpatial)(ticketNode, spatialNode, date, maxArchiveSize);
    }
}
exports.ServiceTicket = ServiceTicket;

},{"3ea7e052f822efc7":"bBm6k","dd191f87a7a0db78":"Rvjci","4c1035024fa4463":"3IQdH","dcedd88cab5cbea7":"afofC","a32594b44397d1be":"a3s4Z","2600047c7c86c7b7":"5GWpl","9c443baa4630e20b":"3Bmy7","6b8f90bcbe4b5d5c":"eo6bh","8827b704a57ba1c8":"fh39q","c7971865dca363be":"Xxr5A","2da1ef91bcc3bf0a":"gyZ0m","393424e0d7a8952b":"aEYk9","c7df9d79099836fd":"Q5UBD","cbab9ec0827ad1ab":"2jVUB","79e65dc1a1a37903":"g2Ecu","4411cacf15a9c026":"6ISf5","b1042061b4f814b9":"hFp4w","89927c7d7e2f4f18":"dKXX1","272c03f502292c86":"aE5EG","106bcd8812ffdf68":"hV4Ac","f0efc3e629453a07":"gW20p","b288ca2870a90ffc":"hIjJq","c6a9a5c75b588a06":"9wvPo","3c495e4cdfcc0063":"g6n6v","8091a35fd723c1ab":"cRvaP","63883919412beef6":"dFzqg","2511e32b32eda5fa":"7jWXo","a4bebad4ef96eb3b":"dJWya","84fbd7cd52bacbd8":"8vWzQ","32d8c7f50a45d312":"gdsSB","78ac1ffa8d20221d":"16rIu","c096f597fd203652":"5Kg2e","6c3cbf6ad91bb052":"4wuJB","2c248638ae8fecfd":"jYHep","55453860b44ceb":"j1kMm","a36b52982055533b":"kE7CU","e0f16e0350d2d518":"dhtkD","2b872e781aa321ba":"5Tyo3","d03bdb87cc59c321":"3BWG9","c8b5d3e4c80b6841":"dnqs6"}],"bBm6k":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.graphServiceGetRealNode = exports.graphServiceGetInfo = exports.graphServiceGetRef = exports.graphServiceAddNode = exports.graphServiceGetContextWithType = exports.graphServiceAddContext = exports.graphServiceGetGraph = void 0;
const spinal_env_viewer_graph_service_1 = require("70b48375841fef2e");
const spinal_model_graph_1 = require("ad1c3c0d453e4693");
function graphServiceGetGraph() {
    return spinal_env_viewer_graph_service_1.SpinalGraphService.getGraph();
}
exports.graphServiceGetGraph = graphServiceGetGraph;
function graphServiceAddContext(contextName, contextType, elt) {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = graphServiceGetGraph();
        const context = new spinal_model_graph_1.SpinalContext(contextName, contextType, elt);
        yield graph.addContext(context);
        graphServiceAddNode(context);
        return context;
    });
}
exports.graphServiceAddContext = graphServiceAddContext;
function graphServiceGetContextWithType(contextType) {
    return __awaiter(this, void 0, void 0, function*() {
        const graph = graphServiceGetGraph();
        const contexts = yield graph.getChildren();
        return contexts.filter((context)=>context instanceof spinal_model_graph_1.SpinalContext && context.getType().get() === contextType);
    });
}
exports.graphServiceGetContextWithType = graphServiceGetContextWithType;
function graphServiceAddNode(node) {
    if (node) spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
}
exports.graphServiceAddNode = graphServiceAddNode;
function graphServiceGetRef(node) {
    if (node) {
        spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(node.info.id.get());
    }
}
exports.graphServiceGetRef = graphServiceGetRef;
function graphServiceGetInfo(node) {
    if (node) {
        spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
        return node.info.get();
    }
}
exports.graphServiceGetInfo = graphServiceGetInfo;
function graphServiceGetRealNode(id) {
    return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
}
exports.graphServiceGetRealNode = graphServiceGetRealNode;

},{"70b48375841fef2e":"9LAk7","ad1c3c0d453e4693":"b87gp"}],"Rvjci":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.createTicketContext = void 0;
const spinal_core_connectorjs_1 = require("6818e6f2ee57d4d0");
const GraphService_1 = require("34b8960c3d099d2d");
const Constants_1 = require("1785e78ebb60c193");
const Errors_1 = require("924e9238736552a5");
function createTicketContext(contextName, steps = new Array(), contextSubType = 'Ticket') {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const context = yield (0, GraphService_1.graphServiceAddContext)(contextName, Constants_1.SERVICE_TYPE);
            const stepsModel = new spinal_core_connectorjs_1.Lst(steps);
            context.info.add_attr('steps', new spinal_core_connectorjs_1.Ptr(stepsModel));
            if (Constants_1.TICKET_CONTEXT_SUBTYPE_LIST.includes(contextSubType)) context.info.add_attr('subType', contextSubType);
            return context;
        } catch (error) {
            throw new Error(Errors_1.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR);
        }
    });
}
exports.createTicketContext = createTicketContext;

},{"6818e6f2ee57d4d0":"cQPh9","34b8960c3d099d2d":"bBm6k","1785e78ebb60c193":"j9ikR","924e9238736552a5":"j1Kt9"}],"j1Kt9":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STEP_ORDER_NOT_VALID = exports.TICKET_SECTION_ALREADY_EXIST = exports.DEFAULT_SENTENCE_SECTION_ALREADY_EXIST = exports.TICKET_ID_DOES_NOT_EXIST = exports.STEP_ID_DOES_NOT_EXIST = exports.PROCESS_ID_DOES_NOT_EXIST = exports.CANNOT_ADD_STEP_TO_PROCESS = exports.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR = exports.CANNOT_CREATE_PROCESS_INTERNAL_ERROR = exports.PROCESS_NAME_ALREADY_USED = void 0;
const ERROR_PREFIX = 'Spinal Service Ticket Error: ';
exports.PROCESS_NAME_ALREADY_USED = ERROR_PREFIX + 'Process name already used';
exports.CANNOT_CREATE_PROCESS_INTERNAL_ERROR = ERROR_PREFIX + 'Internal error: cannot create process';
exports.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR = ERROR_PREFIX + 'Internal error: cannot create context';
exports.CANNOT_ADD_STEP_TO_PROCESS = ERROR_PREFIX + 'Internal error: cannot create context';
exports.PROCESS_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Process id doesn't exist";
exports.STEP_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Step id doesn't exist";
exports.TICKET_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Ticket id doesn't exist";
exports.DEFAULT_SENTENCE_SECTION_ALREADY_EXIST = ERROR_PREFIX + 'Default sentence section already exits';
exports.TICKET_SECTION_ALREADY_EXIST = ERROR_PREFIX + 'Ticket' + ' already exits';
exports.STEP_ORDER_NOT_VALID = ERROR_PREFIX + ' step order not valid';

},{}],"3IQdH":[function(require,module,exports,__globalThis) {
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
exports.getTicketContexts = void 0;
const GraphService_1 = require("c92481e620b4a805");
const Constants_1 = require("cfe05ffe4521b209");
function getTicketContexts(name) {
    return __awaiter(this, void 0, void 0, function*() {
        const contexts = yield (0, GraphService_1.graphServiceGetContextWithType)(Constants_1.SERVICE_TYPE);
        if (name && name.trim().length > 0) return contexts.find((el)=>el.info.name.get() === name);
        return contexts;
    });
}
exports.getTicketContexts = getTicketContexts;

},{"c92481e620b4a805":"bBm6k","cfe05ffe4521b209":"j9ikR"}],"afofC":[function(require,module,exports,__globalThis) {
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
exports.updateTicketContexts = void 0;
function updateTicketContexts(contextNode, newInfo) {
    return __awaiter(this, void 0, void 0, function*() {
        if (newInfo.name && newInfo.name.trim().length === 0) throw new Error('Context name must have at less 1 character');
        if (contextNode) {
            if (newInfo.name && newInfo.name.trim().length > 0) contextNode.info.name.set(newInfo.name);
        }
    });
}
exports.updateTicketContexts = updateTicketContexts;

},{}],"a3s4Z":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.createTicketProcess = void 0;
const spinal_model_graph_1 = require("9f6322ecc7e616b0");
const _initializeStepNode_1 = require("f4b04b8e2fe155e8");
const _createArchivedStep_1 = require("a81c64903508de15");
const Constants_1 = require("1a76727807e3626d");
const Errors_1 = require("3670d54b7c308e5a");
function createTicketProcess(processInfo, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        if (typeof processInfo === 'string') processInfo = {
            name: processInfo
        };
        try {
            processInfo.type = Constants_1.PROCESS_TYPE;
            const processNode = new spinal_model_graph_1.SpinalNode();
            for(const key in processInfo)if (Object.prototype.hasOwnProperty.call(processInfo, key)) {
                const element = processInfo[key];
                processNode.info.add_attr(key, element);
            }
            yield contextNodeTicket.addChildInContext(processNode, Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE, contextNodeTicket);
            const steps = yield getContextSteps(contextNodeTicket);
            for (const step of steps)yield (0, _initializeStepNode_1._initializeStepNode)(step.name.get(), step.color.get(), step.order.get(), processNode, contextNodeTicket);
            yield (0, _createArchivedStep_1._createArchivedStep)(processNode, contextNodeTicket);
            return processNode;
        } catch (e) {
            console.error(e);
            throw new Error(Errors_1.CANNOT_CREATE_PROCESS_INTERNAL_ERROR);
        }
    });
}
exports.createTicketProcess = createTicketProcess;
function getContextSteps(contextNodeTicket) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        if ((_a = contextNodeTicket === null || contextNodeTicket === void 0 ? void 0 : contextNodeTicket.info) === null || _a === void 0 ? void 0 : _a.steps) {
            const stepsLst = yield contextNodeTicket.info.steps.load();
            return Array.from(stepsLst);
        }
    });
}

},{"9f6322ecc7e616b0":"b87gp","f4b04b8e2fe155e8":"8fcSp","a81c64903508de15":"hjnJ6","1a76727807e3626d":"j9ikR","3670d54b7c308e5a":"j1Kt9"}],"8fcSp":[function(require,module,exports,__globalThis) {
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
exports._initializeStepNode = void 0;
const _modifyStepProcessId_1 = require("82f4476d10d77510");
const _createStepNode_1 = require("4ac208114d2f736f");
const Constants_1 = require("c1f61ed91d980c68");
const Errors_1 = require("e3eeabdcc3837c48");
function _initializeStepNode(name, color, order, processNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const stepNode = (0, _createStepNode_1._createStepNode)(name, color, order);
            yield processNode.addChildInContext(stepNode, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE, contextNodeTicket);
            yield (0, _modifyStepProcessId_1._modifyStepProcessId)(stepNode, processNode.info.id.get());
            return stepNode;
        } catch (e) {
            throw Error(Errors_1.CANNOT_ADD_STEP_TO_PROCESS + e);
        }
    });
}
exports._initializeStepNode = _initializeStepNode;

},{"82f4476d10d77510":"8styP","4ac208114d2f736f":"i8f5o","c1f61ed91d980c68":"j9ikR","e3eeabdcc3837c48":"j1Kt9"}],"8styP":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports._modifyStepProcessId = void 0;
function _modifyStepProcessId(stepNode, processId) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!stepNode.info.processId) stepNode.info.add_attr('processId', processId);
        else stepNode.info.processId.set(processId);
    });
}
exports._modifyStepProcessId = _modifyStepProcessId;

},{}],"i8f5o":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._createStepNode = void 0;
const spinal_model_graph_1 = require("f30d07e7d77ffc81");
const Constants_1 = require("aab57fe5b28da471");
function _createStepNode(name, color, order) {
    const node = new spinal_model_graph_1.SpinalNode(name, Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE);
    node.info.add_attr('color', color);
    node.info.add_attr('order', order);
    return node;
}
exports._createStepNode = _createStepNode;

},{"f30d07e7d77ffc81":"b87gp","aab57fe5b28da471":"j9ikR"}],"hjnJ6":[function(require,module,exports,__globalThis) {
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
exports._createArchivedStep = void 0;
const _initializeStepNode_1 = require("81beb1ed88279e2a");
const getStepNodesFromProcess_1 = require("db3aa5f207e0bd2a");
const Constants_1 = require("e939ac69076fa774");
function _createArchivedStep(processNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        const processSteps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        const found = processSteps.find((el)=>el.info.name.get() === Constants_1.ARCHIVED_STEP.name && el.info.order.get() === Constants_1.ARCHIVED_STEP.order);
        if (found) return found;
        return (0, _initializeStepNode_1._initializeStepNode)(Constants_1.ARCHIVED_STEP.name, Constants_1.ARCHIVED_STEP.color, Constants_1.ARCHIVED_STEP.order, processNode, contextNodeTicket);
    });
}
exports._createArchivedStep = _createArchivedStep;

},{"81beb1ed88279e2a":"8fcSp","db3aa5f207e0bd2a":"Xxr5A","e939ac69076fa774":"j9ikR"}],"Xxr5A":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStepNodesFromProcess = void 0;
function getStepNodesFromProcess(processNode, contextNodeTicket) {
    return processNode.getChildrenInContext(contextNodeTicket);
}
exports.getStepNodesFromProcess = getStepNodesFromProcess;

},{}],"5GWpl":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getAllTicketProcess = void 0;
function getAllTicketProcess(contextNodeTicket) {
    return contextNodeTicket.getChildrenInContext(contextNodeTicket);
}
exports.getAllTicketProcess = getAllTicketProcess;

},{}],"3Bmy7":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.createStepToProcess = void 0;
const getStepNodesFromProcess_1 = require("48b4567c5b763839");
const insertStepNode_1 = require("d7b58ff7bda7375f");
const _initializeStepNode_1 = require("1fa343ef9594b5b0");
function createStepToProcess(processNode, contextNodeTicket, name, color, order) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        const max = Math.max(...steps.map((el)=>el.info.order.get()));
        if (max === -Infinity) order = 0;
        else if (!order || max - order > 1) order = max + 1;
        if (order >= 0 && order <= max) return (0, insertStepNode_1.insertStepNode)(contextNodeTicket, processNode, {
            name,
            color,
            order
        });
        else return (0, _initializeStepNode_1._initializeStepNode)(name, color, order, processNode, contextNodeTicket);
    });
}
exports.createStepToProcess = createStepToProcess;

},{"48b4567c5b763839":"Xxr5A","d7b58ff7bda7375f":"6ISf5","1fa343ef9594b5b0":"8fcSp"}],"6ISf5":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.insertStepNode = void 0;
const _initializeStepNode_1 = require("6c3d6eccd25e40c9");
const getSuperiorsStepNodes_1 = require("bc1ddb8e3415301a");
function insertStepNode(contextNodeTicket, processNode, stepInfo) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getSuperiorsStepNodes_1.getSuperiorsStepNodes)(contextNodeTicket, processNode, stepInfo.order, true);
        const stepNode = yield (0, _initializeStepNode_1._initializeStepNode)(stepInfo.name, stepInfo.color, stepInfo.order, processNode, contextNodeTicket);
        for (const step of steps)step.info.order.set(step.info.order.get() + 1);
        return stepNode;
    });
}
exports.insertStepNode = insertStepNode;

},{"6c3d6eccd25e40c9":"8fcSp","bc1ddb8e3415301a":"2jVUB"}],"2jVUB":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getSuperiorsStepNodes = void 0;
const getStepNodesFromProcess_1 = require("9ba8ec390cb81350");
function getSuperiorsStepNodes(contextNodeTicket, processNode, stepOrder, equals = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        return steps.filter((step)=>{
            const order = step.info.order.get();
            if (equals && order === stepOrder) return true;
            return order > stepOrder;
        });
    });
}
exports.getSuperiorsStepNodes = getSuperiorsStepNodes;

},{"9ba8ec390cb81350":"Xxr5A"}],"eo6bh":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.removeStepFromProcess = void 0;
const getSuperiorsStepNodes_1 = require("9f27d2d6645d2e9b");
function removeStepFromProcess(processNode, contextNodeTicket, stepNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getSuperiorsStepNodes_1.getSuperiorsStepNodes)(contextNodeTicket, processNode, stepNode.info.order.get(), true);
        yield stepNode.removeFromGraph();
        for (const step of steps)step.info.order.set(step.info.order.get() - 1);
        return stepNode;
    });
}
exports.removeStepFromProcess = removeStepFromProcess;

},{"9f27d2d6645d2e9b":"2jVUB"}],"fh39q":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.addStepNodeToProcess = void 0;
const _modifyStepProcessId_1 = require("7baf46be92e1f16");
const Constants_1 = require("c3eac31946dd071c");
const Errors_1 = require("a404454b435c33ea");
function addStepNodeToProcess(stepNode, processNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            yield processNode.addChildInContext(stepNode, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE, contextNodeTicket);
            (0, _modifyStepProcessId_1._modifyStepProcessId)(stepNode, processNode.info.id.get());
        } catch (error) {
            throw Error(Errors_1.CANNOT_ADD_STEP_TO_PROCESS + error);
        }
    });
}
exports.addStepNodeToProcess = addStepNodeToProcess;

},{"7baf46be92e1f16":"8styP","c3eac31946dd071c":"j9ikR","a404454b435c33ea":"j1Kt9"}],"gyZ0m":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getFirstStepNode = void 0;
const getStepNodesFromProcess_1 = require("a46c72e665963c7e");
const addStepNodeToProcess_1 = require("a4fa3f9ab4074503");
const _createStepNode_1 = require("325e7be058dc318e");
const Constants_1 = require("b79e0dab7751bcb2");
function getFirstStepNode(processNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        let first = steps.find((el)=>el.info.order.get() == 0);
        if (first) return first;
        const defaultStep = Constants_1.DEFAULT_STEPS.find((it)=>it.order === 0);
        if (!defaultStep) throw Error('Default step not found from constants config');
        let stepNode = (0, _createStepNode_1._createStepNode)(defaultStep.name, defaultStep.color, defaultStep.order);
        yield (0, addStepNodeToProcess_1.addStepNodeToProcess)(stepNode, processNode, contextNodeTicket);
        return stepNode;
    });
}
exports.getFirstStepNode = getFirstStepNode;

},{"a46c72e665963c7e":"Xxr5A","a4fa3f9ab4074503":"fh39q","325e7be058dc318e":"i8f5o","b79e0dab7751bcb2":"j9ikR"}],"aEYk9":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getNextStepNodeByStepId = exports.getNextStepNode = void 0;
const getStepNodesFromProcess_1 = require("534b7407cfc37ae7");
function getNextStepNode(processNode, stepNode, contextNodeTicket) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        if (stepNode && ((_b = (_a = stepNode === null || stepNode === void 0 ? void 0 : stepNode.info) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.get()) >= 0) {
            const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
            const nextOrder = parseInt(stepNode.info.order.get()) + 1;
            return steps.find((el)=>el.info.order.get() == nextOrder);
        }
    });
}
exports.getNextStepNode = getNextStepNode;
function getNextStepNodeByStepId(processNode, stepId, contextNodeTicket) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        if (!stepId) return undefined;
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        const stepNode = steps.find((el)=>el.info.id.get() === stepId);
        if (stepNode && ((_b = (_a = stepNode === null || stepNode === void 0 ? void 0 : stepNode.info) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.get()) >= 0) {
            const nextOrder = stepNode.info.order.get() + 1;
            return steps.find((el)=>el.info.order.get() == nextOrder);
        }
    });
}
exports.getNextStepNodeByStepId = getNextStepNodeByStepId;

},{"534b7407cfc37ae7":"Xxr5A"}],"Q5UBD":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getPreviousStepNode = void 0;
const getStepNodesFromProcess_1 = require("ea2423f2376b2c5e");
function getPreviousStepNode(processNode, stepNode, contextNodeTicket) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        if (stepNode && ((_b = (_a = stepNode === null || stepNode === void 0 ? void 0 : stepNode.info) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.get()) > 0) {
            const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
            const previousStepOrder = parseInt(stepNode.info.order.get()) - 1;
            return steps.find((el)=>el.info.order.get() == previousStepOrder);
        }
    });
}
exports.getPreviousStepNode = getPreviousStepNode;

},{"ea2423f2376b2c5e":"Xxr5A"}],"g2Ecu":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getInferiorsStepNodes = void 0;
const getStepNodesFromProcess_1 = require("10d434c6d697736e");
function getInferiorsStepNodes(contextNodeTicket, processNode, stepOrder, equals = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        return steps.filter((step)=>{
            const order = step.info.order.get();
            if (equals && order === stepOrder) return true;
            return order < stepOrder;
        });
    });
}
exports.getInferiorsStepNodes = getInferiorsStepNodes;

},{"10d434c6d697736e":"Xxr5A"}],"hFp4w":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.addTicket = void 0;
const spinal_model_graph_1 = require("b55869aa66c9d69c");
const getFirstStepNode_1 = require("2436fbb43bfe8fdb");
const addLogToTicketNode_1 = require("606b6720282ebab5");
const Constants_1 = require("e93db86cd5abe07b");
const updateTicketAttributes_1 = require("935a0ed4217429fa");
function addTicket(ticketInfo, processNode, contextNodeTicket, targetNode, ticketType = 'Ticket') {
    return __awaiter(this, void 0, void 0, function*() {
        const stepNode = yield (0, getFirstStepNode_1.getFirstStepNode)(processNode, contextNodeTicket);
        ticketInfo.processId = processNode.info.id.get();
        ticketInfo.stepId = stepNode.info.id.get();
        ticketInfo.contextId = contextNodeTicket.info.id.get();
        Object.assign(ticketInfo, {
            creationDate: Date.now().toString()
        });
        const ticketNode = yield createTicketNode(ticketInfo);
        yield stepNode.addChildInContext(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE, contextNodeTicket);
        yield targetNode.addChild(ticketNode, ticketType == 'Alarm' ? Constants_1.ALARM_RELATION_NAME : Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        const userInfo = ticketInfo.user ? ticketInfo.user : {};
        yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.creation, userInfo, stepNode.info.id.get());
        return ticketNode;
    });
}
exports.addTicket = addTicket;
function createTicketNode(elementInfo) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!elementInfo.declarer_id) elementInfo.declarer_id = 'unknow';
        const ticket = new spinal_model_graph_1.SpinalNode(elementInfo.name, Constants_1.SPINAL_TICKET_SERVICE_TICKET_TYPE);
        yield (0, updateTicketAttributes_1.updateTicketAttributes)(ticket, elementInfo);
        return ticket;
    });
}

},{"b55869aa66c9d69c":"b87gp","2436fbb43bfe8fdb":"gyZ0m","606b6720282ebab5":"16rIu","e93db86cd5abe07b":"j9ikR","935a0ed4217429fa":"3WAf3"}],"16rIu":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.addLogToTicketNode = void 0;
const Constants_1 = require("badea57395c60c29");
const createTicketLog_1 = require("6b54021f617656d9");
function addLogToTicketNode(ticketNode, event, userInfo = {}, fromId, toId) {
    return __awaiter(this, void 0, void 0, function*() {
        let info = {
            ticketId: ticketNode.info.id.get(),
            event: event,
            action: Constants_1.EVENTS_TO_LOG[event],
            user: userInfo,
            steps: []
        };
        if (fromId) info.steps.push(fromId);
        if (toId) info.steps.push(toId);
        const logId = (0, createTicketLog_1.createTicketLog)(info);
        return ticketNode.addChild(logId, Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE);
    });
}
exports.addLogToTicketNode = addLogToTicketNode;

},{"badea57395c60c29":"j9ikR","6b54021f617656d9":"5Kg2e"}],"5Kg2e":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.createTicketLog = void 0;
const spinal_model_graph_1 = require("951102070a8e550d");
const spinal_models_ticket_1 = require("e0dddee6a2c2a4f");
const old_constants_1 = require("b5df2d82cae63cb2");
function createTicketLog(info) {
    const logNode = new spinal_model_graph_1.SpinalNode('log', old_constants_1.SERVICE_LOG_TYPE, new spinal_models_ticket_1.SpinalLogTicket(info));
    return logNode;
}
exports.createTicketLog = createTicketLog;

},{"951102070a8e550d":"b87gp","e0dddee6a2c2a4f":"lM0Xn","b5df2d82cae63cb2":"dIMZD"}],"lM0Xn":[function(require,module,exports,__globalThis) {
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
__exportStar(require("7b00837d72999c57"), exports);
__exportStar(require("8f348fe4ecc4a247"), exports);
__exportStar(require("6b00f8d2e9d58e56"), exports);
__exportStar(require("c87fad1e6144a718"), exports);

},{"7b00837d72999c57":"22D8p","8f348fe4ecc4a247":"9C3aE","6b00f8d2e9d58e56":"i8QxB","c87fad1e6144a718":"3jGEI"}],"22D8p":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalLogTicket = void 0;
const spinal_core_connectorjs_1 = require("ab4acafee3a1701");
class SpinalLogTicket extends spinal_core_connectorjs_1.Model {
    constructor(log){
        super();
        if (!!log) {
            log['creationDate'] = Date.now();
            this.add_attr(log);
        }
    }
}
exports.SpinalLogTicket = SpinalLogTicket;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalLogTicket);

},{"ab4acafee3a1701":"cQPh9"}],"9C3aE":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"i8QxB":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3jGEI":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalTicket = void 0;
const spinal_core_connectorjs_1 = require("a7e731aef75ec11a");
class SpinalTicket extends spinal_core_connectorjs_1.Model {
    constructor(ticket){
        super();
        if (!!ticket) {
            ticket['creationDate'] = Date.now();
            this.add_attr(ticket);
        }
    }
}
exports.SpinalTicket = SpinalTicket;
spinal_core_connectorjs_1.spinalCore.register_models(SpinalTicket);

},{"a7e731aef75ec11a":"cQPh9"}],"3WAf3":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.updateTicketAttributes = void 0;
const spinal_env_viewer_plugin_documentation_service_1 = require("cf411c29a666ae72");
const Constants_1 = require("da38ccac28d4ca5e");
function updateTicketAttributes(ticketNode, /**
 * The attributes to set on the ticket, usually the value is a string but it will flatten if it's an object
 * @example
 * {
 *   "priority": "high",
 *   "status": "open",
 *   "customField": {
 *     "status": "blabla",
 *     "field2": "value2"
 *   }
 * }
 * This will result in:
 * {
 *   "priority": "high",
 *   "status": "open",
 *   "field2": "value2"
 * }
 * @param attrToSet - The attributes to set on the ticket
 */ attrToSet) {
    const res = sanatizeAttributes(attrToSet);
    if (Object.keys(res).length === 0) return Promise.resolve();
    return spinal_env_viewer_plugin_documentation_service_1.attributeService.createOrUpdateAttrsAndCategories(ticketNode, Constants_1.TICKET_ATTRIBUTE_CATEGORY_NAME, res);
}
exports.updateTicketAttributes = updateTicketAttributes;
/**
 * Sanatize the attributes to ensure all values are strings.
 * This function will flatten the attributes if they are objects.
 * It will convert all non-string values to strings.
 * If the value is an object, it will recursively call itself to flatten the object.
 * @param {Record<string, any>} attributes
 * @param {Record<string, string>} [res={}]
 * @return {*}  {Record<string, string>}
 */ function sanatizeAttributes(attributes, res = {}) {
    for(const key in attributes)if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        const element = attributes[key];
        if (typeof element === 'object') // call recursively if the element is an object
        sanatizeAttributes(element, res);
        else if (typeof element !== 'string') Object.assign(res, {
            [key]: element.toString()
        });
        else Object.assign(res, {
            [key]: element.toString()
        });
    }
    return res;
}

},{"cf411c29a666ae72":"cP9kK","da38ccac28d4ca5e":"j9ikR"}],"dKXX1":[function(require,module,exports,__globalThis) {
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
exports.getTicketsFromNode = void 0;
const Constants_1 = require("6dea23572028d268");
function getTicketsFromNode(node) {
    return __awaiter(this, void 0, void 0, function*() {
        return node.getChildren([
            Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
        ]);
    });
}
exports.getTicketsFromNode = getTicketsFromNode;

},{"6dea23572028d268":"j9ikR"}],"aE5EG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlarmsFromNode = void 0;
const Constants_1 = require("fb3f2abff15a4740");
function getAlarmsFromNode(node) {
    return node.getChildren([
        Constants_1.ALARM_RELATION_NAME
    ]);
}
exports.getAlarmsFromNode = getAlarmsFromNode;

},{"fb3f2abff15a4740":"j9ikR"}],"hV4Ac":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getTicketsFromStep = void 0;
const Constants_1 = require("de04a652477bffea");
function getTicketsFromStep(stepNode) {
    return stepNode.getChildren([
        Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
    ]);
}
exports.getTicketsFromStep = getTicketsFromStep;

},{"de04a652477bffea":"j9ikR"}],"gW20p":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getProcessFromTicket = void 0;
const Constants_1 = require("1829880b1aceb7af");
function getProcessFromTicket(ticketNode, contextNodeTicket) {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    return __awaiter(this, void 0, void 0, function*() {
        // try with to find via the context
        if (contextNodeTicket) try {
            for(var _g = true, _h = __asyncValues(ticketNode.visitParentsInContext(contextNodeTicket)), _j; _j = yield _h.next(), _a = _j.done, !_a;){
                _c = _j.value;
                _g = false;
                try {
                    const item = _c;
                    if (Constants_1.PROCESS_TYPE === item.info.type.get()) return item;
                } finally{
                    _g = true;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_g && !_a && (_b = _h.return)) yield _b.call(_h);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        try {
            // try with to find via the relations
            for(var _k = true, _l = __asyncValues(ticketNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME,
                Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
            ])), _m; _m = yield _l.next(), _d = _m.done, !_d;){
                _f = _m.value;
                _k = false;
                try {
                    const item = _f;
                    if (Constants_1.PROCESS_TYPE === item.info.type.get()) return item;
                } finally{
                    _k = true;
                }
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (!_k && !_d && (_e = _l.return)) yield _e.call(_l);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    });
}
exports.getProcessFromTicket = getProcessFromTicket;

},{"1829880b1aceb7af":"j9ikR"}],"hIjJq":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.moveTicketNode = void 0;
const updateTicketAttributes_1 = require("8f396d927ff306b9");
const Constants_1 = require("738457d47442bc2b");
function moveTicketNode(ticketNode, fromStepNode, toStepNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        if (typeof ticketNode === 'undefined' || typeof fromStepNode === 'undefined' || typeof toStepNode === 'undefined' || typeof contextNodeTicket === 'undefined') return;
        // get process id
        const processes = yield toStepNode.getParentsInContext(contextNodeTicket);
        const attrToSet = {
            stepId: toStepNode.info.id.get()
        };
        // should have length === 1
        if (processes.length > 0) attrToSet.processId = processes[0].info.id.get();
        // move the ticket
        yield fromStepNode.removeChild(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        yield toStepNode.addChildInContext(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE, contextNodeTicket);
        // setAttributes
        yield (0, updateTicketAttributes_1.updateTicketAttributes)(ticketNode, attrToSet);
    });
}
exports.moveTicketNode = moveTicketNode;

},{"8f396d927ff306b9":"3WAf3","738457d47442bc2b":"j9ikR"}],"9wvPo":[function(require,module,exports,__globalThis) {
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
exports.moveTicketToStep = void 0;
const moveTicketNode_1 = require("775f6b881c45e0e9");
const addLogToTicketNode_1 = require("583c3161f2926dcb");
const old_constants_1 = require("d1f0f425460b32fb");
function moveTicketToStep(ticketNode, stepNodeOrigin, stepNodeTarget, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        yield (0, moveTicketNode_1.moveTicketNode)(ticketNode, stepNodeOrigin, stepNodeTarget, contextNodeTicket);
        yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, old_constants_1.LOGS_EVENTS.move, undefined, stepNodeOrigin.info.id.get(), stepNodeTarget.info.id.get());
    });
}
exports.moveTicketToStep = moveTicketToStep;

},{"775f6b881c45e0e9":"hIjJq","583c3161f2926dcb":"16rIu","d1f0f425460b32fb":"dIMZD"}],"g6n6v":[function(require,module,exports,__globalThis) {
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
exports.moveTicketToNextStep = void 0;
const addLogToTicketNode_1 = require("767c62cf583570f6");
const getNextStepNode_1 = require("c4b5eb2b0d2540a8");
const getStepNodesFromProcess_1 = require("368a60609b167922");
const getTicketInfo_1 = require("b1831165885c3224");
const moveTicketNode_1 = require("28ddc5d1c001e23e");
const Constants_1 = require("5a93691432073d61");
function moveTicketToNextStep(contextNodeTicket, processNode, ticketNode, userInfo = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const ticketInfo = yield (0, getTicketInfo_1.getTicketInfo)(ticketNode, [
            'stepId'
        ]);
        if (ticketInfo.stepId) {
            const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
            const stepNode = steps.find((el)=>el.info.id.get() === ticketInfo.stepId);
            const nextStep = yield (0, getNextStepNode_1.getNextStepNode)(processNode, stepNode, contextNodeTicket);
            if (nextStep) {
                yield (0, moveTicketNode_1.moveTicketNode)(ticketNode, stepNode, nextStep, contextNodeTicket);
                yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.moveToNext, userInfo, stepNode.info.id.get(), nextStep.info.id.get());
                return nextStep;
            }
        }
    });
}
exports.moveTicketToNextStep = moveTicketToNextStep;

},{"767c62cf583570f6":"16rIu","c4b5eb2b0d2540a8":"aEYk9","368a60609b167922":"Xxr5A","b1831165885c3224":"fgGbI","28ddc5d1c001e23e":"hIjJq","5a93691432073d61":"j9ikR"}],"fgGbI":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getTicketInfo = void 0;
const spinal_env_viewer_plugin_documentation_service_1 = require("53103574ff86846a");
function getTicketInfo(ticketNode, attributesToGet) {
    return __awaiter(this, void 0, void 0, function*() {
        if (Array.isArray(attributesToGet) && attributesToGet.length > 0) {
            const data = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttrBySchema(ticketNode, {
                default: attributesToGet
            });
            return data.default;
        }
        const category = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategoryByName(ticketNode, 'default');
        if (!category) return;
        const attributes = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(ticketNode, category);
        const data = {};
        for (const attr of attributes){
            const label = attr.label.get();
            const value = attr.value.get();
            if (label && value) data[label] = value;
        }
        return data;
    });
}
exports.getTicketInfo = getTicketInfo;

},{"53103574ff86846a":"cP9kK"}],"cRvaP":[function(require,module,exports,__globalThis) {
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
exports.moveTicketToPreviousStep = void 0;
const addLogToTicketNode_1 = require("2b4070efa8878c69");
const getTicketInfo_1 = require("529e86c3d20805a5");
const moveTicketNode_1 = require("3396bac664f982d2");
const Constants_1 = require("afd343cca3a9e3fc");
const getPreviousStepNode_1 = require("3c11044af575a257");
const getStepFromProcessByStepId_1 = require("cb886d5aeca71d8b");
function moveTicketToPreviousStep(contextNodeTicket, processNode, ticketNode, userInfo = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const ticketInfo = yield (0, getTicketInfo_1.getTicketInfo)(ticketNode, [
            'stepId'
        ]);
        if (ticketInfo.stepId) {
            const stepNode = yield (0, getStepFromProcessByStepId_1.getStepFromProcessByStepId)(contextNodeTicket, processNode, ticketInfo.stepId);
            const previousStep = yield (0, getPreviousStepNode_1.getPreviousStepNode)(processNode, stepNode, contextNodeTicket);
            if (previousStep) {
                yield (0, moveTicketNode_1.moveTicketNode)(ticketNode, stepNode, previousStep, contextNodeTicket);
                yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.moveToPrevious, userInfo, stepNode.info.id.get(), previousStep.info.id.get());
                return previousStep;
            }
        }
    });
}
exports.moveTicketToPreviousStep = moveTicketToPreviousStep;

},{"2b4070efa8878c69":"16rIu","529e86c3d20805a5":"fgGbI","3396bac664f982d2":"hIjJq","afd343cca3a9e3fc":"j9ikR","3c11044af575a257":"Q5UBD","cb886d5aeca71d8b":"bd36j"}],"bd36j":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getStepFromProcessByStepId = void 0;
const getStepNodesFromProcess_1 = require("8cf9486940d1cf66");
function getStepFromProcessByStepId(contextNodeTicket, processNode, stepId) {
    return __awaiter(this, void 0, void 0, function*() {
        const steps = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        return steps.find((step)=>step.info.id.get() === stepId);
    });
}
exports.getStepFromProcessByStepId = getStepFromProcessByStepId;

},{"8cf9486940d1cf66":"Xxr5A"}],"dFzqg":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.archiveTickets = void 0;
const addLogToTicketNode_1 = require("b04a6045fab619f0");
const moveTicketNode_1 = require("7a1b0da28a585f49");
const getStepNodesFromProcess_1 = require("118b03cc38746990");
const getTicketInfo_1 = require("fbf17ee98ce64b94");
const getStepFromProcessByStepId_1 = require("3a1afcf35a3b1557");
const _initializeStepNode_1 = require("6f3afff58afbcd62");
const Constants_1 = require("bfb955dbd356d483");
function archiveTickets(contextNodeTicket, processNode, ticketNode, userInfo = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const achiveStep = yield createArchivedStep(processNode, contextNodeTicket);
        const ticketInfo = yield (0, getTicketInfo_1.getTicketInfo)(ticketNode, [
            'stepId'
        ]);
        if (ticketInfo && achiveStep) {
            const currentStep = yield (0, getStepFromProcessByStepId_1.getStepFromProcessByStepId)(contextNodeTicket, processNode, ticketInfo.stepId);
            yield (0, moveTicketNode_1.moveTicketNode)(ticketNode, currentStep, achiveStep, contextNodeTicket);
            yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.archived, userInfo, currentStep.info.id.get(), achiveStep.info.id.get());
            return achiveStep;
        }
    });
}
exports.archiveTickets = archiveTickets;
function createArchivedStep(processNode, contextNodeTicket) {
    return __awaiter(this, void 0, void 0, function*() {
        const result = yield (0, getStepNodesFromProcess_1.getStepNodesFromProcess)(processNode, contextNodeTicket);
        const found = result.find((el)=>el.info.name.get() === Constants_1.ARCHIVED_STEP.name && el.info.order.get() === Constants_1.ARCHIVED_STEP.order);
        if (found) return found;
        return (0, _initializeStepNode_1._initializeStepNode)(Constants_1.ARCHIVED_STEP.name, Constants_1.ARCHIVED_STEP.color, Constants_1.ARCHIVED_STEP.order, processNode, contextNodeTicket);
    });
}

},{"b04a6045fab619f0":"16rIu","7a1b0da28a585f49":"hIjJq","118b03cc38746990":"Xxr5A","fbf17ee98ce64b94":"fgGbI","3a1afcf35a3b1557":"bd36j","6f3afff58afbcd62":"8fcSp","bfb955dbd356d483":"j9ikR"}],"7jWXo":[function(require,module,exports,__globalThis) {
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
exports.unarchiveTicket = void 0;
const addLogToTicketNode_1 = require("eccf4a66063354c");
const moveTicketNode_1 = require("7bc27c5fab3ee6c1");
const Constants_1 = require("4e5da209c37831fc");
const getTicketInfo_1 = require("70764ee8aa640b97");
const getStepFromProcessByStepId_1 = require("dba961e47258e3aa");
const getFirstStepNode_1 = require("361ad8b92a0ff57");
function unarchiveTicket(contextNodeTicket, processNode, ticketNode, userInfo = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const ticketInfo = yield (0, getTicketInfo_1.getTicketInfo)(ticketNode, [
            'stepId'
        ]);
        const firstStep = yield (0, getFirstStepNode_1.getFirstStepNode)(processNode, contextNodeTicket);
        if (ticketInfo && firstStep) {
            const currentStep = yield (0, getStepFromProcessByStepId_1.getStepFromProcessByStepId)(contextNodeTicket, processNode, ticketInfo.stepId);
            yield (0, moveTicketNode_1.moveTicketNode)(ticketNode, currentStep, firstStep, contextNodeTicket);
            yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.unarchive, userInfo, currentStep.info.id.get(), firstStep.info.id.get());
            return firstStep;
        }
    });
}
exports.unarchiveTicket = unarchiveTicket;

},{"eccf4a66063354c":"16rIu","7bc27c5fab3ee6c1":"hIjJq","4e5da209c37831fc":"j9ikR","70764ee8aa640b97":"fgGbI","dba961e47258e3aa":"bd36j","361ad8b92a0ff57":"gyZ0m"}],"dJWya":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getTicketContextId = void 0;
const GraphService_1 = require("3f2b9148ea2c1642");
const Constants_1 = require("653f322512071c10");
function getTicketContextId(ticketNode) {
    if (ticketNode) return ticketNode.contextIds._attribute_names.find((id)=>{
        const node = (0, GraphService_1.graphServiceGetRealNode)(id);
        if (!node) return false;
        return node.getType().get() === Constants_1.SERVICE_TYPE;
    });
}
exports.getTicketContextId = getTicketContextId;

},{"3f2b9148ea2c1642":"bBm6k","653f322512071c10":"j9ikR"}],"8vWzQ":[function(require,module,exports,__globalThis) {
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
exports.changeTicketProcess = void 0;
const getTicketContextId_1 = require("469555f979d79b8a");
const getFirstStepNode_1 = require("742be470c6bd6d89");
const GraphService_1 = require("5374b315a7fbd2ae");
const getTicketInfo_1 = require("f56844965a1875f6");
const addLogToTicketNode_1 = require("1449e9d5ff01f18e");
const _modifyTicketStepId_1 = require("d5e132fe8d79660a");
const Constants_1 = require("213b838490b802d9");
function changeTicketProcess(ticketNode, newProcessNode, newContextTicketNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const ticketInfo = yield (0, getTicketInfo_1.getTicketInfo)(ticketNode, [
            'stepId'
        ]);
        const oldContextId = (0, getTicketContextId_1.getTicketContextId)(ticketNode);
        const oldContextTicketNode = (0, GraphService_1.graphServiceGetRealNode)(oldContextId);
        const contextNodeTicket = newContextTicketNode || oldContextTicketNode;
        const toStepNode = yield (0, getFirstStepNode_1.getFirstStepNode)(newProcessNode, contextNodeTicket);
        const fromStepNode = yield getOldStep(ticketNode, oldContextTicketNode);
        if (contextNodeTicket === oldContextTicketNode) yield fromStepNode.removeChild(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        else yield removeFromContext(ticketNode, fromStepNode, oldContextTicketNode);
        yield toStepNode.addChildInContext(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE, contextNodeTicket);
        yield (0, _modifyTicketStepId_1._modifyTicketStepId)(ticketNode, toStepNode.info.id.get());
        yield (0, addLogToTicketNode_1.addLogToTicketNode)(ticketNode, Constants_1.LOGS_EVENTS.creation, {}, toStepNode === null || toStepNode === void 0 ? void 0 : toStepNode.info.id.get(), fromStepNode === null || fromStepNode === void 0 ? void 0 : fromStepNode.info.id.get());
        return ticketNode;
    });
}
exports.changeTicketProcess = changeTicketProcess;
function getOldStep(ticketNode, oldContextTicketNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const parents = yield ticketNode.getParentsInContext(oldContextTicketNode);
        for (const parent of parents){
            if (parent.info.type.get() === Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE) return parent;
        }
    });
}
function removeFromContext(ticketNode, fromStepNode, oldContextTicketNode) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            yield fromStepNode.removeChild(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
            ticketNode.removeContextId(oldContextTicketNode.info.id.get());
            return true;
        } catch (error) {
            return false;
        }
    });
}

},{"469555f979d79b8a":"dJWya","742be470c6bd6d89":"gyZ0m","5374b315a7fbd2ae":"bBm6k","f56844965a1875f6":"fgGbI","1449e9d5ff01f18e":"16rIu","d5e132fe8d79660a":"9A2bF","213b838490b802d9":"j9ikR"}],"9A2bF":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports._modifyTicketStepId = void 0;
const updateTicketAttributes_1 = require("6465f979e0f764f5");
function _modifyTicketStepId(ticketNode, stepId) {
    return (0, updateTicketAttributes_1.updateTicketAttributes)(ticketNode, {
        stepId
    });
}
exports._modifyTicketStepId = _modifyTicketStepId;

},{"6465f979e0f764f5":"3WAf3"}],"gdsSB":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.changeTicketNodeTarget = void 0;
const Constants_1 = require("ad8f0e8facf9d41a");
/**
 * Changes the target node of a ticket element.
 * e.g change the room linked to a ticket.
 * @export
 * @param {SpinalNode} ticketNode
 * @param {SpinalNode} targetNode
 * @return {*} the ticket node
 */ function changeTicketNodeTarget(ticketNode, targetNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const parents = yield ticketNode.getParents(Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME);
        const filteredParents = parents.filter((parent)=>parent.info.type.get() !== Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE);
        const promises = filteredParents.map((parent)=>{
            return parent.removeChild(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        });
        yield Promise.all(promises);
        targetNode.addChild(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        return ticketNode;
    });
}
exports.changeTicketNodeTarget = changeTicketNodeTarget;

},{"ad8f0e8facf9d41a":"j9ikR"}],"4wuJB":[function(require,module,exports,__globalThis) {
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
exports.getTicketLogs = void 0;
const Constants_1 = require("34206115feefa97a");
function getTicketLogs(ticketNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const logs = yield ticketNode.getChildren(Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME);
        const elements = yield Promise.all(logs.map((el)=>el.element.load()));
        return elements.map((el)=>{
            const res = el.get();
            if (typeof res.action == 'undefined') res.action = Constants_1.EVENTS_TO_LOG[res.event];
            return res;
        });
    });
}
exports.getTicketLogs = getTicketLogs;

},{"34206115feefa97a":"j9ikR"}],"jYHep":[function(require,module,exports,__globalThis) {
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
exports.addCommonIncident = void 0;
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
 */ const spinal_model_graph_1 = require("60eb77c4b60d994a");
const Constants_1 = require("589ceed55eac7a52");
function addCommonIncident(processNode, sentence) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield processNode.getChildren(Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME);
        if (children.length > 0) {
            const sectionNode = children[0];
            const sentenceNode = new spinal_model_graph_1.SpinalNode(sentence, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_TYPE);
            yield sectionNode.addChild(sentenceNode, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE);
            return sentenceNode;
        }
        const success = yield addSentenceSection(processNode);
        if (success) return addCommonIncident(processNode, sentence);
    });
}
exports.addCommonIncident = addCommonIncident;
function addSentenceSection(processNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const sentenceNode = new spinal_model_graph_1.SpinalNode(Constants_1.DEFAULT_INCIDENTS_NAME, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE);
        try {
            sentenceNode.info.add_attr('processId', processNode.info.id.get());
            yield processNode.addChild(sentenceNode, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE);
            return true;
        } catch (error) {
            return false;
        }
    });
}

},{"60eb77c4b60d994a":"b87gp","589ceed55eac7a52":"j9ikR"}],"j1kMm":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getCommonIncident = void 0;
const Constants_1 = require("43d27d3cf8a80794");
function getCommonIncident(processNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield processNode.getChildren(Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME);
        if (children && children.length > 0) {
            const section = children[0];
            const sentences = yield section.getChildren(Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME);
            return sentences;
        }
        return [];
    });
}
exports.getCommonIncident = getCommonIncident;

},{"43d27d3cf8a80794":"j9ikR"}],"kE7CU":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getTicketsFromArchiveGen = exports.getTicketsFromArchive = void 0;
const moment = require("49ac24079a785567");
const _getAchivePartsFromArchive_1 = require("b0501ee473457701");
const _getArchive_1 = require("a100ccbe19799e61");
const Constants_1 = require("1060669e73e35620");
function getTicketsFromArchive(processOrSpatialNode, begin, end) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function*() {
        const res = [];
        try {
            for(var _d = true, _e = __asyncValues(getTicketsFromArchiveGen(processOrSpatialNode, begin, end)), _f; _f = yield _e.next(), _a = _f.done, !_a;){
                _c = _f.value;
                _d = false;
                try {
                    const ticket = _c;
                    res.push(ticket);
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
        return res;
    });
}
exports.getTicketsFromArchive = getTicketsFromArchive;
function getTicketsFromArchiveGen(processOrSpatialNode, begin, end) {
    var _a, _b;
    return __asyncGenerator(this, arguments, function* getTicketsFromArchiveGen_1() {
        const tsBegin = moment(begin).valueOf();
        const tsEnd = moment(end).valueOf();
        const isProcess = processOrSpatialNode.info.type.get() === Constants_1.PROCESS_TYPE;
        const timeStampAttr = isProcess ? Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS : Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL;
        const relationName = isProcess ? Constants_1.PROCESS_ARCHIVE_TICKET_RELATION : Constants_1.SPATIAL_ARCHIVE_TICKET_RELATION;
        const archiveTicketType = isProcess ? Constants_1.PROCESS_ARCHIVE_TICKET_TYPE : Constants_1.SPATIAL_ARCHIVE_TICKET_TYPE;
        const archiveTicketNode = yield __await((0, _getArchive_1._getArchive)(processOrSpatialNode, relationName, archiveTicketType));
        const archiveParts = yield __await((0, _getAchivePartsFromArchive_1._getAchivePartsFromArchive)(archiveTicketNode));
        for (const archivePart of archiveParts){
            if (archivePart.info.end.get() < tsBegin || archivePart.info.start.get() > tsEnd) continue;
            const tickets = yield __await(archivePart.getChildren(Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION));
            for (const ticket of tickets)if (((_a = ticket.info[timeStampAttr]) === null || _a === void 0 ? void 0 : _a.get()) >= tsBegin && ((_b = ticket.info[timeStampAttr]) === null || _b === void 0 ? void 0 : _b.get()) <= tsEnd) yield yield __await(ticket);
        }
    });
}
exports.getTicketsFromArchiveGen = getTicketsFromArchiveGen;

},{"49ac24079a785567":"kty5A","b0501ee473457701":"lgGTP","a100ccbe19799e61":"gNRal","1060669e73e35620":"j9ikR"}],"lgGTP":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports._getAchivePartsFromArchive = void 0;
const Constants_1 = require("5fce543885964b08");
function _getAchivePartsFromArchive(archive) {
    return archive.getChildren(Constants_1.ARCHIVE_TICKET_RELATIONS);
}
exports._getAchivePartsFromArchive = _getAchivePartsFromArchive;

},{"5fce543885964b08":"j9ikR"}],"gNRal":[function(require,module,exports,__globalThis) {
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
exports._getArchive = void 0;
function _getArchive(node, parentRelationNames, childNodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield node.getChildren(parentRelationNames);
        for (const child of children){
            if (child.info.type.get() === childNodeType) return child;
        }
    });
}
exports._getArchive = _getArchive;

},{}],"dhtkD":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.deleteTicketFromArchive = void 0;
const moment = require("b515ff162f422547");
const _getAchivePartsFromArchive_1 = require("123495558cfe42c2");
const _getArchive_1 = require("db75bb5a3a8b4700");
const Constants_1 = require("5157a7f0b10c33f7");
const _getArchivePartNameDate_1 = require("68a2ab5909216353");
function deleteTicketFromArchive(processOrSpatialNode, begin, end) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!processOrSpatialNode) throw new Error("deleteTicketFromArchive process or spatial node ID given don't exist in graph service.");
        const isProcess = processOrSpatialNode.info.type.get() === Constants_1.PROCESS_TYPE;
        const timeStampAttr = isProcess ? Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS : Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL;
        const relationName = isProcess ? Constants_1.PROCESS_ARCHIVE_TICKET_RELATION : Constants_1.SPATIAL_ARCHIVE_TICKET_RELATION;
        const archiveTicketType = isProcess ? Constants_1.PROCESS_ARCHIVE_TICKET_TYPE : Constants_1.SPATIAL_ARCHIVE_TICKET_TYPE;
        const tsBegin = moment(begin).valueOf();
        const tsEnd = moment(end).valueOf();
        const archiveTicketNode = yield (0, _getArchive_1._getArchive)(processOrSpatialNode, relationName, archiveTicketType);
        const archiveParts = yield (0, _getAchivePartsFromArchive_1._getAchivePartsFromArchive)(archiveTicketNode);
        for (const archivePart of archiveParts){
            if (archivePart.info.end.get() < tsBegin || archivePart.info.start.get() > tsEnd) continue;
            const tickets = yield archivePart.getChildren(Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION);
            const ticketsToRm = tickets.filter((ticket)=>{
                var _a, _b;
                return ((_a = ticket.info[timeStampAttr]) === null || _a === void 0 ? void 0 : _a.get()) >= tsBegin && ((_b = ticket.info[timeStampAttr]) === null || _b === void 0 ? void 0 : _b.get()) <= tsEnd;
            });
            try {
                yield archivePart.removeChildren(ticketsToRm, Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
            } catch (error) {}
            ticketsToRm.forEach((ticket)=>ticket.setIndirectModificationDate(Date.now()));
            yield updateArchivePartData(archivePart, archiveTicketNode, timeStampAttr);
        }
    });
}
exports.deleteTicketFromArchive = deleteTicketFromArchive;
function updateArchivePartData(archivePart, archiveTicketNode, timeStampAttr) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function*() {
        const tickets = yield archivePart.getChildren(Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION);
        if (tickets.length === 0) yield archiveTicketNode.removeChild(archivePart, Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
        else {
            const start = (_b = (_a = tickets[0]) === null || _a === void 0 ? void 0 : _a.info[timeStampAttr]) === null || _b === void 0 ? void 0 : _b.get();
            const end = (_d = (_c = tickets[tickets.length - 1]) === null || _c === void 0 ? void 0 : _c.info[timeStampAttr]) === null || _d === void 0 ? void 0 : _d.get();
            archivePart.info.start.set(start);
            archivePart.info.end.set(end);
            archivePart.info.name.set((0, _getArchivePartNameDate_1._getArchivePartNameDate)(start, end));
        }
    });
}

},{"b515ff162f422547":"kty5A","123495558cfe42c2":"lgGTP","db75bb5a3a8b4700":"gNRal","5157a7f0b10c33f7":"j9ikR","68a2ab5909216353":"csRie"}],"csRie":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports._getArchivePartNameDate = void 0;
const moment = require("95b7a60c71983854");
function _getArchivePartNameDate(start, end) {
    const s = moment(start).format();
    const e = moment(end).format();
    return `${s} - ${e}`;
}
exports._getArchivePartNameDate = _getArchivePartNameDate;

},{"95b7a60c71983854":"kty5A"}],"5Tyo3":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.updateArchivePartData = void 0;
const Constants_1 = require("e327a2761baaeda2");
const _getArchivePartNameDate_1 = require("5049ab778b2d7566");
function updateArchivePartData(archivePart, archiveTicketNode, timeStampAttr) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function*() {
        const tickets = yield archivePart.getChildren(Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION);
        if (tickets.length === 0) yield archiveTicketNode.removeChild(archivePart, Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
        else {
            const start = (_b = (_a = tickets[0]) === null || _a === void 0 ? void 0 : _a.info[timeStampAttr]) === null || _b === void 0 ? void 0 : _b.get();
            const end = (_d = (_c = tickets[tickets.length - 1]) === null || _c === void 0 ? void 0 : _c.info[timeStampAttr]) === null || _d === void 0 ? void 0 : _d.get();
            archivePart.info.start.set(start);
            archivePart.info.end.set(end);
            archivePart.info.name.set((0, _getArchivePartNameDate_1._getArchivePartNameDate)(start, end));
        }
    });
}
exports.updateArchivePartData = updateArchivePartData;

},{"e327a2761baaeda2":"j9ikR","5049ab778b2d7566":"csRie"}],"3BWG9":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.archiveTicketFromProcess = void 0;
const _archiveTicket_1 = require("dfb99e4edebb46b9");
const Constants_1 = require("d2b5620c623c6acc");
function archiveTicketFromProcess(ticketNode, processNode, date, maxArchiveSize = 200) {
    return (0, _archiveTicket_1._archiveTicket)(ticketNode, processNode, date, maxArchiveSize, Constants_1.PROCESS_ARCHIVE_TICKET_RELATION, Constants_1.PROCESS_ARCHIVE_TICKET_TYPE, [
        Constants_1.STEP_TYPE
    ], Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS);
}
exports.archiveTicketFromProcess = archiveTicketFromProcess;

},{"dfb99e4edebb46b9":"c6gy1","d2b5620c623c6acc":"j9ikR"}],"c6gy1":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports._archiveTicket = void 0;
const moment = require("18a6078a86ebc994");
const spinal_model_graph_1 = require("2c76b8efd641289c");
const Constants_1 = require("879b77f13f34d815");
const _getArchivePartNameDate_1 = require("1439fc57d3920423");
function _archiveTicket(ticketNode, processOrSpatialNode, date, maxArchiveSize, archiveRelationName, archiveNodeType, parentTypes, timestampAttr) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        // getOrCreateArchive
        const archiveTicketNode = yield getOrCreateArchive(processOrSpatialNode, archiveRelationName, archiveNodeType);
        // getOrCreateArchivePart with date
        const timestamp = moment(date).valueOf();
        const archivePartNode = yield getArchivePartFromArchive(archiveTicketNode, Constants_1.ARCHIVE_TICKET_PART_RELATION, Constants_1.ARCHIVE_TICKET_PART_TYPE, timestamp, maxArchiveSize);
        // add ticket to the part
        yield archivePartNode.addChild(ticketNode, Constants_1.ARCHIVE_TICKET_PART_TICKET_RELATION, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
        // update part info
        const start = archivePartNode.info.start.get();
        (_a = archivePartNode.info.start) === null || _a === void 0 || _a.set(start);
        (_b = archivePartNode.info.end) === null || _b === void 0 || _b.set(timestamp);
        archivePartNode.info.name.set((0, _getArchivePartNameDate_1._getArchivePartNameDate)(start, timestamp));
        // add archiveTimestamp to ticket node
        if (!ticketNode.info[timestampAttr]) ticketNode.info.add_attr(timestampAttr, timestamp);
        else ticketNode.info[timestampAttr].set(timestamp);
        ticketNode.setIndirectModificationDate(Date.now());
        // remove parent step
        yield removeTicketFromParent(ticketNode, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, parentTypes);
    });
}
exports._archiveTicket = _archiveTicket;
function getOrCreateArchive(node, parentRelationName, childNodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield node.getChildren(parentRelationName);
        for (const child of children){
            if (child.info.type.get() === childNodeType) return child;
        }
        const archive = new spinal_model_graph_1.SpinalNode(childNodeType, childNodeType);
        yield node.addChild(archive, parentRelationName, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
        return archive;
    });
}
function getArchivePartFromArchive(archive, parentRelationName, childNodeType, date, maxArchiveSize) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = yield archive.getChildren(parentRelationName);
        const child = children[children.length - 1];
        if (child && child.info.type.get() === childNodeType && maxArchiveSize > child.getNbChildren()) return child;
        const name = (0, _getArchivePartNameDate_1._getArchivePartNameDate)(date, date);
        const archivePart = new spinal_model_graph_1.SpinalNode(name, childNodeType);
        const timestamp = moment(date).valueOf();
        archivePart.info.add_attr({
            start: timestamp,
            end: timestamp
        });
        yield archive.addChild(archivePart, parentRelationName, Constants_1.ARCHIVE_TICKET_RELATION_TYPE);
        return archivePart;
    });
}
function removeTicketFromParent(ticketNode, relationName, parentTypes) {
    return __awaiter(this, void 0, void 0, function*() {
        const parents = yield ticketNode.getParents(relationName);
        const parentsFiltered = parents.filter((parent)=>parentTypes.includes(parent.info.type.get()));
        const proms = parentsFiltered.map((parent)=>{
            return parent.removeChild(ticketNode, relationName, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE).catch(()=>console.log(`catch erreor remove child for ${ticketNode.info.name.get()}`));
        });
        yield Promise.all(proms);
    });
}

},{"18a6078a86ebc994":"kty5A","2c76b8efd641289c":"b87gp","879b77f13f34d815":"j9ikR","1439fc57d3920423":"csRie"}],"dnqs6":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.archiveTicketFromSpatial = void 0;
const _archiveTicket_1 = require("dcbea35e352f496f");
const Constants_1 = require("a39889e614fb938f");
function archiveTicketFromSpatial(ticketNode, spatialNode, date, maxArchiveSize = 200) {
    return (0, _archiveTicket_1._archiveTicket)(ticketNode, spatialNode, date, maxArchiveSize, Constants_1.SPATIAL_ARCHIVE_TICKET_RELATION, Constants_1.SPATIAL_ARCHIVE_TICKET_TYPE, Constants_1.GEO_TYPES, Constants_1.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL);
}
exports.archiveTicketFromSpatial = archiveTicketFromSpatial;

},{"dcbea35e352f496f":"c6gy1","a39889e614fb938f":"j9ikR"}],"dbVCF":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("db6888d257e2f3c6"), exports);
__exportStar(require("98f6577c93aff93f"), exports);
__exportStar(require("7ceaea79f2eaaf4c"), exports);
__exportStar(require("ddaf6f93e3624d63"), exports);
__exportStar(require("bdb320eee7b31cf6"), exports);
__exportStar(require("abde199d0080f551"), exports);
__exportStar(require("bdd70c991e5a8258"), exports);
__exportStar(require("236cf6a222691e43"), exports);
__exportStar(require("e67e319cf67ad476"), exports);

},{"db6888d257e2f3c6":"3BWG9","98f6577c93aff93f":"dnqs6","7ceaea79f2eaaf4c":"dhtkD","ddaf6f93e3624d63":"kE7CU","bdb320eee7b31cf6":"5Tyo3","abde199d0080f551":"lgGTP","bdd70c991e5a8258":"csRie","236cf6a222691e43":"c6gy1","e67e319cf67ad476":"gNRal"}],"31mbb":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("2d326c3aebae901e"), exports);
__exportStar(require("5e40f15ff507d4fe"), exports);

},{"2d326c3aebae901e":"jYHep","5e40f15ff507d4fe":"j1kMm"}],"bBKkl":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("4ae0e50f70cc13fe"), exports);
__exportStar(require("46d48974417c07f4"), exports);
__exportStar(require("fee38c6f3e9a87da"), exports);
__exportStar(require("68a9c0abbdbb52c6"), exports);
__exportStar(require("2b2a97a9a28dd44d"), exports);
__exportStar(require("59e5e94c002aaaac"), exports);

},{"4ae0e50f70cc13fe":"Rvjci","46d48974417c07f4":"3IQdH","fee38c6f3e9a87da":"afofC","68a9c0abbdbb52c6":"8dP12","2b2a97a9a28dd44d":"GIS7F","59e5e94c002aaaac":"3nl3b"}],"8dP12":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getContextFromProcess = void 0;
const Constants_1 = require("3c42b4e2d2f892e0");
function getContextFromProcess(processNode) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function*() {
        try {
            for(var _d = true, _e = __asyncValues(processNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME
            ])), _f; _f = yield _e.next(), _a = _f.done, !_a;){
                _c = _f.value;
                _d = false;
                try {
                    const item = _c;
                    if (Constants_1.TICKET_CONTEXT_TYPE === item.info.type.get()) return item;
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
    });
}
exports.getContextFromProcess = getContextFromProcess;

},{"3c42b4e2d2f892e0":"j9ikR"}],"GIS7F":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getContextFromStep = void 0;
const Constants_1 = require("542b43d760324222");
function getContextFromStep(stepNode) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function*() {
        try {
            // try with to find via the relations
            for(var _d = true, _e = __asyncValues(stepNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME,
                Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME
            ])), _f; _f = yield _e.next(), _a = _f.done, !_a;){
                _c = _f.value;
                _d = false;
                try {
                    const item = _c;
                    if (Constants_1.TICKET_CONTEXT_TYPE === item.info.type.get()) return item;
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
    });
}
exports.getContextFromStep = getContextFromStep;

},{"542b43d760324222":"j9ikR"}],"3nl3b":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getContextFromTicket = void 0;
const Constants_1 = require("52a23f444ff1979d");
function getContextFromTicket(ticketNode) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function*() {
        try {
            // try with to find via the relations
            for(var _d = true, _e = __asyncValues(ticketNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME,
                Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME,
                Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME
            ])), _f; _f = yield _e.next(), _a = _f.done, !_a;){
                _c = _f.value;
                _d = false;
                try {
                    const item = _c;
                    if (Constants_1.TICKET_CONTEXT_TYPE === item.info.type.get()) return item;
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
    });
}
exports.getContextFromTicket = getContextFromTicket;

},{"52a23f444ff1979d":"j9ikR"}],"4GzV5":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("5bdc61356417caaa"), exports);
__exportStar(require("5ab6ab4c60d2b884"), exports);
__exportStar(require("7abd301eea77370b"), exports);
__exportStar(require("45e300fd929f54e0"), exports);
__exportStar(require("d3fe475999fed417"), exports);
__exportStar(require("3222a90c84fcaea5"), exports);

},{"5bdc61356417caaa":"amAVB","5ab6ab4c60d2b884":"at8iy","7abd301eea77370b":"adoHR","45e300fd929f54e0":"5HTvo","d3fe475999fed417":"lr1JX","3222a90c84fcaea5":"2A9r5"}],"amAVB":[function(require,module,exports,__globalThis) {
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

},{}],"at8iy":[function(require,module,exports,__globalThis) {
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

},{}],"adoHR":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"5HTvo":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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

},{}],"lr1JX":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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

},{}],"2A9r5":[function(require,module,exports,__globalThis) {
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

},{}],"16m8x":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("db42388fa12c7bdd"), exports);
__exportStar(require("af76fbd0c3112da0"), exports);
__exportStar(require("952579e5086174e0"), exports);

},{"db42388fa12c7bdd":"4wuJB","af76fbd0c3112da0":"5Kg2e","952579e5086174e0":"16rIu"}],"gFWgi":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("46c45003a44cd8c1"), exports);
__exportStar(require("9d486e8a84a1db34"), exports);
__exportStar(require("3024649277c17317"), exports);
__exportStar(require("d4adc12422f1514b"), exports);

},{"46c45003a44cd8c1":"a3s4Z","9d486e8a84a1db34":"5GWpl","3024649277c17317":"gb2qW","d4adc12422f1514b":"gW20p"}],"gb2qW":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getProcessFromStep = void 0;
const Constants_1 = require("b96e4a7fd0be7db9");
function getProcessFromStep(stepNode, contextNodeTicket) {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    return __awaiter(this, void 0, void 0, function*() {
        // try with to find via the context
        if (contextNodeTicket) try {
            for(var _g = true, _h = __asyncValues(stepNode.visitParentsInContext(contextNodeTicket)), _j; _j = yield _h.next(), _a = _j.done, !_a;){
                _c = _j.value;
                _g = false;
                try {
                    const item = _c;
                    if (Constants_1.PROCESS_TYPE === item.info.type.get()) return item;
                } finally{
                    _g = true;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_g && !_a && (_b = _h.return)) yield _b.call(_h);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        try {
            // try with to find via the relations
            for(var _k = true, _l = __asyncValues(stepNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME
            ])), _m; _m = yield _l.next(), _d = _m.done, !_d;){
                _f = _m.value;
                _k = false;
                try {
                    const item = _f;
                    if (Constants_1.PROCESS_TYPE === item.info.type.get()) return item;
                } finally{
                    _k = true;
                }
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (!_k && !_d && (_e = _l.return)) yield _e.call(_l);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    });
}
exports.getProcessFromStep = getProcessFromStep;

},{"b96e4a7fd0be7db9":"j9ikR"}],"lwjPE":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("67ca120bf2d1df99"), exports);
__exportStar(require("68c9efc789de6b50"), exports);
__exportStar(require("263461a4ff9f8050"), exports);
__exportStar(require("1e8ca0e168889a57"), exports);
__exportStar(require("cf8bd107d6cc96ca"), exports);
__exportStar(require("d71362a4e7319952"), exports);
__exportStar(require("39a861399b8e93ed"), exports);
__exportStar(require("afd138599d007ef4"), exports);
__exportStar(require("10a3a18c860f2443"), exports);
__exportStar(require("dafbd6638f920324"), exports);
__exportStar(require("29afd0b394e151bf"), exports);
__exportStar(require("572e232feeb94dec"), exports);
__exportStar(require("33633318b6d86edd"), exports);
__exportStar(require("3129b2ed55b04a28"), exports);
__exportStar(require("33ad620ce76ce89a"), exports);
__exportStar(require("776dd826b9e5b97b"), exports);

},{"67ca120bf2d1df99":"fh39q","68c9efc789de6b50":"gyZ0m","263461a4ff9f8050":"aEYk9","1e8ca0e168889a57":"bd36j","cf8bd107d6cc96ca":"2jVUB","d71362a4e7319952":"6ISf5","39a861399b8e93ed":"eo6bh","afd138599d007ef4":"3Bmy7","10a3a18c860f2443":"g2Ecu","dafbd6638f920324":"Q5UBD","29afd0b394e151bf":"Xxr5A","572e232feeb94dec":"9m5dS","33633318b6d86edd":"i8f5o","3129b2ed55b04a28":"hjnJ6","33ad620ce76ce89a":"8fcSp","776dd826b9e5b97b":"8styP"}],"9m5dS":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getStepFromTicket = void 0;
const Constants_1 = require("a8260dfa2ceda3bd");
function getStepFromTicket(ticketNode, contextNodeTicket) {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    return __awaiter(this, void 0, void 0, function*() {
        // try with to find via the context
        if (contextNodeTicket) try {
            for(var _g = true, _h = __asyncValues(ticketNode.visitParentsInContext(contextNodeTicket)), _j; _j = yield _h.next(), _a = _j.done, !_a;){
                _c = _j.value;
                _g = false;
                try {
                    const item = _c;
                    if (Constants_1.STEP_TYPE === item.info.type.get()) return item;
                } finally{
                    _g = true;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_g && !_a && (_b = _h.return)) yield _b.call(_h);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        try {
            // try with to find via the relations
            for(var _k = true, _l = __asyncValues(ticketNode.visitParents([
                Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
            ])), _m; _m = yield _l.next(), _d = _m.done, !_d;){
                _f = _m.value;
                _k = false;
                try {
                    const item = _f;
                    if (Constants_1.STEP_TYPE === item.info.type.get()) return item;
                } finally{
                    _k = true;
                }
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (!_k && !_d && (_e = _l.return)) yield _e.call(_l);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    });
}
exports.getStepFromTicket = getStepFromTicket;

},{"a8260dfa2ceda3bd":"j9ikR"}],"651Yg":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
__exportStar(require("971df3e30e732018"), exports);
__exportStar(require("7fae853e7bd3287f"), exports);
__exportStar(require("7bc8a29967cb1a9d"), exports);
__exportStar(require("42f2ccbd04cecfd"), exports);
__exportStar(require("f9e9d22c0a6b5f47"), exports);
__exportStar(require("fccb69b0316bda64"), exports);
__exportStar(require("ce978c3b67233598"), exports);
__exportStar(require("96b489f3968ed2a4"), exports);
__exportStar(require("dd92e968d6bad69b"), exports);
__exportStar(require("3e6115cfa8b623da"), exports);
__exportStar(require("94b9fa142946dc2a"), exports);
__exportStar(require("d0df1fd116eb632"), exports);
__exportStar(require("48437cb094039e8d"), exports);
__exportStar(require("e95de19ea9716f28"), exports);
__exportStar(require("343d03d701db99d"), exports);
__exportStar(require("568b430be8980e83"), exports);
__exportStar(require("4a571d17d45049c1"), exports);

},{"971df3e30e732018":"hFp4w","7fae853e7bd3287f":"gdsSB","7bc8a29967cb1a9d":"aE5EG","42f2ccbd04cecfd":"dJWya","f9e9d22c0a6b5f47":"dKXX1","fccb69b0316bda64":"g6n6v","ce978c3b67233598":"9wvPo","96b489f3968ed2a4":"3WAf3","dd92e968d6bad69b":"dFzqg","3e6115cfa8b623da":"8vWzQ","94b9fa142946dc2a":"fgGbI","d0df1fd116eb632":"hV4Ac","48437cb094039e8d":"hIjJq","e95de19ea9716f28":"fcuQg","343d03d701db99d":"cRvaP","568b430be8980e83":"7jWXo","4a571d17d45049c1":"9A2bF"}],"fcuQg":[function(require,module,exports,__globalThis) {
"use strict";
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
exports.getNodeFromTicket = void 0;
const Constants_1 = require("75f5ad21623afd44");
function getNodeFromTicket(ticketNode) {
    return __awaiter(this, void 0, void 0, function*() {
        const parentNodes = yield ticketNode.getParents([
            Constants_1.ALARM_RELATION_NAME,
            Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
        ]);
        for (const parent of parentNodes){
            if (![
                Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE,
                'analyticOutputs'
            ].includes(parent.info.type.get())) return parent;
        }
        return undefined;
    });
}
exports.getNodeFromTicket = getNodeFromTicket;

},{"75f5ad21623afd44":"j9ikR"}],"iquvk":[function(require,module,exports,__globalThis) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(require("f2b29fe3c2c19cbd"));
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_a352__) {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1['default'];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "fb15");
    /******/ }({
        /***/ "01f9": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var LIBRARY = __webpack_require__("2d00");
            var $export = __webpack_require__("5ca1");
            var redefine = __webpack_require__("2aba");
            var hide = __webpack_require__("32e9");
            var Iterators = __webpack_require__("84f2");
            var $iterCreate = __webpack_require__("41a0");
            var setToStringTag = __webpack_require__("7f20");
            var getPrototypeOf = __webpack_require__("38fd");
            var ITERATOR = __webpack_require__("2b4c")('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';
            var returnThis = function() {
                return this;
            };
            module1.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch(kind){
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator';
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED) {
                        for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "02f4": /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__("4588");
            var defined = __webpack_require__("be13");
            // true  -> String#at
            // false -> String#codePointAt
            module1.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };
        /***/ },
        /***/ "0390": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var at = __webpack_require__("02f4")(true);
            // `AdvanceStringIndex` abstract operation
            // https://tc39.github.io/ecma262/#sec-advancestringindex
            module1.exports = function(S, index, unicode) {
                return index + (unicode ? at(S, index).length : 1);
            };
        /***/ },
        /***/ "0bfb": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.2.5.3 get RegExp.prototype.flags
            var anObject = __webpack_require__("cb7c");
            module1.exports = function() {
                var that = anObject(this);
                var result = '';
                if (that.global) result += 'g';
                if (that.ignoreCase) result += 'i';
                if (that.multiline) result += 'm';
                if (that.unicode) result += 'u';
                if (that.sticky) result += 'y';
                return result;
            };
        /***/ },
        /***/ "0d58": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__("ce10");
            var enumBugKeys = __webpack_require__("e11e");
            module1.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };
        /***/ },
        /***/ "1495": /***/ function(module1, exports, __webpack_require__) {
            var dP = __webpack_require__("86cc");
            var anObject = __webpack_require__("cb7c");
            var getKeys = __webpack_require__("0d58");
            module1.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while(length > i)dP.f(O, P = keys[i++], Properties[P]);
                return O;
            };
        /***/ },
        /***/ "214f": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            __webpack_require__("b0c5");
            var redefine = __webpack_require__("2aba");
            var hide = __webpack_require__("32e9");
            var fails = __webpack_require__("79e5");
            var defined = __webpack_require__("be13");
            var wks = __webpack_require__("2b4c");
            var regexpExec = __webpack_require__("520a");
            var SPECIES = wks('species');
            var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                // #replace needs built-in support for named groups.
                // #match works fine because it just return the exec results, even if it has
                // a "grops" property.
                var re = /./;
                re.exec = function() {
                    var result = [];
                    result.groups = {
                        a: '7'
                    };
                    return result;
                };
                return ''.replace(re, '$<a>') !== '7';
            });
            var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
                // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                var re = /(?:)/;
                var originalExec = re.exec;
                re.exec = function() {
                    return originalExec.apply(this, arguments);
                };
                var result = 'ab'.split(re);
                return result.length === 2 && result[0] === 'a' && result[1] === 'b';
            }();
            module1.exports = function(KEY, length, exec) {
                var SYMBOL = wks(KEY);
                var DELEGATES_TO_SYMBOL = !fails(function() {
                    // String methods call symbol-named RegEp methods
                    var O = {};
                    O[SYMBOL] = function() {
                        return 7;
                    };
                    return ''[KEY](O) != 7;
                });
                var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                    // Symbol-named RegExp methods call .exec
                    var execCalled = false;
                    var re = /a/;
                    re.exec = function() {
                        execCalled = true;
                        return null;
                    };
                    if (KEY === 'split') {
                        // RegExp[@@split] doesn't call the regex's exec method, but first creates
                        // a new one. We need to return the patched regex when creating the new one.
                        re.constructor = {};
                        re.constructor[SPECIES] = function() {
                            return re;
                        };
                    }
                    re[SYMBOL]('');
                    return !execCalled;
                }) : undefined;
                if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                    var nativeRegExpMethod = /./[SYMBOL];
                    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        if (regexp.exec === regexpExec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                            // polyfilled function), leasing to infinite recursion.
                            // We avoid it by directly calling the native @@method method.
                            return {
                                done: true,
                                value: nativeRegExpMethod.call(regexp, str, arg2)
                            };
                            return {
                                done: true,
                                value: nativeMethod.call(str, regexp, arg2)
                            };
                        }
                        return {
                            done: false
                        };
                    });
                    var strfn = fns[0];
                    var rxfn = fns[1];
                    redefine(String.prototype, KEY, strfn);
                    hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
                        return rxfn.call(string, this, arg);
                    } : function(string) {
                        return rxfn.call(string, this);
                    });
                }
            };
        /***/ },
        /***/ "230e": /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__("d3f4");
            var document1 = __webpack_require__("7726").document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document1) && isObject(document1.createElement);
            module1.exports = function(it) {
                return is ? document1.createElement(it) : {};
            };
        /***/ },
        /***/ "23c6": /***/ function(module1, exports, __webpack_require__) {
            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__("2d95");
            var TAG = __webpack_require__("2b4c")('toStringTag');
            // ES3 wrong here
            var ARG = cof(function() {
                return arguments;
            }()) == 'Arguments';
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (e) {}
            };
            module1.exports = function(it) {
                var O, T, B;
                return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
        /***/ },
        /***/ "2621": /***/ function(module1, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "2aba": /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__("7726");
            var hide = __webpack_require__("32e9");
            var has = __webpack_require__("69a8");
            var SRC = __webpack_require__("ca5a")('src');
            var $toString = __webpack_require__("fa5b");
            var TO_STRING = 'toString';
            var TPL = ('' + $toString).split(TO_STRING);
            __webpack_require__("8378").inspectSource = function(it) {
                return $toString.call(it);
            };
            (module1.exports = function(O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction) has(val, 'name') || hide(val, 'name', key);
                if (O[key] === val) return;
                if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                if (O === global) O[key] = val;
                else if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else if (O[key]) O[key] = val;
                else hide(O, key, val);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return typeof this == 'function' && this[SRC] || $toString.call(this);
            });
        /***/ },
        /***/ "2aeb": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__("cb7c");
            var dPs = __webpack_require__("1495");
            var enumBugKeys = __webpack_require__("e11e");
            var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
            var Empty = function() {};
            var PROTOTYPE = 'prototype';
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__("230e")('iframe');
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__("fab2").appendChild(iframe);
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };
            module1.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };
        /***/ },
        /***/ "2b4c": /***/ function(module1, exports, __webpack_require__) {
            var store = __webpack_require__("5537")('wks');
            var uid = __webpack_require__("ca5a");
            var Symbol1 = __webpack_require__("7726").Symbol;
            var USE_SYMBOL = typeof Symbol1 == 'function';
            var $exports = module1.exports = function(name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol1[name] || (USE_SYMBOL ? Symbol1 : uid)('Symbol.' + name));
            };
            $exports.store = store;
        /***/ },
        /***/ "2d00": /***/ function(module1, exports) {
            module1.exports = false;
        /***/ },
        /***/ "2d95": /***/ function(module1, exports) {
            var toString = {}.toString;
            module1.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "2fdb": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.1.3.7 String.prototype.includes(searchString, position = 0)
            var $export = __webpack_require__("5ca1");
            var context = __webpack_require__("d2c8");
            var INCLUDES = 'includes';
            $export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
                includes: function includes(searchString /* , position = 0 */ ) {
                    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
        /***/ },
        /***/ "32e9": /***/ function(module1, exports, __webpack_require__) {
            var dP = __webpack_require__("86cc");
            var createDesc = __webpack_require__("4630");
            module1.exports = __webpack_require__("9e1e") ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "38fd": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__("69a8");
            var toObject = __webpack_require__("4bf8");
            var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
            var ObjectProto = Object.prototype;
            module1.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectProto : null;
            };
        /***/ },
        /***/ "41a0": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var create = __webpack_require__("2aeb");
            var descriptor = __webpack_require__("4630");
            var setToStringTag = __webpack_require__("7f20");
            var IteratorPrototype = {};
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function() {
                return this;
            });
            module1.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, {
                    next: descriptor(1, next)
                });
                setToStringTag(Constructor, NAME + ' Iterator');
            };
        /***/ },
        /***/ "456d": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__("4bf8");
            var $keys = __webpack_require__("0d58");
            __webpack_require__("5eda")('keys', function() {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /***/ "4588": /***/ function(module1, exports) {
            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module1.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
        /***/ },
        /***/ "4630": /***/ function(module1, exports) {
            module1.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "4bf8": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__("be13");
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /***/ "5147": /***/ function(module1, exports, __webpack_require__) {
            var MATCH = __webpack_require__("2b4c")('match');
            module1.exports = function(KEY) {
                var re = /./;
                try {
                    '/./'[KEY](re);
                } catch (e) {
                    try {
                        re[MATCH] = false;
                        return !'/./'[KEY](re);
                    } catch (f) {}
                }
                return true;
            };
        /***/ },
        /***/ "520a": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var regexpFlags = __webpack_require__("0bfb");
            var nativeExec = RegExp.prototype.exec;
            // This always refers to the native implementation, because the
            // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
            // which loads this file before patching the method.
            var nativeReplace = String.prototype.replace;
            var patchedExec = nativeExec;
            var LAST_INDEX = 'lastIndex';
            var UPDATES_LAST_INDEX_WRONG = function() {
                var re1 = /a/, re2 = /b*/g;
                nativeExec.call(re1, 'a');
                nativeExec.call(re2, 'a');
                return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
            }();
            // nonparticipating capturing group, copied from es5-shim's String#split patch.
            var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
            var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
            if (PATCH) patchedExec = function exec(str) {
                var re = this;
                var lastIndex, reCopy, match, i;
                if (NPCG_INCLUDED) reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
                match = nativeExec.call(re, str);
                if (UPDATES_LAST_INDEX_WRONG && match) re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                // eslint-disable-next-line no-loop-func
                nativeReplace.call(match[0], reCopy, function() {
                    for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
                });
                return match;
            };
            module1.exports = patchedExec;
        /***/ },
        /***/ "52a7": /***/ function(module1, exports) {
            exports.f = ({}).propertyIsEnumerable;
        /***/ },
        /***/ "5537": /***/ function(module1, exports, __webpack_require__) {
            var core = __webpack_require__("8378");
            var global = __webpack_require__("7726");
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});
            (module1.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
                version: core.version,
                mode: __webpack_require__("2d00") ? 'pure' : 'global',
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        /***/ },
        /***/ "5ca1": /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__("7726");
            var core = __webpack_require__("8378");
            var hide = __webpack_require__("32e9");
            var redefine = __webpack_require__("2aba");
            var ctx = __webpack_require__("9b43");
            var PROTOTYPE = 'prototype';
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = (own ? target : source)[key];
                    // bind timers to global for call from export context
                    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // extend global
                    if (target) redefine(target, key, out, type & $export.U);
                    // export
                    if (exports[key] != out) hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module1.exports = $export;
        /***/ },
        /***/ "5eda": /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__("5ca1");
            var core = __webpack_require__("8378");
            var fails = __webpack_require__("79e5");
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY];
                var exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), 'Object', exp);
            };
        /***/ },
        /***/ "5f1b": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var classof = __webpack_require__("23c6");
            var builtinExec = RegExp.prototype.exec;
            // `RegExpExec` abstract operation
            // https://tc39.github.io/ecma262/#sec-regexpexec
            module1.exports = function(R, S) {
                var exec = R.exec;
                if (typeof exec === 'function') {
                    var result = exec.call(R, S);
                    if (typeof result !== 'object') throw new TypeError('RegExp exec method returned something other than an Object or null');
                    return result;
                }
                if (classof(R) !== 'RegExp') throw new TypeError('RegExp#exec called on incompatible receiver');
                return builtinExec.call(R, S);
            };
        /***/ },
        /***/ "613b": /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__("5537")('keys');
            var uid = __webpack_require__("ca5a");
            module1.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
            };
        /***/ },
        /***/ "626a": /***/ function(module1, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__("2d95");
            // eslint-disable-next-line no-prototype-builtins
            module1.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };
        /***/ },
        /***/ "6762": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // https://github.com/tc39/Array.prototype.includes
            var $export = __webpack_require__("5ca1");
            var $includes = __webpack_require__("c366")(true);
            $export($export.P, 'Array', {
                includes: function includes(el /* , fromIndex = 0 */ ) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__("9c6c")('includes');
        /***/ },
        /***/ "6821": /***/ function(module1, exports, __webpack_require__) {
            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__("626a");
            var defined = __webpack_require__("be13");
            module1.exports = function(it) {
                return IObject(defined(it));
            };
        /***/ },
        /***/ "69a8": /***/ function(module1, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module1.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "6a99": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__("d3f4");
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module1.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "7333": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 19.1.2.1 Object.assign(target, source, ...)
            var getKeys = __webpack_require__("0d58");
            var gOPS = __webpack_require__("2621");
            var pIE = __webpack_require__("52a7");
            var toObject = __webpack_require__("4bf8");
            var IObject = __webpack_require__("626a");
            var $assign = Object.assign;
            // should work with symbols and should have deterministic property order (V8 bug)
            module1.exports = !$assign || __webpack_require__("79e5")(function() {
                var A = {};
                var B = {};
                // eslint-disable-next-line no-undef
                var S = Symbol();
                var K = 'abcdefghijklmnopqrst';
                A[S] = 7;
                K.split('').forEach(function(k) {
                    B[k] = k;
                });
                return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
            }) ? function assign(target, source) {
                var T = toObject(target);
                var aLen = arguments.length;
                var index = 1;
                var getSymbols = gOPS.f;
                var isEnum = pIE.f;
                while(aLen > index){
                    var S = IObject(arguments[index++]);
                    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while(length > j)if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
                }
                return T;
            } : $assign;
        /***/ },
        /***/ "7726": /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
        /***/ },
        /***/ "77f1": /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__("4588");
            var max = Math.max;
            var min = Math.min;
            module1.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };
        /***/ },
        /***/ "79e5": /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /***/ "7f20": /***/ function(module1, exports, __webpack_require__) {
            var def = __webpack_require__("86cc").f;
            var has = __webpack_require__("69a8");
            var TAG = __webpack_require__("2b4c")('toStringTag');
            module1.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                    configurable: true,
                    value: tag
                });
            };
        /***/ },
        /***/ "8378": /***/ function(module1, exports) {
            var core = module1.exports = {
                version: '2.6.5'
            };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
        /***/ },
        /***/ "84f2": /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "86cc": /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__("cb7c");
            var IE8_DOM_DEFINE = __webpack_require__("c69a");
            var toPrimitive = __webpack_require__("6a99");
            var dP = Object.defineProperty;
            exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) {}
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "9b43": /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__("d8e8");
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "9c6c": /***/ function(module1, exports, __webpack_require__) {
            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
            var ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
            module1.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };
        /***/ },
        /***/ "9def": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.15 ToLength
            var toInteger = __webpack_require__("4588");
            var min = Math.min;
            module1.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };
        /***/ },
        /***/ "9e1e": /***/ function(module1, exports, __webpack_require__) {
            // Thank's IE8 for his funny defineProperty
            module1.exports = !__webpack_require__("79e5")(function() {
                return Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "a352": /***/ function(module1, exports) {
            module1.exports = __WEBPACK_EXTERNAL_MODULE_a352__;
        /***/ },
        /***/ "a481": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var anObject = __webpack_require__("cb7c");
            var toObject = __webpack_require__("4bf8");
            var toLength = __webpack_require__("9def");
            var toInteger = __webpack_require__("4588");
            var advanceStringIndex = __webpack_require__("0390");
            var regExpExec = __webpack_require__("5f1b");
            var max = Math.max;
            var min = Math.min;
            var floor = Math.floor;
            var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
            var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
            var maybeToString = function(it) {
                return it === undefined ? it : String(it);
            };
            // @@replace logic
            __webpack_require__("214f")('replace', 2, function(defined, REPLACE, $replace, maybeCallNative) {
                return [
                    // `String.prototype.replace` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                    function replace(searchValue, replaceValue) {
                        var O = defined(this);
                        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                    function(regexp, replaceValue) {
                        var res = maybeCallNative($replace, regexp, this, replaceValue);
                        if (res.done) return res.value;
                        var rx = anObject(regexp);
                        var S = String(this);
                        var functionalReplace = typeof replaceValue === 'function';
                        if (!functionalReplace) replaceValue = String(replaceValue);
                        var global = rx.global;
                        if (global) {
                            var fullUnicode = rx.unicode;
                            rx.lastIndex = 0;
                        }
                        var results = [];
                        while(true){
                            var result = regExpExec(rx, S);
                            if (result === null) break;
                            results.push(result);
                            if (!global) break;
                            var matchStr = String(result[0]);
                            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        }
                        var accumulatedResult = '';
                        var nextSourcePosition = 0;
                        for(var i = 0; i < results.length; i++){
                            result = results[i];
                            var matched = String(result[0]);
                            var position = max(min(toInteger(result.index), S.length), 0);
                            var captures = [];
                            // NOTE: This is equivalent to
                            //   captures = result.slice(1).map(maybeToString)
                            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                            for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                            var namedCaptures = result.groups;
                            if (functionalReplace) {
                                var replacerArgs = [
                                    matched
                                ].concat(captures, position, S);
                                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                var replacement = String(replaceValue.apply(undefined, replacerArgs));
                            } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                            if (position >= nextSourcePosition) {
                                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                nextSourcePosition = position + matched.length;
                            }
                        }
                        return accumulatedResult + S.slice(nextSourcePosition);
                    }
                ];
                // https://tc39.github.io/ecma262/#sec-getsubstitution
                function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                    var tailPos = position + matched.length;
                    var m = captures.length;
                    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                    if (namedCaptures !== undefined) {
                        namedCaptures = toObject(namedCaptures);
                        symbols = SUBSTITUTION_SYMBOLS;
                    }
                    return $replace.call(replacement, symbols, function(match, ch) {
                        var capture;
                        switch(ch.charAt(0)){
                            case '$':
                                return '$';
                            case '&':
                                return matched;
                            case '`':
                                return str.slice(0, position);
                            case "'":
                                return str.slice(tailPos);
                            case '<':
                                capture = namedCaptures[ch.slice(1, -1)];
                                break;
                            default:
                                var n = +ch;
                                if (n === 0) return match;
                                if (n > m) {
                                    var f = floor(n / 10);
                                    if (f === 0) return match;
                                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                    return match;
                                }
                                capture = captures[n - 1];
                        }
                        return capture === undefined ? '' : capture;
                    });
                }
            });
        /***/ },
        /***/ "aae3": /***/ function(module1, exports, __webpack_require__) {
            // 7.2.8 IsRegExp(argument)
            var isObject = __webpack_require__("d3f4");
            var cof = __webpack_require__("2d95");
            var MATCH = __webpack_require__("2b4c")('match');
            module1.exports = function(it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
            };
        /***/ },
        /***/ "ac6a": /***/ function(module1, exports, __webpack_require__) {
            var $iterators = __webpack_require__("cadf");
            var getKeys = __webpack_require__("0d58");
            var redefine = __webpack_require__("2aba");
            var global = __webpack_require__("7726");
            var hide = __webpack_require__("32e9");
            var Iterators = __webpack_require__("84f2");
            var wks = __webpack_require__("2b4c");
            var ITERATOR = wks('iterator');
            var TO_STRING_TAG = wks('toStringTag');
            var ArrayValues = Iterators.Array;
            var DOMIterables = {
                CSSRuleList: true,
                CSSStyleDeclaration: false,
                CSSValueList: false,
                ClientRectList: false,
                DOMRectList: false,
                DOMStringList: false,
                DOMTokenList: true,
                DataTransferItemList: false,
                FileList: false,
                HTMLAllCollection: false,
                HTMLCollection: false,
                HTMLFormElement: false,
                HTMLSelectElement: false,
                MediaList: true,
                MimeTypeArray: false,
                NamedNodeMap: false,
                NodeList: true,
                PaintRequestList: false,
                Plugin: false,
                PluginArray: false,
                SVGLengthList: false,
                SVGNumberList: false,
                SVGPathSegList: false,
                SVGPointList: false,
                SVGStringList: false,
                SVGTransformList: false,
                SourceBufferList: false,
                StyleSheetList: true,
                TextTrackCueList: false,
                TextTrackList: false,
                TouchList: false
            };
            for(var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++){
                var NAME = collections[i];
                var explicit = DOMIterables[NAME];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                var key;
                if (proto) {
                    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                    Iterators[NAME] = ArrayValues;
                    if (explicit) {
                        for(key in $iterators)if (!proto[key]) redefine(proto, key, $iterators[key], true);
                    }
                }
            }
        /***/ },
        /***/ "b0c5": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var regexpExec = __webpack_require__("520a");
            __webpack_require__("5ca1")({
                target: 'RegExp',
                proto: true,
                forced: regexpExec !== /./.exec
            }, {
                exec: regexpExec
            });
        /***/ },
        /***/ "be13": /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /***/ "c366": /***/ function(module1, exports, __webpack_require__) {
            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__("6821");
            var toLength = __webpack_require__("9def");
            var toAbsoluteIndex = __webpack_require__("77f1");
            module1.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "c649": /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */ (function(global) {
                __webpack_require__.d(__webpack_exports__, "c", function() {
                    return insertNodeAt;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                    return camelize;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() {
                    return console;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() {
                    return removeNode;
                });
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
                function getConsole() {
                    if (typeof window !== "undefined") return window.console;
                    return global.console;
                }
                var console = getConsole();
                function cached(fn) {
                    var cache = Object.create(null);
                    return function cachedFn(str) {
                        var hit = cache[str];
                        return hit || (cache[str] = fn(str));
                    };
                }
                var regex = /-(\w)/g;
                var camelize = cached(function(str) {
                    return str.replace(regex, function(_, c) {
                        return c ? c.toUpperCase() : "";
                    });
                });
                function removeNode(node) {
                    if (node.parentElement !== null) node.parentElement.removeChild(node);
                }
                function insertNodeAt(fatherNode, node, position) {
                    var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
                    fatherNode.insertBefore(node, refNode);
                }
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__("c8ba"));
        /***/ },
        /***/ "c69a": /***/ function(module1, exports, __webpack_require__) {
            module1.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function() {
                return Object.defineProperty(__webpack_require__("230e")('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "c8ba": /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /***/ "ca5a": /***/ function(module1, exports) {
            var id = 0;
            var px = Math.random();
            module1.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };
        /***/ },
        /***/ "cadf": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var addToUnscopables = __webpack_require__("9c6c");
            var step = __webpack_require__("d53b");
            var Iterators = __webpack_require__("84f2");
            var toIObject = __webpack_require__("6821");
            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module1.exports = __webpack_require__("01f9")(Array, 'Array', function(iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function() {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == 'keys') return step(0, index);
                if (kind == 'values') return step(0, O[index]);
                return step(0, [
                    index,
                    O[index]
                ]);
            }, 'values');
            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;
            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');
        /***/ },
        /***/ "cb7c": /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__("d3f4");
            module1.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };
        /***/ },
        /***/ "ce10": /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__("69a8");
            var toIObject = __webpack_require__("6821");
            var arrayIndexOf = __webpack_require__("c366")(false);
            var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
            module1.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "d2c8": /***/ function(module1, exports, __webpack_require__) {
            // helper for String#{startsWith, endsWith, includes}
            var isRegExp = __webpack_require__("aae3");
            var defined = __webpack_require__("be13");
            module1.exports = function(that, searchString, NAME) {
                if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
                return String(defined(that));
            };
        /***/ },
        /***/ "d3f4": /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
        /***/ },
        /***/ "d53b": /***/ function(module1, exports) {
            module1.exports = function(done, value) {
                return {
                    value: value,
                    done: !!done
                };
            };
        /***/ },
        /***/ "d8e8": /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };
        /***/ },
        /***/ "e11e": /***/ function(module1, exports) {
            // IE 8- don't enum bug keys
            module1.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        /***/ },
        /***/ "f559": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
            var $export = __webpack_require__("5ca1");
            var toLength = __webpack_require__("9def");
            var context = __webpack_require__("d2c8");
            var STARTS_WITH = 'startsWith';
            var $startsWith = ''[STARTS_WITH];
            $export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
                startsWith: function startsWith(searchString /* , position = 0 */ ) {
                    var that = context(this, searchString, STARTS_WITH);
                    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
                    var search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
                }
            });
        /***/ },
        /***/ "f6fd": /***/ function(module1, exports) {
            // document.currentScript polyfill by Adam Miller
            // MIT license
            (function(document1) {
                var currentScript = "currentScript", scripts = document1.getElementsByTagName('script'); // Live NodeList collection
                // If browser needs currentScript polyfill, add get currentScript() to the document object
                if (!(currentScript in document1)) Object.defineProperty(document1, currentScript, {
                    get: function() {
                        // IE 6-10 supports script readyState
                        // IE 10+ support stack trace
                        try {
                            throw new Error();
                        } catch (err) {
                            // Find the second match for the "at" string to get file src url from stack.
                            // Specifically works with the format of stack traces in IE.
                            var i, res = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(err.stack) || [
                                false
                            ])[1];
                            // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                            for(i in scripts){
                                if (scripts[i].src == res || scripts[i].readyState == "interactive") return scripts[i];
                            }
                            // If no match, return null
                            return null;
                        }
                    }
                });
            })(document);
        /***/ },
        /***/ "f751": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.3.1 Object.assign(target, source)
            var $export = __webpack_require__("5ca1");
            $export($export.S + $export.F, 'Object', {
                assign: __webpack_require__("7333")
            });
        /***/ },
        /***/ "fa5b": /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);
        /***/ },
        /***/ "fab2": /***/ function(module1, exports, __webpack_require__) {
            var document1 = __webpack_require__("7726").document;
            module1.exports = document1 && document1.documentElement;
        /***/ },
        /***/ "fb15": /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
            // This file is imported into lib/wc client bundles.
            if (typeof window !== 'undefined') {
                __webpack_require__("f6fd");
                var setPublicPath_i;
                if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
                ;
            }
            // Indicate to webpack that this file can be concatenated
            /* harmony default export */ var setPublicPath = null;
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
            var es6_object_assign = __webpack_require__("f751");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
            var es6_string_starts_with = __webpack_require__("f559");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
            var web_dom_iterable = __webpack_require__("ac6a");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
            var es6_array_iterator = __webpack_require__("cadf");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
            var es6_object_keys = __webpack_require__("456d");
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
            function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally{
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
            var es7_array_includes = __webpack_require__("6762");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
            var es6_string_includes = __webpack_require__("2fdb");
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return _arrayLikeToArray(arr);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
            function _iterableToArray(iter) {
                if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
            function _toConsumableArray(arr) {
                return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }
            // EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
            var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
            var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/ __webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);
            // EXTERNAL MODULE: ./src/util/helper.js
            var helper = __webpack_require__("c649");
            // CONCATENATED MODULE: ./src/vuedraggable.js
            function buildAttribute(object, propName, value) {
                if (value === undefined) return object;
                object = object || {};
                object[propName] = value;
                return object;
            }
            function computeVmIndex(vnodes, element) {
                return vnodes.map(function(elt) {
                    return elt.elm;
                }).indexOf(element);
            }
            function _computeIndexes(slots, children, isTransition, footerOffset) {
                if (!slots) return [];
                var elmFromNodes = slots.map(function(elt) {
                    return elt.elm;
                });
                var footerIndex = children.length - footerOffset;
                var rawIndexes = _toConsumableArray(children).map(function(elt, idx) {
                    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
                });
                return isTransition ? rawIndexes.filter(function(ind) {
                    return ind !== -1;
                }) : rawIndexes;
            }
            function emit(evtName, evtData) {
                var _this = this;
                this.$nextTick(function() {
                    return _this.$emit(evtName.toLowerCase(), evtData);
                });
            }
            function delegateAndEmit(evtName) {
                var _this2 = this;
                return function(evtData) {
                    if (_this2.realList !== null) _this2["onDrag" + evtName](evtData);
                    emit.call(_this2, evtName, evtData);
                };
            }
            function isTransitionName(name) {
                return [
                    "transition-group",
                    "TransitionGroup"
                ].includes(name);
            }
            function vuedraggable_isTransition(slots) {
                if (!slots || slots.length !== 1) return false;
                var _slots = _slicedToArray(slots, 1), componentOptions = _slots[0].componentOptions;
                if (!componentOptions) return false;
                return isTransitionName(componentOptions.tag);
            }
            function getSlot(slot, scopedSlot, key) {
                return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
            }
            function computeChildrenAndOffsets(children, slot, scopedSlot) {
                var headerOffset = 0;
                var footerOffset = 0;
                var header = getSlot(slot, scopedSlot, "header");
                if (header) {
                    headerOffset = header.length;
                    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
                }
                var footer = getSlot(slot, scopedSlot, "footer");
                if (footer) {
                    footerOffset = footer.length;
                    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
                }
                return {
                    children: children,
                    headerOffset: headerOffset,
                    footerOffset: footerOffset
                };
            }
            function getComponentAttributes($attrs, componentData) {
                var attributes = null;
                var update = function update(name, value) {
                    attributes = buildAttribute(attributes, name, value);
                };
                var attrs = Object.keys($attrs).filter(function(key) {
                    return key === "id" || key.startsWith("data-");
                }).reduce(function(res, key) {
                    res[key] = $attrs[key];
                    return res;
                }, {});
                update("attrs", attrs);
                if (!componentData) return attributes;
                var on = componentData.on, props = componentData.props, componentDataAttrs = componentData.attrs;
                update("on", on);
                update("props", props);
                Object.assign(attributes.attrs, componentDataAttrs);
                return attributes;
            }
            var eventsListened = [
                "Start",
                "Add",
                "Remove",
                "Update",
                "End"
            ];
            var eventsToEmit = [
                "Choose",
                "Unchoose",
                "Sort",
                "Filter",
                "Clone"
            ];
            var readonlyProperties = [
                "Move"
            ].concat(eventsListened, eventsToEmit).map(function(evt) {
                return "on" + evt;
            });
            var draggingElement = null;
            var props = {
                options: Object,
                list: {
                    type: Array,
                    required: false,
                    default: null
                },
                value: {
                    type: Array,
                    required: false,
                    default: null
                },
                noTransitionOnDrag: {
                    type: Boolean,
                    default: false
                },
                clone: {
                    type: Function,
                    default: function _default(original) {
                        return original;
                    }
                },
                element: {
                    type: String,
                    default: "div"
                },
                tag: {
                    type: String,
                    default: null
                },
                move: {
                    type: Function,
                    default: null
                },
                componentData: {
                    type: Object,
                    required: false,
                    default: null
                }
            };
            var draggableComponent = {
                name: "draggable",
                inheritAttrs: false,
                props: props,
                data: function data() {
                    return {
                        transitionMode: false,
                        noneFunctionalComponentMode: false
                    };
                },
                render: function render(h) {
                    var slots = this.$slots.default;
                    this.transitionMode = vuedraggable_isTransition(slots);
                    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots), children = _computeChildrenAndOf.children, headerOffset = _computeChildrenAndOf.headerOffset, footerOffset = _computeChildrenAndOf.footerOffset;
                    this.headerOffset = headerOffset;
                    this.footerOffset = footerOffset;
                    var attributes = getComponentAttributes(this.$attrs, this.componentData);
                    return h(this.getTag(), attributes, children);
                },
                created: function created() {
                    if (this.list !== null && this.value !== null) helper["b" /* console */ ].error("Value and list props are mutually exclusive! Please set one or another.");
                    if (this.element !== "div") helper["b" /* console */ ].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
                    if (this.options !== undefined) helper["b" /* console */ ].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
                },
                mounted: function mounted() {
                    var _this3 = this;
                    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();
                    if (this.noneFunctionalComponentMode && this.transitionMode) throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
                    var optionsAdded = {};
                    eventsListened.forEach(function(elt) {
                        optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
                    });
                    eventsToEmit.forEach(function(elt) {
                        optionsAdded["on" + elt] = emit.bind(_this3, elt);
                    });
                    var attributes = Object.keys(this.$attrs).reduce(function(res, key) {
                        res[Object(helper["a" /* camelize */ ])(key)] = _this3.$attrs[key];
                        return res;
                    }, {});
                    var options = Object.assign({}, this.options, attributes, optionsAdded, {
                        onMove: function onMove(evt, originalEvent) {
                            return _this3.onDragMove(evt, originalEvent);
                        }
                    });
                    !("draggable" in options) && (options.draggable = ">*");
                    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
                    this.computeIndexes();
                },
                beforeDestroy: function beforeDestroy() {
                    if (this._sortable !== undefined) this._sortable.destroy();
                },
                computed: {
                    rootContainer: function rootContainer() {
                        return this.transitionMode ? this.$el.children[0] : this.$el;
                    },
                    realList: function realList() {
                        return this.list ? this.list : this.value;
                    }
                },
                watch: {
                    options: {
                        handler: function handler(newOptionValue) {
                            this.updateOptions(newOptionValue);
                        },
                        deep: true
                    },
                    $attrs: {
                        handler: function handler(newOptionValue) {
                            this.updateOptions(newOptionValue);
                        },
                        deep: true
                    },
                    realList: function realList() {
                        this.computeIndexes();
                    }
                },
                methods: {
                    getIsFunctional: function getIsFunctional() {
                        var fnOptions = this._vnode.fnOptions;
                        return fnOptions && fnOptions.functional;
                    },
                    getTag: function getTag() {
                        return this.tag || this.element;
                    },
                    updateOptions: function updateOptions(newOptionValue) {
                        for(var property in newOptionValue){
                            var value = Object(helper["a" /* camelize */ ])(property);
                            if (readonlyProperties.indexOf(value) === -1) this._sortable.option(value, newOptionValue[property]);
                        }
                    },
                    getChildrenNodes: function getChildrenNodes() {
                        if (this.noneFunctionalComponentMode) return this.$children[0].$slots.default;
                        var rawNodes = this.$slots.default;
                        return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
                    },
                    computeIndexes: function computeIndexes() {
                        var _this4 = this;
                        this.$nextTick(function() {
                            _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
                        });
                    },
                    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
                        var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
                        if (index === -1) //Edge case during move callback: related element might be
                        //an element different from collection
                        return null;
                        var element = this.realList[index];
                        return {
                            index: index,
                            element: element
                        };
                    },
                    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
                        var vue = _ref.__vue__;
                        if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
                            if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
                            return vue;
                        }
                        return vue.$parent;
                    },
                    emitChanges: function emitChanges(evt) {
                        var _this5 = this;
                        this.$nextTick(function() {
                            _this5.$emit("change", evt);
                        });
                    },
                    alterList: function alterList(onList) {
                        if (this.list) {
                            onList(this.list);
                            return;
                        }
                        var newList = _toConsumableArray(this.value);
                        onList(newList);
                        this.$emit("input", newList);
                    },
                    spliceList: function spliceList() {
                        var _arguments = arguments;
                        var spliceList = function spliceList(list) {
                            return list.splice.apply(list, _toConsumableArray(_arguments));
                        };
                        this.alterList(spliceList);
                    },
                    updatePosition: function updatePosition(oldIndex, newIndex) {
                        var updatePosition = function updatePosition(list) {
                            return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
                        };
                        this.alterList(updatePosition);
                    },
                    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
                        var to = _ref2.to, related = _ref2.related;
                        var component = this.getUnderlyingPotencialDraggableComponent(to);
                        if (!component) return {
                            component: component
                        };
                        var list = component.realList;
                        var context = {
                            list: list,
                            component: component
                        };
                        if (to !== related && list && component.getUnderlyingVm) {
                            var destination = component.getUnderlyingVm(related);
                            if (destination) return Object.assign(destination, context);
                        }
                        return context;
                    },
                    getVmIndex: function getVmIndex(domIndex) {
                        var indexes = this.visibleIndexes;
                        var numberIndexes = indexes.length;
                        return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
                    },
                    getComponent: function getComponent() {
                        return this.$slots.default[0].componentInstance;
                    },
                    resetTransitionData: function resetTransitionData(index) {
                        if (!this.noTransitionOnDrag || !this.transitionMode) return;
                        var nodes = this.getChildrenNodes();
                        nodes[index].data = null;
                        var transitionContainer = this.getComponent();
                        transitionContainer.children = [];
                        transitionContainer.kept = undefined;
                    },
                    onDragStart: function onDragStart(evt) {
                        this.context = this.getUnderlyingVm(evt.item);
                        evt.item._underlying_vm_ = this.clone(this.context.element);
                        draggingElement = evt.item;
                    },
                    onDragAdd: function onDragAdd(evt) {
                        var element = evt.item._underlying_vm_;
                        if (element === undefined) return;
                        Object(helper["d" /* removeNode */ ])(evt.item);
                        var newIndex = this.getVmIndex(evt.newIndex);
                        this.spliceList(newIndex, 0, element);
                        this.computeIndexes();
                        var added = {
                            element: element,
                            newIndex: newIndex
                        };
                        this.emitChanges({
                            added: added
                        });
                    },
                    onDragRemove: function onDragRemove(evt) {
                        Object(helper["c" /* insertNodeAt */ ])(this.rootContainer, evt.item, evt.oldIndex);
                        if (evt.pullMode === "clone") {
                            Object(helper["d" /* removeNode */ ])(evt.clone);
                            return;
                        }
                        var oldIndex = this.context.index;
                        this.spliceList(oldIndex, 1);
                        var removed = {
                            element: this.context.element,
                            oldIndex: oldIndex
                        };
                        this.resetTransitionData(oldIndex);
                        this.emitChanges({
                            removed: removed
                        });
                    },
                    onDragUpdate: function onDragUpdate(evt) {
                        Object(helper["d" /* removeNode */ ])(evt.item);
                        Object(helper["c" /* insertNodeAt */ ])(evt.from, evt.item, evt.oldIndex);
                        var oldIndex = this.context.index;
                        var newIndex = this.getVmIndex(evt.newIndex);
                        this.updatePosition(oldIndex, newIndex);
                        var moved = {
                            element: this.context.element,
                            oldIndex: oldIndex,
                            newIndex: newIndex
                        };
                        this.emitChanges({
                            moved: moved
                        });
                    },
                    updateProperty: function updateProperty(evt, propertyName) {
                        evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
                    },
                    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
                        if (!relatedContext.element) return 0;
                        var domChildren = _toConsumableArray(evt.to.children).filter(function(el) {
                            return el.style["display"] !== "none";
                        });
                        var currentDOMIndex = domChildren.indexOf(evt.related);
                        var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
                        var draggedInList = domChildren.indexOf(draggingElement) !== -1;
                        return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
                    },
                    onDragMove: function onDragMove(evt, originalEvent) {
                        var onMove = this.move;
                        if (!onMove || !this.realList) return true;
                        var relatedContext = this.getRelatedContextFromMoveEvent(evt);
                        var draggedContext = this.context;
                        var futureIndex = this.computeFutureIndex(relatedContext, evt);
                        Object.assign(draggedContext, {
                            futureIndex: futureIndex
                        });
                        var sendEvt = Object.assign({}, evt, {
                            relatedContext: relatedContext,
                            draggedContext: draggedContext
                        });
                        return onMove(sendEvt, originalEvent);
                    },
                    onDragEnd: function onDragEnd() {
                        this.computeIndexes();
                        draggingElement = null;
                    }
                }
            };
            if (typeof window !== "undefined" && "Vue" in window) window.Vue.component("draggable", draggableComponent);
            /* harmony default export */ var vuedraggable = draggableComponent;
            // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
            /* harmony default export */ var entry_lib = __webpack_exports__["default"] = vuedraggable;
        /***/ }
    })["default"];
});

},{"f2b29fe3c2c19cbd":"hJ8D9"}],"hJ8D9":[function(require,module,exports,__globalThis) {
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
var version = "1.10.2";
function userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? 'add' : 'remove'](name);
        else {
            var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
            el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, '');
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf('webkit') === -1) prop = '-webkit-' + prop;
            style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = '';
    if (typeof el === 'string') appliedTransforms = el;
    else do {
        var transform = css(el, 'transform');
        if (transform && transform !== 'none') appliedTransforms = transform + ' ' + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, 'border-top-width'));
                left -= containerRect.left + parseInt(css(container, 'border-left-width'));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === 'top' || parentSide === 'left') visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, 'position', 'absolute');
    css(el, 'top', rect.top);
    css(el, 'left', rect.left);
    css(el, 'width', rect.width);
    css(el, 'height', rect.height);
}
function unsetRect(el) {
    css(el, 'position', '');
    css(el, 'top', '');
    css(el, 'left', '');
    css(el, 'width', '');
    css(el, 'height', '');
}
var expando = 'Sortable' + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === 'function') callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === 'function') callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === 'function') callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, 'transition', '');
                css(target, 'transform', '');
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
                repaint(target); // repaint
                css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                css(target, 'transform', 'translate3d(0,0,0)');
                typeof target.animated === 'number' && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, 'transition', '');
                    css(target, 'transform', '');
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + 'Global';
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            _extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== 'undefined') sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== 'function') return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, [
        "evt"
    ]);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== 'undefined', PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float', // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'), supportCssPointerEvents = function() {
    if (!documentExists) return; // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    if (elCSS.display === 'grid') return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        if (lastChild(sortable)) return;
        var rect = getRect(sortable), threshold = sortable[expando].options.emptyInsertThreshold, insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (threshold && insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === 'clone') return value;
            else if (typeof value === 'function') return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, 'display', 'none');
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, 'display', '');
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists) document.addEventListener('click', function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options); // Export instance
    el[expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    _prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) on(el, 'pointerdown', this._onTapStart);
    else {
        on(el, 'mousedown', this._onTapStart);
        on(el, 'touchstart', this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, 'dragover', this);
        on(el, 'dragenter', this);
    }
    sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter
        if (typeof filter === 'function') {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: 'filter',
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent('filter', _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(',').some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: 'filter',
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent('filter', _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style['will-change'] = 'all';
            dragStartFn = function dragStartFn() {
                pluginEvent('delayEnded', _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: 'choose',
                    originalEvent: evt
                }); // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(',').forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'mouseup', _this._onDrop);
            on(ownerDocument, 'touchend', _this._onDrop);
            on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent('delayStart', this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._disableDelayedDrag);
        off(ownerDocument, 'touchend', this._disableDelayedDrag);
        off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
        off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == 'touch' && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, 'pointermove', this._onTouchMove);
            else if (touch) on(document, 'touchmove', this._onTouchMove);
            else on(document, 'mousemove', this._onTouchMove);
        } else {
            on(dragEl, 'dragend', this);
            on(rootEl, 'dragstart', this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent('dragStarted', this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, 'dragover', _checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost(); // Drag start event
            _dispatchEvent({
                sortable: this,
                name: 'start',
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, 'webkitTransform', cssMatrix);
                css(ghostEl, 'mozTransform', cssMatrix);
                css(ghostEl, 'msTransform', cssMatrix);
                css(ghostEl, 'transform', cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, 'transition', '');
            css(ghostEl, 'transform', '');
            css(ghostEl, 'box-sizing', 'border-box');
            css(ghostEl, 'margin', 0);
            css(ghostEl, 'top', rect.top);
            css(ghostEl, 'left', rect.left);
            css(ghostEl, 'width', rect.width);
            css(ghostEl, 'height', rect.height);
            css(ghostEl, 'opacity', '0.8');
            css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
            css(ghostEl, 'zIndex', '100000');
            css(ghostEl, 'pointerEvents', 'none');
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl); // Set transform-origin
            css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent('dragStart', this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent('setupClone', this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.draggable = false;
            cloneEl.style['will-change'] = '';
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent('clone', _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: 'clone'
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, 'mouseup', _this._onDrop);
            off(document, 'touchend', _this._onDrop);
            off(document, 'touchcancel', _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = 'move';
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, 'drop', _this); // #1276 fix:
            css(dragEl, 'transform', 'translateZ(0)');
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, 'selectstart', _this);
        moved = true;
        if (Safari) css(document.body, 'user-select', 'none');
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? 'vertical' : 'horizontal',
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent('dragOverAnimationCapture');
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent('dragOverCompleted', {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent('dragOverAnimationComplete');
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: 'change',
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = closest(target, options.draggable, el, true);
        dragOverEvent('dragOver');
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl) // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === 'vertical';
            dragRect = getRect(dragEl);
            dragOverEvent('dragOverValid');
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent('revert');
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                 // assign target only if condition is true
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? 'top' : 'left', scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                lastTarget = target;
                lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild(dragEl);
                    else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, 'mousemove', this._onTouchMove);
        off(document, 'touchmove', this._onTouchMove);
        off(document, 'pointermove', this._onTouchMove);
        off(document, 'dragover', nearestEmptyInsertDetectEvent);
        off(document, 'mousemove', nearestEmptyInsertDetectEvent);
        off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._onDrop);
        off(ownerDocument, 'touchend', this._onDrop);
        off(ownerDocument, 'pointerup', this._onDrop);
        off(ownerDocument, 'touchcancel', this._onDrop);
        off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent('drop', this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            off(document, 'drop', this);
            off(el, 'dragstart', this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, 'user-select', '');
        css(dragEl, 'transform', '');
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, 'dragend', this);
                _disableDraggable(dragEl);
                dragEl.style['will-change'] = ''; // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: 'unchoose',
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: 'add',
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        }); // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: 'remove',
                            toEl: parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: 'sort',
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: 'sort',
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: 'update',
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: 'sort',
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: 'end',
                        toEl: parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent('nulling', this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case 'drop':
            case 'dragend':
                this._onDrop(evt);
                break;
            case 'dragenter':
            case 'dragover':
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case 'selectstart':
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== 'undefined') options[name] = modifiedValue;
            else options[name] = value;
            if (name === 'group') _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent('destroy', this);
        var el = this.el;
        el[expando] = null;
        off(el, 'mousedown', this._onTapStart);
        off(el, 'touchstart', this._onTapStart);
        off(el, 'pointerdown', this._onTapStart);
        if (this.nativeDraggable) {
            off(el, 'dragover', this);
            off(el, 'dragenter', this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function(el) {
            el.removeAttribute('draggable');
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent('hideClone', this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, 'display', 'none');
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== 'clone') {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent('showClone', this);
            if (Sortable.eventCanceled) return; // show clone at dragEl or original position
            if (rootEl.contains(dragEl) && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, 'display', '');
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = 'move';
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent('move', true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if (documentExists) on(document, 'touchmove', function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
}; // Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, 'dragover', this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, 'pointermove', this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, 'touchmove', this._handleFallbackAutoScroll);
                else on(document, 'mousemove', this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, 'dragover', this._handleAutoScroll);
            else {
                off(document, 'pointermove', this._handleFallbackAutoScroll);
                off(document, 'touchmove', this._handleFallbackAutoScroll);
                off(document, 'mousemove', this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: 'scroll',
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === 'function') {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent('spill');
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: 'removeOnSpill'
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: 'sortable-swap-highlight'
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: 'swap',
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
        if (sortable.options.supportPointer) on(document, 'pointerup', this._deselectMultiDrag);
        else {
            on(document, 'mouseup', this._deselectMultiDrag);
            on(document, 'touchend', this._deselectMultiDrag);
        }
        on(document, 'keydown', this._checkKeyDown);
        on(document, 'keyup', this._checkKeyUp);
        this.defaults = {
            selectedClass: 'sortable-selected',
            multiDragKey: null,
            setData: function setData(dataTransfer, dragEl) {
                var data = '';
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? '' : ', ') + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData('Text', data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style['will-change'] = '';
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent('clone');
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach(function(clone) {
                css(clone, 'display', '');
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone) {
                css(clone, 'display', 'none');
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            }); // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, 'position', 'absolute');
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: clonesFromRect
                            });
                            clone.fromRect = clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'select',
                        targetEl: dragEl$1,
                        originalEvt: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: 'select',
                                    targetEl: children[i],
                                    originalEvt: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'deselect',
                        targetEl: dragEl$1,
                        originalEvt: evt
                    });
                }
            } // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                // Do not "unfold" after around dragEl if reverted
                if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent('update');
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, 'pointerup', this._deselectMultiDrag);
            off(document, 'mouseup', this._deselectMultiDrag);
            off(document, 'touchend', this._deselectMultiDrag);
            off(document, 'keydown', this._checkKeyDown);
            off(document, 'keyup', this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: 'deselect',
                    targetEl: el,
                    originalEvt: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: 'multiDrag',
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if (folding && multiDragElement !== dragEl$1) newIndex = -1;
                else if (folding) newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
                else newIndex = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === 'ctrl') key = 'Control';
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-ticket.e6d4b0d8.js.map
