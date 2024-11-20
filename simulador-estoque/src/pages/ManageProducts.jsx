import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import './ManageProducts.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="manage-products-page">
      <Sidebar />
      <div className="manage-products-content">
        <h1>Gerenciar Produtos</h1>
        <div className="form-container">
          <ProductForm onSubmit={handleAddProduct} />
        </div>
        <div className="product-list-container">
          <ProductList products={products} onRemove={handleRemoveProduct} />
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;