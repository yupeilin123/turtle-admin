import React from 'react';

interface DynamicComponentProps {

}

interface DynamicComponentState {
  Component: null
}

/**
 * @param {functoin} load
 * eg. getAsyncComponent(() => import('../xxx))
 */
export default function getDynamicComponent(load: Function) {
  return class DynamicComponent extends React.PureComponent<DynamicComponentProps, DynamicComponentState> {
    constructor(props: DynamicComponentProps) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    componentDidMount() {
      load().then(({ default: component }) => {
        this.setState({
          Component: component,
        });
      });
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component /> : null;
    }
  };
}