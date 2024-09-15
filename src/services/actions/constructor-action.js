export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';


export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});

export const addBun = (bun) => ({
  type: ADD_BUN,
  payload: bun,
});

export const removeIngredient = (index) => ({
  type: REMOVE_INGREDIENT,
  index,
});

export const moveIngredient = (ingredients) => ({
  type: MOVE_INGREDIENT,
  payload: ingredients,
});

export const FETCH_INGREDIENTS_REQUEST = 'FETCH_INGREDIENTS_REQUEST';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

export const fetchIngredients = () => async (dispatch) => {
  dispatch({ type: FETCH_INGREDIENTS_REQUEST });

  try {
    const response = await fetch('https://norma.nomoreparties.space/api/ingredients');
    const data = await response.json();
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: 'Failed to load ingredients' });
  }
};
