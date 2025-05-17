import { useState } from "react";

export function WrongCounter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => (count += 1)}>Increment count</button>
      <p>Count will stay {count} </p>
    </>
  );
}

export function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button disabled={count === 0} onClick={() => setCount(0)}>
        Reset count
      </button>
      <p>Count updates {count} </p>
    </>
  );
}
