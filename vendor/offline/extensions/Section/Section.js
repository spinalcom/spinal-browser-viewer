/*!
 * LMV v7.63.0
 *
 * Copyright 2022 Autodesk, Inc.
 * All rights reserved.
 *
 * This computer source code and related instructions and comments are the
 * unpublished confidential and proprietary information of Autodesk, Inc.
 * and are protected under Federal copyright and state trade secret law.
 * They may not be disclosed to, copied or used by any third party without
 * the prior written consent of Autodesk, Inc.
 *
 * Autodesk Forge Viewer Usage Limitations:
 *
 * The Autodesk Forge Viewer JavaScript must be delivered from an
 * Autodesk-hosted URL.
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js!./extensions/Section/Section.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js!./extensions/Section/Section.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Section CSS\n **/\n.sectionPanel {\n  line-height: 14px;\n  text-align: left;\n  z-index: 10; }\n\n.section-horizontal-divider {\n  height: 1px;\n  border-top: 1px solid rgba(200, 200, 200, 0.8); }\n\n.section-submenu-select {\n  display: block;\n  position: relative;\n  width: calc(100% - 40px);\n  padding: 10px 20px 0px 20px;\n  opacity: 0.3; }\n\n.section-panel:hover .section-submenu-select {\n  opacity: 0.8; }\n\n.section-submenu-selectlabel {\n  position: relative;\n  display: inline-block;\n  padding-right: 20px;\n  padding-bottom: 4px; }\n\n.section-restart {\n  margin: 10px 20px 15px 20px;\n  padding: 6px 10px 6px 10px;\n  width: calc(100% - 55px);\n  cursor: pointer; }\n\n.docking-panel:hover .section-restart {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.docking-panel .section-restart:hover {\n  background-color: rgba(166, 194, 255, 0.7);\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -ms-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./extensions/Section/SectionTool.js":
/*!*******************************************!*\
  !*** ./extensions/Section/SectionTool.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionTool": () => (/* binding */ SectionTool)
/* harmony export */ });
/* harmony import */ var _thirdparty_three_js_TransformControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../thirdparty/three.js/TransformControls */ "./thirdparty/three.js/TransformControls.js");
/* harmony import */ var _thirdparty_three_js_three_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../thirdparty/three.js/three-legacy */ "./thirdparty/three.js/three-legacy.js");
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}


var debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

// Declared at the bottom, inside a function.
var SectionMeshClass = null;
var avp = Autodesk.Viewing.Private;

/**
                                     * Tool that provides visual controls for the user to change the cutplane's position and angle.
                                     * It can (and should) be hooked to [ToolController's registerTool]{@Autodesk.Viewing.ToolController#registerTool}
                                     *
                                     * @param {Autodesk.Viewing.Viewer3D} viewer - Viewer3D instance
                                     * @param {Object} config - Configuration values
                                     * @param {Object} options.tintColor - Object containing attributes r, g, b in the range [0..1]
                                     * @param {Number} options.tintIntensity - Value range [0..1]
                                     * @constructor
                                     */
var SectionTool = function SectionTool(viewer, options)
{
  var _viewer = viewer.impl;

  var _names = ["section"];
  var _active = false;

  var _isDragging = false;
  var _boxChanged = false;
  var _isPlaneOn = true;
  var _tintColor = options.tintColor;
  var _tintIntensity = options.tintIntensity;

  var _transRotControl;
  var _transControl;
  var _gizmoOffsetRight = isNaN(options.gizmoOffsetRight) ? 200 : options.gizmoOffsetRight; // 200 So the gizmo won't be covered by the View Cube.
  var _gizmoOffsetLeft = isNaN(options.gizmoOffsetLeft) ? 80 : options.gizmoOffsetLeft;
  var _gizmoOffsetTop = isNaN(options.gizmoOffsetTop) ? 80 : options.gizmoOffsetTop;
  var _gizmoOffsetBottom = isNaN(options.gizmoOffsetBottom) ? 80 : options.gizmoOffsetBottom;
  var _gizmoNewClientPos = new THREE.Vector3();
  var _controlOffset = new THREE.Vector3();
  var _controlNewPosition = new THREE.Vector3();

  var _trcOffset;
  var _sectionGroups = [];
  var _sectionPlanes = [];
  var _sectionPicker = [];
  var _activeMode = "";
  var _overlayName = "gizmo";
  var _touchType = null;
  var _initialized = false;
  var _visibleAtFirst = true;
  var _outlineIndices = [
  0, 1,
  1, 3,
  3, 2,
  2, 0];

  var _priority = 70;
  var _selectionOpacity = 0.25;
  var _selectionColor = 0x287EEA;

  var _displaySectionHatches = true;

  var sendAnalyticsDebounced = debounce(function (from, type, action) {
    avp.analytics.track('viewer.section', {
      from: from,
      type: type,
      action: action });

  }, 2000);

  (0,_thirdparty_three_js_TransformControls__WEBPACK_IMPORTED_MODULE_0__.init_TransformGizmos)();
  init_SectionMesh();

  function initControl() {

    if (_initialized) {
      // Verify overlays are added.
      _viewer.addOverlay(_overlayName, _transRotControl);
      _viewer.addOverlay(_overlayName, _transControl);
      return;
    }

    _transRotControl = new THREE.TransformControls(_viewer.camera, _viewer.canvas, "transrotate");
    _transRotControl.addEventListener('change', updateViewer);
    _transRotControl.setSnap(Math.PI / 2, Math.PI / 36); // snap to 90 degs within 5 degs range

    _transControl = new THREE.TransformControls(_viewer.camera, _viewer.canvas, "translate");
    _transControl.addEventListener('change', updateViewer);
    _transControl.addEventListener('change', adjustGizmoToBounds);

    // add to overlay scene
    if (_viewer.overlayScenes[_overlayName] === undefined) {
      _viewer.createOverlayScene(_overlayName);
    }
    _viewer.addOverlay(_overlayName, _transRotControl);
    _viewer.addOverlay(_overlayName, _transControl);

    viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updateControls);
    viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, updateSections);
    viewer.addEventListener(Autodesk.Viewing.HIDE_EVENT, updateSections);
    viewer.addEventListener(Autodesk.Viewing.SHOW_EVENT, updateSections);
    viewer.addEventListener(Autodesk.Viewing.MODEL_TRANSFORM_CHANGED_EVENT, updateSections);

    _initialized = true;
  }

  function deinitControl() {

    if (!_initialized)
    return;

    _viewer.removeOverlay(_overlayName, _transRotControl);
    _transRotControl.removeEventListener('change', updateViewer);
    _transRotControl = null;
    _viewer.removeOverlay(_overlayName, _transControl);
    _transControl.removeEventListener('change', updateViewer);
    _transControl.removeEventListener('change', adjustGizmoToBounds);
    _transControl = null;
    _viewer.removeOverlayScene(_overlayName);

    viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updateControls);
    viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, updateSections);
    viewer.removeEventListener(Autodesk.Viewing.HIDE_EVENT, updateSections);
    viewer.removeEventListener(Autodesk.Viewing.SHOW_EVENT, updateSections);
    viewer.removeEventListener(Autodesk.Viewing.MODEL_TRANSFORM_CHANGED_EVENT, updateSections);

    _initialized = false;
  }

  function updateViewer() {
    _viewer.invalidate(false, false, true);
  }

  function updateControls() {

    adjustGizmoToBounds();

    if (_transRotControl) {
      _transRotControl.update();
    }
    if (_transControl) {
      _transControl.update();
    }
  }

  function adjustGizmoToBounds() {

    if (!_transRotControl || !_transRotControl.object) {
      return;
    }

    var client = _viewer.worldToClient(_transRotControl.position);
    var rect = _viewer.getCanvasBoundingClientRect();
    _gizmoNewClientPos.copy(client);

    if (client.x < _gizmoOffsetLeft) {
      _gizmoNewClientPos.x = _gizmoOffsetLeft;
    } else if (client.x > rect.width - _gizmoOffsetRight) {
      _gizmoNewClientPos.x = rect.width - _gizmoOffsetRight;
    }

    if (client.y < _gizmoOffsetTop) {
      _gizmoNewClientPos.y = _gizmoOffsetTop;
    } else if (client.y > rect.height - _gizmoOffsetBottom) {
      _gizmoNewClientPos.y = rect.height - _gizmoOffsetBottom;
    }

    if (_gizmoNewClientPos.x !== client.x || _gizmoNewClientPos.y !== client.y) {
      var intersection = THREE.TransformControls.intersectObjects(_gizmoNewClientPos.x, _gizmoNewClientPos.y, [_transRotControl.object], _viewer.camera, false);
      if (intersection) {
        // In section planes the group position is (0,0,0) and has no impact.
        // In section box the group position is the translation of the box, and is needed for
        // positioning the gizmo in the right place.
        var groupPosition = _sectionGroups[0].position;
        _controlOffset.copy(_transRotControl.object.position).add(groupPosition);
        _controlNewPosition.copy(intersection.point).sub(_controlOffset);
        _transRotControl.setGizmoOffset(_controlNewPosition);
      }
    }
  }

  function updateSections() {
    if (_active && _sectionPlanes.length === 1) {
      updatePlaneMeshes(true);
      updateControls();
      updateCapMeshes(new THREE.Plane().setComponents(_sectionPlanes[0].x, _sectionPlanes[0].y, _sectionPlanes[0].z, _sectionPlanes[0].w));
    }
  }

  /*function mix(a, b, val) {
        return a * (1.0 - val) + b * val;
    }*/

  function getDiffuseColor(material) {
    return material && material.color || new THREE.Color(0xffffff);
  }

  /*function getSpecularColor(material) {
        return (material && material.specular) || new THREE.Color(0xffffff);
    }
     function tintColor(c) {
        var intensity = Autodesk.Viewing.Extensions.Section.tintIntensity;
        var tc = _tintColor;
        c.r = mix(c.r, tc.r, intensity);
        c.g = mix(c.g, tc.g, intensity);
        c.b = mix(c.b, tc.b, intensity);
    }*/


  // Use the same fragment iterator for all fragments
  var _fragIterator = new avp.FragmentIterator({ delay: 50 });

  function updateCapMeshes(plane) {
    if (!_displaySectionHatches) {
      // LMV-5781: Do not render the section hatches if the preference is turned on. 
      return;
    }
    var cg = Autodesk.Viewing.Extensions.CompGeom;

    //When drawing a 2D material in 3D space we will want to skip binding the G-buffer
    //when rendering the scene that contains that material
    _viewer.sceneAfter.skipDepthTarget = true;

    _removeSections();

    var section3D = new THREE.Object3D();
    section3D.name = "section3D";
    _viewer.scene.add(section3D);

    var section2D = new THREE.Object3D();
    section2D.name = "section2D";
    _viewer.sceneAfter.add(section2D);

    var toPlaneCoords = cg.makePlaneBasis(plane);
    var fromPaneCoords = toPlaneCoords.clone().invert();

    var mat2dname = _viewer.matman().create2DMaterial(null, { skipCircles: true, skipEllipticals: true, isScreenSpace: true, noIdOutput: true }, false, false);
    var mat2d = _viewer.matman().findMaterial(null, mat2dname);
    mat2d.transparent = true;
    mat2d.depthTest = true;
    mat2d.polygonOffset = true;
    mat2d.polygonOffsetFactor = -1;
    mat2d.polygonOffsetUnits = 0.1; // 1.0 is usually way too high, see LMV-1072
    mat2d.cutplanes = _otherCutPlanes; // make sure that cap meshes respect cutplanes from other tools

    var box = new THREE.Box3();

    var models = _viewer.modelQueue().getModels().filter(function (m) {return !m.getDoNotCut();});

    var intersects = [];
    var material;

    // Start iterating the fragments
    _fragIterator.start(models, function (fragId, dbId, model, lastFrag) {

      // Collect intersections for this fragment
      var frags = model.getFragmentList();
      frags.getWorldBounds(fragId, box);
      if (cg.xBoxPlane(plane, box)) {
        var m = frags.getVizmesh(fragId);

        if (m.geometry && !m.geometry.is2d && !m.geometry.isLines && m.material.cutplanes) {
          material = m.material;
          cg.xMeshPlane(plane, m, intersects);
        }
      }

      // If this is the last fragment for dbId, process the intersections
      if (lastFrag) {
        if (intersects.length) {

          var bbox = new THREE.Box3();
          cg.convertToPlaneCoords(toPlaneCoords, intersects, bbox);

          //Create the 2D line geometry
          var vbb = new avp.VertexBufferBuilder(false, 8 * intersects.length);

          var color = getDiffuseColor(material);
          var r = 0 | color.r * 0.25 * 255.5;
          var g = 0 | color.g * 0.25 * 255.5;
          var b = 0 | color.b * 0.25 * 255.5;

          var c = 0xff000000 | b << 16 | g << 8 | r;


          var eset = new cg.EdgeSet(intersects, bbox, bbox.getSize(new THREE.Vector3()).length() * 1e-6);
          eset.snapEdges();
          eset.sanitizeEdges();
          eset.stitchContours();

          //Create the 3D mesh
          var cset = eset.triangulate();

          if (cset) {

            for (var j = 0; j < cset.contours.length; j++) {

              var cntr = cset.contours[j];

              for (var k = 1; k < cntr.length; k++) {
                var pt1 = cset.pts[cntr[k - 1]];
                var pt2 = cset.pts[cntr[k]];
                vbb.addSegment(pt1.x, pt1.y, pt2.x, pt2.y, 0, -2.0, /*isClosed ? c : rc*/c, dbId, 0);
              }

            }


            var mdata = { mesh: vbb.toMesh() };

            avp.BufferGeometryUtils.meshToGeometry(mdata);

            var bg2d = mdata.geometry;
            bg2d.streamingDraw = true;
            bg2d.streamingIndex = true;

            var mesh2d = new THREE.Mesh(bg2d, mat2d);

            mesh2d.matrix.copy(fromPaneCoords);
            mesh2d.matrixAutoUpdate = false;
            mesh2d.frustumCulled = false;
            mesh2d.modelId = model.id; // So we can look it up later
            mesh2d.dbId = dbId;
            section2D.add(mesh2d);

            //Create triangulated capping polygon
            {
              if (!cset.triangulationFailed) {

                var bg = cset.toPolygonMesh(material.packedNormals);

                var mat = _viewer.matman().cloneMaterial(material, model);

                mat.packedNormals = material.packedNormals;
                mat.cutplanes = _otherCutPlanes; // make sure that cap meshes respect cutplanes from other tools
                mat.side = THREE.FrontSide;
                mat.depthTest = true;
                mat.map = null;
                mat.bumpMap = null;
                mat.normalMap = null;
                mat.alphaMap = null;
                mat.specularMap = null;
                mat.transparent = false;
                mat.depthWrite = true;
                mat.hatchPattern = true;
                mat.needsUpdate = true;

                var materialId;
///////////////////////////////////////////////
                {
                  materialId = material.id + 2;
                }
/////////////////////////
/////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
///////////////////////////////////////////////
/////////////////
//////////////////////////
                var angle = materialId * Math.PI * 0.125;
                var tan = Math.tan(angle);
                mat.hatchParams = new THREE.Vector2(tan, 10.0);
                mat.hatchTintColor = new THREE.Color(_tintColor.r, _tintColor.g, _tintColor.b);
                mat.hatchTintIntensity = _tintIntensity;

                // If the material is prism, clear all the map definitions.
                if (mat.prismType != null) {
                  mat.defines = {};
                  mat.defines[mat.prismType.toUpperCase()] = "";
                  if (mat.prismType == "PrismWood") {
                    mat.defines["NO_UVW"] = "";
                  }
                }

                var capmesh = new THREE.Mesh(bg, mat);
                capmesh.matrix.copy(fromPaneCoords);
                capmesh.matrixAutoUpdate = false;
                capmesh.modelId = model.id; // So we can look it up later
                capmesh.dbId = dbId;
                capmesh.fragId = intersects.fragId;

                section3D.add(capmesh);
              }

            }

          }
        }

        // Clear intersections for the next dbId
        intersects.length = 0;
      } // last Fragment for dbId

    }, function () {
      // The cap scene is in sceneAfter, so we need to redraw the model to see the caps.
      // LMV-2571 - clear the render, as otherwise we will draw transparent objects atop themselves.
      _viewer.invalidate(true, true);
    }); //_fragIterator.start

  }

  // We use an own cut plane set to distinguish our own cut planes from others.
  var _ownCutPlaneSet = 'Autodesk.Viewing.Extension.Section.SectionTool';

  // Make sure that the viewer always uses the SectionTool's plane to adjust 2D rendering resolution.
  _viewer.setCutPlaneSetFor2DRendering(_ownCutPlaneSet);

  // Keep track of cutplanes that are not our own, because we have to apply them to our cap meshes
  var _otherCutPlanes = [];

  // Trigger update of cap mesh materials if number of cutplanes have changed by other tools
  function updateCapMaterials(mrtOnly) {

    function update(section) {
      // apply cutplanes to all active cap meshes
      if (!section) {
        return;
      }

      section.traverse(function (obj) {
        // we only care for THREE.Mesh with material
        if (!(obj instanceof THREE.Mesh) || !obj.material) {
          return;
        }
        if (mrtOnly) {
          _viewer.matman().adjustMaterialMRTSetting(obj.material);
        } else {
          obj.material.needsUpdate = true;
        }
      });
    }

    update(_viewer.scene.getObjectByName("section3D"));
    update(_viewer.sceneAfter.getObjectByName("section2D"));
  }

  function createPlaneMesh(plane, bbox) {
    var quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), plane.normal);
    var geometry;
    var size;

    if (bbox) {
      // project bbox to set plane size
      var ptMax = plane.projectPoint(bbox.max, new THREE.Vector3());
      var ptMin = plane.projectPoint(bbox.min, new THREE.Vector3());
      var invQuat = quat.clone().invert();
      ptMax.applyQuaternion(invQuat);
      ptMin.applyQuaternion(invQuat);
      size = new THREE.Vector3().subVectors(ptMax, ptMin);
      geometry = new THREE.PlaneBufferGeometry(size.x, size.y);
    } else {
      // project bounding sphere
      bbox = _viewer.getVisibleBounds();
      size = 2.0 * bbox.getBoundingSphere(new THREE.Sphere()).radius;
      geometry = new THREE.PlaneBufferGeometry(size, size);
    }

    var material = new THREE.MeshBasicMaterial({
      opacity: 0,
      color: _selectionColor,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      transparent: true });


    var mesh = new SectionMeshClass(geometry, material, plane);
    var pt = plane.projectPoint(bbox.getCenter(new THREE.Vector3()), new THREE.Vector3());
    mesh.position.copy(pt);
    mesh.quaternion.multiply(quat);

    // add outline with inverted background color
    var presetIndex = _viewer.currentLightPreset();
    presetIndex = Math.max(0, presetIndex);
    var bgColor = Autodesk.Viewing.Private.LightPresets[presetIndex].bgColorGradient;
    // TODO: these calculations can lead to float colors, which are ignored by three.js and instead interpreted as white
    // In r125 the float colors generate an "Unknown color" warning
    var color = "rgb(" + (255 - bgColor[0]) + "," + (255 - bgColor[1]) + "," + (255 - bgColor[2]) + ")";
    var lineMaterial = new THREE.LineBasicMaterial({ color: color, linewidth: 1, depthTest: false, depthWrite: false, transparent: true });

    var pos = mesh.geometry.getAttribute('position');
    var vertices = [];
    for (var i = 0; i < _outlineIndices.length; i++) {
      vertices.push(new THREE.Vector3().fromBufferAttribute(pos, _outlineIndices[i]));
    }

    var line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(vertices), lineMaterial);
    mesh.add(line);
    mesh.outline = line;

    return mesh;
  }

  function updatePlaneMeshes(rebuild) {

    traverseSections(function (child) {
      if (child instanceof SectionMeshClass) {

        var pos;
        if (child.connectivity.length > 0) {
          // section box
          var minv = child.matrixWorld.clone().invert();
          var pt = new THREE.Vector3();
          pos = child.geometry.getAttribute('position');
          for (var i = 0; i < pos.count; i++) {
            var connect = child.connectivity[i];
            if (intersectPlanes(child.plane, connect[0], connect[1], pt) !== null) {
              pt.applyMatrix4(minv);
              pos.setXYZ(i, pt.x, pt.y, pt.z);
            }
          }
          pos.needsUpdate = true;
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
        } else if (rebuild) {
          // section plane
          var bbox = _viewer.getVisibleBounds();
          var size = 2.0 * bbox.getBoundingSphere(new THREE.Sphere()).radius;
          var _pt = child.plane.projectPoint(bbox.getCenter(new THREE.Vector3()), new THREE.Vector3());
          child.geometry = new THREE.PlaneBufferGeometry(size, size);
          child.position.copy(_pt);

          pos = child.geometry.getAttribute('position');
        }
        if (pos) {
          for (var _i = 0; _i < _outlineIndices.length; _i++) {
            child.outline.geometry.attributes.position[_i * 3] = pos.getX(_outlineIndices[+_i]);
            child.outline.geometry.attributes.position[_i * 3 + 1] = pos.getY(_outlineIndices[+_i]);
            child.outline.geometry.attributes.position[_i * 3 + 2] = pos.getZ(_outlineIndices[+_i]);
          }
          child.outline.geometry.attributes.position.needsUpdate = true;
        }
      }
    });
  }

  function traverseSections(callback) {
    for (var i = 0; i < _sectionGroups.length; i++) {
      _sectionGroups[i].traverse(callback);
    }
  }

  function setSectionPlanes() {var fireEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    traverseSections(function (child) {
      if (child instanceof SectionMeshClass) {
        child.update();
      }
    });
    if (_sectionPlanes.length === 1) {
      updateCapMeshes(new THREE.Plane().setComponents(_sectionPlanes[0].x, _sectionPlanes[0].y, _sectionPlanes[0].z, _sectionPlanes[0].w));
    }
    _viewer.setCutPlaneSet(_ownCutPlaneSet, _sectionPlanes, fireEvent);
  }

  function showPlane(set) {
    for (var i = 0; i < _sectionGroups.length; i++) {
      _sectionGroups[i].visible = set;
    }

    if (_isPlaneOn !== set)
    updateViewer();

    _isPlaneOn = set;
  }

  function showSection(set) {
    if (set && _sectionPlanes.length > 0) {
      if (_sectionPlanes.length === 1) {
        updateCapMeshes(new THREE.Plane().setComponents(_sectionPlanes[0].x, _sectionPlanes[0].y, _sectionPlanes[0].z, _sectionPlanes[0].w));
      }
      _viewer.setCutPlaneSet(_ownCutPlaneSet, _sectionPlanes);
    }
    showPlane(set);
  }

  function attachControl(control, mesh) {
    control.attach(mesh);
    control.setPosition(mesh.position);
    control.visible = true;
  }

  function checkNormal(normal) {
    // flip normal if facing inward as eye direction
    var eyeVec = _viewer.api.navigation.getEyeVector();
    if (eyeVec.dot(normal) > 0) {
      normal.negate();
    }

    return normal;
  }

  function setPlane(normal, distance) {var fireEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var obbox = _viewer.getVisibleBounds();
    var center = obbox.getCenter(new THREE.Vector3());
    var group = new THREE.Group();
    // Calculate the plane signed distance using the dot product of the center point of the scene bounding box
    // and the normal vector.
    distance = distance !== undefined ? distance : -1 * center.dot(normal);
    var plane = new THREE.Plane(normal, distance);
    var mesh = createPlaneMesh(plane, null);
    group.add(mesh);
    _sectionPlanes.push(mesh.planeVec);
    _sectionGroups.push(group);
    _viewer.addOverlay(_overlayName, group);
    if (_transRotControl) {
      attachControl(_transRotControl, mesh);
      mesh.material.opacity = 0;
      centerPlaneArrow(mesh);
      _transRotControl.showRotationGizmos(true);
      _sectionPicker = _transRotControl.getPicker();

    }
    setSectionPlanes(fireEvent);
    if (_active) {
      updateControls();
    }
  }

  function getCenterPoint(mesh) {
    var middle = new THREE.Vector3();
    var geometry = mesh.geometry;

    geometry.computeBoundingBox();

    middle.x = (geometry.boundingBox.max.x + geometry.boundingBox.min.x) / 2;
    middle.y = (geometry.boundingBox.max.y + geometry.boundingBox.min.y) / 2;
    middle.z = (geometry.boundingBox.max.z + geometry.boundingBox.min.z) / 2;

    mesh.localToWorld(middle);
    return middle;
  }

  /**
     * Places the arrow at the center of the passed in mesh.
     * @param {*} mesh 
     */
  function centerPlaneArrow(mesh) {
    if (!_transRotControl || !mesh) return false;
    // Get the center of the plane and 
    // calculate the x,y,z offset between the plane position and the plane center
    var centerOffset = getCenterPoint(mesh).sub(mesh.position);
    centerOffset.sub(_trcOffset);
    // Set the gizmo offset
    _transRotControl.setGizmoOffset(centerOffset);
    return true;
  }

  function setBox(planeSet) {
    var normals = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(0, 0, -1)];


    var connectivities = [
    [[1, 2], [1, 5], [2, 4], [4, 5]], // 0
    [[3, 5], [0, 5], [2, 3], [0, 2]], // 1
    [[1, 3], [0, 1], [3, 4], [0, 4]], // 2
    [[1, 5], [1, 2], [4, 5], [2, 4]], // 3
    [[2, 3], [0, 2], [3, 5], [0, 5]], // 4
    [[0, 1], [3, 1], [0, 4], [3, 4]] // 5
    ];

    var group = new THREE.Group();
    var obbox = _viewer.getVisibleBounds();
    var center = obbox.getCenter(new THREE.Vector3());
    var bbox = new THREE.Box3(obbox.min, center);

    // Initialize from planeSet ONLY if it's an AABB.
    var loadingBox = false;
    if (planeSet && planeSet.length === 6 && planeSet[0].x === 1.0) {
      // Assume that the order on planes is the same as in Array of normals defined above
      bbox = new THREE.Box3(
      new THREE.Vector3(planeSet[3].w, planeSet[4].w, planeSet[5].w),
      new THREE.Vector3(planeSet[0].w, planeSet[1].w, planeSet[2].w));

      center = bbox.max.clone();
      loadingBox = true;
    }

    ////center = obbox.max;   // Use this to initialize the box around the model
    ////bbox = obbox.clone(); // Use this to initialize the box around the model
    var
    ptMax = new THREE.Vector3(),ptMin = new THREE.Vector3();
    var planes = [],meshes = [];
    var i, mesh, plane;
    for (i = 0; i < normals.length; i++) {

      if (loadingBox) {
        plane = new THREE.Plane(normals[i], planeSet[i].w);
        planes.push(plane);
      } else

      {
        plane = new THREE.Plane(normals[i], -1 * center.dot(normals[i]));
        planes.push(plane);

        // offset plane with negative normal to form an octant
        if (i > 2) {
          (0,_thirdparty_three_js_three_legacy__WEBPACK_IMPORTED_MODULE_1__.planeOrthoPoint)(plane, bbox.max, ptMax);
          (0,_thirdparty_three_js_three_legacy__WEBPACK_IMPORTED_MODULE_1__.planeOrthoPoint)(plane, bbox.min, ptMin);
          var size = new THREE.Vector3().subVectors(ptMax, ptMin);
          plane.constant -= size.length();
        }
      }

      mesh = createPlaneMesh(plane, bbox);
      group.add(mesh);
      meshes.push(mesh);
      _sectionPlanes.push(mesh.planeVec);
    }

    // build connectivity
    for (i = 0; i < meshes.length; i++) {
      mesh = meshes[i];
      var connectivity = connectivities[i];
      for (var j = 0; j < connectivity.length; j++) {
        var nc = [];
        var ct = connectivity[j];
        for (var k = 0; k < ct.length; k++) {
          nc.push(planes[ct[k]]);
        }
        mesh.connectivity.push(nc);
      }
    }

    _sectionGroups.push(group);
    _viewer.addOverlay(_overlayName, group);

    setSectionPlanes();
    updatePlaneMeshes();

    plane = _sectionGroups[0].children[0];
    attachControl(_transRotControl, plane);
    // Set the plane opacity
    plane.material.opacity = _selectionOpacity;
    centerPlaneArrow(plane);

    attachControl(_transControl, _sectionGroups[0]);
    _transRotControl.showRotationGizmos(false);
    _sectionPicker = _transRotControl.getPicker().concat(_transControl.getPicker());
    // Calculate the offset to the max point of the bounding box.
    var sectionBoxPosition = _sectionGroups[0].position.clone();
    var cornerOffset = sectionBoxPosition.sub(center.clone());
    _transControl.setGizmoOffset(cornerOffset);
  }

  var intersectPlanes = function () {
    var m = new THREE.Matrix3();
    var n23 = new THREE.Vector3();
    var n31 = new THREE.Vector3();
    var n12 = new THREE.Vector3();
    return function (plane1, plane2, plane3, optionalTarget) {
      m.set(plane1.normal.x, plane1.normal.y, plane1.normal.z,
      plane2.normal.x, plane2.normal.y, plane2.normal.z,
      plane3.normal.x, plane3.normal.y, plane3.normal.z);

      var det = m.determinant();
      if (det === 0) return null;

      n23.crossVectors(plane2.normal, plane3.normal).multiplyScalar(-plane1.constant);
      n31.crossVectors(plane3.normal, plane1.normal).multiplyScalar(-plane2.constant);
      n12.crossVectors(plane1.normal, plane2.normal).multiplyScalar(-plane3.constant);

      var result = optionalTarget || new THREE.Vector3();
      return result.copy(n23).add(n31).add(n12).divideScalar(det);
    };
  }();

  var intersectObjects = function intersectObjects(pointer, objects, recursive) {
    return THREE.TransformControls.intersectObjects(pointer.canvasX, pointer.canvasY, objects, _viewer.camera, recursive);
  };

  // public functions

  /**
   * When active, the geometry will be sectioned by the current set cut plane.
   * @returns {boolean}
   */
  this.isActive = function () {
    return _active;
  };

  /**
      * Returns the signed distance of the sectioning plane from the origin
      * @returns {Number} distance. Null distance is returned if there is no hit found from raycast
      */
  this.getSectionDistance = function (normal) {
    // Find a target point in the direction of the camera 
    var eyeVec = _viewer.api.navigation.getEyeVector();
    var hit = _viewer.rayIntersect(new THREE.Ray(_viewer.camera.position, eyeVec));
    // DIstance
    return hit && hit.intersectPoint && -1 * hit.intersectPoint.dot(normal);
  };

  /**
      * Enables the cut planes that were created by the viewer.setCutPlanes() function.
      * @param {boolean} [fireEvent] - if set to false the av.CUTPLANES_CHANGE_EVENT event will not be fired.
      */
  this.setViewerSection = function () {var fireEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.clearSection(fireEvent);
    var normal;
    // Attempt to initialize the tool with a plane that is already set.
    var planeSet = _viewer.getCutPlaneSet('__set_view');
    if (planeSet.length !== 1) return;

    _transRotControl.clientScale = 1;
    var v4 = planeSet[0];
    normal = new THREE.Vector3(v4.x, v4.y, v4.z);
    var distance = v4.w;
    setPlane(normal, distance, fireEvent);
    _activeMode = 'SET_VIEW_PLANE';
    // Clear sections from Viewer3D::setView
    _viewer.setCutPlaneSet('__set_view', undefined, fireEvent);
  };



  /**
      * Facilitates the initialization of a cut plane
      * 
      * @param {String} name - Either 'X', 'Y', 'Z' or 'BOX'
      */
  this.setSection = function (name) {
    this.clearSection();
    _trcOffset = new THREE.Vector3();
    var normal, distance;
    _transRotControl.clientScale = 1;

    // Attempt to initialize the tool with a plane that is already set.
    var planeSet = _viewer.getCutPlaneSet('__set_view');
    if (planeSet.length === 1 && name !== 'BOX' && name !== 'OBJ_SET_VIEW_PLANE') {
      name = 'SET_VIEW_PLANE';
    }

    switch (name) {
      case 'X':
        normal = new THREE.Vector3(1, 0, 0);
        distance = this.getSectionDistance(normal);
        setPlane(checkNormal(normal), distance);
        break;
      case 'Y':
        normal = new THREE.Vector3(0, 1, 0);
        distance = this.getSectionDistance(normal);
        setPlane(checkNormal(normal), distance);
        break;
      case 'Z':
        normal = new THREE.Vector3(0, 0, 1);
        distance = this.getSectionDistance(normal);
        setPlane(checkNormal(normal), distance);
        break;
      case 'OBJ_SET_VIEW_PLANE':
      case 'SET_VIEW_PLANE':
        var v4 = planeSet[0];
        normal = new THREE.Vector3(v4.x, v4.y, v4.z);
        setPlane(normal, v4.w);
        break;
      case 'OBJ_BOX':
      case 'BOX':
        setBox(planeSet);
        _transRotControl.clientScale = 2;
        this.recomputePivot();
        break;}

    _activeMode = name;

    // Clear sections from Viewer3D::setView
    _viewer.setCutPlaneSet('__set_view', undefined);
  };

  /**
      * Facilitates the initialization of a cut plane from a normal and distance
      *
      * @param {THREE.Vector4} normal (x,y,z) and distance (w)
      * @param {Number} distance
      */
  this.setSectionFromPlane = function (cutplane) {
    this.clearSection();
    setPlane(new THREE.Vector3(cutplane.x, cutplane.y, cutplane.z), cutplane.w);
    _activeMode = "";

    // Clear sections from Viewer3D::setView
    _viewer.setCutPlaneSet('__set_view', undefined);
  };

  /**
      * Set the active mode
      * @param {string} [name] - active mode name
      * @private
      */
  this.setActiveMode = function (name) {
    _activeMode = name || "";
  };

  /**
      * Remove the section graphics
      */
  function _removeSections() {
    var oldsection3D = _viewer.scene.getObjectByName("section3D");
    if (oldsection3D)
    _viewer.scene.remove(oldsection3D);
    var oldsection2D = _viewer.sceneAfter.getObjectByName("section2D");
    if (oldsection2D)
    _viewer.sceneAfter.remove(oldsection2D);
  }

  this.setDisplaySectionHatches = function (value) {
    _displaySectionHatches = value;
  };

  this.updateCapMeshes = function (plane) {
    if (!plane) {
      return;
    }

    setPlane(plane.normal, plane.constant);
    updateCapMeshes(plane);
  };

  /**
      * Removes any (and all) currently set cut plane(s).
      * @param {boolean} [fireEvent] - if set to false the av.CUTPLANES_CHANGE_EVENT event will not be fired.
      */
  this.clearSection = function () {var fireEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (_transRotControl)
    _transRotControl.detach();

    if (_transControl)
    _transControl.detach();

    // remove all sections
    while (_sectionPlanes.length > 0) {
      _sectionPlanes.pop();
    }

    while (_sectionGroups.length > 0) {
      var group = _sectionGroups.pop();
      _viewer.removeOverlay(_overlayName, group);
    }

    _fragIterator.start(null); // Shutdown iterator        
    _removeSections();

    _viewer.setCutPlaneSet(_ownCutPlaneSet, null, fireEvent);
  };

  this.isPlaneOn = function () {
    return _isPlaneOn;
  };

  this.showPlane = function (set) {
    showPlane(set);
  };

  /**
      * Whether translation and rotation controls are visible or not.
      * @param {Boolean} set
      */
  this.attachControl = function (set) {
    if (!_transRotControl || !_transControl) {
      return;
    }

    if (set) {
      attachControl(_transRotControl, _sectionGroups[0].children[0]);
      _transRotControl.highlight();
      if (_activeMode === 'BOX')
      attachControl(_transControl, _sectionGroups[0]);
    } else {
      _transRotControl.detach();
      _transControl.detach();
    }
  };

  /**
      * Invokes setSection with the last set of parameters used.
      */
  this.resetSection = function () {
    this.setSection(_activeMode);
  };

  // tool interface

  this.getNames = function () {
    return _names;
  };

  this.getName = function () {
    return _names[0];
  };

  this.register = function () {
  };

  this.deregister = function () {
    this.clearSection();
    deinitControl();
  };

  this.getPriority = function () {
    return _priority;
  };

  /**
      * [ToolInterface] Activates the tool
      * @param {String} name - unused
      */
  this.activate = function () /*name*/{

    initControl();

    _active = true;
    _isDragging = false;
    _visibleAtFirst = true;

    // keep only one section all the time per design
    _sectionPlanes = _sectionPlanes || [];

    showSection(true);
  };

  /**
      * [ToolInterface] Deactivates the tool
      * @param {String} name - unused
      */
  this.deactivate = function () /*name*/{
    _active = false;
    _isDragging = false;

    if (!this.keepCutPlanesOnDeactivate) {
      // Clean sections and gizmos when deactivating the tool.
      _fragIterator.start(null); // Shutdown iterator        
      _removeSections();

      showSection(false);
      _viewer.setCutPlaneSet(_ownCutPlaneSet);
    } else {
      // In case that keepCutPlanesOnDeactivate is set, the control gizmos will disappear, but the sections will stay.
      _viewer.removeOverlay(_overlayName, _transRotControl);
      _viewer.removeOverlay(_overlayName, _transControl);

      for (var i = 0; i < _sectionGroups.length; i++) {
        _viewer.removeOverlay(_overlayName, _sectionGroups[i]);
      }
    }

    _transRotControl.detach();
    _transControl.detach();
  };

  this.update = function () /*highResTimestamp*/{
    return false;
  };

  this.handleSingleClick = function (event /*, button*/) {var _sectionGroups$;
    var pointer = event;
    var result = intersectObjects(pointer, (_sectionGroups$ = _sectionGroups[0]) === null || _sectionGroups$ === void 0 ? void 0 : _sectionGroups$.children);
    _sectionGroups[0].children.forEach(function (child) {
      child.material.opacity = 0;
    });

    if (result) {var _sectionGroups$2;
      var prevObject = _transRotControl.object;
      attachControl(_transRotControl, result.object);
      _transRotControl.highlight();
      result.object.material.opacity = _sectionPlanes.length > 1 ? _selectionOpacity : 0;
      // Only in case of a section box, and only when clicking on a different plane - re-center the arrow.
      if (((_sectionGroups$2 = _sectionGroups[0]) === null || _sectionGroups$2 === void 0 ? void 0 : _sectionGroups$2.children.length) > 1 && prevObject !== result.object) {
        centerPlaneArrow(result.object);
      }
      updateViewer();
      adjustGizmoToBounds();
    }

    return false;
  };

  this.handleDoubleClick = function () /*event, button*/{
    return false;
  };

  this.handleSingleTap = function (event) {
    return this.handleSingleClick(event, 0);
  };

  this.handleDoubleTap = function () /*event*/{
    return false;
  };

  this.handleKeyDown = function () /*event, keyCode*/{
    return false;
  };

  this.handleKeyUp = function () /*event, keyCode*/{
    return false;
  };

  this.handleWheelInput = function () /*delta*/{
    return false;
  };

  this.handleButtonDown = function (event /*, button*/) {
    _isDragging = true;
    if (_transControl.onPointerDown(event))
    return true;
    return _transRotControl.onPointerDown(event);
  };

  this.handleButtonUp = function (event /*, button*/) {
    _isDragging = false;
    if (_boxChanged) {
      _boxChanged = false;
      this.recomputePivot();
    }
    if (_transControl.onPointerUp(event))
    return true;
    return _transRotControl.onPointerUp(event);
  };

  this.handleMouseMove = function (event) {
    var oldTransControlPos = _transControl.object ? new THREE.Vector3().copy(_transControl.object.position) : null;
    // var oldMaxPoint = _transControl.object ? getMaxPoint(_transControl.object) : null;
    if (_isDragging) {
      if (_transControl.onPointerMove(event)) {
        _boxChanged = true;
        setSectionPlanes();
        _transRotControl.update();
        // Keep track of the section box offset
        var boxOffset = new THREE.Vector3().copy(_transControl.object.position).sub(oldTransControlPos);
        // Add the box offset to the section plane offset
        _trcOffset.add(boxOffset);

        sendAnalyticsDebounced('Canvas', 'Box', 'translate');

        return true;
      }
      if (_transRotControl.onPointerMove(event)) {
        _boxChanged = true;
        setSectionPlanes();
        updatePlaneMeshes();
        // TODO: Try to position the triad to the max corner of the section box when moving the plane arrow.
        // Currently, it is positioned at the max point of the section box.

        if (_activeMode.includes('BOX'))
        sendAnalyticsDebounced('Canvas', 'Box', 'transform');else
        {
          var mode = _transRotControl.axis.search("R") != -1 ? "rotate" : "translate";
          sendAnalyticsDebounced('Canvas', 'Plane', mode);
        }

        return true;
      }
    }

    _transControl.visible = _transControl.object !== undefined;

    if (event.pointerType !== 'touch') {var _sectionGroups$3;
      var pointer = event;
      var result = intersectObjects(pointer, (_sectionGroups$3 = _sectionGroups[0]) === null || _sectionGroups$3 === void 0 ? void 0 : _sectionGroups$3.children);
      if (result) {
        _visibleAtFirst = false;
      }

      // show gizmo + plane when intersecting on non-touch 
      var visible = _visibleAtFirst || result || intersectObjects(pointer, _sectionPicker, true) ? true : false;
      _transRotControl.visible = visible;
      _transControl.visible = _transControl.visible && visible;
      showPlane(visible);
    }

    if (_transControl.onPointerHover(event))
    return true;

    return _transRotControl.onPointerHover(event);
  };

  this.handleGesture = function (event) {
    switch (event.type) {
      case "dragstart":
        _touchType = "drag";
        // Single touch, fake the mouse for now...
        return this.handleButtonDown(event, 0);

      case "dragmove":
        return _touchType === "drag" ? this.handleMouseMove(event) : false;

      case "dragend":
        if (_touchType === "drag") {
          _touchType = null;
          return this.handleButtonUp(event, 0);
        }
        return false;}

    return false;
  };

  this.handleBlur = function () /*event*/{
    return false;
  };

  this.handleResize = function () {
  };

  this.handlePressHold = function () /*event*/{
    // When this method returns true, it will not call the DefaultHandler's handlePressHold.
    // This makes it not possible to open the context menu on mobile.
    return false;
  };

  this.recomputePivot = function () {

    var values = this.getSectionBoxValues(true);
    if (!values) return;

    var aabb = values.sectionBox;

    _viewer.api.navigation.setPivotPoint(new THREE.Vector3(
    aabb[0] + (aabb[3] - aabb[0]) * 0.5,
    aabb[1] + (aabb[4] - aabb[1]) * 0.5,
    aabb[2] + (aabb[5] - aabb[2]) * 0.5));

  };

  this.getSectionBoxValues = function (ignoreGlobalOffset) {

    var group = _sectionGroups[0];
    if (!group) {
      return null;
    }

    var planes = group.children;
    if (planes.length < 6) {
      return null;
    }

    var right = planes[0].position.x;
    var top = planes[1].position.y;
    var front = planes[2].position.z;
    var left = planes[3].position.x;
    var bttm = planes[4].position.y;
    var back = planes[5].position.z;

    var off = { x: 0, y: 0, z: 0 };
    if (!ignoreGlobalOffset) {
      off = _viewer.model.getData().globalOffset || off;
    }

    var aabb = [
    Math.min(left, right) + off.x,
    Math.min(top, bttm) + off.y,
    Math.min(front, back) + off.z,
    Math.max(left, right) + off.x,
    Math.max(top, bttm) + off.y,
    Math.max(front, back) + off.z];


    // Box doesn't support rotation at the moment.
    // Will have to take it into account if that becomes a feature.
    var transform = new THREE.Matrix4().identity().toArray();

    return {
      sectionBox: aabb,
      sectionBoxTransform: transform };

  };

  this.getSectionPlaneValues = function (ignoreGlobalOffset) {

    var group = _sectionGroups[0];
    if (!group) {
      return null;
    }

    var planes = group.children;
    if (planes.length !== 1) {
      return null;
    }

    var off = { x: 0, y: 0, z: 0 };
    if (!ignoreGlobalOffset) {
      off = _viewer.model.getData().globalOffset || off;
    }

    var plane = planes[0].plane;
    var constant = plane.constant - THREE.Vector3.prototype.dot.call(off, plane.normal);

    return {
      sectionPlane: [
      plane.normal.x,
      plane.normal.y,
      plane.normal.z,
      constant] };


  };

  this.getSectionPlaneSet = function () {
    return _viewer.getCutPlaneSet(_ownCutPlaneSet);
  };

  this.getSectionPlanes = function () {
    // When restoring a viewer state it is put in __set_view, so return from that set
    // However, the notifyCutplanesChanged function can call setViewerSection which would
    // move the planes from __set_view into _ownCutPlaneSet
    var viewSet = _viewer.getCutPlaneSet('__set_view');
    if (viewSet.length > 0) {
      return viewSet;
    }

    return _viewer.getCutPlaneSet(_ownCutPlaneSet);
  };

  // Called by viewer if any cutplanes are modified. It makes sure that cutplanes controlled by separate tools
  // (with own cutplane sets) are considered by our cap meshes.
  this.notifyCutplanesChanged = function () {

    var numCutPlanesBefore = _otherCutPlanes.length;

    // Collect all active cutplanes from other tools
    //
    // NOTE: It's essential that we don't create a new array, but just refill the same one.
    //       Since the cap meshes are created async, the cutPlaneChange event may come in the middle of
    //       the cap mesh generation. For consistency, we want all cap meshes to share the same cutplane array.
    _otherCutPlanes.length = 0;
    var cpSets = _viewer.getCutPlaneSets();
    for (var i = 0; i < cpSets.length; i++) {

      // skip our own cut planes
      var cpName = cpSets[i];
      if (cpName === _ownCutPlaneSet) {
        continue;
      }

      // add cutplanes of this set
      var cp = _viewer.getCutPlaneSet(cpName);
      for (var j = 0; j < cp.length; j++) {
        _otherCutPlanes.push(cp[j]);
      }
    }

    // Set the section tool to the viewer defined cutplane.
    if (cpSets.includes("__set_view") && _activeMode !== "" && _activeMode.indexOf("OBJ_") === -1) {
      this.setViewerSection(false);
    }

    // If the number of cutplanes changed, this requires a shader recompile of the cap materials
    if (numCutPlanesBefore !== _otherCutPlanes.length) {
      updateCapMaterials(false);
    }
  };

  // Sections use cloned materials outside the control of MaterialManager. Thus, when rendering options change, materials need to get recompiled
  this.notifyRenderOptionChanged = function () {
    updateCapMaterials(true);
  };

  /**
      * Set a section box around the passed in bounding box.
      * @param {THREE.Box3} box
      * @returns {boolean} - true if the section box was set
      */
  this.setSectionBox = function (box) {
    if (!box) return false;
    var name = 'OBJ_BOX';
    // Convert the bounding box to planes
    var planes = Autodesk.Viewing.Private.SceneMath.box2CutPlanes(box, box.transform);
    _activeMode = name;
    _viewer.setCutPlaneSet('__set_view', planes);
    this.setSection(name);
    return true;
  };

  /**
      * Set a section plane at the intersection position.
      * @param {Three.Vector3} normal - plane normal.
      * @param {Three.Vector3} position - position to place the plane.
      * @returns {boolean} - true if the section plane was set
      */
  this.setSectionPlane = function (normal, position) {var _transRotControl2, _transRotControl3;var enableRotationGizmo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!normal || !position) return false;
    var name = 'OBJ_SET_VIEW_PLANE';
    var distance = -1 * position.dot(normal);
    var plane = new THREE.Plane(normal, distance);
    _activeMode = name;
    var planeVecs = [new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant)];
    _viewer.setCutPlaneSet('__set_view', planeVecs);
    this.setSection(name);
    // RotationGizmos are turned on by default.
    // The option to disable it, is for cases like activating the section tool from the context menu.
    (_transRotControl2 = _transRotControl) === null || _transRotControl2 === void 0 ? void 0 : _transRotControl2.showRotationGizmos(enableRotationGizmo);
    var pos = position.clone().sub(_sectionGroups[0].children[0].position);
    (_transRotControl3 = _transRotControl) === null || _transRotControl3 === void 0 ? void 0 : _transRotControl3.setGizmoOffset(pos);

    return true;
  };
};

function init_SectionMesh() {

  if (SectionMeshClass)
  return;

  var tmpWorldPosition = new THREE.Vector3();var
  SectionMesh = /*#__PURE__*/function (_THREE$Mesh) {_inherits(SectionMesh, _THREE$Mesh);var _super = _createSuper(SectionMesh);
    function SectionMesh(geometry, material, plane) {var _this;_classCallCheck(this, SectionMesh);

      _this = _super.call(this, geometry, material, false);

      _this.plane = plane;
      _this.planeVec = new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
      _this.connectivity = [];
      _this.outline = null;return _this;
    }_createClass(SectionMesh, [{ key: "update", value: function update()

      {

        this.plane.normal.set(0, 0, 1);
        this.plane.normal.applyQuaternion(this.quaternion);

        var normal = this.plane.normal;
        var d = -1 * this.getWorldPosition(tmpWorldPosition).dot(normal);
        this.planeVec.set(normal.x, normal.y, normal.z, d);
        this.plane.constant = d;
      } }]);return SectionMesh;}(THREE.Mesh);

  SectionMeshClass = SectionMesh;
}

/***/ }),

/***/ "./thirdparty/three.js/TransformControls.js":
/*!**************************************************!*\
  !*** ./thirdparty/three.js/TransformControls.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init_TransformGizmos": () => (/* binding */ init_TransformGizmos)
/* harmony export */ });
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @author arodic / https://github.com/arodic
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @author chiena -- Modified for Autodesk LMV web viewer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
/*jshint sub:true*/

function init_TransformGizmos() {

  'use strict';var

  GizmoMaterial = /*#__PURE__*/function (_THREE$MeshBasicMater) {_inherits(GizmoMaterial, _THREE$MeshBasicMater);var _super = _createSuper(GizmoMaterial);
    function GizmoMaterial(parameters) {var _this;_classCallCheck(this, GizmoMaterial);

      _this = _super.call(this);

      _this.depthTest = false;
      _this.depthWrite = false;
      _this.side = THREE.FrontSide;
      _this.transparent = true;

      _this.setValues(parameters);

      _this.oldColor = _this.color.clone();
      _this.oldOpacity = _this.opacity;

      _this.highlight = function (highlighted) {

        if (highlighted) {

          this.color.setRGB(1, 230 / 255, 3 / 255);
          this.opacity = 1;

        } else {

          this.color.copy(this.oldColor);
          this.opacity = this.oldOpacity;

        }

      };return _this;

    }return GizmoMaterial;}(THREE.MeshBasicMaterial);var


  GizmoLineMaterial = /*#__PURE__*/function (_THREE$LineBasicMater) {_inherits(GizmoLineMaterial, _THREE$LineBasicMater);var _super2 = _createSuper(GizmoLineMaterial);

    function GizmoLineMaterial(parameters) {var _this2;_classCallCheck(this, GizmoLineMaterial);

      _this2 = _super2.call(this);

      _this2.depthTest = false;
      _this2.depthWrite = false;
      _this2.transparent = true;
      _this2.linewidth = 1;

      _this2.setValues(parameters);

      _this2.oldColor = _this2.color.clone();
      _this2.oldOpacity = _this2.opacity;

      _this2.highlight = function (highlighted) {

        if (highlighted) {

          this.color.setRGB(1, 230 / 255, 3 / 255);
          this.opacity = 1;

        } else {

          this.color.copy(this.oldColor);
          this.opacity = this.oldOpacity;

        }

      };return _this2;

    }return GizmoLineMaterial;}(THREE.LineBasicMaterial);


  var createCircleGeometry = function createCircleGeometry(radius, facing, arc) {
    var vertices = [];
    arc = arc ? arc : 1;
    for (var i = 0; i <= 64 * arc; ++i) {
      if (facing == 'x') vertices.push(new THREE.Vector3(0, Math.cos(i / 32 * Math.PI), Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
      if (facing == 'y') vertices.push(new THREE.Vector3(Math.cos(i / 32 * Math.PI), 0, Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
      if (facing == 'z') vertices.push(new THREE.Vector3(Math.sin(i / 32 * Math.PI), Math.cos(i / 32 * Math.PI), 0).multiplyScalar(radius));
    }

    return new THREE.BufferGeometry().setFromPoints(vertices);
  };

  var createArrowGeometry = function createArrowGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded) {
    var arrowGeometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
    return arrowGeometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
  };

  var createLineGeometry = function createLineGeometry(axis) {
    var vertices = [];
    if (axis === 'X')
    vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0));else
    if (axis === 'Y')
    vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));else
    if (axis === 'Z')
    vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));

    return new THREE.BufferGeometry().setFromPoints(vertices);
  };var

  TransformGizmo = /*#__PURE__*/function (_THREE$Object3D) {_inherits(TransformGizmo, _THREE$Object3D);var _super3 = _createSuper(TransformGizmo);
    function TransformGizmo(includeAxis) {var _this3;_classCallCheck(this, TransformGizmo);

      _this3 = _super3.call(this);

      var scope = _assertThisInitialized(_this3);
      var showPickers = false; //debug
      var showActivePlane = false; //debug


      _this3.init = function () {
        this.handles = new THREE.Object3D();
        this.pickers = new THREE.Object3D();
        this.planes = new THREE.Object3D();
        this.highlights = new THREE.Object3D();
        this.hemiPicker = new THREE.Object3D();
        this.subPickers = new THREE.Object3D();

        this.add(this.handles);
        this.add(this.pickers);
        this.add(this.planes);
        this.add(this.highlights);
        this.add(this.hemiPicker);
        this.add(this.subPickers);

        //// PLANES

        var planeGeometry = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
        var planeMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
        planeMaterial.side = THREE.DoubleSide;

        var planes = {
          "XY": new THREE.Mesh(planeGeometry, planeMaterial),
          "YZ": new THREE.Mesh(planeGeometry, planeMaterial),
          "XZ": new THREE.Mesh(planeGeometry, planeMaterial),
          "XYZE": new THREE.Mesh(planeGeometry, planeMaterial) };


        this.activePlane = planes["XYZE"];

        planes["YZ"].rotation.set(0, Math.PI / 2, 0);
        planes["XZ"].rotation.set(-Math.PI / 2, 0, 0);

        for (var i in planes) {
          planes[i].name = i;
          this.planes.add(planes[i]);
          this.planes[i] = planes[i];
          planes[i].visible = false;
        }

        this.setupGizmos();
        this.activeMode = "";

        // reset Transformations

        this.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.updateMatrix();

            var tempGeometry = child.geometry.clone();
            tempGeometry.applyMatrix4(child.matrix);
            child.geometry = tempGeometry;

            child.position.set(0, 0, 0);
            child.rotation.set(0, 0, 0);
            child.scale.set(1, 1, 1);
          }
        });

      };

      _this3.hide = function () {
        this.traverse(function (child) {
          child.visible = false;
        });
      };

      _this3.show = function () {
        this.traverse(function (child) {
          child.visible = true;
          if (child.parent == scope.pickers || child.parent == scope.hemiPicker) child.visible = showPickers;
          if (child.parent == scope.planes) child.visible = false;
        });
        this.activePlane.visible = showActivePlane;
      };

      _this3.highlight = function (axis) {
        this.traverse(function (child) {
          if (child.material && child.material.highlight) {
            if (child.name == axis) {
              child.material.highlight(true);
            } else {
              child.material.highlight(false);
            }
          }
        });
      };

      _this3.setupGizmos = function () {

        var addGizmos = function addGizmos(gizmoMap, parent) {

          for (var name in gizmoMap) {

            for (var i = gizmoMap[name].length; i--;) {

              var object = gizmoMap[name][i][0];
              var position = gizmoMap[name][i][1];
              var rotation = gizmoMap[name][i][2];
              var visble = gizmoMap[name][i][3];

              object.name = name;

              if (position) object.position.set(position[0], position[1], position[2]);
              if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
              if (visble) object.visble = visble;

              parent.add(object);

            }

          }

        };

        this.setHandlePickerGizmos();

        if (includeAxis) {
          var axisNames = Object.keys(this.handleGizmos);

          for (var i = 0; i < axisNames.length; i++) {
            var axisName = axisNames[i];

            if (includeAxis.indexOf(axisName) === -1) {
              delete this.handleGizmos[axisName];
              delete this.pickerGizmos[axisName];
              delete this.hemiPickerGizmos[axisName];
            }
          }
        }

        addGizmos(this.handleGizmos, this.handles);
        addGizmos(this.pickerGizmos, this.pickers);
        addGizmos(this.highlightGizmos, this.highlights);
        addGizmos(this.hemiPickerGizmos, this.hemiPicker);
        addGizmos(this.subPickerGizmos, this.subPickers);

        this.hide();
        this.show();

      };return _this3;

    }_createClass(TransformGizmo, [{ key: "update", value: function update(

      rotation, eye) {

        var vec1 = new THREE.Vector3(0, 0, 0);
        var vec2 = new THREE.Vector3(0, 1, 0);
        var lookAtMatrix = new THREE.Matrix4();

        this.traverse(function (child) {
          if (child.name) {
            if (child.name.search("E") != -1) {
              child.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(eye, vec1, vec2));
            } else if (child.name.search("X") != -1 || child.name.search("Y") != -1 || child.name.search("Z") != -1) {
              child.quaternion.setFromEuler(rotation);
            }
          }
        });

      } }]);return TransformGizmo;}(THREE.Object3D);

  THREE.TransformGizmo = TransformGizmo;var

  TransformGizmoTranslate = /*#__PURE__*/function (_TransformGizmo) {_inherits(TransformGizmoTranslate, _TransformGizmo);var _super4 = _createSuper(TransformGizmoTranslate);
    function TransformGizmoTranslate(includeAxis) {var _this4;_classCallCheck(this, TransformGizmoTranslate);

      _this4 = _super4.call(this, includeAxis);

      _this4.setHandlePickerGizmos = function () {

        var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
        var lineXGeometry = createLineGeometry('X');
        var lineYGeometry = createLineGeometry('Y');
        var lineZGeometry = createLineGeometry('Z');

        this.handleGizmos = {
          X: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xf12c2c })), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
          [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xf12c2c }))]],

          Y: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0bb80b })), [0, 0.5, 0]],
          [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x0bb80b }))]],

          Z: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x2c2cf1 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
          [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x2c2cf1 }))]],

          XYZ: [
          [new THREE.Mesh(new THREE.OctahedronBufferGeometry(0.1, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 })), [0, 0, 0], [0, 0, 0]]],

          XY: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.15, 0.15, 0]]],

          YZ: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],

          XZ: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]] };



        this.pickerGizmos = {
          X: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

          Y: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0.6, 0]]],

          Z: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

          XYZ: [
          [new THREE.Mesh(new THREE.OctahedronBufferGeometry(0.2, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]],

          XY: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.2, 0.2, 0]]],

          YZ: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],

          XZ: [
          [new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]] };



        this.hemiPickerGizmos = {
          XYZ: [
          [new THREE.Mesh(new THREE.BoxBufferGeometry(1.2, 1.2, 1.2), new GizmoMaterial({ color: 0x0000ff })), [0.5, 0.5, 0.5], null, false]] };



      };

      _this4.setActivePlane = function (axis, eye, isLocalSpace) {

        var tempMatrix = new THREE.Matrix4();
        eye.applyMatrix4(tempMatrix.extractRotation(this.planes["XY"].matrixWorld).invert());

        if (axis == "X") {
          this.activePlane = this.planes["XY"];
          if (!isLocalSpace && Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
        }

        if (axis == "Y") {
          this.activePlane = this.planes["XY"];
          if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
        }

        if (axis == "Z") {
          this.activePlane = this.planes["XZ"];
          if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
        }

        if (axis == "XYZ") this.activePlane = this.planes["XYZE"];

        if (axis == "XY") this.activePlane = this.planes["XY"];

        if (axis == "YZ") this.activePlane = this.planes["YZ"];

        if (axis == "XZ") this.activePlane = this.planes["XZ"];

        this.hide();
        this.show();

      };

      _this4.init();return _this4;

    }return TransformGizmoTranslate;}(TransformGizmo);

  THREE.TransformGizmoTranslate = TransformGizmoTranslate;var

  TransformGizmoRotate = /*#__PURE__*/function (_TransformGizmo2) {_inherits(TransformGizmoRotate, _TransformGizmo2);var _super5 = _createSuper(TransformGizmoRotate);
    function TransformGizmoRotate(includeAxis) {var _this5;_classCallCheck(this, TransformGizmoRotate);

      _this5 = _super5.call(this, includeAxis);

      _this5.setHandlePickerGizmos = function () {

        this.handleGizmos = {
          RX: [
          [new THREE.Line(createCircleGeometry(1, 'x', 0.5), new GizmoLineMaterial({ color: 0xff0000 }))]],

          RY: [
          [new THREE.Line(createCircleGeometry(1, 'y', 0.5), new GizmoLineMaterial({ color: 0x00ff00 }))]],

          RZ: [
          [new THREE.Line(createCircleGeometry(1, 'z', 0.5), new GizmoLineMaterial({ color: 0x0000ff }))]],

          RE: [
          [new THREE.Line(createCircleGeometry(1.25, 'z', 1), new GizmoLineMaterial({ color: 0x00ffff }))]],

          RXYZE: [
          [new THREE.Line(createCircleGeometry(1, 'z', 1), new GizmoLineMaterial({ color: 0xff00ff }))]] };



        this.pickerGizmos = {
          RX: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],

          RY: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0, 0], [Math.PI / 2, 0, 0]]],

          RZ: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0], [0, 0, -Math.PI / 2]]],

          RE: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, 0.12, 2, 24), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 }))]],

          RXYZE: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 2, 24), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 }))]] };



      };

      _this5.setActivePlane = function (axis) {

        if (axis == "RE") this.activePlane = this.planes["XYZE"];

        if (axis == "RX") this.activePlane = this.planes["YZ"];

        if (axis == "RY") this.activePlane = this.planes["XZ"];

        if (axis == "RZ") this.activePlane = this.planes["XY"];

        this.hide();
        this.show();

      };

      _this5.update = function (rotation, eye2) {

        THREE.TransformGizmo.prototype.update.apply(this, arguments);

        var tempMatrix = new THREE.Matrix4();
        var worldRotation = new THREE.Euler(0, 0, 1);
        var tempQuaternion = new THREE.Quaternion();
        var unitX = new THREE.Vector3(1, 0, 0);
        var unitY = new THREE.Vector3(0, 1, 0);
        var unitZ = new THREE.Vector3(0, 0, 1);
        var quaternionX = new THREE.Quaternion();
        var quaternionY = new THREE.Quaternion();
        var quaternionZ = new THREE.Quaternion();
        var eye = eye2.clone();

        worldRotation.copy(this.planes["XY"].rotation);
        tempQuaternion.setFromEuler(worldRotation);

        tempMatrix.makeRotationFromQuaternion(tempQuaternion).invert();
        eye.applyMatrix4(tempMatrix);

        this.traverse(function (child) {

          tempQuaternion.setFromEuler(worldRotation);

          if (child.name == "RX") {
            quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
            child.quaternion.copy(tempQuaternion);
          }

          if (child.name == "RY") {
            quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
            child.quaternion.copy(tempQuaternion);
          }

          if (child.name == "RZ") {
            quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
            child.quaternion.copy(tempQuaternion);
          }

        });

      };

      _this5.init();return _this5;

    }return TransformGizmoRotate;}(TransformGizmo);

  THREE.TransformGizmoRotate = TransformGizmoRotate;var

  TransformGizmoTranslateRotate = /*#__PURE__*/function (_TransformGizmo3) {_inherits(TransformGizmoTranslateRotate, _TransformGizmo3);var _super6 = _createSuper(TransformGizmoTranslateRotate);
    function TransformGizmoTranslateRotate(includeAxis) {var _this6;_classCallCheck(this, TransformGizmoTranslateRotate);

      _this6 = _super6.call(this, includeAxis);

      var scope = _assertThisInitialized(_this6);

      _this6.setHandlePickerGizmos = function () {

        var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
        var theta = 0.15;

        this.handleGizmos = {
          Z: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xffffff })), [0, 0, 0.25], [Math.PI / 2, 0, 0]],
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.015, 0.015, 0.6, 4, 1, false), new GizmoMaterial({ color: 0xffffff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],

          RX: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({ color: 0xff0000 })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]],
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.05, 0.05, 0.015, 60, 1, false), new GizmoMaterial({ color: 0xff0000 })), [0, 0, 1], [Math.PI / 2, 0, 0]]],

          RY: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]],
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.05, 0.05, 0.01, 60, 1, false), new GizmoMaterial({ color: 0x0000ff })), [0, 0, 1]]] };



        this.pickerGizmos = {
          Z: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],

          RX: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]]],

          RY: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]]] };



        this.subPickerGizmos = {
          Z: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]] };



        this.highlightGizmos = {
          Z: [],

          RX: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 1 })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2], false]],

          RY: [
          [new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 1 })), [0, 0, 0], [Math.PI / 2, 0, 0], false]] };



        this.hemiPickerGizmos = {
          XYZ: [
          [new THREE.Mesh(new THREE.SphereBufferGeometry(1.2, 8, 8, 0, Math.PI), new GizmoMaterial({ color: 0x0000ff })), null, null, false]] };



      };

      _this6.setActivePlane = function (axis, eye, isLocalSpace) {

        if (this.activeMode == "translate") {

          var tempMatrix = new THREE.Matrix4();
          eye.applyMatrix4(tempMatrix.extractRotation(this.planes["XY"].matrixWorld).invert());

          if (axis == "X") {
            this.activePlane = this.planes["XY"];
            if (!isLocalSpace && Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
          }

          if (axis == "Y") {
            this.activePlane = this.planes["XY"];
            if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
          }

          if (axis == "Z") {
            this.activePlane = this.planes["XZ"];
            if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
          }

        } else if (this.activeMode == "rotate") {

          if (axis == "RX") this.activePlane = this.planes["YZ"];

          if (axis == "RY") this.activePlane = this.planes["XZ"];

          if (axis == "RZ") this.activePlane = this.planes["XY"];

        }

        this.hide();
        this.show();

      };

      _this6.update = function (rotation, eye2) {

        if (this.activeMode == "translate") {

          THREE.TransformGizmo.prototype.update.apply(this, arguments);

        } else if (this.activeMode == "rotate") {

          THREE.TransformGizmo.prototype.update.apply(this, arguments);

          var tempMatrix = new THREE.Matrix4();
          var worldRotation = new THREE.Euler(0, 0, 1);
          var tempQuaternion = new THREE.Quaternion();
          var unitX = new THREE.Vector3(1, 0, 0);
          var unitY = new THREE.Vector3(0, 1, 0);
          var unitZ = new THREE.Vector3(0, 0, 1);
          var quaternionX = new THREE.Quaternion();
          var quaternionY = new THREE.Quaternion();
          var quaternionZ = new THREE.Quaternion();
          var eye = eye2.clone();

          worldRotation.copy(this.planes["XY"].rotation);
          tempQuaternion.setFromEuler(worldRotation);

          tempMatrix.makeRotationFromQuaternion(tempQuaternion).invert();
          eye.applyMatrix4(tempMatrix);

          this.traverse(function (child) {

            tempQuaternion.setFromEuler(worldRotation);

            if (child.name == "RX") {
              quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
              child.quaternion.copy(tempQuaternion);
            }

            if (child.name == "RY") {
              quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
              child.quaternion.copy(tempQuaternion);
            }

            if (child.name == "RZ") {
              quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
              child.quaternion.copy(tempQuaternion);
            }

          });

        }

      };

      _this6.show = function () {
        this.traverse(function (child) {
          if (scope.parent == null || scope.parent.useAllPickers || child.parent != scope.handles) child.visible = true;
          if (child.material) child.material.opacity = child.material.oldOpacity;
          if (child.parent == scope.pickers || child.parent == scope.hemiPicker || child.parent == scope.subPickers) child.visible = false;
          if (child.parent == scope.planes || child.parent == scope.highlights) child.visible = false;
        });
        this.activePlane.visible = false;
      };

      _this6.highlight = function (axis) {
        this.traverse(function (child) {
          if (child.material && child.material.highlight) {
            if (child.name == axis) {
              if (child.parent == scope.highlights || child.parent == scope.handles) child.visible = true;
              child.material.highlight(true);
            } else {
              child.material.highlight(false);
              child.material.opacity = 0.1;
            }
          }
        });
      };

      _this6.init();return _this6;

    }return TransformGizmoTranslateRotate;}(TransformGizmo);

  THREE.TransformGizmoTranslateRotate = TransformGizmoTranslateRotate;var

  TransformGizmoScale = /*#__PURE__*/function (_TransformGizmo4) {_inherits(TransformGizmoScale, _TransformGizmo4);var _super7 = _createSuper(TransformGizmoScale);
    function TransformGizmoScale(includeAxis) {var _this7;_classCallCheck(this, TransformGizmoScale);

      _this7 = _super7.call(this, includeAxis);

      _this7.setHandlePickerGizmos = function () {

        var arrowGeometry = createArrowGeometry(0.125, 0.125, 0.125);
        var lineXGeometry = createLineGeometry('X');
        var lineYGeometry = createLineGeometry('Y');
        var lineZGeometry = createLineGeometry('Z');

        this.handleGizmos = {
          X: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
          [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],

          Y: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]],
          [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],

          Z: [
          [new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
          [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],

          XYZ: [
          [new THREE.Mesh(new THREE.BoxBufferGeometry(0.125, 0.125, 0.125), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]] };



        this.pickerGizmos = {
          X: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

          Y: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0.6, 0]]],

          Z: [
          [new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

          XYZ: [
          [new THREE.Mesh(new THREE.BoxBufferGeometry(0.4, 0.4, 0.4), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]] };



      };

      _this7.setActivePlane = function (axis, eye, isLocalSpace) {

        var tempMatrix = new THREE.Matrix4();
        eye.applyMatrix4(tempMatrix.extractRotation(this.planes["XY"].matrixWorld).invert());

        if (axis == "X") {
          this.activePlane = this.planes["XY"];
          if (!isLocalSpace && Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
        }

        if (axis == "Y") {
          this.activePlane = this.planes["XY"];
          if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
        }

        if (axis == "Z") {
          this.activePlane = this.planes["XZ"];
          if (!isLocalSpace && Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
        }

        if (axis == "XYZ") this.activePlane = this.planes["XYZE"];

        this.hide();
        this.show();

      };

      _this7.init();return _this7;

    }return TransformGizmoScale;}(TransformGizmo);

  THREE.TransformGizmoScale = TransformGizmoScale;

  var _pointerVector = new THREE.Vector3();
  var _pointerDir = new THREE.Vector3();
  var _ray = new THREE.Raycaster();var
  TransformControls = /*#__PURE__*/function (_THREE$Object3D2) {_inherits(TransformControls, _THREE$Object3D2);var _super8 = _createSuper(TransformControls);
    function TransformControls(camera, domElement, mode, includeAxis) {var _this8;_classCallCheck(this, TransformControls);

      // TODO: Make non-uniform scale and rotate play nice in hierarchies
      // TODO: ADD RXYZ contol

      _this8 = _super8.call(this);

      domElement = domElement !== undefined ? domElement : document;

      _this8.gizmo = {};
      switch (mode) {
        case "translate":
          _this8.gizmo[mode] = new THREE.TransformGizmoTranslate(includeAxis);
          break;
        case "rotate":
          _this8.gizmo[mode] = new THREE.TransformGizmoRotate(includeAxis);
          break;
        case "transrotate":
          _this8.gizmo[mode] = new THREE.TransformGizmoTranslateRotate(includeAxis);
          break;
        case "scale":
          _this8.gizmo[mode] = new THREE.TransformGizmoScale(includeAxis);
          break;}


      _this8.add(_this8.gizmo[mode]);
      _this8.gizmo[mode].hide();

      _this8.object = undefined;
      _this8.snap = null;
      _this8.snapDelta = 0;
      _this8.space = "world";
      _this8.size = 1;
      _this8.axis = null;
      _this8.useAllPickers = true;

      _this8.unitX = new THREE.Vector3(1, 0, 0);
      _this8.unitY = new THREE.Vector3(0, 1, 0);
      _this8.unitZ = new THREE.Vector3(0, 0, 1);
      _this8.normal = new THREE.Vector3(0, 0, 1);

      if (mode === "transrotate") {
        var vertices = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)];
        var geometry = new THREE.BufferGeometry().setFromPoints(vertices);
        var material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2, depthTest: false });
        _this8.startLine = new THREE.Line(geometry, material);

        var vertices = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)];
        var geometry = new THREE.BufferGeometry().setFromPoints(vertices);
        var material = new THREE.LineBasicMaterial({ color: 0xffe603, linewidth: 2, depthTest: false });
        _this8.endLine = new THREE.Line(geometry, material);

        var vertices = [new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 1, 0)];
        var geometry = new THREE.BufferGeometry().setFromPoints(vertices);
        var material = new THREE.LineDashedMaterial({ color: 0x000000, linewidth: 1, depthTest: false });
        _this8.centerLine = new THREE.Line(geometry, material);

        var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/centerMarker_X.png"));
        map.magFilter = map.minFilter = THREE.NearestFilter;
        var geometry = new THREE.CircleBufferGeometry(0.1, 32);
        var material = new THREE.MeshBasicMaterial({ opacity: 1, side: THREE.DoubleSide, transparent: true, map: map });
        _this8.centerMark = new THREE.Mesh(geometry, material);
        _this8.centerMark.rotation.set(Math.PI / 2, 0, 0);

        _this8.ticks = {};
        var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/cardinalPoint.png"));
        map.magFilter = map.minFilter = THREE.NearestFilter;
        var material = new THREE.MeshBasicMaterial({ depthTest: false, opacity: 1, transparent: true, side: THREE.DoubleSide, map: map });
        var w = 0.12,h = 0.25,d = 1.15;

        _this8.ticks["RX"] = new THREE.Object3D();
        var geometry = new THREE.PlaneBufferGeometry(w, h);
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, -d - h / 2);
        mesh.rotation.set(Math.PI / 2, Math.PI / 2, 0);
        _this8.ticks["RX"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(0, d + h / 2, 0);
        mesh.rotation.set(0, Math.PI / 2, 0);
        _this8.ticks["RX"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(0, 0, d + h / 2);
        mesh.rotation.set(0, Math.PI / 2, Math.PI / 2);
        _this8.ticks["RX"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(0, -d - h / 2, 0);
        mesh.rotation.set(0, Math.PI / 2, 0);
        _this8.ticks["RX"].add(mesh);

        _this8.ticks["RY"] = new THREE.Object3D();
        mesh = mesh.clone();
        mesh.position.set(0, 0, -d - h / 2);
        mesh.rotation.set(Math.PI / 2, 0, 0);
        _this8.ticks["RY"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(-d - h / 2, 0, 0);
        mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
        _this8.ticks["RY"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(0, 0, d + h / 2);
        mesh.rotation.set(Math.PI / 2, 0, 0);
        _this8.ticks["RY"].add(mesh);

        mesh = mesh.clone();
        mesh.position.set(d + h / 2, 0, 0);
        mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
        _this8.ticks["RY"].add(mesh);
      }

      var scope = _assertThisInitialized(_this8);

      var _dragging = false;
      var _mode = mode;
      var _plane = "XY";

      var changeEvent = { type: "change" };
      var mouseDownEvent = { type: "mouseDown" };
      var mouseUpEvent = { type: "mouseUp", mode: _mode };
      var objectChangeEvent = { type: "objectChange" };

      var point = new THREE.Vector3();
      var offset = new THREE.Vector3();

      var rotation = new THREE.Vector3();
      var offsetRotation = new THREE.Vector3();
      var scale = 1;
      _this8.clientScale = 1;

      var lookAtMatrix = new THREE.Matrix4();
      var eye = new THREE.Vector3();

      var tempMatrix = new THREE.Matrix4();
      var tempVector = new THREE.Vector3();
      var tempQuaternion = new THREE.Quaternion();
      var projX = new THREE.Vector3();
      var projY = new THREE.Vector3();
      var projZ = new THREE.Vector3();

      var quaternionXYZ = new THREE.Quaternion();
      var quaternionX = new THREE.Quaternion();
      var quaternionY = new THREE.Quaternion();
      var quaternionZ = new THREE.Quaternion();
      var quaternionE = new THREE.Quaternion();

      var oldPosition = new THREE.Vector3();
      var oldScale = new THREE.Vector3();
      var oldRotationMatrix = new THREE.Matrix4();

      var parentRotationMatrix = new THREE.Matrix4();
      var parentScale = new THREE.Vector3();

      var worldPosition = new THREE.Vector3();
      var worldRotation = new THREE.Euler();
      var worldRotationMatrix = new THREE.Matrix4();
      var camPosition = new THREE.Vector3();
      var camRotation = new THREE.Euler();

      _this8.attach = function (object) {

        scope.object = object;

        this.gizmo[_mode].show();

        scope.update();

        scope.updateUnitVectors();

      };

      _this8.detach = function (object) {

        scope.object = undefined;
        this.axis = null;

        this.gizmo[_mode].hide();

      };

      _this8.setMode = function (mode) {

        _mode = mode ? mode : _mode;

        if (_mode == "scale") scope.space = "local";

        this.gizmo[_mode].show();

        this.update();
        scope.dispatchEvent(changeEvent);

      };

      _this8.getPicker = function () {

        return scope.gizmo[_mode].hemiPicker.children;

      };

      _this8.setPosition = function (position) {

        this.object.position.copy(position);
        this.update();

      };

      _this8.setNormal = function (normal) {

        tempQuaternion.setFromUnitVectors(this.normal, normal);
        this.unitX.applyQuaternion(tempQuaternion);
        this.unitY.applyQuaternion(tempQuaternion);
        this.unitZ.applyQuaternion(tempQuaternion);
        this.normal.copy(normal);
        if (this.object) {
          this.object.quaternion.multiply(tempQuaternion);
        }
        this.update();
      };

      _this8.setRotation = function (rotationMatrix) {
        if (this.object) {
          this.object.quaternion.setFromRotationMatrix(rotationMatrix);
          this.update();
          this.updateUnitVectors();
        }
      };

      _this8.setSnap = function (snap, delta) {

        scope.snap = snap;
        scope.snapDelta = delta;

      };

      _this8.setSize = function (size) {

        scope.size = size;
        this.update();
        scope.dispatchEvent(changeEvent);

      };

      _this8.setSpace = function (space) {

        scope.space = space;
        this.update();
        scope.dispatchEvent(changeEvent);

      };

      _this8.update = function (highlight) {

        if (scope.object === undefined) return;

        scope.object.updateMatrixWorld();
        worldPosition.setFromMatrixPosition(scope.object.matrixWorld);
        worldRotation.setFromRotationMatrix(tempMatrix.extractRotation(scope.object.matrixWorld));

        camera.updateMatrixWorld();
        camPosition.setFromMatrixPosition(camera.matrixWorld);
        //camRotation.setFromRotationMatrix( tempMatrix.extractRotation( camera.matrixWorld ) );

        this.position.copy(worldPosition);

        this.quaternion.setFromEuler(worldRotation);

        this.normal.set(0, 0, 1);
        this.normal.applyEuler(worldRotation);

        // keep same screen height (100px)
        var height;
        if (camera.isPerspective) {
          var dist = worldPosition.distanceTo(camPosition);
          height = 2 * Math.tan(camera.fov * Math.PI / 360) * dist;
        } else {
          // orthographic, so the world height is simply top minus bottom
          height = camera.top - camera.bottom;
        }
        var rect = domElement.getBoundingClientRect();
        // multiply 100 pixels by world height for the window, divide by window height in pixels,
        // to get world height equivalent to 100 pixels.
        scale = this.clientScale * 100 * height / rect.height;
        this.scale.set(scale, scale, scale);

        // Set the gizmo position with the specified offset.
        if (this.gizmoOffset) {
          this.position.add(this.gizmoOffset);
        }
        this.updateMatrixWorld();
        //eye.copy( camPosition ).sub( worldPosition ).normalize();

        //if ( scope.space == "local" )
        //    this.gizmo[_mode].update( worldRotation, eye );
        //else if ( scope.space == "world" )
        //    this.gizmo[_mode].update( new THREE.Euler(), eye );

        if (highlight)
        this.gizmo[_mode].highlight(scope.axis);

      };

      _this8.setGizmoOffset = function (vec) {
        // Reset the gizmo if no vector passed in.
        this.gizmoOffset = !vec ? new THREE.Vector3(0, 0, 0) : vec;
        this.update();
      };

      _this8.updateUnitVectors = function () {

        this.unitX.set(1, 0, 0);
        this.unitY.set(0, 1, 0);
        this.unitZ.set(0, 0, 1);
        this.unitX.applyEuler(worldRotation);
        this.unitY.applyEuler(worldRotation);
        this.unitZ.applyEuler(worldRotation);

      };

      _this8.showRotationGizmos = function (set) {

        var handles = this.gizmo[_mode].handles.children;
        for (var i = 0; i < handles.length; i++) {
          var child = handles[i];
          child.visible = true;
          if (child.name.search("R") !== -1) child.visible = set;
        }
        this.useAllPickers = set;

      };

      _this8.highlight = function () {

        this.gizmo[_mode].highlight(this.axis || "Z");

      };

      _this8.onPointerHover = function (event) {

        if (scope.object === undefined || _dragging === true) return false;

        var pointer = event;

        var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

        var axis = null;
        var mode = "";

        if (intersect) {

          axis = intersect.object.name;
          mode = axis.search("R") != -1 ? "rotate" : "translate";

        }

        if (scope.axis !== axis) {

          scope.axis = axis;
          scope.gizmo[_mode].activeMode = mode;
          scope.update(true);
          scope.dispatchEvent(changeEvent);

        }

        if (scope.axis === null) {

          scope.gizmo[_mode].show();

        }

        return intersect ? true : false;

      };

      _this8.isDragging = function () {
        return _dragging;
      };

      _this8.onPointerDown = function (event) {

        if (scope.object === undefined || _dragging === true) return false;

        var pointer = event;

        if (event.pointerType === 'touch') {

          var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

          var axis = null;
          var mode = "";

          if (intersect) {

            axis = intersect.object.name;
            mode = axis.search("R") != -1 ? "rotate" : "translate";

          }

          if (scope.axis !== axis) {

            scope.axis = axis;
            scope.gizmo[_mode].activeMode = mode;
          }
        }

        var intersect = null;

        if (pointer.button === 0 || pointer.button === -1 || pointer.button === undefined) {

          intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

          if (intersect) {

            scope.dispatchEvent(mouseDownEvent);

            scope.axis = intersect.object.name;

            scope.update();

            eye.copy(camera.position).sub(worldPosition).normalize();

            // The eye vector is used to ensure that we choose a plane that is not parallel to the view direction.
            // When using an orthographic camera, the direction from gizmo to camera (as used above) doesn't matter for this,
            // because the view rays for any pixel is always parallel to the camera world direction.
            //
            // E.g. it may happen that the axis of largest extent in the eye vector above is x, while the ortho-camera direction
            // is actually y. In this case, setAxisPlane() would choose the "YZ"-plane for dragging along z-axis, so that hittests
            // with this plane will not work (see FLUENT-6543).
            if (!camera.isPerspective) {
              camera.getWorldDirection(eye);
            }

            scope.gizmo[_mode].setActivePlane(scope.axis, eye, scope.space === "local");

            var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);

            if (planeIntersect)
            offset.copy(planeIntersect.point);

            oldPosition.copy(scope.object.position);
            oldScale.copy(scope.object.scale);

            oldRotationMatrix.extractRotation(scope.object.matrix);
            worldRotationMatrix.extractRotation(scope.object.matrixWorld);

            if (scope.object.parent) {
              parentRotationMatrix.extractRotation(scope.object.parent.matrixWorld);
              parentScale.setFromMatrixScale(tempMatrix.copy(scope.object.parent.matrixWorld).invert());
            } else {
              parentRotationMatrix.extractRotation(scope.object.matrixWorld);
              parentScale.setFromMatrixScale(tempMatrix.copy(scope.object.matrixWorld).invert());
            }

            // show rotation start line and ticks
            if (_mode === "transrotate" && scope.gizmo[_mode].activeMode === "rotate") {
              {
                var startLinePositions = scope.startLine.geometry.getAttribute('position');
                startLinePositions.setXYZ(0, 0, 0, 0);
                startLinePositions.setXYZ(1, 0, 0, 1);
                startLinePositions.applyMatrix4(scope.matrixWorld);
                startLinePositions.needsUpdate = true;
                scope.parent.add(scope.startLine);
              }

              var pos = scope.object.geometry.getAttribute('position');
              var pt1 = new THREE.Vector3().fromBufferAttribute(pos, 0).applyMatrix4(scope.object.matrixWorld);
              var pt2 = new THREE.Vector3().fromBufferAttribute(pos, 1).applyMatrix4(scope.object.matrixWorld);
              var pt3 = new THREE.Vector3().fromBufferAttribute(pos, 2).applyMatrix4(scope.object.matrixWorld);
              var pt4 = new THREE.Vector3().fromBufferAttribute(pos, 3).applyMatrix4(scope.object.matrixWorld);

              var centerLinePositions = scope.centerLine.geometry.getAttribute('position');
              if (scope.axis === "RX") {
                pt1.lerp(pt3, 0.5);
                pt2.lerp(pt4, 0.5);
                var dist = pt1.distanceTo(pt2);
                scope.centerLine.material.dashSize = dist / 15;
                scope.centerLine.material.gapSize = dist / 30;
                centerLinePositions.setXYZ(0, pt1.x, pt1.y, pt1.z);
                centerLinePositions.setXYZ(1, pt2.x, pt2.y, pt2.z);
              } else {
                pt1.lerp(pt2, 0.5);
                pt3.lerp(pt4, 0.5);
                var dist = pt1.distanceTo(pt3);
                scope.centerLine.material.dashSize = dist / 15;
                scope.centerLine.material.gapSize = dist / 30;
                centerLinePositions.setXYZ(0, pt1.x, pt1.y, pt1.z);
                centerLinePositions.setXYZ(1, pt3.x, pt3.y, pt3.z);
              }
              scope.centerLine.computeLineDistances();
              centerLinePositions.needsUpdate = true;
              scope.parent.add(scope.centerLine);

              scope.ticks[scope.axis].position.copy(scope.position);
              scope.ticks[scope.axis].quaternion.copy(scope.quaternion);
              scope.ticks[scope.axis].scale.copy(scope.scale);
              scope.parent.add(scope.ticks[scope.axis]);
            }

          }

        }

        _dragging = true;

        return intersect ? true : false;

      };

      _this8.onPointerMove = function (event) {

        if (scope.object === undefined || scope.axis === null || _dragging === false) return false;

        var pointer = event;

        var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);

        if (planeIntersect)
        point.copy(planeIntersect.point);

        var mode = scope.gizmo[_mode].activeMode;
        if (mode == "translate") {

          point.sub(offset);
          point.multiply(parentScale);

          if (scope.space == "local") {

            point.applyMatrix4(tempMatrix.copy(worldRotationMatrix).invert());

            if (scope.axis.search("X") == -1) point.x = 0;
            if (scope.axis.search("Y") == -1) point.y = 0;
            if (scope.axis.search("Z") == -1) point.z = 0;

            point.applyMatrix4(oldRotationMatrix);

            scope.object.position.copy(oldPosition);
            scope.object.position.add(point);

          }

          if (scope.space == "world" || scope.axis.search("XYZ") != -1) {

            projX.copy(this.unitX);
            projY.copy(this.unitY);
            projZ.copy(this.unitZ);
            tempVector.set(0, 0, 0);
            if (scope.axis.search("X") != -1) {
              projX.multiplyScalar(point.dot(this.unitX));
              tempVector.add(projX);
            }
            if (scope.axis.search("Y") != -1) {
              projY.multiplyScalar(point.dot(this.unitY));
              tempVector.add(projY);
            }
            if (scope.axis.search("Z") != -1) {
              projZ.multiplyScalar(point.dot(this.unitZ));
              tempVector.add(projZ);
            }
            point.copy(tempVector);

            point.applyMatrix4(tempMatrix.copy(parentRotationMatrix).invert());

            scope.object.position.copy(oldPosition);
            scope.object.position.add(point);

          }

        } else if (mode == "scale") {

          point.sub(offset);
          point.multiply(parentScale);

          if (scope.space == "local") {

            if (scope.axis == "XYZ") {

              scale = 1 + point.y / 50;

              scope.object.scale.x = oldScale.x * scale;
              scope.object.scale.y = oldScale.y * scale;
              scope.object.scale.z = oldScale.z * scale;

            } else {

              point.applyMatrix4(tempMatrix.copy(worldRotationMatrix).invert());

              if (scope.axis == "X") scope.object.scale.x = oldScale.x * (1 + point.x / 50);
              if (scope.axis == "Y") scope.object.scale.y = oldScale.y * (1 + point.y / 50);
              if (scope.axis == "Z") scope.object.scale.z = oldScale.z * (1 + point.z / 50);

            }

          }

        } else if (mode == "rotate") {

          point.sub(worldPosition);
          point.multiply(parentScale);
          tempVector.copy(offset).sub(worldPosition);
          tempVector.multiply(parentScale);

          if (scope.axis == "RE") {

            tempMatrix.copy(lookAtMatrix).invert();
            point.applyMatrix4(tempMatrix);
            tempVector.applyMatrix4(tempMatrix);

            rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
            offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

            tempQuaternion.setFromRotationMatrix(tempMatrix.copy(parentRotationMatrix).invert());

            var rotz = rotation.z - offsetRotation.z;
            if (scope.snap !== null) {
              var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
              if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                rotz = rotsnap;
              }
            }
            quaternionE.setFromAxisAngle(eye, rotz);
            quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionE);
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

            scope.object.quaternion.copy(tempQuaternion);

          } else if (scope.axis == "RXYZE") {

            var tempAxis = point.clone().cross(tempVector).normalize(); // rotation axis

            tempQuaternion.setFromRotationMatrix(tempMatrix.copy(parentRotationMatrix).invert());

            var rot = -point.clone().angleTo(tempVector);
            if (scope.snap !== null) {
              var rotsnap = Math.round(rot / scope.snap) * scope.snap;
              if (Math.abs(rotsnap - rot) < scope.snapDelta) {
                rot = rotsnap;
              }
            }
            quaternionX.setFromAxisAngle(tempAxis, rot);
            quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

            scope.object.quaternion.copy(tempQuaternion);

          } else if (scope.space == "local") {

            tempMatrix.copy(worldRotationMatrix).invert();
            point.applyMatrix4(tempMatrix);
            tempVector.applyMatrix4(tempMatrix);

            var projx = point.dot(this.unitX),projy = point.dot(this.unitY),projz = point.dot(this.unitZ);
            var tempx = tempVector.dot(this.unitX),tempy = tempVector.dot(this.unitY),tempz = tempVector.dot(this.unitZ);
            rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
            offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));

            var rotx = rotation.x - offsetRotation.x;
            var roty = rotation.y - offsetRotation.y;
            var rotz = rotation.z - offsetRotation.z;
            if (scope.snap !== null) {
              if (scope.axis.search("X") != -1) {
                var rotsnap = Math.round(rotx / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                  rotx = rotsnap;
                }
              }
              if (scope.axis.search("Y") != -1) {
                var rotsnap = Math.round(roty / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                  roty = rotsnap;
                }
              }
              if (scope.axis.search("Z") != -1) {
                var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                  rotz = rotsnap;
                }
              }
            }
            quaternionX.setFromAxisAngle(this.unitX, rotx);
            quaternionY.setFromAxisAngle(this.unitY, roty);
            quaternionZ.setFromAxisAngle(this.unitZ, rotz);
            quaternionXYZ.setFromRotationMatrix(oldRotationMatrix);

            if (scope.axis == "RX") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionX);
            if (scope.axis == "RY") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionY);
            if (scope.axis == "RZ") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionZ);

            scope.object.quaternion.copy(quaternionXYZ);

          } else if (scope.space == "world") {

            var projx = point.dot(this.unitX),projy = point.dot(this.unitY),projz = point.dot(this.unitZ);
            var tempx = tempVector.dot(this.unitX),tempy = tempVector.dot(this.unitY),tempz = tempVector.dot(this.unitZ);
            rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
            offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));

            tempQuaternion.setFromRotationMatrix(tempMatrix.copy(parentRotationMatrix).invert());

            var rotx = rotation.x - offsetRotation.x;
            var roty = rotation.y - offsetRotation.y;
            var rotz = rotation.z - offsetRotation.z;
            if (scope.snap !== null) {
              if (scope.axis.search("X") != -1) {
                var rotsnap = Math.round(rotx / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                  rotx = rotsnap;
                }
              }
              if (scope.axis.search("Y") != -1) {
                var rotsnap = Math.round(roty / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                  roty = rotsnap;
                }
              }
              if (scope.axis.search("Z") != -1) {
                var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
                if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                  rotz = rotsnap;
                }
              }
            }
            quaternionX.setFromAxisAngle(this.unitX, rotx);
            quaternionY.setFromAxisAngle(this.unitY, roty);
            quaternionZ.setFromAxisAngle(this.unitZ, rotz);
            quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

            if (scope.axis == "RX") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
            if (scope.axis == "RY") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
            if (scope.axis == "RZ") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);

            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

            scope.object.quaternion.copy(tempQuaternion);

          }

          // show rotation end line
          if (_mode === "transrotate") {
            scope.add(scope.endLine);
            scope.add(scope.centerMark);
          }

        }

        // update matrix
        scope.object.matrixAutoUpdate = true;

        scope.update(true);
        scope.dispatchEvent(changeEvent);
        scope.dispatchEvent(objectChangeEvent);

        return planeIntersect ? true : false;

      };

      _this8.onPointerUp = function (event) {

        if (_dragging && scope.axis !== null) {
          mouseUpEvent.mode = _mode;
          scope.dispatchEvent(mouseUpEvent);
        }
        _dragging = false;

        this.gizmo[_mode].show();

        this.updateUnitVectors();

        // remove rotation start/end lines
        if (_mode === "transrotate" && this.gizmo[_mode].activeMode === "rotate") {
          this.remove(this.endLine);
          this.remove(this.centerMark);
          this.parent.remove(this.centerLine);
          this.parent.remove(this.startLine);
          this.parent.remove(this.ticks[this.axis]);
        }

        return false;

      };

      function intersectObjects(pointer, objects) {
        return THREE.TransformControls.intersectObjects(pointer.canvasX, pointer.canvasY, objects, camera, true);
      }return _this8;
    }_createClass(TransformControls, null, [{ key: "intersectObjects", value: function intersectObjects(

      clientX, clientY, objects, camera, recursive) {
        // Convert client to viewport coords (in [-1,1]^2)
        var x = clientX / camera.clientWidth * 2 - 1;
        var y = -(clientY / camera.clientHeight) * 2 + 1; // y-direction flips between canvas and viewport coords

        if (camera.isPerspective) {
          _pointerVector.set(x, y, 0.5);
          _pointerVector.unproject(camera);
          _ray.set(camera.position, _pointerVector.sub(camera.position).normalize());
        } else {
          _pointerVector.set(x, y, -1);
          _pointerVector.unproject(camera);
          _pointerDir.set(0, 0, -1);
          _ray.set(_pointerVector, _pointerDir.transformDirection(camera.matrixWorld));
        }

        var intersections = _ray.intersectObjects(objects, recursive);
        return intersections[0] ? intersections[0] : null;
      } }]);return TransformControls;}(THREE.Object3D);

  THREE.TransformControls = TransformControls;
};

/***/ }),

/***/ "./thirdparty/three.js/three-legacy.js":
/*!*********************************************!*\
  !*** ./thirdparty/three.js/three-legacy.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "planeOrthoPoint": () => (/* binding */ planeOrthoPoint),
/* harmony export */   "vector3ApplyProjection": () => (/* binding */ vector3ApplyProjection)
/* harmony export */ });
// Plane.orthoPoint was removed in R87, the polyfilled version for R125 was taken from R86
// https://github.com/mrdoob/three.js/blob/r86/src/math/Plane.js#L117-L124
var planeOrthoPoint = function planeOrthoPoint(plane, point, optionalTarget) {
/////////////////////////////////
  {
    return plane.orthoPoint(point, optionalTarget);
  }
///////////
///
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///
////////////
};

var vector3ApplyProjection = function vector3ApplyProjection(v, m) {
/////////////////////////////////
  {
    return v.applyProjection(m);
  }
///////////
///
/////////////////////////////
///
////////////
};

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./extensions/Section/Section.css":
/*!****************************************!*\
  !*** ./extensions/Section/Section.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_use_2_node_modules_sass_loader_dist_cjs_js_Section_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../node_modules/sass-loader/dist/cjs.js!./Section.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/sass-loader/dist/cjs.js!./extensions/Section/Section.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_use_2_node_modules_sass_loader_dist_cjs_js_Section_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_use_2_node_modules_sass_loader_dist_cjs_js_Section_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_use_2_node_modules_sass_loader_dist_cjs_js_Section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_use_2_node_modules_sass_loader_dist_cjs_js_Section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./extensions/Section/Section.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionExtension": () => (/* binding */ SectionExtension)
/* harmony export */ });
/* harmony import */ var _SectionTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionTool */ "./extensions/Section/SectionTool.js");
/* harmony import */ var _Section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.css */ "./extensions/Section/Section.css");



var avp = Autodesk.Viewing.Private;
var AVU = Autodesk.Viewing.UI;
var analytics = avp.analytics;

/**
                                * The SectionExtension provides ways to cut the geometry using planes or a cube.
                                * The extension adds a toolbar button to access the feature.
                                *
                                * The extension id is: `Autodesk.Section`
                                *
                                * @param {Viewer3D} viewer - Viewer instance
                                * @param {object} options - Configurations for the extension
                                * @example 
                                * viewer.loadExtension('Autodesk.Section')
                                * @memberof Autodesk.Viewing.Extensions
                                * @alias Autodesk.Viewing.Extensions.SectionExtension
                                * @see {@link Autodesk.Viewing.Extension} for common inherited methods.
                                * @class
                                */
var SectionExtension = function SectionExtension(viewer, options) {
  Autodesk.Viewing.Extension.call(this, viewer, options);
  this.viewer = viewer;
  this.name = 'section';
  this.modes = ['x', 'y', 'z', 'box'];
  this.buttons = {};

  this.onViewerSetView = this.onViewerSetView.bind(this);
  this._onCutPlanesChanged = this._onCutPlanesChanged.bind(this);
  this._onShowAll = this._onShowAll.bind(this);
};

SectionExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
SectionExtension.prototype.constructor = SectionExtension;

var proto = SectionExtension.prototype;

/**
                                         * Registers the SectionTool, hotkeys and event handlers.
                                         *
                                         * @returns {boolean}
                                         */
proto.load = function () {var _this = this;
  var that = this;
  var viewer = this.viewer;

  this.tool = new _SectionTool__WEBPACK_IMPORTED_MODULE_0__.SectionTool(viewer, {
    tintColor: { r: 1, g: 1, b: 0 },
    tintIntensity: 0.2 });


  viewer.toolController.registerTool(this.tool, this.setActive.bind(this));
  this.sectionStyle = null;
  this.supportedStyles = ["X", "Y", "Z", "BOX"];

  this.displaySectionHatches = this.displaySectionHatches.bind(this);

  this.viewer.prefs.addListeners(avp.Prefs3D.DISPLAY_SECTION_HATCHES, this.displaySectionHatches);

  viewer.addEventListener(Autodesk.Viewing.SET_VIEW_EVENT, this.onViewerSetView);

  // consider cutplane changes of other tools, so that cap meshes consider them too
  viewer.addEventListener(Autodesk.Viewing.CUTPLANES_CHANGE_EVENT, this._onCutPlanesChanged);
  viewer.addEventListener(Autodesk.Viewing.SHOW_ALL_EVENT, this._onShowAll);
  viewer.addEventListener(Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT, that.tool.notifyRenderOptionChanged);

  this.HOTKEYS_ID = "Autodesk.Section.Hotkeys";
  var hotkeys = [{
    keycodes: [
    Autodesk.Viewing.KeyCode.ESCAPE],

    onRelease: function onRelease() {
      if (that.viewer.getAggregateSelection().length === 0)
      return that.deactivate();
    } }];

  viewer.getHotkeyManager().pushHotkeys(this.HOTKEYS_ID, hotkeys);

  // Invoked when the context menu is about to get opened.
  this.viewer.registerContextMenuCallback('Autodesk.Section', function (menu, status) {
    onContextMenu(_this, menu, status);
  });

  //Load the required dependency (and return the pending load as the load completion Promise)
  return this.viewer.loadExtension('Autodesk.CompGeom');
};

/**
    * Unregisters the SectionTool, hotkeys and event handlers.
    *
    * @returns {boolean}
    */
proto.unload = function () {
  var viewer = this.viewer;

  viewer.unregisterContextMenuCallback('Autodesk.Section');

  // remove hotkey
  viewer.getHotkeyManager().popHotkeys(this.HOTKEYS_ID);

  this.destroyUI();

  viewer.removeEventListener(Autodesk.Viewing.SET_VIEW_EVENT, this.onViewerSetView);
  viewer.removeEventListener(Autodesk.Viewing.CUTPLANES_CHANGE_EVENT, this._onCutPlanesChanged);
  viewer.removeEventListener(Autodesk.Viewing.SHOW_ALL_EVENT, this._onShowAll);
  viewer.removeEventListener(Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT, this.tool.notifyRenderOptionChanged);

  this.viewer.prefs.removeListeners(avp.Prefs3D.DISPLAY_SECTION_HATCHES, this.displaySectionHatches);

  viewer.toolController.deregisterTool(this.tool);
  this.tool = null;

  return true;
};

/**
    * Toggles activeness of section planes.
    *
    * @returns {boolean} Whether the section plane is active or not.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#toggle
    */
proto.toggle = function () {
  if (this.isActive()) {
    this.enableSectionTool(false);
  } else {
    var style = this.sectionStyle || "X";
    this.setSectionStyle(style, true);
  }
  return this.isActive(); // Need to check for isActive() again.
};

/**
    * Returns the current type of plane that will cut-though the geometry.
    *
    * @returns {null | string} Either "X" or "Y" or "Z" or "BOX" or null.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#getSectionStyle
    */
proto.getSectionStyle = function () {
  return this.sectionStyle;
};

/**
    * Sets the Section plane style.
    *
    * @param {string} style - Accepted values are 'X', 'Y', 'Z' and 'BOX' (in Caps)
    * @param {boolean} [preserveSection] - Whether sending the current style value resets the cut planes.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#setSectionStyle
    */
proto.setSectionStyle = function (style, preserveSection) {

  if (this.supportedStyles.indexOf(style) === -1) {
    return false;
  }

  var bActive = this.isActive();
  var bNewStyle = this.sectionStyle !== style || !preserveSection;
  this.sectionStyle = style;

  if (bActive && bNewStyle) {
    this.tool.setSection(style);
  } else
  if (!bActive) {
    this.enableSectionTool(true);
    if (bNewStyle) {
      this.tool.setSection(style);
    } else {
      this.tool.attachControl(true);
    }
  }
  return true;
};

/**
    * Use to set the section from an externally defined plane. For showing with line pattern
    * Tool itself will be disabled when setting the plane
    *
    * @param {THREE.Vector4} cutplane - send null to clear the section
    */
proto.setSectionFromPlane = function (cutplane) {
  this.deactivate();

  if (cutplane) {
    this.tool.setSectionFromPlane(cutplane);
    this.tool.attachControl(false);
    // LMV-5299
    if (!this.isActive()) {
      this.tool.showPlane(false);
    }
  } else {
    this.tool.clearSection();
    var prevLock = this.viewer.toolController.setIsLocked(false);
    this.enableSectionTool(false);
    this.viewer.toolController.setIsLocked(prevLock);
  }
};

/**
    * Returns the planes belonging only to the Section tool's set*
    */
proto.getSectionPlanes = function () {
  return this.tool.getSectionPlanes();
};

/**
    *
    * @param enable
    * @param keepCutPlanes - keep existing cut planes when deactivating the tool.
    * @returns {boolean}
    * @private
    */
proto.enableSectionTool = function (enable) {var keepCutPlanes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var toolController = this.viewer.toolController,
  isActive = this.tool.isActive();

  if (enable && !isActive) {
    toolController.activateTool("section");
    if (this.sectionToolButton) {
      this.sectionToolButton.setState(Autodesk.Viewing.UI.Button.State.ACTIVE);
    }
    return true;

  } else if (!enable && isActive) {
    var prevKeepCutPlanes = this.tool.keepCutPlanesOnDeactivate;
    this.tool.keepCutPlanesOnDeactivate = keepCutPlanes;
    toolController.deactivateTool("section");
    this.tool.keepCutPlanesOnDeactivate = prevKeepCutPlanes;

    if (this.sectionToolButton) {
      this.sectionToolButton.setState(Autodesk.Viewing.UI.Button.State.INACTIVE);
    }
    return true;
  } else if (enable) {
    toolController.activateToolModality("section");
  }
  return false;
};

/**
    * Returns an object that reperesents the state of the section planes
    * currently applied to the viewer by this extension.
    * 
    * @param {THREE.Vector3 | object} [ignoreGlobalOffset=false]
    * 
    * @returns {object | null}
    */
proto.getViewValues = function (ignoreGlobalOffset) {

  var boxValues = this.tool.getSectionBoxValues(ignoreGlobalOffset);
  if (boxValues)
  return boxValues;

  var planeValues = this.tool.getSectionPlaneValues(ignoreGlobalOffset);
  if (planeValues)
  return planeValues;

  return null;
};

/**
    * Gets the extension state as a plain object. Invoked automatically by viewer.getState()
    *
    * @param {object} viewerState - Object to inject extension values.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#getState
    */
proto.getState = function (viewerState) {
  if (!this.viewer.model || this.viewer.model.is2d()) {
    return;
  }

  viewerState.cutplanes = viewerState.cutplanes || [];
  var planes = this.tool.getSectionPlaneSet();
  for (var i = 0; i < planes.length; i++) {
    viewerState.cutplanes.push(planes[i].toArray());
  }
};

/**
    * Restores the extension state from a given object. Invoked automatically by viewer.restoreState()
    *
    * @param {object} viewerState - Viewer state.
    * @returns {boolean} True if restore operation was successful.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#restoreState
    */
proto.restoreState = function (viewerState) {
  // If viewerState doesn't contain cutplanes, we should leave it as is.
  if (!viewerState.cutplanes) {
    return;
  }
  var cutplanes = this.getSectionPlanes();
  this.setSectionFromPlane(null); // Unload any existing planes first
  if (cutplanes.length === 1) {
    this.setSectionFromPlane(cutplanes[0]);
  }

  return true;
};

/**
    * @private
    */
proto._onCutPlanesChanged = function () /*event*/{
  this.tool.notifyCutplanesChanged();
};


/**
    * @private
    */
proto._onShowAll = function () /*event*/{
  this.deactivate();
};

/**
    * Set a section box around the passed in THREE.Box3.
    * This method will also enable the section tool.
    *
    * @param {THREE.Box3} box - used to set the section box.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#setSectionBox
    */
proto.setSectionBox = function (box) {
  if (!box) return;
  this.enableSectionTool(true);
  if (this.tool.setSectionBox(box)) {var _this$buttons$this$mo;
    this.activeStatus = true;
    this.viewer.clearSelection();

    // Update current mode and button state.
    this.mode = 'box';
    (_this$buttons$this$mo = this.buttons[this.mode]) === null || _this$buttons$this$mo === void 0 ? void 0 : _this$buttons$this$mo.setState(AVU.Button.State.ACTIVE);
  } else {
    this.enableSectionTool(false);
  }
};

/**
    * Place a section plane on the Intersection.
    * This method will also enable the section tool.
    *
    * @param {THREE.Vector3} normal - plane normal.
    * @param {THREE.Vector3} point - position to place the plane.
    * @param enableRotationGizmo
    * @alias Autodesk.Viewing.Extensions.SectionExtension#setSectionPlane
    */
proto.setSectionPlane = function (normal, point, enableRotationGizmo) {
  if (!normal || !point) return;
  this.enableSectionTool(true);
  if (this.tool.setSectionPlane(normal, point, enableRotationGizmo)) {var _this$buttons$this$mo2;
    this.activeStatus = true;
    this.viewer.clearSelection();

    // Update current mode and button state.
    this.mode = this.calculateNearestAxis(normal);
    (_this$buttons$this$mo2 = this.buttons[this.mode]) === null || _this$buttons$this$mo2 === void 0 ? void 0 : _this$buttons$this$mo2.setState(AVU.Button.State.ACTIVE);
  } else {
    this.enableSectionTool(false);
  }
};

/**
    * Given a normal, return the x, y or z, according to the nearest world axis.
    * 
    * @param {THREE.Vector3} normal - plane normal.
    */
proto.calculateNearestAxis = function (normal) {
  // absolute values for direction cosines, bigger value equals closer to basis axis
  var xn = Math.abs(normal.x);
  var yn = Math.abs(normal.y);
  var zn = Math.abs(normal.z);

  if (xn >= yn && xn >= zn) {
    return 'x';
  } else if (yn > xn && yn >= zn) {
    return 'y';
  } else {
    return "z";
  }
};

/**
    * @private
    */
proto.onViewerSetView = function () /*event*/{
  this.deactivate();
};

/**
    * @param toolbar
    */
proto.onToolbarCreated = function (toolbar) {

  this.sectionToolButton = new AVU.ComboButton("toolbar-sectionTool");
  this.sectionToolButton.setToolTip('Section analysis');
  this.sectionToolButton.setIcon("adsk-icon-section-analysis");
  this.createSubmenu(this.sectionToolButton);

  // make sure inspect tools is visible
  var modelTools = toolbar.getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);

  // place section tool before reset tool
  if (modelTools) {
    var resetTool = modelTools.getControl("toolbar-resetTool");
    if (resetTool) {
      modelTools.addControl(this.sectionToolButton, { index: modelTools.indexOf(resetTool.getId()) });
    } else {
      modelTools.addControl(this.sectionToolButton, { index: 0 });
    }
  }
};

/**
    *
    * @param parentButton
    * @private
    */
proto.createSubmenu = function (parentButton)
{
  var that = this;
  var viewer = this.viewer;

  /**
                             * @param button
                             * @param name
                             * @private
                             */
  function createNavToggler(button, name) {
    that.buttons[name] = button;

    return function () {
      var state = button.getState();
      var enable = function enable() {
        if (button instanceof AVU.ComboButton === false) {
          that.activate(name);
        } else {
          that.enableSectionTool(true);
          that.tool.attachControl(true);
        }
      };

      var sectionType = name.toLowerCase().indexOf('box') !== -1 ? 'Box' : 'Plane';

      if (state === AVU.Button.State.INACTIVE) {
        button.setState(AVU.Button.State.ACTIVE);
        // Long initialization may cause issues on touch enabled devices, make it async
        if (Autodesk.Viewing.isMobileDevice()) {
          setTimeout(enable, 1);
        } else {
          enable();
        }
        analytics.track('viewer.section', {
          from: 'Toolbar',
          type: sectionType,
          action: 'Enable' });

      } else if (state === AVU.Button.State.ACTIVE) {
        button.setState(AVU.Button.State.INACTIVE);
        that.deactivate();
        analytics.track('viewer.section', {
          from: 'Toolbar',
          type: sectionType,
          action: 'Disable' });

      }
      that.sectionStyle = name.toUpperCase();
    };
  }

  /**
     *
     */
  function updateSectionButtons() {
    var areVectorsEqual = function () {
      var v = new THREE.Vector3();
      return function (a, b, sqtol) {
        v.subVectors(a, b);
        return v.lengthSq() < sqtol;
      };
    }();

    var unitx = new THREE.Vector3(1, 0, 0);
    var unity = new THREE.Vector3(0, 1, 0);
    var unitz = new THREE.Vector3(0, 0, 1);
    var right = viewer.autocam.getWorldRightVector();
    var up = viewer.autocam.getWorldUpVector();
    var front = viewer.autocam.getWorldFrontVector();

    var tol = 0.0001;
    if (areVectorsEqual(up, unitx, tol)) {
      that.sectionYButton.setIcon("adsk-icon-plane-x");
    } else if (areVectorsEqual(up, unitz, tol)) {
      that.sectionYButton.setIcon("adsk-icon-plane-z");
    } else {
      that.sectionYButton.setIcon("adsk-icon-plane-y");
    }

    if (areVectorsEqual(right, unity, tol)) {
      that.sectionXButton.setIcon("adsk-icon-plane-y");
    } else if (areVectorsEqual(right, unitz, tol)) {
      that.sectionXButton.setIcon("adsk-icon-plane-z");
    } else {
      that.sectionXButton.setIcon("adsk-icon-plane-x");
    }

    if (areVectorsEqual(front, unitx, tol)) {
      that.sectionZButton.setIcon("adsk-icon-plane-x");
    } else if (areVectorsEqual(front, unity, tol)) {
      that.sectionZButton.setIcon("adsk-icon-plane-y");
    } else {
      that.sectionZButton.setIcon("adsk-icon-plane-z");
    }

  }

  var sectionXButton = this.sectionXButton = new AVU.Button("toolbar-sectionTool-x");
  sectionXButton.setToolTip('Add X plane');
  sectionXButton.setIcon("adsk-icon-plane-x");
  sectionXButton.onClick = createNavToggler(sectionXButton, 'x');
  parentButton.addControl(sectionXButton);

  var sectionYButton = this.sectionYButton = new AVU.Button("toolbar-sectionTool-y");
  sectionYButton.setToolTip('Add Y plane');
  sectionYButton.setIcon("adsk-icon-plane-y");
  sectionYButton.onClick = createNavToggler(sectionYButton, 'y');
  parentButton.addControl(sectionYButton);

  var sectionZButton = this.sectionZButton = new AVU.Button("toolbar-sectionTool-z");
  sectionZButton.setToolTip('Add Z plane');
  sectionZButton.setIcon("adsk-icon-plane-z");
  sectionZButton.onClick = createNavToggler(sectionZButton, 'z');
  parentButton.addControl(sectionZButton);

  var sectionBoxButton = this.sectionBoxButton = new AVU.Button("toolbar-sectionTool-box");
  sectionBoxButton.setToolTip('Add box');
  sectionBoxButton.setIcon("adsk-icon-box");
  sectionBoxButton.onClick = createNavToggler(sectionBoxButton, 'box');
  parentButton.addControl(sectionBoxButton);

  if (viewer.model) {
    updateSectionButtons();
  } else {
    viewer.addEventListener(Autodesk.Viewing.MODEL_ADDED_EVENT, updateSectionButtons, { once: true });
  }
};

/**
    * @private
    */
proto.destroyUI = function () {

  if (this.sectionToolButton) {
    this.sectionToolButton.removeFromParent();
    this.sectionToolButton = null;

    this.buttons = {};
  }
};

/**
    * Activates a section plane for user to interact with.
    * It performs the same action as the UI button.
    * 
    * @param {string} mode - Accepted values are 'x', 'y', 'z' and 'box' (in lowercase)
    * @returns {boolean} - true if the activation was successful.
    * @alias Autodesk.Viewing.Extensions.SectionExtension#activate
    */
proto.activate = function (mode) {
  if (this.activeStatus && this.mode === mode) {
    return;
  }
  this.enableSectionTool(true);
  switch (mode) {
    default:
    case 'x':
      this.tool.setSection('X');
      this.mode = 'x';
      break;
    case 'y':
      this.tool.setSection('Y');
      this.mode = 'y';
      break;
    case 'z':
      this.tool.setSection('Z');
      this.mode = 'z';
      break;
    case 'box':
      this.tool.setSection('BOX');
      this.mode = 'box';
      break;}

  this.activeStatus = true;
  return true;
};

/**
    * Removes the section plane/box from the 3D canvas.
    * 
    * @param keepCutPlanes - keep existing cut planes when deactivating the tool. Default is false.
    *
    * @alias Autodesk.Viewing.Extensions.SectionExtension#deactivate
    * @returns {boolean} - returns true if deactivated, false otherwise.
    */
proto.deactivate = function (keepCutPlanes) {
  if (this.activeStatus) {
    this.tool.setActiveMode("");
    this.enableSectionTool(false, keepCutPlanes);
    this.activeStatus = false;
    return true;
  }
  return false;
};

/**
    * Turns display hatches on or off.
    * @param {boolean} value - if true all section planes will get the hatches applied, otherwise, the section planes will not have the hatches.
    */
proto.displaySectionHatches = function (value) {var _this2 = this;

  this.tool.setDisplaySectionHatches(value);

  if (this.activeStatus) {
    var planes = this.getSectionPlanes();
    this.tool.clearSection();
    // update the hatches for each existing plane
    planes.forEach(function (plane) {
      _this2.tool.updateCapMeshes(new THREE.Plane().setComponents(plane.x, plane.y, plane.z, plane.w));
    });
  }
};


/**
    * Invoked when the context menu is about to be created.
    * Adds additional entries to the context menu.
    *
    * @param section
    * @param menu
    * @param status
    * @private
    */
function onContextMenu(section, menu, status) {var _intersection$face;

  if (!status.hasSelected)
  return;

  var viewer = section.viewer;

  var aggregateSelection = viewer.getAggregateSelection();

  // This case is relevant mostly for hypermodel viewing, when there are 2D planes living in a 3D scene.
  // In this case, it make no sense to allow "section-box" to a plane.
  if (aggregateSelection.length === 1 && aggregateSelection[0].model.is2d()) {
    return;
  }

  var bbox = viewer.impl.selector.getSelectionBounds();

  var menuEntry = {
    title: "Section",
    target: [] };


  menuEntry.target.push({
    title: 'Section Box',
    target: function target() {
      section.setSectionBox(bbox);
      analytics.track('viewer.section', {
        from: 'Contextual',
        type: 'Box',
        action: 'Enable' });

    } });


  var selected = aggregateSelection.map(function (selectionObject) {return selectionObject.selection;}).flat();
  var modelIds = aggregateSelection.map(function (selectionObject) {return selectionObject.model.id;});
  var intersection = viewer.impl.hitTest(status.canvasX, status.canvasY, false, selected, modelIds);

  // Ensure that the selected object is the on that recieved the context click.
  if ((intersection === null || intersection === void 0 ? void 0 : (_intersection$face = intersection.face) === null || _intersection$face === void 0 ? void 0 : _intersection$face.normal) && intersection.model && selected.indexOf(intersection.dbId) !== -1) {

    var mesh = viewer.impl.getRenderProxy(intersection.model, intersection.fragId);
    var normalMatrix = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
    var normal = intersection.face.normal.clone().applyMatrix3(normalMatrix).normalize();

    menuEntry.target.push({
      title: 'Section Plane',
      target: function target() {
        section.setSectionPlane(normal, intersection.point, false);
        analytics.track('viewer.section', {
          from: 'Contextual',
          type: 'Plane',
          action: 'Enable' });

      } });

  }

  menu.push(menuEntry);
}


// Make the extension available
Autodesk.Viewing.theExtensionManager.registerExtension('Autodesk.Section', SectionExtension);
})();

Autodesk.Extensions.Section = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Section.js.map