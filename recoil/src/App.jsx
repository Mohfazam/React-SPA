import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }

  return (
    <div>
      <button onClick= {increment}>Increment</button>
      <button onClick= {decrement}>Decrement</button>
      <br />
      Count: {count}
    </div>
  )
}

export default App
