/**
 * BrandsPage selectors
 */

import { createSelector } from 'reselect';

const selectBrands = (state) => state.get('brands');

const makeSelectBrands = () => createSelector(
  selectBrands,
  (brandsState) => brandsState.getIn(['data', 'brands'])
);

const makeSelectBrandsByName = (brandName) => createSelector(
  selectBrands,
  (brandsState) => brandsState.getIn(['data', 'brands']).filter(
    (brand) => brand.title.indexOf(brandName) > -1
  )
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
  makeSelectBrandsByName,
};
