import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";

const Tasks = (props) => {
  console.log(props.data)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task showData={props.data} />
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
