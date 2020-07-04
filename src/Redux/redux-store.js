import { createStore, combineReducers } from 'redux';
import profilePageReducer from './profile-page-reducer';
import dialogsPageReducer from './dialogs-page-reducer';
import navbarReducer from './navbar-reducer';
import headersReducer from './headers-reducer';
import usersPageReducer from './users-page-reducer';

let reducers = combineReducers({
    headers : headersReducer,
    profilePage: profilePageReducer,
    messagesPage: dialogsPageReducer,
    navPage: navbarReducer,
    usersPage: usersPageReducer
});

const store = createStore(reducers);

window.store = store;

export default store;