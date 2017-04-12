import React, { PropTypes } from 'react';
import styled from 'styled-components';

import H3 from './H3';
import H4 from './H4';
import RoundedBox from './RoundedBox';

const Title = styled.span`
  @media (max-width: 480px) {
    h3 {
      font-size: 1em};
    }
  }
`;

class Component extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <RoundedBox className="row" to={`/devices/${encodeURIComponent(item.title)}?page=1`}>
          <div className="col-xs-12">
            <Title><H3>{item.title}</H3></Title>
            <H4>{item.totalProducts} devices</H4>
          </div>
        </RoundedBox>
      </div>
    );
  }
}

Component.propTypes = {
  item: PropTypes.object,
};

export default Component;
