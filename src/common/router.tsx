import * as React from 'react';
import {
  SlackOutlined,
  HeatMapOutlined,
  SlackSquareOutlined,
} from '@ant-design/icons';

import BasicLayout from '../layouts/BasicLayout';
import Counter from '../pages/Counter';
import Guest from '../pages/Guest';
import Admin from '../pages/Admin';

const routerMap = {
  '/': {
    exact: true,
    component: BasicLayout,
    children: {
      '/counter': {
        name: 'counter',
        icon: <SlackOutlined />,
        component: Counter,
      },
      '/guest': {
        name: 'guest',
        icon: <HeatMapOutlined />,
        authority: 'guest',
        component: Guest,
      },
      '/admin': {
        name: 'admin',
        icon: <SlackSquareOutlined />,
        authority: 'admin',
        component: Admin,
      },
    },
  },
};

export default routerMap;
