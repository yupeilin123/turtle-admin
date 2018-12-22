import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import SiderMenu from '@/components/SiderMenu';
import routerData from '@/common/router';
import logo from '@/assets/logo.png';
import { getMenuData, getRouterData } from '../util/utils';

const { Header, Footer, Content } = Layout;
const avatarMenu = [{
  title: '退出登录',
  key: 'logout',
  icon: 'logout',
}];
const siderTitle = 'turtle admin';
const NotFound = () => <div>404</div>;

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'user/getCurrentUser',
      payload: {
        currentUser: {
          name: 'turtle',
        },
      },
    });
  }

  handleCollapseMenu = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  handleClicktAvatarMenu = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({ type: 'login/logout' });
    }
  }

  render() {
    const { collapsed } = this.state;
    const { location } = this.props;
    const { currentUser } = this.props.user;
    return (
      <Layout>
        <SiderMenu
          collapsed={collapsed}
          menuData={getMenuData(routerData)}
          location={location}
          logo={logo}
          siderTitle={siderTitle}
        />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader
              collapsed={collapsed}
              currentUser={currentUser}
              onClickAvatarMenu={this.handleClicktAvatarMenu}
              onCollapseMenu={this.handleCollapseMenu}
              avatarMenu={avatarMenu}
              logo={logo}
            />
          </Header>
          <Content style={{ margin: '20px 24px 0', height: '100%' }}>
            <Switch>
              <Redirect exact from='/' to='/counter' />
              {
                getRouterData(routerData).map(item => (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))
              }
              <Route render={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
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
            />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ user }) => ({ user }))(BasicLayout);