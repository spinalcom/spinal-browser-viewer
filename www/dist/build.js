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

      // let user = this.getUser();
      if (this.user.username) {
        window.SpinalUserManager.get_user_id("http://" + window.location.host, this.user.username, this.user.password, function (response) {
          var id = parseInt(response);
          _this.conn = window.spinalCore.connect("http://" + id + ":" + _this.user.password + "@" + window.location.host + "/");
          _this.promiseinit.resolve();
        }, function () {
          // console.log("TEST");
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        });
      } else {
        // console.log("TEST2");
        window.location = "/html/drive/";
      }
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
      toggleMenu: function toggleMenu() {
        _HeaderCtrl2.default.toggleMenu();
      },
      username: ""
    };
  },
  created: function created() {
    var vm = this;
    vm.username = _spinal2.default.spinalSystem.getUser().username;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlaWZ5L2xpYi9pbnNlcnQtY3NzLmpzIiwic3JjL0FwcC52dWU/NmZiYzU4NzMiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLnZ1ZT8wNzM3NzFmNiIsInNyYy9NYWluQ29udGVudC9Gb3JnZVZpZXdlci52dWU/MTFlYTAzY2UiLCJzcmMvTWFpbkNvbnRlbnQvTWFpbkNvbnRlbnQudnVlP2QyMWU3YThjIiwic3JjL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlPzZjMjdjYWNkIiwic3JjL1NwaW5hbFN5c3RlbS9TcGluYWxTeXN0ZW0uanMiLCJzcmMvU3BpbmFsU3lzdGVtL3NwaW5hbC5qcyIsInNyYy9hcHAuY3NzIiwic3JjL2hlYWRlci9IZWFkZXJDdHJsLnZ1ZT8zNTMzMDViMyIsInNyYy9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZT82NTYyMzE1NiIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQTNCQTs7OztBQTNCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUFBOztBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUdBOzs7OztBQUNBOztBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7Ozs7O0FBUEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tDQTs7OztBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFsQkE7Ozs7QUFyQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7SUFBWSxDOzs7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IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgVnVlIC8vIGxhdGUgYmluZFxudmFyIHZlcnNpb25cbnZhciBtYXAgPSAod2luZG93Ll9fVlVFX0hPVF9NQVBfXyA9IE9iamVjdC5jcmVhdGUobnVsbCkpXG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsZWQgPSB0cnVlXG5cbiAgVnVlID0gdnVlLl9fZXNNb2R1bGUgPyB2dWUuZGVmYXVsdCA6IHZ1ZVxuICB2ZXJzaW9uID0gVnVlLnZlcnNpb24uc3BsaXQoJy4nKS5tYXAoTnVtYmVyKVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgLy8gY29tcGF0IHdpdGggPCAyLjAuMC1hbHBoYS43XG4gIGlmIChWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMSkge1xuICAgIGluaXRIb29rTmFtZSA9ICdpbml0J1xuICB9XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gdmVyc2lvblswXSA+PSAyXG4gIGlmICghZXhwb3J0cy5jb21wYXRpYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tITVJdIFlvdSBhcmUgdXNpbmcgYSB2ZXJzaW9uIG9mIHZ1ZS1ob3QtcmVsb2FkLWFwaSB0aGF0IGlzICcgK1xuICAgICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmKG1hcFtpZF0pIHsgcmV0dXJuIH1cbiAgXG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBDdG9yLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgaW5zdGFuY2VzOiBbXVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbW9kdWxlIGlzIHJlY29yZGVkXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKi9cblxuZXhwb3J0cy5pc1JlY29yZGVkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwW2lkXSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ29tcG9uZW50IG9wdGlvbnMgb2JqZWN0IGhvdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpZiAoY3R4ICYmIGluc3RhbmNlcy5pbmRleE9mKGN0eC5wYXJlbnQpIDwgMCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChjdHgucGFyZW50KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGluamVjdEhvb2sob3B0aW9ucywgaW5pdEhvb2tOYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gICAgICBpZiAoIXJlY29yZC5DdG9yKSB7XG4gICAgICAgIHJlY29yZC5DdG9yID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gICAgfSlcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsICdiZWZvcmVEZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGluc3RhbmNlcy5zcGxpY2UoaW5zdGFuY2VzLmluZGV4T2YodGhpcyksIDEpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEluamVjdCBhIGhvb2sgdG8gYSBob3QgcmVsb2FkYWJsZSBjb21wb25lbnQgc28gdGhhdFxuICogd2UgY2FuIGtlZXAgdHJhY2sgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gKi9cblxuZnVuY3Rpb24gaW5qZWN0SG9vayhvcHRpb25zLCBuYW1lLCBob29rKSB7XG4gIHZhciBleGlzdGluZyA9IG9wdGlvbnNbbmFtZV1cbiAgb3B0aW9uc1tuYW1lXSA9IGV4aXN0aW5nXG4gICAgPyBBcnJheS5pc0FycmF5KGV4aXN0aW5nKSA/IGV4aXN0aW5nLmNvbmNhdChob29rKSA6IFtleGlzdGluZywgaG9va11cbiAgICA6IFtob29rXVxufVxuXG5mdW5jdGlvbiB0cnlXcmFwKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIGFyZykge1xuICAgIHRyeSB7XG4gICAgICBmbihpZCwgYXJnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBWdWUgY29tcG9uZW50IGhvdC1yZWxvYWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyAob2xkT3B0aW9ucywgbmV3T3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb2xkT3B0aW9ucykge1xuICAgIGlmICghKGtleSBpbiBuZXdPcHRpb25zKSkge1xuICAgICAgZGVsZXRlIG9sZE9wdGlvbnNba2V5XVxuICAgIH1cbiAgfVxuICBmb3IgKHZhciBrZXkkMSBpbiBuZXdPcHRpb25zKSB7XG4gICAgb2xkT3B0aW9uc1trZXkkMV0gPSBuZXdPcHRpb25zW2tleSQxXVxuICB9XG59XG5cbmV4cG9ydHMucmVyZW5kZXIgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gIH1cbiAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgICAgLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgICAvLyBwcmUgMi41LCBhbGwgc3RhdGljIHRyZWVzIGFyZSBjYWhjZWQgdG9nZXRoZXIgb24gdGhlIGluc3RhbmNlXG4gICAgICBpZiAoaW5zdGFuY2UuX3N0YXRpY1RyZWVzKSB7XG4gICAgICAgIGluc3RhbmNlLl9zdGF0aWNUcmVlcyA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuMFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyBwb3N0IDIuNS40OiB2LW9uY2UgdHJlZXMgYXJlIGNhY2hlZCBvbiBpbnN0YW5jZS5fc3RhdGljVHJlZXMuXG4gICAgICAvLyBQdXJlIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIG9uIHRoZSBzdGF0aWNSZW5kZXJGbnMgYXJyYXlcbiAgICAgIC8vIChib3RoIGFscmVhZHkgcmVzZXQgYWJvdmUpXG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gZnVuY3Rpb25hbCBvciBubyBpbnN0YW5jZSBjcmVhdGVkIHlldFxuICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgcmVjb3JkLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcblxuICAgIC8vIGhhbmRsZSBmdW5jdGlvbmFsIGNvbXBvbmVudCByZS1yZW5kZXJcbiAgICBpZiAocmVjb3JkLm9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gcmVyZW5kZXIgd2l0aCBmdWxsIG9wdGlvbnNcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0ZW1wbGF0ZS1vbmx5IHJlcmVuZGVyLlxuICAgICAgICAvLyBuZWVkIHRvIGluamVjdCB0aGUgc3R5bGUgaW5qZWN0aW9uIGNvZGUgZm9yIENTUyBtb2R1bGVzXG4gICAgICAgIC8vIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICAgIHZhciBpbmplY3RTdHlsZXMgPSByZWNvcmQub3B0aW9ucy5faW5qZWN0U3R5bGVzXG4gICAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgICAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChjdHgpXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlY29yZC5vcHRpb25zLl9DdG9yID0gbnVsbFxuICAgICAgLy8gMi41LjNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5vcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgcmVjb3JkLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgICB9XG4gICAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gICAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAgICAgLy8gcHJlc2VydmUgcHJlIDIuMiBiZWhhdmlvciBmb3IgZ2xvYmFsIG1peGluIGhhbmRsaW5nXG4gICAgICAgIHJlY29yZC5DdG9yLmV4dGVuZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICB9XG4gICAgICB2YXIgbmV3Q3RvciA9IHJlY29yZC5DdG9yLnN1cGVyLmV4dGVuZChvcHRpb25zKVxuICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucyA9IG5ld0N0b3Iub3B0aW9uc1xuICAgICAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgICAgIHJlY29yZC5DdG9yLnByb3RvdHlwZSA9IG5ld0N0b3IucHJvdG90eXBlXG4gICAgICBpZiAobmV3Q3Rvci5yZWxlYXNlKSB7XG4gICAgICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICAgICAgbmV3Q3Rvci5yZWxlYXNlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLiR2bm9kZSAmJiBpbnN0YW5jZS4kdm5vZGUuY29udGV4dCkge1xuICAgICAgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQuJGZvcmNlVXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9KVxufSlcbiIsInZhciBpbnNlcnRlZCA9IGV4cG9ydHMuY2FjaGUgPSB7fVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmV4cG9ydHMuaW5zZXJ0ID0gZnVuY3Rpb24gKGNzcykge1xuICBpZiAoaW5zZXJ0ZWRbY3NzXSkgcmV0dXJuIG5vb3BcbiAgaW5zZXJ0ZWRbY3NzXSA9IHRydWVcblxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKVxuXG4gIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZWxlbSlcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgaW5zZXJ0ZWRbY3NzXSA9IGZhbHNlXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiXG4gICAgICAgdi1jbG9haz5cbiAgICA8bWQtYXBwIG1kLXdhdGVyZmFsbFxuICAgICAgICAgICAgbWQtbW9kZT1cImZpeGVkXCI+XG4gICAgICA8bWQtYXBwLXRvb2xiYXIgY2xhc3M9XCJhcHAtaGVhZGVyXCI+XG4gICAgICAgIDxzcGluYWxIZWFkZXIgLz5cbiAgICAgIDwvbWQtYXBwLXRvb2xiYXI+XG4gICAgICA8bWQtYXBwLWRyYXdlciBjbGFzcz1cIm1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgIDptZC1hY3RpdmUuc3luYz1cIm1lbnVWaXNpYmxlXCI+XG4gICAgICAgIDxTcGluYWxSaWdodFNpZGVCYXIgLz5cbiAgICAgIDwvbWQtYXBwLWRyYXdlcj5cblxuICAgICAgPG1kLWFwcC1jb250ZW50PlxuICAgICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICAgIDwvbWQtYXBwLWNvbnRlbnQ+XG4gICAgPC9tZC1hcHA+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IEhlYWRlckN0cmwgZnJvbSBcIi4vaGVhZGVyL0hlYWRlckN0cmwudnVlXCI7XG5pbXBvcnQgU3BpbmFsUmlnaHRTaWRlQmFyIGZyb20gXCIuL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlXCI7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSBcIi4vTWFpbkNvbnRlbnQvTWFpbkNvbnRlbnQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJhcHBcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVudVZpc2libGVPYnM6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBtZW51VmlzaWJsZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudVZpc2libGVPYnM7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBIZWFkZXJDdHJsLnNldFZpZXdNZW51KG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHRoaXMuJHN1YnNjcmliZVRvKEhlYWRlckN0cmwuZ2V0T2JzZXJ2YWJsZSgpLCBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHZtLm1lbnVWaXNpYmxlT2JzID0gdmFsO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHsgc3BpbmFsSGVhZGVyLCBTcGluYWxSaWdodFNpZGVCYXIsIE1haW5Db250ZW50IH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcHAgLm1kLWFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYXBwLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5tZC1hcHAtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbjwvc3R5bGU+XG48c3R5bGU+XG4ubWQtYXBwLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbmNsYXNzIEZvcmdlRXh0ZW50aW9uTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXh0ZW50aW9ucyA9IFtdO1xuICB9XG5cbiAgZ2V0RXh0ZW50aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnRpb25zO1xuICB9XG5cbiAgYWRkRXh0ZW50aW9uKG5hbWUpIHtcbiAgICB0aGlzLmV4dGVudGlvbnMucHVzaChuYW1lKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyO1xuPC9zY3JpcHQ+XG4iLCJcbjxzY3JpcHQ+XG5jbGFzcyBGb3JnZVZpZXdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmlld2VyO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgZW52OiBcIkxvY2FsXCIsXG4gICAgICBkb2NpZDogXCJcIixcbiAgICAgIHVzZUFEUDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuZG9jcyA9IFtdO1xuICAgIHdpbmRvdy5zcGluYWwuRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmFkZEV4dGVudGlvbihcbiAgICAgIFwiQXV0b2Rlc2suQUROLlZpZXdpbmcuRXh0ZW5zaW9uLkNvbG9yXCJcbiAgICApO1xuICB9XG4gIHN0YXJ0X3ZpZXdlcihkb20pIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgd2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW1cbiAgICAgIC5nZXRNb2RlbCgpXG4gICAgICAudGhlbihmb3JnZWZpbGUgPT4ge1xuICAgICAgICB0aGlzLmZvcmdlRmlsZSA9IGZvcmdlZmlsZTtcbiAgICAgICAgdGhpcy5kb2NzID0gdGhpcy5mb3JnZUZpbGUuX2NoaWxkcmVuLmdldCgpO1xuICAgICAgICBpZiAodGhpcy5kb2NzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgdmFyIHBhdGggPSB0aGlzLmRvY3NbMF0ucGF0aDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZG9jcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKC8uK1xcLnN2ZiQvLnRlc3QodGhpcy5kb2NzW2ldLnBhdGgpKSB7XG4gICAgICAgICAgICAgIHBhdGggPSB0aGlzLmRvY3NbaV0ucGF0aDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgcGF0aDtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZG9jaWQgPSBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IHdpbmRvdy5BdXRvZGVzay5WaWV3aW5nLlByaXZhdGUuR3VpVmlld2VyM0QoXG4gICAgICAgICAgZG9tLFxuICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7IC8vIFdpdGggdG9vbGJhclxuICAgICAgICB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5Jbml0aWFsaXplcih0aGlzLm9wdGlvbnMsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdlci5pbml0aWFsaXplKCk7XG4gICAgICAgICAgdGhpcy52aWV3ZXIubG9hZE1vZGVsKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRvY2lkLFxuICAgICAgICAgICAgdGhpcy5jb25maWcsXG4gICAgICAgICAgICBvbkl0ZW1Mb2FkU3VjY2VzcyxcbiAgICAgICAgICAgIG9uRG9jdW1lbnRMb2FkRmFpbHVyZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBvbkRvY3VtZW50TG9hZEZhaWx1cmUodmlld2VyRXJyb3JDb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwib25Eb2N1bWVudExvYWRGYWlsdXJlKCkgLSBlcnJvckNvZGU6XCIgKyB2aWV3ZXJFcnJvckNvZGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25JdGVtTG9hZFN1Y2Nlc3MoKSB7XG4gICAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlci5nZXRFeHRlbnRpb25zKCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2VsZi52aWV3ZXIubG9hZEV4dGVuc2lvbihleHRlbnNpb25zW2ldLCBfc2VsZi5vcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cbi8vICgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JnZVZpZXdlcjtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXV0b2Rlc2tfZm9yZ2Vfdmlld2VyXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJhcHBcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgVnVlLnByb3RvdHlwZS4kRm9yZ2VWaWV3ZXIuc3RhcnRfdmlld2VyKHRoaXMuJGVsKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxtZC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgbWQtZWxldmF0aW9uPVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tc3RhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvYXNzZXRzL2ltZy9TcGluYWxCSU1WaWV3ZXJMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmllZXdlclwiXG4gICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDJweDttYXJnaW4tdG9wOiA0cHg7XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBjb2xvcl9ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG5cbiAgICA8bWQtbGlzdD5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiZ29fdG9Ecml2ZVwiPlxuICAgICAgICA8bWQtaWNvbj5rZXlib2FyZF9yZXR1cm48L21kLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5SZXR1cm4gdG8gU3BpbmFsQklNIERyaXZlPC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwic2lnbl9vdXRcIj5cbiAgICAgICAgPG1kLWljb24+cG93ZXJfc2V0dGluZ3NfbmV3PC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+U2lnbiBvdXQ8L3NwYW4+XG4gICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICA8L21kLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEhlYWRlckN0cmwgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJDdHJsLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3BpbmFsUmlnaHRTaWRlQmFyXCIsXG4gIGRhdGEoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN0cmxNZW51KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlTWVudTogKCkgPT4ge1xuICAgICAgICBIZWFkZXJDdHJsLnRvZ2dsZU1lbnUoKTtcbiAgICAgIH0sXG4gICAgICBnb190b0RyaXZlOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICB9LFxuICAgICAgc2lnbl9vdXQ6ICgpID0+IHtcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kc3BpbmFsU3lzdGVtLnNpZ25PdXQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS8jIS9sb2dpbicpO1wiO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7fVxufTtcbi8vIGNvbXBvbmVudHM6IHsgQ2hhcnQgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sb3JfYmxhY2sgLm1kLWJ1dHRvbixcbi5jb2xvcl9ibGFjayAubWQtaWNvbixcbi5jb2xvcl9ibGFjayBkaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQge30gZnJvbSBcInNwaW5hbC1jb3JlLWNvbm5lY3RvcmpzXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gXCJxXCI7XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiBcIlwiO1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG59XG5cbmNsYXNzIFNwaW5hbFN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLnByb21pc2Vpbml0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcbiAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5ID0ge307XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnByb21pc2Vpbml0KSByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBRLmRlZmVyKCk7XG5cbiAgICAvLyBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlcigpO1xuICAgIGlmICh0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIHdpbmRvdy5TcGluYWxVc2VyTWFuYWdlci5nZXRfdXNlcl9pZChcbiAgICAgICAgXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lLFxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQsXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBwYXJzZUludChyZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5jb25uID0gd2luZG93LnNwaW5hbENvcmUuY29ubmVjdChcbiAgICAgICAgICAgIGBodHRwOi8vJHtpZH06JHt0aGlzLnVzZXIucGFzc3dvcmR9QCR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2BcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJvbWlzZWluaXQucmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUXCIpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgLy8gdGhpcy5wcm9taXNlaW5pdC5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUMlwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb21pc2Vpbml0LnByb21pc2U7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIGlmICghdGhpcy51c2VyLnVzZXJuYW1lKSB7XG4gICAgICBsZXQgX3VzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGluYWxob21lX2NmZ1wiKTtcbiAgICAgIGlmIChfdXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGF0b2IoX3VzZXIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcjtcbiAgfVxuXG4gIGdldE1vZGVsKCkge1xuICAgIGlmICh0aGlzLnByb21pc2VNb2RlbCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZU1vZGVsLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gUS5kZWZlcigpO1xuICAgIHRoaXMuaW5pdCgpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBwYXRoID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGF0aFwiKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoID0gYXRvYihwYXRoKTtcbiAgICAgICAgd2luZG93LnNwaW5hbENvcmUubG9hZChcbiAgICAgICAgICB0aGlzLmNvbm4sXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBmb3JnZWZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGZvcmdlZmlsZTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZU1vZGVsLnJlc29sdmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAvLyBkZWZlci5yZWplY3QoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLnByb21pc2VNb2RlbC5wcm9taXNlO1xuICB9XG4gIF93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpIHtcbiAgICBpZiAoIW1vZGVsLl9zZXJ2ZXJfaWQgfHwgd2luZG93LkZpbGVTeXN0ZW0uX3RtcF9vYmplY3RzW21vZGVsLl9zZXJ2ZXJfaWRdKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBwcm9taXNlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHByb21pc2UucmVzb2x2ZShtb2RlbCk7XG4gIH1cbiAgd2FpdE1vZGVsUmR5KG1vZGVsKSB7XG4gICAgbGV0IGRlZmVyID0gUS5kZWZlcigpO1xuICAgIHRoaXMuX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgZGVmZXIpO1xuXG4gICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gIH1cbiAgbG9hZE1vZGVsUHRyKG1vZGVsKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuX3NlcnZlcl9pZF0gPSBRLmRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGVsLmxvYWQobSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5yZXNvbHZlKG0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdO1xuICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLl9zZXJ2ZXJfaWRdID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5fc2VydmVyX2lkXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbiAgbG9hZChwYXRoKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSBRLmRlZmVyKCk7XG5cbiAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgdGhpcy5jb25uLFxuICAgICAgcGF0aCxcbiAgICAgIG0gPT4ge1xuICAgICAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnJlc29sdmUobSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbW9kZWwgaW4gOiBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF07XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BpbmFsU3lzdGVtO1xuIiwiaW1wb3J0IFNwaW5hbFN5c3RlbSBmcm9tIFwiLi9TcGluYWxTeXN0ZW1cIjtcbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VWaWV3ZXIudnVlXCI7XG5pbXBvcnQgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyIGZyb20gXCIuLi9NYWluQ29udGVudC9Gb3JnZUV4dGVudGlvbk1hbmFnZXIudnVlXCI7XG5cbndpbmRvdy5zcGluYWwgPSB7fTtcblxud2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0gPSBuZXcgU3BpbmFsU3lzdGVtKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlciA9IG5ldyBGb3JnZUV4dGVudGlvbk1hbmFnZXIoKTtcbndpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIgPSBuZXcgRm9yZ2VWaWV3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnN0YWxsKFZ1ZSkge1xuICAgIFZ1ZS5wcm90b3R5cGUuJHNwaW5hbFN5c3RlbSA9IHdpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtO1xuICAgIFZ1ZS5wcm90b3R5cGUuJEZvcmdlVmlld2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlcjtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZUV4dGVudGlvbk1hbmFnZXIgPSB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlcjtcbiAgfSxcbiAgc3BpbmFsU3lzdGVtOiB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbSxcbiAgRm9yZ2VWaWV3ZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIsXG4gIEZvcmdlRXh0ZW50aW9uTWFuYWdlcjogd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXJcbn07XG4iLCIiLCI8c2NyaXB0PlxuaW1wb3J0IFJ4IGZyb20gXCJyeGpzL1J4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBIZWFkZXJDdHJsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tZW51VmlzaWJsZU9ic2VydmFibGUgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIG1lbnVWaXNpYmxlID0gIW1lbnVWaXNpYmxlO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG1lbnVWaXNpYmxlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFZpZXdNZW51ID0gYm9vbCA9PiB7XG4gICAgICAgIG1lbnVWaXNpYmxlID0gYm9vbDtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChtZW51VmlzaWJsZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0T2JzZXJ2YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZU9ic2VydmFibGU7XG4gIH1cbn0oKTtcbjwvc2NyaXB0PlxuIiwiIDx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmlld2VyXCJcbiAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tZW5kXCI+XG4gICAgICB7e3VzZXJuYW1lfX1cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJ0b2dnbGVNZW51XCI+XG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XG4gICAgICA8L21kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbCBmcm9tIFwiLi4vU3BpbmFsU3lzdGVtL3NwaW5hbFwiO1xuaW1wb3J0IEhlYWRlckN0cmwgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJDdHJsLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwic3BpbmFsSGVhZGVyXCIsXG4gIGRhdGEoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlTWVudTogKCkgPT4ge1xuICAgICAgICBIZWFkZXJDdHJsLnRvZ2dsZU1lbnUoKTtcbiAgICAgIH0sXG4gICAgICB1c2VybmFtZTogXCJcIlxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2bS51c2VybmFtZSA9IHNwaW5hbC5zcGluYWxTeXN0ZW0uZ2V0VXNlcigpLnVzZXJuYW1lO1xuICB9XG59O1xuLy8gaHR0cDovL2xvY2FsaG9zdDo3Nzc3L2h0bWwvdmlld2VyLz9wYXRoPUwxOWZkWE5sY25OZlh5OWhaRzFwYmk5a1lYUmhZMlZ1ZEdWeWQybDBhSE5sY25abGNuTT1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1kLWJ1dHRvbixcbi5tZC1pY29uLFxuZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tIFwidnVlLW1hdGVyaWFsXCI7XG5pbXBvcnQgUnggZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBWdWVSeCBmcm9tIFwidnVlLXJ4XCI7XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblZ1ZS51c2Uoc3BpbmFsKTtcblZ1ZS51c2UoVnVlUngsIFJ4KTtcblxuaW1wb3J0IFwiLi9hcHAuY3NzXCI7XG5cblZ1ZS51c2UoVnVlTWF0ZXJpYWwpO1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI2FwcFwiLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcbiJdfQ==
