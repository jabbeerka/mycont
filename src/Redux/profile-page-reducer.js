import { profileAPI } from '../API/API';

const ADD_POST = "ADD_POST",
      SET_USER_PROFILE = "SET_USER_PROFILE",
      SET_USER_STATUS = "SET_USER_STATUS"



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
        default:
            return state;
    }
}
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (id) => (dispatch) => {
    let userId = id;
        profileAPI.getProfile(userId).then (data => {
                dispatch(setUserProfile(data));
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