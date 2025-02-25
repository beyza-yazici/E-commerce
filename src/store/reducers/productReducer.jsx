import * as types from '../actions/actionTypes';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    fetchState: 'FETCHED', 
    limit: 25,
    offset: 0,
    filter: '',
    categoryId: null,
    sort: '',
    loading: false,
    error: null,
    
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case types.SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case types.SET_TOTAL:
            return { ...state, total: action.payload };
        case types.SET_FETCH_STATE:
            return { ...state, fetchState: action.payload };
        case types.SET_LIMIT:
            return { ...state, limit: action.payload };
        case types.SET_OFFSET:
            return { ...state, offset: action.payload };
        case types.SET_FILTER:
            return { ...state, filter: action.payload };
        case 'SET_CATEGORY_ID':
            return { ...state, categoryId: action.payload };
        case 'SET_SORT':
            return { ...state, sort: action.payload };
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, productList: action.payload, loading: false };
        case 'FETCH_PRODUCTS_START':
            return { ...state, loading: true };
        case 'FETCH_PRODUCTS_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}