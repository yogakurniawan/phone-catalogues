/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import * as productActions from 'containers/ProductsPage/actions';
import {
  deviceSuggestions,
  loadingSuggestions,
} from './selectors';
const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 0 16px;
  margin-top: 50px;
`;

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, findDevice, suggestions, loading } = this.props;
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
        <Header find={findDevice} suggestions={suggestions} loading={loading} />
        <ContentWrapper>
          {React.Children.toArray(children)}
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  findDevice: React.PropTypes.func,
  suggestions: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
};

const mapDispatchToProps = {
  findDevice: productActions.findDevice,
};

const mapStateToProps = createStructuredSelector({
  suggestions: deviceSuggestions(),
  loading: loadingSuggestions(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
