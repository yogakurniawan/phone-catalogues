/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const SET_PRODUCT_BRAND = 'boilerplate/App/SET_PRODUCT_BRAND';
export const SET_SELECTED_DEVICE = 'boilerplate/App/SET_SELECTED_DEVICE';
export const LOAD_DEVICE_BY_NAME = 'boilerplate/App/LOAD_DEVICE_BY_NAME';
export const GET_DEVICE_BY_NAME_ERROR = 'boilerplate/App/GET_DEVICE_BY_NAME_ERROR';
export const BASE_API_URL = '//52.63.43.213:9000/api';
export const DEFAULT_LOCALE = 'en';
