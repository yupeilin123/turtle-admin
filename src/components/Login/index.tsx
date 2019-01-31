import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

interface LoginProps {
  form: object,
  username: string,
  password: string,
  onLogin?: Function
}

class Login extends React.Component<LoginProps> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: object, values: object) => {
      if (!err) {
        this.props.onLogin(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { username, password } = this.props;
    return (
      <div className={styles.login}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator(username.id || 'username', {
              rules: username.rules || [{ required: true, message: 'Please input your Username!' }],
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='admin/guest' size='large' />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator(password.id || 'password', {
              rules: password.rules || [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='888888/guest' size='large' />,
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
  }
}

export default Form.create()(Login);