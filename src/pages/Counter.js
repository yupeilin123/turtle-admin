import React from 'react';
import { Button, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({
      type: 'counter/setState',
      payload: {
        count: count + 1,
      },
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'counter/setState',
      payload: {
        count: count - 1,
      },
    });
  };

  const handleAsyncIncrement = () => {
    dispatch({
      type: 'counter/asyncOperation',
      payload: {
        count: count + 1,
      },
    });
  };

  const handleAsyncDecrement = () => {
    dispatch({
      type: 'counter/asyncOperation',
      payload: {
        count: count - 1,
      },
    });
  };
  return (
    <Card title='redux Counter'>
      <Button style={{ marginRight: 10 }} onClick={handleDecrement}>减一</Button>
      <span>{count}</span>
      <Button style={{ marginLeft: 10 }} onClick={handleIncrement}>加一</Button>
      <br />
      <Button style={{ marginTop: 10 }} onClick={handleAsyncDecrement}>
        1秒后减一
      </Button>
      <Button style={{ marginTop: 10, marginLeft: 10 }} onClick={handleAsyncIncrement}>
        1秒后加一
      </Button>
    </Card>
  );
};

export default Counter;