import React, { useState, useEffect } from 'react';
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
const routerComp = getRouterData(routerData);

const BasicLayout = props => {
  const { currentUser } = props.user;
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    props.dispatch({
      type: 'user/getCurrentUser',
      payload: {
        currentUser: {
          name: 'turtle',
        },
      },
    });
  });

  const handleCollapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const handleClicktAvatarMenu = ({ key }) => {
    if (key === 'logout') {
      props.dispatch({ type: 'login/logout' });
    }
  };

  const redirectData = router => {
    for (let key = 0; key < router.length; key += 1) {
      if (router[key].path.match(/\//g).length > 1) {
        return router[key].path;
      }
    }
    return 'counter';
  };
  return (
    <Layout>
      <SiderMenu
        collapsed={collapsed}
        menuData={getMenuData(routerData)}
        location={props.location}
        logo={logo}
        siderTitle={siderTitle}
      />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <GlobalHeader
            collapsed={collapsed}
            currentUser={currentUser}
            onClickAvatarMenu={handleClicktAvatarMenu}
            onCollapseMenu={handleCollapseMenu}
            avatarMenu={avatarMenu}
            logo={logo}
          />
        </Header>
        <Content style={{ margin: '20px 24px 0', height: '100%' }}>
          <Switch>
            <Redirect exact from='/' to={redirectData(routerComp)} />
            {
              routerComp.map(item => (
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
                2019
                yupeilin
              </React.Fragment>
            )}
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default connect(({ user }) => ({ user }))(BasicLayout);