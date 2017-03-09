/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import ContentList from 'components/ContentList';
import BrandTile from 'components/BrandTile';
import TopNavigation from 'components/TopNavigation';

import { makeSelectBrands, makeSelectLoading, makeSelectError } from './selectors';
import { loadBrands } from './actions';

class BrandsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadBrands();
  }

  showProducts() {
    return (item) => {
      this.props.pushState(`/products/${item.title}?page=1`);
    };
  }

  render() {
    const { loading, error, brands } = this.props;
    const contentListProps = {
      loading,
      error,
      component: BrandTile,
      onClick: this.showProducts.call(this),
      payload: brands,
    };
    return (
      <div>
        <Helmet
          title="List of all mobile phone brands - PhoneCatalogues.com"
          meta={[
            { name: 'description', content: 'List of all GSM phone brands presented on PhoneCatalogues.com' },
          ]}
        />
        <TopNavigation title={'All Brands'} />
        <div className="row center-xs">
          <div className="col-xs-8">
            <ContentList {...contentListProps} />
          </div>
        </div>
      </div>
    );
  }
}

BrandsPage.propTypes = {
  pushState: React.PropTypes.func,
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

const mapDispatchToProps = {
  pushState: push,
  loadBrands,
};

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrands(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
