import styled from 'styled-components';
import RoundedBox from 'components/RoundedBox';
import { Link } from 'react-router';

const StyledLink = styled(Link) `${RoundedBox}`;

const Element = styled(StyledLink) `
  text-decoration: none;
  cursor: pointer;
  #overtext {
    display: none;
  }
  #realtext {
    opacity: 1;
  }
  &:hover, &:focus {
    #overtext {
      display: block;
      position: absolute;
      left: 20%;
      right: 20%;
      top: 20%;
      bottom: 20%;
    }
    #realimage {
      opacity: 0;
    }
    #realtext {
      opacity: 0;
    }
    transition: all 100ms ease-out;
    background: #dd5555;
  }
`;

export default Element;
