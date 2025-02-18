import * as types from '../actions/actionTypes';

const initialState = {
    user: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: 'light',
    language: 'en'
};

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            console.log('Setting user in reducer:', action.payload); // Debug için
            return { ...state, user: action.payload };
        case types.SET_ROLES:
            return { ...state, roles: action.payload };
        case types.SET_THEME:
            return { ...state, theme: action.payload };
        case types.SET_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
}




