import React from 'react';
import data from '../../utils/data';
import styles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = () => {
    const filterIngredientsByType = (type) => {
        return data.filter(ingredient => ingredient.type === type);
    };

    const [current, setCurrent] = React.useState('one');

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
                        <div key={ingredient._id} className={styles.ingredient}>
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
                        <div key={ingredient._id} className={styles.ingredient}>
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
                        <div key={ingredient._id} className={styles.ingredient}>
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
        </div>
    );
};

export default BurgerIngredients;
