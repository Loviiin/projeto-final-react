import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';

// Componente de formulário para adicionar ou editar produtos
const ProductForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [, setImage] = useState('');

  // Categorias predefinidas
  const predefinedCategories = ['Categoria A', 'Categoria B', 'Categoria C'];

  // Efeito para preencher o formulário com dados iniciais ao editar um produto
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setCategory(initialData.category);
      setImage(initialData.image);
    }
  }, [initialData]);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await fetchImage(name);
    setImage(imageUrl);
    onSubmit({ name, price, category, image: imageUrl });
    setName('');
    setPrice('');
    setCategory('');
  };

  // Função para buscar a imagem do produto usando a API do Google Custom Search
  const fetchImage = async (query) => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const cx = import.meta.env.VITE_GOOGLE_CX;
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&searchType=image&key=${apiKey}&num=10`
      );
      const data = await response.json();
      console.log('Google Custom Search API response:', data);
      if (data.items && data.items.length > 0) {
        console.log('First image link:', data.items[0].link);
        return data.items[0].link;
      } else {
        console.log('No images found for query:', query);
        return '';
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      return '';
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Preço:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Categoria:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          {predefinedCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="submit-button">Salvar</button>
    </form>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default ProductForm;