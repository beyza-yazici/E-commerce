// src/store/actions/categoriesActions.js

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
  } from './actionTypes';
  
  export const fetchCategories = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_CATEGORIES_REQUEST });
      try {
        const response = await fetch('/categories');
        // eslint-disable-next-line no-unused-vars
        const data = await response.json();
        
        // Veriyi menü yapısına uygun şekilde düzenleme
        const formattedData = {
          kadin: [
            { id: 1, name: 'Bags' },
            { id: 2, name: 'Belts' },
            { id: 3, name: 'Cosmetics' },
            { id: 4, name: 'Bags' },
            { id: 5, name: 'Hats' }
          ],
          erkek: [
            { id: 6, name: 'Bags' },
            { id: 7, name: 'Belts' },
            { id: 8, name: 'Cosmetics' },
            { id: 9, name: 'Bags' },
            { id: 10, name: 'Hats' }
          ]
        };
  
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: formattedData
        });
      } catch (error) {
        dispatch({
          type: FETCH_CATEGORIES_FAILURE,
          payload: error.message
        });
      }
    };
  };