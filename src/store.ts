import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { transformReducers, transformEffects } from 'redux-helps';
import rootReducer from '@/reducers';
import rootEffect from '@/effects';

const sagaMiddleware = createSagaMiddleware();
const reducers = (history: any) => combineReducers({
  ...transformReducers(rootReducer),
  router: connectRouter(history),
});

export default function configStore(history: any) {
  const store: any = createStore(
    reducers(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );
  store.runSaga = () => sagaMiddleware.run(transformEffects(rootEffect));
  return store;
}