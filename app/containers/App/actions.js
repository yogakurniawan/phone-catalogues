import {
  SET_SEARCH_QUERY,
  SET_PRODUCT_BRAND,
  LOAD_DEVICE_BY_NAME,
  SET_SELECTED_DEVICE,
  GET_DEVICE_BY_NAME_ERROR,
} from './constants';

export function setProductBrand(brand) {
  return {
    type: SET_PRODUCT_BRAND,
    brand,
  };
}

export function loadDeviceByName(brand, name) {
  return {
    type: LOAD_DEVICE_BY_NAME,
    brand,
    name,
  };
}

export function setSelectedDevice(device) {
  return {
    type: SET_SELECTED_DEVICE,
    device,
  };
}

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      query,
    },
  };
}

export function getDeviceByNameError(error) {
  return {
    type: GET_DEVICE_BY_NAME_ERROR,
    error,
  };
}
