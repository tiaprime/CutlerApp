import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import WardDashboard from './Components/WardDashboard';
import FHEGroups from './pages/FHEGroups';
import ToolsPage from './Components/ToolsPage';
import NewsCard from './Components/NewsCard';
import CalenderPage from './pages/CalendarPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/WardDashboard" element={<WardDashboard />} />
          <Route path="/Tools" element={<ToolsPage />} />
          <Route path="/FHEGroups" element={<FHEGroups />} />
          <Route path="/News" element={<NewsCard title={''} location={''} />} />
          <Route path="/calendar" element={<CalenderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
