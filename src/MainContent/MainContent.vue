<template>
  <div style="overflow: hidden"
       class="spinal-browser-viewer-integration"
       :class="{
         'graph-manager-0': grahManagerHidden === 0,
         'graph-manager-1': grahManagerHidden === 1,
         'graph-manager-2': grahManagerHidden === 2
       }">
    <spinal-forge-viewer-vue class="spinal-forge-viewer"
                             :onInitialize="onInitialize"
                             :model-property="{path : '/models/Resource/3D View/{3D} 341878/{3D}.svf' }"
                             :headless="false" />
    <div class="graph-manager-container">
      <md-button @click="onClickHide"
                 class="graph-manager-hide">
        <i class="material-icons">{{iconArrow}}</i>
      </md-button>
      <md-button @click="onClickHide"
                 class="graph-manager-hide-verti">
        <i class="material-icons">{{iconArrowVerti}}</i>
      </md-button>
      <div id="graph-manager-side"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import { SpinalForgeViewerVue } from "spinal-forge-viewer-vue";

export default {
  name: "app",
  components: { SpinalForgeViewerVue },
  data() {
    return {
      grahManagerHidden: 1
    };
  },
  computed: {
    iconArrow() {
      return this.grahManagerHidden > 1
        ? "keyboard_arrow_down"
        : "keyboard_arrow_up";
    },
    iconArrowVerti() {
      return this.grahManagerHidden > 1
        ? "keyboard_arrow_right"
        : "keyboard_arrow_left";
    }
  },
  watch: {
    grahManagerHidden() {
      if (Vue.prototype.$ForgeViewer.viewer) {
        setTimeout(() => {
          Vue.prototype.$ForgeViewer.viewer.resize();
        }, 50);
      }
    }
  },
  methods: {
    onInitialize: function(viewerManager) {
      Vue.prototype.$ForgeViewer.viewer = viewerManager.viewer;
      Vue.prototype.$ForgeViewer.viewerManager = viewerManager;
      Vue.prototype.$ForgeExtentionManager.viewer = viewerManager.viewer;
    },
    onClickHide() {
      this.grahManagerHidden = (this.grahManagerHidden + 1) % 3;
      console.log("this.grahManagerHidden", this.grahManagerHidden);
    }
  },

  mounted() {}
};
</script>
<style>
.graph-manager-side {
  height: 100%;
}

.spinal-forge-viewer {
  flex-grow: 3;
  position: relative;
}

.spinal-browser-viewer-integration {
  display: flex;
  height: 100%;
}
.spinal-browser-viewer-integration > .graph-manager-container {
  position: relative;
  display: flex;
  height: 100%;
}
.spinal-browser-viewer-integration
  > .graph-manager-container
  > #graph-manager-side {
  height: 100%;
  width: 100%;
}

.graph-manager-hide-verti {
  width: 16px;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: unset;
}
.graph-manager-hide {
  display: none;
  width: 16px;
  margin: 0;
  padding: 0;
  min-width: unset;
}
.spinal-browser-viewer-integration.graph-manager-0
  > .graph-manager-container
  > .plugin-graph-viewer {
  display: none;
}
.spinal-browser-viewer-integration.graph-manager-2
  > .graph-manager-container
  > .plugin-graph-viewer {
  width: 100%;
}

.spinal-browser-viewer-integration.graph-manager-0 > .spinal-forge-viewer {
  width: 100% !important;
}
.spinal-browser-viewer-integration.graph-manager-2 > .spinal-forge-viewer {
  width: 50% !important;
}

.spinal-browser-viewer-integration.graph-manager-0 > .graph-manager-container {
  width: 16px;
}
.spinal-browser-viewer-integration.graph-manager-2 > .graph-manager-container {
  width: calc(50% - 16px);
}

@media screen and (max-width: 992px) {
  .spinal-browser-viewer-integration {
    flex-direction: column;
  }
  .spinal-browser-viewer-integration > .graph-manager-container {
    height: 50%;
    flex-direction: column;
  }
  .spinal-browser-viewer-integration.graph-manager-0 > .spinal-forge-viewer {
    height: 100% !important;
  }
  .spinal-browser-viewer-integration.graph-manager-1 > .spinal-forge-viewer {
    height: 75% !important;
  }
  .spinal-browser-viewer-integration.graph-manager-2 > .spinal-forge-viewer {
    height: 50% !important;
    width: 100% !important;
  }

  .spinal-browser-viewer-integration.graph-manager-0
    > .graph-manager-container {
    height: 16px;
    width: 100% !important;
  }
  .spinal-browser-viewer-integration.graph-manager-1
    > .graph-manager-container {
    height: calc(25% - 16px);
    width: 100% !important;
  }
  .spinal-browser-viewer-integration.graph-manager-2
    > .graph-manager-container {
    height: calc(50% - 16px);
    width: 100% !important;
  }

  .spinal-browser-viewer-integration
    > .graph-manager-container
    > .plugin-graph-viewer {
    width: 100%;
    height: calc(100% - 16px) !important;
    position: relative;
  }
  .graph-manager-hide {
    width: 100%;
    display: block;
    height: 16px !important;
  }
  .graph-manager-hide-verti {
    display: none;
  }
}
</style>
