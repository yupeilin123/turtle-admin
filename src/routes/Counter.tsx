import React from 'react';
import { Dispatch } from 'redux';
import { Button, Card } from 'antd';
import { connect } from 'react-redux';

interface StateType {
  counter: Object
}

interface Counter {
  count: number
}

interface CounterProps {
  dispatch: Dispatch,
  counter: Counter,
}

class Counter extends React.PureComponent<CounterProps> {
  handleIncrement = () => {
    const { count } = this.props.counter;
    this.props.dispatch({
      type: 'counter/setState',
      payload: {
        count: count + 1,
      },
    });
  }

  handleDecrement = () => {
    const { count } = this.props.counter;
    this.props.dispatch({
      type: 'counter/setState',
      payload: {
        count: count - 1,
      },
    });
  }

  handleAsyncIncrement = () => {
    const { count } = this.props.counter;
    this.props.dispatch({
      type: 'counter/asyncOperation',
      payload: {
        count: count + 1,
      },
    });
  }

  handleAsyncDecrement = () => {
    const { count } = this.props.counter;
    this.props.dispatch({
      type: 'counter/asyncOperation',
      payload: {
        count: count - 1,
      },
    });
  }

  render() {
    const { count } = this.props.counter;
    return (
      <Card>
        <Button style={{ marginRight: 10 }} onClick={this.handleDecrement}>减一</Button>
        <span>{count}</span>
        <Button style={{ marginLeft: 10 }} onClick={this.handleIncrement}>加一</Button>
        <br />
        <Button style={{ marginTop: 10 }} onClick={this.handleAsyncDecrement}>
          1秒后减一
        </Button>
        <Button style={{ marginTop: 10, marginLeft: 10 }} onClick={this.handleAsyncIncrement}>
          1秒后加一
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Counter);