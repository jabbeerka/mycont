import React from 'react';
import styles from './Header.module.sass';

const Header = () => {
    return (
        <div className={styles.header}>
        <img
        src="https://d.radikal.ru/d20/2006/92/33c0a53ae79b.png"
        className={styles.logo}
        alt="header" />
        </div>
    )
}
export default Header;