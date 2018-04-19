(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Vue // late bind
var version
var map = (window.__VUE_HOT_MAP__ = Object.create(null))
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if(map[id]) { return }
  
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Check if module is recorded
 *
 * @param {String} id
 */

exports.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cahced together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }
      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)
      instance.$forceUpdate()
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

},{}],2:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],3:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-c5bd2e84] {\n  height: 100vh;\n  overflow: hidden;\n}\n.app-header[data-v-c5bd2e84] {\n  color: black;\n  background-color: #fff;\n}\n.md-app-content[data-v-c5bd2e84] {\n  height: calc(100vh - 64px) !important;\n  position: relative;\n  padding: 0;\n}\n.md-app-container {\n  overflow: hidden;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpinalHeader = require("./header/SpinalHeader.vue");

var _SpinalHeader2 = _interopRequireDefault(_SpinalHeader);

var _HeaderCtrl = require("./header/HeaderCtrl.vue");

var _HeaderCtrl2 = _interopRequireDefault(_HeaderCtrl);

var _SpinalRightSideBar = require("./RightSideBar/SpinalRightSideBar.vue");

var _SpinalRightSideBar2 = _interopRequireDefault(_SpinalRightSideBar);

var _MainContent = require("./MainContent/MainContent.vue");

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  data: function data() {
    return {
      menuVisibleObs: false
    };
  },

  computed: {
    menuVisible: {
      get: function get() {
        return this.menuVisibleObs;
      },
      set: function set(newValue) {
        _HeaderCtrl2.default.setViewMenu(newValue);
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var vm = this;
    this.$subscribeTo(_HeaderCtrl2.default.getObservable(), function (val) {
      vm.menuVisibleObs = val;
    });
  },


  components: { spinalHeader: _SpinalHeader2.default, SpinalRightSideBar: _SpinalRightSideBar2.default, MainContent: _MainContent2.default }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"app-header"},[_c('spinalHeader')],1),_vm._v(" "),_c('md-app-drawer',{staticClass:"md-right",attrs:{"md-active":_vm.menuVisible},on:{"update:mdActive":function($event){_vm.menuVisible=$event}}},[_c('SpinalRightSideBar')],1),_vm._v(" "),_c('md-app-content',[_c('MainContent')],1)],1)],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-c5bd2e84"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5bd2e84", __vue__options__)
  } else {
    hotAPI.reload("data-v-c5bd2e84", __vue__options__)
  }
})()}

},{"./MainContent/MainContent.vue":6,"./RightSideBar/SpinalRightSideBar.vue":7,"./header/HeaderCtrl.vue":10,"./header/SpinalHeader.vue":11,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],4:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.ForgeExtentionManager = new (function () {
  function ForgeExtentionManager() {
    _classCallCheck(this, ForgeExtentionManager);

    console.log("create ForgeExtentionManager");
    this.extentions = [];
  }

  _createClass(ForgeExtentionManager, [{
    key: "getExtentions",
    value: function getExtentions() {
      return this.extentions;
    }
  }, {
    key: "addExtention",
    value: function addExtention(name) {
      this.extentions.push(name);
    }
  }]);

  return ForgeExtentionManager;
}())();
exports.default = ForgeExtentionManager;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38d1b1b8", __vue__options__)
  } else {
    hotAPI.reload("data-v-38d1b1b8", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":1}],5:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spinal = require("../SpinalSystem/spinal.js");

var _spinal2 = _interopRequireDefault(_spinal);

var _ForgeExtentionManager = require("./ForgeExtentionManager.vue");

var _ForgeExtentionManager2 = _interopRequireDefault(_ForgeExtentionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = new (function () {
  function ForgeViewer() {
    _classCallCheck(this, ForgeViewer);

    console.log("forge");
    this.oViewer;
    this.config = {};
    this.options = {
      env: "Local",
      docid: "",
      useADP: false
    };
    this.docs = [];
    _ForgeExtentionManager2.default.addExtention("Autodesk.ADN.Viewing.Extension.Color");
  }

  _createClass(ForgeViewer, [{
    key: "start_viewer",
    value: function start_viewer(dom) {
      var _this = this;

      var _self = this;

      _spinal2.default.getModel().then(function (forgefile) {
        _this.forgeFile = forgefile;
        _this.docs = _this.forgeFile._children.get();
        if (_this.docs.length != 0) {
          var path = _this.docs[0].path;
          for (var i = 0; i < _this.docs.length; i++) {
            if (/.+\.svf$/.test(_this.docs[i].path)) {
              path = _this.docs[i].path;
              break;
            }
          }
          path = window.location.origin + path;
          _this.options.docid = path;
        }
        console.log();
        _this.oViewer = new Autodesk.Viewing.Private.GuiViewer3D(dom, _this.config);
        Autodesk.Viewing.Initializer(_this.options, function () {
          _this.oViewer.initialize();
          _this.oViewer.loadModel(_this.options.docid, _this.config, onItemLoadSuccess, onDocumentLoadFailure);
        });
        function onDocumentLoadFailure(viewerErrorCode) {
          console.error("onDocumentLoadFailure() - errorCode:" + viewerErrorCode);
        }

        function onItemLoadSuccess(viewer, item) {
          _self.oViewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoadEvent);
        }
        function onGeometryLoadEvent() {
          _self.oViewer.removeEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoadEvent);
          var extensions = _ForgeExtentionManager2.default.getExtentions();

          for (var i = 0; i < extensions.length; i++) {
            _self.oViewer.loadExtension(extensions[i], _self.options);
          }
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }]);

  return ForgeViewer;
}())();
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16323272", __vue__options__)
  } else {
    hotAPI.reload("data-v-16323272", __vue__options__)
  }
})()}

},{"../SpinalSystem/spinal.js":8,"./ForgeExtentionManager.vue":4,"vue":"vue","vue-hot-reload-api":1}],6:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForgeViewer = require("./ForgeViewer.vue");

var _ForgeViewer2 = _interopRequireDefault(_ForgeViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  data: function data() {
    return {};
  },

  computed: {},
  created: function created() {
    var vm = this;
    console.log("created", this.$el);
  },
  mounted: function mounted() {
    var vm = this;
    _ForgeViewer2.default.start_viewer(this.$el);
    console.log(this);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"autodesk_forge_viewer"}})}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-4aa1cf6e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aa1cf6e", __vue__options__)
  } else {
    hotAPI.reload("data-v-4aa1cf6e", __vue__options__)
  }
})()}

},{"./ForgeViewer.vue":5,"vue":"vue","vue-hot-reload-api":1}],7:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-5d167a8e] {\n  height: 100vh;\n}\n.app-header[data-v-5d167a8e] {\n  color: black;\n  background-color: #fff;\n}\n.color_black .md-button[data-v-5d167a8e],\n.color_black .md-icon[data-v-5d167a8e],\n.color_black div[data-v-5d167a8e] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinal = require("../SpinalSystem/spinal.js");

var _spinal2 = _interopRequireDefault(_spinal);

var _HeaderCtrl = require("../header/HeaderCtrl.vue");

var _HeaderCtrl2 = _interopRequireDefault(_HeaderCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "SpinalRightSideBar",
  data: function data() {
    return {
      toggleMenu: function toggleMenu() {
        _HeaderCtrl2.default.toggleMenu();
      },
      go_toDrive: function go_toDrive() {
        window.location = "/html/drive/";
      },
      sign_out: function sign_out() {
        _spinal2.default.signOut();
        window.location = "/html/drive/#!/login');";
      }
    };
  },
  created: function created() {
    var vm = this;
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('md-toolbar',{staticClass:"app-header",attrs:{"md-elevation":"0"}},[_c('div',{staticClass:"md-toolbar-row"},[_c('div',{staticClass:"md-toolbar-section-start"},[_c('img',{staticStyle:{"height":"42px","margin-top":"4px"},attrs:{"src":"dist/assets/img/SpinalBIMViewerLogo.png","alt":"SpinalBIM Vieewer"}})]),_vm._v(" "),_c('div',{staticClass:"md-toolbar-section-end"},[_c('md-button',{staticClass:"md-icon-button color_black",on:{"click":_vm.toggleMenu}},[_c('md-icon',[_vm._v("menu")])],1)],1)])]),_vm._v(" "),_c('md-list',[_c('md-list-item',{on:{"click":_vm.go_toDrive}},[_c('md-icon',[_vm._v("keyboard_return")]),_vm._v(" "),_c('span',{staticClass:"md-list-item-text"},[_vm._v("Return to SpinalBIM Drive")])],1),_vm._v(" "),_c('md-list-item',{on:{"click":_vm.sign_out}},[_c('md-icon',[_vm._v("power_settings_new")]),_vm._v(" "),_c('span',{staticClass:"md-list-item-text"},[_vm._v("Sign out")])],1)],1)],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-5d167a8e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d167a8e", __vue__options__)
  } else {
    hotAPI.reload("data-v-5d167a8e", __vue__options__)
  }
})()}

},{"../SpinalSystem/spinal.js":8,"../header/HeaderCtrl.vue":10,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("spinal-core-connectorjs");

var _q = require("q");

var Q = _interopRequireWildcard(_q);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var spinal = function () {
  function spinal() {
    _classCallCheck(this, spinal);

    console.log("TEST construct spinal");
    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
  }

  _createClass(spinal, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.promiseinit) return this.promiseinit.promise;
      this.promiseinit = Q.defer();

      var user = this.getUser();
      if (this.user.username) {
        SpinalUserManager.get_user_id("http://" + window.location.host, this.user.username, this.user.password, function (response) {
          var id = parseInt(response);
          _this.conn = spinalCore.connect("http://" + id + ":" + _this.user.password + "@" + window.location.host + "/");
          _this.promiseinit.resolve();
        }, function () {
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        });
      } else window.location = "/html/drive/";
      return this.promiseinit.promise;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      if (!this.user.username) {
        var _user = window.localStorage.getItem("spinalhome_cfg");
        if (_user) {
          this.user = JSON.parse(atob(_user));
        }
      }
      return this.user;
    }
  }, {
    key: "getModel",
    value: function getModel() {
      var _this2 = this;

      if (this.promiseModel) {
        return this.promiseModel.promise;
      }
      this.promiseModel = Q.defer();
      this.init().then(function () {
        var path = getParameterByName("path");
        if (!path) {
          window.location = "/html/drive/";
        }
        path = atob(path);
        spinalCore.load(_this2.conn, path, function (forgefile) {
          _this2.model = forgefile;
          _this2.promiseModel.resolve(_this2.model);
          // defer.reject();
        }, function () {
          window.location = "/html/drive/";
          // defer.reject();
        });
      }, function () {
        window.location = "/html/drive/";
        // defer.reject();
      });
      return this.promiseModel.promise;
    }
  }, {
    key: "_waitModelRdyRec",
    value: function _waitModelRdyRec(model, promise) {
      var _this3 = this;

      if (!model._server_id || FileSystem._tmp_objects[model._server_id]) {
        setTimeout(function () {
          _this3._waitModelRdyRec.call(_this3, model);
        }, 100);
      }
      promise.resolve(model);
    }
  }, {
    key: "waitModelRdy",
    value: function waitModelRdy(model) {
      var defer = Q.defer();
      this._waitModelRdyRec.call(this, model, defer);

      return defer.promise;
    }
  }, {
    key: "loadModelPtr",
    value: function loadModelPtr(model) {
      this.modelsDictionary[model._server_id] = Q.defer();
      if (this.modelsDictionary[model._server_id]) {
        return this.modelsDictionary[model._server_id].promise;
      }
      this.modelsDictionary[model._server_id] = Q.defer();

      return this.modelsDictionary[model._server_id].promise;
    }
  }, {
    key: "signOut",
    value: function signOut() {
      window.localStorage.setItem("spinalhome_cfg", "");
    }
  }]);

  return spinal;
}();

exports.default = new spinal();

},{"q":"q","spinal-core-connectorjs":"spinal-core-connectorjs"}],9:[function(require,module,exports){

},{}],10:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = new (function () {
  function HeaderCtrl() {
    var _this = this;

    _classCallCheck(this, HeaderCtrl);

    var menuVisible = false;
    this.menuVisibleObservable = _Rx2.default.Observable.create(function (observer) {
      _this.toggleMenu = function () {
        menuVisible = !menuVisible;
        console.log("toggleMenu", menuVisible);
        observer.next(menuVisible);
      };
      _this.setViewMenu = function (bool) {
        menuVisible = bool;
        console.log("toggleMenu", bool);
        observer.next(menuVisible);
      };
    });
    console.log(this.menuVisibleObservable);
  }

  _createClass(HeaderCtrl, [{
    key: "getObservable",
    value: function getObservable() {
      return this.menuVisibleObservable;
    }
  }]);

  return HeaderCtrl;
}())();
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4781ae12", __vue__options__)
  } else {
    hotAPI.reload("data-v-4781ae12", __vue__options__)
  }
})()}

},{"rxjs/Rx":"rxjs/Rx","vue":"vue","vue-hot-reload-api":1}],11:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".md-button[data-v-007dbc79],\n.md-icon[data-v-007dbc79],\ndiv[data-v-007dbc79] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinal = require("../SpinalSystem/spinal.js");

var _spinal2 = _interopRequireDefault(_spinal);

var _HeaderCtrl = require("../header/HeaderCtrl.vue");

var _HeaderCtrl2 = _interopRequireDefault(_HeaderCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "spinalHeader",
  data: function data() {
    return {
      toggleMenu: function toggleMenu() {
        _HeaderCtrl2.default.toggleMenu();
      },
      username: ""
    };
  },
  created: function created() {
    var vm = this;
    vm.username = _spinal2.default.getUser().username;
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-toolbar-row"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"md-toolbar-section-end"},[_vm._v("\n    "+_vm._s(_vm.username)+"\n    "),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.toggleMenu}},[_c('md-icon',[_vm._v("menu")])],1)],1)])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-toolbar-section-start"},[_c('img',{staticStyle:{"height":"42px","margin-top":"4px"},attrs:{"src":"dist/assets/img/SpinalBIMViewerLogo.png","alt":"SpinalBIM Viewer"}})])}]
__vue__options__._scopeId = "data-v-007dbc79"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-007dbc79", __vue__options__)
  } else {
    hotAPI.reload("data-v-007dbc79", __vue__options__)
  }
})()}

},{"../SpinalSystem/spinal.js":8,"../header/HeaderCtrl.vue":10,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],12:[function(require,module,exports){
"use strict";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = require("./App.vue");

var _App2 = _interopRequireDefault(_App);

var _vueMaterial = require("vue-material");

var _vueMaterial2 = _interopRequireDefault(_vueMaterial);

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _vueRx = require("vue-rx");

var _vueRx2 = _interopRequireDefault(_vueRx);

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRx2.default, _Rx2.default);

_vue2.default.use(_vueMaterial2.default);

new _vue2.default({
  el: "#app",
  render: function render(h) {
    return h(_App2.default);
  }
});

},{"./App.vue":3,"./app.css":9,"rxjs/Rx":"rxjs/Rx","vue":"vue","vue-material":"vue-material","vue-rx":"vue-rx"}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlaWZ5L2xpYi9pbnNlcnQtY3NzLmpzIiwic3JjL0FwcC52dWU/NmZiYzU4NzMiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLnZ1ZT83NDM5ZDQ2NiIsInNyYy9NYWluQ29udGVudC9Gb3JnZVZpZXdlci52dWU/YTRkN2FjMmEiLCJzcmMvTWFpbkNvbnRlbnQvTWFpbkNvbnRlbnQudnVlPzQ5MTlhYzM3Iiwic3JjL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlPzRlZTk2NzE3Iiwic3JjL1NwaW5hbFN5c3RlbS9zcGluYWwuanMiLCJzcmMvYXBwLmNzcyIsInNyYy9oZWFkZXIvSGVhZGVyQ3RybC52dWU/NjBmNWU1MTYiLCJzcmMvaGVhZGVyL1NwaW5hbEhlYWRlci52dWU/MDUyYTY4MWIiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUEzQkE7Ozs7QUEzQkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBWkE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTs7OztBQUNBOzs7Ozs7Ozs7QUFHQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7O0FBWkE7QUFBQTtBQUFBO0FBYUE7O0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXpFQTs7QUFBQTtBQUFBOzs7OztBQVJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUE7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBOzs7OztBQVBBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0NBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBR0E7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LENBQXNCLE1BQU0sVUFBNUIsRUFBd0MsT0FBL0M7QUFDRDs7OzhCQUNTO0FBQ1IsYUFBTyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLGdCQUE1QixFQUE4QyxFQUE5QztBQUNEOzs7Ozs7a0JBR1ksSUFBSSxNQUFKLEU7OztBQzFIZjs7Ozs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQTs7OztBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTs7OztBQXJCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUZBLGNBQUksR0FBSjs7QUFJQSxjQUFJLEdBQUo7O0FBRUEsa0JBQVE7QUFDTixNQUFJLE1BREU7QUFFTixVQUFRO0FBQUEsV0FBSyxnQkFBTDtBQUFBO0FBRkYsQ0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9ICh3aW5kb3cuX19WVUVfSE9UX01BUF9fID0gT2JqZWN0LmNyZWF0ZShudWxsKSlcbnZhciBpbnN0YWxsZWQgPSBmYWxzZVxudmFyIGlzQnJvd3NlcmlmeSA9IGZhbHNlXG52YXIgaW5pdEhvb2tOYW1lID0gJ2JlZm9yZUNyZWF0ZSdcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHZ1ZSwgYnJvd3NlcmlmeSkge1xuICBpZiAoaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAgICdvbmx5IGNvbXBhdGlibGUgd2l0aCBWdWUuanMgY29yZSBeMi4wLjAuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY29yZCBmb3IgYSBob3QgbW9kdWxlLCB3aGljaCBrZWVwcyB0cmFjayBvZiBpdHMgY29uc3RydWN0b3JcbiAqIGFuZCBpbnN0YW5jZXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZXhwb3J0cy5jcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYobWFwW2lkXSkgeyByZXR1cm4gfVxuICBcbiAgdmFyIEN0b3IgPSBudWxsXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIEN0b3IgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICBtYXBbaWRdID0ge1xuICAgIEN0b3I6IEN0b3IsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBpbnN0YW5jZXM6IFtdXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBtb2R1bGUgaXMgcmVjb3JkZWRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqL1xuXG5leHBvcnRzLmlzUmVjb3JkZWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBbaWRdICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGlmIChjdHggJiYgaW5zdGFuY2VzLmluZGV4T2YoY3R4LnBhcmVudCkgPCAwKSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKGN0eC5wYXJlbnQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgICAgIGlmICghcmVjb3JkLkN0b3IpIHtcbiAgICAgICAgcmVjb3JkLkN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnB1c2godGhpcylcbiAgICB9KVxuICAgIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogSW5qZWN0IGEgaG9vayB0byBhIGhvdCByZWxvYWRhYmxlIGNvbXBvbmVudCBzbyB0aGF0XG4gKiB3ZSBjYW4ga2VlcCB0cmFjayBvZiBpdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAqL1xuXG5mdW5jdGlvbiBpbmplY3RIb29rKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpID8gZXhpc3RpbmcuY29uY2F0KGhvb2spIDogW2V4aXN0aW5nLCBob29rXVxuICAgIDogW2hvb2tdXG59XG5cbmZ1bmN0aW9uIHRyeVdyYXAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKGlkLCBhcmcpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIFZ1ZSBjb21wb25lbnQgaG90LXJlbG9hZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPcHRpb25zIChvbGRPcHRpb25zLCBuZXdPcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvbGRPcHRpb25zKSB7XG4gICAgaWYgKCEoa2V5IGluIG5ld09wdGlvbnMpKSB7XG4gICAgICBkZWxldGUgb2xkT3B0aW9uc1trZXldXG4gICAgfVxuICB9XG4gIGZvciAodmFyIGtleSQxIGluIG5ld09wdGlvbnMpIHtcbiAgICBvbGRPcHRpb25zW2tleSQxXSA9IG5ld09wdGlvbnNba2V5JDFdXG4gIH1cbn1cblxuZXhwb3J0cy5yZXJlbmRlciA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmICghb3B0aW9ucykge1xuICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgfVxuICBpZiAocmVjb3JkLkN0b3IpIHtcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgICAvLyByZXNldCBzdGF0aWMgdHJlZXNcbiAgICAgIC8vIHByZSAyLjUsIGFsbCBzdGF0aWMgdHJlZXMgYXJlIGNhaGNlZCB0b2dldGhlciBvbiB0aGUgaW5zdGFuY2VcbiAgICAgIGlmIChpbnN0YW5jZS5fc3RhdGljVHJlZXMpIHtcbiAgICAgICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4wXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIHBvc3QgMi41LjQ6IHYtb25jZSB0cmVlcyBhcmUgY2FjaGVkIG9uIGluc3RhbmNlLl9zdGF0aWNUcmVlcy5cbiAgICAgIC8vIFB1cmUgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgb24gdGhlIHN0YXRpY1JlbmRlckZucyBhcnJheVxuICAgICAgLy8gKGJvdGggYWxyZWFkeSByZXNldCBhYm92ZSlcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBmdW5jdGlvbmFsIG9yIG5vIGluc3RhbmNlIGNyZWF0ZWQgeWV0XG4gICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuXG4gICAgLy8gaGFuZGxlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHJlLXJlbmRlclxuICAgIGlmIChyZWNvcmQub3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyByZXJlbmRlciB3aXRoIGZ1bGwgb3B0aW9uc1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRlbXBsYXRlLW9ubHkgcmVyZW5kZXIuXG4gICAgICAgIC8vIG5lZWQgdG8gaW5qZWN0IHRoZSBzdHlsZSBpbmplY3Rpb24gY29kZSBmb3IgQ1NTIG1vZHVsZXNcbiAgICAgICAgLy8gdG8gd29yayBwcm9wZXJseS5cbiAgICAgICAgdmFyIGluamVjdFN0eWxlcyA9IHJlY29yZC5vcHRpb25zLl9pbmplY3RTdHlsZXNcbiAgICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKGN0eClcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVjb3JkLm9wdGlvbnMuX0N0b3IgPSBudWxsXG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQub3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0cy5yZWxvYWQgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICAgIH1cbiAgICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgICBpZiAocmVjb3JkLkN0b3IpIHtcbiAgICAgIGlmICh2ZXJzaW9uWzFdIDwgMikge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICAgICAgcmVjb3JkLkN0b3IuZXh0ZW5kT3B0aW9ucyA9IG9wdGlvbnNcbiAgICAgIH1cbiAgICAgIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gICAgICByZWNvcmQuQ3Rvci5vcHRpb25zID0gbmV3Q3Rvci5vcHRpb25zXG4gICAgICByZWNvcmQuQ3Rvci5jaWQgPSBuZXdDdG9yLmNpZFxuICAgICAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgICAgIGlmIChuZXdDdG9yLnJlbGVhc2UpIHtcbiAgICAgICAgLy8gdGVtcG9yYXJ5IGdsb2JhbCBtaXhpbiBzdHJhdGVneSB1c2VkIGluIDwgMi4wLjAtYWxwaGEuNlxuICAgICAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuJHZub2RlICYmIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0KSB7XG4gICAgICBpbnN0YW5jZS4kdm5vZGUuY29udGV4dC4kZm9yY2VVcGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdSb290IG9yIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UgbW9kaWZpZWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH0pXG59KVxuIiwidmFyIGluc2VydGVkID0gZXhwb3J0cy5jYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZXhwb3J0cy5pbnNlcnQgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm4gbm9vcFxuICBpbnNlcnRlZFtjc3NdID0gdHJ1ZVxuXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpXG5cbiAgaWYgKCd0ZXh0Q29udGVudCcgaW4gZWxlbSkge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChlbGVtKVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICBpbnNlcnRlZFtjc3NdID0gZmFsc2VcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCJcbiAgICAgICB2LWNsb2FrPlxuICAgIDxtZC1hcHAgbWQtd2F0ZXJmYWxsXG4gICAgICAgICAgICBtZC1tb2RlPVwiZml4ZWRcIj5cbiAgICAgIDxtZC1hcHAtdG9vbGJhciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cbiAgICAgICAgPHNwaW5hbEhlYWRlciAvPlxuICAgICAgPC9tZC1hcHAtdG9vbGJhcj5cbiAgICAgIDxtZC1hcHAtZHJhd2VyIGNsYXNzPVwibWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgOm1kLWFjdGl2ZS5zeW5jPVwibWVudVZpc2libGVcIj5cbiAgICAgICAgPFNwaW5hbFJpZ2h0U2lkZUJhciAvPlxuICAgICAgPC9tZC1hcHAtZHJhd2VyPlxuXG4gICAgICA8bWQtYXBwLWNvbnRlbnQ+XG4gICAgICAgIDxNYWluQ29udGVudCAvPlxuICAgICAgPC9tZC1hcHAtY29udGVudD5cbiAgICA8L21kLWFwcD5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3BpbmFsSGVhZGVyIGZyb20gXCIuL2hlYWRlci9TcGluYWxIZWFkZXIudnVlXCI7XG5pbXBvcnQgSGVhZGVyQ3RybCBmcm9tIFwiLi9oZWFkZXIvSGVhZGVyQ3RybC52dWVcIjtcbmltcG9ydCBTcGluYWxSaWdodFNpZGVCYXIgZnJvbSBcIi4vUmlnaHRTaWRlQmFyL1NwaW5hbFJpZ2h0U2lkZUJhci52dWVcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9NYWluQ29udGVudC9NYWluQ29udGVudC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZW51VmlzaWJsZU9iczogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG1lbnVWaXNpYmxlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZU9icztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIEhlYWRlckN0cmwuc2V0Vmlld01lbnUobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyB2YXIgdm0gPSB0aGlzO1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdGhpcy4kc3Vic2NyaWJlVG8oSGVhZGVyQ3RybC5nZXRPYnNlcnZhYmxlKCksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgdm0ubWVudVZpc2libGVPYnMgPSB2YWw7XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50czogeyBzcGluYWxIZWFkZXIsIFNwaW5hbFJpZ2h0U2lkZUJhciwgTWFpbkNvbnRlbnQgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FwcCAubWQtYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1kLWFwcC1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuPC9zdHlsZT5cbjxzdHlsZT5cbi5tZC1hcHAtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0Plxud2luZG93LkZvcmdlRXh0ZW50aW9uTWFuYWdlciA9IG5ldyBjbGFzcyBGb3JnZUV4dGVudGlvbk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBGb3JnZUV4dGVudGlvbk1hbmFnZXJcIik7XG4gICAgdGhpcy5leHRlbnRpb25zID0gW107XG4gIH1cblxuICBnZXRFeHRlbnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudGlvbnM7XG4gIH1cblxuICBhZGRFeHRlbnRpb24obmFtZSkge1xuICAgIHRoaXMuZXh0ZW50aW9ucy5wdXNoKG5hbWUpO1xuICB9XG59KCk7XG5leHBvcnQgZGVmYXVsdCBGb3JnZUV4dGVudGlvbk1hbmFnZXI7XG48L3NjcmlwdD5cbiIsIlxuPHRlbXBsYXRlPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbCBmcm9tIFwiLi4vU3BpbmFsU3lzdGVtL3NwaW5hbC5qc1wiO1xuaW1wb3J0IEZvcmdlRXh0ZW50aW9uTWFuYWdlciBmcm9tIFwiLi9Gb3JnZUV4dGVudGlvbk1hbmFnZXIudnVlXCI7XG4vLyBpbXBvcnQgRm9yZ2VFeHRlbnRpb24gZnJvbSBcIi4vRm9yZ2VFeHRlbnRpb24udnVlXCI7XG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgRm9yZ2VWaWV3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImZvcmdlXCIpO1xuICAgIHRoaXMub1ZpZXdlcjtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGVudjogXCJMb2NhbFwiLFxuICAgICAgZG9jaWQ6IFwiXCIsXG4gICAgICB1c2VBRFA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICBGb3JnZUV4dGVudGlvbk1hbmFnZXIuYWRkRXh0ZW50aW9uKFwiQXV0b2Rlc2suQUROLlZpZXdpbmcuRXh0ZW5zaW9uLkNvbG9yXCIpO1xuICB9XG4gIHN0YXJ0X3ZpZXdlcihkb20pIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgc3BpbmFsXG4gICAgICAuZ2V0TW9kZWwoKVxuICAgICAgLnRoZW4oZm9yZ2VmaWxlID0+IHtcbiAgICAgICAgdGhpcy5mb3JnZUZpbGUgPSBmb3JnZWZpbGU7XG4gICAgICAgIHRoaXMuZG9jcyA9IHRoaXMuZm9yZ2VGaWxlLl9jaGlsZHJlbi5nZXQoKTtcbiAgICAgICAgaWYgKHRoaXMuZG9jcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIHZhciBwYXRoID0gdGhpcy5kb2NzWzBdLnBhdGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRvY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgvLitcXC5zdmYkLy50ZXN0KHRoaXMuZG9jc1tpXS5wYXRoKSkge1xuICAgICAgICAgICAgICBwYXRoID0gdGhpcy5kb2NzW2ldLnBhdGg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHBhdGg7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmRvY2lkID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICB0aGlzLm9WaWV3ZXIgPSBuZXcgQXV0b2Rlc2suVmlld2luZy5Qcml2YXRlLkd1aVZpZXdlcjNEKFxuICAgICAgICAgIGRvbSxcbiAgICAgICAgICB0aGlzLmNvbmZpZ1xuICAgICAgICApOyAvLyBXaXRoIHRvb2xiYXJcbiAgICAgICAgQXV0b2Rlc2suVmlld2luZy5Jbml0aWFsaXplcih0aGlzLm9wdGlvbnMsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9WaWV3ZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIHRoaXMub1ZpZXdlci5sb2FkTW9kZWwoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZG9jaWQsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyxcbiAgICAgICAgICAgIG9uSXRlbUxvYWRTdWNjZXNzLFxuICAgICAgICAgICAgb25Eb2N1bWVudExvYWRGYWlsdXJlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkRmFpbHVyZSh2aWV3ZXJFcnJvckNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJvbkRvY3VtZW50TG9hZEZhaWx1cmUoKSAtIGVycm9yQ29kZTpcIiArIHZpZXdlckVycm9yQ29kZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkl0ZW1Mb2FkU3VjY2Vzcyh2aWV3ZXIsIGl0ZW0pIHtcbiAgICAgICAgICBfc2VsZi5vVmlld2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBBdXRvZGVzay5WaWV3aW5nLkdFT01FVFJZX0xPQURFRF9FVkVOVCxcbiAgICAgICAgICAgIG9uR2VvbWV0cnlMb2FkRXZlbnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uR2VvbWV0cnlMb2FkRXZlbnQoKSB7XG4gICAgICAgICAgX3NlbGYub1ZpZXdlci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgQXV0b2Rlc2suVmlld2luZy5HRU9NRVRSWV9MT0FERURfRVZFTlQsXG4gICAgICAgICAgICBvbkdlb21ldHJ5TG9hZEV2ZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IEZvcmdlRXh0ZW50aW9uTWFuYWdlci5nZXRFeHRlbnRpb25zKCk7XG4gICAgICAgICAgLy8gbGV0IGV4dGVuc2lvbnMgPSBbXCJBdXRvZGVzay5BRE4uVmlld2luZy5FeHRlbnNpb24uQ29sb3JcIl07XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2VsZi5vVmlld2VyLmxvYWRFeHRlbnNpb24oZXh0ZW5zaW9uc1tpXSwgX3NlbGYub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImF1dG9kZXNrX2ZvcmdlX3ZpZXdlclwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi9Gb3JnZVZpZXdlci52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVkXCIsIHRoaXMuJGVsKTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIEZvcmdlVmlld2VyLnN0YXJ0X3ZpZXdlcih0aGlzLiRlbCk7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8bWQtdG9vbGJhciBjbGFzcz1cImFwcC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgIG1kLWVsZXZhdGlvbj1cIjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLXN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICAgICAgYWx0PVwiU3BpbmFsQklNIFZpZWV3ZXJcIlxuICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1lbmRcIj5cbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gY29sb3JfYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInRvZ2dsZU1lbnVcIj5cbiAgICAgICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC10b29sYmFyPlxuXG4gICAgPG1kLWxpc3Q+XG4gICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImdvX3RvRHJpdmVcIj5cbiAgICAgICAgPG1kLWljb24+a2V5Ym9hcmRfcmV0dXJuPC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+UmV0dXJuIHRvIFNwaW5hbEJJTSBEcml2ZTwvc3Bhbj5cbiAgICAgIDwvbWQtbGlzdC1pdGVtPlxuXG4gICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cInNpZ25fb3V0XCI+XG4gICAgICAgIDxtZC1pY29uPnBvd2VyX3NldHRpbmdzX25ldzwvbWQtaWNvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlNpZ24gb3V0PC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgPC9tZC1saXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuLi9TcGluYWxTeXN0ZW0vc3BpbmFsLmpzXCI7XG5pbXBvcnQgSGVhZGVyQ3RybCBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlckN0cmwudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTcGluYWxSaWdodFNpZGVCYXJcIixcbiAgZGF0YSgpIHtcbiAgICAvLyB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3RybE1lbnUpO1xuICAgIHJldHVybiB7XG4gICAgICB0b2dnbGVNZW51OiAoKSA9PiB7XG4gICAgICAgIEhlYWRlckN0cmwudG9nZ2xlTWVudSgpO1xuICAgICAgfSxcbiAgICAgIGdvX3RvRHJpdmU6ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgIH0sXG4gICAgICBzaWduX291dDogKCkgPT4ge1xuICAgICAgICBzcGluYWwuc2lnbk91dCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlLyMhL2xvZ2luJyk7XCI7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG59O1xuLy8gY29tcG9uZW50czogeyBDaGFydCB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcHAgLm1kLWFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uYXBwLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jb2xvcl9ibGFjayAubWQtYnV0dG9uLFxuLmNvbG9yX2JsYWNrIC5tZC1pY29uLFxuLmNvbG9yX2JsYWNrIGRpdiB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7fSBmcm9tIFwic3BpbmFsLWNvcmUtY29ubmVjdG9yanNcIjtcbmltcG9ydCAqIGFzIFEgZnJvbSBcInFcIjtcblxuZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xuICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5jbGFzcyBzcGluYWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRFU1QgY29uc3RydWN0IHNwaW5hbFwiKTtcbiAgICB0aGlzLnVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfTtcbiAgICB0aGlzLnByb21pc2VNb2RlbCA9IG51bGw7XG4gICAgdGhpcy5wcm9taXNlaW5pdCA9IG51bGw7XG4gICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5ID0ge307XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnByb21pc2Vpbml0KSByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBRLmRlZmVyKCk7XG5cbiAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlcigpO1xuICAgIGlmICh0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIFNwaW5hbFVzZXJNYW5hZ2VyLmdldF91c2VyX2lkKFxuICAgICAgICBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmNvbm4gPSBzcGluYWxDb3JlLmNvbm5lY3QoXG4gICAgICAgICAgICBgaHR0cDovLyR7aWR9OiR7dGhpcy51c2VyLnBhc3N3b3JkfUAke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByb21pc2Vpbml0LnJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgLy8gdGhpcy5wcm9taXNlaW5pdC5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Ugd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICBpZiAoIXRoaXMudXNlci51c2VybmFtZSkge1xuICAgICAgbGV0IF91c2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIik7XG4gICAgICBpZiAoX3VzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShhdG9iKF91c2VyKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXI7XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlTW9kZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VNb2RlbC5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLnByb21pc2VNb2RlbCA9IFEuZGVmZXIoKTtcbiAgICB0aGlzLmluaXQoKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgcGF0aCA9IGdldFBhcmFtZXRlckJ5TmFtZShcInBhdGhcIik7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IGF0b2IocGF0aCk7XG4gICAgICAgIHNwaW5hbENvcmUubG9hZChcbiAgICAgICAgICB0aGlzLmNvbm4sXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBmb3JnZWZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGZvcmdlZmlsZTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZU1vZGVsLnJlc29sdmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLnByb21pc2VNb2RlbC5wcm9taXNlO1xuICB9XG4gIF93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpIHtcbiAgICBpZiAoIW1vZGVsLl9zZXJ2ZXJfaWQgfHwgRmlsZVN5c3RlbS5fdG1wX29iamVjdHNbbW9kZWwuX3NlcnZlcl9pZF0pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMuY2FsbCh0aGlzLCBtb2RlbCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBwcm9taXNlLnJlc29sdmUobW9kZWwpO1xuICB9XG4gIHdhaXRNb2RlbFJkeShtb2RlbCkge1xuICAgIGxldCBkZWZlciA9IFEuZGVmZXIoKTtcbiAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMuY2FsbCh0aGlzLCBtb2RlbCwgZGVmZXIpO1xuXG4gICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gIH1cbiAgbG9hZE1vZGVsUHRyKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdID0gUS5kZWZlcigpO1xuICAgIGlmICh0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuX3NlcnZlcl9pZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuX3NlcnZlcl9pZF0ucHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdID0gUS5kZWZlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IHNwaW5hbCgpO1xuIiwiIiwiPHNjcmlwdD5cbmltcG9ydCBSeCBmcm9tIFwicnhqcy9SeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgSGVhZGVyQ3RybCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBtZW51VmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubWVudVZpc2libGVPYnNlcnZhYmxlID0gUnguT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy50b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBtZW51VmlzaWJsZSA9ICFtZW51VmlzaWJsZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGVNZW51XCIsIG1lbnVWaXNpYmxlKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChtZW51VmlzaWJsZSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRWaWV3TWVudSA9IGJvb2wgPT4ge1xuICAgICAgICBtZW51VmlzaWJsZSA9IGJvb2w7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlTWVudVwiLCBib29sKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChtZW51VmlzaWJsZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubWVudVZpc2libGVPYnNlcnZhYmxlKTtcbiAgfVxuXG4gIGdldE9ic2VydmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVZpc2libGVPYnNlcnZhYmxlO1xuICB9XG59KCk7XG48L3NjcmlwdD5cbiIsIiA8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tc3RhcnRcIj5cbiAgICAgIDxpbWcgc3JjPVwiZGlzdC9hc3NldHMvaW1nL1NwaW5hbEJJTVZpZXdlckxvZ28ucG5nXCJcbiAgICAgICAgICAgYWx0PVwiU3BpbmFsQklNIFZpZXdlclwiXG4gICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0MnB4O21hcmdpbi10b3A6IDRweDtcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAge3t1c2VybmFtZX19XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgPC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWwgZnJvbSBcIi4uL1NwaW5hbFN5c3RlbS9zcGluYWwuanNcIjtcbmltcG9ydCBIZWFkZXJDdHJsIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyQ3RybC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNwaW5hbEhlYWRlclwiLFxuICBkYXRhKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZU1lbnU6ICgpID0+IHtcbiAgICAgICAgSGVhZGVyQ3RybC50b2dnbGVNZW51KCk7XG4gICAgICB9LFxuICAgICAgdXNlcm5hbWU6IFwiXCJcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0udXNlcm5hbWUgPSBzcGluYWwuZ2V0VXNlcigpLnVzZXJuYW1lO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubWQtYnV0dG9uLFxuLm1kLWljb24sXG5kaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gXCJ2dWUtbWF0ZXJpYWxcIjtcbmltcG9ydCBSeCBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFZ1ZVJ4IGZyb20gXCJ2dWUtcnhcIjtcblxuVnVlLnVzZShWdWVSeCwgUngpO1xuXG5pbXBvcnQgXCIuL2FwcC5jc3NcIjtcblxuVnVlLnVzZShWdWVNYXRlcmlhbCk7XG5cbm5ldyBWdWUoe1xuICBlbDogXCIjYXBwXCIsXG4gIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pO1xuIl19
