<template>
  <div></div>
</template>

<script>
import Vue from "vue";

export default {
  name: "ForgeContent",
  data() {
    return {};
  },
  mounted() {
    Vue.prototype.$ForgeViewer.start_viewer(this.$el);
  }
};
</script>
