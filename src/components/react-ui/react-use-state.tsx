import { useState } from "react";

export function WrongCounter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-soft" onClick={() => (count += 1)}>
        Increment count
      </button>
      <p>Count will stay {count} </p>
    </>
  );
}

export function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-soft" onClick={() => setCount(count + 1)}>
        Increment count
      </button>
      <button
        className="btn btn-dash ml-2"
        disabled={count === 0}
        onClick={() => setCount(0)}
      >
        Reset count
      </button>
      <p>Count updates {count} </p>
    </>
  );
}
