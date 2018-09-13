import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export default {
  * asyncOperation({ payload }) {
    yield call(delay, 1000);
    yield put({
      type: 'setState',
      payload: {
        count: payload.count,
      },
    });
  },
};