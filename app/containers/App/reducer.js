/*
 * AppReducer
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
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  SET_PRODUCT_BRAND,
  SET_SELECTED_DEVICE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentBrand: false,
  selectedDevice: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case SET_SELECTED_DEVICE:
      return state
        .set('selectedDevice', action.device);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case SET_PRODUCT_BRAND:
      return state
        .set('currentBrand', action.brand);
    default:
      return state;
  }
}

export default appReducer;
