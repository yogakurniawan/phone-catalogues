import React, { PropTypes } from 'react';

import RoundedBox from 'components/RoundedBox';
import H2 from './H2';

function Element({ item }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" style={{ maxWidth: '30rem' }}>
        <RoundedBox className="row">
          <div className="col-xs-12">
            <H2>{item.title}</H2>
          </div>
        </RoundedBox>
      </div>
    </div>
  );
}

Element.propTypes = {
  item: PropTypes.object,
};

export default Element;
