<!--
Copyright 2023 SpinalCom - www.spinalcom.com

This file is part of SpinalCore.

Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.

This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.

If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <div id="app" v-cloak>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="app-header">
        <spinalHeader v-model="menuVisible" />
      </md-app-toolbar>
      <md-app-drawer class="md-right" :md-active.sync="menuVisible">
        <SpinalRightSideBar v-model="menuVisible" />
      </md-app-drawer>

      <md-app-content>
        <MainContent />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import spinalHeader from './header/SpinalHeader.vue';
import SpinalRightSideBar from './RightSideBar/SpinalRightSideBar.vue';
import MainContent from './MainContent/MainContent.vue';

export default {
  name: 'app',
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    closeSidebar() {
      this.menuVisible = false;
    },
  },

  components: { spinalHeader, SpinalRightSideBar, MainContent },
  mounted() {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
};
</script>

<style scoped>
#app .md-app {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
.app-header {
  color: black !important;
  background-color: #fff !important;
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
