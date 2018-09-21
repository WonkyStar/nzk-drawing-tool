'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonDiv = exports.StyledButtonSpan = exports.StyledButtonLink = exports.StyledButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n  '], ['\n    color: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tborder-radius: ', ';\n  '], ['\n\t\tborder-radius: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);\n        '], ['\n          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);\n        ']),
    _templateObject5 = _taggedTemplateLiteral(['\n          box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);\n        '], ['\n          box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);\n        ']),
    _templateObject6 = _taggedTemplateLiteral(['\n          box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);\n        '], ['\n          box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);\n        ']),
    _templateObject7 = _taggedTemplateLiteral(['\n          box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5);\n        '], ['\n          box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5);\n        ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    ', ';\n  '], ['\n    ', ';\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n        width: ', ';\n      '], ['\n        width: ', ';\n      ']),
    _templateObject10 = _taggedTemplateLiteral(['\n        height: ', ';\n      '], ['\n        height: ', ';\n      ']),
    _templateObject11 = _taggedTemplateLiteral(['\n        margin: ', ';\n      '], ['\n        margin: ', ';\n      ']),
    _templateObject12 = _taggedTemplateLiteral(['\n        display: block;\n        width: 100%;\n      '], ['\n        display: block;\n        width: 100%;\n      ']),
    _templateObject13 = _taggedTemplateLiteral(['\n        pointer-events: none;\n        filter: grayscale(50);\n        box-shadow: none !important;\n      '], ['\n        pointer-events: none;\n        filter: grayscale(50);\n        box-shadow: none !important;\n      ']),
    _templateObject14 = _taggedTemplateLiteral(['\n          pointer-events: none;\n          box-shadow: 0 -4px 0 rgba(0, 0, 0, 0.5);\n        '], ['\n          pointer-events: none;\n          box-shadow: 0 -4px 0 rgba(0, 0, 0, 0.5);\n        ']),
    _templateObject15 = _taggedTemplateLiteral(['\n\t\t\t\t\tfilter: grayscale(50);\n\t\t\t\t\ttransform: translateY(4px);\n\t\t\t\t\tpointer-events: none;\n          box-shadow: none !important;\n        '], ['\n\t\t\t\t\tfilter: grayscale(50);\n\t\t\t\t\ttransform: translateY(4px);\n\t\t\t\t\tpointer-events: none;\n          box-shadow: none !important;\n        ']),
    _templateObject16 = _taggedTemplateLiteral(['\n        transform: translateY(4px);\n        box-shadow: none !important;\n      '], ['\n        transform: translateY(4px);\n        box-shadow: none !important;\n      ']),
    _templateObject17 = _taggedTemplateLiteral(['\n          width: 21px;\n          height: 21px;\n          padding: 0px;\n          font-size: ', ';\n        '], ['\n          width: 21px;\n          height: 21px;\n          padding: 0px;\n          font-size: ', ';\n        ']),
    _templateObject18 = _taggedTemplateLiteral(['\n          width: 31px;\n          height: 31px;\n          padding: 0px;\n          font-size: ', ';\n        '], ['\n          width: 31px;\n          height: 31px;\n          padding: 0px;\n          font-size: ', ';\n        ']),
    _templateObject19 = _taggedTemplateLiteral(['\n          width: 41px;\n          height: 41px;\n          font-size: ', ';\n          padding: 0px;\n        '], ['\n          width: 41px;\n          height: 41px;\n          font-size: ', ';\n          padding: 0px;\n        ']),
    _templateObject20 = _taggedTemplateLiteral(['\n          width: 64px;\n          height: 64px;\n          font-size: ', ';\n          padding: 0px;\n        '], ['\n          width: 64px;\n          height: 64px;\n          font-size: ', ';\n          padding: 0px;\n        ']),
    _templateObject21 = _taggedTemplateLiteral(['\n      width: ', ';\n      height: ', ';\n    '], ['\n      width: ', ';\n      height: ', ';\n    ']),
    _templateObject22 = _taggedTemplateLiteral(['\n        height: 21px;\n\t\t\t\tpadding: 0 9px;\n\t\t\t\t', ';\n      '], ['\n        height: 21px;\n\t\t\t\tpadding: 0 9px;\n\t\t\t\t', ';\n      ']),
    _templateObject23 = _taggedTemplateLiteral(['\n        height: 31px;\n\t\t\t\tpadding: 0 16px;\n\t\t\t\t', ';\n      '], ['\n        height: 31px;\n\t\t\t\tpadding: 0 16px;\n\t\t\t\t', ';\n      ']),
    _templateObject24 = _taggedTemplateLiteral(['\n        height: 41px;\n\t\t\t\tpadding: 0 19px;\n\t\t\t\t', ';\n      '], ['\n        height: 41px;\n\t\t\t\tpadding: 0 19px;\n\t\t\t\t', ';\n      ']),
    _templateObject25 = _taggedTemplateLiteral(['\n        height: 64px;\n\t\t\t\tpadding: 0 31px;\n\t\t\t\t', ';\n      '], ['\n        height: 64px;\n\t\t\t\tpadding: 0 31px;\n\t\t\t\t', ';\n      ']),
    _templateObject26 = _taggedTemplateLiteral(['\n    width: ', ';\n    height: ', ';\n  '], ['\n    width: ', ';\n    height: ', ';\n  ']),
    _templateObject27 = _taggedTemplateLiteral(['\n      font-size: ', ';\n    '], ['\n      font-size: ', ';\n    ']),
    _templateObject28 = _taggedTemplateLiteral(['\n        font-size: 15px;\n      '], ['\n        font-size: 15px;\n      ']),
    _templateObject29 = _taggedTemplateLiteral(['\n        font-size: 20px;\n      '], ['\n        font-size: 20px;\n      ']),
    _templateObject30 = _taggedTemplateLiteral(['\n        font-size: 25px;\n      '], ['\n        font-size: 25px;\n      ']),
    _templateObject31 = _taggedTemplateLiteral(['\n        font-size: 39px;\n      '], ['\n        font-size: 39px;\n      ']),
    _templateObject32 = _taggedTemplateLiteral(['\n        font-size: ', ';\n      '], ['\n        font-size: ', ';\n      ']),
    _templateObject33 = _taggedTemplateLiteral(['\n\tposition: relative;\n  box-sizing: border-box;\n  display: inline-flex;\n  justify-content: ', ';\n  margin: 0;\n  ', ';\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: ', ';\n  line-height: 1.2em;\n  border: none;\n  outline: none; // is this doing anything?\n  cursor: pointer;\n  text-decoration: none;\n  user-select: none;\n  vertical-align: top;\n  text-align: center;\n\n  ', ';\n  ', ';\n  ', '\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n\talign-items: ', ';\n  line-height: ', ';\n  height: ', ';\n\n  .StyledButton ~ & {\n    ', '\n  }\n\n  &:active {\n    transform: translateY(4px);\n    box-shadow: none !important;\n  }\n\n  &:active,\n  &:hover {\n    text-decoration: none;\n    ', ';\n  }\n\n  &:hover > * {\n    text-decoration: none;\n  }\n'], ['\n\tposition: relative;\n  box-sizing: border-box;\n  display: inline-flex;\n  justify-content: ', ';\n  margin: 0;\n  ', ';\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: ', ';\n  line-height: 1.2em;\n  border: none;\n  outline: none; // is this doing anything?\n  cursor: pointer;\n  text-decoration: none;\n  user-select: none;\n  vertical-align: top;\n  text-align: center;\n\n  ', ';\n  ', ';\n  ', '\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n\talign-items: ', ';\n  line-height: ', ';\n  height: ', ';\n\n  .StyledButton ~ & {\n    ', '\n  }\n\n  &:active {\n    transform: translateY(4px);\n    box-shadow: none !important;\n  }\n\n  &:active,\n  &:hover {\n    text-decoration: none;\n    ', ';\n  }\n\n  &:hover > * {\n    text-decoration: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bgColorStyle = function bgColorStyle(props) {
  return (0, _styledComponents.css)(_templateObject, props.bgColor || '#55acf1');
};

var colorStyle = function colorStyle(props) {
  return (0, _styledComponents.css)(_templateObject2, props.color || (props.bgColor ? (0, _polished.readableColor)((0, _polished.darken)(0.1, props.bgColor)) : (0, _polished.readableColor)((0, _polished.darken)(0.3, '#55acf1'))));
};

var borderRadiusStyle = function borderRadiusStyle(props) {
  var defaultRadius = '100px';
  var radius = props.borderRadius || defaultRadius;
  return (0, _styledComponents.css)(_templateObject3, props.round ? '50%' : radius);
};

var boxShadowStyle = function boxShadowStyle(props) {
  if (props.shadow) {
    switch (props.size) {
      case 'small':
        return (0, _styledComponents.css)(_templateObject4);
      case 'regular':
        return (0, _styledComponents.css)(_templateObject5);
      case 'large':
        return (0, _styledComponents.css)(_templateObject6);
      case 'x-large':
        return (0, _styledComponents.css)(_templateObject7);
      default:
        return null;
    }
  }
};

var bgImageStyle = function bgImageStyle(props) {
  var isImage = props.bgImage;
  var image = '\n    background-image: url(' + props.bgImage + ');\n    background-size: contain;\n  ';
  var isGradient = props.gradient || !!props.bgColorTo;
  var gradient = 'background-image: linear-gradient(to right, ' + (props.bgColor || '#55acf1') + ', ' + (props.bgColorTo || (0, _polished.lighten)(0.2, props.bgColor || '#55acf1')) + ')';

  return (0, _styledComponents.css)(_templateObject8, isImage ? image : isGradient ? gradient : 'background-image: none');
};

var widthStyle = function widthStyle(props) {
  return props.width ? (0, _styledComponents.css)(_templateObject9, props.width) : null;
};

var heightStyle = function heightStyle(props) {
  return props.height ? (0, _styledComponents.css)(_templateObject10, props.height) : null;
};

var marginStyle = function marginStyle(props) {
  return props.margin ? (0, _styledComponents.css)(_templateObject11, props.margin) : null;
};

var displayStyle = function displayStyle(props) {
  return props.block ? (0, _styledComponents.css)(_templateObject12) : null;
};

var disabledPressedStyles = function disabledPressedStyles(props) {
  return props.disabled ? props.simpleDisabled ? (0, _styledComponents.css)(_templateObject13) : props.pressedDisabled ? (0, _styledComponents.css)(_templateObject14) : (0, _styledComponents.css)(_templateObject15) : null;
};

var activeStyle = function activeStyle(props) {
  return props.active ? (0, _styledComponents.css)(_templateObject16) : null;
};

var roundStyle = function roundStyle(props) {
  if (props.round) {
    switch (props.size) {
      case 'small':
        return (0, _styledComponents.css)(_templateObject17, _index.fontSize.normal);
      case 'regular':
        return (0, _styledComponents.css)(_templateObject18, _index.fontSize.kilo);
      case 'large':
        return (0, _styledComponents.css)(_templateObject19, _index.fontSize.giga);
      case 'x-large':
        return (0, _styledComponents.css)(_templateObject20, _index.fontSize.tera);
      default:
        break;
    }
    return (0, _styledComponents.css)(_templateObject21, props.size || props.width || props.height, props.size || props.width || props.height);
  }
};

var sizeStyle = function sizeStyle(props) {
  switch (props.size) {
    case 'small':
      return (0, _styledComponents.css)(_templateObject22, function (props) {
        return !props.isIconButton ? "line-height: 25px" : null;
      });
    case 'regular':
      return (0, _styledComponents.css)(_templateObject23, function (props) {
        return !props.isIconButton ? "line-height: 37px" : null;
      });
    case 'large':
      return (0, _styledComponents.css)(_templateObject24, function (props) {
        return !props.hasIcon ? "line-height: 48px" : null;
      });
    case 'x-large':
      return (0, _styledComponents.css)(_templateObject25, function (props) {
        return !props.isIconButton ? "line-height: 70px" : null;
      });
    default:
      break;
  }
  return (0, _styledComponents.css)(_templateObject26, props.size || props.width || props.height, props.size || props.width || props.height);
};

var fontSizeStyle = function fontSizeStyle(props) {
  if (props.fontSize) {
    return (0, _styledComponents.css)(_templateObject27, props.fontSize);
  }
  switch (props.size) {
    case 'small':
      return (0, _styledComponents.css)(_templateObject28);
    case 'regular':
      return (0, _styledComponents.css)(_templateObject29);
    case 'large':
      return (0, _styledComponents.css)(_templateObject30);
    case 'x-large':
      return (0, _styledComponents.css)(_templateObject31);
  }
};

var fontStyle = function fontStyle(props) {
  return props.fontSize ? (0, _styledComponents.css)(_templateObject32, props.fontSize) : null;
};

var StyledButton = exports.StyledButton = _styledComponents2.default.button.attrs({
  className: 'StyledButton'
})(_templateObject33, function (props) {
  return props.hasIconAndText ? 'space-between' : 'center';
}, _index.fonts.nzk, _index.fontSize.milli, heightStyle, widthStyle, marginStyle, bgColorStyle, bgImageStyle, fontSizeStyle, boxShadowStyle, borderRadiusStyle, colorStyle, displayStyle, disabledPressedStyles, activeStyle, sizeStyle, roundStyle, fontStyle, function (props) {
  return props.isIconButton ? "center" : "";
}, function (props) {
  return props.lineHeight ? props.lineHeight : "";
}, function (props) {
  return props.height ? props.height : "";
}, function (props) {
  return props.columnView ? 'margin-top: 20px' : 'margin-left: 10px';
}, colorStyle);

var StyledButtonLink = exports.StyledButtonLink = StyledButton.withComponent('a');
var StyledButtonSpan = exports.StyledButtonSpan = StyledButton.withComponent('span');
var StyledButtonDiv = exports.StyledButtonDiv = StyledButton.withComponent('div');