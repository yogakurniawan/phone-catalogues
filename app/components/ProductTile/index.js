import React, { PropTypes } from 'react';
import styled from 'styled-components';

import RoundedBoxStyle from 'components/RoundedBox';
import H4 from './H4';
import Img from './Img';

const RoundedBox = styled.div`${RoundedBoxStyle}`;
const DeviceName = styled.span`
  cursor: pointer;
  h4:hover {
    color: #f53e3e;
  }
`;

const ImgWrapper = styled.div`
  cursor: pointer;
`;

function Element({ item, onClick }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ maxWidth: '400px' }}>
      <RoundedBox className="row">
        <div className="col-xs-12">
          <DeviceName onClick={onClick}><H4>{item.name}</H4></DeviceName>
        </div>
        <div className="col-xs-12">
          <ImgWrapper onClick={onClick}><Img src={item.imageurl} /></ImgWrapper>
        </div>
      </RoundedBox>
    </div>
  );
}

Element.propTypes = {
  onClick: PropTypes.func,
  item: PropTypes.object,
};

export default Element;
