/**
 * Gets list of smartphone brands.
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_API_URL } from 'containers/App/constants';

import { LOAD_BRANDS } from './constants';
import { brandsLoaded, brandsLoadingError } from './actions';

/**
 * Brands list request/response handler
 */
export function* getBrands() {
  const queryParams = {
    'filter[order]': 'title ASC',
  };
  const requestURL = `${BASE_API_URL}/brands`;

  try {
    // Call our request helper (see 'utils/request')
    const brands = yield call(request, requestURL, {
      queryParams,
    });
    yield put(brandsLoaded(brands));
  } catch (err) {
    yield put(brandsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* brandsList() {
  // Watches for LOAD_BRANDS actions and calls getBrands when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_BRANDS, getBrands);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  brandsList,
];
