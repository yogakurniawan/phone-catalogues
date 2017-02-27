/**
 * Products Page selectors
 */

import { createSelector } from 'reselect';

const selectProducts = (state) => state.get('products');

const makeSelectProducts = () => createSelector(
  selectProducts,
  (productsState) => productsState.getIn(['data', 'products'])
);

const makeSelectProductBrand = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('brand')
);

const makeSelectLoading = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('loading')
);

const makeSelectMoreProductsLoading = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('loadingMoreProducts')
);

const makeSelectMoreProductsError = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('errorMoreProducts')
);

const makeSelectError = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('error')
);

export {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
  makeSelectProductBrand,
  makeSelectMoreProductsLoading,
  makeSelectMoreProductsError,
};
