import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, category, price, image, discount }) => {
  return (
    <div className="product-card">
      {discount && <span className="discount-badge">{discount}</span>}
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        {category && <p className="product-category">{category}</p>}
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;