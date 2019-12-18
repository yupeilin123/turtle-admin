import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Icon, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import routerData from '@/common/router';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import SiderMenu from '@/components/SiderMenu';
import logo from '@/assets/logo.png';
import { getMenuData, getRouterData } from '@/util/utils';

const { Header, Footer, Content } = Layout;
const avatarMenu = [{
  title: '退出登录',
  key: 'logout',
  icon: 'logout',
}];
const siderTitle = 'turtle admin';
const NotFound = () => <div>404</div>;
const routerComp = getRouterData(routerData);

const SpinStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const BasicLayout = () => {
  const { currentUser } = useSelector(state => state.user);
  const location = useSelector(state => state.router.location);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    dispatch({
      type: 'user/getCurrentUser',
      payload: {
        currentUser: {
          name: 'turtle',
        },
      },
    });
  }, []);
  const handleCollapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const handleClicktAvatarMenu = ({ key }) => {
    if (key === 'logout') {
      dispatch({ type: 'login/logout' });
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
        location={location}
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
        <Content style={{ margin: '20px 24px 0', height: '100%', position: 'relative' }}>
          <React.Suspense fallback={<Spin size='large' style={SpinStyle} />}>
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
          </React.Suspense>
        </Content>
        <Footer style={{ padding: 0 }}>
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
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;