import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import VTooltip from "v-tooltip";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import spinal from "./SpinalSystem/spinal";
window.Plotly = require("plotly.js");

import "./main.css";
import "./app.css";

Vue.use(spinal);
Vue.use(VueMaterial);
Vue.use(VTooltip);
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

new Vue({
  el: "#app",
  render: h => h(App)
});
