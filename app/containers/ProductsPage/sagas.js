/**
 * Gets list of smartphone brands.
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_PRODUCTS } from './constants';
import { productsLoaded, productsLoadingError } from './actions';

/**
 * Products list request/response handler
 */
export function* getProducts(action) {
  const brandId = action.brandId;
  const requestURL = `http://52.221.230.61:9000/api/brands/${brandId}/items`;

  try {
    // Call our request helper (see 'utils/request')
    const brands = yield call(request, requestURL);
    yield put(productsLoaded(brands));
  } catch (err) {
    yield put(productsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsList() {
  // Watches for LOAD_PRODUCTS actions and calls getProducts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_PRODUCTS, getProducts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsList,
];
