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
})({"f8kzc":[function(require,module,exports) {
/*
 * Copyright 2018. SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 *
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalBadgeIconButton", ()=>(0, _button.SpinalBadgeIconButton));
parcelHelpers.export(exports, "DropUpDownButton", ()=>(0, _button.DropUpDownButton));
parcelHelpers.export(exports, "SpinalIconButton", ()=>(0, _button.SpinalIconButton));
parcelHelpers.export(exports, "ColorMarker", ()=>(0, _colorMakerVueDefault.default));
parcelHelpers.export(exports, "NodeList", ()=>(0, _nodes.NodeList));
parcelHelpers.export(exports, "NodeInspector", ()=>(0, _nodes.NodeInspector));
parcelHelpers.export(exports, "NodeHeader", ()=>(0, _nodes.NodeHeader));
parcelHelpers.export(exports, "NodeItem", ()=>(0, _nodes.NodeItem));
parcelHelpers.export(exports, "SideBar", ()=>(0, _toolsBar.SideBar));
parcelHelpers.export(exports, "TopBar", ()=>(0, _toolsBar.TopBar));
parcelHelpers.export(exports, "ToolsBar", ()=>(0, _toolsBar.ToolsBar));
parcelHelpers.export(exports, "IconSelector", ()=>(0, _iconSelectorVueDefault.default));
parcelHelpers.export(exports, "SpinalList", ()=>(0, _list.SpinalList));
parcelHelpers.export(exports, "SpinalListItem", ()=>(0, _list.SpinalListItem));
var _button = require("./components/Button");
var _colorMakerVue = require("./components/ColorMarker/ColorMaker.vue");
var _colorMakerVueDefault = parcelHelpers.interopDefault(_colorMakerVue);
var _nodes = require("./components/Nodes");
var _toolsBar = require("./components/ToolsBar");
var _iconSelectorVue = require("./components/Selectors/IconSelector.vue");
var _iconSelectorVueDefault = parcelHelpers.interopDefault(_iconSelectorVue);
var _list = require("./components/List");

},{"./components/Button":"569xW","./components/ColorMarker/ColorMaker.vue":"4lSHp","./components/Nodes":"hvE6y","./components/ToolsBar":"1PwHi","./components/Selectors/IconSelector.vue":"dFbps","./components/List":"6FRPw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"569xW":[function(require,module,exports) {
/*
 * Copyright 2018. SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DropUpDownButton", ()=>(0, _dropUpDownButtonVueDefault.default));
parcelHelpers.export(exports, "SpinalBadgeIconButton", ()=>(0, _spinalBadgeIconButtonVueDefault.default));
parcelHelpers.export(exports, "SpinalIconButton", ()=>(0, _spinalIconButtonVueDefault.default));
var _spinalBadgeIconButtonVue = require("./SpinalBadgeIconButton.vue");
var _spinalBadgeIconButtonVueDefault = parcelHelpers.interopDefault(_spinalBadgeIconButtonVue);
var _spinalIconButtonVue = require("./SpinalIconButton.vue");
var _spinalIconButtonVueDefault = parcelHelpers.interopDefault(_spinalIconButtonVue);
var _dropUpDownButtonVue = require("./DropUpDownButton.vue");
var _dropUpDownButtonVueDefault = parcelHelpers.interopDefault(_dropUpDownButtonVue);

},{"./SpinalBadgeIconButton.vue":"7oX8R","./SpinalIconButton.vue":"bOlDB","./DropUpDownButton.vue":"VEWXn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oX8R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("efae667e12384b0c");
    if (script.__esModule) script = script.default;
    script.render = require("4dfceb153078a8c4").render;
    script.staticRenderFns = require("4dfceb153078a8c4").staticRenderFns;
    script._scopeId = "data-v-7210bd";
    script.__cssModules = require("9db2f3295f182203").default;
    require("e61c0f410da39791").default(script);
    script.__scopeId = "data-v-7210bd";
    script.__file = "SpinalBadgeIconButton.vue";
};
initialize();
exports.default = script;

},{"efae667e12384b0c":"3Oxsf","4dfceb153078a8c4":"l1NL3","9db2f3295f182203":"h4dLF","e61c0f410da39791":"24Mdi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Oxsf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalIconButtonVue = require("./SpinalIconButton.vue");
var _spinalIconButtonVueDefault = parcelHelpers.interopDefault(_spinalIconButtonVue);
var scriptExports = {
    name: "SpinalBadgeIconButton",
    components: {
        SpinalIconButton: (0, _spinalIconButtonVueDefault.default)
    },
    props: {
        fontColor: {
            type: String,
            default: function() {
                return "#FFF";
            }
        },
        backgroundColor: {
            type: String,
            default: function() {
                return "#2d3d93";
            }
        },
        toolTip: {
            type: String,
            default: function() {
                return "";
            }
        },
        icon: {
            type: String,
            required: true
        },
        icon_type: {
            type: String,
            default: function() {
                return "in";
            }
        },
        toolTipDirection: {
            type: String,
            default: "right"
        },
        badge_label: {
            default: function() {
                return "";
            }
        },
        badge_background_color: {
            type: String,
            default: function() {
                return "#F68204";
            }
        },
        badge_font_color: {
            type: String,
            default: function() {
                return "#FFF";
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalIconButton.vue":"bOlDB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOlDB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("39aaaa89228dbf4b");
    if (script.__esModule) script = script.default;
    script.render = require("5acd1873175b677").render;
    script.staticRenderFns = require("5acd1873175b677").staticRenderFns;
    script._scopeId = "data-v-f6ee74";
    script.__cssModules = require("dbbb351a7e245ba8").default;
    require("70457ab590ad97d8").default(script);
    script.__scopeId = "data-v-f6ee74";
    script.__file = "SpinalIconButton.vue";
};
initialize();
exports.default = script;

},{"39aaaa89228dbf4b":"hE1qq","5acd1873175b677":"gkKAe","dbbb351a7e245ba8":"699CO","70457ab590ad97d8":"6DFI6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hE1qq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIconButtonClassVue = require("./BaseIconButtonClass.vue");
var _baseIconButtonClassVueDefault = parcelHelpers.interopDefault(_baseIconButtonClassVue);
var _baseIconButtonInVue = require("./BaseIconButtonIn.vue");
var _baseIconButtonInVueDefault = parcelHelpers.interopDefault(_baseIconButtonInVue);
var _baseIconButtonSrcVue = require("./BaseIconButtonSrc.vue");
var _baseIconButtonSrcVueDefault = parcelHelpers.interopDefault(_baseIconButtonSrcVue);
var scriptExports = {
    name: "SpinalIconButton",
    components: {
        BaseIconButtonSrc: (0, _baseIconButtonSrcVueDefault.default),
        BaseIconButtonIn: (0, _baseIconButtonInVueDefault.default),
        BaseIconButtonClass: (0, _baseIconButtonClassVueDefault.default)
    },
    props: {
        fontColor: {
            type: String,
            default: function() {
                return "#FFF";
            }
        },
        backgroundColor: {
            type: String,
            default: function() {
                return "#2d3d93";
            }
        },
        toolTip: {
            type: String,
            default: function() {
                return "";
            }
        },
        icon: {
            type: String,
            required: true
        },
        icon_type: {
            type: String,
            default: function() {
                return "in";
            }
        },
        toolTipDirection: {
            type: String,
            default: "right"
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./BaseIconButtonClass.vue":"bkTvy","./BaseIconButtonIn.vue":"e5z0S","./BaseIconButtonSrc.vue":"3gd45","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkTvy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("dc5ca4c7ee25ed65");
    if (script.__esModule) script = script.default;
    script.render = require("b7696d459dd291f3").render;
    script.staticRenderFns = require("b7696d459dd291f3").staticRenderFns;
    script._scopeId = "data-v-77cee0";
    script.__cssModules = require("e2bc21425690138f").default;
    require("a67df3487ffee001").default(script);
    script.__scopeId = "data-v-77cee0";
    script.__file = "BaseIconButtonClass.vue";
};
initialize();
exports.default = script;

},{"dc5ca4c7ee25ed65":"8qRPX","b7696d459dd291f3":"1eWl7","e2bc21425690138f":"drbor","a67df3487ffee001":"cBgXc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qRPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "BaseIconButtonClass",
    props: {
        toolTip: {
            type: String,
            default: function() {
                return "";
            }
        },
        toolTipDirection: {
            type: String,
            default: function() {
                return "left";
            },
            validator: function(data) {
                return data === "left" || data === "right" || data === "top" || data === "bottom";
            }
        },
        toolTipDelay: {
            type: String,
            default: function() {
                return 300;
            }
        },
        icon: {
            type: String,
            required: true
        },
        fontColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        backgroundColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        width: {
            type: String,
            default: function() {
                return "20px";
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eWl7":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-button", {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                    content: _vm.toolTip,
                    placement: "bottom",
                    autoHide: false
                },
                expression: "{content: toolTip,\n        placement:'bottom',\n         autoHide:false,\n        }"
            }
        ],
        staticClass: "md-icon-button",
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }, [
        _c("md-icon", {
            class: _vm.icon,
            style: {
                width: _vm.width,
                color: _vm.fontColor
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"drbor":[function() {},{}],"cBgXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5z0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("27ea5691f1fc10ae");
    if (script.__esModule) script = script.default;
    script.render = require("842e7919145314e1").render;
    script.staticRenderFns = require("842e7919145314e1").staticRenderFns;
    script._scopeId = "data-v-9229a9";
    script.__cssModules = require("37ab33b7f3d0a946").default;
    require("215a81191415ef5a").default(script);
    script.__scopeId = "data-v-9229a9";
    script.__file = "BaseIconButtonIn.vue";
};
initialize();
exports.default = script;

},{"27ea5691f1fc10ae":"jRDfr","842e7919145314e1":"dCrjq","37ab33b7f3d0a946":"nHYT5","215a81191415ef5a":"10ZGQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRDfr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "BaseIconButtonIn",
    props: {
        toolTip: {
            type: String,
            default: function() {
                return "";
            }
        },
        toolTipDirection: {
            type: String,
            default: function() {
                return "left";
            },
            validator: function(data) {
                return data === "left" || data === "right" || data === "top" || data === "bottom" || data === "";
            }
        },
        toolTipDelay: {
            type: String,
            default: function() {
                return 300;
            }
        },
        icon: {
            type: String,
            required: true
        },
        fontColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        backgroundColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        width: {
            type: String,
            default: function() {
                return "20px";
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCrjq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-button", {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                    content: _vm.toolTip,
                    placement: "bottom",
                    autoHide: false
                },
                expression: "{content: toolTip,\n        placement:'bottom',\n         autoHide:false,\n        }"
            }
        ],
        staticClass: "md-icon-button",
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }, [
        _c("md-icon", {
            style: {
                width: _vm.width,
                color: _vm.fontColor
            }
        }, [
            _vm._v("\n        " + _vm._s(_vm.icon) + "\n    ")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"nHYT5":[function() {},{}],"10ZGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gd45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3d440839f89ef337");
    if (script.__esModule) script = script.default;
    script.render = require("232125a077564c87").render;
    script.staticRenderFns = require("232125a077564c87").staticRenderFns;
    script._scopeId = "data-v-a13b7c";
    script.__cssModules = require("e86176f6be55aa2").default;
    require("1bbb423677728011").default(script);
    script.__scopeId = "data-v-a13b7c";
    script.__file = "BaseIconButtonSrc.vue";
};
initialize();
exports.default = script;

},{"3d440839f89ef337":"4vADZ","232125a077564c87":"3ruq2","e86176f6be55aa2":"1B8Kt","1bbb423677728011":"lAipS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4vADZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "BaseIconButtonSrc",
    props: {
        toolTip: {
            type: String,
            default: function() {
                return "";
            }
        },
        toolTipDirection: {
            type: String,
            default: function() {
                return "left";
            },
            validator: function(data) {
                return data === "left" || data === "right" || data === "top" || data === "bottom";
            }
        },
        toolTipDelay: {
            type: String,
            default: function() {
                return 300;
            }
        },
        icon: {
            type: String,
            required: true
        },
        fontColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        backgroundColor: {
            type: String,
            default: function() {
                return "";
            }
        },
        width: {
            type: String,
            default: function() {
                return "20px";
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ruq2":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-button", {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                    content: _vm.toolTip,
                    placement: "bottom",
                    autoHide: false
                },
                expression: "{\n           content: toolTip,\n           placement:'bottom',\n           autoHide:false,\n        }"
            }
        ],
        staticClass: "md-icon-button",
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }, [
        _c("md-icon", {
            style: {
                width: _vm.width,
                color: _vm.fontColor
            },
            attrs: {
                "md-src": _vm.icon
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1B8Kt":[function() {},{}],"lAipS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKAe":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.icon_type === "in" ? _c("base-icon-button-in", {
        attrs: {
            "icon": _vm.icon,
            "tool-tip": _vm.toolTip,
            "tool-tip-delay": "300",
            "tool-tip-direction": _vm.toolTipDirection,
            "font-color": _vm.fontColor,
            "background-color": _vm.backgroundColor
        },
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }) : _vm.icon_type === "class" ? _c("base-icon-button-class", {
        attrs: {
            "icon": _vm.icon,
            "tool-tip": _vm.toolTip,
            "tool-tip-delay": "300",
            "tool-tip-direction": _vm.toolTipDirection,
            "font-color": _vm.fontColor,
            "background-color": _vm.backgroundColor
        },
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }) : _c("base-icon-button-src", {
        attrs: {
            "icon": _vm.icon,
            "tool-tip": _vm.toolTip,
            "tool-tip-delay": "300",
            "tool-tip-direction": _vm.toolTipDirection,
            "font-color": _vm.fontColor,
            "background-color": _vm.backgroundColor
        },
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"699CO":[function() {},{}],"6DFI6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1NL3":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.badge_label.length > 0 ? _c("md-badge", {
        attrs: {
            "md-content": _vm.badge_label
        }
    }, [
        _c("spinal-icon-button", {
            attrs: {
                "icon": _vm.icon,
                "tool-tip": _vm.toolTip,
                "tool-tip-delay": "300",
                "tool-tip-direction": _vm.toolTipDirection,
                "font-color": _vm.fontColor,
                "background-color": _vm.backgroundColor
            },
            on: {
                "click": function($event) {
                    return _vm.$emit("click");
                }
            }
        })
    ], 1) : _c("spinal-icon-button", {
        attrs: {
            "icon": _vm.icon,
            "icon_type": _vm.icon_type,
            "tool-tip": _vm.toolTip,
            "tool-tip-delay": "300",
            "tool-tip-direction": _vm.toolTipDirection,
            "font-color": _vm.fontColor,
            "background-color": _vm.backgroundColor
        },
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"h4dLF":[function() {},{}],"24Mdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VEWXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("abd05dbedb6716b5");
    if (script.__esModule) script = script.default;
    script.render = require("158828aeb4266892").render;
    script.staticRenderFns = require("158828aeb4266892").staticRenderFns;
    script._scopeId = "data-v-d77db2";
    script.__cssModules = require("8cb480cfa633d178").default;
    require("e700d18aa225afe1").default(script);
    script.__scopeId = "data-v-d77db2";
    script.__file = "DropUpDownButton.vue";
};
initialize();
exports.default = script;

},{"abd05dbedb6716b5":"bBQNA","158828aeb4266892":"fpRzl","8cb480cfa633d178":"1wd07","e700d18aa225afe1":"ft7lq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBQNA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "DropUpDownButton",
    computed: {
        icon: function() {
            return this.opened ? "arrow_drop_down" : "arrow_right";
        }
    },
    props: {
        opened: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    methods: {
        onClick: function() {
            this.$emit("click", this.opened);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpRzl":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        on: {
            "click": function($event) {
                $event.stopPropagation();
                return _vm.onClick.apply(null, arguments);
            }
        }
    }, [
        _c("i", {
            staticClass: "material-icons"
        }, [
            _vm._v("\n        " + _vm._s(_vm.icon) + "\n    ")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1wd07":[function() {},{}],"ft7lq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lSHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("751f81212fa93a1e");
    if (script.__esModule) script = script.default;
    script.render = require("47760cda47636dde").render;
    script.staticRenderFns = require("47760cda47636dde").staticRenderFns;
    script._scopeId = "data-v-8197b5";
    script.__cssModules = require("38de13584b7f2528").default;
    require("c138b3ed3f4d424e").default(script);
    script.__scopeId = "data-v-8197b5";
    script.__file = "ColorMaker.vue";
};
initialize();
exports.default = script;

},{"751f81212fa93a1e":"4UEAR","47760cda47636dde":"dDkqJ","38de13584b7f2528":"fqYyK","c138b3ed3f4d424e":"i1cIs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UEAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "ColorMaker",
    props: {
        color: {
            type: String,
            default: function() {
                return "";
            }
        },
        width: {
            type: String,
            default: function() {
                return "10px";
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDkqJ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        style: {
            background: _vm.color,
            width: _vm.width
        },
        attrs: {
            "id": "colorItem"
        }
    }, [
        _c("div", {
            style: {
                visibility: "hidden"
            }
        }, [
            _vm._v("\n        color\n    ")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fqYyK":[function() {},{}],"i1cIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvE6y":[function(require,module,exports) {
/*
 * Copyright 2018. SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeHeader", ()=>(0, _nodeHeaderVueDefault.default));
parcelHelpers.export(exports, "NodeItem", ()=>(0, _nodeItemVueDefault.default));
parcelHelpers.export(exports, "NodeList", ()=>(0, _nodesListVueDefault.default));
parcelHelpers.export(exports, "NodeInspector", ()=>(0, _nodeInspectorVueDefault.default));
var _nodeHeaderVue = require("./NodeHeader.vue");
var _nodeHeaderVueDefault = parcelHelpers.interopDefault(_nodeHeaderVue);
var _nodeItemVue = require("./NodeItem.vue");
var _nodeItemVueDefault = parcelHelpers.interopDefault(_nodeItemVue);
var _nodesListVue = require("./NodesList.vue");
var _nodesListVueDefault = parcelHelpers.interopDefault(_nodesListVue);
var _nodeInspectorVue = require("./NodeInspector.vue");
var _nodeInspectorVueDefault = parcelHelpers.interopDefault(_nodeInspectorVue);

},{"./NodeHeader.vue":"iuSkW","./NodeItem.vue":"13skF","./NodesList.vue":"8cjPU","./NodeInspector.vue":"aYhhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuSkW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("77cba421d24293c5");
    if (script.__esModule) script = script.default;
    script.render = require("16482abb41e6e20c").render;
    script.staticRenderFns = require("16482abb41e6e20c").staticRenderFns;
    script._scopeId = "data-v-f72aad";
    script.__cssModules = require("937114d50b59862d").default;
    require("2802bc7441808190").default(script);
    script.__scopeId = "data-v-f72aad";
    script.__file = "NodeHeader.vue";
};
initialize();
exports.default = script;

},{"77cba421d24293c5":"ilXzO","16482abb41e6e20c":"ep6U6","937114d50b59862d":"dbjhY","2802bc7441808190":"4K5sz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilXzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dropUpDownButtonVue = require("../Button/DropUpDownButton.vue");
var _dropUpDownButtonVueDefault = parcelHelpers.interopDefault(_dropUpDownButtonVue);
var _colorMakerVue = require("../ColorMarker/ColorMaker.vue");
var _colorMakerVueDefault = parcelHelpers.interopDefault(_colorMakerVue);
var scriptExports = {
    name: "NodeHeader",
    components: {
        ColorMaker: (0, _colorMakerVueDefault.default),
        DropUpDownButton: (0, _dropUpDownButtonVueDefault.default)
    },
    props: {
        opened: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        hasChild: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        showHideBimObject: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        name: {
            type: String,
            default: function() {
                return "UNKNOWN NAME";
            }
        },
        color: {
            type: String,
            default: function() {
                return "";
            }
        }
    },
    computed: {
        isDropDownVisible: function() {
            if (!this.hasChild) return "hidden";
            return "";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../Button/DropUpDownButton.vue":"VEWXn","../ColorMarker/ColorMaker.vue":"4lSHp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ep6U6":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "node-header",
        on: {
            "click": function($event) {
                return _vm.$emit("click");
            }
        }
    }, [
        _c("drop-up-down-button", {
            staticClass: "node-list-icon",
            style: {
                visibility: _vm.isDropDownVisible
            },
            attrs: {
                "opened": _vm.opened
            },
            on: {
                "click": function($event) {
                    return _vm.$emit("toggle-display-child");
                }
            }
        }),
        _vm._v(" "),
        _c("div", {
            staticClass: "node-body"
        }, [
            _c("div", {
                staticClass: "node-name"
            }, [
                _vm._v("\n            " + _vm._s(_vm.name) + "\n        ")
            ]),
            _vm._v(" "),
            _c("color-maker", {
                staticClass: "node-color",
                attrs: {
                    "color": _vm.color
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dbjhY":[function() {},{}],"4K5sz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13skF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8b97f35a547dbfa3");
    if (script.__esModule) script = script.default;
    script.render = require("af354fc971c8eb41").render;
    script.staticRenderFns = require("af354fc971c8eb41").staticRenderFns;
    script._scopeId = "data-v-033f1f";
    script.__cssModules = require("49bcf573612288a5").default;
    require("13918af9330a60").default(script);
    script.__scopeId = "data-v-033f1f";
    script.__file = "NodeItem.vue";
};
initialize();
exports.default = script;

},{"8b97f35a547dbfa3":"fPdqq","af354fc971c8eb41":"1LfwN","49bcf573612288a5":"9Cw2B","13918af9330a60":"9vK61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPdqq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nodeHeaderVue = require("./NodeHeader.vue");
var _nodeHeaderVueDefault = parcelHelpers.interopDefault(_nodeHeaderVue);
var _genNodeRefJs = require("./genNodeRef.js");
var _genNodeRefJsDefault = parcelHelpers.interopDefault(_genNodeRefJs);
var scriptExports = {
    name: "NodeItem",
    components: {
        NodeHeader: (0, _nodeHeaderVueDefault.default)
    },
    data: function() {
        return {
            opened: false
        };
    },
    props: {
        activeNodesId: {
            type: Array,
            default: function() {
                return [];
            }
        },
        contextId: {
            type: String,
            required: true
        },
        nodes: {
            type: Object,
            default: function() {
                return {};
            }
        },
        nodeInfo: {
            type: Object
        },
        showHideBimObject: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        hasChildInContext: {
            type: Function,
            required: true
        }
    },
    computed: {
        isActive: function() {
            return this.activeNodesId.includes(this.nodeInfo.id);
        },
        isContext: function() {
            return this.nodeInfo.id === this.contextId;
        },
        name: function() {
            if (this.nodeInfo.hasOwnProperty("name") && typeof this.nodeInfo.name !== "undefined") return this.nodeInfo.name;
            return "Uknown Name";
        },
        color: function() {
            if (typeof this.nodeInfo !== "undefined" && this.nodeInfo.hasOwnProperty("color")) return this.nodeInfo.color;
        },
        isInContext: function() {
            if (typeof this.nodeInfo !== "undefined" && this.nodeInfo.hasOwnProperty("contextIds")) return this.nodeInfo.contextIds.hasOwnProperty(this.contextId) || this.contextId === this.nodeInfo.id;
            return false;
        },
        childrenIds () {
            return this.nodeInfo.childrenIds.filter(this.onlyUnique);
        }
    },
    methods: {
        genNodeRef: (0, _genNodeRefJsDefault.default),
        onlyUnique: function(value, index, self) {
            return self.indexOf(value) === index;
        },
        onHideBimObject: function(event) {
            if (this.showHideBimObject) {
                if (typeof event === "undefined") event = this.nodeInfo.id;
                this.emit("hide-bim-object", event);
            }
        },
        onToggleDisplayChildren: function() {
            // TO DO 
            // - peu etre mettre un state "loading" ici ou dans le NodeHeader
            // - test si on a pas deja pull les children ?
            this.$store.dispatch("pullChildren", this.nodeInfo.id).then(()=>{
                this.opened = !this.opened;
            }).catch((e)=>console.error(e));
        },
        onHeaderClick: function() {
            const event = {};
            event["contextId"] = this.contextId;
            event["nodeId"] = this.nodeInfo.id;
            this.$emit("click", event);
        },
        onHeaderRightClick: function() {
            const event = {};
            event["contextId"] = this.contextId;
            event["nodeId"] = this.nodeInfo.id;
            this.$emit("right-click", event);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./NodeHeader.vue":"iuSkW","./genNodeRef.js":"iO70g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iO70g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>genNodeRef);
function genNodeRef(nodeRef) {
    const res = nodeRef.get();
    res.childrenIds = nodeRef.childrenIds;
    res.contextIds = nodeRef.contextIds.get();
    // res.element = node.element;
    res.hasChildren = nodeRef.hasChildren;
    return res;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LfwN":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isInContext ? _c("div", [
        _c("node-header", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.name,
                    expression: "name"
                }
            ],
            class: {
                active: _vm.isActive,
                context: _vm.isContext
            },
            attrs: {
                "color": _vm.color,
                "has-child": _vm.hasChildInContext(_vm.nodeInfo.id, _vm.contextId),
                "name": _vm.name,
                "show-hide-bim-object": _vm.showHideBimObject,
                "opened": _vm.opened
            },
            on: {
                "click": _vm.onHeaderClick,
                "hide-bim-object": _vm.onHideBimObject,
                "right-click": _vm.onHeaderRightClick,
                "toggle-display-child": _vm.onToggleDisplayChildren
            }
        }),
        _vm._v(" "),
        _vm._l(_vm.childrenIds.filter(_vm.onlyUnique), function(child) {
            return _vm.opened ? _c("node-item", {
                key: child,
                staticClass: "node-item",
                attrs: {
                    "active-nodes-id": _vm.activeNodesId,
                    "context-id": _vm.contextId,
                    "nodes": _vm.nodes,
                    "node-info": _vm.genNodeRef(_vm.nodes[child]),
                    "has-child-in-context": _vm.hasChildInContext,
                    "show-hide-object": _vm.showHideBimObject
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("click", $event);
                    },
                    "hide-bim-object": function($event) {
                        return _vm.$emit("hide-bim-object", $event);
                    },
                    "right-click": function($event) {
                        return _vm.$emit("click-right", $event);
                    }
                }
            }) : _vm._e();
        })
    ], 2) : _vm._e();
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9Cw2B":[function() {},{}],"9vK61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cjPU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f78141d3b07d8fd3");
    if (script.__esModule) script = script.default;
    script.render = require("567fc5fcd068ba2d").render;
    script.staticRenderFns = require("567fc5fcd068ba2d").staticRenderFns;
    script._scopeId = "data-v-3e1928";
    script.__cssModules = require("de7fb882f5ef3200").default;
    require("6a1cc0f566a3e29d").default(script);
    script.__scopeId = "data-v-3e1928";
    script.__file = "NodesList.vue";
};
initialize();
exports.default = script;

},{"f78141d3b07d8fd3":"6LW6G","567fc5fcd068ba2d":"9Cyp2","de7fb882f5ef3200":"k9Pec","6a1cc0f566a3e29d":"2piHr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LW6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nodeItemVue = require("./NodeItem.vue");
var _nodeItemVueDefault = parcelHelpers.interopDefault(_nodeItemVue);
var _genNodeRef = require("./genNodeRef");
var _genNodeRefDefault = parcelHelpers.interopDefault(_genNodeRef);
var scriptExports = {
    name: "NodesList",
    components: {
        NodeItem: (0, _nodeItemVueDefault.default)
    },
    props: {
        showHideBimObject: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        contextsId: {
            type: Array,
            default: function() {
                return [];
            }
        },
        activeNodesId: {
            type: Array,
            required: true,
            default: function() {
                return [];
            }
        },
        nodes: {
            type: Object,
            default: function() {
                return {};
            }
        },
        hasChildInContext: {
            type: Function,
            required: true
        }
    },
    methods: {
        genNodeRef: (0, _genNodeRefDefault.default)
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./NodeItem.vue":"13skF","./genNodeRef":"iO70g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Cyp2":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "nodes-list"
    }, _vm._l(_vm.contextsId, function(id) {
        return _c("node-item", {
            key: id,
            staticClass: "nodes-list-context",
            attrs: {
                "active-nodes-id": _vm.activeNodesId,
                "context-id": id,
                "nodes": _vm.nodes,
                "node-info": _vm.genNodeRef(_vm.nodes[id]),
                "show-hide-bim-object": _vm.showHideBimObject,
                "has-child-in-context": _vm.hasChildInContext
            },
            on: {
                "click": function($event) {
                    return _vm.$emit("click", $event);
                },
                "hide-bim-object": function($event) {
                    return _vm.$emit("hide-bim-object", $event);
                },
                "right-click": function($event) {
                    return _vm.$emit("right-click", $event);
                }
            }
        });
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"k9Pec":[function() {},{}],"2piHr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYhhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("91591ef2fe55adb3");
    if (script.__esModule) script = script.default;
    script.render = require("90856a77f9ffd9f").render;
    script.staticRenderFns = require("90856a77f9ffd9f").staticRenderFns;
    script._scopeId = "data-v-8f77af";
    script.__cssModules = require("fd9c1d7aa9133a0c").default;
    require("d74418747cfea798").default(script);
    script.__scopeId = "data-v-8f77af";
    script.__file = "NodeInspector.vue";
};
initialize();
exports.default = script;

},{"91591ef2fe55adb3":"ldjIm","90856a77f9ffd9f":"fkv9F","fd9c1d7aa9133a0c":"fad6A","d74418747cfea798":"cDKpk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldjIm":[function(require,module,exports) {
// import deleteForEvener from "./remove-forever.svg";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "NodeInspector",
    props: {
        childInfo: {
            type: Array,
            default: function() {
                return [];
            }
        },
        defaultRelationName: {
            type: String,
            default: function() {
                return "";
            }
        },
        relationNames: {
            type: Array,
            default: function() {
                return [];
            }
        },
        editMode: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    data: function() {
        return {
            relationName: this.defaultRelationName,
            lstCompu: []
        };
    },
    watch: {
        relationName: {
            handler: function(newValue) {
                if (newValue !== "") this.$emit("get-children", newValue);
            }
        },
        childInfo: {
            handler: function() {
                this.reset();
            }
        }
    },
    methods: {
        moveUp (info, idx) {
            if (idx === 0) return;
            this.lstCompu.splice(idx, 1);
            this.lstCompu.splice(idx - 1, 0, info);
        },
        moveDown (info, idx) {
            if (this.lstCompu.length - 1 <= idx) return;
            this.lstCompu.splice(idx, 1);
            this.lstCompu.splice(idx + 1, 0, info);
        },
        sort () {
            this.lstCompu.sort((a, b)=>{
                return a.name ? a.name.localeCompare(b.name) : -1;
            });
        },
        returnSort () {
            return this.lstCompu;
        },
        reset () {
            console.log(this.childInfo);
            this.lstCompu = [];
            this.lstCompu.push(...this.childInfo);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkv9F":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "node-inspector"
    }, [
        _vm.relationNames.length > 0 ? _c("md-field", [
            _c("label", {
                attrs: {
                    "for": "relationNames"
                }
            }, [
                _vm._v("Relations")
            ]),
            _vm._v(" "),
            _c("md-select", {
                attrs: {
                    "id": "relationNames",
                    "name": "relationName"
                },
                model: {
                    value: _vm.relationName,
                    callback: function($$v) {
                        _vm.relationName = $$v;
                    },
                    expression: "relationName"
                }
            }, _vm._l(_vm.relationNames, function(relName, index) {
                return _c("md-option", {
                    key: index,
                    attrs: {
                        "value": relName
                    }
                }, [
                    _vm._v("\n        " + _vm._s(relName) + "\n      ")
                ]);
            }), 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("div", {
            staticClass: "node-inspector-children"
        }, [
            _vm.editMode ? _c("i", {
                staticClass: "material-icons node-inspector-btn-icon",
                on: {
                    "click": function($event) {
                        return _vm.sort();
                    }
                }
            }, [
                _vm._v("\n      sort_by_alpha\n    ")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.lstCompu, function(info, index) {
                return _c("div", {
                    key: info._server_id,
                    staticClass: "node-inspector-child"
                }, [
                    _vm.editMode ? [
                        _c("i", {
                            staticClass: "material-icons node-inspector-btn-icon",
                            class: {
                                "arrow-disable": index === 0
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.moveUp(info, index);
                                }
                            }
                        }, [
                            _vm._v("\n          keyboard_arrow_up\n        ")
                        ]),
                        _vm._v(" "),
                        _c("i", {
                            staticClass: "material-icons node-inspector-btn-icon",
                            class: {
                                "arrow-disable": _vm.lstCompu.length - 1 <= index
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.moveDown(info, index);
                                }
                            }
                        }, [
                            _vm._v("\n          keyboard_arrow_down\n        ")
                        ])
                    ] : _vm._e(),
                    _vm._v(" "),
                    info.hasOwnProperty("name") ? _c("div", {
                        staticClass: "node-inspector-child-name"
                    }, [
                        _vm._v("\n        " + _vm._s(info.name) + "\n      ")
                    ]) : _c("div", {
                        staticClass: "node-inspector-child-name"
                    }, [
                        _vm._v("\n        undefined\n      ")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "node-inspector-child-delete-buttons"
                    }, [
                        _c("md-menu", {
                            attrs: {
                                "md-direction": "bottom-start"
                            }
                        }, [
                            _c("i", {
                                staticClass: "material-icons node-inspector-btn-icon",
                                attrs: {
                                    "md-menu-trigger": ""
                                }
                            }, [
                                _vm._v("\n            more_vert\n          ")
                            ]),
                            _vm._v(" "),
                            _c("md-menu-content", [
                                _c("md-menu-item", {
                                    on: {
                                        "click": function($event) {
                                            return _vm.$emit("remove-from-graph", info.id);
                                        }
                                    }
                                }, [
                                    _vm._v("\n              Remove from graph\n            ")
                                ])
                            ], 1)
                        ], 1)
                    ], 1)
                ], 2);
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fad6A":[function() {},{}],"cDKpk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PwHi":[function(require,module,exports) {
/*
 * Copyright 2018. SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SideBar", ()=>(0, _sideBarVueDefault.default));
parcelHelpers.export(exports, "TopBar", ()=>(0, _topBarVueDefault.default));
parcelHelpers.export(exports, "ToolsBar", ()=>(0, _toolsBarVueDefault.default));
var _sideBarVue = require("./SideBar.vue");
var _sideBarVueDefault = parcelHelpers.interopDefault(_sideBarVue);
var _topBarVue = require("./TopBar.vue");
var _topBarVueDefault = parcelHelpers.interopDefault(_topBarVue);
var _toolsBarVue = require("./ToolsBar.vue");
var _toolsBarVueDefault = parcelHelpers.interopDefault(_toolsBarVue);

},{"./SideBar.vue":"24m3L","./TopBar.vue":"ljLIQ","./ToolsBar.vue":"i081M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24m3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a083cc6162571071");
    if (script.__esModule) script = script.default;
    script.render = require("b53f1cc7495f8b37").render;
    script.staticRenderFns = require("b53f1cc7495f8b37").staticRenderFns;
    script._scopeId = "data-v-ddae93";
    script.__cssModules = require("64f2f1ee92b7dd0d").default;
    require("c1a83e4f40d59491").default(script);
    script.__scopeId = "data-v-ddae93";
    script.__file = "SideBar.vue";
};
initialize();
exports.default = script;

},{"a083cc6162571071":"FF1D8","b53f1cc7495f8b37":"3QRcq","64f2f1ee92b7dd0d":"ksHn6","c1a83e4f40d59491":"djhTF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FF1D8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toolsBarVue = require("./ToolsBar.vue");
var _toolsBarVueDefault = parcelHelpers.interopDefault(_toolsBarVue);
var scriptExports = {
    name: "sideBar",
    components: {
        ToolsBar: (0, _toolsBarVueDefault.default)
    },
    props: {
        buttons: {
            type: Array,
            required: true
        },
        option: {
            type: Object,
            required: true
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./ToolsBar.vue":"i081M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i081M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7bf4f8985b911290");
    if (script.__esModule) script = script.default;
    script.render = require("23cfc8e44f08f844").render;
    script.staticRenderFns = require("23cfc8e44f08f844").staticRenderFns;
    script._scopeId = "data-v-84c4ba";
    script.__cssModules = require("b1d883990aab383c").default;
    require("973ea45f4509590e").default(script);
    script.__scopeId = "data-v-84c4ba";
    script.__file = "ToolsBar.vue";
};
initialize();
exports.default = script;

},{"7bf4f8985b911290":"9sscu","23cfc8e44f08f844":"lXolh","b1d883990aab383c":"gWdAy","973ea45f4509590e":"l9TEM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sscu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalBadgeIconButtonVue = require("../Button/SpinalBadgeIconButton.vue");
var _spinalBadgeIconButtonVueDefault = parcelHelpers.interopDefault(_spinalBadgeIconButtonVue);
var scriptExports = {
    name: "ToolsBar",
    components: {
        SpinalBadgeIconButton: (0, _spinalBadgeIconButtonVueDefault.default)
    },
    props: {
        buttons: {
            type: Array,
            required: true
        },
        option: {
            type: Object
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../Button/SpinalBadgeIconButton.vue":"7oX8R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXolh":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "tool-bar"
    }, _vm._l(_vm.buttons, function(b, index) {
        return _c("spinal-badge-icon-button", {
            key: index,
            attrs: {
                "background-color": b.button.backgroundColor,
                "font-color": b.button.fontColor,
                "icon": b.button.icon,
                "icon_type": b.button.icon_type,
                "tool-tip": b.button.toolTip,
                "tool-tip-direction": b.button.toolTipDirection,
                "badge_background_color": b.badge_content.backgroundColor,
                "badge_font_color": b.badge_content.fontColor,
                "badge_label": b.badge_content.label
            },
            on: {
                "click": function($event) {
                    return b.button.action(_vm.option);
                }
            }
        });
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gWdAy":[function() {},{}],"l9TEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QRcq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("tools-bar", {
        staticClass: "sideBar",
        attrs: {
            "buttons": _vm.buttons,
            "option": _vm.option
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ksHn6":[function() {},{}],"djhTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljLIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("adea55d4b227cc0d");
    if (script.__esModule) script = script.default;
    script.render = require("819ed7ea60484730").render;
    script.staticRenderFns = require("819ed7ea60484730").staticRenderFns;
    script._scopeId = "data-v-883feb";
    script.__cssModules = require("53cfa071b645259e").default;
    require("6fd9efe9542c75a6").default(script);
    script.__scopeId = "data-v-883feb";
    script.__file = "TopBar.vue";
};
initialize();
exports.default = script;

},{"adea55d4b227cc0d":"cKdob","819ed7ea60484730":"f89Fy","53cfa071b645259e":"7rFE9","6fd9efe9542c75a6":"cmqFT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKdob":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toolsBarVue = require("./ToolsBar.vue");
var _toolsBarVueDefault = parcelHelpers.interopDefault(_toolsBarVue);
var scriptExports = {
    name: "topBar",
    components: {
        ToolsBar: (0, _toolsBarVueDefault.default)
    },
    props: {
        buttons: {
            type: Array,
            required: true
        },
        option: {
            type: Object
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./ToolsBar.vue":"i081M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f89Fy":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("tools-bar", {
        staticClass: "top-bar",
        attrs: {
            "buttons": _vm.buttons,
            "option": _vm.option
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7rFE9":[function() {},{}],"cmqFT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFbps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("487c0a056888f9e0");
    if (script.__esModule) script = script.default;
    script.render = require("17c6f19d7188a20c").render;
    script.staticRenderFns = require("17c6f19d7188a20c").staticRenderFns;
    script._scopeId = "data-v-674810";
    script.__cssModules = require("769c1c98421810b1").default;
    require("aa0c02cbe69369b2").default(script);
    script.__scopeId = "data-v-674810";
    script.__file = "IconSelector.vue";
};
initialize();
exports.default = script;

},{"487c0a056888f9e0":"4XALj","17c6f19d7188a20c":"bKb3V","769c1c98421810b1":"lGGxL","aa0c02cbe69369b2":"1lrc5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XALj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("../Button");
var scriptExports = {
    name: "IconSelector",
    components: {
        SpinalIconButton: (0, _button.SpinalIconButton)
    },
    data: function() {
        return {
            selectedIcon: "",
            empty: "",
            open: false
        };
    },
    props: {
        icons: {
            type: Array,
            default: function() {
                return [];
            }
        },
        title: {
            type: String,
            default: function() {
                return "Chose an icon";
            }
        }
    },
    computed: {
        defaultIcon: function() {
            if (this.selectedIcon === "") return "add_circle_outline";
            return this.selectedIcon;
        },
        defaultToolTip: function() {
            if (this.selectedIcon === "") return "add icon";
            return "change icon";
        }
    },
    methods: {
        setSelectedIcon: function(icon) {
            this.selectedIcon = icon;
            this.$emit("icon-selected", this.selectedIcon);
            this.open = !this.open;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../Button":"569xW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKb3V":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("label", [
            _vm._v(_vm._s(_vm.title) + " : ")
        ]),
        _vm._v(" "),
        !_vm.open ? _c("spinal-icon-button", {
            attrs: {
                "icon": _vm.defaultIcon,
                "tool-tip": _vm.defaultToolTip
            },
            on: {
                "click": function($event) {
                    _vm.open = !_vm.open;
                }
            }
        }) : _c("div", {
            staticClass: "spinal-icon-selector"
        }, _vm._l(_vm.icons, function(icon, index) {
            return _c("spinal-icon-button", {
                key: index,
                staticClass: "spinal-icon-selector-item",
                attrs: {
                    "icon": icon
                },
                on: {
                    "click": function($event) {
                        return _vm.setSelectedIcon(icon);
                    }
                }
            });
        }), 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lGGxL":[function() {},{}],"1lrc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FRPw":[function(require,module,exports) {
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
parcelHelpers.export(exports, "SpinalList", ()=>(0, _spinalListVueDefault.default));
parcelHelpers.export(exports, "SpinalListItem", ()=>(0, _spinalListItemVueDefault.default));
var _spinalListVue = require("./SpinalList.vue");
var _spinalListVueDefault = parcelHelpers.interopDefault(_spinalListVue);
var _spinalListItemVue = require("./SpinalListItem.vue");
var _spinalListItemVueDefault = parcelHelpers.interopDefault(_spinalListItemVue);

},{"./SpinalList.vue":"iuI7X","./SpinalListItem.vue":"6STup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuI7X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e96df23553051274");
    if (script.__esModule) script = script.default;
    script.render = require("58fbf6f068835e3c").render;
    script.staticRenderFns = require("58fbf6f068835e3c").staticRenderFns;
    script._scopeId = "data-v-5ad796";
    script.__cssModules = require("b285aaa932ee0779").default;
    require("925f25a559ef0d21").default(script);
    script.__scopeId = "data-v-5ad796";
    script.__file = "SpinalList.vue";
};
initialize();
exports.default = script;

},{"e96df23553051274":"2HyEO","58fbf6f068835e3c":"8Oc49","b285aaa932ee0779":"f4TMA","925f25a559ef0d21":"1gN4X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2HyEO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalListItemVue = require("./SpinalListItem.vue");
var _spinalListItemVueDefault = parcelHelpers.interopDefault(_spinalListItemVue);
var scriptExports = {
    name: "SpinalList",
    components: {
        SpinalListItem: (0, _spinalListItemVueDefault.default)
    },
    props: {
        items: {
            type: Array,
            default: function() {
                return [
                    {
                        parent: {
                            parent: null,
                            value: null
                        },
                        item: {},
                        children: [],
                        value: ""
                    }
                ];
            }
        },
        value: {
            type: Object
        }
    },
    methods: {
        onItemSelected: function(event) {
            this.$emit("item-selected", event);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalListItem.vue":"6STup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6STup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("890665bb3e1a357b");
    if (script.__esModule) script = script.default;
    script.render = require("33ad50355af0fe1f").render;
    script.staticRenderFns = require("33ad50355af0fe1f").staticRenderFns;
    script._scopeId = "data-v-58725e";
    script.__cssModules = require("fc2b9d1bc6b5f391").default;
    require("bcd62259d7732d82").default(script);
    script.__scopeId = "data-v-58725e";
    script.__file = "SpinalListItem.vue";
};
initialize();
exports.default = script;

},{"890665bb3e1a357b":"fPHCn","33ad50355af0fe1f":"9mVwX","fc2b9d1bc6b5f391":"gixF5","bcd62259d7732d82":"dzbjI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPHCn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalListVue = require("./SpinalList.vue");
var _spinalListVueDefault = parcelHelpers.interopDefault(_spinalListVue);
var _dropUpDownButtonVue = require("../Button/DropUpDownButton.vue");
var _dropUpDownButtonVueDefault = parcelHelpers.interopDefault(_dropUpDownButtonVue);
var scriptExports = {
    name: "SpinalListItem",
    components: {
        DropUpDownButton: (0, _dropUpDownButtonVueDefault.default),
        SpinalList: (0, _spinalListVueDefault.default)
    },
    props: {
        parent: {
            parent: null,
            value: null
        },
        item: {},
        value: "",
        parentActive: false
    },
    data: function() {
        return {
            opened: false,
            active: false
        };
    },
    computed: {
        children: function() {
            if (this.item.hasOwnProperty("children")) return this.item.children;
            return [];
        }
    },
    methods: {
        onClick: function() {
            this.active = !this.active;
            this.$emit("selected", {
                value: {
                    id: this.item.id,
                    value: this.value
                },
                parent: this.parent
            });
        },
        onChildClick: function(event) {
            this.active = false;
            this.$emit("selected", event);
        },
        isActive: function() {
            return this.active && !this.parentActive;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalList.vue":"iuI7X","../Button/DropUpDownButton.vue":"VEWXn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mVwX":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "list-item"
    }, [
        _c("div", {
            staticClass: "item-header"
        }, [
            _vm.children.length > 0 ? _c("drop-up-down-button", {
                staticClass: "node-list-icon",
                style: {
                    visibility: _vm.isDropDownVisible
                },
                attrs: {
                    "opened": _vm.opened
                },
                on: {
                    "click": function($event) {
                        _vm.opened = !_vm.opened;
                    }
                }
            }) : _vm._e(),
            _vm._v(" "),
            _c("div", {
                class: {
                    active: _vm.isActive()
                },
                on: {
                    "click": _vm.onClick
                }
            }, [
                _vm._v("\n            " + _vm._s(_vm.item.name) + "\n        ")
            ])
        ], 1),
        _vm._v(" "),
        _vm._l(_vm.children, function(child, index) {
            return _vm.opened ? _c("spinal-list-item", {
                staticClass: "list-item-child",
                attrs: {
                    "parent-active": _vm.active,
                    "item": child,
                    "value": child.value,
                    "parent": {
                        value: _vm.value,
                        parent: _vm.parent
                    }
                },
                on: {
                    "selected": _vm.onChildClick
                }
            }) : _vm._e();
        })
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gixF5":[function() {},{}],"dzbjI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Oc49":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", _vm._l(_vm.items, function(item, index) {
        return _c("spinal-list-item", {
            attrs: {
                "parent": {
                    parent: _vm.parent,
                    value: _vm.value
                },
                "value": item.value,
                "item": item
            },
            on: {
                "selected": _vm.onItemSelected
            }
        });
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"f4TMA":[function() {},{}],"1gN4X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-graph-manager.65828b50.js.map
