import {} from "spinal-core-connectorjs";
import * as Q from "q";
import DocumentReady from "./DocumentReady";
import axios from "axios";

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
    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
    this.modelsPathDictionary = {};
    this.serverHost = null;
    this.getServerConfigProm = null;
  }

  getServerConfig() {
    if (this.getServerConfigProm !== null) return this.getServerConfigProm;
    let url = "/config.json";
    this.getServerConfigProm = axios
      .get(url)
      .then(res => {
        this.serverHost = res.data.host;
        return this.serverHost;
      })
      .catch(() => {
        return window.location.origin;
      });
    return this.getServerConfigProm;
  }

  init() {
    if (this.promiseinit) return this.promiseinit.promise;
    this.promiseinit = Q.defer();
    this.getUser();
    if (this.user.username) {
      this.getServerConfig().then(serverHost => {
        return axios
          .get(`${serverHost}/get_user_id`, {
            params: {
              u: this.user.username,
              p: this.user.password
            }
          })
          .then(
            response => {
              let id = parseInt(response.data);
              const host = serverHost.replace(/(http:\/\/|https:\/\/)/, "");
              this.conn = window.spinalCore.connect(
                `http://${id}:${this.user.password}@${host}/`
              );
              this.promiseinit.resolve();
            },
            () => {
              // console.log("Error get_user_id FAIL");
              window.location = "/html/drive/";
            }
          );
      });
    } else {
      // console.log("Error NOT LOGGED");

      window.location = "/html/drive/";
    }
    return this.promiseinit.promise;
  }

  getPath() {
    let path = getParameterByName("path");
    if (path) return atob(path);
    return undefined;
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
        DocumentReady(() => {
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
        });
      },
      err => {
        console.error(err);
        window.location = "/html/drive/";
        // defer.reject();
      }
    );
    return this.promiseModel.promise;
  }
  _waitModelRdyRec(model, promise) {
    if (!model._server_id || window.FileSystem._tmp_objects[model._server_id]) {
      setTimeout(() => {
        this._waitModelRdyRec(model, promise);
      }, 100);
    } else promise.resolve(model);
  }
  waitModelRdy(model) {
    let defer = Q.defer();
    this._waitModelRdyRec(model, defer);

    return defer.promise;
  }
  loadModelPtr(model) {
    if (model instanceof window.File) {
      return this.loadModelPtr(model._ptr);
    }
    if (!(model instanceof window.Ptr)) {
      throw new Error("loadModelPtr must take Ptr as parameter");
    }
    if (!model.data.value && model.data.model) {
      return Q.resolve(model.data.model);
    } else if (!model.data.value) {
      throw new Error("Trying to load a Ptr to 0");
    }

    if (this.modelsDictionary[model.data.value]) {
      return this.modelsDictionary[model.data.value].promise;
    }
    this.modelsDictionary[model.data.value] = Q.defer();
    try {
      model.load(m => {
        this.modelsDictionary[model.data.value].resolve(m);
      });
    } catch (error) {
      let promise = this.modelsDictionary[model.data.value];
      this.modelsDictionary[model.data.value] = undefined;
      promise.reject();
    }
    return this.modelsDictionary[model.data.value].promise;
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

export default SpinalSystem;
