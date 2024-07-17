import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgressBarComponent({ progress }) {
  return <ProgressBar now={progress} label={`${progress}%`} />;
}
