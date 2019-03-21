module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/jonathanschwartz/Documents/owl/website/nextjs/components/Logo.js";


var Logo =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Logo, _PureComponent);

  function Logo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        className: "logo",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 185 294",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "owl"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "annotations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        className: "cls-1",
        d: "M165.05,96.47c6.59-10.94,11.27-23.88,6.11-35.72-2.7-6.19-7.83-11.44-11.83-17.15s-6.91-12.54-4.57-18.66c3-7.82,14-12.76,14.11-21.06C162.24,10.57,152.45,15,142,16c-14.91,1.45-30.1-3.75-45.12-3C76.36,14,55.9,25.73,36.9,18.43,28,15,20,10.85,10.84,8.17c2.94,5.38,6.85,8.27,10.73,12.48,1.35,1.45,2.62,3.08,2.8,4.88s-.8,3.49-1.78,5.06C17.09,39.36,10.94,47.92,7.31,57.4S2.8,77.62,7.83,86.94c3.6,6.66,10,12.21,12.9,19.07,4.89,11.45-.76,23.57-4.89,34.92a140.86,140.86,0,0,0,.74,97.34c2.39,6.46,4.5,12.9,7.47,19,2.57,5.23,6.3,10,11.84,16.84,0,0,18.47-10,48.19-3.62s45.83-.16,45.83-.16c16.33-28.43,24-60.94,21.8-85.41-1.69-18.48-9.64-37.23-5-55.13C149.89,117.7,158.47,107.4,165.05,96.47ZM79.66,82.53c-1.11,8.44-1,14.92-5.82,21.88-1.29,1.86-4.13,3.2-5.59,3A10.76,10.76,0,0,1,60,102.18c-1.57-3-1.81-6.36-1.9-9.64-.35-12.81-1.65-26.28,8.55-34.67a5.61,5.61,0,0,1,2.57-.79c5.66,0,7.64,5.18,9.17,9.65A39.27,39.27,0,0,1,79.66,82.53Zm49,9.24a18,18,0,0,1-4.34,6.85c-3.48,3-9.33,1.68-13.1-1.12-8.29-6.17-10.36-17.35-10.87-27.22-.37-7,0-15.66,0-15.66a11.68,11.68,0,0,1,6.37-9.75c2.84-1.58,6.68-.76,9.34,1.15a24.68,24.68,0,0,1,6.37,7.4c4.09,6.76,7.82,13.92,8.31,21.62A43,43,0,0,1,128.65,91.77Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        className: "cls-2",
        d: "M182.06,246.9c-11.88,2-22.56,7.81-33.1,13.35-4.6,2.42-9.31,4.87-14.17,6.89a179.62,179.62,0,0,0,17.28-50.78,133.16,133.16,0,0,0,2.16-25.83c-.23-9.72-2.21-19.22-3.94-28.75-1.83-10-3.37-20.53-1-30.6,2.24-9.49,7.7-17.74,12.83-25.88s10.31-16.77,12.23-26.43a35,35,0,0,0,.1-14,35.42,35.42,0,0,0-6-12.74C163.35,44.68,153,34.21,158.3,24.36c3.84-7.2,12.53-11.47,13-20.38a2.13,2.13,0,0,0-3.6-1.49,39.63,39.63,0,0,1-24.83,11.74c-10.65,1-21.18-1.6-31.73-2.57-10.27-.94-20,.74-29.87,3.28-9.26,2.37-18.83,5.32-28.5,4.37-5.71-.57-10.87-3-16-5.36a152.35,152.35,0,0,0-17-6.79,2.13,2.13,0,0,0-2.38,3.1,45.73,45.73,0,0,0,7.81,10c1.45,1.51,3.25,3.08,4.19,5,1.17,2.37-.53,4.49-1.74,6.49-5,8.27-10.38,16.37-13.85,25.45C10.54,65.59,9.26,75.21,12,84c2.67,8.56,9.56,14.41,13.41,22.29,4.42,9.06,1.34,19.21-1.81,28.13-3.22,9.14-6.26,18.21-8.12,27.74a151.07,151.07,0,0,0,0,57.53c3.67,18.85,10.52,37.25,21.91,52.78-12.61,4-24.37,10.33-35.46,17.49C-.37,291.38,1.74,295,4,293.56c10.44-6.76,21.45-12.78,33.29-16.7a100.83,100.83,0,0,1,14.23-3.59v.06c.56,2.84,1.67,5.08,4.8,5.34,4.69.38,9.74,1.74,14.44,1.18,2.14-.25,3.66-1,4.37-3.16a13.93,13.93,0,0,0,.57-4.93,148.35,148.35,0,0,1,14.87,1.4l1.77.27,0,.3c-.25,2.49-.9,6.55.53,8.79,1.66,2.58,5.85,1.85,8.43,1.88q5.67.06,11.34,0c2.48,0,6.56.76,8.27-1.56.87-1.17.86-2.74,1-4.14.1-1.14.18-2.28.23-3.42,8.4-1.5,16.38-5,24-8.86,11.94-6.06,23.62-13.26,37-15.49C185.85,250.52,184.72,246.45,182.06,246.9Zm-63.32,18.16a82,82,0,0,0-11.37-1.13c-3.9-.06-9.76-1.66-13,1.54a7,7,0,0,0-1.63,3.79,160.2,160.2,0,0,0-17.21-1.72,4.83,4.83,0,0,0-.89-2.73c-1.36-1.74-4.08-1.91-6.08-2.11-3.46-.27-6.92-.39-10.37-.56-2.66-.13-5.14.35-6.39,3a9.3,9.3,0,0,0-.78,4q-4.76.82-9.42,2.09a103.55,103.55,0,0,1-11.45-18.7,151.06,151.06,0,0,1-9.44-28.16,145.47,145.47,0,0,1-1.69-58.55,170.8,170.8,0,0,1,7.84-28.17c3.14-8.72,6.31-18.09,4.28-27.44-1.9-8.7-8.7-14.64-12.9-22.15C13.62,79.66,14,69.77,16.9,60.92,20.31,50.39,27,41.53,32.36,32c1.17-2.06,2-4.28,1.49-6.68-.5-2.22-2-4-3.51-5.7-1.92-2.14-3.92-4.13-5.74-6.28,3.37,1.31,6.67,2.78,10,4.26C39.23,19.67,43.93,22,49,23c9.74,1.88,19.59-.43,29-2.86C88.24,17.5,98.22,15,108.89,15.7c11.07.75,22,3.67,33.21,2.8a45.75,45.75,0,0,0,21.54-7.22c-.44.53-.9,1.06-1.36,1.56-2.47,2.74-5.18,5.34-7.12,8.51-5,8.13-1.28,17.42,3.67,24.59,2.72,3.94,5.82,7.62,8.25,11.75a26.68,26.68,0,0,1,3.84,13.49c.08,9.85-4.51,19-9.5,27.27s-10.6,16.11-14.13,25.1c-3.69,9.4-3.93,19.41-2.66,29.32s3.84,19.86,4.89,29.92a112.68,112.68,0,0,1-.42,25.1c-2.59,21.47-9.89,42.51-20.24,61.45a57.44,57.44,0,0,1-6.59,1.71C122.33,268.29,122.08,265.55,118.74,265.06Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        className: "cls-2",
        d: "M82,76.51C81.77,68.71,79.41,56,69.92,55a2.18,2.18,0,0,0-.74-.06,2,2,0,0,0-.76.11c-3.88.71-6.58,4.14-8.52,7.42a30.36,30.36,0,0,0-3.71,11.61,84.63,84.63,0,0,0-.39,13.6c.14,4.73-.12,9.8,1.74,14.24a12.64,12.64,0,0,0,10.15,7.51c4.24.55,7.49-2.86,9.36-6.23a35.51,35.51,0,0,0,3.81-13A86.14,86.14,0,0,0,82,76.51Zm-4.83,9A63.2,63.2,0,0,1,75.41,96.3c-.9,3.07-2.46,7.32-5.61,8.69-2.85,1.23-6.71-1.41-8-3.87-2-3.63-1.6-8.21-1.73-12.2-.11-3.49-.21-7,0-10.47a34.2,34.2,0,0,1,2.16-11.1A20.28,20.28,0,0,1,65,62.52c1-1.31,2.42-3.18,4.21-3.33,3.25.13,4.94,2.57,6.12,5.33a31.63,31.63,0,0,1,2.4,10A57.4,57.4,0,0,1,77.19,85.53Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        className: "cls-2",
        d: "M129.57,60.86c-1.92-5.37-4.18-11.3-8.25-15.43-3.46-3.52-8.54-5.17-13.14-2.88A14.12,14.12,0,0,0,100.41,53a149.14,149.14,0,0,0-1.82,15.19c-.62,9.45-.14,20,6,27.76,3,3.75,7.46,6.77,12.41,6.77s8.48-3.83,10.71-7.89C133.45,84.39,133.51,71.87,129.57,60.86Zm-3.44,26.85c-1.23,3.61-3.1,8.62-6.85,10.38s-8.24-1.15-10.62-3.84c-6.1-6.86-6.46-16.83-5.89-25.52.31-4.23.82-8.45,1.44-12.65.4-2.76.79-5.45,2.8-7.58,2.74-2.93,6.66-3.74,10-1.29,3.81,2.79,5.67,7.77,7.4,12a46.89,46.89,0,0,1,3.74,14.13A36.69,36.69,0,0,1,126.13,87.71Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })));
    }
  }]);

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/jonathanschwartz/Documents/owl/website/nextjs/pages/index.js";





var Home =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _PureComponent);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        lg: {
          span: 7,
          order: -1
        },
        md: 12,
        sm: {
          order: 12
        },
        className: "left-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Let's work better."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "first-paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Right now we're working on a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/aragon/flock/blob/master/teams/Autark/2019Q1-2.md",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, 'grant'), ' from ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://aragon.org/",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Aragon"), ' to build peer-to-peer storage for their discussion and profile features.'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "second-paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "We're also having conversations with researchers of existential threats like AI, climate change, poverty, and aging. If this is you, ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "mailto:jpschwartz8990@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "we'd love to chat"), ". We're trying to understand how we might help you archive or share your work."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://twitter.com/openworklabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "twitter"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/openworklabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "github"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        bsPrefix: "order-first",
        lg: {
          span: 5,
          order: 12
        },
        md: {
          span: 12,
          order: 1
        },
        className: "right-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Open Work Labs")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonathanschwartz/Documents/owl/website/nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map