/*
 * Copyright 2021 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * 
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * 
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

import {} from "spinal-core-connectorjs";
import * as Q from "q";
import DocumentReady from "./DocumentReady";

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
    this.publicDir = "/__users__/public/digital_twin/default";
    this.isDefaultDT = false;
  }

  init() {
    if (this.promiseinit) return this.promiseinit.promise;
    this.promiseinit = Q.defer();
    this.getUser();
    if (this.user.username) {
      window.SpinalUserManager.get_user_id(
        `${window.location.protocol}//${window.location.host}/`,
        this.user.username,
        this.user.password,
        response => {
          let id = parseInt(response);
          this.conn = window.spinalCore.connect(
            `${window.location.protocol}//${id}:${this.user.password}@${window.location.host}/`
          );
          this.promiseinit.resolve();
        },
        () => {
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        }
      );
    } else {
      window.location = "/html/drive/";
    }
    return this.promiseinit.promise;
  }

  getPath() {
    let path = getParameterByName("path");
    if (path) return atob(path);
    this.isDefaultDT = true;
    return this.publicDir;
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
        let path = this.getPath();
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
