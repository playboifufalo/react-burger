const initialState = {
  user: null,
  accessToken: '',
  refreshToken: '',
  error: null,
  isAuthenticated: false, 
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true, 
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.error, isAuthenticated: false };
    case 'LOGOUT':
      return { ...initialState }; 
    default:
      return state;
  }
};
