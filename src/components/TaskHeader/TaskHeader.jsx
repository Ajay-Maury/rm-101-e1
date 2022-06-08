import React,{useState} from "react";
import { useEffect } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  // sample values to be replaced
  const [totalTask,setTotalTask] = useState(props.data.length)
  const [unTask,setUnTask] = useState(props.data)
  const [unCompletedTask,setUnCompletedTask] = useState(0)
  // console.log(ucTask)
  useEffect(() => {
    let ucTask = unTask.filter((e) => e.done === false);
    setUnCompletedTask(ucTask.length);
  }, [totalTask]);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <p>
        You have <b data-testid="header-remaining-task">{unCompletedTask}</b> of <b data-testid="header-total-task">{totalTask}</b> tasks remaining
      </p>
    </div>
  );
};

export default TaskHeader;
