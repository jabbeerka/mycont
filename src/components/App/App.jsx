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
import { initialized } from '../../Redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from '../../elements/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initialized();
  }
  render() {
      if (!this.props.initializate) {
        return <Preloader/>
      }
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
  
}
const mapStateToProps = (state) => ({
  initializate: state.app.initializate
})

export default connect(mapStateToProps, {initialized})(App);
