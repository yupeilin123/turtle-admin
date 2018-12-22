import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export default {
  namespace: 'user',
  * getCurrentUser({ payload }) {
    yield call(delay, 300);
    yield put({ type: 'user/setState', payload });
  },
};