import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homepage/Home';
import Navbar from './components/Navbar';
import Services from './components/servicepage/Services';
import Work from './components/workpage/Work';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Services />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
