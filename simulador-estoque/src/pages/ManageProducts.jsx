import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import './ManageProducts.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name');

  const handleAddProduct = (product) => {
    if (editingProduct !== null) {
      const updatedProducts = products.map((p, index) =>
        index === editingProduct ? product : p
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleEditProduct = (index) => {
    setEditingProduct(index);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-products-page">
      <Sidebar />
      <div className="manage-products-content">
        <h1>Gerenciar Produtos</h1>
        <div className="form-container">
          <ProductForm
            onSubmit={handleAddProduct}
            initialData={editingProduct !== null ? products[editingProduct] : null}
          />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="sort-container">
          <label>Ordenar por:</label>
          <select value={sortCriteria} onChange={handleSortChange}>
            <option value="name">Nome</option>
            <option value="price">Preço</option>
          </select>
        </div>
        <div className="product-list-container">
          <ProductList
            products={filteredProducts}
            onRemove={handleRemoveProduct}
            onEdit={handleEditProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;