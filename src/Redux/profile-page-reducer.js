import { profileAPI } from '../API/API';
import { stopSubmit } from 'redux-form';


const ADD_POST = "ADD_POST",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_USER_STATUS = "SET_USER_STATUS",
    SET_PHOTO = "SET_PHOTO",
    SAVE_PROFILE_INFO = "SAVE_PROFILE_INFO"



let initialState = {
    postsArr: [
        { id: 1, message: "Hello, Are you watch me ?", likes: 5 },
        { id: 2, message: "I'm start learning to React!", likes: 6 },
    ],
    inputArea: "",
    profile: null,
    status: ""

}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.post,
                likes: 0
            }
            return {
                ...state,
                postsArr: [...state.postsArr, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        case SAVE_PROFILE_INFO:
            return {
                ...state,
                profile: { ...state.profile, ...action.formData, ...action.formData.contacts }
            }
        default:
            return state;
    }
}
export const addPost = (post) => ({ type: ADD_POST, post });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setPhotoAC = (photos) => ({ type: SET_PHOTO, photos });
export const setProfileInfo = (formData) => ({ type: SAVE_PROFILE_INFO, formData });

export const getProfile = (id) => async (dispatch) => {
    const userId = id,
        response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const setPhoto = (file) => async (dispatch) => {
    const response = await profileAPI.sendPhoto(file);
    dispatch(setPhotoAC(response.data.data.photos));
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const saveProfileInfo = (formData) => async (dispatch) => {
    const response = await profileAPI.updateProfile(formData);
    if (response.data.resultCode === 0) {
        dispatch(setProfileInfo(formData));
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("edit-profile", { _error: errorMessage }));
        return Promise.reject(response.data.messages[0])
    }
}

export default profilePageReducer;