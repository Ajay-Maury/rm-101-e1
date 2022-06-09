import React from "react";
import styles from "./addTask.module.css";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const AddTask = ({addData,data}) => {
  // const { addData, data } = props;
  const [textdata, setTextdata] = useState({
    count: 1,
    done: false,
    id: null,
    text: "",
  });
  // function handleAdd() {
  //   // console.log("text",textdata);
  //   addData([...data, textdata]);
  //   // console.log("data", data);
  // }
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        placeholder="Add task..."
        onInput={(e) =>
          setTextdata({
            ...textdata,
            text: e.target.value,
            id: data.length + 1,
          })
        }
      />
      <button
        data-testid="add-task-button"
        onClick={() => addData([...data, textdata])}
      >
        <HiPlus />
      </button>
    </div>
  );
};

export default AddTask;
