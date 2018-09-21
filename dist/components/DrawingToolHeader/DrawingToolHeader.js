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

var _DrawingToolHeader = require('./DrawingToolHeader.styles');

var _index = require('../../index.styles');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawingToolHeader = function (_Component) {
  _inherits(DrawingToolHeader, _Component);

  function DrawingToolHeader(props) {
    _classCallCheck(this, DrawingToolHeader);

    var _this = _possibleConstructorReturn(this, (DrawingToolHeader.__proto__ || Object.getPrototypeOf(DrawingToolHeader)).call(this, props));

    _this.renderTextHeader = _this.renderTextHeader.bind(_this);
    _this.renderIconHeader = _this.renderIconHeader.bind(_this);
    _this.getIconHeaderButtonProps = _this.getIconHeaderButtonProps.bind(_this);
    _this.getTextHeaderButtonProps = _this.getTextHeaderButtonProps.bind(_this);
    return _this;
  }

  _createClass(DrawingToolHeader, [{
    key: 'getIconHeaderButtonProps',
    value: function getIconHeaderButtonProps() {
      return {
        bgColor: _index.colors.translucentWhite,
        size: 'x-large',
        round: true
      };
    }
  }, {
    key: 'renderIconHeader',
    value: function renderIconHeader() {
      var _props = this.props,
          headerStyle = _props.headerStyle,
          headerTitle = _props.headerTitle,
          width = _props.width,
          onSave = _props.onSave,
          onBack = _props.onBack;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _DrawingToolHeader.ButtonContainer,
          null,
          _react2.default.createElement(
            _Button2.default,
            _extends({
              onClick: function onClick() {}
            }, this.getIconHeaderButtonProps()),
            _react2.default.createElement(_Icon2.default, { name: 'left', size: 'x-large', color: _index.colors.white })
          )
        ),
        _react2.default.createElement(
          _DrawingToolHeader.Title,
          { headerStyle: headerStyle, width: width },
          headerTitle
        ),
        _react2.default.createElement(
          _DrawingToolHeader.ButtonContainer,
          null,
          _react2.default.createElement(
            _Button2.default,
            _extends({
              onClick: function onClick() {}
            }, this.getIconHeaderButtonProps()),
            _react2.default.createElement(_Icon2.default, { name: 'right', size: 'x-large', color: _index.colors.white })
          )
        )
      );
    }
  }, {
    key: 'getTextHeaderButtonProps',
    value: function getTextHeaderButtonProps() {
      return {
        size: 'large',
        color: _index.colors.white,
        shadow: true
      };
    }
  }, {
    key: 'renderTextHeader',
    value: function renderTextHeader() {
      var _props2 = this.props,
          headerStyle = _props2.headerStyle,
          headerTitle = _props2.headerTitle,
          width = _props2.width,
          onSave = _props2.onSave,
          onBack = _props2.onBack;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _DrawingToolHeader.ButtonContainer,
          null,
          _react2.default.createElement(
            _Button2.default,
            _extends({
              onClick: function onClick() {
                return onBack();
              }
            }, this.getTextHeaderButtonProps()),
            'Back'
          )
        ),
        _react2.default.createElement(
          _DrawingToolHeader.Title,
          { headerStyle: headerStyle, width: width },
          headerTitle,
          _react2.default.createElement(
            _DrawingToolHeader.QuestionButton,
            { round: true, size: 'small', bgColor: _index.colors.orange, shadow: true },
            _react2.default.createElement(_Icon2.default, { name: 'help', size: 'small' })
          )
        ),
        _react2.default.createElement(
          _DrawingToolHeader.ButtonContainer,
          null,
          _react2.default.createElement(
            _Button2.default,
            _extends({
              onClick: function onClick() {
                return onSave();
              }
            }, this.getTextHeaderButtonProps()),
            'Save'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          headerStyle = _props3.headerStyle,
          layoutStyle = _props3.layoutStyle;

      return _react2.default.createElement(
        _DrawingToolHeader.Container,
        { layoutStyle: layoutStyle },
        headerStyle === 'iconButtons' ? this.renderIconHeader() : this.renderTextHeader()
      );
    }
  }]);

  return DrawingToolHeader;
}(_react.Component);

DrawingToolHeader.propTypes = {
  headerStyle: _propTypes2.default.string,
  headerTitle: _propTypes2.default.string,
  onSave: _propTypes2.default.func,
  onBack: _propTypes2.default.func
};
exports.default = DrawingToolHeader;