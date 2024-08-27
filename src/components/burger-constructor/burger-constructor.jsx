import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {
    const ingredients = [
        {
            id: 1,
            name: 'Краторная булка N-200i (верх)',
            price: 200,
            image: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            type: 'top',
            isLocked: true
        },
        {
            id: 2,
            name: 'Соус традиционный галактический',
            price: 50,
            image: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png"
        },
        {
            id: 3,
            name: 'Мясо бессмертных моллюсков Protostomia',
            price: 300,
            image: "https://code.s3.yandex.net/react/code/meat-02-mobile.png"
        },
        {
            id: 8,
            name: 'Краторная булка N-200i (низ)',
            price: 200,
            image: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            type: 'bottom',
            isLocked: true
        }
    ];

    const total = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

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
                    <Button htmlType="button" type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BurgerConstructor;
