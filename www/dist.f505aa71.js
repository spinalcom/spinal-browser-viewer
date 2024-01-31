// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7icys":[function(require,module,exports) {
var global = arguments[3];
"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spinalNomenclatureService = void 0;
const NomenclatureTree_1 = require("90edd541d3995c5c");
const Profil_1 = require("9b9fab6090a2f439");
const globalType = typeof window === "undefined" ? global : window;
function applyMixins(derivedConstructor, baseConstructors) {
    baseConstructors.forEach((baseConstructor)=>{
        Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name)=>{
            Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(baseConstructor.prototype, name));
        });
    });
}
class SpinalNomenclatureService {
    constructor(){
        this.profileNodeType = "AttributeConfiguration";
        this.defaultContextName = "NomenclatureConfiguration";
    }
}
applyMixins(SpinalNomenclatureService, [
    NomenclatureTree_1.NomenclatureTree,
    Profil_1.NomenclatureProfil
]);
const spinalNomenclatureService = new SpinalNomenclatureService();
exports.spinalNomenclatureService = spinalNomenclatureService;
globalType.spinalNomenclatureService = spinalNomenclatureService;
exports.default = spinalNomenclatureService;

},{"90edd541d3995c5c":"3o2FL","9b9fab6090a2f439":"9HUjV"}],"3o2FL":[function(require,module,exports) {
"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NomenclatureTree = void 0;
const spinal_env_viewer_plugin_group_manager_service_1 = require("b2088c0f5cab7aec");
const spinal_env_viewer_graph_service_1 = require("7fa0f3da02dcd4a1");
class NomenclatureTree {
    constructor(){
        this.profileNodeType = "AttributeConfiguration";
        this.defaultContextName = "NomenclatureConfiguration";
    }
    /**
     * This method takes a context name as a parameter (not required),
     * If no name is passed it creates or returns the default context (NomenclatureConfiguration)
     * @param contextName - string - not required
     * @returns Promise<SpinalContext>
     */ createOrGetContext(contextName) {
        return __awaiter(this, void 0, void 0, function*() {
            let isDefault = false;
            if (!contextName || (contextName === null || contextName === void 0 ? void 0 : contextName.trim().length) === 0) {
                const defaultContext = yield this.getDefaultContext();
                if (defaultContext) return defaultContext;
                isDefault = true;
                contextName = this.defaultContextName;
            }
            const context = yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.createGroupContext(contextName.trim(), this.profileNodeType);
            if (!isDefault) return context;
            if (context.info.isDefault) context.info.isDefault.set(isDefault);
            else context.info.add_attr({
                isDefault: true
            });
            return context;
        });
    }
    getDefaultContext() {
        return __awaiter(this, void 0, void 0, function*() {
            const contexts = yield this.getContexts();
            const found = contexts.find((el)=>typeof el.info.isDefault !== "undefined");
            if (found) return found;
        });
    }
    /**
     * This method returns a context (if contextName or id is passed) or all profil contexts
     * @param contextName - string - contextName not required
     * @returns Promise<SpinalContext | SpinalContext[]>
     */ getContexts(contextName, graph) {
        return __awaiter(this, void 0, void 0, function*() {
            const contexts = yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroupContexts(this.profileNodeType, graph);
            if (contextName && contextName.trim().length > 0) {
                const context = contexts.find((el)=>el.name === contextName || el.id === contextName);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(context === null || context === void 0 ? void 0 : context.id);
            }
            return contexts.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(el === null || el === void 0 ? void 0 : el.id));
        });
    }
    /**
     * This method updates a contextName, it takes as parameter two strings (contextId and context new Name)
     * @param contextId - string - the context id
     * @param newName  - string - new context name
     * @returns SpinalContext
     */ updateContext(contextId, newName) {
        const spinalContext = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
        if (!spinalContext || !(spinalContext instanceof spinal_env_viewer_graph_service_1.SpinalContext) || spinalContext.getType().get() !== `${this.profileNodeType}GroupContext`) throw new Error(`${contextId} must be an id of profil SpinalContext`);
        if (typeof newName !== "string" || newName.trim().length === 0) throw new Error("newName is required and must be a string at less 1 character");
        spinalContext.info.name.set(newName.trim());
        return spinalContext;
    }
    /**
     * This method creates and links category to a profil context, it takes as parameters contextName, iconName (not required) and contextId (not required)
     * @param categoryName - string (required)
     * @param iconName - string (not required default value = settings)
     * @param contextId - string (not required default value = default contextId)
     * @returns Promise<SpinalNode>
     */ createCategory(categoryName, iconName = "settings", contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!contextId) {
                const context = yield this.getDefaultContext();
                contextId = context.getId().get();
            }
            return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addCategory(contextId, categoryName.trim(), iconName.trim());
        });
    }
    /**
     * This method returns a category of context (if category name or id is passed) or all categories of context
     * @param contextId - contextId
     * @param categoryName  - category name or id (not required)
     * @returns
     */ getCategories(categoryName, contextId) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (typeof contextId === "undefined") {
                const context = yield this.getDefaultContext();
                contextId = context.getId().get();
            }
            const categories = yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getCategories(contextId);
            if (categoryName && categoryName.trim().length > 0) {
                const category = categories.find((el)=>el.name.get() === categoryName || el.id.get() === categoryName);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode((_a = category === null || category === void 0 ? void 0 : category.id) === null || _a === void 0 ? void 0 : _a.get());
            }
            return categories.map((el)=>{
                var _a;
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode((_a = el === null || el === void 0 ? void 0 : el.id) === null || _a === void 0 ? void 0 : _a.get());
            });
        });
    }
    /**
     * This method updates a category, it takes as parameter two strings (categoryId and category new Values)
     * @param categoryId - string - the category Id
     * @param newValues - {name?: string; icon?: string } - object of new values (name and icon)
     * @returns
     */ updateCategory(categoryId, newValues) {
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(categoryId);
        const { name, icon } = newValues;
        if (node && (name || icon)) {
            if (typeof name === "string" && name.trim().length > 0) node.info.name.set(name.trim());
            if (typeof icon === "string" && icon.trim().length > 0) {
                if (node.info.icon) node.info.icon.set(icon.trim());
                else node.info.add_attr({
                    icon
                });
            }
            return node;
        }
    }
    /**
     * It takes as parameters a contextId, categoryId, groupName et groupColor in hexadecimal (not required) and returns a spinalNode of group
     * @param contextId - contextId
     * @param categoryId - categoryId
     * @param groupName - group name
     * @param groupColor - group color (not required)
     * @returns
     */ createGroup(contextId, categoryId, groupName, groupColor = "#fff000") {
        if (typeof groupName !== "string" || groupName.trim().length === 0) throw new Error("group name must be a string less than 1 character");
        if (!groupColor || groupColor.trim().length === 0) groupColor = "#fff000";
        return spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.addGroup(contextId, categoryId, groupName, groupColor);
    }
    /**
     * This method updates a group, it takes as parameter two strings (groupId and new values)
     * @param groupId - string - the group Id
     * @param newValues - {name?: string; color?: string } - object of new values (name and color)
     * @returns
     */ updateGroup(groupId, newValues) {
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(groupId);
        const { name, color } = newValues;
        if (node && (name || color)) {
            if (typeof name === "string" && name.trim().length > 0) node.info.name.set(name.trim());
            if (typeof color === "string" && color.trim().length > 0) {
                if (node.info.color) node.info.color.set(color.trim());
                else node.info.add_attr({
                    color
                });
            }
            return node;
        }
    }
    /**
     * This methods takes as parameters a contextId and category id (not required), it returns all groups in category (or categories if not category id is set) in context
     * @param contextId - context id
     * @param categoryId - category id (not required)
     * @returns
     */ getGroups(contextId, categoryId) {
        return __awaiter(this, void 0, void 0, function*() {
            let categories = yield this.getCategories(categoryId, contextId);
            if (categories) {
                if (!Array.isArray(categories)) categories = [
                    categories
                ];
                const promises = categories.map((category)=>__awaiter(this, void 0, void 0, function*() {
                        const info = category.info.get();
                        info.groups = yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.getGroups(category.getId().get());
                        return info;
                    }));
                return Promise.all(promises).then((cats)=>{
                    return cats.map((category)=>{
                        category.groups = category.groups.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(el.id.get()));
                        return category;
                    });
                });
            }
            return [];
        });
    }
}
exports.NomenclatureTree = NomenclatureTree;

},{"b2088c0f5cab7aec":"tSLpq","7fa0f3da02dcd4a1":"9n7zp"}],"9HUjV":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NomenclatureProfil = void 0;
const spinal_core_connectorjs_type_1 = require("a617e0b010555cc0");
const spinal_env_viewer_graph_service_1 = require("455e1d0ed2ad31bf");
const spinal_env_viewer_plugin_group_manager_service_1 = require("a853a403a0c6672");
class NomenclatureProfil {
    constructor(){
        this.profileNodeType = "AttributeConfiguration";
    }
    /**
     * This methods takes as params th context id, group id, profile name and list of categories. Creates and return the profile SpinalNode.
     * @param contextId - ContextId - String
     * @param groupId - GroupId - String
     * @param profileName - profileName
     * @param categories - Array of category : {show: boolean; name : string}
     * @returns
     */ createProfile(contextId, groupId, profileName, categories = []) {
        return __awaiter(this, void 0, void 0, function*() {
            const id = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                name: profileName,
                type: this.profileNodeType
            }, new spinal_core_connectorjs_type_1.Model({
                name: profileName,
                categories
            }));
            yield spinal_env_viewer_plugin_group_manager_service_1.groupManagerService.linkElementToGroup(contextId, groupId, id);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
        });
    }
    /**
     * This methods updates the profile cateregories return false
     * @param profileId - string profile node id
     * @param profilElement - profil new Element IProfile
     * @returns
     */ updateProfile(profileId, newValues) {
        let realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(profileId);
        if (realNode) {
            if (newValues.name && newValues.name.trim().length > 0) realNode.info.name.set(newValues.name);
            if (newValues.categories) return realNode.getElement().then((element)=>{
                element.set(newValues.categories);
                return true;
            }).catch((err)=>false);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
    /**
     * This methods finds a profile (passed in parameter) or return all profiles in the contexte from the started node
     * @param contextId - string - Context id
     * @param startId  - string - start node id
     * @param profileId - string - not required
     * @returns
     */ findOrGetProfiles(contextId, startId, profileId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!startId || startId.length === 0) startId = contextId;
            const profiles = yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContextByType(startId, contextId, this.profileNodeType);
            if (profileId) {
                const profile = profiles.filter((el)=>el.getId().get() === profileId);
                if (profile) return this._getProfileElement(profile);
                return;
            }
            const promises = profiles.map((el)=>this._getProfileElement(el));
            return Promise.all(promises);
        });
    }
    /**
     * This methods takes as parameters a contextId and profileId and set the profile as a current profile in the contexte
     * @param contextId - string
     * @param profileId - string
     * @returns
     */ setAsCurrentProfile(contextId, profileId) {
        const profileNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(profileId);
        const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
        if (profileNode && context) {
            if (context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
            context.info.add_attr({
                currentConfiguration: new spinal_core_connectorjs_type_1.Ptr(profileNode)
            });
            return true;
        }
        return false;
    }
    /**
     * This methods takes as parameter a contextId and returns the current profile in the Context
     * @param contextId - string
     * @returns
     */ getCurrentProfile(contextId) {
        const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
        const confPtr = context.info.currentConfiguration;
        if (typeof confPtr !== "undefined") return new Promise((resolve, reject)=>{
            confPtr.load((realNode)=>{
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(realNode);
                return realNode.getElement().then((el)=>{
                    let element = el.get();
                    element.id = realNode.info.id.get();
                    resolve(element);
                });
            });
        });
    }
    /**
     * This methods takes as parameters a contextId and remove the current profile
     * @param contextId - string
     * @returns
     */ deleteCurrentAsCurrentProfile(contextId) {
        const context = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
        if (context && context.info.currentConfiguration) {
            context.info.rem_attr("currentConfiguration");
            return true;
        }
        return false;
    }
    _getProfileElement(profileInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            // (<any>SpinalGraphService)._addNode(profileNode);
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(profileInfo.id.get());
            const element = yield realNode.getElement();
            const el = element.get();
            el.id = realNode.getId().get();
            return el;
        });
    }
}
exports.NomenclatureProfil = NomenclatureProfil;

},{"a617e0b010555cc0":"fRH70","455e1d0ed2ad31bf":"9n7zp","a853a403a0c6672":"tSLpq"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=dist.f505aa71.js.map
