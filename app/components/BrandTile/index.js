import React, { PropTypes } from 'react';

import RoundedBox from 'components/RoundedBox';
import H4 from 'components/H4';
import H2 from './H2';

function Element({ item }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-8 col-sm-6 col-md-3 col-lg-3">
      <RoundedBox className="row">
        <div className="col-xs-12">
          <H2>{item.title}</H2>
          <H4>{item.totalProducts} products</H4>
        </div>
      </RoundedBox>
    </div>
  );
}

Element.propTypes = {
  item: PropTypes.object,
};

export default Element;
