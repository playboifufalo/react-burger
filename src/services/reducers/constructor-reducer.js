import {
  ADD_INGREDIENT,
  ADD_BUN,
  REMOVE_INGREDIENT,
} from '../actions/constructor-action';

const initialState = {
  bun: null,
  ingredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return { ...state, bun: action.payload };
    case ADD_INGREDIENT:
      return { 
        ...state, 
        ingredients: Array.isArray(state.ingredients) ? [...state.ingredients, action.payload] : [action.payload] 
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: Array.isArray(state.ingredients) ? state.ingredients.filter((_, index) => index !== action.index) : []
      };
    default:
      return state;
  }
};
