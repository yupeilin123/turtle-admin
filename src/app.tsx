import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import AuthorityRoute from './components/AuthorityRoute';
import BasicLayout from './layouts/BasicLayout';
import LoginLayout from './layouts/LoginLayout';

const history = createBrowserHistory();

function AppConfig() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path='/login' component={LoginLayout} />
          <AuthorityRoute
            path='/'
            render={(props: any) => <BasicLayout {...props} />}
            authority={['admin', 'guest']}
            redirectPath='/login'
          />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default AppConfig;