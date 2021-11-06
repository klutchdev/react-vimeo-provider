import React from "react";
import { bool, element, func, string } from "prop-types";

const Button = ({
  label,
  onClick,
  width,
  height,
  margin,
  background,
  color,
  border,
  radius,
  disabled,
  icon,
  className,
  buttonType,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        width: width || "auto",
        border: border || "none",
        height: height || "2.75rem",
        color: color || "#030303cc",
        margin: margin || "1rem auto",
        borderRadius: radius || (buttonType === "rounded" && "500px") || "4px",
        border: border || "none",
        boxShadow: "0px 0px 12px #03030350",
        transition: "all 250ms ease",
        fontSize: "1.1rem",
        fontWeight: 600,
        padding: "0 1.rem",
        display: "flex",
        alignItems: "center",
        justifyContent: (buttonType === "icon" && "space-evenly") || "center",
        background: background || (buttonType === "text" && "transparent") || "#0091ff",
      }}
    >
      {buttonType === "icon" && icon} {label}
    </button>
  );
};

Button.propTypes = {
  label: string,
  onClick: func,
  width: string,
  height: string,
  margin: string,
  background: string,
  color: string,
  border: string,
  radius: string,
  disabled: bool,
  icon: element,
  className: string,
  buttonType: string,
};

export default Button;
