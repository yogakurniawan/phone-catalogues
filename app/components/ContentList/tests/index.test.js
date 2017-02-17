import { shallow, mount } from 'enzyme';
import React from 'react';

import BrandTile from 'components/BrandTile';
import List from 'components/BasicList';
import LoadingIndicator from 'components/LoadingIndicator';
import ContentList from '../index';

describe('<ContentList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <ContentList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <ContentList
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the brands if loading was successful', () => {
    const brands = [{
      title: 'APPLE',
      totalProducts: 31,
    }, {
      title: 'SAMSUNG',
      totalProducts: 1028,
    }];
    const renderedComponent = shallow(
      <ContentList
        component={BrandTile}
        brands={brands}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={brands} component={BrandTile} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <ContentList
        brands={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
