import { fromJS } from 'immutable';

import {
  SET_SEARCH_QUERY,
  SET_PRODUCT_BRAND,
  SET_SELECTED_DEVICE,
} from './constants';

const initialState = fromJS({
  currentBrand: false,
  selectedDevice: false,
  searchQuery: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return state
        .set('searchQuery', action.payload);
    case SET_SELECTED_DEVICE:
      return state
        .set('selectedDevice', action.device);
    case SET_PRODUCT_BRAND:
      return state
        .set('currentBrand', action.brand);
    default:
      return state;
  }
}

export default appReducer;
