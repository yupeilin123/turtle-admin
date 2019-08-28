import React from 'react';
import { Route, Redirect } from 'react-router';
import { getAuthority } from '@/util/authority';

export default props => {
  const { path, render, redirectPath, authority } = props;
  const isAuthority = () => {
    if (Array.isArray(authority)) {
      if (authority.some(_ => _ === getAuthority())) {
        return true;
      }
      return false;
    } if (authority === getAuthority()) {
      return true;
    }
    return false;
  };
  return (
    <Route
      path={path}
      render={isAuthority() ? render : () => <Redirect to={redirectPath} />}
    />
  );
};