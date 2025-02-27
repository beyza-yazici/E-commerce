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



export const fetchAddresses = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_ADDRESSES_REQUEST });
      try {
        const response = await axiosInstance.get('/user/address');
        dispatch({
          type: FETCH_ADDRESSES_SUCCESS,
          payload: response.data
        });
      } catch (error) {
        dispatch({
          type: FETCH_ADDRESSES_FAILURE,
          payload: error.message
        });
      }
    };
  };
  
  export const addAddress = (addressData) => {
    return async (dispatch) => {
      try {
        const response = await axiosInstance.post('/user/address', addressData);
        dispatch({
          type: 'ADD_ADDRESS_SUCCESS',
          payload: response.data
        });
        // Adresleri yeniden yükle
        dispatch(fetchAddresses());
        return response.data; // İşlem başarılı olduğunda veriyi döndür
      } catch (error) {
        console.error('Error adding address:', error);
        throw error; // Hata durumunda hatayı fırlat
      }
    };
  };
  
  // Güncellenen updateAddress action'ı
  export const updateAddress = (addressData) => {
    return async (dispatch) => {
      try {
        // PUT request'i /user/address endpoint'ine yapılıyor
        const response = await axiosInstance.put('/user/address', addressData);
        dispatch({
          type: UPDATE_ADDRESS_SUCCESS,
          payload: response.data
        });
      } catch (error) {
        console.error('Error updating address:', error);
      }
    };
  };
  
  // Güncellenen deleteAddress action'ı
  export const deleteAddress = (addressId) => {
    return async (dispatch) => {
      try {
        // DELETE request'i /user/address/:addressId endpoint'ine yapılıyor
        await axiosInstance.delete(`/user/address/${addressId}`);
        dispatch({
          type: DELETE_ADDRESS_SUCCESS,
          payload: addressId
        });
      } catch (error) {
        console.error('Error deleting address:', error);
      }
    };
  };