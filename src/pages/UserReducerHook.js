import React, { useReducer } from 'react';
import { Button, Card } from 'antd';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const asyncDecrement = () => {
    setTimeout(() => {
      dispatch({ type: 'decrement' });
    }, 1000);
  };
  const asyncIncrement = () => {
    setTimeout(() => {
      dispatch({ type: 'increment' });
    }, 1000);
  };
  return (
    <Card title='use Reducer Counter'>
      <Button style={{ marginRight: 10 }} onClick={() => dispatch({ type: 'decrement' })}>减一</Button>
      <span>{state.count}</span>
      <Button style={{ marginLeft: 10 }} onClick={() => dispatch({ type: 'increment' })}>加一</Button>
      <br />
      <Button style={{ marginTop: 10 }} onClick={asyncDecrement}>
        1秒后减一
      </Button>
      <Button style={{ marginTop: 10, marginLeft: 10 }} onClick={asyncIncrement}>
        1秒后加一
      </Button>
    </Card>
  );
};

export default HookUseReducer;