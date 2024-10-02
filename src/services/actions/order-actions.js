import checkResponse from '../../utils/check-response';
import { BASE_URL } from '../../utils/const';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from '../actions/actions'; 

export const placeOrder = () => (dispatch) => {
  dispatch({ type: PLACE_ORDER_REQUEST });

  const randomOrderNumber = Math.floor(100000 + Math.random() * 900000); 


  setTimeout(() => {
      dispatch({ type: PLACE_ORDER_SUCCESS, payload: randomOrderNumber });
  }, 500);  
};

export const placeOrderFailure = (error) => ({
  type: PLACE_ORDER_FAILURE,
  payload: error,
});
