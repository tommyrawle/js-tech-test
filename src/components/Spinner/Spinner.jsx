import React from 'react';
import SpinnerGif from './Spinner.gif';
import { SpinnerWrapper, SpinnerImage } from './Spinner.styles.jsx';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerImage src={SpinnerGif} alt="loading indicator" />
    </SpinnerWrapper>
  );
};

export default Spinner;
