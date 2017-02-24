import React, { PropTypes } from 'react';

import P from 'components/P';
import RoundedBox from 'components/RoundedBox';
import H4 from './H4';
import Img from './Img';

function Element({ item }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <RoundedBox className="row">
        <div className="col-xs-3 col-sm-4 col-md-4 col-lg-4">
          <Img src={item.imageurl} />
        </div>
        <div className="col-xs-9 col-sm-8 col-md-8 col-lg-8">
          <H4>{item.name}</H4>
          <P>{item.description}</P>
        </div>
      </RoundedBox>
    </div>
  );
}

Element.propTypes = {
  item: PropTypes.object,
};

export default Element;
