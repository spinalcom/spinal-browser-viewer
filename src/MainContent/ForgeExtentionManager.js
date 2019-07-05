class ForgeExtentionManager {
  constructor() {
    this.extentions = [];
    this.viewer = null;
  }
  
  getExtentions() {
    return this.extentions;
  }
  
  addExtention(name) {
    if (this.viewer !== null)
      this.viewer.loadExtension(name, {});
    
    this.extentions.push(name);
  }
}
export default ForgeExtentionManager;
