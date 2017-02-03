import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

const FixedHeaderContainer = styled.div`
  box-sizing: border-box;
  background: #dd5555;
  color: #fff;
  height: 44px;
  padding: 10px 0 8px;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FixedHeaderContainer>
        <NavBar>
          Hello
        </NavBar>
      </FixedHeaderContainer>
    );
  }
}

export default Header;
