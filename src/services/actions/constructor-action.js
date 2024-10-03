import { BASE_URL } from '../../utils/const';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_INGREDIENT,
  ADD_BUN,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_ORDER,
  RESET_CONSTRUCTOR,
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
} from './actions';

export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR,
});

export const addIngredient = (ingredient) => {
  console.log('Adding ingredient', ingredient); 
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...ingredient,
      uniqueId: uuidv4(),
    },
  };
};

export const addBun = (bun) => ({
  type: ADD_BUN,
  payload: bun,
});

export const removeIngredient = (uniqueId) => ({
  type: REMOVE_INGREDIENT,
  payload: { uniqueId },
});

export const moveIngredient = (fromIndex, toIndex) => ({
  type: MOVE_INGREDIENT,
  payload: { fromIndex, toIndex },
});



export const clearOrder = () => ({
  type: CLEAR_ORDER,
});
export const fetchIngredients = () => async (dispatch) => {
  dispatch({ type: FETCH_INGREDIENTS_REQUEST });

  try {
    const response = await fetch(`${BASE_URL}ingredients`);
    const data = await response.json();
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: 'Failed to load ingredients' });
  }
};
