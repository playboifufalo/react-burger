import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from '../actions/actions'; 

const initialState = {
  orderNumber: 0,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
      case PLACE_ORDER_REQUEST:
          return {
              ...state,
              orderRequest: true,
              orderFailed: false,
          };
      case PLACE_ORDER_SUCCESS:
          return {
              ...state,
              orderRequest: false,
              orderFailed: false,
              orderNumber: action.payload,  
          };
      case PLACE_ORDER_FAILURE:
          return {
              ...state,
              orderRequest: false,
              orderFailed: true,
          };
      default:
          return state;
  }
};

