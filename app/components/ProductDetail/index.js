import React, { PropTypes } from 'react';
import styled from 'styled-components';

import RoundedBoxStyle from 'components/RoundedBox';
const HeaderBox = styled.div`${RoundedBoxStyle}`;

function Element({ detail }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-8">
      <HeaderBox className="row">
      </HeaderBox>
    </div>
  );
}

Element.propTypes = {
  detail: PropTypes.object,
};

export default Element;
