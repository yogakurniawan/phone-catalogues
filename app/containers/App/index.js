/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
// import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

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

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Phoney - Handset list, details, specifications and information"
        meta={[
          { name: 'keywords', content: 'GSM,mobile,phone,Nokia,Sony Ericsson,Apple,iPhone,Siemens,Motorola,Alcatel,Panasonic,Samsung,cellphone,specifications,information,info,opinion,review,pictures,photos' },
          { name: 'description', content: 'Phoney.info - The complete resource for Handset list, details, specification and information' },
        ]}
      />
      <Header />
      <ContentWrapper>
        {React.Children.toArray(props.children)}
      </ContentWrapper>
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
