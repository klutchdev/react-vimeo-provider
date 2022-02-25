import React, { CSSProperties } from 'react';
import '../buttons.css';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: any;
  label?: string;
  width?: string;
  color?: string;
  style?: CSSProperties;
  height?: string;
  margin?: string;
  shadow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  background?: string;
  props?: any;
}

const Button = ({
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
}: ButtonProps) => {
  const defaultStyle = {
    width: width || 'auto',
    minWidth: '6.5rem',
    height: height || '2.75rem',
    color: color || '#030303cc',
    margin: margin || '1rem auto',
    background: background || '#0091ff',
    boxShadow: '0px 0px 12px #03030350',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
      style={style || defaultStyle}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
