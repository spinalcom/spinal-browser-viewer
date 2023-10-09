/*
 * Copyright 2023 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */
import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import VTooltip from 'v-tooltip';
import spinal from './SpinalSystem/spinal';
import vClickOutside from 'v-click-outside';
Vue.use(vClickOutside);

import VueCtkDateTimePicker from './assets/vue-ctk-date-time-picker/index.vue';
// @ts-ignore
window.Autodesk.Viewing.Private.analytics.optOut();

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

import './main.css';
import './app.css';

Vue.use(spinal);
Vue.use(VueMaterial);
Vue.use(VTooltip);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
