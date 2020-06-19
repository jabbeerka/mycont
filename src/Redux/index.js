import profilePageReducer from '../Redux/profile-page-reducer';
import dialogsPageReducer from '../Redux/dialogs-page-reducer';
import navbarReducer from '../Redux/navbar-reducer';

let store = {
    _state : {
        headers: {
            imgs : [
                {id: 1, bgimage: "https://b.radikal.ru/b15/2006/2f/ee55947d163e.png"},
                {id: 2, bgimage: "https://c.radikal.ru/c40/2006/b5/e7923dcbd478.png"},
                {id: 3, bgimage: "https://c.radikal.ru/c06/2006/63/d339270c3b95.png"},
                {id: 4, bgimage: "https://d.radikal.ru/d01/2006/e6/fd502cf6e1c3.png"},
                {id: 5, bgimage: "https://c.radikal.ru/c43/2006/9b/60affdea86c2.png"}
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
        },
        navPage: {
            links: [
                {id:1, link: '/profile', name: 'Profile'},
                {id:2, link:  '/dialogs',name: 'Dialogs'},
                {id:3, link: '/news', name: 'News'},
                {id:4, link: '/musics', name: 'Musics'},
                {id:5, link: '/settings', name: 'Settings'}
              ],
              friends: [
                {id: 1, name: 'Jahon', img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},
                {id: 2, name: 'Julia', img: "http://c.radikal.ru/c25/2006/42/9ddbb593e557.png"},
                {id: 3, name: 'Miron', img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"}
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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsPageReducer(this._state.messagesPage, action);
        this._state.navPage = navbarReducer(this._state.navPage, action);
        this._renderEntireDom(this._state);
    }
}
export default store;