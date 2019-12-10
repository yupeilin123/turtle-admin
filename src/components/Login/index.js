import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

const Login = props => {
  const { getFieldDecorator } = props.form;
  const { username, password } = props;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onLogin(values);
      }
    });
  };
  return (
    <div className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator(username.id || 'username', {
            rules: username.rules || [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='admin/guest' size='large' />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator(password.id || 'password', {
            rules: password.rules || [{ required: true, message: '请输入你的密码!' }],
          })(
            <Input.Password prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='888888/guest' size='large' />,
          )}
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

export default Form.create()(Login);