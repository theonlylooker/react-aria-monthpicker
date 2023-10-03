import { ReactComponent as Logo } from "./assets/react.svg";
import { Test1 } from "./test1";
import { useRef } from "react";
//import { CalendarI } from "./calendar";
const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeRef = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "nuevo elemento";
  };
  return (
    <div className="text-4xl">
      <h1>text</h1>
      <Logo />
      {/* <CalendarI /> */}
      <Test1 a={1} myref={inputRef} />
      <button onClick={handleChangeRef}>asd</button>
    </div>
  );
};

export default App;
