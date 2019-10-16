import { takeEvery } from 'redux-saga/effects';
import login from './login';
import user from './user';
import counter from './counter';

function* rootEffect() {
  yield takeEvery('login/login', login.login);
  yield takeEvery('login/logout', login.logout);
  yield takeEvery('user/getCurrentUser', user.getCurrentUser);
  yield takeEvery('counter/asyncOperation', counter.asyncOperation);
}

export default rootEffect;