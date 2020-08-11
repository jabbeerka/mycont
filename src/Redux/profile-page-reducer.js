import { profileAPI } from '../API/API';

const ADD_POST = "ADD_POST",
      SET_USER_PROFILE = "SET_USER_PROFILE",
      SET_USER_STATUS = "SET_USER_STATUS",
      SET_PHOTO = "SET_PHOTO"



let initialState = {
    postsArr : [
        { id: 1, message: "Hello, Are you watch me ?", likes: 5},
        { id: 2, message: "I'm start learning to React!", likes: 6},
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
            profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_USER_STATUS, status})
export const setPhotoAC = (photos) => ({type: SET_PHOTO, photos})

export const getProfile = (id) => (dispatch) => {
    let userId = id;
        profileAPI.getProfile(userId).then (data => {
                dispatch(setUserProfile(data));
            })
}
export const setPhoto = (file) => (dispatch) => {
        profileAPI.sendPhoto(file).then (response => {
                dispatch(setPhotoAC(response.data.data.photos));
            })
}
export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
        .then (response => {
                dispatch(setStatus(response.data));
            })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then (response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}
export default profilePageReducer;