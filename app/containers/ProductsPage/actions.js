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
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  GET_PRODUCTS_COUNT,
  GET_PRODUCTS_COUNT_SUCCESS,
  GET_PRODUCTS_COUNT_ERROR,
  SET_PRODUCT_BRAND,
  SET_PAGE,
} from './constants';

/**
 * Load the products list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRODUCTS
 */
export function loadProducts(brand, page) {
  return {
    type: LOAD_PRODUCTS,
    brand,
    page,
  };
}

export function getProductsCount(brand) {
  return {
    type: GET_PRODUCTS_COUNT,
    brand,
  };
}

export function setProductBrand(brand) {
  return {
    type: SET_PRODUCT_BRAND,
    brand,
  };
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    page,
  };
}

/**
 * Dispatched when products list are loaded by the request saga
 *
 * @param  {array} Products Products list
 *
 * @return {object}      An action object with a type of LOAD_PRODUCTS_SUCCESS passing the Products
 */
export function productsLoaded(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
  };
}

export function getProductsCountSuccess(count) {
  return {
    type: GET_PRODUCTS_COUNT_SUCCESS,
    count,
  };
}

/**
 * Dispatched when loading products list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRODUCTS_ERROR passing the error
 */
export function productsLoadingError(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function getProductsCountError(error) {
  return {
    type: GET_PRODUCTS_COUNT_ERROR,
    error,
  };
}
