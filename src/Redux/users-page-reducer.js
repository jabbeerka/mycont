const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      GETUSERS = "GET-USERS",
      SETPAGE = "SET-PAGE",
      SETTOTALUSERSCOUNT = "SET-TOTAL-USERS-COUNT"


let initialState = {
    users : [],
    imgs : [
        {avatar : "https://b.radikal.ru/b04/2006/ef/91815c2a1b59.png"}
    ],
    pageSize : 5,
    totalUsersCount: 0,
    currentPage: 1
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
                users: [...action.users]
            }
        case SETPAGE: 
            return {
                ...state,
                currentPage : action.currentPage
            }
        case SETTOTALUSERSCOUNT:
            if (action.totalUsersCount > 100 ){
                action.totalUsersCount = 99;
                return {
                    ...state, totalUsersCount: action.totalUsersCount
                }
            } else {
                return {
                    ...state,
                    totalUsersCount : action.totalUsersCount
                }
            }
            
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const getUsersAC = (users) => ({type: GETUSERS, users});
export const setPageAC = (currentPage) => ({type: SETPAGE, currentPage});
export const setTotalUsersAC = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, totalUsersCount});

export default usersPageReducer;