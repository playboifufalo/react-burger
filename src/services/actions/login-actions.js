import { BASE_URL } from '../../utils/const';
export const loginUser = (email, password) => async (dispatch) => {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'LOGIN_FAILURE', error: data.message });
    }
  };
  