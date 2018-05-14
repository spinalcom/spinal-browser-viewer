 <template>
  <div class="md-toolbar-row">
    <div class="md-toolbar-section-start">
      <img src="dist/assets/img/SpinalBIMViewerLogo.png"
           alt="SpinalBIM Viewer"
           style="height: 42px;margin-top: 4px;">
    </div>
    <div class="md-toolbar-section-end">
      {{username}}
      <md-button class="md-icon-button"
                 v-on:click="toggleMenu">
        <md-icon>menu</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import spinal from "../SpinalSystem/spinal";
import HeaderCtrl from "../header/HeaderCtrl.vue";

export default {
  name: "spinalHeader",
  data() {
    // var vm = this;
    return {
      toggleMenu: () => {
        HeaderCtrl.toggleMenu();
      },
      username: ""
    };
  },
  created() {
    var vm = this;
    vm.username = spinal.spinalSystem.getUser().username;
  }
};
// http://localhost:7777/html/viewer/?path=L19fdXNlcnNfXy9hZG1pbi9kYXRhY2VudGVyd2l0aHNlcnZlcnM=
</script>

<style scoped>
.md-button,
.md-icon,
div {
  color: black !important;
}
</style>
