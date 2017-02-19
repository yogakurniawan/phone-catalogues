import React from 'react';
import { shallow } from 'enzyme';

import RoundedBox from 'components/RoundedBox';
import BrandTile from '../index';
import H2 from '../H2';

const item = {
  title: 'My Title',
};
const renderedComponent = shallow(
  <BrandTile item={item} />
);

describe('<BrandTile />', () => {
  it('should render a <h2></h2>', () => {
    expect(renderedComponent.find(H2)).toBeDefined();
  });

  it('should render a <h2>My Title</h2>', () => {
    expect(renderedComponent.find(H2).children().text()).toMatch(/My Title/);
  });

  it('should render a <RoundedBox />', () => {
    expect(renderedComponent.find(RoundedBox)).toBeDefined();
  });
});
