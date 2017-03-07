import React from 'react';
import { Link } from 'react-router';

import Img from './Img';
import NavBar from './NavBar';
import Logo from './PhoneCataloguesLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <FixedHeaderContainer>
      <NavBar>
        <Link to="/">
          <Img src={Logo} alt="Phone Catalogues - Logo" />
        </Link>
      </NavBar>
    </FixedHeaderContainer>
  );
}

export default Header;
