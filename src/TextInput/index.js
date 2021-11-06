import React from "react";
import { string, element, func, bool, any } from "prop-types";

const TextInput = ({
  value,
  onChange,
  leftIcon,
  rightIcon,
  placeholder,
  color,
  bgColor,
  border,
  radius,
  leftIconColor,
  rightIconColor,
  disabled,
  className,
  width,
  height,
  margin,
  padding,
  autoComplete,
}) => {
  return (
    <div
      disabled={disabled}
      className={className}
      style={{
        width: width || "100%",
        height: height || "2.75rem",
        margin: margin || "0.25rem 0 1rem 0",
        padding: padding || "0 0.5rem",
        outline: "none",
        background: bgColor || "#03030350",
        border: border || "2px solid #424a4f",
        borderRadius: radius || "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        transition: "all 300ms ease",
        boxShadow: "0px 0px 12px #03030350",
      }}
    >
      {leftIcon && (
        <div
          style={{
            margin: "0 auto 0 0",
            width: "3rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: leftIconColor || "#3e4244",
            transition: "all 300ms ease",
          }}
        >
          {leftIcon}
        </div>
      )}
      <input
        type={"text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete || "off"}
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: color || "#cccccc",
          background: "transparent",
          fontSize: "1.25rem",
          fontFamily: "Montserrat",
          letterSpacing: 0,
          fontWeight: 600,
        }}
      />
      {rightIcon && (
        <div
          style={{
            margin: "auto 0 auto auto",
            width: "3rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: rightIconColor || "#424a4f",
            transition: "all 300ms ease",
          }}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  value: string,
  onChange: func,
  leftIcon: element,
  rightIcon: element,
  placeholder: string,
  color: string,
  bgColor: string,
  border: string,
  radius: string,
  leftIconColor: string,
  rightIconColor: string,
  width: string,
  height: string,
  margin: string,
  padding: string,
  autoComplete: string,
  className: string,
  disabled: bool,
};

export default TextInput;
