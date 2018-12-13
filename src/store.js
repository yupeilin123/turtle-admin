import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { transformReducers, transformSagas } from 'redux-helps';
import rootReducer from '@/reducers';
import rootSaga from '@/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = history => combineReducers({
  ...transformReducers(rootReducer),
  router: connectRouter(history),
});

export default function configStore(history) {
  const store = createStore(
    reducers(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );
  store.runSaga = () => sagaMiddleware.run(transformSagas(rootSaga));
  return store;
}