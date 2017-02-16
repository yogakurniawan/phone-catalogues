import React from 'react';
import { shallow } from 'enzyme';

import H4 from '../index';

describe('<H4 />', () => {
  it('renders a <H4>', () => {
    const renderedComponent = shallow(
      <h4></h4>
    );
    expect(renderedComponent.find('h4').node).toBeDefined();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H4 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H4>{children}</H4>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
