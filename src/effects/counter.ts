import { delay, call, put } from 'redux-saga/effects';

interface PayloadType {
  payload: any,
}

export default {
  namespace: 'counter',
  * asyncOperation({ payload }: PayloadType) {
    yield call(delay, 1000);
    yield put({
      type: 'counter/setState',
      payload: {
        count: payload.count,
      },
    });
  },
};