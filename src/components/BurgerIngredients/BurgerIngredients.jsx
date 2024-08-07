import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { data } from '../../utils/data';
import propTypes from '../../utils/prop-types.jsx';
import './BurgerIngredients.css';
import PropTypes from 'prop-types';
import Modal from '../modals/Modal.jsx';
import IngredientDetails from '../ingredientsDetails/IngredientDetails.jsx';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({ data }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIngredient(null);
    setIsModalOpen(false);
  };

  const scrollToSection = (type) => {
    const section = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderIngredients = () => {
    return data.map((ingredient) => (
      <div
        key={ingredient._id}
        className="burger-ingredients__item"
        onClick={() => openModal(ingredient)}
      >
        <img
          className="burger-ingredients__image"
          src={ingredient.image}
          alt={ingredient.name}
        />
        <div className="burger-ingredients__price">
          <span>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <div className="burger-ingredients__name">{ingredient.name}</div>
      </div>
    ));
  };

  return (
    <div className="burger-ingredients">
      <h1 className="burger-ingredients__title">Соберите бургер</h1>
      <div className="burger-ingredients__filters">
        <button
          className="burger-ingredients__filter"
          onClick={() => scrollToSection('bun')}
        >
          Булки
        </button>
        <button
          className="burger-ingredients__filter"
          onClick={() => scrollToSection('sauce')}
        >
          Соусы
        </button>
        <button
          className="burger-ingredients__filter"
          onClick={() => scrollToSection('main')}
        >
          Начинки
        </button>
      </div>
      <div className="burger-ingredients__items">
        {renderIngredients()}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
};


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default BurgerIngredients;

/*..*/