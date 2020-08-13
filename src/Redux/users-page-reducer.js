import { profileAPI } from '../API/API';

const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      GET_USERS = "GET_USERS",
      SET_PAGE = "SET_PAGE",
      SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
      TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
      FOLLOW_IS_FETCHING = "FOLLOW_IS_FETCHING";


let initialState = {
    users : [],
    pageSize : 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case FOLLOW_IS_FETCHING:
            return {
                ...state,
                isFollowingProgress: action.isFollowingProgress ? [...state.isFollowingProgress, action.userId]
                : state.isFollowingProgress.filter(id => id !== action.userId)
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
                return {
                    ...state,
                    totalUsersCount : action.totalUsersCount
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
export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: GET_USERS, users});
export const setPage = (currentPage) => ({type: SET_PAGE, currentPage});
export const setTotalUsers = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowed = (isFollowingProgress, userId) => ({type: FOLLOW_IS_FETCHING, isFollowingProgress, userId})

export const requestUsers = (page, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPage(page));
        const response = await profileAPI.usersAPI(page, pageSize);
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsers(response.data.totalCount));
}

const followUnfollowAC = async (dispatch, userId, requestApi, dispatchResulte) => {
    dispatch(toggleIsFollowed(true, userId));
    const response = await requestApi(userId);
        if (response.data.resultCode === 0) {
                dispatch(dispatchResulte(userId));
            }
            dispatch(toggleIsFollowed(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowAC(dispatch, userId, profileAPI.followRequest.bind(profileAPI), followSucces);
}

export const unfollow = (userId) => (dispatch) => {
    followUnfollowAC(dispatch, userId, profileAPI.unfollowRequest.bind(profileAPI), unfollowSucces);
}

export default usersPageReducer;