import { delay, put } from 'redux-saga/effects';

interface PayloadType {
  payload: any,
}

export default {
  namespace: 'counter',
  * asyncOperation({ payload }: PayloadType) {
    yield delay(1000);
    yield put({
      type: 'counter/setState',
      payload: {
        count: payload.count,
      },
    });
  },
};