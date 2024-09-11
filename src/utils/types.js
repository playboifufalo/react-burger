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
    
});

export const ModalPropTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['order', 'ingredient']).isRequired,
};

export const IngredientDetailsType = {
    ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    }).isRequired,
};