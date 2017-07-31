import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants';

export function search(keyword, page) {
  return {
    type: SEARCH,
    payload: {
      keyword,
      page,
    },
  };
}

export function searchSuccessful(payload) {
  return {
    type: SEARCH_SUCCESS,
    payload,
  };
}

export function searchError(error) {
  return {
    type: SEARCH_ERROR,
    error,
  };
}
