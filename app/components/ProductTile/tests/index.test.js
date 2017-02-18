import React from 'react';
import { shallow } from 'enzyme';

import P from 'components/P';
import RoundedBox from 'components/RoundedBox';
import ProductTile from '../index';
import H4 from '../H4';
import Img from '../Img';

const item = {
  name: 'My Name',
  description: 'My Description',
  imageurl: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s6-cdma.jpg',
};
const renderedComponent = shallow(
  <ProductTile item={item} />
);

describe('<ProductTile />', () => {
  it('should render a <H4 />', () => {
    expect(renderedComponent.find(H4)).toBeDefined();
  });

  it('should render a <H4>My Title</H4>', () => {
    expect(renderedComponent.find(H4).children().text()).toMatch(/My Name/);
  });

  it('should render a <P />', () => {
    expect(renderedComponent.find(P)).toBeDefined();
  });

  it('should render a <P>My Title</P>', () => {
    expect(renderedComponent.find(P).children().text()).toMatch(/My Description/);
  });

  it('should render a <Img />', () => {
    expect(renderedComponent.find(Img)).toBeDefined();
  });

  it('should render a <RoundedBox />', () => {
    expect(renderedComponent.find(RoundedBox)).toBeDefined();
  });
});
