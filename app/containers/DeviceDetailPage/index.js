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
import {
  makeSelectDeviceName,
} from './selectors';
// import * as deviceDetailActions from './actions';

class DeviceDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { productBrand, deviceName } = this.props;
    console.log(productBrand);
    console.log(deviceName);
  }

  render() {
    // const { productBrand } = this.props;
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
};

const mapDispatchToProps = {
};

const mapStateToProps = createStructuredSelector({
  productBrand: makeSelectCurrentBrand(),
  deviceName: makeSelectDeviceName(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailPage);
