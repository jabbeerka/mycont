import React from 'react';
import styles from './Header.module.sass';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img
            src={logo}
            className={styles.logo}
            alt="header" />
            <div className={styles.login_block}>
                { props.isAuth ? <NavLink to={'/profile/' +props.userId }> {props.login} </NavLink> : 
                <NavLink to={'/login'}> Login </NavLink>
                 }  
            </div>
        </div>
    )
}
export default Header;