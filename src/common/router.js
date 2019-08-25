import getDynamicComponent from '@/components/DynamicComponent';

// 同步加载
// import BasicLayout from '../layouts/BasicLayout';

// 异步加载
const layoutImport = file => () => import(`../layouts/${file}`);
const pageImport = file => () => import(`../pages/${file}`);

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
    exact: true,
    component: getDynamicComponent(layoutImport('BasicLayout')),
    // component: BasicLayout,
    children: {
      '/counter': {
        name: 'counter',
        icon: 'form',
        component: getDynamicComponent(pageImport('Counter')),
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: 'guest',
        component: getDynamicComponent(pageImport('Guest')),
      },
      '/admin': {
        name: 'admin',
        icon: 'heart-o',
        authority: 'admin',
        component: getDynamicComponent(pageImport('Admin')),
      },
    },
  },
};

export default routerMap;