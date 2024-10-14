const initialState = {
    isAuthenticated: false, 
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false,
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
