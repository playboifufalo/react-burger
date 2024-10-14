import { api } from '../../utils/api'; 
import { setCookie, deleteCookie } from '../../utils/cookie';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const registerUser = (email, password, name) => {
    return async (dispatch) => {
        dispatch({ type: AUTH_REQUEST });
        try {
            const res = await api.post('/auth/register', { email, password, name });
            const { accessToken, refreshToken, user } = res;
            setCookie('token', accessToken.split('Bearer ')[1]);
            localStorage.setItem('refreshToken', refreshToken);
            dispatch({ type: AUTH_SUCCESS, user });
        } catch (err) {
            dispatch({ type: AUTH_FAILED, error: err.message });
        }
    };
};

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: AUTH_REQUEST });
        try {
            const res = await api.post('/auth/login', { email, password });
            const { accessToken, refreshToken, user } = res;
            setCookie('token', accessToken.split('Bearer ')[1]);
            localStorage.setItem('refreshToken', refreshToken);
            dispatch({ type: AUTH_SUCCESS, user });
        } catch (err) {
            dispatch({ type: AUTH_FAILED, error: err.message });
        }
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            await api.post('/auth/logout', { token: refreshToken });
            deleteCookie('token');
            localStorage.removeItem('refreshToken');
            dispatch({ type: LOGOUT_SUCCESS });
        } catch (err) {
            console.error('Logout error:', err);
        }
    };
};
