import React from 'react';
import { Switch, Route } from 'react-router';
import { Icon } from 'antd';
// import styles from './LoginLayout.less';
const styles = require('./LoginLayout.less')
import GlobalFooter from '@/components/GlobalFooter';
import TurtleLogin from '@/routes/TurtleLogin';

export default class LoginLayout extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Switch>
            <Route path='/login' exact component={TurtleLogin} />
          </Switch>
        </div>
        <GlobalFooter
          copyright={(
            <React.Fragment>
              Copyright
              {' '}
              <Icon type='copyright' />
              {' '}
              2018
              yupeilin
            </React.Fragment>
          )}
          style={{ color: 'rgba(0,0,0,0.85)' }}
        />
      </div>
    );
  }
}