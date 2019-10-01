<template>
  <div id="app"
       v-cloak>
    <md-app md-waterfall
            md-mode="fixed">
      <md-app-toolbar class="app-header">
        <spinalHeader v-model="menuVisible" />
      </md-app-toolbar>
      <md-app-drawer class="md-right"
                     :md-active.sync="menuVisible">
        <SpinalRightSideBar v-model="menuVisible" />
      </md-app-drawer>

      <md-app-content>
        <MainContent />
      </md-app-content>
    </md-app>

  </div>
</template>

<script>
import spinalHeader from "./header/SpinalHeader.vue";
import SpinalRightSideBar from "./RightSideBar/SpinalRightSideBar.vue";
import MainContent from "./MainContent/MainContent.vue";

export default {
  name: "app",
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    closeSidebar() {
      this.menuVisible = false;
    }
  },

  components: { spinalHeader, SpinalRightSideBar, MainContent },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>

<style scoped>
#app .md-app {
  /* height: 100vh; */
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  /* position: relative; */
}
.app-header {
  color: black;
  background-color: #fff;
}
.md-app-content {
  height: 100%;
  position: relative;
  padding: 0;
}
</style>
<style>
.md-app-container {
  overflow: hidden;
}
</style>
