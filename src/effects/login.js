import { message } from 'antd';
import { put, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setAuthority } from '@/util/authority';

export default {
  * login({ payload }) {
    const { username, password } = payload;
    if ((username === 'admin' && password === '888888') || (username === 'guest' && password === 'guest')) {
      const authority = username;
      yield put({
        type: 'login/setState',
        payload: { loading: true },
      });
      yield delay(1000);
      yield put({
        type: 'login/setState',
        payload: { loading: false },
      });
      setAuthority(authority);
      yield put(push('/'));
      message.success('登录成功');
    } else {
      message.error('账号或密码错误');
    }
  },
  * logout() {
    localStorage.clear();
    yield put(push('/login'));
    message.success('登出成功');
  },
};