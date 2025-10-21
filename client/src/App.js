import {BrowserRouter as Router ,Routes,Link,Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import './index.css';

function App(){
  return (
    <Router>

      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </Router>
  )
}

export default App;