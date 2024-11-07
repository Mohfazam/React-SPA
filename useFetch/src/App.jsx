// App.jsx
import { useState, useEffect } from 'react'
import "./App.css"
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';

function App() {
  // const [currentPost, setCurrentPost] = useState(1);
  // const { finalData, Loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  // if(Loading) {
  //   return (
  //     <div>Yo its loading... </div>
  //   )
  // }

  // return (
  //   <div>
  //     <button onClick={() => setCurrentPost(1)}>1</button>
  //     <button onClick={() => setCurrentPost(2)}>3</button>
  //     <button onClick={() => setCurrentPost(3)}>3</button>
  //     <br />
  //     <br />
  //     {JSON.stringify(finalData)};
  //   </div>
  // )


  const [State, setState] = useState(60);
  const prev = usePrev(State);

  return(
    <div>
      <div>
      {State}
      </div>
      <br />
      <button onClick = {() => {
        setState(State + 1)
      }}>Click Me</button>
      <p>The Previous State is: {prev}</p>
    </div>
  );
}

export default App;