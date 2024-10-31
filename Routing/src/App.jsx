import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <div>
      <BrowserRouter>
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