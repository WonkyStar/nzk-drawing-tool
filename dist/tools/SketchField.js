/*eslint no-unused-vars: 0*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _utils = require('./utils');

var _pencil = require('./pencil');

var _pencil2 = _interopRequireDefault(_pencil);

var _eraser = require('./eraser');

var _eraser2 = _interopRequireDefault(_eraser);

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

var _sticker = require('./sticker');

var _sticker2 = _interopRequireDefault(_sticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fabric = require('fabric').fabric;

// Sketch tool based on react-sketch

var SketchField = function (_PureComponent) {
  _inherits(SketchField, _PureComponent);

  function SketchField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SketchField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SketchField.__proto__ || Object.getPrototypeOf(SketchField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      parentWidth: 550,
      action: true
    }, _this._initTools = function (fabricCanvas) {
      _this._tools = {};
      _this._tools[_tools2.default.Pencil] = new _pencil2.default(fabricCanvas);
      _this._tools[_tools2.default.Eraser] = new _eraser2.default(fabricCanvas);
      _this._tools[_tools2.default.Sticker] = new _sticker2.default(fabricCanvas);
    }, _this.enableTouchScroll = function () {
      var canvas = _this._fc;
      if (canvas.allowTouchScrolling) return;
      canvas.allowTouchScrolling = true;
    }, _this.disableTouchScroll = function () {
      var canvas = _this._fc;
      if (canvas.allowTouchScrolling) {
        canvas.allowTouchScrolling = false;
      }
    }, _this.addImg = function (dataUrl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var canvas = _this._fc;
      fabric.Image.fromURL(dataUrl, function (oImg) {
        var opts = {
          left: Math.random() * (canvas.getWidth() - oImg.width * 0.5),
          top: Math.random() * (canvas.getHeight() - oImg.height * 0.5),
          scale: 0.5
        };
        Object.assign(opts, options);
        oImg.scale(opts.scale);
        oImg.set({
          left: opts.left,
          top: opts.top
        });
        canvas.add(oImg);
      });
    }, _this._onObjectAdded = function (e) {
      if (!_this.state.action) {
        _this.setState({ action: true });
        return;
      }

      var obj = e.target;
      obj.version = 1;
      // record current object state as json and save as originalState
      var objState = obj.toJSON();
      obj.originalState = objState;
      var state = JSON.stringify(objState);
      // object, previous state, current state
      _this._history.keep([obj, state, state]);

      // cache object state in session storage
      var imageJSON = _this._fc.toJSON();
      var href = window.location.href;
      sessionStorage.setItem(href, JSON.stringify(imageJSON));

      // change object to bring sprites to front
      var spritesObject = _this._fc.getObjects().reduce(function (acc, item) {
        if (item.spriteImages) {
          var newFabricObject = new Object(item);
          acc.push(newFabricObject);
        }
        return acc;
      }, []);
      if (spritesObject) {
        spritesObject.map(function (item) {
          return _this._bringToFront(item);
        });
      }
    }, _this._onObjectMoving = function (e) {}, _this._onObjectScaling = function (e) {}, _this._onObjectRotating = function (e) {}, _this._onObjectRemoved = function (e) {
      var obj = e.target;
      obj.version = 0;
    }, _this._onMouseDown = function (e) {
      _this._selectedTool.doMouseDown(e);
    }, _this._onMouseMove = function (e) {
      _this._selectedTool.doMouseMove(e);
    }, _this._onMouseOut = function (e) {
      _this._selectedTool.doMouseOut(e);
      if (_this.props.onChange) {
        var onChange = _this.props.onChange;
        setTimeout(function () {
          onChange(e.e);
        }, 10);
      }
    }, _this._resize = function (e) {
      if (e) e.preventDefault();

      var _this$props = _this.props,
          widthCorrection = _this$props.widthCorrection,
          heightCorrection = _this$props.heightCorrection;
      var _this$_container = _this._container,
          offsetWidth = _this$_container.offsetWidth,
          clientHeight = _this$_container.clientHeight;


      var canvas = _this._fc;
      var prevWidth = canvas.getWidth();
      var prevHeight = canvas.getHeight();
      var wfactor = ((offsetWidth - widthCorrection) / prevWidth).toFixed(2);
      var hfactor = ((clientHeight - heightCorrection) / prevHeight).toFixed(2);
      canvas.setWidth(offsetWidth - widthCorrection);
      canvas.setHeight(clientHeight - heightCorrection);

      if (canvas.backgroundImage) {
        var bi = canvas.backgroundImage;
        bi.width = bi.width * wfactor;
        bi.height = bi.height * hfactor;
      }

      var objects = canvas.getObjects();
      for (var i in objects) {
        var obj = objects[i];
        var scaleX = obj.scaleX;
        var scaleY = obj.scaleY;
        var left = obj.left;
        var top = obj.top;
        var tempScaleX = scaleX * wfactor;
        var tempScaleY = scaleY * hfactor;
        var tempLeft = left * wfactor;
        var tempTop = top * hfactor;
        obj.scaleX = tempScaleX;
        obj.scaleY = tempScaleY;
        obj.left = tempLeft;
        obj.top = tempTop;
        obj.setCoords();
      }
      _this.setState({
        parentWidth: offsetWidth
      });
      canvas.renderAll();
      canvas.calcOffset();
    }, _this._bringToFront = function (obj) {
      var canvas = _this._fc;
      canvas.bringToFront(obj);
    }, _this.zoom = function (factor) {
      var canvas = _this._fc;
      var objects = canvas.getObjects();
      for (var i in objects) {
        objects[i].scaleX = objects[i].scaleX * factor;
        objects[i].scaleY = objects[i].scaleY * factor;
        objects[i].left = objects[i].left * factor;
        objects[i].top = objects[i].top * factor;
        objects[i].setCoords();
      }
      canvas.renderAll();
      canvas.calcOffset();
    }, _this.undo = function () {
      var history = _this._history;

      var _history$getCurrent = history.getCurrent(),
          _history$getCurrent2 = _slicedToArray(_history$getCurrent, 3),
          obj = _history$getCurrent2[0],
          prevState = _history$getCurrent2[1],
          currState = _history$getCurrent2[2];

      var canvas = _this._fc;
      history.undo();
      if (obj.version === 1) {
        canvas.remove(obj);
      } else {
        obj.setOptions(JSON.parse(prevState));
        obj.setCoords();
        obj.version -= 1;
        _this._fc.renderAll();
      }
      if (_this.props.onChange) {
        _this.props.onChange();
      }
    }, _this.redo = function () {
      var history = _this._history;
      if (history.canRedo()) {
        var canvas = _this._fc;
        // noinspection Eslint

        var _history$redo = history.redo(),
            _history$redo2 = _slicedToArray(_history$redo, 3),
            obj = _history$redo2[0],
            prevState = _history$redo2[1],
            currState = _history$redo2[2];

        if (obj.version === 0) {
          _this.setState({ action: false }, function () {
            canvas.add(obj);
            obj.version = 1;
          });
        } else {
          obj.version += 1;
          obj.setOptions(JSON.parse(currState));
        }
        obj.setCoords();
        canvas.renderAll();
        if (_this.props.onChange) {
          _this.props.onChange();
        }
      }
    }, _this.canUndo = function () {
      return _this._history.canUndo();
    }, _this.canRedo = function () {
      return _this._history.canRedo();
    }, _this.toDataURL = function (options) {
      return _this._fc.toDataURL(options);
    }, _this.toJSON = function (propertiesToInclude) {
      return _this._fc.toJSON(propertiesToInclude);
    }, _this.toObject = function (propertiesToInclude) {
      return _this._fc.toObject(propertiesToInclude);
    }, _this.fromJSON = function (json) {
      if (!json) return;
      var canvas = _this._fc;
      setTimeout(function () {
        canvas.loadFromJSON(json, function () {
          canvas.renderAll();
          if (_this.props.onChange) {
            _this.props.onChange();
          }
        });
      }, 100);
    }, _this.clear = function (propertiesToInclude) {
      var discarded = _this.toJSON(propertiesToInclude);
      _this._fc.clear();
      _this._fc.on('path:created', function (e) {
        //Source over = draw
        e.path.globalCompositeOperation = 'source-over';
        // This will not add an SVG CSS class, but at least will allow us to identify
        // erasures in object list
        e.path.setOptions({ class: 'drawing' });
      });
      _this._history.clear();
      return discarded;
    }, _this.setBackground = function (imageUrl) {
      var canvas = _this._fc;
      fabric.Image.fromURL(imageUrl, function (img) {
        img.set({
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
          originX: 'left',
          originY: 'top',
          crossOrigin: 'anonymous'
        });
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      });
    }, _this.componentDidMount = function () {
      var _this$props2 = _this.props,
          tool = _this$props2.tool,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue,
          undoSteps = _this$props2.undoSteps;


      var canvas = _this._fc = new fabric.Canvas(_this._canvas, {
        preserveObjectStacking: true
      });

      _this._initTools(canvas);
      var selectedTool = _this._tools[tool];
      selectedTool.configureCanvas(_this.props);
      _this._selectedTool = selectedTool;

      // Control resize
      window.addEventListener('resize', _this._resize, false);

      // Initialize History, with maximum number of undo steps
      _this._history = new _history2.default(undoSteps);

      // Events binding
      canvas.on('object:added', _this._onObjectAdded);
      canvas.on('object:modified', _this._onObjectModified);
      canvas.on('object:removed', _this._onObjectRemoved);
      canvas.on('mouse:down', _this._onMouseDown);
      canvas.on('mouse:move', _this._onMouseMove);
      canvas.on('mouse:up', _this._onMouseUp);
      canvas.on('mouse:out', _this._onMouseOut);
      canvas.on('object:moving', _this._onObjectMoving);
      canvas.on('object:scaling', _this._onObjectScaling);
      canvas.on('object:rotating', _this._onObjectRotating);

      _this.disableTouchScroll();
      _this._resize()

      // initialize canvas with controlled value if exists
      ;(value || defaultValue) && _this.fromJSON(value || defaultValue);
    }, _this.componentWillUnmount = function () {
      return window.removeEventListener('resize', _this._resize);
    }, _this.componentDidUpdate = function (prevProps, prevState) {
      if (prevProps.spriteNumber === 4) {
        _this._fc.off('mouse:down', _this._onMouseDown);
      } else {
        // WIP: need to set the mouse:down event back on
        // the below is currently incrementing the sprite count wildly
        // this._fc.on('mouse:down', this._onMouseDown)
      }
      if (_this.state.parentWidth !== prevState.parentWidth || _this.props.width !== prevProps.width || _this.props.height !== prevProps.height) {
        _this._resize();
      }
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (_this.props.tool !== nextProps.tool) {
        _this._selectedTool = _this._tools[nextProps.tool] || _this._tools[_tools2.default.Pencil];
      }

      _this._fc.defaultCursor = 'default';
      _this._selectedTool.configureCanvas(nextProps);

      if (_this.props.value !== nextProps.value || nextProps.value && nextProps.forceValue) {
        _this.fromJSON(nextProps.value);
      }
    }, _this._onObjectModified = function (e) {
      var obj = e.target;
      obj.version += 1;
      var prevState = JSON.stringify(obj.originalState);
      var objState = obj.toJSON();
      // record current object state as json and update to originalState
      obj.originalState = objState;
      var currState = JSON.stringify(objState);
      _this._history.keep([obj, prevState, currState]);
    }, _this._onMouseUp = function (e) {
      _this._selectedTool.doMouseUp(e);
      if (_this.props.tool !== _tools2.default.Pencil) {
        var canvas = _this._fc;
        var objects = canvas.getObjects();
        var newObj = objects[objects.length - 1];
        if (newObj && newObj.version === 1) {
          newObj.originalState = newObj.toJSON();
        }
      }
      if (_this.props.onChange) {
        var onChange = _this.props.onChange;
        setTimeout(function () {
          onChange(e.e);
        }, 10);
      }
    }, _this.render = function () {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          style = _this$props3.style,
          width = _this$props3.width,
          height = _this$props3.height;

      var canvasDivStyle = Object.assign({}, style ? style : {}, width ? { width: width } : {}, height ? { height: height } : { height: 512 });

      return _react2.default.createElement(
        'div',
        {
          className: className,
          ref: function ref(c) {
            return _this._container = c;
          },
          style: canvasDivStyle
        },
        _react2.default.createElement(
          'canvas',
          { id: (0, _utils.uuid4)(), ref: function ref(c) {
              return _this._canvas = c;
            } },
          'Sorry, Canvas HTML5 element is not supported by your browser'
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Enable touch Scrolling on Canvas


  // Disable touch Scrolling on Canvas


  // Action when an object is added to the canvas


  // Action when an object is moving around inside the canvas


  // Action when an object is scaling inside the canvas


  // Action when an object is rotating inside the canvas


  // Action when an object is removed from the canvas


  // Action when the mouse button is pressed down


  // Action when the mouse cursor is moving around within the canvas


  // Action when the mouse cursor is moving out from the canvas


  /* Track the resize of the window and update state */


  /* Zoom the drawing by the factor specified */


  /* Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
   * @returns {String} URL containing a representation of the object in the format specified by options.format */


  /* Returns JSON representation of canvas
   * @returns {string} JSON string */


  // Returns object representation of an instance


  /* Populates canvas with data from the specified JSON.
   * JSON format must conform to the one of fabric.Canvas#toDatalessJSON */


  /* Clear the content of the canvas, this will also clear history but will return the canvas content as JSON to be
   * used as needed in order to undo the clear if possible */


  /* Sets the background from the imageUrl given */


  return SketchField;
}(_react.PureComponent);

SketchField.propTypes = {
  lineColor: _propTypes2.default.string,
  lineWidth: _propTypes2.default.number,
  eraserLineWidth: _propTypes2.default.number,
  opacity: _propTypes2.default.number,
  undoSteps: _propTypes2.default.number,
  tool: _propTypes2.default.string,
  // Sketch data for controlling sketch from outside the component
  value: _propTypes2.default.object,
  // Set to true if you wish to force load the given value, even if it is  the same
  forceValue: _propTypes2.default.bool,
  // Specify some width correction which will be applied on auto resize
  widthCorrection: _propTypes2.default.number,
  // Specify some height correction which will be applied on auto resize
  heightCorrection: _propTypes2.default.number
};
SketchField.defaultProps = {
  lineColor: 'white',
  lineWidth: 30,
  eraserLineWidth: 30,
  opacity: 1.0,
  undoSteps: 25,
  tool: _tools2.default.Pencil,
  widthCorrection: 0,
  heightCorrection: 0,
  forceValue: false
};
exports.default = SketchField;