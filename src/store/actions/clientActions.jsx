import axiosInstance from '../../axiosInstance';
import * as types from './actionTypes';


// Regular action creators
export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
});

export const setRoles = (roles) => ({
    type: types.SET_ROLES,
    payload: roles
});

export const setTheme = (theme) => ({
    type: types.SET_THEME,
    payload: theme
});

export const setLanguage = (language) => ({
    type: types.SET_LANGUAGE,
    payload: language
});

// Thunk action creators
export const fetchRoles = () => async (dispatch, getState) => {
    const { roles } = getState().client;
    
    // Only fetch if roles are empty
    if (roles.length === 0) {
        try {
            const response = await axiosInstance.get('https://workintech-fe-ecommerce.onrender.com/roles');
            dispatch(setRoles(response.data));
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/login', {
            email: credentials.email,
            password: credentials.password
        });

        console.log('Login response:', response.data); // Debug için

        // API'den gelen user ve token bilgisini al
        const { token, user } = response.data;

        // Token'ı kaydet
        if (rememberMe) {
            localStorage.setItem('token', token);
        }

        // User bilgisini store'a kaydet
        dispatch(setUser(user));

        return { 
            success: true,
            user
        };

    } catch (error) {
        console.error('Login error:', error); // Debug için
        return { 
            success: false, 
            error: error.response?.data?.message || 'Login failed' 
        };
    }
};