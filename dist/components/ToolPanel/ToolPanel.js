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

var _Slider = require('../Slider/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _tools = require('../../tools');

var _ColourPanel = require('../ColourPanel/ColourPanel.styles');

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttons = [{
  onClick: function onClick(props) {
    return props.undo();
  },
  type: 'undo',
  icon: 'undo'
}, {
  onClick: function onClick(props) {
    return props.redo();
  },
  type: 'redo',
  icon: 'redo'
}, {
  onClick: function onClick(props) {
    return props.clear();
  },
  type: 'trash',
  icon: 'trash'
}, {
  onClick: function onClick(props) {},
  type: 'sticker',
  icon: 'sticker'
}, {
  tool: _tools.Tools.Eraser,
  type: 'eraser',
  icon: 'eraser'
}, {
  tool: 'width',
  type: 'width',
  icon: 'paintbrush',
  coloured: true
}, {
  tool: 'opacity',
  type: 'opacity',
  icon: 'opacity',
  coloured: true
}];

var ToolPanel = function (_Component) {
  _inherits(ToolPanel, _Component);

  function ToolPanel(props) {
    _classCallCheck(this, ToolPanel);

    var _this = _possibleConstructorReturn(this, (ToolPanel.__proto__ || Object.getPrototypeOf(ToolPanel)).call(this, props));

    _this.isSectionActive = _this.isSectionActive.bind(_this);
    _this.getActiveButtonProps = _this.getActiveButtonProps.bind(_this);
    _this.getInactiveButtonProps = _this.getInactiveButtonProps.bind(_this);
    _this.getActiveIconProps = _this.getActiveIconProps.bind(_this);
    _this.getInactiveIconProps = _this.getInactiveIconProps.bind(_this);

    _this.state = {
      activeButton: 'pencil'
    };
    return _this;
  }

  _createClass(ToolPanel, [{
    key: 'getActiveButtonProps',
    value: function getActiveButtonProps(rgbColor, coloured) {
      return {
        bgColor: coloured ? 'rgb(' + rgbColor + ')' : _index.colors.indigo,
        rgbColor: coloured ? rgbColor : '45, 31, 96',
        columnView: true,
        shadow: true,
        round: true,
        size: 'large'
      };
    }
  }, {
    key: 'getInactiveButtonProps',
    value: function getInactiveButtonProps() {
      return {
        bgColor: _index.colors.grey,
        rgbColor: '171, 171, 171',
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
        color: _index.colors.white,
        size: 'large'
      };
    }
  }, {
    key: 'getInactiveIconProps',
    value: function getInactiveIconProps(rgbColor, coloured) {
      return {
        color: coloured ? 'rgb(' + rgbColor + ')' : _index.colors.indigo,
        size: 'large'
      };
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this2 = this;

      var _props = this.props,
          changeTool = _props.changeTool,
          rgbColor = _props.rgbColor;

      return buttons.map(function (button) {
        return _react2.default.createElement(
          _Button2.default,
          _extends({
            key: button.type,
            onClick: function onClick() {
              return button.tool ? changeTool(button.tool) : button.onClick(_this2.props);
            }
          }, _this2.isSectionActive(button.type) ? _this2.getActiveButtonProps(rgbColor, button.coloured) : _this2.getInactiveButtonProps()),
          _react2.default.createElement(_Icon2.default, _extends({
            name: button.icon
          }, _this2.isSectionActive(button.type) ? _this2.getActiveIconProps() : _this2.getInactiveIconProps(rgbColor, button.coloured)))
        );
      });
    }
  }, {
    key: 'renderSlider',
    value: function renderSlider() {
      if (this.props.selectedSection === 'eraser') {
        return this.renderEraserSlider();
      } else if (this.props.selectedSection === 'width') {
        return this.renderWidthSlider();
      } else if (this.props.selectedSection === 'opacity') {
        return this.renderOpacitySlider();
      } else return null;
    }
  }, {
    key: 'renderEraserSlider',
    value: function renderEraserSlider() {
      var _props2 = this.props,
          changeEraserLineWidth = _props2.changeEraserLineWidth,
          eraserLineWidth = _props2.eraserLineWidth;

      return _react2.default.createElement(_Slider2.default, {
        type: 'width',
        changeWidth: changeEraserLineWidth,
        lineWidth: eraserLineWidth
      });
    }
  }, {
    key: 'renderWidthSlider',
    value: function renderWidthSlider() {
      var _props3 = this.props,
          changeLineWidth = _props3.changeLineWidth,
          lineWidth = _props3.lineWidth,
          lineColor = _props3.lineColor;

      return _react2.default.createElement(_Slider2.default, {
        type: 'width',
        changeWidth: changeLineWidth,
        lineWidth: lineWidth,
        lineColor: lineColor
      });
    }
  }, {
    key: 'renderOpacitySlider',
    value: function renderOpacitySlider() {
      var _props4 = this.props,
          changeOpacity = _props4.changeOpacity,
          opacity = _props4.opacity,
          lineWidth = _props4.lineWidth,
          lineColor = _props4.lineColor;

      return _react2.default.createElement(_Slider2.default, {
        type: 'opacity',
        changeOpacity: changeOpacity,
        opacity: opacity,
        lineWidth: lineWidth,
        lineColor: lineColor
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
        _ColourPanel.Container,
        null,
        _react2.default.createElement(
          _ColourPanel.Panel,
          { spaceBetween: true },
          this.renderButtons(),
          this.renderSlider()
        )
      );
    }
  }]);

  return ToolPanel;
}(_react.Component);

exports.default = ToolPanel;