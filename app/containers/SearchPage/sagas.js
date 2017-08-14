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
    const { payload } = action;
    console.log(payload);
    const queryParams = {
      'filter[where][description][regexp]': payload.keyword,
      'filter[limit]': PER_PAGE,
      'filter[skip]': payload.page > 1 ? ((payload.page - 1) * PER_PAGE) : 0,
    };

    const result = yield call(request, `${BASE_API_URL}/items`, {
      queryParams,
    });

    yield put(searchSuccessful(result));
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
