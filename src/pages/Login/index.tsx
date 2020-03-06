import React, { useEffect } from 'react';
import {
  message, Form, Input, Button,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setAuthority } from '@/util/authority';
import logo from '@/assets/logo.png';
import styles from './index.less';

const FormItem = Form.Item;

interface LoginValue {
  username?: string;
  password?: string;
}

const Login = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleLogin = (value: LoginValue) => {
    const { username, password } = value;
    if (
      (username === 'admin' && password === '888888')
      || (username === 'guest' && password === 'guest')
    ) {
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
      <Form onFinish={handleLogin}>
        <FormItem
          name='username'
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder='admin/guest'
            size='large'
          />
        </FormItem>
        <FormItem
          name='password'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder='888888/guest'
            size='large'
          />
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            htmlType='submit'
            style={{ width: '100%' }}
            size='large'
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Login;
