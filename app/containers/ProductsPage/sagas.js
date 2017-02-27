/**
 * Gets list of smartphone brands.
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  LOAD_PRODUCTS,
  LOAD_MORE_PRODUCTS,
  PRODUCTS_API_URL,
} from './constants';
import {
  productsLoaded,
  productsLoadingError,
  moreProductsLoadingError,
  moreProductsLoaded,
} from './actions';

/**
 * Products list request/response handler
 */
export function* getProducts(data) {
  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, PRODUCTS_API_URL, {
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
 * Load more products
 */
export function* getMoreProducts(data) {
  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, PRODUCTS_API_URL, {
      queryParams: {
        'filter[where][keyword]': data.brand.toLowerCase(),
      },
    });
    yield put(moreProductsLoaded(products));
  } catch (err) {
    yield put(moreProductsLoadingError(err));
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

export function* moreProductsList() {
  // Watches for LOAD_MORE_PRODUCTS actions and calls getProducts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_MORE_PRODUCTS, getMoreProducts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  productsList,
  moreProductsList,
];
