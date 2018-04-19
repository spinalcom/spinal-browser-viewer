<script>
window.ForgeExtentionManager = new class ForgeExtentionManager {
  constructor() {
    console.log("create ForgeExtentionManager");
    this.extentions = [];
  }

  getExtentions() {
    return this.extentions;
  }

  addExtention(name) {
    this.extentions.push(name);
  }
}();
export default ForgeExtentionManager;
</script>
