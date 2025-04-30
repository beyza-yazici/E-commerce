import axiosInstance from '../../axiosInstance';

// redux/actions/orderActions.js
export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const fetchOrders = () => async (dispatch) => {
dispatch({ type: FETCH_ORDERS_REQUEST });

try {
const token = localStorage.getItem('token');
const response = await axiosInstance.get('/order', {
headers: {
'Authorization': token
}
});


dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ 
      type: FETCH_ORDERS_FAILURE, 
      payload: error.response?.data?.message || 'Siparişler yüklenirken bir hata oluştu'
    });
  }
};
