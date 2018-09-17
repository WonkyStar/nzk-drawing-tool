/* eslint no-unused-vars: 0 */
'use strict'

/**
 * "Abstract" like base class for a Canvas tool
 */
class FabricCanvasTool {
  constructor (canvas) {
    this._canvas = canvas
    
    // context is unecessary I think
    // this._context = canvas.getContext('2d')
  }

  configureCanvas (props) {}

  doMouseUp (event) {}

  doMouseDown (event) {}

  doMouseMove (event) {}

  doMouseOut (event) {}
}

export default FabricCanvasTool
