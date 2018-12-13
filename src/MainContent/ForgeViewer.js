import transformModel from "./transformModel.js";
const Q = require("q");

class ForgeViewer {
  constructor() {
    this.viewer;
    this.config = {};
    this.options = {
      env: "Local",
      docid: "",
      useADP: false
    };
    this.docs = [];
    window.spinal.ForgeExtentionManager.addExtention(
      "Autodesk.ADN.Viewing.Extension.Color"
    );
    this.rdy = Q.defer();
  }

  loadModel(doc) {
    let path = doc.path;
    if (
      doc.path.indexOf("http://") !== 0 &&
      doc.path.indexOf("https://") !== 0
    ) {
      path = window.location.origin + doc.path;
    }

    doc.loaded = true;
    const opts = this.config;
    return new Promise((resolve, reject) => {
      const _onGeometryLoaded = event => {
        this.viewer.removeEventListener(
          window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
          _onGeometryLoaded
        );
        doc.model = event.model;
        return resolve(event.model);
      };
      this.viewer.addEventListener(
        window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
        _onGeometryLoaded
      );

      this.viewer.loadModel(
        path,
        opts,
        () => {},
        (errorCode, errorMessage, statusCode, statusText) => {
          this.viewer.removeEventListener(
            window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            _onGeometryLoaded
          );

          return reject({
            errorCode: errorCode,
            errorMessage: errorMessage,
            statusCode: statusCode,
            statusText: statusText
          });
        }
      );
    })
      .then(() => {
        return this.transformModel(doc, true);
      })
      .then(() => this.checkCheckCurrentModel());
  }
  unloadModel(doc) {
    return new Promise(resolve => {
      const model = doc.model;
      doc.loaded = false;
      doc.model = null;
      this.viewer.impl.unloadModel(model);
      this.viewer.impl.sceneUpdated(true);
      resolve();
    }).then(() => this.checkCheckCurrentModel());
  }
  _setCurrentModel(model) {
    return new Promise(resolve => {
      this.viewer.model = model;
      var propertyPanel = this.viewer.getPropertyPanel(true);
      propertyPanel.currentModel = model;
      model.getObjectTree(instanceTree => {
        this.viewer.modelstructure.setModel(instanceTree);
        resolve();
      });
    });
  }
  setCurrentModel(model) {
    return this._setCurrentModel.call(this, model);
  }
  fitToView(objectIds, model) {
    return this.viewer.fitToView(objectIds, model);
  }
  checkCheckCurrentModel() {
    let found = false;
    for (let index = 0; index < this.docs.length; index++) {
      if (this.docs[index].model === this.viewer.model) found = true;
    }
    if (found === false) {
      for (let index = 0; index < this.docs.length; index++) {
        if (this.docs[index].loaded === true) {
          this._setCurrentModel(this.docs[index].model);
        }
      }
    }
  }
  onDocumentLoadFailure(viewerErrorCode) {
    console.error("onDocumentLoadFailure() - errorCode:" + viewerErrorCode);
  }

  onItemLoadSuccess() {
    let extensions = window.spinal.ForgeExtentionManager.getExtentions();
    for (var i = 0; i < extensions.length; i++) {
      this.viewer.loadExtension(extensions[i], this.options);
    }
  }

  start_viewer(dom) {
    window.spinal.spinalSystem
      .getModel()
      .then(forgefile => {
        this.forgeFile = forgefile;
        this.docs = this.forgeFile._children.get();
        const itemToLoad = [];
        if (this.docs.length != 0) {
          var path = this.docs[0].path;

          for (var i = 0; i < this.docs.length; i++) {
            if (this.docs[i].loaded !== true) this.docs[i].loaded = false;
            else {
              itemToLoad.push(this.docs[i]);
            }
          }
          if (itemToLoad.length === 0) itemToLoad.push(this.docs[0]);
          for (i = 0; i < this.docs.length; i++) {
            if (/.+\.svf$/.test(this.docs[i].path)) {
              path = this.docs[i].path;
              break;
            }
          }
          if (path.indexOf("http://") !== 0 && path.indexOf("https://") !== 0) {
            path = window.location.origin + path;
          }
        }
        this.viewer = new window.Autodesk.Viewing.Private.GuiViewer3D(
          dom,
          this.config
        ); // With toolbar
        window.Autodesk.Viewing.Initializer(this.options, async () => {
          this.viewer.initialize();
          this.onItemLoadSuccess();

          for (let index = 0; index < itemToLoad.length; index++) {
            const element = itemToLoad[index];
            // eslint-disable-next-line no-await-in-loop
            await this.loadModel(element);
          }
          this.rdy.resolve();
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getRealModelItem(item) {
    for (let index = 0; index < this.forgeFile._children.length; index++) {
      const element = this.forgeFile._children[index];
      if (element.name.get() === item.name) return element;
    }
    return null;
  }

  updateItem(item) {
    var model = this.getRealModelItem(item);
    if (model === null) return false;
    let change = false;

    for (const key in item) {
      if (item.hasOwnProperty(key) && key !== "model") {
        if (typeof item[key] === "object") {
          if (typeof model[key] === "undefined") {
            model.add_attr({
              [key]: item[key]
            });
            change = true;
          } else
            for (const keyObjet in item[key]) {
              if (item[key].hasOwnProperty(keyObjet)) {
                if (model[key][keyObjet].set(item[key][keyObjet]))
                  change = true;
              }
            }
        } else {
          if (typeof model[key] === "undefined") {
            model.add_attr({
              [key]: item[key]
            });
            change = true;
          } else {
            if (model[key].set(item[key])) change = true;
          }
        }
      }
    }
    return change;
  }

  transformModel(item, force = false) {
    var model = this.getRealModelItem(item);

    if ((force === true && item) || this.updateItem(item) === true)
      return transformModel(this.viewer, item.model, model);
    return Promise.resolve();
  }
}
// ();

export default ForgeViewer;
