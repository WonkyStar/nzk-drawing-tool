'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n'], ['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: min-content;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: ', ';\n  align-items: center;\n  background-color: ', ';\n  border-radius: 70px;\n  height: 350px;\n  padding: 5px 0 20px;\n\n  & > div {\n    margin-top: 20px;\n  }\n\n  @media(max-width: ', 'px) {\n    height: 300px;\n  }\n'], ['\n  min-height: min-content;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: ', ';\n  align-items: center;\n  background-color: ', ';\n  border-radius: 70px;\n  height: 350px;\n  padding: 5px 0 20px;\n\n  & > div {\n    margin-top: 20px;\n  }\n\n  @media(max-width: ', 'px) {\n    height: 300px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var Panel = exports.Panel = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.spaceBetween ? 'space-between' : 'center';
}, _index.colors.translucentWhite, _index.tabletMaxWidth);