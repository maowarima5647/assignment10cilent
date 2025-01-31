// LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
      <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
