const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      GETUSERS = "GET-USERS";


let initialState = {
    users : [],
    imgs : [
        {header: "https://c.radikal.ru/c19/2006/4a/f7739286dd9d.png"},
        {avatar : "https://b.radikal.ru/b04/2006/ef/91815c2a1b59.png"}
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case GETUSERS: 
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const getUsersAC = (users) => ({type: GETUSERS, users});
export default usersPageReducer;