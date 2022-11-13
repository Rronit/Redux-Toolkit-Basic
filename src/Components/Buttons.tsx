import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CounterActions } from "../stores/reducers";
import { DisplayVl } from "./DisplayVl";
import { Form } from "./Form";
import styles from "./style.module.css";

export const Buttons = () => {
  const [vl, setVl] = useState<number>(0);
  const dispatch = useDispatch();
  const increment = () => {
    setVl(vl + 1);
    dispatch(CounterActions.increment(5));
  };
  const decrement = () => {
    setVl(vl - 1);
    dispatch(CounterActions.decrement());
  };

  const hide = () => {
    setVl(vl - 1);
    dispatch(CounterActions.toggle());
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={increment} className={styles.button}>
          Increment By 5
        </button>
        <button onClick={decrement} className={styles.button}>
          Decrement
        </button>
        <button onClick={hide} className={styles.button}>
          Toggle Number
        </button>
      </div>
      <Form />
      <DisplayVl value={vl} />
    </>
  );
};
