import React, {useState} from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import OrderDetails from '../order-details/order-details';
import ingredients from '../../utils/ingredready';

const BurgerConstructor = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const total = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

    const handleOrderButtonClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={styles.constructorContainer}>
            <div className={styles.constructor}>
                <div className={styles.ingredientsList}>
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.id} className={styles.ingredientItem}>
                            <div className={styles.dragIcon}>
                                {!ingredient.isLocked && <DragIcon type="primary" />}
                            </div>
                            <ConstructorElement
                                type={ingredient.type}
                                isLocked={ingredient.isLocked}
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </div>
                    ))}
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

export default BurgerConstructor;
