import React from "react";
import { useSelector } from "react-redux";

export const DisplayVl = ({ value }: { value: number }) => {
  const { Counter, Name } = useSelector((state: any) => state);
  console.log(Counter);

  return (
    <>
      {Counter.showVal && <h2>The Value is {Counter.counter}</h2>}
      {Name.toggle && <h2>The Name is {Name.name}</h2>}
    </>
  );
};
