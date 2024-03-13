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
})({"7UpnY":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _registerDialogs = require("./registerDialogs");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _createContext = require("./classes/createContext");
var _createContextDefault = parcelHelpers.interopDefault(_createContext);
var _addAbstract = require("./classes/addAbstract");
var _addAbstractDefault = parcelHelpers.interopDefault(_addAbstract);
var _addReference = require("./classes/addReference");
var _addReferenceDefault = parcelHelpers.interopDefault(_addReference);
var _addToReferenceContext = require("./classes/addToReferenceContext");
var _addToReferenceContextDefault = parcelHelpers.interopDefault(_addToReferenceContext);
var _addBimObject = require("./classes/addBimObject");
var _addBimObjectDefault = parcelHelpers.interopDefault(_addBimObject);
var _updateDbId = require("./classes/updateDbId");
const HeaderBarName = "GraphManagerTopBar";
const sidebarName = "GraphManagerSideBar";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HeaderBarName, new (0, _createContextDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _addAbstractDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _addReferenceDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _addToReferenceContextDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _addBimObjectDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _updateDbId.UpdateBimObjectIdBtn)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _updateDbId.SpatialContextUpdateBimObjectIdBtn)(), [
    3
]);

},{"./registerDialogs":"ioT0p","spinal-env-viewer-context-menu-service":"kHlxv","./classes/createContext":"deOOm","./classes/addAbstract":"gCCxF","./classes/addReference":"8VPKP","./classes/addToReferenceContext":"dSEty","./classes/addBimObject":"keUhd","./classes/updateDbId":"ib0Jj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioT0p":[function(require,module,exports) {
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
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _dialogVue = require("./vue/dialog.vue");
var _dialogVueDefault = parcelHelpers.interopDefault(_dialogVue);
var _addChildDialogVue = require("./vue/addChildDialog.vue");
var _addChildDialogVueDefault = parcelHelpers.interopDefault(_addChildDialogVue);
var _notificationVue = require("./vue/notification.vue");
var _notificationVueDefault = parcelHelpers.interopDefault(_notificationVue);
const { SpinalMountExtention } = require("6500bacefef8c637");
const dialogs = [
    {
        name: "createContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _dialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "addChildDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _addChildDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "notificationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _notificationVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","./vue/dialog.vue":"8qys9","./vue/addChildDialog.vue":"l1REc","./vue/notification.vue":"dCJq3","6500bacefef8c637":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qys9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5187b10c461b5b9");
    if (script.__esModule) script = script.default;
    script.render = require("4000ee518605746a").render;
    script.staticRenderFns = require("4000ee518605746a").staticRenderFns;
    script._scopeId = "data-v-6564eb";
    require("19ba109dfb6c9c82").default(script);
    script.__scopeId = "data-v-6564eb";
    script.__file = "dialog.vue";
};
initialize();
exports.default = script;

},{"5187b10c461b5b9":"9IKrQ","4000ee518605746a":"gXt9o","19ba109dfb6c9c82":"1yGCr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IKrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
//import { toasted } from "../toats";
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: "",
            title: "",
            label: "",
            type: "",
            selectedNode: null,
            context: null
        };
    },
    methods: {
        opened (option) {
            this.title = option.title;
            this.label = option.label;
            this.type = option.type;
            this.selectedNode = option.selectedNode;
            this.context = option.context;
        },
        async removed (option) {
            // eslint-disable-next-line no-unused-vars
            var success;
            if (option.closeResult && option.inputValue.trim().length > 0) {
                if (typeof this.selectedNode === "undefined") success = await (0, _spinalEnvViewerContextGeographicServiceDefault.default).createContext(option.inputValue.trim());
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

},{"spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXt9o":[function(require,module,exports) {
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
                _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _c("md-field", [
                    _c("label", [
                        _vm._v(_vm._s(_vm.label))
                    ]),
                    _vm._v(" "),
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
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    attrs: {
                        "disabled": !(_vm.inputValue.trim().length > 0)
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
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1yGCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1REc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6d10f5fe6a77b31f");
    if (script.__esModule) script = script.default;
    script.render = require("dca1f72470943cb0").render;
    script.staticRenderFns = require("dca1f72470943cb0").staticRenderFns;
    script._scopeId = "data-v-a2d6c1";
    require("85f2f4022567a079").default(script);
    script.__scopeId = "data-v-a2d6c1";
    script.__file = "addChildDialog.vue";
};
initialize();
exports.default = script;

},{"6d10f5fe6a77b31f":"7Z9nf","dca1f72470943cb0":"balyq","85f2f4022567a079":"iGTy4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Z9nf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
var scriptExports = {
    name: "addChildDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            contextId: null,
            nodeSelectedId: null,
            nodeSelectedType: null,
            typeAvailable: [],
            typeSelected: null,
            inputValue: ""
        };
    },
    methods: {
        opened (option) {
            this.nodeSelectedId = option.selectedNode.id.get();
            this.nodeSelectedType = option.selectedNode.type.get();
            this.contextId = option.context.id.get();
            this.typeAvailable = this.getTypesAvailable();
        },
        getTypesAvailable () {
            let typesIndex = constants.GEOGRAPHIC_TYPES_ORDER.indexOf(this.nodeSelectedType);
            let data = [
                ...constants.GEOGRAPHIC_TYPES_ORDER
            ];
            if (typesIndex !== -1) data = data.slice(typesIndex + 1, data.length - 1);
            return data.map((el)=>{
                return {
                    type: el,
                    name: this.formatData(el)
                };
            });
        },
        removed (option) {
            if (option.closeResult) switch(this.typeSelected){
                case constants.SITE_TYPE:
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addSite(this.contextId, this.nodeSelectedId, this.inputValue.trim());
                    break;
                case constants.BUILDING_TYPE:
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addBuilding(this.contextId, this.nodeSelectedId, this.inputValue.trim());
                    break;
                case constants.FLOOR_TYPE:
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addFloor(this.contextId, this.nodeSelectedId, this.inputValue.trim());
                    break;
                case constants.ZONE_TYPE:
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addZone(this.contextId, this.nodeSelectedId, this.inputValue.trim());
                    break;
                case constants.ROOM_TYPE:
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addRoom(this.contextId, this.nodeSelectedId, this.inputValue.trim());
                    break;
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        disableBtn () {
            return this.inputValue.trim().length === 0 || !this.typeSelected;
        },
        formatData (data) {
            return data.replace("geographic", "");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"balyq":[function(require,module,exports) {
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
            _vm._v("Add Child")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "childType"
                    }
                }, [
                    _vm._v("Select Type")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    attrs: {
                        "name": "childType",
                        "id": "childType"
                    },
                    model: {
                        value: _vm.typeSelected,
                        callback: function($$v) {
                            _vm.typeSelected = $$v;
                        },
                        expression: "typeSelected"
                    }
                }, _vm._l(_vm.typeAvailable, function(obj, index) {
                    return _c("md-option", {
                        key: index,
                        attrs: {
                            "value": obj.type
                        }
                    }, [
                        _vm._v(_vm._s(obj.name))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c("md-field", [
                _c("label", [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableBtn()
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

},{}],"iGTy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCJq3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7253746f9659ff6e");
    if (script.__esModule) script = script.default;
    script.render = require("ed02b270f0594de9").render;
    script.staticRenderFns = require("ed02b270f0594de9").staticRenderFns;
    script._scopeId = "data-v-6d3334";
    require("680dd8623588b106").default(script);
    script.__scopeId = "data-v-6d3334";
    script.__file = "notification.vue";
};
initialize();
exports.default = script;

},{"7253746f9659ff6e":"hGljT","ed02b270f0594de9":"h66HN","680dd8623588b106":"cb35a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGljT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "NotificationComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: false,
            msg: "",
            time: 4000
        };
    },
    methods: {
        opened (option) {
            this.showDialog = true;
            this.msg = option.msg;
            this.time = option.time;
        },
        removed (option) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h66HN":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-snackbar", {
        attrs: {
            "md-position": "left",
            "md-duration": _vm.time,
            "md-active": _vm.showDialog,
            "md-persistent": ""
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            }
        }
    }, [
        _c("span", [
            _vm._v(_vm._s(_vm.msg))
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cb35a":[function(require,module,exports) {
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

},{}],"deOOm":[function(require,module,exports) {
const { SpinalContextApp } = require("5b9b4b0b209bcc1b");
const { spinalPanelManagerService } = require("cf318b9151375538");
class CreateContextBtn extends SpinalContextApp {
    constructor(){
        super("Create Geographic Context", "This button create a geographic context", {
            icon: "location_city",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        // option.paramSent = "Create context";
        let dialogParams = {
            inputValue: "",
            title: "Create context",
            label: "Enter context name"
        };
        spinalPanelManagerService.openPanel("createContextDialog", dialogParams);
    }
}
module.exports = CreateContextBtn;

},{"5b9b4b0b209bcc1b":"kHlxv","cf318b9151375538":"7Uw4d"}],"gCCxF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
class AddAbstactElement extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add Child", "This button adds an abstract element (building, zone, floor or room)", {
            icon: "add_location",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let typeSelected = option.selectedNode.type.get();
        if (constants.GEOGRAPHIC_TYPES_ORDER.indexOf(typeSelected) !== -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("addChildDialog", option);
    }
}
exports.default = AddAbstactElement;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VPKP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
// import {
//   SpinalGraphService
// } from "spinal-env-viewer-graph-service";
// import bimobjService from 'spinal-env-viewer-plugin-bimobjectservice';
// const bimobjService = window.spinal.BimObjectService;
const { SpinalContextApp } = require("a8bb7ccfc1697274");
// import {
//   toasted
// } from "../toats";
const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
class AddReferenceBtn extends SpinalContextApp {
    constructor(){
        super("Add reference", "add reference to a geaographic element", {
            icon: "add_circle_outline",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.context.type.get() === constants.CONTEXT_TYPE && option.context.id.get() !== option.selectedNode.id.get() && option.selectedNode.type.get() !== constants.EQUIPMENT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        let elementSelected = window.spinal.ForgeViewer.viewer.getAggregateSelection();
        if (elementSelected.length == 0) // toasted.error("no item selected");
        return;
        for(let idx = 0; idx < elementSelected.length; idx++){
            const { model, selection } = elementSelected[idx];
            model.getBulkProperties(selection, {
                propFilter: [
                    "name"
                ]
            }, (el)=>{
                el.forEach((element)=>{
                    window.spinal.BimObjectService.addReferenceObject(option.selectedNode.id.get(), element.dbId, element.name, model);
                });
            });
        }
    // elementSelected.forEach(element => {
    // let node = SpinalGraphService.getRealNode(option.selectedNode.id
    //   .get());
    // bimobjService.addReferenceObject(node, element, "bimObject_" +
    //   element).then(el => {
    //   if (el) {
    //     // toasted.success("Reference added with success !");
    //     return;
    //   }
    //   // toasted.error("Reference is not added !");
    // })
    // });
    }
}
module.exports = AddReferenceBtn;

},{"spinal-env-viewer-context-geographic-service":"5QjJf","a8bb7ccfc1697274":"kHlxv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSEty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
class AddToReference extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Add to reference", "Add to reference", {
            icon: "control_point_duplicate",
            icon_type: "in",
            backgroundColor: "#FF00000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.context.type.get() === option.selectedNode.type.get() && option.selectedNode.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        (0, _spinalEnvViewerContextGeographicServiceDefault.default).addContextToReference(option.context.id.get());
    }
}
exports.default = AddToReference;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keUhd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
class AddBimObjects extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add BimObject", "This button adds all elements selected", {
            icon: "post_add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let contextType = option.context.type.get();
        let typeSelected = option.selectedNode.type.get();
        if (contextType === constants.CONTEXT_TYPE && typeSelected !== constants.EQUIPMENT_TYPE) return Promise.resolve(true);
        // let index = constants.GEOGRAPHIC_TYPES_ORDER.indexOf(typeSelected);
        return Promise.resolve(-1);
    }
    action(option) {
        const viewer = window.spinal.ForgeViewer.viewer;
        var bimSelected = viewer.getAggregateSelection();
        if (bimSelected.length === 0) {
            alert("select an object");
            return;
        }
        for(let idx = 0; idx < bimSelected.length; idx++){
            const { model, selection } = bimSelected[idx];
            model.getBulkProperties(selection, {
                propFilter: [
                    "name"
                ]
            }, (el)=>{
                el.forEach((element)=>{
                    (0, _spinalEnvViewerContextGeographicServiceDefault.default).addBimElement(option.context, option.selectedNode, element, model);
                });
            });
        }
    }
}
exports.default = AddBimObjects;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib0Jj":[function(require,module,exports) {
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
parcelHelpers.export(exports, "UpdateBimObjectIdBtn", ()=>UpdateBimObjectIdBtn);
parcelHelpers.export(exports, "SpatialContextUpdateBimObjectIdBtn", ()=>SpatialContextUpdateBimObjectIdBtn);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const LABEL = "Update Ids Model";
const DESCRIPTION = "update model dbids by the externalID";
const NODE_TYPE = "BimFile";
async function updateBimObjectId(bimObjects) {
    const mapModelExternId = new Map();
    const updated = [];
    const notFound = [];
    function getExternalIdMapping(model) {
        if (mapModelExternId.has(model)) return mapModelExternId.get(model);
        const prom = new Promise((resolve)=>{
            model.getExternalIdMapping((map)=>{
                resolve(map);
            });
        });
        mapModelExternId.set(model, prom);
        return prom;
    }
    console.log("updateBimObjectId - number of items :", bimObjects.length);
    for (const bimObj of bimObjects){
        const bimFileId = bimObj.info.bimFileId.get();
        const model = window.spinal.BimObjectService.getModelByBimfile(bimFileId);
        // eslint-disable-next-line no-await-in-loop
        const externalIdMapping = await getExternalIdMapping(model);
        const externalId = bimObj.info.externalId.get();
        if (!externalIdMapping[externalId]) {
            notFound.push(bimObj.info.get());
            bimObj.info.dbid.set(-1);
        } else if (bimObj.info.dbid.get() !== externalIdMapping[externalId]) {
            updated.push(externalIdMapping[externalId]);
            bimObj.info.dbid.set(externalIdMapping[externalId]);
        }
    }
    console.log("End");
    let msg = "Update done";
    if (updated.length > 0) {
        console.log("UPDATED", updated);
        msg = `${msg}, objects updated : ${updated.length}`;
    }
    if (notFound.length > 0) {
        console.log("notFound", notFound);
        msg = `${msg}, objects not updated : ${notFound.length}`;
    }
    (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("notificationDialog", {
        msg: msg,
        time: 3000
    });
}
class UpdateBimObjectIdBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, DESCRIPTION, {
            icon: "update",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === NODE_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const rNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const bimObjects = [];
        const bimContexts = await rNode.getChildren("hasBimContext");
        for (const bimContext of bimContexts){
            // eslint-disable-next-line no-await-in-loop
            const bimObj = await bimContext.getChildren("hasBimObject");
            bimObjects.push(...bimObj);
        }
        return updateBimObjectId(bimObjects);
    }
}
class SpatialContextUpdateBimObjectIdBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, DESCRIPTION, {
            icon: "update",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _constants.CONTEXT_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const rNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const bimObjects = new Set();
        const geoRelations = [
            (0, _constants.SITE_RELATION),
            (0, _constants.BUILDING_RELATION),
            (0, _constants.ZONE_RELATION),
            (0, _constants.FLOOR_RELATION),
            (0, _constants.ROOM_RELATION),
            (0, _constants.EQUIPMENT_RELATION),
            (0, _constants.REFERENCE_RELATION),
            "hasReferenceObject.ROOM"
        ];
        await rNode.find(geoRelations, (node)=>{
            if (typeof node.info.externalId !== "undefined" && typeof node.info.dbid !== "undefined") bimObjects.add(node);
            return false;
        });
        return updateBimObjectId(bimObjects);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-context-geographic.84816a5a.js.map
