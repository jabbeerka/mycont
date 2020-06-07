import React from 'react';
import styles from './App.module.scss';
import Navigator from '../Nav';
import Header from '../Header';
import Profile from '../Pages/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Pages/Dialogs';
import News from '../Pages/News';
import Musics from '../Pages/Musics';
import Settings from '../Pages/Settings';

function App(props) {
  return (
    <BrowserRouter>
    <div className={styles.body}>
      <Header
      src="https://d.radikal.ru/d20/2006/92/33c0a53ae79b.png" />
      <Navigator state={props.state.navPage}/>
      <Route path="/profile" render= {() => <Profile state={props.state.profilePage}/> } />
      <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage}/>} />
      <Route path="/news" component= { News } />
      <Route path="/musics" component= { Musics } />
      <Route path="/settings" component= { Settings } />
    </div>
    </BrowserRouter>
  )
}

export default App;
