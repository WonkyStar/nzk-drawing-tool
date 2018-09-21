'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = exports.SliderInput = exports.SliderWrapper = exports.OpacityCircle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: ', ';\n  margin: 0 auto;\n'], ['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: ', ';\n  margin: 0 auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 230px;\n  transform: rotate(270deg);\n  margin-top: 90px;\n  position: absolute;\n  left: -68px;\n  height: 70px;\n'], ['\n  width: 230px;\n  transform: rotate(270deg);\n  margin-top: 90px;\n  position: absolute;\n  left: -68px;\n  height: 70px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 47%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  outline: none;\n  width: calc(100% - 15px);\n  height: 15px;\n  border-radius: 10px;\n  background: ', ';\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    z-index: 3;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-webkit-slider-runnable-track {\n    border: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-range-track {\n    background: transparent;\n  }\n\n  &:focus::-moz-range-track {\n    outline: none;\n    background: transparent;\n  }\n\n  &::-moz-range-thumb {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    width: calc(100% - 15px);\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-thumb {\n    appearance: none;\n    z-index: 3;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-fill-lower {\n    background: transparent;\n  }\n'], ['\n  position: absolute;\n  top: 47%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  outline: none;\n  width: calc(100% - 15px);\n  height: 15px;\n  border-radius: 10px;\n  background: ', ';\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    z-index: 3;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-webkit-slider-runnable-track {\n    border: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-range-track {\n    background: transparent;\n  }\n\n  &:focus::-moz-range-track {\n    outline: none;\n    background: transparent;\n  }\n\n  &::-moz-range-thumb {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    width: calc(100% - 15px);\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-thumb {\n    appearance: none;\n    z-index: 3;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    background-color: ', ';\n    box-shadow: -4px 0 0 ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-fill-lower {\n    background: transparent;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 300px;\n  height: 15px;\n'], ['\n  position: absolute;\n  width: 300px;\n  height: 15px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OpacityCircle = exports.OpacityCircle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.lineColor;
});

var SliderWrapper = exports.SliderWrapper = _styledComponents2.default.div(_templateObject2);

var SliderInput = exports.SliderInput = _styledComponents2.default.input(_templateObject3, _index.colors.blue, _index.colors.yellow, _index.colors.shadow, _index.colors.yellow, _index.colors.shadow, _index.colors.yellow, _index.colors.shadow);

var Shape = exports.Shape = _styledComponents2.default.div(_templateObject4);