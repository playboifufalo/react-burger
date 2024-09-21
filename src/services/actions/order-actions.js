import checkResponse from '../../utils/check-response';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';
export const BASE_URL = 'https://norma.nomoreparties.space/api/orders';
  
export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const response = await fetch('https://norma.nomoreparties.space/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    const result = await response.json();

    if (response.ok) {
      dispatch({
        type: 'ORDER_SUCCESS',
        payload: result,
      });
    } else {
      dispatch({
        type: 'ORDER_FAILED',
        payload: result.message,
      });
    }
  } catch (error) {
    dispatch({
      type: 'ORDER_FAILED',
      payload: 'Ошибка при оформлении заказа',
    });
  }
};