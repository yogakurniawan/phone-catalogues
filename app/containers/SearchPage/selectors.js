import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const selectSearchResult = () => createSelector(
  selectSearch,
  (productsState) => productsState.get('products')
);

export {
  selectSearchResult,
};
