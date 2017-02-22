/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ContentList from 'components/ContentList';
import BrandTile from 'components/BrandTile';

import { makeSelectBrands, makeSelectLoading, makeSelectError } from './selectors';
import { loadBrands } from './actions';

class BrandsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadBrands();
  }

  showProducts(item) {
    console.log(item);
    console.log('it works');
  }

  render() {
    const { loading, error, brands } = this.props;
    const contentListProps = {
      loading,
      error,
      component: BrandTile,
      onClick: this.showProducts,
      payload: brands,
    };
    return (
      <div>
        <Helmet
          title="Brands Page"
          meta={[
            { name: 'description', content: 'Brands page contains list of smartphone brands' },
          ]}
        />
        <ContentList {...contentListProps} />
      </div>
    );
  }
}

BrandsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  brands: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loadBrands: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadBrands: () => dispatch(loadBrands()),
  };
}

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrands(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
