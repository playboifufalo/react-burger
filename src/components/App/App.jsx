import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor.jsx';
import { data } from '../../utils/data';

const App = () => {
  return (
    <div>
      <AppHeader />
      <BurgerIngredients data={data}/>
      <BurgerConstructor data={data}/>
    </div>
  );
};

export default App;

/*..*/