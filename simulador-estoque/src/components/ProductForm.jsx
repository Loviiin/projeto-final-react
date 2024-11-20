import { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price });
    setName('');
    setPrice('');
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
};

export default ProductForm;