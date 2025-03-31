import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import WardDashboard from './Components/WardDashboard';
import FHEGroups from './pages/FHEGroups';
import NewsCard from './Components/NewsCard';
import EditProfilePage from './pages/EditProfilePage';
import ToolsDirectory from './Components/ToolsPage/ToolsDirectory';
import WardDirectory from './Components/WardDirectory';
import Callings from './Components/Callings';
import CallingDetails from './Components/CallingDetail';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/WardDashboard" element={<WardDashboard />} />
          <Route path="/Tools" element={<ToolsDirectory />} />
          <Route path="/WardDirectory" element={<WardDirectory />} />
          <Route path="/FHEGroups" element={<FHEGroups />} />
          <Route path="/News" element={<NewsCard title={''} location={''} />} />
          <Route path="/Profile" element={<EditProfilePage />} />
          <Route path="/Calling" element={<Callings />} />
          <Route path="/Callings/:callingName" element={<CallingDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
