import { authRequestAPI, profileAPI, securityCaptcha } from '../API/API'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA",
      GET_CAPTCHA_URL = "GET_CAPTCHA_URL";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const setCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_URL, data: { captchaUrl } });

export const getAuthUserData = () => async (dispatch) => {
    const response = await authRequestAPI();
    if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const userLogin = ( email, password, rememberMe, captcha ) => async (dispatch) => {
    const response = await profileAPI.userLogin(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch(stopSubmit("login", { _error: response.data.messages[0]}));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityCaptcha.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}
export const userLogout = () => async (dispatch) => {
    const response = await profileAPI.userLogout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;