import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  PanelContainer,
  SketchContainer,
  CanvasContainer
} from './index.styles'
import DrawingToolHeader from './components/DrawingToolHeader/DrawingToolHeader'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'
import { SketchField, Tools } from './tools/index'

const href = window.location.href

const colors = [
  {
    rgb: '255, 255, 255',
    isLocked: false
  },
  {
    rgb: '255, 145, 0',
    isLocked: false
  },
  {
    rgb: '255, 236, 0',
    isLocked: false
  },
  {
    rgb: '193, 255, 0',
    isLocked: false
  },
  {
    rgb: '0, 183, 255',
    isLocked: false
  },
  {
    rgb: '174, 0, 255',
    isLocked: false
  },
  {
    rgb: '255, 0, 152',
    isLocked: false
  },
  {
    rgb: '104, 59, 17',
    isLocked: false
  },
  {
    rgb: '171, 171, 171',
    isLocked: false
  },
  {
    rgb: '0, 0, 0',
    isLocked: false
  }
]
export default class DrawingTool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lineWidth: 30,
      eraserLineWidth: 30,
      rgbColor: '174, 0, 255',
      tool: Tools.Pencil,
      drawings: [],
      canUndo: false,
      canRedo: false,
      sketchWidth: null,
      sketchHeight: null,
      selectedSection: 'pencil',
      opacity: 1,
      spriteNumber: 0,
      isEraser: false,
      windowWidth: null
    }

    this.changeTool = this.changeTool.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.updateSpriteNumber = this.updateSpriteNumber.bind(this)
    this.changeLineWidth = this.changeLineWidth.bind(this)
    this.changeEraserLineWidth = this.changeEraserLineWidth.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeOpacity = this.changeOpacity.bind(this)
  }

  static propTypes = {
    aspectRatioWidth: PropTypes.number,
    aspectRatioHeight: PropTypes.number,
    backgroundImage: PropTypes.string,
    drawingToEdit: PropTypes.string,
    colors: PropTypes.array,
    stickers: PropTypes.array,
    headerStyle: PropTypes.string,
    headerTitle: PropTypes.string,
    onSave: PropTypes.func,
    onBack: PropTypes.func,
    layoutStyle: PropTypes.string
  }

  static defaultProps = {
    aspectRatioWidth: 4,
    aspectRatioHeight: 3,
    colors: colors,
    onBack: () => window.history.back(),
    layoutStyle: 'center'
  }

  _save = () => {
    const imageJSON = this._sketch.toJSON()
    const dataUri = this._sketch.toDataURL({ multiplier: 4 })
    this.setState({ drawingSnapshot: dataUri })
    return {
      dataUri,
      drawingStrokes: imageJSON.objects.length
    }
  }
  
  _quit = () => {
    return sessionStorage.removeItem(href)
  }

  _undo = () => {
    this._sketch.undo()
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo()
    })
    this.updateSpriteNumber()
  }

  _redo = () => {
    this._sketch.redo()
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo()
    })
    this.updateSpriteNumber()
  }

  _clear = () => {
    this._sketch.clear()
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
      drawingSnapshot: [],
      spriteNumber: 0
    })
    this.props.backgroundImage || this.props.drawingToEdit
      ? this.setBackground()
      : null
  }

  _onSketchChange = () => {
    this.updateSpriteNumber()
    let prev = this.state.canUndo
    let now = this._sketch.canUndo()
    if (prev !== now) {
      this.setState({ canUndo: now })
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)

    this.setBackground()

    this.setState({
      lineColor: `rgba(${this.state.rgbColor}, ${this.state.opacity})`
    })

    const sessionStorageDrawing = sessionStorage.getItem(href)
    if (sessionStorageDrawing) {
      this._sketch.fromJSON(sessionStorageDrawing)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.backgroundImage && this.props.backgroundImage) ||
      (!prevProps.drawingToEdit && this.props.drawingToEdit)
    ) {
      this.setBackground()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    const { aspectRatioWidth, aspectRatioHeight } = this.props
    // maxHeight is the full height minus the drawing tool header
    let maxHeight = window.innerHeight - 100
    // maxWidth is the maxHeight scaled to the correct aspect ratio
    let maxWidth = maxHeight * (aspectRatioWidth / aspectRatioHeight)
    // resize according to maxWidth for tall screens e.g. iPad portrait
    if (maxWidth > window.innerWidth - 220) {
      maxWidth = window.innerWidth - 240
      maxHeight = maxWidth / aspectRatioWidth * aspectRatioHeight
    }
    this.setState({
      sketchWidth: maxWidth,
      sketchHeight: maxHeight,
      windowWidth: window.innerWidth
    })
    this.setBackground()
  }

  setBackground() {
    const { drawingToEdit, backgroundImage } = this.props
    if (drawingToEdit && backgroundImage) {
      return this._sketch.setBackground(drawingToEdit)
    } else if (backgroundImage) {
      return this._sketch.setBackground(backgroundImage)
    }
    return
  }

  updateSpriteNumber() {
    let sketchObjects = this._sketch.toObject().objects
    sketchObjects.reduce((acc, item) => {
      if (item.type === 'sprite') {
        acc += 1
        this.setState({ spriteNumber: acc })
      }
      return acc
    }, 0)
  }

  changeTool(section) {
    if (section === 'pencil' || section === 'sticker') {
      this.setState({
        tool: section,
        selectedSection: section,
        isEraser: false
      })
    } else if (section === 'eraser') {
      this.setState({
        tool: 'pencil',
        selectedSection: section,
        isEraser: true
      })
    } else {
      this.setState({
        selectedSection: section,
        isEraser: false
      })
    }
  }

  changeColor(color) {
    this.setState({
      rgbColor: color,
      lineColor: `rgba(${color}, ${this.state.opacity})`
    })
  }

  changeLineWidth(e) {
    this.setState({
      lineWidth: Number(e.target.value)
    })
  }

  changeEraserLineWidth(e) {
    this.setState({
      eraserLineWidth: Number(e.target.value)
    })
  }

  changeOpacity(e) {
    const opacityValue = Number(e.target.value / 10)
    this.setState({
      opacity: opacityValue,
      lineColor: `rgba(${this.state.rgbColor}, ${opacityValue})`
    })
  }

  render() {
    const {
      headerStyle,
      headerTitle,
      backgroundImage,
      drawingToEdit,
      colors,
      layoutStyle,
      onBack
    } = this.props
    return (
      <Container>
        {headerStyle && (
          <DrawingToolHeader
            width={this.state.sketchWidth}
            headerStyle={headerStyle}
            headerTitle={headerTitle}
            onSave={this._save}
            onBack={onBack}
            layoutStyle={layoutStyle}
          />
        )}
        <SketchContainer layoutStyle={layoutStyle}>
          <PanelContainer>
            <LeftPanel
              changeTool={this.changeTool}
              selectedSection={this.state.selectedSection}
            />
          </PanelContainer>
          <CanvasContainer
            backgroundImage={backgroundImage}
            drawingToEdit={drawingToEdit}
            height={this.state.sketchHeight}
            width={this.state.sketchWidth}
          >
            <SketchField
              name="sketch"
              className="canvas-sketch-field"
              ref={c => (this._sketch = c)}
              lineColor={this.state.lineColor}
              lineWidth={this.state.lineWidth}
              eraserLineWidth={this.state.eraserLineWidth}
              height={this.state.sketchHeight}
              width={this.state.sketchWidth}
              onChange={this._onSketchChange}
              isEraser={this.state.isEraser}
              spriteNumber={this.state.spriteNumber}
            />
          </CanvasContainer>
          <PanelContainer>
            <RightPanel
              selectedSection={this.state.selectedSection}
              undo={this._undo}
              redo={this._redo}
              clear={this._clear}
              canUndo={this.state.canUndo}
              canRedo={this.state.canRedo}
              changeLineWidth={this.changeLineWidth}
              changeEraserLineWidth={this.changeEraserLineWidth}
              lineWidth={this.state.lineWidth}
              eraserLineWidth={this.state.eraserLineWidth}
              changeOpacity={this.changeOpacity}
              changeColor={this.changeColor}
              opacity={this.state.opacity}
              lineColor={this.state.lineColor}
              rgbColor={this.state.rgbColor}
              colors={colors}
              windowWidth={this.state.windowWidth}
            />
          </PanelContainer>
        </SketchContainer>
      </Container>
    )
  }
}
