import React from "react";
import { useDispatch } from "react-redux";
import { NameActions } from "../stores/Form.reducer";
import styles from "./style.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(NameActions.updateName(e.target.value));
  };
  const toggleName = (e: any) => {
    dispatch(NameActions.toggleName());
  };
  return (
    <>
      <div style={{ margin: 20 }}>
        <input
          type="text"
          onChange={handleChange}
          className={styles.input}
        ></input>
      </div>
      <button onClick={toggleName} className={styles.button}>
        Toggle Name
      </button>
    </>
  );
};
