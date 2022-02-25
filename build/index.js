(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["klutch-ui"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

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
        props = _objectWithoutProperties(_ref, _excluded$2);

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
    return /*#__PURE__*/React__default["default"].createElement("button", _extends({
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
        props = _objectWithoutProperties(_ref, _excluded$1);

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
    }, "\n        .rotation {\n          animation: rotation 1.2s linear infinite;\n        }\n        @keyframes rotation {\n          0% {\n            transform: rotate(0);\n          }\n          to {\n            transform: rotate(1turn);\n          }\n        }\n      "), /*#__PURE__*/React__default["default"].createElement("button", _extends({
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
        props = _objectWithoutProperties(_ref, _excluded);

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
    return /*#__PURE__*/React__default["default"].createElement("button", _extends({
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

  Object.defineProperty(exports, '__esModule', { value: true });

}));
