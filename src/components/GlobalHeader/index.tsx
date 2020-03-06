import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import styles from './index.less';
const styles = require('./index.less');

interface AvatarMenuType {
  key: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  title: string;
}

interface CurrentUserType {
  name: string;
}

interface Props {
  collapsed: boolean;
  avatarMenu: Array<AvatarMenuType>;
  onClickAvatarMenu: any;
  onCollapseMenu: () => void;
  logo: string;
  currentUser: CurrentUserType;
}

const GlobalHeader = (props: Props) => {
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
      {avatarMenu.map((n) => (
        <Menu.Item key={n.key} disabled={n.disabled || false}>
          {n.icon}
          <span style={{ paddingLeft: 5 }}>{n.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className={styles.header}>
      <div onClick={onCollapseMenu} className={styles.trigger}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.right}>
        <Dropdown overlay={menu} placement='bottomRight'>
          <span className={styles.avatar}>
            <Avatar src={logo} />
            {currentUser.name && (
              <span className={styles.namecls}>{currentUser.name}</span>
            )}
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default GlobalHeader;
