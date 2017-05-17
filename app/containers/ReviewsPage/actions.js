/*
 * Products Actions
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
  LOAD_DEVICE_DETAIL,
  LOAD_DEVICE_DETAIL_SUCCESS,
  LOAD_DEVICE_DETAIL_ERROR,
  SET_DEVICE_NAME,
} from './constants';

/**
 * Load the products list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRODUCTS
 */
export function loadDevice(brand, device) {
  return {
    type: LOAD_DEVICE_DETAIL,
    brand,
    device,
  };
}

export function setDeviceName(device) {
  return {
    type: SET_DEVICE_NAME,
    device,
  };
}

/**
 * Dispatched when products list are loaded by the request saga
 *
 * @param  {array} Products Products list
 *
 * @return {object}      An action object with a type of LOAD_PRODUCTS_SUCCESS passing the Products
 */
export function deviceDetailLoaded(payload) {
  return {
    type: LOAD_DEVICE_DETAIL_SUCCESS,
    payload,
  };
}

/**
 * Dispatched when loading products list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRODUCTS_ERROR passing the error
 */
export function loadDeviceDetailError(error) {
  return {
    type: LOAD_DEVICE_DETAIL_ERROR,
    error,
  };
}
