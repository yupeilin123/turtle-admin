import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export default {
  * getCurrentUser({ payload }) {
    yield call(delay, 300);
    yield put({ type: 'setState', payload });
  },
};