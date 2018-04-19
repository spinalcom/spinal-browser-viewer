import {} from "spinal-core-connectorjs";
import * as Q from "q";

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class spinal {
  constructor() {
    console.log("TEST construct spinal");
    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
  }

  init() {
    if (this.promiseinit) return this.promiseinit.promise;
    this.promiseinit = Q.defer();

    let user = this.getUser();
    if (this.user.username) {
      SpinalUserManager.get_user_id(
        "http://" + window.location.host,
        this.user.username,
        this.user.password,
        response => {
          let id = parseInt(response);
          this.conn = spinalCore.connect(
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
        spinalCore.load(
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
    if (!model._server_id || FileSystem._tmp_objects[model._server_id]) {
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
    this.modelsDictionary[model._server_id] = Q.defer();
    if (this.modelsDictionary[model._server_id]) {
      return this.modelsDictionary[model._server_id].promise;
    }
    this.modelsDictionary[model._server_id] = Q.defer();

    return this.modelsDictionary[model._server_id].promise;
  }
  signOut() {
    window.localStorage.setItem("spinalhome_cfg", "");
  }
}

export default new spinal();
