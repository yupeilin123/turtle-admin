import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// user BrowserHistory
import createHistory from 'history/createBrowserHistory';

import configStore from './store';

import AuthorityRoute from './components/AuthorityRoute';
import BasicLayout from './layouts/BasicLayout';
import LoginLayout from './layouts/LoginLayout';

const history = createHistory();

const store = configStore(history);
store.runSaga();

function AppConfig() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/login' component={LoginLayout} />
            <AuthorityRoute
              path='/'
              render={props => <BasicLayout {...props} />}
              authority={['admin', 'guest']}
              redirectPath='/login'
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  );
}

export default AppConfig;