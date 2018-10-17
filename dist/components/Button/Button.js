'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var _props = this.props,
          disabled = _props.disabled,
          onClick = _props.onClick;


      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    }
  }, {
    key: 'isIconButton',
    value: function isIconButton() {
      var children = this.props.children;

      return children && children.type && children.type.displayName === 'Icon';
    }
  }, {
    key: 'isIconPresent',
    value: function isIconPresent() {
      var children = this.props.children;

      for (var child in children) {
        if (children[child] && children[child].type && children[child].type.displayName === 'Icon') {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'isTextPresent',
    value: function isTextPresent() {
      var children = this.props.children;

      for (var child in children) {
        if (typeof children[child] === 'string') {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getButton',
    value: function getButton(element, children) {
      var enhancedProps = _extends({}, this.props, {
        isIconButton: this.isIconButton(),
        hasIconAndText: this.isIconPresent() && this.isTextPresent()
      });

      switch (element) {
        case 'span':
          return _react2.default.createElement(
            _Button.StyledButtonSpan,
            enhancedProps,
            children
          );
        case 'button':
          return _react2.default.createElement(
            _Button.StyledButton,
            enhancedProps,
            children
          );
        case 'a':
          return _react2.default.createElement(
            _Button.StyledButtonLink,
            enhancedProps,
            children
          );
        default:
          return _react2.default.createElement(
            _Button.StyledButtonDiv,
            enhancedProps,
            children
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          disabled = _props2.disabled,
          element = _props2.element,
          props = _objectWithoutProperties(_props2, ['children', 'disabled', 'element']);

      var button = this.getButton(element, children);
      if (disabled) props.tabIndex = -1;
      return button;
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  shadow: _propTypes2.default.bool,
  gradient: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  bgColor: _propTypes2.default.any,
  rgbColor: _propTypes2.default.string,
  bgColorTo: _propTypes2.default.any,
  backgroundImage: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['button', 'reset', 'submit']),
  color: _propTypes2.default.any,
  size: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['small', 'regular', 'large', 'x-large']), _propTypes2.default.string]),
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  element: _propTypes2.default.string,
  children: _propTypes2.default.any,
  pressedDisabled: _propTypes2.default.bool
};
Button.defaultProps = {
  color: 'white',
  size: 'regular'
};
exports.default = Button;