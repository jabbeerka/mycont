import React from 'react';
import styles from './App.module.scss';
import Navigator from '../Nav';
import Header from '../Header';
import Profile from '../Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Dialogs';


function App() {
  return (
    <BrowserRouter>
    <div className={styles.body}>
      <Header
      src="https://d.radikal.ru/d20/2006/92/33c0a53ae79b.png" />
      <Navigator />
      <Route path="/profile" component= { Profile } />
      <Route path="/dialogs" component= { Dialogs } />
    </div>
    </BrowserRouter>
  )
}

export default App;
