import React from 'react';
import data from '../utils/data';
import './BurgerIngredients.css';

const BurgerIngredients = () => {
  return (
    <div className="main-content">
      <div className="left-container">
        {data
          .filter(item => item.type === 'bun' || item.type === 'main' || item.type === 'sauce')
          .map(item => (
            <div key={item._id} className="product-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}₽</p>
              </div>
            </div>
          ))}
      </div>
      <div className="right-container">
        {/* Здесь можно добавить другой контент */}
      </div>
    </div>
  );
};

export default BurgerIngredients;
