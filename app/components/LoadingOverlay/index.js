import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import Wrapper from './Wrapper';
import Layer from './Layer';

const LoadingOverlay = () => (
  <Layer>
    <Wrapper>
      <LoadingIndicator margin={0} height={80} width={80} />
    </Wrapper>
  </Layer>
);

export default LoadingOverlay;
