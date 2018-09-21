'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FabricCanvasTool = function () {
  function FabricCanvasTool(canvas) {
    _classCallCheck(this, FabricCanvasTool);

    this._canvas = canvas;
    this._context = canvas.getContext('2d');
  }

  _createClass(FabricCanvasTool, [{
    key: 'configureCanvas',
    value: function configureCanvas(props) {}
  }, {
    key: 'doMouseUp',
    value: function doMouseUp(event) {}
  }, {
    key: 'doMouseDown',
    value: function doMouseDown(event) {}
  }, {
    key: 'doMouseMove',
    value: function doMouseMove(event) {}
  }, {
    key: 'doMouseOut',
    value: function doMouseOut(event) {}
  }]);

  return FabricCanvasTool;
}();

exports.default = FabricCanvasTool;