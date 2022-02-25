import React from "react";

const LoadingButton = ({
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
  loader,
  onClick,
  loading,
  disabled,
  className,
  background,
  ...props
}) => {
  const defaultStyle = {
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
    transition: "all 250ms ease",
  };

  return (
    <>
      <style jsx>{`
        .rotation {
          animation: rotation 1.2s linear infinite;
        }
        @keyframes rotation {
          0% {
            transform: rotate(0);
          }
          to {
            transform: rotate(1turn);
          }
        }
      `}</style>

      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={className}
        type={type || "button"}
        style={style || defaultStyle}
        {...props}
      >
        {loading ? loader : label}
      </button>
    </>
  );
};

export default LoadingButton;
