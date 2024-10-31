import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
function App() {
  

  return (
    <div>

    

      <BrowserRouter>

      <div>
      <Link to="/blogs1">Blogs 1</Link>
      <br />
      <Link to="/blogs2">Blogs 2</Link>
    </div>

        <Routes>
          <Route path="/blogs1" element={<Message1 />} />
          <Route path="/blogs2" element={<Message2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  function Error(){
    return (
      <div>
        Error: 404 Page Not Found
      </div>
    );
  }

  function Message1() {
    return (
      <div>
        Hello World 1
      </div>
    );
  }

  function Home(){
    return(
      <div>
        Home
      </div>
    );
  }

  function Message2() {

    const Navigate = useNavigate();

    function redirectUser(){
      Navigate("/home");
    }

    return (
      <div>
        Hello World 2
        <button onClick={redirectUser}>Click here niggaaa</button>
      </div>
    );
  }

}

export default App;