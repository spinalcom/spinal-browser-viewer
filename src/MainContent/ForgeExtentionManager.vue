<script>
class ForgeExtentionManager {
  constructor() {
    this.extentions = [];
  }

  getExtentions() {
    return this.extentions;
  }

  addExtention(name) {
    this.extentions.push(name);
  }
}
export default ForgeExtentionManager;
</script>
