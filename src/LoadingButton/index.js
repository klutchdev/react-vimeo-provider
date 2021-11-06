import React from "react";
import { bool, element, func, string } from "prop-types";

const LoadingButton = ({
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
  loader,
  loading,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        width: width || "25%",
        border: border || "none",
        height: height || "2.75rem",
        color: color || "#030303cc",
        margin: margin || "1rem auto",
        borderRadius: radius || "4px",
        border: border || "none",
        boxShadow: "0px 0px 12px #03030350",
        transition: "all 250ms ease",
        fontSize: "1.1rem",
        fontWeight: 600,
        padding: "0 1.rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: background || "#0091ff",
      }}
    >
      {loading ? loader : label}
    </button>
  );
};

LoadingButton.propTypes = {
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
  loader: element,
  loading: bool,
  className: string,
};

export default LoadingButton;
