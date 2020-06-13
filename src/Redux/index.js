
let store = {
    _state : {
        headers: {
            imgs : [
                {bgimage: "https://b.radikal.ru/b15/2006/2f/ee55947d163e.png"},
                {bgimage: "https://c.radikal.ru/c40/2006/b5/e7923dcbd478.png"},
                {bgimage: "https://c.radikal.ru/c06/2006/63/d339270c3b95.png"},
                {bgimage: "https://d.radikal.ru/d01/2006/e6/fd502cf6e1c3.png"},
                {bgimage: "https://c.radikal.ru/c43/2006/9b/60affdea86c2.png"}
            ]
        },
        profilePage: {
            postsArr : [
                { id: 1, message: "Hello, Are you watch me ?", likes: 5},
                { id: 2, message: "I'm start learning to React!", likes: 6},
            ],
            inputArea: ""
                 
        },
        messagesPage : {
            namesArr: [
                {name: 'Eugeniy', id: 1}, 
                {name: 'Julia', id: 2}, 
                {name: 'Miron', id: 3}, 
                {name: 'Amir', id: 4}, 
                {name: 'Jahon', id: 5} 
            ],
            messagesArr : [
                {id: 1, message: "Hello, my Dear!"}, 
                {id: 2, message: "I like you!"}, 
                {id: 3, message: "What are you doing?"}, 
                {id: 4, message: "Whats Happened", }, 
                {id: 5, message: "Where is my daughter?"}
            ],
            inputMessageArea: ""
        },
        navPage: {
            links: [
                {link: '/profile', name: 'Profile'},
                {link:  '/dialogs',name: 'Dialogs'},
                {link: '/news', name: 'News'},
                {link: '/musics', name: 'Musics'},
                {link: '/settings', name: 'Settings'}
              ],
              friends: [
                {name: 'Jahon', id: 1, img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},
                {name: 'Julia', id: 2, img: "http://c.radikal.ru/c25/2006/42/9ddbb593e557.png"},
                {name: 'Miron', id: 3, img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"}
              ]
        }
    },
    getState() {
        return this._state;
    },
    renderEntireDom() {
        console.log("change observer")
    },
    subscribe(observer) {
        this._renderEntireDom = observer;
    },
    dispatch (action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: this._state.profilePage.inputArea,
                likes: 0
            }
            this._state.profilePage.postsArr.push(newPost);
            this._renderEntireDom(this._state);
            this._state.profilePage.inputArea = "";
        } else if (action.type === "CHANGE-NEW-INPUT") {
            this._state.profilePage.inputArea = action.text;
            this._renderEntireDom(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 7,
                message: this._state.messagesPage.inputMessageArea
            }
            this._state.messagesPage.messagesArr.push(newMessage);
            this._renderEntireDom(this._state);
            this._state.messagesPage.inputMessageArea = "";
        } else if (action.type === "CHANGE-MESSAGE-INPUT") {
            this._state.messagesPage.inputMessageArea = action.text;
            this._renderEntireDom(this._state);
        }
    },

}
const ADD_POST = "ADD-POST",
      CHANGE_NEW_INPUT = "CHANGE-NEW-INPUT",
      ADD_MESSAGE = "ADD-MESSAGE",
      CHANGE_MESSAGE_INPUT = "CHANGE-MESSAGE-INPUT";
export const addPostActionCreator = () => ({type: ADD_POST});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewInputActionCreator = (text) => ({type: CHANGE_NEW_INPUT, text: text});
export const changeMessageInputActionCreator = (text) => ({type: CHANGE_MESSAGE_INPUT, text: text});
export default store;