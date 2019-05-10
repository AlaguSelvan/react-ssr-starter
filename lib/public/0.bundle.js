(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Paper/Paper.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/@material-ui/core/node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0, _extends2.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    }
  }, elevations);
};

exports.styles = styles;

function Paper(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      square = props.square,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "elevation"]);
   true ? (0, _warning.default)(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented.")) : undefined;
  var className = (0, _classnames.default)(classes.root, classes["elevation".concat(elevation)], (0, _defineProperty2.default)({}, classes.rounded, !square), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

 true ? Paper.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: _propTypes.default.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: _propTypes.default.bool
} : undefined;
Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPaper'
})(Paper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Paper/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Paper.default;
  }
});

var _Paper = _interopRequireDefault(__webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/Paper/Paper.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/Typography/Typography.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      margin: 0
    },

    /* Styles applied to the root element if `variant="display4"`. */
    display4: theme.typography.display4,

    /* Styles applied to the root element if `variant="display3"`. */
    display3: theme.typography.display3,

    /* Styles applied to the root element if `variant="display2"`. */
    display2: theme.typography.display2,

    /* Styles applied to the root element if `variant="display1"`. */
    display1: theme.typography.display1,

    /* Styles applied to the root element if `variant="headline"`. */
    headline: theme.typography.headline,

    /* Styles applied to the root element if `variant="title"`. */
    title: theme.typography.title,

    /* Styles applied to the root element if `variant="subheading"`. */
    subheading: theme.typography.subheading,

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `align="nowrap"`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `inline={true}`. */
    inline: {
      display: 'inline'
    }
  };
};

exports.styles = styles;
var nextVariants = {
  display4: 'h1',
  display3: 'h2',
  display2: 'h3',
  display1: 'h4',
  headline: 'h5',
  title: 'h6',
  subheading: 'subtitle1'
};

function getVariant(theme, variantProp) {
  var typography = theme.typography;
  var variant = variantProp;

  if (!variant) {
    variant = typography.useNextVariants ? 'body2' : 'body1';
  } // complete v2 switch


  if (typography.useNextVariants) {
    variant = nextVariants[variant] || variant;
  }

  return variant;
}

var defaultHeadlineMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  // deprecated
  display4: 'h1',
  display3: 'h1',
  display2: 'h1',
  display1: 'h1',
  headline: 'h1',
  title: 'h2',
  subheading: 'h3'
};

function Typography(props) {
  var _classNames;

  var align = props.align,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      componentProp = props.component,
      gutterBottom = props.gutterBottom,
      headlineMapping = props.headlineMapping,
      inline = props.inline,
      internalDeprecatedVariant = props.internalDeprecatedVariant,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      theme = props.theme,
      variantProp = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "color", "component", "gutterBottom", "headlineMapping", "inline", "internalDeprecatedVariant", "noWrap", "paragraph", "theme", "variant"]);
  var variant = getVariant(theme, variantProp);
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes[variant], variant !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty2.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty2.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty2.default)(_classNames, classes["align".concat((0, _helpers.capitalize)(align))], align !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes.inline, inline), _classNames), classNameProp);
  var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant] || defaultHeadlineMapping[variant]) || 'span';
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

 true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes.default.bool,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   * The default mapping is the following:
   */
  headlineMapping: _propTypes.default.object,

  /**
   *  Controls whether the Typography is inline or not.
   */
  inline: _propTypes.default.bool,

  /**
   * A deprecated variant is used from an internal component. Users don't need
   * a deprecation warning here if they switched to the v2 theme. They already
   * get the mapping that will be applied in the next major release.
   *
   * @internal
   */
  internalDeprecatedVariant: _propTypes.default.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes.default.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes.default.bool,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Applies the theme typography styles.
   * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
   */
  variant: (0, _utils.chainPropTypes)(_propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit', // deprecated
  'display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading']), function (props) {
    var deprecatedVariants = ['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'];

    if (props.theme.typography.useNextVariants && !props.internalDeprecatedVariant && deprecatedVariants.indexOf(props.variant) !== -1) {
      return new Error('Material-UI: you are using a deprecated typography variant: ' + "`".concat(props.variant, "` that will be removed in the next major release.\n") + 'Please read the migration guide under https://material-ui.com/style/typography#migration-to-typography-v2.');
    }

    return null;
  })
} : undefined;
Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: defaultHeadlineMapping,
  inline: false,
  noWrap: false,
  paragraph: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTypography',
  withTheme: true
})(Typography);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/Typography/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Typography.default;
  }
});

var _Typography = _interopRequireDefault(__webpack_require__(/*! ./Typography */ "./node_modules/@material-ui/core/Typography/Typography.js"));

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(/*! ./lib/keys.js */ "./node_modules/deep-equal/lib/keys.js");
var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ "./node_modules/deep-equal/lib/is_arguments.js");

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/deep-equal/lib/keys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "./node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(/*! exenv */ "./node_modules/exenv/index.js"));
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5zdHlsZXMgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpO1xuXG52YXIgX3dpdGhTdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdHlsZXMvd2l0aFN0eWxlc1wiKSk7XG5cbnZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGVsZXZhdGlvbnMgPSB7fTtcbiAgdGhlbWUuc2hhZG93cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkb3csIGluZGV4KSB7XG4gICAgZWxldmF0aW9uc1tcImVsZXZhdGlvblwiLmNvbmNhdChpbmRleCldID0ge1xuICAgICAgYm94U2hhZG93OiBzaGFkb3dcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3F1YXJlPXtmYWxzZX1gLiAqL1xuICAgIHJvdW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzXG4gICAgfVxuICB9LCBlbGV2YXRpb25zKTtcbn07XG5cbmV4cG9ydHMuc3R5bGVzID0gc3R5bGVzO1xuXG5mdW5jdGlvbiBQYXBlcihwcm9wcykge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVQcm9wID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgc3F1YXJlID0gcHJvcHMuc3F1YXJlLFxuICAgICAgZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcInNxdWFyZVwiLCBcImVsZXZhdGlvblwiXSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZy5kZWZhdWx0KShlbGV2YXRpb24gPj0gMCAmJiBlbGV2YXRpb24gPCAyNSwgXCJNYXRlcmlhbC1VSTogdGhpcyBlbGV2YXRpb24gYFwiLmNvbmNhdChlbGV2YXRpb24sIFwiYCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpKSA6IHZvaWQgMDtcbiAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0sICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBjbGFzc2VzLnJvdW5kZWQsICFzcXVhcmUpLCBjbGFzc05hbWVQcm9wKTtcbiAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9LCBvdGhlcikpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQYXBlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IF91dGlscy5jb21wb25lbnRQcm9wVHlwZSxcblxuICAvKipcbiAgICogU2hhZG93IGRlcHRoLCBjb3JyZXNwb25kcyB0byBgZHBgIGluIHRoZSBzcGVjLlxuICAgKiBJdCdzIGFjY2VwdGluZyB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAyNCBpbmNsdXNpdmUuXG4gICAqL1xuICBlbGV2YXRpb246IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcm91bmRlZCBjb3JuZXJzIGFyZSBkaXNhYmxlZC5cbiAgICovXG4gIHNxdWFyZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2xcbn0gOiB2b2lkIDA7XG5QYXBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGVsZXZhdGlvbjogMixcbiAgc3F1YXJlOiBmYWxzZVxufTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF93aXRoU3R5bGVzLmRlZmF1bHQpKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFwZXInXG59KShQYXBlcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1BhcGVyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1BhcGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QYXBlclwiKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5zdHlsZXMgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7XG5cbnZhciBfd2l0aFN0eWxlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3N0eWxlcy93aXRoU3R5bGVzXCIpKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XG5cbnZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImRpc3BsYXk0XCJgLiAqL1xuICAgIGRpc3BsYXk0OiB0aGVtZS50eXBvZ3JhcGh5LmRpc3BsYXk0LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImRpc3BsYXkzXCJgLiAqL1xuICAgIGRpc3BsYXkzOiB0aGVtZS50eXBvZ3JhcGh5LmRpc3BsYXkzLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImRpc3BsYXkyXCJgLiAqL1xuICAgIGRpc3BsYXkyOiB0aGVtZS50eXBvZ3JhcGh5LmRpc3BsYXkyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImRpc3BsYXkxXCJgLiAqL1xuICAgIGRpc3BsYXkxOiB0aGVtZS50eXBvZ3JhcGh5LmRpc3BsYXkxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImhlYWRsaW5lXCJgLiAqL1xuICAgIGhlYWRsaW5lOiB0aGVtZS50eXBvZ3JhcGh5LmhlYWRsaW5lLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInRpdGxlXCJgLiAqL1xuICAgIHRpdGxlOiB0aGVtZS50eXBvZ3JhcGh5LnRpdGxlLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YmhlYWRpbmdcImAuICovXG4gICAgc3ViaGVhZGluZzogdGhlbWUudHlwb2dyYXBoeS5zdWJoZWFkaW5nLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkyXCJgLiAqL1xuICAgIGJvZHkyOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHkxXCJgLiAqL1xuICAgIGJvZHkxOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNhcHRpb25cImAuICovXG4gICAgY2FwdGlvbjogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJ1dHRvblwiYC4gKi9cbiAgICBidXR0b246IHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgxXCJgLiAqL1xuICAgIGgxOiB0aGVtZS50eXBvZ3JhcGh5LmgxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgyXCJgLiAqL1xuICAgIGgyOiB0aGVtZS50eXBvZ3JhcGh5LmgyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImgzXCJgLiAqL1xuICAgIGgzOiB0aGVtZS50eXBvZ3JhcGh5LmgzLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg0XCJgLiAqL1xuICAgIGg0OiB0aGVtZS50eXBvZ3JhcGh5Lmg0LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg1XCJgLiAqL1xuICAgIGg1OiB0aGVtZS50eXBvZ3JhcGh5Lmg1LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImg2XCJgLiAqL1xuICAgIGg2OiB0aGVtZS50eXBvZ3JhcGh5Lmg2LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMVwiYC4gKi9cbiAgICBzdWJ0aXRsZTE6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUxLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN1YnRpdGxlMlwiYC4gKi9cbiAgICBzdWJ0aXRsZTI6IHRoZW1lLnR5cG9ncmFwaHkuc3VidGl0bGUyLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm92ZXJsaW5lXCJgLiAqL1xuICAgIG92ZXJsaW5lOiB0aGVtZS50eXBvZ3JhcGh5Lm92ZXJsaW5lLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInNyT25seVwiYC4gT25seSBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzLiAqL1xuICAgIHNyT25seToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImxlZnRcImAuICovXG4gICAgYWxpZ25MZWZ0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImNlbnRlclwiYC4gKi9cbiAgICBhbGlnbkNlbnRlcjoge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImp1c3RpZnlcImAuICovXG4gICAgYWxpZ25KdXN0aWZ5OiB7XG4gICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cIm5vd3JhcFwiYC4gKi9cbiAgICBub1dyYXA6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGd1dHRlckJvdHRvbT17dHJ1ZX1gLiAqL1xuICAgIGd1dHRlckJvdHRvbToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMC4zNWVtJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwYXJhZ3JhcGg9e3RydWV9YC4gKi9cbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTZcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIGNvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFByaW1hcnlcImAuICovXG4gICAgY29sb3JUZXh0UHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwidGV4dFNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclRleHRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbmxpbmU9e3RydWV9YC4gKi9cbiAgICBpbmxpbmU6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5zdHlsZXMgPSBzdHlsZXM7XG52YXIgbmV4dFZhcmlhbnRzID0ge1xuICBkaXNwbGF5NDogJ2gxJyxcbiAgZGlzcGxheTM6ICdoMicsXG4gIGRpc3BsYXkyOiAnaDMnLFxuICBkaXNwbGF5MTogJ2g0JyxcbiAgaGVhZGxpbmU6ICdoNScsXG4gIHRpdGxlOiAnaDYnLFxuICBzdWJoZWFkaW5nOiAnc3VidGl0bGUxJ1xufTtcblxuZnVuY3Rpb24gZ2V0VmFyaWFudCh0aGVtZSwgdmFyaWFudFByb3ApIHtcbiAgdmFyIHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5O1xuICB2YXIgdmFyaWFudCA9IHZhcmlhbnRQcm9wO1xuXG4gIGlmICghdmFyaWFudCkge1xuICAgIHZhcmlhbnQgPSB0eXBvZ3JhcGh5LnVzZU5leHRWYXJpYW50cyA/ICdib2R5MicgOiAnYm9keTEnO1xuICB9IC8vIGNvbXBsZXRlIHYyIHN3aXRjaFxuXG5cbiAgaWYgKHR5cG9ncmFwaHkudXNlTmV4dFZhcmlhbnRzKSB7XG4gICAgdmFyaWFudCA9IG5leHRWYXJpYW50c1t2YXJpYW50XSB8fCB2YXJpYW50O1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhbnQ7XG59XG5cbnZhciBkZWZhdWx0SGVhZGxpbmVNYXBwaW5nID0ge1xuICBoMTogJ2gxJyxcbiAgaDI6ICdoMicsXG4gIGgzOiAnaDMnLFxuICBoNDogJ2g0JyxcbiAgaDU6ICdoNScsXG4gIGg2OiAnaDYnLFxuICBzdWJ0aXRsZTE6ICdoNicsXG4gIHN1YnRpdGxlMjogJ2g2JyxcbiAgYm9keTE6ICdwJyxcbiAgYm9keTI6ICdwJyxcbiAgLy8gZGVwcmVjYXRlZFxuICBkaXNwbGF5NDogJ2gxJyxcbiAgZGlzcGxheTM6ICdoMScsXG4gIGRpc3BsYXkyOiAnaDEnLFxuICBkaXNwbGF5MTogJ2gxJyxcbiAgaGVhZGxpbmU6ICdoMScsXG4gIHRpdGxlOiAnaDInLFxuICBzdWJoZWFkaW5nOiAnaDMnXG59O1xuXG5mdW5jdGlvbiBUeXBvZ3JhcGh5KHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb21wb25lbnRQcm9wID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgZ3V0dGVyQm90dG9tID0gcHJvcHMuZ3V0dGVyQm90dG9tLFxuICAgICAgaGVhZGxpbmVNYXBwaW5nID0gcHJvcHMuaGVhZGxpbmVNYXBwaW5nLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgaW50ZXJuYWxEZXByZWNhdGVkVmFyaWFudCA9IHByb3BzLmludGVybmFsRGVwcmVjYXRlZFZhcmlhbnQsXG4gICAgICBub1dyYXAgPSBwcm9wcy5ub1dyYXAsXG4gICAgICBwYXJhZ3JhcGggPSBwcm9wcy5wYXJhZ3JhcGgsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgdmFyaWFudFByb3AgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShwcm9wcywgW1wiYWxpZ25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJndXR0ZXJCb3R0b21cIiwgXCJoZWFkbGluZU1hcHBpbmdcIiwgXCJpbmxpbmVcIiwgXCJpbnRlcm5hbERlcHJlY2F0ZWRWYXJpYW50XCIsIFwibm9XcmFwXCIsIFwicGFyYWdyYXBoXCIsIFwidGhlbWVcIiwgXCJ2YXJpYW50XCJdKTtcbiAgdmFyIHZhcmlhbnQgPSBnZXRWYXJpYW50KHRoZW1lLCB2YXJpYW50UHJvcCk7XG4gIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3Nlcy5yb290LCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIGNsYXNzZXNbdmFyaWFudF0sIHZhcmlhbnQgIT09ICdpbmhlcml0JyksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoKDAsIF9oZWxwZXJzLmNhcGl0YWxpemUpKGNvbG9yKSldLCBjb2xvciAhPT0gJ2RlZmF1bHQnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIGNsYXNzZXMubm9XcmFwLCBub1dyYXApLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgY2xhc3Nlcy5ndXR0ZXJCb3R0b20sIGd1dHRlckJvdHRvbSksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBjbGFzc2VzLnBhcmFncmFwaCwgcGFyYWdyYXBoKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdCgoMCwgX2hlbHBlcnMuY2FwaXRhbGl6ZSkoYWxpZ24pKV0sIGFsaWduICE9PSAnaW5oZXJpdCcpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgY2xhc3Nlcy5pbmxpbmUsIGlubGluZSksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lUHJvcCk7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRQcm9wIHx8IChwYXJhZ3JhcGggPyAncCcgOiBoZWFkbGluZU1hcHBpbmdbdmFyaWFudF0gfHwgZGVmYXVsdEhlYWRsaW5lTWFwcGluZ1t2YXJpYW50XSkgfHwgJ3NwYW4nO1xuICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIG90aGVyKSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFR5cG9ncmFwaHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB0ZXh0LWFsaWduIG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhbGlnbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsnaW5oZXJpdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbJ2RlZmF1bHQnLCAnZXJyb3InLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXh0UHJpbWFyeScsICd0ZXh0U2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBET00gZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICogQnkgZGVmYXVsdCwgaXQgbWFwcyB0aGUgdmFyaWFudCB0byBhIGdvb2QgZGVmYXVsdCBoZWFkbGluZSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IF91dGlscy5jb21wb25lbnRQcm9wVHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIGhhdmUgYSBib3R0b20gbWFyZ2luLlxuICAgKi9cbiAgZ3V0dGVyQm90dG9tOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogV2UgYXJlIGVtcGlyaWNhbGx5IG1hcHBpbmcgdGhlIHZhcmlhbnQgcHJvcGVydHkgdG8gYSByYW5nZSBvZiBkaWZmZXJlbnQgRE9NIGVsZW1lbnQgdHlwZXMuXG4gICAqIEZvciBpbnN0YW5jZSwgc3VidGl0bGUxIHRvIGA8aDY+YC5cbiAgICogSWYgeW91IHdpc2ggdG8gY2hhbmdlIHRoYXQgbWFwcGluZywgeW91IGNhbiBwcm92aWRlIHlvdXIgb3duLlxuICAgKiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgYGNvbXBvbmVudGAgcHJvcGVydHkuXG4gICAqIFRoZSBkZWZhdWx0IG1hcHBpbmcgaXMgdGhlIGZvbGxvd2luZzpcbiAgICovXG4gIGhlYWRsaW5lTWFwcGluZzogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcblxuICAvKipcbiAgICogIENvbnRyb2xzIHdoZXRoZXIgdGhlIFR5cG9ncmFwaHkgaXMgaW5saW5lIG9yIG5vdC5cbiAgICovXG4gIGlubGluZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgZGVwcmVjYXRlZCB2YXJpYW50IGlzIHVzZWQgZnJvbSBhbiBpbnRlcm5hbCBjb21wb25lbnQuIFVzZXJzIGRvbid0IG5lZWRcbiAgICogYSBkZXByZWNhdGlvbiB3YXJuaW5nIGhlcmUgaWYgdGhleSBzd2l0Y2hlZCB0byB0aGUgdjIgdGhlbWUuIFRoZXkgYWxyZWFkeVxuICAgKiBnZXQgdGhlIG1hcHBpbmcgdGhhdCB3aWxsIGJlIGFwcGxpZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBpbnRlcm5hbERlcHJlY2F0ZWRWYXJpYW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIG5vdCB3cmFwLCBidXQgaW5zdGVhZCB3aWxsIHRydW5jYXRlIHdpdGggYW4gZWxsaXBzaXMuXG4gICAqL1xuICBub1dyYXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBwYXJhZ3JhcGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0aGVtZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSB0aGVtZSB0eXBvZ3JhcGh5IHN0eWxlcy5cbiAgICogVXNlIGBib2R5MWAgYXMgdGhlIGRlZmF1bHQgdmFsdWUgd2l0aCB0aGUgbGVnYWN5IGltcGxlbWVudGF0aW9uIGFuZCBgYm9keTJgIHdpdGggdGhlIG5ldyBvbmUuXG4gICAqL1xuICB2YXJpYW50OiAoMCwgX3V0aWxzLmNoYWluUHJvcFR5cGVzKShfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJywgJ3NyT25seScsICdpbmhlcml0JywgLy8gZGVwcmVjYXRlZFxuICAnZGlzcGxheTQnLCAnZGlzcGxheTMnLCAnZGlzcGxheTInLCAnZGlzcGxheTEnLCAnaGVhZGxpbmUnLCAndGl0bGUnLCAnc3ViaGVhZGluZyddKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGRlcHJlY2F0ZWRWYXJpYW50cyA9IFsnZGlzcGxheTQnLCAnZGlzcGxheTMnLCAnZGlzcGxheTInLCAnZGlzcGxheTEnLCAnaGVhZGxpbmUnLCAndGl0bGUnLCAnc3ViaGVhZGluZyddO1xuXG4gICAgaWYgKHByb3BzLnRoZW1lLnR5cG9ncmFwaHkudXNlTmV4dFZhcmlhbnRzICYmICFwcm9wcy5pbnRlcm5hbERlcHJlY2F0ZWRWYXJpYW50ICYmIGRlcHJlY2F0ZWRWYXJpYW50cy5pbmRleE9mKHByb3BzLnZhcmlhbnQpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IHlvdSBhcmUgdXNpbmcgYSBkZXByZWNhdGVkIHR5cG9ncmFwaHkgdmFyaWFudDogJyArIFwiYFwiLmNvbmNhdChwcm9wcy52YXJpYW50LCBcImAgdGhhdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cXG5cIikgKyAnUGxlYXNlIHJlYWQgdGhlIG1pZ3JhdGlvbiBndWlkZSB1bmRlciBodHRwczovL21hdGVyaWFsLXVpLmNvbS9zdHlsZS90eXBvZ3JhcGh5I21pZ3JhdGlvbi10by10eXBvZ3JhcGh5LXYyLicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KVxufSA6IHZvaWQgMDtcblR5cG9ncmFwaHkuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJ2luaGVyaXQnLFxuICBjb2xvcjogJ2RlZmF1bHQnLFxuICBndXR0ZXJCb3R0b206IGZhbHNlLFxuICBoZWFkbGluZU1hcHBpbmc6IGRlZmF1bHRIZWFkbGluZU1hcHBpbmcsXG4gIGlubGluZTogZmFsc2UsXG4gIG5vV3JhcDogZmFsc2UsXG4gIHBhcmFncmFwaDogZmFsc2Vcbn07XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfd2l0aFN0eWxlcy5kZWZhdWx0KShzdHlsZXMsIHtcbiAgbmFtZTogJ011aVR5cG9ncmFwaHknLFxuICB3aXRoVGhlbWU6IHRydWVcbn0pKFR5cG9ncmFwaHkpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9UeXBvZ3JhcGh5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1R5cG9ncmFwaHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1R5cG9ncmFwaHlcIikpOyIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCJleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5IZWxtZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0U2lkZUVmZmVjdCA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxudmFyIF9yZWFjdFNpZGVFZmZlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTaWRlRWZmZWN0KTtcblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKFwiZGVlcC1lcXVhbFwiKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9IZWxtZXRVdGlscyA9IHJlcXVpcmUoXCIuL0hlbG1ldFV0aWxzLmpzXCIpO1xuXG52YXIgX0hlbG1ldENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL0hlbG1ldENvbnN0YW50cy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBIZWxtZXQgPSBmdW5jdGlvbiBIZWxtZXQoQ29tcG9uZW50KSB7XG4gICAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoSGVsbWV0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gSGVsbWV0V3JhcHBlcigpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWxtZXRXcmFwcGVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gISgwLCBfZGVlcEVxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyhjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmICghbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0OiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI8XCIgKyBjaGlsZC50eXBlICsgXCIgLz4gZWxlbWVudHMgYXJlIHNlbGYtY2xvc2luZyBhbmQgY2FuIG5vdCBjb250YWluIGNoaWxkcmVuLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5mbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4gPSBmdW5jdGlvbiBmbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4oX3JlZikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICAgICAgdmFyIGNoaWxkID0gX3JlZi5jaGlsZCxcbiAgICAgICAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbiA9IF9yZWYuYXJyYXlUeXBlQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IF9yZWYubmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbiA9IF9yZWYubmVzdGVkQ2hpbGRyZW47XG5cbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJyYXlUeXBlQ2hpbGRyZW4sIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2NoaWxkLnR5cGVdID0gW10uY29uY2F0KGFycmF5VHlwZUNoaWxkcmVuW2NoaWxkLnR5cGVdIHx8IFtdLCBbX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMsIHRoaXMubWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikpXSksIF9leHRlbmRzMikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcE9iamVjdFR5cGVDaGlsZHJlbiA9IGZ1bmN0aW9uIG1hcE9iamVjdFR5cGVDaGlsZHJlbihfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMywgX2V4dGVuZHM0O1xuXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfcmVmMi5jaGlsZCxcbiAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IF9yZWYyLm5ld1Byb3BzLFxuICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMgPSBfcmVmMi5uZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX3JlZjIubmVzdGVkQ2hpbGRyZW47XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2NoaWxkLnR5cGVdID0gbmVzdGVkQ2hpbGRyZW4sIF9leHRlbmRzMy50aXRsZUF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcyksIF9leHRlbmRzMykpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CT0RZOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QXR0cmlidXRlczogX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5IVE1MOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sQXR0cmlidXRlczogX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCAoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFtjaGlsZC50eXBlXSA9IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKSwgX2V4dGVuZHM0KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzID0gZnVuY3Rpb24gbWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzKGFycmF5VHlwZUNoaWxkcmVuLCBuZXdQcm9wcykge1xuICAgICAgICAgICAgdmFyIG5ld0ZsYXR0ZW5lZFByb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJyYXlUeXBlQ2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGFycmF5Q2hpbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9leHRlbmRzNTtcblxuICAgICAgICAgICAgICAgIG5ld0ZsYXR0ZW5lZFByb3BzID0gX2V4dGVuZHMoe30sIG5ld0ZsYXR0ZW5lZFByb3BzLCAoX2V4dGVuZHM1ID0ge30sIF9leHRlbmRzNVthcnJheUNoaWxkTmFtZV0gPSBhcnJheVR5cGVDaGlsZHJlblthcnJheUNoaWxkTmFtZV0sIF9leHRlbmRzNSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdGbGF0dGVuZWRQcm9wcztcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS53YXJuT25JbnZhbGlkQ2hpbGRyZW4gPSBmdW5jdGlvbiB3YXJuT25JbnZhbGlkQ2hpbGRyZW4oY2hpbGQsIG5lc3RlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfSGVsbWV0Q29uc3RhbnRzLlZBTElEX1RBR19OQU1FUy5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC50eXBlID09PSBuYW1lO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9IZWxtZXRVdGlscy53YXJuKShcIllvdSBtYXkgYmUgYXR0ZW1wdGluZyB0byBuZXN0IDxIZWxtZXQ+IGNvbXBvbmVudHMgd2l0aGluIGVhY2ggb3RoZXIsIHdoaWNoIGlzIG5vdCBhbGxvd2VkLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX0hlbG1ldFV0aWxzLndhcm4pKFwiT25seSBlbGVtZW50cyB0eXBlcyBcIiArIF9IZWxtZXRDb25zdGFudHMuVkFMSURfVEFHX05BTUVTLmpvaW4oXCIsIFwiKSArIFwiIGFyZSBhbGxvd2VkLiBIZWxtZXQgZG9lcyBub3Qgc3VwcG9ydCByZW5kZXJpbmcgPFwiICsgY2hpbGQudHlwZSArIFwiPiBlbGVtZW50cy4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5lc3RlZENoaWxkcmVuICYmIHR5cGVvZiBuZXN0ZWRDaGlsZHJlbiAhPT0gXCJzdHJpbmdcIiAmJiAoIUFycmF5LmlzQXJyYXkobmVzdGVkQ2hpbGRyZW4pIHx8IG5lc3RlZENoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKG5lc3RlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmVzdGVkQ2hpbGQgIT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgfSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhlbG1ldCBleHBlY3RzIGEgc3RyaW5nIGFzIGEgY2hpbGQgb2YgPFwiICsgY2hpbGQudHlwZSArIFwiPi4gRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIGNoaWxkcmVuIGluIGJyYWNlcz8gKCA8XCIgKyBjaGlsZC50eXBlICsgXCI+e2BgfTwvXCIgKyBjaGlsZC50eXBlICsgXCI+ICkgUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBDaGlsZHJlblRvUHJvcHMgPSBmdW5jdGlvbiBtYXBDaGlsZHJlblRvUHJvcHMoY2hpbGRyZW4sIG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGFycmF5VHlwZUNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5wcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbiA9IF9jaGlsZCRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2hpbGQkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0gKDAsIF9IZWxtZXRVdGlscy5jb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMpKGNoaWxkUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMyLndhcm5PbkludmFsaWRDaGlsZHJlbihjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuID0gX3RoaXMyLmZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuOiBhcnJheVR5cGVDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzOiBuZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMgPSBfdGhpczIubWFwT2JqZWN0VHlwZUNoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHM6IG5ld1Byb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHM6IG5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW46IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdQcm9wcyA9IHRoaXMubWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzKGFycmF5VHlwZUNoaWxkcmVuLCBuZXdQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvcHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgICAgICAgIHZhciBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzID0gdGhpcy5tYXBDaGlsZHJlblRvUHJvcHMoY2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgbmV3UHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhIZWxtZXRXcmFwcGVyLCBudWxsLCBbe1xuICAgICAgICAgICAga2V5OiBcImNhblVzZURPTVwiLFxuXG5cbiAgICAgICAgICAgIC8vIENvbXBvbmVudC5wZWVrIGNvbWVzIGZyb20gcmVhY3Qtc2lkZS1lZmZlY3Q6XG4gICAgICAgICAgICAvLyBGb3IgdGVzdGluZywgeW91IG1heSB1c2UgYSBzdGF0aWMgcGVlaygpIG1ldGhvZCBhdmFpbGFibGUgb24gdGhlIHJldHVybmVkIGNvbXBvbmVudC5cbiAgICAgICAgICAgIC8vIEl0IGxldHMgeW91IGdldCB0aGUgY3VycmVudCBzdGF0ZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgbW91bnRlZCBpbnN0YW5jZSBzdGFjay5cbiAgICAgICAgICAgIC8vIERvbuKAmXQgdXNlIGl0IGZvciBhbnl0aGluZyBvdGhlciB0aGFuIHRlc3RpbmcuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gYmFzZToge1widGFyZ2V0XCI6IFwiX2JsYW5rXCIsIFwiaHJlZlwiOiBcImh0dHA6Ly9teXNpdGUuY29tL1wifVxuICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gYm9keUF0dHJpYnV0ZXM6IHtcImNsYXNzTmFtZVwiOiBcInJvb3RcIn1cbiAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUaXRsZTogXCJEZWZhdWx0IFRpdGxlXCJcbiAgICAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBkZWZlcjogdHJ1ZVxuICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlXG4gICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBodG1sQXR0cmlidXRlczoge1wibGFuZ1wiOiBcImVuXCIsIFwiYW1wXCI6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbGluazogW3tcInJlbFwiOiBcImNhbm9uaWNhbFwiLCBcImhyZWZcIjogXCJodHRwOi8vbXlzaXRlLmNvbS9leGFtcGxlXCJ9XVxuICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtZXRhOiBbe1wibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsIFwiY29udGVudFwiOiBcIlRlc3QgZGVzY3JpcHRpb25cIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5vc2NyaXB0OiBbe1wiaW5uZXJIVE1MXCI6IFwiPGltZyBzcmM9J2h0dHA6Ly9teXNpdGUuY29tL2pzL3Rlc3QuanMnXCJ9XVxuICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNoYW5nZUNsaWVudFN0YXRlOiBcIihuZXdTdGF0ZSkgPT4gY29uc29sZS5sb2cobmV3U3RhdGUpXCJcbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gc2NyaXB0OiBbe1widHlwZVwiOiBcInRleHQvamF2YXNjcmlwdFwiLCBcInNyY1wiOiBcImh0dHA6Ly9teXNpdGUuY29tL2pzL3Rlc3QuanNcIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHN0eWxlOiBbe1widHlwZVwiOiBcInRleHQvY3NzXCIsIFwiY3NzVGV4dFwiOiBcImRpdiB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogYmx1ZTsgfVwifV1cbiAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlOiBcIlRpdGxlXCJcbiAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHRpdGxlQXR0cmlidXRlczoge1wiaXRlbXByb3BcIjogXCJuYW1lXCJ9XG4gICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZVRlbXBsYXRlOiBcIk15U2l0ZS5jb20gLSAlc1wiXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoY2FuVXNlRE9NKSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LmNhblVzZURPTSA9IGNhblVzZURPTTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBIZWxtZXRXcmFwcGVyO1xuICAgIH0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCksIF9jbGFzcy5wcm9wVHlwZXMgPSB7XG4gICAgICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICBib2R5QXR0cmlidXRlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSksIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuICAgICAgICBkZWZhdWx0VGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICBkZWZlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBodG1sQXR0cmlidXRlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGxpbms6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIG1ldGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIG5vc2NyaXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBvbkNoYW5nZUNsaWVudFN0YXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIHNjcmlwdDogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIHRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgdGl0bGVUZW1wbGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgICB9LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkZWZlcjogdHJ1ZSxcbiAgICAgICAgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWVcbiAgICB9LCBfY2xhc3MucGVlayA9IENvbXBvbmVudC5wZWVrLCBfY2xhc3MucmV3aW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWFwcGVkU3RhdGUgPSBDb21wb25lbnQucmV3aW5kKCk7XG4gICAgICAgIGlmICghbWFwcGVkU3RhdGUpIHtcbiAgICAgICAgICAgIC8vIHByb3ZpZGUgZmFsbGJhY2sgaWYgbWFwcGVkU3RhdGUgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICBtYXBwZWRTdGF0ZSA9ICgwLCBfSGVsbWV0VXRpbHMubWFwU3RhdGVPblNlcnZlcikoe1xuICAgICAgICAgICAgICAgIGJhc2VUYWc6IFtdLFxuICAgICAgICAgICAgICAgIGJvZHlBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgICAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBodG1sQXR0cmlidXRlczoge30sXG4gICAgICAgICAgICAgICAgbGlua1RhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIG1ldGFUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICBub3NjcmlwdFRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIHNjcmlwdFRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIHN0eWxlVGFnczogW10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwcGVkU3RhdGU7XG4gICAgfSwgX3RlbXA7XG59O1xuXG52YXIgTnVsbENvbXBvbmVudCA9IGZ1bmN0aW9uIE51bGxDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgSGVsbWV0U2lkZUVmZmVjdHMgPSAoMCwgX3JlYWN0U2lkZUVmZmVjdDIuZGVmYXVsdCkoX0hlbG1ldFV0aWxzLnJlZHVjZVByb3BzVG9TdGF0ZSwgX0hlbG1ldFV0aWxzLmhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlLCBfSGVsbWV0VXRpbHMubWFwU3RhdGVPblNlcnZlcikoTnVsbENvbXBvbmVudCk7XG5cbnZhciBIZWxtZXRFeHBvcnQgPSBIZWxtZXQoSGVsbWV0U2lkZUVmZmVjdHMpO1xuSGVsbWV0RXhwb3J0LnJlbmRlclN0YXRpYyA9IEhlbG1ldEV4cG9ydC5yZXdpbmQ7XG5cbmV4cG9ydHMuSGVsbWV0ID0gSGVsbWV0RXhwb3J0O1xuZXhwb3J0cy5kZWZhdWx0ID0gSGVsbWV0RXhwb3J0OyIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQVRUUklCVVRFX05BTUVTID0gZXhwb3J0cy5BVFRSSUJVVEVfTkFNRVMgPSB7XG4gICAgQk9EWTogXCJib2R5QXR0cmlidXRlc1wiLFxuICAgIEhUTUw6IFwiaHRtbEF0dHJpYnV0ZXNcIixcbiAgICBUSVRMRTogXCJ0aXRsZUF0dHJpYnV0ZXNcIlxufTtcblxudmFyIFRBR19OQU1FUyA9IGV4cG9ydHMuVEFHX05BTUVTID0ge1xuICAgIEJBU0U6IFwiYmFzZVwiLFxuICAgIEJPRFk6IFwiYm9keVwiLFxuICAgIEhFQUQ6IFwiaGVhZFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIExJTks6IFwibGlua1wiLFxuICAgIE1FVEE6IFwibWV0YVwiLFxuICAgIE5PU0NSSVBUOiBcIm5vc2NyaXB0XCIsXG4gICAgU0NSSVBUOiBcInNjcmlwdFwiLFxuICAgIFNUWUxFOiBcInN0eWxlXCIsXG4gICAgVElUTEU6IFwidGl0bGVcIlxufTtcblxudmFyIFZBTElEX1RBR19OQU1FUyA9IGV4cG9ydHMuVkFMSURfVEFHX05BTUVTID0gT2JqZWN0LmtleXMoVEFHX05BTUVTKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gVEFHX05BTUVTW25hbWVdO1xufSk7XG5cbnZhciBUQUdfUFJPUEVSVElFUyA9IGV4cG9ydHMuVEFHX1BST1BFUlRJRVMgPSB7XG4gICAgQ0hBUlNFVDogXCJjaGFyc2V0XCIsXG4gICAgQ1NTX1RFWFQ6IFwiY3NzVGV4dFwiLFxuICAgIEhSRUY6IFwiaHJlZlwiLFxuICAgIEhUVFBFUVVJVjogXCJodHRwLWVxdWl2XCIsXG4gICAgSU5ORVJfSFRNTDogXCJpbm5lckhUTUxcIixcbiAgICBJVEVNX1BST1A6IFwiaXRlbXByb3BcIixcbiAgICBOQU1FOiBcIm5hbWVcIixcbiAgICBQUk9QRVJUWTogXCJwcm9wZXJ0eVwiLFxuICAgIFJFTDogXCJyZWxcIixcbiAgICBTUkM6IFwic3JjXCJcbn07XG5cbnZhciBSRUFDVF9UQUdfTUFQID0gZXhwb3J0cy5SRUFDVF9UQUdfTUFQID0ge1xuICAgIGFjY2Vzc2tleTogXCJhY2Nlc3NLZXlcIixcbiAgICBjaGFyc2V0OiBcImNoYXJTZXRcIixcbiAgICBjbGFzczogXCJjbGFzc05hbWVcIixcbiAgICBjb250ZW50ZWRpdGFibGU6IFwiY29udGVudEVkaXRhYmxlXCIsXG4gICAgY29udGV4dG1lbnU6IFwiY29udGV4dE1lbnVcIixcbiAgICBcImh0dHAtZXF1aXZcIjogXCJodHRwRXF1aXZcIixcbiAgICBpdGVtcHJvcDogXCJpdGVtUHJvcFwiLFxuICAgIHRhYmluZGV4OiBcInRhYkluZGV4XCJcbn07XG5cbnZhciBIRUxNRVRfUFJPUFMgPSBleHBvcnRzLkhFTE1FVF9QUk9QUyA9IHtcbiAgICBERUZBVUxUX1RJVExFOiBcImRlZmF1bHRUaXRsZVwiLFxuICAgIERFRkVSOiBcImRlZmVyXCIsXG4gICAgRU5DT0RFX1NQRUNJQUxfQ0hBUkFDVEVSUzogXCJlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyc1wiLFxuICAgIE9OX0NIQU5HRV9DTElFTlRfU1RBVEU6IFwib25DaGFuZ2VDbGllbnRTdGF0ZVwiLFxuICAgIFRJVExFX1RFTVBMQVRFOiBcInRpdGxlVGVtcGxhdGVcIlxufTtcblxudmFyIEhUTUxfVEFHX01BUCA9IGV4cG9ydHMuSFRNTF9UQUdfTUFQID0gT2JqZWN0LmtleXMoUkVBQ1RfVEFHX01BUCkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgIG9ialtSRUFDVF9UQUdfTUFQW2tleV1dID0ga2V5O1xuICAgIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbnZhciBTRUxGX0NMT1NJTkdfVEFHUyA9IGV4cG9ydHMuU0VMRl9DTE9TSU5HX1RBR1MgPSBbVEFHX05BTUVTLk5PU0NSSVBULCBUQUdfTkFNRVMuU0NSSVBULCBUQUdfTkFNRVMuU1RZTEVdO1xuXG52YXIgSEVMTUVUX0FUVFJJQlVURSA9IGV4cG9ydHMuSEVMTUVUX0FUVFJJQlVURSA9IFwiZGF0YS1yZWFjdC1oZWxtZXRcIjsiLCJleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53YXJuID0gZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBleHBvcnRzLnJlZHVjZVByb3BzVG9TdGF0ZSA9IGV4cG9ydHMubWFwU3RhdGVPblNlcnZlciA9IGV4cG9ydHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UgPSBleHBvcnRzLmNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF9IZWxtZXRDb25zdGFudHMgPSByZXF1aXJlKFwiLi9IZWxtZXRDb25zdGFudHMuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyA9IGZ1bmN0aW9uIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKHN0cikge1xuICAgIHZhciBlbmNvZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgICBpZiAoZW5jb2RlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKS5yZXBsYWNlKC8nL2csIFwiJiN4Mjc7XCIpO1xufTtcblxudmFyIGdldFRpdGxlRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldFRpdGxlRnJvbVByb3BzTGlzdChwcm9wc0xpc3QpIHtcbiAgICB2YXIgaW5uZXJtb3N0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFKTtcbiAgICB2YXIgaW5uZXJtb3N0VGVtcGxhdGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLlRJVExFX1RFTVBMQVRFKTtcblxuICAgIGlmIChpbm5lcm1vc3RUZW1wbGF0ZSAmJiBpbm5lcm1vc3RUaXRsZSkge1xuICAgICAgICAvLyB1c2UgZnVuY3Rpb24gYXJnIHRvIGF2b2lkIG5lZWQgdG8gZXNjYXBlICQgY2hhcmFjdGVyc1xuICAgICAgICByZXR1cm4gaW5uZXJtb3N0VGVtcGxhdGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlubmVybW9zdFRpdGxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJtb3N0RGVmYXVsdFRpdGxlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5ERUZBVUxUX1RJVExFKTtcblxuICAgIHJldHVybiBpbm5lcm1vc3RUaXRsZSB8fCBpbm5lcm1vc3REZWZhdWx0VGl0bGUgfHwgdW5kZWZpbmVkO1xufTtcblxudmFyIGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUgPSBmdW5jdGlvbiBnZXRPbkNoYW5nZUNsaWVudFN0YXRlKHByb3BzTGlzdCkge1xuICAgIHJldHVybiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLk9OX0NIQU5HRV9DTElFTlRfU1RBVEUpIHx8IGZ1bmN0aW9uICgpIHt9O1xufTtcblxudmFyIGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QodGFnVHlwZSwgcHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvcHNbdGFnVHlwZV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHNbdGFnVHlwZV07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uICh0YWdBdHRycywgY3VycmVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRhZ0F0dHJzLCBjdXJyZW50KTtcbiAgICB9LCB7fSk7XG59O1xuXG52YXIgZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdChwcmltYXJ5QXR0cmlidXRlcywgcHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvcHNbX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHNbX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRV07XG4gICAgfSkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoaW5uZXJtb3N0QmFzZVRhZywgdGFnKSB7XG4gICAgICAgIGlmICghaW5uZXJtb3N0QmFzZVRhZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSA9IGF0dHJpYnV0ZUtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YobG93ZXJDYXNlQXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgdGFnW2xvd2VyQ2FzZUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVybW9zdEJhc2VUYWcuY29uY2F0KHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubmVybW9zdEJhc2VUYWc7XG4gICAgfSwgW10pO1xufTtcblxudmFyIGdldFRhZ3NGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0VGFnc0Zyb21Qcm9wc0xpc3QodGFnTmFtZSwgcHJpbWFyeUF0dHJpYnV0ZXMsIHByb3BzTGlzdCkge1xuICAgIC8vIENhbGN1bGF0ZSBsaXN0IG9mIHRhZ3MsIGdpdmluZyBwcmlvcml0eSBpbm5lcm1vc3QgY29tcG9uZW50IChlbmQgb2YgdGhlIHByb3BzbGlzdClcbiAgICB2YXIgYXBwcm92ZWRTZWVuVGFncyA9IHt9O1xuXG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzW3RhZ05hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wc1t0YWdOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgd2FybihcIkhlbG1ldDogXCIgKyB0YWdOYW1lICsgXCIgc2hvdWxkIGJlIG9mIHR5cGUgXFxcIkFycmF5XFxcIi4gSW5zdGVhZCBmb3VuZCB0eXBlIFxcXCJcIiArIF90eXBlb2YocHJvcHNbdGFnTmFtZV0pICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1t0YWdOYW1lXTtcbiAgICB9KS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChhcHByb3ZlZFRhZ3MsIGluc3RhbmNlVGFncykge1xuICAgICAgICB2YXIgaW5zdGFuY2VTZWVuVGFncyA9IHt9O1xuXG4gICAgICAgIGluc3RhbmNlVGFncy5maWx0ZXIoZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgdmFyIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRhZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIHJ1bGUgd2l0aCBsaW5rIHRhZ3MsIHNpbmNlIHJlbCBhbmQgaHJlZiBhcmUgYm90aCBwcmltYXJ5IHRhZ3MsIHJlbCB0YWtlcyBwcmlvcml0eVxuICAgICAgICAgICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSkgIT09IC0xICYmICEocHJpbWFyeUF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5SRUwgJiYgdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwiY2Fub25pY2FsXCIpICYmICEobG93ZXJDYXNlQXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlJFTCAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpID09PSBcInN0eWxlc2hlZXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IGxvd2VyQ2FzZUF0dHJpYnV0ZUtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBpbm5lckhUTUwgd2hpY2ggZG9lc24ndCB3b3JrIGxvd2VyY2FzZWRcbiAgICAgICAgICAgICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiAoYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwgfHwgYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUIHx8IGF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JVEVNX1BST1ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXByaW1hcnlBdHRyaWJ1dGVLZXkgfHwgIXRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICghYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgIGFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0gPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV1bdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHByb3ZlZFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgc2VlbiB0YWdzIHdpdGggdGFncyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhpbnN0YW5jZVNlZW5UYWdzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB0YWdVbmlvbiA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgYXBwcm92ZWRTZWVuVGFnc1thdHRyaWJ1dGVLZXldLCBpbnN0YW5jZVNlZW5UYWdzW2F0dHJpYnV0ZUtleV0pO1xuXG4gICAgICAgICAgICBhcHByb3ZlZFNlZW5UYWdzW2F0dHJpYnV0ZUtleV0gPSB0YWdVbmlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcHByb3ZlZFRhZ3M7XG4gICAgfSwgW10pLnJldmVyc2UoKTtcbn07XG5cbnZhciBnZXRJbm5lcm1vc3RQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgcHJvcGVydHkpIHtcbiAgICBmb3IgKHZhciBpID0gcHJvcHNMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHByb3BzTGlzdFtpXTtcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgcmVkdWNlUHJvcHNUb1N0YXRlID0gZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VUYWc6IGdldEJhc2VUYWdGcm9tUHJvcHNMaXN0KFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhSRUZdLCBwcm9wc0xpc3QpLFxuICAgICAgICBib2R5QXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWSwgcHJvcHNMaXN0KSxcbiAgICAgICAgZGVmZXI6IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuREVGRVIpLFxuICAgICAgICBlbmNvZGU6IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuRU5DT0RFX1NQRUNJQUxfQ0hBUkFDVEVSUyksXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MLCBwcm9wc0xpc3QpLFxuICAgICAgICBsaW5rVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSywgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUkVMLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhSRUZdLCBwcm9wc0xpc3QpLFxuICAgICAgICBtZXRhVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQSwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuTkFNRSwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DSEFSU0VULCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhUVFBFUVVJViwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5QUk9QRVJUWSwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JVEVNX1BST1BdLCBwcm9wc0xpc3QpLFxuICAgICAgICBub3NjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBULCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgb25DaGFuZ2VDbGllbnRTdGF0ZTogZ2V0T25DaGFuZ2VDbGllbnRTdGF0ZShwcm9wc0xpc3QpLFxuICAgICAgICBzY3JpcHRUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlNSQywgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgc3R5bGVUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRSwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFRdLCBwcm9wc0xpc3QpLFxuICAgICAgICB0aXRsZTogZ2V0VGl0bGVGcm9tUHJvcHNMaXN0KHByb3BzTGlzdCksXG4gICAgICAgIHRpdGxlQXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuVElUTEUsIHByb3BzTGlzdClcbiAgICB9O1xufTtcblxudmFyIHJhZlBvbHlmaWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbG9jayA9IERhdGUubm93KCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gY2xvY2sgPiAxNikge1xuICAgICAgICAgICAgY2xvY2sgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJlbnRUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJhZlBvbHlmaWxsKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxudmFyIGNhZlBvbHlmaWxsID0gZnVuY3Rpb24gY2FmUG9seWZpbGwoaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmFmUG9seWZpbGwgOiBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJhZlBvbHlmaWxsO1xuXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgY2FmUG9seWZpbGwgOiBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgY2FmUG9seWZpbGw7XG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICByZXR1cm4gY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIgJiYgY29uc29sZS53YXJuKG1zZyk7XG59O1xuXG52YXIgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcblxudmFyIGhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UobmV3U3RhdGUpIHtcbiAgICBpZiAoX2hlbG1ldENhbGxiYWNrKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9oZWxtZXRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1N0YXRlLmRlZmVyKSB7XG4gICAgICAgIF9oZWxtZXRDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlKTtcbiAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG59O1xuXG52YXIgY29tbWl0VGFnQ2hhbmdlcyA9IGZ1bmN0aW9uIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUsIGNiKSB7XG4gICAgdmFyIGJhc2VUYWcgPSBuZXdTdGF0ZS5iYXNlVGFnLFxuICAgICAgICBib2R5QXR0cmlidXRlcyA9IG5ld1N0YXRlLmJvZHlBdHRyaWJ1dGVzLFxuICAgICAgICBodG1sQXR0cmlidXRlcyA9IG5ld1N0YXRlLmh0bWxBdHRyaWJ1dGVzLFxuICAgICAgICBsaW5rVGFncyA9IG5ld1N0YXRlLmxpbmtUYWdzLFxuICAgICAgICBtZXRhVGFncyA9IG5ld1N0YXRlLm1ldGFUYWdzLFxuICAgICAgICBub3NjcmlwdFRhZ3MgPSBuZXdTdGF0ZS5ub3NjcmlwdFRhZ3MsXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGUgPSBuZXdTdGF0ZS5vbkNoYW5nZUNsaWVudFN0YXRlLFxuICAgICAgICBzY3JpcHRUYWdzID0gbmV3U3RhdGUuc2NyaXB0VGFncyxcbiAgICAgICAgc3R5bGVUYWdzID0gbmV3U3RhdGUuc3R5bGVUYWdzLFxuICAgICAgICB0aXRsZSA9IG5ld1N0YXRlLnRpdGxlLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXMgPSBuZXdTdGF0ZS50aXRsZUF0dHJpYnV0ZXM7XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJPRFksIGJvZHlBdHRyaWJ1dGVzKTtcbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhUTUwsIGh0bWxBdHRyaWJ1dGVzKTtcblxuICAgIHVwZGF0ZVRpdGxlKHRpdGxlLCB0aXRsZUF0dHJpYnV0ZXMpO1xuXG4gICAgdmFyIHRhZ1VwZGF0ZXMgPSB7XG4gICAgICAgIGJhc2VUYWc6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRSwgYmFzZVRhZyksXG4gICAgICAgIGxpbmtUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTkssIGxpbmtUYWdzKSxcbiAgICAgICAgbWV0YVRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQSwgbWV0YVRhZ3MpLFxuICAgICAgICBub3NjcmlwdFRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIG5vc2NyaXB0VGFncyksXG4gICAgICAgIHNjcmlwdFRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBULCBzY3JpcHRUYWdzKSxcbiAgICAgICAgc3R5bGVUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFLCBzdHlsZVRhZ3MpXG4gICAgfTtcblxuICAgIHZhciBhZGRlZFRhZ3MgPSB7fTtcbiAgICB2YXIgcmVtb3ZlZFRhZ3MgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRhZ1VwZGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHRhZ1R5cGUpIHtcbiAgICAgICAgdmFyIF90YWdVcGRhdGVzJHRhZ1R5cGUgPSB0YWdVcGRhdGVzW3RhZ1R5cGVdLFxuICAgICAgICAgICAgbmV3VGFncyA9IF90YWdVcGRhdGVzJHRhZ1R5cGUubmV3VGFncyxcbiAgICAgICAgICAgIG9sZFRhZ3MgPSBfdGFnVXBkYXRlcyR0YWdUeXBlLm9sZFRhZ3M7XG5cblxuICAgICAgICBpZiAobmV3VGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZGVkVGFnc1t0YWdUeXBlXSA9IG5ld1RhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZFRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZW1vdmVkVGFnc1t0YWdUeXBlXSA9IHRhZ1VwZGF0ZXNbdGFnVHlwZV0ub2xkVGFncztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2IgJiYgY2IoKTtcblxuICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGUobmV3U3RhdGUsIGFkZGVkVGFncywgcmVtb3ZlZFRhZ3MpO1xufTtcblxudmFyIGZsYXR0ZW5BcnJheSA9IGZ1bmN0aW9uIGZsYXR0ZW5BcnJheShwb3NzaWJsZUFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocG9zc2libGVBcnJheSkgPyBwb3NzaWJsZUFycmF5LmpvaW4oXCJcIikgOiBwb3NzaWJsZUFycmF5O1xufTtcblxudmFyIHVwZGF0ZVRpdGxlID0gZnVuY3Rpb24gdXBkYXRlVGl0bGUodGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnRpdGxlICE9PSB0aXRsZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGZsYXR0ZW5BcnJheSh0aXRsZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgYXR0cmlidXRlcyk7XG59O1xuXG52YXIgdXBkYXRlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZXModGFnTmFtZSwgYXR0cmlidXRlcykge1xuICAgIHZhciBlbGVtZW50VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSlbMF07XG5cbiAgICBpZiAoIWVsZW1lbnRUYWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcgPSBlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpO1xuICAgIHZhciBoZWxtZXRBdHRyaWJ1dGVzID0gaGVsbWV0QXR0cmlidXRlU3RyaW5nID8gaGVsbWV0QXR0cmlidXRlU3RyaW5nLnNwbGl0KFwiLFwiKSA6IFtdO1xuICAgIHZhciBhdHRyaWJ1dGVzVG9SZW1vdmUgPSBbXS5jb25jYXQoaGVsbWV0QXR0cmlidXRlcyk7XG4gICAgdmFyIGF0dHJpYnV0ZUtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlS2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdIHx8IFwiXCI7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoZWxtZXRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGhlbG1ldEF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGV4VG9TYXZlID0gYXR0cmlidXRlc1RvUmVtb3ZlLmluZGV4T2YoYXR0cmlidXRlKTtcbiAgICAgICAgaWYgKGluZGV4VG9TYXZlICE9PSAtMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1RvUmVtb3ZlLnNwbGljZShpbmRleFRvU2F2ZSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IGF0dHJpYnV0ZXNUb1JlbW92ZS5sZW5ndGggLSAxOyBfaSA+PSAwOyBfaS0tKSB7XG4gICAgICAgIGVsZW1lbnRUYWcucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXNUb1JlbW92ZVtfaV0pO1xuICAgIH1cblxuICAgIGlmIChoZWxtZXRBdHRyaWJ1dGVzLmxlbmd0aCA9PT0gYXR0cmlidXRlc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50VGFnLnJlbW92ZUF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFKSAhPT0gYXR0cmlidXRlS2V5cy5qb2luKFwiLFwiKSkge1xuICAgICAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUsIGF0dHJpYnV0ZUtleXMuam9pbihcIixcIikpO1xuICAgIH1cbn07XG5cbnZhciB1cGRhdGVUYWdzID0gZnVuY3Rpb24gdXBkYXRlVGFncyh0eXBlLCB0YWdzKSB7XG4gICAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhFQUQpO1xuICAgIHZhciB0YWdOb2RlcyA9IGhlYWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHlwZSArIFwiW1wiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCJdXCIpO1xuICAgIHZhciBvbGRUYWdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFnTm9kZXMpO1xuICAgIHZhciBuZXdUYWdzID0gW107XG4gICAgdmFyIGluZGV4VG9EZWxldGUgPSB2b2lkIDA7XG5cbiAgICBpZiAodGFncyAmJiB0YWdzLmxlbmd0aCkge1xuICAgICAgICB0YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gdGFnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0YWcuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGFnLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnLmNzc1RleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB0YWdbYXR0cmlidXRlXSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiB0YWdbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGEgZHVwbGljYXRlIHRhZyBmcm9tIGRvbVRhZ3N0b1JlbW92ZSwgc28gaXQgaXNuJ3QgY2xlYXJlZC5cbiAgICAgICAgICAgIGlmIChvbGRUYWdzLnNvbWUoZnVuY3Rpb24gKGV4aXN0aW5nVGFnLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGluZGV4VG9EZWxldGUgPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3RWxlbWVudC5pc0VxdWFsTm9kZShleGlzdGluZ1RhZyk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdUYWdzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9sZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIG5ld1RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2xkVGFnczogb2xkVGFncyxcbiAgICAgICAgbmV3VGFnczogbmV3VGFnc1xuICAgIH07XG59O1xuXG52YXIgZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGtleSkge1xuICAgICAgICB2YXIgYXR0ciA9IHR5cGVvZiBhdHRyaWJ1dGVzW2tleV0gIT09IFwidW5kZWZpbmVkXCIgPyBrZXkgKyBcIj1cXFwiXCIgKyBhdHRyaWJ1dGVzW2tleV0gKyBcIlxcXCJcIiA6IFwiXCIgKyBrZXk7XG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIgKyBcIiBcIiArIGF0dHIgOiBhdHRyO1xuICAgIH0sIFwiXCIpO1xufTtcblxudmFyIGdlbmVyYXRlVGl0bGVBc1N0cmluZyA9IGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVBc1N0cmluZyh0eXBlLCB0aXRsZSwgYXR0cmlidXRlcywgZW5jb2RlKSB7XG4gICAgdmFyIGF0dHJpYnV0ZVN0cmluZyA9IGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyhhdHRyaWJ1dGVzKTtcbiAgICB2YXIgZmxhdHRlbmVkVGl0bGUgPSBmbGF0dGVuQXJyYXkodGl0bGUpO1xuICAgIHJldHVybiBhdHRyaWJ1dGVTdHJpbmcgPyBcIjxcIiArIHR5cGUgKyBcIiBcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiPVxcXCJ0cnVlXFxcIiBcIiArIGF0dHJpYnV0ZVN0cmluZyArIFwiPlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoZmxhdHRlbmVkVGl0bGUsIGVuY29kZSkgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCIgOiBcIjxcIiArIHR5cGUgKyBcIiBcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiPVxcXCJ0cnVlXFxcIj5cIiArIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKGZsYXR0ZW5lZFRpdGxlLCBlbmNvZGUpICsgXCI8L1wiICsgdHlwZSArIFwiPlwiO1xufTtcblxudmFyIGdlbmVyYXRlVGFnc0FzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVUYWdzQXNTdHJpbmcodHlwZSwgdGFncywgZW5jb2RlKSB7XG4gICAgcmV0dXJuIHRhZ3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIHRhZykge1xuICAgICAgICB2YXIgYXR0cmlidXRlSHRtbCA9IE9iamVjdC5rZXlzKHRhZykuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MIHx8IGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoc3RyaW5nLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBhdHRyID0gdHlwZW9mIHRhZ1thdHRyaWJ1dGVdID09PSBcInVuZGVmaW5lZFwiID8gYXR0cmlidXRlIDogYXR0cmlidXRlICsgXCI9XFxcIlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnModGFnW2F0dHJpYnV0ZV0sIGVuY29kZSkgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBzdHJpbmcgKyBcIiBcIiArIGF0dHIgOiBhdHRyO1xuICAgICAgICB9LCBcIlwiKTtcblxuICAgICAgICB2YXIgdGFnQ29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQgfHwgXCJcIjtcblxuICAgICAgICB2YXIgaXNTZWxmQ2xvc2luZyA9IF9IZWxtZXRDb25zdGFudHMuU0VMRl9DTE9TSU5HX1RBR1MuaW5kZXhPZih0eXBlKSA9PT0gLTE7XG5cbiAgICAgICAgcmV0dXJuIHN0ciArIFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiIFwiICsgYXR0cmlidXRlSHRtbCArIChpc1NlbGZDbG9zaW5nID8gXCIvPlwiIDogXCI+XCIgKyB0YWdDb250ZW50ICsgXCI8L1wiICsgdHlwZSArIFwiPlwiKTtcbiAgICB9LCBcIlwiKTtcbn07XG5cbnZhciBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMgPSBmdW5jdGlvbiBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMoYXR0cmlidXRlcykge1xuICAgIHZhciBpbml0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgb2JqW19IZWxtZXRDb25zdGFudHMuUkVBQ1RfVEFHX01BUFtrZXldIHx8IGtleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgaW5pdFByb3BzKTtcbn07XG5cbnZhciBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMocHJvcHMpIHtcbiAgICB2YXIgaW5pdEF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIG9ialtfSGVsbWV0Q29uc3RhbnRzLkhUTUxfVEFHX01BUFtrZXldIHx8IGtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIGluaXRBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciBnZW5lcmF0ZVRpdGxlQXNSZWFjdENvbXBvbmVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIF9pbml0UHJvcHM7XG5cbiAgICAvLyBhc3NpZ25pbmcgaW50byBhbiBhcnJheSB0byBkZWZpbmUgdG9TdHJpbmcgZnVuY3Rpb24gb24gaXRcbiAgICB2YXIgaW5pdFByb3BzID0gKF9pbml0UHJvcHMgPSB7XG4gICAgICAgIGtleTogdGl0bGVcbiAgICB9LCBfaW5pdFByb3BzW19IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURV0gPSB0cnVlLCBfaW5pdFByb3BzKTtcbiAgICB2YXIgcHJvcHMgPSBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMoYXR0cmlidXRlcywgaW5pdFByb3BzKTtcblxuICAgIHJldHVybiBbX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUsIHByb3BzLCB0aXRsZSldO1xufTtcblxudmFyIGdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQgPSBmdW5jdGlvbiBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gdGFncy5tYXAoZnVuY3Rpb24gKHRhZywgaSkge1xuICAgICAgICB2YXIgX21hcHBlZFRhZztcblxuICAgICAgICB2YXIgbWFwcGVkVGFnID0gKF9tYXBwZWRUYWcgPSB7XG4gICAgICAgICAgICBrZXk6IGlcbiAgICAgICAgfSwgX21hcHBlZFRhZ1tfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEVdID0gdHJ1ZSwgX21hcHBlZFRhZyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGFnKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBtYXBwZWRBdHRyaWJ1dGUgPSBfSGVsbWV0Q29uc3RhbnRzLlJFQUNUX1RBR19NQVBbYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG5cbiAgICAgICAgICAgIGlmIChtYXBwZWRBdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCB8fCBtYXBwZWRBdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgbWFwcGVkVGFnLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkVGFnW21hcHBlZEF0dHJpYnV0ZV0gPSB0YWdbYXR0cmlidXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHR5cGUsIG1hcHBlZFRhZyk7XG4gICAgfSk7XG59O1xuXG52YXIgZ2V0TWV0aG9kc0ZvclRhZyA9IGZ1bmN0aW9uIGdldE1ldGhvZHNGb3JUYWcodHlwZSwgdGFncywgZW5jb2RlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvQ29tcG9uZW50OiBmdW5jdGlvbiB0b0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzLCBlbmNvZGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUaXRsZUFzU3RyaW5nKHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzLCBlbmNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWTpcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b0NvbXBvbmVudDogZnVuY3Rpb24gdG9Db21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHModGFncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcodGFncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9Db21wb25lbnQ6IGZ1bmN0aW9uIHRvQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0YWdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGFnc0FzU3RyaW5nKHR5cGUsIHRhZ3MsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuXG52YXIgbWFwU3RhdGVPblNlcnZlciA9IGZ1bmN0aW9uIG1hcFN0YXRlT25TZXJ2ZXIoX3JlZikge1xuICAgIHZhciBiYXNlVGFnID0gX3JlZi5iYXNlVGFnLFxuICAgICAgICBib2R5QXR0cmlidXRlcyA9IF9yZWYuYm9keUF0dHJpYnV0ZXMsXG4gICAgICAgIGVuY29kZSA9IF9yZWYuZW5jb2RlLFxuICAgICAgICBodG1sQXR0cmlidXRlcyA9IF9yZWYuaHRtbEF0dHJpYnV0ZXMsXG4gICAgICAgIGxpbmtUYWdzID0gX3JlZi5saW5rVGFncyxcbiAgICAgICAgbWV0YVRhZ3MgPSBfcmVmLm1ldGFUYWdzLFxuICAgICAgICBub3NjcmlwdFRhZ3MgPSBfcmVmLm5vc2NyaXB0VGFncyxcbiAgICAgICAgc2NyaXB0VGFncyA9IF9yZWYuc2NyaXB0VGFncyxcbiAgICAgICAgc3R5bGVUYWdzID0gX3JlZi5zdHlsZVRhZ3MsXG4gICAgICAgIF9yZWYkdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgICB0aXRsZSA9IF9yZWYkdGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBfcmVmJHRpdGxlLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXMgPSBfcmVmLnRpdGxlQXR0cmlidXRlcztcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJBU0UsIGJhc2VUYWcsIGVuY29kZSksXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkJPRFksIGJvZHlBdHRyaWJ1dGVzLCBlbmNvZGUpLFxuICAgICAgICBodG1sQXR0cmlidXRlczogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MLCBodG1sQXR0cmlidXRlcywgZW5jb2RlKSxcbiAgICAgICAgbGluazogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LLCBsaW5rVGFncywgZW5jb2RlKSxcbiAgICAgICAgbWV0YTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBtZXRhVGFncywgZW5jb2RlKSxcbiAgICAgICAgbm9zY3JpcHQ6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIG5vc2NyaXB0VGFncywgZW5jb2RlKSxcbiAgICAgICAgc2NyaXB0OiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVCwgc2NyaXB0VGFncywgZW5jb2RlKSxcbiAgICAgICAgc3R5bGU6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEUsIHN0eWxlVGFncywgZW5jb2RlKSxcbiAgICAgICAgdGl0bGU6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUsIHsgdGl0bGU6IHRpdGxlLCB0aXRsZUF0dHJpYnV0ZXM6IHRpdGxlQXR0cmlidXRlcyB9LCBlbmNvZGUpXG4gICAgfTtcbn07XG5cbmV4cG9ydHMuY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzID0gY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzO1xuZXhwb3J0cy5oYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSA9IGhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlO1xuZXhwb3J0cy5tYXBTdGF0ZU9uU2VydmVyID0gbWFwU3RhdGVPblNlcnZlcjtcbmV4cG9ydHMucmVkdWNlUHJvcHNUb1N0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlO1xuZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5leHBvcnRzLndhcm4gPSB3YXJuOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2V4ZW52JykpO1xudmFyIHNoYWxsb3dFcXVhbCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdzaGFsbG93ZXF1YWwnKSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50LCBtYXBTdGF0ZU9uU2VydmVyKSB7XG4gIGlmICh0eXBlb2YgcmVkdWNlUHJvcHNUb1N0YXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCByZWR1Y2VQcm9wc1RvU3RhdGUgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuICBpZiAodHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXBTdGF0ZU9uU2VydmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBtYXBTdGF0ZU9uU2VydmVyIHRvIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIFdyYXBwZWRDb21wb25lbnQgdG8gYmUgYSBSZWFjdCBjb21wb25lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICB2YXIgc3RhdGUgPSB2b2lkIDA7XG5cbiAgICBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgc3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGUobW91bnRlZEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoc3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChtYXBTdGF0ZU9uU2VydmVyKSB7XG4gICAgICAgIHN0YXRlID0gbWFwU3RhdGVPblNlcnZlcihzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFNpZGVFZmZlY3QsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTaWRlRWZmZWN0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2lkZUVmZmVjdCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byB1c2UgZGlzcGxheU5hbWUgb2Ygd3JhcHBlZCBjb21wb25lbnRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEV4cG9zZSBjYW5Vc2VET00gc28gdGVzdHMgY2FuIG1vbmtleXBhdGNoIGl0XG5cblxuICAgICAgU2lkZUVmZmVjdC5yZXdpbmQgPSBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgICAgIGlmIChTaWRlRWZmZWN0LmNhblVzZURPTSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBvbmx5IGNhbGwgcmV3aW5kKCkgb24gdGhlIHNlcnZlci4gQ2FsbCBwZWVrKCkgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWNvcmRlZFN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgICAgIHJldHVybiByZWNvcmRlZFN0YXRlO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICBTaWRlRWZmZWN0LmRpc3BsYXlOYW1lID0gJ1NpZGVFZmZlY3QoJyArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgJyknO1xuICAgIFNpZGVFZmZlY3QuY2FuVXNlRE9NID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NO1xuXG5cbiAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU2lkZUVmZmVjdDtcbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLFVBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDblNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdmhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=