import React from 'react';
import PropTypes from 'prop-types';

const IngredientDetails = ({ ingredient }) => {
  if (!ingredient) return null;

  return (
    <div>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h2>{ingredient.name}</h2>
      <p>Протеины: {ingredient.proteins}</p>
      <p>Жиры: {ingredient.fat}</p>
      <p>Углеводы: {ingredient.carbohydrates}</p>
      <p>Калории: {ingredient.calories}</p>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default IngredientDetails;

/*..*/