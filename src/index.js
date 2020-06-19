import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const renderEntireDom = (state) => {
    ReactDOM.render(<App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root')
);
}
renderEntireDom(store.getState());

store.subscribe(()=> {
    let state = store.getState();
    renderEntireDom(state);
})
    

