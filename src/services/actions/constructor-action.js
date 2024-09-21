export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const MOVE_INGREDIENT_UP = 'MOVE_INGREDIENT_UP';
export const MOVE_INGREDIENT_DOWN = 'MOVE_INGREDIENT_DOWN';
export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';


export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR,
});

export const addIngredient = (ingredient) => {
  console.log('Adding ingredient', ingredient); 
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
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

export const FETCH_INGREDIENTS_REQUEST = 'FETCH_INGREDIENTS_REQUEST';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

export const fetchIngredients = () => async (dispatch) => {
  dispatch({ type: FETCH_INGREDIENTS_REQUEST });

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: 'Failed to load ingredients' });
  }
};
