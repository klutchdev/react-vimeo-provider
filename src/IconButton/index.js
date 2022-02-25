import React from "react";

const IconButton = ({
  ref,
  type,
  icon,
  label,
  width,
  color,
  style,
  height,
  margin,
  shadow,
  onClick,
  disabled,
  className,
  background,
  ...props
}) => {
  const defaultStyle = {
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
    transition: "all 250ms ease",
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type || "button"}
      style={style || defaultStyle}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default IconButton;
