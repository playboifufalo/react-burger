import {
  ADD_INGREDIENT,
  ADD_BUN,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_ORDER,
  RESET_CONSTRUCTOR,
} from '../actions/actions';

const initialState = {
  bun: null,
  ingredients: [],  // Пустой массив по умолчанию
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...(state.ingredients || []), action.payload],  // Проверка на null и undefined
      };
    case ADD_BUN:
      return {
        ...state,
        bun: action.payload,
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.uniqueId !== action.payload.uniqueId),
      };
    case MOVE_INGREDIENT:
      const updatedIngredients = [...(state.ingredients || [])];  // Проверка на null и undefined
      if (updatedIngredients.length > 0) {
        const [movedItem] = updatedIngredients.splice(action.payload.fromIndex, 1);
        updatedIngredients.splice(action.payload.toIndex, 0, movedItem);
      }
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case RESET_CONSTRUCTOR:
      return initialState;
    default:
      return state;
  }
};

