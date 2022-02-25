import React from 'react';
import DismissButton from './Dismiss';
import '../haptics.scss';

export interface AlertProps {
  content: string;
  handleDismiss: () => void;
}

const Alert = ({ content, handleDismiss }: AlertProps) => {
  return (
    <div className="alert">
      <div className="alert-text-container">
        <h5>{content}</h5>
      </div>
      <DismissButton onClick={handleDismiss} />
    </div>
  );
};

export default Alert;
