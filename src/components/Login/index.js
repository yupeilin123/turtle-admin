import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

const Login = props => {
  const { username, password } = props;

  const onFinish = values => {
    props.onLogin(values);
  };

  return (
    <div className={styles.login}>
      <Form onFinish={onFinish}>
        <FormItem name={username.id || 'username'} rules={username.rules || [{ required: true, message: '请输入你的用户名!' }]}>
          <Input placeholder='admin/guest' size='large' />
        </FormItem>
        <FormItem name={password.id || 'passowrd'} rules={password.rules || [{ required: true, message: '请输入你的密码!' }]}>
          <Input.Password type='password' placeholder='888888/guest' size='large' />
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }} size='large'>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Login;