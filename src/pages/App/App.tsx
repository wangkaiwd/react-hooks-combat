import { useState } from 'react';
import { Button } from 'antd';

function App () {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2 data-testid="count">{count}</h2>
      <Button type='primary' onClick={onClick}>click</Button>
    </>
  );
}

export default App;
