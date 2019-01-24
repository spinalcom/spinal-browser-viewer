import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import spinal from "./SpinalSystem/spinal";
Vue.use(spinal);
import "./app.css";

Vue.use(VueMaterial);

import VTooltip from "v-tooltip";
Vue.use(VTooltip);

import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

new Vue({
  el: "#app",
  render: h => h(App)
});
