import { FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS } from "../actions/orderActions";

// redux/reducers/orderReducer.js
const initialState = {
    orders: [],
    loading: false,
    error: null
    };
    
    export const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_ORDERS_REQUEST:
              return {
                ...state,
                loading: true,
                error: null
              };
            case FETCH_ORDERS_SUCCESS:
              return {
                ...state,
                loading: false,
                orders: action.payload,
                error: null
              };
            case FETCH_ORDERS_FAILURE:
              return {
                ...state,
                loading: false,
                error: action.payload
              };
            default:
              return state;
          }
        };