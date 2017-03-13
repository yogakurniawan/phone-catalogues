/**
 * Device Detail Page selectors
 */

import { createSelector } from 'reselect';

const selectDeviceDetailState = (state) => state.get('deviceDetail');

const makeSelectDeviceDetail = () => createSelector(
  selectDeviceDetailState,
  (deviceDetailState) => deviceDetailState.get('payload')
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
