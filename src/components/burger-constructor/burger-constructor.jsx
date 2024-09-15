import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import { addIngredient, addBun, removeIngredient } from '../../services/actions/constructor-action';
import { placeOrder } from '../../services/actions/order-actions';

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const { bun, ingredients = [] } = useSelector((state) => state.constructor);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item) => {
            if (item.ingredient.type === 'bun') {
                dispatch(addBun(item.ingredient));
            } else {
                dispatch(addIngredient(item.ingredient));
            }
        }
    });

    const total = useMemo(() => {
        if (!Array.isArray(ingredients)) {
            console.error('Ingredients is not an array');
            return 0;
        }
        const ingredientsTotal = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
        return bun ? ingredientsTotal + bun.price * 2 : ingredientsTotal;
    }, [ingredients, bun]);

    const handleOrderButtonClick = () => {
        const orderData = {
            ingredients: ingredients.map(ingredient => ingredient._id), 
        };
        dispatch(placeOrder(orderData)); 
        setIsModalVisible(true); 
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };
    return (
        <div className={styles.constructorContainer} ref={dropRef}>
            <div className={styles.constructor}>
                <div className={styles.ingredientsList}>
                    {bun && (
                        <div className={styles.ingredientItem}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                        </div>
                    )}
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredientItem}>
                            <div className={styles.dragIcon}>
                                {!ingredient.isLocked && <DragIcon type="primary" />}
                            </div>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                                handleClose={() => dispatch(removeIngredient(index))}
                            />
                        </div>
                    ))}
                    {bun && (
                        <div className={styles.ingredientItem}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                        </div>
                    )}
                </div>
                <div className={styles.totalContainer}>
                    <div className={styles.price}>
                        <span>{total}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="medium" onClick={handleOrderButtonClick}>
                        Оформить заказ
                    </Button>
                </div>
            </div>

            {isModalVisible && (
                <Modal onClose={handleCloseModal} type="order">
                    <OrderDetails />
                </Modal>
            )}
        </div>
    );
};

BurgerConstructor.propTypes = {
};

export default BurgerConstructor;
