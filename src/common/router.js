import React from 'react';

const routerMap = {
  '/': {
    exact: true,
    component: React.lazy(() => import('../layouts/BasicLayout')),
    children: {
      '/counter': {
        name: 'counter',
        icon: 'form',
        component: React.lazy(() => import('../pages/Counter')),
      },
      '/hook-useState': {
        name: 'hook-useState',
        icon: 'gift',
        component: React.lazy(() => import('../pages/UseStateHook')),
      },
      '/hook-useReducer': {
        name: 'hook-useReducer',
        icon: 'coffee',
        component: React.lazy(() => import('../pages/UserReducerHook')),
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: 'guest',
        component: React.lazy(() => import('../pages/Guest')),
      },
      '/admin': {
        name: 'admin',
        icon: 'heart-o',
        authority: 'admin',
        component: React.lazy(() => import('../pages/Admin')),
      },
    },
  },
};

export default routerMap;