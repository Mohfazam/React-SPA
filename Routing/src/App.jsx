import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
function App() {
  

  return (
    <div>

    

      <BrowserRouter>

      

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/blogs1" element={<Message1 />} />
            <Route path="/blogs2" element={<Message2 />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );


  function Header(){
    return (
      <div>
        <Link to="/blogs1">Blogs 1</Link>
        <br />
        <Link to="/blogs2">Blogs 2</Link>
      </div>
    );
  }


  function Footer(){
    return (
      <div>
        
        Footer | Contact us | About us
      </div>
    );
  }

  function Layout(){
    return (
      <div style={{height: "100vh", backgroundColor: "aqua"}}>

        <div backgroundColor="blue" style={{height: "10vh", backgroundColor: "blue", marginTop: 10}}>
        <Header />
        </div>

        <div style={{height: "90vh", backgroundColor: "red"}}>
          <Outlet />
        </div>
      
        <div style={{backgroundColor: "blue", height: "10vh"}}>
        <Footer />
        </div>

      </div>
    );
  }

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
        <button onClick={redirectUser}>Click here</button>
      </div>
    );
  }

}

export default App;