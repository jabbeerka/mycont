import React from 'react';
import styles from './App.module.scss';
import Navigator from '../Nav';
import Profile from '../Pages/Profile/';
import { BrowserRouter, Route } from 'react-router-dom';
import News from '../Pages/News/';
import Musics from '../Pages/Musics/';
import Settings from '../Pages/Settings/';
import Dialogs from '../Pages/Dialogs/';
import Users from '../Pages/Users/';
import Header from '../Header/';
import Login from '../Pages/Login';

let App = () =>  {
  return (
    <BrowserRouter>
    <div className={styles.body}>
      <Header />
      <Navigator/>
      <Route path="/profile/:userId?" render= {() => <Profile /> } />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/musics" render={() => <Musics />}/>
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <Users /> } />
      <Route path="/login" render={() => <Login /> } />
    </div>
    </BrowserRouter>
  )
}
export default App;
