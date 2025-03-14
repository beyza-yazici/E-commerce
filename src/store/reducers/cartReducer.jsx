// src/store/reducers/cartReducer.js
import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // Check if product already exists in cart
      const existingItemIndex = state.cart.findIndex(
        item => item.product.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If product exists, increase count
        return {
          ...state,
          cart: state.cart.map((item, index) => 
            index === existingItemIndex
              ? { ...item, count: item.count + 1 }
              : item
          )
        };
      }

      // If product doesn't exist, add new item
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            count: 1,
            checked: true,
            product: action.payload
          }
        ]
      };
    }

    case 'INCREMENT_PRODUCT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        )
      };

    case 'DECREMENT_PRODUCT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };

    case 'TOGGLE_PRODUCT_CHECK':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };

      case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalPrice: 0
      };

    default:
      return state;
  }
};

export default cartReducer;