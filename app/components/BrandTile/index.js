import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Sizes from 'react-sizes';

import H3 from './H3';
import H4 from './H4';
import RoundedBox from './RoundedBox';

const Title = styled.span`
  h3 {
    font-size: ${(props) => props.isMobile ? '1em' : 'auto'};
  }
`;

class Component extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, isMobile } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <RoundedBox className="row" to={`/devices/${encodeURIComponent(item.title)}?page=1`}>
          <div className="col-xs-12">
            <Title isMobile={isMobile}><H3>{item.title}</H3></Title>
            <H4>{item.totalProducts} devices</H4>
          </div>
        </RoundedBox>
      </div>
    );
  }
}

Component.propTypes = {
  item: PropTypes.object,
  isMobile: PropTypes.bool,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
});

export default Sizes(mapSizesToProps)(Component);
