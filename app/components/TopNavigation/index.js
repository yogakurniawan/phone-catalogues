import React, { PropTypes } from 'react';
import { FaChevronLeft } from 'react-icons/lib/fa/';
import H1 from './H1';
import P from './P';

import Wrapper from './Wrapper';

function Element({ title, subTitle, onClick }) {
  return (
    <Wrapper>
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-9 col-md-8 col-lg-8">
          {onClick && <FaChevronLeft onClick={onClick} size={22} />}
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
  onClick: PropTypes.func,
};

export default Element;
