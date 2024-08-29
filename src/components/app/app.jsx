import React from 'react';
import './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import styles from './app.module.css';

function App() {
  return (
    <>
    <AppHeader />
    <div className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
    </>
  );
}

export default App;
