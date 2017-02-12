/**
 * BrandsPage selectors
 */

import { createSelector } from 'reselect';

const selectBrands = (state) => state.get('brands');

const makeSelectBrands = () => createSelector(
  selectBrands,
  (brandsState) => brandsState.getIn(['data', 'brands'])
);

const makeSelectLoading = () => createSelector(
  selectBrands,
  (brandsState) => brandsState.get('loading')
);

const makeSelectError = () => createSelector(
  selectBrands,
  (brandsState) => brandsState.get('error')
);

export {
  makeSelectBrands,
  makeSelectLoading,
  makeSelectError,
};
