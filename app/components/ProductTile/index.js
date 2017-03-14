import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import P from 'components/P';
import RoundedBoxStyle from 'components/RoundedBox';
import H4 from './H4';
import Img from './Img';

const RoundedBox = styled.div`${RoundedBoxStyle}`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Element({ item, brand }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ maxWidth: '400px' }}>
      <RoundedBox className="row">
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <Img src={item.imageurl} />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-7 col-lg-8">
          <StyledLink to={`/detail?brand=${brand}&device=${item.name}`}><H4>{item.name}</H4></StyledLink>
          <P>{item.description}</P>
        </div>
      </RoundedBox>
    </div>
  );
}

Element.propTypes = {
  item: PropTypes.object,
  brand: PropTypes.string,
};

export default Element;
