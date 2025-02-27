import { ADD_ADDRESS_SUCCESS, DELETE_ADDRESS_SUCCESS, FETCH_ADDRESSES_FAILURE, FETCH_ADDRESSES_REQUEST, FETCH_ADDRESSES_SUCCESS, UPDATE_ADDRESS_SUCCESS } from "../actions/addressActions";

  const initialState = {
    addresses: [],
    loading: false,
    error: null
  };
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ADDRESSES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ADDRESSES_SUCCESS:
        return {
          ...state,
          loading: false,
          addresses: action.payload,
          error: null
        };
  
      case FETCH_ADDRESSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      case ADD_ADDRESS_SUCCESS:
        return {
          ...state,
          addresses: [...state.addresses, action.payload],
          loading: false,
            error: null
        };
  
      case UPDATE_ADDRESS_SUCCESS:
        return {
          ...state,
          addresses: state.addresses.map(address =>
            address.id === action.payload.id ? action.payload : address
          ),
          loading: false,
        error: null
        };
  
      case DELETE_ADDRESS_SUCCESS:
        return {
          ...state,
          addresses: state.addresses.filter(address => address.id !== action.payload),
          loading: false,
        error: null
        };
  
      default:
        return state;
    }
  };
  
  export default addressReducer;