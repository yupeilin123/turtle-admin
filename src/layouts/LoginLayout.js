import React from 'react';
import { Switch, Route } from 'react-router';
import { Icon } from 'antd';
import TurtleLogin from '@/pages/TurtleLogin';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './LoginLayout.less';

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route path='/login' exact component={TurtleLogin} />
      </Switch>
    </div>
    <GlobalFooter
      copyright={(
        <>
          Copyright
          {' '}
          <Icon type='copyright' />
          {' '}
          2019
          yupeilin
        </>
      )}
      style={{ color: 'rgba(0,0,0,0.85)' }}
    />
  </div>
);