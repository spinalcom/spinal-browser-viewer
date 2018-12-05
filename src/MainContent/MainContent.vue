<template>
  <div style="overflow: hidden">
    <forge-content />
    <model-explorer style="overflow: hidden" />
  </div>
</template>

<script>
import Vue from "vue";
import ForgeContent from "./ForgeContent.vue";
import ModelExplorer from "./ModelExplorer/ModelExplorer.vue";
export default {
  name: "app",
  components: { ForgeContent, ModelExplorer },
  data() {
    return {};
  },
  mounted() {}
};
</script>
