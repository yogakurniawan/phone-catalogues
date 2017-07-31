import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import Img from 'components/Img';
import P from 'components/P';
import H4 from 'components/H4';
import {
  makeSelectSearchQuery,
} from 'containers/App/selectors';
import {
  selectSearchResult,
} from './selectors';
import * as actions from './actions';

const Div = styled.div`
  padding: 10px 5px;
  border-bottom: ${(props) => props.withBorder ? '1px solid #e1e4e8' : 'none'};
`;

const Image = styled(Img) `
  width: 80px;
`;

const ImgPlaceHolder = styled.div`
  width: 80px;
  height: 106px;
  background-color: #ece7e7;
`;

const Col = styled.div`
  border-top: 1px solid #e1e4e8;
`;

const NewH4 = styled(H4) `
  font-weight: normal;
  text-align: left;
`;

class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    const { searchQuery } = props;
    console.log(searchQuery);
  }

  render() {
    return (
      <div>
        <div className="row center-xs">
          <Div className="col-xs-11 col-sm-9 col-md-9 col-lg-8">
            <NewH4>Showing results for </NewH4>
          </Div>
        </div>
        <div className="row center-xs">
          <Col className="col-xs-11 col-sm-9 col-md-9 col-lg-8">
            <Div withBorder className="row">
              <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                <ImgPlaceHolder>
                  <Image alt="Device picture" src="http://cdn2.gsmarena.com/vv/bigpic/apple-watch2-edition-42mm.jpg" />
                </ImgPlaceHolder>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <P>Hello this is search page</P>
              </div>
            </Div>
          </Col>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  // searchResult: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
};

const mapDispatchToProps = {
  search: actions.search,
};

const mapStateToProps = createStructuredSelector({
  searchResult: selectSearchResult(),
  searchQuery: makeSelectSearchQuery(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

