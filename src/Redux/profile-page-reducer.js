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
            state.postsArr.push(newPost);
            state.inputArea = "";
            return state;
        case CHANGE_NEW_INPUT: 
            state.inputArea = action.text;
            return state;
        default:
            return state;

    
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewInputActionCreator = (text) => ({type: CHANGE_NEW_INPUT, text: text});
export default profilePageReducer;