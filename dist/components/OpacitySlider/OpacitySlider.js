'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OpacitySlider = require('./OpacitySlider.styles');

var _WidthSlider = require('../WidthSlider/WidthSlider.styles');

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpacitySlider = function (_Component) {
  _inherits(OpacitySlider, _Component);

  function OpacitySlider(props) {
    _classCallCheck(this, OpacitySlider);

    return _possibleConstructorReturn(this, (OpacitySlider.__proto__ || Object.getPrototypeOf(OpacitySlider)).call(this, props));
  }

  _createClass(OpacitySlider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          opacity = _props.opacity,
          changeOpacity = _props.changeOpacity,
          thumbColor = _props.thumbColor,
          lineColor = _props.lineColor;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _WidthSlider.Wrapper,
          { height: height, width: width },
          _react2.default.createElement(
            _OpacitySlider.SliderWrapper,
            null,
            _react2.default.createElement(_OpacitySlider.Shape, null),
            _react2.default.createElement(_OpacitySlider.SliderInput, {
              type: 'range',
              min: '5',
              max: '10',
              value: opacity * 10,
              className: 'slider',
              id: 'myRange',
              onChange: changeOpacity,
              thumbColor: thumbColor
            })
          )
        ),
        _react2.default.createElement(_OpacitySlider.OpacityCircle, { lineColor: lineColor })
      );
    }
  }]);

  return OpacitySlider;
}(_react.Component);

OpacitySlider.defaultProps = {
  height: 275,
  width: 30,
  thumbColor: _index.colors.yellow
};
exports.default = OpacitySlider;