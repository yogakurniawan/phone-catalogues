import styled from 'styled-components';
import RoundedBox from 'components/RoundedBox';
import { Link } from 'react-router';

const StyledLink = styled(Link)`${RoundedBox}`;

const Element = styled(StyledLink)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #dd5555;
    h3, h4 {
      color: white;
    }
  }
`;

export default Element;
