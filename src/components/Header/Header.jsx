import React from 'react';
import styles from './Header.module.sass';

const Header = ({src}) => {
    return (
        <div className={styles.header}>
        <img
        src={src}
        className={styles.logo}
        alt="header" />
        </div>
    )
}
export default Header;