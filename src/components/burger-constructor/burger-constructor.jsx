import React, { useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-constructor.module.css';
import { useDrop, useDrag } from 'react-dnd';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import OrderDetails from '../order-details/order-details';
import { addIngredient, addBun, removeIngredient, resetConstructor, moveIngredient } from '../../services/actions/constructor-action';
import { placeOrder } from '../../services/actions/order-actions'; 

const IngredientItem = ({ ingredient, index, moveIngredient, onRemoveIngredient }) => {
    const ref = useRef(null);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingredient',
        item: { index }, 
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        hover: (draggedItem) => {
            if (draggedItem && draggedItem.index !== undefined) {
                if (draggedItem.index !== index) {
                    moveIngredient(draggedItem.index, index);
                    draggedItem.index = index;
                }
            } else {
                console.error('Dragged item is missing or incorrect:', draggedItem);
            }
        },
    });
    

    dragRef(dropRef(ref)); 
    return (
        <div ref={ref} className={styles.ingredientItem} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div className={styles.dragIcon}>
                {!ingredient.isLocked && <DragIcon type="primary" />}
            </div>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => onRemoveIngredient(ingredient.uniqueId)}
            />
        </div>
    );
};

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const { bun, ingredients = [] } = useSelector((state) => state.constructor);    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { orderNumber } = useSelector((state) => state.order);

    const isOrderButtonDisabled = ingredients.length === 0 && !bun;

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item) => {
            if (item && item.ingredient) {
                const { ingredient } = item;
                if (ingredient.type === 'bun') {
                    dispatch(addBun(ingredient));
                } else {
                    dispatch(addIngredient(ingredient));
                }
            } else {
                console.error('Ingredient data is missing or incorrect:', item);
            }
        },
    });

    const moveIngredientHandler = (fromIndex, toIndex) => {
        if (fromIndex === toIndex) return;
        dispatch(moveIngredient(fromIndex, toIndex));
    };

    const removeIngredientHandler = (uniqueId) => {
        dispatch(removeIngredient(uniqueId));
    };

    const total = useMemo(() => {
        if (!Array.isArray(ingredients)) {
            console.error('Ingredients is not an array');
            return 0;
        }
        const ingredientsTotal = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
        return bun ? ingredientsTotal + bun.price * 2 : ingredientsTotal;
    }, [ingredients, bun]);

    const handleOrderButtonClick = () => {
        if (!bun || !ingredients.length) return;
        const orderData = {
            ingredients: [
                bun._id,
                ...ingredients.map(ingredient => ingredient._id),
                bun._id,
            ],
        };
        dispatch(placeOrder(orderData));
        setIsModalVisible(true);
        dispatch(resetConstructor());
    };

      const handleCloseModal = () => {
        setIsModalVisible(false);
        dispatch(resetConstructor()); 
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
                    {ingredients.map((ingredient) => (
                        <IngredientItem
                            key={ingredient._id}
                            ingredient={ingredient}
                            moveIngredient={moveIngredientHandler}
                            onRemoveIngredient={removeIngredientHandler}
                        />
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
                    <Button
                        htmlType="button"
                        type="primary"
                        size="medium"
                        onClick={handleOrderButtonClick}
                        disabled={isOrderButtonDisabled}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>

            {isModalVisible && (
                <Modal onClose={handleCloseModal} type="order">
                    <OrderDetails orderNumber={orderNumber}/>
                </Modal>
            )}
        </div>
    );
};

export default BurgerConstructor;
