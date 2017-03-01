/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { createStructuredSelector } from 'reselect';

import ContentList from 'components/ContentList';
import ProductTile from 'components/ProductTile';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';

import {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
  makeSelectProductBrand,
  makeSelectCount,
  makeSelectSkip,
  makeSelectMoreProductsLoading,
} from './selectors';
import * as productActions from './actions';
import { PER_PAGE } from './constants';

class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { getProducts, productBrand, countProducts } = this.props;
    getProducts(productBrand);
    countProducts(productBrand);
  }

  showProducts(item) {
    console.log(item);
  }

  loadMoreProducts() {
    const { skip, setSkip } = this.props;
    const newSkip = PER_PAGE + skip;
    setSkip(newSkip);
  }

  handleChange(evt) {
    console.log(evt);
  }

  render() {
    const { loading, loadingMoreProducts, error, products, skip, count } = this.props;
    console.log(skip);
    console.log(count);
    const contentListProps = {
      loading,
      error,
      component: ProductTile,
      onClick: this.showProducts,
      payload: products,
    };
    const showLoadMoreButton = !loadingMoreProducts || (count - PER_PAGE === skip);

    return (
      <div>
        <Helmet
          title="Cellphone List"
          meta={[
            { name: 'description', content: 'Cellphone list page contains list of cellphones from specific brand' },
          ]}
        />
        <div className="row center-xs">
          <div className="col-xs-11 col-sm-9 col-md-8 col-lg-8">
            <ContentList {...contentListProps} />
          </div>
          {loadingMoreProducts && <LoadingIndicator />}
          {!loading && showLoadMoreButton && <div className="col-xs-8">
            <Button handleRoute={this.loadMoreProducts}>
              Load More
            </Button>
          </div>}
        </div>
        <Pagination
          activePage={2}
          itemsCountPerPage={10}
          totalItemsCount={20}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  loading: React.PropTypes.bool,
  loadingMoreProducts: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  getProducts: React.PropTypes.func,
  countProducts: React.PropTypes.func,
  setSkip: React.PropTypes.func,
  productBrand: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  skip: React.PropTypes.number,
  count: React.PropTypes.number,
};

const mapDispatchToProps = {
  getProducts: productActions.loadProducts,
  countProducts: productActions.getProductsCount,
  setSkip: productActions.setSkip,
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectProductBrand(),
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
  loadingMoreProducts: makeSelectMoreProductsLoading(),
  skip: makeSelectSkip(),
  count: makeSelectCount(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
