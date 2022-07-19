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

import {
  FileSystem,
  SpinalUserManager,
  spinalCore,
} from 'spinal-core-connectorjs';
import * as Q from 'q';
import DocumentReady from './DocumentReady';
import axios from 'axios';

class SpinalSystem {
  constructor() {
    this.user = {
      username: '',
      password: '',
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
    this.modelsPathDictionary = {};
    // this.publicDir = '/__users__/public/digital_twin/default';
    this.isDefaultDT = false;
  }

  init() {
    if (this.promiseinit) return this.promiseinit.promise;
    this.promiseinit = Q.defer();
    this.connect();
    return this.promiseinit.promise;
  }

  async connect() {
    const token = this.gettoken();
    if (!token.tokenKey) {
      this.redirectToLogin();
    }
    try {
      const opt = `${window.location.protocol}//${window.location.host}/`;
      FileSystem.CONNECTOR_TYPE = 'Browser';
      this.session = await spinalCore.createSession(opt, token.tokenKey);
      // // getProfileUser
      // const profileUser = await axios.get(
      //   `${REDIRECT_SERVER_URI}/api/getProfileUser`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      // // chack profileUser have  have studio, if not throw.
      this.conn = spinalCore.connectWithSessionId(
        opt,
        this.session.sessionNumber,
        token.tokenKey
      );
      this.promiseinit.resolve();
    } catch (error) {
      console.error(error);
      this.redirectToLogin();
    }
  }
  redirectToLogin() {
    throw 'error';
    // window.location = '/html/login/?app=viewer';
  }

  gettoken() {
    return {
      tokenKey: window.localStorage.getItem('tokenKey'),
      expires_in: window.localStorage.getItem('expires_in'),
    };
  }

  getPath() {
    console.error('getPath');
    return '/__users__/drive_DT/Digital Twin';
  }

  getUser() {
    console.error('getUser');
    if (this.session && this.session.username) {
      this.user = {
        username: this.session.username,
        password: 'nop',
      };
    }
    return this.user;
  }

  getModel() {
    if (this.promiseModel) {
      return this.promiseModel.promise;
    }
    this.promiseModel = Q.defer();
    DocumentReady(async () => {
      try {
        await this.init();
        this.model = await spinalCore.load_ptr(
          this.conn,
          this.session.graphServerId
        );
        this.promiseModel.resolve(this.model);
      } catch (error) {
        console.error(error);
        this.redirectToLogin();
      }
    });
    return this.promiseModel.promise;
  }

  waitModelRdy(model) {
    let defer = Q.defer();
    const interval = setInterval(() => {
      if (!model._server_id || FileSystem._tmp_objects[model._server_id]) {
        return;
      }
      defer.resolve(model);
      clearInterval(interval);
    }, 100);
    return defer.promise;
  }

  loadModelPtr(model) {
    if (model instanceof window.File) {
      return this.loadModelPtr(model._ptr);
    }
    if (!(model instanceof window.Ptr)) {
      throw new Error('loadModelPtr must take Ptr as parameter');
    }
    if (!model.data.value && model.data.model) {
      return Q.resolve(model.data.model);
    } else if (!model.data.value) {
      throw new Error('Trying to load a Ptr to 0');
    }

    if (this.modelsDictionary[model.data.value]) {
      return this.modelsDictionary[model.data.value].promise;
    }
    this.modelsDictionary[model.data.value] = Q.defer();
    try {
      model.load((m) => {
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
    window.localStorage.removeItem('tokenKey');
    window.localStorage.removeItem('expires_in');
  }

  load(path) {
    if (this.modelsPathDictionary[path]) {
      return this.modelsPathDictionary[path].promise;
    }
    this.modelsPathDictionary[path] = Q.defer();
    spinalCore.load(
      this.conn,
      path,
      (m) => {
        this.modelsPathDictionary[path].resolve(m);
      },
      () => {
        console.error('Failed to load model in : ' + path);
        let promise = this.modelsPathDictionary[path];
        this.modelsPathDictionary[path] = undefined;
        promise.reject();
      }
    );

    return this.modelsPathDictionary[path].promise;
  }
}

export default SpinalSystem;
