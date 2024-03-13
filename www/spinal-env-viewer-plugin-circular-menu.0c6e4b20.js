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
})({"91D3E":[function(require,module,exports) {
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
var _spinalEnvViewerPluginCircularMenuService = require("spinal-env-viewer-plugin-circular-menu-service");
const ClassName = "spinalcircularMenu";
const classExtention = class {
    constructor(viewer, options){
        Autodesk.Viewing.Extension.call(this, viewer, options);
        this.viewer = viewer;
        this.panel = null;
    }
    load() {
        this.initialize();
        return true;
    }
    unload() {
        // this.viewer.toolbar.removeControl(this.subToolbar);
        return true;
    }
    // This function is to create your button on viewer, it used autodesk forge api
    initialize() {
        let hideOrShow = new (0, _spinalEnvViewerPluginCircularMenuService.circularMenu)(this.viewer);
        hideOrShow.mount();
    }
};
exports.default = new class {
    constructor(){
        Autodesk.Viewing.theExtensionManager.registerExtension(ClassName, classExtention); // this is the register of your class
        window.spinal.ForgeExtentionManager.addExtention(ClassName);
    }
}();

},{"spinal-env-viewer-plugin-circular-menu-service":"e2lZQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2lZQ":[function(require,module,exports) {
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
var _circularMenuVue = require("spinal-env-viewer-plugin-circular-menu/circularMenu.vue");
var _circularMenuVueDefault = parcelHelpers.interopDefault(_circularMenuVue);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const circularComponentCtor = (0, _vueDefault.default).extend((0, _circularMenuVueDefault.default));
const { spinalContextMenuService } = require("df0105731b32998a");
const Autodesk = window.Autodesk;
var circularMenu = class circularMenu {
    constructor(viewer){
        this.viewer = viewer;
        this.evt = {
            timeout: null,
            data: null,
            canvas: false,
            selected: false,
            xTouch: window.innerWidth / 2,
            yTouch: window.innerHeight / 2,
            x: 0,
            y: 0
        };
        const eventListener = ()=>{
            viewer.removeEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, eventListener);
            viewer.clientContainer.addEventListener("click", (evt)=>{
                this.close();
                if (evt.target instanceof HTMLCanvasElement) this.onEvt("canvas");
            });
            const defaultSingleTapHandler = viewer.clickHandler.handleSingleTap;
            viewer.clickHandler.handleSingleTap = (evt)=>{
                this.close();
                if (evt.target instanceof HTMLCanvasElement) {
                    this.evt.xTouch = evt.center.x;
                    this.evt.yTouch = evt.center.y;
                    this.onEvt("canvas");
                }
                defaultSingleTapHandler(evt);
            };
            viewer.clientContainer.addEventListener("DynamicObjectClick", ()=>{
                this.close();
                try {
                    this.evt.x = event.x;
                    this.evt.y = event.y;
                } catch (e) {
                    this.evt.x = this.evt.xTouch;
                    this.evt.y = this.evt.yTouch;
                }
                this.evt.data = event;
                this.onEvt("dynamic");
            });
            viewer.addEventListener(Autodesk.Viewing.ESCAPE_EVENT, ()=>{
                this.close();
            });
            viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, (e)=>{
                try {
                    this.evt.x = event.x;
                    this.evt.y = event.y;
                } catch (e) {
                    this.evt.x = this.evt.xTouch;
                    this.evt.y = this.evt.yTouch;
                }
                this.evt.data = e.selections;
                this.close();
                this.onEvt("selected");
            });
        };
        viewer.addEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, eventListener);
    }
    onEvt(evtFrom) {
        if (evtFrom === "canvas" || evtFrom === "selected" || evtFrom == "dynamic") {
            this.evt[evtFrom] = true;
            if (this.evt.canvas === true && this.evt.selected === true) {
                this.onSelectionChange(this.evt.data);
                this.evt.canvas = false;
                this.evt.selected = false;
                if (this.evt.timeout !== null) clearInterval(this.evt.timeout);
                this.evt.timeout = null;
            } else if (this.evt.timeout == null) this.evt.timeout = setTimeout(()=>{
                this.evt.canvas = false;
                this.evt.selected = false;
                this.evt.timeout = null;
            }, 200);
        }
    }
    async onSelectionChange(data) {
        if (data.length === 1 && data[0].dbIdArray.length === 1) {
            var x = this.evt.x;
            var y = this.evt.y;
            let dbId = data[0].dbIdArray[0];
            // il faut récupérer les BIMObject selected
            let bimObj = await window.spinal.BimObjectService.getBIMObject(data[0].dbIdArray[0], data[0].model);
            let myNode;
            if (bimObj instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) {
                window.spinal.spinalGraphService._addNode(bimObj);
                myNode = window.spinal.spinalGraphService.getNode(bimObj.info.id.get());
            } else myNode = bimObj;
            if (bimObj !== undefined && myNode !== undefined) {
                let objContextMenuService = {
                    exist: true,
                    selectedNode: myNode,
                    dbid: dbId,
                    model3d: data[0].model
                };
                return this.open(await this.getButtonList(objContextMenuService), x, y, objContextMenuService);
            }
            let objContextMenuService = {
                exist: false,
                dbid: dbId,
                model3d: data[0].model
            };
            let btnList = await this.getButtonList(objContextMenuService);
            this.open(btnList, x, y, objContextMenuService);
        } else if (data.is === "dynamic") {
            let objContextMenuService = {
                exist: true,
                selectedNode: data.returnObj.node,
                model3d: data.returnObj.model
            };
            let btnList = await this.getButtonList(objContextMenuService);
            this.open(btnList, data.x, data.y, objContextMenuService);
        } else this.close();
    }
    getButtonList(objContextMenuService) {
        return spinalContextMenuService.getApps("circularMenu", objContextMenuService).then((buttonList)=>{
            return buttonList;
        });
    }
    mount() {}
    open(buttonList, x, y, objContextMenuService) {
        if (this.close() == false) {
            this.container = document.createElement("div");
            document.body.append(this.container);
            let mySmallContainer = document.createElement("div");
            this.container.append(mySmallContainer);
            this.circularCtor = new circularComponentCtor({
                propsData: {
                    buttonList: buttonList,
                    x: x,
                    y: y,
                    options: objContextMenuService
                }
            }).$mount(mySmallContainer);
        }
    }
    close() {
        if (this.container != undefined) {
            this.container.remove();
            this.container = undefined;
            return true;
        }
        return false;
    }
};
module.exports.circularMenu = circularMenu;

},{"spinal-env-viewer-plugin-circular-menu/circularMenu.vue":"5uFPK","vue":"gt5MM","spinal-env-viewer-graph-service":"9n7zp","df0105731b32998a":"kHlxv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uFPK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("30e001849f9de112");
    if (script.__esModule) script = script.default;
    script.render = require("70c64d8d3c820305").render;
    script.staticRenderFns = require("70c64d8d3c820305").staticRenderFns;
    script._scopeId = "data-v-d56c56";
    script.__cssModules = require("943c9ee8baa12b5c").default;
    require("df6e1cb3a78e64fa").default(script);
    script.__scopeId = "data-v-d56c56";
    script.__file = "circularMenu.vue";
};
initialize();
exports.default = script;

},{"30e001849f9de112":"i4Wtv","70c64d8d3c820305":"3Ffv9","943c9ee8baa12b5c":"7p8JO","df6e1cb3a78e64fa":"2QPZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4Wtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "circularmenu",
    data () {
        return {
            buttonTab: [],
            data: {},
            color: {
                background: "#2D3D93"
            }
        };
    },
    components: {},
    props: [
        "buttonList",
        "x",
        "y",
        "options"
    ],
    methods: {
        // activateMode: function() {
        //   if (this.activateModeBool) {
        //     this.activateModeBool = false;
        //     this.color.background = "#F68204";
        //     this.data = {};
        //   } else {
        //     this.activateModeBool = true;
        //     this.color.background = "#2D3D93";
        //   }
        // },
        getStyle: function() {
            if (this.buttonList.length > 0) return {
                position: "absolute",
                left: this.x - 75 + "px",
                top: this.y - 75 + "px",
                height: "150px",
                width: "150px",
                "pointer-events": "none",
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                transform: "scale(1)",
                "-webkit-transition": "all 0.4s ease-out",
                "-moz-transition": "all 0.4s ease-out",
                transition: "all 0.4s ease-out"
            };
            else return {
                position: "absolute",
                opacity: 0,
                "-webkit-transform": "scale(0)",
                "-moz-transform": "scale(0)",
                transform: "scale(0)"
            };
        },
        getButtonStyle: function(index) {
            let myStyle = {
                left: "",
                top: "",
                "background-color": this.buttonList[index].buttonCfg.backgroundColor,
                position: "absolute",
                "-webkit-transition": "all 0.4s ease-out",
                "-moz-transition": "all 0.4s ease-out",
                transition: "all 0.4s ease-out"
            };
            let nbrElement = this.buttonList.length;
            let radius = 60;
            let nbr = 2 * Math.PI / nbrElement;
            if (nbrElement >= 7) {
                let result = nbrElement * 50;
                radius = result / (2 * Math.PI);
            }
            let axeX = (radius * Math.cos(nbr * index)).toFixed(1);
            let axeY = (radius * Math.sin(nbr * index)).toFixed(1);
            myStyle.left = "calc(50% + " + (axeX - 20) + "px)";
            myStyle.top = "calc(50% + " + (axeY - 20) + "px)";
            return myStyle;
        },
        getIconColor (index) {
            let color;
            try {
                color = this.buttonList[index].buttonCfg.fontColor;
            } catch (e) {
                color = "white";
            }
            return {
                color
            };
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ffv9":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("div", {
            style: _vm.getStyle()
        }, _vm._l(_vm.buttonList, function(button, index) {
            return _c("transition", {
                key: index,
                attrs: {
                    "name": "myCircularOpen",
                    "appear": "",
                    "before-appear": "circle-spinal-circular-menucenter",
                    "appear-class": "circle-spinal-circular-menu",
                    "appear-to-class": "opencircle-spinal-circular-menu",
                    "leave-to-class": "closecircle-spinal-circular-menu",
                    "duration": {
                        enter: 500,
                        leave: 800
                    }
                }
            }, [
                _c("md-button", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: button.label,
                            expression: "button.label"
                        }
                    ],
                    staticClass: "md-icon-button",
                    staticStyle: {
                        "margin": "unset",
                        "pointer-events": "auto",
                        "height": "40px"
                    },
                    style: _vm.getButtonStyle(index),
                    on: {
                        "click": function($event) {
                            return button.action(_vm.options);
                        }
                    }
                }, [
                    _c("md-icon", {
                        style: _vm.getIconColor(index)
                    }, [
                        _vm._v(_vm._s(button.buttonCfg.icon))
                    ])
                ], 1)
            ], 1);
        }), 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7p8JO":[function() {},{}],"2QPZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-circular-menu.0c6e4b20.js.map
