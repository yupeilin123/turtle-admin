import getAsyncComponent from '@/components/AsyncComponent';

const layoutImport = file => () => import(`../layouts/${file}`);
const routerImport = file => () => import(`../routes/${file}`);

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
    component: getAsyncComponent(layoutImport('BasicLayout')),
    // component: BasicLayout,
    children: {
      '/counter': {
        name: 'counter',
        icon: 'form',
        component: getAsyncComponent(routerImport('Counter')),
        // component: Counter,
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: 'guest',
        component: getAsyncComponent(routerImport('Guest')),
        // component: Guest,
      },
      '/admin': {
        name: 'admin',
        icon: 'heart-o',
        authority: 'admin',
        component: getAsyncComponent(routerImport('Admin')),
        // component: Admin,
      },
    },
  },
};

export default routerMap;