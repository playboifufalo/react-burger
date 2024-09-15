import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILURE,
  } from '../actions/order-actions';

const initialState = {
    orderNumber: 0, 
    isPlacingOrder: false,
    error: null,
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return { ...state, isPlacingOrder: true, error: null };
      case PLACE_ORDER_SUCCESS:
        return {
          ...state,
          isPlacingOrder: false,
          orderNumber: action.payload.order.number, 
        };
      case PLACE_ORDER_FAILURE:
        return { ...state, isPlacingOrder: false, error: action.payload };
      default:
        return state;
    }
  };
  