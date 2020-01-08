import { takeEvery } from 'redux-saga/effects';
import loginEffect from './login';
import userEffect from './user';
import counterEffect from './counter';

function* rootEffect() {
  yield takeEvery('login/login', loginEffect.login);
  yield takeEvery('login/logout', loginEffect.logout);
  yield takeEvery('user/getCurrentUser', userEffect.getCurrentUser);
  yield takeEvery('counter/asyncOperation', counterEffect.asyncOperation);
}

export default rootEffect;