import React from 'react';
import { Route, Redirect } from 'react-router';
import { getAuthority } from '@/util/authority';

interface AuthorityRouteProps {
  path: string,
  render: Function,
  redirectPath: string,
  authority: Array<number> | string,
}

interface AuthorityRouteState {
  isAuthority: null | boolean
}

export default class AuthorityRoute extends React.PureComponent<AuthorityRouteProps, AuthorityRouteState> {
  constructor(props: AuthorityRouteProps) {
    super(props);
    this.state = {
      isAuthority: null,
    };
  }

  static getDerivedStateFromProps(nextProps: AuthorityRouteProps) {
    let isAuthority = null;
    if (Array.isArray(nextProps.authority)) {
      if (nextProps.authority.some(_ => _ === getAuthority())) {
        isAuthority = true;
      } else {
        isAuthority = false;
      }
    } else if (nextProps.authority === getAuthority()) {
      isAuthority = true;
    } else {
      isAuthority = false;
    }
    return {
      isAuthority,
    };
  }

  render() {
    const { path, render, redirectPath } = this.props;
    const { isAuthority } = this.state;
    return (
      <Route
        path={path}
        render={isAuthority ? render : () => <Redirect to={redirectPath} />}
      />
    );
  }
}