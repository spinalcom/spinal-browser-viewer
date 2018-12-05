<template>
  <md-button class="md-raised spinal-forge-model-explorer-opn-btn"
             v-tooltip="label"
             @click="onClickModelExplorer">
    <md-icon class="md-small">layers</md-icon>
    <transition v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave">
      <span v-show=computedValue>{{label}}</span>
    </transition>
  </md-button>
</template>


<script>
import Velocity from "velocity-animate";

export default {
  name: "BtnIconLabelTransition",
  props: ["value", "label", "icon"],
  data() {
    return {};
  },
  computed: {
    computedValue() {
      return this.value;
    }
  },
  methods: {
    onClickModelExplorer() {
      this.$emit("input", !this.computedValue);
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.width = 0;
    },
    enter: function(el, done) {
      setTimeout(() => {
        Velocity(el, { opacity: 1, width: "100%" }, { complete: done });
      }, 100);
    },
    leave: function(el, done) {
      setTimeout(() => {
        Velocity(el, { opacity: 0, width: "0px" }, { complete: done });
      }, 100);
    }
  },
  mounted() {
    // window.spinal.ForgeViewer.loadModel.call(window.spinal.ForgeViewer, window.spinal.ForgeViewer.docs[1].path)
  }
};
</script>

<style scoped>
.spinal-forge-model-explorer-opn-btn {
  background-color: #2d3d93 !important;
}
</style>
