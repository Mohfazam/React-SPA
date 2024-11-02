import { useState, createContext } from "react";

const bulbContext = createContext();

function App(){

  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  );
}

function LightBulb(bulbOn, setBulbOn){
  
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

function ToggleBulbState({setBulbOn, bulbOn}){

  function toggle(){
    setBulbOn(!bulbOn);
  }

  return(
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}

export default App;