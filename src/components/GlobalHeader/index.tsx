import React from 'react';
import { Icon, Avatar, Menu, Dropdown } from 'antd';
// import styles from './index.less';
const styles = require('./index.less')

interface AvatarMenuType {
  key: string,
  disabled?: boolean,
  icon?: string,
  title: string
}

interface CurrentUserType {
  name: string
}

interface Props {
  collapsed: boolean,
  avatarMenu: Array<AvatarMenuType>,
  onClickAvatarMenu: () => void,
  onCollapseMenu: () => void,
  logo: string,
  currentUser: CurrentUserType
}

export default class GlobalHeader extends React.PureComponent<Props> {
  render() {
    const {
      collapsed,
      avatarMenu = [],
      onClickAvatarMenu,
      onCollapseMenu,
      logo,
      currentUser,
    } = this.props;
    const menu = (
      <Menu className={styles.menu} onClick={onClickAvatarMenu}>
        {
          avatarMenu.map(n => (
            <Menu.Item key={n.key} disabled={n.disabled || false}>
              {n.icon && <Icon type={n.icon} />}
              {n.title}
            </Menu.Item>
          ))
        }
      </Menu>
    );
    return (
      <div className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onCollapseMenu}
        />
        <div className={styles.right}>
          <Dropdown overlay={menu} placement='bottomRight'>
            <span className={styles.avatar}>
              <Avatar src={logo} />
              {currentUser.name && <span className={styles.namecls}>{currentUser.name}</span>}
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}