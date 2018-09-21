class FabricCanvasTool {
  constructor (canvas) {
    this._canvas = canvas
    this._context = canvas.getContext('2d')
  }

  configureCanvas (props) {}

  doMouseUp (event) {}

  doMouseDown (event) {}

  doMouseMove (event) {}

  doMouseOut (event) {}
}

export default FabricCanvasTool
