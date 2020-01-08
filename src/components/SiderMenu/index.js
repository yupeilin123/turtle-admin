import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { getAuthority } from '@/util/authority';
import styles from './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

function searchOpenSubMenu(path) {
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

export default props => {
  const { collapsed, menuData, logo, siderTitle, location } = props;
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    if (location.pathname !== selectedKeys[0]) {
      setOpenKeys(searchOpenSubMenu(location.pathname));
      setSelectedKeys([location.pathname]);
    }
  }, [location]);

  const handleCreateMenu = menus => {
    if (!menus) {
      return [];
    }
    return menus.filter(item => item.name && !item.hidden)
      .filter(item => handleFilterAuthorityMenu(item))
      .map(item => getSubMenuOrMenuItem(item))
      .filter(item => item);
  };

  const handleFilterAuthorityMenu = item => !item.authority || item.authority === getAuthority();

  const getSubMenuOrMenuItem = item => {
    if (item.children && item.children.length > 0) {
      return handleCreateSubMenu(item);
    }
    return handleCreateMenuItem(item);
  };

  const handleCreateMenuItem = item => (
    <Menu.Item key={item.path}>
      <Link to={item.path} replace={item.path === props.location.pathname}>
        {item.icon}
        <span>{item.name}</span>
      </Link>
    </Menu.Item>
  );

  const handleCreateSubMenu = item => (
    <SubMenu
      key={item.path}
      title={(
        <span>
          {item.icon}
          <span>{item.name}</span>
        </span>
      )}
    >
      {item.children.map(m => getSubMenuOrMenuItem(m))}
    </SubMenu>
  );

  const handleOpenSubMenu = openData => {
    setOpenKeys(openData.length ? openData : []);
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