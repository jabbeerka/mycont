import React from 'react';
import styles from './Header.module.sass';

const Header = () => {
    return (
        <div className={styles.header}>
        <img
        src="https://b.radikal.ru/b42/2006/c4/9adcba91f63a.png"
        className={styles.logo}
        alt="header" />
        </div>
    )
}
export default Header;