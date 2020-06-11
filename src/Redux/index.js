
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
            inputArea: "your message"
                 
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
                {message: "Hello, my Dear!", id: 1}, 
                {message: "I like you!", id: 2}, 
                {message: "What are you doing?", id: 3}, 
                {message: "Whats Happened", id: 4}, 
                {message: "Where is my daughter?", id: 5},
            ],
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
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.inputArea,
            likes: 0
        }
        this._state.profilePage.postsArr.push(newPost);
        this._renderEntireDom(this._state);
        this._state.profilePage.inputArea = "";
    },
    changeNewInput(text) {
        this._state.profilePage.inputArea = text;
        this._renderEntireDom(this._state);

    },
    subscribe(observer) {
        this._renderEntireDom = observer;
    },
    

}
export default store;