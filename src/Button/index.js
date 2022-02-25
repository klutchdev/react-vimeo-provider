import React from 'react';
import { bool, element, func, string, element } from 'prop-types';

const Button = ({
  ref,
  type,
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
    width: width || 'auto',
    height: height || '2.75rem',
    color: color || '#030303cc',
    margin: margin || '1rem auto',
    boxShadow: shadow && '0px 0px 12px #03030350',
    background: background || '#0091ff',
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type || 'button'}
      style={style || defaultStyle}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  ref: element(Element),
  type: string,
  label: string.isRequired,
  width: string,
  color: string,
  style: object,
  height: string,
  margin: string,
  shadow: bool,
  onClick: func,
  disabled: bool,
  className: string,
  background: string,
};

export default Button;
