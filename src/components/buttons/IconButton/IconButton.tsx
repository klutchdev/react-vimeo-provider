import React, { CSSProperties } from 'react';
import '../buttons.css';

export interface IconButtonProps {
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

const IconButton = ({
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
}: IconButtonProps) => {
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
      className={className || 'icon-button'}
      type={type || 'button'}
      style={style || defaultStyle}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default IconButton;
