"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _Button = function Button(_ref) {
  var onClick = _ref.onClick,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_Button, {
    onClick: onClick
  }, label);
};
var _default = exports["default"] = _Button;