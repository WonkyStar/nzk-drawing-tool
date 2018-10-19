'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('./Slider.styles');

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
  }

  _createClass(Slider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          lineWidth = _props.lineWidth,
          changeWidth = _props.changeWidth,
          opacity = _props.opacity,
          changeOpacity = _props.changeOpacity,
          lineColor = _props.lineColor;

      var isWidth = type === 'width';
      var isOpacity = type === 'opacity';

      return _react2.default.createElement(
        _Slider.Container,
        null,
        _react2.default.createElement(
          _Slider.CurrentNumber,
          { isOpacity: isOpacity },
          isWidth ? lineWidth : Math.round(opacity * 100) + '%'
        ),
        _react2.default.createElement(
          _Slider.Wrapper,
          null,
          _react2.default.createElement(
            _Slider.SliderWrapper,
            null,
            isWidth && _react2.default.createElement(_Slider.TriangleShape, null),
            isOpacity && _react2.default.createElement(_Slider.BarShape, null),
            _react2.default.createElement(_Slider.SliderInput, {
              type: 'range',
              min: isWidth ? '1' : '10',
              max: isWidth ? '35' : '100',
              value: isWidth ? lineWidth : opacity * 100,
              className: 'slider',
              id: 'myRange',
              onChange: isWidth ? changeWidth : changeOpacity,
              thumbColor: _index.colors.indigo
            })
          )
        ),
        _react2.default.createElement(
          _Slider.CurrentSettingWrapper,
          null,
          _react2.default.createElement(_Slider.CurrentSetting, {
            lineWidth: lineWidth,
            color: lineColor
          })
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;