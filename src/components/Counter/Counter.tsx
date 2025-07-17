import { useState } from "react";
import "../../styles/Counter.css";
const Counter = () => {
  const [Count, setCount] = useState<number>(1);

  return (
    <div className="counter">
      <button
        className="ButtonCounter"
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
        type="submit"
      >
        -
      </button>
      <h2 style={{ fontSize: "28px" }}>{Count}</h2>
      <button
        className="ButtonCounter"
        onClick={() => setCount((prev) => prev + 1)}
        type="submit"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
