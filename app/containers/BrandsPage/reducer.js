/*
 * BrandsReducer
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
  LOAD_BRANDS,
  LOAD_BRANDS_SUCCESS,
  LOAD_BRANDS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    brands: false,
  },
});

function brandsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BRANDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'brands'], false);
    case LOAD_BRANDS_SUCCESS:
      return state
        .setIn(['data', 'brands'], action.brands)
        .set('loading', false);
    case LOAD_BRANDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default brandsReducer;

