import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Página de dashboard para visualizar dados do estoque
const Dashboard = () => {
  const [products, setProducts] = useState([]);

  // Carregar produtos do localStorage ao montar o componente
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Categorias únicas dos produtos
  const categories = [...new Set(products.map(product => product.category))];
  const productsByCategory = categories.map(category => products.filter(product => product.category === category).length);

  // Dados para o gráfico de barras
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Quantidade de Produtos',
        data: productsByCategory,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opções para o gráfico de barras
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quantidade de Produtos por Categoria',
      },
    },
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <span>{product.name}</span>
                <span>R${product.price}</span>
                <span>Categoria: {product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;