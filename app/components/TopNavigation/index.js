import React, { PropTypes } from 'react';
import H1 from './H1';
import P from './P';

import Wrapper from './Wrapper';

function Element({ title, subTitle }) {
  return (
    <Wrapper>
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-9 col-md-8 col-lg-8">
          <span><H1>{title}</H1></span>
          <P>{subTitle}</P>
        </div>
      </div>
    </Wrapper>
  );
}

Element.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Element;
