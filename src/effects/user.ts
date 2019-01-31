import { delay, call, put } from 'redux-saga/effects';

interface PayloadType {
  payload: any,
}

export default {
  namespace: 'user',
  * getCurrentUser({ payload }: PayloadType) {
    yield call(delay, 300);
    yield put({ type: 'user/setState', payload });
  },
};