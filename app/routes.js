// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/home',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/',
      name: 'brands',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BrandsPage/reducer'),
          import('containers/BrandsPage/sagas'),
          import('containers/BrandsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('brands', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: 'products/:brand',
      name: 'products',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProductsPage/actions'),
          import('containers/ProductsPage/reducer'),
          import('containers/ProductsPage/sagas'),
          import('containers/ProductsPage'),
        ]);

        const renderRoute = loadModule(cb);
        importModules.then(([actions, reducer, sagas, component]) => {
          injectReducer('products', reducer.default);
          injectSagas(sagas.default);
          store.dispatch(actions.setProductBrand(nextState.params.brand));
          store.dispatch(actions.setPage(parseInt(nextState.location.query.page, 10)));
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
