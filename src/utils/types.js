import React from "react";
import PropTypes from 'prop-types';

export const IngredientType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['order', 'ingredient']).isRequired,
});