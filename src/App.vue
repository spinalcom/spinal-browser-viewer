<template>
  <div id="app"
       v-cloak>
    <md-app md-waterfall
            md-mode="fixed">
      <md-app-toolbar class="app-header">
        <spinalHeader />
      </md-app-toolbar>
      <md-app-drawer class="md-right"
                     :md-active.sync="menuVisible">
        <SpinalRightSideBar />
      </md-app-drawer>

      <md-app-content>
        <MainContent />
      </md-app-content>
    </md-app>

  </div>
</template>

<script>
import spinalHeader from "./header/SpinalHeader.vue";
import HeaderCtrl from "./header/HeaderCtrl.vue";
import SpinalRightSideBar from "./RightSideBar/SpinalRightSideBar.vue";
import MainContent from "./MainContent/MainContent.vue";

export default {
  name: "app",
  data() {
    return {
      menuVisibleObs: false
    };
  },
  computed: {
    menuVisible: {
      get: function() {
        return this.menuVisibleObs;
      },
      set: function(newValue) {
        HeaderCtrl.setViewMenu(newValue);
      }
    }
  },
  created() {
    // var vm = this;
  },
  mounted() {
    var vm = this;
    this.$subscribeTo(HeaderCtrl.getObservable(), function(val) {
      vm.menuVisibleObs = val;
    });
  },

  components: { spinalHeader, SpinalRightSideBar, MainContent }
};
</script>

<style scoped>
#app .md-app {
  height: 100vh;
  overflow: hidden;
}
.app-header {
  color: black;
  background-color: #fff;
}
.md-app-content {
  height: calc(100vh - 64px) !important;
  position: relative;
  padding: 0;
}
</style>
<style>
.md-app-container {
  overflow: hidden;
}
</style>
