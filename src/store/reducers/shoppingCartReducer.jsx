import * as types from '../actions/actionTypes';

const initialState = {
    cart: [{  count: 0, product: { id: ""}}],
    payment: {},
    address: {}
};

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CART:
            return { ...state, cart: action.payload };
        case types.SET_PAYMENT:
            return { ...state, payment: action.payload };
        case types.SET_ADDRESS:
            return { ...state, address: action.payload };
        default:
            return state;
    }
}