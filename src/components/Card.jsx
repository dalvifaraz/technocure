
import React from 'react';
import './Card.css';

export const Card = ({ title, description, image, onButtonClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description.substring(0,150)}{description.length > 150 ? '...' : ''}</p>
      </div>
      <div className="card-footer">
        {onButtonClick && <button className="card-button" onClick={onButtonClick}>Read More</button>}
      </div>
    </div>
  );
};

