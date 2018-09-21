import React, { Component } from 'react'
import { CanvasContainer } from './Drawings.styles'

export default class Drawing extends Component {
  constructor(props) {
    super(props)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.endPaintEvent = this.endPaintEvent.bind(this)
    this.resizeCanvas = this.resizeCanvas.bind(this)
  }

  isPainting = false
  // Different stroke styles to be used for user and guest
  userStrokeStyle = '#EE92C2'
  guestStrokeStyle = '#F0C987'
  line = []
  prevPos = { offsetX: 0, offsetY: 0 }

  onMouseDown({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent
    this.isPainting = true
    this.prevPos = { offsetX, offsetY }
  }

  onMouseMove({ nativeEvent }) {
    if (this.isPainting) {
      const { offsetX, offsetY } = nativeEvent
      const offSetData = { offsetX, offsetY }
      // Set the start and stop position of the paint event.
      const positionData = {
        start: { ...this.prevPos },
        stop: { ...offSetData },
      }
      // Add the position to the line array
      this.line = this.line.concat(positionData)
      this.paint(this.prevPos, offSetData, this.userStrokeStyle)
    }
  }
  
  endPaintEvent() {
    if (this.isPainting) {
      this.isPainting = false
    }
  }
  
  paint(prevPos, currPos, strokeStyle) {
    const { offsetX, offsetY } = currPos
    const { offsetX: x, offsetY: y } = prevPos
    const { mode } = this.props
    
    if (mode === 'pen') {
      this.ctx.globalCompositeOperation = 'source-over';
    }
    if (mode === 'eraser') {
      this.ctx.globalCompositeOperation = 'destination-out';
    }

    this.ctx.beginPath()
    this.ctx.strokeStyle = strokeStyle
    // Move the the prevPosition of the mouse
    this.ctx.moveTo(x, y)
    // Draw a line to the current position of the mouse
    this.ctx.lineTo(offsetX, offsetY)
    // Visualize the line using the strokeStyle
    this.ctx.stroke()
    this.prevPos = { offsetX, offsetY }
  }

  componentDidMount() {
    // Here we set up the properties of the canvas element. 
    this.canvas.width = window.innerWidth * 0.8
    this.canvas.height = window.innerHeight
    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 10

    window.addEventListener('resize', this.resizeCanvas)
  }

  resizeCanvas() {
    let temp_cnvs = document.createElement('canvas');
    let temp_cntx = temp_cnvs.getContext('2d');
// set it to the new width & height and draw the current canvas data into it // 
    temp_cnvs.width = window.innerWidth * 0.8
    temp_cnvs.height = window.innerHeight
    temp_cnvs.background = 'transparent'
    temp_cntx.fillStyle = 'transparent'
    temp_cntx.fillRect(0, 0, window.innerWidth * 0.8, window.innerHeight);
    temp_cntx.drawImage(this.canvas, 0, 0);
// resize & clear the original canvas and copy back in the cached pixel data //
    this.canvas.width = window.innerWidth * 0.8
    this.canvas.height = window.innerHeight
    this.ctx.lineWidth = 10
    this.ctx.lineCap = this.ctx.lineJoin = 'round'
    this.ctx.drawImage(temp_cnvs, 0, 0)
  }

  render() {
    return (
      <CanvasContainer>
        <canvas
          // We use the ref attribute to get direct access to the canvas element. 
          ref={(ref) => (this.canvas = ref)}
          onMouseDown={this.onMouseDown}
          onMouseLeave={this.endPaintEvent}
          onMouseUp={this.endPaintEvent}
          onMouseMove={this.onMouseMove}
        />
      </CanvasContainer>
    )
  }
}