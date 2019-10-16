import React, { useState } from 'react';
import { Button, Card } from 'antd';

const HookUseState = () => {
  const [count, setCount] = useState(0);

  const asyncDecrement = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };
  const asyncIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  return (
    <Card title='use State Counter'>
      <Button style={{ marginRight: 10 }} onClick={() => setCount(count - 1)}>减一</Button>
      <span>{count}</span>
      <Button style={{ marginLeft: 10 }} onClick={() => setCount(count + 1)}>加一</Button>
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

export default HookUseState;