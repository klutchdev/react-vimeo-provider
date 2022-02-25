import React, { CSSProperties } from 'react';
import '../buttons.css';

export interface LoadingButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: any;
  label?: string;
  width?: string;
  color?: string;
  style?: CSSProperties;
  height?: string;
  margin?: string;
  shadow?: boolean;
  loader?: any;
  onClick?: () => void;
  loading: boolean;
  disabled?: boolean;
  className?: string;
  background?: string;
  props?: any;
}

const LoadingButton = ({
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
}: LoadingButtonProps) => {
  const defaultStyle: CSSProperties = {
    width: width || 'auto',
    minWidth: '6.5rem',
    height: height || '2.75rem',
    color: color || '#030303cc',
    margin: margin || '1rem auto',
    background: background || '#0091ff',
    boxShadow: '0px 0px 12px #03030350',
  };

  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={className}
        type={type || 'button'}
        style={style || defaultStyle}
        {...props}
      >
        {loading ? loader : label}
      </button>
    </>
  );
};

export default LoadingButton;
