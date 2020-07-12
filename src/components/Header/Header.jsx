import React from 'react';
import styles from './Header.module.sass';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
        <img
        src={logo}
        className={styles.logo}
        alt="header" />
        </div>
    )
}
export default Header;