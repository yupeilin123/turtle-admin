import React from 'react';
import { Route, Redirect } from 'react-router';
import { getAuthority } from '@/util/authority';

interface Props {
  path: string;
  redirectPath: string;
  authority?: Array<string> | string;
  render: any;
}

interface RenderI extends Props {
  isAuthority: boolean;
}

function BasicLayoutRender({
  path,
  isAuthority,
  render,
  redirectPath,
}: RenderI) {
  return (
    <Route
      path={path}
      render={isAuthority ? render : () => <Redirect to={redirectPath} />}
    />
  );
}

const AuthorityRoute = (props: Props) => {
  const { authority } = props;
  if (Array.isArray(authority)) {
    if (authority.some((_) => _ === getAuthority())) {
      return BasicLayoutRender({ ...props, isAuthority: true });
    }
    return BasicLayoutRender({ ...props, isAuthority: false });
  }
  if (authority === getAuthority()) {
    return BasicLayoutRender({ ...props, isAuthority: true });
  }
  return BasicLayoutRender({ ...props, isAuthority: false });
};

export default AuthorityRoute;
