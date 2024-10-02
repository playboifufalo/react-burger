import { BASE_URL } from '../../utils/const';
import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
} from './actions';

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
