import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/appheader/AppHeader.jsx';
import BurgerIngredients from './components/burgeringredients/BurgerIngredients';
import BurgerConstructor from './components/burgerconstructor/BurgerConstructor';

function App() {
  return (
    <>
    <AppHeader />
    <div className="mainContainer">
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
    </>
  );
}

export default App;
