import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";

export const App: FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      <span>Click button below to increase the counter!</span>
      <br />
      <span>Counter Value: {counter}</span>
      <br />
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Click me!
      </button>
    </div>
  );
};
