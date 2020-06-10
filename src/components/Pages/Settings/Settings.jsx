import React from 'react';
import styles from './Settings.module.sass';


const Settings = ({header} ) => {
    return (
        <div className={styles.content}>
            <img src={header.imgs[4].bgimage} alt="bgimage" className={styles.img}/>
        </div>
    );
} 

export default Settings;