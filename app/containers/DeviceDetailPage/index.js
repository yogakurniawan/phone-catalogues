/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentBrand } from 'containers/App/selectors';
import { getSelectedDevice } from 'containers/ProductsPage/selectors';
import ProductDetail from 'components/ProductDetail';
import {
  makeSelectDeviceName,
  makeSelectDeviceDetail,
} from './selectors';
import * as deviceDetailActions from './actions';

class DeviceDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { productBrand, deviceName, loadDevice } = this.props;
    loadDevice(productBrand, deviceName);
    console.log(productBrand);
    console.log(deviceName);
  }

  render() {
    const { deviceDetail, selectedDevice } = this.props;
    // const brandName = this.capitalizeFirstLetter(productBrand.toLowerCase());
    const description = 'world';
    const title = 'hello';

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
          ]}
        />
        <div className="row center-xs">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-6">
            <ProductDetail detail={selectedDevice} />
          </div>
        </div>
      </div>
    );
  }
}

DeviceDetailPage.propTypes = {
  productBrand: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  deviceName: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  loadDevice: React.PropTypes.func,
  deviceDetail: React.PropTypes.object,
  selectedDevice: React.PropTypes.object,
};

const mapDispatchToProps = {
  loadDevice: deviceDetailActions.loadDevice,
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectCurrentBrand(),
  deviceName: makeSelectDeviceName(),
  deviceDetail: makeSelectDeviceDetail(),
  selectedDevice: getSelectedDevice(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailPage);
