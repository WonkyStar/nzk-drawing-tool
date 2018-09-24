'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWrapper = exports.Panel = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n\n  @media(max-width: ', 'px) {\n    width: 65px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n\n  @media(max-width: ', 'px) {\n    width: 65px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: 350px;\n  width: 100%;\n  text-align: center;\n  border-radius: 70px;\n  padding: 20px 0;\n  background-color: ', ';\n\n  @media(max-width: ', 'px) {\n    min-height: 270px;\n  }\n'], ['\n  min-height: 350px;\n  width: 100%;\n  text-align: center;\n  border-radius: 70px;\n  padding: 20px 0;\n  background-color: ', ';\n\n  @media(max-width: ', 'px) {\n    min-height: 270px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media(max-width: ', 'px) {\n    height: 270px;\n  }\n'], ['\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media(max-width: ', 'px) {\n    height: 270px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject, _index.tabletMaxWidth);

var Panel = exports.Panel = _styledComponents2.default.div(_templateObject2, _index.colors.translucentWhite, _index.tabletMaxWidth);

var ButtonWrapper = exports.ButtonWrapper = _styledComponents2.default.div(_templateObject3, _index.tabletMaxWidth);