/*
 * Products Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  GET_PRODUCTS_COUNT,
  GET_PRODUCTS_COUNT_SUCCESS,
  GET_PRODUCTS_COUNT_ERROR,
  SET_PRODUCT_BRAND,
  SET_PAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  errorGetCount: false,
  brand: false,
  page: 1,
  count: 0,
  data: {
    products: false,
  },
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_BRAND:
      return state
        .set('brand', action.brand);
    case SET_PAGE:
      return state
        .set('page', action.page);
    case LOAD_PRODUCTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'products'], false);
    case GET_PRODUCTS_COUNT:
      return state
        .set('errorGetCount', false);
    case LOAD_PRODUCTS_SUCCESS:
      return state
        .setIn(['data', 'products'], action.products)
        .set('loading', false);
    case GET_PRODUCTS_COUNT_SUCCESS:
      return state
        .set('count', action.count);
    case LOAD_PRODUCTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case GET_PRODUCTS_COUNT_ERROR:
      return state
        .set('errorGetCount', action.error);
    default:
      return state;
  }
}

export default productsReducer;

