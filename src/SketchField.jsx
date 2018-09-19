/*eslint no-unused-vars: 0*/
'use strict'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import History from './history'
import { uuid4 } from './utils'
import Pencil from './pencil'
import Eraser from './eraser'
import Tool from './tools'
import Sticker from './sticker'

const fabric = require('fabric').fabric

// Sketch tool based on react-sketch
class SketchField extends PureComponent {
  static propTypes = {
    lineColor: PropTypes.string,
    lineWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    opacity: PropTypes.number,
    undoSteps: PropTypes.number,
    tool: PropTypes.string,
    // Sketch data for controlling sketch from outside the component
    value: PropTypes.object,
    // Set to true if you wish to force load the given value, even if it is  the same
    forceValue: PropTypes.bool,
    // Specify some width correction which will be applied on auto resize
    widthCorrection: PropTypes.number,
    // Specify some height correction which will be applied on auto resize
    heightCorrection: PropTypes.number
  }

  static defaultProps = {
    lineColor: 'white',
    lineWidth: 10,
    backgroundColor: 'transparent',
    opacity: 1.0,
    undoSteps: 25,
    tool: Tool.Pencil,
    widthCorrection: 0,
    heightCorrection: 0,
    forceValue: false
  }

  state = {
    parentWidth: 550,
    action: true
  }

  _initTools = fabricCanvas => {
    this._tools = {}
    this._tools[Tool.Pencil] = new Pencil(fabricCanvas)
    this._tools[Tool.Eraser] = new Eraser(fabricCanvas)
    this._tools[Tool.Sticker] = new Sticker(fabricCanvas)
  }

  // Enable touch Scrolling on Canvas
  enableTouchScroll = () => {
    let canvas = this._fc
    if (canvas.allowTouchScrolling) return
    canvas.allowTouchScrolling = true
  }

  // Disable touch Scrolling on Canvas
  disableTouchScroll = () => {
    let canvas = this._fc
    if (canvas.allowTouchScrolling) {
      canvas.allowTouchScrolling = false
    }
  }

   /* Add an image as object to the canvas
   * @param dataUrl the image url or Data Url
   * @param options object to pass and change some options when loading image, the format of the object is:
   * {
   *   left: <Number: distance from left of canvas>,
   *   top: <Number: distance from top of canvas>,
   *   scale: <Number: initial scale of image>
   * } 
   */
  addImg = (dataUrl, options = {}) => {
    let canvas = this._fc
    fabric.Image.fromURL(dataUrl, oImg => {
      let opts = {
        left: Math.random() * (canvas.getWidth() - oImg.width * 0.5),
        top: Math.random() * (canvas.getHeight() - oImg.height * 0.5),
        scale: 0.5
      }
      Object.assign(opts, options)
      oImg.scale(opts.scale)
      oImg.set({
        left: opts.left,
        top: opts.top
      })
      canvas.add(oImg)
    })
  }

  // Action when an object is added to the canvas
  _onObjectAdded = e => {
    if (!this.state.action) {
      this.setState({ action: true })
      return
    }

    let obj = e.target
    obj.version = 1
    // record current object state as json and save as originalState
    let objState = obj.toJSON()
    obj.originalState = objState
    let state = JSON.stringify(objState)

    // object, previous state, current state
    this._history.keep([obj, state, state])

    // change object to bring sprites to front
    const spritesObject = this._fc.getObjects().reduce((acc, item) => {
      if (item.spriteImages) {
        let newFabricObject = new Object(item)
        acc.push(newFabricObject)
      }
      return acc
    }, [])
    if (spritesObject) {
      spritesObject.map(item => this._bringToFront(item))
    }
  }

  // Action when an object is moving around inside the canvas
  _onObjectMoving = e => {}

  // Action when an object is scaling inside the canvas
  _onObjectScaling = e => {}

  // Action when an object is rotating inside the canvas
  _onObjectRotating = e => {}

  // Action when an object is removed from the canvas
  _onObjectRemoved = e => {
    let obj = e.target
    obj.version = 0
  }

  // Action when the mouse button is pressed down
  _onMouseDown = e => {
    this._selectedTool.doMouseDown(e)
  }

  // Action when the mouse cursor is moving around within the canvas
  _onMouseMove = e => {
    this._selectedTool.doMouseMove(e)
  }

  // Action when the mouse cursor is moving out from the canvas
  _onMouseOut = e => {
    this._selectedTool.doMouseOut(e)
    if (this.props.onChange) {
      let onChange = this.props.onChange
      setTimeout(() => {
        onChange(e.e)
      }, 10)
    }
  }

   /* Track the resize of the window and update state
   * @param e the resize event
   */
  _resize = e => {
    if (e) e.preventDefault()
    
    let { widthCorrection, heightCorrection } = this.props
    let { offsetWidth, clientHeight } = this._container

    let canvas = this._fc
    let prevWidth = canvas.getWidth()
    let prevHeight = canvas.getHeight()
    let wfactor = ((offsetWidth - widthCorrection) / prevWidth).toFixed(2)
    let hfactor = ((clientHeight - heightCorrection) / prevHeight).toFixed(2)
    canvas.setWidth(offsetWidth - widthCorrection)
    canvas.setHeight(clientHeight - heightCorrection)

    if (canvas.backgroundImage) {
      let bi = canvas.backgroundImage
      bi.width = bi.width * wfactor
      bi.height = bi.height * hfactor
    }

    let objects = canvas.getObjects()
    for (let i in objects) {
      let obj = objects[i]
      let scaleX = obj.scaleX
      let scaleY = obj.scaleY
      let left = obj.left
      let top = obj.top
      let tempScaleX = scaleX * wfactor
      let tempScaleY = scaleY * hfactor
      let tempLeft = left * wfactor
      let tempTop = top * hfactor
      obj.scaleX = tempScaleX
      obj.scaleY = tempScaleY
      obj.left = tempLeft
      obj.top = tempTop
      obj.setCoords()
    }
    this.setState({
      parentWidth: offsetWidth
    })
    canvas.renderAll()
    canvas.calcOffset()
  }

   /* Sets the background color for this sketch
   * @param color in rgba or hex format
   */
  _backgroundColor = color => {
    if (!color) return
    let canvas = this._fc
    canvas.setBackgroundColor(color, () => canvas.renderAll())
  }

  _bringToFront = obj => {
    let canvas = this._fc
    canvas.bringToFront(obj)
  }

   /* Zoom the drawing by the factor specified
   *
   * The zoom factor is a percentage with regards the original, for example if factor is set to 2
   * it will double the size whereas if it is set to 0.5 it will half the size
   *
   * @param factor the zoom factor
   */
  zoom = factor => {
    let canvas = this._fc
    let objects = canvas.getObjects()
    for (let i in objects) {
      objects[i].scaleX = objects[i].scaleX * factor
      objects[i].scaleY = objects[i].scaleY * factor
      objects[i].left = objects[i].left * factor
      objects[i].top = objects[i].top * factor
      objects[i].setCoords()
    }
    canvas.renderAll()
    canvas.calcOffset()
  }

  undo = () => {
    let history = this._history
    let [obj, prevState, currState] = history.getCurrent()
    let canvas = this._fc
    history.undo()
    if (obj.version === 1) {
      canvas.remove(obj)
    } else {
      obj.setOptions(JSON.parse(prevState))
      obj.setCoords()
      obj.version -= 1
      this._fc.renderAll()
    }
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

  redo = () => {
    let history = this._history
    if (history.canRedo()) {
      let canvas = this._fc
      //noinspection Eslint
      let [obj, prevState, currState] = history.redo()
      if (obj.version === 0) {
        this.setState({ action: false }, () => {
          canvas.add(obj)
          obj.version = 1
        })
      } else {
        obj.version += 1
        obj.setOptions(JSON.parse(currState))
      }
      obj.setCoords()
      canvas.renderAll()
      if (this.props.onChange) {
        this.props.onChange()
      }
    }
  }

  canUndo = () => {
    return this._history.canUndo()
  }

  canRedo = () => {
    return this._history.canRedo()
  }

   /* Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
   * @returns {String} URL containing a representation of the object in the format specified by options.format
   */
  toDataURL = options => this._fc.toDataURL(options)

   /* Returns JSON representation of canvas
   * @param propertiesToInclude Array <optional> Any properties that you might want to additionally include in the output
   * @returns {string} JSON string
   */
  toJSON = propertiesToInclude => this._fc.toJSON(propertiesToInclude)

  // Returns object representation of an instance
  toObject = propertiesToInclude => this._fc.toObject(propertiesToInclude)

   /* Populates canvas with data from the specified JSON.
   * JSON format must conform to the one of fabric.Canvas#toDatalessJSON
   *
   * @param json JSON string or object
   */
  fromJSON = json => {
    if (!json) return
    let canvas = this._fc
    setTimeout(() => {
      canvas.loadFromJSON(json, () => {
        canvas.renderAll()
        if (this.props.onChange) {
          this.props.onChange()
        }
      })
    }, 100)
  }

   /* Clear the content of the canvas, this will also clear history but will return the canvas content as JSON to be
   * used as needed in order to undo the clear if possible
   *
   * @param propertiesToInclude Array <optional> Any properties that you might want to additionally include in the output
   * @returns {string} JSON string of the canvas just cleared
   */
  clear = propertiesToInclude => {
    let discarded = this.toJSON(propertiesToInclude)
    this._fc.clear()
    this._fc.on('path:created', function(e) {
      //Source over = draw
      e.path.globalCompositeOperation = 'source-over'
      // This will not add an SVG CSS class, but at least will allow us to identify
      // erasures in object list
      e.path.setOptions({ class: 'drawing' })
    })
    this._history.clear()
    return discarded
  }

   /* Sets the background from the dataUrl given
   *
   * @param dataUrl the dataUrl to be used as a background
   * @param options
   */
  setBackgroundFromDataUrl = (dataUrl, options = {}) => {
    let canvas = this._fc
    if (options.stretched) {
      delete options.stretched
      Object.assign(options, {
        width: canvas.width,
        height: canvas.height
      })
    }
    if (options.stretchedX) {
      delete options.stretchedX
      Object.assign(options, {
        width: canvas.width
      })
    }
    if (options.stretchedY) {
      delete options.stretchedY
      Object.assign(options, {
        height: canvas.height
      })
    }
    let img = new Image()
    img.onload = () =>
      canvas.setBackgroundImage(
        new fabric.Image(img),
        () => canvas.renderAll(),
        options
      )
    img.src = dataUrl
  }

  componentDidMount = () => {
    let { tool, value, defaultValue, undoSteps, backgroundColor } = this.props

    let canvas = (this._fc = new fabric.Canvas(this._canvas, { preserveObjectStacking: true }))

    this._initTools(canvas)
    let selectedTool = this._tools[tool]
    selectedTool.configureCanvas(this.props)
    this._selectedTool = selectedTool

    this._backgroundColor(backgroundColor)

    // Control resize
    window.addEventListener('resize', this._resize, false)

    // Initialize History, with maximum number of undo steps
    this._history = new History(undoSteps)

    // Events binding
    canvas.on('object:added', this._onObjectAdded)
    canvas.on('object:modified', this._onObjectModified)
    canvas.on('object:removed', this._onObjectRemoved)
    canvas.on('mouse:down', this._onMouseDown)
    canvas.on('mouse:move', this._onMouseMove)
    canvas.on('mouse:up', this._onMouseUp)
    canvas.on('mouse:out', this._onMouseOut)
    canvas.on('object:moving', this._onObjectMoving)
    canvas.on('object:scaling', this._onObjectScaling)
    canvas.on('object:rotating', this._onObjectRotating)

    this.disableTouchScroll()
    this._resize()

    // initialize canvas with controlled value if exists
    ;(value || defaultValue) && this.fromJSON(value || defaultValue)
  }

  componentWillUnmount = () =>
    window.removeEventListener('resize', this._resize)

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.spriteNumber === 4) {
      this._fc.off('mouse:down', this._onMouseDown)
    }
    else {
      // WIP: need to set the mouse:down event back on
      // the below is currently incrementing the sprite count wildly
      // this._fc.on('mouse:down', this._onMouseDown)
    }
    if (
      this.state.parentWidth !== prevState.parentWidth ||
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      this._resize()
    }
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.tool !== nextProps.tool) {
      this._selectedTool =
        this._tools[nextProps.tool] || this._tools[Tool.Pencil]
    }

    // Bring the cursor back to default if it is changed by a tool
    this._fc.defaultCursor = 'default'
    this._selectedTool.configureCanvas(nextProps)
    this._backgroundColor(nextProps.backgroundColor)

    if (
      this.props.value !== nextProps.value ||
      (nextProps.value && nextProps.forceValue)
    ) {
      this.fromJSON(nextProps.value)
    }
  }

  _onObjectModified = e => {
    let obj = e.target
    obj.version += 1
    let prevState = JSON.stringify(obj.originalState)
    let objState = obj.toJSON()
    // record current object state as json and update to originalState
    obj.originalState = objState
    let currState = JSON.stringify(objState)
    this._history.keep([obj, prevState, currState])
  }

  _onMouseUp = e => {
    this._selectedTool.doMouseUp(e)
    // Update the final state to new-generated object
    // Ignore Path object since it would be created after mouseUp
    // Assumed the last object in canvas.getObjects() in the newest object
    if (this.props.tool !== Tool.Pencil) {
      const canvas = this._fc
      const objects = canvas.getObjects()
      const newObj = objects[objects.length - 1]
      if (newObj && newObj.version === 1) {
        newObj.originalState = newObj.toJSON()
      }
    }
    if (this.props.onChange) {
      let onChange = this.props.onChange
      setTimeout(() => {
        onChange(e.e)
      }, 10)
    }
  }

  render = () => {
    let { className, style, width, height } = this.props
    let canvasDivStyle = Object.assign(
      {},
      style ? style : {},
      width ? { width: width } : {},
      height ? { height: height } : { height: 512 }
    )

    return (
      <div
        className={className}
        ref={c => (this._container = c)}
        style={canvasDivStyle}
      >
        <canvas id={uuid4()} ref={c => (this._canvas = c)}>
          Sorry, Canvas HTML5 element is not supported by your browser
        </canvas>
      </div>
    )
  }
}

export default SketchField
