import "./App.css";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </div>
  );

  function Message1() {
    return (
      <div>
        Hello World 1
      </div>
    );
  }

  function Message2() {
    return (
      <div>
        Hello World 2
      </div>
    );
  }

}

export default App;