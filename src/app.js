import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// user BrowserHistory
import { createBrowserHistory } from 'history';

import configStore from './store';

import ErrorBoundary from './components/ErrorBoundary';

import AuthorityRoute from './components/AuthorityRoute';
import BasicLayout from './layouts/BasicLayout';
import LoginLayout from './layouts/LoginLayout';

const history = createBrowserHistory();

const store = configStore(history);
store.runSaga();

function AppConfig() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <Switch>
              <Route path='/login' component={LoginLayout} />
              <AuthorityRoute
                path='/'
                render={props => <BasicLayout {...props} />}
                authority={['admin', 'guest']}
                redirectPath='/login'
              />
            </Switch>
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  );
}

export default AppConfig;