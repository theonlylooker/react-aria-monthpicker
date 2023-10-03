import React from "react";
import { Test2 } from "./test2";

interface Test1 {
  a: number;
  myref: React.RefObject<HTMLInputElement>;
}
export const Test1 = ({ a, myref }: Test1) => {
  return <Test2 a={a} myref={myref} />;
};
