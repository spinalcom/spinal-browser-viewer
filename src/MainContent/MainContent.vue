<template>
  <div id="autodesk_forge_viewer"></div>
</template>

<script>
import ForgeViewer from "./ForgeViewer.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    ForgeViewer.start_viewer(this.$el);
    console.log(this);
  }
};
</script>

<style scoped>
</style>
