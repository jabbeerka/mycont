import { authRequestAPI, profileAPI } from '../API/API'

const SET_USER_DATA = "SET_USER_DATA",
      SIGN_IN_PROFILE = "SIGN_IN_PROFILE"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SIGN_IN_PROFILE:
            return {
                ...state,
                ...action.formData,
                isAuth:true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth} })
export const signInProfile = (email, password, rememberMe) => ({type: SIGN_IN_PROFILE, formData: {email, password, rememberMe}})

export const logined = () => (dispatch) => {
    authRequestAPI().then (data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}
export const userLogin = (formData) => (dispatch) => {
    let {email, password, rememberMe} = formData
    profileAPI.userLogin(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData())
        }
    })
}
export const userLogout = () => (dispatch) => {
    profileAPI.userLogout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(logined(null, null, null, false))
        }
    })
}

export default authReducer;