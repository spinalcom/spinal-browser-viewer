<template>
    <div style="overflow: hidden" class="spinal-browser-viewer-integration">


        <spinal-forge-viewer-vue class="spinal-forge-viewer"
                                 :onInitialize="onInitialize"
                                 :model-property="{path : '/models/Resource/3D View/{3D} 341878/{3D}.svf' }"
                                 :headless="false"/>
        <div id="graph-manager-side"></div>
    </div>
</template>

<script>
  import Vue from "vue";

  import { SpinalForgeViewerVue } from "spinal-forge-viewer-vue";


  export default {
    name: "app",
    components: { SpinalForgeViewerVue },
    data() {
      return {};
    },
    methods: {
      onInitialize: function ( viewerManager ) {
        Vue.prototype.$ForgeViewer.viewer = viewerManager.viewer;
        Vue.prototype.$ForgeViewer.viewerManager = viewerManager;
        Vue.prototype.$ForgeExtentionManager.viewer = viewerManager.viewer;

      }
    },

    mounted() {}
  };
</script>
<style>
    .graph-manager-side {
        width: 20%;
    }

    .spinal-forge-viewer {
        width: 70%;
        flex-grow: 3;
        position: relative;
    }

    .spinal-browser-viewer-integration {
        display: flex;
        height: 100%;
    }
</style>

