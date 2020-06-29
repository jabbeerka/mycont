import React from 'react';
import styles from './App.module.scss';
import NavContainer from '../Nav/NavContainer';
import Header from '../Header';
import ProfileContainer from '../Pages/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import NewsContainer from '../Pages/News/NewsContainer';
import MusicsContainer from '../Pages/Musics/MusicsContainer';
import SettingsContainer from '../Pages/Settings/SettingsContainer';
import DialogsContainer from '../Pages/Dialogs/DialogsContainer';

let App = () =>  {
  return (
    <BrowserRouter>
    <div className={styles.body}>
      <Header />
      <NavContainer/>
      <Route path="/profile" render= {() => <ProfileContainer /> } />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/news" render={() => <NewsContainer />} />
      <Route path="/musics" render={() => <MusicsContainer/>}/>
      <Route path="/settings" render={() => <SettingsContainer />} />
    </div>
    </BrowserRouter>
  )
}
export default App;
