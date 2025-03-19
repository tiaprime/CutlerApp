import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Login from './pages/Login'

function App() {
  return (

    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
        </nav>

        <Routes>
          <Route path="/Login" element={<Login />} />
          </Routes>
      </Router>
      
      {/* <Login /> */}
    </>
  );
}

export default App;
