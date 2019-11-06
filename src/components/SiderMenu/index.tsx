import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { getAuthority } from '@/util/authority';
// import styles from './index.less';
const styles = require('./index.less');

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SiderMenuProps {
  collapsed: boolean,
  menuData: Array<number>,
  logo: string,
  siderTitle: string,
}

interface SiderMenuState {
  openKeys: Array<any>,
  selectedKeys: Array<any>,
}

interface MenuItemTypes {
  path: string,
  icon?: string,
  name?: string,
  children: Array<any>,
  authority?: string,
}

function searchOpenSubMenu(path: string) {
  const transPath = path.slice(1).split('/');
  const openKeys = [];
  let len = transPath.length;
  let startLen = 0;
  while (len - 1) {
    let str = '';
    for (let i = 0; i <= startLen; i += 1) {
      str += `/${transPath[i]}`;
    }
    openKeys.push(str);
    len -= 1;
    startLen += 1;
  }
  return openKeys;
}

const SiderMenu = (props: SiderMenuProps) => {
  const {
    collapsed, menuData, logo, siderTitle,
  } = props;
  const [openKeys, setOpenKeys] = useState<any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

  useEffect(() => {
    if (window.location.pathname !== selectedKeys[0]) {
      setOpenKeys(searchOpenSubMenu(window.location.pathname));
      setSelectedKeys([window.location.pathname]);
    }
  }, [window.location.pathname]);

  const handleFilterAuthorityMenu = (item: MenuItemTypes) => !item.authority || item.authority === getAuthority();

  const handleCreateMenuItem = (item: MenuItemTypes) => (
    <Menu.Item key={item.path}>
      <Link to={item.path} replace={item.path === window.location.pathname}>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.name}</span>
      </Link>
    </Menu.Item>
  );

  const handleCreateSubMenu = (item: MenuItemTypes) => (
    <SubMenu
      key={item.path}
      title={(
        <span>
          {item.icon && <Icon type={item.icon} />}
          <span>{item.name}</span>
        </span>
        )}
    >
      {item.children.map(m => getSubMenuOrMenuItem(m))}
    </SubMenu>
  );

  const getSubMenuOrMenuItem = (item: MenuItemTypes) => {
    if (item.children && item.children.length > 0) {
      return handleCreateSubMenu(item);
    }
    return handleCreateMenuItem(item);
  };

  const handleCreateMenu = (data: any[]) => {
    if (!data) {
      return [];
    }
    return data
      .filter(item => item.name && !item.hidden)
      .filter(item => handleFilterAuthorityMenu(item))
      .map(item => getSubMenuOrMenuItem(item))
      .filter(item => item);
  };

  const handleOpenSubMenu = (data: any[]) => {
    setOpenKeys(data.length ? data : []);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sider} width='250'>
      <div className={styles.logo} key='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <h1>{siderTitle}</h1>
        </Link>
      </div>
      <Menu
        theme='dark'
        mode='inline'
        style={{ padding: '16px 0px' }}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={handleOpenSubMenu}
      >
        {handleCreateMenu(menuData)}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
