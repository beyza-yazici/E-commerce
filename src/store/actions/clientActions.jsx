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
            const response = await axiosInstance.get('/roles');
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

        const { token, user } = response.data;

        // Token'ı kaydet (rememberMe true ise)
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
        console.error('Login error:', error);
        return { 
            success: false, 
            error: error.response?.data?.message || 'Giriş başarısız' 
        };
    }
};

// Kullanıcı durumunu kontrol etmek için yeni bir action
export const checkAuthStatus = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await axiosInstance.get('/verify');
            dispatch(setUser(response.data));
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            localStorage.removeItem('token');
            dispatch(setUser(null));
        }
    }
};


// Logout action'ı
export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setUser(null));
};