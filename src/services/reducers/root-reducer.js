import { combineReducers } from 'redux';
import { constructorReducer } from './constructor-reducer';
import { authReducer } from './login-reducer';
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './order-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  constructor: constructorReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
});

export default rootReducer;
