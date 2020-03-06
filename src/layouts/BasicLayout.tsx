import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import SiderMenu from '@/components/SiderMenu';
import routerData from '@/common/router';
import { getMenuData, getRouterData } from '../util/utils';
import logo from '@/assets/logo.png';

interface AvatatMenuType {
  key: string;
}

const { Header, Footer, Content } = Layout;
const avatarMenu = [
  {
    title: '退出登录',
    key: 'logout',
    icon: <LogoutOutlined />,
  },
];
const siderTitle = 'turtle admin';
const NotFound = () => <div>404</div>;
const routerComp = getRouterData(routerData);

const currentUser = {
  name: 'turtle',
};
const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const handleClicktAvatarMenu = ({ key }: AvatatMenuType) => {
    if (key === 'logout') {
      window.location.href = '/login';
    }
  };

  const redirectData = (router: any) => {
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
            {routerComp.map((item) => (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}
            <Route render={NotFound} />
          </Switch>
        </Content>
        <Footer style={{ padding: 0 }}>
          <GlobalFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
