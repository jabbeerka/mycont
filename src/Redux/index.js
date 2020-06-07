const state = {

    profilePage: {
        postsArr : [
            { message: "Hello, Are you watch me ?", likes: 5},
            { message: "I'm start learning to React!", likes: 6}
        ]
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
            {name: 'Julia', id: 2, img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},
            {name: 'Miron', id: 3, img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"}
          ]
    }
}

export default state;