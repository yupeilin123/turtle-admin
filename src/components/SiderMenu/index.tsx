import React, { Children } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
// import styles from './index.less';
const styles = require('./index.less');
import { getAuthority } from '@/util/authority';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SiderMenuProps {
  collapsed: boolean,
  menuData: Array<number>, 
  logo: string, 
  siderTitle: string,
  location: any,
  dispatch?: Function,
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

export default class SiderMenu extends React.PureComponent<SiderMenuProps, SiderMenuState> {
  state = {
    openKeys: [],
    selectedKeys: [],
  }

  static getDerivedStateFromProps(nextProps: SiderMenuProps, prevState: SiderMenuState) {
    if (nextProps.location.pathname !== prevState.selectedKeys[0]) {
      return {
        openKeys: searchOpenSubMenu(nextProps.location.pathname),
        selectedKeys: [nextProps.location.pathname],
      };
    }
    return null;
  }

  handleCreateMenu = (menuData: Array<any>) => {
    if (!menuData) {
      return [];
    }
    return menuData.filter(item => item.name && !item.hidden)
      .filter(item => this.handleFilterAuthorityMenu(item))
      .map(item => this.getSubMenuOrMenuItem(item))
      .filter(item => item);
  }

  handleFilterAuthorityMenu = (item: MenuItemTypes) => !item.authority || item.authority === getAuthority()

  getSubMenuOrMenuItem = (item: MenuItemTypes) => {
    if (item.children && item.children.length > 0) {
      return this.handleCreateSubMenu(item);
    }
    return this.handleCreateMenuItem(item);
  }

  handleCreateMenuItem = (item: MenuItemTypes) => (
    <Menu.Item key={item.path}>
      <Link to={item.path} replace={item.path === this.props.location.pathname}>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.name}</span>
      </Link>
    </Menu.Item>
  )

  handleCreateSubMenu = (item: MenuItemTypes) => (
    <SubMenu
      key={item.path}
      title={(
        <span>
          {item.icon && <Icon type={item.icon} />}
          <span>{item.name}</span>
        </span>
      )}
    >
      {item.children.map(m => this.getSubMenuOrMenuItem(m))}
    </SubMenu>
  )

  handleOpenSubMenu = (openKeys: Array<any>) => {
    this.setState({
      openKeys: openKeys.length ? openKeys : [],
    });
  }

  render() {
    const { collapsed, menuData, logo, siderTitle } = this.props;
    const { openKeys, selectedKeys } = this.state;
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
          onOpenChange={this.handleOpenSubMenu}
        >
          {this.handleCreateMenu(menuData)}
        </Menu>
      </Sider>
    );
  }
}