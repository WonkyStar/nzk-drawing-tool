"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasContainer = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"], ["\n  position: relative;\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CanvasContainer = exports.CanvasContainer = _styledComponents2.default.div(_templateObject);