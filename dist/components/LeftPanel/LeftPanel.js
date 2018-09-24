'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _tools = require('../../tools');

var _RightPanel = require('../RightPanel/RightPanel.styles');

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttons = [{
  tool: _tools.Tools.Pencil,
  type: 'pencil',
  icon: 'rainbow'
}, {
  tool: 'reset',
  type: 'reset',
  icon: 'refresh'
},
// {
//   tool: Tools.Sticker,
//   type: 'sticker',
//   icon: 'sticker'
// },
{
  tool: _tools.Tools.Eraser,
  type: 'eraser',
  icon: 'eraser'
}, {
  tool: 'width',
  type: 'width',
  icon: 'paintbrush'
}, {
  tool: 'opacity',
  type: 'opacity',
  icon: 'opacity'
}];

var LeftPanel = function (_Component) {
  _inherits(LeftPanel, _Component);

  function LeftPanel(props) {
    _classCallCheck(this, LeftPanel);

    var _this = _possibleConstructorReturn(this, (LeftPanel.__proto__ || Object.getPrototypeOf(LeftPanel)).call(this, props));

    _this.isSectionActive = _this.isSectionActive.bind(_this);
    _this.renderLeftSection = _this.renderLeftSection.bind(_this);
    _this.getActiveButtonProps = _this.getActiveButtonProps.bind(_this);
    _this.getInactiveButtonProps = _this.getInactiveButtonProps.bind(_this);
    _this.getActiveIconProps = _this.getActiveIconProps.bind(_this);
    _this.getInactiveIconProps = _this.getInactiveIconProps.bind(_this);

    _this.state = {
      activeButton: 'pencil'
    };
    return _this;
  }

  _createClass(LeftPanel, [{
    key: 'getActiveButtonProps',
    value: function getActiveButtonProps() {
      return {
        bgColor: _index.colors.white,
        columnView: true,
        shadow: true,
        round: true,
        size: 'x-large'
      };
    }
  }, {
    key: 'getInactiveButtonProps',
    value: function getInactiveButtonProps() {
      return {
        bgColor: _index.colors.blue,
        columnView: true,
        shadow: true,
        round: true,
        size: 'large'
      };
    }
  }, {
    key: 'getActiveIconProps',
    value: function getActiveIconProps() {
      return {
        color: _index.colors.blue,
        size: 'x-large'
      };
    }
  }, {
    key: 'getInactiveIconProps',
    value: function getInactiveIconProps() {
      return {
        color: _index.colors.white,
        size: 'large'
      };
    }
  }, {
    key: 'renderLeftSection',
    value: function renderLeftSection() {
      var _this2 = this;

      var changeTool = this.props.changeTool;

      return buttons.map(function (button) {
        return _react2.default.createElement(
          _Button2.default,
          _extends({
            key: button.type,
            onClick: function onClick() {
              return changeTool(button.tool);
            }
          }, _this2.isSectionActive(button.type) ? _this2.getActiveButtonProps() : _this2.getInactiveButtonProps()),
          _react2.default.createElement(_Icon2.default, _extends({
            name: button.icon
          }, _this2.isSectionActive(button.type) ? _this2.getActiveIconProps() : _this2.getInactiveIconProps()))
        );
      });
    }
  }, {
    key: 'isSectionActive',
    value: function isSectionActive(section) {
      return this.props.selectedSection === section;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _RightPanel.Container,
        null,
        _react2.default.createElement(
          _RightPanel.Panel,
          { spaceBetween: true },
          this.renderLeftSection()
        )
      );
    }
  }]);

  return LeftPanel;
}(_react.Component);

exports.default = LeftPanel;