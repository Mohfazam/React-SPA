import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function useDebounce(originalFn){
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  
  return fn;
}


function App() {

  function sendDataToBackend(){
    fetch('https://jsonplaceholder.typicode.com/posts/1');
  }

  const debounceFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <input type="text" onChange={debounceFn} />
    </div>
  );
}

export default App;