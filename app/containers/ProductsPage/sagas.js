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
export function* getProducts(data) {
  const requestURL = 'http://52.221.230.61:9000/api/items';

  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL, {
      queryParams: {
        'filter[where][keyword]': data.brand.toLowerCase(),
      },
    });
    yield put(productsLoaded(products));
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
