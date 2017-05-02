import React, { PropTypes } from 'react';
import styled from 'styled-components';
import NormalImg from 'components/Img';
import { WhiteH3, OrangeH3 } from './H3';
import { WhiteH4, GreyH4 } from './H4';
import RoundedBox from './RoundedBox';

const BrandTitle = styled(OrangeH3) `
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Img = styled(NormalImg) `
  width: 130px;
  height: 40px;
`;

class Component extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <RoundedBox className="row" to={`/devices/${encodeURIComponent(item.title)}?page=1`}>
          <div id="realimage" className="col-xs-12">
            <Img src={item.logoUrl} />
          </div>
          <div id="realtext" className="col-xs-12">
            <BrandTitle>{item.title}</BrandTitle>
            <GreyH4>{item.totalProducts} devices</GreyH4>
          </div>
          <div id="overtext">
            <WhiteH3>{item.title}</WhiteH3>
            <WhiteH4>{item.totalProducts} devices</WhiteH4>
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
