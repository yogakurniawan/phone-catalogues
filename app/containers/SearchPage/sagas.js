import { take, call, put, fork, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_API_URL } from 'containers/App/constants';

import {
  SEARCH,
  PER_PAGE,
} from './constants';
import {
  searchSuccessful,
  searchError,
} from './actions';

export function* search(action) {
  try {
    const queryParams = {
      'filter[where][description][regexp]': action.keyword,
      'filter[limit]': PER_PAGE,
      'filter[skip]': action.page > 1 ? ((action.page - 1) * PER_PAGE) : 0,
    };

    const payload = yield call(request, `${BASE_API_URL}/items`, {
      queryParams,
    });

    yield put(searchSuccessful(payload));
  } catch (err) {
    yield put(searchError(err));
  }
}

export function* saga() {
  yield fork(takeLatest, SEARCH, search);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
}

saga.isDaemon = true;

export default [
  saga,
];
