const ADD_MESSAGE = "ADD-MESSAGE",
      CHANGE_MESSAGE_INPUT = "CHANGE-MESSAGE-INPUT";

let initialState = {
    namesArr: [
        {id: 1, name: 'Eugeniy'}, 
        {id: 2, name: 'Julia'}, 
        {id: 3, name: 'Miron'}, 
        {id: 4, name: 'Amir'}, 
        {id: 5, name: 'Jahon'} 
    ],
    messagesArr : [
        {id: 1, message: "Hello, my Dear!"}, 
        {id: 2, message: "I like you!"}, 
        {id: 3, message: "What are you doing?"}, 
        {id: 4, message: "Whats Happened", }, 
        {id: 5, message: "Where is my daughter?"}
    ],
    inputMessageArea: ""
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.inputMessageArea
            }
            return {
                ...state,
                inputMessageArea: "",
                messagesArr: [...state.messagesArr, newMessage]
            }
        case CHANGE_MESSAGE_INPUT:
            return {
                ...state,
                inputMessageArea: action.text
            }
        default :
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageInputActionCreator = (text) => ({type: CHANGE_MESSAGE_INPUT, text: text});
export default dialogsPageReducer;