<template>
  <div>
    <md-toolbar class="app-header"
                md-elevation="0">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <img src="dist/assets/img/SpinalBIMViewerLogo.png"
               alt="SpinalBIM Vieewer"
               style="height: 42px;margin-top: 4px;">
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button color_black"
                     v-on:click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>

    <md-list>
      <md-list-item @click="go_toDrive">
        <md-icon>keyboard_return</md-icon>
        <span class="md-list-item-text">Return to SpinalBIM Drive</span>
      </md-list-item>

      <md-list-item @click="sign_out">
        <md-icon>power_settings_new</md-icon>
        <span class="md-list-item-text">Sign out</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SpinalRightSideBar",
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      this.$emit("input", !this.value);
    },
    go_toDrive() {
      window.location = "/html/drive/";
    },
    sign_out() {
      Vue.prototype.$spinalSystem.signOut();
      window.location = "/html/drive/#!/login');";
    }
  },
  created() {}
};
// components: { Chart }</script>

<style scoped>
#app .md-app {
  height: 100vh;
}
.app-header {
  color: black;
  background-color: #fff;
}
.color_black .md-button,
.color_black .md-icon,
.color_black div {
  color: black !important;
}
</style>
