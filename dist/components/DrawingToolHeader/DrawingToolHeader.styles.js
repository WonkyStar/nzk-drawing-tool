'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionButton = exports.Title = exports.ButtonContainer = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: ', ';\n  align-items: center;\n  padding: 10px;\n  height: 60px;\n\n  @media(max-width: ', 'px) {\n    height: 40px;\n  }\n'], ['\n  display: flex;\n  justify-content: ', ';\n  align-items: center;\n  padding: 10px;\n  height: 60px;\n\n  @media(max-width: ', 'px) {\n    height: 40px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 10px;\n'], ['\n  margin: 0 10px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        border-radius: 25px;\n        background-color: ', ';\n        color: ', ';\n        font-size: 25px;\n        ', ';\n\n        @media(max-width: ', 'px) {\n          font-size: 18px;\n        }\n      '], ['\n        border-radius: 25px;\n        background-color: ', ';\n        color: ', ';\n        font-size: 25px;\n        ', ';\n\n        @media(max-width: ', 'px) {\n          font-size: 18px;\n        }\n      ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        color: ', ';\n        font-size: 24px;\n        ', ';\n\n        @media(max-width: ', 'px) {\n          font-size: 18px;\n        }\n      '], ['\n        color: ', ';\n        font-size: 24px;\n        ', ';\n\n        @media(max-width: ', 'px) {\n          font-size: 18px;\n        }\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: ', ';\n  text-align: center;\n  ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: ', ';\n  text-align: center;\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 15px;\n'], ['\n  position: absolute;\n  right: 15px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.layoutStyle === 'center' ? 'center' : 'space-between';
}, _index.tabletMaxWidth);

var ButtonContainer = exports.ButtonContainer = _styledComponents2.default.div(_templateObject2);

var headerProps = function headerProps(props) {
  switch (props.headerStyle) {
    case 'iconButtons':
      return (0, _styledComponents.css)(_templateObject3, _index.colors.translucentWhite, _index.colors.white, _index.fonts.libreBaskerville, _index.tabletMaxWidth);
    case 'textButtons':
      return (0, _styledComponents.css)(_templateObject4, _index.colors.indigo, _index.fonts.proxima, _index.tabletMaxWidth);
    default:
      return;
  }
};

var Title = exports.Title = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.width + 'px' || '90%';
}, headerProps);

var QuestionButton = exports.QuestionButton = (0, _styledComponents2.default)(_Button2.default)(_templateObject6);