// src/store/reducers/authReducer.js
import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT
  } from '../actions/authActions';
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_START:
        return {
          ...state,
          isLoading: true,
          error: null
        };
  
      case AUTH_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          isLoading: false,
          error: null
        };
  
      case AUTH_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: action.payload
        };
  
      case AUTH_LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: null
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;