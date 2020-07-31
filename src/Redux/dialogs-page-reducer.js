const ADD_MESSAGE = "ADD_MESSAGE";

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
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.message
            }
            return {
                ...state,
                messagesArr: [...state.messagesArr, newMessage]
            }
        default :
            return state;
    }
}
export const addMessage = (message) => ({type: ADD_MESSAGE, message});
export default dialogsPageReducer;