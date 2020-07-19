const ADD_POST = "ADD_POST",
      CHANGE_NEW_INPUT = "CHANGE_NEW_INPUT",
      SET_USER_PROFILE = "SET_USER_PROFILE";



let initialState = {
    postsArr : [
        { id: 1, message: "Hello, Are you watch me ?", likes: 5},
        { id: 2, message: "I'm start learning to React!", likes: 6},
    ],
    inputArea: "",
    profile: null
         
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.inputArea,
                likes: 0
            }
            return {
                ...state,
                postsArr: [...state.postsArr, newPost],
                inputArea: ""
            }
        case CHANGE_NEW_INPUT: 
            return {
                ...state,
                inputArea: action.text
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}
export const addPost = () => ({type: ADD_POST});
export const changeNewInput = (text) => ({type: CHANGE_NEW_INPUT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export default profilePageReducer;