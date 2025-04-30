// src/store/reducers/authReducer.js

import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT, VERIFY_TOKEN_FAILURE, VERIFY_TOKEN_START, VERIFY_TOKEN_SUCCESS } from "../actions/actionTypes";


const initialState = {
  user: null,
  token: null,
  loading: false,
  isLoading: true,
  error: null,
  isAuthenticated: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false,
        error: action.payload
      };
    case VERIFY_TOKEN_START:
      return {
        ...state,
        isLoading: true
      };
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case VERIFY_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      };
    case LOGOUT:
      return {
        ...initialState,
        isLoading: false
      };
    default:
      return state;
  }
}