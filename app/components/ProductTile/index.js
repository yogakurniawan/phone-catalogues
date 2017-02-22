import React, { PropTypes } from 'react';

import P from 'components/P';
import RoundedBox from 'components/RoundedBox';
import H4 from './H4';
import Img from './Img';

function Element({ item }) { // eslint-disable-line react/prefer-stateless-function
  console.log(item);
  return (
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" style={{ maxWidth: '30rem' }}>
        <RoundedBox className="row">
          <div className="col-xs-3">
            <Img src={item.imageurl} />
          </div>
          <div className="col-xs-9">
            <H4>{item.name}</H4>
            <P>{item.description}</P>
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
