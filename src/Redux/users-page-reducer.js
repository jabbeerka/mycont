const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      GETUSERS = "GET-USERS",
      SETPAGE = "SET-PAGE",
      SETTOTALUSERSCOUNT = "SET-TOTAL-USERS-COUNT",
      TOGGLEISFETCHING = "TOGGLE-IS-FETCHING"


let initialState = {
    users : [],
    imgs : [
        {avatar : "https://b.radikal.ru/b04/2006/ef/91815c2a1b59.png"}
    ],
    pageSize : 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case TOGGLEISFETCHING: 
            return {
                ...state,
                isFetching : action.isFetching
            }
            
        default:
            return state;
    }
}
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const getUsers = (users) => ({type: GETUSERS, users});
export const setPage = (currentPage) => ({type: SETPAGE, currentPage});
export const setTotalUsers = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLEISFETCHING, isFetching});


export default usersPageReducer;