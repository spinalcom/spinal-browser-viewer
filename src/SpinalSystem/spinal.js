import SpinalSystem from "./SpinalSystem";
import ForgeViewer from "../MainContent/ForgeViewer.js";
import ForgeExtentionManager from "../MainContent/ForgeExtentionManager.js";

window.spinal = {};

window.spinal.spinalSystem = new SpinalSystem();
window.spinal.ForgeExtentionManager = new ForgeExtentionManager();
window.spinal.ForgeViewer = new ForgeViewer();

export default {
  install(Vue) {
    Vue.prototype.$spinalSystem = window.spinal.spinalSystem;
    Vue.prototype.$ForgeViewer = window.spinal.ForgeViewer;
    Vue.prototype.$ForgeExtentionManager = window.spinal.ForgeExtentionManager;
  },
  spinalSystem: window.spinal.spinalSystem,
  ForgeViewer: window.spinal.ForgeViewer,
  ForgeExtentionManager: window.spinal.ForgeExtentionManager
};
