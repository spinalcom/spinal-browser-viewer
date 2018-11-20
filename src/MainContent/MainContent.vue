<template>
  <div id="autodesk_forge_viewer"></div>
</template>

<script>
import Vue from "vue";

export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    Vue.prototype.$ForgeViewer.start_viewer(this.$el);
  }
};
</script>
