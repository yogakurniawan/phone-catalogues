import React from 'react';

import Img from './Img';
import NavBar from './NavBar';
import Logo from './PhoneyLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <FixedHeaderContainer>
      <NavBar>
        <Img src={Logo} alt="Phoney App - Logo" />
      </NavBar>
    </FixedHeaderContainer>
  );
}

export default Header;
