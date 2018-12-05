<template>
  <md-button class="md-raised spinal-forge-model-explorer-settings-btn"
             v-tooltip="label"
             @click="onClickModelExplorer">
    <span>{{label}}</span>
  </md-button>
</template>


<script>
export default {
  name: "ModelExplorerSettingsHeader",
  props: ["value", "label", "icon"],
  data() {
    return {};
  },
  computed: {
    computedValue() {
      return this.value;
    },
    computedLabel() {
      if (this.label) return this.label;
      return "";
    }
  },
  methods: {
    onClickModelExplorer() {
      this.$emit("input", !this.computedValue);
    }
  }
};
</script>

<style scoped>
.spinal-forge-model-explorer-settings-btn {
  background-color: #2d3d93 !important;
  margin: 0;
}
</style>
