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
  <div :class="{ 'is-dark': dark }" class="week-days flex">
    <div
      v-for="(weekDay, index) in weekDays"
      :key="index"
      class="flex-1 text-muted lm-fs-12 flex justify-content-center align-center week-days-container"
    >
      {{ weekDay }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekDays',
  props: {
    weekDays: { type: Array, default: () => [], required: true },
    dark: { type: Boolean, default: null },
  },
};
</script>

<style lang="scss" scoped>
.week-days {
  height: 41px;
  text-transform: capitalize;
  &.is-dark .week-days-container {
    color: #a8a8a8 !important;
  }
}
// @media screen and (max-width: 415px) {
//   &:not(.inline) {
//     .datepicker-week {
//       height: 21px !important;
//     }
// }
// }
</style>
