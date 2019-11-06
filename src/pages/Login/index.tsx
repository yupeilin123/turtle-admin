import React, { useEffect } from 'react';
import { message } from 'antd';
import Login from '@/components/Login';
import { setAuthority } from '@/util/authority';

const styles = require('./index.less');
const logo = require('@/assets/logo.png');
// import logo from '@/assets/logo.png';
// import * as styles from './index.less';

interface LoginValue {
  username: string;
  password: string;
}

const TurtleLogin = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleLogin = (value: LoginValue) => {
    const { username, password } = value;
    if ((username === 'admin' && password === '888888') || (username === 'guest' && password === 'guest')) {
      setAuthority(username);
      message.success('登录成功');
      window.location.href = '/';
    } else {
      message.warn('账号/密码错误');
    }
  };
  return (
    <div className={styles.loginBox}>
      <div className={styles.top}>
        <img src={logo} alt='logo' />
        <h1>turtle admin</h1>
      </div>
      <div className={styles.logo}>
        <Login
          username={{
            id: 'username',
          }}
          password={{
            id: 'password',
          }}
          onLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default TurtleLogin;
