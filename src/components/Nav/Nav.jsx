import React from 'react';
import styles from './Nav.module.sass';
import { NavLink } from 'react-router-dom';


const Navigator = ({url}) => {
    return(
        <div className={styles.nav}>
        <div className={styles.link}><NavLink to='/profile' activeClassName= {styles.active}>Profile</NavLink></div>
        <div className={styles.link}><NavLink to='/dialogs' activeClassName= {styles.active}>Dialogs</NavLink></div>
        <div className={styles.link}><NavLink to='/news' activeClassName= {styles.active}>News</NavLink></div>
        <div className={styles.link}><NavLink to='/musics' activeClassName= {styles.active}>Musics</NavLink></div>
        <div className={styles.link}><NavLink to='/settings' activeClassName= {styles.active}>Settings</NavLink></div>
      </div>
    )
    
}
export default Navigator;