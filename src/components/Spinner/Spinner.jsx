import React from 'react';
import './Spinner.css';

const Spinner = ({ loading, children }) => {
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }
  return children;
};

export default Spinner;
