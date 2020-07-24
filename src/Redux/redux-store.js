import { createStore, combineReducers, applyMiddleware } from 'redux';
import profilePageReducer from './profile-page-reducer';
import dialogsPageReducer from './dialogs-page-reducer';
import navbarReducer from './navbar-reducer';
import headersReducer from './headers-reducer';
import usersPageReducer from './users-page-reducer';
import authReducer from './auth-reducer';
import middleWarethunk from 'redux-thunk';

let reducers = combineReducers({
    headers : headersReducer,
    profilePage: profilePageReducer,
    messagesPage: dialogsPageReducer,
    navPage: navbarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(middleWarethunk));

window.store = store;

export default store;