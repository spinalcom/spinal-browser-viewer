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
})({"8upIS":[function(require,module,exports) {
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
var _vue = require("./src/vue");
var _graphManagerJs = require("./src/GraphManager.js");
var _graphManagerJsDefault = parcelHelpers.interopDefault(_graphManagerJs);
var _vue1 = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue1);
new (0, _vueDefault.default)({
    render: (h)=>h((0, _vue.GraphManagerVue)),
    mounted: ()=>new (0, _graphManagerJsDefault.default)((0, _vue.Store))
}).$mount("#graph-manager-side");

},{"./src/vue":"kqJpq","./src/GraphManager.js":"4BM2z","vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqJpq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphManagerVue", ()=>GraphManagerVue);
parcelHelpers.export(exports, "Store", ()=>(0, _storeDefault.default));
var _store = require("./store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
let GraphManagerVue = (0, _vueDefault.default).extend({
    render: (h)=>h((0, _appVueDefault.default)),
    methods: {
        opened: function() {},
        closed: function() {},
        removed: function() {}
    },
    store: (0, _storeDefault.default)
});

},{"./store":"lNoWE","./App.vue":"ewdSU","vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewdSU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("57dfa15550cfdcc1");
    if (script.__esModule) script = script.default;
    script.render = require("f314a449993d0ac8").render;
    script.staticRenderFns = require("f314a449993d0ac8").staticRenderFns;
    script._scopeId = "data-v-7e428c";
    script.__cssModules = require("e3cc5b751337aea8").default;
    require("bc000dd42f3cb9c1").default(script);
    script.__scopeId = "data-v-7e428c";
    script.__file = "App.vue";
};
initialize();
exports.default = script;

},{"57dfa15550cfdcc1":"1PUQg","f314a449993d0ac8":"1NEJH","e3cc5b751337aea8":"CCNVU","bc000dd42f3cb9c1":"5da5Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PUQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerVueComponentsLib = require("spinal-env-viewer-vue-components-lib");
var _vuex = require("vuex");
function test() {
    const res = {};
    for (const arg of arguments)Object.assign(res, arg);
    return res;
}
var scriptExports = {
    name: "graph-manager",
    components: {
        SpinalIconButton: (0, _spinalEnvViewerVueComponentsLib.SpinalIconButton),
        sideBar: (0, _spinalEnvViewerVueComponentsLib.SideBar),
        TopBar: (0, _spinalEnvViewerVueComponentsLib.TopBar),
        NodesList: (0, _spinalEnvViewerVueComponentsLib.NodeList)
    },
    data: function() {
        return {
            isSearchActive: false,
            searchText: "",
            displayNodes: []
        };
    },
    computed: test((0, _vuex.mapState)([
        "topBarButton",
        "sideBarButton",
        "contextsId",
        "nodes",
        "activeNodesId",
        "selectedNode",
        "searchId",
        "nodes"
    ]), (0, _vuex.mapGetters)([
        "arrayNode",
        "getChildrenId",
        "hasChildInContext"
    ]), {
        isV6: function() {
            return LMV_VIEWER_VERSION.includes("6");
        }
    }),
    methods: {
        onNodeSelected: function(event) {
            this.$store.dispatch("onNodeSelected", event).then().catch((e)=>console.error(e));
        },
        height: function() {
            return "100%";
        },
        onHideBimObject: function(event) {
            console.log("hide bim obj event", event);
        },
        refresh: function() {
            this.$store.commit("REFRESH");
        }
    },
    watch: {
        "searchText": {
            handler: function(value) {
                this.$store.commit("SEARCH_TEXT", value);
                if (value.length === 0) {
                    this.displayNodes = this.contextsId;
                    this.isSearchActive = false;
                } else this.displayNodes = this.searchId;
            }
        },
        immediate: true
    },
    mounted () {
        this.displayNodes = this.contextsId;
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-vue-components-lib":"f8kzc","vuex":"cMZ5L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1NEJH":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "plugin-graph-viewer"
    }, [
        _c("div", {
            staticClass: "graph-manager-top-bar"
        }, [
            _c("top-bar", {
                staticClass: "graph-manager-top-tools-bar",
                attrs: {
                    "buttons": _vm.topBarButton,
                    "option": _vm.graph
                }
            }),
            _vm._v(" "),
            _vm.isSearchActive ? _c("input", {
                directives: [
                    {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchText,
                        expression: "searchText"
                    }
                ],
                attrs: {
                    "placeholder": "search name "
                },
                domProps: {
                    "value": _vm.searchText
                },
                on: {
                    "input": function($event) {
                        if ($event.target.composing) return;
                        _vm.searchText = $event.target.value;
                    }
                }
            }) : _c("spinal-icon-button", {
                staticClass: "plugin-graph-viewer-refresh",
                attrs: {
                    "icon": "search",
                    "tool-tip": "search graph"
                },
                on: {
                    "click": function($event) {
                        _vm.isSearchActive = true;
                    }
                }
            }),
            _vm._v(" "),
            _c("spinal-icon-button", {
                staticClass: "plugin-graph-viewer-refresh",
                attrs: {
                    "icon": "refresh",
                    "tool-tip": "refresh graph"
                },
                on: {
                    "click": _vm.refresh
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "graph-manager-body"
        }, [
            _c("nodes-list", {
                staticClass: "graph-viewer",
                attrs: {
                    "active-nodes-id": _vm.activeNodesId,
                    "contexts-id": _vm.displayNodes,
                    "has-child-in-context": _vm.hasChildInContext,
                    "nodes": _vm.nodes,
                    "show-hide-bim-object": false
                },
                on: {
                    "click": _vm.onNodeSelected,
                    "right-click": function($event) {},
                    "hide-bim-object": _vm.onHideBimObject
                }
            }),
            _vm._v(" "),
            _c("side-bar", {
                staticClass: "graph-manager-side-bar",
                attrs: {
                    "buttons": _vm.sideBarButton,
                    "option": _vm.selectedNode
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"CCNVU":[function() {},{}],"5da5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BM2z":[function(require,module,exports) {
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
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class GraphManager {
    constructor(store){
        this.nodes = {};
        this.contexts = {};
        this.bindNode = (function(node) {
            this.store.commit("SET_NODE", node);
        }).bind(this);
        this.onNodeAdded = (function(nodeId) {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNode(nodeId);
            (0, _spinalEnvViewerGraphService.SpinalGraphService).bindNode(nodeId, this, this.bindNode);
            this.store.commit("ADD_NODE", node);
        }).bind(this);
        this.removeNode = (function(nodeId) {
            this.store.commit("REMOVE_NODE", nodeId);
        }).bind(this);
        this.graphChange = (function() {
            (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.graphId, [
                "hasContext"
            ]).then((contexts)=>{
                for(let i = 0; i < contexts.length; i++){
                    const contextId = contexts[i].id.get();
                    if (!this.contexts.hasOwnProperty(contextId) && contexts[i].name.get().indexOf(".") !== 0 && !contexts[i].name.get().includes("BIMObjectContext")) {
                        this.contexts[contextId] = contexts[i];
                        (0, _spinalEnvViewerGraphService.SpinalGraphService).bindNode(contextId, this, this.bindNode);
                    }
                }
                this.store.commit("UPDATE_CONTEXTS", contexts);
            });
        }).bind(this);
        this.store = store;
        (0, _spinalEnvViewerGraphService.SpinalGraphService).waitForInitialization().then(()=>{
            this.graph = (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph();
            this.graphId = this.graph.getId().get();
            this.init();
        });
    }
    reset() {
        if (typeof this.unbind === "function") this.unbind();
        if (typeof this.stopListeningOnNodeAdded === "function") this.stopListeningOnNodeAdded();
        if (typeof this.stopListeningOnNodeRemove === "function") this.stopListeningOnNodeRemove();
        this.setNodes();
        this.init().then(()=>this.store.commit("REFRESHED"));
    }
    init() {
        this.store.subscribe((mutation)=>{
            if (mutation.type === "REFRESH") this.reset();
            if (mutation.type === "GET_NODE" && typeof mutation.payload !== "undefined" && !this.nodes.hasOwnProperty(mutation.payload)) {
                const nodeId = mutation.payload;
                const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNode(nodeId);
                if (typeof node !== "undefined") {
                    this.nodes[mutation.payload] = node;
                    this.store.commit("ADD_NODE", node);
                    (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, []).then((children)=>{
                        this.store.commit("ADD_NODES", children);
                    });
                } else (0, _spinalEnvViewerGraphService.SpinalGraphService).findNode(nodeId).then((node)=>{
                    this.store.commit("ADD_NODE", node);
                    (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, []).then((children)=>{
                        this.store.commit("ADD_NODES", children);
                    });
                });
            }
        });
        this.stopListeningOnNodeAdded = (0, _spinalEnvViewerGraphService.SpinalGraphService).listenOnNodeAdded(this, this.onNodeAdded);
        this.stopListeningOnNodeRemove = (0, _spinalEnvViewerGraphService.SpinalGraphService).listenOnNodeRemove(this, this.removeNode);
        this.unbind = (0, _spinalEnvViewerGraphService.SpinalGraphService).bindNode(this.graphId, this, this.graphChange);
        this.nodes = {};
        this.store.dispatch("retrieveGlobalBar", this.graph);
        this.store.commit("SET_GRAPH", this.graph);
        this.setNodes();
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.graphId, [
            "hasContext"
        ]).then((contexts)=>{
            for(let i = 0; i < contexts.length; i++){
                const contextId = contexts[i].id.get();
                if (!this.contexts.hasOwnProperty(contextId) && contexts[i].name.get().indexOf(".") !== 0 && !contexts[i].name.get().includes("BIMObjectContext")) {
                    this.contexts[contextId] = contexts[i];
                    (0, _spinalEnvViewerGraphService.SpinalGraphService).bindNode(contextId, this, this.bindNode);
                }
            }
            this.store.commit("UPDATE_CONTEXTS", contexts);
        }).catch((e)=>console.error(e, (0, _spinalEnvViewerGraphService.SpinalGraphService)));
    }
    setNodes() {
        const nodes = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodes();
        for(let key in nodes)if (nodes.hasOwnProperty(key)) this.store.commit("ADD_NODE", (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodes[key].getId().get()));
    }
}
exports.default = GraphManager;

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-graph-manager.eaf7147e.js.map
