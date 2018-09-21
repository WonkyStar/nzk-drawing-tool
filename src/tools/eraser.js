import FabricCanvasTool from './fabrictool'
import { colors } from '../index.styles'

class Eraser extends FabricCanvasTool {
  configureCanvas (props) {
    this._canvas.isDrawingMode = true
    this._canvas.freeDrawingBrush.width = props.eraserLineWidth
    this._canvas.freeDrawingBrush.color = colors.grey
    this._canvas.on('path:created', function (e) {
      e.path.canvas.renderAll()
      // Destination out = erase
      e.path.globalCompositeOperation = 'destination-out'
      // This will not add an SVG CSS class, but at least will allow us to identify
      // erasures in object list
      e.path.setOptions({ class: 'erasure' })
    })
    this._canvas.renderAll()
  }

  doMouseUp (event) {
    this._canvas.renderAll()
  }
}

export default Eraser
