import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';

const ProductForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [, setImage] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await fetchImage(name);
    setImage(imageUrl);
    onSubmit({ name, price, image: imageUrl });
    setName('');
    setPrice('');
  };

  const fetchImage = async (query) => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const cx = import.meta.env.VITE_GOOGLE_CX;
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&searchType=image&key=${apiKey}&excludeTerms=AI,generated,ai,ia,gerado-por-ia`
    );
    const data = await response.json();
    return data.items[0]?.link || '';
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
      <button type="submit" className="submit-button">Salvar</button>
    </form>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default ProductForm;