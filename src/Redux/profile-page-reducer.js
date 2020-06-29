const ADD_POST = "ADD-POST",
      CHANGE_NEW_INPUT = "CHANGE-NEW-INPUT";


let initialState = {
    postsArr : [
        { id: 1, message: "Hello, Are you watch me ?", likes: 5},
        { id: 2, message: "I'm start learning to React!", likes: 6},
    ],
    inputArea: ""
         
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
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewInputActionCreator = (text) => ({type: CHANGE_NEW_INPUT, text: text});
export default profilePageReducer;