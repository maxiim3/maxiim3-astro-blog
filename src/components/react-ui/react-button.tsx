import { useState } from "react";

export default function Button() {
  const [isToggled, toggle] = useState(false);

  return (
    <>
      <button onClick={() => toggle(!isToggled)}>click to reveal</button>
      {isToggled && <p>Hello from react ⚛️</p>}
    </>
  );
}
