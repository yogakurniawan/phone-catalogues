import React from 'react';
import Pagination from 'react-js-pagination';
import Wrapper from './Wrapper';

function Element(props) {
  return (
    <div className="row center-xs">
      <div className="col-xs-12">
        <Wrapper>
          <Pagination {...props} />
        </Wrapper>
      </div>
    </div>
  );
}

export default Element;
