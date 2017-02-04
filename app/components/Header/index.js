import React from 'react';

import Img from './Img';
import NavBar from './NavBar';
import Logo from './PhoneyLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FixedHeaderContainer>
        <NavBar>
          <Img src={Logo} alt="Phoney App - Logo" />
        </NavBar>
      </FixedHeaderContainer>
    );
  }
}

export default Header;
