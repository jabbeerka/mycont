import './index.css';
import store from './Redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const renderEntireDom = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={store.addPost.bind(store)} 
        changeNewInput={store.changeNewInput.bind(store)}
        />, document.getElementById('root')
);
}
export default renderEntireDom;
renderEntireDom(store.getState());
store.subscribe(renderEntireDom);
    

