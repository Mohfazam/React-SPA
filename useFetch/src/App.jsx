import { useState, useEffect } from 'react'
import './App.css'
import { usePostTitle } from './hooks/useFetch';

function App() {

  const PostTitle = usePostTitle();

  return (
    <div>
      {PostTitle}
    </div>
  )
}

export default App;