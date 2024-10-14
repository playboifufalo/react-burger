import { api } from '../../utils/const';
import { getCookie } from '../../utils/cookies';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';


export const getUserData = () => {
    return async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST });

        try {
            const token = getCookie('token'); 
            const res = await api.get('/auth/user', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: GET_USER_SUCCESS, user: res.user });
        } catch (err) {
            dispatch({ type: GET_USER_FAILED, error: err.message });
        }
    };
};

export const updateUserData = (name, email, password) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_USER_REQUEST });

        try {
            const token = getCookie('token'); 
            const res = await api.patch('/auth/user', {
                name,
                email,
                password,
            }, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: UPDATE_USER_SUCCESS, user: res.user });
        } catch (err) {
            dispatch({ type: UPDATE_USER_FAILED, error: err.message });
        }
    };
};
