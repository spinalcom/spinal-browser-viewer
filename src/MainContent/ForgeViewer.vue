
<template>

</template>

<script>
import spinal from "../SpinalSystem/spinal.js";
import ForgeExtentionManager from "./ForgeExtentionManager.vue";
// import ForgeExtention from "./ForgeExtention.vue";
export default new class ForgeViewer {
  constructor() {
    console.log("forge");
    this.oViewer;
    this.config = {};
    this.options = {
      env: "Local",
      docid: "",
      useADP: false
    };
    this.docs = [];
    ForgeExtentionManager.addExtention("Autodesk.ADN.Viewing.Extension.Color");
  }
  start_viewer(dom) {
    let _self = this;

    spinal
      .getModel()
      .then(forgefile => {
        this.forgeFile = forgefile;
        this.docs = this.forgeFile._children.get();
        if (this.docs.length != 0) {
          var path = this.docs[0].path;
          for (var i = 0; i < this.docs.length; i++) {
            if (/.+\.svf$/.test(this.docs[i].path)) {
              path = this.docs[i].path;
              break;
            }
          }
          path = window.location.origin + path;
          this.options.docid = path;
        }
        console.log();
        this.oViewer = new Autodesk.Viewing.Private.GuiViewer3D(
          dom,
          this.config
        ); // With toolbar
        Autodesk.Viewing.Initializer(this.options, () => {
          this.oViewer.initialize();
          this.oViewer.loadModel(
            this.options.docid,
            this.config,
            onItemLoadSuccess,
            onDocumentLoadFailure
          );
        });
        function onDocumentLoadFailure(viewerErrorCode) {
          console.error(
            "onDocumentLoadFailure() - errorCode:" + viewerErrorCode
          );
        }

        function onItemLoadSuccess(viewer, item) {
          _self.oViewer.addEventListener(
            Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            onGeometryLoadEvent
          );
        }
        function onGeometryLoadEvent() {
          _self.oViewer.removeEventListener(
            Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            onGeometryLoadEvent
          );
          let extensions = ForgeExtentionManager.getExtentions();
          // let extensions = ["Autodesk.ADN.Viewing.Extension.Color"];
          for (var i = 0; i < extensions.length; i++) {
            _self.oViewer.loadExtension(extensions[i], _self.options);
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}();
</script>
