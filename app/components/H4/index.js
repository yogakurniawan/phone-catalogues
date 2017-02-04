import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
  color: #dd5555;
  font-size: 0.875em;
`;

const Element = (props) => (
  <H4 {...props} />
);

export default Element;
