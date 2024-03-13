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
})({"lNoWE":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vuex = require("vuex");
var _vuexDefault = parcelHelpers.interopDefault(_vuex);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constantesJs = require("./constantes.js");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
(0, _vueDefault.default).config.productionTip = false;
(0, _vueDefault.default).use((0, _vuexDefault.default));
function initialState() {
    return {
        topBarButton: [],
        sideBarButton: [],
        contextsId: [],
        searchId: [],
        nodes: {},
        activeNodesId: [],
        sync: [],
        selectedNode: {},
        refreshed: false,
        childrenMapping: new Map()
    };
}
function refreshState() {
    return {
        activeNodesId: [],
        sync: [],
        selectedNode: {},
        refreshed: true
    };
}
let store = new (0, _vuexDefault.default).Store({
    state: initialState(),
    mutations: {
        ADD_CONTEXT: (state, context)=>{
            const contextId = context.id.get();
            if (state.contextId.includes(contextId)) {
                state.contextId.push(contextId);
                if (!state.nodes.hasOwnProperty(contextId)) state.nodes[contextId] = context;
            }
        },
        ADD_CONTEXTS: (state, contexts)=>{
            for(let i = 0; i < contexts.length; i++){
                const contextId = contexts[i].id.get();
                if (!state.contextsId.includes(contextId)) state.contextsId.push(contextId);
                if (!state.nodes.hasOwnProperty(contextId)) state.nodes[contextId] = contexts[i];
            }
        },
        UPDATE_CONTEXTS: (state, contexts)=>{
            for (const context of contexts){
                const contextId = context.id.get();
                const contextName = context.name.get();
                if (!state.nodes.hasOwnProperty(contextId)) state.nodes[contextId] = context;
                if (!state.contextsId.includes(contextId)) {
                    if (window.spinal.SHOW_HIDDEN_NODES === true) state.contextsId.push(contextId);
                    else if (contextName.startsWith(".") || contextName.startsWith("BIMObjectContext")) continue;
                    else state.contextsId.push(contextId);
                }
            }
            const toRms = state.contextsId.reduce((acc, contextId)=>{
                if (contexts.some((cont)=>{
                    return cont.id.get() === contextId;
                }) === false) acc.push(contextId);
                return acc;
            }, []);
            for (const toRm of toRms)state.contextsId.splice(state.contextsId.indexOf(toRm), 1);
        },
        ADD_NODE: (state, node)=>{
            if (typeof node !== "undefined" && !state.nodes.hasOwnProperty(node.id.get())) state.nodes[node.id.get()] = node;
        },
        ADD_NODES: (state, nodes)=>{
            for(let i = 0; i < nodes.length; i++){
                const nodeId = nodes[i].id.get();
                if (typeof nodes[i] !== "undefined" && !state.nodes.hasOwnProperty(nodeId)) state.nodes[nodeId] = nodes[i];
            }
        },
        GET_NODE: (state)=>{
            state.sync.splice(0);
        //cf GraphManager
        },
        SET_SIDE_BAR: (state, buttons)=>{
            const res = [];
            for(let i = 0; i < buttons.length; i++){
                const button = buttons[i];
                if (button.hasOwnProperty("buttonCfg")) {
                    const butCfg = button.buttonCfg;
                    butCfg.toolTip = button.label;
                    butCfg.action = button.action;
                    res.push({
                        button: butCfg,
                        badge_content: button.badgeCfg
                    });
                }
            }
            state.sideBarButton = res;
        },
        SET_ACTIVE_NODE: (state, activeNode)=>{
            state.activeNodesId = [
                activeNode
            ];
        },
        SET_SELECTED_NODE: (state, option)=>{
            state.selectedNode = option;
            state.selectedNode.graph = state.graph;
        },
        SET_GLOBAL_BAR: (state, bts)=>{
            const buttons = [];
            for(let i = 0; i < bts.length; i++){
                let button = bts[i];
                if (button.hasOwnProperty("buttonCfg")) {
                    let butcfg = button.buttonCfg;
                    butcfg.toolTip = button.label;
                    butcfg.action = button.action;
                    buttons.push({
                        button: butcfg,
                        badge_content: button.badgeCfg
                    });
                }
            }
            state.topBarButton = buttons;
        },
        SET_CHILDREN: (state, payload)=>{
            if (payload.hasOwnProperty("parentId") && payload.hasOwnProperty("children")) state.childrenMapping.set(payload.parentId, payload.children);
        },
        SET_GRAPH: (state, graph)=>{
            state.graph = graph;
        },
        SET_NODE: (state, node)=>{
            if (typeof node !== "undefined") {
                if (state.nodes.hasOwnProperty(node.id.get())) {
                    for(const key in node)if (node.hasOwnProperty(key)) state.nodes[node.id.get()][key] = node[key];
                } else state.nodes[node.id.get()] = node;
            }
        },
        SEARCH_TEXT: (state, text)=>{
            while(state.searchId.length > 0)state.searchId.splice(0);
            for(const key in state.nodes)if (state.nodes.hasOwnProperty(key)) {
                const node = state.nodes[key];
                if (node.hasOwnProperty("name") && node.name.get().toLowerCase().includes(text.toLowerCase())) state.searchId.push(key);
            }
        },
        REMOVE_NODE: (state, id)=>{
            if (state.nodes.hasOwnProperty(id)) delete state.nodes[id];
        },
        REFRESHED: (state)=>{
            state.refreshed = true;
        },
        REFRESH: (state)=>{
            const s = refreshState();
            for(let key in s)if (s.hasOwnProperty(key)) state[key] = s[key];
            state.refreshed = false;
        }
    },
    actions: {
        getNode (context, event) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNode(event).then((node)=>context.commit("ADD_NODE", node)).catch((e)=>console.error(e));
        },
        onNodeSelected (context, event) {
            const option = {};
            option[0, _constantesJs.OPTION_SELECTED_NODE_INFO] = context.state.nodes[event.nodeId];
            option[0, _constantesJs.OPTION_CONTEXT_INFO] = context.state.nodes[event.contextId];
            context.commit("SET_ACTIVE_NODE", event.nodeId);
            return (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).getApps("GraphManagerSideBar", option).then((buttons)=>{
                context.commit("SET_SIDE_BAR", buttons);
                context.commit("SET_SELECTED_NODE", option);
            }).catch((e)=>{
                console.error(e);
            });
        },
        retrieveGlobalBar (context, option) {
            return (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).getApps("GraphManagerTopBar", option).then((buttons)=>{
                context.commit("SET_GLOBAL_BAR", buttons);
            }).catch((e)=>{
                console.error(e);
            });
        },
        pullChildren (context, id) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(id, []).then((children)=>{
                context.commit("ADD_NODES", children);
            });
        }
    },
    getters: {
        arrayNode: (state)=>{
            return Array.from(state.nodes);
        },
        getNodeById: (state)=>(id)=>{
                return state.nodes[id];
            },
        getChildrenId: (state)=>(id)=>{
                return state.nodes[id].childrenIds;
            },
        hasChildInContext: (state)=>(id, contextsId)=>{
                return (0, _spinalEnvViewerGraphService.SpinalGraphService).hasChildInContext(id, contextsId);
            }
    }
});
exports.default = store;

},{"vue":"gt5MM","vuex":"cMZ5L","spinal-env-viewer-context-menu-service":"kHlxv","./constantes.js":"2ln12","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMZ5L":[function(require,module,exports) {
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
parcelHelpers.export(exports, "createLogger", ()=>createLogger);
parcelHelpers.export(exports, "createNamespacedHelpers", ()=>createNamespacedHelpers);
parcelHelpers.export(exports, "install", ()=>install);
parcelHelpers.export(exports, "mapActions", ()=>mapActions);
parcelHelpers.export(exports, "mapGetters", ()=>mapGetters);
parcelHelpers.export(exports, "mapMutations", ()=>mapMutations);
parcelHelpers.export(exports, "mapState", ()=>mapState);
var global = arguments[3];
function applyMixin(Vue) {
    var version = Number(Vue.version.split(".")[0]);
    if (version >= 2) Vue.mixin({
        beforeCreate: vuexInit
    });
    else {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        var _init = Vue.prototype._init;
        Vue.prototype._init = function(options) {
            if (options === void 0) options = {};
            options.init = options.init ? [
                vuexInit
            ].concat(options.init) : vuexInit;
            _init.call(this, options);
        };
    }
    /**
   * Vuex init hook, injected into each instances init hooks list.
   */ function vuexInit() {
        var options = this.$options;
        // store injection
        if (options.store) this.$store = typeof options.store === "function" ? options.store() : options.store;
        else if (options.parent && options.parent.$store) this.$store = options.parent.$store;
    }
}
var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store) {
    if (!devtoolHook) return;
    store._devtoolHook = devtoolHook;
    devtoolHook.emit("vuex:init", store);
    devtoolHook.on("vuex:travel-to-state", function(targetState) {
        store.replaceState(targetState);
    });
    store.subscribe(function(mutation, state) {
        devtoolHook.emit("vuex:mutation", mutation, state);
    }, {
        prepend: true
    });
    store.subscribeAction(function(action, state) {
        devtoolHook.emit("vuex:action", action, state);
    }, {
        prepend: true
    });
}
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */ function find(list, f) {
    return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */ function deepCopy(obj, cache) {
    if (cache === void 0) cache = [];
    // just return if obj is immutable value
    if (obj === null || typeof obj !== "object") return obj;
    // if obj is hit, it is in circular structure
    var hit = find(cache, function(c) {
        return c.original === obj;
    });
    if (hit) return hit.copy;
    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy: copy
    });
    Object.keys(obj).forEach(function(key) {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
}
/**
 * forEach for object
 */ function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
        return fn(obj[key], key);
    });
}
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
function isPromise(val) {
    return val && typeof val.then === "function";
}
function assert(condition, msg) {
    if (!condition) throw new Error("[vuex] " + msg);
}
function partial(fn, arg) {
    return function() {
        return fn(arg);
    };
}
// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
    this.runtime = runtime;
    // Store some children item
    this._children = Object.create(null);
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    // Store the origin module's state
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors = {
    namespaced: {
        configurable: true
    }
};
prototypeAccessors.namespaced.get = function() {
    return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
    return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
};
Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) this._rawModule.actions = rawModule.actions;
    if (rawModule.mutations) this._rawModule.mutations = rawModule.mutations;
    if (rawModule.getters) this._rawModule.getters = rawModule.getters;
};
Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) forEachValue(this._rawModule.getters, fn);
};
Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) forEachValue(this._rawModule.actions, fn);
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) forEachValue(this._rawModule.mutations, fn);
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection(rawRootModule) {
    // register root module (Vuex.Store options)
    this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
        return module.getChild(key);
    }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
        module = module.getChild(key);
        return namespace + (module.namespaced ? key + "/" : "");
    }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1 = this;
    if (runtime === void 0) runtime = true;
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) this.root = newModule;
    else {
        var parent = this.get(path.slice(0, -1));
        parent.addChild(path[path.length - 1], newModule);
    }
    // register nested modules
    if (rawModule.modules) forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1.register(path.concat(key), rawChildModule, runtime);
    });
};
ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) return;
    if (!child.runtime) return;
    parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) return parent.hasChild(key);
    return false;
};
function update(path, targetModule, newModule) {
    // update target module
    targetModule.update(newModule);
    // update nested modules
    if (newModule.modules) for(var key in newModule.modules){
        if (!targetModule.getChild(key)) return;
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
}
var functionAssert = {
    assert: function(value) {
        return typeof value === "function";
    },
    expected: "function"
};
var objectAssert = {
    assert: function(value) {
        return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
};
var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
};
function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
        if (!rawModule[key]) return;
        var assertOptions = assertTypes[key];
        forEachValue(rawModule[key], function(value, type) {
            assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
        });
    });
}
function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) buf += ' in module "' + path.join(".") + '"';
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
}
var Vue; // bind on install
var Store = function Store(options) {
    var this$1 = this;
    if (options === void 0) options = {};
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here. See #731
    if (!Vue && typeof window !== "undefined" && window.Vue) install(window.Vue);
    var plugins = options.plugins;
    if (plugins === void 0) plugins = [];
    var strict = options.strict;
    if (strict === void 0) strict = false;
    // store internal state
    this._committing = false;
    this._actions = Object.create(null);
    this._actionSubscribers = [];
    this._mutations = Object.create(null);
    this._wrappedGetters = Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = Object.create(null);
    this._subscribers = [];
    this._watcherVM = new Vue();
    this._makeLocalGettersCache = Object.create(null);
    // bind commit and dispatch to self
    var store = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
        return dispatch.call(store, type, payload);
    };
    this.commit = function boundCommit(type, payload, options) {
        return commit.call(store, type, payload, options);
    };
    // strict mode
    this.strict = strict;
    var state = this._modules.root.state;
    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    installModule(this, state, [], this._modules.root);
    // initialize the store vm, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreVM(this, state);
    // apply plugins
    plugins.forEach(function(plugin) {
        return plugin(this$1);
    });
    var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
    if (useDevtools) devtoolPlugin(this);
};
var prototypeAccessors$1 = {
    state: {
        configurable: true
    }
};
prototypeAccessors$1.state.get = function() {
    return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function(v) {};
Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1 = this;
    // check object-style commit
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = {
        type: type,
        payload: payload
    };
    var entry = this._mutations[type];
    if (!entry) return;
    this._withCommit(function() {
        entry.forEach(function commitIterator(handler) {
            handler(payload);
        });
    });
    this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function(sub) {
        return sub(mutation, this$1.state);
    });
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1 = this;
    // check object-style dispatch
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = {
        type: type,
        payload: payload
    };
    var entry = this._actions[type];
    if (!entry) return;
    try {
        this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
        .filter(function(sub) {
            return sub.before;
        }).forEach(function(sub) {
            return sub.before(action, this$1.state);
        });
    } catch (e) {}
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
        return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
        result.then(function(res) {
            try {
                this$1._actionSubscribers.filter(function(sub) {
                    return sub.after;
                }).forEach(function(sub) {
                    return sub.after(action, this$1.state);
                });
            } catch (e) {}
            resolve(res);
        }, function(error) {
            try {
                this$1._actionSubscribers.filter(function(sub) {
                    return sub.error;
                }).forEach(function(sub) {
                    return sub.error(action, this$1.state, error);
                });
            } catch (e) {}
            reject(error);
        });
    });
};
Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? {
        before: fn
    } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch(getter, cb, options) {
    var this$1 = this;
    return this._watcherVM.$watch(function() {
        return getter(this$1.state, this$1.getters);
    }, cb, options);
};
Store.prototype.replaceState = function replaceState(state) {
    var this$1 = this;
    this._withCommit(function() {
        this$1._vm._data.$$state = state;
    });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0) options = {};
    if (typeof path === "string") path = [
        path
    ];
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    // reset store to update getters...
    resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1 = this;
    if (typeof path === "string") path = [
        path
    ];
    this._modules.unregister(path);
    this._withCommit(function() {
        var parentState = getNestedState(this$1.state, path.slice(0, -1));
        Vue.delete(parentState, path[path.length - 1]);
    });
    resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") path = [
        path
    ];
    return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    return function() {
        var i = subs.indexOf(fn);
        if (i > -1) subs.splice(i, 1);
    };
}
function resetStore(store, hot) {
    store._actions = Object.create(null);
    store._mutations = Object.create(null);
    store._wrappedGetters = Object.create(null);
    store._modulesNamespaceMap = Object.create(null);
    var state = store.state;
    // init all modules
    installModule(store, state, [], store._modules.root, true);
    // reset vm
    resetStoreVM(store, state, hot);
}
function resetStoreVM(store, state, hot) {
    var oldVm = store._vm;
    // bind store public getters
    store.getters = {};
    // reset local getters cache
    store._makeLocalGettersCache = Object.create(null);
    var wrappedGetters = store._wrappedGetters;
    var computed = {};
    forEachValue(wrappedGetters, function(fn, key) {
        // use computed to leverage its lazy-caching mechanism
        // direct inline function use will lead to closure preserving oldVm.
        // using partial to return function with only arguments preserved in closure environment.
        computed[key] = partial(fn, store);
        Object.defineProperty(store.getters, key, {
            get: function() {
                return store._vm[key];
            },
            enumerable: true // for local getters
        });
    });
    // use a Vue instance to store the state tree
    // suppress warnings just in case the user has added
    // some funky global mixins
    var silent = Vue.config.silent;
    Vue.config.silent = true;
    store._vm = new Vue({
        data: {
            $$state: state
        },
        computed: computed
    });
    Vue.config.silent = silent;
    // enable strict mode for new vm
    if (store.strict) enableStrictMode(store);
    if (oldVm) {
        if (hot) // dispatch changes in all subscribed watchers
        // to force getter re-evaluation for hot reloading.
        store._withCommit(function() {
            oldVm._data.$$state = null;
        });
        Vue.nextTick(function() {
            return oldVm.$destroy();
        });
    }
}
function installModule(store, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store._modules.getNamespace(path);
    // register in namespace map
    if (module.namespaced) {
        store._modulesNamespaceMap[namespace];
        store._modulesNamespaceMap[namespace] = module;
    }
    // set state
    if (!isRoot && !hot) {
        var parentState = getNestedState(rootState, path.slice(0, -1));
        var moduleName = path[path.length - 1];
        store._withCommit(function() {
            Vue.set(parentState, moduleName, module.state);
        });
    }
    var local = module.context = makeLocalContext(store, namespace, path);
    module.forEachMutation(function(mutation, key) {
        var namespacedType = namespace + key;
        registerMutation(store, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
        var type = action.root ? key : namespace + key;
        var handler = action.handler || action;
        registerAction(store, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
        var namespacedType = namespace + key;
        registerGetter(store, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
        installModule(store, rootState, path.concat(key), child, hot);
    });
}
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */ function makeLocalContext(store, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
        dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) type = namespace + type;
            return store.dispatch(type, payload);
        },
        commit: noNamespace ? store.commit : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) type = namespace + type;
            store.commit(type, payload, options);
        }
    };
    // getters and state object must be gotten lazily
    // because they will be changed by vm update
    Object.defineProperties(local, {
        getters: {
            get: noNamespace ? function() {
                return store.getters;
            } : function() {
                return makeLocalGetters(store, namespace);
            }
        },
        state: {
            get: function() {
                return getNestedState(store.state, path);
            }
        }
    });
    return local;
}
function makeLocalGetters(store, namespace) {
    if (!store._makeLocalGettersCache[namespace]) {
        var gettersProxy = {};
        var splitPos = namespace.length;
        Object.keys(store.getters).forEach(function(type) {
            // skip if the target getter is not match this namespace
            if (type.slice(0, splitPos) !== namespace) return;
            // extract local getter type
            var localType = type.slice(splitPos);
            // Add a port to the getters proxy.
            // Define as getter property because
            // we do not want to evaluate the getters in this time.
            Object.defineProperty(gettersProxy, localType, {
                get: function() {
                    return store.getters[type];
                },
                enumerable: true
            });
        });
        store._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
    var entry = store._mutations[type] || (store._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
        handler.call(store, local.state, payload);
    });
}
function registerAction(store, type, handler, local) {
    var entry = store._actions[type] || (store._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
        var res = handler.call(store, {
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state
        }, payload);
        if (!isPromise(res)) res = Promise.resolve(res);
        if (store._devtoolHook) return res.catch(function(err) {
            store._devtoolHook.emit("vuex:error", err);
            throw err;
        });
        else return res;
    });
}
function registerGetter(store, type, rawGetter, local) {
    if (store._wrappedGetters[type]) return;
    store._wrappedGetters[type] = function wrappedGetter(store) {
        return rawGetter(local.state, local.getters, store.state, store.getters // root getters
        );
    };
}
function enableStrictMode(store) {
    store._vm.$watch(function() {
        return this._data.$$state;
    }, function() {}, {
        deep: true,
        sync: true
    });
}
function getNestedState(state, path) {
    return path.reduce(function(state, key) {
        return state[key];
    }, state);
}
function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
        options = payload;
        payload = type;
        type = type.type;
    }
    return {
        type: type,
        payload: payload,
        options: options
    };
}
function install(_Vue) {
    if (Vue && _Vue === Vue) return;
    Vue = _Vue;
    applyMixin(Vue);
}
/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */ var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    normalizeMap(states).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedState() {
            var state = this.$store.state;
            var getters = this.$store.getters;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapState", namespace);
                if (!module) return;
                state = module.context.state;
                getters = module.context.getters;
            }
            return typeof val === "function" ? val.call(this, state, getters) : state[val];
        };
        // mark vuex getter for devtools
        res[key].vuex = true;
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */ var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res = {};
    normalizeMap(mutations).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedMutation() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            // Get the commit method from store
            var commit = this.$store.commit;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
                if (!module) return;
                commit = module.context.commit;
            }
            return typeof val === "function" ? val.apply(this, [
                commit
            ].concat(args)) : commit.apply(this.$store, [
                val
            ].concat(args));
        };
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */ var mapGetters = normalizeNamespace(function(namespace, getters) {
    var res = {};
    normalizeMap(getters).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        // The namespace has been mutated by normalizeNamespace
        val = namespace + val;
        res[key] = function mappedGetter() {
            if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) return;
            return this.$store.getters[val];
        };
        // mark vuex getter for devtools
        res[key].vuex = true;
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */ var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    normalizeMap(actions).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedAction() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            // get dispatch function from store
            var dispatch = this.$store.dispatch;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapActions", namespace);
                if (!module) return;
                dispatch = module.context.dispatch;
            }
            return typeof val === "function" ? val.apply(this, [
                dispatch
            ].concat(args)) : dispatch.apply(this.$store, [
                val
            ].concat(args));
        };
    });
    return res;
});
/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */ var createNamespacedHelpers = function(namespace) {
    return {
        mapState: mapState.bind(null, namespace),
        mapGetters: mapGetters.bind(null, namespace),
        mapMutations: mapMutations.bind(null, namespace),
        mapActions: mapActions.bind(null, namespace)
    };
};
/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */ function normalizeMap(map) {
    if (!isValidMap(map)) return [];
    return Array.isArray(map) ? map.map(function(key) {
        return {
            key: key,
            val: key
        };
    }) : Object.keys(map).map(function(key) {
        return {
            key: key,
            val: map[key]
        };
    });
}
/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */ function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
}
/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */ function normalizeNamespace(fn) {
    return function(namespace, map) {
        if (typeof namespace !== "string") {
            map = namespace;
            namespace = "";
        } else if (namespace.charAt(namespace.length - 1) !== "/") namespace += "/";
        return fn(namespace, map);
    };
}
/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */ function getModuleByNamespace(store, helper, namespace) {
    var module = store._modulesNamespaceMap[namespace];
    return module;
}
// Credits: borrowed code from fcomb/redux-logger
function createLogger(ref) {
    if (ref === void 0) ref = {};
    var collapsed = ref.collapsed;
    if (collapsed === void 0) collapsed = true;
    var filter = ref.filter;
    if (filter === void 0) filter = function(mutation, stateBefore, stateAfter) {
        return true;
    };
    var transformer = ref.transformer;
    if (transformer === void 0) transformer = function(state) {
        return state;
    };
    var mutationTransformer = ref.mutationTransformer;
    if (mutationTransformer === void 0) mutationTransformer = function(mut) {
        return mut;
    };
    var actionFilter = ref.actionFilter;
    if (actionFilter === void 0) actionFilter = function(action, state) {
        return true;
    };
    var actionTransformer = ref.actionTransformer;
    if (actionTransformer === void 0) actionTransformer = function(act) {
        return act;
    };
    var logMutations = ref.logMutations;
    if (logMutations === void 0) logMutations = true;
    var logActions = ref.logActions;
    if (logActions === void 0) logActions = true;
    var logger = ref.logger;
    if (logger === void 0) logger = console;
    return function(store) {
        var prevState = deepCopy(store.state);
        if (typeof logger === "undefined") return;
        if (logMutations) store.subscribe(function(mutation, state) {
            var nextState = deepCopy(state);
            if (filter(mutation, prevState, nextState)) {
                var formattedTime = getFormattedTime();
                var formattedMutation = mutationTransformer(mutation);
                var message = "mutation " + mutation.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
                logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
                logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
                endMessage(logger);
            }
            prevState = nextState;
        });
        if (logActions) store.subscribeAction(function(action, state) {
            if (actionFilter(action, state)) {
                var formattedTime = getFormattedTime();
                var formattedAction = actionTransformer(action);
                var message = "action " + action.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
                endMessage(logger);
            }
        });
    };
}
function startMessage(logger, message, collapsed) {
    var startMessage = collapsed ? logger.groupCollapsed : logger.group;
    // render
    try {
        startMessage.call(logger, message);
    } catch (e) {
        logger.log(message);
    }
}
function endMessage(logger) {
    try {
        logger.groupEnd();
    } catch (e) {
        logger.log("\u2014\u2014 log end \u2014\u2014");
    }
}
function getFormattedTime() {
    var time = new Date();
    return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
    return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
    return repeat("0", maxLength - num.toString().length) + num;
}
var index = {
    Store: Store,
    install: install,
    version: "3.6.2",
    mapState: mapState,
    mapMutations: mapMutations,
    mapGetters: mapGetters,
    mapActions: mapActions,
    createNamespacedHelpers: createNamespacedHelpers,
    createLogger: createLogger
};
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ln12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPTION_SELECTED_NODE_INFO", ()=>OPTION_SELECTED_NODE_INFO);
parcelHelpers.export(exports, "OPTION_CONTEXT_INFO", ()=>OPTION_CONTEXT_INFO);
const OPTION_SELECTED_NODE_INFO = "selectedNode";
const OPTION_CONTEXT_INFO = "context";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-graph-manager.8abadd17.js.map
