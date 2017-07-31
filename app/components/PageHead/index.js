import React, { PropTypes } from 'react';

import { capitalizeFirstLetter } from 'utils/common';
import Wrapper from './Wrapper';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';
import ArrowRight from './ArrowRight';

function Element(props) {
  return (
    <Wrapper>
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-8">
          <NavBar>
            {
              props.links.length && props.links.map((link, index) =>
                (
                  <span key={`${link.text}-${index}`}>
                    {link.href && <HeaderLink to={link.href}>
                      {link.text && capitalizeFirstLetter(link.text)}
                    </HeaderLink>}
                    {!link.href && <HeaderLink>
                      {link.text && capitalizeFirstLetter(link.text)}
                    </HeaderLink>}
                    {index < (props.links.length - 1) && <ArrowRight className="fa fa-chevron-right" aria-hidden />}
                  </span>
                )
              )
            }
          </NavBar>
        </div>
      </div>
    </Wrapper>
  );
}

Element.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Element;
