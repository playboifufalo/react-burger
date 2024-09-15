import React, { useState, useEffect } from 'react';
import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { fetchIngredients } from '../../services/actions/ingredients-action';
import PropTypes from 'prop-types';
import { IngredientType } from '../../utils/types';

const BurgerIngredients = () => {

    const dispatch = useDispatch();
    const { ingredients = [], isLoading, error } = useSelector((state) => state.ingredients);
    const [current, setCurrent] = useState('one');
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    const filterIngredientsByType = (type) => {
        return ingredients.filter(ingredient => ingredient.type === type);
    };
    
    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient); 
    };

    const handleCloseModal = () => {
        setSelectedIngredient(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.ingr_block}>
            <div>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
            </div>
            <div className={styles.ingr_filter}>
                <div className={styles.tabs}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </div>
            </div>
            <div className={styles.ingredient_position}>
            <section>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <div className={styles.ingredients}>
                        {filterIngredientsByType('bun').map((ingredient) => (
                            <IngredientCard key={ingredient._id} ingredient={ingredient} onClick={handleIngredientClick} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text text_type_main-medium">Соусы</h2>
                    <div className={styles.ingredients}>
                        {filterIngredientsByType('sauce').map((ingredient) => (
                            <IngredientCard key={ingredient._id} ingredient={ingredient} onClick={handleIngredientClick} />
                        ))}
                    </div>
                </section>
                <section className={styles.ingr_section}>
                    <h2 className="text text_type_main-medium">Начинки</h2>
                    <div className={styles.ingredients}>
                        {filterIngredientsByType('main').map((ingredient) => (
                            <IngredientCard key={ingredient._id} ingredient={ingredient} onClick={handleIngredientClick} />
                        ))}
                    </div>
                </section>
            </div>
            {selectedIngredient && (
                <Modal onClose={handleCloseModal} title="Детали ингредиента" type="ingredient">
                    <IngredientDetails ingredient={selectedIngredient} />
                </Modal>
            )}
        </div>
    );
};

const IngredientCard = ({ ingredient, onClick }) => {
    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { ingredient }
    });

    return (
        <div ref={dragRef} className={styles.ingredient} onClick={() => onClick(ingredient)}>
            <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
            <div className={styles.price_container}>
                <p className="text text_type_digits-default">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{ingredient.name}</p>
        </div>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientType), 
};

export default BurgerIngredients;
