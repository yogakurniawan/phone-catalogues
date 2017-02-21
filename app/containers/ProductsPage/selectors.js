/**
 * Products Page selectors
 */

import { createSelector } from 'reselect';

const selectProducts = (state) => state.get('products');

const makeSelectBrands = () => createSelector(
  selectProducts,
  (brandsState) => brandsState.getIn(['data', 'brands'])
);

const makeSelectLoading = () => createSelector(
  selectProducts,
  (brandsState) => brandsState.get('loading')
);

const makeSelectError = () => createSelector(
  selectProducts,
  (brandsState) => brandsState.get('error')
);

export {
  makeSelectBrands,
  makeSelectLoading,
  makeSelectError,
};
