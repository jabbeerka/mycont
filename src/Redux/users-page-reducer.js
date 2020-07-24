const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      GET_USERS = "GET_USERS",
      SET_PAGE = "SET_PAGE",
      SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
      TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
    users : [],
    imgs : [
        {avatar : "https://b.radikal.ru/b04/2006/ef/91815c2a1b59.png"}
    ],
    pageSize : 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case GET_USERS: 
            return {
                ...state,
                users: [...action.users]
            }
        case SET_PAGE: 
            return {
                ...state,
                currentPage : action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            if (action.totalUsersCount > 100 ){
                action.totalUsersCount = 100;
                return {
                    ...state, totalUsersCount: action.totalUsersCount
                }
            } else {
                return {
                    ...state,
                    totalUsersCount : action.totalUsersCount
                }
            }
        case TOGGLE_IS_FETCHING: 
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
export const getUsers = (users) => ({type: GET_USERS, users});
export const setPage = (currentPage) => ({type: SET_PAGE, currentPage});
export const setTotalUsers = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersPageReducer;