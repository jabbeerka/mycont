import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profilePageReducer from './profile-page-reducer';
import dialogsPageReducer from './dialogs-page-reducer';
import navbarReducer from './navbar-reducer';
import headersReducer from './headers-reducer';
import usersPageReducer from './users-page-reducer';
import authReducer from './auth-reducer';
import middleWarethunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
    headers : headersReducer,
    profilePage: profilePageReducer,
    messagesPage: dialogsPageReducer,
    navPage: navbarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleWarethunk)
  ));


window.store = store;

export default store;