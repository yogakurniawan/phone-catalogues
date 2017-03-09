import React, { PropTypes } from 'react';
import { FaChevronLeft } from 'react-icons/lib/fa/';
import H2 from 'components/H2';

import Wrapper from './Wrapper';

function Element({ title, onClick }) {
  return (
    <Wrapper>
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-9 col-md-8 col-lg-8">
          <div className="row">
            <div className="col-xs-3 icon">
              { onClick && <FaChevronLeft onClick={onClick} size={20} /> }
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <H2>{title}</H2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Element.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Element;
