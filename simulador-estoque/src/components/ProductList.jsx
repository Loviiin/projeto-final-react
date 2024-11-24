import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ products, onRemove, onEdit }) => {
  return (
    <ul className="product-list">
      {products.map((product, index) => (
        <li key={index}>
          <div className="product-info">
            <span>{product.name}</span>
            <span>R${product.price}</span>
          </div>
          <img src={product.image} alt={product.name} className="product-image" />
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onRemove(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProductList;