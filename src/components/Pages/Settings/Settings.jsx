import React from 'react';
import styles from './Settings.module.sass';
import SettingsHeader from './SettingssHeader';


const Settings = () => {
    return (
        <div className={styles.content}>
            <SettingsHeader />
        </div>
    );
} 

export default Settings;