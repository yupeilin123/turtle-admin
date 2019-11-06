import React, { useState } from 'react';
import { Card, Button } from 'antd';

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleAsyncIncrement() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }
  function handleAsyncDecrement() {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }
  return (
    <Card>
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
}

export default Counter;