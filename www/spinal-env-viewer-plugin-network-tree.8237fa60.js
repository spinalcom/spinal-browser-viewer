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
})({"aS2yR":[function(require,module,exports,__globalThis) {
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
// Bacnet
__exportStar(require("56cefb5faadbf0d9"), exports);
__exportStar(require("2f9db6393495b73"), exports);
__exportStar(require("c19be94333640961"), exports);
__exportStar(require("3e5166ec14a732b5"), exports);
__exportStar(require("817e51d4197c6c98"), exports);
// Organ
__exportStar(require("956b6d839e7d5a18"), exports);
// Data
__exportStar(require("f1c213c8cdc748fb"), exports);
__exportStar(require("6f557d012c572713"), exports);
__exportStar(require("61468a17e7b3f3a9"), exports);

},{"56cefb5faadbf0d9":"fEfdR","2f9db6393495b73":"g8gPN","c19be94333640961":"6DOYb","3e5166ec14a732b5":"jhmba","817e51d4197c6c98":"fQbfn","956b6d839e7d5a18":"276nJ","f1c213c8cdc748fb":"kmvKO","6f557d012c572713":"751gr","61468a17e7b3f3a9":"dkS4k"}],"fEfdR":[function(require,module,exports,__globalThis) {
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
exports.SpinalDisoverModel = void 0;
const spinal_core_connectorjs_type_1 = require("866865bba0aadf6f");
const StateEnum_1 = require("2365dbfdc11d314e");
const uuid_1 = require("49b2a9bc18f80f95");
class SpinalDisoverModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, contextInfo, network, organ){
        super();
        if (!graph || !contextInfo || !network || !organ) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            state: StateEnum_1.STATES.reseted,
            graph: graph ? new spinal_core_connectorjs_type_1.Pbr(graph) : undefined,
            devices: new spinal_core_connectorjs_type_1.Lst(),
            context: contextInfo || {},
            network: network || {},
            organ: organ,
            creation: Date.now()
        });
    }
    setDiscoveringMode() {
        this.state.set(StateEnum_1.STATES.discovering);
    // setTimeout(() => {
    //    if (this.state.get() === STATES.discovering) this.setTimeoutMode();
    // }, 40000)
    }
    setDiscoveredMode() {
        this.state.set(StateEnum_1.STATES.discovered);
    }
    setResetedMode() {
        this.state.set(StateEnum_1.STATES.reseted);
    }
    setTimeoutMode() {
        this.state.set(StateEnum_1.STATES.timeout);
    }
    setCreatingMode() {
        this.state.set(StateEnum_1.STATES.creating);
    }
    setCreatedMode() {
        this.state.set(StateEnum_1.STATES.created);
    }
    setErrorMode() {
        this.state.set(StateEnum_1.STATES.error);
    }
    getOrgan() {
        return __awaiter(this, void 0, void 0, function*() {
            // use ptr
            return this.organ;
        });
    }
    addToGraph() {
        return this.getOrgan().then((organ)=>{
            return organ.addDiscoverModelToGraph(this);
        });
    }
    remove() {
        return this.getOrgan().then((organ)=>{
            return organ.removeDiscoverModelFromGraph(this);
        });
    }
}
exports.SpinalDisoverModel = SpinalDisoverModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalDisoverModel
]);
exports.default = SpinalDisoverModel;

},{"866865bba0aadf6f":"1A32E","2365dbfdc11d314e":"kmvKO","49b2a9bc18f80f95":"f1qTK"}],"kmvKO":[function(require,module,exports,__globalThis) {
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
exports.STATES = void 0;
var STATES;
(function(STATES) {
    STATES[STATES["error"] = -1] = "error";
    STATES[STATES["reseted"] = 0] = "reseted";
    STATES[STATES["discovering"] = 1] = "discovering";
    STATES[STATES["discovered"] = 2] = "discovered";
    STATES[STATES["timeout"] = 3] = "timeout";
    STATES[STATES["creating"] = 4] = "creating";
    STATES[STATES["created"] = 5] = "created";
})(STATES = exports.STATES || (exports.STATES = {}));

},{}],"g8gPN":[function(require,module,exports,__globalThis) {
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
exports.SpinalListenerModel = void 0;
const spinal_core_connectorjs_type_1 = require("ec4a552073f149cb");
const uuid_1 = require("b1c2433a8f8e91e6");
class SpinalListenerModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, network, bmsDevice, organ, monitor){
        super();
        if (!graph || !context || !network || !bmsDevice || !organ || !monitor) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            graph: new spinal_core_connectorjs_type_1.Pbr(graph),
            listen: true,
            saveTimeSeries: false,
            // timeInterval: timeInterval,
            device: new spinal_core_connectorjs_type_1.Pbr(bmsDevice),
            context: new spinal_core_connectorjs_type_1.Pbr(context),
            network: new spinal_core_connectorjs_type_1.Pbr(network),
            organ: new spinal_core_connectorjs_type_1.Pbr(organ),
            monitor: monitor
        });
    }
    getAllData() {
        return __awaiter(this, void 0, void 0, function*() {
            //   const promises = [this.getGraph(), this.getOrgan(), this.getContext(), this.getBmsDevice(), this.getNetwork(), this.getProfile()];
            const promises = [
                this.getGraph(),
                this.getOrgan(),
                this.getContext(),
                this.getBmsDevice(),
                this.getNetwork()
            ];
            const [graph, organ, context, device, network, profile] = yield Promise.all(promises);
            return {
                graph,
                organ,
                context,
                device,
                network,
                profile
            };
        });
    }
    getGraph() {
        return this._loadData('graph');
    }
    getOrgan() {
        return this._loadData('organ');
    }
    getContext() {
        return this._loadData('context');
    }
    getBmsDevice() {
        return this._loadData('device');
    }
    getNetwork() {
        return this._loadData('network');
    }
    //  public getProfile(): Promise<SpinalNode> {
    //      return this._loadData('profile');
    //  }
    addToGraph() {
        return this.getOrgan().then((organModel)=>__awaiter(this, void 0, void 0, function*() {
                // const organModel = await organNode.getElement(true);
                // if (organModel) {
                yield this.addToDevice(); // add reference to listener in device
                return organModel.addListenerModelToGraph(this); // add listener to organ listener list
            // }
            }));
    }
    removeFromGraph() {
        const promises = [
            this.getOrgan(),
            this.getBmsDevice()
        ];
        return Promise.all(promises).then(([organModel, deviceNode])=>__awaiter(this, void 0, void 0, function*() {
                // const organModel = await organNode.getElement(true);
                // if (organModel) {
                deviceNode.info.remove_attr('listener'); // remove reference to listener in device
                return organModel.removeListenerModelFromGraph(this); // remove listener from organ listener list
            // }
            }));
    }
    addToDevice() {
        return this.getBmsDevice().then((device)=>{
            if (device.info.listeners) device.info.rem_attr('listener');
            device.info.add_attr({
                listener: new spinal_core_connectorjs_type_1.Pbr(this)
            });
        });
    }
    _loadData(dataName) {
        return new Promise((resolve, reject)=>{
            try {
                if (this[dataName] === undefined) throw new Error(`${dataName} not found`);
                this[dataName].load((data)=>resolve(data));
            } catch (error) {
                reject(error);
            }
        });
    }
}
exports.SpinalListenerModel = SpinalListenerModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalListenerModel
]);
exports.default = SpinalListenerModel;

},{"ec4a552073f149cb":"1A32E","b1c2433a8f8e91e6":"f1qTK"}],"6DOYb":[function(require,module,exports,__globalThis) {
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
exports.SpinalBacnetValueModel = void 0;
const spinal_core_connectorjs_type_1 = require("b5e4028893e992d9");
const uuid_1 = require("3f378c20bd8a8238");
class SpinalBacnetValueModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, organ, network, node, sensor){
        super();
        if (!graph || !context || !organ || !network || !node || !sensor) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            context: new spinal_core_connectorjs_type_1.Pbr(context),
            node: new spinal_core_connectorjs_type_1.Pbr(node),
            graph: new spinal_core_connectorjs_type_1.Pbr(graph),
            network: new spinal_core_connectorjs_type_1.Pbr(network),
            organ: new spinal_core_connectorjs_type_1.Pbr(organ),
            state: 'wait',
            sensor: sensor,
            progress: 0
        });
    }
    addToGraph() {
        return this.loadItem("organ").then((organElement)=>__awaiter(this, void 0, void 0, function*() {
                // const organElement = await organ.getElement(true);
                // if(organElement){
                const length = yield organElement.addAllBacnetModelToGraph(this);
                yield this.addToNode();
                return length;
            // }
            }));
    }
    removeFromGraph() {
        return this.loadItem("organ").then((organElement)=>__awaiter(this, void 0, void 0, function*() {
                // const organElement = await organ.getElement(true);
                // if(organElement){
                const removed = yield organElement.removebacnetValueModelFromGraph(this);
                yield this.remFromNode();
                return removed;
            // }
            }));
    }
    addToNode() {
        return this.loadItem('node').then((node)=>{
            node.info.add_attr({
                bacnet: new spinal_core_connectorjs_type_1.Ptr(this)
            });
        });
    }
    remFromNode() {
        return this.loadItem('node').then((node)=>{
            if (node.info.bacnet) node.info.rem_attr("bacnet");
            node.info.rem_attr('bacnet');
        });
    }
    getAllItem() {
        const promises = [
            this.loadItem('context'),
            this.loadItem('node'),
            this.loadItem('graph'),
            this.loadItem('network'),
            this.loadItem('organ')
        ];
        return Promise.all(promises).then(([context, node, graph, network, organ])=>{
            return {
                context,
                node,
                graph,
                network,
                organ
            };
        });
    }
    loadItem(name) {
        return new Promise((resolve, reject)=>{
            this[name].load((res)=>{
                resolve(res);
            });
        });
    }
    setWaitState() {
        this.state.set("wait");
    }
    setRecoverState() {
        this.state.set("recover");
    }
    setProgressState() {
        this.state.set("progress");
    }
    setNormalState() {
        this.state.set("normal");
    }
    setSuccessState() {
        this.state.set("success");
    }
    setErrorState() {
        this.state.set("error");
    }
}
exports.SpinalBacnetValueModel = SpinalBacnetValueModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalBacnetValueModel
]);
exports.default = SpinalBacnetValueModel;

},{"b5e4028893e992d9":"1A32E","3f378c20bd8a8238":"f1qTK"}],"jhmba":[function(require,module,exports,__globalThis) {
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
exports.SpinalMonitorInfoModel = void 0;
const spinal_core_connectorjs_type_1 = require("215aa3dc58930590");
const uuid_1 = require("aefe8f4abc7008fe");
class SpinalMonitorInfoModel extends spinal_core_connectorjs_type_1.Model {
    constructor(profil, monit){
        super();
        if (!profil || !monit) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            profil: new spinal_core_connectorjs_type_1.Pbr(profil),
            data: monit
        });
    }
    getMonitoringData() {
        return this.data.get();
    }
}
exports.SpinalMonitorInfoModel = SpinalMonitorInfoModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalMonitorInfoModel
]);
exports.default = SpinalMonitorInfoModel;

},{"215aa3dc58930590":"1A32E","aefe8f4abc7008fe":"f1qTK"}],"fQbfn":[function(require,module,exports,__globalThis) {
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
exports.SpinalPilotModel = void 0;
const spinal_core_connectorjs_type_1 = require("b96878e6c0ee0ad1");
const uuid_1 = require("308104debf5db104");
class SpinalPilotModel extends spinal_core_connectorjs_type_1.Model {
    constructor(organ, request, nodeToPilot){
        super();
        if (!organ || !request) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            state: new spinal_core_connectorjs_type_1.Choice(0, [
                "normal",
                "process",
                "success",
                "error"
            ]),
            organ: organ,
            node: nodeToPilot,
            requests: Array.isArray(request) ? request : [
                request
            ]
        });
    }
    setNormalMode() {
        this.state.set("normal");
    }
    setProcessMode() {
        this.state.set("process");
    }
    setSuccessMode() {
        this.state.set("success");
    }
    setErrorMode() {
        this.state.set("error");
    }
    isNormal() {
        return this.state.get() === "normal";
    }
    getOrgan() {
        return __awaiter(this, void 0, void 0, function*() {
            return this.organ;
        });
    }
    addToGraph() {
        return this.getOrgan().then((organModel)=>__awaiter(this, void 0, void 0, function*() {
                // const organModel = await organNode.getElement(true);
                // if (organModel) {
                const length = yield organModel.addPilotModelToGraph(this);
                yield this.addToNode(this.node);
                return length;
            // }
            }));
    }
    removeFromGraph() {
        return this.getOrgan().then((organModel)=>__awaiter(this, void 0, void 0, function*() {
                // const organModel = await organNode.getElement(true);
                // if (organModel) {
                const removed = yield organModel.removePilotModelFromGraph(this);
                yield this.removeFromNode();
                return removed;
            // }
            }));
    }
    addToNode(endpoint) {
        return new Promise((resolve)=>{
            if (!endpoint.info.pilot) {
                const model = new spinal_core_connectorjs_type_1.Lst();
                model.push(this);
                endpoint.info.add_attr({
                    pilot: new spinal_core_connectorjs_type_1.Ptr(model)
                });
                resolve(model);
            } else endpoint.info.pilot.load((lst)=>{
                lst.push(this);
                resolve(lst);
            });
        }).then((res)=>{
            this.add_attr({
                node: endpoint
            });
            return res;
        });
    }
    removeFromNode() {
        return new Promise((resolve, reject)=>{
            if (this.node) this.node.info.pilot.load((lst)=>{
                for(let i = 0; i < lst.length; i++){
                    const element = lst[i];
                    if (element.id.get() === this.id.get()) {
                        lst.splice(i);
                        break;
                    }
                }
                resolve(true);
            });
            else resolve(false);
        });
    }
}
exports.SpinalPilotModel = SpinalPilotModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalPilotModel
]);
exports.default = SpinalPilotModel;

},{"b96878e6c0ee0ad1":"1A32E","308104debf5db104":"f1qTK"}],"276nJ":[function(require,module,exports,__globalThis) {
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
exports.SpinalOrganConfigModel = void 0;
const spinal_core_connectorjs_type_1 = require("eaff646cd57dc381");
const uuid_1 = require("7c21300510fdadb6");
const constants_1 = require("ae254f37488da623");
const modelsToBind_1 = require("3ea9b6f9010be7a0");
class SpinalOrganConfigModel extends spinal_core_connectorjs_type_1.Model {
    constructor(name, type = constants_1.BACNET_ORGAN_TYPE){
        super();
        if (!name) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            name,
            type,
            references: {},
            restart: false,
            discover: new modelsToBind_1.default(),
            pilot: new modelsToBind_1.default(),
            listener: new modelsToBind_1.default(),
            allbacnetCommand: new modelsToBind_1.default()
        });
    }
    _initializeModelsList() {
        if (!this.discover) this.add_attr({
            discover: new modelsToBind_1.default()
        });
        if (!this.pilot) this.add_attr({
            pilot: new modelsToBind_1.default()
        });
        if (!this.listener) this.add_attr({
            listener: new modelsToBind_1.default()
        });
        if (!this.allbacnetCommand) this.add_attr({
            allbacnetCommand: new modelsToBind_1.default()
        });
    }
    getModels() {
        this._initializeModelsList();
        return {
            discover: this.discover,
            pilot: this.pilot,
            listener: this.listener,
            allbacnetCommand: this.allbacnetCommand
        };
    }
    addReference(contextId, spinalNode) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e !== "undefined") return reject("The organ is already linked to this context");
                this.references.mod_attr(contextId, new spinal_core_connectorjs_type_1.Pbr(spinalNode));
                resolve(spinalNode);
            });
        });
        this.references.add_attr({
            [contextId]: new spinal_core_connectorjs_type_1.Pbr(spinalNode)
        });
        return Promise.resolve(spinalNode);
    }
    isReferencedInContext(contextId) {
        if (typeof this.references[contextId] === "undefined") return Promise.resolve(false);
        return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e === "undefined") return resolve(false);
                resolve(true);
            });
        });
    }
    removeReference(contextId) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((node)=>{
                this.references.rem_attr(contextId);
                resolve(node);
            });
        });
    }
    //// ADD MODELS
    addDiscoverModelToGraph(discoverModel) {
        this._initializeModelsList();
        return this.discover.addModel(discoverModel);
    }
    addPilotModelToGraph(pilotModel) {
        this._initializeModelsList();
        return this.pilot.addModel(pilotModel);
    }
    addListenerModelToGraph(listenerModel) {
        this._initializeModelsList();
        return this.listener.addModel(listenerModel);
    }
    addAllBacnetModelToGraph(bacnetValueModel) {
        this._initializeModelsList();
        return this.allbacnetCommand.addModel(bacnetValueModel);
    }
    //// REMOVE MODELS
    removeDiscoverModelFromGraph(discoverModel) {
        if (this.discover) return this.discover.removeModel(discoverModel);
    }
    removePilotModelFromGraph(pilotModel) {
        if (this.pilot) return this.pilot.removeModel(pilotModel);
    }
    removeListenerModelFromGraph(listenerModel) {
        this._initializeModelsList();
        if (this.listener) return this.listener.removeModel(listenerModel);
    }
    removebacnetValueModelFromGraph(bacnetValueModel) {
        this._initializeModelsList();
        if (this.allbacnetCommand) return this.allbacnetCommand.removeModel(bacnetValueModel);
    }
    //// GET MODELS
    getDiscoverModelFromGraph() {
        this._initializeModelsList();
        return this.discover.getModels();
    }
    getPilotModelFromGraph() {
        this._initializeModelsList();
        return this.pilot.getModels();
    }
    getListenerModelFromGraph() {
        this._initializeModelsList();
        return this.listener.getModels();
    }
    getBacnetValueModelFromGraph() {
        this._initializeModelsList();
        return this.allbacnetCommand.getModels();
    }
    ///// CONSUME MODELS
    consumeDiscoverModelFromGraph() {
        this._initializeModelsList();
        return this.discover.consumeModels();
    }
    consumePilotModelFromGraph() {
        this._initializeModelsList();
        return this.pilot.consumeModels();
    }
    consumeListenerModelFromGraph() {
        this._initializeModelsList();
        return this.listener.consumeModels();
    }
    consumeBacnetValueModelFromGraph() {
        this._initializeModelsList();
        return this.allbacnetCommand.consumeModels();
    }
}
exports.SpinalOrganConfigModel = SpinalOrganConfigModel;
SpinalOrganConfigModel.TYPE = constants_1.BACNET_ORGAN_TYPE;
SpinalOrganConfigModel.CONTEXT_TO_ORGAN_RELATION = "hasBmsNetworkOrgan";
//@ts-ignore
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOrganConfigModel
]);
exports.default = SpinalOrganConfigModel;

},{"eaff646cd57dc381":"1A32E","7c21300510fdadb6":"f1qTK","ae254f37488da623":"dkS4k","3ea9b6f9010be7a0":"bZitO"}],"dkS4k":[function(require,module,exports,__globalThis) {
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
exports.BACNET_ORGAN_TYPE = void 0;
const BACNET_ORGAN_TYPE = "BACNET_ORGAN";
exports.BACNET_ORGAN_TYPE = BACNET_ORGAN_TYPE;

},{}],"bZitO":[function(require,module,exports,__globalThis) {
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
exports.ModelsInfo = void 0;
const spinal_core_connectorjs_1 = require("c221cba5646076ad");
class ModelsInfo extends spinal_core_connectorjs_1.Model {
    constructor(){
        super();
        this.add_attr({
            modification_date: Date.now(),
            length: 0,
            data: new spinal_core_connectorjs_1.Ptr(new spinal_core_connectorjs_1.Lst())
        });
    }
    addModel(model) {
        return __awaiter(this, void 0, void 0, function*() {
            const dataList = yield this.getModels();
            dataList.push(model);
            this.length.set(dataList.length);
            this.modification_date.set(Date.now());
            return dataList.length;
        });
    }
    getModels() {
        return new Promise((resolve)=>{
            this.data.load((discoverList)=>resolve(discoverList));
        });
    }
    consumeModels() {
        return new Promise((resolve)=>{
            this.data.load((discoverList)=>{
                this.length.set(0);
                const arr = Array.from(discoverList);
                discoverList.clear();
                resolve(arr);
            });
        });
    }
    removeModel(model) {
        return __awaiter(this, void 0, void 0, function*() {
            const dataList = yield this.getModels();
            const lengthBeforeRemove = dataList.length;
            dataList.remove(model);
            this.length.set(dataList.length);
            return this.length.get() < lengthBeforeRemove;
        });
    }
}
exports.default = ModelsInfo;
exports.ModelsInfo = ModelsInfo;
spinal_core_connectorjs_1.spinalCore.register_models([
    ModelsInfo
]);

},{"c221cba5646076ad":"cQPh9"}],"751gr":[function(require,module,exports,__globalThis) {
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

},{}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-network-tree.8237fa60.js.map
