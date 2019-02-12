import React from 'react';
import { Route, Redirect } from 'react-router';
import { getAuthority } from '@/util/authority';

interface Props {
  path: string,
  redirectPath: string,
  authority?: Array<string> | string,
  render: any,
}

interface State {
  isAuthority: null | boolean
}

export default class AuthorityRoute extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAuthority: null,
    };
  }

  static getDerivedStateFromProps(nextProps: Props) {
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