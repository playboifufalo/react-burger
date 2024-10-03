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
      case MOVE_INGREDIENT:
        case MOVE_INGREDIENT:
        console.log('Reducer: Moving ingredient from', action.payload.fromIndex, 'to', action.payload.toIndex);
        const updatedIngredients = [...state.ingredients];
        
        if (
            action.payload.fromIndex >= 0 &&
            action.payload.toIndex >= 0 &&
            action.payload.fromIndex < updatedIngredients.length &&
            action.payload.toIndex < updatedIngredients.length
        ) {
            const [movedIngredient] = updatedIngredients.splice(action.payload.fromIndex, 1);
            updatedIngredients.splice(action.payload.toIndex, 0, movedIngredient);
        } else {
            console.error('Invalid indices:', action.payload);
        }

        return {
            ...state,
            ingredients: updatedIngredients,
        };
      
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
