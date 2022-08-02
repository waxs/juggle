/*!
 * @waxs/juggle (1.0.0) by Sander Hidding
 * Juggle your objects and data sets, combine, relate or create new segments.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/juggle.git)
 */
var Juggle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Juggle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Juggle/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Core.js":
/*!*********************!*\
  !*** ./src/Core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setup_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/setup/_extends */ \"./src/setup/_extends.js\");\n/* harmony import */ var _js_setup_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_init */ \"./src/setup/_init.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state */ \"./src/state/index.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helper */ \"./src/helpers/index.js\");\n/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @method */ \"./src/methods/index.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** ----------------------------------------\n    Setup\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Core\n ---------------------------------------- */\n\nvar Core = /*#__PURE__*/_createClass(function Core() {\n  _classCallCheck(this, Core);\n});\n\n;\n/** ----------------------------------------\n    State\n ---------------------------------------- */\n\n\nObject(_js_setup_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Core, _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/** ---------------------------------------- \n    Helpers\n ---------------------------------------- */\n\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _helper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/** ---------------------------------------- \n    Methods\n ---------------------------------------- */\n\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://Juggle/./src/Core.js?");

/***/ }),

/***/ "./src/Juggle.js":
/*!***********************!*\
  !*** ./src/Juggle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Core */ \"./src/Core.js\");\n/* harmony import */ var _util_debug_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/debug/_schema */ \"./src/util/debug/_schema.js\");\n/* harmony import */ var _js_setup_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/setup/_construct */ \"./src/setup/_construct.js\");\n/* harmony import */ var _js_setup_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/setup/_middleware */ \"./src/setup/_middleware.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/** ----------------------------------------\n    Hangin Core\n ---------------------------------------- */\n\n/** ----------------------------------------   \n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------   \n    Setup\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Juggle \n ---------------------------------------- */\n\nvar Juggle = /*#__PURE__*/function (_Core) {\n  _inherits(Juggle, _Core);\n\n  var _super = _createSuper(Juggle);\n\n  /** ----------------------------------------\n      Constructor\n   ---------------------------------------- */\n  function Juggle() {\n    var _this;\n\n    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Juggle);\n\n    _this = _super.call(this);\n\n    if (typeof window !== 'undefined' || typeof global !== 'undefined') {\n      _this.validate(config);\n\n      Object(_js_setup_construct__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_assertThisInitialized(_this), config);\n\n      _this.init();\n    }\n\n    return _this;\n  }\n\n  _createClass(Juggle, [{\n    key: \"validate\",\n    value: function validate(config) {\n      var validate = Object(_util_debug_schema__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        log: {\n          value: Boolean,\n          required: false\n        },\n        warnings: {\n          value: Boolean,\n          required: false\n        },\n        watch: {\n          value: Boolean,\n          required: false\n        }\n      });\n\n      var check = validate(config);\n      if (!check) return console.error(\"Unvalid configuration set: \".concat(config));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Object.seal(this);\n    }\n  }]);\n\n  return Juggle;\n}(_js_Core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_js_setup_middleware__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Juggle));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Juggle/./src/Juggle.js?");

/***/ }),

/***/ "./src/config/default.config.js":
/*!**************************************!*\
  !*** ./src/config/default.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Construct\n ---------------------------------------- */\nvar setDefaults = function setDefaults(config) {\n  /** ----------------------------------------\n      Configuration\n   ---------------------------------------- */\n  var defaults = [\n  /** ----------------------------------------\n      Data\n   ---------------------------------------- */\n  {\n    name: 'data',\n    value: {}\n  },\n  /** ----------------------------------------\n      Config\n   ---------------------------------------- */\n  {\n    name: 'config',\n    value: config\n  }];\n  return defaults;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDefaults);\n\n//# sourceURL=webpack://Juggle/./src/config/default.config.js?");

/***/ }),

/***/ "./src/config/validation.config.js":
/*!*****************************************!*\
  !*** ./src/config/validation.config.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isEmptyObj */ \"./src/util/check/_isEmptyObj.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Rules\n ---------------------------------------- */\n\nvar validate = function validate(config) {\n  var error = function error(msg) {\n    throw new Error(msg);\n  };\n\n  var warning = function warning(msg) {\n    if (config.warning) console.error(msg);\n  };\n  /** ----------------------------------------\n      Type Validation\n   ---------------------------------------- */\n\n\n  var type = function type(arg, validate) {\n    var type = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arg);\n\n    if (type !== validate) error(\"Given \".concat(arg, \" should be of \").concat(validate, \" while \").concat(type, \" given\"));\n  };\n  /** ----------------------------------------\n      Validations\n   ---------------------------------------- */\n\n\n  return {\n    add: function add(_, value) {\n      if (!value) error(\"No value specified for add method.\");\n    },\n    assign: function assign(_, callback) {\n      type(callback, 'function');\n    },\n    bundle: function bundle(_ref, keys) {\n      var path = _ref.path;\n      if (!path) warning(\"No path given for bundle method, use \\\"[set].[path]\\\" to target a key.\");\n      if (!keys) error(\"No keys have been specified to bundle.\");\n      type(keys, 'array');\n    },\n    construct: function construct(_, callback) {\n      type(callback, 'function');\n    },\n    create: function create(_ref2) {\n      var name = _ref2.name,\n          data = _ref2.data;\n      if (data !== undefined) error(\"This set (\".concat(name, \") has already been created.\"));\n    },\n    join: function join(_ref3, target) {\n      var name = _ref3.name,\n          data = _ref3.data;\n      if (!name && !target) error(\"The join method requires a name and target.\");\n      type(target, 'string');\n    },\n    merge: function merge(_ref4, target) {\n      var name = _ref4.name;\n      if (!name && !target) error(\"The merge method requires a name and target.\");\n      type(target, 'string');\n    },\n    limit: function limit(_ref5, size) {\n      var info = _ref5.info;\n      if (info.length < size) warning(\"The selected size (\".concat(size, \") is larger then the set (\").concat(info.length, \").\"));\n      type(size, 'number');\n    },\n    remove: function remove(_, keys) {\n      if (!keys) warning(\"No keys have been specified to remove.\");\n      type(keys, 'array');\n    },\n    rename: function rename(_, options) {\n      if (Object(_util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options)) warning(\"No options have been specified to rename.\");\n      type(options, 'object');\n    }\n  };\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack://Juggle/./src/config/validation.config.js?");

/***/ }),

/***/ "./src/helpers/_deconstruct.js":
/*!*************************************!*\
  !*** ./src/helpers/_deconstruct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_format_prefixKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_prefixKeys */ \"./src/util/format/_prefixKeys.js\");\n/* harmony import */ var _util_format_splitPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/format/_splitPath */ \"./src/util/format/_splitPath.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Deconstruct\n---------------------------------------- */\n\nfunction deconstruct(set) {\n  var _splitPath2 = Object(_util_format_splitPath__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(set),\n      _splitPath3 = _slicedToArray(_splitPath2, 2),\n      _set = _splitPath3[0],\n      _path = _splitPath3[1];\n\n  var data = this._data[_set] && this._data[_set]['data'];\n  var info = Object.assign({}, this._data[_set]);\n  delete info['data'];\n  return {\n    name: _set,\n    path: _path,\n    data: data,\n    info: data && info\n  };\n}\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deconstruct);\n\n//# sourceURL=webpack://Juggle/./src/helpers/_deconstruct.js?");

/***/ }),

/***/ "./src/helpers/_exists.js":
/*!********************************!*\
  !*** ./src/helpers/_exists.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Exists\n---------------------------------------- */\nfunction exists(name) {\n  var sets = Object.keys(this._data);\n  return sets.includes(name);\n}\n\n;\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (exists);\n\n//# sourceURL=webpack://Juggle/./src/helpers/_exists.js?");

/***/ }),

/***/ "./src/helpers/_merge.js":
/*!*******************************!*\
  !*** ./src/helpers/_merge.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_chunk */ \"./src/util/function/_chunk.js\");\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_function_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_path */ \"./src/util/function/_path.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_function_unchunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/function/_unchunk */ \"./src/util/function/_unchunk.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n\n\n\n\n\n/** ----------------------------------------\n    Convert Path\n---------------------------------------- */\n\nvar convertPath = function convertPath(data, path, key) {\n  var sample = data[0];\n  return Object(_util_function_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sample, path) ? path : [key];\n};\n/** ----------------------------------------\n    Find Item\n---------------------------------------- */\n\n\nvar findItem = function findItem(data, keys, value) {\n  var match = data.filter(function (item) {\n    return Object(_util_function_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, keys) === value;\n  });\n  return match.length && match[0];\n};\n/** ----------------------------------------\n    Merge\n---------------------------------------- */\n\n/**\n * The merge method will create a new set\n * merging two excisting sets together. \n * \n * @param { object } set - parsed set\n * @param { string } target - parsed target\n * @return { this } instance\n */\n\n\nfunction merge(set, target) {\n  var setInfo = set.info;\n  var targetInfo = target.info;\n\n  var setArray = Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(setInfo.chunks ? Object(_util_function_unchunk__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(set.data) : set.data);\n\n  var targetArray = Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(targetInfo.chunks ? Object(_util_function_unchunk__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target.data) : target.data);\n\n  var setPath = convertPath(setArray, set.path, target.name);\n  var targetPath = convertPath(targetArray, target.path, 'id');\n\n  var data = Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(setArray, function (item) {\n    var setValue = Object(_util_function_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, setPath);\n\n    var targetValue = findItem(targetArray, targetPath, setValue);\n\n    Object(_util_format_createPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, setPath, targetValue || null);\n\n    return item;\n  });\n\n  setInfo.chunks && Object(_util_function_chunk__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(set.data, setInfo.size);\n  targetInfo.chunks && Object(_util_function_chunk__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target.data, targetInfo.size);\n  return data;\n}\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack://Juggle/./src/helpers/_merge.js?");

/***/ }),

/***/ "./src/helpers/_replace.js":
/*!*********************************!*\
  !*** ./src/helpers/_replace.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_format_prefixKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_prefixKeys */ \"./src/util/format/_prefixKeys.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Config\n---------------------------------------- */\n\n/**\n * This accepted types.\n */\n\nvar types = ['array', 'object'];\n/** ----------------------------------------\n    Replace\n---------------------------------------- */\n\nfunction replace(name, data, options) {\n  var _this = this;\n\n  var type = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n\n  if (!types.includes(type)) return console.error(\"Not a valid type given: \".concat(type));\n\n  var config = _objectSpread({\n    format: type,\n    data: data,\n    length: data && (data.length || 1)\n  }, options);\n\n  var settings = Object(_util_format_prefixKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(config, name, '.');\n\n  Object.entries(settings).forEach(function (setting) {\n    _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, [_this._data].concat(_toConsumableArray(setting)));\n  });\n  return this;\n}\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (replace);\n\n//# sourceURL=webpack://Juggle/./src/helpers/_replace.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deconstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deconstruct */ \"./src/helpers/_deconstruct.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_exists */ \"./src/helpers/_exists.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_merge */ \"./src/helpers/_merge.js\");\n/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_replace */ \"./src/helpers/_replace.js\");\n/** ----------------------------------------\n    Utiltiies\n---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  _deconstruct: _deconstruct__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _exists: _exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _merge: _merge__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  _replace: _replace__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://Juggle/./src/helpers/index.js?");

/***/ }),

/***/ "./src/methods/_add.js":
/*!*****************************!*\
  !*** ./src/methods/_add.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_function_unchunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_unchunk */ \"./src/util/function/_unchunk.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Add\n ---------------------------------------- */\n\n/**\n * The add method can either add a new item\n * to an excisting set or add a new key to\n * each element within the set, the value will \n * represent the newly added item or key.\n * \n * @param { object } set - parsed set\n * @param { any } value - given value\n * @return { this } instance\n */\n\nfunction add(_ref) {\n  var name = _ref.name,\n      path = _ref.path,\n      data = _ref.data,\n      info = _ref.info,\n      event = _ref.event;\n  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (path) {\n    Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, function (item) {\n      Object(_util_format_createPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, path, value);\n    });\n  }\n\n  if (!path) {\n    if (info.chunks) {\n      var array = Object(_util_function_unchunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n\n      array.push(value);\n\n      this._replace(name, array);\n\n      this.chunk(name, info.size);\n    }\n\n    if (!info.chunks) {\n      var _array = Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n\n      _array.push(value);\n\n      this._replace(name, _array);\n    }\n  }\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack://Juggle/./src/methods/_add.js?");

/***/ }),

/***/ "./src/methods/_assign.js":
/*!********************************!*\
  !*** ./src/methods/_assign.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Assign\n ---------------------------------------- */\n\n/**\n * The assign method will create a new key\n * value pair using a loop that will pass each\n * item within the set to callback, making it \n * possible to create new keys from excisting\n * data and merging multiple values. \n * \n * @param { object } set - parsed set\n * @param { function } callback - assigned value\n * @return { this } instance\n */\n\nfunction assign(_ref, callback) {\n  var name = _ref.name,\n      path = _ref.path,\n      data = _ref.data,\n      event = _ref.event;\n\n  Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, function (item) {\n    Object(_util_format_createPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, path, callback(item));\n\n    return item;\n  });\n\n  event && event(name);\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assign);\n\n//# sourceURL=webpack://Juggle/./src/methods/_assign.js?");

/***/ }),

/***/ "./src/methods/_bundle.js":
/*!********************************!*\
  !*** ./src/methods/_bundle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Bundle\n ---------------------------------------- */\n\n/**\n * The bundle method can be used to assign\n * multiple keys to a newly created key and\n * bundle the information.\n * \n * @param { object } set - parsed set\n * @param { array } keys - keys to be added\n * @return { this } instance\n */\n\nfunction bundle(_ref, keys) {\n  var name = _ref.name,\n      data = _ref.data,\n      path = _ref.path,\n      event = _ref.event;\n\n  Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, function (item) {\n    keys && Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(keys).forEach(function (key) {\n      Object(_util_format_createPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, [].concat(_toConsumableArray(path), [key]), item[key]);\n\n      delete item[key];\n    });\n  });\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bundle);\n\n//# sourceURL=webpack://Juggle/./src/methods/_bundle.js?");

/***/ }),

/***/ "./src/methods/_chunk.js":
/*!*******************************!*\
  !*** ./src/methods/_chunk.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_chunk */ \"./src/util/function/_chunk.js\");\n/* harmony import */ var _util_function_sumArrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_sumArrays */ \"./src/util/function/_sumArrays.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Chunk\n---------------------------------------- */\n\n/**\n * The chunk method can split a given set\n * into smaller chunks based on a given\n * amount for each chunk. \n * \n * @param { object } set - parsed set\n * @param { number } amount - chunk size\n * @return { this } instance\n */\n\nfunction chunk(_ref) {\n  var name = _ref.name,\n      data = _ref.data,\n      event = _ref.event;\n  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n  var chunks = Object(_util_function_chunk__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data), amount);\n\n  this._replace(name, chunks, {\n    size: amount,\n    chunks: chunks.length,\n    length: Object(_util_function_sumArrays__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(chunks)\n  });\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n\n//# sourceURL=webpack://Juggle/./src/methods/_chunk.js?");

/***/ }),

/***/ "./src/methods/_construct.js":
/*!***********************************!*\
  !*** ./src/methods/_construct.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Construct\n ---------------------------------------- */\n\n/**\n * The construct method can be used to assign\n * and construct an item within a given set. \n * This method does not support paths, meaning\n * the complete item has to be build from the \n * ground up, the callback needs to return an\n * array that will be merged leaving the orginal\n * item intact. \n * \n * @param { object } set - parsed set\n * @param { function } callback - new key values\n * @return { this } instance\n */\n\nfunction construct(_ref, callback) {\n  var name = _ref.name,\n      data = _ref.data,\n      event = _ref.event;\n\n  var array = Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, function (item) {\n    return _objectSpread(_objectSpread({}, item), callback(item));\n  });\n\n  this._replace(name, array);\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (construct);\n\n//# sourceURL=webpack://Juggle/./src/methods/_construct.js?");

/***/ }),

/***/ "./src/methods/_create.js":
/*!********************************!*\
  !*** ./src/methods/_create.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Create\n ---------------------------------------- */\n\n/**\n * The create method will create a new set\n * of data and assign additional information \n * to the set for internal use. \n * \n * @param { object } set - parsed set\n * @param { array, object } data - item(s) assigned\n * @return { this } instance\n */\nfunction create(_ref, data) {\n  var name = _ref.name,\n      event = _ref.event;\n\n  this._replace(name, data, {\n    chunks: false\n  });\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack://Juggle/./src/methods/_create.js?");

/***/ }),

/***/ "./src/methods/_flatten.js":
/*!*********************************!*\
  !*** ./src/methods/_flatten.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Flat\n ---------------------------------------- */\n\n/**\n * The flat function will take an object\n * and flatten it's nested values to a \n * single root item, each key that holds an\n * object will be converted to a snakecased\n * key containing a reference to the path.\n */\n\nvar flat = function flat(obj, parent) {\n  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var keys = Object.keys(obj);\n  keys.forEach(function (key) {\n    var prefix = parent ? parent + '_' + key : key;\n    Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj[key]) === 'object' ? flat(obj[key], prefix, item) : item[prefix] = obj[key];\n  });\n  return item;\n};\n/** ----------------------------------------\n    Flatten\n ---------------------------------------- */\n\n/**\n * The flatted method will loop over each\n * item within a given set and flatten the\n * item to a single rooted object. Any nested\n * objects will be flattend according to a \n * snake cased prefix based on their parents\n * keys. \n * \n * @param { object } set - parsed set\n * @return { this } instance\n */\n\n\nfunction flatten(_ref) {\n  var name = _ref.name,\n      data = _ref.data,\n      info = _ref.info,\n      event = _ref.event;\n\n  var set = Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, flat);\n\n  this._replace(name, set);\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatten);\n\n//# sourceURL=webpack://Juggle/./src/methods/_flatten.js?");

/***/ }),

/***/ "./src/methods/_flush.js":
/*!*******************************!*\
  !*** ./src/methods/_flush.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Flush\n ---------------------------------------- */\n\n/**\n * The flush method will delete a data set\n * from the store and removes all related\n * data.\n * \n * @param { object } set - parsed set\n * @return { this } instance\n */\nfunction flush(_ref) {\n  var name = _ref.name;\n  delete this._data[name];\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flush);\n\n//# sourceURL=webpack://Juggle/./src/methods/_flush.js?");

/***/ }),

/***/ "./src/methods/_info.js":
/*!******************************!*\
  !*** ./src/methods/_info.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Info\n ---------------------------------------- */\n\n/**\n * The info method will return any information\n * related to a given set. \n * \n * @param { object } set - parsed set\n * @return { object } information about set\n */\nfunction info(_ref) {\n  var info = _ref.info;\n  return info;\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (info);\n\n//# sourceURL=webpack://Juggle/./src/methods/_info.js?");

/***/ }),

/***/ "./src/methods/_join.js":
/*!******************************!*\
  !*** ./src/methods/_join.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_chunk */ \"./src/util/function/_chunk.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n/** ----------------------------------------\n    Join\n ---------------------------------------- */\n\n/**\n * The join method will create a new set\n * merging two excisting sets together. \n * \n * @param { object } set - parsed set\n * @param { string } target - selected target\n * @return { this } instance\n */\n\nfunction join(set, target) {\n  var _target = this._deconstruct(target);\n\n  var data = this._merge(set, _target);\n\n  var replace = set.info.chunks ? Object(_util_function_chunk__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, set.info.size) : data;\n\n  this._replace(set.name, replace);\n\n  this.flush(_target.name);\n  set.event && set.event(set.name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (join);\n\n//# sourceURL=webpack://Juggle/./src/methods/_join.js?");

/***/ }),

/***/ "./src/methods/_limit.js":
/*!*******************************!*\
  !*** ./src/methods/_limit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Limit\n ---------------------------------------- */\n\n/**\n * The limit method can be used to limit\n * the size of a set, by default the size will\n * be 10 items.\n * \n * @param { object } set - parsed set\n * @param { number } size - size of the set\n * @return { this } instance\n */\nfunction limit(_ref) {\n  var name = _ref.name,\n      data = _ref.data,\n      event = _ref.event;\n  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n  var set = data.slice(0, size);\n\n  this._replace(name, set);\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (limit);\n\n//# sourceURL=webpack://Juggle/./src/methods/_limit.js?");

/***/ }),

/***/ "./src/methods/_log.js":
/*!*****************************!*\
  !*** ./src/methods/_log.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Log\n ---------------------------------------- */\n\n/**\n * The log method will return log the result\n * selected and by reusing the select method.\n * \n * @param { object } set - parsed set\n * @return { this } instance\n */\nfunction log(_ref) {\n  var name = _ref.name,\n      path = _ref.path;\n  var unique = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var set = !!path.length ? \"\".concat(name, \".\").concat(path.join('.')) : name;\n  var data = this.select(set, unique);\n  console.log(data);\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (log);\n\n//# sourceURL=webpack://Juggle/./src/methods/_log.js?");

/***/ }),

/***/ "./src/methods/_merge.js":
/*!*******************************!*\
  !*** ./src/methods/_merge.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Merge\n ---------------------------------------- */\n\n/**\n * The merge method will blend two sets\n * together replacing the given set.\n * \n * @param { object } set - parsed set\n * @param { string } target - selected target\n * @return { this } instance\n */\nfunction merge(set, target) {\n  var copy = JSON.parse(JSON.stringify(set.data));\n\n  var _target = this._deconstruct(target);\n\n  var name = \"\".concat(set.name, \"_\").concat(_target.name);\n\n  var data = this._merge(set, _target);\n\n  this._replace(set.name, copy);\n\n  this._replace(name, data);\n\n  set.event && set.event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack://Juggle/./src/methods/_merge.js?");

/***/ }),

/***/ "./src/methods/_remove.js":
/*!********************************!*\
  !*** ./src/methods/_remove.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_deletePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_deletePath */ \"./src/util/format/_deletePath.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Remove\n ---------------------------------------- */\n\n/**\n * The remove method can be used to delete\n * multiple keys from an item within the set\n * \n * @param { object } set - parsed set\n * @param { array } keys - keys to be added\n * @return { this } instance\n */\n\nfunction remove(_ref, keys) {\n  var name = _ref.name,\n      data = _ref.data,\n      event = _ref.event;\n\n  Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, function (item) {\n    keys && Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(keys).forEach(function (key) {\n      item[key] && Object(_util_format_deletePath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, key);\n    });\n  });\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remove);\n\n//# sourceURL=webpack://Juggle/./src/methods/_remove.js?");

/***/ }),

/***/ "./src/methods/_rename.js":
/*!********************************!*\
  !*** ./src/methods/_rename.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_createPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_createPath */ \"./src/util/format/_createPath.js\");\n/* harmony import */ var _util_format_deletePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_deletePath */ \"./src/util/format/_deletePath.js\");\n/* harmony import */ var _util_function_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_path */ \"./src/util/function/_path.js\");\n/* harmony import */ var _util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/check/_isEmptyObj */ \"./src/util/check/_isEmptyObj.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n\n\n/** ----------------------------------------\n    Remove\n---------------------------------------- */\n\nvar removeEmptyObj = function removeEmptyObj(obj) {\n  var keys = Object.keys(obj);\n  keys.forEach(function (key) {\n    var item = obj[key];\n\n    if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(item) === 'object') {\n      removeEmptyObj(item);\n      if (Object(_util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item)) delete obj[key];\n    }\n\n    return item;\n  });\n};\n/** ----------------------------------------\n    Rename\n ---------------------------------------- */\n\n/**\n * The rename method can rename keys\n * based on a given configuration. \n * \n * @param { object } set - parsed set\n * @param { object } options - configured names\n * @return { this } instance\n */\n\n\nfunction rename(_ref, options) {\n  var name = _ref.name,\n      data = _ref.data,\n      event = _ref.event;\n  var entries = Object.entries(options);\n\n  Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(data, function (item) {\n    entries.forEach(function (entry) {\n      var _entry = _slicedToArray(entry, 2),\n          key = _entry[0],\n          value = _entry[1];\n\n      var _value = Object(_util_function_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, key);\n\n      if (value && _value) {\n        Object(_util_format_createPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, value, _value);\n\n        Object(_util_format_deletePath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, key);\n      }\n    });\n    return removeEmptyObj(item);\n  });\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rename);\n\n//# sourceURL=webpack://Juggle/./src/methods/_rename.js?");

/***/ }),

/***/ "./src/methods/_schema.js":
/*!********************************!*\
  !*** ./src/methods/_schema.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_schema */ \"./src/util/debug/_schema.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Schema\n ---------------------------------------- */\n\n/**\n * Validate the result using a schema, a \n * schema will check if the object match\n * a specific setup. \n * \n * @param { object } set - parsed set\n * @param { object } options - schema\n * @return { this } instance\n */\n\nfunction schema(_ref, options) {\n  var data = _ref.data;\n\n  Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, function (item) {\n    var validate = Object(_util_debug_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options);\n\n    if (!validate(item)) return console.error(\"This item \".concat(item, \" is unvalidated and does not match the given schema:\"), options);\n  });\n\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n//# sourceURL=webpack://Juggle/./src/methods/_schema.js?");

/***/ }),

/***/ "./src/methods/_segment.js":
/*!*********************************!*\
  !*** ./src/methods/_segment.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_function_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_path */ \"./src/util/function/_path.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_function_unchunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/function/_unchunk */ \"./src/util/function/_unchunk.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Segment\n ---------------------------------------- */\n\n/**\n * The segment method will create a new set\n * based on an excisting nested object related\n * to a key within a given set. \n * \n * @param { object } set - parsed set\n * @param { string } name - optional name for set\n * @return { this } instance\n */\n\nfunction segment(_ref, name) {\n  var path = _ref.path,\n      data = _ref.data,\n      event = _ref.event,\n      info = _ref.info;\n\n  var _name = name || path[path.length - 1];\n\n  var set = Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, function (item) {\n    var value = Object(_util_function_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, path);\n\n    if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) === 'object') return value;\n  });\n\n  this._replace(_name, info.chunks ? Object(_util_function_unchunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(set) : set);\n\n  event && event(name);\n  return this;\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (segment);\n\n//# sourceURL=webpack://Juggle/./src/methods/_segment.js?");

/***/ }),

/***/ "./src/methods/_select.js":
/*!********************************!*\
  !*** ./src/methods/_select.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_function_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_path */ \"./src/util/function/_path.js\");\n/* harmony import */ var _util_function_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_unique */ \"./src/util/function/_unique.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Select\n ---------------------------------------- */\n\n/**\n * The select method will return the data\n * based on a given set. It's also possible\n * to retrieve a collection of items based\n * on a specifc path. This will return all\n * values related to any nested key. \n * \n * @param { object } set - parsed set\n * @param { boolean } unique - return unique items\n * @return { array } data related to set\n */\n\nfunction select(_ref) {\n  var path = _ref.path,\n      data = _ref.data;\n  var unique = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var set = !path || !path.length ? data || null : Object(_util_function_structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, function (item) {\n    return Object(_util_function_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, path);\n  });\n\n  var array = Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(set);\n\n  return unique ? Object(_util_function_unique__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(array, unique) : array;\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (select);\n\n//# sourceURL=webpack://Juggle/./src/methods/_select.js?");

/***/ }),

/***/ "./src/methods/index.js":
/*!******************************!*\
  !*** ./src/methods/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_add */ \"./src/methods/_add.js\");\n/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assign */ \"./src/methods/_assign.js\");\n/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_bundle */ \"./src/methods/_bundle.js\");\n/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chunk */ \"./src/methods/_chunk.js\");\n/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_construct */ \"./src/methods/_construct.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_create */ \"./src/methods/_create.js\");\n/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_flatten */ \"./src/methods/_flatten.js\");\n/* harmony import */ var _flush__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_flush */ \"./src/methods/_flush.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_info */ \"./src/methods/_info.js\");\n/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_join */ \"./src/methods/_join.js\");\n/* harmony import */ var _limit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_limit */ \"./src/methods/_limit.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_log */ \"./src/methods/_log.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_merge */ \"./src/methods/_merge.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_remove */ \"./src/methods/_remove.js\");\n/* harmony import */ var _rename__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_rename */ \"./src/methods/_rename.js\");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_schema */ \"./src/methods/_schema.js\");\n/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_segment */ \"./src/methods/_segment.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_select */ \"./src/methods/_select.js\");\n/** ----------------------------------------\n    Utiltiies\n---------------------------------------- */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  add: _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  assign: _assign__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  bundle: _bundle__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  chunk: _chunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  construct: _construct__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  create: _create__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  flatten: _flatten__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  flush: _flush__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  info: _info__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  join: _join__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  limit: _limit__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  log: _log__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  merge: _merge__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  remove: _remove__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  rename: _rename__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  schema: _schema__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  segment: _segment__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  select: _select__WEBPACK_IMPORTED_MODULE_17__[\"default\"]\n});\n\n//# sourceURL=webpack://Juggle/./src/methods/index.js?");

/***/ }),

/***/ "./src/setup/_construct.js":
/*!*********************************!*\
  !*** ./src/setup/_construct.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_config_default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/default.config */ \"./src/config/default.config.js\");\n/** ----------------------------------------\n    Defaults\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Construct\n ---------------------------------------- */\n\nfunction construct(model, config) {\n  var defaults = Object(_js_config_default_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config);\n  defaults.forEach(function (config) {\n    return model['_' + config.name] = config.value;\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (construct);\n\n//# sourceURL=webpack://Juggle/./src/setup/_construct.js?");

/***/ }),

/***/ "./src/setup/_extends.js":
/*!*******************************!*\
  !*** ./src/setup/_extends.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Extend\n ---------------------------------------- */\nvar extend = function extend(model, fn) {\n  Object.keys(fn).forEach(function (method) {\n    return model.prototype[method] = fn[method];\n  });\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extend);\n\n//# sourceURL=webpack://Juggle/./src/setup/_extends.js?");

/***/ }),

/***/ "./src/setup/_init.js":
/*!****************************!*\
  !*** ./src/setup/_init.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Extend\n ---------------------------------------- */\nvar init = function init(model, fn) {\n  Object.keys(fn).forEach(function (state) {\n    fn[state](model.prototype);\n  });\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack://Juggle/./src/setup/_init.js?");

/***/ }),

/***/ "./src/setup/_middleware.js":
/*!**********************************!*\
  !*** ./src/setup/_middleware.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _js_config_validation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/config/validation.config */ \"./src/config/validation.config.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n/** ----------------------------------------\n    Validation\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Excluded Watchers\n ---------------------------------------- */\n\nvar execluded = ['flush', 'info', 'log', 'schema', 'select'];\n/** ----------------------------------------\n    Middleware\n ---------------------------------------- */\n\n/**\n * The middleware will deconstruct any given\n * set name to a path, dataset, name and \n * related infomation. If a set is not \n * available it will set an error letting\n * the user know that the called set is\n * unavailable.\n */\n\nfunction middleware(obj) {\n  var extend = Object.getPrototypeOf(new obj());\n  var prototype = Object.getPrototypeOf(extend);\n  var methods = Object.getOwnPropertyNames(prototype);\n\n  var _iterator = _createForOfIteratorHelper(methods),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var method = _step.value;\n      var fn = prototype[method];\n\n      if (typeof fn === 'function' && fn.name !== 'Core') {\n        prototype[method] = function () {\n          var _this = this;\n\n          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n          }\n\n          if (!method.includes('_')) {\n            var set = args.shift();\n            var data = Object.assign(_objectSpread({\n              event: function event(name) {\n                return _this._config.watch && !execluded.includes(method) && _this.event.dispatch(method, _this.select(name));\n              }\n            }, this._deconstruct(set)));\n            var validation = Object(_js_config_validation_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this._config);\n            validation[method] && validation[method].apply(validation, _toConsumableArray([data].concat(args)));\n            this._config.log && console.log(method, data);\n\n            if (!this._exists(data.name) && method !== 'create') {\n              console.error(\"This set does not exists: \".concat(data.name, \" called on \").concat(method, \".\"));\n              return null;\n            }\n\n            ;\n            return fn.call.apply(fn, [this].concat(_toConsumableArray([data].concat(args))));\n          }\n\n          return fn.call.apply(fn, [this].concat(args));\n        };\n      }\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return obj;\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);\n\n//# sourceURL=webpack://Juggle/./src/setup/_middleware.js?");

/***/ }),

/***/ "./src/state/_event.js":
/*!*****************************!*\
  !*** ./src/state/_event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_helper_Emit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/helper/Emit */ \"./src/util/helper/Emit.js\");\n/** ----------------------------------------\n    Event\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Events\n ---------------------------------------- */\n\n/**\n * Declares a global event listener that can\n * be used to either dispatch events or listen\n * to changes made handeling \n */\n\nfunction event(model) {\n  var _event = new _util_helper_Emit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  Object.defineProperty(model, 'event', {\n    get: function get() {\n      return _event;\n    },\n    set: function set() {}\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\n//# sourceURL=webpack://Juggle/./src/state/_event.js?");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_event */ \"./src/state/_event.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  event: _event__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://Juggle/./src/state/index.js?");

/***/ }),

/***/ "./src/util/check/_isArray.js":
/*!************************************!*\
  !*** ./src/util/check/_isArray.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Array\n ---------------------------------------- */\n\n/**\n * Will check if given value is of type array.\n *\n * @param { string | number | array | object } value - given value\n * @return { boolean } result\n */\nvar isArray = function isArray(value) {\n  return Array.isArray(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isArray);\n\n//# sourceURL=webpack://Juggle/./src/util/check/_isArray.js?");

/***/ }),

/***/ "./src/util/check/_isEmptyObj.js":
/*!***************************************!*\
  !*** ./src/util/check/_isEmptyObj.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Empty Object\n ---------------------------------------- */\n\n/**\n * Will check if a given object has key\n * value pairs present.\n *\n * @param { object } obj - given object\n * @return { boolean } result\n */\nvar isEmptyObj = function isEmptyObj(obj) {\n  return !!(obj && Object.keys(obj).length === 0);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEmptyObj);\n\n//# sourceURL=webpack://Juggle/./src/util/check/_isEmptyObj.js?");

/***/ }),

/***/ "./src/util/check/_isType.js":
/*!***********************************!*\
  !*** ./src/util/check/_isType.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isArray */ \"./src/util/check/_isArray.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/** ----------------------------------------\n    Util\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is Type \n ---------------------------------------- */\n\n/**\n * Check the type of a given value.\n *\n * @param { string | number | array | object } value - value to check\n * @return { string } type of given value\n */\n\nvar isType = function isType(value) {\n  return Object(_util_check_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) && 'array' || _typeof(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isType);\n\n//# sourceURL=webpack://Juggle/./src/util/check/_isType.js?");

/***/ }),

/***/ "./src/util/debug/_schema.js":
/*!***********************************!*\
  !*** ./src/util/debug/_schema.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isEmptyObj */ \"./src/util/check/_isEmptyObj.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Checks\n---------------------------------------- */\n\n/**\n * This function will check if a given value\n * matches the declared type.\n */\n\nvar check = function check(value, type) {\n  return Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) === type.name.toLowerCase();\n};\n/**\n * Check will delegate the schema depending\n * on multiple accepted types, a required \n * option and return a validation. \n */\n\n\nvar checks = function checks(schema, obj, keys) {\n  return keys.reduce(function (array, key) {\n    var value = obj[key];\n    var types = schema[key];\n\n    var format = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(types);\n\n    if (format === 'object') types = types.required ? types.value : null;\n    if (types === null) return array;\n\n    if (!types) {\n      console.error(\"A key (\".concat(key, \") has not been declared on the item:\"), obj);\n      array.push(false);\n      return array;\n    }\n\n    var multiple = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(types) === 'array';\n    var compare = !multiple ? check(value, types) : types.some(function (type) {\n      return check(value, type);\n    });\n    var log = multiple ? types.map(function (type) {\n      return type.name;\n    }).join(', ') : types.name;\n    if (!compare) console.error(\"Given value for \".concat(key, \" (\").concat(_typeof(value), \") is not of a valid type matching the schema: [\").concat(log, \"]\"));\n    array.push(compare);\n    return array;\n  }, []);\n};\n/** ----------------------------------------\n    Schema\n---------------------------------------- */\n\n/**\n * A simple (schema) type validator for matching\n * types. Used for type validation in objects, \n * will return a closure that can validate a given\n * object. The closure will resolve a boolean\n * that will output the resolved checks. \n * \n * Use as follows:\n * \n * const validate = schema({\n *   title: String,\n *   category: [Array, Boolean]\n * });\n * \n * const check = validate({\n *   title: 'Sander',\n *   category: ['developer']\n * })\n * \n * console.log(check)\n * \n * It's also possible to set required values\n * within the schema, meaning, a value should\n * be present to validate.\n * \n * const validate = schema({\n *   title: {\n *      value: String,\n *      required: true\n *   },\n *   category: [Array, Boolean]\n * });\n * \n * @param { schema } object - keys and matching type(s)\n * @return { function } validate\n */\n\n\nvar schema = function schema(_schema) {\n  var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  if (!_schema) return function () {\n    return true;\n  };\n  return function (obj) {\n    if (!empty && (Object(_util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) || !obj)) {\n      console.error(\"No item (or empty object) passed to validate\");\n      return true;\n    }\n\n    var keys = Object.keys(_schema);\n    var validation = checks(_schema, obj, keys);\n    return validation.every(function (check) {\n      return !!check;\n    });\n  };\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n//# sourceURL=webpack://Juggle/./src/util/debug/_schema.js?");

/***/ }),

/***/ "./src/util/format/_createPath.js":
/*!****************************************!*\
  !*** ./src/util/format/_createPath.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Create Path\n ---------------------------------------- */\n\n/**\n * Will create a new path on a given object.\n * The keys argument may be specified as a\n * dot seperated path for nested key creation.\n * \n * @param { object } item \n * @param { string | array } keys - a given key path\n * @param { any } value - the assigned value\n * @return { object } manipulated object\n */\n\nvar createPath = function createPath(item, keys, value) {\n  var array = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keys) === 'array' ? keys : keys.split('.');\n  var path = array.slice(0, -1);\n  var last = array[array.length - 1];\n  return path.reduce(function (obj, key) {\n    return obj[key] = obj[key] || {};\n  }, item)[last] = value;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPath);\n\n//# sourceURL=webpack://Juggle/./src/util/format/_createPath.js?");

/***/ }),

/***/ "./src/util/format/_deletePath.js":
/*!****************************************!*\
  !*** ./src/util/format/_deletePath.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Delete Path\n ---------------------------------------- */\n\n/**\n * Will delete a specifc path on a given object.\n * The keys argument may be specified as a\n * dot seperated path for nested key.\n * \n * @param { object } item \n * @param { string | array } keys - a given key path\n * @return { object } manipulated object\n */\n\nvar deletePath = function deletePath(item, keys) {\n  if (!item || !keys) return;\n  var array = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keys) === 'array' ? keys : keys.split('.');\n\n  for (var i = 0; i < array.length - 1; i++) {\n    item = item[array[i]];\n    if (typeof item === 'undefined') return;\n  }\n\n  delete item[array.pop()];\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deletePath);\n\n//# sourceURL=webpack://Juggle/./src/util/format/_deletePath.js?");

/***/ }),

/***/ "./src/util/format/_prefixKeys.js":
/*!****************************************!*\
  !*** ./src/util/format/_prefixKeys.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Prefix Keys\n ---------------------------------------- */\n\n/**\n * This function will connect a set of keys\n * on a given item with a declared prefix.\n * \n * @param { object } item \n * @param { string } prefix\n * @param { string } connector - the seperation symbol\n * @return { object } manipulated object\n */\nvar prefixKeys = function prefixKeys(item, prefix) {\n  var connector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_';\n  var keys = Object.keys(item);\n  return keys.reduce(function (obj, key) {\n    obj[prefix + (connector && connector) + key] = item[key];\n    delete item[key];\n    return obj;\n  }, item);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prefixKeys);\n\n//# sourceURL=webpack://Juggle/./src/util/format/_prefixKeys.js?");

/***/ }),

/***/ "./src/util/format/_splitPath.js":
/*!***************************************!*\
  !*** ./src/util/format/_splitPath.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Split Path\n---------------------------------------- */\n\n/**\n * A given string can be split into a unique\n * set name and (if dot seperated) a path.\n * This function will format a string into\n * multiple seperated values use for\n * deconstructing a given set name.\n * \n * @param { string } path \n * @return { array } seperated name and path\n */\n\nvar splitPath = function splitPath(path) {\n  var split = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path) === 'array' ? path : path.split('.');\n  var set = split.shift();\n  return [set, !!split.length && split];\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitPath);\n\n//# sourceURL=webpack://Juggle/./src/util/format/_splitPath.js?");

/***/ }),

/***/ "./src/util/format/_valueToArray.js":
/*!******************************************!*\
  !*** ./src/util/format/_valueToArray.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Value to Array\n ---------------------------------------- */\n\n/**\n * This function will make sure a given value\n * will be converted into an array.\n * \n * @param { array | object } value \n * @return { array } created array\n */\n\nvar valueToArray = function valueToArray(value) {\n  return Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) !== 'array' ? [value] : value;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (valueToArray);\n\n//# sourceURL=webpack://Juggle/./src/util/format/_valueToArray.js?");

/***/ }),

/***/ "./src/util/function/_chunk.js":
/*!*************************************!*\
  !*** ./src/util/function/_chunk.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Chunk\n---------------------------------------- */\n\n/**\n * The chunk function will chunk a given\n * amount of data into seperated arrays.\n * \n * @param { array } data - array of items\n * @param { array } amount - size of the chunks \n * @return { array } chunked data\n */\nvar chunk = function chunk(data, amount) {\n  var chunks = [];\n\n  for (var i = 0; i < data.length; i += amount) {\n    chunks.push(data.slice(i, i + amount));\n  }\n\n  return chunks;\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_chunk.js?");

/***/ }),

/***/ "./src/util/function/_path.js":
/*!************************************!*\
  !*** ./src/util/function/_path.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n/** ----------------------------------------\n    Path\n ---------------------------------------- */\n\nvar path = function path(item, keys) {\n  if (!keys || !keys.length) return false;\n  var array = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keys) === 'array' ? keys : keys.split('.');\n  if (!array.length) return item[key];\n  return array.reduce(function (array, key) {\n    return array[key] || false;\n  }, item);\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (path);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_path.js?");

/***/ }),

/***/ "./src/util/function/_structure.js":
/*!*****************************************!*\
  !*** ./src/util/function/_structure.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Structure\n ---------------------------------------- */\n\nvar structure = function structure(data, callback) {\n  var handleObject = function handleObject(obj) {\n    if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) === 'array') return handleArray(obj);\n    return callback(obj);\n  };\n\n  var handleArray = function handleArray(array) {\n    return array.map(handleObject);\n  };\n\n  var types = {\n    array: function array(_array) {\n      return handleArray(_array);\n    },\n    object: function object(obj) {\n      return handleObject(obj);\n    }\n  };\n\n  var type = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n\n  if (!Object.keys(types).includes(type)) return console.error(\"Not a valid type given: \".concat(type));\n  return types[type](data);\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (structure);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_structure.js?");

/***/ }),

/***/ "./src/util/function/_sumArrays.js":
/*!*****************************************!*\
  !*** ./src/util/function/_sumArrays.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Sum Arrays\n ---------------------------------------- */\n\n/**\n* Will sum the length of multiple arrays\n* contained within an array.\n* \n* @param { array } data - array of arrays\n* @return { number } total length\n*/\nvar sumArrays = function sumArrays(data) {\n  return data.reduce(function (total, item) {\n    return total += item.length;\n  }, 0);\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sumArrays);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_sumArrays.js?");

/***/ }),

/***/ "./src/util/function/_unchunk.js":
/*!***************************************!*\
  !*** ./src/util/function/_unchunk.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Unchunk\n---------------------------------------- */\nvar unchunk = function unchunk(data) {\n  return data.reduce(function (array, chunks) {\n    return [].concat(_toConsumableArray(array), _toConsumableArray(chunks));\n  }, []);\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unchunk);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_unchunk.js?");

/***/ }),

/***/ "./src/util/function/_unique.js":
/*!**************************************!*\
  !*** ./src/util/function/_unique.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_function_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/function/_structure */ \"./src/util/function/_structure.js\");\n/* harmony import */ var _util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_valueToArray */ \"./src/util/format/_valueToArray.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Unique Object\n ---------------------------------------- */\n\nvar uniqueObj = function uniqueObj(array) {\n  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id'];\n  return keys.reduce(function (combine, key) {\n    var items = _toConsumableArray(new Map(array.map(function (item) {\n      return [item[key], item];\n    })).values());\n\n    items.forEach(function (item) {\n      return !combine.includes(item) && combine.push(item);\n    });\n    return combine;\n  }, []);\n};\n/** ----------------------------------------\n    Sample Keys\n ---------------------------------------- */\n\n\nvar sampleKeys = function sampleKeys(obj) {\n  var keys = Object.keys(obj);\n  var selection = keys.filter(function (key) {\n    var type = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n\n    return type === 'string' || 'number';\n  });\n\n  if (selection.includes('id')) {\n    selection.sort(function (x, y) {\n      return x == 'id' ? -1 : y == 'id' ? 1 : 0;\n    });\n  }\n\n  return selection.slice(0, 3);\n};\n/** ----------------------------------------\n    Unique\n ---------------------------------------- */\n\n\nvar unique = function unique(array, keys) {\n  var _keys = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keys) !== 'boolean' ? Object(_util_format_valueToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(keys) : [];\n\n  if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array === 'array')) {\n    var sample = array[0];\n\n    if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sample) === 'object') {\n      var _keys2 = _keys.length ? _keys : sampleKeys(sample);\n\n      return uniqueObj(array, _keys2);\n    }\n\n    ;\n\n    if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sample) !== 'object') {\n      return _toConsumableArray(new Set(array));\n    }\n  }\n\n  return array;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unique);\n\n//# sourceURL=webpack://Juggle/./src/util/function/_unique.js?");

/***/ }),

/***/ "./src/util/helper/Emit.js":
/*!*********************************!*\
  !*** ./src/util/helper/Emit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/** ----------------------------------------\n    Emit\n---------------------------------------- */\n\n/**\n * Simple event emitter for handeling watcher\n * and dispatching events.\n */\nvar Emit = /*#__PURE__*/function () {\n  /** ----------------------------------------\n      Constructor\n   ---------------------------------------- */\n  function Emit() {\n    _classCallCheck(this, Emit);\n\n    this._events = {};\n  }\n  /** ----------------------------------------\n      Emit\n   ---------------------------------------- */\n\n\n  _createClass(Emit, [{\n    key: \"_handle\",\n    value: function _handle(name) {\n      var events = Object.keys(this._events);\n\n      if (!events.includes(name)) {\n        this._events[name] = [];\n      }\n    }\n    /** ----------------------------------------\n        Dispatch\n     ---------------------------------------- */\n\n  }, {\n    key: \"dispatch\",\n    value: function dispatch(name, payload) {\n      if (this._events[name]) {\n        this._events[name].map(function (event) {\n          event.callback && event.callback(payload);\n        });\n      }\n    }\n    /** ----------------------------------------\n        On\n     ---------------------------------------- */\n\n  }, {\n    key: \"on\",\n    value: function on(name, callback) {\n      if (callback) {\n        this._handle(name);\n\n        this._events[name].push({\n          callback: callback\n        });\n      }\n\n      if (!callback) throw new Error(\"A callback is mandatory for \\\"\".concat(name, \"\\\", specify the event on('name', () => { ... }).\"));\n    }\n    /** ----------------------------------------\n        Remove\n     ---------------------------------------- */\n\n  }, {\n    key: \"remove\",\n    value: function remove(name) {\n      delete this._events[name];\n    }\n  }]);\n\n  return Emit;\n}();\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emit);\n\n//# sourceURL=webpack://Juggle/./src/util/helper/Emit.js?");

/***/ })

/******/ })["default"];module.exports=Juggle;