'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fabrictool = require('./fabrictool');

var _fabrictool2 = _interopRequireDefault(_fabrictool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fabric = require('fabric').fabric;

var Sticker = function (_FabricCanvasTool) {
  _inherits(Sticker, _FabricCanvasTool);

  function Sticker() {
    _classCallCheck(this, Sticker);

    return _possibleConstructorReturn(this, (Sticker.__proto__ || Object.getPrototypeOf(Sticker)).apply(this, arguments));
  }

  _createClass(Sticker, [{
    key: 'configureCanvas',
    value: function configureCanvas(props) {
      var canvas = this._canvas;
      canvas.isDrawingMode = canvas.selection = false;
      canvas.forEachObject(function (o) {
        return o.selectable = o.evented = false;
      });
    }
  }, {
    key: 'doMouseDown',
    value: function doMouseDown(event) {
      fabric.Sprite.fromURL('http://fabricjs.com/assets/sprite.png', this.createSprite(event.pointer.x, event.pointer.y));
      var canvas = this._canvas;
      var render = function render() {
        canvas.renderAll();
        fabric.util.requestAnimFrame(render);
      };
      fabric.util.requestAnimFrame(render);
    }
  }, {
    key: 'createSprite',
    value: function createSprite(i, j) {
      var canvas = this._canvas;
      return function (sprite) {
        sprite.set({
          left: i - sprite.width / 2,
          top: j - sprite.height / 2
        });
        canvas.add(sprite);
        sprite.play();
      };
    }
  }]);

  return Sticker;
}(_fabrictool2.default);

exports.default = Sticker;


fabric.Sprite = fabric.util.createClass(fabric.Image, {
  type: 'sprite',
  spriteWidth: 50,
  spriteHeight: 72,
  spriteIndex: 0,

  initialize: function initialize(element, options) {
    options || (options = {});
    options.width = this.spriteWidth;
    options.height = this.spriteHeight;

    this.callSuper('initialize', element, options);
    this.createTmpCanvas();
    this.createSpriteImages();
  },

  createTmpCanvas: function createTmpCanvas() {
    this.tmpCanvasEl = fabric.util.createCanvasElement();
    this.tmpCanvasEl.width = this.spriteWidth || this.width;
    this.tmpCanvasEl.height = this.spriteHeight || this.height;
  },

  createSpriteImages: function createSpriteImages() {
    this.spriteImages = [];
    var steps = this._element.width / this.spriteWidth;
    for (var i = 0; i < steps; i++) {
      this.createSpriteImage(i);
    }
  },

  createSpriteImage: function createSpriteImage(i) {
    var tmpCtx = this.tmpCanvasEl.getContext('2d');
    tmpCtx.clearRect(0, 0, this.tmpCanvasEl.width, this.tmpCanvasEl.height);
    tmpCtx.drawImage(this._element, -i * this.spriteWidth, 0);

    var dataURL = this.tmpCanvasEl.toDataURL('image/png');
    var tmpImg = fabric.util.createImage();
    tmpImg.src = dataURL;

    this.spriteImages.push(tmpImg);
  },

  _render: function _render(ctx) {
    ctx.drawImage(this.spriteImages[this.spriteIndex], -this.width / 2, -this.height / 2);
  },

  play: function play() {
    var _this = this;
    this.animInterval = setInterval(function () {
      _this.onPlay && _this.onPlay();

      _this.spriteIndex++;
      if (_this.spriteIndex === _this.spriteImages.length) {
        _this.spriteIndex = 0;
      }
    }, 100);
  },
  stop: function stop() {
    clearInterval(this.animInterval);
  }
});

fabric.Sprite.fromURL = function (url, callback, imgOptions) {
  fabric.util.loadImage(url, function (img) {
    callback(new fabric.Sprite(img, imgOptions));
  }, null, { crossOrigin: 'Anonymous' });
};

fabric.Sprite.async = true;