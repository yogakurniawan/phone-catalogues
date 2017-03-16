import React, { PropTypes } from 'react';
import styled from 'styled-components';

import HeaderBox from './HeaderBox';

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
