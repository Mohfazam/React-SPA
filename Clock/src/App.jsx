import { useState, useRef } from "react";
import "./app.css";

function App(){

  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function (){
      setCurrentCount(c => c+1);
    }, 1000);

    timer.current = value;
  }

  function stopClock(){
    console.log(timer);
    clearInterval(timer.current);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>stop</button>
    </div>
  );
}

export default App;