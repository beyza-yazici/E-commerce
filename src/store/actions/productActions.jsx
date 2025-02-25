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

export const setCategoryId = (categoryId) => ({
    type: types.SET_CATEGORY_ID,
    payload: categoryId
});

export const setSort = (sort) => ({
    type: types.SET_SORT,
    payload: sort
});

export const setCurrentProduct = (product) => ({
    type: types.SET_CURRENT_PRODUCT,
    payload: product
});

export const fetchProducts = (params) => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));

        try {
            let url = 'https://workintech-fe-ecommerce.onrender.com/products?';
            if (params?.categoryId) url += `category=${params.categoryId}&`;
            if (params?.filter) url += `filter=${params.filter}&`;
            if (params?.sort) url += `sort=${params.sort}&`;
            if (params?.limit) url += `limit=${params.limit}&`;
            if (params?.offset) url += `offset=${params.offset}`;

            const response = await fetch(url);
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

export const fetchProductDetail = (productId) => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));
        try {
            const response = await fetch(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
            if (!response.ok) {
                throw new Error('Product fetch failed');
            }
            const data = await response.json();
            dispatch(setCurrentProduct(data));
            dispatch(setFetchState('FETCHED'));
        } catch (error) {
            console.error('Error fetching product:', error);
            dispatch(setFetchState('ERROR'));
        }
    };
};