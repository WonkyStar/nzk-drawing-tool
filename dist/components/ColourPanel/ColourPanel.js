'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColourPanelStyles = require('./ColourPanel.styles.js');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _index = require('../../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sounds = {
  brown: new Audio(require('../../assets/sounds/brown.mp3')),
  purple: new Audio(require('../../assets/sounds/purple.mp3')),
  pink: new Audio(require('../../assets/sounds/pink.mp3')),
  red: new Audio(require('../../assets/sounds/red.mp3')),
  orange: new Audio(require('../../assets/sounds/orange.mp3')),
  yellow: new Audio(require('../../assets/sounds/yellow.mp3')),
  green: new Audio(require('../../assets/sounds/green.mp3')),
  blue: new Audio(require('../../assets/sounds/blue.mp3')),
  white: new Audio(require('../../assets/sounds/white.mp3')),
  gray: new Audio(require('../../assets/sounds/gray.mp3')),
  black: new Audio(require('../../assets/sounds/black.mp3'))
};

var ColourPanel = function (_Component) {
  _inherits(ColourPanel, _Component);

  function ColourPanel() {
    _classCallCheck(this, ColourPanel);

    return _possibleConstructorReturn(this, (ColourPanel.__proto__ || Object.getPrototypeOf(ColourPanel)).apply(this, arguments));
  }

  _createClass(ColourPanel, [{
    key: 'playSound',
    value: function playSound(colorAlias) {
      var audio = sounds[colorAlias];
      audio.play();
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
            size: 'large',
            bgColor: 'rgba(' + color.rgb + ', 1)',
            rgbColor: color.rgb,
            onClick: !color.isLocked ? function () {
              _this2.props.changeColor(color.rgb);
              _this2.props.resetToPencil();
              _this2.playSound(color.alias);
            } : null
          },
          color.isLocked && _react2.default.createElement(_Icon2.default, { name: 'padlock', size: 'large', color: _index.colors.white })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedSection = _props.selectedSection,
          windowWidth = _props.windowWidth;

      return _react2.default.createElement(
        _ColourPanelStyles.Container,
        null,
        _react2.default.createElement(
          _ColourPanelStyles.Panel,
          null,
          this.renderColors()
        )
      );
    }
  }]);

  return ColourPanel;
}(_react.Component);

exports.default = ColourPanel;