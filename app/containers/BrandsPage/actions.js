/*
 * Brands Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BRANDS,
  LOAD_BRANDS_SUCCESS,
  LOAD_BRANDS_ERROR,
} from './constants';

/**
 * Load the brands list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BRANDS
 */
export function loadBrands(slug) {
  return {
    type: LOAD_BRANDS,
    slug,
  };
}

/**
 * Dispatched when brands list are loaded by the request saga
 *
 * @param  {array} brands Brands list
 *
 * @return {object}      An action object with a type of LOAD_BRANDS_SUCCESS passing the brands
 */
export function brandsLoaded(brands) {
  return {
    type: LOAD_BRANDS_SUCCESS,
    brands,
  };
}

/**
 * Dispatched when loading brands list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BRANDS_ERROR passing the error
 */
export function brandsLoadingError(error) {
  return {
    type: LOAD_BRANDS_ERROR,
    error,
  };
}
