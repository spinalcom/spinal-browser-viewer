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
})({"4RZ1K":[function(require,module,exports) {
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
 */ // import { SpinalMountExtention } from "spinal-env-viewer-panel-manager-service";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TOP_BAR_HOOK_NAME", ()=>TOP_BAR_HOOK_NAME);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vuetify = require("vuetify");
var _vuetifyDefault = parcelHelpers.interopDefault(_vuetify);
var _selectModelModalVue = require("./src/views/SelectModelModal.vue");
var _selectModelModalVueDefault = parcelHelpers.interopDefault(_selectModelModalVue);
var _projectObjectInContextVue = require("./src/views/ProjectBimObj/ProjectObjectInContext.vue");
var _projectObjectInContextVueDefault = parcelHelpers.interopDefault(_projectObjectInContextVue);
var _assingViewVue = require("./src/views/ProjectBimObj/AssingView/AssingView.vue");
var _assingViewVueDefault = parcelHelpers.interopDefault(_assingViewVue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _generate = require("./src/buttons/generate");
var _addObjectToContext = require("./src/buttons/AddObjectToContext");
var _runGeneration = require("./src/buttons/RunGeneration");
var _manualAssingment = require("./src/buttons/ManualAssingment");
var _index = require("./src/views/diffViewer/index");
var _index1 = require("./src/views/CmdRunViewer/index");
var _mergeBimGeo = require("./src/views/MergeBimGeo");
(0, _vueDefault.default).use((0, _vuetifyDefault.default));
const TOP_BAR_HOOK_NAME = "GraphManagerTopBar";
const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";
//export const mure porte fenetere
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(TOP_BAR_HOOK_NAME, new (0, _generate.ButtonGenerateContext)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _addObjectToContext.ButtonAddObjectToCategory)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _runGeneration.GenerateContextGeo)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _manualAssingment.ManualAssingmentButton)(), [
    7
]);
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("DialogGenerateContext", (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "DialogGenerateContext",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _selectModelModalVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body,
    panel: {
        title: "Generate / Update Spatial context",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "405px",
        width: "700px",
        height: "250px"
    }
}));
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("DialogAddObject", (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "DialogAddObject",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _projectObjectInContextVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body,
    panel: {
        title: "Project objects in context",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "405px",
        width: "400px",
        height: "250px"
    }
}));
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("panelManualAssingView", (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "panelManualAssingView",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _assingViewVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body,
    panel: {
        title: "Manual assignation",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "405px",
        width: "690px",
        height: "250px"
    }
}));

},{"spinal-env-viewer-context-menu-service":"kHlxv","vue":"gt5MM","vuetify":"WtHLj","./src/views/SelectModelModal.vue":"bBRgF","./src/views/ProjectBimObj/ProjectObjectInContext.vue":"hDef4","./src/views/ProjectBimObj/AssingView/AssingView.vue":"flkAA","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./src/buttons/generate":"7F7ym","./src/buttons/AddObjectToContext":"8Ax3Z","./src/buttons/RunGeneration":"35gS7","./src/buttons/ManualAssingment":"fTm25","./src/views/diffViewer/index":"jv13u","./src/views/CmdRunViewer/index":"7MmiY","./src/views/MergeBimGeo":"fx696","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBRgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5c14b22e1472301d");
    if (script.__esModule) script = script.default;
    script.render = require("cf0aeb7a2db2442").render;
    script.staticRenderFns = require("cf0aeb7a2db2442").staticRenderFns;
    script._scopeId = "data-v-29fec1";
    script.__cssModules = require("deac2695f5dda173").default;
    require("45325a20062400ab").default(script);
    script.__scopeId = "data-v-29fec1";
    script.__file = "SelectModelModal.vue";
};
initialize();
exports.default = script;

},{"5c14b22e1472301d":"e2Stg","cf0aeb7a2db2442":"f4AGl","deac2695f5dda173":"4CJ1M","45325a20062400ab":"gBQrE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2Stg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basicSelectModelVue = require("./BasicSelectModel.vue");
var _basicSelectModelVueDefault = parcelHelpers.interopDefault(_basicSelectModelVue);
var _advencedSelectModelVue = require("./AdvancedSelect/AdvencedSelectModel.vue");
var _advencedSelectModelVueDefault = parcelHelpers.interopDefault(_advencedSelectModelVue);
var _spatialDiffSettingsVue = require("./diffViewer/SpatialDiffSettings.vue");
var _spatialDiffSettingsVueDefault = parcelHelpers.interopDefault(_spatialDiffSettingsVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "DialogGenerateContext",
    components: {
        Basicselectmodel: (0, _basicSelectModelVueDefault.default),
        AdvencedSelectModel: (0, _advencedSelectModelVueDefault.default),
        SpatialDiffSettings: (0, _spatialDiffSettingsVueDefault.default)
    },
    data: function() {
        return {
            models: [],
            configName: "default",
            spin: false,
            active: 0,
            hideDiffSettings: true,
            archiData: null,
            buildingServId: NaN,
            isRawDataGen: false,
            BIMGeocontextServId: NaN,
            selectedModel: null,
            selectedModelModal: null,
            showDialog: false,
            showSnackbar: false,
            msgSnackbar: "",
            durationSnakebar: Infinity,
            scripts: [
                {
                    divider: true,
                    title: "Script before update"
                },
                {
                    title: "Update bimobjects from externalIds",
                    fct: this.updateDbIds
                },
                {
                    title: "Update Room's dbid attribute information",
                    fct: this.updateRoomDbId
                },
                {
                    divider: true,
                    title: "Script after update"
                },
                {
                    title: "Set level attribute in context spatial",
                    fct: this.setLevelInContextGeo
                },
                {
                    title: "Set area attribute in context spatial",
                    fct: this.setAreaInContextGeo
                },
                {
                    title: "Set center postion attribute in context spatial",
                    fct: this.setCenterPosInContextGeo
                }
            ],
            updateBimobjectsName: true,
            updateBimobjectsDbid: true
        };
    },
    computed: {
        bimfiles () {
            return this.models.map((child)=>{
                return child.info.name.get();
            });
        },
        bimFileId () {
            const bimFile = this.getBimFile();
            if (bimFile) return bimFile.info.id.get();
            return "";
        }
    },
    async mounted () {
        const graph = (0, _spinalSpatialReferential.getGraph)();
        let context = await graph.getContext("BimFileContext");
        if (!context) return;
        (0, _spinalSpatialReferential.addNodeGraphService)(context);
        const children = await context.getChildrenInContext(context);
        for (const child of children){
            (0, _spinalSpatialReferential.addNodeGraphService)(child);
            this.models.push(child);
        }
    },
    methods: {
        updateDbIds () {
            this.showDialog = true;
        },
        async updateDbIdsConfirm () {
            this.showDialog = false;
            this.spin = true;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            try {
                for(let i = 0; i < this.models.length; i++){
                    const bimFileNode = this.models[i];
                    if (this.selectedModelModal.includes(bimFileNode.info.name.get())) {
                        const model = await (0, _spinalSpatialReferential.loadBimFile)(bimFileNode, viewer);
                        await (0, _spinalSpatialReferential.updateBimObjectFromBimFileId)(bimFileNode.info.id.get(), model, this.updateBimobjectsName, this.updateBimobjectsDbid);
                    }
                }
            } catch (e) {
                console.error(e);
            } finally{
                this.spin = false;
            }
        },
        updateRoomDbId () {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            return (0, _spinalSpatialReferential.updateRoomDbId)(graph);
        },
        setLevelInContextGeo () {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            return (0, _spinalSpatialReferential.setLevelInContextGeo)(graph);
        },
        setAreaInContextGeo () {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            return (0, _spinalSpatialReferential.setAreaInContextGeo)(graph);
        },
        setCenterPosInContextGeo () {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            return (0, _spinalSpatialReferential.setCenterPosInContextGeo)(graph, this.callbackScript);
        },
        callbackScript (msg) {
            if (!msg || msg === "done") this.durationSnakebar = 4000;
            else {
                this.showSnackbar = true;
                this.durationSnakebar = Infinity;
            }
            this.msgSnackbar = msg;
        },
        async launchFct (fct) {
            this.spin = true;
            try {
                await fct();
                console.log("done");
            } catch (error) {
                console.error(error);
            } finally{
                this.spin = false;
            }
        },
        getBimFile () {
            for(let i = 0; i < this.models.length; i++){
                if (this.models[i].info.name.get() === this.selectedModel) return this.models[i];
            }
        },
        async generate (opt) {
            this.spin = true;
            const graph = (0, _spinalSpatialReferential.getGraph)();
            try {
                this.selectedModel = opt.selectedModel;
                const bimFile = this.getBimFile();
                const viewer = (0, _spinalSpatialReferential.getViewer)();
                console.log("start load bimfile");
                const archi = await (0, _spinalSpatialReferential.getArchi)(graph, this.configName, bimFile, viewer);
                (0, _spinalSpatialReferential.transformArchi)(archi);
                console.log("get Archi Done", archi);
                this.archiData = archi;
                this.hideDiffSettings = false;
                this.isRawDataGen = opt.isRawData;
                this.buildingServId = opt.buildingServId;
                this.BIMGeocontextServId = opt.BIMGeocontextServId;
            } catch (e) {
                console.error(e);
            } finally{
                this.spin = false;
            }
        },
        async advancedGenerate (cfg) {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            const spatialConfig = await (0, _spinalSpatialReferential.loadConfig)(graph);
            spatialConfig.saveConfig(cfg);
            await this.generate(cfg.basic);
        },
        opened () {},
        removed () {},
        close () {},
        closeDialog () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./BasicSelectModel.vue":"1tQzJ","./AdvancedSelect/AdvencedSelectModel.vue":"brvGJ","./diffViewer/SpatialDiffSettings.vue":"gdzzF","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tQzJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c45bb18d0bf222ab");
    if (script.__esModule) script = script.default;
    script.render = require("dbee58c23ca58fbe").render;
    script.staticRenderFns = require("dbee58c23ca58fbe").staticRenderFns;
    script._scopeId = "data-v-b8ec1f";
    script.__cssModules = require("77934f7f04eaa300").default;
    require("ad040a605dea86fe").default(script);
    script.__scopeId = "data-v-b8ec1f";
    script.__file = "BasicSelectModel.vue";
};
initialize();
exports.default = script;

},{"c45bb18d0bf222ab":"hIDQO","dbee58c23ca58fbe":"2cl8B","77934f7f04eaa300":"injUF","ad040a605dea86fe":"bDJ59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIDQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var scriptExports = {
    name: "Basicselectmodel",
    props: {
        bimfiles: {
            require: true,
            type: Array,
            default: ()=>[]
        },
        btnLabel: {
            type: String,
            default: ()=>"Continue"
        },
        btnDisabled: {
            type: Boolean,
            default: ()=>false
        }
    },
    data () {
        return {
            addLevel: false,
            selectedModel: null,
            manualAssingment: new Map(),
            newBuildingValue: "",
            openDialogNewBuilding: false,
            buildingSelectedValue: null,
            buildings: [],
            isRawData: false,
            newContextValue: "",
            openDialogNewcontext: false,
            contextSelectedValue: null,
            contexts: []
        };
    },
    computed: {
        btnDisabledCompu () {
            return this.btnDisabled || this.selectedModel === null || !(this.buildingSelectedValue || this.contextSelectedValue);
        }
    },
    mounted () {
        return this.getBuildings();
    },
    watch: {
        isRawData () {
            if (this.isRawData === false) return this.getBuildings();
            else return this.getBimGeoContexts();
        }
    },
    methods: {
        onModelSelected (value) {
            this.selectedModel = value;
        },
        async getBuildings () {
            if (this.isRawData === false) {
                const graph = (0, _spinalSpatialReferential.getGraph)();
                const contextGeo = await (0, _spinalSpatialReferential.getContextSpatial)(graph);
                const buildings = await contextGeo.getChildrenInContext(contextGeo);
                this.buildings = buildings.map((itm)=>{
                    return {
                        label: itm.info.name.get(),
                        value: itm._server_id
                    };
                });
                if (this.buildings.length === 1) this.buildingSelectedValue = this.buildings[0].value;
            }
        },
        async getBimGeoContexts () {
            if (this.isRawData === true) {
                const contexts = await (0, _spinalSpatialReferential.getBimGeoContexts)();
                this.contexts = contexts.map((itm)=>{
                    return {
                        label: itm.info.name.get(),
                        value: itm._server_id
                    };
                });
                if (this.contexts.length === 1) this.contextSelectedValue = this.contexts[0].value;
            }
        },
        async onAcceptNewBuilding (buildingName) {
            const graph = (0, _spinalSpatialReferential.getGraph)();
            const contextGeo = await (0, _spinalSpatialReferential.getContextSpatial)(graph);
            const node = await (0, _spinalEnvViewerContextGeographicServiceDefault.default).addBuilding(contextGeo.info.id.get(), contextGeo.info.id.get(), buildingName);
            await (0, _spinalSpatialReferential.waitGetServerId)(node);
            return this.getBuildings();
        },
        async onAcceptNewContext (contextName) {
            const context = await (0, _spinalSpatialReferential.createBIMGeoContext)(contextName);
            await (0, _spinalSpatialReferential.waitGetServerId)(context);
            return this.getBimGeoContexts();
        },
        onContinue () {
            this.$emit("continue", {
                isRawData: this.isRawData,
                selectedModel: this.selectedModel,
                buildingServId: this.buildingSelectedValue,
                BIMGeocontextServId: this.contextSelectedValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cl8B":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", [
        _c("v-card-text", [
            _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "modelselect"
                    }
                }, [
                    _vm._v("Selection of the model that contains the architecture")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    attrs: {
                        "id": "modelselect",
                        "name": "modelselect",
                        "md-dense": ""
                    },
                    model: {
                        value: _vm.selectedModel,
                        callback: function($$v) {
                            _vm.selectedModel = $$v;
                        },
                        expression: "selectedModel"
                    }
                }, _vm._l(_vm.bimfiles, function(bimfile, idx) {
                    return _c("md-option", {
                        key: idx,
                        attrs: {
                            "value": bimfile
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(bimfile) + "\n        ")
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c("md-checkbox", {
                model: {
                    value: _vm.isRawData,
                    callback: function($$v) {
                        _vm.isRawData = $$v;
                    },
                    expression: "isRawData"
                }
            }, [
                _vm._v("Mode Raw Data")
            ]),
            _vm._v(" "),
            _vm.isRawData ? _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "context select"
                    }
                }, [
                    _vm._v("Select a BIM Geo Context")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    staticClass: "context-select",
                    attrs: {
                        "id": "context select",
                        "name": "context select",
                        "md-dense": ""
                    },
                    model: {
                        value: _vm.contextSelectedValue,
                        callback: function($$v) {
                            _vm.contextSelectedValue = $$v;
                        },
                        expression: "contextSelectedValue"
                    }
                }, _vm._l(_vm.contexts, function(context) {
                    return _c("md-option", {
                        key: context.value,
                        attrs: {
                            "value": context.value
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(context.label) + "\n        ")
                    ]);
                }), 1),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-icon-button",
                    attrs: {
                        "md-dense": ""
                    },
                    on: {
                        "click": function($event) {
                            _vm.newcontextValue = "";
                            _vm.openDialogNewcontext = true;
                        }
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("add")
                    ])
                ], 1)
            ], 1) : _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "building select"
                    }
                }, [
                    _vm._v("select the building")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    staticClass: "building-select",
                    attrs: {
                        "id": "building select",
                        "name": "building select",
                        "md-dense": ""
                    },
                    model: {
                        value: _vm.buildingSelectedValue,
                        callback: function($$v) {
                            _vm.buildingSelectedValue = $$v;
                        },
                        expression: "buildingSelectedValue"
                    }
                }, _vm._l(_vm.buildings, function(building) {
                    return _c("md-option", {
                        key: building.value,
                        attrs: {
                            "value": building.value
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(building.label) + "\n        ")
                    ]);
                }), 1),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-icon-button",
                    attrs: {
                        "md-dense": ""
                    },
                    on: {
                        "click": function($event) {
                            _vm.newBuildingValue = "";
                            _vm.openDialogNewBuilding = true;
                        }
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("add")
                    ])
                ], 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "color": "green darken-1",
                    "flat": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.onContinue
                }
            }, [
                _vm._v("\n      " + _vm._s(_vm.btnLabel) + "\n    ")
            ])
        ], 1),
        _vm._v(" "),
        _c("md-dialog-prompt", {
            attrs: {
                "md-active": _vm.openDialogNewBuilding,
                "md-title": "building name",
                "md-input-maxlength": "100",
                "md-input-placeholder": "Type the building name...",
                "md-confirm-text": "Done"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.openDialogNewBuilding = $event;
                },
                "update:md-active": function($event) {
                    _vm.openDialogNewBuilding = $event;
                },
                "md-confirm": function($event) {
                    return _vm.onAcceptNewBuilding(_vm.newBuildingValue);
                }
            },
            model: {
                value: _vm.newBuildingValue,
                callback: function($$v) {
                    _vm.newBuildingValue = $$v;
                },
                expression: "newBuildingValue"
            }
        }),
        _vm._v(" "),
        _c("md-dialog-prompt", {
            attrs: {
                "md-active": _vm.openDialogNewcontext,
                "md-title": "context name",
                "md-input-maxlength": "50",
                "md-input-placeholder": "Type the Context name...",
                "md-confirm-text": "Done"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.openDialogNewcontext = $event;
                },
                "update:md-active": function($event) {
                    _vm.openDialogNewcontext = $event;
                },
                "md-confirm": function($event) {
                    return _vm.onAcceptNewContext(_vm.newContextValue);
                }
            },
            model: {
                value: _vm.newContextValue,
                callback: function($$v) {
                    _vm.newContextValue = $$v;
                },
                expression: "newContextValue"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"injUF":[function() {},{}],"bDJ59":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brvGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3b6211360796913f");
    if (script.__esModule) script = script.default;
    script.render = require("3dde13f7983352d7").render;
    script.staticRenderFns = require("3dde13f7983352d7").staticRenderFns;
    script._scopeId = "data-v-0fa7a5";
    script.__cssModules = require("2e2dea8e206343c5").default;
    require("7819e45466f5d459").default(script);
    script.__scopeId = "data-v-0fa7a5";
    script.__file = "AdvencedSelectModel.vue";
};
initialize();
exports.default = script;

},{"3b6211360796913f":"3SnNg","3dde13f7983352d7":"jTK8W","2e2dea8e206343c5":"3Ipfa","7819e45466f5d459":"eByqZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SnNg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basicSelectModelVue = require("../BasicSelectModel.vue");
var _basicSelectModelVueDefault = parcelHelpers.interopDefault(_basicSelectModelVue);
var _showTestListVue = require("../showTestList.vue");
var _showTestListVueDefault = parcelHelpers.interopDefault(_showTestListVue);
var _advenceSettingsVue = require("./AdvenceSettings.vue");
var _advenceSettingsVueDefault = parcelHelpers.interopDefault(_advenceSettingsVue);
var _advenceSettingStructureVue = require("./AdvenceSettingStructure.vue");
var _advenceSettingStructureVueDefault = parcelHelpers.interopDefault(_advenceSettingStructureVue);
var _getObjFromRvtModel = require("../../services/getObjFromRvtModel");
0, _advenceSettingsVueDefault.default;
var scriptExports = {
    name: "AdvencedSelectModel",
    components: {
        Basicselectmodel: (0, _basicSelectModelVueDefault.default),
        AdvenceSettings: (0, _advenceSettingsVueDefault.default),
        AdvenceSettingStructure: (0, _advenceSettingStructureVueDefault.default),
        ShowTestList: (0, _showTestListVueDefault.default)
    },
    props: {
        bimfiles: {
            require: true,
            type: Array,
            default: ()=>[]
        },
        btnLabel: {
            type: String,
            default: ()=>"Continue"
        },
        btnDisabled: {
            type: Boolean,
            default: ()=>false
        },
        configNames: {
            require: true,
            type: Array,
            default: ()=>[]
        }
    },
    data () {
        return {
            firstname: "test",
            configName: "default",
            advenced: [],
            e1: 1,
            isRoomRefOK: true,
            showTestList: false,
            basic: {},
            levelSelect: [],
            roomSelect: [],
            floorSelect: [],
            structureSelect: [],
            testItems: [],
            floorRoomNbr: "Number",
            floorRoomName: "",
            floorLevelName: ""
        };
    },
    computed: {
        structureStep () {
            return this.isRoomRefOK ? 4 : 5;
        }
    },
    methods: {
        onCancel () {
            this.e1 = this.e1 - 1;
        },
        onBasicSelect (value) {
            this.e1 = this.e1 + 1;
            this.basic = value;
        },
        onLevelSelect (value) {
            this.levelSelect = value;
            this.e1 = this.e1 + 1;
        },
        onRoomSelect (value) {
            this.roomSelect = value;
            this.e1 = this.e1 + 1;
        },
        onFloorSelect (value) {
            this.floorSelect = value;
            this.e1 = this.e1 + 1;
        },
        onStructureSelect (value) {
            this.structureSelect = value;
            this.e1 = this.e1 + 1;
        },
        onGenerate () {
            const cfg = {
                configName: this.configName,
                basic: this.basic,
                levelSelect: this.createData(this.levelSelect),
                roomSelect: this.createData(this.roomSelect),
                structureSelect: this.createData(this.structureSelect)
            };
            if (this.isRoomRefOK === false) Object.assign(cfg, {
                floorSelect: this.createData(this.floorSelect)
            });
            if (this.floorRoomNbr) Object.assign(cfg, {
                floorRoomNbr: this.floorRoomNbr
            });
            if (this.floorRoomName) Object.assign(cfg, {
                floorRoomName: this.floorRoomName
            });
            if (this.floorLevelName) Object.assign(cfg, {
                floorLevelName: this.floorLevelName
            });
            this.$emit("onGenerate", cfg);
        },
        createData (lstObj) {
            const res = [];
            for (const d of lstObj){
                const obj = {
                    key: d.key.toString(),
                    value: d.value.toString()
                };
                if (d.isCat === true) Object.assign(obj, {
                    isCat: true
                });
                res.push(obj);
            }
            return res;
        },
        async seeTestList (dataRegexp) {
            const model = (0, _getObjFromRvtModel.getModelByName)(this.basic.selectedModel);
            this.testItems = await (0, _getObjFromRvtModel.getObjFromRvtModel)(model, dataRegexp);
            this.showTestList = true;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../BasicSelectModel.vue":"1tQzJ","../showTestList.vue":"iNYJ6","./AdvenceSettings.vue":"i5WDE","./AdvenceSettingStructure.vue":"6kRsH","../../services/getObjFromRvtModel":"aCyTd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNYJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("977ac0887f7efa4b");
    if (script.__esModule) script = script.default;
    script.render = require("ad90951ced3e18b1").render;
    script.staticRenderFns = require("ad90951ced3e18b1").staticRenderFns;
    script._scopeId = "data-v-e32f67";
    script.__cssModules = require("6bbdd55cc247d950").default;
    require("3c30f226f8b68e80").default(script);
    script.__scopeId = "data-v-e32f67";
    script.__file = "showTestList.vue";
};
initialize();
exports.default = script;

},{"977ac0887f7efa4b":"8fZhx","ad90951ced3e18b1":"1Ui7t","6bbdd55cc247d950":"2UWaX","3c30f226f8b68e80":"8Kf2i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fZhx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dbIdUtils = require("../services/dbIdUtils");
var _getObjFromRvtModel = require("../services/getObjFromRvtModel");
var _btnTooltipVue = require("../viewUtils/BtnTooltip.vue");
var _btnTooltipVueDefault = parcelHelpers.interopDefault(_btnTooltipVue);
const NBR_ITEMS = 15;
var scriptExports = {
    name: "ShowTestList",
    components: {
        BtnTooltip: (0, _btnTooltipVueDefault.default)
    },
    props: {
        items: {
            require: true,
            type: Array,
            default: ()=>[]
        },
        modelName: {
            require: true,
            type: String,
            default: ()=>""
        }
    },
    data () {
        return {
            itemsParam: [],
            itemSelected: null,
            openSearch: false,
            searchQuery: "",
            privPage: 1,
            header: [
                {
                    text: "displayName",
                    value: "displayName"
                },
                {
                    text: "displayValue",
                    value: "displayValue"
                },
                {
                    text: "displayCategory",
                    value: "displayCategory"
                },
                {
                    text: "attributeName",
                    value: "attributeName"
                },
                {
                    text: "type",
                    value: "type"
                },
                {
                    text: "units",
                    value: "units"
                },
                {
                    text: "hidden",
                    value: "hidden"
                },
                {
                    text: "precision",
                    value: "precision"
                }
            ],
            rowsPerPage: [
                10,
                25,
                50,
                100,
                {
                    text: "$vuetify.dataIterator.rowsPerPageAll",
                    value: -1
                }
            ],
            pagination: {
                descending: true,
                page: 1,
                rowsPerPage: 25,
                sortBy: "",
                totalItems: 0
            }
        };
    },
    computed: {
        selectedProps () {
            const res = this.itemSelected.properties.map((e)=>{
                return {
                    displayName: String(e.displayName),
                    displayValue: String(e.displayValue),
                    displayCategory: String(e.displayCategory),
                    attributeName: String(e.attributeName),
                    type: String(e.type),
                    units: String(e.units),
                    hidden: String(e.hidden),
                    precision: String(e.precision)
                };
            });
            return res;
        },
        tmpItemsCompu () {
            if (this.openSearch === true && this.searchQuery !== "") {
                let query = "";
                try {
                    query = (0, _getObjFromRvtModel.escapeRegExp)(this.searchQuery);
                } catch (e) {
                    query = this.searchQuery;
                }
                const reg = new RegExp(query, "i");
                return this.itemsParam.filter((item)=>{
                    return reg.test(item.name) || reg.test(item.dbId);
                });
            }
            return this.itemsParam;
        },
        itemsCompu () {
            const idx = (this.page - 1) * NBR_ITEMS;
            return this.tmpItemsCompu.slice(idx, idx + NBR_ITEMS);
        },
        pageLen () {
            return Math.ceil(this.tmpItemsCompu.length / NBR_ITEMS);
        },
        page: {
            get () {
                if (this.pageLen < this.privPage) return this.pageLen;
                return this.privPage;
            },
            set (value) {
                this.privPage = value;
            }
        }
    },
    async mounted () {
        if (this.items.length === 0) return;
        this.model = (0, _getObjFromRvtModel.getModelByName)(this.modelName);
        this.itemsParam = await (0, _dbIdUtils.getParamFromDbIds)(this.model, this.items);
    },
    methods: {
        backBtn () {
            if (this.itemSelected) return this.itemSelected = null;
            this.$emit("close");
        },
        onClick (value) {
            (0, _dbIdUtils.fitToViewtDbIds)([
                value.dbId
            ], this.model);
        },
        onMouseEnter (value) {
            (0, _dbIdUtils.selectDbId)([
                value.dbId
            ], this.model);
        },
        onClickDetails (value) {
            this.itemSelected = value;
        },
        getProps () {
            if (this.itemSelected.properties.length === 0) return [];
            const res = [];
            for(const key in this.itemSelected.properties[0])if (this.itemSelected.properties[0].hasOwnProperty(key)) res.push(key);
            return res;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../services/dbIdUtils":"lgkyI","../services/getObjFromRvtModel":"aCyTd","../viewUtils/BtnTooltip.vue":"2VICB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgkyI":[function(require,module,exports) {
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
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getParamFromDbIds", ()=>getParamFromDbIds);
parcelHelpers.export(exports, "_selectDbId", ()=>_selectDbId);
parcelHelpers.export(exports, "fitToViewtDbIds", ()=>fitToViewtDbIds);
parcelHelpers.export(exports, "selectDbId", ()=>selectDbId);
var _lodashDebounce = require("lodash.debounce");
var _lodashDebounceDefault = parcelHelpers.interopDefault(_lodashDebounce);
function getParamFromDbIds(model, dbIds, params = {}) {
    return new Promise((resolve, reject)=>{
        model.getBulkProperties(dbIds, params, resolve, reject);
    });
}
function _selectDbId(dbIds, model) {
    window.spinal.ForgeViewer.viewer.select(dbIds, model);
}
function fitToViewtDbIds(dbIds, model) {
    window.spinal.ForgeViewer.viewer.fitToView(dbIds, model);
}
const selectDbId = (0, _lodashDebounceDefault.default)(_selectDbId, 100);

},{"lodash.debounce":"3JP5n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCyTd":[function(require,module,exports) {
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
 */ /**
 * @param {*} model
 * @param {Array<Object>} cfg
 * @returns
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getObjFromRvtModel", ()=>getObjFromRvtModel);
parcelHelpers.export(exports, "getCatFromRvtModel", ()=>getCatFromRvtModel);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "createInput", ()=>createInput);
parcelHelpers.export(exports, "createCat", ()=>createCat);
parcelHelpers.export(exports, "getModelByName", ()=>getModelByName);
function getObjFromRvtModel(model, cfg) {
    const data = [
        "["
    ];
    for (const d of cfg){
        let isCatStr = "";
        if (d.isCat === true) isCatStr = `, isCat: true`;
        const str = `{ key: ${d.key.toString()}, value: ${d.value.toString()}${isCatStr}},`;
        data.push(str);
    }
    data.push("]");
    const fct = `
    function userFunction(pdb) {
      const data = ${data.join("")}
      const attrToWatch = [];
      const result = [];
      pdb.enumAttributes(function (i, attrDef) {
        for (const d of data) {
          if (
            (attrDef.displayName && d.key.test(attrDef.displayName)) ||
            (!attrDef.displayName && d.key.test(attrDef.name)) ||
              (d.isCat === true && attrDef.category === '__category__' && d.key.test(attrDef.name))
          ) {
            attrToWatch.push({
              id: i,
              attrDef, d
            });
            break;
          }
        }
      });
      pdb.enumObjects(function (dbId) {
        let isValid = false;
        pdb.enumObjectProperties(dbId, function (attrId, valId) {
          const attr = attrToWatch.find((item) => item.id === attrId);
          if (!attr) return false;
          let value = pdb.getAttrValue(attrId, valId);
          if (attr.d.value.test(value)) {
            isValid = true;
            return true;
          }
        });
        if (isValid) result.push(dbId);
      });
      return result;
    }`;
    return model.getPropertyDb().executeUserFunction(fct);
}
function getCatFromRvtModel(model) {
    const fct = `
    function userFunction(pdb) {
      const result = new Set();
      let idCat = -1
      pdb.enumAttributes(function (i, attrDef) {
        if (attrDef.name === 'Category' && attrDef.category === '__category__') {
          idCat = i;
        }
      });
      if (idCat === -1) return [];
      pdb.enumObjects(function (dbId) {
        pdb.enumObjectProperties(dbId, function (attrId, valId) {
          if (idCat !== attrId) return false;
          let value = pdb.getAttrValue(attrId, valId);
          result.add(value);
          return true;
        });
      });

      return Array.from(result);
    }`;
    return model.getPropertyDb().executeUserFunction(fct);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function createInput(type, name, regflag = "") {
    if (type === "e") return new RegExp("^" + escapeRegExp(name) + "$", regflag);
    if (type === "c") return new RegExp(escapeRegExp(name), regflag);
    if (type === "r") return new RegExp(name, regflag);
}
function createCat(value) {
    return {
        key: createInput("e", "Category"),
        value: createInput("e", value),
        isCat: true
    };
}
function getModelByName(name) {
    if (window.spinal.BimObjectService.mappingNameByModel.hasOwnProperty(name)) return window.spinal.BimObjectService.mappingNameByModel[name];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VICB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5b3a15ebbc776672");
    if (script.__esModule) script = script.default;
    script.render = require("7926ce54eac87a8f").render;
    script.staticRenderFns = require("7926ce54eac87a8f").staticRenderFns;
    script._scopeId = "data-v-379907";
    require("7b5f6cfe9455c7e1").default(script);
    script.__scopeId = "data-v-379907";
    script.__file = "BtnTooltip.vue";
};
initialize();
exports.default = script;

},{"5b3a15ebbc776672":"jXgaG","7926ce54eac87a8f":"8awDI","7b5f6cfe9455c7e1":"gqjGU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXgaG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let nbr = 0;
var scriptExports = {
    name: "BtnTooltip",
    props: {
        icon: {
            require: true,
            type: String,
            default: ()=>"arrow_forward_ios"
        },
        tooltip: {
            require: true,
            type: String,
            default: ()=>""
        }
    },
    data () {
        return {
            id: "spinal-btn-tooltip"
        };
    },
    mounted () {
        this.id = this.id + nbr;
        nbr++;
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8awDI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        attrs: {
            "id": _vm.id
        }
    }, [
        _c("v-tooltip", {
            attrs: {
                "attach": "#" + _vm.id,
                "bottom": ""
            },
            scopedSlots: _vm._u([
                {
                    key: "activator",
                    fn: function(ref) {
                        var on = ref.on;
                        return [
                            _c("v-btn", _vm._g({
                                attrs: {
                                    "icon": "",
                                    "ripple": ""
                                },
                                on: {
                                    "click": function($event) {
                                        $event.stopPropagation();
                                        return _vm.$emit("clicked", _vm.item);
                                    }
                                }
                            }, on), [
                                _c("v-icon", {
                                    attrs: {
                                        "color": "grey lighten-1"
                                    }
                                }, [
                                    _vm._v("\n          " + _vm._s(_vm.icon) + "\n        ")
                                ])
                            ], 1)
                        ];
                    }
                }
            ])
        }, [
            _vm._v(" "),
            _c("span", [
                _vm._v(_vm._s(_vm.tooltip))
            ])
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gqjGU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ui7t":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", {
        attrs: {
            "dense": ""
        }
    }, [
        _c("v-toolbar", {
            attrs: {
                "dark": "",
                "dense": ""
            }
        }, [
            _c("v-btn", {
                attrs: {
                    "icon": ""
                }
            }, [
                _c("v-icon", {
                    on: {
                        "click": _vm.backBtn
                    }
                }, [
                    _vm._v(" arrow_back ")
                ])
            ], 1),
            _vm._v(" "),
            _vm.itemSelected !== null && _vm.openSearch === false ? _c("v-toolbar-title", [
                _vm._v("\n      " + _vm._s(_vm.itemSelected.name) + "\n    ")
            ]) : _vm._e(),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _vm.openSearch === true ? _c("v-toolbar-title", [
                _c("v-text-field", {
                    staticStyle: {
                        "height": "42px"
                    },
                    attrs: {
                        "placeholder": "Search",
                        "solo": "",
                        "label": "Search"
                    },
                    model: {
                        value: _vm.searchQuery,
                        callback: function($$v) {
                            _vm.searchQuery = $$v;
                        },
                        expression: "searchQuery"
                    }
                })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": ""
                },
                on: {
                    "click": function($event) {
                        _vm.openSearch = !_vm.openSearch;
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v(" search ")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _vm.itemSelected === null ? _c("v-card-text", [
            _c("v-list", {
                staticClass: "showTestListContainer",
                attrs: {
                    "two-line": "",
                    "subheader": "",
                    "dense": "",
                    "dark": ""
                }
            }, _vm._l(_vm.itemsCompu, function(item) {
                return _c("v-list-tile", {
                    key: item.dbId,
                    on: {
                        "click": function($event) {
                            return _vm.onClick(item);
                        },
                        "mouseenter": function($event) {
                            return _vm.onMouseEnter(item);
                        }
                    }
                }, [
                    _c("v-list-tile-content", [
                        _c("v-list-tile-title", {
                            domProps: {
                                "textContent": _vm._s(item.name)
                            }
                        }),
                        _vm._v(" "),
                        _c("v-list-tile-sub-title", {
                            domProps: {
                                "textContent": _vm._s(item.dbId)
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-list-tile-action", {
                        staticClass: "action-btn"
                    }, [
                        _c("BtnTooltip", {
                            attrs: {
                                "icon": "arrow_forward_ios",
                                "tooltip": "See properties"
                            },
                            on: {
                                "clicked": function($event) {
                                    return _vm.onClickDetails(item);
                                }
                            }
                        })
                    ], 1)
                ], 1);
            }), 1),
            _vm._v(" "),
            _c("div", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [
                _c("v-pagination", {
                    attrs: {
                        "length": _vm.pageLen
                    },
                    model: {
                        value: _vm.page,
                        callback: function($$v) {
                            _vm.page = $$v;
                        },
                        expression: "page"
                    }
                })
            ], 1)
        ], 1) : _c("v-card-text", [
            _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "headers": _vm.header,
                    "items": _vm.itemSelected.properties,
                    "rows-per-page-items": _vm.rowsPerPage,
                    "pagination": _vm.pagination
                },
                on: {
                    "update:pagination": function($event) {
                        _vm.pagination = $event;
                    }
                },
                scopedSlots: _vm._u([
                    {
                        key: "items",
                        fn: function(props) {
                            return [
                                _c("td", [
                                    _vm._v(_vm._s(props.item.displayName))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.displayValue))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.displayCategory))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.attributeName))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.type))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.units))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.hidden))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                    _vm._v(_vm._s(props.item.precision))
                                ])
                            ];
                        }
                    }
                ])
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2UWaX":[function() {},{}],"8Kf2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5WDE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9abfac9aabb89d99");
    if (script.__esModule) script = script.default;
    script.render = require("cab1f9d9d64f27ae").render;
    script.staticRenderFns = require("cab1f9d9d64f27ae").staticRenderFns;
    script._scopeId = "data-v-763721";
    require("7d546d397ae991cf").default(script);
    script.__scopeId = "data-v-763721";
    script.__file = "AdvenceSettings.vue";
};
initialize();
exports.default = script;

},{"9abfac9aabb89d99":"ivyeU","cab1f9d9d64f27ae":"kRIwz","7d546d397ae991cf":"865Wl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivyeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getObjFromRvtModel = require("../../services/getObjFromRvtModel");
var _dialogAddCatVue = require("./DialogAddCat.vue");
var _dialogAddCatVueDefault = parcelHelpers.interopDefault(_dialogAddCatVue);
var scriptExports = {
    name: "AdvenceSettings",
    components: {
        DialogAddCat: (0, _dialogAddCatVueDefault.default)
    },
    props: {
        modelName: {
            require: true,
            type: String,
            default: ()=>""
        },
        revitCat: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            useCat: true,
            catUsed: "",
            items: [],
            headers: [
                {
                    text: "Name",
                    align: "left",
                    value: "key"
                },
                {
                    text: "Value",
                    value: "val"
                },
                {
                    text: "Actions",
                    value: "name",
                    sortable: false
                }
            ],
            modalStatus: null,
            openDialogAddEdit: false,
            selected: null,
            snackbarError: false
        };
    },
    watch: {
        modelName () {
            return this.updateModelName();
        }
    },
    mounted () {
        return this.updateModelName();
    },
    methods: {
        async updateModelName () {
            if (this.modelName) {
                const model = (0, _getObjFromRvtModel.getModelByName)(this.modelName);
                this.catLst = await (0, _getObjFromRvtModel.getCatFromRvtModel)(model);
                const catLstRes = this.catLst.filter((item)=>this.revitCat.includes(item));
                if (catLstRes && catLstRes.length > 0) this.catUsed = catLstRes[0];
            }
        },
        printInput (keyType, name, flag) {
            if (keyType === "e") return name;
            if (keyType === "c") return `[${name}]`;
            if (keyType === "r") {
                if (flag) return `/${name}/${flag}`;
                else return `/${name}/`;
            }
        },
        onContinue () {
            try {
                const data = this.createData();
                this.$emit("continue", data);
            } catch (e) {
                console.error(e);
                this.snackbarMessage = e.message;
                this.snackbarError = true;
            }
        },
        createData () {
            const data = [];
            if (this.useCat === true) data.push((0, _getObjFromRvtModel.createCat)(this.catUsed));
            for (const item of this.items)data.push({
                key: (0, _getObjFromRvtModel.createInput)(item.keyType, item.key, item.keyFlag),
                value: (0, _getObjFromRvtModel.createInput)(item.valType, item.val, item.valFlag)
            });
            return data;
        },
        onSeeList () {
            try {
                const data = this.createData();
                this.$emit("seeList", data);
            } catch (e) {
                console.error(e);
                this.snackbarMessage = e.message;
                this.snackbarError = true;
            }
        },
        addNewFilter () {
            this.modalStatus = "new";
            this.openDialogAddEdit = true;
            this.selected = {
                key: "",
                keyType: "e",
                keyFlag: "",
                val: "",
                valType: "e",
                valFlag: ""
            };
        },
        editItem (item) {
            this.modalStatus = "edit";
            this.openDialogAddEdit = true;
            this.selected = item;
        },
        deleteItem (item) {
            const idx = this.items.indexOf(item);
            if (idx !== -1) this.items.splice(idx, 1);
        },
        onEditCancel () {
            this.openDialogAddEdit = false;
        },
        onEditSave (data) {
            this.openDialogAddEdit = false;
            if (this.modalStatus === "new") return this.items.push(data);
            this.selected.key = data.key;
            this.selected.keyType = data.keyType;
            if (data.keyType === "r") this.selected.keyFlag = data.keyFlag;
            else this.selected.keyFlag = "";
            this.selected.val = data.val;
            this.selected.valType = data.valType;
            if (data.valType === "r") this.selected.valFlag = data.valFlag;
            else this.selected.valFlag = "";
        },
        save () {},
        cancel () {},
        open () {},
        close () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/getObjFromRvtModel":"aCyTd","./DialogAddCat.vue":"4dovw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4dovw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("de6fad1fa1a954cb");
    if (script.__esModule) script = script.default;
    script.render = require("6fc4eca86727e31a").render;
    script.staticRenderFns = require("6fc4eca86727e31a").staticRenderFns;
    script._scopeId = "data-v-e0a7a2";
    script.__cssModules = require("ec766ff4aaf1e79a").default;
    require("a58a4919c4c9145c").default(script);
    script.__scopeId = "data-v-e0a7a2";
    script.__file = "DialogAddCat.vue";
};
initialize();
exports.default = script;

},{"de6fad1fa1a954cb":"9wf0x","6fc4eca86727e31a":"4lc5c","ec766ff4aaf1e79a":"chyV9","a58a4919c4c9145c":"iX3uG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wf0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "DialogAddCat",
    props: [
        "keyData",
        "keyType",
        "keyFlag",
        "val",
        "valType",
        "valFlag",
        "openDialog"
    ],
    data () {
        return {
            items: [
                {
                    name: "Equal",
                    value: "e"
                },
                {
                    name: "Contains",
                    value: "c"
                },
                {
                    name: "Advanced (Regular expression)",
                    value: "r"
                }
            ],
            result_key: null,
            result_keyFlag: null,
            result_keyType: null,
            result_val: null,
            result_valFlag: null,
            result_valType: null
        };
    },
    computed: {
        selectValFlagTypeComp: {
            get () {
                return this.selectValFlagType.name;
            },
            set (value) {
                for (const item of this.items)if (item.name === value) this.selectValFlagType = item;
            }
        },
        selectKeyFlagTypeComp: {
            get () {
                return this.selectKeyFlagType.name;
            },
            set (value) {
                for (const item of this.items)if (item.name === value) this.selectKeyFlagType = item;
            }
        },
        haveValFlag () {
            return this.selectValFlagType.value === "r";
        },
        haveKeyFlag () {
            return this.selectKeyFlagType.value === "r";
        },
        openDialogCompu: {
            get () {
                return this.openDialog;
            },
            set (value) {
                if (value) this.$emit("close");
            }
        },
        btnValid () {
            return this.resultValue === "" && this.selectKeyFlagType === "";
        },
        selectKeyFlagType: {
            get () {
                if (this.result_keyType) for (const type of this.items){
                    if (this.result_keyType === type.value) return type;
                }
                if (this.keyType) for (const type of this.items){
                    if (this.keyType === type.value) return type;
                }
                return {
                    name: "Egale",
                    value: "e"
                };
            },
            set (value) {
                this.result_keyType = value.value;
            }
        },
        resultKey: {
            get () {
                if (this.result_key) return this.result_key;
                if (this.keyData) return this.keyData;
                return "";
            },
            set (value) {
                this.result_key = value;
            }
        },
        resultKeyFlag: {
            get () {
                if (this.result_keyFlag) return this.result_keyFlag;
                if (this.keyFlag) return this.keyFlag;
                return "";
            },
            set (value) {
                this.result_keyFlag = value;
            }
        },
        selectValFlagType: {
            get () {
                if (this.result_valType) for (const type of this.items){
                    if (this.result_valType === type.value) return type;
                }
                if (this.valType) for (const type of this.items){
                    if (this.valType === type.value) return type;
                }
                return {
                    name: "Egale",
                    value: "e"
                };
            },
            set (value) {
                this.result_valType = value.value;
            }
        },
        resultValue: {
            get () {
                if (this.result_key) return this.result_val;
                if (this.val) return this.val;
                return "";
            },
            set (value) {
                this.result_val = value;
            }
        },
        resultValFlag: {
            get () {
                if (this.result_valFlag) return this.result_valFlag;
                if (this.valFlag) return this.valFlag;
                return "";
            },
            set (value) {
                this.result_valFlag = value;
            }
        }
    },
    watch: {
        openDialog (value) {
            if (value) {
                this.result_key = null;
                this.result_keyFlag = null;
                this.result_keyType = null;
                this.result_val = null;
                this.result_valFlag = null;
                this.result_valType = null;
            }
        }
    },
    methods: {
        close () {
            this.$emit("cancel");
        },
        save () {
            const res = {
                key: this.resultKey,
                keyFlag: this.resultKeyFlag.trim(),
                keyType: this.selectKeyFlagType.value,
                val: this.resultValue.trim(),
                valFlag: this.resultValFlag,
                valType: this.selectValFlagType.value
            };
            this.$emit("save", res);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lc5c":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-dialog", {
        attrs: {
            "persistent": "",
            "lazy": ""
        },
        model: {
            value: _vm.openDialogCompu,
            callback: function($$v) {
                _vm.openDialogCompu = $$v;
            },
            expression: "openDialogCompu"
        }
    }, [
        _c("v-card", {
            staticClass: "spinal-model-gen-context-dialog-edit-cat"
        }, [
            _c("v-card-text", [
                _c("v-container", {
                    attrs: {
                        "grid-list-md": ""
                    }
                }, [
                    _c("v-layout", {
                        attrs: {
                            "wrap": ""
                        }
                    }, [
                        _c("v-flex", {
                            attrs: {
                                "xs12": "",
                                "sm6": ""
                            }
                        }, [
                            _c("h4", [
                                _vm._v("Attribut name")
                            ]),
                            _vm._v(" "),
                            _c("md-field", [
                                _c("md-select", {
                                    attrs: {
                                        "id": "selectKeyFlagType",
                                        "name": "selectKeyFlagType",
                                        "md-dense": ""
                                    },
                                    model: {
                                        value: _vm.selectKeyFlagTypeComp,
                                        callback: function($$v) {
                                            _vm.selectKeyFlagTypeComp = $$v;
                                        },
                                        expression: "selectKeyFlagTypeComp"
                                    }
                                }, _vm._l(_vm.items, function(item) {
                                    return _c("md-option", {
                                        attrs: {
                                            "value": item.name
                                        }
                                    }, [
                                        _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                    ]);
                                }), 1)
                            ], 1),
                            _vm._v(" "),
                            _c("div", [
                                _c("v-text-field", {
                                    attrs: {
                                        "label": "Nom"
                                    },
                                    model: {
                                        value: _vm.resultKey,
                                        callback: function($$v) {
                                            _vm.resultKey = $$v;
                                        },
                                        expression: "resultKey"
                                    }
                                }),
                                _vm._v(" "),
                                _vm.haveKeyFlag ? _c("v-text-field", {
                                    staticClass: "input-regex-fleg",
                                    attrs: {
                                        "label": "indicateur(s)"
                                    },
                                    model: {
                                        value: _vm.resultKeyFlag,
                                        callback: function($$v) {
                                            _vm.resultKeyFlag = $$v;
                                        },
                                        expression: "resultKeyFlag"
                                    }
                                }) : _vm._e()
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("v-flex", {
                            attrs: {
                                "xs12": "",
                                "sm6": ""
                            }
                        }, [
                            _c("h4", [
                                _vm._v("Attribut value")
                            ]),
                            _vm._v(" "),
                            _c("md-field", [
                                _c("md-select", {
                                    attrs: {
                                        "id": "selectValFlagType",
                                        "name": "selectValFlagType",
                                        "md-dense": ""
                                    },
                                    model: {
                                        value: _vm.selectValFlagTypeComp,
                                        callback: function($$v) {
                                            _vm.selectValFlagTypeComp = $$v;
                                        },
                                        expression: "selectValFlagTypeComp"
                                    }
                                }, _vm._l(_vm.items, function(item) {
                                    return _c("md-option", {
                                        attrs: {
                                            "value": item.name
                                        }
                                    }, [
                                        _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                    ]);
                                }), 1)
                            ], 1),
                            _vm._v(" "),
                            _c("div", [
                                _c("v-text-field", {
                                    attrs: {
                                        "label": "Valeur"
                                    },
                                    model: {
                                        value: _vm.resultValue,
                                        callback: function($$v) {
                                            _vm.resultValue = $$v;
                                        },
                                        expression: "resultValue"
                                    }
                                }),
                                _vm._v(" "),
                                _vm.haveValFlag ? _c("v-text-field", {
                                    staticClass: "input-regex-fleg",
                                    attrs: {
                                        "label": "indicateur(s)"
                                    },
                                    model: {
                                        value: _vm.resultValFlag,
                                        callback: function($$v) {
                                            _vm.resultValFlag = $$v;
                                        },
                                        expression: "resultValFlag"
                                    }
                                }) : _vm._e()
                            ], 1)
                        ], 1)
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("v-card-actions", [
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "blue darken-1",
                        "flat": ""
                    },
                    on: {
                        "click": _vm.close
                    }
                }, [
                    _vm._v(" Cancel ")
                ]),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "blue darken-1",
                        "flat": "",
                        "disabled": _vm.btnValid
                    },
                    on: {
                        "click": _vm.save
                    }
                }, [
                    _vm._v("\n        Save\n      ")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"chyV9":[function() {},{}],"iX3uG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRIwz":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", [
        _c("v-card-text", [
            _vm._t("default"),
            _vm._v(" "),
            _c("v-checkbox", {
                attrs: {
                    "label": "Use a Category"
                },
                model: {
                    value: _vm.useCat,
                    callback: function($$v) {
                        _vm.useCat = $$v;
                    },
                    expression: "useCat"
                }
            }),
            _vm._v(" "),
            _vm.useCat === true ? _c("md-field", [
                _c("md-select", {
                    attrs: {
                        "id": "catLstRes",
                        "name": "catLstRes",
                        "md-dense": ""
                    },
                    model: {
                        value: _vm.catUsed,
                        callback: function($$v) {
                            _vm.catUsed = $$v;
                        },
                        expression: "catUsed"
                    }
                }, _vm._l(_vm.catLst, function(cat) {
                    return _c("md-option", {
                        attrs: {
                            "value": cat
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(cat) + "\n        ")
                    ]);
                }), 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.useCat === false ? _c("v-data-table", {
                attrs: {
                    "headers": _vm.headers,
                    "items": _vm.items
                },
                scopedSlots: _vm._u([
                    {
                        key: "items",
                        fn: function(props) {
                            return [
                                _c("td", [
                                    _vm._v("\n          " + _vm._s(_vm.printInput(props.item.keyType, props.item.key, props.item.keyFlag)) + "\n        ")
                                ]),
                                _vm._v(" "),
                                _c("td", {
                                    staticClass: "text-xs-left"
                                }, [
                                    _vm._v("\n          " + _vm._s(_vm.printInput(props.item.valType, props.item.val, props.item.valFlag)) + "\n        ")
                                ]),
                                _vm._v(" "),
                                _c("td", {
                                    staticClass: "justify-center layout px-0"
                                }, [
                                    _c("v-icon", {
                                        staticClass: "mr-2",
                                        attrs: {
                                            "small": ""
                                        },
                                        on: {
                                            "click": function($event) {
                                                return _vm.editItem(props.item);
                                            }
                                        }
                                    }, [
                                        _vm._v("\n            edit\n          ")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-icon", {
                                        attrs: {
                                            "small": ""
                                        },
                                        on: {
                                            "click": function($event) {
                                                return _vm.deleteItem(props.item);
                                            }
                                        }
                                    }, [
                                        _vm._v(" delete ")
                                    ])
                                ], 1)
                            ];
                        }
                    }
                ], null, false, 3493416613)
            }) : _vm._e()
        ], 2),
        _vm._v(" "),
        _c("v-card-actions", [
            _c("v-btn", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "test the filter result",
                        expression: "'test the filter result'"
                    }
                ],
                attrs: {
                    "flat": "",
                    "icon": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.onSeeList
                }
            }, [
                _c("v-icon", [
                    _vm._v("list")
                ])
            ], 1),
            _vm._v(" "),
            _vm.useCat === false ? _c("v-btn", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "Add a filter",
                        expression: "'Add a filter'"
                    }
                ],
                attrs: {
                    "flat": "",
                    "icon": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.addNewFilter
                }
            }, [
                _c("v-icon", [
                    _vm._v("add")
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "color": "red darken-1",
                    "flat": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("cancel");
                    }
                }
            }, [
                _vm._v("\n      Cancel\n    ")
            ]),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "color": "green darken-1",
                    "flat": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.onContinue
                }
            }, [
                _vm._v("\n      Continue\n    ")
            ])
        ], 1),
        _vm._v(" "),
        _vm.selected ? _c("DialogAddCat", {
            attrs: {
                "key-data": _vm.selected.key,
                "key-type": _vm.selected.keyType,
                "key-flag": _vm.selected.keyFlag,
                "val": _vm.selected.val,
                "val-type": _vm.selected.valType,
                "val-flag": _vm.selected.valFlag,
                "open-dialog": _vm.openDialogAddEdit
            },
            on: {
                "cancel": _vm.onEditCancel,
                "save": _vm.onEditSave
            }
        }) : _vm._e(),
        _vm._v(" "),
        _c("v-snackbar", {
            attrs: {
                "timeout": 10000,
                "absolute": "",
                "bottom": true
            },
            model: {
                value: _vm.snackbarError,
                callback: function($$v) {
                    _vm.snackbarError = $$v;
                },
                expression: "snackbarError"
            }
        }, [
            _vm._v("\n    Error: " + _vm._s(_vm.snackbarMessage) + "\n    "),
            _c("v-btn", {
                attrs: {
                    "color": "pink",
                    "flat": ""
                },
                on: {
                    "click": function($event) {
                        _vm.snackbarError = false;
                    }
                }
            }, [
                _vm._v(" Close ")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"865Wl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6kRsH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5da311eccbbd4026");
    if (script.__esModule) script = script.default;
    script.render = require("bb7b4f4c9f1cd414").render;
    script.staticRenderFns = require("bb7b4f4c9f1cd414").staticRenderFns;
    script._scopeId = "data-v-943d53";
    require("22d93ec9b291d073").default(script);
    script.__scopeId = "data-v-943d53";
    script.__file = "AdvenceSettingStructure.vue";
};
initialize();
exports.default = script;

},{"5da311eccbbd4026":"6mniT","bb7b4f4c9f1cd414":"8Znau","22d93ec9b291d073":"aSXDt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mniT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getObjFromRvtModel = require("../../services/getObjFromRvtModel");
var _dialogAddCatVue = require("./DialogAddCat.vue");
var _dialogAddCatVueDefault = parcelHelpers.interopDefault(_dialogAddCatVue);
var scriptExports = {
    name: "AdvenceSettingStructure",
    components: {
        DialogAddCat: (0, _dialogAddCatVueDefault.default)
    },
    props: {
        modelName: {
            require: true,
            type: String,
            default: ()=>""
        }
    },
    data () {
        return {
            // useCat: true,
            catLst: [],
            catLstRes: [],
            items: [],
            headers: [
                {
                    text: "Name",
                    align: "left",
                    value: "key"
                },
                {
                    text: "Value",
                    value: "val"
                },
                {
                    text: "Actions",
                    value: "name",
                    sortable: false
                }
            ],
            modalStatus: null,
            openDialogAddEdit: false,
            selected: null,
            snackbarError: false
        };
    },
    watch: {
        modelName () {
            return this.updateModelName();
        }
    },
    mounted () {
        return this.updateModelName();
    },
    methods: {
        async updateModelName () {
            if (this.modelName) {
                const model = (0, _getObjFromRvtModel.getModelByName)(this.modelName);
                this.catLst = await (0, _getObjFromRvtModel.getCatFromRvtModel)(model);
                const register = [
                    "Revit Murs",
                    "Revit Portes",
                    "Revit Fen\xeatres",
                    "Revit Walls",
                    "Revit Doors",
                    "Revit Windows"
                ];
                this.catLstRes = this.catLst.filter((item)=>register.includes(item));
            }
        },
        printInput (keyType, name, flag) {
            if (keyType === "e") return name;
            if (keyType === "c") return `[${name}]`;
            if (keyType === "r") {
                if (flag) return `/${name}/${flag}`;
                else return `/${name}/`;
            }
        },
        onContinue () {
            try {
                const data = this.createData();
                this.$emit("continue", data);
            } catch (e) {
                console.error(e);
                this.snackbarMessage = e.message;
                this.snackbarError = true;
            }
        },
        createData () {
            const data = [];
            for (const catName of this.catLstRes)data.push((0, _getObjFromRvtModel.createCat)(catName));
            for (const item of this.items)data.push({
                key: (0, _getObjFromRvtModel.createInput)(item.keyType, item.key, item.keyFlag),
                value: (0, _getObjFromRvtModel.createInput)(item.valType, item.val, item.valFlag)
            });
            return data;
        },
        onSeeList () {
            try {
                const data = this.createData();
                this.$emit("seeList", data);
            } catch (e) {
                console.error(e);
                this.snackbarMessage = e.message;
                this.snackbarError = true;
            }
        },
        addNewFilter () {
            this.modalStatus = "new";
            this.openDialogAddEdit = true;
            this.selected = {
                key: "",
                keyType: "e",
                keyFlag: "",
                val: "",
                valType: "e",
                valFlag: ""
            };
        },
        editItem (item) {
            this.modalStatus = "edit";
            this.openDialogAddEdit = true;
            this.selected = item;
        },
        deleteItem (item) {
            const idx = this.items.indexOf(item);
            if (idx !== -1) this.items.splice(idx, 1);
        },
        onEditCancel () {
            this.openDialogAddEdit = false;
        },
        onEditSave (data) {
            this.openDialogAddEdit = false;
            if (this.modalStatus === "new") return this.items.push(data);
            this.selected.key = data.key;
            this.selected.keyType = data.keyType;
            if (data.keyType === "r") this.selected.keyFlag = data.keyFlag;
            else this.selected.keyFlag = "";
            this.selected.val = data.val;
            this.selected.valType = data.valType;
            if (data.valType === "r") this.selected.valFlag = data.valFlag;
            else this.selected.valFlag = "";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/getObjFromRvtModel":"aCyTd","./DialogAddCat.vue":"4dovw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Znau":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", [
        _c("v-card-text", [
            _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "catLstRes"
                    }
                }, [
                    _vm._v("Select categories:")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    attrs: {
                        "id": "catLstRes",
                        "name": "catLstRes",
                        "multiple": "",
                        "md-dense": ""
                    },
                    model: {
                        value: _vm.catLstRes,
                        callback: function($$v) {
                            _vm.catLstRes = $$v;
                        },
                        expression: "catLstRes"
                    }
                }, _vm._l(_vm.catLst, function(cat) {
                    return _c("md-option", {
                        key: cat,
                        attrs: {
                            "value": cat
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(cat) + "\n        ")
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c("v-data-table", {
                attrs: {
                    "headers": _vm.headers,
                    "items": _vm.items
                },
                scopedSlots: _vm._u([
                    {
                        key: "items",
                        fn: function(props) {
                            return [
                                _c("td", [
                                    _vm._v("\n          " + _vm._s(_vm.printInput(props.item.keyType, props.item.key, props.item.keyFlag)) + "\n        ")
                                ]),
                                _vm._v(" "),
                                _c("td", {
                                    staticClass: "text-xs-left"
                                }, [
                                    _vm._v("\n          " + _vm._s(_vm.printInput(props.item.valType, props.item.val, props.item.valFlag)) + "\n        ")
                                ]),
                                _vm._v(" "),
                                _c("td", {
                                    staticClass: "justify-center layout px-0"
                                }, [
                                    _c("v-icon", {
                                        staticClass: "mr-2",
                                        attrs: {
                                            "small": ""
                                        },
                                        on: {
                                            "click": function($event) {
                                                return _vm.editItem(props.item);
                                            }
                                        }
                                    }, [
                                        _vm._v("\n            edit\n          ")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-icon", {
                                        attrs: {
                                            "small": ""
                                        },
                                        on: {
                                            "click": function($event) {
                                                return _vm.deleteItem(props.item);
                                            }
                                        }
                                    }, [
                                        _vm._v(" delete ")
                                    ])
                                ], 1)
                            ];
                        }
                    }
                ])
            })
        ], 1),
        _vm._v(" "),
        _c("v-card-actions", [
            _c("v-btn", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "test the filter result",
                        expression: "'test the filter result'"
                    }
                ],
                attrs: {
                    "flat": "",
                    "icon": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.onSeeList
                }
            }, [
                _c("v-icon", [
                    _vm._v("list")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-btn", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "Ajouter un flitre",
                        expression: "'Ajouter un flitre'"
                    }
                ],
                attrs: {
                    "flat": "",
                    "icon": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.addNewFilter
                }
            }, [
                _c("v-icon", [
                    _vm._v("add")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "color": "red darken-1",
                    "flat": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("cancel");
                    }
                }
            }, [
                _vm._v("\n      Cancel\n    ")
            ]),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "color": "green darken-1",
                    "flat": "",
                    "disabled": _vm.btnDisabledCompu
                },
                on: {
                    "click": _vm.onContinue
                }
            }, [
                _vm._v("\n      Continue\n    ")
            ])
        ], 1),
        _vm._v(" "),
        _vm.selected ? _c("DialogAddCat", {
            attrs: {
                "key-data": _vm.selected.key,
                "key-type": _vm.selected.keyType,
                "key-flag": _vm.selected.keyFlag,
                "val": _vm.selected.val,
                "val-type": _vm.selected.valType,
                "val-flag": _vm.selected.valFlag,
                "open-dialog": _vm.openDialogAddEdit
            },
            on: {
                "cancel": _vm.onEditCancel,
                "save": _vm.onEditSave
            }
        }) : _vm._e(),
        _vm._v(" "),
        _c("v-snackbar", {
            attrs: {
                "timeout": 10000,
                "absolute": "",
                "bottom": true
            },
            model: {
                value: _vm.snackbarError,
                callback: function($$v) {
                    _vm.snackbarError = $$v;
                },
                expression: "snackbarError"
            }
        }, [
            _vm._v("\n    Error: " + _vm._s(_vm.snackbarMessage) + "\n    "),
            _c("v-btn", {
                attrs: {
                    "color": "pink",
                    "flat": ""
                },
                on: {
                    "click": function($event) {
                        _vm.snackbarError = false;
                    }
                }
            }, [
                _vm._v(" Close ")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aSXDt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTK8W":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("v-stepper", {
            directives: [
                {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.showTestList,
                    expression: "!showTestList"
                }
            ],
            staticClass: "advenced-select-model-container spinal-scrollbar",
            attrs: {
                "vertical": ""
            },
            model: {
                value: _vm.e1,
                callback: function($$v) {
                    _vm.e1 = $$v;
                },
                expression: "e1"
            }
        }, [
            _c("v-stepper-step", {
                attrs: {
                    "step": "1"
                }
            }, [
                _vm._v(" Basic parameters ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "1"
                }
            }, [
                _c("Basicselectmodel", {
                    attrs: {
                        "bimfiles": _vm.bimfiles,
                        "btn-label": _vm.btnLabel
                    },
                    on: {
                        "continue": _vm.onBasicSelect
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "step": "2"
                }
            }, [
                _vm._v(" Levels ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "2"
                }
            }, [
                _c("AdvenceSettings", {
                    attrs: {
                        "model-name": _vm.basic.selectedModel,
                        "revit-cat": [
                            "Revit Level"
                        ]
                    },
                    on: {
                        "seeList": _vm.seeTestList,
                        "continue": _vm.onLevelSelect,
                        "cancel": _vm.onCancel
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "step": "3"
                }
            }, [
                _vm._v(" Rooms ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "3"
                }
            }, [
                _c("AdvenceSettings", {
                    attrs: {
                        "model-name": _vm.basic.selectedModel,
                        "revit-cat": [
                            "Revit Pi\xe8ces",
                            "Revit Rooms"
                        ]
                    },
                    on: {
                        "seeList": _vm.seeTestList,
                        "continue": _vm.onRoomSelect,
                        "cancel": _vm.onCancel
                    }
                }, [
                    _c("v-checkbox", {
                        attrs: {
                            "label": "Use Rooms 3D as Reference."
                        },
                        model: {
                            value: _vm.isRoomRefOK,
                            callback: function($$v) {
                                _vm.isRoomRefOK = $$v;
                            },
                            expression: "isRoomRefOK"
                        }
                    }),
                    _vm._v(" "),
                    _vm.isRoomRefOK ? [
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name of the Room's number in the Level."
                            },
                            model: {
                                value: _vm.floorRoomNbr,
                                callback: function($$v) {
                                    _vm.floorRoomNbr = $$v;
                                },
                                expression: "floorRoomNbr"
                            }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name to rename the Room",
                                "placeholder": "Optional"
                            },
                            model: {
                                value: _vm.floorRoomName,
                                callback: function($$v) {
                                    _vm.floorRoomName = $$v;
                                },
                                expression: "floorRoomName"
                            }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name to rename the Level",
                                "placeholder": "Optional"
                            },
                            model: {
                                value: _vm.floorLevelName,
                                callback: function($$v) {
                                    _vm.floorLevelName = $$v;
                                },
                                expression: "floorLevelName"
                            }
                        })
                    ] : _vm._e()
                ], 2)
            ], 1),
            _vm._v(" "),
            !_vm.isRoomRefOK ? [
                _c("v-stepper-step", {
                    attrs: {
                        "step": "4"
                    }
                }, [
                    _vm._v("\n        Floors*\n        "),
                    _c("small", [
                        _vm._v("Optional")
                    ])
                ]),
                _vm._v(" "),
                _c("v-stepper-content", {
                    attrs: {
                        "step": "4"
                    }
                }, [
                    _c("AdvenceSettings", {
                        attrs: {
                            "model-name": _vm.basic.selectedModel,
                            "revit-cat": [
                                "Revit Sols",
                                "Revit Floors"
                            ]
                        },
                        on: {
                            "seeList": _vm.seeTestList,
                            "continue": _vm.onFloorSelect,
                            "cancel": _vm.onCancel
                        }
                    }, [
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name of the Room's number in the Level."
                            },
                            model: {
                                value: _vm.floorRoomNbr,
                                callback: function($$v) {
                                    _vm.floorRoomNbr = $$v;
                                },
                                expression: "floorRoomNbr"
                            }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name to rename the Room",
                                "placeholder": "Optional"
                            },
                            model: {
                                value: _vm.floorRoomName,
                                callback: function($$v) {
                                    _vm.floorRoomName = $$v;
                                },
                                expression: "floorRoomName"
                            }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                            attrs: {
                                "label": "Attribut name to rename the Level",
                                "placeholder": "Optional"
                            },
                            model: {
                                value: _vm.floorLevelName,
                                callback: function($$v) {
                                    _vm.floorLevelName = $$v;
                                },
                                expression: "floorLevelName"
                            }
                        })
                    ], 1)
                ], 1)
            ] : _vm._e(),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "step": _vm.structureStep
                }
            }, [
                _vm._v(" Structures ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": _vm.structureStep
                }
            }, [
                _c("AdvenceSettingStructure", {
                    attrs: {
                        "model-name": _vm.basic.selectedModel
                    },
                    on: {
                        "seeList": _vm.seeTestList,
                        "continue": _vm.onStructureSelect,
                        "cancel": _vm.onCancel
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "step": _vm.structureStep + 1
                }
            }, [
                _vm._v(" Confirm ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": _vm.structureStep + 1
                }
            }, [
                _c("v-btn", {
                    attrs: {
                        "color": "red darken-1",
                        "flat": "",
                        "disabled": _vm.btnDisabled
                    },
                    on: {
                        "click": _vm.onCancel
                    }
                }, [
                    _vm._v("\n        Cancel\n      ")
                ]),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "primary",
                        "disabled": _vm.btnDisabled
                    },
                    on: {
                        "click": _vm.onGenerate
                    }
                }, [
                    _vm._v("\n        Generate\n      ")
                ])
            ], 1)
        ], 2),
        _vm._v(" "),
        _vm.showTestList ? _c("div", {
            staticClass: "test-popover spinal-scrollbar"
        }, [
            _c("ShowTestList", {
                attrs: {
                    "items": _vm.testItems,
                    "model-name": _vm.basic.selectedModel
                },
                on: {
                    "close": function($event) {
                        _vm.showTestList = false;
                    }
                }
            })
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3Ipfa":[function() {},{}],"eByqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdzzF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b7172976007a298f");
    if (script.__esModule) script = script.default;
    script.render = require("36a63cf3b4adc00b").render;
    script.staticRenderFns = require("36a63cf3b4adc00b").staticRenderFns;
    script._scopeId = "data-v-f3aa04";
    script.__cssModules = require("4a1a94dee6b914e6").default;
    require("3fa5a73ea5c1ae8e").default(script);
    script.__scopeId = "data-v-f3aa04";
    script.__file = "SpatialDiffSettings.vue";
};
initialize();
exports.default = script;

},{"b7172976007a298f":"4oCTj","36a63cf3b4adc00b":"ehvdL","4a1a94dee6b914e6":"epa13","3fa5a73ea5c1ae8e":"4kUqR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oCTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _eventbus = require("./eventbus");
var _spinalTableDiffInfoVue = require("./SpinalTableDiffInfo.vue");
var _spinalTableDiffInfoVueDefault = parcelHelpers.interopDefault(_spinalTableDiffInfoVue);
var _spinalTableDelVue = require("./SpinalTableDel.vue");
var _spinalTableDelVueDefault = parcelHelpers.interopDefault(_spinalTableDelVue);
var _spinalTableRoomNewVue = require("./SpinalTableRoomNew.vue");
var _spinalTableRoomNewVueDefault = parcelHelpers.interopDefault(_spinalTableRoomNewVue);
var _spinalTableRoomUpdateVue = require("./SpinalTableRoomUpdate.vue");
var _spinalTableRoomUpdateVueDefault = parcelHelpers.interopDefault(_spinalTableRoomUpdateVue);
var _spinalTableStructNewVue = require("./SpinalTableStructNew.vue");
var _spinalTableStructNewVueDefault = parcelHelpers.interopDefault(_spinalTableStructNewVue);
var _spinalTableRoomUpdateDetailsVue = require("./SpinalTableRoomUpdateDetails.vue");
var _spinalTableRoomUpdateDetailsVueDefault = parcelHelpers.interopDefault(_spinalTableRoomUpdateDetailsVue);
var _spinalRoomNewVue = require("./SpinalRoomNew.vue");
var _spinalRoomNewVueDefault = parcelHelpers.interopDefault(_spinalRoomNewVue);
var _btnGroupViewInViewerVue = require("./BtnGroupViewInViewer.vue");
var _btnGroupViewInViewerVueDefault = parcelHelpers.interopDefault(_btnGroupViewInViewerVue);
var scriptExports = {
    name: "SpatialDiffSettings",
    props: [
        "archiData",
        "bimFileId",
        "isRawDataGen",
        "buildingServerId",
        "BIMGeocontextServId"
    ],
    components: {
        SpinalTableDiffInfo: (0, _spinalTableDiffInfoVueDefault.default),
        SpinalTableDel: (0, _spinalTableDelVueDefault.default),
        SpinalTableRoomNew: (0, _spinalTableRoomNewVueDefault.default),
        SpinalTableRoomUpdate: (0, _spinalTableRoomUpdateVueDefault.default),
        SpinalTableStructNew: (0, _spinalTableStructNewVueDefault.default),
        SpinalTableRoomUpdateDetails: (0, _spinalTableRoomUpdateDetailsVueDefault.default),
        SpinalRoomNew: (0, _spinalRoomNewVueDefault.default),
        BtnGroupViewInViewer: (0, _btnGroupViewInViewerVueDefault.default)
    },
    data () {
        this.manualAssingment = new Map();
        return {
            modeView: "",
            FAData: null,
            roomData: null,
            manualAssingmentChoice: [],
            manualAssingmentSelection: 0,
            manualAssingmentSelectionTmp: 0,
            diffInfoHeader: [
                {
                    text: "Label",
                    align: "left",
                    value: "name"
                },
                {
                    text: "New Value",
                    value: "new"
                },
                {
                    text: "Old value",
                    value: "old"
                },
                {
                    text: "Unit",
                    value: "unit"
                }
            ],
            selected: []
        };
    },
    computed: {
        compuName () {
            let name = "";
            if (this.roomData && this.roomData.diff && this.roomData.diff.diffAttr) for (const attr of this.roomData.diff.diffAttr){
                if (attr.label === "name") name += attr.archiValue;
                if (attr.label === "number") name = attr.archiValue.toString() + "-" + name;
            }
            return name === "" ? this.roomData.name : name;
        }
    },
    mounted () {
        spinal.spinalPanelManagerService.openPanel("SpinalDiffViewer");
        (0, _eventbus.eventBus).$on("selectFloor", this.onSelectFloor);
        (0, _eventbus.eventBus).$on("selectRoom", this.onSelectRoom);
        return this.update();
    },
    beforDestroy () {
        (0, _eventbus.eventBus).$off("selectFloor", this.onSelectFloor);
        (0, _eventbus.eventBus).$off("selectRoom", this.onSelectRoom);
        spinal.spinalPanelManagerService.closePanel("SpinalDiffViewer");
    },
    methods: {
        validateAssingment (extId) {
            if (this.manualAssingmentSelection === 0) this.manualAssingment.delete(extId);
            else this.manualAssingment.set(extId, this.manualAssingmentSelection);
            return this.update();
        },
        getModificationType (modificationType) {
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).update) return "update";
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).delete) return "delete";
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).create) return "new";
            return "nothing to do";
        },
        getFloorName (FAData) {
            if (FAData.diff) {
                if (FAData.diff.diffInfo && FAData.diff.diffInfo.diffInfo) for (const { label, archiValue } of FAData.diff.diffInfo.diffInfo){
                    if (label === "name") return archiValue;
                }
            }
            for (const { name, value } of FAData.floorArchi.properties.properties){
                if (name === "name") return value;
            }
        },
        async onSelectFloor (FAData) {
            this.modeView = "floor";
            this.roomData = null;
            this.FAData = FAData;
            this.manualAssingmentSelection = 0;
            this.manualAssingmentSelectionTmp = 0;
            this.manualAssingmentChoice = [
                {
                    label: "none",
                    value: 0
                }
            ];
            const servId = this.manualAssingment.get(FAData.floorArchi.properties.externalId);
            console.log("isRawDataGen", this.isRawDataGen);
            console.log("buildingServerId", this.buildingServerId);
            console.log("BIMGeocontextServId", this.BIMGeocontextServId);
            const floorNodes = this.isRawDataGen ? await (0, _spinalSpatialReferential.getFloorNodesFromBIMGeo)(this.BIMGeocontextServId) : await (0, _spinalSpatialReferential.getFloorNodesFromGeo)(this.buildingServerId);
            console.log("2");
            for (const floorNode of floorNodes){
                const data = {
                    label: floorNode.info.name.get(),
                    value: floorNode._server_id
                };
                if (servId === floorNode._server_id) {
                    this.manualAssingmentSelection = data.value;
                    this.manualAssingmentSelectionTmp = data.value;
                }
                this.manualAssingmentChoice.push(data);
            }
        },
        // async onSelectFloorNoRawData(FAData) {
        //   const graph = getGraph();
        //   const contextGeo = await getContextSpatial(graph);
        //   const buildings = await contextGeo.getChildrenInContext(contextGeo);
        //   const buildingsFloors = await Promise.all(
        //     buildings.map((building) => {
        //       if (building._server_id === this.buildingServerId)
        //         return building.getChildrenInContext(contextGeo);
        //     })
        //   );
        //   const servId = this.manualAssingment.get(
        //     FAData.floorArchi.properties.externalId
        //   );
        //   for (const buildingFloor of buildingsFloors) {
        //     if (buildingFloor) {
        //       for (const floorNode of buildingFloor) {
        //         const data = {
        //           label: floorNode.info.name.get(),
        //           value: floorNode._server_id,
        //         };
        //         if (servId === floorNode._server_id) {
        //           this.manualAssingmentSelection = data.value;
        //           this.manualAssingmentSelectionTmp = data.value;
        //         }
        //         this.manualAssingmentChoice.push(data);
        //       }
        //     }
        //   }
        // },
        async onSelectRoom ({ FAData, RAData, type }) {
            this.roomData = null;
            this.modeView = "room" + type;
            this.selected = [];
            this.FAData = FAData;
            if (type === "update") {
                await this.onSelectRoomSetAssing(FAData, RAData.roomArchi.properties);
                this.roomData = this.getProps(RAData.roomArchi.properties, RAData.diff);
            } else if (type === "new") {
                await this.onSelectRoomSetAssing(FAData, RAData.properties);
                const room = this.getPropsNew(RAData.properties);
                room.children = [];
                for (const structure of RAData.children){
                    const struct = this.getPropsNew(structure);
                    room.children.push(struct);
                }
                this.roomData = [
                    room
                ];
            } else {
                const node = FileSystem._objects[RAData];
                this.roomData = {
                    name: node.info.name.get(),
                    nodeId: node.info.id.get(),
                    serverId: RAData
                };
            }
        },
        getPropsNew (properties) {
            const props = {
                name: "",
                id: properties.externalId,
                attr: [
                    {
                        label: "dbId",
                        value: properties.dbId,
                        unit: ""
                    },
                    {
                        label: "externalId",
                        value: properties.externalId,
                        unit: ""
                    }
                ]
            };
            for (const attr of properties.properties){
                if (attr.name === "name") props.name += attr.value;
                if (attr.name === "level") continue;
                if (attr.name === "number") props.name = attr.value.toString() + "-" + props.name;
                props.attr.push({
                    label: attr.name,
                    value: attr.value,
                    unit: (0, _spinalSpatialReferential.parseUnit)(attr.dataTypeContext)
                });
            }
            return props;
        },
        getProps (properties, diff) {
            const props = {
                name: "",
                id: properties.externalId,
                dbId: properties.dbId,
                externalId: properties.externalId,
                modificationType: properties.modificationType,
                diff
            };
            for (const attr of properties.properties){
                if (attr.name === "name") props.name += attr.value;
                if (attr.name === "number") props.name = attr.value.toString() + "-" + props.name;
            }
            return props;
        },
        async onSelectRoomSetAssing (FAData, RADataProperties) {
            this.manualAssingmentSelection = 0;
            this.manualAssingmentSelectionTmp = 0;
            this.manualAssingmentChoice = [
                {
                    label: "none",
                    value: 0
                }
            ];
            let roomServId = this.manualAssingment.get(RADataProperties.externalId);
            const roomNodes = this.isRawDataGen ? await (0, _spinalSpatialReferential.getRoomNodesFromBIMGeo)(this.BIMGeocontextServId) : await (0, _spinalSpatialReferential.getRoomNodesFromFloor)(FAData.floorArchi.properties.spinalnodeServerId);
            for (const roomNode of roomNodes){
                const data = {
                    label: roomNode.info.name.get(),
                    value: roomNode._server_id
                };
                if (roomServId === roomNode._server_id) {
                    this.manualAssingmentSelection = data.value;
                    this.manualAssingmentSelectionTmp = data.value;
                }
                this.manualAssingmentChoice.push(data);
            }
        },
        // async onSelectRoomSetAssing(FAData, RADataProperties) {
        //       this.manualAssingmentSelection = 0;
        //       this.manualAssingmentSelectionTmp = 0;
        //       this.manualAssingmentChoice = [{ label: 'none', value: 0 }];
        //       const graph = getGraph();
        //       const contextGeo = await getContextSpatial(graph);
        //       const buildings = await contextGeo.getChildrenInContext(contextGeo);
        //       const buildingsFloors = await Promise.all(
        //         buildings.map(async (building) => {
        //           if (building._server_id === this.buildingServerId) {
        //             const floors = await building.getChildrenInContext(contextGeo);
        //             for (const floor of floors) {
        //               if (
        //                 floor._server_id ===
        //                 FAData.floorArchi.properties.spinalnodeServerId
        //               ) {
        //                 return floor.getChildrenInContext(contextGeo);
        //               }
        //             }
        //           }
        //         })
        //       );
        //       let roomServId = this.manualAssingment.get(RADataProperties.externalId);
        //       for (const buildingRoom of buildingsFloors) {
        //         if (buildingRoom) {
        //           for (const roomNode of buildingRoom) {
        //             if (!roomNode) continue;
        //             const data = {
        //               label: roomNode.info.name.get(),
        //               value: roomNode._server_id,
        //             };
        //             if (roomServId === roomNode._server_id) {
        //               this.manualAssingmentSelection = data.value;
        //               this.manualAssingmentSelectionTmp = data.value;
        //             }
        //             this.manualAssingmentChoice.push(data);
        //           }
        //         }
        //       }
        //     },
        async update () {
            if (!(this.buildingServerId || this.BIMGeocontextServId)) return;
            this.modeView = "";
            this.roomData = null;
            const archiData = this.isRawDataGen ? await (0, _spinalSpatialReferential.diffArchiWithContextBIMGeo)(this.archiData, this.BIMGeocontextServId, this.manualAssingment) : await (0, _spinalSpatialReferential.diffArchiWithContextGeo)(this.archiData, this.buildingServerId, this.manualAssingment);
            spinal.spinalPanelManagerService.openPanel("SpinalDiffViewer", {
                archiData,
                manualAssingment: this.manualAssingment,
                isRawDataGen: this.isRawDataGen,
                BIMGeocontextServId: this.BIMGeocontextServId,
                buildingServerId: this.buildingServerId,
                bimFileId: this.bimFileId
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","./eventbus":"kLzMY","./SpinalTableDiffInfo.vue":"6FUFM","./SpinalTableDel.vue":"adxCe","./SpinalTableRoomNew.vue":"4eNZY","./SpinalTableRoomUpdate.vue":"oIlnR","./SpinalTableStructNew.vue":"h2VIH","./SpinalTableRoomUpdateDetails.vue":"6pP0G","./SpinalRoomNew.vue":"8S6fu","./BtnGroupViewInViewer.vue":"g0pBo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLzMY":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventBus", ()=>eventBus);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const eventBus = new (0, _vueDefault.default);

},{"vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FUFM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("997b43ed912eef17");
    if (script.__esModule) script = script.default;
    script.render = require("5ac3b00dec018d3b").render;
    script.staticRenderFns = require("5ac3b00dec018d3b").staticRenderFns;
    script._scopeId = "data-v-34b1d6";
    require("46130936a38e9a6b").default(script);
    script.__scopeId = "data-v-34b1d6";
    script.__file = "SpinalTableDiffInfo.vue";
};
initialize();
exports.default = script;

},{"997b43ed912eef17":"6fLL5","5ac3b00dec018d3b":"6Xz4f","46130936a38e9a6b":"fgchM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fLL5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "SpinalTableDiffInfo",
    props: [
        "diffInfo",
        "diffInfoHeader",
        "title"
    ],
    data () {
        return {};
    },
    methods: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Xz4f":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-expansion-panel-content", {
        attrs: {
            "ripple": "",
            "lazy": "",
            "disabled": _vm.diffInfo.length === 0
        },
        scopedSlots: _vm._u([
            {
                key: "header",
                fn: function() {
                    return [
                        _c("div", [
                            _vm._v(_vm._s(_vm.title) + " (" + _vm._s(_vm.diffInfo.length) + ")")
                        ])
                    ];
                },
                proxy: true
            }
        ])
    }, [
        _vm._v(" "),
        _c("v-card", [
            _c("v-card-text", [
                _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        "headers": _vm.diffInfoHeader,
                        "items": _vm.diffInfo
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "items",
                            fn: function(props) {
                                return [
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.label))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                        _c("v-edit-dialog", {
                                            attrs: {
                                                "return-value": props.item.archiValue,
                                                "lazy": ""
                                            },
                                            on: {
                                                "update:returnValue": function($event) {
                                                    return _vm.$set(props.item, "archiValue", $event);
                                                },
                                                "update:return-value": function($event) {
                                                    return _vm.$set(props.item, "archiValue", $event);
                                                }
                                            },
                                            scopedSlots: _vm._u([
                                                {
                                                    key: "input",
                                                    fn: function() {
                                                        return [
                                                            _c("v-text-field", {
                                                                attrs: {
                                                                    "label": "Edit",
                                                                    "single-line": ""
                                                                },
                                                                model: {
                                                                    value: props.item.archiValue,
                                                                    callback: function($$v) {
                                                                        _vm.$set(props.item, "archiValue", $$v);
                                                                    },
                                                                    expression: "props.item.archiValue"
                                                                }
                                                            })
                                                        ];
                                                    },
                                                    proxy: true
                                                }
                                            ], null, true)
                                        }, [
                                            _vm._v("\n              " + _vm._s(props.item.archiValue) + "\n              ")
                                        ])
                                    ], 1),
                                    _vm._v(" "),
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.nodeValue))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.unit))
                                    ])
                                ];
                            }
                        }
                    ])
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fgchM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adxCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9a41ef210194fc11");
    if (script.__esModule) script = script.default;
    script.render = require("9363630113aadfc8").render;
    script.staticRenderFns = require("9363630113aadfc8").staticRenderFns;
    script._scopeId = "data-v-93438f";
    require("9b9390b922fef28f").default(script);
    script.__scopeId = "data-v-93438f";
    script.__file = "SpinalTableDel.vue";
};
initialize();
exports.default = script;

},{"9a41ef210194fc11":"6NDbC","9363630113aadfc8":"isu7I","9b9390b922fef28f":"8X9Os","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6NDbC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalCoreConnectorjs = require("spinal-core-connectorjs");
var scriptExports = {
    name: "SpinalTableDel",
    props: [
        "title",
        "value"
    ],
    data () {
        return {
            diffInfoHeader: [
                {
                    text: "Name",
                    align: "left",
                    value: "name"
                },
                {
                    text: "Node ID",
                    value: "nodeId"
                },
                {
                    text: "ServerID",
                    value: "serverId"
                }
            ]
        };
    },
    computed: {
        dataArr () {
            const res = [];
            for (const serverId of this.value){
                const node = (0, _spinalCoreConnectorjs.FileSystem)._objects[serverId];
                res.push({
                    name: node.info.name.get(),
                    nodeId: node.info.id.get(),
                    serverId
                });
            }
            return res;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-core-connectorjs":"2uyD7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isu7I":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-expansion-panel-content", {
        attrs: {
            "ripple": "",
            "lazy": "",
            "disabled": _vm.dataArr.length === 0
        },
        scopedSlots: _vm._u([
            {
                key: "header",
                fn: function() {
                    return [
                        _c("div", [
                            _vm._v(_vm._s(_vm.title) + " (" + _vm._s(_vm.dataArr.length) + ")")
                        ])
                    ];
                },
                proxy: true
            }
        ])
    }, [
        _vm._v(" "),
        _c("v-card", [
            _c("v-card-text", [
                _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        "headers": _vm.diffInfoHeader,
                        "items": _vm.dataArr
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "items",
                            fn: function(props) {
                                return [
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.name))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.nodeId))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                        _vm._v(_vm._s(props.item.serverId))
                                    ])
                                ];
                            }
                        }
                    ])
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8X9Os":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eNZY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("92324b67720655f3");
    if (script.__esModule) script = script.default;
    script.render = require("9561c198c80f025e").render;
    script.staticRenderFns = require("9561c198c80f025e").staticRenderFns;
    script._scopeId = "data-v-beeda8";
    require("d203fed6a4d00585").default(script);
    script.__scopeId = "data-v-beeda8";
    script.__file = "SpinalTableRoomNew.vue";
};
initialize();
exports.default = script;

},{"92324b67720655f3":"kvFyb","9561c198c80f025e":"fDe0G","d203fed6a4d00585":"dIJfp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvFyb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalRoomNewVue = require("./SpinalRoomNew.vue");
var _spinalRoomNewVueDefault = parcelHelpers.interopDefault(_spinalRoomNewVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "SpinalTableRoomNew",
    props: [
        "value"
    ],
    components: {
        SpinalRoomNew: (0, _spinalRoomNewVueDefault.default)
    },
    data () {
        return {
            dataTable: [],
            selected: []
        };
    },
    mounted () {
        this.update();
    },
    watch: {
        value () {
            this.update();
        }
    },
    methods: {
        update () {
            this.dataTable = [];
            if (this.value) for (const roomArchi of this.value){
                const room = getProps(roomArchi.properties);
                if (this.selected.length === 0) this.selected.push(room);
                this.dataTable.push(room);
                room.children = [];
                for (const structure of roomArchi.children){
                    const struct = getProps(structure);
                    room.children.push(struct);
                }
            }
        }
    }
};
function getProps(properties) {
    const props = {
        name: "",
        id: properties.externalId,
        attr: [
            {
                label: "dbId",
                value: properties.dbId,
                unit: ""
            },
            {
                label: "externalId",
                value: properties.externalId,
                unit: ""
            }
        ]
    };
    for (const attr of properties.properties){
        if (attr.name === "name") props.name += attr.value;
        if (attr.name === "level") continue;
        if (attr.name === "number") props.name = attr.value.toString() + "-" + props.name;
        props.attr.push({
            label: attr.name,
            value: attr.value,
            unit: (0, _spinalSpatialReferential.parseUnit)(attr.dataTypeContext)
        });
    }
    return props;
}
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalRoomNew.vue":"8S6fu","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8S6fu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25f049f8778c9780");
    if (script.__esModule) script = script.default;
    script.render = require("147db5c02c23d8d4").render;
    script.staticRenderFns = require("147db5c02c23d8d4").staticRenderFns;
    script._scopeId = "data-v-7a5fa5";
    script.__cssModules = require("819ce40583937024").default;
    require("846df68aae200510").default(script);
    script.__scopeId = "data-v-7a5fa5";
    script.__file = "SpinalRoomNew.vue";
};
initialize();
exports.default = script;

},{"25f049f8778c9780":"cg2aJ","147db5c02c23d8d4":"2iwLF","819ce40583937024":"8C0xe","846df68aae200510":"gmjlx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cg2aJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _btnGroupViewInViewerVue = require("./BtnGroupViewInViewer.vue");
var _btnGroupViewInViewerVueDefault = parcelHelpers.interopDefault(_btnGroupViewInViewerVue);
var scriptExports = {
    name: "SpinalRoomNew",
    props: [
        "tableData",
        "value"
    ],
    components: {
        BtnGroupViewInViewer: (0, _btnGroupViewInViewerVueDefault.default)
    },
    data () {
        return {
            diffInfoHeader: [
                {
                    text: "Name",
                    align: "left",
                    value: "name"
                },
                {
                    text: "Value",
                    value: "value"
                },
                {
                    text: "Unit",
                    value: "unit"
                }
            ]
        };
    },
    computed: {
        name () {
            let name = "";
            if (this.selectedComp) for (const attr of this.selectedComp.attr){
                if (attr.label === "name") name += attr.value;
                if (attr.label === "number") name = attr.value.toString() + "-" + name;
            }
            return name;
        },
        selectedComp () {
            return this.value[0];
        },
        selectedC: {
            get () {
                return this.value;
            },
            set (value) {
                this.$emit("input", value);
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./BtnGroupViewInViewer.vue":"g0pBo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0pBo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fbccd0c8c44c7ec8");
    if (script.__esModule) script = script.default;
    script.render = require("c6062af9fa29609e").render;
    script.staticRenderFns = require("c6062af9fa29609e").staticRenderFns;
    script._scopeId = "data-v-72e506";
    script.__cssModules = require("f0e78a4e9cbab728").default;
    require("8887e04c2577b111").default(script);
    script.__scopeId = "data-v-72e506";
    script.__file = "BtnGroupViewInViewer.vue";
};
initialize();
exports.default = script;

},{"fbccd0c8c44c7ec8":"WbGZy","c6062af9fa29609e":"8KAni","f0e78a4e9cbab728":"ae01Z","8887e04c2577b111":"5mHRB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WbGZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "BtnGroupViewInViewer",
    props: [
        "data",
        "type"
    ],
    data () {
        return {};
    },
    methods: {
        getAttrDbId (arr) {
            for (const attr of arr){
                if (attr.label === "dbId") return attr.value;
            }
        },
        getDbId (target) {
            console.log("BtnGroupViewInViewer data", this.data);
            const dbIds = [];
            if (this.type === "floor") {
                if (!target) {
                    for(const extId in this.data.structures)if (Object.hasOwnProperty.call(this.data.structures, extId)) dbIds.push(this.data.structures[extId].properties.dbId);
                } else {
                    for(const extId in this.data.children)if (this.data.children.hasOwnProperty.call(this.data.children, extId)) {
                        const room = this.data.children[extId];
                        for (const child of room.children)dbIds.push(child.dbId);
                    }
                }
            } else if (this.type === "roomNew") {
                const roomDbId = this.getAttrDbId(this.data.attr);
                if (this.data.children) for (const roomRef of this.data.children){
                    const roomRefDbId = this.getAttrDbId(this.data.attr);
                    if (roomRefDbId) dbIds.push(roomRefDbId);
                }
                if (roomDbId) dbIds.push(roomDbId);
            } else if (this.type === "roomUpdate") {
                const FAData = this.data.FAData;
                const roomData = this.data.roomData;
                const roomArchi = FAData.floorArchi.children[roomData.externalId];
                if (roomArchi) {
                    dbIds.push(roomArchi.properties.dbId);
                    for (const child of roomArchi.children)dbIds.push(child.dbId);
                }
            }
            return dbIds;
        },
        getAggregateDbId (data, targetArray, key) {
            for (const itm of data)for (const dbId of itm[key])targetArray.push(dbId);
        },
        onClickSelect (event, targetRoom) {
            if (event.shiftKey === true) return;
            const dbIds = this.getDbId(targetRoom);
            if (dbIds.length === 0) return;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            viewer.select(dbIds);
        },
        onClickFit (targetRoom) {
            const dbIds = this.getDbId(targetRoom);
            if (dbIds.length === 0) return;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            viewer.fitToView(dbIds);
        },
        onClickIsolate (event, targetRoom) {
            if (event.shiftKey === true) return;
            const dbIds = this.getDbId(targetRoom);
            if (dbIds.length === 0) return;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            viewer.isolate(dbIds);
        },
        onShiftClickSelect (targetRoom) {
            const dbIds = this.getDbId(targetRoom);
            if (dbIds.length === 0) return;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            const aggr = viewer.getAggregateSelection();
            this.getAggregateDbId(aggr, dbIds, "selection");
            viewer.select(dbIds);
        },
        onShiftClickIsolate (targetRoom) {
            const dbIds = this.getDbId(targetRoom);
            if (dbIds.length === 0) return;
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            const aggr = viewer.getAggregateIsolation();
            this.getAggregateDbId(aggr, dbIds, "ids");
            viewer.isolate(dbIds);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KAni":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "BtnGroupViewInViewer"
    }, [
        _c("fieldset", [
            _c("legend", [
                _vm._v("Structures:")
            ]),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "circle": "",
                    "icon": ""
                },
                on: {
                    "click": [
                        function($event) {
                            return _vm.onClickSelect($event);
                        },
                        function($event) {
                            if (!$event.shiftKey) return null;
                            return _vm.onShiftClickSelect();
                        }
                    ]
                }
            }, [
                _c("v-icon", [
                    _vm._v("devices")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "circle": "",
                    "icon": ""
                },
                on: {
                    "click": function($event) {
                        return _vm.onClickFit();
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v("zoom_in")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "circle": "",
                    "icon": ""
                },
                on: {
                    "click": [
                        function($event) {
                            return _vm.onClickIsolate($event);
                        },
                        function($event) {
                            if (!$event.shiftKey) return null;
                            return _vm.onShiftClickIsolate();
                        }
                    ]
                }
            }, [
                _c("v-icon", [
                    _vm._v("settings_overscan")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _vm.type === "floor" ? [
            _c("fieldset", [
                _c("legend", [
                    _vm._v("Rooms:")
                ]),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "circle": "",
                        "icon": ""
                    },
                    on: {
                        "click": [
                            function($event) {
                                return _vm.onClickSelect($event, true);
                            },
                            function($event) {
                                if (!$event.shiftKey) return null;
                                return _vm.onShiftClickSelect(true);
                            }
                        ]
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("devices")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "circle": "",
                        "icon": ""
                    },
                    on: {
                        "click": function($event) {
                            return _vm.onClickFit(true);
                        }
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("zoom_in")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "circle": "",
                        "icon": ""
                    },
                    on: {
                        "click": [
                            function($event) {
                                return _vm.onClickIsolate($event, true);
                            },
                            function($event) {
                                if (!$event.shiftKey) return null;
                                return _vm.onShiftClickIsolate(true);
                            }
                        ]
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("settings_overscan")
                    ])
                ], 1)
            ], 1)
        ] : _vm._e()
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ae01Z":[function() {},{}],"5mHRB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iwLF":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-layout", {
        attrs: {
            "justify-space-between": "",
            "pa-3": ""
        }
    }, [
        _c("v-flex", {
            staticStyle: {
                "overflow": "auto"
            },
            attrs: {
                "xs4": "",
                "spinal-scrollbar": ""
            }
        }, [
            _c("v-treeview", {
                attrs: {
                    "items": _vm.tableData,
                    "active": _vm.selectedC,
                    "hoverable": "",
                    "open-all": true,
                    "return-object": "",
                    "activatable": ""
                },
                on: {
                    "update:active": function($event) {
                        _vm.selectedC = $event;
                    }
                }
            })
        ], 1),
        _vm._v(" "),
        _c("v-divider", {
            attrs: {
                "vertical": ""
            }
        }),
        _vm._v(" "),
        _c("v-flex", {
            attrs: {
                "d-flex": "",
                "text-xs-center": ""
            }
        }, [
            _c("v-scroll-y-transition", {
                attrs: {
                    "mode": "out-in"
                }
            }, [
                _vm.selectedC.length === 0 ? _c("div", {
                    staticClass: "title grey--text text--lighten-1 font-weight-light",
                    staticStyle: {
                        "align-self": "center"
                    }
                }, [
                    _vm._v("\n        Select an item\n      ")
                ]) : _c("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        "flat": ""
                    }
                }, [
                    _c("div", {
                        staticClass: "spinal-diff-room-new-container"
                    }, [
                        _c("div", [
                            _vm._v("\n            " + _vm._s(_vm.name) + "\n          ")
                        ]),
                        _vm._v(" "),
                        _c("BtnGroupViewInViewer", {
                            attrs: {
                                "type": "roomNew",
                                "data": _vm.selectedComp
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-text", [
                        _vm._t("default"),
                        _vm._v(" "),
                        _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                                "headers": _vm.diffInfoHeader,
                                "items": _vm.selectedComp.attr
                            },
                            scopedSlots: _vm._u([
                                {
                                    key: "items",
                                    fn: function(props) {
                                        return [
                                            _c("td", [
                                                _vm._v(_vm._s(props.item.label))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                                _vm._v(_vm._s(props.item.value))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                                _vm._v(_vm._s(props.item.unit))
                                            ])
                                        ];
                                    }
                                }
                            ])
                        })
                    ], 2)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8C0xe":[function() {},{}],"gmjlx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDe0G":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-expansion-panel-content", {
        attrs: {
            "ripple": "",
            "lazy": "",
            "disabled": _vm.dataTable.length === 0
        },
        scopedSlots: _vm._u([
            {
                key: "header",
                fn: function() {
                    return [
                        _c("div", [
                            _vm._v("Room to be added (" + _vm._s(_vm.dataTable.length) + ")")
                        ])
                    ];
                },
                proxy: true
            }
        ])
    }, [
        _vm._v(" "),
        _c("SpinalRoomNew", {
            attrs: {
                "tableData": _vm.dataTable
            },
            model: {
                value: _vm.selected,
                callback: function($$v) {
                    _vm.selected = $$v;
                },
                expression: "selected"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dIJfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oIlnR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c379d549b905263c");
    if (script.__esModule) script = script.default;
    script.render = require("a1572ede2ec05708").render;
    script.staticRenderFns = require("a1572ede2ec05708").staticRenderFns;
    script._scopeId = "data-v-a5eb2f";
    script.__cssModules = require("64203b026dce6f49").default;
    require("4c3d058ae80b1210").default(script);
    script.__scopeId = "data-v-a5eb2f";
    script.__file = "SpinalTableRoomUpdate.vue";
};
initialize();
exports.default = script;

},{"c379d549b905263c":"jRJQ3","a1572ede2ec05708":"cAfwX","64203b026dce6f49":"fK9mw","4c3d058ae80b1210":"eQ0dL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRJQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalTableRoomUpdateDetailsVue = require("./SpinalTableRoomUpdateDetails.vue");
var _spinalTableRoomUpdateDetailsVueDefault = parcelHelpers.interopDefault(_spinalTableRoomUpdateDetailsVue);
var scriptExports = {
    name: "SpinalTableRoomUpdate",
    props: [
        "value"
    ],
    components: {
        SpinalTableRoomUpdateDetails: (0, _spinalTableRoomUpdateDetailsVueDefault.default)
    },
    data () {
        return {
            selected: [],
            dataTable: []
        };
    },
    computed: {
        selectedComp () {
            return this.selected[0];
        }
    },
    mounted () {
        this.update();
    },
    watch: {
        value () {
            this.update();
        }
    },
    methods: {
        update () {
            this.dataTable = [];
            this.selected = [];
            if (this.value) for (const { roomArchi, diff } of this.value){
                const room = getProps(roomArchi.properties, diff);
                this.dataTable.push(room);
            }
        }
    }
};
function getProps(properties, diff) {
    const props = {
        name: "",
        id: properties.externalId,
        dbId: properties.dbId,
        externalId: properties.externalId,
        diff
    };
    for (const attr of properties.properties){
        if (attr.name === "name") props.name += attr.value;
        if (attr.name === "number") props.name = attr.value.toString() + "-" + props.name;
    }
    return props;
}
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalTableRoomUpdateDetails.vue":"6pP0G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pP0G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e6316ef42c8b5bc5");
    if (script.__esModule) script = script.default;
    script.render = require("a2d7eb7a8e4d8d").render;
    script.staticRenderFns = require("a2d7eb7a8e4d8d").staticRenderFns;
    script._scopeId = "data-v-62c676";
    script.__cssModules = require("be9b1ce7f85cac4d").default;
    require("19184ddcfdf95881").default(script);
    script.__scopeId = "data-v-62c676";
    script.__file = "SpinalTableRoomUpdateDetails.vue";
};
initialize();
exports.default = script;

},{"e6316ef42c8b5bc5":"fJZif","a2d7eb7a8e4d8d":"b3SoI","be9b1ce7f85cac4d":"dPYhu","19184ddcfdf95881":"6Xo59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJZif":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "SpinalTableRoomUpdateDetails",
    props: [
        "value"
    ],
    data () {
        return {
            diffInfoHeader: [
                {
                    text: "Name",
                    align: "left",
                    value: "name"
                },
                {
                    text: "New Value",
                    value: "new"
                },
                {
                    text: "Old value",
                    value: "old"
                },
                {
                    text: "Unit",
                    value: "unit"
                }
            ]
        };
    },
    computed: {
        name () {
            let name = "";
            if (this.value && this.value.diff && this.value.diff.diffAttr) for (const attr of this.value.diff.diffAttr){
                if (attr.label === "name") name += attr.archiValue;
                if (attr.label === "number") name = attr.archiValue.toString() + "-" + name;
            }
            return name === "" ? this.value.name : name;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3SoI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-card", {
        staticClass: "mx-auto",
        attrs: {
            "flat": ""
        }
    }, [
        _c("div", {
            staticClass: "update-basic-info"
        }, [
            _c("p", [
                _vm._v("name: " + _vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("dbId: " + _vm._s(_vm.value.dbId))
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("externalId: " + _vm._s(_vm.value.externalId))
            ])
        ]),
        _vm._v(" "),
        _c("v-card-text", [
            _c("v-expansion-panel", {
                attrs: {
                    "popout": ""
                }
            }, [
                _c("v-expansion-panel-content", {
                    attrs: {
                        "ripple": "",
                        "lazy": "",
                        "disabled": _vm.value.diff.diffInfo.length === 0
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "header",
                            fn: function() {
                                return [
                                    _c("div", [
                                        _vm._v("Diff info (" + _vm._s(_vm.value.diff.diffInfo.length) + ")")
                                    ])
                                ];
                            },
                            proxy: true
                        }
                    ])
                }, [
                    _vm._v(" "),
                    _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                            "headers": _vm.diffInfoHeader,
                            "items": _vm.value.diff.diffInfo
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "items",
                                fn: function(props) {
                                    return [
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.label))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                            _c("v-edit-dialog", {
                                                attrs: {
                                                    "return-value": props.item.archiValue,
                                                    "lazy": ""
                                                },
                                                on: {
                                                    "update:returnValue": function($event) {
                                                        return _vm.$set(props.item, "archiValue", $event);
                                                    },
                                                    "update:return-value": function($event) {
                                                        return _vm.$set(props.item, "archiValue", $event);
                                                    }
                                                },
                                                scopedSlots: _vm._u([
                                                    {
                                                        key: "input",
                                                        fn: function() {
                                                            return [
                                                                _c("v-text-field", {
                                                                    attrs: {
                                                                        "label": "Edit",
                                                                        "single-line": ""
                                                                    },
                                                                    model: {
                                                                        value: props.item.archiValue,
                                                                        callback: function($$v) {
                                                                            _vm.$set(props.item, "archiValue", $$v);
                                                                        },
                                                                        expression: "props.item.archiValue"
                                                                    }
                                                                })
                                                            ];
                                                        },
                                                        proxy: true
                                                    }
                                                ], null, true)
                                            }, [
                                                _vm._v("\n                " + _vm._s(props.item.archiValue) + "\n                ")
                                            ])
                                        ], 1),
                                        _vm._v(" "),
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.nodeValue))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.unit))
                                        ])
                                    ];
                                }
                            }
                        ])
                    })
                ], 1),
                _vm._v(" "),
                _c("v-expansion-panel-content", {
                    attrs: {
                        "ripple": "",
                        "lazy": "",
                        "disabled": _vm.value.diff.diffAttr.length === 0
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "header",
                            fn: function() {
                                return [
                                    _c("div", [
                                        _vm._v("Diff Attributes (" + _vm._s(_vm.value.diff.diffAttr.length) + ")")
                                    ])
                                ];
                            },
                            proxy: true
                        }
                    ])
                }, [
                    _vm._v(" "),
                    _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                            "headers": _vm.diffInfoHeader,
                            "items": _vm.value.diff.diffAttr
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "items",
                                fn: function(props) {
                                    return [
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.label))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                            _c("v-edit-dialog", {
                                                attrs: {
                                                    "return-value": props.item.archiValue,
                                                    "lazy": ""
                                                },
                                                on: {
                                                    "update:returnValue": function($event) {
                                                        return _vm.$set(props.item, "archiValue", $event);
                                                    },
                                                    "update:return-value": function($event) {
                                                        return _vm.$set(props.item, "archiValue", $event);
                                                    }
                                                },
                                                scopedSlots: _vm._u([
                                                    {
                                                        key: "input",
                                                        fn: function() {
                                                            return [
                                                                _c("v-text-field", {
                                                                    attrs: {
                                                                        "label": "Edit",
                                                                        "single-line": ""
                                                                    },
                                                                    model: {
                                                                        value: props.item.archiValue,
                                                                        callback: function($$v) {
                                                                            _vm.$set(props.item, "archiValue", $$v);
                                                                        },
                                                                        expression: "props.item.archiValue"
                                                                    }
                                                                })
                                                            ];
                                                        },
                                                        proxy: true
                                                    }
                                                ], null, true)
                                            }, [
                                                _vm._v("\n                " + _vm._s(props.item.archiValue) + "\n                ")
                                            ])
                                        ], 1),
                                        _vm._v(" "),
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.nodeValue))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.unit))
                                        ])
                                    ];
                                }
                            }
                        ])
                    })
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dPYhu":[function() {},{}],"6Xo59":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAfwX":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-expansion-panel-content", {
        attrs: {
            "ripple": "",
            "lazy": "",
            "disabled": _vm.dataTable.length === 0
        },
        scopedSlots: _vm._u([
            {
                key: "header",
                fn: function() {
                    return [
                        _c("div", [
                            _vm._v("Room to be updated (" + _vm._s(_vm.dataTable.length) + ")")
                        ])
                    ];
                },
                proxy: true
            }
        ])
    }, [
        _vm._v(" "),
        _c("v-layout", {
            attrs: {
                "justify-space-between": "",
                "pa-3": ""
            }
        }, [
            _c("v-flex", {
                staticStyle: {
                    "overflow": "auto"
                },
                attrs: {
                    "xs4": "",
                    "spinal-scrollbar": ""
                }
            }, [
                _c("v-treeview", {
                    attrs: {
                        "items": _vm.dataTable,
                        "active": _vm.selected,
                        "hoverable": "",
                        "open-all": true,
                        "return-object": "",
                        "activatable": ""
                    },
                    on: {
                        "update:active": function($event) {
                            _vm.selected = $event;
                        }
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-divider", {
                attrs: {
                    "vertical": ""
                }
            }),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "d-flex": "",
                    "text-xs-center": ""
                }
            }, [
                _c("v-scroll-y-transition", {
                    attrs: {
                        "mode": "out-in"
                    }
                }, [
                    _vm.selected.length === 0 ? _c("div", {
                        staticClass: "title grey--text text--lighten-1 font-weight-light",
                        staticStyle: {
                            "align-self": "center"
                        }
                    }, [
                        _vm._v("\n          Select an item\n        ")
                    ]) : _c("SpinalTableRoomUpdateDetails", {
                        attrs: {
                            "value": _vm.selectedComp
                        }
                    })
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fK9mw":[function() {},{}],"eQ0dL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2VIH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2c6ee4371e0d005e");
    if (script.__esModule) script = script.default;
    script.render = require("6644a5d87911711a").render;
    script.staticRenderFns = require("6644a5d87911711a").staticRenderFns;
    script._scopeId = "data-v-69928f";
    require("4b04935ae051d55b").default(script);
    script.__scopeId = "data-v-69928f";
    script.__file = "SpinalTableStructNew.vue";
};
initialize();
exports.default = script;

},{"2c6ee4371e0d005e":"9nCVF","6644a5d87911711a":"84fKu","4b04935ae051d55b":"hSjfw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nCVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "SpinalTableStructNew",
    props: [
        "value"
    ],
    data () {
        return {
            selected: [],
            diffInfoHeader: [
                {
                    text: "Name",
                    align: "left",
                    value: "name"
                },
                {
                    text: "Value",
                    value: "value"
                },
                {
                    text: "Unit",
                    value: "unit"
                }
            ],
            dataTable: []
        };
    },
    computed: {
        selectedComp () {
            return this.selected[0];
        }
    },
    mounted () {
        this.update();
    },
    watch: {
        value () {
            this.update();
        }
    },
    methods: {
        update () {
            this.dataTable = [];
            this.selected = [];
            if (this.value) for (const bimobj of this.value){
                const obj = getProps(bimobj);
                this.dataTable.push(obj);
            }
        }
    }
};
function getProps(properties) {
    const props = {
        name: "",
        id: properties.externalId,
        attr: [
            {
                label: "dbId",
                value: properties.dbId,
                unit: ""
            },
            {
                label: "externalId",
                value: properties.externalId,
                unit: ""
            }
        ]
    };
    for (const attr of properties.properties){
        if (attr.name === "name") props.name = attr.value;
        if (attr.name === "level") continue;
        props.attr.push({
            label: attr.name,
            value: attr.value,
            unit: (0, _spinalSpatialReferential.parseUnit)(attr.dataTypeContext)
        });
    }
    return props;
}
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84fKu":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-expansion-panel-content", {
        attrs: {
            "ripple": "",
            "lazy": "",
            "disabled": _vm.dataTable.length === 0
        },
        scopedSlots: _vm._u([
            {
                key: "header",
                fn: function() {
                    return [
                        _c("div", [
                            _vm._v("Reference Structures to be added (" + _vm._s(_vm.dataTable.length) + ")")
                        ])
                    ];
                },
                proxy: true
            }
        ])
    }, [
        _vm._v(" "),
        _c("v-layout", {
            attrs: {
                "justify-space-between": "",
                "pa-3": ""
            }
        }, [
            _c("v-flex", {
                staticStyle: {
                    "overflow": "auto"
                },
                attrs: {
                    "xs4": "",
                    "spinal-scrollbar": ""
                }
            }, [
                _c("v-treeview", {
                    attrs: {
                        "items": _vm.dataTable,
                        "active": _vm.selected,
                        "hoverable": "",
                        "open-all": true,
                        "return-object": "",
                        "activatable": ""
                    },
                    on: {
                        "update:active": function($event) {
                            _vm.selected = $event;
                        }
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-divider", {
                attrs: {
                    "vertical": ""
                }
            }),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "d-flex": "",
                    "text-xs-center": ""
                }
            }, [
                _c("v-scroll-y-transition", {
                    attrs: {
                        "mode": "out-in"
                    }
                }, [
                    _vm.selected.length === 0 ? _c("div", {
                        staticClass: "title grey--text text--lighten-1 font-weight-light",
                        staticStyle: {
                            "align-self": "center"
                        }
                    }, [
                        _vm._v("\n          Select an item\n        ")
                    ]) : _c("v-card", {
                        staticClass: "mx-auto",
                        attrs: {
                            "flat": ""
                        }
                    }, [
                        _c("div", [
                            _vm._v("\n            " + _vm._s(_vm.selectedComp.name) + "\n          ")
                        ]),
                        _vm._v(" "),
                        _c("v-card-text", [
                            _c("v-data-table", {
                                staticClass: "elevation-1",
                                attrs: {
                                    "headers": _vm.diffInfoHeader,
                                    "items": _vm.selectedComp.attr
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "items",
                                        fn: function(props) {
                                            return [
                                                _c("td", [
                                                    _vm._v(_vm._s(props.item.label))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                    _vm._v(_vm._s(props.item.value))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                    _vm._v(_vm._s(props.item.unit))
                                                ])
                                            ];
                                        }
                                    }
                                ])
                            })
                        ], 1)
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hSjfw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehvdL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "spatial-diff-settings"
    }, [
        _c("div", {
            staticClass: "spatial-diff-settings-header"
        }, [
            _c("v-btn", {
                attrs: {
                    "dark": "",
                    "icon": true,
                    "round": ""
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("back");
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v("arrow_back")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "elevation": "2",
                    "icon": ""
                },
                on: {
                    "click": _vm.update
                }
            }, [
                _c("v-icon", [
                    _vm._v("refresh")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "spatial-diff-settings-body spinal-scrollbar"
        }, [
            _vm.modeView === "" ? _c("v-card", [
                _c("v-card-title", [
                    _c("div", [
                        _c("h6", {
                            staticClass: "headline mb-0"
                        }, [
                            _vm._v("Select an item in the sidebar")
                        ])
                    ])
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.modeView === "floor" ? _c("v-card", [
                _c("v-card-title", [
                    _c("div", {
                        staticClass: "spatial-diff-settings-title-container"
                    }, [
                        _c("h6", {
                            staticClass: "headline mb-0"
                        }, [
                            _vm._v(_vm._s(_vm.getFloorName(_vm.FAData)))
                        ]),
                        _vm._v(" "),
                        _c("div", [
                            _vm._v(_vm._s(_vm.getModificationType(_vm.FAData.floorArchi.properties.modificationType)))
                        ])
                    ]),
                    _vm._v(" "),
                    _c("BtnGroupViewInViewer", {
                        attrs: {
                            "type": "floor",
                            "data": _vm.FAData.floorArchi
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("v-card-text", [
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Manual assingment selection")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            staticClass: "spinal-md-select",
                            attrs: {
                                "md-dense": ""
                            },
                            model: {
                                value: _vm.manualAssingmentSelection,
                                callback: function($$v) {
                                    _vm.manualAssingmentSelection = $$v;
                                },
                                expression: "manualAssingmentSelection"
                            }
                        }, _vm._l(_vm.manualAssingmentChoice, function(item) {
                            return _c("md-option", {
                                key: item.value,
                                attrs: {
                                    "value": item.value
                                }
                            }, [
                                _vm._v("\n              " + _vm._s(item.label) + "\n            ")
                            ]);
                        }), 1),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "elevation": "2",
                                "disabled": _vm.manualAssingmentSelection === _vm.manualAssingmentSelectionTmp,
                                "icon": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.validateAssingment(_vm.FAData.floorArchi.properties.externalId);
                                }
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("check")
                            ])
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-expansion-panel", {
                        attrs: {
                            "popout": ""
                        }
                    }, [
                        _vm.FAData.diff ? [
                            _c("SpinalTableDiffInfo", {
                                attrs: {
                                    "diffInfo": _vm.FAData.diff.diffInfo.diffInfo,
                                    "diffInfoHeader": _vm.diffInfoHeader,
                                    "title": "Diff Info"
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableDiffInfo", {
                                attrs: {
                                    "diffInfo": _vm.FAData.diff.diffInfo.diffAttr,
                                    "diffInfoHeader": _vm.diffInfoHeader,
                                    "title": "Diff Attributes"
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableDel", {
                                attrs: {
                                    "title": "Room to be removed",
                                    "value": _vm.FAData.diff.diffRoom.delRooms
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableRoomNew", {
                                attrs: {
                                    "value": _vm.FAData.diff.diffRoom.newRooms
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableRoomUpdate", {
                                attrs: {
                                    "value": _vm.FAData.diff.diffRoom.updateRooms
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableDel", {
                                attrs: {
                                    "title": "Reference Structures to be removed",
                                    "value": _vm.FAData.diff.diffRef.delBimObj
                                }
                            }),
                            _vm._v(" "),
                            _c("SpinalTableStructNew", {
                                attrs: {
                                    "value": _vm.FAData.diff.diffRef.newBimObj
                                }
                            })
                        ] : _vm._e()
                    ], 2)
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.modeView === "roomupdate" ? _c("v-card", [
                _c("v-card-title", [
                    _c("div", {
                        staticClass: "spatial-diff-settings-title-container"
                    }, [
                        _c("h6", {
                            staticClass: "headline mb-0"
                        }, [
                            _vm._v(_vm._s(_vm.compuName))
                        ]),
                        _vm._v(" "),
                        _c("div", [
                            _vm._v(_vm._s(_vm.getModificationType(_vm.roomData.modificationType)))
                        ])
                    ]),
                    _vm._v(" "),
                    _c("BtnGroupViewInViewer", {
                        attrs: {
                            "type": "roomUpdate",
                            "data": {
                                roomData: _vm.roomData,
                                FAData: _vm.FAData
                            }
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("v-card-text", [
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Manual assingment selection")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            staticClass: "spinal-md-select",
                            attrs: {
                                "md-dense": ""
                            },
                            model: {
                                value: _vm.manualAssingmentSelection,
                                callback: function($$v) {
                                    _vm.manualAssingmentSelection = $$v;
                                },
                                expression: "manualAssingmentSelection"
                            }
                        }, _vm._l(_vm.manualAssingmentChoice, function(item) {
                            return _c("md-option", {
                                key: item.value,
                                attrs: {
                                    "value": item.value
                                }
                            }, [
                                _vm._v("\n              " + _vm._s(item.label) + "\n            ")
                            ]);
                        }), 1),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "elevation": "2",
                                "disabled": _vm.manualAssingmentSelection === _vm.manualAssingmentSelectionTmp,
                                "icon": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.validateAssingment(_vm.roomData.externalId);
                                }
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("check")
                            ])
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("SpinalTableRoomUpdateDetails", {
                        attrs: {
                            "value": _vm.roomData
                        }
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.modeView === "roomdelete" ? _c("v-card", [
                _c("v-card-text", {
                    staticClass: "spinal-diff-room-delete-container"
                }, [
                    _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                            "hide-headers": "",
                            "hide-actions": "",
                            "items": [
                                {
                                    label: "Name",
                                    value: _vm.roomData.name
                                },
                                {
                                    label: "Node ID",
                                    value: _vm.roomData.nodeId
                                },
                                {
                                    label: "Server ID",
                                    value: _vm.roomData.serverId
                                }
                            ]
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "items",
                                fn: function(props) {
                                    return [
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.label))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                            _vm._v(_vm._s(props.item.value))
                                        ])
                                    ];
                                }
                            }
                        ], null, false, 1184866036)
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.modeView === "roomnew" ? _c("v-card", [
                _c("SpinalRoomNew", {
                    attrs: {
                        "tableData": _vm.roomData
                    },
                    model: {
                        value: _vm.selected,
                        callback: function($$v) {
                            _vm.selected = $$v;
                        },
                        expression: "selected"
                    }
                }, [
                    _vm.roomData[0] === _vm.selected[0] ? _c("md-field", [
                        _c("label", [
                            _vm._v("Manual assingment selection")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            staticClass: "spinal-md-select",
                            attrs: {
                                "md-dense": ""
                            },
                            model: {
                                value: _vm.manualAssingmentSelection,
                                callback: function($$v) {
                                    _vm.manualAssingmentSelection = $$v;
                                },
                                expression: "manualAssingmentSelection"
                            }
                        }, _vm._l(_vm.manualAssingmentChoice, function(item) {
                            return _c("md-option", {
                                key: item.value,
                                attrs: {
                                    "value": item.value
                                }
                            }, [
                                _vm._v("\n              " + _vm._s(item.label) + "\n            ")
                            ]);
                        }), 1),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "elevation": "2",
                                "disabled": _vm.manualAssingmentSelection === _vm.manualAssingmentSelectionTmp,
                                "icon": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.validateAssingment(_vm.selected[0].id);
                                }
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("check")
                            ])
                        ], 1)
                    ], 1) : _vm._e()
                ], 1)
            ], 1) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"epa13":[function() {},{}],"4kUqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4AGl":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", {
        staticClass: "gen-spatial-body",
        attrs: {
            "dark": ""
        }
    }, [
        _c("div", {
            staticClass: "gen-spatial-container"
        }, [
            _c("v-tabs", {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.hideDiffSettings,
                        expression: "hideDiffSettings"
                    }
                ],
                model: {
                    value: _vm.active,
                    callback: function($$v) {
                        _vm.active = $$v;
                    },
                    expression: "active"
                }
            }, [
                _c("v-tab", {
                    attrs: {
                        "ripple": ""
                    }
                }, [
                    _vm._v(" Basic ")
                ]),
                _vm._v(" "),
                _c("v-tab", {
                    attrs: {
                        "ripple": ""
                    }
                }, [
                    _vm._v(" Advanced ")
                ]),
                _vm._v(" "),
                _c("v-tab", {
                    attrs: {
                        "ripple": ""
                    }
                }, [
                    _vm._v(" Scripts ")
                ]),
                _vm._v(" "),
                _c("v-tab-item", {
                    staticClass: "spinal-modal-gen-spatial-tab-item"
                }, [
                    _vm.active === 0 ? _c("Basicselectmodel", {
                        attrs: {
                            "bimfiles": _vm.bimfiles,
                            "btn-disabled": _vm.spin
                        },
                        on: {
                            "continue": _vm.generate
                        }
                    }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("v-tab-item", [
                    _vm.active === 1 ? _c("AdvencedSelectModel", {
                        attrs: {
                            "bimfiles": _vm.bimfiles,
                            "btn-disabled": _vm.spin
                        },
                        on: {
                            "onGenerate": _vm.advancedGenerate
                        }
                    }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("v-tab-item", [
                    _c("v-card", [
                        _c("v-card-text", [
                            _c("md-list", [
                                _vm._l(_vm.scripts, function(item, index) {
                                    return [
                                        item.divider ? [
                                            index !== 0 ? _c("md-divider", {
                                                key: item.title + "-divider"
                                            }) : _vm._e(),
                                            _vm._v(" "),
                                            _c("md-subheader", {
                                                key: item.title
                                            }, [
                                                _vm._v(_vm._s(item.title))
                                            ])
                                        ] : _c("md-list-item", {
                                            key: item.title,
                                            attrs: {
                                                "disabled": _vm.spin
                                            },
                                            on: {
                                                "click": function($event) {
                                                    return _vm.launchFct(item.fct);
                                                }
                                            }
                                        }, [
                                            _c("span", {
                                                staticClass: "md-list-item-text"
                                            }, [
                                                _vm._v(_vm._s(item.title))
                                            ])
                                        ])
                                    ];
                                })
                            ], 2)
                        ], 1)
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            !_vm.hideDiffSettings ? _c("SpatialDiffSettings", {
                attrs: {
                    "archiData": _vm.archiData,
                    "buildingServerId": _vm.buildingServId,
                    "bimFileId": _vm.bimFileId,
                    "isRawDataGen": _vm.isRawDataGen,
                    "BIMGeocontextServId": _vm.BIMGeocontextServId
                },
                on: {
                    "back": function($event) {
                        _vm.hideDiffSettings = true;
                    }
                }
            }) : _vm._e(),
            _vm._v(" "),
            _c("md-dialog", {
                attrs: {
                    "md-active": _vm.showDialog
                },
                on: {
                    "update:mdActive": function($event) {
                        _vm.showDialog = $event;
                    },
                    "update:md-active": function($event) {
                        _vm.showDialog = $event;
                    }
                }
            }, [
                _c("md-dialog-title", [
                    _vm._v("Choose which bimFile to update")
                ]),
                _vm._v(" "),
                _c("md-dialog-content", [
                    _c("md-field", [
                        _c("md-select", {
                            attrs: {
                                "multiple": ""
                            },
                            model: {
                                value: _vm.selectedModelModal,
                                callback: function($$v) {
                                    _vm.selectedModelModal = $$v;
                                },
                                expression: "selectedModelModal"
                            }
                        }, _vm._l(_vm.bimfiles, function(bimFileName) {
                            return _c("md-option", {
                                key: bimFileName,
                                attrs: {
                                    "value": bimFileName
                                }
                            }, [
                                _vm._v(_vm._s(bimFileName))
                            ]);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-checkbox", {
                        attrs: {
                            "label": "update bimobjects name"
                        },
                        model: {
                            value: _vm.updateBimobjectsName,
                            callback: function($$v) {
                                _vm.updateBimobjectsName = $$v;
                            },
                            expression: "updateBimobjectsName"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-checkbox", {
                        attrs: {
                            "label": "update bimobjects dbid"
                        },
                        model: {
                            value: _vm.updateBimobjectsDbid,
                            callback: function($$v) {
                                _vm.updateBimobjectsDbid = $$v;
                            },
                            expression: "updateBimobjectsDbid"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-dialog-actions", [
                    _c("md-button", {
                        staticClass: "md-primary",
                        on: {
                            "click": function($event) {
                                _vm.showDialog = false;
                            }
                        }
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary",
                        on: {
                            "click": _vm.updateDbIdsConfirm
                        }
                    }, [
                        _vm._v("confirm")
                    ])
                ], 1)
            ], 1),
            _vm._v(" "),
            _vm.spin ? _c("v-progress-linear", {
                staticClass: "spinal-modal-progress-bar",
                staticStyle: {
                    "margin": "0"
                },
                attrs: {
                    "indeterminate": true,
                    "color": "primary"
                }
            }) : _vm._e(),
            _vm._v(" "),
            _c("md-snackbar", {
                attrs: {
                    "md-position": "center",
                    "md-active": _vm.showSnackbar,
                    "md-duration": _vm.durationSnakebar,
                    "md-persistent": ""
                },
                on: {
                    "update:mdActive": function($event) {
                        _vm.showSnackbar = $event;
                    },
                    "update:md-active": function($event) {
                        _vm.showSnackbar = $event;
                    }
                }
            }, [
                _c("span", [
                    _vm._v(_vm._s(_vm.msgSnackbar))
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.showSnackbar = false;
                        }
                    }
                }, [
                    _vm._v("close")
                ])
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4CJ1M":[function() {},{}],"gBQrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDef4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2550a426a6e9cf87");
    if (script.__esModule) script = script.default;
    script.render = require("767a9bbddfd07f99").render;
    script.staticRenderFns = require("767a9bbddfd07f99").staticRenderFns;
    script._scopeId = "data-v-193e4a";
    script.__cssModules = require("9d0f1833590e0c0b").default;
    require("6808993b12ec982").default(script);
    script.__scopeId = "data-v-193e4a";
    script.__file = "ProjectObjectInContext.vue";
};
initialize();
exports.default = script;

},{"2550a426a6e9cf87":"4DKQ1","767a9bbddfd07f99":"epc7F","9d0f1833590e0c0b":"iB28I","6808993b12ec982":"jdOdZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DKQ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _groupConfigVue = require("./groupConfig/GroupConfig.vue");
var _groupConfigVueDefault = parcelHelpers.interopDefault(_groupConfigVue);
var _selectedGroupVue = require("./SelectedGroup/SelectedGroup.vue");
var _selectedGroupVueDefault = parcelHelpers.interopDefault(_selectedGroupVue);
var scriptExports = {
    name: "ProjectObjectInContext",
    components: {
        GroupeConfig: (0, _groupConfigVueDefault.default),
        SelectedGroup: (0, _selectedGroupVueDefault.default)
    },
    data () {
        return {
            contextId: "",
            groupConfigs: [],
            selectedGroup: undefined,
            cleanCfg: true,
            progress: 100,
            errorMode: true,
            msgSnackbar: "",
            showSnackbar: false
        };
    },
    mounted () {},
    methods: {
        async addAGroupConfig (groupName) {
            const context = (0, _spinalSpatialReferential.getRealNode)(this.contextId);
            const cfgGroup = await (0, _spinalSpatialReferential.createConfigNodeAndProjGroup)(context, groupName);
            this.groupConfigs.push(cfgGroup);
        },
        async onselectedGroup (select) {
            this.progress = 0;
            try {
                await select.loadConfigNode();
                this.selectedGroup = select;
                this.progress = 100;
            } catch (error) {
                console.error(error);
                this.showSnackbar = true;
                this.msgSnackbar = error.message;
                this.progress = 100;
            }
        },
        async onSave (configUidToGens) {
            try {
                const context = (0, _spinalSpatialReferential.getRealNode)(this.contextId);
                if (!configUidToGens) configUidToGens = this.groupConfigs.map((it)=>it.uid);
                this.progress = 0;
                for(let idx = 0; idx < configUidToGens.length; idx++){
                    const group = this.getConfigByUid(configUidToGens[idx]);
                    if (!group) {
                        console.error(`${configUidToGens[idx]} skipped no config found with this uid`);
                        continue;
                    }
                    await group.saveToContext(context);
                    this.progress = configUidToGens.length / (idx + 1) * 100;
                }
                this.cleanCfg = true;
            } catch (error) {
                this.showSnackbar = true;
                this.msgSnackbar = error.message;
                console.error(error);
            } finally{
                this.progress = 100;
            }
        },
        getConfigByUid (configUidToGen) {
            for (const cfg of this.groupConfigs){
                if (cfg.uid === configUidToGen) return cfg;
            }
        },
        async generate (configUidToGens) {
            await this.onSave(configUidToGens);
            this.progress = 0;
            try {
                const roomRef = await (0, _spinalSpatialReferential.getRoomRefByFloor)();
                this.progress = 25;
                const floorsZData = await (0, _spinalSpatialReferential.getRefFloorZMinMax)(roomRef);
                const mergedRoomRef = (0, _spinalSpatialReferential.mergeRoomRef)(roomRef);
                const intersectRes = {
                    selection: [],
                    intersects: []
                };
                for(let idx = 0; idx < configUidToGens.length; idx++){
                    const configToGen = this.getConfigByUid(configUidToGens[idx]);
                    if (!configToGen) {
                        console.error(`${configUidToGens[idx]} skipped no config found with this uid`);
                        continue;
                    }
                    const intersectResTmp = await (0, _spinalSpatialReferential.getIntersects)(configToGen, mergedRoomRef);
                    // merge intersectRes
                    (0, _spinalSpatialReferential.mergeIntersectRes)(intersectRes, intersectResTmp);
                    this.progress = configUidToGens.length / (idx + 1) * 66;
                    console.log("raycasting %d% => %d/%d", configUidToGens.length / (idx + 1) * 100, idx + 1, configUidToGens.length);
                }
                console.log("raycasting", intersectRes);
                const cmdNotFounds = await (0, _spinalSpatialReferential.createCmdNotFound)(intersectRes);
                console.log("cmdNotFounds", cmdNotFounds);
                this.progress = 80;
                const cmdProject = await (0, _spinalSpatialReferential.createCmdProjection)(intersectRes.intersects, this.contextId, floorsZData);
                console.log("cmdProject", cmdProject);
                this.progress = 90;
                const cmd = cmdNotFounds.concat(cmdProject);
                const { node, context: contextCmd, data } = await (0, _spinalSpatialReferential.saveCmdsProjectionGeo)(cmd);
                (0, _spinalSpatialReferential.addNodeGraphService)(node);
                await (0, _spinalSpatialReferential.waitPathSendToHub)(data);
                console.log("done", cmd);
                spinal.spinalPanelManagerService.openPanel("CmdRunViewer", {
                    dataCmd: cmd,
                    node,
                    contextId: contextCmd.info.id.get()
                });
            } catch (error) {
                console.error(error);
            } finally{
                this.progress = 100;
            }
        },
        deleteGroup (uid) {
            const index = this.groupConfigs.findIndex((itm)=>itm.uid === uid);
            if (index !== -1) {
                const itm = this.groupConfigs[index];
                this.groupConfigs.splice(index, 1);
                const context = (0, _spinalSpatialReferential.getRealNode)(this.contextId);
                return (0, _spinalSpatialReferential.removeConfigFromContext)(context, itm.uid);
            }
        },
        async getConfig () {
            this.progress = 0;
            const context = (0, _spinalSpatialReferential.getRealNode)(this.contextId);
            this.groupConfigs = await (0, _spinalSpatialReferential.getProjectionConfig)(context);
            this.progress = 100;
        },
        async opened (contextId) {
            this.contextId = contextId;
            return this.getConfig();
        },
        removed () {},
        close () {},
        closeDialog () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","./groupConfig/GroupConfig.vue":"5gASF","./SelectedGroup/SelectedGroup.vue":"1gjOg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gASF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9f83a5ef0d15abc0");
    if (script.__esModule) script = script.default;
    script.render = require("3ed887e590c64141").render;
    script.staticRenderFns = require("3ed887e590c64141").staticRenderFns;
    script._scopeId = "data-v-c4e1ac";
    script.__cssModules = require("c544968f9be3d70d").default;
    require("19d3c78000f22dde").default(script);
    script.__scopeId = "data-v-c4e1ac";
    script.__file = "GroupConfig.vue";
};
initialize();
exports.default = script;

},{"9f83a5ef0d15abc0":"ei3nT","3ed887e590c64141":"fLHQk","c544968f9be3d70d":"8nMpF","19d3c78000f22dde":"Ofp4v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ei3nT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addAGroupConfigVue = require("./AddAGroupConfig.vue");
var _addAGroupConfigVueDefault = parcelHelpers.interopDefault(_addAGroupConfigVue);
var _groupConfigItemBtnVue = require("./GroupConfigItemBtn.vue");
var _groupConfigItemBtnVueDefault = parcelHelpers.interopDefault(_groupConfigItemBtnVue);
var scriptExports = {
    name: "groupConfig",
    components: {
        AddAGroupConfig: (0, _addAGroupConfigVueDefault.default),
        GroupConfigItemBtn: (0, _groupConfigItemBtnVueDefault.default)
    },
    props: [
        "groupConfigs"
    ],
    data () {
        return {
            show: true,
            selected: [],
            itmEdit: null,
            itemDelete: null
        };
    },
    computed: {
        showEditPrompt: {
            get () {
                return !!this.itmEdit;
            },
            set (value) {
                if (value === false) this.itmEdit = null;
            }
        },
        showConfirmDelete: {
            get () {
                return !!this.itemDelete;
            },
            set (value) {
                if (value === false) this.itemDelete = null;
            }
        }
    },
    methods: {
        countChild (groupConfig) {
            if (groupConfig.isLoaded === true) return "count : " + groupConfig.countChild();
            else return "";
        },
        addAGroupConfig (target) {
            this.$emit("addAGroupConfig", target);
        },
        generate () {
            this.$emit("generate", this.selected);
        },
        deleteGroup (uid) {
            this.$emit("deleteGroup", this.itemDelete.uid);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./AddAGroupConfig.vue":"b8hLr","./GroupConfigItemBtn.vue":"9NXrv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8hLr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1a978446825e4e25");
    if (script.__esModule) script = script.default;
    script.render = require("cef261b3c2623ca0").render;
    script.staticRenderFns = require("cef261b3c2623ca0").staticRenderFns;
    script._scopeId = "data-v-dd6bf7";
    require("39af4446494e8e95").default(script);
    script.__scopeId = "data-v-dd6bf7";
    script.__file = "AddAGroupConfig.vue";
};
initialize();
exports.default = script;

},{"1a978446825e4e25":"hAQOP","cef261b3c2623ca0":"9grUe","39af4446494e8e95":"5Ut1B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAQOP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "AddAGroupConfig",
    data () {
        return {
            groupName: "",
            show: false
        };
    },
    computed: {
        canConfirm () {
            return this.groupName.length === 0 || this.groupName.length >= 30;
        }
    },
    watch: {
        show () {
            if (this.show === false) this.groupName = "";
        }
    },
    methods: {
        onConfirm () {
            this.$emit("addAGroupConfig", this.groupName);
            this.show = false;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9grUe":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-dialog", {
        attrs: {
            "width": "500",
            "attach": "body"
        },
        scopedSlots: _vm._u([
            {
                key: "activator",
                fn: function(ref) {
                    var on = ref.on;
                    return [
                        _c("v-btn", _vm._g({
                            attrs: {
                                "color": "indigo",
                                "dark": "",
                                "small": "",
                                "fab": ""
                            }
                        }, on), [
                            _c("v-icon", {
                                attrs: {
                                    "dark": ""
                                }
                            }, [
                                _vm._v(" add ")
                            ])
                        ], 1)
                    ];
                }
            }
        ]),
        model: {
            value: _vm.show,
            callback: function($$v) {
                _vm.show = $$v;
            },
            expression: "show"
        }
    }, [
        _vm._v(" "),
        _c("v-card", [
            _c("v-card-title", {
                staticClass: "headline"
            }, [
                _vm._v(" Add group config ")
            ]),
            _vm._v(" "),
            _c("v-card-text", [
                _c("v-text-field", {
                    attrs: {
                        "counter": 30,
                        "label": "Group config name",
                        "required": ""
                    },
                    model: {
                        value: _vm.groupName,
                        callback: function($$v) {
                            _vm.groupName = $$v;
                        },
                        expression: "groupName"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-card-actions", [
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "red darken-1",
                        "flat": ""
                    },
                    on: {
                        "click": function($event) {
                            _vm.show = false;
                        }
                    }
                }, [
                    _vm._v(" Cancel ")
                ]),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "green darken-1",
                        "flat": "",
                        "disabled": _vm.canConfirm
                    },
                    on: {
                        "click": _vm.onConfirm
                    }
                }, [
                    _vm._v("\n        Confirm\n      ")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5Ut1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NXrv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a25254dfb8fb5593");
    if (script.__esModule) script = script.default;
    script.render = require("73de4440da56012e").render;
    script.staticRenderFns = require("73de4440da56012e").staticRenderFns;
    script._scopeId = "data-v-63935e";
    require("c84d2ce81a049bdc").default(script);
    script.__scopeId = "data-v-63935e";
    script.__file = "GroupConfigItemBtn.vue";
};
initialize();
exports.default = script;

},{"a25254dfb8fb5593":"2ByCC","73de4440da56012e":"dYssP","c84d2ce81a049bdc":"jUzrc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ByCC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "GroupConfigItemBtn",
    props: {
        uid: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            fab: false
        };
    },
    computed: {
        openOrClose () {
            return this.fab ? "Close menu" : "Open  menu";
        }
    },
    methods: {
        callEvent (eventBtn) {
            this.$emit(eventBtn, this.uid);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYssP":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-speed-dial", {
        attrs: {
            "direction": "left",
            "open-on-hover": true,
            "transition": "slide-x-reverse-transition"
        },
        scopedSlots: _vm._u([
            {
                key: "activator",
                fn: function() {
                    return [
                        _c("v-btn", {
                            directives: [
                                {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: _vm.openOrClose,
                                    expression: "openOrClose"
                                }
                            ],
                            attrs: {
                                "color": "blue darken-2",
                                "small": "",
                                "dark": "",
                                "fab": ""
                            },
                            on: {
                                "click": function($event) {
                                    $event.stopPropagation();
                                    _vm.fab = !_vm.fab;
                                }
                            },
                            model: {
                                value: _vm.fab,
                                callback: function($$v) {
                                    _vm.fab = $$v;
                                },
                                expression: "fab"
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("more_vert")
                            ]),
                            _vm._v(" "),
                            _c("v-icon", [
                                _vm._v("close")
                            ])
                        ], 1)
                    ];
                },
                proxy: true
            }
        ]),
        model: {
            value: _vm.fab,
            callback: function($$v) {
                _vm.fab = $$v;
            },
            expression: "fab"
        }
    }, [
        _vm._v(" "),
        _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Edit group",
                    expression: "'Edit group'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "orange"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("showEdit");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("edit")
            ])
        ], 1),
        _vm._v(" "),
        _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Delete group",
                    expression: "'Delete group'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "red"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("deleteGroup");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("delete")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jUzrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fLHQk":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "geolocate-group-config-container"
    }, [
        _c("v-toolbar", {
            staticClass: "geolocate-group-config-header",
            attrs: {
                "color": "black",
                "dark": "",
                "dense": ""
            }
        }, [
            _c("v-spacer"),
            _vm._v(" "),
            _c("AddAGroupConfig", {
                on: {
                    "addAGroupConfig": _vm.addAGroupConfig
                }
            }),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": "",
                    "round": "",
                    "color": "warning"
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("save");
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v("save")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": "",
                    "round": "",
                    "color": "success",
                    "disabled": _vm.selected.length === 0
                },
                on: {
                    "click": _vm.generate
                }
            }, [
                _c("v-icon", [
                    _vm._v("check")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "geolocate-group-config-main"
        }, [
            _c("md-card", {
                staticClass: "geolocate-group-config-card"
            }, [
                _c("div", {
                    staticClass: "geolocate-group-config-card-content spinal-scrollbar"
                }, [
                    _c("md-list", [
                        _vm.groupConfigs.length === 0 ? _c("md-list-item", [
                            _c("span", {
                                staticClass: "md-list-item-text",
                                staticStyle: {
                                    "white-space": "normal"
                                }
                            }, [
                                _vm._v('\n              No Items in list, add items with the "+" button\n            ')
                            ])
                        ]) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.groupConfigs, function(groupConfig) {
                            return _c("md-list-item", {
                                key: groupConfig.uid,
                                on: {
                                    "click": function($event) {
                                        return _vm.$emit("selectGroup", groupConfig);
                                    }
                                }
                            }, [
                                _c("md-checkbox", {
                                    staticClass: "geolocate-group-config-card-item-checkbox",
                                    attrs: {
                                        "value": groupConfig.uid
                                    },
                                    model: {
                                        value: _vm.selected,
                                        callback: function($$v) {
                                            _vm.selected = $$v;
                                        },
                                        expression: "selected"
                                    }
                                }),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "md-list-item-text"
                                }, [
                                    _c("span", [
                                        _vm._v(_vm._s(groupConfig.name))
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [
                                        _vm._v(_vm._s(_vm.countChild(groupConfig)))
                                    ])
                                ]),
                                _vm._v(" "),
                                _c("groupConfigItemBtn", {
                                    attrs: {
                                        "uid": groupConfig.uid
                                    },
                                    on: {
                                        "deleteGroup": function($event) {
                                            _vm.itemDelete = groupConfig;
                                        },
                                        "showEdit": function($event) {
                                            _vm.itmEdit = groupConfig;
                                        }
                                    }
                                }),
                                _vm._v(" "),
                                groupConfig.progress != 100 ? _c("v-progress-linear", {
                                    staticClass: "geolocate-group-config-card-item-progressbar",
                                    model: {
                                        value: groupConfig.progress,
                                        callback: function($$v) {
                                            _vm.$set(groupConfig, "progress", $$v);
                                        },
                                        expression: "groupConfig.progress"
                                    }
                                }) : _vm._e()
                            ], 1);
                        })
                    ], 2)
                ], 1)
            ])
        ], 1),
        _vm._v(" "),
        _vm.itemDelete ? _c("md-dialog-confirm", {
            attrs: {
                "md-active": _vm.showConfirmDelete,
                "md-title": "Confirm delete",
                "md-confirm-text": "Confirm",
                "md-cancel-text": "Cancel"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.showConfirmDelete = $event;
                },
                "update:md-active": function($event) {
                    _vm.showConfirmDelete = $event;
                },
                "md-cancel": function($event) {
                    _vm.showConfirmDelete = false;
                },
                "md-confirm": _vm.deleteGroup
            }
        }) : _vm._e(),
        _vm._v(" "),
        _vm.itmEdit ? _c("md-dialog-prompt", {
            attrs: {
                "md-active": _vm.showEditPrompt,
                "md-title": "Edit Name",
                "md-input-maxlength": "30",
                "md-input-placeholder": "name...",
                "md-confirm-text": "Edit"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.showEditPrompt = $event;
                },
                "update:md-active": function($event) {
                    _vm.showEditPrompt = $event;
                },
                "md-confirm": function($event) {
                    return _vm.$emit("savableCfg");
                }
            },
            model: {
                value: _vm.itmEdit.name,
                callback: function($$v) {
                    _vm.$set(_vm.itmEdit, "name", $$v);
                },
                expression: "itmEdit.name"
            }
        }) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8nMpF":[function() {},{}],"Ofp4v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gjOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1a02fdd35a3865b1");
    if (script.__esModule) script = script.default;
    script.render = require("fb88a14bfe643078").render;
    script.staticRenderFns = require("fb88a14bfe643078").staticRenderFns;
    script._scopeId = "data-v-28cc98";
    script.__cssModules = require("9a114330b3c17ae0").default;
    require("793cb238d3286a53").default(script);
    script.__scopeId = "data-v-28cc98";
    script.__file = "SelectedGroup.vue";
};
initialize();
exports.default = script;

},{"1a02fdd35a3865b1":"eqdRm","fb88a14bfe643078":"4c32k","9a114330b3c17ae0":"dE25S","793cb238d3286a53":"2kYXB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqdRm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addAGroupVue = require("./AddAGroup.vue");
var _addAGroupVueDefault = parcelHelpers.interopDefault(_addAGroupVue);
var _bimGroupsListHeaderBouttonsVue = require("./BimGroupsListHeaderBouttons.vue");
var _bimGroupsListHeaderBouttonsVueDefault = parcelHelpers.interopDefault(_bimGroupsListHeaderBouttonsVue);
var _bimGroupsItemContentVue = require("./BimGroupsItemContent.vue");
var _bimGroupsItemContentVueDefault = parcelHelpers.interopDefault(_bimGroupsItemContentVue);
var _bimGroupsItemEditVue = require("./BimGroupsItemEdit.vue");
var _bimGroupsItemEditVueDefault = parcelHelpers.interopDefault(_bimGroupsItemEditVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "SelectedGroup",
    props: [
        "name",
        "uid",
        "list",
        "canSave"
    ],
    components: {
        AddAGroup: (0, _addAGroupVueDefault.default),
        BimGroupsListHeaderBouttons: (0, _bimGroupsListHeaderBouttonsVueDefault.default),
        BimGroupsItemContent: (0, _bimGroupsItemContentVueDefault.default),
        BimGroupsItemEdit: (0, _bimGroupsItemEditVueDefault.default)
    },
    data () {
        return {
            itemToEdit: null
        };
    },
    computed: {},
    methods: {
        up (idx) {
            const itm = this.list[idx];
            this.list.splice(idx, 1);
            this.list.splice(idx - 1, 0, itm);
            this.$emit("savableCfg");
        },
        down (idx) {
            const itm = this.list[idx];
            this.list.splice(idx, 1);
            this.list.splice(idx + 1, 0, itm);
            this.$emit("savableCfg");
        },
        canUp (idx) {
            return idx === 0;
        },
        canDown (idx) {
            return idx === this.list.length - 1;
        },
        generate () {
            this.$emit("generate", [
                this.uid
            ]);
        },
        addSelection () {
            this.$emit("savableCfg");
            return (0, _spinalSpatialReferential.addSelectionToList)(this.list, (0, _spinalSpatialReferential.getViewer)());
        },
        addAGroup (groupeName) {
            this.$emit("savableCfg");
            (0, _spinalSpatialReferential.addToProjectionGroup)(this.list, groupeName);
        },
        isProjectionGroup: (0, _spinalSpatialReferential.isProjectionGroup),
        addViewerSelection (idx) {
            this.$emit("savableCfg");
            return (0, _spinalSpatialReferential.addViewerSelection)(idx, this.list, (0, _spinalSpatialReferential.getViewer)());
        },
        showInViewer (index, itm) {
            const item = this.list[index];
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            if ((0, _spinalSpatialReferential.isProjectionGroup)(item)) {
                if (typeof itm === "undefined") item.selectAll(viewer);
                else item.selectItem(itm, viewer);
            } else item.selectItem(viewer);
        },
        deleteItemIngroup (index, itm) {
            const item = this.list[index];
            if ((0, _spinalSpatialReferential.isProjectionGroup)(item)) {
                this.$emit("savableCfg");
                item.deleteItem(itm);
            }
        },
        deleteGroup (index) {
            this.$emit("savableCfg");
            this.list.splice(index, 1);
        },
        showEdit (index) {
            const item = this.list[index];
            this.itemToEdit = item;
        },
        onCloseEdit (editItem) {
            if (editItem) {
                for (const item of this.list)if (item.uid === editItem.uid) {
                    item.name = editItem.name;
                    item.offset.r = editItem.offset.r;
                    item.offset.t = editItem.offset.t;
                    item.offset.z = editItem.offset.z;
                    this.$emit("savableCfg");
                    break;
                }
            }
            this.itemToEdit = null;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./AddAGroup.vue":"9IzK8","./BimGroupsListHeaderBouttons.vue":"csfpI","./BimGroupsItemContent.vue":"fVTng","./BimGroupsItemEdit.vue":"fXaOQ","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IzK8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("478bb6a861d0a51d");
    if (script.__esModule) script = script.default;
    script.render = require("dc2ce155e7099b44").render;
    script.staticRenderFns = require("dc2ce155e7099b44").staticRenderFns;
    script._scopeId = "data-v-1802bc";
    script.__cssModules = require("d4cffe5b050e49d2").default;
    require("95942f7ac33d1af0").default(script);
    script.__scopeId = "data-v-1802bc";
    script.__file = "AddAGroup.vue";
};
initialize();
exports.default = script;

},{"478bb6a861d0a51d":"eW9xx","dc2ce155e7099b44":"9Dha5","d4cffe5b050e49d2":"iwTeY","95942f7ac33d1af0":"4k0WQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eW9xx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "AddAGroup",
    props: {},
    data () {
        return {
            groupName: "",
            show: false,
            radioSelection: "3d"
        };
    },
    computed: {
        canConfirm () {
            if (this.radioSelection === "3d") return false;
            return this.groupName.length === 0 || this.groupName.length >= 30;
        }
    },
    watch: {
        show () {
            if (this.show === false) this.groupName = "";
        }
    },
    methods: {
        onClick () {
            this.$refs["dialog-add-a-group"].showModal();
        },
        onConfirm () {
            if (this.radioSelection === "3d") this.$emit("addSelection");
            else this.$emit("addAGroup", this.groupName);
            this.show = false;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Dha5":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-dialog", {
        attrs: {
            "attach": "body"
        },
        scopedSlots: _vm._u([
            {
                key: "activator",
                fn: function(ref) {
                    var on = ref.on;
                    return [
                        _c("v-btn", _vm._g({
                            attrs: {
                                "color": "indigo",
                                "dark": "",
                                "small": "",
                                "fab": ""
                            }
                        }, on), [
                            _c("v-icon", {
                                attrs: {
                                    "dark": ""
                                }
                            }, [
                                _vm._v(" add ")
                            ])
                        ], 1)
                    ];
                }
            }
        ]),
        model: {
            value: _vm.show,
            callback: function($$v) {
                _vm.show = $$v;
            },
            expression: "show"
        }
    }, [
        _vm._v(" "),
        _c("v-card", [
            _c("v-card-title", {
                staticClass: "headline"
            }, [
                _vm._v(" Add Selection or a Group ")
            ]),
            _vm._v(" "),
            _c("v-card-text", [
                _c("v-radio-group", {
                    model: {
                        value: _vm.radioSelection,
                        callback: function($$v) {
                            _vm.radioSelection = $$v;
                        },
                        expression: "radioSelection"
                    }
                }, [
                    _c("v-radio", {
                        attrs: {
                            "label": "Add Selection from 3D Model",
                            "value": "3d"
                        }
                    }),
                    _vm._v(" "),
                    _c("v-radio", {
                        attrs: {
                            "label": "Add a Group",
                            "value": "group"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _vm.radioSelection === "group" ? _c("v-text-field", {
                    attrs: {
                        "counter": 30,
                        "label": "Group name",
                        "required": ""
                    },
                    model: {
                        value: _vm.groupName,
                        callback: function($$v) {
                            _vm.groupName = $$v;
                        },
                        expression: "groupName"
                    }
                }) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c("v-card-actions", [
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "red darken-1",
                        "flat": ""
                    },
                    on: {
                        "click": function($event) {
                            _vm.show = false;
                        }
                    }
                }, [
                    _vm._v(" Cancel ")
                ]),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "color": "green darken-1",
                        "flat": "",
                        "disabled": _vm.canConfirm
                    },
                    on: {
                        "click": _vm.onConfirm
                    }
                }, [
                    _vm._v("\n        Confirm\n      ")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iwTeY":[function() {},{}],"4k0WQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"csfpI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("df4fb235ac079ce0");
    if (script.__esModule) script = script.default;
    script.render = require("e091960448e77787").render;
    script.staticRenderFns = require("e091960448e77787").staticRenderFns;
    script._scopeId = "data-v-9cfe97";
    require("102b1524cac8b1f6").default(script);
    script.__scopeId = "data-v-9cfe97";
    script.__file = "BimGroupsListHeaderBouttons.vue";
};
initialize();
exports.default = script;

},{"df4fb235ac079ce0":"hYc2q","e091960448e77787":"4W3Vg","102b1524cac8b1f6":"h2DA6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYc2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "BimGroupsListHeaderBouttons",
    props: {
        index: {
            required: true,
            type: Number
        },
        isItemGroup: {
            required: false,
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            fab: false
        };
    },
    computed: {
        openOrClose () {
            return this.fab ? "Close menu" : "Open  menu";
        }
    },
    methods: {
        callEvent (eventBtn) {
            this.$emit(eventBtn, this.index);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4W3Vg":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-speed-dial", {
        attrs: {
            "direction": "left",
            "open-on-hover": true,
            "transition": "slide-x-reverse-transition"
        },
        scopedSlots: _vm._u([
            {
                key: "activator",
                fn: function() {
                    return [
                        _c("v-btn", {
                            directives: [
                                {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: _vm.openOrClose,
                                    expression: "openOrClose"
                                }
                            ],
                            attrs: {
                                "color": "blue darken-2",
                                "small": "",
                                "dark": "",
                                "fab": ""
                            },
                            on: {
                                "click": function($event) {
                                    $event.stopPropagation();
                                    _vm.fab = !_vm.fab;
                                }
                            },
                            model: {
                                value: _vm.fab,
                                callback: function($$v) {
                                    _vm.fab = $$v;
                                },
                                expression: "fab"
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("more_vert")
                            ]),
                            _vm._v(" "),
                            _c("v-icon", [
                                _vm._v("close")
                            ])
                        ], 1)
                    ];
                },
                proxy: true
            }
        ]),
        model: {
            value: _vm.fab,
            callback: function($$v) {
                _vm.fab = $$v;
            },
            expression: "fab"
        }
    }, [
        _vm._v(" "),
        _vm.isItemGroup ? _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Add viewer selections to group",
                    expression: "'Add viewer selections to group'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "indigo"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("addViewerSelection");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("add")
            ])
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Show in viewer",
                    expression: "'Show in viewer'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "green"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("showInViewer");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("remove_red_eye")
            ])
        ], 1),
        _vm._v(" "),
        _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Edit group",
                    expression: "'Edit group'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "orange"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("showEdit");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("edit")
            ])
        ], 1),
        _vm._v(" "),
        _c("v-btn", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "Delete group",
                    expression: "'Delete group'"
                }
            ],
            attrs: {
                "fab": "",
                "dark": "",
                "small": "",
                "color": "red"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.callEvent("deleteGroup");
                }
            }
        }, [
            _c("v-icon", [
                _vm._v("delete")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"h2DA6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVTng":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ecb8e10285d24c43");
    if (script.__esModule) script = script.default;
    script.render = require("2433d421089c2f9b").render;
    script.staticRenderFns = require("2433d421089c2f9b").staticRenderFns;
    script._scopeId = "data-v-04e0b0";
    script.__cssModules = require("a15c2408aca50823").default;
    require("7b3e9e68d9f2feb").default(script);
    script.__scopeId = "data-v-04e0b0";
    script.__file = "BimGroupsItemContent.vue";
};
initialize();
exports.default = script;

},{"ecb8e10285d24c43":"bmDOI","2433d421089c2f9b":"gTpma","a15c2408aca50823":"9TibD","7b3e9e68d9f2feb":"8kwcR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmDOI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function itemValidator(item) {
    return Array.isArray(item);
}
var scriptExports = {
    name: "BimGroupsItemContent",
    props: {
        index: {
            required: true,
            type: Number
        },
        item: {
            required: true,
            type: Array,
            validator: itemValidator
        }
    },
    data () {
        return {
            page: 1,
            nbPerPage: 10
        };
    },
    computed: {
        pageData () {
            const idx = (this.page - 1) * this.nbPerPage;
            return this.item.slice(idx, idx + this.nbPerPage);
        },
        totalPage () {
            return Math.ceil(this.item.length / this.nbPerPage);
        }
    },
    methods: {
        seeItem (item) {
            this.$emit("seeItem", this.index, item);
        },
        deleteItem (item) {
            this.$emit("deleteItem", this.index, item);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTpma":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "spinal-bim-groups-item-content"
    }, [
        _c("v-list", {
            staticClass: "spinal-list-scrollbar",
            attrs: {
                "dense": ""
            }
        }, [
            _vm._l(_vm.pageData, function(itm) {
                return _c("v-list-tile", {
                    key: itm.id,
                    staticClass: "dbid-list-item"
                }, [
                    _c("v-list-tile-content", [
                        _c("v-list-tile-title", [
                            _vm._v(_vm._s(itm.name))
                        ]),
                        _vm._v(" "),
                        _c("v-list-tile-sub-title", [
                            _vm._v(_vm._s(itm.dbId))
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-list-tile-action", {
                        staticClass: "dbid-list-item-action-btn"
                    }, [
                        _c("v-btn", {
                            attrs: {
                                "icon": "",
                                "ripple": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.deleteItem(itm);
                                }
                            }
                        }, [
                            _c("v-icon", {
                                attrs: {
                                    "color": "red"
                                }
                            }, [
                                _vm._v(" clear ")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "icon": "",
                                "ripple": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.seeItem(itm);
                                }
                            }
                        }, [
                            _c("v-icon", {
                                attrs: {
                                    "color": "green"
                                }
                            }, [
                                _vm._v(" visibility ")
                            ])
                        ], 1)
                    ], 1)
                ], 1);
            }),
            _vm._v(" "),
            _vm.item.length === 0 ? _c("v-list-tile", [
                _c("v-list-tile-content", [
                    _c("v-list-tile-title", [
                        _vm._v("No Item in this group")
                    ])
                ], 1)
            ], 1) : _vm._e()
        ], 2),
        _vm._v(" "),
        _vm.totalPage > 1 ? _c("v-pagination", {
            attrs: {
                "length": _vm.totalPage
            },
            model: {
                value: _vm.page,
                callback: function($$v) {
                    _vm.page = $$v;
                },
                expression: "page"
            }
        }) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9TibD":[function() {},{}],"8kwcR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXaOQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("663ae523fb20d144");
    if (script.__esModule) script = script.default;
    script.render = require("25986ec6b4121bc").render;
    script.staticRenderFns = require("25986ec6b4121bc").staticRenderFns;
    script._scopeId = "data-v-5a534c";
    script.__cssModules = require("d9b0c33c97431722").default;
    require("5c1cbb1910592beb").default(script);
    script.__scopeId = "data-v-5a534c";
    script.__file = "BimGroupsItemEdit.vue";
};
initialize();
exports.default = script;

},{"663ae523fb20d144":"aIOp1","25986ec6b4121bc":"1DvCi","d9b0c33c97431722":"evFIX","5c1cbb1910592beb":"lHYEH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIOp1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bimGroupsItemEditOffsetVue = require("./BimGroupsItemEditOffset.vue");
var _bimGroupsItemEditOffsetVueDefault = parcelHelpers.interopDefault(_bimGroupsItemEditOffsetVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
function itemToEditValidator(item) {
    return item === null || item.offset && typeof item.offset.r === "number" && typeof item.offset.t === "number" && typeof item.offset.z === "number";
}
var scriptExports = {
    name: "BimGroupsItemEdit",
    components: {
        BimGroupsItemEditOffset: (0, _bimGroupsItemEditOffsetVueDefault.default)
    },
    props: {
        itemToEdit: {
            required: true,
            validator: itemToEditValidator
        }
    },
    data () {
        return {
            name: "",
            offset: {
                r: 0,
                t: 0,
                z: 0
            },
            uid: 0,
            previewMode: 0
        };
    },
    conputed: {
        disabledPreview () {
            if (this.itemToEdit && Array.isArray(this.itemToEdit.data)) return this.itemToEdit.data.length === 0;
            return false;
        }
    },
    watch: {
        itemToEdit () {
            if (this.itemToEdit) {
                this.name = this.itemToEdit.name;
                this.offset.r = this.itemToEdit.offset.r;
                this.offset.t = this.itemToEdit.offset.t;
                this.offset.z = this.itemToEdit.offset.z;
                this.uid = this.itemToEdit.uid;
                this.previewMode = 0;
            }
        }
    },
    mounted () {},
    methods: {
        updateOffset (offset) {
            console.log(offset);
            if (isNaN(offset.r) || isNaN(offset.t) || isNaN(offset.z)) return;
            this.offset.r = offset.r;
            this.offset.t = offset.t;
            this.offset.z = offset.z;
            this.preview();
        },
        onChangePreview (mode) {
            this.previewMode = mode;
            this.preview();
        },
        preview () {
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            (0, _spinalSpatialReferential.previewItem)(this.itemToEdit, this.offset, this.previewMode, viewer);
        },
        onCancel () {
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            (0, _spinalSpatialReferential.stopPreview)(viewer);
            this.$emit("close");
        },
        onValid () {
            const viewer = (0, _spinalSpatialReferential.getViewer)();
            (0, _spinalSpatialReferential.stopPreview)(viewer);
            this.$emit("close", {
                name: this.name,
                offset: this.offset,
                uid: this.uid
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./BimGroupsItemEditOffset.vue":"3Fsrq","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Fsrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e8a66f761fac7d5");
    if (script.__esModule) script = script.default;
    script.render = require("92c87ad29a40e2b3").render;
    script.staticRenderFns = require("92c87ad29a40e2b3").staticRenderFns;
    script._scopeId = "data-v-8d1d12";
    script.__cssModules = require("e8d230a1be906695").default;
    require("8076d7254d7a949f").default(script);
    script.__scopeId = "data-v-8d1d12";
    script.__file = "BimGroupsItemEditOffset.vue";
};
initialize();
exports.default = script;

},{"e8a66f761fac7d5":"fSDdv","92c87ad29a40e2b3":"bq2s5","e8d230a1be906695":"eoml5","8076d7254d7a949f":"i0Wds","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSDdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lodashThrottle = require("lodash.throttle");
var _lodashThrottleDefault = parcelHelpers.interopDefault(_lodashThrottle);
var _spinalSpatialReferential = require("spinal-spatial-referential");
function rtzValidator(item) {
    return typeof item.r === "number" && typeof item.t === "number" && typeof item.z === "number";
}
var scriptExports = {
    name: "BimGroupsItemEditOffset",
    props: {
        offset: {
            required: true,
            type: Object,
            validator: rtzValidator
        },
        disabledPreview: {
            required: true,
            type: Boolean,
            default: ()=>false
        }
    },
    data () {
        return {
            toggleView: 0,
            tmp: {
                r: 0,
                t: 0,
                z: 0
            }
        };
    },
    computed: {
        color: {
            get () {
                return (0, _spinalSpatialReferential.getColorPreview)();
            },
            set (value) {
                (0, _spinalSpatialReferential.setColorPreview)(value);
            }
        },
        _r: {
            get () {
                return this.offset.r;
            },
            set (value) {
                this.tmp.r = value;
                return this.onChangeTrottle();
            }
        },
        _t: {
            get () {
                return this.offset.t;
            },
            set (value) {
                this.tmp.t = value;
                return this.onChangeTrottle();
            }
        },
        _z: {
            get () {
                return this.offset.z;
            },
            set (value) {
                this.tmp.z = value;
                return this.onChangeTrottle();
            }
        }
    },
    watch: {
        offset () {
            this.tmp.r = this.offset.r;
            this.tmp.t = this.offset.t;
            this.tmp.z = this.offset.z;
        }
    },
    mounted () {
        this.onChangeTrottle = (0, _lodashThrottleDefault.default)(this.onChange.bind(this), 500, {
            leading: false
        });
    },
    methods: {
        onChange () {
            this.$emit("onChange", {
                r: parseFloat(this.tmp.r),
                t: parseInt(this.tmp.t, 10),
                z: parseFloat(this.tmp.z)
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"lodash.throttle":"bGJVT","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bq2s5":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-container", {
        staticClass: "bim-groups-item-edit-offset",
        attrs: {
            "fluid": "",
            "grid-list-lg": ""
        }
    }, [
        _c("v-layout", {
            attrs: {
                "col": "",
                "align-center": "",
                "justify-center": "",
                "align-content-center": "",
                "wrap": ""
            }
        }, [
            _c("input", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "Preview color",
                        expression: "'Preview color'"
                    },
                    {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.color,
                        expression: "color"
                    }
                ],
                staticClass: "bim-groups-item-edit-offset-color",
                attrs: {
                    "type": "color",
                    "name": "color"
                },
                domProps: {
                    "value": _vm.color
                },
                on: {
                    "input": function($event) {
                        if ($event.target.composing) return;
                        _vm.color = $event.target.value;
                    }
                }
            }),
            _vm._v(" "),
            _c("v-btn-toggle", {
                attrs: {
                    "mandatory": ""
                },
                model: {
                    value: _vm.toggleView,
                    callback: function($$v) {
                        _vm.toggleView = $$v;
                    },
                    expression: "toggleView"
                }
            }, [
                _c("v-btn", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "Disable preview",
                            expression: "'Disable preview'"
                        }
                    ],
                    attrs: {
                        "disabled": _vm.disabledPreview,
                        "flat": ""
                    },
                    on: {
                        "click": function($event) {
                            return _vm.$emit("onChangePreview", 0);
                        }
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("visibility_off")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-btn", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "Preview only the 1st Object",
                            expression: "'Preview only the 1st Object'"
                        }
                    ],
                    attrs: {
                        "flat": "",
                        "disabled": _vm.disabledPreview
                    },
                    on: {
                        "click": function($event) {
                            return _vm.$emit("onChangePreview", 1);
                        }
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("hdr_strong")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-btn", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "Preview all Objects",
                            expression: "'Preview all Objects'"
                        }
                    ],
                    attrs: {
                        "flat": "",
                        "disabled": _vm.disabledPreview
                    },
                    on: {
                        "click": function($event) {
                            return _vm.$emit("onChangePreview", 2);
                        }
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("grain")
                    ])
                ], 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("v-layout", {
            attrs: {
                "row": "",
                "wrap": ""
            }
        }, [
            _c("v-flex", {
                attrs: {
                    "xs9": ""
                }
            }, [
                _c("v-slider", {
                    attrs: {
                        "step": 0.1,
                        "max": 50,
                        "min": -50,
                        "label": "R"
                    },
                    model: {
                        value: _vm._r,
                        callback: function($$v) {
                            _vm._r = $$v;
                        },
                        expression: "_r"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "xs3": ""
                }
            }, [
                _c("v-text-field", {
                    staticClass: "mt-0",
                    attrs: {
                        "type": "number"
                    },
                    model: {
                        value: _vm._r,
                        callback: function($$v) {
                            _vm._r = $$v;
                        },
                        expression: "_r"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "xs9": ""
                }
            }, [
                _c("v-slider", {
                    attrs: {
                        "step": 1,
                        "max": 360,
                        "label": "T"
                    },
                    model: {
                        value: _vm._t,
                        callback: function($$v) {
                            _vm._t = $$v;
                        },
                        expression: "_t"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "xs3": ""
                }
            }, [
                _c("v-text-field", {
                    staticClass: "mt-0",
                    attrs: {
                        "type": "number"
                    },
                    model: {
                        value: _vm._t,
                        callback: function($$v) {
                            _vm._t = $$v;
                        },
                        expression: "_t"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "xs9": ""
                }
            }, [
                _c("v-slider", {
                    attrs: {
                        "step": 0.1,
                        "max": 50,
                        "min": -50,
                        "label": "Z"
                    },
                    model: {
                        value: _vm._z,
                        callback: function($$v) {
                            _vm._z = $$v;
                        },
                        expression: "_z"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", {
                attrs: {
                    "xs3": ""
                }
            }, [
                _c("v-text-field", {
                    staticClass: "mt-0",
                    attrs: {
                        "type": "number"
                    },
                    model: {
                        value: _vm._z,
                        callback: function($$v) {
                            _vm._z = $$v;
                        },
                        expression: "_z"
                    }
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eoml5":[function() {},{}],"i0Wds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1DvCi":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("transition", {
        attrs: {
            "name": "bim-groups-item-edit-transi"
        }
    }, [
        _vm.itemToEdit !== null ? _c("div", {
            staticClass: "bim-groups-item-edit"
        }, [
            _c("v-toolbar", {
                attrs: {
                    "card": "",
                    "color": "black",
                    "dark": ""
                }
            }, [
                _c("v-toolbar-title", [
                    _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "Cancel",
                            expression: "'Cancel'"
                        }
                    ],
                    attrs: {
                        "dark": "",
                        "fab": "",
                        "small": "",
                        "color": "red darken-2"
                    },
                    on: {
                        "click": _vm.onCancel
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("cancel")
                    ])
                ], 1),
                _vm._v(" "),
                _c("v-btn", {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "Save",
                            expression: "'Save'"
                        }
                    ],
                    attrs: {
                        "dark": "",
                        "fab": "",
                        "small": "",
                        "color": "blue darken-2"
                    },
                    on: {
                        "click": _vm.onValid
                    }
                }, [
                    _c("v-icon", [
                        _vm._v("done")
                    ])
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("v-card", {
                staticClass: "bim-groups-item-edit-container spinal-scrollbar"
            }, [
                _c("v-card-text", [
                    _c("div", {
                        staticClass: "bim-groups-edit-name"
                    }, [
                        _c("v-text-field", {
                            attrs: {
                                "label": "Name"
                            },
                            model: {
                                value: _vm.name,
                                callback: function($$v) {
                                    _vm.name = $$v;
                                },
                                expression: "name"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-expansion-panel", {
                        staticClass: "bim-groups-edit-content"
                    }, [
                        _c("v-expansion-panel-content", {
                            scopedSlots: _vm._u([
                                {
                                    key: "header",
                                    fn: function() {
                                        return [
                                            _c("div", [
                                                _vm._v("Edit items' calculation point")
                                            ])
                                        ];
                                    },
                                    proxy: true
                                }
                            ], null, false, 1079453910)
                        }, [
                            _vm._v(" "),
                            _c("v-card", [
                                _c("v-card-text", [
                                    _c("BimGroupsItemEditOffset", {
                                        attrs: {
                                            "offset": _vm.offset,
                                            "disabled-preview": _vm.disabledPreview,
                                            "mode": _vm.previewMode
                                        },
                                        on: {
                                            "onChange": _vm.updateOffset,
                                            "onChangePreview": _vm.onChangePreview
                                        }
                                    })
                                ], 1)
                            ], 1)
                        ], 1)
                    ], 1)
                ], 1)
            ], 1)
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"evFIX":[function() {},{}],"lHYEH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c32k":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "geolocate-selected-groupe-container"
    }, [
        _c("v-toolbar", {
            staticClass: "geolocate-selected-groupe-header",
            attrs: {
                "color": "black",
                "dark": "",
                "dense": ""
            }
        }, [
            _c("v-btn", {
                attrs: {
                    "icon": ""
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("back");
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v("arrow_back")
                ])
            ], 1),
            _vm._v("\n    " + _vm._s(_vm.name) + "\n    "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": "",
                    "round": "",
                    "color": "warning",
                    "disabled": _vm.canSave
                },
                on: {
                    "click": function($event) {
                        return _vm.$emit("save", [
                            _vm.uid
                        ]);
                    }
                }
            }, [
                _c("v-icon", [
                    _vm._v("save")
                ])
            ], 1),
            _vm._v(" "),
            _c("AddAGroup", {
                on: {
                    "addAGroup": _vm.addAGroup,
                    "addSelection": _vm.addSelection
                }
            }),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": "",
                    "disabled": _vm.list.length == 0,
                    "color": "success"
                },
                on: {
                    "click": _vm.generate
                }
            }, [
                _c("v-icon", [
                    _vm._v("check")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "geolocate-selected-groupe-main"
        }, [
            _c("md-card", {
                staticClass: "geolocate-groupe-card"
            }, [
                _c("div", {
                    staticClass: "geolocate-groupe-card-content spinal-scrollbar"
                }, [
                    _c("v-list", {
                        staticClass: "spinal-project-item-main-list"
                    }, [
                        _vm.list.length === 0 ? _c("v-list-tile", [
                            _c("v-list-tile-content", [
                                _vm._v('\n              No Items in list, add items with the "+" button\n            ')
                            ])
                        ], 1) : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.list, function(item, i) {
                            return [
                                _vm.isProjectionGroup(item) ? _c("v-list-group", {
                                    key: item.uid,
                                    staticClass: "spinal-project-item-group-item",
                                    attrs: {
                                        "no-action": ""
                                    },
                                    scopedSlots: _vm._u([
                                        {
                                            key: "activator",
                                            fn: function() {
                                                return [
                                                    _c("v-list-tile", {
                                                        staticClass: "spinal-project-item-group-item-container"
                                                    }, [
                                                        _c("div", {
                                                            staticClass: "spinal-project-item-group-item-arrow-container"
                                                        }, [
                                                            _c("v-btn", {
                                                                attrs: {
                                                                    "ripple": "",
                                                                    "disabled": _vm.canUp(i)
                                                                },
                                                                on: {
                                                                    "click": function($event) {
                                                                        $event.stopPropagation();
                                                                        return _vm.up(i);
                                                                    }
                                                                }
                                                            }, [
                                                                _c("v-icon", [
                                                                    _vm._v(" expand_less ")
                                                                ])
                                                            ], 1),
                                                            _vm._v(" "),
                                                            _c("v-btn", {
                                                                attrs: {
                                                                    "ripple": "",
                                                                    "disabled": _vm.canDown(i)
                                                                },
                                                                on: {
                                                                    "click": function($event) {
                                                                        $event.stopPropagation();
                                                                        return _vm.down(i);
                                                                    }
                                                                }
                                                            }, [
                                                                _c("v-icon", [
                                                                    _vm._v(" expand_more ")
                                                                ])
                                                            ], 1)
                                                        ], 1),
                                                        _vm._v(" "),
                                                        _c("v-list-tile-content", [
                                                            _c("v-list-tile-title", {
                                                                staticClass: "spinal-project-item-group-item-title-container"
                                                            }, [
                                                                _c("span", {
                                                                    directives: [
                                                                        {
                                                                            name: "tooltip",
                                                                            rawName: "v-tooltip",
                                                                            value: item.name,
                                                                            expression: "item.name"
                                                                        }
                                                                    ],
                                                                    staticClass: "spinal-project-item-group-item-title"
                                                                }, [
                                                                    _vm._v("\n                        (" + _vm._s(item.computedData.length) + ") " + _vm._s(item.name) + "\n                      ")
                                                                ])
                                                            ])
                                                        ], 1),
                                                        _vm._v(" "),
                                                        _c("v-list-tile-action", [
                                                            _c("BimGroupsListHeaderBouttons", {
                                                                attrs: {
                                                                    "index": i
                                                                },
                                                                on: {
                                                                    "addViewerSelection": _vm.addViewerSelection,
                                                                    "showInViewer": _vm.showInViewer,
                                                                    "showEdit": _vm.showEdit,
                                                                    "deleteGroup": _vm.deleteGroup
                                                                }
                                                            })
                                                        ], 1)
                                                    ], 1)
                                                ];
                                            },
                                            proxy: true
                                        }
                                    ], null, true)
                                }, [
                                    _vm._v(" "),
                                    _c("div", {
                                        staticClass: "spinal-project-item-group-item-content"
                                    }, [
                                        _c("v-list-tile-content", [
                                            _c("BimGroupsItemContent", {
                                                attrs: {
                                                    "index": i,
                                                    "item": item.computedData
                                                },
                                                on: {
                                                    "seeItem": _vm.showInViewer,
                                                    "deleteItem": _vm.deleteItemIngroup
                                                }
                                            })
                                        ], 1)
                                    ], 1)
                                ]) : _c("v-list-tile", {
                                    key: item.uid,
                                    staticClass: "spinal-project-item-group-item-container"
                                }, [
                                    _c("div", {
                                        staticClass: "spinal-project-item-group-item-arrow-container"
                                    }, [
                                        _c("v-btn", {
                                            attrs: {
                                                "ripple": "",
                                                "disabled": _vm.canUp(i)
                                            },
                                            on: {
                                                "click": function($event) {
                                                    return _vm.up(i);
                                                }
                                            }
                                        }, [
                                            _c("v-icon", [
                                                _vm._v(" expand_less ")
                                            ])
                                        ], 1),
                                        _vm._v(" "),
                                        _c("v-btn", {
                                            attrs: {
                                                "ripple": "",
                                                "disabled": _vm.canDown(i)
                                            },
                                            on: {
                                                "click": function($event) {
                                                    return _vm.down(i);
                                                }
                                            }
                                        }, [
                                            _c("v-icon", [
                                                _vm._v(" expand_more ")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("v-list-tile-content", {
                                        staticClass: "spinal-project-item-group-item-title-container"
                                    }, [
                                        _c("span", {
                                            directives: [
                                                {
                                                    name: "tooltip",
                                                    rawName: "v-tooltip",
                                                    value: item.name,
                                                    expression: "item.name"
                                                }
                                            ],
                                            staticClass: "spinal-project-item-group-item-title"
                                        }, [
                                            _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-action", [
                                        _c("BimGroupsListHeaderBouttons", {
                                            attrs: {
                                                "index": i,
                                                "is-item-group": false
                                            },
                                            on: {
                                                "addViewerSelection": _vm.addViewerSelection,
                                                "showInViewer": _vm.showInViewer,
                                                "showEdit": _vm.showEdit,
                                                "deleteGroup": _vm.deleteGroup
                                            }
                                        })
                                    ], 1)
                                ], 1)
                            ];
                        })
                    ], 2)
                ], 1)
            ])
        ], 1),
        _vm._v(" "),
        _c("BimGroupsItemEdit", {
            attrs: {
                "item-to-edit": _vm.itemToEdit
            },
            on: {
                "close": _vm.onCloseEdit
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dE25S":[function() {},{}],"2kYXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epc7F":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", {
        staticClass: "geolocate-bimObj-body",
        attrs: {
            "dark": ""
        }
    }, [
        _c("div", {
            staticClass: "geolocate-bimObj-container"
        }, [
            _vm.selectedGroup === undefined ? _c("GroupeConfig", {
                attrs: {
                    "groupConfigs": _vm.groupConfigs
                },
                on: {
                    "addAGroupConfig": _vm.addAGroupConfig,
                    "selectGroup": _vm.onselectedGroup,
                    "generate": _vm.generate,
                    "save": _vm.onSave,
                    "deleteGroup": _vm.deleteGroup
                }
            }) : _c("SelectedGroup", {
                attrs: {
                    "name": _vm.selectedGroup.name,
                    "uid": _vm.selectedGroup.uid,
                    "list": _vm.selectedGroup.data,
                    "can-save": _vm.cleanCfg
                },
                on: {
                    "save": _vm.onSave,
                    "savableCfg": function($event) {
                        _vm.cleanCfg = false;
                    },
                    "back": function($event) {
                        _vm.selectedGroup = undefined;
                    },
                    "generate": _vm.generate
                }
            }),
            _vm._v(" "),
            _vm.progress != 100 ? _c("v-progress-linear", {
                staticClass: "geolocate-bimObj-progressbar",
                model: {
                    value: _vm.progress,
                    callback: function($$v) {
                        _vm.progress = $$v;
                    },
                    expression: "progress"
                }
            }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("md-snackbar", {
            staticClass: "md-accent",
            attrs: {
                "md-position": "center",
                "md-active": _vm.showSnackbar,
                "md-persistent": ""
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.showSnackbar = $event;
                },
                "update:md-active": function($event) {
                    _vm.showSnackbar = $event;
                }
            }
        }, [
            _c("span", [
                _vm._v(_vm._s(_vm.msgSnackbar))
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        _vm.showSnackbar = false;
                    }
                }
            }, [
                _vm._v("close")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iB28I":[function() {},{}],"jdOdZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flkAA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4d37f4389bd5ba08");
    if (script.__esModule) script = script.default;
    script.render = require("9d035768641302f6").render;
    script.staticRenderFns = require("9d035768641302f6").staticRenderFns;
    script._scopeId = "data-v-289f5a";
    script.__cssModules = require("29d92b5b2089ea39").default;
    require("1bfe16ae6bdf940").default(script);
    script.__scopeId = "data-v-289f5a";
    script.__file = "AssingView.vue";
};
initialize();
exports.default = script;

},{"4d37f4389bd5ba08":"fqcjV","9d035768641302f6":"2h2oY","29d92b5b2089ea39":"h6uud","1bfe16ae6bdf940":"fxMJH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqcjV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _assingDataViewVue = require("./AssingDataView.vue");
var _assingDataViewVueDefault = parcelHelpers.interopDefault(_assingDataViewVue);
var scriptExports = {
    name: "AssingView",
    components: {
        AssingDataView: (0, _assingDataViewVueDefault.default)
    },
    data () {
        return {
            search: "",
            contextId: "",
            selectedNodeId: "",
            spatial: [],
            selectedSpatial: []
        };
    },
    computed: {
        selectedSpatialIdCompu () {
            if (this.selectedSpatial[0] && this.selectedSpatial[0].type === "room") return this.selectedSpatial[0].id;
            return "";
        }
    },
    async mounted () {
        this.spatial = await (0, _spinalSpatialReferential.getSpatialTree)();
    },
    methods: {
        onRoomSelect (name) {
            console.log("onRoomSelect", name);
            this.search = name;
        },
        async importFloorToSearch () {
            const roomNode = await (0, _spinalSpatialReferential.getRoomNodeFromSelectFloor)();
            if (roomNode) this.search = roomNode.info.name.get();
        },
        async generate () {
            this.$refs.assingDataView.generate();
        },
        async opened ({ contextId, selectedNodeId }) {
            this.contextId = contextId;
            this.selectedNodeId = selectedNodeId;
        },
        removed () {},
        close () {},
        closeDialog () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","./AssingDataView.vue":"5M0au","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5M0au":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bc75af5b71a7c6ba");
    if (script.__esModule) script = script.default;
    script.render = require("b86cfd3fada2dc7a").render;
    script.staticRenderFns = require("b86cfd3fada2dc7a").staticRenderFns;
    script._scopeId = "data-v-d2f2c7";
    script.__cssModules = require("579bd541f2ec37d8").default;
    require("d2dee664bba8d226").default(script);
    script.__scopeId = "data-v-d2f2c7";
    script.__file = "AssingDataView.vue";
};
initialize();
exports.default = script;

},{"bc75af5b71a7c6ba":"65NHi","b86cfd3fada2dc7a":"b2HRt","579bd541f2ec37d8":"2jYpx","d2dee664bba8d226":"9tJ9J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65NHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _lodash = require("lodash");
var _assingDataViewListVue = require("./AssingDataViewList.vue");
var _assingDataViewListVueDefault = parcelHelpers.interopDefault(_assingDataViewListVue);
var scriptExports = {
    name: "AssingDataView",
    components: {
        AssingDataViewList: (0, _assingDataViewListVueDefault.default)
    },
    data () {
        return {
            active: 0,
            warnArr: [],
            errorArr: []
        };
    },
    props: [
        "contextId",
        "selectedNodeId",
        "roomSelected"
    ],
    computed: {
        warnLen () {
            return this.warnArr.reduce((acc, item)=>{
                if (!item.validId) acc += 1;
                return acc;
            }, 0);
        },
        errLen () {
            return this.errorArr.reduce((acc, item)=>{
                if (!item.validId) acc += 1;
                return acc;
            }, 0);
        }
    },
    mounted () {
        return this.update();
    },
    created () {
        this.update = (0, _lodash.debounce)(this._updateData, 100);
    },
    watch: {
        contextId () {
            this.update();
        },
        selectedNodeId () {
            this.update();
        }
    },
    methods: {
        async _updateData () {
            if (!this.contextId || !this.selectedNodeId) return;
            const data = await (0, _spinalSpatialReferential.getDataAssing)({
                contextId: this.contextId,
                selectedNodeId: this.selectedNodeId
            });
            this.errorArr = data.error;
            this.warnArr = data.warn;
            if (this.warnArr.length === 0 && this.errorArr.length) this.active = 1;
        },
        onRoomSelect (roomId) {
            this.$emit("roomSelect", roomId);
        },
        async generate () {
            const { cmd, cmdMiss } = await (0, _spinalSpatialReferential.createCmdProjectionForManualAssing)(this.warnArr, this.errorArr);
            const cmds = cmd.concat(cmdMiss);
            const { node, context: contextCmd, data } = await (0, _spinalSpatialReferential.saveCmdsProjectionGeo)(cmds);
            (0, _spinalSpatialReferential.addNodeGraphService)(node);
            await (0, _spinalSpatialReferential.waitPathSendToHub)(data);
            console.log("done", cmd);
            spinal.spinalPanelManagerService.openPanel("CmdRunViewer", {
                dataCmd: cmd,
                node,
                contextId: contextCmd.info.id.get()
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","lodash":"3qBDj","./AssingDataViewList.vue":"cHs3J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHs3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("de89ab3d7ad8ed5");
    if (script.__esModule) script = script.default;
    script.render = require("8043542bd11e51be").render;
    script.staticRenderFns = require("8043542bd11e51be").staticRenderFns;
    script._scopeId = "data-v-5560a9";
    script.__cssModules = require("fb4c8d47e2298361").default;
    require("abb244c93fc2a724").default(script);
    script.__scopeId = "data-v-5560a9";
    script.__file = "AssingDataViewList.vue";
};
initialize();
exports.default = script;

},{"de89ab3d7ad8ed5":"l3X3s","8043542bd11e51be":"eqzCL","fb4c8d47e2298361":"55E3G","abb244c93fc2a724":"cs7tu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3X3s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignDataViewRoomNameVue = require("./AssignDataViewRoomName.vue");
var _assignDataViewRoomNameVueDefault = parcelHelpers.interopDefault(_assignDataViewRoomNameVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "AssingDataViewList",
    props: [
        "items",
        "roomSelected"
    ],
    components: {
        AssignDataViewRoomName: (0, _assignDataViewRoomNameVueDefault.default)
    },
    data () {
        return {
            currArr: [],
            doneArr: []
        };
    },
    mounted () {
        this.updateData();
    },
    watch: {
        items () {
            this.updateData();
        }
    },
    methods: {
        updateData () {
            if (!this.items) return;
            this.currArr = [];
            this.doneArr = [];
            for (const item of this.items)if (item.validId) this.doneArr.push(item);
            else this.currArr.push(item);
        },
        onValid (item) {
            item.validId = this.roomSelected;
            this.updateData();
        },
        async searchRoomRef (item) {
            const modelDbid = (0, _spinalSpatialReferential.getModelByBimFileIdLoaded)(item.bimFileId);
            if (modelDbid) {
                const graph = (0, _spinalSpatialReferential.getGraph)();
                const contextGeo = await (0, _spinalSpatialReferential.getContextSpatial)(graph);
                const aggrData = await (0, _spinalSpatialReferential.getRoomRef)(contextGeo);
                for (const { model, dbId } of aggrData)if (model === modelDbid) {
                    dbId.add(item.dbid);
                    break;
                }
                const data = aggrData.map((itm)=>{
                    return {
                        model: itm.model,
                        selection: Array.from(itm.dbId)
                    };
                });
                const viewer = (0, _spinalSpatialReferential.getViewer)();
                viewer.impl.visibilityManager.aggregateIsolate(data);
                viewer.fitToView([
                    item.dbid
                ], modelDbid);
                viewer.select([
                    item.dbid
                ], modelDbid);
            }
        },
        showItem (item) {
            (0, _spinalSpatialReferential.viewDataAssignInViewer)(item.dbid, item.bimFileId, this.roomSelected, item.validId, item.PNId);
        },
        onCancel (item) {
            item.validId = "";
            this.updateData();
        },
        onRoomClick (itemId) {
            this.$emit("roomSelect", itemId);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./AssignDataViewRoomName.vue":"4qDKb","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4qDKb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7d46d0fb85847eaf");
    if (script.__esModule) script = script.default;
    script.render = require("17462c0befa24b04").render;
    script.staticRenderFns = require("17462c0befa24b04").staticRenderFns;
    script._scopeId = "data-v-783ac9";
    script.__cssModules = require("260594d71246258a").default;
    require("3bd84b9af9144ee9").default(script);
    script.__scopeId = "data-v-783ac9";
    script.__file = "AssignDataViewRoomName.vue";
};
initialize();
exports.default = script;

},{"7d46d0fb85847eaf":"bHjeC","17462c0befa24b04":"9ra3c","260594d71246258a":"eNDY8","3bd84b9af9144ee9":"cOQJE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHjeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var scriptExports = {
    name: "AssignDataViewRoomName",
    data () {
        return {};
    },
    props: [
        "nodeName",
        "validId"
    ],
    computed: {
        validCompuText () {
            const node = (0, _spinalSpatialReferential.getRealNode)(this.validId);
            if (node) return node.info.name.get();
            return this.validId;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ra3c":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.validId ? _c("v-list-tile-sub-title", {
        staticClass: "AssignDataViewRoomName"
    }, [
        _vm.validCompuText === _vm.nodeName ? _c("span", {
            staticStyle: {
                "color": "#00e300"
            },
            on: {
                "click": function($event) {
                    $event.stopPropagation();
                    return _vm.$emit("roomSelect", _vm.nodeName);
                }
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.nodeName) + "\n  ")
        ]) : [
            _c("span", {
                staticStyle: {
                    "color": "#00e300"
                },
                on: {
                    "click": function($event) {
                        $event.stopPropagation();
                        return _vm.$emit("roomSelect", _vm.validCompuText);
                    }
                }
            }, [
                _vm._v("\n      " + _vm._s(_vm.validCompuText) + "\n    ")
            ]),
            _vm._v(" "),
            _c("span", {
                staticStyle: {
                    "color": "red"
                }
            }, [
                _c("s", {
                    on: {
                        "click": function($event) {
                            $event.stopPropagation();
                            return _vm.$emit("roomSelect", _vm.nodeName);
                        }
                    }
                }, [
                    _vm._v(_vm._s(_vm.nodeName))
                ])
            ])
        ]
    ], 2) : _c("v-list-tile-sub-title", {
        staticClass: "AssignDataViewRoomName",
        on: {
            "click": function($event) {
                $event.stopPropagation();
                return _vm.$emit("roomSelect", _vm.nodeName);
            }
        }
    }, [
        _c("span", {
            staticStyle: {
                "color": "#00e300"
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.nodeName) + "\n  ")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eNDY8":[function() {},{}],"cOQJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqzCL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-list", {
        staticClass: "AssingDataViewList-container spinal-scrollbar",
        attrs: {
            "two-line": "",
            "dense": ""
        }
    }, [
        _vm._l(_vm.currArr, function(item) {
            return _c("v-list-tile", {
                key: item.externalId,
                staticClass: "assingDataitem",
                attrs: {
                    "ripple": ""
                },
                on: {
                    "click": function($event) {
                        return _vm.showItem(item);
                    }
                }
            }, [
                _c("v-list-tile-action", [
                    _c("v-btn", {
                        attrs: {
                            "icon": "",
                            "ripple": ""
                        },
                        on: {
                            "click": function($event) {
                                $event.stopPropagation();
                                return _vm.searchRoomRef(item);
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("view_compact")
                        ])
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("v-list-tile-content", [
                    _c("v-list-tile-title", [
                        _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c("AssignDataViewRoomName", {
                        attrs: {
                            "validId": item.validId,
                            "nodeName": item.PName
                        },
                        on: {
                            "roomSelect": _vm.onRoomClick
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("v-list-tile-action", [
                    _c("v-btn", {
                        attrs: {
                            "icon": "",
                            "ripple": "",
                            "disabled": !_vm.roomSelected
                        },
                        on: {
                            "click": function($event) {
                                $event.stopPropagation();
                                return _vm.onValid(item);
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("check")
                        ])
                    ], 1)
                ], 1)
            ], 1);
        }),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("v-subheader", [
            _vm._v(" Done ")
        ]),
        _vm._v(" "),
        _vm._l(_vm.doneArr, function(item) {
            return _c("v-list-tile", {
                key: item.externalId,
                staticClass: "assingDataitem",
                attrs: {
                    "ripple": ""
                },
                on: {
                    "click": function($event) {
                        return _vm.showItem(item);
                    }
                }
            }, [
                _c("v-list-tile-content", [
                    _c("v-list-tile-title", [
                        _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c("AssignDataViewRoomName", {
                        attrs: {
                            "validId": item.validId,
                            "nodeName": item.PName
                        },
                        on: {
                            "roomSelect": _vm.onRoomClick
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("v-list-tile-action", [
                    _c("v-btn", {
                        attrs: {
                            "icon": "",
                            "ripple": ""
                        },
                        on: {
                            "click": function($event) {
                                $event.stopPropagation();
                                return _vm.onCancel(item);
                            }
                        }
                    }, [
                        _c("v-icon", [
                            _vm._v("cancel")
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

},{}],"55E3G":[function() {},{}],"cs7tu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2HRt":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-tabs", {
        staticClass: "AssingDataView-vtabs",
        attrs: {
            "dark": "",
            "fixed-tabs": "",
            "grow": ""
        },
        model: {
            value: _vm.active,
            callback: function($$v) {
                _vm.active = $$v;
            },
            expression: "active"
        }
    }, [
        _c("v-tab", {
            attrs: {
                "ripple": ""
            }
        }, [
            _vm._v(" Warnings (" + _vm._s(_vm.warnLen) + ")")
        ]),
        _vm._v(" "),
        _c("v-tab", {
            attrs: {
                "ripple": ""
            }
        }, [
            _vm._v(" Error (" + _vm._s(_vm.errLen) + ")")
        ]),
        _vm._v(" "),
        _c("v-tab-item", {
            staticClass: "AssingDataView-tab-container"
        }, [
            _c("AssingDataViewList", {
                attrs: {
                    "roomSelected": _vm.roomSelected,
                    "items": _vm.warnArr
                },
                on: {
                    "roomSelect": _vm.onRoomSelect
                }
            })
        ], 1),
        _vm._v(" "),
        _c("v-tab-item", {
            staticClass: "AssingDataView-tab-container"
        }, [
            _c("AssingDataViewList", {
                attrs: {
                    "roomSelected": _vm.roomSelected,
                    "items": _vm.errorArr
                },
                on: {
                    "roomSelect": _vm.onRoomSelect
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2jYpx":[function() {},{}],"9tJ9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2h2oY":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", {
        staticClass: "manual-assign-projection-body",
        attrs: {
            "dark": ""
        }
    }, [
        _c("v-toolbar", {
            attrs: {
                "dense": "",
                "dark": ""
            }
        }, [
            _c("v-btn", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "import floor to search bar",
                        expression: "'import floor to search bar'"
                    }
                ],
                attrs: {
                    "icon": ""
                },
                on: {
                    "click": _vm.importFloorToSearch
                }
            }, [
                _c("v-icon", [
                    _vm._v("image_search")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "icon": ""
                },
                on: {
                    "click": _vm.generate
                }
            }, [
                _c("v-icon", [
                    _vm._v("check")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "manual-assign-projection-container"
        }, [
            _c("div", {
                staticClass: "manual-assign-projection-spatial-container"
            }, [
                _c("v-text-field", {
                    attrs: {
                        "label": "search",
                        "dark": "",
                        "flat": "",
                        "hide-details": "",
                        "clearable": "",
                        "clear-icon": "clear"
                    },
                    model: {
                        value: _vm.search,
                        callback: function($$v) {
                            _vm.search = $$v;
                        },
                        expression: "search"
                    }
                }),
                _vm._v(" "),
                _c("div", {
                    staticClass: "manual-assign-projection-treeview-container spinal-scrollbar"
                }, [
                    _vm.spatial.length > 0 ? _c("v-treeview", {
                        ref: "assingTree",
                        attrs: {
                            "items": _vm.spatial,
                            "activatable": "",
                            "active-class": "manual-assign-projection-treeview-item-active",
                            "active": _vm.selectedSpatial,
                            "open-all": "",
                            "search": _vm.search,
                            "return-object": "",
                            "transition": ""
                        },
                        on: {
                            "update:active": function($event) {
                                _vm.selectedSpatial = $event;
                            }
                        }
                    }) : _vm._e()
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "manual-assign-projection-list-container spinal-scrollbar"
            }, [
                _c("AssingDataView", {
                    ref: "assingDataView",
                    attrs: {
                        "roomSelected": _vm.selectedSpatialIdCompu,
                        "contextId": _vm.contextId,
                        "selectedNodeId": _vm.selectedNodeId
                    },
                    on: {
                        "roomSelect": _vm.onRoomSelect
                    }
                })
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"h6uud":[function() {},{}],"fxMJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{"bf7edd8450503e22":"7Uw4d","64bd1569b4ded066":"gsEky"}],"7Uw4d":[function(require,module,exports) {
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

},{"8b71a79dcc12420e":"h7sS1","e47c36529e942a76":"cvBJ6","cfd4c6200ba55765":"9SKSV"}],"h7sS1":[function(require,module,exports) {
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

},{}],"cvBJ6":[function(require,module,exports) {
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

},{}],"9SKSV":[function(require,module,exports) {
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

},{}],"gsEky":[function(require,module,exports) {
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

},{}],"7F7ym":[function(require,module,exports) {
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
parcelHelpers.export(exports, "ButtonGenerateContext", ()=>ButtonGenerateContext);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("e4be0cc993763b1d");
const LABEL = "Spatial Context";
class ButtonGenerateContext extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "3d_rotation",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown() {
        return Promise.resolve(true);
    }
    openPanel() {
        spinalPanelManagerService.openPanel("DialogGenerateContext");
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","e4be0cc993763b1d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ax3Z":[function(require,module,exports) {
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
parcelHelpers.export(exports, "ButtonAddObjectToCategory", ()=>ButtonAddObjectToCategory);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { spinalPanelManagerService } = require("6838b27d39c0ae13");
const LABEL = "Project objets in context";
class ButtonAddObjectToCategory extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "picture_in_picture",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode === option.context && option.selectedNode.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogAddObject", option.selectedNode.id.get());
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","6838b27d39c0ae13":"7Uw4d","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"35gS7":[function(require,module,exports) {
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
parcelHelpers.export(exports, "GenerateContextGeo", ()=>GenerateContextGeo);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalSpatialReferential = require("spinal-spatial-referential");
const LABEL = "Generate Context";
class GenerateContextGeo extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "play_arrow",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.myAction.bind(this);
    }
    isShown(option) {
        if (option.context.type.get() === (0, _spinalSpatialReferential.GENERATION_CONTEXT_TYPE) && option.selectedNode.type.get() === (0, _spinalSpatialReferential.GENERATION_TYPE) && (option.selectedNode.generationType.get() === (0, _spinalSpatialReferential.GENERATION_GEO_TYPE) || option.selectedNode.generationType.get() === (0, _spinalSpatialReferential.GENERATION_PROJECTION_TYPE))) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async myAction(option) {
        spinal.spinalPanelManagerService.openPanel("CmdRunViewer", {
            selectedNodeId: option.selectedNode.id.get(),
            contextId: option.context.id.get()
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTm25":[function(require,module,exports) {
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
parcelHelpers.export(exports, "ManualAssingmentButton", ()=>ManualAssingmentButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalSpatialReferential = require("spinal-spatial-referential");
const { spinalPanelManagerService } = require("3a1d4d57f531021a");
const LABEL = "Manual Assingment";
class ManualAssingmentButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "sort",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.context.type.get() === (0, _spinalSpatialReferential.GENERATION_CONTEXT_TYPE) && option.selectedNode.generationType && option.selectedNode.generationType.get() === (0, _spinalSpatialReferential.GENERATION_PROJECTION_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("panelManualAssingView", {
            contextId: option.context.id.get(),
            selectedNodeId: option.selectedNode.id.get()
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","3a1d4d57f531021a":"7Uw4d","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv13u":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalDiffViewerVue = require("./SpinalDiffViewer.vue");
var _spinalDiffViewerVueDefault = parcelHelpers.interopDefault(_spinalDiffViewerVue);
const { SpinalMountExtention } = require("73bbc6e9d281c7a5");
function getDomElemWithClassNameRetry(classname) {
    return new Promise((resolve)=>{
        const inter = setInterval(()=>{
            const dom = document.body.getElementsByClassName(classname);
            if (dom.length > 0) {
                clearInterval(inter);
                resolve(dom[0]);
            }
        }, 100);
    });
}
getDomElemWithClassNameRetry("plugin-graph-viewer").then((domElement)=>{
    // include in div with class="plugin-graph-viewer"
    // a diff viewer
    SpinalMountExtention.mount({
        // name registered.
        name: "SpinalDiffViewer",
        // Vue.extend to create a Compoment constructor
        vueMountComponent: (0, _vueDefault.default).extend((0, _spinalDiffViewerVueDefault.default)),
        // where to  append the Compoment
        parentContainer: domElement
    });
});

},{"vue":"gt5MM","73bbc6e9d281c7a5":"7Uw4d","./SpinalDiffViewer.vue":"54mjX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54mjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5b2d0a2ceb131b98");
    if (script.__esModule) script = script.default;
    script.render = require("5bdc2be33592b255").render;
    script.staticRenderFns = require("5bdc2be33592b255").staticRenderFns;
    script._scopeId = "data-v-16a148";
    script.__cssModules = require("5e94c97249626d9b").default;
    require("95f9cf92371054d2").default(script);
    script.__scopeId = "data-v-16a148";
    script.__file = "SpinalDiffViewer.vue";
};
initialize();
exports.default = script;

},{"5b2d0a2ceb131b98":"7h86R","5bdc2be33592b255":"ecRiZ","5e94c97249626d9b":"2U49e","95f9cf92371054d2":"efTFD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7h86R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalDiffFloorViewerVue = require("./SpinalDiffFloorViewer.vue");
var _spinalDiffFloorViewerVueDefault = parcelHelpers.interopDefault(_spinalDiffFloorViewerVue);
var _spinalSpatialReferential = require("spinal-spatial-referential");
const SpinalDiffViewer = {
    name: "SpinalDiffViewer",
    props: [
        "onFinised"
    ],
    components: {
        SpinalDiffFloorViewer: (0, _spinalDiffFloorViewerVueDefault.default)
    },
    data () {
        this.manualAssingment = null;
        return {
            showDialog: true,
            contextServerid: 0,
            archiData: undefined,
            skipList: [],
            loading: false
        };
    },
    methods: {
        opened (option) {
            if (option) {
                this.archiData = option.archiData;
                this.manualAssingment = option.manualAssingment;
                this.buildingServerId = option.buildingServerId;
                this.bimFileId = option.bimFileId;
                this.isRawDataGen = option.isRawDataGen;
                this.BIMGeocontextServId = option.BIMGeocontextServId;
            }
        },
        removed (option) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised();
        },
        pushSkip (itm) {
            this.skipList.push(itm);
        },
        rmAtSkip (idx) {
            this.skipList.splice(idx, 1);
        },
        async generate () {
            this.loading = true;
            try {
                const cmds = this.isRawDataGen ? await (0, _spinalSpatialReferential.generateCmdBIMGeo)(this.archiData, this.skipList, this.BIMGeocontextServId, this.bimFileId) : await (0, _spinalSpatialReferential.generateCmdGeo)(this.archiData, this.skipList, this.buildingServerId, this.bimFileId);
                const { node, context, data } = await (0, _spinalSpatialReferential.saveCmdsGenerateGeo)(cmds);
                (0, _spinalSpatialReferential.addNodeGraphService)(node);
                await (0, _spinalSpatialReferential.waitPathSendToHub)(data);
                spinal.spinalPanelManagerService.openPanel("CmdRunViewer", {
                    dataCmd: cmds,
                    node,
                    contextId: context.info.id.get()
                });
            } catch (e) {
                console.error(e);
            } finally{
                this.loading = false;
            }
        }
    }
};
var scriptExports = SpinalDiffViewer;
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalDiffFloorViewer.vue":"gq73D","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gq73D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a04cd799d4ad7e77");
    if (script.__esModule) script = script.default;
    script.render = require("519265e0c902e647").render;
    script.staticRenderFns = require("519265e0c902e647").staticRenderFns;
    script._scopeId = "data-v-2f38dd";
    script.__cssModules = require("bbacf12dc2fd3d83").default;
    require("6ff32198bd7c2e93").default(script);
    script.__scopeId = "data-v-2f38dd";
    script.__file = "SpinalDiffFloorViewer.vue";
};
initialize();
exports.default = script;

},{"a04cd799d4ad7e77":"fPxVM","519265e0c902e647":"em3RM","bbacf12dc2fd3d83":"aTQCg","6ff32198bd7c2e93":"hGW1f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPxVM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _spinalCoreConnectorjs = require("spinal-core-connectorjs");
var _spinalModelGraph = require("spinal-model-graph");
var _eventbus = require("./eventbus");
var scriptExports = {
    name: "SpinalDiffFloorViewer",
    props: [
        "archiData",
        "value"
    ],
    data () {
        return {
            selectedItem: null
        };
    },
    methods: {
        getIcon (modificationType) {
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).update) return "update";
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).create) return "new-box";
            return "delete";
        },
        getColor (modificationType) {
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).update) return {
                "spinal-item-tile-update": true
            };
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).create) return {
                "spinal-item-tile-create": true
            };
            if (modificationType & (0, _spinalSpatialReferential.EModificationType).delete) return {
                "spinal-item-tile-delete": true
            };
        },
        getName (FAData) {
            if (FAData.diff) {
                if (FAData.diff.diffInfo && FAData.diff.diffInfo.diffInfo) for (const { label, archiValue } of FAData.diff.diffInfo.diffInfo){
                    if (label === "name") return archiValue;
                }
            }
            for (const { name, value } of FAData.floorArchi.properties.properties){
                if (name === "name") return value;
            }
        },
        getRoomName (RAData) {
            if (RAData.diff) {
                if (RAData.diff.diffInfo && RAData.diff.diffInfo.diffInfo) for (const { label, archiValue } of RAData.diff.diffInfo.diffInfo){
                    if (label === "name") return archiValue;
                }
            }
            return this.getRoomNameArchi(RAData.roomArchi);
        },
        getRoomNameArchi (roomArchi) {
            let resName, resNumber;
            for (const { name, value } of roomArchi.properties.properties){
                if (name === "name") resName = value;
                if (name === "number") resNumber = value;
            }
            if (resNumber && resName) return `${resNumber}-${resName}`;
            return "unamed";
        },
        getRoomNameNode (server_id) {
            const node = (0, _spinalCoreConnectorjs.FileSystem)._objects[server_id];
            if (node instanceof (0, _spinalModelGraph.SpinalNode) && node.info.name) return node.info.name.get();
            return server_id;
        },
        getFloorSummData (FAData) {
            if (FAData.diff) return this.getSumData(FAData.diff.diffInfo);
            return "";
        },
        getSumData (diffInfo) {
            if (!diffInfo) return "";
            const tmp = [];
            if (diffInfo.diffAttr.length > 0) tmp.push(`${diffInfo.diffAttr.length} attribute(s)`);
            if (diffInfo.diffInfo.length > 0) tmp.push(`${diffInfo.diffInfo.length} nodeinfo(s)`);
            if (tmp.length === 0) return "";
            return tmp.join(", ");
        },
        getFloorSummRoom (FAData) {
            if (FAData.diff) {
                const tmp = [];
                if (FAData.diff.diffRoom.delRooms.length > 0) tmp.push(`${FAData.diff.diffRoom.delRooms.length} Delete`);
                if (FAData.diff.diffRoom.newRooms.length > 0) tmp.push(`${FAData.diff.diffRoom.newRooms.length} New`);
                if (FAData.diff.diffRoom.updateRooms.length > 0) tmp.push(`${FAData.diff.diffRoom.updateRooms.length} Update`);
                if (tmp.length === 0) return "";
                return "Rooms: " + tmp.join(", ");
            }
            return "";
        },
        getFloorSummStruct (FAData) {
            if (FAData.diff) {
                const tmp = [];
                if (FAData.diff.diffRef.delBimObj.length > 0) tmp.push(`${FAData.diff.diffRef.delBimObj.length} Delete`);
                if (FAData.diff.diffRef.newBimObj.length > 0) tmp.push(`${FAData.diff.diffRef.newBimObj.length} New`);
                if (tmp.length === 0) return "";
                return "Structure reference: " + tmp.join(", ");
            }
            return "";
        },
        onSelectFloor (FAData) {
            (0, _eventbus.eventBus).$emit("selectFloor", FAData);
        },
        onSelectRoom (FAData, RAData, type) {
            (0, _eventbus.eventBus).$emit("selectRoom", {
                FAData,
                RAData,
                type
            });
        },
        onClickCheckbox (id, type) {
            const idx = this.value.findIndex((itm)=>itm.id === id);
            if (idx === -1) this.$emit("pushSkip", {
                id,
                type
            });
            else this.$emit("rmAtSkip", idx);
        },
        isInSkipList (id, parentId) {
            const fct = (itm)=>itm.id === id;
            if (parentId) return this.value.some((itm)=>itm.id === parentId) || this.value.some(fct);
            return this.value.some(fct);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","spinal-core-connectorjs":"2uyD7","spinal-model-graph":"fkEXw","./eventbus":"kLzMY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"em3RM":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-list", {
        attrs: {
            "dark": "",
            "two-line": ""
        }
    }, [
        _vm.archiData === undefined ? _c("v-subheader", [
            _vm._v(" loading... ")
        ]) : _vm.archiData.length === 0 ? _c("v-subheader", [
            _vm._v(" no data ")
        ]) : _vm._l(_vm.archiData, function(FAData) {
            return _c("v-list-group", {
                key: FAData.floorArchi.properties.externalId,
                attrs: {
                    "no-action": "",
                    "lazy": true
                },
                scopedSlots: _vm._u([
                    {
                        key: "activator",
                        fn: function() {
                            return [
                                _c("v-list-tile", {
                                    staticClass: "spinal-item-tile",
                                    class: _vm.getColor(FAData.floorArchi.properties.modificationType),
                                    attrs: {
                                        "ripple": ""
                                    },
                                    on: {
                                        "click": function($event) {
                                            return _vm.onSelectFloor(FAData);
                                        }
                                    }
                                }, [
                                    _c("v-list-tile-action", [
                                        _c("v-btn", {
                                            attrs: {
                                                "ripple": "",
                                                "circle": "",
                                                "dense": "",
                                                "icon": ""
                                            },
                                            on: {
                                                "click": function($event) {
                                                    $event.stopPropagation();
                                                    return _vm.onClickCheckbox(FAData.floorArchi.properties.externalId);
                                                }
                                            }
                                        }, [
                                            _vm.isInSkipList(FAData.floorArchi.properties.externalId) ? _c("v-icon", [
                                                _vm._v("check_box_outline_blank")
                                            ]) : _c("v-icon", [
                                                _vm._v("check_box")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("v-list-tile-content", [
                                        _c("v-list-tile-title", {
                                            staticClass: "spinal-list-tile-title"
                                        }, [
                                            _vm._v(_vm._s(_vm.getName(FAData)))
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-tile-sub-title", {
                                            staticClass: "spinal-list-tile-title"
                                        }, [
                                            _vm._v("\n            " + _vm._s(_vm.getFloorSummData(FAData)) + "\n          ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-tile-sub-title", {
                                            staticClass: "spinal-list-tile-title"
                                        }, [
                                            _vm._v("\n            " + _vm._s(_vm.getFloorSummRoom(FAData)) + "\n          ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-tile-sub-title", {
                                            staticClass: "spinal-list-tile-title"
                                        }, [
                                            _vm._v("\n            " + _vm._s(_vm.getFloorSummStruct(FAData)) + "\n          ")
                                        ])
                                    ], 1)
                                ], 1)
                            ];
                        },
                        proxy: true
                    }
                ], null, true)
            }, [
                _vm._v(" "),
                FAData.diff ? [
                    _vm._l(FAData.diff.diffRoom.delRooms, function(serverId) {
                        return _c("v-list-tile", {
                            key: serverId,
                            staticClass: "spinal-item-tile spinal-subitem-tile spinal-item-tile-delete",
                            attrs: {
                                "ripple": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.onSelectRoom(FAData, serverId, "delete");
                                }
                            }
                        }, [
                            _c("v-list-tile-action", [
                                _c("v-btn", {
                                    attrs: {
                                        "ripple": "",
                                        "circle": "",
                                        "dense": "",
                                        "icon": "",
                                        "disabled": _vm.isInSkipList(FAData.floorArchi.properties.externalId)
                                    },
                                    on: {
                                        "click": function($event) {
                                            $event.stopPropagation();
                                            return _vm.onClickCheckbox(serverId);
                                        }
                                    }
                                }, [
                                    _vm.isInSkipList(serverId, FAData.floorArchi.properties.externalId) ? _c("v-icon", [
                                        _vm._v("check_box_outline_blank")
                                    ]) : _c("v-icon", [
                                        _vm._v("check_box")
                                    ])
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c("v-list-tile-content", [
                                _c("v-list-tile-title", {
                                    staticClass: "spinal-list-tile-title"
                                }, [
                                    _vm._v(_vm._s(_vm.getRoomNameNode(serverId)))
                                ]),
                                _vm._v(" "),
                                _c("v-list-tile-sub-title", {
                                    staticClass: "spinal-list-tile-title"
                                }, [
                                    _vm._v("\n            server id : " + _vm._s(serverId) + "\n          ")
                                ])
                            ], 1)
                        ], 1);
                    }),
                    _vm._v(" "),
                    _vm._l(FAData.diff.diffRoom.newRooms, function(subItem) {
                        return _c("v-list-tile", {
                            key: subItem.properties.externalId,
                            staticClass: "spinal-item-tile spinal-subitem-tile",
                            class: _vm.getColor(subItem.properties.modificationType),
                            on: {
                                "click": function($event) {
                                    return _vm.onSelectRoom(FAData, subItem, "new");
                                }
                            }
                        }, [
                            _c("v-list-tile-action", [
                                _c("v-btn", {
                                    attrs: {
                                        "ripple": "",
                                        "circle": "",
                                        "dense": "",
                                        "icon": "",
                                        "disabled": _vm.isInSkipList(FAData.floorArchi.properties.externalId)
                                    },
                                    on: {
                                        "click": function($event) {
                                            $event.stopPropagation();
                                            return _vm.onClickCheckbox(subItem.properties.externalId);
                                        }
                                    }
                                }, [
                                    _vm.isInSkipList(subItem.properties.externalId, FAData.floorArchi.properties.externalId) ? _c("v-icon", [
                                        _vm._v("check_box_outline_blank")
                                    ]) : _c("v-icon", [
                                        _vm._v("check_box")
                                    ])
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c("v-list-tile-content", [
                                _c("v-list-tile-title", {
                                    staticClass: "spinal-list-tile-title"
                                }, [
                                    _vm._v(_vm._s(_vm.getRoomNameArchi(subItem)))
                                ])
                            ], 1)
                        ], 1);
                    }),
                    _vm._v(" "),
                    _vm._l(FAData.diff.diffRoom.updateRooms, function(subItem) {
                        return _c("v-list-tile", {
                            key: subItem.roomArchi.properties.externalId,
                            staticClass: "spinal-item-tile spinal-subitem-tile",
                            class: _vm.getColor(subItem.roomArchi.properties.modificationType),
                            attrs: {
                                "ripple": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.onSelectRoom(FAData, subItem, "update");
                                }
                            }
                        }, [
                            _c("v-list-tile-action", [
                                _c("v-btn", {
                                    attrs: {
                                        "disabled": _vm.isInSkipList(FAData.floorArchi.properties.externalId),
                                        "ripple": "",
                                        "circle": "",
                                        "dense": "",
                                        "icon": ""
                                    },
                                    on: {
                                        "click": function($event) {
                                            $event.stopPropagation();
                                            return _vm.onClickCheckbox(subItem.roomArchi.properties.externalId);
                                        }
                                    }
                                }, [
                                    _vm.isInSkipList(subItem.roomArchi.properties.externalId, FAData.floorArchi.properties.externalId) ? _c("v-icon", [
                                        _vm._v("check_box_outline_blank")
                                    ]) : _c("v-icon", [
                                        _vm._v("check_box")
                                    ])
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c("v-list-tile-content", [
                                _c("v-list-tile-title", {
                                    staticClass: "spinal-list-tile-title"
                                }, [
                                    _vm._v(_vm._s(_vm.getRoomName(subItem)))
                                ]),
                                _vm._v(" "),
                                _c("v-list-tile-sub-title", {
                                    staticClass: "spinal-list-tile-title"
                                }, [
                                    _vm._v("\n            " + _vm._s(_vm.getSumData(subItem.diff)) + "\n          ")
                                ])
                            ], 1)
                        ], 1);
                    })
                ] : _vm._e()
            ], 2);
        })
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aTQCg":[function() {},{}],"hGW1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecRiZ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "SpinalDiffViewer-container"
    }, [
        _c("div", {
            staticClass: "SpinalDiffViewer-header"
        }, [
            _c("v-btn", {
                attrs: {
                    "dark": "",
                    "round": "",
                    "icon": true
                },
                on: {
                    "click": _vm.closeDialog
                }
            }, [
                _c("v-icon", [
                    _vm._v("close")
                ])
            ], 1),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
                attrs: {
                    "dark": "",
                    "round": "",
                    "icon": true
                },
                on: {
                    "click": _vm.generate
                }
            }, [
                _c("v-icon", [
                    _vm._v("check")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "SpinalDiffViewer-content spinal-scrollbar"
        }, [
            _c("SpinalDiffFloorViewer", {
                attrs: {
                    "archiData": _vm.archiData
                },
                on: {
                    "pushSkip": _vm.pushSkip,
                    "rmAtSkip": _vm.rmAtSkip
                },
                model: {
                    value: _vm.skipList,
                    callback: function($$v) {
                        _vm.skipList = $$v;
                    },
                    expression: "skipList"
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2U49e":[function() {},{}],"efTFD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7MmiY":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _cmdRunViewerVue = require("./CmdRunViewer.vue");
var _cmdRunViewerVueDefault = parcelHelpers.interopDefault(_cmdRunViewerVue);
const { SpinalMountExtention } = require("20647ea93723c889");
function getDomElemWithClassNameRetry() {
    return new Promise((resolve)=>{
        const inter = setInterval(()=>{
            const dom = document.body;
            if (dom) {
                clearInterval(inter);
                resolve(dom);
            }
        }, 100);
    });
}
getDomElemWithClassNameRetry().then((domElement)=>{
    // include in div with class="plugin-graph-viewer"
    // a diff viewer
    SpinalMountExtention.mount({
        // name registered.
        name: "CmdRunViewer",
        // Vue.extend to create a Compoment constructor
        vueMountComponent: (0, _vueDefault.default).extend((0, _cmdRunViewerVueDefault.default)),
        // where to  append the Compoment
        parentContainer: domElement
    });
});

},{"vue":"gt5MM","20647ea93723c889":"7Uw4d","./CmdRunViewer.vue":"kDIqY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kDIqY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3ec81a0ac00a02a3");
    if (script.__esModule) script = script.default;
    script.render = require("cc9bd09bff684564").render;
    script.staticRenderFns = require("cc9bd09bff684564").staticRenderFns;
    script._scopeId = "data-v-aa1888";
    require("af7da5013f42ffaf").default(script);
    script.__scopeId = "data-v-aa1888";
    script.__file = "CmdRunViewer.vue";
};
initialize();
exports.default = script;

},{"3ec81a0ac00a02a3":"b6Pfu","cc9bd09bff684564":"i6Mp4","af7da5013f42ffaf":"d1nTT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6Pfu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _cmdRunViewerGeoVue = require("./CmdRunViewerGeo.vue");
var _cmdRunViewerGeoVueDefault = parcelHelpers.interopDefault(_cmdRunViewerGeoVue);
var _cmdRunViewerProjectionVue = require("./CmdRunViewerProjection.vue");
var _cmdRunViewerProjectionVueDefault = parcelHelpers.interopDefault(_cmdRunViewerProjectionVue);
const CmdRunViewer = {
    name: "CmdRunViewer",
    props: [
        "onFinised"
    ],
    components: {
        CmdRunViewerGeo: (0, _cmdRunViewerGeoVueDefault.default),
        CmdRunViewerProjection: (0, _cmdRunViewerProjectionVueDefault.default)
    },
    data () {
        return {
            GENERATION_GEO_TYPE: (0, _spinalSpatialReferential.GENERATION_GEO_TYPE),
            GENERATION_PROJECTION_TYPE: (0, _spinalSpatialReferential.GENERATION_PROJECTION_TYPE),
            showDialog: true,
            loading: false,
            mode: "",
            status: 0,
            snackbarError: false,
            snackbarMessage: ""
        };
    },
    methods: {
        async opened (option) {
            if (option) {
                this.showDialog = true;
                this.status = 0;
                let node;
                if (option.selectedNodeId) node = (0, _spinalSpatialReferential.getRealNode)(option.selectedNodeId);
                else node = option.node;
                this.mode = node.info.generationType.get();
                try {
                    this.loading = true;
                    if (this.mode === (0, _spinalSpatialReferential.GENERATION_GEO_TYPE)) await this.$refs.CmdRunViewerGeo.setUp(node, option.contextId);
                    else if (this.mode === (0, _spinalSpatialReferential.GENERATION_PROJECTION_TYPE)) await this.$refs.CmdRunViewerProjection.setUp(node, option.contextId);
                } catch (error) {
                    console.error(error);
                    this.snackbarError = true;
                    this.snackbarMessage = error;
                } finally{
                    this.loading = false;
                }
            } else {
                this.snackbarError = true;
                this.snackbarMessage = "CmdRunViewer opened without an option";
                console.error("CmdRunViewer opened without an option");
            }
        },
        async start () {
            this.loading = true;
            try {
                if (this.mode === (0, _spinalSpatialReferential.GENERATION_GEO_TYPE)) await this.$refs.CmdRunViewerGeo.start.call(this.$refs.CmdRunViewerGeo);
                else if (this.mode === (0, _spinalSpatialReferential.GENERATION_PROJECTION_TYPE)) await this.$refs.CmdRunViewerProjection.start.call(this.$refs.CmdRunViewerProjection);
            } catch (error) {
                console.error(error);
                this.snackbarError = true;
                this.snackbarMessage = "Generation Error, please retry";
            } finally{
                this.loading = false;
                this.closeDialog();
            }
        },
        getStatus () {
            switch(this.status){
                case 1:
                    return "1/2 - running...";
                case 2:
                    return "2/2 - checking";
                case 3:
                    return "done";
                case 4:
                    return "error";
                default:
                    return "stand by";
            }
        },
        removed (option) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised();
        }
    },
    watch: {
        showDialog () {
            if (this.showDialog === false) this.closeDialog();
        }
    }
};
var scriptExports = CmdRunViewer;
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","./CmdRunViewerGeo.vue":"eKF87","./CmdRunViewerProjection.vue":"3E61m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKF87":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4639a0bb0e3620be");
    if (script.__esModule) script = script.default;
    script.render = require("63888420c3bb5afb").render;
    script.staticRenderFns = require("63888420c3bb5afb").staticRenderFns;
    script._scopeId = "data-v-de44a9";
    script.__cssModules = require("bab77301b9884030").default;
    require("f4b6b623a7769e2d").default(script);
    script.__scopeId = "data-v-de44a9";
    script.__file = "CmdRunViewerGeo.vue";
};
initialize();
exports.default = script;

},{"4639a0bb0e3620be":"irk7s","63888420c3bb5afb":"1wmKv","bab77301b9884030":"dRJDs","f4b6b623a7769e2d":"zBYIH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irk7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var scriptExports = {
    name: "CmdRunViewerGeo",
    props: [],
    data () {
        return {
            cmdLen: [],
            indexCmd: 0,
            idxInCmd: 0,
            status: 0
        };
    },
    watch: {
        status (value) {
            this.$emit("status", value);
        }
    },
    methods: {
        async setUp (node, contextId) {
            this.indexCmd = 0;
            this.idxInCmd = 0;
            this.status = 0;
            this.nodeId = node.info.id.get();
            this.contextId = contextId;
            const servId = (0, _spinalSpatialReferential.getCmdServId)(node);
            const getData = await (0, _axiosDefault.default).get(`/sceen/_?u=${servId}`, {
                responseType: "blob"
            });
            const arrayBuffer = await getData.data.arrayBuffer();
            this.dataCmd = (0, _spinalSpatialReferential.decodeCmds)(arrayBuffer);
            this.cmdLen = this.dataCmd.map((it)=>it.length);
            console.log("this.dataCmd", this.dataCmd, this.cmdLen);
        },
        async start () {
            try {
                this.status = 1;
                console.log("dataCmdRes", this.dataCmd);
                await (0, _spinalSpatialReferential.consumeCmdGeo)(this.dataCmd, this.nodeId, this.contextId, this.progress);
                this.status = 2;
                console.log("doing 2nd pass");
                await (0, _spinalSpatialReferential.consumeCmdGeo)(this.dataCmd, this.nodeId, this.contextId, this.progress);
                this.status = 3;
            } catch (error) {
                this.status = 4;
                throw error;
            }
        },
        progress (indexCmd, idxInCmd) {
            this.indexCmd = indexCmd;
            this.idxInCmd = idxInCmd;
            console.log(`${indexCmd + 1}/${this.cmdLen.length} => ${idxInCmd}/${this.cmdLen[indexCmd]}`);
        },
        getProgress (index) {
            if (this.status === 3) return 100;
            if (this.status === 1 || this.status === 2) {
                if (this.indexCmd < index) return 0;
                if (this.indexCmd > index) return 100;
                return this.idxInCmd / this.cmdLen[index] * 100;
            }
            return 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wmKv":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", _vm._l(_vm.cmdLen.length, function(index) {
        return _c("md-progress-bar", {
            key: index,
            staticClass: "command-run-progress-bar",
            attrs: {
                "md-mode": "determinate",
                "md-value": _vm.getProgress(index)
            }
        });
    }), 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dRJDs":[function() {},{}],"zBYIH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3E61m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8dd97ee1a5ade65e");
    if (script.__esModule) script = script.default;
    script.render = require("b1518935342ae186").render;
    script.staticRenderFns = require("b1518935342ae186").staticRenderFns;
    script._scopeId = "data-v-a61f7a";
    script.__cssModules = require("1f53f0213e11cd01").default;
    require("d651bfdd22ae5d64").default(script);
    script.__scopeId = "data-v-a61f7a";
    script.__file = "CmdRunViewerProjection.vue";
};
initialize();
exports.default = script;

},{"8dd97ee1a5ade65e":"feNKp","b1518935342ae186":"aDweT","1f53f0213e11cd01":"fWiUJ","d651bfdd22ae5d64":"1zrWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"feNKp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var scriptExports = {
    name: "CmdRunViewerProjection",
    props: [],
    data () {
        return {
            progress: 0,
            nodeId: "",
            contextId: ""
        };
    },
    methods: {
        async setUp (node, contextId) {
            this.$emit("status", 0);
            this.progress = 0;
            this.nodeId = node.info.id.get();
            this.contextId = contextId;
            const servId = (0, _spinalSpatialReferential.getCmdServId)(node);
            const getData = await (0, _axiosDefault.default).get(`/sceen/_?u=${servId}`, {
                responseType: "blob"
            });
            const arrayBuffer = await getData.data.arrayBuffer();
            this.dataCmd = (0, _spinalSpatialReferential.decodeCmds)(arrayBuffer);
            console.log("this.dataCmd", this.dataCmd);
        },
        async start () {
            try {
                this.$emit("status", 1);
                this.progress = 0;
                console.log("dataCmdRes", this.dataCmd);
                await (0, _spinalSpatialReferential.consumeCmdProjection)(this.dataCmd, this.nodeId, this.contextId, this.onProgress);
                this.$emit("status", 2);
                console.log("doing 2nd pass");
                await (0, _spinalSpatialReferential.consumeCmdProjection)(this.dataCmd, this.nodeId, this.contextId, this.onProgress);
                this.$emit("status", 3);
            } catch (error) {
                this.$emit("status", 4);
                throw error;
            }
        },
        onProgress (percent) {
            console.log("onProgress => %d %", percent);
            this.progress = percent;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDweT":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-progress-bar", {
            staticClass: "command-run-progress-bar",
            attrs: {
                "md-mode": "determinate",
                "md-value": _vm.progress
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fWiUJ":[function() {},{}],"1zrWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6Mp4":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        attrs: {
            "md-active": _vm.showDialog,
            "md-close-on-esc": !_vm.loading,
            "md-click-outside-to-close": !_vm.loading
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            }
        }
    }, [
        _c("md-dialog-title", [
            _vm._v("Command Run")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("p", [
                _vm._v("status: " + _vm._s(_vm.getStatus()))
            ]),
            _vm._v(" "),
            _c("CmdRunViewerGeo", {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: this.mode === _vm.GENERATION_GEO_TYPE,
                        expression: "this.mode === GENERATION_GEO_TYPE"
                    }
                ],
                ref: "CmdRunViewerGeo",
                on: {
                    "status": function($event) {
                        _vm.status = $event.target;
                    }
                }
            }),
            _vm._v(" "),
            _c("CmdRunViewerProjection", {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: this.mode === _vm.GENERATION_PROJECTION_TYPE,
                        expression: "this.mode === GENERATION_PROJECTION_TYPE"
                    }
                ],
                ref: "CmdRunViewerProjection",
                on: {
                    "status": function($event) {
                        _vm.status = $event.target;
                    }
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.loading
                },
                on: {
                    "click": function($event) {
                        _vm.showDialog = false;
                    }
                }
            }, [
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.loading
                },
                on: {
                    "click": _vm.start
                }
            }, [
                _vm._v("Start")
            ])
        ], 1),
        _vm._v(" "),
        _c("md-snackbar", {
            attrs: {
                "md-position": "left",
                "md-duration": 4000,
                "md-active": _vm.snackbarError,
                "md-persistent": ""
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.snackbarError = $event;
                },
                "update:md-active": function($event) {
                    _vm.snackbarError = $event;
                }
            }
        }, [
            _c("span", [
                _vm._v(" Error: " + _vm._s(_vm.snackbarMessage))
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        _vm.snackbarError = false;
                    }
                }
            }, [
                _vm._v("Close")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"d1nTT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fx696":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _spinalMergeBimGeoVue = require("./SpinalMergeBimGeo.vue");
var _spinalMergeBimGeoVueDefault = parcelHelpers.interopDefault(_spinalMergeBimGeoVue);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _spinalSpatialReferentialDefault = parcelHelpers.interopDefault(_spinalSpatialReferential);
const { spinalPanelManagerService } = require("f38011019a029ce9");
// REGISTER PANEL
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("SpinalMergeBimGeo", (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "SpinalMergeBimGeo",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _spinalMergeBimGeoVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body,
    panel: {
        title: "Spatial context builder",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "405px",
        width: "700px",
        height: "250px"
    }
}));
// REGISTER BUTTON
const LABEL = "Merge Bim Geographic";
class ManualAssingmentButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super(LABEL, LABEL, {
            icon: "location_city",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _spinalSpatialReferentialDefault.default).constants.GEO_CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("SpinalMergeBimGeo", {
            contextId: option.context.id.get(),
            selectedNodeId: option.selectedNode.id.get()
        });
    }
}
const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new ManualAssingmentButton(), [
    7
]);

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./SpinalMergeBimGeo.vue":"6z58w","spinal-env-viewer-context-menu-service":"kHlxv","f38011019a029ce9":"7Uw4d","spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z58w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f8d894cf9ec02cf");
    if (script.__esModule) script = script.default;
    script.render = require("527aaf6c8ed0ff1b").render;
    script.staticRenderFns = require("527aaf6c8ed0ff1b").staticRenderFns;
    script._scopeId = "data-v-45152e";
    script.__cssModules = require("1c2d5ae62d500295").default;
    require("3e7c781798feedc9").default(script);
    script.__scopeId = "data-v-45152e";
    script.__file = "SpinalMergeBimGeo.vue";
};
initialize();
exports.default = script;

},{"f8d894cf9ec02cf":"kmmSa","527aaf6c8ed0ff1b":"f9CW9","1c2d5ae62d500295":"f1D0r","3e7c781798feedc9":"2DfpD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmmSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalSpatialReferential = require("spinal-spatial-referential");
var _spinalSpatialReferentialDefault = parcelHelpers.interopDefault(_spinalSpatialReferential);
var scriptExports = {
    name: "SpinalMergeBimGeo",
    data () {
        return {
            geoContextId: "",
            canGenerate: false,
            spatialTree: [],
            activeSpatial: [],
            bimGeoTree: [],
            activeBim: [],
            openDialogNewBuilding: false,
            newBuildingValue: "",
            openDialogNewFloor: false,
            newFloorValue: "",
            openDialogFloorDelete: false
        };
    },
    computed: {
        selectedSpatial () {
            return this.activeSpatial[0];
        }
    },
    methods: {
        async initSpatialTree () {
            this.spatialTree = await (0, _spinalSpatialReferential.getMergeSpatialTree)(this.geoContextId);
            this.bimGeoTree = await (0, _spinalSpatialReferential.getMergeBimGeoTrees)(this.spatialTree);
            setImmediate(()=>{
                this.$refs.spatialTree.updateAll(true);
                this.$refs.bimGeoTree.updateAll(true);
            });
        },
        canShowAddBuilding (item) {
            return item.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_CONTEXT_TYPE;
        },
        canShowAddFloor (item) {
            return item.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_BUILDING_TYPE;
        },
        canShowRemoveFloor (item) {
            return item.type === (0, _spinalSpatialReferential.BIM_GEO_FLOOR_PART_TYPE) && item.status !== 2 || item.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_FLOOR_TYPE && item.status === 1;
        },
        canShowAddBimFloor (item) {
            return this.selectedSpatial && this.selectedSpatial.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_FLOOR_TYPE && item.type === (0, _spinalSpatialReferential.BIM_GEO_FLOOR_PART_TYPE) && item.status === 0 && item.inGeoContext !== true;
        },
        onClickAddItemGeo (item) {
            this.activeSpatial = [
                item
            ];
            if (item.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_CONTEXT_TYPE) this.openDialogNewBuilding = true;
            else this.openDialogNewFloor = true;
        },
        onAcceptNewBuilding (value) {
            (0, _spinalSpatialReferential.spatialTreeCreateBuilding)(this.selectedSpatial, value, this.geoContextId);
            this.newBuildingValue = "";
            setImmediate(()=>{
                this.$refs.spatialTree.updateAll(true);
            });
        },
        onAcceptNewFloor (value) {
            (0, _spinalSpatialReferential.spatialTreeCreateFloor)(this.selectedSpatial, value, this.geoContextId);
            this.newFloorValue = "";
            setImmediate(()=>{
                this.$refs.spatialTree.updateAll(true);
            });
        },
        onClickRemoveItem (item) {
            this.activeSpatial = [
                item
            ];
            this.openDialogFloorDelete = true;
        },
        onConfimRemove () {
            (0, _spinalSpatialReferential.removeBimFloor)(this.spatialTree, this.selectedSpatial);
            if (this.selectedSpatial.type === (0, _spinalSpatialReferentialDefault.default).constants.GEO_FLOOR_TYPE) this.activeSpatial = [];
        },
        onClickAddBimFloor (item) {
            this.activeBim = [
                item
            ];
            this.onConfimLinkBimFloor();
        },
        onConfimLinkBimFloor () {
            (0, _spinalSpatialReferential.addBimFloorToFloor)(this.selectedSpatial, this.activeBim[0]);
            setImmediate(()=>{
                this.$refs.spatialTree.updateAll(true);
            });
        },
        async onGenerateClick () {
            const cmds = await (0, _spinalSpatialReferential.mergeBimGeoCreateCmd)(this.spatialTree);
            console.log("cmd", cmds);
            const { node, context, data } = await (0, _spinalSpatialReferential.saveCmdsGenerateGeo)(cmds);
            (0, _spinalSpatialReferential.addNodeGraphService)(node);
            await (0, _spinalSpatialReferential.waitPathSendToHub)(data);
            spinal.spinalPanelManagerService.openPanel("CmdRunViewer", {
                dataCmd: cmds,
                node,
                contextId: context.info.id.get()
            });
        },
        showJSON (json) {
            return JSON.stringify(json, null, 2);
        },
        opened (option) {
            this.geoContextId = option.selectedNodeId;
            return this.initSpatialTree();
        },
        removed () {},
        close () {},
        closeDialog () {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-spatial-referential":"avADC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9CW9":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "SpinalMergeBimGeo-main"
    }, [
        _c("div", {
            staticClass: "SpinalMergeBimGeo-container SpinalMergeBimGeo-scrollbar"
        }, [
            _c("div", {
                staticClass: "SpinalMergeBimGeo-content-left"
            }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", {
                    staticClass: "SpinalMergeBimGeo-content SpinalMergeBimGeo-scrollbar"
                }, [
                    _c("v-treeview", {
                        ref: "spatialTree",
                        attrs: {
                            "dark": "",
                            "activatable": "",
                            "hoverable": "",
                            "open-all": true,
                            "active-class": "SpinalMergeBimGeo-selection-active",
                            "items": _vm.spatialTree,
                            "active": _vm.activeSpatial,
                            "return-object": ""
                        },
                        on: {
                            "update:active": function($event) {
                                _vm.activeSpatial = $event;
                            }
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "append",
                                fn: function(ref) {
                                    var item = ref.item;
                                    return [
                                        _vm.canShowAddBuilding(item) || _vm.canShowAddFloor(item) ? _c("v-btn", {
                                            attrs: {
                                                "flat": "",
                                                "icon": "",
                                                "small": ""
                                            },
                                            on: {
                                                "click": function($event) {
                                                    $event.stopPropagation();
                                                    return _vm.onClickAddItemGeo(item);
                                                }
                                            }
                                        }, [
                                            _c("v-icon", [
                                                _vm._v("add")
                                            ])
                                        ], 1) : _vm.canShowRemoveFloor(item) ? _c("v-btn", {
                                            attrs: {
                                                "flat": "",
                                                "small": "",
                                                "icon": "",
                                                "color": "#ffb1ac"
                                            },
                                            on: {
                                                "click": function($event) {
                                                    $event.stopPropagation();
                                                    return _vm.onClickRemoveItem(item);
                                                }
                                            }
                                        }, [
                                            _c("v-icon", [
                                                _vm._v("delete")
                                            ])
                                        ], 1) : _vm._e()
                                    ];
                                }
                            },
                            {
                                key: "prepend",
                                fn: function(ref) {
                                    var item = ref.item;
                                    return [
                                        item.status === 2 || item.status === 3 ? _c("v-icon", {
                                            attrs: {
                                                "flat": "",
                                                "small": "",
                                                "color": "#ffb1ac"
                                            }
                                        }, [
                                            _vm._v("delete")
                                        ]) : item.status === 1 ? _c("v-icon", {
                                            attrs: {
                                                "flat": "",
                                                "small": "",
                                                "color": "#63f669"
                                            }
                                        }, [
                                            _vm._v("fiber_new")
                                        ]) : _vm._e()
                                    ];
                                }
                            }
                        ])
                    })
                ], 1)
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "SpinalMergeBimGeo-content-right"
            }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "SpinalMergeBimGeo-content SpinalMergeBimGeo-scrollbar"
                }, [
                    _c("v-treeview", {
                        ref: "bimGeoTree",
                        attrs: {
                            "dark": "",
                            "activatable": "",
                            "small": "",
                            "hoverable": "",
                            "open-all": true,
                            "items": _vm.bimGeoTree,
                            "active": _vm.activeBim,
                            "return-object": ""
                        },
                        on: {
                            "update:active": function($event) {
                                _vm.activeBim = $event;
                            }
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "append",
                                fn: function(ref) {
                                    var item = ref.item;
                                    return [
                                        _vm.canShowAddBimFloor(item) ? _c("v-btn", {
                                            staticClass: "SpinalMergeBimGeo-tree-button",
                                            attrs: {
                                                "small": "",
                                                "flat": "",
                                                "icon": ""
                                            },
                                            on: {
                                                "click": function($event) {
                                                    $event.stopPropagation();
                                                    return _vm.onClickAddBimFloor(item);
                                                }
                                            }
                                        }, [
                                            _c("v-icon", [
                                                _vm._v("add")
                                            ])
                                        ], 1) : _vm._e()
                                    ];
                                }
                            },
                            {
                                key: "prepend",
                                fn: function(ref) {
                                    var item = ref.item;
                                    return [
                                        item.status === 1 ? _c("v-icon", {
                                            attrs: {
                                                "flat": "",
                                                "small": "",
                                                "color": "#63f669"
                                            }
                                        }, [
                                            _vm._v("label_important_outline")
                                        ]) : item.status === 2 ? _c("v-icon", {
                                            attrs: {
                                                "flat": "",
                                                "small": "",
                                                "color": "#ffb1ac"
                                            }
                                        }, [
                                            _vm._v("label_off")
                                        ]) : item.inGeoContext === true ? _c("v-icon", {
                                            attrs: {
                                                "flat": "",
                                                "small": ""
                                            }
                                        }, [
                                            _vm._v("label")
                                        ]) : _vm._e()
                                    ];
                                }
                            }
                        ])
                    })
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "SpinalMergeBimGeo-action-bar"
        }, [
            _c("v-spacer"),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.canGenerate
                },
                on: {
                    "click": _vm.onGenerateClick
                }
            }, [
                _vm._v("Generate")
            ])
        ], 1),
        _vm._v(" "),
        _c("md-dialog-prompt", {
            attrs: {
                "md-active": _vm.openDialogNewBuilding,
                "md-title": "building name",
                "md-input-maxlength": "100",
                "md-input-placeholder": "Type the building name...",
                "md-confirm-text": "Confirm"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.openDialogNewBuilding = $event;
                },
                "update:md-active": function($event) {
                    _vm.openDialogNewBuilding = $event;
                },
                "md-confirm": function($event) {
                    return _vm.onAcceptNewBuilding(_vm.newBuildingValue);
                }
            },
            model: {
                value: _vm.newBuildingValue,
                callback: function($$v) {
                    _vm.newBuildingValue = $$v;
                },
                expression: "newBuildingValue"
            }
        }),
        _vm._v(" "),
        _c("md-dialog-prompt", {
            attrs: {
                "md-active": _vm.openDialogNewFloor,
                "md-title": "Floor name",
                "md-input-maxlength": "100",
                "md-input-placeholder": "Type the floor name...",
                "md-confirm-text": "Confirm"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.openDialogNewFloor = $event;
                },
                "update:md-active": function($event) {
                    _vm.openDialogNewFloor = $event;
                },
                "md-confirm": function($event) {
                    return _vm.onAcceptNewFloor(_vm.newFloorValue);
                }
            },
            model: {
                value: _vm.newFloorValue,
                callback: function($$v) {
                    _vm.newFloorValue = $$v;
                },
                expression: "newFloorValue"
            }
        }),
        _vm._v(" "),
        _c("md-dialog-confirm", {
            attrs: {
                "md-active": _vm.openDialogFloorDelete,
                "md-title": "Remove Floor",
                "md-confirm-text": "Confim",
                "md-cancel-text": "Cancel"
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.openDialogFloorDelete = $event;
                },
                "update:md-active": function($event) {
                    _vm.openDialogFloorDelete = $event;
                },
                "md-cancel": function($event) {
                    _vm.openDialogFloorDelete = false;
                },
                "md-confirm": _vm.onConfimRemove
            }
        })
    ], 1);
};
var staticRenderFns = [
    function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "SpinalMergeBimGeo-content-header"
        }, [
            _c("h3", [
                _vm._v("Spatial Context")
            ])
        ]);
    },
    function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", {
            staticClass: "SpinalMergeBimGeo-content-header"
        }, [
            _c("h3", [
                _vm._v("Bim Geo Context(s)")
            ])
        ]);
    }
];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"f1D0r":[function() {},{}],"2DfpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsnTF":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BIMElement = exports.AbstractElement = undefined;
var _AbstractElement = require("19df3b4b51028d49");
var _AbstractElement2 = _interopRequireDefault(_AbstractElement);
var _BIMElement = require("77b24a79bb80029a");
var _BIMElement2 = _interopRequireDefault(_BIMElement);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const spinalCore = require("294f8484813eef1b");
const globalType = typeof window === "undefined" ? global : window;
exports.AbstractElement = _AbstractElement2.default;
exports.BIMElement = _BIMElement2.default;

},{"19df3b4b51028d49":"d91KA","77b24a79bb80029a":"irx1v","294f8484813eef1b":"2uyD7"}],"d91KA":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Utilities = require("219bd63e96dc8d9");
const spinalCore = require("f4839373ca56abfb");
const globalType = typeof window === "undefined" ? global : window;
class AbstractElement extends globalType.Model {
    constructor(_name, _type, name = "AbstractElement"){
        super();
        if (FileSystem._sig_server) this.add_attr({
            name: _name,
            id: _Utilities.Utilities.guid(name),
            type: _type
        });
    }
    setName(_name) {
        this.name.set(_name);
    }
}
exports.default = AbstractElement;
spinalCore.register_models([
    AbstractElement
]);

},{"219bd63e96dc8d9":"8XE2J","f4839373ca56abfb":"2uyD7"}],"8XE2J":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
let Utilities = {};
const globalType = typeof window === "undefined" ? global : window;
Utilities.getViewer = function() {
    return new Promise((resolve, reject)=>{
        if (globalType.v === "undefined") {
            let interval = setInterval(()=>{
                if (globalType.v !== "undefined") {
                    resolve(globalType.v);
                    clearInterval(interval);
                }
            }, 500);
        } else resolve(globalType.v);
    });
};
Utilities.promiseGetProperties = function(_dbId) {
    return new Promise((resolve)=>{
        Utilities.getViewer().then((viewer)=>{
            viewer.getProperties(_dbId, resolve);
        });
    });
};
Utilities.promiseGetExternalIdMapping = function(_externalId) {
    return new Promise((resolve)=>{
        Utilities.getViewer().then((viewer)=>{
            viewer.model.getExternalIdMapping((res)=>{
                resolve(res[_externalId]);
            });
        });
    });
};
// Utilities.promiseLoad = function(_ptr) {
//   return new Promise(resolve => {
//     _ptr.load(resolve);
//   });
// }
Utilities.promiseLoad = function(_ptr) {
    if (_ptr instanceof globalType.Ptr && _ptr.data.value != 0 && typeof FileSystem._objects[_ptr.data.value] != "undefined") return Promise.resolve(FileSystem._objects[_ptr.data.value]);
    else return new Promise((resolve)=>{
        _ptr.load(resolve);
    });
};
Utilities.getExternalId = (()=>{
    var _ref = _asyncToGenerator(function*(_dbId) {
        let properties = yield Utilities.promiseGetProperties(_dbId);
        return properties.externalId;
    });
    return function(_x) {
        return _ref.apply(this, arguments);
    };
})();
Utilities.getDbIdByExternalId = (()=>{
    var _ref2 = _asyncToGenerator(function*(_externalId) {
        let dbid = yield Utilities.promiseGetExternalIdMapping(_externalId);
        return dbid;
    });
    return function(_x2) {
        return _ref2.apply(this, arguments);
    };
})();
Utilities.arraysEqual = function(arrayA, arrayB) {
    if (arrayA === arrayB) return true;
    if (arrayA == null || arrayB == null) return false;
    if (arrayA.length != arrayB.length) return false;
    arrayA.sort();
    arrayB.sort();
    for(var i = 0; i < arrayA.length; ++i){
        if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
};
Utilities.containsLstById = function(_list, _node) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.id.get() == _node.id.get()) return true;
    }
    return false;
};
Utilities.containsLstModel = function(_list, _model) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.get() == _model.get()) return true;
    }
    return false;
};
Utilities.containsLst = function(_list, _element) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.get() == _element) return true;
    }
    return false;
};
Utilities.include = function(arr, obj) {
    return arr.indexOf(obj) != -1;
};
Utilities.getIndex = function(arr, obj) {
    return arr.indexOf(obj);
};
Utilities.getIds = function(array) {
    let res = [];
    for(let index = 0; index < array.length; index++)res.push(array[index].id.get());
    return res;
};
// Utilities.addNotExisting = function(arr, obj) {
//   return (arr.indexOf(obj));
// }
Utilities.concat = function(listA, listB) {
    let res = [];
    for(let index = 0; index < listA.length; index++)res.push(listA[index]);
    for(let index = 0; index < listB.length; index++)res.push(listB[index]);
    return res;
};
Utilities.allButMeById = function(_list, _node) {
    let res = [];
    for(let index = 0; index < _list.length; index++){
        const node = _list[index];
        if (node.id.get() != _node.id.get()) res.push(node);
        return res;
    }
};
Utilities.guid = function(_constructor) {
    return _constructor + "-" + this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4() + "-" + Date.now().toString(16);
};
Utilities.s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
Utilities.putOnTopLst = function(lst, elementB) {
    lst.remove_ref(elementB);
    lst.unshift(elementB);
// for (let index = 0; index < lst.length; index++) {
//   const element = lst[index];
//   if (element.id.get() === elementB.id.get()) {
//     lst.remove(index);
//   }
// }
};
exports.Utilities = Utilities;

},{}],"irx1v":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _spinalModelsBimobject = require("83eb36b83bc3848a");
var _spinalModelsBimobject2 = _interopRequireDefault(_spinalModelsBimobject);
var _Utilities = require("d1acada118764380");
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
const spinalCore = require("ee3a3f95aba74422");
const globalType = typeof window === "undefined" ? global : window;
class BIMElement extends _spinalModelsBimobject2.default {
    constructor(_id, _name, _type, name = "BIMElement"){
        super(_id, _name, 0);
        if (FileSystem._sig_server) this.add_attr({
            type: _type || "BimObject",
            externalId: ""
        });
    }
    initExternalId() {
        _Utilities.Utilities.getExternalId(this.id.get()).then((_externalId)=>{
            this.externalId.set(_externalId);
        });
    }
    initExternalIdAsync() {
        var _this = this;
        return _asyncToGenerator(function*() {
            let _externalId = yield _Utilities.Utilities.getExternalId(_this.id.get());
            _this.externalId.set(_externalId);
        })();
    }
    setName(_name) {
        this.name.set(_name);
    }
    toIfc() {
        return `${this.constructor.name}(${this.id.get()},${this.name.get()});`;
    }
}
exports.default = BIMElement;
spinalCore.register_models([
    BIMElement
]);

},{"83eb36b83bc3848a":"3Ibtq","d1acada118764380":"8XE2J","ee3a3f95aba74422":"2uyD7"}],"3Ibtq":[function(require,module,exports) {
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

},{"e30868c801f59ada":"2uyD7"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-generate-spatial-reference.e9351a22.js.map
