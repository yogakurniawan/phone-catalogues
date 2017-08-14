import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const selectSearchResult = () => createSelector(
  selectSearch,
  (state) => state.getIn(['payload', 'searchResult'])
);

export {
  selectSearchResult,
};
