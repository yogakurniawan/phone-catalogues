/**
 * Device Detail Page selectors
 */

import { createSelector } from 'reselect';

const selectDeviceDetailState = (state) => state.get('deviceDetail');

const makeSelectDeviceDetail = () => createSelector(
  selectDeviceDetailState,
  (deviceDetailState) => {
    const payload = deviceDetailState.get('payload');
    if (payload.length > 0) {
      payload.sort((a, b) => {
        if (a.DeviceName < b.DeviceName)
          return -1;
        if (a.DeviceName > b.DeviceName)
          return 1;
        return 0;
      });
    }
    console.log(payload);
    return payload[0];
  }
);

const makeSelectDeviceName = () => createSelector(
  selectDeviceDetailState,
  (deviceDetailState) => deviceDetailState.get('device')
);

const makeSelectLoading = () => createSelector(
  selectDeviceDetailState,
  (deviceDetailState) => deviceDetailState.get('loading')
);

const makeSelectError = () => createSelector(
  selectDeviceDetailState,
  (deviceDetailState) => deviceDetailState.get('error')
);

export {
  makeSelectDeviceDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectDeviceName,
};
