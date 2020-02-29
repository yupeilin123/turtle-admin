import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '@/pages/Login';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './LoginLayout.less';

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
    <GlobalFooter />
  </div>
);