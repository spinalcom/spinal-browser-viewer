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
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-b1627a9a] {\n  height: 100vh;\n  overflow: hidden;\n}\n.app-header[data-v-b1627a9a] {\n  color: black;\n  background-color: #fff;\n}\n.md-app-content[data-v-b1627a9a] {\n  height: calc(100vh - 64px) !important;\n  position: relative;\n  padding: 0;\n}\n.md-app-container {\n  overflow: hidden;\n}")
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
__vue__options__._scopeId = "data-v-b1627a9a"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1627a9a", __vue__options__)
  } else {
    hotAPI.reload("data-v-b1627a9a", __vue__options__)
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
    hotAPI.createRecord("data-v-8fe8c63a", __vue__options__)
  } else {
    hotAPI.reload("data-v-8fe8c63a", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":1}],7:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-56084b2e] {\n  height: 100vh;\n}\n.app-header[data-v-56084b2e] {\n  color: black;\n  background-color: #fff;\n}\n.color_black .md-button[data-v-56084b2e],\n.color_black .md-icon[data-v-56084b2e],\n.color_black div[data-v-56084b2e] {\n  color: black !important;\n}")
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
__vue__options__._scopeId = "data-v-56084b2e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56084b2e", __vue__options__)
  } else {
    hotAPI.reload("data-v-56084b2e", __vue__options__)
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
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".md-button[data-v-516a8c6e],\n.md-icon[data-v-516a8c6e],\ndiv[data-v-516a8c6e] {\n  color: black !important;\n}")
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
__vue__options__._scopeId = "data-v-516a8c6e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-516a8c6e", __vue__options__)
  } else {
    hotAPI.reload("data-v-516a8c6e", __vue__options__)
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

var _vTooltip = require("v-tooltip");

var _vTooltip2 = _interopRequireDefault(_vTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_spinal2.default);


_vue2.default.use(_vueMaterial2.default);

_vue2.default.use(_vTooltip2.default);

new _vue2.default({
  el: "#app",
  render: function render(h) {
    return h(_App2.default);
  }
});

},{"./App.vue":3,"./SpinalSystem/spinal":9,"./app.css":10,"v-tooltip":"v-tooltip","vue":"vue","vue-material":"vue-material"}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlaWZ5L2xpYi9pbnNlcnQtY3NzLmpzIiwic3JjL0FwcC52dWU/MGIzZGYwYmIiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmpzIiwic3JjL01haW5Db250ZW50L0ZvcmdlVmlld2VyLmpzIiwic3JjL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZT82NzFjYTRiNiIsInNyYy9SaWdodFNpZGVCYXIvU3BpbmFsUmlnaHRTaWRlQmFyLnZ1ZT80OWIzYzA4ZSIsInNyYy9TcGluYWxTeXN0ZW0vU3BpbmFsU3lzdGVtLmpzIiwic3JjL1NwaW5hbFN5c3RlbS9zcGluYWwuanMiLCJzcmMvYXBwLmNzcyIsInNyYy9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZT8xMTRmY2VhZiIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RWU7QUFDYixTQURhLG1CQUNMLEdBREssRUFDQTtBQUNYLFFBQUksU0FBSixDQUFjLGFBQWQsR0FBOEIsT0FBTyxNQUFQLENBQWMsWUFBNUM7QUFDQSxRQUFJLFNBQUosQ0FBYyxZQUFkLEdBQTZCLE9BQU8sTUFBUCxDQUFjLFdBQTNDO0FBQ0EsUUFBSSxTQUFKLENBQWMsc0JBQWQsR0FBdUMsT0FBTyxNQUFQLENBQWMscUJBQXJEO0FBQ0QsR0FMWTs7QUFNYixnQkFBYyxPQUFPLE1BQVAsQ0FBYyxZQU5mO0FBT2IsZUFBYSxPQUFPLE1BQVAsQ0FBYyxXQVBkO0FBUWIseUJBQXVCLE9BQU8sTUFBUCxDQUFjO0FBUnhCLEM7OztBQ1ZmOzs7Ozs7Ozs7OztBQ3NCQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7Ozs7QUF4QkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUlBOzs7Ozs7QUFMQSxjQUFJLEdBQUosQ0FBUSxnQkFBUjs7O0FBR0EsY0FBSSxHQUFKLENBQVEscUJBQVI7O0FBR0EsY0FBSSxHQUFKLENBQVEsa0JBQVI7O0FBRUEsSUFBSSxhQUFKLENBQVE7QUFDTixNQUFJLE1BREU7QUFFTixVQUFRO0FBQUEsV0FBSyxFQUFFLGFBQUYsQ0FBTDtBQUFBO0FBRkYsQ0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19WVUVfSE9UX01BUF9fID0gbWFwXG59XG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsZWQgPSB0cnVlXG5cbiAgVnVlID0gdnVlLl9fZXNNb2R1bGUgPyB2dWUuZGVmYXVsdCA6IHZ1ZVxuICB2ZXJzaW9uID0gVnVlLnZlcnNpb24uc3BsaXQoJy4nKS5tYXAoTnVtYmVyKVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgLy8gY29tcGF0IHdpdGggPCAyLjAuMC1hbHBoYS43XG4gIGlmIChWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMSkge1xuICAgIGluaXRIb29rTmFtZSA9ICdpbml0J1xuICB9XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gdmVyc2lvblswXSA+PSAyXG4gIGlmICghZXhwb3J0cy5jb21wYXRpYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tITVJdIFlvdSBhcmUgdXNpbmcgYSB2ZXJzaW9uIG9mIHZ1ZS1ob3QtcmVsb2FkLWFwaSB0aGF0IGlzICcgK1xuICAgICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmKG1hcFtpZF0pIHsgcmV0dXJuIH1cblxuICB2YXIgQ3RvciA9IG51bGxcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgQ3RvciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zXG4gIH1cbiAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gIG1hcFtpZF0gPSB7XG4gICAgQ3RvcjogQ3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1vZHVsZSBpcyByZWNvcmRlZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5cbmV4cG9ydHMuaXNSZWNvcmRlZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gdHlwZW9mIG1hcFtpZF0gIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogTWFrZSBhIENvbXBvbmVudCBvcHRpb25zIG9iamVjdCBob3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaWYgKGN0eCAmJiBpbnN0YW5jZXMuaW5kZXhPZihjdHgucGFyZW50KSA8IDApIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2goY3R4LnBhcmVudClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsIGluaXRIb29rTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICAgICAgaWYgKCFyZWNvcmQuQ3Rvcikge1xuICAgICAgICByZWNvcmQuQ3RvciA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICAgIH0pXG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sob3B0aW9ucywgbmFtZSwgaG9vaykge1xuICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zW25hbWVdXG4gIG9wdGlvbnNbbmFtZV0gPSBleGlzdGluZ1xuICAgID8gQXJyYXkuaXNBcnJheShleGlzdGluZykgPyBleGlzdGluZy5jb25jYXQoaG9vaykgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgZm4oaWQsIGFyZylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9sZE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9sZE9wdGlvbnMpIHtcbiAgICBpZiAoIShrZXkgaW4gbmV3T3B0aW9ucykpIHtcbiAgICAgIGRlbGV0ZSBvbGRPcHRpb25zW2tleV1cbiAgICB9XG4gIH1cbiAgZm9yICh2YXIga2V5JDEgaW4gbmV3T3B0aW9ucykge1xuICAgIG9sZE9wdGlvbnNba2V5JDFdID0gbmV3T3B0aW9uc1trZXkkMV1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICAgIC8vIHJlc2V0IHN0YXRpYyB0cmVlc1xuICAgICAgLy8gcHJlIDIuNSwgYWxsIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIHRvZ2V0aGVyIG9uIHRoZSBpbnN0YW5jZVxuICAgICAgaWYgKGluc3RhbmNlLl9zdGF0aWNUcmVlcykge1xuICAgICAgICBpbnN0YW5jZS5fc3RhdGljVHJlZXMgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjBcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICBpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gcG9zdCAyLjUuNDogdi1vbmNlIHRyZWVzIGFyZSBjYWNoZWQgb24gaW5zdGFuY2UuX3N0YXRpY1RyZWVzLlxuICAgICAgLy8gUHVyZSBzdGF0aWMgdHJlZXMgYXJlIGNhY2hlZCBvbiB0aGUgc3RhdGljUmVuZGVyRm5zIGFycmF5XG4gICAgICAvLyAoYm90aCBhbHJlYWR5IHJlc2V0IGFib3ZlKVxuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGZ1bmN0aW9uYWwgb3Igbm8gaW5zdGFuY2UgY3JlYXRlZCB5ZXRcbiAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG5cbiAgICAvLyBoYW5kbGUgZnVuY3Rpb25hbCBjb21wb25lbnQgcmUtcmVuZGVyXG4gICAgaWYgKHJlY29yZC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIHJlcmVuZGVyIHdpdGggZnVsbCBvcHRpb25zXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMikge1xuICAgICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGVtcGxhdGUtb25seSByZXJlbmRlci5cbiAgICAgICAgLy8gbmVlZCB0byBpbmplY3QgdGhlIHN0eWxlIGluamVjdGlvbiBjb2RlIGZvciBDU1MgbW9kdWxlc1xuICAgICAgICAvLyB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgICB2YXIgaW5qZWN0U3R5bGVzID0gcmVjb3JkLm9wdGlvbnMuX2luamVjdFN0eWxlc1xuICAgICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICAgICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoY3R4KVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWNvcmQub3B0aW9ucy5fQ3RvciA9IG51bGxcbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnRzLnJlbG9hZCA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gICAgfVxuICAgIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICAgIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgICAgaWYgKHZlcnNpb25bMV0gPCAyKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIHByZSAyLjIgYmVoYXZpb3IgZm9yIGdsb2JhbCBtaXhpbiBoYW5kbGluZ1xuICAgICAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgfVxuICAgICAgdmFyIG5ld0N0b3IgPSByZWNvcmQuQ3Rvci5zdXBlci5leHRlbmQob3B0aW9ucylcbiAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgICAgIHJlY29yZC5DdG9yLmNpZCA9IG5ld0N0b3IuY2lkXG4gICAgICByZWNvcmQuQ3Rvci5wcm90b3R5cGUgPSBuZXdDdG9yLnByb3RvdHlwZVxuICAgICAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgICAgICAvLyB0ZW1wb3JhcnkgZ2xvYmFsIG1peGluIHN0cmF0ZWd5IHVzZWQgaW4gPCAyLjAuMC1hbHBoYS42XG4gICAgICAgIG5ld0N0b3IucmVsZWFzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1Jvb3Qgb3IgbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSBtb2RpZmllZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pXG4iLCJ2YXIgaW5zZXJ0ZWQgPSBleHBvcnRzLmNhY2hlID0ge31cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5leHBvcnRzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgaWYgKGluc2VydGVkW2Nzc10pIHJldHVybiBub29wXG4gIGluc2VydGVkW2Nzc10gPSB0cnVlXG5cbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJylcblxuICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGVsZW0pXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIGluc2VydGVkW2Nzc10gPSBmYWxzZVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIlxuICAgICAgIHYtY2xvYWs+XG4gICAgPG1kLWFwcCBtZC13YXRlcmZhbGxcbiAgICAgICAgICAgIG1kLW1vZGU9XCJmaXhlZFwiPlxuICAgICAgPG1kLWFwcC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiPlxuICAgICAgICA8c3BpbmFsSGVhZGVyIHYtbW9kZWw9XCJtZW51VmlzaWJsZVwiIC8+XG4gICAgICA8L21kLWFwcC10b29sYmFyPlxuICAgICAgPG1kLWFwcC1kcmF3ZXIgY2xhc3M9XCJtZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICA6bWQtYWN0aXZlLnN5bmM9XCJtZW51VmlzaWJsZVwiPlxuICAgICAgICA8U3BpbmFsUmlnaHRTaWRlQmFyIHYtbW9kZWw9XCJtZW51VmlzaWJsZVwiLz5cbiAgICAgIDwvbWQtYXBwLWRyYXdlcj5cblxuICAgICAgPG1kLWFwcC1jb250ZW50PlxuICAgICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICAgIDwvbWQtYXBwLWNvbnRlbnQ+XG4gICAgPC9tZC1hcHA+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IFNwaW5hbFJpZ2h0U2lkZUJhciBmcm9tIFwiLi9SaWdodFNpZGVCYXIvU3BpbmFsUmlnaHRTaWRlQmFyLnZ1ZVwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCIuL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYXBwXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lbnVWaXNpYmxlOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIC8vIGNvbXB1dGVkOiB7XG4gIC8vICAgbWVudVZpc2libGU6IHtcbiAgLy8gICAgIGdldDogZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgIHJldHVybiB0aGlzLm1lbnVWaXNpYmxlT2JzO1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHNldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgLy8gICAgICAgSGVhZGVyQ3RybC5zZXRWaWV3TWVudShuZXdWYWx1ZSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9LFxuICBjcmVhdGVkKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICAvLyB0aGlzLiRzdWJzY3JpYmVUbyhIZWFkZXJDdHJsLmdldE9ic2VydmFibGUoKSwgZnVuY3Rpb24odmFsKSB7XG4gICAgLy8gICB2bS5tZW51VmlzaWJsZU9icyA9IHZhbDtcbiAgICAvLyB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7IHNwaW5hbEhlYWRlciwgU3BpbmFsUmlnaHRTaWRlQmFyLCBNYWluQ29udGVudCB9XG59Ozwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FwcCAubWQtYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1kLWFwcC1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuPC9zdHlsZT5cbjxzdHlsZT5cbi5tZC1hcHAtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG4iLCJjbGFzcyBGb3JnZUV4dGVudGlvbk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV4dGVudGlvbnMgPSBbXTtcbiAgfVxuXG4gIGdldEV4dGVudGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50aW9ucztcbiAgfVxuXG4gIGFkZEV4dGVudGlvbihuYW1lKSB7XG4gICAgdGhpcy5leHRlbnRpb25zLnB1c2gobmFtZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcmdlRXh0ZW50aW9uTWFuYWdlcjtcbiIsImNsYXNzIEZvcmdlVmlld2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aWV3ZXI7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBlbnY6IFwiTG9jYWxcIixcbiAgICAgIGRvY2lkOiBcIlwiLFxuICAgICAgdXNlQURQOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5kb2NzID0gW107XG4gICAgd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuYWRkRXh0ZW50aW9uKFxuICAgICAgXCJBdXRvZGVzay5BRE4uVmlld2luZy5FeHRlbnNpb24uQ29sb3JcIlxuICAgICk7XG4gIH1cbiAgc3RhcnRfdmlld2VyKGRvbSkge1xuICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbVxuICAgICAgLmdldE1vZGVsKClcbiAgICAgIC50aGVuKGZvcmdlZmlsZSA9PiB7XG4gICAgICAgIHRoaXMuZm9yZ2VGaWxlID0gZm9yZ2VmaWxlO1xuICAgICAgICB0aGlzLmRvY3MgPSB0aGlzLmZvcmdlRmlsZS5fY2hpbGRyZW4uZ2V0KCk7XG4gICAgICAgIGlmICh0aGlzLmRvY3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICB2YXIgcGF0aCA9IHRoaXMuZG9jc1swXS5wYXRoO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kb2NzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoLy4rXFwuc3ZmJC8udGVzdCh0aGlzLmRvY3NbaV0ucGF0aCkpIHtcbiAgICAgICAgICAgICAgcGF0aCA9IHRoaXMuZG9jc1tpXS5wYXRoO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBwYXRoO1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5kb2NpZCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuUHJpdmF0ZS5HdWlWaWV3ZXIzRChcbiAgICAgICAgICBkb20sXG4gICAgICAgICAgdGhpcy5jb25maWdcbiAgICAgICAgKTsgLy8gV2l0aCB0b29sYmFyXG4gICAgICAgIHdpbmRvdy5BdXRvZGVzay5WaWV3aW5nLkluaXRpYWxpemVyKHRoaXMub3B0aW9ucywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMudmlld2VyLmluaXRpYWxpemUoKTtcbiAgICAgICAgICB0aGlzLnZpZXdlci5sb2FkTW9kZWwoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZG9jaWQsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyxcbiAgICAgICAgICAgIG9uSXRlbUxvYWRTdWNjZXNzLFxuICAgICAgICAgICAgb25Eb2N1bWVudExvYWRGYWlsdXJlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRGYWlsdXJlKHZpZXdlckVycm9yQ29kZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIm9uRG9jdW1lbnRMb2FkRmFpbHVyZSgpIC0gZXJyb3JDb2RlOlwiICsgdmlld2VyRXJyb3JDb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uSXRlbUxvYWRTdWNjZXNzKCkge1xuICAgICAgICAgIGxldCBleHRlbnNpb25zID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuZ2V0RXh0ZW50aW9ucygpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX3NlbGYudmlld2VyLmxvYWRFeHRlbnNpb24oZXh0ZW5zaW9uc1tpXSwgX3NlbGYub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59XG4vLyAoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VWaWV3ZXI7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhdXRvZGVza19mb3JnZV92aWV3ZXJcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZVZpZXdlci5zdGFydF92aWV3ZXIodGhpcy4kZWwpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJhcHAtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICBtZC1lbGV2YXRpb249XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZGlzdC9hc3NldHMvaW1nL1NwaW5hbEJJTVZpZXdlckxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgIGFsdD1cIlNwaW5hbEJJTSBWaWVld2VyXCJcbiAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0MnB4O21hcmdpbi10b3A6IDRweDtcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tZW5kXCI+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIGNvbG9yX2JsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJ0b2dnbGVNZW51XCI+XG4gICAgICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWQtdG9vbGJhcj5cblxuICAgIDxtZC1saXN0PlxuICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJnb190b0RyaXZlXCI+XG4gICAgICAgIDxtZC1pY29uPmtleWJvYXJkX3JldHVybjwvbWQtaWNvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlJldHVybiB0byBTcGluYWxCSU0gRHJpdmU8L3NwYW4+XG4gICAgICA8L21kLWxpc3QtaXRlbT5cblxuICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJzaWduX291dFwiPlxuICAgICAgICA8bWQtaWNvbj5wb3dlcl9zZXR0aW5nc19uZXc8L21kLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5TaWduIG91dDwvc3Bhbj5cbiAgICAgIDwvbWQtbGlzdC1pdGVtPlxuICAgIDwvbWQtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTcGluYWxSaWdodFNpZGVCYXJcIixcbiAgcHJvcHM6IFtcInZhbHVlXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgIXRoaXMudmFsdWUpO1xuICAgIH0sXG4gICAgZ29fdG9Ecml2ZSgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgfSxcbiAgICBzaWduX291dCgpIHtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuJHNwaW5hbFN5c3RlbS5zaWduT3V0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlLyMhL2xvZ2luJyk7XCI7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge31cbn07XG4vLyBjb21wb25lbnRzOiB7IENoYXJ0IH08L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcHAgLm1kLWFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uYXBwLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jb2xvcl9ibGFjayAubWQtYnV0dG9uLFxuLmNvbG9yX2JsYWNrIC5tZC1pY29uLFxuLmNvbG9yX2JsYWNrIGRpdiB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7fSBmcm9tIFwic3BpbmFsLWNvcmUtY29ubmVjdG9yanNcIjtcbmltcG9ydCAqIGFzIFEgZnJvbSBcInFcIjtcblxuZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xuICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gIGlmICghcmVzdWx0c1syXSkgcmV0dXJuIFwiXCI7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbn1cblxuY2xhc3MgU3BpbmFsU3lzdGVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51c2VyID0ge1xuICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIlxuICAgIH07XG4gICAgdGhpcy5wcm9taXNlTW9kZWwgPSBudWxsO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBudWxsO1xuICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeSA9IHt9O1xuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnkgPSB7fTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvbWlzZWluaXQpIHJldHVybiB0aGlzLnByb21pc2Vpbml0LnByb21pc2U7XG4gICAgdGhpcy5wcm9taXNlaW5pdCA9IFEuZGVmZXIoKTtcbiAgICB0aGlzLmdldFVzZXIoKTtcbiAgICBpZiAodGhpcy51c2VyLnVzZXJuYW1lKSB7XG4gICAgICB3aW5kb3cuU3BpbmFsVXNlck1hbmFnZXIuZ2V0X3VzZXJfaWQoXG4gICAgICAgIFwiaHR0cDovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSxcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkLFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQocmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuY29ubiA9IHdpbmRvdy5zcGluYWxDb3JlLmNvbm5lY3QoXG4gICAgICAgICAgICBgaHR0cDovLyR7aWR9OiR7dGhpcy51c2VyLnBhc3N3b3JkfUAke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByb21pc2Vpbml0LnJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgLy8gdGhpcy5wcm9taXNlaW5pdC5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZWluaXQucHJvbWlzZTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgbGV0IHBhdGggPSBnZXRQYXJhbWV0ZXJCeU5hbWUoXCJwYXRoXCIpO1xuICAgIGlmIChwYXRoKSByZXR1cm4gYXRvYihwYXRoKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICBpZiAoIXRoaXMudXNlci51c2VybmFtZSkge1xuICAgICAgbGV0IF91c2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIik7XG4gICAgICBpZiAoX3VzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShhdG9iKF91c2VyKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXI7XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlTW9kZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VNb2RlbC5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLnByb21pc2VNb2RlbCA9IFEuZGVmZXIoKTtcbiAgICB0aGlzLmluaXQoKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgcGF0aCA9IGdldFBhcmFtZXRlckJ5TmFtZShcInBhdGhcIik7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IGF0b2IocGF0aCk7XG4gICAgICAgIHdpbmRvdy5zcGluYWxDb3JlLmxvYWQoXG4gICAgICAgICAgdGhpcy5jb25uLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgZm9yZ2VmaWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBmb3JnZWZpbGU7XG4gICAgICAgICAgICB0aGlzLnByb21pc2VNb2RlbC5yZXNvbHZlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgLy8gZGVmZXIucmVqZWN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAgICAgLy8gZGVmZXIucmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgLy8gZGVmZXIucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlTW9kZWwucHJvbWlzZTtcbiAgfVxuICBfd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBwcm9taXNlKSB7XG4gICAgaWYgKCFtb2RlbC5fc2VydmVyX2lkIHx8IHdpbmRvdy5GaWxlU3lzdGVtLl90bXBfb2JqZWN0c1ttb2RlbC5fc2VydmVyX2lkXSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgcHJvbWlzZSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSBwcm9taXNlLnJlc29sdmUobW9kZWwpO1xuICB9XG4gIHdhaXRNb2RlbFJkeShtb2RlbCkge1xuICAgIGxldCBkZWZlciA9IFEuZGVmZXIoKTtcbiAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMobW9kZWwsIGRlZmVyKTtcblxuICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICB9XG4gIGxvYWRNb2RlbFB0cihtb2RlbCkge1xuICAgIGlmIChtb2RlbCBpbnN0YW5jZW9mIHdpbmRvdy5GaWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTW9kZWxQdHIobW9kZWwuX3B0cik7XG4gICAgfVxuICAgIGlmICghKG1vZGVsIGluc3RhbmNlb2Ygd2luZG93LlB0cikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImxvYWRNb2RlbFB0ciBtdXN0IHRha2UgUHRyIGFzIHBhcmFtZXRlclwiKTtcbiAgICB9XG4gICAgaWYgKCFtb2RlbC5kYXRhLnZhbHVlICYmIG1vZGVsLmRhdGEubW9kZWwpIHtcbiAgICAgIHJldHVybiBRLnJlc29sdmUobW9kZWwuZGF0YS5tb2RlbCk7XG4gICAgfSBlbHNlIGlmICghbW9kZWwuZGF0YS52YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIGxvYWQgYSBQdHIgdG8gMFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXSA9IFEuZGVmZXIoKTtcbiAgICB0cnkge1xuICAgICAgbW9kZWwubG9hZChtID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdLnJlc29sdmUobSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuZGF0YS52YWx1ZV07XG4gICAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuZGF0YS52YWx1ZV0gPSB1bmRlZmluZWQ7XG4gICAgICBwcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdLnByb21pc2U7XG4gIH1cbiAgc2lnbk91dCgpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGluYWxob21lX2NmZ1wiLCBcIlwiKTtcbiAgfVxuICBsb2FkKHBhdGgpIHtcbiAgICBpZiAodGhpcy5tb2RlbHNQYXRoRGljdGlvbmFyeVtwYXRoXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0ucHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbHNQYXRoRGljdGlvbmFyeVtwYXRoXSA9IFEuZGVmZXIoKTtcblxuICAgIHdpbmRvdy5zcGluYWxDb3JlLmxvYWQoXG4gICAgICB0aGlzLmNvbm4sXG4gICAgICBwYXRoLFxuICAgICAgbSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0ucmVzb2x2ZShtKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBtb2RlbCBpbiA6IFwiICsgcGF0aCk7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNQYXRoRGljdGlvbmFyeVtwYXRoXTtcbiAgICAgICAgdGhpcy5tb2RlbHNQYXRoRGljdGlvbmFyeVtwYXRoXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0ucHJvbWlzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGluYWxTeXN0ZW07XG4iLCJpbXBvcnQgU3BpbmFsU3lzdGVtIGZyb20gXCIuL1NwaW5hbFN5c3RlbVwiO1xuaW1wb3J0IEZvcmdlVmlld2VyIGZyb20gXCIuLi9NYWluQ29udGVudC9Gb3JnZVZpZXdlci5qc1wiO1xuaW1wb3J0IEZvcmdlRXh0ZW50aW9uTWFuYWdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmpzXCI7XG5cbndpbmRvdy5zcGluYWwgPSB7fTtcblxud2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0gPSBuZXcgU3BpbmFsU3lzdGVtKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlciA9IG5ldyBGb3JnZUV4dGVudGlvbk1hbmFnZXIoKTtcbndpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIgPSBuZXcgRm9yZ2VWaWV3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnN0YWxsKFZ1ZSkge1xuICAgIFZ1ZS5wcm90b3R5cGUuJHNwaW5hbFN5c3RlbSA9IHdpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtO1xuICAgIFZ1ZS5wcm90b3R5cGUuJEZvcmdlVmlld2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlcjtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZUV4dGVudGlvbk1hbmFnZXIgPSB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlcjtcbiAgfSxcbiAgc3BpbmFsU3lzdGVtOiB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbSxcbiAgRm9yZ2VWaWV3ZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIsXG4gIEZvcmdlRXh0ZW50aW9uTWFuYWdlcjogd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXJcbn07XG4iLCIiLCIgPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLXN0YXJ0XCI+XG4gICAgICA8aW1nIHNyYz1cImRpc3QvYXNzZXRzL2ltZy9TcGluYWxCSU1WaWV3ZXJMb2dvLnBuZ1wiXG4gICAgICAgICAgIGFsdD1cIlNwaW5hbEJJTSBWaWV3ZXJcIlxuICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDJweDttYXJnaW4tdG9wOiA0cHg7XCI+XG4gICAgPC9kaXY+XG4gICAgPGgyPlxuICAgICAge3twYXRofX1cbiAgICAgIDxtZC10b29sdGlwPnt7ZnVsbFBhdGh9fTwvbWQtdG9vbHRpcD5cbiAgICA8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tZW5kXCI+XG4gICAgICB7e3VzZXJuYW1lfX1cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJ0b2dnbGVNZW51XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbCBmcm9tIFwiLi4vU3BpbmFsU3lzdGVtL3NwaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwic3BpbmFsSGVhZGVyXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICAvLyB2YXIgdm0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsUGF0aDogXCJcIixcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICB1c2VybmFtZTogXCJcIlxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCAhdGhpcy52YWx1ZSk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0udXNlcm5hbWUgPSBzcGluYWwuc3BpbmFsU3lzdGVtLmdldFVzZXIoKS51c2VybmFtZTtcbiAgICB2bS5mdWxsUGF0aCA9IHNwaW5hbC5zcGluYWxTeXN0ZW0uZ2V0UGF0aCgpO1xuICAgIGxldCBwYXRoID0gdm0uZnVsbFBhdGguc3BsaXQoXCIvXCIpO1xuICAgIHZtLnBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIH1cbn07PC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubWQtYnV0dG9uLFxuLm1kLWljb24sXG5kaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gXCJ2dWUtbWF0ZXJpYWxcIjtcbmltcG9ydCBzcGluYWwgZnJvbSBcIi4vU3BpbmFsU3lzdGVtL3NwaW5hbFwiO1xuVnVlLnVzZShzcGluYWwpO1xuaW1wb3J0IFwiLi9hcHAuY3NzXCI7XG5cblZ1ZS51c2UoVnVlTWF0ZXJpYWwpO1xuXG5pbXBvcnQgVlRvb2x0aXAgZnJvbSBcInYtdG9vbHRpcFwiO1xuVnVlLnVzZShWVG9vbHRpcCk7XG5cbm5ldyBWdWUoe1xuICBlbDogXCIjYXBwXCIsXG4gIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pO1xuIl19
