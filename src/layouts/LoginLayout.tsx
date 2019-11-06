import React from 'react';
import { Switch, Route } from 'react-router';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import Login from '@/pages/Login';

// import styles from './LoginLayout.less';
const styles = require('./LoginLayout.less');

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
    <GlobalFooter
      copyright={(
        <>
            Copyright
          {' '}
          <Icon type='copyright' />
          {' '}
            2019 yupeilin
        </>
        )}
      style={{ color: 'rgba(0,0,0,0.85)' }}
    />
  </div>
);
