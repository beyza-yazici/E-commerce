// src/store/actions/cardActions.js
import axiosInstance from '../../axiosInstance';

export const fetchCards = () => async dispatch => {
  try {
    const response = await axiosInstance.get('/user/card');
    dispatch({ type: 'SET_CARDS', payload: response.data });
  } catch (error) {
    console.error('Error fetching cards:', error);
  }
};

export const addCard = (cardData) => async dispatch => {
  try {
    const response = await axiosInstance.post('/user/card', cardData);
    dispatch({ type: 'ADD_CARD', payload: response.data });
  } catch (error) {
    console.error('Error adding card:', error);
  }
};

export const updateCard = (cardData) => async dispatch => {
  try {
    const response = await axiosInstance.put('/user/card', cardData);
    dispatch({ type: 'UPDATE_CARD', payload: response.data });
  } catch (error) {
    console.error('Error updating card:', error);
  }
};

export const deleteCard = (cardId) => async dispatch => {
  try {
    await axiosInstance.delete(`/user/card/${cardId}`);
    dispatch({ type: 'DELETE_CARD', payload: cardId });
  } catch (error) {
    console.error('Error deleting card:', error);
  }
};