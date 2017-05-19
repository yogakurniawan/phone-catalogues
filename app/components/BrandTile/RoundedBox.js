import styled from 'styled-components';
import RoundedBox from 'components/RoundedBox';
import { Link } from 'react-router';

const StyledLink = styled(Link) `${RoundedBox}`;

const Element = styled(StyledLink) `
  text-decoration: none;
  cursor: pointer;
  display: table;
  width: 100%;
  &:hover {
    .overlay {
      background-color: #dd5555;
      opacity: 1;
    }
  }
`;

export default Element;
