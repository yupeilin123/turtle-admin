import React from 'react';

export default function getAsyncComponent(load) {
  return class AsyncComponent extends React.PureComponent {
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