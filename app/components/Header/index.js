import React from 'react';
import { Link } from 'react-router';

import Img from './Img';
import HeaderWrapper from './HeaderWrapper';
import Logo from './PhoneCataloguesLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <FixedHeaderContainer>
      <HeaderWrapper>
        <header>
          <Link to="/">
            <Img src={Logo} alt="Phone Catalogues - Logo" />
          </Link>
        </header>
      </HeaderWrapper>
    </FixedHeaderContainer>
  );
}

export default Header;
