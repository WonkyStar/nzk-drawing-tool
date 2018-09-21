'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var History = function () {
  function History() {
    var undoLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, History);

    this.undoLimit = undoLimit;
    this.undoList = [];
    this.redoList = [];
    this.current = null;
    this.debug = debug;
  }

  _createClass(History, [{
    key: 'getUndoLimit',
    value: function getUndoLimit() {
      return this.undoLimit;
    }
  }, {
    key: 'getCurrent',
    value: function getCurrent() {
      return this.current;
    }

    // Keep an object in history
    // This method will set the object as current value and will push the previous "current" object to the undo history

  }, {
    key: 'keep',
    value: function keep(obj) {
      try {
        this.redoList = [];
        if (this.current) {
          this.undoList.push(this.current);
        }
        if (this.undoList.length > this.undoLimit) {
          this.undoList.shift();
        }
        this.current = obj;
      } finally {
        this.print();
      }
    }
  }, {
    key: 'undo',
    value: function undo() {
      try {
        if (this.current) {
          this.redoList.push(this.current);
          if (this.redoList.length > this.undoLimit) {
            this.redoList.shift();
          }
          if (this.undoList.length === 0) this.current = null;
        }
        if (this.undoList.length > 0) {
          this.current = this.undoList.pop();
          return this.current;
        }
        return null;
      } finally {
        this.print();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      try {
        if (this.redoList.length > 0) {
          if (this.current) this.undoList.push(this.current);
          this.current = this.redoList.pop();
          return this.current;
        }
        return null;
      } finally {
        this.print();
      }
    }
  }, {
    key: 'canRedo',
    value: function canRedo() {
      return this.redoList.length > 0;
    }
  }, {
    key: 'canUndo',
    value: function canUndo() {
      return this.undoList.length > 0 || this.current != null;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.undoList = [];
      this.redoList = [];
      this.current = null;
      this.print();
    }
  }, {
    key: 'print',
    value: function print() {
      if (this.debug) {
        /* eslint-disable no-console */
        console.log(this.undoList, ' -> ' + this.current + ' <- ', this.redoList.slice(0).reverse());
      }
    }
  }]);

  return History;
}();

exports.default = History;