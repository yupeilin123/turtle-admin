import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { transformReduces, transformSagas } from 'redux-helps';
import rootReducer from '@/reducers';
import rootSaga from '@/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  ...transformReduces(rootReducer),
  router: routerReducer,
});

export default function configStore(history) {
  const store = createStore(
    reducers,
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );
  store.runSaga = () => sagaMiddleware.run(transformSagas(rootSaga));
  return store;
}