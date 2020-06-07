import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App/App';
import state from './Redux'

ReactDOM.render(<App state={state}
                 />, document.getElementById('root')
);
