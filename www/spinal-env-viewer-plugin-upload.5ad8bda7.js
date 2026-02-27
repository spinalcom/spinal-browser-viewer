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
})({"5AlIa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _registerDialog = require("./registerDialog");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _uploadExcel = require("./src/button/uploadExcel");
var _uploadExcelDefault = parcelHelpers.interopDefault(_uploadExcel);
var _contextUpload = require("./src/button/contextUpload");
var _contextUploadDefault = parcelHelpers.interopDefault(_contextUpload);
var _linkEndpointToProfil = require("./src/button/linkEndpointToProfil");
var _linkEndpointToProfilDefault = parcelHelpers.interopDefault(_linkEndpointToProfil);
// import LinkGroupToEndpoint from "./src/button/linkGroupToEndpoint";
const sidebarName = "GraphManagerSideBar";
const topbarName = "GraphManagerTopBar";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _uploadExcelDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(topbarName, new (0, _contextUploadDefault.default)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(sidebarName, new (0, _linkEndpointToProfilDefault.default)(), [
    3
]); // spinalContextMenuService.registerApp(sidebarName, new LinkGroupToEndpoint(), [3]);

},{"./registerDialog":"h4IXk","spinal-env-viewer-context-menu-service":"3h19D","./src/button/uploadExcel":"8avHD","./src/button/contextUpload":"2f8kh","./src/button/linkEndpointToProfil":"lR0IE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h4IXk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _uploadFileVue = require("./src/vue/uploadFile.vue");
var _uploadFileVueDefault = parcelHelpers.interopDefault(_uploadFileVue);
var _createContextVue = require("./src/vue/createContext.vue");
var _createContextVueDefault = parcelHelpers.interopDefault(_createContextVue);
var _linkProfilVue = require("./src/vue/linkProfil.vue");
var _linkProfilVueDefault = parcelHelpers.interopDefault(_linkProfilVue);
var _linkGroupVue = require("./src/vue/linkGroup.vue");
var _linkGroupVueDefault = parcelHelpers.interopDefault(_linkGroupVue);
var _selectControlEndpointVue = require("./src/vue/selectControlEndpoint.vue");
var _selectControlEndpointVueDefault = parcelHelpers.interopDefault(_selectControlEndpointVue);
const { SpinalMountExtention } = require("26997a5d367e0278");
const dialogs = [
    {
        name: "UploadExcelDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _uploadFileVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "ContextUploadDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "LinkProfilDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkProfilVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "LinkGroupDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkGroupVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "selectControlEndpoint",
        vueMountComponent: (0, _vueDefault.default).extend((0, _selectControlEndpointVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","./src/vue/uploadFile.vue":"fBv0q","./src/vue/createContext.vue":"bIZSk","./src/vue/linkProfil.vue":"bEju7","./src/vue/linkGroup.vue":"86lnT","./src/vue/selectControlEndpoint.vue":"17DFB","26997a5d367e0278":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fBv0q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4ba3ef69f69dab93");
    if (script.__esModule) script = script.default;
    script.render = require("f54b6b3e7d249ff8").render;
    script.staticRenderFns = require("f54b6b3e7d249ff8").staticRenderFns;
    script._scopeId = "data-v-641298";
    require("579627595bda4e13").default(script);
    script.__scopeId = 'data-v-641298';
    script.__file = "uploadFile.vue";
};
initialize();
exports.default = script;

},{"4ba3ef69f69dab93":"ewPHc","f54b6b3e7d249ff8":"aAvMV","579627595bda4e13":"7f7aM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ewPHc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _profilModel = require("../model/profilModel");
var { SpinalExcelManager } = require("56e4e6839454d2b4");
var scriptExports = {
    name: "uploadComponent",
    props: [
        "onFinised"
    ],
    data () {
        this.contextId;
        return {
            showDialog: true,
            f: undefined,
            file: undefined,
            profilName: ""
        };
    },
    methods: {
        opened (option) {
            console.log("voici l'option", option);
            this.contextId = option.context.id.get();
        },
        async removed (option) {
            if (option.closeResult) {
                const valueExcel = await this.getDataFromExcel(this.file);
                console.log("conversion du fichier excel", valueExcel);
                const sheetNames = Object.keys(valueExcel);
                const sheetValues = sheetNames.map((el)=>{
                    return valueExcel[el].map((element)=>{
                        const valueKey = Object.keys(element)[1];
                        return {
                            date: new Date(element["DATE / HEURE"]).getTime(),
                            value: element[valueKey]
                        };
                    });
                });
                const values = sheetValues.flat().filter((el)=>{
                    return !isNaN(el.date) && typeof el.date == "number" && !isNaN(el.value) && typeof el.value == "number";
                });
                const profilModel = new (0, _profilModel.ProfilModel)(this.profilName, values);
                const nodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: this.profilName,
                    type: "uploadProfil"
                }, profilModel);
                (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(this.contextId, nodeId, this.contextId, "hasUploadProfil", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE));
            // const values = sheetValues.
            // const valueKey = Object.keys(valueExcel)[1];
            // const date = new Date(element["DATE / HEURE"]).getTime();
            // const value = element[valueKey];
            // const value = Object.keys(valueExcel).map()
            // console.log("value",value,this.profilName);
            // sauvegarder le fichier excel et le convertir en object
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        getDataFromExcel (excelLink) {
            return SpinalExcelManager.convertExcelToJson(excelLink);
        },
        changeFile (files) {
            this.file = files[0];
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../model/profilModel":"2mJ9B","56e4e6839454d2b4":"5y3Gh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2mJ9B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilModel", ()=>ProfilModel);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
class ProfilModel extends (0, _spinalCoreConnectorjsType.Model) {
    constructor(name, data){
        super();
        this.add_attr({
            name,
            data: new (0, _spinalCoreConnectorjsType.Ptr)(new (0, _spinalCoreConnectorjsType.Lst)(data))
        });
    }
}
(0, _spinalCoreConnectorjsType.spinalCore).register_models([
    ProfilModel
]);

},{"spinal-core-connectorjs_type":"1A32E","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aAvMV":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-dialog', {
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
            _c('md-dialog-title', [
                _vm._v("Add a simulation file")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Profil name")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        model: {
                            value: _vm.profilName,
                            callback: function($$v) {
                                _vm.profilName = $$v;
                            },
                            expression: "profilName"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('md-field', [
                    _c('label', [
                        _vm._v("Upload")
                    ]),
                    _vm._v(" "),
                    _c('md-file', {
                        on: {
                            "md-change": _vm.changeFile
                        },
                        model: {
                            value: _vm.f,
                            callback: function($$v) {
                                _vm.f = $$v;
                            },
                            expression: "f"
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
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
                _c('md-button', {
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
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7f7aM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bIZSk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a97bf41b8e4253f6");
    if (script.__esModule) script = script.default;
    script.render = require("40a86fc3121a5f01").render;
    script.staticRenderFns = require("40a86fc3121a5f01").staticRenderFns;
    script._scopeId = "data-v-80d99e";
    require("91f29432b5e9cf4e").default(script);
    script.__scopeId = 'data-v-80d99e';
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"a97bf41b8e4253f6":"6NFhL","40a86fc3121a5f01":"hgHTL","91f29432b5e9cf4e":"5rL9l","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6NFhL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var { SpinalExcelManager } = require("3e043cff2d4ea");
var scriptExports = {
    name: "createContext",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            contextName: ""
        };
    },
    methods: {
        opened (option) {
            console.log("voici l'option", option);
        },
        async removed (option) {
            if (option.closeResult) (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(this.contextName, "uploadFileContext");
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        getDataFromExcel (excelLink) {
            return SpinalExcelManager.convertExcelToJson(excelLink);
        },
        changeFile (files) {
            this.file = files[0];
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","3e043cff2d4ea":"5y3Gh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hgHTL":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-dialog', {
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
            _c('md-dialog-title', [
                _vm._v("Add a simulation context")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Context name")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        model: {
                            value: _vm.contextName,
                            callback: function($$v) {
                                _vm.contextName = $$v;
                            },
                            expression: "contextName"
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
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
                _c('md-button', {
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
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5rL9l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bEju7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ea79a391dde7a358");
    if (script.__esModule) script = script.default;
    script.render = require("bfbb022f9c840b47").render;
    script.staticRenderFns = require("bfbb022f9c840b47").staticRenderFns;
    script._scopeId = "data-v-455a98";
    script.__cssModules = require("59daea7c7c650f8").default;
    require("2f5b59990e48c80").default(script);
    script.__scopeId = 'data-v-455a98';
    script.__file = "linkProfil.vue";
};
initialize();
exports.default = script;

},{"ea79a391dde7a358":"hy1bl","bfbb022f9c840b47":"lfnoN","59daea7c7c650f8":"dHSfK","2f5b59990e48c80":"dXb02","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hy1bl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkTogroupTemplateVue = require("./linkTogroupTemplate.vue");
var _linkTogroupTemplateVueDefault = parcelHelpers.interopDefault(_linkTogroupTemplateVue);
var scriptExports = {
    name: "createContext",
    props: [
        "onFinised"
    ],
    components: {
        "link-template": (0, _linkTogroupTemplateVueDefault.default)
    },
    data () {
        this.endpointSelected;
        return {
            showDialog: true,
            contextName: "",
            profilSelected: "",
            contextSelected: "",
            context: [],
            profils: []
        };
    },
    methods: {
        async opened ({ nodeId }) {
            this.endpointSelected = nodeId;
            this.context = await this.getData();
        },
        async removed (option) {
            if (option.closeResult) {
                const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.endpointSelected);
                if (node.hasRelation("endpointHasProfil", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) await node.removeRelation("endpointHasProfil", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                (0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(this.endpointSelected, this.profilSelected, "endpointHasProfil", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        selectContext (element) {
            this.profilSelected = undefined;
            this.profils = [];
            this.contextSelected = element;
            let found = this.context.find((el)=>el.id == element);
            if (found) this.profils = found.profils;
        },
        selectProfil (element) {
            this.profilSelected = element;
        },
        getData () {
            const contextNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("uploadFileContext");
            const context = contextNode.map((element)=>element.info.get());
            const promise = context.map(async (el)=>{
                let contextChildren = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(el.id, el.id);
                el.profils = contextChildren.map((element)=>element.get());
                return el;
            });
            return Promise.all(promise);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","./linkTogroupTemplate.vue":"ep9vV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ep9vV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cd457957136940bd");
    if (script.__esModule) script = script.default;
    script.render = require("a4764c05d85a6960").render;
    script.staticRenderFns = require("a4764c05d85a6960").staticRenderFns;
    script._scopeId = "data-v-1b3b7c";
    script.__cssModules = require("a85a00fafd40db1d").default;
    require("7949e133f34b35a1").default(script);
    script.__scopeId = 'data-v-1b3b7c';
    script.__file = "linkTogroupTemplate.vue";
};
initialize();
exports.default = script;

},{"cd457957136940bd":"9bNDM","a4764c05d85a6960":"9h1fj","a85a00fafd40db1d":"b0hJa","7949e133f34b35a1":"aa2tt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9bNDM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "linkToGroupTemplate",
    props: [
        "data",
        "title",
        "itemSelected",
        "disableBtn"
    ],
    methods: {
        createEvent () {
            this.$emit("create");
        },
        selectItem (id) {
            this.$emit("select", id);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9h1fj":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "subContent"
    }, [
        _c('div', {
            staticClass: "title"
        }, [
            _c('div', [
                _vm._v(_vm._s(_vm.title))
            ])
        ]),
        _vm._v(" "),
        _c('md-content', {
            staticClass: "container md-scrollbar"
        }, [
            _c('md-list', _vm._l(_vm.data, function(item, index) {
                return _c('md-list-item', {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: item.name,
                            expression: "item.name"
                        }
                    ],
                    key: index,
                    staticClass: "list-item",
                    class: {
                        'selected': item.id === _vm.itemSelected
                    },
                    on: {
                        "click": function($event) {
                            return _vm.selectItem(item.id);
                        }
                    }
                }, [
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ])
                ]);
            }), 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"b0hJa":[function() {},{}],"aa2tt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lfnoN":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-dialog', {
            staticClass: "dialogApp",
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
            _c('md-dialog-title', [
                _vm._v("Link an endpoint to a profil")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Context',
                            "data": _vm.context,
                            "itemSelected": _vm.contextSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectContext
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Profil',
                            "data": _vm.profils,
                            "itemSelected": _vm.profilSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectProfil
                        }
                    })
                ], 1)
            ]),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
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
                _c('md-button', {
                    staticClass: "md-primary",
                    attrs: {
                        "disabled": !_vm.profilSelected
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

},{}],"dHSfK":[function() {},{}],"dXb02":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"86lnT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2074fe8a9069da8f");
    if (script.__esModule) script = script.default;
    script.render = require("55888094d9072a10").render;
    script.staticRenderFns = require("55888094d9072a10").staticRenderFns;
    script._scopeId = "data-v-b89160";
    script.__cssModules = require("1a32ba280252f396").default;
    require("4a31d3d7e3e307c9").default(script);
    script.__scopeId = 'data-v-b89160';
    script.__file = "linkGroup.vue";
};
initialize();
exports.default = script;

},{"2074fe8a9069da8f":"f1uvN","55888094d9072a10":"3qkYV","1a32ba280252f396":"iIJTu","4a31d3d7e3e307c9":"9tHFm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f1uvN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkTogroupTemplateVue = require("./linkTogroupTemplate.vue");
var _linkTogroupTemplateVueDefault = parcelHelpers.interopDefault(_linkTogroupTemplateVue);
var { SpinalExcelManager } = require("472c569495a53ee1");
var scriptExports = {
    name: "createContext",
    props: [
        "onFinised"
    ],
    components: {
        "link-template": (0, _linkTogroupTemplateVueDefault.default)
    },
    data () {
        this.selectedNode;
        return {
            showDialog: true,
            contextName: "",
            profilSelected: "",
            contextSelected: "",
            deviceSelected: "",
            endpointSelected: "",
            context: [],
            profils: [],
            devices: [],
            endpoints: []
        };
    },
    methods: {
        async opened (option) {
            console.log("voici l'option", option);
            //this.endpointSelected = option.selectedNode.id.get()
            console.log("this is selctedNode: ", option.selectedNode);
            console.log("this is the context name: ", (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("BIMObjectGroupContext"));
            /* const currentNode = option.selectedNode;
      const currentNodeChildren = await SpinalGraphService.getChildren(currentNode.id.get(), "groupHasBIMObject");
      for(let child of currentNodeChildren){
          console.log(child.name.get());
        } */ this.selectedNode = option.selectedNode;
            /*    const currentNodeChildren = await SpinalGraphService.getChildren(currentNode.id.get(), "groupHasBIMObject");
            for(let child of currentNodeChildren){
                console.log("this is child",child);
                console.log("this thisEndpointSelected", this.endpointSelected);
                //const node = SpinalGraphService.getRealNode(child.id.get());
                /* if(node.hasRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE))
                await node.removeRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE) 
                //SpinalGraphService.addChild(child.id.get(), this.endpointSelected, "hasEndPoint", SPINAL_RELATION_PTR_LST_TYPE)

            } */ this.context = await this.getData();
        },
        async removed (option) {
            if (option.closeResult) {
                const currentNode = this.selectedNode;
                const currentNodeChildren = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(currentNode.id.get(), [
                    "groupHasBIMObject",
                    "groupHasgeographicRoom"
                ]);
                for (let child of currentNodeChildren){
                    console.log("this is child", child);
                    console.log("this thisEndpointSelected", this.endpointSelected);
                    //const node = SpinalGraphService.getRealNode(child.id.get());
                    /* if(node.hasRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE))
                await node.removeRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE) */ (0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(child.id.get(), this.endpointSelected, "hasEndPoint", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                }
            /* if(option.closeResult){
            const node = SpinalGraphService.getRealNode(this.endpointSelected);
            if(node.hasRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE))
            await node.removeRelation("endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE)
            SpinalGraphService.addChild(this.endpointSelected, this.profilSelected, "endpointHasProfil", SPINAL_RELATION_PTR_LST_TYPE)
        } */ }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        selectContext (element) {
            this.profilSelected = undefined;
            this.endpointSelected = undefined;
            this.deviceSelected = undefined;
            this.endpoints = [];
            this.profils = [];
            this.devices = [];
            this.contextSelected = element;
            let found = this.context.find((el)=>el.id == element);
            if (found) this.profils = found.profils;
        },
        async selectProfil (element) {
            this.profilSelected = element;
            let context = this.context.find((el)=>el.id == this.contextSelected);
            if (context) {
                console.log(this.profilSelected, context);
                let deviceFound = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(this.profilSelected, context.id);
                this.devices = deviceFound.map((element)=>element.get());
            }
        },
        async selectDevice (element) {
            this.deviceSelected = element;
            let context = this.context.find((el)=>el.id == this.contextSelected);
            if (context) {
                console.log(this.deviceSelected, context);
                let endpointFound = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(this.deviceSelected, context.id);
                this.endpoints = endpointFound.map((element)=>element.get());
            }
        },
        selectEndpoint (element) {
            console.log(element);
            this.endpointSelected = element;
        },
        getData () {
            const contextNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("Network");
            const context = contextNode.map((element)=>element.info.get());
            const promise = context.map(async (el)=>{
                let contextChildren = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(el.id, el.id);
                el.profils = contextChildren.map((element)=>element.get());
                return el;
            });
            return Promise.all(promise);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","472c569495a53ee1":"5y3Gh","./linkTogroupTemplate.vue":"ep9vV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3qkYV":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-dialog', {
            staticClass: "dialogApp",
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
            _c('md-dialog-title', [
                _vm._v("Link an endpoint to a profil")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Context',
                            "data": _vm.context,
                            "itemSelected": _vm.contextSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectContext
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Profil',
                            "data": _vm.profils,
                            "itemSelected": _vm.profilSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectProfil
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Device',
                            "data": _vm.devices,
                            "itemSelected": _vm.deviceSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectDevice
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Endpoint',
                            "data": _vm.endpoints,
                            "itemSelected": _vm.endpointSelected,
                            "disableBtn": true
                        },
                        on: {
                            "select": _vm.selectEndpoint
                        }
                    })
                ], 1)
            ]),
            _vm._v(" "),
            _c('md-dialog-actions', [
                _c('md-button', {
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
                _c('md-button', {
                    staticClass: "md-primary",
                    attrs: {
                        "disabled": !_vm.endpointSelected
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

},{}],"iIJTu":[function() {},{}],"9tHFm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"17DFB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("604498ab8fadeefc");
    if (script.__esModule) script = script.default;
    script.render = require("f11745a47f68a61e").render;
    script.staticRenderFns = require("f11745a47f68a61e").staticRenderFns;
    script._scopeId = "data-v-eeac80";
    require("f51ae73faf45e10c").default(script);
    script.__scopeId = 'data-v-eeac80';
    script.__file = "selectControlEndpoint.vue";
};
initialize();
exports.default = script;

},{"604498ab8fadeefc":"cVBVL","f11745a47f68a61e":"94JHD","f51ae73faf45e10c":"f2wKo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cVBVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
const { spinalPanelManagerService } = require("621d1d49722c25bb");
var scriptExports = {
    name: "selectControlPoint",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            controlPoints: [],
            controlPointSelected: undefined
        };
    },
    methods: {
        async opened ({ selectedNode, context, graph }) {
            this.controlPoints = await this.getControlEndpoints(selectedNode.id.get());
        },
        async getControlEndpoints (nodeId) {
            const controlPoints = await (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).getControlEndpointLinkedToGroupItem(nodeId);
            return this.formatControlEndpoints(controlPoints);
        },
        formatControlEndpoints (controlPoints) {
            const format = controlPoints.map((profil)=>{
                return profil.endpoints.map((endpoint)=>{
                    endpoint.name = `${profil.name}/${endpoint.name}`;
                    return endpoint;
                });
            });
            return format.flat();
        },
        async removed (option) {
            if (option.closeResult) spinalPanelManagerService.openPanel("LinkProfilDialog", {
                nodeId: this.controlPointSelected
            });
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","621d1d49722c25bb":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{"8b71a79dcc12420e":"iFBrU","e47c36529e942a76":"637DX","cfd4c6200ba55765":"3DhXk"}],"iFBrU":[function(require,module,exports,__globalThis) {
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

},{}],"637DX":[function(require,module,exports,__globalThis) {
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

},{}],"3DhXk":[function(require,module,exports,__globalThis) {
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

},{}],"94JHD":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "dialogApp",
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
        _c('md-dialog-title', [
            _vm._v("Link an endpoint to a profil")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _c('md-field', [
                _c('label', {
                    attrs: {
                        "for": "movie"
                    }
                }, [
                    _vm._v("Select ControlPoints")
                ]),
                _vm._v(" "),
                _c('md-select', {
                    attrs: {
                        "name": "controlPoints",
                        "id": "controlPoints"
                    },
                    model: {
                        value: _vm.controlPointSelected,
                        callback: function($$v) {
                            _vm.controlPointSelected = $$v;
                        },
                        expression: "controlPointSelected"
                    }
                }, _vm._l(_vm.controlPoints, function(controlPoint) {
                    return _c('md-option', {
                        key: controlPoint.id,
                        attrs: {
                            "value": controlPoint.id
                        }
                    }, [
                        _vm._v(_vm._s(controlPoint.name))
                    ]);
                }), 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
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
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": !_vm.controlPointSelected
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

},{}],"f2wKo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8avHD":[function(require,module,exports,__globalThis) {
const { SpinalContextApp } = require("9705d8c61219228e");
const { spinalPanelManagerService } = require("3651b760e4ac0fb6");
const { SpinalBmsDevice } = require("c48911397b1e6daa");
class UploadExcelFile extends SpinalContextApp {
    constructor(){
        super("Upload Excel file", "This button upload an excel file", {
            icon: "file_upload",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const selectedNodeType = option.selectedNode.type.get();
        if (selectedNodeType === "uploadFileContext") return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        spinalPanelManagerService.openPanel('UploadExcelDialog', option);
    }
}
module.exports = UploadExcelFile;

},{"9705d8c61219228e":"3h19D","3651b760e4ac0fb6":"egTXY","c48911397b1e6daa":"haihS"}],"2f8kh":[function(require,module,exports,__globalThis) {
const { SpinalContextApp } = require("ba4e2156ebdae742");
const { spinalPanelManagerService } = require("3142e3e0a829e3d6");
const { SpinalBmsDevice } = require("94568f4ccecb7c77");
class ContextUpload extends SpinalContextApp {
    constructor(){
        super("Create upload context", "This button create a context to upload", {
            icon: "navigation",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        /* const selectedNodeType = option.selectedNode.type.get();
        if(selectedNodeType === SpinalBmsDevice.nodeTypeName) return Promise.resolve(true);
        return Promise.resolve(-1);  */ return Promise.resolve(true);
    }
    action(option) {
        spinalPanelManagerService.openPanel('ContextUploadDialog', option);
    }
}
module.exports = ContextUpload;

},{"ba4e2156ebdae742":"3h19D","3142e3e0a829e3d6":"egTXY","94568f4ccecb7c77":"haihS"}],"lR0IE":[function(require,module,exports,__globalThis) {
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const { SpinalContextApp } = require("451579fd3f1325af");
const { spinalPanelManagerService } = require("a7bf63f8c76a7174");
class LinkEndpointToProfil extends SpinalContextApp {
    constructor(){
        super("Link an endpoint to a profil", "This button link an endpoint to a profil", {
            icon: "share",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const isGroupContext = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isContext(contextType);
        if (!isGroupContext) return Promise.resolve(-1);
        const type = option.selectedNode.type.get();
        return Promise.resolve((0, _constants.GEOGRAPHIC_TYPES_ORDER).indexOf(type));
    // if(GEOGRAPHIC_TYPES_ORDER.indexOf(type) !== -1) {
    //   const isCategory = groupManagerService.isCategory(type);
    // const isGroup = groupManagerService.isGroup(type);
    // const isContext = type === contextType;
    // }
    // if (isCategory || isGroup || isContext) {
    //   const type = getGroupType(contextType);
    //   return Promise.resolve(GEOGRAPHIC_TYPES_ORDER.indexOf(type));
    // }
    // return Promise.resolve(-1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("selectControlEndpoint", option);
    // spinalPanelManagerService.openPanel("LinkProfilDialog", option);
    }
}
module.exports = LinkEndpointToProfil;

},{"451579fd3f1325af":"3h19D","a7bf63f8c76a7174":"egTXY","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-upload.5ad8bda7.js.map
