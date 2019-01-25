<template>
  <div>
    <p v-if="show && list.length === 0"
       class="spinal-forge-model-explorer-loading">Loading...</p>

    <transition-group tag="md-content"
                      v-bind:css="false"
                      v-on:before-enter="beforeEnter"
                      v-on:enter="enter"
                      v-on:leave="leave"
                      class="spinal-forge-model-explorer-list md-scrollbar">

      <div class="md-button spinal-forge-model-explorer-list-row"
           v-show="show"
           v-for="(item, idx) in list"
           :key="idx"
           @click="$emit('onModelSelect', item, idx)">
        <div class="spinal-forge-model-explorer-list-row-label"
             v-tooltip.auto-end="{content: item.name, delay: 500}">
          <span class="spinal-forge-model-explorer-list-row-label-span">{{item.name}}</span>
        </div>
        <md-button v-if="item.loaded === true"
                   class="md-icon-button spinal-forge-model-explorer-list-row-icon spinal-forge-model-explorer-list-row-icon-first"
                   v-tooltip="{content:'Open transform settings', delay: 500}"
                   @click.native.stop="$emit('onModelExplorerSettingsSelect', item, idx)">
          <md-icon>settings</md-icon>
        </md-button>

        <md-button v-if="item.loaded === true"
                   class="md-icon-button spinal-forge-model-explorer-list-row-icon"
                   v-tooltip="{content:'Select and fit to view', delay: 500}"
                   @click.native.stop="$emit('onModelVisibilitySelect', item, idx)">
          <md-icon>gps_fixed</md-icon>
        </md-button>
        <md-button v-if="item.loaded === true"
                   class="md-icon-button spinal-forge-model-explorer-list-row-icon"
                   v-tooltip="{content:'Open transform settings', delay: 500}"
                   @click.native.stop="$emit('onModelCheckSelect', item, idx)">
          <md-icon :style="checkStyle(item)">check</md-icon>
        </md-button>
      </div>
    </transition-group>
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import ModelExplorerService from "./ModelExplorerService.js";

export default {
  name: "ModelExplorerList",
  props: ["show", "list"],
  data() {
    return {};
  },
  methods: {
    checkStyle(item) {
      if (ModelExplorerService.isCurrentModel(item) === true)
        return { color: "#F68204" };
      return {};
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "48px" }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>

<style scoped>
.spinal-forge-model-explorer-loading {
  text-align: center;
}

.spinal-forge-model-explorer-list {
  padding: 0;
  border-radius: 5px;
  max-height: calc(100vh - 109px);
  overflow-y: auto;
}

.spinal-forge-model-explorer-list-row {
  cursor: pointer;
  display: flex;
  align-content: flex-start;
  text-align: center;
  align-items: center;
  margin: 1px;
}
.spinal-forge-model-explorer-list-row :first-child {
  margin-top: 5px;
}
.spinal-forge-model-explorer-list-row :first-child:empty {
  margin-top: 0;
}
.spinal-forge-model-explorer-list-row :last-child {
  margin-bottom: 5px;
}
.spinal-forge-model-explorer-list-row :last-child:empty {
  margin-bottom: 0;
}
.spinal-forge-model-explorer-list-row:hover {
  background-color: #356bab;
}

.spinal-forge-model-explorer-list-row-icon {
  margin-left: 0px;
  margin-right: 0px;
}

.spinal-forge-model-explorer-list-row-icon-first {
  margin-left: 8px;
}

.spinal-forge-model-explorer-list-row-label {
  flex-basis: 100%;
  align-self: stretch;
  text-align: left;
  margin: 0;
  margin-left: 8px;
  line-height: 1.2;
  padding-left: 0.5em;
  padding-top: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 195px;
}
.spinal-forge-model-explorer-list-row-label-span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
