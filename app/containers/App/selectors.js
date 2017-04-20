/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectProducts = (state) => state.get('products');

const deviceSuggestions = () => createSelector(
  selectProducts,
  (productsState) => productsState.getIn(['data', 'deviceSuggestions'])
);

const loadingSuggestions = () => createSelector(
  selectProducts,
  (productsState) => productsState.get('loadingSuggestions')
);

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
  deviceSuggestions,
  loadingSuggestions,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
  getSelectedDevice,
};
