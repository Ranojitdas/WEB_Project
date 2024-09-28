import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = ({ progress }) => {
  return (
    <>
      <h2 className="text-center">Progress: {progress}%</h2>
      <ProgressBar animated now={progress} />
    </>
  );
};

export default Progress;
