'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentSetting = exports.CurrentSettingWrapper = exports.BarShape = exports.TriangleShape = exports.SliderInput = exports.SliderWrapper = exports.Wrapper = exports.CurrentNumber = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 70px;\n  height: 224px;\n  width: 50px;\n  margin: 8px auto 0;\n  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.4), 0px 2px 0px rgba(171, 171, 171, 1);\n\n  @media (max-width: ', 'px) {\n    height: 184px;\n    width: 38px;\n  }\n'], ['\n  background: ', ';\n  border-radius: 70px;\n  height: 224px;\n  width: 50px;\n  margin: 8px auto 0;\n  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.4), 0px 2px 0px rgba(171, 171, 171, 1);\n\n  @media (max-width: ', 'px) {\n    height: 184px;\n    width: 38px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n  text-align: center;\n  color: ', ';\n  margin: 0 auto;\n  padding-top: 10px;\n\n  @media (max-width: ', 'px) {\n    height: 18px;\n    ', ';\n  }\n'], ['\n  ', ';\n  ', ';\n  text-align: center;\n  color: ', ';\n  margin: 0 auto;\n  padding-top: 10px;\n\n  @media (max-width: ', 'px) {\n    height: 18px;\n    ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  height: 155px;\n\n  @media (max-width: ', 'px) {\n    height: 117px;\n  }\n'], ['\n  position: relative;\n  height: 155px;\n\n  @media (max-width: ', 'px) {\n    height: 117px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 135px;\n  transform: rotate(270deg);\n  position: absolute;\n  top: 42px;\n  left: -67px;\n  height: 70px;\n\n  @media (max-width: ', 'px) {\n    width: 100px;\n    top: 22px;\n    left: -56px;\n  }\n'], ['\n  width: 135px;\n  transform: rotate(270deg);\n  position: absolute;\n  top: 42px;\n  left: -67px;\n  height: 70px;\n\n  @media (max-width: ', 'px) {\n    width: 100px;\n    top: 22px;\n    left: -56px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  width: calc(100% + 15px);\n  background: transparent;\n  outline: none;\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n\n    @media (max-width: ', 'px) {\n      width: 20px;\n      height: 20px;\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    border: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-range-track {\n    background: transparent;\n  }\n\n  &:focus::-moz-range-track {\n    background: transparent;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-width: 70px 0;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-thumb {\n    width: 25px;\n    height: 25px;\n    margin-top: 14px;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-fill-lower {\n    background: transparent;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n'], ['\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-appearance: none;\n  width: calc(100% + 15px);\n  background: transparent;\n  outline: none;\n  margin: 0 auto;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n\n    @media (max-width: ', 'px) {\n      width: 20px;\n      height: 20px;\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    border: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-range-track {\n    background: transparent;\n  }\n\n  &:focus::-moz-range-track {\n    background: transparent;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-width: 70px 0;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-thumb {\n    width: 25px;\n    height: 25px;\n    margin-top: 14px;\n    border: none;\n    border-radius: 50%;\n    background-color: ', ';\n    cursor: pointer;\n  }\n\n  &::-ms-fill-lower {\n    background: transparent;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-radius: 70px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 135px solid ', ';\n\n  @media (max-width: ', 'px) {\n    border-right: 100px solid ', ';\n  }\n'], ['\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-radius: 70px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 135px solid ', ';\n\n  @media (max-width: ', 'px) {\n    border-right: 100px solid ', ';\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 6px;\n  width: 135px;\n  height: 8px;\n  border-radius: 70px;\n  background-color: ', ';\n\n  @media (max-width: ', 'px) {\n    width: 100px;\n  }\n'], ['\n  position: absolute;\n  bottom: 6px;\n  width: 135px;\n  height: 8px;\n  border-radius: 70px;\n  background-color: ', ';\n\n  @media (max-width: ', 'px) {\n    width: 100px;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n  margin: 0 auto;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n  margin: 0 auto;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background-color: ', ';\n'], ['\n  width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background-color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject, _index.colors.grey, _index.tabletMaxWidth);

var CurrentNumber = exports.CurrentNumber = _styledComponents2.default.p(_templateObject2, _index.fonts.proxima, _index.fontSize.milli, _index.colors.indigo, _index.tabletMaxWidth, function (props) {
  return props.isOpacity ? _index.fontSize.micro : null;
});

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject3, _index.tabletMaxWidth);

var SliderWrapper = exports.SliderWrapper = _styledComponents2.default.div(_templateObject4, _index.tabletMaxWidth);

var SliderInput = exports.SliderInput = _styledComponents2.default.input(_templateObject5, function (props) {
  return props.thumbColor;
}, _index.tabletMaxWidth, function (props) {
  return props.thumbColor;
}, function (props) {
  return props.thumbColor;
});

var TriangleShape = exports.TriangleShape = _styledComponents2.default.div(_templateObject6, _index.colors.darkGrey, _index.tabletMaxWidth, _index.colors.darkGrey);

var BarShape = exports.BarShape = _styledComponents2.default.div(_templateObject7, _index.colors.darkGrey, _index.tabletMaxWidth);

var CurrentSettingWrapper = exports.CurrentSettingWrapper = _styledComponents2.default.div(_templateObject8);

var CurrentSetting = exports.CurrentSetting = _styledComponents2.default.div(_templateObject9, function (props) {
  return props.lineWidth;
}, function (props) {
  return props.lineWidth;
}, function (props) {
  return props.color || _index.colors.indigo;
});