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
      rgbColor: '255, 255, 255',
      backgroundColor: 'transparent',
      tool: Tools.Pencil,
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
    aspectRatio: PropTypes.string,
    canvasBg: PropTypes.string,
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

  _selectTool = (event, index, value) => {
    this.setState({
      tool: value
    })
  }

  _save = () => {
    const imageJSON = this._sketch.toJSON()
    // imageJSON contains an 'objects' key which is an array of strokes
    if (imageJSON.objects.length >= 5) {
      const imagePNG = this._sketch.toDataURL()
      // imagePNG is a long image string
      this.setState({ drawingSnapshot: imagePNG })
      console.log('image saved: ', imagePNG)
      return imagePNG
    }
    else {
      console.error("Drawing needs more detail before saving!")
    }
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
      controlledValue: null,
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
      drawingSnapshot: [],
      spriteNumber: 0
    })
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

    this.props.canvasBg && this.setBackground()

    this.setState({
      lineColor: `rgba(${this.state.rgbColor}, ${this.state.opacity})`
    })
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.canvasBg && this.props.canvasBg) {
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
      sketchHeight: maxHeight
    })
  }
  
  setBackground() {
    return this._sketch.setBackground(this.props.canvasBg)
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
    if (section === 'pencil' || section === 'eraser' || section === 'sticker') {
      this.setState({
        tool: section,
        selectedSection: section
      })
    } else {
      this.setState({
        selectedSection: section
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
    const { headerStyle, headerTitle, canvasBg, colors, layoutStyle, onBack } = this.props
    return (
      <Container>
        {headerStyle && <DrawingToolHeader 
          width={this.state.sketchWidth}
          headerStyle={headerStyle} 
          headerTitle={headerTitle} 
          onSave={this._save}
          onBack={onBack}
          layoutStyle={layoutStyle}
         />}
        <SketchContainer layoutStyle={layoutStyle}>
          <PanelContainer>
            <LeftPanel
              changeTool={this.changeTool}
              selectedSection={this.state.selectedSection}
            />
          </PanelContainer>
          <CanvasContainer
            canvasBg={canvasBg}
            height={this.state.sketchHeight}
            width={this.state.sketchWidth}
          >
            <SketchField
              name="sketch"
              className="canvas-area"
              ref={c => (this._sketch = c)}
              lineColor={this.state.lineColor}
              lineWidth={this.state.lineWidth}
              eraserLineWidth={this.state.eraserLineWidth}
              backgroundColor="transparent"
              height={this.state.sketchHeight}
              width={this.state.sketchWidth}
              forceValue={true}
              onChange={this._onSketchChange}
              tool={this.state.tool}
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
            />
          </PanelContainer>
        </SketchContainer>
      </Container>
    )
  }
}
