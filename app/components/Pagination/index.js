import React from 'react';
import Pagination from 'react-js-pagination';
import Wrapper from './Wrapper';

function Element(props) {
  return (
    <Wrapper>
      <Pagination {...props} />
    </Wrapper>
  );
}

export default Element;
