(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["React8Bit"] = factory(require("react"));
	else
		root["React8Bit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bit = __webpack_require__(2);
	
	var _bit2 = _interopRequireDefault(_bit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image8Bit = function (_Component) {
	  _inherits(Image8Bit, _Component);
	
	  function Image8Bit() {
	    _classCallCheck(this, Image8Bit);
	
	    return _possibleConstructorReturn(this, (Image8Bit.__proto__ || Object.getPrototypeOf(Image8Bit)).apply(this, arguments));
	  }
	
	  _createClass(Image8Bit, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this._img = new Image();
	      this._img.onload = function () {
	        (0, _bit2.default)(_this2.canvas, _this2._img, _this2.props.scaleFactor);
	        if (_this2.props.onLoad) _this2.props.onLoad(_this2._img);
	      };
	      this._img.src = this.props.src;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      if (this.props.src !== nextProps.src) {
	        this._img = new Image();
	        this._img.onload = function () {
	          (0, _bit2.default)(_this3.canvas, _this3._img, _this3.props.scaleFactor);
	          if (_this3.props.onLoad) _this3.props.onLoad(_this3._img);
	        };
	        this._img.src = this.props.src;
	        return;
	      }
	      if (this.props.scaleFactor !== nextProps.scaleFactor) {
	        (0, _bit2.default)(this.canvas, this._img, nextProps.scaleFactor);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props = this.props,
	          src = _props.src,
	          scaleFactor = _props.scaleFactor,
	          others = _objectWithoutProperties(_props, ['src', 'scaleFactor']);
	
	      return _react2.default.createElement('canvas', Object.assign({}, others, { ref: function ref(elem) {
	          return _this4.canvas = elem;
	        } }));
	    }
	  }]);
	
	  return Image8Bit;
	}(_react.Component);
	
	Image8Bit.propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  scaleFactor: _react.PropTypes.number.isRequired,
	  onLoad: _react.PropTypes.func
	};
	exports.default = Image8Bit;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * 8bit
	 *
	 * A module that converts an image into a pixelated version (just like
	 * 8bit artwork).
	 *
	 * @author rogeriopvl <https://github.com/rogeriopvl>
	 * @license MIT
	 */
	
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory();
	  } else {
	    root.eightBit = factory();
	  }
	})(undefined, function () {
	  /**
	   * Draws a pixelated version of an image in a given canvas
	   * @param {object} canvas - a canvas object
	   * @param {object} image - an image HTMLElement object
	   * @param {number} scale - the scale factor: between 0 and 100
	   */
	  var eightBit = function eightBit(canvas, image, scale) {
	    scale *= 0.01;
	
	    canvas.width = image.width;
	    canvas.height = image.height;
	
	    var scaledW = canvas.width * scale;
	    var scaledH = canvas.height * scale;
	
	    var ctx = canvas.getContext('2d');
	
	    ctx.mozImageSmoothingEnabled = false;
	    ctx.webkitImageSmoothingEnabled = false;
	    ctx.imageSmoothingEnabled = false;
	
	    ctx.drawImage(image, 0, 0, scaledW, scaledH);
	    ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, image.width, image.height);
	  };
	
	  return eightBit;
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-8bit.map