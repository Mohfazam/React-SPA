import { useState, createContext, useContext } from "react";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </div>
  );
}

function LightBulb() {
  const { bulbOn, setBulbOn} = useContext(BulbContext);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} bulbOn={bulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb is On" : "Bulb is off"}</div>;
}

function ToggleBulbState() {
  const { bulbOn, setBulbOn} = useContext(BulbContext);
  function toggle() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}

export default App;
