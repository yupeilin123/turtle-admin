import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export default {
  namespace: 'counter',
  * asyncOperation({ payload }) {
    yield call(delay, 1000);
    yield put({
      type: 'counter/setState',
      payload: {
        count: payload.count,
      },
    });
  },
};