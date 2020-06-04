import React from 'react';
import styles from './Nav.module.sass'


const Navigator = ({url}) => {
    return(
        <div className={styles.nav}>
        <div><a href='/profile'>Profile</a></div>
        <div><a href='/dialogs'>Dialogs</a></div>
        <div><a href={url} >News</a></div>
        <div><a href={url} >Musics</a></div>
        <div><a href={url} >Settings</a></div>
      </div>
    )
    
}
export default Navigator;