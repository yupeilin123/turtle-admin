import React from 'react';
import { Icon, Avatar, Menu, Dropdown } from 'antd';
import styles from './index.less';

export default props => {
  const {
    collapsed,
    avatarMenu = [],
    onClickAvatarMenu,
    onCollapseMenu,
    logo,
    currentUser,
  } = props;
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
};