import {
    FETCH_INGREDIENTS_REQUEST,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE,
  } from '../actions/ingredients-action';
  
  const initialState = {
    bun: null,
    ingredients: [],
    isLoading: false,
    error: null,
  };
  
  export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INGREDIENTS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case FETCH_INGREDIENTS_SUCCESS:
        return { ...state, isLoading: false, ingredients: action.payload || []
         };
      case FETCH_INGREDIENTS_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  