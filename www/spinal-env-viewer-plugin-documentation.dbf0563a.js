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
})({"PVL1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1078346cceaeb85d");
    if (script.__esModule) script = script.default;
    script.render = require("709d18c81ae5c09").render;
    script.staticRenderFns = require("709d18c81ae5c09").staticRenderFns;
    script._scopeId = "data-v-f2b900";
    script.__cssModules = require("3b93af295388c716").default;
    require("e27a588620ffe2fa").default(script);
    script.__scopeId = "data-v-f2b900";
    script.__file = "messageComponent.vue";
};
initialize();
exports.default = script;

},{"1078346cceaeb85d":"gUS4e","709d18c81ae5c09":"aWwdg","3b93af295388c716":"4GAZ7","e27a588620ffe2fa":"bQYWw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUS4e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelsDocumentation = require("spinal-models-documentation");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _messageVue = require("./message.vue");
var _messageVueDefault = parcelHelpers.interopDefault(_messageVue);
var _attachmentVue = require("./attachment.vue");
var _attachmentVueDefault = parcelHelpers.interopDefault(_attachmentVue);
var scriptExports = {
    name: "messageComponent",
    props: {
        nodeInfo: {},
        noteContextSelected: {
            default: ()=>({})
        },
        noteCategorySelected: {
            default: ()=>({})
        },
        noteGroupSelected: {
            default: ()=>({})
        }
    },
    components: {
        "message-component": (0, _messageVueDefault.default),
        "attachment-component": (0, _attachmentVueDefault.default)
    },
    data () {
        this.userConnected = {
            username: window.spinal.spinalSystem.getUser().username,
            userId: FileSystem._user_id
        };
        return {
            messages: {
                messageUser: "",
                pj: []
            },
            // messageUser: "",
            messageUserEdit: "",
            notesDisplayList: [],
            editNodePopup: false,
            selectedNote: undefined,
            scrollToEnd: false
        };
    },
    methods: {
        async updateNotesList () {
            this.notesDisplayList = [];
            if (this.nodeInfo.selectedNode) {
                let notes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getNotes(this.nodeInfo.selectedNode);
                let i = 0;
                for (let note of notes){
                    let obj = {
                        id: i,
                        username: note.element.username ? note.element.username.get() : "unknow",
                        message: note.element.message.get(),
                        date: this.toDate(note.element.date.get()),
                        type: note.element.type ? note.element.type.get() : undefined,
                        file: note.element.file,
                        selectedNode: note.selectedNode,
                        element: note.element,
                        viewPoint: note.element.viewPoint
                    };
                    this.notesDisplayList.push(obj);
                    i++;
                }
            }
        },
        toDate: function(date) {
            return (0, _momentDefault.default)(date).format("MMMM Do YYYY, h:mm:ss a");
        },
        async addFilesNote () {
            if (this.messages.pj.length === 0) return;
            await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addFileAsNote(this.nodeInfo.selectedNode, this.messages.pj, this.userConnected, this.noteContextSelected.id, this.noteGroupSelected.id);
        },
        _sendNote (node, message, type, path) {
            return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addNote(node, this.userConnected, message, type, path, this.noteContextSelected.id, this.noteGroupSelected.id);
        },
        async addNote () {
            if (typeof this.nodeInfo.selectedNode === "undefined") {
                this.nodeInfo.selectedNode = await this._createBimObjectNode(this.nodeInfo.model, this.nodeInfo.dbid);
                this.resetBind();
                this.updatedd();
            }
            await this.addFilesNote();
            this.messages.pj = [];
            if (this.messages.messageUser.trim().length === 0) return;
            await this._sendNote(this.nodeInfo.selectedNode, this.messages.messageUser);
            this.messages.messageUser = "";
            this.resetBind();
            this.updatedd();
        },
        getUsername () {
            return window.spinal.spinalSystem.getUser().username;
        },
        updatedd () {
            var container = document.querySelector("#myList");
            setTimeout(()=>{
                container.scrollTop = container.scrollHeight;
            }, 300);
        },
        resetBind () {
            if (this.nodeInfo !== undefined) {
                if (this.nodeInfo.selectedNode !== undefined) {
                    if (this.myBind !== undefined) {
                        this.nodeInfo.selectedNode.unbind(this.myBind);
                        this.myBind = undefined;
                    }
                    if (this.myBind === undefined) this.myBind = this.nodeInfo.selectedNode.bind(this.updateNotesList.bind(this));
                }
            }
        },
        addPJ () {
            const maxSize = 25000000;
            const input = document.createElement("input");
            input.type = "file";
            input.multiple = true;
            input.click();
            input.addEventListener("change", (event)=>{
                const files = event.target.files;
                let filelist = [];
                for (const file of files)filelist.push(file);
                filelist.push(...this.messages.pj);
                const sizes = filelist.map((el)=>el.size);
                const filesSize = sizes.reduce((a, b)=>a + b);
                if (filesSize > maxSize) {
                    alert("The selected file(s) is too large. The maximum size must not exceed 25 MB");
                    return;
                }
                this.messages.pj = filelist;
            }, false);
        },
        removePJ (file) {
            this.messages.pj = this.messages.pj.filter((el)=>el.name !== file.name);
        },
        async TakeScreenShot () {
            const file = await this.getScreenShotFile();
            this.messages.pj.push(file);
        },
        getScreenShotFile (isViewPoint = false) {
            return new Promise(async (resolve, reject)=>{
                window.spinal.ForgeViewer.viewer.getScreenShot(0, 0, async (url)=>{
                    let blob = await fetch(url).then((r)=>r.blob());
                    const name = this.nodeInfo.selectedNote ? this.nodeInfo.selectedNote.getName().get() : await this.getObjectName(this.nodeInfo.model, this.nodeInfo.dbid);
                    let file_name;
                    if (!isViewPoint) file_name = `screenshot of ${name} from ${(0, _momentDefault.default)().format("L")}.png`;
                    else file_name = `viewPoint of ${name} from ${(0, _momentDefault.default)().format("L")}.png`;
                    let file = this.blobToFile(blob, file_name);
                    resolve(file);
                });
            });
        },
        getObjectName (model, dbid) {
            if (model && dbid) return new Promise((resolve)=>{
                model.getProperties(dbid, async (res)=>{
                    console.log(res.name);
                    resolve(res.name);
                });
            });
            return "";
        },
        blobToFile (theBlob, fileName) {
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        },
        _createBimObjectNode (model, dbid) {
            if (model && dbid) return new Promise((resolve)=>{
                model.getProperties(dbid, async (res)=>{
                    const info = await window.spinal.BimObjectService.createBIMObject(dbid, res.name, model);
                    if (info instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return resolve(info);
                    resolve((0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(info.id.get()));
                });
            });
        },
        async saveViewPoint () {
            const getCircularReplacer = ()=>{
                const seen = new WeakSet();
                return (key, value)=>{
                    if (typeof value === "object" && value !== null) {
                        if (seen.has(value)) return;
                        seen.add(value);
                    }
                    return value;
                };
            };
            const viewer = window.spinal.ForgeViewer.viewer;
            const filter = {
                guid: true,
                seedURN: true,
                overrides: true,
                objectSet: false,
                viewport: true,
                renderOptions: true
            };
            const file = await this.getScreenShotFile(true);
            const viewerState = viewer.getState(filter);
            const objectState = {
                isolated: viewer.getAggregateIsolation().map((el)=>({
                        modelId: el.model.id,
                        ids: el.ids
                    })),
                selected: viewer.getAggregateSelection().map((el)=>({
                        modelId: el.model.id,
                        selection: el.selection
                    }))
            };
            file.viewState = JSON.stringify(viewerState, getCircularReplacer());
            file.objectState = JSON.stringify(objectState, getCircularReplacer());
            this.messages.pj.push(file);
        }
    },
    watch: {
        nodeInfo () {
            this.resetBind();
            this.updatedd();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-models-documentation":"dcbQz","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","moment":"jwcsj","./message.vue":"awVk4","./attachment.vue":"f384g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awVk4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6d53537062a223c8");
    if (script.__esModule) script = script.default;
    script.render = require("a7048fb6564d5f9").render;
    script.staticRenderFns = require("a7048fb6564d5f9").staticRenderFns;
    script._scopeId = "data-v-3b243c";
    script.__cssModules = require("bf676647cdad3961").default;
    require("f01f26763f9d306f").default(script);
    script.__scopeId = "data-v-3b243c";
    script.__file = "message.vue";
};
initialize();
exports.default = script;

},{"6d53537062a223c8":"61Tnp","a7048fb6564d5f9":"6HSEB","bf676647cdad3961":"3bHCW","f01f26763f9d306f":"2MYxS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61Tnp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelsDocumentation = require("spinal-models-documentation");
var _actionsBtnVue = require("./actionsBtn.vue");
var _actionsBtnVueDefault = parcelHelpers.interopDefault(_actionsBtnVue);
var scriptExports = {
    name: "message",
    props: {
        date: {},
        username: {},
        message: {},
        type: {},
        file: {},
        viewPoint: {}
    },
    components: {
        "actions-btn": (0, _actionsBtnVueDefault.default)
    },
    data () {
        this.MESSAGE_TYPES = (0, _spinalModelsDocumentation.MESSAGE_TYPES);
        return {
            hover: false,
            image: undefined,
            info: undefined
        };
    },
    mounted () {
        setTimeout(()=>{
            console.log("this.file", this.viewPoint);
            this.chargeImg();
        }, 500);
    },
    methods: {
        chargeImg () {
            if (this.file) this.file.load((f)=>{
                this.info = f;
                f._ptr.load((path)=>{
                    this.image = path._server_id;
                });
            });
        },
        download () {
            var element = document.createElement("a");
            element.setAttribute("href", "/sceen/_?u=" + this.image);
            element.setAttribute("download", this.info.name.get());
            element.click();
        },
        restoreState () {
            const viewer = window.spinal.ForgeViewer.viewer;
            if (Object.keys(this.viewPoint).length === 0) return;
            const viewStateString = this.viewPoint.viewState.get();
            const objectStateString = this.viewPoint.objectState.get();
            const viewState = JSON.parse(viewStateString);
            const objectState = JSON.parse(objectStateString);
            viewer.restoreState(viewState);
            this.selection(viewer, objectState.selected);
            this.isolate(viewer, objectState.isolated);
        },
        isolate (viewer, items) {
            const bimObjectService = window.spinal.BimObjectService;
            items.map((el)=>{
                const bimFileId = bimObjectService.mappingModelIdBimFileId[el.modelId].bimFileId;
                const model = spinal.BimObjectService.getModelByBimfile(bimFileId);
                viewer.impl.visibilityManager.isolate(el.ids, model);
            });
        },
        selection (viewer, items) {
            const bimObjectService = window.spinal.BimObjectService;
            items.map((el)=>{
                const bimFileId = bimObjectService.mappingModelIdBimFileId[el.modelId].bimFileId;
                const model = spinal.BimObjectService.getModelByBimfile(bimFileId);
                model.selector.setSelection(el.selection, model, "selectOnly");
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-models-documentation":"dcbQz","./actionsBtn.vue":"hGjf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGjf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("86d6616a85ebdbe");
    if (script.__esModule) script = script.default;
    script.render = require("2add6816fc1895e3").render;
    script.staticRenderFns = require("2add6816fc1895e3").staticRenderFns;
    script._scopeId = "data-v-1e834f";
    require("23718911b98380cf").default(script);
    script.__scopeId = "data-v-1e834f";
    script.__file = "actionsBtn.vue";
};
initialize();
exports.default = script;

},{"86d6616a85ebdbe":"8FH2F","2add6816fc1895e3":"e0vOO","23718911b98380cf":"8otSW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FH2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "actionsBtn",
    props: [
        "hover",
        "viewPoint"
    ],
    methods: {
        displayBtn () {
            console.log(this.viewPoint);
            if (this.viewPoint && this.viewPoint.hasOwnProperty("viewState") && this.viewPoint.hasOwnProperty("objectState")) return true;
            return false;
        },
        download () {
            this.$emit("download");
        },
        restoreState () {
            this.$emit("restoreState");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0vOO":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.hover ? _c("div", [
        _c("md-button", {
            staticClass: "md-dense md-primary",
            on: {
                "click": _vm.download
            }
        }, [
            _c("md-icon", {
                staticClass: "md-primary"
            }, [
                _vm._v("get_app")
            ]),
            _vm._v("\n    Download\n  ")
        ], 1),
        _vm._v(" "),
        _vm.displayBtn() ? _c("md-button", {
            staticClass: "md-dense md-primary",
            on: {
                "click": _vm.restoreState
            }
        }, [
            _c("md-icon", {
                staticClass: "md-primary"
            }, [
                _vm._v("near_me")
            ]),
            _vm._v("\n    Restore viewpoint\n  ")
        ], 1) : _vm._e()
    ], 1) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8otSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HSEB":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.type === _vm.MESSAGE_TYPES.file ? _c("li", {
        staticClass: "clearfix"
    }, [
        _c("div", {
            staticClass: "message-data align-right"
        }, [
            _c("span", {
                staticClass: "message-data-time"
            }, [
                _vm._v(_vm._s(_vm.date))
            ]),
            _vm._v(" \xa0 \xa0\n    "),
            _c("span", {
                staticClass: "message-data-name"
            }, [
                _vm._v(_vm._s(_vm.username))
            ])
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "message messageIcon other-message float-right",
            on: {
                "mouseover": function($event) {
                    _vm.hover = true;
                },
                "mouseleave": function($event) {
                    _vm.hover = false;
                }
            }
        }, [
            _c("div", {
                staticClass: "texte"
            }, [
                _c("md-icon", {
                    staticClass: "description"
                }, [
                    _vm._v("description")
                ]),
                _vm._v("\n      " + _vm._s(_vm.message) + "\n    ")
            ], 1),
            _vm._v(" "),
            _c("actions-btn", {
                staticClass: "message_actions",
                attrs: {
                    "hover": _vm.hover,
                    "viewPoint": _vm.viewPoint
                },
                on: {
                    "download": _vm.download,
                    "restoreState": _vm.restoreState
                }
            })
        ], 1)
    ]) : _vm.type === _vm.MESSAGE_TYPES.image ? _c("li", {
        staticClass: "clearfix",
        on: {
            "mouseover": function($event) {
                _vm.hover = true;
            },
            "mouseleave": function($event) {
                _vm.hover = false;
            }
        }
    }, [
        _c("div", {
            staticClass: "message-data align-right"
        }, [
            _c("span", {
                staticClass: "message-data-time"
            }, [
                _vm._v(_vm._s(_vm.date))
            ]),
            _vm._v(" \xa0 \xa0\n    "),
            _c("span", {
                staticClass: "message-data-name"
            }, [
                _vm._v(_vm._s(_vm.username))
            ])
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "message other-message float-right",
            on: {
                "mouseover": function($event) {
                    _vm.hover = true;
                },
                "mouseleave": function($event) {
                    _vm.hover = false;
                }
            }
        }, [
            _c("div", {
                staticClass: "images"
            }, [
                _c("div", {
                    staticClass: "img_texte"
                }, [
                    _vm._v(_vm._s(_vm.message))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "image"
                }, [
                    _c("img", {
                        attrs: {
                            "src": "/sceen/_?u=" + _vm.image,
                            "alt": "image"
                        }
                    })
                ])
            ]),
            _vm._v(" "),
            _c("actions-btn", {
                staticClass: "message_actions",
                attrs: {
                    "hover": _vm.hover,
                    "viewPoint": _vm.viewPoint
                },
                on: {
                    "download": _vm.download,
                    "restoreState": _vm.restoreState
                }
            })
        ], 1)
    ]) : _c("li", {
        staticClass: "clearfix"
    }, [
        _c("div", {
            staticClass: "message-data align-right"
        }, [
            _c("span", {
                staticClass: "message-data-time"
            }, [
                _vm._v(_vm._s(_vm.date))
            ]),
            _vm._v(" \xa0 \xa0\n    "),
            _c("span", {
                staticClass: "message-data-name"
            }, [
                _vm._v(_vm._s(_vm.username))
            ])
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "message other-message float-right"
        }, [
            _c("div", {
                staticClass: "texte"
            }, [
                _vm._v("\n      " + _vm._s(_vm.message) + "\n    ")
            ])
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3bHCW":[function() {},{}],"2MYxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f384g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e9c8d1ef848c6810");
    if (script.__esModule) script = script.default;
    script.render = require("1ca08a606dac9648").render;
    script.staticRenderFns = require("1ca08a606dac9648").staticRenderFns;
    script._scopeId = "data-v-fe87d9";
    script.__cssModules = require("edcb35da2f607fe5").default;
    require("4945fe868d60afde").default(script);
    script.__scopeId = "data-v-fe87d9";
    script.__file = "attachment.vue";
};
initialize();
exports.default = script;

},{"e9c8d1ef848c6810":"cqPeI","1ca08a606dac9648":"ketRA","edcb35da2f607fe5":"bN8CX","4945fe868d60afde":"4iRmA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqPeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "attachment",
    props: [
        "file"
    ],
    data () {
        return {};
    },
    methods: {
        remove () {
            this.$emit("remove", this.file);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ketRA":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "content"
    }, [
        _c("div", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.file.name,
                    expression: "file.name"
                }
            ],
            staticClass: "md-caption name"
        }, [
            _vm._v(_vm._s(_vm.file.name))
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "md-caption delete",
            on: {
                "click": _vm.remove
            }
        }, [
            _vm._v("X")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bN8CX":[function() {},{}],"4iRmA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWwdg":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "notesContainer"
    }, [
        _c("md-content", {
            staticClass: "messages md-scrollbar",
            attrs: {
                "id": "myList"
            }
        }, [
            _c("ul", {
                staticClass: "div_messages"
            }, _vm._l(_vm.notesDisplayList, function(note, index) {
                return _c("message-component", {
                    key: index,
                    attrs: {
                        "date": note.date,
                        "username": note.username,
                        "message": note.message,
                        "type": note.type,
                        "file": note.file,
                        "viewPoint": note.viewPoint
                    }
                });
            }), 1)
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "form"
        }, [
            _c("form", {
                staticClass: "noteForm",
                on: {
                    "submit": function($event) {
                        $event.preventDefault();
                        return _vm.addNote.apply(null, arguments);
                    }
                }
            }, [
                _c("div", {
                    staticClass: "icons"
                }, [
                    _c("md-speed-dial", {
                        attrs: {
                            "md-direction": "top"
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
                                _vm._v("close")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("md-speed-dial-content", [
                            _c("md-button", {
                                staticClass: "md-icon-button md-raised md-primary md-fab md-mini",
                                attrs: {
                                    "title": "save point of view"
                                },
                                on: {
                                    "click": _vm.saveViewPoint
                                }
                            }, [
                                _c("md-icon", [
                                    _vm._v("near_me")
                                ])
                            ], 1),
                            _vm._v(" "),
                            _c("md-button", {
                                staticClass: "md-icon-button md-raised md-primary md-fab md-mini",
                                attrs: {
                                    "title": "Take a screenshot"
                                },
                                on: {
                                    "click": _vm.TakeScreenShot
                                }
                            }, [
                                _c("md-icon", [
                                    _vm._v("add_a_photo")
                                ])
                            ], 1),
                            _vm._v(" "),
                            _c("md-button", {
                                staticClass: "md-icon-button md-raised md-primary md-fab md-mini",
                                attrs: {
                                    "title": "Add Attachment"
                                },
                                on: {
                                    "click": _vm.addPJ
                                }
                            }, [
                                _c("md-icon", [
                                    _vm._v("attach_file")
                                ])
                            ], 1)
                        ], 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "messageForm"
                }, [
                    _c("md-content", {
                        staticClass: "pjDiv md-scrollbar"
                    }, _vm._l(_vm.messages.pj, function(file, index) {
                        return _c("attachment-component", {
                            key: index,
                            attrs: {
                                "file": file
                            },
                            on: {
                                "remove": _vm.removePJ
                            }
                        }, [
                            _vm._v(_vm._s(file.name) + "\n               ")
                        ]);
                    }), 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "messageField"
                    }, [
                        _c("md-field", {
                            staticClass: "myField md-inline"
                        }, [
                            _c("label", [
                                _vm._v("Message")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.messages.messageUser,
                                    callback: function($$v) {
                                        _vm.$set(_vm.messages, "messageUser", $$v);
                                    },
                                    expression: "messages.messageUser"
                                }
                            })
                        ], 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "sendBtn"
                }, [
                    _c("md-button", {
                        staticClass: "md-icon-button md-raised md-primary",
                        attrs: {
                            "type": "submit",
                            "title": "send"
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("send")
                        ])
                    ], 1)
                ], 1)
            ])
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4GAZ7":[function() {},{}],"bQYWw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-documentation.dbf0563a.js.map
