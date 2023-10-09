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

/***/ "./extensions/CompGeom/LmvCanvasContext.js":
/*!*************************************************!*\
  !*** ./extensions/CompGeom/LmvCanvasContext.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hijackContextAPI": () => (/* binding */ hijackContextAPI),
/* harmony export */   "LmvCanvasContext": () => (/* binding */ LmvCanvasContext)
/* harmony export */ });
/* harmony import */ var _path2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path2d */ "./extensions/CompGeom/path2d.js");
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var av = Autodesk.Viewing,
avp = av.Private;

var VertexBufferBuilder = avp.VertexBufferBuilder;

//Custom implementation of HTML Canvas API used for rendering PDF geometry using the WebGL accelerated F2D renderer


//A custom context object that overloads standard HMTL Canvas 2D context to intercept draw
//calls and pipe them into LMV vertex buffers
function hijackContextAPI(inContext, lmvContext) {

  var fnList = [
  "fillRect",
  "strokeRect",
  "clearRect",
  "beginPath",
  "closePath",
  "moveTo",
  "lineTo",
  "arc",
  "arcTo",
  "quadraticCurveTo",
  "bezierCurveTo",
  "rect",
  "fill",
  "stroke",
  "clip",
  "strokeText",
  "fillText",
  "drawImage",
  "save",
  "restore",
  "setLineDash",
  "createPattern",

  // OCG related
  "beginMarkedContent",
  "beginMarkedContentProps",
  "endMarkedContent",
  "setCurrentOperatorIndex",

  //Inject this function into canvas context so we can batch process inlineImageGroup related calls
  "needDelegateInlineImageGroup",
  "isLMVCanvasContext",
  "createChildGroupContext",
  "endChildGroupContext"];


  fnList.forEach(function (fn) {
    inContext["_original" + fn] = inContext[fn];
    inContext[fn] = lmvContext[fn].bind(lmvContext);
  });

}

var QUAD_TEXTURE = 1;
var IMAGE_TEXTURE = 2;

var _tmpXform = new Array(6);
var _tmpVec = new THREE.Vector2();
var _tmpBox = new THREE.Box2();


//Used for matrix decomposition in drawImage
var _offset = new THREE.Vector3();
var _quat = new THREE.Quaternion();
var _scale = new THREE.Vector3();
var _axis = new THREE.Vector3();
var _mtx4 = new THREE.Matrix4();

var LmvCanvasContext = /*#__PURE__*/function () {_createClass(LmvCanvasContext, null, [{ key: "isRef",

    /**
                                                                                                               * Check is a PDF Ref object
                                                                                                               * @param {PDF.Ref} obj 
                                                                                                               */value: function isRef(
    obj) {
      return obj != null && typeof obj.num === "number" && typeof obj.gen === "number";
    }

    /**
       * generate a simple string works as a key for the ref.
       * @param {PDF.Ref} ref 
       */ }, { key: "refKey", value: function refKey(
    ref) {
      return "".concat(ref.num, "-").concat(ref.gen);
    }

    // from /@adsk/pdfjs-dist/lib/shared/util.js
  }, { key: "applyTransform", value: function applyTransform(p, m) {
      var xt = p[0] * m[0] + p[1] * m[2] + m[4];
      var yt = p[0] * m[1] + p[1] * m[3] + m[5];
      return [xt, yt];
    } }, { key: "inverseTransform", value: function inverseTransform(

    m) {
      var d = m[0] * m[3] - m[1] * m[2];
      return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
    } }]);

  function LmvCanvasContext(viewport, toPageUnits, meshCallback, fontEngine, usingTextLayer, fontAtlas, pdfRefMap) {_classCallCheck(this, LmvCanvasContext);

    //
    // Prepare canvas using PDF page dimensions
    //
    //TODO: Do we need that or can we just overload the entire CanvasContext API and skip the HTML element creation completely?
    var _document = av.getGlobal().document;
    var canvas = _document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    this.canvasContext = context; //REQUIRED for PDF.js interface
    this.viewport = viewport; //REQUIRED for PDF.js interface
    this.toPageUnits = toPageUnits;

    // LMV-5812: This constant is required to calculate the line width
    // Usually the viewport is scaled by a value greater than 1, but for some PDFs (ultra wide) the scale value will be less than 1.
    // The line width should be downscaled with the same factor as the viewport, otherwise lines would look too large
    // The default line width is 1 for canvas context 2d.
    this.lineWidthScale = this.viewport.scale < 1 ? this.viewport.scale / this.viewport.scaleByDPI : 1;

    this.meshCallback = meshCallback;
    // Only set bounds for PDF, because Edit2d is using LmvCanvasContext for drawing, and doesn't require clipping
    if (viewport.clipToViewport == true) {
      var offsetX = viewport.offsetX || 0;
      var offsetY = viewport.offsetY || 0;
      this.bounds = new THREE.Vector4(offsetX * toPageUnits, offsetY * toPageUnits,
      (viewport.width + offsetX) * toPageUnits, (viewport.height + offsetY) * toPageUnits);
    }

    this.currentMeshIndex = 0;
    this.imageNumber = 0;
    this.currentVbb = new VertexBufferBuilder(false);
    this._curPath = null;
    this._curClip = null;
    this.first = true;
    this.states = [];
    this.glyphCache = {};
    this.usingTextLayer = usingTextLayer;

    //Fixed precision tolerance assuming the input is in typographic "point" units.
    this.precisionTolerance = 0.1;

    this.dbId = -1;
    this.maxDbId = 0;

    // If true, dbId is automatically increased on each beginPath call.
    this.consecutiveIds = false;

    if (av.isMobileDevice()) {
      Autodesk.Extensions.CompGeom.SetTesselationParams(undefined, 0.1);
    }

    this.fontEngine = fontEngine;

    // Use solid lines by default. See LineStyleDef.js for other line types (dashed etc.)
    this.lineStyle = 0;

    // If true, lines widths are applied in screen-space
    this.isScreenSpace = false;

    hijackContextAPI(context, this);

    this.layers = {};
    this.defaultLayerId = 0;
    this.currentLayerId = this.defaultLayerId;
    this.sequencedDbId = -1;
    this.taggedId = null;
    this.defaultVPId = 0;
    this.currentVpId = this.defaultVPId;
    this.viewports = [this.createViewPortData(
    new THREE.Matrix4().makeScale(viewport.scale, viewport.scale, viewport.scale).elements)];

    this.viewportMap = {};

    this.ocgStack = [];

    this.msdfRender = true;
    this.fontAtlas = fontAtlas;
    this.pdfRefMap = pdfRefMap || {};
  }_createClass(LmvCanvasContext, [{ key: "destroy", value: function destroy()

    {
      this.canvasContext = null;
      this.meshCallback = null;
    } }, { key: "updateDBId", value: function updateDBId()

    {
      if (this.taggedId != null) {
        this.dbId = this.taggedId;
      } else {
        if (this.consecutiveIds) {
          this.sequencedDbId++;
          this.dbId = this.sequencedDbId;
        }
      }

      this.maxDbId = Math.max(this.maxDbId, this.dbId);
    } }, { key: "save", value: function save()

    {
      //console.log("save");
      this.states.push({
        clip: this._curClip,
        consecutiveIds: this.consecutiveIds,
        lineDashedDef: this.lineDashedDef,
        lineStyle: this.lineStyle });


      this.canvasContext._originalsave();
    } }, { key: "restore", value: function restore()

    {

      var state = this.states.pop();

      if (state) {
        this._curClip = state.clip;
        this.consecutiveIds = state.consecutiveIds;
        this.lineDashedDef = state.lineDashedDef;
        this.lineStyle = state.lineStyle;
      }

      //console.log("restore");
      this.canvasContext._originalrestore();
    } }, { key: "flushBuffer", value: function flushBuffer(

    addCount, finalFlush, textureOption) {
      if (!this.currentVbb.vcount && !finalFlush) {
        return;
      }

      // LMV-5542 - support blend modes for fill colors
      // Limit the number of times that meshes are split up.
      // When adding support for a new compositeOperation, add it to the if condition.
      var compositeOperation = 'source-over';
      var globalCompOp = this.canvasContext.globalCompositeOperation;
      if (globalCompOp === 'multiply' || globalCompOp === 'min' || globalCompOp === 'darken' || globalCompOp === 'lighten') {
        compositeOperation = globalCompOp;
      }

      // When the blending mode has changed, we have to flush the shapes that were added with the blending mode that
      // was current until now, that's why we use this.currentCompositeOperation below when setting material.compositeOperation.
      var blendModeChanged = this.currentCompositeOperation !== compositeOperation;
      var flush = finalFlush || this.currentVbb.isFull(addCount) || blendModeChanged;

      if (flush) {
        if (this.currentVbb.vcount) {
          var mesh = this.currentVbb.toMesh();
          mesh.material = {
            skipEllipticals: !this.currentVbb.numEllipticals,
            skipCircles: !this.currentVbb.numCirculars,
            skipTriangleGeoms: !this.currentVbb.numTriangleGeoms,
            useInstancing: this.currentVbb.useInstancing,
            isScreenSpace: !this.currentImage,
            hasLineStyles: this.currentVbb.hasLineStyles,
            msdfFontTexture: !!this.hasMSDFContent,
            viewportBounds: this.bounds,
            imageUVTexture: textureOption === IMAGE_TEXTURE };


          if (this.currentImage) {
            mesh.material.image = this.currentImage;
            mesh.material.image.name = this.currentImage.cacheKey || this.imageNumber++;
            // Assume the background of PDF page is white, when use it to do multiply, white is better then black color
            // And it should be correct for most cases
            mesh.material.compositeCanvasColor = "#ffffff";
            mesh.material.opacity = this.canvasContext.globalAlpha;
            this.currentImage = null;
          }

          mesh.material.compositeOperation = this.currentCompositeOperation;

          this.meshCallback(mesh, this.currentMeshIndex++);
          this.currentVbb.reset(0);
          this.hasMSDFContent = false;
        }
      }

      this.currentCompositeOperation = compositeOperation;
    }

    //Polytriangle requires some post-processing depending on wheter instancing is used or not
    //TODO: This is copy-pasted from the same function in F2D.js. It's purely used to
    //add half width outline to polytriangles so that they look antialiased.
  }, { key: "addPolyTriangle", value: function addPolyTriangle(points, inds, color, dbId, layer, antialiasEdges) {
      var me = this;
      var edgeMap = null;

      var currentVpId = this.currentVpId;

      var aaLineWeight = -0.5; //negative = in pixel units

      function processEdge(iFrom, iTo) {
        if (iFrom > iTo) {
          var tmp = iFrom;
          iFrom = iTo;
          iTo = tmp;
        }

        if (!edgeMap[iFrom])
        edgeMap[iFrom] = [iTo];else
        {
          var adjacentVerts = edgeMap[iFrom];
          var idx = adjacentVerts.lastIndexOf(iTo);
          if (idx == -1)
          adjacentVerts.push(iTo); //first time we see this edge, so remember it as exterior edge
          else
            adjacentVerts[idx] = -1; //the second time we see an edge mark it as interior edge
        }
      }


      function addAllAntialiasEdges() {

        for (var i = 0, iEnd = edgeMap.length; i < iEnd; i++) {

          var adjacentVerts = edgeMap[i];
          if (!adjacentVerts)
          continue;

          for (var j = 0; j < adjacentVerts.length; j++) {
            var iTo = adjacentVerts[j];
            if (iTo == -1)
            continue; //an interior edge was here -- skip
            else {
                //exterior edge -- add an antialiasing line for it
                me.flushBuffer(4);
                me.currentVbb.addSegment(points[2 * i], points[2 * i + 1],
                points[2 * iTo], points[2 * iTo + 1],
                me.currentLayerId,
                aaLineWeight,
                color,
                dbId, layer, currentVpId, me.lineStyle);
              }
          }
        }
      }

      function antialiasOneEdge(iFrom, iTo) {
        if (iFrom > iTo) {
          var tmp = iFrom;
          iFrom = iTo;
          iTo = tmp;
        }

        var adjacentVerts = edgeMap[iFrom];
        if (!adjacentVerts)
        return;

        var idx = adjacentVerts.indexOf(iTo);
        if (idx != -1) {
          //exterior edge -- add an antialiasing line for it
          me.flushBuffer(4);
          me.currentVbb.addSegment(points[2 * iFrom], points[2 * iFrom + 1],
          points[2 * iTo], points[2 * iTo + 1],
          me.currentLayerId,
          aaLineWeight,
          color,
          dbId, layer, currentVpId, me.lineStyle);
        }
      }

      if (antialiasEdges) {
        edgeMap = new Array(points.length / 2);

        for (var i = 0, iEnd = inds.length; i < iEnd; i += 3) {
          var i0 = inds[i];
          var i1 = inds[i + 1];
          var i2 = inds[i + 2];

          processEdge(i0, i1);
          processEdge(i1, i2);
          processEdge(i2, i0);
        }
      }

      if (isNaN(color) && (color.isPattern === true || color.imageTransform)) {
        this.flushBuffer(0, true);
        var image = color.image;
        var count = points.length / 2; // number of vertices

        this.flushBuffer(count);
        var vbb = this.currentVbb;
        var vbase = vbb.vcount;

        // need to apply the transformation to the UV
        var xform = this.getCurrentTransform();
        var x1, y1, w1, h1;
        if (color.isGradient) {
          x1 = this._curPath.bbox.min.x;
          y1 = this._curPath.bbox.min.y;
          w1 = this._curPath.bbox.max.x - x1;
          h1 = this._curPath.bbox.max.y - y1;
        } else {
          x1 = this.tx(0, 0, xform);
          y1 = this.ty(0, 0, xform);
          w1 = Math.abs(this.tx(image.width, image.height, xform) - x1);
          h1 = Math.abs(this.ty(image.width, image.height, xform) - y1);
        }

        //LMV-5353
        if (color.repetition === "no-repeat" && !color.isGradient) {
          var x2 = this.tx(image.width, image.height, xform);
          var y2 = this.ty(image.width, image.height, xform);
          vbb.addVertexImagePolytriangle(x1, y1, 0, 0, 0xFFFFFFFF, dbId, layer, currentVpId);
          vbb.addVertexImagePolytriangle(x1, y2, 0, -1, 0xFFFFFFFF, dbId, layer, currentVpId);
          vbb.addVertexImagePolytriangle(x2, y2, 1, -1, 0xFFFFFFFF, dbId, layer, currentVpId);
          vbb.addVertexImagePolytriangle(x2, y1, 1, 0, 0xFFFFFFFF, dbId, layer, currentVpId);

          inds = [0, 1, 2, 0, 2, 3];
        } else if (color.imageTransform) {
          for (var _i = 0; _i < count; ++_i) {
            var x = points[2 * _i];
            var y = points[2 * _i + 1];

            var uv = LmvCanvasContext.applyTransform([x, y], color.imageTransform);

            vbb.addVertexImagePolytriangle(x, y, uv[0], uv[1], 0xFFFFFFFF, dbId, layer, currentVpId);
          }
        } else {
          for (var _i2 = 0; _i2 < count; ++_i2) {
            var _x = points[2 * _i2];
            var _y = points[2 * _i2 + 1];

            var u = (_x - x1) / w1;
            var v = (_y - y1) / h1;

            if (color.isGradient) {
              v = 1 - v;
            }
            vbb.addVertexImagePolytriangle(_x, _y, u, v, 0xFFFFFFFF, dbId, layer, currentVpId);
          }
        }

        this.currentImage = image;
        vbb.addIndices(inds, vbase);
        this.flushBuffer(0, true, IMAGE_TEXTURE);
      } else {
        if (this.currentVbb.useInstancing) {
          var _count = inds.length;
          for (var _i3 = 0; _i3 < _count; _i3 += 3) {
            var _i4 = inds[_i3];
            var _i5 = inds[_i3 + 1];
            var _i6 = inds[_i3 + 2];

            this.flushBuffer(4);

            this.currentVbb.addTriangleGeom(points[2 * _i4], points[2 * _i4 + 1],
            points[2 * _i5], points[2 * _i5 + 1],
            points[2 * _i6], points[2 * _i6 + 1],
            color, dbId, layer, currentVpId);

            if (antialiasEdges) {
              antialiasOneEdge(_i4, _i5);
              antialiasOneEdge(_i5, _i6);
              antialiasOneEdge(_i6, _i4);
            }
          }
        } else
        {
          var _count2 = points.length / 2; // number of vertices

          this.flushBuffer(_count2);
          var _vbb = this.currentVbb;
          var _vbase = _vbb.vcount;

          for (var _i7 = 0; _i7 < _count2; ++_i7) {
            var _x2 = points[2 * _i7];
            var _y2 = points[2 * _i7 + 1];
            _vbb.addVertexPolytriangle(_x2, _y2, color, dbId, layer, currentVpId);
          }

          _vbb.addIndices(inds, _vbase);

          if (antialiasEdges) {
            addAllAntialiasEdges();
          }

        }
      }
    }

    /**
       * Returns a new GradientData instance.
       * @param {Object} data - contains the raw data to create the GradientData.
       * @returns {GradientData}
       */ }, { key: "createGradientData", value: function createGradientData(
    data) {
      return new GradientData(data);
    }

    //Extract colors from HTML Canvas state
  }, { key: "getFillColor", value: function getFillColor() {var _this = this;
      // Create a pattern from a CanvasGradient
      var getGradientFill = function getGradientFill(gradientData) {

        var startPoint = gradientData.startPoint.slice();
        var endPoint = gradientData.endPoint.slice();

        var scale = _this.viewport.scale || 1;
        // Take into account the path's bounding box
        var width = (_this._curPath.bbox.max.x - _this._curPath.bbox.min.x) / _this.toPageUnits / scale;
        var height = (_this._curPath.bbox.max.y - _this._curPath.bbox.min.y) / _this.toPageUnits / scale;

        // Get the offset from the bounding box
        var offsetX = _this._curPath.bbox.min.x / _this.toPageUnits / scale;
        var offsetY = _this._curPath.bbox.min.y / _this.toPageUnits / scale;

        startPoint[0] -= offsetX;
        startPoint[1] -= offsetY;
        endPoint[0] -= offsetX;
        endPoint[1] -= offsetY;

        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;

        var tempCtx = tempCanvas.getContext('2d');
        // Create the gradient with the paths bounding box offset applied
        // var gradient = createGradient(tempCtx, gradientData);
        var gradient = gradientData.generateCanvasGradient(tempCtx, startPoint, endPoint);
        tempCtx.fillStyle = gradient;
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        var pattern = _this.createPattern(tempCanvas, 'no-repeat');
        pattern.isGradient = true;
        return pattern;
      };


      var fillStyle = this.canvasContext.fillStyle;
      if (fillStyle && fillStyle.isPattern === true) {
        return fillStyle;
      } else if (fillStyle instanceof CanvasGradient) {
        var gradientData = new GradientData(fillStyle);
        return getGradientFill(gradientData);
      } else if (typeof fillStyle !== "string") {
        console.warn("Unsupported fill style.");
        return 0x00000000;
      }

      var rgb = parseInt(fillStyle.slice(1), 16);
      var a = 255 * this.canvasContext.globalAlpha << 24;
      var c = a | (rgb & 0xff) << 16 | rgb & 0xff00 | rgb >> 16 & 0xff;
      return c;
    } }, { key: "getStrokeColor", value: function getStrokeColor()

    {

      var ctx = this.canvasContext;

      if (this.lastStrokeStyle === ctx.strokeStyle && ctx.globalAlpha === this.lastAlpha) {
        return this.lastRgb;
      } else {
        var rgb = parseInt(ctx.strokeStyle.slice(1), 16);
        var a = 255 * ctx.globalAlpha << 24;
        var c = a | (rgb & 0xff) << 16 | rgb & 0xff00 | rgb >> 16 & 0xff;

        this.lastRgb = c;
        this.lastStrokeStyle = ctx.strokeStyle;
        this.lastAlpha = ctx.globalAlpha;

        return c;
      }

    } }, { key: "getCurrentTransform", value: function getCurrentTransform()

    {
      var xform = this.canvasContext.mozCurrentTransform;

      //Pay attention here: In case we are processing the path of a character and we want to
      //cache it for later use, we have to neutralize the part of the canvas transform that positions
      //the character in the page, but we need to keep the rest of the transform (that positions parts
      //of the character in its own em-box). This is what the inverse transform multiplication here does.
      //TODO: we can optimize this to only compute the multiplication in case mozCurrentTransform changes.
      if (this.isFontChar) {
        var m = this.invXform;
        var a = xform[0],b = xform[1],c = xform[2],d = xform[3],e = xform[4],f = xform[5];
        _tmpXform[0] = m[0] * a + m[2] * b;
        _tmpXform[1] = m[1] * a + m[3] * b;
        _tmpXform[2] = m[0] * c + m[2] * d;
        _tmpXform[3] = m[1] * c + m[3] * d;
        _tmpXform[4] = m[0] * e + m[2] * f + m[4];
        _tmpXform[5] = m[1] * e + m[3] * f + m[5];
        return _tmpXform;
      }
      return xform;
    } }, { key: "tx", value: function tx(

    x, y, xform) {
      xform = xform || this.getCurrentTransform();
      return (x * xform[0] + y * xform[2] + xform[4]) * (this.isFontChar ? 1 : this.toPageUnits);
    } }, { key: "ty", value: function ty(

    x, y, xform) {
      xform = xform || this.getCurrentTransform();
      return (x * xform[1] + y * xform[3] + xform[5]) * (this.isFontChar ? 1 : this.toPageUnits);
    } }, { key: "scaleValue", value: function scaleValue(

    v, xform) {
      xform = xform || this.getCurrentTransform();
      return this.toPageUnits * Math.sqrt(Math.abs(xform[0] * xform[3] - xform[1] * xform[2])) * v; //assumes uniform;
    } }, { key: "transformBox", value: function transformBox(

    bbox, xform, dst) {
      xform = xform || this.getCurrentTransform();

      _tmpBox.makeEmpty();

      _tmpVec.set(this.tx(bbox.min.x, bbox.min.y, xform), this.ty(bbox.min.x, bbox.min.y, xform));
      _tmpBox.expandByPoint(_tmpVec);

      _tmpVec.set(this.tx(bbox.max.x, bbox.min.y, xform), this.ty(bbox.max.x, bbox.min.y, xform));
      _tmpBox.expandByPoint(_tmpVec);

      _tmpVec.set(this.tx(bbox.max.x, bbox.max.y, xform), this.ty(bbox.max.x, bbox.max.y, xform));
      _tmpBox.expandByPoint(_tmpVec);

      _tmpVec.set(this.tx(bbox.min.x, bbox.max.y, xform), this.ty(bbox.min.x, bbox.max.y, xform));
      _tmpBox.expandByPoint(_tmpVec);

      if (dst) {
        dst.copy(_tmpBox);
        return dst;
      } else {
        return _tmpBox.clone();
      }
    } }, { key: "fillRect", value: function fillRect(


    x, y, w, h) {
      this.updateDBId();

      // Hack: Assumption here is that the first fillRect call is for the white background quad.
      //       For this, we don't want a dbI and use -1 instead. Unfortunately, this fillRect call happens
      //       inside PDF.js (see beginDrawing in display/canvas.js), so we cannot easily set this id from outside.
      this.rect(x, y, w, h);

      this.dbId = this.first ? -1 : this.dbId;
      this.first = false;
      this.fill();
      this.beginPath();
    } }, { key: "strokeRect", value: function strokeRect(

    x, y, w, h) {
      //TODO:
      console.log("strokeRect");
    } }, { key: "clearRect", value: function clearRect(

    x, y, w, h) {
      console.log("clearRect");
      //TODO:
    } }, { key: "_beginTextChar", value: function _beginTextChar(

    character, x, y, font, fontSize) {
      this.isFontChar = true;
      this.invXform = this.canvasContext.mozCurrentTransformInverse;
      this.hashKey = character.charCodeAt(0) + "/" + font.loadedName + "/" + fontSize;
      this.cachedGlyph = this.glyphCache[this.hashKey];

      if (this.cachedGlyph) {
        this.skipPath = true;
      } else {
        this.skipPath = false;
      }
      //console.log(character, x, y, font, fontSize);
    } }, { key: "drawMSDFText", value: function drawMSDFText(

    character, scaleX, scaleY, font, fontSize) {
      scaleX = 0;
      var fontName = font.name;

      function distance(x0, y0, x1, y1, x2, y2) {
        return Math.abs((y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1) / Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
      }

      if (this.fontAtlas && this.fontAtlas.charsMap && this.fontAtlas.charsMap[fontName]) {
        var charIndex = this.fontAtlas.charsMap[fontName][character.charCodeAt(0)];
        if (charIndex == undefined) {
          return false;
        } else {
          if (this.currentVbb.isFull(4)) {
            this.flushBuffer(0, true);
          }

          this.hasMSDFContent = true;
          var char = this.fontAtlas.chars[charIndex];
          if (char.page > 0) {
            // Now only support 1 page of font texture, need to add extra logic for multiple font texture in the shader pipeline
            return false;
          }
          var common = this.fontAtlas.common[char.common];
          var info = this.fontAtlas.info[char.info];

          // need to consider the font size
          var scale = fontSize / info.size;
          var w = char.width * (scale + scaleX);
          var flag = char.inverseYAxis ? -1 : 1;
          var h = char.height * (scale + scaleY) * flag;
          var x = char.txoffset * (scale + scaleX),
          y = char.tyoffset * (scale + scaleY) * -flag;

          var points = [
          x, y,
          x, y + h,
          x + w, y + h,
          x + w, y];


          var ps = [];
          for (var _i8 = 0; _i8 < points.length; _i8 += 2) {
            ps.push(this.tx(points[_i8], points[_i8 + 1]));
            ps.push(this.ty(points[_i8], points[_i8 + 1]));
          }
          var uv = [];

          if (char.inverseYAxis) {
            uv = [
            char.x / common.scaleW, 1 - char.y / common.scaleH,
            char.x / common.scaleW, 1 - (char.y + char.height) / common.scaleH,
            (char.x + char.width) / common.scaleW, 1 - (char.y + char.height) / common.scaleH,
            (char.x + char.width) / common.scaleW, 1 - char.y / common.scaleH];

          } else {
            uv = [
            char.x / common.scaleW, 1 - (char.y + char.height) / common.scaleH,
            char.x / common.scaleW, 1 - char.y / common.scaleH,
            (char.x + char.width) / common.scaleW, 1 - char.y / common.scaleH,
            (char.x + char.width) / common.scaleW, 1 - (char.y + char.height) / common.scaleH];

          }

          // do a fast clipping for MSDF text, if the text is clipped out any part, will not show the text to make it simple
          // otherwise it requires to do a whole UV mapping for each part left, which is overhead at this moment.
          if (this._curClip) {
            var path = new _path2d__WEBPACK_IMPORTED_MODULE_0__.Path2D(this.precisionTolerance);
            var index = 0;
            path.moveTo(ps[index++], ps[index++]);
            path.lineTo(ps[index++], ps[index++]);
            path.lineTo(ps[index++], ps[index++]);
            path.lineTo(ps[index++], ps[index++]);
            path.closePath();

            var subjFlatted = path.flattened || path.flatten(true);
            var clipFlatted = this._curClip.flattened || this._curClip.flatten(true);
            var precheckResult = path.preCheckForClipping(this, clipFlatted, subjFlatted, false, false);
            if (precheckResult.needClipping) {
              var polygons = path.msdfClipping(clipFlatted);
              var x1 = ps[0],y1 = ps[1];
              var x2 = ps[6],y2 = ps[7];
              var x3 = ps[2],y3 = ps[3];

              var w1 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
              var h1 = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
              // need to get the corresponding UV value
              for (var j = 0; j < polygons.length; j++) {
                var polygon = polygons[j];
                if (this.currentVbb.isFull(polygon.vertices.length)) {
                  this.flushBuffer(0, true);
                }
                var _vbase2 = this.currentVbb.vcount;
                for (var i = 0; i < polygon.vertices.length; i += 2) {
                  var x0 = polygon.vertices[i];
                  var y0 = polygon.vertices[i + 1];
                  var dy = distance(x0, y0, x1, y1, x2, y2);
                  var dx = distance(x0, y0, x1, y1, x3, y3);

                  var u = uv[0] + (uv[4] - uv[0]) * (dx / w1);
                  var v = uv[1] + (uv[5] - uv[1]) * (dy / h1);
                  this.currentVbb.addVertexMSDFPolytriangle(x0, y0, u, v, this.getFillColor(), this.dbId, this.currentLayerId, 0);
                }
                this.currentVbb.addIndices(polygon.indices, _vbase2);
              }

              this.currentImage = this.fontAtlas.pages[char.page];
              return true;
            } else if (precheckResult.needCancel) {
              return true;
            }
          }

          if (this.currentVbb.isFull(4)) {
            this.flushBuffer(0, true);
          }
          var vbase = this.currentVbb.vcount;
          var count = points.length / 2;
          for (var _i9 = 0; _i9 < count; _i9++) {
            this.currentVbb.addVertexMSDFPolytriangle(ps[_i9 * 2], ps[_i9 * 2 + 1], uv[_i9 * 2], uv[_i9 * 2 + 1], this.getFillColor(), this.dbId, this.currentLayerId, 0);
          }

          this.currentVbb.addIndices([0, 2, 1, 0, 2, 3], vbase);
          this.currentImage = this.fontAtlas.pages[char.page];

          return true;
        }

      } else {
        return false;
      }
    } }, { key: "beginPath", value: function beginPath(

    character, x, y, font, fontSize) {
      this.updateDBId();

      if (typeof character === "string" && font && fontSize) {
        if (this.fontAtlas && this.drawMSDFText(character, x, y, font, fontSize)) {
          this.skipPath = true;
        } else {
          if (this.usingTextLayer === true) {
            this.skipPath = true;
          } else {
            this._beginTextChar(character, x, y, font, fontSize);
          }
        }
      } else {
        this.skipPath = false;
        this.isFontChar = false;
        this.cachedGlyph = null;
      }

      if (this.skipPath)
      this._curPath = null;else
      {
        this._curPath = new _path2d__WEBPACK_IMPORTED_MODULE_0__.Path2D(this.isFontChar ? 0.0001 : this.precisionTolerance);

        // Apply custom tess params (if specified)
        this._curPath.setTessParams(this.tessParams);
      }
    } }, { key: "closePath", value: function closePath()

    {

      if (this.skipPath)
      return;

      this._curPath.closePath();
      this.cachedGlyph = null;
    } }, { key: "moveTo", value: function moveTo(

    x, y) {

      if (this.skipPath)
      return;

      if (!this._curPath)
      this.beginPath();

      var xform = this.getCurrentTransform();

      this._curPath.moveTo(this.tx(x, y, xform), this.ty(x, y, xform));
    } }, { key: "lineTo", value: function lineTo(

    x, y) {

      if (this.skipPath)
      return;

      var xform = this.getCurrentTransform();

      this._curPath.lineTo(this.tx(x, y, xform), this.ty(x, y, xform));
    } }, { key: "arc", value: function arc(

    x, y, radius, startAngle, endAngle, anticlockwise) {

      if (this.skipPath)
      return;

      //TODO: transform

      this._curPath.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    } }, { key: "arcTo", value: function arcTo(

    x1, y1, x2, y2, radius) {

      if (this.skipPath)
      return;

      var xform = this.getCurrentTransform();

      this._curPath.arcTo(this.tx(x1, y1, xform), this.ty(x1, y1, xform),
      this.tx(x2, y2, xform), this.ty(x2, y2, xform),
      this.scaleValue(radius, xform));
    } }, { key: "quadraticCurveTo", value: function quadraticCurveTo(

    cp1x, cp1y, x, y) {

      if (this.skipPath)
      return;

      var xform = this.getCurrentTransform();

      this._curPath.quadraticCurveTo(this.tx(cp1x, cp1y, xform), this.ty(cp1x, cp1y, xform),
      this.tx(x, y, xform), this.ty(x, y, xform));
    } }, { key: "bezierCurveTo", value: function bezierCurveTo(

    cp1x, cp1y, cp2x, cp2y, x, y) {

      if (this.skipPath)
      return;

      var xform = this.getCurrentTransform();

      this._curPath.bezierCurveTo(this.tx(cp1x, cp1y, xform), this.ty(cp1x, cp1y, xform),
      this.tx(cp2x, cp2y, xform), this.ty(cp2x, cp2y, xform),
      this.tx(x, y, xform), this.ty(x, y, xform));
    } }, { key: "ellipse", value: function ellipse(

    cx, cy, rx, ry, rotation, startAngle, endAngle, ccw) {

      if (this.skipPath) {
        return;
      }

      // TODO: We currently don't use ellipse() with a transform.
      //       The current code only works for translation and uniform scale.
      //       For rotation, startAngle/endAngle would change.
      //       For flipping, ccw may change.
      //       For skew, it gets really fun: 
      //        see https://math.stackexchange.com/questions/2068583/when-you-skew-an-ellipse-how-do-you-calculate-the-angle-of-rotation-and-the-new
      var xform = this.getCurrentTransform();

      this._curPath.ellipse(
      this.tx(cx, cy, xform), this.ty(cx, cy, xform),
      this.scaleValue(rx, xform),
      this.scaleValue(ry, xform),
      rotation,
      startAngle,
      endAngle,
      ccw);

    } }, { key: "rect", value: function rect(

    x, y, w, h) {

      if (this.skipPath)
      return;

      var xform = this.getCurrentTransform();

      if (!this._curPath)
      this.beginPath();

      this._curPath.moveTo(this.tx(x, y, xform), this.ty(x, y, xform));
      this._curPath.lineTo(this.tx(x + w, y, xform), this.ty(x + w, y, xform));
      this._curPath.lineTo(this.tx(x + w, y + h, xform), this.ty(x + w, y + h, xform));
      this._curPath.lineTo(this.tx(x, y + h, xform), this.ty(x, y + h, xform));
      this._curPath.closePath();
    } }, { key: "fill", value: function fill()

    {

      //Special flag passed to us by customization in the pdf.js library,
      //telling us to skip the antialiasing for polygons that are both filled and stroked
      var isFillStrokeCombo = false;
      if (arguments.length) {var _ref;
        var lastArg = (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]);
        if (typeof lastArg === "boolean") {
          isFillStrokeCombo = lastArg;
        }
      }

      if (this.isFontChar && !this.cachedGlyph) {
        this.glyphCache[this.hashKey] = this._curPath;
        this.cachedGlyph = this._curPath;
        this.cachedGlyph.isFontChar = true;
      }

      this.isFontChar = false;

      if (this.cachedGlyph) {
        this.cachedGlyph.fill(this, this.getFillColor(), this.dbId, this.currentLayerId, this._curClip, true);
      } else {
        this._curPath && this._curPath.fill(this, this.getFillColor(), this.dbId, this.currentLayerId, this._curClip, false, isFillStrokeCombo);
      }

      this.skipPath = false;

      //this._curClip = null;
      //lmvContext._curPath = null;
    } }, { key: "stroke", value: function stroke()

    {
      if (this.isFontChar && !this.cachedGlyph) {
        this.glyphCache[this.hashKey] = this._curPath;
        this.cachedGlyph = this._curPath;
        this.cachedGlyph.isFontChar = true;
      }

      this.updateLineDashStyle();
      this.isFontChar = false;

      // LineShader uses negative lineWidths to indicate screen-space line widths. Note that this.canvasContext.lineWidth does not allow negative values.
      // Therefore, we apply the sign separately.
      var sign = this.isScreenSpace ? -1.0 : 1.0;

      if (this.cachedGlyph) {
        this.cachedGlyph.stroke(this, sign * this.scaleValue(this.canvasContext.lineWidth * this.lineWidthScale), this.getStrokeColor(), this.dbId, this.currentLayerId, this._curClip, true, this.lineStyle);
      } else {
        this._curPath && this._curPath.stroke(this, sign * this.scaleValue(this.canvasContext.lineWidth * this.lineWidthScale), this.getStrokeColor(), this.dbId, this.currentLayerId, this._curClip, false, this.lineStyle);
      }

      this.skipPath = false;

      //lmvContext._curPath = null;
    } }, { key: "clip", value: function clip(

    param1, param2) {

      if (param2 !== undefined && param1 !== undefined) {
        this._curClip = param1;
        console.log("Probably unsupported use case");
      } else {

        //The clip region is also affected by any existing clip region,
        //i.e. we have to clip the clip.
        if (this._curClip) {
          this._curClip = this._curClip.clip(this._curPath, param1);
        } else {
          this._curClip = this._curPath;
        }

        this._curPath = null;
      }

      //console.log("CLIP", param1, param2);
    } }, { key: "strokeText", value: function strokeText(

    text, x, y, maxWidth, font, fontSize) {

      var ctx = this.canvasContext;
      ctx.save();
      ctx.translate(x, y);

      this.fontEngine.drawText(this, text, 0, 0, font, fontSize);
      this.stroke();

      ctx.restore();
    } }, { key: "fillText", value: function fillText(

    text, x, y, maxWidth, font, fontSize) {

      var ctx = this.canvasContext;
      ctx.save();
      ctx.translate(x, y);

      this.fontEngine.drawText(this, text, 0, 0, font, fontSize);
      this.fill();
      //this.stroke();

      ctx.restore();
    } }, { key: "getRotationAndScale", value: function getRotationAndScale(

    xform) {
      _mtx4.elements[0] = xform[0];
      _mtx4.elements[1] = xform[1];
      _mtx4.elements[4] = xform[2];
      _mtx4.elements[5] = xform[3];
      _mtx4.elements[12] = xform[4];
      _mtx4.elements[13] = xform[5];
      _mtx4.decompose(_offset, _quat, _scale);

      //Derive the rotation angle by converting the quaternion to axis-angle.
      var s = Math.sqrt(1.0 - _quat.w * _quat.w);
      _axis.set(_quat.x / s, _quat.y / s, _quat.z / s);
      var angle = 2.0 * Math.acos(Math.max(Math.min(1, _quat.w), -1));
      //Take care to negate the angle if the rotation axis is into the page.
      if (_quat.z < 0) {
        angle = -angle;
      }

      //Angle needs to be in the range 0-2pi for use by addTextureQuad below,
      //while input has domain [-pi, pi].
      if (angle < 0) {
        angle += 2 * Math.PI;
      }

      return {
        angle: angle,
        scale: _scale };

    } }, { key: "redrawImage", value: function redrawImage(

    image, flipX, flipY, angle) {
      var xform = [
      flipX * Math.cos(angle),
      flipY * Math.sin(angle),
      -flipX * Math.sin(angle),
      flipY * Math.cos(angle),
      0,
      0];var


      a = xform[0],b = xform[1],c = xform[2],d = xform[3],e = xform[4],f = xform[5];var _map =
      [
      [0, 0],
      [image.width, 0],
      [image.width, image.height],
      [0, image.height]].
      map(function (_ref2) {var _ref3 = _slicedToArray(_ref2, 2),x = _ref3[0],y = _ref3[1];return [a * x + b * y + e, c * x + d * y + f];}),_map2 = _slicedToArray(_map, 4),p1 = _map2[0],p2 = _map2[1],p3 = _map2[2],p4 = _map2[3];

      // new bounds
      var _ref4 = [
      Math.min(p1[0], p2[0], p3[0], p4[0]),
      Math.min(p1[1], p2[1], p3[1], p4[1]),
      Math.max(p1[0], p2[0], p3[0], p4[0]),
      Math.max(p1[1], p2[1], p3[1], p4[1])],x1 = _ref4[0],y1 = _ref4[1],x2 = _ref4[2],y2 = _ref4[3];


      var canvas = document.createElement('canvas');
      canvas.width = x2 - x1;
      canvas.height = y2 - y1;
      var ctx = canvas.getContext('2d');
      ctx.transform.apply(ctx, xform);

      ctx.drawImage(image, x1, y1);

      // release memory
      image.width = 0;
      image.height = 0;

      return canvas;
    } }, { key: "drawImage", value: function drawImage(

    image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

      var group;
      var clip = this._curClip;

      if (this.inlineImageGroups && this.inlineImageGroups.map[this.currentOpIndex] != undefined) {
        // means this is an inline image call, we have already have solution for it
        var index = this.inlineImageGroups.map[this.currentOpIndex];
        group = this.inlineImageGroups.groups[index];
        // if the group has already been rendered, ignore that
        if (group.rendered === true) {
          return;
        } else {
          // mark it as rendered
          group.rendered = true;
          image = group.canvas;
          clip = undefined; // improvement: consider clipping when merging images
        }
      }

      if (image.width === 0 || image.height === 0) {
        console.warn("Zero size image, skipping");
        return;
      }

      var xform = this.getCurrentTransform();var _this$getRotationAndS =
      this.getRotationAndScale(xform),angle = _this$getRotationAndS.angle,scale = _this$getRotationAndS.scale;

      if (group) {var _ref5 =

        [Math.sign(scale.x), Math.sign(scale.y)],flipX = _ref5[0],flipY = _ref5[1];

        // redraw image if the current transform flips the image
        if (flipX < 0 || flipY < 0) {
          image = this.redrawImage(image, flipX, flipY, -angle);
        }

        // If the current transform rotates the image by 90 or 180-deg, 
        // it already adjusts for Y offset
        var offsetY = group.flipY ? image.height : 0;
        var MIN = 1e-10;
        if (Math.abs(Math.cos(angle) - 1) > MIN) {
          offsetY = 0;
        }

        // need to revert the scale
        offsetY *= group.minScale;

        dx = group.bounds.min.x;
        dy = group.bounds.min.y + offsetY;
        dWidth = image.width * group.minScale;
        dHeight = image.height * group.minScale;
      }

      if (dx === undefined) {
        dx = sx;
        dy = sy;
        dWidth = sWidth;
        dHeight = sHeight;
      }

      if (dWidth === undefined) {
        dWidth = image.width;
        dHeight = image.height;
      }

      if (!dWidth) {
        console.warn("Zero size image, skipping");
        return;
      }

      //console.log("Draw image", dWidth, dHeight);

      if (clip) {
        // if a clipping path is specified we will render the image with the clipping polygon and
        // not with a quad

        var x1 = this.tx(dx, dy);
        var y1 = this.ty(dx, dy);
        var x2 = this.tx(dx + dWidth, dy);
        var y2 = this.ty(dx + dWidth, dy);
        var x3 = this.tx(dx + dWidth, dy + dHeight);
        var y3 = this.ty(dx + dWidth, dy + dHeight);
        var x4 = this.tx(dx, dy + dHeight);
        var y4 = this.ty(dx, dy + dHeight);

        // compute transformation from uv to page space:
        // straight-forward solution without y-flip should read as
        //   const uv2page = [ x2-x1, y2-y1, x4-x1, y4-y1, x1, y1 ];
        // but webgl uvs have [0, 0] at lower left corner while pdf images have [0, 0] at upper left corner
        // pdf.js calls drawImage() with image convention, so the flip needs to get accounted for here:
        // [0, 0] -> [x4, y4]; [1, 0] -> [x3, y3]; [1, 1] -> [x2, y2]; [0, 1] -> [x1, y1]
        var uv2page = [x3 - x4, y3 - y4, x1 - x4, y1 - y4, x4, y4];
        // now invert uv2page to get from page to uv space
        var page2uv = LmvCanvasContext.inverseTransform(uv2page);

        var color = {
          image: image,
          imageTransform: page2uv };


        // the clipping path might be larger than the image so we need to clip it with the image quad
        // to avoid repetition
        var imageClip = new _path2d__WEBPACK_IMPORTED_MODULE_0__.Path2D(this.precisionTolerance);
        imageClip.moveTo(x1, y1);
        imageClip.lineTo(x2, y2);
        imageClip.lineTo(x3, y3);
        imageClip.lineTo(x4, y4);
        imageClip.closePath();

        clip.fill(this, color, this.dbId, this.currentLayerId, imageClip, false, false);
      } else {
        //Get the transformed page space image center
        var cx = this.tx(dx + dWidth / 2, dy + dHeight / 2);
        var cy = this.ty(dx + dWidth / 2, dy + dHeight / 2);

        //Get scaled width/height. Note these scalings can result in negative numbers
        var w = dWidth * scale.x * this.toPageUnits;
        var h = -dHeight * scale.y * this.toPageUnits; //Image input is y-down, so we build in a y-inversion

        this.flushBuffer(0, true);
        this.currentVbb.addTexturedQuad(cx, cy, w, h, angle, 0xffff00ff, 0, this.currentLayerId, 0);
        this.currentImage = image;
        this.flushBuffer(0, true, QUAD_TEXTURE);
      }
    }

    /**
       * Mapping back the reference object to its value, and loop 1 level in
       * @param {Object} properties 
       */ }, { key: "_processProperties", value: function _processProperties(
    properties) {
      if (LmvCanvasContext.isRef(properties)) {
        properties = this.pdfRefMap[LmvCanvasContext.refKey(properties)];
      }

      for (var key in properties) {
        if (LmvCanvasContext.isRef(properties[key])) {
          properties[key] = this.pdfRefMap[LmvCanvasContext.refKey(properties[key])];
        }
      }
      return properties;
    } }, { key: "_getPrecision", value: function _getPrecision(

    propPrecision) {
      return propPrecision !== undefined ? propPrecision : 5;
    } }, { key: "beginMarkedContent", value: function beginMarkedContent(

    properties) {
      if (properties) {
        properties = this._processProperties(properties);
      }

      // Revit will provided tag as number
      var tag = properties.name || properties.DBID;
      if (!isNaN(tag)) {
        this.taggedId = parseInt(tag);
      } else {
        this.taggedId = null;
      }

      if (this.taggedId !== null && this.dbId !== this.taggedId) {
        this.updateDBId();
      }

      if (properties.VP) {
        this.currentVpId = this.viewports.length;
        var vp = this._getModelToViewportMatrix(properties.VP, !!properties.UNITS);

        var precision = this._getPrecision(properties.PRECISION);
        this.viewports.push(this.createViewPortData(vp, properties.UNITS, precision));
      }

      this.ocgStack.push({
        taggedId: this.taggedId,
        viewPortId: this.currentVpId });

    } }, { key: "beginMarkedContentProps", value: function beginMarkedContentProps(

    tag, properties) {
      if (properties) {
        properties = this._processProperties(properties);
      }

      if (tag === "OC") {
        var ocgId = properties.ocgId;
        var layerId = this.layers[ocgId];
        if (layerId === undefined) {
          layerId = this.defaultLayerId;
        }
        this.currentLayerId = layerId;

        this.ocgStack.push({
          layerId: this.currentLayerId });

      } else {
        if (!isNaN(tag)) {
          this.taggedId = parseInt(tag);
          if (this.dbId !== this.taggedId) {
            this.updateDBId();
          }
        }
        if (properties) {
          if (properties.VP) {
            this.currentVpId = this.viewports.length;
            var vp = this._getModelToViewportMatrix(properties.VP, !!properties.UNITS);
            var precision = this._getPrecision(properties.PRECISION);
            this.viewports.push(this.createViewPortData(vp, properties.UNITS, precision));
          }

          this.ocgStack.push({
            viewPortId: this.currentVpId,
            taggedId: this.taggedId });

        } else {
          this.ocgStack.push({});

        }
      }
    } }, { key: "endMarkedContent", value: function endMarkedContent()

    {
      var previousState = this.ocgStack.pop();
      var previousTagId = this.taggedId;
      if (previousState) {
        // reset the state
        if (previousState.taggedId != null) {
          this.taggedId = null;
        }
        if (previousState.layerId) {
          this.currentLayerId = this.defaultLayerId;
        }
        if (previousState.viewPortId) {
          this.currentVpId = this.defaultVPId;
        }
      }

      if (this.ocgStack.length > 0) {
        var state = this.ocgStack[this.ocgStack.length - 1];
        if (state.taggedId != null) {
          this.taggedId = state.taggedId;
        }
        if (state.currentLayerId != null) {
          this.currentLayerId = state.currentLayerId;
        }
        if (state.viewPortId != null) {
          this.currentVpId = state.viewPortId;
        }
      } else {
        this.currentLayerId = this.defaultLayerId;
        this.taggedId = null;
        this.currentVpId = this.defaultVPId;
      }

      if (previousTagId !== this.taggedId) {
        this.updateDBId();
      }
    } }, { key: "setLineStyleParam", value: function setLineStyleParam(

    param) {
      if (!this.lineStyleInitialized) {
        // Add those default definition in, to keep the app constent.
        var exH = avp.LineStyleDefs.length;
        var exW = 1;
        for (var i = 0; i < avp.LineStyleDefs.length; i++) {
          exW = Math.max(avp.LineStyleDefs[i].def.length, exW);
        }var _avp$createLinePatter =

        avp.createLinePatternTextureData(Math.max(param.width, exW), param.height + exH + 1),tex = _avp$createLinePatter.tex,pw = _avp$createLinePatter.pw,lineStyleTex = _avp$createLinePatter.lineStyleTex;
        this.lineStyleIndex = 0;
        this.lineStylePw = pw;
        this.lineStyleTexData = tex;
        this.lineStyleTexture = lineStyleTex;
        this.lineStyleIndexMap = {};

        for (var _i10 = 0; _i10 < avp.LineStyleDefs.length; _i10++) {
          this.addNewDashedLineStyle(avp.LineStyleDefs[_i10], 96);
        }

        // set the default value
        this.lineStyle = 0;
        this.lineStyleInitialized = true;
      }
    } }, { key: "addNewDashedLineStyle", value: function addNewDashedLineStyle(

    ls, dpi) {
      var key = ls.def.join("/");
      if (this.lineStyleIndexMap[key] != undefined) {
        return this.lineStyleIndexMap[key];
      } else {
        avp.createLinePatternForDef(ls, this.lineStyleTexData, this.lineStyleIndex, this.lineStylePw, dpi);
        var index = this.lineStyleIndex;
        this.lineStyleIndexMap[key] = index;
        this.lineStyleIndex++;

        return index;
      }
    } }, { key: "setLineDash", value: function setLineDash(

    def) {
      if (!this.lineStyleInitialized) {
        this.setLineStyleParam({ width: 5, height: 4 });
      }

      this.lineDashedDef = def;
    } }, { key: "createPattern", value: function createPattern(

    image, repetition) {
      var pattern = this.canvasContext._originalcreatePattern(image, repetition);
      pattern.image = image;
      pattern.repetition = repetition;
      pattern.isPattern = true;
      return pattern;
    } }, { key: "updateLineDashStyle", value: function updateLineDashStyle()

    {
      // need apply the transformation matrix to the dashed value
      var def = this.lineDashedDef;

      if (def) {
        if (def.length > 0) {
          var xform = this.getCurrentTransform();
          var def1 = [];
          for (var i = 0; i < def.length; i++) {
            var x = (def[i] * xform[0] + def[i] * xform[2]) * this.toPageUnits;
            x = parseFloat(x.toFixed(6));
            def1.push(x);
          }
          // 96 DPI was defined for lineStyleDef.js, and shader were expecting that value
          // when we parse the pdf, the effective dpi need to be ==> 96 / 72 / this.toPageUnits
          this.lineStyle = this.addNewDashedLineStyle({ def: def1 }, 96 / 72 / this.toPageUnits);
        } else {
          this.lineStyle = 0;
        }
      }
      // In case of user directly controlled the line style
      // Do not set lineStyle to 0 here.
    } }, { key: "setCircleInfo", value: function setCircleInfo(

    circleInfo) {
      this.circleInfo = circleInfo;
    } }, { key: "setCurrentOperatorIndex", value: function setCurrentOperatorIndex(

    index) {
      this.currentOpIndex = index;
      if (this.circleInfo && this.circleInfo[index]) {
        var xform = this.getCurrentTransform();
        var x = this.tx(this.circleInfo[index][0], this.circleInfo[index][1], xform);
        var y = this.ty(this.circleInfo[index][0], this.circleInfo[index][1], xform);

        // Inject the center of the circle
        var hiddenColor = 0x01ffffff; // Note that lineShader discards fully transparent fragments. Therefore, we use a white here with very small, but nonzero alpha.
        var c = this.currentVbb.addVertexLine(x, y, 0, 0.0001, 0, 0, hiddenColor, this.dbId, this.currentLayerId, this.currentVpId);
        this.currentVbb.finalizeQuad(c);
      }
    }

    /**
       * We have fuge performance issue when the PDF contains inline image group
       * And each line will call a drawImage, with the whole texture enabled
       * It causes OOM and slow down the whole rendering
       * In order to boost the performance, we need to do a preprocess to combine those scane line images
       * Once, we have that information, we ignore the draw call for those images,
       * this function is the entry point to pass those preprocessed image in to the drawing context
       * LMV-5175
       * 
       * @param {Object} imageGroups 
       */ }, { key: "setInlineImageGroups", value: function setInlineImageGroups(
    imageGroups) {
      if (imageGroups && imageGroups.groups.length > 0) {
        this.inlineImageGroups = imageGroups;
      }
    } }, { key: "needDelegateInlineImageGroup", value: function needDelegateInlineImageGroup()

    {
      var hasGroup = this.inlineImageGroups && this.inlineImageGroups.map[this.currentOpIndex] != undefined;
      return hasGroup;
    }

    // Set custom tesselation params for bezier arcs (see Bezier.h)
    // If undefined, we use the default settings.
  }, { key: "setTessParams", value: function setTessParams(tessParams) {
      this.tessParams = tessParams;
    } }, { key: "finish", value: function finish()

    {
      this.flushBuffer(0, true);
      this.fontAtlas = null;
    } }, { key: "createViewPortData", value: function createViewPortData(

    matrix, units, precision) {

      precision = precision !== undefined ? precision : 5; // LMV-5701: Default precision will be set to 5.

      return {
        "units": units || "feet and inches",
        "transform": matrix,
        "geom_metrics": this.initGeomMetrics(),
        "precision": precision };

    } }, { key: "isLMVCanvasContext", value: function isLMVCanvasContext()

    {
      return true;
    }

    //Initializes a structure of counters used for statistical purposes and sheet content hash
  }, { key: "initGeomMetrics", value: function initGeomMetrics() {
      return {
        "arcs": 0,
        "circles": 0,
        "circ_arcs": 0,
        "viewports": 0,
        "clips": 0,
        "colors": 0,
        "db_ids": 0,
        "dots": 0,
        "fills": 0,
        "layers": 0,
        "line_caps": 0,
        "line_joins": 0,
        "line_patterns": 0,
        "line_pat_refs": 0,
        "plines": 0,
        "pline_points": 0,
        "line_weights": 0,
        "links": 0,
        "miters": 0,
        "ptris": 0,
        "ptri_indices": 0,
        "ptri_points": 0,
        "rasters": 0,
        "texts": 0,
        "strings": [] };

    }

    // Needs to be called when using 
    //Copied from pdf.js, because our 2D renderer relies on mozCurrentTransform being available
  }, { key: "addContextCurrentTransform", value: function addContextCurrentTransform() {

      var ctx = this.canvasContext;

      if (!ctx.mozCurrentTransform) {
        ctx._originalSave = ctx.save;
        ctx._originalRestore = ctx.restore;
        ctx._originalRotate = ctx.rotate;
        ctx._originalScale = ctx.scale;
        ctx._originalTranslate = ctx.translate;
        ctx._originalTransform = ctx.transform;
        ctx._originalSetTransform = ctx.setTransform;
        ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
        ctx._transformStack = [];
        Object.defineProperty(ctx, 'mozCurrentTransform', {
          get: function getCurrentTransform() {
            return this._transformMatrix;
          } });

        Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
          get: function getCurrentTransformInverse() {
            var m = this._transformMatrix;
            var a = m[0],
            b = m[1],
            c = m[2],
            d = m[3],
            e = m[4],
            f = m[5];
            var ad_bc = a * d - b * c;
            var bc_ad = b * c - a * d;
            return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
          } });

        ctx.save = function ctxSave() {
          var old = this._transformMatrix;
          this._transformStack.push(old);
          this._transformMatrix = old.slice(0, 6);
          this._originalSave();
        };
        ctx.restore = function ctxRestore() {
          var prev = this._transformStack.pop();
          if (prev) {
            this._transformMatrix = prev;
            this._originalRestore();
          }
        };
        ctx.translate = function ctxTranslate(x, y) {
          var m = this._transformMatrix;
          m[4] = m[0] * x + m[2] * y + m[4];
          m[5] = m[1] * x + m[3] * y + m[5];
          this._originalTranslate(x, y);
        };
        ctx.scale = function ctxScale(x, y) {
          var m = this._transformMatrix;
          m[0] = m[0] * x;
          m[1] = m[1] * x;
          m[2] = m[2] * y;
          m[3] = m[3] * y;
          this._originalScale(x, y);
        };
        ctx.transform = function ctxTransform(a, b, c, d, e, f) {
          var m = this._transformMatrix;
          this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];
          ctx._originalTransform(a, b, c, d, e, f);
        };
        ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
          this._transformMatrix = [a, b, c, d, e, f];
          ctx._originalSetTransform(a, b, c, d, e, f);
        };
        ctx.rotate = function ctxRotate(angle) {
          var cosValue = Math.cos(angle);
          var sinValue = Math.sin(angle);
          var m = this._transformMatrix;
          this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];
          this._originalRotate(angle);
        };
      }
    } }, { key: "createChildGroupContext", value: function createChildGroupContext()

    {var _this$canvasContext;
      this.flushBuffer(0, true);
      var self;

      var alpha = (_this$canvasContext = this.canvasContext) === null || _this$canvasContext === void 0 ? void 0 : _this$canvasContext.globalAlpha;
      function meshCallback(mesh) {
        // LMV-5840: Apply the global alpha to the meshes in the group.
        if (typeof alpha === 'number' && mesh.material.opacity !== alpha) {
          mesh.material.hasOpacity = !!alpha;
          mesh.material.opacity = alpha;
        }
        self.groupChildMeshes.push(mesh);
      }

      var ctx = new LmvCanvasContext(this.viewport, this.toPageUnits, meshCallback, this.fontEngine, this.usingTextLayer, this.fontAtlas, this.pdfRefMap);
      // Assign different dbids to geometry in the child group context. LMV-5515
      ctx.consecutiveIds = true;

      ctx.groupChildMeshes = [];

      ctx.sequencedDbId = this.sequencedDbId;
      ctx.dbId = this.dbId;
      ctx.imageNumber = this.imageNumber;
      self = ctx;

      ctx.addContextCurrentTransform();
      ctx.parent = this;
      ctx.canvasContext.isLMVGroupContext = true;
      return ctx.canvasContext;
    } }, { key: "endChildGroupContext", value: function endChildGroupContext()

    {var _this2 = this;
      this.flushBuffer(0, true);

      if (this.groupChildMeshes && this.groupChildMeshes.length > 0) {
        var self = this;
        // mesh's matrix has already been converted to pageUnit, for this group matrix
        // we need to conver the translation matrix back to pageUnit
        var groupMatrix = self.parent.getCurrentTransform();
        var translateX = groupMatrix[4] * self.toPageUnits;
        var translateY = groupMatrix[5] * self.toPageUnits;

        var matrix = new THREE.Matrix4();
        matrix.makeTranslation(translateX, translateY, 0);

        var meshIndex = 0;
        this.groupChildMeshes.map(function (mesh) {
          switch (self.parent.canvasContext.globalCompositeOperation) {
            case 'darken':
              mesh.material.compositeOperation = 'min';
              break;
            case 'lighten':
              mesh.material.compositeOperation = 'max';
              break;
            case 'multiply':
              mesh.material.compositeOperation = 'multiply';
              break;}

          // If we have nested stack of group
          // we need multiply the matrix, Kevin: I do not have any test pdf for this assumption
          // in future if we see something wrong, we need try to revisit this part
          if (mesh.groupMatrix) {
            mesh.groupMatrix.multiply(matrix);
          } else {
            // make a clone to avoid the matrix was modified multiple times when it was nested
            mesh.groupMatrix = matrix.clone();
          }

          self.parent.meshCallback(mesh, meshIndex + _this2.parent.currentMeshIndex);
          meshIndex++;
        });

        this.parent.sequencedDbId = this.sequencedDbId;
        this.parent.currentMeshIndex += meshIndex;
        this.parent.dbId = this.dbId;
        this.parent.imageNumber = this.imageNumber;
        this.groupChildMeshes.length = 0;
      }
    } }, { key: "_getModelToViewportMatrix", value: function _getModelToViewportMatrix(

    vpData, isUnitsDefined) {
      // This is the model to vp matrix without 300 / 72 viewport scaling
      var vp = typeof vpData === 'string' ? JSON.parse(vpData) : vpData;
      // Apply the viewport scale
      if (isUnitsDefined) {
        vp[0] *= this.viewport.scale;
        vp[5] *= this.viewport.scale;
      }
      return vp;
    } }]);return LmvCanvasContext;}();



/**
                                        * Class used to normalize gradient data.
                                        */var
GradientData = /*#__PURE__*/function () {
  function GradientData(color) {_classCallCheck(this, GradientData);
    // RawData comes from PDFjs.
    if (Object.prototype.hasOwnProperty.call(color, 'rawData')) {
      var data = color.rawData;
      this.type = data[1];
      this.colorStops = data[3];
      this.startPoint = data[4];
      this.endPoint = data[5];
      this.startRadius = data[6];
      this.endRadius = data[7];
    } else {
      Object.assign(this, color);
    }
  }

  /**
     * Check if the GradientData is valid.
     * @return {boolean} - true if valid.
     */_createClass(GradientData, [{ key: "isValid", value: function isValid()
    {
      if (!this.type || !this.startPoint || !this.endPoint || !this.colorStops) {
        return false;
      }

      if (this.type === 'radial' && (this.startRadius === undefined || this.endRadius === undefined)) {
        return false;
      }

      return true;
    }

    /**
       * Creates a temporary canvasGradient with all of the GradientData properties assigned to it.
       * This is required when assigning a context's fillstyle.
       * @param {CanvasRenderingContext2D} ctx - 2d render context.
       * @returns {CanvasGradient} - containing the GradientData's properties
       */ }, { key: "getFillStyle", value: function getFillStyle(
    ctx) {
      if (!this.isValid()) {
        return;
      }
      // This is a temporary gradient. It is only used to pass the gradient data's properties to the fillStyle.
      var tempGradient = ctx.createLinearGradient(0, 0, 1, 1);
      Object.assign(tempGradient, this);
      return tempGradient;
    }

    /**
       * Generate a CanvasGradient.
       * @param {CanvasRenderingContext2D} ctx - 2d render context.
       * @param {number[]} [startPoint] - modified start position
       * @param {number[]} [endPoint] - modified end position
       * @returns {CanvasGradient} - Canvas Gradient
       */ }, { key: "generateCanvasGradient", value: function generateCanvasGradient(
    ctx, startPoint, endPoint) {
      if (!this.isValid()) {
        return;
      }
      var type = this.type;
      var colorStops = this.colorStops;
      var p0 = startPoint || this.startPoint;
      var p1 = endPoint || this.endPoint;
      var r0 = this.startRadius;
      var r1 = this.endRadius;
      var grad = null;

      if (type === 'axial' || type === 'linear') {
        grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
      } else if (type === 'radial') {
        grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
      }
      for (var i = 0, ii = colorStops.length; i < ii; ++i) {
        var c = colorStops[i];
        grad.addColorStop(c[0], c[1]);
      }

      return grad;
    } }]);return GradientData;}();

/***/ }),

/***/ "./extensions/CompGeom/ThirdParty/lmv_poly2tri.js":
/*!********************************************************!*\
  !*** ./extensions/CompGeom/ThirdParty/lmv_poly2tri.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var lmv_poly2tri = __webpack_require__(/*! poly2tri */ "./extensions/CompGeom/node_modules/poly2tri/src/poly2tri.js");

// -------------------------------------------------------------------------Edge
/**
 * Represents a simple polygon's edge
 * @constructor
 * @struct
 * @private
 * @param {Point} p1
 * @param {Point} p2
 * @throw {PointError} if p1 is same as p2
 */
var Edge = function Edge(p1, p2) {
  this.p = p1;
  this.q = p2;

  if (p1.y > p2.y) {
    this.q = p1;
    this.p = p2;
  } else if (p1.y === p2.y) {
    if (p1.x > p2.x) {
      this.q = p1;
      this.p = p2;
    } else if (p1.x === p2.x) {
      throw new Error('poly2tri Invalid Edge constructor: repeated points!', [p1]);
    }
  }

  if (!this.q._p2t_edge_list) {
    this.q._p2t_edge_list = [];
  }
  this.q._p2t_edge_list.push(this);
};

lmv_poly2tri.SweepContext.prototype.initEdges = function (polyline, isOpen) {
  var i,len = polyline.length,iEnd = isOpen ? polyline.length - 1 : polyline.length;
  for (i = 0; i < iEnd; ++i) {
    this.edge_list.push(new Edge(polyline[i], polyline[(i + 1) % len]));
  }
};

module.exports = lmv_poly2tri;

/***/ }),

/***/ "./extensions/CompGeom/bezier.js":
/*!***************************************!*\
  !*** ./extensions/CompGeom/bezier.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTessParams": () => (/* binding */ DefaultTessParams),
/* harmony export */   "SetTesselationParams": () => (/* binding */ SetTesselationParams),
/* harmony export */   "TesselateCubic": () => (/* binding */ TesselateCubic),
/* harmony export */   "TesselateQuad": () => (/* binding */ TesselateQuad),
/* harmony export */   "getCubeBezierPoint": () => (/* binding */ getCubeBezierPoint)
/* harmony export */ });


var DefaultTessParams = {
  //How many forward iterations to use when approximating Bezier curves
  //More iterations are needed in case the min_seg_len setting below is smaller
  //relative to mesh size. However, the two numbers need to be tuned together
  //so that NUM_ITERATIONS is enough to result in segment lengths desired.

  //Note that those values are tuned for PDF rendering, where text characters
  //are drawn one by one. If a long piece of text is drawn all at once, then
  //its bounding box will be quite large, so the relative min_seg_len will also
  //be too large and the characters will look coarse. In such cases, we will need
  //to better estimate this by using e.g. the font height only.
  numIterations: 100,

  //What fraction of the bounding sbox should be the minimum length of
  //a segment
  minSegLenFraction: 0.05 };


function SetTesselationParams(num_iterations, min_seg_len_fraction) {
  if (num_iterations)
  DefaultTessParams.numIterations = num_iterations;

  if (min_seg_len_fraction)
  DefaultTessParams.minSegLenFraction = min_seg_len_fraction;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function adjustMaxdim(maxdim, segLength) {
  if (maxdim > 4 * segLength && segLength > 0) {
    var time = Math.sqrt(maxdim / segLength);
    time = Math.min(4, time);
    maxdim = segLength * time;
  }
  return maxdim;
}

function TesselateCubic(ctx, px1, py1, px2, py2, px3, py3, px4, py4, maxdim, tessParams, isFont)
{
  tessParams = tessParams || DefaultTessParams;

  var aproximateLength = distance(px1, py1, px2, py2) + distance(px2, py2, px3, py3) + distance(px3, py3, px4, py4);

  // maxdim is the size of the bounds of the path
  // but for individual path, we need to use aproximateLength
  // we need to balance both performance and visual effect
  // so we leverage both value and try to balance it.
  if (!isFont) {
    maxdim = adjustMaxdim(maxdim, aproximateLength);
  }

  //we will base the max number of segments to use for approximation
  //on the bounds of the full line buffer contents
  //TODO: as an improvement we could take the bounds of this particular curve
  //with respect to the full bounds of the line buffer data.
  maxdim = maxdim || 1 / tessParams.minSegLenFraction;

  //minimum length of tesselation segment
  //set to 1/100 of the bounds
  var minSegLen = maxdim * tessParams.minSegLenFraction;

  //but for now we will iterate 100 times
  var dt = 1.0 / tessParams.numIterations;

  //double dt2 = dt*dt;
  var dt3 = dt * dt * dt;

  var pre1 = 3.0 * dt;
  var pre2 = pre1 * dt;
  var pre3 = pre2 + pre2;
  var pre4 = 6.0 * dt3;

  var temp1x = px1 - 2.0 * px2 + px3;
  var temp1y = py1 - 2.0 * py2 + py3;
  var temp2x = 3.0 * (px2 - px3) - px1 + px4;
  var temp2y = 3.0 * (py2 - py3) - py1 + py4;

  var fx = px1;
  var fy = py1;
  var dfx = (px2 - px1) * pre1 + temp1x * pre2 + temp2x * dt3;
  var dfy = (py2 - py1) * pre1 + temp1y * pre2 + temp2y * dt3;
  var ddfx = temp1x * pre3 + temp2x * pre4;
  var ddfy = temp1y * pre3 + temp2y * pre4;
  var dddfx = temp2x * pre4;
  var dddfy = temp2y * pre4;

  var error = 0.0;

  // forward differencing loop
  var tMax = 0 | 1.0 / dt - 0.5;
  for (var t = 0; t < tMax; t++)
  {
    fx += dfx;
    fy += dfy;
    dfx += ddfx;
    dfy += ddfy;
    ddfy += dddfy;
    ddfx += dddfx;

    error += Math.sqrt(dfx * dfx + dfy * dfy);

    if (error >= minSegLen) //add segment only if we have reached treshold length
      {
        // line to current
        ctx.lineTo(fx, fy);
        error = 0.0;
      }
  }

  ctx.lineTo(px4, py4);
}

function TesselateQuad(ctx, px1, py1, px2, py2, px3, py3, maxdim, tessParams, isFont)
{
  tessParams = tessParams || DefaultTessParams;

  var aproximateLength = distance(px1, py1, px2, py2) + distance(px2, py2, px3, py3);

  // maxdim is the size of the bounds of the path
  // but for individual path, we need to use aproximateLength
  // we need to balance both performance and visual effect
  // so we leverage both value and try to balance it.
  if (!isFont) {
    maxdim = adjustMaxdim(maxdim, aproximateLength);
  }

  //we will base the max number of segments to use for approximation
  //on the bounds of the full line buffer contents
  //TODO: as an improvement we could take the bounds of this particular curve
  //with respect to the full bounds of the line buffer data.
  maxdim = maxdim || 1 / tessParams.minSegLenFraction;

  //minimum length of tesselation segment
  //set to a fraction of the bbox of the entire path (value chosen to work well for text at reasonable font size)
  var minSegLen = maxdim * tessParams.minSegLenFraction;

  //but for now we will iterate 100 times
  var dt = 1.0 / tessParams.numIterations;

  var dt2 = dt * dt;

  var ax = px1 - 2.0 * px2 + px3; //replace 2* by addition?
  var ay = py1 - 2.0 * py2 + py3; //replace 2* by addition?

  var bx = 2.0 * (px2 - px1);
  var by = 2.0 * (py2 - py1);

  var fx = px1;
  var fy = py1;
  var dfx = bx * dt + ax * dt2;
  var dfy = by * dt + ay * dt2;
  var ddfx = 2.0 * ax * dt2;
  var ddfy = 2.0 * ay * dt2;

  var error = 0.0;

  //forward differencing loop
  var tMax = 0 | 1.0 / dt - 0.5;
  for (var t = 0; t < tMax; t++)
  {
    fx += dfx;
    fy += dfy;
    dfx += ddfx;
    dfy += ddfy;

    error += Math.sqrt(dfx * dfx + dfy * dfy);

    if (error >= minSegLen) // how many pixels should each line be?)
      {
        ctx.lineTo(fx, fy);
        error = 0.0;
      }
  }

  ctx.lineTo(px3, py3);
}

// Cubic Bezier for single points. Note that TesselateCubic is faster by using deltas.
// Result is returned as a new {x,y} or written to optionalTarget.
function getCubeBezierPoint(t, px1, py1, px2, py2, px3, py3, px4, py4, optionalTarget) {

  var result = optionalTarget || { x: undefined, y: undefined };

  var k = 1 - t;

  // Bernstein coefficients
  var bp1 = k * k * k;
  var bp2 = 3 * k * k * t;
  var bp3 = 3 * k * t * t;
  var bp4 = t * t * t;

  result.x = bp1 * px1 + bp2 * px2 + bp3 * px3 + bp4 * px4;
  result.y = bp1 * py1 + bp2 * py2 + bp3 * py3 + bp4 * py4;

  return result;
}

/***/ }),

/***/ "./extensions/CompGeom/complex-polygon.js":
/*!************************************************!*\
  !*** ./extensions/CompGeom/complex-polygon.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPolygon": () => (/* binding */ ComplexPolygon)
/* harmony export */ });
/* harmony import */ var _ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThirdParty/lmv_poly2tri */ "./extensions/CompGeom/ThirdParty/lmv_poly2tri.js");
/* harmony import */ var _ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interval_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval-tree */ "./extensions/CompGeom/interval-tree.js");
/* harmony import */ var _x_line_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x-line-line */ "./extensions/CompGeom/x-line-line.js");
/* harmony import */ var _point_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-list */ "./extensions/CompGeom/point-list.js");
function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}





function jitterPoints(pts) {

  for (var i = 0, iEnd = pts.length; i < iEnd; i++) {
    pts[i].x += (Math.random() - 0.5) * 1e-9;
    pts[i].y += (Math.random() - 0.5) * 1e-9;
  }

}

function copyPoints(pts, bbox) {

  //Moving poiints to be centered on the origin
  //seems to improve triangulation success rate, or
  //at least avoids some bugs in poly2yti

  var sz = bbox.getSize(bbox instanceof THREE.Box3 ? new THREE.Vector3() : new THREE.Vector2());
  var offsetx = bbox.min.x + sz.x * 0.5;
  var offsety = bbox.min.y + sz.y * 0.5;
  var scale = 2.0 / sz.length();

  var pts2 = [];

  for (var i = 0, iEnd = pts.length; i < iEnd; i++) {
    pts2.push({
      x: (pts[i].x - offsetx) * scale, // + (Math.random()-0.5) * 1e-9,
      y: (pts[i].y - offsety) * scale, // + (Math.random()-0.5) * 1e-9,
      _triidx: i + 1 });

  }

  return pts2;

}


//Represents a polygon with holes, and provides triangulation and mesh conversion utilities
var ComplexPolygon = /*#__PURE__*/function () {

  function ComplexPolygon(uniquePoints, customInsidechecker, bbox) {_classCallCheck(this, ComplexPolygon);
    this.pts = uniquePoints;
    this.contours = [];
    this.customInsideChecker = customInsidechecker;
    this.bbox = bbox;
    this._tmpVec = bbox instanceof THREE.Box3 ? new THREE.Vector3() : new THREE.Vector2();
  }_createClass(ComplexPolygon, [{ key: "addContour", value: function addContour(

    indices) {
      this.contours.push(indices);
    } }, { key: "pointInContour", value: function pointInContour(

    x, y, cntr) {
      var yflag0, yflag1;
      var vtx0X, vtx0Y, vtx1X, vtx1Y;

      var inside_flag = false;

      var pts = this.pts;

      // get the last point in the polygon
      vtx0X = pts[cntr[cntr.length - 1]].x;
      vtx0Y = pts[cntr[cntr.length - 1]].y;

      // get test bit for above/below X axis
      yflag0 = vtx0Y >= y;

      for (var j = 0, jEnd = cntr.length; j < jEnd; ++j)
      {
        vtx1X = pts[cntr[j]].x;
        vtx1Y = pts[cntr[j]].y;

        yflag1 = vtx1Y >= y;

        // Check if endpoints straddle (are on opposite sides) of X axis
        // (i.e. the Y's differ); if so, +X ray could intersect this edge.
        // The old test also checked whether the endpoints are both to the
        // right or to the left of the test point.  However, given the faster
        // intersection point computation used below, this test was found to
        // be a break-even proposition for most polygons and a loser for
        // triangles (where 50% or more of the edges which survive this test
        // will cross quadrants and so have to have the X intersection computed
        // anyway).  I credit Joseph Samosky with inspiring me to try dropping
        // the "both left or both right" part of my code.
        if (yflag0 != yflag1)
        {
          // Check intersection of pgon segment with +X ray.
          // Note if >= point's X; if so, the ray hits it.
          // The division operation is avoided for the ">=" test by checking
          // the sign of the first vertex wrto the test point; idea inspired
          // by Joseph Samosky's and Mark Haigh-Hutchinson's different
          // polygon inclusion tests.
          if ((vtx1Y - y) * (vtx0X - vtx1X) >=
          (vtx1X - x) * (vtx0Y - vtx1Y) == yflag1)
          {
            inside_flag = !inside_flag;
          }
        }

        // move to the next pair of vertices, retaining info as possible
        yflag0 = yflag1;
        vtx0X = vtx1X;
        vtx0Y = vtx1Y;
      }

      return inside_flag;
    } }, { key: "pointInPolygon", value: function pointInPolygon(


    x, y) {
      var inside = false;

      for (var i = 0; i < this.contours.length; i++) {

        if (this.pointInContour(x, y, this.contours[i]))
        inside = !inside;
      }

      return inside;
    } }, { key: "triangulate", value: function triangulate()

    {
      try {
        this.triangulateInternal(false);
      } catch (e) {

        if (e.message.indexOf("Collinear not supported!") !== -1) {
          try {
            this.triangulateInternal(true);
            //logger.log("Triangulation retry success.");
          } catch (e) {
            //logger.warn("Triangulation retry failed", e);
            this.triangulationFailed = true;
          }
        } else {
          //logger.warn("Triangulation failed", e);
          this.triangulationFailed = true;
        }
      }
    } }, { key: "createPointInPolygonChecker", value: function createPointInPolygonChecker()

    {

      var edges = [];

      for (var i = 0; i < this.contours.length; i++) {
        var cntr = this.contours[i];

        var len = cntr.length;
        for (var k = 0; k < len - 1; k++) {
          var e = {
            p1: cntr[k],
            p2: cntr[k + 1] };

          edges.push(e);
        }
      }

      var it = new _interval_tree__WEBPACK_IMPORTED_MODULE_1__.IntervalTree(this.pts, edges, this.bbox);
      it.build();
      this.customInsideChecker = it;
    } }, { key: "triangulateInternal", value: function triangulateInternal(

    wantJitter) {

      if (!this.contours.length) {
        this.triangulationFailed = true;
        this.indices = null;
        return;
      }

      this.indices = [];

      var _pts = copyPoints(this.pts, this.bbox);

      if (wantJitter) {
        jitterPoints(_pts);
      }

      var sweepCtx = new (_ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_0___default().SweepContext)([]);

      sweepCtx.points_ = _pts;

      for (var i = 0; i < this.contours.length; i++) {
        var cntr = this.contours[i];

        //Contour is not closed
        var isOpen = cntr[0] !== cntr[cntr.length - 1];

        //if (isOpen)
        //    continue;

        var len = isOpen ? cntr.length : cntr.length - 1;
        var edge = new Array(len);
        for (var k = 0; k < len; k++) {
          edge[k] = _pts[cntr[k]];
        }

        sweepCtx.initEdges(edge, isOpen);
      }

      sweepCtx.triangulate();

      this.processResult(sweepCtx);

      this.triangulationFailed = !this.indices || !this.indices.length;

    } }, { key: "processResult", value: function processResult(

    sweepCtx) {

      //If the polygon has a lot of vertices, create
      //an acceleration structure for point-in-polygon checks
      //so we can filter the triangles faster.
      if (this.pts.length > 10 && !this.customInsideChecker)
      this.createPointInPolygonChecker();

      var tris = sweepCtx.map_;
      for (var i = 0; i < tris.length; i++) {
        var tpts = tris[i].points_;
        var p0 = tpts[0];
        var p1 = tpts[1];
        var p2 = tpts[2];

        var i0 = p0._triidx;
        var i1 = p1._triidx;
        var i2 = p2._triidx;

        if (i0 && i1 && i2)
        this.filterFace(i0 - 1, i1 - 1, i2 - 1);

      }
    } }, { key: "filterFace", value: function filterFace(


    i0, i1, i2) {

      var p0 = this.pts[i0];
      var p1 = this.pts[i1];
      var p2 = this.pts[i2];

      var cx = (p0.x + p1.x + p2.x) / 3;
      var cy = (p0.y + p1.y + p2.y) / 3;

      var inside = this.customInsideChecker ? this.customInsideChecker.pointInPolygon(cx, cy) : this.pointInPolygon(cx, cy);

      if (inside) {

        var e1x = p1.x - p0.x;
        var e1y = p1.y - p0.y;
        var e2x = p2.x - p0.x;
        var e2y = p2.y - p0.y;

        var cross = e1x * e2y - e2x * e1y;

        if (cross > 0) {
          this.indices.push(i0, i1, i2);
        } else {
          this.indices.push(i0, i2, i1);
        }

      }
    }

    //Returns intersection points between the given line
    //segment and the polygon's contours
  }, { key: "findSegmentIntersections", value: function findSegmentIntersections(ex1, ey1, ex2, ey2) {

      if (!this.cachedEdges) {

        this.cachedEdges = [];

        for (var j = 0; j < this.contours.length; j++) {
          var cntr = this.contours[j];

          for (var i = 0; i < cntr.length - 1; i++) {

            //Add quad for each face formed by the extruded contour
            var x1 = this.pts[cntr[i]].x;
            var y1 = this.pts[cntr[i]].y;
            var x2 = this.pts[cntr[i + 1]].x;
            var y2 = this.pts[cntr[i + 1]].y;

            var etmp = {
              v1: { x: x1, y: y1 },
              v2: { x: x2, y: y2 },
              dx: x2 - x1,
              dy: y2 - y1,
              length: Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) };


            this.cachedEdges.push(etmp);
          }
        }
      }

      var e = {
        v1: { x: ex1, y: ey1 },
        v2: { x: ex2, y: ey2 },
        dx: ex2 - ex1,
        dy: ey2 - ey1,
        length: Math.sqrt(Math.pow(ex1 - ex2, 2) + Math.pow(ey1 - ey2, 2)) };


      var precision = this.bbox.getSize(this._tmpVec).length() * 1e-4;

      var res = [];

      for (var _i = 0; _i < this.cachedEdges.length; _i++) {
        var _etmp = this.cachedEdges[_i];
        var xsect = (0,_x_line_line__WEBPACK_IMPORTED_MODULE_2__.segmentsIntersect)(e, _etmp, precision);

        if (xsect && xsect.status === _x_line_line__WEBPACK_IMPORTED_MODULE_2__.ONE_INTERSECTION) {
          var pt = { x: xsect.e1[0], y: xsect.e1[1] };
          pt.d = Math.sqrt(Math.pow(pt.x - ex1, 2) + Math.pow(pt.y - ey1, 2));
          res.push(pt);
        }
      }

      if (res.length) {
        //Sort in order along the input segment
        res.sort(function (a, b) {return a.d - b.d;});

        //Drop start and/or end points if they coincide with the segment start/end
        if (res[0].d < precision) {
          res.shift();
        }

        if (res.length && Math.abs(res[res.length - 1].d - e.length) < precision) {
          res.pop();
        }
      }

      return res.length ? res : null;
    }

    //creates a vertex buffer containing a filled 2D polygon for visualization on the cut plane
    //as 2D polygon mesh in the 3D model space
  }, { key: "toPolygonMesh", value: function toPolygonMesh(packNormals) {

      if (this.polygonMesh)
      return this.polygonMesh;

      var pts = this.pts;

      var bg = new THREE.BufferGeometry();

      var pos = new Float32Array(3 * pts.length);
      for (var j = 0; j < pts.length; j++) {
        pos[3 * j] = pts[j].x;
        pos[3 * j + 1] = pts[j].y;
        pos[3 * j + 2] = 0;
      }
      bg.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      var normal = packNormals ? new Uint16Array(2 * pts.length) : new Float32Array(3 * pts.length);

      for (var _j = 0; _j < pts.length; _j++) {

        if (packNormals) {
          var pnx = (0 /*Math.atan2(0, 0)*/ / Math.PI + 1.0) * 0.5;
          var pny = (1.0 + 1.0) * 0.5;

          normal[_j * 2] = pnx * 65535 | 0;
          normal[_j * 2 + 1] = pny * 65535 | 0;
        } else {
          normal[3 * _j] = 0;
          normal[3 * _j + 1] = 0;
          normal[3 * _j + 2] = 1;
        }
      }

      bg.setAttribute("normal", new THREE.BufferAttribute(normal, packNormals ? 2 : 3));
      if (packNormals) {
        bg.attributes.normal.bytesPerItem = 2;
        bg.attributes.normal.normalized = true;
      }

      var index = new Uint16Array(this.indices.length);
      index.set(this.indices);

      bg.setIndex(new THREE.BufferAttribute(index, 1));

      bg.streamingDraw = true;
      bg.streamingIndex = true;

      this.polygonMesh = bg;

      return bg;
    }


    //creates an extruded polygon 3d mesh
    //with the given thickness (maxZ=0, minZ=-thickness)
  }, { key: "toExtrudedMesh", value: function toExtrudedMesh(thickness) {

      if (this.extrudedMesh)
      return this.extrudedMesh;

      if (thickness === undefined)
      thickness = 1;

      //TODO: in case of failed triangulation
      //we can still generate a tube mesh with just the sides, without top and bottom caps
      if (!this.indices)
      return null;

      var vb = [];
      var indices = [];
      var iblines = [];
      var vbase = 0;

      //TODO: for better performance we can allocate ArrayBuffers up front with known
      //sizes... once the logic works.

      //Add the top and bottom polygons

      //The top is just the already triangulated 2D polygon
      //same as toPolygonMesh

      var pts = this.pts;
      for (var i = 0; i < pts.length; i++) {
        vb.push(pts[i].x, pts[i].y, 0);
        vb.push(0, 0, 1);
      }

      var inds = this.indices;

      for (var _i2 = 0; _i2 < inds.length; _i2 += 3) {
        indices.push(inds[_i2], inds[_i2 + 1], inds[_i2 + 2]);
      }

      vbase += pts.length;

      //The bottom is like the top, but mirrored.

      for (var _i3 = 0; _i3 < pts.length; _i3++) {
        vb.push(pts[_i3].x, pts[_i3].y, -thickness);
        vb.push(0, 0, -1);
      }

      for (var _i4 = 0; _i4 < inds.length; _i4 += 3) {
        indices.push(vbase + inds[_i4], vbase + inds[_i4 + 2], vbase + inds[_i4 + 1]);
      }

      vbase += pts.length;

      //The sides -- each segment of the contours becomes a quad

      var tmp = new THREE.Vector3();
      var bbox = new THREE.Box3();

      for (var j = 0; j < this.contours.length; j++) {
        var cntr = this.contours[j];

        for (var _i5 = 0; _i5 < cntr.length - 1; _i5++) {

          //Add quad for each face formed by the extruded contour
          var x1 = this.pts[cntr[_i5]].x;
          var y1 = this.pts[cntr[_i5]].y;
          var z1 = 0;

          tmp.set(x1, y1, z1);
          bbox.expandByPoint(tmp);

          var x2 = this.pts[cntr[_i5 + 1]].x;
          var y2 = this.pts[cntr[_i5 + 1]].y;
          var z2 = 0;

          tmp.set(x2, y2, z2);
          bbox.expandByPoint(tmp);

          tmp.set(x1, y1, z1 - thickness);
          bbox.expandByPoint(tmp);

          //orthogonal to the face, will use for the normals
          tmp.set(y2 - y1, x1 - x2, 0).normalize();

          vb.push(x1, y1, z1, tmp.x, tmp.y, tmp.z,
          x2, y2, z2, tmp.x, tmp.y, tmp.z,
          x1, y1, z1 - thickness, tmp.x, tmp.y, tmp.z,
          x2, y2, z2 - thickness, tmp.x, tmp.y, tmp.z);

          iblines.push(vbase, vbase + 1, vbase, vbase + 2, vbase + 1, vbase + 3, vbase + 2, vbase + 3);

          indices.push(vbase, vbase + 2, vbase + 3, vbase, vbase + 3, vbase + 1);

          vbase += 4;
        }
      }

      //Convert to mesh suitable for rendering
      //TODO: As mentioned above, we can do this directly in the loop above
      //for better performance.

      var vbp = new Float32Array(vb.length);
      vbp.set(vb);

      var vbi = new Uint16Array(indices.length);
      vbi.set(indices);

      var vbili = new Uint16Array(iblines.length);
      vbili.set(iblines);

      var mdata = {
        mesh: {
          vb: vbp,
          indices: vbi,
          iblines: vbili,

          vbstride: 6,
          vblayout: {
            position: { offset: 0, itemSize: 3, bytesPerItem: 4 },
            normal: { offset: 3, itemSize: 3, bytesPerItem: 4 } },

          boundingBox: bbox,
          boundingSphere: { center: bbox.getCenter(new THREE.Vector3()),
            radius: bbox.getSize(new THREE.Vector3()).length * 0.5 } } };



      Autodesk.Viewing.Private.BufferGeometryUtils.meshToGeometry(mdata);

      mdata.geometry.streamingDraw = true;
      mdata.geometry.streamingIndex = true;

      this.extrudedMesh = mdata.geometry;

      return this.extrudedMesh;
    } }], [{ key: "FromClipperPaths", value: function FromClipperPaths(

    paths, bbox, scale) {

      var ptList = new _point_list__WEBPACK_IMPORTED_MODULE_3__.UniquePointList(bbox);
      var complexPolygon = new ComplexPolygon(ptList.pts, null, bbox);var _iterator = _createForOfIteratorHelper(
      paths),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var path = _step.value;
          var cntr = [];
          for (var i = 0; i < path.length; i++) {
            var pt = ptList.findOrAddPoint(path[i].X * scale, path[i].Y * scale);
            cntr.push(pt.id);
          }

          //Clipper doesn't explicitly close its paths, so we do
          cntr.push(cntr[0]);

          complexPolygon.addContour(cntr);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return complexPolygon;
    } }]);return ComplexPolygon;}();

/***/ }),

/***/ "./extensions/CompGeom/contour-set.js":
/*!********************************************!*\
  !*** ./extensions/CompGeom/contour-set.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonArea": () => (/* binding */ polygonArea),
/* harmony export */   "ContourSet": () => (/* binding */ ContourSet)
/* harmony export */ });
/* harmony import */ var _complex_polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-polygon */ "./extensions/CompGeom/complex-polygon.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}


function polygonArea(pts) {

  if (pts.length < 3)
  return 0;

  var needsClose = false;
  if (pts[0] !== pts[pts.length - 1])
  needsClose = true;

  var total = 0;
  for (var i = 0, len = pts.length - 1; i < len; i++) {
    var v1 = pts[i];
    var _v = pts[i + 1];
    total += v1.x * _v.y - _v.x * v1.y;
  }

  if (needsClose) {
    var _v2 = pts[pts.length - 1];
    var _v3 = pts[0];
    total += _v2.x * _v3.y - _v3.x * _v2.y;
  }

  return total * 0.5;
}


var v2 = new THREE.Vector2();


//An intermediate complex polygon representation, used by the DCEL structure to compose and triangulate
//complex polygons, and also to convert the polygon data to various visualization representations
var ContourSet = /*#__PURE__*/function () {

  function ContourSet() {_classCallCheck(this, ContourSet);
    this.contours = [];
    this.areas = [];
    this.bbox = new THREE.Box2();

    this.allPoints = this.pts = [];
    this.allPointsMap = {};
  }_createClass(ContourSet, [{ key: "addContour", value: function addContour(

    verts, skipZeroAreas) {var _this = this;

      this.polygon = null;
      this.perimeterMem = undefined;

      var area = polygonArea(verts);

      if (area < 0) {
        verts.reverse();
        area = Math.abs(area);
      }

      var cntr = [];

      verts.forEach(function (v, i) {

        var id = v.id;

        if (typeof id === "undefined") {
          //Auto-assign unique vertex ID if not given -- this assumes the caller
          //has cleaned up the vertex data, or the polygon is simple enough not to
          //suffer from numeric issues.
          id = _this.contours.length + ":" + i;
        }

        var idx = _this.allPointsMap[id];
        if (idx === undefined) {
          idx = _this.allPoints.length;
          _this.allPoints.push(v);
          _this.allPointsMap[id] = idx;

          v2.set(v.x, v.y);
          _this.bbox.expandByPoint(v2);
        }
        cntr.push(idx);
      });

      if (area === 0 && skipZeroAreas)
      return;

      this.contours.push(cntr);
      this.areas.push(area);
    } }, { key: "addContourSet", value: function addContourSet(

    cset) {

      //TODO: this can be optimized to skip this pre-processing

      var cntr = cset.contours[0];
      var pts = cset.allPoints;

      var ptlist = cntr.map(function (idx) {return pts[idx];});

      this.addContour(ptlist);
    } }, { key: "triangulate", value: function triangulate(


    customInsideChecker) {

      if (this.polygon)
      return;

      var pts = this.allPoints;

      var polygon = new _complex_polygon__WEBPACK_IMPORTED_MODULE_0__.ComplexPolygon(pts, customInsideChecker, this.bbox);

      polygon.contours = this.contours;

      polygon.triangulate();

      this.polygon = polygon;
      this.triangulationFailed = this.polygon.triangulationFailed;
    } }, { key: "area", value: function area()

    {
      return this.areas[0];
    } }, { key: "areaNet", value: function areaNet()

    {
      var total = this.areas[0];
      for (var i = 1; i < this.areas.length; i++) {
        total -= this.areas[i];}
      return total;
    } }, { key: "perimeter", value: function perimeter()

    {

      if (this.perimeterMem)
      return this.perimeterMem;

      var total = 0;
      var pts = this.contours[0];
      for (var i = 0, len = pts.length - 1; i < len; i++) {
        var v1 = pts[i];
        var _v4 = pts[i + 1];
        total += Math.sqrt((v1.x - _v4.x) * (v1.x - _v4.x) + (v1.y - _v4.y) * (v1.y - _v4.y));
      }

      this.perimeterMem = total;

      return total;
    } }, { key: "getThemeColor", value: function getThemeColor()


    {
      //returns a stable random-ish color value
      //based on properties of the geometry,
      //for use during colorized visualization of areas and volumes

      var r = this.areas[0] * 100 % 17 / 16;
      var g = this.allPoints.length % 23 / 22;
      var b = this.perimeterMem * 100 % 29 / 28;

      return { r: r, g: g, b: b };
    } }, { key: "hash", value: function hash()

    {var _this2 = this;
      var all = [];
      this.contours.forEach(function (c) {
        var vids = c.map(function (idx) {return _this2.allPoints[idx].id;});
        if (vids[0] === vids[vids.length - 1])
        vids.pop(); //remove last point that equals first point, since the same closed contour can use any of its points as a start point
        vids.sort();
        all.push(vids);
      });
      return JSON.stringify(all);
    } }, { key: "stitchContours", value: function stitchContours()


    {

      //invalidate this just in case something tries to use it...
      //it makes no sense for open polylines anyway
      this.areas = [];

      var openCntrs = [];
      for (var i = 0; i < this.contours.length; i++) {
        var cntr = this.contours[i];
        if (cntr[0] !== cntr[cntr.length - 1])
        openCntrs.push(cntr);
      }

      if (!openCntrs.length)
      return;


      var didSomething = true;
      while (didSomething) {

        didSomething = false;

        //Try to combine contours
        var cntr_edge_table = {};
        var contours = this.contours;

        for (var _i = 0; _i < contours.length; _i++) {
          var _cntr = contours[_i];

          var start = _cntr[0];
          var end = _cntr[_cntr.length - 1];

          if (start === end)
          continue;

          if (!cntr_edge_table[start])
          cntr_edge_table[start] = [-_i - 1];else

          cntr_edge_table[start].push(-_i - 1);


          if (!cntr_edge_table[end])
          cntr_edge_table[end] = [_i];else

          cntr_edge_table[end].push(_i);
        }

        for (var p in cntr_edge_table) {
          var entry = cntr_edge_table[p];

          if (entry.length === 2) {
            var toerase = undefined;

            if (entry[0] < 0 && entry[1] < 0) {
              var c1 = -entry[0] - 1;var c2 = -entry[1] - 1;
              //join start point to startpoint
              contours[c2].shift();
              Array.prototype.push.apply(contours[c1].reverse(), contours[c2]);
              toerase = c2;
            }

            if (entry[0] < 0 && entry[1] > 0) {
              var _c = -entry[0] - 1;var _c2 = entry[1];
              //join start point to endpoint
              contours[_c2].pop();
              Array.prototype.push.apply(contours[_c2], contours[_c]);
              toerase = _c;
            }

            if (entry[0] > 0 && entry[1] < 0) {
              var _c3 = entry[0];var _c4 = -entry[1] - 1;
              //join end point to startpoint
              contours[_c3].pop();
              Array.prototype.push.apply(contours[_c3], contours[_c4]);
              toerase = _c4;
            }

            if (entry[0] > 0 && entry[1] > 0) {
              var _c5 = entry[0];var _c6 = entry[1];
              //join end point to endpoint
              contours[_c5].pop();
              Array.prototype.push.apply(contours[_c5], contours[_c6].reverse());
              toerase = _c6;
            }

            if (toerase !== undefined) {
              contours.splice(toerase, 1);
              didSomething = true;
            }
            break;
          }
        }

      }

    } }, { key: "containsPointFrom", value: function containsPointFrom(


    cs2) {

      //Only need to check a single point from the interior of the
      //potential hole. Make sure it's inside the triangulation and not on the edge
      //to avoid numeric noise.
      if (!cs2.polygon.indices || cs2.polygon.indices.length < 3)
      return false;

      var p0 = cs2.allPoints[cs2.polygon.indices[0]];
      var p1 = cs2.allPoints[cs2.polygon.indices[1]];
      var p2 = cs2.allPoints[cs2.polygon.indices[2]];

      var cx = (p0.x + p1.x + p2.x) / 3;
      var cy = (p0.y + p1.y + p2.y) / 3;

      return this.polygon && this.polygon.pointInPolygon(cx, cy);
    }


    //creates a vertex buffer containing a filled 2D polygon for visualization on the cut plane
    //as 2D polygon mesh in the 3D model space
    //TODO: Use this directly from the this.polygon
  }, { key: "toPolygonMesh", value: function toPolygonMesh(packNormals) {

      return this.polygon.toPolygonMesh(packNormals);

    }

    //creates an extruded polygon 3d mesh
    //with the given thickness (maxZ=0, minZ=-thickness)
    //TODO: Use this directly from the this.polygon
  }, { key: "toExtrudedMesh", value: function toExtrudedMesh(thickness) {

      return this.polygon.toExtrudedMesh(thickness);
    } }]);return ContourSet;}();

/***/ }),

/***/ "./extensions/CompGeom/dcel.js":
/*!*************************************!*\
  !*** ./extensions/CompGeom/dcel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DCEL": () => (/* binding */ DCEL)
/* harmony export */ });
/* harmony import */ var _x_line_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x-line-line */ "./extensions/CompGeom/x-line-line.js");
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");
/* harmony import */ var _contour_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contour-set */ "./extensions/CompGeom/contour-set.js");
/* harmony import */ var _quad_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quad-tree */ "./extensions/CompGeom/quad-tree.js");
/* harmony import */ var _point_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-list */ "./extensions/CompGeom/point-list.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}





var avp = Autodesk.Viewing.Private;
var logger = avp.logger;var

Vertex = /*#__PURE__*/function () {

  function Vertex(x, y) {_classCallCheck(this, Vertex);
    this.x = x;
    this.y = y;

    this.edges = [];
    this.dbIds = [];
    this.dbIdsChanged = false;
  }_createClass(Vertex, [{ key: "isDegenerate", value: function isDegenerate()

    {
      return this.edges.length < 2;
    } }, { key: "addEdge", value: function addEdge(

    de) {

      //Make sure the same edge doesn't already exist
      for (var i = 0; i < this.edges.length; i++) {

        var e = this.edges[i];

        //We already have the exact same edge, return existing id
        if (e.v1 === de.v1 && e.v2 === de.v2)
        return e;
      }

      //Add the edge
      this.edges.push(de);
      return de;
    } }, { key: "removeEdge", value: function removeEdge(

    de) {
      var idx = this.edges.indexOf(de);
      if (idx >= 0)
      this.edges.splice(idx, 1);else

      logger.warn("Failed to find edge in vertex list");
    } }, { key: "findEdgeTo", value: function findEdgeTo(

    v) {
      for (var i = 0; i < this.edges.length; i++) {
        var e = this.edges[i];
        if (e.getOppositeVertex(this) === v)
        return e;
      }

      return null;
    }

    //TODO: make use of this when removing redundant vertices
  }, { key: "disconnect", value: function disconnect() {
      for (var i = 0; i < this.edges.length; i++) {
        var e = this.edges[i];
        e.getOppositeVertex(this).removeEdge(e);
      }

      var res = this.edges;
      this.edges = [];

      //Return the edges that got orphaned and need deletion 
      //from the parent structure
      return res;
    } }, { key: "sortEdges", value: function sortEdges()

    {var _this = this;

      this.edges.sort(function (a, b) {
        var angle1 = a.angle;
        if (a.v1 !== _this) {
          angle1 -= Math.PI;
        }

        var angle2 = b.angle;
        if (b.v1 !== _this) {
          angle2 -= Math.PI;
        }

        return angle1 - angle2;
      });

    } }, { key: "_canTraverse", value: function _canTraverse(

    e) {
      //forward edge
      if (e.v1 === this && !e.flagFwd) {
        e.flagFwd = 1;
        return true;
      }

      //reverse edge (points into this vertex)
      if (e.v2 === this && !e.flagRev) {
        e.flagRev = 1;
        return true;
      }

      return false;
    }

    //Returns an edge that's not yet traversed during
    //area finding
  }, { key: "findUntraversedEdge", value: function findUntraversedEdge() {
      for (var i = 0; i < this.edges.length; i++) {
        var e = this.edges[i];

        if (this._canTraverse(e))
        return e;
      }

      return null;
    }

    //Assuming edges are already sorted,
    //returns the edge that's immediately CCW to 
    //the given edge
  }, { key: "findNextCCWEdge", value: function findNextCCWEdge(e) {

      var idx = this.edges.indexOf(e);

      if (idx === -1) {
        logger.error("This edge isn't mine.");
        return null;
      }

      //Dangling vertex
      if (this.isDegenerate()) {
        return null;
      }
      /*        
                let idxNext = idx - 1;
                if (idxNext < 0)
                    idxNext = this.edges.length -1;
                    */
      var idxNext = (idx + 1) % this.edges.length;

      var eNext = this.edges[idxNext];

      if (this._canTraverse(eNext))
      return eNext;

      //logger.warn("Hmmm... Didn't find an edge to continue from here.");
      return null;
    } }]);return Vertex;}();var




DirectedEdge = /*#__PURE__*/function () {

  function DirectedEdge(v1, v2, id) {_classCallCheck(this, DirectedEdge);
    var swap = false;

    //Orient the edge so it has increasing dy and dx
    if (v2.y < v1.y)
    swap = true;else
    if (v2.y === v1.y)
    swap = v2.x < v1.x;

    //the coordinates stored in the edge
    //might be slightly different from the vertex coordinates
    //of the v1 and v2 vertices. The vertices are "snapped" to 
    //the nearest snap positin, while the edge coordinates are the "original" ones
    //from the 3d mesh that generated the edge.
    if (swap) {
      this.v1 = v2;
      this.v2 = v1;
    } else {
      this.v1 = v1;
      this.v2 = v2;
    }

    this.dx = this.v2.x - this.v1.x;
    this.dy = this.v2.y - this.v1.y;
    this.length2 = this.dx * this.dx + this.dy * this.dy;
    this.length = Math.sqrt(this.length2);
    this.angle = Math.atan2(this.dy, this.dx);

    if (this.angle < 0) {
      if ((0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_1__.isZero)(this.angle))
      this.angle = 0;else
      if ((0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_1__.isEqual)(this.angle, -Math.PI))
      this.angle = Math.PI;

      if (this.angle < 0)
      logger.warn("Unexpected edge slope <0 :", this.angle);
    }

    //the edge index in the edge list of the parent data structure
    this.id = id;

    this.minx = Math.min(this.v1.x, this.v2.x);
    this.miny = Math.min(this.v1.y, this.v2.y);
    this.maxx = Math.max(this.v1.x, this.v2.x);
    this.maxy = Math.max(this.v1.y, this.v2.y);


    //traversal flags, set temporarily 
    //during graph tarversal
    this.flagFwd = 0;
    this.flagRev = 0;

    this.dbIdsCached = null;
  }_createClass(DirectedEdge, [{ key: "paramAlong", value: function paramAlong(

    x, y) {
      var dot = (x - this.v1.x) * this.dx + (y - this.v1.y) * this.dy;
      return dot / this.length2;
    } }, { key: "getOppositeVertex", value: function getOppositeVertex(

    v) {
      if (this.v1 === v)
      return this.v2;else
      if (this.v2 === v)
      return this.v1;else

      logger.warn("Edge does not own this vertex.");
    } }, { key: "getDbIds", value: function getDbIds()

    {
      //Return all dbIds that are common between the two 
      //vertices of the edge. Used when splitting edges
      //to pass the information to new vertices

      if (!this.v1.dbIdsChanged && !this.v2.dbIdsChanged) {
        return this.dbIdsCached;
      }

      //Calculate intersection of the dbId arrays of
      //the two vertices.
      var res = [];
      var idv1 = this.v1.dbIds;
      var idv2 = this.v2.dbIds;
      for (var i = 0; i < idv1.length; i++) {
        if (idv2.indexOf(idv1[i]) !== -1)
        res.push(idv1[i]);
      }

      //Cache the result so we don't recompute unnecessarily
      //This requires cooperation by the vertex object change flag.
      this.dbIdsCached = res;
      this.v1.dbIdsChanged = false;
      this.v2.dbIdsChanged = false;

      return res;
    } }]);return DirectedEdge;}();




//doubly connected edge list
var DCEL = /*#__PURE__*/function () {


  function DCEL(bbox, precisionTolerance) {_classCallCheck(this, DCEL);

    this.bbox = bbox;
    this.boxSize = this.bbox.getSize(new THREE.Vector3()).length();

    if (typeof precisionTolerance === "number") {
      //Input is in model units, e.g. if model is in feet,
      //precision tolerance has to be in feet
      this.precisionTolerance = precisionTolerance;
    } else {
      this.precisionTolerance = _fuzzy_math__WEBPACK_IMPORTED_MODULE_1__.TOL * this.boxSize;
    }

    this.edges = [];
    this.verts = new _point_list__WEBPACK_IMPORTED_MODULE_4__.UniquePointList(this.bbox, this.precisionTolerance, Vertex, true);

    this.quadTreeEdges = new _quad_tree__WEBPACK_IMPORTED_MODULE_3__.QuadTree(this.bbox.min.x, this.bbox.min.y, this.bbox.max.x, this.bbox.max.y, this.precisionTolerance);

    this.nextEdgeId = 1;
  }_createClass(DCEL, [{ key: "_addVertex", value: function _addVertex(

    px, py, dbIds) {
      return this.verts.findOrAddPoint(px, py, dbIds);
    } }, { key: "splitEdge", value: function splitEdge(


    de, points) {

      var pts = [];

      pts.push({
        x: de.v1.x,
        y: de.v1.y,
        u: 0 });


      //Remember the originating objects for this edge, to set them on the
      //resulting split edges
      var dbIds = de.getDbIds();

      for (var i = 0; i < points.length; i += 2) {

        var p = {
          x: points[i],
          y: points[i + 1],
          u: de.paramAlong(points[i], points[i + 1]) };


        if ((0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_1__.isZero)(p.u) || (0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_1__.isEqual)(p.u, 1))
        continue;

        pts.push(p);
      }

      //The intersection points were either on the beginning or on the end
      //vertex of the edge, so splitting is not needed as it will result
      //in a zero length edge.
      if (pts.length === 1)
      return;

      pts.push({
        x: de.v2.x,
        y: de.v2.y,
        u: 1 });


      pts.sort(function (a, b) {
        return a.u - b.u;
      });

      //Remove the source edge
      this.removeDirectedEdge(de);

      //Add all the pieces that the edge was split into
      for (var _i = 1; _i < pts.length; _i++) {
        this.addDirectedEdge(pts[_i - 1].x, pts[_i - 1].y, pts[_i].x, pts[_i].y, true, dbIds);
      }
    } }, { key: "_enumNearEdges", value: function _enumNearEdges(

    de, cb) {

      this.quadTreeEdges.enumNearItems(de, cb);
    } }, { key: "addDirectedEdge", value: function addDirectedEdge(

    x1, y1, x2, y2, skipSplitting, dbIds) {var _this2 = this;
      var v1 = this._addVertex(x1, y1, dbIds);
      var v2 = this._addVertex(x2, y2, dbIds);

      if (v1 === v2) {
        //logger.warn("zero length edge");
        return;
      }

      if (v1.findEdgeTo(v2)) {
        //edge already exists
        return;
      }

      var de = new DirectedEdge(v1, v2, this.nextEdgeId++);

      var addedEdge = de.v1.addEdge(de);

      //If the edge did not already exist...
      if (addedEdge === de) {
        de.v2.addEdge(de);

        //Remember the unsnapped positions used for this edge
        de.sourcePts = [x1, y1, x2, y2];

        this.edges[de.id] = de;

        this.quadTreeEdges.addItem(de);
      } else {
        //Edge is already in the graph, nothing to do
        return addedEdge;
      }

      if (skipSplitting)
      return addedEdge;

      //Now make sure the new edge doesn't overlap or intersect existing edges
      //by finding and splitting any intersecting edges
      var myInts = [];
      var otherInts = {};

      this._enumNearEdges(de, function (e) {
        var ints = (0,_x_line_line__WEBPACK_IMPORTED_MODULE_0__.segmentsIntersect)(e, de, _this2.precisionTolerance);

        if (!ints)
        return;

        //Existing edge was crossed by new edge -- split it
        if (ints.e1 && ints.e1.length) {
          otherInts[e.id] = ints.e1;
        }

        //New edge crossed existing edge -- remember the intersection point for later
        if (ints.e2 && ints.e2.length) {
          myInts.push.apply(myInts, ints.e2);
        }

      });

      for (var id in otherInts) {
        this.splitEdge(this.edges[parseInt(id)], otherInts[id]);
      }

      if (myInts.length)
      this.splitEdge(de, myInts);

      this.dirty = true;

      return addedEdge;
    } }, { key: "removeDirectedEdge", value: function removeDirectedEdge(

    de) {

      de.v1.removeEdge(de);
      de.v2.removeEdge(de);

      this.edges[de.id] = undefined;

      this.quadTreeEdges.deleteItem(de);
    } }, { key: "removeDanglingPolyline", value: function removeDanglingPolyline(

    startVertex) {

      while (startVertex.edges.length === 1) {

        var de = startVertex.edges[0];
        var endVertex = de.getOppositeVertex(startVertex);
        this.removeDirectedEdge(de);
        startVertex = endVertex;
      }

    } }, { key: "cleanupFlatEdges", value: function cleanupFlatEdges()

    {
      //get rid of vertices that only have two parallel edges going into them

      var removeList = [];

      this.verts.forEach(function (v) {

        if (!v)
        return;

        if (v.edges.length !== 2)
        return;

        var e1 = v.edges[0];
        var e2 = v.edges[1];

        //Detect co-linear edges
        var angleDelta = Math.abs(e1.angle - e2.angle);
        var ANGLE_TOLERANCE = 2e-3;
        if (angleDelta < ANGLE_TOLERANCE || Math.abs(angleDelta - Math.PI) < ANGLE_TOLERANCE) {
          removeList.push(v);
        }

        //Detect degenerate triangles
        var v1 = e1.getOppositeVertex(v);
        var v2 = e2.getOppositeVertex(v);
        var eShared = v1.findEdgeTo(v2);

        if (eShared) {
          var area = 0.5 * Math.abs(e1.dx * e2.dy - e2.dx * e1.dy);
          if (area < 1e-3) {
            removeList.push(v);
          }
        }

        //TODO: more generic co-linearity and degeneracy heuristics...

      });


      //if (removeList.length)
      //    logger.log("Redundant edges", removeList.length);

      for (var i = 0; i < removeList.length; i++) {

        var v = removeList[i];

        if (v.edges.length !== 2) {
          //logger.warn("Number of edges changed");
          continue;
        }

        var e1 = v.edges[0];
        var e2 = v.edges[1];

        var vOther1 = e1.getOppositeVertex(v);
        var vOther2 = e2.getOppositeVertex(v);

        this.removeDirectedEdge(e1);
        this.removeDirectedEdge(e2);

        this.verts.delete(v);

        this.addDirectedEdge(vOther1.x, vOther1.y, vOther2.x, vOther2.y, true);
      }

      //Clean up again, until no more redundant vertices exist
      if (removeList.length)
      return this.cleanupFlatEdges();
    } }, { key: "_compactLists", value: function _compactLists()



    {

      this.verts.compact();


      var edges = [];

      for (var i = 0, len = this.edges.length; i < len; i++) {
        var e = this.edges[i];
        if (!e)
        continue;

        e.oldid = e.id;
        e.flagFwd = 0;
        e.flagRev = 0;
        e.id = edges.length;
        edges.push(e);
      }

      this.edges = edges;
    }


    //converts closed areas to polygons with holes, in a way where
    //holes themseves are also marked as separate polygons in their own
    //right, thus filling the whole area (i.e. non-zero fill method).
  }, { key: "_detectHolesNonZero", value: function _detectHolesNonZero(customInsideChecker) {

      this.holes = [];

      //Skip the very largest polygon, because that is
      //the overall model perimeter
      //TODO: This logic is Location Breakdown specific
      this.outerPerimeter = this.closedAreas[this.closedAreas.length - 1];
      if (this.outerPerimeter)
      this.outerPerimeter.triangulate();

      for (var i = 0, len = this.closedAreas.length - 1; i < len; i++) {

        var cs = this.closedAreas[i];

        //detect if the polygon is actually a hole in a
        //bigger exterior polygon
        //The logic we use here: if a polygon contains
        //any of the smaller polygons inside it, it is a hole of a bigger polygon
        //If a polygon contains a polygon marked as a hole, then add the hole to it
        //before triangulating.
        //TODO: this can be optimized via spatial index if number of polygons becomes large
        for (var j = i - 1; j >= 0; j--) {
          var cs2 = this.closedAreas[j];

          //Only need to check a single point from the interior of the
          //potential hole. Make sure it's inside the triangulation and not on the edge
          //to avoid numeric noise.
          if (cs.containsPointFrom(cs2)) {
            if (cs2.isHole) {
              cs.addContourSet(cs2);
            } else {
              cs.isHole = true;
              this.holes.push(cs);
              break;
            }
          }
        }

        //We added all the holes, now triangulate again with the holes in mind
        if (!cs.isHole) {
          cs.triangulate(customInsideChecker);
        }

      }


      //Do a second pass over just the holes
      //and convert each hole that contains a hole
      //to a real polygon area.
      //TODO: I don't really know if this is mathematically correct...
      for (var _i2 = 0, _len = this.holes.length; _i2 < _len; _i2++) {

        var _cs = this.holes[_i2];

        _cs.triangulate(customInsideChecker);

        //If a hole contains a hole inside it, then it is
        //no longer hole, mark both as processed
        for (var _j = _i2 - 1; _j >= 0; _j--) {

          var _cs2 = this.holes[_j];

          if (_cs2.holeProcessFlag)
          continue;

          //Only need to check a single point from the interior of the
          //potential hole. Make sure it's inside the triangulation and not on the edge
          //to avoid numeric noise.
          if (_cs.containsPointFrom(_cs2)) {
            _cs.addContourSet(_cs2);
            _cs.isHole = false;
            _cs2.holeProcessFlag = true;
          }
        }

        //We added all the holes, now triangulate again with the holes in mind
        if (!_cs.isHole) {
          _cs.triangulate(customInsideChecker);
        }

      }

      //Remove all holes from the list of polygons
      var filteredNonHoles = [];
      for (var _i3 = 0; _i3 < this.closedAreas.length - 1; _i3++) {
        var _cs3 = this.closedAreas[_i3];
        if (_cs3.isHole)
        continue;

        _cs3.id = filteredNonHoles.length;
        filteredNonHoles.push(_cs3);
      }

      this.closedAreas = filteredNonHoles;


    } }, { key: "_detectHolesEvenOdd", value: function _detectHolesEvenOdd(

    customInsideChecker) {

      var allAreas = this.closedAreas;
      if (this.openAreas && this.openAreas.length)
      allAreas = allAreas.concat(this.openAreas);

      if (!allAreas.length) {
        this.closedAreas = [];
        this.openAreas = null;
        return;
      }

      //In the DCEL, each polygon outline or hole contour
      //appears twice (due to the structure being doubly connected), so
      //here we drop the twin polygon.
      var cmap = {};
      for (var i = 0; i < allAreas.length; i++) {
        var a = allAreas[i];
        var hash = a.hash();
        if (!cmap[hash])
        cmap[hash] = a;
      }

      allAreas = Object.values(cmap);

      //Make one giant complex polygon out of all the contours, and let
      //it triangulate itself using its default even-odd fill rule
      var csAll = new _contour_set__WEBPACK_IMPORTED_MODULE_2__.ContourSet();

      for (var _i4 = 0; _i4 < allAreas.length; _i4++) {
        csAll.addContourSet(allAreas[_i4]);
      }

      csAll.triangulate(customInsideChecker || this.quadTreeEdges);

      if (csAll.triangulationFailed) {
        //OK, now we get desperate -- the above triangulation attempt
        //of the whole thing as one failed, so we triangulate each
        //area separately (together with areas that are roughly inside it),
        //and filter that result based on even-odd inside checker.
        this._detectHolesNonZero(customInsideChecker || this.quadTreeEdges);
      } else {
        this.closedAreas = [csAll];
        this.openAreas = [];
      }
    } }, { key: "finalize", value: function finalize(


    useEvenOddFill, customInsideChecker) {

      //Remove useless vertices
      this.cleanupFlatEdges();

      this._compactLists();

      //Sort the edges of each vertex according to direction
      this.verts.forEach(function (v) {return v.sortEdges();});

      //traverse the graph and build closed polygons 
      //by following the edges in a counterclockwise direction

      var polygons = [];
      var openPolygons = [];

      this.verts.forEach(function (v) {
        var e = v.findUntraversedEdge();

        if (!e)
        return;

        var polygon = [v];

        var vNext = e.getOppositeVertex(v);
        do {
          polygon.push(vNext);
          e = vNext.findNextCCWEdge(e);
          if (!e)
          break;
          vNext = e.getOppositeVertex(vNext);
        } while (vNext && vNext !== v);

        if (vNext === v) {
          polygon.push(v);
          polygons.push(polygon);
        } else {
          openPolygons.push(polygon);
        }
      });

      //logger.log("closed polygons:", polygons.length);
      //if (openPolygons.length)
      //  logger.log("open polygons:", openPolygons.length);

      this.closedAreas = [];
      for (var i = 0, len = polygons.length; i < len; i++) {
        var cs = new _contour_set__WEBPACK_IMPORTED_MODULE_2__.ContourSet();
        cs.addContour(polygons[i]);
        this.closedAreas.push(cs);
      }

      //Sort by increasing area, so that
      //we discover potential polygon holes before we
      //triangulate their bigger exterior outlines
      this.closedAreas.sort(function (a, b) {
        return a.area() - b.area();
      });


      if (useEvenOddFill) {
        this._detectHolesEvenOdd(customInsideChecker);
      } else {
        this._detectHolesNonZero(customInsideChecker);
      }


      //Put all open polygons into a single set of contours
      //and combine as many as possible end to end to get
      //a minimal number of open contours.
      this.openAreas = [];
      if (openPolygons.length) {
        var openAreas = [];
        var _cs4 = new _contour_set__WEBPACK_IMPORTED_MODULE_2__.ContourSet();
        for (var _i5 = 0, _len2 = openPolygons.length; _i5 < _len2; _i5++) {
          _cs4.addContour(openPolygons[_i5]);
        }
        _cs4.stitchContours();
        _cs4.triangulate();
        openAreas.push(_cs4);
        //logger.log("Stitched open polygons", cs.contours.length);

        this.openAreas = openAreas;
      }

    } }, { key: "deleteEdgesOnLine", value: function deleteEdgesOnLine(


    x1, y1, x2, y2) {var _this3 = this;

      var v1Tmp = new Vertex(x1, y1);
      var v2Tmp = new Vertex(x2, y2);
      var deTmp = new DirectedEdge(v1Tmp, v2Tmp, -1);

      //Find edges crossed by the given segment
      var otherInts = {};

      this._enumNearEdges(deTmp, function (e) {

        var ints = (0,_x_line_line__WEBPACK_IMPORTED_MODULE_0__.segmentsIntersect)(e, deTmp, _this3.precisionTolerance);

        if (!ints)
        return;

        //Existing edge was crossed by new edge
        if (ints.e1 && ints.e1.length) {
          otherInts[e.id] = ints.e1;
        }
      });

      //Remove the intersected edges, effectively
      //joining all areas defined by those edges.
      //This is brute force, in theory we can find all
      //contour sets that own the intersected edges
      //and update the triangulations, but it doesn't seem worth it
      for (var sid in otherInts) {
        var eid = parseInt(sid);
        var edge = this.edges[eid];
        this.removeDirectedEdge(edge);

        //clean up any "dangling" vertices left by the edge removal.
        //those are edges that are only connected to the deleted edge and nothing else
        this.removeDanglingPolyline(edge.v1);
        this.removeDanglingPolyline(edge.v2);
      }

      this.dirty = true;
    }

    //Given a rectangle, join all areas that intersect the rectangle
  }, { key: "deleteEdgesInRectangle", value: function deleteEdgesInRectangle(x1, y1, x2, y2) {

      var minx = Math.min(x1, x2);
      var miny = Math.min(y1, y2);
      var maxx = Math.max(x1, x2);
      var maxy = Math.max(y1, y2);

      var otherInts = {};

      //find edges completely inside the rectangle
      this.quadTreeEdges.enumInBox(minx, miny, maxx, maxy, function (e) {
        otherInts[e.id] = e;
      });

      //Remove the intersected edges, effectively
      //joining all areas defined by those edges.
      //This is brute force, in theory we can find all
      //contour sets that own the intersected edges
      //and update the triangulations, but it doesn't seem worth it
      for (var sid in otherInts) {
        var eid = parseInt(sid);
        var edge = this.edges[eid];

        if (!edge)
        continue;

        this.removeDirectedEdge(edge);

        //clean up any "dangling" vertices left by the edge removal.
        //those are edges that are only connected to the deleted edge and nothing else
        this.removeDanglingPolyline(edge.v1);
        this.removeDanglingPolyline(edge.v2);
      }


      this.dirty = true;
    } }, { key: "findNearestVertex", value: function findNearestVertex(

    x, y, radius) {

      if (typeof radius !== "number")
      radius = this.precisionTolerance;

      var dNear = Infinity;
      var vNear = null;

      this.verts.enumInBox(x - radius, y - radius, x + radius, y + radius, function (v) {

        var d = (v.x - x) * (v.x - x) + (v.y - y) * (v.y - y);
        if (d < dNear) {
          dNear = d;
          vNear = v;
        }

      });

      return dNear <= radius * radius ? vNear : null;
    } }, { key: "findNearestPointOnEdge", value: function findNearestPointOnEdge(

    x, y, radius) {

      if (typeof radius !== "number")
      radius = this.precisionTolerance;

      var tmp = { x: 0, y: 0, u: 0, d: -1 };
      var ptNearest = { x: 0, y: 0, d: Infinity, e: null };

      this.quadTreeEdges.enumInBox(x - radius, y - radius, x + radius, y + radius, function (e) {

        var result = (0,_x_line_line__WEBPACK_IMPORTED_MODULE_0__.pointOnLine)(x, y, e, true, radius, tmp);

        if (result) {
          if (tmp.d < ptNearest.d) {
            ptNearest.x = tmp.x;
            ptNearest.y = tmp.y;
            ptNearest.d = tmp.d;
            ptNearest.e = e;
          }
        }
      });

      return ptNearest.d <= radius ? ptNearest : null;

    } }]);return DCEL;}();

/***/ }),

/***/ "./extensions/CompGeom/edge-set.js":
/*!*****************************************!*\
  !*** ./extensions/CompGeom/edge-set.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgeSet": () => (/* binding */ EdgeSet)
/* harmony export */ });
/* harmony import */ var _interval_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval-tree */ "./extensions/CompGeom/interval-tree.js");
/* harmony import */ var _point_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-list */ "./extensions/CompGeom/point-list.js");
/* harmony import */ var _complex_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex-polygon */ "./extensions/CompGeom/complex-polygon.js");
/* harmony import */ var _src_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/compat */ "./src/compat.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}




var _window = (0,_src_compat__WEBPACK_IMPORTED_MODULE_3__.getGlobal)();


//Functionality for converting a list of two-point line segments into a connected
//set of (hopefully) closed contour lines. The contour set is then used
//for triangulation.
//This data structure assumes there are no intersecting edges (use the DCEL if there are, or you need fully-connected topology).
var EdgeSet = /*#__PURE__*/function () {

  function EdgeSet(edges, bbox, precisionTolerance) {_classCallCheck(this, EdgeSet);

    this.edges = edges;
    this.bbox = bbox;

    this.verts = new _point_list__WEBPACK_IMPORTED_MODULE_1__.UniquePointList(bbox, precisionTolerance);
    this.polygon = null;
  }_createClass(EdgeSet, [{ key: "getPointIndex", value: function getPointIndex(


    px, py) {

      var v = this.verts.findOrAddPoint(px, py);

      return v.id;
    } }, { key: "snapEdges", value: function snapEdges()

    {

      for (var i = 0; i < this.edges.length; i++) {

        var e = this.edges[i];

        e.p1 = this.getPointIndex(e.v1.x, e.v1.y);
        e.p2 = this.getPointIndex(e.v2.x, e.v2.y);
      }
    } }, { key: "sanitizeEdges", value: function sanitizeEdges()

    {
      var edgeSet = {};
      var sanitizedEdges = [];

      for (var i = 0, len = this.edges.length; i < len; i++) {
        var e = this.edges[i];
        if (e.p1 === e.p2) {
          continue;
        }

        var key = Math.min(e.p1, e.p2) + ':' + Math.max(e.p1, e.p2);
        if (edgeSet[key] !== true) {
          edgeSet[key] = true;
          sanitizedEdges.push(e);
        }
      }

      this.edges = sanitizedEdges;
    } }, { key: "stitchContours", value: function stitchContours()


    {

      this.contours = [];

      //Create jump table from edge to edge
      //and back
      var edge_table = {};

      for (var i = 0; i < this.edges.length; i++) {
        var e = this.edges[i];

        if (e.p1 === e.p2)
        continue;

        if (edge_table[e.p1] !== undefined)
        edge_table[e.p1].push(e.p2);else

        edge_table[e.p1] = [e.p2];

        if (edge_table[e.p2] !== undefined)
        edge_table[e.p2].push(e.p1);else

        edge_table[e.p2] = [e.p1];
      }

      var cur_cntr = [];

      for (var p in edge_table) {
        if (edge_table[p].length !== 2) {var _window$Autodesk;
          (_window$Autodesk = _window.Autodesk) === null || _window$Autodesk === void 0 ? void 0 : _window$Autodesk.Viewing.Private.logger.warn("Incomplete edge table");
          break;
        }
      }

      //Start with the first edge, and stitch until we can no longer
      // eslint-disable-next-line no-constant-condition
      while (true) {

        var sfrom = undefined;

        //Look for doubly connected point first
        for (var _p in edge_table) {
          if (edge_table[_p].length > 1) {
            sfrom = _p;
            break;
          }
        }

        //If no double-connected point found, we know
        //the it will be an open contour, but stitch as much
        //as we can anyway.
        if (!sfrom) {
          for (var _p2 in edge_table) {
            if (edge_table[_p2].length > 0) {
              sfrom = _p2;
              break;
            }
          }
        }

        if (!sfrom)
        break;

        var prev = -1;
        var cur = parseInt(sfrom);
        var cur_segs = edge_table[sfrom];

        //start a new contour
        cur_cntr.push(cur);

        while (cur_segs && cur_segs.length) {

          var toPt = cur_segs.shift();

          //skip backpointer if we hit it
          if (toPt === prev)
          toPt = cur_segs.shift();

          if (toPt === undefined) {
            delete edge_table[cur];
            break;
          }

          cur_cntr.push(toPt);

          if (cur_segs.length == 0)
          delete edge_table[cur];else
          if (cur_segs[0] === prev)
          delete edge_table[cur];

          prev = cur;
          cur = toPt;
          cur_segs = edge_table[toPt];
        }

        if (cur_cntr.length) {
          this.contours.push(cur_cntr);
          cur_cntr = [];
        }
      }

      var openCntrs = [];
      for (var _i = 0; _i < this.contours.length; _i++) {
        var cntr = this.contours[_i];
        if (cntr[0] !== cntr[cntr.length - 1])
        openCntrs.push(cntr);
      }


      if (openCntrs.length) {
        //avp.logger.warn("Incomplete stitch");

        var didSomething = true;
        while (didSomething) {

          didSomething = false;

          //Try to combine contours
          var cntr_edge_table = {};
          var contours = this.contours;

          for (var _i2 = 0; _i2 < contours.length; _i2++) {
            var _cntr = contours[_i2];
            var start = _cntr[0];
            var end = _cntr[_cntr.length - 1];

            if (start === end)
            continue;

            if (!cntr_edge_table[start])
            cntr_edge_table[start] = [-_i2 - 1];else

            cntr_edge_table[start].push(-_i2 - 1);


            if (!cntr_edge_table[end])
            cntr_edge_table[end] = [_i2];else

            cntr_edge_table[end].push(_i2);
          }

          for (var _p3 in cntr_edge_table) {
            var entry = cntr_edge_table[_p3];

            if (entry.length == 2) {
              var toerase = undefined;

              if (entry[0] < 0 && entry[1] < 0) {
                var c1 = -entry[0] - 1;var c2 = -entry[1] - 1;
                //join start point to startpoint
                contours[c2].shift();
                Array.prototype.push.apply(contours[c1].reverse(), contours[c2]);
                toerase = c2;
              }

              if (entry[0] < 0 && entry[1] > 0) {
                var _c = -entry[0] - 1;
                var _c2 = entry[1];
                //join start point to endpoint
                contours[_c2].pop();
                Array.prototype.push.apply(contours[_c2], contours[_c]);
                toerase = _c;
              }

              if (entry[0] > 0 && entry[1] < 0) {
                var _c3 = entry[0];
                var _c4 = -entry[1] - 1;
                //join end point to startpoint
                contours[_c3].pop();
                Array.prototype.push.apply(contours[_c3], contours[_c4]);
                toerase = _c4;
              }

              if (entry[0] > 0 && entry[1] > 0) {
                var _c5 = entry[0];
                var _c6 = entry[1];
                //join end point to endpoint
                contours[_c5].pop();
                Array.prototype.push.apply(contours[_c5], contours[_c6].reverse());
                toerase = _c6;
              }

              if (toerase !== undefined) {
                contours.splice(toerase, 1);
                didSomething = true;
              }
              break;
            }
          }

        }

      }
    } }, { key: "cleanupFlatEdges", value: function cleanupFlatEdges()


    {

      var pts = this.verts.pts;
      var TOL = this.verts.precisionTolerance;

      for (var i = 0; i < this.contours.length; i++) {

        var cntr = this.contours[i];

        // eslint-disable-next-line no-constant-condition
        while (true) {
          var removePt = -1;

          for (var j = 1; j < cntr.length - 1; j++) {
            var prev = cntr[j - 1];
            var cur = cntr[j];
            var next = cntr[j + 1];

            var p0 = pts[prev];
            var p1 = pts[cur];
            var p2 = pts[next];

            var dx1 = p1.x - p0.x;
            var dy1 = p1.y - p0.y;
            var dx2 = p2.x - p1.x;
            var dy2 = p2.y - p1.y;

            var len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            if (len1 < TOL) {
              removePt = j;
              break;
            }

            var len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (len2 < TOL) {
              removePt = j;
              break;
            }

            dx1 /= len1;
            dy1 /= len1;
            dx2 /= len2;
            dy2 /= len2;

            var dot = dx1 * dx2 + dy1 * dy2;

            if (Math.abs(dot - 1.0) < 1e-2) {
              removePt = j;
              break;
            }
          }

          if (removePt < 0)
          break;

          cntr.splice(removePt, 1);
        }

      }

    } }, { key: "triangulate", value: function triangulate()


    {

      //this.cleanupFlatEdges();

      //The interval tree is a faster and more tolerant
      //way of checking if a point is inside the complex polygon defined
      //by a set of edges. We use that in preference to the built-in
      //ComplexPolygon inside checker.
      var it = new _interval_tree__WEBPACK_IMPORTED_MODULE_0__.IntervalTree(this.verts.pts, this.edges, this.bbox);
      it.build();

      var polygon = new _complex_polygon__WEBPACK_IMPORTED_MODULE_2__.ComplexPolygon(this.verts.pts, it, this.bbox);
      polygon.contours = this.contours;
      polygon.triangulate();
      return polygon;

    } }]);return EdgeSet;}();

/***/ }),

/***/ "./extensions/CompGeom/ellipse.js":
/*!****************************************!*\
  !*** ./extensions/CompGeom/ellipse.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEllipsePoint": () => (/* binding */ getEllipsePoint),
/* harmony export */   "getEllipseArcPoint": () => (/* binding */ getEllipseArcPoint),
/* harmony export */   "normalizeAngle": () => (/* binding */ normalizeAngle),
/* harmony export */   "getAngleDelta": () => (/* binding */ _getAngleDelta),
/* harmony export */   "angleInsideArcCCW": () => (/* binding */ angleInsideArcCCW),
/* harmony export */   "angleInsideArc": () => (/* binding */ angleInsideArc),
/* harmony export */   "EllipseArc": () => (/* binding */ EllipseArc)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // Sample ellipse at a given angle.
//  @param {number} angle    - ccw angle along the ellipse in radians. 0 = point is ellipse x-axis.
//  @param {number} cx, cy   - ellipse center
//  @param {number} rx, ry   - ellipse radii
//  @param {number} rotation - ccw in radians
//  @param {Vector2} [target]
//  @returns {Vector2}
var getEllipsePoint = function getEllipsePoint(angle, cx, cy, rx, ry) {var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.0;var target = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

  var point = target || new THREE.Vector2();

  // compute point from unrotated ellipse equation
  var x = cx + rx * Math.cos(angle);
  var y = cy + ry * Math.sin(angle);

  // apply this.rotation: (x,y) around center (cx, cy)
  if (rotation !== 0) {

    var cos = Math.cos(rotation);
    var sin = Math.sin(rotation);

    var tx = x - cx;
    var ty = y - cy;

    // Rotate the point about the center of the ellipse.
    x = tx * cos - ty * sin + cx;
    y = tx * sin + ty * cos + cy;
  }

  return point.set(x, y);
};

// Sample a single point from an ellipse arc that runs counterclockwise from startAngle to endAngle.
//  @param {number} cx, cy               - center
//  @param {number} rx, ry               - radii in x/y axis
//  @param {number} startAngle, endAngle - ccw angles in radians. 0 corresponds to (xRadius, 0)
//  @param {number} rotation             - ellipse axis rotation, ccw in radians
//  @param {number} t                    - sampling position along ellipse. 0 => startAngle, 1 = endAngle
//  @param {Vector2} [target]
//  @returns {Vector2}
var getEllipseArcPoint = function getEllipseArcPoint(t, cx, cy, rx, ry, startAngle, endAngle) {var rotation = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.0;var target = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;

  var deltaAngle = endAngle - startAngle;

  // If start/end angle are approximately the same, just sample at start angle
  var samePoints = Math.abs(deltaAngle) < Number.EPSILON;
  if (samePoints) {
    return getEllipsePoint(0.0, cx, cy, rx, ry, rotation, target);
  }

  // ensures that deltaAngle is [0,2 PI[
  deltaAngle = normalizeAngle(deltaAngle);

  // Since samePoints was false, but deltaAngle is close to 0 after normalization, 
  // deltaAngle must be close to a multiple of 2*Pi.
  var wholeEllipse = deltaAngle < Number.EPSILON;
  if (wholeEllipse) {
    deltaAngle = 2.0 * Math.PI;
  }

  // Sample ellipse point at that angle
  var angle = startAngle + t * deltaAngle;
  return getEllipsePoint(angle, cx, cy, rx, ry, rotation, target);
};

// Force angle to be within [0, 2Pi[
var normalizeAngle = function normalizeAngle(angle) {
  // Scale [0, 2Pi] to [0,1]
  angle /= 2.0 * Math.PI;

  // Remove integer part
  angle -= Math.trunc(angle);

  // Angle is either in [0,1] or was negative. In the latter case,
  // it is in [-1, 0] now and we add 1 to bring it to [0,1] as well.
  if (angle < 0) {
    angle += 1.0;
  }

  // Scale back to [0, 2Pi] range
  return angle * 2.0 * Math.PI;
};

// Compute the arc angle difference of an arc running from startAngle to endAngle.
//  @param {number} startAngle - in radians
//  @param {number} endAngle   - in radians
//  @param {bool}   ccw        - whether the arc runs counterclockwise (true) or clockwise (false)
var _getAngleDelta = function getAngleDelta(startAngle, endAngle, ccw) {

  // get angle difference
  var delta = endAngle - startAngle;

  // Force to [0, 2Pi] range
  delta = normalizeAngle(delta);

  // invert if arc is clockwise
  return ccw ? delta : 2.0 * Math.PI - delta;
};

// Given start/end angle of an arc, this function checks whether angle is within the arc. 
// All angles are ccw in radians. We assume the arc to be running ccw. Note that start may be > end if the arc range contains a 2*Pi mulitple.
var angleInsideArcCCW = function angleInsideArcCCW(angle, start, end) {

  // ensure 0 <= a < 2Pi for all angles
  angle = normalizeAngle(angle);
  start = normalizeAngle(start);
  end = normalizeAngle(end);

  if (start < end) {
    return angle >= start && angle <= end;
  }

  // If start > end, we are crossing a full-circle boundary. So, the range between [start, end] is actually
  // the circle part outside the arc.
  // For start = end, the arc is the whole circle and the result will always be true.
  return angle >= start || angle <= end;
};

// Like angleInsideCCW, but adding an option param to support clockwise arcs.
var angleInsideArc = function angleInsideArc(angle, start, end) {var ccw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var insideCCW = angleInsideArcCCW(angle, start, end);
  return ccw ? insideCCW : !insideCCW;
};

var svgAngle = function svgAngle(ux, uy, vx, vy) {

  var dot = ux * vx + uy * vy;
  var len = Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
  var ang = Math.acos(Math.max(-1, Math.min(1, dot / len))); // floating point precision, slightly over values appear
  if (ux * vy - uy * vx < 0) ang = -ang;
  return ang;
};

var tmpVec = new THREE.Vector2();

// Parameters to describe ellipse arc
var EllipseArc = /*#__PURE__*/function () {

  function EllipseArc(cx, cy, rx, ry, rotation, startAngle, endAngle, ccw) {_classCallCheck(this, EllipseArc);
    this.set(cx, cy, rx, ry, rotation, startAngle, endAngle, ccw);
  }_createClass(EllipseArc, [{ key: "set", value: function set(

    cx, cy, rx, ry, rotation, startAngle, endAngle, ccw) {
      // center
      this.cx = cx;
      this.cy = cy;

      // radii
      this.rx = rx;
      this.ry = ry;

      // angle in radians
      this.startAngle = startAngle;
      this.endAngle = endAngle;

      // If true, arc runs from startAngle in counterclockwise direction, otherwise clockwise
      this.ccw = ccw;

      // ellipse rotation in radians
      this.rotation = rotation;

      return this;
    }

    /**
       * Convert SVG-style specification of an ellipse arc into an ellipse arc with center and start/end angle that is easier to sample.
       * Implementation is based on parseArcCommand() helper function in THREE.SVGLoader. All output angles in radians.
       * 
       * https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
       * https://mortoray.com/2017/02/16/rendering-an-svg-elliptical-arc-as-bezier-curves/ Appendix: Endpoint to center arc conversion
       * 
       * @param {number}   rx, ry        - radii in x/y axis (before xAxisRoation)
       * @param {number}   xAxisRotation - ccw rotation of the ellipse axes in degrees
       * @param {bool}     largeArcFlag  - whether to use short or long path along the ellipse
       * @param {bool}     sweepFlag     - whether to run counterclockwise around the arc from the startPoint
       * @param {Vector2}  start, end    - startPoint and endPoint of the arc
       */ }, { key: "setFromSvgArc", value: function setFromSvgArc(
    rx, ry, xAxisRotation, largeArcFlag, sweepFlag, start, end) {

      // get rotation in radians
      var rotation = xAxisRotation * Math.PI / 180;

      // Ensure radii are positive
      rx = Math.abs(rx);
      ry = Math.abs(ry);

      // To avoid NaNs and for consistency with browser SVG behavior:
      // If any radius is 0, fall back to a straight segment. An EllipseCurve is not able to represent a straight line segment.
      // However, we can resemble this using an arc whose radius is large enough so that the angle difference is hardly noticeable.
      if (rx == 0 || ry == 0) {
        // Choose radius large enough so that 0.01 degrees correspond to the (start, end) distance.
        var minAngleDelta = 0.01;
        var dist = tmpVec.copy(start).distanceTo(end); // still works if start/end are just {x,y} pairs
        var perimeter = dist * 360 / minAngleDelta;
        var radius = perimeter / (2.0 * Math.PI);
        rx = radius;
        ry = radius;
      }

      // Compute (x1′, y1′)
      var dx2 = (start.x - end.x) / 2.0;
      var dy2 = (start.y - end.y) / 2.0;
      var x1p = Math.cos(rotation) * dx2 + Math.sin(rotation) * dy2;
      var y1p = -Math.sin(rotation) * dx2 + Math.cos(rotation) * dy2;

      // Compute (cx′, cy′)
      var rxs = rx * rx;
      var rys = ry * ry;
      var x1ps = x1p * x1p;
      var y1ps = y1p * y1p;

      // Ensure radii are large enough
      var cr = x1ps / rxs + y1ps / rys;

      if (cr > 1) {
        // scale up rx,ry equally so cr == 1
        var s = Math.sqrt(cr);
        rx = s * rx;
        ry = s * ry;
        rxs = rx * rx;
        rys = ry * ry;
      }

      var dq = rxs * y1ps + rys * x1ps;
      var pq = (rxs * rys - dq) / dq;
      var q = Math.sqrt(Math.max(0, pq));
      if (largeArcFlag === sweepFlag) q = -q;
      var cxp = q * rx * y1p / ry;
      var cyp = -q * ry * x1p / rx;

      // Step 3: Compute (cx, cy) from (cx′, cy′)
      var cx = Math.cos(rotation) * cxp - Math.sin(rotation) * cyp + (start.x + end.x) / 2;
      var cy = Math.sin(rotation) * cxp + Math.cos(rotation) * cyp + (start.y + end.y) / 2;

      // Step 4: Compute θ1 and Δθ
      var theta = svgAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
      var delta = svgAngle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry) % (Math.PI * 2);

      // Set curve params
      this.cx = cx;
      this.cy = cy;
      this.rx = rx;
      this.ry = ry;
      this.rotation = rotation;
      this.startAngle = theta;
      this.endAngle = theta + delta;
      this.ccw = sweepFlag;

      return this;
    }

    // Sample point along arc. 
    //  @param {number}  t - 0: startPoint, 1: endPoint
    //  @param {Vector2} [target]
    //  @returns Vector2
  }, { key: "getPoint", value: function getPoint(t, target) {

      var start = this.startAngle;
      var end = this.endAngle;

      // In case the arc is clockwise...
      if (!this.ccw) {
        // Swap start/end to get opposite ccw arc and sample it at position 1-t instead.
        start = this.endAngle;
        end = this.startAngle;
        t = 1.0 - t;
      }

      return getEllipseArcPoint(t, this.cx, this.cy, this.rx, this.ry, start, end, this.rotation, target);
    } }, { key: "isValid", value: function isValid()

    {
      return isFinite(this.cx) && isFinite(this.cy) && isFinite(this.rx) && isFinite(this.ry) && isFinite(this.rotation) &&
      isFinite(this.startAngle) && isFinite(this.endAngle);
    }

    // @param {Box2} [targetBox]
    // returns {Box2}
  }, { key: "computeBBox", value: function computeBBox(targetBox) {var _this = this;

      // compute extreme points of ellipse equation
      var tanPhi = Math.tan(this.rotation);
      var thetaX1 = -Math.atan(this.ry * tanPhi / this.rx);
      var thetaX2 = Math.PI - Math.atan(this.ry * tanPhi / this.rx);
      var thetaY1 = Math.atan(this.ry / (tanPhi * this.rx));
      var thetaY2 = Math.PI + Math.atan(this.ry / (tanPhi * this.rx));

      // Clear targetBox or create a new one
      var box = targetBox ? targetBox.makeEmpty() : new THREE.Box2();

      // Helper function to add an ellipse point that we obtain at angle theta in the ellipse equation
      var addEllipsePoint = function addEllipsePoint(theta) {
        var p = getEllipsePoint(theta, _this.cx, _this.cy, _this.rx, _this.ry, _this.rotation);
        box.expandByPoint(p);
      };

      addEllipsePoint(this.startAngle);
      addEllipsePoint(this.endAngle);

      // Add all extreme points to the bbox that are inside the arc
      angleInsideArc(thetaX1, this.startAngle, this.endAngle, this.ccw) && addEllipsePoint(thetaX1);
      angleInsideArc(thetaX2, this.startAngle, this.endAngle, this.ccw) && addEllipsePoint(thetaX2);
      angleInsideArc(thetaY1, this.startAngle, this.endAngle, this.ccw) && addEllipsePoint(thetaY1);
      angleInsideArc(thetaY2, this.startAngle, this.endAngle, this.ccw) && addEllipsePoint(thetaY2);

      return box;
    }

    // Samples an ellipse arc as lineTo segments that are added a canvas context object.
    // Note: lineTo() is not called with the arc starting point. ctx is expected to end at the arc start point already.
    //
    //  @param {Path2D|LmvCanvasContext|CanvasContext} ctx - line segment are added by ctx.lineTo(x,y) calls.
    //  @param {number} maxSegmentCount  - Maximum number of line segments
    //  @param {number} minSegmentLength - Skip small segments below this length
  }, { key: "tesselate", value: function tesselate(ctx, maxSegments, minSegmentLength) {

      // Init lastX/lastY
      var lastPoint = this.getPoint(0);

      // Note that we only iterate over inner points.
      // Start point is not added by this function and endpoint is added separately below
      for (var i = 1; i < maxSegments; i++) {

        // get next point along arc
        var t = i / maxSegments;
        var _p = this.getPoint(t, tmpVec);

        // Skip point if too close to previous point
        var dist = _p.distanceTo(lastPoint);
        if (dist < minSegmentLength) {
          continue;
        }

        // add line segment
        ctx.lineTo(_p.x, _p.y);
        lastPoint.copy(_p);
      }

      // Always add end point (without minSegmentLength-check)
      var p = this.getPoint(1.0, tmpVec);
      ctx.lineTo(p.x, p.y);
    } }, { key: "getAngleDelta", value: function getAngleDelta()

    {
      return _getAngleDelta(this.startAngle, this.endAngle, this.ccw);
    } }]);return EllipseArc;}();

/***/ }),

/***/ "./extensions/CompGeom/fuzzy-math.js":
/*!*******************************************!*\
  !*** ./extensions/CompGeom/fuzzy-math.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOL": () => (/* binding */ TOL),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "isEqual": () => (/* binding */ isEqual)
/* harmony export */ });

var TOL = 1e-6;

function isZero(f) {
  return Math.abs(f) < TOL;
}

function isEqual(a, b) {
  return isZero(a - b);
}

/***/ }),

/***/ "./extensions/CompGeom/index.js":
/*!**************************************!*\
  !*** ./extensions/CompGeom/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}
var av = Autodesk.Viewing;
var avecg = AutodeskNamespace('Autodesk.Viewing.Extensions.CompGeom');

function _export(m, ns) {
  for (var prop in m) {
    if (Object.prototype.hasOwnProperty.call(m, prop)) {
      //Export directly into the module (e.g. for node.js use, where LMV is used via require instead from global namespace)
      module.exports[prop] = m[prop];

      //Export into the desired viewer namespace
      ns[prop] = m[prop];
    }
  }
}

_export(__webpack_require__(/*! ./contour-set */ "./extensions/CompGeom/contour-set.js"), avecg);
_export(__webpack_require__(/*! ./edge-set */ "./extensions/CompGeom/edge-set.js"), avecg);
_export(__webpack_require__(/*! ./dcel */ "./extensions/CompGeom/dcel.js"), avecg);
_export(__webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js"), avecg);
_export(__webpack_require__(/*! ./quad-tree */ "./extensions/CompGeom/quad-tree.js"), avecg);
_export(__webpack_require__(/*! ./x-box-box */ "./extensions/CompGeom/x-box-box.js"), avecg);
_export(__webpack_require__(/*! ./x-box-plane */ "./extensions/CompGeom/x-box-plane.js"), avecg);
_export(__webpack_require__(/*! ./x-line-box */ "./extensions/CompGeom/x-line-box.js"), avecg);
_export(__webpack_require__(/*! ./x-line-line */ "./extensions/CompGeom/x-line-line.js"), avecg);
_export(__webpack_require__(/*! ./x-mesh-plane */ "./extensions/CompGeom/x-mesh-plane.js"), avecg);
_export(__webpack_require__(/*! ./x-plane-segment */ "./extensions/CompGeom/x-plane-segment.js"), avecg);
_export(__webpack_require__(/*! ./x-triangle-plane */ "./extensions/CompGeom/x-triangle-plane.js"), avecg);
_export(__webpack_require__(/*! ./interval-tree */ "./extensions/CompGeom/interval-tree.js"), avecg);
_export(__webpack_require__(/*! ./complex-polygon */ "./extensions/CompGeom/complex-polygon.js"), avecg);
_export(__webpack_require__(/*! ./point-list */ "./extensions/CompGeom/point-list.js"), avecg);
_export(__webpack_require__(/*! ./ThirdParty/lmv_poly2tri */ "./extensions/CompGeom/ThirdParty/lmv_poly2tri.js"), avecg);
_export(__webpack_require__(/*! ./ellipse */ "./extensions/CompGeom/ellipse.js"), avecg);
_export(__webpack_require__(/*! ./bezier */ "./extensions/CompGeom/bezier.js"), avecg);
_export(__webpack_require__(/*! ./LmvCanvasContext */ "./extensions/CompGeom/LmvCanvasContext.js"), avecg);
_export(__webpack_require__(/*! ./path2d */ "./extensions/CompGeom/path2d.js"), avecg);

/**
                                      * Computational geometry library extension
                                      */var
CompGeomExtension = /*#__PURE__*/function (_av$Extension) {"use strict";_inherits(CompGeomExtension, _av$Extension);var _super = _createSuper(CompGeomExtension);

  function CompGeomExtension(viewer, options) {_classCallCheck(this, CompGeomExtension);return _super.call(this,
    viewer, options);
  }_createClass(CompGeomExtension, [{ key: "load", value: function load()

    {return true;} }, { key: "unload", value: function unload()
    {return true;} }, { key: "activate", value: function activate()
    {return true;} }, { key: "deactivate", value: function deactivate()
    {return false;} }]);return CompGeomExtension;}(av.Extension);


// The ExtensionManager requires an extension to be registered.
av.theExtensionManager.registerExtension('Autodesk.CompGeom', CompGeomExtension);

/***/ }),

/***/ "./extensions/CompGeom/interval-tree.js":
/*!**********************************************!*\
  !*** ./extensions/CompGeom/interval-tree.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntervalTree": () => (/* binding */ IntervalTree)
/* harmony export */ });
function IntervalNode() {

  this.bbox = new THREE.Box2();
  this.left = null;
  this.right = null;
  this.node_edges = [];
}

//Acceleration structure for point-in-polygon checking.
//Takes in a list of points and edges indexing into those points.
//The Point-in-polygon check is a simple even-odd test based on counting
//number of edges intersected by a ray from the input point to infinity.
function IntervalTree(pts, edges, bbox) {

  this.pts = pts;
  this.edges = edges;
  this.bbox = bbox;
  this.pipResult = false;

}



IntervalTree.prototype.splitNode = function (node) {

  if (node.bbox.min.y >= node.bbox.max.y)
  return;

  if (node.node_edges.length < 3)
  return;

  var split = 0.5 * (node.bbox.min.y + node.bbox.max.y);

  //node.bbox.makeEmpty();

  node.left = new IntervalNode();
  node.right = new IntervalNode();

  var pts = this.pts;
  var ne = node.node_edges;
  var remaining_node_edges = [];
  var tmpPt = new THREE.Vector2();

  for (var i = 0; i < ne.length; i++) {

    var e = this.edges[ne[i]];

    var p1y = pts[e.p1].y;
    var p2y = pts[e.p2].y;

    if (p1y > p2y) {
      var tmp = p1y;
      p1y = p2y;
      p2y = tmp;
    }

    var boxPtr = null;

    if (p2y < split) {
      node.left.node_edges.push(ne[i]);
      boxPtr = node.left.bbox;
    } else if (p1y > split) {
      node.right.node_edges.push(ne[i]);
      boxPtr = node.right.bbox;
    } else {
      remaining_node_edges.push(ne[i]);
      //boxPtr = node.bbox;
    }

    if (boxPtr) {
      tmpPt.set(pts[e.p1].x, pts[e.p1].y);
      boxPtr.expandByPoint(tmpPt);
      tmpPt.set(pts[e.p2].x, pts[e.p2].y);
      boxPtr.expandByPoint(tmpPt);
    }
  }

  node.node_edges = remaining_node_edges;

  if (node.left.node_edges.length)
  this.splitNode(node.left);
  if (node.right.node_edges.length)
  this.splitNode(node.right);
};


IntervalTree.prototype.build = function () {

  this.root = new IntervalNode();

  var edge_indices = this.root.node_edges;
  for (var i = 0; i < this.edges.length; i++) {
    edge_indices.push(i);}

  this.root.bbox.copy(this.bbox);

  //split recursively
  this.splitNode(this.root);
};




IntervalTree.prototype.pointInPolygonRec = function (node, x, y) {

  if (node.bbox.min.y <= y && node.bbox.max.y >= y) {

    var pts = this.pts;
    var ne = node.node_edges;

    for (var i = 0, iEnd = ne.length; i < iEnd; i++) {

      var e = this.edges[ne[i]];

      // get the last point in the polygon
      var p1 = pts[e.p1];
      var vtx0X = p1.x;
      var vtx0Y = p1.y;

      // get test bit for above/below X axis
      var yflag0 = vtx0Y >= y;

      var p2 = pts[e.p2];
      var vtx1X = p2.x;
      var vtx1Y = p2.y;

      var yflag1 = vtx1Y >= y;

      // Check if endpoints straddle (are on opposite sides) of X axis
      // (i.e. the Y's differ); if so, +X ray could intersect this edge.
      // The old test also checked whether the endpoints are both to the
      // right or to the left of the test point.  However, given the faster
      // intersection point computation used below, this test was found to
      // be a break-even proposition for most polygons and a loser for
      // triangles (where 50% or more of the edges which survive this test
      // will cross quadrants and so have to have the X intersection computed
      // anyway).  I credit Joseph Samosky with inspiring me to try dropping
      // the "both left or both right" part of my code.
      if (yflag0 != yflag1)
      {
        // Check intersection of pgon segment with +X ray.
        // Note if >= point's X; if so, the ray hits it.
        // The division operation is avoided for the ">=" test by checking
        // the sign of the first vertex wrto the test point; idea inspired
        // by Joseph Samosky's and Mark Haigh-Hutchinson's different
        // polygon inclusion tests.
        if ((vtx1Y - y) * (vtx0X - vtx1X) >=
        (vtx1X - x) * (vtx0Y - vtx1Y) == yflag1)
        {
          this.pipResult = !this.pipResult;
        }
      }

    }

  }

  var nl = node.left;
  if (nl && nl.bbox.min.y <= y && nl.bbox.max.y >= y) {
    this.pointInPolygonRec(nl, x, y);
  }

  var nr = node.right;
  if (nr && nr.bbox.min.y <= y && nr.bbox.max.y >= y) {
    this.pointInPolygonRec(nr, x, y);
  }

};

IntervalTree.prototype.pointInPolygon = function (x, y) {

  this.pipResult = false;

  this.pointInPolygonRec(this.root, x, y);

  return this.pipResult;

};

/***/ }),

/***/ "./extensions/CompGeom/node_modules/clipper-lib-fpoint/clipper.js":
/*!************************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/clipper-lib-fpoint/clipper.js ***!
  \************************************************************************/
/***/ ((module) => {

/*******************************************************************************
 *                                                                              *
 * Author    :  Angus Johnson                                                   *
 * Version   :  6.4.2                                                           *
 * Date      :  27 February 2017                                                *
 * Website   :  http://www.angusj.com                                           *
 * Copyright :  Angus Johnson 2010-2017                                         *
 *                                                                              *
 * License:                                                                     *
 * Use, modification & distribution is subject to Boost Software License Ver 1. *
 * http://www.boost.org/LICENSE_1_0.txt                                         *
 *                                                                              *
 * Attributions:                                                                *
 * The code in this library is an extension of Bala Vatti's clipping algorithm: *
 * "A generic solution to polygon clipping"                                     *
 * Communications of the ACM, Vol 35, Issue 7 (July 1992) pp 56-63.             *
 * http://portal.acm.org/citation.cfm?id=129906                                 *
 *                                                                              *
 * Computer graphics and geometric modeling: implementation and algorithms      *
 * By Max K. Agoston                                                            *
 * Springer; 1 edition (January 4, 2005)                                        *
 * http://books.google.com/books?q=vatti+clipping+agoston                       *
 *                                                                              *
 * See also:                                                                    *
 * "Polygon Offsetting by Computing Winding Numbers"                            *
 * Paper no. DETC2005-85513 pp. 565-575                                         *
 * ASME 2005 International Design Engineering Technical Conferences             *
 * and Computers and Information in Engineering Conference (IDETC/CIE2005)      *
 * September 24-28, 2005 , Long Beach, California, USA                          *
 * http://www.me.berkeley.edu/~mcmains/pubs/DAC05OffsetPolygon.pdf              *
 *                                                                              *
 *******************************************************************************/
/*******************************************************************************
                                                                                   *                                                                              *
                                                                                   * Author    :  Timo                                                            *
                                                                                   * Version   :  6.4.2.2 (FPoint)                                                *
                                                                                   * Date      :  8 September 2017                                                *
                                                                                   *                                                                              *
                                                                                   * This is a translation of the C# Clipper library to Javascript.               *
                                                                                   *                                                                              *
                                                                                   *******************************************************************************/
(function ()
{
  "use strict";
  var ClipperLib = {};
  ClipperLib.version = '6.4.2.2';

  //UseLines: Enables open path clipping. Adds a very minor cost to performance.
  ClipperLib.use_lines = true;

  //ClipperLib.use_xyz: adds a Z member to FPoint. Adds a minor cost to performance.
  ClipperLib.use_xyz = false;

  var isNode = false;
  if ( true && module.exports)
  {
    module.exports = ClipperLib;
    isNode = true;
  } else

  {
    if (typeof document !== "undefined") window.ClipperLib = ClipperLib;else
    self['ClipperLib'] = ClipperLib;
  }
  var navigator_appName;
  if (!isNode)
  {
    var nav = navigator.userAgent.toString().toLowerCase();
    navigator_appName = navigator.appName;
  } else

  {
    var nav = "chrome"; // Node.js uses Chrome's V8 engine
    navigator_appName = "Netscape"; // Firefox, Chrome and Safari returns "Netscape", so Node.js should also
  }
  // Browser test to speedup performance critical functions
  var browser = {};

  if (nav.indexOf("chrome") != -1 && nav.indexOf("chromium") == -1) browser.chrome = 1;else
  browser.chrome = 0;
  if (nav.indexOf("chromium") != -1) browser.chromium = 1;else
  browser.chromium = 0;
  if (nav.indexOf("safari") != -1 && nav.indexOf("chrome") == -1 && nav.indexOf("chromium") == -1) browser.safari = 1;else
  browser.safari = 0;
  if (nav.indexOf("firefox") != -1) browser.firefox = 1;else
  browser.firefox = 0;
  if (nav.indexOf("firefox/17") != -1) browser.firefox17 = 1;else
  browser.firefox17 = 0;
  if (nav.indexOf("firefox/15") != -1) browser.firefox15 = 1;else
  browser.firefox15 = 0;
  if (nav.indexOf("firefox/3") != -1) browser.firefox3 = 1;else
  browser.firefox3 = 0;
  if (nav.indexOf("opera") != -1) browser.opera = 1;else
  browser.opera = 0;
  if (nav.indexOf("msie 10") != -1) browser.msie10 = 1;else
  browser.msie10 = 0;
  if (nav.indexOf("msie 9") != -1) browser.msie9 = 1;else
  browser.msie9 = 0;
  if (nav.indexOf("msie 8") != -1) browser.msie8 = 1;else
  browser.msie8 = 0;
  if (nav.indexOf("msie 7") != -1) browser.msie7 = 1;else
  browser.msie7 = 0;
  if (nav.indexOf("msie ") != -1) browser.msie = 1;else
  browser.msie = 0;

  // Here starts the actual Clipper library:
  // Helper function to support Inheritance in Javascript
  var Inherit = function Inherit(ce, ce2)
  {
    var p;
    if (typeof Object.getOwnPropertyNames === 'undefined')
    {
      for (p in ce2.prototype) {
        if (typeof ce.prototype[p] === 'undefined' || ce.prototype[p] === Object.prototype[p]) ce.prototype[p] = ce2.prototype[p];}
      for (p in ce2) {
        if (typeof ce[p] === 'undefined') ce[p] = ce2[p];}
      ce.$baseCtor = ce2;
    } else

    {
      var props = Object.getOwnPropertyNames(ce2.prototype);
      for (var i = 0; i < props.length; i++) {
        if (typeof Object.getOwnPropertyDescriptor(ce.prototype, props[i]) === 'undefined') Object.defineProperty(ce.prototype, props[i], Object.getOwnPropertyDescriptor(ce2.prototype, props[i]));}
      for (p in ce2) {
        if (typeof ce[p] === 'undefined') ce[p] = ce2[p];}
      ce.$baseCtor = ce2;
    }
  };

  /**
     * @constructor
     */
  ClipperLib.Path = function ()
  {
    return [];
  };

  ClipperLib.Path.prototype.push = Array.prototype.push;

  /**
                                                         * @constructor
                                                         */
  ClipperLib.Paths = function ()
  {
    return []; // Was previously [[]], but caused problems when pushed
  };

  ClipperLib.Paths.prototype.push = Array.prototype.push;

  // PolyTree & PolyNode start
  /**
  * @suppress {missingProperties}
  */
  ClipperLib.PolyNode = function ()
  {
    this.m_Parent = null;
    this.m_polygon = new ClipperLib.Path();
    this.m_Index = 0;
    this.m_jointype = 0;
    this.m_endtype = 0;
    this.m_Childs = [];
    this.IsOpen = false;
  };

  ClipperLib.PolyNode.prototype.IsHoleNode = function ()
  {
    var result = true;
    var node = this.m_Parent;
    while (node !== null)
    {
      result = !result;
      node = node.m_Parent;
    }
    return result;
  };

  ClipperLib.PolyNode.prototype.ChildCount = function ()
  {
    return this.m_Childs.length;
  };

  ClipperLib.PolyNode.prototype.Contour = function ()
  {
    return this.m_polygon;
  };

  ClipperLib.PolyNode.prototype.AddChild = function (Child)
  {
    var cnt = this.m_Childs.length;
    this.m_Childs.push(Child);
    Child.m_Parent = this;
    Child.m_Index = cnt;
  };

  ClipperLib.PolyNode.prototype.GetNext = function ()
  {
    if (this.m_Childs.length > 0)
    return this.m_Childs[0];else

    return this.GetNextSiblingUp();
  };

  ClipperLib.PolyNode.prototype.GetNextSiblingUp = function ()
  {
    if (this.m_Parent === null)
    return null;else
    if (this.m_Index === this.m_Parent.m_Childs.length - 1)
    return this.m_Parent.GetNextSiblingUp();else

    return this.m_Parent.m_Childs[this.m_Index + 1];
  };

  ClipperLib.PolyNode.prototype.Childs = function ()
  {
    return this.m_Childs;
  };

  ClipperLib.PolyNode.prototype.Parent = function ()
  {
    return this.m_Parent;
  };

  ClipperLib.PolyNode.prototype.IsHole = function ()
  {
    return this.IsHoleNode();
  };

  // PolyTree : PolyNode
  /**
   * @suppress {missingProperties}
   * @constructor
   */
  ClipperLib.PolyTree = function ()
  {
    this.m_AllPolys = [];
    ClipperLib.PolyNode.call(this);
  };

  ClipperLib.PolyTree.prototype.Clear = function ()
  {
    for (var i = 0, ilen = this.m_AllPolys.length; i < ilen; i++) {
      this.m_AllPolys[i] = null;}
    this.m_AllPolys.length = 0;
    this.m_Childs.length = 0;
  };

  ClipperLib.PolyTree.prototype.GetFirst = function ()
  {
    if (this.m_Childs.length > 0)
    return this.m_Childs[0];else

    return null;
  };

  ClipperLib.PolyTree.prototype.Total = function ()
  {
    var result = this.m_AllPolys.length;
    //with negative offsets, ignore the hidden outer polygon ...
    if (result > 0 && this.m_Childs[0] !== this.m_AllPolys[0]) result--;
    return result;
  };

  Inherit(ClipperLib.PolyTree, ClipperLib.PolyNode);

  // PolyTree & PolyNode end

  ClipperLib.Clear = function (a)
  {
    a.length = 0;
  };

  //ClipperLib.MaxSteps = 64; // How many steps at maximum in arc in BuildArc() function
  ClipperLib.PI = 3.141592653589793;
  ClipperLib.PI2 = 2 * 3.141592653589793;
  /**
                                          * @constructor
                                          */
  ClipperLib.FPoint = function ()
  {
    var a = arguments,
    alen = a.length;
    this.X = 0;
    this.Y = 0;
    if (ClipperLib.use_xyz)
    {
      this.Z = 0;
      if (alen === 3) // public FPoint(cInt x, cInt y, cInt z = 0)
        {
          this.X = a[0];
          this.Y = a[1];
          this.Z = a[2];
        } else
      if (alen === 2) // public FPoint(cInt x, cInt y)
        {
          this.X = a[0];
          this.Y = a[1];
          this.Z = 0;
        } else
      if (alen === 1)
      {
        if (a[0] instanceof ClipperLib.FPoint) // public FPoint(FPoint dp)
          {
            var dp = a[0];
            this.X = dp.X;
            this.Y = dp.Y;
            this.Z = 0;
          } else
          // public FPoint(FPoint pt)
          {
            var pt = a[0];
            if (typeof pt.Z === "undefined") pt.Z = 0;
            this.X = pt.X;
            this.Y = pt.Y;
            this.Z = pt.Z;
          }
      } else
        // public FPoint()
        {
          this.X = 0;
          this.Y = 0;
          this.Z = 0;
        }
    } else
      // if (!ClipperLib.use_xyz)
      {
        if (alen === 2) // public FPoint(cInt X, cInt Y)
          {
            this.X = a[0];
            this.Y = a[1];
          } else
        if (alen === 1)
        {
          if (a[0] instanceof ClipperLib.FPoint) // public FPoint(FPoint dp)
            {
              var dp = a[0];
              this.X = dp.X;
              this.Y = dp.Y;
            } else
            // public FPoint(FPoint pt)
            {
              var pt = a[0];
              this.X = pt.X;
              this.Y = pt.Y;
            }
        } else
          // public FPoint(FPoint pt)
          {
            this.X = 0;
            this.Y = 0;
          }
      }
  };

  ClipperLib.FPoint.op_Equality = function (a, b)
  {
    //return a == b;
    return a.X === b.X && a.Y === b.Y;
  };

  ClipperLib.FPoint.op_Inequality = function (a, b)
  {
    //return a !== b;
    return a.X !== b.X || a.Y !== b.Y;
  };

  /*
      ClipperLib.FPoint.prototype.Equals = function (obj)
      {
        if (obj === null)
            return false;
        if (obj instanceof ClipperLib.FPoint)
        {
            var a = Cast(obj, ClipperLib.FPoint);
            return (this.X == a.X) && (this.Y == a.Y);
        }
        else
            return false;
      };
     	*/


  /**
         * @constructor
         */
  ClipperLib.FPoint0 = function ()
  {
    this.X = 0;
    this.Y = 0;
    if (ClipperLib.use_xyz)
    this.Z = 0;
  };

  ClipperLib.FPoint0.prototype = ClipperLib.FPoint.prototype;

  /**
                                                              * @constructor
                                                              */
  ClipperLib.FPoint1 = function (pt)
  {
    this.X = pt.X;
    this.Y = pt.Y;
    if (ClipperLib.use_xyz)
    {
      if (typeof pt.Z === "undefined") this.Z = 0;else
      this.Z = pt.Z;
    }
  };

  ClipperLib.FPoint1.prototype = ClipperLib.FPoint.prototype;

  /**
                                                              * @constructor
                                                              */
  ClipperLib.FPoint1dp = function (dp)
  {
    this.X = dp.X;
    this.Y = dp.Y;
    if (ClipperLib.use_xyz)
    this.Z = 0;
  };

  ClipperLib.FPoint1dp.prototype = ClipperLib.FPoint.prototype;

  /**
                                                                * @constructor
                                                                */
  ClipperLib.FPoint2 = function (x, y, z)
  {
    this.X = x;
    this.Y = y;
    if (ClipperLib.use_xyz)
    {
      if (typeof z === "undefined") this.Z = 0;else
      this.Z = z;
    }
  };

  ClipperLib.FPoint2.prototype = ClipperLib.FPoint.prototype;

  /**
                                                              * @constructor
                                                              */
  ClipperLib.FRect = function ()
  {
    var a = arguments,
    alen = a.length;
    if (alen === 4) // function (l, t, r, b)
      {
        this.left = a[0];
        this.top = a[1];
        this.right = a[2];
        this.bottom = a[3];
      } else
    if (alen === 1) // function (ir)
      {
        var ir = a[0];
        this.left = ir.left;
        this.top = ir.top;
        this.right = ir.right;
        this.bottom = ir.bottom;
      } else
      // function ()
      {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
      }
  };

  /**
     * @constructor
     */
  ClipperLib.FRect0 = function ()
  {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
  };

  ClipperLib.FRect0.prototype = ClipperLib.FRect.prototype;

  /**
                                                            * @constructor
                                                            */
  ClipperLib.FRect1 = function (ir)
  {
    this.left = ir.left;
    this.top = ir.top;
    this.right = ir.right;
    this.bottom = ir.bottom;
  };

  ClipperLib.FRect1.prototype = ClipperLib.FRect.prototype;

  /**
                                                            * @constructor
                                                            */
  ClipperLib.FRect4 = function (l, t, r, b)
  {
    this.left = l;
    this.top = t;
    this.right = r;
    this.bottom = b;
  };

  ClipperLib.FRect4.prototype = ClipperLib.FRect.prototype;

  ClipperLib.ClipType = {
    ctIntersection: 0,
    ctUnion: 1,
    ctDifference: 2,
    ctXor: 3 };


  ClipperLib.PolyType = {
    ptSubject: 0,
    ptClip: 1 };


  ClipperLib.PolyFillType = {
    pftEvenOdd: 0,
    pftNonZero: 1,
    pftPositive: 2,
    pftNegative: 3 };


  ClipperLib.JoinType = {
    jtSquare: 0,
    jtRound: 1,
    jtMiter: 2 };


  ClipperLib.EndType = {
    etOpenSquare: 0,
    etOpenRound: 1,
    etOpenButt: 2,
    etClosedLine: 3,
    etClosedPolygon: 4 };


  ClipperLib.EdgeSide = {
    esLeft: 0,
    esRight: 1 };


  ClipperLib.Direction = {
    dRightToLeft: 0,
    dLeftToRight: 1 };


  /**
                       * @constructor
                       */
  ClipperLib.TEdge = function ()
  {
    this.Bot = new ClipperLib.FPoint0();
    this.Curr = new ClipperLib.FPoint0(); //current (updated for every new scanbeam)
    this.Top = new ClipperLib.FPoint0();
    this.Delta = new ClipperLib.FPoint0();
    this.Dx = 0;
    this.PolyTyp = ClipperLib.PolyType.ptSubject;
    this.Side = ClipperLib.EdgeSide.esLeft; //side only refers to current side of solution poly
    this.WindDelta = 0; //1 or -1 depending on winding direction
    this.WindCnt = 0;
    this.WindCnt2 = 0; //winding count of the opposite polytype
    this.OutIdx = 0;
    this.Next = null;
    this.Prev = null;
    this.NextInLML = null;
    this.NextInAEL = null;
    this.PrevInAEL = null;
    this.NextInSEL = null;
    this.PrevInSEL = null;
  };

  /**
     * @constructor
     */
  ClipperLib.IntersectNode = function ()
  {
    this.Edge1 = null;
    this.Edge2 = null;
    this.Pt = new ClipperLib.FPoint0();
  };

  ClipperLib.MyIntersectNodeSort = function () {};

  ClipperLib.MyIntersectNodeSort.Compare = function (node1, node2)
  {
    var i = node2.Pt.Y - node1.Pt.Y;
    if (i > 0) return 1;else
    if (i < 0) return -1;else
    return 0;
  };

  /**
     * @constructor
     */
  ClipperLib.LocalMinima = function ()
  {
    this.Y = 0;
    this.LeftBound = null;
    this.RightBound = null;
    this.Next = null;
  };

  /**
     * @constructor
     */
  ClipperLib.Scanbeam = function ()
  {
    this.Y = 0;
    this.Next = null;
  };

  /**
     * @constructor
     */
  ClipperLib.Maxima = function ()
  {
    this.X = 0;
    this.Next = null;
    this.Prev = null;
  };

  //OutRec: contains a path in the clipping solution. Edges in the AEL will
  //carry a pointer to an OutRec when they are part of the clipping solution.
  /**
  * @constructor
  */
  ClipperLib.OutRec = function ()
  {
    this.Idx = 0;
    this.IsHole = false;
    this.IsOpen = false;
    this.FirstLeft = null; //see comments in clipper.pas
    this.Pts = null;
    this.BottomPt = null;
    this.PolyNode = null;
  };

  /**
     * @constructor
     */
  ClipperLib.OutPt = function ()
  {
    this.Idx = 0;
    this.Pt = new ClipperLib.FPoint0();
    this.Next = null;
    this.Prev = null;
  };

  /**
     * @constructor
     */
  ClipperLib.Join = function ()
  {
    this.OutPt1 = null;
    this.OutPt2 = null;
    this.OffPt = new ClipperLib.FPoint0();
  };

  ClipperLib.ClipperBase = function ()
  {
    this.m_MinimaList = null;
    this.m_CurrentLM = null;
    this.m_edges = new Array();
    this.m_HasOpenPaths = false;
    this.PreserveCollinear = false;
    this.m_Scanbeam = null;
    this.m_PolyOuts = null;
    this.m_ActiveEdges = null;
  };

  ClipperLib.ClipperBase.horizontal = -3.4E+38;
  ClipperLib.ClipperBase.Skip = -2;
  ClipperLib.ClipperBase.Unassigned = -1;
  ClipperLib.ClipperBase.tolerance = 1E-20;

  // The MAX_VALUE property has a value of 1.7976931348623157e+308. Values larger than MAX_VALUE are represented as "Infinity".
  //MIN_VALUE has a value of 5e-324. Values smaller than MIN_VALUE ("underflow values") are converted to 0.
  ClipperLib.ClipperBase.maxValue = Math.sqrt(Number.MAX_VALUE); // 1.3407807929942596e+154
  ClipperLib.ClipperBase.minValue = Math.sqrt(Number.MIN_VALUE); // 2.2227587494850775e-162

  ClipperLib.ClipperBase.near_zero = function (val)
  {
    return val > -ClipperLib.ClipperBase.tolerance && val < ClipperLib.ClipperBase.tolerance;
  };

  ClipperLib.ClipperBase.IsHorizontal = function (e)
  {
    return e.Delta.Y === 0;
  };

  ClipperLib.ClipperBase.prototype.PointIsVertex = function (pt, pp)
  {
    var pp2 = pp;
    do {
      if (ClipperLib.FPoint.op_Equality(pp2.Pt, pt))
      return true;
      pp2 = pp2.Next;
    } while (
    pp2 !== pp);
    return false;
  };

  ClipperLib.ClipperBase.prototype.PointOnLineSegment = function (pt, linePt1, linePt2)
  {
    return pt.X === linePt1.X && pt.Y === linePt1.Y || pt.X === linePt2.X && pt.Y === linePt2.Y || pt.X > linePt1.X === pt.X < linePt2.X && pt.Y > linePt1.Y === pt.Y < linePt2.Y && (pt.X - linePt1.X) * (linePt2.Y - linePt1.Y) === (linePt2.X - linePt1.X) * (pt.Y - linePt1.Y);
  };

  ClipperLib.ClipperBase.prototype.PointOnPolygon = function (pt, pp)
  {
    var pp2 = pp;
    while (true)
    {
      if (this.PointOnLineSegment(pt, pp2.Pt, pp2.Next.Pt))
      return true;
      pp2 = pp2.Next;
      if (pp2 === pp)
      break;
    }
    return false;
  };

  ClipperLib.ClipperBase.prototype.SlopesEqual = ClipperLib.ClipperBase.SlopesEqual = function ()
  {
    var a = arguments,
    alen = a.length;
    var e1, e2, pt1, pt2, pt3, pt4;
    if (alen === 2) // function (e1, e2)
      {
        e1 = a[0];
        e2 = a[1];
        return e1.Delta.Y * e2.Delta.X === e1.Delta.X * e2.Delta.Y;
      } else
    if (alen === 3) // function (pt1, pt2, pt3)
      {
        pt1 = a[0];
        pt2 = a[1];
        pt3 = a[2];
        return (pt1.Y - pt2.Y) * (pt2.X - pt3.X) - (pt1.X - pt2.X) * (pt2.Y - pt3.Y) === 0;
      } else
      // function (pt1, pt2, pt3, pt4)
      {
        pt1 = a[0];
        pt2 = a[1];
        pt3 = a[2];
        pt4 = a[3];
        return (pt1.Y - pt2.Y) * (pt3.X - pt4.X) - (pt1.X - pt2.X) * (pt3.Y - pt4.Y) === 0;
      }
  };

  ClipperLib.ClipperBase.SlopesEqual3 = function (e1, e2)
  {
    return e1.Delta.Y * e2.Delta.X === e1.Delta.X * e2.Delta.Y;
  };

  ClipperLib.ClipperBase.SlopesEqual4 = function (pt1, pt2, pt3)
  {
    return (pt1.Y - pt2.Y) * (pt2.X - pt3.X) - (pt1.X - pt2.X) * (pt2.Y - pt3.Y) === 0;
  };

  ClipperLib.ClipperBase.SlopesEqual5 = function (pt1, pt2, pt3, pt4)
  {
    return (pt1.Y - pt2.Y) * (pt3.X - pt4.X) - (pt1.X - pt2.X) * (pt3.Y - pt4.Y) === 0;
  };

  ClipperLib.ClipperBase.prototype.Clear = function ()
  {
    this.DisposeLocalMinimaList();
    for (var i = 0, ilen = this.m_edges.length; i < ilen; ++i)
    {
      for (var j = 0, jlen = this.m_edges[i].length; j < jlen; ++j) {
        this.m_edges[i][j] = null;}
      ClipperLib.Clear(this.m_edges[i]);
    }
    ClipperLib.Clear(this.m_edges);
    this.m_HasOpenPaths = false;
  };

  ClipperLib.ClipperBase.prototype.DisposeLocalMinimaList = function ()
  {
    while (this.m_MinimaList !== null)
    {
      var tmpLm = this.m_MinimaList.Next;
      this.m_MinimaList = null;
      this.m_MinimaList = tmpLm;
    }
    this.m_CurrentLM = null;
  };

  ClipperLib.ClipperBase.prototype.RangeTest = function (pt)
  {
    if (pt.X > ClipperLib.ClipperBase.maxValue || pt.X < -ClipperLib.ClipperBase.maxValue ||
    pt.Y > ClipperLib.ClipperBase.maxValue || pt.Y < -ClipperLib.ClipperBase.maxValue ||
    pt.X > 0 && pt.X < ClipperLib.ClipperBase.minValue ||
    pt.Y > 0 && pt.Y < ClipperLib.ClipperBase.minValue ||
    pt.X < 0 && pt.X > -ClipperLib.ClipperBase.minValue ||
    pt.Y < 0 && pt.Y > -ClipperLib.ClipperBase.minValue)
    ClipperLib.Error("Coordinate outside allowed range in RangeTest().");
  };

  ClipperLib.ClipperBase.prototype.InitEdge = function (e, eNext, ePrev, pt)
  {
    e.Next = eNext;
    e.Prev = ePrev;
    //e.Curr = pt;
    e.Curr.X = pt.X;
    e.Curr.Y = pt.Y;
    if (ClipperLib.use_xyz) e.Curr.Z = pt.Z;
    e.OutIdx = -1;
  };

  ClipperLib.ClipperBase.prototype.InitEdge2 = function (e, polyType)
  {
    if (e.Curr.Y >= e.Next.Curr.Y)
    {
      //e.Bot = e.Curr;
      e.Bot.X = e.Curr.X;
      e.Bot.Y = e.Curr.Y;
      if (ClipperLib.use_xyz) e.Bot.Z = e.Curr.Z;
      //e.Top = e.Next.Curr;
      e.Top.X = e.Next.Curr.X;
      e.Top.Y = e.Next.Curr.Y;
      if (ClipperLib.use_xyz) e.Top.Z = e.Next.Curr.Z;
    } else

    {
      //e.Top = e.Curr;
      e.Top.X = e.Curr.X;
      e.Top.Y = e.Curr.Y;
      if (ClipperLib.use_xyz) e.Top.Z = e.Curr.Z;
      //e.Bot = e.Next.Curr;
      e.Bot.X = e.Next.Curr.X;
      e.Bot.Y = e.Next.Curr.Y;
      if (ClipperLib.use_xyz) e.Bot.Z = e.Next.Curr.Z;
    }
    this.SetDx(e);
    e.PolyTyp = polyType;
  };

  ClipperLib.ClipperBase.prototype.FindNextLocMin = function (E)
  {
    var E2;
    for (;;)
    {
      while (ClipperLib.FPoint.op_Inequality(E.Bot, E.Prev.Bot) || ClipperLib.FPoint.op_Equality(E.Curr, E.Top)) {
        E = E.Next;}
      if (E.Dx !== ClipperLib.ClipperBase.horizontal && E.Prev.Dx !== ClipperLib.ClipperBase.horizontal)
      break;
      while (E.Prev.Dx === ClipperLib.ClipperBase.horizontal) {
        E = E.Prev;}
      E2 = E;
      while (E.Dx === ClipperLib.ClipperBase.horizontal) {
        E = E.Next;}
      if (E.Top.Y === E.Prev.Bot.Y)
      continue;
      //ie just an intermediate horz.
      if (E2.Prev.Bot.X < E.Bot.X)
      E = E2;
      break;
    }
    return E;
  };

  ClipperLib.ClipperBase.prototype.ProcessBound = function (E, LeftBoundIsForward)
  {
    var EStart;
    var Result = E;
    var Horz;

    if (Result.OutIdx === ClipperLib.ClipperBase.Skip)
    {
      //check if there are edges beyond the skip edge in the bound and if so
      //create another LocMin and calling ProcessBound once more ...
      E = Result;
      if (LeftBoundIsForward)
      {
        while (E.Top.Y === E.Next.Bot.Y) {E = E.Next;}
        while (E !== Result && E.Dx === ClipperLib.ClipperBase.horizontal) {E = E.Prev;}
      } else

      {
        while (E.Top.Y === E.Prev.Bot.Y) {E = E.Prev;}
        while (E !== Result && E.Dx === ClipperLib.ClipperBase.horizontal) {E = E.Next;}
      }
      if (E === Result)
      {
        if (LeftBoundIsForward) Result = E.Next;else
        Result = E.Prev;
      } else

      {
        //there are more edges in the bound beyond result starting with E
        if (LeftBoundIsForward)
        E = Result.Next;else

        E = Result.Prev;
        var locMin = new ClipperLib.LocalMinima();
        locMin.Next = null;
        locMin.Y = E.Bot.Y;
        locMin.LeftBound = null;
        locMin.RightBound = E;
        E.WindDelta = 0;
        Result = this.ProcessBound(E, LeftBoundIsForward);
        this.InsertLocalMinima(locMin);
      }
      return Result;
    }

    if (E.Dx === ClipperLib.ClipperBase.horizontal)
    {
      //We need to be careful with open paths because this may not be a
      //true local minima (ie E may be following a skip edge).
      //Also, consecutive horz. edges may start heading left before going right.
      if (LeftBoundIsForward) EStart = E.Prev;else
      EStart = E.Next;

      if (EStart.Dx === ClipperLib.ClipperBase.horizontal) //ie an adjoining horizontal skip edge
        {
          if (EStart.Bot.X !== E.Bot.X && EStart.Top.X !== E.Bot.X)
          this.ReverseHorizontal(E);
        } else
      if (EStart.Bot.X !== E.Bot.X)
      this.ReverseHorizontal(E);
    }

    EStart = E;
    if (LeftBoundIsForward)
    {
      while (Result.Top.Y === Result.Next.Bot.Y && Result.Next.OutIdx !== ClipperLib.ClipperBase.Skip) {
        Result = Result.Next;}
      if (Result.Dx === ClipperLib.ClipperBase.horizontal && Result.Next.OutIdx !== ClipperLib.ClipperBase.Skip)
      {
        //nb: at the top of a bound, horizontals are added to the bound
        //only when the preceding edge attaches to the horizontal's left vertex
        //unless a Skip edge is encountered when that becomes the top divide
        Horz = Result;
        while (Horz.Prev.Dx === ClipperLib.ClipperBase.horizontal) {
          Horz = Horz.Prev;}
        if (Horz.Prev.Top.X > Result.Next.Top.X)
        Result = Horz.Prev;
      }
      while (E !== Result)
      {
        E.NextInLML = E.Next;
        if (E.Dx === ClipperLib.ClipperBase.horizontal && E !== EStart && E.Bot.X !== E.Prev.Top.X)
        this.ReverseHorizontal(E);
        E = E.Next;
      }
      if (E.Dx === ClipperLib.ClipperBase.horizontal && E !== EStart && E.Bot.X !== E.Prev.Top.X)
      this.ReverseHorizontal(E);
      Result = Result.Next;
      //move to the edge just beyond current bound
    } else

    {
      while (Result.Top.Y === Result.Prev.Bot.Y && Result.Prev.OutIdx !== ClipperLib.ClipperBase.Skip) {
        Result = Result.Prev;}
      if (Result.Dx === ClipperLib.ClipperBase.horizontal && Result.Prev.OutIdx !== ClipperLib.ClipperBase.Skip)
      {
        Horz = Result;
        while (Horz.Next.Dx === ClipperLib.ClipperBase.horizontal) {
          Horz = Horz.Next;}
        if (Horz.Next.Top.X === Result.Prev.Top.X || Horz.Next.Top.X > Result.Prev.Top.X)
        {
          Result = Horz.Next;
        }
      }
      while (E !== Result)
      {
        E.NextInLML = E.Prev;
        if (E.Dx === ClipperLib.ClipperBase.horizontal && E !== EStart && E.Bot.X !== E.Next.Top.X)
        this.ReverseHorizontal(E);
        E = E.Prev;
      }
      if (E.Dx === ClipperLib.ClipperBase.horizontal && E !== EStart && E.Bot.X !== E.Next.Top.X)
      this.ReverseHorizontal(E);
      Result = Result.Prev;
      //move to the edge just beyond current bound
    }

    return Result;
  };

  ClipperLib.ClipperBase.prototype.AddPath = function (pg, polyType, Closed)
  {
    if (ClipperLib.use_lines)
    {
      if (!Closed && polyType === ClipperLib.PolyType.ptClip)
      ClipperLib.Error("AddPath: Open paths must be subject.");
    } else

    {
      if (!Closed)
      ClipperLib.Error("AddPath: Open paths have been disabled.");
    }
    var highI = pg.length - 1;
    if (Closed)
    while (highI > 0 && ClipperLib.FPoint.op_Equality(pg[highI], pg[0])) {
      --highI;}
    while (highI > 0 && ClipperLib.FPoint.op_Equality(pg[highI], pg[highI - 1])) {
      --highI;}
    if (Closed && highI < 2 || !Closed && highI < 1)
    return false;
    //create a new edge array ...
    var edges = new Array();
    for (var i = 0; i <= highI; i++) {
      edges.push(new ClipperLib.TEdge());}
    var IsFlat = true;
    //1. Basic (first) edge initialization ...

    //edges[1].Curr = pg[1];
    edges[1].Curr.X = pg[1].X;
    edges[1].Curr.Y = pg[1].Y;
    if (ClipperLib.use_xyz) edges[1].Curr.Z = pg[1].Z;

    this.RangeTest(pg[0]);

    this.RangeTest(pg[highI]);

    this.InitEdge(edges[0], edges[1], edges[highI], pg[0]);
    this.InitEdge(edges[highI], edges[0], edges[highI - 1], pg[highI]);
    for (var i = highI - 1; i >= 1; --i)
    {
      this.RangeTest(pg[i]);

      this.InitEdge(edges[i], edges[i + 1], edges[i - 1], pg[i]);
    }

    var eStart = edges[0];
    //2. Remove duplicate vertices, and (when closed) collinear edges ...
    var E = eStart,
    eLoopStop = eStart;
    for (;;)
    {
      //console.log(E.Next, eStart);
      //nb: allows matching start and end points when not Closed ...
      if (E.Curr === E.Next.Curr && (Closed || E.Next !== eStart))
      {
        if (E === E.Next)
        break;
        if (E === eStart)
        eStart = E.Next;
        E = this.RemoveEdge(E);
        eLoopStop = E;
        continue;
      }
      if (E.Prev === E.Next)
      break;else
      if (Closed && ClipperLib.ClipperBase.SlopesEqual4(E.Prev.Curr, E.Curr, E.Next.Curr) && (!this.PreserveCollinear || !this.Pt2IsBetweenPt1AndPt3(E.Prev.Curr, E.Curr, E.Next.Curr)))
      {
        //Collinear edges are allowed for open paths but in closed paths
        //the default is to merge adjacent collinear edges into a single edge.
        //However, if the PreserveCollinear property is enabled, only overlapping
        //collinear edges (ie spikes) will be removed from closed paths.
        if (E === eStart)
        eStart = E.Next;
        E = this.RemoveEdge(E);
        E = E.Prev;
        eLoopStop = E;
        continue;
      }
      E = E.Next;
      if (E === eLoopStop || !Closed && E.Next === eStart) break;
    }
    if (!Closed && E === E.Next || Closed && E.Prev === E.Next)
    return false;
    if (!Closed)
    {
      this.m_HasOpenPaths = true;
      eStart.Prev.OutIdx = ClipperLib.ClipperBase.Skip;
    }
    //3. Do second stage of edge initialization ...
    E = eStart;
    do {
      this.InitEdge2(E, polyType);
      E = E.Next;
      if (IsFlat && E.Curr.Y !== eStart.Curr.Y)
      IsFlat = false;
    } while (
    E !== eStart);
    //4. Finally, add edge bounds to LocalMinima list ...
    //Totally flat paths must be handled differently when adding them
    //to LocalMinima list to avoid endless loops etc ...
    if (IsFlat)
    {
      if (Closed)
      return false;

      E.Prev.OutIdx = ClipperLib.ClipperBase.Skip;

      var locMin = new ClipperLib.LocalMinima();
      locMin.Next = null;
      locMin.Y = E.Bot.Y;
      locMin.LeftBound = null;
      locMin.RightBound = E;
      locMin.RightBound.Side = ClipperLib.EdgeSide.esRight;
      locMin.RightBound.WindDelta = 0;

      for (;;)
      {
        if (E.Bot.X !== E.Prev.Top.X) this.ReverseHorizontal(E);
        if (E.Next.OutIdx === ClipperLib.ClipperBase.Skip) break;
        E.NextInLML = E.Next;
        E = E.Next;
      }
      this.InsertLocalMinima(locMin);
      this.m_edges.push(edges);
      return true;
    }
    this.m_edges.push(edges);
    var leftBoundIsForward;
    var EMin = null;

    //workaround to avoid an endless loop in the while loop below when
    //open paths have matching start and end points ...
    if (ClipperLib.FPoint.op_Equality(E.Prev.Bot, E.Prev.Top))
    E = E.Next;

    for (;;)
    {
      E = this.FindNextLocMin(E);
      if (E === EMin)
      break;else
      if (EMin === null)
      EMin = E;
      //E and E.Prev now share a local minima (left aligned if horizontal).
      //Compare their slopes to find which starts which bound ...
      var locMin = new ClipperLib.LocalMinima();
      locMin.Next = null;
      locMin.Y = E.Bot.Y;
      if (E.Dx < E.Prev.Dx)
      {
        locMin.LeftBound = E.Prev;
        locMin.RightBound = E;
        leftBoundIsForward = false;
        //Q.nextInLML = Q.prev
      } else

      {
        locMin.LeftBound = E;
        locMin.RightBound = E.Prev;
        leftBoundIsForward = true;
        //Q.nextInLML = Q.next
      }
      locMin.LeftBound.Side = ClipperLib.EdgeSide.esLeft;
      locMin.RightBound.Side = ClipperLib.EdgeSide.esRight;
      if (!Closed)
      locMin.LeftBound.WindDelta = 0;else
      if (locMin.LeftBound.Next === locMin.RightBound)
      locMin.LeftBound.WindDelta = -1;else

      locMin.LeftBound.WindDelta = 1;
      locMin.RightBound.WindDelta = -locMin.LeftBound.WindDelta;
      E = this.ProcessBound(locMin.LeftBound, leftBoundIsForward);
      if (E.OutIdx === ClipperLib.ClipperBase.Skip)
      E = this.ProcessBound(E, leftBoundIsForward);
      var E2 = this.ProcessBound(locMin.RightBound, !leftBoundIsForward);
      if (E2.OutIdx === ClipperLib.ClipperBase.Skip) E2 = this.ProcessBound(E2, !leftBoundIsForward);
      if (locMin.LeftBound.OutIdx === ClipperLib.ClipperBase.Skip)
      locMin.LeftBound = null;else
      if (locMin.RightBound.OutIdx === ClipperLib.ClipperBase.Skip)
      locMin.RightBound = null;
      this.InsertLocalMinima(locMin);
      if (!leftBoundIsForward)
      E = E2;
    }
    return true;
  };

  ClipperLib.ClipperBase.prototype.AddPaths = function (ppg, polyType, closed)
  {
    //  console.log("-------------------------------------------");
    //  console.log(JSON.stringify(ppg));
    var result = false;
    for (var i = 0, ilen = ppg.length; i < ilen; ++i) {
      if (this.AddPath(ppg[i], polyType, closed))
      result = true;}
    return result;
  };

  ClipperLib.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function (pt1, pt2, pt3)
  {
    if (ClipperLib.FPoint.op_Equality(pt1, pt3) || ClipperLib.FPoint.op_Equality(pt1, pt2) || ClipperLib.FPoint.op_Equality(pt3, pt2))

      //if ((pt1 == pt3) || (pt1 == pt2) || (pt3 == pt2))
      return false;else

    if (pt1.X !== pt3.X)
    return pt2.X > pt1.X === pt2.X < pt3.X;else

    return pt2.Y > pt1.Y === pt2.Y < pt3.Y;
  };

  ClipperLib.ClipperBase.prototype.RemoveEdge = function (e)
  {
    //removes e from double_linked_list (but without removing from memory)
    e.Prev.Next = e.Next;
    e.Next.Prev = e.Prev;
    var result = e.Next;
    e.Prev = null; //flag as removed (see ClipperBase.Clear)
    return result;
  };

  ClipperLib.ClipperBase.prototype.SetDx = function (e)
  {
    e.Delta.X = e.Top.X - e.Bot.X;
    e.Delta.Y = e.Top.Y - e.Bot.Y;
    if (e.Delta.Y === 0) e.Dx = ClipperLib.ClipperBase.horizontal;else
    e.Dx = e.Delta.X / e.Delta.Y;
  };

  ClipperLib.ClipperBase.prototype.InsertLocalMinima = function (newLm)
  {
    if (this.m_MinimaList === null)
    {
      this.m_MinimaList = newLm;
    } else
    if (newLm.Y >= this.m_MinimaList.Y)
    {
      newLm.Next = this.m_MinimaList;
      this.m_MinimaList = newLm;
    } else

    {
      var tmpLm = this.m_MinimaList;
      while (tmpLm.Next !== null && newLm.Y < tmpLm.Next.Y) {
        tmpLm = tmpLm.Next;}
      newLm.Next = tmpLm.Next;
      tmpLm.Next = newLm;
    }
  };

  ClipperLib.ClipperBase.prototype.PopLocalMinima = function (Y, current)
  {
    current.v = this.m_CurrentLM;
    if (this.m_CurrentLM !== null && this.m_CurrentLM.Y === Y)
    {
      this.m_CurrentLM = this.m_CurrentLM.Next;
      return true;
    }
    return false;
  };

  ClipperLib.ClipperBase.prototype.ReverseHorizontal = function (e)
  {
    //swap horizontal edges' top and bottom x's so they follow the natural
    //progression of the bounds - ie so their xbots will align with the
    //adjoining lower edge. [Helpful in the ProcessHorizontal() method.]
    var tmp = e.Top.X;
    e.Top.X = e.Bot.X;
    e.Bot.X = tmp;
    if (ClipperLib.use_xyz)
    {
      tmp = e.Top.Z;
      e.Top.Z = e.Bot.Z;
      e.Bot.Z = tmp;
    }
  };

  ClipperLib.ClipperBase.prototype.Reset = function ()
  {
    this.m_CurrentLM = this.m_MinimaList;
    if (this.m_CurrentLM === null) //ie nothing to process
      return;
    //reset all edges ...
    this.m_Scanbeam = null;
    var lm = this.m_MinimaList;
    while (lm !== null)
    {
      this.InsertScanbeam(lm.Y);
      var e = lm.LeftBound;
      if (e !== null)
      {
        //e.Curr = e.Bot;
        e.Curr.X = e.Bot.X;
        e.Curr.Y = e.Bot.Y;
        if (ClipperLib.use_xyz) e.Curr.Z = e.Bot.Z;
        e.OutIdx = ClipperLib.ClipperBase.Unassigned;
      }
      e = lm.RightBound;
      if (e !== null)
      {
        //e.Curr = e.Bot;
        e.Curr.X = e.Bot.X;
        e.Curr.Y = e.Bot.Y;
        if (ClipperLib.use_xyz) e.Curr.Z = e.Bot.Z;
        e.OutIdx = ClipperLib.ClipperBase.Unassigned;
      }
      lm = lm.Next;
    }
    this.m_ActiveEdges = null;
  };

  ClipperLib.ClipperBase.prototype.InsertScanbeam = function (Y)
  {
    //single-linked list: sorted descending, ignoring dups.
    if (this.m_Scanbeam === null)
    {
      this.m_Scanbeam = new ClipperLib.Scanbeam();
      this.m_Scanbeam.Next = null;
      this.m_Scanbeam.Y = Y;
    } else
    if (Y > this.m_Scanbeam.Y)
    {
      var newSb = new ClipperLib.Scanbeam();
      newSb.Y = Y;
      newSb.Next = this.m_Scanbeam;
      this.m_Scanbeam = newSb;
    } else

    {
      var sb2 = this.m_Scanbeam;
      while (sb2.Next !== null && Y <= sb2.Next.Y)
      {
        sb2 = sb2.Next;
      }
      if (Y === sb2.Y)
      {
        return;
      } //ie ignores duplicates
      var newSb1 = new ClipperLib.Scanbeam();
      newSb1.Y = Y;
      newSb1.Next = sb2.Next;
      sb2.Next = newSb1;
    }
  };

  ClipperLib.ClipperBase.prototype.PopScanbeam = function (Y)
  {
    if (this.m_Scanbeam === null)
    {
      Y.v = 0;
      return false;
    }
    Y.v = this.m_Scanbeam.Y;
    this.m_Scanbeam = this.m_Scanbeam.Next;
    return true;
  };

  ClipperLib.ClipperBase.prototype.LocalMinimaPending = function ()
  {
    return this.m_CurrentLM !== null;
  };

  ClipperLib.ClipperBase.prototype.CreateOutRec = function ()
  {
    var result = new ClipperLib.OutRec();
    result.Idx = ClipperLib.ClipperBase.Unassigned;
    result.IsHole = false;
    result.IsOpen = false;
    result.FirstLeft = null;
    result.Pts = null;
    result.BottomPt = null;
    result.PolyNode = null;
    this.m_PolyOuts.push(result);
    result.Idx = this.m_PolyOuts.length - 1;
    return result;
  };

  ClipperLib.ClipperBase.prototype.DisposeOutRec = function (index)
  {
    var outRec = this.m_PolyOuts[index];
    outRec.Pts = null;
    outRec = null;
    this.m_PolyOuts[index] = null;
  };

  ClipperLib.ClipperBase.prototype.UpdateEdgeIntoAEL = function (e)
  {
    if (e.NextInLML === null)
    {
      ClipperLib.Error("UpdateEdgeIntoAEL: invalid call");
    }
    var AelPrev = e.PrevInAEL;
    var AelNext = e.NextInAEL;
    e.NextInLML.OutIdx = e.OutIdx;
    if (AelPrev !== null)
    {
      AelPrev.NextInAEL = e.NextInLML;
    } else

    {
      this.m_ActiveEdges = e.NextInLML;
    }
    if (AelNext !== null)
    {
      AelNext.PrevInAEL = e.NextInLML;
    }
    e.NextInLML.Side = e.Side;
    e.NextInLML.WindDelta = e.WindDelta;
    e.NextInLML.WindCnt = e.WindCnt;
    e.NextInLML.WindCnt2 = e.WindCnt2;
    e = e.NextInLML;
    e.Curr.X = e.Bot.X;
    e.Curr.Y = e.Bot.Y;
    e.PrevInAEL = AelPrev;
    e.NextInAEL = AelNext;
    if (!ClipperLib.ClipperBase.IsHorizontal(e))
    {
      this.InsertScanbeam(e.Top.Y);
    }
    return e;
  };

  ClipperLib.ClipperBase.prototype.SwapPositionsInAEL = function (edge1, edge2)
  {
    //check that one or other edge hasn't already been removed from AEL ...
    if (edge1.NextInAEL === edge1.PrevInAEL || edge2.NextInAEL === edge2.PrevInAEL)
    {
      return;
    }

    if (edge1.NextInAEL === edge2)
    {
      var next = edge2.NextInAEL;
      if (next !== null)
      {
        next.PrevInAEL = edge1;
      }
      var prev = edge1.PrevInAEL;
      if (prev !== null)
      {
        prev.NextInAEL = edge2;
      }
      edge2.PrevInAEL = prev;
      edge2.NextInAEL = edge1;
      edge1.PrevInAEL = edge2;
      edge1.NextInAEL = next;
    } else
    if (edge2.NextInAEL === edge1)
    {
      var next1 = edge1.NextInAEL;
      if (next1 !== null)
      {
        next1.PrevInAEL = edge2;
      }
      var prev1 = edge2.PrevInAEL;
      if (prev1 !== null)
      {
        prev1.NextInAEL = edge1;
      }
      edge1.PrevInAEL = prev1;
      edge1.NextInAEL = edge2;
      edge2.PrevInAEL = edge1;
      edge2.NextInAEL = next1;
    } else

    {
      var next2 = edge1.NextInAEL;
      var prev2 = edge1.PrevInAEL;
      edge1.NextInAEL = edge2.NextInAEL;
      if (edge1.NextInAEL !== null)
      {
        edge1.NextInAEL.PrevInAEL = edge1;
      }
      edge1.PrevInAEL = edge2.PrevInAEL;
      if (edge1.PrevInAEL !== null)
      {
        edge1.PrevInAEL.NextInAEL = edge1;
      }
      edge2.NextInAEL = next2;
      if (edge2.NextInAEL !== null)
      {
        edge2.NextInAEL.PrevInAEL = edge2;
      }
      edge2.PrevInAEL = prev2;
      if (edge2.PrevInAEL !== null)
      {
        edge2.PrevInAEL.NextInAEL = edge2;
      }
    }

    if (edge1.PrevInAEL === null)
    {
      this.m_ActiveEdges = edge1;
    } else

    {
      if (edge2.PrevInAEL === null)
      {
        this.m_ActiveEdges = edge2;
      }
    }
  };

  ClipperLib.ClipperBase.prototype.DeleteFromAEL = function (e)
  {
    var AelPrev = e.PrevInAEL;
    var AelNext = e.NextInAEL;
    if (AelPrev === null && AelNext === null && e !== this.m_ActiveEdges)
    {
      return;
    } //already deleted
    if (AelPrev !== null)
    {
      AelPrev.NextInAEL = AelNext;
    } else

    {
      this.m_ActiveEdges = AelNext;
    }
    if (AelNext !== null)
    {
      AelNext.PrevInAEL = AelPrev;
    }
    e.NextInAEL = null;
    e.PrevInAEL = null;
  };

  // public Clipper(int InitOptions = 0)
  /**
   * @suppress {missingProperties}
   */
  ClipperLib.Clipper = function (InitOptions)
  {
    if (typeof InitOptions === "undefined") InitOptions = 0;
    this.m_PolyOuts = null;
    this.m_ClipType = ClipperLib.ClipType.ctIntersection;
    this.m_Scanbeam = null;
    this.m_Maxima = null;
    this.m_ActiveEdges = null;
    this.m_SortedEdges = null;
    this.m_IntersectList = null;
    this.m_IntersectNodeComparer = null;
    this.m_ExecuteLocked = false;
    this.m_ClipFillType = ClipperLib.PolyFillType.pftEvenOdd;
    this.m_SubjFillType = ClipperLib.PolyFillType.pftEvenOdd;
    this.m_Joins = null;
    this.m_GhostJoins = null;
    this.m_UsingPolyTree = false;
    this.ReverseSolution = false;
    this.StrictlySimple = false;

    ClipperLib.ClipperBase.call(this);

    this.m_Scanbeam = null;
    this.m_Maxima = null;
    this.m_ActiveEdges = null;
    this.m_SortedEdges = null;
    this.m_IntersectList = new Array();
    this.m_IntersectNodeComparer = ClipperLib.MyIntersectNodeSort.Compare;
    this.m_ExecuteLocked = false;
    this.m_UsingPolyTree = false;
    this.m_PolyOuts = new Array();
    this.m_Joins = new Array();
    this.m_GhostJoins = new Array();
    this.ReverseSolution = (1 & InitOptions) !== 0;
    this.StrictlySimple = (2 & InitOptions) !== 0;
    this.PreserveCollinear = (4 & InitOptions) !== 0;
    if (ClipperLib.use_xyz)
    {
      this.ZFillFunction = null; // function (FPoint bot1, FPoint top1, FPoint bot2, FPoint top2, ref FPoint intersectPt);
    }
  };

  ClipperLib.Clipper.ioReverseSolution = 1;
  ClipperLib.Clipper.ioStrictlySimple = 2;
  ClipperLib.Clipper.ioPreserveCollinear = 4;

  ClipperLib.Clipper.prototype.Clear = function ()
  {
    if (this.m_edges.length === 0)
    return;
    //avoids problems with ClipperBase destructor
    this.DisposeAllPolyPts();
    ClipperLib.ClipperBase.prototype.Clear.call(this);
  };

  ClipperLib.Clipper.prototype.InsertMaxima = function (X)
  {
    //double-linked list: sorted ascending, ignoring dups.
    var newMax = new ClipperLib.Maxima();
    newMax.X = X;
    if (this.m_Maxima === null)
    {
      this.m_Maxima = newMax;
      this.m_Maxima.Next = null;
      this.m_Maxima.Prev = null;
    } else
    if (X < this.m_Maxima.X)
    {
      newMax.Next = this.m_Maxima;
      newMax.Prev = null;
      this.m_Maxima = newMax;
    } else

    {
      var m = this.m_Maxima;
      while (m.Next !== null && X >= m.Next.X)
      {
        m = m.Next;
      }
      if (X === m.X)
      {
        return;
      } //ie ignores duplicates (& CG to clean up newMax)
      //insert newMax between m and m.Next ...
      newMax.Next = m.Next;
      newMax.Prev = m;
      if (m.Next !== null)
      {
        m.Next.Prev = newMax;
      }
      m.Next = newMax;
    }
  };

  // ************************************
  ClipperLib.Clipper.prototype.Execute = function ()
  {
    var a = arguments,
    alen = a.length,
    ispolytree = a[1] instanceof ClipperLib.PolyTree;
    if (alen === 4 && !ispolytree) // function (clipType, solution, subjFillType, clipFillType)
      {
        var clipType = a[0],
        solution = a[1],
        subjFillType = a[2],
        clipFillType = a[3];
        if (this.m_ExecuteLocked)
        return false;
        if (this.m_HasOpenPaths)
        ClipperLib.Error("Error: PolyTree struct is needed for open path clipping.");
        this.m_ExecuteLocked = true;
        ClipperLib.Clear(solution);
        this.m_SubjFillType = subjFillType;
        this.m_ClipFillType = clipFillType;
        this.m_ClipType = clipType;
        this.m_UsingPolyTree = false;
        try
        {
          var succeeded = this.ExecuteInternal();
          //build the return polygons ...
          if (succeeded) this.BuildResult(solution);
        } finally

        {
          this.DisposeAllPolyPts();
          this.m_ExecuteLocked = false;
        }
        return succeeded;
      } else
    if (alen === 4 && ispolytree) // function (clipType, polytree, subjFillType, clipFillType)
      {
        var clipType = a[0],
        polytree = a[1],
        subjFillType = a[2],
        clipFillType = a[3];
        if (this.m_ExecuteLocked)
        return false;
        this.m_ExecuteLocked = true;
        this.m_SubjFillType = subjFillType;
        this.m_ClipFillType = clipFillType;
        this.m_ClipType = clipType;
        this.m_UsingPolyTree = true;
        try
        {
          var succeeded = this.ExecuteInternal();
          //build the return polygons ...
          if (succeeded) this.BuildResult2(polytree);
        } finally

        {
          this.DisposeAllPolyPts();
          this.m_ExecuteLocked = false;
        }
        return succeeded;
      } else
    if (alen === 2 && !ispolytree) // function (clipType, solution)
      {
        var clipType = a[0],
        solution = a[1];
        return this.Execute(clipType, solution, ClipperLib.PolyFillType.pftEvenOdd, ClipperLib.PolyFillType.pftEvenOdd);
      } else
    if (alen === 2 && ispolytree) // function (clipType, polytree)
      {
        var clipType = a[0],
        polytree = a[1];
        return this.Execute(clipType, polytree, ClipperLib.PolyFillType.pftEvenOdd, ClipperLib.PolyFillType.pftEvenOdd);
      }
  };

  ClipperLib.Clipper.prototype.FixHoleLinkage = function (outRec)
  {
    //skip if an outermost polygon or
    //already already points to the correct FirstLeft ...
    if (outRec.FirstLeft === null || outRec.IsHole !== outRec.FirstLeft.IsHole && outRec.FirstLeft.Pts !== null)
    return;
    var orfl = outRec.FirstLeft;
    while (orfl !== null && (orfl.IsHole === outRec.IsHole || orfl.Pts === null)) {
      orfl = orfl.FirstLeft;}
    outRec.FirstLeft = orfl;
  };

  ClipperLib.Clipper.prototype.ExecuteInternal = function ()
  {
    try
    {
      this.Reset();
      this.m_SortedEdges = null;
      this.m_Maxima = null;

      var botY = {},
      topY = {};

      if (!this.PopScanbeam(botY))
      {
        return false;
      }
      this.InsertLocalMinimaIntoAEL(botY.v);
      while (this.PopScanbeam(topY) || this.LocalMinimaPending())
      {
        this.ProcessHorizontals();
        this.m_GhostJoins.length = 0;
        if (!this.ProcessIntersections(topY.v))
        {
          return false;
        }
        this.ProcessEdgesAtTopOfScanbeam(topY.v);
        botY.v = topY.v;
        this.InsertLocalMinimaIntoAEL(botY.v);
      }

      //fix orientations ...
      var outRec, i, ilen;
      //fix orientations ...
      for (i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
      {
        outRec = this.m_PolyOuts[i];
        if (outRec.Pts === null || outRec.IsOpen) continue;
        if ((outRec.IsHole ^ this.ReverseSolution) == this.Area$1(outRec) > 0)
        this.ReversePolyPtLinks(outRec.Pts);
      }

      this.JoinCommonEdges();

      for (i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
      {
        outRec = this.m_PolyOuts[i];
        if (outRec.Pts === null)
        continue;else
        if (outRec.IsOpen)
        this.FixupOutPolyline(outRec);else

        this.FixupOutPolygon(outRec);
      }

      if (this.StrictlySimple) this.DoSimplePolygons();
      return true;
    }
    //catch { return false; }
    finally
    {
      this.m_Joins.length = 0;
      this.m_GhostJoins.length = 0;
    }
  };

  ClipperLib.Clipper.prototype.DisposeAllPolyPts = function ()
  {
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; ++i) {
      this.DisposeOutRec(i);}
    ClipperLib.Clear(this.m_PolyOuts);
  };

  ClipperLib.Clipper.prototype.AddJoin = function (Op1, Op2, OffPt)
  {
    var j = new ClipperLib.Join();
    j.OutPt1 = Op1;
    j.OutPt2 = Op2;
    //j.OffPt = OffPt;
    j.OffPt.X = OffPt.X;
    j.OffPt.Y = OffPt.Y;
    if (ClipperLib.use_xyz) j.OffPt.Z = OffPt.Z;
    this.m_Joins.push(j);
  };

  ClipperLib.Clipper.prototype.AddGhostJoin = function (Op, OffPt)
  {
    var j = new ClipperLib.Join();
    j.OutPt1 = Op;
    //j.OffPt = OffPt;
    j.OffPt.X = OffPt.X;
    j.OffPt.Y = OffPt.Y;
    if (ClipperLib.use_xyz) j.OffPt.Z = OffPt.Z;
    this.m_GhostJoins.push(j);
  };

  //if (ClipperLib.use_xyz)
  //{
  ClipperLib.Clipper.prototype.SetZ = function (pt, e1, e2)
  {
    if (this.ZFillFunction !== null)
    {
      if (pt.Z !== 0 || this.ZFillFunction === null) return;else
      if (ClipperLib.FPoint.op_Equality(pt, e1.Bot)) pt.Z = e1.Bot.Z;else
      if (ClipperLib.FPoint.op_Equality(pt, e1.Top)) pt.Z = e1.Top.Z;else
      if (ClipperLib.FPoint.op_Equality(pt, e2.Bot)) pt.Z = e2.Bot.Z;else
      if (ClipperLib.FPoint.op_Equality(pt, e2.Top)) pt.Z = e2.Top.Z;else
      this.ZFillFunction(e1.Bot, e1.Top, e2.Bot, e2.Top, pt);
    }
  };
  //}

  ClipperLib.Clipper.prototype.InsertLocalMinimaIntoAEL = function (botY)
  {
    var lm = {};

    var lb;
    var rb;
    while (this.PopLocalMinima(botY, lm))
    {
      lb = lm.v.LeftBound;
      rb = lm.v.RightBound;

      var Op1 = null;
      if (lb === null)
      {
        this.InsertEdgeIntoAEL(rb, null);
        this.SetWindingCount(rb);
        if (this.IsContributing(rb))
        Op1 = this.AddOutPt(rb, rb.Bot);
      } else
      if (rb === null)
      {
        this.InsertEdgeIntoAEL(lb, null);
        this.SetWindingCount(lb);
        if (this.IsContributing(lb))
        Op1 = this.AddOutPt(lb, lb.Bot);
        this.InsertScanbeam(lb.Top.Y);
      } else

      {
        this.InsertEdgeIntoAEL(lb, null);
        this.InsertEdgeIntoAEL(rb, lb);
        this.SetWindingCount(lb);
        rb.WindCnt = lb.WindCnt;
        rb.WindCnt2 = lb.WindCnt2;
        if (this.IsContributing(lb))
        Op1 = this.AddLocalMinPoly(lb, rb, lb.Bot);
        this.InsertScanbeam(lb.Top.Y);
      }
      if (rb !== null)
      {
        if (ClipperLib.ClipperBase.IsHorizontal(rb))
        {
          if (rb.NextInLML !== null)
          {
            this.InsertScanbeam(rb.NextInLML.Top.Y);
          }
          this.AddEdgeToSEL(rb);
        } else

        {
          this.InsertScanbeam(rb.Top.Y);
        }
      }
      if (lb === null || rb === null) continue;
      //if output polygons share an Edge with a horizontal rb, they'll need joining later ...
      if (Op1 !== null && ClipperLib.ClipperBase.IsHorizontal(rb) && this.m_GhostJoins.length > 0 && rb.WindDelta !== 0)
      {
        for (var i = 0, ilen = this.m_GhostJoins.length; i < ilen; i++)
        {
          //if the horizontal Rb and a 'ghost' horizontal overlap, then convert
          //the 'ghost' join to a real join ready for later ...
          var j = this.m_GhostJoins[i];

          if (this.HorzSegmentsOverlap(j.OutPt1.Pt.X, j.OffPt.X, rb.Bot.X, rb.Top.X))
          this.AddJoin(j.OutPt1, Op1, j.OffPt);
        }
      }

      if (lb.OutIdx >= 0 && lb.PrevInAEL !== null &&
      lb.PrevInAEL.Curr.X === lb.Bot.X &&
      lb.PrevInAEL.OutIdx >= 0 &&
      ClipperLib.ClipperBase.SlopesEqual5(lb.PrevInAEL.Curr, lb.PrevInAEL.Top, lb.Curr, lb.Top) &&
      lb.WindDelta !== 0 && lb.PrevInAEL.WindDelta !== 0)
      {
        var Op2 = this.AddOutPt(lb.PrevInAEL, lb.Bot);
        this.AddJoin(Op1, Op2, lb.Top);
      }
      if (lb.NextInAEL !== rb)
      {
        if (rb.OutIdx >= 0 && rb.PrevInAEL.OutIdx >= 0 &&
        ClipperLib.ClipperBase.SlopesEqual5(rb.PrevInAEL.Curr, rb.PrevInAEL.Top, rb.Curr, rb.Top) &&
        rb.WindDelta !== 0 && rb.PrevInAEL.WindDelta !== 0)
        {
          var Op2 = this.AddOutPt(rb.PrevInAEL, rb.Bot);
          this.AddJoin(Op1, Op2, rb.Top);
        }
        var e = lb.NextInAEL;
        if (e !== null)
        while (e !== rb)
        {
          //nb: For calculating winding counts etc, IntersectEdges() assumes
          //that param1 will be to the right of param2 ABOVE the intersection ...
          this.IntersectEdges(rb, e, lb.Curr);
          //order important here
          e = e.NextInAEL;
        }
      }
    }
  };

  ClipperLib.Clipper.prototype.InsertEdgeIntoAEL = function (edge, startEdge)
  {
    if (this.m_ActiveEdges === null)
    {
      edge.PrevInAEL = null;
      edge.NextInAEL = null;
      this.m_ActiveEdges = edge;
    } else
    if (startEdge === null && this.E2InsertsBeforeE1(this.m_ActiveEdges, edge))
    {
      edge.PrevInAEL = null;
      edge.NextInAEL = this.m_ActiveEdges;
      this.m_ActiveEdges.PrevInAEL = edge;
      this.m_ActiveEdges = edge;
    } else

    {
      if (startEdge === null)
      startEdge = this.m_ActiveEdges;
      while (startEdge.NextInAEL !== null && !this.E2InsertsBeforeE1(startEdge.NextInAEL, edge)) {
        startEdge = startEdge.NextInAEL;}
      edge.NextInAEL = startEdge.NextInAEL;
      if (startEdge.NextInAEL !== null)
      startEdge.NextInAEL.PrevInAEL = edge;
      edge.PrevInAEL = startEdge;
      startEdge.NextInAEL = edge;
    }
  };

  ClipperLib.Clipper.prototype.E2InsertsBeforeE1 = function (e1, e2)
  {
    if (e2.Curr.X === e1.Curr.X)
    {
      if (e2.Top.Y > e1.Top.Y)
      return e2.Top.X < ClipperLib.Clipper.TopX(e1, e2.Top.Y);else

      return e1.Top.X > ClipperLib.Clipper.TopX(e2, e1.Top.Y);
    } else

    return e2.Curr.X < e1.Curr.X;
  };

  ClipperLib.Clipper.prototype.IsEvenOddFillType = function (edge)
  {
    if (edge.PolyTyp === ClipperLib.PolyType.ptSubject)
    return this.m_SubjFillType === ClipperLib.PolyFillType.pftEvenOdd;else

    return this.m_ClipFillType === ClipperLib.PolyFillType.pftEvenOdd;
  };

  ClipperLib.Clipper.prototype.IsEvenOddAltFillType = function (edge)
  {
    if (edge.PolyTyp === ClipperLib.PolyType.ptSubject)
    return this.m_ClipFillType === ClipperLib.PolyFillType.pftEvenOdd;else

    return this.m_SubjFillType === ClipperLib.PolyFillType.pftEvenOdd;
  };

  ClipperLib.Clipper.prototype.IsContributing = function (edge)
  {
    var pft, pft2;
    if (edge.PolyTyp === ClipperLib.PolyType.ptSubject)
    {
      pft = this.m_SubjFillType;
      pft2 = this.m_ClipFillType;
    } else

    {
      pft = this.m_ClipFillType;
      pft2 = this.m_SubjFillType;
    }
    switch (pft) {

      case ClipperLib.PolyFillType.pftEvenOdd:
        if (edge.WindDelta === 0 && edge.WindCnt !== 1)
        return false;
        break;
      case ClipperLib.PolyFillType.pftNonZero:
        if (Math.abs(edge.WindCnt) !== 1)
        return false;
        break;
      case ClipperLib.PolyFillType.pftPositive:
        if (edge.WindCnt !== 1)
        return false;
        break;
      default:
        if (edge.WindCnt !== -1)
        return false;
        break;}

    switch (this.m_ClipType) {

      case ClipperLib.ClipType.ctIntersection:
        switch (pft2) {

          case ClipperLib.PolyFillType.pftEvenOdd:
          case ClipperLib.PolyFillType.pftNonZero:
            return edge.WindCnt2 !== 0;
          case ClipperLib.PolyFillType.pftPositive:
            return edge.WindCnt2 > 0;
          default:
            return edge.WindCnt2 < 0;}

      case ClipperLib.ClipType.ctUnion:
        switch (pft2) {

          case ClipperLib.PolyFillType.pftEvenOdd:
          case ClipperLib.PolyFillType.pftNonZero:
            return edge.WindCnt2 === 0;
          case ClipperLib.PolyFillType.pftPositive:
            return edge.WindCnt2 <= 0;
          default:
            return edge.WindCnt2 >= 0;}

      case ClipperLib.ClipType.ctDifference:
        if (edge.PolyTyp === ClipperLib.PolyType.ptSubject)
        switch (pft2) {

          case ClipperLib.PolyFillType.pftEvenOdd:
          case ClipperLib.PolyFillType.pftNonZero:
            return edge.WindCnt2 === 0;
          case ClipperLib.PolyFillType.pftPositive:
            return edge.WindCnt2 <= 0;
          default:
            return edge.WindCnt2 >= 0;} else


        switch (pft2) {

          case ClipperLib.PolyFillType.pftEvenOdd:
          case ClipperLib.PolyFillType.pftNonZero:
            return edge.WindCnt2 !== 0;
          case ClipperLib.PolyFillType.pftPositive:
            return edge.WindCnt2 > 0;
          default:
            return edge.WindCnt2 < 0;}

      case ClipperLib.ClipType.ctXor:
        if (edge.WindDelta === 0)
        switch (pft2) {

          case ClipperLib.PolyFillType.pftEvenOdd:
          case ClipperLib.PolyFillType.pftNonZero:
            return edge.WindCnt2 === 0;
          case ClipperLib.PolyFillType.pftPositive:
            return edge.WindCnt2 <= 0;
          default:
            return edge.WindCnt2 >= 0;} else


        return true;}

    return true;
  };

  ClipperLib.Clipper.prototype.SetWindingCount = function (edge)
  {
    var e = edge.PrevInAEL;
    //find the edge of the same polytype that immediately preceeds 'edge' in AEL
    while (e !== null && (e.PolyTyp !== edge.PolyTyp || e.WindDelta === 0)) {
      e = e.PrevInAEL;}
    if (e === null)
    {
      var pft = edge.PolyTyp === ClipperLib.PolyType.ptSubject ? this.m_SubjFillType : this.m_ClipFillType;
      if (edge.WindDelta === 0)
      {
        edge.WindCnt = pft === ClipperLib.PolyFillType.pftNegative ? -1 : 1;
      } else

      {
        edge.WindCnt = edge.WindDelta;
      }
      edge.WindCnt2 = 0;
      e = this.m_ActiveEdges;
      //ie get ready to calc WindCnt2
    } else
    if (edge.WindDelta === 0 && this.m_ClipType !== ClipperLib.ClipType.ctUnion)
    {
      edge.WindCnt = 1;
      edge.WindCnt2 = e.WindCnt2;
      e = e.NextInAEL;
      //ie get ready to calc WindCnt2
    } else
    if (this.IsEvenOddFillType(edge))
    {
      //EvenOdd filling ...
      if (edge.WindDelta === 0)
      {
        //are we inside a subj polygon ...
        var Inside = true;
        var e2 = e.PrevInAEL;
        while (e2 !== null)
        {
          if (e2.PolyTyp === e.PolyTyp && e2.WindDelta !== 0)
          Inside = !Inside;
          e2 = e2.PrevInAEL;
        }
        edge.WindCnt = Inside ? 0 : 1;
      } else

      {
        edge.WindCnt = edge.WindDelta;
      }
      edge.WindCnt2 = e.WindCnt2;
      e = e.NextInAEL;
      //ie get ready to calc WindCnt2
    } else

    {
      //nonZero, Positive or Negative filling ...
      if (e.WindCnt * e.WindDelta < 0)
      {
        //prev edge is 'decreasing' WindCount (WC) toward zero
        //so we're outside the previous polygon ...
        if (Math.abs(e.WindCnt) > 1)
        {
          //outside prev poly but still inside another.
          //when reversing direction of prev poly use the same WC
          if (e.WindDelta * edge.WindDelta < 0)
          edge.WindCnt = e.WindCnt;else

          edge.WindCnt = e.WindCnt + edge.WindDelta;
        } else

        edge.WindCnt = edge.WindDelta === 0 ? 1 : edge.WindDelta;
      } else

      {
        //prev edge is 'increasing' WindCount (WC) away from zero
        //so we're inside the previous polygon ...
        if (edge.WindDelta === 0)
        edge.WindCnt = e.WindCnt < 0 ? e.WindCnt - 1 : e.WindCnt + 1;else
        if (e.WindDelta * edge.WindDelta < 0)
        edge.WindCnt = e.WindCnt;else

        edge.WindCnt = e.WindCnt + edge.WindDelta;
      }
      edge.WindCnt2 = e.WindCnt2;
      e = e.NextInAEL;
      //ie get ready to calc WindCnt2
    }
    //update WindCnt2 ...
    if (this.IsEvenOddAltFillType(edge))
    {
      //EvenOdd filling ...
      while (e !== edge)
      {
        if (e.WindDelta !== 0)
        edge.WindCnt2 = edge.WindCnt2 === 0 ? 1 : 0;
        e = e.NextInAEL;
      }
    } else

    {
      //nonZero, Positive or Negative filling ...
      while (e !== edge)
      {
        edge.WindCnt2 += e.WindDelta;
        e = e.NextInAEL;
      }
    }
  };

  ClipperLib.Clipper.prototype.AddEdgeToSEL = function (edge)
  {
    //SEL pointers in PEdge are use to build transient lists of horizontal edges.
    //However, since we don't need to worry about processing order, all additions
    //are made to the front of the list ...
    if (this.m_SortedEdges === null)
    {
      this.m_SortedEdges = edge;
      edge.PrevInSEL = null;
      edge.NextInSEL = null;
    } else

    {
      edge.NextInSEL = this.m_SortedEdges;
      edge.PrevInSEL = null;
      this.m_SortedEdges.PrevInSEL = edge;
      this.m_SortedEdges = edge;
    }
  };

  ClipperLib.Clipper.prototype.PopEdgeFromSEL = function (e)
  {
    //Pop edge from front of SEL (ie SEL is a FILO list)
    e.v = this.m_SortedEdges;
    if (e.v === null)
    {
      return false;
    }
    var oldE = e.v;
    this.m_SortedEdges = e.v.NextInSEL;
    if (this.m_SortedEdges !== null)
    {
      this.m_SortedEdges.PrevInSEL = null;
    }
    oldE.NextInSEL = null;
    oldE.PrevInSEL = null;
    return true;
  };

  ClipperLib.Clipper.prototype.CopyAELToSEL = function ()
  {
    var e = this.m_ActiveEdges;
    this.m_SortedEdges = e;
    while (e !== null)
    {
      e.PrevInSEL = e.PrevInAEL;
      e.NextInSEL = e.NextInAEL;
      e = e.NextInAEL;
    }
  };

  ClipperLib.Clipper.prototype.SwapPositionsInSEL = function (edge1, edge2)
  {
    if (edge1.NextInSEL === null && edge1.PrevInSEL === null)
    return;
    if (edge2.NextInSEL === null && edge2.PrevInSEL === null)
    return;
    if (edge1.NextInSEL === edge2)
    {
      var next = edge2.NextInSEL;
      if (next !== null)
      next.PrevInSEL = edge1;
      var prev = edge1.PrevInSEL;
      if (prev !== null)
      prev.NextInSEL = edge2;
      edge2.PrevInSEL = prev;
      edge2.NextInSEL = edge1;
      edge1.PrevInSEL = edge2;
      edge1.NextInSEL = next;
    } else
    if (edge2.NextInSEL === edge1)
    {
      var next = edge1.NextInSEL;
      if (next !== null)
      next.PrevInSEL = edge2;
      var prev = edge2.PrevInSEL;
      if (prev !== null)
      prev.NextInSEL = edge1;
      edge1.PrevInSEL = prev;
      edge1.NextInSEL = edge2;
      edge2.PrevInSEL = edge1;
      edge2.NextInSEL = next;
    } else

    {
      var next = edge1.NextInSEL;
      var prev = edge1.PrevInSEL;
      edge1.NextInSEL = edge2.NextInSEL;
      if (edge1.NextInSEL !== null)
      edge1.NextInSEL.PrevInSEL = edge1;
      edge1.PrevInSEL = edge2.PrevInSEL;
      if (edge1.PrevInSEL !== null)
      edge1.PrevInSEL.NextInSEL = edge1;
      edge2.NextInSEL = next;
      if (edge2.NextInSEL !== null)
      edge2.NextInSEL.PrevInSEL = edge2;
      edge2.PrevInSEL = prev;
      if (edge2.PrevInSEL !== null)
      edge2.PrevInSEL.NextInSEL = edge2;
    }
    if (edge1.PrevInSEL === null)
    this.m_SortedEdges = edge1;else
    if (edge2.PrevInSEL === null)
    this.m_SortedEdges = edge2;
  };

  ClipperLib.Clipper.prototype.AddLocalMaxPoly = function (e1, e2, pt)
  {
    this.AddOutPt(e1, pt);
    if (e2.WindDelta === 0) this.AddOutPt(e2, pt);
    if (e1.OutIdx === e2.OutIdx)
    {
      e1.OutIdx = -1;
      e2.OutIdx = -1;
    } else
    if (e1.OutIdx < e2.OutIdx)
    this.AppendPolygon(e1, e2);else

    this.AppendPolygon(e2, e1);
  };

  ClipperLib.Clipper.prototype.AddLocalMinPoly = function (e1, e2, pt)
  {
    var result;
    var e, prevE;
    if (ClipperLib.ClipperBase.IsHorizontal(e2) || e1.Dx > e2.Dx)
    {
      result = this.AddOutPt(e1, pt);
      e2.OutIdx = e1.OutIdx;
      e1.Side = ClipperLib.EdgeSide.esLeft;
      e2.Side = ClipperLib.EdgeSide.esRight;
      e = e1;
      if (e.PrevInAEL === e2)
      prevE = e2.PrevInAEL;else

      prevE = e.PrevInAEL;
    } else

    {
      result = this.AddOutPt(e2, pt);
      e1.OutIdx = e2.OutIdx;
      e1.Side = ClipperLib.EdgeSide.esRight;
      e2.Side = ClipperLib.EdgeSide.esLeft;
      e = e2;
      if (e.PrevInAEL === e1)
      prevE = e1.PrevInAEL;else

      prevE = e.PrevInAEL;
    }

    if (prevE !== null && prevE.OutIdx >= 0 && prevE.Top.Y < pt.Y && e.Top.Y < pt.Y)
    {
      var xPrev = ClipperLib.Clipper.TopX(prevE, pt.Y);
      var xE = ClipperLib.Clipper.TopX(e, pt.Y);
      if (xPrev === xE && e.WindDelta !== 0 && prevE.WindDelta !== 0 && ClipperLib.ClipperBase.SlopesEqual5(new ClipperLib.FPoint2(xPrev, pt.Y), prevE.Top, new ClipperLib.FPoint2(xE, pt.Y), e.Top))
      {
        var outPt = this.AddOutPt(prevE, pt);
        this.AddJoin(result, outPt, e.Top);
      }
    }
    return result;
  };

  ClipperLib.Clipper.prototype.AddOutPt = function (e, pt)
  {
    if (e.OutIdx < 0)
    {
      var outRec = this.CreateOutRec();
      outRec.IsOpen = e.WindDelta === 0;
      var newOp = new ClipperLib.OutPt();
      outRec.Pts = newOp;
      newOp.Idx = outRec.Idx;
      //newOp.Pt = pt;
      newOp.Pt.X = pt.X;
      newOp.Pt.Y = pt.Y;
      if (ClipperLib.use_xyz) newOp.Pt.Z = pt.Z;
      newOp.Next = newOp;
      newOp.Prev = newOp;
      if (!outRec.IsOpen)
      this.SetHoleState(e, outRec);
      e.OutIdx = outRec.Idx;
      //nb: do this after SetZ !
      return newOp;
    } else

    {
      var outRec = this.m_PolyOuts[e.OutIdx];
      //OutRec.Pts is the 'Left-most' point & OutRec.Pts.Prev is the 'Right-most'
      var op = outRec.Pts;
      var ToFront = e.Side === ClipperLib.EdgeSide.esLeft;
      if (ToFront && ClipperLib.FPoint.op_Equality(pt, op.Pt))
      return op;else
      if (!ToFront && ClipperLib.FPoint.op_Equality(pt, op.Prev.Pt))
      return op.Prev;
      var newOp = new ClipperLib.OutPt();
      newOp.Idx = outRec.Idx;
      //newOp.Pt = pt;
      newOp.Pt.X = pt.X;
      newOp.Pt.Y = pt.Y;
      if (ClipperLib.use_xyz) newOp.Pt.Z = pt.Z;
      newOp.Next = op;
      newOp.Prev = op.Prev;
      newOp.Prev.Next = newOp;
      op.Prev = newOp;
      if (ToFront)
      outRec.Pts = newOp;
      return newOp;
    }
  };

  ClipperLib.Clipper.prototype.GetLastOutPt = function (e)
  {
    var outRec = this.m_PolyOuts[e.OutIdx];
    if (e.Side === ClipperLib.EdgeSide.esLeft)
    {
      return outRec.Pts;
    } else

    {
      return outRec.Pts.Prev;
    }
  };

  ClipperLib.Clipper.prototype.SwapPoints = function (pt1, pt2)
  {
    var tmp = new ClipperLib.FPoint1(pt1.Value);
    //pt1.Value = pt2.Value;
    pt1.Value.X = pt2.Value.X;
    pt1.Value.Y = pt2.Value.Y;
    if (ClipperLib.use_xyz) pt1.Value.Z = pt2.Value.Z;
    //pt2.Value = tmp;
    pt2.Value.X = tmp.X;
    pt2.Value.Y = tmp.Y;
    if (ClipperLib.use_xyz) pt2.Value.Z = tmp.Z;
  };

  ClipperLib.Clipper.prototype.HorzSegmentsOverlap = function (seg1a, seg1b, seg2a, seg2b)
  {
    var tmp;
    if (seg1a > seg1b)
    {
      tmp = seg1a;
      seg1a = seg1b;
      seg1b = tmp;
    }
    if (seg2a > seg2b)
    {
      tmp = seg2a;
      seg2a = seg2b;
      seg2b = tmp;
    }
    return seg1a < seg2b && seg2a < seg1b;
  };

  ClipperLib.Clipper.prototype.SetHoleState = function (e, outRec)
  {
    var e2 = e.PrevInAEL;
    var eTmp = null;
    while (e2 !== null)
    {
      if (e2.OutIdx >= 0 && e2.WindDelta !== 0)
      {
        if (eTmp === null)
        eTmp = e2;else
        if (eTmp.OutIdx === e2.OutIdx)
        eTmp = null; //paired
      }
      e2 = e2.PrevInAEL;
    }

    if (eTmp === null)
    {
      outRec.FirstLeft = null;
      outRec.IsHole = false;
    } else

    {
      outRec.FirstLeft = this.m_PolyOuts[eTmp.OutIdx];
      outRec.IsHole = !outRec.FirstLeft.IsHole;
    }
  };

  ClipperLib.Clipper.prototype.GetDx = function (pt1, pt2)
  {
    if (pt1.Y === pt2.Y)
    return ClipperLib.ClipperBase.horizontal;else

    return (pt2.X - pt1.X) / (pt2.Y - pt1.Y);
  };

  ClipperLib.Clipper.prototype.FirstIsBottomPt = function (btmPt1, btmPt2)
  {
    var p = btmPt1.Prev;
    while (ClipperLib.FPoint.op_Equality(p.Pt, btmPt1.Pt) && p !== btmPt1) {
      p = p.Prev;}
    var dx1p = Math.abs(this.GetDx(btmPt1.Pt, p.Pt));
    p = btmPt1.Next;
    while (ClipperLib.FPoint.op_Equality(p.Pt, btmPt1.Pt) && p !== btmPt1) {
      p = p.Next;}
    var dx1n = Math.abs(this.GetDx(btmPt1.Pt, p.Pt));
    p = btmPt2.Prev;
    while (ClipperLib.FPoint.op_Equality(p.Pt, btmPt2.Pt) && p !== btmPt2) {
      p = p.Prev;}
    var dx2p = Math.abs(this.GetDx(btmPt2.Pt, p.Pt));
    p = btmPt2.Next;
    while (ClipperLib.FPoint.op_Equality(p.Pt, btmPt2.Pt) && p !== btmPt2) {
      p = p.Next;}
    var dx2n = Math.abs(this.GetDx(btmPt2.Pt, p.Pt));

    if (Math.max(dx1p, dx1n) === Math.max(dx2p, dx2n) && Math.min(dx1p, dx1n) === Math.min(dx2p, dx2n))
    {
      return this.Area(btmPt1) > 0; //if otherwise identical use orientation
    } else

    {
      return dx1p >= dx2p && dx1p >= dx2n || dx1n >= dx2p && dx1n >= dx2n;
    }
  };

  ClipperLib.Clipper.prototype.GetBottomPt = function (pp)
  {
    var dups = null;
    var p = pp.Next;
    while (p !== pp)
    {
      if (p.Pt.Y > pp.Pt.Y)
      {
        pp = p;
        dups = null;
      } else
      if (p.Pt.Y === pp.Pt.Y && p.Pt.X <= pp.Pt.X)
      {
        if (p.Pt.X < pp.Pt.X)
        {
          dups = null;
          pp = p;
        } else

        {
          if (p.Next !== pp && p.Prev !== pp)
          dups = p;
        }
      }
      p = p.Next;
    }
    if (dups !== null)
    {
      //there appears to be at least 2 vertices at bottomPt so ...
      while (dups !== p)
      {
        if (!this.FirstIsBottomPt(p, dups))
        pp = dups;
        dups = dups.Next;
        while (ClipperLib.FPoint.op_Inequality(dups.Pt, pp.Pt)) {
          dups = dups.Next;}
      }
    }
    return pp;
  };

  ClipperLib.Clipper.prototype.GetLowermostRec = function (outRec1, outRec2)
  {
    //work out which polygon fragment has the correct hole state ...
    if (outRec1.BottomPt === null)
    outRec1.BottomPt = this.GetBottomPt(outRec1.Pts);
    if (outRec2.BottomPt === null)
    outRec2.BottomPt = this.GetBottomPt(outRec2.Pts);
    var bPt1 = outRec1.BottomPt;
    var bPt2 = outRec2.BottomPt;
    if (bPt1.Pt.Y > bPt2.Pt.Y)
    return outRec1;else
    if (bPt1.Pt.Y < bPt2.Pt.Y)
    return outRec2;else
    if (bPt1.Pt.X < bPt2.Pt.X)
    return outRec1;else
    if (bPt1.Pt.X > bPt2.Pt.X)
    return outRec2;else
    if (bPt1.Next === bPt1)
    return outRec2;else
    if (bPt2.Next === bPt2)
    return outRec1;else
    if (this.FirstIsBottomPt(bPt1, bPt2))
    return outRec1;else

    return outRec2;
  };

  ClipperLib.Clipper.prototype.OutRec1RightOfOutRec2 = function (outRec1, outRec2)
  {
    do {
      outRec1 = outRec1.FirstLeft;
      if (outRec1 === outRec2)
      return true;
    } while (
    outRec1 !== null);
    return false;
  };

  ClipperLib.Clipper.prototype.GetOutRec = function (idx)
  {
    var outrec = this.m_PolyOuts[idx];
    while (outrec !== this.m_PolyOuts[outrec.Idx]) {
      outrec = this.m_PolyOuts[outrec.Idx];}
    return outrec;
  };

  ClipperLib.Clipper.prototype.AppendPolygon = function (e1, e2)
  {
    //get the start and ends of both output polygons ...
    var outRec1 = this.m_PolyOuts[e1.OutIdx];
    var outRec2 = this.m_PolyOuts[e2.OutIdx];
    var holeStateRec;
    if (this.OutRec1RightOfOutRec2(outRec1, outRec2))
    holeStateRec = outRec2;else
    if (this.OutRec1RightOfOutRec2(outRec2, outRec1))
    holeStateRec = outRec1;else

    holeStateRec = this.GetLowermostRec(outRec1, outRec2);

    //get the start and ends of both output polygons and
    //join E2 poly onto E1 poly and delete pointers to E2 ...

    var p1_lft = outRec1.Pts;
    var p1_rt = p1_lft.Prev;
    var p2_lft = outRec2.Pts;
    var p2_rt = p2_lft.Prev;
    //join e2 poly onto e1 poly and delete pointers to e2 ...
    if (e1.Side === ClipperLib.EdgeSide.esLeft)
    {
      if (e2.Side === ClipperLib.EdgeSide.esLeft)
      {
        //z y x a b c
        this.ReversePolyPtLinks(p2_lft);
        p2_lft.Next = p1_lft;
        p1_lft.Prev = p2_lft;
        p1_rt.Next = p2_rt;
        p2_rt.Prev = p1_rt;
        outRec1.Pts = p2_rt;
      } else

      {
        //x y z a b c
        p2_rt.Next = p1_lft;
        p1_lft.Prev = p2_rt;
        p2_lft.Prev = p1_rt;
        p1_rt.Next = p2_lft;
        outRec1.Pts = p2_lft;
      }
    } else

    {
      if (e2.Side === ClipperLib.EdgeSide.esRight)
      {
        //a b c z y x
        this.ReversePolyPtLinks(p2_lft);
        p1_rt.Next = p2_rt;
        p2_rt.Prev = p1_rt;
        p2_lft.Next = p1_lft;
        p1_lft.Prev = p2_lft;
      } else

      {
        //a b c x y z
        p1_rt.Next = p2_lft;
        p2_lft.Prev = p1_rt;
        p1_lft.Prev = p2_rt;
        p2_rt.Next = p1_lft;
      }
    }
    outRec1.BottomPt = null;
    if (holeStateRec === outRec2)
    {
      if (outRec2.FirstLeft !== outRec1)
      outRec1.FirstLeft = outRec2.FirstLeft;
      outRec1.IsHole = outRec2.IsHole;
    }
    outRec2.Pts = null;
    outRec2.BottomPt = null;
    outRec2.FirstLeft = outRec1;
    var OKIdx = e1.OutIdx;
    var ObsoleteIdx = e2.OutIdx;
    e1.OutIdx = -1;
    //nb: safe because we only get here via AddLocalMaxPoly
    e2.OutIdx = -1;
    var e = this.m_ActiveEdges;
    while (e !== null)
    {
      if (e.OutIdx === ObsoleteIdx)
      {
        e.OutIdx = OKIdx;
        e.Side = e1.Side;
        break;
      }
      e = e.NextInAEL;
    }
    outRec2.Idx = outRec1.Idx;
  };

  ClipperLib.Clipper.prototype.ReversePolyPtLinks = function (pp)
  {
    if (pp === null)
    return;
    var pp1;
    var pp2;
    pp1 = pp;
    do {
      pp2 = pp1.Next;
      pp1.Next = pp1.Prev;
      pp1.Prev = pp2;
      pp1 = pp2;
    } while (
    pp1 !== pp);
  };

  ClipperLib.Clipper.SwapSides = function (edge1, edge2)
  {
    var side = edge1.Side;
    edge1.Side = edge2.Side;
    edge2.Side = side;
  };

  ClipperLib.Clipper.SwapPolyIndexes = function (edge1, edge2)
  {
    var outIdx = edge1.OutIdx;
    edge1.OutIdx = edge2.OutIdx;
    edge2.OutIdx = outIdx;
  };

  ClipperLib.Clipper.prototype.IntersectEdges = function (e1, e2, pt)
  {
    //e1 will be to the left of e2 BELOW the intersection. Therefore e1 is before
    //e2 in AEL except when e1 is being inserted at the intersection point ...
    var e1Contributing = e1.OutIdx >= 0;
    var e2Contributing = e2.OutIdx >= 0;

    if (ClipperLib.use_xyz)
    this.SetZ(pt, e1, e2);

    if (ClipperLib.use_lines)
    {
      //if either edge is on an OPEN path ...
      if (e1.WindDelta === 0 || e2.WindDelta === 0)
      {
        //ignore subject-subject open path intersections UNLESS they
        //are both open paths, AND they are both 'contributing maximas' ...
        if (e1.WindDelta === 0 && e2.WindDelta === 0) return;
        //if intersecting a subj line with a subj poly ...
        else if (e1.PolyTyp === e2.PolyTyp &&
          e1.WindDelta !== e2.WindDelta && this.m_ClipType === ClipperLib.ClipType.ctUnion)
          {
            if (e1.WindDelta === 0)
            {
              if (e2Contributing)
              {
                this.AddOutPt(e1, pt);
                if (e1Contributing)
                e1.OutIdx = -1;
              }
            } else

            {
              if (e1Contributing)
              {
                this.AddOutPt(e2, pt);
                if (e2Contributing)
                e2.OutIdx = -1;
              }
            }
          } else
          if (e1.PolyTyp !== e2.PolyTyp)
          {
            if (e1.WindDelta === 0 && Math.abs(e2.WindCnt) === 1 && (
            this.m_ClipType !== ClipperLib.ClipType.ctUnion || e2.WindCnt2 === 0))
            {
              this.AddOutPt(e1, pt);
              if (e1Contributing)
              e1.OutIdx = -1;
            } else
            if (e2.WindDelta === 0 && Math.abs(e1.WindCnt) === 1 && (
            this.m_ClipType !== ClipperLib.ClipType.ctUnion || e1.WindCnt2 === 0))
            {
              this.AddOutPt(e2, pt);
              if (e2Contributing)
              e2.OutIdx = -1;
            }
          }
        return;
      }
    }
    //update winding counts...
    //assumes that e1 will be to the Right of e2 ABOVE the intersection
    if (e1.PolyTyp === e2.PolyTyp)
    {
      if (this.IsEvenOddFillType(e1))
      {
        var oldE1WindCnt = e1.WindCnt;
        e1.WindCnt = e2.WindCnt;
        e2.WindCnt = oldE1WindCnt;
      } else

      {
        if (e1.WindCnt + e2.WindDelta === 0)
        e1.WindCnt = -e1.WindCnt;else

        e1.WindCnt += e2.WindDelta;
        if (e2.WindCnt - e1.WindDelta === 0)
        e2.WindCnt = -e2.WindCnt;else

        e2.WindCnt -= e1.WindDelta;
      }
    } else

    {
      if (!this.IsEvenOddFillType(e2))
      e1.WindCnt2 += e2.WindDelta;else

      e1.WindCnt2 = e1.WindCnt2 === 0 ? 1 : 0;
      if (!this.IsEvenOddFillType(e1))
      e2.WindCnt2 -= e1.WindDelta;else

      e2.WindCnt2 = e2.WindCnt2 === 0 ? 1 : 0;
    }
    var e1FillType, e2FillType, e1FillType2, e2FillType2;
    if (e1.PolyTyp === ClipperLib.PolyType.ptSubject)
    {
      e1FillType = this.m_SubjFillType;
      e1FillType2 = this.m_ClipFillType;
    } else

    {
      e1FillType = this.m_ClipFillType;
      e1FillType2 = this.m_SubjFillType;
    }
    if (e2.PolyTyp === ClipperLib.PolyType.ptSubject)
    {
      e2FillType = this.m_SubjFillType;
      e2FillType2 = this.m_ClipFillType;
    } else

    {
      e2FillType = this.m_ClipFillType;
      e2FillType2 = this.m_SubjFillType;
    }
    var e1Wc, e2Wc;
    switch (e1FillType) {

      case ClipperLib.PolyFillType.pftPositive:
        e1Wc = e1.WindCnt;
        break;
      case ClipperLib.PolyFillType.pftNegative:
        e1Wc = -e1.WindCnt;
        break;
      default:
        e1Wc = Math.abs(e1.WindCnt);
        break;}

    switch (e2FillType) {

      case ClipperLib.PolyFillType.pftPositive:
        e2Wc = e2.WindCnt;
        break;
      case ClipperLib.PolyFillType.pftNegative:
        e2Wc = -e2.WindCnt;
        break;
      default:
        e2Wc = Math.abs(e2.WindCnt);
        break;}

    if (e1Contributing && e2Contributing)
    {
      if (e1Wc !== 0 && e1Wc !== 1 || e2Wc !== 0 && e2Wc !== 1 ||
      e1.PolyTyp !== e2.PolyTyp && this.m_ClipType !== ClipperLib.ClipType.ctXor)
      {
        this.AddLocalMaxPoly(e1, e2, pt);
      } else

      {
        this.AddOutPt(e1, pt);
        this.AddOutPt(e2, pt);
        ClipperLib.Clipper.SwapSides(e1, e2);
        ClipperLib.Clipper.SwapPolyIndexes(e1, e2);
      }
    } else
    if (e1Contributing)
    {
      if (e2Wc === 0 || e2Wc === 1)
      {
        this.AddOutPt(e1, pt);
        ClipperLib.Clipper.SwapSides(e1, e2);
        ClipperLib.Clipper.SwapPolyIndexes(e1, e2);
      }
    } else
    if (e2Contributing)
    {
      if (e1Wc === 0 || e1Wc === 1)
      {
        this.AddOutPt(e2, pt);
        ClipperLib.Clipper.SwapSides(e1, e2);
        ClipperLib.Clipper.SwapPolyIndexes(e1, e2);
      }
    } else
    if ((e1Wc === 0 || e1Wc === 1) && (e2Wc === 0 || e2Wc === 1))
    {
      //neither edge is currently contributing ...
      var e1Wc2, e2Wc2;
      switch (e1FillType2) {

        case ClipperLib.PolyFillType.pftPositive:
          e1Wc2 = e1.WindCnt2;
          break;
        case ClipperLib.PolyFillType.pftNegative:
          e1Wc2 = -e1.WindCnt2;
          break;
        default:
          e1Wc2 = Math.abs(e1.WindCnt2);
          break;}

      switch (e2FillType2) {

        case ClipperLib.PolyFillType.pftPositive:
          e2Wc2 = e2.WindCnt2;
          break;
        case ClipperLib.PolyFillType.pftNegative:
          e2Wc2 = -e2.WindCnt2;
          break;
        default:
          e2Wc2 = Math.abs(e2.WindCnt2);
          break;}

      if (e1.PolyTyp !== e2.PolyTyp)
      {
        this.AddLocalMinPoly(e1, e2, pt);
      } else
      if (e1Wc === 1 && e2Wc === 1)
      switch (this.m_ClipType) {

        case ClipperLib.ClipType.ctIntersection:
          if (e1Wc2 > 0 && e2Wc2 > 0)
          this.AddLocalMinPoly(e1, e2, pt);
          break;
        case ClipperLib.ClipType.ctUnion:
          if (e1Wc2 <= 0 && e2Wc2 <= 0)
          this.AddLocalMinPoly(e1, e2, pt);
          break;
        case ClipperLib.ClipType.ctDifference:
          if (e1.PolyTyp === ClipperLib.PolyType.ptClip && e1Wc2 > 0 && e2Wc2 > 0 ||
          e1.PolyTyp === ClipperLib.PolyType.ptSubject && e1Wc2 <= 0 && e2Wc2 <= 0)
          this.AddLocalMinPoly(e1, e2, pt);
          break;
        case ClipperLib.ClipType.ctXor:
          this.AddLocalMinPoly(e1, e2, pt);
          break;} else


      ClipperLib.Clipper.SwapSides(e1, e2);
    }
  };

  ClipperLib.Clipper.prototype.DeleteFromSEL = function (e)
  {
    var SelPrev = e.PrevInSEL;
    var SelNext = e.NextInSEL;
    if (SelPrev === null && SelNext === null && e !== this.m_SortedEdges)
    return;
    //already deleted
    if (SelPrev !== null)
    SelPrev.NextInSEL = SelNext;else

    this.m_SortedEdges = SelNext;
    if (SelNext !== null)
    SelNext.PrevInSEL = SelPrev;
    e.NextInSEL = null;
    e.PrevInSEL = null;
  };

  ClipperLib.Clipper.prototype.ProcessHorizontals = function ()
  {
    var horzEdge = {}; //m_SortedEdges;
    while (this.PopEdgeFromSEL(horzEdge))
    {
      this.ProcessHorizontal(horzEdge.v);
    }
  };

  ClipperLib.Clipper.prototype.GetHorzDirection = function (HorzEdge, $var)
  {
    if (HorzEdge.Bot.X < HorzEdge.Top.X)
    {
      $var.Left = HorzEdge.Bot.X;
      $var.Right = HorzEdge.Top.X;
      $var.Dir = ClipperLib.Direction.dLeftToRight;
    } else

    {
      $var.Left = HorzEdge.Top.X;
      $var.Right = HorzEdge.Bot.X;
      $var.Dir = ClipperLib.Direction.dRightToLeft;
    }
  };

  ClipperLib.Clipper.prototype.ProcessHorizontal = function (horzEdge)
  {
    var $var = {
      Dir: null,
      Left: null,
      Right: null };


    this.GetHorzDirection(horzEdge, $var);
    var dir = $var.Dir;
    var horzLeft = $var.Left;
    var horzRight = $var.Right;

    var IsOpen = horzEdge.WindDelta === 0;

    var eLastHorz = horzEdge,
    eMaxPair = null;
    while (eLastHorz.NextInLML !== null && ClipperLib.ClipperBase.IsHorizontal(eLastHorz.NextInLML)) {
      eLastHorz = eLastHorz.NextInLML;}
    if (eLastHorz.NextInLML === null)
    eMaxPair = this.GetMaximaPair(eLastHorz);

    var currMax = this.m_Maxima;
    if (currMax !== null)
    {
      //get the first maxima in range (X) ...
      if (dir === ClipperLib.Direction.dLeftToRight)
      {
        while (currMax !== null && currMax.X <= horzEdge.Bot.X)
        {
          currMax = currMax.Next;
        }
        if (currMax !== null && currMax.X >= eLastHorz.Top.X)
        {
          currMax = null;
        }
      } else

      {
        while (currMax.Next !== null && currMax.Next.X < horzEdge.Bot.X)
        {
          currMax = currMax.Next;
        }
        if (currMax.X <= eLastHorz.Top.X)
        {
          currMax = null;
        }
      }
    }
    var op1 = null;
    for (;;) //loop through consec. horizontal edges
    {
      var IsLastHorz = horzEdge === eLastHorz;
      var e = this.GetNextInAEL(horzEdge, dir);
      while (e !== null)
      {
        //this code block inserts extra coords into horizontal edges (in output
        //polygons) whereever maxima touch these horizontal edges. This helps
        //'simplifying' polygons (ie if the Simplify property is set).
        if (currMax !== null)
        {
          if (dir === ClipperLib.Direction.dLeftToRight)
          {
            while (currMax !== null && currMax.X < e.Curr.X)
            {
              if (horzEdge.OutIdx >= 0 && !IsOpen)
              {
                this.AddOutPt(horzEdge, new ClipperLib.FPoint2(currMax.X, horzEdge.Bot.Y));
              }
              currMax = currMax.Next;
            }
          } else

          {
            while (currMax !== null && currMax.X > e.Curr.X)
            {
              if (horzEdge.OutIdx >= 0 && !IsOpen)
              {
                this.AddOutPt(horzEdge, new ClipperLib.FPoint2(currMax.X, horzEdge.Bot.Y));
              }
              currMax = currMax.Prev;
            }
          }
        }

        if (dir === ClipperLib.Direction.dLeftToRight && e.Curr.X > horzRight || dir === ClipperLib.Direction.dRightToLeft && e.Curr.X < horzLeft)
        {
          break;
        }

        //Also break if we've got to the end of an intermediate horizontal edge ...
        //nb: Smaller Dx's are to the right of larger Dx's ABOVE the horizontal.
        if (e.Curr.X === horzEdge.Top.X && horzEdge.NextInLML !== null && e.Dx < horzEdge.NextInLML.Dx)
        break;

        if (horzEdge.OutIdx >= 0 && !IsOpen) //note: may be done multiple times
          {
            if (ClipperLib.use_xyz)
            {
              if (dir === ClipperLib.Direction.dLeftToRight)
              this.SetZ(e.Curr, horzEdge, e);else
              this.SetZ(e.Curr, e, horzEdge);
            }

            op1 = this.AddOutPt(horzEdge, e.Curr);
            var eNextHorz = this.m_SortedEdges;
            while (eNextHorz !== null)
            {
              if (eNextHorz.OutIdx >= 0 && this.HorzSegmentsOverlap(horzEdge.Bot.X, horzEdge.Top.X, eNextHorz.Bot.X, eNextHorz.Top.X))
              {
                var op2 = this.GetLastOutPt(eNextHorz);
                this.AddJoin(op2, op1, eNextHorz.Top);
              }
              eNextHorz = eNextHorz.NextInSEL;
            }
            this.AddGhostJoin(op1, horzEdge.Bot);
          }

        //OK, so far we're still in range of the horizontal Edge  but make sure
        //we're at the last of consec. horizontals when matching with eMaxPair
        if (e === eMaxPair && IsLastHorz)
        {
          if (horzEdge.OutIdx >= 0)
          {
            this.AddLocalMaxPoly(horzEdge, eMaxPair, horzEdge.Top);
          }
          this.DeleteFromAEL(horzEdge);
          this.DeleteFromAEL(eMaxPair);
          return;
        }

        if (dir === ClipperLib.Direction.dLeftToRight)
        {
          var Pt = new ClipperLib.FPoint2(e.Curr.X, horzEdge.Curr.Y);
          this.IntersectEdges(horzEdge, e, Pt);
        } else

        {
          var Pt = new ClipperLib.FPoint2(e.Curr.X, horzEdge.Curr.Y);
          this.IntersectEdges(e, horzEdge, Pt);
        }
        var eNext = this.GetNextInAEL(e, dir);
        this.SwapPositionsInAEL(horzEdge, e);
        e = eNext;
      } //end while(e !== null)

      //Break out of loop if HorzEdge.NextInLML is not also horizontal ...
      if (horzEdge.NextInLML === null || !ClipperLib.ClipperBase.IsHorizontal(horzEdge.NextInLML))
      {
        break;
      }

      horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
      if (horzEdge.OutIdx >= 0)
      {
        this.AddOutPt(horzEdge, horzEdge.Bot);
      }

      $var = {
        Dir: dir,
        Left: horzLeft,
        Right: horzRight };


      this.GetHorzDirection(horzEdge, $var);
      dir = $var.Dir;
      horzLeft = $var.Left;
      horzRight = $var.Right;

    } //end for (;;)

    if (horzEdge.OutIdx >= 0 && op1 === null)
    {
      op1 = this.GetLastOutPt(horzEdge);
      var eNextHorz = this.m_SortedEdges;
      while (eNextHorz !== null)
      {
        if (eNextHorz.OutIdx >= 0 && this.HorzSegmentsOverlap(horzEdge.Bot.X, horzEdge.Top.X, eNextHorz.Bot.X, eNextHorz.Top.X))
        {
          var op2 = this.GetLastOutPt(eNextHorz);
          this.AddJoin(op2, op1, eNextHorz.Top);
        }
        eNextHorz = eNextHorz.NextInSEL;
      }
      this.AddGhostJoin(op1, horzEdge.Top);
    }

    if (horzEdge.NextInLML !== null)
    {
      if (horzEdge.OutIdx >= 0)
      {
        op1 = this.AddOutPt(horzEdge, horzEdge.Top);

        horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
        if (horzEdge.WindDelta === 0)
        {
          return;
        }
        //nb: HorzEdge is no longer horizontal here
        var ePrev = horzEdge.PrevInAEL;
        var eNext = horzEdge.NextInAEL;
        if (ePrev !== null && ePrev.Curr.X === horzEdge.Bot.X && ePrev.Curr.Y === horzEdge.Bot.Y && ePrev.WindDelta === 0 && ePrev.OutIdx >= 0 && ePrev.Curr.Y > ePrev.Top.Y && ClipperLib.ClipperBase.SlopesEqual3(horzEdge, ePrev))
        {
          var op2 = this.AddOutPt(ePrev, horzEdge.Bot);
          this.AddJoin(op1, op2, horzEdge.Top);
        } else
        if (eNext !== null && eNext.Curr.X === horzEdge.Bot.X && eNext.Curr.Y === horzEdge.Bot.Y && eNext.WindDelta !== 0 && eNext.OutIdx >= 0 && eNext.Curr.Y > eNext.Top.Y && ClipperLib.ClipperBase.SlopesEqual3(horzEdge, eNext))
        {
          var op2 = this.AddOutPt(eNext, horzEdge.Bot);
          this.AddJoin(op1, op2, horzEdge.Top);
        }
      } else

      {
        horzEdge = this.UpdateEdgeIntoAEL(horzEdge);
      }
    } else

    {
      if (horzEdge.OutIdx >= 0)
      {
        this.AddOutPt(horzEdge, horzEdge.Top);
      }
      this.DeleteFromAEL(horzEdge);
    }
  };

  ClipperLib.Clipper.prototype.GetNextInAEL = function (e, Direction)
  {
    return Direction === ClipperLib.Direction.dLeftToRight ? e.NextInAEL : e.PrevInAEL;
  };

  ClipperLib.Clipper.prototype.IsMinima = function (e)
  {
    return e !== null && e.Prev.NextInLML !== e && e.Next.NextInLML !== e;
  };

  ClipperLib.Clipper.prototype.IsMaxima = function (e, Y)
  {
    return e !== null && e.Top.Y === Y && e.NextInLML === null;
  };

  ClipperLib.Clipper.prototype.IsIntermediate = function (e, Y)
  {
    return e.Top.Y === Y && e.NextInLML !== null;
  };

  ClipperLib.Clipper.prototype.GetMaximaPair = function (e)
  {
    if (ClipperLib.FPoint.op_Equality(e.Next.Top, e.Top) && e.Next.NextInLML === null)
    {
      return e.Next;
    } else

    {
      if (ClipperLib.FPoint.op_Equality(e.Prev.Top, e.Top) && e.Prev.NextInLML === null)
      {
        return e.Prev;
      } else

      {
        return null;
      }
    }
  };

  ClipperLib.Clipper.prototype.GetMaximaPairEx = function (e)
  {
    //as above but returns null if MaxPair isn't in AEL (unless it's horizontal)
    var result = this.GetMaximaPair(e);
    if (result === null || result.OutIdx === ClipperLib.ClipperBase.Skip ||
    result.NextInAEL === result.PrevInAEL && !ClipperLib.ClipperBase.IsHorizontal(result))
    {
      return null;
    }
    return result;
  };

  ClipperLib.Clipper.prototype.ProcessIntersections = function (topY)
  {
    if (this.m_ActiveEdges === null)
    return true;
    try
    {
      this.BuildIntersectList(topY);
      if (this.m_IntersectList.length === 0)
      return true;
      if (this.m_IntersectList.length === 1 || this.FixupIntersectionOrder())
      this.ProcessIntersectList();else

      return false;
    }
    catch ($$e2)
    {
      this.m_SortedEdges = null;
      this.m_IntersectList.length = 0;
      ClipperLib.Error("ProcessIntersections error");
    }
    this.m_SortedEdges = null;
    return true;
  };

  ClipperLib.Clipper.prototype.BuildIntersectList = function (topY)
  {
    if (this.m_ActiveEdges === null)
    return;
    //prepare for sorting ...
    var e = this.m_ActiveEdges;
    //console.log(JSON.stringify(JSON.decycle( e )));
    this.m_SortedEdges = e;
    while (e !== null)
    {
      e.PrevInSEL = e.PrevInAEL;
      e.NextInSEL = e.NextInAEL;
      e.Curr.X = ClipperLib.Clipper.TopX(e, topY);
      e = e.NextInAEL;
    }
    //bubblesort ...
    var isModified = true;
    while (isModified && this.m_SortedEdges !== null)
    {
      isModified = false;
      e = this.m_SortedEdges;
      while (e.NextInSEL !== null)
      {
        var eNext = e.NextInSEL;
        var pt = new ClipperLib.FPoint0();
        //console.log("e.Curr.X: " + e.Curr.X + " eNext.Curr.X" + eNext.Curr.X);
        if (e.Curr.X > eNext.Curr.X)
        {
          this.IntersectPoint(e, eNext, pt);
          if (pt.Y < topY)
          {
            pt = new ClipperLib.FPoint2(ClipperLib.Clipper.TopX(e, topY), topY);
          }
          var newNode = new ClipperLib.IntersectNode();
          newNode.Edge1 = e;
          newNode.Edge2 = eNext;
          //newNode.Pt = pt;
          newNode.Pt.X = pt.X;
          newNode.Pt.Y = pt.Y;
          if (ClipperLib.use_xyz) newNode.Pt.Z = pt.Z;
          this.m_IntersectList.push(newNode);
          this.SwapPositionsInSEL(e, eNext);
          isModified = true;
        } else

        e = eNext;
      }
      if (e.PrevInSEL !== null)
      e.PrevInSEL.NextInSEL = null;else

      break;
    }
    this.m_SortedEdges = null;
  };

  ClipperLib.Clipper.prototype.EdgesAdjacent = function (inode)
  {
    return inode.Edge1.NextInSEL === inode.Edge2 || inode.Edge1.PrevInSEL === inode.Edge2;
  };

  ClipperLib.Clipper.IntersectNodeSort = function (node1, node2)
  {
    //the following typecast is safe because the differences in Pt.Y will
    //be limited to the height of the scanbeam.
    return node2.Pt.Y - node1.Pt.Y;
  };

  ClipperLib.Clipper.prototype.FixupIntersectionOrder = function ()
  {
    //pre-condition: intersections are sorted bottom-most first.
    //Now it's crucial that intersections are made only between adjacent edges,
    //so to ensure this the order of intersections may need adjusting ...
    this.m_IntersectList.sort(this.m_IntersectNodeComparer);
    this.CopyAELToSEL();
    var cnt = this.m_IntersectList.length;
    for (var i = 0; i < cnt; i++)
    {
      if (!this.EdgesAdjacent(this.m_IntersectList[i]))
      {
        var j = i + 1;
        while (j < cnt && !this.EdgesAdjacent(this.m_IntersectList[j])) {
          j++;}
        if (j === cnt)
        return false;
        var tmp = this.m_IntersectList[i];
        this.m_IntersectList[i] = this.m_IntersectList[j];
        this.m_IntersectList[j] = tmp;
      }
      this.SwapPositionsInSEL(this.m_IntersectList[i].Edge1, this.m_IntersectList[i].Edge2);
    }
    return true;
  };

  ClipperLib.Clipper.prototype.ProcessIntersectList = function ()
  {
    for (var i = 0, ilen = this.m_IntersectList.length; i < ilen; i++)
    {
      var iNode = this.m_IntersectList[i];
      this.IntersectEdges(iNode.Edge1, iNode.Edge2, iNode.Pt);
      this.SwapPositionsInAEL(iNode.Edge1, iNode.Edge2);
    }
    this.m_IntersectList.length = 0;
  };

  ClipperLib.Clipper.TopX = function (edge, currentY)
  {
    //if (edge.Bot == edge.Curr) alert ("edge.Bot = edge.Curr");
    //if (edge.Bot == edge.Top) alert ("edge.Bot = edge.Top");
    if (currentY === edge.Top.Y)
    return edge.Top.X;
    return edge.Bot.X + edge.Dx * (currentY - edge.Bot.Y);
  };

  ClipperLib.Clipper.prototype.IntersectPoint = function (edge1, edge2, ip)
  {
    ip.X = 0;
    ip.Y = 0;
    var b1, b2;
    //nb: with very large coordinate values, it's possible for SlopesEqual() to
    //return false but for the edge.Dx value be equal due to double precision rounding.
    if (edge1.Dx === edge2.Dx)
    {
      ip.Y = edge1.Curr.Y;
      ip.X = ClipperLib.Clipper.TopX(edge1, ip.Y);
      return;
    }
    if (edge1.Delta.X === 0)
    {
      ip.X = edge1.Bot.X;
      if (ClipperLib.ClipperBase.IsHorizontal(edge2))
      {
        ip.Y = edge2.Bot.Y;
      } else

      {
        b2 = edge2.Bot.Y - edge2.Bot.X / edge2.Dx;
        ip.Y = ip.X / edge2.Dx + b2;
      }
    } else
    if (edge2.Delta.X === 0)
    {
      ip.X = edge2.Bot.X;
      if (ClipperLib.ClipperBase.IsHorizontal(edge1))
      {
        ip.Y = edge1.Bot.Y;
      } else

      {
        b1 = edge1.Bot.Y - edge1.Bot.X / edge1.Dx;
        ip.Y = ip.X / edge1.Dx + b1;
      }
    } else

    {
      b1 = edge1.Bot.X - edge1.Bot.Y * edge1.Dx;
      b2 = edge2.Bot.X - edge2.Bot.Y * edge2.Dx;
      var q = (b2 - b1) / (edge1.Dx - edge2.Dx);
      ip.Y = q;
      if (Math.abs(edge1.Dx) < Math.abs(edge2.Dx))
      ip.X = edge1.Dx * q + b1;else

      ip.X = edge2.Dx * q + b2;
    }
    if (ip.Y < edge1.Top.Y || ip.Y < edge2.Top.Y)
    {
      if (edge1.Top.Y > edge2.Top.Y)
      {
        ip.Y = edge1.Top.Y;
        ip.X = ClipperLib.Clipper.TopX(edge2, edge1.Top.Y);
        return ip.X < edge1.Top.X;
      } else

      ip.Y = edge2.Top.Y;
      if (Math.abs(edge1.Dx) < Math.abs(edge2.Dx))
      ip.X = ClipperLib.Clipper.TopX(edge1, ip.Y);else

      ip.X = ClipperLib.Clipper.TopX(edge2, ip.Y);
    }
    //finally, don't allow 'ip' to be BELOW curr.Y (ie bottom of scanbeam) ...
    if (ip.Y > edge1.Curr.Y)
    {
      ip.Y = edge1.Curr.Y;
      //better to use the more vertical edge to derive X ...
      if (Math.abs(edge1.Dx) > Math.abs(edge2.Dx))
      ip.X = ClipperLib.Clipper.TopX(edge2, ip.Y);else

      ip.X = ClipperLib.Clipper.TopX(edge1, ip.Y);
    }
  };

  ClipperLib.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function (topY)
  {
    var e = this.m_ActiveEdges;

    while (e !== null)
    {
      //1. process maxima, treating them as if they're 'bent' horizontal edges,
      //   but exclude maxima with horizontal edges. nb: e can't be a horizontal.
      var IsMaximaEdge = this.IsMaxima(e, topY);
      if (IsMaximaEdge)
      {
        var eMaxPair = this.GetMaximaPairEx(e);
        IsMaximaEdge = eMaxPair === null || !ClipperLib.ClipperBase.IsHorizontal(eMaxPair);
      }
      if (IsMaximaEdge)
      {
        if (this.StrictlySimple)
        {
          this.InsertMaxima(e.Top.X);
        }
        var ePrev = e.PrevInAEL;
        this.DoMaxima(e);
        if (ePrev === null)
        e = this.m_ActiveEdges;else

        e = ePrev.NextInAEL;
      } else

      {
        //2. promote horizontal edges, otherwise update Curr.X and Curr.Y ...
        if (this.IsIntermediate(e, topY) && ClipperLib.ClipperBase.IsHorizontal(e.NextInLML))
        {
          e = this.UpdateEdgeIntoAEL(e);
          if (e.OutIdx >= 0)
          this.AddOutPt(e, e.Bot);
          this.AddEdgeToSEL(e);
        } else

        {
          e.Curr.X = ClipperLib.Clipper.TopX(e, topY);
          e.Curr.Y = topY;
        }

        if (ClipperLib.use_xyz)
        {
          if (e.Top.Y === topY) e.Curr.Z = e.Top.Z;else
          if (e.Bot.Y === topY) e.Curr.Z = e.Bot.Z;else
          e.Curr.Z = 0;
        }

        //When StrictlySimple and 'e' is being touched by another edge, then
        //make sure both edges have a vertex here ...
        if (this.StrictlySimple)
        {
          var ePrev = e.PrevInAEL;
          if (e.OutIdx >= 0 && e.WindDelta !== 0 && ePrev !== null &&
          ePrev.OutIdx >= 0 && ePrev.Curr.X === e.Curr.X &&
          ePrev.WindDelta !== 0)
          {
            var ip = new ClipperLib.FPoint1(e.Curr);

            if (ClipperLib.use_xyz)
            {
              this.SetZ(ip, ePrev, e);
            }

            var op = this.AddOutPt(ePrev, ip);
            var op2 = this.AddOutPt(e, ip);
            this.AddJoin(op, op2, ip); //StrictlySimple (type-3) join
          }
        }
        e = e.NextInAEL;
      }
    }
    //3. Process horizontals at the Top of the scanbeam ...
    this.ProcessHorizontals();
    this.m_Maxima = null;
    //4. Promote intermediate vertices ...
    e = this.m_ActiveEdges;
    while (e !== null)
    {
      if (this.IsIntermediate(e, topY))
      {
        var op = null;
        if (e.OutIdx >= 0)
        op = this.AddOutPt(e, e.Top);
        e = this.UpdateEdgeIntoAEL(e);
        //if output polygons share an edge, they'll need joining later ...
        var ePrev = e.PrevInAEL;
        var eNext = e.NextInAEL;

        if (ePrev !== null && ePrev.Curr.X === e.Bot.X && ePrev.Curr.Y === e.Bot.Y && op !== null && ePrev.OutIdx >= 0 && ePrev.Curr.Y === ePrev.Top.Y && ClipperLib.ClipperBase.SlopesEqual5(e.Curr, e.Top, ePrev.Curr, ePrev.Top) && e.WindDelta !== 0 && ePrev.WindDelta !== 0)
        {
          var op2 = this.AddOutPt(ePrev2, e.Bot);
          this.AddJoin(op, op2, e.Top);
        } else
        if (eNext !== null && eNext.Curr.X === e.Bot.X && eNext.Curr.Y === e.Bot.Y && op !== null && eNext.OutIdx >= 0 && eNext.Curr.Y === eNext.Top.Y && ClipperLib.ClipperBase.SlopesEqual5(e.Curr, e.Top, eNext.Curr, eNext.Top) && e.WindDelta !== 0 && eNext.WindDelta !== 0)
        {
          var op2 = this.AddOutPt(eNext, e.Bot);
          this.AddJoin(op, op2, e.Top);
        }
      }
      e = e.NextInAEL;
    }
  };

  ClipperLib.Clipper.prototype.DoMaxima = function (e)
  {
    var eMaxPair = this.GetMaximaPairEx(e);
    if (eMaxPair === null)
    {
      if (e.OutIdx >= 0)
      this.AddOutPt(e, e.Top);
      this.DeleteFromAEL(e);
      return;
    }
    var eNext = e.NextInAEL;
    while (eNext !== null && eNext !== eMaxPair)
    {
      this.IntersectEdges(e, eNext, e.Top);
      this.SwapPositionsInAEL(e, eNext);
      eNext = e.NextInAEL;
    }
    if (e.OutIdx === -1 && eMaxPair.OutIdx === -1)
    {
      this.DeleteFromAEL(e);
      this.DeleteFromAEL(eMaxPair);
    } else
    if (e.OutIdx >= 0 && eMaxPair.OutIdx >= 0)
    {
      if (e.OutIdx >= 0) this.AddLocalMaxPoly(e, eMaxPair, e.Top);
      this.DeleteFromAEL(e);
      this.DeleteFromAEL(eMaxPair);
    } else
    if (ClipperLib.use_lines && e.WindDelta === 0)
    {
      if (e.OutIdx >= 0)
      {
        this.AddOutPt(e, e.Top);
        e.OutIdx = ClipperLib.ClipperBase.Unassigned;
      }
      this.DeleteFromAEL(e);
      if (eMaxPair.OutIdx >= 0)
      {
        this.AddOutPt(eMaxPair, e.Top);
        eMaxPair.OutIdx = ClipperLib.ClipperBase.Unassigned;
      }
      this.DeleteFromAEL(eMaxPair);
    } else

    ClipperLib.Error("DoMaxima error");
  };

  ClipperLib.Clipper.ReversePaths = function (polys)
  {
    for (var i = 0, len = polys.length; i < len; i++) {
      polys[i].reverse();}
  };

  ClipperLib.Clipper.Orientation = function (poly)
  {
    return ClipperLib.Clipper.Area(poly) >= 0;
  };

  ClipperLib.Clipper.prototype.PointCount = function (pts)
  {
    if (pts === null)
    return 0;
    var result = 0;
    var p = pts;
    do {
      result++;
      p = p.Next;
    } while (
    p !== pts);
    return result;
  };

  ClipperLib.Clipper.prototype.BuildResult = function (polyg)
  {
    ClipperLib.Clear(polyg);
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      var outRec = this.m_PolyOuts[i];
      if (outRec.Pts === null)
      continue;
      var p = outRec.Pts.Prev;
      var cnt = this.PointCount(p);
      if (cnt < 2)
      continue;
      var pg = new Array(cnt);
      for (var j = 0; j < cnt; j++)
      {
        pg[j] = p.Pt;
        p = p.Prev;
      }
      polyg.push(pg);
    }
  };

  ClipperLib.Clipper.prototype.BuildResult2 = function (polytree)
  {
    polytree.Clear();
    //add each output polygon/contour to polytree ...
    //polytree.m_AllPolys.set_Capacity(this.m_PolyOuts.length);
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      var outRec = this.m_PolyOuts[i];
      var cnt = this.PointCount(outRec.Pts);
      if (outRec.IsOpen && cnt < 2 || !outRec.IsOpen && cnt < 3)
      continue;
      this.FixHoleLinkage(outRec);
      var pn = new ClipperLib.PolyNode();
      polytree.m_AllPolys.push(pn);
      outRec.PolyNode = pn;
      pn.m_polygon.length = cnt;
      var op = outRec.Pts.Prev;
      for (var j = 0; j < cnt; j++)
      {
        pn.m_polygon[j] = op.Pt;
        op = op.Prev;
      }
    }
    //fixup PolyNode links etc ...
    //polytree.m_Childs.set_Capacity(this.m_PolyOuts.length);
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      var outRec = this.m_PolyOuts[i];
      if (outRec.PolyNode === null)
      continue;else
      if (outRec.IsOpen)
      {
        outRec.PolyNode.IsOpen = true;
        polytree.AddChild(outRec.PolyNode);
      } else
      if (outRec.FirstLeft !== null && outRec.FirstLeft.PolyNode !== null)
      outRec.FirstLeft.PolyNode.AddChild(outRec.PolyNode);else

      polytree.AddChild(outRec.PolyNode);
    }
  };

  ClipperLib.Clipper.prototype.FixupOutPolyline = function (outRec)
  {
    var pp = outRec.Pts;
    var lastPP = pp.Prev;
    while (pp !== lastPP)
    {
      pp = pp.Next;
      if (ClipperLib.FPoint.op_Equality(pp.Pt, pp.Prev.Pt))
      {
        if (pp === lastPP)
        {
          lastPP = pp.Prev;
        }
        var tmpPP = pp.Prev;
        tmpPP.Next = pp.Next;
        pp.Next.Prev = tmpPP;
        pp = tmpPP;
      }
    }
    if (pp === pp.Prev)
    {
      outRec.Pts = null;
    }
  };

  ClipperLib.Clipper.prototype.FixupOutPolygon = function (outRec)
  {
    //FixupOutPolygon() - removes duplicate points and simplifies consecutive
    //parallel edges by removing the middle vertex.
    var lastOK = null;
    outRec.BottomPt = null;
    var pp = outRec.Pts;
    var preserveCol = this.PreserveCollinear || this.StrictlySimple;
    for (;;)
    {
      if (pp.Prev === pp || pp.Prev === pp.Next)
      {
        outRec.Pts = null;
        return;
      }

      //test for duplicate points and collinear edges ...
      if (ClipperLib.FPoint.op_Equality(pp.Pt, pp.Next.Pt) || ClipperLib.FPoint.op_Equality(pp.Pt, pp.Prev.Pt) || ClipperLib.ClipperBase.SlopesEqual4(pp.Prev.Pt, pp.Pt, pp.Next.Pt) && (!preserveCol || !this.Pt2IsBetweenPt1AndPt3(pp.Prev.Pt, pp.Pt, pp.Next.Pt)))
      {
        lastOK = null;
        pp.Prev.Next = pp.Next;
        pp.Next.Prev = pp.Prev;
        pp = pp.Prev;
      } else
      if (pp === lastOK)
      break;else

      {
        if (lastOK === null)
        lastOK = pp;
        pp = pp.Next;
      }
    }
    outRec.Pts = pp;
  };

  ClipperLib.Clipper.prototype.DupOutPt = function (outPt, InsertAfter)
  {
    var result = new ClipperLib.OutPt();
    //result.Pt = outPt.Pt;
    result.Pt.X = outPt.Pt.X;
    result.Pt.Y = outPt.Pt.Y;
    if (ClipperLib.use_xyz) result.Pt.Z = outPt.Pt.Z;
    result.Idx = outPt.Idx;
    if (InsertAfter)
    {
      result.Next = outPt.Next;
      result.Prev = outPt;
      outPt.Next.Prev = result;
      outPt.Next = result;
    } else

    {
      result.Prev = outPt.Prev;
      result.Next = outPt;
      outPt.Prev.Next = result;
      outPt.Prev = result;
    }
    return result;
  };

  ClipperLib.Clipper.prototype.GetOverlap = function (a1, a2, b1, b2, $val)
  {
    if (a1 < a2)
    {
      if (b1 < b2)
      {
        $val.Left = Math.max(a1, b1);
        $val.Right = Math.min(a2, b2);
      } else

      {
        $val.Left = Math.max(a1, b2);
        $val.Right = Math.min(a2, b1);
      }
    } else

    {
      if (b1 < b2)
      {
        $val.Left = Math.max(a2, b1);
        $val.Right = Math.min(a1, b2);
      } else

      {
        $val.Left = Math.max(a2, b2);
        $val.Right = Math.min(a1, b1);
      }
    }
    return $val.Left < $val.Right;
  };

  ClipperLib.Clipper.prototype.JoinHorz = function (op1, op1b, op2, op2b, Pt, DiscardLeft)
  {
    var Dir1 = op1.Pt.X > op1b.Pt.X ? ClipperLib.Direction.dRightToLeft : ClipperLib.Direction.dLeftToRight;
    var Dir2 = op2.Pt.X > op2b.Pt.X ? ClipperLib.Direction.dRightToLeft : ClipperLib.Direction.dLeftToRight;
    if (Dir1 === Dir2)
    return false;
    //When DiscardLeft, we want Op1b to be on the Left of Op1, otherwise we
    //want Op1b to be on the Right. (And likewise with Op2 and Op2b.)
    //So, to facilitate this while inserting Op1b and Op2b ...
    //when DiscardLeft, make sure we're AT or RIGHT of Pt before adding Op1b,
    //otherwise make sure we're AT or LEFT of Pt. (Likewise with Op2b.)
    if (Dir1 === ClipperLib.Direction.dLeftToRight)
    {
      while (op1.Next.Pt.X <= Pt.X &&
      op1.Next.Pt.X >= op1.Pt.X && op1.Next.Pt.Y === Pt.Y) {
        op1 = op1.Next;}
      if (DiscardLeft && op1.Pt.X !== Pt.X)
      op1 = op1.Next;
      op1b = this.DupOutPt(op1, !DiscardLeft);
      if (ClipperLib.FPoint.op_Inequality(op1b.Pt, Pt))
      {
        op1 = op1b;
        //op1.Pt = Pt;
        op1.Pt.X = Pt.X;
        op1.Pt.Y = Pt.Y;
        if (ClipperLib.use_xyz) op1.Pt.Z = Pt.Z;
        op1b = this.DupOutPt(op1, !DiscardLeft);
      }
    } else

    {
      while (op1.Next.Pt.X >= Pt.X &&
      op1.Next.Pt.X <= op1.Pt.X && op1.Next.Pt.Y === Pt.Y) {
        op1 = op1.Next;}
      if (!DiscardLeft && op1.Pt.X !== Pt.X)
      op1 = op1.Next;
      op1b = this.DupOutPt(op1, DiscardLeft);
      if (ClipperLib.FPoint.op_Inequality(op1b.Pt, Pt))
      {
        op1 = op1b;
        //op1.Pt = Pt;
        op1.Pt.X = Pt.X;
        op1.Pt.Y = Pt.Y;
        if (ClipperLib.use_xyz) op1.Pt.Z = Pt.Z;
        op1b = this.DupOutPt(op1, DiscardLeft);
      }
    }
    if (Dir2 === ClipperLib.Direction.dLeftToRight)
    {
      while (op2.Next.Pt.X <= Pt.X &&
      op2.Next.Pt.X >= op2.Pt.X && op2.Next.Pt.Y === Pt.Y) {
        op2 = op2.Next;}
      if (DiscardLeft && op2.Pt.X !== Pt.X)
      op2 = op2.Next;
      op2b = this.DupOutPt(op2, !DiscardLeft);
      if (ClipperLib.FPoint.op_Inequality(op2b.Pt, Pt))
      {
        op2 = op2b;
        //op2.Pt = Pt;
        op2.Pt.X = Pt.X;
        op2.Pt.Y = Pt.Y;
        if (ClipperLib.use_xyz) op2.Pt.Z = Pt.Z;
        op2b = this.DupOutPt(op2, !DiscardLeft);
      }
    } else

    {
      while (op2.Next.Pt.X >= Pt.X &&
      op2.Next.Pt.X <= op2.Pt.X && op2.Next.Pt.Y === Pt.Y) {
        op2 = op2.Next;}
      if (!DiscardLeft && op2.Pt.X !== Pt.X)
      op2 = op2.Next;
      op2b = this.DupOutPt(op2, DiscardLeft);
      if (ClipperLib.FPoint.op_Inequality(op2b.Pt, Pt))
      {
        op2 = op2b;
        //op2.Pt = Pt;
        op2.Pt.X = Pt.X;
        op2.Pt.Y = Pt.Y;
        if (ClipperLib.use_xyz) op2.Pt.Z = Pt.Z;
        op2b = this.DupOutPt(op2, DiscardLeft);
      }
    }
    if (Dir1 === ClipperLib.Direction.dLeftToRight === DiscardLeft)
    {
      op1.Prev = op2;
      op2.Next = op1;
      op1b.Next = op2b;
      op2b.Prev = op1b;
    } else

    {
      op1.Next = op2;
      op2.Prev = op1;
      op1b.Prev = op2b;
      op2b.Next = op1b;
    }
    return true;
  };

  ClipperLib.Clipper.prototype.JoinPoints = function (j, outRec1, outRec2)
  {
    var op1 = j.OutPt1,
    op1b = new ClipperLib.OutPt();
    var op2 = j.OutPt2,
    op2b = new ClipperLib.OutPt();
    //There are 3 kinds of joins for output polygons ...
    //1. Horizontal joins where Join.OutPt1 & Join.OutPt2 are vertices anywhere
    //along (horizontal) collinear edges (& Join.OffPt is on the same horizontal).
    //2. Non-horizontal joins where Join.OutPt1 & Join.OutPt2 are at the same
    //location at the Bottom of the overlapping segment (& Join.OffPt is above).
    //3. StrictlySimple joins where edges touch but are not collinear and where
    //Join.OutPt1, Join.OutPt2 & Join.OffPt all share the same point.
    var isHorizontal = j.OutPt1.Pt.Y === j.OffPt.Y;
    if (isHorizontal && ClipperLib.FPoint.op_Equality(j.OffPt, j.OutPt1.Pt) && ClipperLib.FPoint.op_Equality(j.OffPt, j.OutPt2.Pt))
    {
      //Strictly Simple join ...
      if (outRec1 !== outRec2) return false;

      op1b = j.OutPt1.Next;
      while (op1b !== op1 && ClipperLib.FPoint.op_Equality(op1b.Pt, j.OffPt)) {
        op1b = op1b.Next;}
      var reverse1 = op1b.Pt.Y > j.OffPt.Y;
      op2b = j.OutPt2.Next;
      while (op2b !== op2 && ClipperLib.FPoint.op_Equality(op2b.Pt, j.OffPt)) {
        op2b = op2b.Next;}
      var reverse2 = op2b.Pt.Y > j.OffPt.Y;
      if (reverse1 === reverse2)
      return false;
      if (reverse1)
      {
        op1b = this.DupOutPt(op1, false);
        op2b = this.DupOutPt(op2, true);
        op1.Prev = op2;
        op2.Next = op1;
        op1b.Next = op2b;
        op2b.Prev = op1b;
        j.OutPt1 = op1;
        j.OutPt2 = op1b;
        return true;
      } else

      {
        op1b = this.DupOutPt(op1, true);
        op2b = this.DupOutPt(op2, false);
        op1.Next = op2;
        op2.Prev = op1;
        op1b.Prev = op2b;
        op2b.Next = op1b;
        j.OutPt1 = op1;
        j.OutPt2 = op1b;
        return true;
      }
    } else
    if (isHorizontal)
    {
      //treat horizontal joins differently to non-horizontal joins since with
      //them we're not yet sure where the overlapping is. OutPt1.Pt & OutPt2.Pt
      //may be anywhere along the horizontal edge.
      op1b = op1;
      while (op1.Prev.Pt.Y === op1.Pt.Y && op1.Prev !== op1b && op1.Prev !== op2) {
        op1 = op1.Prev;}
      while (op1b.Next.Pt.Y === op1b.Pt.Y && op1b.Next !== op1 && op1b.Next !== op2) {
        op1b = op1b.Next;}
      if (op1b.Next === op1 || op1b.Next === op2)
      return false;
      //a flat 'polygon'
      op2b = op2;
      while (op2.Prev.Pt.Y === op2.Pt.Y && op2.Prev !== op2b && op2.Prev !== op1b) {
        op2 = op2.Prev;}
      while (op2b.Next.Pt.Y === op2b.Pt.Y && op2b.Next !== op2 && op2b.Next !== op1) {
        op2b = op2b.Next;}
      if (op2b.Next === op2 || op2b.Next === op1)
      return false;
      //a flat 'polygon'
      //Op1 -. Op1b & Op2 -. Op2b are the extremites of the horizontal edges

      var $val = {
        Left: null,
        Right: null };


      if (!this.GetOverlap(op1.Pt.X, op1b.Pt.X, op2.Pt.X, op2b.Pt.X, $val))
      return false;
      var Left = $val.Left;
      var Right = $val.Right;

      //DiscardLeftSide: when overlapping edges are joined, a spike will created
      //which needs to be cleaned up. However, we don't want Op1 or Op2 caught up
      //on the discard Side as either may still be needed for other joins ...
      var Pt = new ClipperLib.FPoint0();
      var DiscardLeftSide;
      if (op1.Pt.X >= Left && op1.Pt.X <= Right)
      {
        //Pt = op1.Pt;
        Pt.X = op1.Pt.X;
        Pt.Y = op1.Pt.Y;
        if (ClipperLib.use_xyz) Pt.Z = op1.Pt.Z;
        DiscardLeftSide = op1.Pt.X > op1b.Pt.X;
      } else
      if (op2.Pt.X >= Left && op2.Pt.X <= Right)
      {
        //Pt = op2.Pt;
        Pt.X = op2.Pt.X;
        Pt.Y = op2.Pt.Y;
        if (ClipperLib.use_xyz) Pt.Z = op2.Pt.Z;
        DiscardLeftSide = op2.Pt.X > op2b.Pt.X;
      } else
      if (op1b.Pt.X >= Left && op1b.Pt.X <= Right)
      {
        //Pt = op1b.Pt;
        Pt.X = op1b.Pt.X;
        Pt.Y = op1b.Pt.Y;
        if (ClipperLib.use_xyz) Pt.Z = op1b.Pt.Z;
        DiscardLeftSide = op1b.Pt.X > op1.Pt.X;
      } else

      {
        //Pt = op2b.Pt;
        Pt.X = op2b.Pt.X;
        Pt.Y = op2b.Pt.Y;
        if (ClipperLib.use_xyz) Pt.Z = op2b.Pt.Z;
        DiscardLeftSide = op2b.Pt.X > op2.Pt.X;
      }
      j.OutPt1 = op1;
      j.OutPt2 = op2;
      return this.JoinHorz(op1, op1b, op2, op2b, Pt, DiscardLeftSide);
    } else

    {
      //nb: For non-horizontal joins ...
      //    1. Jr.OutPt1.Pt.Y == Jr.OutPt2.Pt.Y
      //    2. Jr.OutPt1.Pt > Jr.OffPt.Y
      //make sure the polygons are correctly oriented ...
      op1b = op1.Next;
      while (ClipperLib.FPoint.op_Equality(op1b.Pt, op1.Pt) && op1b !== op1) {
        op1b = op1b.Next;}
      var Reverse1 = op1b.Pt.Y > op1.Pt.Y || !ClipperLib.ClipperBase.SlopesEqual4(op1.Pt, op1b.Pt, j.OffPt);
      if (Reverse1)
      {
        op1b = op1.Prev;
        while (ClipperLib.FPoint.op_Equality(op1b.Pt, op1.Pt) && op1b !== op1) {
          op1b = op1b.Prev;}

        if (op1b.Pt.Y > op1.Pt.Y || !ClipperLib.ClipperBase.SlopesEqual4(op1.Pt, op1b.Pt, j.OffPt))
        return false;
      }
      op2b = op2.Next;
      while (ClipperLib.FPoint.op_Equality(op2b.Pt, op2.Pt) && op2b !== op2) {
        op2b = op2b.Next;}

      var Reverse2 = op2b.Pt.Y > op2.Pt.Y || !ClipperLib.ClipperBase.SlopesEqual4(op2.Pt, op2b.Pt, j.OffPt);
      if (Reverse2)
      {
        op2b = op2.Prev;
        while (ClipperLib.FPoint.op_Equality(op2b.Pt, op2.Pt) && op2b !== op2) {
          op2b = op2b.Prev;}

        if (op2b.Pt.Y > op2.Pt.Y || !ClipperLib.ClipperBase.SlopesEqual4(op2.Pt, op2b.Pt, j.OffPt))
        return false;
      }
      if (op1b === op1 || op2b === op2 || op1b === op2b ||
      outRec1 === outRec2 && Reverse1 === Reverse2)
      return false;
      if (Reverse1)
      {
        op1b = this.DupOutPt(op1, false);
        op2b = this.DupOutPt(op2, true);
        op1.Prev = op2;
        op2.Next = op1;
        op1b.Next = op2b;
        op2b.Prev = op1b;
        j.OutPt1 = op1;
        j.OutPt2 = op1b;
        return true;
      } else

      {
        op1b = this.DupOutPt(op1, true);
        op2b = this.DupOutPt(op2, false);
        op1.Next = op2;
        op2.Prev = op1;
        op1b.Prev = op2b;
        op2b.Next = op1b;
        j.OutPt1 = op1;
        j.OutPt2 = op1b;
        return true;
      }
    }
  };

  ClipperLib.Clipper.GetBounds = function (paths)
  {
    var i = 0,
    cnt = paths.length;
    while (i < cnt && paths[i].length === 0) {i++;}
    if (i === cnt) return new ClipperLib.FRect(0, 0, 0, 0);
    var result = new ClipperLib.FRect();
    result.left = paths[i][0].X;
    result.right = result.left;
    result.top = paths[i][0].Y;
    result.bottom = result.top;
    for (; i < cnt; i++) {
      for (var j = 0, jlen = paths[i].length; j < jlen; j++)
      {
        if (paths[i][j].X < result.left) result.left = paths[i][j].X;else
        if (paths[i][j].X > result.right) result.right = paths[i][j].X;
        if (paths[i][j].Y < result.top) result.top = paths[i][j].Y;else
        if (paths[i][j].Y > result.bottom) result.bottom = paths[i][j].Y;
      }}
    return result;
  };
  ClipperLib.Clipper.prototype.GetBounds2 = function (ops)
  {
    var opStart = ops;
    var result = new ClipperLib.FRect();
    result.left = ops.Pt.X;
    result.right = ops.Pt.X;
    result.top = ops.Pt.Y;
    result.bottom = ops.Pt.Y;
    ops = ops.Next;
    while (ops !== opStart)
    {
      if (ops.Pt.X < result.left)
      result.left = ops.Pt.X;
      if (ops.Pt.X > result.right)
      result.right = ops.Pt.X;
      if (ops.Pt.Y < result.top)
      result.top = ops.Pt.Y;
      if (ops.Pt.Y > result.bottom)
      result.bottom = ops.Pt.Y;
      ops = ops.Next;
    }
    return result;
  };

  ClipperLib.Clipper.PointInPolygon = function (pt, path)
  {
    //returns 0 if false, +1 if true, -1 if pt ON polygon boundary
    //See "The Point in Polygon Problem for Arbitrary Polygons" by Hormann & Agathos
    //http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.88.5498&rep=rep1&type=pdf
    var result = 0,
    cnt = path.length;
    if (cnt < 3)
    return 0;
    var ip = path[0];
    for (var i = 1; i <= cnt; ++i)
    {
      var ipNext = i === cnt ? path[0] : path[i];
      if (ipNext.Y === pt.Y)
      {
        if (ipNext.X === pt.X || ip.Y === pt.Y && ipNext.X > pt.X === ip.X < pt.X)
        return -1;
      }
      if (ip.Y < pt.Y !== ipNext.Y < pt.Y)
      {
        if (ip.X >= pt.X)
        {
          if (ipNext.X > pt.X)
          result = 1 - result;else

          {
            var d = (ip.X - pt.X) * (ipNext.Y - pt.Y) - (ipNext.X - pt.X) * (ip.Y - pt.Y);
            if (d === 0)
            return -1;else
            if (d > 0 === ipNext.Y > ip.Y)
            result = 1 - result;
          }
        } else

        {
          if (ipNext.X > pt.X)
          {
            var d = (ip.X - pt.X) * (ipNext.Y - pt.Y) - (ipNext.X - pt.X) * (ip.Y - pt.Y);
            if (d === 0)
            return -1;else
            if (d > 0 === ipNext.Y > ip.Y)
            result = 1 - result;
          }
        }
      }
      ip = ipNext;
    }
    return result;
  };

  ClipperLib.Clipper.prototype.PointInPolygon = function (pt, op)
  {
    //returns 0 if false, +1 if true, -1 if pt ON polygon boundary
    var result = 0;
    var startOp = op;
    var ptx = pt.X,
    pty = pt.Y;
    var poly0x = op.Pt.X,
    poly0y = op.Pt.Y;
    do {
      op = op.Next;
      var poly1x = op.Pt.X,
      poly1y = op.Pt.Y;
      if (poly1y === pty)
      {
        if (poly1x === ptx || poly0y === pty && poly1x > ptx === poly0x < ptx)
        return -1;
      }
      if (poly0y < pty !== poly1y < pty)
      {
        if (poly0x >= ptx)
        {
          if (poly1x > ptx)
          result = 1 - result;else

          {
            var d = (poly0x - ptx) * (poly1y - pty) - (poly1x - ptx) * (poly0y - pty);
            if (d === 0)
            return -1;
            if (d > 0 === poly1y > poly0y)
            result = 1 - result;
          }
        } else

        {
          if (poly1x > ptx)
          {
            var d = (poly0x - ptx) * (poly1y - pty) - (poly1x - ptx) * (poly0y - pty);
            if (d === 0)
            return -1;
            if (d > 0 === poly1y > poly0y)
            result = 1 - result;
          }
        }
      }
      poly0x = poly1x;
      poly0y = poly1y;
    } while (startOp !== op);

    return result;
  };

  ClipperLib.Clipper.prototype.Poly2ContainsPoly1 = function (outPt1, outPt2)
  {
    var op = outPt1;
    do {
      //nb: PointInPolygon returns 0 if false, +1 if true, -1 if pt on polygon
      var res = this.PointInPolygon(op.Pt, outPt2);
      if (res >= 0)
      return res > 0;
      op = op.Next;
    } while (
    op !== outPt1);
    return true;
  };

  ClipperLib.Clipper.prototype.FixupFirstLefts1 = function (OldOutRec, NewOutRec)
  {
    var outRec, firstLeft;
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      outRec = this.m_PolyOuts[i];
      firstLeft = ClipperLib.Clipper.ParseFirstLeft(outRec.FirstLeft);
      if (outRec.Pts !== null && firstLeft === OldOutRec)
      {
        if (this.Poly2ContainsPoly1(outRec.Pts, NewOutRec.Pts))
        outRec.FirstLeft = NewOutRec;
      }
    }
  };

  ClipperLib.Clipper.prototype.FixupFirstLefts2 = function (innerOutRec, outerOutRec)
  {
    //A polygon has split into two such that one is now the inner of the other.
    //It's possible that these polygons now wrap around other polygons, so check
    //every polygon that's also contained by OuterOutRec's FirstLeft container
    //(including nil) to see if they've become inner to the new inner polygon ...
    var orfl = outerOutRec.FirstLeft;
    var outRec, firstLeft;
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      outRec = this.m_PolyOuts[i];
      if (outRec.Pts === null || outRec === outerOutRec || outRec === innerOutRec)
      continue;
      firstLeft = ClipperLib.Clipper.ParseFirstLeft(outRec.FirstLeft);
      if (firstLeft !== orfl && firstLeft !== innerOutRec && firstLeft !== outerOutRec)
      continue;
      if (this.Poly2ContainsPoly1(outRec.Pts, innerOutRec.Pts))
      outRec.FirstLeft = innerOutRec;else
      if (this.Poly2ContainsPoly1(outRec.Pts, outerOutRec.Pts))
      outRec.FirstLeft = outerOutRec;else
      if (outRec.FirstLeft === innerOutRec || outRec.FirstLeft === outerOutRec)
      outRec.FirstLeft = orfl;
    }
  };

  ClipperLib.Clipper.prototype.FixupFirstLefts3 = function (OldOutRec, NewOutRec)
  {
    //same as FixupFirstLefts1 but doesn't call Poly2ContainsPoly1()
    var outRec;
    var firstLeft;
    for (var i = 0, ilen = this.m_PolyOuts.length; i < ilen; i++)
    {
      outRec = this.m_PolyOuts[i];
      firstLeft = ClipperLib.Clipper.ParseFirstLeft(outRec.FirstLeft);
      if (outRec.Pts !== null && firstLeft === OldOutRec)
      outRec.FirstLeft = NewOutRec;
    }
  };

  ClipperLib.Clipper.ParseFirstLeft = function (FirstLeft)
  {
    while (FirstLeft !== null && FirstLeft.Pts === null) {
      FirstLeft = FirstLeft.FirstLeft;}
    return FirstLeft;
  };

  ClipperLib.Clipper.prototype.JoinCommonEdges = function ()
  {
    for (var i = 0, ilen = this.m_Joins.length; i < ilen; i++)
    {
      var join = this.m_Joins[i];
      var outRec1 = this.GetOutRec(join.OutPt1.Idx);
      var outRec2 = this.GetOutRec(join.OutPt2.Idx);
      if (outRec1.Pts === null || outRec2.Pts === null)
      continue;

      if (outRec1.IsOpen || outRec2.IsOpen)
      {
        continue;
      }

      //get the polygon fragment with the correct hole state (FirstLeft)
      //before calling JoinPoints() ...
      var holeStateRec;
      if (outRec1 === outRec2)
      holeStateRec = outRec1;else
      if (this.OutRec1RightOfOutRec2(outRec1, outRec2))
      holeStateRec = outRec2;else
      if (this.OutRec1RightOfOutRec2(outRec2, outRec1))
      holeStateRec = outRec1;else

      holeStateRec = this.GetLowermostRec(outRec1, outRec2);

      if (!this.JoinPoints(join, outRec1, outRec2)) continue;

      if (outRec1 === outRec2)
      {
        //instead of joining two polygons, we've just created a new one by
        //splitting one polygon into two.
        outRec1.Pts = join.OutPt1;
        outRec1.BottomPt = null;
        outRec2 = this.CreateOutRec();
        outRec2.Pts = join.OutPt2;
        //update all OutRec2.Pts Idx's ...
        this.UpdateOutPtIdxs(outRec2);

        if (this.Poly2ContainsPoly1(outRec2.Pts, outRec1.Pts))
        {
          //outRec1 contains outRec2 ...
          outRec2.IsHole = !outRec1.IsHole;
          outRec2.FirstLeft = outRec1;
          if (this.m_UsingPolyTree)
          this.FixupFirstLefts2(outRec2, outRec1);
          if ((outRec2.IsHole ^ this.ReverseSolution) == this.Area$1(outRec2) > 0)
          this.ReversePolyPtLinks(outRec2.Pts);
        } else
        if (this.Poly2ContainsPoly1(outRec1.Pts, outRec2.Pts))
        {
          //outRec2 contains outRec1 ...
          outRec2.IsHole = outRec1.IsHole;
          outRec1.IsHole = !outRec2.IsHole;
          outRec2.FirstLeft = outRec1.FirstLeft;
          outRec1.FirstLeft = outRec2;
          if (this.m_UsingPolyTree)
          this.FixupFirstLefts2(outRec1, outRec2);

          if ((outRec1.IsHole ^ this.ReverseSolution) == this.Area$1(outRec1) > 0)
          this.ReversePolyPtLinks(outRec1.Pts);
        } else

        {
          //the 2 polygons are completely separate ...
          outRec2.IsHole = outRec1.IsHole;
          outRec2.FirstLeft = outRec1.FirstLeft;
          //fixup FirstLeft pointers that may need reassigning to OutRec2
          if (this.m_UsingPolyTree)
          this.FixupFirstLefts1(outRec1, outRec2);
        }
      } else

      {
        //joined 2 polygons together ...
        outRec2.Pts = null;
        outRec2.BottomPt = null;
        outRec2.Idx = outRec1.Idx;
        outRec1.IsHole = holeStateRec.IsHole;
        if (holeStateRec === outRec2)
        outRec1.FirstLeft = outRec2.FirstLeft;
        outRec2.FirstLeft = outRec1;
        //fixup FirstLeft pointers that may need reassigning to OutRec1
        if (this.m_UsingPolyTree)
        this.FixupFirstLefts3(outRec2, outRec1);
      }
    }
  };

  ClipperLib.Clipper.prototype.UpdateOutPtIdxs = function (outrec)
  {
    var op = outrec.Pts;
    do {
      op.Idx = outrec.Idx;
      op = op.Prev;
    } while (
    op !== outrec.Pts);
  };

  ClipperLib.Clipper.prototype.DoSimplePolygons = function ()
  {
    var i = 0;
    while (i < this.m_PolyOuts.length)
    {
      var outrec = this.m_PolyOuts[i++];
      var op = outrec.Pts;
      if (op === null || outrec.IsOpen)
      continue;
      do //for each Pt in Polygon until duplicate found do ...
      {
        var op2 = op.Next;
        while (op2 !== outrec.Pts)
        {
          if (ClipperLib.FPoint.op_Equality(op.Pt, op2.Pt) && op2.Next !== op && op2.Prev !== op)
          {
            //split the polygon into two ...
            var op3 = op.Prev;
            var op4 = op2.Prev;
            op.Prev = op4;
            op4.Next = op;
            op2.Prev = op3;
            op3.Next = op2;
            outrec.Pts = op;
            var outrec2 = this.CreateOutRec();
            outrec2.Pts = op2;
            this.UpdateOutPtIdxs(outrec2);
            if (this.Poly2ContainsPoly1(outrec2.Pts, outrec.Pts))
            {
              //OutRec2 is contained by OutRec1 ...
              outrec2.IsHole = !outrec.IsHole;
              outrec2.FirstLeft = outrec;
              if (this.m_UsingPolyTree) this.FixupFirstLefts2(outrec2, outrec);

            } else
            if (this.Poly2ContainsPoly1(outrec.Pts, outrec2.Pts))
            {
              //OutRec1 is contained by OutRec2 ...
              outrec2.IsHole = outrec.IsHole;
              outrec.IsHole = !outrec2.IsHole;
              outrec2.FirstLeft = outrec.FirstLeft;
              outrec.FirstLeft = outrec2;
              if (this.m_UsingPolyTree) this.FixupFirstLefts2(outrec, outrec2);
            } else

            {
              //the 2 polygons are separate ...
              outrec2.IsHole = outrec.IsHole;
              outrec2.FirstLeft = outrec.FirstLeft;
              if (this.m_UsingPolyTree) this.FixupFirstLefts1(outrec, outrec2);
            }
            op2 = op;
            //ie get ready for the next iteration
          }
          op2 = op2.Next;
        }
        op = op.Next;
      } while (
      op !== outrec.Pts);
    }
  };

  ClipperLib.Clipper.Area = function (poly)
  {
    if (!Array.isArray(poly))
    return 0;
    var cnt = poly.length;
    if (cnt < 3)
    return 0;
    var a = 0;
    for (var i = 0, j = cnt - 1; i < cnt; ++i)
    {
      a += (poly[j].X + poly[i].X) * (poly[j].Y - poly[i].Y);
      j = i;
    }
    return -a * 0.5;
  };

  ClipperLib.Clipper.prototype.Area = function (op)
  {
    var opFirst = op;
    if (op === null) return 0;
    var a = 0;
    do {
      a = a + (op.Prev.Pt.X + op.Pt.X) * (op.Prev.Pt.Y - op.Pt.Y);
      op = op.Next;
    } while (op !== opFirst); // && typeof op !== 'undefined');
    return a * 0.5;
  };

  ClipperLib.Clipper.prototype.Area$1 = function (outRec)
  {
    return this.Area(outRec.Pts);
  };

  ClipperLib.Clipper.SimplifyPolygon = function (poly, fillType)
  {
    var result = new Array();
    var c = new ClipperLib.Clipper(0);
    c.StrictlySimple = true;
    c.AddPath(poly, ClipperLib.PolyType.ptSubject, true);
    c.Execute(ClipperLib.ClipType.ctUnion, result, fillType, fillType);
    return result;
  };

  ClipperLib.Clipper.SimplifyPolygons = function (polys, fillType)
  {
    if (typeof fillType === "undefined") fillType = ClipperLib.PolyFillType.pftEvenOdd;
    var result = new Array();
    var c = new ClipperLib.Clipper(0);
    c.StrictlySimple = true;
    c.AddPaths(polys, ClipperLib.PolyType.ptSubject, true);
    c.Execute(ClipperLib.ClipType.ctUnion, result, fillType, fillType);
    return result;
  };

  ClipperLib.Clipper.DistanceSqrd = function (pt1, pt2)
  {
    var dx = pt1.X - pt2.X;
    var dy = pt1.Y - pt2.Y;
    return dx * dx + dy * dy;
  };

  ClipperLib.Clipper.DistanceFromLineSqrd = function (pt, ln1, ln2)
  {
    //The equation of a line in general form (Ax + By + C = 0)
    //given 2 points (x¹,y¹) & (x²,y²) is ...
    //(y¹ - y²)x + (x² - x¹)y + (y² - y¹)x¹ - (x² - x¹)y¹ = 0
    //A = (y¹ - y²); B = (x² - x¹); C = (y² - y¹)x¹ - (x² - x¹)y¹
    //perpendicular distance of point (x³,y³) = (Ax³ + By³ + C)/Sqrt(A² + B²)
    //see http://en.wikipedia.org/wiki/Perpendicular_distance
    var A = ln1.Y - ln2.Y;
    var B = ln2.X - ln1.X;
    var C = A * ln1.X + B * ln1.Y;
    C = A * pt.X + B * pt.Y - C;
    return C * C / (A * A + B * B);
  };

  ClipperLib.Clipper.SlopesNearCollinear = function (pt1, pt2, pt3, distSqrd)
  {
    //this function is more accurate when the point that's GEOMETRICALLY
    //between the other 2 points is the one that's tested for distance.
    //nb: with 'spikes', either pt1 or pt3 is geometrically between the other pts
    if (Math.abs(pt1.X - pt2.X) > Math.abs(pt1.Y - pt2.Y))
    {
      if (pt1.X > pt2.X === pt1.X < pt3.X)
      return ClipperLib.Clipper.DistanceFromLineSqrd(pt1, pt2, pt3) < distSqrd;else
      if (pt2.X > pt1.X === pt2.X < pt3.X)
      return ClipperLib.Clipper.DistanceFromLineSqrd(pt2, pt1, pt3) < distSqrd;else

      return ClipperLib.Clipper.DistanceFromLineSqrd(pt3, pt1, pt2) < distSqrd;
    } else

    {
      if (pt1.Y > pt2.Y === pt1.Y < pt3.Y)
      return ClipperLib.Clipper.DistanceFromLineSqrd(pt1, pt2, pt3) < distSqrd;else
      if (pt2.Y > pt1.Y === pt2.Y < pt3.Y)
      return ClipperLib.Clipper.DistanceFromLineSqrd(pt2, pt1, pt3) < distSqrd;else

      return ClipperLib.Clipper.DistanceFromLineSqrd(pt3, pt1, pt2) < distSqrd;
    }
  };

  ClipperLib.Clipper.PointsAreClose = function (pt1, pt2, distSqrd)
  {
    var dx = pt1.X - pt2.X;
    var dy = pt1.Y - pt2.Y;
    return dx * dx + dy * dy <= distSqrd;
  };

  ClipperLib.Clipper.ExcludeOp = function (op)
  {
    var result = op.Prev;
    result.Next = op.Next;
    op.Next.Prev = result;
    result.Idx = 0;
    return result;
  };

  ClipperLib.Clipper.CleanPolygon = function (path, distance)
  {
    if (typeof distance === "undefined") distance = 1.415;
    //distance = proximity in units/pixels below which vertices will be stripped.
    //Default ~= sqrt(2) so when adjacent vertices or semi-adjacent vertices have
    //both x & y coords within 1 unit, then the second vertex will be stripped.
    var cnt = path.length;
    if (cnt === 0)
    return new Array();
    var outPts = new Array(cnt);
    for (var i = 0; i < cnt; ++i) {
      outPts[i] = new ClipperLib.OutPt();}
    for (var i = 0; i < cnt; ++i)
    {
      outPts[i].Pt = path[i];
      outPts[i].Next = outPts[(i + 1) % cnt];
      outPts[i].Next.Prev = outPts[i];
      outPts[i].Idx = 0;
    }
    var distSqrd = distance * distance;
    var op = outPts[0];
    while (op.Idx === 0 && op.Next !== op.Prev)
    {
      if (ClipperLib.Clipper.PointsAreClose(op.Pt, op.Prev.Pt, distSqrd))
      {
        op = ClipperLib.Clipper.ExcludeOp(op);
        cnt--;
      } else
      if (ClipperLib.Clipper.PointsAreClose(op.Prev.Pt, op.Next.Pt, distSqrd))
      {
        ClipperLib.Clipper.ExcludeOp(op.Next);
        op = ClipperLib.Clipper.ExcludeOp(op);
        cnt -= 2;
      } else
      if (ClipperLib.Clipper.SlopesNearCollinear(op.Prev.Pt, op.Pt, op.Next.Pt, distSqrd))
      {
        op = ClipperLib.Clipper.ExcludeOp(op);
        cnt--;
      } else

      {
        op.Idx = 1;
        op = op.Next;
      }
    }
    if (cnt < 3)
    cnt = 0;
    var result = new Array(cnt);
    for (var i = 0; i < cnt; ++i)
    {
      result[i] = new ClipperLib.FPoint1(op.Pt);
      op = op.Next;
    }
    outPts = null;
    return result;
  };

  ClipperLib.Clipper.CleanPolygons = function (polys, distance)
  {
    var result = new Array(polys.length);
    for (var i = 0, ilen = polys.length; i < ilen; i++) {
      result[i] = ClipperLib.Clipper.CleanPolygon(polys[i], distance);}
    return result;
  };

  ClipperLib.Clipper.Minkowski = function (pattern, path, IsSum, IsClosed)
  {
    var delta = IsClosed ? 1 : 0;
    var polyCnt = pattern.length;
    var pathCnt = path.length;
    var result = new Array();
    if (IsSum)
    for (var i = 0; i < pathCnt; i++)
    {
      var p = new Array(polyCnt);
      for (var j = 0, jlen = pattern.length, ip = pattern[j]; j < jlen; j++, ip = pattern[j]) {
        p[j] = new ClipperLib.FPoint2(path[i].X + ip.X, path[i].Y + ip.Y);}
      result.push(p);
    } else

    for (var i = 0; i < pathCnt; i++)
    {
      var p = new Array(polyCnt);
      for (var j = 0, jlen = pattern.length, ip = pattern[j]; j < jlen; j++, ip = pattern[j]) {
        p[j] = new ClipperLib.FPoint2(path[i].X - ip.X, path[i].Y - ip.Y);}
      result.push(p);
    }
    var quads = new Array();
    for (var i = 0; i < pathCnt - 1 + delta; i++) {
      for (var j = 0; j < polyCnt; j++)
      {
        var quad = new Array();
        quad.push(result[i % pathCnt][j % polyCnt]);
        quad.push(result[(i + 1) % pathCnt][j % polyCnt]);
        quad.push(result[(i + 1) % pathCnt][(j + 1) % polyCnt]);
        quad.push(result[i % pathCnt][(j + 1) % polyCnt]);
        if (!ClipperLib.Clipper.Orientation(quad))
        quad.reverse();
        quads.push(quad);
      }}
    return quads;
  };

  ClipperLib.Clipper.MinkowskiSum = function (pattern, path_or_paths, pathIsClosed)
  {
    if (!(path_or_paths[0] instanceof Array))
    {
      var path = path_or_paths;
      var paths = ClipperLib.Clipper.Minkowski(pattern, path, true, pathIsClosed);
      var c = new ClipperLib.Clipper();
      c.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);
      c.Execute(ClipperLib.ClipType.ctUnion, paths, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
      return paths;
    } else

    {
      var paths = path_or_paths;
      var solution = new ClipperLib.Paths();
      var c = new ClipperLib.Clipper();
      for (var i = 0; i < paths.length; ++i)
      {
        var tmp = ClipperLib.Clipper.Minkowski(pattern, paths[i], true, pathIsClosed);
        c.AddPaths(tmp, ClipperLib.PolyType.ptSubject, true);
        if (pathIsClosed)
        {
          var path = ClipperLib.Clipper.TranslatePath(paths[i], pattern[0]);
          c.AddPath(path, ClipperLib.PolyType.ptClip, true);
        }
      }
      c.Execute(ClipperLib.ClipType.ctUnion, solution,
      ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
      return solution;
    }
  };

  ClipperLib.Clipper.TranslatePath = function (path, delta)
  {
    var outPath = new ClipperLib.Path();
    for (var i = 0; i < path.length; i++) {
      outPath.push(new ClipperLib.FPoint2(path[i].X + delta.X, path[i].Y + delta.Y));}
    return outPath;
  };

  ClipperLib.Clipper.MinkowskiDiff = function (poly1, poly2)
  {
    var paths = ClipperLib.Clipper.Minkowski(poly1, poly2, false, true);
    var c = new ClipperLib.Clipper();
    c.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);
    c.Execute(ClipperLib.ClipType.ctUnion, paths, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
    return paths;
  };

  ClipperLib.Clipper.PolyTreeToPaths = function (polytree)
  {
    var result = new Array();
    //result.set_Capacity(polytree.get_Total());
    ClipperLib.Clipper.AddPolyNodeToPaths(polytree, ClipperLib.Clipper.NodeType.ntAny, result);
    return result;
  };

  ClipperLib.Clipper.AddPolyNodeToPaths = function (polynode, nt, paths)
  {
    var match = true;
    switch (nt) {

      case ClipperLib.Clipper.NodeType.ntOpen:
        return;
      case ClipperLib.Clipper.NodeType.ntClosed:
        match = !polynode.IsOpen;
        break;
      default:
        break;}

    if (polynode.m_polygon.length > 0 && match)
    paths.push(polynode.m_polygon);
    for (var $i3 = 0, $t3 = polynode.Childs(), $l3 = $t3.length, pn = $t3[$i3]; $i3 < $l3; $i3++, pn = $t3[$i3]) {
      ClipperLib.Clipper.AddPolyNodeToPaths(pn, nt, paths);}
  };

  ClipperLib.Clipper.OpenPathsFromPolyTree = function (polytree)
  {
    var result = new ClipperLib.Paths();
    //result.set_Capacity(polytree.ChildCount());
    for (var i = 0, ilen = polytree.ChildCount(); i < ilen; i++) {
      if (polytree.Childs()[i].IsOpen)
      result.push(polytree.Childs()[i].m_polygon);}
    return result;
  };

  ClipperLib.Clipper.ClosedPathsFromPolyTree = function (polytree)
  {
    var result = new ClipperLib.Paths();
    //result.set_Capacity(polytree.Total());
    ClipperLib.Clipper.AddPolyNodeToPaths(polytree, ClipperLib.Clipper.NodeType.ntClosed, result);
    return result;
  };

  Inherit(ClipperLib.Clipper, ClipperLib.ClipperBase);
  ClipperLib.Clipper.NodeType = {
    ntAny: 0,
    ntOpen: 1,
    ntClosed: 2 };


  /**
                   * @constructor
                   */
  ClipperLib.ClipperOffset = function (miterLimit, arcTolerance)
  {
    if (typeof miterLimit === "undefined") miterLimit = 2;
    if (typeof arcTolerance === "undefined") arcTolerance = ClipperLib.ClipperOffset.def_arc_tolerance;
    this.m_destPolys = new ClipperLib.Paths();
    this.m_srcPoly = new ClipperLib.Path();
    this.m_destPoly = new ClipperLib.Path();
    this.m_normals = new Array();
    this.m_delta = 0;
    this.m_sinA = 0;
    this.m_sin = 0;
    this.m_cos = 0;
    this.m_miterLim = 0;
    this.m_StepsPerRad = 0;
    this.m_lowest = new ClipperLib.FPoint0();
    this.m_polyNodes = new ClipperLib.PolyNode();
    this.MiterLimit = miterLimit;
    this.ArcTolerance = arcTolerance;
    this.m_lowest.X = -1;
  };

  ClipperLib.ClipperOffset.two_pi = 6.28318530717959;
  ClipperLib.ClipperOffset.def_arc_tolerance = 0.25;
  ClipperLib.ClipperOffset.prototype.Clear = function ()
  {
    ClipperLib.Clear(this.m_polyNodes.Childs());
    this.m_lowest.X = -1;
  };

  ClipperLib.ClipperOffset.prototype.AddPath = function (path, joinType, endType)
  {
    var highI = path.length - 1;
    if (highI < 0)
    return;
    var newNode = new ClipperLib.PolyNode();
    newNode.m_jointype = joinType;
    newNode.m_endtype = endType;
    //strip duplicate points from path and also get index to the lowest point ...
    if (endType === ClipperLib.EndType.etClosedLine || endType === ClipperLib.EndType.etClosedPolygon)
    while (highI > 0 && ClipperLib.FPoint.op_Equality(path[0], path[highI])) {
      highI--;}
    //newNode.m_polygon.set_Capacity(highI + 1);
    newNode.m_polygon.push(path[0]);
    var j = 0,
    k = 0;
    for (var i = 1; i <= highI; i++) {
      if (ClipperLib.FPoint.op_Inequality(newNode.m_polygon[j], path[i]))
      {
        j++;
        newNode.m_polygon.push(path[i]);
        if (path[i].Y > newNode.m_polygon[k].Y || path[i].Y === newNode.m_polygon[k].Y && path[i].X < newNode.m_polygon[k].X)
        k = j;
      }}
    if (endType === ClipperLib.EndType.etClosedPolygon && j < 2) return;

    this.m_polyNodes.AddChild(newNode);
    //if this path's lowest pt is lower than all the others then update m_lowest
    if (endType !== ClipperLib.EndType.etClosedPolygon)
    return;
    if (this.m_lowest.X < 0)
    this.m_lowest = new ClipperLib.FPoint2(this.m_polyNodes.ChildCount() - 1, k);else

    {
      var ip = this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
      if (newNode.m_polygon[k].Y > ip.Y || newNode.m_polygon[k].Y === ip.Y && newNode.m_polygon[k].X < ip.X)
      this.m_lowest = new ClipperLib.FPoint2(this.m_polyNodes.ChildCount() - 1, k);
    }
  };

  ClipperLib.ClipperOffset.prototype.AddPaths = function (paths, joinType, endType)
  {
    for (var i = 0, ilen = paths.length; i < ilen; i++) {
      this.AddPath(paths[i], joinType, endType);}
  };

  ClipperLib.ClipperOffset.prototype.FixOrientations = function ()
  {
    //fixup orientations of all closed paths if the orientation of the
    //closed path with the lowermost vertex is wrong ...
    if (this.m_lowest.X >= 0 && !ClipperLib.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))
    {
      for (var i = 0; i < this.m_polyNodes.ChildCount(); i++)
      {
        var node = this.m_polyNodes.Childs()[i];
        if (node.m_endtype === ClipperLib.EndType.etClosedPolygon || node.m_endtype === ClipperLib.EndType.etClosedLine && ClipperLib.Clipper.Orientation(node.m_polygon))
        node.m_polygon.reverse();
      }
    } else

    {
      for (var i = 0; i < this.m_polyNodes.ChildCount(); i++)
      {
        var node = this.m_polyNodes.Childs()[i];
        if (node.m_endtype === ClipperLib.EndType.etClosedLine && !ClipperLib.Clipper.Orientation(node.m_polygon))
        node.m_polygon.reverse();
      }
    }
  };

  ClipperLib.ClipperOffset.GetUnitNormal = function (pt1, pt2)
  {
    var dx = pt2.X - pt1.X;
    var dy = pt2.Y - pt1.Y;
    if (dx === 0 && dy === 0)
    return new ClipperLib.FPoint2(0, 0);
    var f = 1 / Math.sqrt(dx * dx + dy * dy);
    dx *= f;
    dy *= f;
    return new ClipperLib.FPoint2(dy, -dx);
  };

  ClipperLib.ClipperOffset.prototype.DoOffset = function (delta)
  {
    this.m_destPolys = new Array();
    this.m_delta = delta;
    //if Zero offset, just copy any CLOSED polygons to m_p and return ...
    if (ClipperLib.ClipperBase.near_zero(delta))
    {
      //this.m_destPolys.set_Capacity(this.m_polyNodes.ChildCount);
      for (var i = 0; i < this.m_polyNodes.ChildCount(); i++)
      {
        var node = this.m_polyNodes.Childs()[i];
        if (node.m_endtype === ClipperLib.EndType.etClosedPolygon)
        this.m_destPolys.push(node.m_polygon);
      }
      return;
    }
    //see offset_triginometry3.svg in the documentation folder ...
    if (this.MiterLimit > 2)
    this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit);else

    this.m_miterLim = 0.5;
    var y;
    if (this.ArcTolerance <= 0)
    y = ClipperLib.ClipperOffset.def_arc_tolerance;else
    if (this.ArcTolerance > Math.abs(delta) * ClipperLib.ClipperOffset.def_arc_tolerance)
    y = Math.abs(delta) * ClipperLib.ClipperOffset.def_arc_tolerance;else

    y = this.ArcTolerance;
    //see offset_triginometry2.svg in the documentation folder ...
    var steps = 3.14159265358979 / Math.acos(1 - y / Math.abs(delta));
    this.m_sin = Math.sin(ClipperLib.ClipperOffset.two_pi / steps);
    this.m_cos = Math.cos(ClipperLib.ClipperOffset.two_pi / steps);
    this.m_StepsPerRad = steps / ClipperLib.ClipperOffset.two_pi;
    if (delta < 0)
    this.m_sin = -this.m_sin;
    //this.m_destPolys.set_Capacity(this.m_polyNodes.ChildCount * 2);
    for (var i = 0; i < this.m_polyNodes.ChildCount(); i++)
    {
      var node = this.m_polyNodes.Childs()[i];
      this.m_srcPoly = node.m_polygon;
      var len = this.m_srcPoly.length;
      if (len === 0 || delta <= 0 && (len < 3 || node.m_endtype !== ClipperLib.EndType.etClosedPolygon))
      continue;
      this.m_destPoly = new Array();
      if (len === 1)
      {
        if (node.m_jointype === ClipperLib.JoinType.jtRound)
        {
          var X = 1,
          Y = 0;
          for (var j = 1; j <= steps; j++)
          {
            this.m_destPoly.push(new ClipperLib.FPoint2(this.m_srcPoly[0].X + X * delta, this.m_srcPoly[0].Y + Y * delta));
            var X2 = X;
            X = X * this.m_cos - this.m_sin * Y;
            Y = X2 * this.m_sin + Y * this.m_cos;
          }
        } else

        {
          var X = -1,
          Y = -1;
          for (var j = 0; j < 4; ++j)
          {
            this.m_destPoly.push(new ClipperLib.FPoint2(this.m_srcPoly[0].X + X * delta, this.m_srcPoly[0].Y + Y * delta));
            if (X < 0)
            X = 1;else
            if (Y < 0)
            Y = 1;else

            X = -1;
          }
        }
        this.m_destPolys.push(this.m_destPoly);
        continue;
      }
      //build m_normals ...
      this.m_normals.length = 0;
      //this.m_normals.set_Capacity(len);
      for (var j = 0; j < len - 1; j++) {
        this.m_normals.push(ClipperLib.ClipperOffset.GetUnitNormal(this.m_srcPoly[j], this.m_srcPoly[j + 1]));}
      if (node.m_endtype === ClipperLib.EndType.etClosedLine || node.m_endtype === ClipperLib.EndType.etClosedPolygon)
      this.m_normals.push(ClipperLib.ClipperOffset.GetUnitNormal(this.m_srcPoly[len - 1], this.m_srcPoly[0]));else

      this.m_normals.push(new ClipperLib.FPoint1(this.m_normals[len - 2]));
      if (node.m_endtype === ClipperLib.EndType.etClosedPolygon)
      {
        var k = len - 1;
        for (var j = 0; j < len; j++) {
          k = this.OffsetPoint(j, k, node.m_jointype);}
        this.m_destPolys.push(this.m_destPoly);
      } else
      if (node.m_endtype === ClipperLib.EndType.etClosedLine)
      {
        var k = len - 1;
        for (var j = 0; j < len; j++) {
          k = this.OffsetPoint(j, k, node.m_jointype);}
        this.m_destPolys.push(this.m_destPoly);
        this.m_destPoly = new Array();
        //re-build m_normals ...
        var n = this.m_normals[len - 1];
        for (var j = len - 1; j > 0; j--) {
          this.m_normals[j] = new ClipperLib.FPoint2(-this.m_normals[j - 1].X, -this.m_normals[j - 1].Y);}
        this.m_normals[0] = new ClipperLib.FPoint2(-n.X, -n.Y);
        k = 0;
        for (var j = len - 1; j >= 0; j--) {
          k = this.OffsetPoint(j, k, node.m_jointype);}
        this.m_destPolys.push(this.m_destPoly);
      } else

      {
        var k = 0;
        for (var j = 1; j < len - 1; ++j) {
          k = this.OffsetPoint(j, k, node.m_jointype);}
        var pt1;
        if (node.m_endtype === ClipperLib.EndType.etOpenButt)
        {
          var j = len - 1;
          pt1 = new ClipperLib.FPoint2(this.m_srcPoly[j].X + this.m_normals[j].X * delta, this.m_srcPoly[j].Y + this.m_normals[j].Y * delta);
          this.m_destPoly.push(pt1);
          pt1 = new ClipperLib.FPoint2(this.m_srcPoly[j].X - this.m_normals[j].X * delta, this.m_srcPoly[j].Y - this.m_normals[j].Y * delta);
          this.m_destPoly.push(pt1);
        } else

        {
          var j = len - 1;
          k = len - 2;
          this.m_sinA = 0;
          this.m_normals[j] = new ClipperLib.FPoint2(-this.m_normals[j].X, -this.m_normals[j].Y);
          if (node.m_endtype === ClipperLib.EndType.etOpenSquare)
          this.DoSquare(j, k);else

          this.DoRound(j, k);
        }
        //re-build m_normals ...
        for (var j = len - 1; j > 0; j--) {
          this.m_normals[j] = new ClipperLib.FPoint2(-this.m_normals[j - 1].X, -this.m_normals[j - 1].Y);}
        this.m_normals[0] = new ClipperLib.FPoint2(-this.m_normals[1].X, -this.m_normals[1].Y);
        k = len - 1;
        for (var j = k - 1; j > 0; --j) {
          k = this.OffsetPoint(j, k, node.m_jointype);}
        if (node.m_endtype === ClipperLib.EndType.etOpenButt)
        {
          pt1 = new ClipperLib.FPoint2(this.m_srcPoly[0].X - this.m_normals[0].X * delta, this.m_srcPoly[0].Y - this.m_normals[0].Y * delta);
          this.m_destPoly.push(pt1);
          pt1 = new ClipperLib.FPoint2(this.m_srcPoly[0].X + this.m_normals[0].X * delta, this.m_srcPoly[0].Y + this.m_normals[0].Y * delta);
          this.m_destPoly.push(pt1);
        } else

        {
          k = 1;
          this.m_sinA = 0;
          if (node.m_endtype === ClipperLib.EndType.etOpenSquare)
          this.DoSquare(0, 1);else

          this.DoRound(0, 1);
        }
        this.m_destPolys.push(this.m_destPoly);
      }
    }
  };

  ClipperLib.ClipperOffset.prototype.Execute = function ()
  {
    var a = arguments,
    ispolytree = a[0] instanceof ClipperLib.PolyTree;
    if (!ispolytree) // function (solution, delta)
      {
        var solution = a[0],
        delta = a[1];
        ClipperLib.Clear(solution);
        this.FixOrientations();
        this.DoOffset(delta);
        //now clean up 'corners' ...
        var clpr = new ClipperLib.Clipper(0);
        clpr.AddPaths(this.m_destPolys, ClipperLib.PolyType.ptSubject, true);
        if (delta > 0)
        {
          clpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftPositive, ClipperLib.PolyFillType.pftPositive);
        } else

        {
          var r = ClipperLib.Clipper.GetBounds(this.m_destPolys);
          var outer = new ClipperLib.Path();
          outer.push(new ClipperLib.FPoint2(r.left - 10, r.bottom + 10));
          outer.push(new ClipperLib.FPoint2(r.right + 10, r.bottom + 10));
          outer.push(new ClipperLib.FPoint2(r.right + 10, r.top - 10));
          outer.push(new ClipperLib.FPoint2(r.left - 10, r.top - 10));
          clpr.AddPath(outer, ClipperLib.PolyType.ptSubject, true);
          clpr.ReverseSolution = true;
          clpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftNegative, ClipperLib.PolyFillType.pftNegative);
          if (solution.length > 0)
          solution.splice(0, 1);
        }
        //console.log(JSON.stringify(solution));
      } else
      // function (polytree, delta)
      {
        var solution = a[0],
        delta = a[1];
        solution.Clear();
        this.FixOrientations();
        this.DoOffset(delta);
        //now clean up 'corners' ...
        var clpr = new ClipperLib.Clipper(0);
        clpr.AddPaths(this.m_destPolys, ClipperLib.PolyType.ptSubject, true);
        if (delta > 0)
        {
          clpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftPositive, ClipperLib.PolyFillType.pftPositive);
        } else

        {
          var r = ClipperLib.Clipper.GetBounds(this.m_destPolys);
          var outer = new ClipperLib.Path();
          outer.push(new ClipperLib.FPoint2(r.left - 10, r.bottom + 10));
          outer.push(new ClipperLib.FPoint2(r.right + 10, r.bottom + 10));
          outer.push(new ClipperLib.FPoint2(r.right + 10, r.top - 10));
          outer.push(new ClipperLib.FPoint2(r.left - 10, r.top - 10));
          clpr.AddPath(outer, ClipperLib.PolyType.ptSubject, true);
          clpr.ReverseSolution = true;
          clpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftNegative, ClipperLib.PolyFillType.pftNegative);
          //remove the outer PolyNode rectangle ...
          if (solution.ChildCount() === 1 && solution.Childs()[0].ChildCount() > 0)
          {
            var outerNode = solution.Childs()[0];
            //solution.Childs.set_Capacity(outerNode.ChildCount);
            solution.Childs()[0] = outerNode.Childs()[0];
            solution.Childs()[0].m_Parent = solution;
            for (var i = 1; i < outerNode.ChildCount(); i++) {
              solution.AddChild(outerNode.Childs()[i]);}
          } else

          solution.Clear();
        }
      }
  };

  ClipperLib.ClipperOffset.prototype.OffsetPoint = function (j, k, jointype)
  {
    //cross product ...
    this.m_sinA = this.m_normals[k].X * this.m_normals[j].Y - this.m_normals[j].X * this.m_normals[k].Y;

    if (this.m_sinA === 0)
    {
      return k;
    }

    /*
      		else if (this.m_sinA < 0.00005 && this.m_sinA > -0.00005)
      {
      			console.log(this.m_sinA);
            return k;
      }
      */
    /*
         		if (Math.abs(this.m_sinA * this.m_delta) < 1.0)
         		{
         			//dot product ...
         			var cosA = (this.m_normals[k].X * this.m_normals[j].X + this.m_normals[j].Y * this.m_normals[k].Y);
         			if (cosA > 0) // angle ==> 0 degrees
         			{
         				this.m_destPoly.push(new ClipperLib.FPoint2(this.m_srcPoly[j].X + this.m_normals[k].X * this.m_delta,
         					this.m_srcPoly[j].Y + this.m_normals[k].Y * this.m_delta));
         				return k;
         			}
         			//else angle ==> 180 degrees
         		}
         */else
      if (this.m_sinA > 1)
      this.m_sinA = 1.0;else
      if (this.m_sinA < -1)
      this.m_sinA = -1.0;
    if (this.m_sinA * this.m_delta < 0)
    {
      this.m_destPoly.push(new ClipperLib.FPoint2(this.m_srcPoly[j].X + this.m_normals[k].X * this.m_delta,
      this.m_srcPoly[j].Y + this.m_normals[k].Y * this.m_delta));
      this.m_destPoly.push(new ClipperLib.FPoint1(this.m_srcPoly[j]));
      this.m_destPoly.push(new ClipperLib.FPoint2(this.m_srcPoly[j].X + this.m_normals[j].X * this.m_delta,
      this.m_srcPoly[j].Y + this.m_normals[j].Y * this.m_delta));
    } else

    switch (jointype) {

      case ClipperLib.JoinType.jtMiter:
        {
          var r = 1 + (this.m_normals[j].X * this.m_normals[k].X + this.m_normals[j].Y * this.m_normals[k].Y);
          if (r >= this.m_miterLim)
          this.DoMiter(j, k, r);else

          this.DoSquare(j, k);
          break;
        }
      case ClipperLib.JoinType.jtSquare:
        this.DoSquare(j, k);
        break;
      case ClipperLib.JoinType.jtRound:
        this.DoRound(j, k);
        break;}

    k = j;
    return k;
  };

  ClipperLib.ClipperOffset.prototype.DoSquare = function (j, k)
  {
    var dx = Math.tan(Math.atan2(this.m_sinA,
    this.m_normals[k].X * this.m_normals[j].X + this.m_normals[k].Y * this.m_normals[j].Y) / 4);
    this.m_destPoly.push(new ClipperLib.FPoint2(
    this.m_srcPoly[j].X + this.m_delta * (this.m_normals[k].X - this.m_normals[k].Y * dx),
    this.m_srcPoly[j].Y + this.m_delta * (this.m_normals[k].Y + this.m_normals[k].X * dx)));
    this.m_destPoly.push(new ClipperLib.FPoint2(
    this.m_srcPoly[j].X + this.m_delta * (this.m_normals[j].X + this.m_normals[j].Y * dx),
    this.m_srcPoly[j].Y + this.m_delta * (this.m_normals[j].Y - this.m_normals[j].X * dx)));
  };

  ClipperLib.ClipperOffset.prototype.DoMiter = function (j, k, r)
  {
    var q = this.m_delta / r;
    this.m_destPoly.push(new ClipperLib.FPoint2(
    this.m_srcPoly[j].X + (this.m_normals[k].X + this.m_normals[j].X) * q,
    this.m_srcPoly[j].Y + (this.m_normals[k].Y + this.m_normals[j].Y) * q));
  };

  ClipperLib.ClipperOffset.prototype.DoRound = function (j, k)
  {
    var a = Math.atan2(this.m_sinA,
    this.m_normals[k].X * this.m_normals[j].X + this.m_normals[k].Y * this.m_normals[j].Y);

    var steps = Math.max(Math.round(this.m_StepsPerRad * Math.abs(a)), 1);

    var X = this.m_normals[k].X,
    Y = this.m_normals[k].Y,
    X2;
    for (var i = 0; i < steps; ++i)
    {
      this.m_destPoly.push(new ClipperLib.FPoint2(
      this.m_srcPoly[j].X + X * this.m_delta,
      this.m_srcPoly[j].Y + Y * this.m_delta));
      X2 = X;
      X = X * this.m_cos - this.m_sin * Y;
      Y = X2 * this.m_sin + Y * this.m_cos;
    }
    this.m_destPoly.push(new ClipperLib.FPoint2(
    this.m_srcPoly[j].X + this.m_normals[j].X * this.m_delta,
    this.m_srcPoly[j].Y + this.m_normals[j].Y * this.m_delta));
  };

  ClipperLib.Error = function (message)
  {
    try
    {
      throw new Error(message);
    }
    catch (err)
    {
      alert(err.message);
    }
  };

  // ---------------------------------------------

  // JS extension by Timo 2013
  ClipperLib.JS = {};

  ClipperLib.JS.AreaOfPolygon = function (poly)
  {
    return ClipperLib.Clipper.Area(poly);
  };

  ClipperLib.JS.AreaOfPolygons = function (poly)
  {
    var area = 0;
    for (var i = 0; i < poly.length; i++)
    {
      area += ClipperLib.Clipper.Area(poly[i]);
    }
    return area;
  };

  ClipperLib.JS.BoundsOfPath = function (path)
  {
    return ClipperLib.JS.BoundsOfPaths([path]);
  };

  ClipperLib.JS.BoundsOfPaths = function (paths)
  {
    var bounds = ClipperLib.Clipper.GetBounds(paths);
    return bounds;
  };

  // Clean() joins vertices that are too near each other
  // and causes distortion to offsetted polygons without cleaning
  ClipperLib.JS.Clean = function (polygon, delta)
  {
    if (!(polygon instanceof Array)) return [];
    var isPolygons = polygon[0] instanceof Array;
    var polygon = ClipperLib.JS.Clone(polygon);
    if (typeof delta !== "number" || delta === null)
    {
      ClipperLib.Error("Delta is not a number in Clean().");
      return polygon;
    }
    if (polygon.length === 0 || polygon.length === 1 && polygon[0].length === 0 || delta < 0) return polygon;
    if (!isPolygons) polygon = [polygon];
    var k_length = polygon.length;
    var len, poly, result, d, p, j, i;
    var results = [];
    for (var k = 0; k < k_length; k++)
    {
      poly = polygon[k];
      len = poly.length;
      if (len === 0) continue;else
      if (len < 3)
      {
        result = poly;
        results.push(result);
        continue;
      }
      result = poly;
      d = delta * delta;
      //d = Math.floor(c_delta * c_delta);
      p = poly[0];
      j = 1;
      for (i = 1; i < len; i++)
      {
        if ((poly[i].X - p.X) * (poly[i].X - p.X) +
        (poly[i].Y - p.Y) * (poly[i].Y - p.Y) <= d)
        continue;
        result[j] = poly[i];
        p = poly[i];
        j++;
      }
      p = poly[j - 1];
      if ((poly[0].X - p.X) * (poly[0].X - p.X) +
      (poly[0].Y - p.Y) * (poly[0].Y - p.Y) <= d)
      j--;
      if (j < len)
      result.splice(j, len - j);
      if (result.length) results.push(result);
    }
    if (!isPolygons && results.length) results = results[0];else
    if (!isPolygons && results.length === 0) results = [];else
    if (isPolygons && results.length === 0) results = [
    []];

    return results;
  };
  // Make deep copy of Polygons or Polygon
  // so that also FPoint objects are cloned and not only referenced
  // This should be the fastest way
  ClipperLib.JS.Clone = function (polygon)
  {
    if (!(polygon instanceof Array)) return [];
    if (polygon.length === 0) return [];else
    if (polygon.length === 1 && polygon[0].length === 0) return [
    []];

    var isPolygons = polygon[0] instanceof Array;
    if (!isPolygons) polygon = [polygon];
    var len = polygon.length,
    plen,i,j,result;
    var results = new Array(len);
    for (i = 0; i < len; i++)
    {
      plen = polygon[i].length;
      result = new Array(plen);
      for (j = 0; j < plen; j++)
      {
        result[j] = {
          X: polygon[i][j].X,
          Y: polygon[i][j].Y };


      }
      results[i] = result;
    }
    if (!isPolygons) results = results[0];
    return results;
  };

  // Removes points that doesn't affect much to the visual appearance.
  // If middle point is at or under certain distance (tolerance) of the line segment between
  // start and end point, the middle point is removed.
  ClipperLib.JS.Lighten = function (polygon, tolerance)
  {
    if (!(polygon instanceof Array)) return [];
    if (typeof tolerance !== "number" || tolerance === null)
    {
      ClipperLib.Error("Tolerance is not a number in Lighten().");
      return ClipperLib.JS.Clone(polygon);
    }
    if (polygon.length === 0 || polygon.length === 1 && polygon[0].length === 0 || tolerance < 0)
    {
      return ClipperLib.JS.Clone(polygon);
    }
    var isPolygons = polygon[0] instanceof Array;
    if (!isPolygons) polygon = [polygon];
    var i, j, poly, k, poly2, plen, A, B, P, d, rem, addlast;
    var bxax, byay, l, ax, ay;
    var len = polygon.length;
    var toleranceSq = tolerance * tolerance;
    var results = [];
    for (i = 0; i < len; i++)
    {
      poly = polygon[i];
      plen = poly.length;
      if (plen === 0) continue;
      for (k = 0; k < 1000000; k++) // could be forever loop, but wiser to restrict max repeat count
      {
        poly2 = [];
        plen = poly.length;
        // the first have to added to the end, if first and last are not the same
        // this way we ensure that also the actual last point can be removed if needed
        if (poly[plen - 1].X !== poly[0].X || poly[plen - 1].Y !== poly[0].Y)
        {
          addlast = 1;
          poly.push(
          {
            X: poly[0].X,
            Y: poly[0].Y });

          plen = poly.length;
        } else
        addlast = 0;
        rem = []; // Indexes of removed points
        for (j = 0; j < plen - 2; j++)
        {
          A = poly[j]; // Start point of line segment
          P = poly[j + 1]; // Middle point. This is the one to be removed.
          B = poly[j + 2]; // End point of line segment
          ax = A.X;
          ay = A.Y;
          bxax = B.X - ax;
          byay = B.Y - ay;
          if (bxax !== 0 || byay !== 0) // To avoid Nan, when A==P && P==B. And to avoid peaks (A==B && A!=P), which have lenght, but not area.
            {
              l = ((P.X - ax) * bxax + (P.Y - ay) * byay) / (bxax * bxax + byay * byay);
              if (l > 1)
              {
                ax = B.X;
                ay = B.Y;
              } else
              if (l > 0)
              {
                ax += bxax * l;
                ay += byay * l;
              }
            }
          bxax = P.X - ax;
          byay = P.Y - ay;
          d = bxax * bxax + byay * byay;
          if (d <= toleranceSq)
          {
            rem[j + 1] = 1;
            j++; // when removed, transfer the pointer to the next one
          }
        }
        // add all unremoved points to poly2
        poly2.push(
        {
          X: poly[0].X,
          Y: poly[0].Y });

        for (j = 1; j < plen - 1; j++) {
          if (!rem[j]) poly2.push(
          {
            X: poly[j].X,
            Y: poly[j].Y });}

        poly2.push(
        {
          X: poly[plen - 1].X,
          Y: poly[plen - 1].Y });

        // if the first point was added to the end, remove it
        if (addlast) poly.pop();
        // break, if there was not anymore removed points
        if (!rem.length) break;
        // else continue looping using poly2, to check if there are points to remove
        else poly = poly2;
      }
      plen = poly2.length;
      // remove duplicate from end, if needed
      if (poly2[plen - 1].X === poly2[0].X && poly2[plen - 1].Y === poly2[0].Y)
      {
        poly2.pop();
      }
      if (poly2.length > 2) // to avoid two-point-polygons
        results.push(poly2);
    }
    if (!isPolygons)
    {
      results = results[0];
    }
    if (typeof results === "undefined")
    {
      results = [];
    }
    return results;
  };

  ClipperLib.JS.PerimeterOfPath = function (path, closed)
  {
    if (typeof path === "undefined") return 0;
    var sqrt = Math.sqrt;
    var perimeter = 0.0;
    var p1,p2,p1x = 0.0,
    p1y = 0.0,
    p2x = 0.0,
    p2y = 0.0;
    var j = path.length;
    if (j < 2) return 0;
    if (closed)
    {
      path[j] = path[0];
      j++;
    }
    while (--j)
    {
      p1 = path[j];
      p1x = p1.X;
      p1y = p1.Y;
      p2 = path[j - 1];
      p2x = p2.X;
      p2y = p2.Y;
      perimeter += sqrt((p1x - p2x) * (p1x - p2x) + (p1y - p2y) * (p1y - p2y));
    }
    if (closed) path.pop();
    return perimeter;
  };

  ClipperLib.JS.PerimeterOfPaths = function (paths, closed)
  {
    var perimeter = 0;
    for (var i = 0; i < paths.length; i++)
    {
      perimeter += ClipperLib.JS.PerimeterOfPath(paths[i], closed);
    }
    return perimeter;
  };

  /**
     * @constructor
     */
  ClipperLib.ExPolygons = function ()
  {
    return [];
  };
  /**
     * @constructor
     */
  ClipperLib.ExPolygon = function ()
  {
    this.outer = null;
    this.holes = null;
  };

  ClipperLib.JS.AddOuterPolyNodeToExPolygons = function (polynode, expolygons)
  {
    var ep = new ClipperLib.ExPolygon();
    ep.outer = polynode.Contour();
    var childs = polynode.Childs();
    var ilen = childs.length;
    ep.holes = new Array(ilen);
    var node, n, i, j, childs2, jlen;
    for (i = 0; i < ilen; i++)
    {
      node = childs[i];
      ep.holes[i] = node.Contour();
      //Add outer polygons contained by (nested within) holes ...
      for (j = 0, childs2 = node.Childs(), jlen = childs2.length; j < jlen; j++)
      {
        n = childs2[j];
        ClipperLib.JS.AddOuterPolyNodeToExPolygons(n, expolygons);
      }
    }
    expolygons.push(ep);
  };

  ClipperLib.JS.ExPolygonsToPaths = function (expolygons)
  {
    var a, i, alen, ilen;
    var paths = new ClipperLib.Paths();
    for (a = 0, alen = expolygons.length; a < alen; a++)
    {
      paths.push(expolygons[a].outer);
      for (i = 0, ilen = expolygons[a].holes.length; i < ilen; i++)
      {
        paths.push(expolygons[a].holes[i]);
      }
    }
    return paths;
  };
  ClipperLib.JS.PolyTreeToExPolygons = function (polytree)
  {
    var expolygons = new ClipperLib.ExPolygons();
    var node, i, childs, ilen;
    for (i = 0, childs = polytree.Childs(), ilen = childs.length; i < ilen; i++)
    {
      node = childs[i];
      ClipperLib.JS.AddOuterPolyNodeToExPolygons(node, expolygons);
    }
    return expolygons;
  };

})();

/***/ }),

/***/ "./extensions/CompGeom/node_modules/earcut/src/earcut.js":
/*!***************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/earcut/src/earcut.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = earcut;
module.exports["default"] = earcut;

function earcut(data, holeIndices, dim) {

  dim = dim || 2;

  var hasHoles = holeIndices && holeIndices.length,
  outerLen = hasHoles ? holeIndices[0] * dim : data.length,
  outerNode = linkedList(data, 0, outerLen, dim, true),
  triangles = [];

  if (!outerNode || outerNode.next === outerNode.prev) return triangles;

  var minX, minY, maxX, maxY, x, y, invSize;

  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

  // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
  if (data.length > 80 * dim) {
    minX = maxX = data[0];
    minY = maxY = data[1];

    for (var i = dim; i < outerLen; i += dim) {
      x = data[i];
      y = data[i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }

    // minX, minY and invSize are later used to transform coords into integers for z-order calculation
    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }

  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

  return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
  var i, last;

  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim) {last = insertNode(i, data[i], data[i + 1], last);}
  } else {
    for (i = end - dim; i >= start; i -= dim) {last = insertNode(i, data[i], data[i + 1], last);}
  }

  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }

  return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;

  var p = start,
  again;
  do {
    again = false;

    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next) break;
      again = true;

    } else {
      p = p.next;
    }
  } while (again || p !== end);

  return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;

  // interlink polygon nodes in z-order
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

  var stop = ear,
  prev,next;

  // iterate through ears, slicing them one by one
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;

    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      // cut off the triangle
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);

      removeNode(ear);

      // skipping the next vertex leads to less sliver triangles
      ear = next.next;
      stop = next.next;

      continue;
    }

    ear = next;

    // if we looped through the whole remaining polygon and can't find any more ears
    if (ear === stop) {
      // try filtering points and slicing again
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

        // if this didn't work, try curing all small self-intersections locally
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

        // as a last resort, try splitting the remaining polygon into two
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }

      break;
    }
  }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
  var a = ear.prev,
  b = ear,
  c = ear.next;

  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

  // now make sure we don't have other points inside the potential ear
  var p = ear.next.next;

  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
    area(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }

  return true;
}

function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev,
  b = ear,
  c = ear.next;

  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

  // triangle bbox; min & max are calculated like this for speed
  var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
  minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
  maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
  maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;

  // z-order range for the current triangle bbox;
  var minZ = zOrder(minTX, minTY, minX, minY, invSize),
  maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

  var p = ear.prevZ,
  n = ear.nextZ;

  // look for points inside the triangle in both directions
  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next &&
    pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
    area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;

    if (n !== ear.prev && n !== ear.next &&
    pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
    area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }

  // look for remaining points in decreasing z-order
  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next &&
    pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
    area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
  }

  // look for remaining points in increasing z-order
  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next &&
    pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
    area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }

  return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
  var p = start;
  do {
    var a = p.prev,
    b = p.next.next;

    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);

      // remove two nodes involved
      removeNode(p);
      removeNode(p.next);

      p = start = b;
    }
    p = p.next;
  } while (p !== start);

  return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  // look for a valid diagonal that divides the polygon into two
  var a = start;
  do {
    var b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        // split the polygon in two by the diagonal
        var c = splitPolygon(a, b);

        // filter colinear points around the cuts
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);

        // run earcut on each half
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
  var queue = [],
  i,len,start,end,list;

  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }

  queue.sort(compareX);

  // process holes from left to right
  for (i = 0; i < queue.length; i++) {
    outerNode = eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }

  return outerNode;
}

function compareX(a, b) {
  return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
  var bridge = findHoleBridge(hole, outerNode);
  if (!bridge) {
    return outerNode;
  }

  var bridgeReverse = splitPolygon(bridge, hole);

  // filter collinear points around the cuts
  var filteredBridge = filterPoints(bridge, bridge.next);
  filterPoints(bridgeReverse, bridgeReverse.next);

  // Check if input node was removed by the filtering
  return outerNode === bridge ? filteredBridge : outerNode;
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
  var p = outerNode,
  hx = hole.x,
  hy = hole.y,
  qx = -Infinity,
  m;

  // find a segment intersected by a ray from the hole's leftmost point to the left;
  // segment's endpoint with lesser x will be potential connection point
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        if (x === hx) {
          if (hy === p.y) return p;
          if (hy === p.next.y) return p.next;
        }
        m = p.x < p.next.x ? p : p.next;
      }
    }
    p = p.next;
  } while (p !== outerNode);

  if (!m) return null;

  if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

  // look for points inside the triangle of hole point, segment intersection and endpoint;
  // if there are no points found, we have a valid connection;
  // otherwise choose the point of the minimum angle with the ray as connection point

  var stop = m,
  mx = m.x,
  my = m.y,
  tanMin = Infinity,
  tan;

  p = m;

  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x &&
    pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

      tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

      if (locallyInside(p, hole) && (
      tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }

    p = p.next;
  } while (p !== stop);

  return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
  var p = start;
  do {
    if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);

  p.prevZ.nextZ = null;
  p.prevZ = null;

  sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
  var i,p,q,e,tail,numMerges,pSize,qSize,
  inSize = 1;

  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;

    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q) break;
      }
      qSize = inSize;

      while (pSize > 0 || qSize > 0 && q) {

        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }

        if (tail) tail.nextZ = e;else
        list = e;

        e.prevZ = tail;
        tail = e;
      }

      p = q;
    }

    tail.nextZ = null;
    inSize *= 2;

  } while (numMerges > 1);

  return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
  // coords are transformed into non-negative 15-bit integer range
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;

  x = (x | x << 8) & 0x00FF00FF;
  x = (x | x << 4) & 0x0F0F0F0F;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;

  y = (y | y << 8) & 0x00FF00FF;
  y = (y | y << 4) & 0x0F0F0F0F;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;

  return x | y << 1;
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
  var p = start,
  leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
    p = p.next;
  } while (p !== start);

  return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
  (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
  (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && ( // dones't intersect other edges
  locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && ( // locally visible
  area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
  equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));

  if (o1 !== o2 && o3 !== o4) return true; // general case

  if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
  if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
  if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
  if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

  return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
  var p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
    intersects(p, p.next, a, b)) return true;
    p = p.next;
  } while (p !== a);

  return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ?
  area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
  area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
  var p = a,
  inside = false,
  px = (a.x + b.x) / 2,
  py = (a.y + b.y) / 2;
  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y &&
    px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
    inside = !inside;
    p = p.next;
  } while (p !== a);

  return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y),
  b2 = new Node(b.i, b.x, b.y),
  an = a.next,
  bp = b.prev;

  a.next = b;
  b.prev = a;

  a2.next = an;
  an.prev = a2;

  b2.next = a2;
  a2.prev = b2;

  bp.next = b2;
  b2.prev = bp;

  return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);

  if (!last) {
    p.prev = p;
    p.next = p;

  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}

function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;

  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
  // vertex index in coordinates array
  this.i = i;

  // vertex coordinates
  this.x = x;
  this.y = y;

  // previous and next vertex nodes in a polygon ring
  this.prev = null;
  this.next = null;

  // z-order curve value
  this.z = null;

  // previous and next nodes in z-order
  this.prevZ = null;
  this.nextZ = null;

  // indicates whether this is a steiner point
  this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

  var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
  if (hasHoles) {
    for (var i = 0, len = holeIndices.length; i < len; i++) {
      var start = holeIndices[i] * dim;
      var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      polygonArea -= Math.abs(signedArea(data, start, end, dim));
    }
  }

  var trianglesArea = 0;
  for (i = 0; i < triangles.length; i += 3) {
    var a = triangles[i] * dim;
    var b = triangles[i + 1] * dim;
    var c = triangles[i + 2] * dim;
    trianglesArea += Math.abs(
    (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
    (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
  }

  return polygonArea === 0 && trianglesArea === 0 ? 0 :
  Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
  var sum = 0;
  for (var i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
    j = i;
  }
  return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
  var dim = data[0][0].length,
  result = { vertices: [], holes: [], dimensions: dim },
  holeIndex = 0;

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      for (var d = 0; d < dim; d++) {result.vertices.push(data[i][j][d]);}
    }
    if (i > 0) {
      holeIndex += data[i - 1].length;
      result.holes.push(holeIndex);
    }
  }
  return result;
};

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/advancingfront.js":
/*!*************************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/advancingfront.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */

/* jshint maxcomplexity:11 */




/*
               * Note
               * ====
               * the structure of this JavaScript version of poly2tri intentionally follows
               * as closely as possible the structure of the reference C++ version, to make it 
               * easier to keep the 2 versions in sync.
               */


// -------------------------------------------------------------------------Node

/**
 * Advancing front node
 * @constructor
 * @private
 * @struct
 * @param {!XY} p - Point
 * @param {Triangle=} t triangle (optional)
 */
var Node = function Node(p, t) {
  /** @type {XY} */
  this.point = p;

  /** @type {Triangle|null} */
  this.triangle = t || null;

  /** @type {Node|null} */
  this.next = null;
  /** @type {Node|null} */
  this.prev = null;

  /** @type {number} */
  this.value = p.x;
};

// ---------------------------------------------------------------AdvancingFront
/**
 * @constructor
 * @private
 * @struct
 * @param {Node} head
 * @param {Node} tail
 */
var AdvancingFront = function AdvancingFront(head, tail) {
  /** @type {Node} */
  this.head_ = head;
  /** @type {Node} */
  this.tail_ = tail;
  /** @type {Node} */
  this.search_node_ = head;
};

/** @return {Node} */
AdvancingFront.prototype.head = function () {
  return this.head_;
};

/** @param {Node} node */
AdvancingFront.prototype.setHead = function (node) {
  this.head_ = node;
};

/** @return {Node} */
AdvancingFront.prototype.tail = function () {
  return this.tail_;
};

/** @param {Node} node */
AdvancingFront.prototype.setTail = function (node) {
  this.tail_ = node;
};

/** @return {Node} */
AdvancingFront.prototype.search = function () {
  return this.search_node_;
};

/** @param {Node} node */
AdvancingFront.prototype.setSearch = function (node) {
  this.search_node_ = node;
};

/** @return {Node} */
AdvancingFront.prototype.findSearchNode = function () /*x*/{
  // TODO: implement BST index
  return this.search_node_;
};

/**
    * @param {number} x value
    * @return {Node}
    */
AdvancingFront.prototype.locateNode = function (x) {
  var node = this.search_node_;

  /* jshint boss:true */
  if (x < node.value) {
    while (node = node.prev) {
      if (x >= node.value) {
        this.search_node_ = node;
        return node;
      }
    }
  } else {
    while (node = node.next) {
      if (x < node.value) {
        this.search_node_ = node.prev;
        return node.prev;
      }
    }
  }
  return null;
};

/**
    * @param {!XY} point - Point
    * @return {Node}
    */
AdvancingFront.prototype.locatePoint = function (point) {
  var px = point.x;
  var node = this.findSearchNode(px);
  var nx = node.point.x;

  if (px === nx) {
    // Here we are comparing point references, not values
    if (point !== node.point) {
      // We might have two nodes with same x value for a short time
      if (point === node.prev.point) {
        node = node.prev;
      } else if (point === node.next.point) {
        node = node.next;
      } else {
        throw new Error('poly2tri Invalid AdvancingFront.locatePoint() call');
      }
    }
  } else if (px < nx) {
    /* jshint boss:true */
    while (node = node.prev) {
      if (point === node.point) {
        break;
      }
    }
  } else {
    while (node = node.next) {
      if (point === node.point) {
        break;
      }
    }
  }

  if (node) {
    this.search_node_ = node;
  }
  return node;
};


// ----------------------------------------------------------------------Exports

module.exports = AdvancingFront;
module.exports.Node = Node;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/assert.js":
/*!*****************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/assert.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 *
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 *
 * All rights reserved.
 *
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */



/*
               * Function added in the JavaScript version (was not present in the c++ version)
               */

/**
                   * assert and throw an exception.
                   *
                   * @private
                   * @param {boolean} condition   the condition which is asserted
                   * @param {string} message      the message which is display is condition is falsy
                   */
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assert Failed");
  }
}
module.exports = assert;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/point.js":
/*!****************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/point.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */




/*
               * Note
               * ====
               * the structure of this JavaScript version of poly2tri intentionally follows
               * as closely as possible the structure of the reference C++ version, to make it 
               * easier to keep the 2 versions in sync.
               */

var xy = __webpack_require__(/*! ./xy */ "./extensions/CompGeom/node_modules/poly2tri/src/xy.js");

// ------------------------------------------------------------------------Point
/**
 * Construct a point
 * @example
 *      var point = new poly2tri.Point(150, 150);
 * @public
 * @constructor
 * @struct
 * @param {number=} x    coordinate (0 if undefined)
 * @param {number=} y    coordinate (0 if undefined)
 */
var Point = function Point(x, y) {
  /**
                                   * @type {number}
                                   * @expose
                                   */
  this.x = +x || 0;
  /**
                     * @type {number}
                     * @expose
                     */
  this.y = +y || 0;

  // All extra fields added to Point are prefixed with _p2t_
  // to avoid collisions if custom Point class is used.

  /**
   * The edges this point constitutes an upper ending point
   * @private
   * @type {Array.<Edge>}
   */
  this._p2t_edge_list = null;
};

/**
    * For pretty printing
    * @example
    *      "p=" + new poly2tri.Point(5,42)
    *      // → "p=(5;42)"
    * @returns {string} <code>"(x;y)"</code>
    */
Point.prototype.toString = function () {
  return xy.toStringBase(this);
};

/**
    * JSON output, only coordinates
    * @example
    *      JSON.stringify(new poly2tri.Point(1,2))
    *      // → '{"x":1,"y":2}'
    */
Point.prototype.toJSON = function () {
  return { x: this.x, y: this.y };
};

/**
    * Creates a copy of this Point object.
    * @return {Point} new cloned point
    */
Point.prototype.clone = function () {
  return new Point(this.x, this.y);
};

/**
    * Set this Point instance to the origo. <code>(0; 0)</code>
    * @return {Point} this (for chaining)
    */
Point.prototype.set_zero = function () {
  this.x = 0.0;
  this.y = 0.0;
  return this; // for chaining
};

/**
    * Set the coordinates of this instance.
    * @param {number} x   coordinate
    * @param {number} y   coordinate
    * @return {Point} this (for chaining)
    */
Point.prototype.set = function (x, y) {
  this.x = +x || 0;
  this.y = +y || 0;
  return this; // for chaining
};

/**
    * Negate this Point instance. (component-wise)
    * @return {Point} this (for chaining)
    */
Point.prototype.negate = function () {
  this.x = -this.x;
  this.y = -this.y;
  return this; // for chaining
};

/**
    * Add another Point object to this instance. (component-wise)
    * @param {!Point} n - Point object.
    * @return {Point} this (for chaining)
    */
Point.prototype.add = function (n) {
  this.x += n.x;
  this.y += n.y;
  return this; // for chaining
};

/**
    * Subtract this Point instance with another point given. (component-wise)
    * @param {!Point} n - Point object.
    * @return {Point} this (for chaining)
    */
Point.prototype.sub = function (n) {
  this.x -= n.x;
  this.y -= n.y;
  return this; // for chaining
};

/**
    * Multiply this Point instance by a scalar. (component-wise)
    * @param {number} s   scalar.
    * @return {Point} this (for chaining)
    */
Point.prototype.mul = function (s) {
  this.x *= s;
  this.y *= s;
  return this; // for chaining
};

/**
    * Return the distance of this Point instance from the origo.
    * @return {number} distance
    */
Point.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

/**
    * Normalize this Point instance (as a vector).
    * @return {number} The original distance of this instance from the origo.
    */
Point.prototype.normalize = function () {
  var len = this.length();
  this.x /= len;
  this.y /= len;
  return len;
};

/**
    * Test this Point object with another for equality.
    * @param {!XY} p - any "Point like" object with {x,y}
    * @return {boolean} <code>true</code> if same x and y coordinates, <code>false</code> otherwise.
    */
Point.prototype.equals = function (p) {
  return this.x === p.x && this.y === p.y;
};


// -----------------------------------------------------Point ("static" methods)

/**
 * Negate a point component-wise and return the result as a new Point object.
 * @param {!XY} p - any "Point like" object with {x,y}
 * @return {Point} the resulting Point object.
 */
Point.negate = function (p) {
  return new Point(-p.x, -p.y);
};

/**
    * Add two points component-wise and return the result as a new Point object.
    * @param {!XY} a - any "Point like" object with {x,y}
    * @param {!XY} b - any "Point like" object with {x,y}
    * @return {Point} the resulting Point object.
    */
Point.add = function (a, b) {
  return new Point(a.x + b.x, a.y + b.y);
};

/**
    * Subtract two points component-wise and return the result as a new Point object.
    * @param {!XY} a - any "Point like" object with {x,y}
    * @param {!XY} b - any "Point like" object with {x,y}
    * @return {Point} the resulting Point object.
    */
Point.sub = function (a, b) {
  return new Point(a.x - b.x, a.y - b.y);
};

/**
    * Multiply a point by a scalar and return the result as a new Point object.
    * @param {number} s - the scalar
    * @param {!XY} p - any "Point like" object with {x,y}
    * @return {Point} the resulting Point object.
    */
Point.mul = function (s, p) {
  return new Point(s * p.x, s * p.y);
};

/**
    * Perform the cross product on either two points (this produces a scalar)
    * or a point and a scalar (this produces a point).
    * This function requires two parameters, either may be a Point object or a
    * number.
    * @param  {XY|number} a - Point object or scalar.
    * @param  {XY|number} b - Point object or scalar.
    * @return {Point|number} a Point object or a number, depending on the parameters.
    */
Point.cross = function (a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return a * b;
    } else {
      return new Point(-a * b.y, a * b.x);
    }
  } else {
    if (typeof b === 'number') {
      return new Point(b * a.y, -b * a.x);
    } else {
      return a.x * b.y - a.y * b.x;
    }
  }
};


// -----------------------------------------------------------------"Point-Like"
/*
 * The following functions operate on "Point" or any "Point like" object 
 * with {x,y} (duck typing).
 */

Point.toString = xy.toString;
Point.compare = xy.compare;
Point.cmp = xy.compare; // backward compatibility
Point.equals = xy.equals;

/**
                           * Peform the dot product on two vectors.
                           * @public
                           * @param {!XY} a - any "Point like" object with {x,y}
                           * @param {!XY} b - any "Point like" object with {x,y}
                           * @return {number} The dot product
                           */
Point.dot = function (a, b) {
  return a.x * b.x + a.y * b.y;
};


// ---------------------------------------------------------Exports (public API)

module.exports = Point;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/pointerror.js":
/*!*********************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/pointerror.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */



/*
               * Class added in the JavaScript version (was not present in the c++ version)
               */

var xy = __webpack_require__(/*! ./xy */ "./extensions/CompGeom/node_modules/poly2tri/src/xy.js");

/**
                           * Custom exception class to indicate invalid Point values
                           * @constructor
                           * @public
                           * @extends Error
                           * @struct
                           * @param {string=} message - error message
                           * @param {Array.<XY>=} points - invalid points
                           */
var PointError = function PointError(message, points) {
  this.name = "PointError";
  /**
                             * Invalid points
                             * @public
                             * @type {Array.<XY>}
                             */
  this.points = points = points || [];
  /**
                                        * Error message
                                        * @public
                                        * @type {string}
                                        */
  this.message = message || "Invalid Points!";
  for (var i = 0; i < points.length; i++) {
    this.message += " " + xy.toString(points[i]);
  }
};
PointError.prototype = new Error();
PointError.prototype.constructor = PointError;


module.exports = PointError;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/poly2tri.js":
/*!*******************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/poly2tri.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * * Neither the name of Poly2Tri nor the names of its contributors may be
 *   used to endorse or promote products derived from this software without specific
 *   prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
               * Public API for poly2tri.js
               * @module poly2tri
               */


/**
                   * If you are not using a module system (e.g. CommonJS, RequireJS), you can access this library
                   * as a global variable <code>poly2tri</code> i.e. <code>window.poly2tri</code> in a browser.
                   * @name poly2tri
                   * @global
                   * @public
                   * @type {module:poly2tri}
                   */
var previousPoly2tri = __webpack_require__.g.poly2tri;
/**
                                         * For Browser + &lt;script&gt; :
                                         * reverts the {@linkcode poly2tri} global object to its previous value,
                                         * and returns a reference to the instance called.
                                         *
                                         * @example
                                         *              var p = poly2tri.noConflict();
                                         * @public
                                         * @return {module:poly2tri} instance called
                                         */
// (this feature is not automatically provided by browserify).
exports.noConflict = function () {
  __webpack_require__.g.poly2tri = previousPoly2tri;
  return exports;
};

/**
    * poly2tri library version
    * @public
    * @const {string}
    */
exports.VERSION = __webpack_require__(/*! ../dist/version.json */ "./extensions/CompGeom/node_modules/poly2tri/dist/version.json").version;

/**
                                                            * Exports the {@linkcode PointError} class.
                                                            * @public
                                                            * @typedef {PointError} module:poly2tri.PointError
                                                            * @function
                                                            */
exports.PointError = __webpack_require__(/*! ./pointerror */ "./extensions/CompGeom/node_modules/poly2tri/src/pointerror.js");
/**
                                               * Exports the {@linkcode Point} class.
                                               * @public
                                               * @typedef {Point} module:poly2tri.Point
                                               * @function
                                               */
exports.Point = __webpack_require__(/*! ./point */ "./extensions/CompGeom/node_modules/poly2tri/src/point.js");
/**
                                     * Exports the {@linkcode Triangle} class.
                                     * @public
                                     * @typedef {Triangle} module:poly2tri.Triangle
                                     * @function
                                     */
exports.Triangle = __webpack_require__(/*! ./triangle */ "./extensions/CompGeom/node_modules/poly2tri/src/triangle.js");
/**
                                           * Exports the {@linkcode SweepContext} class.
                                           * @public
                                           * @typedef {SweepContext} module:poly2tri.SweepContext
                                           * @function
                                           */
exports.SweepContext = __webpack_require__(/*! ./sweepcontext */ "./extensions/CompGeom/node_modules/poly2tri/src/sweepcontext.js");


// Backward compatibility
var sweep = __webpack_require__(/*! ./sweep */ "./extensions/CompGeom/node_modules/poly2tri/src/sweep.js");
/**
                                 * @function
                                 * @deprecated use {@linkcode SweepContext#triangulate} instead
                                 */
exports.triangulate = sweep.triangulate;
/**
                                          * @deprecated use {@linkcode SweepContext#triangulate} instead
                                          * @property {function} Triangulate - use {@linkcode SweepContext#triangulate} instead
                                          */
exports.sweep = { Triangulate: sweep.triangulate };

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/sweep.js":
/*!****************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/sweep.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */

/* jshint latedef:nofunc, maxcomplexity:9 */



/**
               * This 'Sweep' module is present in order to keep this JavaScript version
               * as close as possible to the reference C++ version, even though almost all
               * functions could be declared as methods on the {@linkcode module:sweepcontext~SweepContext} object.
               * @module
               * @private
               */

/*
                   * Note
                   * ====
                   * the structure of this JavaScript version of poly2tri intentionally follows
                   * as closely as possible the structure of the reference C++ version, to make it 
                   * easier to keep the 2 versions in sync.
                   */

var assert = __webpack_require__(/*! ./assert */ "./extensions/CompGeom/node_modules/poly2tri/src/assert.js");
var PointError = __webpack_require__(/*! ./pointerror */ "./extensions/CompGeom/node_modules/poly2tri/src/pointerror.js");
var Triangle = __webpack_require__(/*! ./triangle */ "./extensions/CompGeom/node_modules/poly2tri/src/triangle.js");
var Node = __webpack_require__(/*! ./advancingfront */ "./extensions/CompGeom/node_modules/poly2tri/src/advancingfront.js").Node;


// ------------------------------------------------------------------------utils

var utils = __webpack_require__(/*! ./utils */ "./extensions/CompGeom/node_modules/poly2tri/src/utils.js");

/** @const */
var EPSILON = utils.EPSILON;

/** @const */
var Orientation = utils.Orientation;
/** @const */
var orient2d = utils.orient2d;
/** @const */
var inScanArea = utils.inScanArea;
/** @const */
var isAngleObtuse = utils.isAngleObtuse;


// ------------------------------------------------------------------------Sweep

/**
 * Triangulate the polygon with holes and Steiner points.
 * Do this AFTER you've added the polyline, holes, and Steiner points
 * @private
 * @param {!SweepContext} tcx - SweepContext object
 */
function triangulate(tcx) {
  tcx.initTriangulation();
  tcx.createAdvancingFront();
  // Sweep points; build mesh
  sweepPoints(tcx);
  // Clean up
  finalizationPolygon(tcx);
}

/**
   * Start sweeping the Y-sorted point set from bottom to top
   * @param {!SweepContext} tcx - SweepContext object
   */
function sweepPoints(tcx) {
  var i,len = tcx.pointCount();
  for (i = 1; i < len; ++i) {
    var point = tcx.getPoint(i);
    var node = pointEvent(tcx, point);
    var edges = point._p2t_edge_list;
    for (var j = 0; edges && j < edges.length; ++j) {
      edgeEventByEdge(tcx, edges[j], node);
    }
  }
}

/**
   * @param {!SweepContext} tcx - SweepContext object
   */
function finalizationPolygon(tcx) {
  // Get an Internal triangle to start with
  var t = tcx.front().head().next.triangle;
  var p = tcx.front().head().next.point;
  while (!t.getConstrainedEdgeCW(p)) {
    t = t.neighborCCW(p);
  }

  // Collect interior triangles constrained by edges
  tcx.meshClean(t);
}

/**
   * Find closes node to the left of the new point and
   * create a new triangle. If needed new holes and basins
   * will be filled to.
   * @param {!SweepContext} tcx - SweepContext object
   * @param {!XY} point   Point
   */
function pointEvent(tcx, point) {
  var node = tcx.locateNode(point);
  var new_node = newFrontTriangle(tcx, point, node);

  // Only need to check +epsilon since point never have smaller
  // x value than node due to how we fetch nodes from the front
  if (point.x <= node.point.x + EPSILON) {
    fill(tcx, node);
  }

  //tcx.AddNode(new_node);

  fillAdvancingFront(tcx, new_node);
  return new_node;
}

function edgeEventByEdge(tcx, edge, node) {
  tcx.edge_event.constrained_edge = edge;
  tcx.edge_event.right = edge.p.x > edge.q.x;

  if (isEdgeSideOfTriangle(node.triangle, edge.p, edge.q)) {
    return;
  }

  // For now we will do all needed filling
  // TODO: integrate with flip process might give some better performance
  //       but for now this avoid the issue with cases that needs both flips and fills
  fillEdgeEvent(tcx, edge, node);
  edgeEventByPoints(tcx, edge.p, edge.q, node.triangle, edge.q);
}

function edgeEventByPoints(tcx, ep, eq, triangle, point) {
  if (isEdgeSideOfTriangle(triangle, ep, eq)) {
    return;
  }

  var p1 = triangle.pointCCW(point);
  var o1 = orient2d(eq, p1, ep);
  if (o1 === Orientation.COLLINEAR) {
    // TODO integrate here changes from C++ version
    // (C++ repo revision 09880a869095 dated March 8, 2011)
    throw new PointError('poly2tri EdgeEvent: Collinear not supported!', [eq, p1, ep]);
  }

  var p2 = triangle.pointCW(point);
  var o2 = orient2d(eq, p2, ep);
  if (o2 === Orientation.COLLINEAR) {
    // TODO integrate here changes from C++ version
    // (C++ repo revision 09880a869095 dated March 8, 2011)
    throw new PointError('poly2tri EdgeEvent: Collinear not supported!', [eq, p2, ep]);
  }

  if (o1 === o2) {
    // Need to decide if we are rotating CW or CCW to get to a triangle
    // that will cross edge
    if (o1 === Orientation.CW) {
      triangle = triangle.neighborCCW(point);
    } else {
      triangle = triangle.neighborCW(point);
    }
    edgeEventByPoints(tcx, ep, eq, triangle, point);
  } else {
    // This triangle crosses constraint so lets flippin start!
    flipEdgeEvent(tcx, ep, eq, triangle, point);
  }
}

function isEdgeSideOfTriangle(triangle, ep, eq) {
  var index = triangle.edgeIndex(ep, eq);
  if (index !== -1) {
    triangle.markConstrainedEdgeByIndex(index);
    var t = triangle.getNeighbor(index);
    if (t) {
      t.markConstrainedEdgeByPoints(ep, eq);
    }
    return true;
  }
  return false;
}

/**
   * Creates a new front triangle and legalize it
   * @param {!SweepContext} tcx - SweepContext object
   */
function newFrontTriangle(tcx, point, node) {
  var triangle = new Triangle(point, node.point, node.next.point);

  triangle.markNeighbor(node.triangle);
  tcx.addToMap(triangle);

  var new_node = new Node(point);
  new_node.next = node.next;
  new_node.prev = node;
  node.next.prev = new_node;
  node.next = new_node;

  if (!legalize(tcx, triangle)) {
    tcx.mapTriangleToNodes(triangle);
  }

  return new_node;
}

/**
   * Adds a triangle to the advancing front to fill a hole.
   * @param {!SweepContext} tcx - SweepContext object
   * @param node - middle node, that is the bottom of the hole
   */
function fill(tcx, node) {
  var triangle = new Triangle(node.prev.point, node.point, node.next.point);

  // TODO: should copy the constrained_edge value from neighbor triangles
  //       for now constrained_edge values are copied during the legalize
  triangle.markNeighbor(node.prev.triangle);
  triangle.markNeighbor(node.triangle);

  tcx.addToMap(triangle);

  // Update the advancing front
  node.prev.next = node.next;
  node.next.prev = node.prev;


  // If it was legalized the triangle has already been mapped
  if (!legalize(tcx, triangle)) {
    tcx.mapTriangleToNodes(triangle);
  }

  //tcx.removeNode(node);
}

/**
   * Fills holes in the Advancing Front
   * @param {!SweepContext} tcx - SweepContext object
   */
function fillAdvancingFront(tcx, n) {
  // Fill right holes
  var node = n.next;
  while (node.next) {
    // TODO integrate here changes from C++ version
    // (C++ repo revision acf81f1f1764 dated April 7, 2012)
    if (isAngleObtuse(node.point, node.next.point, node.prev.point)) {
      break;
    }
    fill(tcx, node);
    node = node.next;
  }

  // Fill left holes
  node = n.prev;
  while (node.prev) {
    // TODO integrate here changes from C++ version
    // (C++ repo revision acf81f1f1764 dated April 7, 2012)
    if (isAngleObtuse(node.point, node.next.point, node.prev.point)) {
      break;
    }
    fill(tcx, node);
    node = node.prev;
  }

  // Fill right basins
  if (n.next && n.next.next) {
    if (isBasinAngleRight(n)) {
      fillBasin(tcx, n);
    }
  }
}

/**
   * The basin angle is decided against the horizontal line [1,0].
   * @param {Node} node
   * @return {boolean} true if angle < 3*π/4
   */
function isBasinAngleRight(node) {
  var ax = node.point.x - node.next.next.point.x;
  var ay = node.point.y - node.next.next.point.y;
  assert(ay >= 0, "unordered y");
  return ax >= 0 || Math.abs(ax) < ay;
}

/**
   * Returns true if triangle was legalized
   * @param {!SweepContext} tcx - SweepContext object
   * @return {boolean}
   */
function legalize(tcx, t) {
  // To legalize a triangle we start by finding if any of the three edges
  // violate the Delaunay condition
  for (var i = 0; i < 3; ++i) {
    if (t.delaunay_edge[i]) {
      continue;
    }
    var ot = t.getNeighbor(i);
    if (ot) {
      var p = t.getPoint(i);
      var op = ot.oppositePoint(t, p);
      var oi = ot.index(op);

      // If this is a Constrained Edge or a Delaunay Edge(only during recursive legalization)
      // then we should not try to legalize
      if (ot.constrained_edge[oi] || ot.delaunay_edge[oi]) {
        t.constrained_edge[i] = ot.constrained_edge[oi];
        continue;
      }

      var inside = inCircle(p, t.pointCCW(p), t.pointCW(p), op);
      if (inside) {
        // Lets mark this shared edge as Delaunay
        t.delaunay_edge[i] = true;
        ot.delaunay_edge[oi] = true;

        // Lets rotate shared edge one vertex CW to legalize it
        rotateTrianglePair(t, p, ot, op);

        // We now got one valid Delaunay Edge shared by two triangles
        // This gives us 4 new edges to check for Delaunay

        // Make sure that triangle to node mapping is done only one time for a specific triangle
        var not_legalized = !legalize(tcx, t);
        if (not_legalized) {
          tcx.mapTriangleToNodes(t);
        }

        not_legalized = !legalize(tcx, ot);
        if (not_legalized) {
          tcx.mapTriangleToNodes(ot);
        }
        // Reset the Delaunay edges, since they only are valid Delaunay edges
        // until we add a new triangle or point.
        // XXX: need to think about this. Can these edges be tried after we
        //      return to previous recursive level?
        t.delaunay_edge[i] = false;
        ot.delaunay_edge[oi] = false;

        // If triangle have been legalized no need to check the other edges since
        // the recursive legalization will handles those so we can end here.
        return true;
      }
    }
  }
  return false;
}

/**
   * <b>Requirement</b>:<br>
   * 1. a,b and c form a triangle.<br>
   * 2. a and d is know to be on opposite side of bc<br>
   * <pre>
   *                a
   *                +
   *               / \
   *              /   \
   *            b/     \c
   *            +-------+
   *           /    d    \
   *          /           \
   * </pre>
   * <b>Fact</b>: d has to be in area B to have a chance to be inside the circle formed by
   *  a,b and c<br>
   *  d is outside B if orient2d(a,b,d) or orient2d(c,a,d) is CW<br>
   *  This preknowledge gives us a way to optimize the incircle test
   * @param pa - triangle point, opposite d
   * @param pb - triangle point
   * @param pc - triangle point
   * @param pd - point opposite a
   * @return {boolean} true if d is inside circle, false if on circle edge
   */
function inCircle(pa, pb, pc, pd) {
  var adx = pa.x - pd.x;
  var ady = pa.y - pd.y;
  var bdx = pb.x - pd.x;
  var bdy = pb.y - pd.y;

  var adxbdy = adx * bdy;
  var bdxady = bdx * ady;
  var oabd = adxbdy - bdxady;
  if (oabd <= 0) {
    return false;
  }

  var cdx = pc.x - pd.x;
  var cdy = pc.y - pd.y;

  var cdxady = cdx * ady;
  var adxcdy = adx * cdy;
  var ocad = cdxady - adxcdy;
  if (ocad <= 0) {
    return false;
  }

  var bdxcdy = bdx * cdy;
  var cdxbdy = cdx * bdy;

  var alift = adx * adx + ady * ady;
  var blift = bdx * bdx + bdy * bdy;
  var clift = cdx * cdx + cdy * cdy;

  var det = alift * (bdxcdy - cdxbdy) + blift * ocad + clift * oabd;
  return det > 0;
}

/**
   * Rotates a triangle pair one vertex CW
   *<pre>
   *       n2                    n2
   *  P +-----+             P +-----+
   *    | t  /|               |\  t |
   *    |   / |               | \   |
   *  n1|  /  |n3           n1|  \  |n3
   *    | /   |    after CW   |   \ |
   *    |/ oT |               | oT \|
   *    +-----+ oP            +-----+
   *       n4                    n4
   * </pre>
   */
function rotateTrianglePair(t, p, ot, op) {
  var n1, n2, n3, n4;
  n1 = t.neighborCCW(p);
  n2 = t.neighborCW(p);
  n3 = ot.neighborCCW(op);
  n4 = ot.neighborCW(op);

  var ce1, ce2, ce3, ce4;
  ce1 = t.getConstrainedEdgeCCW(p);
  ce2 = t.getConstrainedEdgeCW(p);
  ce3 = ot.getConstrainedEdgeCCW(op);
  ce4 = ot.getConstrainedEdgeCW(op);

  var de1, de2, de3, de4;
  de1 = t.getDelaunayEdgeCCW(p);
  de2 = t.getDelaunayEdgeCW(p);
  de3 = ot.getDelaunayEdgeCCW(op);
  de4 = ot.getDelaunayEdgeCW(op);

  t.legalize(p, op);
  ot.legalize(op, p);

  // Remap delaunay_edge
  ot.setDelaunayEdgeCCW(p, de1);
  t.setDelaunayEdgeCW(p, de2);
  t.setDelaunayEdgeCCW(op, de3);
  ot.setDelaunayEdgeCW(op, de4);

  // Remap constrained_edge
  ot.setConstrainedEdgeCCW(p, ce1);
  t.setConstrainedEdgeCW(p, ce2);
  t.setConstrainedEdgeCCW(op, ce3);
  ot.setConstrainedEdgeCW(op, ce4);

  // Remap neighbors
  // XXX: might optimize the markNeighbor by keeping track of
  //      what side should be assigned to what neighbor after the
  //      rotation. Now mark neighbor does lots of testing to find
  //      the right side.
  t.clearNeighbors();
  ot.clearNeighbors();
  if (n1) {
    ot.markNeighbor(n1);
  }
  if (n2) {
    t.markNeighbor(n2);
  }
  if (n3) {
    t.markNeighbor(n3);
  }
  if (n4) {
    ot.markNeighbor(n4);
  }
  t.markNeighbor(ot);
}

/**
   * Fills a basin that has formed on the Advancing Front to the right
   * of given node.<br>
   * First we decide a left,bottom and right node that forms the
   * boundaries of the basin. Then we do a reqursive fill.
   *
   * @param {!SweepContext} tcx - SweepContext object
   * @param node - starting node, this or next node will be left node
   */
function fillBasin(tcx, node) {
  if (orient2d(node.point, node.next.point, node.next.next.point) === Orientation.CCW) {
    tcx.basin.left_node = node.next.next;
  } else {
    tcx.basin.left_node = node.next;
  }

  // Find the bottom and right node
  tcx.basin.bottom_node = tcx.basin.left_node;
  while (tcx.basin.bottom_node.next && tcx.basin.bottom_node.point.y >= tcx.basin.bottom_node.next.point.y) {
    tcx.basin.bottom_node = tcx.basin.bottom_node.next;
  }
  if (tcx.basin.bottom_node === tcx.basin.left_node) {
    // No valid basin
    return;
  }

  tcx.basin.right_node = tcx.basin.bottom_node;
  while (tcx.basin.right_node.next && tcx.basin.right_node.point.y < tcx.basin.right_node.next.point.y) {
    tcx.basin.right_node = tcx.basin.right_node.next;
  }
  if (tcx.basin.right_node === tcx.basin.bottom_node) {
    // No valid basins
    return;
  }

  tcx.basin.width = tcx.basin.right_node.point.x - tcx.basin.left_node.point.x;
  tcx.basin.left_highest = tcx.basin.left_node.point.y > tcx.basin.right_node.point.y;

  fillBasinReq(tcx, tcx.basin.bottom_node);
}

/**
   * Recursive algorithm to fill a Basin with triangles
   *
   * @param {!SweepContext} tcx - SweepContext object
   * @param node - bottom_node
   */
function fillBasinReq(tcx, node) {
  // if shallow stop filling
  if (isShallow(tcx, node)) {
    return;
  }

  fill(tcx, node);

  var o;
  if (node.prev === tcx.basin.left_node && node.next === tcx.basin.right_node) {
    return;
  } else if (node.prev === tcx.basin.left_node) {
    o = orient2d(node.point, node.next.point, node.next.next.point);
    if (o === Orientation.CW) {
      return;
    }
    node = node.next;
  } else if (node.next === tcx.basin.right_node) {
    o = orient2d(node.point, node.prev.point, node.prev.prev.point);
    if (o === Orientation.CCW) {
      return;
    }
    node = node.prev;
  } else {
    // Continue with the neighbor node with lowest Y value
    if (node.prev.point.y < node.next.point.y) {
      node = node.prev;
    } else {
      node = node.next;
    }
  }

  fillBasinReq(tcx, node);
}

function isShallow(tcx, node) {
  var height;
  if (tcx.basin.left_highest) {
    height = tcx.basin.left_node.point.y - node.point.y;
  } else {
    height = tcx.basin.right_node.point.y - node.point.y;
  }

  // if shallow stop filling
  if (tcx.basin.width > height) {
    return true;
  }
  return false;
}

function fillEdgeEvent(tcx, edge, node) {
  if (tcx.edge_event.right) {
    fillRightAboveEdgeEvent(tcx, edge, node);
  } else {
    fillLeftAboveEdgeEvent(tcx, edge, node);
  }
}

function fillRightAboveEdgeEvent(tcx, edge, node) {
  while (node.next.point.x < edge.p.x) {
    // Check if next node is below the edge
    if (orient2d(edge.q, node.next.point, edge.p) === Orientation.CCW) {
      fillRightBelowEdgeEvent(tcx, edge, node);
    } else {
      node = node.next;
    }
  }
}

function fillRightBelowEdgeEvent(tcx, edge, node) {
  if (node.point.x < edge.p.x) {
    if (orient2d(node.point, node.next.point, node.next.next.point) === Orientation.CCW) {
      // Concave
      fillRightConcaveEdgeEvent(tcx, edge, node);
    } else {
      // Convex
      fillRightConvexEdgeEvent(tcx, edge, node);
      // Retry this one
      fillRightBelowEdgeEvent(tcx, edge, node);
    }
  }
}

function fillRightConcaveEdgeEvent(tcx, edge, node) {
  fill(tcx, node.next);
  if (node.next.point !== edge.p) {
    // Next above or below edge?
    if (orient2d(edge.q, node.next.point, edge.p) === Orientation.CCW) {
      // Below
      if (orient2d(node.point, node.next.point, node.next.next.point) === Orientation.CCW) {
        // Next is concave
        fillRightConcaveEdgeEvent(tcx, edge, node);
      } else {
        // Next is convex
        /* jshint noempty:false */
      }
    }
  }
}

function fillRightConvexEdgeEvent(tcx, edge, node) {
  // Next concave or convex?
  if (orient2d(node.next.point, node.next.next.point, node.next.next.next.point) === Orientation.CCW) {
    // Concave
    fillRightConcaveEdgeEvent(tcx, edge, node.next);
  } else {
    // Convex
    // Next above or below edge?
    if (orient2d(edge.q, node.next.next.point, edge.p) === Orientation.CCW) {
      // Below
      fillRightConvexEdgeEvent(tcx, edge, node.next);
    } else {
      // Above
      /* jshint noempty:false */
    }
  }
}

function fillLeftAboveEdgeEvent(tcx, edge, node) {
  while (node.prev.point.x > edge.p.x) {
    // Check if next node is below the edge
    if (orient2d(edge.q, node.prev.point, edge.p) === Orientation.CW) {
      fillLeftBelowEdgeEvent(tcx, edge, node);
    } else {
      node = node.prev;
    }
  }
}

function fillLeftBelowEdgeEvent(tcx, edge, node) {
  if (node.point.x > edge.p.x) {
    if (orient2d(node.point, node.prev.point, node.prev.prev.point) === Orientation.CW) {
      // Concave
      fillLeftConcaveEdgeEvent(tcx, edge, node);
    } else {
      // Convex
      fillLeftConvexEdgeEvent(tcx, edge, node);
      // Retry this one
      fillLeftBelowEdgeEvent(tcx, edge, node);
    }
  }
}

function fillLeftConvexEdgeEvent(tcx, edge, node) {
  // Next concave or convex?
  if (orient2d(node.prev.point, node.prev.prev.point, node.prev.prev.prev.point) === Orientation.CW) {
    // Concave
    fillLeftConcaveEdgeEvent(tcx, edge, node.prev);
  } else {
    // Convex
    // Next above or below edge?
    if (orient2d(edge.q, node.prev.prev.point, edge.p) === Orientation.CW) {
      // Below
      fillLeftConvexEdgeEvent(tcx, edge, node.prev);
    } else {
      // Above
      /* jshint noempty:false */
    }
  }
}

function fillLeftConcaveEdgeEvent(tcx, edge, node) {
  fill(tcx, node.prev);
  if (node.prev.point !== edge.p) {
    // Next above or below edge?
    if (orient2d(edge.q, node.prev.point, edge.p) === Orientation.CW) {
      // Below
      if (orient2d(node.point, node.prev.point, node.prev.prev.point) === Orientation.CW) {
        // Next is concave
        fillLeftConcaveEdgeEvent(tcx, edge, node);
      } else {
        // Next is convex
        /* jshint noempty:false */
      }
    }
  }
}

function flipEdgeEvent(tcx, ep, eq, t, p) {
  var ot = t.neighborAcross(p);
  assert(ot, "FLIP failed due to missing triangle!");

  var op = ot.oppositePoint(t, p);

  // Additional check from Java version (see issue #88)
  if (t.getConstrainedEdgeAcross(p)) {
    var index = t.index(p);
    throw new PointError("poly2tri Intersecting Constraints",
    [p, op, t.getPoint((index + 1) % 3), t.getPoint((index + 2) % 3)]);
  }

  if (inScanArea(p, t.pointCCW(p), t.pointCW(p), op)) {
    // Lets rotate shared edge one vertex CW
    rotateTrianglePair(t, p, ot, op);
    tcx.mapTriangleToNodes(t);
    tcx.mapTriangleToNodes(ot);

    // XXX: in the original C++ code for the next 2 lines, we are
    // comparing point values (and not pointers). In this JavaScript
    // code, we are comparing point references (pointers). This works
    // because we can't have 2 different points with the same values.
    // But to be really equivalent, we should use "Point.equals" here.
    if (p === eq && op === ep) {
      if (eq === tcx.edge_event.constrained_edge.q && ep === tcx.edge_event.constrained_edge.p) {
        t.markConstrainedEdgeByPoints(ep, eq);
        ot.markConstrainedEdgeByPoints(ep, eq);
        legalize(tcx, t);
        legalize(tcx, ot);
      } else {
        // XXX: I think one of the triangles should be legalized here?
        /* jshint noempty:false */
      }
    } else {
      var o = orient2d(eq, op, ep);
      t = nextFlipTriangle(tcx, o, t, ot, p, op);
      flipEdgeEvent(tcx, ep, eq, t, p);
    }
  } else {
    var newP = nextFlipPoint(ep, eq, ot, op);
    flipScanEdgeEvent(tcx, ep, eq, t, ot, newP);
    edgeEventByPoints(tcx, ep, eq, t, p);
  }
}

/**
   * After a flip we have two triangles and know that only one will still be
   * intersecting the edge. So decide which to contiune with and legalize the other
   *
   * @param {!SweepContext} tcx - SweepContext object
   * @param o - should be the result of an orient2d( eq, op, ep )
   * @param t - triangle 1
   * @param ot - triangle 2
   * @param p - a point shared by both triangles
   * @param op - another point shared by both triangles
   * @return returns the triangle still intersecting the edge
   */
function nextFlipTriangle(tcx, o, t, ot, p, op) {
  var edge_index;
  if (o === Orientation.CCW) {
    // ot is not crossing edge after flip
    edge_index = ot.edgeIndex(p, op);
    ot.delaunay_edge[edge_index] = true;
    legalize(tcx, ot);
    ot.clearDelaunayEdges();
    return t;
  }

  // t is not crossing edge after flip
  edge_index = t.edgeIndex(p, op);

  t.delaunay_edge[edge_index] = true;
  legalize(tcx, t);
  t.clearDelaunayEdges();
  return ot;
}

/**
   * When we need to traverse from one triangle to the next we need
   * the point in current triangle that is the opposite point to the next
   * triangle.
   */
function nextFlipPoint(ep, eq, ot, op) {
  var o2d = orient2d(eq, op, ep);
  if (o2d === Orientation.CW) {
    // Right
    return ot.pointCCW(op);
  } else if (o2d === Orientation.CCW) {
    // Left
    return ot.pointCW(op);
  } else {
    throw new PointError("poly2tri [Unsupported] nextFlipPoint: opposing point on constrained edge!", [eq, op, ep]);
  }
}

/**
   * Scan part of the FlipScan algorithm<br>
   * When a triangle pair isn't flippable we will scan for the next
   * point that is inside the flip triangle scan area. When found
   * we generate a new flipEdgeEvent
   *
   * @param {!SweepContext} tcx - SweepContext object
   * @param ep - last point on the edge we are traversing
   * @param eq - first point on the edge we are traversing
   * @param {!Triangle} flip_triangle - the current triangle sharing the point eq with edge
   * @param t
   * @param p
   */
function flipScanEdgeEvent(tcx, ep, eq, flip_triangle, t, p) {
  var ot = t.neighborAcross(p);
  assert(ot, "FLIP failed due to missing triangle");

  var op = ot.oppositePoint(t, p);

  if (inScanArea(eq, flip_triangle.pointCCW(eq), flip_triangle.pointCW(eq), op)) {
    // flip with new edge op.eq
    flipEdgeEvent(tcx, eq, op, ot, op);
  } else {
    var newP = nextFlipPoint(ep, eq, ot, op);
    flipScanEdgeEvent(tcx, ep, eq, flip_triangle, ot, newP);
  }
}


// ----------------------------------------------------------------------Exports

exports.triangulate = triangulate;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/sweepcontext.js":
/*!***********************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/sweepcontext.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */

/* jshint maxcomplexity:6 */




/*
               * Note
               * ====
               * the structure of this JavaScript version of poly2tri intentionally follows
               * as closely as possible the structure of the reference C++ version, to make it 
               * easier to keep the 2 versions in sync.
               */

var PointError = __webpack_require__(/*! ./pointerror */ "./extensions/CompGeom/node_modules/poly2tri/src/pointerror.js");
var Point = __webpack_require__(/*! ./point */ "./extensions/CompGeom/node_modules/poly2tri/src/point.js");
var Triangle = __webpack_require__(/*! ./triangle */ "./extensions/CompGeom/node_modules/poly2tri/src/triangle.js");
var sweep = __webpack_require__(/*! ./sweep */ "./extensions/CompGeom/node_modules/poly2tri/src/sweep.js");
var AdvancingFront = __webpack_require__(/*! ./advancingfront */ "./extensions/CompGeom/node_modules/poly2tri/src/advancingfront.js");
var Node = AdvancingFront.Node;


// ------------------------------------------------------------------------utils

/**
 * Initial triangle factor, seed triangle will extend 30% of
 * PointSet width to both left and right.
 * @private
 * @const
 */
var kAlpha = 0.3;


// -------------------------------------------------------------------------Edge
/**
 * Represents a simple polygon's edge
 * @constructor
 * @struct
 * @private
 * @param {Point} p1
 * @param {Point} p2
 * @throw {PointError} if p1 is same as p2
 */
var Edge = function Edge(p1, p2) {
  this.p = p1;
  this.q = p2;

  if (p1.y > p2.y) {
    this.q = p1;
    this.p = p2;
  } else if (p1.y === p2.y) {
    if (p1.x > p2.x) {
      this.q = p1;
      this.p = p2;
    } else if (p1.x === p2.x) {
      throw new PointError('poly2tri Invalid Edge constructor: repeated points!', [p1]);
    }
  }

  if (!this.q._p2t_edge_list) {
    this.q._p2t_edge_list = [];
  }
  this.q._p2t_edge_list.push(this);
};


// ------------------------------------------------------------------------Basin
/**
 * @constructor
 * @struct
 * @private
 */
var Basin = function Basin() {
  /** @type {Node} */
  this.left_node = null;
  /** @type {Node} */
  this.bottom_node = null;
  /** @type {Node} */
  this.right_node = null;
  /** @type {number} */
  this.width = 0.0;
  /** @type {boolean} */
  this.left_highest = false;
};

Basin.prototype.clear = function () {
  this.left_node = null;
  this.bottom_node = null;
  this.right_node = null;
  this.width = 0.0;
  this.left_highest = false;
};

// --------------------------------------------------------------------EdgeEvent
/**
 * @constructor
 * @struct
 * @private
 */
var EdgeEvent = function EdgeEvent() {
  /** @type {Edge} */
  this.constrained_edge = null;
  /** @type {boolean} */
  this.right = false;
};

// ----------------------------------------------------SweepContext (public API)
/**
 * SweepContext constructor option
 * @typedef {Object} SweepContextOptions
 * @property {boolean=} cloneArrays - if <code>true</code>, do a shallow copy of the Array parameters
 *                  (contour, holes). Points inside arrays are never copied.
 *                  Default is <code>false</code> : keep a reference to the array arguments,
 *                  who will be modified in place.
 */
/**
     * Constructor for the triangulation context.
     * It accepts a simple polyline (with non repeating points), 
     * which defines the constrained edges.
     *
     * @example
     *          var contour = [
     *              new poly2tri.Point(100, 100),
     *              new poly2tri.Point(100, 300),
     *              new poly2tri.Point(300, 300),
     *              new poly2tri.Point(300, 100)
     *          ];
     *          var swctx = new poly2tri.SweepContext(contour, {cloneArrays: true});
     * @example
     *          var contour = [{x:100, y:100}, {x:100, y:300}, {x:300, y:300}, {x:300, y:100}];
     *          var swctx = new poly2tri.SweepContext(contour, {cloneArrays: true});
     * @constructor
     * @public
     * @struct
     * @param {Array.<XY>} contour - array of point objects. The points can be either {@linkcode Point} instances,
     *          or any "Point like" custom class with <code>{x, y}</code> attributes.
     * @param {SweepContextOptions=} options - constructor options
     */
var SweepContext = function SweepContext(contour, options) {
  options = options || {};
  this.triangles_ = [];
  this.map_ = [];
  this.points_ = options.cloneArrays ? contour.slice(0) : contour;
  this.edge_list = [];

  // Bounding box of all points. Computed at the start of the triangulation, 
  // it is stored in case it is needed by the caller.
  this.pmin_ = this.pmax_ = null;

  /**
                                   * Advancing front
                                   * @private
                                   * @type {AdvancingFront}
                                   */
  this.front_ = null;

  /**
                       * head point used with advancing front
                       * @private
                       * @type {Point}
                       */
  this.head_ = null;

  /**
                      * tail point used with advancing front
                      * @private
                      * @type {Point}
                      */
  this.tail_ = null;

  /**
                      * @private
                      * @type {Node}
                      */
  this.af_head_ = null;
  /**
                         * @private
                         * @type {Node}
                         */
  this.af_middle_ = null;
  /**
                           * @private
                           * @type {Node}
                           */
  this.af_tail_ = null;

  this.basin = new Basin();
  this.edge_event = new EdgeEvent();

  this.initEdges(this.points_);
};


/**
    * Add a hole to the constraints
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      var hole = [
    *          new poly2tri.Point(200, 200),
    *          new poly2tri.Point(200, 250),
    *          new poly2tri.Point(250, 250)
    *      ];
    *      swctx.addHole(hole);
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.addHole([{x:200, y:200}, {x:200, y:250}, {x:250, y:250}]);
    * @public
    * @param {Array.<XY>} polyline - array of "Point like" objects with {x,y}
    */
SweepContext.prototype.addHole = function (polyline) {
  this.initEdges(polyline);
  var i,len = polyline.length;
  for (i = 0; i < len; i++) {
    this.points_.push(polyline[i]);
  }
  return this; // for chaining
};

/**
    * For backward compatibility
    * @function
    * @deprecated use {@linkcode SweepContext#addHole} instead
    */
SweepContext.prototype.AddHole = SweepContext.prototype.addHole;


/**
                                                                  * Add several holes to the constraints
                                                                  * @example
                                                                  *      var swctx = new poly2tri.SweepContext(contour);
                                                                  *      var holes = [
                                                                  *          [ new poly2tri.Point(200, 200), new poly2tri.Point(200, 250), new poly2tri.Point(250, 250) ],
                                                                  *          [ new poly2tri.Point(300, 300), new poly2tri.Point(300, 350), new poly2tri.Point(350, 350) ]
                                                                  *      ];
                                                                  *      swctx.addHoles(holes);
                                                                  * @example
                                                                  *      var swctx = new poly2tri.SweepContext(contour);
                                                                  *      var holes = [
                                                                  *          [{x:200, y:200}, {x:200, y:250}, {x:250, y:250}],
                                                                  *          [{x:300, y:300}, {x:300, y:350}, {x:350, y:350}]
                                                                  *      ];
                                                                  *      swctx.addHoles(holes);
                                                                  * @public
                                                                  * @param {Array.<Array.<XY>>} holes - array of array of "Point like" objects with {x,y}
                                                                  */
// Method added in the JavaScript version (was not present in the c++ version)
SweepContext.prototype.addHoles = function (holes) {
  var i,len = holes.length;
  for (i = 0; i < len; i++) {
    this.initEdges(holes[i]);
  }
  this.points_ = this.points_.concat.apply(this.points_, holes);
  return this; // for chaining
};


/**
    * Add a Steiner point to the constraints
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      var point = new poly2tri.Point(150, 150);
    *      swctx.addPoint(point);
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.addPoint({x:150, y:150});
    * @public
    * @param {XY} point - any "Point like" object with {x,y}
    */
SweepContext.prototype.addPoint = function (point) {
  this.points_.push(point);
  return this; // for chaining
};

/**
    * For backward compatibility
    * @function
    * @deprecated use {@linkcode SweepContext#addPoint} instead
    */
SweepContext.prototype.AddPoint = SweepContext.prototype.addPoint;


/**
                                                                    * Add several Steiner points to the constraints
                                                                    * @example
                                                                    *      var swctx = new poly2tri.SweepContext(contour);
                                                                    *      var points = [
                                                                    *          new poly2tri.Point(150, 150),
                                                                    *          new poly2tri.Point(200, 250),
                                                                    *          new poly2tri.Point(250, 250)
                                                                    *      ];
                                                                    *      swctx.addPoints(points);
                                                                    * @example
                                                                    *      var swctx = new poly2tri.SweepContext(contour);
                                                                    *      swctx.addPoints([{x:150, y:150}, {x:200, y:250}, {x:250, y:250}]);
                                                                    * @public
                                                                    * @param {Array.<XY>} points - array of "Point like" object with {x,y}
                                                                    */
// Method added in the JavaScript version (was not present in the c++ version)
SweepContext.prototype.addPoints = function (points) {
  this.points_ = this.points_.concat(points);
  return this; // for chaining
};


/**
    * Triangulate the polygon with holes and Steiner points.
    * Do this AFTER you've added the polyline, holes, and Steiner points
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.triangulate();
    *      var triangles = swctx.getTriangles();
    * @public
    */
// Shortcut method for sweep.triangulate(SweepContext).
// Method added in the JavaScript version (was not present in the c++ version)
SweepContext.prototype.triangulate = function () {
  sweep.triangulate(this);
  return this; // for chaining
};


/**
    * Get the bounding box of the provided constraints (contour, holes and 
    * Steinter points). Warning : these values are not available if the triangulation 
    * has not been done yet.
    * @public
    * @returns {{min:Point,max:Point}} object with 'min' and 'max' Point
    */
// Method added in the JavaScript version (was not present in the c++ version)
SweepContext.prototype.getBoundingBox = function () {
  return { min: this.pmin_, max: this.pmax_ };
};

/**
    * Get result of triangulation.
    * The output triangles have vertices which are references
    * to the initial input points (not copies): any custom fields in the
    * initial points can be retrieved in the output triangles.
    * @example
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.triangulate();
    *      var triangles = swctx.getTriangles();
    * @example
    *      var contour = [{x:100, y:100, id:1}, {x:100, y:300, id:2}, {x:300, y:300, id:3}];
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.triangulate();
    *      var triangles = swctx.getTriangles();
    *      typeof triangles[0].getPoint(0).id
    *      // → "number"
    * @public
    * @returns {array<Triangle>}   array of triangles
    */
SweepContext.prototype.getTriangles = function () {
  return this.triangles_;
};

/**
    * For backward compatibility
    * @function
    * @deprecated use {@linkcode SweepContext#getTriangles} instead
    */
SweepContext.prototype.GetTriangles = SweepContext.prototype.getTriangles;


// ---------------------------------------------------SweepContext (private API)

/** @private */
SweepContext.prototype.front = function () {
  return this.front_;
};

/** @private */
SweepContext.prototype.pointCount = function () {
  return this.points_.length;
};

/** @private */
SweepContext.prototype.head = function () {
  return this.head_;
};

/** @private */
SweepContext.prototype.setHead = function (p1) {
  this.head_ = p1;
};

/** @private */
SweepContext.prototype.tail = function () {
  return this.tail_;
};

/** @private */
SweepContext.prototype.setTail = function (p1) {
  this.tail_ = p1;
};

/** @private */
SweepContext.prototype.getMap = function () {
  return this.map_;
};

/** @private */
SweepContext.prototype.initTriangulation = function () {
  var xmax = this.points_[0].x;
  var xmin = this.points_[0].x;
  var ymax = this.points_[0].y;
  var ymin = this.points_[0].y;

  // Calculate bounds
  var i,len = this.points_.length;
  for (i = 1; i < len; i++) {
    var p = this.points_[i];
    /* jshint expr:true */
    p.x > xmax && (xmax = p.x);
    p.x < xmin && (xmin = p.x);
    p.y > ymax && (ymax = p.y);
    p.y < ymin && (ymin = p.y);
  }
  this.pmin_ = new Point(xmin, ymin);
  this.pmax_ = new Point(xmax, ymax);

  var dx = kAlpha * (xmax - xmin);
  var dy = kAlpha * (ymax - ymin);
  this.head_ = new Point(xmax + dx, ymin - dy);
  this.tail_ = new Point(xmin - dx, ymin - dy);

  // Sort points along y-axis
  this.points_.sort(Point.compare);
};

/** @private */
SweepContext.prototype.initEdges = function (polyline) {
  var i,len = polyline.length;
  for (i = 0; i < len; ++i) {
    this.edge_list.push(new Edge(polyline[i], polyline[(i + 1) % len]));
  }
};

/** @private */
SweepContext.prototype.getPoint = function (index) {
  return this.points_[index];
};

/** @private */
SweepContext.prototype.addToMap = function (triangle) {
  this.map_.push(triangle);
};

/** @private */
SweepContext.prototype.locateNode = function (point) {
  return this.front_.locateNode(point.x);
};

/** @private */
SweepContext.prototype.createAdvancingFront = function () {
  var head;
  var middle;
  var tail;
  // Initial triangle
  var triangle = new Triangle(this.points_[0], this.tail_, this.head_);

  this.map_.push(triangle);

  head = new Node(triangle.getPoint(1), triangle);
  middle = new Node(triangle.getPoint(0), triangle);
  tail = new Node(triangle.getPoint(2));

  this.front_ = new AdvancingFront(head, tail);

  head.next = middle;
  middle.next = tail;
  middle.prev = head;
  tail.prev = middle;
};

/** @private */
SweepContext.prototype.removeNode = function (node) {
  // do nothing
  /* jshint unused:false */
};

/** @private */
SweepContext.prototype.mapTriangleToNodes = function (t) {
  for (var i = 0; i < 3; ++i) {
    if (!t.getNeighbor(i)) {
      var n = this.front_.locatePoint(t.pointCW(t.getPoint(i)));
      if (n) {
        n.triangle = t;
      }
    }
  }
};

/** @private */
SweepContext.prototype.removeFromMap = function (triangle) {
  var i,map = this.map_,len = map.length;
  for (i = 0; i < len; i++) {
    if (map[i] === triangle) {
      map.splice(i, 1);
      break;
    }
  }
};

/**
    * Do a depth first traversal to collect triangles
    * @private
    * @param {Triangle} triangle start
    */
SweepContext.prototype.meshClean = function (triangle) {
  // New implementation avoids recursive calls and use a loop instead.
  // Cf. issues # 57, 65 and 69.
  var triangles = [triangle],t,i;
  /* jshint boss:true */
  while (t = triangles.pop()) {
    if (!t.isInterior()) {
      t.setInterior(true);
      this.triangles_.push(t);
      for (i = 0; i < 3; i++) {
        if (!t.constrained_edge[i]) {
          triangles.push(t.getNeighbor(i));
        }
      }
    }
  }
};

// ----------------------------------------------------------------------Exports

module.exports = SweepContext;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/triangle.js":
/*!*******************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/triangle.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 *
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */

/* jshint maxcomplexity:10 */




/*
               * Note
               * ====
               * the structure of this JavaScript version of poly2tri intentionally follows
               * as closely as possible the structure of the reference C++ version, to make it 
               * easier to keep the 2 versions in sync.
               */

var xy = __webpack_require__(/*! ./xy */ "./extensions/CompGeom/node_modules/poly2tri/src/xy.js");


// ---------------------------------------------------------------------Triangle
/**
 * Triangle class.<br>
 * Triangle-based data structures are known to have better performance than
 * quad-edge structures.
 * See: J. Shewchuk, "Triangle: Engineering a 2D Quality Mesh Generator and
 * Delaunay Triangulator", "Triangulations in CGAL"
 *
 * @constructor
 * @struct
 * @param {!XY} pa  point object with {x,y}
 * @param {!XY} pb  point object with {x,y}
 * @param {!XY} pc  point object with {x,y}
 */
var Triangle = function Triangle(a, b, c) {
  /**
                                            * Triangle points
                                            * @private
                                            * @type {Array.<XY>}
                                            */
  this.points_ = [a, b, c];

  /**
                             * Neighbor list
                             * @private
                             * @type {Array.<Triangle>}
                             */
  this.neighbors_ = [null, null, null];

  /**
                                         * Has this triangle been marked as an interior triangle?
                                         * @private
                                         * @type {boolean}
                                         */
  this.interior_ = false;

  /**
                           * Flags to determine if an edge is a Constrained edge
                           * @private
                           * @type {Array.<boolean>}
                           */
  this.constrained_edge = [false, false, false];

  /**
                                                  * Flags to determine if an edge is a Delauney edge
                                                  * @private
                                                  * @type {Array.<boolean>}
                                                  */
  this.delaunay_edge = [false, false, false];
};

var p2s = xy.toString;
/**
                        * For pretty printing ex. <code>"[(5;42)(10;20)(21;30)]"</code>.
                        * @public
                        * @return {string}
                        */
Triangle.prototype.toString = function () {
  return "[" + p2s(this.points_[0]) + p2s(this.points_[1]) + p2s(this.points_[2]) + "]";
};

/**
    * Get one vertice of the triangle.
    * The output triangles of a triangulation have vertices which are references
    * to the initial input points (not copies): any custom fields in the
    * initial points can be retrieved in the output triangles.
    * @example
    *      var contour = [{x:100, y:100, id:1}, {x:100, y:300, id:2}, {x:300, y:300, id:3}];
    *      var swctx = new poly2tri.SweepContext(contour);
    *      swctx.triangulate();
    *      var triangles = swctx.getTriangles();
    *      typeof triangles[0].getPoint(0).id
    *      // → "number"
    * @param {number} index - vertice index: 0, 1 or 2
    * @public
    * @returns {XY}
    */
Triangle.prototype.getPoint = function (index) {
  return this.points_[index];
};

/**
    * For backward compatibility
    * @function
    * @deprecated use {@linkcode Triangle#getPoint} instead
    */
Triangle.prototype.GetPoint = Triangle.prototype.getPoint;

/**
                                                            * Get all 3 vertices of the triangle as an array
                                                            * @public
                                                            * @return {Array.<XY>}
                                                            */
// Method added in the JavaScript version (was not present in the c++ version)
Triangle.prototype.getPoints = function () {
  return this.points_;
};

/**
    * @private
    * @param {number} index
    * @returns {?Triangle}
    */
Triangle.prototype.getNeighbor = function (index) {
  return this.neighbors_[index];
};

/**
    * Test if this Triangle contains the Point object given as parameter as one of its vertices.
    * Only point references are compared, not values.
    * @public
    * @param {XY} point - point object with {x,y}
    * @return {boolean} <code>True</code> if the Point object is of the Triangle's vertices,
    *         <code>false</code> otherwise.
    */
Triangle.prototype.containsPoint = function (point) {
  var points = this.points_;
  // Here we are comparing point references, not values
  return point === points[0] || point === points[1] || point === points[2];
};

/**
    * Test if this Triangle contains the Edge object given as parameter as its
    * bounding edges. Only point references are compared, not values.
    * @private
    * @param {Edge} edge
    * @return {boolean} <code>True</code> if the Edge object is of the Triangle's bounding
    *         edges, <code>false</code> otherwise.
    */
Triangle.prototype.containsEdge = function (edge) {
  return this.containsPoint(edge.p) && this.containsPoint(edge.q);
};

/**
    * Test if this Triangle contains the two Point objects given as parameters among its vertices.
    * Only point references are compared, not values.
    * @param {XY} p1 - point object with {x,y}
    * @param {XY} p2 - point object with {x,y}
    * @return {boolean}
    */
Triangle.prototype.containsPoints = function (p1, p2) {
  return this.containsPoint(p1) && this.containsPoint(p2);
};

/**
    * Has this triangle been marked as an interior triangle?
    * @returns {boolean}
    */
Triangle.prototype.isInterior = function () {
  return this.interior_;
};

/**
    * Mark this triangle as an interior triangle
    * @private
    * @param {boolean} interior
    * @returns {Triangle} this
    */
Triangle.prototype.setInterior = function (interior) {
  this.interior_ = interior;
  return this;
};

/**
    * Update neighbor pointers.
    * @private
    * @param {XY} p1 - point object with {x,y}
    * @param {XY} p2 - point object with {x,y}
    * @param {Triangle} t Triangle object.
    * @throws {Error} if can't find objects
    */
Triangle.prototype.markNeighborPointers = function (p1, p2, t) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (p1 === points[2] && p2 === points[1] || p1 === points[1] && p2 === points[2]) {
    this.neighbors_[0] = t;
  } else if (p1 === points[0] && p2 === points[2] || p1 === points[2] && p2 === points[0]) {
    this.neighbors_[1] = t;
  } else if (p1 === points[0] && p2 === points[1] || p1 === points[1] && p2 === points[0]) {
    this.neighbors_[2] = t;
  } else {
    throw new Error('poly2tri Invalid Triangle.markNeighborPointers() call');
  }
};

/**
    * Exhaustive search to update neighbor pointers
    * @private
    * @param {!Triangle} t
    */
Triangle.prototype.markNeighbor = function (t) {
  var points = this.points_;
  if (t.containsPoints(points[1], points[2])) {
    this.neighbors_[0] = t;
    t.markNeighborPointers(points[1], points[2], this);
  } else if (t.containsPoints(points[0], points[2])) {
    this.neighbors_[1] = t;
    t.markNeighborPointers(points[0], points[2], this);
  } else if (t.containsPoints(points[0], points[1])) {
    this.neighbors_[2] = t;
    t.markNeighborPointers(points[0], points[1], this);
  }
};


Triangle.prototype.clearNeighbors = function () {
  this.neighbors_[0] = null;
  this.neighbors_[1] = null;
  this.neighbors_[2] = null;
};

Triangle.prototype.clearDelaunayEdges = function () {
  this.delaunay_edge[0] = false;
  this.delaunay_edge[1] = false;
  this.delaunay_edge[2] = false;
};

/**
    * Returns the point clockwise to the given point.
    * @private
    * @param {XY} p - point object with {x,y}
    */
Triangle.prototype.pointCW = function (p) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (p === points[0]) {
    return points[2];
  } else if (p === points[1]) {
    return points[0];
  } else if (p === points[2]) {
    return points[1];
  } else {
    return null;
  }
};

/**
    * Returns the point counter-clockwise to the given point.
    * @private
    * @param {XY} p - point object with {x,y}
    */
Triangle.prototype.pointCCW = function (p) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (p === points[0]) {
    return points[1];
  } else if (p === points[1]) {
    return points[2];
  } else if (p === points[2]) {
    return points[0];
  } else {
    return null;
  }
};

/**
    * Returns the neighbor clockwise to given point.
    * @private
    * @param {XY} p - point object with {x,y}
    */
Triangle.prototype.neighborCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.neighbors_[1];
  } else if (p === this.points_[1]) {
    return this.neighbors_[2];
  } else {
    return this.neighbors_[0];
  }
};

/**
    * Returns the neighbor counter-clockwise to given point.
    * @private
    * @param {XY} p - point object with {x,y}
    */
Triangle.prototype.neighborCCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.neighbors_[2];
  } else if (p === this.points_[1]) {
    return this.neighbors_[0];
  } else {
    return this.neighbors_[1];
  }
};

Triangle.prototype.getConstrainedEdgeCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.constrained_edge[1];
  } else if (p === this.points_[1]) {
    return this.constrained_edge[2];
  } else {
    return this.constrained_edge[0];
  }
};

Triangle.prototype.getConstrainedEdgeCCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.constrained_edge[2];
  } else if (p === this.points_[1]) {
    return this.constrained_edge[0];
  } else {
    return this.constrained_edge[1];
  }
};

// Additional check from Java version (see issue #88)
Triangle.prototype.getConstrainedEdgeAcross = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.constrained_edge[0];
  } else if (p === this.points_[1]) {
    return this.constrained_edge[1];
  } else {
    return this.constrained_edge[2];
  }
};

Triangle.prototype.setConstrainedEdgeCW = function (p, ce) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    this.constrained_edge[1] = ce;
  } else if (p === this.points_[1]) {
    this.constrained_edge[2] = ce;
  } else {
    this.constrained_edge[0] = ce;
  }
};

Triangle.prototype.setConstrainedEdgeCCW = function (p, ce) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    this.constrained_edge[2] = ce;
  } else if (p === this.points_[1]) {
    this.constrained_edge[0] = ce;
  } else {
    this.constrained_edge[1] = ce;
  }
};

Triangle.prototype.getDelaunayEdgeCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.delaunay_edge[1];
  } else if (p === this.points_[1]) {
    return this.delaunay_edge[2];
  } else {
    return this.delaunay_edge[0];
  }
};

Triangle.prototype.getDelaunayEdgeCCW = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.delaunay_edge[2];
  } else if (p === this.points_[1]) {
    return this.delaunay_edge[0];
  } else {
    return this.delaunay_edge[1];
  }
};

Triangle.prototype.setDelaunayEdgeCW = function (p, e) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    this.delaunay_edge[1] = e;
  } else if (p === this.points_[1]) {
    this.delaunay_edge[2] = e;
  } else {
    this.delaunay_edge[0] = e;
  }
};

Triangle.prototype.setDelaunayEdgeCCW = function (p, e) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    this.delaunay_edge[2] = e;
  } else if (p === this.points_[1]) {
    this.delaunay_edge[0] = e;
  } else {
    this.delaunay_edge[1] = e;
  }
};

/**
    * The neighbor across to given point.
    * @private
    * @param {XY} p - point object with {x,y}
    * @returns {Triangle}
    */
Triangle.prototype.neighborAcross = function (p) {
  // Here we are comparing point references, not values
  if (p === this.points_[0]) {
    return this.neighbors_[0];
  } else if (p === this.points_[1]) {
    return this.neighbors_[1];
  } else {
    return this.neighbors_[2];
  }
};

/**
    * @private
    * @param {!Triangle} t Triangle object.
    * @param {XY} p - point object with {x,y}
    */
Triangle.prototype.oppositePoint = function (t, p) {
  var cw = t.pointCW(p);
  return this.pointCW(cw);
};

/**
    * Legalize triangle by rotating clockwise around oPoint
    * @private
    * @param {XY} opoint - point object with {x,y}
    * @param {XY} npoint - point object with {x,y}
    * @throws {Error} if oPoint can not be found
    */
Triangle.prototype.legalize = function (opoint, npoint) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (opoint === points[0]) {
    points[1] = points[0];
    points[0] = points[2];
    points[2] = npoint;
  } else if (opoint === points[1]) {
    points[2] = points[1];
    points[1] = points[0];
    points[0] = npoint;
  } else if (opoint === points[2]) {
    points[0] = points[2];
    points[2] = points[1];
    points[1] = npoint;
  } else {
    throw new Error('poly2tri Invalid Triangle.legalize() call');
  }
};

/**
    * Returns the index of a point in the triangle. 
    * The point *must* be a reference to one of the triangle's vertices.
    * @private
    * @param {XY} p - point object with {x,y}
    * @returns {number} index 0, 1 or 2
    * @throws {Error} if p can not be found
    */
Triangle.prototype.index = function (p) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (p === points[0]) {
    return 0;
  } else if (p === points[1]) {
    return 1;
  } else if (p === points[2]) {
    return 2;
  } else {
    throw new Error('poly2tri Invalid Triangle.index() call');
  }
};

/**
    * @private
    * @param {XY} p1 - point object with {x,y}
    * @param {XY} p2 - point object with {x,y}
    * @return {number} index 0, 1 or 2, or -1 if errror
    */
Triangle.prototype.edgeIndex = function (p1, p2) {
  var points = this.points_;
  // Here we are comparing point references, not values
  if (p1 === points[0]) {
    if (p2 === points[1]) {
      return 2;
    } else if (p2 === points[2]) {
      return 1;
    }
  } else if (p1 === points[1]) {
    if (p2 === points[2]) {
      return 0;
    } else if (p2 === points[0]) {
      return 2;
    }
  } else if (p1 === points[2]) {
    if (p2 === points[0]) {
      return 1;
    } else if (p2 === points[1]) {
      return 0;
    }
  }
  return -1;
};

/**
    * Mark an edge of this triangle as constrained.
    * @private
    * @param {number} index - edge index
    */
Triangle.prototype.markConstrainedEdgeByIndex = function (index) {
  this.constrained_edge[index] = true;
};
/**
    * Mark an edge of this triangle as constrained.
    * @private
    * @param {Edge} edge instance
    */
Triangle.prototype.markConstrainedEdgeByEdge = function (edge) {
  this.markConstrainedEdgeByPoints(edge.p, edge.q);
};
/**
    * Mark an edge of this triangle as constrained.
    * This method takes two Point instances defining the edge of the triangle.
    * @private
    * @param {XY} p - point object with {x,y}
    * @param {XY} q - point object with {x,y}
    */
Triangle.prototype.markConstrainedEdgeByPoints = function (p, q) {
  var points = this.points_;
  // Here we are comparing point references, not values        
  if (q === points[0] && p === points[1] || q === points[1] && p === points[0]) {
    this.constrained_edge[2] = true;
  } else if (q === points[0] && p === points[2] || q === points[2] && p === points[0]) {
    this.constrained_edge[1] = true;
  } else if (q === points[1] && p === points[2] || q === points[2] && p === points[1]) {
    this.constrained_edge[0] = true;
  }
};


// ---------------------------------------------------------Exports (public API)

module.exports = Triangle;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/utils.js":
/*!****************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */



/**
               * Precision to detect repeated or collinear points
               * @private
               * @const {number}
               * @default
               */
var EPSILON = 1e-12;
exports.EPSILON = EPSILON;

/**
                            * @private
                            * @enum {number}
                            * @readonly
                            */
var Orientation = {
  "CW": 1,
  "CCW": -1,
  "COLLINEAR": 0 };

exports.Orientation = Orientation;


/**
                                    * Formula to calculate signed area<br>
                                    * Positive if CCW<br>
                                    * Negative if CW<br>
                                    * 0 if collinear<br>
                                    * <pre>
                                    * A[P1,P2,P3]  =  (x1*y2 - y1*x2) + (x2*y3 - y2*x3) + (x3*y1 - y3*x1)
                                    *              =  (x1-x3)*(y2-y3) - (y1-y3)*(x2-x3)
                                    * </pre>
                                    *
                                    * @private
                                    * @param {!XY} pa  point object with {x,y}
                                    * @param {!XY} pb  point object with {x,y}
                                    * @param {!XY} pc  point object with {x,y}
                                    * @return {Orientation}
                                    */
function orient2d(pa, pb, pc) {
  var detleft = (pa.x - pc.x) * (pb.y - pc.y);
  var detright = (pa.y - pc.y) * (pb.x - pc.x);
  var val = detleft - detright;
  if (val > -EPSILON && val < EPSILON) {
    return Orientation.COLLINEAR;
  } else if (val > 0) {
    return Orientation.CCW;
  } else {
    return Orientation.CW;
  }
}
exports.orient2d = orient2d;


/**
                              *
                              * @private
                              * @param {!XY} pa  point object with {x,y}
                              * @param {!XY} pb  point object with {x,y}
                              * @param {!XY} pc  point object with {x,y}
                              * @param {!XY} pd  point object with {x,y}
                              * @return {boolean}
                              */
function inScanArea(pa, pb, pc, pd) {
  var oadb = (pa.x - pb.x) * (pd.y - pb.y) - (pd.x - pb.x) * (pa.y - pb.y);
  if (oadb >= -EPSILON) {
    return false;
  }

  var oadc = (pa.x - pc.x) * (pd.y - pc.y) - (pd.x - pc.x) * (pa.y - pc.y);
  if (oadc <= EPSILON) {
    return false;
  }
  return true;
}
exports.inScanArea = inScanArea;


/**
                                  * Check if the angle between (pa,pb) and (pa,pc) is obtuse i.e. (angle > π/2 || angle < -π/2)
                                  *
                                  * @private
                                  * @param {!XY} pa  point object with {x,y}
                                  * @param {!XY} pb  point object with {x,y}
                                  * @param {!XY} pc  point object with {x,y}
                                  * @return {boolean} true if angle is obtuse
                                  */
function isAngleObtuse(pa, pb, pc) {
  var ax = pb.x - pa.x;
  var ay = pb.y - pa.y;
  var bx = pc.x - pa.x;
  var by = pc.y - pa.y;
  return ax * bx + ay * by < 0;
}
exports.isAngleObtuse = isAngleObtuse;

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/src/xy.js":
/*!*************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/src/xy.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/*
 * Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
 * http://code.google.com/p/poly2tri/
 * 
 * poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
 * https://github.com/r3mi/poly2tri.js
 * 
 * All rights reserved.
 * 
 * Distributed under the 3-clause BSD License, see LICENSE.txt
 */



/**
               * The following functions operate on "Point" or any "Point like" object with {x,y},
               * as defined by the {@link XY} type
               * ([duck typing]{@link http://en.wikipedia.org/wiki/Duck_typing}).
               * @module
               * @private
               */

/**
                   * poly2tri.js supports using custom point class instead of {@linkcode Point}.
                   * Any "Point like" object with <code>{x, y}</code> attributes is supported
                   * to initialize the SweepContext polylines and points
                   * ([duck typing]{@link http://en.wikipedia.org/wiki/Duck_typing}).
                   *
                   * poly2tri.js might add extra fields to the point objects when computing the
                   * triangulation : they are prefixed with <code>_p2t_</code> to avoid collisions
                   * with fields in the custom class.
                   *
                   * @example
                   *      var contour = [{x:100, y:100}, {x:100, y:300}, {x:300, y:300}, {x:300, y:100}];
                   *      var swctx = new poly2tri.SweepContext(contour);
                   *
                   * @typedef {Object} XY
                   * @property {number} x - x coordinate
                   * @property {number} y - y coordinate
                   */


/**
                       * Point pretty printing : prints x and y coordinates.
                       * @example
                       *      xy.toStringBase({x:5, y:42})
                       *      // → "(5;42)"
                       * @protected
                       * @param {!XY} p - point object with {x,y}
                       * @returns {string} <code>"(x;y)"</code>
                       */
function toStringBase(p) {
  return "(" + p.x + ";" + p.y + ")";
}

/**
   * Point pretty printing. Delegates to the point's custom "toString()" method if exists,
   * else simply prints x and y coordinates.
   * @example
   *      xy.toString({x:5, y:42})
   *      // → "(5;42)"
   * @example
   *      xy.toString({x:5,y:42,toString:function() {return this.x+":"+this.y;}})
   *      // → "5:42"
   * @param {!XY} p - point object with {x,y}
   * @returns {string} <code>"(x;y)"</code>
   */
function toString(p) {
  // Try a custom toString first, and fallback to own implementation if none
  var s = p.toString();
  return s === '[object Object]' ? toStringBase(p) : s;
}


/**
   * Compare two points component-wise. Ordered by y axis first, then x axis.
   * @param {!XY} a - point object with {x,y}
   * @param {!XY} b - point object with {x,y}
   * @return {number} <code>&lt; 0</code> if <code>a &lt; b</code>,
   *         <code>&gt; 0</code> if <code>a &gt; b</code>, 
   *         <code>0</code> otherwise.
   */
function compare(a, b) {
  if (a.y === b.y) {
    return a.x - b.x;
  } else {
    return a.y - b.y;
  }
}

/**
   * Test two Point objects for equality.
   * @param {!XY} a - point object with {x,y}
   * @param {!XY} b - point object with {x,y}
   * @return {boolean} <code>True</code> if <code>a == b</code>, <code>false</code> otherwise.
   */
function equals(a, b) {
  return a.x === b.x && a.y === b.y;
}


module.exports = {
  toString: toString,
  toStringBase: toStringBase,
  compare: compare,
  equals: equals };

/***/ }),

/***/ "./extensions/CompGeom/path2d.js":
/*!***************************************!*\
  !*** ./extensions/CompGeom/path2d.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Path2D": () => (/* binding */ Path2D)
/* harmony export */ });
/* harmony import */ var clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipper-lib-fpoint */ "./extensions/CompGeom/node_modules/clipper-lib-fpoint/clipper.js");
/* harmony import */ var clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earcut */ "./extensions/CompGeom/node_modules/earcut/src/earcut.js");
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(earcut__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bezier */ "./extensions/CompGeom/bezier.js");




//Helper for converting complex HTML Canvas paths to simple polylines / polygons


var MOVETO = 0,
LINETO = 1,
ARC = 2,
ARCTO = 3,
QUADTO = 4,
CUBICTO = 5,
ELLIPSE = 6,
CLOSE = 7;


var _v2 = new THREE.Vector2();
var _tmpSize = new THREE.Vector2();
var _tmpBox = new THREE.Box2();

// Tmp objct for Ellipse Arcs. We need delayed initialization, 
// because Autodesk.Extensions.CompGeom might not be available yet at compile time.
var _tmpArc = null;
var getTmpArc = function getTmpArc() {
  _tmpArc = _tmpArc || new Autodesk.Extensions.CompGeom.EllipseArc();
  return _tmpArc;
};

function Path2D(precisionTolerance) {
  this.segTypes = [];
  this.segData = [];
  this.hasCurves = false;
  this.bbox = new THREE.Box2();
  this.precisionTolerance = precisionTolerance;
}

// Optional: Use custom tesselation params for bezier arcs. Undefined sets to default.
Path2D.prototype.setTessParams = function (tessParams) {
  this.tessParams = tessParams;
};

Path2D.prototype.isClosedPath = function () {
  return this.segTypes.length && this.segTypes[this.segTypes.length - 1] === CLOSE;
};

Path2D.prototype.isPoint = function () {
  return this.segTypes.length == 2 && this.segTypes[0] === MOVETO && this.segTypes[1] === LINETO &&
  this.segData[0] == this.segData[2] && this.segData[1] == this.segData[3];
};



Path2D.prototype.closePath = function () {
  if (this.isClosedPath())
  return;
  this.segTypes.push(CLOSE);
};


Path2D.prototype.moveTo = function (x, y) {
  this.segTypes.push(MOVETO);
  this.segData.push(x, y);

  this.bbox.expandByPoint(_v2.set(x, y));
};

Path2D.prototype.lineTo = function (x, y) {
  this.segTypes.push(LINETO);
  this.segData.push(x, y);

  this.bbox.expandByPoint(_v2.set(x, y));
};

Path2D.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
  this.hasCurves = true;
  this.segTypes.push(ARC);
  this.segData.push(x, y, radius, startAngle, endAngle, anticlockwise);

  this.bbox.expandByPoint(_v2.set(x, y)); //TODO: all corners
};

Path2D.prototype.arcTo = function (x1, y1, x2, y2, radius) {
  this.hasCurves = true;
  this.segTypes.push(ARCTO);
  this.segData.push(x1, y1, x2, y2, radius);

  this.bbox.expandByPoint(_v2.set(x1, y1));
  this.bbox.expandByPoint(_v2.set(x2, y2));
};

Path2D.prototype.quadraticCurveTo = function (cp1x, cp1y, x, y) {
  this.hasCurves = true;
  this.segTypes.push(QUADTO);
  this.segData.push(cp1x, cp1y, x, y);

  this.bbox.expandByPoint(_v2.set(cp1x, cp1y));
  this.bbox.expandByPoint(_v2.set(x, y));
};

Path2D.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
  this.hasCurves = true;
  this.segTypes.push(CUBICTO);
  this.segData.push(cp1x, cp1y, cp2x, cp2y, x, y);
  this.bbox.expandByPoint(_v2.set(cp1x, cp1y));
  this.bbox.expandByPoint(_v2.set(cp2x, cp2y));
  this.bbox.expandByPoint(_v2.set(x, y));
};

// for params, see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
Path2D.prototype.ellipse = function (cx, cy, rx, ry, rotation, startAngle, endAngle, ccw) {

  this.hasCurves = true;
  this.segTypes.push(ELLIPSE);
  this.segData.push(cx, cy, rx, ry, rotation, startAngle, endAngle, ccw);

  // consider arc in bbox
  var arcBox = getTmpArc().set(cx, cy, rx, ry, rotation, startAngle, endAngle, ccw).computeBBox(_tmpBox);
  this.bbox.union(arcBox);
};

Path2D.prototype.flatten = function (forceCloseContours) {

  var ret = new Path2D(this.precisionTolerance);

  var dataOffset = 0;
  var lastX = 0;
  var lastY = 0;
  var contourStartX = lastX;
  var contourStartY = lastY;

  var segTypes = this.segTypes;
  var segData = this.segData;

  var sz = this.bbox.getSize(_tmpSize).length();

  for (var i = 0; i < segTypes.length; i++) {

    var st = segTypes[i];

    switch (st) {

      case MOVETO:{
          if (forceCloseContours) {
            if (lastX !== contourStartX || lastY !== contourStartY) {
              ret.closePath();
            }
          }

          lastX = segData[dataOffset++];
          lastY = segData[dataOffset++];
          contourStartX = lastX;
          contourStartY = lastY;
          ret.moveTo(lastX, lastY);
        }
        break;
      case CLOSE:
        ret.closePath();
        break;
      case LINETO:{
          var x = segData[dataOffset++];
          var y = segData[dataOffset++];

          if (x !== lastX || y !== lastY) {
            ret.lineTo(x, y);

            lastX = x;
            lastY = y;
          }
        }
        break;
      case QUADTO:{
          var cp1x = segData[dataOffset++],cp1y = segData[dataOffset++],
          _x = segData[dataOffset++],_y = segData[dataOffset++];
          (0,_bezier__WEBPACK_IMPORTED_MODULE_2__.TesselateQuad)(ret, lastX, lastY, cp1x, cp1y, _x, _y, sz, this.tessParams, !!this.isFontChar);

          lastX = _x;
          lastY = _y;
        }
        break;
      case CUBICTO:{
          var _cp1x = segData[dataOffset++],_cp1y = segData[dataOffset++],
          cp2x = segData[dataOffset++],cp2y = segData[dataOffset++],
          _x2 = segData[dataOffset++],_y2 = segData[dataOffset++];
          (0,_bezier__WEBPACK_IMPORTED_MODULE_2__.TesselateCubic)(ret, lastX, lastY, _cp1x, _cp1y, cp2x, cp2y, _x2, _y2, sz, this.tessParams, !!this.isFontChar);
          lastX = _x2;
          lastY = _y2;
        }
        break;
      case ARC:
        console.warn("not implemented: arc");
        dataOffset += 6;
        break;
      case ARCTO:
        console.warn("not implemented: arcto");
        dataOffset += 4;
        break;
      case ELLIPSE:{
          // read ellipse params
          var cx = segData[dataOffset++];
          var cy = segData[dataOffset++];
          var rx = segData[dataOffset++];
          var ry = segData[dataOffset++];
          var rotation = segData[dataOffset++];
          var startAngle = segData[dataOffset++];
          var endAngle = segData[dataOffset++];
          var ccw = segData[dataOffset++];

          // determine tesselation params
          var tessParams = this.tessParams || _bezier__WEBPACK_IMPORTED_MODULE_2__.DefaultTessParams;
          var maxSegments = tessParams.numIterations;
          var minSegmentLength = tessParams.minSegLenFraction * sz;

          // tesselate arc
          var arc = getTmpArc().set(cx, cy, rx, ry, rotation, startAngle, endAngle, ccw);
          arc.tesselate(ret, maxSegments, minSegmentLength);

          // Update lastX/lastY
          // The last lineTo() appends x and y of the end position to ret.segData. 
          // So, we can always extract it from there.
          lastX = ret.segData[ret.segData.length - 2];
          lastY = ret.segData[ret.segData.length - 1];
        }
        break;}

  }

  if (forceCloseContours) {
    if (lastX !== contourStartX || lastY !== contourStartY) {
      ret.closePath();
    }
  }

  return ret;
};

Path2D.prototype.applyTransform = function (loader, xform) {

  for (var i = 0; i < this.segData.length; i += 2) {

    var x = this.segData[i];
    var y = this.segData[i + 1];

    this.segData[i] = loader.tx(x, y, xform);
    this.segData[i + 1] = loader.ty(x, y, xform);
  }
};

Path2D.prototype.stroke = function (loader, lineWidth, color, dbId, layerId, clipPathIn, applyTransform, lineStyle) {var _this = this;
  var needClipping = clipPathIn != null;
  var subjFlatted = this;
  if (applyTransform || this.hasCurves) {
    subjFlatted = this.flatten(false);
  }

  var self = this;
  // check whether we can do simple path
  if (needClipping) {
    var subPaths = [];
    var subPath;
    var segIndex = 0;
    for (var i = 0; i < subjFlatted.segTypes.length; i++) {
      if (subjFlatted.segTypes[i] == MOVETO) {
        subPath = new Path2D(this.precisionTolerance);
        subPaths.push(subPath);
        subPath.moveTo(subjFlatted.segData[segIndex++], subjFlatted.segData[segIndex++]);
      } else if (subjFlatted.segTypes[i] == LINETO) {var _subPath;
        (_subPath = subPath) === null || _subPath === void 0 ? void 0 : _subPath.lineTo(subjFlatted.segData[segIndex++], subjFlatted.segData[segIndex++]);
      } else if (subjFlatted.segTypes[i] == CLOSE) {var _subPath2;
        (_subPath2 = subPath) === null || _subPath2 === void 0 ? void 0 : _subPath2.closePath();
      }
    }

    // workaround for endless loop in ClipperLib.Clipper.AddPath()
    // Some input paths with start==end that are marked as open will run into an endless loop when setting up internal data structures.
    // This is a known issue without a fix. The workaround will simply make the end points non-identical.
    var fixClosedLoops = function fixClosedLoops(path) {
      // is it a closed loop?
      if (path.length < 2 || path[0].X !== path[path.length - 1].X || path[0].Y !== path[path.length - 1].Y) {
        return;
      }

      // slightly manipulate Y to make Clipper not see identical Y values but also have no visible impact
      // x*2^-32 is outside float range (float has only 23 significant bits)
      path[0].Y += path[0].Y * Math.pow(2, -32);
    };

    var clipFlatted = clipPathIn.flattened || clipPathIn.flatten(true);
    var clips = clipFlatted.toClipperPath(loader, false);
    subPaths.map(function (subPath) {
      // still need to do a check for each subPath
      var subPreResult = self.preCheckForClipping(loader, clipFlatted, subPath, applyTransform, true);
      if (subPreResult.needCancel) {
        return;
      } else if (subPreResult.needClipping && !subPath.isPoint()) {// points (i.e., lines of length 0) are not handled well by Clipper -> check separately
        var myPath = subPath.toClipperPath(loader, applyTransform)[0];
        if (!myPath) {
          return;
        }

        if (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper.Orientation(myPath)) {
          // LMV-5983
          // turn closed paths to clockwise orientation
          // to workaround a problem where anticlockwise self-intersecting paths ended up with
          // a different order of vertices after clipping
          myPath.reverse();
        }

        var solution = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyTree)();
        var cpr = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper)();
        // always treat myPath as open in order to get correct stroke clipping. Prevent endless loop in AddPath.
        fixClosedLoops(myPath);
        cpr.AddPath(myPath, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptSubject), false);
        cpr.AddPaths(clips, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptClip), true);

        cpr.Execute((clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().ClipType.ctIntersection), solution, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd), (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd));
        strokeClipperSolution(solution);
      } else if (!subPreResult.needClipping ||
      clips.length == 1 && clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper.PointInPolygon({ X: subPath.segData[0], Y: subPath.segData[1] }, clips[0])) // if needClipping is true, subPath must be a point. So check if it's inside the clip polygon.
        {
          _this.strokeFlattedPath(loader, subPath, lineWidth, color, dbId, layerId, applyTransform, lineStyle);
        }
    });
  } else {
    // just draw all the segments
    this.strokeFlattedPath(loader, subjFlatted, lineWidth, color, dbId, layerId, applyTransform, lineStyle);
  }

  function strokeClipperSolution(solution) {
    var node = solution.GetFirst();
    while (node) {
      self.strokeClipperContour(loader, node.Contour(), node.IsOpen, color, lineWidth, dbId, layerId, loader.currentVpId, lineStyle, false);
      node = node.GetNext();
    }
  }
};

Path2D.prototype.strokeFlattedPath = function (loader, flatted, lineWidth, color, dbId, layerId, applyTransform, lineStyle) {
  var segData = flatted.segData;
  var segTypes = flatted.segTypes;

  var xform;
  if (applyTransform) {
    xform = loader.getCurrentTransform();
  }

  var dataOffset = 0;
  var lastX = 0;
  var lastY = 0;
  var contourStartX = 0;
  var contourStartY = 0;

  for (var i = 0; i < segTypes.length; i++) {

    var st = segTypes[i];

    switch (st) {

      case MOVETO:{
          var tmpx = segData[dataOffset++];
          var tmpy = segData[dataOffset++];

          if (applyTransform) {
            contourStartX = loader.tx(tmpx, tmpy, xform);
            contourStartY = loader.ty(tmpx, tmpy, xform);
          } else {
            contourStartX = tmpx;
            contourStartY = tmpy;
          }

          lastX = contourStartX;
          lastY = contourStartY;
        }
        break;
      case CLOSE:
      case LINETO:{
          var x = void 0,y = void 0;
          if (st === CLOSE) {
            x = contourStartX;
            y = contourStartY;
          } else {
            var _tmpx = segData[dataOffset++];
            var _tmpy = segData[dataOffset++];

            if (applyTransform) {
              x = loader.tx(_tmpx, _tmpy, xform);
              y = loader.ty(_tmpx, _tmpy, xform);
            } else {
              x = _tmpx;
              y = _tmpy;
            }
          }

          // LMV-5336 - Paths that contain a moveTo and a lineTo at the same X, Y positions were not being drawn.
          // Add the segment when the previous operation was moveTo.
          var isPrevMoveTo = i > 0 && segTypes[i - 1] === MOVETO;
          if (x !== lastX || y !== lastY || isPrevMoveTo) {

            //Use centerpoint for the initial inside check for better numeric stability,
            //in case the start point is exactly on the clip polygon's edge, in which case the inside
            //check would return a random result

            //Segment is either completely inside or completely outside (does not intersect the clip path at all)
            loader.flushBuffer(4);

            loader.currentVbb.addSegment(lastX, lastY, x, y,
            /*totalDistance*/0, lineWidth, color, dbId, layerId, loader.currentVpId || 0, lineStyle);


            lastX = x;
            lastY = y;
          }
        }
        break;
      default:{
          console.error("Path must be flattened before rendering");
        }}

  }
};

Path2D.prototype.strokeClipperContour = function (loader, contour, isOpen, color, lineWidth, dbId, layerId, vpId, lineStyle, applyTransform) {
  var l = contour.length;
  var lastIndex = isOpen ? 0 : l - 1;
  var startIndex = isOpen ? 1 : 0;
  var xform;
  if (applyTransform) {
    xform = loader.getCurrentTransform();
  }
  var lastx = applyTransform ? loader.tx(contour[lastIndex].X, contour[lastIndex].Y, xform) : contour[lastIndex].X;
  var lasty = applyTransform ? loader.ty(contour[lastIndex].X, contour[lastIndex].Y, xform) : contour[lastIndex].Y;
  for (var i = startIndex; i < l; i++) {
    var x = applyTransform ? loader.tx(contour[i].X, contour[i].Y, xform) : contour[i].X;
    var y = applyTransform ? loader.ty(contour[i].X, contour[i].Y, xform) : contour[i].Y;

    loader.flushBuffer(4);
    loader.currentVbb.addSegment(lastx, lasty, x, y, 0, lineWidth, color, dbId, layerId, vpId, lineStyle);
    lastx = x, lasty = y;
  }
};

//Checks if the path is a simple AABB.
//Used to speed up polygon clipping operations.
Path2D.prototype.isAABB = function () {

  var EPS = 1e-10;
  var ANGLE_EPS = 1e-3;

  var st = this.segTypes;

  if (st.length !== 6 && st.length !== 5)
  return false;

  if (st[0] !== MOVETO)
  return false;

  if (st.length === 6 && st[5] !== CLOSE)
  return false;else
  if (st.length === 5 && st[4] !== CLOSE && st[4] !== LINETO)
  return false;

  for (var i = 1; i < st.length - 1; i++) {
    if (st[i] !== LINETO)
    return false;}


  var seg = this.segData;

  //check segments 1 and 3 for parallel and same length
  var dxA = seg[2] - seg[0];
  var dyA = seg[3] - seg[1];
  var dxC = seg[6] - seg[4];
  var dyC = seg[7] - seg[5];
  var lenA = Math.sqrt(dxA * dxA + dyA * dyA);
  var lenC = Math.sqrt(dxC * dxC + dyC * dyC);

  if (Math.abs(lenA - lenC) > EPS)
  return false;

  dxA /= lenA;dyA /= lenA;
  dxC /= lenC;dyC /= lenC;
  var dot = dxA * dxC + dyA * dyC;

  if (Math.abs(1 + dot) > ANGLE_EPS)
  return false;

  //check segments 2 and 4 for parallel and same length
  var dxB = seg[4] - seg[2];
  var dyB = seg[5] - seg[3];
  var dxD = seg[8] - seg[6];
  var dyD = seg[9] - seg[7];
  var lenB = Math.sqrt(dxB * dxB + dyB * dyB);
  var lenD = Math.sqrt(dxD * dxD + dyD * dyD);

  if (Math.abs(lenB - lenD) > EPS)
  return false;

  dxB /= lenB;dyB /= lenB;
  dxD /= lenD;dyD /= lenD;
  dot = dxB * dxD + dyB * dyD;

  if (Math.abs(1 + dot) > ANGLE_EPS)
  return false;

  //make sure there is a right angle
  dot = dxA * dxB + dyA * dyB;

  if (Math.abs(dot) > ANGLE_EPS)
  return false;

  //make sure segments are vertical/horizontal
  if (Math.abs(dxA) > EPS && Math.abs(dyA))
  return false;

  return true;
};

var INSIDE = 1;
var OUTSIDE = 2;
var UNKNOWN = 4;

function bboxOverlap(clipBox, pathBox, precisionTolerance) {

  if (clipBox.containsBox(pathBox))
  return INSIDE;

  //The above AABB containment check is exact
  //and sometimes misses cases where the bboxes are
  //almost exactly equal, with very slight numeric noise in the values
  //(which happens quite often with Revit PDFs)

  //So now do another check if our bbox contains the input bbox within a tolerance
  var EPS = precisionTolerance;

  if (EPS === undefined) {
    EPS = 1e-3 / clipBox.size().length();
  }

  if (pathBox.min.x - clipBox.max.x > EPS)
  return OUTSIDE;
  if (pathBox.min.y - clipBox.min.y > EPS)
  return OUTSIDE;

  if (pathBox.max.x - clipBox.max.x < -EPS)
  return OUTSIDE;
  if (pathBox.max.y - clipBox.max.y < -EPS)
  return OUTSIDE;

  if (pathBox.min.x - clipBox.min.x < -EPS)
  return UNKNOWN;
  if (pathBox.min.y - clipBox.min.y < -EPS)
  return UNKNOWN;

  if (pathBox.max.x - clipBox.max.x > EPS)
  return UNKNOWN;
  if (pathBox.max.y - clipBox.max.y > EPS)
  return UNKNOWN;

  return INSIDE;
}

Path2D.prototype.isAABBContain = function (bbox) {

  if (!this.isAABB())
  return UNKNOWN;

  return bboxOverlap(this.bbox, bbox, this.precisionTolerance);
};


Path2D.prototype.clip = function (clipPathIn, mode) {
  var clipFlatted = clipPathIn.flattened || clipPathIn.flatten(true);
  var subjFlatted = this.flattened || this.flatten(true);

  var preResult = this.preCheckForClipping(null, clipFlatted, subjFlatted, false, false);
  if (preResult.needCancel) {
    console.warn("No overlap between nested clip regions.");
    return new Path2D();
  } else if (preResult.needClipping == false) {
    if (preResult.needSwapSubject) {
      return clipPathIn;
    } else {
      return this;
    }
  } else {
    // do the clipping here
    var clips = clipFlatted.toClipperPath(null, false);
    var myPath = subjFlatted.toClipperPath(null, false);

    var solution = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyTree)();
    var cpr = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper)();
    cpr.AddPaths(myPath, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptSubject), true);
    cpr.AddPaths(clips, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptClip), true);

    cpr.Execute((clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().ClipType.ctIntersection), solution, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd), (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd));

    // need to rebuild a path from the solution, no need to do the tesselation
    var res = new Path2D(this.precisionTolerance);
    var node = solution.GetFirst();
    while (node) {
      var contour = node.Contour();
      for (var i = 0; i < contour.length; i++) {
        if (i == 0) {
          res.moveTo(contour[i].X, contour[i].Y);
        } else {
          res.lineTo(contour[i].X, contour[i].Y);
        }
      }

      if (contour[contour.length - 1].X != contour[0].X || contour[contour.length - 1].Y != contour[0].Y) {
        res.lineTo(contour[0].X, contour[0].Y);
      }
      node = node.GetNext();
    }
    return res;
  }
};

/**
    * If segments type is 0, 1, 0, 1 pattern, we should avoid to do fill to it
    * Most of the time, it wants to be line segments, but from 2D, you can always pass a fill/stroke command to it.
    * Eatch MoveTo should start with a segment.
    */
Path2D.prototype.isFillable = function () {
  //Skip some easily detectable degenerate polygons that result in no fill
  var p = this.flattened || this.flatten(true);
  if (p.segTypes.length < 3) {
    return false;
  } else if (p.segTypes.length === 3) {
    var isClosedLine = p.segTypes[2] === CLOSE && p.segTypes[1] === LINETO && p.segTypes[0] === MOVETO;
    return !isClosedLine;
  } else {
    var isFillable = false;

    for (var i = 0; i < p.segTypes.length; i += 2) {
      if (!(p.segTypes[i] == MOVETO && p.segTypes[i + 1] == LINETO)) {
        isFillable = true;
        break;
      }
    }
    return isFillable;
  }
};

Path2D.prototype.fill = function (loader, color, dbId, layerId, clipPathIn, applyTransform, isFillStrokeCombo) {
  if (!this.isFillable()) {
    return;
  }

  var subjFlatted = this.flattened || this.flatten(true);
  var self = this;

  function clipProcess() {
    var needClipping = clipPathIn != null;
    var needSwapSubject = false;
    // check weather we can do simple path
    if (needClipping) {
      var clipFlatted = clipPathIn.flattened || clipPathIn.flatten(true);

      var preResult = self.preCheckForClipping(loader, clipFlatted, subjFlatted, applyTransform, false);
      if (preResult.needCancel) {
        return;
      }

      needClipping = preResult.needClipping;
      needSwapSubject = preResult.needSwapSubject;
    }

    if (needClipping) {
      var _clipFlatted = clipPathIn.flattened || clipPathIn.flatten(true);
      var clips = _clipFlatted.toClipperPath(loader, false);
      var myPath = subjFlatted.toClipperPath(loader, applyTransform);

      var solution = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyTree)();
      var cpr = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper)();
      cpr.AddPaths(myPath, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptSubject), true);
      cpr.AddPaths(clips, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptClip), true);

      cpr.Execute((clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().ClipType.ctIntersection), solution, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd), (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd));

      var polygons = self.getPolygonFromClipperSolution(solution);
      return {
        polygons: polygons,
        appliedTransform: applyTransform,
        needClipping: needClipping };

    } else {
      // if we use clip path directly as subject, we can not cache it, and should not apply transform to it
      subjFlatted = !needSwapSubject ? subjFlatted : clipFlatted;
      if (self.cached) {
        return {
          polygons: self.cached,
          appliedTransform: false,
          needClipping: needClipping,
          subjFlatted: subjFlatted };

      } else {
        var _myPath = subjFlatted.toClipperPath(loader, false);

        var _solution = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyTree)();
        var _cpr = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper)();
        _cpr.AddPaths(_myPath, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptSubject), true);
        _cpr.Execute((clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().ClipType.ctUnion), _solution, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd), (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd));
        var _polygons = self.getPolygonFromClipperSolution(_solution);
        if (!needSwapSubject) {
          self.cached = _polygons;
        }
        return {
          polygons: _polygons,
          appliedTransform: needSwapSubject, // clipPath has already applied transform
          needClipping: needClipping,
          subjFlatted: subjFlatted };

      }
    }
  }

  function fillPolygon(polygon, needApplytransform, needClipping) {
    var vertices = polygon.vertices;

    if (needApplytransform) {
      var xform = loader.getCurrentTransform();
      var vertices1 = [];
      for (var i = 0; i < vertices.length; i += 2) {
        var x = loader.tx(vertices[i], vertices[i + 1], xform);
        var y = loader.ty(vertices[i], vertices[i + 1], xform);
        vertices1.push(x, y);
      }
      vertices = vertices1;
    }
    loader.addPolyTriangle(vertices, polygon.indices, color, dbId, layerId, false);

    // do the antialias stroke here
    if (!isFillStrokeCombo) {
      if (needClipping || !self.isFontChar) {
        for (var c in polygon.contours) {
          self.strokeClipperContour(loader, polygon.contours[c], true, color, -0.5, dbId, layerId, loader.currentVpId, 0, needApplytransform);
        }
      } else {
        // stroke the line with the original flatted path
        self.strokeFlattedPath(loader, result.subjFlatted, -0.5, color, dbId, layerId, needApplytransform, 0);
      }
    }
  }

  var result = clipProcess();
  if (result) {
    result.polygons.map(function (polygon) {
      var needApplytransform = applyTransform && !result.appliedTransform;
      fillPolygon(polygon, needApplytransform, result.needClipping);
    });
  }
};


Path2D.prototype.toClipperPath = function (loader, applyTransform) {
  var paths = [];
  var path = [];
  var segTypes = this.segTypes;
  var segData = this.segData;
  var segIndex = 0;
  var xform;
  if (applyTransform) {
    xform = loader.getCurrentTransform();
  }

  function addPoint(path, point) {
    if (applyTransform) {
      var x = loader.tx(point.X, point.Y, xform);
      var y = loader.ty(point.X, point.Y, xform);
      point.X = x;
      point.Y = y;
    }

    if (path.length > 0 && (path[path.length - 1].X != point.X || path[path.length - 1].Y != point.Y) || path.length == 0) {
      path.push(point);
    }
  }

  for (var i = 0; i < segTypes.length; i++) {
    if (segTypes[i] == MOVETO) {
      if (path && path.length > 1) {
        paths.push(path);
      }
      path = [];
      addPoint(path, { X: segData[segIndex++], Y: segData[segIndex++] });
    } else if (segTypes[i] == LINETO) {
      addPoint(path, { X: segData[segIndex++], Y: segData[segIndex++] });
    } else if (segTypes[i] == CLOSE) {
      path.push({ X: path[0].X, Y: path[0].Y });
      paths.push(path);
      path = [];
    }
  }

  if (path && path.length > 1) {
    paths.push(path);
  }

  return paths;
};

Path2D.prototype.hasIntersection = function (box1, box2, tolerance) {
  return !(box1.max.x - box2.min.x <= -tolerance || // left
  box1.max.y - box2.min.y <= -tolerance || // bottom
  box1.min.x - box2.max.x >= tolerance || // right
  box1.min.y - box2.max.y >= tolerance); // top
};

Path2D.prototype.preCheckForClipping = function (loader, clipFlatted, subjFlatted, applyTransform, strokeOnly) {
  var clipBound = clipFlatted.bbox;
  var subjBound = subjFlatted.bbox;

  if (applyTransform) {
    var xform = loader.getCurrentTransform();
    // we need to apply transform to the subject bounds
    subjBound = loader.transformBox(subjBound, xform, _tmpBox);
  }

  // do a simple check if two bounds has no overlap, set need cancel to true
  if (!this.hasIntersection(clipBound, subjBound, this.precisionTolerance)) {
    return {
      needCancel: true };

  } else if (clipFlatted.isAABB() && clipBound.containsBox(subjBound)) {
    return {
      needClipping: false };

  } else
  if (subjFlatted.isAABB() && subjBound.containsBox(clipBound)) {
    // there is nothing to stroke
    if (strokeOnly) {
      return {
        needCancel: true };

    } else {
      return {
        needClipping: false,
        needSwapSubject: true };

    }
  } else
  {
    return {
      needClipping: true };

  }
};

Path2D.prototype.getPolygonFromClipperSolution = function (solution) {
  function addContour(contours, vertices, contour) {
    for (var i = 0; i < contour.length; i++) {
      vertices.push(contour[i].X, contour[i].Y);
    }
    contours.push(contour);
  }

  var exPolygons = clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().JS.PolyTreeToExPolygons(solution);
  var polygons = exPolygons.map(function (item) {
    var vertices = [];
    var holeIndices = [];
    var contours = [];

    // clipper library has some defect when we use 4 thickline to construct a rectangle with border
    // It flipped the hole and outer
    // Add this logic to flip it back to the correct value
    if (item.holes.length == 1 && Math.abs(clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().JS.AreaOfPolygons(item.holes)) > Math.abs(clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().JS.AreaOfPolygon(item.outer))) {
      var temp = item.holes[0];
      item.holes[0] = item.outer;
      item.outer = temp;
    }
    addContour(contours, vertices, item.outer);

    item.holes.map(function (hole) {
      holeIndices.push(vertices.length / 2);
      addContour(contours, vertices, hole);
    });

    var indices = earcut__WEBPACK_IMPORTED_MODULE_1___default()(vertices, holeIndices);
    return {
      vertices: vertices,
      indices: indices,
      holeIndices: holeIndices,
      contours: contours };

  });

  return polygons;
};


Path2D.prototype.msdfClipping = function (clipFlatted) {
  var subjFlatted = this.flattened || this.flatten(true);
  var myPath = subjFlatted.toClipperPath(null, false);
  var clips = clipFlatted.toClipperPath(null, false);

  var solution = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyTree)();
  var cpr = new (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().Clipper)();
  cpr.AddPaths(myPath, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptSubject), true);
  cpr.AddPaths(clips, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyType.ptClip), true);

  cpr.Execute((clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().ClipType.ctIntersection), solution, (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd), (clipper_lib_fpoint__WEBPACK_IMPORTED_MODULE_0___default().PolyFillType.pftEvenOdd));

  return this.getPolygonFromClipperSolution(solution);
};

/***/ }),

/***/ "./extensions/CompGeom/point-list.js":
/*!*******************************************!*\
  !*** ./extensions/CompGeom/point-list.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniquePointList": () => (/* binding */ UniquePointList)
/* harmony export */ });
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");
/* harmony import */ var _quad_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad-tree */ "./extensions/CompGeom/quad-tree.js");
/* harmony import */ var _ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThirdParty/lmv_poly2tri */ "./extensions/CompGeom/ThirdParty/lmv_poly2tri.js");
/* harmony import */ var _ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}





var tmpVec3 = new _src_wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_3__.LmvVector3();
var UniquePointList = /*#__PURE__*/function () {

  function UniquePointList(bbox, precisionTolerance, VertexConstructor, useQuadTree) {_classCallCheck(this, UniquePointList);

    this.bbox = bbox;
    this.boxSize = this.bbox.getSize(tmpVec3).length();

    if (typeof precisionTolerance === "number") {
      //Input is in model units, e.g. if model is in feet,
      //precision tolerance has to be in feet
      this.precisionTolerance = precisionTolerance;
      this.scale = 1.0 / this.precisionTolerance;
    } else {
      this.precisionTolerance = _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL * this.boxSize;
      this.scale = 1.0 / this.precisionTolerance;
    }

    this.precisionToleranceSq = this.precisionTolerance * this.precisionTolerance;

    this.snapBaseX = this.bbox.min.x; ///- 0.5 * this.precisionTolerance;
    this.snapBaseY = this.bbox.min.y; //- 0.5 * this.precisionTolerance;


    this.pts = [];
    this.xymap = new Map();

    if (useQuadTree)
    this.quadTreeVerts = new _quad_tree__WEBPACK_IMPORTED_MODULE_1__.QuadTree(bbox.min.x, bbox.min.y, bbox.max.x, bbox.max.y, precisionTolerance);

    this.vertexConstructor = VertexConstructor;
  }_createClass(UniquePointList, [{ key: "findOrAddPoint", value: function findOrAddPoint(

    px, py, dbIds) {

      //Snap the vertex to our desired granularity
      var x = 0 | /*Math.round*/(px - this.snapBaseX) * this.scale;
      var y = 0 | /*Math.round*/(py - this.snapBaseY) * this.scale;

      //Find the nearest snapped vertex or create new
      var v;
      var minDist = Infinity;
      //Look in the 9 square area surrounding the vertex
      for (var i = x - 1; i <= x + 1; i++) {
        var mx = this.xymap.get(i);
        if (!mx)
        continue;

        for (var j = y - 1; j <= y + 1; j++) {
          var tmp = mx.get(j);
          if (!tmp)
          continue;

          var dist = (tmp.x - px) * (tmp.x - px) + (tmp.y - py) * (tmp.y - py);

          if (dist < minDist) {
            v = tmp;
            minDist = dist;
          }
        }
      }

      if (minDist > this.precisionToleranceSq)
      v = undefined;

      if (v === undefined) {
        var _mx = this.xymap.get(x);

        if (!_mx) {
          _mx = new Map();
          this.xymap.set(x, _mx);
        }

        v = this.vertexConstructor ? new this.vertexConstructor(px, py) : new (_ThirdParty_lmv_poly2tri__WEBPACK_IMPORTED_MODULE_2___default().Point)(px, py);
        _mx.set(y, v);
        v.id = this.pts.length;
        this.pts.push(v);

        if (this.quadTreeVerts)
        this.quadTreeVerts.addItem(v);
      }

      //Remember the source object that's adding this vertex
      if (typeof dbIds !== "undefined") {
        if (typeof dbIds === "number") {
          if (v.dbIds.indexOf(dbIds) === -1)
          v.dbIds.push(dbIds);
        } else if (dbIds) {
          for (var _i = 0; _i < dbIds.length; _i++) {
            var dbId = dbIds[_i];
            if (v.dbIds.indexOf(dbId) === -1)
            v.dbIds.push(dbId);
          }
        }
        v.dbIdsChanged = true;
      }

      return v;
    } }, { key: "forEach", value: function forEach(


    f) {
      this.pts.forEach(f);
    } }, { key: "delete", value: function _delete(

    v) {
      this.pts[v.id] = undefined;

      if (this.quadTreeVerts)
      this.quadTreeVerts.deleteItem(v);
    }

    //filters out null entries from the point list
  }, { key: "compact", value: function compact() {

      var pts = [];

      for (var i = 0, len = this.pts.length; i < len; i++) {
        var v = this.pts[i];
        if (!v)
        continue;

        v.oldid = v.id;
        v.id = pts.length;
        pts.push(v);
      }

      this.pts = pts;

    } }, { key: "enumInBox", value: function enumInBox(

    minx, miny, maxx, maxy, f) {
      this.quadTreeVerts.enumInBox(minx, miny, maxx, maxy, f);
    } }]);return UniquePointList;}();

/***/ }),

/***/ "./extensions/CompGeom/quad-tree.js":
/*!******************************************!*\
  !*** ./extensions/CompGeom/quad-tree.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuadTree": () => (/* binding */ QuadTree)
/* harmony export */ });
/* harmony import */ var _x_line_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x-line-box */ "./extensions/CompGeom/x-line-box.js");
/* harmony import */ var _x_box_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x-box-box */ "./extensions/CompGeom/x-box-box.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}


//Spatial index data structure for fast lookup of line segments or points.
//
// It can also be used for other kinds of items. For this, you can specify an itemHandler, which tells the quadtree 
// how to work with the items. It must provide two functions:
//
// itemHandler = {
//    // Check wheter the (bbox of) this item intersects with the given one
//    insersectsBox: function(item, xmin, ymin, xmax, ymax) {...},
// 
//    // Set 'outPoint' to a point on or close to the item, e.g. bbox center. outPoint is a {x, y} pair.
//    getPoint: function(item, outPoint) {...}
//  }



var ITEMS_PER_NODE = 16;
var EPS = 1e-20;

var logger;

var tmpPoint = { x: 0, y: 0 };

var QuadTree = /*#__PURE__*/function () {

  function QuadTree(minx, miny, maxx, maxy, extraDistance, itemHandler) {_classCallCheck(this, QuadTree);

    this.items = [];
    this.children = null;
    this.itemCount = 0;

    this.extraDistance = extraDistance;

    this.minx = minx;
    this.miny = miny;
    this.maxx = maxx;
    this.maxy = maxy;

    this.itemHandler = itemHandler;

    logger = Autodesk.Viewing.Private.logger;
  }_createClass(QuadTree, [{ key: "addItem", value: function addItem(


    e) {

      //TODO: must check if item fits inside our total bbox
      //before adding. In such case we may have to expand the
      //tree somehow

      this.itemCount++;

      if (this.children) {
        var overlapCount = 0;
        var whichChild = null;

        for (var i = 0; i < 4; i++) {
          if (this.children[i].intersectsItem(e)) {
            whichChild = this.children[i];
            overlapCount++;
          }
        }

        if (overlapCount === 1) {
          whichChild.addItem(e);
        } else if (overlapCount !== 0) {
          this.items.push(e);
        }

      } else {
        this.items.push(e);

        if (this.items.length > ITEMS_PER_NODE)
        this.subdivide();
      }

      return this.itemCount;
    } }, { key: "deleteItem", value: function deleteItem(

    e) {

      if (!this.intersectsItem(e))
      return 0;

      if (this.items) {
        var idx = this.items.indexOf(e);
        if (idx >= 0) {
          this.items.splice(idx, 1);
          this.itemCount--;
          return 1;
        }
      }

      if (this.children) {
        var deleteCount = 0;
        var remainingItemsCount = 0;
        for (var i = 0; i < 4; i++) {
          deleteCount += this.children[i].deleteItem(e);
          remainingItemsCount += this.children[i].itemCount;
        }

        if (remainingItemsCount < ITEMS_PER_NODE) {
          //TODO: un-split the node here
        }

        if (deleteCount === 1) {
          this.itemCount--;
          return 1;
        } else {
          logger.warn("Did not find item to delete. Something is wrong.", deleteCount);
          return 0;
        }
      }

      return 0;
    } }, { key: "intersectsBox", value: function intersectsBox(

    minx, miny, maxx, maxy) {

      var d = this.extraDistance;

      return (0,_x_box_box__WEBPACK_IMPORTED_MODULE_1__.xBoxBox)(minx, miny, maxx, maxy,
      this.minx - d, this.miny - d, this.maxx + d, this.maxy + d);
    } }, { key: "intersectsItem", value: function intersectsItem(

    e) {

      if (this.itemHandler) {
        return this.itemHandler.intersectsBox(e,
        this.minx - this.extraDistance, this.miny - this.extraDistance,
        this.maxx + this.extraDistance, this.maxy + this.extraDistance);

      } else if (e.v1) {
        //Edge
        return (0,_x_line_box__WEBPACK_IMPORTED_MODULE_0__.xLineBox)(e.v1.x, e.v1.y, e.v2.x, e.v2.y,
        this.minx - this.extraDistance, this.miny - this.extraDistance,
        this.maxx + this.extraDistance, this.maxy + this.extraDistance);
      } else {
        //Vertex
        return this.intersectsBox(e.x, e.y, e.x, e.y);
      }
    } }, { key: "findSplitPoint", value: function findSplitPoint()

    {
      //determine split location -- we split along the
      //midpoint of actual data inside the node
      var xs = [];
      var ys = [];

      if (this.itemHandler) {
        for (var i = 0; i < this.items.length; i++) {
          this.itemHandler.getPoint(this.items[i], tmpPoint);
          xs.push(tmpPoint.x);
          ys.push(tmpPoint.y);
        }
      } else if (this.items[0].v1) {
        for (var _i = 0; _i < this.items.length; _i++) {
          xs.push(this.items[_i].v1.x);
          ys.push(this.items[_i].v1.y);
        }
      } else {
        for (var _i2 = 0; _i2 < this.items.length; _i2++) {
          xs.push(this.items[_i2].x);
          ys.push(this.items[_i2].y);
        }
      }

      xs.sort(function (a, b) {return a - b;});
      ys.sort(function (a, b) {return a - b;});

      //Split slightly to the left of the median min point for all edge items
      var midx = xs[0 | (xs.length + 1) / 2] - this.extraDistance - EPS;
      var midy = ys[0 | (ys.length + 1) / 2] - this.extraDistance - EPS;

      if (midx <= this.minx || midx >= this.maxx || midy <= this.miny || midy >= this.maxy) {
        //logger.warn("Failed to split quad tree node. Something is wrong with the split choice.");
        return null;
      }

      return { midx: midx, midy: midy };
    } }, { key: "subdivide", value: function subdivide()


    {

      if (this.children) {
        logger.error("Attempt to subdivide already split node");
        return;
      }

      if (!this.items.length) {
        logger.error("Attempt to subdivide empty node");
        return;
      }

      var minx = this.minx;
      var miny = this.miny;
      var maxx = this.maxx;
      var maxy = this.maxy;

      //determine split location -- we split along the
      //midpoint of actual data inside the node
      var split = this.findSplitPoint();

      if (!split) {
        //logger.warn("Failed to split node");
        return;
      }var

      midx = split.midx,midy = split.midy;

      this.children = new Array(4);
      this.children[0] = new QuadTree(minx, miny, midx, midy, this.extraDistance, this.itemHandler);
      this.children[1] = new QuadTree(midx, miny, maxx, midy, this.extraDistance, this.itemHandler);
      this.children[2] = new QuadTree(midx, midy, maxx, maxy, this.extraDistance, this.itemHandler);
      this.children[3] = new QuadTree(minx, midy, midx, maxy, this.extraDistance, this.itemHandler);

      var keepItems = [];

      for (var i = 0, iEnd = this.items.length; i < iEnd; i++) {

        var overlapCount = 0;
        var whichChild = null;

        for (var j = 0; j < 4; j++) {
          if (this.children[j].intersectsItem(this.items[i])) {
            whichChild = this.children[j];
            overlapCount++;
          }
        }

        if (overlapCount === 0) {
          logger.error("Expected at least one overlap");
        } else if (overlapCount === 1) {
          whichChild.addItem(this.items[i]);
        } else {
          keepItems.push(this.items[i]);
        }
      }

      this.items = keepItems;
    } }, { key: "enumNearItems", value: function enumNearItems(

    e, cb) {

      if (!this.intersectsItem(e))
      return;

      if (this.items) {
        for (var i = 0; i < this.items.length; i++) {
          cb(this.items[i]);
        }
      }

      if (this.children) {
        for (var _i3 = 0; _i3 < 4; _i3++) {
          this.children[_i3].enumNearItems(e, cb);
        }
      }

    } }, { key: "enumInBox", value: function enumInBox(

    minx, miny, maxx, maxy, cb) {

      if (!this.intersectsBox(minx, miny, maxx, maxy))
      return;

      if (this.items) {
        for (var i = 0; i < this.items.length; i++) {
          var e = this.items[i];

          if (this.itemHandler) {
            if (this.itemHandler.intersectsBox(e, minx, miny, maxx, maxy)) {
              cb(e);
            }
          } else if (e.v1) {
            if ((0,_x_line_box__WEBPACK_IMPORTED_MODULE_0__.xLineBox)(e.v1.x, e.v1.y, e.v2.x, e.v2.y, minx, miny, maxx, maxy))
            cb(e);
          } else {
            if ((0,_x_box_box__WEBPACK_IMPORTED_MODULE_1__.xBoxBox)(e.x, e.y, e.x, e.y, minx, miny, maxx, maxy))
            cb(e);
          }
        }
      }

      if (this.children) {
        for (var _i4 = 0; _i4 < 4; _i4++) {
          this.children[_i4].enumInBox(minx, miny, maxx, maxy, cb);
        }
      }

    } }, { key: "pointInPolygonRec", value: function pointInPolygonRec(


    e, x, y) {

      // get the last point in the polygon
      var vtx0X = e.v1.x;
      var vtx0Y = e.v1.y;

      // get test bit for above/below X axis
      var yflag0 = vtx0Y >= y;

      var vtx1X = e.v2.x;
      var vtx1Y = e.v2.y;

      var yflag1 = vtx1Y >= y;

      // Check if endpoints straddle (are on opposite sides) of X axis
      // (i.e. the Y's differ); if so, +X ray could intersect this edge.
      // The old test also checked whether the endpoints are both to the
      // right or to the left of the test point.  However, given the faster
      // intersection point computation used below, this test was found to
      // be a break-even proposition for most polygons and a loser for
      // triangles (where 50% or more of the edges which survive this test
      // will cross quadrants and so have to have the X intersection computed
      // anyway).  I credit Joseph Samosky with inspiring me to try dropping
      // the "both left or both right" part of my code.
      if (yflag0 != yflag1)
      {
        // Check intersection of pgon segment with +X ray.
        // Note if >= point's X; if so, the ray hits it.
        // The division operation is avoided for the ">=" test by checking
        // the sign of the first vertex wrto the test point; idea inspired
        // by Joseph Samosky's and Mark Haigh-Hutchinson's different
        // polygon inclusion tests.
        if ((vtx1Y - y) * (vtx0X - vtx1X) >=
        (vtx1X - x) * (vtx0Y - vtx1Y) == yflag1)
        {
          this.pipResult = !this.pipResult;
        }
      }

    } }, { key: "pointInPolygon", value: function pointInPolygon(

    x, y) {var _this = this;

      this.pipResult = false;

      this.enumInBox(-Infinity, y, Infinity, y, function (item) {

        _this.pointInPolygonRec(item, x, y);

      });

      return this.pipResult;

    } }]);return QuadTree;}();

/***/ }),

/***/ "./extensions/CompGeom/x-box-box.js":
/*!******************************************!*\
  !*** ./extensions/CompGeom/x-box-box.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xBoxBox": () => (/* binding */ xBoxBox)
/* harmony export */ });

function xBoxBox(minx1, miny1, maxx1, maxy1,
minx2, miny2, maxx2, maxy2) {

  return minx1 <= maxx2 &&
  miny1 <= maxy2 &&
  maxx1 >= minx2 &&
  maxy1 >= miny2;

}

/***/ }),

/***/ "./extensions/CompGeom/x-box-plane.js":
/*!********************************************!*\
  !*** ./extensions/CompGeom/x-box-plane.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xBoxPlane": () => (/* binding */ xBoxPlane)
/* harmony export */ });

var point = new THREE.Vector3();

function xBoxPlane(plane, box) {

  point.set(box.min.x, box.min.y, box.min.z); // 000
  var d = plane.distanceToPoint(point);
  var s = Math.sign(d);

  point.set(box.min.x, box.min.y, box.max.z); // 001
  var d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.min.x, box.max.y, box.min.z); // 010
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.min.x, box.max.y, box.max.z); // 011
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.max.x, box.min.y, box.min.z); // 100
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.max.x, box.min.y, box.max.z); // 101
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.max.x, box.max.y, box.min.z); // 110
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  point.set(box.max.x, box.max.y, box.max.z); // 111
  d2 = plane.distanceToPoint(point);
  if (Math.sign(d2) !== s)
  return true;

  return false;
}

/***/ }),

/***/ "./extensions/CompGeom/x-line-box.js":
/*!*******************************************!*\
  !*** ./extensions/CompGeom/x-line-box.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xLineBox": () => (/* binding */ xLineBox)
/* harmony export */ });

var INSIDE = 0; // 0000
var LEFT = 1; // 0001
var RIGHT = 2; // 0010
var BOTTOM = 4; // 0100
var TOP = 8; // 1000

// Compute the bit code for a point (x, y) using the clip rectangle
// bounded diagonally by (xmin, ymin), and (xmax, ymax)

function ComputeOutCode(x, y, xmin, ymin, xmax, ymax)
{
  var code;

  code = INSIDE; // initialised as being inside of [[clip window]]

  if (x < xmin) // to the left of clip window
    code |= LEFT;else
  if (x > xmax) // to the right of clip window
    code |= RIGHT;
  if (y < ymin) // below the clip window
    code |= BOTTOM;else
  if (y > ymax) // above the clip window
    code |= TOP;

  return code;
}

// Cohen–Sutherland clipping algorithm clips a line from
// P0 = (x0, y0) to P1 = (x1, y1) against a rectangle with
// diagonal from (xmin, ymin) to (xmax, ymax).
function xLineBox(x0, y0, x1, y1, xmin, ymin, xmax, ymax)
{
  // compute outcodes for P0, P1, and whatever point lies outside the clip rectangle
  var outcode0 = ComputeOutCode(x0, y0, xmin, ymin, xmax, ymax);
  var outcode1 = ComputeOutCode(x1, y1, xmin, ymin, xmax, ymax);
  var accept = false;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (!(outcode0 | outcode1)) {
      // bitwise OR is 0: both points inside window; trivially accept and exit loop
      accept = true;
      break;
    } else if (outcode0 & outcode1) {
      // bitwise AND is not 0: both points share an outside zone (LEFT, RIGHT, TOP,
      // or BOTTOM), so both must be outside window; exit loop (accept is false)
      break;
    } else {
      // failed both tests, so calculate the line segment to clip
      // from an outside point to an intersection with clip edge
      var x = void 0,y = void 0;

      // At least one endpoint is outside the clip rectangle; pick it.
      var outcodeOut = outcode0 ? outcode0 : outcode1;

      // Now find the intersection point;
      // use formulas:
      //   slope = (y1 - y0) / (x1 - x0)
      //   x = x0 + (1 / slope) * (ym - y0), where ym is ymin or ymax
      //   y = y0 + slope * (xm - x0), where xm is xmin or xmax
      // No need to worry about divide-by-zero because, in each case, the
      // outcode bit being tested guarantees the denominator is non-zero
      if (outcodeOut & TOP) {// point is above the clip window
        x = x0 + (x1 - x0) * (ymax - y0) / (y1 - y0);
        y = ymax;
      } else if (outcodeOut & BOTTOM) {// point is below the clip window
        x = x0 + (x1 - x0) * (ymin - y0) / (y1 - y0);
        y = ymin;
      } else if (outcodeOut & RIGHT) {// point is to the right of clip window
        y = y0 + (y1 - y0) * (xmax - x0) / (x1 - x0);
        x = xmax;
      } else if (outcodeOut & LEFT) {// point is to the left of clip window
        y = y0 + (y1 - y0) * (xmin - x0) / (x1 - x0);
        x = xmin;
      }

      // Now we move outside point to intersection point to clip
      // and get ready for next pass.
      if (outcodeOut === outcode0) {
        x0 = x;
        y0 = y;
        outcode0 = ComputeOutCode(x0, y0, xmin, ymin, xmax, ymax);
      } else {
        x1 = x;
        y1 = y;
        outcode1 = ComputeOutCode(x1, y1, xmin, ymin, xmax, ymax);
      }
    }
  }

  return accept;
}

/***/ }),

/***/ "./extensions/CompGeom/x-line-line.js":
/*!********************************************!*\
  !*** ./extensions/CompGeom/x-line-line.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONE_INTERSECTION": () => (/* binding */ ONE_INTERSECTION),
/* harmony export */   "OVERLAP": () => (/* binding */ OVERLAP),
/* harmony export */   "pointOnLine": () => (/* binding */ pointOnLine),
/* harmony export */   "segmentsIntersect": () => (/* binding */ segmentsIntersect)
/* harmony export */ });
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");



function ABS(x) {
  return Math.abs(x);
}

var EPS = _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL;

var ONE_INTERSECTION = 4;
var OVERLAP = 5;


//Returns true if the given point lies on and inside the given line segment
function pointOnLine(x, y, e, checkInsideSegment, precisionDistance, outPt) {

  if (e.length < EPS) {
    return false;
  }

  var dot = (x - e.v1.x) * e.dx + (y - e.v1.y) * e.dy;

  if (!precisionDistance)
  precisionDistance = EPS * e.length;

  var u = dot / e.length2;

  if (checkInsideSegment) {
    if (u * e.length < -precisionDistance || u * e.length > e.length + precisionDistance)
    return false;
  }

  var lx = e.v1.x + u * e.dx;
  var ly = e.v1.y + u * e.dy;

  var len2 = (lx - x) * (lx - x) + (ly - y) * (ly - y);

  if (outPt) {
    outPt.x = lx;
    outPt.y = ly;
    outPt.d = Math.sqrt(len2);
    outPt.u = u;
  }

  if (len2 < precisionDistance * precisionDistance)
  return true;

  return false;
}


function parallelLinesOverlap(e1, e2, precisionDistance) {

  //Check of the segments are parallel but not on the same infinite line
  if (!pointOnLine(e2.v1.x, e2.v1.y, e1, false, precisionDistance)) {
    return null;
  }

  var res = {
    status: OVERLAP,
    e1: [],
    e2: [] };


  //They are on the same line. Find overlap points.
  //TODO: There is probably a more efficient way to do this
  var p3_seg1 = pointOnLine(e2.v1.x, e2.v1.y, e1, true, precisionDistance);
  var p4_seg1 = pointOnLine(e2.v2.x, e2.v2.y, e1, true, precisionDistance);

  //If both points of the second segment are inside the first
  //then the reverse cannot be true...
  if (p3_seg1 && p4_seg1) {
    res.e1.push(e2.v1.x, e2.v1.y, e2.v2.x, e2.v2.y);
    return res;
  }

  var p1_seg2 = pointOnLine(e1.v1.x, e1.v1.y, e2, true, precisionDistance);
  var p2_seg2 = pointOnLine(e1.v2.x, e1.v2.y, e2, true, precisionDistance);

  if (p3_seg1)
  res.e1.push(e2.v1.x, e2.v1.y);
  if (p4_seg1)
  res.e1.push(e2.v2.x, e2.v2.y);
  if (p1_seg2)
  res.e2.push(e1.v1.x, e1.v1.y);
  if (p2_seg2)
  res.e2.push(e1.v2.x, e1.v2.y);

  return res;
}


/*
     Determine the intersection point of two line segments
     Modified source from here:
     http://www.paulbourke.net/geometry/pointlineplane/
  */
function segmentsIntersect(e1, e2, precisionDistance)
{
  var denom = e2.dy * e1.dx - e2.dx * e1.dy;
  var numera = e2.dx * (e1.v1.y - e2.v1.y) - e2.dy * (e1.v1.x - e2.v1.x);
  var numerb = e1.dx * (e1.v1.y - e2.v1.y) - e1.dy * (e1.v1.x - e2.v1.x);

  /* Are the lines coincident? */
  if (ABS(numera) < EPS && ABS(numerb) < EPS && ABS(denom) < EPS) {
    return null;
  }

  /* Are the lines parallel */
  if (ABS(denom) < EPS) {
    /* check for overlap */
    return parallelLinesOverlap(e1, e2, precisionDistance);
  }

  /* Is the intersection along the segments */
  var mua = numera / denom;
  var da = mua * e1.length;
  if (da < -precisionDistance || da > e1.length + precisionDistance) {
    return null;
  }

  var mub = numerb / denom;
  var db = mub * e2.length;
  if (db < -precisionDistance || db > e2.length + precisionDistance) {
    return null;
  }

  var x = e1.v1.x + mua * e1.dx;
  var y = e1.v1.y + mua * e1.dy;

  return {
    status: ONE_INTERSECTION,
    e1: [x, y],
    e2: [x, y] };

}

/***/ }),

/***/ "./extensions/CompGeom/x-mesh-plane.js":
/*!*********************************************!*\
  !*** ./extensions/CompGeom/x-mesh-plane.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xMeshPlane": () => (/* binding */ xMeshPlane),
/* harmony export */   "makePlaneBasis": () => (/* binding */ makePlaneBasis),
/* harmony export */   "convertToPlaneCoords": () => (/* binding */ convertToPlaneCoords)
/* harmony export */ });
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");
/* harmony import */ var _x_triangle_plane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x-triangle-plane */ "./extensions/CompGeom/x-triangle-plane.js");



//const THREE = THREE;
var avp = Autodesk.Viewing.Private;
var VertexEnumerator = avp.VertexEnumerator;





var mi = new THREE.Matrix4();
var pi = new THREE.Plane();

function xMeshPlane(plane, mesh, intersects) {

  var geometry = mesh.geometry;

  if (!geometry)
  return;

  var baseIndex = intersects.length;

  var matrixWorld = mesh.matrixWorld;
  mi.copy(matrixWorld).invert();
  pi.copy(plane).applyMatrix4(mi);

  VertexEnumerator.enumMeshTriangles(geometry, function (vA, vB, vC, a, b, c) {

    (0,_x_triangle_plane__WEBPACK_IMPORTED_MODULE_1__.xTrianglePlane)(pi, vA, vB, vC, a, b, c, intersects, mesh.fragId);

  });

  //Put the points into world space. It should actually be possible to do
  //the entire math in object space -- but we have to check if all fragments
  //that belong to the same dbId have the same world transform.
  for (var i = baseIndex, iEnd = intersects.length; i < iEnd; i++) {
    intersects[i].v1.applyMatrix4(matrixWorld);
    intersects[i].v2.applyMatrix4(matrixWorld);
  }

}


function makeRotationAxis(axis, cosa, m) {

  // Based on http://www.gamedev.net/reference/articles/article1199.asp

  var c = cosa;
  var s = Math.sqrt(1.0 - c * c);
  var t = 1 - c;
  var x = axis.x,y = axis.y,z = axis.z;
  var tx = t * x,ty = t * y;

  m.set(

  tx * x + c, tx * y - s * z, tx * z + s * y, 0,
  tx * y + s * z, ty * y + c, ty * z - s * x, 0,
  tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
  0, 0, 0, 1);



}


function makePlaneBasis(plane) {

  //var origin = plane.coplanarPoint();

  var sceneUp = new THREE.Vector3(0, 0, 1);
  var cross = plane.normal.clone().cross(sceneUp);
  cross = cross.normalize();
  var dot = sceneUp.dot(plane.normal);

  //We are ignoring the translation here, since
  //we will drop the Z coord for the 2D processing steps anyway.
  var planeBasis = new THREE.Matrix4();

  if (!((0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.isZero)(cross.x) && (0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.isZero)(cross.y) && (0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.isZero)(cross.z))) {
    makeRotationAxis(cross, dot, planeBasis);
    planeBasis.elements[14] = plane.constant;
  } else {
    planeBasis.elements[14] = dot * plane.constant;
  }

  return planeBasis;
}


function convertToPlaneCoords(planeBasis, edges3d, bbox) {

  for (var i = 0; i < edges3d.length; i++) {
    var e = edges3d[i];

    e.v1.applyMatrix4(planeBasis);
    e.v2.applyMatrix4(planeBasis);

    bbox.expandByPoint(e.v1);
    bbox.expandByPoint(e.v2);
  }
}

/***/ }),

/***/ "./extensions/CompGeom/x-plane-segment.js":
/*!************************************************!*\
  !*** ./extensions/CompGeom/x-plane-segment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xPlaneSegment": () => (/* binding */ xPlaneSegment)
/* harmony export */ });
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");



var v1 = new THREE.Vector3();

function xPlaneSegment(plane, pt0, pt1, res1, res2) {

  var direction = v1.subVectors(pt1, pt0);

  var denominator = plane.normal.dot(direction);

  if ((0,_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.isZero)(denominator)) {

    res1.copy(pt0);
    res2.copy(pt1);

    // line is coplanar
    return 2;
  }

  denominator = 1.0 / denominator;

  var t = -(pt0.dot(plane.normal) * denominator + plane.constant * denominator);

  if (t < -_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL || t > 1 + _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL) {

    return 0;

  }

  var pt = direction.multiplyScalar(t).add(pt0);

  res1.copy(pt);

  return 1;
}

/***/ }),

/***/ "./extensions/CompGeom/x-triangle-plane.js":
/*!*************************************************!*\
  !*** ./extensions/CompGeom/x-triangle-plane.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xTrianglePlane": () => (/* binding */ xTrianglePlane)
/* harmony export */ });
/* harmony import */ var _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzy-math */ "./extensions/CompGeom/fuzzy-math.js");
/* harmony import */ var _x_plane_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x-plane-segment */ "./extensions/CompGeom/x-plane-segment.js");



var avp = Autodesk.Viewing.Private;
var logger = avp.logger;

function Edge(pt1, pt2, id1From, id1To, id2From, id2To, meshId) {

  this.v1 = pt1.clone();
  this.v2 = pt2.clone();

}



var res1 = new THREE.Vector3();
var res2 = new THREE.Vector3();

// res is array containing result segments.
// returns number of intersection point on the plane (0, 1, or 2) with the values of the points stored in the res array
function xTrianglePlane(plane, pt0, pt1, pt2, i0, i1, i2, res, meshId) {

  var d0 = plane.distanceToPoint(pt0);
  var d1 = plane.distanceToPoint(pt1);
  var d2 = plane.distanceToPoint(pt2);

  // Check if all points are to one side of the plane
  if (d0 < -_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL && d1 < -_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL && d2 < -_fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL) {
    return null;
  }
  if (d0 > _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL && d1 > _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL && d2 > _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL) {
    return null;
  }

  var s0 = Math.sign(d0);
  var s1 = Math.sign(d1);
  var s2 = Math.sign(d2);

  // Skip coplanar triangles (leave it to the neighbouring triangles to contribute their edges)
  if (s0 === 0 && s1 === 0 && s2 === 0) {
    return null;
  }

  var tmp1, tmp2;
  var i1From, i1To, i2From, i2To;

  //There is intersection, compute it
  if (s0 !== s1) {
    var numInts = (0,_x_plane_segment__WEBPACK_IMPORTED_MODULE_1__.xPlaneSegment)(plane, pt0, pt1, res1, res2);
    if (numInts === 2) {
      res.push(new Edge(pt0, pt1, i0, i0, i1, i1, meshId));
      return;
    } else if (numInts === 1) {
      i1From = i0;
      i1To = i1;
      tmp1 = res1.clone();
    } else {
      logger.warn("Unexpected zero intersections where at least one was expected");
    }
  }

  if (s1 !== s2) {
    var _numInts = (0,_x_plane_segment__WEBPACK_IMPORTED_MODULE_1__.xPlaneSegment)(plane, pt1, pt2, res1, res2);
    if (_numInts === 2) {
      res.push(new Edge(pt1, pt2, i1, i1, i2, i2, meshId));
      return;
    } else if (_numInts === 1) {
      if (tmp1) {
        // Avoid the singular scenario where the signs are 0, -1 and +1
        if (res1.distanceTo(tmp1) > _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL) {
          i2From = i1;
          i2To = i2;
          tmp2 = res1.clone();
        }
      } else
      {
        i1From = i1;
        i1To = i2;
        tmp1 = res1.clone();
      }
    } else {
      logger.warn("Unexpected zero intersections where at least one was expected");
    }
  }

  if (s2 !== s0) {
    var _numInts2 = (0,_x_plane_segment__WEBPACK_IMPORTED_MODULE_1__.xPlaneSegment)(plane, pt2, pt0, res1, res2);
    if (_numInts2 === 2) {
      res.push(new Edge(pt2, pt0, i2, i2, i0, i0, meshId));
      return;
    } else if (_numInts2 === 1) {
      if (tmp1) {
        // Avoid the singular scenario where the signs are 0, -1 and +1
        if (res1.distanceTo(tmp1) > _fuzzy_math__WEBPACK_IMPORTED_MODULE_0__.TOL) {
          i2From = i2;
          i2To = i0;
          tmp2 = res1.clone();
        }
      } else {
        logger.warn("Unexpected single intersection point");
      }
    } else {
      logger.warn("Unexpected zero intersections where at least one was expected");
    }
  }


  if (tmp1 && tmp2) {
    res.push(new Edge(tmp1, tmp2, i1From, i1To, i2From, i2To, meshId));
  } else {
    //logger.warn("Unexpected one intersection where two were expected");
  }

}

/***/ }),

/***/ "./src/compat.js":
/*!***********************!*\
  !*** ./src/compat.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isNodeJS": () => (/* binding */ isNodeJS),
/* harmony export */   "isIE11": () => (/* binding */ isIE11),
/* harmony export */   "isIE11Only": () => (/* binding */ isIE11Only),
/* harmony export */   "launchFullscreen": () => (/* binding */ launchFullscreen),
/* harmony export */   "exitFullscreen": () => (/* binding */ exitFullscreen),
/* harmony export */   "inFullscreen": () => (/* binding */ inFullscreen),
/* harmony export */   "fullscreenElement": () => (/* binding */ fullscreenElement),
/* harmony export */   "isFullscreenAvailable": () => (/* binding */ isFullscreenAvailable),
/* harmony export */   "isFullscreenEnabled": () => (/* binding */ isFullscreenEnabled),
/* harmony export */   "getAndroidVersion": () => (/* binding */ getAndroidVersion),
/* harmony export */   "isTouchDevice": () => (/* binding */ isTouchDevice),
/* harmony export */   "isIOSDevice": () => (/* binding */ isIOSDevice),
/* harmony export */   "isAndroidDevice": () => (/* binding */ isAndroidDevice),
/* harmony export */   "isMobileDevice": () => (/* binding */ isMobileDevice),
/* harmony export */   "isPhoneFormFactor": () => (/* binding */ isPhoneFormFactor),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isFirefox": () => (/* binding */ isFirefox),
/* harmony export */   "isChrome": () => (/* binding */ isChrome),
/* harmony export */   "isMac": () => (/* binding */ isMac),
/* harmony export */   "isWindows": () => (/* binding */ isWindows),
/* harmony export */   "ObjectAssign": () => (/* binding */ ObjectAssign),
/* harmony export */   "disableDocumentTouchSafari": () => (/* binding */ disableDocumentTouchSafari),
/* harmony export */   "enableDocumentTouchSafari": () => (/* binding */ enableDocumentTouchSafari),
/* harmony export */   "touchStartToClick": () => (/* binding */ touchStartToClick)
/* harmony export */ });

function getGlobal() {
  return typeof window !== "undefined" && window !== null ?
  window :
  typeof self !== "undefined" && self !== null ?
  self :
  __webpack_require__.g;
}

var _window = getGlobal();
var _document = _window && _window.document;

var isBrowser = typeof navigator !== "undefined";

var isNodeJS = function isNodeJS() {
  return !isBrowser;
};

var isIE11 = isBrowser && !!navigator.userAgent.match(/Edge|Trident\/7\./);

// Although the naming is misleading, isIE11 contains Edge too for some legacy reason.
// For backward compatibility, instead of renaming `isIE11` to `isIEOrEdge`, I just added `isIE11Only`.
var isIE11Only = isBrowser && !!navigator.userAgent.match(/Trident\/7\./);

// fix IE events
if (typeof window !== "undefined" && isIE11) {
  (function () {
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = _document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = _window.CustomEvent.prototype;

    _window.CustomEvent = CustomEvent;
  })();
}

// IE does not implement ArrayBuffer slice. Handy!
if (!ArrayBuffer.prototype.slice) {
  ArrayBuffer.prototype.slice = function (start, end) {
    // Normalize start/end values
    if (!end || end > this.byteLength) {
      end = this.byteLength;
    } else
    if (end < 0) {
      end = this.byteLength + end;
      if (end < 0) end = 0;
    }
    if (start < 0) {
      start = this.byteLength + start;
      if (start < 0) start = 0;
    }

    if (end <= start) {
      return new ArrayBuffer();
    }

    // Bytewise copy- this will not be fast, but what choice do we have?
    var len = end - start;
    var view = new Uint8Array(this, start, len);
    var out = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      out[i] = view[i];
    }
    return out.buffer;
  };
}

// IE doesn't implement Math.log2
(function () {
  Math.log2 = Math.log2 || function (x) {
    return Math.log(x) / Math.LN2;
  };
})();

//The BlobBuilder object
if (typeof window !== "undefined")
_window.BlobBuilder = _window.BlobBuilder || _window.WebKitBlobBuilder || _window.MozBlobBuilder || _window.MSBlobBuilder;


// Launch full screen on the given element with the available method
function launchFullscreen(element, options) {
  if (element.requestFullscreen) {
    element.requestFullscreen(options);
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(options);
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(options);
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(options);
  }
};

// Exit full screen with the available method
function exitFullscreen(_document) {
  if (!inFullscreen(_document)) {
    return;
  }
  if (_document.exitFullscreen) {
    _document.exitFullscreen();
  } else if (_document.mozCancelFullScreen) {
    _document.mozCancelFullScreen();
  } else if (_document.webkitExitFullscreen) {
    _document.webkitExitFullscreen();
  } else if (_document.msExitFullscreen) {
    _document.msExitFullscreen();
  }
};

// Determines if the browser is in full screen
function inFullscreen(_document) {

  // Special case for Ms-Edge that has webkitIsFullScreen with correct value
  // and fullscreenEnabled with wrong value (thanks MS)

  if ("webkitIsFullScreen" in _document) return !!_document.webkitIsFullScreen;
  if ("fullscreenElement" in _document) return !!_document.fullscreenElement;
  if ("mozFullScreenElement" in _document) return !!_document.mozFullScreenElement;
  if ("msFullscreenElement" in _document) return !!_document.msFullscreenElement;

  return !!_document.querySelector(".viewer-fill-browser"); // Fallback for iPad
};

function fullscreenElement(_document) {
  return _document.fullscreenElement || _document.mozFullScreenElement || _document.webkitFullscreenElement || _document.msFullscreenElement;
};

function isFullscreenAvailable(element) {
  return element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen;
};

/**
    * Returns true if full screen mode is enabled. 
    * @param {Document} _document
    * @return {Boolean} - true if full screen mode is enabled false otherwise.
    */
function isFullscreenEnabled(_document) {
  return (
    _document.fullscreenEnabled ||
    _document.webkitFullscreenEnabled ||
    _document.mozFullScreenEnabled ||
    _document.msFullscreenEnabled);

}

// Get the version of the android device through user agent.
// Return the version string of android device, e.g. 4.4, 5.0...
function getAndroidVersion(ua) {
  ua = ua || navigator.userAgent;
  var match = ua.match(/Android\s([0-9\.]*)/);
  return match ? match[1] : false;
};

// Determine if this is a touch or notouch device.
function isTouchDevice() {
  /*
                                 // Temporarily disable touch support through hammer on Android 5, to debug
                                 // some specific gesture issue with Chromium WebView when loading viewer3D.js.
                                 if (parseInt(getAndroidVersion()) == 5) {
                                     return false;
                                 }
                                 */

  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};

// Since iOS 13, the iPad identifies itself as a desktop, so the only way to reliably detect is to search for multitouch capabilities
// (insofar as no other Apple device implements it)
var _isIOSDevice = isBrowser && (/ip(ad|hone|od)/.test(navigator.userAgent.toLowerCase()) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function isIOSDevice() {
  return _isIOSDevice;
}

var _isAndroidDevice = isBrowser && navigator.userAgent.toLowerCase().indexOf('android') !== -1;
function isAndroidDevice() {
  return _isAndroidDevice;
}

function isMobileDevice() {
  if (!isBrowser) return false;
  return isIOSDevice() || isAndroidDevice();
};

function isPhoneFormFactor() {
  return (
    isMobileDevice() && (
    _window.matchMedia('(max-width: 750px)').matches || _window.matchMedia('(max-height: 750px)').matches));

}

function isSafari() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("safari") !== -1 && _ua.indexOf("chrome") === -1;
};

function isFirefox() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("firefox") !== -1;
};

function isChrome() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("chrome") !== -1;
};

function isMac() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("mac os") !== -1;
};

function isWindows() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("win32") !== -1 || _ua.indexOf("windows") !== -1;
};

function ObjectAssign(des, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key))
    des[key] = src[key];
  }
  return des;
};

// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
function disableTouchSafari(event) {
  var xOff = _window.hasOwnProperty("pageXOffset") ? _window.pageXOffset : _document.documentElement.scrollLeft;
  var yOff = _window.hasOwnProperty("pageYOffset") ? _window.pageYOffset : _document.documentElement.scrollTop;

  // event.pageX and event.pageY returned undefined through Chrome console device mode
  var pageX = typeof event.pageX === "undefined" ? event.changedTouches[0].pageX : event.pageX;
  var pageY = typeof event.pageY === "undefined" ? event.changedTouches[0].pageY : event.pageY;

  // If we aren't inside the canvas, then allow default propagation of the event
  var element = _document.elementFromPoint(pageX - xOff, pageY - yOff);
  if (!element || element.nodeName !== 'CANVAS')
  return true;
  // If it's a CANVAS, check that it's owned by us
  if (element.getAttribute('data-viewer-canvas') !== 'true')
  return true;
  // Inside the canvas, prevent the event from propagating to Safari'safely
  // standard handlers, which will pan and zoom the page.
  event.preventDefault();
  return false;
}

// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
function disableDocumentTouchSafari() {
  if (isMobileDevice() && isSafari()) {
    // Safari mobile disable default touch handling inside viewer canvas
    // Use capture to make sure Safari doesn't capture the touches and prevent
    // us from disabling them.
    _document.documentElement.addEventListener('touchstart', disableTouchSafari, true);
    _document.documentElement.addEventListener('touchmove', disableTouchSafari, true);
    _document.documentElement.addEventListener('touchcanceled', disableTouchSafari, true);
    _document.documentElement.addEventListener('touchend', disableTouchSafari, true);
  }
};

// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
// This method is not being invoked explicitly.
function enableDocumentTouchSafari() {
  if (isMobileDevice() && isSafari()) {
    // Safari mobile disable default touch handling inside viewer canvas
    // Use capture to make sure Safari doesn't capture the touches and prevent
    // us from disabling them.
    _document.documentElement.removeEventListener('touchstart', disableTouchSafari, true);
    _document.documentElement.removeEventListener('touchmove', disableTouchSafari, true);
    _document.documentElement.removeEventListener('touchcanceled', disableTouchSafari, true);
    _document.documentElement.removeEventListener('touchend', disableTouchSafari, true);
  }
};


// Convert touchstart event to click to remove the delay between the touch and
// the click event which is sent after touchstart with about 300ms deley.
// Should be used in UI elements on touch devices.
function touchStartToClick(e) {
  // Buttons that activate fullscreen are a special case. The HTML5 fullscreen spec
  // requires the original user gesture signal to avoid a security issue.  See LMV-2396 and LMV-2326
  if (e.target.className && (e.target.className.indexOf("fullscreen") > -1 ||
  e.target.className.indexOf("webvr") > -1 ||
  e.target.className.indexOf("webxr") > -1))
  return;
  e.preventDefault(); // Stops the firing of delayed click event.
  e.stopPropagation();
  e.target.click(); // Maps to immediate click.
}

//Safari doesn't have the Performance object
//We only need the now() function, so that's easy to emulate.
(function () {
  var global = getGlobal();
  if (!global.performance)
  global.performance = Date;
})();

// Polyfill for IE and Safari
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === "number" &&
  isFinite(value) &&
  Math.floor(value) === value;
};

// Polyfill for IE
String.prototype.repeat = String.prototype.repeat || function (count) {
  if (count < 1) return '';
  var result = '',pattern = this.valueOf();
  while (count > 1) {
    if (count & 1) result += pattern;
    count >>= 1, pattern += pattern;
  }
  return result + pattern;
};

// Polyfill for IE
// https://github.com/jonathantneal/array-flat-polyfill/blob/master/src/polyfill-flat.js
if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    value: function flat() {
      var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

      return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
        if (Array.isArray(cur)) {
          acc.push.apply(acc, flat.call(cur, depth - 1));
        } else {
          acc.push(cur);
        }

        return acc;
      }, []) : Array.prototype.slice.call(this);
    } });

}

// Polyfill for IE
// It doesn't support negative values for start and end; it complicates the code using this function.
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, "fill", {
    enumerable: false,
    value: function value(_value, start, end) {
      start = start === undefined ? 0 : start;
      end = end === undefined ? this.length : end;
      for (var i = start; i < end; ++i) {
        this[i] = _value;}
    } });

}
// Polyfill for IE
Int32Array.prototype.lastIndexOf = Int32Array.prototype.lastIndexOf || function (searchElement, fromIndex) {
  return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex);
};

// Polyfill for IE
// It doesn't support negative values for start and end; it complicates the code using this function.
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    enumerable: false,
    value: function value(callback, _this) {
      var len = this.length;
      for (var i = 0; i < len; ++i) {
        var item = this[i];
        if (callback.call(_this, item, i, this))
        return item;
      }
      return undefined;
    } });

}

// Polyfill for IE
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {// .length of function is 2
      'use strict';
      if (target == null) {// TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {// Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true });

}

// Polyfill for IE and iOS devices
if (typeof window !== "undefined" && (isIE11 || isIOSDevice()) && !HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value: function value(callback, type, quality) {
      var canvas = this;
      setTimeout(function () {

        var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }

        callback(new Blob([arr], { type: type || 'image/png' }));

      });
    } });

}

// Polyfill for IE (LMV-3823)
if (!Uint8Array.prototype.slice) {

  // This will work for genuine arrays, array-like objects, 
  // NamedNodeMap (attributes, entities, notations),
  // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
  // and will not fail on other DOM objects (as do DOM elements in IE < 9)
  Uint8Array.prototype.slice = function (begin, end) {
    // IE < 9 gets unhappy with an undefined end argument
    end = typeof end !== 'undefined' ? end : this.length;

    // For native Array objects, we use the native slice function
    if (Object.prototype.toString.call(this) === '[object Array]') {
      return _slice.call(this, begin, end);
    }

    // For array like object we handle it ourselves.
    var i,cloned = [],
    size,len = this.length;

    // Handle negative value for "begin"
    var start = begin || 0;
    start = start >= 0 ? start : Math.max(0, len + start);

    // Handle negative value for "end"
    var upTo = typeof end == 'number' ? Math.min(end, len) : len;
    if (end < 0) {
      upTo = len + end;
    }

    // Actual expected size of the slice
    size = upTo - start;

    if (size > 0) {
      cloned = new Array(size);
      if (this.charAt) {
        for (i = 0; i < size; i++) {
          cloned[i] = this.charAt(start + i);
        }
      } else {
        for (i = 0; i < size; i++) {
          cloned[i] = this[start + i];
        }
      }
    }

    return cloned;
  };
}

/***/ }),

/***/ "./src/wgs/scene/LmvVector3.js":
/*!*************************************!*\
  !*** ./src/wgs/scene/LmvVector3.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LmvVector3": () => (/* binding */ LmvVector3)
/* harmony export */ });
/**
 * @author mrdoob / http://mrdoob.com/
 * @author *kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
/* Pruned version of THREE.Vector3, for use in the LMV web worker */

var LmvVector3 = function LmvVector3(x, y, z) {

  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;

};

LmvVector3.prototype = {

  constructor: LmvVector3,

  set: function set(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;

    return this;

  },

  setX: function setX(x) {

    this.x = x;

    return this;

  },

  setY: function setY(y) {

    this.y = y;

    return this;

  },

  setZ: function setZ(z) {

    this.z = z;

    return this;

  },

  setComponent: function setComponent(index, value) {

    switch (index) {

      case 0:this.x = value;break;
      case 1:this.y = value;break;
      case 2:this.z = value;break;
      default:throw new Error('index is out of range: ' + index);}



  },

  getComponent: function getComponent(index) {

    switch (index) {

      case 0:return this.x;
      case 1:return this.y;
      case 2:return this.z;
      default:throw new Error('index is out of range: ' + index);}



  },

  clone: function clone() {

    return new this.constructor(this.x, this.y, this.z);

  },

  copy: function copy(v) {

    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;

  },

  add: function add(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
      return this.addVectors(v, w);

    }

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;

  },

  addScalar: function addScalar(s) {

    this.x += s;
    this.y += s;
    this.z += s;

    return this;

  },

  addVectors: function addVectors(a, b) {

    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;

    return this;

  },

  addScaledVector: function addScaledVector(v, s) {

    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;

    return this;

  },

  sub: function sub(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
      return this.subVectors(v, w);

    }

    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;

  },

  subScalar: function subScalar(s) {

    this.x -= s;
    this.y -= s;
    this.z -= s;

    return this;

  },

  subVectors: function subVectors(a, b) {

    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;

    return this;

  },

  multiply: function multiply(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.');
      return this.multiplyVectors(v, w);

    }

    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;

    return this;

  },

  multiplyScalar: function multiplyScalar(scalar) {

    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;

  },

  multiplyVectors: function multiplyVectors(a, b) {

    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;

    return this;

  },

  applyMatrix3: function applyMatrix3(m) {

    var x = this.x;
    var y = this.y;
    var z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;

    return this;

  },

  applyMatrix4: function applyMatrix4(m) {

    // input: THREE.Matrix4 affine matrix

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14];

    return this;

  },

  applyProjection: function applyProjection(m) {

    // input: THREE.Matrix4 projection matrix

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;
    var d = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]); // perspective divide

    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * d;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * d;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * d;

    return this;

  },

  applyQuaternion: function applyQuaternion(q) {

    var x = this.x;
    var y = this.y;
    var z = this.z;

    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w;

    // calculate quat * vector

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return this;

  },

  transformDirection: function transformDirection(m) {

    // input: THREE.Matrix4 affine matrix
    // vector interpreted as a direction

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;

    this.normalize();

    return this;

  },

  divide: function divide(v) {

    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;

    return this;

  },

  divideScalar: function divideScalar(scalar) {

    if (scalar !== 0) {

      var invScalar = 1 / scalar;

      this.x *= invScalar;
      this.y *= invScalar;
      this.z *= invScalar;

    } else {

      this.x = 0;
      this.y = 0;
      this.z = 0;

    }

    return this;

  },

  min: function min(v) {

    if (this.x > v.x) {

      this.x = v.x;

    }

    if (this.y > v.y) {

      this.y = v.y;

    }

    if (this.z > v.z) {

      this.z = v.z;

    }

    return this;

  },

  max: function max(v) {

    if (this.x < v.x) {

      this.x = v.x;

    }

    if (this.y < v.y) {

      this.y = v.y;

    }

    if (this.z < v.z) {

      this.z = v.z;

    }

    return this;

  },

  clamp: function clamp(min, max) {

    // This function assumes min < max, if this assumption isn't true it will not operate correctly

    if (this.x < min.x) {

      this.x = min.x;

    } else if (this.x > max.x) {

      this.x = max.x;

    }

    if (this.y < min.y) {

      this.y = min.y;

    } else if (this.y > max.y) {

      this.y = max.y;

    }

    if (this.z < min.z) {

      this.z = min.z;

    } else if (this.z > max.z) {

      this.z = max.z;

    }

    return this;

  },

  clampScalar: function () {

    var min, max;

    return function clampScalar(minVal, maxVal) {

      if (min === undefined) {

        min = new LmvVector3();
        max = new LmvVector3();

      }

      min.set(minVal, minVal, minVal);
      max.set(maxVal, maxVal, maxVal);

      return this.clamp(min, max);

    };

  }(),

  floor: function floor() {

    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);

    return this;

  },

  ceil: function ceil() {

    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);

    return this;

  },

  round: function round() {

    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);

    return this;

  },

  roundToZero: function roundToZero() {

    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);

    return this;

  },

  negate: function negate() {

    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;

  },

  dot: function dot(v) {

    return this.x * v.x + this.y * v.y + this.z * v.z;

  },

  lengthSq: function lengthSq() {

    return this.x * this.x + this.y * this.y + this.z * this.z;

  },

  length: function length() {

    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

  },

  lengthManhattan: function lengthManhattan() {

    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);

  },

  normalize: function normalize() {

    return this.divideScalar(this.length());

  },

  setLength: function setLength(l) {

    var oldLength = this.length();

    if (oldLength !== 0 && l !== oldLength) {

      this.multiplyScalar(l / oldLength);

    }

    return this;

  },

  lerp: function lerp(v, alpha) {

    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;

    return this;

  },

  lerpVectors: function lerpVectors(v1, v2, alpha) {

    this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);

    return this;

  },

  cross: function cross(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.');
      return this.crossVectors(v, w);

    }

    var x = this.x,y = this.y,z = this.z;

    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;

    return this;

  },

  crossVectors: function crossVectors(a, b) {

    var ax = a.x,ay = a.y,az = a.z;
    var bx = b.x,by = b.y,bz = b.z;

    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;

    return this;

  },

  projectOnVector: function () {

    var v1, dot;

    return function projectOnVector(vector) {

      if (v1 === undefined) v1 = new LmvVector3();

      v1.copy(vector).normalize();

      dot = this.dot(v1);

      return this.copy(v1).multiplyScalar(dot);

    };

  }(),

  projectOnPlane: function () {

    var v1;

    return function projectOnPlane(planeNormal) {

      if (v1 === undefined) v1 = new LmvVector3();

      v1.copy(this).projectOnVector(planeNormal);

      return this.sub(v1);

    };

  }(),

  reflect: function () {

    // reflect incident vector off plane orthogonal to normal
    // normal is assumed to have unit length

    var v1;

    return function reflect(normal) {

      if (v1 === undefined) v1 = new LmvVector3();

      return this.sub(v1.copy(normal).multiplyScalar(2 * this.dot(normal)));

    };

  }(),

  distanceTo: function distanceTo(v) {

    return Math.sqrt(this.distanceToSquared(v));

  },

  distanceToSquared: function distanceToSquared(v) {

    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var dz = this.z - v.z;

    return dx * dx + dy * dy + dz * dz;

  },

  setEulerFromRotationMatrix: function setEulerFromRotationMatrix(m, order) {

    console.error('THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.');

  },

  setEulerFromQuaternion: function setEulerFromQuaternion(q, order) {

    console.error('THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.');

  },

  getPositionFromMatrix: function getPositionFromMatrix(m) {

    console.warn('THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().');

    return this.setFromMatrixPosition(m);

  },

  getScaleFromMatrix: function getScaleFromMatrix(m) {

    console.warn('THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().');

    return this.setFromMatrixScale(m);

  },

  getColumnFromMatrix: function getColumnFromMatrix(index, matrix) {

    console.warn('THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().');

    return this.setFromMatrixColumn(index, matrix);

  },

  setFromMatrixPosition: function setFromMatrixPosition(m) {

    this.x = m.elements[12];
    this.y = m.elements[13];
    this.z = m.elements[14];

    return this;

  },

  setFromMatrixScale: function setFromMatrixScale(m) {

    var sx = this.set(m.elements[0], m.elements[1], m.elements[2]).length();
    var sy = this.set(m.elements[4], m.elements[5], m.elements[6]).length();
    var sz = this.set(m.elements[8], m.elements[9], m.elements[10]).length();

    this.x = sx;
    this.y = sy;
    this.z = sz;

    return this;

  },

  setFromMatrixColumn: function setFromMatrixColumn(index, matrix) {

    var offset = index * 4;

    var me = matrix.elements;

    this.x = me[offset];
    this.y = me[offset + 1];
    this.z = me[offset + 2];

    return this;

  },

  equals: function equals(v) {

    return v.x === this.x && v.y === this.y && v.z === this.z;

  },

  fromArray: function fromArray(array, offset) {

    if (offset === undefined) offset = 0;

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];

    return this;

  },

  toArray: function toArray(array, offset) {

    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;

    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;

    return array;

  },

  fromAttribute: function fromAttribute(attribute, index, offset) {

    if (offset === undefined) offset = 0;

    index = index * attribute.itemSize + offset;

    this.x = attribute.array[index];
    this.y = attribute.array[index + 1];
    this.z = attribute.array[index + 2];

    return this;

  } };

/***/ }),

/***/ "./extensions/CompGeom/node_modules/poly2tri/dist/version.json":
/*!*********************************************************************!*\
  !*** ./extensions/CompGeom/node_modules/poly2tri/dist/version.json ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"version":"1.5.0"};

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/CompGeom/index.js");
/******/ 	Autodesk.Extensions.CompGeom = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=CompGeom.js.map