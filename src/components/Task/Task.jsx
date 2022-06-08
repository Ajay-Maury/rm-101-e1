import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter"
import { ImCross } from "react-icons/im";

const Task = (props) => {
  console.log("Show", props.showData)
  const data = []
  // NOTE: do not delete `data-testid` key value pair
  return (
  <>
    {
      data.map((e) => (
          <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
          <div data-testid="task-text">{ e.text}</div>
      {/* Counter here */}
          <Counter count={e.count}/>
      <button data-testid="task-remove-button"><ImCross/></button>
    </li>
       ))
    }
   
  </>);
};

export default Task;
