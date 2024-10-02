import {
  ADD_INGREDIENT,
  ADD_BUN,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_CONSTRUCTOR,
} from '../actions/actions';

const initialState = {
  bun: null,
  ingredients: [],
  isLoading: false,
  error: null,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return { ...state, bun: action.payload || null }; 
    case ADD_INGREDIENT:
      return { 
        ...state, 
        ingredients: Array.isArray(state.ingredients) 
          ? [...state.ingredients, action.payload] 
          : [action.payload] 
      };
      case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.uniqueId !== action.payload.uniqueId
        ),
      };
      case MOVE_INGREDIENT: {
        const { fromIndex, toIndex } = action.payload;
        const ingredients = [...state.ingredients];
      
       
        if (fromIndex < 0 || fromIndex >= ingredients.length || toIndex < 0 || toIndex >= ingredients.length) {
          return state; 
        }
      
        const [movedIngredient] = ingredients.splice(fromIndex, 1);  
        ingredients.splice(toIndex, 0, movedIngredient); 
      
        return { ...state, ingredients };
      }
      
    case RESET_CONSTRUCTOR:
      return {
        ...state,
        bun: null,
        ingredients: [], 
      };
    default:
      return state;
  }
};
