import React from 'react';
import {
  Form, Input, Button, Icon,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
// import styles from './index.less';
const styles = require('./index.less');

const FormItem = Form.Item;

interface usernameType {
  id: string,
  rules?: Array<any>
}

interface passwordType {
  id: string,
  rules?: Array<any>
}

interface Props extends FormComponentProps{
  username: usernameType,
  password: passwordType,
  onLogin: Function
}

const Login = (props: Props) => {
  const {
    username, password, form, onLogin,
  } = props;
  const { getFieldDecorator, validateFields } = form;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateFields((err: any, values: any) => {
      if (!err) {
        onLogin(values);
      }
    });
  };
  return (
    <div className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator(username.id || 'username', {
            rules: username.rules || [
              { required: true, message: 'Please input your Username!' },
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='admin/guest'
              size='large'
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator(password.id || 'password', {
            rules: password.rules || [
              { required: true, message: 'Please input your Password!' },
            ],
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='888888/guest'
              size='large'
            />,
          )}
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


export default Form.create<Props>()(Login);
