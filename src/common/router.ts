import BasicLayout from '../layouts/BasicLayout';
import Counter from '../pages/Counter';
import Guest from '../pages/Guest';
import Admin from '../pages/Admin';

const routerMap = {
  '/': {
    // name: String
    // icon: Sting
    // authority: String | Array
    // hidden: Boolean
    exact: true,
    // component: getDynamicComponent(layoutImport('BasicLayout')),
    component: BasicLayout,
    children: {
      '/counter': {
        name: 'counter',
        icon: 'form',
        component: Counter,
        // component: getDynamicComponent(routerImport('Counter')),
      },
      '/guest': {
        name: 'guest',
        icon: 'star-o',
        authority: 'guest',
        component: Guest,
        // component: getDynamicComponent(routerImport('Guest')),
      },
      '/admin': {
        name: 'admin',
        icon: 'heart-o',
        authority: 'admin',
        component: Admin,
        // component: getDynamicComponent(routerImport('Admin')),
      },
    },
  },
};

export default routerMap;
