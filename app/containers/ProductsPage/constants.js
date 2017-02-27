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
export const LOAD_MORE_PRODUCTS = 'boilerplate/ProductsPage/LOAD_MORE_PRODUCTS';
export const LOAD_MORE_PRODUCTS_SUCCESS = 'boilerplate/ProductsPage/LOAD_MORE_PRODUCTS_SUCCESS';
export const LOAD_MORE_PRODUCTS_ERROR = 'boilerplate/ProductsPage/LOAD_MORE_PRODUCTS_ERROR';
export const SET_PRODUCT_BRAND = 'boilerplate/ProductsPage/SET_PRODUCT_BRAND';
export const LOAD_PRODUCTS_SUCCESS = 'boilerplate/ProductsPage/LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'boilerplate/ProductsPage/LOAD_PRODUCTS_ERROR';
export const PRODUCTS_API_URL = 'http://52.221.230.61:9000/api/items';
