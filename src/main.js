import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import Rx from "rxjs/Rx";
import VueRx from "vue-rx";

Vue.use(VueRx, Rx);

import "./app.css";

Vue.use(VueMaterial);

new Vue({
  el: "#app",
  render: h => h(App)
});
