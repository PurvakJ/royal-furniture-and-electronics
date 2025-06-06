import React from 'react';
import './GalleryPreview.css';

const GalleryPreview = ({ items }) => {
  return (
    <div className="gallery-container">
      {items.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.src} alt={item.category} />
          <div className="image-overlay">
            <p>{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPreview;