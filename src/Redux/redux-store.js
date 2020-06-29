import { createStore, combineReducers } from 'redux';
import profilePageReducer from './profile-page-reducer';
import dialogsPageReducer from './dialogs-page-reducer';
import navbarReducer from './navbar-reducer';
import headersReducer from './headers-reducer';

let reducers = combineReducers({
    headers : headersReducer,
    profilePage: profilePageReducer,
    messagesPage: dialogsPageReducer,
    navPage: navbarReducer
});

const store = createStore(reducers);

window.store = store;

export default store;