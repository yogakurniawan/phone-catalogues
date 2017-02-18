/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import P from '../index';

const children = (<b>Test</b>);
const renderComponent = () => shallow(
  <P>
    {children}
  </P>
);

describe('<P />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render a text', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.text()).toMatch(/Test/);
  });
});
