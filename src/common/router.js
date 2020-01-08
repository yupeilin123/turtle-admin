import React from 'react';
import { SlackOutlined, RedditOutlined, RadarChartOutlined, HeatMapOutlined, SlackSquareOutlined } from '@ant-design/icons';

const routerMap = {
  '/': {
    exact: true,
    component: React.lazy(() => import('../layouts/BasicLayout')),
    children: {
      '/counter': {
        name: 'redux-counter',
        icon: <SlackOutlined />,
        component: React.lazy(() => import('../pages/Counter')),
      },
      '/hook-useState': {
        name: 'hook-useState',
        icon: <RedditOutlined />,
        component: React.lazy(() => import('../pages/UseStateHook')),
      },
      '/hook-useReducer': {
        name: 'hook-useReducer',
        icon: <RadarChartOutlined />,
        component: React.lazy(() => import('../pages/UserReducerHook')),
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: <HeatMapOutlined />,
        component: React.lazy(() => import('../pages/Guest')),
      },
      '/admin': {
        name: 'admin',
        icon: <SlackSquareOutlined />,
        authority: 'admin',
        component: React.lazy(() => import('../pages/Admin')),
      },
    },
  },
};

export default routerMap;