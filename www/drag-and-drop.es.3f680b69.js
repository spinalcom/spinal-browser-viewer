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
})({"eusbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragAndDrop", ()=>M);
var S = Object.defineProperty;
var V = (t, e, l)=>e in t ? S(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
    }) : t[e] = l;
var T = (t, e, l)=>(V(t, typeof e != "symbol" ? e + "" : e, l), l);
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ let o = null, c = null, v = {
    id: null,
    date: null
}, _ = !1, m = !0, u = {
    el: null,
    cell: null,
    timeout: null
};
const r = {
    _eid: null,
    fromVueCal: null,
    toVueCal: null
}, M = class {
    constructor(t){
        T(this, "_vuecal");
        this._vuecal = t;
    }
    _getEventStart(t) {
        const { timeStep: e, timeCellHeight: l, timeFrom: i, utils: n } = this._vuecal;
        let { y: a } = n.cell.getPosition(t);
        return a -= 1 * t.dataTransfer.getData("cursor-grab-at"), Math.round(a * e / parseInt(l) + i);
    }
    _updateEventStartEnd(t, e, l, i) {
        const n = 1 * l.duration || e.endTimeMinutes - e.startTimeMinutes;
        let a = Math.max(this._getEventStart(t), 0);
        if (this._vuecal.snapToTime) {
            const d = a + this._vuecal.snapToTime / 2;
            a = d - d % this._vuecal.snapToTime;
        }
        e.startTimeMinutes = a, e.start = new Date(new Date(i).setMinutes(a)), e.endTimeMinutes = Math.min(a + n, 1440), e.end = new Date(new Date(i).setMinutes(e.endTimeMinutes));
    }
    eventDragStart(t, e) {
        if (t.target.nodeType === 3) return t.preventDefault();
        t.dataTransfer.dropEffect = "move", t.dataTransfer.setData("event", JSON.stringify(e)), t.dataTransfer.setData("cursor-grab-at", t.offsetY);
        const { clickHoldAnEvent: l } = this._vuecal.domEvents;
        setTimeout(()=>{
            l._eid = null, clearTimeout(l.timeoutId), e.deleting = !1;
        }, 0), this._vuecal.domEvents.dragAnEvent._eid = e._eid, r._eid = e._eid, r.fromVueCal = this._vuecal._uid, e.dragging = !0, setTimeout(()=>e.draggingStatic = !0, 0), _ = !1, v = {
            id: this._vuecal.view.id,
            date: this._vuecal.view.startDate
        }, m = !0;
    }
    eventDragEnd(t) {
        this._vuecal.domEvents.dragAnEvent._eid = null, r._eid = null, t.dragging = !1, t.draggingStatic = !1;
        const { fromVueCal: e, toVueCal: l } = r;
        l && e !== l && this._vuecal.utils.event.deleteAnEvent(t), r.fromVueCal = null, r.toVueCal = null, _ && m && v.id && this._vuecal.switchView(v.id, v.date, !0);
    }
    cellDragEnter(t, e, l) {
        const i = t.currentTarget;
        if (!t.currentTarget.contains(t.relatedTarget)) {
            if (i === u.el || !i.className.includes("vuecal__cell-content")) return !1;
            u.el && (u.cell.highlighted = !1), u = {
                el: i,
                cell: e,
                timeout: clearTimeout(u.timeout)
            }, e.highlighted = !0, [
                "years",
                "year",
                "month"
            ].includes(this._vuecal.view.id) && (u.timeout = setTimeout(()=>this._vuecal.switchToNarrowerView(l), 2e3));
        }
    }
    cellDragOver(t, e, l, i) {
        t.preventDefault(), e.highlighted = !0, (i || i === 0) && (e.highlightedSplit = i);
    }
    cellDragLeave(t, e) {
        t.preventDefault(), t.currentTarget.contains(t.relatedTarget) || (e.highlightedSplit = !1, u.cell === e && (clearTimeout(u.timeout), u = {
            el: null,
            cell: null,
            timeout: null
        }, e.highlighted = !1));
    }
    cellDragDrop(t, e, l, i) {
        t.preventDefault(), clearTimeout(u.timeout), u = {
            el: null,
            cell: null,
            timeout: null
        };
        const n = JSON.parse(t.dataTransfer.getData("event") || "{}");
        let a, d;
        if (r.fromVueCal !== this._vuecal._uid) {
            const { _eid: s, start: D, end: w, duration: g, ...E } = n;
            a = this._vuecal.utils.event.createAnEvent(l, g, {
                ...E,
                split: i
            });
        } else if (a = this._vuecal.view.events.find((s)=>s._eid === r._eid), a || (a = this._vuecal.mutableEvents.find((s)=>s._eid === r._eid), d = !!a), !a) {
            const s = n.endTimeMinutes - n.startTimeMinutes, { start: D, end: w, ...g } = n;
            a = this._vuecal.utils.event.createAnEvent(l, s, {
                ...g,
                split: i
            });
        }
        const { start: f, split: p } = a;
        this._updateEventStartEnd(t, a, n, l), d && this._vuecal.addEventsToView([
            a
        ]), a.dragging = !1, (i || i === 0) && (a.split = i), e.highlighted = !1, e.highlightedSplit = null, m = !1, r.toVueCal = this._vuecal._uid;
        const h = {
            event: this._vuecal.cleanupEvent(a),
            oldDate: f,
            newDate: a.start,
            ...(i || i === 0) && {
                oldSplit: p,
                newSplit: i
            },
            originalEvent: this._vuecal.cleanupEvent(n),
            external: !r.fromVueCal
        };
        this._vuecal.$emit("event-drop", h), this._vuecal.$emit("event-change", {
            event: h.event,
            originalEvent: h.originalEvent
        }), setTimeout(()=>{
            r._eid && this.eventDragEnd(a);
        }, 300);
    }
    viewSelectorDragEnter(t, e, l) {
        t.currentTarget.contains(t.relatedTarget) || (l.highlightedControl = e, clearTimeout(o), o = setTimeout(()=>{
            if ([
                "previous",
                "next"
            ].includes(e)) this._vuecal[e](), clearInterval(c), c = setInterval(this._vuecal[e], 800);
            else if (e === "today") {
                let i;
                clearInterval(c), this._vuecal.view.id.includes("year") && (i = this._vuecal.enabledViews.filter((n)=>!n.includes("year"))[0]), this._vuecal.switchView(i || this._vuecal.view.id, new Date(new Date().setHours(0, 0, 0, 0)), !0);
            } else this._vuecal.switchView(e, null, !0);
            _ = !0;
        }, 800));
    }
    viewSelectorDragLeave(t, e, l) {
        t.currentTarget.contains(t.relatedTarget) || l.highlightedControl === e && (l.highlightedControl = null, o && (o = clearTimeout(o)), c && (c = clearInterval(c)));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=drag-and-drop.es.3f680b69.js.map
