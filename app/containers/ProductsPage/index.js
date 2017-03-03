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
import { FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa/';

import ContentList from 'components/ContentList';
import ProductTile from 'components/ProductTile';
import Pagination from 'components/Pagination';

import {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
  makeSelectProductBrand,
  makeSelectCount,
  makeSelectPage,
  makeSelectMoreProductsLoading,
} from './selectors';
import * as productActions from './actions';
import { PER_PAGE } from './constants';

class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { getProducts, productBrand, countProducts, page } = this.props;
    getProducts(productBrand, page);
    countProducts(productBrand);
  }

  showProducts(item) {
    console.log(item);
  }

  handleChange(props) {
    return (page) => {
      const { getProducts, productBrand, setPage, pushState } = props;
      setPage(page);
      getProducts(productBrand, page);
      pushState(`/products/${productBrand}?page=${page}`);
    };
  }

  render() {
    const { loading, error, products, page, count } = this.props;
    const contentListProps = {
      loading,
      error,
      component: ProductTile,
      onClick: this.showProducts,
      payload: products,
    };

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
        </div>
        {!loading && <Pagination
          hideDisabled
          firstPageText={'First'}
          lastPageText={'Last'}
          prevPageText={<FaAngleLeft size={20} />}
          nextPageText={<FaAngleRight size={20} />}
          activePage={page}
          itemsCountPerPage={parseInt(PER_PAGE, 10)}
          totalItemsCount={count}
          onChange={this.handleChange(this.props)}
        />}
      </div>
    );
  }
}

ProductsPage.propTypes = {
  loading: React.PropTypes.bool,
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
  setPage: React.PropTypes.func,
  productBrand: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  page: React.PropTypes.number,
  count: React.PropTypes.number,
  pushState: React.PropTypes.func,
};

const mapDispatchToProps = {
  getProducts: productActions.loadProducts,
  countProducts: productActions.getProductsCount,
  setPage: productActions.setPage,
  pushState: push,
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectProductBrand(),
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
  loadingMoreProducts: makeSelectMoreProductsLoading(),
  page: makeSelectPage(),
  count: makeSelectCount(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
