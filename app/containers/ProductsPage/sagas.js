/**
 * Gets list of smartphone brands.
 */

import { take, call, put, fork, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  LOAD_PRODUCTS,
  GET_PRODUCTS_COUNT,
  PRODUCTS_API_URL,
  PER_PAGE,
} from './constants';
import {
  productsLoaded,
  productsLoadingError,
  getProductsCountSuccess,
  getProductsCountError,
} from './actions';

/**
 * Products list request/response handler
 */
export function* getProducts(action) {
  try {
    // Call our request helper (see 'utils/request')
    const queryParams = {
      'filter[where][keyword]': action.brand ? action.brand.toLowerCase() : action.brand,
      'filter[order]': 'orderId DESC',
      'filter[limit]': PER_PAGE,
      'filter[skip]': action.page > 1 ? ((action.page - 1) * PER_PAGE) : 0,
    };

    const products = yield call(request, PRODUCTS_API_URL, {
      queryParams,
    });

    yield put(productsLoaded(products));
  } catch (err) {
    yield put(productsLoadingError(err));
  }
}

/**
 * Get products count
 */
export function* getProductsCount(action) {
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, [PRODUCTS_API_URL, 'count'].join('/'), {
      queryParams: {
        '[where][keyword]': action.brand.toLowerCase(),
      },
    });
    yield put(getProductsCountSuccess(response.count));
  } catch (err) {
    yield put(getProductsCountError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsList() {
  // Watches for LOAD_PRODUCTS actions and calls getProducts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield fork(takeLatest, LOAD_PRODUCTS, getProducts);
  yield fork(takeLatest, GET_PRODUCTS_COUNT, getProductsCount);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
}

productsList.isDaemon = true;

// Bootstrap sagas
export default [
  productsList,
];
