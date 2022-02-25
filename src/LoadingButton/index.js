import React from 'react';
import { bool, element, func, string, object } from 'prop-types';
import './index.css';

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
  onClick,
  loading,
  disabled,
  className,
  background,
  ...props
}) => {
  const defaultStyle = {
    minWidth: '6rem',
    width: width || 'auto',
    height: height || '2.75rem',
    color: color || '#030303cc',
    margin: margin || '1rem auto',
    boxShadow: shadow && '0px 0px 12px #03030350',
    background: background || '#0091ff',
  };

  const Loader = () => (
    <div
      className="rotation"
      style={{
        margin: 'auto',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        border: `5px solid #03030320`,
        borderTop: '5px solid #030303ee',
      }}
    />
  );

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
      {loading ? <Loader /> : label}
    </button>
  );
};

LoadingButton.propTypes = {
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
  loading: bool.isRequired,
  disabled: bool,
  className: string,
  background: string,
};

export default LoadingButton;
