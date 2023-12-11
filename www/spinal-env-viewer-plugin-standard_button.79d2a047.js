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
})({"bXst4":[function(require,module,exports) {
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
 */ var _registerDialogs = require("./registerDialogs");
/* 			Delete Button  				*/ var _deleteButtonJs = require("./js/deleteButton.js");
/* 			Rename Button  				*/ var _renameButtonJs = require("./js/renameButton.js");
/* 			SortChild Button			*/ //import { SpinalContextSortByName } from './js/sortButton.js';
//spinalContextMenuService.registerApp("GraphManagerSideBar", new SpinalContextSortByName());
/* 			SelectBIMObject Button 		*/ var _selectBIMObjectButtonJs = require("./js/selectBIMObjectButton.js");
/* 			Zoom Button  				*/ var _fitToViewerButtonJs = require("./js/fitToViewerButton.js");
// 				/* 			Isolation Button  			*/
var _isolationButtonJs = require("./js/isolationButton.js");
// 				/* 			Isolation Reference Button  			*/
var _isolationReferenceButtonJs = require("./js/isolationReferenceButton.js");
// 				/* 			Research Button				*/
//import { SpinalContexResearch } from './js/researchButton.js';
//spinalContextMenuService.registerApp("GraphManagerSideBar", new SpinalContexResearch());
var _addColor = require("./js/addColor");
const { spinalContextMenuService } = require("bfa064e4a0348f9c");
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _deleteButtonJs.SpinalContextDelete)(), [
    3
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _renameButtonJs.SpinalContextRename)(), [
    3
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _selectBIMObjectButtonJs.SpinalContextSelectBIMObject)(), [
    31
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _fitToViewerButtonJs.SpinalContextFitToViewer)(), [
    31
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _isolationButtonJs.SpinalContextIsolation)(), [
    31
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _isolationReferenceButtonJs.SpinalContextIsolationReference)(), [
    31
]);
spinalContextMenuService.registerApp("GraphManagerSideBar", new (0, _addColor.SpinalEditColor)(), [
    3
]);

},{"./registerDialogs":"f2ibM","bfa064e4a0348f9c":"kHlxv","./js/deleteButton.js":"kXhFR","./js/renameButton.js":"8y7oA","./js/selectBIMObjectButton.js":"byLzT","./js/fitToViewerButton.js":"jAXW3","./js/isolationButton.js":"gKnYn","./js/isolationReferenceButton.js":"aZpX2","./js/addColor":"6Va3a"}],"f2ibM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _deletePanelVue = require("./vue/deletePanel.vue");
var _deletePanelVueDefault = parcelHelpers.interopDefault(_deletePanelVue);
var _renamePanelVue = require("./vue/renamePanel.vue");
var _renamePanelVueDefault = parcelHelpers.interopDefault(_renamePanelVue);
var _researchPanelVue = require("./vue/researchPanel.vue");
var _researchPanelVueDefault = parcelHelpers.interopDefault(_researchPanelVue);
var _colorDialogVue = require("./vue/colorDialog.vue");
var _colorDialogVueDefault = parcelHelpers.interopDefault(_colorDialogVue);
const { SpinalMountExtention } = require("e96e339488908ad3");
const dialogs = [
    {
        name: "standardButtonDelete",
        vueMountComponent: (0, _vueDefault.default).extend((0, _deletePanelVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "standardButtonRename",
        vueMountComponent: (0, _vueDefault.default).extend((0, _renamePanelVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "standardButtonResearch",
        vueMountComponent: (0, _vueDefault.default).extend((0, _researchPanelVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "editColordialogComponent",
        vueMountComponent: (0, _vueDefault.default).extend((0, _colorDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","./vue/deletePanel.vue":"fy7wZ","./vue/renamePanel.vue":"ePSjA","./vue/researchPanel.vue":"jRq5H","./vue/colorDialog.vue":"lFDbv","e96e339488908ad3":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fy7wZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5413a7c90f89e930");
    if (script.__esModule) script = script.default;
    script.render = require("334e410359e39538").render;
    script.staticRenderFns = require("334e410359e39538").staticRenderFns;
    script._scopeId = "data-v-7f8522";
    script.__cssModules = require("fe6cdee010c4175d").default;
    require("5fc14a2872370e0c").default(script);
    script.__scopeId = "data-v-7f8522";
    script.__file = "deletePanel.vue";
};
initialize();
exports.default = script;

},{"5413a7c90f89e930":"4S1jS","334e410359e39538":"2rauy","fe6cdee010c4175d":"cKwpY","5fc14a2872370e0c":"1YHzI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4S1jS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            selectedNode: null,
            selectedContext: null,
            selectedMode: "Delete nodes",
            selectedOption: "1",
            excludeOption: null,
            relationNames: null,
            modeOptions: [
                "Delete nodes",
                "Delete relations"
            ],
            searchedRelations: [],
            selectedRelations: [],
            strictFilter: false,
            strFilter: "",
            name: ""
        };
    },
    methods: {
        opened (option) {
            console.log("opened : ", option);
            this.name = option.selectedNode.name.get();
            this.selectedNode = option.selectedNode;
            this.selectedContext = option.context;
        },
        removed (option) {
            if (option.closeResult === true) {
                console.log("closed : ", option);
                this.routage();
                this.showDialog = false;
            }
            this.showDialog = false;
        },
        deleteNode () {
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            node.removeFromGraph();
        },
        deleteChildren () {
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            node.getChildren().then((children)=>{
                this.applyFilter(children).then((filteredChildren)=>{
                    const strFilteredChildren = this.applyStrFilter(filteredChildren);
                    for (const child of strFilteredChildren)child.removeFromGraph();
                });
            });
        },
        deleteNodeAndChildren () {
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            node.getChildren().then((children)=>{
                this.applyFilter(children).then((filteredChildren)=>{
                    const strFilteredChildren = this.applyStrFilter(filteredChildren);
                    for (const child of strFilteredChildren)child.removeFromGraph();
                });
            });
            node.removeFromGraph();
        },
        deleteAllNodesOfSameTypeInSameContext () {
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContextByType(this.selectedContext.id.get(), this.selectedContext.id.get(), node.getType().get()).then((models)=>{
                const nodes = models.map((m)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(m.id.get()));
                console.log("nodes :", nodes);
                const strFilteredNodes = this.applyStrFilter(nodes);
                for (const filteredNode of strFilteredNodes)//let realNode = SpinalGraphService.getRealNode(node.id.get());
                filteredNode.removeFromGraph();
            });
        },
        deleteRelationWithParentInContext () {
            console.log("deleteRelationWithParentInContext");
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            // look for parents
            node.getParents().then((parents)=>{
                console.log("parents : ", parents);
                for (const p of parents)// if parent is in the same context
                if (p.getContextIds().includes(this.selectedContext.id.get())) {
                    console.log("Parent of same context found : ", p.info.name.get());
                    // look for relations
                    for (const r of p.getRelationNames())// Verify if the node is a child of the parent
                    (0, _spinalEnvViewerGraphService.SpinalGraphService).isChild(p.info.id.get(), this.selectedNode.id.get(), r).then((res)=>{
                        if (res) {
                            console.log("Attempting to remove");
                            this.removeChild(p, node, r);
                        } else console.log("Child not found");
                    });
                }
            });
        },
        async deleteChildrenRelations () {
            //here we should call removeChild , then if no childs are left we should remove the relation
            console.log("deleteChildrenRelations");
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            for (const r of this.selectedRelations){
                const children = await node.getChildren(r);
                for (const child of children)this.removeChild(node, child, r);
                try {
                    console.log("Trying to remove relation : ", r);
                    node.removeRelation(r, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                } catch (e) {
                    try {
                        node.removeRelation(r, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE));
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        },
        searchRelations () {
            let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
            let relations = node.getRelationNames();
            this.searchedRelations = relations;
            this.selectedRelations = relations;
            console.log(relations);
        },
        async applyFilter (nodes) {
            const res = [];
            switch(this.excludeOption){
                case "1":
                    for (const node of nodes){
                        const parents = await node.getParents();
                        let filteredOut = false;
                        for (const p of parents)if (p.info.id.get() != this.selectedNode.id.get()) {
                            filteredOut = true;
                            break;
                        }
                        if (!filteredOut) res.push(node);
                    }
                    return res;
                case "2":
                    for (const node of nodes){
                        const parents = await node.getParents();
                        let filteredOut = false;
                        for (const p of parents)if (p.info.id.get() != this.selectedNode.id.get()) {
                            const parentContextIds = p.getContextIds(); // get the context ids of the parent
                            if (parentContextIds.includes(this.selectedContext.id.get())) {
                                filteredOut = true;
                                break;
                            }
                        }
                        if (!filteredOut) res.push(node);
                    }
                    return res;
                case "3":
                    for (const node of nodes){
                        const parents = await node.getParents();
                        let filteredOut = false;
                        for (const p of parents)if (p.info.id.get() != this.selectedNode.id.get()) {
                            const parentContextIds = p.getContextIds(); // get the context ids of the parent
                            if (!parentContextIds.includes(this.selectedContext.id.get())) {
                                filteredOut = true;
                                break;
                            }
                        }
                        if (!filteredOut) res.push(node);
                    }
                    return res;
                default:
                    return nodes;
            }
        },
        applyStrFilter (nodes) {
            if (this.strFilter == "") return nodes;
            return nodes.filter((node)=>{
                if (this.strictFilter) return node.info.name.get() == this.strFilter;
                else return node.info.name.get().includes(this.strFilter);
            });
        },
        routage () {
            if (this.selectedMode === "Delete nodes") {
                if (this.selectedOption === "1") this.deleteNode();
                else if (this.selectedOption === "2") this.deleteChildren();
                else if (this.selectedOption === "3") this.deleteNodeAndChildren();
                else if (this.selectedOption === "4") this.deleteAllNodesOfSameTypeInSameContext();
            } else if (this.selectedMode === "Delete relations") {
                if (this.selectedOption === "1") this.deleteRelationWithParentInContext();
                else if (this.selectedOption === "2") this.deleteChildrenRelations();
                else if (this.selectedOption === "3") this.deleteParentRelations();
            }
        },
        removeChild (p, node, r) {
            try {
                p.removeChild(node, r, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            } catch (e) {
                try {
                    p.removeChild(node, r, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE));
                } catch (e) {
                    console.log(e);
                }
            }
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rauy":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
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
            _c("md-dialog-title", [
                _vm._v("Delete action on node selected : " + _vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "DeleteMainBody"
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "Select how you want the delete to operate"
                        }
                    }, [
                        _vm._v("\n          Select how you want the delete to operate\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "id": "modeSelect",
                            "name": "modeSelect"
                        },
                        model: {
                            value: _vm.selectedMode,
                            callback: function($$v) {
                                _vm.selectedMode = $$v;
                            },
                            expression: "selectedMode"
                        }
                    }, _vm._l(_vm.modeOptions, function(option) {
                        return _c("md-option", {
                            key: option,
                            attrs: {
                                "value": option
                            }
                        }, [
                            _vm._v("\n            " + _vm._s(option) + "\n          ")
                        ]);
                    }), 1)
                ], 1),
                _vm._v(" "),
                _vm.selectedMode === "Delete nodes" ? _c("div", [
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "1"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          This node only\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "2"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          This node's children nodes\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "3"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          This node "),
                        _c("strong", [
                            _vm._v(" and ")
                        ]),
                        _vm._v(" children nodes\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "4"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          All nodes of similar type in the same context")
                    ]),
                    _vm._v(" "),
                    _vm.selectedOption === "4" || _vm.selectedOption === "2" ? _c("div", [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("Filter value : ")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.strFilter,
                                    callback: function($$v) {
                                        _vm.strFilter = $$v;
                                    },
                                    expression: "strFilter"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _vm.strFilter == "" ? _c("b", [
                            _vm._v(" !! If the filter is empty, all nodes will be captured !! ")
                        ]) : _c("div", [
                            _c("md-radio", {
                                attrs: {
                                    "value": true
                                },
                                model: {
                                    value: _vm.strictFilter,
                                    callback: function($$v) {
                                        _vm.strictFilter = $$v;
                                    },
                                    expression: "strictFilter"
                                }
                            }, [
                                _vm._v("\n              Strict filter (node name has to match exactly the filter value)\n            ")
                            ]),
                            _vm._v(" "),
                            _c("md-radio", {
                                attrs: {
                                    "value": false
                                },
                                model: {
                                    value: _vm.strictFilter,
                                    callback: function($$v) {
                                        _vm.strictFilter = $$v;
                                    },
                                    expression: "strictFilter"
                                }
                            }, [
                                _vm._v("\n              Not strict filter (node name should contain the filter\n              value)")
                            ])
                        ], 1)
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _c("div", [
                        _c("p", [
                            _vm._v("--------------------")
                        ]),
                        _vm._v(" "),
                        _c("strong", [
                            _vm._v(" Exclude if : ")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            attrs: {
                                "disabled": _vm.selectedOption == "1" || _vm.selectedOption == "4",
                                "value": "1"
                            },
                            model: {
                                value: _vm.excludeOption,
                                callback: function($$v) {
                                    _vm.excludeOption = $$v;
                                },
                                expression: "excludeOption"
                            }
                        }, [
                            _vm._v("\n            Node has another parent\n          ")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            attrs: {
                                "disabled": _vm.selectedOption == "1" || _vm.selectedOption == "4",
                                "value": "2"
                            },
                            model: {
                                value: _vm.excludeOption,
                                callback: function($$v) {
                                    _vm.excludeOption = $$v;
                                },
                                expression: "excludeOption"
                            }
                        }, [
                            _vm._v("\n            Node has another parent in the same context\n          ")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            attrs: {
                                "disabled": _vm.selectedOption == "1" || _vm.selectedOption == "4",
                                "value": "3"
                            },
                            model: {
                                value: _vm.excludeOption,
                                callback: function($$v) {
                                    _vm.excludeOption = $$v;
                                },
                                expression: "excludeOption"
                            }
                        }, [
                            _vm._v("\n            Node has another parent in another context\n          ")
                        ])
                    ], 1)
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.selectedMode === "Delete relations" ? _c("div", [
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "1"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          Relation with parent in this context\n        ")
                    ]),
                    _vm._v(" "),
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": "2"
                        },
                        model: {
                            value: _vm.selectedOption,
                            callback: function($$v) {
                                _vm.selectedOption = $$v;
                            },
                            expression: "selectedOption"
                        }
                    }, [
                        _vm._v("\n          Children relations\n        ")
                    ]),
                    _vm._v(" "),
                    _vm.selectedOption == "2" ? _c("md-button", {
                        on: {
                            "click": function($event) {
                                return _vm.searchRelations();
                            }
                        }
                    }, [
                        _vm._v("\n          Search relations\n        ")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.searchedRelations.length > 0 ? _c("div", _vm._l(_vm.searchedRelations, function(item) {
                        return _c("md-checkbox", {
                            key: item,
                            attrs: {
                                "value": item
                            },
                            model: {
                                value: _vm.selectedRelations,
                                callback: function($$v) {
                                    _vm.selectedRelations = $$v;
                                },
                                expression: "selectedRelations"
                            }
                        }, [
                            _vm._v(_vm._s(item))
                        ]);
                    }), 1) : _vm._e()
                ], 1) : _vm._e()
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
                    _vm._v("Accept")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cKwpY":[function() {},{}],"1YHzI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePSjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("12cd4fc82bd61733");
    if (script.__esModule) script = script.default;
    script.render = require("f3110c23e293571").render;
    script.staticRenderFns = require("f3110c23e293571").staticRenderFns;
    script._scopeId = "data-v-781f82";
    require("34246a61773a2dd").default(script);
    script.__scopeId = "data-v-781f82";
    script.__file = "renamePanel.vue";
};
initialize();
exports.default = script;

},{"12cd4fc82bd61733":"ji0yy","f3110c23e293571":"iXfdS","34246a61773a2dd":"jCEcY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji0yy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            selectedNode: null,
            name: "",
            inputValue: ""
        };
    },
    methods: {
        opened (option) {
            this.name = option.selectedNode.name.get();
            this.inputValue = this.name;
            console.log("opened rename");
            this.selectedNode = option.selectedNode;
        },
        removed (option) {
            if (option.closeResult === true) {
                let node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
                node.info.name.set(this.inputValue);
                this.showDialog = false;
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXfdS":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
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
            _c("md-dialog-title", [
                _vm._v("Rename " + _vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _c("md-field", [
                    _c("md-input", {
                        model: {
                            value: _vm.inputValue,
                            callback: function($$v) {
                                _vm.inputValue = $$v;
                            },
                            expression: "inputValue"
                        }
                    })
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
                    _vm._v("Accepte")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jCEcY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRq5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b4f3057114d07fdb");
    if (script.__esModule) script = script.default;
    script.render = require("c2e0446d1649305f").render;
    script.staticRenderFns = require("c2e0446d1649305f").staticRenderFns;
    script._scopeId = "data-v-f56ac5";
    require("430b9d4c9288cc6f").default(script);
    script.__scopeId = "data-v-f56ac5";
    script.__file = "researchPanel.vue";
};
initialize();
exports.default = script;

},{"b4f3057114d07fdb":"3fvis","c2e0446d1649305f":"ihDZj","430b9d4c9288cc6f":"l7Bmb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fvis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            selectedNode: null,
            inputValue: ""
        };
    },
    methods: {
        opened (option) {
            this.selectedNode = option.selectedNode;
            this.viewer = window.spinal.ForgeViewer.viewer;
        },
        removed (option) {
            if (option.closeResult === true) {
                let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selectedNode.id.get());
                let self = this;
                realNode.find([
                    "hasGeographicSite",
                    "hasGeographicBuilding",
                    "hasGeographicFloor",
                    "hasGeographicZone",
                    "hasGeographicRoom",
                    "hasBIMObject"
                ], function(node) {
                    if (node.info.type.get() === "BIMObject") return true;
                }).then((lst)=>{
                    self.viewer.clearSelection();
                    for(var i = 0; i < lst.length; i++)if (lst[i].info.name.get() === self.inputValue) self.viewer.select([
                        lst[i].info.dbid.get()
                    ]);
                });
                self.showDialog = false;
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihDZj":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
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
            _c("md-dialog-title", [
                _vm._v("Research element")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _c("md-field", [
                    _c("md-input", {
                        model: {
                            value: _vm.inputValue,
                            callback: function($$v) {
                                _vm.inputValue = $$v;
                            },
                            expression: "inputValue"
                        }
                    })
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
                    _vm._v("Accepte")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"l7Bmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFDbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3d4067551747264b");
    if (script.__esModule) script = script.default;
    script.render = require("842bb3afc6cfcb4e").render;
    script.staticRenderFns = require("842bb3afc6cfcb4e").staticRenderFns;
    script._scopeId = "data-v-bf2d9a";
    script.__cssModules = require("b5e6ccc8de18c740").default;
    require("8313894fa4a0eef6").default(script);
    script.__scopeId = "data-v-bf2d9a";
    script.__file = "colorDialog.vue";
};
initialize();
exports.default = script;

},{"3d4067551747264b":"dIf9g","842bb3afc6cfcb4e":"aYjVU","b5e6ccc8de18c740":"bcQfB","8313894fa4a0eef6":"jPqs5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIf9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _vueColor = require("vue-color");
var scriptExports = {
    name: "editColordialogComponent",
    props: [
        "onFinised"
    ],
    components: {
        "chrome-picker": (0, _vueColor.Chrome)
    },
    data () {
        return {
            showDialog: true,
            color: "#000000",
            selectedNode: null
        };
    },
    methods: {
        opened (option) {
            if (option.selectedNode.color) this.color = option.selectedNode.color.get();
            this.selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        },
        removed (option) {
            if (option.closeResult === true) {
                const color = typeof this.color === "string" ? this.color : this.color.hex;
                if (this.selectedNode.info.color) this.selectedNode.info.color.set(color);
                else this.selectedNode.info.add_attr({
                    color: color
                });
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","vue-color":"bOuNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYjVU":[function(require,module,exports) {
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
        _c("md-dialog-title", [
            _vm._v("Edit Color")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "colorDialogContainer"
        }, [
            _c("chrome-picker", {
                model: {
                    value: _vm.color,
                    callback: function($$v) {
                        _vm.color = $$v;
                    },
                    expression: "color"
                }
            })
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
                _vm._v("Save")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bcQfB":[function() {},{}],"jPqs5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"kHlxv":[function(require,module,exports) {
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
const SpinalContextMenuService = require("68897565c96c24c9");
const SpinalContextApp = require("b2a1734f0374b803");
const Constant = require("dd9afb352261d691");
if (typeof G_root.spinal === "undefined") G_root.spinal = {};
if (typeof G_root.spinal.spinalContextMenuService === "undefined") G_root.spinal.spinalContextMenuService = new SpinalContextMenuService();
module.exports = {
    constants: Constant,
    spinalContextMenuService: G_root.spinal.spinalContextMenuService,
    SpinalContextApp,
    install (Vue) {
        Vue.prototype.$spinalContextMenuService = G_root.spinal.spinalContextMenuService;
    }
};

},{"68897565c96c24c9":"iqJit","b2a1734f0374b803":"kAFNM","dd9afb352261d691":"gmus8"}],"iqJit":[function(require,module,exports) {
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
 */ var _q = require("q");
var debounce = require("381613c6219f7bf2");
/**
 *  Containter like service to register and get applications relative to a hookname
 *
 * @property {object} apps key = hookname, value array of apps
 * @class SpinalContextMenuService
 */ class SpinalContextMenuService {
    /**
   *Creates an instance of SpinalContextMenuService.
   * @memberof SpinalContextMenuService
   */ constructor(){
        this.apps = {};
        this.promiseByAppProfileId = {};
        this.appRdy = _q.defer();
        this.debouncedRdy = debounce(()=>{
            this.appRdy.resolve();
            this.debouncedRdy = ()=>{};
        }, 1000, {
            leading: false,
            trailing: true
        });
    }
    // waitRdy() {
    //   this.appRdy.promise;
    // }
    /**
   * Return true if user has access to this appProfile
   * @param appProfileId
   * @return {PromiseLike<boolean > | Promise<boolean>}
   */ async hasUserRight(appProfileId) {
        this.debouncedRdy();
        await window.spinal.spinalSystem.init();
        const path = "/etc/UserProfileDir/" + window.spinal.spinalSystem.getUser().username;
        const userProfile = await window.spinal.spinalSystem.load(path);
        let res = false;
        if (userProfile) for(let i = 0; i < userProfile.appProfiles.length && !res; i++)res = (1 << userProfile.appProfiles[i] & appProfileId) !== 0;
        return res;
    }
    /**
   * method to register the Application to a hook
   *
   * @param {string} hookname the place where is application button is located
   * @param {SpinalContextApp} spinalContextApp the application
   * @param {number} appProfileId id of the group that can use the application
   * button
   * @memberof SpinalContextMenuService
   */ registerApp(hookname, spinalContextApp, appProfileId) {
        this.debouncedRdy();
        if (typeof appProfileId === "undefined") {
            console.warn("Deprecated: The usage of this function without the third parameter appProfileId is deprecated your button is lock for admin only until you set the third parameter");
            appProfileId = 1;
        }
        // get the array of apps of the hook
        let appsInHooks = this.apps[hookname];
        // create the array if not exist
        if (!(appsInHooks instanceof Array)) appsInHooks = this.apps[hookname] = [];
        if (!this.promiseByAppProfileId.hasOwnProperty(appProfileId)) this.promiseByAppProfileId[appProfileId] = this.hasUserRight(appProfileId);
        this.promiseByAppProfileId[appProfileId].then((hasAccess)=>{
            // push the app if not exist ans user has access to the button
            if (hasAccess && appsInHooks.indexOf(spinalContextApp) === -1) appsInHooks.push(spinalContextApp);
        });
    }
    /**
   * method to get the applications registered to a hookname
   *
   * @param {String} hookname
   * @param {object} option
   * @memberof SpinalContextMenuService
   * @returns {Promise} resolve : [spinalContextApp, ...]; reject: Error
   */ async getApps(hookname, option) {
        await this.appRdy.promise;
        // get the array of apps of the hook
        let appsInHooks = this.apps[hookname];
        // create the array if not exist
        if (!(appsInHooks instanceof Array)) return Promise.resolve([]);
        let promises = appsInHooks.map(async function(e, idx) {
            try {
                const res = await e.isShown(option);
                return res === -1 ? -1 : e;
            } catch (error) {
                console.error(error);
                return -1;
            }
        });
        try {
            const appRes = await Promise.all(promises);
            return appRes.filter((itm)=>itm !== -1);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
module.exports = SpinalContextMenuService;

},{"q":"6YRAJ","381613c6219f7bf2":"3JP5n"}],"kAFNM":[function(require,module,exports) {
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
 *  Interface like class to define a Contextual Application button
 * @see https://material.io/tools/icons/?style=baseline for material icons
 *
 * @class SpinalContextApp
 * @property {string} label=notset short name to be shown in the application
 * @property {string} description description of what the Application button do
 * @property {object} buttonCfg Object configuration of the Application button
 * @property {string} buttonCfg.icon=tab can be a font-awsome or material icon string
 * @property {string} buttonCfg.icon_type=in Where to place the icon in the `md-icon`. Should be one of theses `class`, `in`, `src`
 * @property {string} buttonCfg.backgroundColor=#0000FF backgroud color of the button
 * @property {string} buttonCfg.fontColor=#FFFFFF font color of the button
 * @property {objet} [badgeCfg] Object configuration of the Application button badge
 * @property {string} badgeCfg.label string shown in a badge; if empty it's not shown
 * @property {string} badgeCfg.backgroundColor=#FF0000 backgroud color of the badge
 * @property {string} badgeCfg.fontColor=#FFFFFF font color of the badge
 */ class SpinalContextApp {
    /**
   * Creates an instance of SpinalContextApp.
   * @param {string} label=notset short name to be shown in the application
   * @param {string} description description of what the Application button do
   * @param {object} buttonCfg Object configuration of the Application button
   * @param {string} buttonCfg.icon=tab can be a font-awsome or material icon string
   * @param {string} buttonCfg.icon_type=in Where to place the icon in the `md-icon`. Should be one of theses `class`, `in`, `src`
   * @param {string} buttonCfg.backgroundColor=#0000FF backgroud color of the button
   * @param {string} buttonCfg.fontColor=#FFFFFF font color of the button
   * @param {objet} [badgeCfg] Object configuration of the Application button badge
   * @param {string} badgeCfg.label string shown in a badge; if empty it's not shown
   * @param {string} badgeCfg.backgroundColor=#FF0000 backgroud color of the badge
   * @param {string} badgeCfg.fontColor=#FFFFFF font color of the badge
   * @memberof SpinalContextApp
   */ constructor(label, description, buttonCfg, badgeCfg = {}){
        this.label = label || "notset";
        this.description = description || "";
        this.buttonCfg = {
            icon: buttonCfg.icon || "tab",
            icon_type: buttonCfg.icon_type || "in",
            backgroundColor: colorHash(buttonCfg.backgroundColor || "#0000FF"),
            fontColor: colorHash(buttonCfg.fontColor || "#FFFFFF")
        };
        this.badgeCfg = {
            label: badgeCfg.label || "",
            backgroundColor: colorHash(badgeCfg.backgroundColor || "#FF0000"),
            fontColor: colorHash(badgeCfg.fontColor || "#FFFFFF")
        };
    }
    /**
   * Method called by `SpinalContextMenuService.getApps`
   * to filter the Application button to show in the context hook
   *
   * @param {object} option
   * @memberof SpinalContextApp
   * @returns {Promise} Resolve: not shown if === -1;
   */ isShown(option) {}
    /**
   * Method to call on click of the application button
   *
   * @param {object} option {}
   * @memberof SpinalContextApp
   */ action(option) {}
}
module.exports = SpinalContextApp;
function colorHash(color) {
    if (color[0] === "#") return color;
    return "#" + color;
}

},{}],"gmus8":[function(require,module,exports) {
module.exports = {
    ADMINISTRATEUR: "ADMINISTRATEUR",
    MAINTENEUR: "MAINTENEUR",
    INTEGRATEUR: "INTEGRATEUR",
    ASSET_MANAGEUR: "ASSET MANAGER"
};

},{}],"kXhFR":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextDelete", ()=>SpinalContextDelete);
const { SpinalContextApp } = require("bc1d447e26165486");
const { spinalPanelManagerService } = require("8a068357221a405f");
class SpinalContextDelete extends SpinalContextApp {
    constructor(){
        super("Delete button", "delete", {
            icon: "delete",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action(option) {
        spinalPanelManagerService.openPanel("standardButtonDelete", option);
    }
}

},{"bc1d447e26165486":"kHlxv","8a068357221a405f":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8y7oA":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextRename", ()=>SpinalContextRename);
const { SpinalContextApp } = require("42a2449e24f0b255");
const { spinalPanelManagerService } = require("b312551e41c0b48d");
class SpinalContextRename extends SpinalContextApp {
    constructor(){
        super("Rename button", "rename", {
            icon: "text_format",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // const type = option.selectedNode.type.get();
        // if (type === "SpinalService" || type === "scene" || type ===
        //   "SpinalContext" || type === "BimFile")
        //   return (Promise.resolve(-1))
        return Promise.resolve(true);
    }
    action(option) {
        spinalPanelManagerService.openPanel("standardButtonRename", option);
    }
}

},{"42a2449e24f0b255":"kHlxv","b312551e41c0b48d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byLzT":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextSelectBIMObject", ()=>SpinalContextSelectBIMObject);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("6a1561c7c4b8903b");
class SpinalContextSelectBIMObject extends SpinalContextApp {
    constructor(){
        super("select BIMObject button", "select BIMObject button", {
            icon: "devices",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        realNode.find((0, _utilities.SELECTrelationList), function(node) {
            if (node.info.type.get() === "BIMObject") return true;
        }).then((lst)=>{
            self.viewer.clearSelection();
            (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                for(let i = 0; i < lstByModel.length; i++){
                    const element = lstByModel[i];
                    for(let j = 0; j < element.model.modelScene.length; j++){
                        const scene = element.model.modelScene[j];
                        // console.log("hello select", element.dbid, scene.model);
                        scene.model.selector.setSelection(element.dbid, scene.model, "selectOnly");
                    }
                }
            });
        });
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","6a1561c7c4b8903b":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktewa":[function(require,module,exports) {
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
 */ var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import {
//   // ROOMS_CATEGORY_RELATION,
//   // ROOMS_TO_ELEMENT_RELATION,
//   // ROOMS_GROUP_RELATION,
//   // EQUIPMENTS_CATEGORY_RELATION,
//   // EQUIPMENTS_TO_ELEMENT_RELATION,
//   // EQUIPMENTS_GROUP_RELATION,
//   // ROOMS_GROUP_CONTEXT,
//   // ROOMS_GROUP,
//   // ROOMS_CATEGORY,
//   // EQUIPMENTS_GROUP_CONTEXT,
//   // EQUIPMENTS_CATEGORY,
//   // EQUIPMENTS_GROUP
//   groupService
// } from 'spinal-env-viewer-room-manager/services/service';
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SELECTrelationList = [
    (0, _constants.SITE_RELATION),
    (0, _constants.BUILDING_RELATION),
    (0, _constants.FLOOR_RELATION),
    (0, _constants.ZONE_RELATION),
    (0, _constants.ROOM_RELATION),
    (0, _constants.EQUIPMENT_RELATION),
    (0, _constants.REFERENCE_RELATION),
    `${(0, _constants.REFERENCE_RELATION)}.ROOM`,
    "hasBIMObject",
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.GROUP_TO_ROOMS_RELATION,
    // groupService.constants.GROUP_TO_EQUIPMENTS_RELATION,
    // groupService.constants.GROUP_TO_ENDPOINT_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES),
    `groupHas${(0, _constants.ROOM_TYPE)}`,
    `groupHas${(0, _constants.EQUIPMENT_TYPE)}`,
    `groupHas${(0, _constants.SITE_TYPE)}`,
    `groupHas${(0, _constants.BUILDING_TYPE)}`,
    `groupHas${(0, _constants.FLOOR_TYPE)}`,
    `groupHas${(0, _constants.ZONE_TYPE)}`,
    `groupHas${(0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName}`
];
const isShownParam = [
    (0, _constants.SITE_TYPE),
    (0, _constants.BUILDING_TYPE),
    (0, _constants.FLOOR_TYPE),
    (0, _constants.ZONE_TYPE),
    (0, _constants.ROOM_TYPE),
    (0, _constants.EQUIPMENT_TYPE),
    // ...groupService.constants.CONTEXTS_TYPES,
    // ...groupService.constants.GROUPS_TYPES,
    // groupService.constants.CATEGORY_TYPE
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES),
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES),
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    `${(0, _constants.ROOM_TYPE)}Group`,
    `${(0, _constants.EQUIPMENT_TYPE)}Group`,
    `${(0, _constants.SITE_TYPE)}Group`,
    `${(0, _constants.BUILDING_TYPE)}Group`,
    `${(0, _constants.FLOOR_TYPE)}Group`,
    `${(0, _constants.ZONE_TYPE)}Group`,
    `${(0, _constants.ROOM_TYPE)}GroupContext`,
    `${(0, _constants.EQUIPMENT_TYPE)}GroupContext`,
    `${(0, _constants.SITE_TYPE)}GroupContext`,
    `${(0, _constants.BUILDING_TYPE)}GroupContext`,
    `${(0, _constants.FLOOR_TYPE)}GroupContext`,
    `${(0, _constants.ZONE_TYPE)}GroupContext`
];
const utilities = {
    async sortBIMObjectByModel (arrayOfBIMObject) {
        let arrayModel = [];
        for(const key in spinal.BimObjectService.mappingBimFileIdModelId)if (spinal.BimObjectService.mappingBimFileIdModelId.hasOwnProperty(key)) {
            const element = spinal.BimObjectService.mappingBimFileIdModelId[key];
            let obj = {
                dbid: [],
                model: element
            };
            arrayModel.push(obj);
        }
        for(let i = 0; i < arrayOfBIMObject.length; i++){
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(arrayOfBIMObject[i]);
            let bim = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNode(arrayOfBIMObject[i].info.id.get());
            try {
                let spinalModel = window.spinal.BimObjectService.mappingBimFileIdModelId[bim.bimFileId.get()];
                if (spinalModel) for(let j = 0; j < arrayModel.length; j++){
                    const element = arrayModel[j];
                    if (element.model.modelId === spinalModel.modelId) element.dbid.push(bim.dbid.get());
                }
            } catch (error) {
                console.error("skip node because bimFileId is not defined", error);
            }
        }
        return arrayModel;
    }
};
module.exports = {
    SELECTrelationList,
    isShownParam,
    utilities
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf"}],"jAXW3":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextFitToViewer", ()=>SpinalContextFitToViewer);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("5b562009692cf730");
class SpinalContextFitToViewer extends SpinalContextApp {
    constructor(){
        super("fit button", "fit to viewer button", {
            icon: "zoom_in",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        this.viewer = window.spinal.ForgeViewer.viewer;
        realNode.find((0, _utilities.SELECTrelationList), function(node) {
            if (node.info.type.get() === "BIMObject") return true;
        }).then((lst)=>{
            (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                let arrayToFit = [];
                for(let i = 0; i < lstByModel.length; i++){
                    const element = lstByModel[i];
                    let obj = {
                        model: element.model.modelScene[0].model,
                        selection: element.dbid
                    };
                    arrayToFit.push(obj);
                    obj.model.selector.setSelection(element.dbid, obj.model, "selectOnly");
                }
                self.viewer.fitToView(arrayToFit);
            });
        });
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","5b562009692cf730":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKnYn":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextIsolation", ()=>SpinalContextIsolation);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("f5e403b3d9806567");
class SpinalContextIsolation extends SpinalContextApp {
    constructor(){
        super("isolation button", "zoom button", {
            icon: "settings_overscan",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        let boolSameNode = false;
        let modelResetIsolate = [];
        let aggregateIsolation = [];
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (this.lastNode == undefined) this.lastNode = realNode;
        else {
            aggregateIsolation = this.viewer.getAggregateIsolation();
            if (this.lastNode.info.id.get() == realNode.info.id.get() && aggregateIsolation.length) boolSameNode = true;
            else this.lastNode = realNode;
        }
        if (boolSameNode) for(let i = 0; i < aggregateIsolation.length; i++){
            const element = aggregateIsolation[i];
            self.viewer.isolate(0, element.model);
        }
        else {
            this.viewer = window.spinal.ForgeViewer.viewer;
            realNode.find((0, _utilities.SELECTrelationList), function(node) {
                if (node.info.type.get() === "BIMObject") return true;
            }).then((lst)=>{
                (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                    for(let i = 0; i < lstByModel.length; i++){
                        const element = lstByModel[i];
                        for(let j = 0; j < element.model.modelScene.length; j++){
                            const scene = element.model.modelScene[j];
                            if (element.dbid.length != 0) self.viewer.isolate(element.dbid, scene.model);
                            else {
                                let rootId = scene.model.getRootId();
                                scene.model.getObjectTree((tree)=>{
                                    let dbidRoot = tree.nodeAccess.dbIdToIndex[rootId];
                                    self.viewer.isolate([
                                        dbidRoot
                                    ], scene.model);
                                });
                            }
                        }
                    }
                });
            });
        }
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","f5e403b3d9806567":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZpX2":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalContextIsolationReference", ()=>SpinalContextIsolationReference);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const { SpinalContextApp } = require("be39058f9adef1c3");
class SpinalContextIsolationReference extends SpinalContextApp {
    constructor(){
        super("Isolate only Reference Objects button", "zoom button", {
            icon: "settings_overscan",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if (type == "geographicFloor") return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        let boolSameNode = false;
        let modelResetIsolate = [];
        let aggregateIsolation = [];
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (this.lastNode == undefined) this.lastNode = realNode;
        else {
            aggregateIsolation = this.viewer.getAggregateIsolation();
            if (this.lastNode.info.id.get() == realNode.info.id.get() && aggregateIsolation.length) boolSameNode = true;
            else this.lastNode = realNode;
        }
        if (boolSameNode) for(let i = 0; i < aggregateIsolation.length; i++){
            const element = aggregateIsolation[i];
            self.viewer.isolate(0, element.model);
        }
        else {
            this.viewer = window.spinal.ForgeViewer.viewer;
            realNode.find((0, _constants.REFERENCE_RELATION), function(node) {
                if (node.info.type.get() === "BIMObject") return true;
            }).then((lst)=>{
                (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                    for(let i = 0; i < lstByModel.length; i++){
                        const element = lstByModel[i];
                        for(let j = 0; j < element.model.modelScene.length; j++){
                            const scene = element.model.modelScene[j];
                            if (element.dbid.length != 0) self.viewer.isolate(element.dbid, scene.model);
                            else {
                                let rootId = scene.model.getRootId();
                                scene.model.getObjectTree((tree)=>{
                                    let dbidRoot = tree.nodeAccess.dbIdToIndex[rootId];
                                    self.viewer.isolate([
                                        dbidRoot
                                    ], scene.model);
                                });
                            }
                        }
                    }
                });
            });
        }
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","be39058f9adef1c3":"kHlxv","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Va3a":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalEditColor", ()=>SpinalEditColor);
const { SpinalContextApp } = require("b075eb68c59c1ec6");
const { spinalPanelManagerService } = require("84a8f90413a64639");
class SpinalEditColor extends SpinalContextApp {
    constructor(){
        super("Edit color", "Edit color", {
            icon: "color_lens",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action(option) {
        spinalPanelManagerService.openPanel("editColordialogComponent", option);
    }
}

},{"b075eb68c59c1ec6":"kHlxv","84a8f90413a64639":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-standard_button.79d2a047.js.map
