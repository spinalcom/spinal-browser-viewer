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

},{"./MainContent/MainContent.vue":6,"./RightSideBar/SpinalRightSideBar.vue":7,"./header/HeaderCtrl.vue":11,"./header/SpinalHeader.vue":12,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],4:[function(require,module,exports){
;(function(){
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
        _this.viewer = new window.Autodesk.Viewing.Private.GuiViewer3D(dom, _this.config);
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

exports.default = ForgeViewer;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
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

},{"vue":"vue","vue-hot-reload-api":1}],6:[function(require,module,exports){
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
        _vue2.default.prototype.$spinalSystem.signOut();
        window.location = "/html/drive/#!/login');";
      }
    };
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

},{"../header/HeaderCtrl.vue":11,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],8:[function(require,module,exports){
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

      if (this.modelsDictionary[model._server_id]) {
        return this.modelsDictionary[model._server_id].promise;
      }
      this.modelsDictionary[model._server_id] = Q.defer();
      try {
        model.load(function (m) {
          _this4.modelsDictionary[model._server_id].resolve(m);
        });
      } catch (error) {
        var promise = this.modelsDictionary[model._server_id];
        this.modelsDictionary[model._server_id] = undefined;
        promise.reject();
      }
      return this.modelsDictionary[model._server_id].promise;
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

var _ForgeViewer = require("../MainContent/ForgeViewer.vue");

var _ForgeViewer2 = _interopRequireDefault(_ForgeViewer);

var _ForgeExtentionManager = require("../MainContent/ForgeExtentionManager.vue");

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

},{"../MainContent/ForgeExtentionManager.vue":4,"../MainContent/ForgeViewer.vue":5,"./SpinalSystem":8}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
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
        observer.next(menuVisible);
      };
      _this.setViewMenu = function (bool) {
        menuVisible = bool;
        observer.next(menuVisible);
      };
    });
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

},{"rxjs/Rx":"rxjs/Rx","vue":"vue","vue-hot-reload-api":1}],12:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".md-button[data-v-007dbc79],\n.md-icon[data-v-007dbc79],\ndiv[data-v-007dbc79] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinal = require("../SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

var _HeaderCtrl = require("../header/HeaderCtrl.vue");

var _HeaderCtrl2 = _interopRequireDefault(_HeaderCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "spinalHeader",
  data: function data() {
    return {
      fullPath: "",
      path: "",
      username: ""
    };
  },

  methods: {
    toggleMenu: function toggleMenu() {
      _HeaderCtrl2.default.toggleMenu();
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

},{"../SpinalSystem/spinal":9,"../header/HeaderCtrl.vue":11,"vue":"vue","vue-hot-reload-api":1,"vueify/lib/insert-css":2}],13:[function(require,module,exports){
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

var _spinal = require("./SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_spinal2.default);
_vue2.default.use(_vueRx2.default, _Rx2.default);

_vue2.default.use(_vueMaterial2.default);

new _vue2.default({
  el: "#app",
  render: function render(h) {
    return h(_App2.default);
  }
});

},{"./App.vue":3,"./SpinalSystem/spinal":9,"./app.css":10,"rxjs/Rx":"rxjs/Rx","vue":"vue","vue-material":"vue-material","vue-rx":"vue-rx"}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlaWZ5L2xpYi9pbnNlcnQtY3NzLmpzIiwic3JjL0FwcC52dWU/NmZiYzU4NzMiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLnZ1ZT8wNzM3NzFmNiIsInNyYy9NYWluQ29udGVudC9Gb3JnZVZpZXdlci52dWU/MTFlYTAzY2UiLCJzcmMvTWFpbkNvbnRlbnQvTWFpbkNvbnRlbnQudnVlP2QyMWU3YThjIiwic3JjL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlPzZjMjdjYWNkIiwic3JjL1NwaW5hbFN5c3RlbS9TcGluYWxTeXN0ZW0uanMiLCJzcmMvU3BpbmFsU3lzdGVtL3NwaW5hbC5qcyIsInNyYy9hcHAuY3NzIiwic3JjL2hlYWRlci9IZWFkZXJDdHJsLnZ1ZT8zNTMzMDViMyIsInNyYy9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZT8zOGUwOTYyOCIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQTNCQTs7OztBQTNCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUFBOztBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUdBOzs7OztBQUNBOztBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7Ozs7O0FBUEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tDQTs7OztBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFsQkE7Ozs7QUFyQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7SUFBWSxDOzs7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QUFFQSxJQUFJLGFBQUosQ0FBUTtBQUNOLE1BQUksTUFERTtBQUVOLFVBQVE7QUFBQSxXQUFLLEVBQUUsYUFBRixDQUFMO0FBQUE7QUFGRixDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIFZ1ZSAvLyBsYXRlIGJpbmRcbnZhciB2ZXJzaW9uXG52YXIgbWFwID0gKHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBPYmplY3QuY3JlYXRlKG51bGwpKVxudmFyIGluc3RhbGxlZCA9IGZhbHNlXG52YXIgaXNCcm93c2VyaWZ5ID0gZmFsc2VcbnZhciBpbml0SG9va05hbWUgPSAnYmVmb3JlQ3JlYXRlJ1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAodnVlLCBicm93c2VyaWZ5KSB7XG4gIGlmIChpbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIFZ1ZSA9IHZ1ZS5fX2VzTW9kdWxlID8gdnVlLmRlZmF1bHQgOiB2dWVcbiAgdmVyc2lvbiA9IFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJykubWFwKE51bWJlcilcbiAgaXNCcm93c2VyaWZ5ID0gYnJvd3NlcmlmeVxuXG4gIC8vIGNvbXBhdCB3aXRoIDwgMi4wLjAtYWxwaGEuN1xuICBpZiAoVnVlLmNvbmZpZy5fbGlmZWN5Y2xlSG9va3MuaW5kZXhPZignaW5pdCcpID4gLTEpIHtcbiAgICBpbml0SG9va05hbWUgPSAnaW5pdCdcbiAgfVxuXG4gIGV4cG9ydHMuY29tcGF0aWJsZSA9IHZlcnNpb25bMF0gPj0gMlxuICBpZiAoIWV4cG9ydHMuY29tcGF0aWJsZSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdbSE1SXSBZb3UgYXJlIHVzaW5nIGEgdmVyc2lvbiBvZiB2dWUtaG90LXJlbG9hZC1hcGkgdGhhdCBpcyAnICtcbiAgICAgICAgJ29ubHkgY29tcGF0aWJsZSB3aXRoIFZ1ZS5qcyBjb3JlIF4yLjAuMC4nXG4gICAgKVxuICAgIHJldHVyblxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjb3JkIGZvciBhIGhvdCBtb2R1bGUsIHdoaWNoIGtlZXBzIHRyYWNrIG9mIGl0cyBjb25zdHJ1Y3RvclxuICogYW5kIGluc3RhbmNlc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5leHBvcnRzLmNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICBpZihtYXBbaWRdKSB7IHJldHVybiB9XG4gIFxuICB2YXIgQ3RvciA9IG51bGxcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgQ3RvciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zXG4gIH1cbiAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gIG1hcFtpZF0gPSB7XG4gICAgQ3RvcjogQ3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1vZHVsZSBpcyByZWNvcmRlZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5cbmV4cG9ydHMuaXNSZWNvcmRlZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gdHlwZW9mIG1hcFtpZF0gIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogTWFrZSBhIENvbXBvbmVudCBvcHRpb25zIG9iamVjdCBob3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaWYgKGN0eCAmJiBpbnN0YW5jZXMuaW5kZXhPZihjdHgucGFyZW50KSA8IDApIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2goY3R4LnBhcmVudClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsIGluaXRIb29rTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICAgICAgaWYgKCFyZWNvcmQuQ3Rvcikge1xuICAgICAgICByZWNvcmQuQ3RvciA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICAgIH0pXG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sob3B0aW9ucywgbmFtZSwgaG9vaykge1xuICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zW25hbWVdXG4gIG9wdGlvbnNbbmFtZV0gPSBleGlzdGluZ1xuICAgID8gQXJyYXkuaXNBcnJheShleGlzdGluZykgPyBleGlzdGluZy5jb25jYXQoaG9vaykgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgZm4oaWQsIGFyZylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9sZE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9sZE9wdGlvbnMpIHtcbiAgICBpZiAoIShrZXkgaW4gbmV3T3B0aW9ucykpIHtcbiAgICAgIGRlbGV0ZSBvbGRPcHRpb25zW2tleV1cbiAgICB9XG4gIH1cbiAgZm9yICh2YXIga2V5JDEgaW4gbmV3T3B0aW9ucykge1xuICAgIG9sZE9wdGlvbnNba2V5JDFdID0gbmV3T3B0aW9uc1trZXkkMV1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICAgIC8vIHJlc2V0IHN0YXRpYyB0cmVlc1xuICAgICAgLy8gcHJlIDIuNSwgYWxsIHN0YXRpYyB0cmVlcyBhcmUgY2FoY2VkIHRvZ2V0aGVyIG9uIHRoZSBpbnN0YW5jZVxuICAgICAgaWYgKGluc3RhbmNlLl9zdGF0aWNUcmVlcykge1xuICAgICAgICBpbnN0YW5jZS5fc3RhdGljVHJlZXMgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjBcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICBpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gcG9zdCAyLjUuNDogdi1vbmNlIHRyZWVzIGFyZSBjYWNoZWQgb24gaW5zdGFuY2UuX3N0YXRpY1RyZWVzLlxuICAgICAgLy8gUHVyZSBzdGF0aWMgdHJlZXMgYXJlIGNhY2hlZCBvbiB0aGUgc3RhdGljUmVuZGVyRm5zIGFycmF5XG4gICAgICAvLyAoYm90aCBhbHJlYWR5IHJlc2V0IGFib3ZlKVxuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGZ1bmN0aW9uYWwgb3Igbm8gaW5zdGFuY2UgY3JlYXRlZCB5ZXRcbiAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG5cbiAgICAvLyBoYW5kbGUgZnVuY3Rpb25hbCBjb21wb25lbnQgcmUtcmVuZGVyXG4gICAgaWYgKHJlY29yZC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIHJlcmVuZGVyIHdpdGggZnVsbCBvcHRpb25zXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMikge1xuICAgICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGVtcGxhdGUtb25seSByZXJlbmRlci5cbiAgICAgICAgLy8gbmVlZCB0byBpbmplY3QgdGhlIHN0eWxlIGluamVjdGlvbiBjb2RlIGZvciBDU1MgbW9kdWxlc1xuICAgICAgICAvLyB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgICB2YXIgaW5qZWN0U3R5bGVzID0gcmVjb3JkLm9wdGlvbnMuX2luamVjdFN0eWxlc1xuICAgICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICAgICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoY3R4KVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWNvcmQub3B0aW9ucy5fQ3RvciA9IG51bGxcbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnRzLnJlbG9hZCA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gICAgfVxuICAgIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICAgIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgICAgaWYgKHZlcnNpb25bMV0gPCAyKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIHByZSAyLjIgYmVoYXZpb3IgZm9yIGdsb2JhbCBtaXhpbiBoYW5kbGluZ1xuICAgICAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgfVxuICAgICAgdmFyIG5ld0N0b3IgPSByZWNvcmQuQ3Rvci5zdXBlci5leHRlbmQob3B0aW9ucylcbiAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgICAgIHJlY29yZC5DdG9yLmNpZCA9IG5ld0N0b3IuY2lkXG4gICAgICByZWNvcmQuQ3Rvci5wcm90b3R5cGUgPSBuZXdDdG9yLnByb3RvdHlwZVxuICAgICAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgICAgICAvLyB0ZW1wb3JhcnkgZ2xvYmFsIG1peGluIHN0cmF0ZWd5IHVzZWQgaW4gPCAyLjAuMC1hbHBoYS42XG4gICAgICAgIG5ld0N0b3IucmVsZWFzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1Jvb3Qgb3IgbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSBtb2RpZmllZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pXG4iLCJ2YXIgaW5zZXJ0ZWQgPSBleHBvcnRzLmNhY2hlID0ge31cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5leHBvcnRzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgaWYgKGluc2VydGVkW2Nzc10pIHJldHVybiBub29wXG4gIGluc2VydGVkW2Nzc10gPSB0cnVlXG5cbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJylcblxuICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGVsZW0pXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIGluc2VydGVkW2Nzc10gPSBmYWxzZVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIlxuICAgICAgIHYtY2xvYWs+XG4gICAgPG1kLWFwcCBtZC13YXRlcmZhbGxcbiAgICAgICAgICAgIG1kLW1vZGU9XCJmaXhlZFwiPlxuICAgICAgPG1kLWFwcC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiPlxuICAgICAgICA8c3BpbmFsSGVhZGVyIC8+XG4gICAgICA8L21kLWFwcC10b29sYmFyPlxuICAgICAgPG1kLWFwcC1kcmF3ZXIgY2xhc3M9XCJtZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICA6bWQtYWN0aXZlLnN5bmM9XCJtZW51VmlzaWJsZVwiPlxuICAgICAgICA8U3BpbmFsUmlnaHRTaWRlQmFyIC8+XG4gICAgICA8L21kLWFwcC1kcmF3ZXI+XG5cbiAgICAgIDxtZC1hcHAtY29udGVudD5cbiAgICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgICA8L21kLWFwcC1jb250ZW50PlxuICAgIDwvbWQtYXBwPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWxIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL1NwaW5hbEhlYWRlci52dWVcIjtcbmltcG9ydCBIZWFkZXJDdHJsIGZyb20gXCIuL2hlYWRlci9IZWFkZXJDdHJsLnZ1ZVwiO1xuaW1wb3J0IFNwaW5hbFJpZ2h0U2lkZUJhciBmcm9tIFwiLi9SaWdodFNpZGVCYXIvU3BpbmFsUmlnaHRTaWRlQmFyLnZ1ZVwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCIuL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYXBwXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lbnVWaXNpYmxlT2JzOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbWVudVZpc2libGU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVWaXNpYmxlT2JzO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgICAgSGVhZGVyQ3RybC5zZXRWaWV3TWVudShuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB0aGlzLiRzdWJzY3JpYmVUbyhIZWFkZXJDdHJsLmdldE9ic2VydmFibGUoKSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICB2bS5tZW51VmlzaWJsZU9icyA9IHZhbDtcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7IHNwaW5hbEhlYWRlciwgU3BpbmFsUmlnaHRTaWRlQmFyLCBNYWluQ29udGVudCB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubWQtYXBwLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuPHN0eWxlPlxuLm1kLWFwcC1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5jbGFzcyBGb3JnZUV4dGVudGlvbk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV4dGVudGlvbnMgPSBbXTtcbiAgfVxuXG4gIGdldEV4dGVudGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50aW9ucztcbiAgfVxuXG4gIGFkZEV4dGVudGlvbihuYW1lKSB7XG4gICAgdGhpcy5leHRlbnRpb25zLnB1c2gobmFtZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcmdlRXh0ZW50aW9uTWFuYWdlcjtcbjwvc2NyaXB0PlxuIiwiXG48c2NyaXB0PlxuY2xhc3MgRm9yZ2VWaWV3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZpZXdlcjtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGVudjogXCJMb2NhbFwiLFxuICAgICAgZG9jaWQ6IFwiXCIsXG4gICAgICB1c2VBRFA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlci5hZGRFeHRlbnRpb24oXG4gICAgICBcIkF1dG9kZXNrLkFETi5WaWV3aW5nLkV4dGVuc2lvbi5Db2xvclwiXG4gICAgKTtcbiAgfVxuICBzdGFydF92aWV3ZXIoZG9tKSB7XG4gICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgIHdpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtXG4gICAgICAuZ2V0TW9kZWwoKVxuICAgICAgLnRoZW4oZm9yZ2VmaWxlID0+IHtcbiAgICAgICAgdGhpcy5mb3JnZUZpbGUgPSBmb3JnZWZpbGU7XG4gICAgICAgIHRoaXMuZG9jcyA9IHRoaXMuZm9yZ2VGaWxlLl9jaGlsZHJlbi5nZXQoKTtcbiAgICAgICAgaWYgKHRoaXMuZG9jcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIHZhciBwYXRoID0gdGhpcy5kb2NzWzBdLnBhdGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRvY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgvLitcXC5zdmYkLy50ZXN0KHRoaXMuZG9jc1tpXS5wYXRoKSkge1xuICAgICAgICAgICAgICBwYXRoID0gdGhpcy5kb2NzW2ldLnBhdGg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHBhdGg7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmRvY2lkID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5Qcml2YXRlLkd1aVZpZXdlcjNEKFxuICAgICAgICAgIGRvbSxcbiAgICAgICAgICB0aGlzLmNvbmZpZ1xuICAgICAgICApOyAvLyBXaXRoIHRvb2xiYXJcbiAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuSW5pdGlhbGl6ZXIodGhpcy5vcHRpb25zLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3ZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIHRoaXMudmlld2VyLmxvYWRNb2RlbChcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kb2NpZCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICAgICAgb25JdGVtTG9hZFN1Y2Nlc3MsXG4gICAgICAgICAgICBvbkRvY3VtZW50TG9hZEZhaWx1cmVcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRGYWlsdXJlKHZpZXdlckVycm9yQ29kZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIm9uRG9jdW1lbnRMb2FkRmFpbHVyZSgpIC0gZXJyb3JDb2RlOlwiICsgdmlld2VyRXJyb3JDb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uSXRlbUxvYWRTdWNjZXNzKCkge1xuICAgICAgICAgIGxldCBleHRlbnNpb25zID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuZ2V0RXh0ZW50aW9ucygpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX3NlbGYudmlld2VyLmxvYWRFeHRlbnNpb24oZXh0ZW5zaW9uc1tpXSwgX3NlbGYub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59XG4vLyAoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VWaWV3ZXI7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImF1dG9kZXNrX2ZvcmdlX3ZpZXdlclwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYXBwXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIFZ1ZS5wcm90b3R5cGUuJEZvcmdlVmlld2VyLnN0YXJ0X3ZpZXdlcih0aGlzLiRlbCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8bWQtdG9vbGJhciBjbGFzcz1cImFwcC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgIG1kLWVsZXZhdGlvbj1cIjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLXN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICAgICAgYWx0PVwiU3BpbmFsQklNIFZpZWV3ZXJcIlxuICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1lbmRcIj5cbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gY29sb3JfYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInRvZ2dsZU1lbnVcIj5cbiAgICAgICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC10b29sYmFyPlxuXG4gICAgPG1kLWxpc3Q+XG4gICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cImdvX3RvRHJpdmVcIj5cbiAgICAgICAgPG1kLWljb24+a2V5Ym9hcmRfcmV0dXJuPC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+UmV0dXJuIHRvIFNwaW5hbEJJTSBEcml2ZTwvc3Bhbj5cbiAgICAgIDwvbWQtbGlzdC1pdGVtPlxuXG4gICAgICA8bWQtbGlzdC1pdGVtIEBjbGljaz1cInNpZ25fb3V0XCI+XG4gICAgICAgIDxtZC1pY29uPnBvd2VyX3NldHRpbmdzX25ldzwvbWQtaWNvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlNpZ24gb3V0PC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgPC9tZC1saXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBIZWFkZXJDdHJsIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyQ3RybC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNwaW5hbFJpZ2h0U2lkZUJhclwiLFxuICBkYXRhKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdHJsTWVudSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZU1lbnU6ICgpID0+IHtcbiAgICAgICAgSGVhZGVyQ3RybC50b2dnbGVNZW51KCk7XG4gICAgICB9LFxuICAgICAgZ29fdG9Ecml2ZTogKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgfSxcbiAgICAgIHNpZ25fb3V0OiAoKSA9PiB7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuJHNwaW5hbFN5c3RlbS5zaWduT3V0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvIyEvbG9naW4nKTtcIjtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge31cbn07XG4vLyBjb21wb25lbnRzOiB7IENoYXJ0IH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FwcCAubWQtYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNvbG9yX2JsYWNrIC5tZC1idXR0b24sXG4uY29sb3JfYmxhY2sgLm1kLWljb24sXG4uY29sb3JfYmxhY2sgZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHt9IGZyb20gXCJzcGluYWwtY29yZS1jb25uZWN0b3Jqc1wiO1xuaW1wb3J0ICogYXMgUSBmcm9tIFwicVwiO1xuXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XG4gIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1tcXF1dL2csIFwiXFxcXCQmXCIpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5jbGFzcyBTcGluYWxTeXN0ZW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfTtcbiAgICB0aGlzLnByb21pc2VNb2RlbCA9IG51bGw7XG4gICAgdGhpcy5wcm9taXNlaW5pdCA9IG51bGw7XG4gICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5ID0ge307XG4gICAgdGhpcy5tb2RlbHNQYXRoRGljdGlvbmFyeSA9IHt9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlaW5pdCkgcmV0dXJuIHRoaXMucHJvbWlzZWluaXQucHJvbWlzZTtcbiAgICB0aGlzLnByb21pc2Vpbml0ID0gUS5kZWZlcigpO1xuICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgIGlmICh0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIHdpbmRvdy5TcGluYWxVc2VyTWFuYWdlci5nZXRfdXNlcl9pZChcbiAgICAgICAgXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lLFxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBwYXJzZUludChyZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5jb25uID0gd2luZG93LnNwaW5hbENvcmUuY29ubmVjdChcbiAgICAgICAgICAgIGBodHRwOi8vJHtpZH06JHt0aGlzLnVzZXIucGFzc3dvcmR9QCR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2BcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJvbWlzZWluaXQucmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgICAvLyB0aGlzLnByb21pc2Vpbml0LnJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICBsZXQgcGF0aCA9IGdldFBhcmFtZXRlckJ5TmFtZShcInBhdGhcIik7XG4gICAgaWYgKHBhdGgpIHJldHVybiBhdG9iKHBhdGgpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIGlmICghdGhpcy51c2VyLnVzZXJuYW1lKSB7XG4gICAgICBsZXQgX3VzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGluYWxob21lX2NmZ1wiKTtcbiAgICAgIGlmIChfdXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGF0b2IoX3VzZXIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcjtcbiAgfVxuXG4gIGdldE1vZGVsKCkge1xuICAgIGlmICh0aGlzLnByb21pc2VNb2RlbCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZU1vZGVsLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gUS5kZWZlcigpO1xuICAgIHRoaXMuaW5pdCgpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBwYXRoID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGF0aFwiKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoID0gYXRvYihwYXRoKTtcbiAgICAgICAgd2luZG93LnNwaW5hbENvcmUubG9hZChcbiAgICAgICAgICB0aGlzLmNvbm4sXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBmb3JnZWZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGZvcmdlZmlsZTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZU1vZGVsLnJlc29sdmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLnByb21pc2VNb2RlbC5wcm9taXNlO1xuICB9XG4gIF93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpIHtcbiAgICBpZiAoIW1vZGVsLl9zZXJ2ZXJfaWQgfHwgd2luZG93LkZpbGVTeXN0ZW0uX3RtcF9vYmplY3RzW21vZGVsLl9zZXJ2ZXJfaWRdKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBwcm9taXNlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHByb21pc2UucmVzb2x2ZShtb2RlbCk7XG4gIH1cbiAgd2FpdE1vZGVsUmR5KG1vZGVsKSB7XG4gICAgbGV0IGRlZmVyID0gUS5kZWZlcigpO1xuICAgIHRoaXMuX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgZGVmZXIpO1xuXG4gICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gIH1cbiAgbG9hZE1vZGVsUHRyKG1vZGVsKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuX3NlcnZlcl9pZF0gPSBRLmRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGVsLmxvYWQobSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5yZXNvbHZlKG0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdO1xuICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbiAgbG9hZChwYXRoKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSBRLmRlZmVyKCk7XG5cbiAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgdGhpcy5jb25uLFxuICAgICAgcGF0aCxcbiAgICAgIG0gPT4ge1xuICAgICAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnJlc29sdmUobSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbW9kZWwgaW4gOiBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF07XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BpbmFsU3lzdGVtO1xuIiwiaW1wb3J0IFNwaW5hbFN5c3RlbSBmcm9tIFwiLi9TcGluYWxTeXN0ZW1cIjtcbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VWaWV3ZXIudnVlXCI7XG5pbXBvcnQgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyIGZyb20gXCIuLi9NYWluQ29udGVudC9Gb3JnZUV4dGVudGlvbk1hbmFnZXIudnVlXCI7XG5cbndpbmRvdy5zcGluYWwgPSB7fTtcblxud2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0gPSBuZXcgU3BpbmFsU3lzdGVtKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlciA9IG5ldyBGb3JnZUV4dGVudGlvbk1hbmFnZXIoKTtcbndpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIgPSBuZXcgRm9yZ2VWaWV3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnN0YWxsKFZ1ZSkge1xuICAgIFZ1ZS5wcm90b3R5cGUuJHNwaW5hbFN5c3RlbSA9IHdpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtO1xuICAgIFZ1ZS5wcm90b3R5cGUuJEZvcmdlVmlld2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlcjtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZUV4dGVudGlvbk1hbmFnZXIgPSB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlcjtcbiAgfSxcbiAgc3BpbmFsU3lzdGVtOiB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbSxcbiAgRm9yZ2VWaWV3ZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIsXG4gIEZvcmdlRXh0ZW50aW9uTWFuYWdlcjogd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXJcbn07XG4iLCIiLCI8c2NyaXB0PlxuaW1wb3J0IFJ4IGZyb20gXCJyeGpzL1J4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBIZWFkZXJDdHJsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tZW51VmlzaWJsZU9ic2VydmFibGUgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIG1lbnVWaXNpYmxlID0gIW1lbnVWaXNpYmxlO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG1lbnVWaXNpYmxlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFZpZXdNZW51ID0gYm9vbCA9PiB7XG4gICAgICAgIG1lbnVWaXNpYmxlID0gYm9vbDtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChtZW51VmlzaWJsZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0T2JzZXJ2YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZU9ic2VydmFibGU7XG4gIH1cbn0oKTtcbjwvc2NyaXB0PlxuIiwiIDx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmlld2VyXCJcbiAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgIDwvZGl2PlxuICAgIDxoMj5cbiAgICAgIHt7cGF0aH19XG4gICAgICA8bWQtdG9vbHRpcD57e2Z1bGxQYXRofX08L21kLXRvb2x0aXA+XG4gICAgPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAge3t1c2VybmFtZX19XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgPC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWwgZnJvbSBcIi4uL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcbmltcG9ydCBIZWFkZXJDdHJsIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyQ3RybC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNwaW5hbEhlYWRlclwiLFxuICBkYXRhKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGxQYXRoOiBcIlwiLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIHVzZXJuYW1lOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU1lbnU6IGZ1bmN0aW9uKCkge1xuICAgICAgSGVhZGVyQ3RybC50b2dnbGVNZW51KCk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0udXNlcm5hbWUgPSBzcGluYWwuc3BpbmFsU3lzdGVtLmdldFVzZXIoKS51c2VybmFtZTtcbiAgICB2bS5mdWxsUGF0aCA9IHNwaW5hbC5zcGluYWxTeXN0ZW0uZ2V0UGF0aCgpO1xuICAgIGxldCBwYXRoID0gdm0uZnVsbFBhdGguc3BsaXQoXCIvXCIpO1xuXG4gICAgdm0ucGF0aCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1kLWJ1dHRvbixcbi5tZC1pY29uLFxuZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tIFwidnVlLW1hdGVyaWFsXCI7XG5pbXBvcnQgUnggZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBWdWVSeCBmcm9tIFwidnVlLXJ4XCI7XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblZ1ZS51c2Uoc3BpbmFsKTtcblZ1ZS51c2UoVnVlUngsIFJ4KTtcblxuaW1wb3J0IFwiLi9hcHAuY3NzXCI7XG5cblZ1ZS51c2UoVnVlTWF0ZXJpYWwpO1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI2FwcFwiLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcbiJdfQ==
