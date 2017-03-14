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

export const LOAD_DEVICE_DETAIL = 'boilerplate/DeviceDetailPage/LOAD_DEVICE_DETAIL';
export const LOAD_DEVICE_DETAIL_SUCCESS = 'boilerplate/DeviceDetailPage/LOAD_DEVICE_DETAIL_SUCCESS';
export const LOAD_DEVICE_DETAIL_ERROR = 'boilerplate/DeviceDetailPage/LOAD_DEVICE_DETAIL_ERROR';
export const SET_DEVICE_NAME = 'boilerplate/DeviceDetailPage/SET_DEVICE_NAME';
export const DEVICE_DETAIL_URL = '//fonoapi.freshpixl.com/v1/getdevice';
