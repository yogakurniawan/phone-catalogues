import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import * as productActions from 'containers/ProductsPage/actions';
import * as searchPageActions from 'containers/SearchPage/actions';
import * as deviceDetailActions from 'containers/DeviceDetailPage/actions';
import * as actions from './actions';
import * as selectors from './selectors';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 0 16px;
  margin-top: 90px;
  @media only screen and (min-width: 1024px) {
    margin-top: 50px;
  }
`;

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { findAllDevices } = this.props;
    findAllDevices();
  }

  onFormSubmit = (keyword) => {
    const { pushState, setSearchQuery, search } = this.props;
    setSearchQuery(keyword);
    search(keyword, 1);
    pushState(`/search?q=${keyword}`);
  };

  onSuggestionSelected = (evt, { suggestion, suggestionValue }) => {
    const { setSelectedDevice, pushState, loadDevice, getDeviceByName } = this.props;
    pushState(`/detail?brand=${encodeURIComponent(suggestion.keyword)}&device=${encodeURIComponent(suggestionValue)}`);
    setSelectedDevice(suggestion);
    loadDevice(suggestion.keyword, suggestionValue);
    getDeviceByName(suggestion.keyword, suggestionValue);
  }

  render() {
    const { children, allDevices } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s"
          defaultTitle="Phone Catalogues - Handset list, details, specifications and information"
          meta={[
            { name: 'robot', content: 'all' },
            { name: 'keywords', content: 'GSM,mobile,phone,Nokia,Sony Ericsson,Apple,iPhone,Siemens,Motorola,Alcatel,Panasonic,Samsung,cellphone,specifications,information,info,opinion,review,pictures,photos' },
            { name: 'description', content: 'Phone Catalogues - The complete resource for Handset list, details, specification and information' },
          ]}
        />
        <Header
          onFormSubmit={this.onFormSubmit}
          onSuggestionSelected={this.onSuggestionSelected}
          allDevices={allDevices}
        />
        <ContentWrapper>
          {React.Children.toArray(children)}
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  findAllDevices: React.PropTypes.func,
  setSelectedDevice: React.PropTypes.func,
  setSearchQuery: React.PropTypes.func,
  search: React.PropTypes.func,
  pushState: React.PropTypes.func,
  loadDevice: React.PropTypes.func,
  getDeviceByName: React.PropTypes.func,
  allDevices: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapDispatchToProps = {
  findAllDevices: productActions.findAllDevices,
  setSelectedDevice: actions.setSelectedDevice,
  setSearchQuery: actions.setSearchQuery,
  pushState: push,
  loadDevice: deviceDetailActions.loadDevice,
  getDeviceByName: actions.loadDeviceByName,
  search: searchPageActions.search,
};

const mapStateToProps = createStructuredSelector({
  allDevices: selectors.allDevices(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
