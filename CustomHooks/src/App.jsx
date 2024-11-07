import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//custom hook

function useCounter() {
  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1);
  }

  return {
    count,
    increasecount,
  };
}

function App() {
  return <div>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>;
}

function Counter() {
  const { count, increasecount } = useCounter();
  return(
    <div style={{padding:"10px"}}>
    <button onClick={increasecount}>Click me: {count}</button>
  </div>
  )
}

export default App;
