import React, { PropTypes } from 'react';

import H4 from 'components/H4';
import H2 from './H2';
import RoundedBox from './RoundedBox';

function Element({ item, onClick = () => { } }) { // eslint-disable-line react/prefer-stateless-function
  const onItemClick = () => {
    onClick(item);
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <RoundedBox className="row" onClick={onItemClick}>
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
  onClick: PropTypes.func,
};

export default Element;
