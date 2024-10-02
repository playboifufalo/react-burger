import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { constructorReducer } from './constructor-reducer';
import { orderReducer } from './order-reducer';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  order: orderReducer,
});
