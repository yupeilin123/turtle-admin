import React from 'react';
import { useDispatch } from 'react-redux';
import Login from '@/components/Login';
import logo from '@/assets/logo.png';
import styles from './index.less';

const TurtleLogin = () => {
  const dispatch = useDispatch();
  localStorage.clear();
  const login = values => {
    dispatch({ type: 'login/login', payload: { ...values } });
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
          onLogin={login}
        />
      </div>
    </div>
  );
};

export default TurtleLogin;