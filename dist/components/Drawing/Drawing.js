'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawings = require('./Drawings.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawing = function (_Component) {
  _inherits(Drawing, _Component);

  function Drawing(props) {
    _classCallCheck(this, Drawing);

    var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));

    _this.isPainting = false;
    _this.userStrokeStyle = '#EE92C2';
    _this.guestStrokeStyle = '#F0C987';
    _this.line = [];
    _this.prevPos = { offsetX: 0, offsetY: 0 };

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.endPaintEvent = _this.endPaintEvent.bind(_this);
    _this.resizeCanvas = _this.resizeCanvas.bind(_this);
    return _this;
  }
  // Different stroke styles to be used for user and guest


  _createClass(Drawing, [{
    key: 'onMouseDown',
    value: function onMouseDown(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var offsetX = nativeEvent.offsetX,
          offsetY = nativeEvent.offsetY;

      this.isPainting = true;
      this.prevPos = { offsetX: offsetX, offsetY: offsetY };
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(_ref2) {
      var nativeEvent = _ref2.nativeEvent;

      if (this.isPainting) {
        var offsetX = nativeEvent.offsetX,
            offsetY = nativeEvent.offsetY;

        var offSetData = { offsetX: offsetX, offsetY: offsetY
          // Set the start and stop position of the paint event.
        };var positionData = {
          start: _extends({}, this.prevPos),
          stop: _extends({}, offSetData)
          // Add the position to the line array
        };this.line = this.line.concat(positionData);
        this.paint(this.prevPos, offSetData, this.userStrokeStyle);
      }
    }
  }, {
    key: 'endPaintEvent',
    value: function endPaintEvent() {
      if (this.isPainting) {
        this.isPainting = false;
      }
    }
  }, {
    key: 'paint',
    value: function paint(prevPos, currPos, strokeStyle) {
      var offsetX = currPos.offsetX,
          offsetY = currPos.offsetY;
      var x = prevPos.offsetX,
          y = prevPos.offsetY;
      var mode = this.props.mode;


      if (mode === 'pen') {
        this.ctx.globalCompositeOperation = 'source-over';
      }
      if (mode === 'eraser') {
        this.ctx.globalCompositeOperation = 'destination-out';
      }

      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeStyle;
      // Move the the prevPosition of the mouse
      this.ctx.moveTo(x, y);
      // Draw a line to the current position of the mouse
      this.ctx.lineTo(offsetX, offsetY);
      // Visualize the line using the strokeStyle
      this.ctx.stroke();
      this.prevPos = { offsetX: offsetX, offsetY: offsetY };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Here we set up the properties of the canvas element. 
      this.canvas.width = window.innerWidth * 0.8;
      this.canvas.height = window.innerHeight;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 10;

      window.addEventListener('resize', this.resizeCanvas);
    }
  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      var temp_cnvs = document.createElement('canvas');
      var temp_cntx = temp_cnvs.getContext('2d');
      // set it to the new width & height and draw the current canvas data into it // 
      temp_cnvs.width = window.innerWidth * 0.8;
      temp_cnvs.height = window.innerHeight;
      temp_cnvs.background = 'transparent';
      temp_cntx.fillStyle = 'transparent';
      temp_cntx.fillRect(0, 0, window.innerWidth * 0.8, window.innerHeight);
      temp_cntx.drawImage(this.canvas, 0, 0);
      // resize & clear the original canvas and copy back in the cached pixel data //
      this.canvas.width = window.innerWidth * 0.8;
      this.canvas.height = window.innerHeight;
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = this.ctx.lineJoin = 'round';
      this.ctx.drawImage(temp_cnvs, 0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Drawings.CanvasContainer,
        null,
        _react2.default.createElement('canvas', {
          // We use the ref attribute to get direct access to the canvas element. 
          ref: function ref(_ref3) {
            return _this2.canvas = _ref3;
          },
          onMouseDown: this.onMouseDown,
          onMouseLeave: this.endPaintEvent,
          onMouseUp: this.endPaintEvent,
          onMouseMove: this.onMouseMove
        })
      );
    }
  }]);

  return Drawing;
}(_react.Component);

exports.default = Drawing;