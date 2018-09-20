class History {
  constructor (undoLimit = 10, debug = false) {
    this.undoLimit = undoLimit
    this.undoList = []
    this.redoList = []
    this.current = null
    this.debug = debug
  }

  getUndoLimit () {
    return this.undoLimit
  }

  getCurrent () {
    return this.current
  }

  // Keep an object in history
  // This method will set the object as current value and will push the previous "current" object to the undo history
  keep (obj) {
    try {
      this.redoList = []
      if (this.current) {
        this.undoList.push(this.current)
      }
      if (this.undoList.length > this.undoLimit) {
        this.undoList.shift()
      }
      this.current = obj
    } finally {
      this.print()
    }
  }

  undo () {
    try {
      if (this.current) {
        this.redoList.push(this.current)
        if (this.redoList.length > this.undoLimit) {
          this.redoList.shift()
        }
        if (this.undoList.length === 0) this.current = null
      }
      if (this.undoList.length > 0) {
        this.current = this.undoList.pop()
        return this.current
      }
      return null
    } finally {
      this.print()
    }
  }

  redo () {
    try {
      if (this.redoList.length > 0) {
        if (this.current) this.undoList.push(this.current)
        this.current = this.redoList.pop()
        return this.current
      }
      return null
    } finally {
      this.print()
    }
  }

  canRedo () {
    return this.redoList.length > 0
  }

  canUndo () {
    return this.undoList.length > 0 || this.current != null
  }

  clear () {
    this.undoList = []
    this.redoList = []
    this.current = null
    this.print()
  }

  print () {
    if (this.debug) {
      /* eslint-disable no-console */
      console.log(
        this.undoList,
        ' -> ' + this.current + ' <- ',
        this.redoList.slice(0).reverse()
      )
    }
  }
}

export default History
