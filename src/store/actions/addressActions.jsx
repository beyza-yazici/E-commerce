import axiosInstance from '../../axiosInstance';

// Action Types
export const FETCH_ADDRESSES_SUCCESS = 'FETCH_ADDRESSES_SUCCESS';
export const ADD_ADDRESS_SUCCESS = 'ADD_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const FETCH_ADDRESSES_REQUEST = 'FETCH_ADDRESSES_REQUEST';
export const FETCH_ADDRESSES_FAILURE = 'FETCH_ADDRESSES_FAILURE';
export const ADD_ADDRESS_REQUEST = 'ADD_ADDRESS_REQUEST';
export const ADD_ADDRESS_FAILURE = 'ADD_ADDRESS_FAILURE';



export const fetchAddresses = () => async dispatch => {
  dispatch({ type: 'FETCH_ADDRESSES_REQUEST' });
  
  try {
    const response = await axiosInstance.get('/user/address');
    dispatch({ type: 'FETCH_ADDRESSES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ 
      type: 'FETCH_ADDRESSES_FAILURE', 
      payload: error.message 
    });
    console.error('Error fetching addresses:', error);
  }
};

export const addAddress = (addressData) => async dispatch => {
  try {
    const response = await axiosInstance.post('/user/address', addressData);
    dispatch({ type: 'ADD_ADDRESS', payload: response.data });
    return response.data;
  } catch (error) {
    console.error('Error adding address:', error);
    throw error;
  }
};

export const updateAddress = (addressData) => async dispatch => {
  try {
    const response = await axiosInstance.put('/user/address', addressData);
    dispatch({ type: 'UPDATE_ADDRESS', payload: response.data });
    return response.data;
  } catch (error) {
    console.error('Error updating address:', error);
  }
};

export const deleteAddress = (addressId) => async dispatch => {
  try {
    await axiosInstance.delete(`/user/address/${addressId}`);
    dispatch({ type: 'DELETE_ADDRESS', payload: addressId });
  } catch (error) {
    console.error('Error deleting address:', error);
  }
};