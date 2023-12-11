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
})({"4j68z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _selection = require("./js/selection");
var _selectionDefault = parcelHelpers.interopDefault(_selection);
var _createToolbar = require("./js/createToolbar");
var _createToolbarDefault = parcelHelpers.interopDefault(_createToolbar);
const TOOLBAR_GROUP_NAME = "spinalcom";
const EXTENSION_NAME = "spinal-window-selection";
let extension;
// document.addEventListener('keydown', function(event) {
//   extension = typeof extension === "undefined" ? window.spinal.ForgeViewer
//     .viewer
//     .getExtension(extensionName) : extension;
//   if (event.altKey && event.ctrlKey) {
//     extension.startSelection();
//   }
// })
// document.addEventListener('keyup', function(event) {
//   if (typeof extension !== "undefined" && (event.keyCode === 17 || event
//       .keyCode === 18)) {
//     extension.disableSelectionMode();
//   }
// })
const windowSelection = (0, _createToolbarDefault.default)({
    name: "spinal-window-selection",
    icon: "crop_free",
    label: "window selection",
    subToolbarName: TOOLBAR_GROUP_NAME
}, ()=>{
    extension = typeof extension === "undefined" ? window.spinal.ForgeViewer.viewer.getExtension((0, _selectionDefault.default)) : extension;
    if (!extension.active) extension.startSelection();
    else extension.disableSelectionMode();
});
window.Autodesk.Viewing.theExtensionManager.registerExtension(EXTENSION_NAME, windowSelection);
window.spinal.ForgeExtentionManager.addExtention(EXTENSION_NAME);

},{"./js/selection":"5UrJW","./js/createToolbar":"6t91Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UrJW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewingExtensionSelectionWindowTool = require("../extensions/Viewing.Extension.SelectionWindow.Tool");
var _viewingExtensionSelectionWindowToolDefault = parcelHelpers.interopDefault(_viewingExtensionSelectionWindowTool);
// import Toolkit from '../extensions/viewer.toolkit';
// import MultiModelExtensionBase from '../extensions/Viewer.MultiModelExtensionBase';
class SelectionComponent {
    constructor(viewer){
        this.viewer = viewer;
    }
    load() {
        this.selection = null;
        this.active = false;
        // this.viewer.loadExtension(
        //   'Viewing.Extension.ContextMenu', {
        //     buildMenu: (menu) => {
        //       return menu.map((item) => {
        //         const title = item.title.toLowerCase()
        //         if (title === 'show all objects') {
        //           return {
        //             title: 'Show All objects',
        //             target: () => {
        //               Toolkit.isolateFull(this.viewer)
        //               this.viewer.fitToView()
        //             }
        //           }
        //         }
        //         return item
        //       })
        //     }
        //   })
        this.onModelRootLoaded();
        this.onModelActivated(this.viewer);
        return true;
    }
    get className() {
        return "selection-window";
    }
    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////
    static get ExtensionId() {
        return "Viewing.Extension.SelectionWindow";
    }
    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////
    unload() {
        this.selectionWindowTool.off();
        super.unload();
        return true;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    onModelRootLoaded() {
        this.selectionWindowTool = new (0, _viewingExtensionSelectionWindowToolDefault.default)(this.viewer);
        this.selectionWindowTool.on("deactivate", ()=>{
            this.active = false;
        });
        this.selectionWindowTool.on("activate", ()=>{
            this.active = true;
        });
        this.selectionWindowTool.on("selection", (selection)=>{
            this.viewer.impl.selector.setSelection(selection.dbIds, selection.model);
            this.selection = selection;
        });
        this.viewer.addEventListener(window.Autodesk.Viewing.VIEWER_INITIALIZED, ()=>{
            this.viewer.toolController.registerTool(this.selectionWindowTool);
        });
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    onModelActivated(event) {
        this.selectionWindowTool.setModel(event.model);
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    setPartialSelect(partialSelect) {
        this.selectionWindowTool.setPartialSelect(partialSelect);
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    startSelection() {
        this.selection = null;
        this.viewer.toolController.activateTool(this.selectionWindowTool.getName());
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    disableSelectionMode() {
        this.selectionWindowTool.deactivate();
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    onNodeClicked(node) {
        const model = node.model;
        if (model) switch(node.type){
            case "component":
                this.viewer.impl.selector.setSelection([
                    node.id
                ], model);
                break;
            case "root":
                this.viewer.impl.selector.setSelection(node.props.childIds, model);
                break;
        }
    }
}
window.Autodesk.Viewing.theExtensionManager.registerExtension(SelectionComponent.ExtensionId, SelectionComponent);
window.spinal.ForgeExtentionManager.addExtention("Viewing.Extension.SelectionWindow");
exports.default = "Viewing.Extension.SelectionWindow";

},{"../extensions/Viewing.Extension.SelectionWindow.Tool":"d7Kbe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7Kbe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _selectionExtension = require("./selectionExtension");
var _selectionExtensionDefault = parcelHelpers.interopDefault(_selectionExtension);
var _eventsEmitter = require("./EventsEmitter");
var _eventsEmitterDefault = parcelHelpers.interopDefault(_eventsEmitter);
var _cursors = require("./cursors");
var _cursorsDefault = parcelHelpers.interopDefault(_cursors);
var _CROSS_MAX_WIDTH = 20;
class SelectionWindowTool extends (0, _eventsEmitterDefault.default) {
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    constructor(viewer){
        super();
        this.onResize = this.onResize.bind(this);
        this.selectSet = new (0, _selectionExtensionDefault.default)(viewer);
        this.partialSelect = false;
        this.materialLine = null;
        this.isDragging = false;
        this.crossGeomX = null;
        this.crossGeomY = null;
        this.isActive = false;
        this.rectGroup = null;
        this.lineGeom = null;
        this.viewer = viewer;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    getNames() {
        return [
            "selectionWindowTool"
        ];
    }
    getName() {
        return "selectionWindowTool";
    }
    getPriority() {
        return 1000;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    onResize() {
        const overlay = this.viewer.impl.overlayScenes["selectionWindowOverlay"];
        if (overlay) {
            const canvas = this.viewer.canvas;
            const camera = new window.THREE.OrthographicCamera(0, canvas.clientWidth, 0, canvas.clientHeight, 1, 1000);
            overlay.camera = camera;
        }
        this.rectGroup = null;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    setModel() {
        if (this.isActive) {
            let allModels = Object.values(window.spinal.ForgeViewer.viewerManager.models);
            this.model = allModels;
            this.selectSet.setModel(allModels);
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    setPartialSelect(partialSelect) {
        this.partialSelect = partialSelect;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    activate() {
        if (!this.isActive) {
            this.viewer.clearSelection();
            this.model = Object.values(window.spinal.ForgeViewer.viewerManager.models);
            this.selectSet.setModel(this.model);
            this.materialLine = new window.THREE.LineBasicMaterial({
                color: new window.THREE.Color(0x0000FF),
                linewidth: 0.5,
                opacity: .6
            });
            this.mouseStart = new window.THREE.Vector3(0, 0, -10);
            this.mouseEnd = new window.THREE.Vector3(0, 0, -10);
            const canvas = this.viewer.canvas;
            const camera = new window.THREE.OrthographicCamera(0, canvas.clientWidth, 0, canvas.clientHeight, 1, 1000);
            this.viewer.impl.createOverlayScene("selectionWindowOverlay", this.materialLine, this.materialLine, camera);
            this.viewer.impl.api.addEventListener(window.Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResize);
            this.isActive = true;
            this.emit("activate");
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    deactivate() {
        if (this.isActive) {
            this.viewer.impl.removeOverlayScene("selectionWindowOverlay");
            this.mouseStart.set(0, 0, -10);
            this.mouseEnd.set(0, 0, -10);
            this.isDragging = false;
            this.isActive = false;
            this.rectGroup = null;
            this.viewer.impl.api.removeEventListener(window.Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResize);
            this.viewer.toolController.deactivateTool(this.getName());
            this.emit("deactivate");
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    getCursor() {
        const tool = this.viewer.toolController.getTool("dolly");
        const mode = tool.getTriggeredMode();
        switch(mode){
            case "dolly":
                return (0, _cursorsDefault.default).dolly;
            case "pan":
                return (0, _cursorsDefault.default).pan;
        }
        return (0, _cursorsDefault.default).window;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    handleGesture() {
        return true;
    }
    handleSingleClick() {
        return true;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    handleButtonDown(event, button) {
        //left button down
        if (button === 0) {
            this.startDrag(event);
            return true;
        }
        return false;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    handleMouseMove(event) {
        if (this.lineGeom && this.isDragging) {
            this.pointerEnd = event.pointers ? event.pointers[0] : event;
            this.mouseEnd.x = event.canvasX;
            this.mouseEnd.y = event.canvasY;
            return true;
        }
        return false;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    handleButtonUp(event, button) {
        if (button === 0) {
            this.endDrag();
            return true;
        }
        return false;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    handleKeyDown(event, keyCode) {
        if (keyCode === 27) this.deactivate();
        return false;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    startDrag(event) {
        if (this.isDragging === false) {
            this.pointerStart = event.pointers ? event.pointers[0] : event;
            // begin dragging
            this.isDragging = true;
            this.mouseStart.x = event.canvasX;
            this.mouseStart.y = event.canvasY;
            this.mouseEnd.x = event.canvasX;
            this.mouseEnd.y = event.canvasY;
            if (this.rectGroup === null) {
                this.lineGeom = new window.THREE.Geometry();
                // rectangle of zoom window
                this.lineGeom.vertices.push(this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone());
                // cross for identify zoom window center.
                this.crossGeomX = new window.THREE.Geometry();
                this.crossGeomX.vertices.push(this.mouseStart.clone(), this.mouseStart.clone());
                this.crossGeomY = new window.THREE.Geometry();
                this.crossGeomY.vertices.push(this.mouseStart.clone(), this.mouseStart.clone());
                // add geom to group
                const line_mesh = new window.THREE.Line(this.lineGeom, this.materialLine, window.THREE.LineStrip);
                const line_cross_x = new window.THREE.Line(this.crossGeomX, this.materialLine, window.THREE.LineStrip);
                const line_cross_y = new window.THREE.Line(this.crossGeomY, this.materialLine, window.THREE.LineStrip);
                this.rectGroup = new window.THREE.Group();
                this.rectGroup.add(line_mesh);
                this.rectGroup.add(line_cross_x);
                this.rectGroup.add(line_cross_y);
            } else {
                this.lineGeom.vertices[0] = this.mouseStart.clone();
                this.lineGeom.vertices[1] = this.mouseStart.clone();
                this.lineGeom.vertices[2] = this.mouseStart.clone();
                this.lineGeom.vertices[3] = this.mouseStart.clone();
                this.lineGeom.vertices[4] = this.mouseStart.clone();
                this.crossGeomX.vertices[0] = this.mouseStart.clone();
                this.crossGeomX.vertices[1] = this.mouseStart.clone();
                this.crossGeomY.vertices[0] = this.mouseStart.clone();
                this.crossGeomY.vertices[1] = this.mouseStart.clone();
                this.crossGeomX.verticesNeedUpdate = true;
                this.crossGeomY.verticesNeedUpdate = true;
                this.lineGeom.verticesNeedUpdate = true;
            }
            this.viewer.impl.addOverlay("selectionWindowOverlay", this.rectGroup);
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    endDrag() {
        if (this.isDragging === true) {
            this.viewer.impl.removeOverlay("selectionWindowOverlay", this.rectGroup);
            this.isDragging = false;
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    update() {
        if (!this.isActive) return;
        if (this.lineGeom && this.isDragging) {
            // draw rectangle
            this.lineGeom.vertices[1].x = this.mouseStart.x;
            this.lineGeom.vertices[1].y = this.mouseEnd.y;
            this.lineGeom.vertices[2] = this.mouseEnd.clone();
            this.lineGeom.vertices[3].x = this.mouseEnd.x;
            this.lineGeom.vertices[3].y = this.mouseStart.y;
            this.lineGeom.vertices[4] = this.lineGeom.vertices[0];
            // draw cross
            var width = Math.abs(this.mouseEnd.x - this.mouseStart.x);
            var height = Math.abs(this.mouseEnd.y - this.mouseStart.y);
            var length = width > height ? height : width;
            if (length > _CROSS_MAX_WIDTH) length = _CROSS_MAX_WIDTH;
            var half_length = length * 0.5;
            var cross_center = [
                (this.mouseEnd.x + this.mouseStart.x) * 0.5,
                (this.mouseEnd.y + this.mouseStart.y) * 0.5
            ];
            this.crossGeomX.vertices[0].x = cross_center[0] - half_length;
            this.crossGeomX.vertices[0].y = cross_center[1];
            this.crossGeomX.vertices[1].x = cross_center[0] + half_length;
            this.crossGeomX.vertices[1].y = cross_center[1];
            this.crossGeomY.vertices[0].x = cross_center[0];
            this.crossGeomY.vertices[0].y = cross_center[1] - half_length;
            this.crossGeomY.vertices[1].x = cross_center[0];
            this.crossGeomY.vertices[1].y = cross_center[1] + half_length;
            this.crossGeomX.verticesNeedUpdate = true;
            this.crossGeomY.verticesNeedUpdate = true;
            this.lineGeom.verticesNeedUpdate = true;
            // only redraw overlay
            this.viewer.impl.invalidate(false, false, true);
        } else return this.select();
        return false;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    select() {
        const rectMinX = this.mouseStart.x;
        const rectMinY = this.mouseStart.y;
        const rectMaxX = this.mouseEnd.x;
        const rectMaxY = this.mouseEnd.y;
        const rectHeight = Math.abs(rectMaxY - rectMinY);
        const rectWidth = Math.abs(rectMaxX - rectMinX);
        if (rectWidth === 0 || rectHeight === 0) return false;
        const dbIdsByModel = this.selectSet.compute(this.pointerStart, this.pointerEnd, this.partialSelect);
        dbIdsByModel.forEach((el)=>{
            for (const iterator of el)this.emit("selection", {
                model: iterator.model,
                guid: this.guid(),
                dbIds: iterator.dbIds
            });
        });
        this.deactivate();
        return true;
    }
}
exports.default = SelectionWindowTool;

},{"./selectionExtension":"lwUpp","./EventsEmitter":"2ONrl","./cursors":"97IHg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwUpp":[function(require,module,exports) {
///////////////////////////////////////////////////////////
// SelectSet util for Selection Window in Forge Viewer
// By Philippe Leefsma, September 2017
//
///////////////////////////////////////////////////////////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _geometryIntersectsBox3 = require("./GeometryIntersectsBox3");
var _geometryIntersectsBox3Default = parcelHelpers.interopDefault(_geometryIntersectsBox3);
var _viewerToolkit = require("./viewer.toolkit");
var _viewerToolkitDefault = parcelHelpers.interopDefault(_viewerToolkit);
class SelectSet {
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    constructor(viewer){
        this.viewer = viewer;
    }
    ///////////////////////////////////////////////////////////
    //Filter an Object
    //
    ///////////////////////////////////////////////////////////
    filterLeafIds(leafIds, hiddenIds) {
        return leafIds.map((leaft)=>{
            let modelFoundInHidden = hiddenIds.find((el)=>el.model.id === leaft.model.id);
            if (modelFoundInHidden) leaft.ids = leaft.ids.filter((el)=>{
                return modelFoundInHidden.ids.indexOf(el) === -1;
            });
            return leaft;
        });
    }
    /////////////////////////////////////////////////////////
    // Set model: required to compute the bounding boxes
    //
    /////////////////////////////////////////////////////////
    async setModel(models) {
        this.model = models;
        const instanceTree = models.map((model)=>{
            return {
                model: model,
                instanceTree: model.getData().instanceTree
            };
        });
        const rootIds = instanceTree.map((el)=>{
            return {
                model: el.model,
                rootId: el.instanceTree.getRootId()
            };
        });
        const bboxRes = await Promise.all(rootIds.map(async (obj)=>{
            return {
                model: obj.model,
                bbox: await this.getComponentBoundingBox(obj.model, obj.rootId)
            };
        }));
        this.boundingSphere = bboxRes.map((el)=>{
            return {
                model: el.model,
                boundingSphere: el.bbox.getBoundingSphere()
            };
        });
        // let leafIds = await Toolkit.getLeafNodes(model);
        let leafIds = await Promise.all(models.map(async (model)=>{
            return {
                model: model,
                ids: await (0, _viewerToolkitDefault.default).getLeafNodes(model)
            };
        }));
        let isolatedNodes = this.viewer.getAggregateIsolation();
        let hiddenNodes = this.viewer.getAggregateHiddenNodes();
        if (isolatedNodes.length > 0) leafIds = await Promise.all(isolatedNodes.map(async (el)=>{
            return {
                model: el.model,
                ids: await (0, _viewerToolkitDefault.default).getLeafNodes(el.model, el.ids)
            };
        }));
        else if (hiddenNodes.length > 0) {
            let allNodesHidden = await Promise.all(hiddenNodes.map(async (hidden)=>{
                return {
                    model: hidden.model,
                    ids: await (0, _viewerToolkitDefault.default).getLeafNodes(hidden.model, hidden.ids)
                };
            }));
            leafIds = this.filterLeafIds(leafIds, allNodesHidden);
        }
        this.boundingBoxInfo = leafIds.map((el)=>{
            el.ids = el.ids.map((dbId)=>{
                const bbox = this.getLeafComponentBoundingBox(el.model, dbId);
                return {
                    bbox,
                    dbId
                };
            });
            return el;
        });
    }
    /////////////////////////////////////////////////////////
    // Returns bounding box as it appears in the viewer
    // (transformations could be applied)
    //
    /////////////////////////////////////////////////////////
    getModifiedWorldBoundingBox(fragIds, fragList) {
        const fragbBox = new window.THREE.Box3();
        const nodebBox = new window.THREE.Box3();
        fragIds.forEach(function(fragId) {
            fragList.getWorldBounds(fragId, fragbBox);
            nodebBox.union(fragbBox);
        });
        return nodebBox;
    }
    /////////////////////////////////////////////////////////
    // Returns bounding box for fragment list
    //
    /////////////////////////////////////////////////////////
    async getComponentBoundingBox(model, dbId) {
        const fragIds = await (0, _viewerToolkitDefault.default).getFragIds(model, dbId);
        const fragList = model.getFragmentList();
        return this.getModifiedWorldBoundingBox(fragIds, fragList);
    }
    getLeafComponentBoundingBox(model, dbId) {
        const fragIds = (0, _viewerToolkitDefault.default).getLeafFragIds(model, dbId);
        const fragList = model.getFragmentList();
        return this.getModifiedWorldBoundingBox(fragIds, fragList);
    }
    /////////////////////////////////////////////////////////
    // Creates Raycaster object from the mouse pointer
    //
    /////////////////////////////////////////////////////////
    pointerToRay(pointer) {
        const camera = this.viewer.navigation.getCamera();
        const pointerVector = new window.THREE.Vector3();
        const rayCaster = new window.THREE.Raycaster();
        const pointerDir = new window.THREE.Vector3();
        const domElement = this.viewer.canvas;
        const rect = domElement.getBoundingClientRect();
        const x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
        const y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;
        if (camera.isPerspective) {
            pointerVector.set(x, y, 0.5);
            pointerVector.unproject(camera);
            rayCaster.set(camera.position, pointerVector.sub(camera.position).normalize());
        } else {
            pointerVector.set(x, y, -15);
            pointerVector.unproject(camera);
            pointerDir.set(0, 0, -1);
            rayCaster.set(pointerVector, pointerDir.transformDirection(camera.matrixWorld));
        }
        return rayCaster.ray;
    }
    /////////////////////////////////////////////////////////
    // Returns true if the box is contained inside the
    // closed volume defined by the the input planes
    //
    /////////////////////////////////////////////////////////
    containsBox(planes, box) {
        const { min, max } = box;
        const vertices = [
            new window.THREE.Vector3(min.x, min.y, min.z),
            new window.THREE.Vector3(min.x, min.y, max.z),
            new window.THREE.Vector3(min.x, max.y, max.z),
            new window.THREE.Vector3(max.x, max.y, max.z),
            new window.THREE.Vector3(max.x, max.y, min.z),
            new window.THREE.Vector3(max.x, min.y, min.z),
            new window.THREE.Vector3(min.x, max.y, min.z),
            new window.THREE.Vector3(max.x, min.y, max.z)
        ];
        for (let vertex of vertices)for (let plane of planes){
            if (plane.distanceToPoint(vertex) < 0) return false;
        }
        return true;
    }
    /////////////////////////////////////////////////////////
    // Returns true if at least one vertex is contained in
    // closed volume defined by the the input planes
    //
    /////////////////////////////////////////////////////////
    containsVertex(planes, vertices) {
        for (let vertex of vertices){
            let isInside = true;
            for (let plane of planes)if (plane.distanceToPoint(vertex) < 0) {
                isInside = false;
                break;
            }
            if (isInside) return true;
        }
        return false;
    }
    /////////////////////////////////////////////////////////
    // Returns the oriented camera plane
    //
    /////////////////////////////////////////////////////////
    getCameraPlane() {
        const camera = this.viewer.navigation.getCamera();
        const normal = camera.target.clone().sub(camera.position).normalize();
        const pos = camera.position;
        const dist = -normal.x * pos.x - normal.y * pos.y - normal.z * pos.z;
        return new window.THREE.Plane(normal, dist);
    }
    /////////////////////////////////////////////////////////
    // Creates pyramid geometry to perform tri-box
    // intersection analysis
    //
    /////////////////////////////////////////////////////////
    createPyramidGeometry(vertices) {
        var geometry = new window.THREE.Geometry();
        geometry.vertices = vertices;
        geometry.faces = [
            new window.THREE.Face3(0, 1, 2),
            new window.THREE.Face3(0, 2, 3),
            new window.THREE.Face3(1, 0, 4),
            new window.THREE.Face3(2, 1, 4),
            new window.THREE.Face3(3, 2, 4),
            new window.THREE.Face3(0, 3, 4)
        ];
        return geometry;
    }
    /////////////////////////////////////////////////////////
    // Determine if the bounding boxes are
    // inside, outside or intersect with the selection window
    //
    /////////////////////////////////////////////////////////
    filterBoundingBoxes(planes, vertices, partialSelect) {
        const geometry = this.createPyramidGeometry(vertices);
        const intersect = [];
        const outside = [];
        const inside = [];
        return this.boundingBoxInfo.map((res)=>{
            for (let bboxInfo of res.ids){
                // if bounding box inside, then we can be sure
                // the mesh is inside too
                if (this.containsBox(planes, bboxInfo.bbox)) inside.push(bboxInfo);
                else if (partialSelect) {
                    // otherwise need a more precise tri-box
                    // analysis to determine if the bbox intersect
                    // the pyramid geometry
                    const intersects = (0, _geometryIntersectsBox3Default.default)(geometry, bboxInfo.bbox);
                    intersects.length ? intersect.push(bboxInfo) : outside.push(bboxInfo);
                } else outside.push(bboxInfo);
            }
            return {
                model: res.model,
                intersect,
                outside,
                inside
            };
        });
    }
    /////////////////////////////////////////////////////////
    // Runs the main logic of the select set:
    // computes a pyramid shape from the selection window
    // corners and determines enclosed meshes from the model
    //
    /////////////////////////////////////////////////////////
    compute(pointer1, pointer2, partialSelect) {
        // build 4 rays to project the 4 corners
        // of the selection window
        const xMin = Math.min(pointer1.clientX, pointer2.clientX);
        const xMax = Math.max(pointer1.clientX, pointer2.clientX);
        const yMin = Math.min(pointer1.clientY, pointer2.clientY);
        const yMax = Math.max(pointer1.clientY, pointer2.clientY);
        const ray1 = this.pointerToRay({
            clientX: xMin,
            clientY: yMin
        });
        const ray2 = this.pointerToRay({
            clientX: xMax,
            clientY: yMin
        });
        const ray3 = this.pointerToRay({
            clientX: xMax,
            clientY: yMax
        });
        const ray4 = this.pointerToRay({
            clientX: xMin,
            clientY: yMax
        });
        // first we compute the top of the pyramid
        const top = new window.THREE.Vector3(0, 0, 0);
        top.add(ray1.origin);
        top.add(ray2.origin);
        top.add(ray3.origin);
        top.add(ray4.origin);
        top.multiplyScalar(0.25);
        // we use the bounding sphere to determine
        // the height of the pyramid
        return this.boundingSphere.map((res)=>{
            const { center, radius } = res.boundingSphere;
            // compute distance from pyramid top to center
            // of bounding sphere
            const dist = new window.THREE.Vector3(top.x - center.x, top.y - center.y, top.z - center.z);
            // compute height of the pyramid:
            // to make sure we go far enough,
            // we add the radius of the bounding sphere
            const height = radius + dist.length();
            // compute the length of the side edges
            const angle = ray1.direction.angleTo(ray2.direction);
            const length = height / Math.cos(angle * 0.5);
            // compute bottom vertices
            const v1 = new window.THREE.Vector3(ray1.origin.x + ray1.direction.x * length, ray1.origin.y + ray1.direction.y * length, ray1.origin.z + ray1.direction.z * length);
            const v2 = new window.THREE.Vector3(ray2.origin.x + ray2.direction.x * length, ray2.origin.y + ray2.direction.y * length, ray2.origin.z + ray2.direction.z * length);
            const v3 = new window.THREE.Vector3(ray3.origin.x + ray3.direction.x * length, ray3.origin.y + ray3.direction.y * length, ray3.origin.z + ray3.direction.z * length);
            const v4 = new window.THREE.Vector3(ray4.origin.x + ray4.direction.x * length, ray4.origin.y + ray4.direction.y * length, ray4.origin.z + ray4.direction.z * length);
            // create planes
            const plane1 = new window.THREE.Plane();
            const plane2 = new window.THREE.Plane();
            const plane3 = new window.THREE.Plane();
            const plane4 = new window.THREE.Plane();
            const plane5 = new window.THREE.Plane();
            plane1.setFromCoplanarPoints(top, v1, v2);
            plane2.setFromCoplanarPoints(top, v2, v3);
            plane3.setFromCoplanarPoints(top, v3, v4);
            plane4.setFromCoplanarPoints(top, v4, v1);
            plane5.setFromCoplanarPoints(v3, v2, v1);
            const planes = [
                plane1,
                plane2,
                plane3,
                plane4,
                plane5
            ];
            const vertices = [
                v1,
                v2,
                v3,
                v4,
                top
            ];
            // filter all bounding boxes to determine
            // if inside, outside or intersect
            const result = this.filterBoundingBoxes(planes, vertices, partialSelect);
            return result.map((res)=>{
                let obj = {
                    model: res.model,
                    dbIds: []
                };
                const dbIdsInside = res.inside.map((bboxInfo)=>{
                    return bboxInfo.dbId;
                });
                // if partialSelect = true
                // we need to return the intersect bboxes
                if (partialSelect) {
                    const dbIdsIntersect = res.intersect.map((bboxInfo)=>{
                        return bboxInfo.dbId;
                    });
                    // At this point perform a finer analysis
                    // to determine if the any of the mesh vertices are inside
                    // or outside the selection window but it would
                    // be a much more expensive computation
                    //const dbIdsIntersectAccurate =
                    //  dbIdsIntersect.filter((dbId) => {
                    //
                    //    const geometry =
                    //      Toolkit.buildComponentGeometry(
                    //        this.viewer, this.viewer.model, dbId)
                    //
                    //    return this.containsVertex(
                    //      planes, geometry.vertices)
                    //  })
                    let ids = [
                        ...dbIdsInside,
                        ...dbIdsIntersect
                    ];
                    obj.dbIds = ids;
                    return obj;
                }
                obj.dbIds = dbIdsInside;
                return obj;
            });
        });
    }
}
exports.default = SelectSet;

},{"./GeometryIntersectsBox3":"lvyTG","./viewer.toolkit":"ijOXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvyTG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let norm = new window.THREE.Vector3();
let t1 = new window.THREE.Vector3();
let t2 = new window.THREE.Vector3();
let depth = 0;
function checkBoxSeparation(phase, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3) {
    const minQ = norm.x * (norm.x > 0 ? minX : maxX) + norm.y * (norm.y > 0 ? minY : maxY) + norm.z * (norm.z > 0 ? minZ : maxZ);
    const maxQ = norm.x * (norm.x > 0 ? maxX : minX) + norm.y * (norm.y > 0 ? maxY : minY) + norm.z * (norm.z > 0 ? maxZ : minZ);
    const q1 = norm.x * v1.x + norm.y * v1.y + norm.z * v1.z;
    const q2 = norm.x * v2.x + norm.y * v2.y + norm.z * v2.z;
    const q3 = norm.x * v3.x + norm.y * v3.y + norm.z * v3.z;
    const vMinQ = Math.min(q1, q2, q3);
    const vMaxQ = Math.max(q1, q2, q3);
    if (phase === 0) // just check the collision
    return minQ > vMaxQ || maxQ < vMinQ;
    else {
        // compute penetration depth
        const sq = 1 / norm.length();
        if (!isFinite(sq)) return;
        depth = Math.min(depth, (vMaxQ - minQ) * sq, (maxQ - vMinQ) * sq);
    }
}
function geometryIntersectsBox3_PassThree(phase, minX, minY, minZ, maxX, maxY, maxZ, axis, v1, v2, v3, t1) {
    t1.subVectors(v1, v2);
    switch(axis){
        case 0:
            t1.set(0, -t1.z, t1.y);
            break;
        case 1:
            t1.set(-t1.z, 0, t1.x);
            break;
        case 2:
            t1.set(-t1.y, t1.x, 0);
            break;
    }
    return checkBoxSeparation(phase, minX, minY, minZ, maxX, maxY, maxZ, t1, v1, v2, v3);
}
function geometryIntersectsBox3(geometry, box) {
    // Tomas Akenine-Möller. 2005.
    // Fast 3D triangle-box overlap testing.
    // http://fileadmin.cs.lth.se/cs/Personal/Tomas_Akenine-Moller/code/tribox_tam.pdf
    const { faces, vertices } = geometry;
    const minX = box.min.x;
    const minY = box.min.y;
    const minZ = box.min.z;
    const maxX = box.max.x;
    const maxY = box.max.y;
    const maxZ = box.max.z;
    const results = [];
    for(var fI = 0; fI < faces.length; ++fI){
        const face = faces[fI];
        const v1 = vertices[face.a];
        const v2 = vertices[face.b];
        const v3 = vertices[face.c];
        const vMinX = Math.min(v1.x, v2.x, v3.x);
        const vMinY = Math.min(v1.y, v2.y, v3.y);
        const vMinZ = Math.min(v1.z, v2.z, v3.z);
        const vMaxX = Math.max(v1.x, v2.x, v3.x);
        const vMaxY = Math.max(v1.y, v2.y, v3.y);
        const vMaxZ = Math.max(v1.z, v2.z, v3.z);
        // bounding AABB cull
        if (vMinX > maxX || vMinY > maxY || vMinZ > maxZ || vMaxX < minX || vMaxY < minY || vMaxZ < minZ) continue;
        t1.subVectors(v2, v1);
        t2.subVectors(v3, v1);
        norm.crossVectors(t1, t2);
        if (checkBoxSeparation(0, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v2, v3, v1, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v2, v3, v1, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v2, v3, v1, t1)) continue;
        // compute depth
        depth = Infinity;
        checkBoxSeparation(1, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v2, v3, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v3, v2, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v2, v3, v1, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v2, v3, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v3, v2, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v2, v3, v1, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v2, v3, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v3, v2, t1);
        geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v2, v3, v1, t1);
        // triangle touches the box
        results.push({
            faceIndex: fI,
            depth: depth
        });
    }
    return results;
}
exports.default = geometryIntersectsBox3;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijOXA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ViewerToolkit {
    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////
    static guid(format = "xxxxxxxxxxxx") {
        var d = new Date().getTime();
        var guid = format.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : r & 0x7 | 0x8).toString(16);
        });
        return guid;
    }
    /////////////////////////////////////////////
    //mobile detection
    //
    /////////////////////////////////////////////
    static get mobile() {
        return {
            getUserAgent: function() {
                return navigator.userAgent;
            },
            isAndroid: function() {
                return this.getUserAgent().match(/Android/i);
            },
            isBlackBerry: function() {
                return this.getUserAgent().match(/BlackBerry/i);
            },
            isIOS: function() {
                return this.getUserAgent().match(/iPhone|iPad|iPod/i);
            },
            isOpera: function() {
                return this.getUserAgent().match(/Opera Mini/i);
            },
            isWindows: function() {
                return this.isWindowsDesktop() || this.isWindowsMobile();
            },
            isWindowsMobile: function() {
                return this.getUserAgent().match(/IEMobile/i);
            },
            isWindowsDesktop: function() {
                return this.getUserAgent().match(/WPDesktop/i);
            },
            isAny: function() {
                return this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isWindowsMobile();
            }
        };
    }
    //////////////////////////////////////////////////////////////////////////
    // Return default viewable path: first 3d or 2d item
    //
    //////////////////////////////////////////////////////////////////////////
    static getDefaultViewablePath(doc, roles = [
        "3d",
        "2d"
    ]) {
        var rootItem = doc.getRootItem();
        let roleArray = [
            ...roles
        ];
        let items = [];
        roleArray.forEach((role)=>{
            items = [
                ...items,
                ...window.Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, {
                    type: "geometry",
                    role
                }, true)
            ];
        });
        return items.length ? doc.getViewablePath(items[0]) : null;
    }
    /////////////////////////////////////////////////////////////////
    // Toolbar button
    //
    /////////////////////////////////////////////////////////////////
    static createButton(id, className, tooltip, handler) {
        var button = new window.Autodesk.Viewing.UI.Button(id);
        button.icon.style.fontSize = "24px";
        button.icon.className = className;
        button.setToolTip(tooltip);
        button.onClick = handler;
        return button;
    }
    /////////////////////////////////////////////////////////////////
    // Control group
    //
    /////////////////////////////////////////////////////////////////
    static createControlGroup(viewer, ctrlGroupName) {
        var viewerToolbar = viewer.getToolbar(true);
        if (viewerToolbar) {
            var ctrlGroup = new window.Autodesk.Viewing.UI.ControlGroup(ctrlGroupName);
            viewerToolbar.addControl(ctrlGroup);
            return ctrlGroup;
        }
    }
    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    static getLeafNodes(model, dbIds) {
        return new Promise((resolve, reject)=>{
            try {
                const instanceTree = model.getData().instanceTree;
                dbIds = dbIds || instanceTree.getRootId();
                const dbIdArray = Array.isArray(dbIds) ? dbIds : [
                    dbIds
                ];
                let leafIds = [];
                const getLeafNodesRec = (id)=>{
                    var childCount = 0;
                    instanceTree.enumNodeChildren(id, (childId)=>{
                        getLeafNodesRec(childId);
                        ++childCount;
                    });
                    if (childCount == 0) leafIds.push(id);
                };
                for(var i = 0; i < dbIdArray.length; ++i)getLeafNodesRec(dbIdArray[i]);
                return resolve(leafIds);
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    // get node fragIds
    //
    /////////////////////////////////////////////////////////////////
    static getFragIds(model, dbIds) {
        return new Promise(async (resolve, reject)=>{
            try {
                const dbIdArray = Array.isArray(dbIds) ? dbIds : [
                    dbIds
                ];
                const instanceTree = model.getData().instanceTree;
                const leafIds = await ViewerToolkit.getLeafNodes(model, dbIdArray);
                let fragIds = [];
                for(var i = 0; i < leafIds.length; ++i)instanceTree.enumNodeFragments(leafIds[i], (fragId)=>{
                    fragIds.push(fragId);
                });
                return resolve(fragIds);
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    //
    ////////////////////////////////////////////////////////////////
    static getLeafFragIds(model, dbId) {
        const instanceTree = model.getData().instanceTree;
        const fragIds = [];
        instanceTree.enumNodeFragments(dbId, function(fragId) {
            fragIds.push(fragId);
        });
        return fragIds;
    }
    /////////////////////////////////////////////////////////////////
    // Node bounding box
    //
    /////////////////////////////////////////////////////////////////
    static getWorldBoundingBox(model, dbId) {
        return new Promise(async (resolve, reject)=>{
            try {
                var fragIds = await ViewerToolkit.getFragIds(model, dbId);
                if (!fragIds.length) return reject("No geometry, invalid dbId?");
                var fragList = model.getFragmentList();
                var fragbBox = new window.THREE.Box3();
                var nodebBox = new window.THREE.Box3();
                fragIds.forEach(function(fragId) {
                    fragList.getWorldBounds(fragId, fragbBox);
                    nodebBox.union(fragbBox);
                });
                return resolve(nodebBox);
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    // Gets properties from component
    //
    /////////////////////////////////////////////////////////////////
    static getProperties(model, dbId, requestedProps = null) {
        return new Promise((resolve, reject)=>{
            try {
                if (requestedProps) {
                    const propTasks = requestedProps.map((displayName)=>{
                        return ViewerToolkit.getProperty(model, dbId, displayName, "Not Available");
                    });
                    Promise.all(propTasks).then((properties)=>{
                        resolve(properties);
                    });
                } else model.getProperties(dbId, function(result) {
                    if (result.properties) return resolve(result.properties);
                    return reject("No Properties");
                });
            } catch (ex) {
                // console.log(ex)
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    static getProperty(model, dbId, displayName, defaultValue) {
        return new Promise((resolve, reject)=>{
            try {
                model.getProperties(dbId, function(result) {
                    if (result.properties) {
                        result.properties.forEach((prop)=>{
                            if (typeof displayName === "function") {
                                if (displayName(prop.displayName)) resolve(prop);
                            } else if (displayName === prop.displayName) resolve(prop);
                        });
                        if (defaultValue) return resolve({
                            displayValue: defaultValue,
                            displayName
                        });
                        reject(new Error("Not Found"));
                    } else reject(new Error("Error getting properties"));
                });
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    // Gets all existing properties from component  dbIds
    //
    /////////////////////////////////////////////////////////////////
    static getPropertyList(model, dbIds) {
        return new Promise(async (resolve, reject)=>{
            try {
                var propertyTasks = dbIds.map((dbId)=>{
                    return ViewerToolkit.getProperties(model, dbId);
                });
                var propertyResults = await Promise.all(propertyTasks);
                var properties = [];
                propertyResults.forEach((propertyResult)=>{
                    propertyResult.forEach((prop)=>{
                        if (properties.indexOf(prop.displayName) < 0) properties.push(prop.displayName);
                    });
                });
                return resolve(properties.sort());
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    static getBulkPropertiesAsync(model, dbIds, propFilter) {
        return new Promise((resolve, reject)=>{
            model.getBulkProperties(dbIds, propFilter, (result)=>{
                resolve(result);
            }, (error)=>{
                reject(error);
            });
        });
    }
    /////////////////////////////////////////////////////////////////
    // Maps components by property
    //
    /////////////////////////////////////////////////////////////////
    static mapComponentsByProp(model, propName, components, defaultProp) {
        return new Promise(async (resolve, reject)=>{
            try {
                const results = await ViewerToolkit.getBulkPropertiesAsync(model, components, [
                    propName
                ]);
                const propertyResults = results.map((result)=>{
                    return Object.assign({}, result.properties[0], {
                        dbId: result.dbId
                    });
                });
                var componentsMap = {};
                propertyResults.forEach((result)=>{
                    var value = result.displayValue;
                    if (typeof value == "string") value = value.split(":")[0];
                    if (!componentsMap[value]) componentsMap[value] = [];
                    componentsMap[value].push(result.dbId);
                });
                return resolve(componentsMap);
            } catch (ex) {
                return reject(ex);
            }
        });
    }
    /////////////////////////////////////////////////////////////
    // Runs recursively the argument task on each node
    // of the data tree
    //
    /////////////////////////////////////////////////////////////
    static runTaskOnDataTree(root, taskFunc) {
        var tasks = [];
        var runTaskOnDataTreeRec = (node, parent = null)=>{
            if (node.children) node.children.forEach((childNode)=>{
                runTaskOnDataTreeRec(childNode, node);
            });
            var task = taskFunc(node, parent);
            tasks.push(task);
        };
        runTaskOnDataTreeRec(root);
        return Promise.all(tasks);
    }
    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    static drawBox(viewer, min, max, material = null) {
        var _material = material;
        if (!_material) {
            _material = new window.THREE.LineBasicMaterial({
                color: 0xffff00,
                linewidth: 2
            });
            viewer.impl.matman().addMaterial("ADN-Material-Line", _material, true);
        }
        function drawLines(coordsArray, mat) {
            var lines = [];
            for(var i = 0; i < coordsArray.length; i += 2){
                var start = coordsArray[i];
                var end = coordsArray[i + 1];
                var geometry = new window.THREE.Geometry();
                geometry.vertices.push(new window.THREE.Vector3(start.x, start.y, start.z));
                geometry.vertices.push(new window.THREE.Vector3(end.x, end.y, end.z));
                geometry.computeLineDistances();
                var line = new window.THREE.Line(geometry, mat);
                viewer.impl.scene.add(line);
                lines.push(line);
            }
            return lines;
        }
        var lines = drawLines([
            {
                x: min.x,
                y: min.y,
                z: min.z
            },
            {
                x: max.x,
                y: min.y,
                z: min.z
            },
            {
                x: max.x,
                y: min.y,
                z: min.z
            },
            {
                x: max.x,
                y: min.y,
                z: max.z
            },
            {
                x: max.x,
                y: min.y,
                z: max.z
            },
            {
                x: min.x,
                y: min.y,
                z: max.z
            },
            {
                x: min.x,
                y: min.y,
                z: max.z
            },
            {
                x: min.x,
                y: min.y,
                z: min.z
            },
            {
                x: min.x,
                y: max.y,
                z: max.z
            },
            {
                x: max.x,
                y: max.y,
                z: max.z
            },
            {
                x: max.x,
                y: max.y,
                z: max.z
            },
            {
                x: max.x,
                y: max.y,
                z: min.z
            },
            {
                x: max.x,
                y: max.y,
                z: min.z
            },
            {
                x: min.x,
                y: max.y,
                z: min.z
            },
            {
                x: min.x,
                y: max.y,
                z: min.z
            },
            {
                x: min.x,
                y: max.y,
                z: max.z
            },
            {
                x: min.x,
                y: min.y,
                z: min.z
            },
            {
                x: min.x,
                y: max.y,
                z: min.z
            },
            {
                x: max.x,
                y: min.y,
                z: min.z
            },
            {
                x: max.x,
                y: max.y,
                z: min.z
            },
            {
                x: max.x,
                y: min.y,
                z: max.z
            },
            {
                x: max.x,
                y: max.y,
                z: max.z
            },
            {
                x: min.x,
                y: min.y,
                z: max.z
            },
            {
                x: min.x,
                y: max.y,
                z: max.z
            }
        ], _material);
        viewer.impl.sceneUpdated(true);
        return lines;
    }
    /////////////////////////////////////////////////////////////////
    // Set component material
    //
    /////////////////////////////////////////////////////////////////
    static async setMaterial(model, dbId, material) {
        const fragIds = await ViewerToolkit.getFragIds(model, dbId);
        const fragList = model.getFragmentList();
        fragIds.forEach((fragId)=>{
            fragList.setMaterial(fragId, material);
        });
    }
    /////////////////////////////////////////////////////////////////
    // Recursively builds the model tree
    //
    /////////////////////////////////////////////////////////////////
    static buildModelTree(model, createNodeFunc = null) {
        //builds model tree recursively
        function _buildModelTreeRec(node) {
            instanceTree.enumNodeChildren(node.dbId, function(childId) {
                var childNode = null;
                if (createNodeFunc) childNode = createNodeFunc(childId);
                else {
                    node.children = node.children || [];
                    childNode = {
                        dbId: childId,
                        name: instanceTree.getNodeName(childId)
                    };
                    node.children.push(childNode);
                }
                _buildModelTreeRec(childNode);
            });
        }
        //get model instance tree and root component
        var instanceTree = model.getData().instanceTree;
        var rootId = instanceTree.getRootId();
        var rootNode = {
            dbId: rootId,
            name: instanceTree.getNodeName(rootId)
        };
        _buildModelTreeRec(rootNode);
        return rootNode;
    }
    /////////////////////////////////////////////////////////////////
    // Recursively execute task on model tree
    //
    /////////////////////////////////////////////////////////////////
    static executeTaskOnModelTree(model, task) {
        var taskResults = [];
        function _executeTaskOnModelTreeRec(dbId) {
            instanceTree.enumNodeChildren(dbId, function(childId) {
                taskResults.push(task(model, childId));
                _executeTaskOnModelTreeRec(childId);
            });
        }
        //get model instance tree and root component
        var instanceTree = model.getData().instanceTree;
        var rootId = instanceTree.getRootId();
        _executeTaskOnModelTreeRec(rootId);
        return taskResults;
    }
    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    static isolateFull(viewer, model = null, dbIds = []) {
        return new Promise(async (resolve, reject)=>{
            try {
                model = model || viewer.model;
                viewer.isolate(dbIds);
                const targetIds = Array.isArray(dbIds) ? dbIds : [
                    dbIds
                ];
                const targetLeafIds = await ViewerToolkit.getLeafNodes(model, targetIds);
                const leafIds = await ViewerToolkit.getLeafNodes(model);
                const leafTasks = leafIds.map((dbId)=>{
                    return new Promise((resolveLeaf)=>{
                        const show = !targetLeafIds.length || targetLeafIds.indexOf(dbId) > -1;
                        viewer.impl.visibilityManager.setNodeOff(dbId, !show);
                        resolveLeaf();
                    });
                });
                return Promise.all(leafTasks);
            } catch (ex) {
                return reject(ex);
            }
        });
    }
}
exports.default = ViewerToolkit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ONrl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventsEmitterComposer", ()=>EventsEmitterComposer);
const EventsEmitter = class EventsEmitter {
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    constructor(){
        this._events = {};
    }
    /////////////////////////////////////////////////////////
    // Supports multiple events space-separated
    //
    /////////////////////////////////////////////////////////
    on(events, fct) {
        events.split(" ").forEach((event)=>{
            this._events[event] = this._events[event] || [];
            this._events[event].push(fct);
        });
        return this;
    }
    /////////////////////////////////////////////////////////
    // Supports multiple events space-separated
    //
    /////////////////////////////////////////////////////////
    off(events, fct) {
        if (events == undefined) {
            this._events = {};
            return;
        }
        events.split(" ").forEach((event)=>{
            if (event in this._events === false) return;
            if (fct) this._events[event].splice(this._events[event].indexOf(fct), 1);
            else this._events[event] = [];
        });
        return this;
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    emit(event /* , args... */ ) {
        if (this._events[event] === undefined) return null;
        var tmpArray = this._events[event].slice();
        for(var i = 0; i < tmpArray.length; ++i){
            var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
            if (result !== undefined) return result;
        }
    }
    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    guid(format = "xxxxxxxxxxxx") {
        var d = new Date().getTime();
        const guid = format.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : r & 0x7 | 0x8).toString(16);
        });
        return guid;
    }
};
const EventsEmitterComposer = (BaseClass)=>class extends BaseClass {
        /////////////////////////////////////////////////////////
        //
        //
        /////////////////////////////////////////////////////////
        constructor(arg1, arg2, arg3, arg4, arg5){
            super(arg1, arg2, arg3, arg4, arg5);
            this._events = {};
        }
        /////////////////////////////////////////////////////////
        // Supports multiple events space-separated
        //
        /////////////////////////////////////////////////////////
        on(events, fct) {
            events.split(" ").forEach((event)=>{
                this._events[event] = this._events[event] || [];
                this._events[event].push(fct);
            });
            return this;
        }
        /////////////////////////////////////////////////////////
        // Supports multiple events space-separated
        //
        /////////////////////////////////////////////////////////
        off(events, fct) {
            if (events == undefined) {
                this._events = {};
                return;
            }
            events.split(" ").forEach((event)=>{
                if (event in this._events === false) return;
                if (fct) this._events[event].splice(this._events[event].indexOf(fct), 1);
                else this._events[event] = [];
            });
            return this;
        }
        /////////////////////////////////////////////////////////
        //
        //
        /////////////////////////////////////////////////////////
        emit(event /* , args... */ ) {
            if (this._events[event] === undefined) return null;
            var tmpArray = this._events[event].slice();
            for(var i = 0; i < tmpArray.length; ++i){
                var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
                if (result !== undefined) return result;
            }
        }
        /////////////////////////////////////////////////////////
        //
        //
        /////////////////////////////////////////////////////////
        guid(format = "xxxxxxxxxxxx") {
            var d = new Date().getTime();
            const guid = format.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == "x" ? r : r & 0x7 | 0x8).toString(16);
            });
            return guid;
        }
    };
EventsEmitter.Composer = EventsEmitterComposer;
exports.default = EventsEmitter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97IHg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    window: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADWSURBVEiJ1ZVNEsIwCEYfTg/UjTPuemcvojfCRRMlNKGdKguZyaLkK4/8EERVybQJQERCUU3C63p+n/Bk9QHDRtbIX2GqKh6woRfxLdL0/M1KzYRaA+7AXDW9wN5fvrXEWud6AOABLD7QwREDgCdw7WV6ZjSAsi0Lzn4JmEcHeHbYWxQXw3FTEWmvaWY1X9Iie4CIKHE1fwfIsnSAZD/X/79FGbdISyzA9QMDG3axTTTVwx3NaNbm5B2dRHY1DWCUyd4qIs0bUB8nuz32/11Cu+KPM7sOXlrOS4sOkzb1AAAAAElFTkSuQmCC), auto",
    dolly: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8mJiYAAADNzc2/v7+fn59paWlPT08MDAwICAj6+vqpqak7Ozv29vby8vLp6em2traAgIBkZGRZWVlAQEAaGhpISEgkS7tbAAAAFHRSTlMAOvhpZD8mkQWegMy9qY1YVE01EYiqlE0AAADZSURBVCjPbY9ZloMgEAAbEbfsmRZZXbJn7n/AAX2RQVN/VD26AXLOeZLDGo6IbfI9tHq8cdxuj1HwvgCoaiHqKoRk+M3hB9jueUW8PnfsE/bJ3vms7nCkq7NoE3s99AXxoh8vFoXCpknrn5faAuJCenT0xPkYqnxQFJaU0gdZrsKm8aHZrAIffBj40mc1jsTfIJRWegq6opTMvlfqLqYg7kr1ZB7jFgeaMC59N//8O4WZ1IiPF8b5wMHcJn8zB4g4mc77zpxgAbMSUVoGK4iV0hL4wrksz+H0Bw5+E+HrniDQAAAAAElFTkSuQmCC), auto",
    pan: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABHVBMVEUAAABPTk4AAAAAAAAJCQkRERE0MzQQEBAODg4QEBB4d3dbWlo9PDw/Pj4vLy8sLCwZGBgWFhYcHBwKCgoSEhIAAAAKCgoICAgKCgoQEBAODg4EBAQICAgPDw8REREMDAx2dnY0NDQvLy9QUFAaGhomJSYjIyM7OjokJCQNDA0mJiYNDQ0AAAAUFBQJCQkQEBAEBAQNDQ0PDw8VFRX///+amJkAAAD5+fnz8/PKycn9/f339vbi4eLR0dDNzMyAgIB8e3xycHH7+/vw7+/o6OjX1ta7urq4t7iwsLCnp6eioqKbmppva21OTk74+Pjl5eXc3Nzb29vLy8vDw8PDwsKrqqqdnZ2WlpaSkpKTkZKMiouEg4NkZGRISEgxLzBpgbsEAAAANHRSTlMA+fiQXgngKSYG/vX17uvBuqackpCNg3BpUkpAPBwTDvj18+vl0s/NwrOwoZZ+TDg4NBkBGrzX8QAAAP5JREFUKM99j9Vuw0AQRdeuKZyGkyZNmbnXDLHDVGb8/8/oy7paK1bO0+oc7WiGnGiaxq+QRTQAOh8f9Jv4H/Ge8PZPrCdlvkxfYluUT2WyyCq3mZ7unwlKVLcqOzA/Mf71j0TWJ/Ym6rPeca05Ni4iIevYc7yoUD2zQFhq71BdI9nvBeBabFDSPe8DswlUc1Riw3VxbH0NHBUPQ0jrbDnPYDjALQBMq9E7nkC5y7VDKTZlUg8Q0lmjvl74zlYErgvKa42GPKf3/a0kQmYCDY1SYMDosqMoiWrGwz/uAbNvc/fNon4kXRKGq+PUo2Mb96afV0iUxqGU2s4VBbKUP65NL/LKF+7ZAAAAAElFTkSuQmCC), auto"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6t91Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(params, callback) {
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
                // var viewer = this.viewer;
                // Button 1
                var button = new window.Autodesk.Viewing.UI.Button(params.name);
                button.onClick = ()=>{
                    callback();
                };
                var icon = button.container.firstChild;
                icon.className = "adsk-button-icon md-icon md-icon-font md-theme-default";
                icon.innerHTML = params.icon;
                if (typeof params.label !== "undefined") button.setToolTip(params.label);
                this.subToolbar = this.viewer.toolbar.getControl(params.subToolbarName);
                if (!this.subToolbar) {
                    // console.log("params.subToolbarName", params.subToolbarName);
                    this.subToolbar = new window.Autodesk.Viewing.UI.ControlGroup(params.subToolbarName);
                    this.subToolbar.addControl(button);
                    this.viewer.toolbar.addControl(this.subToolbar);
                } else this.subToolbar.addControl(button);
            }
            unload() {
                this.viewer.toolbar.removeControl(this.subToolbar);
                return true;
            }
        };
        return ViewerToolbarButtonManager;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-window-selection.5df05372.js.map
