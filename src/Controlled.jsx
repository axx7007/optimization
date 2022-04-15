import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
export const Controlled = () => {
  console.log("parent render");
  const [count, setCount] = useState(0);

  const obj = useMemo(() => {
    return { say: "hello React" };
  }, []);
  return (
    <div>
      <Navbar data={obj} />
      <h5>Count {count}</h5>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default Controlled;
