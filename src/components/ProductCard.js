import React from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  discount, 
  description, 
  details, 
  animationDelay 
}) => {
  return (
    <div 
      className="product-card"
      style={{ 
        animationDelay: `${animationDelay}s`,
        '--i': animationDelay 
      }}
    >
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span className="current-price">{price}</span>
          {originalPrice && <span className="original-price">{originalPrice}</span>}
          {discount && <span className="discount-badge">{discount}</span>}
        </div>
        <p className="product-description">{description}</p>
        {details && details.length > 0 && (
          <div className="product-details">
            {details.map((detail, index) => (
              <div key={index} className="detail-item">
                <span className="detail-label">{detail.label}:</span>
                <span className="detail-value">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;