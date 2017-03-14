/*
 * Products Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PRODUCTS = 'boilerplate/ProductsPage/LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = 'boilerplate/ProductsPage/LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'boilerplate/ProductsPage/LOAD_PRODUCTS_ERROR';
export const GET_PRODUCTS_COUNT = 'boilerplate/ProductsPage/GET_PRODUCTS_COUNT';
export const GET_PRODUCTS_COUNT_SUCCESS = 'boilerplate/ProductsPage/GET_PRODUCTS_COUNT_SUCCESS';
export const GET_PRODUCTS_COUNT_ERROR = 'boilerplate/ProductsPage/GET_PRODUCTS_COUNT_ERROR';
export const SET_PAGE = 'boilerplate/ProductsPage/SET_PAGE';
export const SET_SELECTED_DEVICE = 'boilerplate/ProductsPage/SET_SELECTED_DEVICE';
export const PRODUCTS_API_URL = '//52.221.230.61:9000/api/items';
export const PER_PAGE = '9';
