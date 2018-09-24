'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasBackground = exports.SketchContainer = exports.PanelContainer = exports.Container = exports.colors = exports.fontSize = exports.fontInputs = exports.fonts = exports.tabletMaxWidth = exports.phoneMaxWidth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    font-family: \'Libre Baskerville\', Baskerville, \'Baskerville Old Face\',\n      \'Hoefler Text\', Garamond, \'Times New Roman\', serif;\n    font-feature-settings: \'kern\' 1, \'liga\' 1, \'calt\' 1, \'pnum\' 1, \'tnum\' 0,\n      \'onum\' 1, \'lnum\' 0, \'dlig\' 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  '], ['\n    font-family: \'Libre Baskerville\', Baskerville, \'Baskerville Old Face\',\n      \'Hoefler Text\', Garamond, \'Times New Roman\', serif;\n    font-feature-settings: \'kern\' 1, \'liga\' 1, \'calt\' 1, \'pnum\' 1, \'tnum\' 0,\n      \'onum\' 1, \'lnum\' 0, \'dlig\' 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-family: \'Open Sans\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  '], ['\n    font-family: \'Open Sans\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-family: \'NZK\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  '], ['\n    font-family: \'NZK\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-family: \'Proxima Nova\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  '], ['\n    font-family: \'Proxima Nova\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        ', 'px\n      '], ['\n        ', 'px\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-color: orange;\n'], ['\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-color: orange;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n'], ['\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  justify-content: ', ';\n  align-items: center;\n  width: 100%;\n  height: calc(100% - 100px);\n'], ['\n  position: relative;\n  display: flex;\n  justify-content: ', ';\n  align-items: center;\n  width: 100%;\n  height: calc(100% - 100px);\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n      background-color: ', ';\n      border-top: 2px solid ', ';\n      box-shadow: 0 6px 0 ', ';\n    '], ['\n      background-color: ', ';\n      border-top: 2px solid ', ';\n      box-shadow: 0 6px 0 ', ';\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var phoneMaxWidth = exports.phoneMaxWidth = 550;
var tabletMaxWidth = exports.tabletMaxWidth = 1023;

var fonts = exports.fonts = {
  libreBaskerville: (0, _styledComponents.css)(_templateObject),
  openSans: (0, _styledComponents.css)(_templateObject2),
  nzk: (0, _styledComponents.css)(_templateObject3),
  proxima: (0, _styledComponents.css)(_templateObject4)
};

var fontInputs = exports.fontInputs = {
  nano: 10,
  micro: 12,
  milli: 14,
  normal: 18,
  kilo: 24,
  mega: 28,
  giga: 30,
  tera: 40
};

var getFontSize = function getFontSize(fontInputs) {
  return Object.keys(fontInputs).reduce(function (acc, fontSize) {
    return _extends({}, acc, _defineProperty({}, fontSize, (0, _styledComponents.css)(_templateObject5, fontInputs[fontSize])));
  }, {});
};

var fontSize = exports.fontSize = getFontSize(fontInputs);

var colors = exports.colors = {
  white: '#ffffff',
  grey: '#ebebeb',
  orange: '#F7931E',
  yellow: '#FCEE21',
  blue: '#55acf1',
  indigo: '#29235C',
  shadow: 'rgba(0, 0, 0, 0.4)',
  translucentWhite: 'rgba(250,250,250, 0.6)'
};

var Container = exports.Container = _styledComponents2.default.div(_templateObject6);

var PanelContainer = exports.PanelContainer = _styledComponents2.default.div(_templateObject7);

var SketchContainer = exports.SketchContainer = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.layoutStyle === 'center' ? 'center' : 'space-between';
});

var canvasBackgroundProps = function canvasBackgroundProps(props) {
  // canvasBg props should be able to be a colour or image
  if (props.canvasBg) {
    return (0, _styledComponents.css)(_templateObject9, props.canvasBg, colors.white, colors.shadow);
  }
};

var CanvasBackground = exports.CanvasBackground = _styledComponents2.default.div(_templateObject10, function (props) {
  return props.width || null;
}, function (props) {
  return props.height || null;
}, canvasBackgroundProps);