import React from 'react';

import Circle from './Circle';
import Wrapper from './Wrapper';

const LoadingIndicator = (props) => (
  <Wrapper margin={props.margin} height={props.height} width={props.width}>
    <Circle />
    <Circle rotate={30} delay={-1.1} />
    <Circle rotate={60} delay={-1} />
    <Circle rotate={90} delay={-0.9} />
    <Circle rotate={120} delay={-0.8} />
    <Circle rotate={150} delay={-0.7} />
    <Circle rotate={180} delay={-0.6} />
    <Circle rotate={210} delay={-0.5} />
    <Circle rotate={240} delay={-0.4} />
    <Circle rotate={270} delay={-0.3} />
    <Circle rotate={300} delay={-0.2} />
    <Circle rotate={330} delay={-0.1} />
  </Wrapper>
);

LoadingIndicator.defaultProps = {
  height: 40,
  width: 40,
  margin: 2,
};

LoadingIndicator.propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  margin: React.PropTypes.number,
};

export default LoadingIndicator;
