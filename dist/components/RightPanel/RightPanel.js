'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCustomScrollbars = require('react-custom-scrollbars');

var _RightPanelStyles = require('./RightPanel.styles.js');

var _WidthSlider = require('../WidthSlider/WidthSlider');

var _WidthSlider2 = _interopRequireDefault(_WidthSlider);

var _OpacitySlider = require('../OpacitySlider/OpacitySlider');

var _OpacitySlider2 = _interopRequireDefault(_OpacitySlider);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightPanel = function (_Component) {
  _inherits(RightPanel, _Component);

  function RightPanel(props) {
    _classCallCheck(this, RightPanel);

    var _this = _possibleConstructorReturn(this, (RightPanel.__proto__ || Object.getPrototypeOf(RightPanel)).call(this, props));

    _this.state = {
      scrollbarRefAvailable: false,
      colorPanelScrollTop: 0
    };

    _this.renderRightSection = _this.renderRightSection.bind(_this);
    _this.handleColorPanelScroll = _this.handleColorPanelScroll.bind(_this);
    _this.renderResetSection = _this.renderResetSection.bind(_this);
    _this.renderWidthSlider = _this.renderWidthSlider.bind(_this);
    _this.renderOpacitySlider = _this.renderOpacitySlider.bind(_this);
    _this.renderColors = _this.renderColors.bind(_this);
    _this.isColorActive = _this.isColorActive.bind(_this);
    _this.scrollbars = _react2.default.createRef();
    _this.getInactiveButtonProps = _this.getInactiveButtonProps.bind(_this);
    _this.getInactiveIconProps = _this.getInactiveIconProps.bind(_this);
    return _this;
  }

  _createClass(RightPanel, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.scrollbarRefAvailable) {
        if (this.scrollbars.current) {
          this.setState({ scrollbarRefAvailable: true });
        }
      } else {
        if (!this.scrollbars.current) {
          this.setState({ scrollbarRefAvailable: false });
        }
      }
    }
  }, {
    key: 'renderRightSection',
    value: function renderRightSection() {
      if (this.props.selectedSection === 'pencil') {
        return this.renderColors();
      } else if (this.props.selectedSection === 'reset') {
        return this.renderResetSection();
      } else if (this.props.selectedSection === 'eraser') {
        return this.renderEraserSlider();
      } else if (this.props.selectedSection === 'width') {
        return this.renderWidthSlider();
      } else if (this.props.selectedSection === 'opacity') {
        return this.renderOpacitySlider();
      } else return;
    }
  }, {
    key: 'renderColors',
    value: function renderColors() {
      var _this2 = this;

      return this.props.colors.map(function (color, index) {
        return _react2.default.createElement(
          _Button2.default,
          {
            key: index,
            columnView: true,
            shadow: true,
            round: true,
            size: _this2.isColorActive(color.rgb) ? 'x-large' : 'large',
            bgColor: 'rgba(' + color.rgb + ', ' + _this2.props.opacity + ')',
            onClick: !color.isLocked ? function () {
              return [_this2.props.changeColor(color.rgb), _this2.setScrollHeight()];
            } : null
          },
          color.isLocked && _react2.default.createElement(_Icon2.default, { name: 'padlock', size: 'large', color: _index.colors.white })
        );
      });
    }
  }, {
    key: 'setScrollHeight',
    value: function setScrollHeight() {
      var scrollHeight = this.scrollbars.current.getScrollTop();
      this.scrollbars.current.scrollTop(scrollHeight);
      this.setState({
        colorPanelScrollTop: scrollHeight
      });
    }
  }, {
    key: 'isColorActive',
    value: function isColorActive(color) {
      return this.props.rgbColor === color;
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
    key: 'getInactiveIconProps',
    value: function getInactiveIconProps() {
      return {
        color: _index.colors.white,
        size: 'large'
      };
    }
  }, {
    key: 'renderResetSection',
    value: function renderResetSection() {
      var _this3 = this;

      var _props = this.props,
          undo = _props.undo,
          redo = _props.redo,
          clear = _props.clear;

      var resetButtons = [{
        onClick: function onClick() {
          return redo();
        },
        type: 'redo'
      }, {
        onClick: function onClick() {
          return undo();
        },
        type: 'undo'
      }, {
        onClick: function onClick() {
          return clear();
        },
        type: 'trash'
      }];
      return _react2.default.createElement(
        _RightPanelStyles.ButtonWrapper,
        null,
        resetButtons.map(function (button) {
          return _react2.default.createElement(
            _Button2.default,
            _extends({
              key: button.type,
              onClick: button.onClick
            }, _this3.getInactiveButtonProps()),
            _react2.default.createElement(_Icon2.default, _extends({ name: button.type }, _this3.getInactiveIconProps()))
          );
        })
      );
    }
  }, {
    key: 'renderEraserSlider',
    value: function renderEraserSlider() {
      var _props2 = this.props,
          changeEraserLineWidth = _props2.changeEraserLineWidth,
          eraserLineWidth = _props2.eraserLineWidth;

      return _react2.default.createElement(_WidthSlider2.default, {
        changeWidth: changeEraserLineWidth,
        lineWidth: eraserLineWidth,
        thumbColor: _index.colors.grey
      });
    }
  }, {
    key: 'renderWidthSlider',
    value: function renderWidthSlider() {
      var _props3 = this.props,
          changeLineWidth = _props3.changeLineWidth,
          lineWidth = _props3.lineWidth,
          lineColor = _props3.lineColor;

      return _react2.default.createElement(_WidthSlider2.default, {
        changeWidth: changeLineWidth,
        lineWidth: lineWidth,
        thumbColor: lineColor
      });
    }
  }, {
    key: 'renderOpacitySlider',
    value: function renderOpacitySlider() {
      var _props4 = this.props,
          changeOpacity = _props4.changeOpacity,
          opacity = _props4.opacity,
          lineColor = _props4.lineColor;

      return _react2.default.createElement(_OpacitySlider2.default, {
        changeOpacity: changeOpacity,
        opacity: opacity,
        lineColor: lineColor
      });
    }
  }, {
    key: 'handleColorPanelScroll',
    value: function handleColorPanelScroll() {
      return this.scrollbars.current.scrollTop(this.state.colorPanelScrollTop);
    }
  }, {
    key: 'render',
    value: function render() {
      var selectedSection = this.props.selectedSection;

      return _react2.default.createElement(
        _RightPanelStyles.Container,
        null,
        selectedSection === 'pencil' ? _react2.default.createElement(
          _reactCustomScrollbars.Scrollbars,
          {
            ref: this.scrollbars,
            style: {
              height: '390px', // this should become 310px on phoneMaxWidth
              width: '100%',
              borderRadius: '70px',
              zIndex: '0'
            }
          },
          _react2.default.createElement(
            _RightPanelStyles.Panel,
            null,
            this.renderRightSection()
          ),
          this.state.scrollbarRefAvailable && this.handleColorPanelScroll()
        ) : _react2.default.createElement(
          _RightPanelStyles.Panel,
          null,
          this.renderRightSection()
        )
      );
    }
  }]);

  return RightPanel;
}(_react.Component);

exports.default = RightPanel;