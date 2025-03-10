// src/store/reducers/cardReducer.js
const initialState = {
    cards: [],
    loading: false,
    error: null
  };
  
  export default function cardReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_CARDS':
        return {
          ...state,
          cards: action.payload
        };
      case 'ADD_CARD':
        return {
          ...state,
          cards: [...state.cards, action.payload]
        };
      case 'UPDATE_CARD':
        return {
          ...state,
          cards: state.cards.map(card => 
            card.id === action.payload.id ? action.payload : card
          )
        };
      case 'DELETE_CARD':
        return {
          ...state,
          cards: state.cards.filter(card => card.id !== action.payload)
        };
      default:
        return state;
    }
  }