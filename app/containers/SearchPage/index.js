import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import H4 from 'components/H4';
import SearchTile from 'components/SearchTile';
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

const NewH4 = styled(H4) `
  font-weight: normal;
  text-align: left;
`;

class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { searchQuery, search } = this.props;
    search(searchQuery.query, 1);
  }

  render() {
    const { searchQuery, searchResult } = this.props;
    return (
      <div>
        <div className="row center-xs">
          <Div className="col-xs-11 col-sm-9 col-md-9 col-lg-8">
            <NewH4>{`Showing results for "${searchQuery.query}"`}</NewH4>
          </Div>
        </div>
        <div className="row center-xs">
          {
            searchResult.length && searchResult.map((device) => (
              <SearchTile device={device} />
            ))
          }
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResult: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
  search: React.PropTypes.func,
};

const mapDispatchToProps = {
  search: actions.search,
};

const mapStateToProps = createStructuredSelector({
  searchResult: selectSearchResult(),
  searchQuery: makeSelectSearchQuery(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

