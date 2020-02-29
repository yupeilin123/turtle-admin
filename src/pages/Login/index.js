import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import styles from './index.less';

const FormItem = Form.Item;

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.login);

  React.useEffect(() => {
    localStorage.clear();
  }, []);

  const onLogin = values => {
    dispatch({ type: 'login/login', payload: { ...values } });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginTitle}>
        <img src={logo} alt='logo' />
        <h1>turtle admin</h1>
      </div>
      <Form onFinish={onLogin}>
        <FormItem name='username' rules={[{ required: true, message: '请输入你的用户名!' }]}>
          <Input prefix={<UserOutlined />} placeholder='admin/guest' size='large' />
        </FormItem>
        <FormItem name='password' rules={[{ required: true, message: '请输入你的密码!' }]}>
          <Input.Password prefix={<LockOutlined />} type='password' placeholder='888888/guest' size='large' />
        </FormItem>
        <FormItem>
          <Button type='primary' loading={loading} htmlType='submit' style={{ width: '100%' }} size='large'>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Login;