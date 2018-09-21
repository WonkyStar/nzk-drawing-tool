'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var files = require.context('!svg-sprite-loader!../../assets/icons', false, /\.svg$/);
files.keys().forEach(files);

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
  }

  _createClass(Icon, [{
    key: 'getSize',
    value: function getSize(size) {
      switch (size) {
        case 'small':
          return '12px';
        case 'regular':
          return '18px';
        case 'large':
          return '24px';
        case 'x-large':
          return '37px';
        default:
          return size;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          nameTo = _props.nameTo,
          color = _props.color,
          glow = _props.glow,
          size = _props.size,
          active = _props.active,
          children = _props.children,
          clickThrough = _props.clickThrough,
          position = _props.position,
          props = _objectWithoutProperties(_props, ['name', 'nameTo', 'color', 'glow', 'size', 'active', 'children', 'clickThrough', 'position']);

      var opacity = active === false ? 0 : 1;

      return _react2.default.createElement(
        'div',
        {
          className: this.props.className,
          style: {
            filter: glow ? 'drop-shadow(0 0 5px ' + color + ')' : 'none',
            position: position || 'relative',
            height: this.getSize(size),
            width: this.getSize(size),
            pointerEvents: 'none'
          }
        },
        _react2.default.createElement(
          'svg',
          {
            width: this.getSize(size),
            height: this.getSize(size),
            fill: color,
            style: {
              pointerEvents: clickThrough ? 'none' : '',
              opacity: opacity,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) ' + (this.props.flipped ? 'scale(-1)' : '')
            }
          },
          _react2.default.createElement('use', { xlinkHref: '#' + name })
        )
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  name: _propTypes2.default.string,
  nameTo: _propTypes2.default.string,
  color: _propTypes2.default.any,
  size: _propTypes2.default.string,
  morph: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  onClick: _propTypes2.default.func
};
Icon.defaultProps = {
  size: 'regular'
};
Icon.displayName = 'Icon';
exports.default = Icon;