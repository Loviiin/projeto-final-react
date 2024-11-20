

import PropTypes from 'prop-types';
import './ProductList.css';


const ProductList = ({ products, onRemove }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - R${product.price}
          <button onClick={() => onRemove(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};



export default ProductList;