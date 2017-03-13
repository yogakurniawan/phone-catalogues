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

import {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
  makeSelectProductBrand,
  makeSelectCount,
  makeSelectPage,
} from './selectors';
import * as deviceDetailActions from './actions';

class DeviceDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { productBrand } = this.props;
    console.log(productBrand);
  }

  showProducts(item) {
    console.log(item);
  }

  render() {
    const { productBrand } = this.props;
    
    const brandName = this.capitalizeFirstLetter(productBrand.toLowerCase());
    const description = `PhoneCatalogues.com: ${brandName} GSM Mobile Phones`;
    const title = `All ${brandName} Mobile Phones`;

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
          ]}
        />
      </div>
    );
  }
}

DeviceDetailPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  productBrand: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  deviceName: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  pushState: React.PropTypes.func,
};

const mapDispatchToProps = {
  getProducts: deviceDetailActions.loadProducts,
  setPage: deviceDetailActions.setPage,
  pushState: push,
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectProductBrand(),
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
  page: makeSelectPage(),
  count: makeSelectCount(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailPage);
