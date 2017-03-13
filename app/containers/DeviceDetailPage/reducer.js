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
  LOAD_DEVICE_DETAIL,
  LOAD_DEVICE_DETAIL_SUCCESS,
  LOAD_DEVICE_DETAIL_ERROR,
  SET_DEVICE_NAME,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  device: false,
  payload: false,
});

function deviceDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEVICE_NAME:
      return state
        .set('device', action.device);
    case LOAD_DEVICE_DETAIL:
      return state
        .set('loading', true)
        .set('error', false)
        .set('payload', false);
    case LOAD_DEVICE_DETAIL_SUCCESS:
      return state
        .set('payload', action.payload)
        .set('loading', false);
    case LOAD_DEVICE_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default deviceDetailReducer;

