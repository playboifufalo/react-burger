export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
  export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
  export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';
  
  export const placeOrder = (orderData) => async (dispatch) => {
    dispatch({ type: PLACE_ORDER_REQUEST });
  
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
  
      const data = await response.json();
  
      dispatch({ type: PLACE_ORDER_SUCCESS, payload: data }); 
    } catch (error) {
      dispatch({ type: PLACE_ORDER_FAILURE, payload: 'Failed to place order' });
    }
  };
  