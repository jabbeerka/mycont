import React from 'react';
import styles from './Settings.module.sass';

const Settings = (props) => {
    return (
            <div className={styles.content}>
                <img src={props.header} alt="header" className={styles.img}/>
            </div>
            )
} 

export default Settings;