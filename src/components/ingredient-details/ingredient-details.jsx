import React from 'react';
import styles from './ingredient-details.module.css';
import propTypes from 'prop-types';
import { IngredientDetailsType } from '../../utils/types';

const IngredientDetails = ({ ingredient }) => {
    if (!ingredient) return null;

    return (
        <div className={styles.modal_overlay}>
        <div className={styles.ingredient_descr}>
            <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingr_img} />
            <h1 className="text text_type_main-medium">{ingredient.name}</h1>
            <div className={styles.nutrients}>  
                <div className={styles.nutrient}>
                    <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
                </div>
                <div className={styles.nutrient}>
                    <span className="text text_type_main-default text_color_inactive">Белки, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
                </div>
                <div className={styles.nutrient}>
                    <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
                </div>
                <div className={styles.nutrient}>
                    <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>
        </div>
    );
};

IngredientDetails.propTypes = {
    ...IngredientDetailsType, 
};


export default IngredientDetails;
