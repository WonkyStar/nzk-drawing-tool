'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WidthSlider = require('./WidthSlider.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidthSlider = function (_Component) {
  _inherits(WidthSlider, _Component);

  function WidthSlider(props) {
    _classCallCheck(this, WidthSlider);

    return _possibleConstructorReturn(this, (WidthSlider.__proto__ || Object.getPrototypeOf(WidthSlider)).call(this, props));
  }

  _createClass(WidthSlider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          lineWidth = _props.lineWidth,
          changeWidth = _props.changeWidth,
          thumbColor = _props.thumbColor;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _WidthSlider.WidthNumber,
          null,
          lineWidth
        ),
        _react2.default.createElement(
          _WidthSlider.Wrapper,
          { height: height, width: width },
          _react2.default.createElement(
            _WidthSlider.SliderWrapper,
            { containerHeight: height },
            _react2.default.createElement(_WidthSlider.Shape, null),
            _react2.default.createElement(_WidthSlider.SliderInput, {
              type: 'range',
              min: '10',
              max: '70',
              value: lineWidth,
              className: 'slider',
              id: 'myRange',
              onChange: changeWidth,
              thumbColor: thumbColor
            })
          )
        )
      );
    }
  }]);

  return WidthSlider;
}(_react.Component);

WidthSlider.defaultProps = {
  height: 250,
  width: 70
};
exports.default = WidthSlider;