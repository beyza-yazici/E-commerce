// src/store/actions/authActions.js
import axiosInstance from '../../axiosInstance';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT, VERIFY_TOKEN_FAILURE, VERIFY_TOKEN_START, VERIFY_TOKEN_SUCCESS } from './actionTypes';


export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    const { token, user } = response.data;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    dispatch({ 
      type: LOGIN_SUCCESS, 
      payload: { token, user } 
    });
    return response.data;
  } catch (error) {
    dispatch({ 
      type: LOGIN_FAILURE, 
      payload: error.response?.data?.message || 'Giriş başarısız' 
    });
    throw error;
  }
};

export const verifyToken = () => async (dispatch) => {
  dispatch({ type: VERIFY_TOKEN_START });
  
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch({ type: VERIFY_TOKEN_FAILURE });
    return;
  }

  try {
    const response = await axiosInstance.get('/auth/verify');
    const user = response.data;
    
    dispatch({
      type: VERIFY_TOKEN_SUCCESS,
      payload: { token, user }
    });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: VERIFY_TOKEN_FAILURE });
  }
};

export const checkAuthStatus = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');

  if (token && userStr) {
    try {
      const user = JSON.parse(userStr);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user }
      });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({ type: LOGOUT });
    }
  } else {
    dispatch({ type: LOGOUT });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};