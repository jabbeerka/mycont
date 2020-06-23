import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import { Provider } from 'react-redux';
import storeContext from './Redux/store-context';


const renderEntireDom = (state) => {
    ReactDOM.render(
        <storeContext.Provider value={store} >
        {/* <Provider value={store}> */}
    <App
        // store={store}
        // state={state} 
        // dispatch={store.dispatch.bind(store)}
        /></storeContext.Provider>
        , document.getElementById('root')
);
}
renderEntireDom(store.getState());

store.subscribe(()=> {
    let state = store.getState();
    renderEntireDom(state);
})
    

