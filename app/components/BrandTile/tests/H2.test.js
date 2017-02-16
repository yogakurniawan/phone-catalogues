import React from 'react';
import { shallow } from 'enzyme';

import H2 from '../H2';

describe('<H2 />', () => {
  it('renders a <h2>', () => {
    const renderedComponent = shallow(
      <H2></H2>
    );
    expect(renderedComponent.find('h2').node).toBeDefined();
  });

  it('should render an <h2> tag', () => {
    const renderedComponent = shallow(
      <H2></H2>
    );
    expect(renderedComponent.type()).toEqual('h2');
  });

  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H2 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
