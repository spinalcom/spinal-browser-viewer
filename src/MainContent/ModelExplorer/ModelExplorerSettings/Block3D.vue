<template>
  <div>
    <div class="model-explorer-settings-block3d-label">{{label}}</div>
    <table>
      <sliderLabel :label="'x'"
                   v-model="computed_x"
                   :min=min
                   :max=max>
      </sliderLabel>
      <sliderLabel :label="'y'"
                   v-model="computed_y"
                   :min=min
                   :max=max>
      </sliderLabel>
      <sliderLabel :label="'z'"
                   v-model="computed_z"
                   :min=min
                   :max=max>
      </sliderLabel>
    </table>
  </div>
</template>

<script>
const debounce = require("lodash.debounce");
import sliderLabel from "./sliderLabel.vue";

export default {
  name: "Block3D",
  props: ["value", "label", "min", "max"],
  components: { sliderLabel },
  data() {
    return {
      tmp: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },
  computed: {
    computed_x: {
      get() {
        return this.value.x || 0;
      },
      set(newVal) {
        this.tmp.x = newVal;
        this.updatebinded();
      }
    },
    computed_y: {
      get() {
        return this.value.y || 0;
      },
      set(newVal) {
        this.tmp.y = newVal;
        this.updatebinded();
      }
    },
    computed_z: {
      get() {
        return this.value.z || 0;
      },
      set(newVal) {
        this.tmp.z = newVal;
        this.updatebinded();
      }
    }
  },
  methods: {
    update() {
      this.$emit("input", this.tmp);
    }
  },
  mounted() {
    this.updatebinded = debounce(this.update.bind(this), 500);
  }
};
</script>

<style>
.model-explorer-settings-block3d-label {
  text-align: center;
  background-color: #222;
  border-radius: 5px;
}
</style>
