import FabricCanvasTool from './fabrictool'
import { colors } from '../index.styles'

class Pencil extends FabricCanvasTool {
  configureCanvas (props) {
    this._canvas.isDrawingMode = true
    if (props.isEraser) {
      this._canvas.freeDrawingBrush.width = props.eraserLineWidth
      this._canvas.freeDrawingBrush.color = colors.grey
    }
    else {
      this._canvas.freeDrawingBrush.width = props.lineWidth
      this._canvas.freeDrawingBrush.color = props.lineColor
    }
    this._canvas.on('path:created', function (e) {
      // Source over = draw
      e.path.globalCompositeOperation = 'source-over'
      // This will not add an SVG CSS class, but at least will allow us to identify erasures in object list
      e.path.setOptions({ class: 'drawing' })
    })
  }

  doMouseUp (event) {
    this._canvas.renderAll()
  }
}

export default Pencil
