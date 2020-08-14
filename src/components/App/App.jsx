import React, { Suspense, lazy } from 'react';
import styles from './App.module.scss';
import Navigator from '../Nav';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Header from '../Header/';
import { initialized } from '../../Redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from '../../elements/Preloader';
import { Provider } from 'react-redux';
import store from '../../Redux/redux-store';
const Dialogs = lazy(() => import('../Pages/Dialogs/'));
const Profile = lazy(() => import('../Pages/Profile/'));
const Login = lazy(() => import('../Pages/Login/'));
const Settings = lazy(() => import('../Pages/Settings/'));
const Musics = lazy(() => import('../Pages/Musics/'));
const Users = lazy(() => import('../Pages/Users/'));
const News = lazy(() => import('../Pages/News/'));

class App extends React.Component {
  componentDidMount() {
    this.props.initialized();
  }
  render() {
    if (!this.props.initializate) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <div className={styles.body}>
              <Header />
              <Navigator />
              <Switch>
                <Route path="/profile/:userId?" render={() => <Profile />} />
                <Route path="/dialogs" render={() => <Dialogs />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/musics" render={() => <Musics />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/login" render={() => <Login />} />
                <Redirect from="/" to="/profile" />
              </Switch>
          </div>
        </Suspense>
      </BrowserRouter>

    )
  }

}
const mapStateToProps = (state) => ({
  initializate: state.app.initializate
})

const AppContainer = connect(mapStateToProps, { initialized })(App);

const MyContentAPP = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
export default MyContentAPP;


