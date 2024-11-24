import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-products" element={<ManageProducts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;