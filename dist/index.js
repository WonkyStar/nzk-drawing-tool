'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.styles');

var _DrawingToolHeader = require('./components/DrawingToolHeader/DrawingToolHeader');

var _DrawingToolHeader2 = _interopRequireDefault(_DrawingToolHeader);

var _LeftPanel = require('./components/LeftPanel/LeftPanel');

var _LeftPanel2 = _interopRequireDefault(_LeftPanel);

var _RightPanel = require('./components/RightPanel/RightPanel');

var _RightPanel2 = _interopRequireDefault(_RightPanel);

var _index2 = require('./tools/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = [{
  rgb: '255, 255, 255',
  isLocked: false
}, {
  rgb: '255, 145, 0',
  isLocked: false
}, {
  rgb: '255, 236, 0',
  isLocked: false
}, {
  rgb: '193, 255, 0',
  isLocked: false
}, {
  rgb: '0, 183, 255',
  isLocked: false
}, {
  rgb: '174, 0, 255',
  isLocked: false
}, {
  rgb: '255, 0, 152',
  isLocked: false
}, {
  rgb: '104, 59, 17',
  isLocked: false
}, {
  rgb: '171, 171, 171',
  isLocked: false
}, {
  rgb: '0, 0, 0',
  isLocked: false
}];

var DrawingTool = function (_Component) {
  _inherits(DrawingTool, _Component);

  function DrawingTool(props) {
    _classCallCheck(this, DrawingTool);

    var _this = _possibleConstructorReturn(this, (DrawingTool.__proto__ || Object.getPrototypeOf(DrawingTool)).call(this, props));

    _this._selectTool = function (event, index, value) {
      _this.setState({
        tool: value
      });
    };

    _this._save = function () {
      var imageJSON = _this._sketch.toJSON();
      // imageJSON now contains an 'objects' key which is an array of strokes
      if (imageJSON.objects.length >= 5) {
        var imagePNG = _this._sketch.toDataURL();
        // imagePNG is a long image string (including static sticker snapshots if stickers have been used)
        // mutation to upload imagePNG and send to server
        _this.setState({ drawingSnapshot: imagePNG });
      } else {
        // open popup asking to add more detail to the drawing before saving
        console.error("Drawing needs more detail before saving!");
      }
    };

    _this._undo = function () {
      _this._sketch.undo();
      _this.setState({
        canUndo: _this._sketch.canUndo(),
        canRedo: _this._sketch.canRedo()
      });
      _this.updateSpriteNumber();
    };

    _this._redo = function () {
      _this._sketch.redo();
      _this.setState({
        canUndo: _this._sketch.canUndo(),
        canRedo: _this._sketch.canRedo()
      });
      _this.updateSpriteNumber();
    };

    _this._clear = function () {
      _this._sketch.clear();
      _this._sketch.setBackgroundFromDataUrl('');
      _this.setState({
        controlledValue: null,
        canUndo: _this._sketch.canUndo(),
        canRedo: _this._sketch.canRedo(),
        drawingSnapshot: [],
        spriteNumber: 0
      });
    };

    _this._onSketchChange = function () {
      _this.updateSpriteNumber();
      var prev = _this.state.canUndo;
      var now = _this._sketch.canUndo();
      if (prev !== now) {
        _this.setState({ canUndo: now });
      }
    };

    _this._onBackgroundImageDrop = function (accepted /*, rejected*/) {
      if (accepted && accepted.length > 0) {
        var sketch = _this._sketch;
        var reader = new FileReader();
        var _this$state = _this.state,
            stretched = _this$state.stretched,
            stretchedX = _this$state.stretchedX,
            stretchedY = _this$state.stretchedY,
            originX = _this$state.originX,
            originY = _this$state.originY;

        reader.addEventListener('load', function () {
          return sketch.setBackgroundFromDataUrl(reader.result, {
            stretched: stretched,
            stretchedX: stretchedX,
            stretchedY: stretchedY,
            originX: originX,
            originY: originY
          });
        }, false);
        reader.readAsDataURL(accepted[0]);
      }
    };

    _this.componentDidMount = function () {
      _this.updateWindowDimensions();
      window.addEventListener('resize', _this.updateWindowDimensions)
      /*eslint-disable no-console*/
      ;(function (console) {
        console.save = function (data, filename) {
          if (!data) {
            console.error('Console.save: No data');
            return;
          }
          if (!filename) filename = 'console.json';
          if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            data = JSON.stringify(data, undefined, 4);
          }
          var blob = new Blob([data], { type: 'text/json' }),
              e = document.createEvent('MouseEvents'),
              a = document.createElement('a');
          a.download = filename;
          a.href = window.URL.createObjectURL(blob);
          a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
          e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          a.dispatchEvent(e);
        };
      })(console);

      _this.setState({
        lineColor: 'rgba(' + _this.state.rgbColor + ', ' + _this.state.opacity + ')'
      });
    };

    _this.state = {
      lineWidth: 30,
      eraserLineWidth: 30,
      rgbColor: '255, 255, 255',
      backgroundColor: 'transparent',
      tool: _index2.Tools.Pencil,
      drawings: [],
      canUndo: false,
      canRedo: false,
      sketchWidth: null,
      sketchHeight: null,
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: 'left',
      originY: 'top',
      selectedSection: 'pencil',
      opacity: 1,
      spriteNumber: 0
    };

    _this.changeTool = _this.changeTool.bind(_this);
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.updateSpriteNumber = _this.updateSpriteNumber.bind(_this);
    _this.changeLineWidth = _this.changeLineWidth.bind(_this);
    _this.changeEraserLineWidth = _this.changeEraserLineWidth.bind(_this);
    _this.changeColor = _this.changeColor.bind(_this);
    _this.changeOpacity = _this.changeOpacity.bind(_this);
    return _this;
  }

  _createClass(DrawingTool, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      var _props = this.props,
          aspectRatioWidth = _props.aspectRatioWidth,
          aspectRatioHeight = _props.aspectRatioHeight;
      // maxHeight is the full height minus the drawing tool header

      var maxHeight = window.innerHeight - 100;
      // maxWidth is the maxHeight scaled to the correct aspect ratio
      var maxWidth = maxHeight * (aspectRatioWidth / aspectRatioHeight);
      // resize according to maxWidth for tall screens e.g. iPad portrait
      if (maxWidth > window.innerWidth - 220) {
        maxWidth = window.innerWidth - 240;
        maxHeight = maxWidth / aspectRatioWidth * aspectRatioHeight;
      }
      this.setState({
        sketchWidth: maxWidth,
        sketchHeight: maxHeight
      });
    }
  }, {
    key: 'updateSpriteNumber',
    value: function updateSpriteNumber() {
      var _this2 = this;

      var sketchObjects = this._sketch.toObject().objects;
      sketchObjects.reduce(function (acc, item) {
        if (item.type === 'sprite') {
          acc += 1;
          _this2.setState({ spriteNumber: acc });
        }
        return acc;
      }, 0);
    }
  }, {
    key: 'changeTool',
    value: function changeTool(section) {
      if (section === 'pencil' || section === 'eraser' || section === 'sticker') {
        this.setState({
          tool: section,
          selectedSection: section
        });
      } else {
        this.setState({
          selectedSection: section
        });
      }
    }
  }, {
    key: 'changeColor',
    value: function changeColor(color) {
      this.setState({
        rgbColor: color,
        lineColor: 'rgba(' + color + ', ' + this.state.opacity + ')'
      });
    }
  }, {
    key: 'changeLineWidth',
    value: function changeLineWidth(e) {
      this.setState({
        lineWidth: Number(e.target.value)
      });
    }
  }, {
    key: 'changeEraserLineWidth',
    value: function changeEraserLineWidth(e) {
      this.setState({
        eraserLineWidth: Number(e.target.value)
      });
    }
  }, {
    key: 'changeOpacity',
    value: function changeOpacity(e) {
      this.setState({
        opacity: Number(e.target.value / 10)
      });
      this.setState({
        lineColor: 'rgba(' + this.state.rgbColor + ', ' + this.state.opacity + ')'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          headerStyle = _props2.headerStyle,
          headerTitle = _props2.headerTitle,
          canvasBg = _props2.canvasBg,
          colors = _props2.colors,
          layoutStyle = _props2.layoutStyle,
          onBack = _props2.onBack;

      return _react2.default.createElement(
        _index.Container,
        null,
        _react2.default.createElement(_DrawingToolHeader2.default, {
          width: this.state.sketchWidth,
          headerStyle: headerStyle,
          headerTitle: headerTitle,
          onSave: this._save,
          onBack: onBack,
          layoutStyle: layoutStyle
        }),
        _react2.default.createElement(
          _index.SketchContainer,
          { layoutStyle: layoutStyle },
          _react2.default.createElement(
            _index.PanelContainer,
            null,
            _react2.default.createElement(_LeftPanel2.default, {
              changeTool: this.changeTool,
              selectedSection: this.state.selectedSection
            })
          ),
          _react2.default.createElement(
            _index.CanvasBackground,
            {
              canvasBg: canvasBg,
              height: this.state.sketchHeight,
              width: this.state.sketchWidth
            },
            _react2.default.createElement(_index2.SketchField, {
              name: 'sketch',
              className: 'canvas-area',
              ref: function ref(c) {
                return _this3._sketch = c;
              },
              lineColor: this.state.lineColor,
              lineWidth: this.state.lineWidth,
              eraserLineWidth: this.state.eraserLineWidth,
              backgroundColor: 'transparent',
              height: this.state.sketchHeight,
              width: this.state.sketchWidth,
              forceValue: true,
              onChange: this._onSketchChange,
              tool: this.state.tool,
              spriteNumber: this.state.spriteNumber
            })
          ),
          _react2.default.createElement(
            _index.PanelContainer,
            null,
            _react2.default.createElement(_RightPanel2.default, {
              selectedSection: this.state.selectedSection,
              undo: this._undo,
              redo: this._redo,
              clear: this._clear,
              canUndo: this.state.canUndo,
              canRedo: this.state.canRedo,
              changeLineWidth: this.changeLineWidth,
              changeEraserLineWidth: this.changeEraserLineWidth,
              lineWidth: this.state.lineWidth,
              eraserLineWidth: this.state.eraserLineWidth,
              changeOpacity: this.changeOpacity,
              changeColor: this.changeColor,
              opacity: this.state.opacity,
              lineColor: this.state.lineColor,
              rgbColor: this.state.rgbColor,
              colors: colors
            })
          )
        )
      );
    }
  }]);

  return DrawingTool;
}(_react.Component);

DrawingTool.propTypes = {
  aspectRatio: _propTypes2.default.string,
  canvasBg: _propTypes2.default.string,
  colors: _propTypes2.default.array,
  stickers: _propTypes2.default.array,
  headerStyle: _propTypes2.default.string,
  headerTitle: _propTypes2.default.string,
  onSave: _propTypes2.default.func,
  onBack: _propTypes2.default.func,
  layoutStyle: _propTypes2.default.string
};
DrawingTool.defaultProps = {
  aspectRatioWidth: 4,
  aspectRatioHeight: 3,
  canvasBg: '#ebebeb',
  colors: colors,
  stickers: [],
  headerStyle: 'textButtons',
  headerTitle: 'How does Will get to the Night Zoo?',
  onSave: function onSave() {},
  onBack: function onBack() {
    return window.history.back();
  },
  layoutStyle: 'spaceBetween'
};
exports.default = DrawingTool;