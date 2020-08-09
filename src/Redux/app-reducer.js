import {getAuthUserData} from '../Redux/auth-reducer'

const INITIALIZING_APP = "INITIALIZING_APP"

let initialState = {
    initializate: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_APP:
            return {
                ...state,
                initializate: true
            }
        default :
            return state;
    }
}
const initializingApp = () => ({type: INITIALIZING_APP});

export const initialized = () => async (dispatch) => {
    await Promise.all([dispatch(getAuthUserData())]);
        dispatch(initializingApp());
}

export default appReducer;