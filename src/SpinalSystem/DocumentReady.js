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
 */

'use strict';
// The public function name defaults to window.docReady
// but you can modify the last line of this function to pass in a different object or method name
// if you want to put them in a different namespace and those will be used instead of
// window.docReady(...)
var readyList = [];
var readyFired = false;
var readyEventHandlersInstalled = false;

// call this when the document is ready
// this function protects itself against being called more than once
function ready() {
  if (!readyFired) {
    // this must be set to true before we start calling callbacks
    readyFired = true;
    for (var i = 0; i < readyList.length; i++) {
      // if a callback here happens to add new ready handlers,
      // the docReady() function will see that it already fired
      // and will schedule the callback to run right after
      // this event loop finishes so all handlers will still execute
      // in order and no new ones will be added to the readyList
      // while we are processing the list
      readyList[i].fn.call(window, readyList[i].ctx);
    }
    // allow any closures held by these functions to free
    readyList = [];
  }
}

function readyStateChange() {
  if (document.readyState === 'complete') {
    ready();
  }
}

function DocumentReady(callback, context) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback for docReady(fn) must be a function');
  }
  // if ready has already fired, then just schedule the callback
  // to fire asynchronously, but right away
  if (readyFired) {
    setTimeout(function () {
      callback(context);
    }, 1);
    return;
  } else {
    // add the function and context to the list
    readyList.push({
      fn: callback,
      ctx: context,
    });
  }
  // if document already ready to go, schedule the ready function to run
  // IE only safe when readyState is "complete", others safe when readyState is "interactive"
  if (
    document.readyState === 'complete' ||
    (!document.attachEvent && document.readyState === 'interactive')
  ) {
    setTimeout(ready, 1);
  } else if (!readyEventHandlersInstalled) {
    // otherwise if we don't have event handlers installed, install them
    if (document.addEventListener) {
      // first choice is DOMContentLoaded event
      document.addEventListener('DOMContentLoaded', ready, false);
      // backup is window load event
      window.addEventListener('load', ready, false);
    } else {
      // must be IE
      document.attachEvent('onreadystatechange', readyStateChange);
      window.attachEvent('onload', ready);
    }
    readyEventHandlersInstalled = true;
  }
}
export { DocumentReady };
export default DocumentReady;
