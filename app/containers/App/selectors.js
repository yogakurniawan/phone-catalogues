import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectProducts = (state) => state.get('products');

const allDevices = () => createSelector(
  selectProducts,
  (productsState) => productsState && productsState.getIn(['data', 'allDevices'])
);

const makeSelectCurrentBrand = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentBrand')
);

const makeSelectSearchQuery = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchQuery') && globalState.get('searchQuery').query
);

const getSelectedDevice = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('selectedDevice')[0]
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
  allDevices,
  makeSelectSearchQuery,
  makeSelectLocationState,
  getSelectedDevice,
};
