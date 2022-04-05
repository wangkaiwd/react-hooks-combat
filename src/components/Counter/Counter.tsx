import React, { useState } from 'react';
import { Button } from 'antd';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <Button data-testid="button" type="primary" onClick={onClick}>click</Button>
    </div>
  );
};

export default Counter;
