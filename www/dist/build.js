(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Vue // late bind
var version
var map = Object.create(null)
if (typeof window !== 'undefined') {
  window.__VUE_HOT_MAP__ = map
}
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
      // pre 2.5, all static trees are cached together on the instance
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

var _SpinalRightSideBar = require("./RightSideBar/SpinalRightSideBar.vue");

var _SpinalRightSideBar2 = _interopRequireDefault(_SpinalRightSideBar);

var _MainContent = require("./MainContent/MainContent.vue");

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  data: function data() {
    return {
      menuVisible: false
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    closeSidebar: function closeSidebar() {
      this.menuVisible = false;
    }
  },

  components: { spinalHeader: _SpinalHeader2.default, SpinalRightSideBar: _SpinalRightSideBar2.default, MainContent: _MainContent2.default }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"app-header"},[_c('spinalHeader',{model:{value:(_vm.menuVisible),callback:function ($$v) {_vm.menuVisible=$$v},expression:"menuVisible"}})],1),_vm._v(" "),_c('md-app-drawer',{staticClass:"md-right",attrs:{"md-active":_vm.menuVisible},on:{"update:mdActive":function($event){_vm.menuVisible=$event}}},[_c('SpinalRightSideBar',{model:{value:(_vm.menuVisible),callback:function ($$v) {_vm.menuVisible=$$v},expression:"menuVisible"}})],1),_vm._v(" "),_c('md-app-content',[_c('MainContent')],1)],1)],1)}
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

},{"./MainContent/MainContent.vue":6,"./RightSideBar/SpinalRightSideBar.vue":7,"./header/SpinalHeader.vue":11,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgeExtentionManager = function () {
  function ForgeExtentionManager() {
    _classCallCheck(this, ForgeExtentionManager);

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
}();

exports.default = ForgeExtentionManager;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgeViewer = function () {
  function ForgeViewer() {
    _classCallCheck(this, ForgeViewer);

    this.viewer;
    this.config = {};
    this.options = {
      env: "Local",
      docid: "",
      useADP: false
    };
    this.docs = [];
    window.spinal.ForgeExtentionManager.addExtention("Autodesk.ADN.Viewing.Extension.Color");
  }

  _createClass(ForgeViewer, [{
    key: "start_viewer",
    value: function start_viewer(dom) {
      var _this = this;

      var _self = this;

      window.spinal.spinalSystem.getModel().then(function (forgefile) {
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
        _this.viewer = new window.Autodesk.Viewing.Private.GuiViewer3D(dom, _this.config); // With toolbar
        window.Autodesk.Viewing.Initializer(_this.options, function () {
          _this.viewer.initialize();
          _this.viewer.loadModel(_this.options.docid, _this.config, onItemLoadSuccess, onDocumentLoadFailure);
        });
        function onDocumentLoadFailure(viewerErrorCode) {
          console.error("onDocumentLoadFailure() - errorCode:" + viewerErrorCode);
        }

        function onItemLoadSuccess() {
          var extensions = window.spinal.ForgeExtentionManager.getExtentions();
          for (var i = 0; i < extensions.length; i++) {
            _self.viewer.loadExtension(extensions[i], _self.options);
          }
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }]);

  return ForgeViewer;
}();
// ();

exports.default = ForgeViewer;

},{}],6:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    _vue2.default.prototype.$ForgeViewer.start_viewer(this.$el);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"autodesk_forge_viewer"}})}
__vue__options__.staticRenderFns = []
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

},{"vue":"vue","vue-hot-reload-api":1}],7:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-5d167a8e] {\n  height: 100vh;\n}\n.app-header[data-v-5d167a8e] {\n  color: black;\n  background-color: #fff;\n}\n.color_black .md-button[data-v-5d167a8e],\n.color_black .md-icon[data-v-5d167a8e],\n.color_black div[data-v-5d167a8e] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "SpinalRightSideBar",
  props: ["value"],
  data: function data() {
    return {};
  },

  methods: {
    toggleMenu: function toggleMenu() {
      this.$emit("input", !this.value);
    },
    go_toDrive: function go_toDrive() {
      window.location = "/html/drive/";
    },
    sign_out: function sign_out() {
      _vue2.default.prototype.$spinalSystem.signOut();
      window.location = "/html/drive/#!/login');";
    }
  },
  created: function created() {}
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

},{"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],8:[function(require,module,exports){
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
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var SpinalSystem = function () {
  function SpinalSystem() {
    _classCallCheck(this, SpinalSystem);

    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
    this.modelsPathDictionary = {};
  }

  _createClass(SpinalSystem, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.promiseinit) return this.promiseinit.promise;
      this.promiseinit = Q.defer();
      this.getUser();
      if (this.user.username) {
        window.SpinalUserManager.get_user_id("http://" + window.location.host, this.user.username, this.user.password, function (response) {
          var id = parseInt(response);
          _this.conn = window.spinalCore.connect("http://" + id + ":" + _this.user.password + "@" + window.location.host + "/");
          _this.promiseinit.resolve();
        }, function () {
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        });
      } else {
        window.location = "/html/drive/";
      }
      return this.promiseinit.promise;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var path = getParameterByName("path");
      if (path) return atob(path);
      return undefined;
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
        window.spinalCore.load(_this2.conn, path, function (forgefile) {
          _this2.model = forgefile;
          _this2.promiseModel.resolve(_this2.model);
          // defer.reject();
        }, function () {
          window.location = "/html/drive/";
          // defer.reject();
        });
      }, function (err) {
        console.error(err);
        window.location = "/html/drive/";
        // defer.reject();
      });
      return this.promiseModel.promise;
    }
  }, {
    key: "_waitModelRdyRec",
    value: function _waitModelRdyRec(model, promise) {
      var _this3 = this;

      if (!model._server_id || window.FileSystem._tmp_objects[model._server_id]) {
        setTimeout(function () {
          _this3._waitModelRdyRec(model, promise);
        }, 100);
      } else promise.resolve(model);
    }
  }, {
    key: "waitModelRdy",
    value: function waitModelRdy(model) {
      var defer = Q.defer();
      this._waitModelRdyRec(model, defer);

      return defer.promise;
    }
  }, {
    key: "loadModelPtr",
    value: function loadModelPtr(model) {
      var _this4 = this;

      if (model instanceof window.File) {
        return this.loadModelPtr(model._ptr);
      }
      if (!(model instanceof window.Ptr)) {
        throw new Error("loadModelPtr must take Ptr as parameter");
      }
      if (!model.data.value && model.data.model) {
        return Q.resolve(model.data.model);
      } else if (!model.data.value) {
        throw new Error("Trying to load a Ptr to 0");
      }

      if (this.modelsDictionary[model.data.value]) {
        return this.modelsDictionary[model.data.value].promise;
      }
      this.modelsDictionary[model.data.value] = Q.defer();
      try {
        model.load(function (m) {
          _this4.modelsDictionary[model.data.value].resolve(m);
        });
      } catch (error) {
        var promise = this.modelsDictionary[model.data.value];
        this.modelsDictionary[model.data.value] = undefined;
        promise.reject();
      }
      return this.modelsDictionary[model.data.value].promise;
    }
  }, {
    key: "signOut",
    value: function signOut() {
      window.localStorage.setItem("spinalhome_cfg", "");
    }
  }, {
    key: "load",
    value: function load(path) {
      var _this5 = this;

      if (this.modelsPathDictionary[path]) {
        return this.modelsPathDictionary[path].promise;
      }
      this.modelsPathDictionary[path] = Q.defer();

      window.spinalCore.load(this.conn, path, function (m) {
        _this5.modelsPathDictionary[path].resolve(m);
      }, function () {
        console.error("Failed to load model in : " + path);
        var promise = _this5.modelsPathDictionary[path];
        _this5.modelsPathDictionary[path] = undefined;
        promise.reject();
      });

      return this.modelsPathDictionary[path].promise;
    }
  }]);

  return SpinalSystem;
}();

exports.default = SpinalSystem;

},{"q":"q","spinal-core-connectorjs":"spinal-core-connectorjs"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpinalSystem = require("./SpinalSystem");

var _SpinalSystem2 = _interopRequireDefault(_SpinalSystem);

var _ForgeViewer = require("../MainContent/ForgeViewer.js");

var _ForgeViewer2 = _interopRequireDefault(_ForgeViewer);

var _ForgeExtentionManager = require("../MainContent/ForgeExtentionManager.js");

var _ForgeExtentionManager2 = _interopRequireDefault(_ForgeExtentionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.spinal = {};

window.spinal.spinalSystem = new _SpinalSystem2.default();
window.spinal.ForgeExtentionManager = new _ForgeExtentionManager2.default();
window.spinal.ForgeViewer = new _ForgeViewer2.default();

exports.default = {
  install: function install(Vue) {
    Vue.prototype.$spinalSystem = window.spinal.spinalSystem;
    Vue.prototype.$ForgeViewer = window.spinal.ForgeViewer;
    Vue.prototype.$ForgeExtentionManager = window.spinal.ForgeExtentionManager;
  },

  spinalSystem: window.spinal.spinalSystem,
  ForgeViewer: window.spinal.ForgeViewer,
  ForgeExtentionManager: window.spinal.ForgeExtentionManager
};

},{"../MainContent/ForgeExtentionManager.js":4,"../MainContent/ForgeViewer.js":5,"./SpinalSystem":8}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".md-button[data-v-007dbc79],\n.md-icon[data-v-007dbc79],\ndiv[data-v-007dbc79] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinal = require("../SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "spinalHeader",
  props: ["value"],
  data: function data() {
    return {
      fullPath: "",
      path: "",
      username: ""
    };
  },

  methods: {
    toggleMenu: function toggleMenu() {
      this.$emit("input", !this.value);
    }
  },
  created: function created() {
    var vm = this;
    vm.username = _spinal2.default.spinalSystem.getUser().username;
    vm.fullPath = _spinal2.default.spinalSystem.getPath();
    var path = vm.fullPath.split("/");
    vm.path = path[path.length - 1];
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-toolbar-row"},[_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("\n    "+_vm._s(_vm.path)+"\n    "),_c('md-tooltip',[_vm._v(_vm._s(_vm.fullPath))])],1),_vm._v(" "),_c('div',{staticClass:"md-toolbar-section-end"},[_vm._v("\n    "+_vm._s(_vm.username)+"\n    "),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.toggleMenu}},[_c('md-icon',[_vm._v("menu")])],1)],1)])}
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

},{"../SpinalSystem/spinal":9,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],12:[function(require,module,exports){
"use strict";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = require("./App.vue");

var _App2 = _interopRequireDefault(_App);

var _vueMaterial = require("vue-material");

var _vueMaterial2 = _interopRequireDefault(_vueMaterial);

var _spinal = require("./SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_spinal2.default);

_vue2.default.use(_vueMaterial2.default);

new _vue2.default({
  el: "#app",
  render: function render(h) {
    return h(_App2.default);
  }
});

},{"./App.vue":3,"./SpinalSystem/spinal":9,"./app.css":10,"vue":"vue","vue-material":"vue-material"}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlaWZ5L2xpYi9pbnNlcnQtY3NzLmpzIiwic3JjL0FwcC52dWU/NjdkYWRkOTAiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmpzIiwic3JjL01haW5Db250ZW50L0ZvcmdlVmlld2VyLmpzIiwic3JjL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZT82Y2ZiZTgyNCIsInNyYy9SaWdodFNpZGVCYXIvU3BpbmFsUmlnaHRTaWRlQmFyLnZ1ZT8zNGRhZDMyMyIsInNyYy9TcGluYWxTeXN0ZW0vU3BpbmFsU3lzdGVtLmpzIiwic3JjL1NwaW5hbFN5c3RlbS9zcGluYWwuanMiLCJzcmMvYXBwLmNzcyIsInNyYy9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZT9hYjk0ZjIwYyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ZTtBQUNiLFNBRGEsbUJBQ0wsR0FESyxFQUNBO0FBQ1gsUUFBSSxTQUFKLENBQWMsYUFBZCxHQUE4QixPQUFPLE1BQVAsQ0FBYyxZQUE1QztBQUNBLFFBQUksU0FBSixDQUFjLFlBQWQsR0FBNkIsT0FBTyxNQUFQLENBQWMsV0FBM0M7QUFDQSxRQUFJLFNBQUosQ0FBYyxzQkFBZCxHQUF1QyxPQUFPLE1BQVAsQ0FBYyxxQkFBckQ7QUFDRCxHQUxZOztBQU1iLGdCQUFjLE9BQU8sTUFBUCxDQUFjLFlBTmY7QUFPYixlQUFhLE9BQU8sTUFBUCxDQUFjLFdBUGQ7QUFRYix5QkFBdUIsT0FBTyxNQUFQLENBQWM7QUFSeEIsQzs7O0FDVmY7Ozs7Ozs7Ozs7O0FDc0JBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTs7OztBQXhCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFGQSxjQUFJLEdBQUosQ0FBUSxnQkFBUjs7QUFJQSxjQUFJLEdBQUosQ0FBUSxxQkFBUjs7QUFFQSxJQUFJLGFBQUosQ0FBUTtBQUNOLE1BQUksTUFERTtBQUVOLFVBQVE7QUFBQSxXQUFLLEVBQUUsYUFBRixDQUFMO0FBQUE7QUFGRixDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIFZ1ZSAvLyBsYXRlIGJpbmRcbnZhciB2ZXJzaW9uXG52YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBtYXBcbn1cbnZhciBpbnN0YWxsZWQgPSBmYWxzZVxudmFyIGlzQnJvd3NlcmlmeSA9IGZhbHNlXG52YXIgaW5pdEhvb2tOYW1lID0gJ2JlZm9yZUNyZWF0ZSdcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHZ1ZSwgYnJvd3NlcmlmeSkge1xuICBpZiAoaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAgICdvbmx5IGNvbXBhdGlibGUgd2l0aCBWdWUuanMgY29yZSBeMi4wLjAuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY29yZCBmb3IgYSBob3QgbW9kdWxlLCB3aGljaCBrZWVwcyB0cmFjayBvZiBpdHMgY29uc3RydWN0b3JcbiAqIGFuZCBpbnN0YW5jZXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZXhwb3J0cy5jcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYobWFwW2lkXSkgeyByZXR1cm4gfVxuXG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBDdG9yLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgaW5zdGFuY2VzOiBbXVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbW9kdWxlIGlzIHJlY29yZGVkXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKi9cblxuZXhwb3J0cy5pc1JlY29yZGVkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwW2lkXSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ29tcG9uZW50IG9wdGlvbnMgb2JqZWN0IGhvdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpZiAoY3R4ICYmIGluc3RhbmNlcy5pbmRleE9mKGN0eC5wYXJlbnQpIDwgMCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChjdHgucGFyZW50KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGluamVjdEhvb2sob3B0aW9ucywgaW5pdEhvb2tOYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gICAgICBpZiAoIXJlY29yZC5DdG9yKSB7XG4gICAgICAgIHJlY29yZC5DdG9yID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gICAgfSlcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsICdiZWZvcmVEZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGluc3RhbmNlcy5zcGxpY2UoaW5zdGFuY2VzLmluZGV4T2YodGhpcyksIDEpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEluamVjdCBhIGhvb2sgdG8gYSBob3QgcmVsb2FkYWJsZSBjb21wb25lbnQgc28gdGhhdFxuICogd2UgY2FuIGtlZXAgdHJhY2sgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gKi9cblxuZnVuY3Rpb24gaW5qZWN0SG9vayhvcHRpb25zLCBuYW1lLCBob29rKSB7XG4gIHZhciBleGlzdGluZyA9IG9wdGlvbnNbbmFtZV1cbiAgb3B0aW9uc1tuYW1lXSA9IGV4aXN0aW5nXG4gICAgPyBBcnJheS5pc0FycmF5KGV4aXN0aW5nKSA/IGV4aXN0aW5nLmNvbmNhdChob29rKSA6IFtleGlzdGluZywgaG9va11cbiAgICA6IFtob29rXVxufVxuXG5mdW5jdGlvbiB0cnlXcmFwKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIGFyZykge1xuICAgIHRyeSB7XG4gICAgICBmbihpZCwgYXJnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBWdWUgY29tcG9uZW50IGhvdC1yZWxvYWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyAob2xkT3B0aW9ucywgbmV3T3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb2xkT3B0aW9ucykge1xuICAgIGlmICghKGtleSBpbiBuZXdPcHRpb25zKSkge1xuICAgICAgZGVsZXRlIG9sZE9wdGlvbnNba2V5XVxuICAgIH1cbiAgfVxuICBmb3IgKHZhciBrZXkkMSBpbiBuZXdPcHRpb25zKSB7XG4gICAgb2xkT3B0aW9uc1trZXkkMV0gPSBuZXdPcHRpb25zW2tleSQxXVxuICB9XG59XG5cbmV4cG9ydHMucmVyZW5kZXIgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gIH1cbiAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgICAgLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgICAvLyBwcmUgMi41LCBhbGwgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgdG9nZXRoZXIgb24gdGhlIGluc3RhbmNlXG4gICAgICBpZiAoaW5zdGFuY2UuX3N0YXRpY1RyZWVzKSB7XG4gICAgICAgIGluc3RhbmNlLl9zdGF0aWNUcmVlcyA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuMFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyBwb3N0IDIuNS40OiB2LW9uY2UgdHJlZXMgYXJlIGNhY2hlZCBvbiBpbnN0YW5jZS5fc3RhdGljVHJlZXMuXG4gICAgICAvLyBQdXJlIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIG9uIHRoZSBzdGF0aWNSZW5kZXJGbnMgYXJyYXlcbiAgICAgIC8vIChib3RoIGFscmVhZHkgcmVzZXQgYWJvdmUpXG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gZnVuY3Rpb25hbCBvciBubyBpbnN0YW5jZSBjcmVhdGVkIHlldFxuICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgcmVjb3JkLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcblxuICAgIC8vIGhhbmRsZSBmdW5jdGlvbmFsIGNvbXBvbmVudCByZS1yZW5kZXJcbiAgICBpZiAocmVjb3JkLm9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gcmVyZW5kZXIgd2l0aCBmdWxsIG9wdGlvbnNcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0ZW1wbGF0ZS1vbmx5IHJlcmVuZGVyLlxuICAgICAgICAvLyBuZWVkIHRvIGluamVjdCB0aGUgc3R5bGUgaW5qZWN0aW9uIGNvZGUgZm9yIENTUyBtb2R1bGVzXG4gICAgICAgIC8vIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICAgIHZhciBpbmplY3RTdHlsZXMgPSByZWNvcmQub3B0aW9ucy5faW5qZWN0U3R5bGVzXG4gICAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgICAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChjdHgpXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlY29yZC5vcHRpb25zLl9DdG9yID0gbnVsbFxuICAgICAgLy8gMi41LjNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5vcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgcmVjb3JkLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgICB9XG4gICAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gICAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAgICAgLy8gcHJlc2VydmUgcHJlIDIuMiBiZWhhdmlvciBmb3IgZ2xvYmFsIG1peGluIGhhbmRsaW5nXG4gICAgICAgIHJlY29yZC5DdG9yLmV4dGVuZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICB9XG4gICAgICB2YXIgbmV3Q3RvciA9IHJlY29yZC5DdG9yLnN1cGVyLmV4dGVuZChvcHRpb25zKVxuICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucyA9IG5ld0N0b3Iub3B0aW9uc1xuICAgICAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgICAgIHJlY29yZC5DdG9yLnByb3RvdHlwZSA9IG5ld0N0b3IucHJvdG90eXBlXG4gICAgICBpZiAobmV3Q3Rvci5yZWxlYXNlKSB7XG4gICAgICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICAgICAgbmV3Q3Rvci5yZWxlYXNlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLiR2bm9kZSAmJiBpbnN0YW5jZS4kdm5vZGUuY29udGV4dCkge1xuICAgICAgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQuJGZvcmNlVXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9KVxufSlcbiIsInZhciBpbnNlcnRlZCA9IGV4cG9ydHMuY2FjaGUgPSB7fVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmV4cG9ydHMuaW5zZXJ0ID0gZnVuY3Rpb24gKGNzcykge1xuICBpZiAoaW5zZXJ0ZWRbY3NzXSkgcmV0dXJuIG5vb3BcbiAgaW5zZXJ0ZWRbY3NzXSA9IHRydWVcblxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKVxuXG4gIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZWxlbSlcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgaW5zZXJ0ZWRbY3NzXSA9IGZhbHNlXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiXG4gICAgICAgdi1jbG9haz5cbiAgICA8bWQtYXBwIG1kLXdhdGVyZmFsbFxuICAgICAgICAgICAgbWQtbW9kZT1cImZpeGVkXCI+XG4gICAgICA8bWQtYXBwLXRvb2xiYXIgY2xhc3M9XCJhcHAtaGVhZGVyXCI+XG4gICAgICAgIDxzcGluYWxIZWFkZXIgdi1tb2RlbD1cIm1lbnVWaXNpYmxlXCIgLz5cbiAgICAgIDwvbWQtYXBwLXRvb2xiYXI+XG4gICAgICA8bWQtYXBwLWRyYXdlciBjbGFzcz1cIm1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgIDptZC1hY3RpdmUuc3luYz1cIm1lbnVWaXNpYmxlXCI+XG4gICAgICAgIDxTcGluYWxSaWdodFNpZGVCYXIgdi1tb2RlbD1cIm1lbnVWaXNpYmxlXCIvPlxuICAgICAgPC9tZC1hcHAtZHJhd2VyPlxuXG4gICAgICA8bWQtYXBwLWNvbnRlbnQ+XG4gICAgICAgIDxNYWluQ29udGVudCAvPlxuICAgICAgPC9tZC1hcHAtY29udGVudD5cbiAgICA8L21kLWFwcD5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3BpbmFsSGVhZGVyIGZyb20gXCIuL2hlYWRlci9TcGluYWxIZWFkZXIudnVlXCI7XG5pbXBvcnQgU3BpbmFsUmlnaHRTaWRlQmFyIGZyb20gXCIuL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlXCI7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSBcIi4vTWFpbkNvbnRlbnQvTWFpbkNvbnRlbnQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJhcHBcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVudVZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgLy8gY29tcHV0ZWQ6IHtcbiAgLy8gICBtZW51VmlzaWJsZToge1xuICAvLyAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMubWVudVZpc2libGVPYnM7XG4gIC8vICAgICB9LFxuICAvLyAgICAgc2V0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAvLyAgICAgICBIZWFkZXJDdHJsLnNldFZpZXdNZW51KG5ld1ZhbHVlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvLyB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIHRoaXMuJHN1YnNjcmliZVRvKEhlYWRlckN0cmwuZ2V0T2JzZXJ2YWJsZSgpLCBmdW5jdGlvbih2YWwpIHtcbiAgICAvLyAgIHZtLm1lbnVWaXNpYmxlT2JzID0gdmFsO1xuICAgIC8vIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2VTaWRlYmFyKCkge1xuICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHsgc3BpbmFsSGVhZGVyLCBTcGluYWxSaWdodFNpZGVCYXIsIE1haW5Db250ZW50IH1cbn07PC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubWQtYXBwLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuPHN0eWxlPlxuLm1kLWFwcC1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuPC9zdHlsZT5cbiIsImNsYXNzIEZvcmdlRXh0ZW50aW9uTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXh0ZW50aW9ucyA9IFtdO1xuICB9XG5cbiAgZ2V0RXh0ZW50aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnRpb25zO1xuICB9XG5cbiAgYWRkRXh0ZW50aW9uKG5hbWUpIHtcbiAgICB0aGlzLmV4dGVudGlvbnMucHVzaChuYW1lKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyO1xuIiwiY2xhc3MgRm9yZ2VWaWV3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZpZXdlcjtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGVudjogXCJMb2NhbFwiLFxuICAgICAgZG9jaWQ6IFwiXCIsXG4gICAgICB1c2VBRFA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlci5hZGRFeHRlbnRpb24oXG4gICAgICBcIkF1dG9kZXNrLkFETi5WaWV3aW5nLkV4dGVuc2lvbi5Db2xvclwiXG4gICAgKTtcbiAgfVxuICBzdGFydF92aWV3ZXIoZG9tKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgIHdpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtXG4gICAgICAuZ2V0TW9kZWwoKVxuICAgICAgLnRoZW4oZm9yZ2VmaWxlID0+IHtcbiAgICAgICAgdGhpcy5mb3JnZUZpbGUgPSBmb3JnZWZpbGU7XG4gICAgICAgIHRoaXMuZG9jcyA9IHRoaXMuZm9yZ2VGaWxlLl9jaGlsZHJlbi5nZXQoKTtcbiAgICAgICAgaWYgKHRoaXMuZG9jcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIHZhciBwYXRoID0gdGhpcy5kb2NzWzBdLnBhdGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRvY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgvLitcXC5zdmYkLy50ZXN0KHRoaXMuZG9jc1tpXS5wYXRoKSkge1xuICAgICAgICAgICAgICBwYXRoID0gdGhpcy5kb2NzW2ldLnBhdGg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHBhdGg7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmRvY2lkID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5Qcml2YXRlLkd1aVZpZXdlcjNEKFxuICAgICAgICAgIGRvbSxcbiAgICAgICAgICB0aGlzLmNvbmZpZ1xuICAgICAgICApOyAvLyBXaXRoIHRvb2xiYXJcbiAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuSW5pdGlhbGl6ZXIodGhpcy5vcHRpb25zLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3ZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIHRoaXMudmlld2VyLmxvYWRNb2RlbChcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kb2NpZCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICAgICAgb25JdGVtTG9hZFN1Y2Nlc3MsXG4gICAgICAgICAgICBvbkRvY3VtZW50TG9hZEZhaWx1cmVcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRGYWlsdXJlKHZpZXdlckVycm9yQ29kZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIm9uRG9jdW1lbnRMb2FkRmFpbHVyZSgpIC0gZXJyb3JDb2RlOlwiICsgdmlld2VyRXJyb3JDb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uSXRlbUxvYWRTdWNjZXNzKCkge1xuICAgICAgICAgIGxldCBleHRlbnNpb25zID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuZ2V0RXh0ZW50aW9ucygpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX3NlbGYudmlld2VyLmxvYWRFeHRlbnNpb24oZXh0ZW5zaW9uc1tpXSwgX3NlbGYub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59XG4vLyAoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VWaWV3ZXI7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhdXRvZGVza19mb3JnZV92aWV3ZXJcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZVZpZXdlci5zdGFydF92aWV3ZXIodGhpcy4kZWwpO1xuICB9XG59Ozwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxtZC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgbWQtZWxldmF0aW9uPVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tc3RhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvYXNzZXRzL2ltZy9TcGluYWxCSU1WaWV3ZXJMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmllZXdlclwiXG4gICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDJweDttYXJnaW4tdG9wOiA0cHg7XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBjb2xvcl9ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG5cbiAgICA8bWQtbGlzdD5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiZ29fdG9Ecml2ZVwiPlxuICAgICAgICA8bWQtaWNvbj5rZXlib2FyZF9yZXR1cm48L21kLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5SZXR1cm4gdG8gU3BpbmFsQklNIERyaXZlPC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwic2lnbl9vdXRcIj5cbiAgICAgICAgPG1kLWljb24+cG93ZXJfc2V0dGluZ3NfbmV3PC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+U2lnbiBvdXQ8L3NwYW4+XG4gICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICA8L21kLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3BpbmFsUmlnaHRTaWRlQmFyXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIGdvX3RvRHJpdmUoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgIH0sXG4gICAgc2lnbl9vdXQoKSB7XG4gICAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0uc2lnbk91dCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS8jIS9sb2dpbicpO1wiO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHt9XG59O1xuLy8gY29tcG9uZW50czogeyBDaGFydCB9PC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sb3JfYmxhY2sgLm1kLWJ1dHRvbixcbi5jb2xvcl9ibGFjayAubWQtaWNvbixcbi5jb2xvcl9ibGFjayBkaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQge30gZnJvbSBcInNwaW5hbC1jb3JlLWNvbm5lY3RvcmpzXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gXCJxXCI7XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiBcIlwiO1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG59XG5cbmNsYXNzIFNwaW5hbFN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLnByb21pc2Vpbml0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcbiAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5ID0ge307XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnByb21pc2Vpbml0KSByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgaWYgKHRoaXMudXNlci51c2VybmFtZSkge1xuICAgICAgd2luZG93LlNwaW5hbFVzZXJNYW5hZ2VyLmdldF91c2VyX2lkKFxuICAgICAgICBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmNvbm4gPSB3aW5kb3cuc3BpbmFsQ29yZS5jb25uZWN0KFxuICAgICAgICAgICAgYGh0dHA6Ly8ke2lkfToke3RoaXMudXNlci5wYXNzd29yZH1AJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wcm9taXNlaW5pdC5yZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAgIC8vIHRoaXMucHJvbWlzZWluaXQucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb21pc2Vpbml0LnByb21pc2U7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGxldCBwYXRoID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGF0aFwiKTtcbiAgICBpZiAocGF0aCkgcmV0dXJuIGF0b2IocGF0aCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIGxldCBfdXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwaW5hbGhvbWVfY2ZnXCIpO1xuICAgICAgaWYgKF91c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UoYXRvYihfdXNlcikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvbWlzZU1vZGVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlTW9kZWwucHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5wcm9taXNlTW9kZWwgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5pbml0KCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IHBhdGggPSBnZXRQYXJhbWV0ZXJCeU5hbWUoXCJwYXRoXCIpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBhdG9iKHBhdGgpO1xuICAgICAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgICAgIHRoaXMuY29ubixcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIGZvcmdlZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gZm9yZ2VmaWxlO1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlTW9kZWwucmVzb2x2ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZU1vZGVsLnByb21pc2U7XG4gIH1cbiAgX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgcHJvbWlzZSkge1xuICAgIGlmICghbW9kZWwuX3NlcnZlcl9pZCB8fCB3aW5kb3cuRmlsZVN5c3RlbS5fdG1wX29iamVjdHNbbW9kZWwuX3NlcnZlcl9pZF0pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2UgcHJvbWlzZS5yZXNvbHZlKG1vZGVsKTtcbiAgfVxuICB3YWl0TW9kZWxSZHkobW9kZWwpIHtcbiAgICBsZXQgZGVmZXIgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5fd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBkZWZlcik7XG5cbiAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgfVxuICBsb2FkTW9kZWxQdHIobW9kZWwpIHtcbiAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZE1vZGVsUHRyKG1vZGVsLl9wdHIpO1xuICAgIH1cbiAgICBpZiAoIShtb2RlbCBpbnN0YW5jZW9mIHdpbmRvdy5QdHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkTW9kZWxQdHIgbXVzdCB0YWtlIFB0ciBhcyBwYXJhbWV0ZXJcIik7XG4gICAgfVxuICAgIGlmICghbW9kZWwuZGF0YS52YWx1ZSAmJiBtb2RlbC5kYXRhLm1vZGVsKSB7XG4gICAgICByZXR1cm4gUS5yZXNvbHZlKG1vZGVsLmRhdGEubW9kZWwpO1xuICAgIH0gZWxzZSBpZiAoIW1vZGVsLmRhdGEudmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBsb2FkIGEgUHRyIHRvIDBcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuZGF0YS52YWx1ZV0gPSBRLmRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGVsLmxvYWQobSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5yZXNvbHZlKG0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdO1xuICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbiAgbG9hZChwYXRoKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSBRLmRlZmVyKCk7XG5cbiAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgdGhpcy5jb25uLFxuICAgICAgcGF0aCxcbiAgICAgIG0gPT4ge1xuICAgICAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnJlc29sdmUobSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbW9kZWwgaW4gOiBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF07XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BpbmFsU3lzdGVtO1xuIiwiaW1wb3J0IFNwaW5hbFN5c3RlbSBmcm9tIFwiLi9TcGluYWxTeXN0ZW1cIjtcbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VWaWV3ZXIuanNcIjtcbmltcG9ydCBGb3JnZUV4dGVudGlvbk1hbmFnZXIgZnJvbSBcIi4uL01haW5Db250ZW50L0ZvcmdlRXh0ZW50aW9uTWFuYWdlci5qc1wiO1xuXG53aW5kb3cuc3BpbmFsID0ge307XG5cbndpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtID0gbmV3IFNwaW5hbFN5c3RlbSgpO1xud2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIgPSBuZXcgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyID0gbmV3IEZvcmdlVmlld2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zdGFsbChWdWUpIHtcbiAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0gPSB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbTtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZVZpZXdlciA9IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXI7XG4gICAgVnVlLnByb3RvdHlwZS4kRm9yZ2VFeHRlbnRpb25NYW5hZ2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXI7XG4gIH0sXG4gIHNwaW5hbFN5c3RlbTogd2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0sXG4gIEZvcmdlVmlld2VyOiB3aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyLFxuICBGb3JnZUV4dGVudGlvbk1hbmFnZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VFeHRlbnRpb25NYW5hZ2VyXG59O1xuIiwiIiwiIDx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmlld2VyXCJcbiAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgIDwvZGl2PlxuICAgIDxoMj5cbiAgICAgIHt7cGF0aH19XG4gICAgICA8bWQtdG9vbHRpcD57e2Z1bGxQYXRofX08L21kLXRvb2x0aXA+XG4gICAgPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAge3t1c2VybmFtZX19XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgPC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWwgZnJvbSBcIi4uL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNwaW5hbEhlYWRlclwiLFxuICBwcm9wczogW1widmFsdWVcIl0sXG4gIGRhdGEoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbFBhdGg6IFwiXCIsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgdXNlcm5hbWU6IFwiXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTWVudTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgIXRoaXMudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnVzZXJuYW1lID0gc3BpbmFsLnNwaW5hbFN5c3RlbS5nZXRVc2VyKCkudXNlcm5hbWU7XG4gICAgdm0uZnVsbFBhdGggPSBzcGluYWwuc3BpbmFsU3lzdGVtLmdldFBhdGgoKTtcbiAgICBsZXQgcGF0aCA9IHZtLmZ1bGxQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICB2bS5wYXRoID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICB9XG59Ozwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1kLWJ1dHRvbixcbi5tZC1pY29uLFxuZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tIFwidnVlLW1hdGVyaWFsXCI7XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblZ1ZS51c2Uoc3BpbmFsKTtcblxuaW1wb3J0IFwiLi9hcHAuY3NzXCI7XG5cblZ1ZS51c2UoVnVlTWF0ZXJpYWwpO1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI2FwcFwiLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcbiJdfQ==
