import React from "react";
import styles from "./addTask.module.css";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const AddTask = (props) => {
  // const { addData, data } = props;
  const [text, setText] = useState({
    count: 1,
    done: false,
    id: data.length+1,
    text: "",
  });
  function handleAdd() {
    console.log(text);
    props.data.push(text);
    props.addData(data);
    console.log("data", data);
  }
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add task..."
        onInput={(e) => setText(text,text.text=e.target.value)}
      />
      <button data-testid="add-task-button" onClick={handleAdd}>
        <HiPlus />
      </button>
    </div>
  );
};

export default AddTask;
