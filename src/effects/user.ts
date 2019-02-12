import { delay, put } from 'redux-saga/effects';

interface PayloadType {
  payload: any,
}

export default {
  namespace: 'user',
  * getCurrentUser({ payload }: PayloadType) {
    yield delay(1000);
    yield put({ type: 'user/setState', payload });
  },
};     