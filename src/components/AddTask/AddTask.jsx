import React from "react";
import styles from "./addTask.module.css";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const AddTask = (props) => {
  const [text,setText] = useState("")
  // function handleAdd() {
  //   console.log(text)
  //   props.addData(text);
  // }
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add task..."
        onInput={(e) => setText(e.target.value)}
      />
      <button data-testid="add-task-button" onClick={() => props.addData(text)}>
        <HiPlus />
      </button>
    </div>
  );
};

export default AddTask;
