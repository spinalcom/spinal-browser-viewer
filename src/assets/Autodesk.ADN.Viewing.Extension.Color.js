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
 */

///////////////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.Color
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");
Autodesk.ADN.Viewing.Extension.Color = function (viewer, options) {
  Autodesk.Viewing.Extension.call(this, viewer, options);

  // var overlayName = "temperary-colored-overlay";
  var _self = this;
  _self.viewer = viewer;
  _self.materials = {};
  var promise = null;

  function initialize() {
    if (promise == null)
      promise = new Promise(res => {
        _self.viewer.addEventListener(
          Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
          function onObjectTreeLoadEvent() {
            _self.viewer.removeEventListener(
              Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
              onObjectTreeLoadEvent
            );
            res();
          }
        );
      });
    return promise;
  }
  _self.load = function () {
    initialize();
    console.log("Autodesk.ADN.Viewing.Extension.Color loaded");

    ///////////////////////////////////////////////////////////////////////////
    // Generate GUID
    //
    ///////////////////////////////////////////////////////////////////////////
    function newGuid() {
      var d = new Date().getTime();
      var guid = "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
      });
      return guid;
    }

    ///////////////////////////////////////////////////////////////////////////
    // add new material
    //
    ///////////////////////////////////////////////////////////////////////////
    function addMaterial(color, id) {
      _self.materials[id] = new THREE.MeshPhongMaterial({ color: color });
      // viewer.impl.matman().addMaterial(newGuid(), material);

      _self.viewer.impl.createOverlayScene(
        id,
        _self.materials[id],
        _self.materials[id]
      );
      return _self.materials[id];
    }

    function cutHex(h) {
      return h.charAt(0) == "#" ? h.substring(1, 7) : h;
    }
    ///////////////////////////////////////////////////////////////////////////
    // Set color for nodes
    // objectIds should be an array of dbId
    //
    //
    ///////////////////////////////////////////////////////////////////////////
    Autodesk.Viewing.Viewer3D.prototype.setColorMaterial = function (
      objectIds,
      color
    ) {
      initialize()
        .then(() => {
          for (var i = 0; i < objectIds.length; i++) {
            var dbid = objectIds[i];

            if (_self.materials[dbid]) {
              _self.materials[dbid].color.setHex(parseInt(cutHex(color), 16));
              _self.viewer.impl.invalidate(false, false, true);
            } else {
              var material = addMaterial(color, dbid);
              // from dbid to node, to fragid

              let it = _self.viewer.model.getData().instanceTree;
              it.enumNodeFragments(
                dbid,
                function (fragId) {
                  var renderProxy = _self.viewer.impl.getRenderProxy(
                    _self.viewer.model,
                    fragId
                  );
                  renderProxy[dbid] = new THREE.Mesh(
                    renderProxy.geometry,
                    material
                  );

                  renderProxy[dbid].matrix.copy(renderProxy.matrixWorld);
                  renderProxy[dbid].matrixWorldNeedsUpdate = true;
                  renderProxy[dbid].matrixAutoUpdate = false;
                  renderProxy[dbid].frustumCulled = false;

                  _self.viewer.impl.addOverlay(dbid, renderProxy[dbid]);
                  _self.viewer.impl.invalidate(true);
                },
                false
              );
            }
          }
        })
        .catch(err => {
          console.error(err);
        });
    };

    Autodesk.Viewing.Viewer3D.prototype.restoreColorMaterial = function (
      objectIds
    ) {
      for (var i = 0; i < objectIds.length; i++) {
        var dbid = objectIds[i];

        // from dbid to node, to fragid
        var it = _self.viewer.model.getData().instanceTree;

        if (_self.materials[dbid]) delete _self.materials[dbid];

        it.enumNodeFragments(
          dbid,
          function (fragId) {
            var renderProxy = _self.viewer.impl.getRenderProxy(
              _self.viewer.model,
              fragId
            );

            if (renderProxy[dbid]) {
              // remove all overlays with same name
              _self.viewer.impl.clearOverlay(dbid);
              //_self.viewer.impl.removeOverlay(id, renderProxy[id]);
              delete renderProxy[dbid];

              // refresh the sence
              _self.viewer.impl.invalidate(true);
            }
          },
          true
        );
      }
    };

    Autodesk.Viewing.Viewer3D.prototype.colorAllMaterials = function (objects) {
      for (var i = 0; i < objects.length; i++) {
        this.setColorMaterial(objects[i].ids, objects[i].color, objects[i].id);
      }
    };

    Autodesk.Viewing.Viewer3D.prototype.restoreAllMaterialColor = function (
      objects
    ) {
      for (var i = 0; i < objects.length; i++) {
        this.restoreColorMaterial(objects[i].ids, objects[i].id);
      }
    };

    _self.unload = function () {
      console.log("Autodesk.ADN.Viewing.Extension.Color unloaded");
      return true;
    };

    return true;
  };
};
Autodesk.ADN.Viewing.Extension.Color.prototype = Object.create(
  Autodesk.Viewing.Extension.prototype
);
Autodesk.ADN.Viewing.Extension.Color.prototype.constructor =
  Autodesk.ADN.Viewing.Extension.Color;
Autodesk.Viewing.theExtensionManager.registerExtension(
  "Autodesk.ADN.Viewing.Extension.Color",
  Autodesk.ADN.Viewing.Extension.Color
);
