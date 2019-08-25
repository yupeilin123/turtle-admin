import { delay, put } from 'redux-saga/effects';

export default {
  namespace: 'counter',
  * asyncOperation({ payload }) {
    yield delay(1000);
    yield put({
      type: 'counter/setState',
      payload: {
        count: payload.count,
      },
    });
  },
};