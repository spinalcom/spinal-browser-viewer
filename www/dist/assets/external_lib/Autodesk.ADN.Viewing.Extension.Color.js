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

    _self.load = function () {

        console.log('Autodesk.ADN.Viewing.Extension.Color loaded');
        ///////////////////////////////////////////////////////////////////////////
        // Generate GUID
        //
        ///////////////////////////////////////////////////////////////////////////
        function newGuid() {
            var d = new Date().getTime();
            var guid = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
            return guid;
        };

        ///////////////////////////////////////////////////////////////////////////
        // add new material
        //
        ///////////////////////////////////////////////////////////////////////////
        function addMaterial(color, id) {
            var material = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);

            _self.viewer.impl.createOverlayScene(id, material, material);
            return material;
        }

        ///////////////////////////////////////////////////////////////////////////
        // Set color for nodes
        // objectIds should be an array of dbId
        // 
        //
        ///////////////////////////////////////////////////////////////////////////
        Autodesk.Viewing.Viewer3D.prototype.setColorMaterial = function (objectIds, color, id) {

            var material = addMaterial(color, id);

            for (var i = 0; i < objectIds.length; i++) {

                var dbid = objectIds[i];

                //from dbid to node, to fragid
                var it = _self.viewer.model.getData().instanceTree;

                it.enumNodeFragments(dbid, function (fragId) {


                    var renderProxy = _self.viewer.impl.getRenderProxy(_self.viewer.model, fragId);

                    renderProxy[id] = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy[id].matrix.copy(renderProxy.matrixWorld);
                    renderProxy[id].matrixWorldNeedsUpdate = true;
                    renderProxy[id].matrixAutoUpdate = false;
                    renderProxy[id].frustumCulled = false;

                    _self.viewer.impl.addOverlay(id, renderProxy[id]);
                    _self.viewer.impl.invalidate(true);

                }, false);
            }

        }


        Autodesk.Viewing.Viewer3D.prototype.restoreColorMaterial = function (objectIds, id) {
            for (var i = 0; i < objectIds.length; i++) {

                var dbid = objectIds[i];


                //from dbid to node, to fragid
                var it = _self.viewer.model.getData().instanceTree;

                it.enumNodeFragments(dbid, function (fragId) {


                    var renderProxy = _self.viewer.impl.getRenderProxy(_self.viewer.model, fragId);

                    if (renderProxy[id]) {

                        //remove all overlays with same name
                        _self.viewer.impl.clearOverlay(id);
                        //_self.viewer.impl.removeOverlay(id, renderProxy[id]);
                        delete renderProxy[id];


                        //refresh the sence
                        _self.viewer.impl.invalidate(true);


                    }


                }, true);
            }


        }


        Autodesk.Viewing.Viewer3D.prototype.colorAllMaterials = function (objects) {

            for (var i = 0; i < objects.length; i++) {
                this.setColorMaterial(objects[i].ids, objects[i].color, objects[i].id);
            }
        }

        Autodesk.Viewing.Viewer3D.prototype.restoreAllMaterialColor = function (objects) {
            for (var i = 0; i < objects.length; i++) {
                this.restoreColorMaterial(objects[i].ids, objects[i].id);
            }
        }



        _self.unload = function () {
            console.log('Autodesk.ADN.Viewing.Extension.Color unloaded');
            return true;
        };

        return true;
    };
};
Autodesk.ADN.Viewing.Extension.Color.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
Autodesk.ADN.Viewing.Extension.Color.prototype.constructor = Autodesk.ADN.Viewing.Extension.Color;
Autodesk.Viewing.theExtensionManager.registerExtension('Autodesk.ADN.Viewing.Extension.Color', Autodesk.ADN.Viewing.Extension.Color);