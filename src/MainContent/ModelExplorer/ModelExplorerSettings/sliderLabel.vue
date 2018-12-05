<template>
  <tr class="sliderLabel-container">
    <td><span>{{label}}:</span></td>
    <td class="sliderLabel-slider-cell">
      <VueSlideBar ref="slider"
                   style="padding: 28px 8px 0;"
                   class="sliderLabel-slider"
                   :paddingless=true
                   :label-style=labelStyle
                   v-model="computedValue"
                   :min="min"
                   :max="max" />
    </td>
    <td>
      <input type="Number"
             v-model="computedValue"
             :min="min"
             :max="max"
             class="sliderLabel-input" />
    </td>
  </tr>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  name: "sliderLabel",
  props: ["value", "label", "min", "max"],
  data() {
    return {};
  },
  components: {
    VueSlideBar
  },
  computed: {
    computedValue: {
      get() {
        return parseInt(this.value);
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style>
.sliderLabel-container {
  width: 300px;
}

.sliderLabel-input {
  height: 40px;
  width: 4em;
  text-align: center;
  background-color: transparent;
  color: aliceblue;
}
.sliderLabel-slider-cell {
  width: 100%;
}
</style>

<style scoped>
.quantity {
  position: relative;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.quantity input {
  background-color: transparent;
  color: aliceblue;
  width: 45px;
  height: 42px;
  line-height: 1.65;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  padding-left: 20px;
  border: 1px solid #eee;
}

.quantity input:focus {
  outline: 0;
}

.quantity-nav {
  float: left;
  position: relative;
  height: 42px;
}

.quantity-button {
  position: relative;
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 20px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.quantity-button.quantity-up {
  position: absolute;
  height: 50%;
  top: 0;
  border-bottom: 1px solid #eee;
}

.quantity-button.quantity-down {
  position: absolute;
  bottom: -1px;
  height: 50%;
}
</style>
