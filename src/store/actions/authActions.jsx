// src/store/actions/authActions.js
import axiosInstance from '../../axiosInstance';

// Action Types
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Action Creators
export const authStart = () => ({
  type: AUTH_START
});

export const authSuccess = (userData) => ({
  type: AUTH_SUCCESS,
  payload: userData
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  payload: error
});

export const authLogout = () => {
  localStorage.removeItem('token');
  delete axiosInstance.defaults.headers.Authorization;
  return { type: AUTH_LOGOUT };
};

// Login action
export const login = (credentials, rememberMe) => async (dispatch) => {
  dispatch(authStart());

  try {
    const response = await axiosInstance.post('/login', credentials);
    const { token, ...userData } = response.data;

    if (rememberMe) {
      localStorage.setItem('token', token);
    }

    axiosInstance.defaults.headers.Authorization = token;
    dispatch(authSuccess(userData));
    return { success: true };
  } catch (error) {
    dispatch(authFail(error.response?.data?.message || 'Login failed'));
    return { 
      success: false, 
      error: error.response?.data?.message || 'Login failed'
    };
  }
};

// Verify token
export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    dispatch(authFail(null));
    return;
  }

  dispatch(authStart());
  axiosInstance.defaults.headers.Authorization = token;

  try {
    const response = await axiosInstance.get('/verify');
    dispatch(authSuccess(response.data));
    
    // Token yenilenirse güncelle
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      axiosInstance.defaults.headers.Authorization = response.data.token;
    }
  } catch (error) {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.Authorization;
    dispatch(authFail(error.response?.data?.message));
  }
};

// Logout action
export const logout = () => (dispatch) => {
  dispatch(authLogout());
};