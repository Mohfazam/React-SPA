import { useState } from "react";
import "./app.css";

function App(){

  const [currentCount, setCurrentCount] = useState(1);

  function startClock(){
    setInterval(function (){
      setCurrentCount(c => c+1);
    }, 1000);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button>stop</button>
    </div>
  );
}

export default App;