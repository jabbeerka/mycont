import React from 'react';
import styles from './Nav.module.sass'


const Navigator = ({url}) => {
    return(
        <div className={styles.nav}>
        <div><a href='/profile'>Profile</a></div>
        <div><a href='/dialogs'>Dialogs</a></div>
        <div><a href='/news' >News</a></div>
        <div><a href='/musics' >Musics</a></div>
        <div><a href='/settings'>Settings</a></div>
      </div>
    )
    
}
export default Navigator;