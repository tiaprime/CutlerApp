import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import WardDashboard from './Components/WardDashboard';
import FHEGroups from './pages/FHEGroups';
import ToolsPage from './Components/ToolsPage';
import NewsCard from './Components/NewsCard';

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/WardDashboard" element={<WardDashboard/>} />
          <Route path="/Tools" element={<ToolsPage/>} />
          <Route path="/FHEGroups" element={<FHEGroups/>} />
          <Route path="/News" element={<NewsCard title={''} location={''}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
