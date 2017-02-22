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
import ProductTile from 'components/ProductTile';

import { makeSelectProducts, makeSelectLoading, makeSelectError } from './selectors';
import { loadProducts } from './actions';

class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadProducts();
  }

  showProducts(item) {
    console.log(item);
  }

  render() {
    const { loading, error, products } = this.props;
    console.log(products);
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
          title="Products Page"
          meta={[
            { name: 'description', content: 'Products page contains list of product smartphone' },
          ]}
        />
        {products && <ContentList {...contentListProps} />}
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
  loadProducts: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(loadProducts()),
  };
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
