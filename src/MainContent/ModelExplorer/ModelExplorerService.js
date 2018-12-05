function getForgeViewer() {
  return window.spinal.ForgeViewer;
}

let isReady = true;
export default {
  getModelList() {
    const forgeViewer = getForgeViewer();
    return forgeViewer.rdy.promise.then(() => {
      const list = [];
      const docs = forgeViewer.docs;
      for (let index = 0; index < docs.length; index++) {
        const element = docs[index];
        list.push(element);
      }
      return list;
    });
  },

  toogleView(item) {
    const forgeViewer = getForgeViewer();
    let prom;
    if (isReady === true) {
      isReady = false;
      if (item.loaded === true) {
        prom = forgeViewer.unloadModel.call(forgeViewer, item);
      } else {
        prom = forgeViewer.loadModel.call(forgeViewer, item);
      }
      prom.then(() => {
        forgeViewer.updateItem.call(forgeViewer, item);
        isReady = true;
      });
    }
  },

  isCurrentModel(item) {
    const forgeViewer = getForgeViewer();
    return forgeViewer.viewer.model === item.model;
  },
  setCurrentModel(item) {
    if (this.isCurrentModel(item) !== true) {
      const forgeViewer = getForgeViewer();
      forgeViewer.setCurrentModel.call(forgeViewer, item.model);
    }
  },

  selectModel(item) {
    if (item && item.loaded === true && item.model) {
      this.clearSelection();
      item.model.selector.setSelection(
        [1],
        window.Autodesk.Viewing.SelectionMode.FIRST_OBJECT
      );
      this.fitToView([1], item.model);
    }
  },
  clearSelection() {
    const forgeViewer = getForgeViewer();
    forgeViewer.viewer.clearSelection();
  },
  fitToView(objectIds, model) {
    const forgeViewer = getForgeViewer();
    forgeViewer.fitToView(objectIds, model);
  },

  transformModel(model) {
    const forgeViewer = getForgeViewer();
    forgeViewer.transformModel(model);
  }
};
