'use strict'

import FabricCanvasTool from './fabrictool'
const fabric = require('fabric').fabric

class Sticker extends FabricCanvasTool {
  configureCanvas (props) {
    let canvas = this._canvas
    canvas.isDrawingMode = canvas.selection = false
    canvas.forEachObject(o => (o.selectable = o.evented = false))
  }

  doMouseDown (event) {
    fabric.Sprite.fromURL(
      'http://fabricjs.com/assets/sprite.png',
      this.createSprite(event.pointer.x, event.pointer.y)
    )
    let canvas = this._canvas
    let render = function () {
      canvas.renderAll()
      fabric.util.requestAnimFrame(render)
    }
    fabric.util.requestAnimFrame(render)
  }

  createSprite (i, j) {
    let canvas = this._canvas
    return function (sprite) {
      sprite.set({
        left: i - sprite.width / 2,
        top: j - sprite.height / 2
      })
      canvas.add(sprite)
      sprite.play()
    }
  }
}

export default Sticker

fabric.Sprite = fabric.util.createClass(fabric.Image, {
  type: 'sprite',
  spriteWidth: 50,
  spriteHeight: 72,
  spriteIndex: 0,

  initialize: function (element, options) {
    options || (options = {})
    options.width = this.spriteWidth
    options.height = this.spriteHeight

    this.callSuper('initialize', element, options)
    this.createTmpCanvas()
    this.createSpriteImages()
  },

  createTmpCanvas: function () {
    this.tmpCanvasEl = fabric.util.createCanvasElement()
    this.tmpCanvasEl.width = this.spriteWidth || this.width
    this.tmpCanvasEl.height = this.spriteHeight || this.height
  },

  createSpriteImages: function () {
    this.spriteImages = []
    var steps = this._element.width / this.spriteWidth
    for (var i = 0; i < steps; i++) {
      this.createSpriteImage(i)
    }
  },

  createSpriteImage: function (i) {
    var tmpCtx = this.tmpCanvasEl.getContext('2d')
    tmpCtx.clearRect(0, 0, this.tmpCanvasEl.width, this.tmpCanvasEl.height)
    tmpCtx.drawImage(this._element, -i * this.spriteWidth, 0)

    var dataURL = this.tmpCanvasEl.toDataURL('image/png')
    var tmpImg = fabric.util.createImage()
    tmpImg.src = dataURL

    this.spriteImages.push(tmpImg)
  },

  _render: function (ctx) {
    ctx.drawImage(
      this.spriteImages[this.spriteIndex],
      -this.width / 2,
      -this.height / 2
    )
  },

  play: function () {
    var _this = this
    this.animInterval = setInterval(function () {
      _this.onPlay && _this.onPlay()

      _this.spriteIndex++
      if (_this.spriteIndex === _this.spriteImages.length) {
        _this.spriteIndex = 0
      }
    }, 100)
  },
  stop: function () {
    clearInterval(this.animInterval)
  }
})

fabric.Sprite.fromURL = function (url, callback, imgOptions) {
  fabric.util.loadImage(
    url,
    function (img) {
      callback(new fabric.Sprite(img, imgOptions))
    },
    null,
    { crossOrigin: 'Anonymous' }
  )
}

fabric.Sprite.async = true
