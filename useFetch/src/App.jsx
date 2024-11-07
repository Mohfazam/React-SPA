
import { useState, useEffect } from 'react'
import './App.css'
import { usePostTitle, useFetch } from './hooks/useFetch'

function App() {
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      {finalData.title}
    </div>
  )
}

export default App;