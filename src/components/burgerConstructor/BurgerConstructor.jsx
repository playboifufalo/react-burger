import React, { useState } from 'react';
import { CurrencyIcon, LockIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/Modal.jsx';
import './BurgerConstructor.css';

const BurgerConstructor = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const ingredients = [
    {
      _id: '60666c42cc7b410027a1a9b1',
      name: 'Краторная булка N-200i (верх)',
      type: 'bun-top',
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    },
    {
      _id: '60666c42cc7b410027a1a9b5',
      name: 'Говяжий метеорит (отбивная)',
      type: 'main',
      price: 3000,
      image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    },
    {
      _id: '60666c42cc7b410027a1a9b7',
      name: 'Соус Spicy-X',
      type: 'sauce',
      price: 90,
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    },
    {
      _id: '60666c42cc7b410027a1a9b6',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    },
    {
      _id: '60666c42cc7b410027a1a9b2',
      name: 'Краторная булка N-200i (низ)',
      type: 'bun-bottom',
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    },
  ];

  const totalPrice = ingredients.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="burger-constructor">
      <h2 className="burger-constructor__title">Ваш бургер</h2>
      <div className="burger-constructor__items">
        {ingredients.map((ingredient, index) => (
          <div key={ingredient._id} className={`constructor-ingredient ${ingredient.type}`}>
            <span className="constructor-ingredient__drag-icon">
              {ingredient.type.includes('bun') ? <LockIcon type="primary" /> : <DragIcon type="primary" />}
            </span>
            <img className="constructor-ingredient__image" src={ingredient.image} alt={ingredient.name} />
            <span className="constructor-ingredient__name">{ingredient.name}</span>
            <span className="constructor-ingredient__price">
              {ingredient.price}
              <CurrencyIcon type="primary" />
            </span>
          </div>
        ))}
      </div>
      <div className="burger-constructor__footer">
        <div className="burger-constructor__total">
          <span className="burger-constructor__total-text">Итого:</span>
          <span className="burger-constructor__total-price">
            {totalPrice}
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <button className="burger-constructor__order-button" onClick={handleOrder}>
          Оформить заказ
        </button>
      </div>
      {isOrderModalOpen && (
        <Modal onClose={closeOrderModal}>
          <div className="order-details">
            <h2>Ваш номер заказа</h2>
            <p className="order-number">123456</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;

/*..*/