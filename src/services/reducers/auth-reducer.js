import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, LOGOUT_SUCCESS } from '../actions/authActions';

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return { ...state, isLoading: true };
        case AUTH_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: true, user: action.user };
        case AUTH_FAILED:
            return { ...state, isLoading: false, error: action.error };
        case LOGOUT_SUCCESS:
            return { ...state, isAuthenticated: false, user: null };
        default:
            return state;
    }
};
