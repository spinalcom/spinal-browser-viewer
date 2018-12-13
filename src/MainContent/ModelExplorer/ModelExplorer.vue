<template>
  <div class="spinal-forge-model-explorer-container noselect">
    <md-content class="spinal-forge-model-explorer"
                :class="{'spinal-forge-model-explorer-hidden':!isListShown}">
      <btn-icon-label-transition style="width:100%"
                                 v-model="isListShown"
                                 :icon="'layers'"
                                 :label="labelBtn" />
      <model-explorer-list :list="list"
                           @onModelSelect="onModelSelect"
                           @onModelCheckSelect="onModelCheckSelect"
                           @onModelVisibilitySelect="onModelVisibilitySelect"
                           @onModelExplorerSettingsSelect="onModelExplorerSettingsSelect"
                           :show="isListShown"></model-explorer-list>
    </md-content>
    <model-explorer-settings class="model-explorer-settings-container"
                             @onUpdateSetting="onUpdateSetting"
                             :item="selectedNodeSettings"
                             :value="computedIsSettingShow"
                             @input="isSettingShow = $event" />
  </div>
</template>

<script>
import ModelExplorerList from "./ModelExplorerList.vue";
import BtnIconLabelTransition from "./BtnIconLabelTransition.vue";
import ModelExplorerService from "./ModelExplorerService.js";

import ModelExplorerSettings from "./ModelExplorerSettings/ModelExplorerSettings.vue";

export default {
  name: "ModelExplorer",
  data() {
    this.ForgeViewer = null;
    return {
      labelBtn: "Model Explorer",
      isListShown: false,
      list: [],
      selectedNodeSettings: null,
      isSettingShow: false // DEBUG CHANGE TO FALSE ON RELEASE
    };
  },
  components: {
    ModelExplorerList,
    BtnIconLabelTransition,
    ModelExplorerSettings
  },
  computed: {
    computedIsSettingShow() {
      return (
        this.isSettingShow == true &&
        this.selectedNodeSettings !== null &&
        this.selectedNodeSettings.loaded == true
      );
    }
  },
  methods: {
    onModelSelect(item) {
      ModelExplorerService.toogleView(item);
    },
    onModelCheckSelect(item) {
      ModelExplorerService.setCurrentModel(item);
    },
    onModelVisibilitySelect(item) {
      ModelExplorerService.selectModel(item);
    },
    onModelExplorerSettingsSelect(item) {
      if (
        this.isSettingShow === false ||
        (this.isSettingShow === true && this.selectedNodeSettings !== item)
      ) {
        this.selectedNodeSettings = item;
        this.isSettingShow = true;
      } else {
        this.selectedNodeSettings = null;
        this.isSettingShow = false;
      }
    },
    onUpdateSetting(item, translate, rotate, scale) {
      item.translate = translate;
      item.rotate = rotate;
      item.scale = scale;

      ModelExplorerService.transformModel(item);
    }
  },
  mounted() {
    ModelExplorerService.getModelList()
      .then(list => {
        this.list = list;
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
.spinal-forge-model-explorer-container {
  pointer-events: none;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
}

.spinal-forge-model-explorer {
  pointer-events: auto;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #2d3d93;
}
.spinal-forge-model-explorer-hidden {
  opacity: 0.5;
}
.spinal-forge-model-explorer-opn-btn {
  margin: 0px 0;
  min-width: 20px;
}
.model-explorer-settings-container {
  pointer-events: auto;
}
</style>

<style>
.slide-fade-enter-active {
  transition: all 1s;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome and Opera */
}
</style>
