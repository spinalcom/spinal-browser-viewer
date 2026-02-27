// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"coTUC":[function(require,module,exports,__globalThis) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("9704367840c31da8"), exports);
__exportStar(require("e85e1fa4d4f103be"), exports);
__exportStar(require("cd57eadc202a169"), exports);
__exportStar(require("95f2b24722b82b49"), exports);
__exportStar(require("ac980351c7947c58"), exports);
__exportStar(require("f3e6bf360566318b"), exports);

},{"9704367840c31da8":"6zR1E","e85e1fa4d4f103be":"2PmWu","cd57eadc202a169":"kQSwV","95f2b24722b82b49":"5dLgf","ac980351c7947c58":"6ZcIZ","f3e6bf360566318b":"2deZq"}],"6zR1E":[function(require,module,exports,__globalThis) {
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
exports.SpinalSNMPNetwork = void 0;
const spinal_core_connectorjs_1 = require("6a87ca4b96cc0fe3");
const utils_1 = require("238c34762762d626");
const uuid_1 = require("c99400504e1c7255");
class SpinalSNMPNetwork extends spinal_core_connectorjs_1.Model {
    constructor(network){
        super();
        if (!network) return;
        this.add_attr(Object.assign({
            id: network.id || (0, uuid_1.v4)(),
            address: network.address,
            name: network.name || network.address
        }, network.mibFile && {
            mibFile: this._convertFileToSpinalFile(network.mibFile)
        }));
    }
    getMibData() {
        return __awaiter(this, arguments, void 0, function*(hubUrl = "") {
            if (!this.mibFile) return undefined;
            yield (0, utils_1.waitModelReady)(this.mibFile);
            const pathData = yield (0, utils_1.getPathData)(this.mibFile._server_id, hubUrl);
            return pathData;
        });
    }
    _convertFileToSpinalFile(mibFile) {
        const file = new spinal_core_connectorjs_1.Path(mibFile);
        return file;
    }
}
exports.SpinalSNMPNetwork = SpinalSNMPNetwork;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalSNMPNetwork
]);
exports.default = SpinalSNMPNetwork;

},{"6a87ca4b96cc0fe3":"cQPh9","238c34762762d626":"9WDNv","c99400504e1c7255":"8jiAI"}],"9WDNv":[function(require,module,exports,__globalThis) {
var Buffer = require("8ba1e567a6d55328").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToBase64 = convertToBase64;
exports.getPathData = getPathData;
exports.waitModelReady = waitModelReady;
const axios_1 = require("6f2a6a5c08bfd8f3");
const axios_retry_1 = require("47e9d6b11820b47e");
function convertToBase64(tree) {
    return Buffer.from(JSON.stringify(tree)).toString("base64");
}
function getPathData(dynamicId, hubUrl = "") {
    const path = `${hubUrl}/sceen/_?u=${dynamicId}`;
    const client = axios_1.default.create({
        baseURL: hubUrl
    });
    (0, axios_retry_1.default)(client, {
        retries: 3,
        retryDelay: axios_retry_1.default.exponentialDelay
    });
    return client.get(path, {
        responseType: 'arraybuffer'
    }).then((response)=>{
        // return Buffer.from(response.data);
        return new Uint8Array(response.data);
    });
}
function waitModelReady(path) {
    return new Promise((resolve, reject)=>{
        //     model.load((path) => {
        // if (!path) return resolve(true);
        const delay = 3000;
        const intervalTime = 300;
        let time = 0;
        const wait = ()=>{
            setTimeout(()=>{
                var _a;
                const remaining = (_a = path === null || path === void 0 ? void 0 : path.remaining) === null || _a === void 0 ? void 0 : _a.get();
                if (remaining == 0 || time >= delay) resolve(true);
                else {
                    time += intervalTime;
                    wait();
                }
            }, intervalTime);
        };
        wait();
    // });
    });
}

},{"8ba1e567a6d55328":"bCaf4","6f2a6a5c08bfd8f3":"kooH4","47e9d6b11820b47e":"ayQ7D"}],"8jiAI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"9tz9G","./v3.js":"aM0Z7","./v4.js":"cF2GY","./v5.js":"jWsxx","./nil.js":"2SC4k","./version.js":"3OEMX","./validate.js":"dUcdh","./stringify.js":"7XpLF","./parse.js":"9eiYB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tz9G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"1zzGr","./stringify.js":"7XpLF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1zzGr":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7XpLF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dUcdh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dUcdh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"88NWW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"88NWW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aM0Z7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)('v3', 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"diPh1","./md5.js":"a7qk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"diPh1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"7XpLF","./parse.js":"9eiYB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9eiYB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dUcdh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a7qk7":[function(require,module,exports,__globalThis) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cF2GY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"f1ym1","./rng.js":"1zzGr","./stringify.js":"7XpLF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f1ym1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jWsxx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)('v5', 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"diPh1","./sha1.js":"dfb3u","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dfb3u":[function(require,module,exports,__globalThis) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2SC4k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3OEMX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dUcdh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2PmWu":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalOrganSNMP = void 0;
const spinal_core_connectorjs_1 = require("e90580eb6d23a701");
const constants_1 = require("dd2b1cccea3a4ba4");
const spinal_connector_service_1 = require("fa67da21bfcd5375");
class SpinalOrganSNMP extends spinal_connector_service_1.SpinalOrganModel {
    constructor(name, type = constants_1.SNMP_ORGAN_TYPE){
        super(name, type);
        if (!name) return;
    }
}
exports.SpinalOrganSNMP = SpinalOrganSNMP;
SpinalOrganSNMP.TYPE = constants_1.SNMP_ORGAN_TYPE;
SpinalOrganSNMP.CONTEXT_TO_ORGAN_RELATION = "hasBmsNetworkOrgan";
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalOrganSNMP
]);
exports.default = SpinalOrganSNMP;

},{"e90580eb6d23a701":"cQPh9","dd2b1cccea3a4ba4":"2deZq","fa67da21bfcd5375":"42AUb"}],"2deZq":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STATES = exports.SNMP_ORGAN_TYPE = void 0;
exports.SNMP_ORGAN_TYPE = "SNMP_ORGAN_TYPE";
var STATES;
(function(STATES) {
    STATES["initial"] = "initial";
    STATES["readyToDiscover"] = "readyToDiscover";
    STATES["discovering"] = "discovering";
    STATES["discovered"] = "discovered";
    STATES["readyToCreate"] = "readyToCreate";
    STATES["creating"] = "creating";
    STATES["created"] = "created";
    STATES["error"] = "error";
    STATES["timeout"] = "timeout";
    STATES["cancelled"] = "cancelled";
    STATES["pending"] = "pending";
    STATES["stopped"] = "stopped";
})(STATES || (exports.STATES = STATES = {}));

},{}],"42AUb":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("1fb7b29fb199650f"), exports);
__exportStar(require("e383cde7d7baa245"), exports);
__exportStar(require("25ae7851b47d4185"), exports);
__exportStar(require("f091c6eb913ae5"), exports); // export * from "./types";

},{"1fb7b29fb199650f":"f4HDF","e383cde7d7baa245":"fJ4Cq","25ae7851b47d4185":"gmY7t","f091c6eb913ae5":"6eHD2"}],"f4HDF":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"fJ4Cq":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("a3931101fe6d62c7"), exports);
__exportStar(require("280ab821a53e7cc1"), exports);
__exportStar(require("8f7be671cd806205"), exports);
__exportStar(require("9263614e0342c99c"), exports);
__exportStar(require("717d5d0664b40d70"), exports);

},{"a3931101fe6d62c7":"jqz7b","280ab821a53e7cc1":"8S33Z","8f7be671cd806205":"4Yvuj","9263614e0342c99c":"2LVXY","717d5d0664b40d70":"ehBZ9"}],"jqz7b":[function(require,module,exports,__globalThis) {
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
exports.ModelsInfo = void 0;
const spinal_core_connectorjs_1 = require("a9fc706e4407f7d7");
const lodash = require("4ac5dd969002d1b6");
/**
 * Represents a generic container for managing a list of models with change tracking and debounced modification date updates.
 *
 * @typeParam T - The type of model managed by this container, extending the base `Model` class.
 *
 * @remarks
 * - The class maintains a list of models and tracks the modification date.
 * - It provides methods to add, remove, and consume models, as well as to listen for changes.
 * - The modification date is updated in a debounced manner to avoid excessive updates.
 *
 * @example
 * ```typescript
 * const modelsInfo = new ModelsInfo<MyModel>();
 * await modelsInfo.addModel(new MyModel());
 * modelsInfo.listenToChange((models) => {
 *   console.log('Models changed:', models);
 * });
 * ```
 */ class ModelsInfo extends spinal_core_connectorjs_1.Model {
    constructor(){
        super();
        this.add_attr({
            modification_date: Date.now(),
            length: 0,
            data: new spinal_core_connectorjs_1.Ptr(new spinal_core_connectorjs_1.Lst())
        });
        this._debounceChange = lodash.debounce(()=>this.modification_date.set(Date.now()), 1000);
    }
    addModel(model) {
        return __awaiter(this, void 0, void 0, function*() {
            const dataList = yield this.getList();
            dataList.push(model);
            this.length = dataList.length;
            this._debounceChange();
            return this.length;
        });
    }
    removeModel(model) {
        return __awaiter(this, void 0, void 0, function*() {
            const dataList = yield this.getList();
            dataList.remove(model);
            this.length = dataList.length;
            return this.length;
        });
    }
    getList() {
        return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve)=>{
                this.data.load((discoverList)=>resolve(discoverList));
            });
        });
    }
    consumeModels() {
        return __awaiter(this, void 0, void 0, function*() {
            const dataList = yield this.getList();
            const arr = Array.from(dataList);
            this.length.set(0);
            dataList.clear();
            return arr;
        });
    }
    listenToChange(callback) {
        this.modification_date.bind(()=>__awaiter(this, void 0, void 0, function*() {
                const dataList = yield this.getList();
                const arr = Array.from(dataList);
                callback(arr);
            }));
    }
}
exports.ModelsInfo = ModelsInfo;
spinal_core_connectorjs_1.spinalCore.register_models([
    ModelsInfo
]);
exports.default = ModelsInfo;

},{"a9fc706e4407f7d7":"cQPh9","4ac5dd969002d1b6":"LUhzz"}],"8S33Z":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalOrganModel = void 0;
const spinal_core_connectorjs_1 = require("295137aa8ae27b9b");
const constants_1 = require("a3794d0ee1b1e9f9");
const uuid_1 = require("94230d8f78bd1363");
const ModelsInfo_1 = require("695f4246e3189a01");
/**
 * Represents an Organ model in the Spinal framework, managing references and collections of models
 * for discovery, pilot, and listener functionalities. This class extends the base `Model` class and
 * provides methods to add, remove, and retrieve models from internal lists, as well as manage references
 * to contexts within a graph structure.
 *
 * @template D - The type of the discover models managed by this organ.
 * @template P - The type of the pilot models managed by this organ.
 * @template L - The type of the listener models managed by this organ.
 *
 * @remarks
 * - The organ maintains references to contexts via unique IDs and supports adding/removing models
 *   to/from discover, pilot, and listener lists.
 * - Each model list is managed by a `ModelsInfo` instance.
 * - The organ can be initialized with a name and type, and generates a unique ID upon creation.
 *
 * @example
 * ```typescript
 * const organ = new SpinalOrganModel<MyDiscoverModel, MyPilotModel, MyListenerModel>('MyOrgan', 'customType');
 * await organ.addDiscoverModelToGraph(new MyDiscoverModel());
 * ```
 *
 * @method addReference(contextId: string, spinalNode: SpinalNode): SpinalNode - Adds a reference to a context.
 * @method isReferencedInContext(contextId: string): boolean - Checks if the organ is referenced in a specific context.
 * @method removeReference(contextId: string): void - Removes a reference to a context.
 * @method addDiscoverModelToGraph(discoverModel: D): Promise<number> - Adds a discover model to the graph.
 * @method addPilotModelToGraph(pilotModel: P): Promise<number> - Adds a pilot model to the graph.
 * @method addListenerModelToGraph(listenerModel: L): Promise<number> - Adds a listener model to the graph.
 * @method removeDiscoverModelFromGraph(discoverModel: D): Promise<boolean> - Removes a discover model from the graph.
 * @method removePilotModelFromGraph(pilotModel: P): Promise<boolean> - Removes a pilot model from the graph.
 * @method removeListenerModelFromGraph(listenerModel: L): Promise<boolean> - Removes a listener model from the graph.
 * @method getDiscoverModelFromGraph(): Promise<Lst<D> | undefined> - Retrieves the list of discover models from the graph.
 * @method getPilotModelFromGraph(): Promise<Lst<P> | undefined> - Retrieves the list of pilot models from the graph.
 * @method getListenerModelFromGraph(): Promise<Lst<L> | undefined> - Retrieves the list of listener models from the graph.
 * @method consumeDiscoverModelFromGraph(): Promise<D[]> - Consumes and retrieves all discover models from the graph.
 * @method consumePilotModelFromGraph(): Promise<P[]> - Consumes and retrieves all pilot models from the graph.
 * @method consumeListenerModelFromGraph(): Promise<L[]> - Consumes and retrieves all listener models from the graph.
 *
 * @see {@link ModelsInfo} for managing collections of models.
 */ class SpinalOrganModel extends spinal_core_connectorjs_1.Model {
    constructor(name, type = constants_1.DEFAULT_ORGAN_TYPE){
        super();
        if (!type || !name) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            name: name,
            type: type,
            references: {},
            restart: false,
            discover: new ModelsInfo_1.default(),
            pilot: new ModelsInfo_1.default(),
            listener: new ModelsInfo_1.default()
        });
    }
    getModels() {
        return {
            discover: this.discover,
            pilot: this.pilot,
            listener: this.listener
        };
    }
    addReference(contextId, spinalNode) {
        const refFound = this.references[contextId];
        if (refFound) this.references.rem_attr(contextId);
        this.references.add_attr({
            [contextId]: new spinal_core_connectorjs_1.Ptr(spinalNode)
        });
        return spinalNode;
    }
    isReferencedInContext(contextId) {
        return typeof this.references[contextId] !== "undefined";
    }
    removeReference(contextId) {
        if (this.isReferencedInContext(contextId)) this.references.rem_attr(contextId);
    }
    initializeModelsList() {
        if (!this.discover) this.add_attr({
            discover: new ModelsInfo_1.default()
        });
        if (!this.pilot) this.add_attr({
            pilot: new ModelsInfo_1.default()
        });
        if (!this.listener) this.add_attr({
            listener: new ModelsInfo_1.default()
        });
    }
    ////////////// ADD MODELS //////////////
    addDiscoverModelToGraph(discoverModel) {
        if (!this.discover) this.add_attr({
            discover: new ModelsInfo_1.default()
        });
        return this.discover.addModel(discoverModel);
    }
    addPilotModelToGraph(pilotModel) {
        if (!this.pilot) this.add_attr({
            pilot: new ModelsInfo_1.default()
        });
        return this.pilot.addModel(pilotModel);
    }
    addListenerModelToGraph(listenerModel) {
        if (!this.listener) this.add_attr({
            listener: new ModelsInfo_1.default()
        });
        return this.listener.addModel(listenerModel);
    }
    ////////////// REMOVE MODELS //////////////
    removeDiscoverModelFromGraph(discoverModel) {
        if (this.discover) return this.discover.removeModel(discoverModel);
        return Promise.resolve(false);
    }
    removePilotModelFromGraph(pilotModel) {
        if (this.pilot) return this.pilot.removeModel(pilotModel);
        return Promise.resolve(false);
    }
    removeListenerModelFromGraph(listenerModel) {
        if (this.listener) return this.listener.removeModel(listenerModel);
        return Promise.resolve(false);
    }
    ////////////// GETTERS //////////////
    getDiscoverModelFromGraph() {
        if (!this.discover) return Promise.resolve(undefined);
        return this.discover.getList();
    }
    getPilotModelFromGraph() {
        if (!this.pilot) return Promise.resolve(undefined);
        return this.pilot.getList();
    }
    getListenerModelFromGraph() {
        if (!this.listener) return Promise.resolve(undefined);
        return this.listener.getList();
    }
    ////////////// CONSUMERS //////////////
    consumeDiscoverModelFromGraph() {
        if (!this.discover) return Promise.resolve([]);
        return this.discover.consumeModels();
    }
    consumePilotModelFromGraph() {
        if (!this.pilot) return Promise.resolve([]);
        return this.pilot.consumeModels();
    }
    consumeListenerModelFromGraph() {
        if (!this.listener) return Promise.resolve([]);
        return this.listener.consumeModels();
    }
}
exports.SpinalOrganModel = SpinalOrganModel;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalOrganModel
]);
exports.default = SpinalOrganModel;

},{"295137aa8ae27b9b":"cQPh9","a3794d0ee1b1e9f9":"6eHD2","94230d8f78bd1363":"f1qTK","695f4246e3189a01":"jqz7b"}],"6eHD2":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PILOT_STATES = exports.STATES = exports.QueueEvents = exports.DEFAULT_PATH = exports.DEFAULT_ORGAN_TYPE = void 0;
exports.DEFAULT_ORGAN_TYPE = "SPINAL_ORGAN";
exports.DEFAULT_PATH = "/etc/Organs";
exports.QueueEvents = {
    FINISH: "finish",
    START: "start"
};
exports.STATES = {
    initial: "initial",
    readyToDiscover: "readyToDiscover",
    discovering: "discovering",
    discovered: "discovered",
    readyToCreate: "readyToCreate",
    creating: "creating",
    created: "created",
    error: "error",
    timeout: "timeout",
    cancelled: "cancelled",
    pending: "pending",
    stopped: "stopped"
};
exports.PILOT_STATES = {
    init: "init",
    processing: "processing",
    success: "success",
    error: "error"
};

},{}],"4Yvuj":[function(require,module,exports,__globalThis) {
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
exports.SpinalDiscover = void 0;
const spinal_core_connectorjs_1 = require("650623592bcb9b87");
const uuid_1 = require("e0394974688f510a");
const constants_1 = require("9e22f5891ae6b3f");
const functions_1 = require("56cb85f18ff58418");
const gzip = require("9a90ccaefcc8f503");
/**
 * Represents a discovery model for managing and tracking the discovery process
 * of models within a SpinalGraph context. This class provides methods to interact
 * with the graph, context, and organ nodes, as well as to manage the state and
 * discovered/created trees associated with the discovery process.
 *
 * @template T - The type of model managed by the discovery process.
 * @extends Model
 *
 * @remarks
 * - Handles the initialization of discovery attributes, including references to
 *   the graph, context, and organ nodes.
 * - Provides asynchronous methods to retrieve associated nodes and contexts.
 * - Manages the state of the discovery process using a set of predefined states.
 * - Supports adding and removing the discovery model from the graph.
 * - Handles compression and storage of discovered and to-be-created trees.
 *
 * @example
 * ```typescript
 * const discover = new SpinalDiscover<MyModel>(graph, context, organ);
 * await discover.addToGraph();
 * await discover.setTreeDiscovered(treeJson);
 * const discoveredTree = await discover.getTreeDiscovered();
 * ```
 *
 * @method getGraph(): Retrieves the associated SpinalGraph node.
 * @method getOrgan(): Retrieves the associated organ SpinalNode.
 * @method getContext(): Retrieves the associated SpinalContext.
 * @method changeState(state: keyof typeof STATES): Changes the state of the discovery process.
 * @method addToGraph(): Adds the discovery model to the graph.
 * @method removeFromGraph(): Removes the discovery model from the graph.
 * @method setTreeDiscovered(json: any): Compresses and stores the discovered tree data.
 * @method setTreeToCreate(json: any): Compresses and stores the to-be-created tree data.
 * @method getTreeDiscovered(hubUrl?: string): Retrieves and decompresses the discovered tree data.
 * @method getTreeToCreate(hubUrl?: string): Retrieves and decompresses the to-be-created tree data.
 *
 */ class SpinalDiscover extends spinal_core_connectorjs_1.Model {
    constructor(graph, context, organ){
        super();
        if (!graph || !context || !organ) return;
        const choicesSet = new Set(Object.keys(constants_1.STATES));
        this.add_attr({
            id: (0, uuid_1.v4)(),
            graph: graph && new spinal_core_connectorjs_1.Pbr(graph),
            context: context && new spinal_core_connectorjs_1.Pbr(context),
            organ: organ && new spinal_core_connectorjs_1.Pbr(organ),
            creation: Date.now(),
            state: new spinal_core_connectorjs_1.Choice(0, Array.from(choicesSet)),
            treeDiscovered: new spinal_core_connectorjs_1.Ptr(),
            treeToCreate: new spinal_core_connectorjs_1.Ptr()
        });
    }
    getGraph() {
        return (0, functions_1.loadPtr)(this.graph);
    }
    getOrgan() {
        return __awaiter(this, void 0, void 0, function*() {
            return (0, functions_1.loadPtr)(this.organ);
        });
    }
    getContext() {
        return (0, functions_1.loadPtr)(this.context);
    }
    changeState(state) {
        const choicesSet = new Set(Object.keys(constants_1.STATES));
        this.state.set(Array.from(choicesSet).indexOf(state));
    }
    addToGraph() {
        return this.getOrgan().then((organNode)=>__awaiter(this, void 0, void 0, function*() {
                const organ = yield organNode.getElement(true);
                return organ.addDiscoverModelToGraph(this);
            }));
    }
    removeFromGraph() {
        return this.getOrgan().then((organNode)=>__awaiter(this, void 0, void 0, function*() {
                const organ = yield organNode.getElement(true);
                return organ.removeDiscoverModelFromGraph(this);
            }));
    }
    setTreeDiscovered(json) {
        return __awaiter(this, void 0, void 0, function*() {
            const compressed = yield gzip.gzip(JSON.stringify(json));
            const path = new spinal_core_connectorjs_1.Path(compressed);
            if (this.treeDiscovered) this.rem_attr("treeDiscovered");
            this.add_attr({
                treeDiscovered: new spinal_core_connectorjs_1.Ptr(path)
            });
        });
    }
    setTreeToCreate(json) {
        return __awaiter(this, void 0, void 0, function*() {
            const compressed = yield gzip.gzip(JSON.stringify(json));
            const path = new spinal_core_connectorjs_1.Path(compressed);
            if (this.treeToCreate) this.rem_attr("treeToCreate");
            this.add_attr({
                treeToCreate: new spinal_core_connectorjs_1.Ptr(path)
            });
        });
    }
    getTreeDiscovered(hubUrl) {
        return __awaiter(this, void 0, void 0, function*() {
            const pathData = yield (0, functions_1.getPathData)(this.treeDiscovered.data.value, hubUrl);
            const decompressed = yield gzip.ungzip(pathData);
            return JSON.parse(decompressed.toString());
        });
    }
    getTreeToCreate(hubUrl) {
        return __awaiter(this, void 0, void 0, function*() {
            const pathData = yield (0, functions_1.getPathData)(this.treeToCreate.data.value, hubUrl);
            const decompressed = yield gzip.ungzip(pathData);
            return JSON.parse(decompressed.toString());
        });
    }
}
exports.SpinalDiscover = SpinalDiscover;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalDiscover
]);
exports.default = SpinalDiscover;

},{"650623592bcb9b87":"cQPh9","e0394974688f510a":"f1qTK","9e22f5891ae6b3f":"6eHD2","56cb85f18ff58418":"kgd7D","9a90ccaefcc8f503":"hWUhg"}],"kgd7D":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPtr = exports.getPathData = exports.s4 = exports.guid = exports.waitModelReady = void 0;
const spinal_core_connectorjs_type_1 = require("ba31ddf06fb7e2b4");
const axios_retry_1 = require("c995fd9618cea031");
const axios_1 = require("802997d2b09f6b19");
const Q = require("d33f66fc942456e7");
function waitModelReady() {
    const deferred = Q.defer();
    const WaitModelReadyLoop = (defer)=>{
        if (spinal_core_connectorjs_type_1.FileSystem._sig_server === false) setTimeout(()=>{
            defer.resolve(WaitModelReadyLoop(defer));
        }, 200);
        else defer.resolve();
        return defer.promise;
    };
    return WaitModelReadyLoop(deferred);
}
exports.waitModelReady = waitModelReady;
function guid(name) {
    return `${name}-${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}-${Date.now().toString(16)}`;
}
exports.guid = guid;
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
exports.s4 = s4;
function getPathData(dynamicId, hubUrl = "") {
    const path = `${hubUrl}/sceen/_?u=${dynamicId}`;
    const client = axios_1.default.create({
        baseURL: hubUrl
    });
    (0, axios_retry_1.default)(client, {
        retries: 3,
        retryDelay: axios_retry_1.default.exponentialDelay
    });
    return client.get(path, {
        responseType: 'arraybuffer'
    }).then((response)=>{
        // return Buffer.from(response.data);
        return new Uint8Array(response.data);
    });
}
exports.getPathData = getPathData;
function loadPtr(ptr) {
    return new Promise((resolve, reject)=>{
        try {
            ptr.load((data)=>resolve(data));
        } catch (error) {
            reject(error);
        }
    });
}
exports.loadPtr = loadPtr;

},{"ba31ddf06fb7e2b4":"1A32E","c995fd9618cea031":"ayQ7D","802997d2b09f6b19":"kooH4","d33f66fc942456e7":"3zCeD"}],"2LVXY":[function(require,module,exports,__globalThis) {
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
exports.SpinalListener = void 0;
const spinal_core_connectorjs_1 = require("987f42663569d0f6");
const uuid_1 = require("e37943569d8ec5ba");
const functions_1 = require("f5c8026ed7390cb1");
/**
 * Represents a listener model within the Spinal platform, responsible for monitoring and managing
 * relationships between various nodes such as graph, context, organ, network, BMS device, and profile.
 *
 * @remarks
 * The `SpinalListener` class extends the base `Model` class and encapsulates logic for adding and removing
 * itself from the graph, as well as managing references within associated device and organ nodes.
 *
 * @constructor
 * @param graph - The main SpinalGraph node.
 * @param context - The SpinalContext node associated with this listener.
 * @param organ - The organ SpinalNode to which this listener is attached.
 * @param network - The network SpinalNode associated with this listener.
 * @param bmsDevice - The BMS device SpinalNode monitored by this listener.
 * @param profile - The profile SpinalNode associated with this listener.
 *
 * @method getGraph - Retrieves the associated graph node.
 * @method getOrgan - Retrieves the associated organ node.
 * @method getContext - Retrieves the associated context node.
 * @method getBmsDevice - Retrieves the associated BMS device node.
 * @method getNetwork - Retrieves the associated network node.
 * @method getProfile - Retrieves the associated profile node.
 * @method addToGraph - Adds this listener to the organ's listener list and updates the device reference.
 * @method removeFromGraph - Removes this listener from the organ's listener list and device reference.
 * @method addToDevice - Adds a reference to this listener in the associated BMS device node.
 */ class SpinalListener extends spinal_core_connectorjs_1.Model {
    constructor(graph, context, organ, network, bmsDevice, profile){
        super();
        if (!graph || !context || !organ || !network || !bmsDevice || !profile) return;
        this.add_attr({
            id: (0, uuid_1.v4)(),
            monitored: true,
            network: new spinal_core_connectorjs_1.Pbr(network),
            organ: new spinal_core_connectorjs_1.Pbr(organ),
            context: new spinal_core_connectorjs_1.Pbr(context),
            graph: new spinal_core_connectorjs_1.Pbr(graph),
            bmsDevice: new spinal_core_connectorjs_1.Pbr(bmsDevice),
            profile: new spinal_core_connectorjs_1.Pbr(profile)
        });
    }
    getGraph() {
        return (0, functions_1.loadPtr)(this.graph);
    }
    getOrgan() {
        return (0, functions_1.loadPtr)(this.organ);
    }
    getContext() {
        return (0, functions_1.loadPtr)(this.context);
    }
    getBmsDevice() {
        return (0, functions_1.loadPtr)(this.bmsDevice);
    }
    getNetwork() {
        return (0, functions_1.loadPtr)(this.network);
    }
    getProfile() {
        return (0, functions_1.loadPtr)(this.profile);
    }
    addToGraph() {
        return this.getOrgan().then((organNode)=>__awaiter(this, void 0, void 0, function*() {
                const organModel = yield organNode.getElement(true);
                if (organModel) {
                    yield this.addToDevice(); // add reference to listener in device
                    return organModel.addListenerModelToGraph(this); // add listener to organ listener list
                }
            }));
    }
    removeFromGraph() {
        const promises = [
            this.getOrgan(),
            this.getBmsDevice()
        ];
        return Promise.all(promises).then(([organNode, deviceNode])=>__awaiter(this, void 0, void 0, function*() {
                const organModel = yield organNode.getElement(true);
                if (organModel) {
                    deviceNode.info.remove_attr('listener'); // remove reference to listener in device
                    return organModel.removeListenerModelFromGraph(this); // remove listener from organ listener list
                }
            }));
    }
    addToDevice() {
        return this.getBmsDevice().then((device)=>{
            if (device.info.listeners) device.info.rem_attr('listener');
            device.info.add_attr({
                listener: new spinal_core_connectorjs_1.Pbr(this)
            });
        });
    }
}
exports.SpinalListener = SpinalListener;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalListener
]);
exports.default = SpinalListener;

},{"987f42663569d0f6":"cQPh9","e37943569d8ec5ba":"f1qTK","f5c8026ed7390cb1":"kgd7D"}],"ehBZ9":[function(require,module,exports,__globalThis) {
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
exports.SpinalPilot = void 0;
const spinal_core_connectorjs_1 = require("544cb1c66e93f1ac");
const uuid_1 = require("b4e1c71d135f7388");
const constants_1 = require("969196cbbcc610a7");
const functions_1 = require("187a8dda193b7c83");
/**
 * Represents a pilot model that manages the state and association of a pilot process
 * with a specific organ node and a set of requests in the Spinal platform.
 *
 * @template T - The type of requests handled by the pilot.
 * @extends Model
 *
 * @remarks
 * The `SpinalPilot` class encapsulates the logic for managing pilot states, associating
 * with organ nodes, and handling requests. It provides methods to transition between
 * different pilot states (init, processing, success, error), and to add or remove itself
 * from the graph or a specific node.
 *
 * @param organ - The organ node to associate with the pilot.
 * @param requests - The requests to be managed by the pilot. Can be a single request or an array of requests.
 *
 * @property id - Unique identifier for the pilot instance.
 * @property state - The current state of the pilot, represented as a choice from `PILOT_STATES`.
 * @property creation - Timestamp of pilot creation.
 * @property organ - Reference to the associated organ node.
 * @property requests - The list of requests managed by the pilot.
 * @property node - (Optional) The node to which the pilot is attached.
 *
 * @method setInitMode - Sets the pilot state to `init`.
 * @method setProcessMode - Sets the pilot state to `processing`.
 * @method setSuccessMode - Sets the pilot state to `success`.
 * @method setErrorMode - Sets the pilot state to `error`.
 * @method getOrgan - Loads and returns the associated organ node.
 * @method addToGraph - Adds the pilot model to the organ's graph.
 * @method removeFromGraph - Removes the pilot model from the organ's graph.
 * @method addToNode - Attaches the pilot to a given endpoint node.
 * @method removeFromNode - Removes the pilot from its associated node.
 */ class SpinalPilot extends spinal_core_connectorjs_1.Model {
    constructor(organ, requests){
        super();
        if (!organ || !requests) return;
        const choicesSet = new Set(Object.keys(constants_1.PILOT_STATES));
        this.add_attr({
            id: (0, uuid_1.v4)(),
            state: new spinal_core_connectorjs_1.Choice(0, Array.from(choicesSet)),
            creation: Date.now(),
            organ: new spinal_core_connectorjs_1.Pbr(organ),
            requests: Array.isArray(requests) ? requests : [
                requests
            ]
        });
    }
    setInitMode() {
        this.state.set(constants_1.PILOT_STATES.init);
    }
    setProcessMode() {
        this.state.set(constants_1.PILOT_STATES.processing);
    }
    setSuccessMode() {
        this.state.set(constants_1.PILOT_STATES.success);
    }
    setErrorMode() {
        this.state.set(constants_1.PILOT_STATES.error);
    }
    getOrgan() {
        return (0, functions_1.loadPtr)(this.organ);
    }
    addToGraph() {
        return this.getOrgan().then((organNode)=>__awaiter(this, void 0, void 0, function*() {
                const organModel = yield organNode.getElement(true);
                if (organModel) return organModel.addPilotModelToGraph(this);
                return -1;
            }));
    }
    removeFromGraph() {
        return this.getOrgan().then((organNode)=>__awaiter(this, void 0, void 0, function*() {
                const organModel = yield organNode.getElement(true);
                if (organModel) return organModel.removePilotModelFromGraph(this);
                return false;
            }));
    }
    addToNode(endpoint) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this.add_attr({
                    node: endpoint
                });
                if (!((_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.info) === null || _a === void 0 ? void 0 : _a.pilot)) {
                    endpoint.info.add_attr({
                        pilot: new spinal_core_connectorjs_1.Ptr(new spinal_core_connectorjs_1.Lst([
                            this
                        ]))
                    });
                    return 1;
                }
                const pilotageLst = yield (0, functions_1.loadPtr)(endpoint.info.pilot);
                pilotageLst.push(this);
                return pilotageLst.length;
            } catch (error) {
                this.rem_attr("node");
                return -1;
            }
        });
    }
    removeFromNode() {
        var _a, _b;
        if (!((_b = (_a = this.node) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.pilot)) return Promise.resolve(false);
        return (0, functions_1.loadPtr)(this.node.info.pilot).then((lst)=>{
            for(let i = 0; i < lst.length; i++){
                const element = lst[i];
                if (element.id.get() === this.id.get()) {
                    lst.remove(element);
                    return true;
                }
            }
            return false;
        }).catch((err)=>{
            return false;
        });
    }
}
exports.SpinalPilot = SpinalPilot;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalPilot
]);
exports.default = SpinalPilot;

},{"544cb1c66e93f1ac":"cQPh9","b4e1c71d135f7388":"f1qTK","969196cbbcc610a7":"6eHD2","187a8dda193b7c83":"kgd7D"}],"gmY7t":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("c35cf4869e80a6db"), exports);
__exportStar(require("2102ad0a03ea3b47"), exports);

},{"c35cf4869e80a6db":"hZs2P","2102ad0a03ea3b47":"Rya9r"}],"hZs2P":[function(require,module,exports,__globalThis) {
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
exports.SpinalConnectorService = void 0;
const constants_1 = require("78400c4bc7a66c9d");
const lifecycle_1 = require("fe28f62d31f89736");
/**
 * Singleton service class responsible for managing the lifecycle and configuration
 * of a Spinal Organ within the SpinalCom ecosystem.
 *
 * The `SpinalConnectorService` handles initialization, configuration file management,
 * PM2 process instance retrieval and restart logic, and provides access to the
 * current organ configuration.
 *
 * @remarks
 * - Use `SpinalConnectorService.getInstance()` to obtain the singleton instance.
 * - The service ensures that the organ configuration file exists and is loaded,
 *   and provides utility methods to interact with the organ's PM2 process.
 *
 * @example
 * ```typescript
 * const connectorService = SpinalConnectorService.getInstance();
 * await connectorService.initialize(connect, organInfo);
 * ```
 *
 * @public
 */ class SpinalConnectorService {
    constructor(){
        this._organInfo = null;
        this.organConfigModel = null;
    }
    static getInstance() {
        if (!this._instance) this._instance = new SpinalConnectorService();
        return this._instance;
    }
    initialize(connect, organInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            this._organInfo = organInfo;
            if (!organInfo.path) organInfo.path = `${constants_1.DEFAULT_PATH}/${organInfo.name}.conf`;
            let alreadyExists = true;
            let organModel = yield (0, lifecycle_1.getOrganConfig)(connect, organInfo.path);
            if (!organModel) {
                alreadyExists = false;
                organModel = yield (0, lifecycle_1.createOrganConfigFile)(connect, organInfo);
            }
            this.organConfigModel = organModel;
            const instancePm2 = yield (0, lifecycle_1.getPm2Instance)(organInfo.name);
            return {
                alreadyExists,
                node: organModel,
                instancePm2
            };
        });
    }
    getOrganConfig() {
        return this.organConfigModel;
    }
    checkIfItsSameOrgan(organId) {
        if (!this.organConfigModel) return false;
        return this.organConfigModel.id.get() === organId;
    }
    getPm2Instance() {
        var _a;
        if (!this._organInfo) return Promise.resolve(undefined);
        return (0, lifecycle_1.getPm2Instance)(((_a = this._organInfo) === null || _a === void 0 ? void 0 : _a.name) || '');
    }
    _bindRestart() {
        var _a;
        if (!this._organInfo) return;
        (_a = this.organConfigModel) === null || _a === void 0 || _a.restart.bind(()=>__awaiter(this, void 0, void 0, function*() {
                var _b;
                const mustRestart = (_b = this.organConfigModel) === null || _b === void 0 ? void 0 : _b.restart.get();
                if (mustRestart) yield this._restartPm2Instance();
            }));
    }
    _restartPm2Instance() {
        return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                var _a;
                if (!this._organInfo) return;
                const pm2Instance = yield (0, lifecycle_1.getPm2Instance)(((_a = this._organInfo) === null || _a === void 0 ? void 0 : _a.name) || '');
                if (!pm2Instance) return resolve(false);
                const pm_id = pm2Instance.pm_id;
                (0, pm2_1.restart)(pm_id, (err)=>{
                    if (err) return resolve(false);
                    resolve(true);
                });
            }));
    }
}
exports.SpinalConnectorService = SpinalConnectorService;
SpinalConnectorService._instance = null;
exports.default = SpinalConnectorService;

},{"78400c4bc7a66c9d":"6eHD2","fe28f62d31f89736":"cDGa7"}],"cDGa7":[function(require,module,exports,__globalThis) {
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
exports.getPm2Instance = exports.createOrganConfigFile = exports.getOrganConfig = void 0;
const models_1 = require("5ebb1ed036a5db6e");
const constants_1 = require("ea71aa2cede4fd2d");
const spinal_core_connectorjs_1 = require("20b8d8f3d6e9846e");
function getOrganConfig(spinalConnection, filePath) {
    return new Promise((resolve)=>{
        const { folderPath, fileName } = getFileInfoByPath(filePath);
        spinalConnection.load_or_make_dir(`${folderPath}`, (directory)=>__awaiter(this, void 0, void 0, function*() {
                for(let index = 0; index < directory.length; index++){
                    const element = directory[index];
                    const elementName = element.name.get().toLowerCase();
                    if (elementName === fileName.toLowerCase() || elementName === `${fileName}.conf`.toLowerCase()) {
                        const organ = yield loadConfigModel(element);
                        return resolve(organ);
                    }
                }
                resolve(null);
            }));
    });
}
exports.getOrganConfig = getOrganConfig;
function createOrganConfigFile(spinalConnection, organInfo) {
    return new Promise((resolve, reject)=>{
        if (!organInfo.name) return reject(new Error("Organ name is required"));
        if (!organInfo.type) organInfo.type = constants_1.DEFAULT_ORGAN_TYPE;
        if (!organInfo.path) organInfo.path = `${constants_1.DEFAULT_PATH}/${organInfo.name}`;
        if (!organInfo.model) organInfo.model = new models_1.SpinalOrganModel(organInfo.name, organInfo.type);
        let { folderPath, fileName } = getFileInfoByPath(organInfo.path);
        if (fileName.toLowerCase().endsWith(".conf")) fileName = fileName.replace(/\.conf$/i, ""); // Remove .conf extension if present
        spinalConnection.load_or_make_dir(`${folderPath}`, (directory)=>__awaiter(this, void 0, void 0, function*() {
                const file = new spinal_core_connectorjs_1.File(`${fileName}.conf`.toLowerCase(), organInfo.model, undefined);
                directory.push(file);
                return resolve(organInfo.model);
            }));
    });
}
exports.createOrganConfigFile = createOrganConfigFile;
function getPm2Instance(name) {
    return new Promise((resolve, reject)=>{
        pm2.connect((err)=>{
            if (err) return resolve(undefined);
            pm2.list((err, apps)=>{
                if (err) return resolve(undefined);
                const instance = apps.find((app)=>app.name === name);
                resolve(instance);
            });
        });
    });
}
exports.getPm2Instance = getPm2Instance;
function loadConfigModel(element) {
    return new Promise((resolve)=>{
        element.load((organ)=>resolve(organ));
    });
}
function getFileInfoByPath(filePath) {
    const pathParts = filePath.split("/");
    const fileName = pathParts.pop() || "";
    const folderPath = pathParts.join("/");
    return {
        folderPath,
        fileName
    };
}

},{"5ebb1ed036a5db6e":"fJ4Cq","ea71aa2cede4fd2d":"6eHD2","20b8d8f3d6e9846e":"cQPh9"}],"Rya9r":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalQueue = void 0;
const lodash = require("307e15d769f7c597");
const events_1 = require("5bfaebbfed98bb9f");
const constants_1 = require("a70b1ee7c9d40f63");
/**
 * A generic queue class with event emitting capabilities and progress tracking.
 *
 * @template T The type of items stored in the queue.
 * @extends EventEmitter
 *
 * This class provides methods to add, remove, and process items in a queue,
 * while emitting events for queue start and finish. It also tracks the percentage
 * of processed items and supports debounced queue start.
 *
 * @property {number} percent - The percentage of processed items in the queue.
 * @property {boolean} isProcessing - Indicates if the queue is currently being processed.
 * @property {number} startDebounce - The debounce delay (in ms) before starting the queue.
 *
 *
 * @method start() - Starts processing the queue if not already in progress.
 * @method addToQueue(item: T | T[]) - Adds one or more items to the queue and triggers debounced start.
 * @method setQueue(queue: T[]) - Sets the queue with the provided array of items, clears the existing queue, recalculates the processing percentage, and initiates the debounced start process.
 * @method dequeue() - Removes and returns the first item from the queue, recalculates the percent, and triggers finish if the queue becomes empty.
 * @method pop() - Removes and returns the last item from the queue, recalculates the percent, and triggers finish if the queue becomes empty.
 * @method clear() - Clears the queue by resetting the queue list, processed items, and percent completion, and calls finish.
 * @method toArray() - Returns a shallow copy of the current queue as an array.
 * @method isEmpty() - Checks whether the queue is empty.
 * @method getQueue() - Deprecated method to get the queue, use toArray instead.
 * @method refresh() - Deprecated method to clear the queue, use clear instead.
 * @event QueueEvents.START - Emitted when the queue starts processing.
 * @event QueueEvents.FINISH - Emitted when the queue finishes processing.
 *
 * @example
 * const queue = new SpinalQueue<string>();
 * queue.on(QueueEvents.START, () => console.log("Queue started"));
 * queue.on(QueueEvents.FINISH, () => console.log("Queue finished"));
 * queue.addToQueue(["item1", "item2", "item3"]);
 * console.log(queue.percent); // Outputs the percentage of completion
 *
 */ class SpinalQueue extends events_1.EventEmitter {
    constructor(startDebounce = 3000){
        super();
        this.processed = []; // List of processed items, used to calculate the percentage of completion
        this.queueList = [];
        this.percent = 0;
        this.isProcessing = false;
        this.startDebounce = 3000;
        this.startDebounce = startDebounce;
        this.debounceStart = lodash.debounce(this.start.bind(this), this.startDebounce);
    }
    start() {
        if (!this.isProcessing) {
            this.isProcessing = true;
            this.emit(constants_1.QueueEvents.START);
        }
    }
    /**
     * Adds one or more items to the queue and triggers debounced start.
     *
     * @param {T | T[]} item - The item(s) to add to the queue.
     * @returns {number} The new length of the queue.
     */ addToQueue(item) {
        if (!Array.isArray(item)) item = [
            item
        ];
        this.queueList.push(...item);
        this.debounceStart();
        return this.queueList.length;
    }
    /**
     * Sets the queue with the provided array of items, clears the existing queue,
     * recalculates the processing percentage, and initiates the debounced start process.
     *
     * @param queue - An array of items of type `T` to set as the new queue.
     * @returns The length of the newly set queue.
     */ setQueue(queue) {
        this.clear();
        this.queueList = queue;
        this.recalculatePercent(undefined);
        this.debounceStart();
        return this.queueList.length;
    }
    /**
     * Removes and returns the first item from the queue.
     * Also recalculates the percent based on the dequeued item.
     * If the queue becomes empty after the operation, triggers the finish process.
     *
     * @returns {T | undefined} The dequeued item, or `undefined` if the queue is empty.
     */ dequeue() {
        const item = this.queueList.shift();
        this.recalculatePercent(item);
        if (this.queueList.length === 0) this.finish();
        return item;
    }
    /**
     * Removes and returns the last item from the queue.
     * Recalculates the percent based on the popped item and
     * triggers the finish logic if the queue becomes empty.
     *
     * @returns {T | undefined} The last item in the queue, or `undefined` if the queue is empty.
     */ pop() {
        const item = this.queueList.pop();
        this.recalculatePercent(item);
        if (this.queueList.length === 0) this.finish();
        return item;
    }
    /**
     * Clears the queue by resetting the queue list, processed items, and percent completion.
     * Also calls the `finish` method to finalize the clearing process.
     */ clear() {
        this.queueList = [];
        this.processed = [];
        this.percent = 0;
        this.finish();
    }
    /**
     * Returns a shallow copy of the current queue as an array.
     *
     * @returns {T[]} An array containing the items in the queue.
     */ toArray() {
        return [
            ...this.queueList
        ];
    }
    /**
     * Checks whether the queue is empty.
     *
     * @returns {boolean} `true` if the queue contains no elements, otherwise `false`.
     */ isEmpty() {
        return this.queueList.length === 0;
    }
    getQueue() {
        // deprecated, use toArray instead
        console.warn("getQueue is deprecated, use toArray instead");
        return this.toArray();
    }
    refresh() {
        // deprecated, use clear instead
        console.warn("refresh is deprecated, use clear instead");
        this.clear();
    }
    finish() {
        if (this.isProcessing) {
            this.isProcessing = false;
            this.emit(constants_1.QueueEvents.FINISH);
        }
    }
    recalculatePercent(item) {
        if (item) this.processed.push(item);
        const total = this.processed.length + this.queueList.length;
        if (total === 0) {
            this.percent = 0;
            return;
        }
        this.percent = Math.floor(100 * this.processed.length / total);
    }
}
exports.SpinalQueue = SpinalQueue;
exports.default = SpinalQueue;

},{"307e15d769f7c597":"LUhzz","5bfaebbfed98bb9f":"1Gpx3","a70b1ee7c9d40f63":"6eHD2"}],"kQSwV":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalSNMPDiscover = void 0;
const spinal_core_connectorjs_1 = require("21097df71d5f5946");
const SpinalSNMPNetwork_1 = require("ecd3c4fb8029972b");
const spinal_connector_service_1 = require("977405b4433492d9");
class SpinalSNMPDiscover extends spinal_connector_service_1.SpinalDiscover {
    constructor(graph, context, organ, networks){
        super(graph, context, organ);
        if (!graph || !context || !networks || !organ) return;
        const networksFormatted = this._formatNetworks(networks);
        this.add_attr({
            networks: networksFormatted,
            progress: new spinal_core_connectorjs_1.Model({
                finished: 0,
                failed: 0,
                total: networks.length
            })
        });
    }
    _formatNetworks(networks) {
        const networksLst = new spinal_core_connectorjs_1.Lst();
        for (const network of networks)networksLst.push(new SpinalSNMPNetwork_1.SpinalSNMPNetwork(network));
        return networksLst;
    }
}
exports.SpinalSNMPDiscover = SpinalSNMPDiscover;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalSNMPDiscover
]);
exports.default = SpinalSNMPDiscover;

},{"21097df71d5f5946":"cQPh9","ecd3c4fb8029972b":"6zR1E","977405b4433492d9":"42AUb"}],"5dLgf":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalSNMPListener = void 0;
const spinal_core_connectorjs_1 = require("870eadba82682541");
const spinal_connector_service_1 = require("eed47266b02d65c9");
class SpinalSNMPListener extends spinal_connector_service_1.SpinalListener {
    constructor(graph, context, organ, network, bmsDevice, profile){
        super(graph, context, organ, network, bmsDevice, profile);
        if (!graph || !context || !organ || !network || !bmsDevice || !profile) return;
    }
    getAllData() {
        const promises = [
            this.getGraph(),
            this.getOrgan(),
            this.getContext(),
            this.getBmsDevice(),
            this.getNetwork(),
            this.getProfile()
        ];
        return Promise.all(promises).then(([graph, organ, context, device, network, profile])=>{
            return {
                graph,
                organ,
                context,
                device,
                network,
                profile
            };
        });
    }
}
exports.SpinalSNMPListener = SpinalSNMPListener;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalSNMPListener
]);
exports.default = SpinalSNMPListener;

},{"870eadba82682541":"cQPh9","eed47266b02d65c9":"42AUb"}],"6ZcIZ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalSNMPPilot = void 0;
const spinal_core_connectorjs_1 = require("b11ff30c6a9564e7");
const spinal_connector_service_1 = require("1b9d9ed4f045433c");
class SpinalSNMPPilot extends spinal_connector_service_1.SpinalPilot {
    constructor(organ, request){
        super(organ, request);
        if (!organ || !request) return;
    }
}
exports.SpinalSNMPPilot = SpinalSNMPPilot;
spinal_core_connectorjs_1.spinalCore.register_models([
    SpinalSNMPPilot
]);
exports.default = SpinalSNMPPilot;

},{"b11ff30c6a9564e7":"cQPh9","1b9d9ed4f045433c":"42AUb"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-dashboard-panel.5ffdcc0f.js.map
