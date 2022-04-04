import { Button } from "antd";
import { useState } from "react";

export default function IndexPage () {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button type="primary" onClick={() => setCount(count + 1)}>click</Button>
      <ul>
        <li>hhh</li>
        <li>hhh</li>
        <li>hhh</li>
      </ul>
    </>
  );
}
