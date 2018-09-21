'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fabrictool = require('./fabrictool');

var _fabrictool2 = _interopRequireDefault(_fabrictool);

var _index = require('../index.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Eraser = function (_FabricCanvasTool) {
  _inherits(Eraser, _FabricCanvasTool);

  function Eraser() {
    _classCallCheck(this, Eraser);

    return _possibleConstructorReturn(this, (Eraser.__proto__ || Object.getPrototypeOf(Eraser)).apply(this, arguments));
  }

  _createClass(Eraser, [{
    key: 'configureCanvas',
    value: function configureCanvas(props) {
      this._canvas.isDrawingMode = true;
      this._canvas.freeDrawingBrush.width = props.eraserLineWidth;
      this._canvas.freeDrawingBrush.color = _index.colors.grey;
      this._canvas.on('path:created', function (e) {
        e.path.canvas.renderAll();
        // Destination out = erase
        e.path.globalCompositeOperation = 'destination-out';
        // This will not add an SVG CSS class, but at least will allow us to identify
        // erasures in object list
        e.path.setOptions({ class: 'erasure' });
      });
      this._canvas.renderAll();
    }
  }, {
    key: 'doMouseUp',
    value: function doMouseUp(event) {
      this._canvas.renderAll();
    }
  }]);

  return Eraser;
}(_fabrictool2.default);

exports.default = Eraser;