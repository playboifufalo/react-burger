import React, { useState, useEffect } from 'react';
import data from '../../utils/data';
import styles from './burger-ingredients.module.css';
import ReactDOM from 'react-dom';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import ModalOverlay from '../modals/modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

const BurgerIngredients = () => {
    const filterIngredientsByType = (type) => {
        return data.filter(ingredient => ingredient.type === type);
    };

    const [current, setCurrent] = React.useState('one');
    const [selectedIngredient, setSelectedIngredient] = useState(null); 
    const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);
    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient); 
    };

    const handleCloseModal = () => {
        setSelectedIngredient(null);
        setOrderDetailsVisible(false); 
    };

    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);

    return (
        <div className={styles.ingr_block}>
            <div>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
            </div>
            <div className={styles.ingr_filter}>
                <div style={{ display: 'flex' }}>
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
            <section className={styles.ingr_section}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <div className={styles.ingredients}>
                    {filterIngredientsByType('bun').map((ingredient) => (
                        <div key={ingredient._id} className={styles.ingredient} onClick={() => handleIngredientClick(ingredient)}>
                            <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
                            <div className={styles.price_container}>
                                <span className={styles.ingredient_price}>{ingredient.price}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <span className={styles.ingredient_name}>{ingredient.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.ingr_section}>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <div className={styles.ingredients}>
                    {filterIngredientsByType('sauce').map((ingredient) => (
                        <div key={ingredient._id} className={styles.ingredient} onClick={() => handleIngredientClick(ingredient)}>
                            <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
                            <div className={styles.price_container}>
                                <span className={styles.ingredient_price}>{ingredient.price}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <span className={styles.ingredient_name}>{ingredient.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.ingr_section}>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <div className={styles.ingredients}>
                    {filterIngredientsByType('main').map((ingredient) => (
                        <div key={ingredient._id} className={styles.ingredient} onClick={() => handleIngredientClick(ingredient)}>
                            <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
                            <div className={styles.price_container}>
                                <span className={styles.ingredient_price}>{ingredient.price}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <span className={styles.ingredient_name}>{ingredient.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            </div>
            {selectedIngredient && (
                <Modal onClose={handleCloseModal} title="Детали ингредиента">
                    <IngredientDetails ingredient={selectedIngredient} />
                </Modal>
            )}
        </div>
    );
};

export default BurgerIngredients;
