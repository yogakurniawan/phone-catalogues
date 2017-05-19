import React, { PropTypes } from 'react';
import styled from 'styled-components';
import NormalImg from 'components/Img';
import { WhiteH4, OrangeH4 } from './H4';
import RoundedBox from './RoundedBox';
import Overlay from './Overlay';

const Img = styled(NormalImg) `
  width: 117px;
  height: 40px;
`;

class Component extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <RoundedBox className="row" to={`/devices/${encodeURIComponent(item.title)}?page=1`}>
          <div className="col-xs-12">
            <Img src={item.logoUrl} />
            <OrangeH4>{item.title}</OrangeH4>
            <Overlay className="overlay">
              <WhiteH4>{item.title}</WhiteH4>
              <WhiteH4>{item.totalProducts} devices</WhiteH4>
            </Overlay>
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
