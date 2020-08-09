import React from 'react';
import styles from './Settings.module.sass';
import header from '../../../images/settings-header.png';

const Settings = () => {
    return (
        <div className={styles.content}>
            <img src={header} alt="header" className={styles.img} />
        </div>
    )
}

export default Settings;