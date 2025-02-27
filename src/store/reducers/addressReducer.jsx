const initialState = {
  addresses: [],
  loading: false,
  error: null
};

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ADDRESSES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_ADDRESSES_SUCCESS':
      return {
        ...state,
        loading: false,
        addresses: action.payload,
        error: null
      };
    case 'FETCH_ADDRESSES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id ? action.payload : address
        )
      };
    case 'DELETE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== action.payload)
      };
    default:
      return state;
  }
}