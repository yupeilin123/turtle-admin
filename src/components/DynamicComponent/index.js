import React from 'react';

/**
 * @param {functoin} load
 * eg. getAsyncComponent(() => import('../xxx))
 */
export default function getDynamicComponent(load) {
  return class DynamicComponent extends React.PureComponent {
    constructor(props) {
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