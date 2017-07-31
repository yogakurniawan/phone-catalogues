import { fromJS } from 'immutable';

import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  page: 1,
  searchResult: null,
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return state
        .set('loading', true);
    case SEARCH_SUCCESS:
      return state
        .set('searchResult', action.payload)
        .set('loading', false);
    case SEARCH_ERROR:
      return state
        .set('searchResult', null)
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default searchReducer;

