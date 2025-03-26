import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import WardDashboard from './Components/WardDashboard';
import FHEGroups from './pages/FHEGroups';
import ToolsPage from './Components/ToolsPage';
import NewsCard from './Components/NewsCard';
import EditProfilePage from './pages/EditProfilePage';

function App() {

  return (

    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/WardDashboard" element={<WardDashboard/>} />
          <Route path="/Tools" element={<ToolsPage/>} />
          <Route path="/FHEGroups" element={<FHEGroups/>} />
          <Route path="/News" element={<NewsCard title={''} location={''}/>} />
          <Route path="/Profile" element={<EditProfilePage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
