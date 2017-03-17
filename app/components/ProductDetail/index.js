import React, { PropTypes } from 'react';
import styled from 'styled-components';
import H2 from 'components/H2';

import RoundedBoxStyle from 'components/RoundedBox';
const Div = styled.div`${RoundedBoxStyle}`;
const HeaderBox = styled(Div)`
  h2 {
    text-align: left;
  }
  padding-left: 10px;
`;

function Element({ detail }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <HeaderBox>
      <H2>{detail.name}</H2>
    </HeaderBox>
  );
}

Element.propTypes = {
  detail: PropTypes.object,
};

export default Element;
