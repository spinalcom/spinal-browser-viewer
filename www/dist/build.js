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
      console.log("transformModel", item.model);

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
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-container[data-v-1657fd04] {\n  pointer-events: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  display: flex;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.spinal-forge-model-explorer[data-v-1657fd04] {\n  pointer-events: auto;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: #2d3d93;\n}\n.spinal-forge-model-explorer-hidden[data-v-1657fd04] {\n  opacity: 0.5;\n}\n.spinal-forge-model-explorer-opn-btn[data-v-1657fd04] {\n  margin: 0px 0;\n  min-width: 20px;\n}\n.model-explorer-settings-container[data-v-1657fd04] {\n  pointer-events: auto;\n}\n.slide-fade-enter-active {\n  transition: all 1s;\n}\n.slide-fade-leave-active {\n  transition: all 0.8s;\n}\n.slide-fade-enter, .slide-fade-leave-to\n/* .slide-fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}")
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinal-forge-model-explorer-container"},[_c('md-content',{staticClass:"spinal-forge-model-explorer",class:{'spinal-forge-model-explorer-hidden':!_vm.isListShown}},[_c('btn-icon-label-transition',{staticStyle:{"width":"100%"},attrs:{"icon":'layers',"label":_vm.labelBtn},model:{value:(_vm.isListShown),callback:function ($$v) {_vm.isListShown=$$v},expression:"isListShown"}}),_vm._v(" "),_c('model-explorer-list',{attrs:{"list":_vm.list,"show":_vm.isListShown},on:{"onModelSelect":_vm.onModelSelect,"onModelCheckSelect":_vm.onModelCheckSelect,"onModelVisibilitySelect":_vm.onModelVisibilitySelect,"onModelExplorerSettingsSelect":_vm.onModelExplorerSettingsSelect}})],1),_vm._v(" "),_c('model-explorer-settings',{staticClass:"model-explorer-settings-container",attrs:{"item":_vm.selectedNodeSettings,"value":_vm.computedIsSettingShow},on:{"onUpdateSetting":_vm.onUpdateSetting,"input":function($event){_vm.isSettingShow = $event}}})],1)}
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
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".spinal-forge-model-explorer-loading[data-v-7a7c7cc2] {\n  text-align: center;\n}\n\n.spinal-forge-model-explorer-list[data-v-7a7c7cc2] {\n  padding: 0;\n  border-radius: 5px;\n  max-height: calc(100vh - 150px);\n  overflow-y: auto;\n}\n\n.spinal-forge-model-explorer-list-row[data-v-7a7c7cc2] {\n  cursor: pointer;\n  display: flex;\n  align-content: flex-start;\n  text-align: center;\n  align-items: center;\n  margin: 1px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:first-child {\n  margin-top: 5px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:first-child:empty {\n  margin-top: 0;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:last-child {\n  margin-bottom: 5px;\n}\n.spinal-forge-model-explorer-list-row [data-v-7a7c7cc2]:last-child:empty {\n  margin-bottom: 0;\n}\n.spinal-forge-model-explorer-list-row[data-v-7a7c7cc2]:hover {\n  background-color: #356bab;\n}\n\n.spinal-forge-model-explorer-list-row-icon[data-v-7a7c7cc2] {\n  height: 40px;\n  width: 40px;\n  box-sizing: border-box;\n  align-items: center;\n  margin: 3px;\n}\n\n.spinal-forge-model-explorer-list-row-label[data-v-7a7c7cc2] {\n  flex-basis: 100%;\n  align-self: stretch;\n  text-align: left;\n  margin: 0;\n  margin-left: 8px;\n  line-height: 1.2;\n  padding-left: 0.5em;\n  padding-top: 0.9em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 195px;\n}\n.spinal-forge-model-explorer-list-row-label-span[data-v-7a7c7cc2] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}")
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.show && _vm.list.length === 0)?_c('p',{staticClass:"spinal-forge-model-explorer-loading"},[_vm._v("Loading...")]):_vm._e(),_vm._v(" "),_c('transition-group',{staticClass:"spinal-forge-model-explorer-list md-scrollbar",attrs:{"tag":"md-content","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},_vm._l((_vm.list),function(item,idx){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],key:idx,staticClass:"button spinal-forge-model-explorer-list-row",on:{"click":function($event){_vm.$emit('onModelSelect', item, idx)}}},[_c('div',{directives:[{name:"tooltip",rawName:"v-tooltip.auto-end",value:({content: item.name, delay: 500}),expression:"{content: item.name, delay: 500}",modifiers:{"auto-end":true}}],staticClass:"spinal-forge-model-explorer-list-row-label"},[_c('span',{staticClass:"spinal-forge-model-explorer-list-row-label-span"},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),(item.loaded === true)?_c('div',{staticClass:"spinal-forge-model-explorer-list-row-icon"},[_c('md-icon',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({content:'Open transform settings', delay: 500}),expression:"{content:'Open transform settings', delay: 500}"}],nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelExplorerSettingsSelect', item, idx)}}},[_vm._v("settings")])],1):_vm._e(),_vm._v(" "),(item.loaded === true)?_c('div',{staticClass:"spinal-forge-model-explorer-list-row-icon"},[_c('md-icon',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({content:'Select and fit to view', delay: 500}),expression:"{content:'Select and fit to view', delay: 500}"}],nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelVisibilitySelect', item, idx)}}},[_vm._v("gps_fixed")])],1):_vm._e(),_vm._v(" "),(item.loaded === true)?_c('div',{staticClass:"spinal-forge-model-explorer-list-row-icon"},[_c('md-icon',{style:(_vm.checkStyle(item)),nativeOn:{"click":function($event){$event.stopPropagation();_vm.$emit('onModelCheckSelect', item, idx)}}},[_vm._v("check")])],1):_vm._e()])}))],1)}
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
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".model-explorer-settings-transform-container[data-v-75b7533a] {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding: 2px 8px 5px;\n  width: 275px;\n}\n.model-explorer-settings-scale-label[data-v-75b7533a] {\n  text-align: center;\n  background-color: #222;\n  border-radius: 5px;\n}")
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.computedShow)?_c('div',[_c('model-explorer-settings-header',{staticStyle:{"width":"100%"},attrs:{"icon":'settings',"label":_vm.item.name},model:{value:(_vm.computedShow),callback:function ($$v) {_vm.computedShow=$$v},expression:"computedShow"}}),_vm._v(" "),_c('md-content',{staticClass:"model-explorer-settings-transform-container"},[_c('div',{staticClass:"model-explorer-settings-scale-label"},[_vm._v("scale")]),_vm._v(" "),_c('sliderLabel',{ref:"scaleblock",attrs:{"label":'scale',"value":_vm.scale,"min":0,"max":300},on:{"input":_vm.onUpdateScale}}),_vm._v(" "),_c('Block3D',{ref:"translateblock",attrs:{"value":_vm.translate,"label":'translate',"min":-1000,"max":1000},on:{"input":function($event){_vm.onUpdate3dblock($event, _vm.translate)}}}),_vm._v(" "),_c('Block3D',{attrs:{"value":_vm.rotate,"label":'rotate',"min":-180,"max":180},on:{"input":function($event){_vm.onUpdate3dblock($event, _vm.rotate)}}})],1)],1):_vm._e()])}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZlbG9jaXR5LWFuaW1hdGUvdmVsb2NpdHkuanMiLCJub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlLXNsaWRlLWJhci9kaXN0L3Z1ZS1zbGlkZS1iYXIubWluLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZWlmeS9saWIvaW5zZXJ0LWNzcy5qcyIsInNyYy9BcHAudnVlPzBiM2RmMGJiIiwic3JjL01haW5Db250ZW50L0ZvcmdlQ29udGVudC52dWU/NDE4NDk2MjEiLCJzcmMvTWFpbkNvbnRlbnQvRm9yZ2VFeHRlbnRpb25NYW5hZ2VyLmpzIiwic3JjL01haW5Db250ZW50L0ZvcmdlVmlld2VyLmpzIiwic3JjL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZT9lNzQ3MmI5MCIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL0J0bkljb25MYWJlbFRyYW5zaXRpb24udnVlP2MxYzkyN2FjIiwic3JjL01haW5Db250ZW50L01vZGVsRXhwbG9yZXIvTW9kZWxFeHBsb3Jlci52dWU/NjBkN2JhNzciLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyTGlzdC52dWU/ODQ4MTBmY2EiLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyU2VydmljZS5qcyIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL01vZGVsRXhwbG9yZXJTZXR0aW5ncy9CbG9jazNELnZ1ZT82Zjg2OTU1YSIsInNyYy9NYWluQ29udGVudC9Nb2RlbEV4cGxvcmVyL01vZGVsRXhwbG9yZXJTZXR0aW5ncy9Nb2RlbEV4cGxvcmVyU2V0dGluZ3MudnVlPzM0OGRiN2VmIiwic3JjL01haW5Db250ZW50L01vZGVsRXhwbG9yZXIvTW9kZWxFeHBsb3JlclNldHRpbmdzL01vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlci52dWU/ODRjNDA3MGEiLCJzcmMvTWFpbkNvbnRlbnQvTW9kZWxFeHBsb3Jlci9Nb2RlbEV4cGxvcmVyU2V0dGluZ3Mvc2xpZGVyTGFiZWwudnVlP2M1ZTRjYjBlIiwic3JjL01haW5Db250ZW50L3RyYW5zZm9ybU1vZGVsLmpzIiwic3JjL1JpZ2h0U2lkZUJhci9TcGluYWxSaWdodFNpZGVCYXIudnVlPzQ5YjNjMDhlIiwic3JjL1NwaW5hbFN5c3RlbS9TcGluYWxTeXN0ZW0uanMiLCJzcmMvU3BpbmFsU3lzdGVtL3NwaW5hbC5qcyIsInNyYy9hcHAuY3NzIiwic3JjL2hlYWRlci9TcGluYWxIZWFkZXIudnVlPzExNGZjZWFmIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDelhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0RBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVdBO0FBR0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTtBQWhDQTs7OztBQTFCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOzs7OztBQVBBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0scUI7QUFDSixtQ0FBYztBQUFBOztBQUNaLFNBQUssVUFBTCxHQUFrQixFQUFsQjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLLFVBQVo7QUFDRDs7O2lDQUVZLEksRUFBTTtBQUNqQixXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckI7QUFDRDs7Ozs7O2tCQUVZLHFCOzs7Ozs7Ozs7Ozs7O0FDYmY7Ozs7Ozs7Ozs7QUFDQSxJQUFNLElBQUksUUFBUSxHQUFSLENBQVY7O0lBRU0sVztBQUNKLHlCQUFjO0FBQUE7O0FBQ1osU0FBSyxNQUFMO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQ2IsV0FBSyxPQURRO0FBRWIsYUFBTyxFQUZNO0FBR2IsY0FBUTtBQUhLLEtBQWY7QUFLQSxTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBTyxNQUFQLENBQWMscUJBQWQsQ0FBb0MsWUFBcEMsQ0FDRSxzQ0FERjtBQUdBLFNBQUssR0FBTCxHQUFXLEVBQUUsS0FBRixFQUFYO0FBQ0Q7Ozs7OEJBRVMsRyxFQUFLO0FBQUE7O0FBQ2IsVUFBSSxPQUFPLElBQUksSUFBZjtBQUNBLFVBQ0UsSUFBSSxJQUFKLENBQVMsT0FBVCxDQUFpQixTQUFqQixNQUFnQyxDQUFoQyxJQUNBLElBQUksSUFBSixDQUFTLE9BQVQsQ0FBaUIsVUFBakIsTUFBaUMsQ0FGbkMsRUFHRTtBQUNBLGVBQU8sT0FBTyxRQUFQLENBQWdCLE1BQWhCLEdBQXlCLElBQUksSUFBcEM7QUFDRDs7QUFFRCxVQUFJLE1BQUosR0FBYSxJQUFiO0FBQ0EsVUFBTSxPQUFPLEtBQUssTUFBbEI7QUFDQSxhQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsWUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLFFBQVM7QUFDakMsZ0JBQUssTUFBTCxDQUFZLG1CQUFaLENBQ0UsT0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLHFCQUQxQixFQUVFLGlCQUZGO0FBSUEsY0FBSSxLQUFKLEdBQVksTUFBTSxLQUFsQjtBQUNBLGlCQUFPLFFBQVEsTUFBTSxLQUFkLENBQVA7QUFDRCxTQVBEO0FBUUEsY0FBSyxNQUFMLENBQVksZ0JBQVosQ0FDRSxPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBd0IscUJBRDFCLEVBRUUsaUJBRkY7O0FBS0EsY0FBSyxNQUFMLENBQVksU0FBWixDQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsWUFBTSxDQUFFLENBSFYsRUFJRSxVQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFVBQTFCLEVBQXNDLFVBQXRDLEVBQXFEO0FBQ25ELGdCQUFLLE1BQUwsQ0FBWSxtQkFBWixDQUNFLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixxQkFEMUIsRUFFRSxpQkFGRjs7QUFLQSxpQkFBTyxPQUFPO0FBQ1osdUJBQVcsU0FEQztBQUVaLDBCQUFjLFlBRkY7QUFHWix3QkFBWSxVQUhBO0FBSVosd0JBQVk7QUFKQSxXQUFQLENBQVA7QUFNRCxTQWhCSDtBQWtCRCxPQWhDTSxFQWlDSixJQWpDSSxDQWlDQyxZQUFNO0FBQ1YsZUFBTyxNQUFLLGNBQUwsQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsQ0FBUDtBQUNELE9BbkNJLEVBb0NKLElBcENJLENBb0NDO0FBQUEsZUFBTSxNQUFLLHNCQUFMLEVBQU47QUFBQSxPQXBDRCxDQUFQO0FBcUNEOzs7Z0NBQ1csRyxFQUFLO0FBQUE7O0FBQ2YsYUFBTyxJQUFJLE9BQUosQ0FBWSxtQkFBVztBQUM1QixZQUFNLFFBQVEsSUFBSSxLQUFsQjtBQUNBLFlBQUksTUFBSixHQUFhLEtBQWI7QUFDQSxZQUFJLEtBQUosR0FBWSxJQUFaO0FBQ0EsZUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixXQUFqQixDQUE2QixLQUE3QjtBQUNBLGVBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsWUFBakIsQ0FBOEIsSUFBOUI7QUFDQTtBQUNELE9BUE0sRUFPSixJQVBJLENBT0M7QUFBQSxlQUFNLE9BQUssc0JBQUwsRUFBTjtBQUFBLE9BUEQsQ0FBUDtBQVFEOzs7cUNBQ2dCLEssRUFBTztBQUFBOztBQUN0QixhQUFPLElBQUksT0FBSixDQUFZLG1CQUFXO0FBQzVCLGVBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxZQUFJLGdCQUFnQixPQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixJQUE3QixDQUFwQjtBQUNBLHNCQUFjLFlBQWQsR0FBNkIsS0FBN0I7QUFDQSxjQUFNLGFBQU4sQ0FBb0Isd0JBQWdCO0FBQ2xDLGlCQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLFFBQTNCLENBQW9DLFlBQXBDO0FBQ0E7QUFDRCxTQUhEO0FBSUQsT0FSTSxDQUFQO0FBU0Q7OztvQ0FDZSxLLEVBQU87QUFDckIsYUFBTyxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLEtBQWpDLENBQVA7QUFDRDs7OzhCQUNTLFMsRUFBVyxLLEVBQU87QUFDMUIsYUFBTyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLEtBQWpDLENBQVA7QUFDRDs7OzZDQUN3QjtBQUN2QixVQUFJLFFBQVEsS0FBWjtBQUNBLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsS0FBSyxJQUFMLENBQVUsTUFBdEMsRUFBOEMsT0FBOUMsRUFBdUQ7QUFDckQsWUFBSSxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLEtBQWpCLEtBQTJCLEtBQUssTUFBTCxDQUFZLEtBQTNDLEVBQWtELFFBQVEsSUFBUjtBQUNuRDtBQUNELFVBQUksVUFBVSxLQUFkLEVBQXFCO0FBQ25CLGFBQUssSUFBSSxTQUFRLENBQWpCLEVBQW9CLFNBQVEsS0FBSyxJQUFMLENBQVUsTUFBdEMsRUFBOEMsUUFBOUMsRUFBdUQ7QUFDckQsY0FBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWlCLE1BQWpCLEtBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLGlCQUFLLGdCQUFMLENBQXNCLEtBQUssSUFBTCxDQUFVLE1BQVYsRUFBaUIsS0FBdkM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7OzBDQUNxQixlLEVBQWlCO0FBQ3JDLGNBQVEsS0FBUixDQUFjLHlDQUF5QyxlQUF2RDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUksYUFBYSxPQUFPLE1BQVAsQ0FBYyxxQkFBZCxDQUFvQyxhQUFwQyxFQUFqQjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxXQUFXLE1BQS9CLEVBQXVDLEdBQXZDLEVBQTRDO0FBQzFDLGFBQUssTUFBTCxDQUFZLGFBQVosQ0FBMEIsV0FBVyxDQUFYLENBQTFCLEVBQXlDLEtBQUssT0FBOUM7QUFDRDtBQUNGOzs7aUNBRVksRyxFQUFLO0FBQUE7O0FBQ2hCLGFBQU8sTUFBUCxDQUFjLFlBQWQsQ0FDRyxRQURILEdBRUcsSUFGSCxDQUVRLHFCQUFhO0FBQ2pCLGVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGVBQUssSUFBTCxHQUFZLE9BQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsR0FBekIsRUFBWjtBQUNBLFlBQU0sYUFBYSxFQUFuQjtBQUNBLFlBQUksT0FBSyxJQUFMLENBQVUsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFJLE9BQU8sT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQXhCOztBQUVBLGVBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFLLElBQUwsQ0FBVSxNQUE5QixFQUFzQyxHQUF0QyxFQUEyQztBQUN6QyxnQkFBSSxPQUFLLElBQUwsQ0FBVSxDQUFWLEVBQWEsTUFBYixLQUF3QixJQUE1QixFQUFrQyxPQUFLLElBQUwsQ0FBVSxDQUFWLEVBQWEsTUFBYixHQUFzQixLQUF0QixDQUFsQyxLQUNLO0FBQ0gseUJBQVcsSUFBWCxDQUFnQixPQUFLLElBQUwsQ0FBVSxDQUFWLENBQWhCO0FBQ0Q7QUFDRjtBQUNELGNBQUksV0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCLFdBQVcsSUFBWCxDQUFnQixPQUFLLElBQUwsQ0FBVSxDQUFWLENBQWhCO0FBQzdCLGVBQUssSUFBSSxDQUFULEVBQVksSUFBSSxPQUFLLElBQUwsQ0FBVSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxnQkFBSSxXQUFXLElBQVgsQ0FBZ0IsT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQTdCLENBQUosRUFBd0M7QUFDdEMscUJBQU8sT0FBSyxJQUFMLENBQVUsQ0FBVixFQUFhLElBQXBCO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsY0FBSSxLQUFLLE9BQUwsQ0FBYSxTQUFiLE1BQTRCLENBQTVCLElBQWlDLEtBQUssT0FBTCxDQUFhLFVBQWIsTUFBNkIsQ0FBbEUsRUFBcUU7QUFDbkUsbUJBQU8sT0FBTyxRQUFQLENBQWdCLE1BQWhCLEdBQXlCLElBQWhDO0FBQ0Q7QUFDRjtBQUNELGVBQUssTUFBTCxHQUFjLElBQUksT0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWdDLFdBQXBDLENBQ1osR0FEWSxFQUVaLE9BQUssTUFGTyxDQUFkLENBeEJpQixDQTJCZDtBQUNILGVBQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixXQUF4QixDQUFvQyxPQUFLLE9BQXpDLEVBQWtELGtCQUFZO0FBQzVELGlCQUFLLE1BQUwsQ0FBWSxVQUFaO0FBQ0EsaUJBQUssaUJBQUw7O0FBRUEsZUFBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxXQUFXLE1BQXZDLEVBQStDLE9BQS9DLEVBQXdEO0FBQ3RELGdCQUFNLFVBQVUsV0FBVyxLQUFYLENBQWhCO0FBQ0E7QUFDQSxrQkFBTSxPQUFLLFNBQUwsQ0FBZSxPQUFmLENBQU47QUFDRDtBQUNELGlCQUFLLEdBQUwsQ0FBUyxPQUFUO0FBQ0QsU0FWRDtBQVdELE9BekNILEVBMENHLEtBMUNILENBMENTLGVBQU87QUFDWixnQkFBUSxLQUFSLENBQWMsR0FBZDtBQUNELE9BNUNIO0FBNkNEOzs7cUNBRWdCLEksRUFBTTtBQUNyQixXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsTUFBckQsRUFBNkQsT0FBN0QsRUFBc0U7QUFDcEUsWUFBTSxVQUFVLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsS0FBekIsQ0FBaEI7QUFDQSxZQUFJLFFBQVEsSUFBUixDQUFhLEdBQWIsT0FBdUIsS0FBSyxJQUFoQyxFQUFzQyxPQUFPLE9BQVA7QUFDdkM7QUFDRCxhQUFPLElBQVA7QUFDRDs7OytCQUVVLEksRUFBTTtBQUNmLFVBQUksUUFBUSxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQVo7QUFDQSxVQUFJLFVBQVUsSUFBZCxFQUFvQixPQUFPLEtBQVA7QUFDcEIsVUFBSSxTQUFTLEtBQWI7O0FBRUEsV0FBSyxJQUFNLEdBQVgsSUFBa0IsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSSxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsS0FBNEIsUUFBUSxPQUF4QyxFQUFpRDtBQUMvQyxjQUFJLFFBQU8sS0FBSyxHQUFMLENBQVAsTUFBcUIsUUFBekIsRUFBbUM7QUFDakMsZ0JBQUksT0FBTyxNQUFNLEdBQU4sQ0FBUCxLQUFzQixXQUExQixFQUF1QztBQUNyQyxvQkFBTSxRQUFOLHFCQUNHLEdBREgsRUFDUyxLQUFLLEdBQUwsQ0FEVDtBQUdBLHVCQUFTLElBQVQ7QUFDRCxhQUxELE1BTUUsS0FBSyxJQUFNLFFBQVgsSUFBdUIsS0FBSyxHQUFMLENBQXZCLEVBQWtDO0FBQ2hDLGtCQUFJLEtBQUssR0FBTCxFQUFVLGNBQVYsQ0FBeUIsUUFBekIsQ0FBSixFQUF3QztBQUN0QyxvQkFBSSxNQUFNLEdBQU4sRUFBVyxRQUFYLEVBQXFCLEdBQXJCLENBQXlCLEtBQUssR0FBTCxFQUFVLFFBQVYsQ0FBekIsQ0FBSixFQUNFLFNBQVMsSUFBVDtBQUNIO0FBQ0Y7QUFDSixXQWJELE1BYU87QUFDTCxnQkFBSSxPQUFPLE1BQU0sR0FBTixDQUFQLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDLG9CQUFNLFFBQU4scUJBQ0csR0FESCxFQUNTLEtBQUssR0FBTCxDQURUO0FBR0EsdUJBQVMsSUFBVDtBQUNELGFBTEQsTUFLTztBQUNMLGtCQUFJLE1BQU0sR0FBTixFQUFXLEdBQVgsQ0FBZSxLQUFLLEdBQUwsQ0FBZixDQUFKLEVBQStCLFNBQVMsSUFBVDtBQUNoQztBQUNGO0FBQ0Y7QUFDRjtBQUNELGFBQU8sTUFBUDtBQUNEOzs7bUNBRWMsSSxFQUFxQjtBQUFBLFVBQWYsS0FBZSx1RUFBUCxLQUFPOztBQUNsQyxVQUFJLFFBQVEsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUFaO0FBQ0EsY0FBUSxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBSyxLQUFuQzs7QUFFQSxVQUFLLFVBQVUsSUFBVixJQUFrQixJQUFuQixJQUE0QixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsTUFBMEIsSUFBMUQsRUFDRSxPQUFPLDhCQUFlLEtBQUssTUFBcEIsRUFBNEIsS0FBSyxLQUFqQyxFQUF3QyxLQUF4QyxDQUFQO0FBQ0YsYUFBTyxRQUFRLE9BQVIsRUFBUDtBQUNEOzs7OztBQUVIOztrQkFFZSxXOzs7Ozs7Ozs7O0FDck5mOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7OztBQVhBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkE7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBOUJBOzs7O0FBbEJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBNUJBO0FBOEJBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE5REE7Ozs7QUE5QkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUNBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQU5BOzs7O0FBNUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLFNBQU8sT0FBTyxNQUFQLENBQWMsV0FBckI7QUFDRDs7QUFFRCxJQUFJLFVBQVUsSUFBZDtrQkFDZTtBQUNiLGNBRGEsMEJBQ0U7QUFDYixRQUFNLGNBQWMsZ0JBQXBCO0FBQ0EsV0FBTyxZQUFZLEdBQVosQ0FBZ0IsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBNkIsWUFBTTtBQUN4QyxVQUFNLE9BQU8sRUFBYjtBQUNBLFVBQU0sT0FBTyxZQUFZLElBQXpCO0FBQ0EsV0FBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxLQUFLLE1BQWpDLEVBQXlDLE9BQXpDLEVBQWtEO0FBQ2hELFlBQU0sVUFBVSxLQUFLLEtBQUwsQ0FBaEI7QUFDQSxhQUFLLElBQUwsQ0FBVSxPQUFWO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRCxLQVJNLENBQVA7QUFTRCxHQVpZO0FBY2IsWUFkYSxzQkFjRixJQWRFLEVBY0k7QUFDZixRQUFNLGNBQWMsZ0JBQXBCO0FBQ0EsUUFBSSxhQUFKO0FBQ0EsUUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGdCQUFVLEtBQVY7QUFDQSxVQUFJLEtBQUssTUFBTCxLQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPLFlBQVksV0FBWixDQUF3QixJQUF4QixDQUE2QixXQUE3QixFQUEwQyxJQUExQyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxZQUFZLFNBQVosQ0FBc0IsSUFBdEIsQ0FBMkIsV0FBM0IsRUFBd0MsSUFBeEMsQ0FBUDtBQUNEO0FBQ0QsV0FBSyxJQUFMLENBQVUsWUFBTTtBQUNkLG9CQUFZLFVBQVosQ0FBdUIsSUFBdkIsQ0FBNEIsV0FBNUIsRUFBeUMsSUFBekM7QUFDQSxrQkFBVSxJQUFWO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0E3Qlk7QUErQmIsZ0JBL0JhLDBCQStCRSxJQS9CRixFQStCUTtBQUNuQixRQUFNLGNBQWMsZ0JBQXBCO0FBQ0EsV0FBTyxZQUFZLE1BQVosQ0FBbUIsS0FBbkIsS0FBNkIsS0FBSyxLQUF6QztBQUNELEdBbENZO0FBbUNiLGlCQW5DYSwyQkFtQ0csSUFuQ0gsRUFtQ1M7QUFDcEIsUUFBSSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsTUFBOEIsSUFBbEMsRUFBd0M7QUFDdEMsVUFBTSxjQUFjLGdCQUFwQjtBQUNBLGtCQUFZLGVBQVosQ0FBNEIsSUFBNUIsQ0FBaUMsV0FBakMsRUFBOEMsS0FBSyxLQUFuRDtBQUNEO0FBQ0YsR0F4Q1k7QUEwQ2IsYUExQ2EsdUJBMENELElBMUNDLEVBMENLO0FBQ2hCLFFBQUksUUFBUSxLQUFLLE1BQUwsS0FBZ0IsSUFBeEIsSUFBZ0MsS0FBSyxLQUF6QyxFQUFnRDtBQUM5QyxXQUFLLGNBQUw7QUFDQSxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFlBQXBCLENBQ0UsQ0FBQyxDQUFELENBREYsRUFFRSxPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBd0IsYUFBeEIsQ0FBc0MsWUFGeEM7QUFJQSxXQUFLLFNBQUwsQ0FBZSxDQUFDLENBQUQsQ0FBZixFQUFvQixLQUFLLEtBQXpCO0FBQ0Q7QUFDRixHQW5EWTtBQW9EYixnQkFwRGEsNEJBb0RJO0FBQ2YsUUFBTSxjQUFjLGdCQUFwQjtBQUNBLGdCQUFZLE1BQVosQ0FBbUIsY0FBbkI7QUFDRCxHQXZEWTtBQXdEYixXQXhEYSxxQkF3REgsU0F4REcsRUF3RFEsS0F4RFIsRUF3RGU7QUFDMUIsUUFBTSxjQUFjLGdCQUFwQjtBQUNBLGdCQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsS0FBakM7QUFDRCxHQTNEWTtBQTZEYixnQkE3RGEsMEJBNkRFLEtBN0RGLEVBNkRTO0FBQ3BCLFFBQU0sY0FBYyxnQkFBcEI7QUFDQSxnQkFBWSxjQUFaLENBQTJCLEtBQTNCO0FBQ0Q7QUFoRVksQzs7Ozs7Ozs7Ozs7O0FDb0JmOzs7Ozs7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFuQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQWpEQTs7OztBQTNCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWEE7QUFhQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBdENBOztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBakNBO0FBbUNBO0FBQ0E7QUFDQTtBQTVHQTs7OztBQTNDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFmQTs7OztBQVZBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFUQTs7OztBQTFCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUN2QixNQUFJLElBQUksTUFBTSxLQUFOLElBQWUsR0FBZixHQUFxQixLQUE3QjtBQUNBLE1BQUksSUFBSSxNQUFNLEtBQU4sSUFBZSxHQUFmLEdBQXFCLEtBQTdCO0FBQ0EsTUFBSSxJQUFJLE1BQU0sS0FBTixJQUFlLEdBQWYsR0FBcUIsS0FBN0I7O0FBRUEsU0FBTyxJQUFJLE9BQU8sS0FBUCxDQUFhLE9BQWpCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLENBQVA7QUFDRDs7QUFFRCxTQUFTLGNBQVQsQ0FBd0IsR0FBeEIsRUFBNkI7QUFDM0IsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDO0FBQ0EsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDO0FBQ0EsTUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFWLElBQWUsR0FBZixHQUFxQixJQUFJLENBQWpDOztBQUVBLFNBQU8sSUFBSSxPQUFPLEtBQVAsQ0FBYSxPQUFqQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCO0FBQ3hCLE1BQUksSUFBSSxNQUFNLElBQUksQ0FBVixJQUFlLEdBQWYsR0FBcUIsSUFBSSxDQUFqQztBQUNBLE1BQUksSUFBSSxNQUFNLElBQUksQ0FBVixJQUFlLEdBQWYsR0FBcUIsSUFBSSxDQUFqQztBQUNBLE1BQUksSUFBSSxNQUFNLElBQUksQ0FBVixJQUFlLEdBQWYsR0FBcUIsSUFBSSxDQUFqQztBQUNBLE1BQUksUUFBUSxJQUFJLE9BQU8sS0FBUCxDQUFhLEtBQWpCLENBQ1QsSUFBSSxLQUFLLEVBQVYsR0FBZ0IsR0FETixFQUVULElBQUksS0FBSyxFQUFWLEdBQWdCLEdBRk4sRUFHVCxJQUFJLEtBQUssRUFBVixHQUFnQixHQUhOLEVBSVYsS0FKVSxDQUFaO0FBTUEsTUFBSSxJQUFJLElBQUksT0FBTyxLQUFQLENBQWEsVUFBakIsRUFBUjtBQUNBLElBQUUsWUFBRixDQUFlLEtBQWY7QUFDQSxTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUMsS0FBakMsRUFBd0MsU0FBeEMsRUFBbUQ7QUFDakQsV0FBUyxtQkFBVCxDQUE2QixNQUE3QixFQUFxQztBQUNuQyxRQUFJLFlBQVksT0FBTyxJQUFQLENBQVksZ0JBQVosQ0FBNkIsS0FBN0IsRUFBb0MsTUFBcEMsQ0FBaEI7O0FBRUEsY0FBVSxnQkFBVjs7QUFFQSxjQUFVLFFBQVYsR0FBcUIsVUFBVSxXQUEvQjs7QUFFQSxjQUFVLEtBQVYsR0FBa0IsVUFBVSxLQUE1Qjs7QUFFQTtBQUNBLGNBQVUsVUFBVixDQUFxQixFQUFyQixHQUEwQixVQUFVLFFBQVYsQ0FBbUIsQ0FBN0M7QUFDQSxjQUFVLFVBQVYsQ0FBcUIsRUFBckIsR0FBMEIsVUFBVSxRQUFWLENBQW1CLENBQTdDO0FBQ0EsY0FBVSxVQUFWLENBQXFCLEVBQXJCLEdBQTBCLFVBQVUsUUFBVixDQUFtQixDQUE3QztBQUNBLGNBQVUsVUFBVixDQUFxQixFQUFyQixHQUEwQixVQUFVLFFBQVYsQ0FBbUIsQ0FBN0M7O0FBRUEsY0FBVSxtQkFBVjtBQUNEOztBQUVELFNBQU8sSUFBSSxPQUFKLENBQVksZ0JBQU0sT0FBTixFQUFpQjtBQUNsQyxRQUFJLFlBQVksTUFBTSxlQUFOLEdBQXdCLFNBQXhCLENBQWtDLFdBQWxDLENBQThDLE1BQTlEOztBQUVBO0FBQ0EsU0FBSyxJQUFJLFNBQVMsQ0FBbEIsRUFBcUIsU0FBUyxTQUE5QixFQUF5QyxFQUFFLE1BQTNDLEVBQW1EO0FBQ2pELDBCQUFvQixNQUFwQjtBQUNEOztBQUVELFdBQU8sU0FBUDtBQUNELEdBVE0sQ0FBUDtBQVVEOztBQUVELGVBQWUsY0FBZixDQUE4QixNQUE5QixFQUFzQyxLQUF0QyxFQUE2QyxJQUE3QyxFQUFtRDtBQUNqRCxNQUFJLFlBQVk7QUFDZCxpQkFBYSxlQUFlLEtBQUssU0FBTCxDQUFlLEdBQWYsRUFBZixDQURDO0FBRWQsY0FBVSxZQUFZLEtBQUssTUFBTCxDQUFZLEdBQVosRUFBWixDQUZJO0FBR2QsV0FBTyxTQUFTLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBVDtBQUhPLEdBQWhCOztBQU1BLFFBQU0sZ0JBQWdCLE1BQWhCLEVBQXdCLEtBQXhCLEVBQStCLFNBQS9CLENBQU47QUFDQSxTQUFPLElBQVAsQ0FBWSxZQUFaLENBQXlCLElBQXpCO0FBQ0Q7a0JBQ2MsYzs7Ozs7Ozs7Ozs7O0FDdENmOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQWxCQTs7OztBQXBDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOztJQUFZLEM7Ozs7OztBQUVaLFNBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDckMsTUFBSSxDQUFDLEdBQUwsRUFBVSxNQUFNLE9BQU8sUUFBUCxDQUFnQixJQUF0QjtBQUNWLFNBQU8sS0FBSyxPQUFMLENBQWEsUUFBYixFQUF1QixNQUF2QixDQUFQO0FBQ0EsTUFBSSxRQUFRLElBQUksTUFBSixDQUFXLFNBQVMsSUFBVCxHQUFnQixtQkFBM0IsQ0FBWjtBQUFBLE1BQ0UsVUFBVSxNQUFNLElBQU4sQ0FBVyxHQUFYLENBRFo7QUFFQSxNQUFJLENBQUMsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLE1BQUksQ0FBQyxRQUFRLENBQVIsQ0FBTCxFQUFpQixPQUFPLEVBQVA7QUFDakIsU0FBTyxtQkFBbUIsUUFBUSxDQUFSLEVBQVcsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFuQixDQUFQO0FBQ0Q7O0lBRUssWTtBQUNKLDBCQUFjO0FBQUE7O0FBQ1osU0FBSyxJQUFMLEdBQVk7QUFDVixnQkFBVSxFQURBO0FBRVYsZ0JBQVU7QUFGQSxLQUFaO0FBSUEsU0FBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBSyxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFNBQUssb0JBQUwsR0FBNEIsRUFBNUI7QUFDRDs7OzsyQkFFTTtBQUFBOztBQUNMLFVBQUksS0FBSyxXQUFULEVBQXNCLE9BQU8sS0FBSyxXQUFMLENBQWlCLE9BQXhCO0FBQ3RCLFdBQUssV0FBTCxHQUFtQixFQUFFLEtBQUYsRUFBbkI7QUFDQSxXQUFLLE9BQUw7QUFDQSxVQUFJLEtBQUssSUFBTCxDQUFVLFFBQWQsRUFBd0I7QUFDdEIsZUFBTyxpQkFBUCxDQUF5QixXQUF6QixDQUNFLFlBQVksT0FBTyxRQUFQLENBQWdCLElBRDlCLEVBRUUsS0FBSyxJQUFMLENBQVUsUUFGWixFQUdFLEtBQUssSUFBTCxDQUFVLFFBSFosRUFJRSxvQkFBWTtBQUNWLGNBQUksS0FBSyxTQUFTLFFBQVQsQ0FBVDtBQUNBLGdCQUFLLElBQUwsR0FBWSxPQUFPLFVBQVAsQ0FBa0IsT0FBbEIsYUFDQSxFQURBLFNBQ00sTUFBSyxJQUFMLENBQVUsUUFEaEIsU0FDNEIsT0FBTyxRQUFQLENBQWdCLElBRDVDLE9BQVo7QUFHQSxnQkFBSyxXQUFMLENBQWlCLE9BQWpCO0FBQ0QsU0FWSCxFQVdFLFlBQU07QUFDSixpQkFBTyxRQUFQLEdBQWtCLGNBQWxCO0FBQ0E7QUFDRCxTQWRIO0FBZ0JELE9BakJELE1BaUJPO0FBQ0wsZUFBTyxRQUFQLEdBQWtCLGNBQWxCO0FBQ0Q7QUFDRCxhQUFPLEtBQUssV0FBTCxDQUFpQixPQUF4QjtBQUNEOzs7OEJBRVM7QUFDUixVQUFJLE9BQU8sbUJBQW1CLE1BQW5CLENBQVg7QUFDQSxVQUFJLElBQUosRUFBVSxPQUFPLEtBQUssSUFBTCxDQUFQO0FBQ1YsYUFBTyxTQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUksQ0FBQyxLQUFLLElBQUwsQ0FBVSxRQUFmLEVBQXlCO0FBQ3ZCLFlBQUksUUFBUSxPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQVo7QUFDQSxZQUFJLEtBQUosRUFBVztBQUNULGVBQUssSUFBTCxHQUFZLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFYLENBQVo7QUFDRDtBQUNGO0FBQ0QsYUFBTyxLQUFLLElBQVo7QUFDRDs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBSSxLQUFLLFlBQVQsRUFBdUI7QUFDckIsZUFBTyxLQUFLLFlBQUwsQ0FBa0IsT0FBekI7QUFDRDtBQUNELFdBQUssWUFBTCxHQUFvQixFQUFFLEtBQUYsRUFBcEI7QUFDQSxXQUFLLElBQUwsR0FBWSxJQUFaLENBQ0UsWUFBTTtBQUNKLFlBQUksT0FBTyxtQkFBbUIsTUFBbkIsQ0FBWDtBQUNBLFlBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxpQkFBTyxRQUFQLEdBQWtCLGNBQWxCO0FBQ0Q7QUFDRCxlQUFPLEtBQUssSUFBTCxDQUFQO0FBQ0EsZUFBTyxVQUFQLENBQWtCLElBQWxCLENBQ0UsT0FBSyxJQURQLEVBRUUsSUFGRixFQUdFLHFCQUFhO0FBQ1gsaUJBQUssS0FBTCxHQUFhLFNBQWI7QUFDQSxpQkFBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLE9BQUssS0FBL0I7QUFDQTtBQUNELFNBUEgsRUFRRSxZQUFNO0FBQ0osaUJBQU8sUUFBUCxHQUFrQixjQUFsQjtBQUNBO0FBQ0QsU0FYSDtBQWFELE9BcEJILEVBcUJFLGVBQU87QUFDTCxnQkFBUSxLQUFSLENBQWMsR0FBZDtBQUNBLGVBQU8sUUFBUCxHQUFrQixjQUFsQjtBQUNBO0FBQ0QsT0F6Qkg7QUEyQkEsYUFBTyxLQUFLLFlBQUwsQ0FBa0IsT0FBekI7QUFDRDs7O3FDQUNnQixLLEVBQU8sTyxFQUFTO0FBQUE7O0FBQy9CLFVBQUksQ0FBQyxNQUFNLFVBQVAsSUFBcUIsT0FBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLE1BQU0sVUFBckMsQ0FBekIsRUFBMkU7QUFDekUsbUJBQVcsWUFBTTtBQUNmLGlCQUFLLGdCQUFMLENBQXNCLEtBQXRCLEVBQTZCLE9BQTdCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRCxPQUpELE1BSU8sUUFBUSxPQUFSLENBQWdCLEtBQWhCO0FBQ1I7OztpQ0FDWSxLLEVBQU87QUFDbEIsVUFBSSxRQUFRLEVBQUUsS0FBRixFQUFaO0FBQ0EsV0FBSyxnQkFBTCxDQUFzQixLQUF0QixFQUE2QixLQUE3Qjs7QUFFQSxhQUFPLE1BQU0sT0FBYjtBQUNEOzs7aUNBQ1ksSyxFQUFPO0FBQUE7O0FBQ2xCLFVBQUksaUJBQWlCLE9BQU8sSUFBNUIsRUFBa0M7QUFDaEMsZUFBTyxLQUFLLFlBQUwsQ0FBa0IsTUFBTSxJQUF4QixDQUFQO0FBQ0Q7QUFDRCxVQUFJLEVBQUUsaUJBQWlCLE9BQU8sR0FBMUIsQ0FBSixFQUFvQztBQUNsQyxjQUFNLElBQUksS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDtBQUNELFVBQUksQ0FBQyxNQUFNLElBQU4sQ0FBVyxLQUFaLElBQXFCLE1BQU0sSUFBTixDQUFXLEtBQXBDLEVBQTJDO0FBQ3pDLGVBQU8sRUFBRSxPQUFGLENBQVUsTUFBTSxJQUFOLENBQVcsS0FBckIsQ0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLENBQUMsTUFBTSxJQUFOLENBQVcsS0FBaEIsRUFBdUI7QUFDNUIsY0FBTSxJQUFJLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLENBQUosRUFBNkM7QUFDM0MsZUFBTyxLQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLEVBQXdDLE9BQS9DO0FBQ0Q7QUFDRCxXQUFLLGdCQUFMLENBQXNCLE1BQU0sSUFBTixDQUFXLEtBQWpDLElBQTBDLEVBQUUsS0FBRixFQUExQztBQUNBLFVBQUk7QUFDRixjQUFNLElBQU4sQ0FBVyxhQUFLO0FBQ2QsaUJBQUssZ0JBQUwsQ0FBc0IsTUFBTSxJQUFOLENBQVcsS0FBakMsRUFBd0MsT0FBeEMsQ0FBZ0QsQ0FBaEQ7QUFDRCxTQUZEO0FBR0QsT0FKRCxDQUlFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsWUFBSSxVQUFVLEtBQUssZ0JBQUwsQ0FBc0IsTUFBTSxJQUFOLENBQVcsS0FBakMsQ0FBZDtBQUNBLGFBQUssZ0JBQUwsQ0FBc0IsTUFBTSxJQUFOLENBQVcsS0FBakMsSUFBMEMsU0FBMUM7QUFDQSxnQkFBUSxNQUFSO0FBQ0Q7QUFDRCxhQUFPLEtBQUssZ0JBQUwsQ0FBc0IsTUFBTSxJQUFOLENBQVcsS0FBakMsRUFBd0MsT0FBL0M7QUFDRDs7OzhCQUNTO0FBQ1IsYUFBTyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLGdCQUE1QixFQUE4QyxFQUE5QztBQUNEOzs7eUJBQ0ksSSxFQUFNO0FBQUE7O0FBQ1QsVUFBSSxLQUFLLG9CQUFMLENBQTBCLElBQTFCLENBQUosRUFBcUM7QUFDbkMsZUFBTyxLQUFLLG9CQUFMLENBQTBCLElBQTFCLEVBQWdDLE9BQXZDO0FBQ0Q7QUFDRCxXQUFLLG9CQUFMLENBQTBCLElBQTFCLElBQWtDLEVBQUUsS0FBRixFQUFsQzs7QUFFQSxhQUFPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FDRSxLQUFLLElBRFAsRUFFRSxJQUZGLEVBR0UsYUFBSztBQUNILGVBQUssb0JBQUwsQ0FBMEIsSUFBMUIsRUFBZ0MsT0FBaEMsQ0FBd0MsQ0FBeEM7QUFDRCxPQUxILEVBTUUsWUFBTTtBQUNKLGdCQUFRLEtBQVIsQ0FBYywrQkFBK0IsSUFBN0M7QUFDQSxZQUFJLFVBQVUsT0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUFkO0FBQ0EsZUFBSyxvQkFBTCxDQUEwQixJQUExQixJQUFrQyxTQUFsQztBQUNBLGdCQUFRLE1BQVI7QUFDRCxPQVhIOztBQWNBLGFBQU8sS0FBSyxvQkFBTCxDQUEwQixJQUExQixFQUFnQyxPQUF2QztBQUNEOzs7Ozs7a0JBR1ksWTs7Ozs7Ozs7O0FDMUtmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLEVBQWhCOztBQUVBLE9BQU8sTUFBUCxDQUFjLFlBQWQsR0FBNkIsSUFBSSxzQkFBSixFQUE3QjtBQUNBLE9BQU8sTUFBUCxDQUFjLHFCQUFkLEdBQXNDLElBQUksK0JBQUosRUFBdEM7QUFDQSxPQUFPLE1BQVAsQ0FBYyxXQUFkLEdBQTRCLElBQUkscUJBQUosRUFBNUI7O2tCQUVlO0FBQ2IsU0FEYSxtQkFDTCxHQURLLEVBQ0E7QUFDWCxRQUFJLFNBQUosQ0FBYyxhQUFkLEdBQThCLE9BQU8sTUFBUCxDQUFjLFlBQTVDO0FBQ0EsUUFBSSxTQUFKLENBQWMsWUFBZCxHQUE2QixPQUFPLE1BQVAsQ0FBYyxXQUEzQztBQUNBLFFBQUksU0FBSixDQUFjLHNCQUFkLEdBQXVDLE9BQU8sTUFBUCxDQUFjLHFCQUFyRDtBQUNELEdBTFk7O0FBTWIsZ0JBQWMsT0FBTyxNQUFQLENBQWMsWUFOZjtBQU9iLGVBQWEsT0FBTyxNQUFQLENBQWMsV0FQZDtBQVFiLHlCQUF1QixPQUFPLE1BQVAsQ0FBYztBQVJ4QixDOzs7QUNWZjs7Ozs7Ozs7Ozs7QUNzQkE7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBOzs7O0FBeEJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBREEsY0FBSSxHQUFKLENBQVEsZ0JBQVI7OztBQUdBLGNBQUksR0FBSixDQUFRLHFCQUFSO0FBQ0EsY0FBSSxHQUFKLENBQVEsa0JBQVI7O0FBRUEsSUFBSSxhQUFKLENBQVE7QUFDTixNQUFJLE1BREU7QUFFTixVQUFRO0FBQUEsV0FBSyxFQUFFLGFBQUYsQ0FBTDtBQUFBO0FBRkYsQ0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qISBWZWxvY2l0eUpTLm9yZyAoMS41LjIpLiAoQykgMjAxNCBKdWxpYW4gU2hhcGlyby4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UgKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBWZWxvY2l0eSBqUXVlcnkgU2hpbVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qISBWZWxvY2l0eUpTLm9yZyBqUXVlcnkgU2hpbSAoMS4wLjEpLiAoQykgMjAxNCBUaGUgalF1ZXJ5IEZvdW5kYXRpb24uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlLiAqL1xyXG5cclxuLyogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBqUXVlcnkgZnVuY3Rpb25zIHRoYXQgVmVsb2NpdHkgcmVsaWVzIG9uLCB0aGVyZWJ5IHJlbW92aW5nIFZlbG9jaXR5J3MgZGVwZW5kZW5jeSBvbiBhIGZ1bGwgY29weSBvZiBqUXVlcnksIGFuZCBhbGxvd2luZyBpdCB0byB3b3JrIGluIGFueSBlbnZpcm9ubWVudC4gKi9cclxuLyogVGhlc2Ugc2hpbW1lZCBmdW5jdGlvbnMgYXJlIG9ubHkgdXNlZCBpZiBqUXVlcnkgaXNuJ3QgcHJlc2VudC4gSWYgYm90aCB0aGlzIHNoaW0gYW5kIGpRdWVyeSBhcmUgbG9hZGVkLCBWZWxvY2l0eSBkZWZhdWx0cyB0byBqUXVlcnkgcHJvcGVyLiAqL1xyXG4vKiBCcm93c2VyIHN1cHBvcnQ6IFVzaW5nIHRoaXMgc2hpbSBpbnN0ZWFkIG9mIGpRdWVyeSBwcm9wZXIgcmVtb3ZlcyBzdXBwb3J0IGZvciBJRTguICovXHJcblxyXG4oZnVuY3Rpb24od2luZG93KSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0LyoqKioqKioqKioqKioqKlxyXG5cdCBTZXR1cFxyXG5cdCAqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIElmIGpRdWVyeSBpcyBhbHJlYWR5IGxvYWRlZCwgdGhlcmUncyBubyBwb2ludCBpbiBsb2FkaW5nIHRoaXMgc2hpbS4gKi9cclxuXHRpZiAod2luZG93LmpRdWVyeSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyogalF1ZXJ5IGJhc2UuICovXHJcblx0dmFyICQgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCkge1xyXG5cdFx0cmV0dXJuIG5ldyAkLmZuLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xyXG5cdH07XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKlxyXG5cdCBQcml2YXRlIE1ldGhvZHNcclxuXHQgKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIGpRdWVyeSAqL1xyXG5cdCQuaXNXaW5kb3cgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdC8qIGpzaGludCBlcWVxZXE6IGZhbHNlICovXHJcblx0XHRyZXR1cm4gb2JqICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxuXHR9O1xyXG5cclxuXHQvKiBqUXVlcnkgKi9cclxuXHQkLnR5cGUgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdGlmICghb2JqKSB7XHJcblx0XHRcdHJldHVybiBvYmogKyBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XHJcblx0XHRcdFx0Y2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCIgOlxyXG5cdFx0XHRcdHR5cGVvZiBvYmo7XHJcblx0fTtcclxuXHJcblx0LyogalF1ZXJ5ICovXHJcblx0JC5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcclxuXHRcdHJldHVybiAkLnR5cGUob2JqKSA9PT0gXCJhcnJheVwiO1xyXG5cdH07XHJcblxyXG5cdC8qIGpRdWVyeSAqL1xyXG5cdGZ1bmN0aW9uIGlzQXJyYXlsaWtlKG9iaikge1xyXG5cdFx0dmFyIGxlbmd0aCA9IG9iai5sZW5ndGgsXHJcblx0XHRcdFx0dHlwZSA9ICQudHlwZShvYmopO1xyXG5cclxuXHRcdGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgJC5pc1dpbmRvdyhvYmopKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob2JqLm5vZGVUeXBlID09PSAxICYmIGxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcclxuXHR9XHJcblxyXG5cdC8qKioqKioqKioqKioqKipcclxuXHQgJCBNZXRob2RzXHJcblx0ICoqKioqKioqKioqKioqKi9cclxuXHJcblx0LyogalF1ZXJ5OiBTdXBwb3J0IHJlbW92ZWQgZm9yIElFPDkuICovXHJcblx0JC5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHR2YXIga2V5O1xyXG5cclxuXHRcdGlmICghb2JqIHx8ICQudHlwZShvYmopICE9PSBcIm9iamVjdFwiIHx8IG9iai5ub2RlVHlwZSB8fCAkLmlzV2luZG93KG9iaikpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmIChvYmouY29uc3RydWN0b3IgJiZcclxuXHRcdFx0XHRcdCFoYXNPd24uY2FsbChvYmosIFwiY29uc3RydWN0b3JcIikgJiZcclxuXHRcdFx0XHRcdCFoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIikpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoa2V5IGluIG9iaikge1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XHJcblx0fTtcclxuXHJcblx0LyogalF1ZXJ5ICovXHJcblx0JC5lYWNoID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjaywgYXJncykge1xyXG5cdFx0dmFyIHZhbHVlLFxyXG5cdFx0XHRcdGkgPSAwLFxyXG5cdFx0XHRcdGxlbmd0aCA9IG9iai5sZW5ndGgsXHJcblx0XHRcdFx0aXNBcnJheSA9IGlzQXJyYXlsaWtlKG9iaik7XHJcblxyXG5cdFx0aWYgKGFyZ3MpIHtcclxuXHRcdFx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdFx0XHRmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmFwcGx5KG9ialtpXSwgYXJncyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yIChpIGluIG9iaikge1xyXG5cdFx0XHRcdFx0aWYgKCFvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmFwcGx5KG9ialtpXSwgYXJncyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoaXNBcnJheSkge1xyXG5cdFx0XHRcdGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yIChpIGluIG9iaikge1xyXG5cdFx0XHRcdFx0aWYgKCFvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pO1xyXG5cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9O1xyXG5cclxuXHQvKiBDdXN0b20gKi9cclxuXHQkLmRhdGEgPSBmdW5jdGlvbihub2RlLCBrZXksIHZhbHVlKSB7XHJcblx0XHQvKiAkLmdldERhdGEoKSAqL1xyXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dmFyIGdldElkID0gbm9kZVskLmV4cGFuZG9dLFxyXG5cdFx0XHRcdFx0c3RvcmUgPSBnZXRJZCAmJiBjYWNoZVtnZXRJZF07XHJcblxyXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RvcmU7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RvcmUpIHtcclxuXHRcdFx0XHRpZiAoa2V5IGluIHN0b3JlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3RvcmVba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LyogJC5zZXREYXRhKCkgKi9cclxuXHRcdH0gZWxzZSBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dmFyIHNldElkID0gbm9kZVskLmV4cGFuZG9dIHx8IChub2RlWyQuZXhwYW5kb10gPSArKyQudXVpZCk7XHJcblxyXG5cdFx0XHRjYWNoZVtzZXRJZF0gPSBjYWNoZVtzZXRJZF0gfHwge307XHJcblx0XHRcdGNhY2hlW3NldElkXVtrZXldID0gdmFsdWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyogQ3VzdG9tICovXHJcblx0JC5yZW1vdmVEYXRhID0gZnVuY3Rpb24obm9kZSwga2V5cykge1xyXG5cdFx0dmFyIGlkID0gbm9kZVskLmV4cGFuZG9dLFxyXG5cdFx0XHRcdHN0b3JlID0gaWQgJiYgY2FjaGVbaWRdO1xyXG5cclxuXHRcdGlmIChzdG9yZSkge1xyXG5cdFx0XHQvLyBDbGVhbnVwIHRoZSBlbnRpcmUgc3RvcmUgaWYgbm8ga2V5cyBhcmUgcHJvdmlkZWQuXHJcblx0XHRcdGlmICgha2V5cykge1xyXG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVtpZF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JC5lYWNoKGtleXMsIGZ1bmN0aW9uKF8sIGtleSkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHN0b3JlW2tleV07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKiBqUXVlcnkgKi9cclxuXHQkLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNyYywgY29weUlzQXJyYXksIGNvcHksIG5hbWUsIG9wdGlvbnMsIGNsb25lLFxyXG5cdFx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcclxuXHRcdFx0XHRpID0gMSxcclxuXHRcdFx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxyXG5cdFx0XHRcdGRlZXAgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0ZGVlcCA9IHRhcmdldDtcclxuXHJcblx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fTtcclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICQudHlwZSh0YXJnZXQpICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0dGFyZ2V0ID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGkgPT09IGxlbmd0aCkge1xyXG5cdFx0XHR0YXJnZXQgPSB0aGlzO1xyXG5cdFx0XHRpLS07XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoKG9wdGlvbnMgPSBhcmd1bWVudHNbaV0pKSB7XHJcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcclxuXHRcdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0YXJnZXQgPT09IGNvcHkpIHtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoJC5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9ICQuaXNBcnJheShjb3B5KSkpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgJC5pc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgJC5pc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gJC5leHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9O1xyXG5cclxuXHQvKiBqUXVlcnkgMS40LjMgKi9cclxuXHQkLnF1ZXVlID0gZnVuY3Rpb24oZWxlbSwgdHlwZSwgZGF0YSkge1xyXG5cdFx0ZnVuY3Rpb24gJG1ha2VBcnJheShhcnIsIHJlc3VsdHMpIHtcclxuXHRcdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XHJcblxyXG5cdFx0XHRpZiAoYXJyKSB7XHJcblx0XHRcdFx0aWYgKGlzQXJyYXlsaWtlKE9iamVjdChhcnIpKSkge1xyXG5cdFx0XHRcdFx0LyogJC5tZXJnZSAqL1xyXG5cdFx0XHRcdFx0KGZ1bmN0aW9uKGZpcnN0LCBzZWNvbmQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxyXG5cdFx0XHRcdFx0XHRcdFx0aiA9IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0d2hpbGUgKGogPCBsZW4pIHtcclxuXHRcdFx0XHRcdFx0XHRmaXJzdFtpKytdID0gc2Vjb25kW2orK107XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW4gIT09IGxlbikge1xyXG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzZWNvbmRbal0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zmlyc3RbaSsrXSA9IHNlY29uZFtqKytdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Zmlyc3QubGVuZ3RoID0gaTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBmaXJzdDtcclxuXHRcdFx0XHRcdH0pKHJldCwgdHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/IFthcnJdIDogYXJyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0W10ucHVzaC5jYWxsKHJldCwgYXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFlbGVtKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0eXBlID0gKHR5cGUgfHwgXCJmeFwiKSArIFwicXVldWVcIjtcclxuXHJcblx0XHR2YXIgcSA9ICQuZGF0YShlbGVtLCB0eXBlKTtcclxuXHJcblx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0cmV0dXJuIHEgfHwgW107XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFxIHx8ICQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHRxID0gJC5kYXRhKGVsZW0sIHR5cGUsICRtYWtlQXJyYXkoZGF0YSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cS5wdXNoKGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBxO1xyXG5cdH07XHJcblxyXG5cdC8qIGpRdWVyeSAxLjQuMyAqL1xyXG5cdCQuZGVxdWV1ZSA9IGZ1bmN0aW9uKGVsZW1zLCB0eXBlKSB7XHJcblx0XHQvKiBDdXN0b206IEVtYmVkIGVsZW1lbnQgaXRlcmF0aW9uLiAqL1xyXG5cdFx0JC5lYWNoKGVsZW1zLm5vZGVUeXBlID8gW2VsZW1zXSA6IGVsZW1zLCBmdW5jdGlvbihpLCBlbGVtKSB7XHJcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcclxuXHJcblx0XHRcdHZhciBxdWV1ZSA9ICQucXVldWUoZWxlbSwgdHlwZSksXHJcblx0XHRcdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XHJcblxyXG5cdFx0XHRpZiAoZm4gPT09IFwiaW5wcm9ncmVzc1wiKSB7XHJcblx0XHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZm4pIHtcclxuXHRcdFx0XHRpZiAodHlwZSA9PT0gXCJmeFwiKSB7XHJcblx0XHRcdFx0XHRxdWV1ZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZuLmNhbGwoZWxlbSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbSwgdHlwZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKipcclxuXHQgJC5mbiBNZXRob2RzXHJcblx0ICoqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0LyogalF1ZXJ5ICovXHJcblx0JC5mbiA9ICQucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdFx0LyogSnVzdCByZXR1cm4gdGhlIGVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gYXJyYXk7IGRvbid0IHByb2NlZWQgd2l0aCB0aGUgYWN0dWFsIGpRdWVyeSBub2RlIHdyYXBwaW5nIHByb2Nlc3MuICovXHJcblx0XHRcdGlmIChzZWxlY3Rvci5ub2RlVHlwZSkge1xyXG5cdFx0XHRcdHRoaXNbMF0gPSBzZWxlY3RvcjtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b2Zmc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0LyogalF1ZXJ5IGFsdGVyZWQgY29kZTogRHJvcHBlZCBkaXNjb25uZWN0ZWQgRE9NIG5vZGUgY2hlY2tpbmcuICovXHJcblx0XHRcdHZhciBib3ggPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jdW1lbnQuY2xpZW50VG9wIHx8IDApLFxyXG5cdFx0XHRcdGxlZnQ6IGJveC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvY3VtZW50LmNsaWVudExlZnQgfHwgMClcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8qIGpRdWVyeSAqL1xyXG5cdFx0XHRmdW5jdGlvbiBvZmZzZXRQYXJlbnRGbihlbGVtKSB7XHJcblx0XHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50O1xyXG5cclxuXHRcdFx0XHR3aGlsZSAob2Zmc2V0UGFyZW50ICYmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJodG1sXCIgJiYgb2Zmc2V0UGFyZW50LnN0eWxlICYmIG9mZnNldFBhcmVudC5zdHlsZS5wb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSBcInN0YXRpY1wiKSkge1xyXG5cdFx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qIFplcHRvICovXHJcblx0XHRcdHZhciBlbGVtID0gdGhpc1swXSxcclxuXHRcdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudEZuKGVsZW0pLFxyXG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKSxcclxuXHRcdFx0XHRcdHBhcmVudE9mZnNldCA9IC9eKD86Ym9keXxodG1sKSQvaS50ZXN0KG9mZnNldFBhcmVudC5ub2RlTmFtZSkgPyB7dG9wOiAwLCBsZWZ0OiAwfSA6ICQob2Zmc2V0UGFyZW50KS5vZmZzZXQoKTtcclxuXHJcblx0XHRcdG9mZnNldC50b3AgLT0gcGFyc2VGbG9hdChlbGVtLnN0eWxlLm1hcmdpblRvcCkgfHwgMDtcclxuXHRcdFx0b2Zmc2V0LmxlZnQgLT0gcGFyc2VGbG9hdChlbGVtLnN0eWxlLm1hcmdpbkxlZnQpIHx8IDA7XHJcblxyXG5cdFx0XHRpZiAob2Zmc2V0UGFyZW50LnN0eWxlKSB7XHJcblx0XHRcdFx0cGFyZW50T2Zmc2V0LnRvcCArPSBwYXJzZUZsb2F0KG9mZnNldFBhcmVudC5zdHlsZS5ib3JkZXJUb3BXaWR0aCkgfHwgMDtcclxuXHRcdFx0XHRwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJzZUZsb2F0KG9mZnNldFBhcmVudC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpIHx8IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCxcclxuXHRcdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKipcclxuXHQgUHJpdmF0ZSBWYXJpYWJsZXNcclxuXHQgKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0LyogRm9yICQuZGF0YSgpICovXHJcblx0dmFyIGNhY2hlID0ge307XHJcblx0JC5leHBhbmRvID0gXCJ2ZWxvY2l0eVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuXHQkLnV1aWQgPSAwO1xyXG5cclxuXHQvKiBGb3IgJC5xdWV1ZSgpICovXHJcblx0dmFyIGNsYXNzMnR5cGUgPSB7fSxcclxuXHRcdFx0aGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eSxcclxuXHRcdFx0dG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xyXG5cclxuXHR2YXIgdHlwZXMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIik7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y2xhc3MydHlwZVtcIltvYmplY3QgXCIgKyB0eXBlc1tpXSArIFwiXVwiXSA9IHR5cGVzW2ldLnRvTG93ZXJDYXNlKCk7XHJcblx0fVxyXG5cclxuXHQvKiBNYWtlcyAkKG5vZGUpIHBvc3NpYmxlLCB3aXRob3V0IGhhdmluZyB0byBjYWxsIGluaXQuICovXHJcblx0JC5mbi5pbml0LnByb3RvdHlwZSA9ICQuZm47XHJcblxyXG5cdC8qIEdsb2JhbGl6ZSBWZWxvY2l0eSBvbnRvIHRoZSB3aW5kb3csIGFuZCBhc3NpZ24gaXRzIFV0aWxpdGllcyBwcm9wZXJ0eS4gKi9cclxuXHR3aW5kb3cuVmVsb2NpdHkgPSB7VXRpbGl0aWVzOiAkfTtcclxufSkod2luZG93KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKipcclxuIFZlbG9jaXR5LmpzXHJcbiAqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdC8qIENvbW1vbkpTIG1vZHVsZS4gKi9cclxuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdFx0LyogQU1EIG1vZHVsZS4gKi9cclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoZmFjdG9yeSk7XHJcblx0XHQvKiBCcm93c2VyIGdsb2JhbHMuICovXHJcblx0fSBlbHNlIHtcclxuXHRcdGZhY3RvcnkoKTtcclxuXHR9XHJcbn0oZnVuY3Rpb24oKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGdsb2JhbCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKlxyXG5cdFx0IFN1bW1hcnlcclxuXHRcdCAqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0LypcclxuXHRcdCAtIENTUzogQ1NTIHN0YWNrIHRoYXQgd29ya3MgaW5kZXBlbmRlbnRseSBmcm9tIHRoZSByZXN0IG9mIFZlbG9jaXR5LlxyXG5cdFx0IC0gYW5pbWF0ZSgpOiBDb3JlIGFuaW1hdGlvbiBtZXRob2QgdGhhdCBpdGVyYXRlcyBvdmVyIHRoZSB0YXJnZXRlZCBlbGVtZW50cyBhbmQgcXVldWVzIHRoZSBpbmNvbWluZyBjYWxsIG9udG8gZWFjaCBlbGVtZW50IGluZGl2aWR1YWxseS5cclxuXHRcdCAtIFByZS1RdWV1ZWluZzogUHJlcGFyZSB0aGUgZWxlbWVudCBmb3IgYW5pbWF0aW9uIGJ5IGluc3RhbnRpYXRpbmcgaXRzIGRhdGEgY2FjaGUgYW5kIHByb2Nlc3NpbmcgdGhlIGNhbGwncyBvcHRpb25zLlxyXG5cdFx0IC0gUXVldWVpbmc6IFRoZSBsb2dpYyB0aGF0IHJ1bnMgb25jZSB0aGUgY2FsbCBoYXMgcmVhY2hlZCBpdHMgcG9pbnQgb2YgZXhlY3V0aW9uIGluIHRoZSBlbGVtZW50J3MgJC5xdWV1ZSgpIHN0YWNrLlxyXG5cdFx0IE1vc3QgbG9naWMgaXMgcGxhY2VkIGhlcmUgdG8gYXZvaWQgcmlza2luZyBpdCBiZWNvbWluZyBzdGFsZSAoaWYgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIGhhdmUgY2hhbmdlZCkuXHJcblx0XHQgLSBQdXNoaW5nOiBDb25zb2xpZGF0aW9uIG9mIHRoZSB0d2VlbiBkYXRhIGZvbGxvd2VkIGJ5IGl0cyBwdXNoIG9udG8gdGhlIGdsb2JhbCBpbi1wcm9ncmVzcyBjYWxscyBjb250YWluZXIuXHJcblx0XHQgLSB0aWNrKCk6IFRoZSBzaW5nbGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3AgcmVzcG9uc2libGUgZm9yIHR3ZWVuaW5nIGFsbCBpbi1wcm9ncmVzcyBjYWxscy5cclxuXHRcdCAtIGNvbXBsZXRlQ2FsbCgpOiBIYW5kbGVzIHRoZSBjbGVhbnVwIHByb2Nlc3MgZm9yIGVhY2ggVmVsb2NpdHkgY2FsbC5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKioqKioqKioqKioqKioqKioqKipcclxuXHRcdCBIZWxwZXIgRnVuY3Rpb25zXHJcblx0XHQgKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIElFIGRldGVjdGlvbi4gR2lzdDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vanVsaWFuc2hhcGlyby85MDk4NjA5ICovXHJcblx0XHR2YXIgSUUgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSA3OyBpID4gNDsgaS0tKSB7XHJcblx0XHRcdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0XHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gXCI8IS0tW2lmIElFIFwiICsgaSArIFwiXT48c3Bhbj48L3NwYW4+PCFbZW5kaWZdLS0+XCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGRpdiA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdC8qIHJBRiBzaGltLiBHaXN0OiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qdWxpYW5zaGFwaXJvLzk0OTc1MTMgKi9cclxuXHRcdHZhciByQUZTaGltID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGltZUxhc3QgPSAwO1xyXG5cclxuXHRcdFx0cmV0dXJuIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHZhciB0aW1lQ3VycmVudCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXHJcblx0XHRcdFx0XHRcdHRpbWVEZWx0YTtcclxuXHJcblx0XHRcdFx0LyogRHluYW1pY2FsbHkgc2V0IGRlbGF5IG9uIGEgcGVyLXRpY2sgYmFzaXMgdG8gbWF0Y2ggNjBmcHMuICovXHJcblx0XHRcdFx0LyogVGVjaG5pcXVlIGJ5IEVyaWsgTW9sbGVyLiBNSVQgbGljZW5zZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEgKi9cclxuXHRcdFx0XHR0aW1lRGVsdGEgPSBNYXRoLm1heCgwLCAxNiAtICh0aW1lQ3VycmVudCAtIHRpbWVMYXN0KSk7XHJcblx0XHRcdFx0dGltZUxhc3QgPSB0aW1lQ3VycmVudCArIHRpbWVEZWx0YTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjayh0aW1lQ3VycmVudCArIHRpbWVEZWx0YSk7XHJcblx0XHRcdFx0fSwgdGltZURlbHRhKTtcclxuXHRcdFx0fTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0dmFyIHBlcmZvcm1hbmNlID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcGVyZiA9IHdpbmRvdy5wZXJmb3JtYW5jZSB8fCB7fTtcclxuXHJcblx0XHRcdGlmICh0eXBlb2YgcGVyZi5ub3cgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHZhciBub3dPZmZzZXQgPSBwZXJmLnRpbWluZyAmJiBwZXJmLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQgPyBwZXJmLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQgOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuXHRcdFx0XHRwZXJmLm5vdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBub3dPZmZzZXQ7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGVyZjtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0LyogQXJyYXkgY29tcGFjdGluZy4gQ29weXJpZ2h0IExvLURhc2guIE1JVCBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dCAqL1xyXG5cdFx0ZnVuY3Rpb24gY29tcGFjdFNwYXJzZUFycmF5KGFycmF5KSB7XHJcblx0XHRcdHZhciBpbmRleCA9IC0xLFxyXG5cdFx0XHRcdFx0bGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblxyXG5cdFx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG5cdFx0XHRcdHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcclxuXHJcblx0XHRcdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaCh2YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2hpbSBmb3IgXCJmaXhpbmdcIiBJRSdzIGxhY2sgb2Ygc3VwcG9ydCAoSUUgPCA5KSBmb3IgYXBwbHlpbmcgc2xpY2VcclxuXHRcdCAqIG9uIGhvc3Qgb2JqZWN0cyBsaWtlIE5hbWVkTm9kZU1hcCwgTm9kZUxpc3QsIGFuZCBIVE1MQ29sbGVjdGlvblxyXG5cdFx0ICogKHRlY2huaWNhbGx5LCBzaW5jZSBob3N0IG9iamVjdHMgaGF2ZSBiZWVuIGltcGxlbWVudGF0aW9uLWRlcGVuZGVudCxcclxuXHRcdCAqIGF0IGxlYXN0IGJlZm9yZSBFUzIwMTUsIElFIGhhc24ndCBuZWVkZWQgdG8gd29yayB0aGlzIHdheSkuXHJcblx0XHQgKiBBbHNvIHdvcmtzIG9uIHN0cmluZ3MsIGZpeGVzIElFIDwgOSB0byBhbGxvdyBhbiBleHBsaWNpdCB1bmRlZmluZWRcclxuXHRcdCAqIGZvciB0aGUgMm5kIGFyZ3VtZW50IChhcyBpbiBGaXJlZm94KSwgYW5kIHByZXZlbnRzIGVycm9ycyB3aGVuXHJcblx0XHQgKiBjYWxsZWQgb24gb3RoZXIgRE9NIG9iamVjdHMuXHJcblx0XHQgKi9cclxuXHRcdHZhciBfc2xpY2UgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Ly8gQ2FuJ3QgYmUgdXNlZCB3aXRoIERPTSBlbGVtZW50cyBpbiBJRSA8IDlcclxuXHRcdFx0XHRzbGljZS5jYWxsKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcblx0XHRcdFx0cmV0dXJuIHNsaWNlO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7IC8vIEZhaWxzIGluIElFIDwgOVxyXG5cclxuXHRcdFx0XHQvLyBUaGlzIHdpbGwgd29yayBmb3IgZ2VudWluZSBhcnJheXMsIGFycmF5LWxpa2Ugb2JqZWN0cywgXHJcblx0XHRcdFx0Ly8gTmFtZWROb2RlTWFwIChhdHRyaWJ1dGVzLCBlbnRpdGllcywgbm90YXRpb25zKSxcclxuXHRcdFx0XHQvLyBOb2RlTGlzdCAoZS5nLiwgZ2V0RWxlbWVudHNCeVRhZ05hbWUpLCBIVE1MQ29sbGVjdGlvbiAoZS5nLiwgY2hpbGROb2RlcyksXHJcblx0XHRcdFx0Ly8gYW5kIHdpbGwgbm90IGZhaWwgb24gb3RoZXIgRE9NIG9iamVjdHMgKGFzIGRvIERPTSBlbGVtZW50cyBpbiBJRSA8IDkpXHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcclxuXHRcdFx0XHRcdHZhciBsZW4gPSB0aGlzLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGJlZ2luICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdFx0XHRcdGJlZ2luID0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIElFIDwgOSBnZXRzIHVuaGFwcHkgd2l0aCBhbiB1bmRlZmluZWQgZW5kIGFyZ3VtZW50XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGVuZCAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBsZW47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBGb3IgbmF0aXZlIEFycmF5IG9iamVjdHMsIHdlIHVzZSB0aGUgbmF0aXZlIHNsaWNlIGZ1bmN0aW9uXHJcblx0XHRcdFx0XHRpZiAodGhpcy5zbGljZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gc2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIEZvciBhcnJheSBsaWtlIG9iamVjdCB3ZSBoYW5kbGUgaXQgb3Vyc2VsdmVzLlxyXG5cdFx0XHRcdFx0dmFyIGksXHJcblx0XHRcdFx0XHRcdFx0Y2xvbmVkID0gW10sXHJcblx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIG5lZ2F0aXZlIHZhbHVlIGZvciBcImJlZ2luXCJcclxuXHRcdFx0XHRcdFx0XHRzdGFydCA9IChiZWdpbiA+PSAwKSA/IGJlZ2luIDogTWF0aC5tYXgoMCwgbGVuICsgYmVnaW4pLFxyXG5cdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBuZWdhdGl2ZSB2YWx1ZSBmb3IgXCJlbmRcIlxyXG5cdFx0XHRcdFx0XHRcdHVwVG8gPSBlbmQgPCAwID8gbGVuICsgZW5kIDogTWF0aC5taW4oZW5kLCBsZW4pLFxyXG5cdFx0XHRcdFx0XHRcdC8vIEFjdHVhbCBleHBlY3RlZCBzaXplIG9mIHRoZSBzbGljZVxyXG5cdFx0XHRcdFx0XHRcdHNpemUgPSB1cFRvIC0gc3RhcnQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNpemUgPiAwKSB7XHJcblx0XHRcdFx0XHRcdGNsb25lZCA9IG5ldyBBcnJheShzaXplKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY2hhckF0KSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVkW2ldID0gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVkW2ldID0gdGhpc1tzdGFydCArIGldO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lZDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdC8qIC5pbmRleE9mIGRvZXNuJ3QgZXhpc3QgaW4gSUU8OSAqL1xyXG5cdFx0dmFyIF9pbkFycmF5ID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGFyciwgdmFsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYXJyLmluY2x1ZGVzKHZhbCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oYXJyLCB2YWwpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2YWwpID49IDA7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oYXJyLCB2YWwpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGFycltpXSA9PT0gdmFsKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzYW5pdGl6ZUVsZW1lbnRzKGVsZW1lbnRzKSB7XHJcblx0XHRcdC8qIFVud3JhcCBqUXVlcnkvWmVwdG8gb2JqZWN0cy4gKi9cclxuXHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKGVsZW1lbnRzKSkge1xyXG5cdFx0XHRcdGVsZW1lbnRzID0gX3NsaWNlLmNhbGwoZWxlbWVudHMpO1xyXG5cdFx0XHRcdC8qIFdyYXAgYSBzaW5nbGUgZWxlbWVudCBpbiBhbiBhcnJheSBzbyB0aGF0ICQuZWFjaCgpIGNhbiBpdGVyYXRlIHdpdGggdGhlIGVsZW1lbnQgaW5zdGVhZCBvZiBpdHMgbm9kZSdzIGNoaWxkcmVuLiAqL1xyXG5cdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNOb2RlKGVsZW1lbnRzKSkge1xyXG5cdFx0XHRcdGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGVsZW1lbnRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBUeXBlID0ge1xyXG5cdFx0XHRpc051bWJlcjogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB2YXJpYWJsZSA9PT0gXCJudW1iZXJcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlzU3RyaW5nOiBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHZhcmlhYmxlID09PSBcInN0cmluZ1wiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlzRnVuY3Rpb246IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNOb2RlOiBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cdFx0XHRcdHJldHVybiB2YXJpYWJsZSAmJiB2YXJpYWJsZS5ub2RlVHlwZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0LyogRGV0ZXJtaW5lIGlmIHZhcmlhYmxlIGlzIGFuIGFycmF5LWxpa2Ugd3JhcHBlZCBqUXVlcnksIFplcHRvIG9yIHNpbWlsYXIgZWxlbWVudCwgb3IgZXZlbiBhIE5vZGVMaXN0IGV0Yy4gKi9cclxuXHRcdFx0LyogTk9URTogSFRNTEZvcm1FbGVtZW50cyBhbHNvIGhhdmUgYSBsZW5ndGguICovXHJcblx0XHRcdGlzV3JhcHBlZDogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFyaWFibGVcclxuXHRcdFx0XHRcdFx0JiYgdmFyaWFibGUgIT09IHdpbmRvd1xyXG5cdFx0XHRcdFx0XHQmJiBUeXBlLmlzTnVtYmVyKHZhcmlhYmxlLmxlbmd0aClcclxuXHRcdFx0XHRcdFx0JiYgIVR5cGUuaXNTdHJpbmcodmFyaWFibGUpXHJcblx0XHRcdFx0XHRcdCYmICFUeXBlLmlzRnVuY3Rpb24odmFyaWFibGUpXHJcblx0XHRcdFx0XHRcdCYmICFUeXBlLmlzTm9kZSh2YXJpYWJsZSlcclxuXHRcdFx0XHRcdFx0JiYgKHZhcmlhYmxlLmxlbmd0aCA9PT0gMCB8fCBUeXBlLmlzTm9kZSh2YXJpYWJsZVswXSkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc1NWRzogZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gd2luZG93LlNWR0VsZW1lbnQgJiYgKHZhcmlhYmxlIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIG5hbWUgaW4gdmFyaWFibGUpIHtcclxuXHRcdFx0XHRcdGlmICh2YXJpYWJsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKipcclxuXHRcdCBEZXBlbmRlbmNpZXNcclxuXHRcdCAqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHR2YXIgJCxcclxuXHRcdFx0XHRpc0pRdWVyeSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmIChnbG9iYWwuZm4gJiYgZ2xvYmFsLmZuLmpxdWVyeSkge1xyXG5cdFx0XHQkID0gZ2xvYmFsO1xyXG5cdFx0XHRpc0pRdWVyeSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkID0gd2luZG93LlZlbG9jaXR5LlV0aWxpdGllcztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoSUUgPD0gOCAmJiAhaXNKUXVlcnkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7XHJcblx0XHR9IGVsc2UgaWYgKElFIDw9IDcpIHtcclxuXHRcdFx0LyogUmV2ZXJ0IHRvIGpRdWVyeSdzICQuYW5pbWF0ZSgpLCBhbmQgbG9zZSBWZWxvY2l0eSdzIGV4dHJhIGZlYXR1cmVzLiAqL1xyXG5cdFx0XHRqUXVlcnkuZm4udmVsb2NpdHkgPSBqUXVlcnkuZm4uYW5pbWF0ZTtcclxuXHJcblx0XHRcdC8qIE5vdyB0aGF0ICQuZm4udmVsb2NpdHkgaXMgYWxpYXNlZCwgYWJvcnQgdGhpcyBWZWxvY2l0eSBkZWNsYXJhdGlvbi4gKi9cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKioqKioqKioqKioqKioqKlxyXG5cdFx0IENvbnN0YW50c1xyXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdHZhciBEVVJBVElPTl9ERUZBVUxUID0gNDAwLFxyXG5cdFx0XHRcdEVBU0lOR19ERUZBVUxUID0gXCJzd2luZ1wiO1xyXG5cclxuXHRcdC8qKioqKioqKioqKioqXHJcblx0XHQgU3RhdGVcclxuXHRcdCAqKioqKioqKioqKioqL1xyXG5cclxuXHRcdHZhciBWZWxvY2l0eSA9IHtcclxuXHRcdFx0LyogQ29udGFpbmVyIGZvciBwYWdlLXdpZGUgVmVsb2NpdHkgc3RhdGUgZGF0YS4gKi9cclxuXHRcdFx0U3RhdGU6IHtcclxuXHRcdFx0XHQvKiBEZXRlY3QgbW9iaWxlIGRldmljZXMgdG8gZGV0ZXJtaW5lIGlmIG1vYmlsZUhBIHNob3VsZCBiZSB0dXJuZWQgb24uICovXHJcblx0XHRcdFx0aXNNb2JpbGU6IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblx0XHRcdFx0LyogVGhlIG1vYmlsZUhBIG9wdGlvbidzIGJlaGF2aW9yIGNoYW5nZXMgb24gb2xkZXIgQW5kcm9pZCBkZXZpY2VzIChHaW5nZXJicmVhZCwgdmVyc2lvbnMgMi4zLjMtMi4zLjcpLiAqL1xyXG5cdFx0XHRcdGlzQW5kcm9pZDogL0FuZHJvaWQvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxcclxuXHRcdFx0XHRpc0dpbmdlcmJyZWFkOiAvQW5kcm9pZCAyXFwuM1xcLlszLTddL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblx0XHRcdFx0aXNDaHJvbWU6IHdpbmRvdy5jaHJvbWUsXHJcblx0XHRcdFx0aXNGaXJlZm94OiAvRmlyZWZveC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLFxyXG5cdFx0XHRcdC8qIENyZWF0ZSBhIGNhY2hlZCBlbGVtZW50IGZvciByZS11c2Ugd2hlbiBjaGVja2luZyBmb3IgQ1NTIHByb3BlcnR5IHByZWZpeGVzLiAqL1xyXG5cdFx0XHRcdHByZWZpeEVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcblx0XHRcdFx0LyogQ2FjaGUgZXZlcnkgcHJlZml4IG1hdGNoIHRvIGF2b2lkIHJlcGVhdGluZyBsb29rdXBzLiAqL1xyXG5cdFx0XHRcdHByZWZpeE1hdGNoZXM6IHt9LFxyXG5cdFx0XHRcdC8qIENhY2hlIHRoZSBhbmNob3IgdXNlZCBmb3IgYW5pbWF0aW5nIHdpbmRvdyBzY3JvbGxpbmcuICovXHJcblx0XHRcdFx0c2Nyb2xsQW5jaG9yOiBudWxsLFxyXG5cdFx0XHRcdC8qIENhY2hlIHRoZSBicm93c2VyLXNwZWNpZmljIHByb3BlcnR5IG5hbWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Nyb2xsIGFuY2hvci4gKi9cclxuXHRcdFx0XHRzY3JvbGxQcm9wZXJ0eUxlZnQ6IG51bGwsXHJcblx0XHRcdFx0c2Nyb2xsUHJvcGVydHlUb3A6IG51bGwsXHJcblx0XHRcdFx0LyogS2VlcCB0cmFjayBvZiB3aGV0aGVyIG91ciBSQUYgdGljayBpcyBydW5uaW5nLiAqL1xyXG5cdFx0XHRcdGlzVGlja2luZzogZmFsc2UsXHJcblx0XHRcdFx0LyogQ29udGFpbmVyIGZvciBldmVyeSBpbi1wcm9ncmVzcyBjYWxsIHRvIFZlbG9jaXR5LiAqL1xyXG5cdFx0XHRcdGNhbGxzOiBbXSxcclxuXHRcdFx0XHRkZWxheWVkRWxlbWVudHM6IHtcclxuXHRcdFx0XHRcdGNvdW50OiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBWZWxvY2l0eSdzIGN1c3RvbSBDU1Mgc3RhY2suIE1hZGUgZ2xvYmFsIGZvciB1bml0IHRlc3RpbmcuICovXHJcblx0XHRcdENTUzogey8qIERlZmluZWQgYmVsb3cuICovfSxcclxuXHRcdFx0LyogQSBzaGltIG9mIHRoZSBqUXVlcnkgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCBieSBWZWxvY2l0eSAtLSBwcm92aWRlZCBieSBWZWxvY2l0eSdzIG9wdGlvbmFsIGpRdWVyeSBzaGltLiAqL1xyXG5cdFx0XHRVdGlsaXRpZXM6ICQsXHJcblx0XHRcdC8qIENvbnRhaW5lciBmb3IgdGhlIHVzZXIncyBjdXN0b20gYW5pbWF0aW9uIHJlZGlyZWN0cyB0aGF0IGFyZSByZWZlcmVuY2VkIGJ5IG5hbWUgaW4gcGxhY2Ugb2YgdGhlIHByb3BlcnRpZXMgbWFwIGFyZ3VtZW50LiAqL1xyXG5cdFx0XHRSZWRpcmVjdHM6IHsvKiBNYW51YWxseSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyLiAqL30sXHJcblx0XHRcdEVhc2luZ3M6IHsvKiBEZWZpbmVkIGJlbG93LiAqL30sXHJcblx0XHRcdC8qIEF0dGVtcHQgdG8gdXNlIEVTNiBQcm9taXNlcyBieSBkZWZhdWx0LiBVc2VycyBjYW4gb3ZlcnJpZGUgdGhpcyB3aXRoIGEgdGhpcmQtcGFydHkgcHJvbWlzZXMgbGlicmFyeS4gKi9cclxuXHRcdFx0UHJvbWlzZTogd2luZG93LlByb21pc2UsXHJcblx0XHRcdC8qIFZlbG9jaXR5IG9wdGlvbiBkZWZhdWx0cywgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgdXNlci4gKi9cclxuXHRcdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0XHRxdWV1ZTogXCJcIixcclxuXHRcdFx0XHRkdXJhdGlvbjogRFVSQVRJT05fREVGQVVMVCxcclxuXHRcdFx0XHRlYXNpbmc6IEVBU0lOR19ERUZBVUxULFxyXG5cdFx0XHRcdGJlZ2luOiB1bmRlZmluZWQsXHJcblx0XHRcdFx0Y29tcGxldGU6IHVuZGVmaW5lZCxcclxuXHRcdFx0XHRwcm9ncmVzczogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdGRpc3BsYXk6IHVuZGVmaW5lZCxcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiB1bmRlZmluZWQsXHJcblx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0ZGVsYXk6IGZhbHNlLFxyXG5cdFx0XHRcdG1vYmlsZUhBOiB0cnVlLFxyXG5cdFx0XHRcdC8qIEFkdmFuY2VkOiBTZXQgdG8gZmFsc2UgdG8gcHJldmVudCBwcm9wZXJ0eSB2YWx1ZXMgZnJvbSBiZWluZyBjYWNoZWQgYmV0d2VlbiBjb25zZWN1dGl2ZSBWZWxvY2l0eS1pbml0aWF0ZWQgY2hhaW4gY2FsbHMuICovXHJcblx0XHRcdFx0X2NhY2hlVmFsdWVzOiB0cnVlLFxyXG5cdFx0XHRcdC8qIEFkdmFuY2VkOiBTZXQgdG8gZmFsc2UgaWYgdGhlIHByb21pc2Ugc2hvdWxkIGFsd2F5cyByZXNvbHZlIG9uIGVtcHR5IGVsZW1lbnQgbGlzdHMuICovXHJcblx0XHRcdFx0cHJvbWlzZVJlamVjdEVtcHR5OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIEEgZGVzaWduIGdvYWwgb2YgVmVsb2NpdHkgaXMgdG8gY2FjaGUgZGF0YSB3aGVyZXZlciBwb3NzaWJsZSBpbiBvcmRlciB0byBhdm9pZCBET00gcmVxdWVyeWluZy4gQWNjb3JkaW5nbHksIGVhY2ggZWxlbWVudCBoYXMgYSBkYXRhIGNhY2hlLiAqL1xyXG5cdFx0XHRpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0JC5kYXRhKGVsZW1lbnQsIFwidmVsb2NpdHlcIiwge1xyXG5cdFx0XHRcdFx0LyogU3RvcmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBlbGVtZW50LCBzaW5jZSBpdHMgcHJvcGVydGllcyBhcmUgcmV0cmlldmVkIGFuZCB1cGRhdGVkIGRpZmZlcmVudGx5IHRoYW4gc3RhbmRhcmQgSFRNTCBlbGVtZW50cy4gKi9cclxuXHRcdFx0XHRcdGlzU1ZHOiBUeXBlLmlzU1ZHKGVsZW1lbnQpLFxyXG5cdFx0XHRcdFx0LyogS2VlcCB0cmFjayBvZiB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZCBieSBWZWxvY2l0eS5cclxuXHRcdFx0XHRcdCBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgcHJvcGVydHkgdmFsdWVzIGFyZSBub3QgdHJhbnNmZXJyZWQgYmV0d2VlbiBub24tY29uc2VjdXRpdmUgKHN0YWxlKSBjYWxscy4gKi9cclxuXHRcdFx0XHRcdGlzQW5pbWF0aW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdC8qIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50J3MgbGl2ZSBjb21wdXRlZFN0eWxlIG9iamVjdC4gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvd2luZG93LmdldENvbXB1dGVkU3R5bGUgKi9cclxuXHRcdFx0XHRcdGNvbXB1dGVkU3R5bGU6IG51bGwsXHJcblx0XHRcdFx0XHQvKiBUd2VlbiBkYXRhIGlzIGNhY2hlZCBmb3IgZWFjaCBhbmltYXRpb24gb24gdGhlIGVsZW1lbnQgc28gdGhhdCBkYXRhIGNhbiBiZSBwYXNzZWQgYWNyb3NzIGNhbGxzIC0tXHJcblx0XHRcdFx0XHQgaW4gcGFydGljdWxhciwgZW5kIHZhbHVlcyBhcmUgdXNlZCBhcyBzdWJzZXF1ZW50IHN0YXJ0IHZhbHVlcyBpbiBjb25zZWN1dGl2ZSBWZWxvY2l0eSBjYWxscy4gKi9cclxuXHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lcjogbnVsbCxcclxuXHRcdFx0XHRcdC8qIFRoZSBmdWxsIHJvb3QgcHJvcGVydHkgdmFsdWVzIG9mIGVhY2ggQ1NTIGhvb2sgYmVpbmcgYW5pbWF0ZWQgb24gdGhpcyBlbGVtZW50IGFyZSBjYWNoZWQgc28gdGhhdDpcclxuXHRcdFx0XHRcdCAxKSBDb25jdXJyZW50bHktYW5pbWF0aW5nIGhvb2tzIHNoYXJpbmcgdGhlIHNhbWUgcm9vdCBjYW4gaGF2ZSB0aGVpciByb290IHZhbHVlcycgbWVyZ2VkIGludG8gb25lIHdoaWxlIHR3ZWVuaW5nLlxyXG5cdFx0XHRcdFx0IDIpIFBvc3QtaG9vay1pbmplY3Rpb24gcm9vdCB2YWx1ZXMgY2FuIGJlIHRyYW5zZmVycmVkIG92ZXIgdG8gY29uc2VjdXRpdmVseSBjaGFpbmVkIFZlbG9jaXR5IGNhbGxzIGFzIHN0YXJ0aW5nIHJvb3QgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWVDYWNoZToge30sXHJcblx0XHRcdFx0XHQvKiBBIGNhY2hlIGZvciB0cmFuc2Zvcm0gdXBkYXRlcywgd2hpY2ggbXVzdCBiZSBtYW51YWxseSBmbHVzaGVkIHZpYSBDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZSgpLiAqL1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtQ2FjaGU6IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIEEgcGFyYWxsZWwgdG8galF1ZXJ5J3MgJC5jc3MoKSwgdXNlZCBmb3IgZ2V0dGluZy9zZXR0aW5nIFZlbG9jaXR5J3MgaG9va2VkIENTUyBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRob29rOiBudWxsLCAvKiBEZWZpbmVkIGJlbG93LiAqL1xyXG5cdFx0XHQvKiBWZWxvY2l0eS13aWRlIGFuaW1hdGlvbiB0aW1lIHJlbWFwcGluZyBmb3IgdGVzdGluZyBwdXJwb3Nlcy4gKi9cclxuXHRcdFx0bW9jazogZmFsc2UsXHJcblx0XHRcdHZlcnNpb246IHttYWpvcjogMSwgbWlub3I6IDUsIHBhdGNoOiAyfSxcclxuXHRcdFx0LyogU2V0IHRvIDEgb3IgMiAobW9zdCB2ZXJib3NlKSB0byBvdXRwdXQgZGVidWcgaW5mbyB0byBjb25zb2xlLiAqL1xyXG5cdFx0XHRkZWJ1ZzogZmFsc2UsXHJcblx0XHRcdC8qIFVzZSByQUYgaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcCB3aGVuIGF2YWlsYWJsZSAqL1xyXG5cdFx0XHR0aW1lc3RhbXA6IHRydWUsXHJcblx0XHRcdC8qIFBhdXNlIGFsbCBhbmltYXRpb25zICovXHJcblx0XHRcdHBhdXNlQWxsOiBmdW5jdGlvbihxdWV1ZU5hbWUpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuXHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSBhIHF1ZXVlTmFtZSBhbmQgdGhpcyBjYWxsIGlzIG5vdCBvbiB0aGF0IHF1ZXVlLCBza2lwICovXHJcblx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHVuZGVmaW5lZCAmJiAoKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgfHwgKGFjdGl2ZUNhbGxbMl0ucXVldWUgPT09IGZhbHNlKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogU2V0IGNhbGwgdG8gcGF1c2VkICovXHJcblx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbNV0gPSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdW1lOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvKiBQYXVzZSB0aW1lcnMgb24gYW55IGN1cnJlbnRseSBkZWxheWVkIGNhbGxzICovXHJcblx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cywgZnVuY3Rpb24oaywgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHBhdXNlRGVsYXlPbkVsZW1lbnQoZWxlbWVudCwgY3VycmVudFRpbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKiBSZXN1bWUgYWxsIGFuaW1hdGlvbnMgKi9cclxuXHRcdFx0cmVzdW1lQWxsOiBmdW5jdGlvbihxdWV1ZU5hbWUpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuXHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSBhIHF1ZXVlTmFtZSBhbmQgdGhpcyBjYWxsIGlzIG5vdCBvbiB0aGF0IHF1ZXVlLCBza2lwICovXHJcblx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHVuZGVmaW5lZCAmJiAoKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgfHwgKGFjdGl2ZUNhbGxbMl0ucXVldWUgPT09IGZhbHNlKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogU2V0IGNhbGwgdG8gcmVzdW1lZCBpZiBpdCB3YXMgcGF1c2VkICovXHJcblx0XHRcdFx0XHRcdGlmIChhY3RpdmVDYWxsWzVdKSB7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFs1XS5yZXN1bWUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0LyogUmVzdW1lIHRpbWVycyBvbiBhbnkgY3VycmVudGx5IGRlbGF5ZWQgY2FsbHMgKi9cclxuXHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzLCBmdW5jdGlvbihrLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRpZiAoIWVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzdW1lRGVsYXlPbkVsZW1lbnQoZWxlbWVudCwgY3VycmVudFRpbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIFJldHJpZXZlIHRoZSBhcHByb3ByaWF0ZSBzY3JvbGwgYW5jaG9yIGFuZCBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgYnJvd3NlcjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy5zY3JvbGxZICovXHJcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsQW5jaG9yID0gd2luZG93O1xyXG5cdFx0XHRWZWxvY2l0eS5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQgPSBcInBhZ2VYT2Zmc2V0XCI7XHJcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wID0gXCJwYWdlWU9mZnNldFwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsQW5jaG9yID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5O1xyXG5cdFx0XHRWZWxvY2l0eS5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQgPSBcInNjcm9sbExlZnRcIjtcclxuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3AgPSBcInNjcm9sbFRvcFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNob3J0aGFuZCBhbGlhcyBmb3IgalF1ZXJ5J3MgJC5kYXRhKCkgdXRpbGl0eS4gKi9cclxuXHRcdGZ1bmN0aW9uIERhdGEoZWxlbWVudCkge1xyXG5cdFx0XHQvKiBIYXJkY29kZSBhIHJlZmVyZW5jZSB0byB0aGUgcGx1Z2luIG5hbWUuICovXHJcblx0XHRcdHZhciByZXNwb25zZSA9ICQuZGF0YShlbGVtZW50LCBcInZlbG9jaXR5XCIpO1xyXG5cclxuXHRcdFx0LyogalF1ZXJ5IDw9MS40LjIgcmV0dXJucyBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkIHdoZW4gbm8gbWF0Y2ggaXMgZm91bmQuIFdlIG5vcm1hbGl6ZSB0aGlzIGJlaGF2aW9yLiAqL1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UgPT09IG51bGwgPyB1bmRlZmluZWQgOiByZXNwb25zZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKioqKioqKioqKioqKipcclxuXHRcdCBEZWxheSBUaW1lclxyXG5cdFx0ICoqKioqKioqKioqKioqL1xyXG5cclxuXHRcdGZ1bmN0aW9uIHBhdXNlRGVsYXlPbkVsZW1lbnQoZWxlbWVudCwgY3VycmVudFRpbWUpIHtcclxuXHRcdFx0LyogQ2hlY2sgZm9yIGFueSBkZWxheSB0aW1lcnMsIGFuZCBwYXVzZSB0aGUgc2V0IHRpbWVvdXRzICh3aGlsZSBwcmVzZXJ2aW5nIHRpbWUgZGF0YSlcclxuXHRcdFx0IHRvIGJlIHJlc3VtZWQgd2hlbiB0aGUgXCJyZXN1bWVcIiBjb21tYW5kIGlzIGlzc3VlZCAqL1xyXG5cdFx0XHR2YXIgZGF0YSA9IERhdGEoZWxlbWVudCk7XHJcblx0XHRcdGlmIChkYXRhICYmIGRhdGEuZGVsYXlUaW1lciAmJiAhZGF0YS5kZWxheVBhdXNlZCkge1xyXG5cdFx0XHRcdGRhdGEuZGVsYXlSZW1haW5pbmcgPSBkYXRhLmRlbGF5IC0gY3VycmVudFRpbWUgKyBkYXRhLmRlbGF5QmVnaW47XHJcblx0XHRcdFx0ZGF0YS5kZWxheVBhdXNlZCA9IHRydWU7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGRhdGEuZGVsYXlUaW1lci5zZXRUaW1lb3V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlc3VtZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKSB7XHJcblx0XHRcdC8qIENoZWNrIGZvciBhbnkgcGF1c2VkIHRpbWVycyBhbmQgcmVzdW1lICovXHJcblx0XHRcdHZhciBkYXRhID0gRGF0YShlbGVtZW50KTtcclxuXHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5kZWxheVRpbWVyICYmIGRhdGEuZGVsYXlQYXVzZWQpIHtcclxuXHRcdFx0XHQvKiBJZiB0aGUgZWxlbWVudCB3YXMgbWlkLWRlbGF5LCByZSBpbml0aWF0ZSB0aGUgdGltZW91dCB3aXRoIHRoZSByZW1haW5pbmcgZGVsYXkgKi9cclxuXHRcdFx0XHRkYXRhLmRlbGF5UGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0ZGF0YS5kZWxheVRpbWVyLnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0KGRhdGEuZGVsYXlUaW1lci5uZXh0LCBkYXRhLmRlbGF5UmVtYWluaW5nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqXHJcblx0XHQgRWFzaW5nXHJcblx0XHQgKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0LyogU3RlcCBlYXNpbmcgZ2VuZXJhdG9yLiAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2VuZXJhdGVTdGVwKHN0ZXBzKSB7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbihwKSB7XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgucm91bmQocCAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEJlemllciBjdXJ2ZSBmdW5jdGlvbiBnZW5lcmF0b3IuIENvcHlyaWdodCBHYWV0YW4gUmVuYXVkZWF1LiBNSVQgTGljZW5zZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2VuZXJhdGVCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XHJcblx0XHRcdHZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQsXHJcblx0XHRcdFx0XHRORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXHJcblx0XHRcdFx0XHRTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXHJcblx0XHRcdFx0XHRTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwLFxyXG5cdFx0XHRcdFx0a1NwbGluZVRhYmxlU2l6ZSA9IDExLFxyXG5cdFx0XHRcdFx0a1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApLFxyXG5cdFx0XHRcdFx0ZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gXCJGbG9hdDMyQXJyYXlcIiBpbiB3aW5kb3c7XHJcblxyXG5cdFx0XHQvKiBNdXN0IGNvbnRhaW4gZm91ciBhcmd1bWVudHMuICovXHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSA0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBBcmd1bWVudHMgbXVzdCBiZSBudW1iZXJzLiAqL1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzW2ldICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKGFyZ3VtZW50c1tpXSkgfHwgIWlzRmluaXRlKGFyZ3VtZW50c1tpXSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qIFggdmFsdWVzIG11c3QgYmUgaW4gdGhlIFswLCAxXSByYW5nZS4gKi9cclxuXHRcdFx0bVgxID0gTWF0aC5taW4obVgxLCAxKTtcclxuXHRcdFx0bVgyID0gTWF0aC5taW4obVgyLCAxKTtcclxuXHRcdFx0bVgxID0gTWF0aC5tYXgobVgxLCAwKTtcclxuXHRcdFx0bVgyID0gTWF0aC5tYXgobVgyLCAwKTtcclxuXHJcblx0XHRcdHZhciBtU2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIEEoYUExLCBhQTIpIHtcclxuXHRcdFx0XHRyZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZ1bmN0aW9uIEIoYUExLCBhQTIpIHtcclxuXHRcdFx0XHRyZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZ1bmN0aW9uIEMoYUExKSB7XHJcblx0XHRcdFx0cmV0dXJuIDMuMCAqIGFBMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHtcclxuXHRcdFx0XHRyZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikge1xyXG5cdFx0XHRcdHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFHdWVzc1Q7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcclxuXHRcdFx0XHRcdGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYUd1ZXNzVDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY2FsY1NhbXBsZVZhbHVlcygpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xyXG5cdFx0XHRcdFx0bVNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcclxuXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0Y3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcclxuXHRcdFx0XHRcdGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFggPiAwLjApIHtcclxuXHRcdFx0XHRcdFx0YUIgPSBjdXJyZW50VDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFBID0gY3VycmVudFQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRUO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBnZXRURm9yWChhWCkge1xyXG5cdFx0XHRcdHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2FtcGxlID0gMSxcclxuXHRcdFx0XHRcdFx0bGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xyXG5cclxuXHRcdFx0XHRmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBtU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcclxuXHRcdFx0XHRcdGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LS1jdXJyZW50U2FtcGxlO1xyXG5cclxuXHRcdFx0XHR2YXIgZGlzdCA9IChhWCAtIG1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKG1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gbVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSksXHJcblx0XHRcdFx0XHRcdGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplLFxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuXHJcblx0XHRcdFx0aWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGd1ZXNzRm9yVDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBwcmVjb21wdXRlKCkge1xyXG5cdFx0XHRcdF9wcmVjb21wdXRlZCA9IHRydWU7XHJcblx0XHRcdFx0aWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XHJcblx0XHRcdFx0XHRjYWxjU2FtcGxlVmFsdWVzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZiA9IGZ1bmN0aW9uKGFYKSB7XHJcblx0XHRcdFx0aWYgKCFfcHJlY29tcHV0ZWQpIHtcclxuXHRcdFx0XHRcdHByZWNvbXB1dGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYVg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhWCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhWCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGYuZ2V0Q29udHJvbFBvaW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBbe3g6IG1YMSwgeTogbVkxfSwge3g6IG1YMiwgeTogbVkyfV07XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgc3RyID0gXCJnZW5lcmF0ZUJlemllcihcIiArIFttWDEsIG1ZMSwgbVgyLCBtWTJdICsgXCIpXCI7XHJcblx0XHRcdGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RyO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIGY7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogUnVuZ2UtS3V0dGEgc3ByaW5nIHBoeXNpY3MgZnVuY3Rpb24gZ2VuZXJhdG9yLiBBZGFwdGVkIGZyb20gRnJhbWVyLmpzLCBjb3B5cmlnaHQgS29lbiBCb2suIE1JVCBMaWNlbnNlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXHJcblx0XHQvKiBHaXZlbiBhIHRlbnNpb24sIGZyaWN0aW9uLCBhbmQgZHVyYXRpb24sIGEgc2ltdWxhdGlvbiBhdCA2MEZQUyB3aWxsIGZpcnN0IHJ1biB3aXRob3V0IGEgZGVmaW5lZCBkdXJhdGlvbiBpbiBvcmRlciB0byBjYWxjdWxhdGUgdGhlIGZ1bGwgcGF0aC4gQSBzZWNvbmQgcGFzc1xyXG5cdFx0IHRoZW4gYWRqdXN0cyB0aGUgdGltZSBkZWx0YSAtLSB1c2luZyB0aGUgcmVsYXRpb24gYmV0d2VlbiBhY3R1YWwgdGltZSBhbmQgZHVyYXRpb24gLS0gdG8gY2FsY3VsYXRlIHRoZSBwYXRoIGZvciB0aGUgZHVyYXRpb24tY29uc3RyYWluZWQgYW5pbWF0aW9uLiAqL1xyXG5cdFx0dmFyIGdlbmVyYXRlU3ByaW5nUks0ID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRmdW5jdGlvbiBzcHJpbmdBY2NlbGVyYXRpb25Gb3JTdGF0ZShzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiAoLXN0YXRlLnRlbnNpb24gKiBzdGF0ZS54KSAtIChzdGF0ZS5mcmljdGlvbiAqIHN0YXRlLnYpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoaW5pdGlhbFN0YXRlLCBkdCwgZGVyaXZhdGl2ZSkge1xyXG5cdFx0XHRcdHZhciBzdGF0ZSA9IHtcclxuXHRcdFx0XHRcdHg6IGluaXRpYWxTdGF0ZS54ICsgZGVyaXZhdGl2ZS5keCAqIGR0LFxyXG5cdFx0XHRcdFx0djogaW5pdGlhbFN0YXRlLnYgKyBkZXJpdmF0aXZlLmR2ICogZHQsXHJcblx0XHRcdFx0XHR0ZW5zaW9uOiBpbml0aWFsU3RhdGUudGVuc2lvbixcclxuXHRcdFx0XHRcdGZyaWN0aW9uOiBpbml0aWFsU3RhdGUuZnJpY3Rpb25cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4ge2R4OiBzdGF0ZS52LCBkdjogc3ByaW5nQWNjZWxlcmF0aW9uRm9yU3RhdGUoc3RhdGUpfTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gc3ByaW5nSW50ZWdyYXRlU3RhdGUoc3RhdGUsIGR0KSB7XHJcblx0XHRcdFx0dmFyIGEgPSB7XHJcblx0XHRcdFx0XHRkeDogc3RhdGUudixcclxuXHRcdFx0XHRcdGR2OiBzcHJpbmdBY2NlbGVyYXRpb25Gb3JTdGF0ZShzdGF0ZSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRiID0gc3ByaW5nRXZhbHVhdGVTdGF0ZVdpdGhEZXJpdmF0aXZlKHN0YXRlLCBkdCAqIDAuNSwgYSksXHJcblx0XHRcdFx0XHRcdGMgPSBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoc3RhdGUsIGR0ICogMC41LCBiKSxcclxuXHRcdFx0XHRcdFx0ZCA9IHNwcmluZ0V2YWx1YXRlU3RhdGVXaXRoRGVyaXZhdGl2ZShzdGF0ZSwgZHQsIGMpLFxyXG5cdFx0XHRcdFx0XHRkeGR0ID0gMS4wIC8gNi4wICogKGEuZHggKyAyLjAgKiAoYi5keCArIGMuZHgpICsgZC5keCksXHJcblx0XHRcdFx0XHRcdGR2ZHQgPSAxLjAgLyA2LjAgKiAoYS5kdiArIDIuMCAqIChiLmR2ICsgYy5kdikgKyBkLmR2KTtcclxuXHJcblx0XHRcdFx0c3RhdGUueCA9IHN0YXRlLnggKyBkeGR0ICogZHQ7XHJcblx0XHRcdFx0c3RhdGUudiA9IHN0YXRlLnYgKyBkdmR0ICogZHQ7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHNwcmluZ1JLNEZhY3RvcnkodGVuc2lvbiwgZnJpY3Rpb24sIGR1cmF0aW9uKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpbml0U3RhdGUgPSB7XHJcblx0XHRcdFx0XHR4OiAtMSxcclxuXHRcdFx0XHRcdHY6IDAsXHJcblx0XHRcdFx0XHR0ZW5zaW9uOiBudWxsLFxyXG5cdFx0XHRcdFx0ZnJpY3Rpb246IG51bGxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRwYXRoID0gWzBdLFxyXG5cdFx0XHRcdFx0XHR0aW1lX2xhcHNlZCA9IDAsXHJcblx0XHRcdFx0XHRcdHRvbGVyYW5jZSA9IDEgLyAxMDAwMCxcclxuXHRcdFx0XHRcdFx0RFQgPSAxNiAvIDEwMDAsXHJcblx0XHRcdFx0XHRcdGhhdmVfZHVyYXRpb24sIGR0LCBsYXN0X3N0YXRlO1xyXG5cclxuXHRcdFx0XHR0ZW5zaW9uID0gcGFyc2VGbG9hdCh0ZW5zaW9uKSB8fCA1MDA7XHJcblx0XHRcdFx0ZnJpY3Rpb24gPSBwYXJzZUZsb2F0KGZyaWN0aW9uKSB8fCAyMDtcclxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IG51bGw7XHJcblxyXG5cdFx0XHRcdGluaXRTdGF0ZS50ZW5zaW9uID0gdGVuc2lvbjtcclxuXHRcdFx0XHRpbml0U3RhdGUuZnJpY3Rpb24gPSBmcmljdGlvbjtcclxuXHJcblx0XHRcdFx0aGF2ZV9kdXJhdGlvbiA9IGR1cmF0aW9uICE9PSBudWxsO1xyXG5cclxuXHRcdFx0XHQvKiBDYWxjdWxhdGUgdGhlIGFjdHVhbCB0aW1lIGl0IHRha2VzIGZvciB0aGlzIGFuaW1hdGlvbiB0byBjb21wbGV0ZSB3aXRoIHRoZSBwcm92aWRlZCBjb25kaXRpb25zLiAqL1xyXG5cdFx0XHRcdGlmIChoYXZlX2R1cmF0aW9uKSB7XHJcblx0XHRcdFx0XHQvKiBSdW4gdGhlIHNpbXVsYXRpb24gd2l0aG91dCBhIGR1cmF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0dGltZV9sYXBzZWQgPSBzcHJpbmdSSzRGYWN0b3J5KHRlbnNpb24sIGZyaWN0aW9uKTtcclxuXHRcdFx0XHRcdC8qIENvbXB1dGUgdGhlIGFkanVzdGVkIHRpbWUgZGVsdGEuICovXHJcblx0XHRcdFx0XHRkdCA9IHRpbWVfbGFwc2VkIC8gZHVyYXRpb24gKiBEVDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZHQgPSBEVDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XHJcblx0XHRcdFx0XHQvKiBOZXh0L3N0ZXAgZnVuY3Rpb24gLiovXHJcblx0XHRcdFx0XHRsYXN0X3N0YXRlID0gc3ByaW5nSW50ZWdyYXRlU3RhdGUobGFzdF9zdGF0ZSB8fCBpbml0U3RhdGUsIGR0KTtcclxuXHRcdFx0XHRcdC8qIFN0b3JlIHRoZSBwb3NpdGlvbi4gKi9cclxuXHRcdFx0XHRcdHBhdGgucHVzaCgxICsgbGFzdF9zdGF0ZS54KTtcclxuXHRcdFx0XHRcdHRpbWVfbGFwc2VkICs9IDE2O1xyXG5cdFx0XHRcdFx0LyogSWYgdGhlIGNoYW5nZSB0aHJlc2hvbGQgaXMgcmVhY2hlZCwgYnJlYWsuICovXHJcblx0XHRcdFx0XHRpZiAoIShNYXRoLmFicyhsYXN0X3N0YXRlLngpID4gdG9sZXJhbmNlICYmIE1hdGguYWJzKGxhc3Rfc3RhdGUudikgPiB0b2xlcmFuY2UpKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogSWYgZHVyYXRpb24gaXMgbm90IGRlZmluZWQsIHJldHVybiB0aGUgYWN0dWFsIHRpbWUgcmVxdWlyZWQgZm9yIGNvbXBsZXRpbmcgdGhpcyBhbmltYXRpb24uIE90aGVyd2lzZSwgcmV0dXJuIGEgY2xvc3VyZSB0aGF0IGhvbGRzIHRoZVxyXG5cdFx0XHRcdCBjb21wdXRlZCBwYXRoIGFuZCByZXR1cm5zIGEgc25hcHNob3Qgb2YgdGhlIHBvc2l0aW9uIGFjY29yZGluZyB0byBhIGdpdmVuIHBlcmNlbnRDb21wbGV0ZS4gKi9cclxuXHRcdFx0XHRyZXR1cm4gIWhhdmVfZHVyYXRpb24gPyB0aW1lX2xhcHNlZCA6IGZ1bmN0aW9uKHBlcmNlbnRDb21wbGV0ZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBhdGhbIChwZXJjZW50Q29tcGxldGUgKiAocGF0aC5sZW5ndGggLSAxKSkgfCAwIF07XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdH0oKSk7XHJcblxyXG5cdFx0LyogalF1ZXJ5IGVhc2luZ3MuICovXHJcblx0XHRWZWxvY2l0eS5FYXNpbmdzID0ge1xyXG5cdFx0XHRsaW5lYXI6IGZ1bmN0aW9uKHApIHtcclxuXHRcdFx0XHRyZXR1cm4gcDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpbmc6IGZ1bmN0aW9uKHApIHtcclxuXHRcdFx0XHRyZXR1cm4gMC41IC0gTWF0aC5jb3MocCAqIE1hdGguUEkpIC8gMjtcclxuXHRcdFx0fSxcclxuXHRcdFx0LyogQm9udXMgXCJzcHJpbmdcIiBlYXNpbmcsIHdoaWNoIGlzIGEgbGVzcyBleGFnZ2VyYXRlZCB2ZXJzaW9uIG9mIGVhc2VJbk91dEVsYXN0aWMuICovXHJcblx0XHRcdHNwcmluZzogZnVuY3Rpb24ocCkge1xyXG5cdFx0XHRcdHJldHVybiAxIC0gKE1hdGguY29zKHAgKiA0LjUgKiBNYXRoLlBJKSAqIE1hdGguZXhwKC1wICogNikpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIENTUzMgYW5kIFJvYmVydCBQZW5uZXIgZWFzaW5ncy4gKi9cclxuXHRcdCQuZWFjaChcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbXCJlYXNlXCIsIFswLjI1LCAwLjEsIDAuMjUsIDEuMF1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZS1pblwiLCBbMC40MiwgMC4wLCAxLjAwLCAxLjBdXSxcclxuXHRcdFx0XHRcdFtcImVhc2Utb3V0XCIsIFswLjAwLCAwLjAsIDAuNTgsIDEuMF1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZS1pbi1vdXRcIiwgWzAuNDIsIDAuMCwgMC41OCwgMS4wXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5TaW5lXCIsIFswLjQ3LCAwLCAwLjc0NSwgMC43MTVdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VPdXRTaW5lXCIsIFswLjM5LCAwLjU3NSwgMC41NjUsIDFdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFNpbmVcIiwgWzAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5RdWFkXCIsIFswLjU1LCAwLjA4NSwgMC42OCwgMC41M11dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZU91dFF1YWRcIiwgWzAuMjUsIDAuNDYsIDAuNDUsIDAuOTRdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFF1YWRcIiwgWzAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTVdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJbkN1YmljXCIsIFswLjU1LCAwLjA1NSwgMC42NzUsIDAuMTldXSxcclxuXHRcdFx0XHRcdFtcImVhc2VPdXRDdWJpY1wiLCBbMC4yMTUsIDAuNjEsIDAuMzU1LCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRDdWJpY1wiLCBbMC42NDUsIDAuMDQ1LCAwLjM1NSwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluUXVhcnRcIiwgWzAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMl1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZU91dFF1YXJ0XCIsIFswLjE2NSwgMC44NCwgMC40NCwgMV1dLFxyXG5cdFx0XHRcdFx0W1wiZWFzZUluT3V0UXVhcnRcIiwgWzAuNzcsIDAsIDAuMTc1LCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5RdWludFwiLCBbMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlT3V0UXVpbnRcIiwgWzAuMjMsIDEsIDAuMzIsIDFdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFF1aW50XCIsIFswLjg2LCAwLCAwLjA3LCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5FeHBvXCIsIFswLjk1LCAwLjA1LCAwLjc5NSwgMC4wMzVdXSxcclxuXHRcdFx0XHRcdFtcImVhc2VPdXRFeHBvXCIsIFswLjE5LCAxLCAwLjIyLCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRFeHBvXCIsIFsxLCAwLCAwLCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5DaXJjXCIsIFswLjYsIDAuMDQsIDAuOTgsIDAuMzM1XV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlT3V0Q2lyY1wiLCBbMC4wNzUsIDAuODIsIDAuMTY1LCAxXV0sXHJcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRDaXJjXCIsIFswLjc4NSwgMC4xMzUsIDAuMTUsIDAuODZdXVxyXG5cdFx0XHRcdF0sIGZ1bmN0aW9uKGksIGVhc2luZ0FycmF5KSB7XHJcblx0XHRcdFZlbG9jaXR5LkVhc2luZ3NbZWFzaW5nQXJyYXlbMF1dID0gZ2VuZXJhdGVCZXppZXIuYXBwbHkobnVsbCwgZWFzaW5nQXJyYXlbMV0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyogRGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSBlYXNpbmcgdHlwZSBnaXZlbiBhbiBlYXNpbmcgaW5wdXQuICovXHJcblx0XHRmdW5jdGlvbiBnZXRFYXNpbmcodmFsdWUsIGR1cmF0aW9uKSB7XHJcblx0XHRcdHZhciBlYXNpbmcgPSB2YWx1ZTtcclxuXHJcblx0XHRcdC8qIFRoZSBlYXNpbmcgb3B0aW9uIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgdGhhdCByZWZlcmVuY2VzIGEgcHJlLXJlZ2lzdGVyZWQgZWFzaW5nLFxyXG5cdFx0XHQgb3IgaXQgY2FuIGJlIGEgdHdvLS9mb3VyLWl0ZW0gYXJyYXkgb2YgaW50ZWdlcnMgdG8gYmUgY29udmVydGVkIGludG8gYSBiZXppZXIvc3ByaW5nIGZ1bmN0aW9uLiAqL1xyXG5cdFx0XHRpZiAoVHlwZS5pc1N0cmluZyh2YWx1ZSkpIHtcclxuXHRcdFx0XHQvKiBFbnN1cmUgdGhhdCB0aGUgZWFzaW5nIGhhcyBiZWVuIGFzc2lnbmVkIHRvIGpRdWVyeSdzIFZlbG9jaXR5LkVhc2luZ3Mgb2JqZWN0LiAqL1xyXG5cdFx0XHRcdGlmICghVmVsb2NpdHkuRWFzaW5nc1t2YWx1ZV0pIHtcclxuXHRcdFx0XHRcdGVhc2luZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdGVhc2luZyA9IGdlbmVyYXRlU3RlcC5hcHBseShudWxsLCB2YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0XHQvKiBzcHJpbmdSSzQgbXVzdCBiZSBwYXNzZWQgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IElmIHRoZSBzcHJpbmdSSzQgYXJyYXkgY29udGFpbnMgbm9uLW51bWJlcnMsIGdlbmVyYXRlU3ByaW5nUks0KCkgcmV0dXJucyBhbiBlYXNpbmdcclxuXHRcdFx0XHQgZnVuY3Rpb24gZ2VuZXJhdGVkIHdpdGggZGVmYXVsdCB0ZW5zaW9uIGFuZCBmcmljdGlvbiB2YWx1ZXMuICovXHJcblx0XHRcdFx0ZWFzaW5nID0gZ2VuZXJhdGVTcHJpbmdSSzQuYXBwbHkobnVsbCwgdmFsdWUuY29uY2F0KFtkdXJhdGlvbl0pKTtcclxuXHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHRcdC8qIE5vdGU6IElmIHRoZSBiZXppZXIgYXJyYXkgY29udGFpbnMgbm9uLW51bWJlcnMsIGdlbmVyYXRlQmV6aWVyKCkgcmV0dXJucyBmYWxzZS4gKi9cclxuXHRcdFx0XHRlYXNpbmcgPSBnZW5lcmF0ZUJlemllci5hcHBseShudWxsLCB2YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZWFzaW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qIFJldmVydCB0byB0aGUgVmVsb2NpdHktd2lkZSBkZWZhdWx0IGVhc2luZyB0eXBlLCBvciBmYWxsIGJhY2sgdG8gXCJzd2luZ1wiICh3aGljaCBpcyBhbHNvIGpRdWVyeSdzIGRlZmF1bHQpXHJcblx0XHRcdCBpZiB0aGUgVmVsb2NpdHktd2lkZSBkZWZhdWx0IGhhcyBiZWVuIGluY29ycmVjdGx5IG1vZGlmaWVkLiAqL1xyXG5cdFx0XHRpZiAoZWFzaW5nID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlmIChWZWxvY2l0eS5FYXNpbmdzW1ZlbG9jaXR5LmRlZmF1bHRzLmVhc2luZ10pIHtcclxuXHRcdFx0XHRcdGVhc2luZyA9IFZlbG9jaXR5LmRlZmF1bHRzLmVhc2luZztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWFzaW5nID0gRUFTSU5HX0RFRkFVTFQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZWFzaW5nO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKioqKioqKioqKioqKioqKlxyXG5cdFx0IENTUyBTdGFja1xyXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdC8qIFRoZSBDU1Mgb2JqZWN0IGlzIGEgaGlnaGx5IGNvbmRlbnNlZCBhbmQgcGVyZm9ybWFudCBDU1Mgc3RhY2sgdGhhdCBmdWxseSByZXBsYWNlcyBqUXVlcnkncy5cclxuXHRcdCBJdCBoYW5kbGVzIHRoZSB2YWxpZGF0aW9uLCBnZXR0aW5nLCBhbmQgc2V0dGluZyBvZiBib3RoIHN0YW5kYXJkIENTUyBwcm9wZXJ0aWVzIGFuZCBDU1MgcHJvcGVydHkgaG9va3MuICovXHJcblx0XHQvKiBOb3RlOiBBIFwiQ1NTXCIgc2hvcnRoYW5kIGlzIGFsaWFzZWQgc28gdGhhdCBvdXIgY29kZSBpcyBlYXNpZXIgdG8gcmVhZC4gKi9cclxuXHRcdHZhciBDU1MgPSBWZWxvY2l0eS5DU1MgPSB7XHJcblx0XHRcdC8qKioqKioqKioqKioqXHJcblx0XHRcdCBSZWdFeFxyXG5cdFx0XHQgKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFJlZ0V4OiB7XHJcblx0XHRcdFx0aXNIZXg6IC9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSxcclxuXHRcdFx0XHQvKiBVbndyYXAgYSBwcm9wZXJ0eSB2YWx1ZSdzIHN1cnJvdW5kaW5nIHRleHQsIGUuZy4gXCJyZ2JhKDQsIDMsIDIsIDEpXCIgPT0+IFwiNCwgMywgMiwgMVwiIGFuZCBcInJlY3QoNHB4IDNweCAycHggMXB4KVwiID09PiBcIjRweCAzcHggMnB4IDFweFwiLiAqL1xyXG5cdFx0XHRcdHZhbHVlVW53cmFwOiAvXltBLXpdK1xcKCguKilcXCkkL2ksXHJcblx0XHRcdFx0d3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDogL1swLTkuXSsgWzAtOS5dKyBbMC05Ll0rKCBbMC05Ll0rKT8vLFxyXG5cdFx0XHRcdC8qIFNwbGl0IGEgbXVsdGktdmFsdWUgcHJvcGVydHkgaW50byBhbiBhcnJheSBvZiBzdWJ2YWx1ZXMsIGUuZy4gXCJyZ2JhKDQsIDMsIDIsIDEpIDRweCAzcHggMnB4IDFweFwiID09PiBbIFwicmdiYSg0LCAzLCAyLCAxKVwiLCBcIjRweFwiLCBcIjNweFwiLCBcIjJweFwiLCBcIjFweFwiIF0uICovXHJcblx0XHRcdFx0dmFsdWVTcGxpdDogLyhbQS16XStcXCguK1xcKSl8KChbQS16MC05Iy0uXSs/KSg/PVxcc3wkKSkvaWdcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqKioqKioqKioqKlxyXG5cdFx0XHQgTGlzdHNcclxuXHRcdFx0ICoqKioqKioqKioqKi9cclxuXHJcblx0XHRcdExpc3RzOiB7XHJcblx0XHRcdFx0Y29sb3JzOiBbXCJmaWxsXCIsIFwic3Ryb2tlXCIsIFwic3RvcENvbG9yXCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlclRvcENvbG9yXCIsIFwiYm9yZGVyUmlnaHRDb2xvclwiLCBcImJvcmRlckJvdHRvbUNvbG9yXCIsIFwiYm9yZGVyTGVmdENvbG9yXCIsIFwib3V0bGluZUNvbG9yXCJdLFxyXG5cdFx0XHRcdHRyYW5zZm9ybXNCYXNlOiBbXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInNjYWxlXCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInJvdGF0ZVpcIl0sXHJcblx0XHRcdFx0dHJhbnNmb3JtczNEOiBbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcInRyYW5zbGF0ZVpcIiwgXCJzY2FsZVpcIiwgXCJyb3RhdGVYXCIsIFwicm90YXRlWVwiXSxcclxuXHRcdFx0XHR1bml0czogW1xyXG5cdFx0XHRcdFx0XCIlXCIsIC8vIHJlbGF0aXZlXHJcblx0XHRcdFx0XHRcImVtXCIsIFwiZXhcIiwgXCJjaFwiLCBcInJlbVwiLCAvLyBmb250IHJlbGF0aXZlXHJcblx0XHRcdFx0XHRcInZ3XCIsIFwidmhcIiwgXCJ2bWluXCIsIFwidm1heFwiLCAvLyB2aWV3cG9ydCByZWxhdGl2ZVxyXG5cdFx0XHRcdFx0XCJjbVwiLCBcIm1tXCIsIFwiUVwiLCBcImluXCIsIFwicGNcIiwgXCJwdFwiLCBcInB4XCIsIC8vIGFic29sdXRlIGxlbmd0aHNcclxuXHRcdFx0XHRcdFwiZGVnXCIsIFwiZ3JhZFwiLCBcInJhZFwiLCBcInR1cm5cIiwgLy8gYW5nbGVzXHJcblx0XHRcdFx0XHRcInNcIiwgXCJtc1wiIC8vIHRpbWVcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNvbG9yTmFtZXM6IHtcclxuXHRcdFx0XHRcdFwiYWxpY2VibHVlXCI6IFwiMjQwLDI0OCwyNTVcIixcclxuXHRcdFx0XHRcdFwiYW50aXF1ZXdoaXRlXCI6IFwiMjUwLDIzNSwyMTVcIixcclxuXHRcdFx0XHRcdFwiYXF1YW1hcmluZVwiOiBcIjEyNywyNTUsMjEyXCIsXHJcblx0XHRcdFx0XHRcImFxdWFcIjogXCIwLDI1NSwyNTVcIixcclxuXHRcdFx0XHRcdFwiYXp1cmVcIjogXCIyNDAsMjU1LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJiZWlnZVwiOiBcIjI0NSwyNDUsMjIwXCIsXHJcblx0XHRcdFx0XHRcImJpc3F1ZVwiOiBcIjI1NSwyMjgsMTk2XCIsXHJcblx0XHRcdFx0XHRcImJsYWNrXCI6IFwiMCwwLDBcIixcclxuXHRcdFx0XHRcdFwiYmxhbmNoZWRhbG1vbmRcIjogXCIyNTUsMjM1LDIwNVwiLFxyXG5cdFx0XHRcdFx0XCJibHVldmlvbGV0XCI6IFwiMTM4LDQzLDIyNlwiLFxyXG5cdFx0XHRcdFx0XCJibHVlXCI6IFwiMCwwLDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJicm93blwiOiBcIjE2NSw0Miw0MlwiLFxyXG5cdFx0XHRcdFx0XCJidXJseXdvb2RcIjogXCIyMjIsMTg0LDEzNVwiLFxyXG5cdFx0XHRcdFx0XCJjYWRldGJsdWVcIjogXCI5NSwxNTgsMTYwXCIsXHJcblx0XHRcdFx0XHRcImNoYXJ0cmV1c2VcIjogXCIxMjcsMjU1LDBcIixcclxuXHRcdFx0XHRcdFwiY2hvY29sYXRlXCI6IFwiMjEwLDEwNSwzMFwiLFxyXG5cdFx0XHRcdFx0XCJjb3JhbFwiOiBcIjI1NSwxMjcsODBcIixcclxuXHRcdFx0XHRcdFwiY29ybmZsb3dlcmJsdWVcIjogXCIxMDAsMTQ5LDIzN1wiLFxyXG5cdFx0XHRcdFx0XCJjb3Juc2lsa1wiOiBcIjI1NSwyNDgsMjIwXCIsXHJcblx0XHRcdFx0XHRcImNyaW1zb25cIjogXCIyMjAsMjAsNjBcIixcclxuXHRcdFx0XHRcdFwiY3lhblwiOiBcIjAsMjU1LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrYmx1ZVwiOiBcIjAsMCwxMzlcIixcclxuXHRcdFx0XHRcdFwiZGFya2N5YW5cIjogXCIwLDEzOSwxMzlcIixcclxuXHRcdFx0XHRcdFwiZGFya2dvbGRlbnJvZFwiOiBcIjE4NCwxMzQsMTFcIixcclxuXHRcdFx0XHRcdFwiZGFya2dyYXlcIjogXCIxNjksMTY5LDE2OVwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrZ3JleVwiOiBcIjE2OSwxNjksMTY5XCIsXHJcblx0XHRcdFx0XHRcImRhcmtncmVlblwiOiBcIjAsMTAwLDBcIixcclxuXHRcdFx0XHRcdFwiZGFya2toYWtpXCI6IFwiMTg5LDE4MywxMDdcIixcclxuXHRcdFx0XHRcdFwiZGFya21hZ2VudGFcIjogXCIxMzksMCwxMzlcIixcclxuXHRcdFx0XHRcdFwiZGFya29saXZlZ3JlZW5cIjogXCI4NSwxMDcsNDdcIixcclxuXHRcdFx0XHRcdFwiZGFya29yYW5nZVwiOiBcIjI1NSwxNDAsMFwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrb3JjaGlkXCI6IFwiMTUzLDUwLDIwNFwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrcmVkXCI6IFwiMTM5LDAsMFwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrc2FsbW9uXCI6IFwiMjMzLDE1MCwxMjJcIixcclxuXHRcdFx0XHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiMTQzLDE4OCwxNDNcIixcclxuXHRcdFx0XHRcdFwiZGFya3NsYXRlYmx1ZVwiOiBcIjcyLDYxLDEzOVwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrc2xhdGVncmF5XCI6IFwiNDcsNzksNzlcIixcclxuXHRcdFx0XHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAsMjA2LDIwOVwiLFxyXG5cdFx0XHRcdFx0XCJkYXJrdmlvbGV0XCI6IFwiMTQ4LDAsMjExXCIsXHJcblx0XHRcdFx0XHRcImRlZXBwaW5rXCI6IFwiMjU1LDIwLDE0N1wiLFxyXG5cdFx0XHRcdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAsMTkxLDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJkaW1ncmF5XCI6IFwiMTA1LDEwNSwxMDVcIixcclxuXHRcdFx0XHRcdFwiZGltZ3JleVwiOiBcIjEwNSwxMDUsMTA1XCIsXHJcblx0XHRcdFx0XHRcImRvZGdlcmJsdWVcIjogXCIzMCwxNDQsMjU1XCIsXHJcblx0XHRcdFx0XHRcImZpcmVicmlja1wiOiBcIjE3OCwzNCwzNFwiLFxyXG5cdFx0XHRcdFx0XCJmbG9yYWx3aGl0ZVwiOiBcIjI1NSwyNTAsMjQwXCIsXHJcblx0XHRcdFx0XHRcImZvcmVzdGdyZWVuXCI6IFwiMzQsMTM5LDM0XCIsXHJcblx0XHRcdFx0XHRcImZ1Y2hzaWFcIjogXCIyNTUsMCwyNTVcIixcclxuXHRcdFx0XHRcdFwiZ2FpbnNib3JvXCI6IFwiMjIwLDIyMCwyMjBcIixcclxuXHRcdFx0XHRcdFwiZ2hvc3R3aGl0ZVwiOiBcIjI0OCwyNDgsMjU1XCIsXHJcblx0XHRcdFx0XHRcImdvbGRcIjogXCIyNTUsMjE1LDBcIixcclxuXHRcdFx0XHRcdFwiZ29sZGVucm9kXCI6IFwiMjE4LDE2NSwzMlwiLFxyXG5cdFx0XHRcdFx0XCJncmF5XCI6IFwiMTI4LDEyOCwxMjhcIixcclxuXHRcdFx0XHRcdFwiZ3JleVwiOiBcIjEyOCwxMjgsMTI4XCIsXHJcblx0XHRcdFx0XHRcImdyZWVueWVsbG93XCI6IFwiMTczLDI1NSw0N1wiLFxyXG5cdFx0XHRcdFx0XCJncmVlblwiOiBcIjAsMTI4LDBcIixcclxuXHRcdFx0XHRcdFwiaG9uZXlkZXdcIjogXCIyNDAsMjU1LDI0MFwiLFxyXG5cdFx0XHRcdFx0XCJob3RwaW5rXCI6IFwiMjU1LDEwNSwxODBcIixcclxuXHRcdFx0XHRcdFwiaW5kaWFucmVkXCI6IFwiMjA1LDkyLDkyXCIsXHJcblx0XHRcdFx0XHRcImluZGlnb1wiOiBcIjc1LDAsMTMwXCIsXHJcblx0XHRcdFx0XHRcIml2b3J5XCI6IFwiMjU1LDI1NSwyNDBcIixcclxuXHRcdFx0XHRcdFwia2hha2lcIjogXCIyNDAsMjMwLDE0MFwiLFxyXG5cdFx0XHRcdFx0XCJsYXZlbmRlcmJsdXNoXCI6IFwiMjU1LDI0MCwyNDVcIixcclxuXHRcdFx0XHRcdFwibGF2ZW5kZXJcIjogXCIyMzAsMjMwLDI1MFwiLFxyXG5cdFx0XHRcdFx0XCJsYXduZ3JlZW5cIjogXCIxMjQsMjUyLDBcIixcclxuXHRcdFx0XHRcdFwibGVtb25jaGlmZm9uXCI6IFwiMjU1LDI1MCwyMDVcIixcclxuXHRcdFx0XHRcdFwibGlnaHRibHVlXCI6IFwiMTczLDIxNiwyMzBcIixcclxuXHRcdFx0XHRcdFwibGlnaHRjb3JhbFwiOiBcIjI0MCwxMjgsMTI4XCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Y3lhblwiOiBcIjIyNCwyNTUsMjU1XCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFwiMjUwLDI1MCwyMTBcIixcclxuXHRcdFx0XHRcdFwibGlnaHRncmF5XCI6IFwiMjExLDIxMSwyMTFcIixcclxuXHRcdFx0XHRcdFwibGlnaHRncmV5XCI6IFwiMjExLDIxMSwyMTFcIixcclxuXHRcdFx0XHRcdFwibGlnaHRncmVlblwiOiBcIjE0NCwyMzgsMTQ0XCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0cGlua1wiOiBcIjI1NSwxODIsMTkzXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0c2FsbW9uXCI6IFwiMjU1LDE2MCwxMjJcIixcclxuXHRcdFx0XHRcdFwibGlnaHRzZWFncmVlblwiOiBcIjMyLDE3OCwxNzBcIixcclxuXHRcdFx0XHRcdFwibGlnaHRza3libHVlXCI6IFwiMTM1LDIwNiwyNTBcIixcclxuXHRcdFx0XHRcdFwibGlnaHRzbGF0ZWdyYXlcIjogXCIxMTksMTM2LDE1M1wiLFxyXG5cdFx0XHRcdFx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBcIjE3NiwxOTYsMjIyXCIsXHJcblx0XHRcdFx0XHRcImxpZ2h0eWVsbG93XCI6IFwiMjU1LDI1NSwyMjRcIixcclxuXHRcdFx0XHRcdFwibGltZWdyZWVuXCI6IFwiNTAsMjA1LDUwXCIsXHJcblx0XHRcdFx0XHRcImxpbWVcIjogXCIwLDI1NSwwXCIsXHJcblx0XHRcdFx0XHRcImxpbmVuXCI6IFwiMjUwLDI0MCwyMzBcIixcclxuXHRcdFx0XHRcdFwibWFnZW50YVwiOiBcIjI1NSwwLDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJtYXJvb25cIjogXCIxMjgsMCwwXCIsXHJcblx0XHRcdFx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCIxMDIsMjA1LDE3MFwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1ibHVlXCI6IFwiMCwwLDIwNVwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1vcmNoaWRcIjogXCIxODYsODUsMjExXCIsXHJcblx0XHRcdFx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjE0NywxMTIsMjE5XCIsXHJcblx0XHRcdFx0XHRcIm1lZGl1bXNlYWdyZWVuXCI6IFwiNjAsMTc5LDExM1wiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogXCIxMjMsMTA0LDIzOFwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAsMjUwLDE1NFwiLFxyXG5cdFx0XHRcdFx0XCJtZWRpdW10dXJxdW9pc2VcIjogXCI3MiwyMDksMjA0XCIsXHJcblx0XHRcdFx0XHRcIm1lZGl1bXZpb2xldHJlZFwiOiBcIjE5OSwyMSwxMzNcIixcclxuXHRcdFx0XHRcdFwibWlkbmlnaHRibHVlXCI6IFwiMjUsMjUsMTEyXCIsXHJcblx0XHRcdFx0XHRcIm1pbnRjcmVhbVwiOiBcIjI0NSwyNTUsMjUwXCIsXHJcblx0XHRcdFx0XHRcIm1pc3R5cm9zZVwiOiBcIjI1NSwyMjgsMjI1XCIsXHJcblx0XHRcdFx0XHRcIm1vY2Nhc2luXCI6IFwiMjU1LDIyOCwxODFcIixcclxuXHRcdFx0XHRcdFwibmF2YWpvd2hpdGVcIjogXCIyNTUsMjIyLDE3M1wiLFxyXG5cdFx0XHRcdFx0XCJuYXZ5XCI6IFwiMCwwLDEyOFwiLFxyXG5cdFx0XHRcdFx0XCJvbGRsYWNlXCI6IFwiMjUzLDI0NSwyMzBcIixcclxuXHRcdFx0XHRcdFwib2xpdmVkcmFiXCI6IFwiMTA3LDE0MiwzNVwiLFxyXG5cdFx0XHRcdFx0XCJvbGl2ZVwiOiBcIjEyOCwxMjgsMFwiLFxyXG5cdFx0XHRcdFx0XCJvcmFuZ2VyZWRcIjogXCIyNTUsNjksMFwiLFxyXG5cdFx0XHRcdFx0XCJvcmFuZ2VcIjogXCIyNTUsMTY1LDBcIixcclxuXHRcdFx0XHRcdFwib3JjaGlkXCI6IFwiMjE4LDExMiwyMTRcIixcclxuXHRcdFx0XHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcIjIzOCwyMzIsMTcwXCIsXHJcblx0XHRcdFx0XHRcInBhbGVncmVlblwiOiBcIjE1MiwyNTEsMTUyXCIsXHJcblx0XHRcdFx0XHRcInBhbGV0dXJxdW9pc2VcIjogXCIxNzUsMjM4LDIzOFwiLFxyXG5cdFx0XHRcdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiMjE5LDExMiwxNDdcIixcclxuXHRcdFx0XHRcdFwicGFwYXlhd2hpcFwiOiBcIjI1NSwyMzksMjEzXCIsXHJcblx0XHRcdFx0XHRcInBlYWNocHVmZlwiOiBcIjI1NSwyMTgsMTg1XCIsXHJcblx0XHRcdFx0XHRcInBlcnVcIjogXCIyMDUsMTMzLDYzXCIsXHJcblx0XHRcdFx0XHRcInBpbmtcIjogXCIyNTUsMTkyLDIwM1wiLFxyXG5cdFx0XHRcdFx0XCJwbHVtXCI6IFwiMjIxLDE2MCwyMjFcIixcclxuXHRcdFx0XHRcdFwicG93ZGVyYmx1ZVwiOiBcIjE3NiwyMjQsMjMwXCIsXHJcblx0XHRcdFx0XHRcInB1cnBsZVwiOiBcIjEyOCwwLDEyOFwiLFxyXG5cdFx0XHRcdFx0XCJyZWRcIjogXCIyNTUsMCwwXCIsXHJcblx0XHRcdFx0XHRcInJvc3licm93blwiOiBcIjE4OCwxNDMsMTQzXCIsXHJcblx0XHRcdFx0XHRcInJveWFsYmx1ZVwiOiBcIjY1LDEwNSwyMjVcIixcclxuXHRcdFx0XHRcdFwic2FkZGxlYnJvd25cIjogXCIxMzksNjksMTlcIixcclxuXHRcdFx0XHRcdFwic2FsbW9uXCI6IFwiMjUwLDEyOCwxMTRcIixcclxuXHRcdFx0XHRcdFwic2FuZHlicm93blwiOiBcIjI0NCwxNjQsOTZcIixcclxuXHRcdFx0XHRcdFwic2VhZ3JlZW5cIjogXCI0NiwxMzksODdcIixcclxuXHRcdFx0XHRcdFwic2Vhc2hlbGxcIjogXCIyNTUsMjQ1LDIzOFwiLFxyXG5cdFx0XHRcdFx0XCJzaWVubmFcIjogXCIxNjAsODIsNDVcIixcclxuXHRcdFx0XHRcdFwic2lsdmVyXCI6IFwiMTkyLDE5MiwxOTJcIixcclxuXHRcdFx0XHRcdFwic2t5Ymx1ZVwiOiBcIjEzNSwyMDYsMjM1XCIsXHJcblx0XHRcdFx0XHRcInNsYXRlYmx1ZVwiOiBcIjEwNiw5MCwyMDVcIixcclxuXHRcdFx0XHRcdFwic2xhdGVncmF5XCI6IFwiMTEyLDEyOCwxNDRcIixcclxuXHRcdFx0XHRcdFwic25vd1wiOiBcIjI1NSwyNTAsMjUwXCIsXHJcblx0XHRcdFx0XHRcInNwcmluZ2dyZWVuXCI6IFwiMCwyNTUsMTI3XCIsXHJcblx0XHRcdFx0XHRcInN0ZWVsYmx1ZVwiOiBcIjcwLDEzMCwxODBcIixcclxuXHRcdFx0XHRcdFwidGFuXCI6IFwiMjEwLDE4MCwxNDBcIixcclxuXHRcdFx0XHRcdFwidGVhbFwiOiBcIjAsMTI4LDEyOFwiLFxyXG5cdFx0XHRcdFx0XCJ0aGlzdGxlXCI6IFwiMjE2LDE5MSwyMTZcIixcclxuXHRcdFx0XHRcdFwidG9tYXRvXCI6IFwiMjU1LDk5LDcxXCIsXHJcblx0XHRcdFx0XHRcInR1cnF1b2lzZVwiOiBcIjY0LDIyNCwyMDhcIixcclxuXHRcdFx0XHRcdFwidmlvbGV0XCI6IFwiMjM4LDEzMCwyMzhcIixcclxuXHRcdFx0XHRcdFwid2hlYXRcIjogXCIyNDUsMjIyLDE3OVwiLFxyXG5cdFx0XHRcdFx0XCJ3aGl0ZXNtb2tlXCI6IFwiMjQ1LDI0NSwyNDVcIixcclxuXHRcdFx0XHRcdFwid2hpdGVcIjogXCIyNTUsMjU1LDI1NVwiLFxyXG5cdFx0XHRcdFx0XCJ5ZWxsb3dncmVlblwiOiBcIjE1NCwyMDUsNTBcIixcclxuXHRcdFx0XHRcdFwieWVsbG93XCI6IFwiMjU1LDI1NSwwXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKipcclxuXHRcdFx0IEhvb2tzXHJcblx0XHRcdCAqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBIb29rcyBhbGxvdyBhIHN1YnByb3BlcnR5IChlLmcuIFwiYm94U2hhZG93Qmx1clwiKSBvZiBhIGNvbXBvdW5kLXZhbHVlIENTUyBwcm9wZXJ0eVxyXG5cdFx0XHQgKGUuZy4gXCJib3hTaGFkb3c6IFggWSBCbHVyIFNwcmVhZCBDb2xvclwiKSB0byBiZSBhbmltYXRlZCBhcyBpZiBpdCB3ZXJlIGEgZGlzY3JldGUgcHJvcGVydHkuICovXHJcblx0XHRcdC8qIE5vdGU6IEJleW9uZCBlbmFibGluZyBmaW5lLWdyYWluZWQgcHJvcGVydHkgYW5pbWF0aW9uLCBob29raW5nIGlzIG5lY2Vzc2FyeSBzaW5jZSBWZWxvY2l0eSBvbmx5XHJcblx0XHRcdCB0d2VlbnMgcHJvcGVydGllcyB3aXRoIHNpbmdsZSBudW1lcmljIHZhbHVlczsgdW5saWtlIENTUyB0cmFuc2l0aW9ucywgVmVsb2NpdHkgZG9lcyBub3QgaW50ZXJwb2xhdGUgY29tcG91bmQtdmFsdWVzLiAqL1xyXG5cdFx0XHRIb29rczoge1xyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBSZWdpc3RyYXRpb25cclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFRlbXBsYXRlcyBhcmUgYSBjb25jaXNlIHdheSBvZiBpbmRpY2F0aW5nIHdoaWNoIHN1YnByb3BlcnRpZXMgbXVzdCBiZSBpbmRpdmlkdWFsbHkgcmVnaXN0ZXJlZCBmb3IgZWFjaCBjb21wb3VuZC12YWx1ZSBDU1MgcHJvcGVydHkuICovXHJcblx0XHRcdFx0LyogRWFjaCB0ZW1wbGF0ZSBjb25zaXN0cyBvZiB0aGUgY29tcG91bmQtdmFsdWUncyBiYXNlIG5hbWUsIGl0cyBjb25zdGl0dWVudCBzdWJwcm9wZXJ0eSBuYW1lcywgYW5kIHRob3NlIHN1YnByb3BlcnRpZXMnIGRlZmF1bHQgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdHRlbXBsYXRlczoge1xyXG5cdFx0XHRcdFx0XCJ0ZXh0U2hhZG93XCI6IFtcIkNvbG9yIFggWSBCbHVyXCIsIFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sXHJcblx0XHRcdFx0XHRcImJveFNoYWRvd1wiOiBbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIiwgXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sXHJcblx0XHRcdFx0XHRcImNsaXBcIjogW1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsIFwiMHB4IDBweCAwcHggMHB4XCJdLFxyXG5cdFx0XHRcdFx0XCJiYWNrZ3JvdW5kUG9zaXRpb25cIjogW1wiWCBZXCIsIFwiMCUgMCVcIl0sXHJcblx0XHRcdFx0XHRcInRyYW5zZm9ybU9yaWdpblwiOiBbXCJYIFkgWlwiLCBcIjUwJSA1MCUgMHB4XCJdLFxyXG5cdFx0XHRcdFx0XCJwZXJzcGVjdGl2ZU9yaWdpblwiOiBbXCJYIFlcIiwgXCI1MCUgNTAlXCJdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBBIFwicmVnaXN0ZXJlZFwiIGhvb2sgaXMgb25lIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIGZyb20gaXRzIHRlbXBsYXRlIGZvcm0gaW50byBhIGxpdmUsXHJcblx0XHRcdFx0IHR3ZWVuYWJsZSBwcm9wZXJ0eS4gSXQgY29udGFpbnMgZGF0YSB0byBhc3NvY2lhdGUgaXQgd2l0aCBpdHMgcm9vdCBwcm9wZXJ0eS4gKi9cclxuXHRcdFx0XHRyZWdpc3RlcmVkOiB7XHJcblx0XHRcdFx0XHQvKiBOb3RlOiBBIHJlZ2lzdGVyZWQgaG9vayBsb29rcyBsaWtlIHRoaXMgPT0+IHRleHRTaGFkb3dCbHVyOiBbIFwidGV4dFNoYWRvd1wiLCAzIF0sXHJcblx0XHRcdFx0XHQgd2hpY2ggY29uc2lzdHMgb2YgdGhlIHN1YnByb3BlcnR5J3MgbmFtZSwgdGhlIGFzc29jaWF0ZWQgcm9vdCBwcm9wZXJ0eSdzIG5hbWUsXHJcblx0XHRcdFx0XHQgYW5kIHRoZSBzdWJwcm9wZXJ0eSdzIHBvc2l0aW9uIGluIHRoZSByb290J3MgdmFsdWUuICovXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBDb252ZXJ0IHRoZSB0ZW1wbGF0ZXMgaW50byBpbmRpdmlkdWFsIGhvb2tzIHRoZW4gYXBwZW5kIHRoZW0gdG8gdGhlIHJlZ2lzdGVyZWQgb2JqZWN0IGFib3ZlLiAqL1xyXG5cdFx0XHRcdHJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8qIENvbG9yIGhvb2tzIHJlZ2lzdHJhdGlvbjogQ29sb3JzIGFyZSBkZWZhdWx0ZWQgdG8gd2hpdGUgLS0gYXMgb3Bwb3NlZCB0byBibGFjayAtLSBzaW5jZSBjb2xvcnMgdGhhdCBhcmVcclxuXHRcdFx0XHRcdCBjdXJyZW50bHkgc2V0IHRvIFwidHJhbnNwYXJlbnRcIiBkZWZhdWx0IHRvIHRoZWlyIHJlc3BlY3RpdmUgdGVtcGxhdGUgYmVsb3cgd2hlbiBjb2xvci1hbmltYXRlZCxcclxuXHRcdFx0XHRcdCBhbmQgd2hpdGUgaXMgdHlwaWNhbGx5IGEgY2xvc2VyIG1hdGNoIHRvIHRyYW5zcGFyZW50IHRoYW4gYmxhY2sgaXMuIEFuIGV4Y2VwdGlvbiBpcyBtYWRlIGZvciB0ZXh0IChcImNvbG9yXCIpLFxyXG5cdFx0XHRcdFx0IHdoaWNoIGlzIGFsbW9zdCBhbHdheXMgc2V0IGNsb3NlciB0byBibGFjayB0aGFuIHdoaXRlLiAqL1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBDU1MuTGlzdHMuY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZ2JDb21wb25lbnRzID0gKENTUy5MaXN0cy5jb2xvcnNbaV0gPT09IFwiY29sb3JcIikgPyBcIjAgMCAwIDFcIiA6IFwiMjU1IDI1NSAyNTUgMVwiO1xyXG5cdFx0XHRcdFx0XHRDU1MuSG9va3MudGVtcGxhdGVzW0NTUy5MaXN0cy5jb2xvcnNbaV1dID0gW1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIiwgcmdiQ29tcG9uZW50c107XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIHJvb3RQcm9wZXJ0eSxcclxuXHRcdFx0XHRcdFx0XHRob29rVGVtcGxhdGUsXHJcblx0XHRcdFx0XHRcdFx0aG9va05hbWVzO1xyXG5cclxuXHRcdFx0XHRcdC8qIEluIElFLCBjb2xvciB2YWx1ZXMgaW5zaWRlIGNvbXBvdW5kLXZhbHVlIHByb3BlcnRpZXMgYXJlIHBvc2l0aW9uZWQgYXQgdGhlIGVuZCB0aGUgdmFsdWUgaW5zdGVhZCBvZiBhdCB0aGUgYmVnaW5uaW5nLlxyXG5cdFx0XHRcdFx0IFRodXMsIHdlIHJlLWFycmFuZ2UgdGhlIHRlbXBsYXRlcyBhY2NvcmRpbmdseS4gKi9cclxuXHRcdFx0XHRcdGlmIChJRSkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHJvb3RQcm9wZXJ0eSBpbiBDU1MuSG9va3MudGVtcGxhdGVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFDU1MuSG9va3MudGVtcGxhdGVzLmhhc093blByb3BlcnR5KHJvb3RQcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRob29rVGVtcGxhdGUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdFx0aG9va05hbWVzID0gaG9va1RlbXBsYXRlWzBdLnNwbGl0KFwiIFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGRlZmF1bHRWYWx1ZXMgPSBob29rVGVtcGxhdGVbMV0ubWF0Y2goQ1NTLlJlZ0V4LnZhbHVlU3BsaXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoaG9va05hbWVzWzBdID09PSBcIkNvbG9yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIFJlcG9zaXRpb24gYm90aCB0aGUgaG9vaydzIG5hbWUgYW5kIGl0cyBkZWZhdWx0IHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlaXIgcmVzcGVjdGl2ZSBzdHJpbmdzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aG9va05hbWVzLnB1c2goaG9va05hbWVzLnNoaWZ0KCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlcy5wdXNoKGRlZmF1bHRWYWx1ZXMuc2hpZnQoKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogUmVwbGFjZSB0aGUgZXhpc3RpbmcgdGVtcGxhdGUgZm9yIHRoZSBob29rJ3Mgcm9vdCBwcm9wZXJ0eS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdENTUy5Ib29rcy50ZW1wbGF0ZXNbcm9vdFByb3BlcnR5XSA9IFtob29rTmFtZXMuam9pbihcIiBcIiksIGRlZmF1bHRWYWx1ZXMuam9pbihcIiBcIildO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIEhvb2sgcmVnaXN0cmF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0Zm9yIChyb290UHJvcGVydHkgaW4gQ1NTLkhvb2tzLnRlbXBsYXRlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAoIUNTUy5Ib29rcy50ZW1wbGF0ZXMuaGFzT3duUHJvcGVydHkocm9vdFByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGhvb2tUZW1wbGF0ZSA9IENTUy5Ib29rcy50ZW1wbGF0ZXNbcm9vdFByb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0aG9va05hbWVzID0gaG9va1RlbXBsYXRlWzBdLnNwbGl0KFwiIFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGogaW4gaG9va05hbWVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFob29rTmFtZXMuaGFzT3duUHJvcGVydHkoaikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR2YXIgZnVsbEhvb2tOYW1lID0gcm9vdFByb3BlcnR5ICsgaG9va05hbWVzW2pdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRob29rUG9zaXRpb24gPSBqO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBGb3IgZWFjaCBob29rLCByZWdpc3RlciBpdHMgZnVsbCBuYW1lIChlLmcuIHRleHRTaGFkb3dCbHVyKSB3aXRoIGl0cyByb290IHByb3BlcnR5IChlLmcuIHRleHRTaGFkb3cpXHJcblx0XHRcdFx0XHRcdFx0IGFuZCB0aGUgaG9vaydzIHBvc2l0aW9uIGluIGl0cyB0ZW1wbGF0ZSdzIGRlZmF1bHQgdmFsdWUgc3RyaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdENTUy5Ib29rcy5yZWdpc3RlcmVkW2Z1bGxIb29rTmFtZV0gPSBbcm9vdFByb3BlcnR5LCBob29rUG9zaXRpb25dO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgSW5qZWN0aW9uIGFuZCBFeHRyYWN0aW9uXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHQvKiBMb29rIHVwIHRoZSByb290IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCB0aGUgaG9vayAoZS5nLiByZXR1cm4gXCJ0ZXh0U2hhZG93XCIgZm9yIFwidGV4dFNoYWRvd0JsdXJcIikuICovXHJcblx0XHRcdFx0LyogU2luY2UgYSBob29rIGNhbm5vdCBiZSBzZXQgZGlyZWN0bHkgKHRoZSBicm93c2VyIHdvbid0IHJlY29nbml6ZSBpdCksIHN0eWxlIHVwZGF0aW5nIGZvciBob29rcyBpcyByb3V0ZWQgdGhyb3VnaCB0aGUgaG9vaydzIHJvb3QgcHJvcGVydHkuICovXHJcblx0XHRcdFx0Z2V0Um9vdDogZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdHZhciBob29rRGF0YSA9IENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaG9va0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGhvb2tEYXRhWzBdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlcmUgd2FzIG5vIGhvb2sgbWF0Y2gsIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSB1bnRvdWNoZWQuICovXHJcblx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGdldFVuaXQ6IGZ1bmN0aW9uKHN0ciwgc3RhcnQpIHtcclxuXHRcdFx0XHRcdHZhciB1bml0ID0gKHN0ci5zdWJzdHIoc3RhcnQgfHwgMCwgNSkubWF0Y2goL15bYS16JV0rLykgfHwgW10pWzBdIHx8IFwiXCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHVuaXQgJiYgX2luQXJyYXkoQ1NTLkxpc3RzLnVuaXRzLCB1bml0KSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5pdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Zml4Q29sb3JzOiBmdW5jdGlvbihzdHIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvKHJnYmE/XFwoXFxzKik/KFxcYlthLXpdK1xcYikvZywgZnVuY3Rpb24oJDAsICQxLCAkMikge1xyXG5cdFx0XHRcdFx0XHRpZiAoQ1NTLkxpc3RzLmNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkoJDIpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICgkMSA/ICQxIDogXCJyZ2JhKFwiKSArIENTUy5MaXN0cy5jb2xvck5hbWVzWyQyXSArICgkMSA/IFwiXCIgOiBcIiwxKVwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJDEgKyAkMjtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogQ29udmVydCBhbnkgcm9vdFByb3BlcnR5VmFsdWUsIG51bGwgb3Igb3RoZXJ3aXNlLCBpbnRvIGEgc3BhY2UtZGVsaW1pdGVkIGxpc3Qgb2YgaG9vayB2YWx1ZXMgc28gdGhhdFxyXG5cdFx0XHRcdCB0aGUgdGFyZ2V0ZWQgaG9vayBjYW4gYmUgaW5qZWN0ZWQgb3IgZXh0cmFjdGVkIGF0IGl0cyBzdGFuZGFyZCBwb3NpdGlvbi4gKi9cclxuXHRcdFx0XHRjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbihyb290UHJvcGVydHksIHJvb3RQcm9wZXJ0eVZhbHVlKSB7XHJcblx0XHRcdFx0XHQvKiBJZiB0aGUgcm9vdFByb3BlcnR5VmFsdWUgaXMgd3JhcHBlZCB3aXRoIFwicmdiKClcIiwgXCJjbGlwKClcIiwgZXRjLiwgcmVtb3ZlIHRoZSB3cmFwcGluZyB0byBub3JtYWxpemUgdGhlIHZhbHVlIGJlZm9yZSBtYW5pcHVsYXRpb24uICovXHJcblx0XHRcdFx0XHRpZiAoQ1NTLlJlZ0V4LnZhbHVlVW53cmFwLnRlc3Qocm9vdFByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gcm9vdFByb3BlcnR5VmFsdWUubWF0Y2goQ1NTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBJZiByb290UHJvcGVydHlWYWx1ZSBpcyBhIENTUyBudWxsLXZhbHVlIChmcm9tIHdoaWNoIHRoZXJlJ3MgaW5oZXJlbnRseSBubyBob29rIHZhbHVlIHRvIGV4dHJhY3QpLFxyXG5cdFx0XHRcdFx0IGRlZmF1bHQgdG8gdGhlIHJvb3QncyBkZWZhdWx0IHZhbHVlIGFzIGRlZmluZWQgaW4gQ1NTLkhvb2tzLnRlbXBsYXRlcy4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IENTUyBudWxsLXZhbHVlcyBpbmNsdWRlIFwibm9uZVwiLCBcImF1dG9cIiwgYW5kIFwidHJhbnNwYXJlbnRcIi4gVGhleSBtdXN0IGJlIGNvbnZlcnRlZCBpbnRvIHRoZWlyXHJcblx0XHRcdFx0XHQgemVyby12YWx1ZXMgKGUuZy4gdGV4dFNoYWRvdzogXCJub25lXCIgPT0+IHRleHRTaGFkb3c6IFwiMHB4IDBweCAwcHggYmxhY2tcIikgZm9yIGhvb2sgbWFuaXB1bGF0aW9uIHRvIHByb2NlZWQuICovXHJcblx0XHRcdFx0XHRpZiAoQ1NTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShyb290UHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV1bMV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJvb3RQcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogRXh0cmFjdGVkIHRoZSBob29rJ3MgdmFsdWUgZnJvbSBpdHMgcm9vdCBwcm9wZXJ0eSdzIHZhbHVlLiBUaGlzIGlzIHVzZWQgdG8gZ2V0IHRoZSBzdGFydGluZyB2YWx1ZSBvZiBhbiBhbmltYXRpbmcgaG9vay4gKi9cclxuXHRcdFx0XHRleHRyYWN0VmFsdWU6IGZ1bmN0aW9uKGZ1bGxIb29rTmFtZSwgcm9vdFByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdHZhciBob29rRGF0YSA9IENTUy5Ib29rcy5yZWdpc3RlcmVkW2Z1bGxIb29rTmFtZV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhvb2tEYXRhKSB7XHJcblx0XHRcdFx0XHRcdHZhciBob29rUm9vdCA9IGhvb2tEYXRhWzBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aG9va1Bvc2l0aW9uID0gaG9va0RhdGFbMV07XHJcblxyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGhvb2tSb290LCByb290UHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBTcGxpdCByb290UHJvcGVydHlWYWx1ZSBpbnRvIGl0cyBjb25zdGl0dWVudCBob29rIHZhbHVlcyB0aGVuIGdyYWIgdGhlIGRlc2lyZWQgaG9vayBhdCBpdHMgc3RhbmRhcmQgcG9zaXRpb24uICovXHJcblx0XHRcdFx0XHRcdHJldHVybiByb290UHJvcGVydHlWYWx1ZS50b1N0cmluZygpLm1hdGNoKENTUy5SZWdFeC52YWx1ZVNwbGl0KVtob29rUG9zaXRpb25dO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIHByb3ZpZGVkIGZ1bGxIb29rTmFtZSBpc24ndCBhIHJlZ2lzdGVyZWQgaG9vaywgcmV0dXJuIHRoZSByb290UHJvcGVydHlWYWx1ZSB0aGF0IHdhcyBwYXNzZWQgaW4uICovXHJcblx0XHRcdFx0XHRcdHJldHVybiByb290UHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIEluamVjdCB0aGUgaG9vaydzIHZhbHVlIGludG8gaXRzIHJvb3QgcHJvcGVydHkncyB2YWx1ZS4gVGhpcyBpcyB1c2VkIHRvIHBpZWNlIGJhY2sgdG9nZXRoZXIgdGhlIHJvb3QgcHJvcGVydHlcclxuXHRcdFx0XHQgb25jZSBWZWxvY2l0eSBoYXMgdXBkYXRlZCBvbmUgb2YgaXRzIGluZGl2aWR1YWxseSBob29rZWQgdmFsdWVzIHRocm91Z2ggdHdlZW5pbmcuICovXHJcblx0XHRcdFx0aW5qZWN0VmFsdWU6IGZ1bmN0aW9uKGZ1bGxIb29rTmFtZSwgaG9va1ZhbHVlLCByb290UHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0dmFyIGhvb2tEYXRhID0gQ1NTLkhvb2tzLnJlZ2lzdGVyZWRbZnVsbEhvb2tOYW1lXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaG9va0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGhvb2tSb290ID0gaG9va0RhdGFbMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRob29rUG9zaXRpb24gPSBob29rRGF0YVsxXSxcclxuXHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMsXHJcblx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZVVwZGF0ZWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGhvb2tSb290LCByb290UHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBTcGxpdCByb290UHJvcGVydHlWYWx1ZSBpbnRvIGl0cyBpbmRpdmlkdWFsIGhvb2sgdmFsdWVzLCByZXBsYWNlIHRoZSB0YXJnZXRlZCB2YWx1ZSB3aXRoIGhvb2tWYWx1ZSxcclxuXHRcdFx0XHRcdFx0IHRoZW4gcmVjb25zdHJ1Y3QgdGhlIHJvb3RQcm9wZXJ0eVZhbHVlIHN0cmluZy4gKi9cclxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWVQYXJ0cyA9IHJvb3RQcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkubWF0Y2goQ1NTLlJlZ0V4LnZhbHVlU3BsaXQpO1xyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZVBhcnRzW2hvb2tQb3NpdGlvbl0gPSBob29rVmFsdWU7XHJcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlVXBkYXRlZCA9IHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMuam9pbihcIiBcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWVVcGRhdGVkO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIHByb3ZpZGVkIGZ1bGxIb29rTmFtZSBpc24ndCBhIHJlZ2lzdGVyZWQgaG9vaywgcmV0dXJuIHRoZSByb290UHJvcGVydHlWYWx1ZSB0aGF0IHdhcyBwYXNzZWQgaW4uICovXHJcblx0XHRcdFx0XHRcdHJldHVybiByb290UHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBOb3JtYWxpemF0aW9uc1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIE5vcm1hbGl6YXRpb25zIHN0YW5kYXJkaXplIENTUyBwcm9wZXJ0eSBtYW5pcHVsYXRpb24gYnkgcG9sbHlmaWxsaW5nIGJyb3dzZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25zIChlLmcuIG9wYWNpdHkpXHJcblx0XHRcdCBhbmQgcmVmb3JtYXR0aW5nIHNwZWNpYWwgcHJvcGVydGllcyAoZS5nLiBjbGlwLCByZ2JhKSB0byBsb29rIGxpa2Ugc3RhbmRhcmQgb25lcy4gKi9cclxuXHRcdFx0Tm9ybWFsaXphdGlvbnM6IHtcclxuXHRcdFx0XHQvKiBOb3JtYWxpemF0aW9ucyBhcmUgcGFzc2VkIGEgbm9ybWFsaXphdGlvbiB0YXJnZXQgKGVpdGhlciB0aGUgcHJvcGVydHkncyBuYW1lLCBpdHMgZXh0cmFjdGVkIHZhbHVlLCBvciBpdHMgaW5qZWN0ZWQgdmFsdWUpLFxyXG5cdFx0XHRcdCB0aGUgdGFyZ2V0ZWQgZWxlbWVudCAod2hpY2ggbWF5IG5lZWQgdG8gYmUgcXVlcmllZCksIGFuZCB0aGUgdGFyZ2V0ZWQgcHJvcGVydHkgdmFsdWUuICovXHJcblx0XHRcdFx0cmVnaXN0ZXJlZDoge1xyXG5cdFx0XHRcdFx0Y2xpcDogZnVuY3Rpb24odHlwZSwgZWxlbWVudCwgcHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiY2xpcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xpcCBuZWVkcyB0byBiZSB1bndyYXBwZWQgYW5kIHN0cmlwcGVkIG9mIGl0cyBjb21tYXMgZHVyaW5nIGV4dHJhY3Rpb24uICovXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBleHRyYWN0ZWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgVmVsb2NpdHkgYWxzbyBleHRyYWN0ZWQgdGhpcyB2YWx1ZSwgc2tpcCBleHRyYWN0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFJlbW92ZSB0aGUgXCJyZWN0KClcIiB3cmFwcGVyLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSBwcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkubWF0Y2goQ1NTLlJlZ0V4LnZhbHVlVW53cmFwKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFN0cmlwIG9mZiBjb21tYXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IGV4dHJhY3RlZCA/IGV4dHJhY3RlZFsxXS5yZXBsYWNlKC8sKFxccyspPy9nLCBcIiBcIikgOiBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBleHRyYWN0ZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBDbGlwIG5lZWRzIHRvIGJlIHJlLXdyYXBwZWQgZHVyaW5nIGluamVjdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJyZWN0KFwiICsgcHJvcGVydHlWYWx1ZSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ymx1cjogZnVuY3Rpb24odHlwZSwgZWxlbWVudCwgcHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFZlbG9jaXR5LlN0YXRlLmlzRmlyZWZveCA/IFwiZmlsdGVyXCIgOiBcIi13ZWJraXQtZmlsdGVyXCI7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBleHRyYWN0ZWQgPSBwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIGV4dHJhY3RlZCBpcyBOYU4sIG1lYW5pbmcgdGhlIHZhbHVlIGlzbid0IGFscmVhZHkgZXh0cmFjdGVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEoZXh0cmFjdGVkIHx8IGV4dHJhY3RlZCA9PT0gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGJsdXJDb21wb25lbnQgPSBwcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBmaWx0ZXIgc3RyaW5nIGhhZCBhIGJsdXIgY29tcG9uZW50LCByZXR1cm4ganVzdCB0aGUgYmx1ciB2YWx1ZSBhbmQgdW5pdCB0eXBlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYmx1ckNvbXBvbmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IGJsdXJDb21wb25lbnRbMV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGV4aXN0LCBkZWZhdWx0IGJsdXIgdG8gMC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGV4dHJhY3RlZDtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEJsdXIgbmVlZHMgdG8gYmUgcmUtd3JhcHBlZCBkdXJpbmcgaW5qZWN0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEZvciB0aGUgYmx1ciBlZmZlY3QgdG8gYmUgZnVsbHkgZGUtYXBwbGllZCwgaXQgbmVlZHMgdG8gYmUgc2V0IHRvIFwibm9uZVwiIGluc3RlYWQgb2YgMC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmICghcGFyc2VGbG9hdChwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJub25lXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJibHVyKFwiICsgcHJvcGVydHlWYWx1ZSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0LyogPD1JRTggZG8gbm90IHN1cHBvcnQgdGhlIHN0YW5kYXJkIG9wYWNpdHkgcHJvcGVydHkuIFRoZXkgdXNlIGZpbHRlcjphbHBoYShvcGFjaXR5PUlOVCkgaW5zdGVhZC4gKi9cclxuXHRcdFx0XHRcdG9wYWNpdHk6IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0aWYgKElFIDw9IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImZpbHRlclwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogPD1JRTggcmV0dXJuIGEgXCJmaWx0ZXJcIiB2YWx1ZSBvZiBcImFscGhhKG9wYWNpdHk9XFxkezEsM30pXCIuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBFeHRyYWN0IHRoZSB2YWx1ZSBhbmQgY29udmVydCBpdCB0byBhIGRlY2ltYWwgdmFsdWUgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkIENTUyBvcGFjaXR5IHByb3BlcnR5J3MgZm9ybWF0dGluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGV4dHJhY3RlZCA9IHByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXh0cmFjdGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCB0byBkZWNpbWFsIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBleHRyYWN0ZWRbMV0gLyAxMDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogV2hlbiBleHRyYWN0aW5nIG9wYWNpdHksIGRlZmF1bHQgdG8gMSBzaW5jZSBhIG51bGwgdmFsdWUgbWVhbnMgb3BhY2l0eSBoYXNuJ3QgYmVlbiBzZXQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBPcGFjaWZpZWQgZWxlbWVudHMgYXJlIHJlcXVpcmVkIHRvIGhhdmUgdGhlaXIgem9vbSBwcm9wZXJ0eSBzZXQgdG8gYSBub24temVybyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS56b29tID0gMTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFNldHRpbmcgdGhlIGZpbHRlciBwcm9wZXJ0eSBvbiBlbGVtZW50cyB3aXRoIGNlcnRhaW4gZm9udCBwcm9wZXJ0eSBjb21iaW5hdGlvbnMgY2FuIHJlc3VsdCBpbiBhXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBoaWdobHkgdW5hcHBlYWxpbmcgdWx0cmEtYm9sZGluZyBlZmZlY3QuIFRoZXJlJ3Mgbm8gd2F5IHRvIHJlbWVkeSB0aGlzIHRocm91Z2hvdXQgYSB0d2VlbiwgYnV0IGRyb3BwaW5nIHRoZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWUgYWx0b2dldGhlciAod2hlbiBvcGFjaXR5IGhpdHMgMSkgYXQgbGVhc3RzIGVuc3VyZXMgdGhhdCB0aGUgZ2xpdGNoIGlzIGdvbmUgcG9zdC10d2VlbmluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEFzIHBlciB0aGUgZmlsdGVyIHByb3BlcnR5J3Mgc3BlYywgY29udmVydCB0aGUgZGVjaW1hbCB2YWx1ZSB0byBhIHdob2xlIG51bWJlciBhbmQgd3JhcCB0aGUgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiYWxwaGEob3BhY2l0eT1cIiArIHBhcnNlSW50KHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgKiAxMDAsIDEwKSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8qIFdpdGggYWxsIG90aGVyIGJyb3dzZXJzLCBub3JtYWxpemF0aW9uIGlzIG5vdCByZXF1aXJlZDsgcmV0dXJuIHRoZSBzYW1lIHZhbHVlcyB0aGF0IHdlcmUgcGFzc2VkIGluLiAqL1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwib3BhY2l0eVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IEJhdGNoZWQgUmVnaXN0cmF0aW9uc1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogTm90ZTogQmF0Y2hlZCBub3JtYWxpemF0aW9ucyBleHRlbmQgdGhlIENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkIG9iamVjdC4gKi9cclxuXHRcdFx0XHRyZWdpc3RlcjogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgVHJhbnNmb3Jtc1xyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIFRyYW5zZm9ybXMgYXJlIHRoZSBzdWJwcm9wZXJ0aWVzIGNvbnRhaW5lZCBieSB0aGUgQ1NTIFwidHJhbnNmb3JtXCIgcHJvcGVydHkuIFRyYW5zZm9ybXMgbXVzdCB1bmRlcmdvIG5vcm1hbGl6YXRpb25cclxuXHRcdFx0XHRcdCBzbyB0aGF0IHRoZXkgY2FuIGJlIHJlZmVyZW5jZWQgaW4gYSBwcm9wZXJ0aWVzIG1hcCBieSB0aGVpciBpbmRpdmlkdWFsIG5hbWVzLiAqL1xyXG5cdFx0XHRcdFx0LyogTm90ZTogV2hlbiB0cmFuc2Zvcm1zIGFyZSBcInNldFwiLCB0aGV5IGFyZSBhY3R1YWxseSBhc3NpZ25lZCB0byBhIHBlci1lbGVtZW50IHRyYW5zZm9ybUNhY2hlLiBXaGVuIGFsbCB0cmFuc2Zvcm1cclxuXHRcdFx0XHRcdCBzZXR0aW5nIGlzIGNvbXBsZXRlIGNvbXBsZXRlLCBDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZSgpIG11c3QgYmUgbWFudWFsbHkgY2FsbGVkIHRvIGZsdXNoIHRoZSB2YWx1ZXMgdG8gdGhlIERPTS5cclxuXHRcdFx0XHRcdCBUcmFuc2Zvcm0gc2V0dGluZyBpcyBiYXRjaGVkIGluIHRoaXMgd2F5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2U6IHRoZSB0cmFuc2Zvcm0gc3R5bGUgb25seSBuZWVkcyB0byBiZSB1cGRhdGVkXHJcblx0XHRcdFx0XHQgb25jZSB3aGVuIG11bHRpcGxlIHRyYW5zZm9ybSBzdWJwcm9wZXJ0aWVzIGFyZSBiZWluZyBhbmltYXRlZCBzaW11bHRhbmVvdXNseS4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IElFOSBhbmQgQW5kcm9pZCBHaW5nZXJicmVhZCBoYXZlIHN1cHBvcnQgZm9yIDJEIC0tIGJ1dCBub3QgM0QgLS0gdHJhbnNmb3Jtcy4gU2luY2UgYW5pbWF0aW5nIHVuc3VwcG9ydGVkXHJcblx0XHRcdFx0XHQgdHJhbnNmb3JtIHByb3BlcnRpZXMgcmVzdWx0cyBpbiB0aGUgYnJvd3NlciBpZ25vcmluZyB0aGUgKmVudGlyZSogdHJhbnNmb3JtIHN0cmluZywgd2UgcHJldmVudCB0aGVzZSAzRCB2YWx1ZXNcclxuXHRcdFx0XHRcdCBmcm9tIGJlaW5nIG5vcm1hbGl6ZWQgZm9yIHRoZXNlIGJyb3dzZXJzIHNvIHRoYXQgdHdlZW5pbmcgc2tpcHMgdGhlc2UgcHJvcGVydGllcyBhbHRvZ2V0aGVyXHJcblx0XHRcdFx0XHQgKHNpbmNlIGl0IHdpbGwgaWdub3JlIHRoZW0gYXMgYmVpbmcgdW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuKSAqL1xyXG5cdFx0XHRcdFx0aWYgKCghSUUgfHwgSUUgPiA5KSAmJiAhVmVsb2NpdHkuU3RhdGUuaXNHaW5nZXJicmVhZCkge1xyXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBTaW5jZSB0aGUgc3RhbmRhbG9uZSBDU1MgXCJwZXJzcGVjdGl2ZVwiIHByb3BlcnR5IGFuZCB0aGUgQ1NTIHRyYW5zZm9ybSBcInBlcnNwZWN0aXZlXCIgc3VicHJvcGVydHlcclxuXHRcdFx0XHRcdFx0IHNoYXJlIHRoZSBzYW1lIG5hbWUsIHRoZSBsYXR0ZXIgaXMgZ2l2ZW4gYSB1bmlxdWUgdG9rZW4gd2l0aGluIFZlbG9jaXR5OiBcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIuICovXHJcblx0XHRcdFx0XHRcdENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZSA9IENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQoQ1NTLkxpc3RzLnRyYW5zZm9ybXMzRCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBDU1MuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0LyogV3JhcCB0aGUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG5vcm1hbGl6YXRpb24gZnVuY3Rpb24gaW4gYSBuZXcgc2NvcGUgc28gdGhhdCB0cmFuc2Zvcm1OYW1lJ3MgdmFsdWUgaXNcclxuXHRcdFx0XHRcdFx0IHBhaXJlZCB3aXRoIGl0cyByZXNwZWN0aXZlIGZ1bmN0aW9uLiAoT3RoZXJ3aXNlLCBhbGwgZnVuY3Rpb25zIHdvdWxkIHRha2UgdGhlIGZpbmFsIGZvciBsb29wJ3MgdHJhbnNmb3JtTmFtZS4pICovXHJcblx0XHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtTmFtZSA9IENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtpXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdHJhbnNmb3JtTmFtZV0gPSBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogVGhlIG5vcm1hbGl6ZWQgcHJvcGVydHkgbmFtZSBpcyB0aGUgcGFyZW50IFwidHJhbnNmb3JtXCIgcHJvcGVydHkgLS0gdGhlIHByb3BlcnR5IHRoYXQgaXMgYWN0dWFsbHkgc2V0IGluIENTUy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2Zvcm1cIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0gdmFsdWVzIGFyZSBjYWNoZWQgb250byBhIHBlci1lbGVtZW50IHRyYW5zZm9ybUNhY2hlIG9iamVjdC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGlzIHRyYW5zZm9ybSBoYXMgeWV0IHRvIGJlIGFzc2lnbmVkIGEgdmFsdWUsIHJldHVybiBpdHMgbnVsbCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkIHx8IERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU2NhbGUgQ1NTLkxpc3RzLnRyYW5zZm9ybXNCYXNlIGRlZmF1bHQgdG8gMSB3aGVyZWFzIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcGVydGllcyBkZWZhdWx0IHRvIDAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gL15zY2FsZS9pLnRlc3QodHJhbnNmb3JtTmFtZSkgPyAxIDogMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFdoZW4gdHJhbnNmb3JtIHZhbHVlcyBhcmUgc2V0LCB0aGV5IGFyZSB3cmFwcGVkIGluIHBhcmVudGhlc2VzIGFzIHBlciB0aGUgQ1NTIHNwZWMuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVGh1cywgd2hlbiBleHRyYWN0aW5nIHRoZWlyIHZhbHVlcyAoZm9yIHR3ZWVuIGNhbGN1bGF0aW9ucyksIHdlIHN0cmlwIG9mZiB0aGUgcGFyZW50aGVzZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdLnJlcGxhY2UoL1soKV0vZywgXCJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgaW52YWxpZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiBhbiBpbmRpdmlkdWFsIHRyYW5zZm9ybSBwcm9wZXJ0eSBjb250YWlucyBhbiB1bnN1cHBvcnRlZCB1bml0IHR5cGUsIHRoZSBicm93c2VyIGlnbm9yZXMgdGhlICplbnRpcmUqIHRyYW5zZm9ybSBwcm9wZXJ0eS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgVGh1cywgcHJvdGVjdCB1c2VycyBmcm9tIHRoZW1zZWx2ZXMgYnkgc2tpcHBpbmcgc2V0dGluZyBmb3IgdHJhbnNmb3JtIHZhbHVlcyBzdXBwbGllZCB3aXRoIGludmFsaWQgdW5pdCB0eXBlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTd2l0Y2ggb24gdGhlIGJhc2UgdHJhbnNmb3JtIHR5cGU7IGlnbm9yZSB0aGUgYXhpcyBieSByZW1vdmluZyB0aGUgbGFzdCBsZXR0ZXIgZnJvbSB0aGUgdHJhbnNmb3JtJ3MgbmFtZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHRyYW5zZm9ybU5hbWUuc3Vic3RyKDAsIHRyYW5zZm9ybU5hbWUubGVuZ3RoIC0gMSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFdoaXRlbGlzdCB1bml0IHR5cGVzIGZvciBlYWNoIHRyYW5zZm9ybS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJ0cmFuc2xhdGVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW52YWxpZCA9ICEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFNpbmNlIGFuIGF4aXMtZnJlZSBcInNjYWxlXCIgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGFzIHdlbGwsIGEgbGl0dGxlIGhhY2sgaXMgdXNlZCBoZXJlIHRvIGRldGVjdCBpdCBieSBjaG9wcGluZyBvZmYgaXRzIGxhc3QgbGV0dGVyLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInNjYWxcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJzY2FsZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDaHJvbWUgb24gQW5kcm9pZCBoYXMgYSBidWcgaW4gd2hpY2ggc2NhbGVkIGVsZW1lbnRzIGJsdXIgaWYgdGhlaXIgaW5pdGlhbCBzY2FsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWUgaXMgYmVsb3cgMSAod2hpY2ggY2FuIGhhcHBlbiB3aXRoIGZvcmNlZmVlZGluZykuIFRodXMsIHdlIGRldGVjdCBhIHlldC11bnNldCBzY2FsZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgYW5kIGVuc3VyZSB0aGF0IGl0cyBmaXJzdCB2YWx1ZSBpcyBhbHdheXMgMS4gTW9yZSBpbmZvOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDE3ODkwL2NzczMtYW5pbWF0aW9ucy13aXRoLXRyYW5zZm9ybS1jYXVzZXMtYmx1cnJlZC1lbGVtZW50cy1vbi13ZWJraXQvMTA0MTc5NjIjMTA0MTc5NjIgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LlN0YXRlLmlzQW5kcm9pZCAmJiBEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdID09PSB1bmRlZmluZWQgJiYgcHJvcGVydHlWYWx1ZSA8IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW52YWxpZCA9ICEvKFxcZCkkL2kudGVzdChwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwic2tld1wiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnZhbGlkID0gIS8oZGVnfFxcZCkkL2kudGVzdChwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwicm90YXRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGludmFsaWQgPSAhLyhkZWd8XFxkKSQvaS50ZXN0KHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghaW52YWxpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQXMgcGVyIHRoZSBDU1Mgc3BlYywgd3JhcCB0aGUgdmFsdWUgaW4gcGFyZW50aGVzZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdID0gXCIoXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCIpXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBBbHRob3VnaCB0aGUgdmFsdWUgaXMgc2V0IG9uIHRoZSB0cmFuc2Zvcm1DYWNoZSBvYmplY3QsIHJldHVybiB0aGUgbmV3bHktdXBkYXRlZCB2YWx1ZSBmb3IgdGhlIGNhbGxpbmcgY29kZSB0byBwcm9jZXNzIGFzIG5vcm1hbC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9KSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgQ29sb3JzXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBTaW5jZSBWZWxvY2l0eSBvbmx5IGFuaW1hdGVzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgcGVyIHByb3BlcnR5LCBjb2xvciBhbmltYXRpb24gaXMgYWNoaWV2ZWQgYnkgaG9va2luZyB0aGUgaW5kaXZpZHVhbCBSR0JBIGNvbXBvbmVudHMgb2YgQ1NTIGNvbG9yIHByb3BlcnRpZXMuXHJcblx0XHRcdFx0XHQgQWNjb3JkaW5nbHksIGNvbG9yIHZhbHVlcyBtdXN0IGJlIG5vcm1hbGl6ZWQgKGUuZy4gXCIjZmYwMDAwXCIsIFwicmVkXCIsIGFuZCBcInJnYigyNTUsIDAsIDApXCIgPT0+IFwiMjU1IDAgMCAxXCIpIHNvIHRoYXQgdGhlaXIgY29tcG9uZW50cyBjYW4gYmUgaW5qZWN0ZWQvZXh0cmFjdGVkIGJ5IENTUy5Ib29rcyBsb2dpYy4gKi9cclxuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgQ1NTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHQvKiBXcmFwIHRoZSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgbm9ybWFsaXphdGlvbiBmdW5jdGlvbiBpbiBhIG5ldyBzY29wZSBzbyB0aGF0IGNvbG9yTmFtZSdzIHZhbHVlIGlzIHBhaXJlZCB3aXRoIGl0cyByZXNwZWN0aXZlIGZ1bmN0aW9uLlxyXG5cdFx0XHRcdFx0XHQgKE90aGVyd2lzZSwgYWxsIGZ1bmN0aW9ucyB3b3VsZCB0YWtlIHRoZSBmaW5hbCBmb3IgbG9vcCdzIGNvbG9yTmFtZS4pICovXHJcblx0XHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgY29sb3JOYW1lID0gQ1NTLkxpc3RzLmNvbG9yc1tqXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogSW4gSUU8PTgsIHdoaWNoIHN1cHBvcnQgcmdiIGJ1dCBub3QgcmdiYSwgY29sb3IgcHJvcGVydGllcyBhcmUgcmV2ZXJ0ZWQgdG8gcmdiIGJ5IHN0cmlwcGluZyBvZmYgdGhlIGFscGhhIGNvbXBvbmVudC4gKi9cclxuXHRcdFx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjb2xvck5hbWVdID0gZnVuY3Rpb24odHlwZSwgZWxlbWVudCwgcHJvcGVydHlWYWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbG9yTmFtZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDb252ZXJ0IGFsbCBjb2xvciB2YWx1ZXMgaW50byB0aGUgcmdiIGZvcm1hdC4gKE9sZCBJRSBjYW4gcmV0dXJuIGhleCB2YWx1ZXMgYW5kIGNvbG9yIG5hbWVzIGluc3RlYWQgb2YgcmdiL3JnYmEuKSAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiZXh0cmFjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBleHRyYWN0ZWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBjb2xvciBpcyBhbHJlYWR5IGluIGl0cyBob29rYWJsZSBmb3JtIChlLmcuIFwiMjU1IDI1NSAyNTUgMVwiKSBkdWUgdG8gaGF2aW5nIGJlZW4gcHJldmlvdXNseSBleHRyYWN0ZWQsIHNraXAgZXh0cmFjdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoQ1NTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNvbnZlcnRlZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvck5hbWVzID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmxhY2s6IFwicmdiKDAsIDAsIDApXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRibHVlOiBcInJnYigwLCAwLCAyNTUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmF5OiBcInJnYigxMjgsIDEyOCwgMTI4KVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JlZW46IFwicmdiKDAsIDEyOCwgMClcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZDogXCJyZ2IoMjU1LCAwLCAwKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGU6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIENvbnZlcnQgY29sb3IgbmFtZXMgdG8gcmdiLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKC9eW0Etel0rJC9pLnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNvbG9yTmFtZXNbcHJvcGVydHlWYWx1ZV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlZCA9IGNvbG9yTmFtZXNbcHJvcGVydHlWYWx1ZV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgYW4gdW5tYXRjaGVkIGNvbG9yIG5hbWUgaXMgcHJvdmlkZWQsIGRlZmF1bHQgdG8gYmxhY2suICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udmVydGVkID0gY29sb3JOYW1lcy5ibGFjaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDb252ZXJ0IGhleCB2YWx1ZXMgdG8gcmdiLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChDU1MuUmVnRXguaXNIZXgudGVzdChwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBcInJnYihcIiArIENTUy5WYWx1ZXMuaGV4VG9SZ2IocHJvcGVydHlWYWx1ZSkuam9pbihcIiBcIikgKyBcIilcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIHByb3ZpZGVkIGNvbG9yIGRvZXNuJ3QgbWF0Y2ggYW55IG9mIHRoZSBhY2NlcHRlZCBjb2xvciBmb3JtYXRzLCBkZWZhdWx0IHRvIGJsYWNrLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICghKC9ecmdiYT9cXCgvaS50ZXN0KHByb3BlcnR5VmFsdWUpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBjb2xvck5hbWVzLmJsYWNrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFJlbW92ZSB0aGUgc3Vycm91bmRpbmcgXCJyZ2IvcmdiYSgpXCIgc3RyaW5nIHRoZW4gcmVwbGFjZSBjb21tYXMgd2l0aCBzcGFjZXMgYW5kIHN0cmlwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmVwZWF0ZWQgc3BhY2VzIChpbiBjYXNlIHRoZSB2YWx1ZSBpbmNsdWRlZCBzcGFjZXMgdG8gYmVnaW4gd2l0aCkuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSAoY29udmVydGVkIHx8IHByb3BlcnR5VmFsdWUpLnRvU3RyaW5nKCkubWF0Y2goQ1NTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLCBcIiBcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTbyBsb25nIGFzIHRoaXMgaXNuJ3QgPD1JRTgsIGFkZCBhIGZvdXJ0aCAoYWxwaGEpIGNvbXBvbmVudCBpZiBpdCdzIG1pc3NpbmcgYW5kIGRlZmF1bHQgaXQgdG8gMSAodmlzaWJsZSkuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCghSUUgfHwgSUUgPiA4KSAmJiBleHRyYWN0ZWQuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkICs9IFwiIDFcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBleHRyYWN0ZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB3ZSBoYXZlIGEgcGF0dGVybiB0aGVuIGl0IG1pZ2h0IGFscmVhZHkgaGF2ZSB0aGUgcmlnaHQgdmFsdWVzICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKC9ecmdiLy50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoaXMgaXMgSUU8PTggYW5kIGFuIGFscGhhIGNvbXBvbmVudCBleGlzdHMsIHN0cmlwIGl0IG9mZi4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoSUUgPD0gOCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5VmFsdWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gcHJvcGVydHlWYWx1ZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsIDMpLmpvaW4oXCIgXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCBhZGQgYSBmb3VydGggKGFscGhhKSBjb21wb25lbnQgaWYgaXQncyBtaXNzaW5nIGFuZCBkZWZhdWx0IGl0IHRvIDEgKHZpc2libGUpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvcGVydHlWYWx1ZS5zcGxpdChcIiBcIikubGVuZ3RoID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlICs9IFwiIDFcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFJlLWluc2VydCB0aGUgYnJvd3Nlci1hcHByb3ByaWF0ZSB3cmFwcGVyKFwicmdiL3JnYmEoKVwiKSwgaW5zZXJ0IGNvbW1hcywgYW5kIHN0cmlwIG9mZiBkZWNpbWFsIHVuaXRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uIGFsbCB2YWx1ZXMgYnV0IHRoZSBmb3VydGggKFIsIEcsIGFuZCBCIG9ubHkgYWNjZXB0IHdob2xlIG51bWJlcnMpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoSUUgPD0gOCA/IFwicmdiXCIgOiBcInJnYmFcIikgKyBcIihcIiArIHByb3BlcnR5VmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZywgXCJcIikgKyBcIilcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9KSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IERpbWVuc2lvbnNcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKi9cclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGF1Z21lbnREaW1lbnNpb24obmFtZSwgZWxlbWVudCwgd2FudElubmVyKSB7XHJcblx0XHRcdFx0XHRcdHZhciBpc0JvcmRlckJveCA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJib3JkZXItYm94XCI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaXNCb3JkZXJCb3ggPT09ICh3YW50SW5uZXIgfHwgZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogaW4gYm94LXNpemluZyBtb2RlLCB0aGUgQ1NTIHdpZHRoIC8gaGVpZ2h0IGFjY2Vzc29ycyBhbHJlYWR5IGdpdmUgdGhlIG91dGVyV2lkdGggLyBvdXRlckhlaWdodC4gKi9cclxuXHRcdFx0XHRcdFx0XHR2YXIgaSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1Z21lbnQgPSAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaWRlcyA9IG5hbWUgPT09IFwid2lkdGhcIiA/IFtcIkxlZnRcIiwgXCJSaWdodFwiXSA6IFtcIlRvcFwiLCBcIkJvdHRvbVwiXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmllbGRzID0gW1wicGFkZGluZ1wiICsgc2lkZXNbMF0sIFwicGFkZGluZ1wiICsgc2lkZXNbMV0sIFwiYm9yZGVyXCIgKyBzaWRlc1swXSArIFwiV2lkdGhcIiwgXCJib3JkZXJcIiArIHNpZGVzWzFdICsgXCJXaWR0aFwiXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSBwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIGZpZWxkc1tpXSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXVnbWVudCArPSB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdhbnRJbm5lciA/IC1hdWdtZW50IDogYXVnbWVudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGdldERpbWVuc2lvbihuYW1lLCB3YW50SW5uZXIpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgKyBhdWdtZW50RGltZW5zaW9uKG5hbWUsIGVsZW1lbnQsIHdhbnRJbm5lcik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAocGFyc2VGbG9hdChwcm9wZXJ0eVZhbHVlKSAtIGF1Z21lbnREaW1lbnNpb24obmFtZSwgZWxlbWVudCwgd2FudElubmVyKSkgKyBcInB4XCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQuaW5uZXJXaWR0aCA9IGdldERpbWVuc2lvbihcIndpZHRoXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQuaW5uZXJIZWlnaHQgPSBnZXREaW1lbnNpb24oXCJoZWlnaHRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZC5vdXRlcldpZHRoID0gZ2V0RGltZW5zaW9uKFwid2lkdGhcIik7XHJcblx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZC5vdXRlckhlaWdodCA9IGdldERpbWVuc2lvbihcImhlaWdodFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IENTUyBQcm9wZXJ0eSBOYW1lc1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0TmFtZXM6IHtcclxuXHRcdFx0XHQvKiBDYW1lbGNhc2UgYSBwcm9wZXJ0eSBuYW1lIGludG8gaXRzIEphdmFTY3JpcHQgbm90YXRpb24gKGUuZy4gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgPT0+IFwiYmFja2dyb3VuZENvbG9yXCIpLlxyXG5cdFx0XHRcdCBDYW1lbGNhc2luZyBpcyB1c2VkIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0eSBuYW1lcyBiZXR3ZWVuIGFuZCBhY3Jvc3MgY2FsbHMuICovXHJcblx0XHRcdFx0Y2FtZWxDYXNlOiBmdW5jdGlvbihwcm9wZXJ0eSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByb3BlcnR5LnJlcGxhY2UoLy0oXFx3KS9nLCBmdW5jdGlvbihtYXRjaCwgc3ViTWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1Yk1hdGNoLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIEZvciBTVkcgZWxlbWVudHMsIHNvbWUgcHJvcGVydGllcyAobmFtZWx5LCBkaW1lbnNpb25hbCBvbmVzKSBhcmUgR0VUL1NFVCB2aWEgdGhlIGVsZW1lbnQncyBIVE1MIGF0dHJpYnV0ZXMgKGluc3RlYWQgb2YgdmlhIENTUyBzdHlsZXMpLiAqL1xyXG5cdFx0XHRcdFNWR0F0dHJpYnV0ZTogZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdHZhciBTVkdBdHRyaWJ1dGVzID0gXCJ3aWR0aHxoZWlnaHR8eHx5fGN4fGN5fHJ8cnh8cnl8eDF8eDJ8eTF8eTJcIjtcclxuXHJcblx0XHRcdFx0XHQvKiBDZXJ0YWluIGJyb3dzZXJzIHJlcXVpcmUgYW4gU1ZHIHRyYW5zZm9ybSB0byBiZSBhcHBsaWVkIGFzIGFuIGF0dHJpYnV0ZS4gKE90aGVyd2lzZSwgYXBwbGljYXRpb24gdmlhIENTUyBpcyBwcmVmZXJhYmxlIGR1ZSB0byAzRCBzdXBwb3J0LikgKi9cclxuXHRcdFx0XHRcdGlmIChJRSB8fCAoVmVsb2NpdHkuU3RhdGUuaXNBbmRyb2lkICYmICFWZWxvY2l0eS5TdGF0ZS5pc0Nocm9tZSkpIHtcclxuXHRcdFx0XHRcdFx0U1ZHQXR0cmlidXRlcyArPSBcInx0cmFuc2Zvcm1cIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcIl4oXCIgKyBTVkdBdHRyaWJ1dGVzICsgXCIpJFwiLCBcImlcIikudGVzdChwcm9wZXJ0eSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKiBEZXRlcm1pbmUgd2hldGhlciBhIHByb3BlcnR5IHNob3VsZCBiZSBzZXQgd2l0aCBhIHZlbmRvciBwcmVmaXguICovXHJcblx0XHRcdFx0LyogSWYgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBwcm9wZXJ0eSBleGlzdHMsIHJldHVybiBpdC4gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIG9yaWdpbmFsIHByb3BlcnR5IG5hbWUuXHJcblx0XHRcdFx0IElmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYXQgYWxsIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlciwgcmV0dXJuIGEgZmFsc2UgZmxhZy4gKi9cclxuXHRcdFx0XHRwcmVmaXhDaGVjazogZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdC8qIElmIHRoaXMgcHJvcGVydHkgaGFzIGFscmVhZHkgYmVlbiBjaGVja2VkLCByZXR1cm4gdGhlIGNhY2hlZCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5wcmVmaXhNYXRjaGVzW3Byb3BlcnR5XSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gW1ZlbG9jaXR5LlN0YXRlLnByZWZpeE1hdGNoZXNbcHJvcGVydHldLCB0cnVlXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciB2ZW5kb3JzID0gW1wiXCIsIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiwgXCJPXCJdO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHZlbmRvcnNMZW5ndGggPSB2ZW5kb3JzLmxlbmd0aDsgaSA8IHZlbmRvcnNMZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVByZWZpeGVkO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlQcmVmaXhlZCA9IHByb3BlcnR5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHByb3BlcnR5IHRvIGNvbmZvcm0gdG8gSmF2YVNjcmlwdCB2ZW5kb3IgcHJlZml4IG5vdGF0aW9uIChlLmcuIHdlYmtpdEZpbHRlcikuICovXHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVByZWZpeGVkID0gdmVuZG9yc1tpXSArIHByb3BlcnR5LnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbihtYXRjaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQ2hlY2sgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhpcyBwcm9wZXJ0eSBhcyBwcmVmaXhlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc1N0cmluZyhWZWxvY2l0eS5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW3Byb3BlcnR5UHJlZml4ZWRdKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2FjaGUgdGhlIG1hdGNoLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUucHJlZml4TWF0Y2hlc1twcm9wZXJ0eV0gPSBwcm9wZXJ0eVByZWZpeGVkO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBbcHJvcGVydHlQcmVmaXhlZCwgdHJ1ZV07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdGhpcyBwcm9wZXJ0eSBpbiBhbnkgZm9ybSwgaW5jbHVkZSBhIGZhbHNlIGZsYWcgc28gdGhhdCB0aGUgY2FsbGVyIGNhbiBkZWNpZGUgaG93IHRvIHByb2NlZWQuICovXHJcblx0XHRcdFx0XHRcdHJldHVybiBbcHJvcGVydHksIGZhbHNlXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IENTUyBQcm9wZXJ0eSBWYWx1ZXNcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFZhbHVlczoge1xyXG5cdFx0XHRcdC8qIEhleCB0byBSR0IgY29udmVyc2lvbi4gQ29weXJpZ2h0IFRpbSBEb3duOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MjM4MzgvcmdiLXRvLWhleC1hbmQtaGV4LXRvLXJnYiAqL1xyXG5cdFx0XHRcdGhleFRvUmdiOiBmdW5jdGlvbihoZXgpIHtcclxuXHRcdFx0XHRcdHZhciBzaG9ydGZvcm1SZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksXHJcblx0XHRcdFx0XHRcdFx0bG9uZ2Zvcm1SZWdleCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2ksXHJcblx0XHRcdFx0XHRcdFx0cmdiUGFydHM7XHJcblxyXG5cdFx0XHRcdFx0aGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRmb3JtUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHJnYlBhcnRzID0gbG9uZ2Zvcm1SZWdleC5leGVjKGhleCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJnYlBhcnRzID8gW3BhcnNlSW50KHJnYlBhcnRzWzFdLCAxNiksIHBhcnNlSW50KHJnYlBhcnRzWzJdLCAxNiksIHBhcnNlSW50KHJnYlBhcnRzWzNdLCAxNildIDogWzAsIDAsIDBdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aXNDU1NOdWxsVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0XHQvKiBUaGUgYnJvd3NlciBkZWZhdWx0cyBDU1MgdmFsdWVzIHRoYXQgaGF2ZSBub3QgYmVlbiBzZXQgdG8gZWl0aGVyIDAgb3Igb25lIG9mIHNldmVyYWwgcG9zc2libGUgbnVsbC12YWx1ZSBzdHJpbmdzLlxyXG5cdFx0XHRcdFx0IFRodXMsIHdlIGNoZWNrIGZvciBib3RoIGZhbHNpbmVzcyBhbmQgdGhlc2Ugc3BlY2lhbCBzdHJpbmdzLiAqL1xyXG5cdFx0XHRcdFx0LyogTnVsbC12YWx1ZSBjaGVja2luZyBpcyBwZXJmb3JtZWQgdG8gZGVmYXVsdCB0aGUgc3BlY2lhbCBzdHJpbmdzIHRvIDAgKGZvciB0aGUgc2FrZSBvZiB0d2VlbmluZykgb3IgdGhlaXIgaG9va1xyXG5cdFx0XHRcdFx0IHRlbXBsYXRlcyBhcyBkZWZpbmVkIGFzIENTUy5Ib29rcyAoZm9yIHRoZSBzYWtlIG9mIGhvb2sgaW5qZWN0aW9uL2V4dHJhY3Rpb24pLiAqL1xyXG5cdFx0XHRcdFx0LyogTm90ZTogQ2hyb21lIHJldHVybnMgXCJyZ2JhKDAsIDAsIDAsIDApXCIgZm9yIGFuIHVuZGVmaW5lZCBjb2xvciB3aGVyZWFzIElFIHJldHVybnMgXCJ0cmFuc3BhcmVudFwiLiAqL1xyXG5cdFx0XHRcdFx0cmV0dXJuICghdmFsdWUgfHwgL14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QodmFsdWUpKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIFJldHJpZXZlIGEgcHJvcGVydHkncyBkZWZhdWx0IHVuaXQgdHlwZS4gVXNlZCBmb3IgYXNzaWduaW5nIGEgdW5pdCB0eXBlIHdoZW4gb25lIGlzIG5vdCBzdXBwbGllZCBieSB0aGUgdXNlci4gKi9cclxuXHRcdFx0XHRnZXRVbml0VHlwZTogZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdGlmICgvXihyb3RhdGV8c2tldykvaS50ZXN0KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJkZWdcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoLyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0LyogVGhlIGFib3ZlIHByb3BlcnRpZXMgYXJlIHVuaXRsZXNzLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8qIERlZmF1bHQgdG8gcHggZm9yIGFsbCBvdGhlciBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJweFwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LyogSFRNTCBlbGVtZW50cyBkZWZhdWx0IHRvIGFuIGFzc29jaWF0ZWQgZGlzcGxheSB0eXBlIHdoZW4gdGhleSdyZSBub3Qgc2V0IHRvIGRpc3BsYXk6bm9uZS4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIGNvcnJlY3RseSBzZXR0aW5nIHRoZSBub24tXCJub25lXCIgZGlzcGxheSB2YWx1ZSBpbiBjZXJ0YWluIFZlbG9jaXR5IHJlZGlyZWN0cywgc3VjaCBhcyBmYWRlSW4vT3V0LiAqL1xyXG5cdFx0XHRcdGdldERpc3BsYXlUeXBlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHR2YXIgdGFnTmFtZSA9IGVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcImlubGluZVwiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvXihsaSkkL2kudGVzdCh0YWdOYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJsaXN0LWl0ZW1cIjtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL14odHIpJC9pLnRlc3QodGFnTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwidGFibGUtcm93XCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKHRhYmxlKSQvaS50ZXN0KHRhZ05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcInRhYmxlXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKHRib2R5KSQvaS50ZXN0KHRhZ05hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcInRhYmxlLXJvdy1ncm91cFwiO1xyXG5cdFx0XHRcdFx0XHQvKiBEZWZhdWx0IHRvIFwiYmxvY2tcIiB3aGVuIG5vIG1hdGNoIGlzIGZvdW5kLiAqL1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiYmxvY2tcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qIFRoZSBjbGFzcyBhZGQvcmVtb3ZlIGZ1bmN0aW9ucyBhcmUgdXNlZCB0byB0ZW1wb3JhcmlseSBhcHBseSBhIFwidmVsb2NpdHktYW5pbWF0aW5nXCIgY2xhc3MgdG8gZWxlbWVudHMgd2hpbGUgdGhleSdyZSBhbmltYXRpbmcuICovXHJcblx0XHRcdFx0YWRkQ2xhc3M6IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc1N0cmluZyhlbGVtZW50LmNsYXNzTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBFbGVtZW50LmNsYXNzTmFtZSBpcyBhcm91bmQgMTUlIGZhc3RlciB0aGVuIHNldC9nZXRBdHRyaWJ1dGVcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSArPSAoZWxlbWVudC5jbGFzc05hbWUubGVuZ3RoID8gXCIgXCIgOiBcIlwiKSArIGNsYXNzTmFtZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBXb3JrIGFyb3VuZCBmb3IgSUUgc3RyaWN0IG1vZGUgYW5pbWF0aW5nIFNWRyAtIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQgZG9lc24ndCBiZWhhdmUgY29ycmVjdGx5IC0gdGhlIHNhbWUgd2F5IGpRdWVyeSBkb2VzIGl0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRDbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKElFIDw9IDcgPyBcImNsYXNzTmFtZVwiIDogXCJjbGFzc1wiKSB8fCBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGN1cnJlbnRDbGFzcyArIChjdXJyZW50Q2xhc3MgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NOYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc1N0cmluZyhlbGVtZW50LmNsYXNzTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBFbGVtZW50LmNsYXNzTmFtZSBpcyBhcm91bmQgMTUlIGZhc3RlciB0aGVuIHNldC9nZXRBdHRyaWJ1dGVcclxuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBOZWVkIHNvbWUganNwZXJmIHRlc3RzIG9uIHBlcmZvcm1hbmNlIC0gY2FuIHdlIGdldCByaWQgb2YgdGhlIHJlZ2V4IGFuZCBtYXliZSB1c2Ugc3BsaXQgLyBhcnJheSBtYW5pcHVsYXRpb24/XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxzfCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBXb3JrIGFyb3VuZCBmb3IgSUUgc3RyaWN0IG1vZGUgYW5pbWF0aW5nIFNWRyAtIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQgZG9lc24ndCBiZWhhdmUgY29ycmVjdGx5IC0gdGhlIHNhbWUgd2F5IGpRdWVyeSBkb2VzIGl0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRDbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKElFIDw9IDcgPyBcImNsYXNzTmFtZVwiIDogXCJjbGFzc1wiKSB8fCBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGN1cnJlbnRDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXHMpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxzfCQpXCIsIFwiZ2lcIiksIFwiIFwiKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBTdHlsZSBHZXR0aW5nICYgU2V0dGluZ1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdC8qIFRoZSBzaW5ndWxhciBnZXRQcm9wZXJ0eVZhbHVlLCB3aGljaCByb3V0ZXMgdGhlIGxvZ2ljIGZvciBhbGwgbm9ybWFsaXphdGlvbnMsIGhvb2tzLCBhbmQgc3RhbmRhcmQgQ1NTIHByb3BlcnRpZXMuICovXHJcblx0XHRcdGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BlcnR5LCByb290UHJvcGVydHlWYWx1ZSwgZm9yY2VTdHlsZUxvb2t1cCkge1xyXG5cdFx0XHRcdC8qIEdldCBhbiBlbGVtZW50J3MgY29tcHV0ZWQgcHJvcGVydHkgdmFsdWUuICovXHJcblx0XHRcdFx0LyogTm90ZTogUmV0cmlldmluZyB0aGUgdmFsdWUgb2YgYSBDU1MgcHJvcGVydHkgY2Fubm90IHNpbXBseSBiZSBwZXJmb3JtZWQgYnkgY2hlY2tpbmcgYW4gZWxlbWVudCdzXHJcblx0XHRcdFx0IHN0eWxlIGF0dHJpYnV0ZSAod2hpY2ggb25seSByZWZsZWN0cyB1c2VyLWRlZmluZWQgdmFsdWVzKS4gSW5zdGVhZCwgdGhlIGJyb3dzZXIgbXVzdCBiZSBxdWVyaWVkIGZvciBhIHByb3BlcnR5J3NcclxuXHRcdFx0XHQgKmNvbXB1dGVkKiB2YWx1ZS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgZ2V0Q29tcHV0ZWRTdHlsZSBoZXJlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvd2luZG93LmdldENvbXB1dGVkU3R5bGUgKi9cclxuXHRcdFx0XHRmdW5jdGlvbiBjb21wdXRlUHJvcGVydHlWYWx1ZShlbGVtZW50LCBwcm9wZXJ0eSkge1xyXG5cdFx0XHRcdFx0LyogV2hlbiBib3gtc2l6aW5nIGlzbid0IHNldCB0byBib3JkZXItYm94LCBoZWlnaHQgYW5kIHdpZHRoIHN0eWxlIHZhbHVlcyBhcmUgaW5jb3JyZWN0bHkgY29tcHV0ZWQgd2hlbiBhblxyXG5cdFx0XHRcdFx0IGVsZW1lbnQncyBzY3JvbGxiYXJzIGFyZSB2aXNpYmxlICh3aGljaCBleHBhbmRzIHRoZSBlbGVtZW50J3MgZGltZW5zaW9ucykuIFRodXMsIHdlIGRlZmVyIHRvIHRoZSBtb3JlIGFjY3VyYXRlXHJcblx0XHRcdFx0XHQgb2Zmc2V0SGVpZ2h0L1dpZHRoIHByb3BlcnR5LCB3aGljaCBpbmNsdWRlcyB0aGUgdG90YWwgZGltZW5zaW9ucyBmb3IgaW50ZXJpb3IsIGJvcmRlciwgcGFkZGluZywgYW5kIHNjcm9sbGJhci5cclxuXHRcdFx0XHRcdCBXZSBzdWJ0cmFjdCBib3JkZXIgYW5kIHBhZGRpbmcgdG8gZ2V0IHRoZSBzdW0gb2YgaW50ZXJpb3IgKyBzY3JvbGxiYXIuICovXHJcblx0XHRcdFx0XHR2YXIgY29tcHV0ZWRWYWx1ZSA9IDA7XHJcblxyXG5cdFx0XHRcdFx0LyogSUU8PTggZG9lc24ndCBzdXBwb3J0IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlLCB0aHVzIHdlIGRlZmVyIHRvIGpRdWVyeSwgd2hpY2ggaGFzIGFuIGV4dGVuc2l2ZSBhcnJheVxyXG5cdFx0XHRcdFx0IG9mIGhhY2tzIHRvIGFjY3VyYXRlbHkgcmV0cmlldmUgSUU4IHByb3BlcnR5IHZhbHVlcy4gUmUtaW1wbGVtZW50aW5nIHRoYXQgbG9naWMgaGVyZSBpcyBub3Qgd29ydGggYmxvYXRpbmcgdGhlXHJcblx0XHRcdFx0XHQgY29kZWJhc2UgZm9yIGEgZHlpbmcgYnJvd3Nlci4gVGhlIHBlcmZvcm1hbmNlIHJlcGVyY3Vzc2lvbnMgb2YgdXNpbmcgalF1ZXJ5IGhlcmUgYXJlIG1pbmltYWwgc2luY2VcclxuXHRcdFx0XHRcdCBWZWxvY2l0eSBpcyBvcHRpbWl6ZWQgdG8gcmFyZWx5IChhbmQgc29tZXRpbWVzIG5ldmVyKSBxdWVyeSB0aGUgRE9NLiBGdXJ0aGVyLCB0aGUgJC5jc3MoKSBjb2RlcGF0aCBpc24ndCB0aGF0IHNsb3cuICovXHJcblx0XHRcdFx0XHRpZiAoSUUgPD0gOCkge1xyXG5cdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gJC5jc3MoZWxlbWVudCwgcHJvcGVydHkpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0LyogQWxsIG90aGVyIGJyb3dzZXJzIHN1cHBvcnQgZ2V0Q29tcHV0ZWRTdHlsZS4gVGhlIHJldHVybmVkIGxpdmUgb2JqZWN0IHJlZmVyZW5jZSBpcyBjYWNoZWQgb250byBpdHNcclxuXHRcdFx0XHRcdFx0IGFzc29jaWF0ZWQgZWxlbWVudCBzbyB0aGF0IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgcmVmZXRjaGVkIHVwb24gZXZlcnkgR0VULiAqL1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0LyogQnJvd3NlcnMgZG8gbm90IHJldHVybiBoZWlnaHQgYW5kIHdpZHRoIHZhbHVlcyBmb3IgZWxlbWVudHMgdGhhdCBhcmUgc2V0IHRvIGRpc3BsYXk6XCJub25lXCIuIFRodXMsIHdlIHRlbXBvcmFyaWx5XHJcblx0XHRcdFx0XHRcdCB0b2dnbGUgZGlzcGxheSB0byB0aGUgZWxlbWVudCB0eXBlJ3MgZGVmYXVsdCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0dmFyIHRvZ2dsZURpc3BsYXkgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICgvXih3aWR0aHxoZWlnaHQpJC8udGVzdChwcm9wZXJ0eSkgJiYgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dG9nZ2xlRGlzcGxheSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIENTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZWxlbWVudCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgcmV2ZXJ0RGlzcGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0b2dnbGVEaXNwbGF5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghZm9yY2VTdHlsZUxvb2t1cCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJoZWlnaHRcIiAmJiBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT09IFwiYm9yZGVyLWJveFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29udGVudEJveEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJib3JkZXJUb3BXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJvcmRlckJvdHRvbVdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicGFkZGluZ1RvcFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdCb3R0b21cIikpIHx8IDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV2ZXJ0RGlzcGxheSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBjb250ZW50Qm94SGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvcGVydHkgPT09IFwid2lkdGhcIiAmJiBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT09IFwiYm9yZGVyLWJveFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29udGVudEJveFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyTGVmdFdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyUmlnaHRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdMZWZ0XCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicGFkZGluZ1JpZ2h0XCIpKSB8fCAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldmVydERpc3BsYXkoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudEJveFdpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNvbXB1dGVkU3R5bGU7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBGb3IgZWxlbWVudHMgdGhhdCBWZWxvY2l0eSBoYXNuJ3QgYmVlbiBjYWxsZWQgb24gZGlyZWN0bHkgKGUuZy4gd2hlbiBWZWxvY2l0eSBxdWVyaWVzIHRoZSBET00gb24gYmVoYWxmXHJcblx0XHRcdFx0XHRcdCBvZiBhIHBhcmVudCBvZiBhbiBlbGVtZW50IGl0cyBhbmltYXRpbmcpLCBwZXJmb3JtIGEgZGlyZWN0IGdldENvbXB1dGVkU3R5bGUgbG9va3VwIHNpbmNlIHRoZSBvYmplY3QgaXNuJ3QgY2FjaGVkLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgY29tcHV0ZWRTdHlsZSBvYmplY3QgaGFzIHlldCB0byBiZSBjYWNoZWQsIGRvIHNvIG5vdy4gKi9cclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICghRGF0YShlbGVtZW50KS5jb21wdXRlZFN0eWxlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRTdHlsZSA9IERhdGEoZWxlbWVudCkuY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBJZiBjb21wdXRlZFN0eWxlIGlzIGNhY2hlZCwgdXNlIGl0LiAqL1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkU3R5bGUgPSBEYXRhKGVsZW1lbnQpLmNvbXB1dGVkU3R5bGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIElFIGFuZCBGaXJlZm94IGRvIG5vdCByZXR1cm4gYSB2YWx1ZSBmb3IgdGhlIGdlbmVyaWMgYm9yZGVyQ29sb3IgLS0gdGhleSBvbmx5IHJldHVybiBpbmRpdmlkdWFsIHZhbHVlcyBmb3IgZWFjaCBib3JkZXIgc2lkZSdzIGNvbG9yLlxyXG5cdFx0XHRcdFx0XHQgQWxzbywgaW4gYWxsIGJyb3dzZXJzLCB3aGVuIGJvcmRlciBjb2xvcnMgYXJlbid0IGFsbCB0aGUgc2FtZSwgYSBjb21wb3VuZCB2YWx1ZSBpcyByZXR1cm5lZCB0aGF0IFZlbG9jaXR5IGlzbid0IHNldHVwIHRvIHBhcnNlLlxyXG5cdFx0XHRcdFx0XHQgU28sIGFzIGEgcG9seWZpbGwgZm9yIHF1ZXJ5aW5nIGluZGl2aWR1YWwgYm9yZGVyIHNpZGUgY29sb3JzLCB3ZSBqdXN0IHJldHVybiB0aGUgdG9wIGJvcmRlcidzIGNvbG9yIGFuZCBhbmltYXRlIGFsbCBib3JkZXJzIGZyb20gdGhhdCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID09PSBcImJvcmRlckNvbG9yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eSA9IFwiYm9yZGVyVG9wQ29sb3JcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogSUU5IGhhcyBhIGJ1ZyBpbiB3aGljaCB0aGUgXCJmaWx0ZXJcIiBwcm9wZXJ0eSBtdXN0IGJlIGFjY2Vzc2VkIGZyb20gY29tcHV0ZWRTdHlsZSB1c2luZyB0aGUgZ2V0UHJvcGVydHlWYWx1ZSBtZXRob2RcclxuXHRcdFx0XHRcdFx0IGluc3RlYWQgb2YgYSBkaXJlY3QgcHJvcGVydHkgbG9va3VwLiBUaGUgZ2V0UHJvcGVydHlWYWx1ZSBtZXRob2QgaXMgc2xvd2VyIHRoYW4gYSBkaXJlY3QgbG9va3VwLCB3aGljaCBpcyB3aHkgd2UgYXZvaWQgaXQgYnkgZGVmYXVsdC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKElFID09PSA5ICYmIHByb3BlcnR5ID09PSBcImZpbHRlclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWUgPSBjb21wdXRlZFN0eWxlW3Byb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogRmFsbCBiYWNrIHRvIHRoZSBwcm9wZXJ0eSdzIHN0eWxlIHZhbHVlIChpZiBkZWZpbmVkKSB3aGVuIGNvbXB1dGVkVmFsdWUgcmV0dXJucyBub3RoaW5nLFxyXG5cdFx0XHRcdFx0XHQgd2hpY2ggY2FuIGhhcHBlbiB3aGVuIHRoZSBlbGVtZW50IGhhc24ndCBiZWVuIHBhaW50ZWQuICovXHJcblx0XHRcdFx0XHRcdGlmIChjb21wdXRlZFZhbHVlID09PSBcIlwiIHx8IGNvbXB1dGVkVmFsdWUgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHJldmVydERpc3BsYXkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBGb3IgdG9wLCByaWdodCwgYm90dG9tLCBhbmQgbGVmdCAoVFJCTCkgdmFsdWVzIHRoYXQgYXJlIHNldCB0byBcImF1dG9cIiBvbiBlbGVtZW50cyBvZiBcImZpeGVkXCIgb3IgXCJhYnNvbHV0ZVwiIHBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0IGRlZmVyIHRvIGpRdWVyeSBmb3IgY29udmVydGluZyBcImF1dG9cIiB0byBhIG51bWVyaWMgdmFsdWUuIChGb3IgZWxlbWVudHMgd2l0aCBhIFwic3RhdGljXCIgb3IgXCJyZWxhdGl2ZVwiIHBvc2l0aW9uLCBcImF1dG9cIiBoYXMgdGhlIHNhbWVcclxuXHRcdFx0XHRcdCBlZmZlY3QgYXMgYmVpbmcgc2V0IHRvIDAsIHNvIG5vIGNvbnZlcnNpb24gaXMgbmVjZXNzYXJ5LikgKi9cclxuXHRcdFx0XHRcdC8qIEFuIGV4YW1wbGUgb2Ygd2h5IG51bWVyaWMgY29udmVyc2lvbiBpcyBuZWNlc3Nhcnk6IFdoZW4gYW4gZWxlbWVudCB3aXRoIFwicG9zaXRpb246YWJzb2x1dGVcIiBoYXMgYW4gdW50b3VjaGVkIFwibGVmdFwiXHJcblx0XHRcdFx0XHQgcHJvcGVydHksIHdoaWNoIHJldmVydHMgdG8gXCJhdXRvXCIsIGxlZnQncyB2YWx1ZSBpcyAwIHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQgZWxlbWVudCwgYnV0IGlzIG9mdGVuIG5vbi16ZXJvIHJlbGF0aXZlXHJcblx0XHRcdFx0XHQgdG8gaXRzICpjb250YWluaW5nKiAobm90IHBhcmVudCkgZWxlbWVudCwgd2hpY2ggaXMgdGhlIG5lYXJlc3QgXCJwb3NpdGlvbjpyZWxhdGl2ZVwiIGFuY2VzdG9yIG9yIHRoZSB2aWV3cG9ydCAoYW5kIGFsd2F5cyB0aGUgdmlld3BvcnQgaW4gdGhlIGNhc2Ugb2YgXCJwb3NpdGlvbjpmaXhlZFwiKS4gKi9cclxuXHRcdFx0XHRcdGlmIChjb21wdXRlZFZhbHVlID09PSBcImF1dG9cIiAmJiAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IGNvbXB1dGVQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicG9zaXRpb25cIik7IC8qIEdFVCAqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogRm9yIGFic29sdXRlIHBvc2l0aW9uaW5nLCBqUXVlcnkncyAkLnBvc2l0aW9uKCkgb25seSByZXR1cm5zIHZhbHVlcyBmb3IgdG9wIGFuZCBsZWZ0O1xyXG5cdFx0XHRcdFx0XHQgcmlnaHQgYW5kIGJvdHRvbSB3aWxsIGhhdmUgdGhlaXIgXCJhdXRvXCIgdmFsdWUgcmV2ZXJ0ZWQgdG8gMC4gKi9cclxuXHRcdFx0XHRcdFx0LyogTm90ZTogQSBqUXVlcnkgb2JqZWN0IG11c3QgYmUgY3JlYXRlZCBoZXJlIHNpbmNlIGpRdWVyeSBkb2Vzbid0IGhhdmUgYSBsb3ctbGV2ZWwgYWxpYXMgZm9yICQucG9zaXRpb24oKS5cclxuXHRcdFx0XHRcdFx0IE5vdCBhIGJpZyBkZWFsIHNpbmNlIHdlJ3JlIGN1cnJlbnRseSBpbiBhIEdFVCBiYXRjaCBhbnl3YXkuICovXHJcblx0XHRcdFx0XHRcdGlmIChwb3NpdGlvbiA9PT0gXCJmaXhlZFwiIHx8IChwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiICYmIC90b3B8bGVmdC9pLnRlc3QocHJvcGVydHkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IGpRdWVyeSBzdHJpcHMgdGhlIHBpeGVsIHVuaXQgZnJvbSBpdHMgcmV0dXJuZWQgdmFsdWVzOyB3ZSByZS1hZGQgaXQgaGVyZSB0byBjb25mb3JtIHdpdGggY29tcHV0ZVByb3BlcnR5VmFsdWUncyBiZWhhdmlvci4gKi9cclxuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gJChlbGVtZW50KS5wb3NpdGlvbigpW3Byb3BlcnR5XSArIFwicHhcIjsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gY29tcHV0ZWRWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBwcm9wZXJ0eVZhbHVlO1xyXG5cclxuXHRcdFx0XHQvKiBJZiB0aGlzIGlzIGEgaG9va2VkIHByb3BlcnR5IChlLmcuIFwiY2xpcExlZnRcIiBpbnN0ZWFkIG9mIHRoZSByb290IHByb3BlcnR5IG9mIFwiY2xpcFwiKSxcclxuXHRcdFx0XHQgZXh0cmFjdCB0aGUgaG9vaydzIHZhbHVlIGZyb20gYSBub3JtYWxpemVkIHJvb3RQcm9wZXJ0eVZhbHVlIHVzaW5nIENTUy5Ib29rcy5leHRyYWN0VmFsdWUoKS4gKi9cclxuXHRcdFx0XHRpZiAoQ1NTLkhvb2tzLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHR2YXIgaG9vayA9IHByb3BlcnR5LFxyXG5cdFx0XHRcdFx0XHRcdGhvb2tSb290ID0gQ1NTLkhvb2tzLmdldFJvb3QoaG9vayk7XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgYSBjYWNoZWQgcm9vdFByb3BlcnR5VmFsdWUgd2Fzbid0IHBhc3NlZCBpbiAod2hpY2ggVmVsb2NpdHkgYWx3YXlzIGF0dGVtcHRzIHRvIGRvIGluIG9yZGVyIHRvIGF2b2lkIHJlcXVlcnlpbmcgdGhlIERPTSksXHJcblx0XHRcdFx0XHQgcXVlcnkgdGhlIERPTSBmb3IgdGhlIHJvb3QgcHJvcGVydHkncyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdGlmIChyb290UHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdC8qIFNpbmNlIHRoZSBicm93c2VyIGlzIG5vdyBiZWluZyBkaXJlY3RseSBxdWVyaWVkLCB1c2UgdGhlIG9mZmljaWFsIHBvc3QtcHJlZml4aW5nIHByb3BlcnR5IG5hbWUgZm9yIHRoaXMgbG9va3VwLiAqL1xyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIENTUy5OYW1lcy5wcmVmaXhDaGVjayhob29rUm9vdClbMF0pOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBJZiB0aGlzIHJvb3QgaGFzIGEgbm9ybWFsaXphdGlvbiByZWdpc3RlcmVkLCBwZWZvcm0gdGhlIGFzc29jaWF0ZWQgbm9ybWFsaXphdGlvbiBleHRyYWN0aW9uLiAqL1xyXG5cdFx0XHRcdFx0aWYgKENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2hvb2tSb290XSkge1xyXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2hvb2tSb290XShcImV4dHJhY3RcIiwgZWxlbWVudCwgcm9vdFByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIEV4dHJhY3QgdGhlIGhvb2sncyB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MuZXh0cmFjdFZhbHVlKGhvb2ssIHJvb3RQcm9wZXJ0eVZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHQvKiBJZiB0aGlzIGlzIGEgbm9ybWFsaXplZCBwcm9wZXJ0eSAoZS5nLiBcIm9wYWNpdHlcIiBiZWNvbWVzIFwiZmlsdGVyXCIgaW4gPD1JRTgpIG9yIFwidHJhbnNsYXRlWFwiIGJlY29tZXMgXCJ0cmFuc2Zvcm1cIiksXHJcblx0XHRcdFx0XHQgbm9ybWFsaXplIHRoZSBwcm9wZXJ0eSdzIG5hbWUgYW5kIHZhbHVlLCBhbmQgaGFuZGxlIHRoZSBzcGVjaWFsIGNhc2Ugb2YgdHJhbnNmb3Jtcy4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IE5vcm1hbGl6aW5nIGEgcHJvcGVydHkgaXMgbXV0dWFsbHkgZXhjbHVzaXZlIGZyb20gaG9va2luZyBhIHByb3BlcnR5IHNpbmNlIGhvb2stZXh0cmFjdGVkIHZhbHVlcyBhcmUgc3RyaWN0bHlcclxuXHRcdFx0XHRcdCBudW1lcmljYWwgYW5kIHRoZXJlZm9yZSBkbyBub3QgcmVxdWlyZSBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24uICovXHJcblx0XHRcdFx0fSBlbHNlIGlmIChDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdHZhciBub3JtYWxpemVkUHJvcGVydHlOYW1lLFxyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wZXJ0eVZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWUgPSBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0oXCJuYW1lXCIsIGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdC8qIFRyYW5zZm9ybSB2YWx1ZXMgYXJlIGNhbGN1bGF0ZWQgdmlhIG5vcm1hbGl6YXRpb24gZXh0cmFjdGlvbiAoc2VlIGJlbG93KSwgd2hpY2ggY2hlY2tzIGFnYWluc3QgdGhlIGVsZW1lbnQncyB0cmFuc2Zvcm1DYWNoZS5cclxuXHRcdFx0XHRcdCBBdCBubyBwb2ludCBkbyB0cmFuc2Zvcm0gR0VUcyBldmVyIGFjdHVhbGx5IHF1ZXJ5IHRoZSBET007IGluaXRpYWwgc3R5bGVzaGVldCB2YWx1ZXMgYXJlIG5ldmVyIHByb2Nlc3NlZC5cclxuXHRcdFx0XHRcdCBUaGlzIGlzIGJlY2F1c2UgcGFyc2luZyAzRCB0cmFuc2Zvcm0gbWF0cmljZXMgaXMgbm90IGFsd2F5cyBhY2N1cmF0ZSBhbmQgd291bGQgYmxvYXQgb3VyIGNvZGViYXNlO1xyXG5cdFx0XHRcdFx0IHRodXMsIG5vcm1hbGl6YXRpb24gZXh0cmFjdGlvbiBkZWZhdWx0cyBpbml0aWFsIHRyYW5zZm9ybSB2YWx1ZXMgdG8gdGhlaXIgemVyby12YWx1ZXMgKGUuZy4gMSBmb3Igc2NhbGVYIGFuZCAwIGZvciB0cmFuc2xhdGVYKS4gKi9cclxuXHRcdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcGVydHlOYW1lICE9PSBcInRyYW5zZm9ybVwiKSB7XHJcblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wZXJ0eVZhbHVlID0gY29tcHV0ZVByb3BlcnR5VmFsdWUoZWxlbWVudCwgQ1NTLk5hbWVzLnByZWZpeENoZWNrKG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWUpWzBdKTsgLyogR0VUICovXHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgdmFsdWUgaXMgYSBDU1MgbnVsbC12YWx1ZSBhbmQgdGhpcyBwcm9wZXJ0eSBoYXMgYSBob29rIHRlbXBsYXRlLCB1c2UgdGhhdCB6ZXJvLXZhbHVlIHRlbXBsYXRlIHNvIHRoYXQgaG9va3MgY2FuIGJlIGV4dHJhY3RlZCBmcm9tIGl0LiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoQ1NTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShub3JtYWxpemVkUHJvcGVydHlWYWx1ZSkgJiYgQ1NTLkhvb2tzLnRlbXBsYXRlc1twcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcGVydHlWYWx1ZSA9IENTUy5Ib29rcy50ZW1wbGF0ZXNbcHJvcGVydHldWzFdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcImV4dHJhY3RcIiwgZWxlbWVudCwgbm9ybWFsaXplZFByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogSWYgYSAobnVtZXJpYykgdmFsdWUgd2Fzbid0IHByb2R1Y2VkIHZpYSBob29rIGV4dHJhY3Rpb24gb3Igbm9ybWFsaXphdGlvbiwgcXVlcnkgdGhlIERPTS4gKi9cclxuXHRcdFx0XHRpZiAoIS9eW1xcZC1dLy50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XHJcblx0XHRcdFx0XHQvKiBGb3IgU1ZHIGVsZW1lbnRzLCBkaW1lbnNpb25hbCBwcm9wZXJ0aWVzICh3aGljaCBTVkdBdHRyaWJ1dGUoKSBkZXRlY3RzKSBhcmUgdHdlZW5lZCB2aWFcclxuXHRcdFx0XHRcdCB0aGVpciBIVE1MIGF0dHJpYnV0ZSB2YWx1ZXMgaW5zdGVhZCBvZiB0aGVpciBDU1Mgc3R5bGUgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuaXNTVkcgJiYgQ1NTLk5hbWVzLlNWR0F0dHJpYnV0ZShwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0LyogU2luY2UgdGhlIGhlaWdodC93aWR0aCBhdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgc2V0IG1hbnVhbGx5LCB0aGV5IGRvbid0IHJlZmxlY3QgY29tcHV0ZWQgdmFsdWVzLlxyXG5cdFx0XHRcdFx0XHQgVGh1cywgd2UgdXNlIHVzZSBnZXRCQm94KCkgdG8gZW5zdXJlIHdlIGFsd2F5cyBnZXQgdmFsdWVzIGZvciBlbGVtZW50cyB3aXRoIHVuZGVmaW5lZCBoZWlnaHQvd2lkdGggYXR0cmlidXRlcy4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBGaXJlZm94IHRocm93cyBhbiBlcnJvciBpZiAuZ2V0QkJveCgpIGlzIGNhbGxlZCBvbiBhbiBTVkcgdGhhdCBpc24ndCBhdHRhY2hlZCB0byB0aGUgRE9NLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gZWxlbWVudC5nZXRCQm94KClbcHJvcGVydHldO1xyXG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCBhY2Nlc3MgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBkaXJlY3RseS4gKi9cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gY29tcHV0ZVByb3BlcnR5VmFsdWUoZWxlbWVudCwgQ1NTLk5hbWVzLnByZWZpeENoZWNrKHByb3BlcnR5KVswXSk7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogU2luY2UgcHJvcGVydHkgbG9va3VwcyBhcmUgZm9yIGFuaW1hdGlvbiBwdXJwb3NlcyAod2hpY2ggZW50YWlscyBjb21wdXRpbmcgdGhlIG51bWVyaWMgZGVsdGEgYmV0d2VlbiBzdGFydCBhbmQgZW5kIHZhbHVlcyksXHJcblx0XHRcdFx0IGNvbnZlcnQgQ1NTIG51bGwtdmFsdWVzIHRvIGFuIGludGVnZXIgb2YgdmFsdWUgMC4gKi9cclxuXHRcdFx0XHRpZiAoQ1NTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShwcm9wZXJ0eVZhbHVlKSkge1xyXG5cdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcgPj0gMikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJHZXQgXCIgKyBwcm9wZXJ0eSArIFwiOiBcIiArIHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIFRoZSBzaW5ndWxhciBzZXRQcm9wZXJ0eVZhbHVlLCB3aGljaCByb3V0ZXMgdGhlIGxvZ2ljIGZvciBhbGwgbm9ybWFsaXphdGlvbnMsIGhvb2tzLCBhbmQgc3RhbmRhcmQgQ1NTIHByb3BlcnRpZXMuICovXHJcblx0XHRcdHNldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BlcnR5LCBwcm9wZXJ0eVZhbHVlLCByb290UHJvcGVydHlWYWx1ZSwgc2Nyb2xsRGF0YSkge1xyXG5cdFx0XHRcdHZhciBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eTtcclxuXHJcblx0XHRcdFx0LyogSW4gb3JkZXIgdG8gYmUgc3ViamVjdGVkIHRvIGNhbGwgb3B0aW9ucyBhbmQgZWxlbWVudCBxdWV1ZWluZywgc2Nyb2xsIGFuaW1hdGlvbiBpcyByb3V0ZWQgdGhyb3VnaCBWZWxvY2l0eSBhcyBpZiBpdCB3ZXJlIGEgc3RhbmRhcmQgQ1NTIHByb3BlcnR5LiAqL1xyXG5cdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJzY3JvbGxcIikge1xyXG5cdFx0XHRcdFx0LyogSWYgYSBjb250YWluZXIgb3B0aW9uIGlzIHByZXNlbnQsIHNjcm9sbCB0aGUgY29udGFpbmVyIGluc3RlYWQgb2YgdGhlIGJyb3dzZXIgd2luZG93LiAqL1xyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbERhdGEuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdHNjcm9sbERhdGEuY29udGFpbmVyW1wic2Nyb2xsXCIgKyBzY3JvbGxEYXRhLmRpcmVjdGlvbl0gPSBwcm9wZXJ0eVZhbHVlO1xyXG5cdFx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIFZlbG9jaXR5IGRlZmF1bHRzIHRvIHNjcm9sbGluZyB0aGUgYnJvd3NlciB3aW5kb3cuICovXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2Nyb2xsRGF0YS5kaXJlY3Rpb24gPT09IFwiTGVmdFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHByb3BlcnR5VmFsdWUsIHNjcm9sbERhdGEuYWx0ZXJuYXRlVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxEYXRhLmFsdGVybmF0ZVZhbHVlLCBwcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm1zICh0cmFuc2xhdGVYLCByb3RhdGVaLCBldGMuKSBhcmUgYXBwbGllZCB0byBhIHBlci1lbGVtZW50IHRyYW5zZm9ybUNhY2hlIG9iamVjdCwgd2hpY2ggaXMgbWFudWFsbHkgZmx1c2hlZCB2aWEgZmx1c2hUcmFuc2Zvcm1DYWNoZSgpLlxyXG5cdFx0XHRcdFx0IFRodXMsIGZvciBub3csIHdlIG1lcmVseSBjYWNoZSB0cmFuc2Zvcm1zIGJlaW5nIFNFVC4gKi9cclxuXHRcdFx0XHRcdGlmIChDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0gJiYgQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwibmFtZVwiLCBlbGVtZW50KSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xyXG5cdFx0XHRcdFx0XHQvKiBQZXJmb3JtIGEgbm9ybWFsaXphdGlvbiBpbmplY3Rpb24uICovXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IFRoZSBub3JtYWxpemF0aW9uIGxvZ2ljIGhhbmRsZXMgdGhlIHRyYW5zZm9ybUNhY2hlIHVwZGF0aW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0oXCJpbmplY3RcIiwgZWxlbWVudCwgcHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eU5hbWUgPSBcInRyYW5zZm9ybVwiO1xyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVtwcm9wZXJ0eV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvKiBJbmplY3QgaG9va3MuICovXHJcblx0XHRcdFx0XHRcdGlmIChDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgaG9va05hbWUgPSBwcm9wZXJ0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aG9va1Jvb3QgPSBDU1MuSG9va3MuZ2V0Um9vdChwcm9wZXJ0eSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIGEgY2FjaGVkIHJvb3RQcm9wZXJ0eVZhbHVlIHdhcyBub3QgcHJvdmlkZWQsIHF1ZXJ5IHRoZSBET00gZm9yIHRoZSBob29rUm9vdCdzIGN1cnJlbnQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSByb290UHJvcGVydHlWYWx1ZSB8fCBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBob29rUm9vdCk7IC8qIEdFVCAqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLmluamVjdFZhbHVlKGhvb2tOYW1lLCBwcm9wZXJ0eVZhbHVlLCByb290UHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHkgPSBob29rUm9vdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogTm9ybWFsaXplIG5hbWVzIGFuZCB2YWx1ZXMuICovXHJcblx0XHRcdFx0XHRcdGlmIChDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwiaW5qZWN0XCIsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdHByb3BlcnR5ID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwibmFtZVwiLCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogQXNzaWduIHRoZSBhcHByb3ByaWF0ZSB2ZW5kb3IgcHJlZml4IGJlZm9yZSBwZXJmb3JtaW5nIGFuIG9mZmljaWFsIHN0eWxlIHVwZGF0ZS4gKi9cclxuXHRcdFx0XHRcdFx0cHJvcGVydHlOYW1lID0gQ1NTLk5hbWVzLnByZWZpeENoZWNrKHByb3BlcnR5KVswXTtcclxuXHJcblx0XHRcdFx0XHRcdC8qIEEgdHJ5L2NhdGNoIGlzIHVzZWQgZm9yIElFPD04LCB3aGljaCB0aHJvd3MgYW4gZXJyb3Igd2hlbiBcImludmFsaWRcIiBDU1MgdmFsdWVzIGFyZSBzZXQsIGUuZy4gYSBuZWdhdGl2ZSB3aWR0aC5cclxuXHRcdFx0XHRcdFx0IFRyeS9jYXRjaCBpcyBhdm9pZGVkIGZvciBvdGhlciBicm93c2VycyBzaW5jZSBpdCBpbmN1cnMgYSBwZXJmb3JtYW5jZSBvdmVyaGVhZC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKElFIDw9IDgpIHtcclxuXHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zdHlsZVtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFtcIiArIHByb3BlcnR5VmFsdWUgKyBcIl0gZm9yIFtcIiArIHByb3BlcnR5TmFtZSArIFwiXVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0LyogU1ZHIGVsZW1lbnRzIGhhdmUgdGhlaXIgZGltZW5zaW9uYWwgcHJvcGVydGllcyAod2lkdGgsIGhlaWdodCwgeCwgeSwgY3gsIGV0Yy4pIGFwcGxpZWQgZGlyZWN0bHkgYXMgYXR0cmlidXRlcyBpbnN0ZWFkIG9mIGFzIHN0eWxlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBJRTggZG9lcyBub3Qgc3VwcG9ydCBTVkcgZWxlbWVudHMsIHNvIGl0J3Mgb2theSB0aGF0IHdlIHNraXAgaXQgZm9yIFNWRyBhbmltYXRpb24uICovXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmlzU1ZHICYmIENTUy5OYW1lcy5TVkdBdHRyaWJ1dGUocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBGb3IgU1ZHIGF0dHJpYnV0ZXMsIHZlbmRvci1wcmVmaXhlZCBwcm9wZXJ0eSBuYW1lcyBhcmUgbmV2ZXIgdXNlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IE5vdCBhbGwgQ1NTIHByb3BlcnRpZXMgY2FuIGJlIGFuaW1hdGVkIHZpYSBhdHRyaWJ1dGVzLCBidXQgdGhlIGJyb3dzZXIgd29uJ3QgdGhyb3cgYW4gZXJyb3IgZm9yIHVuc3VwcG9ydGVkIHByb3BlcnRpZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgcHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcgPj0gMikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU2V0IFwiICsgcHJvcGVydHkgKyBcIiAoXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIik6IFwiICsgcHJvcGVydHlWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIFJldHVybiB0aGUgbm9ybWFsaXplZCBwcm9wZXJ0eSBuYW1lIGFuZCB2YWx1ZSBpbiBjYXNlIHRoZSBjYWxsZXIgd2FudHMgdG8ga25vdyBob3cgdGhlc2UgdmFsdWVzIHdlcmUgbW9kaWZpZWQgYmVmb3JlIGJlaW5nIGFwcGxpZWQgdG8gdGhlIERPTS4gKi9cclxuXHRcdFx0XHRyZXR1cm4gW3Byb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZV07XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qIFRvIGluY3JlYXNlIHBlcmZvcm1hbmNlIGJ5IGJhdGNoaW5nIHRyYW5zZm9ybSB1cGRhdGVzIGludG8gYSBzaW5nbGUgU0VULCB0cmFuc2Zvcm1zIGFyZSBub3QgZGlyZWN0bHkgYXBwbGllZCB0byBhbiBlbGVtZW50IHVudGlsIGZsdXNoVHJhbnNmb3JtQ2FjaGUoKSBpcyBjYWxsZWQuICovXHJcblx0XHRcdC8qIE5vdGU6IFZlbG9jaXR5IGFwcGxpZXMgdHJhbnNmb3JtIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IGFyZSBjaHJvbm9naWNhbGx5IGludHJvZHVjZWQgdG8gdGhlIGVsZW1lbnQncyBDU1Mgc3R5bGVzLiAqL1xyXG5cdFx0XHRmbHVzaFRyYW5zZm9ybUNhY2hlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0dmFyIHRyYW5zZm9ybVN0cmluZyA9IFwiXCIsXHJcblx0XHRcdFx0XHRcdGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHQvKiBDZXJ0YWluIGJyb3dzZXJzIHJlcXVpcmUgdGhhdCBTVkcgdHJhbnNmb3JtcyBiZSBhcHBsaWVkIGFzIGFuIGF0dHJpYnV0ZS4gSG93ZXZlciwgdGhlIFNWRyB0cmFuc2Zvcm0gYXR0cmlidXRlIHRha2VzIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiBDU1MncyB0cmFuc2Zvcm0gc3RyaW5nXHJcblx0XHRcdFx0ICh1bml0cyBhcmUgZHJvcHBlZCBhbmQsIGV4Y2VwdCBmb3Igc2tld1gvWSwgc3VicHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlaXIgbWFzdGVyIHByb3BlcnR5IC0tIGUuZy4gc2NhbGVYIGFuZCBzY2FsZVkgYXJlIG1lcmdlZCBpbnRvIHNjYWxlKFggWSkuICovXHJcblx0XHRcdFx0aWYgKChJRSB8fCAoVmVsb2NpdHkuU3RhdGUuaXNBbmRyb2lkICYmICFWZWxvY2l0eS5TdGF0ZS5pc0Nocm9tZSkpICYmIGRhdGEgJiYgZGF0YS5pc1NWRykge1xyXG5cdFx0XHRcdFx0LyogU2luY2UgdHJhbnNmb3JtIHZhbHVlcyBhcmUgc3RvcmVkIGluIHRoZWlyIHBhcmVudGhlc2VzLXdyYXBwZWQgZm9ybSwgd2UgdXNlIGEgaGVscGVyIGZ1bmN0aW9uIHRvIHN0cmlwIG91dCB0aGVpciBudW1lcmljIHZhbHVlcy5cclxuXHRcdFx0XHRcdCBGdXJ0aGVyLCBTVkcgdHJhbnNmb3JtIHByb3BlcnRpZXMgb25seSB0YWtlIHVuaXRsZXNzIChyZXByZXNlbnRpbmcgcGl4ZWxzKSB2YWx1ZXMsIHNvIGl0J3Mgb2theSB0aGF0IHBhcnNlRmxvYXQoKSBzdHJpcHMgdGhlIHVuaXQgc3VmZml4ZWQgdG8gdGhlIGZsb2F0IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0dmFyIGdldFRyYW5zZm9ybUZsb2F0ID0gZnVuY3Rpb24odHJhbnNmb3JtUHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgdHJhbnNmb3JtUHJvcGVydHkpKTtcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0LyogQ3JlYXRlIGFuIG9iamVjdCB0byBvcmdhbml6ZSBhbGwgdGhlIHRyYW5zZm9ybXMgdGhhdCB3ZSdsbCBhcHBseSB0byB0aGUgU1ZHIGVsZW1lbnQuIFRvIGtlZXAgdGhlIGxvZ2ljIHNpbXBsZSxcclxuXHRcdFx0XHRcdCB3ZSBwcm9jZXNzICphbGwqIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIC0tIGV2ZW4gdGhvc2UgdGhhdCBtYXkgbm90IGJlIGV4cGxpY2l0bHkgYXBwbGllZCAoc2luY2UgdGhleSBkZWZhdWx0IHRvIHRoZWlyIHplcm8tdmFsdWVzIGFueXdheSkuICovXHJcblx0XHRcdFx0XHR2YXIgU1ZHVHJhbnNmb3JtcyA9IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlOiBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJ0cmFuc2xhdGVYXCIpLCBnZXRUcmFuc2Zvcm1GbG9hdChcInRyYW5zbGF0ZVlcIildLFxyXG5cdFx0XHRcdFx0XHRza2V3WDogW2dldFRyYW5zZm9ybUZsb2F0KFwic2tld1hcIildLCBza2V3WTogW2dldFRyYW5zZm9ybUZsb2F0KFwic2tld1lcIildLFxyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgc2NhbGUgcHJvcGVydHkgaXMgc2V0IChub24tMSksIHVzZSB0aGF0IHZhbHVlIGZvciB0aGUgc2NhbGVYIGFuZCBzY2FsZVkgdmFsdWVzXHJcblx0XHRcdFx0XHRcdCAodGhpcyBiZWhhdmlvciBtaW1pY3MgdGhlIHJlc3VsdCBvZiBhbmltYXRpbmcgYWxsIHRoZXNlIHByb3BlcnRpZXMgYXQgb25jZSBvbiBIVE1MIGVsZW1lbnRzKS4gKi9cclxuXHRcdFx0XHRcdFx0c2NhbGU6IGdldFRyYW5zZm9ybUZsb2F0KFwic2NhbGVcIikgIT09IDEgPyBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJzY2FsZVwiKSwgZ2V0VHJhbnNmb3JtRmxvYXQoXCJzY2FsZVwiKV0gOiBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJzY2FsZVhcIiksIGdldFRyYW5zZm9ybUZsb2F0KFwic2NhbGVZXCIpXSxcclxuXHRcdFx0XHRcdFx0LyogTm90ZTogU1ZHJ3Mgcm90YXRlIHRyYW5zZm9ybSB0YWtlcyB0aHJlZSB2YWx1ZXM6IHJvdGF0aW9uIGRlZ3JlZXMgZm9sbG93ZWQgYnkgdGhlIFggYW5kIFkgdmFsdWVzXHJcblx0XHRcdFx0XHRcdCBkZWZpbmluZyB0aGUgcm90YXRpb24ncyBvcmlnaW4gcG9pbnQuIFdlIGlnbm9yZSB0aGUgb3JpZ2luIHZhbHVlcyAoZGVmYXVsdCB0aGVtIHRvIDApLiAqL1xyXG5cdFx0XHRcdFx0XHRyb3RhdGU6IFtnZXRUcmFuc2Zvcm1GbG9hdChcInJvdGF0ZVpcIiksIDAsIDBdXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgdHJhbnNmb3JtIHByb3BlcnRpZXMgaW4gdGhlIHVzZXItZGVmaW5lZCBwcm9wZXJ0eSBtYXAgb3JkZXIuXHJcblx0XHRcdFx0XHQgKFRoaXMgbWltaWNzIHRoZSBiZWhhdmlvciBvZiBub24tU1ZHIHRyYW5zZm9ybSBhbmltYXRpb24uKSAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGUsIGZ1bmN0aW9uKHRyYW5zZm9ybU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0LyogRXhjZXB0IGZvciB3aXRoIHNrZXdYL1ksIHJldmVydCB0aGUgYXhpcy1zcGVjaWZpYyB0cmFuc2Zvcm0gc3VicHJvcGVydGllcyB0byB0aGVpciBheGlzLWZyZWUgbWFzdGVyXHJcblx0XHRcdFx0XHRcdCBwcm9wZXJ0aWVzIHNvIHRoYXQgdGhleSBtYXRjaCB1cCB3aXRoIFNWRydzIGFjY2VwdGVkIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoL150cmFuc2xhdGUvaS50ZXN0KHRyYW5zZm9ybU5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtTmFtZSA9IFwidHJhbnNsYXRlXCI7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15zY2FsZS9pLnRlc3QodHJhbnNmb3JtTmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1OYW1lID0gXCJzY2FsZVwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9ecm90YXRlL2kudGVzdCh0cmFuc2Zvcm1OYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU5hbWUgPSBcInJvdGF0ZVwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHdlIGhhdmVuJ3QgeWV0IGRlbGV0ZWQgdGhlIHByb3BlcnR5IGZyb20gdGhlIFNWR1RyYW5zZm9ybXMgY29udGFpbmVyLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoU1ZHVHJhbnNmb3Jtc1t0cmFuc2Zvcm1OYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIEFwcGVuZCB0aGUgdHJhbnNmb3JtIHByb3BlcnR5IGluIHRoZSBTVkctc3VwcG9ydGVkIHRyYW5zZm9ybSBmb3JtYXQuIEFzIHBlciB0aGUgc3BlYywgc3Vycm91bmQgdGhlIHNwYWNlLWRlbGltaXRlZCB2YWx1ZXMgaW4gcGFyZW50aGVzZXMuICovXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zZm9ybU5hbWUgKyBcIihcIiArIFNWR1RyYW5zZm9ybXNbdHJhbnNmb3JtTmFtZV0uam9pbihcIiBcIikgKyBcIilcIiArIFwiIFwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBBZnRlciBwcm9jZXNzaW5nIGFuIFNWRyB0cmFuc2Zvcm0gcHJvcGVydHksIGRlbGV0ZSBpdCBmcm9tIHRoZSBTVkdUcmFuc2Zvcm1zIGNvbnRhaW5lciBzbyB3ZSBkb24ndFxyXG5cdFx0XHRcdFx0XHRcdCByZS1pbnNlcnQgdGhlIHNhbWUgbWFzdGVyIHByb3BlcnR5IGlmIHdlIGVuY291bnRlciBhbm90aGVyIG9uZSBvZiBpdHMgYXhpcy1zcGVjaWZpYyBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBTVkdUcmFuc2Zvcm1zW3RyYW5zZm9ybU5hbWVdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIHRyYW5zZm9ybVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdHBlcnNwZWN0aXZlO1xyXG5cclxuXHRcdFx0XHRcdC8qIFRyYW5zZm9ybSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgYXMgbWVtYmVycyBvZiB0aGUgdHJhbnNmb3JtQ2FjaGUgb2JqZWN0LiBDb25jYXRlbmF0ZSBhbGwgdGhlIG1lbWJlcnMgaW50byBhIHN0cmluZy4gKi9cclxuXHRcdFx0XHRcdCQuZWFjaChEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLCBmdW5jdGlvbih0cmFuc2Zvcm1OYW1lKSB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybVZhbHVlID0gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcclxuXHJcblx0XHRcdFx0XHRcdC8qIFRyYW5zZm9ybSdzIHBlcnNwZWN0aXZlIHN1YnByb3BlcnR5IG11c3QgYmUgc2V0IGZpcnN0IGluIG9yZGVyIHRvIHRha2UgZWZmZWN0LiBTdG9yZSBpdCB0ZW1wb3JhcmlseS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKHRyYW5zZm9ybU5hbWUgPT09IFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIikge1xyXG5cdFx0XHRcdFx0XHRcdHBlcnNwZWN0aXZlID0gdHJhbnNmb3JtVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIElFOSBvbmx5IHN1cHBvcnRzIG9uZSByb3RhdGlvbiB0eXBlLCByb3RhdGVaLCB3aGljaCBpdCByZWZlcnMgdG8gYXMgXCJyb3RhdGVcIi4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKElFID09PSA5ICYmIHRyYW5zZm9ybU5hbWUgPT09IFwicm90YXRlWlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtTmFtZSA9IFwicm90YXRlXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2Zvcm1OYW1lICsgdHJhbnNmb3JtVmFsdWUgKyBcIiBcIjtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdC8qIElmIHByZXNlbnQsIHNldCB0aGUgcGVyc3BlY3RpdmUgc3VicHJvcGVydHkgZmlyc3QuICovXHJcblx0XHRcdFx0XHRpZiAocGVyc3BlY3RpdmUpIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtU3RyaW5nID0gXCJwZXJzcGVjdGl2ZVwiICsgcGVyc3BlY3RpdmUgKyBcIiBcIiArIHRyYW5zZm9ybVN0cmluZztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybVN0cmluZyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyogUmVnaXN0ZXIgaG9va3MgYW5kIG5vcm1hbGl6YXRpb25zLiAqL1xyXG5cdFx0Q1NTLkhvb2tzLnJlZ2lzdGVyKCk7XHJcblx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKTtcclxuXHJcblx0XHQvKiBBbGxvdyBob29rIHNldHRpbmcgaW4gdGhlIHNhbWUgZmFzaGlvbiBhcyBqUXVlcnkncyAkLmNzcygpLiAqL1xyXG5cdFx0VmVsb2NpdHkuaG9vayA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBhcmcyLCBhcmczKSB7XHJcblx0XHRcdHZhciB2YWx1ZTtcclxuXHJcblx0XHRcdGVsZW1lbnRzID0gc2FuaXRpemVFbGVtZW50cyhlbGVtZW50cyk7XHJcblxyXG5cdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcclxuXHRcdFx0XHQvKiBJbml0aWFsaXplIFZlbG9jaXR5J3MgcGVyLWVsZW1lbnQgZGF0YSBjYWNoZSBpZiB0aGlzIGVsZW1lbnQgaGFzbid0IHByZXZpb3VzbHkgYmVlbiBhbmltYXRlZC4gKi9cclxuXHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRWZWxvY2l0eS5pbml0KGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogR2V0IHByb3BlcnR5IHZhbHVlLiBJZiBhbiBlbGVtZW50IHNldCB3YXMgcGFzc2VkIGluLCBvbmx5IHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSBmaXJzdCBlbGVtZW50LiAqL1xyXG5cdFx0XHRcdGlmIChhcmczID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgYXJnMik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvKiBTZXQgcHJvcGVydHkgdmFsdWUuICovXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8qIHNQViByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBub3JtYWxpemVkIHByb3BlcnR5TmFtZS9wcm9wZXJ0eVZhbHVlIHBhaXIgdXNlZCB0byB1cGRhdGUgdGhlIERPTS4gKi9cclxuXHRcdFx0XHRcdHZhciBhZGp1c3RlZFNldCA9IENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIGFyZzIsIGFyZzMpO1xyXG5cclxuXHRcdFx0XHRcdC8qIFRyYW5zZm9ybSBwcm9wZXJ0aWVzIGRvbid0IGF1dG9tYXRpY2FsbHkgc2V0LiBUaGV5IGhhdmUgdG8gYmUgZmx1c2hlZCB0byB0aGUgRE9NLiAqL1xyXG5cdFx0XHRcdFx0aWYgKGFkanVzdGVkU2V0WzBdID09PSBcInRyYW5zZm9ybVwiKSB7XHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhbHVlID0gYWRqdXN0ZWRTZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKioqXHJcblx0XHQgQW5pbWF0aW9uXHJcblx0XHQgKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0dmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIG9wdHM7XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDYWxsIENoYWluXHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBMb2dpYyBmb3IgZGV0ZXJtaW5pbmcgd2hhdCB0byByZXR1cm4gdG8gdGhlIGNhbGwgc3RhY2sgd2hlbiBleGl0aW5nIG91dCBvZiBWZWxvY2l0eS4gKi9cclxuXHRcdFx0ZnVuY3Rpb24gZ2V0Q2hhaW4oKSB7XHJcblx0XHRcdFx0LyogSWYgd2UgYXJlIHVzaW5nIHRoZSB1dGlsaXR5IGZ1bmN0aW9uLCBhdHRlbXB0IHRvIHJldHVybiB0aGlzIGNhbGwncyBwcm9taXNlLiBJZiBubyBwcm9taXNlIGxpYnJhcnkgd2FzIGRldGVjdGVkLFxyXG5cdFx0XHRcdCBkZWZhdWx0IHRvIG51bGwgaW5zdGVhZCBvZiByZXR1cm5pbmcgdGhlIHRhcmdldGVkIGVsZW1lbnRzIHNvIHRoYXQgdXRpbGl0eSBmdW5jdGlvbidzIHJldHVybiB2YWx1ZSBpcyBzdGFuZGFyZGl6ZWQuICovXHJcblx0XHRcdFx0aWYgKGlzVXRpbGl0eSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VEYXRhLnByb21pc2UgfHwgbnVsbDtcclxuXHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgaWYgd2UncmUgdXNpbmcgJC5mbiwgcmV0dXJuIHRoZSBqUXVlcnktL1plcHRvLXdyYXBwZWQgZWxlbWVudCBzZXQuICovXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50c1dyYXBwZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHQgQXJndW1lbnRzIEFzc2lnbm1lbnRcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBUbyBhbGxvdyBmb3IgZXhwcmVzc2l2ZSBDb2ZmZWVTY3JpcHQgY29kZSwgVmVsb2NpdHkgc3VwcG9ydHMgYW4gYWx0ZXJuYXRpdmUgc3ludGF4IGluIHdoaWNoIFwiZWxlbWVudHNcIiAob3IgXCJlXCIpLCBcInByb3BlcnRpZXNcIiAob3IgXCJwXCIpLCBhbmQgXCJvcHRpb25zXCIgKG9yIFwib1wiKVxyXG5cdFx0XHQgb2JqZWN0cyBhcmUgZGVmaW5lZCBvbiBhIGNvbnRhaW5lciBvYmplY3QgdGhhdCdzIHBhc3NlZCBpbiBhcyBWZWxvY2l0eSdzIHNvbGUgYXJndW1lbnQuICovXHJcblx0XHRcdC8qIE5vdGU6IFNvbWUgYnJvd3NlcnMgYXV0b21hdGljYWxseSBwb3B1bGF0ZSBhcmd1bWVudHMgd2l0aCBhIFwicHJvcGVydGllc1wiIG9iamVjdC4gV2UgZGV0ZWN0IGl0IGJ5IGNoZWNraW5nIGZvciBpdHMgZGVmYXVsdCBcIm5hbWVzXCIgcHJvcGVydHkuICovXHJcblx0XHRcdHZhciBzeW50YWN0aWNTdWdhciA9IChhcmd1bWVudHNbMF0gJiYgKGFyZ3VtZW50c1swXS5wIHx8ICgoJC5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSAmJiAhYXJndW1lbnRzWzBdLnByb3BlcnRpZXMubmFtZXMpIHx8IFR5cGUuaXNTdHJpbmcoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpKSkpLFxyXG5cdFx0XHRcdFx0LyogV2hldGhlciBWZWxvY2l0eSB3YXMgY2FsbGVkIHZpYSB0aGUgdXRpbGl0eSBmdW5jdGlvbiAoYXMgb3Bwb3NlZCB0byBvbiBhIGpRdWVyeS9aZXB0byBvYmplY3QpLiAqL1xyXG5cdFx0XHRcdFx0aXNVdGlsaXR5LFxyXG5cdFx0XHRcdFx0LyogV2hlbiBWZWxvY2l0eSBpcyBjYWxsZWQgdmlhIHRoZSB1dGlsaXR5IGZ1bmN0aW9uICgkLlZlbG9jaXR5KCkvVmVsb2NpdHkoKSksIGVsZW1lbnRzIGFyZSBleHBsaWNpdGx5XHJcblx0XHRcdFx0XHQgcGFzc2VkIGluIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIuIFRodXMsIGFyZ3VtZW50IHBvc2l0aW9uaW5nIHZhcmllcy4gV2Ugbm9ybWFsaXplIHRoZW0gaGVyZS4gKi9cclxuXHRcdFx0XHRcdGVsZW1lbnRzV3JhcHBlZCxcclxuXHRcdFx0XHRcdGFyZ3VtZW50SW5kZXg7XHJcblxyXG5cdFx0XHR2YXIgZWxlbWVudHMsXHJcblx0XHRcdFx0XHRwcm9wZXJ0aWVzTWFwLFxyXG5cdFx0XHRcdFx0b3B0aW9ucztcclxuXHJcblx0XHRcdC8qIERldGVjdCBqUXVlcnkvWmVwdG8gZWxlbWVudHMgYmVpbmcgYW5pbWF0ZWQgdmlhIHRoZSAkLmZuIG1ldGhvZC4gKi9cclxuXHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKHRoaXMpKSB7XHJcblx0XHRcdFx0aXNVdGlsaXR5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGFyZ3VtZW50SW5kZXggPSAwO1xyXG5cdFx0XHRcdGVsZW1lbnRzID0gdGhpcztcclxuXHRcdFx0XHRlbGVtZW50c1dyYXBwZWQgPSB0aGlzO1xyXG5cdFx0XHRcdC8qIE90aGVyd2lzZSwgcmF3IGVsZW1lbnRzIGFyZSBiZWluZyBhbmltYXRlZCB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24uICovXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aXNVdGlsaXR5ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0YXJndW1lbnRJbmRleCA9IDE7XHJcblx0XHRcdFx0ZWxlbWVudHMgPSBzeW50YWN0aWNTdWdhciA/IChhcmd1bWVudHNbMF0uZWxlbWVudHMgfHwgYXJndW1lbnRzWzBdLmUpIDogYXJndW1lbnRzWzBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqXHJcblx0XHRcdCBQcm9taXNlc1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0dmFyIHByb21pc2VEYXRhID0ge1xyXG5cdFx0XHRcdHByb21pc2U6IG51bGwsXHJcblx0XHRcdFx0cmVzb2x2ZXI6IG51bGwsXHJcblx0XHRcdFx0cmVqZWN0ZXI6IG51bGxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8qIElmIHRoaXMgY2FsbCB3YXMgbWFkZSB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24gKHdoaWNoIGlzIHRoZSBkZWZhdWx0IG1ldGhvZCBvZiBpbnZvY2F0aW9uIHdoZW4galF1ZXJ5L1plcHRvIGFyZSBub3QgYmVpbmcgdXNlZCksIGFuZCBpZlxyXG5cdFx0XHQgcHJvbWlzZSBzdXBwb3J0IHdhcyBkZXRlY3RlZCwgY3JlYXRlIGEgcHJvbWlzZSBvYmplY3QgZm9yIHRoaXMgY2FsbCBhbmQgc3RvcmUgcmVmZXJlbmNlcyB0byBpdHMgcmVzb2x2ZXIgYW5kIHJlamVjdGVyIG1ldGhvZHMuIFRoZSByZXNvbHZlXHJcblx0XHRcdCBtZXRob2QgaXMgdXNlZCB3aGVuIGEgY2FsbCBjb21wbGV0ZXMgbmF0dXJhbGx5IG9yIGlzIHByZW1hdHVyZWx5IHN0b3BwZWQgYnkgdGhlIHVzZXIuIEluIGJvdGggY2FzZXMsIGNvbXBsZXRlQ2FsbCgpIGhhbmRsZXMgdGhlIGFzc29jaWF0ZWRcclxuXHRcdFx0IGNhbGwgY2xlYW51cCBhbmQgcHJvbWlzZSByZXNvbHZpbmcgbG9naWMuIFRoZSByZWplY3QgbWV0aG9kIGlzIHVzZWQgd2hlbiBhbiBpbnZhbGlkIHNldCBvZiBhcmd1bWVudHMgaXMgcGFzc2VkIGludG8gYSBWZWxvY2l0eSBjYWxsLiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBWZWxvY2l0eSBlbXBsb3lzIGEgY2FsbC1iYXNlZCBxdWV1ZWluZyBhcmNoaXRlY3R1cmUsIHdoaWNoIG1lYW5zIHRoYXQgc3RvcHBpbmcgYW4gYW5pbWF0aW5nIGVsZW1lbnQgYWN0dWFsbHkgc3RvcHMgdGhlIGZ1bGwgY2FsbCB0aGF0XHJcblx0XHRcdCB0cmlnZ2VyZWQgaXQgLS0gbm90IHRoYXQgb25lIGVsZW1lbnQgZXhjbHVzaXZlbHkuIFNpbWlsYXJseSwgdGhlcmUgaXMgb25lIHByb21pc2UgcGVyIGNhbGwsIGFuZCBhbGwgZWxlbWVudHMgdGFyZ2V0ZWQgYnkgYSBWZWxvY2l0eSBjYWxsIGFyZVxyXG5cdFx0XHQgZ3JvdXBlZCB0b2dldGhlciBmb3IgdGhlIHB1cnBvc2VzIG9mIHJlc29sdmluZyBhbmQgcmVqZWN0aW5nIGEgcHJvbWlzZS4gKi9cclxuXHRcdFx0aWYgKGlzVXRpbGl0eSAmJiBWZWxvY2l0eS5Qcm9taXNlKSB7XHJcblx0XHRcdFx0cHJvbWlzZURhdGEucHJvbWlzZSA9IG5ldyBWZWxvY2l0eS5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIgPSByZXNvbHZlO1xyXG5cdFx0XHRcdFx0cHJvbWlzZURhdGEucmVqZWN0ZXIgPSByZWplY3Q7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzeW50YWN0aWNTdWdhcikge1xyXG5cdFx0XHRcdHByb3BlcnRpZXNNYXAgPSBhcmd1bWVudHNbMF0ucHJvcGVydGllcyB8fCBhcmd1bWVudHNbMF0ucDtcclxuXHRcdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzBdLm9wdGlvbnMgfHwgYXJndW1lbnRzWzBdLm87XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHJvcGVydGllc01hcCA9IGFyZ3VtZW50c1thcmd1bWVudEluZGV4XTtcclxuXHRcdFx0XHRvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50SW5kZXggKyAxXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxlbWVudHMgPSBzYW5pdGl6ZUVsZW1lbnRzKGVsZW1lbnRzKTtcclxuXHJcblx0XHRcdGlmICghZWxlbWVudHMpIHtcclxuXHRcdFx0XHRpZiAocHJvbWlzZURhdGEucHJvbWlzZSkge1xyXG5cdFx0XHRcdFx0aWYgKCFwcm9wZXJ0aWVzTWFwIHx8ICFvcHRpb25zIHx8IG9wdGlvbnMucHJvbWlzZVJlamVjdEVtcHR5ICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZWplY3RlcigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBUaGUgbGVuZ3RoIG9mIHRoZSBlbGVtZW50IHNldCAoaW4gdGhlIGZvcm0gb2YgYSBub2RlTGlzdCBvciBhbiBhcnJheSBvZiBlbGVtZW50cykgaXMgZGVmYXVsdGVkIHRvIDEgaW4gY2FzZSBhXHJcblx0XHRcdCBzaW5nbGUgcmF3IERPTSBlbGVtZW50IGlzIHBhc3NlZCBpbiAod2hpY2ggZG9lc24ndCBjb250YWluIGEgbGVuZ3RoIHByb3BlcnR5KS4gKi9cclxuXHRcdFx0dmFyIGVsZW1lbnRzTGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoLFxyXG5cdFx0XHRcdFx0ZWxlbWVudHNJbmRleCA9IDA7XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBBcmd1bWVudCBPdmVybG9hZGluZ1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogU3VwcG9ydCBpcyBpbmNsdWRlZCBmb3IgalF1ZXJ5J3MgYXJndW1lbnQgb3ZlcmxvYWRpbmc6ICQuYW5pbWF0ZShwcm9wZXJ0eU1hcCBbLCBkdXJhdGlvbl0gWywgZWFzaW5nXSBbLCBjb21wbGV0ZV0pLlxyXG5cdFx0XHQgT3ZlcmxvYWRpbmcgaXMgZGV0ZWN0ZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBhYnNlbmNlIG9mIGFuIG9iamVjdCBiZWluZyBwYXNzZWQgaW50byBvcHRpb25zLiAqL1xyXG5cdFx0XHQvKiBOb3RlOiBUaGUgc3RvcC9maW5pc2gvcGF1c2UvcmVzdW1lIGFjdGlvbnMgZG8gbm90IGFjY2VwdCBhbmltYXRpb24gb3B0aW9ucywgYW5kIGFyZSB0aGVyZWZvcmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLiAqL1xyXG5cdFx0XHRpZiAoIS9eKHN0b3B8ZmluaXNofGZpbmlzaEFsbHxwYXVzZXxyZXN1bWUpJC9pLnRlc3QocHJvcGVydGllc01hcCkgJiYgISQuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xyXG5cdFx0XHRcdC8qIFRoZSB1dGlsaXR5IGZ1bmN0aW9uIHNoaWZ0cyBhbGwgYXJndW1lbnRzIG9uZSBwb3NpdGlvbiB0byB0aGUgcmlnaHQsIHNvIHdlIGFkanVzdCBmb3IgdGhhdCBvZmZzZXQuICovXHJcblx0XHRcdFx0dmFyIHN0YXJ0aW5nQXJndW1lbnRQb3NpdGlvbiA9IGFyZ3VtZW50SW5kZXggKyAxO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zID0ge307XHJcblxyXG5cdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCBhbGwgb3B0aW9ucyBhcmd1bWVudHMgKi9cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gc3RhcnRpbmdBcmd1bWVudFBvc2l0aW9uOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHQvKiBUcmVhdCBhIG51bWJlciBhcyBhIGR1cmF0aW9uLiBQYXJzZSBpdCBvdXQuICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgZm9sbG93aW5nIFJlZ0V4IHdpbGwgcmV0dXJuIHRydWUgaWYgcGFzc2VkIGFuIGFycmF5IHdpdGggYSBudW1iZXIgYXMgaXRzIGZpcnN0IGl0ZW0uXHJcblx0XHRcdFx0XHQgVGh1cywgYXJyYXlzIGFyZSBza2lwcGVkIGZyb20gdGhpcyBjaGVjay4gKi9cclxuXHRcdFx0XHRcdGlmICghVHlwZS5pc0FycmF5KGFyZ3VtZW50c1tpXSkgJiYgKC9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW2ldKSB8fCAvXlxcZC8udGVzdChhcmd1bWVudHNbaV0pKSkge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zLmR1cmF0aW9uID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdFx0XHQvKiBUcmVhdCBzdHJpbmdzIGFuZCBhcnJheXMgYXMgZWFzaW5ncy4gKi9cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc1N0cmluZyhhcmd1bWVudHNbaV0pIHx8IFR5cGUuaXNBcnJheShhcmd1bWVudHNbaV0pKSB7XHJcblx0XHRcdFx0XHRcdG9wdGlvbnMuZWFzaW5nID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdFx0XHQvKiBUcmVhdCBhIGZ1bmN0aW9uIGFzIGEgY29tcGxldGUgY2FsbGJhY2suICovXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNGdW5jdGlvbihhcmd1bWVudHNbaV0pKSB7XHJcblx0XHRcdFx0XHRcdG9wdGlvbnMuY29tcGxldGUgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBBY3Rpb24gRGV0ZWN0aW9uXHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBWZWxvY2l0eSdzIGJlaGF2aW9yIGlzIGNhdGVnb3JpemVkIGludG8gXCJhY3Rpb25zXCI6IEVsZW1lbnRzIGNhbiBlaXRoZXIgYmUgc3BlY2lhbGx5IHNjcm9sbGVkIGludG8gdmlldyxcclxuXHRcdFx0IG9yIHRoZXkgY2FuIGJlIHN0YXJ0ZWQsIHN0b3BwZWQsIHBhdXNlZCwgcmVzdW1lZCwgb3IgcmV2ZXJzZWQgLiBJZiBhIGxpdGVyYWwgb3IgcmVmZXJlbmNlZCBwcm9wZXJ0aWVzIG1hcCBpcyBwYXNzZWQgaW4gYXMgVmVsb2NpdHknc1xyXG5cdFx0XHQgZmlyc3QgYXJndW1lbnQsIHRoZSBhc3NvY2lhdGVkIGFjdGlvbiBpcyBcInN0YXJ0XCIuIEFsdGVybmF0aXZlbHksIFwic2Nyb2xsXCIsIFwicmV2ZXJzZVwiLCBcInBhdXNlXCIsIFwicmVzdW1lXCIgb3IgXCJzdG9wXCIgY2FuIGJlIHBhc3NlZCBpbiBcclxuXHRcdFx0IGluc3RlYWQgb2YgYSBwcm9wZXJ0aWVzIG1hcC4gKi9cclxuXHRcdFx0dmFyIGFjdGlvbjtcclxuXHJcblx0XHRcdHN3aXRjaCAocHJvcGVydGllc01hcCkge1xyXG5cdFx0XHRcdGNhc2UgXCJzY3JvbGxcIjpcclxuXHRcdFx0XHRcdGFjdGlvbiA9IFwic2Nyb2xsXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcInJldmVyc2VcIjpcclxuXHRcdFx0XHRcdGFjdGlvbiA9IFwicmV2ZXJzZVwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJwYXVzZVwiOlxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgQWN0aW9uOiBQYXVzZVxyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcblx0XHRcdFx0XHQvKiBIYW5kbGUgZGVsYXkgdGltZXJzICovXHJcblx0XHRcdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cGF1c2VEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvKiBQYXVzZSBhbmQgUmVzdW1lIGFyZSBjYWxsLXdpZGUgKG5vdCBvbiBhIHBlciBlbGVtZW50IGJhc2lzKS4gVGh1cywgY2FsbGluZyBwYXVzZSBvciByZXN1bWUgb24gYSBcclxuXHRcdFx0XHRcdCBzaW5nbGUgZWxlbWVudCB3aWxsIGNhdXNlIGFueSBjYWxscyB0aGF0IGNvbnRhaW50IHR3ZWVucyBmb3IgdGhhdCBlbGVtZW50IHRvIGJlIHBhdXNlZC9yZXN1bWVkXHJcblx0XHRcdFx0XHQgYXMgd2VsbC4gKi9cclxuXHJcblx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggYWxsIGNhbGxzIGFuZCBwYXVzZSBhbnkgdGhhdCBjb250YWluIGFueSBvZiBvdXIgZWxlbWVudHMgKi9cclxuXHRcdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5jYWxscywgZnVuY3Rpb24oaSwgYWN0aXZlQ2FsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGZvdW5kID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdC8qIEluYWN0aXZlIGNhbGxzIGFyZSBzZXQgdG8gZmFsc2UgYnkgdGhlIGxvZ2ljIGluc2lkZSBjb21wbGV0ZUNhbGwoKS4gU2tpcCB0aGVtLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgYWN0aXZlIGNhbGwncyB0YXJnZXRlZCBlbGVtZW50cy4gKi9cclxuXHRcdFx0XHRcdFx0XHQkLmVhY2goYWN0aXZlQ2FsbFsxXSwgZnVuY3Rpb24oaywgYWN0aXZlRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHF1ZXVlTmFtZSA9IChvcHRpb25zID09PSB1bmRlZmluZWQpID8gXCJcIiA6IG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXVlTmFtZSAhPT0gdHJ1ZSAmJiAoYWN0aXZlQ2FsbFsyXS5xdWV1ZSAhPT0gcXVldWVOYW1lKSAmJiAhKG9wdGlvbnMgPT09IHVuZGVmaW5lZCAmJiBhY3RpdmVDYWxsWzJdLnF1ZXVlID09PSBmYWxzZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjYWxscyB0YXJnZXRlZCBieSB0aGUgc3RvcCBjb21tYW5kLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihsLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIENoZWNrIHRoYXQgdGhpcyBjYWxsIHdhcyBhcHBsaWVkIHRvIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU2V0IGNhbGwgdG8gcGF1c2VkICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFs1XSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VtZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBPbmNlIHdlIG1hdGNoIGFuIGVsZW1lbnQsIHdlIGNhbiBib3VuY2Ugb3V0IHRvIHRoZSBuZXh0IGNhbGwgZW50aXJlbHkgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBQcm9jZWVkIHRvIGNoZWNrIG5leHQgY2FsbCBpZiB3ZSBoYXZlIGFscmVhZHkgbWF0Y2hlZCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZvdW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdC8qIFNpbmNlIHBhdXNlIGNyZWF0ZXMgbm8gbmV3IHR3ZWVucywgZXhpdCBvdXQgb2YgVmVsb2NpdHkuICovXHJcblx0XHRcdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHJcblx0XHRcdFx0Y2FzZSBcInJlc3VtZVwiOlxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgQWN0aW9uOiBSZXN1bWVcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIEhhbmRsZSBkZWxheSB0aW1lcnMgKi9cclxuXHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bWVEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvKiBQYXVzZSBhbmQgUmVzdW1lIGFyZSBjYWxsLXdpZGUgKG5vdCBvbiBhIHBlciBlbGVtbnQgYmFzaXMpLiBUaHVzLCBjYWxsaW5nIHBhdXNlIG9yIHJlc3VtZSBvbiBhIFxyXG5cdFx0XHRcdFx0IHNpbmdsZSBlbGVtZW50IHdpbGwgY2F1c2UgYW55IGNhbGxzIHRoYXQgY29udGFpbnQgdHdlZW5zIGZvciB0aGF0IGVsZW1lbnQgdG8gYmUgcGF1c2VkL3Jlc3VtZWRcclxuXHRcdFx0XHRcdCBhcyB3ZWxsLiAqL1xyXG5cclxuXHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCBhbGwgY2FsbHMgYW5kIHBhdXNlIGFueSB0aGF0IGNvbnRhaW4gYW55IG9mIG91ciBlbGVtZW50cyAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmNhbGxzLCBmdW5jdGlvbihpLCBhY3RpdmVDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHQvKiBJbmFjdGl2ZSBjYWxscyBhcmUgc2V0IHRvIGZhbHNlIGJ5IHRoZSBsb2dpYyBpbnNpZGUgY29tcGxldGVDYWxsKCkuIFNraXAgdGhlbS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKGFjdGl2ZUNhbGwpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGFjdGl2ZSBjYWxsJ3MgdGFyZ2V0ZWQgZWxlbWVudHMuICovXHJcblx0XHRcdFx0XHRcdFx0JC5lYWNoKGFjdGl2ZUNhbGxbMV0sIGZ1bmN0aW9uKGssIGFjdGl2ZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBxdWV1ZU5hbWUgPSAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSA/IFwiXCIgOiBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHRydWUgJiYgKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgJiYgIShvcHRpb25zID09PSB1bmRlZmluZWQgJiYgYWN0aXZlQ2FsbFsyXS5xdWV1ZSA9PT0gZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFNraXAgYW55IGNhbGxzIHRoYXQgaGF2ZSBuZXZlciBiZWVuIHBhdXNlZCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFhY3RpdmVDYWxsWzVdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2FsbHMgdGFyZ2V0ZWQgYnkgdGhlIHN0b3AgY29tbWFuZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24obCwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHRoaXMgY2FsbCB3YXMgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEZsYWcgYSBwYXVzZSBvYmplY3QgdG8gYmUgcmVzdW1lZCwgd2hpY2ggd2lsbCBvY2N1ciBkdXJpbmcgdGhlIG5leHQgdGljay4gSW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgYWRkaXRpb24sIHRoZSBwYXVzZSBvYmplY3Qgd2lsbCBhdCB0aGF0IHRpbWUgYmUgZGVsZXRlZCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbNV0ucmVzdW1lID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogT25jZSB3ZSBtYXRjaCBhbiBlbGVtZW50LCB3ZSBjYW4gYm91bmNlIG91dCB0byB0aGUgbmV4dCBjYWxsIGVudGlyZWx5ICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm91bmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogUHJvY2VlZCB0byBjaGVjayBuZXh0IGNhbGwgaWYgd2UgaGF2ZSBhbHJlYWR5IG1hdGNoZWQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChmb3VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvKiBTaW5jZSByZXN1bWUgY3JlYXRlcyBubyBuZXcgdHdlZW5zLCBleGl0IG91dCBvZiBWZWxvY2l0eS4gKi9cclxuXHRcdFx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwiZmluaXNoXCI6XHJcblx0XHRcdFx0Y2FzZSBcImZpbmlzaEFsbFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJzdG9wXCI6XHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IEFjdGlvbjogU3RvcFxyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0LyogQ2xlYXIgdGhlIGN1cnJlbnRseS1hY3RpdmUgZGVsYXkgb24gZWFjaCB0YXJnZXRlZCBlbGVtZW50LiAqL1xyXG5cdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdGlmIChEYXRhKGVsZW1lbnQpICYmIERhdGEoZWxlbWVudCkuZGVsYXlUaW1lcikge1xyXG5cdFx0XHRcdFx0XHRcdC8qIFN0b3AgdGhlIHRpbWVyIGZyb20gdHJpZ2dlcmluZyBpdHMgY2FjaGVkIG5leHQoKSBmdW5jdGlvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoRGF0YShlbGVtZW50KS5kZWxheVRpbWVyLnNldFRpbWVvdXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBNYW51YWxseSBjYWxsIHRoZSBuZXh0KCkgZnVuY3Rpb24gc28gdGhhdCB0aGUgc3Vic2VxdWVudCBxdWV1ZSBpdGVtcyBjYW4gcHJvZ3Jlc3MuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkuZGVsYXlUaW1lci5uZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIubmV4dCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIERhdGEoZWxlbWVudCkuZGVsYXlUaW1lcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgd2Ugd2FudCB0byBmaW5pc2ggZXZlcnl0aGluZyBpbiB0aGUgcXVldWUsIHdlIGhhdmUgdG8gaXRlcmF0ZSB0aHJvdWdoIGl0XHJcblx0XHRcdFx0XHRcdCBhbmQgY2FsbCBlYWNoIGZ1bmN0aW9uLiBUaGlzIHdpbGwgbWFrZSB0aGVtIGFjdGl2ZSBjYWxscyBiZWxvdywgd2hpY2ggd2lsbFxyXG5cdFx0XHRcdFx0XHQgY2F1c2UgdGhlbSB0byBiZSBhcHBsaWVkIHZpYSB0aGUgZHVyYXRpb24gc2V0dGluZy4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnRpZXNNYXAgPT09IFwiZmluaXNoQWxsXCIgJiYgKG9wdGlvbnMgPT09IHRydWUgfHwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGl0ZW1zIGluIHRoZSBlbGVtZW50J3MgcXVldWUuICovXHJcblx0XHRcdFx0XHRcdFx0JC5lYWNoKCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiKSwgZnVuY3Rpb24oXywgaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogVGhlIHF1ZXVlIGFycmF5IGNhbiBjb250YWluIGFuIFwiaW5wcm9ncmVzc1wiIHN0cmluZywgd2hpY2ggd2Ugc2tpcC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzRnVuY3Rpb24oaXRlbSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBDbGVhcmluZyB0aGUgJC5xdWV1ZSgpIGFycmF5IGlzIGFjaGlldmVkIGJ5IHJlc2V0dGluZyBpdCB0byBbXS4gKi9cclxuXHRcdFx0XHRcdFx0XHQkLnF1ZXVlKGVsZW1lbnQsIFR5cGUuaXNTdHJpbmcob3B0aW9ucykgPyBvcHRpb25zIDogXCJcIiwgW10pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR2YXIgY2FsbHNUb1N0b3AgPSBbXTtcclxuXHJcblx0XHRcdFx0XHQvKiBXaGVuIHRoZSBzdG9wIGFjdGlvbiBpcyB0cmlnZ2VyZWQsIHRoZSBlbGVtZW50cycgY3VycmVudGx5IGFjdGl2ZSBjYWxsIGlzIGltbWVkaWF0ZWx5IHN0b3BwZWQuIFRoZSBhY3RpdmUgY2FsbCBtaWdodCBoYXZlXHJcblx0XHRcdFx0XHQgYmVlbiBhcHBsaWVkIHRvIG11bHRpcGxlIGVsZW1lbnRzLCBpbiB3aGljaCBjYXNlIGFsbCBvZiB0aGUgY2FsbCdzIGVsZW1lbnRzIHdpbGwgYmUgc3RvcHBlZC4gV2hlbiBhbiBlbGVtZW50XHJcblx0XHRcdFx0XHQgaXMgc3RvcHBlZCwgdGhlIG5leHQgaXRlbSBpbiBpdHMgYW5pbWF0aW9uIHF1ZXVlIGlzIGltbWVkaWF0ZWx5IHRyaWdnZXJlZC4gKi9cclxuXHRcdFx0XHRcdC8qIEFuIGFkZGl0aW9uYWwgYXJndW1lbnQgbWF5IGJlIHBhc3NlZCBpbiB0byBjbGVhciBhbiBlbGVtZW50J3MgcmVtYWluaW5nIHF1ZXVlZCBjYWxscy4gRWl0aGVyIHRydWUgKHdoaWNoIGRlZmF1bHRzIHRvIHRoZSBcImZ4XCIgcXVldWUpXHJcblx0XHRcdFx0XHQgb3IgYSBjdXN0b20gcXVldWUgc3RyaW5nIGNhbiBiZSBwYXNzZWQgaW4uICovXHJcblx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgc3RvcCBjb21tYW5kIHJ1bnMgcHJpb3IgdG8gVmVsb2NpdHkncyBRdWV1ZWluZyBwaGFzZSBzaW5jZSBpdHMgYmVoYXZpb3IgaXMgaW50ZW5kZWQgdG8gdGFrZSBlZmZlY3QgKmltbWVkaWF0ZWx5KixcclxuXHRcdFx0XHRcdCByZWdhcmRsZXNzIG9mIHRoZSBlbGVtZW50J3MgY3VycmVudCBxdWV1ZSBzdGF0ZS4gKi9cclxuXHJcblx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggZXZlcnkgYWN0aXZlIGNhbGwuICovXHJcblx0XHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcclxuXHRcdFx0XHRcdFx0LyogSW5hY3RpdmUgY2FsbHMgYXJlIHNldCB0byBmYWxzZSBieSB0aGUgbG9naWMgaW5zaWRlIGNvbXBsZXRlQ2FsbCgpLiBTa2lwIHRoZW0uICovXHJcblx0XHRcdFx0XHRcdGlmIChhY3RpdmVDYWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBhY3RpdmUgY2FsbCdzIHRhcmdldGVkIGVsZW1lbnRzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChhY3RpdmVDYWxsWzFdLCBmdW5jdGlvbihrLCBhY3RpdmVFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0cnVlIHdhcyBwYXNzZWQgaW4gYXMgYSBzZWNvbmRhcnkgYXJndW1lbnQsIGNsZWFyIGFic29sdXRlbHkgYWxsIGNhbGxzIG9uIHRoaXMgZWxlbWVudC4gT3RoZXJ3aXNlLCBvbmx5XHJcblx0XHRcdFx0XHRcdFx0XHQgY2xlYXIgY2FsbHMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWxldmFudCBxdWV1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8qIENhbGwgc3RvcHBpbmcgbG9naWMgd29ya3MgYXMgZm9sbG93czpcclxuXHRcdFx0XHRcdFx0XHRcdCAtIG9wdGlvbnMgPT09IHRydWUgLS0+IHN0b3AgY3VycmVudCBkZWZhdWx0IHF1ZXVlIGNhbGxzIChhbmQgcXVldWU6ZmFsc2UgY2FsbHMpLCBpbmNsdWRpbmcgcmVtYWluaW5nIHF1ZXVlZCBvbmVzLlxyXG5cdFx0XHRcdFx0XHRcdFx0IC0gb3B0aW9ucyA9PT0gdW5kZWZpbmVkIC0tPiBzdG9wIGN1cnJlbnQgcXVldWU6XCJcIiBjYWxsIGFuZCBhbGwgcXVldWU6ZmFsc2UgY2FsbHMuXHJcblx0XHRcdFx0XHRcdFx0XHQgLSBvcHRpb25zID09PSBmYWxzZSAtLT4gc3RvcCBvbmx5IHF1ZXVlOmZhbHNlIGNhbGxzLlxyXG5cdFx0XHRcdFx0XHRcdFx0IC0gb3B0aW9ucyA9PT0gXCJjdXN0b21cIiAtLT4gc3RvcCBjdXJyZW50IHF1ZXVlOlwiY3VzdG9tXCIgY2FsbCwgaW5jbHVkaW5nIHJlbWFpbmluZyBxdWV1ZWQgb25lcyAodGhlcmUgaXMgbm8gZnVuY3Rpb25hbGl0eSB0byBvbmx5IGNsZWFyIHRoZSBjdXJyZW50bHktcnVubmluZyBxdWV1ZTpcImN1c3RvbVwiIGNhbGwpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHF1ZXVlTmFtZSA9IChvcHRpb25zID09PSB1bmRlZmluZWQpID8gXCJcIiA6IG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXVlTmFtZSAhPT0gdHJ1ZSAmJiAoYWN0aXZlQ2FsbFsyXS5xdWV1ZSAhPT0gcXVldWVOYW1lKSAmJiAhKG9wdGlvbnMgPT09IHVuZGVmaW5lZCAmJiBhY3RpdmVDYWxsWzJdLnF1ZXVlID09PSBmYWxzZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjYWxscyB0YXJnZXRlZCBieSB0aGUgc3RvcCBjb21tYW5kLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihsLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIENoZWNrIHRoYXQgdGhpcyBjYWxsIHdhcyBhcHBsaWVkIHRvIHRoZSB0YXJnZXQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBPcHRpb25hbGx5IGNsZWFyIHRoZSByZW1haW5pbmcgcXVldWVkIGNhbGxzLiBJZiB3ZSdyZSBkb2luZyBcImZpbmlzaEFsbFwiIHRoaXMgd29uJ3QgZmluZCBhbnl0aGluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgZHVlIHRvIHRoZSBxdWV1ZS1jbGVhcmluZyBhYm92ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucyA9PT0gdHJ1ZSB8fCBUeXBlLmlzU3RyaW5nKG9wdGlvbnMpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGl0ZW1zIGluIHRoZSBlbGVtZW50J3MgcXVldWUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkLmVhY2goJC5xdWV1ZShlbGVtZW50LCBUeXBlLmlzU3RyaW5nKG9wdGlvbnMpID8gb3B0aW9ucyA6IFwiXCIpLCBmdW5jdGlvbihfLCBpdGVtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBxdWV1ZSBhcnJheSBjYW4gY29udGFpbiBhbiBcImlucHJvZ3Jlc3NcIiBzdHJpbmcsIHdoaWNoIHdlIHNraXAuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzRnVuY3Rpb24oaXRlbSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBQYXNzIHRoZSBpdGVtJ3MgY2FsbGJhY2sgYSBmbGFnIGluZGljYXRpbmcgdGhhdCB3ZSB3YW50IHRvIGFib3J0IGZyb20gdGhlIHF1ZXVlIGNhbGwuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IChTcGVjaWZpY2FsbHksIHRoZSBxdWV1ZSB3aWxsIHJlc29sdmUgdGhlIGNhbGwncyBhc3NvY2lhdGVkIHByb21pc2UgdGhlbiBhYm9ydC4pICAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0obnVsbCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIENsZWFyaW5nIHRoZSAkLnF1ZXVlKCkgYXJyYXkgaXMgYWNoaWV2ZWQgYnkgcmVzZXR0aW5nIGl0IHRvIFtdLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JC5xdWV1ZShlbGVtZW50LCBUeXBlLmlzU3RyaW5nKG9wdGlvbnMpID8gb3B0aW9ucyA6IFwiXCIsIFtdKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0aWVzTWFwID09PSBcInN0b3BcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU2luY2UgXCJyZXZlcnNlXCIgdXNlcyBjYWNoZWQgc3RhcnQgdmFsdWVzICh0aGUgcHJldmlvdXMgY2FsbCdzIGVuZFZhbHVlcyksIHRoZXNlIHZhbHVlcyBtdXN0IGJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY2hhbmdlZCB0byByZWZsZWN0IHRoZSBmaW5hbCB2YWx1ZSB0aGF0IHRoZSBlbGVtZW50cyB3ZXJlIGFjdHVhbGx5IHR3ZWVuZWQgdG8uICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBJZiBvbmx5IHF1ZXVlOmZhbHNlL3F1ZXVlOlwiY3VzdG9tXCIgYW5pbWF0aW9ucyBhcmUgY3VycmVudGx5IHJ1bm5pbmcgb24gYW4gZWxlbWVudCwgaXQgd29uJ3QgaGF2ZSBhIHR3ZWVuc0NvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9iamVjdC4gQWxzbywgcXVldWU6ZmFsc2UvcXVldWU6XCJjdXN0b21cIiBhbmltYXRpb25zIGNhbid0IGJlIHJldmVyc2VkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS50d2VlbnNDb250YWluZXIgJiYgKHF1ZXVlTmFtZSA9PT0gdHJ1ZSB8fCBxdWV1ZU5hbWUgPT09IFwiXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQuZWFjaChkYXRhLnR3ZWVuc0NvbnRhaW5lciwgZnVuY3Rpb24obSwgYWN0aXZlVHdlZW4pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVUd2Vlbi5lbmRWYWx1ZSA9IGFjdGl2ZVR3ZWVuLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FsbHNUb1N0b3AucHVzaChpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnRpZXNNYXAgPT09IFwiZmluaXNoXCIgfHwgcHJvcGVydGllc01hcCA9PT0gXCJmaW5pc2hBbGxcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogVG8gZ2V0IGFjdGl2ZSB0d2VlbnMgdG8gZmluaXNoIGltbWVkaWF0ZWx5LCB3ZSBmb3JjZWZ1bGx5IHNob3J0ZW4gdGhlaXIgZHVyYXRpb25zIHRvIDFtcyBzbyB0aGF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdGhleSBmaW5pc2ggdXBvbiB0aGUgbmV4dCByQWYgdGljayB0aGVuIHByb2NlZWQgd2l0aCBub3JtYWwgY2FsbCBjb21wbGV0aW9uIGxvZ2ljLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFsyXS5kdXJhdGlvbiA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0LyogUHJlbWF0dXJlbHkgY2FsbCBjb21wbGV0ZUNhbGwoKSBvbiBlYWNoIG1hdGNoZWQgYWN0aXZlIGNhbGwuIFBhc3MgYW4gYWRkaXRpb25hbCBmbGFnIGZvciBcInN0b3BcIiB0byBpbmRpY2F0ZVxyXG5cdFx0XHRcdFx0IHRoYXQgdGhlIGNvbXBsZXRlIGNhbGxiYWNrIGFuZCBkaXNwbGF5Om5vbmUgc2V0dGluZyBzaG91bGQgYmUgc2tpcHBlZCBzaW5jZSB3ZSdyZSBjb21wbGV0aW5nIHByZW1hdHVyZWx5LiAqL1xyXG5cdFx0XHRcdFx0aWYgKHByb3BlcnRpZXNNYXAgPT09IFwic3RvcFwiKSB7XHJcblx0XHRcdFx0XHRcdCQuZWFjaChjYWxsc1RvU3RvcCwgZnVuY3Rpb24oaSwgaikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlQ2FsbChqLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocHJvbWlzZURhdGEucHJvbWlzZSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIEltbWVkaWF0ZWx5IHJlc29sdmUgdGhlIHByb21pc2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc3RvcCBjYWxsIHNpbmNlIHN0b3AgcnVucyBzeW5jaHJvbm91c2x5LiAqL1xyXG5cdFx0XHRcdFx0XHRcdHByb21pc2VEYXRhLnJlc29sdmVyKGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIFNpbmNlIHdlJ3JlIHN0b3BwaW5nLCBhbmQgbm90IHByb2NlZWRpbmcgd2l0aCBxdWV1ZWluZywgZXhpdCBvdXQgb2YgVmVsb2NpdHkuICovXHJcblx0XHRcdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdC8qIFRyZWF0IGEgbm9uLWVtcHR5IHBsYWluIG9iamVjdCBhcyBhIGxpdGVyYWwgcHJvcGVydGllcyBtYXAuICovXHJcblx0XHRcdFx0XHRpZiAoJC5pc1BsYWluT2JqZWN0KHByb3BlcnRpZXNNYXApICYmICFUeXBlLmlzRW1wdHlPYmplY3QocHJvcGVydGllc01hcCkpIHtcclxuXHRcdFx0XHRcdFx0YWN0aW9uID0gXCJzdGFydFwiO1xyXG5cclxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IFJlZGlyZWN0c1xyXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIENoZWNrIGlmIGEgc3RyaW5nIG1hdGNoZXMgYSByZWdpc3RlcmVkIHJlZGlyZWN0IChzZWUgUmVkaXJlY3RzIGFib3ZlKS4gKi9cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc1N0cmluZyhwcm9wZXJ0aWVzTWFwKSAmJiBWZWxvY2l0eS5SZWRpcmVjdHNbcHJvcGVydGllc01hcF0pIHtcclxuXHRcdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBkdXJhdGlvbk9yaWdpbmFsID0gb3B0cy5kdXJhdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdGRlbGF5T3JpZ2luYWwgPSBvcHRzLmRlbGF5IHx8IDA7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgYmFja3dhcmRzIG9wdGlvbiB3YXMgcGFzc2VkIGluLCByZXZlcnNlIHRoZSBlbGVtZW50IHNldCBzbyB0aGF0IGVsZW1lbnRzIGFuaW1hdGUgZnJvbSB0aGUgbGFzdCB0byB0aGUgZmlyc3QuICovXHJcblx0XHRcdFx0XHRcdGlmIChvcHRzLmJhY2t3YXJkcyA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRzID0gJC5leHRlbmQodHJ1ZSwgW10sIGVsZW1lbnRzKS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIEluZGl2aWR1YWxseSB0cmlnZ2VyIHRoZSByZWRpcmVjdCBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQgdG8gcHJldmVudCB1c2VycyBmcm9tIGhhdmluZyB0byBoYW5kbGUgaXRlcmF0aW9uIGxvZ2ljIGluIHRoZWlyIHJlZGlyZWN0LiAqL1xyXG5cdFx0XHRcdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGVsZW1lbnRJbmRleCwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBzdGFnZ2VyIG9wdGlvbiB3YXMgcGFzc2VkIGluLCBzdWNjZXNzaXZlbHkgZGVsYXkgZWFjaCBlbGVtZW50IGJ5IHRoZSBzdGFnZ2VyIHZhbHVlIChpbiBtcykuIFJldGFpbiB0aGUgb3JpZ2luYWwgZGVsYXkgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQob3B0cy5zdGFnZ2VyKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5kZWxheSA9IGRlbGF5T3JpZ2luYWwgKyAocGFyc2VGbG9hdChvcHRzLnN0YWdnZXIpICogZWxlbWVudEluZGV4KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNGdW5jdGlvbihvcHRzLnN0YWdnZXIpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRzLmRlbGF5ID0gZGVsYXlPcmlnaW5hbCArIG9wdHMuc3RhZ2dlci5jYWxsKGVsZW1lbnQsIGVsZW1lbnRJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGRyYWcgb3B0aW9uIHdhcyBwYXNzZWQgaW4sIHN1Y2Nlc3NpdmVseSBpbmNyZWFzZS9kZWNyZWFzZSAoZGVwZW5kaW5nIG9uIHRoZSBwcmVzZW5zZSBvZiBvcHRzLmJhY2t3YXJkcylcclxuXHRcdFx0XHRcdFx0XHQgdGhlIGR1cmF0aW9uIG9mIGVhY2ggZWxlbWVudCdzIGFuaW1hdGlvbiwgdXNpbmcgZmxvb3JzIHRvIHByZXZlbnQgcHJvZHVjaW5nIHZlcnkgc2hvcnQgZHVyYXRpb25zLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvcHRzLmRyYWcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIERlZmF1bHQgdGhlIGR1cmF0aW9uIG9mIFVJIHBhY2sgZWZmZWN0cyAoY2FsbG91dHMgYW5kIHRyYW5zaXRpb25zKSB0byAxMDAwbXMgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZGVmYXVsdCBkdXJhdGlvbiBvZiA0MDBtcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBwYXJzZUZsb2F0KGR1cmF0aW9uT3JpZ2luYWwpIHx8ICgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHByb3BlcnRpZXNNYXApID8gMTAwMCA6IERVUkFUSU9OX0RFRkFVTFQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIEZvciBlYWNoIGVsZW1lbnQsIHRha2UgdGhlIGdyZWF0ZXIgZHVyYXRpb24gb2Y6IEEpIGFuaW1hdGlvbiBjb21wbGV0aW9uIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIG9yaWdpbmFsIGR1cmF0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0IEIpIDc1JSBvZiB0aGUgb3JpZ2luYWwgZHVyYXRpb24sIG9yIEMpIGEgMjAwbXMgZmFsbGJhY2sgKGluIGNhc2UgZHVyYXRpb24gaXMgYWxyZWFkeSBzZXQgdG8gYSBsb3cgdmFsdWUpLlxyXG5cdFx0XHRcdFx0XHRcdFx0IFRoZSBlbmQgcmVzdWx0IGlzIGEgYmFzZWxpbmUgb2YgNzUlIG9mIHRoZSByZWRpcmVjdCdzIGR1cmF0aW9uIHRoYXQgaW5jcmVhc2VzL2RlY3JlYXNlcyBhcyB0aGUgZW5kIG9mIHRoZSBlbGVtZW50IHNldCBpcyBhcHByb2FjaGVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IE1hdGgubWF4KG9wdHMuZHVyYXRpb24gKiAob3B0cy5iYWNrd2FyZHMgPyAxIC0gZWxlbWVudEluZGV4IC8gZWxlbWVudHNMZW5ndGggOiAoZWxlbWVudEluZGV4ICsgMSkgLyBlbGVtZW50c0xlbmd0aCksIG9wdHMuZHVyYXRpb24gKiAwLjc1LCAyMDApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogUGFzcyBpbiB0aGUgY2FsbCdzIG9wdHMgb2JqZWN0IHNvIHRoYXQgdGhlIHJlZGlyZWN0IGNhbiBvcHRpb25hbGx5IGV4dGVuZCBpdC4gSXQgZGVmYXVsdHMgdG8gYW4gZW1wdHkgb2JqZWN0IGluc3RlYWQgb2YgbnVsbCB0b1xyXG5cdFx0XHRcdFx0XHRcdCByZWR1Y2UgdGhlIG9wdHMgY2hlY2tpbmcgbG9naWMgcmVxdWlyZWQgaW5zaWRlIHRoZSByZWRpcmVjdC4gKi9cclxuXHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5SZWRpcmVjdHNbcHJvcGVydGllc01hcF0uY2FsbChlbGVtZW50LCBlbGVtZW50LCBvcHRzIHx8IHt9LCBlbGVtZW50SW5kZXgsIGVsZW1lbnRzTGVuZ3RoLCBlbGVtZW50cywgcHJvbWlzZURhdGEucHJvbWlzZSA/IHByb21pc2VEYXRhIDogdW5kZWZpbmVkKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBTaW5jZSB0aGUgYW5pbWF0aW9uIGxvZ2ljIHJlc2lkZXMgd2l0aGluIHRoZSByZWRpcmVjdCdzIG93biBjb2RlLCBhYm9ydCB0aGUgcmVtYWluZGVyIG9mIHRoaXMgY2FsbC5cclxuXHRcdFx0XHRcdFx0IChUaGUgcGVyZm9ybWFuY2Ugb3ZlcmhlYWQgdXAgdG8gdGhpcyBwb2ludCBpcyB2aXJ0dWFsbHkgbm9uLWV4aXN0YW50LikgKi9cclxuXHRcdFx0XHRcdFx0LyogTm90ZTogVGhlIGpRdWVyeSBjYWxsIGNoYWluIGlzIGtlcHQgaW50YWN0IGJ5IHJldHVybmluZyB0aGUgY29tcGxldGUgZWxlbWVudCBzZXQuICovXHJcblx0XHRcdFx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBcIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIgKyBwcm9wZXJ0aWVzTWFwICsgXCIpIHdhcyBub3QgYSBwcm9wZXJ0eSBtYXAsIGEga25vd24gYWN0aW9uLCBvciBhIHJlZ2lzdGVyZWQgcmVkaXJlY3QuIEFib3J0aW5nLlwiO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZWplY3RlcihuZXcgRXJyb3IoYWJvcnRFcnJvcikpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYWJvcnRFcnJvcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IENhbGwtV2lkZSBWYXJpYWJsZXNcclxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogQSBjb250YWluZXIgZm9yIENTUyB1bml0IGNvbnZlcnNpb24gcmF0aW9zIChlLmcuICUsIHJlbSwgYW5kIGVtID09PiBweCkgdGhhdCBpcyB1c2VkIHRvIGNhY2hlIHJhdGlvcyBhY3Jvc3MgYWxsIGVsZW1lbnRzXHJcblx0XHRcdCBiZWluZyBhbmltYXRlZCBpbiBhIHNpbmdsZSBWZWxvY2l0eSBjYWxsLiBDYWxjdWxhdGluZyB1bml0IHJhdGlvcyBuZWNlc3NpdGF0ZXMgRE9NIHF1ZXJ5aW5nIGFuZCB1cGRhdGluZywgYW5kIGlzIHRoZXJlZm9yZVxyXG5cdFx0XHQgYXZvaWRlZCAodmlhIGNhY2hpbmcpIHdoZXJldmVyIHBvc3NpYmxlLiBUaGlzIGNvbnRhaW5lciBpcyBjYWxsLXdpZGUgaW5zdGVhZCBvZiBwYWdlLXdpZGUgdG8gYXZvaWQgdGhlIHJpc2sgb2YgdXNpbmcgc3RhbGVcclxuXHRcdFx0IGNvbnZlcnNpb24gbWV0cmljcyBhY3Jvc3MgVmVsb2NpdHkgYW5pbWF0aW9ucyB0aGF0IGFyZSBub3QgaW1tZWRpYXRlbHkgY29uc2VjdXRpdmVseSBjaGFpbmVkLiAqL1xyXG5cdFx0XHR2YXIgY2FsbFVuaXRDb252ZXJzaW9uRGF0YSA9IHtcclxuXHRcdFx0XHRsYXN0UGFyZW50OiBudWxsLFxyXG5cdFx0XHRcdGxhc3RQb3NpdGlvbjogbnVsbCxcclxuXHRcdFx0XHRsYXN0Rm9udFNpemU6IG51bGwsXHJcblx0XHRcdFx0bGFzdFBlcmNlbnRUb1B4V2lkdGg6IG51bGwsXHJcblx0XHRcdFx0bGFzdFBlcmNlbnRUb1B4SGVpZ2h0OiBudWxsLFxyXG5cdFx0XHRcdGxhc3RFbVRvUHg6IG51bGwsXHJcblx0XHRcdFx0cmVtVG9QeDogbnVsbCxcclxuXHRcdFx0XHR2d1RvUHg6IG51bGwsXHJcblx0XHRcdFx0dmhUb1B4OiBudWxsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBlbnN1aW5nIHR3ZWVuIGRhdGEgYW5kIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNhbGwuIFRoaXMgY29udGFpbmVyIGdldHMgcHVzaGVkIHRvIHRoZSBwYWdlLXdpZGVcclxuXHRcdFx0IFZlbG9jaXR5LlN0YXRlLmNhbGxzIGFycmF5IHRoYXQgaXMgcHJvY2Vzc2VkIGR1cmluZyBhbmltYXRpb24gdGlja2luZy4gKi9cclxuXHRcdFx0dmFyIGNhbGwgPSBbXTtcclxuXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IEVsZW1lbnQgUHJvY2Vzc2luZ1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogRWxlbWVudCBwcm9jZXNzaW5nIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIC0tIGRhdGEgcHJvY2Vzc2luZyB0aGF0IGNhbm5vdCBnbyBzdGFsZSBhbmQgZGF0YSBwcm9jZXNzaW5nIHRoYXQgKmNhbiogZ28gc3RhbGUgKGkuZS4gdGhpcmQtcGFydHkgc3R5bGUgbW9kaWZpY2F0aW9ucyk6XHJcblx0XHRcdCAxKSBQcmUtUXVldWVpbmc6IEVsZW1lbnQtd2lkZSB2YXJpYWJsZXMsIGluY2x1ZGluZyB0aGUgZWxlbWVudCdzIGRhdGEgc3RvcmFnZSwgYXJlIGluc3RhbnRpYXRlZC4gQ2FsbCBvcHRpb25zIGFyZSBwcmVwYXJlZC4gSWYgdHJpZ2dlcmVkLCB0aGUgU3RvcCBhY3Rpb24gaXMgZXhlY3V0ZWQuXHJcblx0XHRcdCAyKSBRdWV1ZWluZzogVGhlIGxvZ2ljIHRoYXQgcnVucyBvbmNlIHRoaXMgY2FsbCBoYXMgcmVhY2hlZCBpdHMgcG9pbnQgb2YgZXhlY3V0aW9uIGluIHRoZSBlbGVtZW50J3MgJC5xdWV1ZSgpIHN0YWNrLiBNb3N0IGxvZ2ljIGlzIHBsYWNlZCBoZXJlIHRvIGF2b2lkIHJpc2tpbmcgaXQgYmVjb21pbmcgc3RhbGUuXHJcblx0XHRcdCAzKSBQdXNoaW5nOiBDb25zb2xpZGF0aW9uIG9mIHRoZSB0d2VlbiBkYXRhIGZvbGxvd2VkIGJ5IGl0cyBwdXNoIG9udG8gdGhlIGdsb2JhbCBpbi1wcm9ncmVzcyBjYWxscyBjb250YWluZXIuXHJcblx0XHRcdCBgZWxlbWVudEFycmF5SW5kZXhgIGFsbG93cyBwYXNzaW5nIGluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBhcnJheSB0byB2YWx1ZSBmdW5jdGlvbnMuXHJcblx0XHRcdCBJZiBgZWxlbWVudHNJbmRleGAgd2VyZSB1c2VkIGluc3RlYWQgdGhlIGluZGV4IHdvdWxkIGJlIGRldGVybWluZWQgYnkgdGhlIGVsZW1lbnRzJyBwZXItZWxlbWVudCBxdWV1ZS5cclxuXHRcdFx0ICovXHJcblx0XHRcdGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnRBcnJheUluZGV4KSB7XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IFBhcnQgSTogUHJlLVF1ZXVlaW5nXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHQgRWxlbWVudC1XaWRlIFZhcmlhYmxlc1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdHZhciAvKiBUaGUgcnVudGltZSBvcHRzIG9iamVjdCBpcyB0aGUgZXh0ZW5zaW9uIG9mIHRoZSBjdXJyZW50IGNhbGwncyBvcHRpb25zIGFuZCBWZWxvY2l0eSdzIHBhZ2Utd2lkZSBvcHRpb24gZGVmYXVsdHMuICovXHJcblx0XHRcdFx0XHRcdG9wdHMgPSAkLmV4dGVuZCh7fSwgVmVsb2NpdHkuZGVmYXVsdHMsIG9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHQvKiBBIGNvbnRhaW5lciBmb3IgdGhlIHByb2Nlc3NlZCBkYXRhIGFzc29jaWF0ZWQgd2l0aCBlYWNoIHByb3BlcnR5IGluIHRoZSBwcm9wZXJ0eU1hcC5cclxuXHRcdFx0XHRcdFx0IChFYWNoIHByb3BlcnR5IGluIHRoZSBtYXAgcHJvZHVjZXMgaXRzIG93biBcInR3ZWVuXCIuKSAqL1xyXG5cdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIgPSB7fSxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YTtcclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBFbGVtZW50IEluaXRcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRWZWxvY2l0eS5pbml0KGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IERlbGF5XHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogU2luY2UgcXVldWU6ZmFsc2UgZG9lc24ndCByZXNwZWN0IHRoZSBpdGVtJ3MgZXhpc3RpbmcgcXVldWUsIHdlIGF2b2lkIGluamVjdGluZyBpdHMgZGVsYXkgaGVyZSAoaXQncyBzZXQgbGF0ZXIgb24pLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IFZlbG9jaXR5IHJvbGxzIGl0cyBvd24gZGVsYXkgZnVuY3Rpb24gc2luY2UgalF1ZXJ5IGRvZXNuJ3QgaGF2ZSBhIHV0aWxpdHkgYWxpYXMgZm9yICQuZm4uZGVsYXkoKVxyXG5cdFx0XHRcdCAoYW5kIHRodXMgcmVxdWlyZXMgalF1ZXJ5IGVsZW1lbnQgY3JlYXRpb24sIHdoaWNoIHdlIGF2b2lkIHNpbmNlIGl0cyBvdmVyaGVhZCBpbmNsdWRlcyBET00gcXVlcnlpbmcpLiAqL1xyXG5cdFx0XHRcdGlmIChwYXJzZUZsb2F0KG9wdHMuZGVsYXkpICYmIG9wdHMucXVldWUgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQkLnF1ZXVlKGVsZW1lbnQsIG9wdHMucXVldWUsIGZ1bmN0aW9uKG5leHQsIGNsZWFyUXVldWUpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNsZWFyUXVldWUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBEbyBub3QgY29udGludWUgd2l0aCBhbmltYXRpb24gcXVldWVpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIFRoaXMgaXMgYSBmbGFnIHVzZWQgdG8gaW5kaWNhdGUgdG8gdGhlIHVwY29taW5nIGNvbXBsZXRlQ2FsbCgpIGZ1bmN0aW9uIHRoYXQgdGhpcyBxdWV1ZSBlbnRyeSB3YXMgaW5pdGlhdGVkIGJ5IFZlbG9jaXR5LiBTZWUgY29tcGxldGVDYWxsKCkgZm9yIGZ1cnRoZXIgZGV0YWlscy4gKi9cclxuXHRcdFx0XHRcdFx0VmVsb2NpdHkudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUaGUgZW5zdWluZyBxdWV1ZSBpdGVtICh3aGljaCBpcyBhc3NpZ25lZCB0byB0aGUgXCJuZXh0XCIgYXJndW1lbnQgdGhhdCAkLnF1ZXVlKCkgYXV0b21hdGljYWxseSBwYXNzZXMgaW4pIHdpbGwgYmUgdHJpZ2dlcmVkIGFmdGVyIGEgc2V0VGltZW91dCBkZWxheS5cclxuXHRcdFx0XHRcdFx0IFRoZSBzZXRUaW1lb3V0IGlzIHN0b3JlZCBzbyB0aGF0IGl0IGNhbiBiZSBzdWJqZWN0ZWQgdG8gY2xlYXJUaW1lb3V0KCkgaWYgdGhpcyBhbmltYXRpb24gaXMgcHJlbWF0dXJlbHkgc3RvcHBlZCB2aWEgVmVsb2NpdHkncyBcInN0b3BcIiBjb21tYW5kLCBhbmRcclxuXHRcdFx0XHRcdFx0IGRlbGF5QmVnaW4vZGVsYXlUaW1lIGlzIHVzZWQgdG8gZW5zdXJlIHdlIGNhbiBcInBhdXNlXCIgYW5kIFwicmVzdW1lXCIgYSB0d2VlbiB0aGF0IGlzIHN0aWxsIG1pZC1kZWxheS4gKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIFRlbXBvcmFyaWx5IHN0b3JlIGRlbGF5ZWQgZWxlbWVudHMgdG8gZmFjaWxpdGUgYWNjZXNzIGZvciBnbG9iYWwgcGF1c2UvcmVzdW1lICovXHJcblx0XHRcdFx0XHRcdHZhciBjYWxsSW5kZXggPSBWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHMuY291bnQrKztcclxuXHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2NhbGxJbmRleF0gPSBlbGVtZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGRlbGF5Q29tcGxldGUgPSAoZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBDbGVhciB0aGUgdGVtcG9yYXJ5IGVsZW1lbnQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50c1tpbmRleF0gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBGaW5hbGx5LCBpc3N1ZSB0aGUgY2FsbCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV4dCgpO1xyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdH0pKGNhbGxJbmRleCk7XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheUJlZ2luID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheSA9IHBhcnNlRmxvYXQob3B0cy5kZWxheSk7XHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlUaW1lciA9IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0OiBzZXRUaW1lb3V0KG5leHQsIHBhcnNlRmxvYXQob3B0cy5kZWxheSkpLFxyXG5cdFx0XHRcdFx0XHRcdG5leHQ6IGRlbGF5Q29tcGxldGVcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IER1cmF0aW9uXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogU3VwcG9ydCBmb3IgalF1ZXJ5J3MgbmFtZWQgZHVyYXRpb25zLiAqL1xyXG5cdFx0XHRcdHN3aXRjaCAob3B0cy5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCJmYXN0XCI6XHJcblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSAyMDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCJub3JtYWxcIjpcclxuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IERVUkFUSU9OX0RFRkFVTFQ7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCJzbG93XCI6XHJcblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSA2MDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdC8qIFJlbW92ZSB0aGUgcG90ZW50aWFsIFwibXNcIiBzdWZmaXggYW5kIGRlZmF1bHQgdG8gMSBpZiB0aGUgdXNlciBpcyBhdHRlbXB0aW5nIHRvIHNldCBhIGR1cmF0aW9uIG9mIDAgKGluIG9yZGVyIHRvIHByb2R1Y2UgYW4gaW1tZWRpYXRlIHN0eWxlIGNoYW5nZSkuICovXHJcblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBwYXJzZUZsb2F0KG9wdHMuZHVyYXRpb24pIHx8IDE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IEdsb2JhbCBPcHRpb246IE1vY2tcclxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRpZiAoVmVsb2NpdHkubW9jayAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdC8qIEluIG1vY2sgbW9kZSwgYWxsIGFuaW1hdGlvbnMgYXJlIGZvcmNlZCB0byAxbXMgc28gdGhhdCB0aGV5IG9jY3VyIGltbWVkaWF0ZWx5IHVwb24gdGhlIG5leHQgckFGIHRpY2suXHJcblx0XHRcdFx0XHQgQWx0ZXJuYXRpdmVseSwgYSBtdWx0aXBsaWVyIGNhbiBiZSBwYXNzZWQgaW4gdG8gdGltZSByZW1hcCBhbGwgZGVsYXlzIGFuZCBkdXJhdGlvbnMuICovXHJcblx0XHRcdFx0XHRpZiAoVmVsb2NpdHkubW9jayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gb3B0cy5kZWxheSA9IDE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uICo9IHBhcnNlRmxvYXQoVmVsb2NpdHkubW9jaykgfHwgMTtcclxuXHRcdFx0XHRcdFx0b3B0cy5kZWxheSAqPSBwYXJzZUZsb2F0KFZlbG9jaXR5Lm1vY2spIHx8IDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IEVhc2luZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRvcHRzLmVhc2luZyA9IGdldEVhc2luZyhvcHRzLmVhc2luZywgb3B0cy5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IE9wdGlvbjogQ2FsbGJhY2tzXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIENhbGxiYWNrcyBtdXN0IGZ1bmN0aW9ucy4gT3RoZXJ3aXNlLCBkZWZhdWx0IHRvIG51bGwuICovXHJcblx0XHRcdFx0aWYgKG9wdHMuYmVnaW4gJiYgIVR5cGUuaXNGdW5jdGlvbihvcHRzLmJlZ2luKSkge1xyXG5cdFx0XHRcdFx0b3B0cy5iZWdpbiA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAob3B0cy5wcm9ncmVzcyAmJiAhVHlwZS5pc0Z1bmN0aW9uKG9wdHMucHJvZ3Jlc3MpKSB7XHJcblx0XHRcdFx0XHRvcHRzLnByb2dyZXNzID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChvcHRzLmNvbXBsZXRlICYmICFUeXBlLmlzRnVuY3Rpb24ob3B0cy5jb21wbGV0ZSkpIHtcclxuXHRcdFx0XHRcdG9wdHMuY29tcGxldGUgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IERpc3BsYXkgJiBWaXNpYmlsaXR5XHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogUmVmZXIgdG8gVmVsb2NpdHkncyBkb2N1bWVudGF0aW9uIChWZWxvY2l0eUpTLm9yZy8jZGlzcGxheUFuZFZpc2liaWxpdHkpIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBkaXNwbGF5IGFuZCB2aXNpYmlsaXR5IG9wdGlvbnMnIGJlaGF2aW9yLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IFdlIHN0cmljdGx5IGNoZWNrIGZvciB1bmRlZmluZWQgaW5zdGVhZCBvZiBmYWxzaW5lc3MgYmVjYXVzZSBkaXNwbGF5IGFjY2VwdHMgYW4gZW1wdHkgc3RyaW5nIHZhbHVlLiAqL1xyXG5cdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLmRpc3BsYXkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdG9wdHMuZGlzcGxheSA9IG9wdHMuZGlzcGxheS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0LyogVXNlcnMgY2FuIHBhc3MgaW4gYSBzcGVjaWFsIFwiYXV0b1wiIHZhbHVlIHRvIGluc3RydWN0IFZlbG9jaXR5IHRvIHNldCB0aGUgZWxlbWVudCB0byBpdHMgZGVmYXVsdCBkaXNwbGF5IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gXCJhdXRvXCIpIHtcclxuXHRcdFx0XHRcdFx0b3B0cy5kaXNwbGF5ID0gVmVsb2NpdHkuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlbGVtZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChvcHRzLnZpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLnZpc2liaWxpdHkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdG9wdHMudmlzaWJpbGl0eSA9IG9wdHMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IG1vYmlsZUhBXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIFdoZW4gc2V0IHRvIHRydWUsIGFuZCBpZiB0aGlzIGlzIGEgbW9iaWxlIGRldmljZSwgbW9iaWxlSEEgYXV0b21hdGljYWxseSBlbmFibGVzIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiAodmlhIGEgbnVsbCB0cmFuc2Zvcm0gaGFjaylcclxuXHRcdFx0XHQgb24gYW5pbWF0aW5nIGVsZW1lbnRzLiBIQSBpcyByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgYXQgdGhlIGNvbXBsZXRpb24gb2YgaXRzIGFuaW1hdGlvbi4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBBbmRyb2lkIEdpbmdlcmJyZWFkIGRvZXNuJ3Qgc3VwcG9ydCBIQS4gSWYgYSBudWxsIHRyYW5zZm9ybSBoYWNrIChtb2JpbGVIQSkgaXMgaW4gZmFjdCBzZXQsIGl0IHdpbGwgcHJldmVudCBvdGhlciB0cmFuZm9ybSBzdWJwcm9wZXJ0aWVzIGZyb20gdGFraW5nIGVmZmVjdC4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgdXNlIG9mIG1vYmlsZUhBIGluIFZlbG9jaXR5J3MgZG9jdW1lbnRhdGlvbjogVmVsb2NpdHlKUy5vcmcvI21vYmlsZUhBLiAqL1xyXG5cdFx0XHRcdG9wdHMubW9iaWxlSEEgPSAob3B0cy5tb2JpbGVIQSAmJiBWZWxvY2l0eS5TdGF0ZS5pc01vYmlsZSAmJiAhVmVsb2NpdHkuU3RhdGUuaXNHaW5nZXJicmVhZCk7XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBQYXJ0IElJOiBRdWV1ZWluZ1xyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogV2hlbiBhIHNldCBvZiBlbGVtZW50cyBpcyB0YXJnZXRlZCBieSBhIFZlbG9jaXR5IGNhbGwsIHRoZSBzZXQgaXMgYnJva2VuIHVwIGFuZCBlYWNoIGVsZW1lbnQgaGFzIHRoZSBjdXJyZW50IFZlbG9jaXR5IGNhbGwgaW5kaXZpZHVhbGx5IHF1ZXVlZCBvbnRvIGl0LlxyXG5cdFx0XHRcdCBJbiB0aGlzIHdheSwgZWFjaCBlbGVtZW50J3MgZXhpc3RpbmcgcXVldWUgaXMgcmVzcGVjdGVkOyBzb21lIGVsZW1lbnRzIG1heSBhbHJlYWR5IGJlIGFuaW1hdGluZyBhbmQgYWNjb3JkaW5nbHkgc2hvdWxkIG5vdCBoYXZlIHRoaXMgY3VycmVudCBWZWxvY2l0eSBjYWxsIHRyaWdnZXJlZCBpbW1lZGlhdGVseS4gKi9cclxuXHRcdFx0XHQvKiBJbiBlYWNoIHF1ZXVlLCB0d2VlbiBkYXRhIGlzIHByb2Nlc3NlZCBmb3IgZWFjaCBhbmltYXRpbmcgcHJvcGVydHkgdGhlbiBwdXNoZWQgb250byB0aGUgY2FsbC13aWRlIGNhbGxzIGFycmF5LiBXaGVuIHRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIHNldCBoYXMgaGFkIGl0cyB0d2VlbnMgcHJvY2Vzc2VkLFxyXG5cdFx0XHRcdCB0aGUgY2FsbCBhcnJheSBpcyBwdXNoZWQgdG8gVmVsb2NpdHkuU3RhdGUuY2FsbHMgZm9yIGxpdmUgcHJvY2Vzc2luZyBieSB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRpY2suICovXHJcblx0XHRcdFx0ZnVuY3Rpb24gYnVpbGRRdWV1ZShuZXh0KSB7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSwgbGFzdFR3ZWVuc0NvbnRhaW5lcjtcclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IE9wdGlvbjogQmVnaW5cclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIFRoZSBiZWdpbiBjYWxsYmFjayBpcyBmaXJlZCBvbmNlIHBlciBjYWxsIC0tIG5vdCBvbmNlIHBlciBlbGVtZW5ldCAtLSBhbmQgaXMgcGFzc2VkIHRoZSBmdWxsIHJhdyBET00gZWxlbWVudCBzZXQgYXMgYm90aCBpdHMgY29udGV4dCBhbmQgaXRzIGZpcnN0IGFyZ3VtZW50LiAqL1xyXG5cdFx0XHRcdFx0aWYgKG9wdHMuYmVnaW4gJiYgZWxlbWVudHNJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHQvKiBXZSB0aHJvdyBjYWxsYmFja3MgaW4gYSBzZXRUaW1lb3V0IHNvIHRoYXQgdGhyb3duIGVycm9ycyBkb24ndCBoYWx0IHRoZSBleGVjdXRpb24gb2YgVmVsb2NpdHkgaXRzZWxmLiAqL1xyXG5cdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdG9wdHMuYmVnaW4uY2FsbChlbGVtZW50cywgZWxlbWVudHMpO1xyXG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0IFR3ZWVuIERhdGEgQ29uc3RydWN0aW9uIChmb3IgU2Nyb2xsKVxyXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIE5vdGU6IEluIG9yZGVyIHRvIGJlIHN1YmplY3RlZCB0byBjaGFpbmluZyBhbmQgYW5pbWF0aW9uIG9wdGlvbnMsIHNjcm9sbCdzIHR3ZWVuaW5nIGlzIHJvdXRlZCB0aHJvdWdoIFZlbG9jaXR5IGFzIGlmIGl0IHdlcmUgYSBzdGFuZGFyZCBDU1MgcHJvcGVydHkgYW5pbWF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gXCJzY3JvbGxcIikge1xyXG5cdFx0XHRcdFx0XHQvKiBUaGUgc2Nyb2xsIGFjdGlvbiB1bmlxdWVseSB0YWtlcyBhbiBvcHRpb25hbCBcIm9mZnNldFwiIG9wdGlvbiAtLSBzcGVjaWZpZWQgaW4gcGl4ZWxzIC0tIHRoYXQgb2Zmc2V0cyB0aGUgdGFyZ2V0ZWQgc2Nyb2xsIHBvc2l0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHR2YXIgc2Nyb2xsRGlyZWN0aW9uID0gKC9eeCQvaS50ZXN0KG9wdHMuYXhpcykgPyBcIkxlZnRcIiA6IFwiVG9wXCIpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsT2Zmc2V0ID0gcGFyc2VGbG9hdChvcHRzLm9mZnNldCkgfHwgMCxcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudCxcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudEFsdGVybmF0ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogU2Nyb2xsIGFsc28gdW5pcXVlbHkgdGFrZXMgYW4gb3B0aW9uYWwgXCJjb250YWluZXJcIiBvcHRpb24sIHdoaWNoIGluZGljYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgLS1cclxuXHRcdFx0XHRcdFx0IGFzIG9wcG9zZWQgdG8gdGhlIGJyb3dzZXIgd2luZG93IGl0c2VsZi4gVGhpcyBpcyB1c2VmdWwgZm9yIHNjcm9sbGluZyB0b3dhcmQgYW4gZWxlbWVudCB0aGF0J3MgaW5zaWRlIGFuIG92ZXJmbG93aW5nIHBhcmVudCBlbGVtZW50LiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0cy5jb250YWluZXIpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBFbnN1cmUgdGhhdCBlaXRoZXIgYSBqUXVlcnkgb2JqZWN0IG9yIGEgcmF3IERPTSBlbGVtZW50IHdhcyBwYXNzZWQgaW4uICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKG9wdHMuY29udGFpbmVyKSB8fCBUeXBlLmlzTm9kZShvcHRzLmNvbnRhaW5lcikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEV4dHJhY3QgdGhlIHJhdyBET00gZWxlbWVudCBmcm9tIHRoZSBqUXVlcnkgd3JhcHBlci4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdG9wdHMuY29udGFpbmVyID0gb3B0cy5jb250YWluZXJbMF0gfHwgb3B0cy5jb250YWluZXI7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBVbmxpa2Ugb3RoZXIgcHJvcGVydGllcyBpbiBWZWxvY2l0eSwgdGhlIGJyb3dzZXIncyBzY3JvbGwgcG9zaXRpb24gaXMgbmV2ZXIgY2FjaGVkIHNpbmNlIGl0IHNvIGZyZXF1ZW50bHkgY2hhbmdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0IChkdWUgdG8gdGhlIHVzZXIncyBuYXR1cmFsIGludGVyYWN0aW9uIHdpdGggdGhlIHBhZ2UpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zaXRpb25DdXJyZW50ID0gb3B0cy5jb250YWluZXJbXCJzY3JvbGxcIiArIHNjcm9sbERpcmVjdGlvbl07IC8qIEdFVCAqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qICQucG9zaXRpb24oKSB2YWx1ZXMgYXJlIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIncyBjdXJyZW50bHkgdmlld2FibGUgYXJlYSAod2l0aG91dCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBjb250YWluZXIncyB0cnVlIGRpbWVuc2lvbnNcclxuXHRcdFx0XHRcdFx0XHRcdCAtLSBzYXksIGZvciBleGFtcGxlLCBpZiB0aGUgY29udGFpbmVyIHdhcyBub3Qgb3ZlcmZsb3dpbmcpLiBUaHVzLCB0aGUgc2Nyb2xsIGVuZCB2YWx1ZSBpcyB0aGUgc3VtIG9mIHRoZSBjaGlsZCBlbGVtZW50J3MgcG9zaXRpb24gKmFuZCpcclxuXHRcdFx0XHRcdFx0XHRcdCB0aGUgc2Nyb2xsIGNvbnRhaW5lcidzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zaXRpb25FbmQgPSAoc2Nyb2xsUG9zaXRpb25DdXJyZW50ICsgJChlbGVtZW50KS5wb3NpdGlvbigpW3Njcm9sbERpcmVjdGlvbi50b0xvd2VyQ2FzZSgpXSkgKyBzY3JvbGxPZmZzZXQ7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgYSB2YWx1ZSBvdGhlciB0aGFuIGEgalF1ZXJ5IG9iamVjdCBvciBhIHJhdyBET00gZWxlbWVudCB3YXMgcGFzc2VkIGluLCBkZWZhdWx0IHRvIG51bGwgc28gdGhhdCB0aGlzIG9wdGlvbiBpcyBpZ25vcmVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRzLmNvbnRhaW5lciA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSB3aW5kb3cgaXRzZWxmIGlzIGJlaW5nIHNjcm9sbGVkIC0tIG5vdCBhIGNvbnRhaW5pbmcgZWxlbWVudCAtLSBwZXJmb3JtIGEgbGl2ZSBzY3JvbGwgcG9zaXRpb24gbG9va3VwIHVzaW5nXHJcblx0XHRcdFx0XHRcdFx0IHRoZSBhcHByb3ByaWF0ZSBjYWNoZWQgcHJvcGVydHkgbmFtZXMgKHdoaWNoIGRpZmZlciBiYXNlZCBvbiBicm93c2VyIHR5cGUpLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudCA9IFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvcltWZWxvY2l0eS5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyBzY3JvbGxEaXJlY3Rpb25dXTsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0LyogV2hlbiBzY3JvbGxpbmcgdGhlIGJyb3dzZXIgd2luZG93LCBjYWNoZSB0aGUgYWx0ZXJuYXRlIGF4aXMncyBjdXJyZW50IHZhbHVlIHNpbmNlIHdpbmRvdy5zY3JvbGxUbygpIGRvZXNuJ3QgbGV0IHVzIGNoYW5nZSBvbmx5IG9uZSB2YWx1ZSBhdCBhIHRpbWUuICovXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zaXRpb25DdXJyZW50QWx0ZXJuYXRlID0gVmVsb2NpdHkuU3RhdGUuc2Nyb2xsQW5jaG9yW1ZlbG9jaXR5LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIiArIChzY3JvbGxEaXJlY3Rpb24gPT09IFwiTGVmdFwiID8gXCJUb3BcIiA6IFwiTGVmdFwiKV1dOyAvKiBHRVQgKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogVW5saWtlICQucG9zaXRpb24oKSwgJC5vZmZzZXQoKSB2YWx1ZXMgYXJlIHJlbGF0aXZlIHRvIHRoZSBicm93c2VyIHdpbmRvdydzIHRydWUgZGltZW5zaW9ucyAtLSBub3QgbWVyZWx5IGl0cyBjdXJyZW50bHkgdmlld2FibGUgYXJlYSAtLVxyXG5cdFx0XHRcdFx0XHRcdCBhbmQgdGhlcmVmb3JlIGVuZCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgY29tcG91bmRlZCBvbnRvIGN1cnJlbnQgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kID0gJChlbGVtZW50KS5vZmZzZXQoKVtzY3JvbGxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKV0gKyBzY3JvbGxPZmZzZXQ7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBTaW5jZSB0aGVyZSdzIG9ubHkgb25lIGZvcm1hdCB0aGF0IHNjcm9sbCdzIGFzc29jaWF0ZWQgdHdlZW5zQ29udGFpbmVyIGNhbiB0YWtlLCB3ZSBjcmVhdGUgaXQgbWFudWFsbHkuICovXHJcblx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lciA9IHtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGw6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWU6IHNjcm9sbFBvc2l0aW9uQ3VycmVudCxcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZTogc2Nyb2xsUG9zaXRpb25DdXJyZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWU6IHNjcm9sbFBvc2l0aW9uRW5kLFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pdFR5cGU6IFwiXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6IG9wdHMuZWFzaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsRGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXI6IG9wdHMuY29udGFpbmVyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0ZXJuYXRlVmFsdWU6IHNjcm9sbFBvc2l0aW9uQ3VycmVudEFsdGVybmF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKHNjcm9sbCk6IFwiLCB0d2VlbnNDb250YWluZXIuc2Nyb2xsLCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHQgVHdlZW4gRGF0YSBDb25zdHJ1Y3Rpb24gKGZvciBSZXZlcnNlKVxyXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogUmV2ZXJzZSBhY3RzIGxpa2UgYSBcInN0YXJ0XCIgYWN0aW9uIGluIHRoYXQgYSBwcm9wZXJ0eSBtYXAgaXMgYW5pbWF0ZWQgdG93YXJkLiBUaGUgb25seSBkaWZmZXJlbmNlIGlzXHJcblx0XHRcdFx0XHRcdCB0aGF0IHRoZSBwcm9wZXJ0eSBtYXAgdXNlZCBmb3IgcmV2ZXJzZSBpcyB0aGUgaW52ZXJzZSBvZiB0aGUgbWFwIHVzZWQgaW4gdGhlIHByZXZpb3VzIGNhbGwuIFRodXMsIHdlIG1hbmlwdWxhdGVcclxuXHRcdFx0XHRcdFx0IHRoZSBwcmV2aW91cyBjYWxsIHRvIGNvbnN0cnVjdCBvdXIgbmV3IG1hcDogdXNlIHRoZSBwcmV2aW91cyBtYXAncyBlbmQgdmFsdWVzIGFzIG91ciBuZXcgbWFwJ3Mgc3RhcnQgdmFsdWVzLiBDb3B5IG92ZXIgYWxsIG90aGVyIGRhdGEuICovXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IFJldmVyc2UgY2FuIGJlIGRpcmVjdGx5IGNhbGxlZCB2aWEgdGhlIFwicmV2ZXJzZVwiIHBhcmFtZXRlciwgb3IgaXQgY2FuIGJlIGluZGlyZWN0bHkgdHJpZ2dlcmVkIHZpYSB0aGUgbG9vcCBvcHRpb24uIChMb29wcyBhcmUgY29tcG9zZWQgb2YgbXVsdGlwbGUgcmV2ZXJzZXMuKSAqL1xyXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBSZXZlcnNlIGNhbGxzIGRvIG5vdCBuZWVkIHRvIGJlIGNvbnNlY3V0aXZlbHkgY2hhaW5lZCBvbnRvIGEgY3VycmVudGx5LWFuaW1hdGluZyBlbGVtZW50IGluIG9yZGVyIHRvIG9wZXJhdGUgb24gY2FjaGVkIHZhbHVlcztcclxuXHRcdFx0XHRcdFx0IHRoZXJlIGlzIG5vIGhhcm0gdG8gcmV2ZXJzZSBiZWluZyBjYWxsZWQgb24gYSBwb3RlbnRpYWxseSBzdGFsZSBkYXRhIGNhY2hlIHNpbmNlIHJldmVyc2UncyBiZWhhdmlvciBpcyBzaW1wbHkgZGVmaW5lZFxyXG5cdFx0XHRcdFx0XHQgYXMgcmV2ZXJ0aW5nIHRvIHRoZSBlbGVtZW50J3MgdmFsdWVzIGFzIHRoZXkgd2VyZSBwcmlvciB0byB0aGUgcHJldmlvdXMgKlZlbG9jaXR5KiBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmV2ZXJzZVwiKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogQWJvcnQgaWYgdGhlcmUgaXMgbm8gcHJpb3IgYW5pbWF0aW9uIGRhdGEgdG8gcmV2ZXJzZSB0by4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWRhdGEudHdlZW5zQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogRGVxdWV1ZSB0aGUgZWxlbWVudCBzbyB0aGF0IHRoaXMgcXVldWUgZW50cnkgcmVsZWFzZXMgaXRzZWxmIGltbWVkaWF0ZWx5LCBhbGxvd2luZyBzdWJzZXF1ZW50IHF1ZXVlIGVudHJpZXMgdG8gcnVuLiAqL1xyXG5cdFx0XHRcdFx0XHRcdCQuZGVxdWV1ZShlbGVtZW50LCBvcHRzLnF1ZXVlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHQgT3B0aW9ucyBQYXJzaW5nXHJcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGVsZW1lbnQgd2FzIGhpZGRlbiB2aWEgdGhlIGRpc3BsYXkgb3B0aW9uIGluIHRoZSBwcmV2aW91cyBjYWxsLFxyXG5cdFx0XHRcdFx0XHRcdCByZXZlcnQgZGlzcGxheSB0byBcImF1dG9cIiBwcmlvciB0byByZXZlcnNhbCBzbyB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgYWdhaW4uICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEub3B0cy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5vcHRzLmRpc3BsYXkgPSBcImF1dG9cIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9wdHMudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5vcHRzLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBsb29wIG9wdGlvbiB3YXMgc2V0IGluIHRoZSBwcmV2aW91cyBjYWxsLCBkaXNhYmxlIGl0IHNvIHRoYXQgXCJyZXZlcnNlXCIgY2FsbHMgYXJlbid0IHJlY3Vyc2l2ZWx5IGdlbmVyYXRlZC5cclxuXHRcdFx0XHRcdFx0XHQgRnVydGhlciwgcmVtb3ZlIHRoZSBwcmV2aW91cyBjYWxsJ3MgY2FsbGJhY2sgb3B0aW9uczsgdHlwaWNhbGx5LCB1c2VycyBkbyBub3Qgd2FudCB0aGVzZSB0byBiZSByZWZpcmVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5sb29wID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YS5vcHRzLmJlZ2luID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHRkYXRhLm9wdHMuY29tcGxldGUgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBTaW5jZSB3ZSdyZSBleHRlbmRpbmcgYW4gb3B0cyBvYmplY3QgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGV4dGVuZGVkIHdpdGggdGhlIGRlZmF1bHRzIG9wdGlvbnMgb2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdCB3ZSByZW1vdmUgbm9uLWV4cGxpY2l0bHktZGVmaW5lZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGF1dG8tYXNzaWduZWQgdmFsdWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5lYXNpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBvcHRzLmVhc2luZztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5kdXJhdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIG9wdHMuZHVyYXRpb247XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBUaGUgb3B0cyBvYmplY3QgdXNlZCBmb3IgcmV2ZXJzYWwgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBvcHRpb25zIG9iamVjdCBvcHRpb25hbGx5IHBhc3NlZCBpbnRvIHRoaXNcclxuXHRcdFx0XHRcdFx0XHQgcmV2ZXJzZSBjYWxsIHBsdXMgdGhlIG9wdGlvbnMgdXNlZCBpbiB0aGUgcHJldmlvdXMgVmVsb2NpdHkgY2FsbC4gKi9cclxuXHRcdFx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIGRhdGEub3B0cywgb3B0cyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFR3ZWVucyBDb250YWluZXIgUmVjb25zdHJ1Y3Rpb25cclxuXHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogQ3JlYXRlIGEgZGVlcHkgY29weSAoaW5kaWNhdGVkIHZpYSB0aGUgdHJ1ZSBmbGFnKSBvZiB0aGUgcHJldmlvdXMgY2FsbCdzIHR3ZWVuc0NvbnRhaW5lci4gKi9cclxuXHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGEgPyBkYXRhLnR3ZWVuc0NvbnRhaW5lciA6IG51bGwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBNYW5pcHVsYXRlIHRoZSBwcmV2aW91cyB0d2VlbnNDb250YWluZXIgYnkgcmVwbGFjaW5nIGl0cyBlbmQgdmFsdWVzIGFuZCBjdXJyZW50VmFsdWVzIHdpdGggaXRzIHN0YXJ0IHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBsYXN0VHdlZW4gaW4gbGFzdFR3ZWVuc0NvbnRhaW5lcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSW4gYWRkaXRpb24gdG8gdHdlZW4gZGF0YSwgdHdlZW5zQ29udGFpbmVycyBjb250YWluIGFuIGVsZW1lbnQgcHJvcGVydHkgdGhhdCB3ZSBpZ25vcmUgaGVyZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsYXN0VHdlZW5zQ29udGFpbmVyLmhhc093blByb3BlcnR5KGxhc3RUd2VlbikgJiYgbGFzdFR3ZWVuICE9PSBcImVsZW1lbnRcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbGFzdFN0YXJ0VmFsdWUgPSBsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uc3RhcnRWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5zdGFydFZhbHVlID0gbGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dLmN1cnJlbnRWYWx1ZSA9IGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5lbmRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dLmVuZFZhbHVlID0gbGFzdFN0YXJ0VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBFYXNpbmcgaXMgdGhlIG9ubHkgb3B0aW9uIHRoYXQgZW1iZWRzIGludG8gdGhlIGluZGl2aWR1YWwgdHdlZW4gZGF0YSAoc2luY2UgaXQgY2FuIGJlIGRlZmluZWQgb24gYSBwZXItcHJvcGVydHkgYmFzaXMpLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQWNjb3JkaW5nbHksIGV2ZXJ5IHByb3BlcnR5J3MgZWFzaW5nIHZhbHVlIG11c3QgYmUgdXBkYXRlZCB3aGVuIGFuIG9wdGlvbnMgb2JqZWN0IGlzIHBhc3NlZCBpbiB3aXRoIGEgcmV2ZXJzZSBjYWxsLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgVGhlIHNpZGUgZWZmZWN0IG9mIHRoaXMgZXh0ZW5zaWJpbGl0eSBpcyB0aGF0IGFsbCBwZXItcHJvcGVydHkgZWFzaW5nIHZhbHVlcyBhcmUgZm9yY2VmdWxseSByZXNldCB0byB0aGUgbmV3IHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIVR5cGUuaXNFbXB0eU9iamVjdChvcHRpb25zKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5lYXNpbmcgPSBvcHRzLmVhc2luZztcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIgKyBsYXN0VHdlZW4gKyBcIik6IFwiICsgSlNPTi5zdHJpbmdpZnkobGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dKSwgZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lciA9IGxhc3RUd2VlbnNDb250YWluZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHQgVHdlZW4gRGF0YSBDb25zdHJ1Y3Rpb24gKGZvciBTdGFydClcclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInN0YXJ0XCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdCBWYWx1ZSBUcmFuc2ZlcnJpbmdcclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGlzIHF1ZXVlIGVudHJ5IGZvbGxvd3MgYSBwcmV2aW91cyBWZWxvY2l0eS1pbml0aWF0ZWQgcXVldWUgZW50cnkgKmFuZCogaWYgdGhpcyBlbnRyeSB3YXMgY3JlYXRlZFxyXG5cdFx0XHRcdFx0XHQgd2hpbGUgdGhlIGVsZW1lbnQgd2FzIGluIHRoZSBwcm9jZXNzIG9mIGJlaW5nIGFuaW1hdGVkIGJ5IFZlbG9jaXR5LCB0aGVuIHRoaXMgY3VycmVudCBjYWxsIGlzIHNhZmUgdG8gdXNlXHJcblx0XHRcdFx0XHRcdCB0aGUgZW5kIHZhbHVlcyBmcm9tIHRoZSBwcmlvciBjYWxsIGFzIGl0cyBzdGFydCB2YWx1ZXMuIFZlbG9jaXR5IGF0dGVtcHRzIHRvIHBlcmZvcm0gdGhpcyB2YWx1ZSB0cmFuc2ZlclxyXG5cdFx0XHRcdFx0XHQgcHJvY2VzcyB3aGVuZXZlciBwb3NzaWJsZSBpbiBvcmRlciB0byBhdm9pZCByZXF1ZXJ5aW5nIHRoZSBET00uICovXHJcblx0XHRcdFx0XHRcdC8qIElmIHZhbHVlcyBhcmVuJ3QgdHJhbnNmZXJyZWQgZnJvbSBhIHByaW9yIGNhbGwgYW5kIHN0YXJ0IHZhbHVlcyB3ZXJlIG5vdCBmb3JjZWZlZCBieSB0aGUgdXNlciAobW9yZSBvbiB0aGlzIGJlbG93KSxcclxuXHRcdFx0XHRcdFx0IHRoZW4gdGhlIERPTSBpcyBxdWVyaWVkIGZvciB0aGUgZWxlbWVudCdzIGN1cnJlbnQgdmFsdWVzIGFzIGEgbGFzdCByZXNvcnQuICovXHJcblx0XHRcdFx0XHRcdC8qIE5vdGU6IENvbnZlcnNlbHksIGFuaW1hdGlvbiByZXZlcnNhbCAoYW5kIGxvb3BpbmcpICphbHdheXMqIHBlcmZvcm0gaW50ZXItY2FsbCB2YWx1ZSB0cmFuc2ZlcnM7IHRoZXkgbmV2ZXIgcmVxdWVyeSB0aGUgRE9NLiAqL1xyXG5cclxuXHRcdFx0XHRcdFx0ZGF0YSA9IERhdGEoZWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUaGUgcGVyLWVsZW1lbnQgaXNBbmltYXRpbmcgZmxhZyBpcyB1c2VkIHRvIGluZGljYXRlIHdoZXRoZXIgaXQncyBzYWZlIChpLmUuIHRoZSBkYXRhIGlzbid0IHN0YWxlKVxyXG5cdFx0XHRcdFx0XHQgdG8gdHJhbnNmZXIgb3ZlciBlbmQgdmFsdWVzIHRvIHVzZSBhcyBzdGFydCB2YWx1ZXMuIElmIGl0J3Mgc2V0IHRvIHRydWUgYW5kIHRoZXJlIGlzIGEgcHJldmlvdXNcclxuXHRcdFx0XHRcdFx0IFZlbG9jaXR5IGNhbGwgdG8gcHVsbCB2YWx1ZXMgZnJvbSwgZG8gc28uICovXHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEudHdlZW5zQ29udGFpbmVyICYmIGRhdGEuaXNBbmltYXRpbmcgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyID0gZGF0YS50d2VlbnNDb250YWluZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IFR3ZWVuIERhdGEgQ2FsY3VsYXRpb25cclxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdC8qIFRoaXMgZnVuY3Rpb24gcGFyc2VzIHByb3BlcnR5IGRhdGEgYW5kIGRlZmF1bHRzIGVuZFZhbHVlLCBlYXNpbmcsIGFuZCBzdGFydFZhbHVlIGFzIGFwcHJvcHJpYXRlLiAqL1xyXG5cdFx0XHRcdFx0XHQvKiBQcm9wZXJ0eSBtYXAgdmFsdWVzIGNhbiBlaXRoZXIgdGFrZSB0aGUgZm9ybSBvZiAxKSBhIHNpbmdsZSB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIGVuZCB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0IG9yIDIpIGFuIGFycmF5IGluIHRoZSBmb3JtIG9mIFsgZW5kVmFsdWUsIFssIGVhc2luZ10gWywgc3RhcnRWYWx1ZV0gXS5cclxuXHRcdFx0XHRcdFx0IFRoZSBvcHRpb25hbCB0aGlyZCBwYXJhbWV0ZXIgaXMgYSBmb3JjZWZlZCBzdGFydFZhbHVlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiBxdWVyeWluZyB0aGUgRE9NIGZvclxyXG5cdFx0XHRcdFx0XHQgdGhlIGVsZW1lbnQncyBjdXJyZW50IHZhbHVlLiBSZWFkIFZlbG9jaXR5J3MgZG9jbWVudGF0aW9uIHRvIGxlYXJuIG1vcmUgYWJvdXQgZm9yY2VmZWVkaW5nOiBWZWxvY2l0eUpTLm9yZy8jZm9yY2VmZWVkaW5nICovXHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZVByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbih2YWx1ZURhdGEsIHNraXBSZXNvbHZpbmdFYXNpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZW5kVmFsdWUsIGVhc2luZywgc3RhcnRWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSBhIGZ1bmN0aW9uIGFzIHRoZSBtYWluIGFyZ3VtZW50IHRoZW4gcmVzb2x2ZSBpdCBmaXJzdCwgaW4gY2FzZSBpdCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbmVlZHMgdG8gYmUgc3BsaXQgKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKHZhbHVlRGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlRGF0YSA9IHZhbHVlRGF0YS5jYWxsKGVsZW1lbnQsIGVsZW1lbnRBcnJheUluZGV4LCBlbGVtZW50c0xlbmd0aCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBIYW5kbGUgdGhlIGFycmF5IGZvcm1hdCwgd2hpY2ggY2FuIGJlIHN0cnVjdHVyZWQgYXMgb25lIG9mIHRocmVlIHBvdGVudGlhbCBvdmVybG9hZHM6XHJcblx0XHRcdFx0XHRcdFx0IEEpIFsgZW5kVmFsdWUsIGVhc2luZywgc3RhcnRWYWx1ZSBdLCBCKSBbIGVuZFZhbHVlLCBlYXNpbmcgXSwgb3IgQykgWyBlbmRWYWx1ZSwgc3RhcnRWYWx1ZSBdICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNBcnJheSh2YWx1ZURhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBlbmRWYWx1ZSBpcyBhbHdheXMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5LiBEb24ndCBib3RoZXIgdmFsaWRhdGluZyBlbmRWYWx1ZSdzIHZhbHVlIG5vd1xyXG5cdFx0XHRcdFx0XHRcdFx0IHNpbmNlIHRoZSBlbnN1aW5nIHByb3BlcnR5IGN5Y2xpbmcgbG9naWMgZG9lcyB0aGF0LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSB2YWx1ZURhdGFbMF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogVHdvLWl0ZW0gYXJyYXkgZm9ybWF0OiBJZiB0aGUgc2Vjb25kIGl0ZW0gaXMgYSBudW1iZXIsIGZ1bmN0aW9uLCBvciBoZXggc3RyaW5nLCB0cmVhdCBpdCBhcyBhXHJcblx0XHRcdFx0XHRcdFx0XHQgc3RhcnQgdmFsdWUgc2luY2UgZWFzaW5ncyBjYW4gb25seSBiZSBub24taGV4IHN0cmluZ3Mgb3IgYXJyYXlzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCghVHlwZS5pc0FycmF5KHZhbHVlRGF0YVsxXSkgJiYgL15bXFxkLV0vLnRlc3QodmFsdWVEYXRhWzFdKSkgfHwgVHlwZS5pc0Z1bmN0aW9uKHZhbHVlRGF0YVsxXSkgfHwgQ1NTLlJlZ0V4LmlzSGV4LnRlc3QodmFsdWVEYXRhWzFdKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBUd28gb3IgdGhyZWUtaXRlbSBhcnJheTogSWYgdGhlIHNlY29uZCBpdGVtIGlzIGEgbm9uLWhleCBzdHJpbmcgZWFzaW5nIG5hbWUgb3IgYW4gYXJyYXksIHRyZWF0IGl0IGFzIGFuIGVhc2luZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoKFR5cGUuaXNTdHJpbmcodmFsdWVEYXRhWzFdKSAmJiAhQ1NTLlJlZ0V4LmlzSGV4LnRlc3QodmFsdWVEYXRhWzFdKSAmJiBWZWxvY2l0eS5FYXNpbmdzW3ZhbHVlRGF0YVsxXV0pIHx8IFR5cGUuaXNBcnJheSh2YWx1ZURhdGFbMV0pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IHNraXBSZXNvbHZpbmdFYXNpbmcgPyB2YWx1ZURhdGFbMV0gOiBnZXRFYXNpbmcodmFsdWVEYXRhWzFdLCBvcHRzLmR1cmF0aW9uKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIERvbid0IGJvdGhlciB2YWxpZGF0aW5nIHN0YXJ0VmFsdWUncyB2YWx1ZSBub3cgc2luY2UgdGhlIGVuc3VpbmcgcHJvcGVydHkgY3ljbGluZyBsb2dpYyBpbmhlcmVudGx5IGRvZXMgdGhhdC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHZhbHVlRGF0YVsyXTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMV0gfHwgdmFsdWVEYXRhWzJdO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIHRoZSBzaW5nbGUtdmFsdWUgZm9ybWF0LiAqL1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHZhbHVlRGF0YTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIERlZmF1bHQgdG8gdGhlIGNhbGwncyBlYXNpbmcgaWYgYSBwZXItcHJvcGVydHkgZWFzaW5nIHR5cGUgd2FzIG5vdCBkZWZpbmVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmICghc2tpcFJlc29sdmluZ0Vhc2luZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nID0gZWFzaW5nIHx8IG9wdHMuZWFzaW5nO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgZnVuY3Rpb25zIHdlcmUgcGFzc2VkIGluIGFzIHZhbHVlcywgcGFzcyB0aGUgZnVuY3Rpb24gdGhlIGN1cnJlbnQgZWxlbWVudCBhcyBpdHMgY29udGV4dCxcclxuXHRcdFx0XHRcdFx0XHQgcGx1cyB0aGUgZWxlbWVudCdzIGluZGV4IGFuZCB0aGUgZWxlbWVudCBzZXQncyBzaXplIGFzIGFyZ3VtZW50cy4gVGhlbiwgYXNzaWduIHRoZSByZXR1cm5lZCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKGVuZFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKGVsZW1lbnQsIGVsZW1lbnRBcnJheUluZGV4LCBlbGVtZW50c0xlbmd0aCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKHN0YXJ0VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gc3RhcnRWYWx1ZS5jYWxsKGVsZW1lbnQsIGVsZW1lbnRBcnJheUluZGV4LCBlbGVtZW50c0xlbmd0aCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBBbGxvdyBzdGFydFZhbHVlIHRvIGJlIGxlZnQgYXMgdW5kZWZpbmVkIHRvIGluZGljYXRlIHRvIHRoZSBlbnN1aW5nIGNvZGUgdGhhdCBpdHMgdmFsdWUgd2FzIG5vdCBmb3JjZWZlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gW2VuZFZhbHVlIHx8IDAsIGVhc2luZywgc3RhcnRWYWx1ZV07XHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZml4UHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZURhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBJbiBjYXNlIHRoaXMgcHJvcGVydHkgaXMgYSBob29rLCB0aGVyZSBhcmUgY2lyY3Vtc3RhbmNlcyB3aGVyZSB3ZSB3aWxsIGludGVuZCB0byB3b3JrIG9uIHRoZSBob29rJ3Mgcm9vdCBwcm9wZXJ0eSBhbmQgbm90IHRoZSBob29rZWQgc3VicHJvcGVydHkuICovXHJcblx0XHRcdFx0XHRcdFx0dmFyIHJvb3RQcm9wZXJ0eSA9IENTUy5Ib29rcy5nZXRSb290KHByb3BlcnR5KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogUGFyc2Ugb3V0IGVuZFZhbHVlLCBlYXNpbmcsIGFuZCBzdGFydFZhbHVlIGZyb20gdGhlIHByb3BlcnR5J3MgZGF0YS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSB2YWx1ZURhdGFbMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IHZhbHVlRGF0YVsxXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHZhbHVlRGF0YVsyXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybjtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFN0YXJ0IFZhbHVlIFNvdXJjaW5nXHJcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBPdGhlciB0aGFuIGZvciB0aGUgZHVtbXkgdHdlZW4gcHJvcGVydHksIHByb3BlcnRpZXMgdGhhdCBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlciAoYW5kIGRvIG5vdCBoYXZlIGFuIGFzc29jaWF0ZWQgbm9ybWFsaXphdGlvbikgd2lsbFxyXG5cdFx0XHRcdFx0XHRcdCBpbmhlcmVudGx5IHByb2R1Y2Ugbm8gc3R5bGUgY2hhbmdlcyB3aGVuIHNldCwgc28gdGhleSBhcmUgc2tpcHBlZCBpbiBvcmRlciB0byBkZWNyZWFzZSBhbmltYXRpb24gdGljayBvdmVyaGVhZC5cclxuXHRcdFx0XHRcdFx0XHQgUHJvcGVydHkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkIHZpYSBwcmVmaXhDaGVjaygpLCB3aGljaCByZXR1cm5zIGEgZmFsc2UgZmxhZyB3aGVuIG5vIHN1cHBvcnRlZCBpcyBkZXRlY3RlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBTaW5jZSBTVkcgZWxlbWVudHMgaGF2ZSBzb21lIG9mIHRoZWlyIHByb3BlcnRpZXMgZGlyZWN0bHkgYXBwbGllZCBhcyBIVE1MIGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdFx0IHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBmb3IgdGhlaXIgZXhwbGljaXQgYnJvd3NlciBzdXBwb3J0LCBhbmQgc28gd2Ugc2tpcCBza2lwIHRoaXMgY2hlY2sgZm9yIHRoZW0uICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKCghZGF0YSB8fCAhZGF0YS5pc1NWRykgJiYgcm9vdFByb3BlcnR5ICE9PSBcInR3ZWVuXCIgJiYgQ1NTLk5hbWVzLnByZWZpeENoZWNrKHJvb3RQcm9wZXJ0eSlbMV0gPT09IGZhbHNlICYmIENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Jvb3RQcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiICsgcm9vdFByb3BlcnR5ICsgXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBkaXNwbGF5IG9wdGlvbiBpcyBiZWluZyBzZXQgdG8gYSBub24tXCJub25lXCIgKGUuZy4gXCJibG9ja1wiKSBhbmQgb3BhY2l0eSAoZmlsdGVyIG9uIElFPD04KSBpcyBiZWluZ1xyXG5cdFx0XHRcdFx0XHRcdCBhbmltYXRlZCB0byBhbiBlbmRWYWx1ZSBvZiBub24temVybywgdGhlIHVzZXIncyBpbnRlbnRpb24gaXMgdG8gZmFkZSBpbiBmcm9tIGludmlzaWJsZSwgdGh1cyB3ZSBmb3JjZWZlZWQgb3BhY2l0eVxyXG5cdFx0XHRcdFx0XHRcdCBhIHN0YXJ0VmFsdWUgb2YgMCBpZiBpdHMgc3RhcnRWYWx1ZSBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNvdXJjZWQgYnkgdmFsdWUgdHJhbnNmZXJyaW5nIG9yIHByaW9yIGZvcmNlZmVlZGluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoKChvcHRzLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLmRpc3BsYXkgIT09IG51bGwgJiYgb3B0cy5kaXNwbGF5ICE9PSBcIm5vbmVcIikgfHwgKG9wdHMudmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIG9wdHMudmlzaWJpbGl0eSAhPT0gXCJoaWRkZW5cIikpICYmIC9vcGFjaXR5fGZpbHRlci8udGVzdChwcm9wZXJ0eSkgJiYgIXN0YXJ0VmFsdWUgJiYgZW5kVmFsdWUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogSWYgdmFsdWVzIGhhdmUgYmVlbiB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBwcmV2aW91cyBWZWxvY2l0eSBjYWxsLCBleHRyYWN0IHRoZSBlbmRWYWx1ZSBhbmQgcm9vdFByb3BlcnR5VmFsdWVcclxuXHRcdFx0XHRcdFx0XHQgZm9yIGFsbCBvZiB0aGUgY3VycmVudCBjYWxsJ3MgcHJvcGVydGllcyB0aGF0IHdlcmUgKmFsc28qIGFuaW1hdGVkIGluIHRoZSBwcmV2aW91cyBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFZhbHVlIHRyYW5zZmVycmluZyBjYW4gb3B0aW9uYWxseSBiZSBkaXNhYmxlZCBieSB0aGUgdXNlciB2aWEgdGhlIF9jYWNoZVZhbHVlcyBvcHRpb24uICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMuX2NhY2hlVmFsdWVzICYmIGxhc3RUd2VlbnNDb250YWluZXIgJiYgbGFzdFR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChzdGFydFZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IGxhc3RUd2VlbnNDb250YWluZXJbcHJvcGVydHldLmVuZFZhbHVlICsgbGFzdFR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0udW5pdFR5cGU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogVGhlIHByZXZpb3VzIGNhbGwncyByb290UHJvcGVydHlWYWx1ZSBpcyBleHRyYWN0ZWQgZnJvbSB0aGUgZWxlbWVudCdzIGRhdGEgY2FjaGUgc2luY2UgdGhhdCdzIHRoZVxyXG5cdFx0XHRcdFx0XHRcdFx0IGluc3RhbmNlIG9mIHJvb3RQcm9wZXJ0eVZhbHVlIHRoYXQgZ2V0cyBmcmVzaGx5IHVwZGF0ZWQgYnkgdGhlIHR3ZWVuaW5nIHByb2Nlc3MsIHdoZXJlYXMgdGhlIHJvb3RQcm9wZXJ0eVZhbHVlXHJcblx0XHRcdFx0XHRcdFx0XHQgYXR0YWNoZWQgdG8gdGhlIGluY29taW5nIGxhc3RUd2VlbnNDb250YWluZXIgaXMgZXF1YWwgdG8gdGhlIHJvb3QgcHJvcGVydHkncyB2YWx1ZSBwcmlvciB0byBhbnkgdHdlZW5pbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IGRhdGEucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtyb290UHJvcGVydHldO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgdmFsdWVzIHdlcmUgbm90IHRyYW5zZmVycmVkIGZyb20gYSBwcmV2aW91cyBWZWxvY2l0eSBjYWxsLCBxdWVyeSB0aGUgRE9NIGFzIG5lZWRlZC4gKi9cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIGhvb2tlZCBwcm9wZXJ0aWVzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCByb290UHJvcGVydHkpOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgZm9sbG93aW5nIGdldFByb3BlcnR5VmFsdWUoKSBjYWxsIGRvZXMgbm90IGFjdHVhbGx5IHRyaWdnZXIgYSBET00gcXVlcnk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGdldFByb3BlcnR5VmFsdWUoKSB3aWxsIGV4dHJhY3QgdGhlIGhvb2sgZnJvbSByb290UHJvcGVydHlWYWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHksIHJvb3RQcm9wZXJ0eVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiBzdGFydFZhbHVlIGlzIGFscmVhZHkgZGVmaW5lZCB2aWEgZm9yY2VmZWVkaW5nLCBkbyBub3QgcXVlcnkgdGhlIERPTSBmb3IgdGhlIHJvb3QgcHJvcGVydHkncyB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQganVzdCBncmFiIHJvb3RQcm9wZXJ0eSdzIHplcm8tdmFsdWUgdGVtcGxhdGUgZnJvbSBDU1MuSG9va3MuIFRoaXMgb3ZlcndyaXRlcyB0aGUgZWxlbWVudCdzIGFjdHVhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCByb290IHByb3BlcnR5IHZhbHVlIChpZiBvbmUgaXMgc2V0KSwgYnV0IHRoaXMgaXMgYWNjZXB0YWJsZSBzaW5jZSB0aGUgcHJpbWFyeSByZWFzb24gdXNlcnMgZm9yY2VmZWVkIGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHRvIGF2b2lkIERPTSBxdWVyaWVzLCBhbmQgdGh1cyB3ZSBsaWtld2lzZSBhdm9pZCBxdWVyeWluZyB0aGUgRE9NIGZvciB0aGUgcm9vdCBwcm9wZXJ0eSdzIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEdyYWIgdGhpcyBob29rJ3MgemVyby12YWx1ZSB0ZW1wbGF0ZSwgZS5nLiBcIjBweCAwcHggMHB4IGJsYWNrXCIuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV1bMV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIG5vbi1ob29rZWQgcHJvcGVydGllcyB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIGRlZmluZWQgdmlhIGZvcmNlZmVlZGluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhcnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBwcm9wZXJ0eSk7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFZhbHVlIERhdGEgRXh0cmFjdGlvblxyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlcGFyYXRlZFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZVVuaXRUeXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlVW5pdFR5cGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wZXJhdG9yID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIFNlcGFyYXRlcyBhIHByb3BlcnR5IHZhbHVlIGludG8gaXRzIG51bWVyaWMgdmFsdWUgYW5kIGl0cyB1bml0IHR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlcGFyYXRlVmFsdWUgPSBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB1bml0VHlwZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRudW1lcmljVmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0bnVtZXJpY1ZhbHVlID0gKHZhbHVlIHx8IFwiMFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBNYXRjaCB0aGUgdW5pdCB0eXBlIGF0IHRoZSBlbmQgb2YgdGhlIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9bJUEtel0rJC8sIGZ1bmN0aW9uKG1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBHcmFiIHRoZSB1bml0IHR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bml0VHlwZSA9IG1hdGNoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFN0cmlwIHRoZSB1bml0IHR5cGUgb2ZmIG9mIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgbm8gdW5pdCB0eXBlIHdhcyBzdXBwbGllZCwgYXNzaWduIG9uZSB0aGF0IGlzIGFwcHJvcHJpYXRlIGZvciB0aGlzIHByb3BlcnR5IChlLmcuIFwiZGVnXCIgZm9yIHJvdGF0ZVogb3IgXCJweFwiIGZvciB3aWR0aCkuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXVuaXRUeXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRUeXBlID0gQ1NTLlZhbHVlcy5nZXRVbml0VHlwZShwcm9wZXJ0eSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtudW1lcmljVmFsdWUsIHVuaXRUeXBlXTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgVHlwZS5pc1N0cmluZyhzdGFydFZhbHVlKSAmJiBUeXBlLmlzU3RyaW5nKGVuZFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybiA9IFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgaVN0YXJ0ID0gMCwgLy8gaW5kZXggaW4gc3RhcnRWYWx1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlFbmQgPSAwLCAvLyBpbmRleCBpbiBlbmRWYWx1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFTdGFydCA9IFtdLCAvLyBhcnJheSBvZiBzdGFydFZhbHVlIG51bWJlcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhRW5kID0gW10sIC8vIGFycmF5IG9mIGVuZFZhbHVlIG51bWJlcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMgPSAwLCAvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhIFwiY2FsYygpXCIgc28gd2UgZG9uJ3QgZHVwbGljYXRlIGl0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0IgPSAwLCAvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhbiBSR0IgYXMgd2UgY2FuJ3QgdXNlIGZyYWN0aW9uYWwgdmFsdWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0JBID0gMDsgLy8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYW4gUkdCQSBhcyB3ZSBtdXN0IHBhc3MgZnJhY3Rpb25hbCBmb3IgdGhlIGFscGhhIGNoYW5uZWxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gQ1NTLkhvb2tzLmZpeENvbG9ycyhzdGFydFZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gQ1NTLkhvb2tzLmZpeENvbG9ycyhlbmRWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoaVN0YXJ0IDwgc3RhcnRWYWx1ZS5sZW5ndGggJiYgaUVuZCA8IGVuZFZhbHVlLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY1N0YXJ0ID0gc3RhcnRWYWx1ZVtpU3RhcnRdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y0VuZCA9IGVuZFZhbHVlW2lFbmRdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKC9bXFxkXFwuLV0vLnRlc3QoY1N0YXJ0KSAmJiAvW1xcZFxcLi1dLy50ZXN0KGNFbmQpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHRTdGFydCA9IGNTdGFydCwgLy8gdGVtcG9yYXJ5IGNoYXJhY3RlciBidWZmZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dEVuZCA9IGNFbmQsIC8vIHRlbXBvcmFyeSBjaGFyYWN0ZXIgYnVmZmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdFN0YXJ0ID0gXCIuXCIsIC8vIE1ha2Ugc3VyZSB3ZSBjYW4gb25seSBldmVyIG1hdGNoIGEgc2luZ2xlIGRvdCBpbiBhIGRlY2ltYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG90RW5kID0gXCIuXCI7IC8vIE1ha2Ugc3VyZSB3ZSBjYW4gb25seSBldmVyIG1hdGNoIGEgc2luZ2xlIGRvdCBpbiBhIGRlY2ltYWxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCsraVN0YXJ0IDwgc3RhcnRWYWx1ZS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNTdGFydCA9IHN0YXJ0VmFsdWVbaVN0YXJ0XTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjU3RhcnQgPT09IGRvdFN0YXJ0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdFN0YXJ0ID0gXCIuLlwiOyAvLyBDYW4gbmV2ZXIgbWF0Y2ggdHdvIGNoYXJhY3RlcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIS9cXGQvLnRlc3QoY1N0YXJ0KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRTdGFydCArPSBjU3RhcnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlICgrK2lFbmQgPCBlbmRWYWx1ZS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNFbmQgPSBlbmRWYWx1ZVtpRW5kXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjRW5kID09PSBkb3RFbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG90RW5kID0gXCIuLlwiOyAvLyBDYW4gbmV2ZXIgbWF0Y2ggdHdvIGNoYXJhY3RlcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIS9cXGQvLnRlc3QoY0VuZCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0RW5kICs9IGNFbmQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB1U3RhcnQgPSBDU1MuSG9va3MuZ2V0VW5pdChzdGFydFZhbHVlLCBpU3RhcnQpLCAvLyB0ZW1wb3JhcnkgdW5pdCB0eXBlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVFbmQgPSBDU1MuSG9va3MuZ2V0VW5pdChlbmRWYWx1ZSwgaUVuZCk7IC8vIHRlbXBvcmFyeSB1bml0IHR5cGVcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aVN0YXJ0ICs9IHVTdGFydC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aUVuZCArPSB1RW5kLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodVN0YXJ0ID09PSB1RW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTYW1lIHVuaXRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodFN0YXJ0ID09PSB0RW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNhbWUgbnVtYmVycywgc28ganVzdCBjb3B5IG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiArPSB0U3RhcnQgKyB1U3RhcnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEaWZmZXJlbnQgbnVtYmVycywgc28gc3RvcmUgdGhlbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuICs9IFwie1wiICsgYVN0YXJ0Lmxlbmd0aCArIChpblJHQiA/IFwiIVwiIDogXCJcIikgKyBcIn1cIiArIHVTdGFydDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YVN0YXJ0LnB1c2gocGFyc2VGbG9hdCh0U3RhcnQpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YUVuZC5wdXNoKHBhcnNlRmxvYXQodEVuZCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEaWZmZXJlbnQgdW5pdHMsIHNvIHB1dCBpbnRvIGEgXCJjYWxjKGZyb20gKyB0bylcIiBhbmQgYW5pbWF0ZSBlYWNoIHNpZGUgdG8vZnJvbSB6ZXJvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgblN0YXJ0ID0gcGFyc2VGbG9hdCh0U3RhcnQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5FbmQgPSBwYXJzZUZsb2F0KHRFbmQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gKz0gKGluQ2FsYyA8IDUgPyBcImNhbGNcIiA6IFwiXCIpICsgXCIoXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIChuU3RhcnQgPyBcIntcIiArIGFTdGFydC5sZW5ndGggKyAoaW5SR0IgPyBcIiFcIiA6IFwiXCIpICsgXCJ9XCIgOiBcIjBcIikgKyB1U3RhcnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIFwiICsgXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIChuRW5kID8gXCJ7XCIgKyAoYVN0YXJ0Lmxlbmd0aCArIChuU3RhcnQgPyAxIDogMCkpICsgKGluUkdCID8gXCIhXCIgOiBcIlwiKSArIFwifVwiIDogXCIwXCIpICsgdUVuZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgXCIpXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoblN0YXJ0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFTdGFydC5wdXNoKG5TdGFydCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFFbmQucHVzaCgwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChuRW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFTdGFydC5wdXNoKDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhRW5kLnB1c2gobkVuZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNTdGFydCA9PT0gY0VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gKz0gY1N0YXJ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlTdGFydCsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlFbmQrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhIGNhbGMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpbkNhbGMgPT09IDAgJiYgY1N0YXJ0ID09PSBcImNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPT09IDEgJiYgY1N0YXJ0ID09PSBcImFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPT09IDIgJiYgY1N0YXJ0ID09PSBcImxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPT09IDMgJiYgY1N0YXJ0ID09PSBcImNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPj0gNCAmJiBjU3RhcnQgPT09IFwiKFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5DYWxjKys7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgoaW5DYWxjICYmIGluQ2FsYyA8IDUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluQ2FsYyA+PSA0ICYmIGNTdGFydCA9PT0gXCIpXCIgJiYgLS1pbkNhbGMgPCA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhbiByZ2IoKSAvIHJnYmEoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpblJHQiA9PT0gMCAmJiBjU3RhcnQgPT09IFwiclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID09PSAxICYmIGNTdGFydCA9PT0gXCJnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5SR0IgPT09IDIgJiYgY1N0YXJ0ID09PSBcImJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpblJHQiA9PT0gMyAmJiBjU3RhcnQgPT09IFwiYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID49IDMgJiYgY1N0YXJ0ID09PSBcIihcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpblJHQiA9PT0gMyAmJiBjU3RhcnQgPT09IFwiYVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCQSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpblJHQisrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5SR0JBICYmIGNTdGFydCA9PT0gXCIsXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgrK2luUkdCQSA+IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0IgPSBpblJHQkEgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoKGluUkdCQSAmJiBpblJHQiA8IChpblJHQkEgPyA1IDogNCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID49IChpblJHQkEgPyA0IDogMykgJiYgY1N0YXJ0ID09PSBcIilcIiAmJiAtLWluUkdCIDwgKGluUkdCQSA/IDUgOiA0KSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0IgPSBpblJHQkEgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IGNoYW5naW5nIHVuaXRzLCBmaXhpbmcgY29sb3Vyc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaVN0YXJ0ICE9PSBzdGFydFZhbHVlLmxlbmd0aCB8fCBpRW5kICE9PSBlbmRWYWx1ZS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlRyeWluZyB0byBwYXR0ZXJuIG1hdGNoIG1pcy1tYXRjaGVkIHN0cmluZ3MgW1xcXCJcIiArIGVuZFZhbHVlICsgXCJcXFwiLCBcXFwiXCIgKyBzdGFydFZhbHVlICsgXCJcXFwiXVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBhdHRlcm4pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFTdGFydC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGF0dGVybiBmb3VuZCBcXFwiXCIgKyBwYXR0ZXJuICsgXCJcXFwiIC0+IFwiLCBhU3RhcnQsIGFFbmQsIFwiW1wiICsgc3RhcnRWYWx1ZSArIFwiLFwiICsgZW5kVmFsdWUgKyBcIl1cIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBhU3RhcnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBhRW5kO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzdGFydFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICghcGF0dGVybikge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogU2VwYXJhdGUgc3RhcnRWYWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHNlcGFyYXRlZFZhbHVlID0gc2VwYXJhdGVWYWx1ZShwcm9wZXJ0eSwgc3RhcnRWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gc2VwYXJhdGVkVmFsdWVbMF07XHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlVW5pdFR5cGUgPSBzZXBhcmF0ZWRWYWx1ZVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBTZXBhcmF0ZSBlbmRWYWx1ZSwgYW5kIGV4dHJhY3QgYSB2YWx1ZSBvcGVyYXRvciAoZS5nLiBcIis9XCIsIFwiLT1cIikgaWYgb25lIGV4aXN0cy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHNlcGFyYXRlZFZhbHVlID0gc2VwYXJhdGVWYWx1ZShwcm9wZXJ0eSwgZW5kVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzZXBhcmF0ZWRWYWx1ZVswXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLCBmdW5jdGlvbihtYXRjaCwgc3ViTWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3BlcmF0b3IgPSBzdWJNYXRjaDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFN0cmlwIHRoZSBvcGVyYXRvciBvZmYgb2YgdGhlIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IHNlcGFyYXRlZFZhbHVlWzFdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFBhcnNlIGZsb2F0IHZhbHVlcyBmcm9tIGVuZFZhbHVlIGFuZCBzdGFydFZhbHVlLiBEZWZhdWx0IHRvIDAgaWYgTmFOIGlzIHJldHVybmVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgfHwgMDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0XHQgUHJvcGVydHktU3BlY2lmaWMgVmFsdWUgQ29udmVyc2lvblxyXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBDdXN0b20gc3VwcG9ydCBmb3IgcHJvcGVydGllcyB0aGF0IGRvbid0IGFjdHVhbGx5IGFjY2VwdCB0aGUgJSB1bml0IHR5cGUsIGJ1dCB3aGVyZSBwb2xseWZpbGxpbmcgaXMgdHJpdmlhbCBhbmQgcmVsYXRpdmVseSBmb29scHJvb2YuICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZW5kVmFsdWVVbml0VHlwZSA9PT0gXCIlXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogQSAlLXZhbHVlIGZvbnRTaXplL2xpbmVIZWlnaHQgaXMgcmVsYXRpdmUgdG8gdGhlIHBhcmVudCdzIGZvbnRTaXplIChhcyBvcHBvc2VkIHRvIHRoZSBwYXJlbnQncyBkaW1lbnNpb25zKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHdoaWNoIGlzIGlkZW50aWNhbCB0byB0aGUgZW0gdW5pdCdzIGJlaGF2aW9yLCBzbyB3ZSBwaWdneWJhY2sgb2ZmIG9mIHRoYXQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3QocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCAlIGludG8gYW4gZW0gZGVjaW1hbCB2YWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IGVuZFZhbHVlIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBcImVtXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRm9yIHNjYWxlWCBhbmQgc2NhbGVZLCBjb252ZXJ0IHRoZSB2YWx1ZSBpbnRvIGl0cyBkZWNpbWFsIGZvcm1hdCBhbmQgc3RyaXAgb2ZmIHRoZSB1bml0IHR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15zY2FsZS8udGVzdChwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IGVuZFZhbHVlIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEZvciBSR0IgY29tcG9uZW50cywgdGFrZSB0aGUgZGVmaW5lZCBwZXJjZW50YWdlIG9mIDI1NSBhbmQgc3RyaXAgb2ZmIHRoZSB1bml0IHR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoLyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdChwcm9wZXJ0eSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IChlbmRWYWx1ZSAvIDEwMCkgKiAyNTU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHQgVW5pdCBSYXRpbyBDYWxjdWxhdGlvblxyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIFdoZW4gcXVlcmllZCwgdGhlIGJyb3dzZXIgcmV0dXJucyAobW9zdCkgQ1NTIHByb3BlcnR5IHZhbHVlcyBpbiBwaXhlbHMuIFRoZXJlZm9yZSwgaWYgYW4gZW5kVmFsdWUgd2l0aCBhIHVuaXQgdHlwZSBvZlxyXG5cdFx0XHRcdFx0XHRcdCAlLCBlbSwgb3IgcmVtIGlzIGFuaW1hdGVkIHRvd2FyZCwgc3RhcnRWYWx1ZSBtdXN0IGJlIGNvbnZlcnRlZCBmcm9tIHBpeGVscyBpbnRvIHRoZSBzYW1lIHVuaXQgdHlwZSBhcyBlbmRWYWx1ZSBpbiBvcmRlclxyXG5cdFx0XHRcdFx0XHRcdCBmb3IgdmFsdWUgbWFuaXB1bGF0aW9uIGxvZ2ljIChpbmNyZW1lbnQvZGVjcmVtZW50KSB0byBwcm9jZWVkLiBGdXJ0aGVyLCBpZiB0aGUgc3RhcnRWYWx1ZSB3YXMgZm9yY2VmZWQgb3IgdHJhbnNmZXJyZWRcclxuXHRcdFx0XHRcdFx0XHQgZnJvbSBhIHByZXZpb3VzIGNhbGwsIHN0YXJ0VmFsdWUgbWF5IGFsc28gbm90IGJlIGluIHBpeGVscy4gVW5pdCBjb252ZXJzaW9uIGxvZ2ljIHRoZXJlZm9yZSBjb25zaXN0cyBvZiB0d28gc3RlcHM6XHJcblx0XHRcdFx0XHRcdFx0IDEpIENhbGN1bGF0aW5nIHRoZSByYXRpbyBvZiAlL2VtL3JlbS92aC92dyByZWxhdGl2ZSB0byBwaXhlbHNcclxuXHRcdFx0XHRcdFx0XHQgMikgQ29udmVydGluZyBzdGFydFZhbHVlIGludG8gdGhlIHNhbWUgdW5pdCBvZiBtZWFzdXJlbWVudCBhcyBlbmRWYWx1ZSBiYXNlZCBvbiB0aGVzZSByYXRpb3MuICovXHJcblx0XHRcdFx0XHRcdFx0LyogVW5pdCBjb252ZXJzaW9uIHJhdGlvcyBhcmUgY2FsY3VsYXRlZCBieSBpbnNlcnRpbmcgYSBzaWJsaW5nIG5vZGUgbmV4dCB0byB0aGUgdGFyZ2V0IG5vZGUsIGNvcHlpbmcgb3ZlciBpdHMgcG9zaXRpb24gcHJvcGVydHksXHJcblx0XHRcdFx0XHRcdFx0IHNldHRpbmcgdmFsdWVzIHdpdGggdGhlIHRhcmdldCB1bml0IHR5cGUgdGhlbiBjb21wYXJpbmcgdGhlIHJldHVybmVkIHBpeGVsIHZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IEV2ZW4gaWYgb25seSBvbmUgb2YgdGhlc2UgdW5pdCB0eXBlcyBpcyBiZWluZyBhbmltYXRlZCwgYWxsIHVuaXQgcmF0aW9zIGFyZSBjYWxjdWxhdGVkIGF0IG9uY2Ugc2luY2UgdGhlIG92ZXJoZWFkXHJcblx0XHRcdFx0XHRcdFx0IG9mIGJhdGNoaW5nIHRoZSBTRVRzIGFuZCBHRVRzIHRvZ2V0aGVyIHVwZnJvbnQgb3V0d2VpZ2h0cyB0aGUgcG90ZW50aWFsIG92ZXJoZWFkXHJcblx0XHRcdFx0XHRcdFx0IG9mIGxheW91dCB0aHJhc2hpbmcgY2F1c2VkIGJ5IHJlLXF1ZXJ5aW5nIGZvciB1bmNhbGN1bGF0ZWQgcmF0aW9zIGZvciBzdWJzZXF1ZW50bHktcHJvY2Vzc2VkIHByb3BlcnRpZXMuICovXHJcblx0XHRcdFx0XHRcdFx0LyogVG9kbzogU2hpZnQgdGhpcyBsb2dpYyBpbnRvIHRoZSBjYWxscycgZmlyc3QgdGljayBpbnN0YW5jZSBzbyB0aGF0IGl0J3Mgc3luY2VkIHdpdGggUkFGLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjYWxjdWxhdGVVbml0UmF0aW9zID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0IFNhbWUgUmF0aW8gQ2hlY2tzXHJcblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBwcm9wZXJ0aWVzIGJlbG93IGFyZSB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBlbGVtZW50IGRpZmZlcnMgc3VmZmljaWVudGx5IGZyb20gdGhpcyBjYWxsJ3NcclxuXHRcdFx0XHRcdFx0XHRcdCBwcmV2aW91c2x5IGl0ZXJhdGVkIGVsZW1lbnQgdG8gYWxzbyBkaWZmZXIgaW4gaXRzIHVuaXQgY29udmVyc2lvbiByYXRpb3MuIElmIHRoZSBwcm9wZXJ0aWVzIG1hdGNoIHVwIHdpdGggdGhvc2VcclxuXHRcdFx0XHRcdFx0XHRcdCBvZiB0aGUgcHJpb3IgZWxlbWVudCwgdGhlIHByaW9yIGVsZW1lbnQncyBjb252ZXJzaW9uIHJhdGlvcyBhcmUgdXNlZC4gTGlrZSBtb3N0IG9wdGltaXphdGlvbnMgaW4gVmVsb2NpdHksXHJcblx0XHRcdFx0XHRcdFx0XHQgdGhpcyBpcyBkb25lIHRvIG1pbmltaXplIERPTSBxdWVyeWluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHZhciBzYW1lUmF0aW9JbmRpY2F0b3JzID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRteVBhcmVudDogZWxlbWVudC5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHksIC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJwb3NpdGlvblwiKSwgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImZvbnRTaXplXCIpIC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBEZXRlcm1pbmUgaWYgdGhlIHNhbWUgJSByYXRpbyBjYW4gYmUgdXNlZC4gJSBpcyBiYXNlZCBvbiB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHZhbHVlIGFuZCBpdHMgcGFyZW50J3Mgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNhbWVQZXJjZW50UmF0aW8gPSAoKHNhbWVSYXRpb0luZGljYXRvcnMucG9zaXRpb24gPT09IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBvc2l0aW9uKSAmJiAoc2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudCA9PT0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGFyZW50KSksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRGV0ZXJtaW5lIGlmIHRoZSBzYW1lIGVtIHJhdGlvIGNhbiBiZSB1c2VkLiBlbSBpcyByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCdzIGZvbnRTaXplLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNhbWVFbVJhdGlvID0gKHNhbWVSYXRpb0luZGljYXRvcnMuZm9udFNpemUgPT09IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdEZvbnRTaXplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBTdG9yZSB0aGVzZSByYXRpbyBpbmRpY2F0b3JzIGNhbGwtd2lkZSBmb3IgdGhlIG5leHQgZWxlbWVudCB0byBjb21wYXJlIGFnYWluc3QuICovXHJcblx0XHRcdFx0XHRcdFx0XHRjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQYXJlbnQgPSBzYW1lUmF0aW9JbmRpY2F0b3JzLm15UGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UG9zaXRpb24gPSBzYW1lUmF0aW9JbmRpY2F0b3JzLnBvc2l0aW9uO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0Rm9udFNpemUgPSBzYW1lUmF0aW9JbmRpY2F0b3JzLmZvbnRTaXplO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdCBFbGVtZW50LVNwZWNpZmljIFVuaXRzXHJcblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IElFOCByb3VuZHMgdG8gdGhlIG5lYXJlc3QgcGl4ZWwgd2hlbiByZXR1cm5pbmcgQ1NTIHZhbHVlcywgdGh1cyB3ZSBwZXJmb3JtIGNvbnZlcnNpb25zIHVzaW5nIGEgbWVhc3VyZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdCBvZiAxMDAgKGluc3RlYWQgb2YgMSkgdG8gZ2l2ZSBvdXIgcmF0aW9zIGEgcHJlY2lzaW9uIG9mIGF0IGxlYXN0IDIgZGVjaW1hbCB2YWx1ZXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWVhc3VyZW1lbnQgPSAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc2FtZUVtUmF0aW8gfHwgIXNhbWVQZXJjZW50UmF0aW8pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGR1bW15ID0gZGF0YSAmJiBkYXRhLmlzU1ZHID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LmluaXQoZHVtbXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzYW1lUmF0aW9JbmRpY2F0b3JzLm15UGFyZW50LmFwcGVuZENoaWxkKGR1bW15KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFRvIGFjY3VyYXRlbHkgYW5kIGNvbnNpc3RlbnRseSBjYWxjdWxhdGUgY29udmVyc2lvbiByYXRpb3MsIHRoZSBlbGVtZW50J3MgY2FzY2FkZWQgb3ZlcmZsb3cgYW5kIGJveC1zaXppbmcgYXJlIHN0cmlwcGVkLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgU2ltaWxhcmx5LCBzaW5jZSB3aWR0aC9oZWlnaHQgY2FuIGJlIGFydGlmaWNpYWxseSBjb25zdHJhaW5lZCBieSB0aGVpciBtaW4tL21heC0gZXF1aXZhbGVudHMsIHRoZXNlIGFyZSBjb250cm9sbGVkIGZvciBhcyB3ZWxsLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBPdmVyZmxvdyBtdXN0IGJlIGFsc28gYmUgY29udHJvbGxlZCBmb3IgcGVyLWF4aXMgc2luY2UgdGhlIG92ZXJmbG93IHByb3BlcnR5IG92ZXJ3cml0ZXMgaXRzIHBlci1heGlzIHZhbHVlcy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0JC5lYWNoKFtcIm92ZXJmbG93XCIsIFwib3ZlcmZsb3dYXCIsIFwib3ZlcmZsb3dZXCJdLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBwcm9wZXJ0eSwgXCJoaWRkZW5cIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJwb3NpdGlvblwiLCBzYW1lUmF0aW9JbmRpY2F0b3JzLnBvc2l0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuQ1NTLnNldFByb3BlcnR5VmFsdWUoZHVtbXksIFwiZm9udFNpemVcIiwgc2FtZVJhdGlvSW5kaWNhdG9ycy5mb250U2l6ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcImJveFNpemluZ1wiLCBcImNvbnRlbnQtYm94XCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lyogd2lkdGggYW5kIGhlaWdodCBhY3QgYXMgb3VyIHByb3h5IHByb3BlcnRpZXMgZm9yIG1lYXN1cmluZyB0aGUgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgJSByYXRpb3MuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdCQuZWFjaChbXCJtaW5XaWR0aFwiLCBcIm1heFdpZHRoXCIsIFwid2lkdGhcIiwgXCJtaW5IZWlnaHRcIiwgXCJtYXhIZWlnaHRcIiwgXCJoZWlnaHRcIl0sIGZ1bmN0aW9uKGksIHByb3BlcnR5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuQ1NTLnNldFByb3BlcnR5VmFsdWUoZHVtbXksIHByb3BlcnR5LCBtZWFzdXJlbWVudCArIFwiJVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIHBhZGRpbmdMZWZ0IGFyYml0cmFyaWx5IGFjdHMgYXMgb3VyIHByb3h5IHByb3BlcnR5IGZvciB0aGUgZW0gcmF0aW8uICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcInBhZGRpbmdMZWZ0XCIsIG1lYXN1cmVtZW50ICsgXCJlbVwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIERpdmlkZSB0aGUgcmV0dXJuZWQgdmFsdWUgYnkgdGhlIG1lYXN1cmVtZW50IHRvIGdldCB0aGUgcmF0aW8gYmV0d2VlbiAxJSBhbmQgMXB4LiBEZWZhdWx0IHRvIDEgc2luY2Ugd29ya2luZyB3aXRoIDAgY2FuIHByb2R1Y2UgSW5maW5pdGUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhXaWR0aCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBlcmNlbnRUb1B4V2lkdGggPSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJ3aWR0aFwiLCBudWxsLCB0cnVlKSkgfHwgMSkgLyBtZWFzdXJlbWVudDsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhIZWlnaHQgPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQZXJjZW50VG9QeEhlaWdodCA9IChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcImhlaWdodFwiLCBudWxsLCB0cnVlKSkgfHwgMSkgLyBtZWFzdXJlbWVudDsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MuZW1Ub1B4ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0RW1Ub1B4ID0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZHVtbXksIFwicGFkZGluZ0xlZnRcIikpIHx8IDEpIC8gbWVhc3VyZW1lbnQ7IC8qIEdFVCAqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudC5yZW1vdmVDaGlsZChkdW1teSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLmVtVG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdEVtVG9QeDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5wZXJjZW50VG9QeFdpZHRoID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGVyY2VudFRvUHhXaWR0aDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5wZXJjZW50VG9QeEhlaWdodCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdFBlcmNlbnRUb1B4SGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdCBFbGVtZW50LUFnbm9zdGljIFVuaXRzXHJcblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qIFdoZXJlYXMgJSBhbmQgZW0gcmF0aW9zIGFyZSBkZXRlcm1pbmVkIG9uIGEgcGVyLWVsZW1lbnQgYmFzaXMsIHRoZSByZW0gdW5pdCBvbmx5IG5lZWRzIHRvIGJlIGNoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdCBvbmNlIHBlciBjYWxsIHNpbmNlIGl0J3MgZXhjbHVzaXZlbHkgZGVwZW5kYW50IHVwb24gZG9jdW1lbnQuYm9keSdzIGZvbnRTaXplLiBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXHJcblx0XHRcdFx0XHRcdFx0XHQgdGhhdCBjYWxjdWxhdGVVbml0UmF0aW9zKCkgaXMgYmVpbmcgcnVuIGR1cmluZyB0aGlzIGNhbGwsIHJlbVRvUHggd2lsbCBzdGlsbCBiZSBzZXQgdG8gaXRzIGRlZmF1bHQgdmFsdWUgb2YgbnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdCBzbyB3ZSBjYWxjdWxhdGUgaXQgbm93LiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxVbml0Q29udmVyc2lvbkRhdGEucmVtVG9QeCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBEZWZhdWx0IHRvIGJyb3dzZXJzJyBkZWZhdWx0IGZvbnRTaXplIG9mIDE2cHggaW4gdGhlIGNhc2Ugb2YgMC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5yZW1Ub1B4ID0gcGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShkb2N1bWVudC5ib2R5LCBcImZvbnRTaXplXCIpKSB8fCAxNjsgLyogR0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogU2ltaWxhcmx5LCB2aWV3cG9ydCB1bml0cyBhcmUgJS1yZWxhdGl2ZSB0byB0aGUgd2luZG93J3MgaW5uZXIgZGltZW5zaW9ucy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZ3VG9QeCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZ3VG9QeCA9IHBhcnNlRmxvYXQod2luZG93LmlubmVyV2lkdGgpIC8gMTAwOyAvKiBHRVQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS52aFRvUHggPSBwYXJzZUZsb2F0KHdpbmRvdy5pbm5lckhlaWdodCkgLyAxMDA7IC8qIEdFVCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucmVtVG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEucmVtVG9QeDtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MudndUb1B4ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS52d1RvUHg7XHJcblx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLnZoVG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEudmhUb1B4O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1ZyA+PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiICsgSlNPTi5zdHJpbmdpZnkodW5pdFJhdGlvcyksIGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaXRSYXRpb3M7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IFVuaXQgQ29udmVyc2lvblxyXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogVGhlICogYW5kIC8gb3BlcmF0b3JzLCB3aGljaCBhcmUgbm90IHBhc3NlZCBpbiB3aXRoIGFuIGFzc29jaWF0ZWQgdW5pdCwgaW5oZXJlbnRseSB1c2Ugc3RhcnRWYWx1ZSdzIHVuaXQuIFNraXAgdmFsdWUgYW5kIHVuaXQgY29udmVyc2lvbi4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAoL1tcXC8qXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzdGFydFZhbHVlVW5pdFR5cGU7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBJZiBzdGFydFZhbHVlIGFuZCBlbmRWYWx1ZSBkaWZmZXIgaW4gdW5pdCB0eXBlLCBjb252ZXJ0IHN0YXJ0VmFsdWUgaW50byB0aGUgc2FtZSB1bml0IHR5cGUgYXMgZW5kVmFsdWUgc28gdGhhdCBpZiBlbmRWYWx1ZVVuaXRUeXBlXHJcblx0XHRcdFx0XHRcdFx0XHQgaXMgYSByZWxhdGl2ZSB1bml0ICglLCBlbSwgcmVtKSwgdGhlIHZhbHVlcyBzZXQgZHVyaW5nIHR3ZWVuaW5nIHdpbGwgY29udGludWUgdG8gYmUgYWNjdXJhdGVseSByZWxhdGl2ZSBldmVuIGlmIHRoZSBtZXRyaWNzIHRoZXkgZGVwZW5kXHJcblx0XHRcdFx0XHRcdFx0XHQgb24gYXJlIGR5bmFtaWNhbGx5IGNoYW5naW5nIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBhbmltYXRpb24uIENvbnZlcnNlbHksIGlmIHdlIGFsd2F5cyBub3JtYWxpemVkIGludG8gcHggYW5kIHVzZWQgcHggZm9yIHNldHRpbmcgdmFsdWVzLCB0aGUgcHggcmF0aW9cclxuXHRcdFx0XHRcdFx0XHRcdCB3b3VsZCBiZWNvbWUgc3RhbGUgaWYgdGhlIG9yaWdpbmFsIHVuaXQgYmVpbmcgYW5pbWF0ZWQgdG93YXJkIHdhcyByZWxhdGl2ZSBhbmQgdGhlIHVuZGVybHlpbmcgbWV0cmljcyBjaGFuZ2UgZHVyaW5nIHRoZSBhbmltYXRpb24uICovXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBTaW5jZSAwIGlzIDAgaW4gYW55IHVuaXQgdHlwZSwgbm8gY29udmVyc2lvbiBpcyBuZWNlc3Nhcnkgd2hlbiBzdGFydFZhbHVlIGlzIDAgLS0gd2UganVzdCBzdGFydCBhdCAwIHdpdGggZW5kVmFsdWVVbml0VHlwZS4gKi9cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChzdGFydFZhbHVlVW5pdFR5cGUgIT09IGVuZFZhbHVlVW5pdFR5cGUpICYmIHN0YXJ0VmFsdWUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIFVuaXQgY29udmVyc2lvbiBpcyBhbHNvIHNraXBwZWQgd2hlbiBlbmRWYWx1ZSBpcyAwLCBidXQgKnN0YXJ0VmFsdWVVbml0VHlwZSogbXVzdCBiZSB1c2VkIGZvciB0d2VlbiB2YWx1ZXMgdG8gcmVtYWluIGFjY3VyYXRlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogU2tpcHBpbmcgdW5pdCBjb252ZXJzaW9uIGhlcmUgbWVhbnMgdGhhdCBpZiBlbmRWYWx1ZVVuaXRUeXBlIHdhcyBvcmlnaW5hbGx5IGEgcmVsYXRpdmUgdW5pdCwgdGhlIGFuaW1hdGlvbiB3b24ndCByZWxhdGl2ZWx5XHJcblx0XHRcdFx0XHRcdFx0XHQgbWF0Y2ggdGhlIHVuZGVybHlpbmcgbWV0cmljcyBpZiB0aGV5IGNoYW5nZSwgYnV0IHRoaXMgaXMgYWNjZXB0YWJsZSBzaW5jZSB3ZSdyZSBhbmltYXRpbmcgdG93YXJkIGludmlzaWJpbGl0eSBpbnN0ZWFkIG9mIHRvd2FyZCB2aXNpYmlsaXR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0IHdoaWNoIHJlbWFpbnMgcGFzdCB0aGUgcG9pbnQgb2YgdGhlIGFuaW1hdGlvbidzIGNvbXBsZXRpb24uICovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZW5kVmFsdWUgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IHN0YXJ0VmFsdWVVbml0VHlwZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIEJ5IHRoaXMgcG9pbnQsIHdlIGNhbm5vdCBhdm9pZCB1bml0IGNvbnZlcnNpb24gKGl0J3MgdW5kZXNpcmFibGUgc2luY2UgaXQgY2F1c2VzIGxheW91dCB0aHJhc2hpbmcpLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgSWYgd2UgaGF2ZW4ndCBhbHJlYWR5LCB3ZSB0cmlnZ2VyIGNhbGN1bGF0ZVVuaXRSYXRpb3MoKSwgd2hpY2ggcnVucyBvbmNlIHBlciBlbGVtZW50IHBlciBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhID0gZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YSB8fCBjYWxjdWxhdGVVbml0UmF0aW9zKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgZm9sbG93aW5nIFJlZ0V4IG1hdGNoZXMgQ1NTIHByb3BlcnRpZXMgdGhhdCBoYXZlIHRoZWlyICUgdmFsdWVzIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSB4LWF4aXMuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFczQyBzcGVjIG1hbmRhdGVzIHRoYXQgYWxsIG9mIG1hcmdpbiBhbmQgcGFkZGluZydzIHByb3BlcnRpZXMgKGV2ZW4gdG9wIGFuZCBib3R0b20pIGFyZSAlLXJlbGF0aXZlIHRvIHRoZSAqd2lkdGgqIG9mIHRoZSBwYXJlbnQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGF4aXMgPSAoL21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3QocHJvcGVydHkpIHx8IC9YJC8udGVzdChwcm9wZXJ0eSkgfHwgcHJvcGVydHkgPT09IFwieFwiKSA/IFwieFwiIDogXCJ5XCI7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJbiBvcmRlciB0byBhdm9pZCBnZW5lcmF0aW5nIG5eMiBiZXNwb2tlIGNvbnZlcnNpb24gZnVuY3Rpb25zLCB1bml0IGNvbnZlcnNpb24gaXMgYSB0d28tc3RlcCBwcm9jZXNzOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgMSkgQ29udmVydCBzdGFydFZhbHVlIGludG8gcGl4ZWxzLiAyKSBDb252ZXJ0IHRoaXMgbmV3IHBpeGVsIHZhbHVlIGludG8gZW5kVmFsdWUncyB1bml0IHR5cGUuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoc3RhcnRWYWx1ZVVuaXRUeXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIiVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IHRyYW5zbGF0ZVggYW5kIHRyYW5zbGF0ZVkgYXJlIHRoZSBvbmx5IHByb3BlcnRpZXMgdGhhdCBhcmUgJS1yZWxhdGl2ZSB0byBhbiBlbGVtZW50J3Mgb3duIGRpbWVuc2lvbnMgLS0gbm90IGl0cyBwYXJlbnQncyBkaW1lbnNpb25zLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFZlbG9jaXR5IGRvZXMgbm90IGluY2x1ZGUgYSBzcGVjaWFsIGNvbnZlcnNpb24gcHJvY2VzcyB0byBhY2NvdW50IGZvciB0aGlzIGJlaGF2aW9yLiBUaGVyZWZvcmUsIGFuaW1hdGluZyB0cmFuc2xhdGVYL1kgZnJvbSBhICUgdmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB0byBhIG5vbi0lIHZhbHVlIHdpbGwgcHJvZHVjZSBhbiBpbmNvcnJlY3Qgc3RhcnQgdmFsdWUuIEZvcnR1bmF0ZWx5LCB0aGlzIHNvcnQgb2YgY3Jvc3MtdW5pdCBjb252ZXJzaW9uIGlzIHJhcmVseSBkb25lIGJ5IHVzZXJzIGluIHByYWN0aWNlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSAqPSAoYXhpcyA9PT0gXCJ4XCIgPyBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4V2lkdGggOiBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4SGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwicHhcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIHB4IGFjdHMgYXMgb3VyIG1pZHBvaW50IGluIHRoZSB1bml0IGNvbnZlcnNpb24gcHJvY2VzczsgZG8gbm90aGluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSAqPSBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhW3N0YXJ0VmFsdWVVbml0VHlwZSArIFwiVG9QeFwiXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogSW52ZXJ0IHRoZSBweCByYXRpb3MgdG8gY29udmVydCBpbnRvIHRvIHRoZSB0YXJnZXQgdW5pdC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbmRWYWx1ZVVuaXRUeXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIiVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgKj0gMSAvIChheGlzID09PSBcInhcIiA/IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEucGVyY2VudFRvUHhXaWR0aCA6IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEucGVyY2VudFRvUHhIZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJweFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lyogc3RhcnRWYWx1ZSBpcyBhbHJlYWR5IGluIHB4LCBkbyBub3RoaW5nOyB3ZSdyZSBkb25lLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlICo9IDEgLyBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhW2VuZFZhbHVlVW5pdFR5cGUgKyBcIlRvUHhcIl07XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHQgUmVsYXRpdmUgVmFsdWVzXHJcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHRcdFx0LyogT3BlcmF0b3IgbG9naWMgbXVzdCBiZSBwZXJmb3JtZWQgbGFzdCBzaW5jZSBpdCByZXF1aXJlcyB1bml0LW5vcm1hbGl6ZWQgc3RhcnQgYW5kIGVuZCB2YWx1ZXMuICovXHJcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogUmVsYXRpdmUgKnBlcmNlbnQgdmFsdWVzKiBkbyBub3QgYmVoYXZlIGhvdyBtb3N0IHBlb3BsZSB0aGluazsgd2hpbGUgb25lIHdvdWxkIGV4cGVjdCBcIis9NTAlXCJcclxuXHRcdFx0XHRcdFx0XHQgdG8gaW5jcmVhc2UgdGhlIHByb3BlcnR5IDEuNXggaXRzIGN1cnJlbnQgdmFsdWUsIGl0IGluIGZhY3QgaW5jcmVhc2VzIHRoZSBwZXJjZW50IHVuaXRzIGluIGFic29sdXRlIHRlcm1zOlxyXG5cdFx0XHRcdFx0XHRcdCA1MCBwb2ludHMgaXMgYWRkZWQgb24gdG9wIG9mIHRoZSBjdXJyZW50ICUgdmFsdWUuICovXHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChvcGVyYXRvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIitcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzdGFydFZhbHVlICsgZW5kVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCItXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gc3RhcnRWYWx1ZSAtIGVuZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiKlwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHN0YXJ0VmFsdWUgKiBlbmRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIi9cIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzdGFydFZhbHVlIC8gZW5kVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0IHR3ZWVuc0NvbnRhaW5lciBQdXNoXHJcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBDb25zdHJ1Y3QgdGhlIHBlci1wcm9wZXJ0eSB0d2VlbiBvYmplY3QsIGFuZCBwdXNoIGl0IHRvIHRoZSBlbGVtZW50J3MgdHdlZW5zQ29udGFpbmVyLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZTogcm9vdFByb3BlcnR5VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlOiBzdGFydFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlOiBzdGFydFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWU6IGVuZFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pdFR5cGU6IGVuZFZhbHVlVW5pdFR5cGUsXHJcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6IGVhc2luZ1xyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhdHRlcm4pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0ucGF0dGVybiA9IHBhdHRlcm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChcIiArIHByb3BlcnR5ICsgXCIpOiBcIiArIEpTT04uc3RyaW5naWZ5KHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0pLCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBDcmVhdGUgYSB0d2VlbiBvdXQgb2YgZWFjaCBwcm9wZXJ0eSwgYW5kIGFwcGVuZCBpdHMgYXNzb2NpYXRlZCBkYXRhIHRvIHR3ZWVuc0NvbnRhaW5lci4gKi9cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllc01hcCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXByb3BlcnRpZXNNYXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0LyogVGhlIG9yaWdpbmFsIHByb3BlcnR5IG5hbWUncyBmb3JtYXQgbXVzdCBiZSB1c2VkIGZvciB0aGUgcGFyc2VQcm9wZXJ0eVZhbHVlKCkgbG9va3VwLFxyXG5cdFx0XHRcdFx0XHRcdCBidXQgd2UgdGhlbiB1c2UgaXRzIGNhbWVsQ2FzZSBzdHlsaW5nIHRvIG5vcm1hbGl6ZSBpdCBmb3IgbWFuaXB1bGF0aW9uLiAqL1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eU5hbWUgPSBDU1MuTmFtZXMuY2FtZWxDYXNlKHByb3BlcnR5KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVEYXRhID0gcGFyc2VQcm9wZXJ0eVZhbHVlKHByb3BlcnRpZXNNYXBbcHJvcGVydHldKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0LyogRmluZCBzaG9ydGhhbmQgY29sb3IgcHJvcGVydGllcyB0aGF0IGhhdmUgYmVlbiBwYXNzZWQgYSBoZXggc3RyaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIFdvdWxkIGJlIHF1aWNrZXIgdG8gdXNlIENTUy5MaXN0cy5jb2xvcnMuaW5jbHVkZXMoKSBpZiBwb3NzaWJsZSAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChfaW5BcnJheShDU1MuTGlzdHMuY29sb3JzLCBwcm9wZXJ0eU5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKiBQYXJzZSB0aGUgdmFsdWUgZGF0YSBmb3IgZWFjaCBzaG9ydGhhbmQuICovXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZW5kVmFsdWUgPSB2YWx1ZURhdGFbMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nID0gdmFsdWVEYXRhWzFdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMl07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5SZWdFeC5pc0hleC50ZXN0KGVuZFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDb252ZXJ0IHRoZSBoZXggc3RyaW5ncyBpbnRvIHRoZWlyIFJHQiBjb21wb25lbnQgYXJyYXlzLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY29sb3JDb21wb25lbnRzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCJdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVSR0IgPSBDU1MuVmFsdWVzLmhleFRvUmdiKGVuZFZhbHVlKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWVSR0IgPSBzdGFydFZhbHVlID8gQ1NTLlZhbHVlcy5oZXhUb1JnYihzdGFydFZhbHVlKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIEluamVjdCB0aGUgUkdCIGNvbXBvbmVudCB0d2VlbnMgaW50byBwcm9wZXJ0aWVzTWFwLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkYXRhQXJyYXkgPSBbZW5kVmFsdWVSR0JbaV1dO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZWFzaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhQXJyYXkucHVzaChlYXNpbmcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHN0YXJ0VmFsdWVSR0IgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUFycmF5LnB1c2goc3RhcnRWYWx1ZVJHQltpXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaXhQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSArIGNvbG9yQ29tcG9uZW50c1tpXSwgZGF0YUFycmF5KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB3ZSBoYXZlIHJlcGxhY2VkIGEgc2hvcnRjdXQgY29sb3IgdmFsdWUgdGhlbiBkb24ndCB1cGRhdGUgdGhlIHN0YW5kYXJkIHByb3BlcnR5IG5hbWUgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGZpeFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCB2YWx1ZURhdGEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBBbG9uZyB3aXRoIGl0cyBwcm9wZXJ0eSBkYXRhLCBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdHNlbGYgb250byB0d2VlbnNDb250YWluZXIuICovXHJcblx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lci5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBDYWxsIFB1c2hcclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0XHQvKiBOb3RlOiB0d2VlbnNDb250YWluZXIgY2FuIGJlIGVtcHR5IGlmIGFsbCBvZiB0aGUgcHJvcGVydGllcyBpbiB0aGlzIGNhbGwncyBwcm9wZXJ0eSBtYXAgd2VyZSBza2lwcGVkIGR1ZSB0byBub3RcclxuXHRcdFx0XHRcdCBiZWluZyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuIFRoZSBlbGVtZW50IHByb3BlcnR5IGlzIHVzZWQgZm9yIGNoZWNraW5nIHRoYXQgdGhlIHR3ZWVuc0NvbnRhaW5lciBoYXMgYmVlbiBhcHBlbmRlZCB0by4gKi9cclxuXHRcdFx0XHRcdGlmICh0d2VlbnNDb250YWluZXIuZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHQvKiBBcHBseSB0aGUgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiBpbmRpY2F0b3IgY2xhc3MuICovXHJcblx0XHRcdFx0XHRcdENTUy5WYWx1ZXMuYWRkQ2xhc3MoZWxlbWVudCwgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIik7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBUaGUgY2FsbCBhcnJheSBob3VzZXMgdGhlIHR3ZWVuc0NvbnRhaW5lcnMgZm9yIGVhY2ggZWxlbWVudCBiZWluZyBhbmltYXRlZCBpbiB0aGUgY3VycmVudCBjYWxsLiAqL1xyXG5cdFx0XHRcdFx0XHRjYWxsLnB1c2godHdlZW5zQ29udGFpbmVyKTtcclxuXHJcblx0XHRcdFx0XHRcdGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBTdG9yZSB0aGUgdHdlZW5zQ29udGFpbmVyIGFuZCBvcHRpb25zIGlmIHdlJ3JlIHdvcmtpbmcgb24gdGhlIGRlZmF1bHQgZWZmZWN0cyBxdWV1ZSwgc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIGJ5IHRoZSByZXZlcnNlIGNvbW1hbmQuICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMucXVldWUgPT09IFwiXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnR3ZWVuc0NvbnRhaW5lciA9IHR3ZWVuc0NvbnRhaW5lcjtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEub3B0cyA9IG9wdHM7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBTd2l0Y2ggb24gdGhlIGVsZW1lbnQncyBhbmltYXRpbmcgZmxhZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRkYXRhLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogT25jZSB0aGUgZmluYWwgZWxlbWVudCBpbiB0aGlzIGNhbGwncyBlbGVtZW50IHNldCBoYXMgYmVlbiBwcm9jZXNzZWQsIHB1c2ggdGhlIGNhbGwgYXJyYXkgb250b1xyXG5cdFx0XHRcdFx0XHQgVmVsb2NpdHkuU3RhdGUuY2FsbHMgZm9yIHRoZSBhbmltYXRpb24gdGljayB0byBpbW1lZGlhdGVseSBiZWdpbiBwcm9jZXNzaW5nLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCA9PT0gZWxlbWVudHNMZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0LyogQWRkIHRoZSBjdXJyZW50IGNhbGwgcGx1cyBpdHMgYXNzb2NpYXRlZCBtZXRhZGF0YSAodGhlIGVsZW1lbnQgc2V0IGFuZCB0aGUgY2FsbCdzIG9wdGlvbnMpIG9udG8gdGhlIGdsb2JhbCBjYWxsIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdFx0XHQgQW55dGhpbmcgb24gdGhpcyBjYWxsIGNvbnRhaW5lciBpcyBzdWJqZWN0ZWQgdG8gdGljaygpIHByb2Nlc3NpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHMucHVzaChbY2FsbCwgZWxlbWVudHMsIG9wdHMsIG51bGwsIHByb21pc2VEYXRhLnJlc29sdmVyLCBudWxsLCAwXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBhbmltYXRpb24gdGljayBpc24ndCBydW5uaW5nLCBzdGFydCBpdC4gKFZlbG9jaXR5IHNodXRzIGl0IG9mZiB3aGVuIHRoZXJlIGFyZSBubyBhY3RpdmUgY2FsbHMgdG8gcHJvY2Vzcy4pICovXHJcblx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LlN0YXRlLmlzVGlja2luZyA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmlzVGlja2luZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogU3RhcnQgdGhlIHRpY2sgbG9vcC4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdHRpY2soKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudHNJbmRleCsrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKiBXaGVuIHRoZSBxdWV1ZSBvcHRpb24gaXMgc2V0IHRvIGZhbHNlLCB0aGUgY2FsbCBza2lwcyB0aGUgZWxlbWVudCdzIHF1ZXVlIGFuZCBmaXJlcyBpbW1lZGlhdGVseS4gKi9cclxuXHRcdFx0XHRpZiAob3B0cy5xdWV1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdC8qIFNpbmNlIHRoaXMgYnVpbGRRdWV1ZSBjYWxsIGRvZXNuJ3QgcmVzcGVjdCB0aGUgZWxlbWVudCdzIGV4aXN0aW5nIHF1ZXVlICh3aGljaCBpcyB3aGVyZSBhIGRlbGF5IG9wdGlvbiB3b3VsZCBoYXZlIGJlZW4gYXBwZW5kZWQpLFxyXG5cdFx0XHRcdFx0IHdlIG1hbnVhbGx5IGluamVjdCB0aGUgZGVsYXkgcHJvcGVydHkgaGVyZSB3aXRoIGFuIGV4cGxpY2l0IHNldFRpbWVvdXQuICovXHJcblx0XHRcdFx0XHRpZiAob3B0cy5kZWxheSkge1xyXG5cclxuXHRcdFx0XHRcdFx0LyogVGVtcG9yYXJpbHkgc3RvcmUgZGVsYXllZCBlbGVtZW50cyB0byBmYWNpbGl0YXRlIGFjY2VzcyBmb3IgZ2xvYmFsIHBhdXNlL3Jlc3VtZSAqL1xyXG5cdFx0XHRcdFx0XHR2YXIgY2FsbEluZGV4ID0gVmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzLmNvdW50Kys7XHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50c1tjYWxsSW5kZXhdID0gZWxlbWVudDtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBkZWxheUNvbXBsZXRlID0gKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xlYXIgdGhlIHRlbXBvcmFyeSBlbGVtZW50ICovXHJcblx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHNbaW5kZXhdID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0LyogRmluYWxseSwgaXNzdWUgdGhlIGNhbGwgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGJ1aWxkUXVldWUoKTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9KShjYWxsSW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheUJlZ2luID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheSA9IHBhcnNlRmxvYXQob3B0cy5kZWxheSk7XHJcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlUaW1lciA9IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0OiBzZXRUaW1lb3V0KGJ1aWxkUXVldWUsIHBhcnNlRmxvYXQob3B0cy5kZWxheSkpLFxyXG5cdFx0XHRcdFx0XHRcdG5leHQ6IGRlbGF5Q29tcGxldGVcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGJ1aWxkUXVldWUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgdGhlIGNhbGwgdW5kZXJnb2VzIGVsZW1lbnQgcXVldWVpbmcgYXMgbm9ybWFsLiAqL1xyXG5cdFx0XHRcdFx0LyogTm90ZTogVG8gaW50ZXJvcGVyYXRlIHdpdGggalF1ZXJ5LCBWZWxvY2l0eSB1c2VzIGpRdWVyeSdzIG93biAkLnF1ZXVlKCkgc3RhY2sgZm9yIHF1ZXVpbmcgbG9naWMuICovXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQucXVldWUoZWxlbWVudCwgb3B0cy5xdWV1ZSwgZnVuY3Rpb24obmV4dCwgY2xlYXJRdWV1ZSkge1xyXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgY2xlYXJRdWV1ZSBmbGFnIHdhcyBwYXNzZWQgaW4gYnkgdGhlIHN0b3AgY29tbWFuZCwgcmVzb2x2ZSB0aGlzIGNhbGwncyBwcm9taXNlLiAoUHJvbWlzZXMgY2FuIG9ubHkgYmUgcmVzb2x2ZWQgb25jZSxcclxuXHRcdFx0XHRcdFx0IHNvIGl0J3MgZmluZSBpZiB0aGlzIGlzIHJlcGVhdGVkbHkgdHJpZ2dlcmVkIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGFzc29jaWF0ZWQgY2FsbC4pICovXHJcblx0XHRcdFx0XHRcdGlmIChjbGVhclF1ZXVlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb21pc2VEYXRhLnJlc29sdmVyKGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8qIERvIG5vdCBjb250aW51ZSB3aXRoIGFuaW1hdGlvbiBxdWV1ZWluZy4gKi9cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyogVGhpcyBmbGFnIGluZGljYXRlcyB0byB0aGUgdXBjb21pbmcgY29tcGxldGVDYWxsKCkgZnVuY3Rpb24gdGhhdCB0aGlzIHF1ZXVlIGVudHJ5IHdhcyBpbml0aWF0ZWQgYnkgVmVsb2NpdHkuXHJcblx0XHRcdFx0XHRcdCBTZWUgY29tcGxldGVDYWxsKCkgZm9yIGZ1cnRoZXIgZGV0YWlscy4gKi9cclxuXHRcdFx0XHRcdFx0VmVsb2NpdHkudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRidWlsZFF1ZXVlKG5leHQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IEF1dG8tRGVxdWV1aW5nXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogQXMgcGVyIGpRdWVyeSdzICQucXVldWUoKSBiZWhhdmlvciwgdG8gZmlyZSB0aGUgZmlyc3Qgbm9uLWN1c3RvbS1xdWV1ZSBlbnRyeSBvbiBhbiBlbGVtZW50LCB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdCBtdXN0IGJlIGRlcXVldWVkIGlmIGl0cyBxdWV1ZSBzdGFjayBjb25zaXN0cyAqc29sZWx5KiBvZiB0aGUgY3VycmVudCBjYWxsLiAoVGhpcyBjYW4gYmUgZGV0ZXJtaW5lZCBieSBjaGVja2luZ1xyXG5cdFx0XHRcdCBmb3IgdGhlIFwiaW5wcm9ncmVzc1wiIGl0ZW0gdGhhdCBqUXVlcnkgcHJlcGVuZHMgdG8gYWN0aXZlIHF1ZXVlIHN0YWNrIGFycmF5cy4pIFJlZ2FyZGxlc3MsIHdoZW5ldmVyIHRoZSBlbGVtZW50J3NcclxuXHRcdFx0XHQgcXVldWUgaXMgZnVydGhlciBhcHBlbmRlZCB3aXRoIGFkZGl0aW9uYWwgaXRlbXMgLS0gaW5jbHVkaW5nICQuZGVsYXkoKSdzIG9yIGV2ZW4gJC5hbmltYXRlKCkgY2FsbHMsIHRoZSBxdWV1ZSdzXHJcblx0XHRcdFx0IGZpcnN0IGVudHJ5IGlzIGF1dG9tYXRpY2FsbHkgZmlyZWQuIFRoaXMgYmVoYXZpb3IgY29udHJhc3RzIHRoYXQgb2YgY3VzdG9tIHF1ZXVlcywgd2hpY2ggbmV2ZXIgYXV0by1maXJlLiAqL1xyXG5cdFx0XHRcdC8qIE5vdGU6IFdoZW4gYW4gZWxlbWVudCBzZXQgaXMgYmVpbmcgc3ViamVjdGVkIHRvIGEgbm9uLXBhcmFsbGVsIFZlbG9jaXR5IGNhbGwsIHRoZSBhbmltYXRpb24gd2lsbCBub3QgYmVnaW4gdW50aWxcclxuXHRcdFx0XHQgZWFjaCBvbmUgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBzZXQgaGFzIHJlYWNoZWQgdGhlIGVuZCBvZiBpdHMgaW5kaXZpZHVhbGx5IHByZS1leGlzdGluZyBxdWV1ZSBjaGFpbi4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBVbmZvcnR1bmF0ZWx5LCBtb3N0IHBlb3BsZSBkb24ndCBmdWxseSBncmFzcCBqUXVlcnkncyBwb3dlcmZ1bCwgeWV0IHF1aXJreSwgJC5xdWV1ZSgpIGZ1bmN0aW9uLlxyXG5cdFx0XHRcdCBMZWFuIG1vcmUgaGVyZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDU4MTU4L2Nhbi1zb21lYm9keS1leHBsYWluLWpxdWVyeS1xdWV1ZS10by1tZSAqL1xyXG5cdFx0XHRcdGlmICgob3B0cy5xdWV1ZSA9PT0gXCJcIiB8fCBvcHRzLnF1ZXVlID09PSBcImZ4XCIpICYmICQucXVldWUoZWxlbWVudClbMF0gIT09IFwiaW5wcm9ncmVzc1wiKSB7XHJcblx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IEVsZW1lbnQgU2V0IEl0ZXJhdGlvblxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBJZiB0aGUgXCJub2RlVHlwZVwiIHByb3BlcnR5IGV4aXN0cyBvbiB0aGUgZWxlbWVudHMgdmFyaWFibGUsIHdlJ3JlIGFuaW1hdGluZyBhIHNpbmdsZSBlbGVtZW50LlxyXG5cdFx0XHQgUGxhY2UgaXQgaW4gYW4gYXJyYXkgc28gdGhhdCAkLmVhY2goKSBjYW4gaXRlcmF0ZSBvdmVyIGl0LiAqL1xyXG5cdFx0XHQkLmVhY2goZWxlbWVudHMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcclxuXHRcdFx0XHQvKiBFbnN1cmUgZWFjaCBlbGVtZW50IGluIGEgc2V0IGhhcyBhIG5vZGVUeXBlIChpcyBhIHJlYWwgZWxlbWVudCkgdG8gYXZvaWQgdGhyb3dpbmcgZXJyb3JzLiAqL1xyXG5cdFx0XHRcdGlmIChUeXBlLmlzTm9kZShlbGVtZW50KSkge1xyXG5cdFx0XHRcdFx0cHJvY2Vzc0VsZW1lbnQoZWxlbWVudCwgaSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKipcclxuXHRcdFx0IE9wdGlvbjogTG9vcFxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogVGhlIGxvb3Agb3B0aW9uIGFjY2VwdHMgYW4gaW50ZWdlciBpbmRpY2F0aW5nIGhvdyBtYW55IHRpbWVzIHRoZSBlbGVtZW50IHNob3VsZCBsb29wIGJldHdlZW4gdGhlIHZhbHVlcyBpbiB0aGVcclxuXHRcdFx0IGN1cnJlbnQgY2FsbCdzIHByb3BlcnRpZXMgbWFwIGFuZCB0aGUgZWxlbWVudCdzIHByb3BlcnR5IHZhbHVlcyBwcmlvciB0byB0aGlzIGNhbGwuICovXHJcblx0XHRcdC8qIE5vdGU6IFRoZSBsb29wIG9wdGlvbidzIGxvZ2ljIGlzIHBlcmZvcm1lZCBoZXJlIC0tIGFmdGVyIGVsZW1lbnQgcHJvY2Vzc2luZyAtLSBiZWNhdXNlIHRoZSBjdXJyZW50IGNhbGwgbmVlZHNcclxuXHRcdFx0IHRvIHVuZGVyZ28gaXRzIHF1ZXVlIGluc2VydGlvbiBwcmlvciB0byB0aGUgbG9vcCBvcHRpb24gZ2VuZXJhdGluZyBpdHMgc2VyaWVzIG9mIGNvbnN0aXR1ZW50IFwicmV2ZXJzZVwiIGNhbGxzLFxyXG5cdFx0XHQgd2hpY2ggY2hhaW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbC4gVHdvIHJldmVyc2UgY2FsbHMgKHR3byBcImFsdGVybmF0aW9uc1wiKSBjb25zdGl0dXRlIG9uZSBsb29wLiAqL1xyXG5cdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIFZlbG9jaXR5LmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHRcdFx0b3B0cy5sb29wID0gcGFyc2VJbnQob3B0cy5sb29wLCAxMCk7XHJcblx0XHRcdHZhciByZXZlcnNlQ2FsbHNDb3VudCA9IChvcHRzLmxvb3AgKiAyKSAtIDE7XHJcblxyXG5cdFx0XHRpZiAob3B0cy5sb29wKSB7XHJcblx0XHRcdFx0LyogRG91YmxlIHRoZSBsb29wIGNvdW50IHRvIGNvbnZlcnQgaXQgaW50byBpdHMgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIFwicmV2ZXJzZVwiIGNhbGxzLlxyXG5cdFx0XHRcdCBTdWJ0cmFjdCAxIGZyb20gdGhlIHJlc3VsdGluZyB2YWx1ZSBzaW5jZSB0aGUgY3VycmVudCBjYWxsIGlzIGluY2x1ZGVkIGluIHRoZSB0b3RhbCBhbHRlcm5hdGlvbiBjb3VudC4gKi9cclxuXHRcdFx0XHRmb3IgKHZhciB4ID0gMDsgeCA8IHJldmVyc2VDYWxsc0NvdW50OyB4KyspIHtcclxuXHRcdFx0XHRcdC8qIFNpbmNlIHRoZSBsb2dpYyBmb3IgdGhlIHJldmVyc2UgYWN0aW9uIG9jY3VycyBpbnNpZGUgUXVldWVpbmcgYW5kIHRoZXJlZm9yZSB0aGlzIGNhbGwncyBvcHRpb25zIG9iamVjdFxyXG5cdFx0XHRcdFx0IGlzbid0IHBhcnNlZCB1bnRpbCB0aGVuIGFzIHdlbGwsIHRoZSBjdXJyZW50IGNhbGwncyBkZWxheSBvcHRpb24gbXVzdCBiZSBleHBsaWNpdGx5IHBhc3NlZCBpbnRvIHRoZSByZXZlcnNlXHJcblx0XHRcdFx0XHQgY2FsbCBzbyB0aGF0IHRoZSBkZWxheSBsb2dpYyB0aGF0IG9jY3VycyBpbnNpZGUgKlByZS1RdWV1ZWluZyogY2FuIHByb2Nlc3MgaXQuICovXHJcblx0XHRcdFx0XHR2YXIgcmV2ZXJzZU9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHRcdGRlbGF5OiBvcHRzLmRlbGF5LFxyXG5cdFx0XHRcdFx0XHRwcm9ncmVzczogb3B0cy5wcm9ncmVzc1xyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHQvKiBJZiBhIGNvbXBsZXRlIGNhbGxiYWNrIHdhcyBwYXNzZWQgaW50byB0aGlzIGNhbGwsIHRyYW5zZmVyIGl0IHRvIHRoZSBsb29wIHJlZGlyZWN0J3MgZmluYWwgXCJyZXZlcnNlXCIgY2FsbFxyXG5cdFx0XHRcdFx0IHNvIHRoYXQgaXQncyB0cmlnZ2VyZWQgd2hlbiB0aGUgZW50aXJlIHJlZGlyZWN0IGlzIGNvbXBsZXRlIChhbmQgbm90IHdoZW4gdGhlIHZlcnkgZmlyc3QgYW5pbWF0aW9uIGlzIGNvbXBsZXRlKS4gKi9cclxuXHRcdFx0XHRcdGlmICh4ID09PSByZXZlcnNlQ2FsbHNDb3VudCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0cmV2ZXJzZU9wdGlvbnMuZGlzcGxheSA9IG9wdHMuZGlzcGxheTtcclxuXHRcdFx0XHRcdFx0cmV2ZXJzZU9wdGlvbnMudmlzaWJpbGl0eSA9IG9wdHMudmlzaWJpbGl0eTtcclxuXHRcdFx0XHRcdFx0cmV2ZXJzZU9wdGlvbnMuY29tcGxldGUgPSBvcHRzLmNvbXBsZXRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGFuaW1hdGUoZWxlbWVudHMsIFwicmV2ZXJzZVwiLCByZXZlcnNlT3B0aW9ucyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDaGFpbmluZ1xyXG5cdFx0XHQgKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0LyogUmV0dXJuIHRoZSBlbGVtZW50cyBiYWNrIHRvIHRoZSBjYWxsIGNoYWluLCB3aXRoIHdyYXBwZWQgZWxlbWVudHMgdGFraW5nIHByZWNlZGVuY2UgaW4gY2FzZSBWZWxvY2l0eSB3YXMgY2FsbGVkIHZpYSB0aGUgJC5mbi4gZXh0ZW5zaW9uLiAqL1xyXG5cdFx0XHRyZXR1cm4gZ2V0Q2hhaW4oKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyogVHVybiBWZWxvY2l0eSBpbnRvIHRoZSBhbmltYXRpb24gZnVuY3Rpb24sIGV4dGVuZGVkIHdpdGggdGhlIHByZS1leGlzdGluZyBWZWxvY2l0eSBvYmplY3QuICovXHJcblx0XHRWZWxvY2l0eSA9ICQuZXh0ZW5kKGFuaW1hdGUsIFZlbG9jaXR5KTtcclxuXHRcdC8qIEZvciBsZWdhY3kgc3VwcG9ydCwgYWxzbyBleHBvc2UgdGhlIGxpdGVyYWwgYW5pbWF0ZSBtZXRob2QuICovXHJcblx0XHRWZWxvY2l0eS5hbmltYXRlID0gYW5pbWF0ZTtcclxuXHJcblx0XHQvKioqKioqKioqKioqKipcclxuXHRcdCBUaW1pbmdcclxuXHRcdCAqKioqKioqKioqKioqKi9cclxuXHJcblx0XHQvKiBUaWNrZXIgZnVuY3Rpb24uICovXHJcblx0XHR2YXIgdGlja2VyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTaGltO1xyXG5cclxuXHRcdC8qIEluYWN0aXZlIGJyb3dzZXIgdGFicyBwYXVzZSByQUYsIHdoaWNoIHJlc3VsdHMgaW4gYWxsIGFjdGl2ZSBhbmltYXRpb25zIGltbWVkaWF0ZWx5IHNwcmludGluZyB0byB0aGVpciBjb21wbGV0aW9uIHN0YXRlcyB3aGVuIHRoZSB0YWIgcmVmb2N1c2VzLlxyXG5cdFx0IFRvIGdldCBhcm91bmQgdGhpcywgd2UgZHluYW1pY2FsbHkgc3dpdGNoIHJBRiB0byBzZXRUaW1lb3V0ICh3aGljaCB0aGUgYnJvd3NlciAqZG9lc24ndCogcGF1c2UpIHdoZW4gdGhlIHRhYiBsb3NlcyBmb2N1cy4gV2Ugc2tpcCB0aGlzIGZvciBtb2JpbGVcclxuXHRcdCBkZXZpY2VzIHRvIGF2b2lkIHdhc3RpbmcgYmF0dGVyeSBwb3dlciBvbiBpbmFjdGl2ZSB0YWJzLiAqL1xyXG5cdFx0LyogTm90ZTogVGFiIGZvY3VzIGRldGVjdGlvbiBkb2Vzbid0IHdvcmsgb24gb2xkZXIgdmVyc2lvbnMgb2YgSUUsIGJ1dCB0aGF0J3Mgb2theSBzaW5jZSB0aGV5IGRvbid0IHN1cHBvcnQgckFGIHRvIGJlZ2luIHdpdGguICovXHJcblx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmlzTW9iaWxlICYmIGRvY3VtZW50LmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHZhciB1cGRhdGVUaWNrZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvKiBSZWFzc2lnbiB0aGUgckFGIGZ1bmN0aW9uICh3aGljaCB0aGUgZ2xvYmFsIHRpY2soKSBmdW5jdGlvbiB1c2VzKSBiYXNlZCBvbiB0aGUgdGFiJ3MgZm9jdXMgc3RhdGUuICovXHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LmhpZGRlbikge1xyXG5cdFx0XHRcdFx0dGlja2VyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHRcdFx0LyogVGhlIHRpY2sgZnVuY3Rpb24gbmVlZHMgYSB0cnV0aHkgZmlyc3QgYXJndW1lbnQgaW4gb3JkZXIgdG8gcGFzcyBpdHMgaW50ZXJuYWwgdGltZXN0YW1wIGNoZWNrLiAqL1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayh0cnVlKTtcclxuXHRcdFx0XHRcdFx0fSwgMTYpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHQvKiBUaGUgckFGIGxvb3AgaGFzIGJlZW4gcGF1c2VkIGJ5IHRoZSBicm93c2VyLCBzbyB3ZSBtYW51YWxseSByZXN0YXJ0IHRoZSB0aWNrLiAqL1xyXG5cdFx0XHRcdFx0dGljaygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aWNrZXIgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJBRlNoaW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0LyogUGFnZSBjb3VsZCBiZSBzaXR0aW5nIGluIHRoZSBiYWNrZ3JvdW5kIGF0IHRoaXMgdGltZSAoaS5lLiBvcGVuZWQgYXMgbmV3IHRhYikgc28gbWFraW5nIHN1cmUgd2UgdXNlIGNvcnJlY3QgdGlja2VyIGZyb20gdGhlIHN0YXJ0ICovXHJcblx0XHRcdHVwZGF0ZVRpY2tlcigpO1xyXG5cclxuXHRcdFx0LyogQW5kIHRoZW4gcnVuIGNoZWNrIGFnYWluIGV2ZXJ5IHRpbWUgdmlzaWJpbGl0eSBjaGFuZ2VzICovXHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHVwZGF0ZVRpY2tlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqKioqKioqKioqKlxyXG5cdFx0IFRpY2tcclxuXHRcdCAqKioqKioqKioqKiovXHJcblxyXG5cdFx0LyogTm90ZTogQWxsIGNhbGxzIHRvIFZlbG9jaXR5IGFyZSBwdXNoZWQgdG8gdGhlIFZlbG9jaXR5LlN0YXRlLmNhbGxzIGFycmF5LCB3aGljaCBpcyBmdWxseSBpdGVyYXRlZCB0aHJvdWdoIHVwb24gZWFjaCB0aWNrLiAqL1xyXG5cdFx0ZnVuY3Rpb24gdGljayh0aW1lc3RhbXApIHtcclxuXHRcdFx0LyogQW4gZW1wdHkgdGltZXN0YW1wIGFyZ3VtZW50IGluZGljYXRlcyB0aGF0IHRoaXMgaXMgdGhlIGZpcnN0IHRpY2sgb2NjdXJlbmNlIHNpbmNlIHRpY2tpbmcgd2FzIHR1cm5lZCBvbi5cclxuXHRcdFx0IFdlIGxldmVyYWdlIHRoaXMgbWV0YWRhdGEgdG8gZnVsbHkgaWdub3JlIHRoZSBmaXJzdCB0aWNrIHBhc3Mgc2luY2UgUkFGJ3MgaW5pdGlhbCBwYXNzIGlzIGZpcmVkIHdoZW5ldmVyXHJcblx0XHRcdCB0aGUgYnJvd3NlcidzIG5leHQgdGljayBzeW5jIHRpbWUgb2NjdXJzLCB3aGljaCByZXN1bHRzIGluIHRoZSBmaXJzdCBlbGVtZW50cyBzdWJqZWN0ZWQgdG8gVmVsb2NpdHlcclxuXHRcdFx0IGNhbGxzIGJlaW5nIGFuaW1hdGVkIG91dCBvZiBzeW5jIHdpdGggYW55IGVsZW1lbnRzIGFuaW1hdGVkIGltbWVkaWF0ZWx5IHRoZXJlYWZ0ZXIuIEluIHNob3J0LCB3ZSBpZ25vcmVcclxuXHRcdFx0IHRoZSBmaXJzdCBSQUYgdGljayBwYXNzIHNvIHRoYXQgZWxlbWVudHMgYmVpbmcgaW1tZWRpYXRlbHkgY29uc2VjdXRpdmVseSBhbmltYXRlZCAtLSBpbnN0ZWFkIG9mIHNpbXVsdGFuZW91c2x5IGFuaW1hdGVkXHJcblx0XHRcdCBieSB0aGUgc2FtZSBWZWxvY2l0eSBjYWxsIC0tIGFyZSBwcm9wZXJseSBiYXRjaGVkIGludG8gdGhlIHNhbWUgaW5pdGlhbCBSQUYgdGljayBhbmQgY29uc2VxdWVudGx5IHJlbWFpbiBpbiBzeW5jIHRoZXJlYWZ0ZXIuICovXHJcblx0XHRcdGlmICh0aW1lc3RhbXApIHtcclxuXHRcdFx0XHQvKiBXZSBub3JtYWxseSB1c2UgUkFGJ3MgaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcCBidXQgYXMgaXQgY2FuIGJlIHNpZ25pZmljYW50bHkgb2Zmc2V0IHdoZW4gdGhlIGJyb3dzZXIgaXNcclxuXHRcdFx0XHQgdW5kZXIgaGlnaCBzdHJlc3Mgd2UgZ2l2ZSB0aGUgb3B0aW9uIGZvciBjaG9wcGluZXNzIG92ZXIgYWxsb3dpbmcgdGhlIGJyb3dzZXIgdG8gZHJvcCBodWdlIGNodW5rcyBvZiBmcmFtZXMuXHJcblx0XHRcdFx0IFdlIHVzZSBwZXJmb3JtYW5jZS5ub3coKSBhbmQgc2hpbSBpdCBpZiBpdCBkb2Vzbid0IGV4aXN0IGZvciB3aGVuIHRoZSB0YWIgaXMgaGlkZGVuLiAqL1xyXG5cdFx0XHRcdHZhciB0aW1lQ3VycmVudCA9IFZlbG9jaXR5LnRpbWVzdGFtcCAmJiB0aW1lc3RhbXAgIT09IHRydWUgPyB0aW1lc3RhbXAgOiBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IENhbGwgSXRlcmF0aW9uXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHR2YXIgY2FsbHNMZW5ndGggPSBWZWxvY2l0eS5TdGF0ZS5jYWxscy5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdC8qIFRvIHNwZWVkIHVwIGl0ZXJhdGluZyBvdmVyIHRoaXMgYXJyYXksIGl0IGlzIGNvbXBhY3RlZCAoZmFsc2V5IGl0ZW1zIC0tIGNhbGxzIHRoYXQgaGF2ZSBjb21wbGV0ZWQgLS0gYXJlIHJlbW92ZWQpXHJcblx0XHRcdFx0IHdoZW4gaXRzIGxlbmd0aCBoYXMgYmFsbG9vbmVkIHRvIGEgcG9pbnQgdGhhdCBjYW4gaW1wYWN0IHRpY2sgcGVyZm9ybWFuY2UuIFRoaXMgb25seSBiZWNvbWVzIG5lY2Vzc2FyeSB3aGVuIGFuaW1hdGlvblxyXG5cdFx0XHRcdCBoYXMgYmVlbiBjb250aW51b3VzIHdpdGggbWFueSBlbGVtZW50cyBvdmVyIGEgbG9uZyBwZXJpb2Qgb2YgdGltZTsgd2hlbmV2ZXIgYWxsIGFjdGl2ZSBjYWxscyBhcmUgY29tcGxldGVkLCBjb21wbGV0ZUNhbGwoKSBjbGVhcnMgVmVsb2NpdHkuU3RhdGUuY2FsbHMuICovXHJcblx0XHRcdFx0aWYgKGNhbGxzTGVuZ3RoID4gMTAwMDApIHtcclxuXHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzID0gY29tcGFjdFNwYXJzZUFycmF5KFZlbG9jaXR5LlN0YXRlLmNhbGxzKTtcclxuXHRcdFx0XHRcdGNhbGxzTGVuZ3RoID0gVmVsb2NpdHkuU3RhdGUuY2FsbHMubGVuZ3RoO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGVhY2ggYWN0aXZlIGNhbGwuICovXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHQvKiBXaGVuIGEgVmVsb2NpdHkgY2FsbCBpcyBjb21wbGV0ZWQsIGl0cyBWZWxvY2l0eS5TdGF0ZS5jYWxscyBlbnRyeSBpcyBzZXQgdG8gZmFsc2UuIENvbnRpbnVlIG9uIHRvIHRoZSBuZXh0IGNhbGwuICovXHJcblx0XHRcdFx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdCBDYWxsLVdpZGUgVmFyaWFibGVzXHJcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdHZhciBjYWxsQ29udGFpbmVyID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbaV0sXHJcblx0XHRcdFx0XHRcdFx0Y2FsbCA9IGNhbGxDb250YWluZXJbMF0sXHJcblx0XHRcdFx0XHRcdFx0b3B0cyA9IGNhbGxDb250YWluZXJbMl0sXHJcblx0XHRcdFx0XHRcdFx0dGltZVN0YXJ0ID0gY2FsbENvbnRhaW5lclszXSxcclxuXHRcdFx0XHRcdFx0XHRmaXJzdFRpY2sgPSAhdGltZVN0YXJ0LFxyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuRHVtbXlWYWx1ZSA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0cGF1c2VPYmplY3QgPSBjYWxsQ29udGFpbmVyWzVdLFxyXG5cdFx0XHRcdFx0XHRcdG1pbGxpc2Vjb25kc0VsbGFwc2VkID0gY2FsbENvbnRhaW5lcls2XTtcclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdC8qIElmIHRpbWVTdGFydCBpcyB1bmRlZmluZWQsIHRoZW4gdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGF0IHRoaXMgY2FsbCBoYXMgYmVlbiBwcm9jZXNzZWQgYnkgdGljaygpLlxyXG5cdFx0XHRcdFx0IFdlIGFzc2lnbiB0aW1lU3RhcnQgbm93IHNvIHRoYXQgaXRzIHZhbHVlIGlzIGFzIGNsb3NlIHRvIHRoZSByZWFsIGFuaW1hdGlvbiBzdGFydCB0aW1lIGFzIHBvc3NpYmxlLlxyXG5cdFx0XHRcdFx0IChDb252ZXJzZWx5LCBoYWQgdGltZVN0YXJ0IGJlZW4gZGVmaW5lZCB3aGVuIHRoaXMgY2FsbCB3YXMgYWRkZWQgdG8gVmVsb2NpdHkuU3RhdGUuY2FsbHMsIHRoZSBkZWxheVxyXG5cdFx0XHRcdFx0IGJldHdlZW4gdGhhdCB0aW1lIGFuZCBub3cgd291bGQgY2F1c2UgdGhlIGZpcnN0IGZldyBmcmFtZXMgb2YgdGhlIHR3ZWVuIHRvIGJlIHNraXBwZWQgc2luY2VcclxuXHRcdFx0XHRcdCBwZXJjZW50Q29tcGxldGUgaXMgY2FsY3VsYXRlZCByZWxhdGl2ZSB0byB0aW1lU3RhcnQuKSAqL1xyXG5cdFx0XHRcdFx0LyogRnVydGhlciwgc3VidHJhY3QgMTZtcyAodGhlIGFwcHJveGltYXRlIHJlc29sdXRpb24gb2YgUkFGKSBmcm9tIHRoZSBjdXJyZW50IHRpbWUgdmFsdWUgc28gdGhhdCB0aGVcclxuXHRcdFx0XHRcdCBmaXJzdCB0aWNrIGl0ZXJhdGlvbiBpc24ndCB3YXN0ZWQgYnkgYW5pbWF0aW5nIGF0IDAlIHR3ZWVuIGNvbXBsZXRpb24sIHdoaWNoIHdvdWxkIHByb2R1Y2UgdGhlXHJcblx0XHRcdFx0XHQgc2FtZSBzdHlsZSB2YWx1ZSBhcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgdmFsdWUuICovXHJcblx0XHRcdFx0XHRpZiAoIXRpbWVTdGFydCkge1xyXG5cdFx0XHRcdFx0XHR0aW1lU3RhcnQgPSBWZWxvY2l0eS5TdGF0ZS5jYWxsc1tpXVszXSA9IHRpbWVDdXJyZW50IC0gMTY7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgYSBwYXVzZSBvYmplY3QgaXMgcHJlc2VudCwgc2tpcCBwcm9jZXNzaW5nIHVubGVzcyBpdCBoYXMgYmVlbiBzZXQgdG8gcmVzdW1lICovXHJcblx0XHRcdFx0XHRpZiAocGF1c2VPYmplY3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhdXNlT2JqZWN0LnJlc3VtZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdC8qIFVwZGF0ZSB0aGUgdGltZSBzdGFydCB0byBhY2NvbW9kYXRlIHRoZSBwYXVzZWQgY29tcGxldGlvbiBhbW91bnQgKi9cclxuXHRcdFx0XHRcdFx0XHR0aW1lU3RhcnQgPSBjYWxsQ29udGFpbmVyWzNdID0gTWF0aC5yb3VuZCh0aW1lQ3VycmVudCAtIG1pbGxpc2Vjb25kc0VsbGFwc2VkIC0gMTYpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvKiBSZW1vdmUgcGF1c2Ugb2JqZWN0IGFmdGVyIHByb2Nlc3NpbmcgKi9cclxuXHRcdFx0XHRcdFx0XHRjYWxsQ29udGFpbmVyWzVdID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG1pbGxpc2Vjb25kc0VsbGFwc2VkID0gY2FsbENvbnRhaW5lcls2XSA9IHRpbWVDdXJyZW50IC0gdGltZVN0YXJ0O1xyXG5cclxuXHRcdFx0XHRcdC8qIFRoZSB0d2VlbidzIGNvbXBsZXRpb24gcGVyY2VudGFnZSBpcyByZWxhdGl2ZSB0byB0aGUgdHdlZW4ncyBzdGFydCB0aW1lLCBub3QgdGhlIHR3ZWVuJ3Mgc3RhcnQgdmFsdWVcclxuXHRcdFx0XHRcdCAod2hpY2ggd291bGQgcmVzdWx0IGluIHVucHJlZGljdGFibGUgdHdlZW4gZHVyYXRpb25zIHNpbmNlIEphdmFTY3JpcHQncyB0aW1lcnMgYXJlIG5vdCBwYXJ0aWN1bGFybHkgYWNjdXJhdGUpLlxyXG5cdFx0XHRcdFx0IEFjY29yZGluZ2x5LCB3ZSBlbnN1cmUgdGhhdCBwZXJjZW50Q29tcGxldGUgZG9lcyBub3QgZXhjZWVkIDEuICovXHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudENvbXBsZXRlID0gTWF0aC5taW4oKG1pbGxpc2Vjb25kc0VsbGFwc2VkKSAvIG9wdHMuZHVyYXRpb24sIDEpO1xyXG5cclxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHQgRWxlbWVudCBJdGVyYXRpb25cclxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdC8qIEZvciBldmVyeSBjYWxsLCBpdGVyYXRlIHRocm91Z2ggZWFjaCBvZiB0aGUgZWxlbWVudHMgaW4gaXRzIHNldC4gKi9cclxuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwLCBjYWxsTGVuZ3RoID0gY2FsbC5sZW5ndGg7IGogPCBjYWxsTGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIHR3ZWVuc0NvbnRhaW5lciA9IGNhbGxbal0sXHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50ID0gdHdlZW5zQ29udGFpbmVyLmVsZW1lbnQ7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBDaGVjayB0byBzZWUgaWYgdGhpcyBlbGVtZW50IGhhcyBiZWVuIGRlbGV0ZWQgbWlkd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbiBieSBjaGVja2luZyBmb3IgdGhlXHJcblx0XHRcdFx0XHRcdCBjb250aW51ZWQgZXhpc3RlbmNlIG9mIGl0cyBkYXRhIGNhY2hlLiBJZiBpdCdzIGdvbmUsIG9yIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBwYXVzZWQsIHNraXAgYW5pbWF0aW5nIHRoaXMgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKCFEYXRhKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciB0cmFuc2Zvcm1Qcm9wZXJ0eUV4aXN0cyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IERpc3BsYXkgJiBWaXNpYmlsaXR5IFRvZ2dsaW5nXHJcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIGRpc3BsYXkgb3B0aW9uIGlzIHNldCB0byBub24tXCJub25lXCIsIHNldCBpdCB1cGZyb250IHNvIHRoYXQgdGhlIGVsZW1lbnQgY2FuIGJlY29tZSB2aXNpYmxlIGJlZm9yZSB0d2VlbmluZyBiZWdpbnMuXHJcblx0XHRcdFx0XHRcdCAoT3RoZXJ3aXNlLCBkaXNwbGF5J3MgXCJub25lXCIgdmFsdWUgaXMgc2V0IGluIGNvbXBsZXRlQ2FsbCgpIG9uY2UgdGhlIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLikgKi9cclxuXHRcdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuZGlzcGxheSAhPT0gbnVsbCAmJiBvcHRzLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBmbGV4VmFsdWVzID0gW1wiLXdlYmtpdC1ib3hcIiwgXCItbW96LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiLXdlYmtpdC1mbGV4XCJdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdCQuZWFjaChmbGV4VmFsdWVzLCBmdW5jdGlvbihpLCBmbGV4VmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIGZsZXhWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiLCBvcHRzLmRpc3BsYXkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBTYW1lIGdvZXMgd2l0aCB0aGUgdmlzaWJpbGl0eSBvcHRpb24sIGJ1dCBpdHMgXCJub25lXCIgZXF1aXZhbGVudCBpcyBcImhpZGRlblwiLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0cy52aXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy52aXNpYmlsaXR5ICE9PSBcImhpZGRlblwiKSB7XHJcblx0XHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJ2aXNpYmlsaXR5XCIsIG9wdHMudmlzaWJpbGl0eSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IFByb3BlcnR5IEl0ZXJhdGlvblxyXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogRm9yIGV2ZXJ5IGVsZW1lbnQsIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIHByb3BlcnR5LiAqL1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiB0d2VlbnNDb250YWluZXIpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBJbiBhZGRpdGlvbiB0byBwcm9wZXJ0eSB0d2VlbiBkYXRhLCB0d2VlbnNDb250YWluZXIgY29udGFpbnMgYSByZWZlcmVuY2UgdG8gaXRzIGFzc29jaWF0ZWQgZWxlbWVudC4gKi9cclxuXHRcdFx0XHRcdFx0XHRpZiAodHdlZW5zQ29udGFpbmVyLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gXCJlbGVtZW50XCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0d2VlbiA9IHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEVhc2luZyBjYW4gZWl0aGVyIGJlIGEgcHJlLWdlbmVyZWF0ZWQgZnVuY3Rpb24gb3IgYSBzdHJpbmcgdGhhdCByZWZlcmVuY2VzIGEgcHJlLXJlZ2lzdGVyZWQgZWFzaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uIHRoZSBWZWxvY2l0eS5FYXNpbmdzIG9iamVjdC4gSW4gZWl0aGVyIGNhc2UsIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgZWFzaW5nICpmdW5jdGlvbiouICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nID0gVHlwZS5pc1N0cmluZyh0d2Vlbi5lYXNpbmcpID8gVmVsb2NpdHkuRWFzaW5nc1t0d2Vlbi5lYXNpbmddIDogdHdlZW4uZWFzaW5nO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0XHRcdCBDdXJyZW50IFZhbHVlIENhbGN1bGF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzU3RyaW5nKHR3ZWVuLnBhdHRlcm4pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBwYXR0ZXJuUmVwbGFjZSA9IHBlcmNlbnRDb21wbGV0ZSA9PT0gMSA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigkMCwgaW5kZXgsIHJvdW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSB0d2Vlbi5lbmRWYWx1ZVtpbmRleF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcm91bmQgPyBNYXRoLnJvdW5kKHJlc3VsdCkgOiByZXN1bHQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCQwLCBpbmRleCwgcm91bmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHN0YXJ0VmFsdWUgPSB0d2Vlbi5zdGFydFZhbHVlW2luZGV4XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuRGVsdGEgPSB0d2Vlbi5lbmRWYWx1ZVtpbmRleF0gLSBzdGFydFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gc3RhcnRWYWx1ZSArICh0d2VlbkRlbHRhICogZWFzaW5nKHBlcmNlbnRDb21wbGV0ZSwgb3B0cywgdHdlZW5EZWx0YSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJvdW5kID8gTWF0aC5yb3VuZChyZXN1bHQpIDogcmVzdWx0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuLnBhdHRlcm4ucmVwbGFjZSgveyhcXGQrKSghKT99L2csIHBhdHRlcm5SZXBsYWNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocGVyY2VudENvbXBsZXRlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoaXMgaXMgdGhlIGxhc3QgdGljayBwYXNzIChpZiB3ZSd2ZSByZWFjaGVkIDEwMCUgY29tcGxldGlvbiBmb3IgdGhpcyB0d2VlbiksXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBlbnN1cmUgdGhhdCBjdXJyZW50VmFsdWUgaXMgZXhwbGljaXRseSBzZXQgdG8gaXRzIHRhcmdldCBlbmRWYWx1ZSBzbyB0aGF0IGl0J3Mgbm90IHN1YmplY3RlZCB0byBhbnkgcm91bmRpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuLmVuZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCBjYWxjdWxhdGUgY3VycmVudFZhbHVlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRlbHRhIGZyb20gc3RhcnRWYWx1ZS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHR3ZWVuRGVsdGEgPSB0d2Vlbi5lbmRWYWx1ZSAtIHR3ZWVuLnN0YXJ0VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWUgPSB0d2Vlbi5zdGFydFZhbHVlICsgKHR3ZWVuRGVsdGEgKiBlYXNpbmcocGVyY2VudENvbXBsZXRlLCBvcHRzLCB0d2VlbkRlbHRhKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIG5vIHZhbHVlIGNoYW5nZSBpcyBvY2N1cnJpbmcsIGRvbid0IHByb2NlZWQgd2l0aCBET00gdXBkYXRpbmcuICovXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWZpcnN0VGljayAmJiAoY3VycmVudFZhbHVlID09PSB0d2Vlbi5jdXJyZW50VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHR3ZWVuLmN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvKiBJZiB3ZSdyZSB0d2VlbmluZyBhIGZha2UgJ3R3ZWVuJyBwcm9wZXJ0eSBpbiBvcmRlciB0byBsb2cgdHJhbnNpdGlvbiB2YWx1ZXMsIHVwZGF0ZSB0aGUgb25lLXBlci1jYWxsIHZhcmlhYmxlIHNvIHRoYXRcclxuXHRcdFx0XHRcdFx0XHRcdCBpdCBjYW4gYmUgcGFzc2VkIGludG8gdGhlIHByb2dyZXNzIGNhbGxiYWNrLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID09PSBcInR3ZWVuXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHdlZW5EdW1teVZhbHVlID0gY3VycmVudFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgSG9va3M6IFBhcnQgSVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgaG9va1Jvb3Q7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgaG9va2VkIHByb3BlcnRpZXMsIHRoZSBuZXdseS11cGRhdGVkIHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUgaXMgY2FjaGVkIG9udG8gdGhlIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgdXNlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgZm9yIHN1YnNlcXVlbnQgaG9va3MgaW4gdGhpcyBjYWxsIHRoYXQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2FtZSByb290IHByb3BlcnR5LiBJZiB3ZSBkaWRuJ3QgY2FjaGUgdGhlIHVwZGF0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHJvb3RQcm9wZXJ0eVZhbHVlLCBlYWNoIHN1YnNlcXVlbnQgdXBkYXRlIHRvIHRoZSByb290IHByb3BlcnR5IGluIHRoaXMgdGljayBwYXNzIHdvdWxkIHJlc2V0IHRoZSBwcmV2aW91cyBob29rJ3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHVwZGF0ZXMgdG8gcm9vdFByb3BlcnR5VmFsdWUgcHJpb3IgdG8gaW5qZWN0aW9uLiBBIG5pY2UgcGVyZm9ybWFuY2UgYnlwcm9kdWN0IG9mIHJvb3RQcm9wZXJ0eVZhbHVlIGNhY2hpbmcgaXMgdGhhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgc3Vic2VxdWVudGx5IGNoYWluZWQgYW5pbWF0aW9ucyB1c2luZyB0aGUgc2FtZSBob29rUm9vdCBidXQgYSBkaWZmZXJlbnQgaG9vayBjYW4gdXNlIHRoaXMgY2FjaGVkIHJvb3RQcm9wZXJ0eVZhbHVlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoQ1NTLkhvb2tzLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aG9va1Jvb3QgPSBDU1MuSG9va3MuZ2V0Um9vdChwcm9wZXJ0eSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciByb290UHJvcGVydHlWYWx1ZUNhY2hlID0gRGF0YShlbGVtZW50KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW2hvb2tSb290XTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLnJvb3RQcm9wZXJ0eVZhbHVlID0gcm9vdFByb3BlcnR5VmFsdWVDYWNoZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgRE9NIFVwZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBzZXRQcm9wZXJ0eVZhbHVlKCkgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcHJvcGVydHkgbmFtZSBhbmQgcHJvcGVydHkgdmFsdWUgcG9zdCBhbnkgbm9ybWFsaXphdGlvbiB0aGF0IG1heSBoYXZlIGJlZW4gcGVyZm9ybWVkLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBUbyBzb2x2ZSBhbiBJRTw9OCBwb3NpdGlvbmluZyBidWcsIHRoZSB1bml0IHR5cGUgaXMgZHJvcHBlZCB3aGVuIHNldHRpbmcgYSBwcm9wZXJ0eSB2YWx1ZSBvZiAwLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWRqdXN0ZWRTZXREYXRhID0gQ1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgLyogU0VUICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLmN1cnJlbnRWYWx1ZSArIChJRSA8IDkgJiYgcGFyc2VGbG9hdChjdXJyZW50VmFsdWUpID09PSAwID8gXCJcIiA6IHR3ZWVuLnVuaXRUeXBlKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLnJvb3RQcm9wZXJ0eVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHdlZW4uc2Nyb2xsRGF0YSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgSG9va3M6IFBhcnQgSUlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBob29rJ3MgdXBkYXRlZCByb290UHJvcGVydHlWYWx1ZSAodGhlIHBvc3QtcHJvY2Vzc2VkIHZhbHVlIHByb3ZpZGVkIGJ5IGFkanVzdGVkU2V0RGF0YSksIGNhY2hlIGl0IG9udG8gdGhlIGVsZW1lbnQuICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTaW5jZSBhZGp1c3RlZFNldERhdGEgY29udGFpbnMgbm9ybWFsaXplZCBkYXRhIHJlYWR5IGZvciBET00gdXBkYXRpbmcsIHRoZSByb290UHJvcGVydHlWYWx1ZSBuZWVkcyB0byBiZSByZS1leHRyYWN0ZWQgZnJvbSBpdHMgbm9ybWFsaXplZCBmb3JtLiA/PyAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtob29rUm9vdF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtob29rUm9vdF0gPSBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtob29rUm9vdF0oXCJleHRyYWN0XCIsIG51bGwsIGFkanVzdGVkU2V0RGF0YVsxXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtob29rUm9vdF0gPSBhZGp1c3RlZFNldERhdGFbMV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBUcmFuc2Zvcm1zXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBGbGFnIHdoZXRoZXIgYSB0cmFuc2Zvcm0gcHJvcGVydHkgaXMgYmVpbmcgYW5pbWF0ZWQgc28gdGhhdCBmbHVzaFRyYW5zZm9ybUNhY2hlKCkgY2FuIGJlIHRyaWdnZXJlZCBvbmNlIHRoaXMgdGljayBwYXNzIGlzIGNvbXBsZXRlLiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYWRqdXN0ZWRTZXREYXRhWzBdID09PSBcInRyYW5zZm9ybVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtUHJvcGVydHlFeGlzdHMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRcdFx0IG1vYmlsZUhBXHJcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRcdFx0LyogSWYgbW9iaWxlSEEgaXMgZW5hYmxlZCwgc2V0IHRoZSB0cmFuc2xhdGUzZCB0cmFuc2Zvcm0gdG8gbnVsbCB0byBmb3JjZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24uXHJcblx0XHRcdFx0XHRcdCBJdCdzIHNhZmUgdG8gb3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eSBzaW5jZSBWZWxvY2l0eSBkb2Vzbid0IGFjdHVhbGx5IHN1cHBvcnQgaXRzIGFuaW1hdGlvbiAoaG9va3MgYXJlIHVzZWQgaW4gaXRzIHBsYWNlKS4gKi9cclxuXHRcdFx0XHRcdFx0aWYgKG9wdHMubW9iaWxlSEEpIHtcclxuXHRcdFx0XHRcdFx0XHQvKiBEb24ndCBzZXQgdGhlIG51bGwgdHJhbnNmb3JtIGhhY2sgaWYgd2UndmUgYWxyZWFkeSBkb25lIHNvLiAqL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qIEFsbCBlbnRyaWVzIG9uIHRoZSB0cmFuc2Zvcm1DYWNoZSBvYmplY3QgYXJlIGxhdGVyIGNvbmNhdGVuYXRlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZm9ybSBzdHJpbmcgdmlhIGZsdXNoVHJhbnNmb3JtQ2FjaGUoKS4gKi9cclxuXHRcdFx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QgPSBcIigwcHgsIDBweCwgMHB4KVwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybVByb3BlcnR5RXhpc3RzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmICh0cmFuc2Zvcm1Qcm9wZXJ0eUV4aXN0cykge1xyXG5cdFx0XHRcdFx0XHRcdENTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogVGhlIG5vbi1cIm5vbmVcIiBkaXNwbGF5IHZhbHVlIGlzIG9ubHkgYXBwbGllZCB0byBhbiBlbGVtZW50IG9uY2UgLS0gd2hlbiBpdHMgYXNzb2NpYXRlZCBjYWxsIGlzIGZpcnN0IHRpY2tlZCB0aHJvdWdoLlxyXG5cdFx0XHRcdFx0IEFjY29yZGluZ2x5LCBpdCdzIHNldCB0byBmYWxzZSBzbyB0aGF0IGl0IGlzbid0IHJlLXByb2Nlc3NlZCBieSB0aGlzIGNhbGwgaW4gdGhlIG5leHQgdGljay4gKi9cclxuXHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcblx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldWzJdLmRpc3BsYXkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChvcHRzLnZpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBvcHRzLnZpc2liaWxpdHkgIT09IFwiaGlkZGVuXCIpIHtcclxuXHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHNbaV1bMl0udmlzaWJpbGl0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIFBhc3MgdGhlIGVsZW1lbnRzIGFuZCB0aGUgdGltaW5nIGRhdGEgKHBlcmNlbnRDb21wbGV0ZSwgbXNSZW1haW5pbmcsIHRpbWVTdGFydCwgdHdlZW5EdW1teVZhbHVlKSBpbnRvIHRoZSBwcm9ncmVzcyBjYWxsYmFjay4gKi9cclxuXHRcdFx0XHRcdGlmIChvcHRzLnByb2dyZXNzKSB7XHJcblx0XHRcdFx0XHRcdG9wdHMucHJvZ3Jlc3MuY2FsbChjYWxsQ29udGFpbmVyWzFdLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbENvbnRhaW5lclsxXSxcclxuXHRcdFx0XHRcdFx0XHRcdHBlcmNlbnRDb21wbGV0ZSxcclxuXHRcdFx0XHRcdFx0XHRcdE1hdGgubWF4KDAsICh0aW1lU3RhcnQgKyBvcHRzLmR1cmF0aW9uKSAtIHRpbWVDdXJyZW50KSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpbWVTdGFydCxcclxuXHRcdFx0XHRcdFx0XHRcdHR3ZWVuRHVtbXlWYWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LyogSWYgdGhpcyBjYWxsIGhhcyBmaW5pc2hlZCB0d2VlbmluZywgcGFzcyBpdHMgaW5kZXggdG8gY29tcGxldGVDYWxsKCkgdG8gaGFuZGxlIGNhbGwgY2xlYW51cC4gKi9cclxuXHRcdFx0XHRcdGlmIChwZXJjZW50Q29tcGxldGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0Y29tcGxldGVDYWxsKGkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogTm90ZTogY29tcGxldGVDYWxsKCkgc2V0cyB0aGUgaXNUaWNraW5nIGZsYWcgdG8gZmFsc2Ugd2hlbiB0aGUgbGFzdCBjYWxsIG9uIFZlbG9jaXR5LlN0YXRlLmNhbGxzIGhhcyBjb21wbGV0ZWQuICovXHJcblx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcpIHtcclxuXHRcdFx0XHR0aWNrZXIodGljayk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0IENhbGwgQ29tcGxldGlvblxyXG5cdFx0ICoqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0LyogTm90ZTogVW5saWtlIHRpY2soKSwgd2hpY2ggcHJvY2Vzc2VzIGFsbCBhY3RpdmUgY2FsbHMgYXQgb25jZSwgY2FsbCBjb21wbGV0aW9uIGlzIGhhbmRsZWQgb24gYSBwZXItY2FsbCBiYXNpcy4gKi9cclxuXHRcdGZ1bmN0aW9uIGNvbXBsZXRlQ2FsbChjYWxsSW5kZXgsIGlzU3RvcHBlZCkge1xyXG5cdFx0XHQvKiBFbnN1cmUgdGhlIGNhbGwgZXhpc3RzLiAqL1xyXG5cdFx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF0pIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qIFB1bGwgdGhlIG1ldGFkYXRhIGZyb20gdGhlIGNhbGwuICovXHJcblx0XHRcdHZhciBjYWxsID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVswXSxcclxuXHRcdFx0XHRcdGVsZW1lbnRzID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVsxXSxcclxuXHRcdFx0XHRcdG9wdHMgPSBWZWxvY2l0eS5TdGF0ZS5jYWxsc1tjYWxsSW5kZXhdWzJdLFxyXG5cdFx0XHRcdFx0cmVzb2x2ZXIgPSBWZWxvY2l0eS5TdGF0ZS5jYWxsc1tjYWxsSW5kZXhdWzRdO1xyXG5cclxuXHRcdFx0dmFyIHJlbWFpbmluZ0NhbGxzRXhpc3QgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBFbGVtZW50IEZpbmFsaXphdGlvblxyXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWxsTGVuZ3RoID0gY2FsbC5sZW5ndGg7IGkgPCBjYWxsTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgZWxlbWVudCA9IGNhbGxbaV0uZWxlbWVudDtcclxuXHJcblx0XHRcdFx0LyogSWYgdGhlIHVzZXIgc2V0IGRpc3BsYXkgdG8gXCJub25lXCIgKGludGVuZGluZyB0byBoaWRlIHRoZSBlbGVtZW50KSwgc2V0IGl0IG5vdyB0aGF0IHRoZSBhbmltYXRpb24gaGFzIGNvbXBsZXRlZC4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBkaXNwbGF5Om5vbmUgaXNuJ3Qgc2V0IHdoZW4gY2FsbHMgYXJlIG1hbnVhbGx5IHN0b3BwZWQgKHZpYSBWZWxvY2l0eShcInN0b3BcIikuICovXHJcblx0XHRcdFx0LyogTm90ZTogRGlzcGxheSBnZXRzIGlnbm9yZWQgd2l0aCBcInJldmVyc2VcIiBjYWxscyBhbmQgaW5maW5pdGUgbG9vcHMsIHNpbmNlIHRoaXMgYmVoYXZpb3Igd291bGQgYmUgdW5kZXNpcmFibGUuICovXHJcblx0XHRcdFx0aWYgKCFpc1N0b3BwZWQgJiYgIW9wdHMubG9vcCkge1xyXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuXHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIG9wdHMuZGlzcGxheSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xyXG5cdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInZpc2liaWxpdHlcIiwgb3B0cy52aXNpYmlsaXR5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIElmIHRoZSBlbGVtZW50J3MgcXVldWUgaXMgZW1wdHkgKGlmIG9ubHkgdGhlIFwiaW5wcm9ncmVzc1wiIGl0ZW0gaXMgbGVmdCBhdCBwb3NpdGlvbiAwKSBvciBpZiBpdHMgcXVldWUgaXMgYWJvdXQgdG8gcnVuXHJcblx0XHRcdFx0IGEgbm9uLVZlbG9jaXR5LWluaXRpYXRlZCBlbnRyeSwgdHVybiBvZmYgdGhlIGlzQW5pbWF0aW5nIGZsYWcuIEEgbm9uLVZlbG9jaXR5LWluaXRpYXRpZWQgcXVldWUgZW50cnkncyBsb2dpYyBtaWdodCBhbHRlclxyXG5cdFx0XHRcdCBhbiBlbGVtZW50J3MgQ1NTIHZhbHVlcyBhbmQgdGhlcmVieSBjYXVzZSBWZWxvY2l0eSdzIGNhY2hlZCB2YWx1ZSBkYXRhIHRvIGdvIHN0YWxlLiBUbyBkZXRlY3QgaWYgYSBxdWV1ZSBlbnRyeSB3YXMgaW5pdGlhdGVkIGJ5IFZlbG9jaXR5LFxyXG5cdFx0XHRcdCB3ZSBjaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBvdXIgc3BlY2lhbCBWZWxvY2l0eS5xdWV1ZUVudHJ5RmxhZyBkZWNsYXJhdGlvbiwgd2hpY2ggbWluaWZpZXJzIHdvbid0IHJlbmFtZSBzaW5jZSB0aGUgZmxhZ1xyXG5cdFx0XHRcdCBpcyBhc3NpZ25lZCB0byBqUXVlcnkncyBnbG9iYWwgJCBvYmplY3QgYW5kIHRodXMgZXhpc3RzIG91dCBvZiBWZWxvY2l0eSdzIG93biBzY29wZS4gKi9cclxuXHRcdFx0XHR2YXIgZGF0YSA9IERhdGEoZWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdGlmIChvcHRzLmxvb3AgIT09IHRydWUgJiYgKCQucXVldWUoZWxlbWVudClbMV0gPT09IHVuZGVmaW5lZCB8fCAhL1xcLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcvaS50ZXN0KCQucXVldWUoZWxlbWVudClbMV0pKSkge1xyXG5cdFx0XHRcdFx0LyogVGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiBkZWxldGVkLiBFbnN1cmUgdGhhdCBpdHMgZGF0YSBjYWNoZSBzdGlsbCBleGlzdHMgYmVmb3JlIGFjdGluZyBvbiBpdC4gKi9cclxuXHRcdFx0XHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0LyogQ2xlYXIgdGhlIGVsZW1lbnQncyByb290UHJvcGVydHlWYWx1ZUNhY2hlLCB3aGljaCB3aWxsIGJlY29tZSBzdGFsZS4gKi9cclxuXHRcdFx0XHRcdFx0ZGF0YS5yb290UHJvcGVydHlWYWx1ZUNhY2hlID0ge307XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtSEFQcm9wZXJ0eUV4aXN0cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHQvKiBJZiBhbnkgM0QgdHJhbnNmb3JtIHN1YnByb3BlcnR5IGlzIGF0IGl0cyBkZWZhdWx0IHZhbHVlIChyZWdhcmRsZXNzIG9mIHVuaXQgdHlwZSksIHJlbW92ZSBpdC4gKi9cclxuXHRcdFx0XHRcdFx0JC5lYWNoKENTUy5MaXN0cy50cmFuc2Zvcm1zM0QsIGZ1bmN0aW9uKGksIHRyYW5zZm9ybU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZGVmYXVsdFZhbHVlID0gL15zY2FsZS8udGVzdCh0cmFuc2Zvcm1OYW1lKSA/IDEgOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWUgPSBkYXRhLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXSAhPT0gdW5kZWZpbmVkICYmIG5ldyBSZWdFeHAoXCJeXFxcXChcIiArIGRlZmF1bHRWYWx1ZSArIFwiW14uXVwiKS50ZXN0KGN1cnJlbnRWYWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBkYXRhLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBNb2JpbGUgZGV2aWNlcyBoYXZlIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiByZW1vdmVkIGF0IHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbiBpbiBvcmRlciB0byBhdm9pZCBob2dnaW5nIHRoZSBHUFUncyBtZW1vcnkuICovXHJcblx0XHRcdFx0XHRcdGlmIChvcHRzLm1vYmlsZUhBKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtSEFQcm9wZXJ0eUV4aXN0cyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGRhdGEudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8qIEZsdXNoIHRoZSBzdWJwcm9wZXJ0eSByZW1vdmFscyB0byB0aGUgRE9NLiAqL1xyXG5cdFx0XHRcdFx0XHRpZiAodHJhbnNmb3JtSEFQcm9wZXJ0eUV4aXN0cykge1xyXG5cdFx0XHRcdFx0XHRcdENTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlIFwidmVsb2NpdHktYW5pbWF0aW5nXCIgaW5kaWNhdG9yIGNsYXNzLiAqL1xyXG5cdFx0XHRcdFx0XHRDU1MuVmFsdWVzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIFwidmVsb2NpdHktYW5pbWF0aW5nXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IENvbXBsZXRlXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogQ29tcGxldGUgaXMgZmlyZWQgb25jZSBwZXIgY2FsbCAobm90IG9uY2UgcGVyIGVsZW1lbnQpIGFuZCBpcyBwYXNzZWQgdGhlIGZ1bGwgcmF3IERPTSBlbGVtZW50IHNldCBhcyBib3RoIGl0cyBjb250ZXh0IGFuZCBpdHMgZmlyc3QgYXJndW1lbnQuICovXHJcblx0XHRcdFx0LyogTm90ZTogQ2FsbGJhY2tzIGFyZW4ndCBmaXJlZCB3aGVuIGNhbGxzIGFyZSBtYW51YWxseSBzdG9wcGVkICh2aWEgVmVsb2NpdHkoXCJzdG9wXCIpLiAqL1xyXG5cdFx0XHRcdGlmICghaXNTdG9wcGVkICYmIG9wdHMuY29tcGxldGUgJiYgIW9wdHMubG9vcCAmJiAoaSA9PT0gY2FsbExlbmd0aCAtIDEpKSB7XHJcblx0XHRcdFx0XHQvKiBXZSB0aHJvdyBjYWxsYmFja3MgaW4gYSBzZXRUaW1lb3V0IHNvIHRoYXQgdGhyb3duIGVycm9ycyBkb24ndCBoYWx0IHRoZSBleGVjdXRpb24gb2YgVmVsb2NpdHkgaXRzZWxmLiAqL1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0b3B0cy5jb21wbGV0ZS5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0IFByb21pc2UgUmVzb2x2aW5nXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHRcdC8qIE5vdGU6IEluZmluaXRlIGxvb3BzIGRvbid0IHJldHVybiBwcm9taXNlcy4gKi9cclxuXHRcdFx0XHRpZiAocmVzb2x2ZXIgJiYgb3B0cy5sb29wICE9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlcihlbGVtZW50cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBPcHRpb246IExvb3AgKEluZmluaXRlKVxyXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRcdFx0XHRpZiAoZGF0YSAmJiBvcHRzLmxvb3AgPT09IHRydWUgJiYgIWlzU3RvcHBlZCkge1xyXG5cdFx0XHRcdFx0LyogSWYgYSByb3RhdGVYL1kvWiBwcm9wZXJ0eSBpcyBiZWluZyBhbmltYXRlZCBieSAzNjAgZGVnIHdpdGggbG9vcDp0cnVlLCBzd2FwIHR3ZWVuIHN0YXJ0L2VuZCB2YWx1ZXMgdG8gZW5hYmxlXHJcblx0XHRcdFx0XHQgY29udGludW91cyBpdGVyYXRpdmUgcm90YXRpb24gbG9vcGluZy4gKE90aGVyaXNlLCB0aGUgZWxlbWVudCB3b3VsZCBqdXN0IHJvdGF0ZSBiYWNrIGFuZCBmb3J0aC4pICovXHJcblx0XHRcdFx0XHQkLmVhY2goZGF0YS50d2VlbnNDb250YWluZXIsIGZ1bmN0aW9uKHByb3BlcnR5TmFtZSwgdHdlZW5Db250YWluZXIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKC9ecm90YXRlLy50ZXN0KHByb3BlcnR5TmFtZSkgJiYgKChwYXJzZUZsb2F0KHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWUpIC0gcGFyc2VGbG9hdCh0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZSkpICUgMzYwID09PSAwKSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBvbGRTdGFydFZhbHVlID0gdHdlZW5Db250YWluZXIuc3RhcnRWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dHdlZW5Db250YWluZXIuc3RhcnRWYWx1ZSA9IHR3ZWVuQ29udGFpbmVyLmVuZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdHR3ZWVuQ29udGFpbmVyLmVuZFZhbHVlID0gb2xkU3RhcnRWYWx1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KHByb3BlcnR5TmFtZSkgJiYgcGFyc2VGbG9hdCh0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZSkgPT09IDEwMCAmJiB0d2VlbkNvbnRhaW5lci51bml0VHlwZSA9PT0gXCIlXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0dHdlZW5Db250YWluZXIuc3RhcnRWYWx1ZSA9IDEwMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0VmVsb2NpdHkoZWxlbWVudCwgXCJyZXZlcnNlXCIsIHtsb29wOiB0cnVlLCBkZWxheTogb3B0cy5kZWxheX0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdCBEZXF1ZXVlaW5nXHJcblx0XHRcdFx0ICoqKioqKioqKioqKioqKi9cclxuXHJcblx0XHRcdFx0LyogRmlyZSB0aGUgbmV4dCBjYWxsIGluIHRoZSBxdWV1ZSBzbyBsb25nIGFzIHRoaXMgY2FsbCdzIHF1ZXVlIHdhc24ndCBzZXQgdG8gZmFsc2UgKHRvIHRyaWdnZXIgYSBwYXJhbGxlbCBhbmltYXRpb24pLFxyXG5cdFx0XHRcdCB3aGljaCB3b3VsZCBoYXZlIGFscmVhZHkgY2F1c2VkIHRoZSBuZXh0IGNhbGwgdG8gZmlyZS4gTm90ZTogRXZlbiBpZiB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24gcXVldWUgaGFzIGJlZW4gcmVhY2hlZCxcclxuXHRcdFx0XHQgJC5kZXF1ZXVlKCkgbXVzdCBzdGlsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY29tcGxldGVseSBjbGVhciBqUXVlcnkncyBhbmltYXRpb24gcXVldWUuICovXHJcblx0XHRcdFx0aWYgKG9wdHMucXVldWUgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbWVudCwgb3B0cy5xdWV1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdCBDYWxscyBBcnJheSBDbGVhbnVwXHJcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0XHQvKiBTaW5jZSB0aGlzIGNhbGwgaXMgY29tcGxldGUsIHNldCBpdCB0byBmYWxzZSBzbyB0aGF0IHRoZSByQUYgdGljayBza2lwcyBpdC4gVGhpcyBhcnJheSBpcyBsYXRlciBjb21wYWN0ZWQgdmlhIGNvbXBhY3RTcGFyc2VBcnJheSgpLlxyXG5cdFx0XHQgKEZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB0aGUgY2FsbCBpcyBzZXQgdG8gZmFsc2UgaW5zdGVhZCBvZiBiZWluZyBkZWxldGVkIGZyb20gdGhlIGFycmF5OiBodHRwOi8vd3d3Lmh0bWw1cm9ja3MuY29tL2VuL3R1dG9yaWFscy9zcGVlZC92OC8pICovXHJcblx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF0gPSBmYWxzZTtcclxuXHJcblx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2FsbHMgYXJyYXkgdG8gZGV0ZXJtaW5lIGlmIHRoaXMgd2FzIHRoZSBmaW5hbCBpbi1wcm9ncmVzcyBhbmltYXRpb24uXHJcblx0XHRcdCBJZiBzbywgc2V0IGEgZmxhZyB0byBlbmQgdGlja2luZyBhbmQgY2xlYXIgdGhlIGNhbGxzIGFycmF5LiAqL1xyXG5cdFx0XHRmb3IgKHZhciBqID0gMCwgY2FsbHNMZW5ndGggPSBWZWxvY2l0eS5TdGF0ZS5jYWxscy5sZW5ndGg7IGogPCBjYWxsc0xlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKFZlbG9jaXR5LlN0YXRlLmNhbGxzW2pdICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0cmVtYWluaW5nQ2FsbHNFeGlzdCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVtYWluaW5nQ2FsbHNFeGlzdCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQvKiB0aWNrKCkgd2lsbCBkZXRlY3QgdGhpcyBmbGFnIHVwb24gaXRzIG5leHQgaXRlcmF0aW9uIGFuZCBzdWJzZXF1ZW50bHkgdHVybiBpdHNlbGYgb2ZmLiAqL1xyXG5cdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmlzVGlja2luZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvKiBDbGVhciB0aGUgY2FsbHMgYXJyYXkgc28gdGhhdCBpdHMgbGVuZ3RoIGlzIHJlc2V0LiAqL1xyXG5cdFx0XHRcdGRlbGV0ZSBWZWxvY2l0eS5TdGF0ZS5jYWxscztcclxuXHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5jYWxscyA9IFtdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqKioqKioqKioqKioqKioqKlxyXG5cdFx0IEZyYW1ld29ya3NcclxuXHRcdCAqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdFx0LyogQm90aCBqUXVlcnkgYW5kIFplcHRvIGFsbG93IHRoZWlyICQuZm4gb2JqZWN0IHRvIGJlIGV4dGVuZGVkIHRvIGFsbG93IHdyYXBwZWQgZWxlbWVudHMgdG8gYmUgc3ViamVjdGVkIHRvIHBsdWdpbiBjYWxscy5cclxuXHRcdCBJZiBlaXRoZXIgZnJhbWV3b3JrIGlzIGxvYWRlZCwgcmVnaXN0ZXIgYSBcInZlbG9jaXR5XCIgZXh0ZW5zaW9uIHBvaW50aW5nIHRvIFZlbG9jaXR5J3MgY29yZSBhbmltYXRlKCkgbWV0aG9kLiAgVmVsb2NpdHlcclxuXHRcdCBhbHNvIHJlZ2lzdGVycyBpdHNlbGYgb250byBhIGdsb2JhbCBjb250YWluZXIgKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdykgc28gdGhhdCBjZXJ0YWluIGZlYXR1cmVzIGFyZVxyXG5cdFx0IGFjY2Vzc2libGUgYmV5b25kIGp1c3QgYSBwZXItZWxlbWVudCBzY29wZS4gVGhpcyBtYXN0ZXIgb2JqZWN0IGNvbnRhaW5zIGFuIC5hbmltYXRlKCkgbWV0aG9kLCB3aGljaCBpcyBsYXRlciBhc3NpZ25lZCB0byAkLmZuXHJcblx0XHQgKGlmIGpRdWVyeSBvciBaZXB0byBhcmUgcHJlc2VudCkuIEFjY29yZGluZ2x5LCBWZWxvY2l0eSBjYW4gYm90aCBhY3Qgb24gd3JhcHBlZCBET00gZWxlbWVudHMgYW5kIHN0YW5kIGFsb25lIGZvciB0YXJnZXRpbmcgcmF3IERPTSBlbGVtZW50cy4gKi9cclxuXHRcdGdsb2JhbC5WZWxvY2l0eSA9IFZlbG9jaXR5O1xyXG5cclxuXHRcdGlmIChnbG9iYWwgIT09IHdpbmRvdykge1xyXG5cdFx0XHQvKiBBc3NpZ24gdGhlIGVsZW1lbnQgZnVuY3Rpb24gdG8gVmVsb2NpdHkncyBjb3JlIGFuaW1hdGUoKSBtZXRob2QuICovXHJcblx0XHRcdGdsb2JhbC5mbi52ZWxvY2l0eSA9IGFuaW1hdGU7XHJcblx0XHRcdC8qIEFzc2lnbiB0aGUgb2JqZWN0IGZ1bmN0aW9uJ3MgZGVmYXVsdHMgdG8gVmVsb2NpdHkncyBnbG9iYWwgZGVmYXVsdHMgb2JqZWN0LiAqL1xyXG5cdFx0XHRnbG9iYWwuZm4udmVsb2NpdHkuZGVmYXVsdHMgPSBWZWxvY2l0eS5kZWZhdWx0cztcclxuXHRcdH1cclxuXHJcblx0XHQvKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdCBQYWNrYWdlZCBSZWRpcmVjdHNcclxuXHRcdCAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0XHQvKiBzbGlkZVVwLCBzbGlkZURvd24gKi9cclxuXHRcdCQuZWFjaChbXCJEb3duXCIsIFwiVXBcIl0sIGZ1bmN0aW9uKGksIGRpcmVjdGlvbikge1xyXG5cdFx0XHRWZWxvY2l0eS5SZWRpcmVjdHNbXCJzbGlkZVwiICsgZGlyZWN0aW9uXSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMsIGVsZW1lbnRzSW5kZXgsIGVsZW1lbnRzU2l6ZSwgZWxlbWVudHMsIHByb21pc2VEYXRhKSB7XHJcblx0XHRcdFx0dmFyIG9wdHMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyksXHJcblx0XHRcdFx0XHRcdGJlZ2luID0gb3B0cy5iZWdpbixcclxuXHRcdFx0XHRcdFx0Y29tcGxldGUgPSBvcHRzLmNvbXBsZXRlLFxyXG5cdFx0XHRcdFx0XHRpbmxpbmVWYWx1ZXMgPSB7fSxcclxuXHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZXMgPSB7aGVpZ2h0OiBcIlwiLCBtYXJnaW5Ub3A6IFwiXCIsIG1hcmdpbkJvdHRvbTogXCJcIiwgcGFkZGluZ1RvcDogXCJcIiwgcGFkZGluZ0JvdHRvbTogXCJcIn07XHJcblxyXG5cdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0LyogU2hvdyB0aGUgZWxlbWVudCBiZWZvcmUgc2xpZGVEb3duIGJlZ2lucyBhbmQgaGlkZSB0aGUgZWxlbWVudCBhZnRlciBzbGlkZVVwIGNvbXBsZXRlcy4gKi9cclxuXHRcdFx0XHRcdC8qIE5vdGU6IElubGluZSBlbGVtZW50cyBjYW5ub3QgaGF2ZSBkaW1lbnNpb25zIGFuaW1hdGVkLCBzbyB0aGV5J3JlIHJldmVydGVkIHRvIGlubGluZS1ibG9jay4gKi9cclxuXHRcdFx0XHRcdG9wdHMuZGlzcGxheSA9IChkaXJlY3Rpb24gPT09IFwiRG93blwiID8gKFZlbG9jaXR5LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZWxlbWVudCkgPT09IFwiaW5saW5lXCIgPyBcImlubGluZS1ibG9ja1wiIDogXCJibG9ja1wiKSA6IFwibm9uZVwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9wdHMuYmVnaW4gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8qIElmIHRoZSB1c2VyIHBhc3NlZCBpbiBhIGJlZ2luIGNhbGxiYWNrLCBmaXJlIGl0IG5vdy4gKi9cclxuXHRcdFx0XHRcdGlmIChlbGVtZW50c0luZGV4ID09PSAwICYmIGJlZ2luKSB7XHJcblx0XHRcdFx0XHRcdGJlZ2luLmNhbGwoZWxlbWVudHMsIGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBDYWNoZSB0aGUgZWxlbWVudHMnIG9yaWdpbmFsIHZlcnRpY2FsIGRpbWVuc2lvbmFsIHByb3BlcnR5IHZhbHVlcyBzbyB0aGF0IHdlIGNhbiBhbmltYXRlIGJhY2sgdG8gdGhlbS4gKi9cclxuXHRcdFx0XHRcdGZvciAodmFyIHByb3BlcnR5IGluIGNvbXB1dGVkVmFsdWVzKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY29tcHV0ZWRWYWx1ZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aW5saW5lVmFsdWVzW3Byb3BlcnR5XSA9IGVsZW1lbnQuc3R5bGVbcHJvcGVydHldO1xyXG5cclxuXHRcdFx0XHRcdFx0LyogRm9yIHNsaWRlRG93biwgdXNlIGZvcmNlZmVlZGluZyB0byBhbmltYXRlIGFsbCB2ZXJ0aWNhbCBwcm9wZXJ0aWVzIGZyb20gMC4gRm9yIHNsaWRlVXAsXHJcblx0XHRcdFx0XHRcdCB1c2UgZm9yY2VmZWVkaW5nIHRvIHN0YXJ0IGZyb20gY29tcHV0ZWQgdmFsdWVzIGFuZCBhbmltYXRlIGRvd24gdG8gMC4gKi9cclxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBwcm9wZXJ0eSk7XHJcblx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWVzW3Byb3BlcnR5XSA9IChkaXJlY3Rpb24gPT09IFwiRG93blwiKSA/IFtwcm9wZXJ0eVZhbHVlLCAwXSA6IFswLCBwcm9wZXJ0eVZhbHVlXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBGb3JjZSB2ZXJ0aWNhbCBvdmVyZmxvdyBjb250ZW50IHRvIGNsaXAgc28gdGhhdCBzbGlkaW5nIHdvcmtzIGFzIGV4cGVjdGVkLiAqL1xyXG5cdFx0XHRcdFx0aW5saW5lVmFsdWVzLm92ZXJmbG93ID0gZWxlbWVudC5zdHlsZS5vdmVyZmxvdztcclxuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdG9wdHMuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8qIFJlc2V0IGVsZW1lbnQgdG8gaXRzIHByZS1zbGlkZSBpbmxpbmUgdmFsdWVzIG9uY2UgaXRzIHNsaWRlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS4gKi9cclxuXHRcdFx0XHRcdGZvciAodmFyIHByb3BlcnR5IGluIGlubGluZVZhbHVlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5saW5lVmFsdWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gaW5saW5lVmFsdWVzW3Byb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8qIElmIHRoZSB1c2VyIHBhc3NlZCBpbiBhIGNvbXBsZXRlIGNhbGxiYWNrLCBmaXJlIGl0IG5vdy4gKi9cclxuXHRcdFx0XHRcdGlmIChlbGVtZW50c0luZGV4ID09PSBlbGVtZW50c1NpemUgLSAxKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlLmNhbGwoZWxlbWVudHMsIGVsZW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAocHJvbWlzZURhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRWZWxvY2l0eShlbGVtZW50LCBjb21wdXRlZFZhbHVlcywgb3B0cyk7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiBmYWRlSW4sIGZhZGVPdXQgKi9cclxuXHRcdCQuZWFjaChbXCJJblwiLCBcIk91dFwiXSwgZnVuY3Rpb24oaSwgZGlyZWN0aW9uKSB7XHJcblx0XHRcdFZlbG9jaXR5LlJlZGlyZWN0c1tcImZhZGVcIiArIGRpcmVjdGlvbl0gPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBlbGVtZW50c0luZGV4LCBlbGVtZW50c1NpemUsIGVsZW1lbnRzLCBwcm9taXNlRGF0YSkge1xyXG5cdFx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe30sIG9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZSA9IG9wdHMuY29tcGxldGUsXHJcblx0XHRcdFx0XHRcdHByb3BlcnRpZXNNYXAgPSB7b3BhY2l0eTogKGRpcmVjdGlvbiA9PT0gXCJJblwiKSA/IDEgOiAwfTtcclxuXHJcblx0XHRcdFx0LyogU2luY2UgcmVkaXJlY3RzIGFyZSB0cmlnZ2VyZWQgaW5kaXZpZHVhbGx5IGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGFuaW1hdGVkIHNldCwgYXZvaWQgcmVwZWF0ZWRseSB0cmlnZ2VyaW5nXHJcblx0XHRcdFx0IGNhbGxiYWNrcyBieSBmaXJpbmcgdGhlbSBvbmx5IHdoZW4gdGhlIGZpbmFsIGVsZW1lbnQgaGFzIGJlZW4gcmVhY2hlZC4gKi9cclxuXHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0b3B0cy5iZWdpbiA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChlbGVtZW50c0luZGV4ICE9PSBlbGVtZW50c1NpemUgLSAxKSB7XHJcblx0XHRcdFx0XHRvcHRzLmNvbXBsZXRlID0gbnVsbDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0cy5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tcGxldGUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZS5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIoZWxlbWVudHMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogSWYgYSBkaXNwbGF5IHdhcyBwYXNzZWQgaW4sIHVzZSBpdC4gT3RoZXJ3aXNlLCBkZWZhdWx0IHRvIFwibm9uZVwiIGZvciBmYWRlT3V0IG9yIHRoZSBlbGVtZW50LXNwZWNpZmljIGRlZmF1bHQgZm9yIGZhZGVJbi4gKi9cclxuXHRcdFx0XHQvKiBOb3RlOiBXZSBhbGxvdyB1c2VycyB0byBwYXNzIGluIFwibnVsbFwiIHRvIHNraXAgZGlzcGxheSBzZXR0aW5nIGFsdG9nZXRoZXIuICovXHJcblx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRvcHRzLmRpc3BsYXkgPSAoZGlyZWN0aW9uID09PSBcIkluXCIgPyBcImF1dG9cIiA6IFwibm9uZVwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFZlbG9jaXR5KHRoaXMsIHByb3BlcnRpZXNNYXAsIG9wdHMpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIFZlbG9jaXR5O1xyXG5cdH0oKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdyksIHdpbmRvdywgKHdpbmRvdyA/IHdpbmRvdy5kb2N1bWVudCA6IHVuZGVmaW5lZCkpO1xyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqXHJcbiBLbm93biBJc3N1ZXNcclxuICoqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qIFRoZSBDU1Mgc3BlYyBtYW5kYXRlcyB0aGF0IHRoZSB0cmFuc2xhdGVYL1kvWiB0cmFuc2Zvcm1zIGFyZSAlLXJlbGF0aXZlIHRvIHRoZSBlbGVtZW50IGl0c2VsZiAtLSBub3QgaXRzIHBhcmVudC5cclxuIFZlbG9jaXR5LCBob3dldmVyLCBkb2Vzbid0IG1ha2UgdGhpcyBkaXN0aW5jdGlvbi4gVGh1cywgY29udmVydGluZyB0byBvciBmcm9tIHRoZSAlIHVuaXQgd2l0aCB0aGVzZSBzdWJwcm9wZXJ0aWVzXHJcbiB3aWxsIHByb2R1Y2UgYW4gaW5hY2N1cmF0ZSBjb252ZXJzaW9uIHZhbHVlLiBUaGUgc2FtZSBpc3N1ZSBleGlzdHMgd2l0aCB0aGUgY3gvY3kgYXR0cmlidXRlcyBvZiBTVkcgY2lyY2xlcyBhbmQgZWxsaXBzZXMuICovXHJcbiIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19WVUVfSE9UX01BUF9fID0gbWFwXG59XG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsZWQgPSB0cnVlXG5cbiAgVnVlID0gdnVlLl9fZXNNb2R1bGUgPyB2dWUuZGVmYXVsdCA6IHZ1ZVxuICB2ZXJzaW9uID0gVnVlLnZlcnNpb24uc3BsaXQoJy4nKS5tYXAoTnVtYmVyKVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgLy8gY29tcGF0IHdpdGggPCAyLjAuMC1hbHBoYS43XG4gIGlmIChWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMSkge1xuICAgIGluaXRIb29rTmFtZSA9ICdpbml0J1xuICB9XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gdmVyc2lvblswXSA+PSAyXG4gIGlmICghZXhwb3J0cy5jb21wYXRpYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tITVJdIFlvdSBhcmUgdXNpbmcgYSB2ZXJzaW9uIG9mIHZ1ZS1ob3QtcmVsb2FkLWFwaSB0aGF0IGlzICcgK1xuICAgICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmKG1hcFtpZF0pIHsgcmV0dXJuIH1cblxuICB2YXIgQ3RvciA9IG51bGxcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgQ3RvciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zXG4gIH1cbiAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gIG1hcFtpZF0gPSB7XG4gICAgQ3RvcjogQ3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1vZHVsZSBpcyByZWNvcmRlZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5cbmV4cG9ydHMuaXNSZWNvcmRlZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gdHlwZW9mIG1hcFtpZF0gIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogTWFrZSBhIENvbXBvbmVudCBvcHRpb25zIG9iamVjdCBob3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaWYgKGN0eCAmJiBpbnN0YW5jZXMuaW5kZXhPZihjdHgucGFyZW50KSA8IDApIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2goY3R4LnBhcmVudClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsIGluaXRIb29rTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICAgICAgaWYgKCFyZWNvcmQuQ3Rvcikge1xuICAgICAgICByZWNvcmQuQ3RvciA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICAgIH0pXG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sob3B0aW9ucywgbmFtZSwgaG9vaykge1xuICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zW25hbWVdXG4gIG9wdGlvbnNbbmFtZV0gPSBleGlzdGluZ1xuICAgID8gQXJyYXkuaXNBcnJheShleGlzdGluZykgPyBleGlzdGluZy5jb25jYXQoaG9vaykgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgZm4oaWQsIGFyZylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9sZE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9sZE9wdGlvbnMpIHtcbiAgICBpZiAoIShrZXkgaW4gbmV3T3B0aW9ucykpIHtcbiAgICAgIGRlbGV0ZSBvbGRPcHRpb25zW2tleV1cbiAgICB9XG4gIH1cbiAgZm9yICh2YXIga2V5JDEgaW4gbmV3T3B0aW9ucykge1xuICAgIG9sZE9wdGlvbnNba2V5JDFdID0gbmV3T3B0aW9uc1trZXkkMV1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICAgIC8vIHJlc2V0IHN0YXRpYyB0cmVlc1xuICAgICAgLy8gcHJlIDIuNSwgYWxsIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIHRvZ2V0aGVyIG9uIHRoZSBpbnN0YW5jZVxuICAgICAgaWYgKGluc3RhbmNlLl9zdGF0aWNUcmVlcykge1xuICAgICAgICBpbnN0YW5jZS5fc3RhdGljVHJlZXMgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjBcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICBpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gcG9zdCAyLjUuNDogdi1vbmNlIHRyZWVzIGFyZSBjYWNoZWQgb24gaW5zdGFuY2UuX3N0YXRpY1RyZWVzLlxuICAgICAgLy8gUHVyZSBzdGF0aWMgdHJlZXMgYXJlIGNhY2hlZCBvbiB0aGUgc3RhdGljUmVuZGVyRm5zIGFycmF5XG4gICAgICAvLyAoYm90aCBhbHJlYWR5IHJlc2V0IGFib3ZlKVxuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGZ1bmN0aW9uYWwgb3Igbm8gaW5zdGFuY2UgY3JlYXRlZCB5ZXRcbiAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG5cbiAgICAvLyBoYW5kbGUgZnVuY3Rpb25hbCBjb21wb25lbnQgcmUtcmVuZGVyXG4gICAgaWYgKHJlY29yZC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIHJlcmVuZGVyIHdpdGggZnVsbCBvcHRpb25zXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMikge1xuICAgICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGVtcGxhdGUtb25seSByZXJlbmRlci5cbiAgICAgICAgLy8gbmVlZCB0byBpbmplY3QgdGhlIHN0eWxlIGluamVjdGlvbiBjb2RlIGZvciBDU1MgbW9kdWxlc1xuICAgICAgICAvLyB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgICB2YXIgaW5qZWN0U3R5bGVzID0gcmVjb3JkLm9wdGlvbnMuX2luamVjdFN0eWxlc1xuICAgICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICAgICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoY3R4KVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWNvcmQub3B0aW9ucy5fQ3RvciA9IG51bGxcbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnRzLnJlbG9hZCA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gICAgfVxuICAgIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICAgIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgICAgaWYgKHZlcnNpb25bMV0gPCAyKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIHByZSAyLjIgYmVoYXZpb3IgZm9yIGdsb2JhbCBtaXhpbiBoYW5kbGluZ1xuICAgICAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgfVxuICAgICAgdmFyIG5ld0N0b3IgPSByZWNvcmQuQ3Rvci5zdXBlci5leHRlbmQob3B0aW9ucylcbiAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgICAgIHJlY29yZC5DdG9yLmNpZCA9IG5ld0N0b3IuY2lkXG4gICAgICByZWNvcmQuQ3Rvci5wcm90b3R5cGUgPSBuZXdDdG9yLnByb3RvdHlwZVxuICAgICAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgICAgICAvLyB0ZW1wb3JhcnkgZ2xvYmFsIG1peGluIHN0cmF0ZWd5IHVzZWQgaW4gPCAyLjAuMC1hbHBoYS42XG4gICAgICAgIG5ld0N0b3IucmVsZWFzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1Jvb3Qgb3IgbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSBtb2RpZmllZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pXG4iLCIvKiFcbiAqIHZ1ZS1zbGlkZS1iYXIgdjEuMS45XG4gKiAoYykgMjAxOC1wcmVzZW50IFBvbmdzYXRvcm4gTml0aXRoYW1tYXdvb3QgPGJpaWdfcG9uZ3NhdG9ybkBob3RtYWlsLmNvbT5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC52dWVTbGlkZUJhcj1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe3ZhciB0PWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxpPVwiIC52dWUtc2xpZGUtYmFyLWNvbXBvbmVudFtkYXRhLXYtNjg4NjNlNDhdIHsgcG9zaXRpb246IHJlbGF0aXZlOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB1c2VyLXNlbGVjdDogbm9uZTsgfSAudnVlLXNsaWRlLWJhcltkYXRhLXYtNjg4NjNlNDhdIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyLXJhZGl1czogMTVweDsgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODsgY3Vyc29yOiBwb2ludGVyOyB9IC52dWUtc2xpZGUtYmFyW2RhdGEtdi02ODg2M2U0OF06OmFmdGVyIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB6LWluZGV4OiAyOyB9IC52dWUtc2xpZGUtYmFyLXByb2Nlc3NbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm9yZGVyLXJhZGl1czogMTVweDsgYmFja2dyb3VuZC1jb2xvcjogIzEwNjZGRDsgdHJhbnNpdGlvbjogYWxsIDBzOyB6LWluZGV4OiAxOyB3aWR0aDogMDsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpbGwtY2hhbmdlOiB3aWR0aDsgfSAudnVlLXNsaWRlLWJhci10b29sdGlwLWNvbnRhaW5lcltkYXRhLXYtNjg4NjNlNDhdIHsgcG9zaXRpb246IGFic29sdXRlOyB0cmFuc2l0aW9uOiBhbGwgMHM7IHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07IGN1cnNvcjogcG9pbnRlcjsgei1pbmRleDogMzsgbGVmdDogMDsgdG9wOiAtMTZweDsgfSAudnVlLXNsaWRlLWJhci10b29sdGlwLXdyYXBbZGF0YS12LTY4ODYzZTQ4XSB7IC8qIGRpc3BsYXk6IG5vbmU7ICovIHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogOTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfSAudnVlLXNsaWRlLWJhci10b29sdGlwLXRvcFtkYXRhLXYtNjg4NjNlNDhdIHsgdG9wOiAtMTJweDsgbGVmdDogNDAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7IH0gLnZ1ZS1zbGlkZS1iYXItdG9vbHRpcFtkYXRhLXYtNjg4NjNlNDhdIHsgcG9zaXRpb246IHJlbGF0aXZlOyBmb250LXNpemU6IDE0cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IHBhZGRpbmc6IDJweCA1cHg7IG1pbi13aWR0aDogMjBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjMTA2NkZEOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2NkZEOyB9IC52dWUtc2xpZGUtYmFyLXRvb2x0aXBbZGF0YS12LTY4ODYzZTQ4XTo6YmVmb3JlIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAtMTBweDsgbGVmdDogNTAlOyB3aWR0aDogMDsgaGVpZ2h0OiAwOyBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7IH0gLnZ1ZS1zbGlkZS1iYXItcmFuZ2VbZGF0YS12LTY4ODYzZTQ4XSB7IGRpc3BsYXk6IGZsZXg7IHBhZGRpbmc6IDVweCAwOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH0gLnZ1ZS1zbGlkZS1iYXItc2VwYXJhdGVbZGF0YS12LTY4ODYzZTQ4XSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDJweDsgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTsgaGVpZ2h0OiA1cHg7IGN1cnNvcjogcG9pbnRlcjsgfSAudnVlLXNsaWRlLWJhci1zZXBhcmF0ZS10ZXh0W2RhdGEtdi02ODg2M2U0OF0geyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7IHRvcDogNnB4OyB9IFwiO2UudHlwZT1cInRleHQvY3NzXCIsZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PWk6ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpKSksdC5hcHBlbmRDaGlsZChlKX19KCkse3JlbmRlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LiRjcmVhdGVFbGVtZW50LGk9dC5fc2VsZi5fY3x8ZTtyZXR1cm4gaShcImRpdlwiLHtyZWY6XCJ3cmFwXCIsc3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyLWNvbXBvbmVudCB2dWUtc2xpZGUtYmFyLWhvcml6b250YWxcIixzdHlsZTp0LmNhbGN1bGF0ZUhlaWdodCxhdHRyczp7aWQ6XCJ3cmFwXCJ9LG9uOntjbGljazp0LndyYXBDbGlja319LFtpKFwiZGl2XCIse3JlZjpcImVsZW1cIixzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXJcIixzdHlsZTp7aGVpZ2h0OnQubGluZUhlaWdodCtcInB4XCJ9LGF0dHJzOntpZDpcInNsaWRlclwifX0sW1tpKFwiZGl2XCIse3JlZjpcInRvb2x0aXBcIixzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXItYWx3YXlzIHZ1ZS1zbGlkZS1iYXItdG9vbHRpcC1jb250YWluZXJcIixzdHlsZTp7d2lkdGg6dC5pY29uV2lkdGgrXCJweFwifSxvbjp7bW91c2Vkb3duOnQubW92ZVN0YXJ0LHRvdWNoc3RhcnQ6dC5tb3ZlU3RhcnR9fSxbdC5zaG93VG9vbHRpcD9pKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS1zbGlkZS1iYXItdG9vbHRpcC10b3AgdnVlLXNsaWRlLWJhci10b29sdGlwLXdyYXBcIn0sW3QuX3QoXCJ0b29sdGlwXCIsW2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci10b29sdGlwXCIsc3R5bGU6dC50b29sdGlwU3R5bGVzfSxbdC5fdih0Ll9zKHQudmFsKSldKV0pXSwyKTp0Ll9lKCldKV0sdC5fdihcIiBcIiksaShcImRpdlwiLHtyZWY6XCJwcm9jZXNzXCIsc3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyLXByb2Nlc3NcIixzdHlsZTp0LnByb2Nlc3NTdHlsZX0pXSwyKSx0Ll92KFwiIFwiKSx0LnJhbmdlP2koXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtc2xpZGUtYmFyLXJhbmdlXCJ9LHQuX2wodC5yYW5nZSxmdW5jdGlvbihlLHMpe3JldHVybiBpKFwiZGl2XCIse2tleTpzLHN0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci1zZXBhcmF0ZVwiLHN0eWxlOnQuZGF0YUxhYmVsU3R5bGVzfSxbZS5pc0hpZGU/dC5fZSgpOmkoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLXNsaWRlLWJhci1zZXBhcmF0ZS10ZXh0XCJ9LFt0Ll92KFwiIFwiK3QuX3MoZS5sYWJlbCkrXCIgXCIpXSldKX0pKTp0Ll9lKCldKX0sc3RhdGljUmVuZGVyRm5zOltdLF9zY29wZUlkOlwiZGF0YS12LTY4ODYzZTQ4XCIsbmFtZTpcIlZ1ZVNsaWRlQmFyXCIsZGF0YTpmdW5jdGlvbigpe3JldHVybntmbGFnOiExLHNpemU6MCxjdXJyZW50VmFsdWU6MCxjdXJyZW50U2xpZGVyOjAsaXNDb21wb25lbnRFeGlzdHM6ITAsaW50ZXJ2YWw6MSxsYXp5OiExLHJlYWxUaW1lOiExLGRhdGFMYWJlbFN0eWxlczpPYmplY3QuYXNzaWduKHtjb2xvcjpcIiM0YTRhNGFcIixcImZvbnQtZmFtaWx5XCI6XCJBcmlhbCwgc2Fucy1zZXJpZlwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LHRoaXMuJHByb3BzLmxhYmVsU3R5bGVzKX19LHByb3BzOntkYXRhOnt0eXBlOkFycmF5LGRlZmF1bHQ6bnVsbH0scmFuZ2U6e3R5cGU6QXJyYXksZGVmYXVsdDpudWxsfSxzcGVlZDp7dHlwZTpOdW1iZXIsZGVmYXVsdDouNX0sbGluZUhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo1fSxpY29uV2lkdGg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjB9LHZhbHVlOnt0eXBlOltTdHJpbmcsTnVtYmVyXSxkZWZhdWx0OjB9LG1pbjp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSxtYXg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MTAwfSxzaG93VG9vbHRpcDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGlzRGlzYWJsZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxkcmFnZ2FibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxwYWRkaW5nbGVzczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHRvb2x0aXBTdHlsZXM6T2JqZWN0LGxhYmVsU3R5bGVzOk9iamVjdCxwcm9jZXNzU3R5bGU6T2JqZWN0fSxjb21wdXRlZDp7c2xpZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHJlZnMudG9vbHRpcH0sdmFsOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhP3RoaXMuZGF0YVt0aGlzLmN1cnJlbnRWYWx1ZV06dGhpcy5jdXJyZW50VmFsdWV9LHNldDpmdW5jdGlvbih0KXtpZih0aGlzLmRhdGEpe3ZhciBlPXRoaXMuZGF0YS5pbmRleE9mKHQpO2U+LTEmJih0aGlzLmN1cnJlbnRWYWx1ZT1lKX1lbHNlIHRoaXMuY3VycmVudFZhbHVlPXR9fSxjdXJyZW50SW5kZXg6ZnVuY3Rpb24oKXtyZXR1cm4odGhpcy5jdXJyZW50VmFsdWUtdGhpcy5taW5pbXVtKS90aGlzLnNwYWNpbmd9LGluZGV4UmFuZ2U6ZnVuY3Rpb24oKXtyZXR1cm5bMCx0aGlzLmN1cnJlbnRJbmRleF19LG1pbmltdW06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhPzA6dGhpcy5taW59LG1heGltdW06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhP3RoaXMuZGF0YS5sZW5ndGgtMTp0aGlzLm1heH0sbXVsdGlwbGU6ZnVuY3Rpb24oKXt2YXIgdD0oXCJcIit0aGlzLmludGVydmFsKS5zcGxpdChcIi5cIilbMV07cmV0dXJuIHQ/TWF0aC5wb3coMTAsdC5sZW5ndGgpOjF9LHNwYWNpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhPzE6dGhpcy5pbnRlcnZhbH0sdG90YWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhP3RoaXMuZGF0YS5sZW5ndGgtMTooTWF0aC5mbG9vcigodGhpcy5tYXhpbXVtLXRoaXMubWluaW11bSkqdGhpcy5tdWx0aXBsZSklKHRoaXMuaW50ZXJ2YWwqdGhpcy5tdWx0aXBsZSkhPTAmJnRoaXMucHJpbnRFcnJvcihcIltWdWVTbGlkZUJhciBlcnJvcl06IFByb3BbaW50ZXJ2YWxdIGlzIGlsbGVnYWwsIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB0aGUgaW50ZXJ2YWwgY2FuIGJlIGRpdmlzaWJsZVwiKSwodGhpcy5tYXhpbXVtLXRoaXMubWluaW11bSkvdGhpcy5pbnRlcnZhbCl9LGdhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNpemUvdGhpcy50b3RhbH0scG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4odGhpcy5jdXJyZW50VmFsdWUtdGhpcy5taW5pbXVtKS90aGlzLnNwYWNpbmcqdGhpcy5nYXB9LGxpbWl0OmZ1bmN0aW9uKCl7cmV0dXJuWzAsdGhpcy5zaXplXX0sdmFsdWVMaW1pdDpmdW5jdGlvbigpe3JldHVyblt0aGlzLm1pbmltdW0sdGhpcy5tYXhpbXVtXX0sY2FsY3VsYXRlSGVpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFkZGluZ2xlc3M/e306e1wicGFkZGluZy10b3BcIjpcIjQwcHhcIixcIm1pbi1oZWlnaHRcIjp0aGlzLnJhbmdlP1wiMTAwcHhcIjpudWxsfX19LHdhdGNoOnt2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmZsYWc/dGhpcy5zZXRWYWx1ZSh0KTp0aGlzLnNldFZhbHVlKHQsdGhpcy5zcGVlZCl9LG1heDpmdW5jdGlvbih0KXtpZih0PHRoaXMubWluKXJldHVybiB0aGlzLnByaW50RXJyb3IoXCJbVnVlU2xpZGVCYXIgZXJyb3JdOiBUaGUgbWF4aW11bSB2YWx1ZSBjYW4gbm90IGJlIGxlc3MgdGhhbiB0aGUgbWluaW11bSB2YWx1ZS5cIik7dmFyIGU9dGhpcy5saW1pdFZhbHVlKHRoaXMudmFsKTt0aGlzLnNldFZhbHVlKGUpLHRoaXMucmVmcmVzaCgpfSxtaW46ZnVuY3Rpb24odCl7aWYodD50aGlzLm1heClyZXR1cm4gdGhpcy5wcmludEVycm9yKFwiW1Z1ZVNsaWRlQmFyIGVycm9yXTogVGhlIG1pbmltdW0gdmFsdWUgY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gdGhlIG1heGltdW0gdmFsdWUuXCIpO3ZhciBlPXRoaXMubGltaXRWYWx1ZSh0aGlzLnZhbCk7dGhpcy5zZXRWYWx1ZShlKSx0aGlzLnJlZnJlc2goKX19LG1ldGhvZHM6e2JpbmRFdmVudHM6ZnVuY3Rpb24oKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy5tb3Zpbmcse3Bhc3NpdmU6ITF9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLm1vdmVFbmQse3Bhc3NpdmU6ITF9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3ZpbmcpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3ZlRW5kKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW92ZUVuZCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlZnJlc2gpfSx1bmJpbmRFdmVudHM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVmcmVzaCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92aW5nKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLm1vdmVFbmQpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdmluZyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdmVFbmQpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3ZlRW5kKX0sZ2V0UG9zOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJlYWxUaW1lJiZ0aGlzLmdldFN0YXRpY0RhdGEoKSx0LmNsaWVudFgtdGhpcy5vZmZzZXR9LHdyYXBDbGljazpmdW5jdGlvbih0KXtpZih0aGlzLmlzRGlzYWJsZWR8fCF0aGlzLmRyYWdnYWJsZSYmXCJ3cmFwXCI9PT10LnRhcmdldC5pZClyZXR1cm4hMTt2YXIgZT10aGlzLmdldFBvcyh0KTt0aGlzLnNldFZhbHVlT25Qb3MoZSl9LG1vdmVTdGFydDpmdW5jdGlvbih0LGUpe2lmKCF0aGlzLmRyYWdnYWJsZSlyZXR1cm4hMTt0aGlzLmZsYWc9ITAsdGhpcy4kZW1pdChcImRyYWdTdGFydFwiLHRoaXMpfSxtb3Zpbmc6ZnVuY3Rpb24odCl7aWYoIXRoaXMuZmxhZ3x8IXRoaXMuZHJhZ2dhYmxlKXJldHVybiExO3QucHJldmVudERlZmF1bHQoKSx0LnRhcmdldFRvdWNoZXMmJnQudGFyZ2V0VG91Y2hlc1swXSYmKHQ9dC50YXJnZXRUb3VjaGVzWzBdKSx0aGlzLnNldFZhbHVlT25Qb3ModGhpcy5nZXRQb3ModCksITApfSxtb3ZlRW5kOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLmZsYWd8fCF0aGlzLmRyYWdnYWJsZSlyZXR1cm4hMTt0aGlzLiRlbWl0KFwiZHJhZ0VuZFwiLHRoaXMpLHRoaXMubGF6eSYmdGhpcy5pc0RpZmYodGhpcy52YWwsdGhpcy52YWx1ZSkmJnRoaXMuc3luY1ZhbHVlKCksdGhpcy5mbGFnPSExLHRoaXMuc2V0UG9zaXRpb24oKX0sc2V0VmFsdWVPblBvczpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMubGltaXQscz10aGlzLnZhbHVlTGltaXQ7aWYodD49aVswXSYmdDw9aVsxXSl7dGhpcy5zZXRUcmFuc2Zvcm0odCk7dmFyIG49KE1hdGgucm91bmQodC90aGlzLmdhcCkqKHRoaXMuc3BhY2luZyp0aGlzLm11bHRpcGxlKSt0aGlzLm1pbmltdW0qdGhpcy5tdWx0aXBsZSkvdGhpcy5tdWx0aXBsZTt0aGlzLnNldEN1cnJlbnRWYWx1ZShuLGUpfWVsc2UgdDxpWzBdPyh0aGlzLnNldFRyYW5zZm9ybShpWzBdKSx0aGlzLnNldEN1cnJlbnRWYWx1ZShzWzBdKSwxPT09dGhpcy5jdXJyZW50U2xpZGVyJiYodGhpcy5jdXJyZW50U2xpZGVyPTApKToodGhpcy5zZXRUcmFuc2Zvcm0oaVsxXSksdGhpcy5zZXRDdXJyZW50VmFsdWUoc1sxXSksMD09PXRoaXMuY3VycmVudFNsaWRlciYmKHRoaXMuY3VycmVudFNsaWRlcj0xKSl9LGlzRGlmZjpmdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl8fChBcnJheS5pc0FycmF5KHQpJiZ0Lmxlbmd0aD09PWUubGVuZ3RoP3Quc29tZShmdW5jdGlvbih0LGkpe3JldHVybiB0IT09ZVtpXX0pOnQhPT1lKX0sc2V0Q3VycmVudFZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYodDx0aGlzLm1pbmltdW18fHQ+dGhpcy5tYXhpbXVtKXJldHVybiExO3RoaXMuaXNEaWZmKHRoaXMuY3VycmVudFZhbHVlLHQpJiYodGhpcy5jdXJyZW50VmFsdWU9dCx0aGlzLmxhenkmJnRoaXMuZmxhZ3x8dGhpcy5zeW5jVmFsdWUoKSksZXx8dGhpcy5zZXRQb3NpdGlvbigpfSxzZXRJbmRleDpmdW5jdGlvbih0KXt0PXRoaXMuc3BhY2luZyp0K3RoaXMubWluaW11bSx0aGlzLnNldEN1cnJlbnRWYWx1ZSh0KX0sc2V0VmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzO2lmKHRoaXMuaXNEaWZmKHRoaXMudmFsLHQpKXt2YXIgcz10aGlzLmxpbWl0VmFsdWUodCk7dGhpcy52YWw9cyx0aGlzLnN5bmNWYWx1ZSgpfXRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCl7cmV0dXJuIGkuc2V0UG9zaXRpb24oZSl9KX0sc2V0UG9zaXRpb246ZnVuY3Rpb24odCl7dGhpcy5mbGFnP3RoaXMuc2V0VHJhbnNpdGlvblRpbWUoMCk6dGhpcy5zZXRUcmFuc2l0aW9uVGltZSh2b2lkIDA9PT10P3RoaXMuc3BlZWQ6dCksdGhpcy5zZXRUcmFuc2Zvcm0odGhpcy5wb3NpdGlvbil9LHNldFRyYW5zZm9ybTpmdW5jdGlvbih0KXt2YXIgZT1cInRyYW5zbGF0ZVgoXCIrKHQtKHRoaXMuJHJlZnMudG9vbHRpcC5zY3JvbGxXaWR0aC0yKS8yKStcInB4KVwiO3RoaXMuc2xpZGVyLnN0eWxlLnRyYW5zZm9ybT1lLHRoaXMuc2xpZGVyLnN0eWxlLldlYmtpdFRyYW5zZm9ybT1lLHRoaXMuc2xpZGVyLnN0eWxlLm1zVHJhbnNmb3JtPWUsdGhpcy4kcmVmcy5wcm9jZXNzLnN0eWxlLndpZHRoPXQrXCJweFwiLHRoaXMuJHJlZnMucHJvY2Vzcy5zdHlsZS5sZWZ0PTB9LHNldFRyYW5zaXRpb25UaW1lOmZ1bmN0aW9uKHQpe3RoaXMuc2xpZGVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbj10K1wic1wiLHRoaXMuc2xpZGVyLnN0eWxlLldlYmtpdFRyYW5zaXRpb25EdXJhdGlvbj10K1wic1wiLHRoaXMuJHJlZnMucHJvY2Vzcy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb249dCtcInNcIix0aGlzLiRyZWZzLnByb2Nlc3Muc3R5bGUuV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uPXQrXCJzXCJ9LGxpbWl0VmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZih0aGlzLmRhdGEpcmV0dXJuIHQ7dmFyIGk7cmV0dXJuKGk9dCk8ZS5taW4/KGUucHJpbnRFcnJvcihcIltWdWVTbGlkZUJhciB3YXJuXTogVGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgaXMgXCIrdCtcIiwgdGhlIG1pbmltdW0gdmFsdWUgaXMgXCIrZS5taW4rXCIsIHRoZSB2YWx1ZSBvZiB0aGlzIHNsaWRlciBjYW4gbm90IGJlIGxlc3MgdGhhbiB0aGUgbWluaW11bSB2YWx1ZVwiKSxlLm1pbik6aT5lLm1heD8oZS5wcmludEVycm9yKFwiW1Z1ZVNsaWRlQmFyIHdhcm5dOiBUaGUgdmFsdWUgb2YgdGhlIHNsaWRlciBpcyBcIit0K1wiLCB0aGUgbWF4aW11bSB2YWx1ZSBpcyBcIitlLm1heCtcIiwgdGhlIHZhbHVlIG9mIHRoaXMgc2xpZGVyIGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBtYXhpbXVtIHZhbHVlXCIpLGUubWF4KTppfSxzeW5jVmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbDt0aGlzLnJhbmdlJiZ0aGlzLiRlbWl0KFwiY2FsbGJhY2tSYW5nZVwiLHRoaXMucmFuZ2VbdGhpcy5jdXJyZW50SW5kZXhdKSx0aGlzLiRlbWl0KFwiaW5wdXRcIix0KX0sZ2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx9LGdldEluZGV4OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY3VycmVudEluZGV4fSxnZXRTdGF0aWNEYXRhOmZ1bmN0aW9uKCl7dGhpcy4kcmVmcy5lbGVtJiYodGhpcy5zaXplPXRoaXMuJHJlZnMuZWxlbS5vZmZzZXRXaWR0aCx0aGlzLm9mZnNldD10aGlzLiRyZWZzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLiRyZWZzLmVsZW0mJih0aGlzLmdldFN0YXRpY0RhdGEoKSx0aGlzLnNldFBvc2l0aW9uKCkpfSxwcmludEVycm9yOmZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IodCl9fSxtb3VudGVkOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZih0aGlzLmlzQ29tcG9uZW50RXhpc3RzPSEwLFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudClyZXR1cm4gdGhpcy5wcmludEVycm9yKFwiW1Z1ZVNsaWRlQmFyIGVycm9yXTogd2luZG93IG9yIGRvY3VtZW50IGlzIHVuZGVmaW5lZCwgY2FuIG5vdCBiZSBpbml0aWFsaXphdGlvbi5cIik7dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXt0LmlzQ29tcG9uZW50RXhpc3RzJiYodC5nZXRTdGF0aWNEYXRhKCksdC5zZXRWYWx1ZSh0LmxpbWl0VmFsdWUodC52YWx1ZSksMCksdC5iaW5kRXZlbnRzKCkpfSl9LGJlZm9yZURlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmlzQ29tcG9uZW50RXhpc3RzPSExLHRoaXMudW5iaW5kRXZlbnRzKCl9fX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dnVlLXNsaWRlLWJhci5taW4uanMubWFwXG4iLCJ2YXIgaW5zZXJ0ZWQgPSBleHBvcnRzLmNhY2hlID0ge31cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5leHBvcnRzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgaWYgKGluc2VydGVkW2Nzc10pIHJldHVybiBub29wXG4gIGluc2VydGVkW2Nzc10gPSB0cnVlXG5cbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJylcblxuICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGVsZW0pXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5yZW1vdmVDaGlsZChlbGVtKVxuICAgIGluc2VydGVkW2Nzc10gPSBmYWxzZVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIlxuICAgICAgIHYtY2xvYWs+XG4gICAgPG1kLWFwcCBtZC13YXRlcmZhbGxcbiAgICAgICAgICAgIG1kLW1vZGU9XCJmaXhlZFwiPlxuICAgICAgPG1kLWFwcC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiPlxuICAgICAgICA8c3BpbmFsSGVhZGVyIHYtbW9kZWw9XCJtZW51VmlzaWJsZVwiIC8+XG4gICAgICA8L21kLWFwcC10b29sYmFyPlxuICAgICAgPG1kLWFwcC1kcmF3ZXIgY2xhc3M9XCJtZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICA6bWQtYWN0aXZlLnN5bmM9XCJtZW51VmlzaWJsZVwiPlxuICAgICAgICA8U3BpbmFsUmlnaHRTaWRlQmFyIHYtbW9kZWw9XCJtZW51VmlzaWJsZVwiLz5cbiAgICAgIDwvbWQtYXBwLWRyYXdlcj5cblxuICAgICAgPG1kLWFwcC1jb250ZW50PlxuICAgICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICAgIDwvbWQtYXBwLWNvbnRlbnQ+XG4gICAgPC9tZC1hcHA+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNwaW5hbEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvU3BpbmFsSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IFNwaW5hbFJpZ2h0U2lkZUJhciBmcm9tIFwiLi9SaWdodFNpZGVCYXIvU3BpbmFsUmlnaHRTaWRlQmFyLnZ1ZVwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCIuL01haW5Db250ZW50L01haW5Db250ZW50LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYXBwXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lbnVWaXNpYmxlOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIC8vIGNvbXB1dGVkOiB7XG4gIC8vICAgbWVudVZpc2libGU6IHtcbiAgLy8gICAgIGdldDogZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgIHJldHVybiB0aGlzLm1lbnVWaXNpYmxlT2JzO1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHNldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgLy8gICAgICAgSGVhZGVyQ3RybC5zZXRWaWV3TWVudShuZXdWYWx1ZSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9LFxuICBjcmVhdGVkKCkge1xuICAgIC8vIHZhciB2bSA9IHRoaXM7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICAvLyB0aGlzLiRzdWJzY3JpYmVUbyhIZWFkZXJDdHJsLmdldE9ic2VydmFibGUoKSwgZnVuY3Rpb24odmFsKSB7XG4gICAgLy8gICB2bS5tZW51VmlzaWJsZU9icyA9IHZhbDtcbiAgICAvLyB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlU2lkZWJhcigpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7IHNwaW5hbEhlYWRlciwgU3BpbmFsUmlnaHRTaWRlQmFyLCBNYWluQ29udGVudCB9XG59Ozwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FwcCAubWQtYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1kLWFwcC1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuPC9zdHlsZT5cbjxzdHlsZT5cbi5tZC1hcHAtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJGb3JnZUNvbnRlbnRcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgVnVlLnByb3RvdHlwZS4kRm9yZ2VWaWV3ZXIuc3RhcnRfdmlld2VyKHRoaXMuJGVsKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiY2xhc3MgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5leHRlbnRpb25zID0gW107XG4gIH1cblxuICBnZXRFeHRlbnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudGlvbnM7XG4gIH1cblxuICBhZGRFeHRlbnRpb24obmFtZSkge1xuICAgIHRoaXMuZXh0ZW50aW9ucy5wdXNoKG5hbWUpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JnZUV4dGVudGlvbk1hbmFnZXI7XG4iLCJpbXBvcnQgdHJhbnNmb3JtTW9kZWwgZnJvbSBcIi4vdHJhbnNmb3JtTW9kZWwuanNcIjtcbmNvbnN0IFEgPSByZXF1aXJlKFwicVwiKTtcblxuY2xhc3MgRm9yZ2VWaWV3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZpZXdlcjtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGVudjogXCJMb2NhbFwiLFxuICAgICAgZG9jaWQ6IFwiXCIsXG4gICAgICB1c2VBRFA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICB3aW5kb3cuc3BpbmFsLkZvcmdlRXh0ZW50aW9uTWFuYWdlci5hZGRFeHRlbnRpb24oXG4gICAgICBcIkF1dG9kZXNrLkFETi5WaWV3aW5nLkV4dGVuc2lvbi5Db2xvclwiXG4gICAgKTtcbiAgICB0aGlzLnJkeSA9IFEuZGVmZXIoKTtcbiAgfVxuXG4gIGxvYWRNb2RlbChkb2MpIHtcbiAgICBsZXQgcGF0aCA9IGRvYy5wYXRoO1xuICAgIGlmIChcbiAgICAgIGRvYy5wYXRoLmluZGV4T2YoXCJodHRwOi8vXCIpICE9PSAwICYmXG4gICAgICBkb2MucGF0aC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgIT09IDBcbiAgICApIHtcbiAgICAgIHBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgZG9jLnBhdGg7XG4gICAgfVxuXG4gICAgZG9jLmxvYWRlZCA9IHRydWU7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBfb25HZW9tZXRyeUxvYWRlZCA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5HRU9NRVRSWV9MT0FERURfRVZFTlQsXG4gICAgICAgICAgX29uR2VvbWV0cnlMb2FkZWRcbiAgICAgICAgKTtcbiAgICAgICAgZG9jLm1vZGVsID0gZXZlbnQubW9kZWw7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGV2ZW50Lm1vZGVsKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnZpZXdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICB3aW5kb3cuQXV0b2Rlc2suVmlld2luZy5HRU9NRVRSWV9MT0FERURfRVZFTlQsXG4gICAgICAgIF9vbkdlb21ldHJ5TG9hZGVkXG4gICAgICApO1xuXG4gICAgICB0aGlzLnZpZXdlci5sb2FkTW9kZWwoXG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9wdHMsXG4gICAgICAgICgpID0+IHt9LFxuICAgICAgICAoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UsIHN0YXR1c0NvZGUsIHN0YXR1c1RleHQpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdlci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuR0VPTUVUUllfTE9BREVEX0VWRU5ULFxuICAgICAgICAgICAgX29uR2VvbWV0cnlMb2FkZWRcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCh7XG4gICAgICAgICAgICBlcnJvckNvZGU6IGVycm9yQ29kZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Nb2RlbChkb2MsIHRydWUpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hlY2tDaGVja0N1cnJlbnRNb2RlbCgpKTtcbiAgfVxuICB1bmxvYWRNb2RlbChkb2MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBtb2RlbCA9IGRvYy5tb2RlbDtcbiAgICAgIGRvYy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgIGRvYy5tb2RlbCA9IG51bGw7XG4gICAgICB0aGlzLnZpZXdlci5pbXBsLnVubG9hZE1vZGVsKG1vZGVsKTtcbiAgICAgIHRoaXMudmlld2VyLmltcGwuc2NlbmVVcGRhdGVkKHRydWUpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pLnRoZW4oKCkgPT4gdGhpcy5jaGVja0NoZWNrQ3VycmVudE1vZGVsKCkpO1xuICB9XG4gIF9zZXRDdXJyZW50TW9kZWwobW9kZWwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnZpZXdlci5tb2RlbCA9IG1vZGVsO1xuICAgICAgdmFyIHByb3BlcnR5UGFuZWwgPSB0aGlzLnZpZXdlci5nZXRQcm9wZXJ0eVBhbmVsKHRydWUpO1xuICAgICAgcHJvcGVydHlQYW5lbC5jdXJyZW50TW9kZWwgPSBtb2RlbDtcbiAgICAgIG1vZGVsLmdldE9iamVjdFRyZWUoaW5zdGFuY2VUcmVlID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXIubW9kZWxzdHJ1Y3R1cmUuc2V0TW9kZWwoaW5zdGFuY2VUcmVlKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0Q3VycmVudE1vZGVsKG1vZGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEN1cnJlbnRNb2RlbC5jYWxsKHRoaXMsIG1vZGVsKTtcbiAgfVxuICBmaXRUb1ZpZXcob2JqZWN0SWRzLCBtb2RlbCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdlci5maXRUb1ZpZXcob2JqZWN0SWRzLCBtb2RlbCk7XG4gIH1cbiAgY2hlY2tDaGVja0N1cnJlbnRNb2RlbCgpIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kb2NzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuZG9jc1tpbmRleF0ubW9kZWwgPT09IHRoaXMudmlld2VyLm1vZGVsKSBmb3VuZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRvY3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3NbaW5kZXhdLmxvYWRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3NldEN1cnJlbnRNb2RlbCh0aGlzLmRvY3NbaW5kZXhdLm1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRvY3VtZW50TG9hZEZhaWx1cmUodmlld2VyRXJyb3JDb2RlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIm9uRG9jdW1lbnRMb2FkRmFpbHVyZSgpIC0gZXJyb3JDb2RlOlwiICsgdmlld2VyRXJyb3JDb2RlKTtcbiAgfVxuXG4gIG9uSXRlbUxvYWRTdWNjZXNzKCkge1xuICAgIGxldCBleHRlbnNpb25zID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIuZ2V0RXh0ZW50aW9ucygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy52aWV3ZXIubG9hZEV4dGVuc2lvbihleHRlbnNpb25zW2ldLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0X3ZpZXdlcihkb20pIHtcbiAgICB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbVxuICAgICAgLmdldE1vZGVsKClcbiAgICAgIC50aGVuKGZvcmdlZmlsZSA9PiB7XG4gICAgICAgIHRoaXMuZm9yZ2VGaWxlID0gZm9yZ2VmaWxlO1xuICAgICAgICB0aGlzLmRvY3MgPSB0aGlzLmZvcmdlRmlsZS5fY2hpbGRyZW4uZ2V0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub0xvYWQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuZG9jcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIHZhciBwYXRoID0gdGhpcy5kb2NzWzBdLnBhdGg7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZG9jcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9jc1tpXS5sb2FkZWQgIT09IHRydWUpIHRoaXMuZG9jc1tpXS5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpdGVtVG9Mb2FkLnB1c2godGhpcy5kb2NzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGl0ZW1Ub0xvYWQubGVuZ3RoID09PSAwKSBpdGVtVG9Mb2FkLnB1c2godGhpcy5kb2NzWzBdKTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kb2NzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoLy4rXFwuc3ZmJC8udGVzdCh0aGlzLmRvY3NbaV0ucGF0aCkpIHtcbiAgICAgICAgICAgICAgcGF0aCA9IHRoaXMuZG9jc1tpXS5wYXRoO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcImh0dHA6Ly9cIikgIT09IDAgJiYgcGF0aC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgIT09IDApIHtcbiAgICAgICAgICAgIHBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgcGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuUHJpdmF0ZS5HdWlWaWV3ZXIzRChcbiAgICAgICAgICBkb20sXG4gICAgICAgICAgdGhpcy5jb25maWdcbiAgICAgICAgKTsgLy8gV2l0aCB0b29sYmFyXG4gICAgICAgIHdpbmRvdy5BdXRvZGVzay5WaWV3aW5nLkluaXRpYWxpemVyKHRoaXMub3B0aW9ucywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMudmlld2VyLmluaXRpYWxpemUoKTtcbiAgICAgICAgICB0aGlzLm9uSXRlbUxvYWRTdWNjZXNzKCk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbVRvTG9hZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVtVG9Mb2FkW2luZGV4XTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRNb2RlbChlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZHkucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRSZWFsTW9kZWxJdGVtKGl0ZW0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5mb3JnZUZpbGUuX2NoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZm9yZ2VGaWxlLl9jaGlsZHJlbltpbmRleF07XG4gICAgICBpZiAoZWxlbWVudC5uYW1lLmdldCgpID09PSBpdGVtLm5hbWUpIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgIHZhciBtb2RlbCA9IHRoaXMuZ2V0UmVhbE1vZGVsSXRlbShpdGVtKTtcbiAgICBpZiAobW9kZWwgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY2hhbmdlID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gXCJtb2RlbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RlbFtrZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtb2RlbC5hZGRfYXR0cih7XG4gICAgICAgICAgICAgIFtrZXldOiBpdGVtW2tleV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5T2JqZXQgaW4gaXRlbVtrZXldKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtW2tleV0uaGFzT3duUHJvcGVydHkoa2V5T2JqZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsW2tleV1ba2V5T2JqZXRdLnNldChpdGVtW2tleV1ba2V5T2JqZXRdKSlcbiAgICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG1vZGVsLmFkZF9hdHRyKHtcbiAgICAgICAgICAgICAgW2tleV06IGl0ZW1ba2V5XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobW9kZWxba2V5XS5zZXQoaXRlbVtrZXldKSkgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZTtcbiAgfVxuXG4gIHRyYW5zZm9ybU1vZGVsKGl0ZW0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLmdldFJlYWxNb2RlbEl0ZW0oaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJ0cmFuc2Zvcm1Nb2RlbFwiLCBpdGVtLm1vZGVsKTtcblxuICAgIGlmICgoZm9yY2UgPT09IHRydWUgJiYgaXRlbSkgfHwgdGhpcy51cGRhdGVJdGVtKGl0ZW0pID09PSB0cnVlKVxuICAgICAgcmV0dXJuIHRyYW5zZm9ybU1vZGVsKHRoaXMudmlld2VyLCBpdGVtLm1vZGVsLCBtb2RlbCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4vLyAoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ2VWaWV3ZXI7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgPGZvcmdlLWNvbnRlbnQgLz5cbiAgICA8bW9kZWwtZXhwbG9yZXIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgRm9yZ2VDb250ZW50IGZyb20gXCIuL0ZvcmdlQ29udGVudC52dWVcIjtcbmltcG9ydCBNb2RlbEV4cGxvcmVyIGZyb20gXCIuL01vZGVsRXhwbG9yZXIvTW9kZWxFeHBsb3Jlci52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJhcHBcIixcbiAgY29tcG9uZW50czogeyBGb3JnZUNvbnRlbnQsIE1vZGVsRXhwbG9yZXIgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1vdW50ZWQoKSB7fVxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIHNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1vcG4tYnRuXCJcbiAgICAgICAgICAgICB2LXRvb2x0aXA9XCJsYWJlbFwiXG4gICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja01vZGVsRXhwbG9yZXJcIj5cbiAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXNtYWxsXCI+bGF5ZXJzPC9tZC1pY29uPlxuICAgIDx0cmFuc2l0aW9uIHYtYmluZDpjc3M9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgdi1vbjpiZWZvcmUtZW50ZXI9XCJiZWZvcmVFbnRlclwiXG4gICAgICAgICAgICAgICAgdi1vbjplbnRlcj1cImVudGVyXCJcbiAgICAgICAgICAgICAgICB2LW9uOmxlYXZlPVwibGVhdmVcIj5cbiAgICAgIDxzcGFuIHYtc2hvdz1jb21wdXRlZFZhbHVlPnt7bGFiZWx9fTwvc3Bhbj5cbiAgICA8L3RyYW5zaXRpb24+XG4gIDwvbWQtYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IFZlbG9jaXR5IGZyb20gXCJ2ZWxvY2l0eS1hbmltYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCdG5JY29uTGFiZWxUcmFuc2l0aW9uXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiLCBcImxhYmVsXCIsIFwiaWNvblwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2tNb2RlbEV4cGxvcmVyKCkge1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLmNvbXB1dGVkVmFsdWUpO1xuICAgIH0sXG4gICAgYmVmb3JlRW50ZXI6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gMDtcbiAgICB9LFxuICAgIGVudGVyOiBmdW5jdGlvbihlbCwgZG9uZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFZlbG9jaXR5KGVsLCB7IG9wYWNpdHk6IDEsIHdpZHRoOiBcIjEwMCVcIiB9LCB7IGNvbXBsZXRlOiBkb25lIH0pO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LFxuICAgIGxlYXZlOiBmdW5jdGlvbihlbCwgZG9uZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFZlbG9jaXR5KGVsLCB7IG9wYWNpdHk6IDAsIHdpZHRoOiBcIjBweFwiIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvLyB3aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyLmxvYWRNb2RlbC5jYWxsKHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIsIHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXIuZG9jc1sxXS5wYXRoKVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLW9wbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZDkzICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWNvbnRhaW5lclwiPlxuICAgIDxtZC1jb250ZW50IGNsYXNzPVwic3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3NwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1oaWRkZW4nOiFpc0xpc3RTaG93bn1cIj5cbiAgICAgIDxidG4taWNvbi1sYWJlbC10cmFuc2l0aW9uIHN0eWxlPVwid2lkdGg6MTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXNMaXN0U2hvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCInbGF5ZXJzJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJsYWJlbEJ0blwiIC8+XG4gICAgICA8bW9kZWwtZXhwbG9yZXItbGlzdCA6bGlzdD1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9uTW9kZWxTZWxlY3Q9XCJvbk1vZGVsU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBvbk1vZGVsQ2hlY2tTZWxlY3Q9XCJvbk1vZGVsQ2hlY2tTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9uTW9kZWxWaXNpYmlsaXR5U2VsZWN0PVwib25Nb2RlbFZpc2liaWxpdHlTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9uTW9kZWxFeHBsb3JlclNldHRpbmdzU2VsZWN0PVwib25Nb2RlbEV4cGxvcmVyU2V0dGluZ3NTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNob3c9XCJpc0xpc3RTaG93blwiPjwvbW9kZWwtZXhwbG9yZXItbGlzdD5cbiAgICA8L21kLWNvbnRlbnQ+XG4gICAgPG1vZGVsLWV4cGxvcmVyLXNldHRpbmdzIGNsYXNzPVwibW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9uVXBkYXRlU2V0dGluZz1cIm9uVXBkYXRlU2V0dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtPVwic2VsZWN0ZWROb2RlU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJjb21wdXRlZElzU2V0dGluZ1Nob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJpc1NldHRpbmdTaG93ID0gJGV2ZW50XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1vZGVsRXhwbG9yZXJMaXN0IGZyb20gXCIuL01vZGVsRXhwbG9yZXJMaXN0LnZ1ZVwiO1xuaW1wb3J0IEJ0bkljb25MYWJlbFRyYW5zaXRpb24gZnJvbSBcIi4vQnRuSWNvbkxhYmVsVHJhbnNpdGlvbi52dWVcIjtcbmltcG9ydCBNb2RlbEV4cGxvcmVyU2VydmljZSBmcm9tIFwiLi9Nb2RlbEV4cGxvcmVyU2VydmljZS5qc1wiO1xuXG5pbXBvcnQgTW9kZWxFeHBsb3JlclNldHRpbmdzIGZyb20gXCIuL01vZGVsRXhwbG9yZXJTZXR0aW5ncy9Nb2RlbEV4cGxvcmVyU2V0dGluZ3MudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJNb2RlbEV4cGxvcmVyXCIsXG4gIGRhdGEoKSB7XG4gICAgdGhpcy5Gb3JnZVZpZXdlciA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsQnRuOiBcIk1vZGVsIEV4cGxvcmVyXCIsXG4gICAgICBpc0xpc3RTaG93bjogZmFsc2UsXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHNlbGVjdGVkTm9kZVNldHRpbmdzOiBudWxsLFxuICAgICAgaXNTZXR0aW5nU2hvdzogZmFsc2UgLy8gREVCVUcgQ0hBTkdFIFRPIEZBTFNFIE9OIFJFTEVBU0VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTW9kZWxFeHBsb3Jlckxpc3QsXG4gICAgQnRuSWNvbkxhYmVsVHJhbnNpdGlvbixcbiAgICBNb2RlbEV4cGxvcmVyU2V0dGluZ3NcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZElzU2V0dGluZ1Nob3coKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmlzU2V0dGluZ1Nob3cgPT0gdHJ1ZSAmJlxuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZVNldHRpbmdzICE9PSBudWxsICYmXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlU2V0dGluZ3MubG9hZGVkID09IHRydWVcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Nb2RlbFNlbGVjdChpdGVtKSB7XG4gICAgICBNb2RlbEV4cGxvcmVyU2VydmljZS50b29nbGVWaWV3KGl0ZW0pO1xuICAgIH0sXG4gICAgb25Nb2RlbENoZWNrU2VsZWN0KGl0ZW0pIHtcbiAgICAgIE1vZGVsRXhwbG9yZXJTZXJ2aWNlLnNldEN1cnJlbnRNb2RlbChpdGVtKTtcbiAgICB9LFxuICAgIG9uTW9kZWxWaXNpYmlsaXR5U2VsZWN0KGl0ZW0pIHtcbiAgICAgIE1vZGVsRXhwbG9yZXJTZXJ2aWNlLnNlbGVjdE1vZGVsKGl0ZW0pO1xuICAgIH0sXG4gICAgb25Nb2RlbEV4cGxvcmVyU2V0dGluZ3NTZWxlY3QoaXRlbSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmlzU2V0dGluZ1Nob3cgPT09IGZhbHNlIHx8XG4gICAgICAgICh0aGlzLmlzU2V0dGluZ1Nob3cgPT09IHRydWUgJiYgdGhpcy5zZWxlY3RlZE5vZGVTZXR0aW5ncyAhPT0gaXRlbSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZVNldHRpbmdzID0gaXRlbTtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdTaG93ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlU2V0dGluZ3MgPSBudWxsO1xuICAgICAgICB0aGlzLmlzU2V0dGluZ1Nob3cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVXBkYXRlU2V0dGluZyhpdGVtLCB0cmFuc2xhdGUsIHJvdGF0ZSwgc2NhbGUpIHtcbiAgICAgIGl0ZW0udHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgICAgaXRlbS5yb3RhdGUgPSByb3RhdGU7XG4gICAgICBpdGVtLnNjYWxlID0gc2NhbGU7XG5cbiAgICAgIE1vZGVsRXhwbG9yZXJTZXJ2aWNlLnRyYW5zZm9ybU1vZGVsKGl0ZW0pO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBNb2RlbEV4cGxvcmVyU2VydmljZS5nZXRNb2RlbExpc3QoKVxuICAgICAgLnRoZW4obGlzdCA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXIge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZDkzO1xufVxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1oaWRkZW4ge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLW9wbi1idG4ge1xuICBtYXJnaW46IDBweCAwO1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG4ubW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG48L3N0eWxlPlxuXG48c3R5bGU+XG4uc2xpZGUtZmFkZS1lbnRlci1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG4uc2xpZGUtZmFkZS1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cztcbn1cbi5zbGlkZS1mYWRlLWVudGVyLCAuc2xpZGUtZmFkZS1sZWF2ZS10b1xuLyogLnNsaWRlLWZhZGUtbGVhdmUtYWN0aXZlIGJlbG93IHZlcnNpb24gMi4xLjggKi8ge1xuICBvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCB2LWlmPVwic2hvdyAmJiBsaXN0Lmxlbmd0aCA9PT0gMFwiXG4gICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbG9hZGluZ1wiPkxvYWRpbmcuLi48L3A+XG5cbiAgICA8dHJhbnNpdGlvbi1ncm91cCB0YWc9XCJtZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ6Y3NzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtb246YmVmb3JlLWVudGVyPVwiYmVmb3JlRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtb246ZW50ZXI9XCJlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1vbjpsZWF2ZT1cImxlYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0IG1kLXNjcm9sbGJhclwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvd1wiXG4gICAgICAgICAgIHYtc2hvdz1cInNob3dcIlxuICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpZHgpIGluIGxpc3RcIlxuICAgICAgICAgICA6a2V5PVwiaWR4XCJcbiAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ29uTW9kZWxTZWxlY3QnLCBpdGVtLCBpZHgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctbGFiZWxcIlxuICAgICAgICAgICAgIHYtdG9vbHRpcC5hdXRvLWVuZD1cIntjb250ZW50OiBpdGVtLm5hbWUsIGRlbGF5OiA1MDB9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctbGFiZWwtc3BhblwiPnt7aXRlbS5uYW1lfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmxvYWRlZCA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvblwiPlxuICAgICAgICAgIDxtZC1pY29uIHYtdG9vbHRpcD1cIntjb250ZW50OidPcGVuIHRyYW5zZm9ybSBzZXR0aW5ncycsIGRlbGF5OiA1MDB9XCJcbiAgICAgICAgICAgICAgICAgICBAY2xpY2submF0aXZlLnN0b3A9XCIkZW1pdCgnb25Nb2RlbEV4cGxvcmVyU2V0dGluZ3NTZWxlY3QnLCBpdGVtLCBpZHgpXCI+c2V0dGluZ3M8L21kLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmxvYWRlZCA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvblwiPlxuICAgICAgICAgIDxtZC1pY29uIHYtdG9vbHRpcD1cIntjb250ZW50OidTZWxlY3QgYW5kIGZpdCB0byB2aWV3JywgZGVsYXk6IDUwMH1cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljay5uYXRpdmUuc3RvcD1cIiRlbWl0KCdvbk1vZGVsVmlzaWJpbGl0eVNlbGVjdCcsIGl0ZW0sIGlkeClcIj5ncHNfZml4ZWQ8L21kLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmxvYWRlZCA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctaWNvblwiPlxuICAgICAgICAgIDxtZC1pY29uIEBjbGljay5uYXRpdmUuc3RvcD1cIiRlbWl0KCdvbk1vZGVsQ2hlY2tTZWxlY3QnLCBpdGVtLCBpZHgpXCJcbiAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJjaGVja1N0eWxlKGl0ZW0pXCI+Y2hlY2s8L21kLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uLWdyb3VwPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFZlbG9jaXR5IGZyb20gXCJ2ZWxvY2l0eS1hbmltYXRlXCI7XG5pbXBvcnQgTW9kZWxFeHBsb3JlclNlcnZpY2UgZnJvbSBcIi4vTW9kZWxFeHBsb3JlclNlcnZpY2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJMaXN0XCIsXG4gIHByb3BzOiBbXCJzaG93XCIsIFwibGlzdFwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja1N0eWxlKGl0ZW0pIHtcbiAgICAgIGlmIChNb2RlbEV4cGxvcmVyU2VydmljZS5pc0N1cnJlbnRNb2RlbChpdGVtKSA9PT0gdHJ1ZSlcbiAgICAgICAgcmV0dXJuIHsgY29sb3I6IFwiI0Y2ODIwNFwiIH07XG4gICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBiZWZvcmVFbnRlcihlbCkge1xuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgIH0sXG4gICAgZW50ZXIoZWwsIGRvbmUpIHtcbiAgICAgIHZhciBkZWxheSA9IGVsLmRhdGFzZXQuaW5kZXggKiAxNTA7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBWZWxvY2l0eShlbCwgeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IFwiNDhweFwiIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSxcbiAgICBsZWF2ZShlbCwgZG9uZSkge1xuICAgICAgdmFyIGRlbGF5ID0gZWwuZGF0YXNldC5pbmRleCAqIDE1MDtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIFZlbG9jaXR5KGVsLCB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LCB7IGNvbXBsZXRlOiBkb25lIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcHg7XG59XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93IDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3cgOmZpcnN0LWNoaWxkOmVtcHR5IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3cgOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93IDpsYXN0LWNoaWxkOmVtcHR5IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2YmFiO1xufVxuXG4uc3BpbmFsLWZvcmdlLW1vZGVsLWV4cGxvcmVyLWxpc3Qtcm93LWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDNweDtcbn1cblxuLnNwaW5hbC1mb3JnZS1tb2RlbC1leHBsb3Jlci1saXN0LXJvdy1sYWJlbCB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDAuOWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxOTVweDtcbn1cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItbGlzdC1yb3ctbGFiZWwtc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuPC9zdHlsZT5cbiIsImZ1bmN0aW9uIGdldEZvcmdlVmlld2VyKCkge1xuICByZXR1cm4gd2luZG93LnNwaW5hbC5Gb3JnZVZpZXdlcjtcbn1cblxubGV0IGlzUmVhZHkgPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRNb2RlbExpc3QoKSB7XG4gICAgY29uc3QgZm9yZ2VWaWV3ZXIgPSBnZXRGb3JnZVZpZXdlcigpO1xuICAgIHJldHVybiBmb3JnZVZpZXdlci5yZHkucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgIGNvbnN0IGRvY3MgPSBmb3JnZVZpZXdlci5kb2NzO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvY3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2NzW2luZGV4XTtcbiAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSk7XG4gIH0sXG5cbiAgdG9vZ2xlVmlldyhpdGVtKSB7XG4gICAgY29uc3QgZm9yZ2VWaWV3ZXIgPSBnZXRGb3JnZVZpZXdlcigpO1xuICAgIGxldCBwcm9tO1xuICAgIGlmIChpc1JlYWR5ID09PSB0cnVlKSB7XG4gICAgICBpc1JlYWR5ID0gZmFsc2U7XG4gICAgICBpZiAoaXRlbS5sb2FkZWQgPT09IHRydWUpIHtcbiAgICAgICAgcHJvbSA9IGZvcmdlVmlld2VyLnVubG9hZE1vZGVsLmNhbGwoZm9yZ2VWaWV3ZXIsIGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbSA9IGZvcmdlVmlld2VyLmxvYWRNb2RlbC5jYWxsKGZvcmdlVmlld2VyLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHByb20udGhlbigoKSA9PiB7XG4gICAgICAgIGZvcmdlVmlld2VyLnVwZGF0ZUl0ZW0uY2FsbChmb3JnZVZpZXdlciwgaXRlbSk7XG4gICAgICAgIGlzUmVhZHkgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGlzQ3VycmVudE1vZGVsKGl0ZW0pIHtcbiAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgcmV0dXJuIGZvcmdlVmlld2VyLnZpZXdlci5tb2RlbCA9PT0gaXRlbS5tb2RlbDtcbiAgfSxcbiAgc2V0Q3VycmVudE1vZGVsKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0N1cnJlbnRNb2RlbChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZm9yZ2VWaWV3ZXIgPSBnZXRGb3JnZVZpZXdlcigpO1xuICAgICAgZm9yZ2VWaWV3ZXIuc2V0Q3VycmVudE1vZGVsLmNhbGwoZm9yZ2VWaWV3ZXIsIGl0ZW0ubW9kZWwpO1xuICAgIH1cbiAgfSxcblxuICBzZWxlY3RNb2RlbChpdGVtKSB7XG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5sb2FkZWQgPT09IHRydWUgJiYgaXRlbS5tb2RlbCkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaXRlbS5tb2RlbC5zZWxlY3Rvci5zZXRTZWxlY3Rpb24oXG4gICAgICAgIFsxXSxcbiAgICAgICAgd2luZG93LkF1dG9kZXNrLlZpZXdpbmcuU2VsZWN0aW9uTW9kZS5GSVJTVF9PQkpFQ1RcbiAgICAgICk7XG4gICAgICB0aGlzLmZpdFRvVmlldyhbMV0sIGl0ZW0ubW9kZWwpO1xuICAgIH1cbiAgfSxcbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgZm9yZ2VWaWV3ZXIgPSBnZXRGb3JnZVZpZXdlcigpO1xuICAgIGZvcmdlVmlld2VyLnZpZXdlci5jbGVhclNlbGVjdGlvbigpO1xuICB9LFxuICBmaXRUb1ZpZXcob2JqZWN0SWRzLCBtb2RlbCkge1xuICAgIGNvbnN0IGZvcmdlVmlld2VyID0gZ2V0Rm9yZ2VWaWV3ZXIoKTtcbiAgICBmb3JnZVZpZXdlci5maXRUb1ZpZXcob2JqZWN0SWRzLCBtb2RlbCk7XG4gIH0sXG5cbiAgdHJhbnNmb3JtTW9kZWwobW9kZWwpIHtcbiAgICBjb25zdCBmb3JnZVZpZXdlciA9IGdldEZvcmdlVmlld2VyKCk7XG4gICAgZm9yZ2VWaWV3ZXIudHJhbnNmb3JtTW9kZWwobW9kZWwpO1xuICB9XG59O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1ibG9jazNkLWxhYmVsXCI+e3tsYWJlbH19PC9kaXY+XG4gICAgPHRhYmxlPlxuICAgICAgPHNsaWRlckxhYmVsIDpsYWJlbD1cIid4J1wiXG4gICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbXB1dGVkX3hcIlxuICAgICAgICAgICAgICAgICAgIDptaW49bWluXG4gICAgICAgICAgICAgICAgICAgOm1heD1tYXg+XG4gICAgICA8L3NsaWRlckxhYmVsPlxuICAgICAgPHNsaWRlckxhYmVsIDpsYWJlbD1cIid5J1wiXG4gICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbXB1dGVkX3lcIlxuICAgICAgICAgICAgICAgICAgIDptaW49bWluXG4gICAgICAgICAgICAgICAgICAgOm1heD1tYXg+XG4gICAgICA8L3NsaWRlckxhYmVsPlxuICAgICAgPHNsaWRlckxhYmVsIDpsYWJlbD1cIid6J1wiXG4gICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbXB1dGVkX3pcIlxuICAgICAgICAgICAgICAgICAgIDptaW49bWluXG4gICAgICAgICAgICAgICAgICAgOm1heD1tYXg+XG4gICAgICA8L3NsaWRlckxhYmVsPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IGRlYm91bmNlID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTtcbmltcG9ydCBzbGlkZXJMYWJlbCBmcm9tIFwiLi9zbGlkZXJMYWJlbC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkJsb2NrM0RcIixcbiAgcHJvcHM6IFtcInZhbHVlXCIsIFwibGFiZWxcIiwgXCJtaW5cIiwgXCJtYXhcIl0sXG4gIGNvbXBvbmVudHM6IHsgc2xpZGVyTGFiZWwgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkX3g6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUueCB8fCAwO1xuICAgICAgfSxcbiAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy50bXAueCA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy51cGRhdGViaW5kZWQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkX3k6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUueSB8fCAwO1xuICAgICAgfSxcbiAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy50bXAueSA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy51cGRhdGViaW5kZWQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkX3o6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUueiB8fCAwO1xuICAgICAgfSxcbiAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy50bXAueiA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy51cGRhdGViaW5kZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGUoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdGhpcy50bXApO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZWJpbmRlZCA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcyksIDUwMCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLm1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLWJsb2NrM2QtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx0cmFuc2l0aW9uIHYtYmluZDpjc3M9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHYtb246YmVmb3JlLWVudGVyPVwiYmVmb3JlRW50ZXJcIlxuICAgICAgICAgICAgICB2LW9uOmVudGVyPVwiZW50ZXJcIlxuICAgICAgICAgICAgICB2LW9uOmxlYXZlPVwibGVhdmVcIj5cbiAgICA8ZGl2IHYtaWY9XCJjb21wdXRlZFNob3dcIj5cbiAgICAgIDxtb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1oZWFkZXIgc3R5bGU9XCJ3aWR0aDoxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCInc2V0dGluZ3MnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbXB1dGVkU2hvd1wiIC8+XG4gICAgICA8bWQtY29udGVudCBjbGFzcz1cIm1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLXRyYW5zZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGVsLWV4cGxvcmVyLXNldHRpbmdzLXNjYWxlLWxhYmVsXCI+c2NhbGU8L2Rpdj5cbiAgICAgICAgPHNsaWRlckxhYmVsIHJlZj1cInNjYWxlYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJ3NjYWxlJ1wiXG4gICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJvblVwZGF0ZVNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgIDptaW49MFxuICAgICAgICAgICAgICAgICAgICAgOm1heD0zMDA+XG4gICAgICAgIDwvc2xpZGVyTGFiZWw+XG4gICAgICAgIDxCbG9jazNEIHJlZj1cInRyYW5zbGF0ZWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgQGlucHV0PVwib25VcGRhdGUzZGJsb2NrKCRldmVudCwgdHJhbnNsYXRlKVwiXG4gICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgIDpsYWJlbD1cIid0cmFuc2xhdGUnXCJcbiAgICAgICAgICAgICAgICAgOm1pbj0tMTAwMFxuICAgICAgICAgICAgICAgICA6bWF4PTEwMDA+PC9CbG9jazNEPlxuICAgICAgICA8QmxvY2szRCBAaW5wdXQ9XCJvblVwZGF0ZTNkYmxvY2soJGV2ZW50LCByb3RhdGUpXCJcbiAgICAgICAgICAgICAgICAgOnZhbHVlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJ3JvdGF0ZSdcIlxuICAgICAgICAgICAgICAgICA6bWluPS0xODBcbiAgICAgICAgICAgICAgICAgOm1heD0xODA+PC9CbG9jazNEPlxuXG4gICAgICA8L21kLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcInZlbG9jaXR5LWFuaW1hdGVcIjtcbmltcG9ydCBNb2RlbEV4cGxvcmVyU2V0dGluZ3NIZWFkZXIgZnJvbSBcIi4vTW9kZWxFeHBsb3JlclNldHRpbmdzSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IHNsaWRlckxhYmVsIGZyb20gXCIuL3NsaWRlckxhYmVsLnZ1ZVwiO1xuaW1wb3J0IEJsb2NrM0QgZnJvbSBcIi4vQmxvY2szRC52dWVcIjtcbmNvbnN0IGRlYm91bmNlID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJTZXR0aW5nc1wiLFxuICBjb21wb25lbnRzOiB7IE1vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlciwgc2xpZGVyTGFiZWwsIEJsb2NrM0QgfSxcbiAgcHJvcHM6IFtcInZhbHVlXCIsIFwiaXRlbVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH0sXG4gICAgICByb3RhdGU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAxMDBcbiAgICB9O1xuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbShvYmopIHtcbiAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICBpZiAob2JqLnRyYW5zbGF0ZSlcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICAgIHg6IG9iai50cmFuc2xhdGUueCxcbiAgICAgICAgICAgIHk6IG9iai50cmFuc2xhdGUueSxcbiAgICAgICAgICAgIHo6IG9iai50cmFuc2xhdGUuelxuICAgICAgICAgIH07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgejogMFxuICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9iai5yb3RhdGUpXG4gICAgICAgICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAgICAgICB4OiBvYmoucm90YXRlLngsXG4gICAgICAgICAgICB5OiBvYmoucm90YXRlLnksXG4gICAgICAgICAgICB6OiBvYmoucm90YXRlLnpcbiAgICAgICAgICB9O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHo6IDBcbiAgICAgICAgICB9O1xuICAgICAgICBpZiAob2JqLnNjYWxlKSB7XG4gICAgICAgICAgdGhpcy5zY2FsZSA9IG9iai5zY2FsZSAqIDEwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjYWxlID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLiRyZWZzLnRyYW5zbGF0ZWJsb2NrLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAvLyAgIHRoaXMuJHJlZnMuc2NhbGVibG9jay4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRTaG93OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHtcbiAgICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiZWZvcmVFbnRlcjogZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgZWwuc3R5bGUud2lkdGggPSAwO1xuICAgIH0sXG4gICAgZW50ZXI6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMSwgd2lkdGg6IFwiMTAwJVwiIH0sIHsgY29tcGxldGU6IGRvbmUgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uKGVsLCBkb25lKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMCwgd2lkdGg6IFwiMHB4XCIgfSwgeyBjb21wbGV0ZTogZG9uZSB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSxcbiAgICBvblVwZGF0ZTNkYmxvY2soZXZ0LCBvYmopIHtcbiAgICAgIG9iai54ID0gZXZ0Lng7XG4gICAgICBvYmoueSA9IGV2dC55O1xuICAgICAgb2JqLnogPSBldnQuejtcbiAgICAgIHRoaXMub25VcGRhdGVEYXRhQmluZGVkKCk7XG4gICAgfSxcbiAgICBvblVwZGF0ZVNjYWxlKHZhbHVlKSB7XG4gICAgICB0aGlzLnNjYWxlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uVXBkYXRlRGF0YUJpbmRlZCgpO1xuICAgIH0sXG4gICAgb25VcGRhdGVEYXRhKCkge1xuICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgXCJvblVwZGF0ZVNldHRpbmdcIixcbiAgICAgICAgdGhpcy5pdGVtLFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSxcbiAgICAgICAgdGhpcy5yb3RhdGUsXG4gICAgICAgIHRoaXMuc2NhbGUgLyAxMDAuMFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5vblVwZGF0ZURhdGFCaW5kZWQgPSBkZWJvdW5jZSh0aGlzLm9uVXBkYXRlRGF0YS5iaW5kKHRoaXMpLCAyMDApO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtdHJhbnNmb3JtLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDhweCA1cHg7XG4gIHdpZHRoOiAyNzVweDtcbn1cbi5tb2RlbC1leHBsb3Jlci1zZXR0aW5ncy1zY2FsZS1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBzcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtYnRuXCJcbiAgICAgICAgICAgICB2LXRvb2x0aXA9XCJsYWJlbFwiXG4gICAgICAgICAgICAgQGNsaWNrPVwib25DbGlja01vZGVsRXhwbG9yZXJcIj5cbiAgICA8c3Bhbj57e2xhYmVsfX08L3NwYW4+XG4gIDwvbWQtYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRXhwbG9yZXJTZXR0aW5nc0hlYWRlclwiLFxuICBwcm9wczogW1widmFsdWVcIiwgXCJsYWJlbFwiLCBcImljb25cIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkVmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuICAgIGNvbXB1dGVkTGFiZWwoKSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCkgcmV0dXJuIHRoaXMubGFiZWw7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrTW9kZWxFeHBsb3JlcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCAhdGhpcy5jb21wdXRlZFZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zcGluYWwtZm9yZ2UtbW9kZWwtZXhwbG9yZXItc2V0dGluZ3MtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkM2Q5MyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8dHIgY2xhc3M9XCJzbGlkZXJMYWJlbC1jb250YWluZXJcIj5cbiAgICA8dGQ+PHNwYW4+e3tsYWJlbH19Ojwvc3Bhbj48L3RkPlxuICAgIDx0ZCBjbGFzcz1cInNsaWRlckxhYmVsLXNsaWRlci1jZWxsXCI+XG4gICAgICA8VnVlU2xpZGVCYXIgcmVmPVwic2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDI4cHggOHB4IDA7XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNsaWRlckxhYmVsLXNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgOnBhZGRpbmdsZXNzPXRydWVcbiAgICAgICAgICAgICAgICAgICA6bGFiZWwtc3R5bGU9bGFiZWxTdHlsZVxuICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjb21wdXRlZFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICA6bWluPVwibWluXCJcbiAgICAgICAgICAgICAgICAgICA6bWF4PVwibWF4XCIgLz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiTnVtYmVyXCJcbiAgICAgICAgICAgICB2LW1vZGVsPVwiY29tcHV0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgOm1pbj1cIm1pblwiXG4gICAgICAgICAgICAgOm1heD1cIm1heFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJzbGlkZXJMYWJlbC1pbnB1dFwiIC8+XG4gICAgPC90ZD5cbiAgPC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlU2xpZGVCYXIgZnJvbSBcInZ1ZS1zbGlkZS1iYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNsaWRlckxhYmVsXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiLCBcImxhYmVsXCIsIFwibWluXCIsIFwibWF4XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFZ1ZVNsaWRlQmFyXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRWYWx1ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy52YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5zbGlkZXJMYWJlbC1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zbGlkZXJMYWJlbC1pbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbi5zbGlkZXJMYWJlbC1zbGlkZXItY2VsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuPC9zdHlsZT5cblxuPHN0eWxlIHNjb3BlZD5cbi5xdWFudGl0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4ucXVhbnRpdHkgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5xdWFudGl0eSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5xdWFudGl0eS1uYXYge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5xdWFudGl0eS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICB3aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5xdWFudGl0eS1idXR0b24ucXVhbnRpdHktdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ucXVhbnRpdHktYnV0dG9uLnF1YW50aXR5LWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgaGVpZ2h0OiA1MCU7XG59XG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gZ2V0U2NhbGUoc2NhbGUpIHtcbiAgbGV0IHggPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcbiAgbGV0IHkgPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcbiAgbGV0IHogPSBpc05hTihzY2FsZSkgPyAxLjAgOiBzY2FsZTtcblxuICByZXR1cm4gbmV3IHdpbmRvdy5USFJFRS5WZWN0b3IzKHgsIHksIHopO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvYmopIHtcbiAgbGV0IHggPSBpc05hTihvYmoueCkgPyAwLjAgOiBvYmoueDtcbiAgbGV0IHkgPSBpc05hTihvYmoueSkgPyAwLjAgOiBvYmoueTtcbiAgbGV0IHogPSBpc05hTihvYmoueikgPyAwLjAgOiBvYmouejtcblxuICByZXR1cm4gbmV3IHdpbmRvdy5USFJFRS5WZWN0b3IzKHgsIHksIHopO1xufVxuXG5mdW5jdGlvbiBnZXRSb3RhdGlvbihvYmopIHtcbiAgbGV0IHggPSBpc05hTihvYmoueCkgPyAwLjAgOiBvYmoueDtcbiAgbGV0IHkgPSBpc05hTihvYmoueSkgPyAwLjAgOiBvYmoueTtcbiAgbGV0IHogPSBpc05hTihvYmoueikgPyAwLjAgOiBvYmouejtcbiAgbGV0IGV1bGVyID0gbmV3IHdpbmRvdy5USFJFRS5FdWxlcihcbiAgICAoeCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICh5ICogTWF0aC5QSSkgLyAxODAsXG4gICAgKHogKiBNYXRoLlBJKSAvIDE4MCxcbiAgICBcIlhZWlwiXG4gICk7XG4gIGxldCBxID0gbmV3IHdpbmRvdy5USFJFRS5RdWF0ZXJuaW9uKCk7XG4gIHEuc2V0RnJvbUV1bGVyKGV1bGVyKTtcbiAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1Nb2RlbCh2aWV3ZXIsIG1vZGVsLCB0cmFuc2Zvcm0pIHtcbiAgZnVuY3Rpb24gX3RyYW5zZm9ybUZyYWdQcm94eShmcmFnSWQpIHtcbiAgICB2YXIgZnJhZ1Byb3h5ID0gdmlld2VyLmltcGwuZ2V0RnJhZ21lbnRQcm94eShtb2RlbCwgZnJhZ0lkKTtcblxuICAgIGZyYWdQcm94eS5nZXRBbmltVHJhbnNmb3JtKCk7XG5cbiAgICBmcmFnUHJveHkucG9zaXRpb24gPSB0cmFuc2Zvcm0udHJhbnNsYXRpb247XG5cbiAgICBmcmFnUHJveHkuc2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG5cbiAgICAvL05vdCBhIHN0YW5kYXJkIHRocmVlLmpzIHF1YXRlcm5pb25cbiAgICBmcmFnUHJveHkucXVhdGVybmlvbi5feCA9IHRyYW5zZm9ybS5yb3RhdGlvbi54O1xuICAgIGZyYWdQcm94eS5xdWF0ZXJuaW9uLl95ID0gdHJhbnNmb3JtLnJvdGF0aW9uLnk7XG4gICAgZnJhZ1Byb3h5LnF1YXRlcm5pb24uX3ogPSB0cmFuc2Zvcm0ucm90YXRpb24uejtcbiAgICBmcmFnUHJveHkucXVhdGVybmlvbi5fdyA9IHRyYW5zZm9ybS5yb3RhdGlvbi53O1xuXG4gICAgZnJhZ1Byb3h5LnVwZGF0ZUFuaW1UcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbiAgICB2YXIgZnJhZ0NvdW50ID0gbW9kZWwuZ2V0RnJhZ21lbnRMaXN0KCkuZnJhZ21lbnRzLmZyYWdJZDJkYklkLmxlbmd0aDtcblxuICAgIC8vZnJhZ0lkcyByYW5nZSBmcm9tIDAgdG8gZnJhZ0NvdW50LTFcbiAgICBmb3IgKHZhciBmcmFnSWQgPSAwOyBmcmFnSWQgPCBmcmFnQ291bnQ7ICsrZnJhZ0lkKSB7XG4gICAgICBfdHJhbnNmb3JtRnJhZ1Byb3h5KGZyYWdJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsKHZpZXdlciwgbW9kZWwsIGl0ZW0pIHtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGlvbjogZ2V0VHJhbnNsYXRpb24oaXRlbS50cmFuc2xhdGUuZ2V0KCkpLFxuICAgIHJvdGF0aW9uOiBnZXRSb3RhdGlvbihpdGVtLnJvdGF0ZS5nZXQoKSksXG4gICAgc2NhbGU6IGdldFNjYWxlKGl0ZW0uc2NhbGUuZ2V0KCkpXG4gIH07XG5cbiAgYXdhaXQgX3RyYW5zZm9ybU1vZGVsKHZpZXdlciwgbW9kZWwsIHRyYW5zZm9ybSk7XG4gIHZpZXdlci5pbXBsLnNjZW5lVXBkYXRlZCh0cnVlKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybU1vZGVsO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxtZC10b29sYmFyIGNsYXNzPVwiYXBwLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgbWQtZWxldmF0aW9uPVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXNlY3Rpb24tc3RhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImRpc3QvYXNzZXRzL2ltZy9TcGluYWxCSU1WaWV3ZXJMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmllZXdlclwiXG4gICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDJweDttYXJnaW4tdG9wOiA0cHg7XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBjb2xvcl9ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cbiAgICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21kLXRvb2xiYXI+XG5cbiAgICA8bWQtbGlzdD5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiZ29fdG9Ecml2ZVwiPlxuICAgICAgICA8bWQtaWNvbj5rZXlib2FyZF9yZXR1cm48L21kLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5SZXR1cm4gdG8gU3BpbmFsQklNIERyaXZlPC9zcGFuPlxuICAgICAgPC9tZC1saXN0LWl0ZW0+XG5cbiAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwic2lnbl9vdXRcIj5cbiAgICAgICAgPG1kLWljb24+cG93ZXJfc2V0dGluZ3NfbmV3PC9tZC1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+U2lnbiBvdXQ8L3NwYW4+XG4gICAgICA8L21kLWxpc3QtaXRlbT5cbiAgICA8L21kLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3BpbmFsUmlnaHRTaWRlQmFyXCIsXG4gIHByb3BzOiBbXCJ2YWx1ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsICF0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIGdvX3RvRHJpdmUoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgIH0sXG4gICAgc2lnbl9vdXQoKSB7XG4gICAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0uc2lnbk91dCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS8jIS9sb2dpbicpO1wiO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHt9XG59O1xuLy8gY29tcG9uZW50czogeyBDaGFydCB9PC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXBwIC5tZC1hcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmFwcC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sb3JfYmxhY2sgLm1kLWJ1dHRvbixcbi5jb2xvcl9ibGFjayAubWQtaWNvbixcbi5jb2xvcl9ibGFjayBkaXYge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQge30gZnJvbSBcInNwaW5hbC1jb3JlLWNvbm5lY3RvcmpzXCI7XG5pbXBvcnQgKiBhcyBRIGZyb20gXCJxXCI7XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiBcIlwiO1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG59XG5cbmNsYXNzIFNwaW5hbFN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMucHJvbWlzZU1vZGVsID0gbnVsbDtcbiAgICB0aGlzLnByb21pc2Vpbml0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcbiAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5ID0ge307XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnByb21pc2Vpbml0KSByZXR1cm4gdGhpcy5wcm9taXNlaW5pdC5wcm9taXNlO1xuICAgIHRoaXMucHJvbWlzZWluaXQgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgaWYgKHRoaXMudXNlci51c2VybmFtZSkge1xuICAgICAgd2luZG93LlNwaW5hbFVzZXJNYW5hZ2VyLmdldF91c2VyX2lkKFxuICAgICAgICBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCxcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmNvbm4gPSB3aW5kb3cuc3BpbmFsQ29yZS5jb25uZWN0KFxuICAgICAgICAgICAgYGh0dHA6Ly8ke2lkfToke3RoaXMudXNlci5wYXNzd29yZH1AJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wcm9taXNlaW5pdC5yZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICAgIC8vIHRoaXMucHJvbWlzZWluaXQucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb21pc2Vpbml0LnByb21pc2U7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGxldCBwYXRoID0gZ2V0UGFyYW1ldGVyQnlOYW1lKFwicGF0aFwiKTtcbiAgICBpZiAocGF0aCkgcmV0dXJuIGF0b2IocGF0aCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgIGxldCBfdXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwaW5hbGhvbWVfY2ZnXCIpO1xuICAgICAgaWYgKF91c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UoYXRvYihfdXNlcikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgZ2V0TW9kZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvbWlzZU1vZGVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlTW9kZWwucHJvbWlzZTtcbiAgICB9XG4gICAgdGhpcy5wcm9taXNlTW9kZWwgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5pbml0KCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IHBhdGggPSBnZXRQYXJhbWV0ZXJCeU5hbWUoXCJwYXRoXCIpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9odG1sL2RyaXZlL1wiO1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBhdG9iKHBhdGgpO1xuICAgICAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgICAgIHRoaXMuY29ubixcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIGZvcmdlZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gZm9yZ2VmaWxlO1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlTW9kZWwucmVzb2x2ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvaHRtbC9kcml2ZS9cIjtcbiAgICAgICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2h0bWwvZHJpdmUvXCI7XG4gICAgICAgIC8vIGRlZmVyLnJlamVjdCgpO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZU1vZGVsLnByb21pc2U7XG4gIH1cbiAgX3dhaXRNb2RlbFJkeVJlYyhtb2RlbCwgcHJvbWlzZSkge1xuICAgIGlmICghbW9kZWwuX3NlcnZlcl9pZCB8fCB3aW5kb3cuRmlsZVN5c3RlbS5fdG1wX29iamVjdHNbbW9kZWwuX3NlcnZlcl9pZF0pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl93YWl0TW9kZWxSZHlSZWMobW9kZWwsIHByb21pc2UpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2UgcHJvbWlzZS5yZXNvbHZlKG1vZGVsKTtcbiAgfVxuICB3YWl0TW9kZWxSZHkobW9kZWwpIHtcbiAgICBsZXQgZGVmZXIgPSBRLmRlZmVyKCk7XG4gICAgdGhpcy5fd2FpdE1vZGVsUmR5UmVjKG1vZGVsLCBkZWZlcik7XG5cbiAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgfVxuICBsb2FkTW9kZWxQdHIobW9kZWwpIHtcbiAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZE1vZGVsUHRyKG1vZGVsLl9wdHIpO1xuICAgIH1cbiAgICBpZiAoIShtb2RlbCBpbnN0YW5jZW9mIHdpbmRvdy5QdHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2FkTW9kZWxQdHIgbXVzdCB0YWtlIFB0ciBhcyBwYXJhbWV0ZXJcIik7XG4gICAgfVxuICAgIGlmICghbW9kZWwuZGF0YS52YWx1ZSAmJiBtb2RlbC5kYXRhLm1vZGVsKSB7XG4gICAgICByZXR1cm4gUS5yZXNvbHZlKG1vZGVsLmRhdGEubW9kZWwpO1xuICAgIH0gZWxzZSBpZiAoIW1vZGVsLmRhdGEudmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBsb2FkIGEgUHRyIHRvIDBcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsc0RpY3Rpb25hcnlbbW9kZWwuZGF0YS52YWx1ZV0gPSBRLmRlZmVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGVsLmxvYWQobSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5yZXNvbHZlKG0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdO1xuICAgICAgdGhpcy5tb2RlbHNEaWN0aW9uYXJ5W21vZGVsLmRhdGEudmFsdWVdID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzRGljdGlvbmFyeVttb2RlbC5kYXRhLnZhbHVlXS5wcm9taXNlO1xuICB9XG4gIHNpZ25PdXQoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BpbmFsaG9tZV9jZmdcIiwgXCJcIik7XG4gIH1cbiAgbG9hZChwYXRoKSB7XG4gICAgaWYgKHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gICAgfVxuICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSBRLmRlZmVyKCk7XG5cbiAgICB3aW5kb3cuc3BpbmFsQ29yZS5sb2FkKFxuICAgICAgdGhpcy5jb25uLFxuICAgICAgcGF0aCxcbiAgICAgIG0gPT4ge1xuICAgICAgICB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnJlc29sdmUobSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbW9kZWwgaW4gOiBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF07XG4gICAgICAgIHRoaXMubW9kZWxzUGF0aERpY3Rpb25hcnlbcGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHByb21pc2UucmVqZWN0KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsc1BhdGhEaWN0aW9uYXJ5W3BhdGhdLnByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BpbmFsU3lzdGVtO1xuIiwiaW1wb3J0IFNwaW5hbFN5c3RlbSBmcm9tIFwiLi9TcGluYWxTeXN0ZW1cIjtcbmltcG9ydCBGb3JnZVZpZXdlciBmcm9tIFwiLi4vTWFpbkNvbnRlbnQvRm9yZ2VWaWV3ZXIuanNcIjtcbmltcG9ydCBGb3JnZUV4dGVudGlvbk1hbmFnZXIgZnJvbSBcIi4uL01haW5Db250ZW50L0ZvcmdlRXh0ZW50aW9uTWFuYWdlci5qc1wiO1xuXG53aW5kb3cuc3BpbmFsID0ge307XG5cbndpbmRvdy5zcGluYWwuc3BpbmFsU3lzdGVtID0gbmV3IFNwaW5hbFN5c3RlbSgpO1xud2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXIgPSBuZXcgRm9yZ2VFeHRlbnRpb25NYW5hZ2VyKCk7XG53aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyID0gbmV3IEZvcmdlVmlld2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zdGFsbChWdWUpIHtcbiAgICBWdWUucHJvdG90eXBlLiRzcGluYWxTeXN0ZW0gPSB3aW5kb3cuc3BpbmFsLnNwaW5hbFN5c3RlbTtcbiAgICBWdWUucHJvdG90eXBlLiRGb3JnZVZpZXdlciA9IHdpbmRvdy5zcGluYWwuRm9yZ2VWaWV3ZXI7XG4gICAgVnVlLnByb3RvdHlwZS4kRm9yZ2VFeHRlbnRpb25NYW5hZ2VyID0gd2luZG93LnNwaW5hbC5Gb3JnZUV4dGVudGlvbk1hbmFnZXI7XG4gIH0sXG4gIHNwaW5hbFN5c3RlbTogd2luZG93LnNwaW5hbC5zcGluYWxTeXN0ZW0sXG4gIEZvcmdlVmlld2VyOiB3aW5kb3cuc3BpbmFsLkZvcmdlVmlld2VyLFxuICBGb3JnZUV4dGVudGlvbk1hbmFnZXI6IHdpbmRvdy5zcGluYWwuRm9yZ2VFeHRlbnRpb25NYW5hZ2VyXG59O1xuIiwiIiwiIDx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItc2VjdGlvbi1zdGFydFwiPlxuICAgICAgPGltZyBzcmM9XCJkaXN0L2Fzc2V0cy9pbWcvU3BpbmFsQklNVmlld2VyTG9nby5wbmdcIlxuICAgICAgICAgICBhbHQ9XCJTcGluYWxCSU0gVmlld2VyXCJcbiAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQycHg7bWFyZ2luLXRvcDogNHB4O1wiPlxuICAgIDwvZGl2PlxuICAgIDxoMj5cbiAgICAgIHt7cGF0aH19XG4gICAgICA8bWQtdG9vbHRpcD57e2Z1bGxQYXRofX08L21kLXRvb2x0aXA+XG4gICAgPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci1zZWN0aW9uLWVuZFwiPlxuICAgICAge3t1c2VybmFtZX19XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwidG9nZ2xlTWVudVwiPlxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxuICAgICAgPC9tZC1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzcGluYWwgZnJvbSBcIi4uL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNwaW5hbEhlYWRlclwiLFxuICBwcm9wczogW1widmFsdWVcIl0sXG4gIGRhdGEoKSB7XG4gICAgLy8gdmFyIHZtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbFBhdGg6IFwiXCIsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgdXNlcm5hbWU6IFwiXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTWVudTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgIXRoaXMudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLnVzZXJuYW1lID0gc3BpbmFsLnNwaW5hbFN5c3RlbS5nZXRVc2VyKCkudXNlcm5hbWU7XG4gICAgdm0uZnVsbFBhdGggPSBzcGluYWwuc3BpbmFsU3lzdGVtLmdldFBhdGgoKTtcbiAgICBsZXQgcGF0aCA9IHZtLmZ1bGxQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICB2bS5wYXRoID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICB9XG59Ozwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1kLWJ1dHRvbixcbi5tZC1pY29uLFxuZGl2IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tIFwidnVlLW1hdGVyaWFsXCI7XG5pbXBvcnQgc3BpbmFsIGZyb20gXCIuL1NwaW5hbFN5c3RlbS9zcGluYWxcIjtcbmltcG9ydCBWVG9vbHRpcCBmcm9tIFwidi10b29sdGlwXCI7XG5cblZ1ZS51c2Uoc3BpbmFsKTtcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xuXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKTtcblZ1ZS51c2UoVlRvb2x0aXApO1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI2FwcFwiLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcbiJdfQ==
