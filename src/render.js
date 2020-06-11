import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { addPost, changeNewInput } from './Redux';

const renderEntireDom = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        changeNewInput={changeNewInput}
        />, document.getElementById('root')
);
}
export default renderEntireDom;