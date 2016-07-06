(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactDisposition"] = factory(require("React"));
	else
		root["ReactDisposition"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  // display
	  Inline: __webpack_require__(1),
	  InlineBlock: __webpack_require__(3),
	  Block: __webpack_require__(4),
	  Flex: __webpack_require__(5),
	  InlineFlex: __webpack_require__(6),

	  // position
	  Absolute: __webpack_require__(7),
	  Fixed: __webpack_require__(8),
	  Relative: __webpack_require__(9)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied) {
	  return _extends({
	    display: "inline"
	  }, applied);
	};

	var Inline = function Inline(_ref) {
	  var style = _ref.style;

	  var props = _objectWithoutProperties(_ref, ["style"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style)
	  }));
	};

	module.exports = Inline;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied) {
	  return _extends({
	    display: "inline-block"
	  }, applied);
	};

	var InlineBlock = function InlineBlock(_ref) {
	  var style = _ref.style;

	  var props = _objectWithoutProperties(_ref, ["style"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style)
	  }));
	};

	module.exports = InlineBlock;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied) {
	    return _extends({
	        display: "block"
	    }, applied);
	};

	var Block = function Block(_ref) {
	    var style = _ref.style;

	    var props = _objectWithoutProperties(_ref, ["style"]);

	    return _react2.default.createElement("div", _extends({}, props, {
	        style: elementStyles(style)
	    }));
	};

	module.exports = Block;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied) {
	  return _extends({
	    display: "flex"
	  }, applied);
	};

	var Flex = function Flex(_ref) {
	  var style = _ref.style;

	  var props = _objectWithoutProperties(_ref, ["style"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style)
	  }));
	};

	module.exports = Flex;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied) {
	  return _extends({
	    display: "inline-flex"
	  }, applied);
	};

	var InlineFlex = function InlineFlex(_ref) {
	  var style = _ref.style;

	  var props = _objectWithoutProperties(_ref, ["style"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style)
	  }));
	};

	module.exports = InlineFlex;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied, positions) {
	  return _extends({
	    position: "absolute"
	  }, positions, applied);
	};

	var Absolute = function Absolute(_ref) {
	  var style = _ref.style;
	  var top = _ref.top;
	  var right = _ref.right;
	  var bottom = _ref.bottom;
	  var left = _ref.left;

	  var props = _objectWithoutProperties(_ref, ["style", "top", "right", "bottom", "left"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style, { top: top, right: right, bottom: bottom, left: left })
	  }));
	};

	module.exports = Absolute;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied, positions) {
	  return _extends({
	    position: "fixed"
	  }, positions, applied);
	};

	var Fixed = function Fixed(_ref) {
	  var style = _ref.style;
	  var top = _ref.top;
	  var right = _ref.right;
	  var bottom = _ref.bottom;
	  var left = _ref.left;

	  var props = _objectWithoutProperties(_ref, ["style", "top", "right", "bottom", "left"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style, { top: top, right: right, bottom: bottom, left: left })
	  }));
	};

	module.exports = Fixed;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var elementStyles = function elementStyles(applied, positions) {
	  return _extends({
	    position: "relative"
	  }, positions, applied);
	};

	var Relative = function Relative(_ref) {
	  var style = _ref.style;
	  var top = _ref.top;
	  var right = _ref.right;
	  var bottom = _ref.bottom;
	  var left = _ref.left;

	  var props = _objectWithoutProperties(_ref, ["style", "top", "right", "bottom", "left"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: elementStyles(style, { top: top, right: right, bottom: bottom, left: left })
	  }));
	};

	module.exports = Relative;

/***/ }
/******/ ])
});
;