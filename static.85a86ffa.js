(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://www.chasegrock.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _logo = __webpack_require__(23);

var _logo2 = _interopRequireDefault(_logo);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactScroll = __webpack_require__(7);

var _reactMotion = __webpack_require__(24);

var _reactWaypoint = __webpack_require__(8);

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _createBrowserHistory = __webpack_require__(25);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var history = (0, _createBrowserHistory2.default)();

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      pathname: "home",
      logo: false,
      main_logo: false,
      name: false,
      biomechanics: false,
      neuroscience: false,
      face: false
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var pathname = location.pathname.split('/')[1];

      self.setState({ pathname: location.pathname.split('/')[1] });
      setTimeout(function () {
        console.log("logo");
        self.setState({ logo: true });
      }, 750);

      setTimeout(function () {
        console.log("name");
        self.setState({ name: true });
      }, 1000);

      setTimeout(function () {
        console.log("biomechanics");
        self.setState({ biomechanics: true });
      }, 1250);

      setTimeout(function () {
        console.log("neuroscience");
        self.setState({ neuroscience: true });
      }, 1450);

      setTimeout(function () {
        console.log("face");
        self.setState({ face: true });
      }, 1700);
      if (pathname.length) {
        setTimeout(function () {
          console.log("scroller");
          _reactScroll.scroller.scrollTo(pathname, {
            duration: 500,
            delay: 100,
            smooth: true
          });
        }, 2500);
      }
    }
  }, {
    key: '_setMainLogo',
    value: function _setMainLogo() {
      this.setState({ main_logo: true });
    }
  }, {
    key: '_setMessage',
    value: function _setMessage(msg) {
      history.replace("/" + msg);
    }
  }, {
    key: '_onEnter',
    value: function _onEnter(msg, object) {
      if (object.previousPosition == 'above') {
        history.replace("/" + msg);
      }
    }
  }, {
    key: '_onLeave',
    value: function _onLeave(msg, object) {
      if (object.currentPosition == 'above') {
        // history.push("/" + msg);
        history.replace("/" + msg);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          pathname = _state.pathname,
          logo = _state.logo,
          name = _state.name,
          biomechanics = _state.biomechanics,
          neuroscience = _state.neuroscience,
          face = _state.face,
          main_logo = _state.main_logo;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'home_wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'title_wrapper' },
            logo ? _react2.default.createElement(
              _reactMotion.Motion,
              { key: 'main_logo', defaultStyle: { x: 400, opacity: -1 }, style: { x: (0, _reactMotion.spring)(0), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) }, onRest: this._setMainLogo.bind(this) },
              function (style) {
                return _react2.default.createElement(
                  'svg',
                  {
                    className: main_logo ? (0, _classnames2.default)('main_logo_finished', 'chase_logo') : 'chase_logo',
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 125.7 197.3' },
                  _react2.default.createElement('polygon', { id: 'c_top', className: 'c',
                    style: {
                      WebkitTransform: 'translateX(' + -style.x + 'px)',
                      transform: 'translateX(' + -style.x + 'px)',
                      opacity: style.opacity
                    },
                    points: '62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 ' }),
                  _react2.default.createElement(
                    'g',
                    { id: 'R', className: 'r',
                      style: {
                        WebkitTransform: 'translateX(' + style.x + 'px)',
                        transform: 'translateX(' + style.x + 'px)',
                        opacity: style.opacity
                      } },
                    _react2.default.createElement('polygon', { id: 'r_top', points: '125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4 87.9,136.5 125.7,98.7 125.7,98.7 \t' }),
                    _react2.default.createElement('polygon', { id: 'r_bottom', points: '37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 \t' }),
                    _react2.default.createElement('polygon', { id: 'r_edge', points: '62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 \t' })
                  ),
                  _react2.default.createElement('polygon', { id: 'c_bottom', className: 'c',
                    style: {
                      WebkitTransform: 'translateX(' + -style.x + 'px)',
                      transform: 'translateX(' + -style.x + 'px)',
                      opacity: style.opacity
                    },
                    points: '0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8 0,98.6 0,98.7 ' })
                );
              }
            ) : _react2.default.createElement(
              'svg',
              { className: 'chase_logo', x: '0px', y: '0px', viewBox: '0 0 125.7 197.3', style: { opacity: 0, width: "150px" } },
              _react2.default.createElement(
                'g',
                { id: 'R', className: 'r' },
                _react2.default.createElement('polygon', { id: 'r_top', points: '125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4 87.9,136.5 125.7,98.7 125.7,98.7 \t' }),
                _react2.default.createElement('polygon', { id: 'r_bottom', points: '37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 \t' }),
                _react2.default.createElement('polygon', { id: 'r_edge', points: '62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 \t' })
              ),
              _react2.default.createElement(
                'g',
                { id: 'C', className: 'c' },
                _react2.default.createElement('polygon', { id: 'c_top', points: '62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 ' }),
                _react2.default.createElement('polygon', { id: 'c_bottom', points: '0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8 0,98.6 0,98.7 ' })
              )
            ),
            name ? _react2.default.createElement(
              _reactMotion.Motion,
              {
                key: 'name',
                defaultStyle: { x: 100, opacity: 0 },
                style: { x: (0, _reactMotion.spring)(0, _reactMotion.presets.gentle), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) } },
              function (name_style) {
                return _react2.default.createElement(
                  'h1',
                  {
                    style: {
                      WebkitTransform: 'translateY(' + name_style.x + 'px)',
                      transform: 'translateY(' + name_style.x + 'px)',
                      opacity: name_style.opacity
                    },
                    className: 'big_name' },
                  'CHASE ROCK'
                );
              }
            ) : _react2.default.createElement(
              'h1',
              { style: { opacity: 0 }, className: 'big_name' },
              'CHASE ROCK'
            ),
            biomechanics ? _react2.default.createElement(
              _reactMotion.Motion,
              {
                key: 'biomechanics',
                defaultStyle: { x: 100, opacity: 0 },
                style: { x: (0, _reactMotion.spring)(0, _reactMotion.presets.gentle), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) } },
              function (name_style) {
                return _react2.default.createElement(
                  'h2',
                  {
                    className: 'subheader',
                    style: {
                      WebkitTransform: 'translateY(' + name_style.x + 'px)',
                      transform: 'translateY(' + name_style.x + 'px)',
                      opacity: name_style.opacity
                    }
                  },
                  'Biomechanics, M.S.'
                );
              }
            ) : _react2.default.createElement(
              'h2',
              { className: 'subheader', style: { opacity: 0 } },
              'Biomechanics, M.S.'
            ),
            neuroscience ? _react2.default.createElement(
              _reactMotion.Motion,
              {
                key: 'neuroscience',
                defaultStyle: { x: 100, opacity: 0 },
                style: { x: (0, _reactMotion.spring)(0, _reactMotion.presets.gentle), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) } },
              function (name_style) {
                return _react2.default.createElement(
                  'h2',
                  {
                    className: 'subheader smaller',
                    style: {
                      WebkitTransform: 'translateY(' + name_style.x + 'px)',
                      transform: 'translateY(' + name_style.x + 'px)',
                      opacity: name_style.opacity
                    }
                  },
                  'Neuroscience, B.S.'
                );
              }
            ) : _react2.default.createElement(
              'h2',
              { className: 'subheader smaller', style: { opacity: 0 } },
              'Neuroscience, B.S.'
            )
          ),
          face ? _react2.default.createElement(
            _reactMotion.Motion,
            {
              key: 'face',
              defaultStyle: { x: 100, opacity: 0 },
              style: { x: (0, _reactMotion.spring)(0, _reactMotion.presets.gentle), opacity: (0, _reactMotion.spring)(1, _reactMotion.presets.gentle) } },
            function (name_style) {
              return _react2.default.createElement('img', { src: '/face.svg',
                style: {
                  WebkitTransform: 'translateY(' + name_style.x + 'px)',
                  transform: 'translateY(' + name_style.x + 'px)',
                  opacity: name_style.opacity
                },
                className: 'face' });
            }
          ) : _react2.default.createElement('img', { src: '/face.svg', style: { opacity: 0 }, className: 'face' })
        ),
        _react2.default.createElement(
          _reactScroll.Element,
          { name: 'bio' },
          _react2.default.createElement(_reactWaypoint2.default, {
            onLeave: this._onLeave.bind(this, "bio"),
            onEnter: this._onEnter.bind(this, ""),
            threshold: 0
          }),
          _react2.default.createElement(
            'div',
            { className: 'bio_wrapper' },
            _react2.default.createElement(
              'div',
              { id: 'bio', className: 'wrapper' },
              _react2.default.createElement(
                'h3',
                { className: 'bio_heading' },
                'Bio'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Currently a PhD student at the Georgia Institute of Technology, Chase is studying under Dr. Young-Hui Chang. Chase is in the Applied Physiology program, which specializes in investigating questions related to the physiology of movement. As a member of the Comparative Neuromechanics Laboratory, Chase\u2019s PhD research involves understanding the body-wide adaptation to novel environments, such as reduced gravity. '
              ),
              _react2.default.createElement(
                'p',
                null,
                'Prior to starting at Georgia Tech, Chase received his Master\u2019s degree in Exercise Physiology in 2017 from the Department of Biomechanics at the University of Nebraska at Omaha. With Dr. Kota Takahashi as his mentor, Chase completed a project that aimed to detect how changes in energy expenditure might be related to the variability of a person\u2019s walking pattern.'
              ),
              _react2.default.createElement(
                'a',
                { className: 'cv_button', href: '/CRock_CV_08202018.pdf' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Curriculum Vitae'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactScroll.Element,
          { name: 'research' },
          _react2.default.createElement(_reactWaypoint2.default, {
            onEnter: this._onEnter.bind(this, "bio"),
            onLeave: this._onLeave.bind(this, "research"),
            threshold: 0
          }),
          _react2.default.createElement(
            'div',
            { className: 'research_wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'wrapper' },
              _react2.default.createElement(
                'h3',
                { className: 'research_heading' },
                'Research'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Chase aims to answer research questions related to neuromuscular control. For example, his Master\u2019s thesis project aims to detect how changes in energy expenditure at different walking speeds might be related to the variability of a person\u2019s walking pattern. This project will provide insight to how humans optimize their walking strategy, as well as how people differ in this optimization.'
              ),
              _react2.default.createElement(
                'h4',
                null,
                'Presentations'
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'May 2017 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking'
                  ),
                  ', ',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://www.unomaha.edu/college-of-education/cobre/events-outreach/conference.php', target: '_blank' },
                    '2nd Annual Human Movement Variability Conference,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/', target: '_blank' },
                    'University of Nebraska at Omaha,'
                  ),
                  ' Omaha, NE ',
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'April 2017 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking'
                  ),
                  ', ',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://sites.google.com/site/asbrockymountain/about-us', target: '_blank' },
                    '7th Annual Meeting of the Rocky Mountain American Society of Biomechanics,'
                  ),
                  ' Estes Park, CO ',
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'April 2017 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings'
                  ),
                  ', ',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://nebraskaacademyofsciences.wildapricot.org/', target: '_blank' },
                    'Nebraska Academy of Sciences Annual Meeting,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unl.edu/', target: '_blank' },
                    'University of Nebraska at Lincoln,'
                  ),
                  ' Lincoln, NE ',
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'March 2017 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings'
                  ),
                  ', ',
                  _react2.default.createElement(
                    'a',
                    { href: 'https://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php', target: '_blank' },
                    'Research and Creative Activity Fair,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/', target: '_blank' },
                    'University of Nebraska at Omaha,'
                  ),
                  ' Omaha, NE ',
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'October 2016 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Relationship Between Metabolic Cost of Transport and Stride-to-Stride Variability'
                  ),
                  ', ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://nric.nebraska.edu/', target: '_blank' },
                    'Symposium on Biomechanics,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/', target: '_blank' },
                    'University of Nebraska at Omaha,'
                  ),
                  ' Omaha, NE ',
                  _react2.default.createElement('br', null)
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'presentation_button', href: '/ChaseRock_UNOSymposium_2016.pdf' },
                    'Poster'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'August 2016 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'http://asb2016.asbweb.org/', target: '_blank' },
                    ' 40th Annual Meeting of the American Society of Biomechanics,'
                  ),
                  ' Raleigh, NC'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'presentation_button', href: '/ChaseRock_ASB 2016_poster.pdf' },
                    'Poster'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'presentation_button', href: '/ChaseRock_ASB2016_abstract.pdf' },
                    'Abstract'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'June 2016 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/college-of-education/cobre/community-engagement/research-day.php', target: '_blank' },
                    ' Human Movement Variability Conference,'
                  ),
                  ' Omaha, NE'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'April 2016 \u2013 ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'https://sites.google.com/site/asbrockymountain/home', target: '_blank' },
                    ' 6th Annual Meeting of the Rocky Mountain American Society of Biomechanics,'
                  ),
                  ' Estes Park, CO'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'presentation_button', href: '/ChaseRock_RMASB_2016_poster.pdf' },
                    'Poster'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'presentation_button', href: '/ChaseRock_RMASB_2016_abstract.pdf' },
                    'Abstract'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'March 2016 - ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php', target: '_blank' },
                    ' Research and Creative Activity Fair,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/', target: '_blank' },
                    ' University of Nebraska at Omaha,'
                  ),
                  ' Omaha, NE'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'presentation' },
                _react2.default.createElement(
                  'p',
                  null,
                  'October 2015 \u2013 ',
                  _react2.default.createElement(
                    'i',
                    null,
                    'Metabolic Cost and Long-Term Correlations in Human Gait'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/college-of-education/health-physical-education-recreation/community-engagement/seminar-series/index.php', target: '_blank' },
                    ' School of HPER Seminar Series,'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.unomaha.edu/', target: '_blank' },
                    ' University of Nebraska at Omaha,'
                  ),
                  ' Omaha, NE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = (0, _reactStatic.withSiteData)(HomePage);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(13);

var _reactStaticRoutes = __webpack_require__(14);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _header = __webpack_require__(26);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(28);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactStatic.Head,
        null,
        _react2.default.createElement('meta', { charSet: 'UTF-8' }),
        _react2.default.createElement(
          'title',
          null,
          'Chase G Rock'
        ),
        _react2.default.createElement('link', { rel: 'shortcut icon', href: 'favicon.png' })
      ),
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_footer2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(15);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(16);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(17);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

var _reactUniversalComponent = __webpack_require__(19);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/forge/Projects/static-blaze/blaze-react-static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/forge/Projects/static-blaze/blaze-react-static/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(20);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(21);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.9ff8fc2e.png";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navigation = __webpack_require__(27);

var _navigation2 = _interopRequireDefault(_navigation);

var _reactWaypoint = __webpack_require__(8);

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      scrolled: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // window.componentHandler.upgradeElement(this.root);
      (function (d) {
        var config = {
          kitId: 'dlg3wcz',
          scriptTimeout: 3000,
          async: true
        },
            h = d.documentElement,
            t = setTimeout(function () {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
            tk = d.createElement("script"),
            f = false,
            s = d.getElementsByTagName("script")[0],
            a;h.className += " wf-loading";tk.src = 'https://use.typekit.net/' + config.kitId + '.js';tk.async = true;tk.onload = tk.onreadystatechange = function () {
          a = this.readyState;if (f || a && a != "complete" && a != "loaded") return;f = true;clearTimeout(t);try {
            Typekit.load(config);
          } catch (e) {}
        };s.parentNode.insertBefore(tk, s);
      })(document);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // window.componentHandler.downgradeElements(this.root);
    }
  }, {
    key: '_toggleScrolled',
    value: function _toggleScrolled() {
      this.setState({ scrolled: !this.state.scrolled });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.state.scrolled ? "scrolled" : null },
        _react2.default.createElement(_reactWaypoint2.default, {
          onLeave: this._toggleScrolled.bind(this),
          onEnter: this._toggleScrolled.bind(this),
          threshold: 0
        }),
        _react2.default.createElement(
          'header',
          { className: 'header' },
          _react2.default.createElement(_navigation2.default, null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactScroll = __webpack_require__(7);

var _reactScroll2 = _interopRequireDefault(_reactScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLink = _reactScroll2.default.Link;

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      _reactScroll.animateScroll.scrollToTop({
        duration: 500,
        delay: 100,
        smooth: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'a',
          { className: 'nav_link', onClick: this.scrollToTop },
          'Home'
        ),
        _react2.default.createElement(
          ScrollLink,
          { activeClass: 'active', className: 'nav_link', to: 'bio', spy: true, smooth: true, offset: 50, duration: 1000 },
          'Bio'
        ),
        _react2.default.createElement(
          ScrollLink,
          { activeClass: 'active', className: 'nav_link', to: 'research', spy: true, smooth: true, offset: 50, duration: 1000 },
          'Research'
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCopyToClipboard = __webpack_require__(29);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = {
      value: "hello@chasegrock.com",
      copied: false
    };
    return _this;
  }

  _createClass(Footer, [{
    key: 'copy',
    value: function copy() {
      this.setState({ copied: true });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // window.componentHandler.upgradeElement(this.root);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // window.componentHandler.downgradeElements(this.root);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement('img', { src: '/signature.svg', className: 'signature' }),
        _react2.default.createElement(
          'p',
          { className: 'subheading' },
          'Chase G Rock'
        ),
        _react2.default.createElement(
          _reactCopyToClipboard2.default,
          {
            text: this.state.value,
            onCopy: this.copy.bind(this) },
          _react2.default.createElement(
            'p',
            { className: 'subheading copy_button' },
            _react2.default.createElement(
              'span',
              { className: '' },
              'hello@chasegrock.com'
            ),
            _react2.default.createElement(
              'span',
              { className: this.state.copied ? "copy_status copied" : "copy_status" },
              this.state.copied ? "Copied, Talk to you soon!" : "Click to Copy"
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'social' },
          _react2.default.createElement('a', { className: (0, _classnames2.default)('social_icon', "icon-spotify"), href: 'https://play.spotify.com/user/1252553485', target: '_blank' })
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "img {\n  max-width: 100%; }\n\nh1, h2, h3, h4, h5 {\n  font-family: eurostile; }\n\nh4 {\n  font-size: 30px; }\n\nbody {\n  font-family: fira-sans;\n  margin: 0; }\n\n.wf-active {\n  opacity: 1;\n  transition: 0.25s ease-in; }\n\n@font-face {\n  font-family: 'icomoon';\n  src: url(\"/fonts/icomoon.eot?7ogda3\");\n  src: url(\"/fonts/icomoon.eot?7ogda3#iefix\") format(\"embedded-opentype\"), url(\"/fonts/icomoon.ttf?7ogda3\") format(\"truetype\"), url(\"/fonts/icomoon.woff?7ogda3\") format(\"woff\"), url(\"/fonts/icomoon.svg?7ogda3#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-instagram:before {\n  content: \"\\EA92\"; }\n\n.icon-spotify:before {\n  content: \"\\EA94\"; }\n\n.icon-twitter:before {\n  content: \"\\EA96\"; }\n\n.icon-github:before {\n  content: \"\\EAB0\"; }\n\n.icon-linkedin2:before {\n  content: \"\\EACA\"; }\n\na {\n  color: black;\n  font-weight: bold;\n  text-decoration: none;\n  position: relative;\n  display: inline-block; }\n  a:before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    right: 50%;\n    bottom: 0;\n    background: black;\n    height: 2px;\n    transition-property: left, right;\n    transition-duration: 0.3s;\n    transition-timing-function: ease-out; }\n  a:hover:before {\n    left: 0;\n    right: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.crossline {\n  fill: none;\n  stroke: #000000;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-miterlimit: 10; }\n\n.home_wrapper {\n  width: 800px;\n  max-width: 100%;\n  margin: auto;\n  text-align: center;\n  padding: 15px; }\n\n.big_name {\n  font-size: 80px;\n  margin: 0; }\n\n.subheader {\n  font-family: fira-sans;\n  font-weight: 300;\n  font-size: 35px;\n  margin: 0; }\n  .subheader.smaller {\n    font-size: 26px; }\n\n.face {\n  margin: 50px 0;\n  width: 550px;\n  max-width: 100%; }\n\n.main_logo_finished .r, .main_logo_finished .c {\n  transition: 0.15s ease-out; }\n\n.chase_logo {\n  width: 150px;\n  margin: auto;\n  margin-top: 100px;\n  overflow: visible; }\n  .chase_logo .r {\n    fill: #666666;\n    stroke-width: 1;\n    stroke: #666666; }\n  .chase_logo .c {\n    fill: #231f20;\n    stroke-width: 1;\n    stroke: #231F21; }\n  .chase_logo:hover .r {\n    transform: translateX(38px) !important; }\n  .chase_logo:hover .c {\n    transform: translateX(-38px) !important; }\n\n.bio_wrapper {\n  background: black;\n  color: white;\n  padding: 75px 15px; }\n\n.research_wrapper {\n  padding: 75px 15px; }\n\n.wrapper {\n  max-width: 1000px;\n  margin: auto; }\n\n.wrapper h3 {\n  text-transform: uppercase;\n  font-size: 50px; }\n\n.presentation {\n  line-height: 1.7;\n  margin: 0 0 30px;\n  background: #eee;\n  padding: 15px 15px 20px; }\n\n.presentation_button {\n  background: black;\n  color: white;\n  margin-right: 15px;\n  padding: 5px 15px;\n  transition: 0.15s ease-out;\n  float: left;\n  text-transform: uppercase; }\n  .presentation_button:hover {\n    background: #666; }\n\n.cv_button {\n  background: white;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 25px;\n  margin: 0;\n  line-height: 1;\n  transition: 0.15s ease-out;\n  padding: 15px;\n  margin-top: 25px; }\n  .cv_button h4 {\n    margin: 0; }\n  .cv_button:hover {\n    background: #ccc; }\n\n.poster_image {\n  box-shadow: 5px 5px 25px #afafaf;\n  display: table;\n  margin: 25px auto;\n  width: 300px;\n  transition: 0.15s ease-out; }\n  .poster_image img {\n    display: block;\n    width: 100%; }\n  .poster_image:hover {\n    transform: translateY(-15px);\n    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3); }\n\n.asb_heading {\n  margin-bottom: 0; }\n\n.asb_content {\n  margin-top: 0;\n  color: #666; }\n\n.center {\n  text-align: center; }\n\n@media screen and (max-width: 505px) {\n  .chase_logo {\n    width: 125px; }\n  .big_name {\n    font-size: 30px; }\n  .subheader {\n    font-size: 25px; }\n    .subheader.smaller {\n      font-size: 20px; } }\n\n.nav_link {\n  font-weight: bold;\n  text-decoration: none;\n  font-weight: 300;\n  padding: 5px 15px;\n  cursor: pointer; }\n  .scrolled .nav_link {\n    color: white; }\n    .scrolled .nav_link:before {\n      background: white; }\n  .nav_link.active:before {\n    background: white;\n    left: 0;\n    right: 0; }\n\nnav {\n  text-align: center;\n  width: 100%;\n  padding: 30px 15px;\n  transition: 0.15s ease-out; }\n  .scrolled nav {\n    padding: 15px; }\n\n.row {\n  padding: 40px; }\n\n.title {\n  color: #fff;\n  text-decoration: none; }\n\n.header {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n  transition: 0.15s ease-out; }\n\n.scrolled .header {\n  background: black; }\n\n@media screen and (max-width: 1024px) {\n  .row {\n    padding: 0 16px; } }\n\nfooter {\n  background: white;\n  padding: 15px;\n  text-align: center;\n  color: #231f20;\n  font-weight: 900;\n  padding-top: 60px;\n  padding-bottom: 120px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n  footer .subheading, footer .subheading, footer .subheading span {\n    font-size: 20px;\n    font-family: 'Goudy';\n    font-style: italic; }\n  footer .highlight {\n    color: white; }\n  footer .heading {\n    color: white;\n    font-size: 70px;\n    line-height: 1.5;\n    margin: 0;\n    text-transform: capitalize; }\n  footer .copy_button {\n    cursor: pointer;\n    position: relative;\n    margin: 0; }\n    footer .copy_button span {\n      font-size: 30px; }\n    footer .copy_button .copy_status {\n      opacity: 0;\n      display: inline-block;\n      position: absolute;\n      top: 50%;\n      transition: 0.25s ease-out;\n      background: white;\n      padding: 0 15px;\n      color: black;\n      bottom: 20px;\n      height: 16px;\n      font-size: 14px;\n      transform: translateY(-50%); }\n      footer .copy_button .copy_status.copied {\n        opacity: 1;\n        transform: translateX(30px) translateY(-50%); }\n    footer .copy_button:hover .copy_status {\n      opacity: 1;\n      transform: translateX(30px) translateY(-50%); }\n  footer .social .social_icon {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 25px;\n    font-size: 50px;\n    color: #afafaf;\n    transition: 0.15s ease-out;\n    position: relative;\n    width: 50px;\n    height: 50px; }\n    footer .social .social_icon:before {\n      background: transparent;\n      left: 0;\n      top: 0;\n      bottom: unset;\n      right: unset; }\n    footer .social .social_icon:hover {\n      color: #84bd00;\n      text-decoration: none; }\n\n.signature {\n  width: 250px;\n  margin: auto;\n  display: table; }\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.85a86ffa.js.map