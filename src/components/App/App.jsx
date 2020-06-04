import React from 'react';
import styles from './App.module.scss'
import Navigator from '../Nav'
import Header from '../Header'
import Profile from '../Profile'



function App() {
  return (
    <div className={styles.body}>
      <Header
      src="https://d.radikal.ru/d20/2006/92/33c0a53ae79b.png"/>
      <Navigator/>
      <Profile/>
    </div>
    
  )
}

export default App;
