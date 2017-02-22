/**
 * Products Page selectors
 */

import { createSelector } from 'reselect';

const selectProducts = (state) => state.get('products');

const makeSelectProducts = () => createSelector(
  selectProducts,
  (productsState) => productsState.getIn(['data', 'products'])
);

const makeSelectLoading = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('loading')
);

const makeSelectError = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('error')
);

export {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
};
