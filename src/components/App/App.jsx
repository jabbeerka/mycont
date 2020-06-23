import React from 'react';
import styles from './App.module.scss';
import Navigator from '../Nav';
import Header from '../Header';
import Profile from '../Pages/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from '../Pages/News';
import Musics from '../Pages/Musics';
import Settings from '../Pages/Settings';
import DialogsContainer from '../Pages/Dialogs/DialogsContainer';

let App = (props) =>  {
  return (
    <BrowserRouter>
    <div className={styles.body}>
      <Header />
      <Navigator 
      // state={props.state.navPage}
      />
      <Route 
      path="/profile" 
      render= {() => <Profile 
      // store={props.store} state={props.state.profilePage} dispatch={props.dispatch} header={props.state.headers}
      /> } />
      <Route path="/dialogs" render={() => <DialogsContainer 
      // store={props.store} dispatch={props.dispatch}
      />} />
      <Route path="/news" render={() => <News 
      // header={props.state.headers}
      />}/>
      <Route path="/musics" render={() => <Musics 
      // header={props.state.headers}
      />}/>
      <Route path="/settings" render={() => <Settings 
      // header={props.state.headers}
      />}/>
    </div>
    </BrowserRouter>
  )
}
export default App;
