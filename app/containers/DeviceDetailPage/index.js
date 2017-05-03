/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

import { makeSelectCurrentBrand, getSelectedDevice } from 'containers/App/selectors';
import { loadDeviceByName } from 'containers/App/actions';
import ProductDetail from 'components/ProductDetail';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  makeSelectDeviceName,
  makeSelectDeviceDetail,
} from './selectors';
import * as deviceDetailActions from './actions';

class DeviceDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { productBrand, deviceName, loadDevice, selectedDevice, getDeviceByName } = this.props;
    loadDevice(productBrand, deviceName);
    if (!selectedDevice) {
      getDeviceByName(productBrand, deviceName);
    }
  }

  handleNavBack() {
    const { productBrand, pushState } = this.props;
    pushState(`devices/${encodeURIComponent(productBrand)}?page=1`);
  }

  render() {
    const { deviceDetail, selectedDevice, productBrand } = this.props;
    // const brandName = this.capitalizeFirstLetter(productBrand.toLowerCase());
    const description = selectedDevice && `${selectedDevice.description}`;
    const title = selectedDevice && `${selectedDevice.name} - Full Phone Specifications`;

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'Description', content: description },
          ]}
        />
        {!selectedDevice && <LoadingIndicator />}
        {selectedDevice && <div className="row center-xs">
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6">
            <ProductDetail onClick={() => this.handleNavBack()} detail={{ ...selectedDevice, ...deviceDetail, productBrand}} />
          </div>
        </div>}
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
  pushState: React.PropTypes.func,
  getDeviceByName: React.PropTypes.func,
  deviceDetail: React.PropTypes.object,
  selectedDevice: React.PropTypes.object,
};

const mapDispatchToProps = {
  loadDevice: deviceDetailActions.loadDevice,
  getDeviceByName: loadDeviceByName,
  pushState: push,
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectCurrentBrand(),
  deviceName: makeSelectDeviceName(),
  deviceDetail: makeSelectDeviceDetail(),
  selectedDevice: getSelectedDevice(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailPage);
