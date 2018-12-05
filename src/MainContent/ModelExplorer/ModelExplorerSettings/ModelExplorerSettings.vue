<template>
  <transition v-bind:css="false"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave">
    <div v-if="computedShow">
      <model-explorer-settings-header style="width:100%"
                                      :icon="'settings'"
                                      :label="item.name"
                                      v-model="computedShow" />
      <md-content class="model-explorer-settings-transform-container">
        <div class="model-explorer-settings-scale-label">scale</div>
        <sliderLabel ref="scaleblock"
                     :label="'scale'"
                     :value="scale"
                     @input="onUpdateScale"
                     :min=0
                     :max=300>
        </sliderLabel>
        <Block3D ref="translateblock"
                 @input="onUpdate3dblock($event, translate)"
                 :value="translate"
                 :label="'translate'"
                 :min=-1000
                 :max=1000></Block3D>
        <Block3D @input="onUpdate3dblock($event, rotate)"
                 :value="rotate"
                 :label="'rotate'"
                 :min=-180
                 :max=180></Block3D>

      </md-content>
    </div>
  </transition>
</template>

<script>
import Velocity from "velocity-animate";
import ModelExplorerSettingsHeader from "./ModelExplorerSettingsHeader.vue";
import sliderLabel from "./sliderLabel.vue";
import Block3D from "./Block3D.vue";
const debounce = require("lodash.debounce");

export default {
  name: "ModelExplorerSettings",
  components: { ModelExplorerSettingsHeader, sliderLabel, Block3D },
  props: ["value", "item"],
  data() {
    return {
      translate: {
        x: 0,
        y: 0,
        z: 0
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: 100
    };
  },

  watch: {
    item(obj) {
      if (obj != null) {
        if (obj.translate)
          this.translate = {
            x: obj.translate.x,
            y: obj.translate.y,
            z: obj.translate.z
          };
        else
          this.translate = {
            x: 0,
            y: 0,
            z: 0
          };

        if (obj.rotate)
          this.rotate = {
            x: obj.rotate.x,
            y: obj.rotate.y,
            z: obj.rotate.z
          };
        else
          this.rotate = {
            x: 0,
            y: 0,
            z: 0
          };
        if (obj.scale) {
          this.scale = obj.scale * 100;
        } else {
          this.scale = 100;
        }
        // this.$nextTick(() => {
        //   this.$refs.translateblock.$forceUpdate();
        //   this.$refs.scaleblock.$forceUpdate();
        // });
      }
    }
  },

  computed: {
    computedShow: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("input", !this.value);
      }
    }
  },
  methods: {
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
    },
    onUpdate3dblock(evt, obj) {
      obj.x = evt.x;
      obj.y = evt.y;
      obj.z = evt.z;
      this.onUpdateDataBinded();
    },
    onUpdateScale(value) {
      this.scale = value;
      this.onUpdateDataBinded();
    },
    onUpdateData() {
      this.$emit(
        "onUpdateSetting",
        this.item,
        this.translate,
        this.rotate,
        this.scale / 100.0
      );
    }
  },
  mounted() {
    this.onUpdateDataBinded = debounce(this.onUpdateData.bind(this), 200);
  }
};
</script>

<style scoped>
.model-explorer-settings-transform-container {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 2px 8px 5px;
  width: 275px;
}
.model-explorer-settings-scale-label {
  text-align: center;
  background-color: #222;
  border-radius: 5px;
}
</style>
