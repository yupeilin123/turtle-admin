import getDynamicComponent from '@/components/DynamicComponent';

// 异步加载
const layoutImport = file => () => import(`../layouts/${file}`);
const routerImport = file => () => import(`../routes/${file}`);

// 同步加载
// import BasicLayout from '../layouts/BasicLayout';
// import Counter from '../routes/Counter';
// import Guest from '../routes/Guest';
// import Admin from '../routes/Admin';

const routerMap = {
  '/': {
    // name: String
    // icon: Sting
    // authority: String | Array
    // hidden: Boolean
    component: getDynamicComponent(layoutImport('BasicLayout')),
    // component: BasicLayout,
    children: {
      '/counter': {
        name: 'counter',
        icon: 'form',
        component: getDynamicComponent(routerImport('Counter')),
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: 'guest',
        component: getDynamicComponent(routerImport('Guest')),
      },
      '/admin': {
        name: 'admin',
        icon: 'heart-o',
        authority: 'admin',
        component: getDynamicComponent(routerImport('Admin')),
      },
    },
  },
};

export default routerMap;