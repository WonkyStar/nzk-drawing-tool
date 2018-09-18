import React, { Component, Fragment } from 'react'
import {
  Container,
  LeftPanelContainer,
  RightPanelContainer,
  SketchContainer
} from './DrawingTool.styles'
import DrawingToolHeader from './components/DrawingToolHeader/DrawingToolHeader'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'
import Button from './components/Button/Button'
import { SketchField, Tools } from './src'

export default class DrawingTool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lineWidth: 30,
      rgbColor: '0, 0, 0',
      backgroundColor: 'transparent',
      shadowWidth: 0,
      shadowOffset: 0,
      tool: Tools.Pencil,
      fillWithColor: false,
      fillWithBackgroundColor: false,
      drawings: [],
      canUndo: false,
      canRedo: false,
      controlledSize: false,
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
    this.changeWidth = this.changeWidth.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeOpacity = this.changeOpacity.bind(this)
  }

  static defaultProps = {
    type: 'zoo'
  }

  _selectTool = (event, index, value) => {
    this.setState({
      tool: value
    })
  }

  _save = () => {
    const imagePNG = this._sketch.toDataURL()
    // mutation to upload imagePNG and send to server
    this.setState({ drawingSnapshot: imagePNG })

    const imageJSON = this._sketch.toJSON()
    console.log(imageJSON)

    // const imageObject = this._sketch.toObject()
    // console.log(imageObject)
  }

  _download = () => {
    /*eslint-disable no-console*/
    console.save(this._sketch.toDataURL(), 'toDataURL.txt')
    console.save(JSON.stringify(this._sketch.toJSON()), 'toDataJSON.txt')
    /*eslint-enable no-console*/

    let { imgDown } = this.refs
    let event = new Event('click', {})

    imgDown.href = this._sketch.toDataURL()
    imgDown.download = 'toPNG.png'
    imgDown.dispatchEvent(event)
  }

  _renderTile = (drawing, index) => {
    return (
      <GridTile
        key={index}
        title="Canvas Image"
        actionPosition="left"
        titlePosition="top"
        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        cols={1}
        rows={1}
        style={styles.gridTile}
        actionIcon={
          <IconButton onTouchTap={c => this._removeMe(index)}>
            <RemoveIcon color="white" />
          </IconButton>
        }
      >
        <img src={drawing} />
      </GridTile>
    )
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
    this._sketch.setBackgroundFromDataUrl('')
    this.setState({
      controlledValue: null,
      backgroundColor: this.props.type === 'sky' ? '#ebebeb' : 'transparent',
      // fillWithBackgroundColor: false,
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

  _onBackgroundImageDrop = (accepted /*, rejected*/) => {
    if (accepted && accepted.length > 0) {
      let sketch = this._sketch
      let reader = new FileReader()
      let { stretched, stretchedX, stretchedY, originX, originY } = this.state
      reader.addEventListener(
        'load',
        () =>
          sketch.setBackgroundFromDataUrl(reader.result, {
            stretched: stretched,
            stretchedX: stretchedX,
            stretchedY: stretchedY,
            originX: originX,
            originY: originY
          }),
        false
      )
      reader.readAsDataURL(accepted[0])
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    /*eslint-disable no-console*/
    ;(function(console) {
      console.save = function(data, filename) {
        console.log({data})
        if (!data) {
          console.error('Console.save: No data')
          return
        }
        if (!filename) filename = 'console.json'
        if (typeof data === 'object') {
          data = JSON.stringify(data, undefined, 4)
        }
        var blob = new Blob([data], { type: 'text/json' }),
          e = document.createEvent('MouseEvents'),
          a = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent(
          'click',
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        )
        a.dispatchEvent(e)
      }
    })(console)

    this.setState({
      lineColor: `rgba(${this.state.rgbColor}, ${this.state.opacity})`
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    if (this.props.type === 'zoo') {
      this.setState({
        sketchWidth: window.innerWidth,
        sketchHeight: window.innerHeight
      })
    }
    else if (this.props.type === 'sky') {
      // if this is called on resize then nothing needs to be set again
      if (window.innerWidth > 768) {
        this.setState({
          sketchWidth: 600,
          sketchHeight: 450
        })
      }
      else {
        this.setState({
          sketchWidth: 300,
          sketchHeight: 225
        })
      }
    }
  }

  updateSpriteNumber() {
    let sketchObjects = this._sketch.toObject().objects
    sketchObjects.reduce((acc, item) => {
      if (item.type === "sprite") {
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

  changeWidth(e) {
    this.setState({
      lineWidth: Number(e.target.value)
    })
  }

  async changeOpacity(e) {
    await this.setState({
      opacity: Number(e.target.value / 10)
    })
    this.setState({
      lineColor: `rgba(${this.state.rgbColor}, ${this.state.opacity})`
    })
  }

  render() {
    const { type } = this.props
    return (
      <Container>
        <DrawingToolHeader headerType='sky' onSave={this._save} />
        <LeftPanelContainer type={type}>
          <LeftPanel 
            changeTool={this.changeTool}
            selectedSection={this.state.selectedSection}
          />
        </LeftPanelContainer>
        <SketchContainer>
          <SketchField
            name="sketch"
            className="canvas-area"
            ref={c => (this._sketch = c)}
            lineColor={this.state.lineColor}
            lineWidth={this.state.lineWidth}
            backgroundColor={
              this.props.type === 'sky'
                ? '#ebebeb'
                : 'transparent'
            }
            height={this.state.sketchHeight}
            width={this.state.sketchWidth}
            forceValue={true}
            onChange={this._onSketchChange}
            tool={this.state.tool}
            spriteNumber={this.state.spriteNumber}
          />
        </SketchContainer>
        <RightPanelContainer type={type}>
          <RightPanel 
            selectedSection={this.state.selectedSection} 
            undo={this._undo}
            redo={this._redo}
            clear={this._clear}
            canUndo={this.state.canUndo}
            canRedo={this.state.canRedo}
            changeWidth={this.changeWidth}
            lineWidth={this.state.lineWidth}
            changeOpacity={this.changeOpacity}
            changeColor={this.changeColor}
            opacity={this.state.opacity}
            lineColor={this.state.lineColor}
            rgbColor={this.state.rgbColor}
          />
        </RightPanelContainer>
      </Container>
    )
  }
}
