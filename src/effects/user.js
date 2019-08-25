import { delay, put } from 'redux-saga/effects';

export default {
  namespace: 'user',
  * getCurrentUser({ payload }) {
    yield delay(300);
    yield put({ type: 'user/setState', payload });
  },
};