import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import FixedHeaderContainer from '../FixedHeaderContainer';
import NavBar from '../NavBar';

describe('<Header />', () => {
  it('should render a <FixedHeaderContainer />', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find(FixedHeaderContainer).length).toEqual(1);
  });

  it('should render a <NavBar />', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find(NavBar).length).toEqual(1);
  });
});
