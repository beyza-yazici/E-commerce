import * as types from './actionTypes';
import axiosInstance from '../../api/axiosInstance';

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

// Thunk action creator for roles
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