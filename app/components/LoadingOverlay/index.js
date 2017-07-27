import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import Layer from './Layer';

const LoadingOverlay = () => (
  <Layer>
    <LoadingIndicator />
  </Layer>
);

export default LoadingOverlay;
