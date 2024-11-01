import { useState } from "react";

function App(){
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} bulbOn={bulbOn} />
    </div>
  );
}



function BulbState({bulbOn}){

  return(
    <div>
      {bulbOn ? "Bulb is On" : "Bulb is off"}
    </div>
  );
}

function ToggleBulbState({setBulbOn}){

  function toggle(){
    setBulbOn(currentState => !currentState);
  }

  return(
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}

export default App;