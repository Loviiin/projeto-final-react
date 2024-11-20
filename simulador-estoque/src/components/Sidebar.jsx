import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/manage-products">Gerenciar Produtos</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;