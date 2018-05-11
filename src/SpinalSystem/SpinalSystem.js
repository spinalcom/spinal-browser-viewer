import {} from "spinal-core-connectorjs";
import * as Q from "q";

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class SpinalSystem {
  constructor() {
    console.log("TEST construct spinal");
    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
    this.modelsPathDictionary = {};
  }

  init() {
    if (this.promiseinit) return this.promiseinit.promise;
    this.promiseinit = Q.defer();

    // let user = this.getUser();
    if (this.user.username) {
      window.SpinalUserManager.get_user_id(
        "http://" + window.location.host,
        this.user.username,
        this.user.password,
        response => {
          let id = parseInt(response);
          this.conn = window.spinalCore.connect(
            `http://${id}:${this.user.password}@${window.location.host}/`
          );
          this.promiseinit.resolve();
        },
        () => {
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        }
      );
    } else window.location = "/html/drive/";
    return this.promiseinit.promise;
  }

  getUser() {
    if (!this.user.username) {
      let _user = window.localStorage.getItem("spinalhome_cfg");
      if (_user) {
        this.user = JSON.parse(atob(_user));
      }
    }
    return this.user;
  }

  getModel() {
    if (this.promiseModel) {
      return this.promiseModel.promise;
    }
    this.promiseModel = Q.defer();
    this.init().then(
      () => {
        let path = getParameterByName("path");
        if (!path) {
          window.location = "/html/drive/";
        }
        path = atob(path);
        window.spinalCore.load(
          this.conn,
          path,
          forgefile => {
            this.model = forgefile;
            this.promiseModel.resolve(this.model);
            // defer.reject();
          },
          () => {
            window.location = "/html/drive/";
            // defer.reject();
          }
        );
      },
      () => {
        window.location = "/html/drive/";
        // defer.reject();
      }
    );
    return this.promiseModel.promise;
  }
  _waitModelRdyRec(model, promise) {
    if (!model._server_id || window.FileSystem._tmp_objects[model._server_id]) {
      setTimeout(() => {
        this._waitModelRdyRec.call(this, model);
      }, 100);
    }
    promise.resolve(model);
  }
  waitModelRdy(model) {
    let defer = Q.defer();
    this._waitModelRdyRec.call(this, model, defer);

    return defer.promise;
  }
  loadModelPtr(model) {
    if (this.modelsDictionary[model._server_id]) {
      return this.modelsDictionary[model._server_id].promise;
    }
    this.modelsDictionary[model._server_id] = Q.defer();
    try {
      model.load(m => {
        this.modelsDictionary[model._server_id].resolve(m);
      });
    } catch (error) {
      let promise = this.modelsDictionary[model._server_id];
      this.modelsDictionary[model._server_id] = undefined;
      promise.reject();
    }
    return this.modelsDictionary[model._server_id].promise;
  }
  signOut() {
    window.localStorage.setItem("spinalhome_cfg", "");
  }
  load(path) {
    if (this.modelsPathDictionary[path]) {
      return this.modelsPathDictionary[path].promise;
    }
    this.modelsPathDictionary[path] = Q.defer();

    window.spinalCore.load(
      this.conn,
      path,
      m => {
        this.modelsPathDictionary[path].resolve(m);
      },
      () => {
        console.error("Failed to load model in : " + path);
        let promise = this.modelsPathDictionary[path];
        this.modelsPathDictionary[path] = undefined;
        promise.reject();
      }
    );

    return this.modelsPathDictionary[path].promise;
  }
}
window.spinalSystem = new SpinalSystem();
export default window.spinalSystem;
