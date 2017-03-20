/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentBrand = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentBrand')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const getSelectedDevice = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('selectedDevice')[0]
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectCurrentBrand,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
  getSelectedDevice,
};
