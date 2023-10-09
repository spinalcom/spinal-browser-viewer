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
  <div>
    <md-toolbar class="app-header" md-elevation="0">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <img
            src="SpinalBIMViewerLogo.png"
            alt="SpinalBIM Vieewer"
            style="height: 42px; margin-top: 4px"
          />
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button color_black" v-on:click="toggleMenu">
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
      <md-list-item>
        <VueCtkDateTimePicker v-model="yourValue" />
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'SpinalRightSideBar',
  props: ['value'],
  data() {
    return {
      yourValue: '',
    };
  },
  methods: {
    toggleMenu() {
      this.$emit('input', !this.value);
    },
    go_toDrive() {
      window.location = '/html/drive/';
    },
    sign_out() {
      Vue.prototype.$spinalSystem.signOut();
      window.location = "/html/drive/#!/login');";
    },
  },
  created() {},
};
</script>

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
