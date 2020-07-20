import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>, document.getElementById('root')
);

