import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import spinal from "./SpinalSystem/spinal";
import VTooltip from "v-tooltip";

Vue.use(spinal);
import "./app.css";

Vue.use(VueMaterial);
Vue.use(VTooltip);

new Vue({
  el: "#app",
  render: h => h(App)
});
