<template>
  <div>
    hey {{coucou}} - {{count}}
    <md-button @click="getSelection">
      TEST GET SELECTION
    </md-button>
  </div>
</template>

<script>
function loop(func) {
  func();
  setTimeout(() => {
    loop(func);
  }, 1000);
}

var viewer = window.v;

export default {
  name: "testExtention",

  data() {
    return {
      coucou: "TEST",
      count: 0
    };
  },
  methods: {
    getSelection: function() {
      let test = viewer.getSelection();
      console.log(test);
    }
  },
  mounted() {
    let vm = this;
    loop(() => {
      vm.count += 1;
    });
  }
};
</script>
