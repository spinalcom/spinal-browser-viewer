(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

(function(window) {
	"use strict";
	/***************
	 Setup
	 ***************/

	/* If jQuery is already loaded, there's no point in loading this shim. */
	if (window.jQuery) {
		return;
	}

	/* jQuery base. */
	var $ = function(selector, context) {
		return new $.fn.init(selector, context);
	};

	/********************
	 Private Methods
	 ********************/

	/* jQuery */
	$.isWindow = function(obj) {
		/* jshint eqeqeq: false */
		return obj && obj === obj.window;
	};

	/* jQuery */
	$.type = function(obj) {
		if (!obj) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
				class2type[toString.call(obj)] || "object" :
				typeof obj;
	};

	/* jQuery */
	$.isArray = Array.isArray || function(obj) {
		return $.type(obj) === "array";
	};

	/* jQuery */
	function isArraylike(obj) {
		var length = obj.length,
				type = $.type(obj);

		if (type === "function" || $.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	/***************
	 $ Methods
	 ***************/

	/* jQuery: Support removed for IE<9. */
	$.isPlainObject = function(obj) {
		var key;

		if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
			return false;
		}

		try {
			if (obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		for (key in obj) {
		}

		return key === undefined || hasOwn.call(obj, key);
	};

	/* jQuery */
	$.each = function(obj, callback, args) {
		var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}

		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	};

	/* Custom */
	$.data = function(node, key, value) {
		/* $.getData() */
		if (value === undefined) {
			var getId = node[$.expando],
					store = getId && cache[getId];

			if (key === undefined) {
				return store;
			} else if (store) {
				if (key in store) {
					return store[key];
				}
			}
			/* $.setData() */
		} else if (key !== undefined) {
			var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

			cache[setId] = cache[setId] || {};
			cache[setId][key] = value;

			return value;
		}
	};

	/* Custom */
	$.removeData = function(node, keys) {
		var id = node[$.expando],
				store = id && cache[id];

		if (store) {
			// Cleanup the entire store if no keys are provided.
			if (!keys) {
				delete cache[id];
			} else {
				$.each(keys, function(_, key) {
					delete store[key];
				});
			}
		}
	};

	/* jQuery */
	$.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if (typeof target !== "object" && $.type(target) !== "function") {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if ((options = arguments[i])) {
				for (name in options) {
					if (!options.hasOwnProperty(name)) {
						continue;
					}
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];

						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);

					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};

	/* jQuery 1.4.3 */
	$.queue = function(elem, type, data) {
		function $makeArray(arr, results) {
			var ret = results || [];

			if (arr) {
				if (isArraylike(Object(arr))) {
					/* $.merge */
					(function(first, second) {
						var len = +second.length,
								j = 0,
								i = first.length;

						while (j < len) {
							first[i++] = second[j++];
						}

						if (len !== len) {
							while (second[j] !== undefined) {
								first[i++] = second[j++];
							}
						}

						first.length = i;

						return first;
					})(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					[].push.call(ret, arr);
				}
			}

			return ret;
		}

		if (!elem) {
			return;
		}

		type = (type || "fx") + "queue";

		var q = $.data(elem, type);

		if (!data) {
			return q || [];
		}

		if (!q || $.isArray(data)) {
			q = $.data(elem, type, $makeArray(data));
		} else {
			q.push(data);
		}

		return q;
	};

	/* jQuery 1.4.3 */
	$.dequeue = function(elems, type) {
		/* Custom: Embed element iteration. */
		$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
			type = type || "fx";

			var queue = $.queue(elem, type),
					fn = queue.shift();

			if (fn === "inprogress") {
				fn = queue.shift();
			}

			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				fn.call(elem, function() {
					$.dequeue(elem, type);
				});
			}
		});
	};

	/******************
	 $.fn Methods
	 ******************/

	/* jQuery */
	$.fn = $.prototype = {
		init: function(selector) {
			/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
			if (selector.nodeType) {
				this[0] = selector;

				return this;
			} else {
				throw new Error("Not a DOM node.");
			}
		},
		offset: function() {
			/* jQuery altered code: Dropped disconnected DOM node checking. */
			var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

			return {
				top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
				left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
			};
		},
		position: function() {
			/* jQuery */
			function offsetParentFn(elem) {
				var offsetParent = elem.offsetParent;

				while (offsetParent && (offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static")) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || document;
			}

			/* Zepto */
			var elem = this[0],
					offsetParent = offsetParentFn(elem),
					offset = this.offset(),
					parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

			offset.top -= parseFloat(elem.style.marginTop) || 0;
			offset.left -= parseFloat(elem.style.marginLeft) || 0;

			if (offsetParent.style) {
				parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
				parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
			}

			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
	};

	/**********************
	 Private Variables
	 **********************/

	/* For $.data() */
	var cache = {};
	$.expando = "velocity" + (new Date().getTime());
	$.uuid = 0;

	/* For $.queue() */
	var class2type = {},
			hasOwn = class2type.hasOwnProperty,
			toString = class2type.toString;

	var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	for (var i = 0; i < types.length; i++) {
		class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	}

	/* Makes $(node) possible, without having to call init. */
	$.fn.init.prototype = $.fn;

	/* Globalize Velocity onto the window, and assign its Utilities property. */
	window.Velocity = {Utilities: $};
})(window);

/******************
 Velocity.js
 ******************/

(function(factory) {
	"use strict";
	/* CommonJS module. */
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
		/* AMD module. */
	} else if (typeof define === "function" && define.amd) {
		define(factory);
		/* Browser globals. */
	} else {
		factory();
	}
}(function() {
	"use strict";
	return function(global, window, document, undefined) {

		/***************
		 Summary
		 ***************/

		/*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */

		/*********************
		 Helper Functions
		 *********************/

		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = (function() {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		})();

		/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
		var rAFShim = (function() {
			var timeLast = 0;

			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
				var timeCurrent = (new Date()).getTime(),
						timeDelta;

				/* Dynamically set delay on a per-tick basis to match 60fps. */
				/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
				timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
				timeLast = timeCurrent + timeDelta;

				return setTimeout(function() {
					callback(timeCurrent + timeDelta);
				}, timeDelta);
			};
		})();

		var performance = (function() {
			var perf = window.performance || {};

			if (typeof perf.now !== "function") {
				var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();

				perf.now = function() {
					return (new Date()).getTime() - nowOffset;
				};
			}
			return perf;
		})();

		/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
		function compactSparseArray(array) {
			var index = -1,
					length = array ? array.length : 0,
					result = [];

			while (++index < length) {
				var value = array[index];

				if (value) {
					result.push(value);
				}
			}

			return result;
		}

		/**
		 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
		 * (technically, since host objects have been implementation-dependent,
		 * at least before ES2015, IE hasn't needed to work this way).
		 * Also works on strings, fixes IE < 9 to allow an explicit undefined
		 * for the 2nd argument (as in Firefox), and prevents errors when
		 * called on other DOM objects.
		 */
		var _slice = (function() {
			var slice = Array.prototype.slice;

			try {
				// Can't be used with DOM elements in IE < 9
				slice.call(document.documentElement);
				return slice;
			} catch (e) { // Fails in IE < 9

				// This will work for genuine arrays, array-like objects, 
				// NamedNodeMap (attributes, entities, notations),
				// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
				// and will not fail on other DOM objects (as do DOM elements in IE < 9)
				return function(begin, end) {
					var len = this.length;

					if (typeof begin !== "number") {
						begin = 0;
					}
					// IE < 9 gets unhappy with an undefined end argument
					if (typeof end !== "number") {
						end = len;
					}
					// For native Array objects, we use the native slice function
					if (this.slice) {
						return slice.call(this, begin, end);
					}
					// For array like object we handle it ourselves.
					var i,
							cloned = [],
							// Handle negative value for "begin"
							start = (begin >= 0) ? begin : Math.max(0, len + begin),
							// Handle negative value for "end"
							upTo = end < 0 ? len + end : Math.min(end, len),
							// Actual expected size of the slice
							size = upTo - start;

					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i);
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i];
							}
						}
					}
					return cloned;
				};
			}
		})();

		/* .indexOf doesn't exist in IE<9 */
		var _inArray = (function() {
			if (Array.prototype.includes) {
				return function(arr, val) {
					return arr.includes(val);
				};
			}
			if (Array.prototype.indexOf) {
				return function(arr, val) {
					return arr.indexOf(val) >= 0;
				};
			}
			return function(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] === val) {
						return true;
					}
				}
				return false;
			};
		});

		function sanitizeElements(elements) {
			/* Unwrap jQuery/Zepto objects. */
			if (Type.isWrapped(elements)) {
				elements = _slice.call(elements);
				/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
			} else if (Type.isNode(elements)) {
				elements = [elements];
			}

			return elements;
		}

		var Type = {
			isNumber: function(variable) {
				return (typeof variable === "number");
			},
			isString: function(variable) {
				return (typeof variable === "string");
			},
			isArray: Array.isArray || function(variable) {
				return Object.prototype.toString.call(variable) === "[object Array]";
			},
			isFunction: function(variable) {
				return Object.prototype.toString.call(variable) === "[object Function]";
			},
			isNode: function(variable) {
				return variable && variable.nodeType;
			},
			/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
			/* NOTE: HTMLFormElements also have a length. */
			isWrapped: function(variable) {
				return variable
						&& variable !== window
						&& Type.isNumber(variable.length)
						&& !Type.isString(variable)
						&& !Type.isFunction(variable)
						&& !Type.isNode(variable)
						&& (variable.length === 0 || Type.isNode(variable[0]));
			},
			isSVG: function(variable) {
				return window.SVGElement && (variable instanceof window.SVGElement);
			},
			isEmptyObject: function(variable) {
				for (var name in variable) {
					if (variable.hasOwnProperty(name)) {
						return false;
					}
				}

				return true;
			}
		};

		/*****************
		 Dependencies
		 *****************/

		var $,
				isJQuery = false;

		if (global.fn && global.fn.jquery) {
			$ = global;
			isJQuery = true;
		} else {
			$ = window.Velocity.Utilities;
		}

		if (IE <= 8 && !isJQuery) {
			throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		} else if (IE <= 7) {
			/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
			jQuery.fn.velocity = jQuery.fn.animate;

			/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
			return;
		}

		/*****************
		 Constants
		 *****************/

		var DURATION_DEFAULT = 400,
				EASING_DEFAULT = "swing";

		/*************
		 State
		 *************/

		var Velocity = {
			/* Container for page-wide Velocity state data. */
			State: {
				/* Detect mobile devices to determine if mobileHA should be turned on. */
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),
				/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
				isAndroid: /Android/i.test(window.navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),
				isChrome: window.chrome,
				isFirefox: /Firefox/i.test(window.navigator.userAgent),
				/* Create a cached element for re-use when checking for CSS property prefixes. */
				prefixElement: document.createElement("div"),
				/* Cache every prefix match to avoid repeating lookups. */
				prefixMatches: {},
				/* Cache the anchor used for animating window scrolling. */
				scrollAnchor: null,
				/* Cache the browser-specific property names associated with the scroll anchor. */
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				/* Keep track of whether our RAF tick is running. */
				isTicking: false,
				/* Container for every in-progress call to Velocity. */
				calls: [],
				delayedElements: {
					count: 0
				}
			},
			/* Velocity's custom CSS stack. Made global for unit testing. */
			CSS: {/* Defined below. */},
			/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
			Utilities: $,
			/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
			Redirects: {/* Manually registered by the user. */},
			Easings: {/* Defined below. */},
			/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
			Promise: window.Promise,
			/* Velocity option defaults, which can be overriden by the user. */
			defaults: {
				queue: "",
				duration: DURATION_DEFAULT,
				easing: EASING_DEFAULT,
				begin: undefined,
				complete: undefined,
				progress: undefined,
				display: undefined,
				visibility: undefined,
				loop: false,
				delay: false,
				mobileHA: true,
				/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
				_cacheValues: true,
				/* Advanced: Set to false if the promise should always resolve on empty element lists. */
				promiseRejectEmpty: true
			},
			/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
			init: function(element) {
				$.data(element, "velocity", {
					/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
					isSVG: Type.isSVG(element),
					/* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
					isAnimating: false,
					/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					computedStyle: null,
					/* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
					tweensContainer: null,
					/* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
					rootPropertyValueCache: {},
					/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
					transformCache: {}
				});
			},
			/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
			hook: null, /* Defined below. */
			/* Velocity-wide animation time remapping for testing purposes. */
			mock: false,
			version: {major: 1, minor: 5, patch: 2},
			/* Set to 1 or 2 (most verbose) to output debug info to console. */
			debug: false,
			/* Use rAF high resolution timestamp when available */
			timestamp: true,
			/* Pause all animations */
			pauseAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to paused */
						activeCall[5] = {
							resume: false
						};
					}
				});

				/* Pause timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					pauseDelayOnElement(element, currentTime);
				});
			},
			/* Resume all animations */
			resumeAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to resumed if it was paused */
						if (activeCall[5]) {
							activeCall[5].resume = true;
						}
					}
				});
				/* Resume timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					resumeDelayOnElement(element, currentTime);
				});
			}
		};

		/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
		if (window.pageYOffset !== undefined) {
			Velocity.State.scrollAnchor = window;
			Velocity.State.scrollPropertyLeft = "pageXOffset";
			Velocity.State.scrollPropertyTop = "pageYOffset";
		} else {
			Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
			Velocity.State.scrollPropertyLeft = "scrollLeft";
			Velocity.State.scrollPropertyTop = "scrollTop";
		}

		/* Shorthand alias for jQuery's $.data() utility. */
		function Data(element) {
			/* Hardcode a reference to the plugin name. */
			var response = $.data(element, "velocity");

			/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
			return response === null ? undefined : response;
		}

		/**************
		 Delay Timer
		 **************/

		function pauseDelayOnElement(element, currentTime) {
			/* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */
			var data = Data(element);
			if (data && data.delayTimer && !data.delayPaused) {
				data.delayRemaining = data.delay - currentTime + data.delayBegin;
				data.delayPaused = true;
				clearTimeout(data.delayTimer.setTimeout);
			}
		}

		function resumeDelayOnElement(element, currentTime) {
			/* Check for any paused timers and resume */
			var data = Data(element);
			if (data && data.delayTimer && data.delayPaused) {
				/* If the element was mid-delay, re initiate the timeout with the remaining delay */
				data.delayPaused = false;
				data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
			}
		}



		/**************
		 Easing
		 **************/

		/* Step easing generator. */
		function generateStep(steps) {
			return function(p) {
				return Math.round(p * steps) * (1 / steps);
			};
		}

		/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		function generateBezier(mX1, mY1, mX2, mY2) {
			var NEWTON_ITERATIONS = 4,
					NEWTON_MIN_SLOPE = 0.001,
					SUBDIVISION_PRECISION = 0.0000001,
					SUBDIVISION_MAX_ITERATIONS = 10,
					kSplineTableSize = 11,
					kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
					float32ArraySupported = "Float32Array" in window;

			/* Must contain four arguments. */
			if (arguments.length !== 4) {
				return false;
			}

			/* Arguments must be numbers. */
			for (var i = 0; i < 4; ++i) {
				if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
					return false;
				}
			}

			/* X values must be in the [0, 1] range. */
			mX1 = Math.min(mX1, 1);
			mX2 = Math.min(mX2, 1);
			mX1 = Math.max(mX1, 0);
			mX2 = Math.max(mX2, 0);

			var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

			function A(aA1, aA2) {
				return 1.0 - 3.0 * aA2 + 3.0 * aA1;
			}
			function B(aA1, aA2) {
				return 3.0 * aA2 - 6.0 * aA1;
			}
			function C(aA1) {
				return 3.0 * aA1;
			}

			function calcBezier(aT, aA1, aA2) {
				return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
			}

			function getSlope(aT, aA1, aA2) {
				return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
			}

			function newtonRaphsonIterate(aX, aGuessT) {
				for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
					var currentSlope = getSlope(aGuessT, mX1, mX2);

					if (currentSlope === 0.0) {
						return aGuessT;
					}

					var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
					aGuessT -= currentX / currentSlope;
				}

				return aGuessT;
			}

			function calcSampleValues() {
				for (var i = 0; i < kSplineTableSize; ++i) {
					mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function binarySubdivide(aX, aA, aB) {
				var currentX, currentT, i = 0;

				do {
					currentT = aA + (aB - aA) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - aX;
					if (currentX > 0.0) {
						aB = currentT;
					} else {
						aA = currentT;
					}
				} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

				return currentT;
			}

			function getTForX(aX) {
				var intervalStart = 0.0,
						currentSample = 1,
						lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}

				--currentSample;

				var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
						guessForT = intervalStart + dist * kSampleStepSize,
						initialSlope = getSlope(guessForT, mX1, mX2);

				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
				}
			}

			var _precomputed = false;

			function precompute() {
				_precomputed = true;
				if (mX1 !== mY1 || mX2 !== mY2) {
					calcSampleValues();
				}
			}

			var f = function(aX) {
				if (!_precomputed) {
					precompute();
				}
				if (mX1 === mY1 && mX2 === mY2) {
					return aX;
				}
				if (aX === 0) {
					return 0;
				}
				if (aX === 1) {
					return 1;
				}

				return calcBezier(getTForX(aX), mY1, mY2);
			};

			f.getControlPoints = function() {
				return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
			};

			var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
			f.toString = function() {
				return str;
			};

			return f;
		}

		/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
		var generateSpringRK4 = (function() {
			function springAccelerationForState(state) {
				return (-state.tension * state.x) - (state.friction * state.v);
			}

			function springEvaluateStateWithDerivative(initialState, dt, derivative) {
				var state = {
					x: initialState.x + derivative.dx * dt,
					v: initialState.v + derivative.dv * dt,
					tension: initialState.tension,
					friction: initialState.friction
				};

				return {dx: state.v, dv: springAccelerationForState(state)};
			}

			function springIntegrateState(state, dt) {
				var a = {
					dx: state.v,
					dv: springAccelerationForState(state)
				},
						b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
						c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
						d = springEvaluateStateWithDerivative(state, dt, c),
						dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
						dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

				state.x = state.x + dxdt * dt;
				state.v = state.v + dvdt * dt;

				return state;
			}

			return function springRK4Factory(tension, friction, duration) {

				var initState = {
					x: -1,
					v: 0,
					tension: null,
					friction: null
				},
						path = [0],
						time_lapsed = 0,
						tolerance = 1 / 10000,
						DT = 16 / 1000,
						have_duration, dt, last_state;

				tension = parseFloat(tension) || 500;
				friction = parseFloat(friction) || 20;
				duration = duration || null;

				initState.tension = tension;
				initState.friction = friction;

				have_duration = duration !== null;

				/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
				if (have_duration) {
					/* Run the simulation without a duration. */
					time_lapsed = springRK4Factory(tension, friction);
					/* Compute the adjusted time delta. */
					dt = time_lapsed / duration * DT;
				} else {
					dt = DT;
				}

				while (true) {
					/* Next/step function .*/
					last_state = springIntegrateState(last_state || initState, dt);
					/* Store the position. */
					path.push(1 + last_state.x);
					time_lapsed += 16;
					/* If the change threshold is reached, break. */
					if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
						break;
					}
				}

				/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */
				return !have_duration ? time_lapsed : function(percentComplete) {
					return path[ (percentComplete * (path.length - 1)) | 0 ];
				};
			};
		}());

		/* jQuery easings. */
		Velocity.Easings = {
			linear: function(p) {
				return p;
			},
			swing: function(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
			spring: function(p) {
				return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
			}
		};

		/* CSS3 and Robert Penner easings. */
		$.each(
				[
					["ease", [0.25, 0.1, 0.25, 1.0]],
					["ease-in", [0.42, 0.0, 1.00, 1.0]],
					["ease-out", [0.00, 0.0, 0.58, 1.0]],
					["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
					["easeInSine", [0.47, 0, 0.745, 0.715]],
					["easeOutSine", [0.39, 0.575, 0.565, 1]],
					["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
					["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
					["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
					["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
					["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
					["easeOutCubic", [0.215, 0.61, 0.355, 1]],
					["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
					["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
					["easeOutQuart", [0.165, 0.84, 0.44, 1]],
					["easeInOutQuart", [0.77, 0, 0.175, 1]],
					["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
					["easeOutQuint", [0.23, 1, 0.32, 1]],
					["easeInOutQuint", [0.86, 0, 0.07, 1]],
					["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
					["easeOutExpo", [0.19, 1, 0.22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
					["easeOutCirc", [0.075, 0.82, 0.165, 1]],
					["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
				], function(i, easingArray) {
			Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
		});

		/* Determine the appropriate easing type given an easing input. */
		function getEasing(value, duration) {
			var easing = value;

			/* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
			if (Type.isString(value)) {
				/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
				if (!Velocity.Easings[value]) {
					easing = false;
				}
			} else if (Type.isArray(value) && value.length === 1) {
				easing = generateStep.apply(null, value);
			} else if (Type.isArray(value) && value.length === 2) {
				/* springRK4 must be passed the animation's duration. */
				/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
				 function generated with default tension and friction values. */
				easing = generateSpringRK4.apply(null, value.concat([duration]));
			} else if (Type.isArray(value) && value.length === 4) {
				/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
				easing = generateBezier.apply(null, value);
			} else {
				easing = false;
			}

			/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */
			if (easing === false) {
				if (Velocity.Easings[Velocity.defaults.easing]) {
					easing = Velocity.defaults.easing;
				} else {
					easing = EASING_DEFAULT;
				}
			}

			return easing;
		}

		/*****************
		 CSS Stack
		 *****************/

		/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
		/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
		var CSS = Velocity.CSS = {
			/*************
			 RegEx
			 *************/

			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
			},
			/************
			 Lists
			 ************/

			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: [
					"%", // relative
					"em", "ex", "ch", "rem", // font relative
					"vw", "vh", "vmin", "vmax", // viewport relative
					"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
					"deg", "grad", "rad", "turn", // angles
					"s", "ms" // time
				],
				colorNames: {
					"aliceblue": "240,248,255",
					"antiquewhite": "250,235,215",
					"aquamarine": "127,255,212",
					"aqua": "0,255,255",
					"azure": "240,255,255",
					"beige": "245,245,220",
					"bisque": "255,228,196",
					"black": "0,0,0",
					"blanchedalmond": "255,235,205",
					"blueviolet": "138,43,226",
					"blue": "0,0,255",
					"brown": "165,42,42",
					"burlywood": "222,184,135",
					"cadetblue": "95,158,160",
					"chartreuse": "127,255,0",
					"chocolate": "210,105,30",
					"coral": "255,127,80",
					"cornflowerblue": "100,149,237",
					"cornsilk": "255,248,220",
					"crimson": "220,20,60",
					"cyan": "0,255,255",
					"darkblue": "0,0,139",
					"darkcyan": "0,139,139",
					"darkgoldenrod": "184,134,11",
					"darkgray": "169,169,169",
					"darkgrey": "169,169,169",
					"darkgreen": "0,100,0",
					"darkkhaki": "189,183,107",
					"darkmagenta": "139,0,139",
					"darkolivegreen": "85,107,47",
					"darkorange": "255,140,0",
					"darkorchid": "153,50,204",
					"darkred": "139,0,0",
					"darksalmon": "233,150,122",
					"darkseagreen": "143,188,143",
					"darkslateblue": "72,61,139",
					"darkslategray": "47,79,79",
					"darkturquoise": "0,206,209",
					"darkviolet": "148,0,211",
					"deeppink": "255,20,147",
					"deepskyblue": "0,191,255",
					"dimgray": "105,105,105",
					"dimgrey": "105,105,105",
					"dodgerblue": "30,144,255",
					"firebrick": "178,34,34",
					"floralwhite": "255,250,240",
					"forestgreen": "34,139,34",
					"fuchsia": "255,0,255",
					"gainsboro": "220,220,220",
					"ghostwhite": "248,248,255",
					"gold": "255,215,0",
					"goldenrod": "218,165,32",
					"gray": "128,128,128",
					"grey": "128,128,128",
					"greenyellow": "173,255,47",
					"green": "0,128,0",
					"honeydew": "240,255,240",
					"hotpink": "255,105,180",
					"indianred": "205,92,92",
					"indigo": "75,0,130",
					"ivory": "255,255,240",
					"khaki": "240,230,140",
					"lavenderblush": "255,240,245",
					"lavender": "230,230,250",
					"lawngreen": "124,252,0",
					"lemonchiffon": "255,250,205",
					"lightblue": "173,216,230",
					"lightcoral": "240,128,128",
					"lightcyan": "224,255,255",
					"lightgoldenrodyellow": "250,250,210",
					"lightgray": "211,211,211",
					"lightgrey": "211,211,211",
					"lightgreen": "144,238,144",
					"lightpink": "255,182,193",
					"lightsalmon": "255,160,122",
					"lightseagreen": "32,178,170",
					"lightskyblue": "135,206,250",
					"lightslategray": "119,136,153",
					"lightsteelblue": "176,196,222",
					"lightyellow": "255,255,224",
					"limegreen": "50,205,50",
					"lime": "0,255,0",
					"linen": "250,240,230",
					"magenta": "255,0,255",
					"maroon": "128,0,0",
					"mediumaquamarine": "102,205,170",
					"mediumblue": "0,0,205",
					"mediumorchid": "186,85,211",
					"mediumpurple": "147,112,219",
					"mediumseagreen": "60,179,113",
					"mediumslateblue": "123,104,238",
					"mediumspringgreen": "0,250,154",
					"mediumturquoise": "72,209,204",
					"mediumvioletred": "199,21,133",
					"midnightblue": "25,25,112",
					"mintcream": "245,255,250",
					"mistyrose": "255,228,225",
					"moccasin": "255,228,181",
					"navajowhite": "255,222,173",
					"navy": "0,0,128",
					"oldlace": "253,245,230",
					"olivedrab": "107,142,35",
					"olive": "128,128,0",
					"orangered": "255,69,0",
					"orange": "255,165,0",
					"orchid": "218,112,214",
					"palegoldenrod": "238,232,170",
					"palegreen": "152,251,152",
					"paleturquoise": "175,238,238",
					"palevioletred": "219,112,147",
					"papayawhip": "255,239,213",
					"peachpuff": "255,218,185",
					"peru": "205,133,63",
					"pink": "255,192,203",
					"plum": "221,160,221",
					"powderblue": "176,224,230",
					"purple": "128,0,128",
					"red": "255,0,0",
					"rosybrown": "188,143,143",
					"royalblue": "65,105,225",
					"saddlebrown": "139,69,19",
					"salmon": "250,128,114",
					"sandybrown": "244,164,96",
					"seagreen": "46,139,87",
					"seashell": "255,245,238",
					"sienna": "160,82,45",
					"silver": "192,192,192",
					"skyblue": "135,206,235",
					"slateblue": "106,90,205",
					"slategray": "112,128,144",
					"snow": "255,250,250",
					"springgreen": "0,255,127",
					"steelblue": "70,130,180",
					"tan": "210,180,140",
					"teal": "0,128,128",
					"thistle": "216,191,216",
					"tomato": "255,99,71",
					"turquoise": "64,224,208",
					"violet": "238,130,238",
					"wheat": "245,222,179",
					"whitesmoke": "245,245,245",
					"white": "255,255,255",
					"yellowgreen": "154,205,50",
					"yellow": "255,255,0"
				}
			},
			/************
			 Hooks
			 ************/

			/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
			/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
			Hooks: {
				/********************
				 Registration
				 ********************/

				/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
				/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
				templates: {
					"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
					"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
					"backgroundPosition": ["X Y", "0% 0%"],
					"transformOrigin": ["X Y Z", "50% 50% 0px"],
					"perspectiveOrigin": ["X Y", "50% 50%"]
				},
				/* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */
				registered: {
					/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
					 which consists of the subproperty's name, the associated root property's name,
					 and the subproperty's position in the root's value. */
				},
				/* Convert the templates into individual hooks then append them to the registered object above. */
				register: function() {
					/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */
					for (var i = 0; i < CSS.Lists.colors.length; i++) {
						var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
						CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
					}

					var rootProperty,
							hookTemplate,
							hookNames;

					/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */
					if (IE) {
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

							if (hookNames[0] === "Color") {
								/* Reposition both the hook's name and its default value to the end of their respective strings. */
								hookNames.push(hookNames.shift());
								defaultValues.push(defaultValues.shift());

								/* Replace the existing template for the hook's root property. */
								CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
							}
						}
					}

					/* Hook registration. */
					for (rootProperty in CSS.Hooks.templates) {
						if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
							continue;
						}
						hookTemplate = CSS.Hooks.templates[rootProperty];
						hookNames = hookTemplate[0].split(" ");

						for (var j in hookNames) {
							if (!hookNames.hasOwnProperty(j)) {
								continue;
							}
							var fullHookName = rootProperty + hookNames[j],
									hookPosition = j;

							/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */
							CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
						}
					}
				},
				/*****************************
				 Injection and Extraction
				 *****************************/

				/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
				/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
				getRoot: function(property) {
					var hookData = CSS.Hooks.registered[property];

					if (hookData) {
						return hookData[0];
					} else {
						/* If there was no hook match, return the property name untouched. */
						return property;
					}
				},
				getUnit: function(str, start) {
					var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

					if (unit && _inArray(CSS.Lists.units, unit)) {
						return unit;
					}
					return "";
				},
				fixColors: function(str) {
					return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
						if (CSS.Lists.colorNames.hasOwnProperty($2)) {
							return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
						}
						return $1 + $2;
					});
				},
				/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */
				cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
					/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
					if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
						rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
					}

					/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */
					/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
					if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
						rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
					}

					return rootPropertyValue;
				},
				/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
				extractValue: function(fullHookName, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1];

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
						return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				},
				/* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */
				injectValue: function(fullHookName, hookValue, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1],
								rootPropertyValueParts,
								rootPropertyValueUpdated;

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */
						rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
						rootPropertyValueParts[hookPosition] = hookValue;
						rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

						return rootPropertyValueUpdated;
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				}
			},
			/*******************
			 Normalizations
			 *******************/

			/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
			Normalizations: {
				/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */
				registered: {
					clip: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return "clip";
								/* Clip needs to be unwrapped and stripped of its commas during extraction. */
							case "extract":
								var extracted;

								/* If Velocity also extracted this value, skip extraction. */
								if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
									extracted = propertyValue;
								} else {
									/* Remove the "rect()" wrapper. */
									extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

									/* Strip off commas. */
									extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
								}

								return extracted;
								/* Clip needs to be re-wrapped during injection. */
							case "inject":
								return "rect(" + propertyValue + ")";
						}
					},
					blur: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var extracted = parseFloat(propertyValue);

								/* If extracted is NaN, meaning the value isn't already extracted. */
								if (!(extracted || extracted === 0)) {
									var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

									/* If the filter string had a blur component, return just the blur value and unit type. */
									if (blurComponent) {
										extracted = blurComponent[1];
										/* If the component doesn't exist, default blur to 0. */
									} else {
										extracted = 0;
									}
								}

								return extracted;
								/* Blur needs to be re-wrapped during injection. */
							case "inject":
								/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
								if (!parseFloat(propertyValue)) {
									return "none";
								} else {
									return "blur(" + propertyValue + ")";
								}
						}
					},
					/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
					opacity: function(type, element, propertyValue) {
						if (IE <= 8) {
							switch (type) {
								case "name":
									return "filter";
								case "extract":
									/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
									var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

									if (extracted) {
										/* Convert to decimal value. */
										propertyValue = extracted[1] / 100;
									} else {
										/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
										propertyValue = 1;
									}

									return propertyValue;
								case "inject":
									/* Opacified elements are required to have their zoom property set to a non-zero value. */
									element.style.zoom = 1;

									/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
									if (parseFloat(propertyValue) >= 1) {
										return "";
									} else {
										/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
										return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
									}
							}
							/* With all other browsers, normalization is not required; return the same values that were passed in. */
						} else {
							switch (type) {
								case "name":
									return "opacity";
								case "extract":
									return propertyValue;
								case "inject":
									return propertyValue;
							}
						}
					}
				},
				/*****************************
				 Batched Registrations
				 *****************************/

				/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
				register: function() {

					/*****************
					 Transforms
					 *****************/

					/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */
					/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */
					/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */
					if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
						/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
						CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
					}

					for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
						/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
						(function() {
							var transformName = CSS.Lists.transformsBase[i];

							CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
								switch (type) {
									/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
									case "name":
										return "transform";
										/* Transform values are cached onto a per-element transformCache object. */
									case "extract":
										/* If this transform has yet to be assigned a value, return its null value. */
										if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
											/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
											return /^scale/i.test(transformName) ? 1 : 0;
											/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
											 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
										}
										return Data(element).transformCache[transformName].replace(/[()]/g, "");
									case "inject":
										var invalid = false;

										/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
										/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
										switch (transformName.substr(0, transformName.length - 1)) {
											/* Whitelist unit types for each transform. */
											case "translate":
												invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
												break;
												/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
											case "scal":
											case "scale":
												/* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
												if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
													propertyValue = 1;
												}

												invalid = !/(\d)$/i.test(propertyValue);
												break;
											case "skew":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
											case "rotate":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
										}

										if (!invalid) {
											/* As per the CSS spec, wrap the value in parentheses. */
											Data(element).transformCache[transformName] = "(" + propertyValue + ")";
										}

										/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
										return Data(element).transformCache[transformName];
								}
							};
						})();
					}

					/*************
					 Colors
					 *************/

					/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
					for (var j = 0; j < CSS.Lists.colors.length; j++) {
						/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */
						(function() {
							var colorName = CSS.Lists.colors[j];

							/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
							CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return colorName;
										/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
									case "extract":
										var extracted;

										/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											var converted,
													colorNames = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};

											/* Convert color names to rgb. */
											if (/^[A-z]+$/i.test(propertyValue)) {
												if (colorNames[propertyValue] !== undefined) {
													converted = colorNames[propertyValue];
												} else {
													/* If an unmatched color name is provided, default to black. */
													converted = colorNames.black;
												}
												/* Convert hex values to rgb. */
											} else if (CSS.RegEx.isHex.test(propertyValue)) {
												converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
												/* If the provided color doesn't match any of the accepted color formats, default to black. */
											} else if (!(/^rgba?\(/i.test(propertyValue))) {
												converted = colorNames.black;
											}

											/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */
											extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
										}

										/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
											extracted += " 1";
										}

										return extracted;
									case "inject":
										/* If we have a pattern then it might already have the right values */
										if (/^rgb/.test(propertyValue)) {
											return propertyValue;
										}

										/* If this is IE<=8 and an alpha component exists, strip it off. */
										if (IE <= 8) {
											if (propertyValue.split(" ").length === 4) {
												propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
											}
											/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										} else if (propertyValue.split(" ").length === 3) {
											propertyValue += " 1";
										}

										/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
										 on all values but the fourth (R, G, and B only accept whole numbers). */
										return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
								}
							};
						})();
					}

					/**************
					 Dimensions
					 **************/
					function augmentDimension(name, element, wantInner) {
						var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

						if (isBorderBox === (wantInner || false)) {
							/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
							var i,
									value,
									augment = 0,
									sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
									fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

							for (i = 0; i < fields.length; i++) {
								value = parseFloat(CSS.getPropertyValue(element, fields[i]));
								if (!isNaN(value)) {
									augment += value;
								}
							}
							return wantInner ? -augment : augment;
						}
						return 0;
					}
					function getDimension(name, wantInner) {
						return function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return name;
								case "extract":
									return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
								case "inject":
									return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
							}
						};
					}
					CSS.Normalizations.registered.innerWidth = getDimension("width", true);
					CSS.Normalizations.registered.innerHeight = getDimension("height", true);
					CSS.Normalizations.registered.outerWidth = getDimension("width");
					CSS.Normalizations.registered.outerHeight = getDimension("height");
				}
			},
			/************************
			 CSS Property Names
			 ************************/

			Names: {
				/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */
				camelCase: function(property) {
					return property.replace(/-(\w)/g, function(match, subMatch) {
						return subMatch.toUpperCase();
					});
				},
				/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
				SVGAttribute: function(property) {
					var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

					/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
					if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
						SVGAttributes += "|transform";
					}

					return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
				},
				/* Determine whether a property should be set with a vendor prefix. */
				/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */
				prefixCheck: function(property) {
					/* If this property has already been checked, return the cached value. */
					if (Velocity.State.prefixMatches[property]) {
						return [Velocity.State.prefixMatches[property], true];
					} else {
						var vendors = ["", "Webkit", "Moz", "ms", "O"];

						for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
							var propertyPrefixed;

							if (i === 0) {
								propertyPrefixed = property;
							} else {
								/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
								propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
									return match.toUpperCase();
								});
							}

							/* Check if the browser supports this property as prefixed. */
							if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
								/* Cache the match. */
								Velocity.State.prefixMatches[property] = propertyPrefixed;

								return [propertyPrefixed, true];
							}
						}

						/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
						return [property, false];
					}
				}
			},
			/************************
			 CSS Property Values
			 ************************/

			Values: {
				/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
				hexToRgb: function(hex) {
					var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							rgbParts;

					hex = hex.replace(shortformRegex, function(m, r, g, b) {
						return r + r + g + g + b + b;
					});

					rgbParts = longformRegex.exec(hex);

					return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
				},
				isCSSNullValue: function(value) {
					/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */
					/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
					/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
					return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
				},
				/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
				getUnitType: function(property) {
					if (/^(rotate|skew)/i.test(property)) {
						return "deg";
					} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
						/* The above properties are unitless. */
						return "";
					} else {
						/* Default to px for all other properties. */
						return "px";
					}
				},
				/* HTML elements default to an associated display type when they're not set to display:none. */
				/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
				getDisplayType: function(element) {
					var tagName = element && element.tagName.toString().toLowerCase();

					if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
						return "inline";
					} else if (/^(li)$/i.test(tagName)) {
						return "list-item";
					} else if (/^(tr)$/i.test(tagName)) {
						return "table-row";
					} else if (/^(table)$/i.test(tagName)) {
						return "table";
					} else if (/^(tbody)$/i.test(tagName)) {
						return "table-row-group";
						/* Default to "block" when no match is found. */
					} else {
						return "block";
					}
				},
				/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
				addClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.add(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							element.className += (element.className.length ? " " : "") + className;
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
						}
					}
				},
				removeClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.remove(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
						}
					}
				}
			},
			/****************************
			 Style Getting & Setting
			 ****************************/

			/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
				/* Get an element's computed property value. */
				/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
				function computePropertyValue(element, property) {
					/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */
					var computedValue = 0;

					/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
					if (IE <= 8) {
						computedValue = $.css(element, property); /* GET */
						/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
						 associated element so that it does not need to be refetched upon every GET. */
					} else {
						/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */
						var toggleDisplay = false;

						if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
							toggleDisplay = true;
							CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
						}

						var revertDisplay = function() {
							if (toggleDisplay) {
								CSS.setPropertyValue(element, "display", "none");
							}
						};

						if (!forceStyleLookup) {
							if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
								revertDisplay();

								return contentBoxHeight;
							} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
								revertDisplay();

								return contentBoxWidth;
							}
						}

						var computedStyle;

						/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
						if (Data(element) === undefined) {
							computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If the computedStyle object has yet to be cached, do so now. */
						} else if (!Data(element).computedStyle) {
							computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If computedStyle is cached, use it. */
						} else {
							computedStyle = Data(element).computedStyle;
						}

						/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
						if (property === "borderColor") {
							property = "borderTopColor";
						}

						/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
						if (IE === 9 && property === "filter") {
							computedValue = computedStyle.getPropertyValue(property); /* GET */
						} else {
							computedValue = computedStyle[property];
						}

						/* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */
						if (computedValue === "" || computedValue === null) {
							computedValue = element.style[property];
						}

						revertDisplay();
					}

					/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */
					/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
					if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
						var position = computePropertyValue(element, "position"); /* GET */

						/* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */
						/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */
						if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
							/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
							computedValue = $(element).position()[property] + "px"; /* GET */
						}
					}

					return computedValue;
				}

				var propertyValue;

				/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
				if (CSS.Hooks.registered[property]) {
					var hook = property,
							hookRoot = CSS.Hooks.getRoot(hook);

					/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */
					if (rootPropertyValue === undefined) {
						/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
						rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
					}

					/* If this root has a normalization registered, peform the associated normalization extraction. */
					if (CSS.Normalizations.registered[hookRoot]) {
						rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
					}

					/* Extract the hook's value. */
					propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

					/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
					 normalize the property's name and value, and handle the special case of transforms. */
					/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
					 numerical and therefore do not require normalization extraction. */
				} else if (CSS.Normalizations.registered[property]) {
					var normalizedPropertyName,
							normalizedPropertyValue;

					normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

					/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
					if (normalizedPropertyName !== "transform") {
						normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

						/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
						if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
							normalizedPropertyValue = CSS.Hooks.templates[property][1];
						}
					}

					propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
				}

				/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
				if (!/^[\d-]/.test(propertyValue)) {
					/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */
					var data = Data(element);

					if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
						/* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
						if (/^(height|width)$/i.test(property)) {
							/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
							try {
								propertyValue = element.getBBox()[property];
							} catch (error) {
								propertyValue = 0;
							}
							/* Otherwise, access the attribute value directly. */
						} else {
							propertyValue = element.getAttribute(property);
						}
					} else {
						propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
					}
				}

				/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */
				if (CSS.Values.isCSSNullValue(propertyValue)) {
					propertyValue = 0;
				}

				if (Velocity.debug >= 2) {
					console.log("Get " + property + ": " + propertyValue);
				}

				return propertyValue;
			},
			/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
				var propertyName = property;

				/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
				if (property === "scroll") {
					/* If a container option is present, scroll the container instead of the browser window. */
					if (scrollData.container) {
						scrollData.container["scroll" + scrollData.direction] = propertyValue;
						/* Otherwise, Velocity defaults to scrolling the browser window. */
					} else {
						if (scrollData.direction === "Left") {
							window.scrollTo(propertyValue, scrollData.alternateValue);
						} else {
							window.scrollTo(scrollData.alternateValue, propertyValue);
						}
					}
				} else {
					/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */
					if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
						/* Perform a normalization injection. */
						/* Note: The normalization logic handles the transformCache updating. */
						CSS.Normalizations.registered[property]("inject", element, propertyValue);

						propertyName = "transform";
						propertyValue = Data(element).transformCache[property];
					} else {
						/* Inject hooks. */
						if (CSS.Hooks.registered[property]) {
							var hookName = property,
									hookRoot = CSS.Hooks.getRoot(property);

							/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
							rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

							propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
							property = hookRoot;
						}

						/* Normalize names and values. */
						if (CSS.Normalizations.registered[property]) {
							propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
							property = CSS.Normalizations.registered[property]("name", element);
						}

						/* Assign the appropriate vendor prefix before performing an official style update. */
						propertyName = CSS.Names.prefixCheck(property)[0];

						/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */
						if (IE <= 8) {
							try {
								element.style[propertyName] = propertyValue;
							} catch (error) {
								if (Velocity.debug) {
									console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
								}
							}
							/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
							/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
						} else {
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Note: For SVG attributes, vendor-prefixed property names are never used. */
								/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
								element.setAttribute(property, propertyValue);
							} else {
								element.style[propertyName] = propertyValue;
							}
						}

						if (Velocity.debug >= 2) {
							console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
						}
					}
				}

				/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
				return [propertyName, propertyValue];
			},
			/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
			/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
			flushTransformCache: function(element) {
				var transformString = "",
						data = Data(element);

				/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
				if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
					/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
					var getTransformFloat = function(transformProperty) {
						return parseFloat(CSS.getPropertyValue(element, transformProperty));
					};

					/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
					 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
					var SVGTransforms = {
						translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
						skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
						/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */
						scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
						/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */
						rotate: [getTransformFloat("rotateZ"), 0, 0]
					};

					/* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */
					$.each(Data(element).transformCache, function(transformName) {
						/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */
						if (/^translate/i.test(transformName)) {
							transformName = "translate";
						} else if (/^scale/i.test(transformName)) {
							transformName = "scale";
						} else if (/^rotate/i.test(transformName)) {
							transformName = "rotate";
						}

						/* Check that we haven't yet deleted the property from the SVGTransforms container. */
						if (SVGTransforms[transformName]) {
							/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
							transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

							/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */
							delete SVGTransforms[transformName];
						}
					});
				} else {
					var transformValue,
							perspective;

					/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
					$.each(Data(element).transformCache, function(transformName) {
						transformValue = Data(element).transformCache[transformName];

						/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
						if (transformName === "transformPerspective") {
							perspective = transformValue;
							return true;
						}

						/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
						if (IE === 9 && transformName === "rotateZ") {
							transformName = "rotate";
						}

						transformString += transformName + transformValue + " ";
					});

					/* If present, set the perspective subproperty first. */
					if (perspective) {
						transformString = "perspective" + perspective + " " + transformString;
					}
				}

				CSS.setPropertyValue(element, "transform", transformString);
			}
		};

		/* Register hooks and normalizations. */
		CSS.Hooks.register();
		CSS.Normalizations.register();

		/* Allow hook setting in the same fashion as jQuery's $.css(). */
		Velocity.hook = function(elements, arg2, arg3) {
			var value;

			elements = sanitizeElements(elements);

			$.each(elements, function(i, element) {
				/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/* Get property value. If an element set was passed in, only return the value for the first element. */
				if (arg3 === undefined) {
					if (value === undefined) {
						value = CSS.getPropertyValue(element, arg2);
					}
					/* Set property value. */
				} else {
					/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
					var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

					/* Transform properties don't automatically set. They have to be flushed to the DOM. */
					if (adjustedSet[0] === "transform") {
						Velocity.CSS.flushTransformCache(element);
					}

					value = adjustedSet;
				}
			});

			return value;
		};

		/*****************
		 Animation
		 *****************/

		var animate = function() {
			var opts;

			/******************
			 Call Chain
			 ******************/

			/* Logic for determining what to return to the call stack when exiting out of Velocity. */
			function getChain() {
				/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
				if (isUtility) {
					return promiseData.promise || null;
					/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
				} else {
					return elementsWrapped;
				}
			}

			/*************************
			 Arguments Assignment
			 *************************/

			/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
			 objects are defined on a container object that's passed in as Velocity's sole argument. */
			/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
			var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
					/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
					isUtility,
					/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
					elementsWrapped,
					argumentIndex;

			var elements,
					propertiesMap,
					options;

			/* Detect jQuery/Zepto elements being animated via the $.fn method. */
			if (Type.isWrapped(this)) {
				isUtility = false;

				argumentIndex = 0;
				elements = this;
				elementsWrapped = this;
				/* Otherwise, raw elements are being animated via the utility function. */
			} else {
				isUtility = true;

				argumentIndex = 1;
				elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
			}

			/***************
			 Promises
			 ***************/

			var promiseData = {
				promise: null,
				resolver: null,
				rejecter: null
			};

			/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
			/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */
			if (isUtility && Velocity.Promise) {
				promiseData.promise = new Velocity.Promise(function(resolve, reject) {
					promiseData.resolver = resolve;
					promiseData.rejecter = reject;
				});
			}

			if (syntacticSugar) {
				propertiesMap = arguments[0].properties || arguments[0].p;
				options = arguments[0].options || arguments[0].o;
			} else {
				propertiesMap = arguments[argumentIndex];
				options = arguments[argumentIndex + 1];
			}

			elements = sanitizeElements(elements);

			if (!elements) {
				if (promiseData.promise) {
					if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
						promiseData.rejecter();
					} else {
						promiseData.resolver();
					}
				}
				return;
			}

			/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */
			var elementsLength = elements.length,
					elementsIndex = 0;

			/***************************
			 Argument Overloading
			 ***************************/

			/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */
			/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
				/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
				var startingArgumentPosition = argumentIndex + 1;

				options = {};

				/* Iterate through all options arguments */
				for (var i = startingArgumentPosition; i < arguments.length; i++) {
					/* Treat a number as a duration. Parse it out. */
					/* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */
					if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
						options.duration = arguments[i];
						/* Treat strings and arrays as easings. */
					} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
						options.easing = arguments[i];
						/* Treat a function as a complete callback. */
					} else if (Type.isFunction(arguments[i])) {
						options.complete = arguments[i];
					}
				}
			}

			/*********************
			 Action Detection
			 *********************/

			/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */
			var action;

			switch (propertiesMap) {
				case "scroll":
					action = "scroll";
					break;

				case "reverse":
					action = "reverse";
					break;

				case "pause":

					/*******************
					 Action: Pause
					 *******************/

					var currentTime = (new Date()).getTime();

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						pauseDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {

						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Set call to paused */
										activeCall[5] = {
											resume: false
										};

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since pause creates no new tweens, exit out of Velocity. */
					return getChain();

				case "resume":

					/*******************
					 Action: Resume
					 *******************/

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						resumeDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {
						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Skip any calls that have never been paused */
								if (!activeCall[5]) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */
										activeCall[5].resume = true;

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since resume creates no new tweens, exit out of Velocity. */
					return getChain();

				case "finish":
				case "finishAll":
				case "stop":
					/*******************
					 Action: Stop
					 *******************/

					/* Clear the currently-active delay on each targeted element. */
					$.each(elements, function(i, element) {
						if (Data(element) && Data(element).delayTimer) {
							/* Stop the timer from triggering its cached next() function. */
							clearTimeout(Data(element).delayTimer.setTimeout);

							/* Manually call the next() function so that the subsequent queue items can progress. */
							if (Data(element).delayTimer.next) {
								Data(element).delayTimer.next();
							}

							delete Data(element).delayTimer;
						}

						/* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */
						if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
							/* Iterate through the items in the element's queue. */
							$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
								/* The queue array can contain an "inprogress" string, which we skip. */
								if (Type.isFunction(item)) {
									item();
								}
							});

							/* Clearing the $.queue() array is achieved by resetting it to []. */
							$.queue(element, Type.isString(options) ? options : "", []);
						}
					});

					var callsToStop = [];

					/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */
					/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */
					/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */

					/* Iterate through every active call. */
					$.each(Velocity.State.calls, function(i, activeCall) {
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */
								/* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {
										/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */
										if (options === true || Type.isString(options)) {
											/* Iterate through the items in the element's queue. */
											$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
												/* The queue array can contain an "inprogress" string, which we skip. */
												if (Type.isFunction(item)) {
													/* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */
													item(null, true);
												}
											});

											/* Clearing the $.queue() array is achieved by resetting it to []. */
											$.queue(element, Type.isString(options) ? options : "", []);
										}

										if (propertiesMap === "stop") {
											/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */
											/* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false/queue:"custom" animations can't be reversed. */
											var data = Data(element);
											if (data && data.tweensContainer && (queueName === true || queueName === "")) {
												$.each(data.tweensContainer, function(m, activeTween) {
													activeTween.endValue = activeTween.currentValue;
												});
											}

											callsToStop.push(i);
										} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
											/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */
											activeCall[2].duration = 1;
										}
									}
								});
							});
						}
					});

					/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
					if (propertiesMap === "stop") {
						$.each(callsToStop, function(i, j) {
							completeCall(j, true);
						});

						if (promiseData.promise) {
							/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
							promiseData.resolver(elements);
						}
					}

					/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
					return getChain();

				default:
					/* Treat a non-empty plain object as a literal properties map. */
					if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
						action = "start";

						/****************
						 Redirects
						 ****************/

						/* Check if a string matches a registered redirect (see Redirects above). */
					} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
						opts = $.extend({}, options);

						var durationOriginal = opts.duration,
								delayOriginal = opts.delay || 0;

						/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
						if (opts.backwards === true) {
							elements = $.extend(true, [], elements).reverse();
						}

						/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
						$.each(elements, function(elementIndex, element) {
							/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
							if (parseFloat(opts.stagger)) {
								opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
							} else if (Type.isFunction(opts.stagger)) {
								opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
							}

							/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */
							if (opts.drag) {
								/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
								opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

								/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
								opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
							}

							/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */
							Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
						});

						/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */
						/* Note: The jQuery call chain is kept intact by returning the complete element set. */
						return getChain();
					} else {
						var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

						if (promiseData.promise) {
							promiseData.rejecter(new Error(abortError));
						} else if (window.console) {
							console.log(abortError);
						}

						return getChain();
					}
			}

			/**************************
			 Call-Wide Variables
			 **************************/

			/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */
			var callUnitConversionData = {
				lastParent: null,
				lastPosition: null,
				lastFontSize: null,
				lastPercentToPxWidth: null,
				lastPercentToPxHeight: null,
				lastEmToPx: null,
				remToPx: null,
				vwToPx: null,
				vhToPx: null
			};

			/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
			 Velocity.State.calls array that is processed during animation ticking. */
			var call = [];

			/************************
			 Element Processing
			 ************************/

			/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */
			function processElement(element, elementArrayIndex) {

				/*************************
				 Part I: Pre-Queueing
				 *************************/

				/***************************
				 Element-Wide Variables
				 ***************************/

				var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
						opts = $.extend({}, Velocity.defaults, options),
						/* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */
						tweensContainer = {},
						elementUnitConversionData;

				/******************
				 Element Init
				 ******************/

				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/******************
				 Option: Delay
				 ******************/

				/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
				/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
				if (parseFloat(opts.delay) && opts.queue !== false) {
					$.queue(element, opts.queue, function(next, clearQueue) {
						if (clearQueue === true) {
							/* Do not continue with animation queueing. */
							return true;
						}

						/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

						/* Temporarily store delayed elements to facilite access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								next();
							};
						})(callIndex);


						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(next, parseFloat(opts.delay)),
							next: delayComplete
						};
					});
				}

				/*********************
				 Option: Duration
				 *********************/

				/* Support for jQuery's named durations. */
				switch (opts.duration.toString().toLowerCase()) {
					case "fast":
						opts.duration = 200;
						break;

					case "normal":
						opts.duration = DURATION_DEFAULT;
						break;

					case "slow":
						opts.duration = 600;
						break;

					default:
						/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
						opts.duration = parseFloat(opts.duration) || 1;
				}

				/************************
				 Global Option: Mock
				 ************************/

				if (Velocity.mock !== false) {
					/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
					if (Velocity.mock === true) {
						opts.duration = opts.delay = 1;
					} else {
						opts.duration *= parseFloat(Velocity.mock) || 1;
						opts.delay *= parseFloat(Velocity.mock) || 1;
					}
				}

				/*******************
				 Option: Easing
				 *******************/

				opts.easing = getEasing(opts.easing, opts.duration);

				/**********************
				 Option: Callbacks
				 **********************/

				/* Callbacks must functions. Otherwise, default to null. */
				if (opts.begin && !Type.isFunction(opts.begin)) {
					opts.begin = null;
				}

				if (opts.progress && !Type.isFunction(opts.progress)) {
					opts.progress = null;
				}

				if (opts.complete && !Type.isFunction(opts.complete)) {
					opts.complete = null;
				}

				/*********************************
				 Option: Display & Visibility
				 *********************************/

				/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
				/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
				if (opts.display !== undefined && opts.display !== null) {
					opts.display = opts.display.toString().toLowerCase();

					/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
					if (opts.display === "auto") {
						opts.display = Velocity.CSS.Values.getDisplayType(element);
					}
				}

				if (opts.visibility !== undefined && opts.visibility !== null) {
					opts.visibility = opts.visibility.toString().toLowerCase();
				}

				/**********************
				 Option: mobileHA
				 **********************/

				/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */
				/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
				/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
				opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

				/***********************
				 Part II: Queueing
				 ***********************/

				/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
				/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
				function buildQueue(next) {
					var data, lastTweensContainer;

					/*******************
					 Option: Begin
					 *******************/

					/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
					if (opts.begin && elementsIndex === 0) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.begin.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/

					/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
					if (action === "scroll") {
						/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
						var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
								scrollOffset = parseFloat(opts.offset) || 0,
								scrollPositionCurrent,
								scrollPositionCurrentAlternate,
								scrollPositionEnd;

						/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
						if (opts.container) {
							/* Ensure that either a jQuery object or a raw DOM element was passed in. */
							if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
								/* Extract the raw DOM element from the jQuery wrapper. */
								opts.container = opts.container[0] || opts.container;
								/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */
								scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

								/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */
								scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
								/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
							} else {
								opts.container = null;
							}
						} else {
							/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */
							scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
							/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
							scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

							/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */
							scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
						}

						/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
						tweensContainer = {
							scroll: {
								rootPropertyValue: false,
								startValue: scrollPositionCurrent,
								currentValue: scrollPositionCurrent,
								endValue: scrollPositionEnd,
								unitType: "",
								easing: opts.easing,
								scrollData: {
									container: opts.container,
									direction: scrollDirection,
									alternateValue: scrollPositionCurrentAlternate
								}
							},
							element: element
						};

						if (Velocity.debug) {
							console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
						}

						/******************************************
						 Tween Data Construction (for Reverse)
						 ******************************************/

						/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
						 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
						 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
						/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
						/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
						 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
						 as reverting to the element's values as they were prior to the previous *Velocity* call. */
					} else if (action === "reverse") {
						data = Data(element);

						/* Abort if there is no prior animation data to reverse to. */
						if (!data) {
							return;
						}

						if (!data.tweensContainer) {
							/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
							$.dequeue(element, opts.queue);

							return;
						} else {
							/*********************
							 Options Parsing
							 *********************/

							/* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */
							if (data.opts.display === "none") {
								data.opts.display = "auto";
							}

							if (data.opts.visibility === "hidden") {
								data.opts.visibility = "visible";
							}

							/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
							data.opts.loop = false;
							data.opts.begin = null;
							data.opts.complete = null;

							/* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */
							if (!options.easing) {
								delete opts.easing;
							}

							if (!options.duration) {
								delete opts.duration;
							}

							/* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */
							opts = $.extend({}, data.opts, opts);

							/*************************************
							 Tweens Container Reconstruction
							 *************************************/

							/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
							lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

							/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
							for (var lastTween in lastTweensContainer) {
								/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
								if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
									var lastStartValue = lastTweensContainer[lastTween].startValue;

									lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
									lastTweensContainer[lastTween].endValue = lastStartValue;

									/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
									if (!Type.isEmptyObject(options)) {
										lastTweensContainer[lastTween].easing = opts.easing;
									}

									if (Velocity.debug) {
										console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
									}
								}
							}

							tweensContainer = lastTweensContainer;
						}

						/*****************************************
						 Tween Data Construction (for Start)
						 *****************************************/

					} else if (action === "start") {

						/*************************
						 Value Transferring
						 *************************/

						/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */
						/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */
						/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

						data = Data(element);

						/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */
						if (data && data.tweensContainer && data.isAnimating === true) {
							lastTweensContainer = data.tweensContainer;
						}

						/***************************
						 Tween Data Calculation
						 ***************************/

						/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
						/* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
						var parsePropertyValue = function(valueData, skipResolvingEasing) {
							var endValue, easing, startValue;

							/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
							if (Type.isFunction(valueData)) {
								valueData = valueData.call(element, elementArrayIndex, elementsLength);
							}

							/* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
							if (Type.isArray(valueData)) {
								/* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */
								endValue = valueData[0];

								/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */
								if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
									startValue = valueData[1];
									/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
								} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
									easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

									/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
									startValue = valueData[2];
								} else {
									startValue = valueData[1] || valueData[2];
								}
								/* Handle the single-value format. */
							} else {
								endValue = valueData;
							}

							/* Default to the call's easing if a per-property easing type was not defined. */
							if (!skipResolvingEasing) {
								easing = easing || opts.easing;
							}

							/* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
							if (Type.isFunction(endValue)) {
								endValue = endValue.call(element, elementArrayIndex, elementsLength);
							}

							if (Type.isFunction(startValue)) {
								startValue = startValue.call(element, elementArrayIndex, elementsLength);
							}

							/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
							return [endValue || 0, easing, startValue];
						};

						var fixPropertyValue = function(property, valueData) {
							/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
							var rootProperty = CSS.Hooks.getRoot(property),
									rootPropertyValue = false,
									/* Parse out endValue, easing, and startValue from the property's data. */
									endValue = valueData[0],
									easing = valueData[1],
									startValue = valueData[2],
									pattern;

							/**************************
							 Start Value Sourcing
							 **************************/

							/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
							/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
							if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
								if (Velocity.debug) {
									console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
								}
								return;
							}

							/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
							if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
								startValue = 0;
							}

							/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */
							/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
							if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
								if (startValue === undefined) {
									startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
								}

								/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
								rootPropertyValue = data.rootPropertyValueCache[rootProperty];
								/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
							} else {
								/* Handle hooked properties. */
								if (CSS.Hooks.registered[property]) {
									if (startValue === undefined) {
										rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
										/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */
										startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
										/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
										 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
										 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
										 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
									} else {
										/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
										rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
									}
									/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
								} else if (startValue === undefined) {
									startValue = CSS.getPropertyValue(element, property); /* GET */
								}
							}

							/**************************
							 Value Data Extraction
							 **************************/

							var separatedValue,
									endValueUnitType,
									startValueUnitType,
									operator = false;

							/* Separates a property value into its numeric value and its unit type. */
							var separateValue = function(property, value) {
								var unitType,
										numericValue;

								numericValue = (value || "0")
										.toString()
										.toLowerCase()
										/* Match the unit type at the end of the value. */
										.replace(/[%A-z]+$/, function(match) {
											/* Grab the unit type. */
											unitType = match;

											/* Strip the unit type off of value. */
											return "";
										});

								/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
								if (!unitType) {
									unitType = CSS.Values.getUnitType(property);
								}

								return [numericValue, unitType];
							};

							if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
								pattern = "";
								var iStart = 0, // index in startValue
										iEnd = 0, // index in endValue
										aStart = [], // array of startValue numbers
										aEnd = [], // array of endValue numbers
										inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
										inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
										inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

								startValue = CSS.Hooks.fixColors(startValue);
								endValue = CSS.Hooks.fixColors(endValue);
								while (iStart < startValue.length && iEnd < endValue.length) {
									var cStart = startValue[iStart],
											cEnd = endValue[iEnd];

									if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
										var tStart = cStart, // temporary character buffer
												tEnd = cEnd, // temporary character buffer
												dotStart = ".", // Make sure we can only ever match a single dot in a decimal
												dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

										while (++iStart < startValue.length) {
											cStart = startValue[iStart];
											if (cStart === dotStart) {
												dotStart = ".."; // Can never match two characters
											} else if (!/\d/.test(cStart)) {
												break;
											}
											tStart += cStart;
										}
										while (++iEnd < endValue.length) {
											cEnd = endValue[iEnd];
											if (cEnd === dotEnd) {
												dotEnd = ".."; // Can never match two characters
											} else if (!/\d/.test(cEnd)) {
												break;
											}
											tEnd += cEnd;
										}
										var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
												uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

										iStart += uStart.length;
										iEnd += uEnd.length;
										if (uStart === uEnd) {
											// Same units
											if (tStart === tEnd) {
												// Same numbers, so just copy over
												pattern += tStart + uStart;
											} else {
												// Different numbers, so store them
												pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
												aStart.push(parseFloat(tStart));
												aEnd.push(parseFloat(tEnd));
											}
										} else {
											// Different units, so put into a "calc(from + to)" and animate each side to/from zero
											var nStart = parseFloat(tStart),
													nEnd = parseFloat(tEnd);

											pattern += (inCalc < 5 ? "calc" : "") + "("
													+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
													+ " + "
													+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
													+ ")";
											if (nStart) {
												aStart.push(nStart);
												aEnd.push(0);
											}
											if (nEnd) {
												aStart.push(0);
												aEnd.push(nEnd);
											}
										}
									} else if (cStart === cEnd) {
										pattern += cStart;
										iStart++;
										iEnd++;
										// Keep track of being inside a calc()
										if (inCalc === 0 && cStart === "c"
												|| inCalc === 1 && cStart === "a"
												|| inCalc === 2 && cStart === "l"
												|| inCalc === 3 && cStart === "c"
												|| inCalc >= 4 && cStart === "("
												) {
											inCalc++;
										} else if ((inCalc && inCalc < 5)
												|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
											inCalc = 0;
										}
										// Keep track of being inside an rgb() / rgba()
										if (inRGB === 0 && cStart === "r"
												|| inRGB === 1 && cStart === "g"
												|| inRGB === 2 && cStart === "b"
												|| inRGB === 3 && cStart === "a"
												|| inRGB >= 3 && cStart === "("
												) {
											if (inRGB === 3 && cStart === "a") {
												inRGBA = 1;
											}
											inRGB++;
										} else if (inRGBA && cStart === ",") {
											if (++inRGBA > 3) {
												inRGB = inRGBA = 0;
											}
										} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
												|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
											inRGB = inRGBA = 0;
										}
									} else {
										inCalc = 0;
										// TODO: changing units, fixing colours
										break;
									}
								}
								if (iStart !== startValue.length || iEnd !== endValue.length) {
									if (Velocity.debug) {
										console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
									}
									pattern = undefined;
								}
								if (pattern) {
									if (aStart.length) {
										if (Velocity.debug) {
											console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
										}
										startValue = aStart;
										endValue = aEnd;
										endValueUnitType = startValueUnitType = "";
									} else {
										pattern = undefined;
									}
								}
							}

							if (!pattern) {
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];

								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;

									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];

								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;

								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/

								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
							}

							/***************************
							 Unit Ratio Calculation
							 ***************************/

							/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
							/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */
							/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
							/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
							var calculateUnitRatios = function() {

								/************************
								 Same Ratio Checks
								 ************************/

								/* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */
								var sameRatioIndicators = {
									myParent: element.parentNode || document.body, /* GET */
									position: CSS.getPropertyValue(element, "position"), /* GET */
									fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
								},
										/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
										samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
										/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
										sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

								/* Store these ratio indicators call-wide for the next element to compare against. */
								callUnitConversionData.lastParent = sameRatioIndicators.myParent;
								callUnitConversionData.lastPosition = sameRatioIndicators.position;
								callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

								/***************************
								 Element-Specific Units
								 ***************************/

								/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
								var measurement = 100,
										unitRatios = {};

								if (!sameEmRatio || !samePercentRatio) {
									var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

									Velocity.init(dummy);
									sameRatioIndicators.myParent.appendChild(dummy);

									/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
									/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
									$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, "hidden");
									});
									Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
									Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
									Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

									/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
									$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
									});
									/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
									Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

									/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
									unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

									sameRatioIndicators.myParent.removeChild(dummy);
								} else {
									unitRatios.emToPx = callUnitConversionData.lastEmToPx;
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
								}

								/***************************
								 Element-Agnostic Units
								 ***************************/

								/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */
								if (callUnitConversionData.remToPx === null) {
									/* Default to browsers' default fontSize of 16px in the case of 0. */
									callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
								}

								/* Similarly, viewport units are %-relative to the window's inner dimensions. */
								if (callUnitConversionData.vwToPx === null) {
									callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
									callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
								}

								unitRatios.remToPx = callUnitConversionData.remToPx;
								unitRatios.vwToPx = callUnitConversionData.vwToPx;
								unitRatios.vhToPx = callUnitConversionData.vhToPx;

								if (Velocity.debug >= 1) {
									console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
								}
								return unitRatios;
							};

							/********************
							 Unit Conversion
							 ********************/

							/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
							if (/[\/*]/.test(operator)) {
								endValueUnitType = startValueUnitType;
								/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
								 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
								 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
								 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
								/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
							} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
								/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
								/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */
								if (endValue === 0) {
									endValueUnitType = startValueUnitType;
								} else {
									/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
									elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

									/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
									/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
									var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

									/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
									switch (startValueUnitType) {
										case "%":
											/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
											startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* px acts as our midpoint in the unit conversion process; do nothing. */
											break;

										default:
											startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
									}

									/* Invert the px ratios to convert into to the target unit. */
									switch (endValueUnitType) {
										case "%":
											startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* startValue is already in px, do nothing; we're done. */
											break;

										default:
											startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
									}
								}
							}

							/*********************
							 Relative Values
							 *********************/

							/* Operator logic must be performed last since it requires unit-normalized start and end values. */
							/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */
							switch (operator) {
								case "+":
									endValue = startValue + endValue;
									break;

								case "-":
									endValue = startValue - endValue;
									break;

								case "*":
									endValue = startValue * endValue;
									break;

								case "/":
									endValue = startValue / endValue;
									break;
							}

							/**************************
							 tweensContainer Push
							 **************************/

							/* Construct the per-property tween object, and push it to the element's tweensContainer. */
							tweensContainer[property] = {
								rootPropertyValue: rootPropertyValue,
								startValue: startValue,
								currentValue: startValue,
								endValue: endValue,
								unitType: endValueUnitType,
								easing: easing
							};
							if (pattern) {
								tweensContainer[property].pattern = pattern;
							}

							if (Velocity.debug) {
								console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
							}
						};

						/* Create a tween out of each property, and append its associated data to tweensContainer. */
						for (var property in propertiesMap) {

							if (!propertiesMap.hasOwnProperty(property)) {
								continue;
							}
							/* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */
							var propertyName = CSS.Names.camelCase(property),
									valueData = parsePropertyValue(propertiesMap[property]);

							/* Find shorthand color properties that have been passed a hex string. */
							/* Would be quicker to use CSS.Lists.colors.includes() if possible */
							if (_inArray(CSS.Lists.colors, propertyName)) {
								/* Parse the value data for each shorthand. */
								var endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];

								if (CSS.RegEx.isHex.test(endValue)) {
									/* Convert the hex strings into their RGB component arrays. */
									var colorComponents = ["Red", "Green", "Blue"],
											endValueRGB = CSS.Values.hexToRgb(endValue),
											startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

									/* Inject the RGB component tweens into propertiesMap. */
									for (var i = 0; i < colorComponents.length; i++) {
										var dataArray = [endValueRGB[i]];

										if (easing) {
											dataArray.push(easing);
										}

										if (startValueRGB !== undefined) {
											dataArray.push(startValueRGB[i]);
										}

										fixPropertyValue(propertyName + colorComponents[i], dataArray);
									}
									/* If we have replaced a shortcut color value then don't update the standard property name */
									continue;
								}
							}
							fixPropertyValue(propertyName, valueData);
						}

						/* Along with its property data, store a reference to the element itself onto tweensContainer. */
						tweensContainer.element = element;
					}

					/*****************
					 Call Push
					 *****************/

					/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
					if (tweensContainer.element) {
						/* Apply the "velocity-animating" indicator class. */
						CSS.Values.addClass(element, "velocity-animating");

						/* The call array houses the tweensContainers for each element being animated in the current call. */
						call.push(tweensContainer);

						data = Data(element);

						if (data) {
							/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
							if (opts.queue === "") {

								data.tweensContainer = tweensContainer;
								data.opts = opts;
							}

							/* Switch on the element's animating flag. */
							data.isAnimating = true;
						}

						/* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */
						if (elementsIndex === elementsLength - 1) {
							/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */
							Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

							/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
							if (Velocity.State.isTicking === false) {
								Velocity.State.isTicking = true;

								/* Start the tick loop. */
								tick();
							}
						} else {
							elementsIndex++;
						}
					}
				}

				/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
				if (opts.queue === false) {
					/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */
					if (opts.delay) {

						/* Temporarily store delayed elements to facilitate access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								buildQueue();
							};
						})(callIndex);

						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
							next: delayComplete
						};
					} else {
						buildQueue();
					}
					/* Otherwise, the call undergoes element queueing as normal. */
					/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
				} else {
					$.queue(element, opts.queue, function(next, clearQueue) {
						/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
						if (clearQueue === true) {
							if (promiseData.promise) {
								promiseData.resolver(elements);
							}

							/* Do not continue with animation queueing. */
							return true;
						}

						/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						buildQueue(next);
					});
				}

				/*********************
				 Auto-Dequeuing
				 *********************/

				/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
				/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
				/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
				if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
					$.dequeue(element);
				}
			}

			/**************************
			 Element Set Iteration
			 **************************/

			/* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */
			$.each(elements, function(i, element) {
				/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
				if (Type.isNode(element)) {
					processElement(element, i);
				}
			});

			/******************
			 Option: Loop
			 ******************/

			/* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */
			/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
			opts = $.extend({}, Velocity.defaults, options);
			opts.loop = parseInt(opts.loop, 10);
			var reverseCallsCount = (opts.loop * 2) - 1;

			if (opts.loop) {
				/* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
				for (var x = 0; x < reverseCallsCount; x++) {
					/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
					var reverseOptions = {
						delay: opts.delay,
						progress: opts.progress
					};

					/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
					if (x === reverseCallsCount - 1) {
						reverseOptions.display = opts.display;
						reverseOptions.visibility = opts.visibility;
						reverseOptions.complete = opts.complete;
					}

					animate(elements, "reverse", reverseOptions);
				}
			}

			/***************
			 Chaining
			 ***************/

			/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
			return getChain();
		};

		/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
		Velocity = $.extend(animate, Velocity);
		/* For legacy support, also expose the literal animate method. */
		Velocity.animate = animate;

		/**************
		 Timing
		 **************/

		/* Ticker function. */
		var ticker = window.requestAnimationFrame || rAFShim;

		/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */
		/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
		if (!Velocity.State.isMobile && document.hidden !== undefined) {
			var updateTicker = function() {
				/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
				if (document.hidden) {
					ticker = function(callback) {
						/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
						return setTimeout(function() {
							callback(true);
						}, 16);
					};

					/* The rAF loop has been paused by the browser, so we manually restart the tick. */
					tick();
				} else {
					ticker = window.requestAnimationFrame || rAFShim;
				}
			};

			/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
			updateTicker();

			/* And then run check again every time visibility changes */
			document.addEventListener("visibilitychange", updateTicker);
		}

		/************
		 Tick
		 ************/

		/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
		function tick(timestamp) {
			/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
			if (timestamp) {
				/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
				var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

				/********************
				 Call Iteration
				 ********************/

				var callsLength = Velocity.State.calls.length;

				/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
				if (callsLength > 10000) {
					Velocity.State.calls = compactSparseArray(Velocity.State.calls);
					callsLength = Velocity.State.calls.length;
				}

				/* Iterate through each active call. */
				for (var i = 0; i < callsLength; i++) {
					/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
					if (!Velocity.State.calls[i]) {
						continue;
					}

					/************************
					 Call-Wide Variables
					 ************************/

					var callContainer = Velocity.State.calls[i],
							call = callContainer[0],
							opts = callContainer[2],
							timeStart = callContainer[3],
							firstTick = !timeStart,
							tweenDummyValue = null,
							pauseObject = callContainer[5],
							millisecondsEllapsed = callContainer[6];



					/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */
					/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */
					if (!timeStart) {
						timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
					}

					/* If a pause object is present, skip processing unless it has been set to resume */
					if (pauseObject) {
						if (pauseObject.resume === true) {
							/* Update the time start to accomodate the paused completion amount */
							timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

							/* Remove pause object after processing */
							callContainer[5] = null;
						} else {
							continue;
						}
					}

					millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

					/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
					 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
					 Accordingly, we ensure that percentComplete does not exceed 1. */
					var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

					/**********************
					 Element Iteration
					 **********************/

					/* For every call, iterate through each of the elements in its set. */
					for (var j = 0, callLength = call.length; j < callLength; j++) {
						var tweensContainer = call[j],
								element = tweensContainer.element;

						/* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
						if (!Data(element)) {
							continue;
						}

						var transformPropertyExists = false;

						/**********************************
						 Display & Visibility Toggling
						 **********************************/

						/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
						if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
							if (opts.display === "flex") {
								var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

								$.each(flexValues, function(i, flexValue) {
									CSS.setPropertyValue(element, "display", flexValue);
								});
							}

							CSS.setPropertyValue(element, "display", opts.display);
						}

						/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}

						/************************
						 Property Iteration
						 ************************/

						/* For every element, iterate through each property. */
						for (var property in tweensContainer) {
							/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
							if (tweensContainer.hasOwnProperty(property) && property !== "element") {
								var tween = tweensContainer[property],
										currentValue,
										/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
										easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

								/******************************
								 Current Value Calculation
								 ******************************/

								if (Type.isString(tween.pattern)) {
									var patternReplace = percentComplete === 1 ?
											function($0, index, round) {
												var result = tween.endValue[index];

												return round ? Math.round(result) : result;
											} :
											function($0, index, round) {
												var startValue = tween.startValue[index],
														tweenDelta = tween.endValue[index] - startValue,
														result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

												return round ? Math.round(result) : result;
											};

									currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
								} else if (percentComplete === 1) {
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									currentValue = tween.endValue;
								} else {
									/* Otherwise, calculate currentValue based on the current delta from startValue. */
									var tweenDelta = tween.endValue - tween.startValue;

									currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
									/* If no value change is occurring, don't proceed with DOM updating. */
								}
								if (!firstTick && (currentValue === tween.currentValue)) {
									continue;
								}

								tween.currentValue = currentValue;

								/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */
								if (property === "tween") {
									tweenDummyValue = currentValue;
								} else {
									/******************
									 Hooks: Part I
									 ******************/
									var hookRoot;

									/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
									if (CSS.Hooks.registered[property]) {
										hookRoot = CSS.Hooks.getRoot(property);

										var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

										if (rootPropertyValueCache) {
											tween.rootPropertyValue = rootPropertyValueCache;
										}
									}

									/*****************
									 DOM Update
									 *****************/

									/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
									/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
									var adjustedSetData = CSS.setPropertyValue(element, /* SET */
											property,
											tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
											tween.rootPropertyValue,
											tween.scrollData);

									/*******************
									 Hooks: Part II
									 *******************/

									/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
									if (CSS.Hooks.registered[property]) {
										/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
										if (CSS.Normalizations.registered[hookRoot]) {
											Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
										} else {
											Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
										}
									}

									/***************
									 Transforms
									 ***************/

									/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
									if (adjustedSetData[0] === "transform") {
										transformPropertyExists = true;
									}

								}
							}
						}

						/****************
						 mobileHA
						 ****************/

						/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
						if (opts.mobileHA) {
							/* Don't set the null transform hack if we've already done so. */
							if (Data(element).transformCache.translate3d === undefined) {
								/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
								Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

								transformPropertyExists = true;
							}
						}

						if (transformPropertyExists) {
							CSS.flushTransformCache(element);
						}
					}

					/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
					if (opts.display !== undefined && opts.display !== "none") {
						Velocity.State.calls[i][2].display = false;
					}
					if (opts.visibility !== undefined && opts.visibility !== "hidden") {
						Velocity.State.calls[i][2].visibility = false;
					}

					/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
					if (opts.progress) {
						opts.progress.call(callContainer[1],
								callContainer[1],
								percentComplete,
								Math.max(0, (timeStart + opts.duration) - timeCurrent),
								timeStart,
								tweenDummyValue);
					}

					/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
					if (percentComplete === 1) {
						completeCall(i);
					}
				}
			}

			/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
			if (Velocity.State.isTicking) {
				ticker(tick);
			}
		}

		/**********************
		 Call Completion
		 **********************/

		/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
		function completeCall(callIndex, isStopped) {
			/* Ensure the call exists. */
			if (!Velocity.State.calls[callIndex]) {
				return false;
			}

			/* Pull the metadata from the call. */
			var call = Velocity.State.calls[callIndex][0],
					elements = Velocity.State.calls[callIndex][1],
					opts = Velocity.State.calls[callIndex][2],
					resolver = Velocity.State.calls[callIndex][4];

			var remainingCallsExist = false;

			/*************************
			 Element Finalization
			 *************************/

			for (var i = 0, callLength = call.length; i < callLength; i++) {
				var element = call[i].element;

				/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
				/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
				/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
				if (!isStopped && !opts.loop) {
					if (opts.display === "none") {
						CSS.setPropertyValue(element, "display", opts.display);
					}

					if (opts.visibility === "hidden") {
						CSS.setPropertyValue(element, "visibility", opts.visibility);
					}
				}

				/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
				var data = Data(element);

				if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
					/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
					if (data) {
						data.isAnimating = false;
						/* Clear the element's rootPropertyValueCache, which will become stale. */
						data.rootPropertyValueCache = {};

						var transformHAPropertyExists = false;
						/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
						$.each(CSS.Lists.transforms3D, function(i, transformName) {
							var defaultValue = /^scale/.test(transformName) ? 1 : 0,
									currentValue = data.transformCache[transformName];

							if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
								transformHAPropertyExists = true;

								delete data.transformCache[transformName];
							}
						});

						/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
						if (opts.mobileHA) {
							transformHAPropertyExists = true;
							delete data.transformCache.translate3d;
						}

						/* Flush the subproperty removals to the DOM. */
						if (transformHAPropertyExists) {
							CSS.flushTransformCache(element);
						}

						/* Remove the "velocity-animating" indicator class. */
						CSS.Values.removeClass(element, "velocity-animating");
					}
				}

				/*********************
				 Option: Complete
				 *********************/

				/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
				/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
				if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
					/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
					try {
						opts.complete.call(elements, elements);
					} catch (error) {
						setTimeout(function() {
							throw error;
						}, 1);
					}
				}

				/**********************
				 Promise Resolving
				 **********************/

				/* Note: Infinite loops don't return promises. */
				if (resolver && opts.loop !== true) {
					resolver(elements);
				}

				/****************************
				 Option: Loop (Infinite)
				 ****************************/

				if (data && opts.loop === true && !isStopped) {
					/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
					$.each(data.tweensContainer, function(propertyName, tweenContainer) {
						if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
							var oldStartValue = tweenContainer.startValue;

							tweenContainer.startValue = tweenContainer.endValue;
							tweenContainer.endValue = oldStartValue;
						}

						if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
							tweenContainer.endValue = 0;
							tweenContainer.startValue = 100;
						}
					});

					Velocity(element, "reverse", {loop: true, delay: opts.delay});
				}

				/***************
				 Dequeueing
				 ***************/

				/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
				if (opts.queue !== false) {
					$.dequeue(element, opts.queue);
				}
			}

			/************************
			 Calls Array Cleanup
			 ************************/

			/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
			Velocity.State.calls[callIndex] = false;

			/* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */
			for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
				if (Velocity.State.calls[j] !== false) {
					remainingCallsExist = true;

					break;
				}
			}

			if (remainingCallsExist === false) {
				/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
				Velocity.State.isTicking = false;

				/* Clear the calls array so that its length is reset. */
				delete Velocity.State.calls;
				Velocity.State.calls = [];
			}
		}

		/******************
		 Frameworks
		 ******************/

		/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
		global.Velocity = Velocity;

		if (global !== window) {
			/* Assign the element function to Velocity's core animate() method. */
			global.fn.velocity = animate;
			/* Assign the object function's defaults to Velocity's global defaults object. */
			global.fn.velocity.defaults = Velocity.defaults;
		}

		/***********************
		 Packaged Redirects
		 ***********************/

		/* slideUp, slideDown */
		$.each(["Down", "Up"], function(i, direction) {
			Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						begin = opts.begin,
						complete = opts.complete,
						inlineValues = {},
						computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

				if (opts.display === undefined) {
					/* Show the element before slideDown begins and hide the element after slideUp completes. */
					/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
					opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
				}

				opts.begin = function() {
					/* If the user passed in a begin callback, fire it now. */
					if (elementsIndex === 0 && begin) {
						begin.call(elements, elements);
					}

					/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
					for (var property in computedValues) {
						if (!computedValues.hasOwnProperty(property)) {
							continue;
						}
						inlineValues[property] = element.style[property];

						/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */
						var propertyValue = CSS.getPropertyValue(element, property);
						computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
					}

					/* Force vertical overflow content to clip so that sliding works as expected. */
					inlineValues.overflow = element.style.overflow;
					element.style.overflow = "hidden";
				};

				opts.complete = function() {
					/* Reset element to its pre-slide inline values once its slide animation is complete. */
					for (var property in inlineValues) {
						if (inlineValues.hasOwnProperty(property)) {
							element.style[property] = inlineValues[property];
						}
					}

					/* If the user passed in a complete callback, fire it now. */
					if (elementsIndex === elementsSize - 1) {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					}
				};

				Velocity(element, computedValues, opts);
			};
		});

		/* fadeIn, fadeOut */
		$.each(["In", "Out"], function(i, direction) {
			Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						complete = opts.complete,
						propertiesMap = {opacity: (direction === "In") ? 1 : 0};

				/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */
				if (elementsIndex !== 0) {
					opts.begin = null;
				}
				if (elementsIndex !== elementsSize - 1) {
					opts.complete = null;
				} else {
					opts.complete = function() {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
				}

				/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
				/* Note: We allow users to pass in "null" to skip display setting altogether. */
				if (opts.display === undefined) {
					opts.display = (direction === "In" ? "auto" : "none");
				}

				Velocity(this, propertiesMap, opts);
			};
		});

		return Velocity;
	}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
}));

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

},{}],3:[function(require,module,exports){
var Vue // late bind
var version
var map = Object.create(null)
if (typeof window !== 'undefined') {
  window.__VUE_HOT_MAP__ = map
}
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if(map[id]) { return }

  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Check if module is recorded
 *
 * @param {String} id
 */

exports.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cached together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }
      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)
      instance.$forceUpdate()
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

},{}],4:[function(require,module,exports){
/*!
 * vue-slide-bar v1.1.9
 * (c) 2018-present Pongsatorn Nitithammawoot <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vueSlideBar=e()}(this,function(){"use strict";return function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),i=" .vue-slide-bar-component[data-v-68863e48] { position: relative; box-sizing: border-box; user-select: none; } .vue-slide-bar[data-v-68863e48] { position: relative; display: block; border-radius: 15px; background-color: #d8d8d8; cursor: pointer; } .vue-slide-bar[data-v-68863e48]::after { content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 2; } .vue-slide-bar-process[data-v-68863e48] { position: absolute; border-radius: 15px; background-color: #1066FD; transition: all 0s; z-index: 1; width: 0; height: 100%; top: 0; left: 0; will-change: width; } .vue-slide-bar-tooltip-container[data-v-68863e48] { position: absolute; transition: all 0s; will-change: transform; cursor: pointer; z-index: 3; left: 0; top: -16px; } .vue-slide-bar-tooltip-wrap[data-v-68863e48] { /* display: none; */ position: absolute; z-index: 9; width: 100%; height: 100%; display: block !important; } .vue-slide-bar-tooltip-top[data-v-68863e48] { top: -12px; left: 40%; transform: translate(-50%, -100%); } .vue-slide-bar-tooltip[data-v-68863e48] { position: relative; font-size: 14px; white-space: nowrap; padding: 2px 5px; min-width: 20px; text-align: center; color: #fff; border-radius: 5px; border: 1px solid #1066FD; background-color: #1066FD; } .vue-slide-bar-tooltip[data-v-68863e48]::before { content: ''; position: absolute; bottom: -10px; left: 50%; width: 0; height: 0; border: 5px solid transparent; border-top-color: inherit; transform: translate(-50%, 0); } .vue-slide-bar-range[data-v-68863e48] { display: flex; padding: 5px 0; justify-content: space-between; } .vue-slide-bar-separate[data-v-68863e48] { position: relative; width: 2px; background-color: #9e9e9e; height: 5px; cursor: pointer; } .vue-slide-bar-separate-text[data-v-68863e48] { text-align: center; position: absolute; white-space: nowrap; transform: translate(-50%, 0); top: 6px; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}}(),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap",staticClass:"vue-slide-bar-component vue-slide-bar-horizontal",style:t.calculateHeight,attrs:{id:"wrap"},on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slide-bar",style:{height:t.lineHeight+"px"},attrs:{id:"slider"}},[[i("div",{ref:"tooltip",staticClass:"vue-slide-bar-always vue-slide-bar-tooltip-container",style:{width:t.iconWidth+"px"},on:{mousedown:t.moveStart,touchstart:t.moveStart}},[t.showTooltip?i("span",{staticClass:"vue-slide-bar-tooltip-top vue-slide-bar-tooltip-wrap"},[t._t("tooltip",[i("span",{staticClass:"vue-slide-bar-tooltip",style:t.tooltipStyles},[t._v(t._s(t.val))])])],2):t._e()])],t._v(" "),i("div",{ref:"process",staticClass:"vue-slide-bar-process",style:t.processStyle})],2),t._v(" "),t.range?i("div",{staticClass:"vue-slide-bar-range"},t._l(t.range,function(e,s){return i("div",{key:s,staticClass:"vue-slide-bar-separate",style:t.dataLabelStyles},[e.isHide?t._e():i("span",{staticClass:"vue-slide-bar-separate-text"},[t._v(" "+t._s(e.label)+" ")])])})):t._e()])},staticRenderFns:[],_scopeId:"data-v-68863e48",name:"VueSlideBar",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0,isComponentExists:!0,interval:1,lazy:!1,realTime:!1,dataLabelStyles:Object.assign({color:"#4a4a4a","font-family":"Arial, sans-serif","font-size":"12px"},this.$props.labelStyles)}},props:{data:{type:Array,default:null},range:{type:Array,default:null},speed:{type:Number,default:.5},lineHeight:{type:Number,default:5},iconWidth:{type:Number,default:20},value:{type:[String,Number],default:0},min:{type:Number,default:0},max:{type:Number,default:100},showTooltip:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},paddingless:{type:Boolean,default:!1},tooltipStyles:Object,labelStyles:Object,processStyle:Object},computed:{slider:function(){return this.$refs.tooltip},val:{get:function(){return this.data?this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data){var e=this.data.indexOf(t);e>-1&&(this.currentValue=e)}else this.currentValue=t}},currentIndex:function(){return(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return[0,this.currentIndex]},minimum:function(){return this.data?0:this.min},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return[0,this.size]},valueLimit:function(){return[this.minimum,this.maximum]},calculateHeight:function(){return this.paddingless?{}:{"padding-top":"40px","min-height":this.range?"100px":null}}},watch:{value:function(t){this.flag?this.setValue(t):this.setValue(t,this.speed)},max:function(t){if(t<this.min)return this.printError("[VueSlideBar error]: The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("[VueSlideBar error]: The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),window.addEventListener("resize",this.refresh)},unbindEvents:function(){window.removeEventListener("resize",this.refresh),document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd)},getPos:function(t){return this.realTime&&this.getStaticData(),t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled||!this.draggable&&"wrap"===t.target.id)return!1;var e=this.getPos(t);this.setValueOnPos(e)},moveStart:function(t,e){if(!this.draggable)return!1;this.flag=!0,this.$emit("dragStart",this)},moving:function(t){if(!this.flag||!this.draggable)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.setValueOnPos(this.getPos(t),!0)},moveEnd:function(t){if(!this.flag||!this.draggable)return!1;this.$emit("dragEnd",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,this.setPosition()},setValueOnPos:function(t,e){var i=this.limit,s=this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var n=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(n,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){if(t<this.minimum||t>this.maximum)return!1;this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},setIndex:function(t){t=this.spacing*t+this.minimum,this.setCurrentValue(t)},setValue:function(t,e){var i=this;if(this.isDiff(this.val,t)){var s=this.limitValue(t);this.val=s,this.syncValue()}this.$nextTick(function(){return i.setPosition(e)})},setPosition:function(t){this.flag?this.setTransitionTime(0):this.setTransitionTime(void 0===t?this.speed:t),this.setTransform(this.position)},setTransform:function(t){var e="translateX("+(t-(this.$refs.tooltip.scrollWidth-2)/2)+"px)";this.slider.style.transform=e,this.slider.style.WebkitTransform=e,this.slider.style.msTransform=e,this.$refs.process.style.width=t+"px",this.$refs.process.style.left=0},setTransitionTime:function(t){this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i;return(i=t)<e.min?(e.printError("[VueSlideBar warn]: The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("[VueSlideBar warn]: The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i},syncValue:function(){var t=this.val;this.range&&this.$emit("callbackRange",this.range[this.currentIndex]),this.$emit("input",t)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size=this.$refs.elem.offsetWidth,this.offset=this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())},printError:function(t){console.error(t)}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("[VueSlideBar error]: window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),0),t.bindEvents())})},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}});


},{}],5:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],6:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-b1627a9a] {\n  height: 100vh;\n  overflow: hidden;\n}\n.app-header[data-v-b1627a9a] {\n  color: black;\n  background-color: #fff;\n}\n.md-app-content[data-v-b1627a9a] {\n  height: calc(100vh - 64px) !important;\n  position: relative;\n  padding: 0;\n}\n.md-app-container {\n  overflow: hidden;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpinalHeader = require("./header/SpinalHeader.vue");

var _SpinalHeader2 = _interopRequireDefault(_SpinalHeader);

var _SpinalRightSideBar = require("./RightSideBar/SpinalRightSideBar.vue");

var _SpinalRightSideBar2 = _interopRequireDefault(_SpinalRightSideBar);

var _MainContent = require("./MainContent/MainContent.vue");

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  data: function data() {
    return {
      menuVisible: false
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    closeSidebar: function closeSidebar() {
      this.menuVisible = false;
    }
  },

  components: { spinalHeader: _SpinalHeader2.default, SpinalRightSideBar: _SpinalRightSideBar2.default, MainContent: _MainContent2.default }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"app-header"},[_c('spinalHeader',{model:{value:(_vm.menuVisible),callback:function ($$v) {_vm.menuVisible=$$v},expression:"menuVisible"}})],1),_vm._v(" "),_c('md-app-drawer',{staticClass:"md-right",attrs:{"md-active":_vm.menuVisible},on:{"update:mdActive":function($event){_vm.menuVisible=$event}}},[_c('SpinalRightSideBar',{model:{value:(_vm.menuVisible),callback:function ($$v) {_vm.menuVisible=$$v},expression:"menuVisible"}})],1),_vm._v(" "),_c('md-app-content',[_c('MainContent')],1)],1)],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-b1627a9a"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1627a9a", __vue__options__)
  } else {
    hotAPI.reload("data-v-b1627a9a", __vue__options__)
  }
})()}

},{"./MainContent/MainContent.vue":10,"./RightSideBar/SpinalRightSideBar.vue":20,"./header/SpinalHeader.vue":24,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],7:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ForgeContent",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    _vue2.default.prototype.$ForgeViewer.start_viewer(this.$el);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dfa02782", __vue__options__)
  } else {
    hotAPI.reload("data-v-dfa02782", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgeExtentionManager = function () {
  function ForgeExtentionManager() {
    _classCallCheck(this, ForgeExtentionManager);

    this.extentions = [];
  }

  _createClass(ForgeExtentionManager, [{
    key: "getExtentions",
    value: function getExtentions() {
      return this.extentions;
    }
  }, {
    key: "addExtention",
    value: function addExtention(name) {
      this.extentions.push(name);
    }
  }]);

  return ForgeExtentionManager;
}();

exports.default = ForgeExtentionManager;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transformModel2 = require("./transformModel.js");

var _transformModel3 = _interopRequireDefault(_transformModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Q = require("q");

var ForgeViewer = function () {
  function ForgeViewer() {
    _classCallCheck(this, ForgeViewer);

    this.viewer;
    this.config = {};
    this.options = {
      env: "Local",
      docid: "",
      useADP: false
    };
    this.docs = [];
    window.spinal.ForgeExtentionManager.addExtention("Autodesk.ADN.Viewing.Extension.Color");
    this.rdy = Q.defer();
  }

  _createClass(ForgeViewer, [{
    key: "loadModel",
    value: function loadModel(doc) {
      var _this = this;

      var path = doc.path;
      if (doc.path.indexOf("http://") !== 0 && doc.path.indexOf("https://") !== 0) {
        path = window.location.origin + doc.path;
      }

      doc.loaded = true;
      var opts = this.config;
      return new Promise(function (resolve, reject) {
        var _onGeometryLoaded = function _onGeometryLoaded(event) {
          _this.viewer.removeEventListener(window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT, _onGeometryLoaded);
          doc.model = event.model;
          return resolve(event.model);
        };
        _this.viewer.addEventListener(window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT, _onGeometryLoaded);

        _this.viewer.loadModel(path, opts, function () {}, function (errorCode, errorMessage, statusCode, statusText) {
          _this.viewer.removeEventListener(window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT, _onGeometryLoaded);

          return reject({
            errorCode: errorCode,
            errorMessage: errorMessage,
            statusCode: statusCode,
            statusText: statusText
          });
        });
      }).then(function () {
        return _this.transformModel(doc, true);
      }).then(function () {
        return _this.checkCheckCurrentModel();
      });
    }
  }, {
    key: "unloadModel",
    value: function unloadModel(doc) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var model = doc.model;
        doc.loaded = false;
        doc.model = null;
        _this2.viewer.impl.unloadModel(model);
        _this2.viewer.impl.sceneUpdated(true);
        resolve();
      }).then(function () {
        return _this2.checkCheckCurrentModel();
      });
    }
  }, {
    key: "_setCurrentModel",
    value: function _setCurrentModel(model) {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.viewer.model = model;
        var propertyPanel = _this3.viewer.getPropertyPanel(true);
        propertyPanel.currentModel = model;
        model.getObjectTree(function (instanceTree) {
          _this3.viewer.modelstructure.setModel(instanceTree);
          resolve();
        });
      });
    }
  }, {
    key: "setCurrentModel",
    value: function setCurrentModel(model) {
      return this._setCurrentModel.call(this, model);
    }
  }, {
    key: "fitToView",
    value: function fitToView(objectIds, model) {
      return this.viewer.fitToView(objectIds, model);
    }
  }, {
    key: "checkCheckCurrentModel",
    value: function checkCheckCurrentModel() {
      var found = false;
      for (var index = 0; index < this.docs.length; index++) {
        if (this.docs[index].model === this.viewer.model) found = true;
      }
      if (found === false) {
        for (var _index = 0; _index < this.docs.length; _index++) {
          if (this.docs[_index].loaded === true) {
            this._setCurrentModel(this.docs[_index].model);
          }
        }
      }
    }
  }, {
    key: "onDocumentLoadFailure",
    value: function onDocumentLoadFailure(viewerErrorCode) {
      console.error("onDocumentLoadFailure() - errorCode:" + viewerErrorCode);
    }
  }, {
    key: "onItemLoadSuccess",
    value: function onItemLoadSuccess() {
      var extensions = window.spinal.ForgeExtentionManager.getExtentions();
      for (var i = 0; i < extensions.length; i++) {
        this.viewer.loadExtension(extensions[i], this.options);
      }
    }
  }, {
    key: "start_viewer",
    value: function start_viewer(dom) {
      var _this4 = this;

      window.spinal.spinalSystem.getModel().then(function (forgefile) {
        _this4.forgeFile = forgefile;
        _this4.docs = _this4.forgeFile._children.get();
        var itemToLoad = [];
        if (_this4.docs.length != 0) {
          var path = _this4.docs[0].path;

          for (var i = 0; i < _this4.docs.length; i++) {
            if (_this4.docs[i].loaded !== true) _this4.docs[i].loaded = false;else {
              itemToLoad.push(_this4.docs[i]);
            }
          }
          if (itemToLoad.length === 0) itemToLoad.push(_this4.docs[0]);
          for (i = 0; i < _this4.docs.length; i++) {
            if (/.+\.svf$/.test(_this4.docs[i].path)) {
              path = _this4.docs[i].path;
              break;
            }
          }
          if (path.indexOf("http://") !== 0 && path.indexOf("https://") !== 0) {
            path = window.location.origin + path;
          }
        }
        _this4.viewer = new window.Autodesk.Viewing.Private.GuiViewer3D(dom, _this4.config); // With toolbar
        window.Autodesk.Viewing.Initializer(_this4.options, async function () {
          _this4.viewer.initialize();
          _this4.onItemLoadSuccess();

          for (var index = 0; index < itemToLoad.length; index++) {
            var element = itemToLoad[index];
            // eslint-disable-next-line no-await-in-loop
            await _this4.loadModel(element);
          }
          _this4.rdy.resolve();
        });
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "getRealModelItem",
    value: function getRealModelItem(item) {
      for (var index = 0; index < this.forgeFile._children.length; index++) {
        var element = this.forgeFile._children[index];
        if (element.name.get() === item.name) return element;
      }
      return null;
    }
  }, {
    key: "updateItem",
    value: function updateItem(item) {
      var model = this.getRealModelItem(item);
      if (model === null) return false;
      var change = false;

      for (var key in item) {
        if (item.hasOwnProperty(key) && key !== "model") {
          if (_typeof(item[key]) === "object") {
            if (typeof model[key] === "undefined") {
              model.add_attr(_defineProperty({}, key, item[key]));
              change = true;
            } else for (var keyObjet in item[key]) {
              if (item[key].hasOwnProperty(keyObjet)) {
                if (model[key][keyObjet].set(item[key][keyObjet])) change = true;
              }
            }
          } else {
            if (typeof model[key] === "undefined") {
              model.add_attr(_defineProperty({}, key, item[key]));
              change = true;
            } else {
              if (model[key].set(item[key])) change = true;
            }
          }
        }
      }
      return change;
    }
  }, {
    key: "transformModel",
    value: function transformModel(item) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var model = this.getRealModelItem(item);

      if (force === true && item || this.updateItem(item) === true) return (0, _transformModel3.default)(this.viewer, item.model, model);
      return Promise.resolve();
    }
  }]);

  return ForgeViewer;
}();
// ();

exports.default = ForgeViewer;

},{"./transformModel.js":19,"q":"q"}],10:[function(require,module,exports){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _ForgeContent = require("./ForgeContent.vue");

var _ForgeContent2 = _interopRequireDefault(_ForgeContent);

var _ModelExplorer = require("./ModelExplorer/ModelExplorer.vue");

var _ModelExplorer2 = _interopRequireDefault(_ModelExplorer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "app",
  components: { ForgeContent: _ForgeContent2.default, ModelExplorer: _ModelExplorer2.default },
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"overflow":"hidden"}},[_c('forge-content'),_vm._v(" "),_c('model-explorer',{staticStyle:{"overflow":"hidden"}})],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8fe8c63a", __vue__options__)
  } else {
    hotAPI.reload("data-v-8fe8c63a", __vue__options__)
  }
})()}

},{"./ForgeContent.vue":7,"./ModelExplorer/ModelExplorer.vue":12,"vue":"vue","vue-hot-reload-api":3}],11:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-opn-btn[data-v-739f1ee8] {\n  background-color: #2d3d93 !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _velocityAnimate = require("velocity-animate");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "BtnIconLabelTransition",
  props: ["value", "label", "icon"],
  data: function data() {
    return {};
  },

  computed: {
    computedValue: function computedValue() {
      return this.value;
    }
  },
  methods: {
    onClickModelExplorer: function onClickModelExplorer() {
      this.$emit("input", !this.computedValue);
    },

    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = 0;
    },
    enter: function enter(el, done) {
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 1, width: "100%" }, { complete: done });
      }, 100);
    },
    leave: function leave(el, done) {
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 0, width: "0px" }, { complete: done });
      }, 100);
    }
  },
  mounted: function mounted() {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-button',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.label),expression:"label"}],staticClass:"md-raised spinal-forge-model-explorer-opn-btn",on:{"click":_vm.onClickModelExplorer}},[_c('md-icon',{staticClass:"md-small"},[_vm._v("layers")]),_vm._v(" "),_c('transition',{attrs:{"css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.computedValue),expression:"computedValue"}]},[_vm._v(_vm._s(_vm.label))])])],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-739f1ee8"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-739f1ee8", __vue__options__)
  } else {
    hotAPI.reload("data-v-739f1ee8", __vue__options__)
  }
})()}

},{"velocity-animate":2,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],12:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-container[data-v-1657fd04] {\n  pointer-events: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  display: flex;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.spinal-forge-model-explorer[data-v-1657fd04] {\n  pointer-events: auto;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: #2d3d93;\n}\n.spinal-forge-model-explorer-hidden[data-v-1657fd04] {\n  opacity: 0.5;\n}\n.spinal-forge-model-explorer-opn-btn[data-v-1657fd04] {\n  margin: 0px 0;\n  min-width: 20px;\n}\n.model-explorer-settings-container[data-v-1657fd04] {\n  pointer-events: auto;\n}\n.slide-fade-enter-active {\n  transition: all 1s;\n}\n.slide-fade-leave-active {\n  transition: all 0.8s;\n}\n.slide-fade-enter, .slide-fade-leave-to\n/* .slide-fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n\n.noselect {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome and Opera */\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModelExplorerList = require("./ModelExplorerList.vue");

var _ModelExplorerList2 = _interopRequireDefault(_ModelExplorerList);

var _BtnIconLabelTransition = require("./BtnIconLabelTransition.vue");

var _BtnIconLabelTransition2 = _interopRequireDefault(_BtnIconLabelTransition);

var _ModelExplorerService = require("./ModelExplorerService.js");

var _ModelExplorerService2 = _interopRequireDefault(_ModelExplorerService);

var _ModelExplorerSettings = require("./ModelExplorerSettings/ModelExplorerSettings.vue");

var _ModelExplorerSettings2 = _interopRequireDefault(_ModelExplorerSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ModelExplorer",
  data: function data() {
    this.ForgeViewer = null;
    return {
      labelBtn: "Model Explorer",
      isListShown: false,
      list: [],
      selectedNodeSettings: null,
      isSettingShow: false };
  },

  components: {
    ModelExplorerList: _ModelExplorerList2.default,
    BtnIconLabelTransition: _BtnIconLabelTransition2.default,
    ModelExplorerSettings: _ModelExplorerSettings2.default
  },
  computed: {
    computedIsSettingShow: function computedIsSettingShow() {
      return this.isSettingShow == true && this.selectedNodeSettings !== null && this.selectedNodeSettings.loaded == true;
    }
  },
  methods: {
    onModelSelect: function onModelSelect(item) {
      _ModelExplorerService2.default.toogleView(item);
    },
    onModelCheckSelect: function onModelCheckSelect(item) {
      _ModelExplorerService2.default.setCurrentModel(item);
    },
    onModelVisibilitySelect: function onModelVisibilitySelect(item) {
      _ModelExplorerService2.default.selectModel(item);
    },
    onModelExplorerSettingsSelect: function onModelExplorerSettingsSelect(item) {
      if (this.isSettingShow === false || this.isSettingShow === true && this.selectedNodeSettings !== item) {
        this.selectedNodeSettings = item;
        this.isSettingShow = true;
      } else {
        this.selectedNodeSettings = null;
        this.isSettingShow = false;
      }
    },
    onUpdateSetting: function onUpdateSetting(item, translate, rotate, scale) {
      item.translate = translate;
      item.rotate = rotate;
      item.scale = scale;

      _ModelExplorerService2.default.transformModel(item);
    }
  },
  mounted: function mounted() {
    var _this = this;

    _ModelExplorerService2.default.getModelList().then(function (list) {
      _this.list = list;
    }).catch(console.error);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinal-forge-model-explorer-container noselect"},[_c('md-content',{staticClass:"spinal-forge-model-explorer",class:{'spinal-forge-model-explorer-hidden':!_vm.isListShown}},[_c('btn-icon-label-transition',{staticStyle:{"width":"100%"},attrs:{"icon":'layers',"label":_vm.labelBtn},model:{value:(_vm.isListShown),callback:function ($$v) {_vm.isListShown=$$v},expression:"isListShown"}}),_vm._v(" "),_c('model-explorer-list',{attrs:{"list":_vm.list,"show":_vm.isListShown},on:{"onModelSelect":_vm.onModelSelect,"onModelCheckSelect":_vm.onModelCheckSelect,"onModelVisibilitySelect":_vm.onModelVisibilitySelect,"onModelExplorerSettingsSelect":_vm.onModelExplorerSettingsSelect}})],1),_vm._v(" "),_c('model-explorer-settings',{staticClass:"model-explorer-settings-container",attrs:{"item":_vm.selectedNodeSettings,"value":_vm.computedIsSettingShow},on:{"onUpdateSetting":_vm.onUpdateSetting,"input":function($event){_vm.isSettingShow = $event}}})],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-1657fd04"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1657fd04", __vue__options__)
  } else {
    hotAPI.reload("data-v-1657fd04", __vue__options__)
  }
})()}

},{"./BtnIconLabelTransition.vue":11,"./ModelExplorerList.vue":13,"./ModelExplorerService.js":14,"./ModelExplorerSettings/ModelExplorerSettings.vue":16,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],13:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-loading[data-v-7a7c7cc2] {\n  text-align: center;\n}\n\n.spinal-forge-model-explorer-list[data-v-7a7c7cc2] {\n  padding: 0;\n  border-radius: 5px;\n  max-height: calc(100vh - 109px);\n  overflow-y: auto;\n}\n\n.spinal-forge-model-explorer-list-row[data-v-7a7c7cc2] {\n  cursor: pointer;\n  display: flex;\n  align-content: flex-start;\n  text-align: center;\n  align-items: center;\n  margin: 1px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:first-child {\n  margin-top: 5px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:first-child:empty {\n  margin-top: 0;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:last-child {\n  margin-bottom: 5px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:last-child:empty {\n  margin-bottom: 0;\n}\n.spinal-forge-model-explorer-list-row[data-v-7a7c7cc2]:hover {\n  background-color: #356bab;\n}\n\n.spinal-forge-model-explorer-list-row-icon[data-v-7a7c7cc2] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.spinal-forge-model-explorer-list-row-icon-first[data-v-7a7c7cc2] {\n  margin-left: 8px;\n}\n\n.spinal-forge-model-explorer-list-row-label[data-v-7a7c7cc2] {\n  flex-basis: 100%;\n  align-self: stretch;\n  text-align: left;\n  margin: 0;\n  margin-left: 8px;\n  line-height: 1.2;\n  padding-left: 0.5em;\n  padding-top: 0.9em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 195px;\n}\n.spinal-forge-model-explorer-list-row-label-span[data-v-7a7c7cc2] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _velocityAnimate = require("velocity-animate");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _ModelExplorerService = require("./ModelExplorerService.js");

var _ModelExplorerService2 = _interopRequireDefault(_ModelExplorerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ModelExplorerList",
  props: ["show", "list"],
  data: function data() {
    return {};
  },

  methods: {
    checkStyle: function checkStyle(item) {
      if (_ModelExplorerService2.default.isCurrentModel(item) === true) return { color: "#F68204" };
      return {};
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 1, height: "48px" }, { complete: done });
      }, delay);
    },
    leave: function leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.show && _vm.list.length === 0)?_c('p',{staticClass:"spinal-forge-model-explorer-loading"},[_vm._v("Loading...")]):_vm._e(),_vm._v(" "),_c('transition-group',{staticClass:"spinal-forge-model-explorer-list md-scrollbar",attrs:{"tag":"md-content","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},_vm._l((_vm.list),function(item,idx){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],key:idx,staticClass:"md-button spinal-forge-model-explorer-list-row",on:{"click":function($event){_vm.$emit('onModelSelect', item, idx)}}},[_c('div',{directives:[{name:"tooltip",rawName:"v-tooltip.auto-end",value:({content: item.name, delay: 500}),expression:"{content: item.name, delay: 500}",modifiers:{"auto-end":true}}],staticClass:"spinal-forge-model-explorer-list-row-label"},[_c('span',{staticClass:"spinal-forge-model-explorer-list-row-label-span"},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),(item.loaded === true)?_c('md-button',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({content:'Open transform settings', delay: 500}),expression:"{content:'Open transform settings', delay: 500}"}],staticClass:"md-icon-button spinal-forge-model-explorer-list-row-icon spinal-forge-model-explorer-list-row-icon-first",nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelExplorerSettingsSelect', item, idx)}}},[_c('md-icon',[_vm._v("settings")])],1):_vm._e(),_vm._v(" "),(item.loaded === true)?_c('md-button',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({content:'Select and fit to view', delay: 500}),expression:"{content:'Select and fit to view', delay: 500}"}],staticClass:"md-icon-button spinal-forge-model-explorer-list-row-icon",nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelVisibilitySelect', item, idx)}}},[_c('md-icon',[_vm._v("gps_fixed")])],1):_vm._e(),_vm._v(" "),(item.loaded === true)?_c('md-button',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({content:'Open transform settings', delay: 500}),expression:"{content:'Open transform settings', delay: 500}"}],staticClass:"md-icon-button spinal-forge-model-explorer-list-row-icon",nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelCheckSelect', item, idx)}}},[_c('md-icon',{style:(_vm.checkStyle(item))},[_vm._v("check")])],1):_vm._e()],1)}))],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-7a7c7cc2"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a7c7cc2", __vue__options__)
  } else {
    hotAPI.reload("data-v-7a7c7cc2", __vue__options__)
  }
})()}

},{"./ModelExplorerService.js":14,"velocity-animate":2,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getForgeViewer() {
  return window.spinal.ForgeViewer;
}

var isReady = true;
exports.default = {
  getModelList: function getModelList() {
    var forgeViewer = getForgeViewer();
    return forgeViewer.rdy.promise.then(function () {
      var list = [];
      var docs = forgeViewer.docs;
      for (var index = 0; index < docs.length; index++) {
        var element = docs[index];
        list.push(element);
      }
      return list;
    });
  },
  toogleView: function toogleView(item) {
    var forgeViewer = getForgeViewer();
    var prom = void 0;
    if (isReady === true) {
      isReady = false;
      if (item.loaded === true) {
        prom = forgeViewer.unloadModel.call(forgeViewer, item);
      } else {
        prom = forgeViewer.loadModel.call(forgeViewer, item);
      }
      prom.then(function () {
        forgeViewer.updateItem.call(forgeViewer, item);
        isReady = true;
      });
    }
  },
  isCurrentModel: function isCurrentModel(item) {
    var forgeViewer = getForgeViewer();
    return forgeViewer.viewer.model === item.model;
  },
  setCurrentModel: function setCurrentModel(item) {
    if (this.isCurrentModel(item) !== true) {
      var forgeViewer = getForgeViewer();
      forgeViewer.setCurrentModel.call(forgeViewer, item.model);
    }
  },
  selectModel: function selectModel(item) {
    if (item && item.loaded === true && item.model) {
      this.clearSelection();
      item.model.selector.setSelection([1], window.Autodesk.Viewing.SelectionMode.FIRST_OBJECT);
      this.fitToView([1], item.model);
    }
  },
  clearSelection: function clearSelection() {
    var forgeViewer = getForgeViewer();
    forgeViewer.viewer.clearSelection();
  },
  fitToView: function fitToView(objectIds, model) {
    var forgeViewer = getForgeViewer();
    forgeViewer.fitToView(objectIds, model);
  },
  transformModel: function transformModel(model) {
    var forgeViewer = getForgeViewer();
    forgeViewer.transformModel(model);
  }
};

},{}],15:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".model-explorer-settings-block3d-label {\n  text-align: center;\n  background-color: #222;\n  border-radius: 5px;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sliderLabel = require("./sliderLabel.vue");

var _sliderLabel2 = _interopRequireDefault(_sliderLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debounce = require("lodash.debounce");
exports.default = {
  name: "Block3D",
  props: ["value", "label", "min", "max"],
  components: { sliderLabel: _sliderLabel2.default },
  data: function data() {
    return {
      tmp: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },

  computed: {
    computed_x: {
      get: function get() {
        return this.value.x || 0;
      },
      set: function set(newVal) {
        this.tmp.x = newVal;
        this.updatebinded();
      }
    },
    computed_y: {
      get: function get() {
        return this.value.y || 0;
      },
      set: function set(newVal) {
        this.tmp.y = newVal;
        this.updatebinded();
      }
    },
    computed_z: {
      get: function get() {
        return this.value.z || 0;
      },
      set: function set(newVal) {
        this.tmp.z = newVal;
        this.updatebinded();
      }
    }
  },
  methods: {
    update: function update() {
      this.$emit("input", this.tmp);
    }
  },
  mounted: function mounted() {
    this.updatebinded = debounce(this.update.bind(this), 500);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"model-explorer-settings-block3d-label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('table',[_c('sliderLabel',{attrs:{"label":'x',"min":_vm.min,"max":_vm.max},model:{value:(_vm.computed_x),callback:function ($$v) {_vm.computed_x=$$v},expression:"computed_x"}}),_vm._v(" "),_c('sliderLabel',{attrs:{"label":'y',"min":_vm.min,"max":_vm.max},model:{value:(_vm.computed_y),callback:function ($$v) {_vm.computed_y=$$v},expression:"computed_y"}}),_vm._v(" "),_c('sliderLabel',{attrs:{"label":'z',"min":_vm.min,"max":_vm.max},model:{value:(_vm.computed_z),callback:function ($$v) {_vm.computed_z=$$v},expression:"computed_z"}})],1)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-617549d6", __vue__options__)
  } else {
    hotAPI.reload("data-v-617549d6", __vue__options__)
  }
})()}

},{"./sliderLabel.vue":18,"lodash.debounce":1,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],16:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".model-explorer-settings-transform-container[data-v-75b7533a] {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding: 2px 8px 5px;\n  width: 275px;\n  max-height: calc(100vh - 109px);\n  overflow-y: auto;\n}\n.model-explorer-settings-scale-label[data-v-75b7533a] {\n  text-align: center;\n  background-color: #222;\n  border-radius: 5px;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _velocityAnimate = require("velocity-animate");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _ModelExplorerSettingsHeader = require("./ModelExplorerSettingsHeader.vue");

var _ModelExplorerSettingsHeader2 = _interopRequireDefault(_ModelExplorerSettingsHeader);

var _sliderLabel = require("./sliderLabel.vue");

var _sliderLabel2 = _interopRequireDefault(_sliderLabel);

var _Block3D = require("./Block3D.vue");

var _Block3D2 = _interopRequireDefault(_Block3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debounce = require("lodash.debounce");

exports.default = {
  name: "ModelExplorerSettings",
  components: { ModelExplorerSettingsHeader: _ModelExplorerSettingsHeader2.default, sliderLabel: _sliderLabel2.default, Block3D: _Block3D2.default },
  props: ["value", "item"],
  data: function data() {
    return {
      translate: {
        x: 0,
        y: 0,
        z: 0
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: 100
    };
  },


  watch: {
    item: function item(obj) {
      if (obj != null) {
        if (obj.translate) this.translate = {
          x: obj.translate.x,
          y: obj.translate.y,
          z: obj.translate.z
        };else this.translate = {
          x: 0,
          y: 0,
          z: 0
        };

        if (obj.rotate) this.rotate = {
          x: obj.rotate.x,
          y: obj.rotate.y,
          z: obj.rotate.z
        };else this.rotate = {
          x: 0,
          y: 0,
          z: 0
        };
        if (obj.scale) {
          this.scale = obj.scale * 100;
        } else {
          this.scale = 100;
        }
      }
    }
  },

  computed: {
    computedShow: {
      get: function get() {
        return this.value;
      },
      set: function set() {
        this.$emit("input", !this.value);
      }
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = 0;
    },
    enter: function enter(el, done) {
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 1, width: "100%" }, { complete: done });
      }, 100);
    },
    leave: function leave(el, done) {
      setTimeout(function () {
        (0, _velocityAnimate2.default)(el, { opacity: 0, width: "0px" }, { complete: done });
      }, 100);
    },
    onUpdate3dblock: function onUpdate3dblock(evt, obj) {
      obj.x = evt.x;
      obj.y = evt.y;
      obj.z = evt.z;
      this.onUpdateDataBinded();
    },
    onUpdateScale: function onUpdateScale(value) {
      this.scale = value;
      this.onUpdateDataBinded();
    },
    onUpdateData: function onUpdateData() {
      this.$emit("onUpdateSetting", this.item, this.translate, this.rotate, this.scale / 100.0);
    }
  },
  mounted: function mounted() {
    this.onUpdateDataBinded = debounce(this.onUpdateData.bind(this), 200);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.computedShow)?_c('div',[_c('model-explorer-settings-header',{staticStyle:{"width":"100%"},attrs:{"icon":'settings',"label":_vm.item.name},model:{value:(_vm.computedShow),callback:function ($$v) {_vm.computedShow=$$v},expression:"computedShow"}}),_vm._v(" "),_c('md-content',{staticClass:"model-explorer-settings-transform-container md-scrollbar"},[_c('div',{staticClass:"model-explorer-settings-scale-label"},[_vm._v("scale")]),_vm._v(" "),_c('sliderLabel',{ref:"scaleblock",attrs:{"label":'scale',"value":_vm.scale,"min":0,"max":300},on:{"input":_vm.onUpdateScale}}),_vm._v(" "),_c('Block3D',{ref:"translateblock",attrs:{"value":_vm.translate,"label":'translate',"min":-1000,"max":1000},on:{"input":function($event){_vm.onUpdate3dblock($event, _vm.translate)}}}),_vm._v(" "),_c('Block3D',{attrs:{"value":_vm.rotate,"label":'rotate',"min":-180,"max":180},on:{"input":function($event){_vm.onUpdate3dblock($event, _vm.rotate)}}})],1)],1):_vm._e()])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-75b7533a"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75b7533a", __vue__options__)
  } else {
    hotAPI.reload("data-v-75b7533a", __vue__options__)
  }
})()}

},{"./Block3D.vue":15,"./ModelExplorerSettingsHeader.vue":17,"./sliderLabel.vue":18,"lodash.debounce":1,"velocity-animate":2,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],17:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-settings-btn[data-v-7e37c250] {\n  background-color: #2d3d93 !important;\n  margin: 0;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "ModelExplorerSettingsHeader",
  props: ["value", "label", "icon"],
  data: function data() {
    return {};
  },

  computed: {
    computedValue: function computedValue() {
      return this.value;
    },
    computedLabel: function computedLabel() {
      if (this.label) return this.label;
      return "";
    }
  },
  methods: {
    onClickModelExplorer: function onClickModelExplorer() {
      this.$emit("input", !this.computedValue);
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-button',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.label),expression:"label"}],staticClass:"md-raised spinal-forge-model-explorer-settings-btn",on:{"click":_vm.onClickModelExplorer}},[_c('span',[_vm._v(_vm._s(_vm.label))])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-7e37c250"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e37c250", __vue__options__)
  } else {
    hotAPI.reload("data-v-7e37c250", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],18:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".sliderLabel-container {\n  width: 300px;\n}\n\n.sliderLabel-input {\n  height: 40px;\n  width: 4em;\n  text-align: center;\n  background-color: transparent;\n  color: aliceblue;\n}\n.sliderLabel-slider-cell {\n  width: 100%;\n}\n.quantity[data-v-0af47e4b] {\n  position: relative;\n}\n\ninput[type=\"number\"][data-v-0af47e4b]::-webkit-inner-spin-button,\ninput[type=\"number\"][data-v-0af47e4b]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"][data-v-0af47e4b] {\n  -moz-appearance: textfield;\n}\n\n.quantity input[data-v-0af47e4b] {\n  background-color: transparent;\n  color: aliceblue;\n  width: 45px;\n  height: 42px;\n  line-height: 1.65;\n  float: left;\n  display: block;\n  padding: 0;\n  margin: 0;\n  padding-left: 20px;\n  border: 1px solid #eee;\n}\n\n.quantity input[data-v-0af47e4b]:focus {\n  outline: 0;\n}\n\n.quantity-nav[data-v-0af47e4b] {\n  float: left;\n  position: relative;\n  height: 42px;\n}\n\n.quantity-button[data-v-0af47e4b] {\n  position: relative;\n  cursor: pointer;\n  border-left: 1px solid #eee;\n  width: 20px;\n  text-align: center;\n  color: #333;\n  font-size: 13px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif !important;\n  line-height: 1.7;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.quantity-button.quantity-up[data-v-0af47e4b] {\n  position: absolute;\n  height: 50%;\n  top: 0;\n  border-bottom: 1px solid #eee;\n}\n\n.quantity-button.quantity-down[data-v-0af47e4b] {\n  position: absolute;\n  bottom: -1px;\n  height: 50%;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueSlideBar = require("vue-slide-bar");

var _vueSlideBar2 = _interopRequireDefault(_vueSlideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "sliderLabel",
  props: ["value", "label", "min", "max"],
  data: function data() {
    return {};
  },

  components: {
    VueSlideBar: _vueSlideBar2.default
  },
  computed: {
    computedValue: {
      get: function get() {
        return parseInt(this.value);
      },
      set: function set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{staticClass:"sliderLabel-container"},[_c('td',[_c('span',[_vm._v(_vm._s(_vm.label)+":")])]),_vm._v(" "),_c('td',{staticClass:"sliderLabel-slider-cell"},[_c('VueSlideBar',{ref:"slider",staticClass:"sliderLabel-slider",staticStyle:{"padding":"28px 8px 0"},attrs:{"paddingless":true,"label-style":_vm.labelStyle,"min":_vm.min,"max":_vm.max},model:{value:(_vm.computedValue),callback:function ($$v) {_vm.computedValue=$$v},expression:"computedValue"}})],1),_vm._v(" "),_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.computedValue),expression:"computedValue"}],staticClass:"sliderLabel-input",attrs:{"type":"Number","min":_vm.min,"max":_vm.max},domProps:{"value":(_vm.computedValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.computedValue=$event.target.value}}})])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-0af47e4b"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0af47e4b", __vue__options__)
  } else {
    hotAPI.reload("data-v-0af47e4b", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":3,"vue-slide-bar":4,"vueify/lib/insert-css":5}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getScale(scale) {
  var x = isNaN(scale) ? 1.0 : scale;
  var y = isNaN(scale) ? 1.0 : scale;
  var z = isNaN(scale) ? 1.0 : scale;

  return new window.THREE.Vector3(x, y, z);
}

function getTranslation(obj) {
  var x = isNaN(obj.x) ? 0.0 : obj.x;
  var y = isNaN(obj.y) ? 0.0 : obj.y;
  var z = isNaN(obj.z) ? 0.0 : obj.z;

  return new window.THREE.Vector3(x, y, z);
}

function getRotation(obj) {
  var x = isNaN(obj.x) ? 0.0 : obj.x;
  var y = isNaN(obj.y) ? 0.0 : obj.y;
  var z = isNaN(obj.z) ? 0.0 : obj.z;
  var euler = new window.THREE.Euler(x * Math.PI / 180, y * Math.PI / 180, z * Math.PI / 180, "XYZ");
  var q = new window.THREE.Quaternion();
  q.setFromEuler(euler);
  return q;
}

function _transformModel(viewer, model, transform) {
  function _transformFragProxy(fragId) {
    var fragProxy = viewer.impl.getFragmentProxy(model, fragId);

    fragProxy.getAnimTransform();

    fragProxy.position = transform.translation;

    fragProxy.scale = transform.scale;

    //Not a standard three.js quaternion
    fragProxy.quaternion._x = transform.rotation.x;
    fragProxy.quaternion._y = transform.rotation.y;
    fragProxy.quaternion._z = transform.rotation.z;
    fragProxy.quaternion._w = transform.rotation.w;

    fragProxy.updateAnimTransform();
  }

  return new Promise(async function (resolve) {
    var fragCount = model.getFragmentList().fragments.fragId2dbId.length;

    //fragIds range from 0 to fragCount-1
    for (var fragId = 0; fragId < fragCount; ++fragId) {
      _transformFragProxy(fragId);
    }

    return resolve();
  });
}

async function transformModel(viewer, model, item) {
  if (typeof item.translate === "undefined" || typeof item.rotate === "undefined" || typeof item.scale === "undefined") return;

  var transform = {
    translation: getTranslation(item.translate.get()),
    rotation: getRotation(item.rotate.get()),
    scale: getScale(item.scale.get())
  };

  await _transformModel(viewer, model, transform);
  viewer.impl.sceneUpdated(true);
}
exports.default = transformModel;

},{}],20:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#app .md-app[data-v-56084b2e] {\n  height: 100vh;\n}\n.app-header[data-v-56084b2e] {\n  color: black;\n  background-color: #fff;\n}\n.color_black .md-button[data-v-56084b2e],\n.color_black .md-icon[data-v-56084b2e],\n.color_black div[data-v-56084b2e] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "SpinalRightSideBar",
  props: ["value"],
  data: function data() {
    return {};
  },

  methods: {
    toggleMenu: function toggleMenu() {
      this.$emit("input", !this.value);
    },
    go_toDrive: function go_toDrive() {
      window.location = "/html/drive/";
    },
    sign_out: function sign_out() {
      _vue2.default.prototype.$spinalSystem.signOut();
      window.location = "/html/drive/#!/login');";
    }
  },
  created: function created() {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('md-toolbar',{staticClass:"app-header",attrs:{"md-elevation":"0"}},[_c('div',{staticClass:"md-toolbar-row"},[_c('div',{staticClass:"md-toolbar-section-start"},[_c('img',{staticStyle:{"height":"42px","margin-top":"4px"},attrs:{"src":"dist/assets/img/SpinalBIMViewerLogo.png","alt":"SpinalBIM Vieewer"}})]),_vm._v(" "),_c('div',{staticClass:"md-toolbar-section-end"},[_c('md-button',{staticClass:"md-icon-button color_black",on:{"click":_vm.toggleMenu}},[_c('md-icon',[_vm._v("menu")])],1)],1)])]),_vm._v(" "),_c('md-list',[_c('md-list-item',{on:{"click":_vm.go_toDrive}},[_c('md-icon',[_vm._v("keyboard_return")]),_vm._v(" "),_c('span',{staticClass:"md-list-item-text"},[_vm._v("Return to SpinalBIM Drive")])],1),_vm._v(" "),_c('md-list-item',{on:{"click":_vm.sign_out}},[_c('md-icon',[_vm._v("power_settings_new")]),_vm._v(" "),_c('span',{staticClass:"md-list-item-text"},[_vm._v("Sign out")])],1)],1)],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-56084b2e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56084b2e", __vue__options__)
  } else {
    hotAPI.reload("data-v-56084b2e", __vue__options__)
  }
})()}

},{"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("spinal-core-connectorjs");

var _q = require("q");

var Q = _interopRequireWildcard(_q);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var SpinalSystem = function () {
  function SpinalSystem() {
    _classCallCheck(this, SpinalSystem);

    this.user = {
      username: "",
      password: ""
    };
    this.promiseModel = null;
    this.promiseinit = null;
    this.modelsDictionary = {};
    this.modelsPathDictionary = {};
  }

  _createClass(SpinalSystem, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.promiseinit) return this.promiseinit.promise;
      this.promiseinit = Q.defer();
      this.getUser();
      if (this.user.username) {
        window.SpinalUserManager.get_user_id("http://" + window.location.host, this.user.username, this.user.password, function (response) {
          var id = parseInt(response);
          _this.conn = window.spinalCore.connect("http://" + id + ":" + _this.user.password + "@" + window.location.host + "/");
          _this.promiseinit.resolve();
        }, function () {
          window.location = "/html/drive/";
          // this.promiseinit.reject();
        });
      } else {
        window.location = "/html/drive/";
      }
      return this.promiseinit.promise;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var path = getParameterByName("path");
      if (path) return atob(path);
      return undefined;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      if (!this.user.username) {
        var _user = window.localStorage.getItem("spinalhome_cfg");
        if (_user) {
          this.user = JSON.parse(atob(_user));
        }
      }
      return this.user;
    }
  }, {
    key: "getModel",
    value: function getModel() {
      var _this2 = this;

      if (this.promiseModel) {
        return this.promiseModel.promise;
      }
      this.promiseModel = Q.defer();
      this.init().then(function () {
        var path = getParameterByName("path");
        if (!path) {
          window.location = "/html/drive/";
        }
        path = atob(path);
        window.spinalCore.load(_this2.conn, path, function (forgefile) {
          _this2.model = forgefile;
          _this2.promiseModel.resolve(_this2.model);
          // defer.reject();
        }, function () {
          window.location = "/html/drive/";
          // defer.reject();
        });
      }, function (err) {
        console.error(err);
        window.location = "/html/drive/";
        // defer.reject();
      });
      return this.promiseModel.promise;
    }
  }, {
    key: "_waitModelRdyRec",
    value: function _waitModelRdyRec(model, promise) {
      var _this3 = this;

      if (!model._server_id || window.FileSystem._tmp_objects[model._server_id]) {
        setTimeout(function () {
          _this3._waitModelRdyRec(model, promise);
        }, 100);
      } else promise.resolve(model);
    }
  }, {
    key: "waitModelRdy",
    value: function waitModelRdy(model) {
      var defer = Q.defer();
      this._waitModelRdyRec(model, defer);

      return defer.promise;
    }
  }, {
    key: "loadModelPtr",
    value: function loadModelPtr(model) {
      var _this4 = this;

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
        model.load(function (m) {
          _this4.modelsDictionary[model.data.value].resolve(m);
        });
      } catch (error) {
        var promise = this.modelsDictionary[model.data.value];
        this.modelsDictionary[model.data.value] = undefined;
        promise.reject();
      }
      return this.modelsDictionary[model.data.value].promise;
    }
  }, {
    key: "signOut",
    value: function signOut() {
      window.localStorage.setItem("spinalhome_cfg", "");
    }
  }, {
    key: "load",
    value: function load(path) {
      var _this5 = this;

      if (this.modelsPathDictionary[path]) {
        return this.modelsPathDictionary[path].promise;
      }
      this.modelsPathDictionary[path] = Q.defer();

      window.spinalCore.load(this.conn, path, function (m) {
        _this5.modelsPathDictionary[path].resolve(m);
      }, function () {
        console.error("Failed to load model in : " + path);
        var promise = _this5.modelsPathDictionary[path];
        _this5.modelsPathDictionary[path] = undefined;
        promise.reject();
      });

      return this.modelsPathDictionary[path].promise;
    }
  }]);

  return SpinalSystem;
}();

exports.default = SpinalSystem;

},{"q":"q","spinal-core-connectorjs":"spinal-core-connectorjs"}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpinalSystem = require("./SpinalSystem");

var _SpinalSystem2 = _interopRequireDefault(_SpinalSystem);

var _ForgeViewer = require("../MainContent/ForgeViewer.js");

var _ForgeViewer2 = _interopRequireDefault(_ForgeViewer);

var _ForgeExtentionManager = require("../MainContent/ForgeExtentionManager.js");

var _ForgeExtentionManager2 = _interopRequireDefault(_ForgeExtentionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.spinal = {};

window.spinal.spinalSystem = new _SpinalSystem2.default();
window.spinal.ForgeExtentionManager = new _ForgeExtentionManager2.default();
window.spinal.ForgeViewer = new _ForgeViewer2.default();

exports.default = {
  install: function install(Vue) {
    Vue.prototype.$spinalSystem = window.spinal.spinalSystem;
    Vue.prototype.$ForgeViewer = window.spinal.ForgeViewer;
    Vue.prototype.$ForgeExtentionManager = window.spinal.ForgeExtentionManager;
  },

  spinalSystem: window.spinal.spinalSystem,
  ForgeViewer: window.spinal.ForgeViewer,
  ForgeExtentionManager: window.spinal.ForgeExtentionManager
};

},{"../MainContent/ForgeExtentionManager.js":8,"../MainContent/ForgeViewer.js":9,"./SpinalSystem":21}],23:[function(require,module,exports){

},{}],24:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".md-button[data-v-516a8c6e],\n.md-icon[data-v-516a8c6e],\ndiv[data-v-516a8c6e] {\n  color: black !important;\n}")
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinal = require("../SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "spinalHeader",
  props: ["value"],
  data: function data() {
    return {
      fullPath: "",
      path: "",
      username: ""
    };
  },

  methods: {
    toggleMenu: function toggleMenu() {
      this.$emit("input", !this.value);
    }
  },
  created: function created() {
    var vm = this;
    vm.username = _spinal2.default.spinalSystem.getUser().username;
    vm.fullPath = _spinal2.default.spinalSystem.getPath();
    var path = vm.fullPath.split("/");
    vm.path = path[path.length - 1];
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-toolbar-row"},[_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("\n    "+_vm._s(_vm.path)+"\n    "),_c('md-tooltip',[_vm._v(_vm._s(_vm.fullPath))])],1),_vm._v(" "),_c('div',{staticClass:"md-toolbar-section-end"},[_vm._v("\n    "+_vm._s(_vm.username)+"\n    "),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.toggleMenu}},[_c('md-icon',[_vm._v("menu")])],1)],1)])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-toolbar-section-start"},[_c('img',{staticStyle:{"height":"42px","margin-top":"4px"},attrs:{"src":"dist/assets/img/SpinalBIMViewerLogo.png","alt":"SpinalBIM Viewer"}})])}]
__vue__options__._scopeId = "data-v-516a8c6e"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-516a8c6e", __vue__options__)
  } else {
    hotAPI.reload("data-v-516a8c6e", __vue__options__)
  }
})()}

},{"../SpinalSystem/spinal":22,"vue":"vue","vue-hot-reload-api":3,"vueify/lib/insert-css":5}],25:[function(require,module,exports){
"use strict";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = require("./App.vue");

var _App2 = _interopRequireDefault(_App);

var _vueMaterial = require("vue-material");

var _vueMaterial2 = _interopRequireDefault(_vueMaterial);

var _spinal = require("./SpinalSystem/spinal");

var _spinal2 = _interopRequireDefault(_spinal);

var _vTooltip = require("v-tooltip");

var _vTooltip2 = _interopRequireDefault(_vTooltip);

require("./app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_spinal2.default);


_vue2.default.use(_vueMaterial2.default);
_vue2.default.use(_vTooltip2.default);

new _vue2.default({
  el: "#app",
  render: function render(h) {
    return h(_App2.default);
  }
});

},{"./App.vue":6,"./SpinalSystem/spinal":22,"./app.css":23,"v-tooltip":"v-tooltip","vue":"vue","vue-material":"vue-material"}]},{},[25])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZlbG9jaXR5LWFuaW1hdGUvdmVsb2NpdHkuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlLXNsaWRlLWJhci9kaXN0L3Z1ZS1zbGlkZS1iYXIubWluLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZWlmeS9saWIvaW5zZXJ0LWNzcy5qcyIsInNyYy9BcHAudnVlPzBiM2RmMGJiIiwic3JjL01haW5Db250ZW50L0ZvcmdlQ29udGVudC52dWU/NDE4NDk2MjEiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmpzIiwic3JjL01haW5Db250ZW50L0ZvcmdlVmlld2VyLmpzIiwic3JjL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZT9lNzQ3MmI5MCIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL0J0bkljb25MYWJlbFRyYW5zaXRpb24udnVlP2MxYzkyN2FjIiwic3JjL01haW5Db250ZW50L01vZGVsRXhwbG9yZXIvTW9kZWxFeHBsb3Jlci52dWU/MWUzMWJkMzAiLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyTGlzdC52dWU/N2ZkYzVmMzQiLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyU2VydmljZS5qcyIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL01vZGVsRXhwbG9yZXJTZXR0aW5ncy9CbG9jazNELnZ1ZT82Zjg2OTU1YSIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL01vZGVsRXhwbG9yZXJTZXR0aW5ncy9Nb2RlbEV4cGxvcmVyU2V0dGluZ3MudnVlPzcyNjYwNjQ2Iiwic3JjL01haW5Db250ZW50L01vZGVsRXhwbG9yZXIvTW9kZWxFeHBsb3JlclNldHRpbmdzL01vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlci52dWU/ODRjNDA3MGEiLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyU2V0dGluZ3Mvc2xpZGVyTGFiZWwudnVlP2M1ZTRjYjBlIiwic3JjL01haW5Db250ZW50L3RyYW5zZm9ybU1vZGVsLmpzIiwic3JjL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlPzQ5YjNjMDhlIiwic3JjL1NwaW5hbFN5c3RlbS9TcGluYWxTeXN0ZW0uanMiLCJzcmMvU3BpbmFsU3lzdGVtL3NwaW5hbC5qcyIsInNyYy9hcHAuY3NzIiwic3JjL2hlYWRlci9TcGluYWxIZWFkZXIudnVlPzExNGZjZWFmIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDelhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0RBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVdBO0FBR0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTtBQWhDQTs7OztBQTFCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOzs7OztBQVBBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0scUI7QUFDSixtQ0FBYztBQUFBOztBQUNaLFNBQUssVUFBTCxHQUFrQixFQUFsQjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLLFVBQVo7QUFDRDs7O2lDQUVZLEksRUFBTTtBQUNqQixXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckI7QUFDRDs7Ozs7O2tCQUVZLHFCOzs7Ozs7Ozs7Ozs7O0FDYmY7Ozs7Ozs7Ozs7QUFDQSxJQUFNLElBQUksUUFBUSxHQUFSLENBQVY7O0lBRU0sVztBQUNKLHlCQUFjO0FBQUE7O0FBQ1osU0FBSyxNQUFMO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQ2IsV0FBSyxPQURRO0FBRWIsYUFBTyxFQUZNO0FBR2IsY0FBUTtBQUhLLEtBQWY7QUFLQSxTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBTyxNQUFQLENBQWMscUJBQWQsQ0FBb0MsWUFBcEMsQ0FDRSxzQ0FERjtBQUdBLFNBQUssR0FBTCxHQUFXLEVBQUUsS0FBRixFQUFYO0FBQ0Q7Ozs7OEJBRVMsRyxFQUFLO0FBQUE7O0FBQ2IsVUFBSSxPQUFPLElBQUksSUFBZjtBQUNBLFVBQ0UsSUFBSSxJQUFKLENBQVMsT0FBVCxDQUFpQixTQUFqQixNQUFnQyxDQUFoQyxJQUNBLElBQUksSUFBSixDQUFTLE9BQVQsQ0FBaUIsVUFBakIsTUFBaUMsQ0FGbkMsRUFHRTtBQUNBLGVBQU8sT0FBTyxRQUFQLENBQWdCLE1BQWhCLEdBQXlCLElBQUksSUFBcEM7QUFDRDs7QUFFRCxVQUFJLE1BQUosR0FBYSxJQUFiO0FBQ0EsVUFBTSxPQUFPLEtBQUssTUFBbEI7QUFDQSxhQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsWUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLFFBQVM7QUFDakMsZ0JBQUssTUFBTCxDQUFZLG1CQUFaLENBQ0UsT0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLHFCQUQxQixFQUVFLGlCQUZGO0FBSUEsY0FBSSxLQUFKLEdBQVksTUFBTSxLQUFsQjtBQUNBLGlCQUFPLFFBQVEsTUFBTSxLQUFkLENBQVA7QUFDRCxTQVBEO0FBUUEsY0FBSyxNQUFMLENBQVksZ0JBQVosQ0FDRSxPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBd0IscUJBRDFCLEVBRUUsaUJBRkY7O0FBS0EsY0FBSyxNQUFMLENBQVksU0FBWixDQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsWUFBTSxDQUFFLENBSFYsRUFJRSxVQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFVBQTFCLEVBQXNDLFVBQXRDLEVBQXFEO0FBQ25ELGdCQUFLLE1BQUwsQ0FBWSxtQkFBWixDQUNFLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixxQkFEMUIsRUFFRSxpQkFGRjs7QUFLQSxpQkFBTyxPQUFPO0FBQ1osdUJBQVcsU0FEQztBQUVaLDBCQUFjLFlBRkY7QUFHWix3QkFBWSxVQUhBO0FBSVosd0JBQVk7QUFKQSxXQUFQLENBQVA7QUFNRCxTQWhCSDtBQWtCRCxPQWhDTSxFQWlDSixJQWpDSSxDQWlDQyxZQUFNO0FBQ1YsZUFBTyxNQUFLLGNBQUwsQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsQ0FBUDtBQUNELE9BbkNJLEVBb0NKLElBcENJLENBb0NDO0FBQUEsZUFBTSxNQUFLLHNCQUFMLEVBQU47QUFBQSxPQXBDRCxDQUFQO0FBcUNEOzs7Z0NBQ1csRyxFQUFLO0FBQUE7O0FBQ2YsYUFBTyxJQUFJLE9BQUosQ0FBWSxtQkFBVztBQUM1QixZQUFNLFFBQVEsSUFBSSxLQUFsQjtBQUNBLFlBQUksTUFBSixHQUFhLEtBQWI7QUFDQSxZQUFJLEtBQUosR0FBWSxJQUFaO0FBQ0EsZUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixXQUFqQixDQUE2QixLQUE3QjtBQUNBLGVBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsWUFBakIsQ0FBOEIsSUFBOUI7QUFDQTtBQUNELE9BUE0sRUFPSixJQVBJLENBT0M7QUFBQSxlQUFNLE9BQUssc0JBQUwsRUFBTjtBQUFBLE9BUEQsQ0FBUDtBQVFEOzs7cUNBQ2dCLEssRUFBTztBQUFBOztBQUN0QixhQUFPLElBQUksT0FBSixDQUFZLG1CQUFXO0FBQzVCLGVBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxZQUFJLGdCQUFnQixPQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixJQUE3QixDQUFwQjtBQUNBLHNCQUFjLFlBQWQsR0FBNkIsS0FBN0I7QUFDQSxjQUFNLGFBQU4sQ0FBb0Isd0JBQWdCO0FBQ2xDLGlCQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLFFBQTNCLENBQW9DLFlBQXBDO0FBQ0E7QUFDRCxTQUhEO0FBSUQsT0FSTSxDQUFQO0FBU0Q7OztvQ0FDZSxLLEVBQU87QUFDckIsYUFBTyxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLEtBQWpDLENBQVA7QUFDRDs7OzhCQUNTLFMsRUFBVyxLLEVBQU87QUFDMUIsYUFBTyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLEtBQWpDLENBQVA7QUFDRDs7OzZDQUN3QjtBQUN2QixVQUFJLFFBQVEsS0FBWjtBQUNBLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsS0FBSyxJQUFMLENBQVUsTUFBdEMsRUFBOEMsT0FBOUMsRUFBdUQ7QUFDckQsWUFBSSxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLEtBQWpCLEtBQTJCLEtBQUssTUFBTCxDQUFZLEtBQTNDLEVBQWtELFFBQVEsSUFBUjtBQUNuRDtBQUNELFVBQUksVUFBVSxLQUFkLEVBQXFCO0FBQ25CLGFBQUssSUFBSSxTQUFRLENBQWpCLEVBQW9CLFNBQVEsS0FBSyxJQUFMLENBQVUsTUFBdEMsRUFBOEMsUUFBOUMsRUFBdUQ7QUFDckQsY0FBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWlCLE1BQWpCLEtBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLGlCQUFLLGdCQUFMLENBQXNCLEtBQUssSUFBTCxDQUFVLE1BQVYsRUFBaUIsS0FBdkM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7OzBDQUNxQixlLEVBQWlCO0FBQ3JDLGNBQVEsS0FBUixDQUFjLHlDQUF5QyxlQUF2RDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUksYUFBYSxPQUFPLE1BQVAsQ0FBYyxxQkFBZCxDQUFvQyxhQUFwQyxFQUFqQjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxXQUFXLE1BQS9CLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLGFBQUssTUFBTCxDQUFZLGFBQVosQ0FBMEIsV0FBVyxDQUFYLENBQTFCLEVBQXlDLEtBQUssT0FBOUM7QUFDRDtBQUNGOzs7aUNBRVksRyxFQUFLO0FBQUE7O0FBQ2hCLGFBQU8sTUFBUCxDQUFjLFlBQWQsQ0FDRyxRQURILEdBRUcsSUFGSCxDQUVRLHFCQUFhO0FBQ2pCLGVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGVBQUssSUFBTCxHQUFZLE9BQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsR0FBekIsRUFBWjtBQUNBLFlBQU0sYUFBYSxFQUFuQjtBQUNBLFlBQUksT0FBSyxJQUFMLENBQVUsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFJLE9BQU8sT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQXhCOztBQUVBLGVBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFLLElBQUwsQ0FBVSxNQUE5QixFQUFzQyxHQUF0QyxFQUEyQztBQUN6QyxnQkFBSSxPQUFLLElBQUwsQ0FBVSxDQUFWLEVBQWEsTUFBYixLQUF3QixJQUE1QixFQUFrQyxPQUFLLElBQUwsQ0FBVSxDQUFWLEVBQWEsTUFBYixHQUFzQixLQUF0QixDQUFsQyxLQUNLO0FBQ0gseUJBQVcsSUFBWCxDQUFnQixPQUFLLElBQUwsQ0FBVSxDQUFWLENBQWhCO0FBQ0Q7QUFDRjtBQUNELGNBQUksV0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCLFdBQVcsSUFBWCxDQUFnQixPQUFLLElBQUwsQ0FBVSxDQUFWLENBQWhCO0FBQzdCLGVBQUssSUFBSSxDQUFULEVBQVksSUFBSSxPQUFLLElBQUwsQ0FBVSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxnQkFBSSxXQUFXLElBQVgsQ0FBZ0IsT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQTdCLENBQUosRUFBd0M7QUFDdEMscUJBQU8sT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQXBCO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsY0FBSSxLQUFLLE9BQUwsQ0FBYSxTQUFiLE1BQTRCLENBQTVCLElBQWlDLEtBQUssT0FBTCxDQUFhLFVBQWIsTUFBNkIsQ0FBbEUsRUFBcUU7QUFDbkUsbUJBQU8sT0FBTyxRQUFQLENBQWdCLE1BQWhCLEdBQXlCLElBQWhDO0FBQ0Q7QUFDRjtBQUNELGVBQUssTUFBTCxHQUFjLElBQUksT0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWdDLFdBQXBDLENBQ1osR0FEWSxFQUVaLE9BQUssTUFGTyxDQUFkLENBeEJpQixDQTJCZDtBQUNILGVBQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixXQUF4QixDQUFvQyxPQUFLLE9BQXpDLEVBQWtELGtCQUFZO0FBQzVELGlCQUFLLE1BQUwsQ0FBWSxVQUFaO0FBQ0EsaUJBQUssaUJBQUw7O0FBRUEsZUFBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxXQUFXLE1BQXZDLEVBQStDLE9BQS9DLEVBQXdEO0FBQ3RELGdCQUFNLFVBQVUsV0FBVyxLQUFYLENBQWhCO0FBQ0E7QUFDQSxrQkFBTSxPQUFLLFNBQUwsQ0FBZSxPQUFmLENBQU47QUFDRDtBQUNELGlCQUFLLEdBQUwsQ0FBUyxPQUFUO0FBQ0QsU0FWRDtBQVdELE9BekNILEVBMENHLEtBMUNILENBMENTLGVBQU87QUFDWixnQkFBUSxLQUFSLENBQWMsR0FBZDtBQUNELE9BNUNIO0FBNkNEOzs7cUNBRWdCLEksRUFBTTtBQUNyQixXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsTUFBckQsRUFBNkQsT0FBN0QsRUFBc0U7QUFDcEUsWUFBTSxVQUFVLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsS0FBekIsQ0FBaEI7QUFDQSxZQUFJLFFBQVEsSUFBUixDQUFhLEdBQWIsT0FBdUIsS0FBSyxJQUFoQyxFQUFzQyxPQUFPLE9BQVA7QUFDdkM7QUFDRCxhQUFPLElBQVA7QUFDRDs7OytCQUVVLEksRUFBTTtBQUNmLFVBQUksUUFBUSxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQVo7QUFDQSxVQUFJLFVBQVUsSUFBZCxFQUFvQixPQUFPLEtBQVA7QUFDcEIsVUFBSSxTQUFTLEtBQWI7O0FBRUEsV0FBSyxJQUFNLEdBQVgsSUFBa0IsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSSxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsS0FBNEIsUUFBUSxPQUF4QyxFQUFpRDtBQUMvQyxjQUFJLFFBQU8sS0FBSyxHQUFMLENBQVAsTUFBcUIsUUFBekIsRUFBbUM7QUFDakMsZ0JBQUksT0FBTyxNQUFNLEdBQU4sQ0FBUCxLQUFzQixXQUExQixFQUF1QztBQUNyQyxvQkFBTSxRQUFOLHFCQUNHLEdBREgsRUFDUyxLQUFLLEdBQUwsQ0FEVDtBQUdBLHVCQUFTLElBQVQ7QUFDRCxhQUxELE1BTUUsS0FBSyxJQUFNLFFBQVgsSUFBdUIsS0FBSyxHQUFMLENBQXZCLEVBQWtDO0FBQ2hDLGtCQUFJLEtBQUssR0FBTCxFQUFVLGNBQVYsQ0FBeUIsUUFBekIsQ0FBSixFQUF3QztBQUN0QyxvQkFBSSxNQUFNLEdBQU4sRUFBVyxRQUFYLEVBQXFCLEdBQXJCLENBQXlCLEtBQUssR0FBTCxFQUFVLFFBQVYsQ0FBekIsQ0FBSixFQUNFLFNBQVMsSUFBVDtBQUNIO0FBQ0Y7QUFDSixXQWJELE1BYU87QUFDTCxnQkFBSSxPQUFPLE1BQU0sR0FBTixDQUFQLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDLG9CQUFNLFFBQU4scUJBQ0csR0FESCxFQUNTLEtBQUssR0FBTCxDQURUO0FBR0EsdUJBQVMsSUFBVDtBQUNELGFBTEQsTUFLTztBQUNMLGtCQUFJLE1BQU0sR0FBTixFQUFXLEdBQVgsQ0FBZSxLQUFLLEdBQUwsQ0FBZixDQUFKLEVBQStCLFNBQVMsSUFBVDtBQUNoQztBQUNGO0FBQ0Y7QUFDRjtBQUNELGFBQU8sTUFBUDtBQUNEOzs7bUNBRWMsSSxFQUFxQjtBQUFBLFVBQWYsS0FBZSx1RUFBUCxLQUFPOztBQUNsQyxVQUFJLFFBQVEsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUFaOztBQUVBLFVBQUssVUFBVSxJQUFWLElBQWtCLElBQW5CLElBQTRCLEtBQUssVUFBTCxDQUFnQixJQUFoQixNQUEwQixJQUExRCxFQUNFLE9BQU8sOEJBQWUsS0FBSyxNQUFwQixFQUE0QixLQUFLLEtBQWpDLEVBQXdDLEtBQXhDLENBQVA7QUFDRixhQUFPLFFBQVEsT0FBUixFQUFQO0FBQ0Q7Ozs7O0FBRUg7O2tCQUVlLFc7Ozs7Ozs7Ozs7QUNwTmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7O0FBWEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dCQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUE5QkE7Ozs7QUFsQkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUE1QkE7QUE4QkE7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQTlEQTs7OztBQTlCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2REE7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBTkE7Ozs7QUFoRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxTQUFTLGNBQVQsR0FBMEI7QUFDeEIsU0FBTyxPQUFPLE1BQVAsQ0FBYyxXQUFyQjtBQUNEOztBQUVELElBQUksVUFBVSxJQUFkO2tCQUNlO0FBQ2IsY0FEYSwwQkFDRTtBQUNiLFFBQU0sY0FBYyxnQkFBcEI7QUFDQSxXQUFPLFlBQVksR0FBWixDQUFnQixPQUFoQixDQUF3QixJQUF4QixDQUE2QixZQUFNO0FBQ3hDLFVBQU0sT0FBTyxFQUFiO0FBQ0EsVUFBTSxPQUFPLFlBQVksSUFBekI7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBakMsRUFBeUMsT0FBekMsRUFBa0Q7QUFDaEQsWUFBTSxVQUFVLEtBQUssS0FBTCxDQUFoQjtBQUNBLGFBQUssSUFBTCxDQUFVLE9BQVY7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNELEtBUk0sQ0FBUDtBQVNELEdBWlk7QUFjYixZQWRhLHNCQWNGLElBZEUsRUFjSTtBQUNmLFFBQU0sY0FBYyxnQkFBcEI7QUFDQSxRQUFJLGFBQUo7QUFDQSxRQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsZ0JBQVUsS0FBVjtBQUNBLFVBQUksS0FBSyxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLGVBQU8sWUFBWSxXQUFaLENBQXdCLElBQXhCLENBQTZCLFdBQTdCLEVBQTBDLElBQTFDLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLFlBQVksU0FBWixDQUFzQixJQUF0QixDQUEyQixXQUEzQixFQUF3QyxJQUF4QyxDQUFQO0FBQ0Q7QUFDRCxXQUFLLElBQUwsQ0FBVSxZQUFNO0FBQ2Qsb0JBQVksVUFBWixDQUF1QixJQUF2QixDQUE0QixXQUE1QixFQUF5QyxJQUF6QztBQUNBLGtCQUFVLElBQVY7QUFDRCxPQUhEO0FBSUQ7QUFDRixHQTdCWTtBQStCYixnQkEvQmEsMEJBK0JFLElBL0JGLEVBK0JRO0FBQ25CLFFBQU0sY0FBYyxnQkFBcEI7QUFDQSxXQUFPLFlBQVksTUFBWixDQUFtQixLQUFuQixLQUE2QixLQUFLLEtBQXpDO0FBQ0QsR0FsQ1k7QUFtQ2IsaUJBbkNhLDJCQW1DRyxJQW5DSCxFQW1DUztBQUNwQixRQUFJLEtBQUssY0FBTCxDQUFvQixJQUFwQixNQUE4QixJQUFsQyxFQUF3QztBQUN0QyxVQUFNLGNBQWMsZ0JBQXBCO0FBQ0Esa0JBQVksZUFBWixDQUE0QixJQUE1QixDQUFpQyxXQUFqQyxFQUE4QyxLQUFLLEtBQW5EO0FBQ0Q7QUFDRixHQXhDWTtBQTBDYixhQTFDYSx1QkEwQ0QsSUExQ0MsRUEwQ0s7QUFDaEIsUUFBSSxRQUFRLEtBQUssTUFBTCxLQUFnQixJQUF4QixJQUFnQyxLQUFLLEtBQXpDLEVBQWdEO0FBQzlDLFdBQUssY0FBTDtBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsWUFBcEIsQ0FDRSxDQUFDLENBQUQsQ0FERixFQUVFLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixhQUF4QixDQUFzQyxZQUZ4QztBQUlBLFdBQUssU0FBTCxDQUFlLENBQUMsQ0FBRCxDQUFmLEVBQW9CLEtBQUssS0FBekI7QUFDRDtBQUNGLEdBbkRZO0FBb0RiLGdCQXBEYSw0QkFvREk7QUFDZixRQUFNLGNBQWMsZ0JBQXBCO0FBQ0EsZ0JBQVksTUFBWixDQUFtQixjQUFuQjtBQUNELEdBdkRZO0FBd0RiLFdBeERhLHFCQXdESCxTQXhERyxFQXdEUSxLQXhEUixFQXdEZTtBQUMxQixRQUFNLGNBQWMsZ0JBQXBCO0FBQ0EsZ0JBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxLQUFqQztBQUNELEdBM0RZO0FBNkRiLGdCQTdEYSwwQkE2REUsS0E3REYsRUE2RFM7QUFDcEIsUUFBTSxjQUFjLGdCQUFwQjtBQUNBLGdCQUFZLGNBQVosQ0FBMkIsS0FBM0I7QUFDRDtBQWhFWSxDOzs7Ozs7Ozs7Ozs7QUNvQmY7Ozs7OztBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQW5CQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBakRBOzs7O0FBM0JBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFYQTtBQWFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUF0Q0E7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFqQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBNUdBOzs7O0FBM0NBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWZBOzs7O0FBVkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVRBOzs7O0FBMUJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUksSUFBSSxNQUFNLEtBQU4sSUFBZSxHQUFmLEdBQXFCLEtBQTdCO0FBQ0EsTUFBSSxJQUFJLE1BQU0sS0FBTixJQUFlLEdBQWYsR0FBcUIsS0FBN0I7QUFDQSxNQUFJLElBQUksTUFBTSxLQUFOLElBQWUsR0FBZixHQUFxQixLQUE3Qjs7QUFFQSxTQUFPLElBQUksT0FBTyxLQUFQLENBQWEsT0FBakIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsQ0FBUDtBQUNEOztBQUVELFNBQVMsY0FBVCxDQUF3QixHQUF4QixFQUE2QjtBQUMzQixNQUFJLElBQUksTUFBTSxJQUFJLENBQVYsSUFBZSxHQUFmLEdBQXFCLElBQUksQ0FBakM7QUFDQSxNQUFJLElBQUksTUFBTSxJQUFJLENBQVYsSUFBZSxHQUFmLEdBQXFCLElBQUksQ0FBakM7QUFDQSxNQUFJLElBQUksTUFBTSxJQUFJLENBQVYsSUFBZSxHQUFmLEdBQXFCLElBQUksQ0FBakM7O0FBRUEsU0FBTyxJQUFJLE9BQU8sS0FBUCxDQUFhLE9BQWpCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLENBQVA7QUFDRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEI7QUFDeEIsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDO0FBQ0EsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDO0FBQ0EsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDO0FBQ0EsTUFBSSxRQUFRLElBQUksT0FBTyxLQUFQLENBQWEsS0FBakIsQ0FDVCxJQUFJLEtBQUssRUFBVixHQUFnQixHQUROLEVBRVQsSUFBSSxLQUFLLEVBQVYsR0FBZ0IsR0FGTixFQUdULElBQUksS0FBSyxFQUFWLEdBQWdCLEdBSE4sRUFJVixLQUpVLENBQVo7QUFNQSxNQUFJLElBQUksSUFBSSxPQUFPLEtBQVAsQ0FBYSxVQUFqQixFQUFSO0FBQ0EsSUFBRSxZQUFGLENBQWUsS0FBZjtBQUNBLFNBQU8sQ0FBUDtBQUNEOztBQUVELFNBQVMsZUFBVCxDQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxTQUF4QyxFQUFtRDtBQUNqRCxXQUFTLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDO0FBQ25DLFFBQUksWUFBWSxPQUFPLElBQVAsQ0FBWSxnQkFBWixDQUE2QixLQUE3QixFQUFvQyxNQUFwQyxDQUFoQjs7QUFFQSxjQUFVLGdCQUFWOztBQUVBLGNBQVUsUUFBVixHQUFxQixVQUFVLFdBQS9COztBQUVBLGNBQVUsS0FBVixHQUFrQixVQUFVLEtBQTVCOztBQUVBO0FBQ0EsY0FBVSxVQUFWLENBQXFCLEVBQXJCLEdBQTBCLFVBQVUsUUFBVixDQUFtQixDQUE3QztBQUNBLGNBQVUsVUFBVixDQUFxQixFQUFyQixHQUEwQixVQUFVLFFBQVYsQ0FBbUIsQ0FBN0M7QUFDQSxjQUFVLFVBQVYsQ0FBcUIsRUFBckIsR0FBMEIsVUFBVSxRQUFWLENBQW1CLENBQTdDO0FBQ0EsY0FBVSxVQUFWLENBQXFCLEVBQXJCLEdBQTBCLFVBQVUsUUFBVixDQUFtQixDQUE3Qzs7QUFFQSxjQUFVLG1CQUFWO0FBQ0Q7O0FBRUQsU0FBTyxJQUFJLE9BQUosQ0FBWSxnQkFBTSxPQUFOLEVBQWlCO0FBQ2xDLFFBQUksWUFBWSxNQUFNLGVBQU4sR0FBd0IsU0FBeEIsQ0FBa0MsV0FBbEMsQ0FBOEMsTUFBOUQ7O0FBRUE7QUFDQSxTQUFLLElBQUksU0FBUyxDQUFsQixFQUFxQixTQUFTLFNBQTlCLEVBQXlDLEVBQUUsTUFBM0MsRUFBbUQ7QUFDakQsMEJBQW9CLE1BQXBCO0FBQ0Q7O0FBRUQsV0FBTyxTQUFQO0FBQ0QsR0FUTSxDQUFQO0FBVUQ7O0FBRUQsZUFBZSxjQUFmLENBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDLElBQTdDLEVBQW1EO0FBQ2pELE1BQ0UsT0FBTyxLQUFLLFNBQVosS0FBMEIsV0FBMUIsSUFDQSxPQUFPLEtBQUssTUFBWixLQUF1QixXQUR2QixJQUVBLE9BQU8sS0FBSyxLQUFaLEtBQXNCLFdBSHhCLEVBS0U7O0FBRUYsTUFBSSxZQUFZO0FBQ2QsaUJBQWEsZUFBZSxLQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQWYsQ0FEQztBQUVkLGNBQVUsWUFBWSxLQUFLLE1BQUwsQ0FBWSxHQUFaLEVBQVosQ0FGSTtBQUdkLFdBQU8sU0FBUyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQVQ7QUFITyxHQUFoQjs7QUFNQSxRQUFNLGdCQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQixTQUEvQixDQUFOO0FBQ0EsU0FBTyxJQUFQLENBQVksWUFBWixDQUF5QixJQUF6QjtBQUNEO2tCQUNjLGM7Ozs7Ozs7Ozs7OztBQzdDZjs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFsQkE7Ozs7QUFwQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7SUFBWSxDOzs7Ozs7QUFFWixTQUFTLGtCQUFULENBQTRCLElBQTVCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ3JDLE1BQUksQ0FBQyxHQUFMLEVBQVUsTUFBTSxPQUFPLFFBQVAsQ0FBZ0IsSUFBdEI7QUFDVixTQUFPLEtBQUssT0FBTCxDQUFhLFFBQWIsRUFBdUIsTUFBdkIsQ0FBUDtBQUNBLE1BQUksUUFBUSxJQUFJLE1BQUosQ0FBVyxTQUFTLElBQVQsR0FBZ0IsbUJBQTNCLENBQVo7QUFBQSxNQUNFLFVBQVUsTUFBTSxJQUFOLENBQVcsR0FBWCxDQURaO0FBRUEsTUFBSSxDQUFDLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxNQUFJLENBQUMsUUFBUSxDQUFSLENBQUwsRUFBaUIsT0FBTyxFQUFQO0FBQ2pCLFNBQU8sbUJBQW1CLFFBQVEsQ0FBUixFQUFXLE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBbkIsQ0FBUDtBQUNEOztJQUVLLFk7QUFDSiwwQkFBYztBQUFBOztBQUNaLFNBQUssSUFBTCxHQUFZO0FBQ1YsZ0JBQVUsRUFEQTtBQUVWLGdCQUFVO0FBRkEsS0FBWjtBQUlBLFNBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNBLFNBQUssV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUssZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLLG9CQUFMLEdBQTRCLEVBQTVCO0FBQ0Q7Ozs7MkJBRU07QUFBQTs7QUFDTCxVQUFJLEtBQUssV0FBVCxFQUFzQixPQUFPLEtBQUssV0FBTCxDQUFpQixPQUF4QjtBQUN0QixXQUFLLFdBQUwsR0FBbUIsRUFBRSxLQUFGLEVBQW5CO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsVUFBSSxLQUFLLElBQUwsQ0FBVSxRQUFkLEVBQXdCO0FBQ3RCLGVBQU8saUJBQVAsQ0FBeUIsV0FBekIsQ0FDRSxZQUFZLE9BQU8sUUFBUCxDQUFnQixJQUQ5QixFQUVFLEtBQUssSUFBTCxDQUFVLFFBRlosRUFHRSxLQUFLLElBQUwsQ0FBVSxRQUhaLEVBSUUsb0JBQVk7QUFDVixjQUFJLEtBQUssU0FBUyxRQUFULENBQVQ7QUFDQSxnQkFBSyxJQUFMLEdBQVksT0FBTyxVQUFQLENBQWtCLE9BQWxCLGFBQ0EsRUFEQSxTQUNNLE1BQUssSUFBTCxDQUFVLFFBRGhCLFNBQzRCLE9BQU8sUUFBUCxDQUFnQixJQUQ1QyxPQUFaO0FBR0EsZ0JBQUssV0FBTCxDQUFpQixPQUFqQjtBQUNELFNBVkgsRUFXRSxZQUFNO0FBQ0osaUJBQU8sUUFBUCxHQUFrQixjQUFsQjtBQUNBO0FBQ0QsU0FkSDtBQWdCRCxPQWpCRCxNQWlCTztBQUNMLGVBQU8sUUFBUCxHQUFrQixjQUFsQjtBQUNEO0FBQ0QsYUFBTyxLQUFLLFdBQUwsQ0FBaUIsT0FBeEI7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSSxPQUFPLG1CQUFtQixNQUFuQixDQUFYO0FBQ0EsVUFBSSxJQUFKLEVBQVUsT0FBTyxLQUFLLElBQUwsQ0FBUDtBQUNWLGFBQU8sU0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJLENBQUMsS0FBSyxJQUFMLENBQVUsUUFBZixFQUF5QjtBQUN2QixZQUFJLFFBQVEsT0FBTyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLGdCQUE1QixDQUFaO0FBQ0EsWUFBSSxLQUFKLEVBQVc7QUFDVCxlQUFLLElBQUwsR0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBWCxDQUFaO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBSyxJQUFaO0FBQ0Q7OzsrQkFFVTtBQUFBOztBQUNULFVBQUksS0FBSyxZQUFULEVBQXVCO0FBQ3JCLGVBQU8sS0FBSyxZQUFMLENBQWtCLE9BQXpCO0FBQ0Q7QUFDRCxXQUFLLFlBQUwsR0FBb0IsRUFBRSxLQUFGLEVBQXBCO0FBQ0EsV0FBSyxJQUFMLEdBQVksSUFBWixDQUNFLFlBQU07QUFDSixZQUFJLE9BQU8sbUJBQW1CLE1BQW5CLENBQVg7QUFDQSxZQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1QsaUJBQU8sUUFBUCxHQUFrQixjQUFsQjtBQUNEO0FBQ0QsZUFBTyxLQUFLLElBQUwsQ0FBUDtBQUNBLGVBQU8sVUFBUCxDQUFrQixJQUFsQixDQUNFLE9BQUssSUFEUCxFQUVFLElBRkYsRUFHRSxxQkFBYTtBQUNYLGlCQUFLLEtBQUwsR0FBYSxTQUFiO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixPQUFLLEtBQS9CO0FBQ0E7QUFDRCxTQVBILEVBUUUsWUFBTTtBQUNKLGlCQUFPLFFBQVAsR0FBa0IsY0FBbEI7QUFDQTtBQUNELFNBWEg7QUFhRCxPQXBCSCxFQXFCRSxlQUFPO0FBQ0wsZ0JBQVEsS0FBUixDQUFjLEdBQWQ7QUFDQSxlQUFPLFFBQVAsR0FBa0IsY0FBbEI7QUFDQTtBQUNELE9BekJIO0FBMkJBLGFBQU8sS0FBSyxZQUFMLENBQWtCLE9BQXpCO0FBQ0Q7OztxQ0FDZ0IsSyxFQUFPLE8sRUFBUztBQUFBOztBQUMvQixVQUFJLENBQUMsTUFBTSxVQUFQLElBQXFCLE9BQU8sVUFBUCxDQUFrQixZQUFsQixDQUErQixNQUFNLFVBQXJDLENBQXpCLEVBQTJFO0FBQ3pFLG1CQUFXLFlBQU07QUFDZixpQkFBSyxnQkFBTCxDQUFzQixLQUF0QixFQUE2QixPQUE3QjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0QsT0FKRCxNQUlPLFFBQVEsT0FBUixDQUFnQixLQUFoQjtBQUNSOzs7aUNBQ1ksSyxFQUFPO0FBQ2xCLFVBQUksUUFBUSxFQUFFLEtBQUYsRUFBWjtBQUNBLFdBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkIsS0FBN0I7O0FBRUEsYUFBTyxNQUFNLE9BQWI7QUFDRDs7O2lDQUNZLEssRUFBTztBQUFBOztBQUNsQixVQUFJLGlCQUFpQixPQUFPLElBQTVCLEVBQWtDO0FBQ2hDLGVBQU8sS0FBSyxZQUFMLENBQWtCLE1BQU0sSUFBeEIsQ0FBUDtBQUNEO0FBQ0QsVUFBSSxFQUFFLGlCQUFpQixPQUFPLEdBQTFCLENBQUosRUFBb0M7QUFDbEMsY0FBTSxJQUFJLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFJLENBQUMsTUFBTSxJQUFOLENBQVcsS0FBWixJQUFxQixNQUFNLElBQU4sQ0FBVyxLQUFwQyxFQUEyQztBQUN6QyxlQUFPLEVBQUUsT0FBRixDQUFVLE1BQU0sSUFBTixDQUFXLEtBQXJCLENBQVA7QUFDRCxPQUZELE1BRU8sSUFBSSxDQUFDLE1BQU0sSUFBTixDQUFXLEtBQWhCLEVBQXVCO0FBQzVCLGNBQU0sSUFBSSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNEOztBQUVELFVBQUksS0FBSyxnQkFBTCxDQUFzQixNQUFNLElBQU4sQ0FBVyxLQUFqQyxDQUFKLEVBQTZDO0FBQzNDLGVBQU8sS0FBSyxnQkFBTCxDQUFzQixNQUFNLElBQU4sQ0FBVyxLQUFqQyxFQUF3QyxPQUEvQztBQUNEO0FBQ0QsV0FBSyxnQkFBTCxDQUFzQixNQUFNLElBQU4sQ0FBVyxLQUFqQyxJQUEwQyxFQUFFLEtBQUYsRUFBMUM7QUFDQSxVQUFJO0FBQ0YsY0FBTSxJQUFOLENBQVcsYUFBSztBQUNkLGlCQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLEVBQXdDLE9BQXhDLENBQWdELENBQWhEO0FBQ0QsU0FGRDtBQUdELE9BSkQsQ0FJRSxPQUFPLEtBQVAsRUFBYztBQUNkLFlBQUksVUFBVSxLQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLENBQWQ7QUFDQSxhQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLElBQTBDLFNBQTFDO0FBQ0EsZ0JBQVEsTUFBUjtBQUNEO0FBQ0QsYUFBTyxLQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLEVBQXdDLE9BQS9DO0FBQ0Q7Ozs4QkFDUztBQUNSLGFBQU8sWUFBUCxDQUFvQixPQUFwQixDQUE0QixnQkFBNUIsRUFBOEMsRUFBOUM7QUFDRDs7O3lCQUNJLEksRUFBTTtBQUFBOztBQUNULFVBQUksS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUFKLEVBQXFDO0FBQ25DLGVBQU8sS0FBSyxvQkFBTCxDQUEwQixJQUExQixFQUFnQyxPQUF2QztBQUNEO0FBQ0QsV0FBSyxvQkFBTCxDQUEwQixJQUExQixJQUFrQyxFQUFFLEtBQUYsRUFBbEM7O0FBRUEsYUFBTyxVQUFQLENBQWtCLElBQWxCLENBQ0UsS0FBSyxJQURQLEVBRUUsSUFGRixFQUdFLGFBQUs7QUFDSCxlQUFLLG9CQUFMLENBQTBCLElBQTFCLEVBQWdDLE9BQWhDLENBQXdDLENBQXhDO0FBQ0QsT0FMSCxFQU1FLFlBQU07QUFDSixnQkFBUSxLQUFSLENBQWMsK0JBQStCLElBQTdDO0FBQ0EsWUFBSSxVQUFVLE9BQUssb0JBQUwsQ0FBMEIsSUFBMUIsQ0FBZDtBQUNBLGVBQUssb0JBQUwsQ0FBMEIsSUFBMUIsSUFBa0MsU0FBbEM7QUFDQSxnQkFBUSxNQUFSO0FBQ0QsT0FYSDs7QUFjQSxhQUFPLEtBQUssb0JBQUwsQ0FBMEIsSUFBMUIsRUFBZ0MsT0FBdkM7QUFDRDs7Ozs7O2tCQUdZLFk7Ozs7Ozs7OztBQzFLZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE9BQU8sTUFBUCxHQUFnQixFQUFoQjs7QUFFQSxPQUFPLE1BQVAsQ0FBYyxZQUFkLEdBQTZCLElBQUksc0JBQUosRUFBN0I7QUFDQSxPQUFPLE1BQVAsQ0FBYyxxQkFBZCxHQUFzQyxJQUFJLCtCQUFKLEVBQXRDO0FBQ0EsT0FBTyxNQUFQLENBQWMsV0FBZCxHQUE0QixJQUFJLHFCQUFKLEVBQTVCOztrQkFFZTtBQUNiLFNBRGEsbUJBQ0wsR0FESyxFQUNBO0FBQ1gsUUFBSSxTQUFKLENBQWMsYUFBZCxHQUE4QixPQUFPLE1BQVAsQ0FBYyxZQUE1QztBQUNBLFFBQUksU0FBSixDQUFjLFlBQWQsR0FBNkIsT0FBTyxNQUFQLENBQWMsV0FBM0M7QUFDQSxRQUFJLFNBQUosQ0FBYyxzQkFBZCxHQUF1QyxPQUFPLE1BQVAsQ0FBYyxxQkFBckQ7QUFDRCxHQUxZOztBQU1iLGdCQUFjLE9BQU8sTUFBUCxDQUFjLFlBTmY7QUFPYixlQUFhLE9BQU8sTUFBUCxDQUFjLFdBUGQ7QUFRYix5QkFBdUIsT0FBTyxNQUFQLENBQWM7QUFSeEIsQzs7O0FDVmY7Ozs7Ozs7Ozs7O0FDc0JBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTs7OztBQXhCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQURBLGNBQUksR0FBSixDQUFRLGdCQUFSOzs7QUFHQSxjQUFJLEdBQUosQ0FBUSxxQkFBUjtBQUNBLGNBQUksR0FBSixDQUFRLGtCQUFSOztBQUVBLElBQUksYUFBSixDQUFRO0FBQ04sTUFBSSxNQURFO0FBRU4sVUFBUTtBQUFBLFdBQUssRUFBRSxhQUFGLENBQUw7QUFBQTtBQUZGLENBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKiEgVmVsb2NpdHlKUy5vcmcgKDEuNS4yKS4gKEMpIDIwMTQgSnVsaWFuIFNoYXBpcm8uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gVmVsb2NpdHkgalF1ZXJ5IFNoaW1cclxuICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cclxuXHJcbi8qIFRoaXMgZmlsZSBjb250YWlucyB0aGUgalF1ZXJ5IGZ1bmN0aW9ucyB0aGF0IFZlbG9jaXR5IHJlbGllcyBvbiwgdGhlcmVieSByZW1vdmluZyBWZWxvY2l0eSdzIGRlcGVuZGVuY3kgb24gYSBmdWxsIGNvcHkgb2YgalF1ZXJ5LCBhbmQgYWxsb3dpbmcgaXQgdG8gd29yayBpbiBhbnkgZW52aXJvbm1lbnQuICovXHJcbi8qIFRoZXNlIHNoaW1tZWQgZnVuY3Rpb25zIGFyZSBvbmx5IHVzZWQgaWYgalF1ZXJ5IGlzbid0IHByZXNlbnQuIElmIGJvdGggdGhpcyBzaGltIGFuZCBqUXVlcnkgYXJlIGxvYWRlZCwgVmVsb2NpdHkgZGVmYXVsdHMgdG8galF1ZXJ5IHByb3Blci4gKi9cclxuLyogQnJvd3NlciBzdXBwb3J0OiBVc2luZyB0aGlzIHNoaW0gaW5zdGVhZCBvZiBqUXVlcnkgcHJvcGVyIHJlbW92ZXMgc3VwcG9ydCBmb3IgSUU4LiAqL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdykge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdC8qKioqKioqKioqKioqKipcclxuXHQgU2V0dXBcclxuXHQgKioqKioqKioqKioqKioqL1xyXG5cclxuXHQvKiBJZiBqUXVlcnkgaXMgYWxyZWFkeSBsb2FkZWQsIHRoZXJlJ3Mgbm8gcG9pbnQgaW4gbG9hZGluZyB0aGlzIHNoaW0uICovXHJcblx0aWYgKHdpbmRvdy5qUXVlcnkpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8qIGpRdWVyeSBiYXNlLiAqL1xyXG5cdHZhciAkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcclxuXHRcdHJldHVybiBuZXcgJC5mbi5pbml0KHNlbGVjdG9yLCBjb250ZXh0KTtcclxuXHR9O1xyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKipcclxuXHQgUHJpdmF0ZSBNZXRob2RzXHJcblx0ICoqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHQvKiBqUXVlcnkgKi9cclxuXHQkLmlzV2luZG93ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHQvKiBqc2hpbnQgZXFlcWVxOiBmYWxzZSAqL1xyXG5cdFx0cmV0dXJuIG9iaiAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcblx0fTtcclxuXHJcblx0LyogalF1ZXJ5ICovXHJcblx0JC50eXBlID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRpZiAoIW9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqICsgXCJcIjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xyXG5cdFx0XHRcdGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiIDpcclxuXHRcdFx0XHR0eXBlb2Ygb2JqO1xyXG5cdH07XHJcblxyXG5cdC8qIGpRdWVyeSAqL1xyXG5cdCQuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRyZXR1cm4gJC50eXBlKG9iaikgPT09IFwiYXJyYXlcIjtcclxuXHR9O1xyXG5cclxuXHQvKiBqUXVlcnkgKi9cclxuXHRmdW5jdGlvbiBpc0FycmF5bGlrZShvYmopIHtcclxuXHRcdHZhciBsZW5ndGggPSBvYmoubGVuZ3RoLFxyXG5cdFx0XHRcdHR5cGUgPSAkLnR5cGUob2JqKTtcclxuXHJcblx0XHRpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8ICQuaXNXaW5kb3cob2JqKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9iai5ub2RlVHlwZSA9PT0gMSAmJiBsZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHwgdHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XHJcblx0fVxyXG5cclxuXHQvKioqKioqKioqKioqKioqXHJcblx0ICQgTWV0aG9kc1xyXG5cdCAqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIGpRdWVyeTogU3VwcG9ydCByZW1vdmVkIGZvciBJRTw5LiAqL1xyXG5cdCQuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0dmFyIGtleTtcclxuXHJcblx0XHRpZiAoIW9iaiB8fCAkLnR5cGUob2JqKSAhPT0gXCJvYmplY3RcIiB8fCBvYmoubm9kZVR5cGUgfHwgJC5pc1dpbmRvdyhvYmopKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAob2JqLmNvbnN0cnVjdG9yICYmXHJcblx0XHRcdFx0XHQhaGFzT3duLmNhbGwob2JqLCBcImNvbnN0cnVjdG9yXCIpICYmXHJcblx0XHRcdFx0XHQhaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgXCJpc1Byb3RvdHlwZU9mXCIpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGtleSBpbiBvYmopIHtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xyXG5cdH07XHJcblxyXG5cdC8qIGpRdWVyeSAqL1xyXG5cdCQuZWFjaCA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2ssIGFyZ3MpIHtcclxuXHRcdHZhciB2YWx1ZSxcclxuXHRcdFx0XHRpID0gMCxcclxuXHRcdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoLFxyXG5cdFx0XHRcdGlzQXJyYXkgPSBpc0FycmF5bGlrZShvYmopO1xyXG5cclxuXHRcdGlmIChhcmdzKSB7XHJcblx0XHRcdGlmIChpc0FycmF5KSB7XHJcblx0XHRcdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5hcHBseShvYmpbaV0sIGFyZ3MpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAoaSBpbiBvYmopIHtcclxuXHRcdFx0XHRcdGlmICghb2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5hcHBseShvYmpbaV0sIGFyZ3MpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdFx0XHRmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pO1xyXG5cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAoaSBpbiBvYmopIHtcclxuXHRcdFx0XHRcdGlmICghb2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvYmo7XHJcblx0fTtcclxuXHJcblx0LyogQ3VzdG9tICovXHJcblx0JC5kYXRhID0gZnVuY3Rpb24obm9kZSwga2V5LCB2YWx1ZSkge1xyXG5cdFx0LyogJC5nZXREYXRhKCkgKi9cclxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHZhciBnZXRJZCA9IG5vZGVbJC5leHBhbmRvXSxcclxuXHRcdFx0XHRcdHN0b3JlID0gZ2V0SWQgJiYgY2FjaGVbZ2V0SWRdO1xyXG5cclxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0b3JlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0b3JlKSB7XHJcblx0XHRcdFx0aWYgKGtleSBpbiBzdG9yZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0b3JlW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8qICQuc2V0RGF0YSgpICovXHJcblx0XHR9IGVsc2UgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHZhciBzZXRJZCA9IG5vZGVbJC5leHBhbmRvXSB8fCAobm9kZVskLmV4cGFuZG9dID0gKyskLnV1aWQpO1xyXG5cclxuXHRcdFx0Y2FjaGVbc2V0SWRdID0gY2FjaGVbc2V0SWRdIHx8IHt9O1xyXG5cdFx0XHRjYWNoZVtzZXRJZF1ba2V5XSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qIEN1c3RvbSAqL1xyXG5cdCQucmVtb3ZlRGF0YSA9IGZ1bmN0aW9uKG5vZGUsIGtleXMpIHtcclxuXHRcdHZhciBpZCA9IG5vZGVbJC5leHBhbmRvXSxcclxuXHRcdFx0XHRzdG9yZSA9IGlkICYmIGNhY2hlW2lkXTtcclxuXHJcblx0XHRpZiAoc3RvcmUpIHtcclxuXHRcdFx0Ly8gQ2xlYW51cCB0aGUgZW50aXJlIHN0b3JlIGlmIG5vIGtleXMgYXJlIHByb3ZpZGVkLlxyXG5cdFx0XHRpZiAoIWtleXMpIHtcclxuXHRcdFx0XHRkZWxldGUgY2FjaGVbaWRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQuZWFjaChrZXlzLCBmdW5jdGlvbihfLCBrZXkpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBzdG9yZVtrZXldO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyogalF1ZXJ5ICovXHJcblx0JC5leHRlbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzcmMsIGNvcHlJc0FycmF5LCBjb3B5LCBuYW1lLCBvcHRpb25zLCBjbG9uZSxcclxuXHRcdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXHJcblx0XHRcdFx0aSA9IDEsXHJcblx0XHRcdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcclxuXHRcdFx0XHRkZWVwID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiKSB7XHJcblx0XHRcdGRlZXAgPSB0YXJnZXQ7XHJcblxyXG5cdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbaV0gfHwge307XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAkLnR5cGUodGFyZ2V0KSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHRhcmdldCA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpID09PSBsZW5ndGgpIHtcclxuXHRcdFx0dGFyZ2V0ID0gdGhpcztcclxuXHRcdFx0aS0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKChvcHRpb25zID0gYXJndW1lbnRzW2ldKSkge1xyXG5cdFx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XHJcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XHJcblx0XHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGFyZ2V0ID09PSBjb3B5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKCQuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSAkLmlzQXJyYXkoY29weSkpKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW107XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmICQuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9ICQuZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fTtcclxuXHJcblx0LyogalF1ZXJ5IDEuNC4zICovXHJcblx0JC5xdWV1ZSA9IGZ1bmN0aW9uKGVsZW0sIHR5cGUsIGRhdGEpIHtcclxuXHRcdGZ1bmN0aW9uICRtYWtlQXJyYXkoYXJyLCByZXN1bHRzKSB7XHJcblx0XHRcdHZhciByZXQgPSByZXN1bHRzIHx8IFtdO1xyXG5cclxuXHRcdFx0aWYgKGFycikge1xyXG5cdFx0XHRcdGlmIChpc0FycmF5bGlrZShPYmplY3QoYXJyKSkpIHtcclxuXHRcdFx0XHRcdC8qICQubWVyZ2UgKi9cclxuXHRcdFx0XHRcdChmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcclxuXHRcdFx0XHRcdFx0XHRcdGogPSAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdHdoaWxlIChqIDwgbGVuKSB7XHJcblx0XHRcdFx0XHRcdFx0Zmlyc3RbaSsrXSA9IHNlY29uZFtqKytdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuICE9PSBsZW4pIHtcclxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoc2Vjb25kW2pdICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpcnN0W2krK10gPSBzZWNvbmRbaisrXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGZpcnN0Lmxlbmd0aCA9IGk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmlyc3Q7XHJcblx0XHRcdFx0XHR9KShyZXQsIHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgPyBbYXJyXSA6IGFycik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFtdLnB1c2guY2FsbChyZXQsIGFycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghZWxlbSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dHlwZSA9ICh0eXBlIHx8IFwiZnhcIikgKyBcInF1ZXVlXCI7XHJcblxyXG5cdFx0dmFyIHEgPSAkLmRhdGEoZWxlbSwgdHlwZSk7XHJcblxyXG5cdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdHJldHVybiBxIHx8IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghcSB8fCAkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0cSA9ICQuZGF0YShlbGVtLCB0eXBlLCAkbWFrZUFycmF5KGRhdGEpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHEucHVzaChkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcTtcclxuXHR9O1xyXG5cclxuXHQvKiBqUXVlcnkgMS40LjMgKi9cclxuXHQkLmRlcXVldWUgPSBmdW5jdGlvbihlbGVtcywgdHlwZSkge1xyXG5cdFx0LyogQ3VzdG9tOiBFbWJlZCBlbGVtZW50IGl0ZXJhdGlvbi4gKi9cclxuXHRcdCQuZWFjaChlbGVtcy5ub2RlVHlwZSA/IFtlbGVtc10gOiBlbGVtcywgZnVuY3Rpb24oaSwgZWxlbSkge1xyXG5cdFx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XHJcblxyXG5cdFx0XHR2YXIgcXVldWUgPSAkLnF1ZXVlKGVsZW0sIHR5cGUpLFxyXG5cdFx0XHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xyXG5cclxuXHRcdFx0aWYgKGZuID09PSBcImlucHJvZ3Jlc3NcIikge1xyXG5cdFx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGZuKSB7XHJcblx0XHRcdFx0aWYgKHR5cGUgPT09IFwiZnhcIikge1xyXG5cdFx0XHRcdFx0cXVldWUudW5zaGlmdChcImlucHJvZ3Jlc3NcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmbi5jYWxsKGVsZW0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JC5kZXF1ZXVlKGVsZW0sIHR5cGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqXHJcblx0ICQuZm4gTWV0aG9kc1xyXG5cdCAqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIGpRdWVyeSAqL1xyXG5cdCQuZm4gPSAkLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRcdC8qIEp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IHdyYXBwZWQgaW5zaWRlIGFuIGFycmF5OyBkb24ndCBwcm9jZWVkIHdpdGggdGhlIGFjdHVhbCBqUXVlcnkgbm9kZSB3cmFwcGluZyBwcm9jZXNzLiAqL1xyXG5cdFx0XHRpZiAoc2VsZWN0b3Iubm9kZVR5cGUpIHtcclxuXHRcdFx0XHR0aGlzWzBdID0gc2VsZWN0b3I7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9mZnNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8qIGpRdWVyeSBhbHRlcmVkIGNvZGU6IERyb3BwZWQgZGlzY29ubmVjdGVkIERPTSBub2RlIGNoZWNraW5nLiAqL1xyXG5cdFx0XHR2YXIgYm94ID0gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPyB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge3RvcDogMCwgbGVmdDogMH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRvcDogYm94LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsVG9wIHx8IDApIC0gKGRvY3VtZW50LmNsaWVudFRvcCB8fCAwKSxcclxuXHRcdFx0XHRsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwKSAtIChkb2N1bWVudC5jbGllbnRMZWZ0IHx8IDApXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvKiBqUXVlcnkgKi9cclxuXHRcdFx0ZnVuY3Rpb24gb2Zmc2V0UGFyZW50Rm4oZWxlbSkge1xyXG5cdFx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudDtcclxuXHJcblx0XHRcdFx0d2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwiaHRtbFwiICYmIG9mZnNldFBhcmVudC5zdHlsZSAmJiBvZmZzZXRQYXJlbnQuc3R5bGUucG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gXCJzdGF0aWNcIikpIHtcclxuXHRcdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBaZXB0byAqL1xyXG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbMF0sXHJcblx0XHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnRGbihlbGVtKSxcclxuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCksXHJcblx0XHRcdFx0XHRwYXJlbnRPZmZzZXQgPSAvXig/OmJvZHl8aHRtbCkkL2kudGVzdChvZmZzZXRQYXJlbnQubm9kZU5hbWUpID8ge3RvcDogMCwgbGVmdDogMH0gOiAkKG9mZnNldFBhcmVudCkub2Zmc2V0KCk7XHJcblxyXG5cdFx0XHRvZmZzZXQudG9wIC09IHBhcnNlRmxvYXQoZWxlbS5zdHlsZS5tYXJnaW5Ub3ApIHx8IDA7XHJcblx0XHRcdG9mZnNldC5sZWZ0IC09IHBhcnNlRmxvYXQoZWxlbS5zdHlsZS5tYXJnaW5MZWZ0KSB8fCAwO1xyXG5cclxuXHRcdFx0aWYgKG9mZnNldFBhcmVudC5zdHlsZSkge1xyXG5cdFx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0gcGFyc2VGbG9hdChvZmZzZXRQYXJlbnQuc3R5bGUuYm9yZGVyVG9wV2lkdGgpIHx8IDA7XHJcblx0XHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdChvZmZzZXRQYXJlbnQuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSB8fCAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AsXHJcblx0XHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqXHJcblx0IFByaXZhdGUgVmFyaWFibGVzXHJcblx0ICoqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIEZvciAkLmRhdGEoKSAqL1xyXG5cdHZhciBjYWNoZSA9IHt9O1xyXG5cdCQuZXhwYW5kbyA9IFwidmVsb2NpdHlcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblx0JC51dWlkID0gMDtcclxuXHJcblx0LyogRm9yICQucXVldWUoKSAqL1xyXG5cdHZhciBjbGFzczJ0eXBlID0ge30sXHJcblx0XHRcdGhhc093biA9IGNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHksXHJcblx0XHRcdHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcclxuXHJcblx0dmFyIHR5cGVzID0gXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNsYXNzMnR5cGVbXCJbb2JqZWN0IFwiICsgdHlwZXNbaV0gKyBcIl1cIl0gPSB0eXBlc1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdH1cclxuXHJcblx0LyogTWFrZXMgJChub2RlKSBwb3NzaWJsZSwgd2l0aG91dCBoYXZpbmcgdG8gY2FsbCBpbml0LiAqL1xyXG5cdCQuZm4uaW5pdC5wcm90b3R5cGUgPSAkLmZuO1xyXG5cclxuXHQvKiBHbG9iYWxpemUgVmVsb2NpdHkgb250byB0aGUgd2luZG93LCBhbmQgYXNzaWduIGl0cyBVdGlsaXRpZXMgcHJvcGVydHkuICovXHJcblx0d2luZG93LlZlbG9jaXR5ID0ge1V0aWxpdGllczogJH07XHJcbn0pKHdpbmRvdyk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqXHJcbiBWZWxvY2l0eS5qc1xyXG4gKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQvKiBDb21tb25KUyBtb2R1bGUuICovXHJcblx0aWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuXHRcdC8qIEFNRCBtb2R1bGUuICovXHJcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xyXG5cdFx0LyogQnJvd3NlciBnbG9iYWxzLiAqL1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmYWN0b3J5KCk7XHJcblx0fVxyXG59KGZ1bmN0aW9uKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdHJldHVybiBmdW5jdGlvbihnbG9iYWwsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdC8qKioqKioqKioqKioqKipcclxuXHRcdCBTdW1tYXJ5XHJcblx0XHQgKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qXHJcblx0XHQgLSBDU1M6IENTUyBzdGFjayB0aGF0IHdvcmtzIGluZGVwZW5kZW50bHkgZnJvbSB0aGUgcmVzdCBvZiBWZWxvY2l0eS5cclxuXHRcdCAtIGFuaW1hdGUoKTogQ29yZSBhbmltYXRpb24gbWV0aG9kIHRoYXQgaXRlcmF0ZXMgb3ZlciB0aGUgdGFyZ2V0ZWQgZWxlbWVudHMgYW5kIHF1ZXVlcyB0aGUgaW5jb21pbmcgY2FsbCBvbnRvIGVhY2ggZWxlbWVudCBpbmRpdmlkdWFsbHkuXHJcblx0XHQgLSBQcmUtUXVldWVpbmc6IFByZXBhcmUgdGhlIGVsZW1lbnQgZm9yIGFuaW1hdGlvbiBieSBpbnN0YW50aWF0aW5nIGl0cyBkYXRhIGNhY2hlIGFuZCBwcm9jZXNzaW5nIHRoZSBjYWxsJ3Mgb3B0aW9ucy5cclxuXHRcdCAtIFF1ZXVlaW5nOiBUaGUgbG9naWMgdGhhdCBydW5zIG9uY2UgdGhlIGNhbGwgaGFzIHJlYWNoZWQgaXRzIHBvaW50IG9mIGV4ZWN1dGlvbiBpbiB0aGUgZWxlbWVudCdzICQucXVldWUoKSBzdGFjay5cclxuXHRcdCBNb3N0IGxvZ2ljIGlzIHBsYWNlZCBoZXJlIHRvIGF2b2lkIHJpc2tpbmcgaXQgYmVjb21pbmcgc3RhbGUgKGlmIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcyBoYXZlIGNoYW5nZWQpLlxyXG5cdFx0IC0gUHVzaGluZzogQ29uc29saWRhdGlvbiBvZiB0aGUgdHdlZW4gZGF0YSBmb2xsb3dlZCBieSBpdHMgcHVzaCBvbnRvIHRoZSBnbG9iYWwgaW4tcHJvZ3Jlc3MgY2FsbHMgY29udGFpbmVyLlxyXG5cdFx0IC0gdGljaygpOiBUaGUgc2luZ2xlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wIHJlc3BvbnNpYmxlIGZvciB0d2VlbmluZyBhbGwgaW4tcHJvZ3Jlc3MgY2FsbHMuXHJcblx0XHQgLSBjb21wbGV0ZUNhbGwoKTogSGFuZGxlcyB0aGUgY2xlYW51cCBwcm9jZXNzIGZvciBlYWNoIFZlbG9jaXR5IGNhbGwuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHQgSGVscGVyIEZ1bmN0aW9uc1xyXG5cdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHQvKiBJRSBkZXRlY3Rpb24uIEdpc3Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2p1bGlhbnNoYXBpcm8vOTA5ODYwOSAqL1xyXG5cdFx0dmFyIElFID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gNzsgaSA+IDQ7IGktLSkge1xyXG5cdFx0XHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cdFx0XHRcdFx0ZGl2LmlubmVySFRNTCA9IFwiPCEtLVtpZiBJRSBcIiArIGkgKyBcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiO1xyXG5cclxuXHRcdFx0XHRcdGlmIChkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRkaXYgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHQvKiByQUYgc2hpbS4gR2lzdDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vanVsaWFuc2hhcGlyby85NDk3NTEzICovXHJcblx0XHR2YXIgckFGU2hpbSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRpbWVMYXN0ID0gMDtcclxuXHJcblx0XHRcdHJldHVybiB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXIgdGltZUN1cnJlbnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdFx0XHR0aW1lRGVsdGE7XHJcblxyXG5cdFx0XHRcdC8qIER5bmFtaWNhbGx5IHNldCBkZWxheSBvbiBhIHBlci10aWNrIGJhc2lzIHRvIG1hdGNoIDYwZnBzLiAqL1xyXG5cdFx0XHRcdC8qIFRlY2huaXF1ZSBieSBFcmlrIE1vbGxlci4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxICovXHJcblx0XHRcdFx0dGltZURlbHRhID0gTWF0aC5tYXgoMCwgMTYgLSAodGltZUN1cnJlbnQgLSB0aW1lTGFzdCkpO1xyXG5cdFx0XHRcdHRpbWVMYXN0ID0gdGltZUN1cnJlbnQgKyB0aW1lRGVsdGE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2sodGltZUN1cnJlbnQgKyB0aW1lRGVsdGEpO1xyXG5cdFx0XHRcdH0sIHRpbWVEZWx0YSk7XHJcblx0XHRcdH07XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdHZhciBwZXJmb3JtYW5jZSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHBlcmYgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwge307XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIHBlcmYubm93ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHR2YXIgbm93T2Zmc2V0ID0gcGVyZi50aW1pbmcgJiYgcGVyZi50aW1pbmcubmF2aWdhdGlvblN0YXJ0ID8gcGVyZi50aW1pbmcubmF2aWdhdGlvblN0YXJ0IDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcblx0XHRcdFx0cGVyZi5ub3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gbm93T2Zmc2V0O1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBlcmY7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdC8qIEFycmF5IGNvbXBhY3RpbmcuIENvcHlyaWdodCBMby1EYXNoLiBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNvbXBhY3RTcGFyc2VBcnJheShhcnJheSkge1xyXG5cdFx0XHR2YXIgaW5kZXggPSAtMSxcclxuXHRcdFx0XHRcdGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcclxuXHRcdFx0XHRcdHJlc3VsdCA9IFtdO1xyXG5cclxuXHRcdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2godmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNoaW0gZm9yIFwiZml4aW5nXCIgSUUncyBsYWNrIG9mIHN1cHBvcnQgKElFIDwgOSkgZm9yIGFwcGx5aW5nIHNsaWNlXHJcblx0XHQgKiBvbiBob3N0IG9iamVjdHMgbGlrZSBOYW1lZE5vZGVNYXAsIE5vZGVMaXN0LCBhbmQgSFRNTENvbGxlY3Rpb25cclxuXHRcdCAqICh0ZWNobmljYWxseSwgc2luY2UgaG9zdCBvYmplY3RzIGhhdmUgYmVlbiBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQsXHJcblx0XHQgKiBhdCBsZWFzdCBiZWZvcmUgRVMyMDE1LCBJRSBoYXNuJ3QgbmVlZGVkIHRvIHdvcmsgdGhpcyB3YXkpLlxyXG5cdFx0ICogQWxzbyB3b3JrcyBvbiBzdHJpbmdzLCBmaXhlcyBJRSA8IDkgdG8gYWxsb3cgYW4gZXhwbGljaXQgdW5kZWZpbmVkXHJcblx0XHQgKiBmb3IgdGhlIDJuZCBhcmd1bWVudCAoYXMgaW4gRmlyZWZveCksIGFuZCBwcmV2ZW50cyBlcnJvcnMgd2hlblxyXG5cdFx0ICogY2FsbGVkIG9uIG90aGVyIERPTSBvYmplY3RzLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgX3NsaWNlID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdC8vIENhbid0IGJlIHVzZWQgd2l0aCBET00gZWxlbWVudHMgaW4gSUUgPCA5XHJcblx0XHRcdFx0c2xpY2UuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG5cdFx0XHRcdHJldHVybiBzbGljZTtcclxuXHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBGYWlscyBpbiBJRSA8IDlcclxuXHJcblx0XHRcdFx0Ly8gVGhpcyB3aWxsIHdvcmsgZm9yIGdlbnVpbmUgYXJyYXlzLCBhcnJheS1saWtlIG9iamVjdHMsIFxyXG5cdFx0XHRcdC8vIE5hbWVkTm9kZU1hcCAoYXR0cmlidXRlcywgZW50aXRpZXMsIG5vdGF0aW9ucyksXHJcblx0XHRcdFx0Ly8gTm9kZUxpc3QgKGUuZy4sIGdldEVsZW1lbnRzQnlUYWdOYW1lKSwgSFRNTENvbGxlY3Rpb24gKGUuZy4sIGNoaWxkTm9kZXMpLFxyXG5cdFx0XHRcdC8vIGFuZCB3aWxsIG5vdCBmYWlsIG9uIG90aGVyIERPTSBvYmplY3RzIChhcyBkbyBET00gZWxlbWVudHMgaW4gSUUgPCA5KVxyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XHJcblx0XHRcdFx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBiZWdpbiAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0XHRiZWdpbiA9IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBJRSA8IDkgZ2V0cyB1bmhhcHB5IHdpdGggYW4gdW5kZWZpbmVkIGVuZCBhcmd1bWVudFxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBlbmQgIT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRcdFx0ZW5kID0gbGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gRm9yIG5hdGl2ZSBBcnJheSBvYmplY3RzLCB3ZSB1c2UgdGhlIG5hdGl2ZSBzbGljZSBmdW5jdGlvblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2xpY2UpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBGb3IgYXJyYXkgbGlrZSBvYmplY3Qgd2UgaGFuZGxlIGl0IG91cnNlbHZlcy5cclxuXHRcdFx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdFx0XHRcdGNsb25lZCA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBuZWdhdGl2ZSB2YWx1ZSBmb3IgXCJiZWdpblwiXHJcblx0XHRcdFx0XHRcdFx0c3RhcnQgPSAoYmVnaW4gPj0gMCkgPyBiZWdpbiA6IE1hdGgubWF4KDAsIGxlbiArIGJlZ2luKSxcclxuXHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgbmVnYXRpdmUgdmFsdWUgZm9yIFwiZW5kXCJcclxuXHRcdFx0XHRcdFx0XHR1cFRvID0gZW5kIDwgMCA/IGxlbiArIGVuZCA6IE1hdGgubWluKGVuZCwgbGVuKSxcclxuXHRcdFx0XHRcdFx0XHQvLyBBY3R1YWwgZXhwZWN0ZWQgc2l6ZSBvZiB0aGUgc2xpY2VcclxuXHRcdFx0XHRcdFx0XHRzaXplID0gdXBUbyAtIHN0YXJ0O1xyXG5cclxuXHRcdFx0XHRcdGlmIChzaXplID4gMCkge1xyXG5cdFx0XHRcdFx0XHRjbG9uZWQgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNoYXJBdCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNsb25lZFtpXSA9IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNsb25lZFtpXSA9IHRoaXNbc3RhcnQgKyBpXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBjbG9uZWQ7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fSkoKTtcclxuXHJcblx0XHQvKiAuaW5kZXhPZiBkb2Vzbid0IGV4aXN0IGluIElFPDkgKi9cclxuXHRcdHZhciBfaW5BcnJheSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihhcnIsIHZhbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFyci5pbmNsdWRlcyh2YWwpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGFyciwgdmFsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodmFsKSA+PSAwO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGFyciwgdmFsKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChhcnJbaV0gPT09IHZhbCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2FuaXRpemVFbGVtZW50cyhlbGVtZW50cykge1xyXG5cdFx0XHQvKiBVbndyYXAgalF1ZXJ5L1plcHRvIG9iamVjdHMuICovXHJcblx0XHRcdGlmIChUeXBlLmlzV3JhcHBlZChlbGVtZW50cykpIHtcclxuXHRcdFx0XHRlbGVtZW50cyA9IF9zbGljZS5jYWxsKGVsZW1lbnRzKTtcclxuXHRcdFx0XHQvKiBXcmFwIGEgc2luZ2xlIGVsZW1lbnQgaW4gYW4gYXJyYXkgc28gdGhhdCAkLmVhY2goKSBjYW4gaXRlcmF0ZSB3aXRoIHRoZSBlbGVtZW50IGluc3RlYWQgb2YgaXRzIG5vZGUncyBjaGlsZHJlbi4gKi9cclxuXHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzTm9kZShlbGVtZW50cykpIHtcclxuXHRcdFx0XHRlbGVtZW50cyA9IFtlbGVtZW50c107XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBlbGVtZW50cztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgVHlwZSA9IHtcclxuXHRcdFx0aXNOdW1iZXI6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0eXBlb2YgdmFyaWFibGUgPT09IFwibnVtYmVyXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc1N0cmluZzogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB2YXJpYWJsZSA9PT0gXCJzdHJpbmdcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0Z1bmN0aW9uOiBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlzTm9kZTogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFyaWFibGUgJiYgdmFyaWFibGUubm9kZVR5cGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIERldGVybWluZSBpZiB2YXJpYWJsZSBpcyBhbiBhcnJheS1saWtlIHdyYXBwZWQgalF1ZXJ5LCBaZXB0byBvciBzaW1pbGFyIGVsZW1lbnQsIG9yIGV2ZW4gYSBOb2RlTGlzdCBldGMuICovXHJcblx0XHRcdC8qIE5PVEU6IEhUTUxGb3JtRWxlbWVudHMgYWxzbyBoYXZlIGEgbGVuZ3RoLiAqL1xyXG5cdFx0XHRpc1dyYXBwZWQ6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhcmlhYmxlXHJcblx0XHRcdFx0XHRcdCYmIHZhcmlhYmxlICE9PSB3aW5kb3dcclxuXHRcdFx0XHRcdFx0JiYgVHlwZS5pc051bWJlcih2YXJpYWJsZS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdCYmICFUeXBlLmlzU3RyaW5nKHZhcmlhYmxlKVxyXG5cdFx0XHRcdFx0XHQmJiAhVHlwZS5pc0Z1bmN0aW9uKHZhcmlhYmxlKVxyXG5cdFx0XHRcdFx0XHQmJiAhVHlwZS5pc05vZGUodmFyaWFibGUpXHJcblx0XHRcdFx0XHRcdCYmICh2YXJpYWJsZS5sZW5ndGggPT09IDAgfHwgVHlwZS5pc05vZGUodmFyaWFibGVbMF0pKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNTVkc6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5TVkdFbGVtZW50ICYmICh2YXJpYWJsZSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBuYW1lIGluIHZhcmlhYmxlKSB7XHJcblx0XHRcdFx0XHRpZiAodmFyaWFibGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKioqXHJcblx0XHQgRGVwZW5kZW5jaWVzXHJcblx0XHQgKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0dmFyICQsXHJcblx0XHRcdFx0aXNKUXVlcnkgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoZ2xvYmFsLmZuICYmIGdsb2JhbC5mbi5qcXVlcnkpIHtcclxuXHRcdFx0JCA9IGdsb2JhbDtcclxuXHRcdFx0aXNKUXVlcnkgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCA9IHdpbmRvdy5WZWxvY2l0eS5VdGlsaXRpZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKElFIDw9IDggJiYgIWlzSlF1ZXJ5KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO1xyXG5cdFx0fSBlbHNlIGlmIChJRSA8PSA3KSB7XHJcblx0XHRcdC8qIFJldmVydCB0byBqUXVlcnkncyAkLmFuaW1hdGUoKSwgYW5kIGxvc2UgVmVsb2NpdHkncyBleHRyYSBmZWF0dXJlcy4gKi9cclxuXHRcdFx0alF1ZXJ5LmZuLnZlbG9jaXR5ID0galF1ZXJ5LmZuLmFuaW1hdGU7XHJcblxyXG5cdFx0XHQvKiBOb3cgdGhhdCAkLmZuLnZlbG9jaXR5IGlzIGFsaWFzZWQsIGFib3J0IHRoaXMgVmVsb2NpdHkgZGVjbGFyYXRpb24uICovXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKipcclxuXHRcdCBDb25zdGFudHNcclxuXHRcdCAqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHR2YXIgRFVSQVRJT05fREVGQVVMVCA9IDQwMCxcclxuXHRcdFx0XHRFQVNJTkdfREVGQVVMVCA9IFwic3dpbmdcIjtcclxuXHJcblx0XHQvKioqKioqKioqKioqKlxyXG5cdFx0IFN0YXRlXHJcblx0XHQgKioqKioqKioqKioqKi9cclxuXHJcblx0XHR2YXIgVmVsb2NpdHkgPSB7XHJcblx0XHRcdC8qIENvbnRhaW5lciBmb3IgcGFnZS13aWRlIFZlbG9jaXR5IHN0YXRlIGRhdGEuICovXHJcblx0XHRcdFN0YXRlOiB7XHJcblx0XHRcdFx0LyogRGV0ZWN0IG1vYmlsZSBkZXZpY2VzIHRvIGRldGVybWluZSBpZiBtb2JpbGVIQSBzaG91bGQgYmUgdHVybmVkIG9uLiAqL1xyXG5cdFx0XHRcdGlzTW9iaWxlOiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG5cdFx0XHRcdC8qIFRoZSBtb2JpbGVIQSBvcHRpb24ncyBiZWhhdmlvciBjaGFuZ2VzIG9uIG9sZGVyIEFuZHJvaWQgZGV2aWNlcyAoR2luZ2VyYnJlYWQsIHZlcnNpb25zIDIuMy4zLTIuMy43KS4gKi9cclxuXHRcdFx0XHRpc0FuZHJvaWQ6IC9BbmRyb2lkL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblx0XHRcdFx0aXNHaW5nZXJicmVhZDogL0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG5cdFx0XHRcdGlzQ2hyb21lOiB3aW5kb3cuY2hyb21lLFxyXG5cdFx0XHRcdGlzRmlyZWZveDogL0ZpcmVmb3gvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxcclxuXHRcdFx0XHQvKiBDcmVhdGUgYSBjYWNoZWQgZWxlbWVudCBmb3IgcmUtdXNlIHdoZW4gY2hlY2tpbmcgZm9yIENTUyBwcm9wZXJ0eSBwcmVmaXhlcy4gKi9cclxuXHRcdFx0XHRwcmVmaXhFbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG5cdFx0XHRcdC8qIENhY2hlIGV2ZXJ5IHByZWZpeCBtYXRjaCB0byBhdm9pZCByZXBlYXRpbmcgbG9va3Vwcy4gKi9cclxuXHRcdFx0XHRwcmVmaXhNYXRjaGVzOiB7fSxcclxuXHRcdFx0XHQvKiBDYWNoZSB0aGUgYW5jaG9yIHVzZWQgZm9yIGFuaW1hdGluZyB3aW5kb3cgc2Nyb2xsaW5nLiAqL1xyXG5cdFx0XHRcdHNjcm9sbEFuY2hvcjogbnVsbCxcclxuXHRcdFx0XHQvKiBDYWNoZSB0aGUgYnJvd3Nlci1zcGVjaWZpYyBwcm9wZXJ0eSBuYW1lcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNjcm9sbCBhbmNob3IuICovXHJcblx0XHRcdFx0c2Nyb2xsUHJvcGVydHlMZWZ0OiBudWxsLFxyXG5cdFx0XHRcdHNjcm9sbFByb3BlcnR5VG9wOiBudWxsLFxyXG5cdFx0XHRcdC8qIEtlZXAgdHJhY2sgb2Ygd2hldGhlciBvdXIgUkFGIHRpY2sgaXMgcnVubmluZy4gKi9cclxuXHRcdFx0XHRpc1RpY2tpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdC8qIENvbnRhaW5lciBmb3IgZXZlcnkgaW4tcHJvZ3Jlc3MgY2FsbCB0byBWZWxvY2l0eS4gKi9cclxuXHRcdFx0XHRjYWxsczogW10sXHJcblx0XHRcdFx0ZGVsYXllZEVsZW1lbnRzOiB7XHJcblx0XHRcdFx0XHRjb3VudDogMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0LyogVmVsb2NpdHkncyBjdXN0b20gQ1NTIHN0YWNrLiBNYWRlIGdsb2JhbCBmb3IgdW5pdCB0ZXN0aW5nLiAqL1xyXG5cdFx0XHRDU1M6IHsvKiBEZWZpbmVkIGJlbG93LiAqL30sXHJcblx0XHRcdC8qIEEgc2hpbSBvZiB0aGUgalF1ZXJ5IHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgYnkgVmVsb2NpdHkgLS0gcHJvdmlkZWQgYnkgVmVsb2NpdHkncyBvcHRpb25hbCBqUXVlcnkgc2hpbS4gKi9cclxuXHRcdFx0VXRpbGl0aWVzOiAkLFxyXG5cdFx0XHQvKiBDb250YWluZXIgZm9yIHRoZSB1c2VyJ3MgY3VzdG9tIGFuaW1hdGlvbiByZWRpcmVjdHMgdGhhdCBhcmUgcmVmZXJlbmNlZCBieSBuYW1lIGluIHBsYWNlIG9mIHRoZSBwcm9wZXJ0aWVzIG1hcCBhcmd1bWVudC4gKi9cclxuXHRcdFx0UmVkaXJlY3RzOiB7LyogTWFudWFsbHkgcmVnaXN0ZXJlZCBieSB0aGUgdXNlci4gKi99LFxyXG5cdFx0XHRFYXNpbmdzOiB7LyogRGVmaW5lZCBiZWxvdy4gKi99LFxyXG5cdFx0XHQvKiBBdHRlbXB0IHRvIHVzZSBFUzYgUHJvbWlzZXMgYnkgZGVmYXVsdC4gVXNlcnMgY2FuIG92ZXJyaWRlIHRoaXMgd2l0aCBhIHRoaXJkLXBhcnR5IHByb21pc2VzIGxpYnJhcnkuICovXHJcblx0XHRcdFByb21pc2U6IHdpbmRvdy5Qcm9taXNlLFxyXG5cdFx0XHQvKiBWZWxvY2l0eSBvcHRpb24gZGVmYXVsdHMsIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gYnkgdGhlIHVzZXIuICovXHJcblx0XHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdFx0cXVldWU6IFwiXCIsXHJcblx0XHRcdFx0ZHVyYXRpb246IERVUkFUSU9OX0RFRkFVTFQsXHJcblx0XHRcdFx0ZWFzaW5nOiBFQVNJTkdfREVGQVVMVCxcclxuXHRcdFx0XHRiZWdpbjogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdGNvbXBsZXRlOiB1bmRlZmluZWQsXHJcblx0XHRcdFx0cHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuXHRcdFx0XHRkaXNwbGF5OiB1bmRlZmluZWQsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdGRlbGF5OiBmYWxzZSxcclxuXHRcdFx0XHRtb2JpbGVIQTogdHJ1ZSxcclxuXHRcdFx0XHQvKiBBZHZhbmNlZDogU2V0IHRvIGZhbHNlIHRvIHByZXZlbnQgcHJvcGVydHkgdmFsdWVzIGZyb20gYmVpbmcgY2FjaGVkIGJldHdlZW4gY29uc2VjdXRpdmUgVmVsb2NpdHktaW5pdGlhdGVkIGNoYWluIGNhbGxzLiAqL1xyXG5cdFx0XHRcdF9jYWNoZVZhbHVlczogdHJ1ZSxcclxuXHRcdFx0XHQvKiBBZHZhbmNlZDogU2V0IHRvIGZhbHNlIGlmIHRoZSBwcm9taXNlIHNob3VsZCBhbHdheXMgcmVzb2x2ZSBvbiBlbXB0eSBlbGVtZW50IGxpc3RzLiAqL1xyXG5cdFx0XHRcdHByb21pc2VSZWplY3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBBIGRlc2lnbiBnb2FsIG9mIFZlbG9jaXR5IGlzIHRvIGNhY2hlIGRhdGEgd2hlcmV2ZXIgcG9zc2libGUgaW4gb3JkZXIgdG8gYXZvaWQgRE9NIHJlcXVlcnlpbmcuIEFjY29yZGluZ2x5LCBlYWNoIGVsZW1lbnQgaGFzIGEgZGF0YSBjYWNoZS4gKi9cclxuXHRcdFx0aW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdCQuZGF0YShlbGVtZW50LCBcInZlbG9jaXR5XCIsIHtcclxuXHRcdFx0XHRcdC8qIFN0b3JlIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgZWxlbWVudCwgc2luY2UgaXRzIHByb3BlcnRpZXMgYXJlIHJldHJpZXZlZCBhbmQgdXBkYXRlZCBkaWZmZXJlbnRseSB0aGFuIHN0YW5kYXJkIEhUTUwgZWxlbWVudHMuICovXHJcblx0XHRcdFx0XHRpc1NWRzogVHlwZS5pc1NWRyhlbGVtZW50KSxcclxuXHRcdFx0XHRcdC8qIEtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgYmVpbmcgYW5pbWF0ZWQgYnkgVmVsb2NpdHkuXHJcblx0XHRcdFx0XHQgVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IHByb3BlcnR5IHZhbHVlcyBhcmUgbm90IHRyYW5zZmVycmVkIGJldHdlZW4gbm9uLWNvbnNlY3V0aXZlIChzdGFsZSkgY2FsbHMuICovXHJcblx0XHRcdFx0XHRpc0FuaW1hdGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHQvKiBBIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCdzIGxpdmUgY29tcHV0ZWRTdHlsZSBvYmplY3QuIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlICovXHJcblx0XHRcdFx0XHRjb21wdXRlZFN0eWxlOiBudWxsLFxyXG5cdFx0XHRcdFx0LyogVHdlZW4gZGF0YSBpcyBjYWNoZWQgZm9yIGVhY2ggYW5pbWF0aW9uIG9uIHRoZSBlbGVtZW50IHNvIHRoYXQgZGF0YSBjYW4gYmUgcGFzc2VkIGFjcm9zcyBjYWxscyAtLVxyXG5cdFx0XHRcdFx0IGluIHBhcnRpY3VsYXIsIGVuZCB2YWx1ZXMgYXJlIHVzZWQgYXMgc3Vic2VxdWVudCBzdGFydCB2YWx1ZXMgaW4gY29uc2VjdXRpdmUgVmVsb2NpdHkgY2FsbHMuICovXHJcblx0XHRcdFx0XHR0d2VlbnNDb250YWluZXI6IG51bGwsXHJcblx0XHRcdFx0XHQvKiBUaGUgZnVsbCByb290IHByb3BlcnR5IHZhbHVlcyBvZiBlYWNoIENTUyBob29rIGJlaW5nIGFuaW1hdGVkIG9uIHRoaXMgZWxlbWVudCBhcmUgY2FjaGVkIHNvIHRoYXQ6XHJcblx0XHRcdFx0XHQgMSkgQ29uY3VycmVudGx5LWFuaW1hdGluZyBob29rcyBzaGFyaW5nIHRoZSBzYW1lIHJvb3QgY2FuIGhhdmUgdGhlaXIgcm9vdCB2YWx1ZXMnIG1lcmdlZCBpbnRvIG9uZSB3aGlsZSB0d2VlbmluZy5cclxuXHRcdFx0XHRcdCAyKSBQb3N0LWhvb2staW5qZWN0aW9uIHJvb3QgdmFsdWVzIGNhbiBiZSB0cmFuc2ZlcnJlZCBvdmVyIHRvIGNvbnNlY3V0aXZlbHkgY2hhaW5lZCBWZWxvY2l0eSBjYWxscyBhcyBzdGFydGluZyByb290IHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6IHt9LFxyXG5cdFx0XHRcdFx0LyogQSBjYWNoZSBmb3IgdHJhbnNmb3JtIHVwZGF0ZXMsIHdoaWNoIG11c3QgYmUgbWFudWFsbHkgZmx1c2hlZCB2aWEgQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoKS4gKi9cclxuXHRcdFx0XHRcdHRyYW5zZm9ybUNhY2hlOiB7fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBBIHBhcmFsbGVsIHRvIGpRdWVyeSdzICQuY3NzKCksIHVzZWQgZm9yIGdldHRpbmcvc2V0dGluZyBWZWxvY2l0eSdzIGhvb2tlZCBDU1MgcHJvcGVydGllcy4gKi9cclxuXHRcdFx0aG9vazogbnVsbCwgLyogRGVmaW5lZCBiZWxvdy4gKi9cclxuXHRcdFx0LyogVmVsb2NpdHktd2lkZSBhbmltYXRpb24gdGltZSByZW1hcHBpbmcgZm9yIHRlc3RpbmcgcHVycG9zZXMuICovXHJcblx0XHRcdG1vY2s6IGZhbHNlLFxyXG5cdFx0XHR2ZXJzaW9uOiB7bWFqb3I6IDEsIG1pbm9yOiA1LCBwYXRjaDogMn0sXHJcblx0XHRcdC8qIFNldCB0byAxIG9yIDIgKG1vc3QgdmVyYm9zZSkgdG8gb3V0cHV0IGRlYnVnIGluZm8gdG8gY29uc29sZS4gKi9cclxuXHRcdFx0ZGVidWc6IGZhbHNlLFxyXG5cdFx0XHQvKiBVc2UgckFGIGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAgd2hlbiBhdmFpbGFibGUgKi9cclxuXHRcdFx0dGltZXN0YW1wOiB0cnVlLFxyXG5cdFx0XHQvKiBQYXVzZSBhbGwgYW5pbWF0aW9ucyAqL1xyXG5cdFx0XHRwYXVzZUFsbDogZnVuY3Rpb24ocXVldWVOYW1lKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcblx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmNhbGxzLCBmdW5jdGlvbihpLCBhY3RpdmVDYWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUNhbGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdC8qIElmIHdlIGhhdmUgYSBxdWV1ZU5hbWUgYW5kIHRoaXMgY2FsbCBpcyBub3Qgb24gdGhhdCBxdWV1ZSwgc2tpcCAqL1xyXG5cdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB1bmRlZmluZWQgJiYgKChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpIHx8IChhY3RpdmVDYWxsWzJdLnF1ZXVlID09PSBmYWxzZSkpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIFNldCBjYWxsIHRvIHBhdXNlZCAqL1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVDYWxsWzVdID0ge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VtZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0LyogUGF1c2UgdGltZXJzIG9uIGFueSBjdXJyZW50bHkgZGVsYXllZCBjYWxscyAqL1xyXG5cdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHMsIGZ1bmN0aW9uKGssIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdGlmICghZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwYXVzZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0LyogUmVzdW1lIGFsbCBhbmltYXRpb25zICovXHJcblx0XHRcdHJlc3VtZUFsbDogZnVuY3Rpb24ocXVldWVOYW1lKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcblx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmNhbGxzLCBmdW5jdGlvbihpLCBhY3RpdmVDYWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUNhbGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdC8qIElmIHdlIGhhdmUgYSBxdWV1ZU5hbWUgYW5kIHRoaXMgY2FsbCBpcyBub3Qgb24gdGhhdCBxdWV1ZSwgc2tpcCAqL1xyXG5cdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB1bmRlZmluZWQgJiYgKChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpIHx8IChhY3RpdmVDYWxsWzJdLnF1ZXVlID09PSBmYWxzZSkpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIFNldCBjYWxsIHRvIHJlc3VtZWQgaWYgaXQgd2FzIHBhdXNlZCAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbFs1XSkge1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbNV0ucmVzdW1lID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8qIFJlc3VtZSB0aW1lcnMgb24gYW55IGN1cnJlbnRseSBkZWxheWVkIGNhbGxzICovXHJcblx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cywgZnVuY3Rpb24oaywgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlc3VtZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKiBSZXRyaWV2ZSB0aGUgYXBwcm9wcmlhdGUgc2Nyb2xsIGFuY2hvciBhbmQgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGJyb3dzZXI6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cuc2Nyb2xsWSAqL1xyXG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvciA9IHdpbmRvdztcclxuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJwYWdlWE9mZnNldFwiO1xyXG5cdFx0XHRWZWxvY2l0eS5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcCA9IFwicGFnZVlPZmZzZXRcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keTtcclxuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJzY3JvbGxMZWZ0XCI7XHJcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wID0gXCJzY3JvbGxUb3BcIjtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBTaG9ydGhhbmQgYWxpYXMgZm9yIGpRdWVyeSdzICQuZGF0YSgpIHV0aWxpdHkuICovXHJcblx0XHRmdW5jdGlvbiBEYXRhKGVsZW1lbnQpIHtcclxuXHRcdFx0LyogSGFyZGNvZGUgYSByZWZlcmVuY2UgdG8gdGhlIHBsdWdpbiBuYW1lLiAqL1xyXG5cdFx0XHR2YXIgcmVzcG9uc2UgPSAkLmRhdGEoZWxlbWVudCwgXCJ2ZWxvY2l0eVwiKTtcclxuXHJcblx0XHRcdC8qIGpRdWVyeSA8PTEuNC4yIHJldHVybnMgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZCB3aGVuIG5vIG1hdGNoIGlzIGZvdW5kLiBXZSBub3JtYWxpemUgdGhpcyBiZWhhdmlvci4gKi9cclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlID09PSBudWxsID8gdW5kZWZpbmVkIDogcmVzcG9uc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqXHJcblx0XHQgRGVsYXkgVGltZXJcclxuXHRcdCAqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRmdW5jdGlvbiBwYXVzZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKSB7XHJcblx0XHRcdC8qIENoZWNrIGZvciBhbnkgZGVsYXkgdGltZXJzLCBhbmQgcGF1c2UgdGhlIHNldCB0aW1lb3V0cyAod2hpbGUgcHJlc2VydmluZyB0aW1lIGRhdGEpXHJcblx0XHRcdCB0byBiZSByZXN1bWVkIHdoZW4gdGhlIFwicmVzdW1lXCIgY29tbWFuZCBpcyBpc3N1ZWQgKi9cclxuXHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmRlbGF5VGltZXIgJiYgIWRhdGEuZGVsYXlQYXVzZWQpIHtcclxuXHRcdFx0XHRkYXRhLmRlbGF5UmVtYWluaW5nID0gZGF0YS5kZWxheSAtIGN1cnJlbnRUaW1lICsgZGF0YS5kZWxheUJlZ2luO1xyXG5cdFx0XHRcdGRhdGEuZGVsYXlQYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dChkYXRhLmRlbGF5VGltZXIuc2V0VGltZW91dCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZXN1bWVEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSkge1xyXG5cdFx0XHQvKiBDaGVjayBmb3IgYW55IHBhdXNlZCB0aW1lcnMgYW5kIHJlc3VtZSAqL1xyXG5cdFx0XHR2YXIgZGF0YSA9IERhdGEoZWxlbWVudCk7XHJcblx0XHRcdGlmIChkYXRhICYmIGRhdGEuZGVsYXlUaW1lciAmJiBkYXRhLmRlbGF5UGF1c2VkKSB7XHJcblx0XHRcdFx0LyogSWYgdGhlIGVsZW1lbnQgd2FzIG1pZC1kZWxheSwgcmUgaW5pdGlhdGUgdGhlIHRpbWVvdXQgd2l0aCB0aGUgcmVtYWluaW5nIGRlbGF5ICovXHJcblx0XHRcdFx0ZGF0YS5kZWxheVBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGRhdGEuZGVsYXlUaW1lci5zZXRUaW1lb3V0ID0gc2V0VGltZW91dChkYXRhLmRlbGF5VGltZXIubmV4dCwgZGF0YS5kZWxheVJlbWFpbmluZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRcdC8qKioqKioqKioqKioqKlxyXG5cdFx0IEVhc2luZ1xyXG5cdFx0ICoqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIFN0ZXAgZWFzaW5nIGdlbmVyYXRvci4gKi9cclxuXHRcdGZ1bmN0aW9uIGdlbmVyYXRlU3RlcChzdGVwcykge1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24ocCkge1xyXG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHAgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBCZXppZXIgY3VydmUgZnVuY3Rpb24gZ2VuZXJhdG9yLiBDb3B5cmlnaHQgR2FldGFuIFJlbmF1ZGVhdS4gTUlUIExpY2Vuc2U6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UgKi9cclxuXHRcdGZ1bmN0aW9uIGdlbmVyYXRlQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xyXG5cdFx0XHR2YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0LFxyXG5cdFx0XHRcdFx0TkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxLFxyXG5cdFx0XHRcdFx0U1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxyXG5cdFx0XHRcdFx0U1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcclxuXHRcdFx0XHRcdGtTcGxpbmVUYWJsZVNpemUgPSAxMSxcclxuXHRcdFx0XHRcdGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKSxcclxuXHRcdFx0XHRcdGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IFwiRmxvYXQzMkFycmF5XCIgaW4gd2luZG93O1xyXG5cclxuXHRcdFx0LyogTXVzdCBjb250YWluIGZvdXIgYXJndW1lbnRzLiAqL1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gNCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogQXJndW1lbnRzIG11c3QgYmUgbnVtYmVycy4gKi9cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihhcmd1bWVudHNbaV0pIHx8ICFpc0Zpbml0ZShhcmd1bWVudHNbaV0pKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBYIHZhbHVlcyBtdXN0IGJlIGluIHRoZSBbMCwgMV0gcmFuZ2UuICovXHJcblx0XHRcdG1YMSA9IE1hdGgubWluKG1YMSwgMSk7XHJcblx0XHRcdG1YMiA9IE1hdGgubWluKG1YMiwgMSk7XHJcblx0XHRcdG1YMSA9IE1hdGgubWF4KG1YMSwgMCk7XHJcblx0XHRcdG1YMiA9IE1hdGgubWF4KG1YMiwgMCk7XHJcblxyXG5cdFx0XHR2YXIgbVNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBBKGFBMSwgYUEyKSB7XHJcblx0XHRcdFx0cmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmdW5jdGlvbiBCKGFBMSwgYUEyKSB7XHJcblx0XHRcdFx0cmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmdW5jdGlvbiBDKGFBMSkge1xyXG5cdFx0XHRcdHJldHVybiAzLjAgKiBhQTE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7XHJcblx0XHRcdFx0cmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHtcclxuXHRcdFx0XHRyZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhR3Vlc3NUO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XHJcblx0XHRcdFx0XHRhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGFHdWVzc1Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNhbGNTYW1wbGVWYWx1ZXMoKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcclxuXHRcdFx0XHRcdG1TYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XHJcblxyXG5cdFx0XHRcdGRvIHtcclxuXHRcdFx0XHRcdGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XHJcblx0XHRcdFx0XHRjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRYID4gMC4wKSB7XHJcblx0XHRcdFx0XHRcdGFCID0gY3VycmVudFQ7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhQSA9IGN1cnJlbnRUO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50VDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcclxuXHRcdFx0XHR2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFNhbXBsZSA9IDEsXHJcblx0XHRcdFx0XHRcdGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcclxuXHJcblx0XHRcdFx0Zm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgbVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XHJcblx0XHRcdFx0XHRpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC0tY3VycmVudFNhbXBsZTtcclxuXHJcblx0XHRcdFx0dmFyIGRpc3QgPSAoYVggLSBtU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChtU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIG1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pLFxyXG5cdFx0XHRcdFx0XHRndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZSxcclxuXHRcdFx0XHRcdFx0aW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcblxyXG5cdFx0XHRcdGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcclxuXHRcdFx0XHRcdHJldHVybiBndWVzc0ZvclQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcHJlY29tcHV0ZSgpIHtcclxuXHRcdFx0XHRfcHJlY29tcHV0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xyXG5cdFx0XHRcdFx0Y2FsY1NhbXBsZVZhbHVlcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGYgPSBmdW5jdGlvbihhWCkge1xyXG5cdFx0XHRcdGlmICghX3ByZWNvbXB1dGVkKSB7XHJcblx0XHRcdFx0XHRwcmVjb21wdXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFYO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoYVggPT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoYVggPT09IDEpIHtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRmLmdldENvbnRyb2xQb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gW3t4OiBtWDEsIHk6IG1ZMX0sIHt4OiBtWDIsIHk6IG1ZMn1dO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIHN0ciA9IFwiZ2VuZXJhdGVCZXppZXIoXCIgKyBbbVgxLCBtWTEsIG1YMiwgbVkyXSArIFwiKVwiO1xyXG5cdFx0XHRmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiBmO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFJ1bmdlLUt1dHRhIHNwcmluZyBwaHlzaWNzIGZ1bmN0aW9uIGdlbmVyYXRvci4gQWRhcHRlZCBmcm9tIEZyYW1lci5qcywgY29weXJpZ2h0IEtvZW4gQm9rLiBNSVQgTGljZW5zZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xyXG5cdFx0LyogR2l2ZW4gYSB0ZW5zaW9uLCBmcmljdGlvbiwgYW5kIGR1cmF0aW9uLCBhIHNpbXVsYXRpb24gYXQgNjBGUFMgd2lsbCBmaXJzdCBydW4gd2l0aG91dCBhIGRlZmluZWQgZHVyYXRpb24gaW4gb3JkZXIgdG8gY2FsY3VsYXRlIHRoZSBmdWxsIHBhdGguIEEgc2Vjb25kIHBhc3NcclxuXHRcdCB0aGVuIGFkanVzdHMgdGhlIHRpbWUgZGVsdGEgLS0gdXNpbmcgdGhlIHJlbGF0aW9uIGJldHdlZW4gYWN0dWFsIHRpbWUgYW5kIGR1cmF0aW9uIC0tIHRvIGNhbGN1bGF0ZSB0aGUgcGF0aCBmb3IgdGhlIGR1cmF0aW9uLWNvbnN0cmFpbmVkIGFuaW1hdGlvbi4gKi9cclxuXHRcdHZhciBnZW5lcmF0ZVNwcmluZ1JLNCA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0ZnVuY3Rpb24gc3ByaW5nQWNjZWxlcmF0aW9uRm9yU3RhdGUoc3RhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gKC1zdGF0ZS50ZW5zaW9uICogc3RhdGUueCkgLSAoc3RhdGUuZnJpY3Rpb24gKiBzdGF0ZS52KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gc3ByaW5nRXZhbHVhdGVTdGF0ZVdpdGhEZXJpdmF0aXZlKGluaXRpYWxTdGF0ZSwgZHQsIGRlcml2YXRpdmUpIHtcclxuXHRcdFx0XHR2YXIgc3RhdGUgPSB7XHJcblx0XHRcdFx0XHR4OiBpbml0aWFsU3RhdGUueCArIGRlcml2YXRpdmUuZHggKiBkdCxcclxuXHRcdFx0XHRcdHY6IGluaXRpYWxTdGF0ZS52ICsgZGVyaXZhdGl2ZS5kdiAqIGR0LFxyXG5cdFx0XHRcdFx0dGVuc2lvbjogaW5pdGlhbFN0YXRlLnRlbnNpb24sXHJcblx0XHRcdFx0XHRmcmljdGlvbjogaW5pdGlhbFN0YXRlLmZyaWN0aW9uXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHtkeDogc3RhdGUudiwgZHY6IHNwcmluZ0FjY2VsZXJhdGlvbkZvclN0YXRlKHN0YXRlKX07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHNwcmluZ0ludGVncmF0ZVN0YXRlKHN0YXRlLCBkdCkge1xyXG5cdFx0XHRcdHZhciBhID0ge1xyXG5cdFx0XHRcdFx0ZHg6IHN0YXRlLnYsXHJcblx0XHRcdFx0XHRkdjogc3ByaW5nQWNjZWxlcmF0aW9uRm9yU3RhdGUoc3RhdGUpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0YiA9IHNwcmluZ0V2YWx1YXRlU3RhdGVXaXRoRGVyaXZhdGl2ZShzdGF0ZSwgZHQgKiAwLjUsIGEpLFxyXG5cdFx0XHRcdFx0XHRjID0gc3ByaW5nRXZhbHVhdGVTdGF0ZVdpdGhEZXJpdmF0aXZlKHN0YXRlLCBkdCAqIDAuNSwgYiksXHJcblx0XHRcdFx0XHRcdGQgPSBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoc3RhdGUsIGR0LCBjKSxcclxuXHRcdFx0XHRcdFx0ZHhkdCA9IDEuMCAvIDYuMCAqIChhLmR4ICsgMi4wICogKGIuZHggKyBjLmR4KSArIGQuZHgpLFxyXG5cdFx0XHRcdFx0XHRkdmR0ID0gMS4wIC8gNi4wICogKGEuZHYgKyAyLjAgKiAoYi5kdiArIGMuZHYpICsgZC5kdik7XHJcblxyXG5cdFx0XHRcdHN0YXRlLnggPSBzdGF0ZS54ICsgZHhkdCAqIGR0O1xyXG5cdFx0XHRcdHN0YXRlLnYgPSBzdGF0ZS52ICsgZHZkdCAqIGR0O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmdW5jdGlvbiBzcHJpbmdSSzRGYWN0b3J5KHRlbnNpb24sIGZyaWN0aW9uLCBkdXJhdGlvbikge1xyXG5cclxuXHRcdFx0XHR2YXIgaW5pdFN0YXRlID0ge1xyXG5cdFx0XHRcdFx0eDogLTEsXHJcblx0XHRcdFx0XHR2OiAwLFxyXG5cdFx0XHRcdFx0dGVuc2lvbjogbnVsbCxcclxuXHRcdFx0XHRcdGZyaWN0aW9uOiBudWxsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0cGF0aCA9IFswXSxcclxuXHRcdFx0XHRcdFx0dGltZV9sYXBzZWQgPSAwLFxyXG5cdFx0XHRcdFx0XHR0b2xlcmFuY2UgPSAxIC8gMTAwMDAsXHJcblx0XHRcdFx0XHRcdERUID0gMTYgLyAxMDAwLFxyXG5cdFx0XHRcdFx0XHRoYXZlX2R1cmF0aW9uLCBkdCwgbGFzdF9zdGF0ZTtcclxuXHJcblx0XHRcdFx0dGVuc2lvbiA9IHBhcnNlRmxvYXQodGVuc2lvbikgfHwgNTAwO1xyXG5cdFx0XHRcdGZyaWN0aW9uID0gcGFyc2VGbG9hdChmcmljdGlvbikgfHwgMjA7XHJcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBudWxsO1xyXG5cclxuXHRcdFx0XHRpbml0U3RhdGUudGVuc2lvbiA9IHRlbnNpb247XHJcblx0XHRcdFx0aW5pdFN0YXRlLmZyaWN0aW9uID0gZnJpY3Rpb247XHJcblxyXG5cdFx0XHRcdGhhdmVfZHVyYXRpb24gPSBkdXJhdGlvbiAhPT0gbnVsbDtcclxuXHJcblx0XHRcdFx0LyogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgdGltZSBpdCB0YWtlcyBmb3IgdGhpcyBhbmltYXRpb24gdG8gY29tcGxldGUgd2l0aCB0aGUgcHJvdmlkZWQgY29uZGl0aW9ucy4gKi9cclxuXHRcdFx0XHRpZiAoaGF2ZV9kdXJhdGlvbikge1xyXG5cdFx0XHRcdFx0LyogUnVuIHRoZSBzaW11bGF0aW9uIHdpdGhvdXQgYSBkdXJhdGlvbi4gKi9cclxuXHRcdFx0XHRcdHRpbWVfbGFwc2VkID0gc3ByaW5nUks0RmFjdG9yeSh0ZW5zaW9uLCBmcmljdGlvbik7XHJcblx0XHRcdFx0XHQvKiBDb21wdXRlIHRoZSBhZGp1c3RlZCB0aW1lIGRlbHRhLiAqL1xyXG5cdFx0XHRcdFx0ZHQgPSB0aW1lX2xhcHNlZCAvIGR1cmF0aW9uICogRFQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGR0ID0gRFQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xyXG5cdFx0XHRcdFx0LyogTmV4dC9zdGVwIGZ1bmN0aW9uIC4qL1xyXG5cdFx0XHRcdFx0bGFzdF9zdGF0ZSA9IHNwcmluZ0ludGVncmF0ZVN0YXRlKGxhc3Rfc3RhdGUgfHwgaW5pdFN0YXRlLCBkdCk7XHJcblx0XHRcdFx0XHQvKiBTdG9yZSB0aGUgcG9zaXRpb24uICovXHJcblx0XHRcdFx0XHRwYXRoLnB1c2goMSArIGxhc3Rfc3RhdGUueCk7XHJcblx0XHRcdFx0XHR0aW1lX2xhcHNlZCArPSAxNjtcclxuXHRcdFx0XHRcdC8qIElmIHRoZSBjaGFuZ2UgdGhyZXNob2xkIGlzIHJlYWNoZWQsIGJyZWFrLiAqL1xyXG5cdFx0XHRcdFx0aWYgKCEoTWF0aC5hYnMobGFzdF9zdGF0ZS54KSA+IHRvbGVyYW5jZSAmJiBNYXRoLmFicyhsYXN0X3N0YXRlLnYpID4gdG9sZXJhbmNlKSkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIElmIGR1cmF0aW9uIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gdGhlIGFjdHVhbCB0aW1lIHJlcXVpcmVkIGZvciBjb21wbGV0aW5nIHRoaXMgYW5pbWF0aW9uLiBPdGhlcndpc2UsIHJldHVybiBhIGNsb3N1cmUgdGhhdCBob2xkcyB0aGVcclxuXHRcdFx0XHQgY29tcHV0ZWQgcGF0aCBhbmQgcmV0dXJucyBhIHNuYXBzaG90IG9mIHRoZSBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gYSBnaXZlbiBwZXJjZW50Q29tcGxldGUuICovXHJcblx0XHRcdFx0cmV0dXJuICFoYXZlX2R1cmF0aW9uID8gdGltZV9sYXBzZWQgOiBmdW5jdGlvbihwZXJjZW50Q29tcGxldGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwYXRoWyAocGVyY2VudENvbXBsZXRlICogKHBhdGgubGVuZ3RoIC0gMSkpIHwgMCBdO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHR9KCkpO1xyXG5cclxuXHRcdC8qIGpRdWVyeSBlYXNpbmdzLiAqL1xyXG5cdFx0VmVsb2NpdHkuRWFzaW5ncyA9IHtcclxuXHRcdFx0bGluZWFyOiBmdW5jdGlvbihwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aW5nOiBmdW5jdGlvbihwKSB7XHJcblx0XHRcdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKHAgKiBNYXRoLlBJKSAvIDI7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIEJvbnVzIFwic3ByaW5nXCIgZWFzaW5nLCB3aGljaCBpcyBhIGxlc3MgZXhhZ2dlcmF0ZWQgdmVyc2lvbiBvZiBlYXNlSW5PdXRFbGFzdGljLiAqL1xyXG5cdFx0XHRzcHJpbmc6IGZ1bmN0aW9uKHApIHtcclxuXHRcdFx0XHRyZXR1cm4gMSAtIChNYXRoLmNvcyhwICogNC41ICogTWF0aC5QSSkgKiBNYXRoLmV4cCgtcCAqIDYpKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKiBDU1MzIGFuZCBSb2JlcnQgUGVubmVyIGVhc2luZ3MuICovXHJcblx0XHQkLmVhY2goXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0W1wiZWFzZVwiLCBbMC4yNSwgMC4xLCAwLjI1LCAxLjBdXSxcclxuXHRcdFx0XHRcdFtcImVhc2UtaW5cIiwgWzAuNDIsIDAuMCwgMS4wMCwgMS4wXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlLW91dFwiLCBbMC4wMCwgMC4wLCAwLjU4LCAxLjBdXSxcclxuXHRcdFx0XHRcdFtcImVhc2UtaW4tb3V0XCIsIFswLjQyLCAwLjAsIDAuNTgsIDEuMF1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluU2luZVwiLCBbMC40NywgMCwgMC43NDUsIDAuNzE1XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlT3V0U2luZVwiLCBbMC4zOSwgMC41NzUsIDAuNTY1LCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRTaW5lXCIsIFswLjQ0NSwgMC4wNSwgMC41NSwgMC45NV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluUXVhZFwiLCBbMC41NSwgMC4wODUsIDAuNjgsIDAuNTNdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VPdXRRdWFkXCIsIFswLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRRdWFkXCIsIFswLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5DdWJpY1wiLCBbMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlT3V0Q3ViaWNcIiwgWzAuMjE1LCAwLjYxLCAwLjM1NSwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluT3V0Q3ViaWNcIiwgWzAuNjQ1LCAwLjA0NSwgMC4zNTUsIDFdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJblF1YXJ0XCIsIFswLjg5NSwgMC4wMywgMC42ODUsIDAuMjJdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VPdXRRdWFydFwiLCBbMC4xNjUsIDAuODQsIDAuNDQsIDFdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFF1YXJ0XCIsIFswLjc3LCAwLCAwLjE3NSwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluUXVpbnRcIiwgWzAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNl1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZU91dFF1aW50XCIsIFswLjIzLCAxLCAwLjMyLCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRRdWludFwiLCBbMC44NiwgMCwgMC4wNywgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluRXhwb1wiLCBbMC45NSwgMC4wNSwgMC43OTUsIDAuMDM1XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlT3V0RXhwb1wiLCBbMC4xOSwgMSwgMC4yMiwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluT3V0RXhwb1wiLCBbMSwgMCwgMCwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluQ2lyY1wiLCBbMC42LCAwLjA0LCAwLjk4LCAwLjMzNV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZU91dENpcmNcIiwgWzAuMDc1LCAwLjgyLCAwLjE2NSwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluT3V0Q2lyY1wiLCBbMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2XV1cclxuXHRcdFx0XHRdLCBmdW5jdGlvbihpLCBlYXNpbmdBcnJheSkge1xyXG5cdFx0XHRWZWxvY2l0eS5FYXNpbmdzW2Vhc2luZ0FycmF5WzBdXSA9IGdlbmVyYXRlQmV6aWVyLmFwcGx5KG51bGwsIGVhc2luZ0FycmF5WzFdKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qIERldGVybWluZSB0aGUgYXBwcm9wcmlhdGUgZWFzaW5nIHR5cGUgZ2l2ZW4gYW4gZWFzaW5nIGlucHV0LiAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0RWFzaW5nKHZhbHVlLCBkdXJhdGlvbikge1xyXG5cdFx0XHR2YXIgZWFzaW5nID0gdmFsdWU7XHJcblxyXG5cdFx0XHQvKiBUaGUgZWFzaW5nIG9wdGlvbiBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIHRoYXQgcmVmZXJlbmNlcyBhIHByZS1yZWdpc3RlcmVkIGVhc2luZyxcclxuXHRcdFx0IG9yIGl0IGNhbiBiZSBhIHR3by0vZm91ci1pdGVtIGFycmF5IG9mIGludGVnZXJzIHRvIGJlIGNvbnZlcnRlZCBpbnRvIGEgYmV6aWVyL3NwcmluZyBmdW5jdGlvbi4gKi9cclxuXHRcdFx0aWYgKFR5cGUuaXNTdHJpbmcodmFsdWUpKSB7XHJcblx0XHRcdFx0LyogRW5zdXJlIHRoYXQgdGhlIGVhc2luZyBoYXMgYmVlbiBhc3NpZ25lZCB0byBqUXVlcnkncyBWZWxvY2l0eS5FYXNpbmdzIG9iamVjdC4gKi9cclxuXHRcdFx0XHRpZiAoIVZlbG9jaXR5LkVhc2luZ3NbdmFsdWVdKSB7XHJcblx0XHRcdFx0XHRlYXNpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRlYXNpbmcgPSBnZW5lcmF0ZVN0ZXAuYXBwbHkobnVsbCwgdmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAyKSB7XHJcblx0XHRcdFx0Lyogc3ByaW5nUks0IG11c3QgYmUgcGFzc2VkIHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbi4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBJZiB0aGUgc3ByaW5nUks0IGFycmF5IGNvbnRhaW5zIG5vbi1udW1iZXJzLCBnZW5lcmF0ZVNwcmluZ1JLNCgpIHJldHVybnMgYW4gZWFzaW5nXHJcblx0XHRcdFx0IGZ1bmN0aW9uIGdlbmVyYXRlZCB3aXRoIGRlZmF1bHQgdGVuc2lvbiBhbmQgZnJpY3Rpb24gdmFsdWVzLiAqL1xyXG5cdFx0XHRcdGVhc2luZyA9IGdlbmVyYXRlU3ByaW5nUks0LmFwcGx5KG51bGwsIHZhbHVlLmNvbmNhdChbZHVyYXRpb25dKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHQvKiBOb3RlOiBJZiB0aGUgYmV6aWVyIGFycmF5IGNvbnRhaW5zIG5vbi1udW1iZXJzLCBnZW5lcmF0ZUJlemllcigpIHJldHVybnMgZmFsc2UuICovXHJcblx0XHRcdFx0ZWFzaW5nID0gZ2VuZXJhdGVCZXppZXIuYXBwbHkobnVsbCwgdmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVhc2luZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBSZXZlcnQgdG8gdGhlIFZlbG9jaXR5LXdpZGUgZGVmYXVsdCBlYXNpbmcgdHlwZSwgb3IgZmFsbCBiYWNrIHRvIFwic3dpbmdcIiAod2hpY2ggaXMgYWxzbyBqUXVlcnkncyBkZWZhdWx0KVxyXG5cdFx0XHQgaWYgdGhlIFZlbG9jaXR5LXdpZGUgZGVmYXVsdCBoYXMgYmVlbiBpbmNvcnJlY3RseSBtb2RpZmllZC4gKi9cclxuXHRcdFx0aWYgKGVhc2luZyA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpZiAoVmVsb2NpdHkuRWFzaW5nc1tWZWxvY2l0eS5kZWZhdWx0cy5lYXNpbmddKSB7XHJcblx0XHRcdFx0XHRlYXNpbmcgPSBWZWxvY2l0eS5kZWZhdWx0cy5lYXNpbmc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVhc2luZyA9IEVBU0lOR19ERUZBVUxUO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGVhc2luZztcclxuXHRcdH1cclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKipcclxuXHRcdCBDU1MgU3RhY2tcclxuXHRcdCAqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHQvKiBUaGUgQ1NTIG9iamVjdCBpcyBhIGhpZ2hseSBjb25kZW5zZWQgYW5kIHBlcmZvcm1hbnQgQ1NTIHN0YWNrIHRoYXQgZnVsbHkgcmVwbGFjZXMgalF1ZXJ5J3MuXHJcblx0XHQgSXQgaGFuZGxlcyB0aGUgdmFsaWRhdGlvbiwgZ2V0dGluZywgYW5kIHNldHRpbmcgb2YgYm90aCBzdGFuZGFyZCBDU1MgcHJvcGVydGllcyBhbmQgQ1NTIHByb3BlcnR5IGhvb2tzLiAqL1xyXG5cdFx0LyogTm90ZTogQSBcIkNTU1wiIHNob3J0aGFuZCBpcyBhbGlhc2VkIHNvIHRoYXQgb3VyIGNvZGUgaXMgZWFzaWVyIHRvIHJlYWQuICovXHJcblx0XHR2YXIgQ1NTID0gVmVsb2NpdHkuQ1NTID0ge1xyXG5cdFx0XHQvKioqKioqKioqKioqKlxyXG5cdFx0XHQgUmVnRXhcclxuXHRcdFx0ICoqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRSZWdFeDoge1xyXG5cdFx0XHRcdGlzSGV4OiAvXiMoW0EtZlxcZF17M30pezEsMn0kL2ksXHJcblx0XHRcdFx0LyogVW53cmFwIGEgcHJvcGVydHkgdmFsdWUncyBzdXJyb3VuZGluZyB0ZXh0LCBlLmcuIFwicmdiYSg0LCAzLCAyLCAxKVwiID09PiBcIjQsIDMsIDIsIDFcIiBhbmQgXCJyZWN0KDRweCAzcHggMnB4IDFweClcIiA9PT4gXCI0cHggM3B4IDJweCAxcHhcIi4gKi9cclxuXHRcdFx0XHR2YWx1ZVVud3JhcDogL15bQS16XStcXCgoLiopXFwpJC9pLFxyXG5cdFx0XHRcdHdyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQ6IC9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/LyxcclxuXHRcdFx0XHQvKiBTcGxpdCBhIG11bHRpLXZhbHVlIHByb3BlcnR5IGludG8gYW4gYXJyYXkgb2Ygc3VidmFsdWVzLCBlLmcuIFwicmdiYSg0LCAzLCAyLCAxKSA0cHggM3B4IDJweCAxcHhcIiA9PT4gWyBcInJnYmEoNCwgMywgMiwgMSlcIiwgXCI0cHhcIiwgXCIzcHhcIiwgXCIycHhcIiwgXCIxcHhcIiBdLiAqL1xyXG5cdFx0XHRcdHZhbHVlU3BsaXQ6IC8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2lnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKipcclxuXHRcdFx0IExpc3RzXHJcblx0XHRcdCAqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRMaXN0czoge1xyXG5cdFx0XHRcdGNvbG9yczogW1wiZmlsbFwiLCBcInN0cm9rZVwiLCBcInN0b3BDb2xvclwiLCBcImNvbG9yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiYm9yZGVyQ29sb3JcIiwgXCJib3JkZXJUb3BDb2xvclwiLCBcImJvcmRlclJpZ2h0Q29sb3JcIiwgXCJib3JkZXJCb3R0b21Db2xvclwiLCBcImJvcmRlckxlZnRDb2xvclwiLCBcIm91dGxpbmVDb2xvclwiXSxcclxuXHRcdFx0XHR0cmFuc2Zvcm1zQmFzZTogW1widHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIiwgXCJzY2FsZVwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJyb3RhdGVaXCJdLFxyXG5cdFx0XHRcdHRyYW5zZm9ybXMzRDogW1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCJ0cmFuc2xhdGVaXCIsIFwic2NhbGVaXCIsIFwicm90YXRlWFwiLCBcInJvdGF0ZVlcIl0sXHJcblx0XHRcdFx0dW5pdHM6IFtcclxuXHRcdFx0XHRcdFwiJVwiLCAvLyByZWxhdGl2ZVxyXG5cdFx0XHRcdFx0XCJlbVwiLCBcImV4XCIsIFwiY2hcIiwgXCJyZW1cIiwgLy8gZm9udCByZWxhdGl2ZVxyXG5cdFx0XHRcdFx0XCJ2d1wiLCBcInZoXCIsIFwidm1pblwiLCBcInZtYXhcIiwgLy8gdmlld3BvcnQgcmVsYXRpdmVcclxuXHRcdFx0XHRcdFwiY21cIiwgXCJtbVwiLCBcIlFcIiwgXCJpblwiLCBcInBjXCIsIFwicHRcIiwgXCJweFwiLCAvLyBhYnNvbHV0ZSBsZW5ndGhzXHJcblx0XHRcdFx0XHRcImRlZ1wiLCBcImdyYWRcIiwgXCJyYWRcIiwgXCJ0dXJuXCIsIC8vIGFuZ2xlc1xyXG5cdFx0XHRcdFx0XCJzXCIsIFwibXNcIiAvLyB0aW1lXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjb2xvck5hbWVzOiB7XHJcblx0XHRcdFx0XHRcImFsaWNlYmx1ZVwiOiBcIjI0MCwyNDgsMjU1XCIsXHJcblx0XHRcdFx0XHRcImFudGlxdWV3aGl0ZVwiOiBcIjI1MCwyMzUsMjE1XCIsXHJcblx0XHRcdFx0XHRcImFxdWFtYXJpbmVcIjogXCIxMjcsMjU1LDIxMlwiLFxyXG5cdFx0XHRcdFx0XCJhcXVhXCI6IFwiMCwyNTUsMjU1XCIsXHJcblx0XHRcdFx0XHRcImF6dXJlXCI6IFwiMjQwLDI1NSwyNTVcIixcclxuXHRcdFx0XHRcdFwiYmVpZ2VcIjogXCIyNDUsMjQ1LDIyMFwiLFxyXG5cdFx0XHRcdFx0XCJiaXNxdWVcIjogXCIyNTUsMjI4LDE5NlwiLFxyXG5cdFx0XHRcdFx0XCJibGFja1wiOiBcIjAsMCwwXCIsXHJcblx0XHRcdFx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiMjU1LDIzNSwyMDVcIixcclxuXHRcdFx0XHRcdFwiYmx1ZXZpb2xldFwiOiBcIjEzOCw0MywyMjZcIixcclxuXHRcdFx0XHRcdFwiYmx1ZVwiOiBcIjAsMCwyNTVcIixcclxuXHRcdFx0XHRcdFwiYnJvd25cIjogXCIxNjUsNDIsNDJcIixcclxuXHRcdFx0XHRcdFwiYnVybHl3b29kXCI6IFwiMjIyLDE4NCwxMzVcIixcclxuXHRcdFx0XHRcdFwiY2FkZXRibHVlXCI6IFwiOTUsMTU4LDE2MFwiLFxyXG5cdFx0XHRcdFx0XCJjaGFydHJldXNlXCI6IFwiMTI3LDI1NSwwXCIsXHJcblx0XHRcdFx0XHRcImNob2NvbGF0ZVwiOiBcIjIxMCwxMDUsMzBcIixcclxuXHRcdFx0XHRcdFwiY29yYWxcIjogXCIyNTUsMTI3LDgwXCIsXHJcblx0XHRcdFx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiMTAwLDE0OSwyMzdcIixcclxuXHRcdFx0XHRcdFwiY29ybnNpbGtcIjogXCIyNTUsMjQ4LDIyMFwiLFxyXG5cdFx0XHRcdFx0XCJjcmltc29uXCI6IFwiMjIwLDIwLDYwXCIsXHJcblx0XHRcdFx0XHRcImN5YW5cIjogXCIwLDI1NSwyNTVcIixcclxuXHRcdFx0XHRcdFwiZGFya2JsdWVcIjogXCIwLDAsMTM5XCIsXHJcblx0XHRcdFx0XHRcImRhcmtjeWFuXCI6IFwiMCwxMzksMTM5XCIsXHJcblx0XHRcdFx0XHRcImRhcmtnb2xkZW5yb2RcIjogXCIxODQsMTM0LDExXCIsXHJcblx0XHRcdFx0XHRcImRhcmtncmF5XCI6IFwiMTY5LDE2OSwxNjlcIixcclxuXHRcdFx0XHRcdFwiZGFya2dyZXlcIjogXCIxNjksMTY5LDE2OVwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrZ3JlZW5cIjogXCIwLDEwMCwwXCIsXHJcblx0XHRcdFx0XHRcImRhcmtraGFraVwiOiBcIjE4OSwxODMsMTA3XCIsXHJcblx0XHRcdFx0XHRcImRhcmttYWdlbnRhXCI6IFwiMTM5LDAsMTM5XCIsXHJcblx0XHRcdFx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiODUsMTA3LDQ3XCIsXHJcblx0XHRcdFx0XHRcImRhcmtvcmFuZ2VcIjogXCIyNTUsMTQwLDBcIixcclxuXHRcdFx0XHRcdFwiZGFya29yY2hpZFwiOiBcIjE1Myw1MCwyMDRcIixcclxuXHRcdFx0XHRcdFwiZGFya3JlZFwiOiBcIjEzOSwwLDBcIixcclxuXHRcdFx0XHRcdFwiZGFya3NhbG1vblwiOiBcIjIzMywxNTAsMTIyXCIsXHJcblx0XHRcdFx0XHRcImRhcmtzZWFncmVlblwiOiBcIjE0MywxODgsMTQzXCIsXHJcblx0XHRcdFx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI3Miw2MSwxMzlcIixcclxuXHRcdFx0XHRcdFwiZGFya3NsYXRlZ3JheVwiOiBcIjQ3LDc5LDc5XCIsXHJcblx0XHRcdFx0XHRcImRhcmt0dXJxdW9pc2VcIjogXCIwLDIwNiwyMDlcIixcclxuXHRcdFx0XHRcdFwiZGFya3Zpb2xldFwiOiBcIjE0OCwwLDIxMVwiLFxyXG5cdFx0XHRcdFx0XCJkZWVwcGlua1wiOiBcIjI1NSwyMCwxNDdcIixcclxuXHRcdFx0XHRcdFwiZGVlcHNreWJsdWVcIjogXCIwLDE5MSwyNTVcIixcclxuXHRcdFx0XHRcdFwiZGltZ3JheVwiOiBcIjEwNSwxMDUsMTA1XCIsXHJcblx0XHRcdFx0XHRcImRpbWdyZXlcIjogXCIxMDUsMTA1LDEwNVwiLFxyXG5cdFx0XHRcdFx0XCJkb2RnZXJibHVlXCI6IFwiMzAsMTQ0LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJmaXJlYnJpY2tcIjogXCIxNzgsMzQsMzRcIixcclxuXHRcdFx0XHRcdFwiZmxvcmFsd2hpdGVcIjogXCIyNTUsMjUwLDI0MFwiLFxyXG5cdFx0XHRcdFx0XCJmb3Jlc3RncmVlblwiOiBcIjM0LDEzOSwzNFwiLFxyXG5cdFx0XHRcdFx0XCJmdWNoc2lhXCI6IFwiMjU1LDAsMjU1XCIsXHJcblx0XHRcdFx0XHRcImdhaW5zYm9yb1wiOiBcIjIyMCwyMjAsMjIwXCIsXHJcblx0XHRcdFx0XHRcImdob3N0d2hpdGVcIjogXCIyNDgsMjQ4LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJnb2xkXCI6IFwiMjU1LDIxNSwwXCIsXHJcblx0XHRcdFx0XHRcImdvbGRlbnJvZFwiOiBcIjIxOCwxNjUsMzJcIixcclxuXHRcdFx0XHRcdFwiZ3JheVwiOiBcIjEyOCwxMjgsMTI4XCIsXHJcblx0XHRcdFx0XHRcImdyZXlcIjogXCIxMjgsMTI4LDEyOFwiLFxyXG5cdFx0XHRcdFx0XCJncmVlbnllbGxvd1wiOiBcIjE3MywyNTUsNDdcIixcclxuXHRcdFx0XHRcdFwiZ3JlZW5cIjogXCIwLDEyOCwwXCIsXHJcblx0XHRcdFx0XHRcImhvbmV5ZGV3XCI6IFwiMjQwLDI1NSwyNDBcIixcclxuXHRcdFx0XHRcdFwiaG90cGlua1wiOiBcIjI1NSwxMDUsMTgwXCIsXHJcblx0XHRcdFx0XHRcImluZGlhbnJlZFwiOiBcIjIwNSw5Miw5MlwiLFxyXG5cdFx0XHRcdFx0XCJpbmRpZ29cIjogXCI3NSwwLDEzMFwiLFxyXG5cdFx0XHRcdFx0XCJpdm9yeVwiOiBcIjI1NSwyNTUsMjQwXCIsXHJcblx0XHRcdFx0XHRcImtoYWtpXCI6IFwiMjQwLDIzMCwxNDBcIixcclxuXHRcdFx0XHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcIjI1NSwyNDAsMjQ1XCIsXHJcblx0XHRcdFx0XHRcImxhdmVuZGVyXCI6IFwiMjMwLDIzMCwyNTBcIixcclxuXHRcdFx0XHRcdFwibGF3bmdyZWVuXCI6IFwiMTI0LDI1MiwwXCIsXHJcblx0XHRcdFx0XHRcImxlbW9uY2hpZmZvblwiOiBcIjI1NSwyNTAsMjA1XCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Ymx1ZVwiOiBcIjE3MywyMTYsMjMwXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Y29yYWxcIjogXCIyNDAsMTI4LDEyOFwiLFxyXG5cdFx0XHRcdFx0XCJsaWdodGN5YW5cIjogXCIyMjQsMjU1LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBcIjI1MCwyNTAsMjEwXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Z3JheVwiOiBcIjIxMSwyMTEsMjExXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Z3JleVwiOiBcIjIxMSwyMTEsMjExXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Z3JlZW5cIjogXCIxNDQsMjM4LDE0NFwiLFxyXG5cdFx0XHRcdFx0XCJsaWdodHBpbmtcIjogXCIyNTUsMTgyLDE5M1wiLFxyXG5cdFx0XHRcdFx0XCJsaWdodHNhbG1vblwiOiBcIjI1NSwxNjAsMTIyXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0c2VhZ3JlZW5cIjogXCIzMiwxNzgsMTcwXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0c2t5Ymx1ZVwiOiBcIjEzNSwyMDYsMjUwXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiMTE5LDEzNiwxNTNcIixcclxuXHRcdFx0XHRcdFwibGlnaHRzdGVlbGJsdWVcIjogXCIxNzYsMTk2LDIyMlwiLFxyXG5cdFx0XHRcdFx0XCJsaWdodHllbGxvd1wiOiBcIjI1NSwyNTUsMjI0XCIsXHJcblx0XHRcdFx0XHRcImxpbWVncmVlblwiOiBcIjUwLDIwNSw1MFwiLFxyXG5cdFx0XHRcdFx0XCJsaW1lXCI6IFwiMCwyNTUsMFwiLFxyXG5cdFx0XHRcdFx0XCJsaW5lblwiOiBcIjI1MCwyNDAsMjMwXCIsXHJcblx0XHRcdFx0XHRcIm1hZ2VudGFcIjogXCIyNTUsMCwyNTVcIixcclxuXHRcdFx0XHRcdFwibWFyb29uXCI6IFwiMTI4LDAsMFwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFwiMTAyLDIwNSwxNzBcIixcclxuXHRcdFx0XHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAsMCwyMDVcIixcclxuXHRcdFx0XHRcdFwibWVkaXVtb3JjaGlkXCI6IFwiMTg2LDg1LDIxMVwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1wdXJwbGVcIjogXCIxNDcsMTEyLDIxOVwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjYwLDE3OSwxMTNcIixcclxuXHRcdFx0XHRcdFwibWVkaXVtc2xhdGVibHVlXCI6IFwiMTIzLDEwNCwyMzhcIixcclxuXHRcdFx0XHRcdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogXCIwLDI1MCwxNTRcIixcclxuXHRcdFx0XHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNzIsMjA5LDIwNFwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW12aW9sZXRyZWRcIjogXCIxOTksMjEsMTMzXCIsXHJcblx0XHRcdFx0XHRcIm1pZG5pZ2h0Ymx1ZVwiOiBcIjI1LDI1LDExMlwiLFxyXG5cdFx0XHRcdFx0XCJtaW50Y3JlYW1cIjogXCIyNDUsMjU1LDI1MFwiLFxyXG5cdFx0XHRcdFx0XCJtaXN0eXJvc2VcIjogXCIyNTUsMjI4LDIyNVwiLFxyXG5cdFx0XHRcdFx0XCJtb2NjYXNpblwiOiBcIjI1NSwyMjgsMTgxXCIsXHJcblx0XHRcdFx0XHRcIm5hdmFqb3doaXRlXCI6IFwiMjU1LDIyMiwxNzNcIixcclxuXHRcdFx0XHRcdFwibmF2eVwiOiBcIjAsMCwxMjhcIixcclxuXHRcdFx0XHRcdFwib2xkbGFjZVwiOiBcIjI1MywyNDUsMjMwXCIsXHJcblx0XHRcdFx0XHRcIm9saXZlZHJhYlwiOiBcIjEwNywxNDIsMzVcIixcclxuXHRcdFx0XHRcdFwib2xpdmVcIjogXCIxMjgsMTI4LDBcIixcclxuXHRcdFx0XHRcdFwib3JhbmdlcmVkXCI6IFwiMjU1LDY5LDBcIixcclxuXHRcdFx0XHRcdFwib3JhbmdlXCI6IFwiMjU1LDE2NSwwXCIsXHJcblx0XHRcdFx0XHRcIm9yY2hpZFwiOiBcIjIxOCwxMTIsMjE0XCIsXHJcblx0XHRcdFx0XHRcInBhbGVnb2xkZW5yb2RcIjogXCIyMzgsMjMyLDE3MFwiLFxyXG5cdFx0XHRcdFx0XCJwYWxlZ3JlZW5cIjogXCIxNTIsMjUxLDE1MlwiLFxyXG5cdFx0XHRcdFx0XCJwYWxldHVycXVvaXNlXCI6IFwiMTc1LDIzOCwyMzhcIixcclxuXHRcdFx0XHRcdFwicGFsZXZpb2xldHJlZFwiOiBcIjIxOSwxMTIsMTQ3XCIsXHJcblx0XHRcdFx0XHRcInBhcGF5YXdoaXBcIjogXCIyNTUsMjM5LDIxM1wiLFxyXG5cdFx0XHRcdFx0XCJwZWFjaHB1ZmZcIjogXCIyNTUsMjE4LDE4NVwiLFxyXG5cdFx0XHRcdFx0XCJwZXJ1XCI6IFwiMjA1LDEzMyw2M1wiLFxyXG5cdFx0XHRcdFx0XCJwaW5rXCI6IFwiMjU1LDE5MiwyMDNcIixcclxuXHRcdFx0XHRcdFwicGx1bVwiOiBcIjIyMSwxNjAsMjIxXCIsXHJcblx0XHRcdFx0XHRcInBvd2RlcmJsdWVcIjogXCIxNzYsMjI0LDIzMFwiLFxyXG5cdFx0XHRcdFx0XCJwdXJwbGVcIjogXCIxMjgsMCwxMjhcIixcclxuXHRcdFx0XHRcdFwicmVkXCI6IFwiMjU1LDAsMFwiLFxyXG5cdFx0XHRcdFx0XCJyb3N5YnJvd25cIjogXCIxODgsMTQzLDE0M1wiLFxyXG5cdFx0XHRcdFx0XCJyb3lhbGJsdWVcIjogXCI2NSwxMDUsMjI1XCIsXHJcblx0XHRcdFx0XHRcInNhZGRsZWJyb3duXCI6IFwiMTM5LDY5LDE5XCIsXHJcblx0XHRcdFx0XHRcInNhbG1vblwiOiBcIjI1MCwxMjgsMTE0XCIsXHJcblx0XHRcdFx0XHRcInNhbmR5YnJvd25cIjogXCIyNDQsMTY0LDk2XCIsXHJcblx0XHRcdFx0XHRcInNlYWdyZWVuXCI6IFwiNDYsMTM5LDg3XCIsXHJcblx0XHRcdFx0XHRcInNlYXNoZWxsXCI6IFwiMjU1LDI0NSwyMzhcIixcclxuXHRcdFx0XHRcdFwic2llbm5hXCI6IFwiMTYwLDgyLDQ1XCIsXHJcblx0XHRcdFx0XHRcInNpbHZlclwiOiBcIjE5MiwxOTIsMTkyXCIsXHJcblx0XHRcdFx0XHRcInNreWJsdWVcIjogXCIxMzUsMjA2LDIzNVwiLFxyXG5cdFx0XHRcdFx0XCJzbGF0ZWJsdWVcIjogXCIxMDYsOTAsMjA1XCIsXHJcblx0XHRcdFx0XHRcInNsYXRlZ3JheVwiOiBcIjExMiwxMjgsMTQ0XCIsXHJcblx0XHRcdFx0XHRcInNub3dcIjogXCIyNTUsMjUwLDI1MFwiLFxyXG5cdFx0XHRcdFx0XCJzcHJpbmdncmVlblwiOiBcIjAsMjU1LDEyN1wiLFxyXG5cdFx0XHRcdFx0XCJzdGVlbGJsdWVcIjogXCI3MCwxMzAsMTgwXCIsXHJcblx0XHRcdFx0XHRcInRhblwiOiBcIjIxMCwxODAsMTQwXCIsXHJcblx0XHRcdFx0XHRcInRlYWxcIjogXCIwLDEyOCwxMjhcIixcclxuXHRcdFx0XHRcdFwidGhpc3RsZVwiOiBcIjIxNiwxOTEsMjE2XCIsXHJcblx0XHRcdFx0XHRcInRvbWF0b1wiOiBcIjI1NSw5OSw3MVwiLFxyXG5cdFx0XHRcdFx0XCJ0dXJxdW9pc2VcIjogXCI2NCwyMjQsMjA4XCIsXHJcblx0XHRcdFx0XHRcInZpb2xldFwiOiBcIjIzOCwxMzAsMjM4XCIsXHJcblx0XHRcdFx0XHRcIndoZWF0XCI6IFwiMjQ1LDIyMiwxNzlcIixcclxuXHRcdFx0XHRcdFwid2hpdGVzbW9rZVwiOiBcIjI0NSwyNDUsMjQ1XCIsXHJcblx0XHRcdFx0XHRcIndoaXRlXCI6IFwiMjU1LDI1NSwyNTVcIixcclxuXHRcdFx0XHRcdFwieWVsbG93Z3JlZW5cIjogXCIxNTQsMjA1LDUwXCIsXHJcblx0XHRcdFx0XHRcInllbGxvd1wiOiBcIjI1NSwyNTUsMFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKioqKioqKioqKioqXHJcblx0XHRcdCBIb29rc1xyXG5cdFx0XHQgKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogSG9va3MgYWxsb3cgYSBzdWJwcm9wZXJ0eSAoZS5nLiBcImJveFNoYWRvd0JsdXJcIikgb2YgYSBjb21wb3VuZC12YWx1ZSBDU1MgcHJvcGVydHlcclxuXHRcdFx0IChlLmcuIFwiYm94U2hhZG93OiBYIFkgQmx1ciBTcHJlYWQgQ29sb3JcIikgdG8gYmUgYW5pbWF0ZWQgYXMgaWYgaXQgd2VyZSBhIGRpc2NyZXRlIHByb3BlcnR5LiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBCZXlvbmQgZW5hYmxpbmcgZmluZS1ncmFpbmVkIHByb3BlcnR5IGFuaW1hdGlvbiwgaG9va2luZyBpcyBuZWNlc3Nhcnkgc2luY2UgVmVsb2NpdHkgb25seVxyXG5cdFx0XHQgdHdlZW5zIHByb3BlcnRpZXMgd2l0aCBzaW5nbGUgbnVtZXJpYyB2YWx1ZXM7IHVubGlrZSBDU1MgdHJhbnNpdGlvbnMsIFZlbG9jaXR5IGRvZXMgbm90IGludGVycG9sYXRlIGNvbXBvdW5kLXZhbHVlcy4gKi9cclxuXHRcdFx0SG9va3M6IHtcclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgUmVnaXN0cmF0aW9uXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKiBUZW1wbGF0ZXMgYXJlIGEgY29uY2lzZSB3YXkgb2YgaW5kaWNhdGluZyB3aGljaCBzdWJwcm9wZXJ0aWVzIG11c3QgYmUgaW5kaXZpZHVhbGx5IHJlZ2lzdGVyZWQgZm9yIGVhY2ggY29tcG91bmQtdmFsdWUgQ1NTIHByb3BlcnR5LiAqL1xyXG5cdFx0XHRcdC8qIEVhY2ggdGVtcGxhdGUgY29uc2lzdHMgb2YgdGhlIGNvbXBvdW5kLXZhbHVlJ3MgYmFzZSBuYW1lLCBpdHMgY29uc3RpdHVlbnQgc3VicHJvcGVydHkgbmFtZXMsIGFuZCB0aG9zZSBzdWJwcm9wZXJ0aWVzJyBkZWZhdWx0IHZhbHVlcy4gKi9cclxuXHRcdFx0XHR0ZW1wbGF0ZXM6IHtcclxuXHRcdFx0XHRcdFwidGV4dFNoYWRvd1wiOiBbXCJDb2xvciBYIFkgQmx1clwiLCBcImJsYWNrIDBweCAwcHggMHB4XCJdLFxyXG5cdFx0XHRcdFx0XCJib3hTaGFkb3dcIjogW1wiQ29sb3IgWCBZIEJsdXIgU3ByZWFkXCIsIFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLFxyXG5cdFx0XHRcdFx0XCJjbGlwXCI6IFtcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLCBcIjBweCAwcHggMHB4IDBweFwiXSxcclxuXHRcdFx0XHRcdFwiYmFja2dyb3VuZFBvc2l0aW9uXCI6IFtcIlggWVwiLCBcIjAlIDAlXCJdLFxyXG5cdFx0XHRcdFx0XCJ0cmFuc2Zvcm1PcmlnaW5cIjogW1wiWCBZIFpcIiwgXCI1MCUgNTAlIDBweFwiXSxcclxuXHRcdFx0XHRcdFwicGVyc3BlY3RpdmVPcmlnaW5cIjogW1wiWCBZXCIsIFwiNTAlIDUwJVwiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogQSBcInJlZ2lzdGVyZWRcIiBob29rIGlzIG9uZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCBmcm9tIGl0cyB0ZW1wbGF0ZSBmb3JtIGludG8gYSBsaXZlLFxyXG5cdFx0XHRcdCB0d2VlbmFibGUgcHJvcGVydHkuIEl0IGNvbnRhaW5zIGRhdGEgdG8gYXNzb2NpYXRlIGl0IHdpdGggaXRzIHJvb3QgcHJvcGVydHkuICovXHJcblx0XHRcdFx0cmVnaXN0ZXJlZDoge1xyXG5cdFx0XHRcdFx0LyogTm90ZTogQSByZWdpc3RlcmVkIGhvb2sgbG9va3MgbGlrZSB0aGlzID09PiB0ZXh0U2hhZG93Qmx1cjogWyBcInRleHRTaGFkb3dcIiwgMyBdLFxyXG5cdFx0XHRcdFx0IHdoaWNoIGNvbnNpc3RzIG9mIHRoZSBzdWJwcm9wZXJ0eSdzIG5hbWUsIHRoZSBhc3NvY2lhdGVkIHJvb3QgcHJvcGVydHkncyBuYW1lLFxyXG5cdFx0XHRcdFx0IGFuZCB0aGUgc3VicHJvcGVydHkncyBwb3NpdGlvbiBpbiB0aGUgcm9vdCdzIHZhbHVlLiAqL1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogQ29udmVydCB0aGUgdGVtcGxhdGVzIGludG8gaW5kaXZpZHVhbCBob29rcyB0aGVuIGFwcGVuZCB0aGVtIHRvIHRoZSByZWdpc3RlcmVkIG9iamVjdCBhYm92ZS4gKi9cclxuXHRcdFx0XHRyZWdpc3RlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvKiBDb2xvciBob29rcyByZWdpc3RyYXRpb246IENvbG9ycyBhcmUgZGVmYXVsdGVkIHRvIHdoaXRlIC0tIGFzIG9wcG9zZWQgdG8gYmxhY2sgLS0gc2luY2UgY29sb3JzIHRoYXQgYXJlXHJcblx0XHRcdFx0XHQgY3VycmVudGx5IHNldCB0byBcInRyYW5zcGFyZW50XCIgZGVmYXVsdCB0byB0aGVpciByZXNwZWN0aXZlIHRlbXBsYXRlIGJlbG93IHdoZW4gY29sb3ItYW5pbWF0ZWQsXHJcblx0XHRcdFx0XHQgYW5kIHdoaXRlIGlzIHR5cGljYWxseSBhIGNsb3NlciBtYXRjaCB0byB0cmFuc3BhcmVudCB0aGFuIGJsYWNrIGlzLiBBbiBleGNlcHRpb24gaXMgbWFkZSBmb3IgdGV4dCAoXCJjb2xvclwiKSxcclxuXHRcdFx0XHRcdCB3aGljaCBpcyBhbG1vc3QgYWx3YXlzIHNldCBjbG9zZXIgdG8gYmxhY2sgdGhhbiB3aGl0ZS4gKi9cclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQ1NTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiQ29tcG9uZW50cyA9IChDU1MuTGlzdHMuY29sb3JzW2ldID09PSBcImNvbG9yXCIpID8gXCIwIDAgMCAxXCIgOiBcIjI1NSAyNTUgMjU1IDFcIjtcclxuXHRcdFx0XHRcdFx0Q1NTLkhvb2tzLnRlbXBsYXRlc1tDU1MuTGlzdHMuY29sb3JzW2ldXSA9IFtcIlJlZCBHcmVlbiBCbHVlIEFscGhhXCIsIHJnYkNvbXBvbmVudHNdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciByb290UHJvcGVydHksXHJcblx0XHRcdFx0XHRcdFx0aG9va1RlbXBsYXRlLFxyXG5cdFx0XHRcdFx0XHRcdGhvb2tOYW1lcztcclxuXHJcblx0XHRcdFx0XHQvKiBJbiBJRSwgY29sb3IgdmFsdWVzIGluc2lkZSBjb21wb3VuZC12YWx1ZSBwcm9wZXJ0aWVzIGFyZSBwb3NpdGlvbmVkIGF0IHRoZSBlbmQgdGhlIHZhbHVlIGluc3RlYWQgb2YgYXQgdGhlIGJlZ2lubmluZy5cclxuXHRcdFx0XHRcdCBUaHVzLCB3ZSByZS1hcnJhbmdlIHRoZSB0ZW1wbGF0ZXMgYWNjb3JkaW5nbHkuICovXHJcblx0XHRcdFx0XHRpZiAoSUUpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChyb290UHJvcGVydHkgaW4gQ1NTLkhvb2tzLnRlbXBsYXRlcykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghQ1NTLkhvb2tzLnRlbXBsYXRlcy5oYXNPd25Qcm9wZXJ0eShyb290UHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aG9va1RlbXBsYXRlID0gQ1NTLkhvb2tzLnRlbXBsYXRlc1tyb290UHJvcGVydHldO1xyXG5cdFx0XHRcdFx0XHRcdGhvb2tOYW1lcyA9IGhvb2tUZW1wbGF0ZVswXS5zcGxpdChcIiBcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZWZhdWx0VmFsdWVzID0gaG9va1RlbXBsYXRlWzFdLm1hdGNoKENTUy5SZWdFeC52YWx1ZVNwbGl0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGhvb2tOYW1lc1swXSA9PT0gXCJDb2xvclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBSZXBvc2l0aW9uIGJvdGggdGhlIGhvb2sncyBuYW1lIGFuZCBpdHMgZGVmYXVsdCB2YWx1ZSB0byB0aGUgZW5kIG9mIHRoZWlyIHJlc3BlY3RpdmUgc3RyaW5ncy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGhvb2tOYW1lcy5wdXNoKGhvb2tOYW1lcy5zaGlmdCgpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZXMucHVzaChkZWZhdWx0VmFsdWVzLnNoaWZ0KCkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFJlcGxhY2UgdGhlIGV4aXN0aW5nIHRlbXBsYXRlIGZvciB0aGUgaG9vaydzIHJvb3QgcHJvcGVydHkuICovXHJcblx0XHRcdFx0XHRcdFx0XHRDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV0gPSBbaG9va05hbWVzLmpvaW4oXCIgXCIpLCBkZWZhdWx0VmFsdWVzLmpvaW4oXCIgXCIpXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBIb29rIHJlZ2lzdHJhdGlvbi4gKi9cclxuXHRcdFx0XHRcdGZvciAocm9vdFByb3BlcnR5IGluIENTUy5Ib29rcy50ZW1wbGF0ZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFDU1MuSG9va3MudGVtcGxhdGVzLmhhc093blByb3BlcnR5KHJvb3RQcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRob29rVGVtcGxhdGUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdGhvb2tOYW1lcyA9IGhvb2tUZW1wbGF0ZVswXS5zcGxpdChcIiBcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqIGluIGhvb2tOYW1lcykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghaG9va05hbWVzLmhhc093blByb3BlcnR5KGopKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dmFyIGZ1bGxIb29rTmFtZSA9IHJvb3RQcm9wZXJ0eSArIGhvb2tOYW1lc1tqXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aG9va1Bvc2l0aW9uID0gajtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogRm9yIGVhY2ggaG9vaywgcmVnaXN0ZXIgaXRzIGZ1bGwgbmFtZSAoZS5nLiB0ZXh0U2hhZG93Qmx1cikgd2l0aCBpdHMgcm9vdCBwcm9wZXJ0eSAoZS5nLiB0ZXh0U2hhZG93KVxyXG5cdFx0XHRcdFx0XHRcdCBhbmQgdGhlIGhvb2sncyBwb3NpdGlvbiBpbiBpdHMgdGVtcGxhdGUncyBkZWZhdWx0IHZhbHVlIHN0cmluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRDU1MuSG9va3MucmVnaXN0ZXJlZFtmdWxsSG9va05hbWVdID0gW3Jvb3RQcm9wZXJ0eSwgaG9va1Bvc2l0aW9uXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IEluamVjdGlvbiBhbmQgRXh0cmFjdGlvblxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogTG9vayB1cCB0aGUgcm9vdCBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggdGhlIGhvb2sgKGUuZy4gcmV0dXJuIFwidGV4dFNoYWRvd1wiIGZvciBcInRleHRTaGFkb3dCbHVyXCIpLiAqL1xyXG5cdFx0XHRcdC8qIFNpbmNlIGEgaG9vayBjYW5ub3QgYmUgc2V0IGRpcmVjdGx5ICh0aGUgYnJvd3NlciB3b24ndCByZWNvZ25pemUgaXQpLCBzdHlsZSB1cGRhdGluZyBmb3IgaG9va3MgaXMgcm91dGVkIHRocm91Z2ggdGhlIGhvb2sncyByb290IHByb3BlcnR5LiAqL1xyXG5cdFx0XHRcdGdldFJvb3Q6IGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHR2YXIgaG9va0RhdGEgPSBDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhvb2tEYXRhKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBob29rRGF0YVswXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8qIElmIHRoZXJlIHdhcyBubyBob29rIG1hdGNoLCByZXR1cm4gdGhlIHByb3BlcnR5IG5hbWUgdW50b3VjaGVkLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRVbml0OiBmdW5jdGlvbihzdHIsIHN0YXJ0KSB7XHJcblx0XHRcdFx0XHR2YXIgdW5pdCA9IChzdHIuc3Vic3RyKHN0YXJ0IHx8IDAsIDUpLm1hdGNoKC9eW2EteiVdKy8pIHx8IFtdKVswXSB8fCBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdGlmICh1bml0ICYmIF9pbkFycmF5KENTUy5MaXN0cy51bml0cywgdW5pdCkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaXQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZpeENvbG9yczogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhyZ2JhP1xcKFxccyopPyhcXGJbYS16XStcXGIpL2csIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKENTUy5MaXN0cy5jb2xvck5hbWVzLmhhc093blByb3BlcnR5KCQyKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoJDEgPyAkMSA6IFwicmdiYShcIikgKyBDU1MuTGlzdHMuY29sb3JOYW1lc1skMl0gKyAoJDEgPyBcIlwiIDogXCIsMSlcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuICQxICsgJDI7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIENvbnZlcnQgYW55IHJvb3RQcm9wZXJ0eVZhbHVlLCBudWxsIG9yIG90aGVyd2lzZSwgaW50byBhIHNwYWNlLWRlbGltaXRlZCBsaXN0IG9mIGhvb2sgdmFsdWVzIHNvIHRoYXRcclxuXHRcdFx0XHQgdGhlIHRhcmdldGVkIGhvb2sgY2FuIGJlIGluamVjdGVkIG9yIGV4dHJhY3RlZCBhdCBpdHMgc3RhbmRhcmQgcG9zaXRpb24uICovXHJcblx0XHRcdFx0Y2xlYW5Sb290UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24ocm9vdFByb3BlcnR5LCByb290UHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0LyogSWYgdGhlIHJvb3RQcm9wZXJ0eVZhbHVlIGlzIHdyYXBwZWQgd2l0aCBcInJnYigpXCIsIFwiY2xpcCgpXCIsIGV0Yy4sIHJlbW92ZSB0aGUgd3JhcHBpbmcgdG8gbm9ybWFsaXplIHRoZSB2YWx1ZSBiZWZvcmUgbWFuaXB1bGF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0aWYgKENTUy5SZWdFeC52YWx1ZVVud3JhcC50ZXN0KHJvb3RQcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IHJvb3RQcm9wZXJ0eVZhbHVlLm1hdGNoKENTUy5SZWdFeC52YWx1ZVVud3JhcClbMV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgcm9vdFByb3BlcnR5VmFsdWUgaXMgYSBDU1MgbnVsbC12YWx1ZSAoZnJvbSB3aGljaCB0aGVyZSdzIGluaGVyZW50bHkgbm8gaG9vayB2YWx1ZSB0byBleHRyYWN0KSxcclxuXHRcdFx0XHRcdCBkZWZhdWx0IHRvIHRoZSByb290J3MgZGVmYXVsdCB2YWx1ZSBhcyBkZWZpbmVkIGluIENTUy5Ib29rcy50ZW1wbGF0ZXMuICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBDU1MgbnVsbC12YWx1ZXMgaW5jbHVkZSBcIm5vbmVcIiwgXCJhdXRvXCIsIGFuZCBcInRyYW5zcGFyZW50XCIuIFRoZXkgbXVzdCBiZSBjb252ZXJ0ZWQgaW50byB0aGVpclxyXG5cdFx0XHRcdFx0IHplcm8tdmFsdWVzIChlLmcuIHRleHRTaGFkb3c6IFwibm9uZVwiID09PiB0ZXh0U2hhZG93OiBcIjBweCAwcHggMHB4IGJsYWNrXCIpIGZvciBob29rIG1hbmlwdWxhdGlvbiB0byBwcm9jZWVkLiAqL1xyXG5cdFx0XHRcdFx0aWYgKENTUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUocm9vdFByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLnRlbXBsYXRlc1tyb290UHJvcGVydHldWzFdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiByb290UHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIEV4dHJhY3RlZCB0aGUgaG9vaydzIHZhbHVlIGZyb20gaXRzIHJvb3QgcHJvcGVydHkncyB2YWx1ZS4gVGhpcyBpcyB1c2VkIHRvIGdldCB0aGUgc3RhcnRpbmcgdmFsdWUgb2YgYW4gYW5pbWF0aW5nIGhvb2suICovXHJcblx0XHRcdFx0ZXh0cmFjdFZhbHVlOiBmdW5jdGlvbihmdWxsSG9va05hbWUsIHJvb3RQcm9wZXJ0eVZhbHVlKSB7XHJcblx0XHRcdFx0XHR2YXIgaG9va0RhdGEgPSBDU1MuSG9va3MucmVnaXN0ZXJlZFtmdWxsSG9va05hbWVdO1xyXG5cclxuXHRcdFx0XHRcdGlmIChob29rRGF0YSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgaG9va1Jvb3QgPSBob29rRGF0YVswXSxcclxuXHRcdFx0XHRcdFx0XHRcdGhvb2tQb3NpdGlvbiA9IGhvb2tEYXRhWzFdO1xyXG5cclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShob29rUm9vdCwgcm9vdFByb3BlcnR5VmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogU3BsaXQgcm9vdFByb3BlcnR5VmFsdWUgaW50byBpdHMgY29uc3RpdHVlbnQgaG9vayB2YWx1ZXMgdGhlbiBncmFiIHRoZSBkZXNpcmVkIGhvb2sgYXQgaXRzIHN0YW5kYXJkIHBvc2l0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaChDU1MuUmVnRXgudmFsdWVTcGxpdClbaG9va1Bvc2l0aW9uXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8qIElmIHRoZSBwcm92aWRlZCBmdWxsSG9va05hbWUgaXNuJ3QgYSByZWdpc3RlcmVkIGhvb2ssIHJldHVybiB0aGUgcm9vdFByb3BlcnR5VmFsdWUgdGhhdCB3YXMgcGFzc2VkIGluLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBJbmplY3QgdGhlIGhvb2sncyB2YWx1ZSBpbnRvIGl0cyByb290IHByb3BlcnR5J3MgdmFsdWUuIFRoaXMgaXMgdXNlZCB0byBwaWVjZSBiYWNrIHRvZ2V0aGVyIHRoZSByb290IHByb3BlcnR5XHJcblx0XHRcdFx0IG9uY2UgVmVsb2NpdHkgaGFzIHVwZGF0ZWQgb25lIG9mIGl0cyBpbmRpdmlkdWFsbHkgaG9va2VkIHZhbHVlcyB0aHJvdWdoIHR3ZWVuaW5nLiAqL1xyXG5cdFx0XHRcdGluamVjdFZhbHVlOiBmdW5jdGlvbihmdWxsSG9va05hbWUsIGhvb2tWYWx1ZSwgcm9vdFByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdHZhciBob29rRGF0YSA9IENTUy5Ib29rcy5yZWdpc3RlcmVkW2Z1bGxIb29rTmFtZV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhvb2tEYXRhKSB7XHJcblx0XHRcdFx0XHRcdHZhciBob29rUm9vdCA9IGhvb2tEYXRhWzBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aG9va1Bvc2l0aW9uID0gaG9va0RhdGFbMV0sXHJcblx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZVBhcnRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWVVcGRhdGVkO1xyXG5cclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShob29rUm9vdCwgcm9vdFByb3BlcnR5VmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogU3BsaXQgcm9vdFByb3BlcnR5VmFsdWUgaW50byBpdHMgaW5kaXZpZHVhbCBob29rIHZhbHVlcywgcmVwbGFjZSB0aGUgdGFyZ2V0ZWQgdmFsdWUgd2l0aCBob29rVmFsdWUsXHJcblx0XHRcdFx0XHRcdCB0aGVuIHJlY29uc3RydWN0IHRoZSByb290UHJvcGVydHlWYWx1ZSBzdHJpbmcuICovXHJcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMgPSByb290UHJvcGVydHlWYWx1ZS50b1N0cmluZygpLm1hdGNoKENTUy5SZWdFeC52YWx1ZVNwbGl0KTtcclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWVQYXJ0c1tob29rUG9zaXRpb25dID0gaG9va1ZhbHVlO1xyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZVVwZGF0ZWQgPSByb290UHJvcGVydHlWYWx1ZVBhcnRzLmpvaW4oXCIgXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvb3RQcm9wZXJ0eVZhbHVlVXBkYXRlZDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8qIElmIHRoZSBwcm92aWRlZCBmdWxsSG9va05hbWUgaXNuJ3QgYSByZWdpc3RlcmVkIGhvb2ssIHJldHVybiB0aGUgcm9vdFByb3BlcnR5VmFsdWUgdGhhdCB3YXMgcGFzc2VkIGluLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgTm9ybWFsaXphdGlvbnNcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBOb3JtYWxpemF0aW9ucyBzdGFuZGFyZGl6ZSBDU1MgcHJvcGVydHkgbWFuaXB1bGF0aW9uIGJ5IHBvbGx5ZmlsbGluZyBicm93c2VyLXNwZWNpZmljIGltcGxlbWVudGF0aW9ucyAoZS5nLiBvcGFjaXR5KVxyXG5cdFx0XHQgYW5kIHJlZm9ybWF0dGluZyBzcGVjaWFsIHByb3BlcnRpZXMgKGUuZy4gY2xpcCwgcmdiYSkgdG8gbG9vayBsaWtlIHN0YW5kYXJkIG9uZXMuICovXHJcblx0XHRcdE5vcm1hbGl6YXRpb25zOiB7XHJcblx0XHRcdFx0LyogTm9ybWFsaXphdGlvbnMgYXJlIHBhc3NlZCBhIG5vcm1hbGl6YXRpb24gdGFyZ2V0IChlaXRoZXIgdGhlIHByb3BlcnR5J3MgbmFtZSwgaXRzIGV4dHJhY3RlZCB2YWx1ZSwgb3IgaXRzIGluamVjdGVkIHZhbHVlKSxcclxuXHRcdFx0XHQgdGhlIHRhcmdldGVkIGVsZW1lbnQgKHdoaWNoIG1heSBuZWVkIHRvIGJlIHF1ZXJpZWQpLCBhbmQgdGhlIHRhcmdldGVkIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdFx0XHRcdHJlZ2lzdGVyZWQ6IHtcclxuXHRcdFx0XHRcdGNsaXA6IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImNsaXBcIjtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIENsaXAgbmVlZHMgdG8gYmUgdW53cmFwcGVkIGFuZCBzdHJpcHBlZCBvZiBpdHMgY29tbWFzIGR1cmluZyBleHRyYWN0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIFZlbG9jaXR5IGFsc28gZXh0cmFjdGVkIHRoaXMgdmFsdWUsIHNraXAgZXh0cmFjdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlIFwicmVjdCgpXCIgd3JhcHBlci4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gcHJvcGVydHlWYWx1ZS50b1N0cmluZygpLm1hdGNoKENTUy5SZWdFeC52YWx1ZVVud3JhcCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBTdHJpcCBvZmYgY29tbWFzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSBleHRyYWN0ZWQgPyBleHRyYWN0ZWRbMV0ucmVwbGFjZSgvLChcXHMrKT8vZywgXCIgXCIpIDogcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXh0cmFjdGVkO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xpcCBuZWVkcyB0byBiZSByZS13cmFwcGVkIGR1cmluZyBpbmplY3Rpb24uICovXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwicmVjdChcIiArIHByb3BlcnR5VmFsdWUgKyBcIilcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJsdXI6IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBWZWxvY2l0eS5TdGF0ZS5pc0ZpcmVmb3ggPyBcImZpbHRlclwiIDogXCItd2Via2l0LWZpbHRlclwiO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkID0gcGFyc2VGbG9hdChwcm9wZXJ0eVZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBJZiBleHRyYWN0ZWQgaXMgTmFOLCBtZWFuaW5nIHRoZSB2YWx1ZSBpc24ndCBhbHJlYWR5IGV4dHJhY3RlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmICghKGV4dHJhY3RlZCB8fCBleHRyYWN0ZWQgPT09IDApKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBibHVyQ29tcG9uZW50ID0gcHJvcGVydHlWYWx1ZS50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgZmlsdGVyIHN0cmluZyBoYWQgYSBibHVyIGNvbXBvbmVudCwgcmV0dXJuIGp1c3QgdGhlIGJsdXIgdmFsdWUgYW5kIHVuaXQgdHlwZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGJsdXJDb21wb25lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSBibHVyQ29tcG9uZW50WzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBleGlzdCwgZGVmYXVsdCBibHVyIHRvIDAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBleHRyYWN0ZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBCbHVyIG5lZWRzIHRvIGJlIHJlLXdyYXBwZWQgZHVyaW5nIGluamVjdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgdGhlIGJsdXIgZWZmZWN0IHRvIGJlIGZ1bGx5IGRlLWFwcGxpZWQsIGl0IG5lZWRzIHRvIGJlIHNldCB0byBcIm5vbmVcIiBpbnN0ZWFkIG9mIDAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwibm9uZVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiYmx1cihcIiArIHByb3BlcnR5VmFsdWUgKyBcIilcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8qIDw9SUU4IGRvIG5vdCBzdXBwb3J0IHRoZSBzdGFuZGFyZCBvcGFjaXR5IHByb3BlcnR5LiBUaGV5IHVzZSBmaWx0ZXI6YWxwaGEob3BhY2l0eT1JTlQpIGluc3RlYWQuICovXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChJRSA8PSA4KSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJmaWx0ZXJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIDw9SUU4IHJldHVybiBhIFwiZmlsdGVyXCIgdmFsdWUgb2YgXCJhbHBoYShvcGFjaXR5PVxcZHsxLDN9KVwiLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgRXh0cmFjdCB0aGUgdmFsdWUgYW5kIGNvbnZlcnQgaXQgdG8gYSBkZWNpbWFsIHZhbHVlIHRvIG1hdGNoIHRoZSBzdGFuZGFyZCBDU1Mgb3BhY2l0eSBwcm9wZXJ0eSdzIGZvcm1hdHRpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBleHRyYWN0ZWQgPSBwcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV4dHJhY3RlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIENvbnZlcnQgdG8gZGVjaW1hbCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gZXh0cmFjdGVkWzFdIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFdoZW4gZXh0cmFjdGluZyBvcGFjaXR5LCBkZWZhdWx0IHRvIDEgc2luY2UgYSBudWxsIHZhbHVlIG1lYW5zIG9wYWNpdHkgaGFzbid0IGJlZW4gc2V0LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogT3BhY2lmaWVkIGVsZW1lbnRzIGFyZSByZXF1aXJlZCB0byBoYXZlIHRoZWlyIHpvb20gcHJvcGVydHkgc2V0IHRvIGEgbm9uLXplcm8gdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuem9vbSA9IDE7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBTZXR0aW5nIHRoZSBmaWx0ZXIgcHJvcGVydHkgb24gZWxlbWVudHMgd2l0aCBjZXJ0YWluIGZvbnQgcHJvcGVydHkgY29tYmluYXRpb25zIGNhbiByZXN1bHQgaW4gYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgaGlnaGx5IHVuYXBwZWFsaW5nIHVsdHJhLWJvbGRpbmcgZWZmZWN0LiBUaGVyZSdzIG5vIHdheSB0byByZW1lZHkgdGhpcyB0aHJvdWdob3V0IGEgdHdlZW4sIGJ1dCBkcm9wcGluZyB0aGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlIGFsdG9nZXRoZXIgKHdoZW4gb3BhY2l0eSBoaXRzIDEpIGF0IGxlYXN0cyBlbnN1cmVzIHRoYXQgdGhlIGdsaXRjaCBpcyBnb25lIHBvc3QtdHdlZW5pbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpID49IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBBcyBwZXIgdGhlIGZpbHRlciBwcm9wZXJ0eSdzIHNwZWMsIGNvbnZlcnQgdGhlIGRlY2ltYWwgdmFsdWUgdG8gYSB3aG9sZSBudW1iZXIgYW5kIHdyYXAgdGhlIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImFscGhhKG9wYWNpdHk9XCIgKyBwYXJzZUludChwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpICogMTAwLCAxMCkgKyBcIilcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvKiBXaXRoIGFsbCBvdGhlciBicm93c2Vycywgbm9ybWFsaXphdGlvbiBpcyBub3QgcmVxdWlyZWQ7IHJldHVybiB0aGUgc2FtZSB2YWx1ZXMgdGhhdCB3ZXJlIHBhc3NlZCBpbi4gKi9cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIm9wYWNpdHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBCYXRjaGVkIFJlZ2lzdHJhdGlvbnNcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIE5vdGU6IEJhdGNoZWQgbm9ybWFsaXphdGlvbnMgZXh0ZW5kIHRoZSBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZCBvYmplY3QuICovXHJcblx0XHRcdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IFRyYW5zZm9ybXNcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm1zIGFyZSB0aGUgc3VicHJvcGVydGllcyBjb250YWluZWQgYnkgdGhlIENTUyBcInRyYW5zZm9ybVwiIHByb3BlcnR5LiBUcmFuc2Zvcm1zIG11c3QgdW5kZXJnbyBub3JtYWxpemF0aW9uXHJcblx0XHRcdFx0XHQgc28gdGhhdCB0aGV5IGNhbiBiZSByZWZlcmVuY2VkIGluIGEgcHJvcGVydGllcyBtYXAgYnkgdGhlaXIgaW5kaXZpZHVhbCBuYW1lcy4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IFdoZW4gdHJhbnNmb3JtcyBhcmUgXCJzZXRcIiwgdGhleSBhcmUgYWN0dWFsbHkgYXNzaWduZWQgdG8gYSBwZXItZWxlbWVudCB0cmFuc2Zvcm1DYWNoZS4gV2hlbiBhbGwgdHJhbnNmb3JtXHJcblx0XHRcdFx0XHQgc2V0dGluZyBpcyBjb21wbGV0ZSBjb21wbGV0ZSwgQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoKSBtdXN0IGJlIG1hbnVhbGx5IGNhbGxlZCB0byBmbHVzaCB0aGUgdmFsdWVzIHRvIHRoZSBET00uXHJcblx0XHRcdFx0XHQgVHJhbnNmb3JtIHNldHRpbmcgaXMgYmF0Y2hlZCBpbiB0aGlzIHdheSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlOiB0aGUgdHJhbnNmb3JtIHN0eWxlIG9ubHkgbmVlZHMgdG8gYmUgdXBkYXRlZFxyXG5cdFx0XHRcdFx0IG9uY2Ugd2hlbiBtdWx0aXBsZSB0cmFuc2Zvcm0gc3VicHJvcGVydGllcyBhcmUgYmVpbmcgYW5pbWF0ZWQgc2ltdWx0YW5lb3VzbHkuICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBJRTkgYW5kIEFuZHJvaWQgR2luZ2VyYnJlYWQgaGF2ZSBzdXBwb3J0IGZvciAyRCAtLSBidXQgbm90IDNEIC0tIHRyYW5zZm9ybXMuIFNpbmNlIGFuaW1hdGluZyB1bnN1cHBvcnRlZFxyXG5cdFx0XHRcdFx0IHRyYW5zZm9ybSBwcm9wZXJ0aWVzIHJlc3VsdHMgaW4gdGhlIGJyb3dzZXIgaWdub3JpbmcgdGhlICplbnRpcmUqIHRyYW5zZm9ybSBzdHJpbmcsIHdlIHByZXZlbnQgdGhlc2UgM0QgdmFsdWVzXHJcblx0XHRcdFx0XHQgZnJvbSBiZWluZyBub3JtYWxpemVkIGZvciB0aGVzZSBicm93c2VycyBzbyB0aGF0IHR3ZWVuaW5nIHNraXBzIHRoZXNlIHByb3BlcnRpZXMgYWx0b2dldGhlclxyXG5cdFx0XHRcdFx0IChzaW5jZSBpdCB3aWxsIGlnbm9yZSB0aGVtIGFzIGJlaW5nIHVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLikgKi9cclxuXHRcdFx0XHRcdGlmICgoIUlFIHx8IElFID4gOSkgJiYgIVZlbG9jaXR5LlN0YXRlLmlzR2luZ2VyYnJlYWQpIHtcclxuXHRcdFx0XHRcdFx0LyogTm90ZTogU2luY2UgdGhlIHN0YW5kYWxvbmUgQ1NTIFwicGVyc3BlY3RpdmVcIiBwcm9wZXJ0eSBhbmQgdGhlIENTUyB0cmFuc2Zvcm0gXCJwZXJzcGVjdGl2ZVwiIHN1YnByb3BlcnR5XHJcblx0XHRcdFx0XHRcdCBzaGFyZSB0aGUgc2FtZSBuYW1lLCB0aGUgbGF0dGVyIGlzIGdpdmVuIGEgdW5pcXVlIHRva2VuIHdpdGhpbiBWZWxvY2l0eTogXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLiAqL1xyXG5cdFx0XHRcdFx0XHRDU1MuTGlzdHMudHJhbnNmb3Jtc0Jhc2UgPSBDU1MuTGlzdHMudHJhbnNmb3Jtc0Jhc2UuY29uY2F0KENTUy5MaXN0cy50cmFuc2Zvcm1zM0QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQ1NTLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdC8qIFdyYXAgdGhlIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBub3JtYWxpemF0aW9uIGZ1bmN0aW9uIGluIGEgbmV3IHNjb3BlIHNvIHRoYXQgdHJhbnNmb3JtTmFtZSdzIHZhbHVlIGlzXHJcblx0XHRcdFx0XHRcdCBwYWlyZWQgd2l0aCBpdHMgcmVzcGVjdGl2ZSBmdW5jdGlvbi4gKE90aGVyd2lzZSwgYWxsIGZ1bmN0aW9ucyB3b3VsZCB0YWtlIHRoZSBmaW5hbCBmb3IgbG9vcCdzIHRyYW5zZm9ybU5hbWUuKSAqL1xyXG5cdFx0XHRcdFx0XHQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHRyYW5zZm9ybU5hbWUgPSBDU1MuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbaV07XHJcblxyXG5cdFx0XHRcdFx0XHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RyYW5zZm9ybU5hbWVdID0gZnVuY3Rpb24odHlwZSwgZWxlbWVudCwgcHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBub3JtYWxpemVkIHByb3BlcnR5IG5hbWUgaXMgdGhlIHBhcmVudCBcInRyYW5zZm9ybVwiIHByb3BlcnR5IC0tIHRoZSBwcm9wZXJ0eSB0aGF0IGlzIGFjdHVhbGx5IHNldCBpbiBDU1MuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogVHJhbnNmb3JtIHZhbHVlcyBhcmUgY2FjaGVkIG9udG8gYSBwZXItZWxlbWVudCB0cmFuc2Zvcm1DYWNoZSBvYmplY3QuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgdGhpcyB0cmFuc2Zvcm0gaGFzIHlldCB0byBiZSBhc3NpZ25lZCBhIHZhbHVlLCByZXR1cm4gaXRzIG51bGwgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkgPT09IHVuZGVmaW5lZCB8fCBEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFNjYWxlIENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZSBkZWZhdWx0IHRvIDEgd2hlcmVhcyBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BlcnRpZXMgZGVmYXVsdCB0byAwLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIC9ec2NhbGUvaS50ZXN0KHRyYW5zZm9ybU5hbWUpID8gMSA6IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBXaGVuIHRyYW5zZm9ybSB2YWx1ZXMgYXJlIHNldCwgdGhleSBhcmUgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyBhcyBwZXIgdGhlIENTUyBzcGVjLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFRodXMsIHdoZW4gZXh0cmFjdGluZyB0aGVpciB2YWx1ZXMgKGZvciB0d2VlbiBjYWxjdWxhdGlvbnMpLCB3ZSBzdHJpcCBvZmYgdGhlIHBhcmVudGhlc2VzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXS5yZXBsYWNlKC9bKCldL2csIFwiXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGludmFsaWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgYW4gaW5kaXZpZHVhbCB0cmFuc2Zvcm0gcHJvcGVydHkgY29udGFpbnMgYW4gdW5zdXBwb3J0ZWQgdW5pdCB0eXBlLCB0aGUgYnJvd3NlciBpZ25vcmVzIHRoZSAqZW50aXJlKiB0cmFuc2Zvcm0gcHJvcGVydHkuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFRodXMsIHByb3RlY3QgdXNlcnMgZnJvbSB0aGVtc2VsdmVzIGJ5IHNraXBwaW5nIHNldHRpbmcgZm9yIHRyYW5zZm9ybSB2YWx1ZXMgc3VwcGxpZWQgd2l0aCBpbnZhbGlkIHVuaXQgdHlwZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU3dpdGNoIG9uIHRoZSBiYXNlIHRyYW5zZm9ybSB0eXBlOyBpZ25vcmUgdGhlIGF4aXMgYnkgcmVtb3ZpbmcgdGhlIGxhc3QgbGV0dGVyIGZyb20gdGhlIHRyYW5zZm9ybSdzIG5hbWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoICh0cmFuc2Zvcm1OYW1lLnN1YnN0cigwLCB0cmFuc2Zvcm1OYW1lLmxlbmd0aCAtIDEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBXaGl0ZWxpc3QgdW5pdCB0eXBlcyBmb3IgZWFjaCB0cmFuc2Zvcm0uICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwidHJhbnNsYXRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGludmFsaWQgPSAhLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3QocHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTaW5jZSBhbiBheGlzLWZyZWUgXCJzY2FsZVwiIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBhcyB3ZWxsLCBhIGxpdHRsZSBoYWNrIGlzIHVzZWQgaGVyZSB0byBkZXRlY3QgaXQgYnkgY2hvcHBpbmcgb2ZmIGl0cyBsYXN0IGxldHRlci4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJzY2FsXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwic2NhbGVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ2hyb21lIG9uIEFuZHJvaWQgaGFzIGEgYnVnIGluIHdoaWNoIHNjYWxlZCBlbGVtZW50cyBibHVyIGlmIHRoZWlyIGluaXRpYWwgc2NhbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlIGlzIGJlbG93IDEgKHdoaWNoIGNhbiBoYXBwZW4gd2l0aCBmb3JjZWZlZWRpbmcpLiBUaHVzLCB3ZSBkZXRlY3QgYSB5ZXQtdW5zZXQgc2NhbGUgcHJvcGVydHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGFuZCBlbnN1cmUgdGhhdCBpdHMgZmlyc3QgdmFsdWUgaXMgYWx3YXlzIDEuIE1vcmUgaW5mbzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQxNzg5MC9jc3MzLWFuaW1hdGlvbnMtd2l0aC10cmFuc2Zvcm0tY2F1c2VzLWJsdXJyZWQtZWxlbWVudHMtb24td2Via2l0LzEwNDE3OTYyIzEwNDE3OTYyICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5pc0FuZHJvaWQgJiYgRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXSA9PT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUgPCAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGludmFsaWQgPSAhLyhcXGQpJC9pLnRlc3QocHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInNrZXdcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW52YWxpZCA9ICEvKGRlZ3xcXGQpJC9pLnRlc3QocHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInJvdGF0ZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnZhbGlkID0gIS8oZGVnfFxcZCkkL2kudGVzdChwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIWludmFsaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEFzIHBlciB0aGUgQ1NTIHNwZWMsIHdyYXAgdGhlIHZhbHVlIGluIHBhcmVudGhlc2VzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXSA9IFwiKFwiICsgcHJvcGVydHlWYWx1ZSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQWx0aG91Z2ggdGhlIHZhbHVlIGlzIHNldCBvbiB0aGUgdHJhbnNmb3JtQ2FjaGUgb2JqZWN0LCByZXR1cm4gdGhlIG5ld2x5LXVwZGF0ZWQgdmFsdWUgZm9yIHRoZSBjYWxsaW5nIGNvZGUgdG8gcHJvY2VzcyBhcyBub3JtYWwuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV07XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IENvbG9yc1xyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0LyogU2luY2UgVmVsb2NpdHkgb25seSBhbmltYXRlcyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHBlciBwcm9wZXJ0eSwgY29sb3IgYW5pbWF0aW9uIGlzIGFjaGlldmVkIGJ5IGhvb2tpbmcgdGhlIGluZGl2aWR1YWwgUkdCQSBjb21wb25lbnRzIG9mIENTUyBjb2xvciBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRcdFx0IEFjY29yZGluZ2x5LCBjb2xvciB2YWx1ZXMgbXVzdCBiZSBub3JtYWxpemVkIChlLmcuIFwiI2ZmMDAwMFwiLCBcInJlZFwiLCBhbmQgXCJyZ2IoMjU1LCAwLCAwKVwiID09PiBcIjI1NSAwIDAgMVwiKSBzbyB0aGF0IHRoZWlyIGNvbXBvbmVudHMgY2FuIGJlIGluamVjdGVkL2V4dHJhY3RlZCBieSBDU1MuSG9va3MgbG9naWMuICovXHJcblx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IENTUy5MaXN0cy5jb2xvcnMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0LyogV3JhcCB0aGUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG5vcm1hbGl6YXRpb24gZnVuY3Rpb24gaW4gYSBuZXcgc2NvcGUgc28gdGhhdCBjb2xvck5hbWUncyB2YWx1ZSBpcyBwYWlyZWQgd2l0aCBpdHMgcmVzcGVjdGl2ZSBmdW5jdGlvbi5cclxuXHRcdFx0XHRcdFx0IChPdGhlcndpc2UsIGFsbCBmdW5jdGlvbnMgd291bGQgdGFrZSB0aGUgZmluYWwgZm9yIGxvb3AncyBjb2xvck5hbWUuKSAqL1xyXG5cdFx0XHRcdFx0XHQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNvbG9yTmFtZSA9IENTUy5MaXN0cy5jb2xvcnNbal07XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IEluIElFPD04LCB3aGljaCBzdXBwb3J0IHJnYiBidXQgbm90IHJnYmEsIGNvbG9yIHByb3BlcnRpZXMgYXJlIHJldmVydGVkIHRvIHJnYiBieSBzdHJpcHBpbmcgb2ZmIHRoZSBhbHBoYSBjb21wb25lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY29sb3JOYW1lXSA9IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBjb2xvck5hbWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCBhbGwgY29sb3IgdmFsdWVzIGludG8gdGhlIHJnYiBmb3JtYXQuIChPbGQgSUUgY2FuIHJldHVybiBoZXggdmFsdWVzIGFuZCBjb2xvciBuYW1lcyBpbnN0ZWFkIG9mIHJnYi9yZ2JhLikgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgY29sb3IgaXMgYWxyZWFkeSBpbiBpdHMgaG9va2FibGUgZm9ybSAoZS5nLiBcIjI1NSAyNTUgMjU1IDFcIikgZHVlIHRvIGhhdmluZyBiZWVuIHByZXZpb3VzbHkgZXh0cmFjdGVkLCBza2lwIGV4dHJhY3Rpb24uICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBjb252ZXJ0ZWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JOYW1lcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJsYWNrOiBcInJnYigwLCAwLCAwKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ymx1ZTogXCJyZ2IoMCwgMCwgMjU1KVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JheTogXCJyZ2IoMTI4LCAxMjgsIDEyOClcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyZWVuOiBcInJnYigwLCAxMjgsIDApXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWQ6IFwicmdiKDI1NSwgMCwgMClcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDb252ZXJ0IGNvbG9yIG5hbWVzIHRvIHJnYi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgvXltBLXpdKyQvaS50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb2xvck5hbWVzW3Byb3BlcnR5VmFsdWVdICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBjb2xvck5hbWVzW3Byb3BlcnR5VmFsdWVdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIGFuIHVubWF0Y2hlZCBjb2xvciBuYW1lIGlzIHByb3ZpZGVkLCBkZWZhdWx0IHRvIGJsYWNrLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlZCA9IGNvbG9yTmFtZXMuYmxhY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCBoZXggdmFsdWVzIHRvIHJnYi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoQ1NTLlJlZ0V4LmlzSGV4LnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udmVydGVkID0gXCJyZ2IoXCIgKyBDU1MuVmFsdWVzLmhleFRvUmdiKHByb3BlcnR5VmFsdWUpLmpvaW4oXCIgXCIpICsgXCIpXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBwcm92aWRlZCBjb2xvciBkb2Vzbid0IG1hdGNoIGFueSBvZiB0aGUgYWNjZXB0ZWQgY29sb3IgZm9ybWF0cywgZGVmYXVsdCB0byBibGFjay4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoISgvXnJnYmE/XFwoL2kudGVzdChwcm9wZXJ0eVZhbHVlKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udmVydGVkID0gY29sb3JOYW1lcy5ibGFjaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlIHN1cnJvdW5kaW5nIFwicmdiL3JnYmEoKVwiIHN0cmluZyB0aGVuIHJlcGxhY2UgY29tbWFzIHdpdGggc3BhY2VzIGFuZCBzdHJpcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHJlcGVhdGVkIHNwYWNlcyAoaW4gY2FzZSB0aGUgdmFsdWUgaW5jbHVkZWQgc3BhY2VzIHRvIGJlZ2luIHdpdGgpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gKGNvbnZlcnRlZCB8fCBwcm9wZXJ0eVZhbHVlKS50b1N0cmluZygpLm1hdGNoKENTUy5SZWdFeC52YWx1ZVVud3JhcClbMV0ucmVwbGFjZSgvLChcXHMrKT8vZywgXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU28gbG9uZyBhcyB0aGlzIGlzbid0IDw9SUU4LCBhZGQgYSBmb3VydGggKGFscGhhKSBjb21wb25lbnQgaWYgaXQncyBtaXNzaW5nIGFuZCBkZWZhdWx0IGl0IHRvIDEgKHZpc2libGUpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoIUlFIHx8IElFID4gOCkgJiYgZXh0cmFjdGVkLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCArPSBcIiAxXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXh0cmFjdGVkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSBhIHBhdHRlcm4gdGhlbiBpdCBtaWdodCBhbHJlYWR5IGhhdmUgdGhlIHJpZ2h0IHZhbHVlcyAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgvXnJnYi8udGVzdChwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGlzIGlzIElFPD04IGFuZCBhbiBhbHBoYSBjb21wb25lbnQgZXhpc3RzLCBzdHJpcCBpdCBvZmYuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKElFIDw9IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eVZhbHVlLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IHByb3BlcnR5VmFsdWUuc3BsaXQoL1xccysvKS5zbGljZSgwLCAzKS5qb2luKFwiIFwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgYWRkIGEgZm91cnRoIChhbHBoYSkgY29tcG9uZW50IGlmIGl0J3MgbWlzc2luZyBhbmQgZGVmYXVsdCBpdCB0byAxICh2aXNpYmxlKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5VmFsdWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSArPSBcIiAxXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBSZS1pbnNlcnQgdGhlIGJyb3dzZXItYXBwcm9wcmlhdGUgd3JhcHBlcihcInJnYi9yZ2JhKClcIiksIGluc2VydCBjb21tYXMsIGFuZCBzdHJpcCBvZmYgZGVjaW1hbCB1bml0c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbiBhbGwgdmFsdWVzIGJ1dCB0aGUgZm91cnRoIChSLCBHLCBhbmQgQiBvbmx5IGFjY2VwdCB3aG9sZSBudW1iZXJzKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKElFIDw9IDggPyBcInJnYlwiIDogXCJyZ2JhXCIpICsgXCIoXCIgKyBwcm9wZXJ0eVZhbHVlLnJlcGxhY2UoL1xccysvZywgXCIsXCIpLnJlcGxhY2UoL1xcLihcXGQpKyg/PSwpL2csIFwiXCIpICsgXCIpXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBEaW1lbnNpb25zXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKiovXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBhdWdtZW50RGltZW5zaW9uKG5hbWUsIGVsZW1lbnQsIHdhbnRJbm5lcikge1xyXG5cdFx0XHRcdFx0XHR2YXIgaXNCb3JkZXJCb3ggPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IFwiYm9yZGVyLWJveFwiO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGlzQm9yZGVyQm94ID09PSAod2FudElubmVyIHx8IGZhbHNlKSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIGluIGJveC1zaXppbmcgbW9kZSwgdGhlIENTUyB3aWR0aCAvIGhlaWdodCBhY2Nlc3NvcnMgYWxyZWFkeSBnaXZlIHRoZSBvdXRlcldpZHRoIC8gb3V0ZXJIZWlnaHQuICovXHJcblx0XHRcdFx0XHRcdFx0dmFyIGksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdWdtZW50ID0gMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2lkZXMgPSBuYW1lID09PSBcIndpZHRoXCIgPyBbXCJMZWZ0XCIsIFwiUmlnaHRcIl0gOiBbXCJUb3BcIiwgXCJCb3R0b21cIl0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkcyA9IFtcInBhZGRpbmdcIiArIHNpZGVzWzBdLCBcInBhZGRpbmdcIiArIHNpZGVzWzFdLCBcImJvcmRlclwiICsgc2lkZXNbMF0gKyBcIldpZHRoXCIsIFwiYm9yZGVyXCIgKyBzaWRlc1sxXSArIFwiV2lkdGhcIl07XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gcGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBmaWVsZHNbaV0pKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1Z21lbnQgKz0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB3YW50SW5uZXIgPyAtYXVnbWVudCA6IGF1Z21lbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmdW5jdGlvbiBnZXREaW1lbnNpb24obmFtZSwgd2FudElubmVyKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmFtZTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpICsgYXVnbWVudERpbWVuc2lvbihuYW1lLCBlbGVtZW50LCB3YW50SW5uZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgLSBhdWdtZW50RGltZW5zaW9uKG5hbWUsIGVsZW1lbnQsIHdhbnRJbm5lcikpICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkLmlubmVyV2lkdGggPSBnZXREaW1lbnNpb24oXCJ3aWR0aFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkLmlubmVySGVpZ2h0ID0gZ2V0RGltZW5zaW9uKFwiaGVpZ2h0XCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQub3V0ZXJXaWR0aCA9IGdldERpbWVuc2lvbihcIndpZHRoXCIpO1xyXG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQub3V0ZXJIZWlnaHQgPSBnZXREaW1lbnNpb24oXCJoZWlnaHRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDU1MgUHJvcGVydHkgTmFtZXNcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdE5hbWVzOiB7XHJcblx0XHRcdFx0LyogQ2FtZWxjYXNlIGEgcHJvcGVydHkgbmFtZSBpbnRvIGl0cyBKYXZhU2NyaXB0IG5vdGF0aW9uIChlLmcuIFwiYmFja2dyb3VuZC1jb2xvclwiID09PiBcImJhY2tncm91bmRDb2xvclwiKS5cclxuXHRcdFx0XHQgQ2FtZWxjYXNpbmcgaXMgdXNlZCB0byBub3JtYWxpemUgcHJvcGVydHkgbmFtZXMgYmV0d2VlbiBhbmQgYWNyb3NzIGNhbGxzLiAqL1xyXG5cdFx0XHRcdGNhbWVsQ2FzZTogZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eS5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24obWF0Y2gsIHN1Yk1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBzdWJNYXRjaC50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBGb3IgU1ZHIGVsZW1lbnRzLCBzb21lIHByb3BlcnRpZXMgKG5hbWVseSwgZGltZW5zaW9uYWwgb25lcykgYXJlIEdFVC9TRVQgdmlhIHRoZSBlbGVtZW50J3MgSFRNTCBhdHRyaWJ1dGVzIChpbnN0ZWFkIG9mIHZpYSBDU1Mgc3R5bGVzKS4gKi9cclxuXHRcdFx0XHRTVkdBdHRyaWJ1dGU6IGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHR2YXIgU1ZHQXR0cmlidXRlcyA9IFwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7XHJcblxyXG5cdFx0XHRcdFx0LyogQ2VydGFpbiBicm93c2VycyByZXF1aXJlIGFuIFNWRyB0cmFuc2Zvcm0gdG8gYmUgYXBwbGllZCBhcyBhbiBhdHRyaWJ1dGUuIChPdGhlcndpc2UsIGFwcGxpY2F0aW9uIHZpYSBDU1MgaXMgcHJlZmVyYWJsZSBkdWUgdG8gM0Qgc3VwcG9ydC4pICovXHJcblx0XHRcdFx0XHRpZiAoSUUgfHwgKFZlbG9jaXR5LlN0YXRlLmlzQW5kcm9pZCAmJiAhVmVsb2NpdHkuU3RhdGUuaXNDaHJvbWUpKSB7XHJcblx0XHRcdFx0XHRcdFNWR0F0dHJpYnV0ZXMgKz0gXCJ8dHJhbnNmb3JtXCI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXCJeKFwiICsgU1ZHQXR0cmlidXRlcyArIFwiKSRcIiwgXCJpXCIpLnRlc3QocHJvcGVydHkpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogRGV0ZXJtaW5lIHdoZXRoZXIgYSBwcm9wZXJ0eSBzaG91bGQgYmUgc2V0IHdpdGggYSB2ZW5kb3IgcHJlZml4LiAqL1xyXG5cdFx0XHRcdC8qIElmIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgcHJvcGVydHkgZXhpc3RzLCByZXR1cm4gaXQuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eSBuYW1lLlxyXG5cdFx0XHRcdCBJZiB0aGUgcHJvcGVydHkgaXMgbm90IGF0IGFsbCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIsIHJldHVybiBhIGZhbHNlIGZsYWcuICovXHJcblx0XHRcdFx0cHJlZml4Q2hlY2s6IGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHQvKiBJZiB0aGlzIHByb3BlcnR5IGhhcyBhbHJlYWR5IGJlZW4gY2hlY2tlZCwgcmV0dXJuIHRoZSBjYWNoZWQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuU3RhdGUucHJlZml4TWF0Y2hlc1twcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFtWZWxvY2l0eS5TdGF0ZS5wcmVmaXhNYXRjaGVzW3Byb3BlcnR5XSwgdHJ1ZV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmVuZG9ycyA9IFtcIlwiLCBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIsIFwiT1wiXTtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwLCB2ZW5kb3JzTGVuZ3RoID0gdmVuZG9ycy5sZW5ndGg7IGkgPCB2ZW5kb3JzTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlQcmVmaXhlZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGkgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5UHJlZml4ZWQgPSBwcm9wZXJ0eTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwcm9wZXJ0eSB0byBjb25mb3JtIHRvIEphdmFTY3JpcHQgdmVuZG9yIHByZWZpeCBub3RhdGlvbiAoZS5nLiB3ZWJraXRGaWx0ZXIpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlQcmVmaXhlZCA9IHZlbmRvcnNbaV0gKyBwcm9wZXJ0eS5yZXBsYWNlKC9eXFx3LywgZnVuY3Rpb24obWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIENoZWNrIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcHJvcGVydHkgYXMgcHJlZml4ZWQuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNTdHJpbmcoVmVsb2NpdHkuU3RhdGUucHJlZml4RWxlbWVudC5zdHlsZVtwcm9wZXJ0eVByZWZpeGVkXSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIENhY2hlIHRoZSBtYXRjaC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLnByZWZpeE1hdGNoZXNbcHJvcGVydHldID0gcHJvcGVydHlQcmVmaXhlZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW3Byb3BlcnR5UHJlZml4ZWQsIHRydWVdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoaXMgcHJvcGVydHkgaW4gYW55IGZvcm0sIGluY2x1ZGUgYSBmYWxzZSBmbGFnIHNvIHRoYXQgdGhlIGNhbGxlciBjYW4gZGVjaWRlIGhvdyB0byBwcm9jZWVkLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Byb3BlcnR5LCBmYWxzZV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDU1MgUHJvcGVydHkgVmFsdWVzXHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRWYWx1ZXM6IHtcclxuXHRcdFx0XHQvKiBIZXggdG8gUkdCIGNvbnZlcnNpb24uIENvcHlyaWdodCBUaW0gRG93bjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjIzODM4L3JnYi10by1oZXgtYW5kLWhleC10by1yZ2IgKi9cclxuXHRcdFx0XHRoZXhUb1JnYjogZnVuY3Rpb24oaGV4KSB7XHJcblx0XHRcdFx0XHR2YXIgc2hvcnRmb3JtUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLFxyXG5cdFx0XHRcdFx0XHRcdGxvbmdmb3JtUmVnZXggPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLFxyXG5cdFx0XHRcdFx0XHRcdHJnYlBhcnRzO1xyXG5cclxuXHRcdFx0XHRcdGhleCA9IGhleC5yZXBsYWNlKHNob3J0Zm9ybVJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZ2JQYXJ0cyA9IGxvbmdmb3JtUmVnZXguZXhlYyhoZXgpO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiByZ2JQYXJ0cyA/IFtwYXJzZUludChyZ2JQYXJ0c1sxXSwgMTYpLCBwYXJzZUludChyZ2JQYXJ0c1syXSwgMTYpLCBwYXJzZUludChyZ2JQYXJ0c1szXSwgMTYpXSA6IFswLCAwLCAwXTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGlzQ1NTTnVsbFZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0LyogVGhlIGJyb3dzZXIgZGVmYXVsdHMgQ1NTIHZhbHVlcyB0aGF0IGhhdmUgbm90IGJlZW4gc2V0IHRvIGVpdGhlciAwIG9yIG9uZSBvZiBzZXZlcmFsIHBvc3NpYmxlIG51bGwtdmFsdWUgc3RyaW5ncy5cclxuXHRcdFx0XHRcdCBUaHVzLCB3ZSBjaGVjayBmb3IgYm90aCBmYWxzaW5lc3MgYW5kIHRoZXNlIHNwZWNpYWwgc3RyaW5ncy4gKi9cclxuXHRcdFx0XHRcdC8qIE51bGwtdmFsdWUgY2hlY2tpbmcgaXMgcGVyZm9ybWVkIHRvIGRlZmF1bHQgdGhlIHNwZWNpYWwgc3RyaW5ncyB0byAwIChmb3IgdGhlIHNha2Ugb2YgdHdlZW5pbmcpIG9yIHRoZWlyIGhvb2tcclxuXHRcdFx0XHRcdCB0ZW1wbGF0ZXMgYXMgZGVmaW5lZCBhcyBDU1MuSG9va3MgKGZvciB0aGUgc2FrZSBvZiBob29rIGluamVjdGlvbi9leHRyYWN0aW9uKS4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IENocm9tZSByZXR1cm5zIFwicmdiYSgwLCAwLCAwLCAwKVwiIGZvciBhbiB1bmRlZmluZWQgY29sb3Igd2hlcmVhcyBJRSByZXR1cm5zIFwidHJhbnNwYXJlbnRcIi4gKi9cclxuXHRcdFx0XHRcdHJldHVybiAoIXZhbHVlIHx8IC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KHZhbHVlKSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBSZXRyaWV2ZSBhIHByb3BlcnR5J3MgZGVmYXVsdCB1bml0IHR5cGUuIFVzZWQgZm9yIGFzc2lnbmluZyBhIHVuaXQgdHlwZSB3aGVuIG9uZSBpcyBub3Qgc3VwcGxpZWQgYnkgdGhlIHVzZXIuICovXHJcblx0XHRcdFx0Z2V0VW5pdFR5cGU6IGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHRpZiAoL14ocm90YXRlfHNrZXcpL2kudGVzdChwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiZGVnXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC8oXihzY2FsZXxzY2FsZVh8c2NhbGVZfHNjYWxlWnxhbHBoYXxmbGV4R3Jvd3xmbGV4SGVpZ2h0fHpJbmRleHxmb250V2VpZ2h0KSQpfCgob3BhY2l0eXxyZWR8Z3JlZW58Ymx1ZXxhbHBoYSkkKS9pLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdC8qIFRoZSBhYm92ZSBwcm9wZXJ0aWVzIGFyZSB1bml0bGVzcy4gKi9cclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvKiBEZWZhdWx0IHRvIHB4IGZvciBhbGwgb3RoZXIgcHJvcGVydGllcy4gKi9cclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwicHhcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIEhUTUwgZWxlbWVudHMgZGVmYXVsdCB0byBhbiBhc3NvY2lhdGVkIGRpc3BsYXkgdHlwZSB3aGVuIHRoZXkncmUgbm90IHNldCB0byBkaXNwbGF5Om5vbmUuICovXHJcblx0XHRcdFx0LyogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBjb3JyZWN0bHkgc2V0dGluZyB0aGUgbm9uLVwibm9uZVwiIGRpc3BsYXkgdmFsdWUgaW4gY2VydGFpbiBWZWxvY2l0eSByZWRpcmVjdHMsIHN1Y2ggYXMgZmFkZUluL091dC4gKi9cclxuXHRcdFx0XHRnZXREaXNwbGF5VHlwZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0dmFyIHRhZ05hbWUgPSBlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKC9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdCh0YWdOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJpbmxpbmVcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL14obGkpJC9pLnRlc3QodGFnTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwibGlzdC1pdGVtXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKHRyKSQvaS50ZXN0KHRhZ05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcInRhYmxlLXJvd1wiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvXih0YWJsZSkkL2kudGVzdCh0YWdOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0YWJsZVwiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvXih0Ym9keSkkL2kudGVzdCh0YWdOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0YWJsZS1yb3ctZ3JvdXBcIjtcclxuXHRcdFx0XHRcdFx0LyogRGVmYXVsdCB0byBcImJsb2NrXCIgd2hlbiBubyBtYXRjaCBpcyBmb3VuZC4gKi9cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcImJsb2NrXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBUaGUgY2xhc3MgYWRkL3JlbW92ZSBmdW5jdGlvbnMgYXJlIHVzZWQgdG8gdGVtcG9yYXJpbHkgYXBwbHkgYSBcInZlbG9jaXR5LWFuaW1hdGluZ1wiIGNsYXNzIHRvIGVsZW1lbnRzIHdoaWxlIHRoZXkncmUgYW5pbWF0aW5nLiAqL1xyXG5cdFx0XHRcdGFkZENsYXNzOiBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoZWxlbWVudC5jbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gRWxlbWVudC5jbGFzc05hbWUgaXMgYXJvdW5kIDE1JSBmYXN0ZXIgdGhlbiBzZXQvZ2V0QXR0cmlidXRlXHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgKz0gKGVsZW1lbnQuY2xhc3NOYW1lLmxlbmd0aCA/IFwiIFwiIDogXCJcIikgKyBjbGFzc05hbWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gV29yayBhcm91bmQgZm9yIElFIHN0cmljdCBtb2RlIGFuaW1hdGluZyBTVkcgLSBhbmQgYW55dGhpbmcgZWxzZSB0aGF0IGRvZXNuJ3QgYmVoYXZlIGNvcnJlY3RseSAtIHRoZSBzYW1lIHdheSBqUXVlcnkgZG9lcyBpdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjdXJyZW50Q2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShJRSA8PSA3ID8gXCJjbGFzc05hbWVcIiA6IFwiY2xhc3NcIikgfHwgXCJcIjtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjdXJyZW50Q2xhc3MgKyAoY3VycmVudENsYXNzID8gXCIgXCIgOiBcIlwiKSArIGNsYXNzTmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlbW92ZUNsYXNzOiBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoZWxlbWVudC5jbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gRWxlbWVudC5jbGFzc05hbWUgaXMgYXJvdW5kIDE1JSBmYXN0ZXIgdGhlbiBzZXQvZ2V0QXR0cmlidXRlXHJcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogTmVlZCBzb21lIGpzcGVyZiB0ZXN0cyBvbiBwZXJmb3JtYW5jZSAtIGNhbiB3ZSBnZXQgcmlkIG9mIHRoZSByZWdleCBhbmQgbWF5YmUgdXNlIHNwbGl0IC8gYXJyYXkgbWFuaXB1bGF0aW9uP1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcc3wkKVwiLCBcImdpXCIpLCBcIiBcIik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gV29yayBhcm91bmQgZm9yIElFIHN0cmljdCBtb2RlIGFuaW1hdGluZyBTVkcgLSBhbmQgYW55dGhpbmcgZWxzZSB0aGF0IGRvZXNuJ3QgYmVoYXZlIGNvcnJlY3RseSAtIHRoZSBzYW1lIHdheSBqUXVlcnkgZG9lcyBpdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjdXJyZW50Q2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShJRSA8PSA3ID8gXCJjbGFzc05hbWVcIiA6IFwiY2xhc3NcIikgfHwgXCJcIjtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjdXJyZW50Q2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxzKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcc3wkKVwiLCBcImdpXCIpLCBcIiBcIikpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgU3R5bGUgR2V0dGluZyAmIFNldHRpbmdcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBUaGUgc2luZ3VsYXIgZ2V0UHJvcGVydHlWYWx1ZSwgd2hpY2ggcm91dGVzIHRoZSBsb2dpYyBmb3IgYWxsIG5vcm1hbGl6YXRpb25zLCBob29rcywgYW5kIHN0YW5kYXJkIENTUyBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0eSwgcm9vdFByb3BlcnR5VmFsdWUsIGZvcmNlU3R5bGVMb29rdXApIHtcclxuXHRcdFx0XHQvKiBHZXQgYW4gZWxlbWVudCdzIGNvbXB1dGVkIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IFJldHJpZXZpbmcgdGhlIHZhbHVlIG9mIGEgQ1NTIHByb3BlcnR5IGNhbm5vdCBzaW1wbHkgYmUgcGVyZm9ybWVkIGJ5IGNoZWNraW5nIGFuIGVsZW1lbnQnc1xyXG5cdFx0XHRcdCBzdHlsZSBhdHRyaWJ1dGUgKHdoaWNoIG9ubHkgcmVmbGVjdHMgdXNlci1kZWZpbmVkIHZhbHVlcykuIEluc3RlYWQsIHRoZSBicm93c2VyIG11c3QgYmUgcXVlcmllZCBmb3IgYSBwcm9wZXJ0eSdzXHJcblx0XHRcdFx0ICpjb21wdXRlZCogdmFsdWUuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGdldENvbXB1dGVkU3R5bGUgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlICovXHJcblx0XHRcdFx0ZnVuY3Rpb24gY29tcHV0ZVByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdC8qIFdoZW4gYm94LXNpemluZyBpc24ndCBzZXQgdG8gYm9yZGVyLWJveCwgaGVpZ2h0IGFuZCB3aWR0aCBzdHlsZSB2YWx1ZXMgYXJlIGluY29ycmVjdGx5IGNvbXB1dGVkIHdoZW4gYW5cclxuXHRcdFx0XHRcdCBlbGVtZW50J3Mgc2Nyb2xsYmFycyBhcmUgdmlzaWJsZSAod2hpY2ggZXhwYW5kcyB0aGUgZWxlbWVudCdzIGRpbWVuc2lvbnMpLiBUaHVzLCB3ZSBkZWZlciB0byB0aGUgbW9yZSBhY2N1cmF0ZVxyXG5cdFx0XHRcdFx0IG9mZnNldEhlaWdodC9XaWR0aCBwcm9wZXJ0eSwgd2hpY2ggaW5jbHVkZXMgdGhlIHRvdGFsIGRpbWVuc2lvbnMgZm9yIGludGVyaW9yLCBib3JkZXIsIHBhZGRpbmcsIGFuZCBzY3JvbGxiYXIuXHJcblx0XHRcdFx0XHQgV2Ugc3VidHJhY3QgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIGdldCB0aGUgc3VtIG9mIGludGVyaW9yICsgc2Nyb2xsYmFyLiAqL1xyXG5cdFx0XHRcdFx0dmFyIGNvbXB1dGVkVmFsdWUgPSAwO1xyXG5cclxuXHRcdFx0XHRcdC8qIElFPD04IGRvZXNuJ3Qgc3VwcG9ydCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSwgdGh1cyB3ZSBkZWZlciB0byBqUXVlcnksIHdoaWNoIGhhcyBhbiBleHRlbnNpdmUgYXJyYXlcclxuXHRcdFx0XHRcdCBvZiBoYWNrcyB0byBhY2N1cmF0ZWx5IHJldHJpZXZlIElFOCBwcm9wZXJ0eSB2YWx1ZXMuIFJlLWltcGxlbWVudGluZyB0aGF0IGxvZ2ljIGhlcmUgaXMgbm90IHdvcnRoIGJsb2F0aW5nIHRoZVxyXG5cdFx0XHRcdFx0IGNvZGViYXNlIGZvciBhIGR5aW5nIGJyb3dzZXIuIFRoZSBwZXJmb3JtYW5jZSByZXBlcmN1c3Npb25zIG9mIHVzaW5nIGpRdWVyeSBoZXJlIGFyZSBtaW5pbWFsIHNpbmNlXHJcblx0XHRcdFx0XHQgVmVsb2NpdHkgaXMgb3B0aW1pemVkIHRvIHJhcmVseSAoYW5kIHNvbWV0aW1lcyBuZXZlcikgcXVlcnkgdGhlIERPTS4gRnVydGhlciwgdGhlICQuY3NzKCkgY29kZXBhdGggaXNuJ3QgdGhhdCBzbG93LiAqL1xyXG5cdFx0XHRcdFx0aWYgKElFIDw9IDgpIHtcclxuXHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZSA9ICQuY3NzKGVsZW1lbnQsIHByb3BlcnR5KTsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdC8qIEFsbCBvdGhlciBicm93c2VycyBzdXBwb3J0IGdldENvbXB1dGVkU3R5bGUuIFRoZSByZXR1cm5lZCBsaXZlIG9iamVjdCByZWZlcmVuY2UgaXMgY2FjaGVkIG9udG8gaXRzXHJcblx0XHRcdFx0XHRcdCBhc3NvY2lhdGVkIGVsZW1lbnQgc28gdGhhdCBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlZmV0Y2hlZCB1cG9uIGV2ZXJ5IEdFVC4gKi9cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8qIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gaGVpZ2h0IGFuZCB3aWR0aCB2YWx1ZXMgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIHNldCB0byBkaXNwbGF5Olwibm9uZVwiLiBUaHVzLCB3ZSB0ZW1wb3JhcmlseVxyXG5cdFx0XHRcdFx0XHQgdG9nZ2xlIGRpc3BsYXkgdG8gdGhlIGVsZW1lbnQgdHlwZSdzIGRlZmF1bHQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdHZhciB0b2dnbGVEaXNwbGF5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QocHJvcGVydHkpICYmIENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRvZ2dsZURpc3BsYXkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiLCBDU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGVsZW1lbnQpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHJldmVydERpc3BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodG9nZ2xlRGlzcGxheSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWZvcmNlU3R5bGVMb29rdXApIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPT09IFwiaGVpZ2h0XCIgJiYgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSBcImJvcmRlci1ib3hcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyVG9wV2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJib3JkZXJCb3R0b21XaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdUb3BcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJwYWRkaW5nQm90dG9tXCIpKSB8fCAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldmVydERpc3BsYXkoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudEJveEhlaWdodDtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5ID09PSBcIndpZHRoXCIgJiYgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSBcImJvcmRlci1ib3hcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbnRlbnRCb3hXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJvcmRlckxlZnRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJvcmRlclJpZ2h0V2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJwYWRkaW5nTGVmdFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdSaWdodFwiKSkgfHwgMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnREaXNwbGF5KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnRCb3hXaWR0aDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBjb21wdXRlZFN0eWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogRm9yIGVsZW1lbnRzIHRoYXQgVmVsb2NpdHkgaGFzbid0IGJlZW4gY2FsbGVkIG9uIGRpcmVjdGx5IChlLmcuIHdoZW4gVmVsb2NpdHkgcXVlcmllcyB0aGUgRE9NIG9uIGJlaGFsZlxyXG5cdFx0XHRcdFx0XHQgb2YgYSBwYXJlbnQgb2YgYW4gZWxlbWVudCBpdHMgYW5pbWF0aW5nKSwgcGVyZm9ybSBhIGRpcmVjdCBnZXRDb21wdXRlZFN0eWxlIGxvb2t1cCBzaW5jZSB0aGUgb2JqZWN0IGlzbid0IGNhY2hlZC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGNvbXB1dGVkU3R5bGUgb2JqZWN0IGhhcyB5ZXQgdG8gYmUgY2FjaGVkLCBkbyBzbyBub3cuICovXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIURhdGEoZWxlbWVudCkuY29tcHV0ZWRTdHlsZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkU3R5bGUgPSBEYXRhKGVsZW1lbnQpLmNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgY29tcHV0ZWRTdHlsZSBpcyBjYWNoZWQsIHVzZSBpdC4gKi9cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFN0eWxlID0gRGF0YShlbGVtZW50KS5jb21wdXRlZFN0eWxlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJRSBhbmQgRmlyZWZveCBkbyBub3QgcmV0dXJuIGEgdmFsdWUgZm9yIHRoZSBnZW5lcmljIGJvcmRlckNvbG9yIC0tIHRoZXkgb25seSByZXR1cm4gaW5kaXZpZHVhbCB2YWx1ZXMgZm9yIGVhY2ggYm9yZGVyIHNpZGUncyBjb2xvci5cclxuXHRcdFx0XHRcdFx0IEFsc28sIGluIGFsbCBicm93c2Vycywgd2hlbiBib3JkZXIgY29sb3JzIGFyZW4ndCBhbGwgdGhlIHNhbWUsIGEgY29tcG91bmQgdmFsdWUgaXMgcmV0dXJuZWQgdGhhdCBWZWxvY2l0eSBpc24ndCBzZXR1cCB0byBwYXJzZS5cclxuXHRcdFx0XHRcdFx0IFNvLCBhcyBhIHBvbHlmaWxsIGZvciBxdWVyeWluZyBpbmRpdmlkdWFsIGJvcmRlciBzaWRlIGNvbG9ycywgd2UganVzdCByZXR1cm4gdGhlIHRvcCBib3JkZXIncyBjb2xvciBhbmQgYW5pbWF0ZSBhbGwgYm9yZGVycyBmcm9tIHRoYXQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJib3JkZXJDb2xvclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHkgPSBcImJvcmRlclRvcENvbG9yXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIElFOSBoYXMgYSBidWcgaW4gd2hpY2ggdGhlIFwiZmlsdGVyXCIgcHJvcGVydHkgbXVzdCBiZSBhY2Nlc3NlZCBmcm9tIGNvbXB1dGVkU3R5bGUgdXNpbmcgdGhlIGdldFByb3BlcnR5VmFsdWUgbWV0aG9kXHJcblx0XHRcdFx0XHRcdCBpbnN0ZWFkIG9mIGEgZGlyZWN0IHByb3BlcnR5IGxvb2t1cC4gVGhlIGdldFByb3BlcnR5VmFsdWUgbWV0aG9kIGlzIHNsb3dlciB0aGFuIGEgZGlyZWN0IGxvb2t1cCwgd2hpY2ggaXMgd2h5IHdlIGF2b2lkIGl0IGJ5IGRlZmF1bHQuICovXHJcblx0XHRcdFx0XHRcdGlmIChJRSA9PT0gOSAmJiBwcm9wZXJ0eSA9PT0gXCJmaWx0ZXJcIikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIEZhbGwgYmFjayB0byB0aGUgcHJvcGVydHkncyBzdHlsZSB2YWx1ZSAoaWYgZGVmaW5lZCkgd2hlbiBjb21wdXRlZFZhbHVlIHJldHVybnMgbm90aGluZyxcclxuXHRcdFx0XHRcdFx0IHdoaWNoIGNhbiBoYXBwZW4gd2hlbiB0aGUgZWxlbWVudCBoYXNuJ3QgYmVlbiBwYWludGVkLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tcHV0ZWRWYWx1ZSA9PT0gXCJcIiB8fCBjb21wdXRlZFZhbHVlID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbcHJvcGVydHldO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRyZXZlcnREaXNwbGF5KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogRm9yIHRvcCwgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQgKFRSQkwpIHZhbHVlcyB0aGF0IGFyZSBzZXQgdG8gXCJhdXRvXCIgb24gZWxlbWVudHMgb2YgXCJmaXhlZFwiIG9yIFwiYWJzb2x1dGVcIiBwb3NpdGlvbixcclxuXHRcdFx0XHRcdCBkZWZlciB0byBqUXVlcnkgZm9yIGNvbnZlcnRpbmcgXCJhdXRvXCIgdG8gYSBudW1lcmljIHZhbHVlLiAoRm9yIGVsZW1lbnRzIHdpdGggYSBcInN0YXRpY1wiIG9yIFwicmVsYXRpdmVcIiBwb3NpdGlvbiwgXCJhdXRvXCIgaGFzIHRoZSBzYW1lXHJcblx0XHRcdFx0XHQgZWZmZWN0IGFzIGJlaW5nIHNldCB0byAwLCBzbyBubyBjb252ZXJzaW9uIGlzIG5lY2Vzc2FyeS4pICovXHJcblx0XHRcdFx0XHQvKiBBbiBleGFtcGxlIG9mIHdoeSBudW1lcmljIGNvbnZlcnNpb24gaXMgbmVjZXNzYXJ5OiBXaGVuIGFuIGVsZW1lbnQgd2l0aCBcInBvc2l0aW9uOmFic29sdXRlXCIgaGFzIGFuIHVudG91Y2hlZCBcImxlZnRcIlxyXG5cdFx0XHRcdFx0IHByb3BlcnR5LCB3aGljaCByZXZlcnRzIHRvIFwiYXV0b1wiLCBsZWZ0J3MgdmFsdWUgaXMgMCByZWxhdGl2ZSB0byBpdHMgcGFyZW50IGVsZW1lbnQsIGJ1dCBpcyBvZnRlbiBub24temVybyByZWxhdGl2ZVxyXG5cdFx0XHRcdFx0IHRvIGl0cyAqY29udGFpbmluZyogKG5vdCBwYXJlbnQpIGVsZW1lbnQsIHdoaWNoIGlzIHRoZSBuZWFyZXN0IFwicG9zaXRpb246cmVsYXRpdmVcIiBhbmNlc3RvciBvciB0aGUgdmlld3BvcnQgKGFuZCBhbHdheXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjYXNlIG9mIFwicG9zaXRpb246Zml4ZWRcIikuICovXHJcblx0XHRcdFx0XHRpZiAoY29tcHV0ZWRWYWx1ZSA9PT0gXCJhdXRvXCIgJiYgL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvaS50ZXN0KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBjb21wdXRlUHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBvc2l0aW9uXCIpOyAvKiBHRVQgKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIEZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZywgalF1ZXJ5J3MgJC5wb3NpdGlvbigpIG9ubHkgcmV0dXJucyB2YWx1ZXMgZm9yIHRvcCBhbmQgbGVmdDtcclxuXHRcdFx0XHRcdFx0IHJpZ2h0IGFuZCBib3R0b20gd2lsbCBoYXZlIHRoZWlyIFwiYXV0b1wiIHZhbHVlIHJldmVydGVkIHRvIDAuICovXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IEEgalF1ZXJ5IG9iamVjdCBtdXN0IGJlIGNyZWF0ZWQgaGVyZSBzaW5jZSBqUXVlcnkgZG9lc24ndCBoYXZlIGEgbG93LWxldmVsIGFsaWFzIGZvciAkLnBvc2l0aW9uKCkuXHJcblx0XHRcdFx0XHRcdCBOb3QgYSBiaWcgZGVhbCBzaW5jZSB3ZSdyZSBjdXJyZW50bHkgaW4gYSBHRVQgYmF0Y2ggYW55d2F5LiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAocG9zaXRpb24gPT09IFwiZml4ZWRcIiB8fCAocG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiAmJiAvdG9wfGxlZnQvaS50ZXN0KHByb3BlcnR5KSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBqUXVlcnkgc3RyaXBzIHRoZSBwaXhlbCB1bml0IGZyb20gaXRzIHJldHVybmVkIHZhbHVlczsgd2UgcmUtYWRkIGl0IGhlcmUgdG8gY29uZm9ybSB3aXRoIGNvbXB1dGVQcm9wZXJ0eVZhbHVlJ3MgYmVoYXZpb3IuICovXHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZSA9ICQoZWxlbWVudCkucG9zaXRpb24oKVtwcm9wZXJ0eV0gKyBcInB4XCI7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbXB1dGVkVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgcHJvcGVydHlWYWx1ZTtcclxuXHJcblx0XHRcdFx0LyogSWYgdGhpcyBpcyBhIGhvb2tlZCBwcm9wZXJ0eSAoZS5nLiBcImNsaXBMZWZ0XCIgaW5zdGVhZCBvZiB0aGUgcm9vdCBwcm9wZXJ0eSBvZiBcImNsaXBcIiksXHJcblx0XHRcdFx0IGV4dHJhY3QgdGhlIGhvb2sncyB2YWx1ZSBmcm9tIGEgbm9ybWFsaXplZCByb290UHJvcGVydHlWYWx1ZSB1c2luZyBDU1MuSG9va3MuZXh0cmFjdFZhbHVlKCkuICovXHJcblx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xyXG5cdFx0XHRcdFx0dmFyIGhvb2sgPSBwcm9wZXJ0eSxcclxuXHRcdFx0XHRcdFx0XHRob29rUm9vdCA9IENTUy5Ib29rcy5nZXRSb290KGhvb2spO1xyXG5cclxuXHRcdFx0XHRcdC8qIElmIGEgY2FjaGVkIHJvb3RQcm9wZXJ0eVZhbHVlIHdhc24ndCBwYXNzZWQgaW4gKHdoaWNoIFZlbG9jaXR5IGFsd2F5cyBhdHRlbXB0cyB0byBkbyBpbiBvcmRlciB0byBhdm9pZCByZXF1ZXJ5aW5nIHRoZSBET00pLFxyXG5cdFx0XHRcdFx0IHF1ZXJ5IHRoZSBET00gZm9yIHRoZSByb290IHByb3BlcnR5J3MgdmFsdWUuICovXHJcblx0XHRcdFx0XHRpZiAocm9vdFByb3BlcnR5VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHQvKiBTaW5jZSB0aGUgYnJvd3NlciBpcyBub3cgYmVpbmcgZGlyZWN0bHkgcXVlcmllZCwgdXNlIHRoZSBvZmZpY2lhbCBwb3N0LXByZWZpeGluZyBwcm9wZXJ0eSBuYW1lIGZvciB0aGlzIGxvb2t1cC4gKi9cclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBDU1MuTmFtZXMucHJlZml4Q2hlY2soaG9va1Jvb3QpWzBdKTsgLyogR0VUICovXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgdGhpcyByb290IGhhcyBhIG5vcm1hbGl6YXRpb24gcmVnaXN0ZXJlZCwgcGVmb3JtIHRoZSBhc3NvY2lhdGVkIG5vcm1hbGl6YXRpb24gZXh0cmFjdGlvbi4gKi9cclxuXHRcdFx0XHRcdGlmIChDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtob29rUm9vdF0pIHtcclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtob29rUm9vdF0oXCJleHRyYWN0XCIsIGVsZW1lbnQsIHJvb3RQcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBFeHRyYWN0IHRoZSBob29rJ3MgdmFsdWUuICovXHJcblx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLmV4dHJhY3RWYWx1ZShob29rLCByb290UHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgdGhpcyBpcyBhIG5vcm1hbGl6ZWQgcHJvcGVydHkgKGUuZy4gXCJvcGFjaXR5XCIgYmVjb21lcyBcImZpbHRlclwiIGluIDw9SUU4KSBvciBcInRyYW5zbGF0ZVhcIiBiZWNvbWVzIFwidHJhbnNmb3JtXCIpLFxyXG5cdFx0XHRcdFx0IG5vcm1hbGl6ZSB0aGUgcHJvcGVydHkncyBuYW1lIGFuZCB2YWx1ZSwgYW5kIGhhbmRsZSB0aGUgc3BlY2lhbCBjYXNlIG9mIHRyYW5zZm9ybXMuICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBOb3JtYWxpemluZyBhIHByb3BlcnR5IGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSBmcm9tIGhvb2tpbmcgYSBwcm9wZXJ0eSBzaW5jZSBob29rLWV4dHJhY3RlZCB2YWx1ZXMgYXJlIHN0cmljdGx5XHJcblx0XHRcdFx0XHQgbnVtZXJpY2FsIGFuZCB0aGVyZWZvcmUgZG8gbm90IHJlcXVpcmUgbm9ybWFsaXphdGlvbiBleHRyYWN0aW9uLiAqL1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHR2YXIgbm9ybWFsaXplZFByb3BlcnR5TmFtZSxcclxuXHRcdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcGVydHlWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHRub3JtYWxpemVkUHJvcGVydHlOYW1lID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwibmFtZVwiLCBlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0gdmFsdWVzIGFyZSBjYWxjdWxhdGVkIHZpYSBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24gKHNlZSBiZWxvdyksIHdoaWNoIGNoZWNrcyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgdHJhbnNmb3JtQ2FjaGUuXHJcblx0XHRcdFx0XHQgQXQgbm8gcG9pbnQgZG8gdHJhbnNmb3JtIEdFVHMgZXZlciBhY3R1YWxseSBxdWVyeSB0aGUgRE9NOyBpbml0aWFsIHN0eWxlc2hlZXQgdmFsdWVzIGFyZSBuZXZlciBwcm9jZXNzZWQuXHJcblx0XHRcdFx0XHQgVGhpcyBpcyBiZWNhdXNlIHBhcnNpbmcgM0QgdHJhbnNmb3JtIG1hdHJpY2VzIGlzIG5vdCBhbHdheXMgYWNjdXJhdGUgYW5kIHdvdWxkIGJsb2F0IG91ciBjb2RlYmFzZTtcclxuXHRcdFx0XHRcdCB0aHVzLCBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24gZGVmYXVsdHMgaW5pdGlhbCB0cmFuc2Zvcm0gdmFsdWVzIHRvIHRoZWlyIHplcm8tdmFsdWVzIChlLmcuIDEgZm9yIHNjYWxlWCBhbmQgMCBmb3IgdHJhbnNsYXRlWCkuICovXHJcblx0XHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BlcnR5TmFtZSAhPT0gXCJ0cmFuc2Zvcm1cIikge1xyXG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcGVydHlWYWx1ZSA9IGNvbXB1dGVQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIENTUy5OYW1lcy5wcmVmaXhDaGVjayhub3JtYWxpemVkUHJvcGVydHlOYW1lKVswXSk7IC8qIEdFVCAqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIHZhbHVlIGlzIGEgQ1NTIG51bGwtdmFsdWUgYW5kIHRoaXMgcHJvcGVydHkgaGFzIGEgaG9vayB0ZW1wbGF0ZSwgdXNlIHRoYXQgemVyby12YWx1ZSB0ZW1wbGF0ZSBzbyB0aGF0IGhvb2tzIGNhbiBiZSBleHRyYWN0ZWQgZnJvbSBpdC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKENTUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobm9ybWFsaXplZFByb3BlcnR5VmFsdWUpICYmIENTUy5Ib29rcy50ZW1wbGF0ZXNbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Byb3BlcnR5XVsxXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0oXCJleHRyYWN0XCIsIGVsZW1lbnQsIG5vcm1hbGl6ZWRQcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIElmIGEgKG51bWVyaWMpIHZhbHVlIHdhc24ndCBwcm9kdWNlZCB2aWEgaG9vayBleHRyYWN0aW9uIG9yIG5vcm1hbGl6YXRpb24sIHF1ZXJ5IHRoZSBET00uICovXHJcblx0XHRcdFx0aWYgKCEvXltcXGQtXS8udGVzdChwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0LyogRm9yIFNWRyBlbGVtZW50cywgZGltZW5zaW9uYWwgcHJvcGVydGllcyAod2hpY2ggU1ZHQXR0cmlidXRlKCkgZGV0ZWN0cykgYXJlIHR3ZWVuZWQgdmlhXHJcblx0XHRcdFx0XHQgdGhlaXIgSFRNTCBhdHRyaWJ1dGUgdmFsdWVzIGluc3RlYWQgb2YgdGhlaXIgQ1NTIHN0eWxlIHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdHZhciBkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmlzU1ZHICYmIENTUy5OYW1lcy5TVkdBdHRyaWJ1dGUocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdC8qIFNpbmNlIHRoZSBoZWlnaHQvd2lkdGggYXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIHNldCBtYW51YWxseSwgdGhleSBkb24ndCByZWZsZWN0IGNvbXB1dGVkIHZhbHVlcy5cclxuXHRcdFx0XHRcdFx0IFRodXMsIHdlIHVzZSB1c2UgZ2V0QkJveCgpIHRvIGVuc3VyZSB3ZSBhbHdheXMgZ2V0IHZhbHVlcyBmb3IgZWxlbWVudHMgd2l0aCB1bmRlZmluZWQgaGVpZ2h0L3dpZHRoIGF0dHJpYnV0ZXMuICovXHJcblx0XHRcdFx0XHRcdGlmICgvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogRmlyZWZveCB0aHJvd3MgYW4gZXJyb3IgaWYgLmdldEJCb3goKSBpcyBjYWxsZWQgb24gYW4gU1ZHIHRoYXQgaXNuJ3QgYXR0YWNoZWQgdG8gdGhlIERPTS4gKi9cclxuXHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IGVsZW1lbnQuZ2V0QkJveCgpW3Byb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgYWNjZXNzIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZGlyZWN0bHkuICovXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3BlcnR5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IGNvbXB1dGVQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIENTUy5OYW1lcy5wcmVmaXhDaGVjayhwcm9wZXJ0eSlbMF0pOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIFNpbmNlIHByb3BlcnR5IGxvb2t1cHMgYXJlIGZvciBhbmltYXRpb24gcHVycG9zZXMgKHdoaWNoIGVudGFpbHMgY29tcHV0aW5nIHRoZSBudW1lcmljIGRlbHRhIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB2YWx1ZXMpLFxyXG5cdFx0XHRcdCBjb252ZXJ0IENTUyBudWxsLXZhbHVlcyB0byBhbiBpbnRlZ2VyIG9mIHZhbHVlIDAuICovXHJcblx0XHRcdFx0aWYgKENTUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnID49IDIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0IFwiICsgcHJvcGVydHkgKyBcIjogXCIgKyBwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBUaGUgc2luZ3VsYXIgc2V0UHJvcGVydHlWYWx1ZSwgd2hpY2ggcm91dGVzIHRoZSBsb2dpYyBmb3IgYWxsIG5vcm1hbGl6YXRpb25zLCBob29rcywgYW5kIHN0YW5kYXJkIENTUyBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRzZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0eSwgcHJvcGVydHlWYWx1ZSwgcm9vdFByb3BlcnR5VmFsdWUsIHNjcm9sbERhdGEpIHtcclxuXHRcdFx0XHR2YXIgcHJvcGVydHlOYW1lID0gcHJvcGVydHk7XHJcblxyXG5cdFx0XHRcdC8qIEluIG9yZGVyIHRvIGJlIHN1YmplY3RlZCB0byBjYWxsIG9wdGlvbnMgYW5kIGVsZW1lbnQgcXVldWVpbmcsIHNjcm9sbCBhbmltYXRpb24gaXMgcm91dGVkIHRocm91Z2ggVmVsb2NpdHkgYXMgaWYgaXQgd2VyZSBhIHN0YW5kYXJkIENTUyBwcm9wZXJ0eS4gKi9cclxuXHRcdFx0XHRpZiAocHJvcGVydHkgPT09IFwic2Nyb2xsXCIpIHtcclxuXHRcdFx0XHRcdC8qIElmIGEgY29udGFpbmVyIG9wdGlvbiBpcyBwcmVzZW50LCBzY3JvbGwgdGhlIGNvbnRhaW5lciBpbnN0ZWFkIG9mIHRoZSBicm93c2VyIHdpbmRvdy4gKi9cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxEYXRhLmNvbnRhaW5lcikge1xyXG5cdFx0XHRcdFx0XHRzY3JvbGxEYXRhLmNvbnRhaW5lcltcInNjcm9sbFwiICsgc2Nyb2xsRGF0YS5kaXJlY3Rpb25dID0gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCBWZWxvY2l0eSBkZWZhdWx0cyB0byBzY3JvbGxpbmcgdGhlIGJyb3dzZXIgd2luZG93LiAqL1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbERhdGEuZGlyZWN0aW9uID09PSBcIkxlZnRcIikge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhwcm9wZXJ0eVZhbHVlLCBzY3JvbGxEYXRhLmFsdGVybmF0ZVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsRGF0YS5hbHRlcm5hdGVWYWx1ZSwgcHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0LyogVHJhbnNmb3JtcyAodHJhbnNsYXRlWCwgcm90YXRlWiwgZXRjLikgYXJlIGFwcGxpZWQgdG8gYSBwZXItZWxlbWVudCB0cmFuc2Zvcm1DYWNoZSBvYmplY3QsIHdoaWNoIGlzIG1hbnVhbGx5IGZsdXNoZWQgdmlhIGZsdXNoVHJhbnNmb3JtQ2FjaGUoKS5cclxuXHRcdFx0XHRcdCBUaHVzLCBmb3Igbm93LCB3ZSBtZXJlbHkgY2FjaGUgdHJhbnNmb3JtcyBiZWluZyBTRVQuICovXHJcblx0XHRcdFx0XHRpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldICYmIENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcIm5hbWVcIiwgZWxlbWVudCkgPT09IFwidHJhbnNmb3JtXCIpIHtcclxuXHRcdFx0XHRcdFx0LyogUGVyZm9ybSBhIG5vcm1hbGl6YXRpb24gaW5qZWN0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgbm9ybWFsaXphdGlvbiBsb2dpYyBoYW5kbGVzIHRoZSB0cmFuc2Zvcm1DYWNoZSB1cGRhdGluZy4gKi9cclxuXHRcdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwiaW5qZWN0XCIsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0cHJvcGVydHlOYW1lID0gXCJ0cmFuc2Zvcm1cIjtcclxuXHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbcHJvcGVydHldO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0LyogSW5qZWN0IGhvb2tzLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoQ1NTLkhvb2tzLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGhvb2tOYW1lID0gcHJvcGVydHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhvb2tSb290ID0gQ1NTLkhvb2tzLmdldFJvb3QocHJvcGVydHkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiBhIGNhY2hlZCByb290UHJvcGVydHlWYWx1ZSB3YXMgbm90IHByb3ZpZGVkLCBxdWVyeSB0aGUgRE9NIGZvciB0aGUgaG9va1Jvb3QncyBjdXJyZW50IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gcm9vdFByb3BlcnR5VmFsdWUgfHwgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgaG9va1Jvb3QpOyAvKiBHRVQgKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IENTUy5Ib29rcy5pbmplY3RWYWx1ZShob29rTmFtZSwgcHJvcGVydHlWYWx1ZSwgcm9vdFByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdHByb3BlcnR5ID0gaG9va1Jvb3Q7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIE5vcm1hbGl6ZSBuYW1lcyBhbmQgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcImluamVjdFwiLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcIm5hbWVcIiwgZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIEFzc2lnbiB0aGUgYXBwcm9wcmlhdGUgdmVuZG9yIHByZWZpeCBiZWZvcmUgcGVyZm9ybWluZyBhbiBvZmZpY2lhbCBzdHlsZSB1cGRhdGUuICovXHJcblx0XHRcdFx0XHRcdHByb3BlcnR5TmFtZSA9IENTUy5OYW1lcy5wcmVmaXhDaGVjayhwcm9wZXJ0eSlbMF07XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBBIHRyeS9jYXRjaCBpcyB1c2VkIGZvciBJRTw9OCwgd2hpY2ggdGhyb3dzIGFuIGVycm9yIHdoZW4gXCJpbnZhbGlkXCIgQ1NTIHZhbHVlcyBhcmUgc2V0LCBlLmcuIGEgbmVnYXRpdmUgd2lkdGguXHJcblx0XHRcdFx0XHRcdCBUcnkvY2F0Y2ggaXMgYXZvaWRlZCBmb3Igb3RoZXIgYnJvd3NlcnMgc2luY2UgaXQgaW5jdXJzIGEgcGVyZm9ybWFuY2Ugb3ZlcmhlYWQuICovXHJcblx0XHRcdFx0XHRcdGlmIChJRSA8PSA4KSB7XHJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCJdIGZvciBbXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIl1cIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8qIFNWRyBlbGVtZW50cyBoYXZlIHRoZWlyIGRpbWVuc2lvbmFsIHByb3BlcnRpZXMgKHdpZHRoLCBoZWlnaHQsIHgsIHksIGN4LCBldGMuKSBhcHBsaWVkIGRpcmVjdGx5IGFzIGF0dHJpYnV0ZXMgaW5zdGVhZCBvZiBhcyBzdHlsZXMuICovXHJcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogSUU4IGRvZXMgbm90IHN1cHBvcnQgU1ZHIGVsZW1lbnRzLCBzbyBpdCdzIG9rYXkgdGhhdCB3ZSBza2lwIGl0IGZvciBTVkcgYW5pbWF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5pc1NWRyAmJiBDU1MuTmFtZXMuU1ZHQXR0cmlidXRlKHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogRm9yIFNWRyBhdHRyaWJ1dGVzLCB2ZW5kb3ItcHJlZml4ZWQgcHJvcGVydHkgbmFtZXMgYXJlIG5ldmVyIHVzZWQuICovXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBOb3QgYWxsIENTUyBwcm9wZXJ0aWVzIGNhbiBiZSBhbmltYXRlZCB2aWEgYXR0cmlidXRlcywgYnV0IHRoZSBicm93c2VyIHdvbid0IHRocm93IGFuIGVycm9yIGZvciB1bnN1cHBvcnRlZCBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnID49IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNldCBcIiArIHByb3BlcnR5ICsgXCIgKFwiICsgcHJvcGVydHlOYW1lICsgXCIpOiBcIiArIHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKiBSZXR1cm4gdGhlIG5vcm1hbGl6ZWQgcHJvcGVydHkgbmFtZSBhbmQgdmFsdWUgaW4gY2FzZSB0aGUgY2FsbGVyIHdhbnRzIHRvIGtub3cgaG93IHRoZXNlIHZhbHVlcyB3ZXJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBhcHBsaWVkIHRvIHRoZSBET00uICovXHJcblx0XHRcdFx0cmV0dXJuIFtwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWVdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSBieSBiYXRjaGluZyB0cmFuc2Zvcm0gdXBkYXRlcyBpbnRvIGEgc2luZ2xlIFNFVCwgdHJhbnNmb3JtcyBhcmUgbm90IGRpcmVjdGx5IGFwcGxpZWQgdG8gYW4gZWxlbWVudCB1bnRpbCBmbHVzaFRyYW5zZm9ybUNhY2hlKCkgaXMgY2FsbGVkLiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBWZWxvY2l0eSBhcHBsaWVzIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSBhcmUgY2hyb25vZ2ljYWxseSBpbnRyb2R1Y2VkIHRvIHRoZSBlbGVtZW50J3MgQ1NTIHN0eWxlcy4gKi9cclxuXHRcdFx0Zmx1c2hUcmFuc2Zvcm1DYWNoZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBcIlwiLFxyXG5cdFx0XHRcdFx0XHRkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0LyogQ2VydGFpbiBicm93c2VycyByZXF1aXJlIHRoYXQgU1ZHIHRyYW5zZm9ybXMgYmUgYXBwbGllZCBhcyBhbiBhdHRyaWJ1dGUuIEhvd2V2ZXIsIHRoZSBTVkcgdHJhbnNmb3JtIGF0dHJpYnV0ZSB0YWtlcyBhIG1vZGlmaWVkIHZlcnNpb24gb2YgQ1NTJ3MgdHJhbnNmb3JtIHN0cmluZ1xyXG5cdFx0XHRcdCAodW5pdHMgYXJlIGRyb3BwZWQgYW5kLCBleGNlcHQgZm9yIHNrZXdYL1ksIHN1YnByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZWlyIG1hc3RlciBwcm9wZXJ0eSAtLSBlLmcuIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSBtZXJnZWQgaW50byBzY2FsZShYIFkpLiAqL1xyXG5cdFx0XHRcdGlmICgoSUUgfHwgKFZlbG9jaXR5LlN0YXRlLmlzQW5kcm9pZCAmJiAhVmVsb2NpdHkuU3RhdGUuaXNDaHJvbWUpKSAmJiBkYXRhICYmIGRhdGEuaXNTVkcpIHtcclxuXHRcdFx0XHRcdC8qIFNpbmNlIHRyYW5zZm9ybSB2YWx1ZXMgYXJlIHN0b3JlZCBpbiB0aGVpciBwYXJlbnRoZXNlcy13cmFwcGVkIGZvcm0sIHdlIHVzZSBhIGhlbHBlciBmdW5jdGlvbiB0byBzdHJpcCBvdXQgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuXHJcblx0XHRcdFx0XHQgRnVydGhlciwgU1ZHIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIG9ubHkgdGFrZSB1bml0bGVzcyAocmVwcmVzZW50aW5nIHBpeGVscykgdmFsdWVzLCBzbyBpdCdzIG9rYXkgdGhhdCBwYXJzZUZsb2F0KCkgc3RyaXBzIHRoZSB1bml0IHN1ZmZpeGVkIHRvIHRoZSBmbG9hdCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdHZhciBnZXRUcmFuc2Zvcm1GbG9hdCA9IGZ1bmN0aW9uKHRyYW5zZm9ybVByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIHRyYW5zZm9ybVByb3BlcnR5KSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdC8qIENyZWF0ZSBhbiBvYmplY3QgdG8gb3JnYW5pemUgYWxsIHRoZSB0cmFuc2Zvcm1zIHRoYXQgd2UnbGwgYXBwbHkgdG8gdGhlIFNWRyBlbGVtZW50LiBUbyBrZWVwIHRoZSBsb2dpYyBzaW1wbGUsXHJcblx0XHRcdFx0XHQgd2UgcHJvY2VzcyAqYWxsKiB0cmFuc2Zvcm0gcHJvcGVydGllcyAtLSBldmVuIHRob3NlIHRoYXQgbWF5IG5vdCBiZSBleHBsaWNpdGx5IGFwcGxpZWQgKHNpbmNlIHRoZXkgZGVmYXVsdCB0byB0aGVpciB6ZXJvLXZhbHVlcyBhbnl3YXkpLiAqL1xyXG5cdFx0XHRcdFx0dmFyIFNWR1RyYW5zZm9ybXMgPSB7XHJcblx0XHRcdFx0XHRcdHRyYW5zbGF0ZTogW2dldFRyYW5zZm9ybUZsb2F0KFwidHJhbnNsYXRlWFwiKSwgZ2V0VHJhbnNmb3JtRmxvYXQoXCJ0cmFuc2xhdGVZXCIpXSxcclxuXHRcdFx0XHRcdFx0c2tld1g6IFtnZXRUcmFuc2Zvcm1GbG9hdChcInNrZXdYXCIpXSwgc2tld1k6IFtnZXRUcmFuc2Zvcm1GbG9hdChcInNrZXdZXCIpXSxcclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIHNjYWxlIHByb3BlcnR5IGlzIHNldCAobm9uLTEpLCB1c2UgdGhhdCB2YWx1ZSBmb3IgdGhlIHNjYWxlWCBhbmQgc2NhbGVZIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHQgKHRoaXMgYmVoYXZpb3IgbWltaWNzIHRoZSByZXN1bHQgb2YgYW5pbWF0aW5nIGFsbCB0aGVzZSBwcm9wZXJ0aWVzIGF0IG9uY2Ugb24gSFRNTCBlbGVtZW50cykuICovXHJcblx0XHRcdFx0XHRcdHNjYWxlOiBnZXRUcmFuc2Zvcm1GbG9hdChcInNjYWxlXCIpICE9PSAxID8gW2dldFRyYW5zZm9ybUZsb2F0KFwic2NhbGVcIiksIGdldFRyYW5zZm9ybUZsb2F0KFwic2NhbGVcIildIDogW2dldFRyYW5zZm9ybUZsb2F0KFwic2NhbGVYXCIpLCBnZXRUcmFuc2Zvcm1GbG9hdChcInNjYWxlWVwiKV0sXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IFNWRydzIHJvdGF0ZSB0cmFuc2Zvcm0gdGFrZXMgdGhyZWUgdmFsdWVzOiByb3RhdGlvbiBkZWdyZWVzIGZvbGxvd2VkIGJ5IHRoZSBYIGFuZCBZIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHQgZGVmaW5pbmcgdGhlIHJvdGF0aW9uJ3Mgb3JpZ2luIHBvaW50LiBXZSBpZ25vcmUgdGhlIG9yaWdpbiB2YWx1ZXMgKGRlZmF1bHQgdGhlbSB0byAwKS4gKi9cclxuXHRcdFx0XHRcdFx0cm90YXRlOiBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJyb3RhdGVaXCIpLCAwLCAwXVxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGluIHRoZSB1c2VyLWRlZmluZWQgcHJvcGVydHkgbWFwIG9yZGVyLlxyXG5cdFx0XHRcdFx0IChUaGlzIG1pbWljcyB0aGUgYmVoYXZpb3Igb2Ygbm9uLVNWRyB0cmFuc2Zvcm0gYW5pbWF0aW9uLikgKi9cclxuXHRcdFx0XHRcdCQuZWFjaChEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLCBmdW5jdGlvbih0cmFuc2Zvcm1OYW1lKSB7XHJcblx0XHRcdFx0XHRcdC8qIEV4Y2VwdCBmb3Igd2l0aCBza2V3WC9ZLCByZXZlcnQgdGhlIGF4aXMtc3BlY2lmaWMgdHJhbnNmb3JtIHN1YnByb3BlcnRpZXMgdG8gdGhlaXIgYXhpcy1mcmVlIG1hc3RlclxyXG5cdFx0XHRcdFx0XHQgcHJvcGVydGllcyBzbyB0aGF0IHRoZXkgbWF0Y2ggdXAgd2l0aCBTVkcncyBhY2NlcHRlZCB0cmFuc2Zvcm0gcHJvcGVydGllcy4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKC9edHJhbnNsYXRlL2kudGVzdCh0cmFuc2Zvcm1OYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU5hbWUgPSBcInRyYW5zbGF0ZVwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9ec2NhbGUvaS50ZXN0KHRyYW5zZm9ybU5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtTmFtZSA9IFwic2NhbGVcIjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgvXnJvdGF0ZS9pLnRlc3QodHJhbnNmb3JtTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1OYW1lID0gXCJyb3RhdGVcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogQ2hlY2sgdGhhdCB3ZSBoYXZlbid0IHlldCBkZWxldGVkIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBTVkdUcmFuc2Zvcm1zIGNvbnRhaW5lci4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKFNWR1RyYW5zZm9ybXNbdHJhbnNmb3JtTmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBBcHBlbmQgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0eSBpbiB0aGUgU1ZHLXN1cHBvcnRlZCB0cmFuc2Zvcm0gZm9ybWF0LiBBcyBwZXIgdGhlIHNwZWMsIHN1cnJvdW5kIHRoZSBzcGFjZS1kZWxpbWl0ZWQgdmFsdWVzIGluIHBhcmVudGhlc2VzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2Zvcm1OYW1lICsgXCIoXCIgKyBTVkdUcmFuc2Zvcm1zW3RyYW5zZm9ybU5hbWVdLmpvaW4oXCIgXCIpICsgXCIpXCIgKyBcIiBcIjtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQWZ0ZXIgcHJvY2Vzc2luZyBhbiBTVkcgdHJhbnNmb3JtIHByb3BlcnR5LCBkZWxldGUgaXQgZnJvbSB0aGUgU1ZHVHJhbnNmb3JtcyBjb250YWluZXIgc28gd2UgZG9uJ3RcclxuXHRcdFx0XHRcdFx0XHQgcmUtaW5zZXJ0IHRoZSBzYW1lIG1hc3RlciBwcm9wZXJ0eSBpZiB3ZSBlbmNvdW50ZXIgYW5vdGhlciBvbmUgb2YgaXRzIGF4aXMtc3BlY2lmaWMgcHJvcGVydGllcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgU1ZHVHJhbnNmb3Jtc1t0cmFuc2Zvcm1OYW1lXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciB0cmFuc2Zvcm1WYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRwZXJzcGVjdGl2ZTtcclxuXHJcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0gcHJvcGVydGllcyBhcmUgc3RvcmVkIGFzIG1lbWJlcnMgb2YgdGhlIHRyYW5zZm9ybUNhY2hlIG9iamVjdC4gQ29uY2F0ZW5hdGUgYWxsIHRoZSBtZW1iZXJzIGludG8gYSBzdHJpbmcuICovXHJcblx0XHRcdFx0XHQkLmVhY2goRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZSwgZnVuY3Rpb24odHJhbnNmb3JtTmFtZSkge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm1WYWx1ZSA9IERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV07XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0ncyBwZXJzcGVjdGl2ZSBzdWJwcm9wZXJ0eSBtdXN0IGJlIHNldCBmaXJzdCBpbiBvcmRlciB0byB0YWtlIGVmZmVjdC4gU3RvcmUgaXQgdGVtcG9yYXJpbHkuICovXHJcblx0XHRcdFx0XHRcdGlmICh0cmFuc2Zvcm1OYW1lID09PSBcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRwZXJzcGVjdGl2ZSA9IHRyYW5zZm9ybVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJRTkgb25seSBzdXBwb3J0cyBvbmUgcm90YXRpb24gdHlwZSwgcm90YXRlWiwgd2hpY2ggaXQgcmVmZXJzIHRvIGFzIFwicm90YXRlXCIuICovXHJcblx0XHRcdFx0XHRcdGlmIChJRSA9PT0gOSAmJiB0cmFuc2Zvcm1OYW1lID09PSBcInJvdGF0ZVpcIikge1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU5hbWUgPSBcInJvdGF0ZVwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNmb3JtTmFtZSArIHRyYW5zZm9ybVZhbHVlICsgXCIgXCI7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvKiBJZiBwcmVzZW50LCBzZXQgdGhlIHBlcnNwZWN0aXZlIHN1YnByb3BlcnR5IGZpcnN0LiAqL1xyXG5cdFx0XHRcdFx0aWYgKHBlcnNwZWN0aXZlKSB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybVN0cmluZyA9IFwicGVyc3BlY3RpdmVcIiArIHBlcnNwZWN0aXZlICsgXCIgXCIgKyB0cmFuc2Zvcm1TdHJpbmc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm1TdHJpbmcpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIFJlZ2lzdGVyIGhvb2tzIGFuZCBub3JtYWxpemF0aW9ucy4gKi9cclxuXHRcdENTUy5Ib29rcy5yZWdpc3RlcigpO1xyXG5cdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyKCk7XHJcblxyXG5cdFx0LyogQWxsb3cgaG9vayBzZXR0aW5nIGluIHRoZSBzYW1lIGZhc2hpb24gYXMgalF1ZXJ5J3MgJC5jc3MoKS4gKi9cclxuXHRcdFZlbG9jaXR5Lmhvb2sgPSBmdW5jdGlvbihlbGVtZW50cywgYXJnMiwgYXJnMykge1xyXG5cdFx0XHR2YXIgdmFsdWU7XHJcblxyXG5cdFx0XHRlbGVtZW50cyA9IHNhbml0aXplRWxlbWVudHMoZWxlbWVudHMpO1xyXG5cclxuXHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0LyogSW5pdGlhbGl6ZSBWZWxvY2l0eSdzIHBlci1lbGVtZW50IGRhdGEgY2FjaGUgaWYgdGhpcyBlbGVtZW50IGhhc24ndCBwcmV2aW91c2x5IGJlZW4gYW5pbWF0ZWQuICovXHJcblx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0VmVsb2NpdHkuaW5pdChlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIEdldCBwcm9wZXJ0eSB2YWx1ZS4gSWYgYW4gZWxlbWVudCBzZXQgd2FzIHBhc3NlZCBpbiwgb25seSByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgZmlyc3QgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRpZiAoYXJnMyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIGFyZzIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LyogU2V0IHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvKiBzUFYgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbm9ybWFsaXplZCBwcm9wZXJ0eU5hbWUvcHJvcGVydHlWYWx1ZSBwYWlyIHVzZWQgdG8gdXBkYXRlIHRoZSBET00uICovXHJcblx0XHRcdFx0XHR2YXIgYWRqdXN0ZWRTZXQgPSBDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBhcmcyLCBhcmczKTtcclxuXHJcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0gcHJvcGVydGllcyBkb24ndCBhdXRvbWF0aWNhbGx5IHNldC4gVGhleSBoYXZlIHRvIGJlIGZsdXNoZWQgdG8gdGhlIERPTS4gKi9cclxuXHRcdFx0XHRcdGlmIChhZGp1c3RlZFNldFswXSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xyXG5cdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShlbGVtZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IGFkanVzdGVkU2V0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKioqKioqKioqKioqKioqKlxyXG5cdFx0IEFuaW1hdGlvblxyXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdHZhciBhbmltYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBvcHRzO1xyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQ2FsbCBDaGFpblxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogTG9naWMgZm9yIGRldGVybWluaW5nIHdoYXQgdG8gcmV0dXJuIHRvIHRoZSBjYWxsIHN0YWNrIHdoZW4gZXhpdGluZyBvdXQgb2YgVmVsb2NpdHkuICovXHJcblx0XHRcdGZ1bmN0aW9uIGdldENoYWluKCkge1xyXG5cdFx0XHRcdC8qIElmIHdlIGFyZSB1c2luZyB0aGUgdXRpbGl0eSBmdW5jdGlvbiwgYXR0ZW1wdCB0byByZXR1cm4gdGhpcyBjYWxsJ3MgcHJvbWlzZS4gSWYgbm8gcHJvbWlzZSBsaWJyYXJ5IHdhcyBkZXRlY3RlZCxcclxuXHRcdFx0XHQgZGVmYXVsdCB0byBudWxsIGluc3RlYWQgb2YgcmV0dXJuaW5nIHRoZSB0YXJnZXRlZCBlbGVtZW50cyBzbyB0aGF0IHV0aWxpdHkgZnVuY3Rpb24ncyByZXR1cm4gdmFsdWUgaXMgc3RhbmRhcmRpemVkLiAqL1xyXG5cdFx0XHRcdGlmIChpc1V0aWxpdHkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlRGF0YS5wcm9taXNlIHx8IG51bGw7XHJcblx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIGlmIHdlJ3JlIHVzaW5nICQuZm4sIHJldHVybiB0aGUgalF1ZXJ5LS9aZXB0by13cmFwcGVkIGVsZW1lbnQgc2V0LiAqL1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudHNXcmFwcGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IEFyZ3VtZW50cyBBc3NpZ25tZW50XHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogVG8gYWxsb3cgZm9yIGV4cHJlc3NpdmUgQ29mZmVlU2NyaXB0IGNvZGUsIFZlbG9jaXR5IHN1cHBvcnRzIGFuIGFsdGVybmF0aXZlIHN5bnRheCBpbiB3aGljaCBcImVsZW1lbnRzXCIgKG9yIFwiZVwiKSwgXCJwcm9wZXJ0aWVzXCIgKG9yIFwicFwiKSwgYW5kIFwib3B0aW9uc1wiIChvciBcIm9cIilcclxuXHRcdFx0IG9iamVjdHMgYXJlIGRlZmluZWQgb24gYSBjb250YWluZXIgb2JqZWN0IHRoYXQncyBwYXNzZWQgaW4gYXMgVmVsb2NpdHkncyBzb2xlIGFyZ3VtZW50LiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBTb21lIGJyb3dzZXJzIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGUgYXJndW1lbnRzIHdpdGggYSBcInByb3BlcnRpZXNcIiBvYmplY3QuIFdlIGRldGVjdCBpdCBieSBjaGVja2luZyBmb3IgaXRzIGRlZmF1bHQgXCJuYW1lc1wiIHByb3BlcnR5LiAqL1xyXG5cdFx0XHR2YXIgc3ludGFjdGljU3VnYXIgPSAoYXJndW1lbnRzWzBdICYmIChhcmd1bWVudHNbMF0ucCB8fCAoKCQuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykgJiYgIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzKSB8fCBUeXBlLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSkpKSxcclxuXHRcdFx0XHRcdC8qIFdoZXRoZXIgVmVsb2NpdHkgd2FzIGNhbGxlZCB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24gKGFzIG9wcG9zZWQgdG8gb24gYSBqUXVlcnkvWmVwdG8gb2JqZWN0KS4gKi9cclxuXHRcdFx0XHRcdGlzVXRpbGl0eSxcclxuXHRcdFx0XHRcdC8qIFdoZW4gVmVsb2NpdHkgaXMgY2FsbGVkIHZpYSB0aGUgdXRpbGl0eSBmdW5jdGlvbiAoJC5WZWxvY2l0eSgpL1ZlbG9jaXR5KCkpLCBlbGVtZW50cyBhcmUgZXhwbGljaXRseVxyXG5cdFx0XHRcdFx0IHBhc3NlZCBpbiBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLiBUaHVzLCBhcmd1bWVudCBwb3NpdGlvbmluZyB2YXJpZXMuIFdlIG5vcm1hbGl6ZSB0aGVtIGhlcmUuICovXHJcblx0XHRcdFx0XHRlbGVtZW50c1dyYXBwZWQsXHJcblx0XHRcdFx0XHRhcmd1bWVudEluZGV4O1xyXG5cclxuXHRcdFx0dmFyIGVsZW1lbnRzLFxyXG5cdFx0XHRcdFx0cHJvcGVydGllc01hcCxcclxuXHRcdFx0XHRcdG9wdGlvbnM7XHJcblxyXG5cdFx0XHQvKiBEZXRlY3QgalF1ZXJ5L1plcHRvIGVsZW1lbnRzIGJlaW5nIGFuaW1hdGVkIHZpYSB0aGUgJC5mbiBtZXRob2QuICovXHJcblx0XHRcdGlmIChUeXBlLmlzV3JhcHBlZCh0aGlzKSkge1xyXG5cdFx0XHRcdGlzVXRpbGl0eSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRhcmd1bWVudEluZGV4ID0gMDtcclxuXHRcdFx0XHRlbGVtZW50cyA9IHRoaXM7XHJcblx0XHRcdFx0ZWxlbWVudHNXcmFwcGVkID0gdGhpcztcclxuXHRcdFx0XHQvKiBPdGhlcndpc2UsIHJhdyBlbGVtZW50cyBhcmUgYmVpbmcgYW5pbWF0ZWQgdmlhIHRoZSB1dGlsaXR5IGZ1bmN0aW9uLiAqL1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlzVXRpbGl0eSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGFyZ3VtZW50SW5kZXggPSAxO1xyXG5cdFx0XHRcdGVsZW1lbnRzID0gc3ludGFjdGljU3VnYXIgPyAoYXJndW1lbnRzWzBdLmVsZW1lbnRzIHx8IGFyZ3VtZW50c1swXS5lKSA6IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKlxyXG5cdFx0XHQgUHJvbWlzZXNcclxuXHRcdFx0ICoqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdHZhciBwcm9taXNlRGF0YSA9IHtcclxuXHRcdFx0XHRwcm9taXNlOiBudWxsLFxyXG5cdFx0XHRcdHJlc29sdmVyOiBudWxsLFxyXG5cdFx0XHRcdHJlamVjdGVyOiBudWxsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvKiBJZiB0aGlzIGNhbGwgd2FzIG1hZGUgdmlhIHRoZSB1dGlsaXR5IGZ1bmN0aW9uICh3aGljaCBpcyB0aGUgZGVmYXVsdCBtZXRob2Qgb2YgaW52b2NhdGlvbiB3aGVuIGpRdWVyeS9aZXB0byBhcmUgbm90IGJlaW5nIHVzZWQpLCBhbmQgaWZcclxuXHRcdFx0IHByb21pc2Ugc3VwcG9ydCB3YXMgZGV0ZWN0ZWQsIGNyZWF0ZSBhIHByb21pc2Ugb2JqZWN0IGZvciB0aGlzIGNhbGwgYW5kIHN0b3JlIHJlZmVyZW5jZXMgdG8gaXRzIHJlc29sdmVyIGFuZCByZWplY3RlciBtZXRob2RzLiBUaGUgcmVzb2x2ZVxyXG5cdFx0XHQgbWV0aG9kIGlzIHVzZWQgd2hlbiBhIGNhbGwgY29tcGxldGVzIG5hdHVyYWxseSBvciBpcyBwcmVtYXR1cmVseSBzdG9wcGVkIGJ5IHRoZSB1c2VyLiBJbiBib3RoIGNhc2VzLCBjb21wbGV0ZUNhbGwoKSBoYW5kbGVzIHRoZSBhc3NvY2lhdGVkXHJcblx0XHRcdCBjYWxsIGNsZWFudXAgYW5kIHByb21pc2UgcmVzb2x2aW5nIGxvZ2ljLiBUaGUgcmVqZWN0IG1ldGhvZCBpcyB1c2VkIHdoZW4gYW4gaW52YWxpZCBzZXQgb2YgYXJndW1lbnRzIGlzIHBhc3NlZCBpbnRvIGEgVmVsb2NpdHkgY2FsbC4gKi9cclxuXHRcdFx0LyogTm90ZTogVmVsb2NpdHkgZW1wbG95cyBhIGNhbGwtYmFzZWQgcXVldWVpbmcgYXJjaGl0ZWN0dXJlLCB3aGljaCBtZWFucyB0aGF0IHN0b3BwaW5nIGFuIGFuaW1hdGluZyBlbGVtZW50IGFjdHVhbGx5IHN0b3BzIHRoZSBmdWxsIGNhbGwgdGhhdFxyXG5cdFx0XHQgdHJpZ2dlcmVkIGl0IC0tIG5vdCB0aGF0IG9uZSBlbGVtZW50IGV4Y2x1c2l2ZWx5LiBTaW1pbGFybHksIHRoZXJlIGlzIG9uZSBwcm9taXNlIHBlciBjYWxsLCBhbmQgYWxsIGVsZW1lbnRzIHRhcmdldGVkIGJ5IGEgVmVsb2NpdHkgY2FsbCBhcmVcclxuXHRcdFx0IGdyb3VwZWQgdG9nZXRoZXIgZm9yIHRoZSBwdXJwb3NlcyBvZiByZXNvbHZpbmcgYW5kIHJlamVjdGluZyBhIHByb21pc2UuICovXHJcblx0XHRcdGlmIChpc1V0aWxpdHkgJiYgVmVsb2NpdHkuUHJvbWlzZSkge1xyXG5cdFx0XHRcdHByb21pc2VEYXRhLnByb21pc2UgPSBuZXcgVmVsb2NpdHkuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0XHRcdHByb21pc2VEYXRhLnJlc29sdmVyID0gcmVzb2x2ZTtcclxuXHRcdFx0XHRcdHByb21pc2VEYXRhLnJlamVjdGVyID0gcmVqZWN0O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc3ludGFjdGljU3VnYXIpIHtcclxuXHRcdFx0XHRwcm9wZXJ0aWVzTWFwID0gYXJndW1lbnRzWzBdLnByb3BlcnRpZXMgfHwgYXJndW1lbnRzWzBdLnA7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1swXS5vcHRpb25zIHx8IGFyZ3VtZW50c1swXS5vO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByb3BlcnRpZXNNYXAgPSBhcmd1bWVudHNbYXJndW1lbnRJbmRleF07XHJcblx0XHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudEluZGV4ICsgMV07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsZW1lbnRzID0gc2FuaXRpemVFbGVtZW50cyhlbGVtZW50cyk7XHJcblxyXG5cdFx0XHRpZiAoIWVsZW1lbnRzKSB7XHJcblx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcclxuXHRcdFx0XHRcdGlmICghcHJvcGVydGllc01hcCB8fCAhb3B0aW9ucyB8fCBvcHRpb25zLnByb21pc2VSZWplY3RFbXB0eSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVqZWN0ZXIoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByb21pc2VEYXRhLnJlc29sdmVyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogVGhlIGxlbmd0aCBvZiB0aGUgZWxlbWVudCBzZXQgKGluIHRoZSBmb3JtIG9mIGEgbm9kZUxpc3Qgb3IgYW4gYXJyYXkgb2YgZWxlbWVudHMpIGlzIGRlZmF1bHRlZCB0byAxIGluIGNhc2UgYVxyXG5cdFx0XHQgc2luZ2xlIHJhdyBET00gZWxlbWVudCBpcyBwYXNzZWQgaW4gKHdoaWNoIGRvZXNuJ3QgY29udGFpbiBhIGxlbmd0aCBwcm9wZXJ0eSkuICovXHJcblx0XHRcdHZhciBlbGVtZW50c0xlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcclxuXHRcdFx0XHRcdGVsZW1lbnRzSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQXJndW1lbnQgT3ZlcmxvYWRpbmdcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIFN1cHBvcnQgaXMgaW5jbHVkZWQgZm9yIGpRdWVyeSdzIGFyZ3VtZW50IG92ZXJsb2FkaW5nOiAkLmFuaW1hdGUocHJvcGVydHlNYXAgWywgZHVyYXRpb25dIFssIGVhc2luZ10gWywgY29tcGxldGVdKS5cclxuXHRcdFx0IE92ZXJsb2FkaW5nIGlzIGRldGVjdGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYWJzZW5jZSBvZiBhbiBvYmplY3QgYmVpbmcgcGFzc2VkIGludG8gb3B0aW9ucy4gKi9cclxuXHRcdFx0LyogTm90ZTogVGhlIHN0b3AvZmluaXNoL3BhdXNlL3Jlc3VtZSBhY3Rpb25zIGRvIG5vdCBhY2NlcHQgYW5pbWF0aW9uIG9wdGlvbnMsIGFuZCBhcmUgdGhlcmVmb3JlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay4gKi9cclxuXHRcdFx0aWYgKCEvXihzdG9wfGZpbmlzaHxmaW5pc2hBbGx8cGF1c2V8cmVzdW1lKSQvaS50ZXN0KHByb3BlcnRpZXNNYXApICYmICEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcclxuXHRcdFx0XHQvKiBUaGUgdXRpbGl0eSBmdW5jdGlvbiBzaGlmdHMgYWxsIGFyZ3VtZW50cyBvbmUgcG9zaXRpb24gdG8gdGhlIHJpZ2h0LCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgb2Zmc2V0LiAqL1xyXG5cdFx0XHRcdHZhciBzdGFydGluZ0FyZ3VtZW50UG9zaXRpb24gPSBhcmd1bWVudEluZGV4ICsgMTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggYWxsIG9wdGlvbnMgYXJndW1lbnRzICovXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHN0YXJ0aW5nQXJndW1lbnRQb3NpdGlvbjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0LyogVHJlYXQgYSBudW1iZXIgYXMgYSBkdXJhdGlvbi4gUGFyc2UgaXQgb3V0LiAqL1xyXG5cdFx0XHRcdFx0LyogTm90ZTogVGhlIGZvbGxvd2luZyBSZWdFeCB3aWxsIHJldHVybiB0cnVlIGlmIHBhc3NlZCBhbiBhcnJheSB3aXRoIGEgbnVtYmVyIGFzIGl0cyBmaXJzdCBpdGVtLlxyXG5cdFx0XHRcdFx0IFRodXMsIGFycmF5cyBhcmUgc2tpcHBlZCBmcm9tIHRoaXMgY2hlY2suICovXHJcblx0XHRcdFx0XHRpZiAoIVR5cGUuaXNBcnJheShhcmd1bWVudHNbaV0pICYmICgvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tpXSkgfHwgL15cXGQvLnRlc3QoYXJndW1lbnRzW2ldKSkpIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9ucy5kdXJhdGlvbiA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRcdFx0LyogVHJlYXQgc3RyaW5ncyBhbmQgYXJyYXlzIGFzIGVhc2luZ3MuICovXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoYXJndW1lbnRzW2ldKSB8fCBUeXBlLmlzQXJyYXkoYXJndW1lbnRzW2ldKSkge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zLmVhc2luZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRcdFx0LyogVHJlYXQgYSBmdW5jdGlvbiBhcyBhIGNvbXBsZXRlIGNhbGxiYWNrLiAqL1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24oYXJndW1lbnRzW2ldKSkge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zLmNvbXBsZXRlID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQWN0aW9uIERldGVjdGlvblxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogVmVsb2NpdHkncyBiZWhhdmlvciBpcyBjYXRlZ29yaXplZCBpbnRvIFwiYWN0aW9uc1wiOiBFbGVtZW50cyBjYW4gZWl0aGVyIGJlIHNwZWNpYWxseSBzY3JvbGxlZCBpbnRvIHZpZXcsXHJcblx0XHRcdCBvciB0aGV5IGNhbiBiZSBzdGFydGVkLCBzdG9wcGVkLCBwYXVzZWQsIHJlc3VtZWQsIG9yIHJldmVyc2VkIC4gSWYgYSBsaXRlcmFsIG9yIHJlZmVyZW5jZWQgcHJvcGVydGllcyBtYXAgaXMgcGFzc2VkIGluIGFzIFZlbG9jaXR5J3NcclxuXHRcdFx0IGZpcnN0IGFyZ3VtZW50LCB0aGUgYXNzb2NpYXRlZCBhY3Rpb24gaXMgXCJzdGFydFwiLiBBbHRlcm5hdGl2ZWx5LCBcInNjcm9sbFwiLCBcInJldmVyc2VcIiwgXCJwYXVzZVwiLCBcInJlc3VtZVwiIG9yIFwic3RvcFwiIGNhbiBiZSBwYXNzZWQgaW4gXHJcblx0XHRcdCBpbnN0ZWFkIG9mIGEgcHJvcGVydGllcyBtYXAuICovXHJcblx0XHRcdHZhciBhY3Rpb247XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHByb3BlcnRpZXNNYXApIHtcclxuXHRcdFx0XHRjYXNlIFwic2Nyb2xsXCI6XHJcblx0XHRcdFx0XHRhY3Rpb24gPSBcInNjcm9sbFwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJyZXZlcnNlXCI6XHJcblx0XHRcdFx0XHRhY3Rpb24gPSBcInJldmVyc2VcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwicGF1c2VcIjpcclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IEFjdGlvbjogUGF1c2VcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdHZhciBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0XHRcdFx0LyogSGFuZGxlIGRlbGF5IHRpbWVycyAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHBhdXNlRGVsYXlPbkVsZW1lbnQoZWxlbWVudCwgY3VycmVudFRpbWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0LyogUGF1c2UgYW5kIFJlc3VtZSBhcmUgY2FsbC13aWRlIChub3Qgb24gYSBwZXIgZWxlbWVudCBiYXNpcykuIFRodXMsIGNhbGxpbmcgcGF1c2Ugb3IgcmVzdW1lIG9uIGEgXHJcblx0XHRcdFx0XHQgc2luZ2xlIGVsZW1lbnQgd2lsbCBjYXVzZSBhbnkgY2FsbHMgdGhhdCBjb250YWludCB0d2VlbnMgZm9yIHRoYXQgZWxlbWVudCB0byBiZSBwYXVzZWQvcmVzdW1lZFxyXG5cdFx0XHRcdFx0IGFzIHdlbGwuICovXHJcblxyXG5cdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGFsbCBjYWxscyBhbmQgcGF1c2UgYW55IHRoYXQgY29udGFpbiBhbnkgb2Ygb3VyIGVsZW1lbnRzICovXHJcblx0XHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHQvKiBJbmFjdGl2ZSBjYWxscyBhcmUgc2V0IHRvIGZhbHNlIGJ5IHRoZSBsb2dpYyBpbnNpZGUgY29tcGxldGVDYWxsKCkuIFNraXAgdGhlbS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKGFjdGl2ZUNhbGwpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGFjdGl2ZSBjYWxsJ3MgdGFyZ2V0ZWQgZWxlbWVudHMuICovXHJcblx0XHRcdFx0XHRcdFx0JC5lYWNoKGFjdGl2ZUNhbGxbMV0sIGZ1bmN0aW9uKGssIGFjdGl2ZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBxdWV1ZU5hbWUgPSAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSA/IFwiXCIgOiBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHRydWUgJiYgKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgJiYgIShvcHRpb25zID09PSB1bmRlZmluZWQgJiYgYWN0aXZlQ2FsbFsyXS5xdWV1ZSA9PT0gZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2FsbHMgdGFyZ2V0ZWQgYnkgdGhlIHN0b3AgY29tbWFuZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24obCwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHRoaXMgY2FsbCB3YXMgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFNldCBjYWxsIHRvIHBhdXNlZCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbNV0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bWU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogT25jZSB3ZSBtYXRjaCBhbiBlbGVtZW50LCB3ZSBjYW4gYm91bmNlIG91dCB0byB0aGUgbmV4dCBjYWxsIGVudGlyZWx5ICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm91bmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogUHJvY2VlZCB0byBjaGVjayBuZXh0IGNhbGwgaWYgd2UgaGF2ZSBhbHJlYWR5IG1hdGNoZWQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChmb3VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvKiBTaW5jZSBwYXVzZSBjcmVhdGVzIG5vIG5ldyB0d2VlbnMsIGV4aXQgb3V0IG9mIFZlbG9jaXR5LiAqL1xyXG5cdFx0XHRcdFx0cmV0dXJuIGdldENoYWluKCk7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJyZXN1bWVcIjpcclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IEFjdGlvbjogUmVzdW1lXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBIYW5kbGUgZGVsYXkgdGltZXJzICovXHJcblx0XHRcdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmVzdW1lRGVsYXlPbkVsZW1lbnQoZWxlbWVudCwgY3VycmVudFRpbWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0LyogUGF1c2UgYW5kIFJlc3VtZSBhcmUgY2FsbC13aWRlIChub3Qgb24gYSBwZXIgZWxlbW50IGJhc2lzKS4gVGh1cywgY2FsbGluZyBwYXVzZSBvciByZXN1bWUgb24gYSBcclxuXHRcdFx0XHRcdCBzaW5nbGUgZWxlbWVudCB3aWxsIGNhdXNlIGFueSBjYWxscyB0aGF0IGNvbnRhaW50IHR3ZWVucyBmb3IgdGhhdCBlbGVtZW50IHRvIGJlIHBhdXNlZC9yZXN1bWVkXHJcblx0XHRcdFx0XHQgYXMgd2VsbC4gKi9cclxuXHJcblx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggYWxsIGNhbGxzIGFuZCBwYXVzZSBhbnkgdGhhdCBjb250YWluIGFueSBvZiBvdXIgZWxlbWVudHMgKi9cclxuXHRcdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5jYWxscywgZnVuY3Rpb24oaSwgYWN0aXZlQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgZm91bmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0LyogSW5hY3RpdmUgY2FsbHMgYXJlIHNldCB0byBmYWxzZSBieSB0aGUgbG9naWMgaW5zaWRlIGNvbXBsZXRlQ2FsbCgpLiBTa2lwIHRoZW0uICovXHJcblx0XHRcdFx0XHRcdGlmIChhY3RpdmVDYWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBhY3RpdmUgY2FsbCdzIHRhcmdldGVkIGVsZW1lbnRzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChhY3RpdmVDYWxsWzFdLCBmdW5jdGlvbihrLCBhY3RpdmVFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgcXVldWVOYW1lID0gKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgPyBcIlwiIDogb3B0aW9ucztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB0cnVlICYmIChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpICYmICEob3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIGFjdGl2ZUNhbGxbMl0ucXVldWUgPT09IGZhbHNlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBTa2lwIGFueSBjYWxscyB0aGF0IGhhdmUgbmV2ZXIgYmVlbiBwYXVzZWQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmICghYWN0aXZlQ2FsbFs1XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNhbGxzIHRhcmdldGVkIGJ5IHRoZSBzdG9wIGNvbW1hbmQuICovXHJcblx0XHRcdFx0XHRcdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGwsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogQ2hlY2sgdGhhdCB0aGlzIGNhbGwgd2FzIGFwcGxpZWQgdG8gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBGbGFnIGEgcGF1c2Ugb2JqZWN0IHRvIGJlIHJlc3VtZWQsIHdoaWNoIHdpbGwgb2NjdXIgZHVyaW5nIHRoZSBuZXh0IHRpY2suIEluXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGFkZGl0aW9uLCB0aGUgcGF1c2Ugb2JqZWN0IHdpbGwgYXQgdGhhdCB0aW1lIGJlIGRlbGV0ZWQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDYWxsWzVdLnJlc3VtZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE9uY2Ugd2UgbWF0Y2ggYW4gZWxlbWVudCwgd2UgY2FuIGJvdW5jZSBvdXQgdG8gdGhlIG5leHQgY2FsbCBlbnRpcmVseSAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvdW5kID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFByb2NlZWQgdG8gY2hlY2sgbmV4dCBjYWxsIGlmIHdlIGhhdmUgYWxyZWFkeSBtYXRjaGVkICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZm91bmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0LyogU2luY2UgcmVzdW1lIGNyZWF0ZXMgbm8gbmV3IHR3ZWVucywgZXhpdCBvdXQgb2YgVmVsb2NpdHkuICovXHJcblx0XHRcdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHJcblx0XHRcdFx0Y2FzZSBcImZpbmlzaFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJmaW5pc2hBbGxcIjpcclxuXHRcdFx0XHRjYXNlIFwic3RvcFwiOlxyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBBY3Rpb246IFN0b3BcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIENsZWFyIHRoZSBjdXJyZW50bHktYWN0aXZlIGRlbGF5IG9uIGVhY2ggdGFyZ2V0ZWQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSAmJiBEYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBTdG9wIHRoZSB0aW1lciBmcm9tIHRyaWdnZXJpbmcgaXRzIGNhY2hlZCBuZXh0KCkgZnVuY3Rpb24uICovXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KERhdGEoZWxlbWVudCkuZGVsYXlUaW1lci5zZXRUaW1lb3V0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogTWFudWFsbHkgY2FsbCB0aGUgbmV4dCgpIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHN1YnNlcXVlbnQgcXVldWUgaXRlbXMgY2FuIHByb2dyZXNzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChEYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIubmV4dCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheVRpbWVyLm5leHQoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBEYXRhKGVsZW1lbnQpLmRlbGF5VGltZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIElmIHdlIHdhbnQgdG8gZmluaXNoIGV2ZXJ5dGhpbmcgaW4gdGhlIHF1ZXVlLCB3ZSBoYXZlIHRvIGl0ZXJhdGUgdGhyb3VnaCBpdFxyXG5cdFx0XHRcdFx0XHQgYW5kIGNhbGwgZWFjaCBmdW5jdGlvbi4gVGhpcyB3aWxsIG1ha2UgdGhlbSBhY3RpdmUgY2FsbHMgYmVsb3csIHdoaWNoIHdpbGxcclxuXHRcdFx0XHRcdFx0IGNhdXNlIHRoZW0gdG8gYmUgYXBwbGllZCB2aWEgdGhlIGR1cmF0aW9uIHNldHRpbmcuICovXHJcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0aWVzTWFwID09PSBcImZpbmlzaEFsbFwiICYmIChvcHRpb25zID09PSB0cnVlIHx8IFR5cGUuaXNTdHJpbmcob3B0aW9ucykpKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBpdGVtcyBpbiB0aGUgZWxlbWVudCdzIHF1ZXVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdCQuZWFjaCgkLnF1ZXVlKGVsZW1lbnQsIFR5cGUuaXNTdHJpbmcob3B0aW9ucykgPyBvcHRpb25zIDogXCJcIiksIGZ1bmN0aW9uKF8sIGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBxdWV1ZSBhcnJheSBjYW4gY29udGFpbiBhbiBcImlucHJvZ3Jlc3NcIiBzdHJpbmcsIHdoaWNoIHdlIHNraXAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKGl0ZW0pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQ2xlYXJpbmcgdGhlICQucXVldWUoKSBhcnJheSBpcyBhY2hpZXZlZCBieSByZXNldHRpbmcgaXQgdG8gW10uICovXHJcblx0XHRcdFx0XHRcdFx0JC5xdWV1ZShlbGVtZW50LCBUeXBlLmlzU3RyaW5nKG9wdGlvbnMpID8gb3B0aW9ucyA6IFwiXCIsIFtdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNhbGxzVG9TdG9wID0gW107XHJcblxyXG5cdFx0XHRcdFx0LyogV2hlbiB0aGUgc3RvcCBhY3Rpb24gaXMgdHJpZ2dlcmVkLCB0aGUgZWxlbWVudHMnIGN1cnJlbnRseSBhY3RpdmUgY2FsbCBpcyBpbW1lZGlhdGVseSBzdG9wcGVkLiBUaGUgYWN0aXZlIGNhbGwgbWlnaHQgaGF2ZVxyXG5cdFx0XHRcdFx0IGJlZW4gYXBwbGllZCB0byBtdWx0aXBsZSBlbGVtZW50cywgaW4gd2hpY2ggY2FzZSBhbGwgb2YgdGhlIGNhbGwncyBlbGVtZW50cyB3aWxsIGJlIHN0b3BwZWQuIFdoZW4gYW4gZWxlbWVudFxyXG5cdFx0XHRcdFx0IGlzIHN0b3BwZWQsIHRoZSBuZXh0IGl0ZW0gaW4gaXRzIGFuaW1hdGlvbiBxdWV1ZSBpcyBpbW1lZGlhdGVseSB0cmlnZ2VyZWQuICovXHJcblx0XHRcdFx0XHQvKiBBbiBhZGRpdGlvbmFsIGFyZ3VtZW50IG1heSBiZSBwYXNzZWQgaW4gdG8gY2xlYXIgYW4gZWxlbWVudCdzIHJlbWFpbmluZyBxdWV1ZWQgY2FsbHMuIEVpdGhlciB0cnVlICh3aGljaCBkZWZhdWx0cyB0byB0aGUgXCJmeFwiIHF1ZXVlKVxyXG5cdFx0XHRcdFx0IG9yIGEgY3VzdG9tIHF1ZXVlIHN0cmluZyBjYW4gYmUgcGFzc2VkIGluLiAqL1xyXG5cdFx0XHRcdFx0LyogTm90ZTogVGhlIHN0b3AgY29tbWFuZCBydW5zIHByaW9yIHRvIFZlbG9jaXR5J3MgUXVldWVpbmcgcGhhc2Ugc2luY2UgaXRzIGJlaGF2aW9yIGlzIGludGVuZGVkIHRvIHRha2UgZWZmZWN0ICppbW1lZGlhdGVseSosXHJcblx0XHRcdFx0XHQgcmVnYXJkbGVzcyBvZiB0aGUgZWxlbWVudCdzIGN1cnJlbnQgcXVldWUgc3RhdGUuICovXHJcblxyXG5cdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGV2ZXJ5IGFjdGl2ZSBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmNhbGxzLCBmdW5jdGlvbihpLCBhY3RpdmVDYWxsKSB7XHJcblx0XHRcdFx0XHRcdC8qIEluYWN0aXZlIGNhbGxzIGFyZSBzZXQgdG8gZmFsc2UgYnkgdGhlIGxvZ2ljIGluc2lkZSBjb21wbGV0ZUNhbGwoKS4gU2tpcCB0aGVtLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgYWN0aXZlIGNhbGwncyB0YXJnZXRlZCBlbGVtZW50cy4gKi9cclxuXHRcdFx0XHRcdFx0XHQkLmVhY2goYWN0aXZlQ2FsbFsxXSwgZnVuY3Rpb24oaywgYWN0aXZlRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgdHJ1ZSB3YXMgcGFzc2VkIGluIGFzIGEgc2Vjb25kYXJ5IGFyZ3VtZW50LCBjbGVhciBhYnNvbHV0ZWx5IGFsbCBjYWxscyBvbiB0aGlzIGVsZW1lbnQuIE90aGVyd2lzZSwgb25seVxyXG5cdFx0XHRcdFx0XHRcdFx0IGNsZWFyIGNhbGxzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVsZXZhbnQgcXVldWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBDYWxsIHN0b3BwaW5nIGxvZ2ljIHdvcmtzIGFzIGZvbGxvd3M6XHJcblx0XHRcdFx0XHRcdFx0XHQgLSBvcHRpb25zID09PSB0cnVlIC0tPiBzdG9wIGN1cnJlbnQgZGVmYXVsdCBxdWV1ZSBjYWxscyAoYW5kIHF1ZXVlOmZhbHNlIGNhbGxzKSwgaW5jbHVkaW5nIHJlbWFpbmluZyBxdWV1ZWQgb25lcy5cclxuXHRcdFx0XHRcdFx0XHRcdCAtIG9wdGlvbnMgPT09IHVuZGVmaW5lZCAtLT4gc3RvcCBjdXJyZW50IHF1ZXVlOlwiXCIgY2FsbCBhbmQgYWxsIHF1ZXVlOmZhbHNlIGNhbGxzLlxyXG5cdFx0XHRcdFx0XHRcdFx0IC0gb3B0aW9ucyA9PT0gZmFsc2UgLS0+IHN0b3Agb25seSBxdWV1ZTpmYWxzZSBjYWxscy5cclxuXHRcdFx0XHRcdFx0XHRcdCAtIG9wdGlvbnMgPT09IFwiY3VzdG9tXCIgLS0+IHN0b3AgY3VycmVudCBxdWV1ZTpcImN1c3RvbVwiIGNhbGwsIGluY2x1ZGluZyByZW1haW5pbmcgcXVldWVkIG9uZXMgKHRoZXJlIGlzIG5vIGZ1bmN0aW9uYWxpdHkgdG8gb25seSBjbGVhciB0aGUgY3VycmVudGx5LXJ1bm5pbmcgcXVldWU6XCJjdXN0b21cIiBjYWxsKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHZhciBxdWV1ZU5hbWUgPSAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSA/IFwiXCIgOiBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHRydWUgJiYgKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgJiYgIShvcHRpb25zID09PSB1bmRlZmluZWQgJiYgYWN0aXZlQ2FsbFsyXS5xdWV1ZSA9PT0gZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2FsbHMgdGFyZ2V0ZWQgYnkgdGhlIHN0b3AgY29tbWFuZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24obCwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHRoaXMgY2FsbCB3YXMgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogT3B0aW9uYWxseSBjbGVhciB0aGUgcmVtYWluaW5nIHF1ZXVlZCBjYWxscy4gSWYgd2UncmUgZG9pbmcgXCJmaW5pc2hBbGxcIiB0aGlzIHdvbid0IGZpbmQgYW55dGhpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGR1ZSB0byB0aGUgcXVldWUtY2xlYXJpbmcgYWJvdmUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMgPT09IHRydWUgfHwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBpdGVtcyBpbiB0aGUgZWxlbWVudCdzIHF1ZXVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JC5lYWNoKCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiKSwgZnVuY3Rpb24oXywgaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgcXVldWUgYXJyYXkgY2FuIGNvbnRhaW4gYW4gXCJpbnByb2dyZXNzXCIgc3RyaW5nLCB3aGljaCB3ZSBza2lwLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKGl0ZW0pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogUGFzcyB0aGUgaXRlbSdzIGNhbGxiYWNrIGEgZmxhZyBpbmRpY2F0aW5nIHRoYXQgd2Ugd2FudCB0byBhYm9ydCBmcm9tIHRoZSBxdWV1ZSBjYWxsLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAoU3BlY2lmaWNhbGx5LCB0aGUgcXVldWUgd2lsbCByZXNvbHZlIHRoZSBjYWxsJ3MgYXNzb2NpYXRlZCBwcm9taXNlIHRoZW4gYWJvcnQuKSAgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtKG51bGwsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDbGVhcmluZyB0aGUgJC5xdWV1ZSgpIGFycmF5IGlzIGFjaGlldmVkIGJ5IHJlc2V0dGluZyBpdCB0byBbXS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiLCBbXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocHJvcGVydGllc01hcCA9PT0gXCJzdG9wXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFNpbmNlIFwicmV2ZXJzZVwiIHVzZXMgY2FjaGVkIHN0YXJ0IHZhbHVlcyAodGhlIHByZXZpb3VzIGNhbGwncyBlbmRWYWx1ZXMpLCB0aGVzZSB2YWx1ZXMgbXVzdCBiZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNoYW5nZWQgdG8gcmVmbGVjdCB0aGUgZmluYWwgdmFsdWUgdGhhdCB0aGUgZWxlbWVudHMgd2VyZSBhY3R1YWxseSB0d2VlbmVkIHRvLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogSWYgb25seSBxdWV1ZTpmYWxzZS9xdWV1ZTpcImN1c3RvbVwiIGFuaW1hdGlvbnMgYXJlIGN1cnJlbnRseSBydW5uaW5nIG9uIGFuIGVsZW1lbnQsIGl0IHdvbid0IGhhdmUgYSB0d2VlbnNDb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvYmplY3QuIEFsc28sIHF1ZXVlOmZhbHNlL3F1ZXVlOlwiY3VzdG9tXCIgYW5pbWF0aW9ucyBjYW4ndCBiZSByZXZlcnNlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEudHdlZW5zQ29udGFpbmVyICYmIChxdWV1ZU5hbWUgPT09IHRydWUgfHwgcXVldWVOYW1lID09PSBcIlwiKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkLmVhY2goZGF0YS50d2VlbnNDb250YWluZXIsIGZ1bmN0aW9uKG0sIGFjdGl2ZVR3ZWVuKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlVHdlZW4uZW5kVmFsdWUgPSBhY3RpdmVUd2Vlbi5jdXJyZW50VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxzVG9TdG9wLnB1c2goaSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0aWVzTWFwID09PSBcImZpbmlzaFwiIHx8IHByb3BlcnRpZXNNYXAgPT09IFwiZmluaXNoQWxsXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFRvIGdldCBhY3RpdmUgdHdlZW5zIHRvIGZpbmlzaCBpbW1lZGlhdGVseSwgd2UgZm9yY2VmdWxseSBzaG9ydGVuIHRoZWlyIGR1cmF0aW9ucyB0byAxbXMgc28gdGhhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHRoZXkgZmluaXNoIHVwb24gdGhlIG5leHQgckFmIHRpY2sgdGhlbiBwcm9jZWVkIHdpdGggbm9ybWFsIGNhbGwgY29tcGxldGlvbiBsb2dpYy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbMl0uZHVyYXRpb24gPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdC8qIFByZW1hdHVyZWx5IGNhbGwgY29tcGxldGVDYWxsKCkgb24gZWFjaCBtYXRjaGVkIGFjdGl2ZSBjYWxsLiBQYXNzIGFuIGFkZGl0aW9uYWwgZmxhZyBmb3IgXCJzdG9wXCIgdG8gaW5kaWNhdGVcclxuXHRcdFx0XHRcdCB0aGF0IHRoZSBjb21wbGV0ZSBjYWxsYmFjayBhbmQgZGlzcGxheTpub25lIHNldHRpbmcgc2hvdWxkIGJlIHNraXBwZWQgc2luY2Ugd2UncmUgY29tcGxldGluZyBwcmVtYXR1cmVseS4gKi9cclxuXHRcdFx0XHRcdGlmIChwcm9wZXJ0aWVzTWFwID09PSBcInN0b3BcIikge1xyXG5cdFx0XHRcdFx0XHQkLmVhY2goY2FsbHNUb1N0b3AsIGZ1bmN0aW9uKGksIGopIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZUNhbGwoaiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJbW1lZGlhdGVseSByZXNvbHZlIHRoZSBwcm9taXNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0b3AgY2FsbCBzaW5jZSBzdG9wIHJ1bnMgc3luY2hyb25vdXNseS4gKi9cclxuXHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBTaW5jZSB3ZSdyZSBzdG9wcGluZywgYW5kIG5vdCBwcm9jZWVkaW5nIHdpdGggcXVldWVpbmcsIGV4aXQgb3V0IG9mIFZlbG9jaXR5LiAqL1xyXG5cdFx0XHRcdFx0cmV0dXJuIGdldENoYWluKCk7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHQvKiBUcmVhdCBhIG5vbi1lbXB0eSBwbGFpbiBvYmplY3QgYXMgYSBsaXRlcmFsIHByb3BlcnRpZXMgbWFwLiAqL1xyXG5cdFx0XHRcdFx0aWYgKCQuaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzTWFwKSAmJiAhVHlwZS5pc0VtcHR5T2JqZWN0KHByb3BlcnRpZXNNYXApKSB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbiA9IFwic3RhcnRcIjtcclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBSZWRpcmVjdHNcclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHQvKiBDaGVjayBpZiBhIHN0cmluZyBtYXRjaGVzIGEgcmVnaXN0ZXJlZCByZWRpcmVjdCAoc2VlIFJlZGlyZWN0cyBhYm92ZSkuICovXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcocHJvcGVydGllc01hcCkgJiYgVmVsb2NpdHkuUmVkaXJlY3RzW3Byb3BlcnRpZXNNYXBdKSB7XHJcblx0XHRcdFx0XHRcdG9wdHMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZHVyYXRpb25PcmlnaW5hbCA9IG9wdHMuZHVyYXRpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRkZWxheU9yaWdpbmFsID0gb3B0cy5kZWxheSB8fCAwO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIGJhY2t3YXJkcyBvcHRpb24gd2FzIHBhc3NlZCBpbiwgcmV2ZXJzZSB0aGUgZWxlbWVudCBzZXQgc28gdGhhdCBlbGVtZW50cyBhbmltYXRlIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0LiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0cy5iYWNrd2FyZHMgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50cyA9ICQuZXh0ZW5kKHRydWUsIFtdLCBlbGVtZW50cykucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJbmRpdmlkdWFsbHkgdHJpZ2dlciB0aGUgcmVkaXJlY3QgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IHRvIHByZXZlbnQgdXNlcnMgZnJvbSBoYXZpbmcgdG8gaGFuZGxlIGl0ZXJhdGlvbiBsb2dpYyBpbiB0aGVpciByZWRpcmVjdC4gKi9cclxuXHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihlbGVtZW50SW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgc3RhZ2dlciBvcHRpb24gd2FzIHBhc3NlZCBpbiwgc3VjY2Vzc2l2ZWx5IGRlbGF5IGVhY2ggZWxlbWVudCBieSB0aGUgc3RhZ2dlciB2YWx1ZSAoaW4gbXMpLiBSZXRhaW4gdGhlIG9yaWdpbmFsIGRlbGF5IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwYXJzZUZsb2F0KG9wdHMuc3RhZ2dlcikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdHMuZGVsYXkgPSBkZWxheU9yaWdpbmFsICsgKHBhcnNlRmxvYXQob3B0cy5zdGFnZ2VyKSAqIGVsZW1lbnRJbmRleCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24ob3B0cy5zdGFnZ2VyKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5kZWxheSA9IGRlbGF5T3JpZ2luYWwgKyBvcHRzLnN0YWdnZXIuY2FsbChlbGVtZW50LCBlbGVtZW50SW5kZXgsIGVsZW1lbnRzTGVuZ3RoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBkcmFnIG9wdGlvbiB3YXMgcGFzc2VkIGluLCBzdWNjZXNzaXZlbHkgaW5jcmVhc2UvZGVjcmVhc2UgKGRlcGVuZGluZyBvbiB0aGUgcHJlc2Vuc2Ugb2Ygb3B0cy5iYWNrd2FyZHMpXHJcblx0XHRcdFx0XHRcdFx0IHRoZSBkdXJhdGlvbiBvZiBlYWNoIGVsZW1lbnQncyBhbmltYXRpb24sIHVzaW5nIGZsb29ycyB0byBwcmV2ZW50IHByb2R1Y2luZyB2ZXJ5IHNob3J0IGR1cmF0aW9ucy4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAob3B0cy5kcmFnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBEZWZhdWx0IHRoZSBkdXJhdGlvbiBvZiBVSSBwYWNrIGVmZmVjdHMgKGNhbGxvdXRzIGFuZCB0cmFuc2l0aW9ucykgdG8gMTAwMG1zIGluc3RlYWQgb2YgdGhlIHVzdWFsIGRlZmF1bHQgZHVyYXRpb24gb2YgNDAwbXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbk9yaWdpbmFsKSB8fCAoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdChwcm9wZXJ0aWVzTWFwKSA/IDEwMDAgOiBEVVJBVElPTl9ERUZBVUxUKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgZWFjaCBlbGVtZW50LCB0YWtlIHRoZSBncmVhdGVyIGR1cmF0aW9uIG9mOiBBKSBhbmltYXRpb24gY29tcGxldGlvbiBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBvcmlnaW5hbCBkdXJhdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdCBCKSA3NSUgb2YgdGhlIG9yaWdpbmFsIGR1cmF0aW9uLCBvciBDKSBhIDIwMG1zIGZhbGxiYWNrIChpbiBjYXNlIGR1cmF0aW9uIGlzIGFscmVhZHkgc2V0IHRvIGEgbG93IHZhbHVlKS5cclxuXHRcdFx0XHRcdFx0XHRcdCBUaGUgZW5kIHJlc3VsdCBpcyBhIGJhc2VsaW5lIG9mIDc1JSBvZiB0aGUgcmVkaXJlY3QncyBkdXJhdGlvbiB0aGF0IGluY3JlYXNlcy9kZWNyZWFzZXMgYXMgdGhlIGVuZCBvZiB0aGUgZWxlbWVudCBzZXQgaXMgYXBwcm9hY2hlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBNYXRoLm1heChvcHRzLmR1cmF0aW9uICogKG9wdHMuYmFja3dhcmRzID8gMSAtIGVsZW1lbnRJbmRleCAvIGVsZW1lbnRzTGVuZ3RoIDogKGVsZW1lbnRJbmRleCArIDEpIC8gZWxlbWVudHNMZW5ndGgpLCBvcHRzLmR1cmF0aW9uICogMC43NSwgMjAwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIFBhc3MgaW4gdGhlIGNhbGwncyBvcHRzIG9iamVjdCBzbyB0aGF0IHRoZSByZWRpcmVjdCBjYW4gb3B0aW9uYWxseSBleHRlbmQgaXQuIEl0IGRlZmF1bHRzIHRvIGFuIGVtcHR5IG9iamVjdCBpbnN0ZWFkIG9mIG51bGwgdG9cclxuXHRcdFx0XHRcdFx0XHQgcmVkdWNlIHRoZSBvcHRzIGNoZWNraW5nIGxvZ2ljIHJlcXVpcmVkIGluc2lkZSB0aGUgcmVkaXJlY3QuICovXHJcblx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuUmVkaXJlY3RzW3Byb3BlcnRpZXNNYXBdLmNhbGwoZWxlbWVudCwgZWxlbWVudCwgb3B0cyB8fCB7fSwgZWxlbWVudEluZGV4LCBlbGVtZW50c0xlbmd0aCwgZWxlbWVudHMsIHByb21pc2VEYXRhLnByb21pc2UgPyBwcm9taXNlRGF0YSA6IHVuZGVmaW5lZCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogU2luY2UgdGhlIGFuaW1hdGlvbiBsb2dpYyByZXNpZGVzIHdpdGhpbiB0aGUgcmVkaXJlY3QncyBvd24gY29kZSwgYWJvcnQgdGhlIHJlbWFpbmRlciBvZiB0aGlzIGNhbGwuXHJcblx0XHRcdFx0XHRcdCAoVGhlIHBlcmZvcm1hbmNlIG92ZXJoZWFkIHVwIHRvIHRoaXMgcG9pbnQgaXMgdmlydHVhbGx5IG5vbi1leGlzdGFudC4pICovXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IFRoZSBqUXVlcnkgY2FsbCBjaGFpbiBpcyBrZXB0IGludGFjdCBieSByZXR1cm5pbmcgdGhlIGNvbXBsZXRlIGVsZW1lbnQgc2V0LiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gXCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiICsgcHJvcGVydGllc01hcCArIFwiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChwcm9taXNlRGF0YS5wcm9taXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVqZWN0ZXIobmV3IEVycm9yKGFib3J0RXJyb3IpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFib3J0RXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDYWxsLVdpZGUgVmFyaWFibGVzXHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIEEgY29udGFpbmVyIGZvciBDU1MgdW5pdCBjb252ZXJzaW9uIHJhdGlvcyAoZS5nLiAlLCByZW0sIGFuZCBlbSA9PT4gcHgpIHRoYXQgaXMgdXNlZCB0byBjYWNoZSByYXRpb3MgYWNyb3NzIGFsbCBlbGVtZW50c1xyXG5cdFx0XHQgYmVpbmcgYW5pbWF0ZWQgaW4gYSBzaW5nbGUgVmVsb2NpdHkgY2FsbC4gQ2FsY3VsYXRpbmcgdW5pdCByYXRpb3MgbmVjZXNzaXRhdGVzIERPTSBxdWVyeWluZyBhbmQgdXBkYXRpbmcsIGFuZCBpcyB0aGVyZWZvcmVcclxuXHRcdFx0IGF2b2lkZWQgKHZpYSBjYWNoaW5nKSB3aGVyZXZlciBwb3NzaWJsZS4gVGhpcyBjb250YWluZXIgaXMgY2FsbC13aWRlIGluc3RlYWQgb2YgcGFnZS13aWRlIHRvIGF2b2lkIHRoZSByaXNrIG9mIHVzaW5nIHN0YWxlXHJcblx0XHRcdCBjb252ZXJzaW9uIG1ldHJpY3MgYWNyb3NzIFZlbG9jaXR5IGFuaW1hdGlvbnMgdGhhdCBhcmUgbm90IGltbWVkaWF0ZWx5IGNvbnNlY3V0aXZlbHkgY2hhaW5lZC4gKi9cclxuXHRcdFx0dmFyIGNhbGxVbml0Q29udmVyc2lvbkRhdGEgPSB7XHJcblx0XHRcdFx0bGFzdFBhcmVudDogbnVsbCxcclxuXHRcdFx0XHRsYXN0UG9zaXRpb246IG51bGwsXHJcblx0XHRcdFx0bGFzdEZvbnRTaXplOiBudWxsLFxyXG5cdFx0XHRcdGxhc3RQZXJjZW50VG9QeFdpZHRoOiBudWxsLFxyXG5cdFx0XHRcdGxhc3RQZXJjZW50VG9QeEhlaWdodDogbnVsbCxcclxuXHRcdFx0XHRsYXN0RW1Ub1B4OiBudWxsLFxyXG5cdFx0XHRcdHJlbVRvUHg6IG51bGwsXHJcblx0XHRcdFx0dndUb1B4OiBudWxsLFxyXG5cdFx0XHRcdHZoVG9QeDogbnVsbFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0LyogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgZW5zdWluZyB0d2VlbiBkYXRhIGFuZCBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjYWxsLiBUaGlzIGNvbnRhaW5lciBnZXRzIHB1c2hlZCB0byB0aGUgcGFnZS13aWRlXHJcblx0XHRcdCBWZWxvY2l0eS5TdGF0ZS5jYWxscyBhcnJheSB0aGF0IGlzIHByb2Nlc3NlZCBkdXJpbmcgYW5pbWF0aW9uIHRpY2tpbmcuICovXHJcblx0XHRcdHZhciBjYWxsID0gW107XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBFbGVtZW50IFByb2Nlc3NpbmdcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIEVsZW1lbnQgcHJvY2Vzc2luZyBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyAtLSBkYXRhIHByb2Nlc3NpbmcgdGhhdCBjYW5ub3QgZ28gc3RhbGUgYW5kIGRhdGEgcHJvY2Vzc2luZyB0aGF0ICpjYW4qIGdvIHN0YWxlIChpLmUuIHRoaXJkLXBhcnR5IHN0eWxlIG1vZGlmaWNhdGlvbnMpOlxyXG5cdFx0XHQgMSkgUHJlLVF1ZXVlaW5nOiBFbGVtZW50LXdpZGUgdmFyaWFibGVzLCBpbmNsdWRpbmcgdGhlIGVsZW1lbnQncyBkYXRhIHN0b3JhZ2UsIGFyZSBpbnN0YW50aWF0ZWQuIENhbGwgb3B0aW9ucyBhcmUgcHJlcGFyZWQuIElmIHRyaWdnZXJlZCwgdGhlIFN0b3AgYWN0aW9uIGlzIGV4ZWN1dGVkLlxyXG5cdFx0XHQgMikgUXVldWVpbmc6IFRoZSBsb2dpYyB0aGF0IHJ1bnMgb25jZSB0aGlzIGNhbGwgaGFzIHJlYWNoZWQgaXRzIHBvaW50IG9mIGV4ZWN1dGlvbiBpbiB0aGUgZWxlbWVudCdzICQucXVldWUoKSBzdGFjay4gTW9zdCBsb2dpYyBpcyBwbGFjZWQgaGVyZSB0byBhdm9pZCByaXNraW5nIGl0IGJlY29taW5nIHN0YWxlLlxyXG5cdFx0XHQgMykgUHVzaGluZzogQ29uc29saWRhdGlvbiBvZiB0aGUgdHdlZW4gZGF0YSBmb2xsb3dlZCBieSBpdHMgcHVzaCBvbnRvIHRoZSBnbG9iYWwgaW4tcHJvZ3Jlc3MgY2FsbHMgY29udGFpbmVyLlxyXG5cdFx0XHQgYGVsZW1lbnRBcnJheUluZGV4YCBhbGxvd3MgcGFzc2luZyBpbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgYXJyYXkgdG8gdmFsdWUgZnVuY3Rpb25zLlxyXG5cdFx0XHQgSWYgYGVsZW1lbnRzSW5kZXhgIHdlcmUgdXNlZCBpbnN0ZWFkIHRoZSBpbmRleCB3b3VsZCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50cycgcGVyLWVsZW1lbnQgcXVldWUuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCkge1xyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBQYXJ0IEk6IFByZS1RdWV1ZWluZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IEVsZW1lbnQtV2lkZSBWYXJpYWJsZXNcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHR2YXIgLyogVGhlIHJ1bnRpbWUgb3B0cyBvYmplY3QgaXMgdGhlIGV4dGVuc2lvbiBvZiB0aGUgY3VycmVudCBjYWxsJ3Mgb3B0aW9ucyBhbmQgVmVsb2NpdHkncyBwYWdlLXdpZGUgb3B0aW9uIGRlZmF1bHRzLiAqL1xyXG5cdFx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIFZlbG9jaXR5LmRlZmF1bHRzLCBvcHRpb25zKSxcclxuXHRcdFx0XHRcdFx0LyogQSBjb250YWluZXIgZm9yIHRoZSBwcm9jZXNzZWQgZGF0YSBhc3NvY2lhdGVkIHdpdGggZWFjaCBwcm9wZXJ0eSBpbiB0aGUgcHJvcGVydHlNYXAuXHJcblx0XHRcdFx0XHRcdCAoRWFjaCBwcm9wZXJ0eSBpbiB0aGUgbWFwIHByb2R1Y2VzIGl0cyBvd24gXCJ0d2VlblwiLikgKi9cclxuXHRcdFx0XHRcdFx0dHdlZW5zQ29udGFpbmVyID0ge30sXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGE7XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgRWxlbWVudCBJbml0XHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0VmVsb2NpdHkuaW5pdChlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBEZWxheVxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFNpbmNlIHF1ZXVlOmZhbHNlIGRvZXNuJ3QgcmVzcGVjdCB0aGUgaXRlbSdzIGV4aXN0aW5nIHF1ZXVlLCB3ZSBhdm9pZCBpbmplY3RpbmcgaXRzIGRlbGF5IGhlcmUgKGl0J3Mgc2V0IGxhdGVyIG9uKS4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBWZWxvY2l0eSByb2xscyBpdHMgb3duIGRlbGF5IGZ1bmN0aW9uIHNpbmNlIGpRdWVyeSBkb2Vzbid0IGhhdmUgYSB1dGlsaXR5IGFsaWFzIGZvciAkLmZuLmRlbGF5KClcclxuXHRcdFx0XHQgKGFuZCB0aHVzIHJlcXVpcmVzIGpRdWVyeSBlbGVtZW50IGNyZWF0aW9uLCB3aGljaCB3ZSBhdm9pZCBzaW5jZSBpdHMgb3ZlcmhlYWQgaW5jbHVkZXMgRE9NIHF1ZXJ5aW5nKS4gKi9cclxuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChvcHRzLmRlbGF5KSAmJiBvcHRzLnF1ZXVlICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0JC5xdWV1ZShlbGVtZW50LCBvcHRzLnF1ZXVlLCBmdW5jdGlvbihuZXh0LCBjbGVhclF1ZXVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjbGVhclF1ZXVlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogRG8gbm90IGNvbnRpbnVlIHdpdGggYW5pbWF0aW9uIHF1ZXVlaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUaGlzIGlzIGEgZmxhZyB1c2VkIHRvIGluZGljYXRlIHRvIHRoZSB1cGNvbWluZyBjb21wbGV0ZUNhbGwoKSBmdW5jdGlvbiB0aGF0IHRoaXMgcXVldWUgZW50cnkgd2FzIGluaXRpYXRlZCBieSBWZWxvY2l0eS4gU2VlIGNvbXBsZXRlQ2FsbCgpIGZvciBmdXJ0aGVyIGRldGFpbHMuICovXHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogVGhlIGVuc3VpbmcgcXVldWUgaXRlbSAod2hpY2ggaXMgYXNzaWduZWQgdG8gdGhlIFwibmV4dFwiIGFyZ3VtZW50IHRoYXQgJC5xdWV1ZSgpIGF1dG9tYXRpY2FsbHkgcGFzc2VzIGluKSB3aWxsIGJlIHRyaWdnZXJlZCBhZnRlciBhIHNldFRpbWVvdXQgZGVsYXkuXHJcblx0XHRcdFx0XHRcdCBUaGUgc2V0VGltZW91dCBpcyBzdG9yZWQgc28gdGhhdCBpdCBjYW4gYmUgc3ViamVjdGVkIHRvIGNsZWFyVGltZW91dCgpIGlmIHRoaXMgYW5pbWF0aW9uIGlzIHByZW1hdHVyZWx5IHN0b3BwZWQgdmlhIFZlbG9jaXR5J3MgXCJzdG9wXCIgY29tbWFuZCwgYW5kXHJcblx0XHRcdFx0XHRcdCBkZWxheUJlZ2luL2RlbGF5VGltZSBpcyB1c2VkIHRvIGVuc3VyZSB3ZSBjYW4gXCJwYXVzZVwiIGFuZCBcInJlc3VtZVwiIGEgdHdlZW4gdGhhdCBpcyBzdGlsbCBtaWQtZGVsYXkuICovXHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUZW1wb3JhcmlseSBzdG9yZSBkZWxheWVkIGVsZW1lbnRzIHRvIGZhY2lsaXRlIGFjY2VzcyBmb3IgZ2xvYmFsIHBhdXNlL3Jlc3VtZSAqL1xyXG5cdFx0XHRcdFx0XHR2YXIgY2FsbEluZGV4ID0gVmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzLmNvdW50Kys7XHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50c1tjYWxsSW5kZXhdID0gZWxlbWVudDtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBkZWxheUNvbXBsZXRlID0gKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xlYXIgdGhlIHRlbXBvcmFyeSBlbGVtZW50ICovXHJcblx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHNbaW5kZXhdID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogRmluYWxseSwgaXNzdWUgdGhlIGNhbGwgKi9cclxuXHRcdFx0XHRcdFx0XHRcdG5leHQoKTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9KShjYWxsSW5kZXgpO1xyXG5cclxuXHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlCZWdpbiA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXkgPSBwYXJzZUZsb2F0KG9wdHMuZGVsYXkpO1xyXG5cdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dDogc2V0VGltZW91dChuZXh0LCBwYXJzZUZsb2F0KG9wdHMuZGVsYXkpKSxcclxuXHRcdFx0XHRcdFx0XHRuZXh0OiBkZWxheUNvbXBsZXRlXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBEdXJhdGlvblxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFN1cHBvcnQgZm9yIGpRdWVyeSdzIG5hbWVkIGR1cmF0aW9ucy4gKi9cclxuXHRcdFx0XHRzd2l0Y2ggKG9wdHMuZHVyYXRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiZmFzdFwiOlxyXG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gMjAwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFwibm9ybWFsXCI6XHJcblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBEVVJBVElPTl9ERUZBVUxUO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFwic2xvd1wiOlxyXG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gNjAwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlIHBvdGVudGlhbCBcIm1zXCIgc3VmZml4IGFuZCBkZWZhdWx0IHRvIDEgaWYgdGhlIHVzZXIgaXMgYXR0ZW1wdGluZyB0byBzZXQgYSBkdXJhdGlvbiBvZiAwIChpbiBvcmRlciB0byBwcm9kdWNlIGFuIGltbWVkaWF0ZSBzdHlsZSBjaGFuZ2UpLiAqL1xyXG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gcGFyc2VGbG9hdChvcHRzLmR1cmF0aW9uKSB8fCAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBHbG9iYWwgT3B0aW9uOiBNb2NrXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0aWYgKFZlbG9jaXR5Lm1vY2sgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQvKiBJbiBtb2NrIG1vZGUsIGFsbCBhbmltYXRpb25zIGFyZSBmb3JjZWQgdG8gMW1zIHNvIHRoYXQgdGhleSBvY2N1ciBpbW1lZGlhdGVseSB1cG9uIHRoZSBuZXh0IHJBRiB0aWNrLlxyXG5cdFx0XHRcdFx0IEFsdGVybmF0aXZlbHksIGEgbXVsdGlwbGllciBjYW4gYmUgcGFzc2VkIGluIHRvIHRpbWUgcmVtYXAgYWxsIGRlbGF5cyBhbmQgZHVyYXRpb25zLiAqL1xyXG5cdFx0XHRcdFx0aWYgKFZlbG9jaXR5Lm1vY2sgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IG9wdHMuZGVsYXkgPSAxO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiAqPSBwYXJzZUZsb2F0KFZlbG9jaXR5Lm1vY2spIHx8IDE7XHJcblx0XHRcdFx0XHRcdG9wdHMuZGVsYXkgKj0gcGFyc2VGbG9hdChWZWxvY2l0eS5tb2NrKSB8fCAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBFYXNpbmdcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0b3B0cy5lYXNpbmcgPSBnZXRFYXNpbmcob3B0cy5lYXNpbmcsIG9wdHMuZHVyYXRpb24pO1xyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IENhbGxiYWNrc1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKiBDYWxsYmFja3MgbXVzdCBmdW5jdGlvbnMuIE90aGVyd2lzZSwgZGVmYXVsdCB0byBudWxsLiAqL1xyXG5cdFx0XHRcdGlmIChvcHRzLmJlZ2luICYmICFUeXBlLmlzRnVuY3Rpb24ob3B0cy5iZWdpbikpIHtcclxuXHRcdFx0XHRcdG9wdHMuYmVnaW4gPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG9wdHMucHJvZ3Jlc3MgJiYgIVR5cGUuaXNGdW5jdGlvbihvcHRzLnByb2dyZXNzKSkge1xyXG5cdFx0XHRcdFx0b3B0cy5wcm9ncmVzcyA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAob3B0cy5jb21wbGV0ZSAmJiAhVHlwZS5pc0Z1bmN0aW9uKG9wdHMuY29tcGxldGUpKSB7XHJcblx0XHRcdFx0XHRvcHRzLmNvbXBsZXRlID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBEaXNwbGF5ICYgVmlzaWJpbGl0eVxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFJlZmVyIHRvIFZlbG9jaXR5J3MgZG9jdW1lbnRhdGlvbiAoVmVsb2NpdHlKUy5vcmcvI2Rpc3BsYXlBbmRWaXNpYmlsaXR5KSBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZGlzcGxheSBhbmQgdmlzaWJpbGl0eSBvcHRpb25zJyBiZWhhdmlvci4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBXZSBzdHJpY3RseSBjaGVjayBmb3IgdW5kZWZpbmVkIGluc3RlYWQgb2YgZmFsc2luZXNzIGJlY2F1c2UgZGlzcGxheSBhY2NlcHRzIGFuIGVtcHR5IHN0cmluZyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRpZiAob3B0cy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy5kaXNwbGF5ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRvcHRzLmRpc3BsYXkgPSBvcHRzLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdC8qIFVzZXJzIGNhbiBwYXNzIGluIGEgc3BlY2lhbCBcImF1dG9cIiB2YWx1ZSB0byBpbnN0cnVjdCBWZWxvY2l0eSB0byBzZXQgdGhlIGVsZW1lbnQgdG8gaXRzIGRlZmF1bHQgZGlzcGxheSB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IFwiYXV0b1wiKSB7XHJcblx0XHRcdFx0XHRcdG9wdHMuZGlzcGxheSA9IFZlbG9jaXR5LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZWxlbWVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAob3B0cy52aXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy52aXNpYmlsaXR5ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRvcHRzLnZpc2liaWxpdHkgPSBvcHRzLnZpc2liaWxpdHkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBtb2JpbGVIQVxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKiBXaGVuIHNldCB0byB0cnVlLCBhbmQgaWYgdGhpcyBpcyBhIG1vYmlsZSBkZXZpY2UsIG1vYmlsZUhBIGF1dG9tYXRpY2FsbHkgZW5hYmxlcyBoYXJkd2FyZSBhY2NlbGVyYXRpb24gKHZpYSBhIG51bGwgdHJhbnNmb3JtIGhhY2spXHJcblx0XHRcdFx0IG9uIGFuaW1hdGluZyBlbGVtZW50cy4gSEEgaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50IGF0IHRoZSBjb21wbGV0aW9uIG9mIGl0cyBhbmltYXRpb24uICovXHJcblx0XHRcdFx0LyogTm90ZTogQW5kcm9pZCBHaW5nZXJicmVhZCBkb2Vzbid0IHN1cHBvcnQgSEEuIElmIGEgbnVsbCB0cmFuc2Zvcm0gaGFjayAobW9iaWxlSEEpIGlzIGluIGZhY3Qgc2V0LCBpdCB3aWxsIHByZXZlbnQgb3RoZXIgdHJhbmZvcm0gc3VicHJvcGVydGllcyBmcm9tIHRha2luZyBlZmZlY3QuICovXHJcblx0XHRcdFx0LyogTm90ZTogWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIHVzZSBvZiBtb2JpbGVIQSBpbiBWZWxvY2l0eSdzIGRvY3VtZW50YXRpb246IFZlbG9jaXR5SlMub3JnLyNtb2JpbGVIQS4gKi9cclxuXHRcdFx0XHRvcHRzLm1vYmlsZUhBID0gKG9wdHMubW9iaWxlSEEgJiYgVmVsb2NpdHkuU3RhdGUuaXNNb2JpbGUgJiYgIVZlbG9jaXR5LlN0YXRlLmlzR2luZ2VyYnJlYWQpO1xyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgUGFydCBJSTogUXVldWVpbmdcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFdoZW4gYSBzZXQgb2YgZWxlbWVudHMgaXMgdGFyZ2V0ZWQgYnkgYSBWZWxvY2l0eSBjYWxsLCB0aGUgc2V0IGlzIGJyb2tlbiB1cCBhbmQgZWFjaCBlbGVtZW50IGhhcyB0aGUgY3VycmVudCBWZWxvY2l0eSBjYWxsIGluZGl2aWR1YWxseSBxdWV1ZWQgb250byBpdC5cclxuXHRcdFx0XHQgSW4gdGhpcyB3YXksIGVhY2ggZWxlbWVudCdzIGV4aXN0aW5nIHF1ZXVlIGlzIHJlc3BlY3RlZDsgc29tZSBlbGVtZW50cyBtYXkgYWxyZWFkeSBiZSBhbmltYXRpbmcgYW5kIGFjY29yZGluZ2x5IHNob3VsZCBub3QgaGF2ZSB0aGlzIGN1cnJlbnQgVmVsb2NpdHkgY2FsbCB0cmlnZ2VyZWQgaW1tZWRpYXRlbHkuICovXHJcblx0XHRcdFx0LyogSW4gZWFjaCBxdWV1ZSwgdHdlZW4gZGF0YSBpcyBwcm9jZXNzZWQgZm9yIGVhY2ggYW5pbWF0aW5nIHByb3BlcnR5IHRoZW4gcHVzaGVkIG9udG8gdGhlIGNhbGwtd2lkZSBjYWxscyBhcnJheS4gV2hlbiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBzZXQgaGFzIGhhZCBpdHMgdHdlZW5zIHByb2Nlc3NlZCxcclxuXHRcdFx0XHQgdGhlIGNhbGwgYXJyYXkgaXMgcHVzaGVkIHRvIFZlbG9jaXR5LlN0YXRlLmNhbGxzIGZvciBsaXZlIHByb2Nlc3NpbmcgYnkgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aWNrLiAqL1xyXG5cdFx0XHRcdGZ1bmN0aW9uIGJ1aWxkUXVldWUobmV4dCkge1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEsIGxhc3RUd2VlbnNDb250YWluZXI7XHJcblxyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBPcHRpb246IEJlZ2luXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBUaGUgYmVnaW4gY2FsbGJhY2sgaXMgZmlyZWQgb25jZSBwZXIgY2FsbCAtLSBub3Qgb25jZSBwZXIgZWxlbWVuZXQgLS0gYW5kIGlzIHBhc3NlZCB0aGUgZnVsbCByYXcgRE9NIGVsZW1lbnQgc2V0IGFzIGJvdGggaXRzIGNvbnRleHQgYW5kIGl0cyBmaXJzdCBhcmd1bWVudC4gKi9cclxuXHRcdFx0XHRcdGlmIChvcHRzLmJlZ2luICYmIGVsZW1lbnRzSW5kZXggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0LyogV2UgdGhyb3cgY2FsbGJhY2tzIGluIGEgc2V0VGltZW91dCBzbyB0aGF0IHRocm93biBlcnJvcnMgZG9uJ3QgaGFsdCB0aGUgZXhlY3V0aW9uIG9mIFZlbG9jaXR5IGl0c2VsZi4gKi9cclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRvcHRzLmJlZ2luLmNhbGwoZWxlbWVudHMsIGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBUd2VlbiBEYXRhIENvbnN0cnVjdGlvbiAoZm9yIFNjcm9sbClcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBJbiBvcmRlciB0byBiZSBzdWJqZWN0ZWQgdG8gY2hhaW5pbmcgYW5kIGFuaW1hdGlvbiBvcHRpb25zLCBzY3JvbGwncyB0d2VlbmluZyBpcyByb3V0ZWQgdGhyb3VnaCBWZWxvY2l0eSBhcyBpZiBpdCB3ZXJlIGEgc3RhbmRhcmQgQ1NTIHByb3BlcnR5IGFuaW1hdGlvbi4gKi9cclxuXHRcdFx0XHRcdGlmIChhY3Rpb24gPT09IFwic2Nyb2xsXCIpIHtcclxuXHRcdFx0XHRcdFx0LyogVGhlIHNjcm9sbCBhY3Rpb24gdW5pcXVlbHkgdGFrZXMgYW4gb3B0aW9uYWwgXCJvZmZzZXRcIiBvcHRpb24gLS0gc3BlY2lmaWVkIGluIHBpeGVscyAtLSB0aGF0IG9mZnNldHMgdGhlIHRhcmdldGVkIHNjcm9sbCBwb3NpdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0dmFyIHNjcm9sbERpcmVjdGlvbiA9ICgvXngkL2kudGVzdChvcHRzLmF4aXMpID8gXCJMZWZ0XCIgOiBcIlRvcFwiKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbE9mZnNldCA9IHBhcnNlRmxvYXQob3B0cy5vZmZzZXQpIHx8IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnRBbHRlcm5hdGUsXHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkVuZDtcclxuXHJcblx0XHRcdFx0XHRcdC8qIFNjcm9sbCBhbHNvIHVuaXF1ZWx5IHRha2VzIGFuIG9wdGlvbmFsIFwiY29udGFpbmVyXCIgb3B0aW9uLCB3aGljaCBpbmRpY2F0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIC0tXHJcblx0XHRcdFx0XHRcdCBhcyBvcHBvc2VkIHRvIHRoZSBicm93c2VyIHdpbmRvdyBpdHNlbGYuIFRoaXMgaXMgdXNlZnVsIGZvciBzY3JvbGxpbmcgdG93YXJkIGFuIGVsZW1lbnQgdGhhdCdzIGluc2lkZSBhbiBvdmVyZmxvd2luZyBwYXJlbnQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKG9wdHMuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogRW5zdXJlIHRoYXQgZWl0aGVyIGEgalF1ZXJ5IG9iamVjdCBvciBhIHJhdyBET00gZWxlbWVudCB3YXMgcGFzc2VkIGluLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzV3JhcHBlZChvcHRzLmNvbnRhaW5lcikgfHwgVHlwZS5pc05vZGUob3B0cy5jb250YWluZXIpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBFeHRyYWN0IHRoZSByYXcgRE9NIGVsZW1lbnQgZnJvbSB0aGUgalF1ZXJ5IHdyYXBwZXIuICovXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRzLmNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyWzBdIHx8IG9wdHMuY29udGFpbmVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogVW5saWtlIG90aGVyIHByb3BlcnRpZXMgaW4gVmVsb2NpdHksIHRoZSBicm93c2VyJ3Mgc2Nyb2xsIHBvc2l0aW9uIGlzIG5ldmVyIGNhY2hlZCBzaW5jZSBpdCBzbyBmcmVxdWVudGx5IGNoYW5nZXNcclxuXHRcdFx0XHRcdFx0XHRcdCAoZHVlIHRvIHRoZSB1c2VyJ3MgbmF0dXJhbCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBwYWdlKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudCA9IG9wdHMuY29udGFpbmVyW1wic2Nyb2xsXCIgKyBzY3JvbGxEaXJlY3Rpb25dOyAvKiBHRVQgKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiAkLnBvc2l0aW9uKCkgdmFsdWVzIGFyZSByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyJ3MgY3VycmVudGx5IHZpZXdhYmxlIGFyZWEgKHdpdGhvdXQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgY29udGFpbmVyJ3MgdHJ1ZSBkaW1lbnNpb25zXHJcblx0XHRcdFx0XHRcdFx0XHQgLS0gc2F5LCBmb3IgZXhhbXBsZSwgaWYgdGhlIGNvbnRhaW5lciB3YXMgbm90IG92ZXJmbG93aW5nKS4gVGh1cywgdGhlIHNjcm9sbCBlbmQgdmFsdWUgaXMgdGhlIHN1bSBvZiB0aGUgY2hpbGQgZWxlbWVudCdzIHBvc2l0aW9uICphbmQqXHJcblx0XHRcdFx0XHRcdFx0XHQgdGhlIHNjcm9sbCBjb250YWluZXIncyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kID0gKHNjcm9sbFBvc2l0aW9uQ3VycmVudCArICQoZWxlbWVudCkucG9zaXRpb24oKVtzY3JvbGxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKV0pICsgc2Nyb2xsT2Zmc2V0OyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIGEgdmFsdWUgb3RoZXIgdGhhbiBhIGpRdWVyeSBvYmplY3Qgb3IgYSByYXcgRE9NIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiwgZGVmYXVsdCB0byBudWxsIHNvIHRoYXQgdGhpcyBvcHRpb24gaXMgaWdub3JlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5jb250YWluZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgd2luZG93IGl0c2VsZiBpcyBiZWluZyBzY3JvbGxlZCAtLSBub3QgYSBjb250YWluaW5nIGVsZW1lbnQgLS0gcGVyZm9ybSBhIGxpdmUgc2Nyb2xsIHBvc2l0aW9uIGxvb2t1cCB1c2luZ1xyXG5cdFx0XHRcdFx0XHRcdCB0aGUgYXBwcm9wcmlhdGUgY2FjaGVkIHByb3BlcnR5IG5hbWVzICh3aGljaCBkaWZmZXIgYmFzZWQgb24gYnJvd3NlciB0eXBlKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnQgPSBWZWxvY2l0eS5TdGF0ZS5zY3JvbGxBbmNob3JbVmVsb2NpdHkuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiICsgc2Nyb2xsRGlyZWN0aW9uXV07IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIFdoZW4gc2Nyb2xsaW5nIHRoZSBicm93c2VyIHdpbmRvdywgY2FjaGUgdGhlIGFsdGVybmF0ZSBheGlzJ3MgY3VycmVudCB2YWx1ZSBzaW5jZSB3aW5kb3cuc2Nyb2xsVG8oKSBkb2Vzbid0IGxldCB1cyBjaGFuZ2Ugb25seSBvbmUgdmFsdWUgYXQgYSB0aW1lLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudEFsdGVybmF0ZSA9IFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvcltWZWxvY2l0eS5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyAoc2Nyb2xsRGlyZWN0aW9uID09PSBcIkxlZnRcIiA/IFwiVG9wXCIgOiBcIkxlZnRcIildXTsgLyogR0VUICovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIFVubGlrZSAkLnBvc2l0aW9uKCksICQub2Zmc2V0KCkgdmFsdWVzIGFyZSByZWxhdGl2ZSB0byB0aGUgYnJvd3NlciB3aW5kb3cncyB0cnVlIGRpbWVuc2lvbnMgLS0gbm90IG1lcmVseSBpdHMgY3VycmVudGx5IHZpZXdhYmxlIGFyZWEgLS1cclxuXHRcdFx0XHRcdFx0XHQgYW5kIHRoZXJlZm9yZSBlbmQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGNvbXBvdW5kZWQgb250byBjdXJyZW50IHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkVuZCA9ICQoZWxlbWVudCkub2Zmc2V0KClbc2Nyb2xsRGlyZWN0aW9uLnRvTG93ZXJDYXNlKCldICsgc2Nyb2xsT2Zmc2V0OyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogU2luY2UgdGhlcmUncyBvbmx5IG9uZSBmb3JtYXQgdGhhdCBzY3JvbGwncyBhc3NvY2lhdGVkIHR3ZWVuc0NvbnRhaW5lciBjYW4gdGFrZSwgd2UgY3JlYXRlIGl0IG1hbnVhbGx5LiAqL1xyXG5cdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlOiBzY3JvbGxQb3NpdGlvbkN1cnJlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWU6IHNjcm9sbFBvc2l0aW9uQ3VycmVudCxcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlOiBzY3JvbGxQb3NpdGlvbkVuZCxcclxuXHRcdFx0XHRcdFx0XHRcdHVuaXRUeXBlOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiBvcHRzLmVhc2luZyxcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbERhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFpbmVyOiBvcHRzLmNvbnRhaW5lcixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdGVybmF0ZVZhbHVlOiBzY3JvbGxQb3NpdGlvbkN1cnJlbnRBbHRlcm5hdGVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnRcclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIiwgdHdlZW5zQ29udGFpbmVyLnNjcm9sbCwgZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IFR3ZWVuIERhdGEgQ29uc3RydWN0aW9uIChmb3IgUmV2ZXJzZSlcclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIFJldmVyc2UgYWN0cyBsaWtlIGEgXCJzdGFydFwiIGFjdGlvbiBpbiB0aGF0IGEgcHJvcGVydHkgbWFwIGlzIGFuaW1hdGVkIHRvd2FyZC4gVGhlIG9ubHkgZGlmZmVyZW5jZSBpc1xyXG5cdFx0XHRcdFx0XHQgdGhhdCB0aGUgcHJvcGVydHkgbWFwIHVzZWQgZm9yIHJldmVyc2UgaXMgdGhlIGludmVyc2Ugb2YgdGhlIG1hcCB1c2VkIGluIHRoZSBwcmV2aW91cyBjYWxsLiBUaHVzLCB3ZSBtYW5pcHVsYXRlXHJcblx0XHRcdFx0XHRcdCB0aGUgcHJldmlvdXMgY2FsbCB0byBjb25zdHJ1Y3Qgb3VyIG5ldyBtYXA6IHVzZSB0aGUgcHJldmlvdXMgbWFwJ3MgZW5kIHZhbHVlcyBhcyBvdXIgbmV3IG1hcCdzIHN0YXJ0IHZhbHVlcy4gQ29weSBvdmVyIGFsbCBvdGhlciBkYXRhLiAqL1xyXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBSZXZlcnNlIGNhbiBiZSBkaXJlY3RseSBjYWxsZWQgdmlhIHRoZSBcInJldmVyc2VcIiBwYXJhbWV0ZXIsIG9yIGl0IGNhbiBiZSBpbmRpcmVjdGx5IHRyaWdnZXJlZCB2aWEgdGhlIGxvb3Agb3B0aW9uLiAoTG9vcHMgYXJlIGNvbXBvc2VkIG9mIG11bHRpcGxlIHJldmVyc2VzLikgKi9cclxuXHRcdFx0XHRcdFx0LyogTm90ZTogUmV2ZXJzZSBjYWxscyBkbyBub3QgbmVlZCB0byBiZSBjb25zZWN1dGl2ZWx5IGNoYWluZWQgb250byBhIGN1cnJlbnRseS1hbmltYXRpbmcgZWxlbWVudCBpbiBvcmRlciB0byBvcGVyYXRlIG9uIGNhY2hlZCB2YWx1ZXM7XHJcblx0XHRcdFx0XHRcdCB0aGVyZSBpcyBubyBoYXJtIHRvIHJldmVyc2UgYmVpbmcgY2FsbGVkIG9uIGEgcG90ZW50aWFsbHkgc3RhbGUgZGF0YSBjYWNoZSBzaW5jZSByZXZlcnNlJ3MgYmVoYXZpb3IgaXMgc2ltcGx5IGRlZmluZWRcclxuXHRcdFx0XHRcdFx0IGFzIHJldmVydGluZyB0byB0aGUgZWxlbWVudCdzIHZhbHVlcyBhcyB0aGV5IHdlcmUgcHJpb3IgdG8gdGhlIHByZXZpb3VzICpWZWxvY2l0eSogY2FsbC4gKi9cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJldmVyc2VcIikge1xyXG5cdFx0XHRcdFx0XHRkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdC8qIEFib3J0IGlmIHRoZXJlIGlzIG5vIHByaW9yIGFuaW1hdGlvbiBkYXRhIHRvIHJldmVyc2UgdG8uICovXHJcblx0XHRcdFx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFkYXRhLnR3ZWVuc0NvbnRhaW5lcikge1xyXG5cdFx0XHRcdFx0XHRcdC8qIERlcXVldWUgdGhlIGVsZW1lbnQgc28gdGhhdCB0aGlzIHF1ZXVlIGVudHJ5IHJlbGVhc2VzIGl0c2VsZiBpbW1lZGlhdGVseSwgYWxsb3dpbmcgc3Vic2VxdWVudCBxdWV1ZSBlbnRyaWVzIHRvIHJ1bi4gKi9cclxuXHRcdFx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbWVudCwgb3B0cy5xdWV1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IE9wdGlvbnMgUGFyc2luZ1xyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBlbGVtZW50IHdhcyBoaWRkZW4gdmlhIHRoZSBkaXNwbGF5IG9wdGlvbiBpbiB0aGUgcHJldmlvdXMgY2FsbCxcclxuXHRcdFx0XHRcdFx0XHQgcmV2ZXJ0IGRpc3BsYXkgdG8gXCJhdXRvXCIgcHJpb3IgdG8gcmV2ZXJzYWwgc28gdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGFnYWluLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9wdHMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5kaXNwbGF5ID0gXCJhdXRvXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcHRzLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEub3B0cy52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgbG9vcCBvcHRpb24gd2FzIHNldCBpbiB0aGUgcHJldmlvdXMgY2FsbCwgZGlzYWJsZSBpdCBzbyB0aGF0IFwicmV2ZXJzZVwiIGNhbGxzIGFyZW4ndCByZWN1cnNpdmVseSBnZW5lcmF0ZWQuXHJcblx0XHRcdFx0XHRcdFx0IEZ1cnRoZXIsIHJlbW92ZSB0aGUgcHJldmlvdXMgY2FsbCdzIGNhbGxiYWNrIG9wdGlvbnM7IHR5cGljYWxseSwgdXNlcnMgZG8gbm90IHdhbnQgdGhlc2UgdG8gYmUgcmVmaXJlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRkYXRhLm9wdHMubG9vcCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5iZWdpbiA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YS5vcHRzLmNvbXBsZXRlID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogU2luY2Ugd2UncmUgZXh0ZW5kaW5nIGFuIG9wdHMgb2JqZWN0IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBleHRlbmRlZCB3aXRoIHRoZSBkZWZhdWx0cyBvcHRpb25zIG9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHQgd2UgcmVtb3ZlIG5vbi1leHBsaWNpdGx5LWRlZmluZWQgcHJvcGVydGllcyB0aGF0IGFyZSBhdXRvLWFzc2lnbmVkIHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuZWFzaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgb3B0cy5lYXNpbmc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuZHVyYXRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBvcHRzLmR1cmF0aW9uO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogVGhlIG9wdHMgb2JqZWN0IHVzZWQgZm9yIHJldmVyc2FsIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgb3B0aW9ucyBvYmplY3Qgb3B0aW9uYWxseSBwYXNzZWQgaW50byB0aGlzXHJcblx0XHRcdFx0XHRcdFx0IHJldmVyc2UgY2FsbCBwbHVzIHRoZSBvcHRpb25zIHVzZWQgaW4gdGhlIHByZXZpb3VzIFZlbG9jaXR5IGNhbGwuICovXHJcblx0XHRcdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBkYXRhLm9wdHMsIG9wdHMpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdCBUd2VlbnMgQ29udGFpbmVyIFJlY29uc3RydWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIENyZWF0ZSBhIGRlZXB5IGNvcHkgKGluZGljYXRlZCB2aWEgdGhlIHRydWUgZmxhZykgb2YgdGhlIHByZXZpb3VzIGNhbGwncyB0d2VlbnNDb250YWluZXIuICovXHJcblx0XHRcdFx0XHRcdFx0bGFzdFR3ZWVuc0NvbnRhaW5lciA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkYXRhID8gZGF0YS50d2VlbnNDb250YWluZXIgOiBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogTWFuaXB1bGF0ZSB0aGUgcHJldmlvdXMgdHdlZW5zQ29udGFpbmVyIGJ5IHJlcGxhY2luZyBpdHMgZW5kIHZhbHVlcyBhbmQgY3VycmVudFZhbHVlcyB3aXRoIGl0cyBzdGFydCB2YWx1ZXMuICovXHJcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbGFzdFR3ZWVuIGluIGxhc3RUd2VlbnNDb250YWluZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEluIGFkZGl0aW9uIHRvIHR3ZWVuIGRhdGEsIHR3ZWVuc0NvbnRhaW5lcnMgY29udGFpbiBhbiBlbGVtZW50IHByb3BlcnR5IHRoYXQgd2UgaWdub3JlIGhlcmUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGFzdFR3ZWVuc0NvbnRhaW5lci5oYXNPd25Qcm9wZXJ0eShsYXN0VHdlZW4pICYmIGxhc3RUd2VlbiAhPT0gXCJlbGVtZW50XCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGxhc3RTdGFydFZhbHVlID0gbGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dLnN0YXJ0VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uc3RhcnRWYWx1ZSA9IGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5jdXJyZW50VmFsdWUgPSBsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uZW5kVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5lbmRWYWx1ZSA9IGxhc3RTdGFydFZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRWFzaW5nIGlzIHRoZSBvbmx5IG9wdGlvbiB0aGF0IGVtYmVkcyBpbnRvIHRoZSBpbmRpdmlkdWFsIHR3ZWVuIGRhdGEgKHNpbmNlIGl0IGNhbiBiZSBkZWZpbmVkIG9uIGEgcGVyLXByb3BlcnR5IGJhc2lzKS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IEFjY29yZGluZ2x5LCBldmVyeSBwcm9wZXJ0eSdzIGVhc2luZyB2YWx1ZSBtdXN0IGJlIHVwZGF0ZWQgd2hlbiBhbiBvcHRpb25zIG9iamVjdCBpcyBwYXNzZWQgaW4gd2l0aCBhIHJldmVyc2UgY2FsbC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFRoZSBzaWRlIGVmZmVjdCBvZiB0aGlzIGV4dGVuc2liaWxpdHkgaXMgdGhhdCBhbGwgcGVyLXByb3BlcnR5IGVhc2luZyB2YWx1ZXMgYXJlIGZvcmNlZnVsbHkgcmVzZXQgdG8gdGhlIG5ldyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFUeXBlLmlzRW1wdHlPYmplY3Qob3B0aW9ucykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uZWFzaW5nID0gb3B0cy5lYXNpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiICsgbGFzdFR3ZWVuICsgXCIpOiBcIiArIEpTT04uc3RyaW5naWZ5KGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXSksIGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIgPSBsYXN0VHdlZW5zQ29udGFpbmVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IFR3ZWVuIERhdGEgQ29uc3RydWN0aW9uIChmb3IgU3RhcnQpXHJcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJzdGFydFwiKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHQgVmFsdWUgVHJhbnNmZXJyaW5nXHJcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgdGhpcyBxdWV1ZSBlbnRyeSBmb2xsb3dzIGEgcHJldmlvdXMgVmVsb2NpdHktaW5pdGlhdGVkIHF1ZXVlIGVudHJ5ICphbmQqIGlmIHRoaXMgZW50cnkgd2FzIGNyZWF0ZWRcclxuXHRcdFx0XHRcdFx0IHdoaWxlIHRoZSBlbGVtZW50IHdhcyBpbiB0aGUgcHJvY2VzcyBvZiBiZWluZyBhbmltYXRlZCBieSBWZWxvY2l0eSwgdGhlbiB0aGlzIGN1cnJlbnQgY2FsbCBpcyBzYWZlIHRvIHVzZVxyXG5cdFx0XHRcdFx0XHQgdGhlIGVuZCB2YWx1ZXMgZnJvbSB0aGUgcHJpb3IgY2FsbCBhcyBpdHMgc3RhcnQgdmFsdWVzLiBWZWxvY2l0eSBhdHRlbXB0cyB0byBwZXJmb3JtIHRoaXMgdmFsdWUgdHJhbnNmZXJcclxuXHRcdFx0XHRcdFx0IHByb2Nlc3Mgd2hlbmV2ZXIgcG9zc2libGUgaW4gb3JkZXIgdG8gYXZvaWQgcmVxdWVyeWluZyB0aGUgRE9NLiAqL1xyXG5cdFx0XHRcdFx0XHQvKiBJZiB2YWx1ZXMgYXJlbid0IHRyYW5zZmVycmVkIGZyb20gYSBwcmlvciBjYWxsIGFuZCBzdGFydCB2YWx1ZXMgd2VyZSBub3QgZm9yY2VmZWQgYnkgdGhlIHVzZXIgKG1vcmUgb24gdGhpcyBiZWxvdyksXHJcblx0XHRcdFx0XHRcdCB0aGVuIHRoZSBET00gaXMgcXVlcmllZCBmb3IgdGhlIGVsZW1lbnQncyBjdXJyZW50IHZhbHVlcyBhcyBhIGxhc3QgcmVzb3J0LiAqL1xyXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBDb252ZXJzZWx5LCBhbmltYXRpb24gcmV2ZXJzYWwgKGFuZCBsb29waW5nKSAqYWx3YXlzKiBwZXJmb3JtIGludGVyLWNhbGwgdmFsdWUgdHJhbnNmZXJzOyB0aGV5IG5ldmVyIHJlcXVlcnkgdGhlIERPTS4gKi9cclxuXHJcblx0XHRcdFx0XHRcdGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogVGhlIHBlci1lbGVtZW50IGlzQW5pbWF0aW5nIGZsYWcgaXMgdXNlZCB0byBpbmRpY2F0ZSB3aGV0aGVyIGl0J3Mgc2FmZSAoaS5lLiB0aGUgZGF0YSBpc24ndCBzdGFsZSlcclxuXHRcdFx0XHRcdFx0IHRvIHRyYW5zZmVyIG92ZXIgZW5kIHZhbHVlcyB0byB1c2UgYXMgc3RhcnQgdmFsdWVzLiBJZiBpdCdzIHNldCB0byB0cnVlIGFuZCB0aGVyZSBpcyBhIHByZXZpb3VzXHJcblx0XHRcdFx0XHRcdCBWZWxvY2l0eSBjYWxsIHRvIHB1bGwgdmFsdWVzIGZyb20sIGRvIHNvLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLnR3ZWVuc0NvbnRhaW5lciAmJiBkYXRhLmlzQW5pbWF0aW5nID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdFx0bGFzdFR3ZWVuc0NvbnRhaW5lciA9IGRhdGEudHdlZW5zQ29udGFpbmVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBUd2VlbiBEYXRhIENhbGN1bGF0aW9uXHJcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBwcm9wZXJ0eSBkYXRhIGFuZCBkZWZhdWx0cyBlbmRWYWx1ZSwgZWFzaW5nLCBhbmQgc3RhcnRWYWx1ZSBhcyBhcHByb3ByaWF0ZS4gKi9cclxuXHRcdFx0XHRcdFx0LyogUHJvcGVydHkgbWFwIHZhbHVlcyBjYW4gZWl0aGVyIHRha2UgdGhlIGZvcm0gb2YgMSkgYSBzaW5nbGUgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBlbmQgdmFsdWUsXHJcblx0XHRcdFx0XHRcdCBvciAyKSBhbiBhcnJheSBpbiB0aGUgZm9ybSBvZiBbIGVuZFZhbHVlLCBbLCBlYXNpbmddIFssIHN0YXJ0VmFsdWVdIF0uXHJcblx0XHRcdFx0XHRcdCBUaGUgb3B0aW9uYWwgdGhpcmQgcGFyYW1ldGVyIGlzIGEgZm9yY2VmZWQgc3RhcnRWYWx1ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgcXVlcnlpbmcgdGhlIERPTSBmb3JcclxuXHRcdFx0XHRcdFx0IHRoZSBlbGVtZW50J3MgY3VycmVudCB2YWx1ZS4gUmVhZCBWZWxvY2l0eSdzIGRvY21lbnRhdGlvbiB0byBsZWFybiBtb3JlIGFib3V0IGZvcmNlZmVlZGluZzogVmVsb2NpdHlKUy5vcmcvI2ZvcmNlZmVlZGluZyAqL1xyXG5cdFx0XHRcdFx0XHR2YXIgcGFyc2VQcm9wZXJ0eVZhbHVlID0gZnVuY3Rpb24odmFsdWVEYXRhLCBza2lwUmVzb2x2aW5nRWFzaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGVuZFZhbHVlLCBlYXNpbmcsIHN0YXJ0VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHdlIGhhdmUgYSBmdW5jdGlvbiBhcyB0aGUgbWFpbiBhcmd1bWVudCB0aGVuIHJlc29sdmUgaXQgZmlyc3QsIGluIGNhc2UgaXQgcmV0dXJucyBhbiBhcnJheSB0aGF0IG5lZWRzIHRvIGJlIHNwbGl0ICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNGdW5jdGlvbih2YWx1ZURhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZURhdGEgPSB2YWx1ZURhdGEuY2FsbChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIHRoZSBhcnJheSBmb3JtYXQsIHdoaWNoIGNhbiBiZSBzdHJ1Y3R1cmVkIGFzIG9uZSBvZiB0aHJlZSBwb3RlbnRpYWwgb3ZlcmxvYWRzOlxyXG5cdFx0XHRcdFx0XHRcdCBBKSBbIGVuZFZhbHVlLCBlYXNpbmcsIHN0YXJ0VmFsdWUgXSwgQikgWyBlbmRWYWx1ZSwgZWFzaW5nIF0sIG9yIEMpIFsgZW5kVmFsdWUsIHN0YXJ0VmFsdWUgXSAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzQXJyYXkodmFsdWVEYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogZW5kVmFsdWUgaXMgYWx3YXlzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheS4gRG9uJ3QgYm90aGVyIHZhbGlkYXRpbmcgZW5kVmFsdWUncyB2YWx1ZSBub3dcclxuXHRcdFx0XHRcdFx0XHRcdCBzaW5jZSB0aGUgZW5zdWluZyBwcm9wZXJ0eSBjeWNsaW5nIGxvZ2ljIGRvZXMgdGhhdC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gdmFsdWVEYXRhWzBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFR3by1pdGVtIGFycmF5IGZvcm1hdDogSWYgdGhlIHNlY29uZCBpdGVtIGlzIGEgbnVtYmVyLCBmdW5jdGlvbiwgb3IgaGV4IHN0cmluZywgdHJlYXQgaXQgYXMgYVxyXG5cdFx0XHRcdFx0XHRcdFx0IHN0YXJ0IHZhbHVlIHNpbmNlIGVhc2luZ3MgY2FuIG9ubHkgYmUgbm9uLWhleCBzdHJpbmdzIG9yIGFycmF5cy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmICgoIVR5cGUuaXNBcnJheSh2YWx1ZURhdGFbMV0pICYmIC9eW1xcZC1dLy50ZXN0KHZhbHVlRGF0YVsxXSkpIHx8IFR5cGUuaXNGdW5jdGlvbih2YWx1ZURhdGFbMV0pIHx8IENTUy5SZWdFeC5pc0hleC50ZXN0KHZhbHVlRGF0YVsxXSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHZhbHVlRGF0YVsxXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogVHdvIG9yIHRocmVlLWl0ZW0gYXJyYXk6IElmIHRoZSBzZWNvbmQgaXRlbSBpcyBhIG5vbi1oZXggc3RyaW5nIGVhc2luZyBuYW1lIG9yIGFuIGFycmF5LCB0cmVhdCBpdCBhcyBhbiBlYXNpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChUeXBlLmlzU3RyaW5nKHZhbHVlRGF0YVsxXSkgJiYgIUNTUy5SZWdFeC5pc0hleC50ZXN0KHZhbHVlRGF0YVsxXSkgJiYgVmVsb2NpdHkuRWFzaW5nc1t2YWx1ZURhdGFbMV1dKSB8fCBUeXBlLmlzQXJyYXkodmFsdWVEYXRhWzFdKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgPSBza2lwUmVzb2x2aW5nRWFzaW5nID8gdmFsdWVEYXRhWzFdIDogZ2V0RWFzaW5nKHZhbHVlRGF0YVsxXSwgb3B0cy5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBEb24ndCBib3RoZXIgdmFsaWRhdGluZyBzdGFydFZhbHVlJ3MgdmFsdWUgbm93IHNpbmNlIHRoZSBlbnN1aW5nIHByb3BlcnR5IGN5Y2xpbmcgbG9naWMgaW5oZXJlbnRseSBkb2VzIHRoYXQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMl07XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzFdIHx8IHZhbHVlRGF0YVsyXTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEhhbmRsZSB0aGUgc2luZ2xlLXZhbHVlIGZvcm1hdC4gKi9cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSB2YWx1ZURhdGE7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBEZWZhdWx0IHRvIHRoZSBjYWxsJ3MgZWFzaW5nIGlmIGEgcGVyLXByb3BlcnR5IGVhc2luZyB0eXBlIHdhcyBub3QgZGVmaW5lZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNraXBSZXNvbHZpbmdFYXNpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IGVhc2luZyB8fCBvcHRzLmVhc2luZztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIGZ1bmN0aW9ucyB3ZXJlIHBhc3NlZCBpbiBhcyB2YWx1ZXMsIHBhc3MgdGhlIGZ1bmN0aW9uIHRoZSBjdXJyZW50IGVsZW1lbnQgYXMgaXRzIGNvbnRleHQsXHJcblx0XHRcdFx0XHRcdFx0IHBsdXMgdGhlIGVsZW1lbnQncyBpbmRleCBhbmQgdGhlIGVsZW1lbnQgc2V0J3Mgc2l6ZSBhcyBhcmd1bWVudHMuIFRoZW4sIGFzc2lnbiB0aGUgcmV0dXJuZWQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNGdW5jdGlvbihlbmRWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gZW5kVmFsdWUuY2FsbChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNGdW5jdGlvbihzdGFydFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWUuY2FsbChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQWxsb3cgc3RhcnRWYWx1ZSB0byBiZSBsZWZ0IGFzIHVuZGVmaW5lZCB0byBpbmRpY2F0ZSB0byB0aGUgZW5zdWluZyBjb2RlIHRoYXQgaXRzIHZhbHVlIHdhcyBub3QgZm9yY2VmZWQuICovXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFtlbmRWYWx1ZSB8fCAwLCBlYXNpbmcsIHN0YXJ0VmFsdWVdO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGZpeFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWVEYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogSW4gY2FzZSB0aGlzIHByb3BlcnR5IGlzIGEgaG9vaywgdGhlcmUgYXJlIGNpcmN1bXN0YW5jZXMgd2hlcmUgd2Ugd2lsbCBpbnRlbmQgdG8gd29yayBvbiB0aGUgaG9vaydzIHJvb3QgcHJvcGVydHkgYW5kIG5vdCB0aGUgaG9va2VkIHN1YnByb3BlcnR5LiAqL1xyXG5cdFx0XHRcdFx0XHRcdHZhciByb290UHJvcGVydHkgPSBDU1MuSG9va3MuZ2V0Um9vdChwcm9wZXJ0eSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFBhcnNlIG91dCBlbmRWYWx1ZSwgZWFzaW5nLCBhbmQgc3RhcnRWYWx1ZSBmcm9tIHRoZSBwcm9wZXJ0eSdzIGRhdGEuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gdmFsdWVEYXRhWzBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgPSB2YWx1ZURhdGFbMV0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMl0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm47XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdCBTdGFydCBWYWx1ZSBTb3VyY2luZ1xyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogT3RoZXIgdGhhbiBmb3IgdGhlIGR1bW15IHR3ZWVuIHByb3BlcnR5LCBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIgKGFuZCBkbyBub3QgaGF2ZSBhbiBhc3NvY2lhdGVkIG5vcm1hbGl6YXRpb24pIHdpbGxcclxuXHRcdFx0XHRcdFx0XHQgaW5oZXJlbnRseSBwcm9kdWNlIG5vIHN0eWxlIGNoYW5nZXMgd2hlbiBzZXQsIHNvIHRoZXkgYXJlIHNraXBwZWQgaW4gb3JkZXIgdG8gZGVjcmVhc2UgYW5pbWF0aW9uIHRpY2sgb3ZlcmhlYWQuXHJcblx0XHRcdFx0XHRcdFx0IFByb3BlcnR5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZCB2aWEgcHJlZml4Q2hlY2soKSwgd2hpY2ggcmV0dXJucyBhIGZhbHNlIGZsYWcgd2hlbiBubyBzdXBwb3J0ZWQgaXMgZGV0ZWN0ZWQuICovXHJcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogU2luY2UgU1ZHIGVsZW1lbnRzIGhhdmUgc29tZSBvZiB0aGVpciBwcm9wZXJ0aWVzIGRpcmVjdGx5IGFwcGxpZWQgYXMgSFRNTCBhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHRcdCB0aGVyZSBpcyBubyB3YXkgdG8gY2hlY2sgZm9yIHRoZWlyIGV4cGxpY2l0IGJyb3dzZXIgc3VwcG9ydCwgYW5kIHNvIHdlIHNraXAgc2tpcCB0aGlzIGNoZWNrIGZvciB0aGVtLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmICgoIWRhdGEgfHwgIWRhdGEuaXNTVkcpICYmIHJvb3RQcm9wZXJ0eSAhPT0gXCJ0d2VlblwiICYmIENTUy5OYW1lcy5wcmVmaXhDaGVjayhyb290UHJvcGVydHkpWzFdID09PSBmYWxzZSAmJiBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyb290UHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNraXBwaW5nIFtcIiArIHJvb3RQcm9wZXJ0eSArIFwiXSBkdWUgdG8gYSBsYWNrIG9mIGJyb3dzZXIgc3VwcG9ydC5cIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgZGlzcGxheSBvcHRpb24gaXMgYmVpbmcgc2V0IHRvIGEgbm9uLVwibm9uZVwiIChlLmcuIFwiYmxvY2tcIikgYW5kIG9wYWNpdHkgKGZpbHRlciBvbiBJRTw9OCkgaXMgYmVpbmdcclxuXHRcdFx0XHRcdFx0XHQgYW5pbWF0ZWQgdG8gYW4gZW5kVmFsdWUgb2Ygbm9uLXplcm8sIHRoZSB1c2VyJ3MgaW50ZW50aW9uIGlzIHRvIGZhZGUgaW4gZnJvbSBpbnZpc2libGUsIHRodXMgd2UgZm9yY2VmZWVkIG9wYWNpdHlcclxuXHRcdFx0XHRcdFx0XHQgYSBzdGFydFZhbHVlIG9mIDAgaWYgaXRzIHN0YXJ0VmFsdWUgaGFzbid0IGFscmVhZHkgYmVlbiBzb3VyY2VkIGJ5IHZhbHVlIHRyYW5zZmVycmluZyBvciBwcmlvciBmb3JjZWZlZWRpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKCgob3B0cy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy5kaXNwbGF5ICE9PSBudWxsICYmIG9wdHMuZGlzcGxheSAhPT0gXCJub25lXCIpIHx8IChvcHRzLnZpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLnZpc2liaWxpdHkgIT09IFwiaGlkZGVuXCIpKSAmJiAvb3BhY2l0eXxmaWx0ZXIvLnRlc3QocHJvcGVydHkpICYmICFzdGFydFZhbHVlICYmIGVuZFZhbHVlICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHZhbHVlcyBoYXZlIGJlZW4gdHJhbnNmZXJyZWQgZnJvbSB0aGUgcHJldmlvdXMgVmVsb2NpdHkgY2FsbCwgZXh0cmFjdCB0aGUgZW5kVmFsdWUgYW5kIHJvb3RQcm9wZXJ0eVZhbHVlXHJcblx0XHRcdFx0XHRcdFx0IGZvciBhbGwgb2YgdGhlIGN1cnJlbnQgY2FsbCdzIHByb3BlcnRpZXMgdGhhdCB3ZXJlICphbHNvKiBhbmltYXRlZCBpbiB0aGUgcHJldmlvdXMgY2FsbC4gKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBWYWx1ZSB0cmFuc2ZlcnJpbmcgY2FuIG9wdGlvbmFsbHkgYmUgZGlzYWJsZWQgYnkgdGhlIHVzZXIgdmlhIHRoZSBfY2FjaGVWYWx1ZXMgb3B0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvcHRzLl9jYWNoZVZhbHVlcyAmJiBsYXN0VHdlZW5zQ29udGFpbmVyICYmIGxhc3RUd2VlbnNDb250YWluZXJbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBsYXN0VHdlZW5zQ29udGFpbmVyW3Byb3BlcnR5XS5lbmRWYWx1ZSArIGxhc3RUd2VlbnNDb250YWluZXJbcHJvcGVydHldLnVuaXRUeXBlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBwcmV2aW91cyBjYWxsJ3Mgcm9vdFByb3BlcnR5VmFsdWUgaXMgZXh0cmFjdGVkIGZyb20gdGhlIGVsZW1lbnQncyBkYXRhIGNhY2hlIHNpbmNlIHRoYXQncyB0aGVcclxuXHRcdFx0XHRcdFx0XHRcdCBpbnN0YW5jZSBvZiByb290UHJvcGVydHlWYWx1ZSB0aGF0IGdldHMgZnJlc2hseSB1cGRhdGVkIGJ5IHRoZSB0d2VlbmluZyBwcm9jZXNzLCB3aGVyZWFzIHRoZSByb290UHJvcGVydHlWYWx1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0IGF0dGFjaGVkIHRvIHRoZSBpbmNvbWluZyBsYXN0VHdlZW5zQ29udGFpbmVyIGlzIGVxdWFsIHRvIHRoZSByb290IHByb3BlcnR5J3MgdmFsdWUgcHJpb3IgdG8gYW55IHR3ZWVuaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBkYXRhLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbcm9vdFByb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIHZhbHVlcyB3ZXJlIG5vdCB0cmFuc2ZlcnJlZCBmcm9tIGEgcHJldmlvdXMgVmVsb2NpdHkgY2FsbCwgcXVlcnkgdGhlIERPTSBhcyBuZWVkZWQuICovXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEhhbmRsZSBob29rZWQgcHJvcGVydGllcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHN0YXJ0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcm9vdFByb3BlcnR5KTsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogVGhlIGZvbGxvd2luZyBnZXRQcm9wZXJ0eVZhbHVlKCkgY2FsbCBkb2VzIG5vdCBhY3R1YWxseSB0cmlnZ2VyIGEgRE9NIHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBnZXRQcm9wZXJ0eVZhbHVlKCkgd2lsbCBleHRyYWN0IHRoZSBob29rIGZyb20gcm9vdFByb3BlcnR5VmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIHByb3BlcnR5LCByb290UHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgc3RhcnRWYWx1ZSBpcyBhbHJlYWR5IGRlZmluZWQgdmlhIGZvcmNlZmVlZGluZywgZG8gbm90IHF1ZXJ5IHRoZSBET00gZm9yIHRoZSByb290IHByb3BlcnR5J3MgdmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGp1c3QgZ3JhYiByb290UHJvcGVydHkncyB6ZXJvLXZhbHVlIHRlbXBsYXRlIGZyb20gQ1NTLkhvb2tzLiBUaGlzIG92ZXJ3cml0ZXMgdGhlIGVsZW1lbnQncyBhY3R1YWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgcm9vdCBwcm9wZXJ0eSB2YWx1ZSAoaWYgb25lIGlzIHNldCksIGJ1dCB0aGlzIGlzIGFjY2VwdGFibGUgc2luY2UgdGhlIHByaW1hcnkgcmVhc29uIHVzZXJzIGZvcmNlZmVlZCBpc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB0byBhdm9pZCBET00gcXVlcmllcywgYW5kIHRodXMgd2UgbGlrZXdpc2UgYXZvaWQgcXVlcnlpbmcgdGhlIERPTSBmb3IgdGhlIHJvb3QgcHJvcGVydHkncyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBHcmFiIHRoaXMgaG9vaydzIHplcm8tdmFsdWUgdGVtcGxhdGUsIGUuZy4gXCIwcHggMHB4IDBweCBibGFja1wiLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLnRlbXBsYXRlc1tyb290UHJvcGVydHldWzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIEhhbmRsZSBub24taG9va2VkIHByb3BlcnRpZXMgdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiBkZWZpbmVkIHZpYSBmb3JjZWZlZWRpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXJ0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdCBWYWx1ZSBEYXRhIEV4dHJhY3Rpb25cclxuXHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZXBhcmF0ZWRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZVVuaXRUeXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVyYXRvciA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBTZXBhcmF0ZXMgYSBwcm9wZXJ0eSB2YWx1ZSBpbnRvIGl0cyBudW1lcmljIHZhbHVlIGFuZCBpdHMgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzZXBhcmF0ZVZhbHVlID0gZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdW5pdFR5cGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bnVtZXJpY1ZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdG51bWVyaWNWYWx1ZSA9ICh2YWx1ZSB8fCBcIjBcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogTWF0Y2ggdGhlIHVuaXQgdHlwZSBhdCB0aGUgZW5kIG9mIHRoZSB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvWyVBLXpdKyQvLCBmdW5jdGlvbihtYXRjaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogR3JhYiB0aGUgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pdFR5cGUgPSBtYXRjaDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTdHJpcCB0aGUgdW5pdCB0eXBlIG9mZiBvZiB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIG5vIHVuaXQgdHlwZSB3YXMgc3VwcGxpZWQsIGFzc2lnbiBvbmUgdGhhdCBpcyBhcHByb3ByaWF0ZSBmb3IgdGhpcyBwcm9wZXJ0eSAoZS5nLiBcImRlZ1wiIGZvciByb3RhdGVaIG9yIFwicHhcIiBmb3Igd2lkdGgpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF1bml0VHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0VHlwZSA9IENTUy5WYWx1ZXMuZ2V0VW5pdFR5cGUocHJvcGVydHkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBbbnVtZXJpY1ZhbHVlLCB1bml0VHlwZV07XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIFR5cGUuaXNTdHJpbmcoc3RhcnRWYWx1ZSkgJiYgVHlwZS5pc1N0cmluZyhlbmRWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGlTdGFydCA9IDAsIC8vIGluZGV4IGluIHN0YXJ0VmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpRW5kID0gMCwgLy8gaW5kZXggaW4gZW5kVmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQgPSBbXSwgLy8gYXJyYXkgb2Ygc3RhcnRWYWx1ZSBudW1iZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YUVuZCA9IFtdLCAvLyBhcnJheSBvZiBlbmRWYWx1ZSBudW1iZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5DYWxjID0gMCwgLy8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYSBcImNhbGMoKVwiIHNvIHdlIGRvbid0IGR1cGxpY2F0ZSBpdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCID0gMCwgLy8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYW4gUkdCIGFzIHdlIGNhbid0IHVzZSBmcmFjdGlvbmFsIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCQSA9IDA7IC8vIEtlZXAgdHJhY2sgb2YgYmVpbmcgaW5zaWRlIGFuIFJHQkEgYXMgd2UgbXVzdCBwYXNzIGZyYWN0aW9uYWwgZm9yIHRoZSBhbHBoYSBjaGFubmVsXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IENTUy5Ib29rcy5maXhDb2xvcnMoc3RhcnRWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IENTUy5Ib29rcy5maXhDb2xvcnMoZW5kVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGlTdGFydCA8IHN0YXJ0VmFsdWUubGVuZ3RoICYmIGlFbmQgPCBlbmRWYWx1ZS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNTdGFydCA9IHN0YXJ0VmFsdWVbaVN0YXJ0XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNFbmQgPSBlbmRWYWx1ZVtpRW5kXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgvW1xcZFxcLi1dLy50ZXN0KGNTdGFydCkgJiYgL1tcXGRcXC4tXS8udGVzdChjRW5kKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB0U3RhcnQgPSBjU3RhcnQsIC8vIHRlbXBvcmFyeSBjaGFyYWN0ZXIgYnVmZmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRFbmQgPSBjRW5kLCAvLyB0ZW1wb3JhcnkgY2hhcmFjdGVyIGJ1ZmZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RTdGFydCA9IFwiLlwiLCAvLyBNYWtlIHN1cmUgd2UgY2FuIG9ubHkgZXZlciBtYXRjaCBhIHNpbmdsZSBkb3QgaW4gYSBkZWNpbWFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdEVuZCA9IFwiLlwiOyAvLyBNYWtlIHN1cmUgd2UgY2FuIG9ubHkgZXZlciBtYXRjaCBhIHNpbmdsZSBkb3QgaW4gYSBkZWNpbWFsXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlICgrK2lTdGFydCA8IHN0YXJ0VmFsdWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjU3RhcnQgPSBzdGFydFZhbHVlW2lTdGFydF07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY1N0YXJ0ID09PSBkb3RTdGFydCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RTdGFydCA9IFwiLi5cIjsgLy8gQ2FuIG5ldmVyIG1hdGNoIHR3byBjaGFyYWN0ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEvXFxkLy50ZXN0KGNTdGFydCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0U3RhcnQgKz0gY1N0YXJ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoKytpRW5kIDwgZW5kVmFsdWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjRW5kID0gZW5kVmFsdWVbaUVuZF07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY0VuZCA9PT0gZG90RW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdEVuZCA9IFwiLi5cIjsgLy8gQ2FuIG5ldmVyIG1hdGNoIHR3byBjaGFyYWN0ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEvXFxkLy50ZXN0KGNFbmQpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dEVuZCArPSBjRW5kO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdVN0YXJ0ID0gQ1NTLkhvb2tzLmdldFVuaXQoc3RhcnRWYWx1ZSwgaVN0YXJ0KSwgLy8gdGVtcG9yYXJ5IHVuaXQgdHlwZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1RW5kID0gQ1NTLkhvb2tzLmdldFVuaXQoZW5kVmFsdWUsIGlFbmQpOyAvLyB0ZW1wb3JhcnkgdW5pdCB0eXBlXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlTdGFydCArPSB1U3RhcnQubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlFbmQgKz0gdUVuZC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHVTdGFydCA9PT0gdUVuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2FtZSB1bml0c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRTdGFydCA9PT0gdEVuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTYW1lIG51bWJlcnMsIHNvIGp1c3QgY29weSBvdmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gKz0gdFN0YXJ0ICsgdVN0YXJ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGlmZmVyZW50IG51bWJlcnMsIHNvIHN0b3JlIHRoZW1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiArPSBcIntcIiArIGFTdGFydC5sZW5ndGggKyAoaW5SR0IgPyBcIiFcIiA6IFwiXCIpICsgXCJ9XCIgKyB1U3RhcnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFTdGFydC5wdXNoKHBhcnNlRmxvYXQodFN0YXJ0KSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFFbmQucHVzaChwYXJzZUZsb2F0KHRFbmQpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGlmZmVyZW50IHVuaXRzLCBzbyBwdXQgaW50byBhIFwiY2FsYyhmcm9tICsgdG8pXCIgYW5kIGFuaW1hdGUgZWFjaCBzaWRlIHRvL2Zyb20gemVyb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5TdGFydCA9IHBhcnNlRmxvYXQodFN0YXJ0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuRW5kID0gcGFyc2VGbG9hdCh0RW5kKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuICs9IChpbkNhbGMgPCA1ID8gXCJjYWxjXCIgOiBcIlwiKSArIFwiKFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAoblN0YXJ0ID8gXCJ7XCIgKyBhU3RhcnQubGVuZ3RoICsgKGluUkdCID8gXCIhXCIgOiBcIlwiKSArIFwifVwiIDogXCIwXCIpICsgdVN0YXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyBcIiArIFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAobkVuZCA/IFwie1wiICsgKGFTdGFydC5sZW5ndGggKyAoblN0YXJ0ID8gMSA6IDApKSArIChpblJHQiA/IFwiIVwiIDogXCJcIikgKyBcIn1cIiA6IFwiMFwiKSArIHVFbmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIFwiKVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5TdGFydCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQucHVzaChuU3RhcnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhRW5kLnB1c2goMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobkVuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQucHVzaCgwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YUVuZC5wdXNoKG5FbmQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjU3RhcnQgPT09IGNFbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuICs9IGNTdGFydDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpU3RhcnQrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpRW5kKys7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYSBjYWxjKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW5DYWxjID09PSAwICYmIGNTdGFydCA9PT0gXCJjXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5DYWxjID09PSAxICYmIGNTdGFydCA9PT0gXCJhXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5DYWxjID09PSAyICYmIGNTdGFydCA9PT0gXCJsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5DYWxjID09PSAzICYmIGNTdGFydCA9PT0gXCJjXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5DYWxjID49IDQgJiYgY1N0YXJ0ID09PSBcIihcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluQ2FsYysrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoKGluQ2FsYyAmJiBpbkNhbGMgPCA1KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPj0gNCAmJiBjU3RhcnQgPT09IFwiKVwiICYmIC0taW5DYWxjIDwgNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5DYWxjID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYW4gcmdiKCkgLyByZ2JhKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW5SR0IgPT09IDAgJiYgY1N0YXJ0ID09PSBcInJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpblJHQiA9PT0gMSAmJiBjU3RhcnQgPT09IFwiZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID09PSAyICYmIGNTdGFydCA9PT0gXCJiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5SR0IgPT09IDMgJiYgY1N0YXJ0ID09PSBcImFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpblJHQiA+PSAzICYmIGNTdGFydCA9PT0gXCIoXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW5SR0IgPT09IDMgJiYgY1N0YXJ0ID09PSBcImFcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpblJHQkEgPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0IrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluUkdCQSAmJiBjU3RhcnQgPT09IFwiLFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKytpblJHQkEgPiAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCID0gaW5SR0JBID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChpblJHQkEgJiYgaW5SR0IgPCAoaW5SR0JBID8gNSA6IDQpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpblJHQiA+PSAoaW5SR0JBID8gNCA6IDMpICYmIGNTdGFydCA9PT0gXCIpXCIgJiYgLS1pblJHQiA8IChpblJHQkEgPyA1IDogNCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCID0gaW5SR0JBID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5DYWxjID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBjaGFuZ2luZyB1bml0cywgZml4aW5nIGNvbG91cnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlTdGFydCAhPT0gc3RhcnRWYWx1ZS5sZW5ndGggfHwgaUVuZCAhPT0gZW5kVmFsdWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUcnlpbmcgdG8gcGF0dGVybiBtYXRjaCBtaXMtbWF0Y2hlZCBzdHJpbmdzIFtcXFwiXCIgKyBlbmRWYWx1ZSArIFwiXFxcIiwgXFxcIlwiICsgc3RhcnRWYWx1ZSArIFwiXFxcIl1cIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChwYXR0ZXJuKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChhU3RhcnQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhdHRlcm4gZm91bmQgXFxcIlwiICsgcGF0dGVybiArIFwiXFxcIiAtPiBcIiwgYVN0YXJ0LCBhRW5kLCBcIltcIiArIHN0YXJ0VmFsdWUgKyBcIixcIiArIGVuZFZhbHVlICsgXCJdXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gYVN0YXJ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gYUVuZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZVVuaXRUeXBlID0gc3RhcnRWYWx1ZVVuaXRUeXBlID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXBhdHRlcm4pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIFNlcGFyYXRlIHN0YXJ0VmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0ZWRWYWx1ZSA9IHNlcGFyYXRlVmFsdWUocHJvcGVydHksIHN0YXJ0VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHNlcGFyYXRlZFZhbHVlWzBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZVVuaXRUeXBlID0gc2VwYXJhdGVkVmFsdWVbMV07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogU2VwYXJhdGUgZW5kVmFsdWUsIGFuZCBleHRyYWN0IGEgdmFsdWUgb3BlcmF0b3IgKGUuZy4gXCIrPVwiLCBcIi09XCIpIGlmIG9uZSBleGlzdHMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0ZWRWYWx1ZSA9IHNlcGFyYXRlVmFsdWUocHJvcGVydHksIGVuZFZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gc2VwYXJhdGVkVmFsdWVbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LywgZnVuY3Rpb24obWF0Y2gsIHN1Yk1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wZXJhdG9yID0gc3ViTWF0Y2g7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBTdHJpcCB0aGUgb3BlcmF0b3Igb2ZmIG9mIHRoZSB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzZXBhcmF0ZWRWYWx1ZVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBQYXJzZSBmbG9hdCB2YWx1ZXMgZnJvbSBlbmRWYWx1ZSBhbmQgc3RhcnRWYWx1ZS4gRGVmYXVsdCB0byAwIGlmIE5hTiBpcyByZXR1cm5lZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpIHx8IDA7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0IFByb3BlcnR5LVNwZWNpZmljIFZhbHVlIENvbnZlcnNpb25cclxuXHRcdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ3VzdG9tIHN1cHBvcnQgZm9yIHByb3BlcnRpZXMgdGhhdCBkb24ndCBhY3R1YWxseSBhY2NlcHQgdGhlICUgdW5pdCB0eXBlLCBidXQgd2hlcmUgcG9sbHlmaWxsaW5nIGlzIHRyaXZpYWwgYW5kIHJlbGF0aXZlbHkgZm9vbHByb29mLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVuZFZhbHVlVW5pdFR5cGUgPT09IFwiJVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIEEgJS12YWx1ZSBmb250U2l6ZS9saW5lSGVpZ2h0IGlzIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQncyBmb250U2l6ZSAoYXMgb3Bwb3NlZCB0byB0aGUgcGFyZW50J3MgZGltZW5zaW9ucyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB3aGljaCBpcyBpZGVudGljYWwgdG8gdGhlIGVtIHVuaXQncyBiZWhhdmlvciwgc28gd2UgcGlnZ3liYWNrIG9mZiBvZiB0aGF0LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIENvbnZlcnQgJSBpbnRvIGFuIGVtIGRlY2ltYWwgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBlbmRWYWx1ZSAvIDEwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZVVuaXRUeXBlID0gXCJlbVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEZvciBzY2FsZVggYW5kIHNjYWxlWSwgY29udmVydCB0aGUgdmFsdWUgaW50byBpdHMgZGVjaW1hbCBmb3JtYXQgYW5kIHN0cmlwIG9mZiB0aGUgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9ec2NhbGUvLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBlbmRWYWx1ZSAvIDEwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZVVuaXRUeXBlID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgUkdCIGNvbXBvbmVudHMsIHRha2UgdGhlIGRlZmluZWQgcGVyY2VudGFnZSBvZiAyNTUgYW5kIHN0cmlwIG9mZiB0aGUgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSAoZW5kVmFsdWUgLyAxMDApICogMjU1O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFVuaXQgUmF0aW8gQ2FsY3VsYXRpb25cclxuXHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBXaGVuIHF1ZXJpZWQsIHRoZSBicm93c2VyIHJldHVybnMgKG1vc3QpIENTUyBwcm9wZXJ0eSB2YWx1ZXMgaW4gcGl4ZWxzLiBUaGVyZWZvcmUsIGlmIGFuIGVuZFZhbHVlIHdpdGggYSB1bml0IHR5cGUgb2ZcclxuXHRcdFx0XHRcdFx0XHQgJSwgZW0sIG9yIHJlbSBpcyBhbmltYXRlZCB0b3dhcmQsIHN0YXJ0VmFsdWUgbXVzdCBiZSBjb252ZXJ0ZWQgZnJvbSBwaXhlbHMgaW50byB0aGUgc2FtZSB1bml0IHR5cGUgYXMgZW5kVmFsdWUgaW4gb3JkZXJcclxuXHRcdFx0XHRcdFx0XHQgZm9yIHZhbHVlIG1hbmlwdWxhdGlvbiBsb2dpYyAoaW5jcmVtZW50L2RlY3JlbWVudCkgdG8gcHJvY2VlZC4gRnVydGhlciwgaWYgdGhlIHN0YXJ0VmFsdWUgd2FzIGZvcmNlZmVkIG9yIHRyYW5zZmVycmVkXHJcblx0XHRcdFx0XHRcdFx0IGZyb20gYSBwcmV2aW91cyBjYWxsLCBzdGFydFZhbHVlIG1heSBhbHNvIG5vdCBiZSBpbiBwaXhlbHMuIFVuaXQgY29udmVyc2lvbiBsb2dpYyB0aGVyZWZvcmUgY29uc2lzdHMgb2YgdHdvIHN0ZXBzOlxyXG5cdFx0XHRcdFx0XHRcdCAxKSBDYWxjdWxhdGluZyB0aGUgcmF0aW8gb2YgJS9lbS9yZW0vdmgvdncgcmVsYXRpdmUgdG8gcGl4ZWxzXHJcblx0XHRcdFx0XHRcdFx0IDIpIENvbnZlcnRpbmcgc3RhcnRWYWx1ZSBpbnRvIHRoZSBzYW1lIHVuaXQgb2YgbWVhc3VyZW1lbnQgYXMgZW5kVmFsdWUgYmFzZWQgb24gdGhlc2UgcmF0aW9zLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIFVuaXQgY29udmVyc2lvbiByYXRpb3MgYXJlIGNhbGN1bGF0ZWQgYnkgaW5zZXJ0aW5nIGEgc2libGluZyBub2RlIG5leHQgdG8gdGhlIHRhcmdldCBub2RlLCBjb3B5aW5nIG92ZXIgaXRzIHBvc2l0aW9uIHByb3BlcnR5LFxyXG5cdFx0XHRcdFx0XHRcdCBzZXR0aW5nIHZhbHVlcyB3aXRoIHRoZSB0YXJnZXQgdW5pdCB0eXBlIHRoZW4gY29tcGFyaW5nIHRoZSByZXR1cm5lZCBwaXhlbCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBFdmVuIGlmIG9ubHkgb25lIG9mIHRoZXNlIHVuaXQgdHlwZXMgaXMgYmVpbmcgYW5pbWF0ZWQsIGFsbCB1bml0IHJhdGlvcyBhcmUgY2FsY3VsYXRlZCBhdCBvbmNlIHNpbmNlIHRoZSBvdmVyaGVhZFxyXG5cdFx0XHRcdFx0XHRcdCBvZiBiYXRjaGluZyB0aGUgU0VUcyBhbmQgR0VUcyB0b2dldGhlciB1cGZyb250IG91dHdlaWdodHMgdGhlIHBvdGVudGlhbCBvdmVyaGVhZFxyXG5cdFx0XHRcdFx0XHRcdCBvZiBsYXlvdXQgdGhyYXNoaW5nIGNhdXNlZCBieSByZS1xdWVyeWluZyBmb3IgdW5jYWxjdWxhdGVkIHJhdGlvcyBmb3Igc3Vic2VxdWVudGx5LXByb2Nlc3NlZCBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIFRvZG86IFNoaWZ0IHRoaXMgbG9naWMgaW50byB0aGUgY2FsbHMnIGZpcnN0IHRpY2sgaW5zdGFuY2Ugc28gdGhhdCBpdCdzIHN5bmNlZCB3aXRoIFJBRi4gKi9cclxuXHRcdFx0XHRcdFx0XHR2YXIgY2FsY3VsYXRlVW5pdFJhdGlvcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdCBTYW1lIFJhdGlvIENoZWNrc1xyXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgcHJvcGVydGllcyBiZWxvdyBhcmUgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgZWxlbWVudCBkaWZmZXJzIHN1ZmZpY2llbnRseSBmcm9tIHRoaXMgY2FsbCdzXHJcblx0XHRcdFx0XHRcdFx0XHQgcHJldmlvdXNseSBpdGVyYXRlZCBlbGVtZW50IHRvIGFsc28gZGlmZmVyIGluIGl0cyB1bml0IGNvbnZlcnNpb24gcmF0aW9zLiBJZiB0aGUgcHJvcGVydGllcyBtYXRjaCB1cCB3aXRoIHRob3NlXHJcblx0XHRcdFx0XHRcdFx0XHQgb2YgdGhlIHByaW9yIGVsZW1lbnQsIHRoZSBwcmlvciBlbGVtZW50J3MgY29udmVyc2lvbiByYXRpb3MgYXJlIHVzZWQuIExpa2UgbW9zdCBvcHRpbWl6YXRpb25zIGluIFZlbG9jaXR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0IHRoaXMgaXMgZG9uZSB0byBtaW5pbWl6ZSBET00gcXVlcnlpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgc2FtZVJhdGlvSW5kaWNhdG9ycyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bXlQYXJlbnQ6IGVsZW1lbnQucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5LCAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicG9zaXRpb25cIiksIC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJmb250U2l6ZVwiKSAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRGV0ZXJtaW5lIGlmIHRoZSBzYW1lICUgcmF0aW8gY2FuIGJlIHVzZWQuICUgaXMgYmFzZWQgb24gdGhlIGVsZW1lbnQncyBwb3NpdGlvbiB2YWx1ZSBhbmQgaXRzIHBhcmVudCdzIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzYW1lUGVyY2VudFJhdGlvID0gKChzYW1lUmF0aW9JbmRpY2F0b3JzLnBvc2l0aW9uID09PSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQb3NpdGlvbikgJiYgKHNhbWVSYXRpb0luZGljYXRvcnMubXlQYXJlbnQgPT09IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBhcmVudCkpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIERldGVybWluZSBpZiB0aGUgc2FtZSBlbSByYXRpbyBjYW4gYmUgdXNlZC4gZW0gaXMgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBmb250U2l6ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzYW1lRW1SYXRpbyA9IChzYW1lUmF0aW9JbmRpY2F0b3JzLmZvbnRTaXplID09PSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RGb250U2l6ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogU3RvcmUgdGhlc2UgcmF0aW8gaW5kaWNhdG9ycyBjYWxsLXdpZGUgZm9yIHRoZSBuZXh0IGVsZW1lbnQgdG8gY29tcGFyZSBhZ2FpbnN0LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGFyZW50ID0gc2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudDtcclxuXHRcdFx0XHRcdFx0XHRcdGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBvc2l0aW9uID0gc2FtZVJhdGlvSW5kaWNhdG9ycy5wb3NpdGlvbjtcclxuXHRcdFx0XHRcdFx0XHRcdGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdEZvbnRTaXplID0gc2FtZVJhdGlvSW5kaWNhdG9ycy5mb250U2l6ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0XHQgRWxlbWVudC1TcGVjaWZpYyBVbml0c1xyXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBJRTggcm91bmRzIHRvIHRoZSBuZWFyZXN0IHBpeGVsIHdoZW4gcmV0dXJuaW5nIENTUyB2YWx1ZXMsIHRodXMgd2UgcGVyZm9ybSBjb252ZXJzaW9ucyB1c2luZyBhIG1lYXN1cmVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHQgb2YgMTAwIChpbnN0ZWFkIG9mIDEpIHRvIGdpdmUgb3VyIHJhdGlvcyBhIHByZWNpc2lvbiBvZiBhdCBsZWFzdCAyIGRlY2ltYWwgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1lYXN1cmVtZW50ID0gMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MgPSB7fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNhbWVFbVJhdGlvIHx8ICFzYW1lUGVyY2VudFJhdGlvKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBkdW1teSA9IGRhdGEgJiYgZGF0YS5pc1NWRyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5pbml0KGR1bW15KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudC5hcHBlbmRDaGlsZChkdW1teSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBUbyBhY2N1cmF0ZWx5IGFuZCBjb25zaXN0ZW50bHkgY2FsY3VsYXRlIGNvbnZlcnNpb24gcmF0aW9zLCB0aGUgZWxlbWVudCdzIGNhc2NhZGVkIG92ZXJmbG93IGFuZCBib3gtc2l6aW5nIGFyZSBzdHJpcHBlZC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFNpbWlsYXJseSwgc2luY2Ugd2lkdGgvaGVpZ2h0IGNhbiBiZSBhcnRpZmljaWFsbHkgY29uc3RyYWluZWQgYnkgdGhlaXIgbWluLS9tYXgtIGVxdWl2YWxlbnRzLCB0aGVzZSBhcmUgY29udHJvbGxlZCBmb3IgYXMgd2VsbC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogT3ZlcmZsb3cgbXVzdCBiZSBhbHNvIGJlIGNvbnRyb2xsZWQgZm9yIHBlci1heGlzIHNpbmNlIHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBvdmVyd3JpdGVzIGl0cyBwZXItYXhpcyB2YWx1ZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdCQuZWFjaChbXCJvdmVyZmxvd1wiLCBcIm92ZXJmbG93WFwiLCBcIm92ZXJmbG93WVwiXSwgZnVuY3Rpb24oaSwgcHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgcHJvcGVydHksIFwiaGlkZGVuXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuQ1NTLnNldFByb3BlcnR5VmFsdWUoZHVtbXksIFwicG9zaXRpb25cIiwgc2FtZVJhdGlvSW5kaWNhdG9ycy5wb3NpdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcImZvbnRTaXplXCIsIHNhbWVSYXRpb0luZGljYXRvcnMuZm9udFNpemUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJib3hTaXppbmdcIiwgXCJjb250ZW50LWJveFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIHdpZHRoIGFuZCBoZWlnaHQgYWN0IGFzIG91ciBwcm94eSBwcm9wZXJ0aWVzIGZvciBtZWFzdXJpbmcgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsICUgcmF0aW9zLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmVhY2goW1wibWluV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIndpZHRoXCIsIFwibWluSGVpZ2h0XCIsIFwibWF4SGVpZ2h0XCIsIFwiaGVpZ2h0XCJdLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBwcm9wZXJ0eSwgbWVhc3VyZW1lbnQgKyBcIiVcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBwYWRkaW5nTGVmdCBhcmJpdHJhcmlseSBhY3RzIGFzIG91ciBwcm94eSBwcm9wZXJ0eSBmb3IgdGhlIGVtIHJhdGlvLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJwYWRkaW5nTGVmdFwiLCBtZWFzdXJlbWVudCArIFwiZW1cIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBEaXZpZGUgdGhlIHJldHVybmVkIHZhbHVlIGJ5IHRoZSBtZWFzdXJlbWVudCB0byBnZXQgdGhlIHJhdGlvIGJldHdlZW4gMSUgYW5kIDFweC4gRGVmYXVsdCB0byAxIHNpbmNlIHdvcmtpbmcgd2l0aCAwIGNhbiBwcm9kdWNlIEluZmluaXRlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLnBlcmNlbnRUb1B4V2lkdGggPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQZXJjZW50VG9QeFdpZHRoID0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZHVtbXksIFwid2lkdGhcIiwgbnVsbCwgdHJ1ZSkpIHx8IDEpIC8gbWVhc3VyZW1lbnQ7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLnBlcmNlbnRUb1B4SGVpZ2h0ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGVyY2VudFRvUHhIZWlnaHQgPSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJoZWlnaHRcIiwgbnVsbCwgdHJ1ZSkpIHx8IDEpIC8gbWVhc3VyZW1lbnQ7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLmVtVG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdEVtVG9QeCA9IChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcInBhZGRpbmdMZWZ0XCIpKSB8fCAxKSAvIG1lYXN1cmVtZW50OyAvKiBHRVQgKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNhbWVSYXRpb0luZGljYXRvcnMubXlQYXJlbnQucmVtb3ZlQ2hpbGQoZHVtbXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5lbVRvUHggPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RFbVRvUHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhXaWR0aCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBlcmNlbnRUb1B4V2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhIZWlnaHQgPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQZXJjZW50VG9QeEhlaWdodDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0XHQgRWxlbWVudC1BZ25vc3RpYyBVbml0c1xyXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBXaGVyZWFzICUgYW5kIGVtIHJhdGlvcyBhcmUgZGV0ZXJtaW5lZCBvbiBhIHBlci1lbGVtZW50IGJhc2lzLCB0aGUgcmVtIHVuaXQgb25seSBuZWVkcyB0byBiZSBjaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHQgb25jZSBwZXIgY2FsbCBzaW5jZSBpdCdzIGV4Y2x1c2l2ZWx5IGRlcGVuZGFudCB1cG9uIGRvY3VtZW50LmJvZHkncyBmb250U2l6ZS4gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZVxyXG5cdFx0XHRcdFx0XHRcdFx0IHRoYXQgY2FsY3VsYXRlVW5pdFJhdGlvcygpIGlzIGJlaW5nIHJ1biBkdXJpbmcgdGhpcyBjYWxsLCByZW1Ub1B4IHdpbGwgc3RpbGwgYmUgc2V0IHRvIGl0cyBkZWZhdWx0IHZhbHVlIG9mIG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQgc28gd2UgY2FsY3VsYXRlIGl0IG5vdy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsVW5pdENvbnZlcnNpb25EYXRhLnJlbVRvUHggPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRGVmYXVsdCB0byBicm93c2VycycgZGVmYXVsdCBmb250U2l6ZSBvZiAxNnB4IGluIHRoZSBjYXNlIG9mIDAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhbGxVbml0Q29udmVyc2lvbkRhdGEucmVtVG9QeCA9IHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZG9jdW1lbnQuYm9keSwgXCJmb250U2l6ZVwiKSkgfHwgMTY7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFNpbWlsYXJseSwgdmlld3BvcnQgdW5pdHMgYXJlICUtcmVsYXRpdmUgdG8gdGhlIHdpbmRvdydzIGlubmVyIGRpbWVuc2lvbnMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbFVuaXRDb252ZXJzaW9uRGF0YS52d1RvUHggPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS52d1RvUHggPSBwYXJzZUZsb2F0KHdpbmRvdy5pbm5lcldpZHRoKSAvIDEwMDsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhbGxVbml0Q29udmVyc2lvbkRhdGEudmhUb1B4ID0gcGFyc2VGbG9hdCh3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMTAwOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLnJlbVRvUHggPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLnJlbVRvUHg7XHJcblx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLnZ3VG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEudndUb1B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy52aFRvUHggPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZoVG9QeDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIiArIEpTT04uc3RyaW5naWZ5KHVuaXRSYXRpb3MpLCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1bml0UmF0aW9zO1xyXG5cdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdCBVbml0IENvbnZlcnNpb25cclxuXHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIFRoZSAqIGFuZCAvIG9wZXJhdG9ycywgd2hpY2ggYXJlIG5vdCBwYXNzZWQgaW4gd2l0aCBhbiBhc3NvY2lhdGVkIHVuaXQsIGluaGVyZW50bHkgdXNlIHN0YXJ0VmFsdWUncyB1bml0LiBTa2lwIHZhbHVlIGFuZCB1bml0IGNvbnZlcnNpb24uICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKC9bXFwvKl0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZVVuaXRUeXBlID0gc3RhcnRWYWx1ZVVuaXRUeXBlO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgc3RhcnRWYWx1ZSBhbmQgZW5kVmFsdWUgZGlmZmVyIGluIHVuaXQgdHlwZSwgY29udmVydCBzdGFydFZhbHVlIGludG8gdGhlIHNhbWUgdW5pdCB0eXBlIGFzIGVuZFZhbHVlIHNvIHRoYXQgaWYgZW5kVmFsdWVVbml0VHlwZVxyXG5cdFx0XHRcdFx0XHRcdFx0IGlzIGEgcmVsYXRpdmUgdW5pdCAoJSwgZW0sIHJlbSksIHRoZSB2YWx1ZXMgc2V0IGR1cmluZyB0d2VlbmluZyB3aWxsIGNvbnRpbnVlIHRvIGJlIGFjY3VyYXRlbHkgcmVsYXRpdmUgZXZlbiBpZiB0aGUgbWV0cmljcyB0aGV5IGRlcGVuZFxyXG5cdFx0XHRcdFx0XHRcdFx0IG9uIGFyZSBkeW5hbWljYWxseSBjaGFuZ2luZyBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgYW5pbWF0aW9uLiBDb252ZXJzZWx5LCBpZiB3ZSBhbHdheXMgbm9ybWFsaXplZCBpbnRvIHB4IGFuZCB1c2VkIHB4IGZvciBzZXR0aW5nIHZhbHVlcywgdGhlIHB4IHJhdGlvXHJcblx0XHRcdFx0XHRcdFx0XHQgd291bGQgYmVjb21lIHN0YWxlIGlmIHRoZSBvcmlnaW5hbCB1bml0IGJlaW5nIGFuaW1hdGVkIHRvd2FyZCB3YXMgcmVsYXRpdmUgYW5kIHRoZSB1bmRlcmx5aW5nIG1ldHJpY3MgY2hhbmdlIGR1cmluZyB0aGUgYW5pbWF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogU2luY2UgMCBpcyAwIGluIGFueSB1bml0IHR5cGUsIG5vIGNvbnZlcnNpb24gaXMgbmVjZXNzYXJ5IHdoZW4gc3RhcnRWYWx1ZSBpcyAwIC0tIHdlIGp1c3Qgc3RhcnQgYXQgMCB3aXRoIGVuZFZhbHVlVW5pdFR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgoc3RhcnRWYWx1ZVVuaXRUeXBlICE9PSBlbmRWYWx1ZVVuaXRUeXBlKSAmJiBzdGFydFZhbHVlICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBVbml0IGNvbnZlcnNpb24gaXMgYWxzbyBza2lwcGVkIHdoZW4gZW5kVmFsdWUgaXMgMCwgYnV0ICpzdGFydFZhbHVlVW5pdFR5cGUqIG11c3QgYmUgdXNlZCBmb3IgdHdlZW4gdmFsdWVzIHRvIHJlbWFpbiBhY2N1cmF0ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFNraXBwaW5nIHVuaXQgY29udmVyc2lvbiBoZXJlIG1lYW5zIHRoYXQgaWYgZW5kVmFsdWVVbml0VHlwZSB3YXMgb3JpZ2luYWxseSBhIHJlbGF0aXZlIHVuaXQsIHRoZSBhbmltYXRpb24gd29uJ3QgcmVsYXRpdmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0IG1hdGNoIHRoZSB1bmRlcmx5aW5nIG1ldHJpY3MgaWYgdGhleSBjaGFuZ2UsIGJ1dCB0aGlzIGlzIGFjY2VwdGFibGUgc2luY2Ugd2UncmUgYW5pbWF0aW5nIHRvd2FyZCBpbnZpc2liaWxpdHkgaW5zdGVhZCBvZiB0b3dhcmQgdmlzaWJpbGl0eSxcclxuXHRcdFx0XHRcdFx0XHRcdCB3aGljaCByZW1haW5zIHBhc3QgdGhlIHBvaW50IG9mIHRoZSBhbmltYXRpb24ncyBjb21wbGV0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVuZFZhbHVlID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzdGFydFZhbHVlVW5pdFR5cGU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBCeSB0aGlzIHBvaW50LCB3ZSBjYW5ub3QgYXZvaWQgdW5pdCBjb252ZXJzaW9uIChpdCdzIHVuZGVzaXJhYmxlIHNpbmNlIGl0IGNhdXNlcyBsYXlvdXQgdGhyYXNoaW5nKS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IElmIHdlIGhhdmVuJ3QgYWxyZWFkeSwgd2UgdHJpZ2dlciBjYWxjdWxhdGVVbml0UmF0aW9zKCksIHdoaWNoIHJ1bnMgb25jZSBwZXIgZWxlbWVudCBwZXIgY2FsbC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YSA9IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEgfHwgY2FsY3VsYXRlVW5pdFJhdGlvcygpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogVGhlIGZvbGxvd2luZyBSZWdFeCBtYXRjaGVzIENTUyBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSB0aGVpciAlIHZhbHVlcyBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgeC1heGlzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBXM0Mgc3BlYyBtYW5kYXRlcyB0aGF0IGFsbCBvZiBtYXJnaW4gYW5kIHBhZGRpbmcncyBwcm9wZXJ0aWVzIChldmVuIHRvcCBhbmQgYm90dG9tKSBhcmUgJS1yZWxhdGl2ZSB0byB0aGUgKndpZHRoKiBvZiB0aGUgcGFyZW50IGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBheGlzID0gKC9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KHByb3BlcnR5KSB8fCAvWCQvLnRlc3QocHJvcGVydHkpIHx8IHByb3BlcnR5ID09PSBcInhcIikgPyBcInhcIiA6IFwieVwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogSW4gb3JkZXIgdG8gYXZvaWQgZ2VuZXJhdGluZyBuXjIgYmVzcG9rZSBjb252ZXJzaW9uIGZ1bmN0aW9ucywgdW5pdCBjb252ZXJzaW9uIGlzIGEgdHdvLXN0ZXAgcHJvY2VzczpcclxuXHRcdFx0XHRcdFx0XHRcdFx0IDEpIENvbnZlcnQgc3RhcnRWYWx1ZSBpbnRvIHBpeGVscy4gMikgQ29udmVydCB0aGlzIG5ldyBwaXhlbCB2YWx1ZSBpbnRvIGVuZFZhbHVlJ3MgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHN0YXJ0VmFsdWVVbml0VHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCIlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiB0cmFuc2xhdGVYIGFuZCB0cmFuc2xhdGVZIGFyZSB0aGUgb25seSBwcm9wZXJ0aWVzIHRoYXQgYXJlICUtcmVsYXRpdmUgdG8gYW4gZWxlbWVudCdzIG93biBkaW1lbnNpb25zIC0tIG5vdCBpdHMgcGFyZW50J3MgZGltZW5zaW9ucy5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBWZWxvY2l0eSBkb2VzIG5vdCBpbmNsdWRlIGEgc3BlY2lhbCBjb252ZXJzaW9uIHByb2Nlc3MgdG8gYWNjb3VudCBmb3IgdGhpcyBiZWhhdmlvci4gVGhlcmVmb3JlLCBhbmltYXRpbmcgdHJhbnNsYXRlWC9ZIGZyb20gYSAlIHZhbHVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdG8gYSBub24tJSB2YWx1ZSB3aWxsIHByb2R1Y2UgYW4gaW5jb3JyZWN0IHN0YXJ0IHZhbHVlLiBGb3J0dW5hdGVseSwgdGhpcyBzb3J0IG9mIGNyb3NzLXVuaXQgY29udmVyc2lvbiBpcyByYXJlbHkgZG9uZSBieSB1c2VycyBpbiBwcmFjdGljZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgKj0gKGF4aXMgPT09IFwieFwiID8gZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YS5wZXJjZW50VG9QeFdpZHRoIDogZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YS5wZXJjZW50VG9QeEhlaWdodCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInB4XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBweCBhY3RzIGFzIG91ciBtaWRwb2ludCBpbiB0aGUgdW5pdCBjb252ZXJzaW9uIHByb2Nlc3M7IGRvIG5vdGhpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgKj0gZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YVtzdGFydFZhbHVlVW5pdFR5cGUgKyBcIlRvUHhcIl07XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIEludmVydCB0aGUgcHggcmF0aW9zIHRvIGNvbnZlcnQgaW50byB0byB0aGUgdGFyZ2V0IHVuaXQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoZW5kVmFsdWVVbml0VHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCIlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlICo9IDEgLyAoYXhpcyA9PT0gXCJ4XCIgPyBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4V2lkdGggOiBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4SGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwicHhcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIHN0YXJ0VmFsdWUgaXMgYWxyZWFkeSBpbiBweCwgZG8gbm90aGluZzsgd2UncmUgZG9uZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSAqPSAxIC8gZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YVtlbmRWYWx1ZVVuaXRUeXBlICsgXCJUb1B4XCJdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFJlbGF0aXZlIFZhbHVlc1xyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIE9wZXJhdG9yIGxvZ2ljIG11c3QgYmUgcGVyZm9ybWVkIGxhc3Qgc2luY2UgaXQgcmVxdWlyZXMgdW5pdC1ub3JtYWxpemVkIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFJlbGF0aXZlICpwZXJjZW50IHZhbHVlcyogZG8gbm90IGJlaGF2ZSBob3cgbW9zdCBwZW9wbGUgdGhpbms7IHdoaWxlIG9uZSB3b3VsZCBleHBlY3QgXCIrPTUwJVwiXHJcblx0XHRcdFx0XHRcdFx0IHRvIGluY3JlYXNlIHRoZSBwcm9wZXJ0eSAxLjV4IGl0cyBjdXJyZW50IHZhbHVlLCBpdCBpbiBmYWN0IGluY3JlYXNlcyB0aGUgcGVyY2VudCB1bml0cyBpbiBhYnNvbHV0ZSB0ZXJtczpcclxuXHRcdFx0XHRcdFx0XHQgNTAgcG9pbnRzIGlzIGFkZGVkIG9uIHRvcCBvZiB0aGUgY3VycmVudCAlIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAob3BlcmF0b3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCIrXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gc3RhcnRWYWx1ZSArIGVuZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiLVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHN0YXJ0VmFsdWUgLSBlbmRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIipcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzdGFydFZhbHVlICogZW5kVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCIvXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gc3RhcnRWYWx1ZSAvIGVuZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdCB0d2VlbnNDb250YWluZXIgUHVzaFxyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQ29uc3RydWN0IHRoZSBwZXItcHJvcGVydHkgdHdlZW4gb2JqZWN0LCBhbmQgcHVzaCBpdCB0byB0aGUgZWxlbWVudCdzIHR3ZWVuc0NvbnRhaW5lci4gKi9cclxuXHRcdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXJbcHJvcGVydHldID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWU6IHJvb3RQcm9wZXJ0eVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZTogc3RhcnRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZTogc3RhcnRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlOiBlbmRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHVuaXRUeXBlOiBlbmRWYWx1ZVVuaXRUeXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiBlYXNpbmdcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwYXR0ZXJuKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXJbcHJvcGVydHldLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIgKyBwcm9wZXJ0eSArIFwiKTogXCIgKyBKU09OLnN0cmluZ2lmeSh0d2VlbnNDb250YWluZXJbcHJvcGVydHldKSwgZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0LyogQ3JlYXRlIGEgdHdlZW4gb3V0IG9mIGVhY2ggcHJvcGVydHksIGFuZCBhcHBlbmQgaXRzIGFzc29jaWF0ZWQgZGF0YSB0byB0d2VlbnNDb250YWluZXIuICovXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXNNYXApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFwcm9wZXJ0aWVzTWFwLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8qIFRoZSBvcmlnaW5hbCBwcm9wZXJ0eSBuYW1lJ3MgZm9ybWF0IG11c3QgYmUgdXNlZCBmb3IgdGhlIHBhcnNlUHJvcGVydHlWYWx1ZSgpIGxvb2t1cCxcclxuXHRcdFx0XHRcdFx0XHQgYnV0IHdlIHRoZW4gdXNlIGl0cyBjYW1lbENhc2Ugc3R5bGluZyB0byBub3JtYWxpemUgaXQgZm9yIG1hbmlwdWxhdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlOYW1lID0gQ1NTLk5hbWVzLmNhbWVsQ2FzZShwcm9wZXJ0eSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlRGF0YSA9IHBhcnNlUHJvcGVydHlWYWx1ZShwcm9wZXJ0aWVzTWFwW3Byb3BlcnR5XSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIEZpbmQgc2hvcnRoYW5kIGNvbG9yIHByb3BlcnRpZXMgdGhhdCBoYXZlIGJlZW4gcGFzc2VkIGEgaGV4IHN0cmluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBXb3VsZCBiZSBxdWlja2VyIHRvIHVzZSBDU1MuTGlzdHMuY29sb3JzLmluY2x1ZGVzKCkgaWYgcG9zc2libGUgKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoX2luQXJyYXkoQ1NTLkxpc3RzLmNvbG9ycywgcHJvcGVydHlOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogUGFyc2UgdGhlIHZhbHVlIGRhdGEgZm9yIGVhY2ggc2hvcnRoYW5kLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVuZFZhbHVlID0gdmFsdWVEYXRhWzBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IHZhbHVlRGF0YVsxXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuUmVnRXguaXNIZXgudGVzdChlbmRWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCB0aGUgaGV4IHN0cmluZ3MgaW50byB0aGVpciBSR0IgY29tcG9uZW50IGFycmF5cy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNvbG9yQ29tcG9uZW50cyA9IFtcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlUkdCID0gQ1NTLlZhbHVlcy5oZXhUb1JnYihlbmRWYWx1ZSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlUkdCID0gc3RhcnRWYWx1ZSA/IENTUy5WYWx1ZXMuaGV4VG9SZ2Ioc3RhcnRWYWx1ZSkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJbmplY3QgdGhlIFJHQiBjb21wb25lbnQgdHdlZW5zIGludG8gcHJvcGVydGllc01hcC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvckNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgZGF0YUFycmF5ID0gW2VuZFZhbHVlUkdCW2ldXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVhc2luZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUFycmF5LnB1c2goZWFzaW5nKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChzdGFydFZhbHVlUkdCICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFBcnJheS5wdXNoKHN0YXJ0VmFsdWVSR0JbaV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zml4UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUgKyBjb2xvckNvbXBvbmVudHNbaV0sIGRhdGFBcnJheSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSByZXBsYWNlZCBhIHNob3J0Y3V0IGNvbG9yIHZhbHVlIHRoZW4gZG9uJ3QgdXBkYXRlIHRoZSBzdGFuZGFyZCBwcm9wZXJ0eSBuYW1lICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRmaXhQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSwgdmFsdWVEYXRhKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogQWxvbmcgd2l0aCBpdHMgcHJvcGVydHkgZGF0YSwgc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXRzZWxmIG9udG8gdHdlZW5zQ29udGFpbmVyLiAqL1xyXG5cdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgQ2FsbCBQdXNoXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0LyogTm90ZTogdHdlZW5zQ29udGFpbmVyIGNhbiBiZSBlbXB0eSBpZiBhbGwgb2YgdGhlIHByb3BlcnRpZXMgaW4gdGhpcyBjYWxsJ3MgcHJvcGVydHkgbWFwIHdlcmUgc2tpcHBlZCBkdWUgdG8gbm90XHJcblx0XHRcdFx0XHQgYmVpbmcgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiBUaGUgZWxlbWVudCBwcm9wZXJ0eSBpcyB1c2VkIGZvciBjaGVja2luZyB0aGF0IHRoZSB0d2VlbnNDb250YWluZXIgaGFzIGJlZW4gYXBwZW5kZWQgdG8uICovXHJcblx0XHRcdFx0XHRpZiAodHdlZW5zQ29udGFpbmVyLmVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0LyogQXBwbHkgdGhlIFwidmVsb2NpdHktYW5pbWF0aW5nXCIgaW5kaWNhdG9yIGNsYXNzLiAqL1xyXG5cdFx0XHRcdFx0XHRDU1MuVmFsdWVzLmFkZENsYXNzKGVsZW1lbnQsIFwidmVsb2NpdHktYW5pbWF0aW5nXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogVGhlIGNhbGwgYXJyYXkgaG91c2VzIHRoZSB0d2VlbnNDb250YWluZXJzIGZvciBlYWNoIGVsZW1lbnQgYmVpbmcgYW5pbWF0ZWQgaW4gdGhlIGN1cnJlbnQgY2FsbC4gKi9cclxuXHRcdFx0XHRcdFx0Y2FsbC5wdXNoKHR3ZWVuc0NvbnRhaW5lcik7XHJcblxyXG5cdFx0XHRcdFx0XHRkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogU3RvcmUgdGhlIHR3ZWVuc0NvbnRhaW5lciBhbmQgb3B0aW9ucyBpZiB3ZSdyZSB3b3JraW5nIG9uIHRoZSBkZWZhdWx0IGVmZmVjdHMgcXVldWUsIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCBieSB0aGUgcmV2ZXJzZSBjb21tYW5kLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvcHRzLnF1ZXVlID09PSBcIlwiKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS50d2VlbnNDb250YWluZXIgPSB0d2VlbnNDb250YWluZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLm9wdHMgPSBvcHRzO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogU3dpdGNoIG9uIHRoZSBlbGVtZW50J3MgYW5pbWF0aW5nIGZsYWcuICovXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS5pc0FuaW1hdGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIE9uY2UgdGhlIGZpbmFsIGVsZW1lbnQgaW4gdGhpcyBjYWxsJ3MgZWxlbWVudCBzZXQgaGFzIGJlZW4gcHJvY2Vzc2VkLCBwdXNoIHRoZSBjYWxsIGFycmF5IG9udG9cclxuXHRcdFx0XHRcdFx0IFZlbG9jaXR5LlN0YXRlLmNhbGxzIGZvciB0aGUgYW5pbWF0aW9uIHRpY2sgdG8gaW1tZWRpYXRlbHkgYmVnaW4gcHJvY2Vzc2luZy4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnRzSW5kZXggPT09IGVsZW1lbnRzTGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIEFkZCB0aGUgY3VycmVudCBjYWxsIHBsdXMgaXRzIGFzc29jaWF0ZWQgbWV0YWRhdGEgKHRoZSBlbGVtZW50IHNldCBhbmQgdGhlIGNhbGwncyBvcHRpb25zKSBvbnRvIHRoZSBnbG9iYWwgY2FsbCBjb250YWluZXIuXHJcblx0XHRcdFx0XHRcdFx0IEFueXRoaW5nIG9uIHRoaXMgY2FsbCBjb250YWluZXIgaXMgc3ViamVjdGVkIHRvIHRpY2soKSBwcm9jZXNzaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzLnB1c2goW2NhbGwsIGVsZW1lbnRzLCBvcHRzLCBudWxsLCBwcm9taXNlRGF0YS5yZXNvbHZlciwgbnVsbCwgMF0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgYW5pbWF0aW9uIHRpY2sgaXNuJ3QgcnVubmluZywgc3RhcnQgaXQuIChWZWxvY2l0eSBzaHV0cyBpdCBvZmYgd2hlbiB0aGVyZSBhcmUgbm8gYWN0aXZlIGNhbGxzIHRvIHByb2Nlc3MuKSAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFN0YXJ0IHRoZSB0aWNrIGxvb3AuICovXHJcblx0XHRcdFx0XHRcdFx0XHR0aWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRzSW5kZXgrKztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogV2hlbiB0aGUgcXVldWUgb3B0aW9uIGlzIHNldCB0byBmYWxzZSwgdGhlIGNhbGwgc2tpcHMgdGhlIGVsZW1lbnQncyBxdWV1ZSBhbmQgZmlyZXMgaW1tZWRpYXRlbHkuICovXHJcblx0XHRcdFx0aWYgKG9wdHMucXVldWUgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQvKiBTaW5jZSB0aGlzIGJ1aWxkUXVldWUgY2FsbCBkb2Vzbid0IHJlc3BlY3QgdGhlIGVsZW1lbnQncyBleGlzdGluZyBxdWV1ZSAod2hpY2ggaXMgd2hlcmUgYSBkZWxheSBvcHRpb24gd291bGQgaGF2ZSBiZWVuIGFwcGVuZGVkKSxcclxuXHRcdFx0XHRcdCB3ZSBtYW51YWxseSBpbmplY3QgdGhlIGRlbGF5IHByb3BlcnR5IGhlcmUgd2l0aCBhbiBleHBsaWNpdCBzZXRUaW1lb3V0LiAqL1xyXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGVsYXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdC8qIFRlbXBvcmFyaWx5IHN0b3JlIGRlbGF5ZWQgZWxlbWVudHMgdG8gZmFjaWxpdGF0ZSBhY2Nlc3MgZm9yIGdsb2JhbCBwYXVzZS9yZXN1bWUgKi9cclxuXHRcdFx0XHRcdFx0dmFyIGNhbGxJbmRleCA9IFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cy5jb3VudCsrO1xyXG5cdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHNbY2FsbEluZGV4XSA9IGVsZW1lbnQ7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZGVsYXlDb21wbGV0ZSA9IChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIENsZWFyIHRoZSB0ZW1wb3JhcnkgZWxlbWVudCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2luZGV4XSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEZpbmFsbHksIGlzc3VlIHRoZSBjYWxsICovXHJcblx0XHRcdFx0XHRcdFx0XHRidWlsZFF1ZXVlKCk7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSkoY2FsbEluZGV4KTtcclxuXHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlCZWdpbiA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXkgPSBwYXJzZUZsb2F0KG9wdHMuZGVsYXkpO1xyXG5cdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dDogc2V0VGltZW91dChidWlsZFF1ZXVlLCBwYXJzZUZsb2F0KG9wdHMuZGVsYXkpKSxcclxuXHRcdFx0XHRcdFx0XHRuZXh0OiBkZWxheUNvbXBsZXRlXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRidWlsZFF1ZXVlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIHRoZSBjYWxsIHVuZGVyZ29lcyBlbGVtZW50IHF1ZXVlaW5nIGFzIG5vcm1hbC4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IFRvIGludGVyb3BlcmF0ZSB3aXRoIGpRdWVyeSwgVmVsb2NpdHkgdXNlcyBqUXVlcnkncyBvd24gJC5xdWV1ZSgpIHN0YWNrIGZvciBxdWV1aW5nIGxvZ2ljLiAqL1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkLnF1ZXVlKGVsZW1lbnQsIG9wdHMucXVldWUsIGZ1bmN0aW9uKG5leHQsIGNsZWFyUXVldWUpIHtcclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIGNsZWFyUXVldWUgZmxhZyB3YXMgcGFzc2VkIGluIGJ5IHRoZSBzdG9wIGNvbW1hbmQsIHJlc29sdmUgdGhpcyBjYWxsJ3MgcHJvbWlzZS4gKFByb21pc2VzIGNhbiBvbmx5IGJlIHJlc29sdmVkIG9uY2UsXHJcblx0XHRcdFx0XHRcdCBzbyBpdCdzIGZpbmUgaWYgdGhpcyBpcyByZXBlYXRlZGx5IHRyaWdnZXJlZCBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhc3NvY2lhdGVkIGNhbGwuKSAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoY2xlYXJRdWV1ZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwcm9taXNlRGF0YS5wcm9taXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBEbyBub3QgY29udGludWUgd2l0aCBhbmltYXRpb24gcXVldWVpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIFRoaXMgZmxhZyBpbmRpY2F0ZXMgdG8gdGhlIHVwY29taW5nIGNvbXBsZXRlQ2FsbCgpIGZ1bmN0aW9uIHRoYXQgdGhpcyBxdWV1ZSBlbnRyeSB3YXMgaW5pdGlhdGVkIGJ5IFZlbG9jaXR5LlxyXG5cdFx0XHRcdFx0XHQgU2VlIGNvbXBsZXRlQ2FsbCgpIGZvciBmdXJ0aGVyIGRldGFpbHMuICovXHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0YnVpbGRRdWV1ZShuZXh0KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBBdXRvLURlcXVldWluZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIEFzIHBlciBqUXVlcnkncyAkLnF1ZXVlKCkgYmVoYXZpb3IsIHRvIGZpcmUgdGhlIGZpcnN0IG5vbi1jdXN0b20tcXVldWUgZW50cnkgb24gYW4gZWxlbWVudCwgdGhlIGVsZW1lbnRcclxuXHRcdFx0XHQgbXVzdCBiZSBkZXF1ZXVlZCBpZiBpdHMgcXVldWUgc3RhY2sgY29uc2lzdHMgKnNvbGVseSogb2YgdGhlIGN1cnJlbnQgY2FsbC4gKFRoaXMgY2FuIGJlIGRldGVybWluZWQgYnkgY2hlY2tpbmdcclxuXHRcdFx0XHQgZm9yIHRoZSBcImlucHJvZ3Jlc3NcIiBpdGVtIHRoYXQgalF1ZXJ5IHByZXBlbmRzIHRvIGFjdGl2ZSBxdWV1ZSBzdGFjayBhcnJheXMuKSBSZWdhcmRsZXNzLCB3aGVuZXZlciB0aGUgZWxlbWVudCdzXHJcblx0XHRcdFx0IHF1ZXVlIGlzIGZ1cnRoZXIgYXBwZW5kZWQgd2l0aCBhZGRpdGlvbmFsIGl0ZW1zIC0tIGluY2x1ZGluZyAkLmRlbGF5KCkncyBvciBldmVuICQuYW5pbWF0ZSgpIGNhbGxzLCB0aGUgcXVldWUnc1xyXG5cdFx0XHRcdCBmaXJzdCBlbnRyeSBpcyBhdXRvbWF0aWNhbGx5IGZpcmVkLiBUaGlzIGJlaGF2aW9yIGNvbnRyYXN0cyB0aGF0IG9mIGN1c3RvbSBxdWV1ZXMsIHdoaWNoIG5ldmVyIGF1dG8tZmlyZS4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBXaGVuIGFuIGVsZW1lbnQgc2V0IGlzIGJlaW5nIHN1YmplY3RlZCB0byBhIG5vbi1wYXJhbGxlbCBWZWxvY2l0eSBjYWxsLCB0aGUgYW5pbWF0aW9uIHdpbGwgbm90IGJlZ2luIHVudGlsXHJcblx0XHRcdFx0IGVhY2ggb25lIG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgc2V0IGhhcyByZWFjaGVkIHRoZSBlbmQgb2YgaXRzIGluZGl2aWR1YWxseSBwcmUtZXhpc3RpbmcgcXVldWUgY2hhaW4uICovXHJcblx0XHRcdFx0LyogTm90ZTogVW5mb3J0dW5hdGVseSwgbW9zdCBwZW9wbGUgZG9uJ3QgZnVsbHkgZ3Jhc3AgalF1ZXJ5J3MgcG93ZXJmdWwsIHlldCBxdWlya3ksICQucXVldWUoKSBmdW5jdGlvbi5cclxuXHRcdFx0XHQgTGVhbiBtb3JlIGhlcmU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1ODE1OC9jYW4tc29tZWJvZHktZXhwbGFpbi1qcXVlcnktcXVldWUtdG8tbWUgKi9cclxuXHRcdFx0XHRpZiAoKG9wdHMucXVldWUgPT09IFwiXCIgfHwgb3B0cy5xdWV1ZSA9PT0gXCJmeFwiKSAmJiAkLnF1ZXVlKGVsZW1lbnQpWzBdICE9PSBcImlucHJvZ3Jlc3NcIikge1xyXG5cdFx0XHRcdFx0JC5kZXF1ZXVlKGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBFbGVtZW50IFNldCBJdGVyYXRpb25cclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogSWYgdGhlIFwibm9kZVR5cGVcIiBwcm9wZXJ0eSBleGlzdHMgb24gdGhlIGVsZW1lbnRzIHZhcmlhYmxlLCB3ZSdyZSBhbmltYXRpbmcgYSBzaW5nbGUgZWxlbWVudC5cclxuXHRcdFx0IFBsYWNlIGl0IGluIGFuIGFycmF5IHNvIHRoYXQgJC5lYWNoKCkgY2FuIGl0ZXJhdGUgb3ZlciBpdC4gKi9cclxuXHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0LyogRW5zdXJlIGVhY2ggZWxlbWVudCBpbiBhIHNldCBoYXMgYSBub2RlVHlwZSAoaXMgYSByZWFsIGVsZW1lbnQpIHRvIGF2b2lkIHRocm93aW5nIGVycm9ycy4gKi9cclxuXHRcdFx0XHRpZiAoVHlwZS5pc05vZGUoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRcdHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBPcHRpb246IExvb3BcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIFRoZSBsb29wIG9wdGlvbiBhY2NlcHRzIGFuIGludGVnZXIgaW5kaWNhdGluZyBob3cgbWFueSB0aW1lcyB0aGUgZWxlbWVudCBzaG91bGQgbG9vcCBiZXR3ZWVuIHRoZSB2YWx1ZXMgaW4gdGhlXHJcblx0XHRcdCBjdXJyZW50IGNhbGwncyBwcm9wZXJ0aWVzIG1hcCBhbmQgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSB2YWx1ZXMgcHJpb3IgdG8gdGhpcyBjYWxsLiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBUaGUgbG9vcCBvcHRpb24ncyBsb2dpYyBpcyBwZXJmb3JtZWQgaGVyZSAtLSBhZnRlciBlbGVtZW50IHByb2Nlc3NpbmcgLS0gYmVjYXVzZSB0aGUgY3VycmVudCBjYWxsIG5lZWRzXHJcblx0XHRcdCB0byB1bmRlcmdvIGl0cyBxdWV1ZSBpbnNlcnRpb24gcHJpb3IgdG8gdGhlIGxvb3Agb3B0aW9uIGdlbmVyYXRpbmcgaXRzIHNlcmllcyBvZiBjb25zdGl0dWVudCBcInJldmVyc2VcIiBjYWxscyxcclxuXHRcdFx0IHdoaWNoIGNoYWluIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwuIFR3byByZXZlcnNlIGNhbGxzICh0d28gXCJhbHRlcm5hdGlvbnNcIikgY29uc3RpdHV0ZSBvbmUgbG9vcC4gKi9cclxuXHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBWZWxvY2l0eS5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblx0XHRcdG9wdHMubG9vcCA9IHBhcnNlSW50KG9wdHMubG9vcCwgMTApO1xyXG5cdFx0XHR2YXIgcmV2ZXJzZUNhbGxzQ291bnQgPSAob3B0cy5sb29wICogMikgLSAxO1xyXG5cclxuXHRcdFx0aWYgKG9wdHMubG9vcCkge1xyXG5cdFx0XHRcdC8qIERvdWJsZSB0aGUgbG9vcCBjb3VudCB0byBjb252ZXJ0IGl0IGludG8gaXRzIGFwcHJvcHJpYXRlIG51bWJlciBvZiBcInJldmVyc2VcIiBjYWxscy5cclxuXHRcdFx0XHQgU3VidHJhY3QgMSBmcm9tIHRoZSByZXN1bHRpbmcgdmFsdWUgc2luY2UgdGhlIGN1cnJlbnQgY2FsbCBpcyBpbmNsdWRlZCBpbiB0aGUgdG90YWwgYWx0ZXJuYXRpb24gY291bnQuICovXHJcblx0XHRcdFx0Zm9yICh2YXIgeCA9IDA7IHggPCByZXZlcnNlQ2FsbHNDb3VudDsgeCsrKSB7XHJcblx0XHRcdFx0XHQvKiBTaW5jZSB0aGUgbG9naWMgZm9yIHRoZSByZXZlcnNlIGFjdGlvbiBvY2N1cnMgaW5zaWRlIFF1ZXVlaW5nIGFuZCB0aGVyZWZvcmUgdGhpcyBjYWxsJ3Mgb3B0aW9ucyBvYmplY3RcclxuXHRcdFx0XHRcdCBpc24ndCBwYXJzZWQgdW50aWwgdGhlbiBhcyB3ZWxsLCB0aGUgY3VycmVudCBjYWxsJ3MgZGVsYXkgb3B0aW9uIG11c3QgYmUgZXhwbGljaXRseSBwYXNzZWQgaW50byB0aGUgcmV2ZXJzZVxyXG5cdFx0XHRcdFx0IGNhbGwgc28gdGhhdCB0aGUgZGVsYXkgbG9naWMgdGhhdCBvY2N1cnMgaW5zaWRlICpQcmUtUXVldWVpbmcqIGNhbiBwcm9jZXNzIGl0LiAqL1xyXG5cdFx0XHRcdFx0dmFyIHJldmVyc2VPcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogb3B0cy5kZWxheSxcclxuXHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IG9wdHMucHJvZ3Jlc3NcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgYSBjb21wbGV0ZSBjYWxsYmFjayB3YXMgcGFzc2VkIGludG8gdGhpcyBjYWxsLCB0cmFuc2ZlciBpdCB0byB0aGUgbG9vcCByZWRpcmVjdCdzIGZpbmFsIFwicmV2ZXJzZVwiIGNhbGxcclxuXHRcdFx0XHRcdCBzbyB0aGF0IGl0J3MgdHJpZ2dlcmVkIHdoZW4gdGhlIGVudGlyZSByZWRpcmVjdCBpcyBjb21wbGV0ZSAoYW5kIG5vdCB3aGVuIHRoZSB2ZXJ5IGZpcnN0IGFuaW1hdGlvbiBpcyBjb21wbGV0ZSkuICovXHJcblx0XHRcdFx0XHRpZiAoeCA9PT0gcmV2ZXJzZUNhbGxzQ291bnQgLSAxKSB7XHJcblx0XHRcdFx0XHRcdHJldmVyc2VPcHRpb25zLmRpc3BsYXkgPSBvcHRzLmRpc3BsYXk7XHJcblx0XHRcdFx0XHRcdHJldmVyc2VPcHRpb25zLnZpc2liaWxpdHkgPSBvcHRzLnZpc2liaWxpdHk7XHJcblx0XHRcdFx0XHRcdHJldmVyc2VPcHRpb25zLmNvbXBsZXRlID0gb3B0cy5jb21wbGV0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRhbmltYXRlKGVsZW1lbnRzLCBcInJldmVyc2VcIiwgcmV2ZXJzZU9wdGlvbnMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQ2hhaW5pbmdcclxuXHRcdFx0ICoqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIFJldHVybiB0aGUgZWxlbWVudHMgYmFjayB0byB0aGUgY2FsbCBjaGFpbiwgd2l0aCB3cmFwcGVkIGVsZW1lbnRzIHRha2luZyBwcmVjZWRlbmNlIGluIGNhc2UgVmVsb2NpdHkgd2FzIGNhbGxlZCB2aWEgdGhlICQuZm4uIGV4dGVuc2lvbi4gKi9cclxuXHRcdFx0cmV0dXJuIGdldENoYWluKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIFR1cm4gVmVsb2NpdHkgaW50byB0aGUgYW5pbWF0aW9uIGZ1bmN0aW9uLCBleHRlbmRlZCB3aXRoIHRoZSBwcmUtZXhpc3RpbmcgVmVsb2NpdHkgb2JqZWN0LiAqL1xyXG5cdFx0VmVsb2NpdHkgPSAkLmV4dGVuZChhbmltYXRlLCBWZWxvY2l0eSk7XHJcblx0XHQvKiBGb3IgbGVnYWN5IHN1cHBvcnQsIGFsc28gZXhwb3NlIHRoZSBsaXRlcmFsIGFuaW1hdGUgbWV0aG9kLiAqL1xyXG5cdFx0VmVsb2NpdHkuYW5pbWF0ZSA9IGFuaW1hdGU7XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqXHJcblx0XHQgVGltaW5nXHJcblx0XHQgKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0LyogVGlja2VyIGZ1bmN0aW9uLiAqL1xyXG5cdFx0dmFyIHRpY2tlciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgckFGU2hpbTtcclxuXHJcblx0XHQvKiBJbmFjdGl2ZSBicm93c2VyIHRhYnMgcGF1c2UgckFGLCB3aGljaCByZXN1bHRzIGluIGFsbCBhY3RpdmUgYW5pbWF0aW9ucyBpbW1lZGlhdGVseSBzcHJpbnRpbmcgdG8gdGhlaXIgY29tcGxldGlvbiBzdGF0ZXMgd2hlbiB0aGUgdGFiIHJlZm9jdXNlcy5cclxuXHRcdCBUbyBnZXQgYXJvdW5kIHRoaXMsIHdlIGR5bmFtaWNhbGx5IHN3aXRjaCByQUYgdG8gc2V0VGltZW91dCAod2hpY2ggdGhlIGJyb3dzZXIgKmRvZXNuJ3QqIHBhdXNlKSB3aGVuIHRoZSB0YWIgbG9zZXMgZm9jdXMuIFdlIHNraXAgdGhpcyBmb3IgbW9iaWxlXHJcblx0XHQgZGV2aWNlcyB0byBhdm9pZCB3YXN0aW5nIGJhdHRlcnkgcG93ZXIgb24gaW5hY3RpdmUgdGFicy4gKi9cclxuXHRcdC8qIE5vdGU6IFRhYiBmb2N1cyBkZXRlY3Rpb24gZG9lc24ndCB3b3JrIG9uIG9sZGVyIHZlcnNpb25zIG9mIElFLCBidXQgdGhhdCdzIG9rYXkgc2luY2UgdGhleSBkb24ndCBzdXBwb3J0IHJBRiB0byBiZWdpbiB3aXRoLiAqL1xyXG5cdFx0aWYgKCFWZWxvY2l0eS5TdGF0ZS5pc01vYmlsZSAmJiBkb2N1bWVudC5oaWRkZW4gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR2YXIgdXBkYXRlVGlja2VyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0LyogUmVhc3NpZ24gdGhlIHJBRiBmdW5jdGlvbiAod2hpY2ggdGhlIGdsb2JhbCB0aWNrKCkgZnVuY3Rpb24gdXNlcykgYmFzZWQgb24gdGhlIHRhYidzIGZvY3VzIHN0YXRlLiAqL1xyXG5cdFx0XHRcdGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuXHRcdFx0XHRcdHRpY2tlciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0XHRcdC8qIFRoZSB0aWNrIGZ1bmN0aW9uIG5lZWRzIGEgdHJ1dGh5IGZpcnN0IGFyZ3VtZW50IGluIG9yZGVyIHRvIHBhc3MgaXRzIGludGVybmFsIHRpbWVzdGFtcCBjaGVjay4gKi9cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH0sIDE2KTtcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0LyogVGhlIHJBRiBsb29wIGhhcyBiZWVuIHBhdXNlZCBieSB0aGUgYnJvd3Nlciwgc28gd2UgbWFudWFsbHkgcmVzdGFydCB0aGUgdGljay4gKi9cclxuXHRcdFx0XHRcdHRpY2soKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGlja2VyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTaGltO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8qIFBhZ2UgY291bGQgYmUgc2l0dGluZyBpbiB0aGUgYmFja2dyb3VuZCBhdCB0aGlzIHRpbWUgKGkuZS4gb3BlbmVkIGFzIG5ldyB0YWIpIHNvIG1ha2luZyBzdXJlIHdlIHVzZSBjb3JyZWN0IHRpY2tlciBmcm9tIHRoZSBzdGFydCAqL1xyXG5cdFx0XHR1cGRhdGVUaWNrZXIoKTtcclxuXHJcblx0XHRcdC8qIEFuZCB0aGVuIHJ1biBjaGVjayBhZ2FpbiBldmVyeSB0aW1lIHZpc2liaWxpdHkgY2hhbmdlcyAqL1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB1cGRhdGVUaWNrZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKioqKioqKioqKipcclxuXHRcdCBUaWNrXHJcblx0XHQgKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIE5vdGU6IEFsbCBjYWxscyB0byBWZWxvY2l0eSBhcmUgcHVzaGVkIHRvIHRoZSBWZWxvY2l0eS5TdGF0ZS5jYWxscyBhcnJheSwgd2hpY2ggaXMgZnVsbHkgaXRlcmF0ZWQgdGhyb3VnaCB1cG9uIGVhY2ggdGljay4gKi9cclxuXHRcdGZ1bmN0aW9uIHRpY2sodGltZXN0YW1wKSB7XHJcblx0XHRcdC8qIEFuIGVtcHR5IHRpbWVzdGFtcCBhcmd1bWVudCBpbmRpY2F0ZXMgdGhhdCB0aGlzIGlzIHRoZSBmaXJzdCB0aWNrIG9jY3VyZW5jZSBzaW5jZSB0aWNraW5nIHdhcyB0dXJuZWQgb24uXHJcblx0XHRcdCBXZSBsZXZlcmFnZSB0aGlzIG1ldGFkYXRhIHRvIGZ1bGx5IGlnbm9yZSB0aGUgZmlyc3QgdGljayBwYXNzIHNpbmNlIFJBRidzIGluaXRpYWwgcGFzcyBpcyBmaXJlZCB3aGVuZXZlclxyXG5cdFx0XHQgdGhlIGJyb3dzZXIncyBuZXh0IHRpY2sgc3luYyB0aW1lIG9jY3Vycywgd2hpY2ggcmVzdWx0cyBpbiB0aGUgZmlyc3QgZWxlbWVudHMgc3ViamVjdGVkIHRvIFZlbG9jaXR5XHJcblx0XHRcdCBjYWxscyBiZWluZyBhbmltYXRlZCBvdXQgb2Ygc3luYyB3aXRoIGFueSBlbGVtZW50cyBhbmltYXRlZCBpbW1lZGlhdGVseSB0aGVyZWFmdGVyLiBJbiBzaG9ydCwgd2UgaWdub3JlXHJcblx0XHRcdCB0aGUgZmlyc3QgUkFGIHRpY2sgcGFzcyBzbyB0aGF0IGVsZW1lbnRzIGJlaW5nIGltbWVkaWF0ZWx5IGNvbnNlY3V0aXZlbHkgYW5pbWF0ZWQgLS0gaW5zdGVhZCBvZiBzaW11bHRhbmVvdXNseSBhbmltYXRlZFxyXG5cdFx0XHQgYnkgdGhlIHNhbWUgVmVsb2NpdHkgY2FsbCAtLSBhcmUgcHJvcGVybHkgYmF0Y2hlZCBpbnRvIHRoZSBzYW1lIGluaXRpYWwgUkFGIHRpY2sgYW5kIGNvbnNlcXVlbnRseSByZW1haW4gaW4gc3luYyB0aGVyZWFmdGVyLiAqL1xyXG5cdFx0XHRpZiAodGltZXN0YW1wKSB7XHJcblx0XHRcdFx0LyogV2Ugbm9ybWFsbHkgdXNlIFJBRidzIGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAgYnV0IGFzIGl0IGNhbiBiZSBzaWduaWZpY2FudGx5IG9mZnNldCB3aGVuIHRoZSBicm93c2VyIGlzXHJcblx0XHRcdFx0IHVuZGVyIGhpZ2ggc3RyZXNzIHdlIGdpdmUgdGhlIG9wdGlvbiBmb3IgY2hvcHBpbmVzcyBvdmVyIGFsbG93aW5nIHRoZSBicm93c2VyIHRvIGRyb3AgaHVnZSBjaHVua3Mgb2YgZnJhbWVzLlxyXG5cdFx0XHRcdCBXZSB1c2UgcGVyZm9ybWFuY2Uubm93KCkgYW5kIHNoaW0gaXQgaWYgaXQgZG9lc24ndCBleGlzdCBmb3Igd2hlbiB0aGUgdGFiIGlzIGhpZGRlbi4gKi9cclxuXHRcdFx0XHR2YXIgdGltZUN1cnJlbnQgPSBWZWxvY2l0eS50aW1lc3RhbXAgJiYgdGltZXN0YW1wICE9PSB0cnVlID8gdGltZXN0YW1wIDogcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBDYWxsIEl0ZXJhdGlvblxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0dmFyIGNhbGxzTGVuZ3RoID0gVmVsb2NpdHkuU3RhdGUuY2FsbHMubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHQvKiBUbyBzcGVlZCB1cCBpdGVyYXRpbmcgb3ZlciB0aGlzIGFycmF5LCBpdCBpcyBjb21wYWN0ZWQgKGZhbHNleSBpdGVtcyAtLSBjYWxscyB0aGF0IGhhdmUgY29tcGxldGVkIC0tIGFyZSByZW1vdmVkKVxyXG5cdFx0XHRcdCB3aGVuIGl0cyBsZW5ndGggaGFzIGJhbGxvb25lZCB0byBhIHBvaW50IHRoYXQgY2FuIGltcGFjdCB0aWNrIHBlcmZvcm1hbmNlLiBUaGlzIG9ubHkgYmVjb21lcyBuZWNlc3Nhcnkgd2hlbiBhbmltYXRpb25cclxuXHRcdFx0XHQgaGFzIGJlZW4gY29udGludW91cyB3aXRoIG1hbnkgZWxlbWVudHMgb3ZlciBhIGxvbmcgcGVyaW9kIG9mIHRpbWU7IHdoZW5ldmVyIGFsbCBhY3RpdmUgY2FsbHMgYXJlIGNvbXBsZXRlZCwgY29tcGxldGVDYWxsKCkgY2xlYXJzIFZlbG9jaXR5LlN0YXRlLmNhbGxzLiAqL1xyXG5cdFx0XHRcdGlmIChjYWxsc0xlbmd0aCA+IDEwMDAwKSB7XHJcblx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5jYWxscyA9IGNvbXBhY3RTcGFyc2VBcnJheShWZWxvY2l0eS5TdGF0ZS5jYWxscyk7XHJcblx0XHRcdFx0XHRjYWxsc0xlbmd0aCA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzLmxlbmd0aDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGFjdGl2ZSBjYWxsLiAqL1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbHNMZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0LyogV2hlbiBhIFZlbG9jaXR5IGNhbGwgaXMgY29tcGxldGVkLCBpdHMgVmVsb2NpdHkuU3RhdGUuY2FsbHMgZW50cnkgaXMgc2V0IHRvIGZhbHNlLiBDb250aW51ZSBvbiB0byB0aGUgbmV4dCBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0aWYgKCFWZWxvY2l0eS5TdGF0ZS5jYWxsc1tpXSkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgQ2FsbC1XaWRlIFZhcmlhYmxlc1xyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHR2YXIgY2FsbENvbnRhaW5lciA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldLFxyXG5cdFx0XHRcdFx0XHRcdGNhbGwgPSBjYWxsQ29udGFpbmVyWzBdLFxyXG5cdFx0XHRcdFx0XHRcdG9wdHMgPSBjYWxsQ29udGFpbmVyWzJdLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWVTdGFydCA9IGNhbGxDb250YWluZXJbM10sXHJcblx0XHRcdFx0XHRcdFx0Zmlyc3RUaWNrID0gIXRpbWVTdGFydCxcclxuXHRcdFx0XHRcdFx0XHR0d2VlbkR1bW15VmFsdWUgPSBudWxsLFxyXG5cdFx0XHRcdFx0XHRcdHBhdXNlT2JqZWN0ID0gY2FsbENvbnRhaW5lcls1XSxcclxuXHRcdFx0XHRcdFx0XHRtaWxsaXNlY29uZHNFbGxhcHNlZCA9IGNhbGxDb250YWluZXJbNl07XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHQvKiBJZiB0aW1lU3RhcnQgaXMgdW5kZWZpbmVkLCB0aGVuIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhhdCB0aGlzIGNhbGwgaGFzIGJlZW4gcHJvY2Vzc2VkIGJ5IHRpY2soKS5cclxuXHRcdFx0XHRcdCBXZSBhc3NpZ24gdGltZVN0YXJ0IG5vdyBzbyB0aGF0IGl0cyB2YWx1ZSBpcyBhcyBjbG9zZSB0byB0aGUgcmVhbCBhbmltYXRpb24gc3RhcnQgdGltZSBhcyBwb3NzaWJsZS5cclxuXHRcdFx0XHRcdCAoQ29udmVyc2VseSwgaGFkIHRpbWVTdGFydCBiZWVuIGRlZmluZWQgd2hlbiB0aGlzIGNhbGwgd2FzIGFkZGVkIHRvIFZlbG9jaXR5LlN0YXRlLmNhbGxzLCB0aGUgZGVsYXlcclxuXHRcdFx0XHRcdCBiZXR3ZWVuIHRoYXQgdGltZSBhbmQgbm93IHdvdWxkIGNhdXNlIHRoZSBmaXJzdCBmZXcgZnJhbWVzIG9mIHRoZSB0d2VlbiB0byBiZSBza2lwcGVkIHNpbmNlXHJcblx0XHRcdFx0XHQgcGVyY2VudENvbXBsZXRlIGlzIGNhbGN1bGF0ZWQgcmVsYXRpdmUgdG8gdGltZVN0YXJ0LikgKi9cclxuXHRcdFx0XHRcdC8qIEZ1cnRoZXIsIHN1YnRyYWN0IDE2bXMgKHRoZSBhcHByb3hpbWF0ZSByZXNvbHV0aW9uIG9mIFJBRikgZnJvbSB0aGUgY3VycmVudCB0aW1lIHZhbHVlIHNvIHRoYXQgdGhlXHJcblx0XHRcdFx0XHQgZmlyc3QgdGljayBpdGVyYXRpb24gaXNuJ3Qgd2FzdGVkIGJ5IGFuaW1hdGluZyBhdCAwJSB0d2VlbiBjb21wbGV0aW9uLCB3aGljaCB3b3VsZCBwcm9kdWNlIHRoZVxyXG5cdFx0XHRcdFx0IHNhbWUgc3R5bGUgdmFsdWUgYXMgdGhlIGVsZW1lbnQncyBjdXJyZW50IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0aWYgKCF0aW1lU3RhcnQpIHtcclxuXHRcdFx0XHRcdFx0dGltZVN0YXJ0ID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbaV1bM10gPSB0aW1lQ3VycmVudCAtIDE2O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIElmIGEgcGF1c2Ugb2JqZWN0IGlzIHByZXNlbnQsIHNraXAgcHJvY2Vzc2luZyB1bmxlc3MgaXQgaGFzIGJlZW4gc2V0IHRvIHJlc3VtZSAqL1xyXG5cdFx0XHRcdFx0aWYgKHBhdXNlT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXVzZU9iamVjdC5yZXN1bWUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBVcGRhdGUgdGhlIHRpbWUgc3RhcnQgdG8gYWNjb21vZGF0ZSB0aGUgcGF1c2VkIGNvbXBsZXRpb24gYW1vdW50ICovXHJcblx0XHRcdFx0XHRcdFx0dGltZVN0YXJ0ID0gY2FsbENvbnRhaW5lclszXSA9IE1hdGgucm91bmQodGltZUN1cnJlbnQgLSBtaWxsaXNlY29uZHNFbGxhcHNlZCAtIDE2KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogUmVtb3ZlIHBhdXNlIG9iamVjdCBhZnRlciBwcm9jZXNzaW5nICovXHJcblx0XHRcdFx0XHRcdFx0Y2FsbENvbnRhaW5lcls1XSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRtaWxsaXNlY29uZHNFbGxhcHNlZCA9IGNhbGxDb250YWluZXJbNl0gPSB0aW1lQ3VycmVudCAtIHRpbWVTdGFydDtcclxuXHJcblx0XHRcdFx0XHQvKiBUaGUgdHdlZW4ncyBjb21wbGV0aW9uIHBlcmNlbnRhZ2UgaXMgcmVsYXRpdmUgdG8gdGhlIHR3ZWVuJ3Mgc3RhcnQgdGltZSwgbm90IHRoZSB0d2VlbidzIHN0YXJ0IHZhbHVlXHJcblx0XHRcdFx0XHQgKHdoaWNoIHdvdWxkIHJlc3VsdCBpbiB1bnByZWRpY3RhYmxlIHR3ZWVuIGR1cmF0aW9ucyBzaW5jZSBKYXZhU2NyaXB0J3MgdGltZXJzIGFyZSBub3QgcGFydGljdWxhcmx5IGFjY3VyYXRlKS5cclxuXHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgd2UgZW5zdXJlIHRoYXQgcGVyY2VudENvbXBsZXRlIGRvZXMgbm90IGV4Y2VlZCAxLiAqL1xyXG5cdFx0XHRcdFx0dmFyIHBlcmNlbnRDb21wbGV0ZSA9IE1hdGgubWluKChtaWxsaXNlY29uZHNFbGxhcHNlZCkgLyBvcHRzLmR1cmF0aW9uLCAxKTtcclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IEVsZW1lbnQgSXRlcmF0aW9uXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBGb3IgZXZlcnkgY2FsbCwgaXRlcmF0ZSB0aHJvdWdoIGVhY2ggb2YgdGhlIGVsZW1lbnRzIGluIGl0cyBzZXQuICovXHJcblx0XHRcdFx0XHRmb3IgKHZhciBqID0gMCwgY2FsbExlbmd0aCA9IGNhbGwubGVuZ3RoOyBqIDwgY2FsbExlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdHZhciB0d2VlbnNDb250YWluZXIgPSBjYWxsW2pdLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudCA9IHR3ZWVuc0NvbnRhaW5lci5lbGVtZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0LyogQ2hlY2sgdG8gc2VlIGlmIHRoaXMgZWxlbWVudCBoYXMgYmVlbiBkZWxldGVkIG1pZHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24gYnkgY2hlY2tpbmcgZm9yIHRoZVxyXG5cdFx0XHRcdFx0XHQgY29udGludWVkIGV4aXN0ZW5jZSBvZiBpdHMgZGF0YSBjYWNoZS4gSWYgaXQncyBnb25lLCBvciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgcGF1c2VkLCBza2lwIGFuaW1hdGluZyB0aGlzIGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdGlmICghRGF0YShlbGVtZW50KSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtUHJvcGVydHlFeGlzdHMgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBEaXNwbGF5ICYgVmlzaWJpbGl0eSBUb2dnbGluZ1xyXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIElmIHRoZSBkaXNwbGF5IG9wdGlvbiBpcyBzZXQgdG8gbm9uLVwibm9uZVwiLCBzZXQgaXQgdXBmcm9udCBzbyB0aGF0IHRoZSBlbGVtZW50IGNhbiBiZWNvbWUgdmlzaWJsZSBiZWZvcmUgdHdlZW5pbmcgYmVnaW5zLlxyXG5cdFx0XHRcdFx0XHQgKE90aGVyd2lzZSwgZGlzcGxheSdzIFwibm9uZVwiIHZhbHVlIGlzIHNldCBpbiBjb21wbGV0ZUNhbGwoKSBvbmNlIHRoZSBhbmltYXRpb24gaGFzIGNvbXBsZXRlZC4pICovXHJcblx0XHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLmRpc3BsYXkgIT09IG51bGwgJiYgb3B0cy5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZmxleFZhbHVlcyA9IFtcIi13ZWJraXQtYm94XCIsIFwiLW1vei1ib3hcIiwgXCItbXMtZmxleGJveFwiLCBcIi13ZWJraXQtZmxleFwiXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQkLmVhY2goZmxleFZhbHVlcywgZnVuY3Rpb24oaSwgZmxleFZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiLCBmbGV4VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImRpc3BsYXlcIiwgb3B0cy5kaXNwbGF5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogU2FtZSBnb2VzIHdpdGggdGhlIHZpc2liaWxpdHkgb3B0aW9uLCBidXQgaXRzIFwibm9uZVwiIGVxdWl2YWxlbnQgaXMgXCJoaWRkZW5cIi4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIG9wdHMudmlzaWJpbGl0eSAhPT0gXCJoaWRkZW5cIikge1xyXG5cdFx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwidmlzaWJpbGl0eVwiLCBvcHRzLnZpc2liaWxpdHkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBQcm9wZXJ0eSBJdGVyYXRpb25cclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIEZvciBldmVyeSBlbGVtZW50LCBpdGVyYXRlIHRocm91Z2ggZWFjaCBwcm9wZXJ0eS4gKi9cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gdHdlZW5zQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogSW4gYWRkaXRpb24gdG8gcHJvcGVydHkgdHdlZW4gZGF0YSwgdHdlZW5zQ29udGFpbmVyIGNvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIGl0cyBhc3NvY2lhdGVkIGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKHR3ZWVuc0NvbnRhaW5lci5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgcHJvcGVydHkgIT09IFwiZWxlbWVudFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdHdlZW4gPSB0d2VlbnNDb250YWluZXJbcHJvcGVydHldLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBFYXNpbmcgY2FuIGVpdGhlciBiZSBhIHByZS1nZW5lcmVhdGVkIGZ1bmN0aW9uIG9yIGEgc3RyaW5nIHRoYXQgcmVmZXJlbmNlcyBhIHByZS1yZWdpc3RlcmVkIGVhc2luZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbiB0aGUgVmVsb2NpdHkuRWFzaW5ncyBvYmplY3QuIEluIGVpdGhlciBjYXNlLCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGVhc2luZyAqZnVuY3Rpb24qLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IFR5cGUuaXNTdHJpbmcodHdlZW4uZWFzaW5nKSA/IFZlbG9jaXR5LkVhc2luZ3NbdHdlZW4uZWFzaW5nXSA6IHR3ZWVuLmVhc2luZztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0XHQgQ3VycmVudCBWYWx1ZSBDYWxjdWxhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc1N0cmluZyh0d2Vlbi5wYXR0ZXJuKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcGF0dGVyblJlcGxhY2UgPSBwZXJjZW50Q29tcGxldGUgPT09IDEgP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oJDAsIGluZGV4LCByb3VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gdHdlZW4uZW5kVmFsdWVbaW5kZXhdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJvdW5kID8gTWF0aC5yb3VuZChyZXN1bHQpIDogcmVzdWx0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigkMCwgaW5kZXgsIHJvdW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBzdGFydFZhbHVlID0gdHdlZW4uc3RhcnRWYWx1ZVtpbmRleF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0d2VlbkRlbHRhID0gdHdlZW4uZW5kVmFsdWVbaW5kZXhdIC0gc3RhcnRWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHN0YXJ0VmFsdWUgKyAodHdlZW5EZWx0YSAqIGVhc2luZyhwZXJjZW50Q29tcGxldGUsIG9wdHMsIHR3ZWVuRGVsdGEpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByb3VuZCA/IE1hdGgucm91bmQocmVzdWx0KSA6IHJlc3VsdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWUgPSB0d2Vlbi5wYXR0ZXJuLnJlcGxhY2UoL3soXFxkKykoISk/fS9nLCBwYXR0ZXJuUmVwbGFjZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHBlcmNlbnRDb21wbGV0ZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGlzIGlzIHRoZSBsYXN0IHRpY2sgcGFzcyAoaWYgd2UndmUgcmVhY2hlZCAxMDAlIGNvbXBsZXRpb24gZm9yIHRoaXMgdHdlZW4pLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgZW5zdXJlIHRoYXQgY3VycmVudFZhbHVlIGlzIGV4cGxpY2l0bHkgc2V0IHRvIGl0cyB0YXJnZXQgZW5kVmFsdWUgc28gdGhhdCBpdCdzIG5vdCBzdWJqZWN0ZWQgdG8gYW55IHJvdW5kaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWUgPSB0d2Vlbi5lbmRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgY2FsY3VsYXRlIGN1cnJlbnRWYWx1ZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkZWx0YSBmcm9tIHN0YXJ0VmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciB0d2VlbkRlbHRhID0gdHdlZW4uZW5kVmFsdWUgLSB0d2Vlbi5zdGFydFZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlID0gdHdlZW4uc3RhcnRWYWx1ZSArICh0d2VlbkRlbHRhICogZWFzaW5nKHBlcmNlbnRDb21wbGV0ZSwgb3B0cywgdHdlZW5EZWx0YSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiBubyB2YWx1ZSBjaGFuZ2UgaXMgb2NjdXJyaW5nLCBkb24ndCBwcm9jZWVkIHdpdGggRE9NIHVwZGF0aW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFmaXJzdFRpY2sgJiYgKGN1cnJlbnRWYWx1ZSA9PT0gdHdlZW4uY3VycmVudFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0d2Vlbi5jdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgd2UncmUgdHdlZW5pbmcgYSBmYWtlICd0d2VlbicgcHJvcGVydHkgaW4gb3JkZXIgdG8gbG9nIHRyYW5zaXRpb24gdmFsdWVzLCB1cGRhdGUgdGhlIG9uZS1wZXItY2FsbCB2YXJpYWJsZSBzbyB0aGF0XHJcblx0XHRcdFx0XHRcdFx0XHQgaXQgY2FuIGJlIHBhc3NlZCBpbnRvIHRoZSBwcm9ncmVzcyBjYWxsYmFjay4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJ0d2VlblwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuRHVtbXlWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEhvb2tzOiBQYXJ0IElcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGhvb2tSb290O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRm9yIGhvb2tlZCBwcm9wZXJ0aWVzLCB0aGUgbmV3bHktdXBkYXRlZCByb290UHJvcGVydHlWYWx1ZUNhY2hlIGlzIGNhY2hlZCBvbnRvIHRoZSBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGZvciBzdWJzZXF1ZW50IGhvb2tzIGluIHRoaXMgY2FsbCB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNhbWUgcm9vdCBwcm9wZXJ0eS4gSWYgd2UgZGlkbid0IGNhY2hlIHRoZSB1cGRhdGVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCByb290UHJvcGVydHlWYWx1ZSwgZWFjaCBzdWJzZXF1ZW50IHVwZGF0ZSB0byB0aGUgcm9vdCBwcm9wZXJ0eSBpbiB0aGlzIHRpY2sgcGFzcyB3b3VsZCByZXNldCB0aGUgcHJldmlvdXMgaG9vaydzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB1cGRhdGVzIHRvIHJvb3RQcm9wZXJ0eVZhbHVlIHByaW9yIHRvIGluamVjdGlvbi4gQSBuaWNlIHBlcmZvcm1hbmNlIGJ5cHJvZHVjdCBvZiByb290UHJvcGVydHlWYWx1ZSBjYWNoaW5nIGlzIHRoYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHN1YnNlcXVlbnRseSBjaGFpbmVkIGFuaW1hdGlvbnMgdXNpbmcgdGhlIHNhbWUgaG9va1Jvb3QgYnV0IGEgZGlmZmVyZW50IGhvb2sgY2FuIHVzZSB0aGlzIGNhY2hlZCByb290UHJvcGVydHlWYWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhvb2tSb290ID0gQ1NTLkhvb2tzLmdldFJvb3QocHJvcGVydHkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgcm9vdFByb3BlcnR5VmFsdWVDYWNoZSA9IERhdGEoZWxlbWVudCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtob29rUm9vdF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyb290UHJvcGVydHlWYWx1ZUNhY2hlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0d2Vlbi5yb290UHJvcGVydHlWYWx1ZSA9IHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdFx0IERPTSBVcGRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lyogc2V0UHJvcGVydHlWYWx1ZSgpIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIHBvc3QgYW55IG5vcm1hbGl6YXRpb24gdGhhdCBtYXkgaGF2ZSBiZWVuIHBlcmZvcm1lZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogVG8gc29sdmUgYW4gSUU8PTggcG9zaXRpb25pbmcgYnVnLCB0aGUgdW5pdCB0eXBlIGlzIGRyb3BwZWQgd2hlbiBzZXR0aW5nIGEgcHJvcGVydHkgdmFsdWUgb2YgMC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFkanVzdGVkU2V0RGF0YSA9IENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIC8qIFNFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0d2Vlbi5jdXJyZW50VmFsdWUgKyAoSUUgPCA5ICYmIHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA9PT0gMCA/IFwiXCIgOiB0d2Vlbi51bml0VHlwZSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0d2Vlbi5yb290UHJvcGVydHlWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLnNjcm9sbERhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEhvb2tzOiBQYXJ0IElJXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogTm93IHRoYXQgd2UgaGF2ZSB0aGUgaG9vaydzIHVwZGF0ZWQgcm9vdFByb3BlcnR5VmFsdWUgKHRoZSBwb3N0LXByb2Nlc3NlZCB2YWx1ZSBwcm92aWRlZCBieSBhZGp1c3RlZFNldERhdGEpLCBjYWNoZSBpdCBvbnRvIHRoZSBlbGVtZW50LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoQ1NTLkhvb2tzLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU2luY2UgYWRqdXN0ZWRTZXREYXRhIGNvbnRhaW5zIG5vcm1hbGl6ZWQgZGF0YSByZWFkeSBmb3IgRE9NIHVwZGF0aW5nLCB0aGUgcm9vdFByb3BlcnR5VmFsdWUgbmVlZHMgdG8gYmUgcmUtZXh0cmFjdGVkIGZyb20gaXRzIG5vcm1hbGl6ZWQgZm9ybS4gPz8gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbaG9va1Jvb3RdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbaG9va1Jvb3RdID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbaG9va1Jvb3RdKFwiZXh0cmFjdFwiLCBudWxsLCBhZGp1c3RlZFNldERhdGFbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbaG9va1Jvb3RdID0gYWRqdXN0ZWRTZXREYXRhWzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgVHJhbnNmb3Jtc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRmxhZyB3aGV0aGVyIGEgdHJhbnNmb3JtIHByb3BlcnR5IGlzIGJlaW5nIGFuaW1hdGVkIHNvIHRoYXQgZmx1c2hUcmFuc2Zvcm1DYWNoZSgpIGNhbiBiZSB0cmlnZ2VyZWQgb25jZSB0aGlzIHRpY2sgcGFzcyBpcyBjb21wbGV0ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFkanVzdGVkU2V0RGF0YVswXSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybVByb3BlcnR5RXhpc3RzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBtb2JpbGVIQVxyXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIElmIG1vYmlsZUhBIGlzIGVuYWJsZWQsIHNldCB0aGUgdHJhbnNsYXRlM2QgdHJhbnNmb3JtIHRvIG51bGwgdG8gZm9yY2UgaGFyZHdhcmUgYWNjZWxlcmF0aW9uLlxyXG5cdFx0XHRcdFx0XHQgSXQncyBzYWZlIHRvIG92ZXJyaWRlIHRoaXMgcHJvcGVydHkgc2luY2UgVmVsb2NpdHkgZG9lc24ndCBhY3R1YWxseSBzdXBwb3J0IGl0cyBhbmltYXRpb24gKGhvb2tzIGFyZSB1c2VkIGluIGl0cyBwbGFjZSkuICovXHJcblx0XHRcdFx0XHRcdGlmIChvcHRzLm1vYmlsZUhBKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogRG9uJ3Qgc2V0IHRoZSBudWxsIHRyYW5zZm9ybSBoYWNrIGlmIHdlJ3ZlIGFscmVhZHkgZG9uZSBzby4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBBbGwgZW50cmllcyBvbiB0aGUgdHJhbnNmb3JtQ2FjaGUgb2JqZWN0IGFyZSBsYXRlciBjb25jYXRlbmF0ZWQgaW50byBhIHNpbmdsZSB0cmFuc2Zvcm0gc3RyaW5nIHZpYSBmbHVzaFRyYW5zZm9ybUNhY2hlKCkuICovXHJcblx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID0gXCIoMHB4LCAwcHgsIDBweClcIjtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1Qcm9wZXJ0eUV4aXN0cyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodHJhbnNmb3JtUHJvcGVydHlFeGlzdHMpIHtcclxuXHRcdFx0XHRcdFx0XHRDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIFRoZSBub24tXCJub25lXCIgZGlzcGxheSB2YWx1ZSBpcyBvbmx5IGFwcGxpZWQgdG8gYW4gZWxlbWVudCBvbmNlIC0tIHdoZW4gaXRzIGFzc29jaWF0ZWQgY2FsbCBpcyBmaXJzdCB0aWNrZWQgdGhyb3VnaC5cclxuXHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgaXQncyBzZXQgdG8gZmFsc2Ugc28gdGhhdCBpdCBpc24ndCByZS1wcm9jZXNzZWQgYnkgdGhpcyBjYWxsIGluIHRoZSBuZXh0IHRpY2suICovXHJcblx0XHRcdFx0XHRpZiAob3B0cy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG5cdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5jYWxsc1tpXVsyXS5kaXNwbGF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAob3B0cy52aXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy52aXNpYmlsaXR5ICE9PSBcImhpZGRlblwiKSB7XHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldWzJdLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBQYXNzIHRoZSBlbGVtZW50cyBhbmQgdGhlIHRpbWluZyBkYXRhIChwZXJjZW50Q29tcGxldGUsIG1zUmVtYWluaW5nLCB0aW1lU3RhcnQsIHR3ZWVuRHVtbXlWYWx1ZSkgaW50byB0aGUgcHJvZ3Jlc3MgY2FsbGJhY2suICovXHJcblx0XHRcdFx0XHRpZiAob3B0cy5wcm9ncmVzcykge1xyXG5cdFx0XHRcdFx0XHRvcHRzLnByb2dyZXNzLmNhbGwoY2FsbENvbnRhaW5lclsxXSxcclxuXHRcdFx0XHRcdFx0XHRcdGNhbGxDb250YWluZXJbMV0sXHJcblx0XHRcdFx0XHRcdFx0XHRwZXJjZW50Q29tcGxldGUsXHJcblx0XHRcdFx0XHRcdFx0XHRNYXRoLm1heCgwLCAodGltZVN0YXJ0ICsgb3B0cy5kdXJhdGlvbikgLSB0aW1lQ3VycmVudCksXHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lU3RhcnQsXHJcblx0XHRcdFx0XHRcdFx0XHR0d2VlbkR1bW15VmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIElmIHRoaXMgY2FsbCBoYXMgZmluaXNoZWQgdHdlZW5pbmcsIHBhc3MgaXRzIGluZGV4IHRvIGNvbXBsZXRlQ2FsbCgpIHRvIGhhbmRsZSBjYWxsIGNsZWFudXAuICovXHJcblx0XHRcdFx0XHRpZiAocGVyY2VudENvbXBsZXRlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlQ2FsbChpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qIE5vdGU6IGNvbXBsZXRlQ2FsbCgpIHNldHMgdGhlIGlzVGlja2luZyBmbGFnIHRvIGZhbHNlIHdoZW4gdGhlIGxhc3QgY2FsbCBvbiBWZWxvY2l0eS5TdGF0ZS5jYWxscyBoYXMgY29tcGxldGVkLiAqL1xyXG5cdFx0XHRpZiAoVmVsb2NpdHkuU3RhdGUuaXNUaWNraW5nKSB7XHJcblx0XHRcdFx0dGlja2VyKHRpY2spO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdCBDYWxsIENvbXBsZXRpb25cclxuXHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIE5vdGU6IFVubGlrZSB0aWNrKCksIHdoaWNoIHByb2Nlc3NlcyBhbGwgYWN0aXZlIGNhbGxzIGF0IG9uY2UsIGNhbGwgY29tcGxldGlvbiBpcyBoYW5kbGVkIG9uIGEgcGVyLWNhbGwgYmFzaXMuICovXHJcblx0XHRmdW5jdGlvbiBjb21wbGV0ZUNhbGwoY2FsbEluZGV4LCBpc1N0b3BwZWQpIHtcclxuXHRcdFx0LyogRW5zdXJlIHRoZSBjYWxsIGV4aXN0cy4gKi9cclxuXHRcdFx0aWYgKCFWZWxvY2l0eS5TdGF0ZS5jYWxsc1tjYWxsSW5kZXhdKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBQdWxsIHRoZSBtZXRhZGF0YSBmcm9tIHRoZSBjYWxsLiAqL1xyXG5cdFx0XHR2YXIgY2FsbCA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF1bMF0sXHJcblx0XHRcdFx0XHRlbGVtZW50cyA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF1bMV0sXHJcblx0XHRcdFx0XHRvcHRzID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVsyXSxcclxuXHRcdFx0XHRcdHJlc29sdmVyID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVs0XTtcclxuXHJcblx0XHRcdHZhciByZW1haW5pbmdDYWxsc0V4aXN0ID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgRWxlbWVudCBGaW5hbGl6YXRpb25cclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgY2FsbExlbmd0aCA9IGNhbGwubGVuZ3RoOyBpIDwgY2FsbExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBjYWxsW2ldLmVsZW1lbnQ7XHJcblxyXG5cdFx0XHRcdC8qIElmIHRoZSB1c2VyIHNldCBkaXNwbGF5IHRvIFwibm9uZVwiIChpbnRlbmRpbmcgdG8gaGlkZSB0aGUgZWxlbWVudCksIHNldCBpdCBub3cgdGhhdCB0aGUgYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQuICovXHJcblx0XHRcdFx0LyogTm90ZTogZGlzcGxheTpub25lIGlzbid0IHNldCB3aGVuIGNhbGxzIGFyZSBtYW51YWxseSBzdG9wcGVkICh2aWEgVmVsb2NpdHkoXCJzdG9wXCIpLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IERpc3BsYXkgZ2V0cyBpZ25vcmVkIHdpdGggXCJyZXZlcnNlXCIgY2FsbHMgYW5kIGluZmluaXRlIGxvb3BzLCBzaW5jZSB0aGlzIGJlaGF2aW9yIHdvdWxkIGJlIHVuZGVzaXJhYmxlLiAqL1xyXG5cdFx0XHRcdGlmICghaXNTdG9wcGVkICYmICFvcHRzLmxvb3ApIHtcclxuXHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcblx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiLCBvcHRzLmRpc3BsYXkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChvcHRzLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcclxuXHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJ2aXNpYmlsaXR5XCIsIG9wdHMudmlzaWJpbGl0eSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKiBJZiB0aGUgZWxlbWVudCdzIHF1ZXVlIGlzIGVtcHR5IChpZiBvbmx5IHRoZSBcImlucHJvZ3Jlc3NcIiBpdGVtIGlzIGxlZnQgYXQgcG9zaXRpb24gMCkgb3IgaWYgaXRzIHF1ZXVlIGlzIGFib3V0IHRvIHJ1blxyXG5cdFx0XHRcdCBhIG5vbi1WZWxvY2l0eS1pbml0aWF0ZWQgZW50cnksIHR1cm4gb2ZmIHRoZSBpc0FuaW1hdGluZyBmbGFnLiBBIG5vbi1WZWxvY2l0eS1pbml0aWF0aWVkIHF1ZXVlIGVudHJ5J3MgbG9naWMgbWlnaHQgYWx0ZXJcclxuXHRcdFx0XHQgYW4gZWxlbWVudCdzIENTUyB2YWx1ZXMgYW5kIHRoZXJlYnkgY2F1c2UgVmVsb2NpdHkncyBjYWNoZWQgdmFsdWUgZGF0YSB0byBnbyBzdGFsZS4gVG8gZGV0ZWN0IGlmIGEgcXVldWUgZW50cnkgd2FzIGluaXRpYXRlZCBieSBWZWxvY2l0eSxcclxuXHRcdFx0XHQgd2UgY2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2Ygb3VyIHNwZWNpYWwgVmVsb2NpdHkucXVldWVFbnRyeUZsYWcgZGVjbGFyYXRpb24sIHdoaWNoIG1pbmlmaWVycyB3b24ndCByZW5hbWUgc2luY2UgdGhlIGZsYWdcclxuXHRcdFx0XHQgaXMgYXNzaWduZWQgdG8galF1ZXJ5J3MgZ2xvYmFsICQgb2JqZWN0IGFuZCB0aHVzIGV4aXN0cyBvdXQgb2YgVmVsb2NpdHkncyBvd24gc2NvcGUuICovXHJcblx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRpZiAob3B0cy5sb29wICE9PSB0cnVlICYmICgkLnF1ZXVlKGVsZW1lbnQpWzFdID09PSB1bmRlZmluZWQgfHwgIS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdCgkLnF1ZXVlKGVsZW1lbnQpWzFdKSkpIHtcclxuXHRcdFx0XHRcdC8qIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gZGVsZXRlZC4gRW5zdXJlIHRoYXQgaXRzIGRhdGEgY2FjaGUgc3RpbGwgZXhpc3RzIGJlZm9yZSBhY3Rpbmcgb24gaXQuICovXHJcblx0XHRcdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRkYXRhLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdC8qIENsZWFyIHRoZSBlbGVtZW50J3Mgcm9vdFByb3BlcnR5VmFsdWVDYWNoZSwgd2hpY2ggd2lsbCBiZWNvbWUgc3RhbGUuICovXHJcblx0XHRcdFx0XHRcdGRhdGEucm9vdFByb3BlcnR5VmFsdWVDYWNoZSA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0LyogSWYgYW55IDNEIHRyYW5zZm9ybSBzdWJwcm9wZXJ0eSBpcyBhdCBpdHMgZGVmYXVsdCB2YWx1ZSAocmVnYXJkbGVzcyBvZiB1bml0IHR5cGUpLCByZW1vdmUgaXQuICovXHJcblx0XHRcdFx0XHRcdCQuZWFjaChDU1MuTGlzdHMudHJhbnNmb3JtczNELCBmdW5jdGlvbihpLCB0cmFuc2Zvcm1OYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRlZmF1bHRWYWx1ZSA9IC9ec2NhbGUvLnRlc3QodHJhbnNmb3JtTmFtZSkgPyAxIDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlID0gZGF0YS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV0gIT09IHVuZGVmaW5lZCAmJiBuZXcgUmVnRXhwKFwiXlxcXFwoXCIgKyBkZWZhdWx0VmFsdWUgKyBcIlteLl1cIikudGVzdChjdXJyZW50VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1IQVByb3BlcnR5RXhpc3RzID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZGF0YS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogTW9iaWxlIGRldmljZXMgaGF2ZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gcmVtb3ZlZCBhdCB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24gaW4gb3JkZXIgdG8gYXZvaWQgaG9nZ2luZyB0aGUgR1BVJ3MgbWVtb3J5LiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0cy5tb2JpbGVIQSkge1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBkYXRhLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBGbHVzaCB0aGUgc3VicHJvcGVydHkgcmVtb3ZhbHMgdG8gdGhlIERPTS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMpIHtcclxuXHRcdFx0XHRcdFx0XHRDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogUmVtb3ZlIHRoZSBcInZlbG9jaXR5LWFuaW1hdGluZ1wiIGluZGljYXRvciBjbGFzcy4gKi9cclxuXHRcdFx0XHRcdFx0Q1NTLlZhbHVlcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBcInZlbG9jaXR5LWFuaW1hdGluZ1wiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBDb21wbGV0ZVxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIENvbXBsZXRlIGlzIGZpcmVkIG9uY2UgcGVyIGNhbGwgKG5vdCBvbmNlIHBlciBlbGVtZW50KSBhbmQgaXMgcGFzc2VkIHRoZSBmdWxsIHJhdyBET00gZWxlbWVudCBzZXQgYXMgYm90aCBpdHMgY29udGV4dCBhbmQgaXRzIGZpcnN0IGFyZ3VtZW50LiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IENhbGxiYWNrcyBhcmVuJ3QgZmlyZWQgd2hlbiBjYWxscyBhcmUgbWFudWFsbHkgc3RvcHBlZCAodmlhIFZlbG9jaXR5KFwic3RvcFwiKS4gKi9cclxuXHRcdFx0XHRpZiAoIWlzU3RvcHBlZCAmJiBvcHRzLmNvbXBsZXRlICYmICFvcHRzLmxvb3AgJiYgKGkgPT09IGNhbGxMZW5ndGggLSAxKSkge1xyXG5cdFx0XHRcdFx0LyogV2UgdGhyb3cgY2FsbGJhY2tzIGluIGEgc2V0VGltZW91dCBzbyB0aGF0IHRocm93biBlcnJvcnMgZG9uJ3QgaGFsdCB0aGUgZXhlY3V0aW9uIG9mIFZlbG9jaXR5IGl0c2VsZi4gKi9cclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdG9wdHMuY29tcGxldGUuY2FsbChlbGVtZW50cywgZWxlbWVudHMpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBQcm9taXNlIFJlc29sdmluZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKiBOb3RlOiBJbmZpbml0ZSBsb29wcyBkb24ndCByZXR1cm4gcHJvbWlzZXMuICovXHJcblx0XHRcdFx0aWYgKHJlc29sdmVyICYmIG9wdHMubG9vcCAhPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZXIoZWxlbWVudHMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgT3B0aW9uOiBMb29wIChJbmZpbml0ZSlcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0aWYgKGRhdGEgJiYgb3B0cy5sb29wID09PSB0cnVlICYmICFpc1N0b3BwZWQpIHtcclxuXHRcdFx0XHRcdC8qIElmIGEgcm90YXRlWC9ZL1ogcHJvcGVydHkgaXMgYmVpbmcgYW5pbWF0ZWQgYnkgMzYwIGRlZyB3aXRoIGxvb3A6dHJ1ZSwgc3dhcCB0d2VlbiBzdGFydC9lbmQgdmFsdWVzIHRvIGVuYWJsZVxyXG5cdFx0XHRcdFx0IGNvbnRpbnVvdXMgaXRlcmF0aXZlIHJvdGF0aW9uIGxvb3BpbmcuIChPdGhlcmlzZSwgdGhlIGVsZW1lbnQgd291bGQganVzdCByb3RhdGUgYmFjayBhbmQgZm9ydGguKSAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKGRhdGEudHdlZW5zQ29udGFpbmVyLCBmdW5jdGlvbihwcm9wZXJ0eU5hbWUsIHR3ZWVuQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdGlmICgvXnJvdGF0ZS8udGVzdChwcm9wZXJ0eU5hbWUpICYmICgocGFyc2VGbG9hdCh0d2VlbkNvbnRhaW5lci5zdGFydFZhbHVlKSAtIHBhcnNlRmxvYXQodHdlZW5Db250YWluZXIuZW5kVmFsdWUpKSAlIDM2MCA9PT0gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgb2xkU3RhcnRWYWx1ZSA9IHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWUgPSB0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZSA9IG9sZFN0YXJ0VmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmICgvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChwcm9wZXJ0eU5hbWUpICYmIHBhcnNlRmxvYXQodHdlZW5Db250YWluZXIuZW5kVmFsdWUpID09PSAxMDAgJiYgdHdlZW5Db250YWluZXIudW5pdFR5cGUgPT09IFwiJVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0dHdlZW5Db250YWluZXIuZW5kVmFsdWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWUgPSAxMDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFZlbG9jaXR5KGVsZW1lbnQsIFwicmV2ZXJzZVwiLCB7bG9vcDogdHJ1ZSwgZGVsYXk6IG9wdHMuZGVsYXl9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgRGVxdWV1ZWluZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIEZpcmUgdGhlIG5leHQgY2FsbCBpbiB0aGUgcXVldWUgc28gbG9uZyBhcyB0aGlzIGNhbGwncyBxdWV1ZSB3YXNuJ3Qgc2V0IHRvIGZhbHNlICh0byB0cmlnZ2VyIGEgcGFyYWxsZWwgYW5pbWF0aW9uKSxcclxuXHRcdFx0XHQgd2hpY2ggd291bGQgaGF2ZSBhbHJlYWR5IGNhdXNlZCB0aGUgbmV4dCBjYWxsIHRvIGZpcmUuIE5vdGU6IEV2ZW4gaWYgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uIHF1ZXVlIGhhcyBiZWVuIHJlYWNoZWQsXHJcblx0XHRcdFx0ICQuZGVxdWV1ZSgpIG11c3Qgc3RpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNvbXBsZXRlbHkgY2xlYXIgalF1ZXJ5J3MgYW5pbWF0aW9uIHF1ZXVlLiAqL1xyXG5cdFx0XHRcdGlmIChvcHRzLnF1ZXVlICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0JC5kZXF1ZXVlKGVsZW1lbnQsIG9wdHMucXVldWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQ2FsbHMgQXJyYXkgQ2xlYW51cFxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogU2luY2UgdGhpcyBjYWxsIGlzIGNvbXBsZXRlLCBzZXQgaXQgdG8gZmFsc2Ugc28gdGhhdCB0aGUgckFGIHRpY2sgc2tpcHMgaXQuIFRoaXMgYXJyYXkgaXMgbGF0ZXIgY29tcGFjdGVkIHZpYSBjb21wYWN0U3BhcnNlQXJyYXkoKS5cclxuXHRcdFx0IChGb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgdGhlIGNhbGwgaXMgc2V0IHRvIGZhbHNlIGluc3RlYWQgb2YgYmVpbmcgZGVsZXRlZCBmcm9tIHRoZSBhcnJheTogaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi90dXRvcmlhbHMvc3BlZWQvdjgvKSAqL1xyXG5cdFx0XHRWZWxvY2l0eS5TdGF0ZS5jYWxsc1tjYWxsSW5kZXhdID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNhbGxzIGFycmF5IHRvIGRldGVybWluZSBpZiB0aGlzIHdhcyB0aGUgZmluYWwgaW4tcHJvZ3Jlc3MgYW5pbWF0aW9uLlxyXG5cdFx0XHQgSWYgc28sIHNldCBhIGZsYWcgdG8gZW5kIHRpY2tpbmcgYW5kIGNsZWFyIHRoZSBjYWxscyBhcnJheS4gKi9cclxuXHRcdFx0Zm9yICh2YXIgaiA9IDAsIGNhbGxzTGVuZ3RoID0gVmVsb2NpdHkuU3RhdGUuY2FsbHMubGVuZ3RoOyBqIDwgY2FsbHNMZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5jYWxsc1tqXSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdHJlbWFpbmluZ0NhbGxzRXhpc3QgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJlbWFpbmluZ0NhbGxzRXhpc3QgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0LyogdGljaygpIHdpbGwgZGV0ZWN0IHRoaXMgZmxhZyB1cG9uIGl0cyBuZXh0IGl0ZXJhdGlvbiBhbmQgc3Vic2VxdWVudGx5IHR1cm4gaXRzZWxmIG9mZi4gKi9cclxuXHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0LyogQ2xlYXIgdGhlIGNhbGxzIGFycmF5IHNvIHRoYXQgaXRzIGxlbmd0aCBpcyByZXNldC4gKi9cclxuXHRcdFx0XHRkZWxldGUgVmVsb2NpdHkuU3RhdGUuY2FsbHM7XHJcblx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHMgPSBbXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKioqKioqKioqKioqKioqKipcclxuXHRcdCBGcmFtZXdvcmtzXHJcblx0XHQgKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIEJvdGggalF1ZXJ5IGFuZCBaZXB0byBhbGxvdyB0aGVpciAkLmZuIG9iamVjdCB0byBiZSBleHRlbmRlZCB0byBhbGxvdyB3cmFwcGVkIGVsZW1lbnRzIHRvIGJlIHN1YmplY3RlZCB0byBwbHVnaW4gY2FsbHMuXHJcblx0XHQgSWYgZWl0aGVyIGZyYW1ld29yayBpcyBsb2FkZWQsIHJlZ2lzdGVyIGEgXCJ2ZWxvY2l0eVwiIGV4dGVuc2lvbiBwb2ludGluZyB0byBWZWxvY2l0eSdzIGNvcmUgYW5pbWF0ZSgpIG1ldGhvZC4gIFZlbG9jaXR5XHJcblx0XHQgYWxzbyByZWdpc3RlcnMgaXRzZWxmIG9udG8gYSBnbG9iYWwgY29udGFpbmVyICh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cpIHNvIHRoYXQgY2VydGFpbiBmZWF0dXJlcyBhcmVcclxuXHRcdCBhY2Nlc3NpYmxlIGJleW9uZCBqdXN0IGEgcGVyLWVsZW1lbnQgc2NvcGUuIFRoaXMgbWFzdGVyIG9iamVjdCBjb250YWlucyBhbiAuYW5pbWF0ZSgpIG1ldGhvZCwgd2hpY2ggaXMgbGF0ZXIgYXNzaWduZWQgdG8gJC5mblxyXG5cdFx0IChpZiBqUXVlcnkgb3IgWmVwdG8gYXJlIHByZXNlbnQpLiBBY2NvcmRpbmdseSwgVmVsb2NpdHkgY2FuIGJvdGggYWN0IG9uIHdyYXBwZWQgRE9NIGVsZW1lbnRzIGFuZCBzdGFuZCBhbG9uZSBmb3IgdGFyZ2V0aW5nIHJhdyBET00gZWxlbWVudHMuICovXHJcblx0XHRnbG9iYWwuVmVsb2NpdHkgPSBWZWxvY2l0eTtcclxuXHJcblx0XHRpZiAoZ2xvYmFsICE9PSB3aW5kb3cpIHtcclxuXHRcdFx0LyogQXNzaWduIHRoZSBlbGVtZW50IGZ1bmN0aW9uIHRvIFZlbG9jaXR5J3MgY29yZSBhbmltYXRlKCkgbWV0aG9kLiAqL1xyXG5cdFx0XHRnbG9iYWwuZm4udmVsb2NpdHkgPSBhbmltYXRlO1xyXG5cdFx0XHQvKiBBc3NpZ24gdGhlIG9iamVjdCBmdW5jdGlvbidzIGRlZmF1bHRzIHRvIFZlbG9jaXR5J3MgZ2xvYmFsIGRlZmF1bHRzIG9iamVjdC4gKi9cclxuXHRcdFx0Z2xvYmFsLmZuLnZlbG9jaXR5LmRlZmF1bHRzID0gVmVsb2NpdHkuZGVmYXVsdHM7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHQgUGFja2FnZWQgUmVkaXJlY3RzXHJcblx0XHQgKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0Lyogc2xpZGVVcCwgc2xpZGVEb3duICovXHJcblx0XHQkLmVhY2goW1wiRG93blwiLCBcIlVwXCJdLCBmdW5jdGlvbihpLCBkaXJlY3Rpb24pIHtcclxuXHRcdFx0VmVsb2NpdHkuUmVkaXJlY3RzW1wic2xpZGVcIiArIGRpcmVjdGlvbl0gPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBlbGVtZW50c0luZGV4LCBlbGVtZW50c1NpemUsIGVsZW1lbnRzLCBwcm9taXNlRGF0YSkge1xyXG5cdFx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe30sIG9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRiZWdpbiA9IG9wdHMuYmVnaW4sXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlID0gb3B0cy5jb21wbGV0ZSxcclxuXHRcdFx0XHRcdFx0aW5saW5lVmFsdWVzID0ge30sXHJcblx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWVzID0ge2hlaWdodDogXCJcIiwgbWFyZ2luVG9wOiBcIlwiLCBtYXJnaW5Cb3R0b206IFwiXCIsIHBhZGRpbmdUb3A6IFwiXCIsIHBhZGRpbmdCb3R0b206IFwiXCJ9O1xyXG5cclxuXHRcdFx0XHRpZiAob3B0cy5kaXNwbGF5ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdC8qIFNob3cgdGhlIGVsZW1lbnQgYmVmb3JlIHNsaWRlRG93biBiZWdpbnMgYW5kIGhpZGUgdGhlIGVsZW1lbnQgYWZ0ZXIgc2xpZGVVcCBjb21wbGV0ZXMuICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBJbmxpbmUgZWxlbWVudHMgY2Fubm90IGhhdmUgZGltZW5zaW9ucyBhbmltYXRlZCwgc28gdGhleSdyZSByZXZlcnRlZCB0byBpbmxpbmUtYmxvY2suICovXHJcblx0XHRcdFx0XHRvcHRzLmRpc3BsYXkgPSAoZGlyZWN0aW9uID09PSBcIkRvd25cIiA/IChWZWxvY2l0eS5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGVsZW1lbnQpID09PSBcImlubGluZVwiID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwiYmxvY2tcIikgOiBcIm5vbmVcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRvcHRzLmJlZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvKiBJZiB0aGUgdXNlciBwYXNzZWQgaW4gYSBiZWdpbiBjYWxsYmFjaywgZmlyZSBpdCBub3cuICovXHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCA9PT0gMCAmJiBiZWdpbikge1xyXG5cdFx0XHRcdFx0XHRiZWdpbi5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogQ2FjaGUgdGhlIGVsZW1lbnRzJyBvcmlnaW5hbCB2ZXJ0aWNhbCBkaW1lbnNpb25hbCBwcm9wZXJ0eSB2YWx1ZXMgc28gdGhhdCB3ZSBjYW4gYW5pbWF0ZSBiYWNrIHRvIHRoZW0uICovXHJcblx0XHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb21wdXRlZFZhbHVlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNvbXB1dGVkVmFsdWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlubGluZVZhbHVlc1twcm9wZXJ0eV0gPSBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XTtcclxuXHJcblx0XHRcdFx0XHRcdC8qIEZvciBzbGlkZURvd24sIHVzZSBmb3JjZWZlZWRpbmcgdG8gYW5pbWF0ZSBhbGwgdmVydGljYWwgcHJvcGVydGllcyBmcm9tIDAuIEZvciBzbGlkZVVwLFxyXG5cdFx0XHRcdFx0XHQgdXNlIGZvcmNlZmVlZGluZyB0byBzdGFydCBmcm9tIGNvbXB1dGVkIHZhbHVlcyBhbmQgYW5pbWF0ZSBkb3duIHRvIDAuICovXHJcblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpO1xyXG5cdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlc1twcm9wZXJ0eV0gPSAoZGlyZWN0aW9uID09PSBcIkRvd25cIikgPyBbcHJvcGVydHlWYWx1ZSwgMF0gOiBbMCwgcHJvcGVydHlWYWx1ZV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogRm9yY2UgdmVydGljYWwgb3ZlcmZsb3cgY29udGVudCB0byBjbGlwIHNvIHRoYXQgc2xpZGluZyB3b3JrcyBhcyBleHBlY3RlZC4gKi9cclxuXHRcdFx0XHRcdGlubGluZVZhbHVlcy5vdmVyZmxvdyA9IGVsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XHJcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRvcHRzLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvKiBSZXNldCBlbGVtZW50IHRvIGl0cyBwcmUtc2xpZGUgaW5saW5lIHZhbHVlcyBvbmNlIGl0cyBzbGlkZSBhbmltYXRpb24gaXMgY29tcGxldGUuICovXHJcblx0XHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBpbmxpbmVWYWx1ZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGlubGluZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGlubGluZVZhbHVlc1twcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBJZiB0aGUgdXNlciBwYXNzZWQgaW4gYSBjb21wbGV0ZSBjYWxsYmFjaywgZmlyZSBpdCBub3cuICovXHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCA9PT0gZWxlbWVudHNTaXplIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tcGxldGUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZS5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIoZWxlbWVudHMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0VmVsb2NpdHkoZWxlbWVudCwgY29tcHV0ZWRWYWx1ZXMsIG9wdHMpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyogZmFkZUluLCBmYWRlT3V0ICovXHJcblx0XHQkLmVhY2goW1wiSW5cIiwgXCJPdXRcIl0sIGZ1bmN0aW9uKGksIGRpcmVjdGlvbikge1xyXG5cdFx0XHRWZWxvY2l0eS5SZWRpcmVjdHNbXCJmYWRlXCIgKyBkaXJlY3Rpb25dID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgZWxlbWVudHNJbmRleCwgZWxlbWVudHNTaXplLCBlbGVtZW50cywgcHJvbWlzZURhdGEpIHtcclxuXHRcdFx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zKSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGUgPSBvcHRzLmNvbXBsZXRlLFxyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzTWFwID0ge29wYWNpdHk6IChkaXJlY3Rpb24gPT09IFwiSW5cIikgPyAxIDogMH07XHJcblxyXG5cdFx0XHRcdC8qIFNpbmNlIHJlZGlyZWN0cyBhcmUgdHJpZ2dlcmVkIGluZGl2aWR1YWxseSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhbmltYXRlZCBzZXQsIGF2b2lkIHJlcGVhdGVkbHkgdHJpZ2dlcmluZ1xyXG5cdFx0XHRcdCBjYWxsYmFja3MgYnkgZmlyaW5nIHRoZW0gb25seSB3aGVuIHRoZSBmaW5hbCBlbGVtZW50IGhhcyBiZWVuIHJlYWNoZWQuICovXHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzSW5kZXggIT09IDApIHtcclxuXHRcdFx0XHRcdG9wdHMuYmVnaW4gPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCAhPT0gZWxlbWVudHNTaXplIC0gMSkge1xyXG5cdFx0XHRcdFx0b3B0cy5jb21wbGV0ZSA9IG51bGw7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9wdHMuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUuY2FsbChlbGVtZW50cywgZWxlbWVudHMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChwcm9taXNlRGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdHByb21pc2VEYXRhLnJlc29sdmVyKGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIElmIGEgZGlzcGxheSB3YXMgcGFzc2VkIGluLCB1c2UgaXQuIE90aGVyd2lzZSwgZGVmYXVsdCB0byBcIm5vbmVcIiBmb3IgZmFkZU91dCBvciB0aGUgZWxlbWVudC1zcGVjaWZpYyBkZWZhdWx0IGZvciBmYWRlSW4uICovXHJcblx0XHRcdFx0LyogTm90ZTogV2UgYWxsb3cgdXNlcnMgdG8gcGFzcyBpbiBcIm51bGxcIiB0byBza2lwIGRpc3BsYXkgc2V0dGluZyBhbHRvZ2V0aGVyLiAqL1xyXG5cdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0b3B0cy5kaXNwbGF5ID0gKGRpcmVjdGlvbiA9PT0gXCJJblwiID8gXCJhdXRvXCIgOiBcIm5vbmVcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWZWxvY2l0eSh0aGlzLCBwcm9wZXJ0aWVzTWFwLCBvcHRzKTtcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBWZWxvY2l0eTtcclxuXHR9KCh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cpLCB3aW5kb3csICh3aW5kb3cgPyB3aW5kb3cuZG9jdW1lbnQgOiB1bmRlZmluZWQpKTtcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKlxyXG4gS25vd24gSXNzdWVzXHJcbiAqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKiBUaGUgQ1NTIHNwZWMgbWFuZGF0ZXMgdGhhdCB0aGUgdHJhbnNsYXRlWC9ZL1ogdHJhbnNmb3JtcyBhcmUgJS1yZWxhdGl2ZSB0byB0aGUgZWxlbWVudCBpdHNlbGYgLS0gbm90IGl0cyBwYXJlbnQuXHJcbiBWZWxvY2l0eSwgaG93ZXZlciwgZG9lc24ndCBtYWtlIHRoaXMgZGlzdGluY3Rpb24uIFRodXMsIGNvbnZlcnRpbmcgdG8gb3IgZnJvbSB0aGUgJSB1bml0IHdpdGggdGhlc2Ugc3VicHJvcGVydGllc1xyXG4gd2lsbCBwcm9kdWNlIGFuIGluYWNjdXJhdGUgY29udmVyc2lvbiB2YWx1ZS4gVGhlIHNhbWUgaXNzdWUgZXhpc3RzIHdpdGggdGhlIGN4L2N5IGF0dHJpYnV0ZXMgb2YgU1ZHIGNpcmNsZXMgYW5kIGVsbGlwc2VzLiAqL1xyXG4iLCJ2YXIgVnVlIC8vIGxhdGUgYmluZFxudmFyIHZlcnNpb25cbnZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Ll9fVlVFX0hPVF9NQVBfXyA9IG1hcFxufVxudmFyIGluc3RhbGxlZCA9IGZhbHNlXG52YXIgaXNCcm93c2VyaWZ5ID0gZmFsc2VcbnZhciBpbml0SG9va05hbWUgPSAnYmVmb3JlQ3JlYXRlJ1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAodnVlLCBicm93c2VyaWZ5KSB7XG4gIGlmIChpbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIFZ1ZSA9IHZ1ZS5fX2VzTW9kdWxlID8gdnVlLmRlZmF1bHQgOiB2dWVcbiAgdmVyc2lvbiA9IFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJykubWFwKE51bWJlcilcbiAgaXNCcm93c2VyaWZ5ID0gYnJvd3NlcmlmeVxuXG4gIC8vIGNvbXBhdCB3aXRoIDwgMi4wLjAtYWxwaGEuN1xuICBpZiAoVnVlLmNvbmZpZy5fbGlmZWN5Y2xlSG9va3MuaW5kZXhPZignaW5pdCcpID4gLTEpIHtcbiAgICBpbml0SG9va05hbWUgPSAnaW5pdCdcbiAgfVxuXG4gIGV4cG9ydHMuY29tcGF0aWJsZSA9IHZlcnNpb25bMF0gPj0gMlxuICBpZiAoIWV4cG9ydHMuY29tcGF0aWJsZSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdbSE1SXSBZb3UgYXJlIHVzaW5nIGEgdmVyc2lvbiBvZiB2dWUtaG90LXJlbG9hZC1hcGkgdGhhdCBpcyAnICtcbiAgICAgICAgJ29ubHkgY29tcGF0aWJsZSB3aXRoIFZ1ZS5qcyBjb3JlIF4yLjAuMC4nXG4gICAgKVxuICAgIHJldHVyblxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjb3JkIGZvciBhIGhvdCBtb2R1bGUsIHdoaWNoIGtlZXBzIHRyYWNrIG9mIGl0cyBjb25zdHJ1Y3RvclxuICogYW5kIGluc3RhbmNlc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5leHBvcnRzLmNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICBpZihtYXBbaWRdKSB7IHJldHVybiB9XG5cbiAgdmFyIEN0b3IgPSBudWxsXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIEN0b3IgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICBtYXBbaWRdID0ge1xuICAgIEN0b3I6IEN0b3IsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBpbnN0YW5jZXM6IFtdXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBtb2R1bGUgaXMgcmVjb3JkZWRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqL1xuXG5leHBvcnRzLmlzUmVjb3JkZWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBbaWRdICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGlmIChjdHggJiYgaW5zdGFuY2VzLmluZGV4T2YoY3R4LnBhcmVudCkgPCAwKSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKGN0eC5wYXJlbnQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgICAgIGlmICghcmVjb3JkLkN0b3IpIHtcbiAgICAgICAgcmVjb3JkLkN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnB1c2godGhpcylcbiAgICB9KVxuICAgIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogSW5qZWN0IGEgaG9vayB0byBhIGhvdCByZWxvYWRhYmxlIGNvbXBvbmVudCBzbyB0aGF0XG4gKiB3ZSBjYW4ga2VlcCB0cmFjayBvZiBpdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAqL1xuXG5mdW5jdGlvbiBpbmplY3RIb29rKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpID8gZXhpc3RpbmcuY29uY2F0KGhvb2spIDogW2V4aXN0aW5nLCBob29rXVxuICAgIDogW2hvb2tdXG59XG5cbmZ1bmN0aW9uIHRyeVdyYXAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKGlkLCBhcmcpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIFZ1ZSBjb21wb25lbnQgaG90LXJlbG9hZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPcHRpb25zIChvbGRPcHRpb25zLCBuZXdPcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvbGRPcHRpb25zKSB7XG4gICAgaWYgKCEoa2V5IGluIG5ld09wdGlvbnMpKSB7XG4gICAgICBkZWxldGUgb2xkT3B0aW9uc1trZXldXG4gICAgfVxuICB9XG4gIGZvciAodmFyIGtleSQxIGluIG5ld09wdGlvbnMpIHtcbiAgICBvbGRPcHRpb25zW2tleSQxXSA9IG5ld09wdGlvbnNba2V5JDFdXG4gIH1cbn1cblxuZXhwb3J0cy5yZXJlbmRlciA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmICghb3B0aW9ucykge1xuICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgfVxuICBpZiAocmVjb3JkLkN0b3IpIHtcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgICAvLyByZXNldCBzdGF0aWMgdHJlZXNcbiAgICAgIC8vIHByZSAyLjUsIGFsbCBzdGF0aWMgdHJlZXMgYXJlIGNhY2hlZCB0b2dldGhlciBvbiB0aGUgaW5zdGFuY2VcbiAgICAgIGlmIChpbnN0YW5jZS5fc3RhdGljVHJlZXMpIHtcbiAgICAgICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4wXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIHBvc3QgMi41LjQ6IHYtb25jZSB0cmVlcyBhcmUgY2FjaGVkIG9uIGluc3RhbmNlLl9zdGF0aWNUcmVlcy5cbiAgICAgIC8vIFB1cmUgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgb24gdGhlIHN0YXRpY1JlbmRlckZucyBhcnJheVxuICAgICAgLy8gKGJvdGggYWxyZWFkeSByZXNldCBhYm92ZSlcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBmdW5jdGlvbmFsIG9yIG5vIGluc3RhbmNlIGNyZWF0ZWQgeWV0XG4gICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuXG4gICAgLy8gaGFuZGxlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHJlLXJlbmRlclxuICAgIGlmIChyZWNvcmQub3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyByZXJlbmRlciB3aXRoIGZ1bGwgb3B0aW9uc1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRlbXBsYXRlLW9ubHkgcmVyZW5kZXIuXG4gICAgICAgIC8vIG5lZWQgdG8gaW5qZWN0IHRoZSBzdHlsZSBpbmplY3Rpb24gY29kZSBmb3IgQ1NTIG1vZHVsZXNcbiAgICAgICAgLy8gdG8gd29yayBwcm9wZXJseS5cbiAgICAgICAgdmFyIGluamVjdFN0eWxlcyA9IHJlY29yZC5vcHRpb25zLl9pbmplY3RTdHlsZXNcbiAgICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKGN0eClcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVjb3JkLm9wdGlvbnMuX0N0b3IgPSBudWxsXG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQub3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0cy5yZWxvYWQgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICAgIH1cbiAgICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgICBpZiAocmVjb3JkLkN0b3IpIHtcbiAgICAgIGlmICh2ZXJzaW9uWzFdIDwgMikge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICAgICAgcmVjb3JkLkN0b3IuZXh0ZW5kT3B0aW9ucyA9IG9wdGlvbnNcbiAgICAgIH1cbiAgICAgIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gICAgICByZWNvcmQuQ3Rvci5vcHRpb25zID0gbmV3Q3Rvci5vcHRpb25zXG4gICAgICByZWNvcmQuQ3Rvci5jaWQgPSBuZXdDdG9yLmNpZFxuICAgICAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgICAgIGlmIChuZXdDdG9yLnJlbGVhc2UpIHtcbiAgICAgICAgLy8gdGVtcG9yYXJ5IGdsb2JhbCBtaXhpbiBzdHJhdGVneSB1c2VkIGluIDwgMi4wLjAtYWxwaGEuNlxuICAgICAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuJHZub2RlICYmIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0KSB7XG4gICAgICBpbnN0YW5jZS4kdm5vZGUuY29udGV4dC4kZm9yY2VVcGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdSb290IG9yIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UgbW9kaWZpZWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH0pXG59KVxuIiwiLyohXG4gKiB2dWUtc2xpZGUtYmFyIHYxLjEuOVxuICogKGMpIDIwMTgtcHJlc2VudCBQb25nc2F0b3JuIE5pdGl0aGFtbWF3b290IDxiaWlnX3BvbmdzYXRvcm5AaG90bWFpbC5jb20+XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQudnVlU2xpZGVCYXI9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXt2YXIgdD1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksaT1cIiAudnVlLXNsaWRlLWJhci1jb21wb25lbnRbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgdXNlci1zZWxlY3Q6IG5vbmU7IH0gLnZ1ZS1zbGlkZS1iYXJbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogYmxvY2s7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7IGN1cnNvcjogcG9pbnRlcjsgfSAudnVlLXNsaWRlLWJhcltkYXRhLXYtNjg4NjNlNDhdOjphZnRlciB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgei1pbmRleDogMjsgfSAudnVlLXNsaWRlLWJhci1wcm9jZXNzW2RhdGEtdi02ODg2M2U0OF0geyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGJhY2tncm91bmQtY29sb3I6ICMxMDY2RkQ7IHRyYW5zaXRpb246IGFsbCAwczsgei1pbmRleDogMTsgd2lkdGg6IDA7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWxsLWNoYW5nZTogd2lkdGg7IH0gLnZ1ZS1zbGlkZS1iYXItdG9vbHRpcC1jb250YWluZXJbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdHJhbnNpdGlvbjogYWxsIDBzOyB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyBjdXJzb3I6IHBvaW50ZXI7IHotaW5kZXg6IDM7IGxlZnQ6IDA7IHRvcDogLTE2cHg7IH0gLnZ1ZS1zbGlkZS1iYXItdG9vbHRpcC13cmFwW2RhdGEtdi02ODg2M2U0OF0geyAvKiBkaXNwbGF5OiBub25lOyAqLyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDk7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gLnZ1ZS1zbGlkZS1iYXItdG9vbHRpcC10b3BbZGF0YS12LTY4ODYzZTQ4XSB7IHRvcDogLTEycHg7IGxlZnQ6IDQwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpOyB9IC52dWUtc2xpZGUtYmFyLXRvb2x0aXBbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZm9udC1zaXplOiAxNHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBwYWRkaW5nOiAycHggNXB4OyBtaW4td2lkdGg6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiAxcHggc29saWQgIzEwNjZGRDsgYmFja2dyb3VuZC1jb2xvcjogIzEwNjZGRDsgfSAudnVlLXNsaWRlLWJhci10b29sdGlwW2RhdGEtdi02ODg2M2U0OF06OmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogLTEwcHg7IGxlZnQ6IDUwJTsgd2lkdGg6IDA7IGhlaWdodDogMDsgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB9IC52dWUtc2xpZGUtYmFyLXJhbmdlW2RhdGEtdi02ODg2M2U0OF0geyBkaXNwbGF5OiBmbGV4OyBwYWRkaW5nOiA1cHggMDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9IC52dWUtc2xpZGUtYmFyLXNlcGFyYXRlW2RhdGEtdi02ODg2M2U0OF0geyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAycHg7IGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7IGhlaWdodDogNXB4OyBjdXJzb3I6IHBvaW50ZXI7IH0gLnZ1ZS1zbGlkZS1iYXItc2VwYXJhdGUtdGV4dFtkYXRhLXYtNjg4NjNlNDhdIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdoaXRlLXNwYWNlOiBub3dyYXA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB0b3A6IDZweDsgfSBcIjtlLnR5cGU9XCJ0ZXh0L2Nzc1wiLGUuc3R5bGVTaGVldD9lLnN0eWxlU2hlZXQuY3NzVGV4dD1pOmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaSkpLHQuYXBwZW5kQ2hpbGQoZSl9fSgpLHtyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC4kY3JlYXRlRWxlbWVudCxpPXQuX3NlbGYuX2N8fGU7cmV0dXJuIGkoXCJkaXZcIix7cmVmOlwid3JhcFwiLHN0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci1jb21wb25lbnQgdnVlLXNsaWRlLWJhci1ob3Jpem9udGFsXCIsc3R5bGU6dC5jYWxjdWxhdGVIZWlnaHQsYXR0cnM6e2lkOlwid3JhcFwifSxvbjp7Y2xpY2s6dC53cmFwQ2xpY2t9fSxbaShcImRpdlwiLHtyZWY6XCJlbGVtXCIsc3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyXCIsc3R5bGU6e2hlaWdodDp0LmxpbmVIZWlnaHQrXCJweFwifSxhdHRyczp7aWQ6XCJzbGlkZXJcIn19LFtbaShcImRpdlwiLHtyZWY6XCJ0b29sdGlwXCIsc3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyLWFsd2F5cyB2dWUtc2xpZGUtYmFyLXRvb2x0aXAtY29udGFpbmVyXCIsc3R5bGU6e3dpZHRoOnQuaWNvbldpZHRoK1wicHhcIn0sb246e21vdXNlZG93bjp0Lm1vdmVTdGFydCx0b3VjaHN0YXJ0OnQubW92ZVN0YXJ0fX0sW3Quc2hvd1Rvb2x0aXA/aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyLXRvb2x0aXAtdG9wIHZ1ZS1zbGlkZS1iYXItdG9vbHRpcC13cmFwXCJ9LFt0Ll90KFwidG9vbHRpcFwiLFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXItdG9vbHRpcFwiLHN0eWxlOnQudG9vbHRpcFN0eWxlc30sW3QuX3YodC5fcyh0LnZhbCkpXSldKV0sMik6dC5fZSgpXSldLHQuX3YoXCIgXCIpLGkoXCJkaXZcIix7cmVmOlwicHJvY2Vzc1wiLHN0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci1wcm9jZXNzXCIsc3R5bGU6dC5wcm9jZXNzU3R5bGV9KV0sMiksdC5fdihcIiBcIiksdC5yYW5nZT9pKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci1yYW5nZVwifSx0Ll9sKHQucmFuZ2UsZnVuY3Rpb24oZSxzKXtyZXR1cm4gaShcImRpdlwiLHtrZXk6cyxzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXItc2VwYXJhdGVcIixzdHlsZTp0LmRhdGFMYWJlbFN0eWxlc30sW2UuaXNIaWRlP3QuX2UoKTppKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXItc2VwYXJhdGUtdGV4dFwifSxbdC5fdihcIiBcIit0Ll9zKGUubGFiZWwpK1wiIFwiKV0pXSl9KSk6dC5fZSgpXSl9LHN0YXRpY1JlbmRlckZuczpbXSxfc2NvcGVJZDpcImRhdGEtdi02ODg2M2U0OFwiLG5hbWU6XCJWdWVTbGlkZUJhclwiLGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZmxhZzohMSxzaXplOjAsY3VycmVudFZhbHVlOjAsY3VycmVudFNsaWRlcjowLGlzQ29tcG9uZW50RXhpc3RzOiEwLGludGVydmFsOjEsbGF6eTohMSxyZWFsVGltZTohMSxkYXRhTGFiZWxTdHlsZXM6T2JqZWN0LmFzc2lnbih7Y29sb3I6XCIjNGE0YTRhXCIsXCJmb250LWZhbWlseVwiOlwiQXJpYWwsIHNhbnMtc2VyaWZcIixcImZvbnQtc2l6ZVwiOlwiMTJweFwifSx0aGlzLiRwcm9wcy5sYWJlbFN0eWxlcyl9fSxwcm9wczp7ZGF0YTp7dHlwZTpBcnJheSxkZWZhdWx0Om51bGx9LHJhbmdlOnt0eXBlOkFycmF5LGRlZmF1bHQ6bnVsbH0sc3BlZWQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6LjV9LGxpbmVIZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6NX0saWNvbldpZHRoOnt0eXBlOk51bWJlcixkZWZhdWx0OjIwfSx2YWx1ZTp7dHlwZTpbU3RyaW5nLE51bWJlcl0sZGVmYXVsdDowfSxtaW46e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MH0sbWF4Ont0eXBlOk51bWJlcixkZWZhdWx0OjEwMH0sc2hvd1Rvb2x0aXA6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxpc0Rpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZHJhZ2dhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0scGFkZGluZ2xlc3M6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSx0b29sdGlwU3R5bGVzOk9iamVjdCxsYWJlbFN0eWxlczpPYmplY3QscHJvY2Vzc1N0eWxlOk9iamVjdH0sY29tcHV0ZWQ6e3NsaWRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLiRyZWZzLnRvb2x0aXB9LHZhbDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT90aGlzLmRhdGFbdGhpcy5jdXJyZW50VmFsdWVdOnRoaXMuY3VycmVudFZhbHVlfSxzZXQ6ZnVuY3Rpb24odCl7aWYodGhpcy5kYXRhKXt2YXIgZT10aGlzLmRhdGEuaW5kZXhPZih0KTtlPi0xJiYodGhpcy5jdXJyZW50VmFsdWU9ZSl9ZWxzZSB0aGlzLmN1cnJlbnRWYWx1ZT10fX0sY3VycmVudEluZGV4OmZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuY3VycmVudFZhbHVlLXRoaXMubWluaW11bSkvdGhpcy5zcGFjaW5nfSxpbmRleFJhbmdlOmZ1bmN0aW9uKCl7cmV0dXJuWzAsdGhpcy5jdXJyZW50SW5kZXhdfSxtaW5pbXVtOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT8wOnRoaXMubWlufSxtYXhpbXVtOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT90aGlzLmRhdGEubGVuZ3RoLTE6dGhpcy5tYXh9LG11bHRpcGxlOmZ1bmN0aW9uKCl7dmFyIHQ9KFwiXCIrdGhpcy5pbnRlcnZhbCkuc3BsaXQoXCIuXCIpWzFdO3JldHVybiB0P01hdGgucG93KDEwLHQubGVuZ3RoKToxfSxzcGFjaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT8xOnRoaXMuaW50ZXJ2YWx9LHRvdGFsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT90aGlzLmRhdGEubGVuZ3RoLTE6KE1hdGguZmxvb3IoKHRoaXMubWF4aW11bS10aGlzLm1pbmltdW0pKnRoaXMubXVsdGlwbGUpJSh0aGlzLmludGVydmFsKnRoaXMubXVsdGlwbGUpIT0wJiZ0aGlzLnByaW50RXJyb3IoXCJbVnVlU2xpZGVCYXIgZXJyb3JdOiBQcm9wW2ludGVydmFsXSBpcyBpbGxlZ2FsLCBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgdGhlIGludGVydmFsIGNhbiBiZSBkaXZpc2libGVcIiksKHRoaXMubWF4aW11bS10aGlzLm1pbmltdW0pL3RoaXMuaW50ZXJ2YWwpfSxnYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaXplL3RoaXMudG90YWx9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuY3VycmVudFZhbHVlLXRoaXMubWluaW11bSkvdGhpcy5zcGFjaW5nKnRoaXMuZ2FwfSxsaW1pdDpmdW5jdGlvbigpe3JldHVyblswLHRoaXMuc2l6ZV19LHZhbHVlTGltaXQ6ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5taW5pbXVtLHRoaXMubWF4aW11bV19LGNhbGN1bGF0ZUhlaWdodDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhZGRpbmdsZXNzP3t9OntcInBhZGRpbmctdG9wXCI6XCI0MHB4XCIsXCJtaW4taGVpZ2h0XCI6dGhpcy5yYW5nZT9cIjEwMHB4XCI6bnVsbH19fSx3YXRjaDp7dmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5mbGFnP3RoaXMuc2V0VmFsdWUodCk6dGhpcy5zZXRWYWx1ZSh0LHRoaXMuc3BlZWQpfSxtYXg6ZnVuY3Rpb24odCl7aWYodDx0aGlzLm1pbilyZXR1cm4gdGhpcy5wcmludEVycm9yKFwiW1Z1ZVNsaWRlQmFyIGVycm9yXTogVGhlIG1heGltdW0gdmFsdWUgY2FuIG5vdCBiZSBsZXNzIHRoYW4gdGhlIG1pbmltdW0gdmFsdWUuXCIpO3ZhciBlPXRoaXMubGltaXRWYWx1ZSh0aGlzLnZhbCk7dGhpcy5zZXRWYWx1ZShlKSx0aGlzLnJlZnJlc2goKX0sbWluOmZ1bmN0aW9uKHQpe2lmKHQ+dGhpcy5tYXgpcmV0dXJuIHRoaXMucHJpbnRFcnJvcihcIltWdWVTbGlkZUJhciBlcnJvcl06IFRoZSBtaW5pbXVtIHZhbHVlIGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBtYXhpbXVtIHZhbHVlLlwiKTt2YXIgZT10aGlzLmxpbWl0VmFsdWUodGhpcy52YWwpO3RoaXMuc2V0VmFsdWUoZSksdGhpcy5yZWZyZXNoKCl9fSxtZXRob2RzOntiaW5kRXZlbnRzOmZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92aW5nLHtwYXNzaXZlOiExfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5tb3ZlRW5kLHtwYXNzaXZlOiExfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW92aW5nKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW92ZUVuZCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdmVFbmQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZWZyZXNoKX0sdW5iaW5kRXZlbnRzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlZnJlc2gpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm1vdmluZyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5tb3ZlRW5kKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3ZpbmcpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3ZlRW5kKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW92ZUVuZCl9LGdldFBvczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZWFsVGltZSYmdGhpcy5nZXRTdGF0aWNEYXRhKCksdC5jbGllbnRYLXRoaXMub2Zmc2V0fSx3cmFwQ2xpY2s6ZnVuY3Rpb24odCl7aWYodGhpcy5pc0Rpc2FibGVkfHwhdGhpcy5kcmFnZ2FibGUmJlwid3JhcFwiPT09dC50YXJnZXQuaWQpcmV0dXJuITE7dmFyIGU9dGhpcy5nZXRQb3ModCk7dGhpcy5zZXRWYWx1ZU9uUG9zKGUpfSxtb3ZlU3RhcnQ6ZnVuY3Rpb24odCxlKXtpZighdGhpcy5kcmFnZ2FibGUpcmV0dXJuITE7dGhpcy5mbGFnPSEwLHRoaXMuJGVtaXQoXCJkcmFnU3RhcnRcIix0aGlzKX0sbW92aW5nOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLmZsYWd8fCF0aGlzLmRyYWdnYWJsZSlyZXR1cm4hMTt0LnByZXZlbnREZWZhdWx0KCksdC50YXJnZXRUb3VjaGVzJiZ0LnRhcmdldFRvdWNoZXNbMF0mJih0PXQudGFyZ2V0VG91Y2hlc1swXSksdGhpcy5zZXRWYWx1ZU9uUG9zKHRoaXMuZ2V0UG9zKHQpLCEwKX0sbW92ZUVuZDpmdW5jdGlvbih0KXtpZighdGhpcy5mbGFnfHwhdGhpcy5kcmFnZ2FibGUpcmV0dXJuITE7dGhpcy4kZW1pdChcImRyYWdFbmRcIix0aGlzKSx0aGlzLmxhenkmJnRoaXMuaXNEaWZmKHRoaXMudmFsLHRoaXMudmFsdWUpJiZ0aGlzLnN5bmNWYWx1ZSgpLHRoaXMuZmxhZz0hMSx0aGlzLnNldFBvc2l0aW9uKCl9LHNldFZhbHVlT25Qb3M6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmxpbWl0LHM9dGhpcy52YWx1ZUxpbWl0O2lmKHQ+PWlbMF0mJnQ8PWlbMV0pe3RoaXMuc2V0VHJhbnNmb3JtKHQpO3ZhciBuPShNYXRoLnJvdW5kKHQvdGhpcy5nYXApKih0aGlzLnNwYWNpbmcqdGhpcy5tdWx0aXBsZSkrdGhpcy5taW5pbXVtKnRoaXMubXVsdGlwbGUpL3RoaXMubXVsdGlwbGU7dGhpcy5zZXRDdXJyZW50VmFsdWUobixlKX1lbHNlIHQ8aVswXT8odGhpcy5zZXRUcmFuc2Zvcm0oaVswXSksdGhpcy5zZXRDdXJyZW50VmFsdWUoc1swXSksMT09PXRoaXMuY3VycmVudFNsaWRlciYmKHRoaXMuY3VycmVudFNsaWRlcj0wKSk6KHRoaXMuc2V0VHJhbnNmb3JtKGlbMV0pLHRoaXMuc2V0Q3VycmVudFZhbHVlKHNbMV0pLDA9PT10aGlzLmN1cnJlbnRTbGlkZXImJih0aGlzLmN1cnJlbnRTbGlkZXI9MSkpfSxpc0RpZmY6ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfHwoQXJyYXkuaXNBcnJheSh0KSYmdC5sZW5ndGg9PT1lLmxlbmd0aD90LnNvbWUoZnVuY3Rpb24odCxpKXtyZXR1cm4gdCE9PWVbaV19KTp0IT09ZSl9LHNldEN1cnJlbnRWYWx1ZTpmdW5jdGlvbih0LGUpe2lmKHQ8dGhpcy5taW5pbXVtfHx0PnRoaXMubWF4aW11bSlyZXR1cm4hMTt0aGlzLmlzRGlmZih0aGlzLmN1cnJlbnRWYWx1ZSx0KSYmKHRoaXMuY3VycmVudFZhbHVlPXQsdGhpcy5sYXp5JiZ0aGlzLmZsYWd8fHRoaXMuc3luY1ZhbHVlKCkpLGV8fHRoaXMuc2V0UG9zaXRpb24oKX0sc2V0SW5kZXg6ZnVuY3Rpb24odCl7dD10aGlzLnNwYWNpbmcqdCt0aGlzLm1pbmltdW0sdGhpcy5zZXRDdXJyZW50VmFsdWUodCl9LHNldFZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcztpZih0aGlzLmlzRGlmZih0aGlzLnZhbCx0KSl7dmFyIHM9dGhpcy5saW1pdFZhbHVlKHQpO3RoaXMudmFsPXMsdGhpcy5zeW5jVmFsdWUoKX10aGlzLiRuZXh0VGljayhmdW5jdGlvbigpe3JldHVybiBpLnNldFBvc2l0aW9uKGUpfSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKHQpe3RoaXMuZmxhZz90aGlzLnNldFRyYW5zaXRpb25UaW1lKDApOnRoaXMuc2V0VHJhbnNpdGlvblRpbWUodm9pZCAwPT09dD90aGlzLnNwZWVkOnQpLHRoaXMuc2V0VHJhbnNmb3JtKHRoaXMucG9zaXRpb24pfSxzZXRUcmFuc2Zvcm06ZnVuY3Rpb24odCl7dmFyIGU9XCJ0cmFuc2xhdGVYKFwiKyh0LSh0aGlzLiRyZWZzLnRvb2x0aXAuc2Nyb2xsV2lkdGgtMikvMikrXCJweClcIjt0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm09ZSx0aGlzLnNsaWRlci5zdHlsZS5XZWJraXRUcmFuc2Zvcm09ZSx0aGlzLnNsaWRlci5zdHlsZS5tc1RyYW5zZm9ybT1lLHRoaXMuJHJlZnMucHJvY2Vzcy5zdHlsZS53aWR0aD10K1wicHhcIix0aGlzLiRyZWZzLnByb2Nlc3Muc3R5bGUubGVmdD0wfSxzZXRUcmFuc2l0aW9uVGltZTpmdW5jdGlvbih0KXt0aGlzLnNsaWRlci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb249dCtcInNcIix0aGlzLnNsaWRlci5zdHlsZS5XZWJraXRUcmFuc2l0aW9uRHVyYXRpb249dCtcInNcIix0aGlzLiRyZWZzLnByb2Nlc3Muc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uPXQrXCJzXCIsdGhpcy4kcmVmcy5wcm9jZXNzLnN0eWxlLldlYmtpdFRyYW5zaXRpb25EdXJhdGlvbj10K1wic1wifSxsaW1pdFZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYodGhpcy5kYXRhKXJldHVybiB0O3ZhciBpO3JldHVybihpPXQpPGUubWluPyhlLnByaW50RXJyb3IoXCJbVnVlU2xpZGVCYXIgd2Fybl06IFRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGlzIFwiK3QrXCIsIHRoZSBtaW5pbXVtIHZhbHVlIGlzIFwiK2UubWluK1wiLCB0aGUgdmFsdWUgb2YgdGhpcyBzbGlkZXIgY2FuIG5vdCBiZSBsZXNzIHRoYW4gdGhlIG1pbmltdW0gdmFsdWVcIiksZS5taW4pOmk+ZS5tYXg/KGUucHJpbnRFcnJvcihcIltWdWVTbGlkZUJhciB3YXJuXTogVGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgaXMgXCIrdCtcIiwgdGhlIG1heGltdW0gdmFsdWUgaXMgXCIrZS5tYXgrXCIsIHRoZSB2YWx1ZSBvZiB0aGlzIHNsaWRlciBjYW4gbm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbWF4aW11bSB2YWx1ZVwiKSxlLm1heCk6aX0sc3luY1ZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWw7dGhpcy5yYW5nZSYmdGhpcy4kZW1pdChcImNhbGxiYWNrUmFuZ2VcIix0aGlzLnJhbmdlW3RoaXMuY3VycmVudEluZGV4XSksdGhpcy4kZW1pdChcImlucHV0XCIsdCl9LGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsfSxnZXRJbmRleDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRJbmRleH0sZ2V0U3RhdGljRGF0YTpmdW5jdGlvbigpe3RoaXMuJHJlZnMuZWxlbSYmKHRoaXMuc2l6ZT10aGlzLiRyZWZzLmVsZW0ub2Zmc2V0V2lkdGgsdGhpcy5vZmZzZXQ9dGhpcy4kcmVmcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5lbGVtJiYodGhpcy5nZXRTdGF0aWNEYXRhKCksdGhpcy5zZXRQb3NpdGlvbigpKX0scHJpbnRFcnJvcjpmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKHQpfX0sbW91bnRlZDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYodGhpcy5pc0NvbXBvbmVudEV4aXN0cz0hMCxcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIHRoaXMucHJpbnRFcnJvcihcIltWdWVTbGlkZUJhciBlcnJvcl06IHdpbmRvdyBvciBkb2N1bWVudCBpcyB1bmRlZmluZWQsIGNhbiBub3QgYmUgaW5pdGlhbGl6YXRpb24uXCIpO3RoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCl7dC5pc0NvbXBvbmVudEV4aXN0cyYmKHQuZ2V0U3RhdGljRGF0YSgpLHQuc2V0VmFsdWUodC5saW1pdFZhbHVlKHQudmFsdWUpLDApLHQuYmluZEV2ZW50cygpKX0pfSxiZWZvcmVEZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5pc0NvbXBvbmVudEV4aXN0cz0hMSx0aGlzLnVuYmluZEV2ZW50cygpfX19KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1zbGlkZS1iYXIubWluLmpzLm1hcFxuIiwidmFyIGluc2VydGVkID0gZXhwb3J0cy5jYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZXhwb3J0cy5pbnNlcnQgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm4gbm9vcFxuICBpbnNlcnRlZFtjc3NdID0gdHJ1ZVxuXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpXG5cbiAgaWYgKCd0ZXh0Q29udGVudCcgaW4gZWxlbSkge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChlbGVtKVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICBpbnNlcnRlZFtjc3NdID0gZmFsc2VcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCJcbiAgICAgICB2LWNsb2FrPlxuICAgIDxtZC1hcHAgbWQtd2F0ZXJmYWxsXG4gICAgICAgICAgICBtZC1tb2RlPVwiZml4ZWRcIj5cbiAgICAgIDxtZC1hcHAtdG9vbGJhciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cbiAgICAgICAgPHNwaW5hbEhlYWRlciB2LW1vZGVsPVwibWVudVZpc2libGVcIiAvPlxuICAgICAgPC9tZC1hcHAtdG9vbGJhcj5cbiAgICAgIDxtZC1hcHAtZHJhd2VyIGNsYXNzPVwibWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgOm1kLWFjdGl2ZS5zeW5jPVwibWVudVZpc2libGVcIj5cbiAgICAgICAgPFNwaW5hbFJpZ2h0U2lkZUJhciB2LW1vZGVsPVwibWVudVZpc2libGVcIi8+XG4gICAgICA8L21kLWFwcC1kcmF3ZXI+XG5cbiAgICAgIDxtZC1hcHAtY29udGVudD5cbiAgICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgICA8L21kLWFwcC1jb250ZW50PlxuICAgIDwvbWQtYXBwPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWxIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL1NwaW5hbEhlYWRlci52dWVcIjtcbmltcG9ydCBTcGluYWxSaWdodFNpZGVCYXIgZnJvbSBcIi4vUmlnaHRTaWRlQmFyL1NwaW5hbFJpZ2h0U2lkZUJhci52dWVcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9NYWluQ29udGVudC9NYWluQ29udGVudC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZW51VmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICB9LFxuICAvLyBjb21wdXRlZDoge1xuICAvLyAgIG1lbnVWaXNpYmxlOiB7XG4gIC8vICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZU9icztcbiAgLy8gICAgIH0sXG4gIC8vICAgICBzZXQ6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gIC8vICAgICAgIEhlYWRlckN0cmwuc2V0Vmlld01lbnUobmV3VmFsdWUpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyB2YXIgdm0gPSB0aGlzO1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gdGhpcy4kc3Vic2NyaWJlVG8oSGVhZGVyQ3RybC5nZXRPYnNlcnZhYmxlKCksIGZ1bmN0aW9uKHZhbCkge1xuICAgIC8vICAgdm0ubWVudVZpc2libGVPYnMgPSB2YWw7XG4gICAgLy8gfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZVNpZGViYXIoKSB7XG4gICAgICB0aGlzLm1lbnVWaXNpYmxlID0gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50czogeyBzcGluYWxIZWFkZXIsIFNwaW5hbFJpZ2h0U2lkZUJhciwgTWFpbkNvbnRlbnQgfVxufTs8L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcHAgLm1kLWFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYXBwLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5tZC1hcHAtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbjwvc3R5bGU+XG48c3R5bGU+XG4ubWQtYXBwLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRm9yZ2VDb250ZW50XCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIFZ1ZS5wcm90b3R5cGUuJEZvcmdlVmlld2VyLnN0YXJ0X3ZpZXdlcih0aGlzLiRlbCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsImNsYXNzIEZvcmdlRXh0ZW50aW9uTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXh0ZW50aW9ucyA9IFtdO1xuICB9XG5cbiAgZ2V0RXh0ZW50aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnRpb25zO1xuICB9XG5cbiAgYWRkRXh0ZW50aW9uKG5hbWUpIHtcbiAgICB0aGlzLmV4dGVudGlvbnMucHVzaChuYW1lKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyO1xuIiwiaW1wb3J0IHRyYW5zZm9ybU1vZGVsIGZyb20gXCIuL3RyYW5zZm9ybU1vZGVsLmpzXCI7XG5jb25zdCBRID0gcmVxdWlyZShcInFcIik7XG5cbmNsYXNzIEZvcmdlVmlld2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aWV3ZXI7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBlbnY6IFwiTG9jYWxcIixcbiAgICAgIGRvY2lkOiBcIlwiLFxuICAgICAgdXNlQURQOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5kb2NzID0gW107XG4gICAgd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuYWRkRXh0ZW50aW9uKFxuICAgICAgXCJBdXRvZGVzay5BRE4uVmlld2luZy5FeHRlbnNpb24uQ29sb3JcIlxuICAgICk7XG4gICAgdGhpcy5yZHkgPSBRLmRlZmVyKCk7XG4gIH1cblxuICBsb2FkTW9kZWwoZG9jKSB7XG4gICAgbGV0IHBhdGggPSBkb2MucGF0aDtcbiAgICBpZiAoXG4gICAgICBkb2MucGF0aC5pbmRleE9mKFwiaHR0cDovL1wiKSAhPT0gMCAmJlxuICAgICAgZG9jLnBhdGguaW5kZXhPZihcImh0dHBzOi8vXCIpICE9PSAwXG4gICAgKSB7XG4gICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGRvYy5wYXRoO1xuICAgIH1cblxuICAgIGRvYy5sb2FkZWQgPSB0cnVlO1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLmNvbmZpZztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgX29uR2VvbWV0cnlMb2FkZWQgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMudmlld2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuR0VPTUVUUllfTE9BREVEX0VWRU5ULFxuICAgICAgICAgIF9vbkdlb21ldHJ5TG9hZGVkXG4gICAgICAgICk7XG4gICAgICAgIGRvYy5tb2RlbCA9IGV2ZW50Lm1vZGVsO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShldmVudC5tb2RlbCk7XG4gICAgICB9O1xuICAgICAgdGhpcy52aWV3ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuR0VPTUVUUllfTE9BREVEX0VWRU5ULFxuICAgICAgICBfb25HZW9tZXRyeUxvYWRlZFxuICAgICAgKTtcblxuICAgICAgdGhpcy52aWV3ZXIubG9hZE1vZGVsKFxuICAgICAgICBwYXRoLFxuICAgICAgICBvcHRzLFxuICAgICAgICAoKSA9PiB7fSxcbiAgICAgICAgKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlLCBzdGF0dXNDb2RlLCBzdGF0dXNUZXh0KSA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIHdpbmRvdy5BdXRvZGVzay5WaWV3aW5nLkdFT01FVFJZX0xPQURFRF9FVkVOVCxcbiAgICAgICAgICAgIF9vbkdlb21ldHJ5TG9hZGVkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgZXJyb3JDb2RlOiBlcnJvckNvZGUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtTW9kZWwoZG9jLCB0cnVlKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNoZWNrQ2hlY2tDdXJyZW50TW9kZWwoKSk7XG4gIH1cbiAgdW5sb2FkTW9kZWwoZG9jKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgbW9kZWwgPSBkb2MubW9kZWw7XG4gICAgICBkb2MubG9hZGVkID0gZmFsc2U7XG4gICAgICBkb2MubW9kZWwgPSBudWxsO1xuICAgICAgdGhpcy52aWV3ZXIuaW1wbC51bmxvYWRNb2RlbChtb2RlbCk7XG4gICAgICB0aGlzLnZpZXdlci5pbXBsLnNjZW5lVXBkYXRlZCh0cnVlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KS50aGVuKCgpID0+IHRoaXMuY2hlY2tDaGVja0N1cnJlbnRNb2RlbCgpKTtcbiAgfVxuICBfc2V0Q3VycmVudE1vZGVsKG1vZGVsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy52aWV3ZXIubW9kZWwgPSBtb2RlbDtcbiAgICAgIHZhciBwcm9wZXJ0eVBhbmVsID0gdGhpcy52aWV3ZXIuZ2V0UHJvcGVydHlQYW5lbCh0cnVlKTtcbiAgICAgIHByb3BlcnR5UGFuZWwuY3VycmVudE1vZGVsID0gbW9kZWw7XG4gICAgICBtb2RlbC5nZXRPYmplY3RUcmVlKGluc3RhbmNlVHJlZSA9PiB7XG4gICAgICAgIHRoaXMudmlld2VyLm1vZGVsc3RydWN0dXJlLnNldE1vZGVsKGluc3RhbmNlVHJlZSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHNldEN1cnJlbnRNb2RlbChtb2RlbCkge1xuICAgIHJldHVybiB0aGlzLl9zZXRDdXJyZW50TW9kZWwuY2FsbCh0aGlzLCBtb2RlbCk7XG4gIH1cbiAgZml0VG9WaWV3KG9iamVjdElkcywgbW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXIuZml0VG9WaWV3KG9iamVjdElkcywgbW9kZWwpO1xuICB9XG4gIGNoZWNrQ2hlY2tDdXJyZW50TW9kZWwoKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZG9jcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmRvY3NbaW5kZXhdLm1vZGVsID09PSB0aGlzLnZpZXdlci5tb2RlbCkgZm91bmQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kb2NzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAodGhpcy5kb2NzW2luZGV4XS5sb2FkZWQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9zZXRDdXJyZW50TW9kZWwodGhpcy5kb2NzW2luZGV4XS5tb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Eb2N1bWVudExvYWRGYWlsdXJlKHZpZXdlckVycm9yQ29kZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJvbkRvY3VtZW50TG9hZEZhaWx1cmUoKSAtIGVycm9yQ29kZTpcIiArIHZpZXdlckVycm9yQ29kZSk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkU3VjY2VzcygpIHtcbiAgICBsZXQgZXh0ZW5zaW9ucyA9IHdpbmRvdy5zcGluYWwuRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmdldEV4dGVudGlvbnMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudmlld2VyLmxvYWRFeHRlbnNpb24oZXh0ZW5zaW9uc1tpXSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBzdGFydF92aWV3ZXIoZG9tKSB7XG4gICAgd2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW1cbiAgICAgIC5nZXRNb2RlbCgpXG4gICAgICAudGhlbihmb3JnZWZpbGUgPT4ge1xuICAgICAgICB0aGlzLmZvcmdlRmlsZSA9IGZvcmdlZmlsZTtcbiAgICAgICAgdGhpcy5kb2NzID0gdGhpcy5mb3JnZUZpbGUuX2NoaWxkcmVuLmdldCgpO1xuICAgICAgICBjb25zdCBpdGVtVG9Mb2FkID0gW107XG4gICAgICAgIGlmICh0aGlzLmRvY3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICB2YXIgcGF0aCA9IHRoaXMuZG9jc1swXS5wYXRoO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRvY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvY3NbaV0ubG9hZGVkICE9PSB0cnVlKSB0aGlzLmRvY3NbaV0ubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbVRvTG9hZC5wdXNoKHRoaXMuZG9jc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpdGVtVG9Mb2FkLmxlbmd0aCA9PT0gMCkgaXRlbVRvTG9hZC5wdXNoKHRoaXMuZG9jc1swXSk7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZG9jcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKC8uK1xcLnN2ZiQvLnRlc3QodGhpcy5kb2NzW2ldLnBhdGgpKSB7XG4gICAgICAgICAgICAgIHBhdGggPSB0aGlzLmRvY3NbaV0ucGF0aDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCJodHRwOi8vXCIpICE9PSAwICYmIHBhdGguaW5kZXhPZihcImh0dHBzOi8vXCIpICE9PSAwKSB7XG4gICAgICAgICAgICBwYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IHdpbmRvdy5BdXRvZGVzay5WaWV3aW5nLlByaXZhdGUuR3VpVmlld2VyM0QoXG4gICAgICAgICAgZG9tLFxuICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7IC8vIFdpdGggdG9vbGJhclxuICAgICAgICB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5Jbml0aWFsaXplcih0aGlzLm9wdGlvbnMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdlci5pbml0aWFsaXplKCk7XG4gICAgICAgICAgdGhpcy5vbkl0ZW1Mb2FkU3VjY2VzcygpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1Ub0xvYWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaXRlbVRvTG9hZFtpbmRleF07XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkTW9kZWwoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmR5LnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVhbE1vZGVsSXRlbShpdGVtKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZm9yZ2VGaWxlLl9jaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZvcmdlRmlsZS5fY2hpbGRyZW5baW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQubmFtZS5nZXQoKSA9PT0gaXRlbS5uYW1lKSByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLmdldFJlYWxNb2RlbEl0ZW0oaXRlbSk7XG4gICAgaWYgKG1vZGVsID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09IFwibW9kZWxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1ba2V5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmICh0eXBlb2YgbW9kZWxba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbW9kZWwuYWRkX2F0dHIoe1xuICAgICAgICAgICAgICBba2V5XTogaXRlbVtrZXldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleU9iamV0IGluIGl0ZW1ba2V5XSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldLmhhc093blByb3BlcnR5KGtleU9iamV0KSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbFtrZXldW2tleU9iamV0XS5zZXQoaXRlbVtrZXldW2tleU9iamV0XSkpXG4gICAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RlbFtrZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtb2RlbC5hZGRfYXR0cih7XG4gICAgICAgICAgICAgIFtrZXldOiBpdGVtW2tleV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1vZGVsW2tleV0uc2V0KGl0ZW1ba2V5XSkpIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFuZ2U7XG4gIH1cblxuICB0cmFuc2Zvcm1Nb2RlbChpdGVtLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5nZXRSZWFsTW9kZWxJdGVtKGl0ZW0pO1xuXG4gICAgaWYgKChmb3JjZSA9PT0gdHJ1ZSAmJiBpdGVtKSB8fCB0aGlzLnVwZGF0ZUl0ZW0oaXRlbSkgPT09IHRydWUpXG4gICAgICByZXR1cm4gdHJhbnNmb3JtTW9kZWwodGhpcy52aWV3ZXIsIGl0ZW0ubW9kZWwsIG1vZGVsKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbi8vICgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JnZVZpZXdlcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIj5cbiAgICA8Zm9yZ2UtY29udGVudCAvPlxuICAgIDxtb2RlbC1leHBsb3JlciBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBGb3JnZUNvbnRlbnQgZnJvbSBcIi4vRm9yZ2VDb250ZW50LnZ1ZVwiO1xuaW1wb3J0IE1vZGVsRXhwbG9yZXIgZnJvbSBcIi4vTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImFwcFwiLFxuICBjb21wb25lbnRzOiB7IEZvcmdlQ29udGVudCwgTW9kZWxFeHBsb3JlciB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbW91bnRlZCgpIHt9XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLW9wbi1idG5cIlxuICAgICAgICAgICAgIHYtdG9vbHRpcD1cImxhYmVsXCJcbiAgICAgICAgICAgICBAY2xpY2s9XCJvbkNsaWNrTW9kZWxFeHBsb3JlclwiPlxuICAgIDxtZC1pY29uIGNsYXNzPVwibWQtc21hbGxcIj5sYXllcnM8L21kLWljb24+XG4gICAgPHRyYW5zaXRpb24gdi1iaW5kOmNzcz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB2LW9uOmJlZm9yZS1lbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICAgICAgICAgICAgICB2LW9uOmVudGVyPVwiZW50ZXJcIlxuICAgICAgICAgICAgICAgIHYtb246bGVhdmU9XCJsZWF2ZVwiPlxuICAgICAgPHNwYW4gdi1zaG93PWNvbXB1dGVkVmFsdWU+e3tsYWJlbH19PC9zcGFuPlxuICAgIDwvdHJhbnNpdGlvbj5cbiAgPC9tZC1idXR0b24+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcInZlbG9jaXR5LWFuaW1hdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkJ0bkljb25MYWJlbFRyYW5zaXRpb25cIixcbiAgcHJvcHM6IFtcInZhbHVlXCIsIFwibGFiZWxcIiwgXCJpY29uXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja01vZGVsRXhwbG9yZXIoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgIXRoaXMuY29tcHV0ZWRWYWx1ZSk7XG4gICAgfSxcbiAgICBiZWZvcmVFbnRlcjogZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgZWwuc3R5bGUud2lkdGggPSAwO1xuICAgIH0sXG4gICAgZW50ZXI6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMSwgd2lkdGg6IFwiMTAwJVwiIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMCwgd2lkdGg6IFwiMHB4XCIgfSwgeyBjb21wbGV0ZTogZG9uZSB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIC8vIHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIubG9hZE1vZGVsLmNhbGwod2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlciwgd2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlci5kb2NzWzFdLnBhdGgpXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItb3BuLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNkOTMgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItY29udGFpbmVyIG5vc2VsZWN0XCI+XG4gICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXJcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWhpZGRlbic6IWlzTGlzdFNob3dufVwiPlxuICAgICAgPGJ0bi1pY29uLWxhYmVsLXRyYW5zaXRpb24gc3R5bGU9XCJ3aWR0aDoxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpc0xpc3RTaG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIidsYXllcnMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImxhYmVsQnRuXCIgLz5cbiAgICAgIDxtb2RlbC1leHBsb3Jlci1saXN0IDpsaXN0PVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAb25Nb2RlbFNlbGVjdD1cIm9uTW9kZWxTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9uTW9kZWxDaGVja1NlbGVjdD1cIm9uTW9kZWxDaGVja1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAb25Nb2RlbFZpc2liaWxpdHlTZWxlY3Q9XCJvbk1vZGVsVmlzaWJpbGl0eVNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAb25Nb2RlbEV4cGxvcmVyU2V0dGluZ3NTZWxlY3Q9XCJvbk1vZGVsRXhwbG9yZXJTZXR0aW5nc1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvdz1cImlzTGlzdFNob3duXCI+PC9tb2RlbC1leHBsb3Jlci1saXN0PlxuICAgIDwvbWQtY29udGVudD5cbiAgICA8bW9kZWwtZXhwbG9yZXItc2V0dGluZ3MgY2xhc3M9XCJtb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAb25VcGRhdGVTZXR0aW5nPVwib25VcGRhdGVTZXR0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW09XCJzZWxlY3RlZE5vZGVTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImNvbXB1dGVkSXNTZXR0aW5nU2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImlzU2V0dGluZ1Nob3cgPSAkZXZlbnRcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTW9kZWxFeHBsb3Jlckxpc3QgZnJvbSBcIi4vTW9kZWxFeHBsb3Jlckxpc3QudnVlXCI7XG5pbXBvcnQgQnRuSWNvbkxhYmVsVHJhbnNpdGlvbiBmcm9tIFwiLi9CdG5JY29uTGFiZWxUcmFuc2l0aW9uLnZ1ZVwiO1xuaW1wb3J0IE1vZGVsRXhwbG9yZXJTZXJ2aWNlIGZyb20gXCIuL01vZGVsRXhwbG9yZXJTZXJ2aWNlLmpzXCI7XG5cbmltcG9ydCBNb2RlbEV4cGxvcmVyU2V0dGluZ3MgZnJvbSBcIi4vTW9kZWxFeHBsb3JlclNldHRpbmdzL01vZGVsRXhwbG9yZXJTZXR0aW5ncy52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJcIixcbiAgZGF0YSgpIHtcbiAgICB0aGlzLkZvcmdlVmlld2VyID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWxCdG46IFwiTW9kZWwgRXhwbG9yZXJcIixcbiAgICAgIGlzTGlzdFNob3duOiBmYWxzZSxcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgc2VsZWN0ZWROb2RlU2V0dGluZ3M6IG51bGwsXG4gICAgICBpc1NldHRpbmdTaG93OiBmYWxzZSAvLyBERUJVRyBDSEFOR0UgVE8gRkFMU0UgT04gUkVMRUFTRVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNb2RlbEV4cGxvcmVyTGlzdCxcbiAgICBCdG5JY29uTGFiZWxUcmFuc2l0aW9uLFxuICAgIE1vZGVsRXhwbG9yZXJTZXR0aW5nc1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSXNTZXR0aW5nU2hvdygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaXNTZXR0aW5nU2hvdyA9PSB0cnVlICYmXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlU2V0dGluZ3MgIT09IG51bGwgJiZcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVTZXR0aW5ncy5sb2FkZWQgPT0gdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vZGVsU2VsZWN0KGl0ZW0pIHtcbiAgICAgIE1vZGVsRXhwbG9yZXJTZXJ2aWNlLnRvb2dsZVZpZXcoaXRlbSk7XG4gICAgfSxcbiAgICBvbk1vZGVsQ2hlY2tTZWxlY3QoaXRlbSkge1xuICAgICAgTW9kZWxFeHBsb3JlclNlcnZpY2Uuc2V0Q3VycmVudE1vZGVsKGl0ZW0pO1xuICAgIH0sXG4gICAgb25Nb2RlbFZpc2liaWxpdHlTZWxlY3QoaXRlbSkge1xuICAgICAgTW9kZWxFeHBsb3JlclNlcnZpY2Uuc2VsZWN0TW9kZWwoaXRlbSk7XG4gICAgfSxcbiAgICBvbk1vZGVsRXhwbG9yZXJTZXR0aW5nc1NlbGVjdChpdGVtKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNTZXR0aW5nU2hvdyA9PT0gZmFsc2UgfHxcbiAgICAgICAgKHRoaXMuaXNTZXR0aW5nU2hvdyA9PT0gdHJ1ZSAmJiB0aGlzLnNlbGVjdGVkTm9kZVNldHRpbmdzICE9PSBpdGVtKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlU2V0dGluZ3MgPSBpdGVtO1xuICAgICAgICB0aGlzLmlzU2V0dGluZ1Nob3cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVTZXR0aW5ncyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nU2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25VcGRhdGVTZXR0aW5nKGl0ZW0sIHRyYW5zbGF0ZSwgcm90YXRlLCBzY2FsZSkge1xuICAgICAgaXRlbS50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICBpdGVtLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICAgIGl0ZW0uc2NhbGUgPSBzY2FsZTtcblxuICAgICAgTW9kZWxFeHBsb3JlclNlcnZpY2UudHJhbnNmb3JtTW9kZWwoaXRlbSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIE1vZGVsRXhwbG9yZXJTZXJ2aWNlLmdldE1vZGVsTGlzdCgpXG4gICAgICAudGhlbihsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3JlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNkOTM7XG59XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWhpZGRlbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItb3BuLWJ0biB7XG4gIG1hcmdpbjogMHB4IDA7XG4gIG1pbi13aWR0aDogMjBweDtcbn1cbi5tb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbjwvc3R5bGU+XG5cbjxzdHlsZT5cbi5zbGlkZS1mYWRlLWVudGVyLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbi5zbGlkZS1mYWRlLWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjhzO1xufVxuLnNsaWRlLWZhZGUtZW50ZXIsIC5zbGlkZS1mYWRlLWxlYXZlLXRvXG4vKiAuc2xpZGUtZmFkZS1sZWF2ZS1hY3RpdmUgYmVsb3cgdmVyc2lvbiAyLjEuOCAqLyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHAgdi1pZj1cInNob3cgJiYgbGlzdC5sZW5ndGggPT09IDBcIlxuICAgICAgIGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9wPlxuXG4gICAgPHRyYW5zaXRpb24tZ3JvdXAgdGFnPVwibWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1iaW5kOmNzcz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW9uOmJlZm9yZS1lbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW9uOmVudGVyPVwiZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtb246bGVhdmU9XCJsZWF2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdCBtZC1zY3JvbGxiYXJcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1kLWJ1dHRvbiBzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3dcIlxuICAgICAgICAgICB2LXNob3c9XCJzaG93XCJcbiAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaWR4KSBpbiBsaXN0XCJcbiAgICAgICAgICAgOmtleT1cImlkeFwiXG4gICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdvbk1vZGVsU2VsZWN0JywgaXRlbSwgaWR4KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWxhYmVsXCJcbiAgICAgICAgICAgICB2LXRvb2x0aXAuYXV0by1lbmQ9XCJ7Y29udGVudDogaXRlbS5uYW1lLCBkZWxheTogNTAwfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWxhYmVsLXNwYW5cIj57e2l0ZW0ubmFtZX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSA8ZGl2IHYtaWY9XCJpdGVtLmxvYWRlZCA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvblwiPiAtLT5cbiAgICAgICAgPCEtLSA8bWQtaWNvbiB2LXRvb2x0aXA9XCJ7Y29udGVudDonT3BlbiB0cmFuc2Zvcm0gc2V0dGluZ3MnLCBkZWxheTogNTAwfVwiXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiJGVtaXQoJ29uTW9kZWxFeHBsb3JlclNldHRpbmdzU2VsZWN0JywgaXRlbSwgaWR4KVwiPnNldHRpbmdzPC9tZC1pY29uPiAtLT5cbiAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XG4gICAgICAgIDxtZC1idXR0b24gdi1pZj1cIml0ZW0ubG9hZGVkID09PSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWljb24tYnV0dG9uIHNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdy1pY29uIHNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdy1pY29uLWZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXA9XCJ7Y29udGVudDonT3BlbiB0cmFuc2Zvcm0gc2V0dGluZ3MnLCBkZWxheTogNTAwfVwiXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiJGVtaXQoJ29uTW9kZWxFeHBsb3JlclNldHRpbmdzU2VsZWN0JywgaXRlbSwgaWR4KVwiPlxuICAgICAgICAgIDxtZC1pY29uPnNldHRpbmdzPC9tZC1pY29uPlxuICAgICAgICA8L21kLWJ1dHRvbj5cblxuICAgICAgICA8bWQtYnV0dG9uIHYtaWY9XCJpdGVtLmxvYWRlZCA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvblwiXG4gICAgICAgICAgICAgICAgICAgdi10b29sdGlwPVwie2NvbnRlbnQ6J1NlbGVjdCBhbmQgZml0IHRvIHZpZXcnLCBkZWxheTogNTAwfVwiXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiJGVtaXQoJ29uTW9kZWxWaXNpYmlsaXR5U2VsZWN0JywgaXRlbSwgaWR4KVwiPlxuICAgICAgICAgIDxtZC1pY29uPmdwc19maXhlZDwvbWQtaWNvbj5cbiAgICAgICAgPC9tZC1idXR0b24+XG4gICAgICAgIDxtZC1idXR0b24gdi1pZj1cIml0ZW0ubG9hZGVkID09PSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWljb24tYnV0dG9uIHNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdy1pY29uXCJcbiAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXA9XCJ7Y29udGVudDonT3BlbiB0cmFuc2Zvcm0gc2V0dGluZ3MnLCBkZWxheTogNTAwfVwiXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiJGVtaXQoJ29uTW9kZWxDaGVja1NlbGVjdCcsIGl0ZW0sIGlkeClcIj5cbiAgICAgICAgICA8bWQtaWNvbiA6c3R5bGU9XCJjaGVja1N0eWxlKGl0ZW0pXCI+Y2hlY2s8L21kLWljb24+XG4gICAgICAgIDwvbWQtYnV0dG9uPlxuXG4gICAgICAgIDwhLS0gPGRpdiB2LWlmPVwiaXRlbS5sb2FkZWQgPT09IHRydWVcIlxuICAgICAgICAgICAgIGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWljb25cIj5cbiAgICAgICAgICA8bWQtaWNvbiB2LXRvb2x0aXA9XCJ7Y29udGVudDonU2VsZWN0IGFuZCBmaXQgdG8gdmlldycsIGRlbGF5OiA1MDB9XCJcbiAgICAgICAgICAgICAgICAgICBAY2xpY2submF0aXZlLnN0b3A9XCIkZW1pdCgnb25Nb2RlbFZpc2liaWxpdHlTZWxlY3QnLCBpdGVtLCBpZHgpXCI+Z3BzX2ZpeGVkPC9tZC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5sb2FkZWQgPT09IHRydWVcIlxuICAgICAgICAgICAgIGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWljb25cIj5cbiAgICAgICAgICA8bWQtaWNvbiBAY2xpY2submF0aXZlLnN0b3A9XCIkZW1pdCgnb25Nb2RlbENoZWNrU2VsZWN0JywgaXRlbSwgaWR4KVwiXG4gICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiY2hlY2tTdHlsZShpdGVtKVwiPmNoZWNrPC9tZC1pY29uPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24tZ3JvdXA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcInZlbG9jaXR5LWFuaW1hdGVcIjtcbmltcG9ydCBNb2RlbEV4cGxvcmVyU2VydmljZSBmcm9tIFwiLi9Nb2RlbEV4cGxvcmVyU2VydmljZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTW9kZWxFeHBsb3Jlckxpc3RcIixcbiAgcHJvcHM6IFtcInNob3dcIiwgXCJsaXN0XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrU3R5bGUoaXRlbSkge1xuICAgICAgaWYgKE1vZGVsRXhwbG9yZXJTZXJ2aWNlLmlzQ3VycmVudE1vZGVsKGl0ZW0pID09PSB0cnVlKVxuICAgICAgICByZXR1cm4geyBjb2xvcjogXCIjRjY4MjA0XCIgfTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGJlZm9yZUVudGVyKGVsKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgfSxcbiAgICBlbnRlcihlbCwgZG9uZSkge1xuICAgICAgdmFyIGRlbGF5ID0gZWwuZGF0YXNldC5pbmRleCAqIDE1MDtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIFZlbG9jaXR5KGVsLCB7IG9wYWNpdHk6IDEsIGhlaWdodDogXCI0OHB4XCIgfSwgeyBjb21wbGV0ZTogZG9uZSB9KTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9LFxuICAgIGxlYXZlKGVsLCBkb25lKSB7XG4gICAgICB2YXIgZGVsYXkgPSBlbC5kYXRhc2V0LmluZGV4ICogMTUwO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMCwgaGVpZ2h0OiAwIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwOXB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFweDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3cgOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdyA6Zmlyc3QtY2hpbGQ6ZW1wdHkge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdyA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3cgOmxhc3QtY2hpbGQ6ZW1wdHkge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTZiYWI7XG59XG5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWljb24tZmlyc3Qge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWxhYmVsIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBwYWRkaW5nLXRvcDogMC45ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDE5NXB4O1xufVxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdy1sYWJlbC1zcGFuIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gZ2V0Rm9yZ2VWaWV3ZXIoKSB7XG4gIHJldHVybiB3aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyO1xufVxuXG5sZXQgaXNSZWFkeSA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldE1vZGVsTGlzdCgpIHtcbiAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgcmV0dXJuIGZvcmdlVmlld2VyLnJkeS5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgY29uc3QgZG9jcyA9IGZvcmdlVmlld2VyLmRvY3M7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3NbaW5kZXhdO1xuICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9KTtcbiAgfSxcblxuICB0b29nbGVWaWV3KGl0ZW0pIHtcbiAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgbGV0IHByb207XG4gICAgaWYgKGlzUmVhZHkgPT09IHRydWUpIHtcbiAgICAgIGlzUmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmIChpdGVtLmxvYWRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9tID0gZm9yZ2VWaWV3ZXIudW5sb2FkTW9kZWwuY2FsbChmb3JnZVZpZXdlciwgaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9tID0gZm9yZ2VWaWV3ZXIubG9hZE1vZGVsLmNhbGwoZm9yZ2VWaWV3ZXIsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgcHJvbS50aGVuKCgpID0+IHtcbiAgICAgICAgZm9yZ2VWaWV3ZXIudXBkYXRlSXRlbS5jYWxsKGZvcmdlVmlld2VyLCBpdGVtKTtcbiAgICAgICAgaXNSZWFkeSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaXNDdXJyZW50TW9kZWwoaXRlbSkge1xuICAgIGNvbnN0IGZvcmdlVmlld2VyID0gZ2V0Rm9yZ2VWaWV3ZXIoKTtcbiAgICByZXR1cm4gZm9yZ2VWaWV3ZXIudmlld2VyLm1vZGVsID09PSBpdGVtLm1vZGVsO1xuICB9LFxuICBzZXRDdXJyZW50TW9kZWwoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzQ3VycmVudE1vZGVsKGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgICBmb3JnZVZpZXdlci5zZXRDdXJyZW50TW9kZWwuY2FsbChmb3JnZVZpZXdlciwgaXRlbS5tb2RlbCk7XG4gICAgfVxuICB9LFxuXG4gIHNlbGVjdE1vZGVsKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSAmJiBpdGVtLmxvYWRlZCA9PT0gdHJ1ZSAmJiBpdGVtLm1vZGVsKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpdGVtLm1vZGVsLnNlbGVjdG9yLnNldFNlbGVjdGlvbihcbiAgICAgICAgWzFdLFxuICAgICAgICB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5TZWxlY3Rpb25Nb2RlLkZJUlNUX09CSkVDVFxuICAgICAgKTtcbiAgICAgIHRoaXMuZml0VG9WaWV3KFsxXSwgaXRlbS5tb2RlbCk7XG4gICAgfVxuICB9LFxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgZm9yZ2VWaWV3ZXIudmlld2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH0sXG4gIGZpdFRvVmlldyhvYmplY3RJZHMsIG1vZGVsKSB7XG4gICAgY29uc3QgZm9yZ2VWaWV3ZXIgPSBnZXRGb3JnZVZpZXdlcigpO1xuICAgIGZvcmdlVmlld2VyLmZpdFRvVmlldyhvYmplY3RJZHMsIG1vZGVsKTtcbiAgfSxcblxuICB0cmFuc2Zvcm1Nb2RlbChtb2RlbCkge1xuICAgIGNvbnN0IGZvcmdlVmlld2VyID0gZ2V0Rm9yZ2VWaWV3ZXIoKTtcbiAgICBmb3JnZVZpZXdlci50cmFuc2Zvcm1Nb2RlbChtb2RlbCk7XG4gIH1cbn07XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLWJsb2NrM2QtbGFiZWxcIj57e2xhYmVsfX08L2Rpdj5cbiAgICA8dGFibGU+XG4gICAgICA8c2xpZGVyTGFiZWwgOmxhYmVsPVwiJ3gnXCJcbiAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRfeFwiXG4gICAgICAgICAgICAgICAgICAgOm1pbj1taW5cbiAgICAgICAgICAgICAgICAgICA6bWF4PW1heD5cbiAgICAgIDwvc2xpZGVyTGFiZWw+XG4gICAgICA8c2xpZGVyTGFiZWwgOmxhYmVsPVwiJ3knXCJcbiAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRfeVwiXG4gICAgICAgICAgICAgICAgICAgOm1pbj1taW5cbiAgICAgICAgICAgICAgICAgICA6bWF4PW1heD5cbiAgICAgIDwvc2xpZGVyTGFiZWw+XG4gICAgICA8c2xpZGVyTGFiZWwgOmxhYmVsPVwiJ3onXCJcbiAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRfelwiXG4gICAgICAgICAgICAgICAgICAgOm1pbj1taW5cbiAgICAgICAgICAgICAgICAgICA6bWF4PW1heD5cbiAgICAgIDwvc2xpZGVyTGFiZWw+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3QgZGVib3VuY2UgPSByZXF1aXJlKFwibG9kYXNoLmRlYm91bmNlXCIpO1xuaW1wb3J0IHNsaWRlckxhYmVsIGZyb20gXCIuL3NsaWRlckxhYmVsLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQmxvY2szRFwiLFxuICBwcm9wczogW1widmFsdWVcIiwgXCJsYWJlbFwiLCBcIm1pblwiLCBcIm1heFwiXSxcbiAgY29tcG9uZW50czogeyBzbGlkZXJMYWJlbCB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXA6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRfeDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS54IHx8IDA7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICB0aGlzLnRtcC54ID0gbmV3VmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZWJpbmRlZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRfeToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS55IHx8IDA7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICB0aGlzLnRtcC55ID0gbmV3VmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZWJpbmRlZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRfejoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS56IHx8IDA7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbCkge1xuICAgICAgICB0aGlzLnRtcC56ID0gbmV3VmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZWJpbmRlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB0aGlzLnRtcCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMudXBkYXRlYmluZGVkID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSwgNTAwKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ubW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtYmxvY2szZC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHRyYW5zaXRpb24gdi1iaW5kOmNzcz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgdi1vbjpiZWZvcmUtZW50ZXI9XCJiZWZvcmVFbnRlclwiXG4gICAgICAgICAgICAgIHYtb246ZW50ZXI9XCJlbnRlclwiXG4gICAgICAgICAgICAgIHYtb246bGVhdmU9XCJsZWF2ZVwiPlxuICAgIDxkaXYgdi1pZj1cImNvbXB1dGVkU2hvd1wiPlxuICAgICAgPG1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLWhlYWRlciBzdHlsZT1cIndpZHRoOjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIidzZXR0aW5ncydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRTaG93XCIgLz5cbiAgICAgIDxtZC1jb250ZW50IGNsYXNzPVwibW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtdHJhbnNmb3JtLWNvbnRhaW5lciBtZC1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLXNjYWxlLWxhYmVsXCI+c2NhbGU8L2Rpdj5cbiAgICAgICAgPHNsaWRlckxhYmVsIHJlZj1cInNjYWxlYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJ3NjYWxlJ1wiXG4gICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJvblVwZGF0ZVNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgIDptaW49MFxuICAgICAgICAgICAgICAgICAgICAgOm1heD0zMDA+XG4gICAgICAgIDwvc2xpZGVyTGFiZWw+XG4gICAgICAgIDxCbG9jazNEIHJlZj1cInRyYW5zbGF0ZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgQGlucHV0PVwib25VcGRhdGUzZGJsb2NrKCRldmVudCwgdHJhbnNsYXRlKVwiXG4gICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgIDpsYWJlbD1cIid0cmFuc2xhdGUnXCJcbiAgICAgICAgICAgICAgICAgOm1pbj0tMTAwMFxuICAgICAgICAgICAgICAgICA6bWF4PTEwMDA+PC9CbG9jazNEPlxuICAgICAgICA8QmxvY2szRCBAaW5wdXQ9XCJvblVwZGF0ZTNkYmxvY2soJGV2ZW50LCByb3RhdGUpXCJcbiAgICAgICAgICAgICAgICAgOnZhbHVlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJ3JvdGF0ZSdcIlxuICAgICAgICAgICAgICAgICA6bWluPS0xODBcbiAgICAgICAgICAgICAgICAgOm1heD0xODA+PC9CbG9jazNEPlxuXG4gICAgICA8L21kLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcInZlbG9jaXR5LWFuaW1hdGVcIjtcbmltcG9ydCBNb2RlbEV4cGxvcmVyU2V0dGluZ3NIZWFkZXIgZnJvbSBcIi4vTW9kZWxFeHBsb3JlclNldHRpbmdzSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IHNsaWRlckxhYmVsIGZyb20gXCIuL3NsaWRlckxhYmVsLnZ1ZVwiO1xuaW1wb3J0IEJsb2NrM0QgZnJvbSBcIi4vQmxvY2szRC52dWVcIjtcbmNvbnN0IGRlYm91bmNlID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJTZXR0aW5nc1wiLFxuICBjb21wb25lbnRzOiB7IE1vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlciwgc2xpZGVyTGFiZWwsIEJsb2NrM0QgfSxcbiAgcHJvcHM6IFtcInZhbHVlXCIsIFwiaXRlbVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH0sXG4gICAgICByb3RhdGU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAxMDBcbiAgICB9O1xuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbShvYmopIHtcbiAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICBpZiAob2JqLnRyYW5zbGF0ZSlcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICAgIHg6IG9iai50cmFuc2xhdGUueCxcbiAgICAgICAgICAgIHk6IG9iai50cmFuc2xhdGUueSxcbiAgICAgICAgICAgIHo6IG9iai50cmFuc2xhdGUuelxuICAgICAgICAgIH07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgejogMFxuICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9iai5yb3RhdGUpXG4gICAgICAgICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAgICAgICB4OiBvYmoucm90YXRlLngsXG4gICAgICAgICAgICB5OiBvYmoucm90YXRlLnksXG4gICAgICAgICAgICB6OiBvYmoucm90YXRlLnpcbiAgICAgICAgICB9O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHo6IDBcbiAgICAgICAgICB9O1xuICAgICAgICBpZiAob2JqLnNjYWxlKSB7XG4gICAgICAgICAgdGhpcy5zY2FsZSA9IG9iai5zY2FsZSAqIDEwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjYWxlID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLiRyZWZzLnRyYW5zbGF0ZWJsb2NrLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAvLyAgIHRoaXMuJHJlZnMuc2NhbGVibG9jay4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRTaG93OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHtcbiAgICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiZWZvcmVFbnRlcjogZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgZWwuc3R5bGUud2lkdGggPSAwO1xuICAgIH0sXG4gICAgZW50ZXI6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMSwgd2lkdGg6IFwiMTAwJVwiIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMCwgd2lkdGg6IFwiMHB4XCIgfSwgeyBjb21wbGV0ZTogZG9uZSB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSxcbiAgICBvblVwZGF0ZTNkYmxvY2soZXZ0LCBvYmopIHtcbiAgICAgIG9iai54ID0gZXZ0Lng7XG4gICAgICBvYmoueSA9IGV2dC55O1xuICAgICAgb2JqLnogPSBldnQuejtcbiAgICAgIHRoaXMub25VcGRhdGVEYXRhQmluZGVkKCk7XG4gICAgfSxcbiAgICBvblVwZGF0ZVNjYWxlKHZhbHVlKSB7XG4gICAgICB0aGlzLnNjYWxlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uVXBkYXRlRGF0YUJpbmRlZCgpO1xuICAgIH0sXG4gICAgb25VcGRhdGVEYXRhKCkge1xuICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgXCJvblVwZGF0ZVNldHRpbmdcIixcbiAgICAgICAgdGhpcy5pdGVtLFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSxcbiAgICAgICAgdGhpcy5yb3RhdGUsXG4gICAgICAgIHRoaXMuc2NhbGUgLyAxMDAuMFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5vblVwZGF0ZURhdGFCaW5kZWQgPSBkZWJvdW5jZSh0aGlzLm9uVXBkYXRlRGF0YS5iaW5kKHRoaXMpLCAyMDApO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtdHJhbnNmb3JtLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDhweCA1cHg7XG4gIHdpZHRoOiAyNzVweDtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwOXB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1zY2FsZS1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtYnRuXCJcbiAgICAgICAgICAgICB2LXRvb2x0aXA9XCJsYWJlbFwiXG4gICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja01vZGVsRXhwbG9yZXJcIj5cbiAgICA8c3Bhbj57e2xhYmVsfX08L3NwYW4+XG4gIDwvbWQtYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlclwiLFxuICBwcm9wczogW1widmFsdWVcIiwgXCJsYWJlbFwiLCBcImljb25cIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkVmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuICAgIGNvbXB1dGVkTGFiZWwoKSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCkgcmV0dXJuIHRoaXMubGFiZWw7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrTW9kZWxFeHBsb3JlcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCAhdGhpcy5jb21wdXRlZFZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkM2Q5MyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8dHIgY2xhc3M9XCJzbGlkZXJMYWJlbC1jb250YWluZXJcIj5cbiAgICA8dGQ+PHNwYW4+e3tsYWJlbH19Ojwvc3Bhbj48L3RkPlxuICAgIDx0ZCBjbGFzcz1cInNsaWRlckxhYmVsLXNsaWRlci1jZWxsXCI+XG4gICAgICA8VnVlU2xpZGVCYXIgcmVmPVwic2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDI4cHggOHB4IDA7XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNsaWRlckxhYmVsLXNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgOnBhZGRpbmdsZXNzPXRydWVcbiAgICAgICAgICAgICAgICAgICA6bGFiZWwtc3R5bGU9bGFiZWxTdHlsZVxuICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjb21wdXRlZFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICA6bWluPVwibWluXCJcbiAgICAgICAgICAgICAgICAgICA6bWF4PVwibWF4XCIgLz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiTnVtYmVyXCJcbiAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgOm1pbj1cIm1pblwiXG4gICAgICAgICAgICAgOm1heD1cIm1heFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzbGlkZXJMYWJlbC1pbnB1dFwiIC8+XG4gICAgPC90ZD5cbiAgPC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlU2xpZGVCYXIgZnJvbSBcInZ1ZS1zbGlkZS1iYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNsaWRlckxhYmVsXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiLCBcImxhYmVsXCIsIFwibWluXCIsIFwibWF4XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFZ1ZVNsaWRlQmFyXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRWYWx1ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy52YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5zbGlkZXJMYWJlbC1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zbGlkZXJMYWJlbC1pbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbi5zbGlkZXJMYWJlbC1zbGlkZXItY2VsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuPC9zdHlsZT5cblxuPHN0eWxlIHNjb3BlZD5cbi5xdWFudGl0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4ucXVhbnRpdHkgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5xdWFudGl0eSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5xdWFudGl0eS1uYXYge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5xdWFudGl0eS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICB3aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5xdWFudGl0eS1idXR0b24ucXVhbnRpdHktdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ucXVhbnRpdHktYnV0dG9uLnF1YW50aXR5LWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgaGVpZ2h0OiA1MCU7XG59XG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gZ2V0U2NhbGUoc2NhbGUpIHtcbiAgbGV0IHggPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcbiAgbGV0IHkgPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcbiAgbGV0IHogPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcblxuICByZXR1cm4gbmV3IHdpbmRvdy5USFJFRS5WZWN0b3IzKHgsIHksIHopO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvYmopIHtcbiAgbGV0IHggPSBpc05hTihvYmoueCkgPyAwLjAgOiBvYmoueDtcbiAgbGV0IHkgPSBpc05hTihvYmoueSkgPyAwLjAgOiBvYmoueTtcbiAgbGV0IHogPSBpc05hTihvYmoueikgPyAwLjAgOiBvYmouejtcblxuICByZXR1cm4gbmV3IHdpbmRvdy5USFJFRS5WZWN0b3IzKHgsIHksIHopO1xufVxuXG5mdW5jdGlvbiBnZXRSb3RhdGlvbihvYmopIHtcbiAgbGV0IHggPSBpc05hTihvYmoueCkgPyAwLjAgOiBvYmoueDtcbiAgbGV0IHkgPSBpc05hTihvYmoueSkgPyAwLjAgOiBvYmoueTtcbiAgbGV0IHogPSBpc05hTihvYmoueikgPyAwLjAgOiBvYmouejtcbiAgbGV0IGV1bGVyID0gbmV3IHdpbmRvdy5USFJFRS5FdWxlcihcbiAgICAoeCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICh5ICogTWF0aC5QSSkgLyAxODAsXG4gICAgKHogKiBNYXRoLlBJKSAvIDE4MCxcbiAgICBcIlhZWlwiXG4gICk7XG4gIGxldCBxID0gbmV3IHdpbmRvdy5USFJFRS5RdWF0ZXJuaW9uKCk7XG4gIHEuc2V0RnJvbUV1bGVyKGV1bGVyKTtcbiAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1Nb2RlbCh2aWV3ZXIsIG1vZGVsLCB0cmFuc2Zvcm0pIHtcbiAgZnVuY3Rpb24gX3RyYW5zZm9ybUZyYWdQcm94eShmcmFnSWQpIHtcbiAgICB2YXIgZnJhZ1Byb3h5ID0gdmlld2VyLmltcGwuZ2V0RnJhZ21lbnRQcm94eShtb2RlbCwgZnJhZ0lkKTtcblxuICAgIGZyYWdQcm94eS5nZXRBbmltVHJhbnNmb3JtKCk7XG5cbiAgICBmcmFnUHJveHkucG9zaXRpb24gPSB0cmFuc2Zvcm0udHJhbnNsYXRpb247XG5cbiAgICBmcmFnUHJveHkuc2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG5cbiAgICAvL05vdCBhIHN0YW5kYXJkIHRocmVlLmpzIHF1YXRlcm5pb25cbiAgICBmcmFnUHJveHkucXVhdGVybmlvbi5feCA9IHRyYW5zZm9ybS5yb3RhdGlvbi54O1xuICAgIGZyYWdQcm94eS5xdWF0ZXJuaW9uLl95ID0gdHJhbnNmb3JtLnJvdGF0aW9uLnk7XG4gICAgZnJhZ1Byb3h5LnF1YXRlcm5pb24uX3ogPSB0cmFuc2Zvcm0ucm90YXRpb24uejtcbiAgICBmcmFnUHJveHkucXVhdGVybmlvbi5fdyA9IHRyYW5zZm9ybS5yb3RhdGlvbi53O1xuXG4gICAgZnJhZ1Byb3h5LnVwZGF0ZUFuaW1UcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbiAgICB2YXIgZnJhZ0NvdW50ID0gbW9kZWwuZ2V0RnJhZ21lbnRMaXN0KCkuZnJhZ21lbnRzLmZyYWdJZDJkYklkLmxlbmd0aDtcblxuICAgIC8vZnJhZ0lkcyByYW5nZSBmcm9tIDAgdG8gZnJhZ0NvdW50LTFcbiAgICBmb3IgKHZhciBmcmFnSWQgPSAwOyBmcmFnSWQgPCBmcmFnQ291bnQ7ICsrZnJhZ0lkKSB7XG4gICAgICBfdHJhbnNmb3JtRnJhZ1Byb3h5KGZyYWdJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsKHZpZXdlciwgbW9kZWwsIGl0ZW0pIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBpdGVtLnRyYW5zbGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgIHR5cGVvZiBpdGVtLnJvdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgIHR5cGVvZiBpdGVtLnNjYWxlID09PSBcInVuZGVmaW5lZFwiXG4gIClcbiAgICByZXR1cm47XG5cbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGlvbjogZ2V0VHJhbnNsYXRpb24oaXRlbS50cmFuc2xhdGUuZ2V0KCkpLFxuICAgIHJvdGF0aW9uOiBnZXRSb3RhdGlvbihpdGVtLnJvdGF0ZS5nZXQoKSksXG4gICAgc2NhbGU6IGdldFNjYWxlKGl0ZW0uc2NhbGUuZ2V0KCkpXG4gIH07XG5cbiAgYXdhaXQgX3RyYW5zZm9ybU1vZGVsKHZpZXdlciwgbW9kZWwsIHRyYW5zZm9ybSk7XG4gIHZpZXdlci5pbXBsLnNjZW5lVXBkYXRlZCh0cnVlKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybU1vZGVsO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxtZC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgbWQtZWxldmF0aW9uPVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tc3RhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvYXNzZXRzL2ltZy9TcGluYWxCSU1WaWV3ZXJMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmllZXdlclwiXG4gICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDJweDttYXJnaW4tdG9wOiA0cHg7XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBjb2xvcl9ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG5cbiAgICA8bWQtbGlzdD5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiZ29fdG9Ecml2ZVwiPlxuICAgICAgICA8bWQtaWNvbj5rZXlib2FyZF9yZXR1cm48L21kLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5SZXR1cm4gdG8gU3BpbmFsQklNIERyaXZlPC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwic2lnbl9vdXRcIj5cbiAgICAgICAgPG1kLWljb24+cG93ZXJfc2V0dGluZ3NfbmV3PC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+U2lnbiBvdXQ8L3NwYW4+XG4gICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICA8L21kLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3BpbmFsUmlnaHRTaWRlQmFyXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIGdvX3RvRHJpdmUoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgIH0sXG4gICAgc2lnbl9vdXQoKSB7XG4gICAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0uc2lnbk91dCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS8jIS9sb2dpbicpO1wiO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHt9XG59O1xuLy8gY29tcG9uZW50czogeyBDaGFydCB9PC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sb3JfYmxhY2sgLm1kLWJ1dHRvbixcbi5jb2xvcl9ibGFjayAubWQtaWNvbixcbi5jb2xvcl9ibGFjayBkaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQge30gZnJvbSBcInNwaW5hbC1jb3JlLWNvbm5lY3RvcmpzXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gXCJxXCI7XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiBcIlwiO1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG59XG5cbmNsYXNzIFNwaW5hbFN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLnByb21pc2Vpbml0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcbiAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5ID0ge307XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnByb21pc2Vpbml0KSByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgaWYgKHRoaXMudXNlci51c2VybmFtZSkge1xuICAgICAgd2luZG93LlNwaW5hbFVzZXJNYW5hZ2VyLmdldF91c2VyX2lkKFxuICAgICAgICBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmNvbm4gPSB3aW5kb3cuc3BpbmFsQ29yZS5jb25uZWN0KFxuICAgICAgICAgICAgYGh0dHA6Ly8ke2lkfToke3RoaXMudXNlci5wYXNzd29yZH1AJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wcm9taXNlaW5pdC5yZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAgIC8vIHRoaXMucHJvbWlzZWluaXQucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb21pc2Vpbml0LnByb21pc2U7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGxldCBwYXRoID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGF0aFwiKTtcbiAgICBpZiAocGF0aCkgcmV0dXJuIGF0b2IocGF0aCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIGxldCBfdXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwaW5hbGhvbWVfY2ZnXCIpO1xuICAgICAgaWYgKF91c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UoYXRvYihfdXNlcikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvbWlzZU1vZGVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlTW9kZWwucHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5wcm9taXNlTW9kZWwgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5pbml0KCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IHBhdGggPSBnZXRQYXJhbWV0ZXJCeU5hbWUoXCJwYXRoXCIpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBhdG9iKHBhdGgpO1xuICAgICAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgICAgIHRoaXMuY29ubixcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIGZvcmdlZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gZm9yZ2VmaWxlO1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlTW9kZWwucmVzb2x2ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZU1vZGVsLnByb21pc2U7XG4gIH1cbiAgX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgcHJvbWlzZSkge1xuICAgIGlmICghbW9kZWwuX3NlcnZlcl9pZCB8fCB3aW5kb3cuRmlsZVN5c3RlbS5fdG1wX29iamVjdHNbbW9kZWwuX3NlcnZlcl9pZF0pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2UgcHJvbWlzZS5yZXNvbHZlKG1vZGVsKTtcbiAgfVxuICB3YWl0TW9kZWxSZHkobW9kZWwpIHtcbiAgICBsZXQgZGVmZXIgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5fd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBkZWZlcik7XG5cbiAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgfVxuICBsb2FkTW9kZWxQdHIobW9kZWwpIHtcbiAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZE1vZGVsUHRyKG1vZGVsLl9wdHIpO1xuICAgIH1cbiAgICBpZiAoIShtb2RlbCBpbnN0YW5jZW9mIHdpbmRvdy5QdHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkTW9kZWxQdHIgbXVzdCB0YWtlIFB0ciBhcyBwYXJhbWV0ZXJcIik7XG4gICAgfVxuICAgIGlmICghbW9kZWwuZGF0YS52YWx1ZSAmJiBtb2RlbC5kYXRhLm1vZGVsKSB7XG4gICAgICByZXR1cm4gUS5yZXNvbHZlKG1vZGVsLmRhdGEubW9kZWwpO1xuICAgIH0gZWxzZSBpZiAoIW1vZGVsLmRhdGEudmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBsb2FkIGEgUHRyIHRvIDBcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuZGF0YS52YWx1ZV0gPSBRLmRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGVsLmxvYWQobSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5yZXNvbHZlKG0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdO1xuICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbiAgbG9hZChwYXRoKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSBRLmRlZmVyKCk7XG5cbiAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgdGhpcy5jb25uLFxuICAgICAgcGF0aCxcbiAgICAgIG0gPT4ge1xuICAgICAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnJlc29sdmUobSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbW9kZWwgaW4gOiBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF07XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BpbmFsU3lzdGVtO1xuIiwiaW1wb3J0IFNwaW5hbFN5c3RlbSBmcm9tIFwiLi9TcGluYWxTeXN0ZW1cIjtcbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VWaWV3ZXIuanNcIjtcbmltcG9ydCBGb3JnZUV4dGVudGlvbk1hbmFnZXIgZnJvbSBcIi4uL01haW5Db250ZW50L0ZvcmdlRXh0ZW50aW9uTWFuYWdlci5qc1wiO1xuXG53aW5kb3cuc3BpbmFsID0ge307XG5cbndpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtID0gbmV3IFNwaW5hbFN5c3RlbSgpO1xud2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIgPSBuZXcgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyID0gbmV3IEZvcmdlVmlld2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zdGFsbChWdWUpIHtcbiAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0gPSB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbTtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZVZpZXdlciA9IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXI7XG4gICAgVnVlLnByb3RvdHlwZS4kRm9yZ2VFeHRlbnRpb25NYW5hZ2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXI7XG4gIH0sXG4gIHNwaW5hbFN5c3RlbTogd2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0sXG4gIEZvcmdlVmlld2VyOiB3aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyLFxuICBGb3JnZUV4dGVudGlvbk1hbmFnZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VFeHRlbnRpb25NYW5hZ2VyXG59O1xuIiwiIiwiIDx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmlld2VyXCJcbiAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgIDwvZGl2PlxuICAgIDxoMj5cbiAgICAgIHt7cGF0aH19XG4gICAgICA8bWQtdG9vbHRpcD57e2Z1bGxQYXRofX08L21kLXRvb2x0aXA+XG4gICAgPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAge3t1c2VybmFtZX19XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgPC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWwgZnJvbSBcIi4uL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNwaW5hbEhlYWRlclwiLFxuICBwcm9wczogW1widmFsdWVcIl0sXG4gIGRhdGEoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbFBhdGg6IFwiXCIsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgdXNlcm5hbWU6IFwiXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTWVudTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgIXRoaXMudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnVzZXJuYW1lID0gc3BpbmFsLnNwaW5hbFN5c3RlbS5nZXRVc2VyKCkudXNlcm5hbWU7XG4gICAgdm0uZnVsbFBhdGggPSBzcGluYWwuc3BpbmFsU3lzdGVtLmdldFBhdGgoKTtcbiAgICBsZXQgcGF0aCA9IHZtLmZ1bGxQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICB2bS5wYXRoID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICB9XG59Ozwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1kLWJ1dHRvbixcbi5tZC1pY29uLFxuZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tIFwidnVlLW1hdGVyaWFsXCI7XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcbmltcG9ydCBWVG9vbHRpcCBmcm9tIFwidi10b29sdGlwXCI7XG5cblZ1ZS51c2Uoc3BpbmFsKTtcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xuXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKTtcblZ1ZS51c2UoVlRvb2x0aXApO1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI2FwcFwiLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcbiJdfQ==
