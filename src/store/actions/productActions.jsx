import * as types from './actionTypes';


export const setCategories = (categories) => ({
    type: types.SET_CATEGORIES,
    payload: categories
});

export const setProductList = (products) => ({
    type: types.SET_PRODUCT_LIST,
    payload: products
});

export const setTotal = (total) => ({
    type: types.SET_TOTAL,
    payload: total
});

export const setFetchState = (state) => ({
    type: types.SET_FETCH_STATE,
    payload: state
});

export const setLimit = (limit) => ({
    type: types.SET_LIMIT,
    payload: limit
});

export const setOffset = (offset) => ({
    type: types.SET_OFFSET,
    payload: offset
});

export const setFilter = (filter) => ({
    type: types.SET_FILTER,
    payload: filter
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));

        try {
            const response = await fetch('/products');
            const data = await response.json();
            
            dispatch(setProductList(data.products));
            dispatch(setTotal(data.total));
            dispatch(setFetchState('FETCHED'));
        } catch (error) {
            dispatch(setFetchState('ERROR'));
            console.error('Error fetching products:', error);
        }
    };
};
