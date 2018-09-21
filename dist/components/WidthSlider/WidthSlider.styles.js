'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = exports.SliderInput = exports.SliderWrapper = exports.Wrapper = exports.WidthNumber = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  color: ', ';\n  margin: 0 auto 10px;\n'], ['\n  ', ';\n  color: ', ';\n  margin: 0 auto 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', 'px;\n  height: ', 'px;\n  position: relative;\n'], ['\n  width: ', 'px;\n  height: ', 'px;\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: ', 'px;\n  transform: rotate(270deg);\n  margin-top: 80px;\n  position: absolute;\n  left: -110px;\n  height: 70px;\n'], ['\n  width: ', 'px;\n  transform: rotate(270deg);\n  margin-top: 80px;\n  position: absolute;\n  left: -110px;\n  height: 70px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 55px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  width: calc(100% + 15px);\n  background: transparent;\n  outline: none;\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: ', 'px;\n    height: ', 'px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    width: ', ';\n    height: ', ';\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n'], ['\n  position: absolute;\n  top: 55px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  width: calc(100% + 15px);\n  background: transparent;\n  outline: none;\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: ', 'px;\n    height: ', 'px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    width: ', ';\n    height: ', ';\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-radius: 70px;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 250px solid ', ';\n'], ['\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-radius: 70px;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 250px solid ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WidthNumber = exports.WidthNumber = _styledComponents2.default.p(_templateObject, _index.fonts.proxima, _index.colors.indigo);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var SliderWrapper = exports.SliderWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.containerHeight;
});

var SliderInput = exports.SliderInput = _styledComponents2.default.input(_templateObject4, function (props) {
  return props.value;
}, function (props) {
  return props.value;
}, function (props) {
  return props.thumbColor;
}, _index.colors.shadow, function (props) {
  return props.value;
}, function (props) {
  return props.value;
}, function (props) {
  return props.thumbColor;
}, _index.colors.shadow);

var Shape = exports.Shape = _styledComponents2.default.div(_templateObject5, _index.colors.blue);