'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: top;\n  height: 50px;\n  width: 50px;\n  margin-top: 8px;\n\n  @media(max-width: ', 'px) {\n    height: 31px;\n    width: 38px;\n  }\n'], ['\n  display: inline-block;\n  vertical-align: top;\n  height: 50px;\n  width: 50px;\n  margin-top: 8px;\n\n  @media(max-width: ', 'px) {\n    height: 31px;\n    width: 38px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmptyButton = exports.EmptyButton = _styledComponents2.default.div(_templateObject, _index.tabletMaxWidth);