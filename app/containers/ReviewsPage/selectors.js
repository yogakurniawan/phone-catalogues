/**
 * Device Detail Page selectors
 */

import { createSelector } from 'reselect';

const selectDeviceDetailState = (state) => state.get('deviceDetail');

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
  makeSelectLoading,
  makeSelectError,
  makeSelectDeviceName,
};
