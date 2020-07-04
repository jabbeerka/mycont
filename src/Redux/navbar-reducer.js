let initialState = {
    links: [
        {id:1, link: '/profile', name: 'Profile'},
        {id:2, link:  '/dialogs',name: 'Dialogs'},
        {id:3, link: '/news', name: 'News'},
        {id:4, link: '/musics', name: 'Musics'},
        {id:5, link: '/settings', name: 'Settings'},
        {id:6, link: '/users', name: 'Users'}
      ],
      friends: [
        {id: 1, name: 'Jahon', img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},
        {id: 2, name: 'Julia', img: "http://c.radikal.ru/c25/2006/42/9ddbb593e557.png"},
        {id: 3, name: 'Miron', img: "https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"}
      ]
}

const navbarReducer = (state = initialState, action) => {
  return {...state}
}
export default navbarReducer;