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
        globalObject
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
})({"40LUb":[function(require,module,exports,__globalThis) {
require("4454824e370b175c").register(require("d92a9702810b746f").getBundleURL('13Gz7'), JSON.parse("[\"13Gz7\",\"index.cbc01cb8.js\",\"cmRQ5\",\"startApp.356f22c2.js\",\"8JuqC\",\"spinal-env-viewer-context-geographic.84816a5a.js\",\"g7eVr\",\"build.7dc8429d.js\",\"aSRO5\",\"spinal-env-viewer-context-menu-service.ebdac754.js\",\"bBy4z\",\"spinal-env-viewer-plugin-circular-menu.0c6e4b20.js\",\"b2SxD\",\"spinal-env-viewer-plugin-circular-menu.3ca7933c.css\",\"iI6OK\",\"spinal-env-viewer-plugin-dashboard-standard.4d56014a.js\",\"3UKN1\",\"dist.8820b390.js\",\"9Cbdz\",\"spinal-env-viewer-plugin-dashboard-standard.b96a4ded.css\",\"8EHzY\",\"spinal-env-viewer-plugin-documentation.b77f57cc.js\",\"dqfTF\",\"dist.98fb3e50.js\",\"3DOD6\",\"spinal-env-viewer-plugin-documentation.80fbccf7.js\",\"bg1FH\",\"spinal-env-viewer-plugin-documentation.8ee67abe.js\",\"s4leD\",\"spinal-env-viewer-plugin-documentation.586e61e5.js\",\"7d3yk\",\"spinal-env-viewer-plugin-documentation.43c31fd1.css\",\"aDilA\",\"spinal-env-viewer-plugin-endpoint_chart_viewer.050b8672.js\",\"gJ7QG\",\"spinal-env-viewer-plugin-endpoint_chart_viewer.45b756f7.css\",\"jzdKR\",\"spinal-env-viewer-plugin-generate_geographic_context.094e65fb.js\",\"aSv9m\",\"spinal-env-viewer-plugin-generate_geographic_context.204ee615.css\",\"U3Pvs\",\"spinal-env-viewer-plugin-graph-manager.eaf7147e.js\",\"7fcmZ\",\"spinal-env-viewer-plugin-graph-manager.8abadd17.js\",\"laILJ\",\"spinal-env-viewer-plugin-graph-manager.f83e5af2.js\",\"brFTy\",\"spinal-env-viewer-plugin-graph-manager.9a640b82.css\",\"5FblX\",\"spinal-env-viewer-plugin-graph_export.3ad7ce76.js\",\"d2HfA\",\"spinal-env-viewer-plugin-node-inspector.cdfc840a.js\",\"5uyVG\",\"spinal-env-viewer-plugin-node-inspector.2e0877d2.css\",\"9DGaa\",\"spinal-env-viewer-plugin-scene.df9e561d.js\",\"7DrDv\",\"spinal-env-viewer-plugin-scene.0cea2fcf.js\",\"akK14\",\"spinal-env-viewer-plugin-scene.17d410dc.css\",\"kP5i0\",\"spinal-env-viewer-plugin-spinal-linker.e60a1580.js\",\"izPZE\",\"spinal-env-viewer-plugin-spinal-linker.0c497666.css\",\"jHWka\",\"spinal-env-viewer-plugin-standard_button.79d2a047.js\",\"2IXdV\",\"spinal-env-viewer-plugin-standard_button.f29941fe.css\",\"gKw0D\",\"spinal-env-viewer-plugin-standard_button.0cb1f8fd.js\",\"kHEfo\",\"spinal-env-viewer-plugin-version.d44c28fc.js\",\"l4g5Y\",\"spinal-env-viewer-plugin-version.b01709d6.css\",\"9ktZ0\",\"spinal-env-viewer-room-manager.70f115ef.js\",\"bgmq4\",\"dist.58795e0e.js\",\"luuQM\",\"spinal-env-viewer-room-manager.7317d2fc.js\",\"hUAuQ\",\"spinal-env-viewer-room-manager.771d02d0.css\",\"9paV8\",\"spinal-env-viewer-window-selection.5df05372.js\",\"3Qckv\",\"spinal-env-viewer-plugin-item_model_selector.5d86f179.js\",\"cGCKR\",\"spinal-env-viewer-plugin-task.7dc5cf63.js\",\"6BWFL\",\"en.es.10f652f2.js\",\"aRBsc\",\"ar.es.2429d8bd.js\",\"4OxpP\",\"bg.es.40100971.js\",\"04W38\",\"bn.es.8114e657.js\",\"4lFjx\",\"bs.es.b96a0568.js\",\"9ZjgO\",\"ca.es.c7cc8618.js\",\"aEDym\",\"cs.es.a3508a9c.js\",\"eLpfs\",\"da.es.589414b5.js\",\"kT0El\",\"de.es.ad45982a.js\",\"5BN10\",\"el.es.a7c88415.js\",\"grPG9\",\"es.es.811ced04.js\",\"Kk1gA\",\"fa.es.0d63d391.js\",\"fcNpg\",\"fr.es.6b346bf3.js\",\"hDRR3\",\"he.es.ce307f8a.js\",\"1eD2g\",\"hr.es.c7989f82.js\",\"7CAEU\",\"hu.es.e931829b.js\",\"8aWF0\",\"id.es.b9a4b337.js\",\"hJdUj\",\"is.es.b026578f.js\",\"1chdk\",\"it.es.3c105c09.js\",\"g1Ncl\",\"ja.es.ff8c4440.js\",\"3RGrr\",\"ka.es.4a5ef02e.js\",\"8VUYv\",\"ko.es.4d9b2463.js\",\"52U5g\",\"lt.es.837fd1f6.js\",\"55LUS\",\"mn.es.c8450385.js\",\"aqTm9\",\"nl.es.60596d88.js\",\"aoOeE\",\"no.es.c3078b24.js\",\"6Sflq\",\"pl.es.5f3ecbf7.js\",\"7ggR2\",\"pt-br.es.145e85d2.js\",\"5O3Zi\",\"ro.es.4a153ae8.js\",\"5dyzZ\",\"ru.es.a7754dd5.js\",\"9W8C8\",\"sk.es.524b0204.js\",\"9T9u0\",\"sl.es.7fec110e.js\",\"bzj8N\",\"sq.es.a7c10d38.js\",\"fqKtT\",\"sr.es.2ee41722.js\",\"8y07x\",\"sv.es.e6bdae5b.js\",\"aVDJh\",\"tr.es.d5314870.js\",\"feeHb\",\"uk.es.e9f3e0a5.js\",\"5kSTG\",\"vi.es.f97ac906.js\",\"fiofN\",\"zh-cn.es.130befec.js\",\"3UlqZ\",\"zh-hk.es.ae8c6c89.js\",\"hAcVI\",\"drag-and-drop.es.3f680b69.js\",\"8GwKQ\",\"spinal-env-viewer-plugin-note-standard-buttons-service.4f884407.js\",\"9tHWY\",\"spinal-env-viewer-plugin-task.5ece747c.css\",\"4QBSt\",\"spinal-env-viewer-plugin-graph_viewer.ce1d8f15.js\",\"f4stD\",\"spinal-env-viewer-plugin-network-tree.b309b6aa.js\",\"jowb9\",\"link-edit.da5cc525.svg\",\"5TG4M\",\"slash.8ad850e2.svg\",\"gCpdZ\",\"dist.088dc50a.js\",\"kFsvN\",\"spinal-env-viewer-plugin-network-tree.95587486.css\",\"9zwmk\",\"spinal-env-viewer-plugin-network-tree.51d1397c.js\",\"6m9C3\",\"spinal-env-viewer-plugin-network-tree.6800d51a.js\",\"alD19\",\"spinal-env-viewer-plugin-control-endpoint.388c4e7d.js\",\"dNwoI\",\"spinal-env-viewer-plugin-control-endpoint.4ef157bb.css\",\"fdCK4\",\"spinal-env-viewer-plugin-upload.569cee3c.js\",\"fWucc\",\"spinal-env-viewer-plugin-upload.4370d313.css\",\"kdcfB\",\"spinal-env-viewer-plugin-bacnet-manager.981a40e8.js\",\"5w9u5\",\"add.1f6a38a1.svg\",\"1k0T9\",\"spinal-env-viewer-plugin-bacnet-manager.52226714.css\",\"ardoD\",\"spinal-env-viewer-plugin-bacnet-manager.bf14c237.js\",\"iMBua\",\"spinal-env-viewer-plugin-bacnet-manager.d34922e7.js\",\"4PrWA\",\"spinal-env-viewer-plugin-bacnet-manager.c684fcc2.js\",\"jZDRs\",\"spinal-env-viewer-plugin-device_profile.831cefc7.js\",\"kCgG9\",\"spinal-env-viewer-plugin-device_profile.5dda2ecc.css\",\"fFA7l\",\"spinal-env-viewer-service.ec91ecc3.js\",\"dqMpD\",\"device.f3be3275.svg\",\"6Kt0u\",\"light.807aca9d.svg\",\"3CrKh\",\"circle.2f8534aa.svg\",\"jkRjr\",\"remote_controller.938c1adc.svg\",\"fR1yt\",\"windows_contact.dc8f7a23.svg\",\"8dkej\",\"fan_coil.c7b31c9b.svg\",\"kklY8\",\"blind.93d5b028.svg\",\"lRHG8\",\"spinal-env-viewer-service.d93d9092.js\",\"baVAZ\",\"spinal-env-viewer-standard-attributs.4dfa48da.js\",\"5akQs\",\"spinal-env-viewer-plugin-dashboard-panel.c17f1417.js\",\"8pTeP\",\"spinal-env-viewer-plugin-dashboard-panel.35b1020c.css\",\"9Di3k\",\"spinal-env-viewer-plugin-filter.3ed84a48.js\",\"6elT5\",\"spinal-env-viewer-plugin-filter.0340c060.css\",\"hZSNQ\",\"spinal-env-viewer-plugin-ticket.3d655dba.js\",\"eGmQR\",\"spinal-env-viewer-plugin-ticket.35d5fe9e.js\",\"kduNZ\",\"spinal-env-viewer-plugin-ticket.ffece6af.js\",\"4Mnel\",\"spinal-env-viewer-plugin-ticket.3fc51ba2.css\",\"dhjCb\",\"spinal-env-viewer-plugin-generate-spatial-reference.e9351a22.js\",\"jxMEs\",\"spinal-env-viewer-plugin-generate-spatial-reference.f878b923.css\",\"6qSiH\",\"spinal-env-viewer-plugin-attribute-manager.d55131e7.js\",\"4f6YB\",\"spinal-env-viewer-plugin-attribute-manager.28ce7f3c.css\",\"82pYl\",\"spinal-env-viewer-plugin-organ_ticket_mission.d8efabbe.js\",\"4mE4f\",\"spinal-env-viewer-plugin-organ_ticket_mission.1450ffdf.css\",\"1ZjK8\",\"dist.f505aa71.js\",\"jeldx\",\"spinal-env-viewer-plugin-analysis.622520c8.js\",\"hPecM\",\"spinal-env-viewer-plugin-analysis.e933588b.css\",\"IL6JA\",\"spinal-env-viewer-plugin-offset-calcul.639620cf.js\",\"5oThY\",\"spinal-env-viewer-plugin-offset-calcul.58d8758a.css\",\"7PSmP\",\"spinal-env-viewer-plugin-opcua-manager.2814922b.js\",\"gxaXV\",\"spinal-env-viewer-plugin-opcua-manager.5a8d9f9d.css\",\"1Hh0a\",\"startApp.789c0b84.css\",\"l7onR\",\"MaterialIcons-Regular.1579a769.eot\",\"izjRM\",\"MaterialIcons-Regular.3283bfbf.woff2\",\"eYsm7\",\"MaterialIcons-Regular.3ea12f2c.woff\",\"4bDs5\",\"MaterialIcons-Regular.4325b98d.ttf\"]"));

},{"4454824e370b175c":"gS3k4","d92a9702810b746f":"lgJ39"}],"gS3k4":[function(require,module,exports,__globalThis) {
"use strict";
var mapping = new Map();
function register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function resolve(id) {
    var resolved = mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
module.exports.register = register;
module.exports.resolve = resolve;

},{}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jeorp":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
function main() {
    return __awaiter(this, void 0, void 0, function*() {
        if (typeof Autodesk === 'undefined') {
            // load offline
            yield loadCss('offline/cssroboto.css');
            yield loadCss('offline/styleoffline.css');
            yield loadScript('offline/viewer3D.js');
        }
        yield loadScript('./Autodesk.ADN.Viewing.Extension.Color.js');
        yield loadScript('./panelClass.js');
        yield loadScript('./plotly/plotly.min.js');
        yield require("62d54cb10e1ca958");
    });
}
function loadCss(url) {
    return new Promise((resolve)=>{
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = ()=>resolve();
        document.head.appendChild(link);
    });
}
function loadScript(url) {
    return new Promise((resolve, reject)=>{
        const script = document.createElement('script');
        script.src = url;
        script.onload = ()=>resolve();
        script.onerror = ()=>reject(new Error(`Failed to load script: ${url}`));
        document.head.appendChild(script);
    });
}
main();

},{"62d54cb10e1ca958":"cIAai"}],"cIAai":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    require("4ed738a382a5e1df")(require("94a0cc6e0e0c5e13").resolve("1Hh0a")),
    require("350184629b658445")(require("94a0cc6e0e0c5e13").resolve("cmRQ5"))
]).then(()=>module.bundle.root('iLw7N'));

},{"4ed738a382a5e1df":"1MWPE","94a0cc6e0e0c5e13":"gS3k4","350184629b658445":"61B45"}],"1MWPE":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ae7c5e215a4907e2");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName('link');
        if ([].concat(existingLinks).some(function(link) {
            return link.href === bundle && link.rel.indexOf('stylesheet') > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(link);
    });
});

},{"ae7c5e215a4907e2":"j49pS"}],"j49pS":[function(require,module,exports,__globalThis) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"61B45":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}]},["40LUb","jeorp"], "jeorp", "parcelRequire94c2")

//# sourceMappingURL=index.cbc01cb8.js.map
