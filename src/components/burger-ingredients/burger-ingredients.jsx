import React, { useState, useEffect, useRef } from 'react';
import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const { ingredients = [], isLoading, error } = useSelector((state) => state.ingredients);
    const [currentTab, setCurrent] = useState('bun');
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    const { ref: bunInViewRef, inView: bunInView } = useInView({ threshold: 0.2 });
    const { ref: sauceInViewRef, inView: sauceInView } = useInView({ threshold: 0.2 });
    const { ref: mainInViewRef, inView: mainInView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (bunInView) {
            setCurrent('bun');
        } else if (sauceInView) {
            setCurrent('sauce');
        } else if (mainInView) {
            setCurrent('main');
        }
    }, [bunInView, sauceInView, mainInView]);

    const filterIngredientsByType = (type) => {
        return ingredients.filter(ingredient => ingredient.type === type);
    };

    const scrollToSection = (section) => {
        setCurrent(section);
        if (section === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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
                    <Tab value="bun" active={currentTab === 'bun'} onClick={() => scrollToSection('bun')}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => scrollToSection('sauce')}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={() => scrollToSection('main')}>
                        Начинки
                    </Tab>
                </div>
            </div>
            <div className={styles.ingredient_position}>
                <section ref={bunRef} id="bun">
                    <h2 className="text text_type_main-medium" ref={bunInViewRef}>Булки</h2>
                    <div className={styles.ingredients}>
                        {filterIngredientsByType('bun').map((ingredient) => (
                            <IngredientCard key={ingredient._id} ingredient={ingredient} onClick={handleIngredientClick} />
                        ))}
                    </div>
                </section>
                <section ref={sauceRef} id="sauce">
                    <h2 className="text text_type_main-medium" ref={sauceInViewRef}>Соусы</h2>
                    <div className={styles.ingredients}>
                        {filterIngredientsByType('sauce').map((ingredient) => (
                            <IngredientCard key={ingredient._id} ingredient={ingredient} onClick={handleIngredientClick} />
                        ))}
                    </div>
                </section>
                <section ref={mainRef} id="main">
                    <h2 className="text text_type_main-medium" ref={mainInViewRef}>Начинки</h2>
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
        item: { ingredient },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const { ingredients, bun } = useSelector((state) => state.constructor);

    const ingredientCount = ingredients && Array.isArray(ingredients)
        ? ingredients.filter(item => item._id === ingredient._id).length
        : 0;
    const bunCount = bun && bun._id === ingredient._id ? 1 : 0;

    return (
        <div ref={dragRef} className={styles.ingredient} onClick={() => onClick(ingredient)}>
            <section className={styles.counter}>
                {ingredient.type === 'bun' && bunCount > 0 && <Counter count={bunCount} size="default" extraClass="m-1" />}
                {ingredient.type !== 'bun' && ingredientCount > 0 && <Counter count={ingredientCount} size="default" extraClass="m-1" />}
            </section>
            <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
            <div className={styles.price_container}>
                <p className="text text_type_digits-default">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{ingredient.name}</p>
        </div>
    );
};


export default BurgerIngredients;
