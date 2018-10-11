import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import spinal from "./SpinalSystem/spinal";
Vue.use(spinal);

import "./app.css";

Vue.use(VueMaterial);

new Vue({
  el: "#app",
  render: h => h(App)
});
