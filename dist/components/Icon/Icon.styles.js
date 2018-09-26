'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSvg = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n        width: 12px;\n        height: 12px;\n      '], ['\n        width: 12px;\n        height: 12px;\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: 18px;\n        height: 18px;\n      '], ['\n        width: 18px;\n        height: 18px;\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        width: 24px;\n        height: 24px;\n\n        @media(max-width: ', 'px) {\n          width: 18px;\n          height: 18px;\n        }\n      '], ['\n        width: 24px;\n        height: 24px;\n\n        @media(max-width: ', 'px) {\n          width: 18px;\n          height: 18px;\n        }\n      ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        width: 37px;\n        height: 37px;\n\n        @media(max-width: ', 'px) {\n          width: 28px;\n          height: 28px;\n        }\n      '], ['\n        width: 37px;\n        height: 37px;\n\n        @media(max-width: ', 'px) {\n          width: 28px;\n          height: 28px;\n        }\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  filter: ', ';\n  position: ', ';\n  pointer-events: none;\n  ', ';\n'], ['\n  filter: ', ';\n  position: ', ';\n  pointer-events: none;\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  fill: ', ';\n  pointer-events: ', ';\n  opacity: ', ';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) ', ';\n  ', ';\n'], ['\n  fill: ', ';\n  pointer-events: ', ';\n  opacity: ', ';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizeStyle = function sizeStyle(props) {
  switch (props.size) {
    case 'small':
      return (0, _styledComponents.css)(_templateObject);
    case 'regular':
      return (0, _styledComponents.css)(_templateObject2);
    case 'large':
      return (0, _styledComponents.css)(_templateObject3, _index.tabletMaxWidth);
    case 'x-large':
      return (0, _styledComponents.css)(_templateObject4, _index.tabletMaxWidth);
    default:
      break;
  }
};

var Container = exports.Container = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.glow ? 'drop-shadow(0 0 5px ' + props.color + ')' : 'none';
}, function (props) {
  return props.position || 'relative';
}, sizeStyle);

var StyledSvg = exports.StyledSvg = _styledComponents2.default.svg(_templateObject6, function (props) {
  return props.color;
}, function (props) {
  return props.clickThrough ? 'none' : '';
}, function (props) {
  return props.opacity;
}, function (props) {
  return props.flipped ? 'scale(-1)' : '';
}, sizeStyle);