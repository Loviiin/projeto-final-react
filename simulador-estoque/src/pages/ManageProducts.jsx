import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import './ManageProducts.css';

// Página de gerenciamento de produtos
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name');

  // Carregar produtos do localStorage ao montar o componente
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Salvar produtos no localStorage sempre que a lista de produtos mudar
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Função para adicionar ou editar um produto
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

  // Função para remover um produto
  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  // Função para editar um produto
  const handleEditProduct = (index) => {
    setEditingProduct(index);
  };

  // Função para alterar o critério de ordenação
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  // Ordenar e filtrar produtos com base no termo de pesquisa e critério de ordenação
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