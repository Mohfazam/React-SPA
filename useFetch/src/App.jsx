// App.jsx
import { useState, useEffect } from 'react'
import "./App.css"
import { useFetch } from './hooks/useFetch'

function App() {
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      {JSON.stringify(finalData)};
    </div>
  )
}

export default App;