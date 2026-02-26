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
})({"i0slP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _registerDialog = require("./js/registerDialog");
var _createToolbar = require("./js/createToolbar");
var _createToolbarDefault = parcelHelpers.interopDefault(_createToolbar);
var _filterByLevelBtn = require("./js/filterByLevelBtn");
var _filterByLevelBtnDefault = parcelHelpers.interopDefault(_filterByLevelBtn);
var _filterPanelBtn = require("./js/filterPanelBtn");
var _filterPanelBtnDefault = parcelHelpers.interopDefault(_filterPanelBtn);
const TOOLBAR_GROUP_NAME = "spinalcom";
const EXTENSION_NAME = "spinal-viewer-filter";
const filterManager = (0, _createToolbarDefault.default)({
    name: "spinal-filter-extension",
    icon: "filter_list_alt",
    label: "filter",
    subToolbarName: TOOLBAR_GROUP_NAME
}, [
    (0, _filterByLevelBtnDefault.default),
    (0, _filterPanelBtnDefault.default)
]);
window.Autodesk.Viewing.theExtensionManager.registerExtension(EXTENSION_NAME, filterManager);
window.spinal.ForgeExtentionManager.addExtention(EXTENSION_NAME);

},{"./js/registerDialog":"1ijtu","./js/createToolbar":"1ZCYi","./js/filterByLevelBtn":"2XvuR","./js/filterPanelBtn":"a1Lq8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ijtu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
//Dialogs
var _filterByLevelDialogVue = require("../vue/dialogs/filterByLevelDialog.vue");
var _filterByLevelDialogVueDefault = parcelHelpers.interopDefault(_filterByLevelDialogVue);
var _advancedParamsDialogVue = require("../vue/dialogs/advancedParamsDialog.vue");
var _advancedParamsDialogVueDefault = parcelHelpers.interopDefault(_advancedParamsDialogVue);
//Panels
var _filterPanelVue = require("../vue/panels/filterPanel.vue");
var _filterPanelVueDefault = parcelHelpers.interopDefault(_filterPanelVue);
const { SpinalMountExtention } = require("94748dd2f9c0a8f8");
const { SpinalForgeExtention } = require("3ffb47dc1bd00cf2");
const dialogs = [
    {
        name: "filterByLevelDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _filterByLevelDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "advancedParamsDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _advancedParamsDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);
///////////////////////////////////////////////////////////////////////////
//                     REGISTER PANEL                                    //
///////////////////////////////////////////////////////////////////////////
let panels = [
    {
        name: "filterPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _filterPanelVueDefault.default)),
        panel: {
            title: "Filter By Attribute",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    }
];
for(let index = 0; index < panels.length; index++){
    const element = panels[index];
    const panelExtension = SpinalForgeExtention.createExtention(element);
    SpinalForgeExtention.registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","../vue/dialogs/filterByLevelDialog.vue":"fH7Or","../vue/dialogs/advancedParamsDialog.vue":"dHU1v","../vue/panels/filterPanel.vue":"8jmNI","94748dd2f9c0a8f8":"egTXY","3ffb47dc1bd00cf2":"fYcpE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fH7Or":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("26c7ccf09bf23595");
    if (script.__esModule) script = script.default;
    script.render = require("6864af36955047ac").render;
    script.staticRenderFns = require("6864af36955047ac").staticRenderFns;
    script._scopeId = "data-v-2686b2";
    require("10e1f63ccb426505").default(script);
    script.__scopeId = 'data-v-2686b2';
    script.__file = "filterByLevelDialog.vue";
};
initialize();
exports.default = script;

},{"26c7ccf09bf23595":"hrlJy","6864af36955047ac":"b3PQJ","10e1f63ccb426505":"6BHkS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hrlJy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var scriptExports = {
    name: "filterByLevelDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: ""
        };
    },
    methods: {
        opened () {},
        removed (closed) {
            if (closed) (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectsByPropertiesName(window.spinal.ForgeViewer.viewer.model, [
                {
                    name: "Level",
                    value: this.inputValue
                }
            ]).then((res)=>{
                // console.log(res);
                res = res.map((el)=>el.dbId);
                window.spinal.ForgeViewer.viewer.select(res);
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        isDisabled () {
            return this.inputValue.length === 0 || !new RegExp(/^\d+$/).test(this.inputValue.trim());
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-bim-manager-service":"2m0Kp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2m0Kp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const bimService_1 = require("edfb101c687f070e");
exports.bimObjectManagerService = bimService_1.default;

},{"edfb101c687f070e":"bDCOv"}],"bDCOv":[function(require,module,exports,__globalThis) {
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

},{}],"b3PQJ":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
            _vm._v("Filter By Level")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("Level Number")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    attrs: {
                        "autofocus": ""
                    },
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
                    "disabled": _vm.isDisabled()
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

},{}],"6BHkS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dHU1v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1118968874e9fa3a");
    if (script.__esModule) script = script.default;
    script.render = require("e5c040534531cd36").render;
    script.staticRenderFns = require("e5c040534531cd36").staticRenderFns;
    script._scopeId = "data-v-2bb054";
    script.__cssModules = require("70d35012fc931bf0").default;
    require("909d2489731aded1").default(script);
    script.__scopeId = 'data-v-2bb054';
    script.__file = "advancedParamsDialog.vue";
};
initialize();
exports.default = script;

},{"1118968874e9fa3a":"6cmOi","e5c040534531cd36":"jgPgP","70d35012fc931bf0":"01MXj","909d2489731aded1":"iPAfs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6cmOi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filterAdvancedOptionVue = require("./components/filterAdvancedOption.vue");
var _filterAdvancedOptionVueDefault = parcelHelpers.interopDefault(_filterAdvancedOptionVue);
var _chooseOptionVue = require("./components/chooseOption.vue");
var _chooseOptionVueDefault = parcelHelpers.interopDefault(_chooseOptionVue);
var _infoComponentVue = require("./components/infoComponent.vue");
var _infoComponentVueDefault = parcelHelpers.interopDefault(_infoComponentVue);
var scriptExports = {
    name: 'AdvancedParamsDialog',
    props: [
        'onFinised'
    ],
    components: {
        'advanced-option': (0, _filterAdvancedOptionVueDefault.default),
        'choose-option': (0, _chooseOptionVueDefault.default),
        'info-component': (0, _infoComponentVueDefault.default)
    },
    data () {
        this.callback;
        this.item;
        return {
            showDialog: true,
            //Name
            nameConfig: null,
            nameDelimiter: '/',
            nameRegex: null,
            nameFlag: [],
            //Value
            valueConfig: null,
            valueDelimiter: '/',
            valueFlag: [],
            valueRegex: null
        };
    },
    methods: {
        opened (option) {
            this.item = option.params;
            //Name
            this.nameConfig = option.params.config.name.option;
            this.nameRegex = option.params.config.name.regex;
            this.nameFlag = option.params.config.name.flag;
            //Value
            this.valueConfig = option.params.config.value.option;
            this.valueRegex = option.params.config.value.regex;
            this.valueFlag = option.params.config.value.flag;
        },
        removed (closed) {
            if (closed) {
                //Name
                this.item.config.name.option = this.nameConfig;
                this.item.config.name.regex = this.nameRegex;
                this.item.config.name.flag = this.nameFlag ? this.nameFlag.join('') : undefined;
                //Value
                this.item.config.value.option = this.valueConfig;
                this.item.config.value.regex = this.valueRegex;
                this.item.config.value.flag = this.valueFlag ? this.valueFlag.join('') : undefined;
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === 'function') this.onFinised(closeResult);
        },
        onName (value) {
            this.nameConfig = value;
            if (this.nameConfig === '1' || this.nameConfig === '2') {
                this.nameRegex = undefined;
                this.nameFlag = undefined;
            }
        },
        changeNameRegex (value) {
            this.nameRegex = value;
        },
        changeNameFlag (value) {
            this.nameFlag = value;
        },
        changeNameDelimiter (value) {
            this.nameDelimiter = value;
        },
        onValue (value) {
            this.valueConfig = value;
            if (this.valueConfig === '1' || this.valueConfig === '2') {
                this.valueRegex = undefined;
                this.valueFlag = undefined;
            }
        },
        changeValueRegex (value) {
            this.valueRegex = value;
        },
        changeValueFlag (value) {
            this.valueFlag = value;
        },
        changeValueDelimiter (value) {
            this.valueDelimiter = value;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./components/filterAdvancedOption.vue":"2ChpX","./components/chooseOption.vue":"23Oq0","./components/infoComponent.vue":"2ke4h","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2ChpX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d75cb7a7b042f891");
    if (script.__esModule) script = script.default;
    script.render = require("7af69996153ea103").render;
    script.staticRenderFns = require("7af69996153ea103").staticRenderFns;
    script._scopeId = "data-v-8d70c2";
    require("8973f6783f394ed").default(script);
    script.__scopeId = 'data-v-8d70c2';
    script.__file = "filterAdvancedOption.vue";
};
initialize();
exports.default = script;

},{"d75cb7a7b042f891":"dfdgu","7af69996153ea103":"k9ugs","8973f6783f394ed":"i83jX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dfdgu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flagsJs = require("../flags.js");
var _flagsJsDefault = parcelHelpers.interopDefault(_flagsJs);
var _delimiterJs = require("../delimiter.js");
var _delimiterJsDefault = parcelHelpers.interopDefault(_delimiterJs);
var scriptExports = {
    name: "advancedOption",
    props: {
        regexValue: {
            required: true
        },
        flagsValue: {
            required: true
        },
        delimiterValue: {
            required: true
        }
    },
    data () {
        this.flagsList = (0, _flagsJsDefault.default);
        this.delimiters = (0, _delimiterJsDefault.default);
        return {
            regex: "",
            delimiterV: "/",
            flags: []
        };
    },
    mounted () {
        this.regex = this.regexValue;
        this.flags = [];
        if (typeof this.flagsValue !== "undefined") this.flags = Array.isArray(this.flagsValue) ? this.flagsValue : this.flagsValue.split("");
        this.delimiterV = this.delimiterValue;
    },
    methods: {
        changeDelimiter (delimiter) {
            this.delimiterV = delimiter;
        }
    },
    watch: {
        regex: function(newValue) {
            this.$emit("regex", newValue);
        },
        delimiterV: function(newValue) {
            this.$emit("delimiter", newValue);
        },
        flags: function(newValue) {
            this.$emit("flags", newValue);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../flags.js":"4VSBl","../delimiter.js":"bwJEi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4VSBl":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bwJEi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    "/",
    "~",
    "@",
    ";",
    "%",
    "`"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k9ugs":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-list', [
        _c('md-list-item', [
            _c('md-field', {
                staticClass: "_mdField"
            }, [
                _c('md-menu', [
                    _c('md-button', {
                        staticClass: "md-icon md-prefix"
                    }, [
                        _vm._v(_vm._s(_vm.delimiterV) + "\n        ")
                    ])
                ], 1),
                _vm._v(" "),
                _c('md-input', {
                    attrs: {
                        "palceholder": "Regex"
                    },
                    model: {
                        value: _vm.regex,
                        callback: function($$v) {
                            _vm.regex = $$v;
                        },
                        expression: "regex"
                    }
                }),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-icon md-suffix"
                }, [
                    _vm._v(_vm._s(_vm.delimiterV))
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-list-item', [
            _c('md-field', {
                staticClass: "_mdField"
            }, [
                _c('label', [
                    _vm._v("Flags")
                ]),
                _vm._v(" "),
                _c('md-select', {
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
                    return _c('md-option', {
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
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"i83jX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"23Oq0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5cd2e198d71b0b16");
    if (script.__esModule) script = script.default;
    script.render = require("e0039bea0b0202f0").render;
    script.staticRenderFns = require("e0039bea0b0202f0").staticRenderFns;
    script._scopeId = "data-v-fc5ef6";
    require("7ce7d5223c4b5d81").default(script);
    script.__scopeId = 'data-v-fc5ef6';
    script.__file = "chooseOption.vue";
};
initialize();
exports.default = script;

},{"5cd2e198d71b0b16":"H8pqW","e0039bea0b0202f0":"2iOHM","7ce7d5223c4b5d81":"bg9r1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"H8pqW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "chooseOption",
    props: {
        choosed: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            option: "1"
        };
    },
    mounted () {
        this.option = this.choosed;
    },
    watch: {
        option: function(newValue) {
            this.$emit("change", newValue);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2iOHM":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-list-item', [
            _c('md-radio', {
                attrs: {
                    "value": "1"
                },
                model: {
                    value: _vm.option,
                    callback: function($$v) {
                        _vm.option = $$v;
                    },
                    expression: "option"
                }
            }),
            _vm._v(" "),
            _c('span', {
                staticClass: "md-list-item-text"
            }, [
                _vm._v("Equals")
            ])
        ], 1),
        _vm._v(" "),
        _c('md-list-item', [
            _c('md-radio', {
                attrs: {
                    "value": "2"
                },
                model: {
                    value: _vm.option,
                    callback: function($$v) {
                        _vm.option = $$v;
                    },
                    expression: "option"
                }
            }),
            _vm._v(" "),
            _c('span', {
                staticClass: "md-list-item-text"
            }, [
                _vm._v("Contains")
            ])
        ], 1),
        _vm._v(" "),
        _c('md-list-item', [
            _c('md-radio', {
                attrs: {
                    "value": "3"
                },
                model: {
                    value: _vm.option,
                    callback: function($$v) {
                        _vm.option = $$v;
                    },
                    expression: "option"
                }
            }),
            _vm._v(" "),
            _c('span', {
                staticClass: "md-list-item-text"
            }, [
                _vm._v("Advanced")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bg9r1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2ke4h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b9ffe70b0189924");
    if (script.__esModule) script = script.default;
    script.render = require("4c9ea7d322616b29").render;
    script.staticRenderFns = require("4c9ea7d322616b29").staticRenderFns;
    script._scopeId = "data-v-ded162";
    script.__cssModules = require("aac6726c3a78ce6d").default;
    require("efc6e4c60f8b1e6e").default(script);
    script.__scopeId = 'data-v-ded162';
    script.__file = "infoComponent.vue";
};
initialize();
exports.default = script;

},{"b9ffe70b0189924":"kt4TV","4c9ea7d322616b29":"7pZvO","aac6726c3a78ce6d":"j5fKn","efc6e4c60f8b1e6e":"b82ey","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kt4TV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _info = require("../info");
var _infoDefault = parcelHelpers.interopDefault(_info);
var scriptExports = {
    name: "infoComponent",
    data () {
        this.infos = (0, _infoDefault.default);
        return {};
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../info":"7MbYi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7MbYi":[function(require,module,exports,__globalThis) {
module.exports = [
    {
        id: 1,
        title: "Equals",
        description: "Values must be equal"
    },
    {
        id: 2,
        title: "Contains",
        description: " The property must contain the entered value"
    },
    {
        id: 3,
        title: "Advanced",
        description: "Allows you to enter your own regex. \n Regex allow to identify in a text, subsets respecting a particular pattern"
    }
];

},{}],"7pZvO":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-menu-content', {
        staticStyle: {
            "z-index": "9999 !important"
        }
    }, _vm._l(_vm.infos, function(info, index) {
        return _c('md-menu-item', {
            key: index,
            staticClass: "information"
        }, [
            _c('div', {
                staticClass: "md-list-item-text"
            }, [
                _c('span', {
                    staticClass: "title"
                }, [
                    _vm._v(_vm._s(info.title))
                ]),
                _vm._v(" "),
                _c('span', {
                    staticClass: "description"
                }, [
                    _vm._v(_vm._s(info.description))
                ])
            ])
        ]);
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"j5fKn":[function() {},{}],"b82ey":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jgPgP":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "title"
        }, [
            _c('div', [
                _vm._v(" ADVANCED FILTER ")
            ]),
            _vm._v(" "),
            _c('md-menu', [
                _c('md-button', {
                    staticClass: "md-icon-button",
                    attrs: {
                        "md-menu-trigger": ""
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("info")
                    ])
                ], 1),
                _vm._v(" "),
                _c('info-component')
            ], 1)
        ], 1),
        _vm._v(" "),
        _vm.nameConfig && _vm.valueConfig ? _c('md-dialog-content', {
            staticClass: "_dialogContent md-layout"
        }, [
            _c('md-list', {
                staticClass: "_leftSide md-layout-item md-size-50"
            }, [
                _c('md-subheader', {
                    staticStyle: {
                        "justify-content": "center"
                    }
                }, [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c('choose-option', {
                    attrs: {
                        "choosed": _vm.nameConfig
                    },
                    on: {
                        "change": _vm.onName
                    }
                }),
                _vm._v(" "),
                _vm.nameConfig === '3' ? _c('advanced-option', {
                    attrs: {
                        "regexValue": _vm.nameRegex,
                        "flagsValue": _vm.nameFlag,
                        "delimiterValue": _vm.nameDelimiter
                    }
                }) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c('md-list', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('md-subheader', {
                    staticStyle: {
                        "justify-content": "center"
                    }
                }, [
                    _vm._v("Value")
                ]),
                _vm._v(" "),
                _c('choose-option', {
                    attrs: {
                        "choosed": _vm.valueConfig
                    },
                    on: {
                        "change": _vm.onValue
                    }
                }),
                _vm._v(" "),
                _vm.valueConfig === '3' ? _c('advanced-option', {
                    attrs: {
                        "regexValue": _vm.valueRegex,
                        "flagsValue": _vm.valueFlag,
                        "delimiterValue": _vm.valueDelimiter
                    },
                    on: {
                        "regex": _vm.changeValueRegex,
                        "flags": _vm.changeValueFlag,
                        "delimiter": _vm.changeValueDelimiter
                    }
                }) : _vm._e()
            ], 1)
        ], 1) : _vm._e(),
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
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"01MXj":[function() {},{}],"iPAfs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8jmNI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("eaf2e8a7cc892f78");
    if (script.__esModule) script = script.default;
    script.render = require("75beddc24e0ae117").render;
    script.staticRenderFns = require("75beddc24e0ae117").staticRenderFns;
    script._scopeId = "data-v-09a3d6";
    script.__cssModules = require("c1e5b07ba08c784c").default;
    require("c2119f183ddf7ad4").default(script);
    script.__scopeId = 'data-v-09a3d6';
    script.__file = "filterPanel.vue";
};
initialize();
exports.default = script;

},{"eaf2e8a7cc892f78":"fiAr5","75beddc24e0ae117":"6wcZS","c1e5b07ba08c784c":"gIN3x","c2119f183ddf7ad4":"eVdr6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fiAr5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _filterFormVue = require("./components/filterForm.vue");
var _filterFormVueDefault = parcelHelpers.interopDefault(_filterFormVue);
var _referentialSelectionVue = require("./components/referentialSelection.vue");
var _referentialSelectionVueDefault = parcelHelpers.interopDefault(_referentialSelectionVue);
var _launchSearchVue = require("./components/launchSearch.vue");
var _launchSearchVueDefault = parcelHelpers.interopDefault(_launchSearchVue);
const PROPERTY_MODEL = {
    id: 1,
    name: "",
    value: "",
    required: false,
    config: {
        name: {
            option: "1",
            regex: undefined,
            flag: []
        },
        value: {
            option: "1",
            regex: undefined,
            flag: []
        }
    }
};
var scriptExports = {
    name: "filterPanel",
    components: {
        "filter-form-component": (0, _filterFormVueDefault.default),
        "referential-selection": (0, _referentialSelectionVueDefault.default),
        "launch-search-component": (0, _launchSearchVueDefault.default)
    },
    data () {
        return {
            data: [
                Object.assign({}, PROPERTY_MODEL)
            ],
            loaded: false,
            activeStep: "",
            config: {
                useAllDbIds: true,
                referential: []
            }
        };
    },
    methods: {
        opened () {
            this.activeStep = "ref";
        },
        addProperty () {
            let obj = {
                id: 1,
                name: "",
                value: "",
                required: false,
                config: {
                    name: {
                        option: "1",
                        regex: undefined,
                        flag: []
                    },
                    value: {
                        option: "1",
                        regex: undefined,
                        flag: []
                    }
                }
            };
            obj.id = this.data[this.data.length - 1].id + 1;
            this.data.push(obj);
        },
        reset () {
            this.data = [
                PROPERTY_MODEL
            ];
        },
        deleteItem (item) {
            this.data = this.data.filter((el)=>el.id !== item.id);
        },
        advanced (item) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("advancedParamsDialog", {
                params: item
            });
        },
        getBimObjectNotValid (model, bimValidated) {
            let found = this.config.referential.find((el)=>{
                return el.model.id === model.id;
            });
            if (typeof found !== "undefined") return found.selection.filter((el)=>{
                return bimValidated.indexOf(el) === -1;
            });
            return [];
        },
        checkOnSpinalAttributes (activated, regExp) {
            let leaftBims = this.config.referential.map((select)=>{
                return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(select.model, select.selection);
            });
            if (!activated) return Promise.resolve(leaftBims);
            let promises = (0, _utilitiesDefault.default).getValidatedBimOnSpinalAttribut(leaftBims, regExp);
            return Promise.all(promises).then((res)=>{
                return res.map((el)=>{
                    el["selection"] = this.getBimObjectNotValid(el.model, el.valid);
                    return el;
                });
            });
        },
        checkOnBimAttributes (activated, bimValidated, regExp) {
            if (!activated) return Promise.resolve(bimValidated);
            return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectsValidated(this.config.referential, regExp).then((res)=>{
                return res.map((el)=>{
                    let found = bimValidated.find((el2)=>{
                        return el.model.id === el2.model.id;
                    });
                    return {
                        model: el.model,
                        ids: typeof found !== "undefined" ? [
                            ...el.properties.map((el2)=>el2.dbId),
                            ...found.ids
                        ] : el.properties.map((el2)=>el2.dbId)
                    };
                });
            });
        },
        filter (params) {
            let regExp = params.regex.filter((el)=>{
                return typeof el.nameRegex !== "undefined";
            });
            if (regExp.length > 0) {
                this.loaded = true;
                // // let bimValidated = this.config.referential.map(el => {
                // //   return {
                // //     model: el.model,
                // //     ids: []
                // //   };
                // // });
                this.checkOnSpinalAttributes(params.spinalAttributes, regExp).then((values)=>{
                    let bimValidated = values.map((el)=>{
                        return {
                            model: el.model,
                            ids: el.valid ? [
                                ...el.valid
                            ] : []
                        };
                    });
                    this.checkOnBimAttributes(params.bimAttributes, bimValidated, regExp).then((res)=>{
                        try {
                            window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(res);
                        } catch (err) {
                            let ids = [];
                            res.forEach((el)=>{
                                ids = [
                                    ...el.ids
                                ];
                            });
                            window.spinal.ForgeViewer.viewer.select(ids);
                        }
                        this.loaded = false;
                    }).catch((err)=>{
                        console.error(err);
                        this.loaded = false;
                    });
                }).catch((err)=>{
                    console.error(err);
                    this.loaded = false;
                });
            // this.loaded = true;
            /*
        bimObjectManagerService
          .getBimObjectsValidated(this.config.referential, regExp)
          .then(res => {
            res = res.map(el => {
              return {
                model: el.model,
                ids: el.properties.map(el2 => el2.dbId)
              };
            });

            try {
              window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(
                res
              );
            } catch (err) {
              let ids = [];
              res.forEach(el => {
                ids = [...el.ids];
              });

              window.spinal.ForgeViewer.viewer.select(ids);
            }

            this.loaded = false;
          });



      */ } else alert("Please add a valid filter");
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/utilities":"cJXeJ","spinal-env-viewer-bim-manager-service":"2m0Kp","spinal-env-viewer-panel-manager-service":"egTXY","./components/filterForm.vue":"82iRM","./components/referentialSelection.vue":"3xX9d","./components/launchSearch.vue":"28OWs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cJXeJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
const utilities = {
    getValidatedBimOnSpinalAttribut (argModel, argRegex) {
        return argModel.map(async (element)=>{
            return {
                model: element.model,
                valid: (await Promise.all(element.selection.map((dbId)=>{
                    return this._isValid(dbId, argRegex).then((isValid)=>{
                        if (isValid) return dbId;
                        return;
                    });
                }))).filter((el)=>typeof el !== "undefined")
            };
        });
    },
    _isValid (dbId, argRegex) {
        return (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbId).then((bimNode)=>{
            if (typeof bimNode === "undefined") return false;
            return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAllAttributes(bimNode).then((res)=>{
                res = res.map((el)=>{
                    return {
                        label: el.label.get().trim(),
                        value: el.value.get().trim()
                    };
                });
                return this._execRegex(res, argRegex);
            });
        });
    },
    _execRegex (el, argRegex) {
        for(let i = 0; i < argRegex.length; i++){
            let nameRegex = argRegex[i].nameRegex;
            let valueRegex = argRegex[i].valueRegex;
            let found = el.find((res)=>{
                if (typeof valueRegex === "undefined") return nameRegex.test(res.label);
                return nameRegex.test(res.label) && valueRegex.test(res.value);
            });
            if (typeof found === "undefined") return false;
        }
        return true;
    }
};
exports.default = utilities;

},{"spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-plugin-bimobjectservice":"19m0a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"19m0a":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let createGraph = (()=>{
    var _ref = _asyncToGenerator(function*() {
        const forgeFile = yield window.spinal.spinalSystem.getModel();
        if (!forgeFile.hasOwnProperty("graph")) forgeFile.add_attr({
            graph: new _spinalModelGraph.SpinalGraph()
        });
        return forgeFile.graph;
    });
    return function createGraph() {
        return _ref.apply(this, arguments);
    };
})();
let createContext = (()=>{
    var _ref2 = _asyncToGenerator(function*() {
        const graph = yield this.getGraph();
        let context = yield graph.getContext(BIM_OBJECT_CONTEXT_TYPE);
        if (context === undefined) {
            context = new _spinalModelGraph.SpinalContext(BIM_OBJECT_CONTEXT_TYPE);
            yield graph.addContext(context);
        }
        return context;
    });
    return function createContext() {
        return _ref2.apply(this, arguments);
    };
})();
var _spinalModelGraph = require("8f95959f039a5af0");
var _spinalModelsBimobject = require("bef1fdfaa932d2b5");
var _spinalModelsBimobject2 = _interopRequireDefault(_spinalModelsBimobject);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) resolve(value);
                else return Promise.resolve(value).then(function(value) {
                    step("next", value);
                }, function(err) {
                    step("throw", err);
                });
            }
            return step("next");
        });
    };
}
const BIM_OBJECT_CONTEXT_TYPE = "BIMObjectContext";
const BIM_OBJECT_NODE_TYPE = "BIMObject";
const BIM_OBJECT_RELATION_NAME = "hasBIMObject";
const REFERENCE_OBJECT_RELATION_NAME = "hasReferenceObject";
const BIM_OBJECT_RELATION_TYPE = _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE;
const bimObjectService = {
    graph: null,
    context: null,
    getGraph () {
        if (this.graph === null) this.graph = createGraph();
        return this.graph;
    },
    getContext () {
        if (this.context === null) this.context = createContext.call(this);
        return this.context;
    },
    createBIMObject (dbid, name) {
        var _this = this;
        return _asyncToGenerator(function*() {
            let BIMObjNode = yield _this.getBIMObject(dbid);
            if (BIMObjNode === undefined) {
                const BIMObject = new _spinalModelsBimobject2.default(dbid, name);
                BIMObjNode = new _spinalModelGraph.SpinalNode(name, BIM_OBJECT_NODE_TYPE, BIMObject);
                BIMObjNode.info.add_attr({
                    dbid: dbid
                });
                const BIMObjectContext = yield _this.getContext();
                yield BIMObjectContext.addChildInContext(BIMObjNode, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, BIMObjectContext);
            }
            return BIMObjNode;
        })();
    },
    getBIMObject (dbid) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            const BIMObjectContext = yield _this2.getContext(BIM_OBJECT_CONTEXT_TYPE);
            const BIMObjectArray = yield BIMObjectContext.getChildren([
                BIM_OBJECT_RELATION_NAME
            ]);
            for (let BIMObject of BIMObjectArray){
                if (BIMObject.info.dbid.get() === dbid) return BIMObject;
            }
        })();
    },
    addBIMObject (context, parent, dbId, name) {
        var _this3 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this3.getBIMObject(dbId);
                if (node === undefined) node = yield _this3.createBIMObject(dbId, name);
            }
            yield parent.addChildInContext(node, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, context);
            return node;
        })();
    },
    removeBIMObject (parent, child) {
        return parent.removeChild(child, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    },
    deleteBIMObject (dbId) {
        var _this4 = this;
        return _asyncToGenerator(function*() {
            const context = yield _this4.getContext();
            const children = yield context.getChildrenInContext();
            const child = children.find(function(node) {
                return node.info.dbId === dbId;
            });
            if (child === undefined) throw Error("The dbId has no BIM object");
            return child.removeFromGraph();
        })();
    },
    addReferenceObject (parent, dbId, name) {
        var _this5 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this5.getBIMObject(dbId);
                if (node === undefined) node = yield _this5.createBIMObject(dbId, name);
            }
            yield parent.addChild(node, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
            return node;
        })();
    },
    removeReferenceObject (parent, child) {
        return parent.removeChild(child, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    }
};
bimObjectService.constants = {
    BIM_OBJECT_CONTEXT_TYPE,
    BIM_OBJECT_NODE_TYPE,
    BIM_OBJECT_RELATION_NAME,
    REFERENCE_OBJECT_RELATION_NAME,
    BIM_OBJECT_RELATION_TYPE
};
exports.default = bimObjectService;

},{"8f95959f039a5af0":"b87gp","bef1fdfaa932d2b5":"fDqnh"}],"fDqnh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinalCore = require("e30868c801f59ada");
const globalType = typeof window === "undefined" ? global : window;
class SpinalBIMObject extends globalType.Model {
    constructor(_id, _name){
        super();
        if (FileSystem._sig_server) this.add_attr({
            id: _id,
            name: _name
        });
    }
}
exports.default = SpinalBIMObject;
spinalCore.register_models([
    SpinalBIMObject
]);

},{"e30868c801f59ada":"cQPh9"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"82iRM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("28bc20f4b8be3989");
    if (script.__esModule) script = script.default;
    script.render = require("37d4dd3bd2e5d857").render;
    script.staticRenderFns = require("37d4dd3bd2e5d857").staticRenderFns;
    script._scopeId = "data-v-a2b908";
    script.__cssModules = require("7c3c84b059120c3b").default;
    require("65d24e5d10c9fc77").default(script);
    script.__scopeId = 'data-v-a2b908';
    script.__file = "filterForm.vue";
};
initialize();
exports.default = script;

},{"28bc20f4b8be3989":"AP9Be","37d4dd3bd2e5d857":"kYIyq","7c3c84b059120c3b":"ay2Xy","65d24e5d10c9fc77":"h76Te","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"AP9Be":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "filterFormComponent",
    props: {
        data: {
            type: Array,
            required: true
        },
        loaded: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        addProperty () {
            this.$emit("add");
        },
        reset () {
            this.$emit("reset");
        },
        deleteItem (item) {
            this.$emit("delete", item);
        },
        filter () {
            this.$emit("validate");
        },
        advanced (item) {
            this.$emit("config", item);
        },
        isDisabled (item, name) {
            let disabled = item.config[name].option == 3;
            item[name] = disabled ? "" : item[name];
            return disabled;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kYIyq":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_container"
    }, [
        _c('div', {
            staticClass: "header"
        }, [
            _c('md-button', {
                staticClass: "_btn md-dense md-primary",
                on: {
                    "click": _vm.addProperty
                }
            }, [
                _c('md-icon', [
                    _vm._v("add")
                ]),
                _vm._v("\n      ADD PROPERTY\n    ")
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "_btn md-dense md-primary",
                on: {
                    "click": _vm.reset
                }
            }, [
                _c('md-icon', [
                    _vm._v("restore")
                ]),
                _vm._v("\n      RESET\n    ")
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-content', {
            staticClass: "_content md-scrollbar"
        }, _vm._l(_vm.data, function(item) {
            return _c('div', {
                key: item.id,
                staticClass: "_items"
            }, [
                _c('md-field', {
                    staticClass: "_mdField"
                }, [
                    _c('label', [
                        _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        attrs: {
                            "palceholder": "Name",
                            "disabled": _vm.isDisabled(item, 'name')
                        },
                        model: {
                            value: item.name,
                            callback: function($$v) {
                                _vm.$set(item, "name", $$v);
                            },
                            expression: "item.name"
                        }
                    }),
                    _vm._v(" "),
                    _vm.isDisabled(item, 'name') ? _c('span', {
                        staticClass: "md-helper-text"
                    }, [
                        _vm._v("Personalized")
                    ]) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c('md-field', {
                    staticClass: "_mdField"
                }, [
                    _c('label', [
                        _vm._v("Value")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        attrs: {
                            "palceholder": "Value",
                            "disabled": _vm.isDisabled(item, 'value')
                        },
                        model: {
                            value: item.value,
                            callback: function($$v) {
                                _vm.$set(item, "value", $$v);
                            },
                            expression: "item.value"
                        }
                    }),
                    _vm._v(" "),
                    _vm.isDisabled(item, 'value') ? _c('span', {
                        staticClass: "md-helper-text"
                    }, [
                        _vm._v("Personalized")
                    ]) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "_mdField iconButton"
                }, [
                    _c('md-button', {
                        staticClass: "md-icon-button",
                        attrs: {
                            "title": "config"
                        },
                        on: {
                            "click": function($event) {
                                return _vm.advanced(item);
                            }
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "_icon"
                        }, [
                            _vm._v("tune")
                        ])
                    ], 1),
                    _vm._v(" "),
                    item.id !== 1 ? _c('md-button', {
                        staticClass: "md-icon-button",
                        attrs: {
                            "title": "remove"
                        },
                        on: {
                            "click": function($event) {
                                return _vm.deleteItem(item);
                            }
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "_icon"
                        }, [
                            _vm._v("clear")
                        ])
                    ], 1) : _vm._e()
                ], 1)
            ], 1);
        }), 0)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ay2Xy":[function() {},{}],"h76Te":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3xX9d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fd43a6309d951d47");
    if (script.__esModule) script = script.default;
    script.render = require("e28b40a6ed61ea70").render;
    script.staticRenderFns = require("e28b40a6ed61ea70").staticRenderFns;
    script._scopeId = "data-v-2b88ef";
    script.__cssModules = require("c4d8f12131d3e2c0").default;
    require("3370c3d2f66288a1").default(script);
    script.__scopeId = 'data-v-2b88ef';
    script.__file = "referentialSelection.vue";
};
initialize();
exports.default = script;

},{"fd43a6309d951d47":"hcByw","e28b40a6ed61ea70":"bmPm6","c4d8f12131d3e2c0":"5mpAu","3370c3d2f66288a1":"8GQb5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hcByw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _tableComponentVue = require("./tableComponent.vue");
var _tableComponentVueDefault = parcelHelpers.interopDefault(_tableComponentVue);
// import { getAllLeafDbIds, getLeafDbIds } from "../js/utilitiesDbIds";
var scriptExports = {
    name: "referentialSelection",
    components: {
        "table-component": (0, _tableComponentVueDefault.default)
    },
    props: {
        // update: {
        //   type: String,
        //   required: true
        // },
        config: {
            type: Object,
            required: true
        }
    },
    data () {
        this.viewer = window.spinal.ForgeViewer.viewer;
        this.allDbIds = (()=>{
            try {
                return this.viewer.getVisibleModels().map((el)=>{
                    return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(el);
                });
            } catch (error) {
                return [
                    (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(this.viewer.model)
                ];
            }
        })();
        return {};
    },
    //   watch: {
    //     update: {
    //       immediate: true,
    //       handler() {
    //         if (this.update != "opened") {
    //           return;
    //         }
    //         if (this.config.useAllDbIds) {
    //           this.config.referential = this.allDbIds.slice();
    //         }
    //       }
    //     }
    //   },
    mounted () {
        this.config.referential = this.allDbIds;
    },
    methods: {
        /**
     * Updates the referential when the mode changes.
     */ changeMode (newValue) {
            if (!newValue) this.clearReferential();
            else this.config.referential = this.allDbIds;
        //   this.$emit("configChanged");
        },
        /**
     * Adds the current selection to the referential. Discards all non-leaf dbIds.
     */ addSelection () {
            if (this.config.useAllDbIds) this.config.referential = [];
            const aggregateSelection = this.viewer.getAggregateSelection();
            let referentialCopy = Object.assign([], this.config.referential);
            for (let select of aggregateSelection){
                // let leafs = bimObjectManagerService.getLeafDbIds(
                //   select.model,
                //   select.selection
                // );
                let found = referentialCopy.find((el)=>el.model.id === select.model.id);
                if (found) found.selection.push(...select.selection);
                else referentialCopy.push(select);
            }
            this.config.referential = referentialCopy;
        //   this.config.referential = [...new Set(this.config.referential)];
        //   this.$emit("configChanged");
        },
        /**
     * Empties the referential.
     */ clearReferential () {
            this.config.referential = [];
        //   this.$emit("configChanged");
        },
        /**
     * Selects all the dbIds in the referential.
     */ showReferential () {
            this.config.referential.forEach((el)=>{
                this.viewer.impl.selector.setSelection(el.selection, el.model);
            });
        },
        getObjectsSelectedLength () {
            let length = 0;
            this.config.referential.forEach((el)=>{
                length += el.selection.length;
            });
            return length;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-bim-manager-service":"2m0Kp","./tableComponent.vue":"9iWHx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9iWHx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f0ce75e140ef4547");
    if (script.__esModule) script = script.default;
    script.render = require("456cd360dce4d3f9").render;
    script.staticRenderFns = require("456cd360dce4d3f9").staticRenderFns;
    script._scopeId = "data-v-7f3e61";
    script.__cssModules = require("6dacd8f470033c3a").default;
    require("fa7341c9c1074171").default(script);
    script.__scopeId = 'data-v-7f3e61';
    script.__file = "tableComponent.vue";
};
initialize();
exports.default = script;

},{"f0ce75e140ef4547":"8ZoAa","456cd360dce4d3f9":"knq1S","6dacd8f470033c3a":"iYIjo","fa7341c9c1074171":"kCtp0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8ZoAa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "tableComponent",
    props: [
        "bimSelected"
    ],
    data () {
        return {
            data: []
        };
    },
    methods: {
        getObjectsSelectedInfo () {
            return this.bimSelected.map((el)=>{
                const { model, selection } = el;
                return new Promise((resolve)=>{
                    model.getBulkProperties(selection, {
                        propFilter: [
                            "name"
                        ]
                    }, (dbIds)=>{
                        return resolve(dbIds);
                    });
                });
            });
        },
        seeItem (dbId) {
            let bimIds = this.bimSelected.filter((el)=>{
                return el.selection.indexOf(dbId) !== -1;
            });
            bimIds.forEach((element)=>{
                window.spinal.ForgeViewer.viewer.impl.selector.setSelection([
                    dbId
                ], element.model);
            });
        },
        deleteItem (dbId) {
            this.data = this.data.filter((el)=>el.dbId !== dbId);
            for(let i = 0; i < this.bimSelected.length; i++){
                let index = this.bimSelected[i].selection.indexOf(dbId);
                if (index !== -1) {
                    this.bimSelected[i].selection.splice(index, 1);
                    console.log(this.bimSelected);
                }
            }
        }
    },
    watch: {
        bimSelected () {
            console.log("update");
            if (this.bimSelected) {
                let values = this.getObjectsSelectedInfo();
                Promise.all(values).then((dbIds)=>{
                    dbIds = dbIds.flat();
                    this.data = dbIds;
                });
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"knq1S":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-table', {
        staticClass: "_tableComponent md-scrollbar"
    }, [
        _c('md-table-row', [
            _c('md-table-head', {
                attrs: {
                    "md-numeric": ""
                }
            }, [
                _vm._v("dbId")
            ]),
            _vm._v(" "),
            _c('md-table-head', [
                _vm._v("Name")
            ]),
            _vm._v(" "),
            _c('md-table-head'),
            _vm._v(" "),
            _c('md-table-head')
        ], 1),
        _vm._v(" "),
        _vm._l(_vm.data, function(bim, index) {
            return _c('md-table-row', {
                key: index
            }, [
                _c('md-table-cell', {
                    attrs: {
                        "md-numeric": ""
                    }
                }, [
                    _vm._v(_vm._s(bim.dbId))
                ]),
                _vm._v(" "),
                _c('md-table-cell', [
                    _vm._v(_vm._s(bim.name))
                ]),
                _vm._v(" "),
                _c('md-table-cell', [
                    _c('md-button', {
                        staticClass: "md-icon-button md-dense",
                        on: {
                            "click": function($event) {
                                return _vm.seeItem(bim.dbId);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("visibility")
                        ])
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c('md-table-cell', [
                    _c('md-button', {
                        staticClass: "md-icon-button md-dense",
                        on: {
                            "click": function($event) {
                                return _vm.deleteItem(bim.dbId);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("clear")
                        ])
                    ], 1)
                ], 1)
            ], 1);
        })
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iYIjo":[function() {},{}],"kCtp0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bmPm6":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-checkbox', {
            staticClass: "md-primary",
            on: {
                "change": _vm.changeMode
            },
            model: {
                value: _vm.config.useAllDbIds,
                callback: function($$v) {
                    _vm.$set(_vm.config, "useAllDbIds", $$v);
                },
                expression: "config.useAllDbIds"
            }
        }, [
            _vm._v("\n    Use whole digital twin\n  ")
        ]),
        _vm._v(" "),
        !_vm.config.useAllDbIds ? _c('div', [
            _c('md-button', {
                on: {
                    "click": _vm.addSelection
                }
            }, [
                _c('md-icon', [
                    _vm._v("add")
                ]),
                _vm._v(" "),
                _c('md-tooltip', {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Add selection to referential")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                on: {
                    "click": _vm.clearReferential
                }
            }, [
                _c('md-icon', [
                    _vm._v("clear")
                ]),
                _vm._v(" "),
                _c('md-tooltip', {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Clear referential")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                on: {
                    "click": _vm.showReferential
                }
            }, [
                _c('md-icon', [
                    _vm._v("visibility")
                ]),
                _vm._v(" "),
                _c('md-tooltip', {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Show referential")
                ])
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "historySelected"
            }, [
                _c('table-component', {
                    attrs: {
                        "bimSelected": _vm.config.referential
                    }
                })
            ], 1)
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5mpAu":[function() {},{}],"8GQb5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"28OWs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fade413dfb2e8934");
    if (script.__esModule) script = script.default;
    script.render = require("1800ba2c9e9b6efd").render;
    script.staticRenderFns = require("1800ba2c9e9b6efd").staticRenderFns;
    script._scopeId = "data-v-e52541";
    script.__cssModules = require("d61568ac821ceb62").default;
    require("b7f68a5e58524e14").default(script);
    script.__scopeId = 'data-v-e52541';
    script.__file = "launchSearch.vue";
};
initialize();
exports.default = script;

},{"fade413dfb2e8934":"bKphU","1800ba2c9e9b6efd":"aCpgJ","d61568ac821ceb62":"33MFm","b7f68a5e58524e14":"i9lmp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bKphU":[function(require,module,exports,__globalThis) {
// import flags from "../../dialogs/flags";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "launchSearchComponent",
    props: {
        data: {
            type: Array,
            require: true
        }
    },
    data () {
        return {
            searchOnBim: true,
            searchOnSpinalAttributes: true
        };
    },
    methods: {
        filter () {
            let regex = this.data.map((item)=>{
                return {
                    nameRegex: this.getRegex(item.name, item.config.name.option, item.config.name.flag, item.config.name.regex),
                    valueRegex: this.getRegex(item.value, item.config.value.option, item.config.value.flag, item.config.value.regex)
                };
            });
            if (this.searchOnBim || this.searchOnSpinalAttributes) this.$emit("filter", {
                regex: regex,
                bimAttributes: this.searchOnBim,
                spinalAttributes: this.searchOnSpinalAttributes
            });
            else alert("Sorry, you must select at least one element !!");
        },
        getRegex (value, option, flag, argRegex) {
            let regex;
            if (option === "3" || value && value.trim().length > 0) switch(option){
                case "1":
                    // regex = `/^${value.trim()}$/i`;
                    regex = new RegExp(`^${RegExp.escape(value.trim())}$`, "i");
                    break;
                case "2":
                    // regex = `/${value.trim()}/i`;
                    regex = new RegExp(`${RegExp.escape(value.trim())}`, "i");
                    break;
                case "3":
                    // if (argRegex && flag) {
                    //   regex = new RegExp(argRegex, flag);
                    // } else if (argRegex && typeof flag === "undefined") {
                    //   regex = new RegExp(argRegex);
                    // }
                    regex = new RegExp(argRegex, flag);
                    break;
            }
            return regex;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aCpgJ":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_container"
    }, [
        _c('div', {
            staticClass: "md-layout"
        }, [
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('md-checkbox', {
                    staticClass: "md-primary",
                    model: {
                        value: _vm.searchOnBim,
                        callback: function($$v) {
                            _vm.searchOnBim = $$v;
                        },
                        expression: "searchOnBim"
                    }
                }, [
                    _vm._v("Search on Forge Attributes")
                ])
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('md-checkbox', {
                    staticClass: "md-primary",
                    model: {
                        value: _vm.searchOnSpinalAttributes,
                        callback: function($$v) {
                            _vm.searchOnSpinalAttributes = $$v;
                        },
                        expression: "searchOnSpinalAttributes"
                    }
                }, [
                    _vm._v("Search on spinal Attributes\n      ")
                ])
            ], 1)
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "launchBtn md-layout"
        }, [
            _c('md-button', {
                staticClass: "_btn md-layout-item md-size-100 md-dense md-primary",
                on: {
                    "click": _vm.filter
                }
            }, [
                _c('md-icon', [
                    _vm._v("check")
                ]),
                _vm._v("\n      SEARCH\n    ")
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"33MFm":[function() {},{}],"i9lmp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6wcZS":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticStyle: {
            "height": "100%"
        }
    }, [
        !_vm.loaded ? _c('md-steppers', {
            staticStyle: {
                "width": "100%",
                "height": "100%",
                "overflow": "hidden"
            },
            attrs: {
                "id": "steppers",
                "md-vertical": "",
                "md-active-step": _vm.activeStep
            },
            on: {
                "update:mdActiveStep": function($event) {
                    _vm.activeStep = $event;
                },
                "update:md-active-step": function($event) {
                    _vm.activeStep = $event;
                }
            }
        }, [
            _c('md-step', {
                attrs: {
                    "id": "ref",
                    "md-label": "Choose referential"
                }
            }, [
                _c('referential-selection', {
                    attrs: {
                        "config": _vm.config
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": "layout",
                    "md-label": "add proprieties"
                }
            }, [
                _c('filter-form-component', {
                    attrs: {
                        "data": _vm.data,
                        "loaded": _vm.loaded
                    },
                    on: {
                        "add": _vm.addProperty,
                        "reset": _vm.reset,
                        "delete": _vm.deleteItem,
                        "config": _vm.advanced
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": "launch",
                    "md-label": "Launch the Search"
                }
            }, [
                _c('launch-search-component', {
                    attrs: {
                        "data": _vm.data
                    },
                    on: {
                        "filter": _vm.filter
                    }
                })
            ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.loaded ? _c('div', {
            staticClass: "isLoaded"
        }, [
            _c('md-progress-spinner', {
                staticClass: "spiner",
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

},{}],"gIN3x":[function() {},{}],"eVdr6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{"bf7edd8450503e22":"egTXY","64bd1569b4ded066":"8qsfD"}],"8qsfD":[function(require,module,exports,__globalThis) {
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

},{}],"1ZCYi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(params, listButton = []) {
        const ViewerToolbarButtonManager = class {
            constructor(viewer, options){
                this.viewer = viewer;
                window.Autodesk.Viewing.Extension.call(this, viewer, options);
            }
            load() {
                if (this.viewer.toolbar) // Toolbar is already available, create the UI
                this.createUI();
                else {
                    // Toolbar hasn't been created yet, wait until we get notification of its creation
                    this.onToolbarCreatedBinded = this.onToolbarCreated.bind(this);
                    this.viewer.addEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded);
                }
                return true;
            }
            onToolbarCreated() {
                this.viewer.removeEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded);
                this.onToolbarCreatedBinded = null;
                this.createUI();
            }
            createUI() {
                let comboButton = new window.Autodesk.Viewing.UI.ComboButton();
                // var viewer = this.viewer;
                // Button 1
                // var button = new window.Autodesk.Viewing.UI.Button(params.name);
                // button.onClick = () => {
                //   callback();
                // };
                var icon = comboButton.container.firstChild;
                icon.className = "adsk-button-icon md-icon md-icon-font md-theme-default";
                icon.innerHTML = params.icon;
                if (typeof params.label !== "undefined") comboButton.setToolTip(params.label);
                this.subToolbar = this.viewer.toolbar.getControl(params.subToolbarName);
                listButton.forEach((buttonClass)=>{
                    comboButton.addControl(buttonClass);
                });
                if (!this.subToolbar) {
                    this.subToolbar = new window.Autodesk.Viewing.UI.ControlGroup(params.subToolbarName);
                    this.viewer.toolbar.addControl(this.subToolbar);
                }
                this.subToolbar.addControl(comboButton);
            }
            unload() {
                this.viewer.toolbar.removeControl(this.subToolbar);
                return true;
            }
        };
        return ViewerToolbarButtonManager;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2XvuR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _createBtn = require("./createBtn");
var _createBtnDefault = parcelHelpers.interopDefault(_createBtn);
exports.default = function() {
    return (0, _createBtnDefault.default)("Filter By Level", "location_city", ()=>{
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("filterByLevelDialog", {});
    });
}();

},{"spinal-env-viewer-panel-manager-service":"egTXY","./createBtn":"eMn9N","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eMn9N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createButton);
function createButton(buttonName, buttonIcon, buttonAction) {
    let button = new window.Autodesk.Viewing.UI.Button(buttonName);
    button.setToolTip(buttonName);
    button.onClick = ()=>{
        typeof buttonAction === "function" ? buttonAction() : console.log("");
    };
    var icon = button.container.firstChild;
    icon.className = "adsk-button-icon md-icon md-icon-font md-theme-default";
    icon.innerHTML = buttonIcon;
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a1Lq8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _createBtn = require("./createBtn");
var _createBtnDefault = parcelHelpers.interopDefault(_createBtn);
exports.default = function() {
    return (0, _createBtnDefault.default)("Filter Panel", "filter_list", ()=>{
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("filterPanel", {});
    });
}();

},{"spinal-env-viewer-panel-manager-service":"egTXY","./createBtn":"eMn9N","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-filter.e88e9bc7.js.map
