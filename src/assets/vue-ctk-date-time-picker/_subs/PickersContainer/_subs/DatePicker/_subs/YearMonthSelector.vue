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
  <div
    class="year-month-selector flex flex-direction-column"
    :class="{ dark: dark }"
  >
    <div class="flex justify-content-right">
      <CustomButton
        :color="dark ? '#757575' : '#424242'"
        :dark="dark"
        with-border
        @click="$emit('back')"
      >
        <span class="fs-16"> ✕ </span>
      </CustomButton>
    </div>
    <div class="flex-1 flex flex-wrap justify-content-between align-center">
      <CustomButton
        v-for="(m, index) in months"
        :key="index"
        :color="color"
        :selected="currentMonth === index"
        :dark="dark"
        class="month-button"
        with-border
        @click="selectMonth(index)"
      >
        {{ m }}
      </CustomButton>
      <CustomButton
        v-for="year in years"
        :key="year"
        :color="color"
        :dark="dark"
        :selected="currentYear === year"
        with-border
        @click="selectYear(year)"
      >
        {{ year }}
      </CustomButton>
    </div>
  </div>
</template>

<script>
import { getMonthsShort } from '../../../../../modules/month';
import CustomButton from '../../../../CustomButton';

const ArrayRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => {
      const n = start + idx;
      return n;
    });
};

export default {
  name: 'YearMonthSelector',
  components: {
    CustomButton,
  },
  props: {
    locale: { type: String, default: null },
    dark: { type: Boolean, default: null },
    color: { type: String, default: null },
    mode: { type: String, default: null },
    month: { type: Object, default: null },
  },
  data() {
    return {
      months: null,
      years: null,
    };
  },
  computed: {
    currentMonth() {
      return this.month.month;
    },
    currentYear() {
      return this.month.year;
    },
    isMonthMode() {
      return this.mode === 'month';
    },
  },
  mounted() {
    if (this.isMonthMode) {
      this.getMonths();
    } else {
      this.getYears();
    }
  },
  methods: {
    getMonths() {
      this.years = null;
      this.months = getMonthsShort(this.locale);
    },
    getYears() {
      this.months = null;
      this.years = ArrayRange(this.month.year - 7, this.month.year + 7);
    },
    selectMonth(monthNumber) {
      this.$emit('input', { month: monthNumber, year: this.currentYear });
    },
    selectYear(year) {
      this.$emit('input', { month: this.currentMonth, year: year });
    },
  },
};
</script>

<style lang="scss" scoped>
.year-month-selector {
  position: absolute;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #424242;
  padding: 10px;
  &.dark {
    color: white;
    background-color: #424242;
  }
  .month-button {
    text-transform: capitalize;
  }
}
</style>
