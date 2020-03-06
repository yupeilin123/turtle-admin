export function getMenuData(routerMap: any, parentPath: string = '') {
  let routes = routerMap;
  if (routerMap['/']) {
    routes = routerMap['/'].children;
  }
  const menu = Object.keys(routes).map((path) => {
    const result: any = {
      path: parentPath + path,
      name: routes[path].name,
      icon: routes[path].icon,
      authority: routes[path].authority,
      hidden: routes[path].hidden,
    };
    if (routes[path].children) {
      result.children = getMenuData(routes[path].children, path);
    }
    return result;
  });
  return menu;
}

function flatten(routerMap: any, parentPath: string = '') {
  let routes: any = {};
  Object.keys(routerMap).forEach((path) => {
    routes[path] = {
      path: parentPath + path,
      key: path,
      name: routerMap[path].name,
      exact: routerMap[path].exact || true,
      component: routerMap[path].component,
    };
    if (routerMap[path].children) {
      routes = {
        ...routes,
        ...flatten(routerMap[path].children, path === '/' ? '' : path),
      };
    }
  });
  return routes;
}

export function getRouterData(routerMap: any) {
  const flattenRoute = flatten(routerMap);
  const routes = Object.keys(flattenRoute).map((path) => flattenRoute[path]);
  return routes;
}
