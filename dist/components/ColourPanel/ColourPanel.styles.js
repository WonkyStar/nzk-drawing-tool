'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n\n  @media(max-width: ', 'px) {\n    width: 65px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 90px;\n  z-index: 2;\n\n  @media(max-width: ', 'px) {\n    width: 65px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: 350px;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n\n  @media(max-width: ', 'px) {\n    min-height: 270px;\n  }\n'], ['\n  min-height: 350px;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n\n  @media(max-width: ', 'px) {\n    min-height: 270px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject, _index.tabletMaxWidth);

var Panel = exports.Panel = _styledComponents2.default.div(_templateObject2, _index.tabletMaxWidth);