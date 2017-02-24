import styled from 'styled-components';

import RoundedBox from 'components/RoundedBox';

const Element = styled(RoundedBox) `
  &:hover {
    cursor: pointer;
    background-color: #dd5555;
    h2, h4 {
      color: white;
    }
  }
`;

export default Element;
