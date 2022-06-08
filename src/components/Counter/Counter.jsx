import React from "react";
import styles from "./counter.module.css";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useState } from "react";

const Counter = (props) => {
  const [count,setCount]  = useState(1)
  // sample value to be replaced
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => setCount(count + 1)}
      >
        <HiPlus />
      </button>
      <span data-testid="task-counter-value">{props.count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => count>1 && setCount(count - 1)}
      >
        <HiMinus />
      </button>
    </div>
  );
};

export default Counter;
