import { useRef, useState } from "react";


function App() {
  const inputref = useRef();
  function focusOnInput() {
    inputref.current.focus();
  }


  
  return (
    <div>
      Sign Up
      <input ref={inputref} type="text" id="name" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;