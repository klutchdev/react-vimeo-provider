'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded$2 = ["ref", "type", "label", "width", "color", "style", "height", "margin", "shadow", "onClick", "disabled", "className", "background"];

var Button = function Button(_ref) {
  var ref = _ref.ref,
      type = _ref.type,
      label = _ref.label,
      width = _ref.width,
      color = _ref.color,
      style = _ref.style,
      height = _ref.height,
      margin = _ref.margin,
      shadow = _ref.shadow,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      className = _ref.className,
      background = _ref.background,
      props = _objectWithoutProperties__default["default"](_ref, _excluded$2);

  var defaultStyle = {
    width: width || "auto",
    height: height || "2.75rem",
    color: color || "#030303cc",
    margin: margin || "1rem auto",
    background: background || "#0091ff",
    boxShadow: shadow && "0px 0px 12px #03030350",
    border: "none",
    outline: "none",
    display: "flex",
    fontWeight: 600,
    padding: "0.75rem",
    fontSize: "1.1rem",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 250ms ease"
  };
  return /*#__PURE__*/React__default["default"].createElement("button", _extends__default["default"]({
    ref: ref,
    onClick: onClick,
    disabled: disabled,
    className: className,
    type: type || "button",
    style: style || defaultStyle
  }, props), label);
};

var _excluded$1 = ["ref", "type", "icon", "label", "width", "color", "style", "height", "margin", "shadow", "loader", "onClick", "loading", "disabled", "className", "background"];

var LoadingButton = function LoadingButton(_ref) {
  var ref = _ref.ref,
      type = _ref.type;
      _ref.icon;
      var label = _ref.label,
      width = _ref.width,
      color = _ref.color,
      style = _ref.style,
      height = _ref.height,
      margin = _ref.margin,
      shadow = _ref.shadow,
      loader = _ref.loader,
      onClick = _ref.onClick,
      loading = _ref.loading,
      disabled = _ref.disabled,
      className = _ref.className,
      background = _ref.background,
      props = _objectWithoutProperties__default["default"](_ref, _excluded$1);

  var defaultStyle = {
    minWidth: "6rem",
    width: width || "auto",
    height: height || "2.75rem",
    color: color || "#030303cc",
    margin: margin || "1rem auto",
    background: background || "#0091ff",
    boxShadow: shadow && "0px 0px 12px #03030350",
    border: "none",
    outline: "none",
    display: "flex",
    fontWeight: 600,
    padding: "0.75rem",
    fontSize: "1.1rem",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 250ms ease"
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("style", {
    jsx: true
  }, "\n        .rotation {\n          animation: rotation 1.2s linear infinite;\n        }\n        @keyframes rotation {\n          0% {\n            transform: rotate(0);\n          }\n          to {\n            transform: rotate(1turn);\n          }\n        }\n      "), /*#__PURE__*/React__default["default"].createElement("button", _extends__default["default"]({
    ref: ref,
    onClick: onClick,
    disabled: disabled,
    className: className,
    type: type || "button",
    style: style || defaultStyle
  }, props), loading ? loader : label));
};

var _excluded = ["ref", "type", "icon", "label", "width", "color", "style", "height", "margin", "shadow", "onClick", "disabled", "className", "background"];

var IconButton = function IconButton(_ref) {
  var ref = _ref.ref,
      type = _ref.type,
      icon = _ref.icon,
      label = _ref.label,
      width = _ref.width,
      color = _ref.color,
      style = _ref.style,
      height = _ref.height,
      margin = _ref.margin,
      shadow = _ref.shadow,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      className = _ref.className,
      background = _ref.background,
      props = _objectWithoutProperties__default["default"](_ref, _excluded);

  var defaultStyle = {
    width: width || "auto",
    height: height || "2.75rem",
    color: color || "#030303cc",
    margin: margin || "1rem auto",
    background: background || "#0091ff",
    boxShadow: shadow && "0px 0px 12px #03030350",
    border: "none",
    outline: "none",
    display: "flex",
    fontWeight: 600,
    padding: "0.75rem",
    fontSize: "1.1rem",
    alignItems: "center",
    justifyContent: "space-evenly",
    transition: "all 250ms ease"
  };
  return /*#__PURE__*/React__default["default"].createElement("button", _extends__default["default"]({
    ref: ref,
    onClick: onClick,
    disabled: disabled,
    className: className,
    type: type || "button",
    style: style || defaultStyle
  }, props), icon, " ", label);
};

exports.Button = Button;
exports.IconButton = IconButton;
exports.LoadingButton = LoadingButton;
